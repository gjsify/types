/**
 * The GIR-derived widget VOCABULARY for WebKit2-4.0.
 *
 * GENERATED — do not edit. Provenance: WebKit2-4.0 — library 2.47.2 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
 *
 * 2 concrete widgets, 2 declarations, 29 enum nick unions, 0 slot candidates.
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

import type WebKit2 from './webkit2-4.0.js';
import type { GtkBuildableConstructOnly, GtkBuildableProps, GtkContainerConstructOnly, GtkContainerProps, GtkWidgetConstructOnly, GtkWidgetProps } from '@girs/gtk-3.0/surface';

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

/** The central class of the WPE WebKit and WebKitGTK APIs. */
export interface WebKitWebViewProps extends WebKitWebViewBaseProps, GtkBuildableProps {
    /**
     * The #WebKitAutomationBrowsingContextPresentation of #WebKitWebView.
     * @since 2.28
     */
    'automation-presentation-type'?: WebKitAutomationBrowsingContextPresentationNick | WebKit2.AutomationBrowsingContextPresentation;
    /**
     * Capture state of the camera device.
     * @since 2.34
     */
    'camera-capture-state'?: WebKitMediaCaptureStateNick | WebKit2.MediaCaptureState;
    /**
     * The default Content-Security-Policy used by the webview as if it were set by an HTTP header.
     * @since 2.38
     */
    'default-content-security-policy'?: string | null;
    /**
     * Capture state of the display device.
     * @since 2.34
     */
    'display-capture-state'?: WebKitMediaCaptureStateNick | WebKit2.MediaCaptureState;
    /**
     * Whether the pages loaded inside #WebKitWebView are editable.
     * @since 2.8
     */
    editable?: boolean;
    /**
     * Whether the #WebKitWebView is controlled by automation tools (e.g.
     * @since 2.18
     */
    'is-controlled-by-automation'?: boolean;
    /**
     * Whether the #WebKitWebView is ephemeral.
     * @since 2.16
     */
    'is-ephemeral'?: boolean;
    /**
     * Whether the #WebKitWebView audio is muted.
     * @since 2.30
     */
    'is-muted'?: boolean;
    /**
     * Capture state of the microphone device.
     * @since 2.34
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
     */
    'web-extension-mode'?: WebKitWebExtensionModeNick | WebKit2.WebExtensionMode;
    /**
     * The #WebKitWebsitePolicies for the view.
     * @since 2.30
     */
    'website-policies'?: WebKit2.WebsitePolicies;
    /** The zoom level of the #WebKitWebView content. */
    'zoom-level'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitWebViewConstructOnly = WebKitWebViewBaseConstructOnly | GtkBuildableConstructOnly | 'automation-presentation-type' | 'default-content-security-policy' | 'is-controlled-by-automation' | 'is-ephemeral' | 'related-view' | 'user-content-manager' | 'web-context' | 'web-extension-mode' | 'website-policies';

export interface WebKitWebViewBaseProps extends GtkContainerProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type WebKitWebViewBaseConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

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

/** Every GType this namespace can create. A consumer derives its own tag map. */
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
export const SURFACE_PROVENANCE: string;

/** Declaration GType -> its own settable properties, as GObject registered them. */
export const OWN_PROPS: Readonly<Record<string, readonly string[]>>;

/** Widget GType -> its own signals. */
export const OWN_SIGNALS: Readonly<Record<string, readonly string[]>>;

/** Widget GType -> every declaration its members come from, self first. */
export const DECLS: Readonly<Record<string, readonly string[]>>;

/** The GTypes in `DECLS` that hold a widget without being one — see `ChildHolders`. */
export const CHILD_HOLDERS: readonly string[];

/** Enum GType -> the nicks this surface offers. */
export const ENUM_NICKS: Readonly<Record<string, readonly string[]>>;

/** Widget GType -> slot name -> the method that may adopt a child there. */
export const SLOT_CANDIDATES: Readonly<Record<string, Readonly<Record<string, string>>>>;

/**
 * `Type.property` -> the release that introduced it.
 *
 * What keeps a runtime cross-check honest across a version gap without an
 * allowlist: a member the installed library lacks is a defect UNLESS the version
 * here is newer than the one running.
 */
export const SINCE: Readonly<Record<string, string>>;
