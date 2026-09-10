// The widget vocabulary of WebKit2-5.0 as runtime data.
//
// GENERATED — do not edit. Provenance: WebKit2-5.0 — library 2.38.5 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'WebKit2',
    version: '5.0',
    libraryVersion: '2.38.5',
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    WebKitWebView: ['automation-presentation-type', 'camera-capture-state', 'default-content-security-policy', 'display-capture-state', 'editable', 'is-controlled-by-automation', 'is-ephemeral', 'is-muted', 'microphone-capture-state', 'related-view', 'settings', 'user-content-manager', 'web-context', 'web-extension-mode', 'website-policies', 'zoom-level'],
};

export const OWN_SIGNALS = {
    WebKitWebView: ['authenticate', 'close', 'context-menu', 'context-menu-dismissed', 'create', 'decide-policy', 'enter-fullscreen', 'insecure-content-detected', 'leave-fullscreen', 'load-changed', 'load-failed', 'load-failed-with-tls-errors', 'mouse-target-changed', 'permission-request', 'print', 'ready-to-show', 'resource-load-started', 'run-as-modal', 'run-color-chooser', 'run-file-chooser', 'script-dialog', 'show-notification', 'show-option-menu', 'submit-form', 'user-message-received', 'web-process-crashed', 'web-process-terminated'],
};

export const DECLS = {
    WebKitWebView: ['WebKitWebView', 'WebKitWebViewBase', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    WebKitWebViewBase: ['WebKitWebViewBase', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
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
    WebKitHardwareAccelerationPolicy: ['on-demand', 'always', 'never'],
    WebKitInputPurpose: ['free-form', 'digits', 'number', 'phone', 'url', 'email', 'password'],
    WebKitInsecureContentEvent: ['run', 'displayed'],
    WebKitLoadEvent: ['started', 'redirected', 'committed', 'finished'],
    WebKitMediaCaptureState: ['none', 'active', 'muted'],
    WebKitNavigationType: ['link-clicked', 'form-submitted', 'back-forward', 'reload', 'form-resubmitted', 'other'],
    WebKitNetworkProxyMode: ['default', 'no-proxy', 'custom'],
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
};

// The number behind each of those nicks, read from GIR's own `value` attribute.
//
// It ships because position in `ENUM_NICKS` is not the value and a consumer with no
// typelib has no other way to learn it: a surface without GI still has to hand GObject an
// integer. The alternative a consumer reaches for first is counting, and counting is wrong
// on 6 of the 129 enums a GTK 4 vocabulary carries (104 in Gtk-4.0, 25 in Adw-1) --
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
    'WebKitHardwareAccelerationPolicy.always': 1,
    'WebKitHardwareAccelerationPolicy.never': 2,
    'WebKitHardwareAccelerationPolicy.on-demand': 0,
    'WebKitInputPurpose.digits': 1,
    'WebKitInputPurpose.email': 5,
    'WebKitInputPurpose.free-form': 0,
    'WebKitInputPurpose.number': 2,
    'WebKitInputPurpose.password': 6,
    'WebKitInputPurpose.phone': 3,
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
    'WebKitPolicyDecisionType.navigation-action': 0,
    'WebKitPolicyDecisionType.new-window-action': 1,
    'WebKitPolicyDecisionType.response': 2,
    'WebKitPrintOperationResponse.cancel': 1,
    'WebKitPrintOperationResponse.print': 0,
    'WebKitProcessModel.multiple-secondary-processes': 1,
    'WebKitProcessModel.shared-secondary-process': 0,
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
// reason says nothing about one member's number. 21 writable widget properties in Gtk-4.0
// and Adw-1 are bitfield-typed -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`,
// `AdwTabView:shortcuts`, ... -- and they are typed bare `number`, so a host without GI
// has nothing to compute one from. Counting is worst exactly here: 95 of 121 Gtk-4.0
// bitfield members disagree with their position, against 29 of 685 enumeration members.
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
    'WebKitWebsiteDataTypes.all': 16383,
    'WebKitWebsiteDataTypes.cookies': 256,
    'WebKitWebsiteDataTypes.device-id-hash-salt': 512,
    'WebKitWebsiteDataTypes.disk-cache': 2,
    'WebKitWebsiteDataTypes.dom-cache': 8192,
    'WebKitWebsiteDataTypes.hsts-cache': 1024,
    'WebKitWebsiteDataTypes.indexeddb-databases': 64,
    'WebKitWebsiteDataTypes.itp': 2048,
    'WebKitWebsiteDataTypes.local-storage': 16,
    'WebKitWebsiteDataTypes.memory-cache': 1,
    'WebKitWebsiteDataTypes.offline-application-cache': 4,
    'WebKitWebsiteDataTypes.plugin-data': 128,
    'WebKitWebsiteDataTypes.service-worker-registrations': 4096,
    'WebKitWebsiteDataTypes.session-storage': 8,
    'WebKitWebsiteDataTypes.websql-databases': 32,
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
// that OWNS an enum publishes it, so 57 of the 438 entries a full run emits want the owner's
// vocabulary loaded too. Owners that emit none (Gdk, Pango) are inlined into the tables above.
export const PROP_ENUMS = {
    'WebKitWebView.automation-presentation-type': 'WebKitAutomationBrowsingContextPresentation',
    'WebKitWebView.camera-capture-state': 'WebKitMediaCaptureState',
    'WebKitWebView.display-capture-state': 'WebKitMediaCaptureState',
    'WebKitWebView.microphone-capture-state': 'WebKitMediaCaptureState',
    'WebKitWebView.web-extension-mode': 'WebKitWebExtensionMode',
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
    'WebKitWebView.microphone-capture-state': '2.34',
    'WebKitWebView.related-view': '2.4',
    'WebKitWebView.settings': '2.6',
    'WebKitWebView.user-content-manager': '2.6',
    'WebKitWebView.web-extension-mode': '2.38',
    'WebKitWebView.website-policies': '2.30',
    'WebKitWebView::authenticate': '2.2',
    'WebKitWebView::load-failed-with-tls-errors': '2.6',
    'WebKitWebView::run-color-chooser': '2.8',
    'WebKitWebView::show-notification': '2.8',
    'WebKitWebView::show-option-menu': '2.18',
    'WebKitWebView::user-message-received': '2.28',
    'WebKitWebView::web-process-terminated': '2.20',
};
