/**
 * The GIR-derived widget VOCABULARY for WebKit2-4.0.
 *
 * GENERATED — do not edit. Provenance: WebKit2-4.0 — library 2.47.2 — dropped empty base(s): Atk.ImplementorIface
 *
 * 49 instantiable GTypes (of which 2 concrete widgets), 51 declarations, 29 enum nick unions, 0 slot candidates.
 *
 * Module-scoped exports only. There is no `JSX` namespace here, no tag spelling and
 * no `on<Signal>` prop name: those are DIALECT, and every framework answers them
 * differently. The shape to avoid is the GLOBAL AUGMENT — a `declare global` on
 * `React.JSX` collides with every other library on a shared tag — while a
 * module-scoped `JSX` behind a `jsxImportSource` does not. This package is used by
 * projects that want nothing to do with JSX, so it emits neither; a consumer declaring
 * a module-scoped namespace over these names is doing it right.
 *
 * Three things this is and `ConstructorProps` is not: WRITABLE-only (measured on
 * Gtk-4.0, `ConstructorProps` offers 150 read-only properties across 68 classes as
 * settable, and GTK's failure mode for writing one is exit 0), OPTIONAL, and keyed
 * by the name GObject actually REGISTERED — the dashed spelling `g_object_set`,
 * GtkBuilder XML and Blueprint all use.
 *
 * Signal handler types are not re-derived: `X.SignalSignatures`, which this package
 * already emits for every class with the parent chain, every implemented interface
 * and the `notify::` keys folded in, is what `Widgets[G]['signals']` points at.
 */

import type GLib from '@girs/glib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type Gio from '@girs/gio-2.0';
import type Gtk from '@girs/gtk-3.0';
import type WebKit2 from './webkit2-4.0.js';
import type { GInitiallyUnownedConstructOnly, GInitiallyUnownedProps, GObjectConstructOnly, GObjectProps } from '@girs/gobject-2.0/vocabulary';
import type { GtkBuildableConstructOnly, GtkBuildableProps, GtkContainerConstructOnly, GtkContainerProps, GtkWidgetConstructOnly, GtkWidgetProps } from '@girs/gtk-3.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type WebKitAuthenticationSchemeNick = 'default' | 'http-basic' | 'http-digest' | 'html-form' | 'ntlm' | 'negotiate' | 'client-certificate-requested' | 'server-trust-evaluation-requested' | 'client-certificate-pin-requested' | 'unknown';
export type WebKitAutomationBrowsingContextPresentationNick = 'window' | 'tab';
export type WebKitAutoplayPolicyNick = 'allow' | 'allow-without-sound' | 'deny';
export type WebKitCacheModelNick = 'document-viewer' | 'web-browser' | 'document-browser';
export type WebKitContextMenuActionNick = 'no-action' | 'open-link' | 'open-link-in-new-window' | 'download-link-to-disk' | 'copy-link-to-clipboard' | 'open-image-in-new-window' | 'download-image-to-disk' | 'copy-image-to-clipboard' | 'copy-image-url-to-clipboard' | 'open-frame-in-new-window' | 'go-back' | 'go-forward' | 'stop' | 'reload' | 'copy' | 'cut' | 'paste' | 'delete' | 'select-all' | 'input-methods' | 'unicode' | 'spelling-guess' | 'no-guesses-found' | 'ignore-spelling' | 'learn-spelling' | 'ignore-grammar' | 'font-menu' | 'bold' | 'italic' | 'underline' | 'outline' | 'inspect-element' | 'open-video-in-new-window' | 'open-audio-in-new-window' | 'copy-video-link-to-clipboard' | 'copy-audio-link-to-clipboard' | 'toggle-media-controls' | 'toggle-media-loop' | 'enter-video-fullscreen' | 'media-play' | 'media-pause' | 'media-mute' | 'download-video-to-disk' | 'download-audio-to-disk' | 'insert-emoji' | 'paste-as-plain-text' | 'custom';
export type WebKitCookieAcceptPolicyNick = 'always' | 'never' | 'no-third-party';
export type WebKitCookiePersistentStorageNick = 'text' | 'sqlite';
export type WebKitCredentialPersistenceNick = 'none' | 'for-session' | 'permanent';
export type WebKitFeatureStatusNick = 'embedder' | 'unstable' | 'internal' | 'developer' | 'testable' | 'preview' | 'stable' | 'mature';
export type WebKitHardwareAccelerationPolicyNick = 'on-demand' | 'always' | 'never';
export type WebKitInputPurposeNick = 'free-form' | 'digits' | 'number' | 'phone' | 'url' | 'email' | 'password';
export type WebKitInsecureContentEventNick = 'run' | 'displayed';
export type WebKitLoadEventNick = 'started' | 'redirected' | 'committed' | 'finished';
export type WebKitMediaCaptureStateNick = 'none' | 'active' | 'muted';
export type WebKitNavigationTypeNick = 'link-clicked' | 'form-submitted' | 'back-forward' | 'reload' | 'form-resubmitted' | 'other';
export type WebKitNetworkProxyModeNick = 'default' | 'no-proxy' | 'custom';
export type WebKitPermissionStateNick = 'granted' | 'denied' | 'prompt';
export type WebKitPolicyDecisionTypeNick = 'navigation-action' | 'new-window-action' | 'response';
export type WebKitPrintOperationResponseNick = 'print' | 'cancel';
export type WebKitProcessModelNick = 'shared-secondary-process' | 'multiple-secondary-processes';
export type WebKitSaveModeNick = 'mhtml';
export type WebKitScriptDialogTypeNick = 'alert' | 'confirm' | 'prompt' | 'before-unload-confirm';
export type WebKitSnapshotRegionNick = 'visible' | 'full-document';
export type WebKitTLSErrorsPolicyNick = 'ignore' | 'fail';
export type WebKitUserContentInjectedFramesNick = 'all-frames' | 'top-frame';
export type WebKitUserScriptInjectionTimeNick = 'start' | 'end';
export type WebKitUserStyleLevelNick = 'user' | 'author';
export type WebKitWebExtensionModeNick = 'none' | 'manifestv2' | 'manifestv3';
export type WebKitWebProcessTerminationReasonNick = 'crashed' | 'exceeded-memory-limit' | 'terminated-by-api';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** Represents an authentication request. */
export interface WebKitAuthenticationRequestProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitAuthenticationRequestConstructOnly = GObjectConstructOnly;

/** Automation Session. */
export interface WebKitAutomationSessionProps extends GObjectProps {
    /**
     * The session unique identifier.
     * @since 2.18
     * @default NULL
     */
    id?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitAutomationSessionConstructOnly = GObjectConstructOnly | 'id';

/** List of visited pages. */
export interface WebKitBackForwardListProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitBackForwardListConstructOnly = GObjectConstructOnly;

/** One item of the #WebKitBackForwardList. */
export interface WebKitBackForwardListItemProps extends GInitiallyUnownedProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitBackForwardListItemConstructOnly = GInitiallyUnownedConstructOnly;

/** A permission request for reading clipboard contents. */
export interface WebKitClipboardPermissionRequestProps extends GObjectProps, WebKitPermissionRequestProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitClipboardPermissionRequestConstructOnly = GObjectConstructOnly | WebKitPermissionRequestConstructOnly;

/** A request to open a color chooser. */
export interface WebKitColorChooserRequestProps extends GObjectProps {
    /**
     * The #GdkRGBA color of the request
     * @since 2.8
     */
    rgba?: Gdk.RGBA;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitColorChooserRequestConstructOnly = GObjectConstructOnly;

/** Represents the context menu in a #WebKitWebView. */
export interface WebKitContextMenuProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitContextMenuConstructOnly = GObjectConstructOnly;

/** One item of a #WebKitContextMenu. */
export interface WebKitContextMenuItemProps extends GInitiallyUnownedProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitContextMenuItemConstructOnly = GInitiallyUnownedConstructOnly;

/** Defines how to handle cookies in a #WebKitWebContext. */
export interface WebKitCookieManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitCookieManagerConstructOnly = GObjectConstructOnly;

/** A permission request for accessing user's audio/video devices. */
export interface WebKitDeviceInfoPermissionRequestProps extends GObjectProps, WebKitPermissionRequestProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDeviceInfoPermissionRequestConstructOnly = GObjectConstructOnly | WebKitPermissionRequestConstructOnly;

/** Object used to communicate with the application when downloading. */
export interface WebKitDownloadProps extends GObjectProps {
    /**
     * Whether or not the download is allowed to overwrite an existing file on disk.
     * @since 2.6
     * @default FALSE
     */
    'allow-overwrite'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitDownloadConstructOnly = GObjectConstructOnly;

/** Web editor state. */
export interface WebKitEditorStateProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitEditorStateConstructOnly = GObjectConstructOnly;

/** Provides access to the icons associated with web sites. */
export interface WebKitFaviconDatabaseProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitFaviconDatabaseConstructOnly = GObjectConstructOnly;

/** A request to open a file chooser. */
export interface WebKitFileChooserRequestProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitFileChooserRequestConstructOnly = GObjectConstructOnly;

/** Controls text search in a #WebKitWebView. */
export interface WebKitFindControllerProps extends GObjectProps {
    /** The #WebKitWebView this controller is associated to. */
    'web-view'?: WebKit2.WebView;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitFindControllerConstructOnly = GObjectConstructOnly | 'web-view';

/** Represents a form submission request. */
export interface WebKitFormSubmissionRequestProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitFormSubmissionRequestConstructOnly = GObjectConstructOnly;

/** Geolocation manager. */
export interface WebKitGeolocationManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitGeolocationManagerConstructOnly = GObjectConstructOnly;

/** A permission request for sharing the user's location. */
export interface WebKitGeolocationPermissionRequestProps extends GObjectProps, WebKitPermissionRequestProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitGeolocationPermissionRequestConstructOnly = GObjectConstructOnly | WebKitPermissionRequestConstructOnly;

/** Result of a Hit Test. */
export interface WebKitHitTestResultProps extends GObjectProps {
    /**
     * Bitmask of #WebKitHitTestResultContext flags representing the context of the #WebKitHitTestResult.
     * @default 0
     */
    context?: number;
    /**
     * The URI of the image if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_IMAGE is present in #WebKitHitTestResult:context
     * @default NULL
     */
    'image-uri'?: string;
    /**
     * The label of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK is present in #WebKitHitTestResult:context
     * @default NULL
     */
    'link-label'?: string;
    /**
     * The title of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK is present in #WebKitHitTestResult:context
     * @default NULL
     */
    'link-title'?: string;
    /**
     * The URI of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK is present in #WebKitHitTestResult:context
     * @default NULL
     */
    'link-uri'?: string;
    /**
     * The URI of the media if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_MEDIA is present in #WebKitHitTestResult:context
     * @default NULL
     */
    'media-uri'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitHitTestResultConstructOnly = GObjectConstructOnly | 'context' | 'image-uri' | 'link-label' | 'link-title' | 'link-uri' | 'media-uri';

/** Previously, a permission request for installing missing media plugins. */
export interface WebKitInstallMissingMediaPluginsPermissionRequestProps extends GObjectProps, WebKitPermissionRequestProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitInstallMissingMediaPluginsPermissionRequestConstructOnly = GObjectConstructOnly | WebKitPermissionRequestConstructOnly;

/** A permission request for using an EME Content Decryption Module. */
export interface WebKitMediaKeySystemPermissionRequestProps extends GObjectProps, WebKitPermissionRequestProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitMediaKeySystemPermissionRequestConstructOnly = GObjectConstructOnly | WebKitPermissionRequestConstructOnly;

/** A policy decision for navigation actions. */
export interface WebKitNavigationPolicyDecisionProps extends WebKitPolicyDecisionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitNavigationPolicyDecisionConstructOnly = WebKitPolicyDecisionConstructOnly;

/** Holds information about a notification that should be shown to the user. */
export interface WebKitNotificationProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitNotificationConstructOnly = GObjectConstructOnly;

/** A permission request for displaying web notifications. */
export interface WebKitNotificationPermissionRequestProps extends GObjectProps, WebKitPermissionRequestProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitNotificationPermissionRequestConstructOnly = GObjectConstructOnly | WebKitPermissionRequestConstructOnly;

/** Represents the dropdown menu of a `select` element in a #WebKitWebView. */
export interface WebKitOptionMenuProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitOptionMenuConstructOnly = GObjectConstructOnly;

/** A permission request. */
export interface WebKitPermissionRequestProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitPermissionRequestConstructOnly = GObjectConstructOnly;

/** Represents a plugin, enabling fine-grained control. */
export interface WebKitPluginProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitPluginConstructOnly = GObjectConstructOnly;

/** A permission request for locking the pointer. */
export interface WebKitPointerLockPermissionRequestProps extends GObjectProps, WebKitPermissionRequestProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitPointerLockPermissionRequestConstructOnly = GObjectConstructOnly | WebKitPermissionRequestConstructOnly;

/** A pending policy decision. */
export interface WebKitPolicyDecisionProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitPolicyDecisionConstructOnly = GObjectConstructOnly;

/** Allows to embed a custom widget in print dialog. */
export interface WebKitPrintCustomWidgetProps extends GObjectProps {
    /**
     * The title of the custom widget.
     * @since 2.16
     * @default NULL
     * @deprecated since 2.40
     */
    title?: string;
    /**
     * The custom #GtkWidget that will be embedded in the dialog.
     * @since 2.16
     * @deprecated since 2.40
     */
    widget?: Gtk.Widget;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitPrintCustomWidgetConstructOnly = GObjectConstructOnly | 'title' | 'widget';

/** Controls a print operation. */
export interface WebKitPrintOperationProps extends GObjectProps {
    /** The initial #GtkPageSetup for the print operation. */
    'page-setup'?: Gtk.PageSetup;
    /** The initial #GtkPrintSettings for the print operation. */
    'print-settings'?: Gtk.PrintSettings;
    /** The #WebKitWebView that will be printed. */
    'web-view'?: WebKit2.WebView;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitPrintOperationConstructOnly = GObjectConstructOnly | 'web-view';

/** A policy decision for resource responses. */
export interface WebKitResponsePolicyDecisionProps extends WebKitPolicyDecisionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitResponsePolicyDecisionConstructOnly = WebKitPolicyDecisionConstructOnly;

/** Controls security settings in a #WebKitWebContext. */
export interface WebKitSecurityManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitSecurityManagerConstructOnly = GObjectConstructOnly;

/** Control the behaviour of a #WebKitWebView. */
export interface WebKitSettingsProps extends GObjectProps {
    /**
     * Whether file access is allowed from file URLs.
     * @since 2.10
     * @default FALSE
     */
    'allow-file-access-from-file-urls'?: boolean;
    /**
     * Determine whether it's allowed to create and run modal dialogs from a #WebKitWebView through JavaScript with <function>window.showModalDialog</function>.
     * @default FALSE
     */
    'allow-modal-dialogs'?: boolean;
    /**
     * Whether or not the top frame is allowed to navigate to data URLs.
     * @since 2.28
     * @default FALSE
     */
    'allow-top-navigation-to-data-urls'?: boolean;
    /**
     * Whether or not JavaScript running in the context of a file scheme URL should be allowed to access content from any origin.
     * @since 2.14
     * @default FALSE
     */
    'allow-universal-access-from-file-urls'?: boolean;
    /**
     * Determines whether images should be automatically loaded or not.
     * @default TRUE
     */
    'auto-load-images'?: boolean;
    /**
     * The font family used as the default for content using a cursive font.
     * @default serif
     */
    'cursive-font-family'?: string;
    /**
     * The default text charset used when interpreting content with an unspecified charset.
     * @default iso-8859-1
     */
    'default-charset'?: string;
    /**
     * The font family to use as the default for content that does not specify a font.
     * @default sans-serif
     */
    'default-font-family'?: string;
    /**
     * The default font size in pixels to use for content displayed if no font size is specified.
     * @default 16
     */
    'default-font-size'?: number;
    /**
     * The default font size in pixels to use for content displayed in monospace font if no font size is specified.
     * @default 13
     */
    'default-monospace-font-size'?: number;
    /**
     * Enable or disable support for Web Security on pages.
     * @since 2.40
     * @default FALSE
     */
    'disable-web-security'?: boolean;
    /**
     * Whether to draw compositing borders and repaint counters on layers drawn with accelerated compositing.
     * @default FALSE
     */
    'draw-compositing-indicators'?: boolean;
    /**
     * Enable or disable 2D canvas acceleration.
     * @since 2.46
     * @default TRUE
     */
    'enable-2d-canvas-acceleration'?: boolean;
    /**
     * Enable or disable accelerated 2D canvas.
     * @since 2.2
     * @default FALSE
     * @deprecated since 2.32.
     */
    'enable-accelerated-2d-canvas'?: boolean;
    /**
     * Enable or disable horizontal swipe gesture for back-forward navigation.
     * @since 2.24
     * @default FALSE
     */
    'enable-back-forward-navigation-gestures'?: boolean;
    /**
     * Whether to enable accessibility enhanced keyboard navigation.
     * @default FALSE
     */
    'enable-caret-browsing'?: boolean;
    /**
     * Determines whether or not developer tools, such as the Web Inspector, are enabled.
     * @default FALSE
     */
    'enable-developer-extras'?: boolean;
    /**
     * Determines whether or not to prefetch domain names.
     * @default FALSE
     */
    'enable-dns-prefetching'?: boolean;
    /**
     * Enable or disable support for Encrypted Media API on pages.
     * @since 2.20
     * @default FALSE
     */
    'enable-encrypted-media'?: boolean;
    /**
     * Frame flattening is no longer supported.
     * @default FALSE
     * @deprecated since 2.38
     */
    'enable-frame-flattening'?: boolean;
    /**
     * Whether to enable the Javascript Fullscreen API.
     * @default TRUE
     */
    'enable-fullscreen'?: boolean;
    /**
     * Whether to enable HTML5 client-side SQL database support (IndexedDB).
     * @default TRUE
     */
    'enable-html5-database'?: boolean;
    /**
     * Whether to enable HTML5 local storage support.
     * @default TRUE
     */
    'enable-html5-local-storage'?: boolean;
    /**
     * Determines whether or not hyperlink auditing is enabled.
     * @default TRUE
     */
    'enable-hyperlink-auditing'?: boolean;
    /**
     * Determines whether or not Java is enabled on the page.
     * @default FALSE
     * @deprecated since 2.38
     */
    'enable-java'?: boolean;
    /**
     * Determines whether or not JavaScript executes within a page.
     * @default TRUE
     */
    'enable-javascript'?: boolean;
    /**
     * Determines whether or not JavaScript markup is allowed in document.
     * @since 2.24
     * @default TRUE
     */
    'enable-javascript-markup'?: boolean;
    /**
     * Enable or disable support for media playback on pages.
     * @since 2.26
     * @default TRUE
     */
    'enable-media'?: boolean;
    /**
     * Enable or disable support for MediaCapabilities on pages.
     * @since 2.22
     * @default FALSE
     */
    'enable-media-capabilities'?: boolean;
    /**
     * Enable or disable support for MediaStream on pages.
     * @since 2.4
     * @default TRUE
     */
    'enable-media-stream'?: boolean;
    /**
     * Enable or disable support for MediaSource on pages.
     * @since 2.4
     * @default TRUE
     */
    'enable-mediasource'?: boolean;
    /**
     * Enable or disable the Mock Capture Devices.
     * @since 2.24
     * @default FALSE
     */
    'enable-mock-capture-devices'?: boolean;
    /**
     * Unsupported setting.
     * @default FALSE
     * @deprecated since 2.44
     */
    'enable-offline-web-application-cache'?: boolean;
    /**
     * Enable or disable the page cache.
     * @default TRUE
     */
    'enable-page-cache'?: boolean;
    /**
     * Determines whether or not plugins on the page are enabled.
     * @default FALSE
     * @deprecated since 2.32
     */
    'enable-plugins'?: boolean;
    /**
     * Determines whether or not private browsing is enabled.
     * @default FALSE
     * @deprecated since 2.16.: Use #WebKitWebView:is-ephemeral or #WebKitWebsiteDataManager:is-ephemeral instead.
     */
    'enable-private-browsing'?: boolean;
    /**
     * Determines whether or not text areas can be resized.
     * @default TRUE
     */
    'enable-resizable-text-areas'?: boolean;
    /**
     * Whether to turn on site-specific quirks.
     * @default TRUE
     */
    'enable-site-specific-quirks'?: boolean;
    /**
     * Enable or disable smooth scrolling.
     * @default TRUE
     */
    'enable-smooth-scrolling'?: boolean;
    /**
     * Whether to enable Spatial Navigation.
     * @since 2.4
     * @default FALSE
     */
    'enable-spatial-navigation'?: boolean;
    /**
     * Determines whether the tab key cycles through the elements on the page.
     * @default TRUE
     */
    'enable-tabs-to-links'?: boolean;
    /**
     * Enable or disable support for WebAudio on pages.
     * @default TRUE
     */
    'enable-webaudio'?: boolean;
    /**
     * Enable or disable support for WebGL on pages.
     * @default TRUE
     */
    'enable-webgl'?: boolean;
    /**
     * Enable WebRTC support for loaded pages.
     * @since 2.38
     * @default FALSE
     */
    'enable-webrtc'?: boolean;
    /**
     * Enable or disable writing console messages to stdout.
     * @since 2.2
     * @default FALSE
     */
    'enable-write-console-messages-to-stdout'?: boolean;
    /**
     * Whether to enable the XSS auditor.
     * @default TRUE
     * @deprecated since 2.38
     */
    'enable-xss-auditor'?: boolean;
    /**
     * The font family used as the default for content using a fantasy font.
     * @default serif
     */
    'fantasy-font-family'?: string;
    /**
     * The #WebKitHardwareAccelerationPolicy to decide how to enable and disable hardware acceleration.
     * @since 2.16
     * @default WEBKIT_HARDWARE_ACCELERATION_POLICY_ALWAYS
     */
    'hardware-acceleration-policy'?: WebKitHardwareAccelerationPolicyNick | WebKit2.HardwareAccelerationPolicy;
    /**
     * Whether JavaScript can access the clipboard.
     * @default FALSE
     */
    'javascript-can-access-clipboard'?: boolean;
    /**
     * Whether JavaScript can open popup windows automatically without user intervention.
     * @default FALSE
     */
    'javascript-can-open-windows-automatically'?: boolean;
    /**
     * Unsupported setting.
     * @default FALSE
     * @deprecated since 2.42
     */
    'load-icons-ignoring-image-load-setting'?: boolean;
    /**
     * List of media content types requiring hardware support, split by semicolons (:).
     * @since 2.30
     * @default NULL
     */
    'media-content-types-requiring-hardware-support'?: string;
    /**
     * Whether media playback is full-screen only or inline playback is allowed.
     * @default TRUE
     */
    'media-playback-allows-inline'?: boolean;
    /**
     * Whether a user gesture (such as clicking the play button) would be required to start media playback or load media.
     * @default FALSE
     */
    'media-playback-requires-user-gesture'?: boolean;
    /**
     * The minimum font size in pixels used to display text.
     * @default 0
     */
    'minimum-font-size'?: number;
    /**
     * The font family used as the default for content using a monospace font.
     * @default monospace
     */
    'monospace-font-family'?: string;
    /**
     * The font family used as the default for content using a pictograph font.
     * @default serif
     */
    'pictograph-font-family'?: string;
    /**
     * Whether background images should be drawn during printing.
     * @default TRUE
     */
    'print-backgrounds'?: boolean;
    /**
     * The font family used as the default for content using a sans-serif font.
     * @default sans-serif
     */
    'sans-serif-font-family'?: string;
    /**
     * The font family used as the default for content using a serif font.
     * @default serif
     */
    'serif-font-family'?: string;
    /**
     * The user-agent string used by WebKit.
     * @default NULL
     */
    'user-agent'?: string;
    /**
     * Allow customization of the WebRTC UDP ports range.
     * @since 2.48
     * @default NULL
     */
    'webrtc-udp-ports-range'?: string;
    /**
     * Whether #WebKitWebView:zoom-level affects only the text of the page or all the contents.
     * @default FALSE
     */
    'zoom-text-only'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitSettingsConstructOnly = GObjectConstructOnly;

/** Represents a URI request. */
export interface WebKitURIRequestProps extends GObjectProps {
    /**
     * The URI to which the request will be made.
     * @default about:blank
     */
    uri?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitURIRequestConstructOnly = GObjectConstructOnly;

/** Represents an URI response. */
export interface WebKitURIResponseProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitURIResponseConstructOnly = GObjectConstructOnly;

/** Represents a URI scheme request. */
export interface WebKitURISchemeRequestProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitURISchemeRequestConstructOnly = GObjectConstructOnly;

/** Represents a URI scheme response. */
export interface WebKitURISchemeResponseProps extends GObjectProps {
    /**
     * The input stream to read from.
     * @since 2.36
     */
    stream?: Gio.InputStream;
    /**
     * The input stream length in bytes, `-1` for unknown length.
     * @since 2.36
     * @default -1
     */
    'stream-length'?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitURISchemeResponseConstructOnly = GObjectConstructOnly | 'stream' | 'stream-length';

/** Handles storage of user content filters on disk. */
export interface WebKitUserContentFilterStoreProps extends GObjectProps {
    /**
     * The directory used for filter storage.
     * @since 2.24
     * @default NULL
     */
    path?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitUserContentFilterStoreConstructOnly = GObjectConstructOnly | 'path';

/** Manages user-defined content which affects web pages. */
export interface WebKitUserContentManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitUserContentManagerConstructOnly = GObjectConstructOnly;

/** A permission request for accessing user's audio/video devices. */
export interface WebKitUserMediaPermissionRequestProps extends GObjectProps, WebKitPermissionRequestProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitUserMediaPermissionRequestConstructOnly = GObjectConstructOnly | WebKitPermissionRequestConstructOnly;

/** Message that can be sent between the UI process and web process extensions. */
export interface WebKitUserMessageProps extends GInitiallyUnownedProps {
    /**
     * The UNIX file descriptors of the user message.
     * @since 2.28
     */
    'fd-list'?: Gio.UnixFDList | null;
    /**
     * The name of the user message.
     * @since 2.28
     * @default NULL
     */
    name?: string;
    /**
     * The parameters of the user message as a #GVariant, or %NULL if the message doesn't include parameters.
     * @since 2.28
     */
    parameters?: GLib.Variant | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitUserMessageConstructOnly = GInitiallyUnownedConstructOnly | 'fd-list' | 'name' | 'parameters';

/** Manages aspects common to all #WebKitWebView<!-- -->s The #WebKitWebContext manages all aspects common to all #WebKitWebView<!-- -->s. */
export interface WebKitWebContextProps extends GObjectProps {
    /**
     * The directory where local storage data will be saved.
     * @since 2.8
     * @default NULL
     * @deprecated since 2.10.: Use #WebKitWebsiteDataManager:local-storage-directory instead.
     */
    'local-storage-directory'?: string;
    /**
     * The #WebKitMemoryPressureSettings applied to the web processes created by this context.
     * @since 2.34
     */
    'memory-pressure-settings'?: WebKit2.MemoryPressureSettings;
    /**
     * Whether swap Web processes on cross-site navigations is enabled.
     * @since 2.28
     * @default FALSE
     */
    'process-swap-on-cross-site-navigation-enabled'?: boolean;
    /**
     * The timezone override for this web context.
     * @since 2.38
     * @default NULL
     */
    'time-zone-override'?: string;
    /**
     * Whether to use system appearance for rendering scrollbars.
     * @since 2.30
     * @default FALSE
     * @deprecated since 2.46
     */
    'use-system-appearance-for-scrollbars'?: boolean;
    /**
     * The #WebKitWebsiteDataManager associated with this context.
     * @since 2.10
     */
    'website-data-manager'?: WebKit2.WebsiteDataManager;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitWebContextConstructOnly = GObjectConstructOnly | 'local-storage-directory' | 'memory-pressure-settings' | 'process-swap-on-cross-site-navigation-enabled' | 'time-zone-override' | 'website-data-manager';

/** Access to the WebKit inspector. */
export interface WebKitWebInspectorProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitWebInspectorConstructOnly = GObjectConstructOnly;

/** Represents a resource at the end of a URI. */
export interface WebKitWebResourceProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitWebResourceConstructOnly = GObjectConstructOnly;

/** The central class of the WPE WebKit and WebKitGTK APIs. */
export interface WebKitWebViewProps extends WebKitWebViewBaseProps, GtkBuildableProps {
    /**
     * The #WebKitAutomationBrowsingContextPresentation of #WebKitWebView.
     * @since 2.28
     * @default WEBKIT_AUTOMATION_BROWSING_CONTEXT_PRESENTATION_WINDOW
     */
    'automation-presentation-type'?: WebKitAutomationBrowsingContextPresentationNick | WebKit2.AutomationBrowsingContextPresentation;
    /**
     * Capture state of the camera device.
     * @since 2.34
     * @default WEBKIT_MEDIA_CAPTURE_STATE_NONE
     */
    'camera-capture-state'?: WebKitMediaCaptureStateNick | WebKit2.MediaCaptureState;
    /**
     * The default Content-Security-Policy used by the webview as if it were set by an HTTP header.
     * @since 2.38
     * @default NULL
     */
    'default-content-security-policy'?: string | null;
    /**
     * Capture state of the display device.
     * @since 2.34
     * @default WEBKIT_MEDIA_CAPTURE_STATE_NONE
     */
    'display-capture-state'?: WebKitMediaCaptureStateNick | WebKit2.MediaCaptureState;
    /**
     * Whether the pages loaded inside #WebKitWebView are editable.
     * @since 2.8
     * @default FALSE
     */
    editable?: boolean;
    /**
     * Whether the #WebKitWebView is controlled by automation tools (e.g.
     * @since 2.18
     * @default FALSE
     */
    'is-controlled-by-automation'?: boolean;
    /**
     * Whether the #WebKitWebView is ephemeral.
     * @since 2.16
     * @default FALSE
     */
    'is-ephemeral'?: boolean;
    /**
     * Whether the #WebKitWebView audio is muted.
     * @since 2.30
     * @default FALSE
     */
    'is-muted'?: boolean;
    /**
     * Capture state of the microphone device.
     * @since 2.34
     * @default WEBKIT_MEDIA_CAPTURE_STATE_NONE
     */
    'microphone-capture-state'?: WebKitMediaCaptureStateNick | WebKit2.MediaCaptureState;
    /**
     * The related #WebKitWebView used when creating the view to share the same web process and network session.
     * @since 2.4
     */
    'related-view'?: WebKit2.WebView;
    /**
     * The #WebKitSettings of the view.
     * @since 2.6
     */
    settings?: WebKit2.Settings;
    /**
     * The #WebKitUserContentManager of the view.
     * @since 2.6
     */
    'user-content-manager'?: WebKit2.UserContentManager;
    /** The #WebKitWebContext of the view. */
    'web-context'?: WebKit2.WebContext;
    /**
     * This configures @web_view to treat the content as a WebExtension.
     * @since 2.38
     * @default WEBKIT_WEB_EXTENSION_MODE_NONE
     */
    'web-extension-mode'?: WebKitWebExtensionModeNick | WebKit2.WebExtensionMode;
    /**
     * The #WebKitWebsitePolicies for the view.
     * @since 2.30
     */
    'website-policies'?: WebKit2.WebsitePolicies;
    /**
     * The zoom level of the #WebKitWebView content.
     * @default 1.000000
     */
    'zoom-level'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitWebViewConstructOnly = WebKitWebViewBaseConstructOnly | GtkBuildableConstructOnly | 'automation-presentation-type' | 'default-content-security-policy' | 'is-controlled-by-automation' | 'is-ephemeral' | 'related-view' | 'user-content-manager' | 'web-context' | 'web-extension-mode' | 'website-policies';

export interface WebKitWebViewBaseProps extends GtkContainerProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitWebViewBaseConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

/** A permission request for accessing website data from third-party domains. */
export interface WebKitWebsiteDataAccessPermissionRequestProps extends GObjectProps, WebKitPermissionRequestProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitWebsiteDataAccessPermissionRequestConstructOnly = GObjectConstructOnly | WebKitPermissionRequestConstructOnly;

/** Manages data stored locally by web sites. */
export interface WebKitWebsiteDataManagerProps extends GObjectProps {
    /**
     * The base directory for caches.
     * @since 2.10
     * @default NULL
     */
    'base-cache-directory'?: string | null;
    /**
     * The base directory for website data.
     * @since 2.10
     * @default NULL
     */
    'base-data-directory'?: string | null;
    /**
     * The directory where HTTP disk cache will be stored.
     * @since 2.10
     * @default NULL
     * @deprecated since 2.40.: Use WebKitWebsiteDataManager:base-cache-directory instead.
     */
    'disk-cache-directory'?: string | null;
    /**
     * The directory where DOM cache will be stored.
     * @since 2.30
     * @default NULL
     * @deprecated since 2.40.: Use WebKitWebsiteDataManager:base-cache-directory instead.
     */
    'dom-cache-directory'?: string | null;
    /**
     * The directory where the HTTP Strict-Transport-Security (HSTS) cache will be stored.
     * @since 2.26
     * @default NULL
     * @deprecated since 2.40.: Use WebKitWebsiteDataManager:base-cache-directory instead.
     */
    'hsts-cache-directory'?: string | null;
    /**
     * The directory where IndexedDB databases will be stored.
     * @since 2.10
     * @default NULL
     * @deprecated since 2.40.: Use WebKitWebsiteDataManager:base-data-directory instead.
     */
    'indexeddb-directory'?: string | null;
    /**
     * Whether the #WebKitWebsiteDataManager is ephemeral.
     * @since 2.16
     * @default FALSE
     */
    'is-ephemeral'?: boolean;
    /**
     * The directory where Intelligent Tracking Prevention (ITP) data will be stored.
     * @since 2.30
     * @default NULL
     * @deprecated since 2.40.: Use WebKitWebsiteDataManager:base-data-directory instead.
     */
    'itp-directory'?: string | null;
    /**
     * The directory where local storage data will be stored.
     * @since 2.10
     * @default NULL
     * @deprecated since 2.40.: Use WebKitWebsiteDataManager:base-data-directory instead.
     */
    'local-storage-directory'?: string | null;
    /**
     * The directory where offline web application cache will be stored.
     * @since 2.10
     * @default NULL
     * @deprecated since 2.40.: Use WebKitWebsiteDataManager:base-cache-directory instead.
     */
    'offline-application-cache-directory'?: string | null;
    /**
     * The percentage of volume space that can be used for data storage for every domain.
     * @since 2.42
     * @default -1.000000
     */
    'origin-storage-ratio'?: number;
    /**
     * The directory where service workers registrations will be stored.
     * @since 2.30
     * @default NULL
     * @deprecated since 2.40.: Use WebKitWebsiteDataManager:base-data-directory instead.
     */
    'service-worker-registrations-directory'?: string | null;
    /**
     * The percentage of volume space that can be used for data storage for all domains.
     * @since 2.42
     * @default -1.000000
     */
    'total-storage-ratio'?: number;
    /**
     * The directory where WebSQL databases will be stored.
     * @since 2.10
     * @default NULL
     * @deprecated since 2.24.: WebSQL is no longer supported.
     */
    'websql-directory'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitWebsiteDataManagerConstructOnly = GObjectConstructOnly | 'base-cache-directory' | 'base-data-directory' | 'disk-cache-directory' | 'dom-cache-directory' | 'hsts-cache-directory' | 'indexeddb-directory' | 'is-ephemeral' | 'itp-directory' | 'local-storage-directory' | 'offline-application-cache-directory' | 'origin-storage-ratio' | 'service-worker-registrations-directory' | 'total-storage-ratio' | 'websql-directory';

/** View specific website policies. */
export interface WebKitWebsitePoliciesProps extends GObjectProps {
    /**
     * The #WebKitAutoplayPolicy of #WebKitWebsitePolicies.
     * @since 2.30
     * @default WEBKIT_AUTOPLAY_ALLOW_WITHOUT_SOUND
     */
    autoplay?: WebKitAutoplayPolicyNick | WebKit2.AutoplayPolicy;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitWebsitePoliciesConstructOnly = GObjectConstructOnly | 'autoplay';

/** Window properties of a #WebKitWebView. */
export interface WebKitWindowPropertiesProps extends GObjectProps {
    /**
     * Whether window will be displayed fullscreen.
     * @default FALSE
     */
    fullscreen?: boolean;
    /** The size and position of the window on the screen. */
    geometry?: Gdk.Rectangle;
    /**
     * Whether the locationbar should be visible for the window.
     * @default TRUE
     */
    'locationbar-visible'?: boolean;
    /**
     * Whether the menubar should be visible for the window.
     * @default TRUE
     */
    'menubar-visible'?: boolean;
    /**
     * Whether the window can be resized.
     * @default TRUE
     */
    resizable?: boolean;
    /**
     * Whether the scrollbars should be visible for the window.
     * @default TRUE
     */
    'scrollbars-visible'?: boolean;
    /**
     * Whether the statusbar should be visible for the window.
     * @default TRUE
     */
    'statusbar-visible'?: boolean;
    /**
     * Whether the toolbar should be visible for the window.
     * @default TRUE
     */
    'toolbar-visible'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitWindowPropertiesConstructOnly = GObjectConstructOnly | 'fullscreen' | 'geometry' | 'locationbar-visible' | 'menubar-visible' | 'resizable' | 'scrollbars-visible' | 'statusbar-visible' | 'toolbar-visible';

// ---------------------------------------------------------------------------
// The GType-keyed widget map.
//
// Keyed by GType because that is also the GtkBuilder XML key and the typelib key. A
// consumer maps GTypes to tags in ITS convention — kebab for JSX intrinsics, Pascal
// for a Vue `GlobalComponents`, the class itself for a renderer whose element type
// is the class. None of those is baked in here.
//
// `slotCandidates` is a candidate list and never an answer: derived from methods
// taking exactly one widget argument. The GIR cannot tell adoption from reference —
// `set_title_widget` parents its argument and `set_activatable_widget` does not, and
// both are `void f(GtkWidget*)` at `transfer-ownership="none"`. Curation decides;
// this is what notices when a release adds a candidate.
// ---------------------------------------------------------------------------

export interface Widgets {
    WebKitWebView: {
        class: WebKit2.WebView;
        props: WebKitWebViewProps;
        signals: WebKit2.WebView.SignalSignatures;
        constructOnly: WebKitWebViewConstructOnly;
        slotCandidates: {};
    };
    WebKitWebViewBase: {
        class: WebKit2.WebViewBase;
        props: WebKitWebViewBaseProps;
        signals: WebKit2.WebViewBase.SignalSignatures;
        constructOnly: WebKitWebViewBaseConstructOnly;
        slotCandidates: {};
    };
}

/**
 * Every GType this namespace can create AND put on screen. A consumer derives its own
 * tag map. For everything a UI file can instantiate — layout managers, event
 * controllers, cell renderers, `GtkSizeGroup` — read `DECLS` below.
 */
export type WidgetGType = keyof Widgets;

// ---------------------------------------------------------------------------
// Child holders — the same shape, for objects that CARRY a widget without being one.
//
// `GtkListItem`, `GtkListHeader`, `GtkColumnViewCell` and `AdwToggle` descend from
// `GObject.Object` and hold a widget through `set_child`/`get_child`. A renderer places
// them exactly like a container, so they belong in the vocabulary; a check asking "is
// this a widget" must still be able to say no. Hence a sibling table rather than four
// more rows in `Widgets`: concatenate them when you mean both.
// ---------------------------------------------------------------------------

export interface ChildHolders {

}

/** Every GType this namespace holds a child in without it being a widget. */
export type ChildHolderGType = keyof ChildHolders;

/** The writable, optional, GObject-keyed property surface of one GType. */
export type PropsOf<G extends WidgetGType> = Widgets[G]['props'];

/** The signal table this package already emits, reached by GType. */
export type SignalsOf<G extends WidgetGType> = Widgets[G]['signals'];

/** The instance type — what a `ref`-shaped prop should infer. */
export type InstanceOf<G extends WidgetGType> = Widgets[G]['class'];

/** Property names that can only be set at construction. */
export type ConstructOnlyOf<G extends WidgetGType> = Widgets[G]['constructOnly'];

/** Candidate child slots — see the note above; curation decides. */
export type SlotCandidatesOf<G extends WidgetGType> = keyof Widgets[G]['slotCandidates'];

/**
 * The same facts as runtime data, for a consumer that CHECKS them.
 *
 * Types are erased, so a spec that asks the installed GTK whether every property
 * here is a writable ParamSpec, every signal resolvable by `GObject.signal_lookup`
 * and every nick resolvable through an enum lookup cannot read the interfaces
 * above. Emitted headlessly with no GTK present, which is exactly why the checking
 * belongs to the consumer and the DATA belongs here.
 */
export const PROVENANCE: {
    readonly namespace: string;
    readonly version: string;
    /** The version the LIBRARY states, or null where it states none. Never the namespace's. */
    readonly libraryVersion: string | null;
    readonly childHolders: number;
    readonly droppedBases: readonly string[];
    readonly inlinedBases: readonly string[];
    /** `<decl>.<prop>` for every property printed `never` because TypeScript has no value for it. */
    readonly unsettableProps: readonly string[];
    /**
     * `<decl>.<prop>: <Ns>.<Name>` for every property printed `never` because the model
     * could not resolve its type across a namespace boundary — two independently released
     * GIRs disagreeing, which is what the main emitter answers `never` for as well.
     */
    readonly unresolvedProps: readonly string[];
    /**
     * `c:identifier-prefixes` from the GIR, verbatim and in order — `['G']` for Gio.
     *
     * The C prefix a type REFERENCE needs: resolving `Gio.Icon` means producing `GIcon`,
     * and nothing else in this package states that `Gio` spells itself `G`. Carried rather
     * than derived because GIR carries it, and a derivation over the `DECLS` keys is wrong
     * wherever the C prefix is not a prefix of the type NAMES: gdkx11-4.0 and gdkwayland-4.0
     * both state `Gdk` while every key they declare begins `GdkX11`/`GdkWayland`.
     *
     * Empty where the GIR states none — 17 of the 627 emitting namespaces — because
     * inventing the namespace name there is a confident wrong answer in place of a missing
     * one. A LIST because 20 of them state more than one, which no single string expresses.
     */
    readonly identifierPrefixes: readonly string[];
    /**
     * Sibling vocabularies this one's DECLARATIONS come from, as import specifiers.
     *
     * A chain link with no `OWN_PROPS` row is ambiguous on its own — `GtkSeparator` has no
     * settable property, `GApplication` has its properties in another package — and this
     * list is what tells the two apart. Enum and bitfield NUMBERS are not here: those are
     * carried in this file, because a `PROP_ENUMS` row naming a foreign GType gives a
     * consumer nothing to load and a `.ui` file using the property never names its owner.
     */
    readonly requiredVocabularies: readonly string[];
};

/** Declaration GType -> its own settable properties, as GObject registered them. */
export const OWN_PROPS: Readonly<Record<string, readonly string[]>>;

/**
 * Declaration GType -> the signals it registers itself, never its parents'.
 *
 * Keyed like `OWN_PROPS`, so both are read at every link of a `DECLS` chain. An
 * abstract base has no `Widgets` row and still owns signals — `GtkWidget` owns 13.
 */
export const OWN_SIGNALS: Readonly<Record<string, readonly string[]>>;

/**
 * Instantiable GType -> every declaration its members come from, self first.
 *
 * The key set is what a UI description file can NAME: every registered, non-abstract
 * class this namespace declares. GtkBuilder resolves a `<object class="…">` through
 * `g_type_from_name`, which knows nothing about widgets, so this is wider than
 * `Widgets` by design — `GtkSizeGroup`, `GtkTextTag`, every `GtkEventController`
 * and every `GtkCellRenderer` are here and are not widgets.
 *
 * `Widgets` and `CHILD_HOLDERS` are the narrower questions and answer them unchanged.
 */
export const DECLS: Readonly<Record<string, readonly string[]>>;

/** The GTypes in `DECLS` that hold a widget without being one — see `ChildHolders`. */
export const CHILD_HOLDERS: readonly string[];

/** Enum GType -> the nicks this surface offers. */
export const ENUM_NICKS: Readonly<Record<string, readonly string[]>>;

/**
 * `<enum GType>.<nick>` -> the integer GObject registers for it, from GIR's `value`.
 *
 * Position in `ENUM_NICKS` is NOT this number. Counting is wrong on 6 of the 137 enums a
 * GTK 4 vocabulary carries -- 112 in Gtk-4.0 and 25 in Adw-1: `GtkResponseType` runs -1 to -11, `GtkTextWindowType` starts
 * at 1, `GtkOrdering` and `GtkConstraintRelation` are -1/0/1, `GtkAlign` has two names
 * on one value, and `GtkConstraintStrength.required` is 1001001000 where counting says 0.
 *
 * Read from the same GIR as the nicks, deliberately. A consumer reading the numbers off an
 * installed typelib instead has two provenances for one table, and then cannot tell a
 * missing number from a host older than the vocabulary.
 */
export const ENUM_VALUES: Readonly<Record<string, number>>;

/**
 * The `<enum GType>.<nick>` entries GIR marks `deprecated="1"`.
 *
 * Two names on one value is how GObject spells an alias -- `GTK_ALIGN_BASELINE` and
 * `GTK_ALIGN_BASELINE_FILL` are both 4, and both keep a `ENUM_VALUES` entry. The pairing
 * is visible in the numbers; which name is the old one is not, and this is that fact --
 * where GIR states it. It usually does not: 4 registered-enum members across the 718 GIRs
 * carry the attribute, and 179 of the 182 value-sharing pairs carry it on neither half, so
 * absence from this list means GIR is silent, not that the nick is the current one.
 */
export const ENUM_DEPRECATED: readonly string[];

/**
 * `<enum GType>.<nick>` -> the raw GIR `value` no number could be read from.
 *
 * The declared remainder, so that every nick in `ENUM_NICKS` is in `ENUM_VALUES` or in
 * here and a drop cannot be silent. Two shapes reach it: a symbolic or absent value (Vala
 * writes `(null)`, a char enum writes a letter) and an integer past
 * `Number.MAX_SAFE_INTEGER`, where a literal would lose precision and stop being the
 * GIR's number. Empty for Gtk, Adw, GLib and Gio.
 */
export const ENUM_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * `<bitfield GType>.<nick>` -> the integer GObject registers for that one member.
 *
 * `ENUM_NICKS` carries no bitfield, because GObject cannot resolve a nick SET; that says
 * nothing about a single member's number, and the number is what a host without GI needs.
 * 23 settable properties in Gtk-4.0 and Adw-1 are bitfield-typed and are declared bare
 * `number` -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`, `AdwTabView:shortcuts`,
 * `GtkDropTarget:actions` among them. Counting is worst here: 119 of the 156 Gtk-4.0
 * bitfield members this vocabulary carries disagree with their declaration position,
 * against 29 of 672 enumeration members.
 *
 * Combine with `|` as GObject does. There is no nick table to pair this with, so a name
 * here is resolvable and a SET still is not.
 */
export const FLAG_VALUES: Readonly<Record<string, number>>;

/** `<bitfield GType>.<nick>` -> the raw GIR `value` no number could be read from. */
export const FLAG_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * `<declaration GType>.<property>` -> the GType of that property's enum or bitfield.
 *
 * The join the value tables need and nothing else here carries. A host with no GI has a
 * property name and a nick and needs a number; `ENUM_VALUES` is keyed by ENUM GType, and
 * only this says which enum a property is. Keyed by DECLARATION like `OWN_PROPS`, so it is
 * read at every link of a `DECLS` chain — `orientation` belongs to `GtkOrientable`, not
 * to the `GtkBox` a caller starts from.
 *
 * Present only where the property's OWN type is the enum: an array of them, or a union that
 * merely mentions one, would be an entry a consumer resolves wrongly.
 *
 * The GType named here is not always one THIS module gives numbers for. A nick vocabulary is
 * emitted once, by the namespace that owns the enum, so `AdwComboRow.search-match-mode` names
 * `GtkStringFilterMatchMode` and its rows are in `@girs/gtk-4.0/vocabulary` — 83 of the 909
 * entries in a full run resolve only with the owner's vocabulary loaded beside this one. An
 * owner with no vocabulary of its own (Gdk, Pango) is inlined here instead, so every entry
 * resolves against SOME module.
 */
export const PROP_ENUMS: Readonly<Record<string, string>>;

/**
 * The kinds of value a GTK accessible property, relation or state takes.
 *
 * `enum` is the one that needs a second lookup: `ARIA_VALUE_ENUMS` names the enum GType,
 * and `ENUM_NICKS` and `ENUM_VALUES` answer from there.
 */
export type AriaValueType = 'string' | 'integer' | 'double' | 'boolean' | 'reference' | 'enum';

/**
 * `<enum GType>.<nick>` -> the kind of value that ARIA slot takes.
 *
 * The one table in this file that is not a fact about a ParamSpec. A GtkBuilder or
 * Blueprint `accessibility { … }` block is typed by GTK's ARIA table, not by the widget,
 * and the two disagree where it costs most: `orientation` is settable on a `GtkLabel`
 * that implements no `GtkOrientable`, and `checked` is a `GtkAccessibleTristate`, so
 * `checked: true` is the number 1 rather than a boolean. Typing those slots from the
 * widget's properties gets both wrong and raises nothing.
 *
 * Keyed like `ENUM_VALUES` because the ARIA names ARE enum members — of
 * `GtkAccessibleProperty`, `GtkAccessibleRelation` and `GtkAccessibleState` — so
 * `ENUM_NICKS` already lists them and one key parser reads both.
 *
 * Read from each member's own GIR documentation. `gtk_accessible_property_init_value()`
 * is the C half of this table and is not introspectable; the doc sentence is, and states
 * the type for 52 of the 53 members in gtk4 4.23.3. Complete or absent, never partial: a
 * member the generator cannot answer for fails the build and names itself.
 */
export const ARIA_VALUE_TYPES: Readonly<Record<string, AriaValueType>>;

/**
 * The same keys, for the `'enum'` rows only -> the GType of that enum.
 *
 * A table of its own for the reason `PROP_ENUMS` is one: folded in, the values of
 * `ARIA_VALUE_TYPES` would be six reserved words mixed with arbitrary GTypes and telling
 * them apart would be the consumer's problem. Apart, `ARIA_VALUE_TYPES[k] === 'enum'` is
 * the whole test and `ENUM_NICKS[ARIA_VALUE_ENUMS[k]]` is the nick list.
 */
export const ARIA_VALUE_ENUMS: Readonly<Record<string, string>>;

/** Widget GType -> slot name -> the method that may adopt a child there. */
export const SLOT_CANDIDATES: Readonly<Record<string, Readonly<Record<string, string>>>>;

/**
 * `Type`, `Type.property` and `Type::signal` -> the release that introduced it.
 *
 * What keeps a runtime cross-check honest across a version gap without an
 * allowlist: a name the installed library lacks is a defect UNLESS the version
 * here is newer than the one running.
 *
 * ALL THREE key shapes, because that test only works for the names it covers. A
 * property-only map leaves a consumer no way to explain a missing SIGNAL, which is
 * a correct vocabulary reported as 18 defects; a member-only map leaves it no way to
 * explain a missing CLASS, and that one fails as a bare
 * `TypeError: can't access property "$gtype", ctor() is undefined` that does not
 * even name the GType.
 *
 * A key is present only where the GIR states a version — sparse by nature (`version`
 * sits on 29 of the 301 classes and interfaces in Gtk-4.0), never inferred.
 */
export const SINCE: Readonly<Record<string, string>>;
