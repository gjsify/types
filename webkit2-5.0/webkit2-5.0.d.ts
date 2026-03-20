/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type Soup from '@girs/soup-3.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type JavaScriptCore from '@girs/javascriptcore-5.0';
import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from 'cairo';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';

export namespace WebKit2 {
    /**
     * WebKit2-5.0
     */

    /**
     * @gir-type Enum
     */
    export namespace AuthenticationScheme {
        export const $gtype: GObject.GType<AuthenticationScheme>;
    }

    /**
     * Enum values representing the authentication scheme.
     * @gir-type Enum
     * @since 2.2
     */
    enum AuthenticationScheme {
        /**
         * The default authentication scheme of WebKit.
         */
        DEFAULT,
        /**
         * Basic authentication scheme as defined in RFC 2617.
         */
        HTTP_BASIC,
        /**
         * Digest authentication scheme as defined in RFC 2617.
         */
        HTTP_DIGEST,
        /**
         * HTML Form authentication.
         */
        HTML_FORM,
        /**
         * NTLM Microsoft proprietary authentication scheme.
         */
        NTLM,
        /**
         * Negotiate (or SPNEGO) authentication scheme as defined in RFC 4559.
         */
        NEGOTIATE,
        /**
         * Client Certificate Authentication (see RFC 2246).
         */
        CLIENT_CERTIFICATE_REQUESTED,
        /**
         * Server Trust Authentication.
         */
        SERVER_TRUST_EVALUATION_REQUESTED,
        /**
         * Client certificate PIN required for use. Since: 2.34
         */
        CLIENT_CERTIFICATE_PIN_REQUESTED,
        /**
         * Authentication scheme unknown.
         */
        UNKNOWN,
    }

    /**
     * @gir-type Enum
     */
    export namespace AutomationBrowsingContextPresentation {
        export const $gtype: GObject.GType<AutomationBrowsingContextPresentation>;
    }

    /**
     * Enum values used for determining the automation browsing context presentation.
     * @gir-type Enum
     * @since 2.28
     */
    enum AutomationBrowsingContextPresentation {
        /**
         * a window
         */
        WINDOW,
        /**
         * a tab
         */
        TAB,
    }

    /**
     * @gir-type Enum
     */
    export namespace AutoplayPolicy {
        export const $gtype: GObject.GType<AutoplayPolicy>;
    }

    /**
     * Enum values used to specify autoplay policies.
     * @gir-type Enum
     * @since 2.30
     */
    enum AutoplayPolicy {
        /**
         * Do not restrict autoplay.
         */
        ALLOW,
        /**
         * Allow videos to autoplay if
         *     they have no audio track, or if their audio track is muted.
         */
        ALLOW_WITHOUT_SOUND,
        /**
         * Never allow autoplay.
         */
        DENY,
    }

    /**
     * @gir-type Enum
     */
    export namespace CacheModel {
        export const $gtype: GObject.GType<CacheModel>;
    }

    /**
     * Enum values used for determining the {@link WebKit2.WebContext} cache model.
     * @gir-type Enum
     */
    enum CacheModel {
        /**
         * Disable the cache completely, which
         *   substantially reduces memory usage. Useful for applications that only
         *   access a single local file, with no navigation to other pages. No remote
         *   resources will be cached.
         */
        DOCUMENT_VIEWER,
        /**
         * Improve document load speed substantially
         *   by caching a very large number of resources and previously viewed content.
         */
        WEB_BROWSER,
        /**
         * A cache model optimized for viewing
         *   a series of local files -- for example, a documentation viewer or a website
         *   designer. WebKit will cache a moderate number of resources.
         */
        DOCUMENT_BROWSER,
    }

    /**
     * @gir-type Enum
     */
    export namespace ContextMenuAction {
        export const $gtype: GObject.GType<ContextMenuAction>;
    }

    /**
     * Enum values used to denote the stock actions for
     * {@link WebKit2.ContextMenuItem}<!-- -->s
     * @gir-type Enum
     */
    enum ContextMenuAction {
        /**
         * No action, used by separator menu items.
         */
        NO_ACTION,
        /**
         * Open current link.
         */
        OPEN_LINK,
        /**
         * Open current link in a new window.
         */
        OPEN_LINK_IN_NEW_WINDOW,
        /**
         * Download link destination.
         */
        DOWNLOAD_LINK_TO_DISK,
        /**
         * Copy link location to the clipboard.
         */
        COPY_LINK_TO_CLIPBOARD,
        /**
         * Open current image in a new window.
         */
        OPEN_IMAGE_IN_NEW_WINDOW,
        /**
         * Download current image.
         */
        DOWNLOAD_IMAGE_TO_DISK,
        /**
         * Copy current image to the clipboard.
         */
        COPY_IMAGE_TO_CLIPBOARD,
        /**
         * Copy current image location to the clipboard.
         */
        COPY_IMAGE_URL_TO_CLIPBOARD,
        /**
         * Open current frame in a new window.
         */
        OPEN_FRAME_IN_NEW_WINDOW,
        /**
         * Load the previous history item.
         */
        GO_BACK,
        /**
         * Load the next history item.
         */
        GO_FORWARD,
        /**
         * Stop any ongoing loading operation.
         */
        STOP,
        /**
         * Reload the contents of current view.
         */
        RELOAD,
        /**
         * Copy current selection the clipboard.
         */
        COPY,
        /**
         * Cut current selection to the clipboard.
         */
        CUT,
        /**
         * Paste clipboard contents.
         */
        PASTE,
        /**
         * Delete current selection.
         */
        DELETE,
        /**
         * Select all text.
         */
        SELECT_ALL,
        /**
         * Input methods menu.
         */
        INPUT_METHODS,
        /**
         * Unicode menu.
         */
        UNICODE,
        /**
         * A proposed replacement for a misspelled word.
         */
        SPELLING_GUESS,
        /**
         * An indicator that spellchecking found no proposed replacements.
         */
        NO_GUESSES_FOUND,
        /**
         * Causes the spellchecker to ignore the word for this session.
         */
        IGNORE_SPELLING,
        /**
         * Causes the spellchecker to add the word to the dictionary.
         */
        LEARN_SPELLING,
        /**
         * Ignore grammar.
         */
        IGNORE_GRAMMAR,
        /**
         * Font options menu.
         */
        FONT_MENU,
        /**
         * Bold.
         */
        BOLD,
        /**
         * Italic.
         */
        ITALIC,
        /**
         * Underline.
         */
        UNDERLINE,
        /**
         * Outline.
         */
        OUTLINE,
        /**
         * Open current element in the inspector.
         */
        INSPECT_ELEMENT,
        /**
         * Open current video element in a new window.
         */
        OPEN_VIDEO_IN_NEW_WINDOW,
        /**
         * Open current audio element in a new window.
         */
        OPEN_AUDIO_IN_NEW_WINDOW,
        /**
         * Copy video link location in to the clipboard.
         */
        COPY_VIDEO_LINK_TO_CLIPBOARD,
        /**
         * Copy audio link location in to the clipboard.
         */
        COPY_AUDIO_LINK_TO_CLIPBOARD,
        /**
         * Enable or disable media controls.
         */
        TOGGLE_MEDIA_CONTROLS,
        /**
         * Enable or disable media loop.
         */
        TOGGLE_MEDIA_LOOP,
        /**
         * Show current video element in fullscreen mode.
         */
        ENTER_VIDEO_FULLSCREEN,
        /**
         * Play current media element.
         */
        MEDIA_PLAY,
        /**
         * Pause current media element.
         */
        MEDIA_PAUSE,
        /**
         * Mute current media element.
         */
        MEDIA_MUTE,
        /**
         * Download video to disk. Since 2.2
         */
        DOWNLOAD_VIDEO_TO_DISK,
        /**
         * Download audio to disk. Since 2.2
         */
        DOWNLOAD_AUDIO_TO_DISK,
        /**
         * Insert an emoji. Since 2.26
         */
        INSERT_EMOJI,
        /**
         * Paste clipboard contents as plain text. Since 2.30
         */
        PASTE_AS_PLAIN_TEXT,
        /**
         * Custom action defined by applications.
         */
        CUSTOM,
    }

    /**
     * @gir-type Enum
     */
    export namespace CookieAcceptPolicy {
        export const $gtype: GObject.GType<CookieAcceptPolicy>;
    }

    /**
     * Enum values used to denote the cookie acceptance policies.
     * @gir-type Enum
     */
    enum CookieAcceptPolicy {
        /**
         * Accept all cookies unconditionally.
         */
        ALWAYS,
        /**
         * Reject all cookies unconditionally.
         */
        NEVER,
        /**
         * Accept only cookies set by the main document loaded.
         */
        NO_THIRD_PARTY,
    }

    /**
     * @gir-type Enum
     */
    export namespace CookiePersistentStorage {
        export const $gtype: GObject.GType<CookiePersistentStorage>;
    }

    /**
     * Enum values used to denote the cookie persistent storage types.
     * @gir-type Enum
     */
    enum CookiePersistentStorage {
        /**
         * Cookies are stored in a text
         *  file in the Mozilla "cookies.txt" format.
         */
        TEXT,
        /**
         * Cookies are stored in a SQLite
         *  file in the current Mozilla format.
         */
        SQLITE,
    }

    /**
     * @gir-type Enum
     */
    export namespace CredentialPersistence {
        export const $gtype: GObject.GType<CredentialPersistence>;
    }

    /**
     * Enum values representing the duration for which a credential persists.
     * @gir-type Enum
     * @since 2.2
     */
    enum CredentialPersistence {
        /**
         * Credential does not persist
         */
        NONE,
        /**
         * Credential persists for session only
         */
        FOR_SESSION,
        /**
         * Credential persists permanently
         */
        PERMANENT,
    }

    /**
     * Enum values used to denote the various download errors.
     * @gir-type Struct
     */
    class DownloadError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * Download failure due to network error
         */
        static NETWORK: number;
        /**
         * Download was cancelled by user
         */
        static CANCELLED_BY_USER: number;
        /**
         * Download failure due to destination error
         */
        static DESTINATION: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        /**
         * Gets the quark for the domain of download errors.
         */
        static quark(): GLib.Quark;
    }

    /**
     * Enum values used to denote the various errors related to the {@link WebKit2.FaviconDatabase}.
     * @gir-type Struct
     */
    class FaviconDatabaseError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * The {@link WebKit2.FaviconDatabase} has not been initialized yet
         */
        static NOT_INITIALIZED: number;
        /**
         * There is not an icon available for the requested URL
         */
        static FAVICON_NOT_FOUND: number;
        /**
         * There might be an icon for the requested URL, but its data is unknown at the moment
         */
        static FAVICON_UNKNOWN: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        /**
         * Gets the quark for the domain of favicon database errors.
         */
        static quark(): GLib.Quark;
    }

    /**
     * @gir-type Enum
     */
    export namespace HardwareAccelerationPolicy {
        export const $gtype: GObject.GType<HardwareAccelerationPolicy>;
    }

    /**
     * Enum values used for determining the hardware acceleration policy.
     * @gir-type Enum
     * @since 2.16
     */
    enum HardwareAccelerationPolicy {
        /**
         * Hardware acceleration is enabled/disabled as request by web contents.
         */
        ON_DEMAND,
        /**
         * Hardware acceleration is always enabled, even for websites not requesting it.
         */
        ALWAYS,
        /**
         * Hardware acceleration is always disabled, even for websites requesting it.
         */
        NEVER,
    }

    /**
     * @gir-type Enum
     */
    export namespace InputPurpose {
        export const $gtype: GObject.GType<InputPurpose>;
    }

    /**
     * Enum values used to describe the primary purpose of the active editable element.
     * @gir-type Enum
     * @since 2.28
     */
    enum InputPurpose {
        /**
         * Editable element expects any characters
         */
        FREE_FORM,
        /**
         * Editable element expects digits
         */
        DIGITS,
        /**
         * Editable element expects a number
         */
        NUMBER,
        /**
         * Editable element expects a telephone
         */
        PHONE,
        /**
         * Editable element expects a URL
         */
        URL,
        /**
         * Editable element expects an email
         */
        EMAIL,
        /**
         * Editable element expects a password
         */
        PASSWORD,
    }

    /**
     * @gir-type Enum
     */
    export namespace InsecureContentEvent {
        export const $gtype: GObject.GType<InsecureContentEvent>;
    }

    /**
     * Enum values used to denote the different events which can trigger
     * the detection of insecure content.
     * @gir-type Enum
     */
    enum InsecureContentEvent {
        /**
         * Insecure content has been detected by
         * trying to execute any kind of logic (e.g. a script) from an
         * untrusted source.
         */
        RUN,
        /**
         * Insecure content has been
         * detected by trying to display any kind of resource (e.g. an image)
         * from an untrusted source.
         */
        DISPLAYED,
    }

    /**
     * Enum values used to denote errors happening when executing JavaScript
     * @gir-type Struct
     */
    class JavascriptError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * An exception was raised in JavaScript execution
         */
        static FAILED: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        /**
         * Gets the quark for the domain of JavaScript errors.
         */
        static quark(): GLib.Quark;
    }

    /**
     * @gir-type Enum
     */
    export namespace LoadEvent {
        export const $gtype: GObject.GType<LoadEvent>;
    }

    /**
     * Enum values used to denote the different events that happen during a
     * {@link WebKit2.WebView} load operation.
     * @gir-type Enum
     */
    enum LoadEvent {
        /**
         * A new load request has been made.
         * No data has been received yet, empty structures have
         * been allocated to perform the load; the load may still
         * fail due to transport issues such as not being able to
         * resolve a name, or connect to a port.
         */
        STARTED,
        /**
         * A provisional data source received
         * a server redirect.
         */
        REDIRECTED,
        /**
         * The content started arriving for a page load.
         * The necessary transport requirements are established, and the
         * load is being performed.
         */
        COMMITTED,
        /**
         * Load completed. All resources are done loading
         * or there was an error during the load operation.
         */
        FINISHED,
    }

    /**
     * @gir-type Enum
     */
    export namespace MediaCaptureState {
        export const $gtype: GObject.GType<MediaCaptureState>;
    }

    /**
     * Enum values used to specify the capture state of a media device.
     * @gir-type Enum
     * @since 2.34
     */
    enum MediaCaptureState {
        /**
         * Media capture is disabled.
         */
        NONE,
        /**
         * Media capture is active.
         */
        ACTIVE,
        /**
         * Media capture is muted.
         */
        MUTED,
    }

    /**
     * @gir-type Enum
     */
    export namespace NavigationType {
        export const $gtype: GObject.GType<NavigationType>;
    }

    /**
     * Enum values used to denote the various navigation types.
     * @gir-type Enum
     */
    enum NavigationType {
        /**
         * The navigation was triggered by clicking a link.
         */
        LINK_CLICKED,
        /**
         * The navigation was triggered by submitting a form.
         */
        FORM_SUBMITTED,
        /**
         * The navigation was triggered by navigating forward or backward.
         */
        BACK_FORWARD,
        /**
         * The navigation was triggered by reloading.
         */
        RELOAD,
        /**
         * The navigation was triggered by resubmitting a form.
         */
        FORM_RESUBMITTED,
        /**
         * The navigation was triggered by some other action.
         */
        OTHER,
    }

    /**
     * Enum values used to denote the various network errors.
     * @gir-type Struct
     */
    class NetworkError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * Generic load failure
         */
        static FAILED: number;
        /**
         * Load failure due to transport error
         */
        static TRANSPORT: number;
        /**
         * Load failure due to unknown protocol
         */
        static UNKNOWN_PROTOCOL: number;
        /**
         * Load failure due to cancellation
         */
        static CANCELLED: number;
        /**
         * Load failure due to missing file
         */
        static FILE_DOES_NOT_EXIST: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        /**
         * Gets the quark for the domain of networking errors.
         */
        static quark(): GLib.Quark;
    }

    /**
     * @gir-type Enum
     */
    export namespace NetworkProxyMode {
        export const $gtype: GObject.GType<NetworkProxyMode>;
    }

    /**
     * Enum values used to set the network proxy mode.
     * @gir-type Enum
     * @since 2.16
     */
    enum NetworkProxyMode {
        /**
         * Use the default proxy of the system.
         */
        DEFAULT,
        /**
         * Do not use any proxy.
         */
        NO_PROXY,
        /**
         * Use custom proxy settings.
         */
        CUSTOM,
    }

    /**
     * Enum values used to denote the various plugin and multimedia errors.
     * @gir-type Struct
     */
    class PluginError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * Generic plugin load failure. Deprecated 2.32
         */
        static FAILED: number;
        /**
         * Load failure due to missing plugin. Deprecated 2.32
         */
        static CANNOT_FIND_PLUGIN: number;
        /**
         * Load failure due to inability to load plugin. Deprecated 2.32
         */
        static CANNOT_LOAD_PLUGIN: number;
        /**
         * Load failure due to missing Java support that is required to load plugin. Deprecated 2.32
         */
        static JAVA_UNAVAILABLE: number;
        /**
         * Load failure due to connection cancellation. Deprecated 2.32
         */
        static CONNECTION_CANCELLED: number;
        /**
         * Preliminary load failure for media content types. A new load will be started to perform the media load.
         */
        static WILL_HANDLE_LOAD: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        /**
         * Gets the quark for the domain of plug-in errors.
         */
        static quark(): GLib.Quark;
    }

    /**
     * @gir-type Enum
     */
    export namespace PolicyDecisionType {
        export const $gtype: GObject.GType<PolicyDecisionType>;
    }

    /**
     * Enum values used for determining the type of a policy decision during
     * {@link WebKit2.WebView.SignalSignatures.decide_policy | WebKit2.WebView::decide-policy}.
     * @gir-type Enum
     */
    enum PolicyDecisionType {
        /**
         * This type of policy decision
         *   is requested when WebKit is about to navigate to a new page in either the
         *   main frame or a subframe. Acceptable policy decisions are either
         *   `webkit_policy_decision_use()` or `webkit_policy_decision_ignore()`. This
         *   type of policy decision is always a {@link WebKit2.NavigationPolicyDecision}.
         */
        NAVIGATION_ACTION,
        /**
         * This type of policy decision
         *   is requested when WebKit is about to create a new window. Acceptable policy
         *   decisions are either `webkit_policy_decision_use()` or
         *   `webkit_policy_decision_ignore()`. This type of policy decision is always
         *   a {@link WebKit2.NavigationPolicyDecision}. These decisions are useful for implementing
         *   special actions for new windows, such as forcing the new window to open
         *   in a tab when a keyboard modifier is active or handling a special
         *   target attribute on <a> elements.
         */
        NEW_WINDOW_ACTION,
        /**
         * This type of decision is used when WebKit has
         *   received a response for a network resource and is about to start the load.
         *   Note that these resources include all subresources of a page such as images
         *   and stylesheets as well as main documents. Appropriate policy responses to
         *   this decision are `webkit_policy_decision_use()`, `webkit_policy_decision_ignore()`,
         *   or `webkit_policy_decision_download()`. This type of policy decision is always
         *   a {@link WebKit2.ResponsePolicyDecision}. This decision is useful for forcing
         *   some types of resources to be downloaded rather than rendered in the WebView
         *   or to block the transfer of resources entirely.
         */
        RESPONSE,
    }

    /**
     * Enum values used to denote the various policy errors.
     * @gir-type Struct
     */
    class PolicyError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * Generic load failure due to policy error
         */
        static FAILED: number;
        /**
         * Load failure due to unsupported mime type
         */
        static CANNOT_SHOW_MIME_TYPE: number;
        /**
         * Load failure due to URI that can not be shown
         */
        static CANNOT_SHOW_URI: number;
        /**
         * Load failure due to frame load interruption by policy change
         */
        static FRAME_LOAD_INTERRUPTED_BY_POLICY_CHANGE: number;
        /**
         * Load failure due to port restriction
         */
        static CANNOT_USE_RESTRICTED_PORT: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        /**
         * Gets the quark for the domain of policy errors.
         */
        static quark(): GLib.Quark;
    }

    /**
     * Enum values used to denote the various print errors.
     * @gir-type Struct
     */
    class PrintError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * Unspecified error during a print operation
         */
        static GENERAL: number;
        /**
         * Selected printer cannot be found
         */
        static PRINTER_NOT_FOUND: number;
        /**
         * Invalid page range
         */
        static INVALID_PAGE_RANGE: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        /**
         * Gets the quark for the domain of printing errors.
         */
        static quark(): GLib.Quark;
    }

    /**
     * @gir-type Enum
     */
    export namespace PrintOperationResponse {
        export const $gtype: GObject.GType<PrintOperationResponse>;
    }

    /**
     * Enum values representing the response of the print dialog shown with
     * `webkit_print_operation_run_dialog()`.
     * @gir-type Enum
     */
    enum PrintOperationResponse {
        /**
         * Print button was clicked in print dialog
         */
        PRINT,
        /**
         * Print dialog was cancelled
         */
        CANCEL,
    }

    /**
     * @gir-type Enum
     */
    export namespace ProcessModel {
        export const $gtype: GObject.GType<ProcessModel>;
    }

    /**
     * Enum values used for determining the {@link WebKit2.WebContext} process model.
     * @gir-type Enum
     * @since 2.4
     */
    enum ProcessModel {
        /**
         * Deprecated 2.26.
         */
        SHARED_SECONDARY_PROCESS,
        /**
         * Use one process
         *   for each {@link WebKit2.WebView}, while still allowing for some of them to
         *   share a process in certain situations. The main advantage
         *   of this process model is that the rendering process for a web view
         *   can crash while the rest of the views keep working normally. This
         *   process model is indicated for applications which may use a number
         *   of web views and the content of in each must not interfere with the
         *   rest — for example a full-fledged web browser with support for
         *   multiple tabs.
         */
        MULTIPLE_SECONDARY_PROCESSES,
    }

    /**
     * @gir-type Enum
     */
    export namespace SaveMode {
        export const $gtype: GObject.GType<SaveMode>;
    }

    /**
     * Enum values to specify the different ways in which a {@link WebKit2.WebView}
     * can save its current web page into a self-contained file.
     * @gir-type Enum
     */
    enum SaveMode {
        /**
         * Save the current page using the MHTML format.
         */
        MHTML,
    }

    /**
     * @gir-type Enum
     */
    export namespace ScriptDialogType {
        export const $gtype: GObject.GType<ScriptDialogType>;
    }

    /**
     * Enum values used for determining the type of {@link WebKit2.ScriptDialog}
     * @gir-type Enum
     */
    enum ScriptDialogType {
        /**
         * Alert script dialog, used to show a
         * message to the user.
         */
        ALERT,
        /**
         * Confirm script dialog, used to ask
         * confirmation to the user.
         */
        CONFIRM,
        /**
         * Prompt script dialog, used to ask
         * information to the user.
         */
        PROMPT,
        /**
         * Before unload confirm dialog,
         * used to ask confirmation to leave the current page to the user. Since 2.12
         */
        BEFORE_UNLOAD_CONFIRM,
    }

    /**
     * Enum values used to denote errors happening when creating snapshots of {@link WebKit2.WebView}
     * @gir-type Struct
     */
    class SnapshotError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * An error occurred when creating a webpage snapshot.
         */
        static CREATE: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        /**
         * Gets the quark for the domain of page snapshot errors.
         */
        static quark(): GLib.Quark;
    }

    /**
     * @gir-type Enum
     */
    export namespace SnapshotRegion {
        export const $gtype: GObject.GType<SnapshotRegion>;
    }

    /**
     * Enum values used to specify the region from which to get a {@link WebKit2.WebView}
     * snapshot
     * @gir-type Enum
     */
    enum SnapshotRegion {
        /**
         * Specifies a snapshot only for the area that is
         * visible in the webview
         */
        VISIBLE,
        /**
         * A snapshot of the entire document.
         */
        FULL_DOCUMENT,
    }

    /**
     * @gir-type Enum
     */
    export namespace TLSErrorsPolicy {
        export const $gtype: GObject.GType<TLSErrorsPolicy>;
    }

    /**
     * Enum values used to denote the TLS errors policy.
     * @gir-type Enum
     */
    enum TLSErrorsPolicy {
        /**
         * Ignore TLS errors.
         */
        IGNORE,
        /**
         * TLS errors will emit
         *   {@link WebKit2.WebView.SignalSignatures.load_failed_with_tls_errors | WebKit2.WebView::load-failed-with-tls-errors} and, if the signal is handled,
         *   finish the load. In case the signal is not handled,
         *   {@link WebKit2.WebView.SignalSignatures.load_failed | WebKit2.WebView::load-failed} is emitted before the load finishes.
         */
        FAIL,
    }

    /**
     * Errors that can occur while compiling content filters.
     * @gir-type Struct
     */
    class UserContentFilterError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * The JSON source for a content filter is invalid.
         */
        static INVALID_SOURCE: number;
        /**
         * The requested content filter could not be found.
         */
        static NOT_FOUND: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        /**
         * Gets the quark for the domain of user content filter errors.
         */
        static quark(): GLib.Quark;
    }

    /**
     * @gir-type Enum
     */
    export namespace UserContentInjectedFrames {
        export const $gtype: GObject.GType<UserContentInjectedFrames>;
    }

    /**
     * Specifies in which frames user style sheets are to be inserted in.
     * @gir-type Enum
     * @since 2.6
     */
    enum UserContentInjectedFrames {
        /**
         * Insert the user style
         *   sheet in all the frames loaded by the web view, including
         *   nested frames. This is the default.
         */
        ALL_FRAMES,
        /**
         * Insert the user style
         *   sheet *only* in the top-level frame loaded by the web view,
         *   and *not* in the nested frames.
         */
        TOP_FRAME,
    }

    /**
     * Enum values used to denote errors happening when sending user messages.
     * @gir-type Struct
     */
    class UserMessageError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * The message was not handled by the receiver.
         */
        static MESSAGE: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        /**
         * Gets the quark for the domain of user message errors.
         */
        static quark(): GLib.Quark;
    }

    /**
     * @gir-type Enum
     */
    export namespace UserScriptInjectionTime {
        export const $gtype: GObject.GType<UserScriptInjectionTime>;
    }

    /**
     * Specifies at which place of documents an user script will be inserted.
     * @gir-type Enum
     * @since 2.6
     */
    enum UserScriptInjectionTime {
        /**
         * Insert the code of the user
         *   script at the beginning of loaded documents. This is the default.
         */
        START,
        /**
         * Insert the code of the user
         *   script at the end of the loaded documents.
         */
        END,
    }

    /**
     * @gir-type Enum
     */
    export namespace UserStyleLevel {
        export const $gtype: GObject.GType<UserStyleLevel>;
    }

    /**
     * Specifies how to treat an user style sheet.
     * @gir-type Enum
     * @since 2.6
     */
    enum UserStyleLevel {
        /**
         * The style sheet is an user style sheet,
         *   its contents always override other style sheets. This is the default.
         */
        USER,
        /**
         * The style sheet will be treated as if
         *   it was provided by the loaded documents. That means other user style
         *   sheets may still override it.
         */
        AUTHOR,
    }

    /**
     * @gir-type Enum
     */
    export namespace WebExtensionMode {
        export const $gtype: GObject.GType<WebExtensionMode>;
    }

    /**
     * Enum values used for setting if a {@link WebKit2.WebView} is intended for
     * WebExtensions.
     * @gir-type Enum
     * @since 2.38
     */
    enum WebExtensionMode {
        /**
         * Not for an extension.
         */
        NONE,
        /**
         * For a ManifestV2 extension.
         */
        MANIFESTV2,
        /**
         * For a ManifestV3 extension.
         */
        MANIFESTV3,
    }

    /**
     * @gir-type Enum
     */
    export namespace WebProcessTerminationReason {
        export const $gtype: GObject.GType<WebProcessTerminationReason>;
    }

    /**
     * Enum values used to specify the reason why the web process terminated abnormally.
     * @gir-type Enum
     * @since 2.20
     */
    enum WebProcessTerminationReason {
        /**
         * the web process crashed.
         */
        CRASHED,
        /**
         * the web process exceeded the memory limit.
         */
        EXCEEDED_MEMORY_LIMIT,
        /**
         * the web process termination was requested by an API call. Since: 2.34
         */
        TERMINATED_BY_API,
    }

    /**
     * The copy clipboard command. Copies the current selection inside
     * a {@link WebKit2.WebView} to the clipboard.
     * You can check whether it's possible to execute the command with
     * `webkit_web_view_can_execute_editing_command()`. In general it's
     * possible to copy to the clipboard when there is an active selection
     * inside the {@link WebKit2.WebView}.
     */
    const EDITING_COMMAND_COPY: string;
    /**
     * The create link command. Creates a link element that is inserted at
     * the current cursor position. If there's a selection, the selected text
     * will be used as the link text, otherwise the URL itself will be used.
     * It receives the link URL as argument. This command should be executed
     * with `webkit_web_view_execute_editing_command_with_argument()`
     * @since 2.10
     */
    const EDITING_COMMAND_CREATE_LINK: string;
    /**
     * The cut clipboard command. Copies the current selection inside
     * a {@link WebKit2.WebView} to the clipboard and deletes the selected content.
     * You can check whether it's possible to execute the command with
     * `webkit_web_view_can_execute_editing_command()`. In general it's
     * possible to cut to the clipboard when the {@link WebKit2.WebView} content is
     * editable and there is an active selection.
     */
    const EDITING_COMMAND_CUT: string;
    /**
     * The insert image command. Creates an image element that is inserted at
     * the current cursor position. It receives an URI as argument,
     * that is used as the image source. This command should be executed with
     * `webkit_web_view_execute_editing_command_with_argument()`.
     * @since 2.10
     */
    const EDITING_COMMAND_INSERT_IMAGE: string;
    /**
     * The paste clipboard command. Pastes the contents of the clipboard to
     * a {@link WebKit2.WebView}.
     * You can check whether it's possible to execute the command with
     * `webkit_web_view_can_execute_editing_command()`. In general it's possible
     * to paste from the clipboard when the {@link WebKit2.WebView} content is editable
     * and clipboard is not empty.
     */
    const EDITING_COMMAND_PASTE: string;
    /**
     * The paste as plaintext clipboard command. Pastes the contents of the
     * clipboard to a {@link WebKit2.WebView}, with formatting removed.
     * You can check whether it's possible to execute the command with
     * `webkit_web_view_can_execute_editing_command()`. In general it's possible
     * to paste from the clipboard when the {@link WebKit2.WebView} content is editable
     * and clipboard is not empty.
     * @since 2.30
     */
    const EDITING_COMMAND_PASTE_AS_PLAIN_TEXT: string;
    /**
     * The redo command. Redoes a previously undone editing command in
     * a {@link WebKit2.WebView}.
     * You can check whether it's possible to execute the command with
     * `webkit_web_view_can_execute_editing_command()`. It's only possible
     * to redo a command when it has been previously undone.
     */
    const EDITING_COMMAND_REDO: string;
    /**
     * The select all command. Selects all the content of the current text field in
     * a {@link WebKit2.WebView}.
     * It is always possible to select all text, no matter whether the
     * {@link WebKit2.WebView} content is editable or not. You can still check it
     * with `webkit_web_view_can_execute_editing_command()`.
     */
    const EDITING_COMMAND_SELECT_ALL: string;
    /**
     * The undo command. Undoes the last editing command in a {@link WebKit2.WebView}.
     * You can check whether it's possible to execute the command with
     * `webkit_web_view_can_execute_editing_command()`. It's only possible
     * to undo a command after a previously executed editing operation.
     */
    const EDITING_COMMAND_UNDO: string;
    /**
     * Like `webkit_get_major_version()`, but from the headers used at
     * application compile time, rather than from the library linked
     * against at application run time.
     */
    const MAJOR_VERSION: number;
    /**
     * Like `webkit_get_micro_version()`, but from the headers used at
     * application compile time, rather than from the library linked
     * against at application run time.
     */
    const MICRO_VERSION: number;
    /**
     * Like `webkit_get_minor_version()`, but from the headers used at
     * application compile time, rather than from the library linked
     * against at application run time.
     */
    const MINOR_VERSION: number;
    /**
     * Gets the quark for the domain of download errors.
     * @returns download error domain.
     */
    function download_error_quark(): GLib.Quark;
    /**
     * Gets the quark for the domain of favicon database errors.
     * @returns favicon database error domain.
     */
    function favicon_database_error_quark(): GLib.Quark;
    /**
     * Returns the major version number of the WebKit library.
     *
     * (e.g. in WebKit version 1.8.3 this is 1.)
     *
     * This function is in the library, so it represents the WebKit library
     * your code is running against. Contrast with the #WEBKIT_MAJOR_VERSION
     * macro, which represents the major version of the WebKit headers you
     * have included when compiling your code.
     * @returns the major version number of the WebKit library
     */
    function get_major_version(): number;
    /**
     * Returns the micro version number of the WebKit library.
     *
     * (e.g. in WebKit version 1.8.3 this is 3.)
     *
     * This function is in the library, so it represents the WebKit library
     * your code is running against. Contrast with the #WEBKIT_MICRO_VERSION
     * macro, which represents the micro version of the WebKit headers you
     * have included when compiling your code.
     * @returns the micro version number of the WebKit library
     */
    function get_micro_version(): number;
    /**
     * Returns the minor version number of the WebKit library.
     *
     * (e.g. in WebKit version 1.8.3 this is 8.)
     *
     * This function is in the library, so it represents the WebKit library
     * your code is running against. Contrast with the #WEBKIT_MINOR_VERSION
     * macro, which represents the minor version of the WebKit headers you
     * have included when compiling your code.
     * @returns the minor version number of the WebKit library
     */
    function get_minor_version(): number;
    /**
     * Gets the quark for the domain of JavaScript errors.
     * @returns JavaScript error domain.
     */
    function javascript_error_quark(): GLib.Quark;
    /**
     * Get the key system for which access permission is being requested.
     * @param request a {@link WebKit2.MediaKeySystemPermissionRequest}
     * @returns the key system name for `request`
     * @since 2.32
     */
    function media_key_system_permission_get_name(request: MediaKeySystemPermissionRequest): string;
    /**
     * Gets the quark for the domain of networking errors.
     * @returns network error domain.
     */
    function network_error_quark(): GLib.Quark;
    /**
     * Gets the quark for the domain of plug-in errors.
     * @returns plug-in error domain.
     */
    function plugin_error_quark(): GLib.Quark;
    /**
     * Gets the quark for the domain of policy errors.
     * @returns policy error domain.
     */
    function policy_error_quark(): GLib.Quark;
    /**
     * Gets the quark for the domain of printing errors.
     * @returns print error domain.
     */
    function print_error_quark(): GLib.Quark;
    /**
     * Gets the quark for the domain of page snapshot errors.
     * @returns snapshot error domain.
     */
    function snapshot_error_quark(): GLib.Quark;
    /**
     * Use this function to format a URI for display.
     *
     * The URIs used internally by
     * WebKit may contain percent-encoded characters or Punycode, which are not
     * generally suitable to display to users. This function provides protection
     * against IDN homograph attacks, so in some cases the host part of the returned
     * URI may be in Punycode if the safety check fails.
     * @param uri the URI to be converted
     * @returns `uri` suitable for display, or `null` in    case of error.
     * @since 2.24
     */
    function uri_for_display(uri: string): string | null;
    /**
     * Gets the quark for the domain of user content filter errors.
     * @returns user content filter error domain.
     */
    function user_content_filter_error_quark(): GLib.Quark;
    /**
     * Check whether the permission request is for an audio device.
     * @param request a {@link WebKit2.UserMediaPermissionRequest}
     * @returns `true` if access to an audio device was requested.
     * @since 2.8
     */
    function user_media_permission_is_for_audio_device(request: UserMediaPermissionRequest): boolean;
    /**
     * Check whether the permission request is for a display device.
     * @param request a {@link WebKit2.UserMediaPermissionRequest}
     * @returns `true` if access to a display device was requested.
     * @since 2.34
     */
    function user_media_permission_is_for_display_device(request: UserMediaPermissionRequest): boolean;
    /**
     * Check whether the permission request is for a video device.
     * @param request a {@link WebKit2.UserMediaPermissionRequest}
     * @returns `true` if access to a video device was requested.
     * @since 2.8
     */
    function user_media_permission_is_for_video_device(request: UserMediaPermissionRequest): boolean;
    /**
     * Gets the quark for the domain of user message errors.
     * @returns user message error domain.
     */
    function user_message_error_quark(): GLib.Quark;
    /**
     * @gir-type Callback
     */
    interface URISchemeRequestCallback {
        (request: URISchemeRequest): void;
    }
    /**
     * @gir-type Flags
     */
    export namespace EditorTypingAttributes {
        export const $gtype: GObject.GType<EditorTypingAttributes>;
    }

    /**
     * Enum values with flags representing typing attributes.
     * @gir-type Flags
     * @since 2.10
     */
    enum EditorTypingAttributes {
        /**
         * No typing attributes.
         */
        NONE,
        /**
         * Bold typing attribute.
         */
        BOLD,
        /**
         * Italic typing attribute.
         */
        ITALIC,
        /**
         * Underline typing attribute.
         */
        UNDERLINE,
        /**
         * Strikethrough typing attribute.
         */
        STRIKETHROUGH,
    }

    /**
     * @gir-type Flags
     */
    export namespace FindOptions {
        export const $gtype: GObject.GType<FindOptions>;
    }

    /**
     * Enum values used to specify search options.
     * @gir-type Flags
     */
    enum FindOptions {
        /**
         * no search flags, this means a case
         *   sensitive, no wrap, forward only search.
         */
        NONE,
        /**
         * case insensitive search.
         */
        CASE_INSENSITIVE,
        /**
         * search text only at the
         *   begining of the words.
         */
        AT_WORD_STARTS,
        /**
         * treat
         *   capital letters in the middle of words as word start.
         */
        TREAT_MEDIAL_CAPITAL_AS_WORD_START,
        /**
         * search backwards.
         */
        BACKWARDS,
        /**
         * if not present search will stop
         *   at the end of the document.
         */
        WRAP_AROUND,
    }

    /**
     * @gir-type Flags
     */
    export namespace HitTestResultContext {
        export const $gtype: GObject.GType<HitTestResultContext>;
    }

    /**
     * Enum values with flags representing the context of a {@link WebKit2.HitTestResult}.
     * @gir-type Flags
     */
    enum HitTestResultContext {
        /**
         * anywhere in the document.
         */
        DOCUMENT,
        /**
         * a hyperlink element.
         */
        LINK,
        /**
         * an image element.
         */
        IMAGE,
        /**
         * a video or audio element.
         */
        MEDIA,
        /**
         * an editable element
         */
        EDITABLE,
        /**
         * a scrollbar element.
         */
        SCROLLBAR,
        /**
         * a selected element. Since 2.8
         */
        SELECTION,
    }

    /**
     * @gir-type Flags
     */
    export namespace InputHints {
        export const $gtype: GObject.GType<InputHints>;
    }

    /**
     * Enum values used to describe hints that might be taken into account by input methods.
     * @gir-type Flags
     * @since 2.28
     */
    enum InputHints {
        /**
         * No special behavior suggested
         */
        NONE,
        /**
         * Suggest spell checking
         */
        SPELLCHECK,
        /**
         * Suggest to not autocapitlize
         */
        LOWERCASE,
        /**
         * Suggest to capitalize all text
         */
        UPPERCASE_CHARS,
        /**
         * Suggest to capitalize the first character of each word
         */
        UPPERCASE_WORDS,
        /**
         * Suggest to capitalize the first word of each sentence
         */
        UPPERCASE_SENTENCES,
        /**
         * Suggest to not show an onscreen keyboard
         */
        INHIBIT_OSK,
    }

    /**
     * @gir-type Flags
     */
    export namespace SnapshotOptions {
        export const $gtype: GObject.GType<SnapshotOptions>;
    }

    /**
     * Enum values used to specify options when taking a snapshot
     * from a {@link WebKit2.WebView}.
     * @gir-type Flags
     */
    enum SnapshotOptions {
        /**
         * Do not include any special options.
         */
        NONE,
        /**
         * Whether to include in the
         * snapshot the highlight of the selected content.
         */
        INCLUDE_SELECTION_HIGHLIGHTING,
        /**
         * Do not fill the background with white before
         * rendering the snapshot. Since 2.8
         */
        TRANSPARENT_BACKGROUND,
    }

    /**
     * @gir-type Flags
     */
    export namespace WebsiteDataTypes {
        export const $gtype: GObject.GType<WebsiteDataTypes>;
    }

    /**
     * Enum values with flags representing types of Website data.
     * @gir-type Flags
     * @since 2.16
     */
    enum WebsiteDataTypes {
        /**
         * Memory cache.
         */
        MEMORY_CACHE,
        /**
         * HTTP disk cache.
         */
        DISK_CACHE,
        /**
         * Offline web application cache.
         */
        OFFLINE_APPLICATION_CACHE,
        /**
         * Session storage data.
         */
        SESSION_STORAGE,
        /**
         * Local storage data.
         */
        LOCAL_STORAGE,
        /**
         * WebSQL databases. Deprecated 2.24
         */
        WEBSQL_DATABASES,
        /**
         * IndexedDB databases.
         */
        INDEXEDDB_DATABASES,
        /**
         * Plugins data. Deprecated 2.32
         */
        PLUGIN_DATA,
        /**
         * Cookies.
         */
        COOKIES,
        /**
         * Hash salt used to generate the device ids used by webpages. Since 2.24
         */
        DEVICE_ID_HASH_SALT,
        /**
         * HSTS cache. Since 2.26
         */
        HSTS_CACHE,
        /**
         * Intelligent Tracking Prevention data. Since 2.30.
         */
        ITP,
        /**
         * Service worker registrations. Since 2.30
         */
        SERVICE_WORKER_REGISTRATIONS,
        /**
         * DOM (CacheStorage) cache. Since 2.30
         */
        DOM_CACHE,
        /**
         * All types.
         */
        ALL,
    }

    namespace AuthenticationRequest {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This signal is emitted when the user authentication request succeeded.
             * Applications handling their own credential storage should connect to
             * this signal to save the credentials.
             * @signal
             * @since 2.30
             * @run-last
             */
            authenticated: (arg0: Credential) => void;
            /**
             * This signal is emitted when the user authentication request is
             * cancelled. It allows the application to dismiss its authentication
             * dialog in case of page load failure for example.
             * @signal
             * @since 2.2
             * @run-last
             */
            cancelled: () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Represents an authentication request.
     *
     * Whenever a client attempts to load a page protected by HTTP
     * authentication, credentials will need to be provided to authorize access.
     * To allow the client to decide how it wishes to handle authentication,
     * WebKit will fire a {@link WebKit2.WebView.SignalSignatures.authenticate | WebKit2.WebView::authenticate} signal with a
     * WebKitAuthenticationRequest object to provide client side
     * authentication support. Credentials are exposed through the
     * {@link WebKit2.Credential} object.
     *
     * In case the client application does not wish
     * to handle this signal WebKit will provide a default handler. To handle
     * authentication asynchronously, simply increase the reference count of the
     * WebKitAuthenticationRequest object.
     * @gir-type Class
     */
    class AuthenticationRequest extends GObject.Object {
        static $gtype: GObject.GType<AuthenticationRequest>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AuthenticationRequest.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AuthenticationRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof AuthenticationRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AuthenticationRequest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AuthenticationRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AuthenticationRequest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AuthenticationRequest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AuthenticationRequest.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Authenticate the {@link WebKit2.AuthenticationRequest}.
         *
         * Authenticate the {@link WebKit2.AuthenticationRequest} using the {@link WebKit2.Credential}
         * supplied. To continue without credentials, pass `null` as `credential`.
         * @param credential A {@link WebKit2.Credential}, or `null`
         */
        authenticate(credential?: Credential | null): void;
        /**
         * Determine whether this {@link WebKit2.AuthenticationRequest} should allow the storage of credentials.
         *
         * Determine whether the authentication method associated with this
         * {@link WebKit2.AuthenticationRequest} should allow the storage of credentials.
         * This will return `false` if WebKit doesn't support credential storing,
         * if private browsing is enabled, or if persistent credential storage has been
         * disabled in {@link WebKit2.WebsiteDataManager}, unless credentials saving has been
         * explicitly enabled with `webkit_authentication_request_set_can_save_credentials()`.
         * @returns `true` if WebKit can store credentials or `false` otherwise.
         */
        can_save_credentials(): boolean;
        /**
         * Cancel the authentication challenge.
         *
         * This will also cancel the page loading and result in a
         * {@link WebKit2.WebView.SignalSignatures.load_failed | WebKit2.WebView::load-failed} signal with a {@link WebKit2.NetworkError} of type {@link WebKit2.NetworkError.CANCELLED} being emitted.
         */
        cancel(): void;
        /**
         * Get the {@link Gio.TlsPasswordFlags} of the {@link WebKit2.AuthenticationScheme.CLIENT_CERTIFICATE_PIN_REQUESTED} authentication challenge.
         * @returns a {@link Gio.TlsPasswordFlags}
         */
        get_certificate_pin_flags(): Gio.TlsPasswordFlags;
        /**
         * Get the host that this authentication challenge is applicable to.
         * @returns The host of `request`.
         */
        get_host(): string;
        /**
         * Get the port that this authentication challenge is applicable to.
         * @returns The port of `request`.
         */
        get_port(): number;
        /**
         * Get the {@link WebKit2.Credential} of the proposed authentication challenge.
         *
         * Get the {@link WebKit2.Credential} of the proposed authentication challenge that was
         * stored from a previous session. The client can use this directly for
         * authentication or construct their own {@link WebKit2.Credential}.
         * @returns A {@link WebKit2.Credential} encapsulating credential details or `null` if there is no stored credential.
         */
        get_proposed_credential(): Credential;
        /**
         * Get the realm that this authentication challenge is applicable to.
         * @returns The realm of `request`.
         */
        get_realm(): string;
        /**
         * Get the authentication scheme of the authentication challenge.
         * @returns The {@link WebKit2.AuthenticationScheme} of `request`.
         */
        get_scheme(): AuthenticationScheme;
        /**
         * Get the {@link WebKit2.SecurityOrigin} that this authentication challenge is applicable to.
         * @returns a newly created {@link WebKit2.SecurityOrigin}.
         */
        get_security_origin(): SecurityOrigin;
        /**
         * Determine whether the authentication challenge is associated with a proxy server.
         *
         * Determine whether the authentication challenge is associated with a proxy server rather than an "origin" server.
         * @returns `true` if authentication is for a proxy or `false` otherwise.
         */
        is_for_proxy(): boolean;
        /**
         * Determine whether this this is a first attempt or a retry for this authentication challenge.
         * @returns `true` if authentication attempt is a retry or `false` otherwise.
         */
        is_retry(): boolean;
        /**
         * Set whether the authentication method associated with `request`
         * should allow the storage of credentials.
         *
         * Set whether the authentication method associated with `request`
         * should allow the storage of credentials.
         * This should be used by applications handling their own credentials
         * storage to indicate that it should be supported even when internal
         * credential storage is disabled or unsupported.
         * Note that storing of credentials will not be allowed on ephemeral
         * sessions in any case.
         * @param enabled value to set
         */
        set_can_save_credentials(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Credential} of the proposed authentication challenge.
         *
         * Set the {@link WebKit2.Credential} of the proposed authentication challenge that was
         * stored from a previous session. This should only be used by applications handling
         * their own credential storage. (When using the default WebKit credential storage,
         * `webkit_authentication_request_get_proposed_credential()` already contains previously-stored
         * credentials.)
         * Passing a `null` `credential` will clear the proposed credential.
         * @param credential a {@link WebKit2.Credential}, or `null`
         */
        set_proposed_credential(credential: Credential): void;
    }

    namespace AutomationSession {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This signal is emitted when the automation client requests a new
             * browsing context to interact with it. The callback handler should
             * return a {@link WebKit2.WebView} created with {@link WebKit2.WebView.is_controlled_by_automation}
             * construct property enabled and {@link WebKit2.WebView.automation_presentation_type} construct
             * property set if needed.
             *
             * If the signal is emitted with "tab" detail, the returned {@link WebKit2.WebView} should be
             * a new web view added to a new tab of the current browsing context window.
             * If the signal is emitted with "window" detail, the returned {@link WebKit2.WebView} should be
             * a new web view added to a new window.
             * When creating a new web view and there's an active browsing context, the new window
             * or tab shouldn't be focused.
             * @signal
             * @since 2.18
             * @detailed
             * @run-last
             */
            'create-web-view': () => WebView;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            /**
             * This signal is emitted when the automation client requests a new
             * browsing context to interact with it. The callback handler should
             * return a {@link WebKit2.WebView} created with {@link WebKit2.WebView.is_controlled_by_automation}
             * construct property enabled and {@link WebKit2.WebView.automation_presentation_type} construct
             * property set if needed.
             *
             * If the signal is emitted with "tab" detail, the returned {@link WebKit2.WebView} should be
             * a new web view added to a new tab of the current browsing context window.
             * If the signal is emitted with "window" detail, the returned {@link WebKit2.WebView} should be
             * a new web view added to a new window.
             * When creating a new web view and there's an active browsing context, the new window
             * or tab shouldn't be focused.
             * @signal
             * @since 2.18
             * @detailed
             * @run-last
             */
            'create-web-view::id': () => WebView;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            id: string;
        }
    }

    /**
     * Automation Session.
     *
     * WebKitAutomationSession represents an automation session of a WebKitWebContext.
     * When a new session is requested, a WebKitAutomationSession is created and the signal
     * WebKitWebContext::automation-started is emitted with the WebKitAutomationSession as
     * argument. Then, the automation client can request the session to create a new
     * {@link WebKit2.WebView} to interact with it. When this happens the signal {@link WebKit2.AutomationSession.SignalSignatures.create_web_view | WebKit2.AutomationSession::create-web-view}
     * is emitted.
     * @gir-type Class
     * @since 2.18
     */
    class AutomationSession extends GObject.Object {
        static $gtype: GObject.GType<AutomationSession>;

        // Properties

        /**
         * The session unique identifier.
         * @since 2.18
         * @construct-only
         */
        get id(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AutomationSession.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AutomationSession.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof AutomationSession.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AutomationSession.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AutomationSession.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AutomationSession.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AutomationSession.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AutomationSession.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the the previously set {@link WebKit2.AutomationSession}.
         *
         * Get the {@link WebKit2.AutomationSession} previously set with `webkit_automation_session_set_application_info()`.
         * @returns the {@link WebKit2.AutomationSession} of `session`, or `null` if no one has been set.
         */
        get_application_info(): ApplicationInfo;
        /**
         * Get the unique identifier of a {@link WebKit2.AutomationSession}
         * @returns the unique identifier of `session`
         */
        get_id(): string;
        /**
         * Set the application information to `session`.
         *
         * This information will be used by the driver service
         * to match the requested capabilities with the actual application information. If this information
         * is not provided to the session when a new automation session is requested, the creation might fail
         * if the client requested a specific browser name or version. This will not have any effect when called
         * after the automation session has been fully created, so this must be called in the callback of
         * {@link WebKit2.WebContext.SignalSignatures.automation_started | WebKit2.WebContext::automation-started} signal.
         * @param info a {@link WebKit2.ApplicationInfo}
         */
        set_application_info(info: ApplicationInfo): void;
    }

    namespace BackForwardList {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This signal is emitted when `back_forward_list` changes. This happens
             * when the current item is updated, a new item is added or one or more
             * items are removed. Note that both `item_added` and `items_removed` can
             * `null` when only the current item is updated. Items are only removed
             * when the list is cleared or the maximum items limit is reached.
             * @signal
             * @run-last
             */
            changed: (arg0: BackForwardListItem | null, arg1: any | null) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * List of visited pages.
     *
     * WebKitBackForwardList maintains a list of visited pages used to
     * navigate to recent pages. Items are inserted in the list in the
     * order they are visited.
     *
     * WebKitBackForwardList also maintains the notion of the current item
     * (which is always at index 0), the preceding item (which is at index -1),
     * and the following item (which is at index 1).
     * Methods `webkit_web_view_go_back()` and `webkit_web_view_go_forward()` move
     * the current item backward or forward by one. Method
     * `webkit_web_view_go_to_back_forward_list_item()` sets the current item to the
     * specified item. All other methods returning {@link WebKit2.BackForwardListItem}<!-- -->s
     * do not change the value of the current item, they just return the requested
     * item or items.
     * @gir-type Class
     */
    class BackForwardList extends GObject.Object {
        static $gtype: GObject.GType<BackForwardList>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BackForwardList.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BackForwardList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof BackForwardList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackForwardList.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BackForwardList.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackForwardList.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BackForwardList.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BackForwardList.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Returns the item that precedes the current item.
         * @returns the {@link WebKit2.BackForwardListItem}    preceding the current item or `null`.
         */
        get_back_item(): BackForwardListItem | null;
        /**
         * Obtain the list of items preceding the current one.
         * @returns a {@link GLib.List} of    items preceding the current item.
         */
        get_back_list(): BackForwardListItem[];
        /**
         * Obtain a list up to some number of items preceding the current one.
         * @param limit the number of items to retrieve
         * @returns a {@link GLib.List} of    items preceding the current item limited by `limit`.
         */
        get_back_list_with_limit(limit: number): BackForwardListItem[];
        /**
         * Returns the current item in `back_forward_list`.
         * @returns a {@link WebKit2.BackForwardListItem}    or `null` if `back_forward_list` is empty.
         */
        get_current_item(): BackForwardListItem | null;
        /**
         * Returns the item that follows the current item.
         * @returns the {@link WebKit2.BackForwardListItem}    following the current item or `null`.
         */
        get_forward_item(): BackForwardListItem | null;
        /**
         * Obtain the list of items following the current one.
         * @returns a {@link GLib.List} of    items following the current item.
         */
        get_forward_list(): BackForwardListItem[];
        /**
         * Obtain a list up to some number of items following the current one.
         * @param limit the number of items to retrieve
         * @returns a {@link GLib.List} of    items following the current item limited by `limit`.
         */
        get_forward_list_with_limit(limit: number): BackForwardListItem[];
        /**
         * Obtain the amount of items in the list.
         * @returns the length of `back_forward_list`.
         */
        get_length(): number;
        /**
         * Returns the item at a given index relative to the current item.
         * @param index the index of the item
         * @returns the {@link WebKit2.BackForwardListItem}    located at the specified index relative to the current item or `null`.
         */
        get_nth_item(index: number): BackForwardListItem | null;
    }

    namespace BackForwardListItem {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {}
    }

    /**
     * One item of the {@link WebKit2.BackForwardList}.
     *
     * A history item is part of the {@link WebKit2.BackForwardList} and consists
     * out of a title and a URI.
     * @gir-type Class
     */
    class BackForwardListItem extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<BackForwardListItem>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BackForwardListItem.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BackForwardListItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof BackForwardListItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackForwardListItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BackForwardListItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackForwardListItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BackForwardListItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BackForwardListItem.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Obtain the original URI of the item.
         *
         * See also `webkit_back_forward_list_item_get_uri()`.
         * @returns the original URI of `list_item` or `null`    when the original URI is empty.
         */
        get_original_uri(): string;
        /**
         * Obtain the title of the item.
         * @returns the page title of `list_item` or `null`    when the title is empty.
         */
        get_title(): string;
        /**
         * Obtain the URI of the item.
         *
         * This URI may differ from the original URI if the page was,
         * for example, redirected to a new location.
         * See also `webkit_back_forward_list_item_get_original_uri()`.
         * @returns the URI of `list_item` or `null`    when the URI is empty.
         */
        get_uri(): string;
    }

    namespace ColorChooserRequest {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the `request` finishes. This signal can be emitted because the
             * user completed the `request` calling `webkit_color_chooser_request_finish()`,
             * or cancelled it with `webkit_color_chooser_request_cancel()` or because the
             * color input element is removed from the DOM.
             * @signal
             * @since 2.8
             * @run-last
             */
            finished: () => void;
            'notify::rgba': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            rgba: Gdk.RGBA;
        }
    }

    /**
     * A request to open a color chooser.
     *
     * Whenever the user interacts with an <input type='color' />
     * HTML element, WebKit will need to show a dialog to choose a color. For that
     * to happen in a general way, instead of just opening a {@link Gtk.ColorChooser}
     * (which might be not desirable in some cases, which could prefer to use their
     * own color chooser dialog), WebKit will fire the
     * {@link WebKit2.WebView.SignalSignatures.run_color_chooser | WebKit2.WebView::run-color-chooser} signal with a {@link WebKit2.ColorChooserRequest}
     * object, which will allow the client application to specify the color to be
     * selected, to inspect the details of the request (e.g. to get initial color)
     * and to cancel the request, in case nothing was selected.
     *
     * In case the client application does not wish to handle this signal,
     * WebKit will provide a default handler which will asynchronously run
     * a regular {@link Gtk.ColorChooserDialog} for the user to interact with.
     * @gir-type Class
     */
    class ColorChooserRequest extends GObject.Object {
        static $gtype: GObject.GType<ColorChooserRequest>;

        // Properties

        /**
         * The {@link Gdk.RGBA} color of the request
         * @since 2.8
         */
        get rgba(): Gdk.RGBA;
        set rgba(val: Gdk.RGBA);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ColorChooserRequest.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ColorChooserRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ColorChooserRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ColorChooserRequest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ColorChooserRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ColorChooserRequest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ColorChooserRequest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ColorChooserRequest.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Cancels `request` and the input element changes to use the initial color.
         *
         * Cancels `request` and the input element changes to use the initial color
         * it has before the request started.
         * The signal {@link WebKit2.ColorChooserRequest.SignalSignatures.finished | WebKit2.ColorChooserRequest::finished}
         * is emitted to notify that the request has finished.
         */
        cancel(): void;
        /**
         * Finishes `request` and the input element keeps the current value of
         * {@link WebKit2.ColorChooserRequest.rgba}.
         *
         * Finishes `request` and the input element keeps the current value of
         * {@link WebKit2.ColorChooserRequest.rgba}.
         * The signal {@link WebKit2.ColorChooserRequest.SignalSignatures.finished | WebKit2.ColorChooserRequest::finished}
         * is emitted to notify that the request has finished.
         */
        finish(): void;
        /**
         * Gets the bounding box of the color input element.
         */
        get_element_rectangle(): Gdk.Rectangle;
        /**
         * Gets the current {@link Gdk.RGBA} color of `request`
         */
        get_rgba(): Gdk.RGBA;
        /**
         * Sets the current {@link Gdk.RGBA} color of `request`
         * @param rgba a pointer {@link Gdk.RGBA}
         */
        set_rgba(rgba: Gdk.RGBA): void;
    }

    namespace ContextMenu {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Represents the context menu in a {@link WebKit2.WebView}.
     *
     * {@link WebKit2.ContextMenu} represents a context menu containing
     * {@link WebKit2.ContextMenuItem}<!-- -->s in a {@link WebKit2.WebView}.
     *
     * When a {@link WebKit2.WebView} is about to display the context menu, it
     * emits the {@link WebKit2.WebView.SignalSignatures.context_menu | WebKit2.WebView::context-menu} signal, which has the
     * {@link WebKit2.ContextMenu} as an argument. You can modify it, adding new
     * submenus that you can create with `webkit_context_menu_new()`, adding
     * new {@link WebKit2.ContextMenuItem}<!-- -->s with
     * `webkit_context_menu_prepend()`, `webkit_context_menu_append()` or
     * `webkit_context_menu_insert()`, maybe after having removed the
     * existing ones with `webkit_context_menu_remove_all()`.
     * @gir-type Class
     */
    class ContextMenu extends GObject.Object {
        static $gtype: GObject.GType<ContextMenu>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ContextMenu.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ContextMenu.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ContextMenu;

        static new_with_items(items: ContextMenuItem[]): ContextMenu;

        // Signals

        /** @signal */
        connect<K extends keyof ContextMenu.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ContextMenu.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ContextMenu.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ContextMenu.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ContextMenu.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ContextMenu.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds `item` at the end of the `menu`.
         * @param item the {@link WebKit2.ContextMenuItem} to add
         */
        append(item: ContextMenuItem): void;
        /**
         * Gets the first item in the `menu`.
         * @returns the first {@link WebKit2.ContextMenuItem} of `menu`,    or `null` if the {@link WebKit2.ContextMenu} is empty.
         */
        first(): ContextMenuItem;
        /**
         * Gets the item at the given position in the `menu`.
         * @param position the position of the item, counting from 0
         * @returns the {@link WebKit2.ContextMenuItem} at position `position` in `menu`,    or `null` if the position is off the end of the `menu`.
         */
        get_item_at_position(position: number): ContextMenuItem;
        /**
         * Returns the item list of `menu`.
         * @returns a {@link GLib.List} of    {@link WebKit2.ContextMenuItem}<!-- -->s
         */
        get_items(): ContextMenuItem[];
        /**
         * Gets the length of the `menu`.
         * @returns the number of {@link WebKit2.ContextMenuItem}<!-- -->s in `menu`
         */
        get_n_items(): number;
        /**
         * Gets the user data of `menu`.
         *
         * This function can be used from the UI Process to get user data previously set
         * from the Web Process with `webkit_context_menu_set_user_data()`.
         * @returns the user data of `menu`, or `null` if `menu` doesn't have user data
         */
        get_user_data(): GLib.Variant;
        /**
         * Inserts `item` into the `menu` at the given position.
         *
         * If `position` is negative, or is larger than the number of items
         * in the {@link WebKit2.ContextMenu}, the item is added on to the end of
         * the `menu`. The first position is 0.
         * @param item the {@link WebKit2.ContextMenuItem} to add
         * @param position the position to insert the item
         */
        insert(item: ContextMenuItem, position: number): void;
        /**
         * Gets the last item in the `menu`.
         * @returns the last {@link WebKit2.ContextMenuItem} of `menu`,    or `null` if the {@link WebKit2.ContextMenu} is empty.
         */
        last(): ContextMenuItem;
        /**
         * Moves `item` to the given position in the `menu`.
         *
         * If `position` is negative, or is larger than the number of items
         * in the {@link WebKit2.ContextMenu}, the item is added on to the end of
         * the `menu`.
         * The first position is 0.
         * @param item the {@link WebKit2.ContextMenuItem} to add
         * @param position the new position to move the item
         */
        move_item(item: ContextMenuItem, position: number): void;
        /**
         * Adds `item` at the beginning of the `menu`.
         * @param item the {@link WebKit2.ContextMenuItem} to add
         */
        prepend(item: ContextMenuItem): void;
        /**
         * Removes `item` from the `menu`.
         *
         * See also `webkit_context_menu_remove_all()` to remove all items.
         * @param item the {@link WebKit2.ContextMenuItem} to remove
         */
        remove(item: ContextMenuItem): void;
        /**
         * Removes all items of the `menu`.
         */
        remove_all(): void;
        /**
         * Sets user data to `menu`.
         *
         * This function can be used from a Web Process extension to set user data
         * that can be retrieved from the UI Process using `webkit_context_menu_get_user_data()`.
         * If the `user_data` {@link GLib.Variant} is floating, it is consumed.
         * @param user_data a {@link GLib.Variant}
         */
        set_user_data(user_data: GLib.Variant): void;
    }

    namespace ContextMenuItem {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {}
    }

    /**
     * One item of a {@link WebKit2.ContextMenu}.
     *
     * The {@link WebKit2.ContextMenu} is composed of {@link WebKit2.ContextMenuItem}<!--
     * -->s. These items can be created from a `GtkAction`, from a
     * {@link WebKit2.ContextMenuAction} or from a {@link WebKit2.ContextMenuAction} and a
     * label. These {@link WebKit2.ContextMenuAction}<!-- -->s denote stock actions
     * for the items. You can also create separators and submenus.
     * @gir-type Class
     */
    class ContextMenuItem extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<ContextMenuItem>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ContextMenuItem.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ContextMenuItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_gaction(action: Gio.Action, label: string, target?: GLib.Variant | null): ContextMenuItem;

        static new_from_stock_action(action: ContextMenuAction): ContextMenuItem;

        static new_from_stock_action_with_label(action: ContextMenuAction, label: string): ContextMenuItem;

        static new_separator(): ContextMenuItem;

        static new_with_submenu(label: string, submenu: ContextMenu): ContextMenuItem;

        // Signals

        /** @signal */
        connect<K extends keyof ContextMenuItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ContextMenuItem.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ContextMenuItem.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ContextMenuItem.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ContextMenuItem.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ContextMenuItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the action associated to `item` as a {@link Gio.Action}.
         * @returns the {@link Gio.Action} associated to the {@link WebKit2.ContextMenuItem},    or `null` if `item` is a separator.
         */
        get_gaction(): Gio.Action;
        /**
         * Gets the {@link WebKit2.ContextMenuAction} of `item`.
         *
         * If the {@link WebKit2.ContextMenuItem} was not
         * created for a stock action {@link WebKit2.ContextMenuAction.CUSTOM} will be
         * returned. If the {@link WebKit2.ContextMenuItem} is a separator {@link WebKit2.ContextMenuAction.NO_ACTION}
         * will be returned.
         * @returns the {@link WebKit2.ContextMenuAction} of `item`
         */
        get_stock_action(): ContextMenuAction;
        /**
         * Gets the submenu of `item`.
         * @returns the {@link WebKit2.ContextMenu} representing the submenu of    `item` or `null` if `item` doesn't have a submenu.
         */
        get_submenu(): ContextMenu;
        /**
         * Checks whether `item` is a separator.
         * @returns `true` is `item` is a separator or `false` otherwise
         */
        is_separator(): boolean;
        /**
         * Sets or replaces the `item` submenu.
         *
         * If `submenu` is `null` the current
         * submenu of `item` is removed.
         * @param submenu a {@link WebKit2.ContextMenu}
         */
        set_submenu(submenu?: ContextMenu | null): void;
    }

    namespace CookieManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This signal is emitted when cookies are added, removed or modified.
             * @signal
             * @run-last
             */
            changed: () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Defines how to handle cookies in a {@link WebKit2.WebContext}.
     *
     * The WebKitCookieManager defines how to set up and handle cookies.
     * You can get it from a {@link WebKit2.WebsiteDataManager} with
     * `webkit_website_data_manager_get_cookie_manager()`, and use it to set where to
     * store cookies with `webkit_cookie_manager_set_persistent_storage()`,
     * or to set the acceptance policy, with `webkit_cookie_manager_get_accept_policy()`.
     * @gir-type Class
     */
    class CookieManager extends GObject.Object {
        static $gtype: GObject.GType<CookieManager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CookieManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CookieManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof CookieManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CookieManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CookieManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CookieManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CookieManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CookieManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Asynchronously add a {@link Soup.Cookie} to the underlying storage.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_cookie_manager_add_cookie_finish()` to get the result of the operation.
         * @param cookie the {@link Soup.Cookie} to be added
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         */
        add_cookie(cookie: Soup.Cookie, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously add a {@link Soup.Cookie} to the underlying storage.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_cookie_manager_add_cookie_finish()` to get the result of the operation.
         * @param cookie the {@link Soup.Cookie} to be added
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        add_cookie(
            cookie: Soup.Cookie,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously add a {@link Soup.Cookie} to the underlying storage.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_cookie_manager_add_cookie_finish()` to get the result of the operation.
         * @param cookie the {@link Soup.Cookie} to be added
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        add_cookie(
            cookie: Soup.Cookie,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finish an asynchronous operation started with `webkit_cookie_manager_add_cookie()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if the cookie was added or `false` in case of error.
         */
        add_cookie_finish(result: Gio.AsyncResult): boolean;
        /**
         * Delete all cookies of `cookie_manager`.
         */
        delete_all_cookies(): void;
        /**
         * Asynchronously delete a {@link Soup.Cookie} from the current session.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_cookie_manager_delete_cookie_finish()` to get the result of the operation.
         * @param cookie the {@link Soup.Cookie} to be deleted
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         */
        delete_cookie(cookie: Soup.Cookie, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously delete a {@link Soup.Cookie} from the current session.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_cookie_manager_delete_cookie_finish()` to get the result of the operation.
         * @param cookie the {@link Soup.Cookie} to be deleted
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        delete_cookie(
            cookie: Soup.Cookie,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously delete a {@link Soup.Cookie} from the current session.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_cookie_manager_delete_cookie_finish()` to get the result of the operation.
         * @param cookie the {@link Soup.Cookie} to be deleted
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        delete_cookie(
            cookie: Soup.Cookie,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finish an asynchronous operation started with `webkit_cookie_manager_delete_cookie()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if the cookie was deleted or `false` in case of error.
         */
        delete_cookie_finish(result: Gio.AsyncResult): boolean;
        /**
         * Remove all cookies of `cookie_manager` for the given `domain`.
         * @param domain a domain name
         */
        delete_cookies_for_domain(domain: string): void;
        /**
         * Asynchronously get the cookie acceptance policy of `cookie_manager`.
         *
         * Note that when policy was set to {@link WebKit2.CookieAcceptPolicy.NO_THIRD_PARTY} and
         * ITP is enabled, this will return {@link WebKit2.CookieAcceptPolicy.ALWAYS}.
         * See also `webkit_website_data_manager_set_itp_enabled()`.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_cookie_manager_get_accept_policy_finish()` to get the result of the operation.
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         */
        get_accept_policy(cancellable?: Gio.Cancellable | null): globalThis.Promise<CookieAcceptPolicy>;
        /**
         * Asynchronously get the cookie acceptance policy of `cookie_manager`.
         *
         * Note that when policy was set to {@link WebKit2.CookieAcceptPolicy.NO_THIRD_PARTY} and
         * ITP is enabled, this will return {@link WebKit2.CookieAcceptPolicy.ALWAYS}.
         * See also `webkit_website_data_manager_set_itp_enabled()`.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_cookie_manager_get_accept_policy_finish()` to get the result of the operation.
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_accept_policy(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously get the cookie acceptance policy of `cookie_manager`.
         *
         * Note that when policy was set to {@link WebKit2.CookieAcceptPolicy.NO_THIRD_PARTY} and
         * ITP is enabled, this will return {@link WebKit2.CookieAcceptPolicy.ALWAYS}.
         * See also `webkit_website_data_manager_set_itp_enabled()`.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_cookie_manager_get_accept_policy_finish()` to get the result of the operation.
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_accept_policy(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<CookieAcceptPolicy> | void;
        /**
         * Finish an asynchronous operation started with `webkit_cookie_manager_get_accept_policy()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns the cookie acceptance policy of `cookie_manager` as a {@link WebKit2.CookieAcceptPolicy}.
         */
        get_accept_policy_finish(result: Gio.AsyncResult): CookieAcceptPolicy;
        /**
         * Asynchronously get a list of {@link Soup.Cookie} from `cookie_manager`.
         *
         * Asynchronously get a list of {@link Soup.Cookie} from `cookie_manager` associated with `uri`, which
         * must be either an HTTP or an HTTPS URL.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_cookie_manager_get_cookies_finish()` to get the result of the operation.
         * @param uri the URI associated to the cookies to be retrieved
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         */
        get_cookies(uri: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<Soup.Cookie[]>;
        /**
         * Asynchronously get a list of {@link Soup.Cookie} from `cookie_manager`.
         *
         * Asynchronously get a list of {@link Soup.Cookie} from `cookie_manager` associated with `uri`, which
         * must be either an HTTP or an HTTPS URL.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_cookie_manager_get_cookies_finish()` to get the result of the operation.
         * @param uri the URI associated to the cookies to be retrieved
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_cookies(
            uri: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously get a list of {@link Soup.Cookie} from `cookie_manager`.
         *
         * Asynchronously get a list of {@link Soup.Cookie} from `cookie_manager` associated with `uri`, which
         * must be either an HTTP or an HTTPS URL.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_cookie_manager_get_cookies_finish()` to get the result of the operation.
         * @param uri the URI associated to the cookies to be retrieved
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_cookies(
            uri: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Soup.Cookie[]> | void;
        /**
         * Finish an asynchronous operation started with `webkit_cookie_manager_get_cookies()`.
         *
         * The return value is a {@link GLib.SList} of {@link Soup.Cookie} instances which should be released
         * with `g_list_free_full()` and `soup_cookie_free()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns A {@link GLib.List} of {@link Soup.Cookie} instances.
         */
        get_cookies_finish(result: Gio.AsyncResult): Soup.Cookie[];
        /**
         * Asynchronously get the list of domains for which `cookie_manager` contains cookies.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_cookie_manager_get_domains_with_cookies_finish()` to get the result of the operation.
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         */
        get_domains_with_cookies(cancellable?: Gio.Cancellable | null): globalThis.Promise<string[]>;
        /**
         * Asynchronously get the list of domains for which `cookie_manager` contains cookies.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_cookie_manager_get_domains_with_cookies_finish()` to get the result of the operation.
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_domains_with_cookies(
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously get the list of domains for which `cookie_manager` contains cookies.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_cookie_manager_get_domains_with_cookies_finish()` to get the result of the operation.
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_domains_with_cookies(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string[]> | void;
        /**
         * Finish an asynchronous operation started with `webkit_cookie_manager_get_domains_with_cookies()`.
         *
         * The return value is a `null` terminated list of strings which should
         * be released with `g_strfreev()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns A `null` terminated array of domain names    or `null` in case of error.
         */
        get_domains_with_cookies_finish(result: Gio.AsyncResult): string[];
        /**
         * Set the cookie acceptance policy of `cookie_manager` as `policy`.
         *
         * Note that ITP has its own way to handle third-party cookies, so when it's enabled,
         * and `policy` is set to {@link WebKit2.CookieAcceptPolicy.NO_THIRD_PARTY}, {@link WebKit2.CookieAcceptPolicy.ALWAYS}
         * will be used instead. Once disabled, the policy will be set back to {@link WebKit2.CookieAcceptPolicy.NO_THIRD_PARTY}.
         * See also `webkit_website_data_manager_set_itp_enabled()`.
         * @param policy a {@link WebKit2.CookieAcceptPolicy}
         */
        set_accept_policy(policy: CookieAcceptPolicy | null): void;
        /**
         * Set non-session cookies.
         *
         * Set the `filename` where non-session cookies are stored persistently using
         * `storage` as the format to read/write the cookies.
         * Cookies are initially read from `filename` to create an initial set of cookies.
         * Then, non-session cookies will be written to `filename` when the WebKitCookieManager::changed
         * signal is emitted.
         * By default, `cookie_manager` doesn't store the cookies persistently, so you need to call this
         * method to keep cookies saved across sessions.
         *
         * This method should never be called on a {@link WebKit2.CookieManager} associated to an ephemeral {@link WebKit2.WebsiteDataManager}.
         * @param filename the filename to read to/write from
         * @param storage a {@link WebKit2.CookiePersistentStorage}
         */
        set_persistent_storage(filename: string, storage: CookiePersistentStorage | null): void;
    }

    namespace DeviceInfoPermissionRequest {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, PermissionRequest.ConstructorProps {}
    }

    /**
     * A permission request for accessing user's audio/video devices.
     *
     * WebKitUserMediaPermissionRequest represents a request for
     * permission to whether WebKit should be allowed to access the user's
     * devices information when requested through the enumerateDevices API.
     *
     * When a WebKitDeviceInfoPermissionRequest is not handled by the user,
     * it is denied by default.
     * @gir-type Class
     * @since 2.24
     */
    class DeviceInfoPermissionRequest extends GObject.Object implements PermissionRequest {
        static $gtype: GObject.GType<DeviceInfoPermissionRequest>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DeviceInfoPermissionRequest.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DeviceInfoPermissionRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DeviceInfoPermissionRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DeviceInfoPermissionRequest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DeviceInfoPermissionRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DeviceInfoPermissionRequest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DeviceInfoPermissionRequest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DeviceInfoPermissionRequest.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Allow the action which triggered this request.
         */
        allow(): void;
        /**
         * Deny the action which triggered this request.
         */
        deny(): void;
        /**
         * Allow the action which triggered this request.
         * @virtual
         */
        vfunc_allow(): void;
        /**
         * Deny the action which triggered this request.
         * @virtual
         */
        vfunc_deny(): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Download {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This signal is emitted after {@link WebKit2.Download.SignalSignatures.decide_destination | WebKit2.Download::decide-destination} and before
             * {@link WebKit2.Download.SignalSignatures.received_data | WebKit2.Download::received-data} to notify that destination file has been
             * created successfully at `destination`.
             * @signal
             * @run-last
             */
            'created-destination': (arg0: string) => void;
            /**
             * This signal is emitted after response is received to
             * decide a destination URI for the download. If this signal is not
             * handled the file will be downloaded to {@link GLib.UserDirectory.DIRECTORY_DOWNLOAD}
             * directory using `suggested_filename`.
             * @signal
             * @run-last
             */
            'decide-destination': (arg0: string) => boolean | void;
            /**
             * This signal is emitted when an error occurs during the download
             * operation. The given `error`, of the domain `WEBKIT_DOWNLOAD_ERROR`,
             * contains further details of the failure. If the download is cancelled
             * with `webkit_download_cancel()`, this signal is emitted with error
             * {@link WebKit2.DownloadError.CANCELLED_BY_USER}. The download operation finishes
             * after an error and {@link WebKit2.Download.SignalSignatures.finished | WebKit2.Download::finished} signal is emitted after this one.
             * @signal
             * @run-last
             */
            failed: (arg0: GLib.Error) => void;
            /**
             * This signal is emitted when download finishes successfully or due to an error.
             * In case of errors {@link WebKit2.Download.SignalSignatures.failed | WebKit2.Download::failed} signal is emitted before this one.
             * @signal
             * @run-last
             */
            finished: () => void;
            /**
             * This signal is emitted after response is received,
             * every time new data has been written to the destination. It's
             * useful to know the progress of the download operation.
             * @signal
             * @run-last
             */
            'received-data': (arg0: number) => void;
            'notify::allow-overwrite': (pspec: GObject.ParamSpec) => void;
            'notify::destination': (pspec: GObject.ParamSpec) => void;
            'notify::estimated-progress': (pspec: GObject.ParamSpec) => void;
            'notify::response': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            allow_overwrite: boolean;
            allowOverwrite: boolean;
            destination: string;
            estimated_progress: number;
            estimatedProgress: number;
            response: URIResponse;
        }
    }

    /**
     * Object used to communicate with the application when downloading.
     *
     * {@link WebKit2.Download} carries information about a download request and
     * response, including a {@link WebKit2.URIRequest} and a {@link WebKit2.URIResponse}
     * objects. The application may use this object to control the
     * download process, or to simply figure out what is to be downloaded,
     * and handle the download process itself.
     * @gir-type Class
     */
    class Download extends GObject.Object {
        static $gtype: GObject.GType<Download>;

        // Properties

        /**
         * Whether or not the download is allowed to overwrite an existing file on
         * disk. If this property is `false` and the destination already exists,
         * the download will fail.
         * @since 2.6
         */
        get allow_overwrite(): boolean;
        set allow_overwrite(val: boolean);
        /**
         * Whether or not the download is allowed to overwrite an existing file on
         * disk. If this property is `false` and the destination already exists,
         * the download will fail.
         * @since 2.6
         */
        get allowOverwrite(): boolean;
        set allowOverwrite(val: boolean);
        /**
         * The local URI to where the download will be saved.
         * @read-only
         */
        get destination(): string;
        /**
         * An estimate of the percent completion for the download operation.
         * This value will range from 0.0 to 1.0. The value is an estimate
         * based on the total number of bytes expected to be received for
         * a download.
         * If you need a more accurate progress information you can connect to
         * {@link WebKit2.Download.SignalSignatures.received_data | WebKit2.Download::received-data} signal to track the progress.
         * @read-only
         */
        get estimated_progress(): number;
        /**
         * An estimate of the percent completion for the download operation.
         * This value will range from 0.0 to 1.0. The value is an estimate
         * based on the total number of bytes expected to be received for
         * a download.
         * If you need a more accurate progress information you can connect to
         * {@link WebKit2.Download.SignalSignatures.received_data | WebKit2.Download::received-data} signal to track the progress.
         * @read-only
         */
        get estimatedProgress(): number;
        /**
         * The {@link WebKit2.URIResponse} associated with this download.
         * @read-only
         */
        get response(): URIResponse;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Download.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Download.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Download.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Download.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Download.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Download.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Download.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Download.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param suggested_filename
         * @virtual
         */
        vfunc_decide_destination(suggested_filename: string): boolean;

        // Methods

        /**
         * Cancels the download.
         *
         * When the ongoing download
         * operation is effectively cancelled the signal
         * {@link WebKit2.Download.SignalSignatures.failed | WebKit2.Download::failed} is emitted with
         * {@link WebKit2.DownloadError.CANCELLED_BY_USER} error.
         */
        cancel(): void;
        /**
         * Returns the current value of the {@link WebKit2.Download.allow_overwrite} property.
         *
         * Returns the current value of the {@link WebKit2.Download.allow_overwrite} property,
         * which determines whether the download will overwrite an existing file on
         * disk, or if it will fail if the destination already exists.
         * @returns the current value of the {@link WebKit2.Download.allow_overwrite} property
         */
        get_allow_overwrite(): boolean;
        /**
         * Obtains the URI to which the downloaded file will be written.
         *
         * You
         * can connect to {@link WebKit2.Download.SignalSignatures.created_destination | WebKit2.Download::created-destination} to make
         * sure this method returns a valid destination.
         * @returns the destination URI or `null`
         */
        get_destination(): string;
        /**
         * Gets the elapsed time in seconds, including any fractional part.
         *
         * If the download finished, had an error or was cancelled this is
         * the time between its start and the event.
         * @returns seconds since the download was started
         */
        get_elapsed_time(): number;
        /**
         * Gets the value of the {@link WebKit2.Download.estimated_progress} property.
         * Gets the value of the {@link WebKit2.Download.estimated_progress} property.
         * You can monitor the estimated progress of the download operation by
         * connecting to the notify::estimated-progress signal of `download`.
         * @returns an estimate of the of the percent complete for a download     as a range from 0.0 to 1.0.
         */
        get_estimated_progress(): number;
        /**
         * Gets the length of the data already downloaded for `download`.
         *
         * Gets the length of the data already downloaded for `download`
         * in bytes.
         * @returns the amount of bytes already downloaded.
         */
        get_received_data_length(): number;
        /**
         * Retrieves the {@link WebKit2.URIRequest} object that backs the download
         * process.
         * @returns the {@link WebKit2.URIRequest} of `download`
         */
        get_request(): URIRequest;
        /**
         * Retrieves the {@link WebKit2.URIResponse} object that backs the download process.
         *
         * Retrieves the {@link WebKit2.URIResponse} object that backs the download
         * process. This method returns `null` if called before the response
         * is received from the server. You can connect to notify::response
         * signal to be notified when the response is received.
         * @returns the {@link WebKit2.URIResponse}, or `null` if     the response hasn't been received yet.
         */
        get_response(): URIResponse;
        /**
         * Get the {@link WebKit2.WebView} that initiated the download.
         * @returns the {@link WebKit2.WebView} that initiated `download`,    or `null` if `download` was not initiated by a {@link WebKit2.WebView}.
         */
        get_web_view(): WebView;
        /**
         * Sets the {@link WebKit2.Download.allow_overwrite} property.
         *
         * Sets the {@link WebKit2.Download.allow_overwrite} property, which determines whether
         * the download may overwrite an existing file on disk, or if it will fail if
         * the destination already exists.
         * @param allowed the new value for the {@link WebKit2.Download.allow_overwrite} property
         */
        set_allow_overwrite(allowed: boolean): void;
        /**
         * Sets the URI to which the downloaded file will be written.
         *
         * This method should be called before the download transfer
         * starts or it will not have any effect on the ongoing download
         * operation. To set the destination using the filename suggested
         * by the server connect to {@link WebKit2.Download.SignalSignatures.decide_destination | WebKit2.Download::decide-destination}
         * signal and call `webkit_download_set_destination()`. If you want to
         * set a fixed destination URI that doesn't depend on the suggested
         * filename you can connect to notify::response signal and call
         * `webkit_download_set_destination()`.
         * If {@link WebKit2.Download.SignalSignatures.decide_destination | WebKit2.Download::decide-destination} signal is not handled
         * and destination URI is not set when the download transfer starts,
         * the file will be saved with the filename suggested by the server in
         * {@link GLib.UserDirectory.DIRECTORY_DOWNLOAD} directory.
         * @param uri the destination URI
         */
        set_destination(uri: string): void;
    }

    namespace EditorState {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::typing-attributes': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            typing_attributes: number;
            typingAttributes: number;
        }
    }

    /**
     * Web editor state.
     *
     * WebKitEditorState represents the state of a {@link WebKit2.WebView} editor.
     * Use `webkit_web_view_get_editor_state()` to get the WebKitEditorState
     * of a {@link WebKit2.WebView}.
     * @gir-type Class
     * @since 2.10
     */
    class EditorState extends GObject.Object {
        static $gtype: GObject.GType<EditorState>;

        // Properties

        /**
         * Bitmask of {@link WebKit2.EditorTypingAttributes} flags.
         * See `webkit_editor_state_get_typing_attributes()` for more information.
         * @since 2.10
         * @read-only
         */
        get typing_attributes(): number;
        /**
         * Bitmask of {@link WebKit2.EditorTypingAttributes} flags.
         * See `webkit_editor_state_get_typing_attributes()` for more information.
         * @since 2.10
         * @read-only
         */
        get typingAttributes(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EditorState.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<EditorState.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof EditorState.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EditorState.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof EditorState.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EditorState.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof EditorState.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<EditorState.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the typing attributes at the current cursor position.
         *
         * If there is a selection, this returns the typing attributes
         * of the selected text. Note that in case of a selection,
         * typing attributes are considered active only when they are
         * present throughout the selection.
         * @returns a bitmask of {@link WebKit2.EditorTypingAttributes} flags
         */
        get_typing_attributes(): number;
        /**
         * Gets whether a copy command can be issued.
         * @returns `true` if copy is currently available
         */
        is_copy_available(): boolean;
        /**
         * Gets whether a cut command can be issued.
         * @returns `true` if cut is currently available
         */
        is_cut_available(): boolean;
        /**
         * Gets whether a paste command can be issued.
         * @returns `true` if paste is currently available
         */
        is_paste_available(): boolean;
        /**
         * Gets whether a redo command can be issued.
         * @returns `true` if redo is currently available
         */
        is_redo_available(): boolean;
        /**
         * Gets whether an undo command can be issued.
         * @returns `true` if undo is currently available
         */
        is_undo_available(): boolean;
    }

    namespace FaviconDatabase {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This signal is emitted when the favicon URI of `page_uri` has
             * been changed to `favicon_uri` in the database. You can connect
             * to this signal and call `webkit_favicon_database_get_favicon()`
             * to get the favicon. If you are interested in the favicon of a
             * {@link WebKit2.WebView} it's easier to use the {@link WebKit2.WebView.favicon}
             * property. See `webkit_web_view_get_favicon()` for more details.
             * @signal
             * @run-last
             */
            'favicon-changed': (arg0: string, arg1: string) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Provides access to the icons associated with web sites.
     *
     * WebKit will automatically look for available icons in <link>
     * elements on opened pages as well as an existing favicon.ico and
     * load the images found into a memory cache if possible. That cache
     * is frozen to an on-disk database for persistence.
     *
     * If {@link WebKit2.Settings.enable_private_browsing} is `true`, new icons
     * won't be added to the on-disk database and no existing icons will
     * be deleted from it. Nevertheless, WebKit will still store them in
     * the in-memory cache during the current execution.
     * @gir-type Class
     */
    class FaviconDatabase extends GObject.Object {
        static $gtype: GObject.GType<FaviconDatabase>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FaviconDatabase.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FaviconDatabase.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof FaviconDatabase.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FaviconDatabase.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FaviconDatabase.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FaviconDatabase.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FaviconDatabase.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FaviconDatabase.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Clears all icons from the database.
         */
        clear(): void;
        /**
         * Asynchronously obtains a {@link cairo.Surface} of the favicon.
         *
         * Asynchronously obtains a {@link cairo.Surface} of the favicon for the
         * given page URI. It returns the cached icon if it's in the database
         * asynchronously waiting for the icon to be read from the database.
         *
         * This is an asynchronous method. When the operation is finished, callback will
         * be invoked. You can then call `webkit_favicon_database_get_favicon_finish()`
         * to get the result of the operation.
         *
         * You must call `webkit_web_context_set_favicon_database_directory()` for
         * the {@link WebKit2.WebContext} associated with this {@link WebKit2.FaviconDatabase}
         * before attempting to use this function; otherwise,
         * `webkit_favicon_database_get_favicon_finish()` will return
         * {@link WebKit2.FaviconDatabaseError.NOT_INITIALIZED}.
         * @param page_uri URI of the page for which we want to retrieve the favicon
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        get_favicon(page_uri: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<cairo.Surface>;
        /**
         * Asynchronously obtains a {@link cairo.Surface} of the favicon.
         *
         * Asynchronously obtains a {@link cairo.Surface} of the favicon for the
         * given page URI. It returns the cached icon if it's in the database
         * asynchronously waiting for the icon to be read from the database.
         *
         * This is an asynchronous method. When the operation is finished, callback will
         * be invoked. You can then call `webkit_favicon_database_get_favicon_finish()`
         * to get the result of the operation.
         *
         * You must call `webkit_web_context_set_favicon_database_directory()` for
         * the {@link WebKit2.WebContext} associated with this {@link WebKit2.FaviconDatabase}
         * before attempting to use this function; otherwise,
         * `webkit_favicon_database_get_favicon_finish()` will return
         * {@link WebKit2.FaviconDatabaseError.NOT_INITIALIZED}.
         * @param page_uri URI of the page for which we want to retrieve the favicon
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is            satisfied or `null` if you don't care about the result.
         */
        get_favicon(
            page_uri: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously obtains a {@link cairo.Surface} of the favicon.
         *
         * Asynchronously obtains a {@link cairo.Surface} of the favicon for the
         * given page URI. It returns the cached icon if it's in the database
         * asynchronously waiting for the icon to be read from the database.
         *
         * This is an asynchronous method. When the operation is finished, callback will
         * be invoked. You can then call `webkit_favicon_database_get_favicon_finish()`
         * to get the result of the operation.
         *
         * You must call `webkit_web_context_set_favicon_database_directory()` for
         * the {@link WebKit2.WebContext} associated with this {@link WebKit2.FaviconDatabase}
         * before attempting to use this function; otherwise,
         * `webkit_favicon_database_get_favicon_finish()` will return
         * {@link WebKit2.FaviconDatabaseError.NOT_INITIALIZED}.
         * @param page_uri URI of the page for which we want to retrieve the favicon
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is            satisfied or `null` if you don't care about the result.
         */
        get_favicon(
            page_uri: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<cairo.Surface> | void;
        /**
         * Finishes an operation started with `webkit_favicon_database_get_favicon()`.
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `webkit_favicon_database_get_favicon()`
         * @returns a new reference to a {@link cairo.Surface}, or `null` in case of error.
         */
        get_favicon_finish(result: Gio.AsyncResult): cairo.Surface;
        /**
         * Obtains the URI of the favicon for the given `page_uri`.
         * @param page_uri URI of the page containing the icon
         * @returns a newly allocated URI for the favicon, or `null` if the database doesn't have a favicon for `page_uri`.
         */
        get_favicon_uri(page_uri: string): string;
    }

    namespace FileChooserRequest {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::filter': (pspec: GObject.ParamSpec) => void;
            'notify::mime-types': (pspec: GObject.ParamSpec) => void;
            'notify::select-multiple': (pspec: GObject.ParamSpec) => void;
            'notify::selected-files': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            filter: Gtk.FileFilter;
            mime_types: string[];
            mimeTypes: string[];
            select_multiple: boolean;
            selectMultiple: boolean;
            selected_files: string[];
            selectedFiles: string[];
        }
    }

    /**
     * A request to open a file chooser.
     *
     * Whenever the user interacts with an <input type='file' />
     * HTML element, WebKit will need to show a dialog to choose one or
     * more files to be uploaded to the server along with the rest of the
     * form data. For that to happen in a general way, instead of just
     * opening a {@link Gtk.FileChooserDialog} (which might be not desirable in
     * some cases, which could prefer to use their own file chooser
     * dialog), WebKit will fire the {@link WebKit2.WebView.SignalSignatures.run_file_chooser | WebKit2.WebView::run-file-chooser}
     * signal with a {@link WebKit2.FileChooserRequest} object, which will allow
     * the client application to specify the files to be selected, to
     * inspect the details of the request (e.g. if multiple selection
     * should be allowed) and to cancel the request, in case nothing was
     * selected.
     *
     * In case the client application does not wish to handle this signal,
     * WebKit will provide a default handler which will asynchronously run
     * a regular {@link Gtk.FileChooserDialog} for the user to interact with.
     * @gir-type Class
     */
    class FileChooserRequest extends GObject.Object {
        static $gtype: GObject.GType<FileChooserRequest>;

        // Properties

        /**
         * The filter currently associated with the request. See
         * `webkit_file_chooser_request_get_mime_types_filter()` for more
         * details.
         * @read-only
         */
        get filter(): Gtk.FileFilter;
        /**
         * A `null`-terminated array of strings containing the list of MIME
         * types the file chooser dialog should handle. See
         * `webkit_file_chooser_request_get_mime_types()` for more details.
         * @read-only
         */
        get mime_types(): string[];
        /**
         * A `null`-terminated array of strings containing the list of MIME
         * types the file chooser dialog should handle. See
         * `webkit_file_chooser_request_get_mime_types()` for more details.
         * @read-only
         */
        get mimeTypes(): string[];
        /**
         * Whether the file chooser should allow selecting multiple
         * files. See
         * `webkit_file_chooser_request_get_select_multiple()` for
         * more details.
         * @read-only
         */
        get select_multiple(): boolean;
        /**
         * Whether the file chooser should allow selecting multiple
         * files. See
         * `webkit_file_chooser_request_get_select_multiple()` for
         * more details.
         * @read-only
         */
        get selectMultiple(): boolean;
        /**
         * A `null`-terminated array of strings containing the list of
         * selected files associated to the current request. See
         * `webkit_file_chooser_request_get_selected_files()` for more details.
         * @read-only
         */
        get selected_files(): string[];
        /**
         * A `null`-terminated array of strings containing the list of
         * selected files associated to the current request. See
         * `webkit_file_chooser_request_get_selected_files()` for more details.
         * @read-only
         */
        get selectedFiles(): string[];

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileChooserRequest.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FileChooserRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof FileChooserRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileChooserRequest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FileChooserRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileChooserRequest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FileChooserRequest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileChooserRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Ask WebKit to cancel the request.
         *
         * It's important to do this in case
         * no selection has been made in the client, otherwise the request
         * won't be properly completed and the browser will keep the request
         * pending forever, which might cause the browser to hang.
         */
        cancel(): void;
        /**
         * Get the list of MIME types the file chooser dialog should handle.
         *
         * Get the list of MIME types the file chooser dialog should handle,
         * in the format specified in RFC 2046 for "media types". Its contents
         * depend on the value of the 'accept' attribute for HTML input
         * elements. This function should normally be called before presenting
         * the file chooser dialog to the user, to decide whether to allow the
         * user to select multiple files at once or only one.
         * @returns a `null`-terminated array of strings if a list of accepted MIME types is defined or `null` otherwise, meaning that any MIME type should be accepted. This array and its contents are owned by WebKit and should not be modified or freed.
         */
        get_mime_types(): string[];
        /**
         * Get the filter currently associated with the request.
         *
         * Get the filter currently associated with the request, ready to be
         * used by {@link Gtk.FileChooser}. This function should normally be called
         * before presenting the file chooser dialog to the user, to decide
         * whether to apply a filter so the user would not be allowed to
         * select files with other MIME types.
         *
         * See `webkit_file_chooser_request_get_mime_types()` if you are
         * interested in getting the list of accepted MIME types.
         * @returns a {@link Gtk.FileFilter} if a list of accepted MIME types is defined or `null` otherwise. The returned object is owned by WebKit should not be modified or freed.
         */
        get_mime_types_filter(): Gtk.FileFilter;
        /**
         * Whether the file chooser should allow selecting multiple files.
         *
         * Determine whether the file chooser associated to this
         * {@link WebKit2.FileChooserRequest} should allow selecting multiple files,
         * which depends on the HTML input element having a 'multiple'
         * attribute defined.
         * @returns `true` if the file chooser should allow selecting multiple files or `false` otherwise.
         */
        get_select_multiple(): boolean;
        /**
         * Get the list of selected files associated to the request.
         *
         * Get the list of selected files currently associated to the
         * request. Initially, the return value of this method contains any
         * files selected in previous file chooser requests for this HTML
         * input element. Once webkit_file_chooser_request_select_files, the
         * value will reflect whatever files are given.
         *
         * This function should normally be called only before presenting the
         * file chooser dialog to the user, to decide whether to perform some
         * extra action, like pre-selecting the files from a previous request.
         * @returns a `null`-terminated array of strings if there are selected files associated with the request or `null` otherwise. This array and its contents are owned by WebKit and should not be modified or freed.
         */
        get_selected_files(): string[];
        /**
         * Ask WebKit to select local files for upload and complete the
         * request.
         * @param files a `null`-terminated array of strings, containing paths to local files.
         */
        select_files(files: string[]): void;
    }

    namespace FindController {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This signal is emitted when the {@link WebKit2.FindController} has
             * counted the number of matches for a given text after a call
             * to `webkit_find_controller_count_matches()`.
             * @signal
             * @run-last
             */
            'counted-matches': (arg0: number) => void;
            /**
             * This signal is emitted when a search operation does not find
             * any result for the given text. It will be issued if the text
             * is not found asynchronously after a call to
             * `webkit_find_controller_search()`, `webkit_find_controller_search_next()`
             * or `webkit_find_controller_search_previous()`.
             * @signal
             * @run-last
             */
            'failed-to-find-text': () => void;
            /**
             * This signal is emitted when a given text is found in the web
             * page text. It will be issued if the text is found
             * asynchronously after a call to `webkit_find_controller_search()`,
             * `webkit_find_controller_search_next()` or
             * `webkit_find_controller_search_previous()`.
             * @signal
             * @run-last
             */
            'found-text': (arg0: number) => void;
            'notify::max-match-count': (pspec: GObject.ParamSpec) => void;
            'notify::options': (pspec: GObject.ParamSpec) => void;
            'notify::text': (pspec: GObject.ParamSpec) => void;
            'notify::web-view': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            max_match_count: number;
            maxMatchCount: number;
            options: FindOptions;
            text: string;
            web_view: WebView;
            webView: WebView;
        }
    }

    /**
     * Controls text search in a {@link WebKit2.WebView}.
     *
     * A {@link WebKit2.FindController} is used to search text in a {@link WebKit2.WebView}. You
     * can get a {@link WebKit2.WebView}<!-- -->'s {@link WebKit2.FindController} with
     * `webkit_web_view_get_find_controller()`, and later use it to search
     * for text using `webkit_find_controller_search()`, or get the
     * number of matches using `webkit_find_controller_count_matches()`. The
     * operations are asynchronous and trigger signals when ready, such as
     * {@link WebKit2.FindController.SignalSignatures.found_text | WebKit2.FindController::found-text},
     * {@link WebKit2.FindController.SignalSignatures.failed_to_find_text | WebKit2.FindController::failed-to-find-text} or
     * {@link WebKit2.FindController.SignalSignatures.counted_matches | WebKit2.FindController::counted-matches}<!-- -->.
     * @gir-type Class
     */
    class FindController extends GObject.Object {
        static $gtype: GObject.GType<FindController>;

        // Properties

        /**
         * The maximum number of matches to report for a given search.
         * @read-only
         */
        get max_match_count(): number;
        /**
         * The maximum number of matches to report for a given search.
         * @read-only
         */
        get maxMatchCount(): number;
        /**
         * The options to be used in the search operation.
         * @read-only
         */
        get options(): FindOptions;
        /**
         * The current search text for this {@link WebKit2.FindController}.
         * @read-only
         */
        get text(): string;
        /**
         * The {@link WebKit2.WebView} this controller is associated to.
         * @construct-only
         */
        get web_view(): WebView;
        /**
         * The {@link WebKit2.WebView} this controller is associated to.
         * @construct-only
         */
        get webView(): WebView;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FindController.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FindController.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof FindController.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FindController.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FindController.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FindController.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FindController.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FindController.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Counts the number of matches for `search_text`.
         *
         * Counts the number of matches for `search_text` found in the
         * {@link WebKit2.WebView} with the provided `find_options`. The number of
         * matches will be provided by the
         * {@link WebKit2.FindController.SignalSignatures.counted_matches | WebKit2.FindController::counted-matches} signal.
         * @param search_text the text to look for
         * @param find_options a bitmask with the {@link WebKit2.FindOptions} used in the search
         * @param max_match_count the maximum number of matches allowed in the search
         */
        count_matches(search_text: string, find_options: number, max_match_count: number): void;
        /**
         * Gets the maximum number of matches to report.
         *
         * Gets the maximum number of matches to report during a text
         * lookup. This number is passed as the last argument of
         * `webkit_find_controller_search()` or
         * `webkit_find_controller_count_matches()`.
         * @returns the maximum number of matches to report.
         */
        get_max_match_count(): number;
        /**
         * Gets the {@link WebKit2.FindOptions} for the current search.
         *
         * Gets a bitmask containing the {@link WebKit2.FindOptions} associated with
         * the current search.
         * @returns a bitmask containing the {@link WebKit2.FindOptions} associated with the current search.
         */
        get_options(): number;
        /**
         * Gets the text that `find_controller` is searching for.
         *
         * Gets the text that `find_controller` is currently searching
         * for. This text is passed to either
         * `webkit_find_controller_search()` or
         * `webkit_find_controller_count_matches()`.
         * @returns the text to look for in the {@link WebKit2.WebView}.
         */
        get_search_text(): string;
        /**
         * Gets the {@link WebKit2.WebView} this find controller is associated to.
         *
         * Do
         * not dereference the returned instance as it belongs to the
         * {@link WebKit2.FindController}.
         * @returns the {@link WebKit2.WebView}.
         */
        get_web_view(): WebView;
        /**
         * Looks for `search_text` associated with `find_controller`.
         *
         * Looks for `search_text` in the {@link WebKit2.WebView} associated with
         * `find_controller` since the beginning of the document highlighting
         * up to `max_match_count` matches. The outcome of the search will be
         * asynchronously provided by the {@link WebKit2.FindController.SignalSignatures.found_text | WebKit2.FindController::found-text}
         * and {@link WebKit2.FindController.SignalSignatures.failed_to_find_text | WebKit2.FindController::failed-to-find-text} signals.
         *
         * To look for the next or previous occurrences of the same text
         * with the same find options use `webkit_find_controller_search_next()`
         * and/or `webkit_find_controller_search_previous()`. The
         * {@link WebKit2.FindController} will use the same text and options for the
         * following searches unless they are modified by another call to this
         * method.
         *
         * Note that if the number of matches is higher than `max_match_count`
         * then {@link WebKit2.FindController.SignalSignatures.found_text | WebKit2.FindController::found-text} will report `G_MAXUINT` matches
         * instead of the actual number.
         *
         * Callers should call `webkit_find_controller_search_finish()` to
         * finish the current search operation.
         * @param search_text the text to look for
         * @param find_options a bitmask with the {@link WebKit2.FindOptions} used in the search
         * @param max_match_count the maximum number of matches allowed in the search
         */
        search(search_text: string, find_options: number, max_match_count: number): void;
        /**
         * Finishes a find operation.
         *
         * Finishes a find operation started by
         * `webkit_find_controller_search()`. It will basically unhighlight
         * every text match found.
         *
         * This method will be typically called when the search UI is
         * closed/hidden by the client application.
         */
        search_finish(): void;
        /**
         * Looks for the next occurrence of the search text.
         *
         * Calling this method before `webkit_find_controller_search()` or
         * `webkit_find_controller_count_matches()` is a programming error.
         */
        search_next(): void;
        /**
         * Looks for the previous occurrence of the search text.
         *
         * Calling this method before `webkit_find_controller_search()` or
         * `webkit_find_controller_count_matches()` is a programming error.
         */
        search_previous(): void;
    }

    namespace FormSubmissionRequest {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Represents a form submission request.
     *
     * When a form is about to be submitted in a {@link WebKit2.WebView}, the
     * {@link WebKit2.WebView.SignalSignatures.submit_form | WebKit2.WebView::submit-form} signal is emitted. Its request argument
     * contains information about the text fields of the form, that are
     * typically used to store login information, returned as lists by
     * `webkit_form_submission_request_list_text_fields()`. You can submit the
     * form with `webkit_form_submission_request_submit()`.
     * @gir-type Class
     */
    class FormSubmissionRequest extends GObject.Object {
        static $gtype: GObject.GType<FormSubmissionRequest>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FormSubmissionRequest.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FormSubmissionRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof FormSubmissionRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FormSubmissionRequest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FormSubmissionRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FormSubmissionRequest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FormSubmissionRequest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FormSubmissionRequest.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the values of the text fields contained in the form associated to `request`.
         *
         * Get a {@link GLib.HashTable} with the values of the text fields contained in the form
         * associated to `request`. Note that fields will be missing if the form
         * contains multiple text input elements with the same name, so this
         * function does not reliably return all text fields.
         * @returns a {@link GLib.HashTable} with the form    text fields, or `null` if the form doesn't contain text fields.
         */
        get_text_fields(): GLib.HashTable<any, any> | null;
        /**
         * Get lists of the text fields contained in the form associated to `request`.
         *
         * Get lists with the names and values of the text fields contained in
         * the form associated to `request`. Note that names and values may be
         * `null`.
         *
         * If this function returns `false`, then both `field_names` and
         * `field_values` will be empty.
         * @returns `true` if the form contains text fields, or `false` otherwise
         */
        list_text_fields(): [boolean, string[] | null, string[] | null];
        /**
         * Continue the form submission.
         */
        submit(): void;
    }

    namespace GeolocationManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The signal is emitted to notify that `manager` needs to start receiving
             * position updates. After this signal is emitted the user should provide
             * the updates using `webkit_geolocation_manager_update_position()` every time
             * the position changes, or use `webkit_geolocation_manager_failed()` in case
             * it isn't possible to determine the current position.
             *
             * If the signal is not handled, WebKit will try to determine the position
             * using GeoClue if available.
             * @signal
             * @since 2.26
             * @run-last
             */
            start: () => boolean | void;
            /**
             * The signal is emitted to notify that `manager` doesn't need to receive
             * position updates anymore.
             * @signal
             * @since 2.26
             * @run-last
             */
            stop: () => void;
            'notify::enable-high-accuracy': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            enable_high_accuracy: boolean;
            enableHighAccuracy: boolean;
        }
    }

    /**
     * Geolocation manager.
     *
     * WebKitGeolocationManager provides API to get the geographical position of the user.
     * Once a {@link WebKit2.GeolocationPermissionRequest} is allowed, when WebKit needs to know the
     * user location {@link WebKit2.GeolocationManager.SignalSignatures.start | WebKit2.GeolocationManager::start} signal is emitted. If the signal is handled
     * and returns `true`, the application is responsible for providing the position every time it's
     * updated by calling `webkit_geolocation_manager_update_position()`. The signal {@link WebKit2.GeolocationManager.SignalSignatures.stop | WebKit2.GeolocationManager::stop}
     * will be emitted when location updates are no longer needed.
     * @gir-type Class
     * @since 2.26
     */
    class GeolocationManager extends GObject.Object {
        static $gtype: GObject.GType<GeolocationManager>;

        // Properties

        /**
         * Whether high accuracy is enabled. This is a read-only property that will be
         * set to `true` when a {@link WebKit2.GeolocationManager} needs to get accurate position updates.
         * You can connect to notify::enable-high-accuracy signal to monitor it.
         * @since 2.26
         * @read-only
         */
        get enable_high_accuracy(): boolean;
        /**
         * Whether high accuracy is enabled. This is a read-only property that will be
         * set to `true` when a {@link WebKit2.GeolocationManager} needs to get accurate position updates.
         * You can connect to notify::enable-high-accuracy signal to monitor it.
         * @since 2.26
         * @read-only
         */
        get enableHighAccuracy(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GeolocationManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GeolocationManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof GeolocationManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GeolocationManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GeolocationManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GeolocationManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GeolocationManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GeolocationManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Notify `manager` that determining the position failed.
         * @param error_message the error message
         */
        failed(error_message: string): void;
        /**
         * Get whether high accuracy is enabled.
         * @returns Whether the setting is enabled.
         */
        get_enable_high_accuracy(): boolean;
        /**
         * Notify `manager` that position has been updated to `position`.
         * @param position a {@link WebKit2.GeolocationPosition}
         */
        update_position(position: GeolocationPosition): void;
    }

    namespace GeolocationPermissionRequest {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, PermissionRequest.ConstructorProps {}
    }

    /**
     * A permission request for sharing the user's location.
     *
     * WebKitGeolocationPermissionRequest represents a request for
     * permission to decide whether WebKit should provide the user's
     * location to a website when requested through the Geolocation API.
     *
     * When a WebKitGeolocationPermissionRequest is not handled by the user,
     * it is denied by default.
     *
     * When embedding web views in your application, you *must* configure an
     * application identifier to allow web content to use geolocation services.
     * The identifier *must* match the name of the `.desktop` file which describes
     * the application, sans the suffix.
     *
     * If your application uses {@link Gio.Application} (or any subclass like
     * {@link Gtk.Application}), WebKit will automatically use the identifier returned by
     * `g_application_get_application_id()`. This is the recommended approach for
     * enabling geolocation in applications.
     *
     * If an identifier cannot be obtained through {@link Gio.Application}, the value
     * returned by `g_get_prgname()` will be used instead as a fallback. For
     * programs which cannot use {@link Gio.Application}, calling `g_set_prgname()` early
     * during initialization is needed when the name of the executable on disk
     * does not match the name of a valid `.desktop` file.
     * @gir-type Class
     */
    class GeolocationPermissionRequest extends GObject.Object implements PermissionRequest {
        static $gtype: GObject.GType<GeolocationPermissionRequest>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GeolocationPermissionRequest.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GeolocationPermissionRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof GeolocationPermissionRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GeolocationPermissionRequest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GeolocationPermissionRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GeolocationPermissionRequest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GeolocationPermissionRequest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GeolocationPermissionRequest.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Allow the action which triggered this request.
         */
        allow(): void;
        /**
         * Deny the action which triggered this request.
         */
        deny(): void;
        /**
         * Allow the action which triggered this request.
         * @virtual
         */
        vfunc_allow(): void;
        /**
         * Deny the action which triggered this request.
         * @virtual
         */
        vfunc_deny(): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace HitTestResult {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::image-uri': (pspec: GObject.ParamSpec) => void;
            'notify::link-label': (pspec: GObject.ParamSpec) => void;
            'notify::link-title': (pspec: GObject.ParamSpec) => void;
            'notify::link-uri': (pspec: GObject.ParamSpec) => void;
            'notify::media-uri': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            context: number;
            image_uri: string;
            imageUri: string;
            link_label: string;
            linkLabel: string;
            link_title: string;
            linkTitle: string;
            link_uri: string;
            linkUri: string;
            media_uri: string;
            mediaUri: string;
        }
    }

    /**
     * Result of a Hit Test.
     *
     * A Hit Test is an operation to get context information about a given
     * point in a {@link WebKit2.WebView}. {@link WebKit2.HitTestResult} represents the
     * result of a Hit Test. It provides context information about what is
     * at the coordinates of the Hit Test, such as if there's a link,
     * an image or a media.
     *
     * You can get the context of the HitTestResult with
     * `webkit_hit_test_result_get_context()` that returns a bitmask of
     * {@link WebKit2.HitTestResultContext} flags. You can also use
     * `webkit_hit_test_result_context_is_link()`, `webkit_hit_test_result_context_is_image()` and
     * `webkit_hit_test_result_context_is_media()` to determine whether there's
     * a link, image or a media element at the coordinates of the Hit Test.
     * Note that it's possible that several {@link WebKit2.HitTestResultContext} flags
     * are active at the same time, for example if there's a link containing an image.
     *
     * When the mouse is moved over a {@link WebKit2.WebView} a Hit Test is performed
     * for the mouse coordinates and {@link WebKit2.WebView.SignalSignatures.mouse_target_changed | WebKit2.WebView::mouse-target-changed}
     * signal is emitted with a {@link WebKit2.HitTestResult}.
     * @gir-type Class
     */
    class HitTestResult extends GObject.Object {
        static $gtype: GObject.GType<HitTestResult>;

        // Properties

        /**
         * Bitmask of {@link WebKit2.HitTestResultContext} flags representing
         * the context of the {@link WebKit2.HitTestResult}.
         * @construct-only
         */
        get context(): number;
        /**
         * The URI of the image if flag {@link WebKit2.HitTestResultContext.IMAGE}
         * is present in {@link WebKit2.HitTestResult.context}
         * @construct-only
         */
        get image_uri(): string;
        /**
         * The URI of the image if flag {@link WebKit2.HitTestResultContext.IMAGE}
         * is present in {@link WebKit2.HitTestResult.context}
         * @construct-only
         */
        get imageUri(): string;
        /**
         * The label of the link if flag {@link WebKit2.HitTestResultContext.LINK}
         * is present in {@link WebKit2.HitTestResult.context}
         * @construct-only
         */
        get link_label(): string;
        /**
         * The label of the link if flag {@link WebKit2.HitTestResultContext.LINK}
         * is present in {@link WebKit2.HitTestResult.context}
         * @construct-only
         */
        get linkLabel(): string;
        /**
         * The title of the link if flag {@link WebKit2.HitTestResultContext.LINK}
         * is present in {@link WebKit2.HitTestResult.context}
         * @construct-only
         */
        get link_title(): string;
        /**
         * The title of the link if flag {@link WebKit2.HitTestResultContext.LINK}
         * is present in {@link WebKit2.HitTestResult.context}
         * @construct-only
         */
        get linkTitle(): string;
        /**
         * The URI of the link if flag {@link WebKit2.HitTestResultContext.LINK}
         * is present in {@link WebKit2.HitTestResult.context}
         * @construct-only
         */
        get link_uri(): string;
        /**
         * The URI of the link if flag {@link WebKit2.HitTestResultContext.LINK}
         * is present in {@link WebKit2.HitTestResult.context}
         * @construct-only
         */
        get linkUri(): string;
        /**
         * The URI of the media if flag {@link WebKit2.HitTestResultContext.MEDIA}
         * is present in {@link WebKit2.HitTestResult.context}
         * @construct-only
         */
        get media_uri(): string;
        /**
         * The URI of the media if flag {@link WebKit2.HitTestResultContext.MEDIA}
         * is present in {@link WebKit2.HitTestResult.context}
         * @construct-only
         */
        get mediaUri(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: HitTestResult.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<HitTestResult.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof HitTestResult.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HitTestResult.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof HitTestResult.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, HitTestResult.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof HitTestResult.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<HitTestResult.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets whether {@link WebKit2.HitTestResultContext.EDITABLE} flag is present in
         * {@link WebKit2.HitTestResult.context}.
         * @returns `true` if there's an editable element at the coordinates of the `hit_test_result`,    or `false` otherwise
         */
        context_is_editable(): boolean;
        /**
         * Gets whether {@link WebKit2.HitTestResultContext.IMAGE} flag is present in
         * {@link WebKit2.HitTestResult.context}.
         * @returns `true` if there's an image element in the coordinates of the Hit Test,    or `false` otherwise
         */
        context_is_image(): boolean;
        /**
         * Gets whether {@link WebKit2.HitTestResultContext.LINK} flag is present in
         * {@link WebKit2.HitTestResult.context}.
         * @returns `true` if there's a link element in the coordinates of the Hit Test,    or `false` otherwise
         */
        context_is_link(): boolean;
        /**
         * Gets whether {@link WebKit2.HitTestResultContext.MEDIA} flag is present in
         * {@link WebKit2.HitTestResult.context}.
         * @returns `true` if there's a media element in the coordinates of the Hit Test,    or `false` otherwise
         */
        context_is_media(): boolean;
        /**
         * Gets whether {@link WebKit2.HitTestResultContext.SCROLLBAR} flag is present in
         * {@link WebKit2.HitTestResult.context}.
         * @returns `true` if there's a scrollbar element at the coordinates of the `hit_test_result`,    or `false` otherwise
         */
        context_is_scrollbar(): boolean;
        /**
         * Gets whether {@link WebKit2.HitTestResultContext.SELECTION} flag is present in
         * {@link WebKit2.HitTestResult.context}.
         * @returns `true` if there's a selected element at the coordinates of the `hit_test_result`,    or `false` otherwise
         */
        context_is_selection(): boolean;
        /**
         * Gets the value of the {@link WebKit2.HitTestResult.context} property.
         * @returns a bitmask of {@link WebKit2.HitTestResultContext} flags
         */
        get_context(): number;
        /**
         * Gets the value of the {@link WebKit2.HitTestResult.image_uri} property.
         * @returns the URI of the image element in the coordinates of the Hit Test,    or `null` if there isn't an image element in `hit_test_result` context
         */
        get_image_uri(): string;
        /**
         * Gets the value of the {@link WebKit2.HitTestResult.link_label} property.
         * @returns the label of the link element in the coordinates of the Hit Test,    or `null` if there isn't a link element in `hit_test_result` context or the    link element doesn't have a label
         */
        get_link_label(): string;
        /**
         * Gets the value of the {@link WebKit2.HitTestResult.link_title} property.
         * @returns the title of the link element in the coordinates of the Hit Test,    or `null` if there isn't a link element in `hit_test_result` context or the    link element doesn't have a title
         */
        get_link_title(): string;
        /**
         * Gets the value of the {@link WebKit2.HitTestResult.link_uri} property.
         * @returns the URI of the link element in the coordinates of the Hit Test,    or `null` if there isn't a link element in `hit_test_result` context
         */
        get_link_uri(): string;
        /**
         * Gets the value of the {@link WebKit2.HitTestResult.media_uri} property.
         * @returns the URI of the media element in the coordinates of the Hit Test,    or `null` if there isn't a media element in `hit_test_result` context
         */
        get_media_uri(): string;
    }

    namespace InputMethodContext {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when a complete input sequence has been entered by the user.
             * This can be a single character immediately after a key press or the
             * final result of preediting.
             * @signal
             * @since 2.28
             * @run-last
             */
            committed: (arg0: string) => void;
            /**
             * Emitted when the input method wants to delete the context surrounding the cursor.
             * If `offset` is a negative value, it means a position before the cursor.
             * @signal
             * @since 2.28
             * @run-last
             */
            'delete-surrounding': (arg0: number, arg1: number) => void;
            /**
             * Emitted whenever the preedit sequence currently being entered has changed.
             * It is also emitted at the end of a preedit sequence, in which case
             * `webkit_input_method_context_get_preedit()` returns the empty string.
             * @signal
             * @since 2.28
             * @run-last
             */
            'preedit-changed': () => void;
            /**
             * Emitted when a preediting sequence has been completed or canceled.
             * @signal
             * @since 2.28
             * @run-last
             */
            'preedit-finished': () => void;
            /**
             * Emitted when a new preediting sequence starts.
             * @signal
             * @since 2.28
             * @run-last
             */
            'preedit-started': () => void;
            'notify::input-hints': (pspec: GObject.ParamSpec) => void;
            'notify::input-purpose': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            input_hints: InputHints;
            inputHints: InputHints;
            input_purpose: InputPurpose;
            inputPurpose: InputPurpose;
        }
    }

    /**
     * Base class for input method contexts.
     *
     * WebKitInputMethodContext defines the interface to implement WebKit input methods.
     * The input methods are used by WebKit, when editable content is focused, to map from
     * key events to Unicode character strings.
     *
     * An input method may consume multiple key events in sequence and finally
     * output the composed result. This is called preediting, and an input method
     * may provide feedback about this process by displaying the intermediate
     * composition states as preedit text.
     * @gir-type Class
     * @since 2.28
     */
    abstract class InputMethodContext extends GObject.Object {
        static $gtype: GObject.GType<InputMethodContext>;

        // Properties

        /**
         * The {@link WebKit2.InputHints} of the input associated with this context.
         * @since 2.28
         */
        get input_hints(): InputHints;
        set input_hints(val: InputHints);
        /**
         * The {@link WebKit2.InputHints} of the input associated with this context.
         * @since 2.28
         */
        get inputHints(): InputHints;
        set inputHints(val: InputHints);
        /**
         * The {@link WebKit2.InputPurpose} of the input associated with this context.
         * @since 2.28
         */
        get input_purpose(): InputPurpose;
        set input_purpose(val: InputPurpose);
        /**
         * The {@link WebKit2.InputPurpose} of the input associated with this context.
         * @since 2.28
         */
        get inputPurpose(): InputPurpose;
        set inputPurpose(val: InputPurpose);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InputMethodContext.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<InputMethodContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof InputMethodContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InputMethodContext.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof InputMethodContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InputMethodContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof InputMethodContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InputMethodContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param text
         * @virtual
         */
        vfunc_committed(text: string): void;
        /**
         * @param offset
         * @param n_chars
         * @virtual
         */
        vfunc_delete_surrounding(offset: number, n_chars: number): void;
        /**
         * Allow `key_event` to be handled by the input method.
         *
         * If `true` is returned, then no further processing should be
         * done for the key event.
         * @param key_event the key event to filter
         * @virtual
         */
        vfunc_filter_key_event(key_event: Gdk.Event): boolean;
        /**
         * Get the pre-edit string and a list of WebKitInputMethodUnderline.
         *
         * Get the current pre-edit string for the `context`, and a list of WebKitInputMethodUnderline to apply to the string.
         * The string will be displayed inserted at `cursor_offset`.
         * @virtual
         */
        vfunc_get_preedit(): [string, InputMethodUnderline[] | null, number];
        /**
         * Notify `context` that cursor area changed in input associated.
         * @param x the x coordinate of cursor location
         * @param y the y coordinate of cursor location
         * @param width the width of cursor area
         * @param height the height of cursor area
         * @virtual
         */
        vfunc_notify_cursor_area(x: number, y: number, width: number, height: number): void;
        /**
         * Notify `context` that input associated has gained focus.
         * @virtual
         */
        vfunc_notify_focus_in(): void;
        /**
         * Notify `context` that input associated has lost focus.
         * @virtual
         */
        vfunc_notify_focus_out(): void;
        /**
         * Notify `context` that the context surrounding the cursor has changed.
         *
         * If there's no selection `selection_index` is the same as `cursor_index`.
         * @param text text surrounding the insertion point
         * @param length the length of `text`, or -1 if `text` is nul-terminated
         * @param cursor_index the byte index of the insertion cursor within `text`.
         * @param selection_index the byte index of the selection cursor within `text`.
         * @virtual
         */
        vfunc_notify_surrounding(text: string, length: number, cursor_index: number, selection_index: number): void;
        /**
         * @virtual
         */
        vfunc_preedit_changed(): void;
        /**
         * @virtual
         */
        vfunc_preedit_finished(): void;
        /**
         * @virtual
         */
        vfunc_preedit_started(): void;
        /**
         * Reset the `context`.
         *
         * This will typically cause the input to clear the preedit state.
         * @virtual
         */
        vfunc_reset(): void;
        /**
         * Set whether `context` should enable preedit to display feedback.
         * @param enabled whether to enable preedit
         * @virtual
         */
        vfunc_set_enable_preedit(enabled: boolean): void;

        // Methods

        /**
         * Allow `key_event` to be handled by the input method.
         *
         * If `true` is returned, then no further processing should be
         * done for the key event.
         * @param key_event the key event to filter
         * @returns `true` if the key event was handled, or `false` otherwise
         */
        filter_key_event(key_event: Gdk.Event): boolean;
        /**
         * Get the value of the {@link WebKit2.InputMethodContext.input_hints} property.
         * @returns the {@link WebKit2.InputHints} of the input associated with `context`
         */
        get_input_hints(): InputHints;
        /**
         * Get the value of the {@link WebKit2.InputMethodContext.input_purpose} property.
         * @returns the {@link WebKit2.InputPurpose} of the input associated with `context`
         */
        get_input_purpose(): InputPurpose;
        /**
         * Get the pre-edit string and a list of WebKitInputMethodUnderline.
         *
         * Get the current pre-edit string for the `context`, and a list of WebKitInputMethodUnderline to apply to the string.
         * The string will be displayed inserted at `cursor_offset`.
         */
        get_preedit(): [string, InputMethodUnderline[] | null, number];
        /**
         * Notify `context` that cursor area changed in input associated.
         * @param x the x coordinate of cursor location
         * @param y the y coordinate of cursor location
         * @param width the width of cursor area
         * @param height the height of cursor area
         */
        notify_cursor_area(x: number, y: number, width: number, height: number): void;
        /**
         * Notify `context` that input associated has gained focus.
         */
        notify_focus_in(): void;
        /**
         * Notify `context` that input associated has lost focus.
         */
        notify_focus_out(): void;
        /**
         * Notify `context` that the context surrounding the cursor has changed.
         *
         * If there's no selection `selection_index` is the same as `cursor_index`.
         * @param text text surrounding the insertion point
         * @param length the length of `text`, or -1 if `text` is nul-terminated
         * @param cursor_index the byte index of the insertion cursor within `text`.
         * @param selection_index the byte index of the selection cursor within `text`.
         */
        notify_surrounding(text: string, length: number, cursor_index: number, selection_index: number): void;
        /**
         * Reset the `context`.
         *
         * This will typically cause the input to clear the preedit state.
         */
        reset(): void;
        /**
         * Set whether `context` should enable preedit to display feedback.
         * @param enabled whether to enable preedit
         */
        set_enable_preedit(enabled: boolean): void;
        /**
         * Set the value of the {@link WebKit2.InputMethodContext.input_hints} property.
         * @param hints a {@link WebKit2.InputHints}
         */
        set_input_hints(hints: InputHints | null): void;
        /**
         * Set the value of the {@link WebKit2.InputMethodContext.input_purpose} property.
         * @param purpose a {@link WebKit2.InputPurpose}
         */
        set_input_purpose(purpose: InputPurpose | null): void;
    }

    namespace InstallMissingMediaPluginsPermissionRequest {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, PermissionRequest.ConstructorProps {}
    }

    /**
     * A permission request for installing missing media plugins.
     *
     * WebKitInstallMissingMediaPluginsPermissionRequest represents a request for
     * permission to decide whether WebKit should try to start a helper application to
     * install missing media plugins when the media backend couldn't play a media because
     * the required plugins were not available.
     *
     * When a WebKitInstallMissingMediaPluginsPermissionRequest is not handled by the user,
     * it is allowed by default.
     * @gir-type Class
     * @since 2.10
     */
    class InstallMissingMediaPluginsPermissionRequest extends GObject.Object implements PermissionRequest {
        static $gtype: GObject.GType<InstallMissingMediaPluginsPermissionRequest>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InstallMissingMediaPluginsPermissionRequest.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<InstallMissingMediaPluginsPermissionRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof InstallMissingMediaPluginsPermissionRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InstallMissingMediaPluginsPermissionRequest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof InstallMissingMediaPluginsPermissionRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InstallMissingMediaPluginsPermissionRequest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof InstallMissingMediaPluginsPermissionRequest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InstallMissingMediaPluginsPermissionRequest.SignalSignatures[K]> extends [
                any,
                ...infer Q,
            ]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the description about the missing plugins.
         *
         * Gets the description about the missing plugins provided by the media backend when a media couldn't be played.
         * @returns a string with the description provided by the media backend.
         */
        get_description(): string;
        /**
         * Allow the action which triggered this request.
         */
        allow(): void;
        /**
         * Deny the action which triggered this request.
         */
        deny(): void;
        /**
         * Allow the action which triggered this request.
         * @virtual
         */
        vfunc_allow(): void;
        /**
         * Deny the action which triggered this request.
         * @virtual
         */
        vfunc_deny(): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace MediaKeySystemPermissionRequest {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, PermissionRequest.ConstructorProps {}
    }

    /**
     * A permission request for using an EME Content Decryption Module.
     *
     * WebKitMediaKeySystemPermissionRequest represents a request for permission to decide whether
     * WebKit should use the given CDM to access protected media when requested through the
     * MediaKeySystem API.
     *
     * When a WebKitMediaKeySystemPermissionRequest is not handled by the user,
     * it is denied by default.
     *
     * When handling this permission request the application may perform additional installation of the
     * requested CDM, unless it is already present on the host system.
     * @gir-type Class
     */
    class MediaKeySystemPermissionRequest extends GObject.Object implements PermissionRequest {
        static $gtype: GObject.GType<MediaKeySystemPermissionRequest>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MediaKeySystemPermissionRequest.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MediaKeySystemPermissionRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof MediaKeySystemPermissionRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaKeySystemPermissionRequest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MediaKeySystemPermissionRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MediaKeySystemPermissionRequest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MediaKeySystemPermissionRequest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MediaKeySystemPermissionRequest.SignalSignatures[K]> extends [
                any,
                ...infer Q,
            ]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Allow the action which triggered this request.
         */
        allow(): void;
        /**
         * Deny the action which triggered this request.
         */
        deny(): void;
        /**
         * Allow the action which triggered this request.
         * @virtual
         */
        vfunc_allow(): void;
        /**
         * Deny the action which triggered this request.
         * @virtual
         */
        vfunc_deny(): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace NavigationPolicyDecision {
        // Signal signatures
        interface SignalSignatures extends PolicyDecision.SignalSignatures {
            'notify::frame-name': (pspec: GObject.ParamSpec) => void;
            'notify::modifiers': (pspec: GObject.ParamSpec) => void;
            'notify::mouse-button': (pspec: GObject.ParamSpec) => void;
            'notify::navigation-action': (pspec: GObject.ParamSpec) => void;
            'notify::navigation-type': (pspec: GObject.ParamSpec) => void;
            'notify::request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends PolicyDecision.ConstructorProps {
            frame_name: string;
            frameName: string;
            modifiers: number;
            mouse_button: number;
            mouseButton: number;
            navigation_action: NavigationAction;
            navigationAction: NavigationAction;
            navigation_type: NavigationType;
            navigationType: NavigationType;
            request: URIRequest;
        }
    }

    /**
     * A policy decision for navigation actions.
     *
     * WebKitNavigationPolicyDecision represents a policy decision for events associated with
     * navigations. If the value of {@link WebKit2.NavigationPolicyDecision.mouse_button} is not 0, then
     * the navigation was triggered by a mouse event.
     * @gir-type Class
     */
    class NavigationPolicyDecision extends PolicyDecision {
        static $gtype: GObject.GType<NavigationPolicyDecision>;

        // Properties

        /**
         * If this navigation request targets a new frame, this property contains
         * the name of that frame. For example if the decision was triggered by clicking a
         * link with a target attribute equal to "_blank", this property will contain the
         * value of that attribute. In all other cases, this value will be `null`.
         * @read-only
         */
        get frame_name(): string;
        /**
         * If this navigation request targets a new frame, this property contains
         * the name of that frame. For example if the decision was triggered by clicking a
         * link with a target attribute equal to "_blank", this property will contain the
         * value of that attribute. In all other cases, this value will be `null`.
         * @read-only
         */
        get frameName(): string;
        /**
         * If the navigation associated with this policy decision was originally
         * triggered by a mouse event, this property contains a bitmask of various
         * {@link Gdk.ModifierType} values describing the modifiers used for that click.
         * If the navigation was not triggered by a mouse event or no modifiers
         * were active, the value of this property will be zero.
         * @deprecated since 2.6: Use {@link WebKit2.NavigationPolicyDecision.navigation_action} instead
         * @read-only
         */
        get modifiers(): number;
        /**
         * If the navigation associated with this policy decision was originally
         * triggered by a mouse event, this property contains non-zero button number
         * of the button triggering that event. The button numbers match those from GDK.
         * If the navigation was not triggered by a mouse event, the value of this
         * property will be 0.
         * @deprecated since 2.6: Use {@link WebKit2.NavigationPolicyDecision.navigation_action} instead
         * @read-only
         */
        get mouse_button(): number;
        /**
         * If the navigation associated with this policy decision was originally
         * triggered by a mouse event, this property contains non-zero button number
         * of the button triggering that event. The button numbers match those from GDK.
         * If the navigation was not triggered by a mouse event, the value of this
         * property will be 0.
         * @deprecated since 2.6: Use {@link WebKit2.NavigationPolicyDecision.navigation_action} instead
         * @read-only
         */
        get mouseButton(): number;
        /**
         * The {@link WebKit2.NavigationAction} that triggered this policy decision.
         * @since 2.6
         * @read-only
         */
        get navigation_action(): NavigationAction;
        /**
         * The {@link WebKit2.NavigationAction} that triggered this policy decision.
         * @since 2.6
         * @read-only
         */
        get navigationAction(): NavigationAction;
        /**
         * The type of navigation that triggered this policy decision. This is
         * useful for enacting different policies depending on what type of user
         * action caused the navigation.
         * @deprecated since 2.6: Use {@link WebKit2.NavigationPolicyDecision.navigation_action} instead
         * @read-only
         */
        get navigation_type(): NavigationType;
        /**
         * The type of navigation that triggered this policy decision. This is
         * useful for enacting different policies depending on what type of user
         * action caused the navigation.
         * @deprecated since 2.6: Use {@link WebKit2.NavigationPolicyDecision.navigation_action} instead
         * @read-only
         */
        get navigationType(): NavigationType;
        /**
         * This property contains the {@link WebKit2.URIRequest} associated with this
         * navigation.
         * @deprecated since 2.6: Use {@link WebKit2.NavigationPolicyDecision.navigation_action} instead
         * @read-only
         */
        get request(): URIRequest;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NavigationPolicyDecision.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<NavigationPolicyDecision.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof NavigationPolicyDecision.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NavigationPolicyDecision.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof NavigationPolicyDecision.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NavigationPolicyDecision.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof NavigationPolicyDecision.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<NavigationPolicyDecision.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the value of the {@link WebKit2.NavigationPolicyDecision.frame_name} property.
         * @returns The name of the new frame this navigation action targets or `null`
         */
        get_frame_name(): string;
        /**
         * Gets the value of the {@link WebKit2.NavigationPolicyDecision.modifiers} property.
         * @returns The modifiers active if this decision was triggered by a mouse event
         */
        get_modifiers(): number;
        /**
         * Gets the value of the {@link WebKit2.NavigationPolicyDecision.mouse_button} property.
         * @returns The mouse button used if this decision was triggered by a mouse event or 0 otherwise
         */
        get_mouse_button(): number;
        /**
         * Gets the value of the {@link WebKit2.NavigationPolicyDecision.navigation_action} property.
         * @returns The {@link WebKit2.NavigationAction} triggering this policy decision.
         */
        get_navigation_action(): NavigationAction;
        /**
         * Gets the value of the {@link WebKit2.NavigationPolicyDecision.navigation_type} property.
         * @returns The type of navigation triggering this policy decision.
         */
        get_navigation_type(): NavigationType;
        /**
         * Gets the value of the {@link WebKit2.NavigationPolicyDecision.request} property.
         * @returns The URI request that is associated with this navigation
         */
        get_request(): URIRequest;
    }

    namespace Notification {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when a notification has been clicked. See `webkit_notification_clicked()`.
             * @signal
             * @since 2.12
             * @run-last
             */
            clicked: () => void;
            /**
             * Emitted when a notification has been withdrawn.
             *
             * The default handler will close the notification using libnotify, if built with
             * support for it.
             * @signal
             * @since 2.8
             * @run-last
             */
            closed: () => void;
            'notify::body': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::tag': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            body: string;
            id: number;
            tag: string;
            title: string;
        }
    }

    /**
     * Holds information about a notification that should be shown to the user.
     * @gir-type Class
     * @since 2.8
     */
    class Notification extends GObject.Object {
        static $gtype: GObject.GType<Notification>;

        // Properties

        /**
         * The body for the notification.
         * @since 2.8
         * @read-only
         */
        get body(): string;
        /**
         * The unique id for the notification.
         * @since 2.8
         * @read-only
         */
        get id(): number;
        /**
         * The tag identifier for the notification.
         * @since 2.16
         * @read-only
         */
        get tag(): string;
        /**
         * The title for the notification.
         * @since 2.8
         * @read-only
         */
        get title(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Notification.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Notification.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Notification.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Notification.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Notification.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Notification.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Notification.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Notification.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Tells WebKit the notification has been clicked.
         *
         * This will emit the
         * {@link WebKit2.Notification.SignalSignatures.clicked | WebKit2.Notification::clicked} signal.
         */
        clicked(): void;
        /**
         * Closes the notification.
         */
        close(): void;
        /**
         * Obtains the body for the notification.
         * @returns the body for the notification
         */
        get_body(): string;
        /**
         * Obtains the unique id for the notification.
         * @returns the unique id for the notification
         */
        get_id(): number;
        /**
         * Obtains the tag identifier for the notification.
         * @returns the tag for the notification
         */
        get_tag(): string | null;
        /**
         * Obtains the title for the notification.
         * @returns the title for the notification
         */
        get_title(): string;
    }

    namespace NotificationPermissionRequest {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, PermissionRequest.ConstructorProps {}
    }

    /**
     * A permission request for displaying web notifications.
     *
     * WebKitNotificationPermissionRequest represents a request for
     * permission to decide whether WebKit should provide the user with
     * notifications through the Web Notification API.
     *
     * When a WebKitNotificationPermissionRequest is not handled by the user,
     * it is denied by default.
     * @gir-type Class
     * @since 2.8
     */
    class NotificationPermissionRequest extends GObject.Object implements PermissionRequest {
        static $gtype: GObject.GType<NotificationPermissionRequest>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NotificationPermissionRequest.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<NotificationPermissionRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof NotificationPermissionRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NotificationPermissionRequest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof NotificationPermissionRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NotificationPermissionRequest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof NotificationPermissionRequest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<NotificationPermissionRequest.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Allow the action which triggered this request.
         */
        allow(): void;
        /**
         * Deny the action which triggered this request.
         */
        deny(): void;
        /**
         * Allow the action which triggered this request.
         * @virtual
         */
        vfunc_allow(): void;
        /**
         * Deny the action which triggered this request.
         * @virtual
         */
        vfunc_deny(): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace OptionMenu {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when closing a {@link WebKit2.OptionMenu} is requested. This can happen
             * when the user explicitly calls `webkit_option_menu_close()` or when the
             * element is detached from the current page.
             * @signal
             * @since 2.18
             * @run-last
             */
            close: () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Represents the dropdown menu of a `select` element in a {@link WebKit2.WebView}.
     *
     * When a select element in a {@link WebKit2.WebView} needs to display a dropdown menu, the signal
     * {@link WebKit2.WebView.SignalSignatures.show_option_menu | WebKit2.WebView::show-option-menu} is emitted, providing a WebKitOptionMenu with the
     * {@link WebKit2.OptionMenuItem}<!-- -->s that should be displayed.
     * @gir-type Class
     * @since 2.18
     */
    class OptionMenu extends GObject.Object {
        static $gtype: GObject.GType<OptionMenu>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OptionMenu.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<OptionMenu.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof OptionMenu.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OptionMenu.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof OptionMenu.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OptionMenu.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof OptionMenu.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<OptionMenu.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Activates the {@link WebKit2.OptionMenuItem} at `index` in `menu`.
         *
         * Activating an item changes the value
         * of the element making the item the active one. You are expected to close the menu with
         * `webkit_option_menu_close()` after activating an item, calling this function again will have no
         * effect.
         * @param index the index of the item
         */
        activate_item(index: number): void;
        /**
         * Request to close a {@link WebKit2.OptionMenu}.
         *
         * This emits WebKitOptionMenu::close signal.
         * This function should always be called to notify WebKit that the associated
         * menu has been closed. If the menu is closed and neither `webkit_option_menu_select_item()`
         * nor `webkit_option_menu_activate_item()` have been called, the element value remains
         * unchanged.
         */
        close(): void;
        /**
         * Returns the {@link WebKit2.OptionMenuItem} at `index` in `menu`.
         * @param index the index of the item
         * @returns a {@link WebKit2.OptionMenuItem} of `menu`.
         */
        get_item(index: number): OptionMenuItem;
        /**
         * Gets the length of the `menu`.
         * @returns the number of {@link WebKit2.OptionMenuItem}<!-- -->s in `menu`
         */
        get_n_items(): number;
        /**
         * Selects the {@link WebKit2.OptionMenuItem} at `index` in `menu`.
         *
         * Selecting an item changes the
         * text shown by the combo button, but it doesn't change the value of the element. You need to
         * explicitly activate the item with `webkit_option_menu_select_item()` or close the menu with
         * `webkit_option_menu_close()` in which case the currently selected item will be activated.
         * @param index the index of the item
         */
        select_item(index: number): void;
    }

    namespace Plugin {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Represents a plugin, enabling fine-grained control.
     *
     * This object represents a single plugin, found while scanning the
     * various platform plugin directories. This object can be used to get
     * more information about a plugin, and enable/disable it, allowing
     * fine-grained control of plugins. The list of available plugins can
     * be obtained from the {@link WebKit2.WebContext}, with
     * `webkit_web_context_get_plugins()`.
     * @gir-type Class
     * @deprecated since 2.32
     */
    class Plugin extends GObject.Object {
        static $gtype: GObject.GType<Plugin>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Plugin.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Plugin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Plugin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Plugin.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Plugin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Plugin.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Plugin.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Plugin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Obtain the plugin description.
         * @returns description, as a string.
         */
        get_description(): string | null;
        /**
         * Get information about MIME types handled by the plugin.
         *
         * Get information about MIME types handled by the plugin,
         * as a list of {@link WebKit2.MimeInfo}.
         * @returns a {@link GLib.List} of {@link WebKit2.MimeInfo}.
         */
        get_mime_info_list(): MimeInfo[];
        /**
         * Obtain the plugin name.
         * @returns name, as a string.
         */
        get_name(): string | null;
        /**
         * Obtain the absolute path where the plugin is installed.
         * @returns path, as a string.
         */
        get_path(): string | null;
    }

    namespace PointerLockPermissionRequest {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, PermissionRequest.ConstructorProps {}
    }

    /**
     * A permission request for locking the pointer.
     *
     * WebKitPointerLockPermissionRequest represents a request for
     * permission to decide whether WebKit can lock the pointer device when
     * requested by web content.
     *
     * When a WebKitPointerLockPermissionRequest is not handled by the user,
     * it is allowed by default.
     * @gir-type Class
     * @since 2.28
     */
    class PointerLockPermissionRequest extends GObject.Object implements PermissionRequest {
        static $gtype: GObject.GType<PointerLockPermissionRequest>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PointerLockPermissionRequest.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PointerLockPermissionRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof PointerLockPermissionRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PointerLockPermissionRequest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PointerLockPermissionRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PointerLockPermissionRequest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PointerLockPermissionRequest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PointerLockPermissionRequest.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Allow the action which triggered this request.
         */
        allow(): void;
        /**
         * Deny the action which triggered this request.
         */
        deny(): void;
        /**
         * Allow the action which triggered this request.
         * @virtual
         */
        vfunc_allow(): void;
        /**
         * Deny the action which triggered this request.
         * @virtual
         */
        vfunc_deny(): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace PolicyDecision {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A pending policy decision.
     *
     * Often WebKit allows the client to decide the policy for certain
     * operations. For instance, a client may want to open a link in a new
     * tab, block a navigation entirely, query the user or trigger a download
     * instead of a navigation. In these cases WebKit will fire the
     * {@link WebKit2.WebView.SignalSignatures.decide_policy | WebKit2.WebView::decide-policy} signal with a {@link WebKit2.PolicyDecision}
     * object. If the signal handler does nothing, WebKit will act as if
     * `webkit_policy_decision_use()` was called as soon as signal handling
     * completes. To make a policy decision asynchronously, simply increment
     * the reference count of the {@link WebKit2.PolicyDecision} object.
     * @gir-type Class
     */
    abstract class PolicyDecision extends GObject.Object {
        static $gtype: GObject.GType<PolicyDecision>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PolicyDecision.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PolicyDecision.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof PolicyDecision.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PolicyDecision.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PolicyDecision.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PolicyDecision.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PolicyDecision.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PolicyDecision.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Spawn a download from this decision.
         */
        download(): void;
        /**
         * {@link WebKit2.ResponsePolicyDecision}, this would cancel the request.
         *
         * Ignore the action which triggered this decision. For instance, for a
         * {@link WebKit2.ResponsePolicyDecision}, this would cancel the request.
         */
        ignore(): void;
        /**
         * Accept the action which triggered this decision.
         */
        use(): void;
        /**
         * Accept the navigation action and continue with provided `policies`.
         *
         * Accept the navigation action which triggered this decision, and
         * continue with `policies` affecting all subsequent loads of resources
         * in the origin associated with the accepted navigation action.
         *
         * For example, a navigation decision to a video sharing website may
         * be accepted under the priviso no movies are allowed to autoplay. The
         * autoplay policy in this case would be set in the `policies`.
         * @param policies a {@link WebKit2.WebsitePolicies}
         */
        use_with_policies(policies: WebsitePolicies): void;
    }

    namespace PrintCustomWidget {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted right before the printing will start. You should read the information
             * from the widget and update the content based on it if necessary. The widget
             * is not guaranteed to be valid at a later time.
             * @signal
             * @since 2.16
             * @run-last
             */
            apply: () => void;
            /**
             * Emitted after change of selected printer in the dialog. The actual page setup
             * and print settings are available and the custom widget can actualize itself
             * according to their values.
             * @signal
             * @since 2.16
             * @run-last
             */
            update: (arg0: Gtk.PageSetup, arg1: Gtk.PrintSettings) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::widget': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            title: string;
            widget: Gtk.Widget;
        }
    }

    /**
     * Allows to embed a custom widget in print dialog.
     *
     * A WebKitPrintCustomWidget allows to embed a custom widget in the print
     * dialog by connecting to the {@link WebKit2.PrintOperation.SignalSignatures.create_custom_widget | WebKit2.PrintOperation::create-custom-widget}
     * signal, creating a new WebKitPrintCustomWidget with
     * `webkit_print_custom_widget_new()` and returning it from there. You can later
     * use `webkit_print_operation_run_dialog()` to display the dialog.
     * @gir-type Class
     * @since 2.16
     */
    class PrintCustomWidget extends GObject.Object {
        static $gtype: GObject.GType<PrintCustomWidget>;

        // Properties

        /**
         * The title of the custom widget.
         * @since 2.16
         * @construct-only
         */
        get title(): string;
        /**
         * The custom {@link Gtk.Widget} that will be embedded in the dialog.
         * @since 2.16
         * @construct-only
         */
        get widget(): Gtk.Widget;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PrintCustomWidget.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PrintCustomWidget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](widget: Gtk.Widget, title: string): PrintCustomWidget;

        // Signals

        /** @signal */
        connect<K extends keyof PrintCustomWidget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PrintCustomWidget.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PrintCustomWidget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PrintCustomWidget.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PrintCustomWidget.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PrintCustomWidget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param widget
         * @virtual
         */
        vfunc_apply(widget: Gtk.Widget): void;
        /**
         * @param widget
         * @param page_setup
         * @param print_settings
         * @virtual
         */
        vfunc_update(widget: Gtk.Widget, page_setup: Gtk.PageSetup, print_settings: Gtk.PrintSettings): void;

        // Methods

        /**
         * Return the value of {@link WebKit2.PrintCustomWidget.title} property.
         *
         * Return the value of {@link WebKit2.PrintCustomWidget.title} property for the given
         * `print_custom_widget` object.
         * @returns Title of the `print_custom_widget`.
         */
        get_title(): string;
        /**
         * Return the value of {@link WebKit2.PrintCustomWidget.widget} property.
         *
         * Return the value of {@link WebKit2.PrintCustomWidget.widget} property for the given
         * `print_custom_widget` object. The returned value will always be valid if called
         * from {@link WebKit2.PrintCustomWidget.SignalSignatures.apply | WebKit2.PrintCustomWidget::apply} or {@link WebKit2.PrintCustomWidget.SignalSignatures.update | WebKit2.PrintCustomWidget::update}
         * callbacks, but it will be `null` if called after the
         * {@link WebKit2.PrintCustomWidget.SignalSignatures.apply | WebKit2.PrintCustomWidget::apply} signal is emitted.
         * @returns a {@link Gtk.Widget}.
         */
        get_widget(): Gtk.Widget;
    }

    namespace PrintOperation {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when displaying the print dialog with `webkit_print_operation_run_dialog()`.
             * The returned {@link WebKit2.PrintCustomWidget} will be added to the print dialog and
             * it will be owned by the `print_operation`. However, the object is guaranteed
             * to be alive until the {@link WebKit2.PrintCustomWidget.SignalSignatures.apply | WebKit2.PrintCustomWidget::apply} is emitted.
             * @signal
             * @since 2.16
             * @run-last
             */
            'create-custom-widget': () => PrintCustomWidget;
            /**
             * Emitted when an error occurs while printing. The given `error`, of the domain
             * `WEBKIT_PRINT_ERROR`, contains further details of the failure.
             * The {@link WebKit2.PrintOperation.SignalSignatures.finished | WebKit2.PrintOperation::finished} signal is emitted after this one.
             * @signal
             * @run-last
             */
            failed: (arg0: GLib.Error) => void;
            /**
             * Emitted when the print operation has finished doing everything
             * required for printing.
             * @signal
             * @run-last
             */
            finished: () => void;
            'notify::page-setup': (pspec: GObject.ParamSpec) => void;
            'notify::print-settings': (pspec: GObject.ParamSpec) => void;
            'notify::web-view': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            page_setup: Gtk.PageSetup;
            pageSetup: Gtk.PageSetup;
            print_settings: Gtk.PrintSettings;
            printSettings: Gtk.PrintSettings;
            web_view: WebView;
            webView: WebView;
        }
    }

    /**
     * Controls a print operation.
     *
     * A {@link WebKit2.PrintOperation} controls a print operation in WebKit. With
     * a similar API to {@link Gtk.PrintOperation}, it lets you set the print
     * settings with `webkit_print_operation_set_print_settings()` or
     * display the print dialog with `webkit_print_operation_run_dialog()`.
     * @gir-type Class
     */
    class PrintOperation extends GObject.Object {
        static $gtype: GObject.GType<PrintOperation>;

        // Properties

        /**
         * The initial {@link Gtk.PageSetup} for the print operation.
         */
        get page_setup(): Gtk.PageSetup;
        set page_setup(val: Gtk.PageSetup);
        /**
         * The initial {@link Gtk.PageSetup} for the print operation.
         */
        get pageSetup(): Gtk.PageSetup;
        set pageSetup(val: Gtk.PageSetup);
        /**
         * The initial {@link Gtk.PrintSettings} for the print operation.
         */
        get print_settings(): Gtk.PrintSettings;
        set print_settings(val: Gtk.PrintSettings);
        /**
         * The initial {@link Gtk.PrintSettings} for the print operation.
         */
        get printSettings(): Gtk.PrintSettings;
        set printSettings(val: Gtk.PrintSettings);
        /**
         * The {@link WebKit2.WebView} that will be printed.
         * @construct-only
         */
        get web_view(): WebView;
        /**
         * The {@link WebKit2.WebView} that will be printed.
         * @construct-only
         */
        get webView(): WebView;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PrintOperation.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PrintOperation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](web_view: WebView): PrintOperation;

        // Signals

        /** @signal */
        connect<K extends keyof PrintOperation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PrintOperation.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PrintOperation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PrintOperation.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PrintOperation.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PrintOperation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Return the current page setup of `print_operation`.
         *
         * It returns `null` until
         * either `webkit_print_operation_set_page_setup()` or `webkit_print_operation_run_dialog()`
         * have been called.
         * @returns the current {@link Gtk.PageSetup} of `print_operation`.
         */
        get_page_setup(): Gtk.PageSetup;
        /**
         * Return the current print settings of `print_operation`.
         *
         * It returns `null` until
         * either `webkit_print_operation_set_print_settings()` or `webkit_print_operation_run_dialog()`
         * have been called.
         * @returns the current {@link Gtk.PrintSettings} of `print_operation`.
         */
        get_print_settings(): Gtk.PrintSettings;
        /**
         * Start a print operation using current print settings and page setup.
         *
         * Start a print operation using current print settings and page setup
         * without showing the print dialog. If either print settings or page setup
         * are not set with `webkit_print_operation_set_print_settings()` and
         * `webkit_print_operation_set_page_setup()`, the default options will be used
         * and the print job will be sent to the default printer.
         * The {@link WebKit2.PrintOperation.SignalSignatures.finished | WebKit2.PrintOperation::finished} signal is emitted when the printing
         * operation finishes. If an error occurs while printing the signal
         * {@link WebKit2.PrintOperation.SignalSignatures.failed | WebKit2.PrintOperation::failed} is emitted before {@link WebKit2.PrintOperation.SignalSignatures.finished | WebKit2.PrintOperation::finished}.
         */
        print(): void;
        /**
         * Run the print dialog and start printing.
         *
         * Run the print dialog and start printing using the options selected by
         * the user. This method returns when the print dialog is closed.
         * If the print dialog is cancelled {@link WebKit2.PrintOperationResponse.CANCEL}
         * is returned. If the user clicks on the print button, {@link WebKit2.PrintOperationResponse.PRINT}
         * is returned and the print operation starts. In this case, the {@link WebKit2.PrintOperation.SignalSignatures.finished | WebKit2.PrintOperation::finished}
         * signal is emitted when the operation finishes. If an error occurs while printing, the signal
         * {@link WebKit2.PrintOperation.SignalSignatures.failed | WebKit2.PrintOperation::failed} is emitted before {@link WebKit2.PrintOperation.SignalSignatures.finished | WebKit2.PrintOperation::finished}.
         * If the print dialog is not cancelled current print settings and page setup of `print_operation`
         * are updated with options selected by the user when Print button is pressed in print dialog.
         * You can get the updated print settings and page setup by calling
         * `webkit_print_operation_get_print_settings()` and `webkit_print_operation_get_page_setup()`
         * after this method.
         * @param parent transient parent of the print dialog
         * @returns the {@link WebKit2.PrintOperationResponse} of the print dialog
         */
        run_dialog(parent?: Gtk.Window | null): PrintOperationResponse;
        /**
         * Set the current page setup of `print_operation`.
         *
         * Current page setup is used for the
         * initial values of the print dialog when `webkit_print_operation_run_dialog()` is called.
         * @param page_setup a {@link Gtk.PageSetup} to set
         */
        set_page_setup(page_setup: Gtk.PageSetup): void;
        /**
         * Set the current print settings of `print_operation`.
         *
         * Set the current print settings of `print_operation`. Current print settings are used for
         * the initial values of the print dialog when `webkit_print_operation_run_dialog()` is called.
         * @param print_settings a {@link Gtk.PrintSettings} to set
         */
        set_print_settings(print_settings: Gtk.PrintSettings): void;
    }

    namespace ResponsePolicyDecision {
        // Signal signatures
        interface SignalSignatures extends PolicyDecision.SignalSignatures {
            'notify::request': (pspec: GObject.ParamSpec) => void;
            'notify::response': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends PolicyDecision.ConstructorProps {
            request: URIRequest;
            response: URIResponse;
        }
    }

    /**
     * A policy decision for resource responses.
     *
     * WebKitResponsePolicyDecision represents a policy decision for a
     * resource response, whether from the network or the local system.
     * A very common use case for these types of decision is deciding
     * whether or not to download a particular resource or to load it
     * normally.
     * @gir-type Class
     */
    class ResponsePolicyDecision extends PolicyDecision {
        static $gtype: GObject.GType<ResponsePolicyDecision>;

        // Properties

        /**
         * This property contains the {@link WebKit2.URIRequest} associated with this
         * policy decision.
         * @read-only
         */
        get request(): URIRequest;
        /**
         * This property contains the {@link WebKit2.URIResponse} associated with this
         * policy decision.
         * @read-only
         */
        get response(): URIResponse;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ResponsePolicyDecision.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ResponsePolicyDecision.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ResponsePolicyDecision.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ResponsePolicyDecision.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ResponsePolicyDecision.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ResponsePolicyDecision.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ResponsePolicyDecision.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ResponsePolicyDecision.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Return the {@link WebKit2.URIRequest} associated with the response decision.
         *
         * Modifications to the returned object are <emphasis>not</emphasis> taken
         * into account when the request is sent over the network, and is intended
         * only to aid in evaluating whether a response decision should be taken or
         * not. To modify requests before they are sent over the network the
         * `WebKitPage::send-request` signal can be used instead.
         * @returns The URI request that is associated with this policy decision.
         */
        get_request(): URIRequest;
        /**
         * Gets the value of the {@link WebKit2.ResponsePolicyDecision.response} property.
         * @returns The URI response that is associated with this policy decision.
         */
        get_response(): URIResponse;
        /**
         * Gets whether the MIME type of the response can be displayed in the {@link WebKit2.WebView}.
         *
         * Gets whether the MIME type of the response can be displayed in the {@link WebKit2.WebView}
         * that triggered this policy decision request. See also `webkit_web_view_can_show_mime_type()`.
         * @returns `true` if the MIME type of the response is supported or `false` otherwise
         */
        is_mime_type_supported(): boolean;
    }

    namespace SecurityManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Controls security settings in a {@link WebKit2.WebContext}.
     *
     * The {@link WebKit2.SecurityManager} defines security settings for URI
     * schemes in a {@link WebKit2.WebContext}. Get it from the context with
     * `webkit_web_context_get_security_manager()`, and use it to register a
     * URI scheme with a certain security level, or to check if it already
     * has it.
     * @gir-type Class
     */
    class SecurityManager extends GObject.Object {
        static $gtype: GObject.GType<SecurityManager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SecurityManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SecurityManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof SecurityManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SecurityManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SecurityManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SecurityManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SecurityManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SecurityManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Register `scheme` as a CORS (Cross-origin resource sharing) enabled scheme.
         *
         * This means that CORS requests are allowed. See W3C CORS specification
         * http://www.w3.org/TR/cors/.
         * @param scheme a URI scheme
         */
        register_uri_scheme_as_cors_enabled(scheme: string): void;
        /**
         * Register `scheme` as a display isolated scheme.
         *
         * This means that pages cannot
         * display these URIs unless they are from the same scheme.
         * @param scheme a URI scheme
         */
        register_uri_scheme_as_display_isolated(scheme: string): void;
        /**
         * Register `scheme` as an empty document scheme.
         *
         * This means that
         * they are allowed to commit synchronously.
         * @param scheme a URI scheme
         */
        register_uri_scheme_as_empty_document(scheme: string): void;
        /**
         * Register `scheme` as a local scheme.
         *
         * This means that other non-local pages
         * cannot link to or access URIs of this scheme.
         * @param scheme a URI scheme
         */
        register_uri_scheme_as_local(scheme: string): void;
        /**
         * Register `scheme` as a no-access scheme.
         *
         * This means that pages loaded
         * with this URI scheme cannot access pages loaded with any other URI scheme.
         * @param scheme a URI scheme
         */
        register_uri_scheme_as_no_access(scheme: string): void;
        /**
         * Register `scheme` as a secure scheme.
         *
         * This means that mixed
         * content warnings won't be generated for this scheme when
         * included by an HTTPS page.
         * @param scheme a URI scheme
         */
        register_uri_scheme_as_secure(scheme: string): void;
        /**
         * Whether `scheme` is considered as a CORS enabled scheme.
         *
         * See also `webkit_security_manager_register_uri_scheme_as_cors_enabled()`.
         * @param scheme a URI scheme
         * @returns `true` if `scheme` is a CORS enabled scheme or `false` otherwise.
         */
        uri_scheme_is_cors_enabled(scheme: string): boolean;
        /**
         * Whether `scheme` is considered as a display isolated scheme.
         *
         * See also `webkit_security_manager_register_uri_scheme_as_display_isolated()`.
         * @param scheme a URI scheme
         * @returns `true` if `scheme` is a display isolated scheme or `false` otherwise.
         */
        uri_scheme_is_display_isolated(scheme: string): boolean;
        /**
         * Whether `scheme` is considered as an empty document scheme.
         *
         * See also `webkit_security_manager_register_uri_scheme_as_empty_document()`.
         * @param scheme a URI scheme
         * @returns `true` if `scheme` is an empty document scheme or `false` otherwise.
         */
        uri_scheme_is_empty_document(scheme: string): boolean;
        /**
         * Whether `scheme` is considered as a local scheme.
         *
         * See also `webkit_security_manager_register_uri_scheme_as_local()`.
         * @param scheme a URI scheme
         * @returns `true` if `scheme` is a local scheme or `false` otherwise.
         */
        uri_scheme_is_local(scheme: string): boolean;
        /**
         * Whether `scheme` is considered as a no-access scheme.
         *
         * See also `webkit_security_manager_register_uri_scheme_as_no_access()`.
         * @param scheme a URI scheme
         * @returns `true` if `scheme` is a no-access scheme or `false` otherwise.
         */
        uri_scheme_is_no_access(scheme: string): boolean;
        /**
         * Whether `scheme` is considered as a secure scheme.
         *
         * See also `webkit_security_manager_register_uri_scheme_as_secure()`.
         * @param scheme a URI scheme
         * @returns `true` if `scheme` is a secure scheme or `false` otherwise.
         */
        uri_scheme_is_secure(scheme: string): boolean;
    }

    namespace Settings {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::allow-file-access-from-file-urls': (pspec: GObject.ParamSpec) => void;
            'notify::allow-modal-dialogs': (pspec: GObject.ParamSpec) => void;
            'notify::allow-top-navigation-to-data-urls': (pspec: GObject.ParamSpec) => void;
            'notify::allow-universal-access-from-file-urls': (pspec: GObject.ParamSpec) => void;
            'notify::auto-load-images': (pspec: GObject.ParamSpec) => void;
            'notify::cursive-font-family': (pspec: GObject.ParamSpec) => void;
            'notify::default-charset': (pspec: GObject.ParamSpec) => void;
            'notify::default-font-family': (pspec: GObject.ParamSpec) => void;
            'notify::default-font-size': (pspec: GObject.ParamSpec) => void;
            'notify::default-monospace-font-size': (pspec: GObject.ParamSpec) => void;
            'notify::draw-compositing-indicators': (pspec: GObject.ParamSpec) => void;
            'notify::enable-accelerated-2d-canvas': (pspec: GObject.ParamSpec) => void;
            'notify::enable-accelerated2d-canvas': (pspec: GObject.ParamSpec) => void;
            'notify::enable-back-forward-navigation-gestures': (pspec: GObject.ParamSpec) => void;
            'notify::enable-caret-browsing': (pspec: GObject.ParamSpec) => void;
            'notify::enable-developer-extras': (pspec: GObject.ParamSpec) => void;
            'notify::enable-dns-prefetching': (pspec: GObject.ParamSpec) => void;
            'notify::enable-encrypted-media': (pspec: GObject.ParamSpec) => void;
            'notify::enable-frame-flattening': (pspec: GObject.ParamSpec) => void;
            'notify::enable-fullscreen': (pspec: GObject.ParamSpec) => void;
            'notify::enable-html5-database': (pspec: GObject.ParamSpec) => void;
            'notify::enable-html5-local-storage': (pspec: GObject.ParamSpec) => void;
            'notify::enable-hyperlink-auditing': (pspec: GObject.ParamSpec) => void;
            'notify::enable-java': (pspec: GObject.ParamSpec) => void;
            'notify::enable-javascript': (pspec: GObject.ParamSpec) => void;
            'notify::enable-javascript-markup': (pspec: GObject.ParamSpec) => void;
            'notify::enable-media': (pspec: GObject.ParamSpec) => void;
            'notify::enable-media-capabilities': (pspec: GObject.ParamSpec) => void;
            'notify::enable-media-stream': (pspec: GObject.ParamSpec) => void;
            'notify::enable-mediasource': (pspec: GObject.ParamSpec) => void;
            'notify::enable-mock-capture-devices': (pspec: GObject.ParamSpec) => void;
            'notify::enable-offline-web-application-cache': (pspec: GObject.ParamSpec) => void;
            'notify::enable-page-cache': (pspec: GObject.ParamSpec) => void;
            'notify::enable-plugins': (pspec: GObject.ParamSpec) => void;
            'notify::enable-private-browsing': (pspec: GObject.ParamSpec) => void;
            'notify::enable-resizable-text-areas': (pspec: GObject.ParamSpec) => void;
            'notify::enable-site-specific-quirks': (pspec: GObject.ParamSpec) => void;
            'notify::enable-smooth-scrolling': (pspec: GObject.ParamSpec) => void;
            'notify::enable-spatial-navigation': (pspec: GObject.ParamSpec) => void;
            'notify::enable-tabs-to-links': (pspec: GObject.ParamSpec) => void;
            'notify::enable-webaudio': (pspec: GObject.ParamSpec) => void;
            'notify::enable-webgl': (pspec: GObject.ParamSpec) => void;
            'notify::enable-webrtc': (pspec: GObject.ParamSpec) => void;
            'notify::enable-write-console-messages-to-stdout': (pspec: GObject.ParamSpec) => void;
            'notify::enable-xss-auditor': (pspec: GObject.ParamSpec) => void;
            'notify::fantasy-font-family': (pspec: GObject.ParamSpec) => void;
            'notify::hardware-acceleration-policy': (pspec: GObject.ParamSpec) => void;
            'notify::javascript-can-access-clipboard': (pspec: GObject.ParamSpec) => void;
            'notify::javascript-can-open-windows-automatically': (pspec: GObject.ParamSpec) => void;
            'notify::load-icons-ignoring-image-load-setting': (pspec: GObject.ParamSpec) => void;
            'notify::media-content-types-requiring-hardware-support': (pspec: GObject.ParamSpec) => void;
            'notify::media-playback-allows-inline': (pspec: GObject.ParamSpec) => void;
            'notify::media-playback-requires-user-gesture': (pspec: GObject.ParamSpec) => void;
            'notify::minimum-font-size': (pspec: GObject.ParamSpec) => void;
            'notify::monospace-font-family': (pspec: GObject.ParamSpec) => void;
            'notify::pictograph-font-family': (pspec: GObject.ParamSpec) => void;
            'notify::print-backgrounds': (pspec: GObject.ParamSpec) => void;
            'notify::sans-serif-font-family': (pspec: GObject.ParamSpec) => void;
            'notify::serif-font-family': (pspec: GObject.ParamSpec) => void;
            'notify::user-agent': (pspec: GObject.ParamSpec) => void;
            'notify::zoom-text-only': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            allow_file_access_from_file_urls: boolean;
            allowFileAccessFromFileUrls: boolean;
            allow_modal_dialogs: boolean;
            allowModalDialogs: boolean;
            allow_top_navigation_to_data_urls: boolean;
            allowTopNavigationToDataUrls: boolean;
            allow_universal_access_from_file_urls: boolean;
            allowUniversalAccessFromFileUrls: boolean;
            auto_load_images: boolean;
            autoLoadImages: boolean;
            cursive_font_family: string;
            cursiveFontFamily: string;
            default_charset: string;
            defaultCharset: string;
            default_font_family: string;
            defaultFontFamily: string;
            default_font_size: number;
            defaultFontSize: number;
            default_monospace_font_size: number;
            defaultMonospaceFontSize: number;
            draw_compositing_indicators: boolean;
            drawCompositingIndicators: boolean;
            enable_accelerated_2d_canvas: boolean;
            enableAccelerated2dCanvas: boolean;
            enable_back_forward_navigation_gestures: boolean;
            enableBackForwardNavigationGestures: boolean;
            enable_caret_browsing: boolean;
            enableCaretBrowsing: boolean;
            enable_developer_extras: boolean;
            enableDeveloperExtras: boolean;
            enable_dns_prefetching: boolean;
            enableDnsPrefetching: boolean;
            enable_encrypted_media: boolean;
            enableEncryptedMedia: boolean;
            enable_frame_flattening: boolean;
            enableFrameFlattening: boolean;
            enable_fullscreen: boolean;
            enableFullscreen: boolean;
            enable_html5_database: boolean;
            enableHtml5Database: boolean;
            enable_html5_local_storage: boolean;
            enableHtml5LocalStorage: boolean;
            enable_hyperlink_auditing: boolean;
            enableHyperlinkAuditing: boolean;
            enable_java: boolean;
            enableJava: boolean;
            enable_javascript: boolean;
            enableJavascript: boolean;
            enable_javascript_markup: boolean;
            enableJavascriptMarkup: boolean;
            enable_media: boolean;
            enableMedia: boolean;
            enable_media_capabilities: boolean;
            enableMediaCapabilities: boolean;
            enable_media_stream: boolean;
            enableMediaStream: boolean;
            enable_mediasource: boolean;
            enableMediasource: boolean;
            enable_mock_capture_devices: boolean;
            enableMockCaptureDevices: boolean;
            enable_offline_web_application_cache: boolean;
            enableOfflineWebApplicationCache: boolean;
            enable_page_cache: boolean;
            enablePageCache: boolean;
            enable_plugins: boolean;
            enablePlugins: boolean;
            enable_private_browsing: boolean;
            enablePrivateBrowsing: boolean;
            enable_resizable_text_areas: boolean;
            enableResizableTextAreas: boolean;
            enable_site_specific_quirks: boolean;
            enableSiteSpecificQuirks: boolean;
            enable_smooth_scrolling: boolean;
            enableSmoothScrolling: boolean;
            enable_spatial_navigation: boolean;
            enableSpatialNavigation: boolean;
            enable_tabs_to_links: boolean;
            enableTabsToLinks: boolean;
            enable_webaudio: boolean;
            enableWebaudio: boolean;
            enable_webgl: boolean;
            enableWebgl: boolean;
            enable_webrtc: boolean;
            enableWebrtc: boolean;
            enable_write_console_messages_to_stdout: boolean;
            enableWriteConsoleMessagesToStdout: boolean;
            enable_xss_auditor: boolean;
            enableXssAuditor: boolean;
            fantasy_font_family: string;
            fantasyFontFamily: string;
            hardware_acceleration_policy: HardwareAccelerationPolicy;
            hardwareAccelerationPolicy: HardwareAccelerationPolicy;
            javascript_can_access_clipboard: boolean;
            javascriptCanAccessClipboard: boolean;
            javascript_can_open_windows_automatically: boolean;
            javascriptCanOpenWindowsAutomatically: boolean;
            load_icons_ignoring_image_load_setting: boolean;
            loadIconsIgnoringImageLoadSetting: boolean;
            media_content_types_requiring_hardware_support: string;
            mediaContentTypesRequiringHardwareSupport: string;
            media_playback_allows_inline: boolean;
            mediaPlaybackAllowsInline: boolean;
            media_playback_requires_user_gesture: boolean;
            mediaPlaybackRequiresUserGesture: boolean;
            minimum_font_size: number;
            minimumFontSize: number;
            monospace_font_family: string;
            monospaceFontFamily: string;
            pictograph_font_family: string;
            pictographFontFamily: string;
            print_backgrounds: boolean;
            printBackgrounds: boolean;
            sans_serif_font_family: string;
            sansSerifFontFamily: string;
            serif_font_family: string;
            serifFontFamily: string;
            user_agent: string;
            userAgent: string;
            zoom_text_only: boolean;
            zoomTextOnly: boolean;
        }
    }

    /**
     * Control the behaviour of a {@link WebKit2.WebView}.
     *
     * {@link WebKit2.Settings} can be applied to a {@link WebKit2.WebView} to control text charset,
     * color, font sizes, printing mode, script support, loading of images and various
     * other things on a {@link WebKit2.WebView}. After creation, a {@link WebKit2.Settings} object
     * contains default settings.
     *
     * ```c
     * // Disable JavaScript
     * WebKitSettings *settings = webkit_web_view_group_get_settings (my_view_group);
     * webkit_settings_set_enable_javascript (settings, FALSE);
     * ```
     * @gir-type Class
     */
    class Settings extends GObject.Object {
        static $gtype: GObject.GType<Settings>;

        // Properties

        /**
         * Whether file access is allowed from file URLs. By default, when
         * something is loaded in a {@link WebKit2.WebView} using a file URI, cross
         * origin requests to other file resources are not allowed. This
         * setting allows you to change that behaviour, so that it would be
         * possible to do a XMLHttpRequest of a local file, for example.
         * @since 2.10
         */
        get allow_file_access_from_file_urls(): boolean;
        set allow_file_access_from_file_urls(val: boolean);
        /**
         * Whether file access is allowed from file URLs. By default, when
         * something is loaded in a {@link WebKit2.WebView} using a file URI, cross
         * origin requests to other file resources are not allowed. This
         * setting allows you to change that behaviour, so that it would be
         * possible to do a XMLHttpRequest of a local file, for example.
         * @since 2.10
         */
        get allowFileAccessFromFileUrls(): boolean;
        set allowFileAccessFromFileUrls(val: boolean);
        /**
         * Determine whether it's allowed to create and run modal dialogs
         * from a {@link WebKit2.WebView} through JavaScript with
         * <function>window.showModalDialog</function>. If it's set to
         * `false`, the associated {@link WebKit2.WebView} won't be able to create
         * new modal dialogs, so not even the {@link WebKit2.WebView.SignalSignatures.create | WebKit2.WebView::create}
         * signal will be emitted.
         */
        get allow_modal_dialogs(): boolean;
        set allow_modal_dialogs(val: boolean);
        /**
         * Determine whether it's allowed to create and run modal dialogs
         * from a {@link WebKit2.WebView} through JavaScript with
         * <function>window.showModalDialog</function>. If it's set to
         * `false`, the associated {@link WebKit2.WebView} won't be able to create
         * new modal dialogs, so not even the {@link WebKit2.WebView.SignalSignatures.create | WebKit2.WebView::create}
         * signal will be emitted.
         */
        get allowModalDialogs(): boolean;
        set allowModalDialogs(val: boolean);
        /**
         * Whether or not the top frame is allowed to navigate to data URLs. It is disabled by default
         * due to the risk it poses when loading untrusted URLs, with data URLs being used in scamming
         * and phishing attacks. In contrast, a scenario where it could be enabled could be an app that
         * embeds a WebView and you have control of the pages being show instead of a generic browser.
         * @since 2.28
         */
        get allow_top_navigation_to_data_urls(): boolean;
        set allow_top_navigation_to_data_urls(val: boolean);
        /**
         * Whether or not the top frame is allowed to navigate to data URLs. It is disabled by default
         * due to the risk it poses when loading untrusted URLs, with data URLs being used in scamming
         * and phishing attacks. In contrast, a scenario where it could be enabled could be an app that
         * embeds a WebView and you have control of the pages being show instead of a generic browser.
         * @since 2.28
         */
        get allowTopNavigationToDataUrls(): boolean;
        set allowTopNavigationToDataUrls(val: boolean);
        /**
         * Whether or not JavaScript running in the context of a file scheme URL
         * should be allowed to access content from any origin.  By default, when
         * something is loaded in a {@link WebKit2.WebView} using a file scheme URL,
         * access to the local file system and arbitrary local storage is not
         * allowed. This setting allows you to change that behaviour, so that
         * it would be possible to use local storage, for example.
         * @since 2.14
         */
        get allow_universal_access_from_file_urls(): boolean;
        set allow_universal_access_from_file_urls(val: boolean);
        /**
         * Whether or not JavaScript running in the context of a file scheme URL
         * should be allowed to access content from any origin.  By default, when
         * something is loaded in a {@link WebKit2.WebView} using a file scheme URL,
         * access to the local file system and arbitrary local storage is not
         * allowed. This setting allows you to change that behaviour, so that
         * it would be possible to use local storage, for example.
         * @since 2.14
         */
        get allowUniversalAccessFromFileUrls(): boolean;
        set allowUniversalAccessFromFileUrls(val: boolean);
        /**
         * Determines whether images should be automatically loaded or not.
         * On devices where network bandwidth is of concern, it might be
         * useful to turn this property off.
         */
        get auto_load_images(): boolean;
        set auto_load_images(val: boolean);
        /**
         * Determines whether images should be automatically loaded or not.
         * On devices where network bandwidth is of concern, it might be
         * useful to turn this property off.
         */
        get autoLoadImages(): boolean;
        set autoLoadImages(val: boolean);
        /**
         * The font family used as the default for content using a cursive font.
         */
        get cursive_font_family(): string;
        set cursive_font_family(val: string);
        /**
         * The font family used as the default for content using a cursive font.
         */
        get cursiveFontFamily(): string;
        set cursiveFontFamily(val: string);
        /**
         * The default text charset used when interpreting content with an unspecified charset.
         */
        get default_charset(): string;
        set default_charset(val: string);
        /**
         * The default text charset used when interpreting content with an unspecified charset.
         */
        get defaultCharset(): string;
        set defaultCharset(val: string);
        /**
         * The font family to use as the default for content that does not specify a font.
         */
        get default_font_family(): string;
        set default_font_family(val: string);
        /**
         * The font family to use as the default for content that does not specify a font.
         */
        get defaultFontFamily(): string;
        set defaultFontFamily(val: string);
        /**
         * The default font size in pixels to use for content displayed if
         * no font size is specified.
         */
        get default_font_size(): number;
        set default_font_size(val: number);
        /**
         * The default font size in pixels to use for content displayed if
         * no font size is specified.
         */
        get defaultFontSize(): number;
        set defaultFontSize(val: number);
        /**
         * The default font size in pixels to use for content displayed in
         * monospace font if no font size is specified.
         */
        get default_monospace_font_size(): number;
        set default_monospace_font_size(val: number);
        /**
         * The default font size in pixels to use for content displayed in
         * monospace font if no font size is specified.
         */
        get defaultMonospaceFontSize(): number;
        set defaultMonospaceFontSize(val: number);
        /**
         * Whether to draw compositing borders and repaint counters on layers drawn
         * with accelerated compositing. This is useful for debugging issues related
         * to web content that is composited with the GPU.
         */
        get draw_compositing_indicators(): boolean;
        set draw_compositing_indicators(val: boolean);
        /**
         * Whether to draw compositing borders and repaint counters on layers drawn
         * with accelerated compositing. This is useful for debugging issues related
         * to web content that is composited with the GPU.
         */
        get drawCompositingIndicators(): boolean;
        set drawCompositingIndicators(val: boolean);
        /**
         * Enable or disable accelerated 2D canvas. Accelerated 2D canvas is only available
         * if WebKit was compiled with a version of Cairo including the unstable CairoGL API.
         * When accelerated 2D canvas is enabled, WebKit may render some 2D canvas content
         * using hardware accelerated drawing operations.
         * @since 2.2
         * @deprecated since 2.32.
         */
        get enable_accelerated_2d_canvas(): boolean;
        set enable_accelerated_2d_canvas(val: boolean);
        /**
         * Enable or disable accelerated 2D canvas. Accelerated 2D canvas is only available
         * if WebKit was compiled with a version of Cairo including the unstable CairoGL API.
         * When accelerated 2D canvas is enabled, WebKit may render some 2D canvas content
         * using hardware accelerated drawing operations.
         * @since 2.2
         * @deprecated since 2.32.
         */
        get enableAccelerated2dCanvas(): boolean;
        set enableAccelerated2dCanvas(val: boolean);
        /**
         * Enable or disable horizontal swipe gesture for back-forward navigation.
         * @since 2.24
         */
        get enable_back_forward_navigation_gestures(): boolean;
        set enable_back_forward_navigation_gestures(val: boolean);
        /**
         * Enable or disable horizontal swipe gesture for back-forward navigation.
         * @since 2.24
         */
        get enableBackForwardNavigationGestures(): boolean;
        set enableBackForwardNavigationGestures(val: boolean);
        /**
         * Whether to enable accessibility enhanced keyboard navigation.
         */
        get enable_caret_browsing(): boolean;
        set enable_caret_browsing(val: boolean);
        /**
         * Whether to enable accessibility enhanced keyboard navigation.
         */
        get enableCaretBrowsing(): boolean;
        set enableCaretBrowsing(val: boolean);
        /**
         * Determines whether or not developer tools, such as the Web Inspector, are enabled.
         */
        get enable_developer_extras(): boolean;
        set enable_developer_extras(val: boolean);
        /**
         * Determines whether or not developer tools, such as the Web Inspector, are enabled.
         */
        get enableDeveloperExtras(): boolean;
        set enableDeveloperExtras(val: boolean);
        /**
         * Determines whether or not to prefetch domain names. DNS prefetching attempts
         * to resolve domain names before a user tries to follow a link.
         */
        get enable_dns_prefetching(): boolean;
        set enable_dns_prefetching(val: boolean);
        /**
         * Determines whether or not to prefetch domain names. DNS prefetching attempts
         * to resolve domain names before a user tries to follow a link.
         */
        get enableDnsPrefetching(): boolean;
        set enableDnsPrefetching(val: boolean);
        /**
         * Enable or disable support for Encrypted Media API on pages.
         * EncryptedMedia is an experimental JavaScript API for playing encrypted media in HTML.
         * This property will only work as intended if the EncryptedMedia feature is enabled at build time
         * with the ENABLE_ENCRYPTED_MEDIA flag.
         *
         * See https://www.w3.org/TR/encrypted-media/
         * @since 2.20
         */
        get enable_encrypted_media(): boolean;
        set enable_encrypted_media(val: boolean);
        /**
         * Enable or disable support for Encrypted Media API on pages.
         * EncryptedMedia is an experimental JavaScript API for playing encrypted media in HTML.
         * This property will only work as intended if the EncryptedMedia feature is enabled at build time
         * with the ENABLE_ENCRYPTED_MEDIA flag.
         *
         * See https://www.w3.org/TR/encrypted-media/
         * @since 2.20
         */
        get enableEncryptedMedia(): boolean;
        set enableEncryptedMedia(val: boolean);
        /**
         * Whether to enable the frame flattening. With this setting each subframe is expanded
         * to its contents, which will flatten all the frames to become one scrollable page.
         * On touch devices scrollable subframes on a page can result in a confusing user experience.
         * @deprecated since 2.38
         */
        get enable_frame_flattening(): boolean;
        set enable_frame_flattening(val: boolean);
        /**
         * Whether to enable the frame flattening. With this setting each subframe is expanded
         * to its contents, which will flatten all the frames to become one scrollable page.
         * On touch devices scrollable subframes on a page can result in a confusing user experience.
         * @deprecated since 2.38
         */
        get enableFrameFlattening(): boolean;
        set enableFrameFlattening(val: boolean);
        /**
         * Whether to enable the Javascript Fullscreen API. The API
         * allows any HTML element to request fullscreen display. See also
         * the current draft of the spec:
         * http://www.w3.org/TR/fullscreen/
         */
        get enable_fullscreen(): boolean;
        set enable_fullscreen(val: boolean);
        /**
         * Whether to enable the Javascript Fullscreen API. The API
         * allows any HTML element to request fullscreen display. See also
         * the current draft of the spec:
         * http://www.w3.org/TR/fullscreen/
         */
        get enableFullscreen(): boolean;
        set enableFullscreen(val: boolean);
        /**
         * Whether to enable HTML5 client-side SQL database support (IndexedDB).
         */
        get enable_html5_database(): boolean;
        set enable_html5_database(val: boolean);
        /**
         * Whether to enable HTML5 client-side SQL database support (IndexedDB).
         */
        get enableHtml5Database(): boolean;
        set enableHtml5Database(val: boolean);
        /**
         * Whether to enable HTML5 local storage support. Local storage provides
         * simple synchronous storage access.
         *
         * HTML5 local storage specification is available at
         * http://dev.w3.org/html5/webstorage/.
         */
        get enable_html5_local_storage(): boolean;
        set enable_html5_local_storage(val: boolean);
        /**
         * Whether to enable HTML5 local storage support. Local storage provides
         * simple synchronous storage access.
         *
         * HTML5 local storage specification is available at
         * http://dev.w3.org/html5/webstorage/.
         */
        get enableHtml5LocalStorage(): boolean;
        set enableHtml5LocalStorage(val: boolean);
        /**
         * Determines whether or not hyperlink auditing is enabled.
         *
         * The hyperlink auditing specification is available at
         * http://www.whatwg.org/specs/web-apps/current-work/multipage/links.html#hyperlink-auditing.
         */
        get enable_hyperlink_auditing(): boolean;
        set enable_hyperlink_auditing(val: boolean);
        /**
         * Determines whether or not hyperlink auditing is enabled.
         *
         * The hyperlink auditing specification is available at
         * http://www.whatwg.org/specs/web-apps/current-work/multipage/links.html#hyperlink-auditing.
         */
        get enableHyperlinkAuditing(): boolean;
        set enableHyperlinkAuditing(val: boolean);
        /**
         * Determines whether or not Java is enabled on the page.
         * @deprecated since 2.38
         */
        get enable_java(): boolean;
        set enable_java(val: boolean);
        /**
         * Determines whether or not Java is enabled on the page.
         * @deprecated since 2.38
         */
        get enableJava(): boolean;
        set enableJava(val: boolean);
        /**
         * Determines whether or not JavaScript executes within a page.
         */
        get enable_javascript(): boolean;
        set enable_javascript(val: boolean);
        /**
         * Determines whether or not JavaScript executes within a page.
         */
        get enableJavascript(): boolean;
        set enableJavascript(val: boolean);
        /**
         * Determines whether or not JavaScript markup is allowed in document. When this setting is disabled,
         * all JavaScript-related elements and attributes are removed from the document during parsing. Note that
         * executing JavaScript is still allowed if {@link WebKit2.Settings.enable_javascript} is `true`.
         * @since 2.24
         */
        get enable_javascript_markup(): boolean;
        set enable_javascript_markup(val: boolean);
        /**
         * Determines whether or not JavaScript markup is allowed in document. When this setting is disabled,
         * all JavaScript-related elements and attributes are removed from the document during parsing. Note that
         * executing JavaScript is still allowed if {@link WebKit2.Settings.enable_javascript} is `true`.
         * @since 2.24
         */
        get enableJavascriptMarkup(): boolean;
        set enableJavascriptMarkup(val: boolean);
        /**
         * Enable or disable support for media playback on pages. This setting is enabled by
         * default. Disabling it means `<audio>`, `<track>` and `<video>` elements will have
         * playback support disabled.
         * @since 2.26
         */
        get enable_media(): boolean;
        set enable_media(val: boolean);
        /**
         * Enable or disable support for media playback on pages. This setting is enabled by
         * default. Disabling it means `<audio>`, `<track>` and `<video>` elements will have
         * playback support disabled.
         * @since 2.26
         */
        get enableMedia(): boolean;
        set enableMedia(val: boolean);
        /**
         * Enable or disable support for MediaCapabilities on pages. This
         * specification intends to provide APIs to allow websites to make an optimal
         * decision when picking media content for the user. The APIs will expose
         * information about the decoding and encoding capabilities for a given format
         * but also output capabilities to find the best match based on the device’s
         * display.
         *
         * See also https://wicg.github.io/media-capabilities/
         * @since 2.22
         */
        get enable_media_capabilities(): boolean;
        set enable_media_capabilities(val: boolean);
        /**
         * Enable or disable support for MediaCapabilities on pages. This
         * specification intends to provide APIs to allow websites to make an optimal
         * decision when picking media content for the user. The APIs will expose
         * information about the decoding and encoding capabilities for a given format
         * but also output capabilities to find the best match based on the device’s
         * display.
         *
         * See also https://wicg.github.io/media-capabilities/
         * @since 2.22
         */
        get enableMediaCapabilities(): boolean;
        set enableMediaCapabilities(val: boolean);
        /**
         * Enable or disable support for MediaStream on pages. MediaStream
         * is an experimental proposal for allowing web pages to access
         * audio and video devices for capture.
         *
         * See also http://dev.w3.org/2011/webrtc/editor/getusermedia.html
         * @since 2.4
         */
        get enable_media_stream(): boolean;
        set enable_media_stream(val: boolean);
        /**
         * Enable or disable support for MediaStream on pages. MediaStream
         * is an experimental proposal for allowing web pages to access
         * audio and video devices for capture.
         *
         * See also http://dev.w3.org/2011/webrtc/editor/getusermedia.html
         * @since 2.4
         */
        get enableMediaStream(): boolean;
        set enableMediaStream(val: boolean);
        /**
         * Enable or disable support for MediaSource on pages. MediaSource
         * extends HTMLMediaElement to allow JavaScript to generate media
         * streams for playback.
         *
         * See also http://www.w3.org/TR/media-source/
         * @since 2.4
         */
        get enable_mediasource(): boolean;
        set enable_mediasource(val: boolean);
        /**
         * Enable or disable support for MediaSource on pages. MediaSource
         * extends HTMLMediaElement to allow JavaScript to generate media
         * streams for playback.
         *
         * See also http://www.w3.org/TR/media-source/
         * @since 2.4
         */
        get enableMediasource(): boolean;
        set enableMediasource(val: boolean);
        /**
         * Enable or disable the Mock Capture Devices. Those are fake
         * Microphone and Camera devices to be used as MediaStream
         * sources.
         * @since 2.24
         */
        get enable_mock_capture_devices(): boolean;
        set enable_mock_capture_devices(val: boolean);
        /**
         * Enable or disable the Mock Capture Devices. Those are fake
         * Microphone and Camera devices to be used as MediaStream
         * sources.
         * @since 2.24
         */
        get enableMockCaptureDevices(): boolean;
        set enableMockCaptureDevices(val: boolean);
        /**
         * Whether to enable HTML5 offline web application cache support. Offline
         * web application cache allows web applications to run even when
         * the user is not connected to the network.
         *
         * HTML5 offline web application specification is available at
         * http://dev.w3.org/html5/spec/offline.html.
         */
        get enable_offline_web_application_cache(): boolean;
        set enable_offline_web_application_cache(val: boolean);
        /**
         * Whether to enable HTML5 offline web application cache support. Offline
         * web application cache allows web applications to run even when
         * the user is not connected to the network.
         *
         * HTML5 offline web application specification is available at
         * http://dev.w3.org/html5/spec/offline.html.
         */
        get enableOfflineWebApplicationCache(): boolean;
        set enableOfflineWebApplicationCache(val: boolean);
        /**
         * Enable or disable the page cache. Disabling the page cache is
         * generally only useful for special circumstances like low-memory
         * scenarios or special purpose applications like static HTML
         * viewers. This setting only controls the Page Cache, this cache
         * is different than the disk-based or memory-based traditional
         * resource caches, its point is to make going back and forth
         * between pages much faster. For details about the different types
         * of caches and their purposes see:
         * http://webkit.org/blog/427/webkit-page-cache-i-the-basics/
         */
        get enable_page_cache(): boolean;
        set enable_page_cache(val: boolean);
        /**
         * Enable or disable the page cache. Disabling the page cache is
         * generally only useful for special circumstances like low-memory
         * scenarios or special purpose applications like static HTML
         * viewers. This setting only controls the Page Cache, this cache
         * is different than the disk-based or memory-based traditional
         * resource caches, its point is to make going back and forth
         * between pages much faster. For details about the different types
         * of caches and their purposes see:
         * http://webkit.org/blog/427/webkit-page-cache-i-the-basics/
         */
        get enablePageCache(): boolean;
        set enablePageCache(val: boolean);
        /**
         * Determines whether or not plugins on the page are enabled.
         * @deprecated since 2.32
         */
        get enable_plugins(): boolean;
        set enable_plugins(val: boolean);
        /**
         * Determines whether or not plugins on the page are enabled.
         * @deprecated since 2.32
         */
        get enablePlugins(): boolean;
        set enablePlugins(val: boolean);
        /**
         * Determines whether or not private browsing is enabled. Private browsing
         * will disable history, cache and form auto-fill for any pages visited.
         * @deprecated since 2.16.: Use {@link WebKit2.WebView.is_ephemeral} or {@link WebKit2.WebsiteDataManager.is_ephemeral} instead.
         */
        get enable_private_browsing(): boolean;
        set enable_private_browsing(val: boolean);
        /**
         * Determines whether or not private browsing is enabled. Private browsing
         * will disable history, cache and form auto-fill for any pages visited.
         * @deprecated since 2.16.: Use {@link WebKit2.WebView.is_ephemeral} or {@link WebKit2.WebsiteDataManager.is_ephemeral} instead.
         */
        get enablePrivateBrowsing(): boolean;
        set enablePrivateBrowsing(val: boolean);
        /**
         * Determines whether or not text areas can be resized.
         */
        get enable_resizable_text_areas(): boolean;
        set enable_resizable_text_areas(val: boolean);
        /**
         * Determines whether or not text areas can be resized.
         */
        get enableResizableTextAreas(): boolean;
        set enableResizableTextAreas(val: boolean);
        /**
         * Whether to turn on site-specific quirks. Turning this on will
         * tell WebKit to use some site-specific workarounds for
         * better web compatibility. For example, older versions of
         * MediaWiki will incorrectly send to WebKit a CSS file with KHTML
         * workarounds. By turning on site-specific quirks, WebKit will
         * special-case this and other cases to make some specific sites work.
         */
        get enable_site_specific_quirks(): boolean;
        set enable_site_specific_quirks(val: boolean);
        /**
         * Whether to turn on site-specific quirks. Turning this on will
         * tell WebKit to use some site-specific workarounds for
         * better web compatibility. For example, older versions of
         * MediaWiki will incorrectly send to WebKit a CSS file with KHTML
         * workarounds. By turning on site-specific quirks, WebKit will
         * special-case this and other cases to make some specific sites work.
         */
        get enableSiteSpecificQuirks(): boolean;
        set enableSiteSpecificQuirks(val: boolean);
        /**
         * Enable or disable smooth scrolling.
         */
        get enable_smooth_scrolling(): boolean;
        set enable_smooth_scrolling(val: boolean);
        /**
         * Enable or disable smooth scrolling.
         */
        get enableSmoothScrolling(): boolean;
        set enableSmoothScrolling(val: boolean);
        /**
         * Whether to enable Spatial Navigation. This feature consists in the ability
         * to navigate between focusable elements in a Web page, such as hyperlinks
         * and form controls, by using Left, Right, Up and Down arrow keys.
         * For example, if an user presses the Right key, heuristics determine whether
         * there is an element they might be trying to reach towards the right, and if
         * there are multiple elements, which element they probably wants.
         * @since 2.4
         */
        get enable_spatial_navigation(): boolean;
        set enable_spatial_navigation(val: boolean);
        /**
         * Whether to enable Spatial Navigation. This feature consists in the ability
         * to navigate between focusable elements in a Web page, such as hyperlinks
         * and form controls, by using Left, Right, Up and Down arrow keys.
         * For example, if an user presses the Right key, heuristics determine whether
         * there is an element they might be trying to reach towards the right, and if
         * there are multiple elements, which element they probably wants.
         * @since 2.4
         */
        get enableSpatialNavigation(): boolean;
        set enableSpatialNavigation(val: boolean);
        /**
         * Determines whether the tab key cycles through the elements on the page.
         * When this setting is enabled, users will be able to focus the next element
         * in the page by pressing the tab key. If the selected element is editable,
         * then pressing tab key will insert the tab character.
         */
        get enable_tabs_to_links(): boolean;
        set enable_tabs_to_links(val: boolean);
        /**
         * Determines whether the tab key cycles through the elements on the page.
         * When this setting is enabled, users will be able to focus the next element
         * in the page by pressing the tab key. If the selected element is editable,
         * then pressing tab key will insert the tab character.
         */
        get enableTabsToLinks(): boolean;
        set enableTabsToLinks(val: boolean);
        /**
         * Enable or disable support for WebAudio on pages. WebAudio is an
         * API for processing and synthesizing audio in web applications
         *
         * See also https://webaudio.github.io/web-audio-api
         */
        get enable_webaudio(): boolean;
        set enable_webaudio(val: boolean);
        /**
         * Enable or disable support for WebAudio on pages. WebAudio is an
         * API for processing and synthesizing audio in web applications
         *
         * See also https://webaudio.github.io/web-audio-api
         */
        get enableWebaudio(): boolean;
        set enableWebaudio(val: boolean);
        /**
         * Enable or disable support for WebGL on pages. WebGL enables web
         * content to use an API based on OpenGL ES 2.0.
         */
        get enable_webgl(): boolean;
        set enable_webgl(val: boolean);
        /**
         * Enable or disable support for WebGL on pages. WebGL enables web
         * content to use an API based on OpenGL ES 2.0.
         */
        get enableWebgl(): boolean;
        set enableWebgl(val: boolean);
        /**
         * Enable WebRTC support for loaded pages.
         *
         * Enabling this setting implies that {@link Settings.enable_media_stream}
         * will be enabled as well.
         *
         * See also https://www.w3.org/TR/webrtc/
         * @since 2.38
         */
        get enable_webrtc(): boolean;
        set enable_webrtc(val: boolean);
        /**
         * Enable WebRTC support for loaded pages.
         *
         * Enabling this setting implies that {@link Settings.enable_media_stream}
         * will be enabled as well.
         *
         * See also https://www.w3.org/TR/webrtc/
         * @since 2.38
         */
        get enableWebrtc(): boolean;
        set enableWebrtc(val: boolean);
        /**
         * Enable or disable writing console messages to stdout. These are messages
         * sent to the console with console.log and related methods.
         * @since 2.2
         */
        get enable_write_console_messages_to_stdout(): boolean;
        set enable_write_console_messages_to_stdout(val: boolean);
        /**
         * Enable or disable writing console messages to stdout. These are messages
         * sent to the console with console.log and related methods.
         * @since 2.2
         */
        get enableWriteConsoleMessagesToStdout(): boolean;
        set enableWriteConsoleMessagesToStdout(val: boolean);
        /**
         * Whether to enable the XSS auditor. This feature filters some kinds of
         * reflective XSS attacks on vulnerable web sites.
         * @deprecated since 2.38
         */
        get enable_xss_auditor(): boolean;
        set enable_xss_auditor(val: boolean);
        /**
         * Whether to enable the XSS auditor. This feature filters some kinds of
         * reflective XSS attacks on vulnerable web sites.
         * @deprecated since 2.38
         */
        get enableXssAuditor(): boolean;
        set enableXssAuditor(val: boolean);
        /**
         * The font family used as the default for content using a fantasy font.
         */
        get fantasy_font_family(): string;
        set fantasy_font_family(val: string);
        /**
         * The font family used as the default for content using a fantasy font.
         */
        get fantasyFontFamily(): string;
        set fantasyFontFamily(val: string);
        /**
         * The {@link WebKit2.HardwareAccelerationPolicy} to decide how to enable and disable
         * hardware acceleration. The default value {@link WebKit2.HardwareAccelerationPolicy.ON_DEMAND}
         * enables the hardware acceleration when the web contents request it.
         * It's possible to enforce hardware acceleration to be always enabled
         * by using {@link WebKit2.HardwareAccelerationPolicy.ALWAYS}. And it's also possible to disable it
         * completely using {@link WebKit2.HardwareAccelerationPolicy.NEVER}. Note that disabling hardware
         * acceleration might cause some websites to not render correctly or consume more CPU.
         *
         * Note that changing this setting might not be possible if hardware acceleration is not
         * supported by the hardware or the system. In that case you can get the value to know the
         * actual policy being used, but changing the setting will not have any effect.
         * @since 2.16
         */
        get hardware_acceleration_policy(): HardwareAccelerationPolicy;
        set hardware_acceleration_policy(val: HardwareAccelerationPolicy);
        /**
         * The {@link WebKit2.HardwareAccelerationPolicy} to decide how to enable and disable
         * hardware acceleration. The default value {@link WebKit2.HardwareAccelerationPolicy.ON_DEMAND}
         * enables the hardware acceleration when the web contents request it.
         * It's possible to enforce hardware acceleration to be always enabled
         * by using {@link WebKit2.HardwareAccelerationPolicy.ALWAYS}. And it's also possible to disable it
         * completely using {@link WebKit2.HardwareAccelerationPolicy.NEVER}. Note that disabling hardware
         * acceleration might cause some websites to not render correctly or consume more CPU.
         *
         * Note that changing this setting might not be possible if hardware acceleration is not
         * supported by the hardware or the system. In that case you can get the value to know the
         * actual policy being used, but changing the setting will not have any effect.
         * @since 2.16
         */
        get hardwareAccelerationPolicy(): HardwareAccelerationPolicy;
        set hardwareAccelerationPolicy(val: HardwareAccelerationPolicy);
        /**
         * Whether JavaScript can access the clipboard. The default value is `false`. If
         * set to `true`, document.execCommand() allows cut, copy and paste commands.
         */
        get javascript_can_access_clipboard(): boolean;
        set javascript_can_access_clipboard(val: boolean);
        /**
         * Whether JavaScript can access the clipboard. The default value is `false`. If
         * set to `true`, document.execCommand() allows cut, copy and paste commands.
         */
        get javascriptCanAccessClipboard(): boolean;
        set javascriptCanAccessClipboard(val: boolean);
        /**
         * Whether JavaScript can open popup windows automatically without user
         * intervention.
         */
        get javascript_can_open_windows_automatically(): boolean;
        set javascript_can_open_windows_automatically(val: boolean);
        /**
         * Whether JavaScript can open popup windows automatically without user
         * intervention.
         */
        get javascriptCanOpenWindowsAutomatically(): boolean;
        set javascriptCanOpenWindowsAutomatically(val: boolean);
        /**
         * Determines whether a site can load favicons irrespective
         * of the value of {@link WebKit2.Settings.auto_load_images}.
         */
        get load_icons_ignoring_image_load_setting(): boolean;
        set load_icons_ignoring_image_load_setting(val: boolean);
        /**
         * Determines whether a site can load favicons irrespective
         * of the value of {@link WebKit2.Settings.auto_load_images}.
         */
        get loadIconsIgnoringImageLoadSetting(): boolean;
        set loadIconsIgnoringImageLoadSetting(val: boolean);
        /**
         * List of media content types requiring hardware support, split by semicolons (:).
         * For example: 'video/webm; codecs="vp*":video/mp4; codecs="avc*":video/&ast; codecs="av1*"'.
         * @since 2.30
         */
        get media_content_types_requiring_hardware_support(): string;
        set media_content_types_requiring_hardware_support(val: string);
        /**
         * List of media content types requiring hardware support, split by semicolons (:).
         * For example: 'video/webm; codecs="vp*":video/mp4; codecs="avc*":video/&ast; codecs="av1*"'.
         * @since 2.30
         */
        get mediaContentTypesRequiringHardwareSupport(): string;
        set mediaContentTypesRequiringHardwareSupport(val: string);
        /**
         * Whether media playback is full-screen only or inline playback is allowed.
         * This is `true` by default, so media playback can be inline. Setting it to
         * `false` allows specifying that media playback should be always fullscreen.
         */
        get media_playback_allows_inline(): boolean;
        set media_playback_allows_inline(val: boolean);
        /**
         * Whether media playback is full-screen only or inline playback is allowed.
         * This is `true` by default, so media playback can be inline. Setting it to
         * `false` allows specifying that media playback should be always fullscreen.
         */
        get mediaPlaybackAllowsInline(): boolean;
        set mediaPlaybackAllowsInline(val: boolean);
        /**
         * Whether a user gesture (such as clicking the play button)
         * would be required to start media playback or load media. This is off
         * by default, so media playback could start automatically.
         * Setting it on requires a gesture by the user to start playback, or to
         * load the media.
         */
        get media_playback_requires_user_gesture(): boolean;
        set media_playback_requires_user_gesture(val: boolean);
        /**
         * Whether a user gesture (such as clicking the play button)
         * would be required to start media playback or load media. This is off
         * by default, so media playback could start automatically.
         * Setting it on requires a gesture by the user to start playback, or to
         * load the media.
         */
        get mediaPlaybackRequiresUserGesture(): boolean;
        set mediaPlaybackRequiresUserGesture(val: boolean);
        /**
         * The minimum font size in pixels used to display text. This setting
         * controls the absolute smallest size. Values other than 0 can
         * potentially break page layouts.
         */
        get minimum_font_size(): number;
        set minimum_font_size(val: number);
        /**
         * The minimum font size in pixels used to display text. This setting
         * controls the absolute smallest size. Values other than 0 can
         * potentially break page layouts.
         */
        get minimumFontSize(): number;
        set minimumFontSize(val: number);
        /**
         * The font family used as the default for content using a monospace font.
         */
        get monospace_font_family(): string;
        set monospace_font_family(val: string);
        /**
         * The font family used as the default for content using a monospace font.
         */
        get monospaceFontFamily(): string;
        set monospaceFontFamily(val: string);
        /**
         * The font family used as the default for content using a pictograph font.
         */
        get pictograph_font_family(): string;
        set pictograph_font_family(val: string);
        /**
         * The font family used as the default for content using a pictograph font.
         */
        get pictographFontFamily(): string;
        set pictographFontFamily(val: string);
        /**
         * Whether background images should be drawn during printing.
         */
        get print_backgrounds(): boolean;
        set print_backgrounds(val: boolean);
        /**
         * Whether background images should be drawn during printing.
         */
        get printBackgrounds(): boolean;
        set printBackgrounds(val: boolean);
        /**
         * The font family used as the default for content using a sans-serif font.
         */
        get sans_serif_font_family(): string;
        set sans_serif_font_family(val: string);
        /**
         * The font family used as the default for content using a sans-serif font.
         */
        get sansSerifFontFamily(): string;
        set sansSerifFontFamily(val: string);
        /**
         * The font family used as the default for content using a serif font.
         */
        get serif_font_family(): string;
        set serif_font_family(val: string);
        /**
         * The font family used as the default for content using a serif font.
         */
        get serifFontFamily(): string;
        set serifFontFamily(val: string);
        /**
         * The user-agent string used by WebKit. Unusual user-agent strings may cause web
         * content to render incorrectly or fail to run, as many web pages are written to
         * parse the user-agent strings of only the most popular browsers. Therefore, it's
         * typically better to not completely override the standard user-agent, but to use
         * `webkit_settings_set_user_agent_with_application_details()` instead.
         *
         * If this property is set to the empty string or `null`, it will revert to the standard
         * user-agent.
         */
        get user_agent(): string;
        set user_agent(val: string);
        /**
         * The user-agent string used by WebKit. Unusual user-agent strings may cause web
         * content to render incorrectly or fail to run, as many web pages are written to
         * parse the user-agent strings of only the most popular browsers. Therefore, it's
         * typically better to not completely override the standard user-agent, but to use
         * `webkit_settings_set_user_agent_with_application_details()` instead.
         *
         * If this property is set to the empty string or `null`, it will revert to the standard
         * user-agent.
         */
        get userAgent(): string;
        set userAgent(val: string);
        /**
         * Whether {@link WebKit2.WebView.zoom_level} affects only the
         * text of the page or all the contents. Other contents containing text
         * like form controls will be also affected by zoom factor when
         * this property is enabled.
         */
        get zoom_text_only(): boolean;
        set zoom_text_only(val: boolean);
        /**
         * Whether {@link WebKit2.WebView.zoom_level} affects only the
         * text of the page or all the contents. Other contents containing text
         * like form controls will be also affected by zoom factor when
         * this property is enabled.
         */
        get zoomTextOnly(): boolean;
        set zoomTextOnly(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Settings.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Settings.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Settings;

        // Signals

        /** @signal */
        connect<K extends keyof Settings.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Settings.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Settings.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Settings.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Settings.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Settings.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Convert `points` to the equivalent value in pixels.
         *
         * Convert `points` to the equivalent value in pixels, based on the current
         * screen DPI. Applications can use this function to convert font size values
         * in points to font size values in pixels when setting the font size properties
         * of {@link WebKit2.Settings}.
         * @param points the font size in points to convert to pixels
         */
        static font_size_to_pixels(points: number): number;
        /**
         * Convert `pixels` to the equivalent value in points.
         *
         * Convert `pixels` to the equivalent value in points, based on the current
         * screen DPI. Applications can use this function to convert font size values
         * in pixels to font size values in points when getting the font size properties
         * of {@link WebKit2.Settings}.
         * @param pixels the font size in pixels to convert to points
         */
        static font_size_to_points(pixels: number): number;

        // Methods

        /**
         * Get the {@link WebKit2.Settings.allow_file_access_from_file_urls} property.
         * @returns `true` If file access from file URLs is allowed or `false` otherwise.
         */
        get_allow_file_access_from_file_urls(): boolean;
        /**
         * Get the {@link WebKit2.Settings.allow_modal_dialogs} property.
         * @returns `true` if it's allowed to create and run modal dialogs or `false` otherwise.
         */
        get_allow_modal_dialogs(): boolean;
        /**
         * Get the {@link WebKit2.Settings.allow_top_navigation_to_data_urls} property.
         * @returns `true` If navigation to data URLs from the top frame is allowed or `false`\ otherwise.
         */
        get_allow_top_navigation_to_data_urls(): boolean;
        /**
         * Get the {@link WebKit2.Settings.allow_universal_access_from_file_urls} property.
         * @returns `true` If universal access from file URLs is allowed or `false` otherwise.
         */
        get_allow_universal_access_from_file_urls(): boolean;
        /**
         * Get the {@link WebKit2.Settings.auto_load_images} property.
         * @returns `true` If auto loading of images is enabled or `false` otherwise.
         */
        get_auto_load_images(): boolean;
        /**
         * Gets the {@link WebKit2.Settings.cursive_font_family} property.
         * @returns The default font family used to display content marked with cursive font.
         */
        get_cursive_font_family(): string;
        /**
         * Gets the {@link WebKit2.Settings.default_charset} property.
         * @returns Default charset.
         */
        get_default_charset(): string;
        /**
         * Gets the {@link WebKit2.Settings.default_font_family} property.
         * @returns The default font family used to display content that does not specify a font.
         */
        get_default_font_family(): string;
        /**
         * Gets the {@link WebKit2.Settings.default_font_size} property.
         * @returns The default font size, in pixels.
         */
        get_default_font_size(): number;
        /**
         * Gets the {@link WebKit2.Settings.default_monospace_font_size} property.
         * @returns Default monospace font size, in pixels.
         */
        get_default_monospace_font_size(): number;
        /**
         * Get the {@link WebKit2.Settings.draw_compositing_indicators} property.
         * @returns `true` If compositing borders are drawn or `false` otherwise.
         */
        get_draw_compositing_indicators(): boolean;
        /**
         * Get the {@link WebKit2.Settings.enable_accelerated_2d_canvas} property.
         * @returns `true` if accelerated 2D canvas is enabled or `false` otherwise.
         */
        get_enable_accelerated_2d_canvas(): boolean;
        /**
         * Get the {@link WebKit2.Settings.enable_back_forward_navigation_gestures} property.
         * @returns `true` if horizontal swipe gesture will trigger back-forward navigaiton or `false` otherwise.
         */
        get_enable_back_forward_navigation_gestures(): boolean;
        /**
         * Get the {@link WebKit2.Settings.enable_caret_browsing} property.
         * @returns `true` If caret browsing is enabled or `false` otherwise.
         */
        get_enable_caret_browsing(): boolean;
        /**
         * Get the {@link WebKit2.Settings.enable_developer_extras} property.
         * @returns `true` If developer extras is enabled or `false` otherwise.
         */
        get_enable_developer_extras(): boolean;
        /**
         * Get the {@link WebKit2.Settings.enable_dns_prefetching} property.
         * @returns `true` If DNS prefetching is enabled or `false` otherwise.
         */
        get_enable_dns_prefetching(): boolean;
        /**
         * Get the {@link WebKit2.Settings.enable_encrypted_media} property.
         * @returns `true` if EncryptedMedia support is enabled or `false` otherwise.
         */
        get_enable_encrypted_media(): boolean;
        /**
         * Get the {@link WebKit2.Settings.enable_frame_flattening} property.
         * @returns `true` If frame flattening is enabled or `false` otherwise.
         */
        get_enable_frame_flattening(): boolean;
        /**
         * Get the {@link WebKit2.Settings.enable_fullscreen} property.
         * @returns `true` If fullscreen support is enabled or `false` otherwise.
         */
        get_enable_fullscreen(): boolean;
        /**
         * Get the {@link WebKit2.Settings.enable_html5_database} property.
         * @returns `true` if IndexedDB support is enabled or `false` otherwise.
         */
        get_enable_html5_database(): boolean;
        /**
         * Get the {@link WebKit2.Settings.enable_html5_local_storage} property.
         * @returns `true` If HTML5 local storage support is enabled or `false` otherwise.
         */
        get_enable_html5_local_storage(): boolean;
        /**
         * Get the {@link WebKit2.Settings.enable_hyperlink_auditing} property.
         * @returns `true` If hyper link auditing is enabled or `false` otherwise.
         */
        get_enable_hyperlink_auditing(): boolean;
        /**
         * Get the {@link WebKit2.Settings.enable_java} property.
         * @returns `false` always.
         */
        get_enable_java(): boolean;
        /**
         * Get the {@link WebKit2.Settings.enable_javascript} property.
         * @returns `true` If JavaScript is enabled or `false` otherwise.
         */
        get_enable_javascript(): boolean;
        /**
         * Get the {@link WebKit2.Settings.enable_javascript_markup} property.
         * @returns `true` if JavaScript markup is enabled or `false` otherwise.
         */
        get_enable_javascript_markup(): boolean;
        /**
         * Get the {@link WebKit2.Settings.enable_media} property.
         * @returns `true` if media support is enabled or `false` otherwise.
         */
        get_enable_media(): boolean;
        /**
         * Get the {@link WebKit2.Settings.enable_media_capabilities} property.
         * @returns `true` if MediaCapabilities support is enabled or `false` otherwise.
         */
        get_enable_media_capabilities(): boolean;
        /**
         * Get the {@link WebKit2.Settings.enable_media_stream} property.
         * @returns `true` If mediastream support is enabled or `false` otherwise.
         */
        get_enable_media_stream(): boolean;
        /**
         * Get the {@link WebKit2.Settings.enable_mediasource} property.
         * @returns `true` If MediaSource support is enabled or `false` otherwise.
         */
        get_enable_mediasource(): boolean;
        /**
         * Get the {@link WebKit2.Settings.enable_mock_capture_devices} property.
         * @returns `true` If mock capture devices is enabled or `false` otherwise.
         */
        get_enable_mock_capture_devices(): boolean;
        /**
         * Get the {@link WebKit2.Settings.enable_offline_web_application_cache} property.
         * @returns `true` If HTML5 offline web application cache support is enabled or `false` otherwise.
         */
        get_enable_offline_web_application_cache(): boolean;
        /**
         * Get the {@link WebKit2.Settings.enable_page_cache} property.
         * @returns `true` if page cache enabled or `false` otherwise.
         */
        get_enable_page_cache(): boolean;
        /**
         * Get the {@link WebKit2.Settings.enable_plugins} property.
         * @returns `true` If plugins are enabled or `false` otherwise.
         */
        get_enable_plugins(): boolean;
        /**
         * Get the {@link WebKit2.Settings.enable_private_browsing} property.
         * @returns `true` If private browsing is enabled or `false` otherwise.
         */
        get_enable_private_browsing(): boolean;
        /**
         * Get the {@link WebKit2.Settings.enable_resizable_text_areas} property.
         * @returns `true` If text areas can be resized or `false` otherwise.
         */
        get_enable_resizable_text_areas(): boolean;
        /**
         * Get the {@link WebKit2.Settings.enable_site_specific_quirks} property.
         * @returns `true` if site specific quirks are enabled or `false` otherwise.
         */
        get_enable_site_specific_quirks(): boolean;
        /**
         * Get the {@link WebKit2.Settings.enable_smooth_scrolling} property.
         * @returns `true` if smooth scrolling is enabled or `false` otherwise.
         */
        get_enable_smooth_scrolling(): boolean;
        /**
         * Get the {@link WebKit2.Settings.enable_spatial_navigation} property.
         * @returns `true` If HTML5 spatial navigation support is enabled or `false` otherwise.
         */
        get_enable_spatial_navigation(): boolean;
        /**
         * Get the {@link WebKit2.Settings.enable_tabs_to_links} property.
         * @returns `true` If tabs to link is enabled or `false` otherwise.
         */
        get_enable_tabs_to_links(): boolean;
        /**
         * Get the {@link WebKit2.Settings.enable_webaudio} property.
         * @returns `true` If webaudio support is enabled or `false` otherwise.
         */
        get_enable_webaudio(): boolean;
        /**
         * Get the {@link WebKit2.Settings.enable_webgl} property.
         * @returns `true` If WebGL support is enabled or `false` otherwise.
         */
        get_enable_webgl(): boolean;
        /**
         * Get the {@link Settings.enable_webrtc} property.
         * @returns `true` If WebRTC support is enabled or `false` otherwise.
         */
        get_enable_webrtc(): boolean;
        /**
         * Get the {@link WebKit2.Settings.enable_write_console_messages_to_stdout} property.
         * @returns `true` if writing console messages to stdout is enabled or `false` otherwise.
         */
        get_enable_write_console_messages_to_stdout(): boolean;
        /**
         * The XSS auditor has been removed. This function returns `false`.
         * @returns `false`
         */
        get_enable_xss_auditor(): boolean;
        /**
         * Gets the {@link WebKit2.Settings.fantasy_font_family} property.
         * @returns The default font family used to display content marked with fantasy font.
         */
        get_fantasy_font_family(): string;
        /**
         * Get the {@link WebKit2.Settings.hardware_acceleration_policy} property.
         * @returns a {@link WebKit2.HardwareAccelerationPolicy}
         */
        get_hardware_acceleration_policy(): HardwareAccelerationPolicy;
        /**
         * Get the {@link WebKit2.Settings.javascript_can_access_clipboard} property.
         * @returns `true` If javascript-can-access-clipboard is enabled or `false` otherwise.
         */
        get_javascript_can_access_clipboard(): boolean;
        /**
         * Get the {@link WebKit2.Settings.javascript_can_open_windows_automatically} property.
         * @returns `true` If JavaScript can open window automatically or `false` otherwise.
         */
        get_javascript_can_open_windows_automatically(): boolean;
        /**
         * Get the {@link WebKit2.Settings.load_icons_ignoring_image_load_setting} property.
         * @returns `true` If site icon can be loaded irrespective of image loading preference or `false` otherwise.
         */
        get_load_icons_ignoring_image_load_setting(): boolean;
        /**
         * Gets the {@link WebKit2.Settings.media_content_types_requiring_hardware_support} property.
         * @returns Media content types requiring hardware support, or `null`.
         */
        get_media_content_types_requiring_hardware_support(): string;
        /**
         * Get the {@link WebKit2.Settings.media_playback_allows_inline} property.
         * @returns `true` If inline playback is allowed for media    or `false` if only fullscreen playback is allowed.
         */
        get_media_playback_allows_inline(): boolean;
        /**
         * Get the {@link WebKit2.Settings.media_playback_requires_user_gesture} property.
         * @returns `true` If an user gesture is needed to play or load media    or `false` if no user gesture is needed.
         */
        get_media_playback_requires_user_gesture(): boolean;
        /**
         * Gets the {@link WebKit2.Settings.minimum_font_size} property.
         * @returns Minimum font size, in pixels.
         */
        get_minimum_font_size(): number;
        /**
         * Gets the {@link WebKit2.Settings.monospace_font_family} property.
         * @returns Default font family used to display content marked with monospace font.
         */
        get_monospace_font_family(): string;
        /**
         * Gets the {@link WebKit2.Settings.pictograph_font_family} property.
         * @returns The default font family used to display content marked with pictograph font.
         */
        get_pictograph_font_family(): string;
        /**
         * Get the {@link WebKit2.Settings.print_backgrounds} property.
         * @returns `true` If background images should be printed or `false` otherwise.
         */
        get_print_backgrounds(): boolean;
        /**
         * Gets the {@link WebKit2.Settings.sans_serif_font_family} property.
         * @returns The default font family used to display content marked with sans-serif font.
         */
        get_sans_serif_font_family(): string;
        /**
         * Gets the {@link WebKit2.Settings.serif_font_family} property.
         * @returns The default font family used to display content marked with serif font.
         */
        get_serif_font_family(): string;
        /**
         * Get the {@link WebKit2.Settings.user_agent} property.
         * @returns The current value of the user-agent property.
         */
        get_user_agent(): string;
        /**
         * Get the {@link WebKit2.Settings.zoom_text_only} property.
         * @returns `true` If zoom level of the view should only affect the text    or `false` if all view contents should be scaled.
         */
        get_zoom_text_only(): boolean;
        /**
         * Set the {@link WebKit2.Settings.allow_file_access_from_file_urls} property.
         * @param allowed Value to be set
         */
        set_allow_file_access_from_file_urls(allowed: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.allow_modal_dialogs} property.
         * @param allowed Value to be set
         */
        set_allow_modal_dialogs(allowed: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.allow_top_navigation_to_data_urls} property.
         * @param allowed Value to be set
         */
        set_allow_top_navigation_to_data_urls(allowed: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.allow_universal_access_from_file_urls} property.
         * @param allowed Value to be set
         */
        set_allow_universal_access_from_file_urls(allowed: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.auto_load_images} property.
         * @param enabled Value to be set
         */
        set_auto_load_images(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.cursive_font_family} property.
         * @param cursive_font_family the new default cursive font family
         */
        set_cursive_font_family(cursive_font_family: string): void;
        /**
         * Set the {@link WebKit2.Settings.default_charset} property.
         * @param default_charset default charset to be set
         */
        set_default_charset(default_charset: string): void;
        /**
         * Set the {@link WebKit2.Settings.default_font_family} property.
         * @param default_font_family the new default font family
         */
        set_default_font_family(default_font_family: string): void;
        /**
         * Set the {@link WebKit2.Settings.default_font_size} property.
         * @param font_size default font size to be set in pixels
         */
        set_default_font_size(font_size: number): void;
        /**
         * Set the {@link WebKit2.Settings.default_monospace_font_size} property.
         * @param font_size default monospace font size to be set in pixels
         */
        set_default_monospace_font_size(font_size: number): void;
        /**
         * Set the {@link WebKit2.Settings.draw_compositing_indicators} property.
         * @param enabled Value to be set
         */
        set_draw_compositing_indicators(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.enable_accelerated_2d_canvas} property.
         * @param enabled Value to be set
         */
        set_enable_accelerated_2d_canvas(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.enable_back_forward_navigation_gestures} property.
         * @param enabled value to be set
         */
        set_enable_back_forward_navigation_gestures(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.enable_caret_browsing} property.
         * @param enabled Value to be set
         */
        set_enable_caret_browsing(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.enable_developer_extras} property.
         * @param enabled Value to be set
         */
        set_enable_developer_extras(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.enable_dns_prefetching} property.
         * @param enabled Value to be set
         */
        set_enable_dns_prefetching(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.enable_encrypted_media} property.
         * @param enabled Value to be set
         */
        set_enable_encrypted_media(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.enable_frame_flattening} property.
         * @param enabled Value to be set
         */
        set_enable_frame_flattening(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.enable_fullscreen} property.
         * @param enabled Value to be set
         */
        set_enable_fullscreen(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.enable_html5_database} property.
         * @param enabled Value to be set
         */
        set_enable_html5_database(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.enable_html5_local_storage} property.
         * @param enabled Value to be set
         */
        set_enable_html5_local_storage(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.enable_hyperlink_auditing} property.
         * @param enabled Value to be set
         */
        set_enable_hyperlink_auditing(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.enable_java} property.
         *
         * Deprecated function that does nothing.
         * @param enabled Value to be set
         */
        set_enable_java(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.enable_javascript} property.
         * @param enabled Value to be set
         */
        set_enable_javascript(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.enable_javascript_markup} property.
         * @param enabled Value to be set
         */
        set_enable_javascript_markup(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.enable_media} property.
         * @param enabled Value to be set
         */
        set_enable_media(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.enable_media_capabilities} property.
         * @param enabled Value to be set
         */
        set_enable_media_capabilities(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.enable_media_stream} property.
         * @param enabled Value to be set
         */
        set_enable_media_stream(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.enable_mediasource} property.
         * @param enabled Value to be set
         */
        set_enable_mediasource(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.enable_mock_capture_devices} property.
         * @param enabled Value to be set
         */
        set_enable_mock_capture_devices(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.enable_offline_web_application_cache} property.
         * @param enabled Value to be set
         */
        set_enable_offline_web_application_cache(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.enable_page_cache} property.
         * @param enabled Value to be set
         */
        set_enable_page_cache(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.enable_plugins} property.
         * @param enabled Value to be set
         */
        set_enable_plugins(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.enable_private_browsing} property.
         * @param enabled Value to be set
         */
        set_enable_private_browsing(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.enable_resizable_text_areas} property.
         * @param enabled Value to be set
         */
        set_enable_resizable_text_areas(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.enable_site_specific_quirks} property.
         * @param enabled Value to be set
         */
        set_enable_site_specific_quirks(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.enable_smooth_scrolling} property.
         * @param enabled Value to be set
         */
        set_enable_smooth_scrolling(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.enable_spatial_navigation} property.
         * @param enabled Value to be set
         */
        set_enable_spatial_navigation(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.enable_tabs_to_links} property.
         * @param enabled Value to be set
         */
        set_enable_tabs_to_links(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.enable_webaudio} property.
         * @param enabled Value to be set
         */
        set_enable_webaudio(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.enable_webgl} property.
         * @param enabled Value to be set
         */
        set_enable_webgl(enabled: boolean): void;
        /**
         * Set the {@link Settings.enable_webrtc} property.
         *
         * Setting this property to `true` implies the media-stream web-setting will also be enabled.
         * @param enabled Value to be set
         */
        set_enable_webrtc(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.enable_write_console_messages_to_stdout} property.
         * @param enabled Value to be set
         */
        set_enable_write_console_messages_to_stdout(enabled: boolean): void;
        /**
         * The XSS auditor has been removed. This function does nothing.
         * @param enabled Value to be set
         */
        set_enable_xss_auditor(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.fantasy_font_family} property.
         * @param fantasy_font_family the new default fantasy font family
         */
        set_fantasy_font_family(fantasy_font_family: string): void;
        /**
         * Set the {@link WebKit2.Settings.hardware_acceleration_policy} property.
         * @param policy a {@link WebKit2.HardwareAccelerationPolicy}
         */
        set_hardware_acceleration_policy(policy: HardwareAccelerationPolicy | null): void;
        /**
         * Set the {@link WebKit2.Settings.javascript_can_access_clipboard} property.
         * @param enabled Value to be set
         */
        set_javascript_can_access_clipboard(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.javascript_can_open_windows_automatically} property.
         * @param enabled Value to be set
         */
        set_javascript_can_open_windows_automatically(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.load_icons_ignoring_image_load_setting} property.
         * @param enabled Value to be set
         */
        set_load_icons_ignoring_image_load_setting(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.media_content_types_requiring_hardware_support} property.
         * @param content_types list of media content types requiring hardware support split by semicolons (:) or `null` to use the default value.
         */
        set_media_content_types_requiring_hardware_support(content_types?: string | null): void;
        /**
         * Set the {@link WebKit2.Settings.media_playback_allows_inline} property.
         * @param enabled Value to be set
         */
        set_media_playback_allows_inline(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.media_playback_requires_user_gesture} property.
         * @param enabled Value to be set
         */
        set_media_playback_requires_user_gesture(enabled: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.minimum_font_size} property.
         * @param font_size minimum font size to be set in pixels
         */
        set_minimum_font_size(font_size: number): void;
        /**
         * Set the {@link WebKit2.Settings.monospace_font_family} property.
         * @param monospace_font_family the new default monospace font family
         */
        set_monospace_font_family(monospace_font_family: string): void;
        /**
         * Set the {@link WebKit2.Settings.pictograph_font_family} property.
         * @param pictograph_font_family the new default pictograph font family
         */
        set_pictograph_font_family(pictograph_font_family: string): void;
        /**
         * Set the {@link WebKit2.Settings.print_backgrounds} property.
         * @param print_backgrounds Value to be set
         */
        set_print_backgrounds(print_backgrounds: boolean): void;
        /**
         * Set the {@link WebKit2.Settings.sans_serif_font_family} property.
         * @param sans_serif_font_family the new default sans-serif font family
         */
        set_sans_serif_font_family(sans_serif_font_family: string): void;
        /**
         * Set the {@link WebKit2.Settings.serif_font_family} property.
         * @param serif_font_family the new default serif font family
         */
        set_serif_font_family(serif_font_family: string): void;
        /**
         * Set the {@link WebKit2.Settings.user_agent} property.
         * @param user_agent The new custom user agent string or `null` to use the default user agent
         */
        set_user_agent(user_agent?: string | null): void;
        /**
         * Set the {@link WebKit2.Settings.user_agent} property by appending the application details.
         *
         * Set the {@link WebKit2.Settings.user_agent} property by appending the application details to the default user
         * agent. If no application name or version is given, the default user agent used will be used. If only
         * the version is given, the default engine version is used with the given application name.
         * @param application_name The application name used for the user agent or `null` to use the default user agent.
         * @param application_version The application version for the user agent or `null` to user the default version.
         */
        set_user_agent_with_application_details(
            application_name?: string | null,
            application_version?: string | null,
        ): void;
        /**
         * Set the {@link WebKit2.Settings.zoom_text_only} property.
         * @param zoom_text_only Value to be set
         */
        set_zoom_text_only(zoom_text_only: boolean): void;
    }

    namespace URIRequest {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::uri': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            uri: string;
        }
    }

    /**
     * Represents a URI request.
     *
     * A {@link WebKit2.URIRequest} can be created with a URI using the
     * `webkit_uri_request_new()` method, and you can get the URI of an
     * existing request with the `webkit_uri_request_get_uri()` one.
     * @gir-type Class
     */
    class URIRequest extends GObject.Object {
        static $gtype: GObject.GType<URIRequest>;

        // Properties

        /**
         * The URI to which the request will be made.
         */
        get uri(): string;
        set uri(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: URIRequest.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<URIRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](uri: string): URIRequest;

        // Signals

        /** @signal */
        connect<K extends keyof URIRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, URIRequest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof URIRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, URIRequest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof URIRequest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<URIRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the HTTP headers of a {@link WebKit2.URIRequest} as a {@link Soup.MessageHeaders}.
         * @returns a {@link Soup.MessageHeaders} with the HTTP headers of `request`    or `null` if `request` is not an HTTP request.
         */
        get_http_headers(): Soup.MessageHeaders;
        /**
         * Get the HTTP method of the {@link WebKit2.URIRequest}.
         * @returns the HTTP method of the {@link WebKit2.URIRequest} or `null` if `request` is not    an HTTP request.
         */
        get_http_method(): string;
        /**
         * Obtains the request URI.
         * @returns request URI, as a string.
         */
        get_uri(): string;
        /**
         * Set the URI of `request`
         * @param uri an URI
         */
        set_uri(uri: string): void;
    }

    namespace URIResponse {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::content-length': (pspec: GObject.ParamSpec) => void;
            'notify::http-headers': (pspec: GObject.ParamSpec) => void;
            'notify::mime-type': (pspec: GObject.ParamSpec) => void;
            'notify::status-code': (pspec: GObject.ParamSpec) => void;
            'notify::suggested-filename': (pspec: GObject.ParamSpec) => void;
            'notify::uri': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            content_length: number;
            contentLength: number;
            http_headers: Soup.MessageHeaders;
            httpHeaders: Soup.MessageHeaders;
            mime_type: string;
            mimeType: string;
            status_code: number;
            statusCode: number;
            suggested_filename: string;
            suggestedFilename: string;
            uri: string;
        }
    }

    /**
     * Represents an URI response.
     *
     * A {@link WebKit2.URIResponse} contains information such as the URI, the
     * status code, the content length, the mime type, the HTTP status or
     * the suggested filename.
     * @gir-type Class
     */
    class URIResponse extends GObject.Object {
        static $gtype: GObject.GType<URIResponse>;

        // Properties

        /**
         * The expected content length of the response.
         * @read-only
         */
        get content_length(): number;
        /**
         * The expected content length of the response.
         * @read-only
         */
        get contentLength(): number;
        /**
         * The HTTP headers of the response, or `null` if the response is not an HTTP response.
         * @since 2.6
         * @read-only
         */
        get http_headers(): Soup.MessageHeaders;
        /**
         * The HTTP headers of the response, or `null` if the response is not an HTTP response.
         * @since 2.6
         * @read-only
         */
        get httpHeaders(): Soup.MessageHeaders;
        /**
         * The MIME type of the response.
         * @read-only
         */
        get mime_type(): string;
        /**
         * The MIME type of the response.
         * @read-only
         */
        get mimeType(): string;
        /**
         * The status code of the response as returned by the server.
         * @read-only
         */
        get status_code(): number;
        /**
         * The status code of the response as returned by the server.
         * @read-only
         */
        get statusCode(): number;
        /**
         * The suggested filename for the URI response.
         * @read-only
         */
        get suggested_filename(): string;
        /**
         * The suggested filename for the URI response.
         * @read-only
         */
        get suggestedFilename(): string;
        /**
         * The URI for which the response was made.
         * @read-only
         */
        get uri(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: URIResponse.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<URIResponse.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof URIResponse.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, URIResponse.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof URIResponse.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, URIResponse.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof URIResponse.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<URIResponse.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the expected content length of the {@link WebKit2.URIResponse}.
         *
         * It can be 0 if the server provided an incorrect or missing Content-Length.
         * @returns the expected content length of `response`.
         */
        get_content_length(): number;
        /**
         * Get the HTTP headers of a {@link WebKit2.URIResponse} as a {@link Soup.MessageHeaders}.
         * @returns a {@link Soup.MessageHeaders} with the HTTP headers of `response`    or `null` if `response` is not an HTTP response.
         */
        get_http_headers(): Soup.MessageHeaders;
        /**
         * Gets the MIME type of the response.
         * @returns MIME type, as a string.
         */
        get_mime_type(): string;
        /**
         * Get the status code of the {@link WebKit2.URIResponse}.
         *
         * Get the status code of the {@link WebKit2.URIResponse} as returned by
         * the server. It will normally be a `SoupKnownStatusCode`, for
         * example {@link Soup.Status.OK}, though the server can respond with any
         * unsigned integer.
         * @returns the status code of `response`
         */
        get_status_code(): number;
        /**
         * Get the suggested filename for `response`.
         *
         * Get the suggested filename for `response`, as specified by
         * the 'Content-Disposition' HTTP header, or `null` if it's not
         * present.
         * @returns the suggested filename or `null` if    the 'Content-Disposition' HTTP header is not present.
         */
        get_suggested_filename(): string;
        /**
         * Gets the URI which resulted in the response.
         * @returns response URI, as a string.
         */
        get_uri(): string;
    }

    namespace URISchemeRequest {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Represents a URI scheme request.
     *
     * If you register a particular URI scheme in a {@link WebKit2.WebContext},
     * using `webkit_web_context_register_uri_scheme()`, you have to provide
     * a {@link WebKit2.URISchemeRequestCallback}. After that, when a URI request
     * is made with that particular scheme, your callback will be
     * called. There you will be able to access properties such as the
     * scheme, the URI and path, and the {@link WebKit2.WebView} that initiated the
     * request, and also finish the request with
     * `webkit_uri_scheme_request_finish()`.
     * @gir-type Class
     */
    class URISchemeRequest extends GObject.Object {
        static $gtype: GObject.GType<URISchemeRequest>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: URISchemeRequest.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<URISchemeRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof URISchemeRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, URISchemeRequest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof URISchemeRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, URISchemeRequest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof URISchemeRequest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<URISchemeRequest.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Finish a {@link WebKit2.URISchemeRequest} by setting the contents of the request and its mime type.
         * @param stream a {@link Gio.InputStream} to read the contents of the request
         * @param stream_length the length of the stream or -1 if not known
         * @param content_type the content type of the stream or `null` if not known
         */
        finish(stream: Gio.InputStream, stream_length: number, content_type?: string | null): void;
        /**
         * Finish a {@link WebKit2.URISchemeRequest} with a {@link GLib.Error}.
         * @param error a {@link GLib.Error} that will be passed to the {@link WebKit2.WebView}
         */
        finish_error(error: GLib.Error): void;
        /**
         * Finish a {@link WebKit2.URISchemeRequest} by returning a {@link WebKit2.URISchemeResponse}
         * @param response a {@link WebKit2.URISchemeResponse}
         */
        finish_with_response(response: URISchemeResponse): void;
        /**
         * Get the {@link Soup.MessageHeaders} of the request.
         * @returns the {@link Soup.MessageHeaders} of the `request`.
         */
        get_http_headers(): Soup.MessageHeaders;
        /**
         * Get the HTTP method of the `request`.
         * @returns the HTTP method of the `request`
         */
        get_http_method(): string;
        /**
         * Get the URI path of `request`.
         * @returns the URI path of `request`
         */
        get_path(): string;
        /**
         * Get the URI scheme of `request`.
         * @returns the URI scheme of `request`
         */
        get_scheme(): string;
        /**
         * Get the URI of `request`.
         * @returns the full URI of `request`
         */
        get_uri(): string;
        /**
         * Get the {@link WebKit2.WebView} that initiated the request.
         * @returns the {@link WebKit2.WebView} that initiated `request`.
         */
        get_web_view(): WebView;
    }

    namespace URISchemeResponse {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::stream': (pspec: GObject.ParamSpec) => void;
            'notify::stream-length': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            stream: Gio.InputStream;
            stream_length: number;
            streamLength: number;
        }
    }

    /**
     * Represents a URI scheme response.
     *
     * If you register a particular URI scheme in a {@link WebKit2.WebContext},
     * using `webkit_web_context_register_uri_scheme()`, you have to provide
     * a {@link WebKit2.URISchemeRequestCallback}. After that, when a URI response
     * is made with that particular scheme, your callback will be
     * called. There you will be able to provide more response parameters
     * when the methods and properties of a {@link WebKit2.URISchemeRequest} is not
     * enough.
     *
     * When you finished setting up your {@link WebKit2.URISchemeResponse}, call
     * `webkit_uri_request_finish_with_response()` with it to return the response.
     * @gir-type Class
     */
    class URISchemeResponse extends GObject.Object {
        static $gtype: GObject.GType<URISchemeResponse>;

        // Properties

        /**
         * The input stream to read from.
         * @since 2.36
         * @construct-only
         */
        set stream(val: Gio.InputStream);
        /**
         * The input stream length in bytes, `-1` for unknown length.
         * @since 2.36
         * @construct-only
         */
        set stream_length(val: number);
        /**
         * The input stream length in bytes, `-1` for unknown length.
         * @since 2.36
         * @construct-only
         */
        set streamLength(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: URISchemeResponse.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<URISchemeResponse.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](input_stream: Gio.InputStream, stream_length: number): URISchemeResponse;

        // Signals

        /** @signal */
        connect<K extends keyof URISchemeResponse.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, URISchemeResponse.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof URISchemeResponse.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, URISchemeResponse.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof URISchemeResponse.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<URISchemeResponse.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Sets the content type for the `response`
         * @param content_type the content type of the stream
         */
        set_content_type(content_type: string): void;
        /**
         * Assign the provided {@link Soup.MessageHeaders} to the response.
         *
         * `headers` need to be of the type {@link Soup.MessageHeadersType.RESPONSE}.
         * Any existing headers will be overwritten.
         * @param headers the HTTP headers to be set
         */
        set_http_headers(headers: Soup.MessageHeaders): void;
        /**
         * Sets the status code and reason phrase for the `response`.
         *
         * If `status_code` is a known value and `reason_phrase` is `null`, the `reason_phrase` will be set automatically.
         * @param status_code the HTTP status code to be returned
         * @param reason_phrase a reason phrase
         */
        set_status(status_code: number, reason_phrase?: string | null): void;
    }

    namespace UserContentFilterStore {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::path': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            path: string;
        }
    }

    /**
     * Handles storage of user content filters on disk.
     *
     * The WebKitUserContentFilterStore provides the means to import and save
     * [JSON rule sets](https://webkit.org/blog/3476/content-blockers-first-look/),
     * which can be loaded later in an efficient manner. Once filters are stored,
     * the {@link WebKit2.UserContentFilter} objects which represent them can be added to
     * a {@link WebKit2.UserContentManager} with `webkit_user_content_manager_add_filter()`.
     *
     * JSON rule sets are imported using `webkit_user_content_filter_store_save()` and stored
     * on disk in an implementation defined format. The contents of a filter store must be
     * managed using the {@link WebKit2.UserContentFilterStore}: a list of all the stored filters
     * can be obtained with `webkit_user_content_filter_store_fetch_identifiers()`,
     * `webkit_user_content_filter_store_load()` can be used to retrieve a previously saved
     * filter, and removed from the store with `webkit_user_content_filter_store_remove()`.
     * @gir-type Class
     * @since 2.24
     */
    class UserContentFilterStore extends GObject.Object {
        static $gtype: GObject.GType<UserContentFilterStore>;

        // Properties

        /**
         * The directory used for filter storage. This path is used as the base
         * directory where user content filters are stored on disk.
         * @since 2.24
         * @construct-only
         */
        get path(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UserContentFilterStore.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<UserContentFilterStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](storage_path: string): UserContentFilterStore;

        // Signals

        /** @signal */
        connect<K extends keyof UserContentFilterStore.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserContentFilterStore.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof UserContentFilterStore.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserContentFilterStore.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof UserContentFilterStore.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UserContentFilterStore.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Asynchronously retrieve a list of the identifiers for all the stored filters.
         *
         * When the operation is finished, `callback` will be invoked, which then can use
         * `webkit_user_content_filter_store_fetch_identifiers_finish()` to obtain the list of
         * filter identifiers.
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         */
        fetch_identifiers(cancellable?: Gio.Cancellable | null): globalThis.Promise<string[]>;
        /**
         * Asynchronously retrieve a list of the identifiers for all the stored filters.
         *
         * When the operation is finished, `callback` will be invoked, which then can use
         * `webkit_user_content_filter_store_fetch_identifiers_finish()` to obtain the list of
         * filter identifiers.
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the removal is completed
         */
        fetch_identifiers(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously retrieve a list of the identifiers for all the stored filters.
         *
         * When the operation is finished, `callback` will be invoked, which then can use
         * `webkit_user_content_filter_store_fetch_identifiers_finish()` to obtain the list of
         * filter identifiers.
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the removal is completed
         */
        fetch_identifiers(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string[]> | void;
        /**
         * Finishes an asynchronous fetch of the list of stored filters.
         *
         * Finishes an asynchronous fetch of the list of identifiers for the stored filters previously
         * started with `webkit_user_content_filter_store_fetch_identifiers()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns a `null`-terminated list of filter identifiers.
         */
        fetch_identifiers_finish(result: Gio.AsyncResult): string[];
        /**
         * Gets the storage path for user content filters.
         * @returns path, as a string.
         */
        get_path(): string;
        /**
         * Asynchronously load a content filter given its `identifier`.
         *
         * The filter must have been
         * previously stored using `webkit_user_content_filter_store_save()`.
         *
         * When the operation is finished, `callback` will be invoked, which then can use
         * `webkit_user_content_filter_store_load_finish()` to obtain the resulting filter.
         * @param identifier a filter identifier
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         */
        load(identifier: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<UserContentFilter>;
        /**
         * Asynchronously load a content filter given its `identifier`.
         *
         * The filter must have been
         * previously stored using `webkit_user_content_filter_store_save()`.
         *
         * When the operation is finished, `callback` will be invoked, which then can use
         * `webkit_user_content_filter_store_load_finish()` to obtain the resulting filter.
         * @param identifier a filter identifier
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the load is completed
         */
        load(
            identifier: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously load a content filter given its `identifier`.
         *
         * The filter must have been
         * previously stored using `webkit_user_content_filter_store_save()`.
         *
         * When the operation is finished, `callback` will be invoked, which then can use
         * `webkit_user_content_filter_store_load_finish()` to obtain the resulting filter.
         * @param identifier a filter identifier
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the load is completed
         */
        load(
            identifier: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<UserContentFilter> | void;
        /**
         * Finishes an asynchronous filter load previously started with
         * `webkit_user_content_filter_store_load()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns a {@link WebKit2.UserContentFilter}, or `null` if the load failed
         */
        load_finish(result: Gio.AsyncResult): UserContentFilter;
        /**
         * Asynchronously remove a content filter given its `identifier`.
         *
         * When the operation is finished, `callback` will be invoked, which then can use
         * `webkit_user_content_filter_store_remove_finish()` to check whether the removal was
         * successful.
         * @param identifier a filter identifier
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         */
        remove(identifier: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously remove a content filter given its `identifier`.
         *
         * When the operation is finished, `callback` will be invoked, which then can use
         * `webkit_user_content_filter_store_remove_finish()` to check whether the removal was
         * successful.
         * @param identifier a filter identifier
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the removal is completed
         */
        remove(
            identifier: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously remove a content filter given its `identifier`.
         *
         * When the operation is finished, `callback` will be invoked, which then can use
         * `webkit_user_content_filter_store_remove_finish()` to check whether the removal was
         * successful.
         * @param identifier a filter identifier
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the removal is completed
         */
        remove(
            identifier: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an asynchronous filter removal previously started with
         * `webkit_user_content_filter_store_remove()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns whether the removal was successful
         */
        remove_finish(result: Gio.AsyncResult): boolean;
        /**
         * Asynchronously save a content filter from a set source rule.
         *
         * Asynchronously save a content filter from a source rule set in the
         * [WebKit content extesions JSON format](https://webkit.org/blog/3476/content-blockers-first-look/).
         *
         * The `identifier` can be used afterwards to refer to the filter when using
         * `webkit_user_content_filter_store_remove()` and `webkit_user_content_filter_store_load()`.
         * When the `identifier` has been used in the past, the new filter source will replace
         * the one saved beforehand for the same identifier.
         *
         * When the operation is finished, `callback` will be invoked, which then can use
         * `webkit_user_content_filter_store_save_finish()` to obtain the resulting filter.
         * @param identifier a string used to identify the saved filter
         * @param source {@link GLib.Bytes} containing the rule set in JSON format
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         */
        save(
            identifier: string,
            source: GLib.Bytes | Uint8Array,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<UserContentFilter>;
        /**
         * Asynchronously save a content filter from a set source rule.
         *
         * Asynchronously save a content filter from a source rule set in the
         * [WebKit content extesions JSON format](https://webkit.org/blog/3476/content-blockers-first-look/).
         *
         * The `identifier` can be used afterwards to refer to the filter when using
         * `webkit_user_content_filter_store_remove()` and `webkit_user_content_filter_store_load()`.
         * When the `identifier` has been used in the past, the new filter source will replace
         * the one saved beforehand for the same identifier.
         *
         * When the operation is finished, `callback` will be invoked, which then can use
         * `webkit_user_content_filter_store_save_finish()` to obtain the resulting filter.
         * @param identifier a string used to identify the saved filter
         * @param source {@link GLib.Bytes} containing the rule set in JSON format
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when saving is completed
         */
        save(
            identifier: string,
            source: GLib.Bytes | Uint8Array,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously save a content filter from a set source rule.
         *
         * Asynchronously save a content filter from a source rule set in the
         * [WebKit content extesions JSON format](https://webkit.org/blog/3476/content-blockers-first-look/).
         *
         * The `identifier` can be used afterwards to refer to the filter when using
         * `webkit_user_content_filter_store_remove()` and `webkit_user_content_filter_store_load()`.
         * When the `identifier` has been used in the past, the new filter source will replace
         * the one saved beforehand for the same identifier.
         *
         * When the operation is finished, `callback` will be invoked, which then can use
         * `webkit_user_content_filter_store_save_finish()` to obtain the resulting filter.
         * @param identifier a string used to identify the saved filter
         * @param source {@link GLib.Bytes} containing the rule set in JSON format
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when saving is completed
         */
        save(
            identifier: string,
            source: GLib.Bytes | Uint8Array,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<UserContentFilter> | void;
        /**
         * Finishes an asynchronous filter save previously started with
         * `webkit_user_content_filter_store_save()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns a {@link WebKit2.UserContentFilter}, or `null` if saving failed
         */
        save_finish(result: Gio.AsyncResult): UserContentFilter;
        /**
         * Asynchronously save a content filter from the contents of a file.
         *
         * Asynchronously save a content filter from the contents of a file, which must be
         * native to the platform, as checked by `g_file_is_native()`. See
         * `webkit_user_content_filter_store_save()` for more details.
         *
         * When the operation is finished, `callback` will be invoked, which then can use
         * `webkit_user_content_filter_store_save_finish()` to obtain the resulting filter.
         * @param identifier a string used to identify the saved filter
         * @param file a {@link Gio.File} containing the rule set in JSON format
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         */
        save_from_file(
            identifier: string,
            file: Gio.File,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<UserContentFilter>;
        /**
         * Asynchronously save a content filter from the contents of a file.
         *
         * Asynchronously save a content filter from the contents of a file, which must be
         * native to the platform, as checked by `g_file_is_native()`. See
         * `webkit_user_content_filter_store_save()` for more details.
         *
         * When the operation is finished, `callback` will be invoked, which then can use
         * `webkit_user_content_filter_store_save_finish()` to obtain the resulting filter.
         * @param identifier a string used to identify the saved filter
         * @param file a {@link Gio.File} containing the rule set in JSON format
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when saving is completed
         */
        save_from_file(
            identifier: string,
            file: Gio.File,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously save a content filter from the contents of a file.
         *
         * Asynchronously save a content filter from the contents of a file, which must be
         * native to the platform, as checked by `g_file_is_native()`. See
         * `webkit_user_content_filter_store_save()` for more details.
         *
         * When the operation is finished, `callback` will be invoked, which then can use
         * `webkit_user_content_filter_store_save_finish()` to obtain the resulting filter.
         * @param identifier a string used to identify the saved filter
         * @param file a {@link Gio.File} containing the rule set in JSON format
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when saving is completed
         */
        save_from_file(
            identifier: string,
            file: Gio.File,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<UserContentFilter> | void;
        /**
         * Finishes and asynchronous filter save previously started with
         * `webkit_user_content_filter_store_save_from_file()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns a {@link WebKit2.UserContentFilter}, or `null` if saving failed.
         */
        save_from_file_finish(result: Gio.AsyncResult): UserContentFilter;
    }

    namespace UserContentManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This signal is emitted when JavaScript in a web view calls
             * <code>window.webkit.messageHandlers.<name>.postMessage()</code>, after registering
             * <code><name></code> using
             * `webkit_user_content_manager_register_script_message_handler()`
             * @signal
             * @since 2.8
             * @detailed
             * @run-last
             */
            'script-message-received': (arg0: JavascriptResult) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Manages user-defined content which affects web pages.
     *
     * Using a {@link WebKit2.UserContentManager} user CSS style sheets can be set to
     * be injected in the web pages loaded by a {@link WebKit2.WebView}, by
     * `webkit_user_content_manager_add_style_sheet()`.
     *
     * To use a {@link WebKit2.UserContentManager}, it must be created using
     * `webkit_user_content_manager_new()`, and then passed to
     * `webkit_web_view_new_with_user_content_manager()`. User style
     * sheets can be created with `webkit_user_style_sheet_new()`.
     *
     * User style sheets can be added and removed at any time, but
     * they will affect the web pages loaded afterwards.
     * @gir-type Class
     * @since 2.6
     */
    class UserContentManager extends GObject.Object {
        static $gtype: GObject.GType<UserContentManager>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UserContentManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<UserContentManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): UserContentManager;

        // Signals

        /** @signal */
        connect<K extends keyof UserContentManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserContentManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof UserContentManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserContentManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof UserContentManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UserContentManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds a {@link WebKit2.UserContentFilter} to the given {@link WebKit2.UserContentManager}.
         *
         * The same {@link WebKit2.UserContentFilter} can be reused with multiple
         * {@link WebKit2.UserContentManager} instances.
         *
         * Filters need to be saved and loaded from {@link WebKit2.UserContentFilterStore}.
         * @param filter A {@link WebKit2.UserContentFilter}
         */
        add_filter(filter: UserContentFilter): void;
        /**
         * Adds a {@link WebKit2.UserScript} to the given {@link WebKit2.UserContentManager}.
         *
         * The same {@link WebKit2.UserScript} can be reused with multiple
         * {@link WebKit2.UserContentManager} instances.
         * @param script A {@link WebKit2.UserScript}
         */
        add_script(script: UserScript): void;
        /**
         * Adds a {@link WebKit2.UserStyleSheet} to the given {@link WebKit2.UserContentManager}.
         *
         * The same {@link WebKit2.UserStyleSheet} can be reused with multiple
         * {@link WebKit2.UserContentManager} instances.
         * @param stylesheet A {@link WebKit2.UserStyleSheet}
         */
        add_style_sheet(stylesheet: UserStyleSheet): void;
        /**
         * Registers a new user script message handler.
         *
         * After it is registered,
         * scripts can use `window.webkit.messageHandlers.<name>.postMessage(value)`
         * to send messages. Those messages are received by connecting handlers
         * to the {@link WebKit2.UserContentManager.SignalSignatures.script_message_received | WebKit2.UserContentManager::script-message-received} signal. The
         * handler name is used as the detail of the signal. To avoid race
         * conditions between registering the handler name, and starting to
         * receive the signals, it is recommended to connect to the signal
         * *before* registering the handler name:
         *
         * ```c
         * WebKitWebView *view = webkit_web_view_new ();
         * WebKitUserContentManager *manager = webkit_web_view_get_user_content_manager ();
         * g_signal_connect (manager, "script-message-received::foobar",
         *                   G_CALLBACK (handle_script_message), NULL);
         * webkit_user_content_manager_register_script_message_handler (manager, "foobar");
         * ```
         *
         * Registering a script message handler will fail if the requested
         * name has been already registered before.
         * @param name Name of the script message channel
         * @returns `true` if message handler was registered successfully, or `false` otherwise.
         */
        register_script_message_handler(name: string): boolean;
        /**
         * Registers a new user script message handler in script world.
         *
         * Registers a new user script message handler in script world with name `world_name`.
         * See `webkit_user_content_manager_register_script_message_handler()` for full description.
         *
         * Registering a script message handler will fail if the requested
         * name has been already registered before.
         * @param name Name of the script message channel
         * @param world_name the name of a `WebKitScriptWorld`
         * @returns `true` if message handler was registered successfully, or `false` otherwise.
         */
        register_script_message_handler_in_world(name: string, world_name: string): boolean;
        /**
         * Removes all content filters from the given {@link WebKit2.UserContentManager}.
         */
        remove_all_filters(): void;
        /**
         * Removes all user scripts from the given {@link WebKit2.UserContentManager}
         *
         * See also `webkit_user_content_manager_remove_script()`.
         */
        remove_all_scripts(): void;
        /**
         * Removes all user style sheets from the given {@link WebKit2.UserContentManager}.
         */
        remove_all_style_sheets(): void;
        /**
         * Removes a filter from the given {@link WebKit2.UserContentManager}.
         *
         * Since 2.24
         * @param filter A {@link WebKit2.UserContentFilter}
         */
        remove_filter(filter: UserContentFilter): void;
        /**
         * Removes a filter by the given identifier.
         *
         * Removes a filter from the given {@link WebKit2.UserContentManager} given the
         * identifier of a {@link WebKit2.UserContentFilter} as returned by
         * `webkit_user_content_filter_get_identifier()`.
         * @param filter_id Filter identifier
         */
        remove_filter_by_id(filter_id: string): void;
        /**
         * Removes a {@link WebKit2.UserScript} from the given {@link WebKit2.UserContentManager}.
         *
         * See also `webkit_user_content_manager_remove_all_scripts()`.
         * @param script A {@link WebKit2.UserScript}
         */
        remove_script(script: UserScript): void;
        /**
         * Removes a {@link WebKit2.UserStyleSheet} from the given {@link WebKit2.UserContentManager}.
         *
         * See also `webkit_user_content_manager_remove_all_style_sheets()`.
         * @param stylesheet A {@link WebKit2.UserStyleSheet}
         */
        remove_style_sheet(stylesheet: UserStyleSheet): void;
        /**
         * Unregisters a previously registered message handler.
         *
         * Note that this does *not* disconnect handlers for the
         * {@link WebKit2.UserContentManager.SignalSignatures.script_message_received | WebKit2.UserContentManager::script-message-received} signal;
         * they will be kept connected, but the signal will not be emitted
         * unless the handler name is registered again.
         *
         * See also `webkit_user_content_manager_register_script_message_handler()`.
         * @param name Name of the script message channel
         */
        unregister_script_message_handler(name: string): void;
        /**
         * Unregisters a previously registered message handler in script world with name `world_name`.
         *
         * Note that this does *not* disconnect handlers for the
         * {@link WebKit2.UserContentManager.SignalSignatures.script_message_received | WebKit2.UserContentManager::script-message-received} signal;
         * they will be kept connected, but the signal will not be emitted
         * unless the handler name is registered again.
         *
         * See also `webkit_user_content_manager_register_script_message_handler_in_world()`.
         * @param name Name of the script message channel
         * @param world_name the name of a `WebKitScriptWorld`
         */
        unregister_script_message_handler_in_world(name: string, world_name: string): void;
    }

    namespace UserMediaPermissionRequest {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::is-for-audio-device': (pspec: GObject.ParamSpec) => void;
            'notify::is-for-video-device': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, PermissionRequest.ConstructorProps {
            is_for_audio_device: boolean;
            isForAudioDevice: boolean;
            is_for_video_device: boolean;
            isForVideoDevice: boolean;
        }
    }

    /**
     * A permission request for accessing user's audio/video devices.
     *
     * WebKitUserMediaPermissionRequest represents a request for
     * permission to decide whether WebKit should be allowed to access the user's
     * audio and video source devices when requested through the getUserMedia API.
     *
     * When a WebKitUserMediaPermissionRequest is not handled by the user,
     * it is denied by default.
     * @gir-type Class
     * @since 2.8
     */
    class UserMediaPermissionRequest extends GObject.Object implements PermissionRequest {
        static $gtype: GObject.GType<UserMediaPermissionRequest>;

        // Properties

        /**
         * Whether the media device to which the permission was requested has a microphone or not.
         * @since 2.8
         * @read-only
         */
        get is_for_audio_device(): boolean;
        /**
         * Whether the media device to which the permission was requested has a microphone or not.
         * @since 2.8
         * @read-only
         */
        get isForAudioDevice(): boolean;
        /**
         * Whether the media device to which the permission was requested has a video capture capability or not.
         * @since 2.8
         * @read-only
         */
        get is_for_video_device(): boolean;
        /**
         * Whether the media device to which the permission was requested has a video capture capability or not.
         * @since 2.8
         * @read-only
         */
        get isForVideoDevice(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UserMediaPermissionRequest.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<UserMediaPermissionRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof UserMediaPermissionRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserMediaPermissionRequest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof UserMediaPermissionRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserMediaPermissionRequest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof UserMediaPermissionRequest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UserMediaPermissionRequest.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Allow the action which triggered this request.
         */
        allow(): void;
        /**
         * Deny the action which triggered this request.
         */
        deny(): void;
        /**
         * Allow the action which triggered this request.
         * @virtual
         */
        vfunc_allow(): void;
        /**
         * Deny the action which triggered this request.
         * @virtual
         */
        vfunc_deny(): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace UserMessage {
        // Signal signatures
        interface SignalSignatures extends GObject.InitiallyUnowned.SignalSignatures {
            'notify::fd-list': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parameters': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
            fd_list: Gio.UnixFDList;
            fdList: Gio.UnixFDList;
            name: string;
            parameters: GLib.Variant;
        }
    }

    /**
     * Message that can be sent between the UI process and web extensions.
     *
     * A WebKitUserMessage is a message that can be used for the communication between the UI process
     * and web extensions. A WebKitUserMessage always has a name, and it can also include parameters and
     * UNIX file descriptors. Messages can be sent from a {@link WebKit2.WebContext} to all `WebKitWebExtension`<!-- -->s,
     * from a `WebKitWebExtension` to its corresponding {@link WebKit2.WebContext}, and from a {@link WebKit2.WebView} to its
     * corresponding `WebKitWebPage` (and vice versa). One to one messages can be replied to directly with
     * `webkit_user_message_send_reply()`.
     * @gir-type Class
     * @since 2.28
     */
    class UserMessage extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<UserMessage>;

        // Properties

        /**
         * The UNIX file descriptors of the user message.
         * @since 2.28
         * @construct-only
         */
        get fd_list(): Gio.UnixFDList;
        /**
         * The UNIX file descriptors of the user message.
         * @since 2.28
         * @construct-only
         */
        get fdList(): Gio.UnixFDList;
        /**
         * The name of the user message.
         * @since 2.28
         * @construct-only
         */
        get name(): string;
        /**
         * The parameters of the user message as a {@link GLib.Variant}, or `null`
         * if the message doesn't include parameters. Note that only complete types are
         * allowed.
         * @since 2.28
         * @construct-only
         */
        get parameters(): GLib.Variant;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UserMessage.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<UserMessage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, parameters?: GLib.Variant | null): UserMessage;

        static new_with_fd_list(
            name: string,
            parameters?: GLib.Variant | null,
            fd_list?: Gio.UnixFDList | null,
        ): UserMessage;

        // Signals

        /** @signal */
        connect<K extends keyof UserMessage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserMessage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof UserMessage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserMessage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof UserMessage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UserMessage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the `message` list of file descritpor.
         * @returns the message list of file descriptors
         */
        get_fd_list(): Gio.UnixFDList | null;
        /**
         * Get the `message` name.
         * @returns the message name
         */
        get_name(): string;
        /**
         * Get the `message` parameters.
         * @returns the message parameters
         */
        get_parameters(): GLib.Variant | null;
        /**
         * Send a reply to an user message.
         *
         * If `reply` is floating, it's consumed.
         * You can only send a reply to a {@link WebKit2.UserMessage} that has been
         * received.
         * @param reply a {@link WebKit2.UserMessage} to send as reply
         */
        send_reply(reply: UserMessage): void;
    }

    namespace WebContext {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This signal is emitted when a new automation request is made.
             * Note that it will never be emitted if automation is not enabled in `context`,
             * see `webkit_web_context_set_automation_allowed()` for more details.
             * @signal
             * @since 2.18
             * @run-last
             */
            'automation-started': (arg0: AutomationSession) => void;
            /**
             * This signal is emitted when a new download request is made.
             * @signal
             * @run-last
             */
            'download-started': (arg0: Download) => void;
            /**
             * This signal is emitted when a {@link WebKit2.WebContext} needs to set
             * initial notification permissions for a web process. It is emitted
             * when a new web process is about to be launched, and signals the
             * most appropriate moment to use
             * `webkit_web_context_initialize_notification_permissions()`. If no
             * notification permissions have changed since the last time this
             * signal was emitted, then there is no need to call
             * `webkit_web_context_initialize_notification_permissions()` again.
             * @signal
             * @since 2.16
             * @run-last
             */
            'initialize-notification-permissions': () => void;
            /**
             * This signal is emitted when a new web process is about to be
             * launched. It signals the most appropriate moment to use
             * `webkit_web_context_set_web_extensions_initialization_user_data()`
             * and `webkit_web_context_set_web_extensions_directory()`.
             * @signal
             * @since 2.4
             * @run-last
             */
            'initialize-web-extensions': () => void;
            /**
             * This signal is emitted when a {@link WebKit2.UserMessage} is received from a
             * `WebKitWebExtension`. You can reply to the message using
             * `webkit_user_message_send_reply()`.
             *
             * You can handle the user message asynchronously by calling `g_object_ref()` on
             * `message` and returning `true`.
             * @signal
             * @since 2.28
             * @run-last
             */
            'user-message-received': (arg0: UserMessage) => boolean | void;
            'notify::local-storage-directory': (pspec: GObject.ParamSpec) => void;
            'notify::memory-pressure-settings': (pspec: GObject.ParamSpec) => void;
            'notify::process-swap-on-cross-site-navigation-enabled': (pspec: GObject.ParamSpec) => void;
            'notify::time-zone-override': (pspec: GObject.ParamSpec) => void;
            'notify::website-data-manager': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            local_storage_directory: string;
            localStorageDirectory: string;
            memory_pressure_settings: MemoryPressureSettings;
            memoryPressureSettings: MemoryPressureSettings;
            process_swap_on_cross_site_navigation_enabled: boolean;
            processSwapOnCrossSiteNavigationEnabled: boolean;
            time_zone_override: string;
            timeZoneOverride: string;
            website_data_manager: WebsiteDataManager;
            websiteDataManager: WebsiteDataManager;
        }
    }

    /**
     * Manages aspects common to all {@link WebKit2.WebView}<!-- -->s
     *
     * The {@link WebKit2.WebContext} manages all aspects common to all
     * {@link WebKit2.WebView}<!-- -->s.
     *
     * You can define the {@link WebKit2.CacheModel} and {@link WebKit2.ProcessModel} with
     * `webkit_web_context_set_cache_model()` and
     * `webkit_web_context_set_process_model()`, depending on the needs of
     * your application. You can access the {@link WebKit2.SecurityManager} to specify
     * the behaviour of your application regarding security using
     * `webkit_web_context_get_security_manager()`.
     *
     * It is also possible to change your preferred language or enable
     * spell checking, using `webkit_web_context_set_preferred_languages()`,
     * `webkit_web_context_set_spell_checking_languages()` and
     * `webkit_web_context_set_spell_checking_enabled()`.
     *
     * You can use `webkit_web_context_register_uri_scheme()` to register
     * custom URI schemes, and manage several other settings.
     *
     * TLS certificate validation failure is now treated as a transport
     * error by default. To handle TLS failures differently, you can
     * connect to {@link WebKit2.WebView.SignalSignatures.load_failed_with_tls_errors | WebKit2.WebView::load-failed-with-tls-errors}.
     * Alternatively, you can use `webkit_web_context_set_tls_errors_policy()`
     * to set the policy {@link WebKit2.TLSErrorsPolicy.IGNORE}; however, this is
     * not appropriate for Internet applications.
     * @gir-type Class
     */
    class WebContext extends GObject.Object {
        static $gtype: GObject.GType<WebContext>;

        // Properties

        /**
         * The directory where local storage data will be saved.
         * @since 2.8
         * @deprecated since 2.10.: Use {@link WebKit2.WebsiteDataManager.local_storage_directory} instead.
         * @construct-only
         */
        get local_storage_directory(): string;
        /**
         * The directory where local storage data will be saved.
         * @since 2.8
         * @deprecated since 2.10.: Use {@link WebKit2.WebsiteDataManager.local_storage_directory} instead.
         * @construct-only
         */
        get localStorageDirectory(): string;
        /**
         * The {@link WebKit2.MemoryPressureSettings} applied to the web processes created by this context.
         * @since 2.34
         * @construct-only
         */
        set memory_pressure_settings(val: MemoryPressureSettings);
        /**
         * The {@link WebKit2.MemoryPressureSettings} applied to the web processes created by this context.
         * @since 2.34
         * @construct-only
         */
        set memoryPressureSettings(val: MemoryPressureSettings);
        /**
         * Whether swap Web processes on cross-site navigations is enabled.
         *
         * When enabled, pages from each security origin will be handled by
         * their own separate Web processes, which are started (and
         * terminated) on demand as the user navigates across different
         * domains. This is an important security measure which helps prevent
         * websites stealing data from other visited pages.
         * @since 2.28
         * @construct-only
         */
        get process_swap_on_cross_site_navigation_enabled(): boolean;
        /**
         * Whether swap Web processes on cross-site navigations is enabled.
         *
         * When enabled, pages from each security origin will be handled by
         * their own separate Web processes, which are started (and
         * terminated) on demand as the user navigates across different
         * domains. This is an important security measure which helps prevent
         * websites stealing data from other visited pages.
         * @since 2.28
         * @construct-only
         */
        get processSwapOnCrossSiteNavigationEnabled(): boolean;
        /**
         * The timezone override for this web context. Setting this property provides a better
         * alternative to configure the timezone information for all webviews managed by the WebContext.
         * The other, less optimal, approach is to globally set the TZ environment variable in the
         * process before creating the context. However this approach might not be very convenient and
         * can have side-effects in your application.
         *
         * The expected values for this property are defined in the IANA timezone database. See this
         * wikipedia page for instance, https://en.wikipedia.org/wiki/List_of_tz_database_time_zones.
         * @since 2.38
         * @construct-only
         */
        get time_zone_override(): string;
        /**
         * The timezone override for this web context. Setting this property provides a better
         * alternative to configure the timezone information for all webviews managed by the WebContext.
         * The other, less optimal, approach is to globally set the TZ environment variable in the
         * process before creating the context. However this approach might not be very convenient and
         * can have side-effects in your application.
         *
         * The expected values for this property are defined in the IANA timezone database. See this
         * wikipedia page for instance, https://en.wikipedia.org/wiki/List_of_tz_database_time_zones.
         * @since 2.38
         * @construct-only
         */
        get timeZoneOverride(): string;
        /**
         * The {@link WebKit2.WebsiteDataManager} associated with this context.
         * @since 2.10
         * @construct-only
         */
        get website_data_manager(): WebsiteDataManager;
        /**
         * The {@link WebKit2.WebsiteDataManager} associated with this context.
         * @since 2.10
         * @construct-only
         */
        get websiteDataManager(): WebsiteDataManager;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WebContext.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WebContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): WebContext;

        static new_ephemeral(): WebContext;

        static new_with_website_data_manager(manager: WebsiteDataManager): WebContext;

        // Signals

        /** @signal */
        connect<K extends keyof WebContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebContext.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WebContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WebContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WebContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets the default web context.
         */
        static get_default(): WebContext;

        // Virtual methods

        /**
         * @param session
         * @virtual
         */
        vfunc_automation_started(session: AutomationSession): void;
        /**
         * @param download
         * @virtual
         */
        vfunc_download_started(download: Download): void;
        /**
         * @virtual
         */
        vfunc_initialize_notification_permissions(): void;
        /**
         * @virtual
         */
        vfunc_initialize_web_extensions(): void;
        /**
         * @param message
         * @virtual
         */
        vfunc_user_message_received(message: UserMessage): boolean;

        // Methods

        /**
         * Adds a path to be mounted in the sandbox.
         *
         * `path` must exist before any web process
         * has been created otherwise it will be silently ignored. It is a fatal error to
         * add paths after a web process has been spawned.
         *
         * Paths in directories such as `/sys`, `/proc`, and `/dev` or all of `/`
         * are not valid.
         *
         * See also `webkit_web_context_set_sandbox_enabled()`
         * @param path an absolute path to mount in the sandbox
         * @param read_only if `true` the path will be read-only
         */
        add_path_to_sandbox(path: string, read_only: boolean): void;
        /**
         * Ignore further TLS errors on the `host` for the certificate present in `info`.
         * @param certificate a {@link Gio.TlsCertificate}
         * @param host the host for which a certificate is to be allowed
         */
        allow_tls_certificate_for_host(certificate: Gio.TlsCertificate, host: string): void;
        /**
         * Clears all resources currently cached.
         *
         * See also `webkit_web_context_set_cache_model()`.
         */
        clear_cache(): void;
        /**
         * Requests downloading of the specified URI string.
         *
         * The download operation will not be associated to any {@link WebKit2.WebView},
         * if you are interested in starting a download from a particular {@link WebKit2.WebView} use
         * `webkit_web_view_download_uri()` instead.
         * @param uri the URI to download
         * @returns a new {@link WebKit2.Download} representing    the download operation.
         */
        download_uri(uri: string): Download;
        /**
         * Returns the current cache model.
         *
         * For more information about this
         * value check the documentation of the function
         * `webkit_web_context_set_cache_model()`.
         * @returns the current {@link WebKit2.CacheModel}
         */
        get_cache_model(): CacheModel;
        /**
         * Get the {@link WebKit2.CookieManager} of the `context`'s {@link WebKit2.WebsiteDataManager}.
         * @returns the {@link WebKit2.CookieManager} of `context`.
         */
        get_cookie_manager(): CookieManager;
        /**
         * Get the {@link WebKit2.FaviconDatabase} associated with `context`.
         *
         * To initialize the database you need to call
         * `webkit_web_context_set_favicon_database_directory()`.
         * @returns the {@link WebKit2.FaviconDatabase} of `context`.
         */
        get_favicon_database(): FaviconDatabase;
        /**
         * Get the directory path to store the favicons database.
         *
         * Get the directory path being used to store the favicons database
         * for `context`, or `null` if
         * `webkit_web_context_set_favicon_database_directory()` hasn't been
         * called yet.
         *
         * This function will always return the same path after having called
         * `webkit_web_context_set_favicon_database_directory()` for the first
         * time.
         * @returns the path of the directory of the favicons database associated with `context`, or `null`.
         */
        get_favicon_database_directory(): string;
        /**
         * Get the {@link WebKit2.GeolocationManager} of `context`.
         * @returns the {@link WebKit2.GeolocationManager} of `context`.
         */
        get_geolocation_manager(): GeolocationManager;
        /**
         * Asynchronously get the list of installed plugins.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_web_context_get_plugins_finish()` to get the result of the operation.
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         */
        get_plugins(cancellable?: Gio.Cancellable | null): globalThis.Promise<Plugin[]>;
        /**
         * Asynchronously get the list of installed plugins.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_web_context_get_plugins_finish()` to get the result of the operation.
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_plugins(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously get the list of installed plugins.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_web_context_get_plugins_finish()` to get the result of the operation.
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_plugins(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Plugin[]> | void;
        /**
         * Finish an asynchronous operation started with webkit_web_context_get_plugins.
         * @param result a {@link Gio.AsyncResult}
         * @returns a {@link GLib.List} of {@link WebKit2.Plugin}. You must free the {@link GLib.List} with    `g_list_free()` and unref the {@link WebKit2.Plugin}<!-- -->s with `g_object_unref()` when you're done with them.
         */
        get_plugins_finish(result: Gio.AsyncResult): Plugin[];
        /**
         * Returns the current process model.
         *
         * For more information about this value
         * see `webkit_web_context_set_process_model()`.
         * @returns the current {@link WebKit2.ProcessModel}
         */
        get_process_model(): ProcessModel;
        /**
         * Get whether sandboxing is currently enabled.
         * @returns `true` if sandboxing is enabled, or `false` otherwise.
         */
        get_sandbox_enabled(): boolean;
        /**
         * Get the {@link WebKit2.SecurityManager} of `context`.
         * @returns the {@link WebKit2.SecurityManager} of `context`.
         */
        get_security_manager(): SecurityManager;
        /**
         * Get whether spell checking feature is currently enabled.
         * @returns `true` If spell checking is enabled, or `false` otherwise.
         */
        get_spell_checking_enabled(): boolean;
        /**
         * Get the the list of spell checking languages.
         *
         * Get the the list of spell checking languages associated with
         * `context`, or `null` if no languages have been previously set.
         *
         * See `webkit_web_context_set_spell_checking_languages()` for more
         * details on the format of the languages in the list.
         * @returns A `null`-terminated    array of languages if available, or `null` otherwise.
         */
        get_spell_checking_languages(): string[];
        /**
         * Get the {@link WebKit2.WebContext.time_zone_override} property.
         */
        get_time_zone_override(): string;
        /**
         * Get the TLS errors policy of `context`.
         * @returns a {@link WebKit2.TLSErrorsPolicy}
         */
        get_tls_errors_policy(): TLSErrorsPolicy;
        /**
         * Get the {@link WebKit2.WebContext.use_system_appearance_for_scrollbars} property.
         * @returns `true` if scrollbars are rendering using the system appearance, or `false` otherwise
         */
        get_use_system_appearance_for_scrollbars(): boolean;
        /**
         * Gets the maximum number of web processes that can be created at the same time for the `context`.
         *
         * This function is now deprecated and always returns 0 (no limit). See also `webkit_web_context_set_web_process_count_limit()`.
         * @returns the maximum limit of web processes, or 0 if there isn't a limit.
         */
        get_web_process_count_limit(): number;
        /**
         * Get the {@link WebKit2.WebsiteDataManager} of `context`.
         * @returns a {@link WebKit2.WebsiteDataManager}
         */
        get_website_data_manager(): WebsiteDataManager;
        /**
         * Sets initial desktop notification permissions for the `context`.
         *
         * `allowed_origins` and `disallowed_origins` must each be {@link GLib.List} of
         * {@link WebKit2.SecurityOrigin} objects representing origins that will,
         * respectively, either always or never have permission to show desktop
         * notifications. No {@link WebKit2.NotificationPermissionRequest} will ever be
         * generated for any of the security origins represented in
         * `allowed_origins` or `disallowed_origins`. This function is necessary
         * because some webpages proactively check whether they have permission
         * to display notifications without ever creating a permission request.
         *
         * This function only affects web processes that have not already been
         * created. The best time to call it is when handling
         * {@link WebKit2.WebContext.SignalSignatures.initialize_notification_permissions | WebKit2.WebContext::initialize-notification-permissions} so as to
         * ensure that new web processes receive the most recent set of
         * permissions.
         * @param allowed_origins a {@link GLib.List} of security origins
         * @param disallowed_origins a {@link GLib.List} of security origins
         */
        initialize_notification_permissions(
            allowed_origins: SecurityOrigin[],
            disallowed_origins: SecurityOrigin[],
        ): void;
        /**
         * Get whether automation is allowed in `context`.
         *
         * See also `webkit_web_context_set_automation_allowed()`.
         * @returns `true` if automation is allowed or `false` otherwise.
         */
        is_automation_allowed(): boolean;
        /**
         * Get whether a {@link WebKit2.WebContext} is ephemeral.
         * @returns `true` if `context` is ephemeral or `false` otherwise.
         */
        is_ephemeral(): boolean;
        /**
         * Resolve the domain name of the given `hostname` in advance.
         *
         * Resolve the domain name of the given `hostname` in advance, so that if a URI
         * of `hostname` is requested the load will be performed more quickly.
         * @param hostname a hostname to be resolved
         */
        prefetch_dns(hostname: string): void;
        /**
         * Register `scheme` in `context`.
         *
         * Register `scheme` in `context`, so that when an URI request with `scheme` is made in the
         * {@link WebKit2.WebContext}, the {@link WebKit2.URISchemeRequestCallback} registered will be called with a
         * {@link WebKit2.URISchemeRequest}.
         * It is possible to handle URI scheme requests asynchronously, by calling `g_object_ref()` on the
         * {@link WebKit2.URISchemeRequest} and calling `webkit_uri_scheme_request_finish()` later
         * when the data of the request is available or
         * `webkit_uri_scheme_request_finish_error()` in case of error.
         *
         * ```c
         * static void
         * about_uri_scheme_request_cb (WebKitURISchemeRequest *request,
         *                              gpointer                user_data)
         * {
         *     GInputStream *stream;
         *     gsize         stream_length;
         *     const gchar  *path = webkit_uri_scheme_request_get_path (request);
         *
         *     if (!g_strcmp0 (path, "memory")) {
         *         // Create a GInputStream with the contents of memory about page, and set its length to stream_length
         *     } else if (!g_strcmp0 (path, "applications")) {
         *         // Create a GInputStream with the contents of applications about page, and set its length to stream_length
         *     } else if (!g_strcmp0 (path, "example")) {
         *         gchar *contents = g_strdup_printf ("<html><body><p>Example about page</p></body></html>");
         *         stream_length = strlen (contents);
         *         stream = g_memory_input_stream_new_from_data (contents, stream_length, g_free);
         *     } else {
         *         GError *error = g_error_new (ABOUT_HANDLER_ERROR, ABOUT_HANDLER_ERROR_INVALID, "Invalid about:%s page.", path);
         *         webkit_uri_scheme_request_finish_error (request, error);
         *         g_error_free (error);
         *         return;
         *     }
         *     webkit_uri_scheme_request_finish (request, stream, stream_length, "text/html");
         *     g_object_unref (stream);
         * }
         * ```
         * @param scheme the network scheme to register
         * @param callback a {@link WebKit2.URISchemeRequestCallback}
         */
        register_uri_scheme(scheme: string, callback: URISchemeRequestCallback): void;
        /**
         * Send `message` to all `WebKitWebExtension`<!-- -->s associated to `context`.
         *
         * If `message` is floating, it's consumed.
         * @param message a {@link WebKit2.UserMessage}
         */
        send_message_to_all_extensions(message: UserMessage): void;
        /**
         * Set an additional directory where WebKit will look for plugins.
         * @param directory the directory to add
         */
        set_additional_plugins_directory(directory: string): void;
        /**
         * Set whether automation is allowed in `context`.
         *
         * When automation is enabled the browser could
         * be controlled by another process by requesting an automation session. When a new automation
         * session is requested the signal {@link WebKit2.WebContext.SignalSignatures.automation_started | WebKit2.WebContext::automation-started} is emitted.
         * Automation is disabled by default, so you need to explicitly call this method passing `true`
         * to enable it.
         *
         * Note that only one {@link WebKit2.WebContext} can have automation enabled, so this will do nothing
         * if there's another {@link WebKit2.WebContext} with automation already enabled.
         * @param allowed value to set
         */
        set_automation_allowed(allowed: boolean): void;
        /**
         * Specifies a usage model for WebViews.
         *
         * Specifies a usage model for WebViews, which WebKit will use to
         * determine its caching behavior. All web views follow the cache
         * model. This cache model determines the RAM and disk space to use
         * for caching previously viewed content .
         *
         * Research indicates that users tend to browse within clusters of
         * documents that hold resources in common, and to revisit previously
         * visited documents. WebKit and the frameworks below it include
         * built-in caches that take advantage of these patterns,
         * substantially improving document load speed in browsing
         * situations. The WebKit cache model controls the behaviors of all of
         * these caches, including various WebCore caches.
         *
         * Browsers can improve document load speed substantially by
         * specifying {@link WebKit2.CacheModel.WEB_BROWSER}. Applications without a
         * browsing interface can reduce memory usage substantially by
         * specifying {@link WebKit2.CacheModel.DOCUMENT_VIEWER}. The default value is
         * {@link WebKit2.CacheModel.WEB_BROWSER}.
         * @param cache_model a {@link WebKit2.CacheModel}
         */
        set_cache_model(cache_model: CacheModel | null): void;
        /**
         * Set the directory where disk cache files will be stored.
         *
         * This method must be called before loading anything in this context, otherwise
         * it will not have any effect.
         *
         * Note that this method overrides the directory set in the {@link WebKit2.WebsiteDataManager},
         * but it doesn't change the value returned by `webkit_website_data_manager_get_disk_cache_directory()`
         * since the {@link WebKit2.WebsiteDataManager} is immutable.
         * @param directory the directory to set
         */
        set_disk_cache_directory(directory: string): void;
        /**
         * Set the directory path to store the favicons database.
         *
         * Set the directory path to be used to store the favicons database
         * for `context` on disk. Passing `null` as `path` means using the
         * default directory for the platform (see `g_get_user_cache_dir()`).
         *
         * Calling this method also means enabling the favicons database for
         * its use from the applications, so that's why it's expected to be
         * called only once. Further calls for the same instance of
         * {@link WebKit2.WebContext} won't cause any effect.
         * @param path an absolute path to the icon database directory or `null` to use the defaults
         */
        set_favicon_database_directory(path?: string | null): void;
        /**
         * Set the network proxy settings to be used by connections started in `context`.
         *
         * By default {@link WebKit2.NetworkProxyMode.DEFAULT} is used, which means that the
         * system settings will be used (g_proxy_resolver_get_default()).
         * If you want to override the system default settings, you can either use
         * {@link WebKit2.NetworkProxyMode.NO_PROXY} to make sure no proxies are used at all,
         * or {@link WebKit2.NetworkProxyMode.CUSTOM} to provide your own proxy settings.
         * When `proxy_mode` is {@link WebKit2.NetworkProxyMode.CUSTOM} `proxy_settings` must be
         * a valid {@link WebKit2.NetworkProxySettings}; otherwise, `proxy_settings` must be `null`.
         * @param proxy_mode a {@link WebKit2.NetworkProxyMode}
         * @param proxy_settings a {@link WebKit2.NetworkProxySettings}, or `null`
         */
        set_network_proxy_settings(
            proxy_mode: NetworkProxyMode | null,
            proxy_settings?: NetworkProxySettings | null,
        ): void;
        /**
         * Set the list of preferred languages.
         *
         * Set the list of preferred languages, sorted from most desirable
         * to least desirable. The list will be used in the following ways:
         *
         * - Determining how to build the `Accept-Language` HTTP header that will be
         *   included in the network requests started by the {@link WebKit2.WebContext}.
         * - Setting the values of `navigator.language` and `navigator.languages`.
         * - The first item in the list sets the default locale for JavaScript
         *   `Intl` functions.
         * @param languages a `null`-terminated list of language identifiers
         */
        set_preferred_languages(languages?: string[] | null): void;
        /**
         * Specifies a process model for WebViews.
         *
         * Specifies a process model for WebViews, which WebKit will use to
         * determine how auxiliary processes are handled.
         *
         * {@link WebKit2.ProcessModel.MULTIPLE_SECONDARY_PROCESSES} will use
         * one process per view most of the time, while still allowing for web
         * views to share a process when needed (for example when different
         * views interact with each other). Using this model, when a process
         * hangs or crashes, only the WebViews using it stop working, while
         * the rest of the WebViews in the application will still function
         * normally.
         *
         * {@link WebKit2.ProcessModel.SHARED_SECONDARY_PROCESS} is deprecated since 2.26,
         * using it has no effect for security reasons.
         *
         * This method **must be called before any web process has been created**,
         * as early as possible in your application. Calling it later will make
         * your application crash.
         * @param process_model a {@link WebKit2.ProcessModel}
         */
        set_process_model(process_model: ProcessModel | null): void;
        /**
         * Set whether WebKit subprocesses will be sandboxed.
         *
         * Set whether WebKit subprocesses will be sandboxed, limiting access to the system.
         * This method **must be called before any web process has been created**,
         * as early as possible in your application. Calling it later is a fatal error.
         *
         * This is only implemented on Linux and is a no-op otherwise.
         * @param enabled if `true` enable sandboxing
         */
        set_sandbox_enabled(enabled: boolean): void;
        /**
         * Enable or disable the spell checking feature.
         * @param enabled Value to be set
         */
        set_spell_checking_enabled(enabled: boolean): void;
        /**
         * Set the list of spell checking languages to be used for spell
         * checking.
         *
         * The locale string typically is in the form lang_COUNTRY, where lang
         * is an ISO-639 language code, and COUNTRY is an ISO-3166 country code.
         * For instance, sv_FI for Swedish as written in Finland or pt_BR
         * for Portuguese as written in Brazil.
         *
         * You need to call this function with a valid list of languages at
         * least once in order to properly enable the spell checking feature
         * in WebKit.
         * @param languages a `null`-terminated list of spell checking languages
         */
        set_spell_checking_languages(languages: string[]): void;
        /**
         * Set the TLS errors policy of `context` as `policy`.
         * @param policy a {@link WebKit2.TLSErrorsPolicy}
         */
        set_tls_errors_policy(policy: TLSErrorsPolicy | null): void;
        /**
         * Set the {@link WebKit2.WebContext.use_system_appearance_for_scrollbars} property.
         * @param enabled value to set
         */
        set_use_system_appearance_for_scrollbars(enabled: boolean): void;
        /**
         * Set the directory where WebKit will look for Web Extensions.
         *
         * This method must be called before loading anything in this context,
         * otherwise it will not have any effect. You can connect to
         * {@link WebKit2.WebContext.SignalSignatures.initialize_web_extensions | WebKit2.WebContext::initialize-web-extensions} to call this method
         * before anything is loaded.
         * @param directory the directory to add
         */
        set_web_extensions_directory(directory: string): void;
        /**
         * Set user data to be passed to Web Extensions on initialization.
         *
         * The data will be passed to the
         * `WebKitWebExtensionInitializeWithUserDataFunction`.
         * This method must be called before loading anything in this context,
         * otherwise it will not have any effect. You can connect to
         * {@link WebKit2.WebContext.SignalSignatures.initialize_web_extensions | WebKit2.WebContext::initialize-web-extensions} to call this method
         * before anything is loaded.
         * @param user_data a {@link GLib.Variant}
         */
        set_web_extensions_initialization_user_data(user_data: GLib.Variant): void;
        /**
         * Sets the maximum number of web processes.
         *
         * Sets the maximum number of web processes that can be created at the same time for the `context`.
         * The default value is 0 and means no limit.
         *
         * This function is now deprecated and does nothing for security reasons.
         * @param limit the maximum number of web processes
         */
        set_web_process_count_limit(limit: number): void;
    }

    namespace WebInspector {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the inspector is requested to be attached to the window
             * where the inspected web view is.
             * If this signal is not handled the inspector view will be automatically
             * attached to the inspected view, so you only need to handle this signal
             * if you want to attach the inspector view yourself (for example, to add
             * the inspector view to a browser tab).
             *
             * To prevent the inspector view from being attached you can connect to this
             * signal and simply return `true`.
             * @signal
             * @run-last
             */
            attach: () => boolean | void;
            /**
             * Emitted when the inspector should be shown.
             *
             * If the inspector is not attached the inspector window should be shown
             * on top of any other windows.
             * If the inspector is attached the inspector view should be made visible.
             * For example, if the inspector view is attached using a tab in a browser
             * window, the browser window should be raised and the tab containing the
             * inspector view should be the active one.
             * In both cases, if this signal is not handled, the default implementation
             * calls `gtk_window_present()` on the current toplevel {@link Gtk.Window} of the
             * inspector view.
             * @signal
             * @run-last
             */
            'bring-to-front': () => boolean | void;
            /**
             * Emitted when the inspector page is closed. If you are using your own
             * inspector window, you should connect to this signal and destroy your
             * window.
             * @signal
             * @run-last
             */
            closed: () => void;
            /**
             * Emitted when the inspector is requested to be detached from the window
             * it is currently attached to. The inspector is detached when the inspector page
             * is about to be closed, and this signal is emitted right before
             * {@link WebKit2.WebInspector.SignalSignatures.closed | WebKit2.WebInspector::closed}, or when the user clicks on the detach button
             * in the inspector view to show the inspector in a separate window. In this case
             * the signal {@link WebKit2.WebInspector.SignalSignatures.open_window | WebKit2.WebInspector::open-window} is emitted after this one.
             *
             * To prevent the inspector view from being detached you can connect to this
             * signal and simply return `true`.
             * @signal
             * @run-last
             */
            detach: () => boolean | void;
            /**
             * Emitted when the inspector is requested to open in a separate window.
             * If this signal is not handled, a {@link Gtk.Window} with the inspector will be
             * created and shown, so you only need to handle this signal if you want
             * to use your own window.
             * This signal is emitted after {@link WebKit2.WebInspector.SignalSignatures.detach | WebKit2.WebInspector::detach} to show
             * the inspector in a separate window after being detached.
             *
             * To prevent the inspector from being shown you can connect to this
             * signal and simply return `true`
             * @signal
             * @run-last
             */
            'open-window': () => boolean | void;
            'notify::attached-height': (pspec: GObject.ParamSpec) => void;
            'notify::can-attach': (pspec: GObject.ParamSpec) => void;
            'notify::inspected-uri': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            attached_height: number;
            attachedHeight: number;
            can_attach: boolean;
            canAttach: boolean;
            inspected_uri: string;
            inspectedUri: string;
        }
    }

    /**
     * Access to the WebKit inspector.
     *
     * The WebKit Inspector is a graphical tool to inspect and change the
     * content of a {@link WebKit2.WebView}. It also includes an interactive
     * JavaScript debugger. Using this class one can get a {@link Gtk.Widget}
     * which can be embedded into an application to show the inspector.
     *
     * The inspector is available when the {@link WebKit2.Settings} of the
     * {@link WebKit2.WebView} has set the {@link WebKit2.Settings.enable_developer_extras}
     * to true, otherwise no inspector is available.
     *
     * ```c
     * // Enable the developer extras
     * WebKitSettings *settings = webkit_web_view_get_settings (WEBKIT_WEB_VIEW(my_webview));
     * g_object_set (G_OBJECT(settings), "enable-developer-extras", TRUE, NULL);
     *
     * // Load some data or reload to be able to inspect the page
     * webkit_web_view_load_uri (WEBKIT_WEB_VIEW(my_webview), "http://www.gnome.org");
     *
     * // Show the inspector
     * WebKitWebInspector *inspector = webkit_web_view_get_inspector (WEBKIT_WEB_VIEW(my_webview));
     * webkit_web_inspector_show (WEBKIT_WEB_INSPECTOR(inspector));
     * ```
     * @gir-type Class
     */
    class WebInspector extends GObject.Object {
        static $gtype: GObject.GType<WebInspector>;

        // Properties

        /**
         * The height that the inspector view should have when it is attached.
         * @read-only
         */
        get attached_height(): number;
        /**
         * The height that the inspector view should have when it is attached.
         * @read-only
         */
        get attachedHeight(): number;
        /**
         * Whether the `inspector` can be attached to the same window that contains
         * the inspected view.
         * @since 2.8
         * @read-only
         */
        get can_attach(): boolean;
        /**
         * Whether the `inspector` can be attached to the same window that contains
         * the inspected view.
         * @since 2.8
         * @read-only
         */
        get canAttach(): boolean;
        /**
         * The URI that is currently being inspected.
         * @read-only
         */
        get inspected_uri(): string;
        /**
         * The URI that is currently being inspected.
         * @read-only
         */
        get inspectedUri(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WebInspector.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WebInspector.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WebInspector.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebInspector.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WebInspector.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebInspector.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WebInspector.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WebInspector.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Request `inspector` to be attached.
         *
         * The signal {@link WebKit2.WebInspector.SignalSignatures.attach | WebKit2.WebInspector::attach}
         * will be emitted. If the inspector is already attached it does nothing.
         */
        attach(): void;
        /**
         * Request `inspector` to be closed.
         */
        close(): void;
        /**
         * Request `inspector` to be detached.
         *
         * The signal {@link WebKit2.WebInspector.SignalSignatures.detach | WebKit2.WebInspector::detach}
         * will be emitted. If the inspector is already detached it does nothing.
         */
        detach(): void;
        /**
         * Get the height that the inspector view when attached.
         *
         * Get the height that the inspector view should have when
         * it's attached. If the inspector view is not attached this
         * returns 0.
         * @returns the height of the inspector view when attached
         */
        get_attached_height(): number;
        /**
         * Whether the `inspector` can be attached to the same window that contains
         * the inspected view.
         * @returns `true` if there is enough room for the inspector view inside the     window that contains the inspected view, or `false` otherwise.
         */
        get_can_attach(): boolean;
        /**
         * Get the URI that is currently being inspected.
         *
         * This can be `null` if
         * nothing has been loaded yet in the inspected view, if the inspector
         * has been closed or when inspected view was loaded from a HTML string
         * instead of a URI.
         * @returns the URI that is currently being inspected or `null`
         */
        get_inspected_uri(): string;
        /**
         * Get the {@link WebKit2.WebViewBase} used to display the inspector.
         *
         * This might be `null` if the inspector hasn't been loaded yet,
         * or it has been closed.
         * @returns the {@link WebKit2.WebViewBase} used to display the inspector or `null`
         */
        get_web_view(): WebViewBase;
        /**
         * Whether the `inspector` view is currently attached to the same window that contains
         * the inspected view.
         * @returns `true` if `inspector` is currently attached or `false` otherwise
         */
        is_attached(): boolean;
        /**
         * Request `inspector` to be shown.
         */
        show(): void;
    }

    namespace WebResource {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This signal is emitted when an error occurs during the resource
             * load operation.
             * @signal
             * @run-last
             */
            failed: (arg0: GLib.Error) => void;
            /**
             * This signal is emitted when a TLS error occurs during the resource load operation.
             * @signal
             * @since 2.8
             * @run-last
             */
            'failed-with-tls-errors': (arg0: Gio.TlsCertificate, arg1: Gio.TlsCertificateFlags) => void;
            /**
             * This signal is emitted when the resource load finishes successfully
             * or due to an error. In case of errors {@link WebKit2.WebResource.SignalSignatures.failed | WebKit2.WebResource::failed} signal
             * is emitted before this one.
             * @signal
             * @run-last
             */
            finished: () => void;
            /**
             * This signal is emitted after response is received,
             * every time new data has been received. It's
             * useful to know the progress of the resource load operation.
             * @signal
             * @run-last
             */
            'received-data': (arg0: number) => void;
            /**
             * This signal is emitted when `request` has been sent to the
             * server. In case of a server redirection this signal is
             * emitted again with the `request` argument containing the new
             * request sent to the server due to the redirection and the
             * `redirected_response` parameter containing the response
             * received by the server for the initial request.
             * @signal
             * @run-last
             */
            'sent-request': (arg0: URIRequest, arg1: URIResponse) => void;
            'notify::response': (pspec: GObject.ParamSpec) => void;
            'notify::uri': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            response: URIResponse;
            uri: string;
        }
    }

    /**
     * Represents a resource at the end of a URI.
     *
     * A {@link WebKit2.WebResource} encapsulates content for each resource at the
     * end of a particular URI. For example, one {@link WebKit2.WebResource} will
     * be created for each separate image and stylesheet when a page is
     * loaded.
     *
     * You can access the response and the URI for a given
     * {@link WebKit2.WebResource}, using `webkit_web_resource_get_uri()` and
     * `webkit_web_resource_get_response()`, as well as the raw data, using
     * `webkit_web_resource_get_data()`.
     * @gir-type Class
     */
    class WebResource extends GObject.Object {
        static $gtype: GObject.GType<WebResource>;

        // Properties

        /**
         * The {@link WebKit2.URIResponse} associated with this resource.
         * @read-only
         */
        get response(): URIResponse;
        /**
         * The current active URI of the {@link WebKit2.WebResource}.
         * See `webkit_web_resource_get_uri()` for more details.
         * @read-only
         */
        get uri(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WebResource.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WebResource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WebResource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebResource.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WebResource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebResource.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WebResource.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WebResource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Asynchronously get the raw data for `resource`.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_web_resource_get_data_finish()` to get the result of the operation.
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         */
        get_data(cancellable?: Gio.Cancellable | null): globalThis.Promise<Uint8Array>;
        /**
         * Asynchronously get the raw data for `resource`.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_web_resource_get_data_finish()` to get the result of the operation.
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_data(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously get the raw data for `resource`.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_web_resource_get_data_finish()` to get the result of the operation.
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_data(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Uint8Array> | void;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
        /**
         * Finish an asynchronous operation started with `webkit_web_resource_get_data()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns a    string with the data of `resource`, or `null` in case of error. if `length`    is not `null`, the size of the data will be assigned to it.
         */
        get_data_finish(result: Gio.AsyncResult): Uint8Array;
        /**
         * Retrieves the {@link WebKit2.URIResponse} of the resource load operation.
         *
         * This method returns `null` if called before the response
         * is received from the server. You can connect to notify::response
         * signal to be notified when the response is received.
         * @returns the {@link WebKit2.URIResponse}, or `null` if     the response hasn't been received yet.
         */
        get_response(): URIResponse;
        /**
         * Returns the current active URI of `resource`.
         *
         * The active URI might change during
         * a load operation:
         *
         * <orderedlist>
         * <listitem><para>
         *   When the resource load starts, the active URI is the requested URI
         * </para></listitem>
         * <listitem><para>
         *   When the initial request is sent to the server, {@link WebKit2.WebResource.SignalSignatures.sent_request | WebKit2.WebResource::sent-request}
         *   signal is emitted without a redirected response, the active URI is the URI of
         *   the request sent to the server.
         * </para></listitem>
         * <listitem><para>
         *   In case of a server redirection, {@link WebKit2.WebResource.SignalSignatures.sent_request | WebKit2.WebResource::sent-request} signal
         *   is emitted again with a redirected response, the active URI is the URI the request
         *   was redirected to.
         * </para></listitem>
         * <listitem><para>
         *   When the response is received from the server, the active URI is the final
         *   one and it will not change again.
         * </para></listitem>
         * </orderedlist>
         *
         * You can monitor the active URI by connecting to the notify::uri
         * signal of `resource`.
         * @returns the current active URI of `resource`
         */
        get_uri(): string;
    }

    namespace WebView {
        // Signal signatures
        interface SignalSignatures extends WebViewBase.SignalSignatures {
            /**
             * This signal is emitted when the user is challenged with HTTP
             * authentication. To let the  application access or supply
             * the credentials as well as to allow the client application
             * to either cancel the request or perform the authentication,
             * the signal will pass an instance of the
             * {@link WebKit2.AuthenticationRequest} in the `request` argument.
             * To handle this signal asynchronously you should keep a ref
             * of the request and return `true`. To disable HTTP authentication
             * entirely, connect to this signal and simply return `true`.
             *
             * The default signal handler will run a default authentication
             * dialog asynchronously for the user to interact with.
             * @signal
             * @since 2.2
             * @run-last
             */
            authenticate: (arg0: AuthenticationRequest) => boolean | void;
            /**
             * Emitted when closing a {@link WebKit2.WebView} is requested. This occurs when a
             * call is made from JavaScript's <function>window.close</function> function or
             * after trying to close the `web_view` with `webkit_web_view_try_close()`.
             * It is the owner's responsibility to handle this signal to hide or
             * destroy the {@link WebKit2.WebView}, if necessary.
             * @signal
             * @run-last
             */
            close: () => void;
            /**
             * Emitted when a context menu is about to be displayed to give the application
             * a chance to customize the proposed menu, prevent the menu from being displayed,
             * or build its own context menu.
             * <itemizedlist>
             * <listitem><para>
             *  To customize the proposed menu you can use `webkit_context_menu_prepend()`,
             *  `webkit_context_menu_append()` or `webkit_context_menu_insert()` to add new
             *  {@link WebKit2.ContextMenuItem}<!-- -->s to `context_menu`, `webkit_context_menu_move_item()`
             *  to reorder existing items, or `webkit_context_menu_remove()` to remove an
             *  existing item. The signal handler should return `false`, and the menu represented
             *  by `context_menu` will be shown.
             * </para></listitem>
             * <listitem><para>
             *  To prevent the menu from being displayed you can just connect to this signal
             *  and return `true` so that the proposed menu will not be shown.
             * </para></listitem>
             * <listitem><para>
             *  To build your own menu, you can remove all items from the proposed menu with
             *  `webkit_context_menu_remove_all()`, add your own items and return `false` so
             *  that the menu will be shown. You can also ignore the proposed {@link WebKit2.ContextMenu},
             *  build your own `GtkMenu` and return `true` to prevent the proposed menu from being shown.
             * </para></listitem>
             * <listitem><para>
             *  If you just want the default menu to be shown always, simply don't connect to this
             *  signal because showing the proposed context menu is the default behaviour.
             * </para></listitem>
             * </itemizedlist>
             *
             * The `event` is expected to be one of the following types:
             * <itemizedlist>
             * <listitem><para>
             * a `GdkEventButton` of type {@link Gdk.EventType.BUTTON_PRESS} when the context menu
             * was triggered with mouse.
             * </para></listitem>
             * <listitem><para>
             * a `GdkEventKey` of type {@link Gdk.EventType.KEY_PRESS} if the keyboard was used to show
             * the menu.
             * </para></listitem>
             * <listitem><para>
             * a generic {@link Gdk.Event} of type `GDK_NOTHING` when the {@link Gtk.Widget.SignalSignatures.popup_menu | Gtk.Widget::popup-menu}
             * signal was used to show the context menu.
             * </para></listitem>
             * </itemizedlist>
             *
             * If the signal handler returns `false` the context menu represented by `context_menu`
             * will be shown, if it return `true` the context menu will not be shown.
             *
             * The proposed {@link WebKit2.ContextMenu} passed in `context_menu` argument is only valid
             * during the signal emission.
             * @signal
             * @run-last
             */
            'context-menu': (arg0: ContextMenu, arg1: Gdk.Event, arg2: HitTestResult) => boolean | void;
            /**
             * Emitted after {@link WebKit2.WebView.SignalSignatures.context_menu | WebKit2.WebView::context-menu} signal, if the context menu is shown,
             * to notify that the context menu is dismissed.
             * @signal
             * @run-last
             */
            'context-menu-dismissed': () => void;
            /**
             * Emitted when the creation of a new {@link WebKit2.WebView} is requested.
             * If this signal is handled the signal handler should return the
             * newly created {@link WebKit2.WebView}.
             *
             * The {@link WebKit2.NavigationAction} parameter contains information about the
             * navigation action that triggered this signal.
             *
             * The new {@link WebKit2.WebView} must be related to `web_view`, see
             * `webkit_web_view_new_with_related_view()` for more details.
             *
             * The new {@link WebKit2.WebView} should not be displayed to the user
             * until the {@link WebKit2.WebView.SignalSignatures.ready_to_show | WebKit2.WebView::ready-to-show} signal is emitted.
             * @signal
             * @run-last
             */
            create: (arg0: NavigationAction) => Gtk.Widget;
            /**
             * This signal is emitted when WebKit is requesting the client to decide a policy
             * decision, such as whether to navigate to a page, open a new window or whether or
             * not to download a resource. The {@link WebKit2.NavigationPolicyDecision} passed in the
             * `decision` argument is a generic type, but should be casted to a more
             * specific type when making the decision. For example:
             *
             * ```c
             * static gboolean
             * decide_policy_cb (WebKitWebView *web_view,
             *                   WebKitPolicyDecision *decision,
             *                   WebKitPolicyDecisionType type)
             * {
             *     switch (type) {
             *     case WEBKIT_POLICY_DECISION_TYPE_NAVIGATION_ACTION: {
             *         WebKitNavigationPolicyDecision *navigation_decision = WEBKIT_NAVIGATION_POLICY_DECISION (decision);
             *         // Make a policy decision here
             *         break;
             *     }
             *     case WEBKIT_POLICY_DECISION_TYPE_NEW_WINDOW_ACTION: {
             *         WebKitNavigationPolicyDecision *navigation_decision = WEBKIT_NAVIGATION_POLICY_DECISION (decision);
             *         // Make a policy decision here
             *         break;
             *     }
             *     case WEBKIT_POLICY_DECISION_TYPE_RESPONSE:
             *         WebKitResponsePolicyDecision *response = WEBKIT_RESPONSE_POLICY_DECISION (decision);
             *         // Make a policy decision here
             *         break;
             *     default:
             *         // Making no decision results in `webkit_policy_decision_use()`
             *         return FALSE;
             *     }
             *     return TRUE;
             * }
             * ```
             *
             * It is possible to make policy decision asynchronously, by simply calling `g_object_ref()`
             * on the `decision` argument and returning `true` to block the default signal handler.
             * If the last reference is removed on a {@link WebKit2.PolicyDecision} and no decision has been
             * made explicitly, `webkit_policy_decision_use()` will be the default policy decision. The
             * default signal handler will simply call `webkit_policy_decision_use()`. Only the first
             * policy decision chosen for a given {@link WebKit2.PolicyDecision} will have any affect.
             * @signal
             * @run-last
             */
            'decide-policy': (arg0: PolicyDecision, arg1: PolicyDecisionType) => boolean | void;
            /**
             * Emitted when JavaScript code calls
             * <function>element.webkitRequestFullScreen</function>. If the
             * signal is not handled the {@link WebKit2.WebView} will proceed to full screen
             * its top level window. This signal can be used by client code to
             * request permission to the user prior doing the full screen
             * transition and eventually prepare the top-level window
             * (e.g. hide some widgets that would otherwise be part of the
             * full screen window).
             * @signal
             * @run-last
             */
            'enter-fullscreen': () => boolean | void;
            /**
             * This signal is emitted when insecure content has been detected
             * in a page loaded through a secure connection. This typically
             * means that a external resource from an unstrusted source has
             * been run or displayed, resulting in a mix of HTTPS and
             * non-HTTPS content.
             *
             * You can check the `event` parameter to know exactly which kind
             * of event has been detected (see {@link WebKit2.InsecureContentEvent}).
             * @signal
             * @run-last
             */
            'insecure-content-detected': (arg0: InsecureContentEvent) => void;
            /**
             * Emitted when the {@link WebKit2.WebView} is about to restore its top level
             * window out of its full screen state. This signal can be used by
             * client code to restore widgets hidden during the
             * {@link WebKit2.WebView.SignalSignatures.enter_fullscreen | WebKit2.WebView::enter-fullscreen} stage for instance.
             * @signal
             * @run-last
             */
            'leave-fullscreen': () => boolean | void;
            /**
             * Emitted when a load operation in `web_view` changes.
             * The signal is always emitted with {@link WebKit2.LoadEvent.STARTED} when a
             * new load request is made and {@link WebKit2.LoadEvent.FINISHED} when the load
             * finishes successfully or due to an error. When the ongoing load
             * operation fails {@link WebKit2.WebView.SignalSignatures.load_failed | WebKit2.WebView::load-failed} signal is emitted
             * before {@link WebKit2.WebView.SignalSignatures.load_changed | WebKit2.WebView::load-changed} is emitted with
             * {@link WebKit2.LoadEvent.FINISHED}.
             * If a redirection is received from the server, this signal is emitted
             * with {@link WebKit2.LoadEvent.REDIRECTED} after the initial emission with
             * {@link WebKit2.LoadEvent.STARTED} and before {@link WebKit2.LoadEvent.COMMITTED}.
             * When the page content starts arriving the signal is emitted with
             * {@link WebKit2.LoadEvent.COMMITTED} event.
             *
             * You can handle this signal and use a switch to track any ongoing
             * load operation.
             *
             * ```c
             * static void web_view_load_changed (WebKitWebView  *web_view,
             *                                    WebKitLoadEvent load_event,
             *                                    gpointer        user_data)
             * {
             *     switch (load_event) {
             *     case WEBKIT_LOAD_STARTED:
             *         // New load, we have now a provisional URI
             *         provisional_uri = webkit_web_view_get_uri (web_view);
             *         // Here we could start a spinner or update the
             *         // location bar with the provisional URI
             *         break;
             *     case WEBKIT_LOAD_REDIRECTED:
             *         redirected_uri = webkit_web_view_get_uri (web_view);
             *         break;
             *     case WEBKIT_LOAD_COMMITTED:
             *         // The load is being performed. Current URI is
             *         // the final one and it won't change unless a new
             *         // load is requested or a navigation within the
             *         // same page is performed
             *         uri = webkit_web_view_get_uri (web_view);
             *         break;
             *     case WEBKIT_LOAD_FINISHED:
             *         // Load finished, we can now stop the spinner
             *         break;
             *     }
             * }
             * ```
             * @signal
             * @run-last
             */
            'load-changed': (arg0: LoadEvent) => void;
            /**
             * Emitted when an error occurs during a load operation.
             * If the error happened when starting to load data for a page
             * `load_event` will be {@link WebKit2.LoadEvent.STARTED}. If it happened while
             * loading a committed data source `load_event` will be {@link WebKit2.LoadEvent.COMMITTED}.
             * Since a load error causes the load operation to finish, the signal
             * WebKitWebView::load-changed will always be emitted with
             * {@link WebKit2.LoadEvent.FINISHED} event right after this one.
             *
             * By default, if the signal is not handled, a stock error page will be displayed.
             * You need to handle the signal if you want to provide your own error page.
             * @signal
             * @run-last
             */
            'load-failed': (arg0: LoadEvent, arg1: string, arg2: GLib.Error) => boolean | void;
            /**
             * Emitted when a TLS error occurs during a load operation.
             * To allow an exception for this `certificate`
             * and the host of `failing_uri` use `webkit_web_context_allow_tls_certificate_for_host()`.
             *
             * To handle this signal asynchronously you should call `g_object_ref()` on `certificate`
             * and return `true`.
             *
             * If `false` is returned, {@link WebKit2.WebView.SignalSignatures.load_failed | WebKit2.WebView::load-failed} will be emitted. The load
             * will finish regardless of the returned value.
             * @signal
             * @since 2.6
             * @run-last
             */
            'load-failed-with-tls-errors': (
                arg0: string,
                arg1: Gio.TlsCertificate,
                arg2: Gio.TlsCertificateFlags,
            ) => boolean | void;
            /**
             * This signal is emitted when the mouse cursor moves over an
             * element such as a link, image or a media element. To determine
             * what type of element the mouse cursor is over, a Hit Test is performed
             * on the current mouse coordinates and the result is passed in the
             * `hit_test_result` argument. The `modifiers` argument is a bitmask of
             * {@link Gdk.ModifierType} flags indicating the state of modifier keys.
             * The signal is emitted again when the mouse is moved out of the
             * current element with a new `hit_test_result`.
             * @signal
             * @run-last
             */
            'mouse-target-changed': (arg0: HitTestResult, arg1: number) => void;
            /**
             * This signal is emitted when WebKit is requesting the client to
             * decide about a permission request, such as allowing the browser
             * to switch to fullscreen mode, sharing its location or similar
             * operations.
             *
             * A possible way to use this signal could be through a dialog
             * allowing the user decide what to do with the request:
             *
             * ```c
             * static gboolean permission_request_cb (WebKitWebView *web_view,
             *                                        WebKitPermissionRequest *request,
             *                                        GtkWindow *parent_window)
             * {
             *     GtkWidget *dialog = gtk_message_dialog_new (parent_window,
             *                                                 GTK_DIALOG_MODAL,
             *                                                 GTK_MESSAGE_QUESTION,
             *                                                 GTK_BUTTONS_YES_NO,
             *                                                 "Allow Permission Request?");
             *     gtk_widget_show (dialog);
             *     gint result = gtk_dialog_run (GTK_DIALOG (dialog));
             *
             *     switch (result) {
             *     case GTK_RESPONSE_YES:
             *         webkit_permission_request_allow (request);
             *         break;
             *     default:
             *         webkit_permission_request_deny (request);
             *         break;
             *     }
             *     gtk_widget_destroy (dialog);
             *
             *     return TRUE;
             * }
             * ```
             *
             * It is possible to handle permission requests asynchronously, by
             * simply calling `g_object_ref()` on the `request` argument and
             * returning `true` to block the default signal handler.  If the
             * last reference is removed on a {@link WebKit2.PermissionRequest} and the
             * request has not been handled, `webkit_permission_request_deny()`
             * will be the default action.
             *
             * If the signal is not handled, the `request` will be completed automatically
             * by the specific {@link WebKit2.PermissionRequest} that could allow or deny it. Check the
             * documentation of classes implementing {@link WebKit2.PermissionRequest} interface to know
             * their default action.
             * @signal
             * @run-last
             */
            'permission-request': (arg0: PermissionRequest) => boolean | void;
            /**
             * Emitted when printing is requested on `web_view`, usually by a JavaScript call,
             * before the print dialog is shown. This signal can be used to set the initial
             * print settings and page setup of `print_operation` to be used as default values in
             * the print dialog. You can call `webkit_print_operation_set_print_settings()` and
             * `webkit_print_operation_set_page_setup()` and then return `false` to propagate the
             * event so that the print dialog is shown.
             *
             * You can connect to this signal and return `true` to cancel the print operation
             * or implement your own print dialog.
             * @signal
             * @run-last
             */
            print: (arg0: PrintOperation) => boolean | void;
            /**
             * Emitted after {@link WebKit2.WebView.SignalSignatures.create | WebKit2.WebView::create} on the newly created {@link WebKit2.WebView}
             * when it should be displayed to the user. When this signal is emitted
             * all the information about how the window should look, including
             * size, position, whether the location, status and scrollbars
             * should be displayed, is already set on the {@link WebKit2.WindowProperties}
             * of `web_view`. See also `webkit_web_view_get_window_properties()`.
             * @signal
             * @run-last
             */
            'ready-to-show': () => void;
            /**
             * Emitted when a new resource is going to be loaded. The `request` parameter
             * contains the {@link WebKit2.URIRequest} that will be sent to the server.
             * You can monitor the load operation by connecting to the different signals
             * of `resource`.
             * @signal
             * @run-last
             */
            'resource-load-started': (arg0: WebResource, arg1: URIRequest) => void;
            /**
             * Emitted after {@link WebKit2.WebView.SignalSignatures.ready_to_show | WebKit2.WebView::ready-to-show} on the newly
             * created {@link WebKit2.WebView} when JavaScript code calls
             * <function>window.showModalDialog</function>. The purpose of
             * this signal is to allow the client application to prepare the
             * new view to behave as modal. Once the signal is emitted a new
             * main loop will be run to block user interaction in the parent
             * {@link WebKit2.WebView} until the new dialog is closed.
             * @signal
             * @run-last
             */
            'run-as-modal': () => void;
            /**
             * This signal is emitted when the user interacts with a <input
             * type='color' /> HTML element, requesting from WebKit to show
             * a dialog to select a color. To let the application know the details of
             * the color chooser, as well as to allow the client application to either
             * cancel the request or perform an actual color selection, the signal will
             * pass an instance of the {@link WebKit2.ColorChooserRequest} in the `request`
             * argument.
             *
             * It is possible to handle this request asynchronously by increasing the
             * reference count of the request.
             *
             * The default signal handler will asynchronously run a regular
             * {@link Gtk.ColorChooser} for the user to interact with.
             * @signal
             * @since 2.8
             * @run-last
             */
            'run-color-chooser': (arg0: ColorChooserRequest) => boolean | void;
            /**
             * This signal is emitted when the user interacts with a <input
             * type='file' /> HTML element, requesting from WebKit to show
             * a dialog to select one or more files to be uploaded. To let the
             * application know the details of the file chooser, as well as to
             * allow the client application to either cancel the request or
             * perform an actual selection of files, the signal will pass an
             * instance of the {@link WebKit2.FileChooserRequest} in the `request`
             * argument.
             *
             * The default signal handler will asynchronously run a regular
             * {@link Gtk.FileChooserDialog} for the user to interact with.
             * @signal
             * @run-last
             */
            'run-file-chooser': (arg0: FileChooserRequest) => boolean | void;
            /**
             * Emitted when JavaScript code calls <function>window.alert</function>,
             * <function>window.confirm</function> or <function>window.prompt</function>,
             * or when <function>onbeforeunload</function> event is fired.
             * The `dialog` parameter should be used to build the dialog.
             * If the signal is not handled a different dialog will be built and shown depending
             * on the dialog type:
             * <itemizedlist>
             * <listitem><para>
             *  {@link WebKit2.ScriptDialogType.ALERT}: message dialog with a single Close button.
             * </para></listitem>
             * <listitem><para>
             *  {@link WebKit2.ScriptDialogType.CONFIRM}: message dialog with OK and Cancel buttons.
             * </para></listitem>
             * <listitem><para>
             *  {@link WebKit2.ScriptDialogType.PROMPT}: message dialog with OK and Cancel buttons and
             *  a text entry with the default text.
             * </para></listitem>
             * <listitem><para>
             *  {@link WebKit2.ScriptDialogType.BEFORE_UNLOAD_CONFIRM}: message dialog with Stay and Leave buttons.
             * </para></listitem>
             * </itemizedlist>
             *
             * It is possible to handle the script dialog request asynchronously, by simply
             * caling `webkit_script_dialog_ref()` on the `dialog` argument and calling
             * `webkit_script_dialog_close()` when done.
             * If the last reference is removed on a {@link WebKit2.ScriptDialog} and the dialog has not been
             * closed, `webkit_script_dialog_close()` will be called.
             * @signal
             * @run-last
             */
            'script-dialog': (arg0: ScriptDialog) => boolean | void;
            /**
             * This signal is emitted when a notification should be presented to the
             * user. The `notification` is kept alive until either: 1) the web page cancels it
             * or 2) a navigation happens.
             *
             * The default handler will emit a notification using libnotify, if built with
             * support for it.
             * @signal
             * @since 2.8
             * @run-last
             */
            'show-notification': (arg0: Notification) => boolean | void;
            /**
             * This signal is emitted when a select element in `web_view` needs to display a
             * dropdown menu. This signal can be used to show a custom menu, using `menu` to get
             * the details of all items that should be displayed. The area of the element in the
             * {@link WebKit2.WebView} is given as `rectangle` parameter, it can be used to position the
             * menu. If this was triggered by a user interaction, like a mouse click,
             * `event` parameter provides the {@link Gdk.Event}.
             * To handle this signal asynchronously you should keep a ref of the `menu`.
             *
             * The default signal handler will pop up a `GtkMenu`.
             * @signal
             * @since 2.18
             * @run-last
             */
            'show-option-menu': (arg0: OptionMenu, arg1: Gdk.Event, arg2: Gdk.Rectangle) => boolean | void;
            /**
             * This signal is emitted when a form is about to be submitted. The `request`
             * argument passed contains information about the text fields of the form. This
             * is typically used to store login information that can be used later to
             * pre-fill the form.
             * The form will not be submitted until `webkit_form_submission_request_submit()` is called.
             *
             * It is possible to handle the form submission request asynchronously, by
             * simply calling `g_object_ref()` on the `request` argument and calling
             * `webkit_form_submission_request_submit()` when done to continue with the form submission.
             * If the last reference is removed on a {@link WebKit2.FormSubmissionRequest} and the
             * form has not been submitted, `webkit_form_submission_request_submit()` will be called.
             * @signal
             * @run-last
             */
            'submit-form': (arg0: FormSubmissionRequest) => void;
            /**
             * This signal is emitted when a {@link WebKit2.UserMessage} is received from the
             * `WebKitWebPage` corresponding to `web_view`. You can reply to the message
             * using `webkit_user_message_send_reply()`.
             *
             * You can handle the user message asynchronously by calling `g_object_ref()` on
             * `message` and returning `true`. If the last reference of `message` is removed
             * and the message has not been replied to, the operation in the `WebKitWebPage` will
             * finish with error {@link WebKit2.UserMessageError.MESSAGE}.
             * @signal
             * @since 2.28
             * @run-last
             */
            'user-message-received': (arg0: UserMessage) => boolean | void;
            /**
             * This signal is emitted when the web process crashes.
             * @signal
             * @deprecated since 2.20: Use WebKitWebView::web-process-terminated instead.
             * @run-last
             */
            'web-process-crashed': () => boolean | void;
            /**
             * This signal is emitted when the web process terminates abnormally due
             * to `reason`.
             * @signal
             * @since 2.20
             * @run-last
             */
            'web-process-terminated': (arg0: WebProcessTerminationReason) => void;
            'notify::automation-presentation-type': (pspec: GObject.ParamSpec) => void;
            'notify::camera-capture-state': (pspec: GObject.ParamSpec) => void;
            'notify::default-content-security-policy': (pspec: GObject.ParamSpec) => void;
            'notify::display-capture-state': (pspec: GObject.ParamSpec) => void;
            'notify::editable': (pspec: GObject.ParamSpec) => void;
            'notify::estimated-load-progress': (pspec: GObject.ParamSpec) => void;
            'notify::favicon': (pspec: GObject.ParamSpec) => void;
            'notify::is-controlled-by-automation': (pspec: GObject.ParamSpec) => void;
            'notify::is-ephemeral': (pspec: GObject.ParamSpec) => void;
            'notify::is-loading': (pspec: GObject.ParamSpec) => void;
            'notify::is-muted': (pspec: GObject.ParamSpec) => void;
            'notify::is-playing-audio': (pspec: GObject.ParamSpec) => void;
            'notify::is-web-process-responsive': (pspec: GObject.ParamSpec) => void;
            'notify::microphone-capture-state': (pspec: GObject.ParamSpec) => void;
            'notify::page-id': (pspec: GObject.ParamSpec) => void;
            'notify::related-view': (pspec: GObject.ParamSpec) => void;
            'notify::settings': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::uri': (pspec: GObject.ParamSpec) => void;
            'notify::user-content-manager': (pspec: GObject.ParamSpec) => void;
            'notify::web-context': (pspec: GObject.ParamSpec) => void;
            'notify::web-extension-mode': (pspec: GObject.ParamSpec) => void;
            'notify::website-policies': (pspec: GObject.ParamSpec) => void;
            'notify::zoom-level': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                WebViewBase.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {
            automation_presentation_type: AutomationBrowsingContextPresentation;
            automationPresentationType: AutomationBrowsingContextPresentation;
            camera_capture_state: MediaCaptureState;
            cameraCaptureState: MediaCaptureState;
            default_content_security_policy: string;
            defaultContentSecurityPolicy: string;
            display_capture_state: MediaCaptureState;
            displayCaptureState: MediaCaptureState;
            editable: boolean;
            estimated_load_progress: number;
            estimatedLoadProgress: number;
            favicon: any;
            is_controlled_by_automation: boolean;
            isControlledByAutomation: boolean;
            is_ephemeral: boolean;
            isEphemeral: boolean;
            is_loading: boolean;
            isLoading: boolean;
            is_muted: boolean;
            isMuted: boolean;
            is_playing_audio: boolean;
            isPlayingAudio: boolean;
            is_web_process_responsive: boolean;
            isWebProcessResponsive: boolean;
            microphone_capture_state: MediaCaptureState;
            microphoneCaptureState: MediaCaptureState;
            page_id: number;
            pageId: number;
            related_view: WebView;
            relatedView: WebView;
            settings: Settings;
            title: string;
            uri: string;
            user_content_manager: UserContentManager;
            userContentManager: UserContentManager;
            web_context: WebContext;
            webContext: WebContext;
            web_extension_mode: WebExtensionMode;
            webExtensionMode: WebExtensionMode;
            website_policies: WebsitePolicies;
            websitePolicies: WebsitePolicies;
            zoom_level: number;
            zoomLevel: number;
        }
    }

    /**
     * The central class of the WPE WebKit and WebKitGTK APIs.
     *
     * {@link WebKit2.WebView} is the central class of the WPE WebKit and WebKitGTK
     * APIs. It is responsible for managing the drawing of the content and
     * forwarding of events. You can load any URI into the {@link WebKit2.WebView} or
     * a data string. With {@link WebKit2.Settings} you can control various aspects
     * of the rendering and loading of the content.
     *
     * Note that in WebKitGTK, {@link WebKit2.WebView} is scrollable by itself, so
     * you don't need to embed it in a {@link Gtk.ScrolledWindow}.
     * @gir-type Class
     */
    class WebView extends WebViewBase implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<WebView>;

        // Properties

        /**
         * The {@link WebKit2.AutomationBrowsingContextPresentation} of {@link WebKit2.WebView}. This should only be used when
         * creating a new {@link WebKit2.WebView} as a response to {@link WebKit2.AutomationSession.SignalSignatures.create_web_view | WebKit2.AutomationSession::create-web-view}
         * signal request. If the new WebView was added to a new tab of current browsing context window
         * {@link WebKit2.AutomationBrowsingContextPresentation.TAB} should be used.
         * @since 2.28
         * @construct-only
         */
        get automation_presentation_type(): AutomationBrowsingContextPresentation;
        /**
         * The {@link WebKit2.AutomationBrowsingContextPresentation} of {@link WebKit2.WebView}. This should only be used when
         * creating a new {@link WebKit2.WebView} as a response to {@link WebKit2.AutomationSession.SignalSignatures.create_web_view | WebKit2.AutomationSession::create-web-view}
         * signal request. If the new WebView was added to a new tab of current browsing context window
         * {@link WebKit2.AutomationBrowsingContextPresentation.TAB} should be used.
         * @since 2.28
         * @construct-only
         */
        get automationPresentationType(): AutomationBrowsingContextPresentation;
        /**
         * Capture state of the camera device. Whenever the user grants a media-request sent by the web
         * page, requesting video capture capabilities (`navigator.mediaDevices.getUserMedia({video:
         * true})`) this property will be set to {@link WebKit2.MediaCaptureState.ACTIVE}.
         *
         * The application can monitor this property and provide a visual indicator allowing to optionally
         * deactivate or mute the capture device by setting this property respectively to
         * {@link WebKit2.MediaCaptureState.NONE} or {@link WebKit2.MediaCaptureState.MUTED}.
         *
         * If the capture state of the device is set to {@link WebKit2.MediaCaptureState.NONE} the web-page
         * can still re-request the permission to the user. Permission desision caching is left to the
         * application.
         * @since 2.34
         */
        get camera_capture_state(): MediaCaptureState;
        set camera_capture_state(val: MediaCaptureState);
        /**
         * Capture state of the camera device. Whenever the user grants a media-request sent by the web
         * page, requesting video capture capabilities (`navigator.mediaDevices.getUserMedia({video:
         * true})`) this property will be set to {@link WebKit2.MediaCaptureState.ACTIVE}.
         *
         * The application can monitor this property and provide a visual indicator allowing to optionally
         * deactivate or mute the capture device by setting this property respectively to
         * {@link WebKit2.MediaCaptureState.NONE} or {@link WebKit2.MediaCaptureState.MUTED}.
         *
         * If the capture state of the device is set to {@link WebKit2.MediaCaptureState.NONE} the web-page
         * can still re-request the permission to the user. Permission desision caching is left to the
         * application.
         * @since 2.34
         */
        get cameraCaptureState(): MediaCaptureState;
        set cameraCaptureState(val: MediaCaptureState);
        /**
         * The default Content-Security-Policy used by the webview as if it were set
         * by an HTTP header.
         *
         * This applies to all content loaded including through navigation or via the various
         * webkit_web_view_load_\* APIs. However do note that many WebKit APIs bypass
         * Content-Security-Policy in general such as {@link WebKit2.UserContentManager} and
         * `webkit_web_view_run_javascript()`.
         *
         * Policies are additive so if a website sets its own policy it still applies
         * on top of the policy set here.
         * @since 2.38
         * @construct-only
         */
        get default_content_security_policy(): string;
        /**
         * The default Content-Security-Policy used by the webview as if it were set
         * by an HTTP header.
         *
         * This applies to all content loaded including through navigation or via the various
         * webkit_web_view_load_\* APIs. However do note that many WebKit APIs bypass
         * Content-Security-Policy in general such as {@link WebKit2.UserContentManager} and
         * `webkit_web_view_run_javascript()`.
         *
         * Policies are additive so if a website sets its own policy it still applies
         * on top of the policy set here.
         * @since 2.38
         * @construct-only
         */
        get defaultContentSecurityPolicy(): string;
        /**
         * Capture state of the display device. Whenever the user grants a media-request sent by the web
         * page, requesting screencasting capabilities (`navigator.mediaDevices.getDisplayMedia() this
         * property will be set to {@link WebKit2.MediaCaptureState.ACTIVE}.
         *
         * The application can monitor this property and provide a visual indicator allowing to
         * optionally deactivate or mute the capture device by setting this property respectively to
         * {@link WebKit2.MediaCaptureState.NONE} or {@link WebKit2.MediaCaptureState.MUTED}.
         *
         * If the capture state of the device is set to {@link WebKit2.MediaCaptureState.NONE} the web-page
         * can still re-request the permission to the user. Permission desision caching is left to the
         * application.
         * @since 2.34
         */
        get display_capture_state(): MediaCaptureState;
        set display_capture_state(val: MediaCaptureState);
        /**
         * Capture state of the display device. Whenever the user grants a media-request sent by the web
         * page, requesting screencasting capabilities (`navigator.mediaDevices.getDisplayMedia() this
         * property will be set to {@link WebKit2.MediaCaptureState.ACTIVE}.
         *
         * The application can monitor this property and provide a visual indicator allowing to
         * optionally deactivate or mute the capture device by setting this property respectively to
         * {@link WebKit2.MediaCaptureState.NONE} or {@link WebKit2.MediaCaptureState.MUTED}.
         *
         * If the capture state of the device is set to {@link WebKit2.MediaCaptureState.NONE} the web-page
         * can still re-request the permission to the user. Permission desision caching is left to the
         * application.
         * @since 2.34
         */
        get displayCaptureState(): MediaCaptureState;
        set displayCaptureState(val: MediaCaptureState);
        /**
         * Whether the pages loaded inside {@link WebKit2.WebView} are editable. For more
         * information see `webkit_web_view_set_editable()`.
         * @since 2.8
         */
        get editable(): boolean;
        set editable(val: boolean);
        /**
         * An estimate of the percent completion for the current loading operation.
         * This value will range from 0.0 to 1.0 and, once a load completes,
         * will remain at 1.0 until a new load starts, at which point it
         * will be reset to 0.0.
         * The value is an estimate based on the total number of bytes expected
         * to be received for a document, including all its possible subresources
         * and child documents.
         * @read-only
         */
        get estimated_load_progress(): number;
        /**
         * An estimate of the percent completion for the current loading operation.
         * This value will range from 0.0 to 1.0 and, once a load completes,
         * will remain at 1.0 until a new load starts, at which point it
         * will be reset to 0.0.
         * The value is an estimate based on the total number of bytes expected
         * to be received for a document, including all its possible subresources
         * and child documents.
         * @read-only
         */
        get estimatedLoadProgress(): number;
        /**
         * The favicon currently associated to the {@link WebKit2.WebView}.
         * See `webkit_web_view_get_favicon()` for more details.
         * @read-only
         */
        get favicon(): any;
        /**
         * Whether the {@link WebKit2.WebView} is controlled by automation. This should only be used when
         * creating a new {@link WebKit2.WebView} as a response to {@link WebKit2.AutomationSession.SignalSignatures.create_web_view | WebKit2.AutomationSession::create-web-view}
         * signal request.
         * @since 2.18
         * @construct-only
         */
        get is_controlled_by_automation(): boolean;
        /**
         * Whether the {@link WebKit2.WebView} is controlled by automation. This should only be used when
         * creating a new {@link WebKit2.WebView} as a response to {@link WebKit2.AutomationSession.SignalSignatures.create_web_view | WebKit2.AutomationSession::create-web-view}
         * signal request.
         * @since 2.18
         * @construct-only
         */
        get isControlledByAutomation(): boolean;
        /**
         * Whether the {@link WebKit2.WebView} is ephemeral. An ephemeral web view never writes
         * website data to the client storage, no matter what {@link WebKit2.WebsiteDataManager}
         * its context is using. This is normally used to implement private browsing mode.
         * This is a {@link GObject.ParamFlags.CONSTRUCT_ONLY} property, so you have to create an ephemeral
         * {@link WebKit2.WebView} and it can't be changed. The ephemeral {@link WebKit2.WebsiteDataManager}
         * created for the {@link WebKit2.WebView} will inherit the network settings from the
         * {@link WebKit2.WebContext}<!-- -->'s {@link WebKit2.WebsiteDataManager}. To use different settings
         * you can get the {@link WebKit2.WebsiteDataManager} with `webkit_web_view_get_website_data_manager()`
         * and set the new ones.
         * Note that all {@link WebKit2.WebView}<!-- -->s created with an ephemeral {@link WebKit2.WebContext}
         * will be ephemeral automatically.
         * See also `webkit_web_context_new_ephemeral()`.
         * @since 2.16
         * @construct-only
         */
        get is_ephemeral(): boolean;
        /**
         * Whether the {@link WebKit2.WebView} is ephemeral. An ephemeral web view never writes
         * website data to the client storage, no matter what {@link WebKit2.WebsiteDataManager}
         * its context is using. This is normally used to implement private browsing mode.
         * This is a {@link GObject.ParamFlags.CONSTRUCT_ONLY} property, so you have to create an ephemeral
         * {@link WebKit2.WebView} and it can't be changed. The ephemeral {@link WebKit2.WebsiteDataManager}
         * created for the {@link WebKit2.WebView} will inherit the network settings from the
         * {@link WebKit2.WebContext}<!-- -->'s {@link WebKit2.WebsiteDataManager}. To use different settings
         * you can get the {@link WebKit2.WebsiteDataManager} with `webkit_web_view_get_website_data_manager()`
         * and set the new ones.
         * Note that all {@link WebKit2.WebView}<!-- -->s created with an ephemeral {@link WebKit2.WebContext}
         * will be ephemeral automatically.
         * See also `webkit_web_context_new_ephemeral()`.
         * @since 2.16
         * @construct-only
         */
        get isEphemeral(): boolean;
        /**
         * Whether the {@link WebKit2.WebView} is currently loading a page. This property becomes
         * `true` as soon as a new load operation is requested and before the
         * {@link WebKit2.WebView.SignalSignatures.load_changed | WebKit2.WebView::load-changed} signal is emitted with {@link WebKit2.LoadEvent.STARTED} and
         * at that point the active URI is the requested one.
         * When the load operation finishes the property is set to `false` before
         * {@link WebKit2.WebView.SignalSignatures.load_changed | WebKit2.WebView::load-changed} is emitted with {@link WebKit2.LoadEvent.FINISHED}.
         * @read-only
         */
        get is_loading(): boolean;
        /**
         * Whether the {@link WebKit2.WebView} is currently loading a page. This property becomes
         * `true` as soon as a new load operation is requested and before the
         * {@link WebKit2.WebView.SignalSignatures.load_changed | WebKit2.WebView::load-changed} signal is emitted with {@link WebKit2.LoadEvent.STARTED} and
         * at that point the active URI is the requested one.
         * When the load operation finishes the property is set to `false` before
         * {@link WebKit2.WebView.SignalSignatures.load_changed | WebKit2.WebView::load-changed} is emitted with {@link WebKit2.LoadEvent.FINISHED}.
         * @read-only
         */
        get isLoading(): boolean;
        /**
         * Whether the {@link WebKit2.WebView} audio is muted. When `true`, audio is silenced.
         * It may still be playing, i.e. {@link WebKit2.WebView.is_playing_audio} may be `true`.
         * @since 2.30
         */
        get is_muted(): boolean;
        set is_muted(val: boolean);
        /**
         * Whether the {@link WebKit2.WebView} audio is muted. When `true`, audio is silenced.
         * It may still be playing, i.e. {@link WebKit2.WebView.is_playing_audio} may be `true`.
         * @since 2.30
         */
        get isMuted(): boolean;
        set isMuted(val: boolean);
        /**
         * Whether the {@link WebKit2.WebView} is currently playing audio from a page.
         * This property becomes `true` as soon as web content starts playing any
         * kind of audio. When a page is no longer playing any kind of sound,
         * the property is set back to `false`.
         * @since 2.8
         * @read-only
         */
        get is_playing_audio(): boolean;
        /**
         * Whether the {@link WebKit2.WebView} is currently playing audio from a page.
         * This property becomes `true` as soon as web content starts playing any
         * kind of audio. When a page is no longer playing any kind of sound,
         * the property is set back to `false`.
         * @since 2.8
         * @read-only
         */
        get isPlayingAudio(): boolean;
        /**
         * Whether the web process currently associated to the {@link WebKit2.WebView} is responsive.
         * @since 2.34
         * @read-only
         */
        get is_web_process_responsive(): boolean;
        /**
         * Whether the web process currently associated to the {@link WebKit2.WebView} is responsive.
         * @since 2.34
         * @read-only
         */
        get isWebProcessResponsive(): boolean;
        /**
         * Capture state of the microphone device. Whenever the user grants a media-request sent by the web
         * page, requesting audio capture capabilities (`navigator.mediaDevices.getUserMedia({audio:
         * true})`) this property will be set to {@link WebKit2.MediaCaptureState.ACTIVE}.
         *
         * The application can monitor this property and provide a visual indicator allowing to
         * optionally deactivate or mute the capture device by setting this property respectively to
         * {@link WebKit2.MediaCaptureState.NONE} or {@link WebKit2.MediaCaptureState.MUTED}.
         *
         * If the capture state of the device is set to {@link WebKit2.MediaCaptureState.NONE} the web-page
         * can still re-request the permission to the user. Permission desision caching is left to the
         * application.
         * @since 2.34
         */
        get microphone_capture_state(): MediaCaptureState;
        set microphone_capture_state(val: MediaCaptureState);
        /**
         * Capture state of the microphone device. Whenever the user grants a media-request sent by the web
         * page, requesting audio capture capabilities (`navigator.mediaDevices.getUserMedia({audio:
         * true})`) this property will be set to {@link WebKit2.MediaCaptureState.ACTIVE}.
         *
         * The application can monitor this property and provide a visual indicator allowing to
         * optionally deactivate or mute the capture device by setting this property respectively to
         * {@link WebKit2.MediaCaptureState.NONE} or {@link WebKit2.MediaCaptureState.MUTED}.
         *
         * If the capture state of the device is set to {@link WebKit2.MediaCaptureState.NONE} the web-page
         * can still re-request the permission to the user. Permission desision caching is left to the
         * application.
         * @since 2.34
         */
        get microphoneCaptureState(): MediaCaptureState;
        set microphoneCaptureState(val: MediaCaptureState);
        /**
         * The identifier of the `WebKitWebPage` corresponding to the {@link WebKit2.WebView}.
         * @since 2.28
         * @read-only
         */
        get page_id(): number;
        /**
         * The identifier of the `WebKitWebPage` corresponding to the {@link WebKit2.WebView}.
         * @since 2.28
         * @read-only
         */
        get pageId(): number;
        /**
         * The related {@link WebKit2.WebView} used when creating the view to share the
         * same web process. This property is not readable because the related
         * web view is only valid during the object construction.
         * @since 2.4
         * @construct-only
         */
        set related_view(val: WebView);
        /**
         * The related {@link WebKit2.WebView} used when creating the view to share the
         * same web process. This property is not readable because the related
         * web view is only valid during the object construction.
         * @since 2.4
         * @construct-only
         */
        set relatedView(val: WebView);
        /**
         * The {@link WebKit2.Settings} of the view.
         * @since 2.6
         * @write-only
         */
        set settings(val: Settings);
        /**
         * The main frame document title of this {@link WebKit2.WebView}. If
         * the title has not been received yet, it will be `null`.
         * @read-only
         */
        get title(): string;
        /**
         * The current active URI of the {@link WebKit2.WebView}.
         * See `webkit_web_view_get_uri()` for more details.
         * @read-only
         */
        get uri(): string;
        /**
         * The {@link WebKit2.UserContentManager} of the view.
         * @since 2.6
         * @construct-only
         */
        get user_content_manager(): UserContentManager;
        /**
         * The {@link WebKit2.UserContentManager} of the view.
         * @since 2.6
         * @construct-only
         */
        get userContentManager(): UserContentManager;
        /**
         * The {@link WebKit2.WebContext} of the view.
         * @construct-only
         */
        get web_context(): WebContext;
        /**
         * The {@link WebKit2.WebContext} of the view.
         * @construct-only
         */
        get webContext(): WebContext;
        /**
         * This configures `web_view` to treat the content as a WebExtension.
         *
         * Note that this refers to the web standard [WebExtensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
         * and not WebKitWebExtensions.
         *
         * In practice this limits the Content-Security-Policies that are allowed to be set. Some details can be found in
         * [Chrome's documentation](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-migration/#content-security-policy).
         * @since 2.38
         * @construct-only
         */
        get web_extension_mode(): WebExtensionMode;
        /**
         * This configures `web_view` to treat the content as a WebExtension.
         *
         * Note that this refers to the web standard [WebExtensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
         * and not WebKitWebExtensions.
         *
         * In practice this limits the Content-Security-Policies that are allowed to be set. Some details can be found in
         * [Chrome's documentation](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-migration/#content-security-policy).
         * @since 2.38
         * @construct-only
         */
        get webExtensionMode(): WebExtensionMode;
        /**
         * The {@link WebKit2.WebsitePolicies} for the view.
         * @since 2.30
         * @construct-only
         */
        get website_policies(): WebsitePolicies;
        /**
         * The {@link WebKit2.WebsitePolicies} for the view.
         * @since 2.30
         * @construct-only
         */
        get websitePolicies(): WebsitePolicies;
        /**
         * The zoom level of the {@link WebKit2.WebView} content.
         * See `webkit_web_view_set_zoom_level()` for more details.
         */
        get zoom_level(): number;
        set zoom_level(val: number);
        /**
         * The zoom level of the {@link WebKit2.WebView} content.
         * See `webkit_web_view_set_zoom_level()` for more details.
         */
        get zoomLevel(): number;
        set zoomLevel(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WebView.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WebView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): WebView;

        static new_with_context(context: WebContext): WebView;

        static new_with_related_view(web_view: WebView): WebView;

        static new_with_settings(settings: Settings): WebView;

        static new_with_user_content_manager(user_content_manager: UserContentManager): WebView;

        // Signals

        /** @signal */
        connect<K extends keyof WebView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebView.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WebView.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebView.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WebView.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WebView.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param request
         * @virtual
         */
        vfunc_authenticate(request: AuthenticationRequest): boolean;
        /**
         * @virtual
         */
        vfunc_close(): void;
        /**
         * @param context_menu
         * @param event
         * @param hit_test_result
         * @virtual
         */
        vfunc_context_menu(context_menu: ContextMenu, event: Gdk.Event, hit_test_result: HitTestResult): boolean;
        /**
         * @virtual
         */
        vfunc_context_menu_dismissed(): void;
        /**
         * @param decision
         * @param type
         * @virtual
         */
        vfunc_decide_policy(decision: PolicyDecision, type: PolicyDecisionType): boolean;
        /**
         * @virtual
         */
        vfunc_enter_fullscreen(): boolean;
        /**
         * @param event
         * @virtual
         */
        vfunc_insecure_content_detected(event: InsecureContentEvent): void;
        /**
         * @virtual
         */
        vfunc_leave_fullscreen(): boolean;
        /**
         * @param load_event
         * @virtual
         */
        vfunc_load_changed(load_event: LoadEvent): void;
        /**
         * @param load_event
         * @param failing_uri
         * @param error
         * @virtual
         */
        vfunc_load_failed(load_event: LoadEvent, failing_uri: string, error: GLib.Error): boolean;
        /**
         * @param failing_uri
         * @param certificate
         * @param errors
         * @virtual
         */
        vfunc_load_failed_with_tls_errors(
            failing_uri: string,
            certificate: Gio.TlsCertificate,
            errors: Gio.TlsCertificateFlags,
        ): boolean;
        /**
         * @param hit_test_result
         * @param modifiers
         * @virtual
         */
        vfunc_mouse_target_changed(hit_test_result: HitTestResult, modifiers: number): void;
        /**
         * @param permission_request
         * @virtual
         */
        vfunc_permission_request(permission_request: PermissionRequest): boolean;
        /**
         * @param print_operation
         * @virtual
         */
        vfunc_print(print_operation: PrintOperation): boolean;
        /**
         * @virtual
         */
        vfunc_ready_to_show(): void;
        /**
         * @param resource
         * @param request
         * @virtual
         */
        vfunc_resource_load_started(resource: WebResource, request: URIRequest): void;
        /**
         * @virtual
         */
        vfunc_run_as_modal(): void;
        /**
         * @param request
         * @virtual
         */
        vfunc_run_color_chooser(request: ColorChooserRequest): boolean;
        /**
         * @param request
         * @virtual
         */
        vfunc_run_file_chooser(request: FileChooserRequest): boolean;
        /**
         * @param dialog
         * @virtual
         */
        vfunc_script_dialog(dialog: ScriptDialog): boolean;
        /**
         * @param notification
         * @virtual
         */
        vfunc_show_notification(notification: Notification): boolean;
        /**
         * @param rectangle
         * @param menu
         * @virtual
         */
        vfunc_show_option_menu(rectangle: Gdk.Rectangle, menu: OptionMenu): boolean;
        /**
         * @param request
         * @virtual
         */
        vfunc_submit_form(request: FormSubmissionRequest): void;
        /**
         * @param message
         * @virtual
         */
        vfunc_user_message_received(message: UserMessage): boolean;
        /**
         * @virtual
         */
        vfunc_web_process_crashed(): boolean;
        /**
         * @param reason
         * @virtual
         */
        vfunc_web_process_terminated(reason: WebProcessTerminationReason): void;

        // Methods

        /**
         * Asynchronously check if it is possible to execute the given editing command.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_web_view_can_execute_editing_command_finish()` to get the result of the operation.
         * @param command the command to check
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         */
        can_execute_editing_command(command: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously check if it is possible to execute the given editing command.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_web_view_can_execute_editing_command_finish()` to get the result of the operation.
         * @param command the command to check
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        can_execute_editing_command(
            command: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously check if it is possible to execute the given editing command.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_web_view_can_execute_editing_command_finish()` to get the result of the operation.
         * @param command the command to check
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        can_execute_editing_command(
            command: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finish an asynchronous operation started with `webkit_web_view_can_execute_editing_command()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if the editing command can be executed or `false` otherwise
         */
        can_execute_editing_command_finish(result: Gio.AsyncResult): boolean;
        /**
         * Determines whether `web_view` has a previous history item.
         * @returns `true` if able to move back or `false` otherwise.
         */
        can_go_back(): boolean;
        /**
         * Determines whether `web_view` has a next history item.
         * @returns `true` if able to move forward or `false` otherwise.
         */
        can_go_forward(): boolean;
        /**
         * Whether or not a MIME type can be displayed in `web_view`.
         * @param mime_type a MIME type
         * @returns `true` if the MIME type `mime_type` can be displayed or `false` otherwise
         */
        can_show_mime_type(mime_type: string): boolean;
        /**
         * Requests downloading of the specified URI string for `web_view`.
         * @param uri the URI to download
         * @returns a new {@link WebKit2.Download} representing    the download operation.
         */
        download_uri(uri: string): Download;
        /**
         * Request to execute the given `command` for `web_view`.
         *
         * You can use `webkit_web_view_can_execute_editing_command()` to check whether
         * it's possible to execute the command.
         * @param command the command to execute
         */
        execute_editing_command(command: string): void;
        /**
         * Request to execute the given `command` with `argument` for `web_view`.
         *
         * You can use
         * `webkit_web_view_can_execute_editing_command()` to check whether
         * it's possible to execute the command.
         * @param command the command to execute
         * @param argument the command argument
         */
        execute_editing_command_with_argument(command: string, argument: string): void;
        /**
         * Get the presentation type of {@link WebKit2.WebView} when created for automation.
         * @returns a {@link WebKit2.AutomationBrowsingContextPresentation}.
         */
        get_automation_presentation_type(): AutomationBrowsingContextPresentation;
        /**
         * Obtains the {@link WebKit2.BackForwardList} associated with the given {@link WebKit2.WebView}.
         *
         * The {@link WebKit2.BackForwardList} is owned by the {@link WebKit2.WebView}.
         * @returns the {@link WebKit2.BackForwardList}
         */
        get_back_forward_list(): BackForwardList;
        /**
         * Gets the color that is used to draw the `web_view` background.
         *
         * Gets the color that is used to draw the `web_view` background before
         * the actual contents are rendered.
         * For more information see also `webkit_web_view_set_background_color()`
         */
        get_background_color(): Gdk.RGBA;
        /**
         * Get the camera capture state of a {@link WebKit2.WebView}.
         * @returns The {@link WebKit2.MediaCaptureState} of the camera device. If {@link WebKit2.Settings.enable_mediastream} is `false`, this method will return {@link WebKit2.MediaCaptureState.NONE}.
         */
        get_camera_capture_state(): MediaCaptureState;
        /**
         * Gets the web context of `web_view`.
         * @returns the {@link WebKit2.WebContext} of the view
         */
        get_context(): WebContext;
        /**
         * Returns the current custom character encoding name of `web_view`.
         * @returns the current custom character encoding name or `null` if no    custom character encoding has been set.
         */
        get_custom_charset(): string;
        /**
         * Gets the configured default Content-Security-Policy.
         * @returns The default policy or `null`
         */
        get_default_content_security_policy(): string | null;
        /**
         * Get the display capture state of a {@link WebKit2.WebView}.
         * @returns The {@link WebKit2.MediaCaptureState} of the display device. If {@link WebKit2.Settings.enable_mediastream} is `false`, this method will return {@link WebKit2.MediaCaptureState.NONE}.
         */
        get_display_capture_state(): MediaCaptureState;
        /**
         * Gets the web editor state of `web_view`.
         * @returns the {@link WebKit2.EditorState} of the view
         */
        get_editor_state(): EditorState;
        /**
         * Gets the value of the {@link WebKit2.WebView.estimated_load_progress} property.
         *
         * You can monitor the estimated progress of a load operation by
         * connecting to the notify::estimated-load-progress signal of `web_view`.
         * @returns an estimate of the of the percent complete for a document     load as a range from 0.0 to 1.0.
         */
        get_estimated_load_progress(): number;
        /**
         * Returns favicon currently associated to `web_view`.
         *
         * Returns favicon currently associated to `web_view`, if any. You can
         * connect to notify::favicon signal of `web_view` to be notified when
         * the favicon is available.
         * @returns a pointer to a {@link cairo.Surface} with the    favicon or `null` if there's no icon associated with `web_view`.
         */
        get_favicon(): cairo.Surface;
        /**
         * Gets the {@link WebKit2.FindController}.
         *
         * Gets the {@link WebKit2.FindController} that will allow the caller to query
         * the {@link WebKit2.WebView} for the text to look for.
         * @returns the {@link WebKit2.FindController} associated to this particular {@link WebKit2.WebView}.
         */
        get_find_controller(): FindController;
        /**
         * Get the {@link WebKit2.InputMethodContext} currently in use by `web_view`.
         *
         * Get the {@link WebKit2.InputMethodContext} currently in use by `web_view`, or `null` if no input method is being used.
         * @returns a {@link WebKit2.InputMethodContext}, or `null`
         */
        get_input_method_context(): InputMethodContext | null;
        /**
         * Get the {@link WebKit2.WebInspector} associated to `web_view`
         * @returns the {@link WebKit2.WebInspector} of `web_view`
         */
        get_inspector(): WebInspector;
        /**
         * Gets the mute state of `web_view`.
         * @returns `true` if `web_view` audio is muted or `false` is audio is not muted.
         */
        get_is_muted(): boolean;
        /**
         * Get whether the current web process of a {@link WebKit2.WebView} is responsive.
         * @returns `true` if the web process attached to `web_view` is responsive, or `false` otherwise.
         */
        get_is_web_process_responsive(): boolean;
        /**
         * Return the main resource of `web_view`.
         * @returns the main {@link WebKit2.WebResource} of the view    or `null` if nothing has been loaded.
         */
        get_main_resource(): WebResource;
        /**
         * Get the microphone capture state of a {@link WebKit2.WebView}.
         * @returns The {@link WebKit2.MediaCaptureState} of the microphone device. If {@link WebKit2.Settings.enable_mediastream} is `false`, this method will return {@link WebKit2.MediaCaptureState.NONE}.
         */
        get_microphone_capture_state(): MediaCaptureState;
        /**
         * Get the identifier of the `WebKitWebPage` corresponding to
         * the {@link WebKit2.WebView}
         * @returns the page ID of `web_view`.
         */
        get_page_id(): number;
        /**
         * Gets the current session state of `web_view`
         * @returns a {@link WebKit2.WebViewSessionState}
         */
        get_session_state(): WebViewSessionState;
        /**
         * Gets the {@link WebKit2.Settings} currently applied to `web_view`.
         *
         * If no other {@link WebKit2.Settings} have been explicitly applied to
         * `web_view` with `webkit_web_view_set_settings()`, the default
         * {@link WebKit2.Settings} will be returned. This method always returns
         * a valid {@link WebKit2.Settings} object.
         * To modify any of the `web_view` settings, you can either create
         * a new {@link WebKit2.Settings} object with `webkit_settings_new()`, setting
         * the desired preferences, and then replace the existing `web_view`
         * settings with `webkit_web_view_set_settings()` or get the existing
         * `web_view` settings and update it directly. {@link WebKit2.Settings} objects
         * can be shared by multiple {@link WebKit2.WebView}<!-- -->s, so modifying
         * the settings of a {@link WebKit2.WebView} would affect other
         * {@link WebKit2.WebView}<!-- -->s using the same {@link WebKit2.Settings}.
         * @returns the {@link WebKit2.Settings} attached to `web_view`
         */
        get_settings(): Settings;
        /**
         * @param args
         */
        // Conflicted with Gtk.Widget.get_settings
        get_settings(...args: never[]): any;
        /**
         * Asynchronously retrieves a snapshot of `web_view` for `region`.
         *
         * `options` specifies how the snapshot should be rendered.
         *
         * When the operation is finished, `callback` will be called. You must
         * call `webkit_web_view_get_snapshot_finish()` to get the result of the
         * operation.
         * @param region the {@link WebKit2.SnapshotRegion} for this snapshot
         * @param options {@link WebKit2.SnapshotOptions} for the snapshot
         * @param cancellable a {@link Gio.Cancellable}
         */
        get_snapshot(
            region: SnapshotRegion | null,
            options: SnapshotOptions | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<cairo.Surface>;
        /**
         * Asynchronously retrieves a snapshot of `web_view` for `region`.
         *
         * `options` specifies how the snapshot should be rendered.
         *
         * When the operation is finished, `callback` will be called. You must
         * call `webkit_web_view_get_snapshot_finish()` to get the result of the
         * operation.
         * @param region the {@link WebKit2.SnapshotRegion} for this snapshot
         * @param options {@link WebKit2.SnapshotOptions} for the snapshot
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback}
         */
        get_snapshot(
            region: SnapshotRegion | null,
            options: SnapshotOptions | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously retrieves a snapshot of `web_view` for `region`.
         *
         * `options` specifies how the snapshot should be rendered.
         *
         * When the operation is finished, `callback` will be called. You must
         * call `webkit_web_view_get_snapshot_finish()` to get the result of the
         * operation.
         * @param region the {@link WebKit2.SnapshotRegion} for this snapshot
         * @param options {@link WebKit2.SnapshotOptions} for the snapshot
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback}
         */
        get_snapshot(
            region: SnapshotRegion | null,
            options: SnapshotOptions | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<cairo.Surface> | void;
        /**
         * Finishes an asynchronous operation started with `webkit_web_view_get_snapshot()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns a {@link cairo.Surface} with the retrieved snapshot or `null` in error.
         */
        get_snapshot_finish(result: Gio.AsyncResult): cairo.Surface;
        /**
         * Gets the value of the {@link WebKit2.WebView.title} property.
         *
         * You can connect to notify::title signal of `web_view` to
         * be notified when the title has been received.
         * @returns The main frame document title of `web_view`.
         */
        get_title(): string;
        /**
         * Retrieves the {@link Gio.TlsCertificate} associated with the main resource of `web_view`.
         *
         * Retrieves the {@link Gio.TlsCertificate} associated with the main resource of `web_view`,
         * and the {@link Gio.TlsCertificateFlags} showing what problems, if any, have been found
         * with that certificate.
         * If the connection is not HTTPS, this function returns `false`.
         * This function should be called after a response has been received from the
         * server, so you can connect to {@link WebKit2.WebView.SignalSignatures.load_changed | WebKit2.WebView::load-changed} and call this function
         * when it's emitted with {@link WebKit2.LoadEvent.COMMITTED} event.
         *
         * Note that this function provides no information about the security of the web
         * page if the current {@link WebKit2.TLSErrorsPolicy} is {@link WebKit2.TLSErrorsPolicy.IGNORE},
         * as subresources of the page may be controlled by an attacker. This function
         * may safely be used to determine the security status of the current page only
         * if the current {@link WebKit2.TLSErrorsPolicy} is {@link WebKit2.TLSErrorsPolicy.FAIL}, in
         * which case subresources that fail certificate verification will be blocked.
         * @returns `true` if the `web_view` connection uses HTTPS and a response has been received    from the server, or `false` otherwise.
         */
        get_tls_info(): [boolean, Gio.TlsCertificate, Gio.TlsCertificateFlags];
        /**
         * Returns the current active URI of `web_view`.
         *
         * The active URI might change during
         * a load operation:
         *
         * <orderedlist>
         * <listitem><para>
         *   When nothing has been loaded yet on `web_view` the active URI is `null`.
         * </para></listitem>
         * <listitem><para>
         *   When a new load operation starts the active URI is the requested URI:
         *   <itemizedlist>
         *   <listitem><para>
         *     If the load operation was started by `webkit_web_view_load_uri()`,
         *     the requested URI is the given one.
         *   </para></listitem>
         *   <listitem><para>
         *     If the load operation was started by `webkit_web_view_load_html()`,
         *     the requested URI is "about:blank".
         *   </para></listitem>
         *   <listitem><para>
         *     If the load operation was started by `webkit_web_view_load_alternate_html()`,
         *     the requested URI is content URI provided.
         *   </para></listitem>
         *   <listitem><para>
         *     If the load operation was started by `webkit_web_view_go_back()` or
         *     `webkit_web_view_go_forward()`, the requested URI is the original URI
         *     of the previous/next item in the {@link WebKit2.BackForwardList} of `web_view`.
         *   </para></listitem>
         *   <listitem><para>
         *     If the load operation was started by
         *     `webkit_web_view_go_to_back_forward_list_item()`, the requested URI
         *     is the opriginal URI of the given {@link WebKit2.BackForwardListItem}.
         *   </para></listitem>
         *   </itemizedlist>
         * </para></listitem>
         * <listitem><para>
         *   If there is a server redirection during the load operation,
         *   the active URI is the redirected URI. When the signal
         *   {@link WebKit2.WebView.SignalSignatures.load_changed | WebKit2.WebView::load-changed} is emitted with {@link WebKit2.LoadEvent.REDIRECTED}
         *   event, the active URI is already updated to the redirected URI.
         * </para></listitem>
         * <listitem><para>
         *   When the signal {@link WebKit2.WebView.SignalSignatures.load_changed | WebKit2.WebView::load-changed} is emitted
         *   with {@link WebKit2.LoadEvent.COMMITTED} event, the active URI is the final
         *   one and it will not change unless a new load operation is started
         *   or a navigation action within the same page is performed.
         * </para></listitem>
         * </orderedlist>
         *
         * You can monitor the active URI by connecting to the notify::uri
         * signal of `web_view`.
         * @returns the current active URI of `web_view` or `null`    if nothing has been loaded yet.
         */
        get_uri(): string;
        /**
         * Gets the user content manager associated to `web_view`.
         * @returns the {@link WebKit2.UserContentManager} associated with the view
         */
        get_user_content_manager(): UserContentManager;
        /**
         * Get the view's {@link WebKit2.WebExtensionMode}.
         * @returns the {@link WebKit2.WebExtensionMode}
         */
        get_web_extension_mode(): WebExtensionMode;
        /**
         * Get the {@link WebKit2.WebsiteDataManager} associated to `web_view`.
         *
         * If `web_view` is not ephemeral,
         * the returned {@link WebKit2.WebsiteDataManager} will be the same as the {@link WebKit2.WebsiteDataManager}
         * of `web_view`'s {@link WebKit2.WebContext}.
         * @returns a {@link WebKit2.WebsiteDataManager}
         */
        get_website_data_manager(): WebsiteDataManager;
        /**
         * Gets the default website policies.
         *
         * Gets the default website policies set on construction in the
         * `web_view`. These can be overridden on a per-origin basis via the
         * {@link WebKit2.WebView.SignalSignatures.decide_policy | WebKit2.WebView::decide-policy} signal handler.
         *
         * See also `webkit_policy_decision_use_with_policies()`.
         * @returns the default {@link WebKit2.WebsitePolicies}     associated with the view.
         */
        get_website_policies(): WebsitePolicies;
        /**
         * Get the {@link WebKit2.WindowProperties} object.
         *
         * Get the {@link WebKit2.WindowProperties} object containing the properties
         * that the window containing `web_view` should have.
         * @returns the {@link WebKit2.WindowProperties} of `web_view`
         */
        get_window_properties(): WindowProperties;
        /**
         * Set the zoom level of `web_view`.
         *
         * Get the zoom level of `web_view`, i.e. the factor by which the
         * view contents are scaled with respect to their original size.
         * @returns the current zoom level of `web_view`
         */
        get_zoom_level(): number;
        /**
         * Loads the previous history item.
         *
         * You can monitor the load operation by connecting to
         * {@link WebKit2.WebView.SignalSignatures.load_changed | WebKit2.WebView::load-changed} signal.
         */
        go_back(): void;
        /**
         * Loads the next history item.
         *
         * You can monitor the load operation by connecting to
         * {@link WebKit2.WebView.SignalSignatures.load_changed | WebKit2.WebView::load-changed} signal.
         */
        go_forward(): void;
        /**
         * Loads the specific history item `list_item`.
         *
         * You can monitor the load operation by connecting to
         * {@link WebKit2.WebView.SignalSignatures.load_changed | WebKit2.WebView::load-changed} signal.
         * @param list_item a {@link WebKit2.BackForwardListItem}
         */
        go_to_back_forward_list_item(list_item: BackForwardListItem): void;
        /**
         * Gets whether the user is allowed to edit the HTML document.
         *
         * When `web_view` is not editable an element in the HTML document can only be edited if the
         * CONTENTEDITABLE attribute has been set on the element or one of its parent
         * elements. By default a {@link WebKit2.WebView} is not editable.
         * @returns `true` if the user is allowed to edit the HTML document, or `false` otherwise.
         */
        is_editable(): boolean;
        /**
         * Load the given `content` string for the URI `content_uri`.
         *
         * This allows clients to display page-loading errors in the {@link WebKit2.WebView} itself.
         * When this method is called from {@link WebKit2.WebView.SignalSignatures.load_failed | WebKit2.WebView::load-failed} signal to show an
         * error page, then the back-forward list is maintained appropriately.
         * For everything else this method works the same way as `webkit_web_view_load_html()`.
         * @param content the new content to display as the main page of the `web_view`
         * @param content_uri the URI for the alternate page content
         * @param base_uri the base URI for relative locations or `null`
         */
        load_alternate_html(content: string, content_uri: string, base_uri?: string | null): void;
        /**
         * Load the specified `bytes` into `web_view` using the given `mime_type` and `encoding`.
         *
         * When `mime_type` is `null`, it defaults to "text/html".
         * When `encoding` is `null`, it defaults to "UTF-8".
         * When `base_uri` is `null`, it defaults to "about:blank".
         * You can monitor the load operation by connecting to {@link WebKit2.WebView.SignalSignatures.load_changed | WebKit2.WebView::load-changed} signal.
         * @param bytes input data to load
         * @param mime_type the MIME type of `bytes`, or `null`
         * @param encoding the character encoding of `bytes`, or `null`
         * @param base_uri the base URI for relative locations or `null`
         */
        load_bytes(
            bytes: GLib.Bytes | Uint8Array,
            mime_type?: string | null,
            encoding?: string | null,
            base_uri?: string | null,
        ): void;
        /**
         * Load the given `content` string with the specified `base_uri`.
         *
         * If `base_uri` is not `null`, relative URLs in the `content` will be
         * resolved against `base_uri` and absolute local paths must be children of the `base_uri`.
         * For security reasons absolute local paths that are not children of `base_uri`
         * will cause the web process to terminate.
         * If you need to include URLs in `content` that are local paths in a different
         * directory than `base_uri` you can build a data URI for them. When `base_uri` is `null`,
         * it defaults to "about:blank". The mime type of the document will be "text/html".
         * You can monitor the load operation by connecting to {@link WebKit2.WebView.SignalSignatures.load_changed | WebKit2.WebView::load-changed} signal.
         * @param content The HTML string to load
         * @param base_uri The base URI for relative locations or `null`
         */
        load_html(content: string, base_uri?: string | null): void;
        /**
         * Load the specified `plain_text` string into `web_view`.
         *
         * The mime type of document will be "text/plain". You can monitor the load
         * operation by connecting to {@link WebKit2.WebView.SignalSignatures.load_changed | WebKit2.WebView::load-changed} signal.
         * @param plain_text The plain text to load
         */
        load_plain_text(plain_text: string): void;
        /**
         * Requests loading of the specified {@link WebKit2.URIRequest}.
         *
         * You can monitor the load operation by connecting to
         * {@link WebKit2.WebView.SignalSignatures.load_changed | WebKit2.WebView::load-changed} signal.
         * @param request a {@link WebKit2.URIRequest} to load
         */
        load_request(request: URIRequest): void;
        /**
         * Requests loading of the specified URI string.
         *
         * You can monitor the load operation by connecting to
         * {@link WebKit2.WebView.SignalSignatures.load_changed | WebKit2.WebView::load-changed} signal.
         * @param uri an URI string
         */
        load_uri(uri: string): void;
        /**
         * Reloads the current contents of `web_view`.
         *
         * See also `webkit_web_view_reload_bypass_cache()`.
         */
        reload(): void;
        /**
         * Reloads the current contents of `web_view` without
         * using any cached data.
         */
        reload_bypass_cache(): void;
        /**
         * Restore the `web_view` session state from `state`
         * @param state a {@link WebKit2.WebViewSessionState}
         */
        restore_session_state(state: WebViewSessionState): void;
        /**
         * @param body
         * @param _arguments
         * @param world_name
         * @param cancellable
         * @param callback
         */
        run_async_javascript_function_in_world(
            body: string,
            _arguments: GLib.Variant,
            world_name: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously run `script` in the context of the current page in `web_view`.
         *
         * If
         * WebKitSettings:enable-javascript is FALSE, this method will do nothing.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_web_view_run_javascript_finish()` to get the result of the operation.
         * @param script the script to run
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         */
        run_javascript(script: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<JavascriptResult>;
        /**
         * Asynchronously run `script` in the context of the current page in `web_view`.
         *
         * If
         * WebKitSettings:enable-javascript is FALSE, this method will do nothing.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_web_view_run_javascript_finish()` to get the result of the operation.
         * @param script the script to run
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the script finished
         */
        run_javascript(
            script: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously run `script` in the context of the current page in `web_view`.
         *
         * If
         * WebKitSettings:enable-javascript is FALSE, this method will do nothing.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_web_view_run_javascript_finish()` to get the result of the operation.
         * @param script the script to run
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the script finished
         */
        run_javascript(
            script: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<JavascriptResult> | void;
        /**
         * Finish an asynchronous operation started with `webkit_web_view_run_javascript()`.
         *
         * This is an example of using `webkit_web_view_run_javascript()` with a script returning
         * a string:
         *
         * ```c
         * static void
         * web_view_javascript_finished (GObject      *object,
         *                               GAsyncResult *result,
         *                               gpointer      user_data)
         * {
         *     WebKitJavascriptResult *js_result;
         *     JSCValue               *value;
         *     GError                 *error = NULL;
         *
         *     js_result = webkit_web_view_run_javascript_finish (WEBKIT_WEB_VIEW (object), result, &error);
         *     if (!js_result) {
         *         g_warning ("Error running javascript: %s", error->message);
         *         g_error_free (error);
         *         return;
         *     }
         *
         *     value = webkit_javascript_result_get_js_value (js_result);
         *     if (jsc_value_is_string (value)) {
         *         gchar        *str_value = jsc_value_to_string (value);
         *         JSCException *exception = jsc_context_get_exception (jsc_value_get_context (value));
         *         if (exception)
         *             g_warning ("Error running javascript: %s", jsc_exception_get_message (exception));
         *         else
         *             g_print ("Script result: %s\n", str_value);
         *         g_free (str_value);
         *     } else {
         *         g_warning ("Error running javascript: unexpected return value");
         *     }
         *     webkit_javascript_result_unref (js_result);
         * }
         *
         * static void
         * web_view_get_link_url (WebKitWebView *web_view,
         *                        const gchar   *link_id)
         * {
         *     gchar *script = g_strdup_printf ("window.document.getElementById('%s').href;", link_id);
         *     webkit_web_view_run_javascript (web_view, script, NULL, web_view_javascript_finished, NULL);
         *     g_free (script);
         * }
         * ```
         * @param result a {@link Gio.AsyncResult}
         * @returns a {@link WebKit2.JavascriptResult} with the result of the last executed statement in `script`    or `null` in case of error
         */
        run_javascript_finish(result: Gio.AsyncResult): JavascriptResult;
        /**
         * Asynchronously run the script from `resource`.
         *
         * Asynchronously run the script from `resource` in the context of the
         * current page in `web_view`.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call `webkit_web_view_run_javascript_from_gresource_finish()` to get the result
         * of the operation.
         * @param resource the location of the resource to load
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         */
        run_javascript_from_gresource(
            resource: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<JavascriptResult>;
        /**
         * Asynchronously run the script from `resource`.
         *
         * Asynchronously run the script from `resource` in the context of the
         * current page in `web_view`.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call `webkit_web_view_run_javascript_from_gresource_finish()` to get the result
         * of the operation.
         * @param resource the location of the resource to load
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the script finished
         */
        run_javascript_from_gresource(
            resource: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously run the script from `resource`.
         *
         * Asynchronously run the script from `resource` in the context of the
         * current page in `web_view`.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call `webkit_web_view_run_javascript_from_gresource_finish()` to get the result
         * of the operation.
         * @param resource the location of the resource to load
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the script finished
         */
        run_javascript_from_gresource(
            resource: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<JavascriptResult> | void;
        /**
         * Finish an asynchronous operation started with `webkit_web_view_run_javascript_from_gresource()`.
         *
         * Check `webkit_web_view_run_javascript_finish()` for a usage example.
         * @param result a {@link Gio.AsyncResult}
         * @returns a {@link WebKit2.JavascriptResult} with the result of the last executed statement in `script`    or `null` in case of error
         */
        run_javascript_from_gresource_finish(result: Gio.AsyncResult): JavascriptResult;
        /**
         * Asynchronously run `script` in the script world.
         *
         * Asynchronously run `script` in the script world with name `world_name` of the current page context in `web_view`.
         * If WebKitSettings:enable-javascript is FALSE, this method will do nothing.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_web_view_run_javascript_in_world_finish()` to get the result of the operation.
         * @param script the script to run
         * @param world_name the name of a `WebKitScriptWorld`
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         */
        run_javascript_in_world(
            script: string,
            world_name: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<JavascriptResult>;
        /**
         * Asynchronously run `script` in the script world.
         *
         * Asynchronously run `script` in the script world with name `world_name` of the current page context in `web_view`.
         * If WebKitSettings:enable-javascript is FALSE, this method will do nothing.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_web_view_run_javascript_in_world_finish()` to get the result of the operation.
         * @param script the script to run
         * @param world_name the name of a `WebKitScriptWorld`
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the script finished
         */
        run_javascript_in_world(
            script: string,
            world_name: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously run `script` in the script world.
         *
         * Asynchronously run `script` in the script world with name `world_name` of the current page context in `web_view`.
         * If WebKitSettings:enable-javascript is FALSE, this method will do nothing.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_web_view_run_javascript_in_world_finish()` to get the result of the operation.
         * @param script the script to run
         * @param world_name the name of a `WebKitScriptWorld`
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the script finished
         */
        run_javascript_in_world(
            script: string,
            world_name: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<JavascriptResult> | void;
        /**
         * Finish an asynchronous operation started with `webkit_web_view_run_javascript_in_world()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns a {@link WebKit2.JavascriptResult} with the result of the last executed statement in `script`    or `null` in case of error
         */
        run_javascript_in_world_finish(result: Gio.AsyncResult): JavascriptResult;
        /**
         * Asynchronously save the current web page.
         *
         * Asynchronously save the current web page associated to the
         * {@link WebKit2.WebView} into a self-contained format using the mode
         * specified in `save_mode`.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call `webkit_web_view_save_finish()` to get the result of the
         * operation.
         * @param save_mode the {@link WebKit2.SaveMode} specifying how the web page should be saved.
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         */
        save(save_mode: SaveMode | null, cancellable?: Gio.Cancellable | null): globalThis.Promise<Gio.InputStream>;
        /**
         * Asynchronously save the current web page.
         *
         * Asynchronously save the current web page associated to the
         * {@link WebKit2.WebView} into a self-contained format using the mode
         * specified in `save_mode`.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call `webkit_web_view_save_finish()` to get the result of the
         * operation.
         * @param save_mode the {@link WebKit2.SaveMode} specifying how the web page should be saved.
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        save(
            save_mode: SaveMode | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously save the current web page.
         *
         * Asynchronously save the current web page associated to the
         * {@link WebKit2.WebView} into a self-contained format using the mode
         * specified in `save_mode`.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call `webkit_web_view_save_finish()` to get the result of the
         * operation.
         * @param save_mode the {@link WebKit2.SaveMode} specifying how the web page should be saved.
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        save(
            save_mode: SaveMode | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Gio.InputStream> | void;
        /**
         * Finish an asynchronous operation started with `webkit_web_view_save()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns a {@link Gio.InputStream} with the result of saving    the current web page or `null` in case of error.
         */
        save_finish(result: Gio.AsyncResult): Gio.InputStream;
        /**
         * Asynchronously save the current web page.
         *
         * Asynchronously save the current web page associated to the
         * {@link WebKit2.WebView} into a self-contained format using the mode
         * specified in `save_mode` and writing it to `file`.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call `webkit_web_view_save_to_file_finish()` to get the result of the
         * operation.
         * @param file the {@link Gio.File} where the current web page should be saved to.
         * @param save_mode the {@link WebKit2.SaveMode} specifying how the web page should be saved.
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         */
        save_to_file(
            file: Gio.File,
            save_mode: SaveMode | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously save the current web page.
         *
         * Asynchronously save the current web page associated to the
         * {@link WebKit2.WebView} into a self-contained format using the mode
         * specified in `save_mode` and writing it to `file`.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call `webkit_web_view_save_to_file_finish()` to get the result of the
         * operation.
         * @param file the {@link Gio.File} where the current web page should be saved to.
         * @param save_mode the {@link WebKit2.SaveMode} specifying how the web page should be saved.
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        save_to_file(
            file: Gio.File,
            save_mode: SaveMode | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously save the current web page.
         *
         * Asynchronously save the current web page associated to the
         * {@link WebKit2.WebView} into a self-contained format using the mode
         * specified in `save_mode` and writing it to `file`.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call `webkit_web_view_save_to_file_finish()` to get the result of the
         * operation.
         * @param file the {@link Gio.File} where the current web page should be saved to.
         * @param save_mode the {@link WebKit2.SaveMode} specifying how the web page should be saved.
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        save_to_file(
            file: Gio.File,
            save_mode: SaveMode | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finish an asynchronous operation started with `webkit_web_view_save_to_file()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if the web page was successfully saved to a file or `false` otherwise.
         */
        save_to_file_finish(result: Gio.AsyncResult): boolean;
        /**
         * Send `message` to the `WebKitWebPage` corresponding to `web_view`.
         *
         * If `message` is floating, it's consumed.
         * If you don't expect any reply, or you simply want to ignore it, you can pass `null` as `callback`.
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_web_view_send_message_to_page_finish()` to get the message reply.
         * @param message a {@link WebKit2.UserMessage}
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         */
        send_message_to_page(
            message: UserMessage,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<UserMessage>;
        /**
         * Send `message` to the `WebKitWebPage` corresponding to `web_view`.
         *
         * If `message` is floating, it's consumed.
         * If you don't expect any reply, or you simply want to ignore it, you can pass `null` as `callback`.
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_web_view_send_message_to_page_finish()` to get the message reply.
         * @param message a {@link WebKit2.UserMessage}
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback (nullable): A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`
         */
        send_message_to_page(
            message: UserMessage,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Send `message` to the `WebKitWebPage` corresponding to `web_view`.
         *
         * If `message` is floating, it's consumed.
         * If you don't expect any reply, or you simply want to ignore it, you can pass `null` as `callback`.
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_web_view_send_message_to_page_finish()` to get the message reply.
         * @param message a {@link WebKit2.UserMessage}
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback (nullable): A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`
         */
        send_message_to_page(
            message: UserMessage,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<UserMessage> | void;
        /**
         * Finish an asynchronous operation started with `webkit_web_view_send_message_to_page()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns a {@link WebKit2.UserMessage} with the reply or `null` in case of error.
         */
        send_message_to_page_finish(result: Gio.AsyncResult): UserMessage;
        /**
         * Sets the color that will be used to draw the `web_view` background.
         *
         * Sets the color that will be used to draw the `web_view` background before
         * the actual contents are rendered. Note that if the web page loaded in `web_view`
         * specifies a background color, it will take precedence over the `rgba` color.
         * By default the `web_view` background color is opaque white.
         * Note that the parent window must have a RGBA visual and
         * {@link Gtk.Widget.app_paintable} property set to `true` for backgrounds colors to work.
         *
         * ```c
         * static void browser_window_set_background_color (BrowserWindow *window,
         *                                                  const GdkRGBA *rgba)
         * {
         *     WebKitWebView *web_view;
         *     GdkScreen *screen = gtk_window_get_screen (GTK_WINDOW (window));
         *     GdkVisual *rgba_visual = gdk_screen_get_rgba_visual (screen);
         *
         *     if (!rgba_visual)
         *          return;
         *
         *     gtk_widget_set_visual (GTK_WIDGET (window), rgba_visual);
         *     gtk_widget_set_app_paintable (GTK_WIDGET (window), TRUE);
         *
         *     web_view = browser_window_get_web_view (window);
         *     webkit_web_view_set_background_color (web_view, rgba);
         * }
         * ```
         * @param rgba a {@link Gdk.RGBA}
         */
        set_background_color(rgba: Gdk.RGBA): void;
        /**
         * Set the camera capture state of a {@link WebKit2.WebView}.
         *
         * If {@link WebKit2.Settings.enable_mediastream} is `false`, this method will have no visible effect. Once the
         * state of the device has been set to {@link WebKit2.MediaCaptureState.NONE} it cannot be changed
         * anymore. The page can however request capture again using the mediaDevices API.
         * @param state a {@link WebKit2.MediaCaptureState}
         */
        set_camera_capture_state(state: MediaCaptureState | null): void;
        /**
         * Sets the `allowlist` for CORS.
         *
         * Sets the `allowlist` for which
         * [Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
         * checks are disabled in `web_view`. URI patterns must be of the form
         * `[protocol]://[host]/[path]`, each component may contain the wildcard
         * character (`*`) to represent zero or more other characters. All three
         * components are required and must not be omitted from the URI
         * patterns.
         *
         * Disabling CORS checks permits resources from other origins to load
         * allowlisted resources. It does not permit the allowlisted resources
         * to load resources from other origins.
         *
         * If this function is called multiple times, only the allowlist set by
         * the most recent call will be effective.
         * @param allowlist an allowlist of URI patterns, or `null`
         */
        set_cors_allowlist(allowlist?: string[] | null): void;
        /**
         * Sets the current custom character encoding override of `web_view`.
         *
         * The custom character encoding will override any text encoding detected via HTTP headers or
         * META tags. Calling this method will stop any current load operation and reload the
         * current page. Setting the custom character encoding to `null` removes the character
         * encoding override.
         * @param charset a character encoding name or `null`
         */
        set_custom_charset(charset?: string | null): void;
        /**
         * Set the display capture state of a {@link WebKit2.WebView}.
         *
         * If {@link WebKit2.Settings.enable_mediastream} is `false`, this method will have no visible effect. Once the
         * state of the device has been set to {@link WebKit2.MediaCaptureState.NONE} it cannot be changed
         * anymore. The page can however request capture again using the mediaDevices API.
         * @param state a {@link WebKit2.MediaCaptureState}
         */
        set_display_capture_state(state: MediaCaptureState | null): void;
        /**
         * Sets whether the user is allowed to edit the HTML document.
         *
         * If `editable` is `true`, `web_view` allows the user to edit the HTML document. If
         * `editable` is `false`, an element in `web_view`'s document can only be edited if the
         * CONTENTEDITABLE attribute has been set on the element or one of its parent
         * elements. By default a {@link WebKit2.WebView} is not editable.
         *
         * Normally, a HTML document is not editable unless the elements within the
         * document are editable. This function provides a way to make the contents
         * of a {@link WebKit2.WebView} editable without altering the document or DOM structure.
         * @param editable a `gboolean` indicating the editable state
         */
        set_editable(editable: boolean): void;
        /**
         * Set the {@link WebKit2.InputMethodContext} to be used by `web_view`.
         *
         * Set the {@link WebKit2.InputMethodContext} to be used by `web_view`, or `null` to not use any input method.
         * Note that the same {@link WebKit2.InputMethodContext} can't be set on more than one {@link WebKit2.WebView} at the same time.
         * @param context the {@link WebKit2.InputMethodContext} to set, or `null`
         */
        set_input_method_context(context?: InputMethodContext | null): void;
        /**
         * Sets the mute state of `web_view`.
         * @param muted mute flag
         */
        set_is_muted(muted: boolean): void;
        /**
         * Set the microphone capture state of a {@link WebKit2.WebView}.
         *
         * If {@link WebKit2.Settings.enable_mediastream} is `false`, this method will have no visible effect. Once the
         * state of the device has been set to {@link WebKit2.MediaCaptureState.NONE} it cannot be changed
         * anymore. The page can however request capture again using the mediaDevices API.
         * @param state a {@link WebKit2.MediaCaptureState}
         */
        set_microphone_capture_state(state: MediaCaptureState | null): void;
        /**
         * Sets the {@link WebKit2.Settings} to be applied to `web_view`.
         *
         * The
         * existing {@link WebKit2.Settings} of `web_view` will be replaced by
         * `settings`. New settings are applied immediately on `web_view`.
         * The same {@link WebKit2.Settings} object can be shared
         * by multiple {@link WebKit2.WebView}<!-- -->s.
         * @param settings a {@link WebKit2.Settings}
         */
        set_settings(settings: Settings): void;
        /**
         * Set the zoom level of `web_view`.
         *
         * Set the zoom level of `web_view`, i.e. the factor by which the
         * view contents are scaled with respect to their original size.
         * @param zoom_level the zoom level
         */
        set_zoom_level(zoom_level: number): void;
        /**
         * Stops any ongoing loading operation in `web_view`.
         *
         * This method does nothing if no content is being loaded.
         * If there is a loading operation in progress, it will be cancelled and
         * {@link WebKit2.WebView.SignalSignatures.load_failed | WebKit2.WebView::load-failed} signal will be emitted with
         * {@link WebKit2.NetworkError.CANCELLED} error.
         */
        stop_loading(): void;
        /**
         * Terminates the web process associated to `web_view`.
         *
         * When the web process gets terminated
         * using this method, the {@link WebKit2.WebView.SignalSignatures.web_process_terminated | WebKit2.WebView::web-process-terminated} signal is emitted with
         * {@link WebKit2.WebProcessTerminationReason.TERMINATED_BY_API} as the reason for termination.
         */
        terminate_web_process(): void;
        /**
         * Tries to close the `web_view`.
         *
         * This will fire the onbeforeunload event
         * to ask the user for confirmation to close the page. If there isn't an
         * onbeforeunload event handler or the user confirms to close the page,
         * the {@link WebKit2.WebView.SignalSignatures.close | WebKit2.WebView::close} signal is emitted, otherwise nothing happens.
         */
        try_close(): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace WebViewBase {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::can-target': (pspec: GObject.ParamSpec) => void;
            'notify::css-classes': (pspec: GObject.ParamSpec) => void;
            'notify::css-name': (pspec: GObject.ParamSpec) => void;
            'notify::cursor': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::focusable': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::limit-events': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::overflow': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::root': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Widget.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps {}
    }

    /**
     * Internal base class.
     * @gir-type Class
     */
    class WebViewBase extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<WebViewBase>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WebViewBase.SignalSignatures;

        // Fields

        parentInstance: Gtk.Widget;

        // Constructors

        constructor(properties?: Partial<WebViewBase.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WebViewBase.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebViewBase.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WebViewBase.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebViewBase.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WebViewBase.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WebViewBase.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         *
         * The accessible role cannot be changed once set.
         * @category Inherited from Gtk.Accessible
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given {@link Gtk.Accessible} implementation.
         *
         * The accessible role cannot be changed once set.
         * @category Inherited from Gtk.Accessible
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);
        /**
         * Requests the user's screen reader to announce the given message.
         *
         * This kind of notification is useful for messages that
         * either have only a visual representation or that are not
         * exposed visually at all, e.g. a notification about a
         * successful operation.
         *
         * Also, by using this API, you can ensure that the message
         * does not interrupts the user's current screen reader output.
         * @param message the string to announce
         * @param priority the priority of the announcement
         */
        announce(message: string, priority: Gtk.AccessibleAnnouncementPriority | null): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @returns the accessible parent
         */
        get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the accessible role of an accessible object.
         * @returns the accessible role
         */
        get_accessible_role(): Gtk.AccessibleRole;
        /**
         * Retrieves the implementation for the given accessible object.
         * @returns the accessible implementation object
         */
        get_at_context(): Gtk.ATContext;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @returns true if the bounds are valid, and false otherwise
         */
        get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @returns the first accessible child
         */
        get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @returns the next accessible sibling
         */
        get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Queries a platform state, such as focus.
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @returns the value of state for the accessible
         */
        get_platform_state(state: Gtk.AccessiblePlatformState | null): boolean;
        /**
         * Resets the accessible property to its default value.
         * @param property the accessible property
         */
        reset_property(property: Gtk.AccessibleProperty | null): void;
        /**
         * Resets the accessible relation to its default value.
         * @param relation the accessible relation
         */
        reset_relation(relation: Gtk.AccessibleRelation | null): void;
        /**
         * Resets the accessible state to its default value.
         * @param state the accessible state
         */
        reset_state(state: Gtk.AccessibleState | null): void;
        /**
         * Sets the parent and sibling of an accessible object.
         *
         * This function is meant to be used by accessible implementations that are
         * not part of the widget hierarchy, and but act as a logical bridge between
         * widgets. For instance, if a widget creates an object that holds metadata
         * for each child, and you want that object to implement the {@link Gtk.Accessible}
         * interface, you will use this function to ensure that the parent of each
         * child widget is the metadata object, and the parent of each metadata
         * object is the container widget.
         * @param parent the parent accessible object
         * @param next_sibling the sibling accessible object
         */
        set_accessible_parent(parent?: Gtk.Accessible | null, next_sibling?: Gtk.Accessible | null): void;
        /**
         * Updates the next accessible sibling.
         *
         * That might be useful when a new child of a custom accessible
         * is created, and it needs to be linked to a previous child.
         * @param new_sibling the new next accessible sibling to set
         */
        update_next_accessible_sibling(new_sibling?: Gtk.Accessible | null): void;
        /**
         * Informs ATs that the platform state has changed.
         *
         * This function should be used by {@link Gtk.Accessible} implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState | null): void;
        /**
         * Updates an array of accessible properties.
         *
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * property change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param properties an array of accessible properties
         * @param values an array of `GValues`, one for each property
         */
        update_property(properties: Gtk.AccessibleProperty[] | null, values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible relations.
         *
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * relation change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param relations an array of accessible relations
         * @param values an array of `GValues`, one for each relation
         */
        update_relation(relations: Gtk.AccessibleRelation[] | null, values: (GObject.Value | any)[]): void;
        /**
         * Updates an array of accessible states.
         *
         * This function should be called by {@link Gtk.Widget} types whenever an accessible
         * state change must be communicated to assistive technologies.
         *
         * This function is meant to be used by language bindings.
         * @param states an array of accessible states
         * @param values an array of `GValues`, one for each state
         */
        update_state(states: Gtk.AccessibleState[] | null, values: (GObject.Value | any)[]): void;
        /**
         * Retrieves the accessible parent for an accessible object.
         *
         * This function returns `NULL` for top level widgets.
         * @virtual
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the implementation for the given accessible object.
         * @virtual
         */
        vfunc_get_at_context(): Gtk.ATContext | null;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         * @virtual
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         * @virtual
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         * @virtual
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Queries a platform state, such as focus.
         *
         * This functionality can be overridden by {@link Gtk.Accessible}
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for {@link Gtk.Text} wrappers.
         * @param state platform state to query
         * @virtual
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Gets the ID of the `buildable` object.
         *
         * {@link Gtk.Builder} sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
        /**
         * Similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, Gtk.BuildableParser, any];
        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         * @virtual
         */
        vfunc_get_id(): string;
        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. {@link Gtk.Window} sets
         *  the {@link Gtk.Widget.visible} property here.
         * @param builder
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, `g_object_set_property()`
         *  is used by default. {@link Gtk.Window} implements this to delay showing itself
         *  (i.e. setting the {@link Gtk.Widget.visible} property) until the whole
         *  interface is created.
         * @param builder
         * @param name
         * @param value
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Stores the id attribute given in the {@link Gtk.Builder} UI definition.
         *   {@link Gtk.Widget} stores the name as object data. Implement this method if your
         *   object has some notion of “ID” and it makes sense to map the XML id
         *   attribute to it.
         * @param id
         * @virtual
         */
        vfunc_set_id(id: string): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace WebsiteDataAccessPermissionRequest {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, PermissionRequest.ConstructorProps {}
    }

    /**
     * A permission request for accessing website data from third-party domains.
     *
     * WebKitWebsiteDataAccessPermissionRequest represents a request for
     * permission to allow a third-party domain access its cookies.
     *
     * When a WebKitWebsiteDataAccessPermissionRequest is not handled by the user,
     * it is denied by default.
     * @gir-type Class
     * @since 2.30
     */
    class WebsiteDataAccessPermissionRequest extends GObject.Object implements PermissionRequest {
        static $gtype: GObject.GType<WebsiteDataAccessPermissionRequest>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WebsiteDataAccessPermissionRequest.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WebsiteDataAccessPermissionRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WebsiteDataAccessPermissionRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebsiteDataAccessPermissionRequest.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WebsiteDataAccessPermissionRequest.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebsiteDataAccessPermissionRequest.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WebsiteDataAccessPermissionRequest.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WebsiteDataAccessPermissionRequest.SignalSignatures[K]> extends [
                any,
                ...infer Q,
            ]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the current domain being browsed.
         * @returns the current domain name
         */
        get_current_domain(): string;
        /**
         * Get the domain requesting permission to access its cookies while browsing the current domain.
         * @returns the requesting domain name
         */
        get_requesting_domain(): string;
        /**
         * Allow the action which triggered this request.
         */
        allow(): void;
        /**
         * Deny the action which triggered this request.
         */
        deny(): void;
        /**
         * Allow the action which triggered this request.
         * @virtual
         */
        vfunc_allow(): void;
        /**
         * Deny the action which triggered this request.
         * @virtual
         */
        vfunc_deny(): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace WebsiteDataManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::base-cache-directory': (pspec: GObject.ParamSpec) => void;
            'notify::base-data-directory': (pspec: GObject.ParamSpec) => void;
            'notify::disk-cache-directory': (pspec: GObject.ParamSpec) => void;
            'notify::dom-cache-directory': (pspec: GObject.ParamSpec) => void;
            'notify::hsts-cache-directory': (pspec: GObject.ParamSpec) => void;
            'notify::indexeddb-directory': (pspec: GObject.ParamSpec) => void;
            'notify::is-ephemeral': (pspec: GObject.ParamSpec) => void;
            'notify::itp-directory': (pspec: GObject.ParamSpec) => void;
            'notify::local-storage-directory': (pspec: GObject.ParamSpec) => void;
            'notify::offline-application-cache-directory': (pspec: GObject.ParamSpec) => void;
            'notify::service-worker-registrations-directory': (pspec: GObject.ParamSpec) => void;
            'notify::websql-directory': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            base_cache_directory: string;
            baseCacheDirectory: string;
            base_data_directory: string;
            baseDataDirectory: string;
            disk_cache_directory: string;
            diskCacheDirectory: string;
            dom_cache_directory: string;
            domCacheDirectory: string;
            hsts_cache_directory: string;
            hstsCacheDirectory: string;
            indexeddb_directory: string;
            indexeddbDirectory: string;
            is_ephemeral: boolean;
            isEphemeral: boolean;
            itp_directory: string;
            itpDirectory: string;
            local_storage_directory: string;
            localStorageDirectory: string;
            offline_application_cache_directory: string;
            offlineApplicationCacheDirectory: string;
            service_worker_registrations_directory: string;
            serviceWorkerRegistrationsDirectory: string;
            websql_directory: string;
            websqlDirectory: string;
        }
    }

    /**
     * Manages data stored locally by web sites.
     *
     * WebKitWebsiteDataManager allows you to manage the data that websites
     * can store in the client file system like databases or caches.
     * You can use WebKitWebsiteDataManager to configure the local directories
     * where the Website data will be stored, by creating a new manager with
     * `webkit_website_data_manager_new()` passing the values you want to set.
     * You can set all the possible configuration values or only some of them,
     * a default value will be used automatically for the configuration options
     * not provided. {@link WebKit2.WebsiteDataManager.base_data_directory} and
     * {@link WebKit2.WebsiteDataManager.base_cache_directory} are two special properties
     * that can be used to set a common base directory for all Website data and
     * caches. It's possible to provide both, a base directory and a specific value,
     * but in that case, the specific value takes precedence over the base directory.
     * The newly created WebKitWebsiteDataManager must be passed as a construct property
     * to a {@link WebKit2.WebContext}, you can use `webkit_web_context_new_with_website_data_manager()`
     * to create a new {@link WebKit2.WebContext} with a WebKitWebsiteDataManager.
     * In case you don't want to set any specific configuration, you don't need to create
     * a WebKitWebsiteDataManager, the {@link WebKit2.WebContext} will create a WebKitWebsiteDataManager
     * with the default configuration. To get the WebKitWebsiteDataManager of a {@link WebKit2.WebContext}
     * you can use `webkit_web_context_get_website_data_manager()`.
     *
     * A WebKitWebsiteDataManager can also be ephemeral and then all the directories configuration
     * is not needed because website data will never persist. You can create an ephemeral WebKitWebsiteDataManager
     * with `webkit_website_data_manager_new_ephemeral()`. Then you can pass an ephemeral WebKitWebsiteDataManager to
     * a {@link WebKit2.WebContext} to make it ephemeral or use `webkit_web_context_new_ephemeral()` and the WebKitWebsiteDataManager
     * will be automatically created by the {@link WebKit2.WebContext}.
     *
     * WebKitWebsiteDataManager can also be used to fetch websites data, remove data
     * stored by particular websites, or clear data for all websites modified since a given
     * period of time.
     * @gir-type Class
     * @since 2.10
     */
    class WebsiteDataManager extends GObject.Object {
        static $gtype: GObject.GType<WebsiteDataManager>;

        // Properties

        /**
         * The base directory for Website cache. This is used as a base directory
         * for any Website cache when no specific cache directory has been provided.
         * @since 2.10
         * @construct-only
         */
        get base_cache_directory(): string;
        /**
         * The base directory for Website cache. This is used as a base directory
         * for any Website cache when no specific cache directory has been provided.
         * @since 2.10
         * @construct-only
         */
        get baseCacheDirectory(): string;
        /**
         * The base directory for Website data. This is used as a base directory
         * for any Website data when no specific data directory has been provided.
         * @since 2.10
         * @construct-only
         */
        get base_data_directory(): string;
        /**
         * The base directory for Website data. This is used as a base directory
         * for any Website data when no specific data directory has been provided.
         * @since 2.10
         * @construct-only
         */
        get baseDataDirectory(): string;
        /**
         * The directory where HTTP disk cache will be stored.
         * @since 2.10
         * @construct-only
         */
        get disk_cache_directory(): string;
        /**
         * The directory where HTTP disk cache will be stored.
         * @since 2.10
         * @construct-only
         */
        get diskCacheDirectory(): string;
        /**
         * The directory where DOM cache will be stored.
         * @since 2.30
         * @construct-only
         */
        get dom_cache_directory(): string;
        /**
         * The directory where DOM cache will be stored.
         * @since 2.30
         * @construct-only
         */
        get domCacheDirectory(): string;
        /**
         * The directory where the HTTP Strict-Transport-Security (HSTS) cache will be stored.
         * @since 2.26
         * @construct-only
         */
        get hsts_cache_directory(): string;
        /**
         * The directory where the HTTP Strict-Transport-Security (HSTS) cache will be stored.
         * @since 2.26
         * @construct-only
         */
        get hstsCacheDirectory(): string;
        /**
         * The directory where IndexedDB databases will be stored.
         * @since 2.10
         * @construct-only
         */
        get indexeddb_directory(): string;
        /**
         * The directory where IndexedDB databases will be stored.
         * @since 2.10
         * @construct-only
         */
        get indexeddbDirectory(): string;
        /**
         * Whether the {@link WebKit2.WebsiteDataManager} is ephemeral. An ephemeral {@link WebKit2.WebsiteDataManager}
         * handles all websites data as non-persistent, and nothing will be written to the client
         * storage. Note that if you create an ephemeral {@link WebKit2.WebsiteDataManager} all other construction
         * parameters to configure data directories will be ignored.
         * @since 2.16
         * @construct-only
         */
        get is_ephemeral(): boolean;
        /**
         * Whether the {@link WebKit2.WebsiteDataManager} is ephemeral. An ephemeral {@link WebKit2.WebsiteDataManager}
         * handles all websites data as non-persistent, and nothing will be written to the client
         * storage. Note that if you create an ephemeral {@link WebKit2.WebsiteDataManager} all other construction
         * parameters to configure data directories will be ignored.
         * @since 2.16
         * @construct-only
         */
        get isEphemeral(): boolean;
        /**
         * The directory where Intelligent Tracking Prevention (ITP) data will be stored.
         * @since 2.30
         * @construct-only
         */
        get itp_directory(): string;
        /**
         * The directory where Intelligent Tracking Prevention (ITP) data will be stored.
         * @since 2.30
         * @construct-only
         */
        get itpDirectory(): string;
        /**
         * The directory where local storage data will be stored.
         * @since 2.10
         * @construct-only
         */
        get local_storage_directory(): string;
        /**
         * The directory where local storage data will be stored.
         * @since 2.10
         * @construct-only
         */
        get localStorageDirectory(): string;
        /**
         * The directory where offline web application cache will be stored.
         * @since 2.10
         * @construct-only
         */
        get offline_application_cache_directory(): string;
        /**
         * The directory where offline web application cache will be stored.
         * @since 2.10
         * @construct-only
         */
        get offlineApplicationCacheDirectory(): string;
        /**
         * The directory where service workers registrations will be stored.
         * @since 2.30
         * @construct-only
         */
        get service_worker_registrations_directory(): string;
        /**
         * The directory where service workers registrations will be stored.
         * @since 2.30
         * @construct-only
         */
        get serviceWorkerRegistrationsDirectory(): string;
        /**
         * The directory where WebSQL databases will be stored.
         * @since 2.10
         * @deprecated since 2.24.: WebSQL is no longer supported. Use IndexedDB instead.
         * @construct-only
         */
        get websql_directory(): string;
        /**
         * The directory where WebSQL databases will be stored.
         * @since 2.10
         * @deprecated since 2.24.: WebSQL is no longer supported. Use IndexedDB instead.
         * @construct-only
         */
        get websqlDirectory(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WebsiteDataManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WebsiteDataManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_ephemeral(): WebsiteDataManager;

        // Signals

        /** @signal */
        connect<K extends keyof WebsiteDataManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebsiteDataManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WebsiteDataManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebsiteDataManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WebsiteDataManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WebsiteDataManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Sets `settings` as the {@link WebKit2.MemoryPressureSettings}.
         *
         * Sets `settings` as the {@link WebKit2.MemoryPressureSettings} to be used by all the network
         * processes created by any instance of {@link WebKit2.WebsiteDataManager} after this function
         * is called.
         *
         * Be sure to call this function before creating any {@link WebKit2.WebsiteDataManager}, as network
         * processes of existing instances are not guaranteed to receive the passed settings.
         *
         * The periodic check for used memory is disabled by default on network processes. This will
         * be enabled only if custom settings have been set using this function. After that, in order
         * to remove the custom settings and disable the periodic check, this function must be called
         * passing `null` as the value of `settings`.
         * @param settings a WebKitMemoryPressureSettings.
         */
        static set_memory_pressure_settings(settings: MemoryPressureSettings): void;

        // Methods

        /**
         * Asynchronously clear the website data of the given `types` modified in the past `timespan`.
         *
         * If `timespan` is 0, all website data will be removed.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_website_data_manager_clear_finish()` to get the result of the operation.
         *
         * Due to implementation limitations, this function does not currently delete
         * any stored cookies if `timespan` is nonzero. This behavior may change in the
         * future.
         * @param types {@link WebKit2.WebsiteDataTypes}
         * @param timespan a {@link GLib.TimeSpan}
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         */
        clear(
            types: WebsiteDataTypes | null,
            timespan: GLib.TimeSpan,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously clear the website data of the given `types` modified in the past `timespan`.
         *
         * If `timespan` is 0, all website data will be removed.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_website_data_manager_clear_finish()` to get the result of the operation.
         *
         * Due to implementation limitations, this function does not currently delete
         * any stored cookies if `timespan` is nonzero. This behavior may change in the
         * future.
         * @param types {@link WebKit2.WebsiteDataTypes}
         * @param timespan a {@link GLib.TimeSpan}
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        clear(
            types: WebsiteDataTypes | null,
            timespan: GLib.TimeSpan,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously clear the website data of the given `types` modified in the past `timespan`.
         *
         * If `timespan` is 0, all website data will be removed.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_website_data_manager_clear_finish()` to get the result of the operation.
         *
         * Due to implementation limitations, this function does not currently delete
         * any stored cookies if `timespan` is nonzero. This behavior may change in the
         * future.
         * @param types {@link WebKit2.WebsiteDataTypes}
         * @param timespan a {@link GLib.TimeSpan}
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        clear(
            types: WebsiteDataTypes | null,
            timespan: GLib.TimeSpan,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finish an asynchronous operation started with `webkit_website_data_manager_clear()`
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if website data was successfully cleared, or `false` otherwise.
         */
        clear_finish(result: Gio.AsyncResult): boolean;
        /**
         * Asynchronously get the list of {@link WebKit2.WebsiteData} for the given `types`.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_website_data_manager_fetch_finish()` to get the result of the operation.
         * @param types {@link WebKit2.WebsiteDataTypes}
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         */
        fetch(types: WebsiteDataTypes | null, cancellable?: Gio.Cancellable | null): globalThis.Promise<WebsiteData[]>;
        /**
         * Asynchronously get the list of {@link WebKit2.WebsiteData} for the given `types`.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_website_data_manager_fetch_finish()` to get the result of the operation.
         * @param types {@link WebKit2.WebsiteDataTypes}
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        fetch(
            types: WebsiteDataTypes | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously get the list of {@link WebKit2.WebsiteData} for the given `types`.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_website_data_manager_fetch_finish()` to get the result of the operation.
         * @param types {@link WebKit2.WebsiteDataTypes}
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        fetch(
            types: WebsiteDataTypes | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<WebsiteData[]> | void;
        /**
         * Finish an asynchronous operation started with `webkit_website_data_manager_fetch()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns a {@link GLib.List} of {@link WebKit2.WebsiteData}. You must free the {@link GLib.List} with    `g_list_free()` and unref the {@link WebKit2.WebsiteData}<!-- -->s with `webkit_website_data_unref()` when you're done with them.
         */
        fetch_finish(result: Gio.AsyncResult): WebsiteData[];
        /**
         * Get the {@link WebKit2.WebsiteDataManager.base_cache_directory} property.
         * @returns the base directory for Website cache, or `null` if    {@link WebKit2.WebsiteDataManager.base_cache_directory} was not provided or `manager` is ephemeral.
         */
        get_base_cache_directory(): string | null;
        /**
         * Get the {@link WebKit2.WebsiteDataManager.base_data_directory} property.
         * @returns the base directory for Website data, or `null` if    {@link WebKit2.WebsiteDataManager.base_data_directory} was not provided or `manager` is ephemeral.
         */
        get_base_data_directory(): string | null;
        /**
         * Get the {@link WebKit2.CookieManager} of `manager`.
         * @returns a {@link WebKit2.CookieManager}
         */
        get_cookie_manager(): CookieManager;
        /**
         * Get the {@link WebKit2.WebsiteDataManager.disk_cache_directory} property.
         * @returns the directory where HTTP disk cache is stored or `null` if `manager` is ephemeral.
         */
        get_disk_cache_directory(): string | null;
        /**
         * Get the {@link WebKit2.WebsiteDataManager.dom_cache_directory} property.
         * @returns the directory where DOM cache is stored or `null` if `manager` is ephemeral.
         */
        get_dom_cache_directory(): string | null;
        /**
         * Get the {@link WebKit2.WebsiteDataManager.hsts_cache_directory} property.
         * @returns the directory where the HSTS cache is stored or `null` if `manager` is ephemeral.
         */
        get_hsts_cache_directory(): string | null;
        /**
         * Get the {@link WebKit2.WebsiteDataManager.indexeddb_directory} property.
         * @returns the directory where IndexedDB databases are stored or `null` if `manager` is ephemeral.
         */
        get_indexeddb_directory(): string | null;
        /**
         * Get the {@link WebKit2.WebsiteDataManager.itp_directory} property.
         * @returns the directory where Intelligent Tracking Prevention data is stored or `null` if `manager` is ephemeral.
         */
        get_itp_directory(): string | null;
        /**
         * Get whether Intelligent Tracking Prevention (ITP) is enabled or not.
         * @returns `true` if ITP is enabled, or `false` otherwise.
         */
        get_itp_enabled(): boolean;
        /**
         * Asynchronously get the list of {@link WebKit2.ITPThirdParty} seen for `manager`.
         *
         * Every {@link WebKit2.ITPThirdParty}
         * contains the list of {@link WebKit2.ITPFirstParty} under which it has been seen.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_website_data_manager_get_itp_summary_finish()` to get the result of the operation.
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         */
        get_itp_summary(cancellable?: Gio.Cancellable | null): globalThis.Promise<ITPThirdParty[]>;
        /**
         * Asynchronously get the list of {@link WebKit2.ITPThirdParty} seen for `manager`.
         *
         * Every {@link WebKit2.ITPThirdParty}
         * contains the list of {@link WebKit2.ITPFirstParty} under which it has been seen.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_website_data_manager_get_itp_summary_finish()` to get the result of the operation.
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_itp_summary(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously get the list of {@link WebKit2.ITPThirdParty} seen for `manager`.
         *
         * Every {@link WebKit2.ITPThirdParty}
         * contains the list of {@link WebKit2.ITPFirstParty} under which it has been seen.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_website_data_manager_get_itp_summary_finish()` to get the result of the operation.
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_itp_summary(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<ITPThirdParty[]> | void;
        /**
         * Finish an asynchronous operation started with `webkit_website_data_manager_get_itp_summary()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns a {@link GLib.List} of {@link WebKit2.ITPThirdParty}.    You must free the {@link GLib.List} with `g_list_free()` and unref the {@link WebKit2.ITPThirdParty}<!-- -->s with    `webkit_itp_third_party_unref()` when you're done with them.
         */
        get_itp_summary_finish(result: Gio.AsyncResult): ITPThirdParty[];
        /**
         * Get the {@link WebKit2.WebsiteDataManager.local_storage_directory} property.
         * @returns the directory where local storage data is stored or `null` if `manager` is ephemeral.
         */
        get_local_storage_directory(): string | null;
        /**
         * Get the {@link WebKit2.WebsiteDataManager.offline_application_cache_directory} property.
         * @returns the directory where offline web application cache is stored or `null` if `manager` is ephemeral.
         */
        get_offline_application_cache_directory(): string | null;
        /**
         * Get whether persistent credential storage is enabled or not.
         *
         * See also `webkit_website_data_manager_set_persistent_credential_storage_enabled()`.
         * @returns `true` if persistent credential storage is enabled, or `false` otherwise.
         */
        get_persistent_credential_storage_enabled(): boolean;
        /**
         * Get the {@link WebKit2.WebsiteDataManager.service_worker_registrations_directory} property.
         * @returns the directory where service worker registrations are stored or `null` if `manager` is ephemeral.
         */
        get_service_worker_registrations_directory(): string | null;
        /**
         * Get the TLS errors policy of `manager`.
         * @returns a {@link WebKit2.TLSErrorsPolicy}
         */
        get_tls_errors_policy(): TLSErrorsPolicy;
        /**
         * Get the {@link WebKit2.WebsiteDataManager.websql_directory} property.
         * @returns the directory where WebSQL databases are stored or `null` if `manager` is ephemeral.
         */
        get_websql_directory(): string | null;
        /**
         * Asynchronously removes the website data in the given `website_data` list.
         *
         * Asynchronously removes the website data of the given `types` for websites in the given `website_data` list.
         * Use `webkit_website_data_manager_clear()` if you want to remove the website data for all sites.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_website_data_manager_remove_finish()` to get the result of the operation.
         * @param types {@link WebKit2.WebsiteDataTypes}
         * @param website_data a {@link GLib.List} of {@link WebKit2.WebsiteData}
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         */
        remove(
            types: WebsiteDataTypes | null,
            website_data: WebsiteData[],
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously removes the website data in the given `website_data` list.
         *
         * Asynchronously removes the website data of the given `types` for websites in the given `website_data` list.
         * Use `webkit_website_data_manager_clear()` if you want to remove the website data for all sites.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_website_data_manager_remove_finish()` to get the result of the operation.
         * @param types {@link WebKit2.WebsiteDataTypes}
         * @param website_data a {@link GLib.List} of {@link WebKit2.WebsiteData}
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        remove(
            types: WebsiteDataTypes | null,
            website_data: WebsiteData[],
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously removes the website data in the given `website_data` list.
         *
         * Asynchronously removes the website data of the given `types` for websites in the given `website_data` list.
         * Use `webkit_website_data_manager_clear()` if you want to remove the website data for all sites.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * `webkit_website_data_manager_remove_finish()` to get the result of the operation.
         * @param types {@link WebKit2.WebsiteDataTypes}
         * @param website_data a {@link GLib.List} of {@link WebKit2.WebsiteData}
         * @param cancellable a {@link Gio.Cancellable} or `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        remove(
            types: WebsiteDataTypes | null,
            website_data: WebsiteData[],
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finish an asynchronous operation started with `webkit_website_data_manager_remove()`.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if website data resources were successfully removed, or `false` otherwise.
         */
        remove_finish(result: Gio.AsyncResult): boolean;
        /**
         * Enable or disable Intelligent Tracking Prevention (ITP).
         *
         * When ITP is enabled resource load statistics
         * are collected and used to decide whether to allow or block third-party cookies and prevent user tracking.
         * Note that while ITP is enabled the accept policy {@link WebKit2.CookieAcceptPolicy.NO_THIRD_PARTY} is ignored and
         * {@link WebKit2.CookieAcceptPolicy.ALWAYS} is used instead. See also `webkit_cookie_manager_set_accept_policy()`.
         * @param enabled value to set
         */
        set_itp_enabled(enabled: boolean): void;
        /**
         * Set the network proxy settings to be used by connections started in `manager` session.
         *
         * By default {@link WebKit2.NetworkProxyMode.DEFAULT} is used, which means that the
         * system settings will be used (g_proxy_resolver_get_default()).
         * If you want to override the system default settings, you can either use
         * {@link WebKit2.NetworkProxyMode.NO_PROXY} to make sure no proxies are used at all,
         * or {@link WebKit2.NetworkProxyMode.CUSTOM} to provide your own proxy settings.
         * When `proxy_mode` is {@link WebKit2.NetworkProxyMode.CUSTOM} `proxy_settings` must be
         * a valid {@link WebKit2.NetworkProxySettings}; otherwise, `proxy_settings` must be `null`.
         * @param proxy_mode a {@link WebKit2.NetworkProxyMode}
         * @param proxy_settings a {@link WebKit2.NetworkProxySettings}, or `null`
         */
        set_network_proxy_settings(
            proxy_mode: NetworkProxyMode | null,
            proxy_settings?: NetworkProxySettings | null,
        ): void;
        /**
         * Enable or disable persistent credential storage.
         *
         * When enabled, which is the default for
         * non-ephemeral sessions, the network process will try to read and write HTTP authentiacation
         * credentials from persistent storage.
         * @param enabled value to set
         */
        set_persistent_credential_storage_enabled(enabled: boolean): void;
        /**
         * Set the TLS errors policy of `manager` as `policy`.
         * @param policy a {@link WebKit2.TLSErrorsPolicy}
         */
        set_tls_errors_policy(policy: TLSErrorsPolicy | null): void;
    }

    namespace WebsitePolicies {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::autoplay': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            autoplay: AutoplayPolicy;
        }
    }

    /**
     * View specific website policies.
     *
     * WebKitWebsitePolicies allows you to configure per-page policies,
     * currently only autoplay policies are supported.
     * @gir-type Class
     * @since 2.30
     */
    class WebsitePolicies extends GObject.Object {
        static $gtype: GObject.GType<WebsitePolicies>;

        // Properties

        /**
         * The {@link WebKit2.AutoplayPolicy} of {@link WebKit2.WebsitePolicies}.
         * @since 2.30
         * @construct-only
         */
        get autoplay(): AutoplayPolicy;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WebsitePolicies.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WebsitePolicies.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): WebsitePolicies;

        // Signals

        /** @signal */
        connect<K extends keyof WebsitePolicies.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebsitePolicies.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WebsitePolicies.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebsitePolicies.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WebsitePolicies.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WebsitePolicies.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the {@link WebKit2.WebsitePolicies.autoplay} property.
         * @returns {@link WebKit2.AutoplayPolicy}
         */
        get_autoplay_policy(): AutoplayPolicy;
    }

    namespace WindowProperties {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::fullscreen': (pspec: GObject.ParamSpec) => void;
            'notify::geometry': (pspec: GObject.ParamSpec) => void;
            'notify::locationbar-visible': (pspec: GObject.ParamSpec) => void;
            'notify::menubar-visible': (pspec: GObject.ParamSpec) => void;
            'notify::resizable': (pspec: GObject.ParamSpec) => void;
            'notify::scrollbars-visible': (pspec: GObject.ParamSpec) => void;
            'notify::statusbar-visible': (pspec: GObject.ParamSpec) => void;
            'notify::toolbar-visible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            fullscreen: boolean;
            geometry: Gdk.Rectangle;
            locationbar_visible: boolean;
            locationbarVisible: boolean;
            menubar_visible: boolean;
            menubarVisible: boolean;
            resizable: boolean;
            scrollbars_visible: boolean;
            scrollbarsVisible: boolean;
            statusbar_visible: boolean;
            statusbarVisible: boolean;
            toolbar_visible: boolean;
            toolbarVisible: boolean;
        }
    }

    /**
     * Window properties of a {@link WebKit2.WebView}.
     *
     * The content of a {@link WebKit2.WebView} can request to change certain
     * properties of the window containing the view. This can include the x, y position
     * of the window, the width and height but also if a toolbar,
     * scrollbar, statusbar, locationbar should be visible to the user,
     * and the request to show the {@link WebKit2.WebView} fullscreen.
     *
     * The {@link WebKit2.WebView.SignalSignatures.ready_to_show | WebKit2.WebView::ready-to-show} signal handler is the proper place
     * to apply the initial window properties. Then you can monitor the
     * {@link WebKit2.WindowProperties} by connecting to ::notify signal.
     *
     * ```c
     * static void ready_to_show_cb (WebKitWebView *web_view, gpointer user_data)
     * {
     *     GtkWidget *window;
     *     WebKitWindowProperties *window_properties;
     *     gboolean visible;
     *
     *     // Create the window to contain the WebKitWebView.
     *     window = browser_window_new ();
     *     gtk_container_add (GTK_CONTAINER (window), GTK_WIDGET (web_view));
     *     gtk_widget_show (GTK_WIDGET (web_view));
     *
     *     // Get the WebKitWindowProperties of the web view and monitor it.
     *     window_properties = webkit_web_view_get_window_properties (web_view);
     *     g_signal_connect (window_properties, "notify::geometry",
     *                       G_CALLBACK (window_geometry_changed), window);
     *     g_signal_connect (window_properties, "notify::toolbar-visible",
     *                       G_CALLBACK (window_toolbar_visibility_changed), window);
     *     g_signal_connect (window_properties, "notify::menubar-visible",
     *                       G_CALLBACK (window_menubar_visibility_changed), window);
     *
     *     // Apply the window properties before showing the window.
     *     visible = webkit_window_properties_get_toolbar_visible (window_properties);
     *     browser_window_set_toolbar_visible (BROWSER_WINDOW (window), visible);
     *     visible = webkit_window_properties_get_menubar_visible (window_properties);
     *     browser_window_set_menubar_visible (BROWSER_WINDOW (window), visible);
     *
     *     if (webkit_window_properties_get_fullscreen (window_properties)) {
     *         gtk_window_fullscreen (GTK_WINDOW (window));
     *     } else {
     *         GdkRectangle geometry;
     *
     *         gtk_window_set_resizable (GTK_WINDOW (window),
     *                                   webkit_window_properties_get_resizable (window_properties));
     *         webkit_window_properties_get_geometry (window_properties, &geometry);
     *         gtk_window_move (GTK_WINDOW (window), geometry.x, geometry.y);
     *         gtk_window_resize (GTK_WINDOW (window), geometry.width, geometry.height);
     *     }
     *
     *     gtk_widget_show (window);
     * }
     * ```
     * @gir-type Class
     */
    class WindowProperties extends GObject.Object {
        static $gtype: GObject.GType<WindowProperties>;

        // Properties

        /**
         * Whether window will be displayed fullscreen.
         * @construct-only
         */
        get fullscreen(): boolean;
        /**
         * The size and position of the window on the screen.
         * @construct-only
         */
        get geometry(): Gdk.Rectangle;
        /**
         * Whether the locationbar should be visible for the window.
         * @construct-only
         */
        get locationbar_visible(): boolean;
        /**
         * Whether the locationbar should be visible for the window.
         * @construct-only
         */
        get locationbarVisible(): boolean;
        /**
         * Whether the menubar should be visible for the window.
         * @construct-only
         */
        get menubar_visible(): boolean;
        /**
         * Whether the menubar should be visible for the window.
         * @construct-only
         */
        get menubarVisible(): boolean;
        /**
         * Whether the window can be resized.
         * @construct-only
         */
        get resizable(): boolean;
        /**
         * Whether the scrollbars should be visible for the window.
         * @construct-only
         */
        get scrollbars_visible(): boolean;
        /**
         * Whether the scrollbars should be visible for the window.
         * @construct-only
         */
        get scrollbarsVisible(): boolean;
        /**
         * Whether the statusbar should be visible for the window.
         * @construct-only
         */
        get statusbar_visible(): boolean;
        /**
         * Whether the statusbar should be visible for the window.
         * @construct-only
         */
        get statusbarVisible(): boolean;
        /**
         * Whether the toolbar should be visible for the window.
         * @construct-only
         */
        get toolbar_visible(): boolean;
        /**
         * Whether the toolbar should be visible for the window.
         * @construct-only
         */
        get toolbarVisible(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WindowProperties.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WindowProperties.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WindowProperties.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WindowProperties.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WindowProperties.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WindowProperties.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WindowProperties.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WindowProperties.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get whether the window should be shown in fullscreen state or not.
         * @returns `true` if the window should be fullscreen or `false` otherwise.
         */
        get_fullscreen(): boolean;
        /**
         * Get the geometry the window should have on the screen when shown.
         */
        get_geometry(): Gdk.Rectangle;
        /**
         * Get whether the window should have the locationbar visible or not.
         * @returns `true` if locationbar should be visible or `false` otherwise.
         */
        get_locationbar_visible(): boolean;
        /**
         * Get whether the window should have the menubar visible or not.
         * @returns `true` if menubar should be visible or `false` otherwise.
         */
        get_menubar_visible(): boolean;
        /**
         * Get whether the window should be resizable by the user or not.
         * @returns `true` if the window should be resizable or `false` otherwise.
         */
        get_resizable(): boolean;
        /**
         * Get whether the window should have the scrollbars visible or not.
         * @returns `true` if scrollbars should be visible or `false` otherwise.
         */
        get_scrollbars_visible(): boolean;
        /**
         * Get whether the window should have the statusbar visible or not.
         * @returns `true` if statusbar should be visible or `false` otherwise.
         */
        get_statusbar_visible(): boolean;
        /**
         * Get whether the window should have the toolbar visible or not.
         * @returns `true` if toolbar should be visible or `false` otherwise.
         */
        get_toolbar_visible(): boolean;
    }

    /**
     * Information about an application running in automation mode.
     * @gir-type Struct
     */
    class ApplicationInfo {
        static $gtype: GObject.GType<ApplicationInfo>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): ApplicationInfo;

        // Methods

        /**
         * Get the name of the application.
         *
         * If `webkit_application_info_set_name()` hasn't been
         * called with a valid name, this returns `g_get_prgname()`.
         * @returns the application name
         */
        get_name(): string;
        /**
         * Get the application version previously set with `webkit_application_info_set_version()`.
         */
        get_version(): [number, number, number];
        /**
         * Atomically increments the reference count of `info` by one.
         *
         * This
         * function is MT-safe and may be called from any thread.
         * @returns The passed in {@link WebKit2.ApplicationInfo}
         */
        ref(): ApplicationInfo;
        /**
         * Set the name of the application.
         *
         * If not provided, or `null` is passed,
         * `g_get_prgname()` will be used.
         * @param name the application name
         */
        set_name(name: string): void;
        /**
         * Set the application version.
         *
         * If the application doesn't use the format
         * major.minor.micro you can pass 0 as the micro to use major.minor, or pass
         * 0 as both micro and minor to use only major number. Any other format must
         * be converted to major.minor.micro so that it can be used in version comparisons.
         * @param major the major version number
         * @param minor the minor version number
         * @param micro the micro version number
         */
        set_version(major: number, minor: number, micro: number): void;
        /**
         * Atomically decrements the reference count of `info` by one.
         *
         * If the
         * reference count drops to 0, all memory allocated by the {@link WebKit2.ApplicationInfo} is
         * released. This function is MT-safe and may be called from any
         * thread.
         */
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type AuthenticationRequestClass = typeof AuthenticationRequest;
    /**
     * @gir-type Struct
     */
    abstract class AuthenticationRequestPrivate {
        static $gtype: GObject.GType<AuthenticationRequestPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type AutomationSessionClass = typeof AutomationSession;
    /**
     * @gir-type Struct
     */
    abstract class AutomationSessionPrivate {
        static $gtype: GObject.GType<AutomationSessionPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type BackForwardListClass = typeof BackForwardList;
    /**
     * @gir-type Alias
     */
    type BackForwardListItemClass = typeof BackForwardListItem;
    /**
     * @gir-type Struct
     */
    abstract class BackForwardListItemPrivate {
        static $gtype: GObject.GType<BackForwardListItemPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class BackForwardListPrivate {
        static $gtype: GObject.GType<BackForwardListPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ColorChooserRequestClass = typeof ColorChooserRequest;
    /**
     * @gir-type Struct
     */
    abstract class ColorChooserRequestPrivate {
        static $gtype: GObject.GType<ColorChooserRequestPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ContextMenuClass = typeof ContextMenu;
    /**
     * @gir-type Alias
     */
    type ContextMenuItemClass = typeof ContextMenuItem;
    /**
     * @gir-type Struct
     */
    abstract class ContextMenuItemPrivate {
        static $gtype: GObject.GType<ContextMenuItemPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class ContextMenuPrivate {
        static $gtype: GObject.GType<ContextMenuPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type CookieManagerClass = typeof CookieManager;
    /**
     * @gir-type Struct
     */
    abstract class CookieManagerPrivate {
        static $gtype: GObject.GType<CookieManagerPrivate>;
    }

    /**
     * Groups information used for user authentication.
     * @gir-type Struct
     * @since 2.2
     */
    class Credential {
        static $gtype: GObject.GType<Credential>;

        // Constructors

        constructor(username: string, password: string, persistence: CredentialPersistence);

        static ['new'](username: string, password: string, persistence: CredentialPersistence): Credential;

        static new_for_certificate(
            certificate: Gio.TlsCertificate | null,
            persistence: CredentialPersistence,
        ): Credential;

        static new_for_certificate_pin(pin: string, persistence: CredentialPersistence): Credential;

        // Methods

        /**
         * Make a copy of the {@link WebKit2.Credential}.
         * @returns A copy of passed in {@link WebKit2.Credential}
         */
        copy(): Credential;
        /**
         * Free the {@link WebKit2.Credential}.
         */
        free(): void;
        /**
         * Get the certificate currently held by this {@link WebKit2.Credential}.
         * @returns a {@link Gio.TlsCertificate}, or `null`
         */
        get_certificate(): Gio.TlsCertificate;
        /**
         * Get the password currently held by this {@link WebKit2.Credential}.
         * @returns The password stored in the {@link WebKit2.Credential}.
         */
        get_password(): string;
        /**
         * Get the persistence mode currently held by this {@link WebKit2.Credential}.
         * @returns The {@link WebKit2.CredentialPersistence} stored in the {@link WebKit2.Credential}.
         */
        get_persistence(): CredentialPersistence;
        /**
         * Get the username currently held by this {@link WebKit2.Credential}.
         * @returns The username stored in the {@link WebKit2.Credential}.
         */
        get_username(): string;
        /**
         * Determine whether this credential has a password stored.
         * @returns `true` if the credential has a password or `false` otherwise.
         */
        has_password(): boolean;
    }

    /**
     * @gir-type Alias
     */
    type DeviceInfoPermissionRequestClass = typeof DeviceInfoPermissionRequest;
    /**
     * @gir-type Struct
     */
    abstract class DeviceInfoPermissionRequestPrivate {
        static $gtype: GObject.GType<DeviceInfoPermissionRequestPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DownloadClass = typeof Download;
    /**
     * @gir-type Struct
     */
    abstract class DownloadPrivate {
        static $gtype: GObject.GType<DownloadPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type EditorStateClass = typeof EditorState;
    /**
     * @gir-type Struct
     */
    abstract class EditorStatePrivate {
        static $gtype: GObject.GType<EditorStatePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type FaviconDatabaseClass = typeof FaviconDatabase;
    /**
     * @gir-type Struct
     */
    abstract class FaviconDatabasePrivate {
        static $gtype: GObject.GType<FaviconDatabasePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type FileChooserRequestClass = typeof FileChooserRequest;
    /**
     * @gir-type Struct
     */
    abstract class FileChooserRequestPrivate {
        static $gtype: GObject.GType<FileChooserRequestPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type FindControllerClass = typeof FindController;
    /**
     * @gir-type Struct
     */
    abstract class FindControllerPrivate {
        static $gtype: GObject.GType<FindControllerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type FormSubmissionRequestClass = typeof FormSubmissionRequest;
    /**
     * @gir-type Struct
     */
    abstract class FormSubmissionRequestPrivate {
        static $gtype: GObject.GType<FormSubmissionRequestPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type GeolocationManagerClass = typeof GeolocationManager;
    /**
     * @gir-type Struct
     */
    abstract class GeolocationManagerPrivate {
        static $gtype: GObject.GType<GeolocationManagerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type GeolocationPermissionRequestClass = typeof GeolocationPermissionRequest;
    /**
     * @gir-type Struct
     */
    abstract class GeolocationPermissionRequestPrivate {
        static $gtype: GObject.GType<GeolocationPermissionRequestPrivate>;
    }

    /**
     * An opaque struct to provide position updates to a {@link WebKit2.GeolocationManager}.
     *
     * WebKitGeolocationPosition is an opaque struct used to provide position updates to a
     * {@link WebKit2.GeolocationManager} using `webkit_geolocation_manager_update_position()`.
     * @gir-type Struct
     * @since 2.26
     */
    class GeolocationPosition {
        static $gtype: GObject.GType<GeolocationPosition>;

        // Constructors

        constructor(latitude: number, longitude: number, accuracy: number);

        static ['new'](latitude: number, longitude: number, accuracy: number): GeolocationPosition;

        // Methods

        /**
         * Make a copy of the {@link WebKit2.GeolocationPosition}.
         * @returns a copy of `position`
         */
        copy(): GeolocationPosition;
        /**
         * Free the {@link WebKit2.GeolocationPosition}
         */
        free(): void;
        /**
         * Set the `position` altitude.
         * @param altitude altitude in meters
         */
        set_altitude(altitude: number): void;
        /**
         * Set the accuracy of `position` altitude.
         * @param altitude_accuracy accuracy of position altitude in meters
         */
        set_altitude_accuracy(altitude_accuracy: number): void;
        /**
         * Set the `position` heading.
         *
         * Set the `position` heading, as a positive angle between the direction of movement and the North
         * direction, in clockwise direction.
         * @param heading heading in degrees
         */
        set_heading(heading: number): void;
        /**
         * Set the `position` speed.
         * @param speed speed in meters per second
         */
        set_speed(speed: number): void;
        /**
         * Set the `position` timestamp.
         *
         * By default it's the time when the `position` was created.
         * @param timestamp timestamp in seconds since the epoch, or 0 to use current time
         */
        set_timestamp(timestamp: number): void;
    }

    /**
     * @gir-type Alias
     */
    type HitTestResultClass = typeof HitTestResult;
    /**
     * @gir-type Struct
     */
    abstract class HitTestResultPrivate {
        static $gtype: GObject.GType<HitTestResultPrivate>;
    }

    /**
     * Describes a first party origin.
     * @gir-type Struct
     * @since 2.30
     */
    abstract class ITPFirstParty {
        static $gtype: GObject.GType<ITPFirstParty>;

        // Methods

        /**
         * Get the domain name of `itp_first_party`.
         * @returns the domain name
         */
        get_domain(): string;
        /**
         * Get the last time a {@link WebKit2.ITPThirdParty} has been seen under `itp_first_party`.
         *
         * Each `WebKitITPFirstParty` is created by `webkit_itp_third_party_get_first_parties()` and
         * therefore corresponds to exactly one {@link WebKit2.ITPThirdParty}.
         * @returns the last update time as a {@link GLib.DateTime}
         */
        get_last_update_time(): GLib.DateTime;
        /**
         * Get whether `itp_first_party` has granted website data access to its {@link WebKit2.ITPThirdParty}.
         *
         * Each `WebKitITPFirstParty` is created by `webkit_itp_third_party_get_first_parties()` and
         * therefore corresponds to exactly one {@link WebKit2.ITPThirdParty}.
         * @returns `true` if website data access has been granted, or `false` otherwise
         */
        get_website_data_access_allowed(): boolean;
        /**
         * Atomically increments the reference count of `itp_first_party` by one.
         *
         * This function is MT-safe and may be called from any thread.
         * @returns The passed {@link WebKit2.ITPFirstParty}
         */
        ref(): ITPFirstParty;
        /**
         * Atomically decrements the reference count of `itp_first_party` by one.
         *
         * If the reference count drops to 0, all memory allocated by
         * {@link WebKit2.ITPFirstParty} is released. This function is MT-safe and may be
         * called from any thread.
         */
        unref(): void;
    }

    /**
     * Describes a third party origin.
     * @gir-type Struct
     * @since 2.30
     */
    abstract class ITPThirdParty {
        static $gtype: GObject.GType<ITPThirdParty>;

        // Methods

        /**
         * Get the domain name of `itp_third_party`.
         * @returns the domain name
         */
        get_domain(): string;
        /**
         * Get the list of {@link WebKit2.ITPFirstParty} under which `itp_third_party` has been seen.
         * @returns a {@link GLib.List} of {@link WebKit2.ITPFirstParty}
         */
        get_first_parties(): ITPFirstParty[];
        /**
         * Atomically increments the reference count of `itp_third_party` by one.
         *
         * This function is MT-safe and may be called from any thread.
         * @returns The passed {@link WebKit2.ITPThirdParty}
         */
        ref(): ITPThirdParty;
        /**
         * Atomically decrements the reference count of `itp_third_party` by one.
         *
         * If the reference count drops to 0, all memory allocated by
         * {@link WebKit2.ITPThirdParty} is released. This function is MT-safe and may be
         * called from any thread.
         */
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type InputMethodContextClass = typeof InputMethodContext;
    /**
     * @gir-type Struct
     */
    abstract class InputMethodContextPrivate {
        static $gtype: GObject.GType<InputMethodContextPrivate>;
    }

    /**
     * Range of text in an preedit string to be shown underlined.
     * @gir-type Struct
     * @since 2.28
     */
    class InputMethodUnderline {
        static $gtype: GObject.GType<InputMethodUnderline>;

        // Constructors

        constructor(start_offset: number, end_offset: number);

        static ['new'](start_offset: number, end_offset: number): InputMethodUnderline;

        // Methods

        /**
         * Make a copy of the {@link WebKit2.InputMethodUnderline}.
         * @returns A copy of passed in {@link WebKit2.InputMethodUnderline}
         */
        copy(): InputMethodUnderline;
        /**
         * Free the {@link WebKit2.InputMethodUnderline}.
         */
        free(): void;
        /**
         * Set the color of the underline.
         *
         * If `rgba` is `null` the foreground text color will be used
         * for the underline too.
         * @param rgba a {@link Gdk.RGBA} or `null`
         */
        set_color(rgba?: Gdk.RGBA | null): void;
    }

    /**
     * @gir-type Alias
     */
    type InstallMissingMediaPluginsPermissionRequestClass = typeof InstallMissingMediaPluginsPermissionRequest;
    /**
     * @gir-type Struct
     */
    abstract class InstallMissingMediaPluginsPermissionRequestPrivate {
        static $gtype: GObject.GType<InstallMissingMediaPluginsPermissionRequestPrivate>;
    }

    /**
     * Result of JavaScript evaluation in a web view.
     * @gir-type Struct
     */
    abstract class JavascriptResult {
        static $gtype: GObject.GType<JavascriptResult>;

        // Methods

        /**
         * Get the {@link JavaScriptCore.Value} of `js_result`.
         * @returns the {@link JavaScriptCore.Value} of the {@link WebKit2.JavascriptResult}
         */
        get_js_value(): JavaScriptCore.Value;
        /**
         * Atomically increments the reference count of `js_result` by one.
         *
         * This function is MT-safe and may be called from any thread.
         * @returns The passed in {@link WebKit2.JavascriptResult}
         */
        ref(): JavascriptResult;
        /**
         * Atomically decrements the reference count of `js_result` by one.
         *
         * If the reference count drops to 0,
         * all memory allocated by the {@link WebKit2.JavascriptResult} is
         * released. This function is MT-safe and may be called from any
         * thread.
         */
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type MediaKeySystemPermissionRequestClass = typeof MediaKeySystemPermissionRequest;
    /**
     * @gir-type Struct
     */
    abstract class MediaKeySystemPermissionRequestPrivate {
        static $gtype: GObject.GType<MediaKeySystemPermissionRequestPrivate>;
    }

    /**
     * A boxed type representing the settings for the memory pressure handler
     *
     * {@link WebKit2.MemoryPressureSettings} is a boxed type that can be used to provide some custom settings
     * to control how the memory pressure situations are handled by the different processes.
     *
     * The memory pressure system implemented inside the different process will try to keep the memory usage
     * under the defined memory limit. In order to do that, it will check the used memory with a user defined
     * frequency and decide whether it should try to release memory. The thresholds passed will define how urgent
     * is to release that memory.
     *
     * Take into account that badly defined parameters can greatly reduce the performance of the engine. For
     * example, setting memory limit too low with a fast poll interval can cause the process to constantly
     * be trying to release memory.
     *
     * A {@link WebKit2.MemoryPressureSettings} can be passed to a {@link WebKit2.WebContext} constructor, and the settings will
     * be applied to all the web processes created by that context.
     *
     * A {@link WebKit2.MemoryPressureSettings} can be passed to `webkit_website_data_manager_set_memory_pressure_settings()`,
     * and the settings will be applied to all the network processes created after that call by any instance of
     * {@link WebKit2.WebsiteDataManager}.
     * @gir-type Struct
     * @since 2.34
     */
    class MemoryPressureSettings {
        static $gtype: GObject.GType<MemoryPressureSettings>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): MemoryPressureSettings;

        // Methods

        /**
         * Make a copy of `settings`.
         * @returns A copy of of the passed {@link WebKit2.MemoryPressureSettings}.
         */
        copy(): MemoryPressureSettings;
        /**
         * Free the {@link WebKit2.MemoryPressureSettings}.
         */
        free(): void;
        /**
         * Gets the conservative memory usage threshold.
         * @returns value in the `(0, 1)` range.
         */
        get_conservative_threshold(): number;
        /**
         * Gets the kill memory usage threshold.
         * @returns positive value, can be zero.
         */
        get_kill_threshold(): number;
        /**
         * Gets the memory usage limit.
         * @returns current value, in megabytes.
         */
        get_memory_limit(): number;
        /**
         * Gets the interval at which memory usage is checked.
         * @returns current interval value, in seconds.
         */
        get_poll_interval(): number;
        /**
         * Gets the strict memory usage threshold.
         * @returns value in the `(0, 1)` range.
         */
        get_strict_threshold(): number;
        /**
         * Sets the memory limit for the conservative policy to start working.
         *
         * Sets `value` as the fraction of the defined memory limit where the conservative
         * policy starts working. This policy will try to reduce the memory footprint by
         * releasing non critical memory.
         *
         * The threshold must be bigger than 0 and smaller than 1, and it must be smaller
         * than the strict threshold defined in `settings`. The default value is 0.33.
         * @param value fraction of the memory limit where the conservative policy starts working.
         */
        set_conservative_threshold(value: number): void;
        /**
         * Sets `value` as the fraction of the defined memory limit where the process will be
         * killed.
         *
         * The threshold must be a value bigger or equal to 0. A value of 0 means that the process
         * is never killed. If the threshold is not 0, then it must be bigger than the strict threshold
         * defined in `settings`. The threshold can also have values bigger than 1. The default value is 0.
         * @param value fraction of the memory limit where the process will be killed because   of excessive memory usage.
         */
        set_kill_threshold(value: number): void;
        /**
         * Sets `memory_limit` the memory limit value to `settings`.
         *
         * The default value is the system's RAM size with a maximum of 3GB.
         * @param memory_limit amount of memory (in MB) that the process is allowed to use.
         */
        set_memory_limit(memory_limit: number): void;
        /**
         * Sets `value` as the poll interval used by `settings`.
         *
         * The poll interval value must be bigger than 0. The default value is 30 seconds.
         * @param value period (in seconds) between memory usage measurements.
         */
        set_poll_interval(value: number): void;
        /**
         * Sets the memory limit for the strict policy to start working.
         *
         * Sets `value` as the fraction of the defined memory limit where the strict
         * policy starts working. This policy will try to reduce the memory footprint by
         * releasing critical memory.
         *
         * The threshold must be bigger than 0 and smaller than 1. Also, it must be bigger
         * than the conservative threshold defined in `settings`, and smaller than the kill
         * threshold if the latter is not 0. The default value is 0.5.
         * @param value fraction of the memory limit where the strict policy starts working.
         */
        set_strict_threshold(value: number): void;
    }

    /**
     * Information about a MIME type.
     * @gir-type Struct
     */
    abstract class MimeInfo {
        static $gtype: GObject.GType<MimeInfo>;

        // Methods

        /**
         * Gets the description of the MIME type.
         * @returns description, as a string.
         */
        get_description(): string | null;
        /**
         * Get the list of file extensions associated to the MIME type.
         * @returns a     `null`-terminated array of strings
         */
        get_extensions(): string[];
        /**
         * Gets the MIME type.
         * @returns MIME type, as a string.
         */
        get_mime_type(): string;
        /**
         * Atomically increments the reference count of `info` by one.
         *
         * This function is MT-safe and may be called from any thread.
         * @returns The passed in {@link WebKit2.MimeInfo}
         */
        ref(): MimeInfo;
        /**
         * Atomically decrements the reference count of `info` by one.
         *
         * If the reference count drops to 0, all memory allocated by the {@link WebKit2.MimeInfo} is
         * released. This function is MT-safe and may be called from any
         * thread.
         */
        unref(): void;
    }

    /**
     * Provides details about interaction resulting in a resource load.
     * @gir-type Struct
     */
    abstract class NavigationAction {
        static $gtype: GObject.GType<NavigationAction>;

        // Methods

        /**
         * Make a copy of `navigation`.
         * @returns A copy of passed in {@link WebKit2.NavigationAction}
         */
        copy(): NavigationAction;
        /**
         * Free the {@link WebKit2.NavigationAction}
         */
        free(): void;
        /**
         * Return the modifier keys.
         *
         * Return a bitmask of {@link Gdk.ModifierType} values describing the modifier keys that were in effect
         * when the navigation was requested
         * @returns the modifier keys
         */
        get_modifiers(): number;
        /**
         * Return the number of the mouse button that triggered the navigation.
         *
         * Return the number of the mouse button that triggered the navigation, or 0 if
         * the navigation was not started by a mouse event.
         * @returns the mouse button number or 0
         */
        get_mouse_button(): number;
        /**
         * Return the type of action that triggered the navigation.
         * @returns a {@link WebKit2.NavigationType}
         */
        get_navigation_type(): NavigationType;
        /**
         * Return the {@link WebKit2.URIRequest} associated with the navigation action.
         *
         * Modifications to the returned object are <emphasis>not</emphasis> taken
         * into account when the request is sent over the network, and is intended
         * only to aid in evaluating whether a navigation action should be taken or
         * not. To modify requests before they are sent over the network the
         * `WebKitPage::send-request` signal can be used instead.
         * @returns a {@link WebKit2.URIRequest}
         */
        get_request(): URIRequest;
        /**
         * Returns whether the `navigation` was redirected.
         * @returns `true` if the original navigation was redirected, `false` otherwise.
         */
        is_redirect(): boolean;
        /**
         * Return whether the navigation was triggered by a user gesture like a mouse click.
         * @returns whether navigation action is a user gesture
         */
        is_user_gesture(): boolean;
    }

    /**
     * @gir-type Alias
     */
    type NavigationPolicyDecisionClass = typeof NavigationPolicyDecision;
    /**
     * @gir-type Struct
     */
    abstract class NavigationPolicyDecisionPrivate {
        static $gtype: GObject.GType<NavigationPolicyDecisionPrivate>;
    }

    /**
     * Configures network proxies.
     *
     * WebKitNetworkProxySettings can be used to provide a custom proxy configuration
     * to a {@link WebKit2.WebContext}. You need to call `webkit_web_context_set_network_proxy_settings()`
     * with {@link WebKit2.NetworkProxyMode.CUSTOM} and a WebKitNetworkProxySettings.
     * @gir-type Struct
     * @since 2.16
     */
    class NetworkProxySettings {
        static $gtype: GObject.GType<NetworkProxySettings>;

        // Constructors

        constructor(default_proxy_uri?: string | null, ignore_hosts?: string[] | null);

        static ['new'](default_proxy_uri?: string | null, ignore_hosts?: string[] | null): NetworkProxySettings;

        // Methods

        /**
         * Adds a URI-scheme-specific proxy.
         *
         * URIs whose scheme matches `uri_scheme` will be proxied via `proxy_uri`.
         * As with the default proxy URI, if `proxy_uri` starts with "socks://", it will be treated as referring to
         * all three of the socks5, socks4a, and socks4 proxy types.
         * @param scheme the URI scheme to add a proxy for
         * @param proxy_uri the proxy URI to use for `uri_scheme`
         */
        add_proxy_for_scheme(scheme: string, proxy_uri: string): void;
        /**
         * Make a copy of the {@link WebKit2.NetworkProxySettings}.
         * @returns A copy of passed in {@link WebKit2.NetworkProxySettings}
         */
        copy(): NetworkProxySettings;
        /**
         * Free the {@link WebKit2.NetworkProxySettings}.
         */
        free(): void;
    }

    /**
     * @gir-type Alias
     */
    type NotificationClass = typeof Notification;
    /**
     * @gir-type Alias
     */
    type NotificationPermissionRequestClass = typeof NotificationPermissionRequest;
    /**
     * @gir-type Struct
     */
    abstract class NotificationPermissionRequestPrivate {
        static $gtype: GObject.GType<NotificationPermissionRequestPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class NotificationPrivate {
        static $gtype: GObject.GType<NotificationPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type OptionMenuClass = typeof OptionMenu;
    /**
     * One item of a {@link WebKit2.OptionMenu}.
     *
     * The {@link WebKit2.OptionMenu} is composed of WebKitOptionMenuItem<!-- -->s.
     * A WebKitOptionMenuItem always has a label and can contain a tooltip text.
     * You can use the WebKitOptionMenuItem of a {@link WebKit2.OptionMenu} to build your
     * own menus.
     * @gir-type Struct
     * @since 2.18
     */
    abstract class OptionMenuItem {
        static $gtype: GObject.GType<OptionMenuItem>;

        // Methods

        /**
         * Make a copy of the {@link WebKit2.OptionMenuItem}.
         * @returns A copy of passed in {@link WebKit2.OptionMenuItem}
         */
        copy(): OptionMenuItem;
        /**
         * Free the {@link WebKit2.OptionMenuItem}.
         */
        free(): void;
        /**
         * Get the label of a {@link WebKit2.OptionMenuItem}.
         * @returns The label of `item`.
         */
        get_label(): string;
        /**
         * Get the tooltip of a {@link WebKit2.OptionMenuItem}.
         * @returns The tooltip of `item`, or `null`.
         */
        get_tooltip(): string;
        /**
         * Whether a {@link WebKit2.OptionMenuItem} is enabled.
         * @returns `true` if the `item` is enabled or `false` otherwise.
         */
        is_enabled(): boolean;
        /**
         * Whether a {@link WebKit2.OptionMenuItem} is a group child.
         * @returns `true` if the `item` is a group child or `false` otherwise.
         */
        is_group_child(): boolean;
        /**
         * Whether a {@link WebKit2.OptionMenuItem} is a group label.
         * @returns `true` if the `item` is a group label or `false` otherwise.
         */
        is_group_label(): boolean;
        /**
         * Whether a {@link WebKit2.OptionMenuItem} is the currently selected one.
         * @returns `true` if the `item` is selected or `false` otherwise.
         */
        is_selected(): boolean;
    }

    /**
     * @gir-type Struct
     */
    abstract class OptionMenuPrivate {
        static $gtype: GObject.GType<OptionMenuPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PermissionRequestIface = typeof PermissionRequest;
    /**
     * @gir-type Alias
     */
    type PluginClass = typeof Plugin;
    /**
     * @gir-type Struct
     */
    abstract class PluginPrivate {
        static $gtype: GObject.GType<PluginPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PointerLockPermissionRequestClass = typeof PointerLockPermissionRequest;
    /**
     * @gir-type Struct
     */
    abstract class PointerLockPermissionRequestPrivate {
        static $gtype: GObject.GType<PointerLockPermissionRequestPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PolicyDecisionClass = typeof PolicyDecision;
    /**
     * @gir-type Struct
     */
    abstract class PolicyDecisionPrivate {
        static $gtype: GObject.GType<PolicyDecisionPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PrintCustomWidgetClass = typeof PrintCustomWidget;
    /**
     * @gir-type Struct
     */
    abstract class PrintCustomWidgetPrivate {
        static $gtype: GObject.GType<PrintCustomWidgetPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PrintOperationClass = typeof PrintOperation;
    /**
     * @gir-type Struct
     */
    abstract class PrintOperationPrivate {
        static $gtype: GObject.GType<PrintOperationPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ResponsePolicyDecisionClass = typeof ResponsePolicyDecision;
    /**
     * @gir-type Struct
     */
    abstract class ResponsePolicyDecisionPrivate {
        static $gtype: GObject.GType<ResponsePolicyDecisionPrivate>;
    }

    /**
     * Carries details to be shown in user-facing dialogs.
     * @gir-type Struct
     */
    abstract class ScriptDialog {
        static $gtype: GObject.GType<ScriptDialog>;

        // Methods

        /**
         * Close `dialog`.
         *
         * When handling a {@link WebKit2.ScriptDialog} asynchronously (webkit_script_dialog_ref()
         * was called in {@link WebKit2.WebView.SignalSignatures.script_dialog | WebKit2.WebView::script-dialog} callback), this function needs to be called to notify
         * that we are done with the script dialog. The dialog will be closed on destruction if this function
         * hasn't been called before.
         */
        close(): void;
        /**
         * Set whether the user confirmed the dialog.
         *
         * This method is used for {@link WebKit2.ScriptDialogType.CONFIRM} and {@link WebKit2.ScriptDialogType.BEFORE_UNLOAD_CONFIRM} dialogs when
         * {@link WebKit2.WebView.SignalSignatures.script_dialog | WebKit2.WebView::script-dialog} signal is emitted to set whether the user
         * confirmed the dialog or not. The default implementation of {@link WebKit2.WebView.SignalSignatures.script_dialog | WebKit2.WebView::script-dialog}
         * signal sets `true` when the OK or Stay buttons are clicked and `false` otherwise.
         * It's an error to use this method with a {@link WebKit2.ScriptDialog} that is not of type
         * {@link WebKit2.ScriptDialogType.CONFIRM} or {@link WebKit2.ScriptDialogType.BEFORE_UNLOAD_CONFIRM}
         * @param confirmed whether user confirmed the dialog
         */
        confirm_set_confirmed(confirmed: boolean): void;
        /**
         * Get the dialog type of a {@link WebKit2.ScriptDialog}.
         * @returns the {@link WebKit2.ScriptDialogType} of `dialog`
         */
        get_dialog_type(): ScriptDialogType;
        /**
         * Get the message of a {@link WebKit2.ScriptDialog}.
         * @returns the message of `dialog`.
         */
        get_message(): string;
        /**
         * Get the default text of a {@link WebKit2.ScriptDialog} of type {@link WebKit2.ScriptDialogType.PROMPT}.
         *
         * It's an error to use this method with a {@link WebKit2.ScriptDialog} that is not of type
         * {@link WebKit2.ScriptDialogType.PROMPT}.
         * @returns the default text of `dialog`
         */
        prompt_get_default_text(): string;
        /**
         * Set the text entered by the user in the dialog.
         *
         * This method is used for {@link WebKit2.ScriptDialogType.PROMPT} dialogs when
         * {@link WebKit2.WebView.SignalSignatures.script_dialog | WebKit2.WebView::script-dialog} signal is emitted to set the text
         * entered by the user. The default implementation of {@link WebKit2.WebView.SignalSignatures.script_dialog | WebKit2.WebView::script-dialog}
         * signal sets the text of the entry form when OK button is clicked, otherwise `null` is set.
         * It's an error to use this method with a {@link WebKit2.ScriptDialog} that is not of type
         * {@link WebKit2.ScriptDialogType.PROMPT}.
         * @param text the text to set
         */
        prompt_set_text(text: string): void;
        /**
         * Atomically increments the reference count of `dialog` by one.
         *
         * This
         * function is MT-safe and may be called from any thread.
         * @returns The passed in {@link WebKit2.ScriptDialog}
         */
        ref(): ScriptDialog;
        /**
         * Atomically decrements the reference count of `dialog` by one.
         *
         * If the
         * reference count drops to 0, all memory allocated by the `WebKitScriptdialog` is
         * released. This function is MT-safe and may be called from any
         * thread.
         */
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type SecurityManagerClass = typeof SecurityManager;
    /**
     * @gir-type Struct
     */
    abstract class SecurityManagerPrivate {
        static $gtype: GObject.GType<SecurityManagerPrivate>;
    }

    /**
     * A security boundary for websites.
     *
     * {@link WebKit2.SecurityOrigin} is a representation of a security domain
     * defined by websites. A security origin consists of a protocol, a
     * hostname, and an optional port number.
     *
     * Resources with the same security origin can generally access each
     * other for client-side scripting or database access. When comparing
     * origins, beware that if both protocol and host are `null`, the origins
     * should not be treated as equal.
     * @gir-type Struct
     * @since 2.16
     */
    class SecurityOrigin {
        static $gtype: GObject.GType<SecurityOrigin>;

        // Constructors

        constructor(protocol: string, host: string, port: number);

        static ['new'](protocol: string, host: string, port: number): SecurityOrigin;

        static new_for_uri(uri: string): SecurityOrigin;

        // Methods

        /**
         * Gets the hostname of `origin`.
         *
         * It is reasonable for this to be `null`
         * if its protocol does not require a host component.
         * @returns The host of the {@link WebKit2.SecurityOrigin}
         */
        get_host(): string | null;
        /**
         * Gets the port of `origin`.
         *
         * This function will always return 0 if the
         * port is the default port for the given protocol. For example,
         * http://example.com has the same security origin as
         * http://example.com:80, and this function will return 0 for a
         * {@link WebKit2.SecurityOrigin} constructed from either URI.
         * @returns The port of the {@link WebKit2.SecurityOrigin}.
         */
        get_port(): number;
        /**
         * Gets the protocol of `origin`.
         * @returns The protocol of the {@link WebKit2.SecurityOrigin}
         */
        get_protocol(): string | null;
        /**
         * This function returns `false`.
         *
         * This function returns `false`. {@link WebKit2.SecurityOrigin} is now a simple
         * wrapper around a <protocol, host, port> triplet, and no longer
         * represents an origin as defined by web standards that may be opaque.
         * @returns `false`
         */
        is_opaque(): boolean;
        /**
         * Atomically increments the reference count of `origin` by one.
         *
         * This function is MT-safe and may be called from any thread.
         * @returns The passed {@link WebKit2.SecurityOrigin}
         */
        ref(): SecurityOrigin;
        /**
         * Gets a string representation of `origin`.
         *
         * The string representation
         * is a valid URI with only protocol, host, and port components, or
         * `null`.
         * @returns a URI representing `origin`.
         */
        to_string(): string | null;
        /**
         * Atomically decrements the reference count of `origin` by one.
         *
         * If the reference count drops to 0, all memory allocated by
         * {@link WebKit2.SecurityOrigin} is released. This function is MT-safe and may be
         * called from any thread.
         */
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type SettingsClass = typeof Settings;
    /**
     * @gir-type Struct
     */
    abstract class SettingsPrivate {
        static $gtype: GObject.GType<SettingsPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type URIRequestClass = typeof URIRequest;
    /**
     * @gir-type Struct
     */
    abstract class URIRequestPrivate {
        static $gtype: GObject.GType<URIRequestPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type URIResponseClass = typeof URIResponse;
    /**
     * @gir-type Struct
     */
    abstract class URIResponsePrivate {
        static $gtype: GObject.GType<URIResponsePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type URISchemeRequestClass = typeof URISchemeRequest;
    /**
     * @gir-type Struct
     */
    abstract class URISchemeRequestPrivate {
        static $gtype: GObject.GType<URISchemeRequestPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type URISchemeResponseClass = typeof URISchemeResponse;
    /**
     * @gir-type Struct
     */
    abstract class URISchemeResponsePrivate {
        static $gtype: GObject.GType<URISchemeResponsePrivate>;
    }

    /**
     * A compiled set of rules which applied to resource loads.
     * @gir-type Struct
     * @since 2.24
     */
    abstract class UserContentFilter {
        static $gtype: GObject.GType<UserContentFilter>;

        // Methods

        /**
         * Obtain the identifier previously used to save the `user_content_filter`.
         *
         * Obtain the identifier previously used to save the `user_content_filter` in the
         * {@link WebKit2.UserContentFilterStore}.
         * @returns the identifier for the filter
         */
        get_identifier(): string;
        /**
         * Atomically increments the reference count of `user_content_filter` by one.
         *
         * This function is MT-safe and may be called from any thread.
         * @returns the `user_content_filter` passed in.
         */
        ref(): UserContentFilter;
        /**
         * Atomically decrements the reference count of `user_content_filter` by one.
         *
         * If the reference count drops to 0, all the memory allocated by the
         * {@link WebKit2.UserContentFilter} is released. This function is MT-safe and may
         * be called from any thread.
         */
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type UserContentFilterStoreClass = typeof UserContentFilterStore;
    /**
     * @gir-type Struct
     */
    abstract class UserContentFilterStorePrivate {
        static $gtype: GObject.GType<UserContentFilterStorePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type UserContentManagerClass = typeof UserContentManager;
    /**
     * @gir-type Struct
     */
    abstract class UserContentManagerPrivate {
        static $gtype: GObject.GType<UserContentManagerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type UserMediaPermissionRequestClass = typeof UserMediaPermissionRequest;
    /**
     * @gir-type Struct
     */
    abstract class UserMediaPermissionRequestPrivate {
        static $gtype: GObject.GType<UserMediaPermissionRequestPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type UserMessageClass = typeof UserMessage;
    /**
     * @gir-type Struct
     */
    abstract class UserMessagePrivate {
        static $gtype: GObject.GType<UserMessagePrivate>;
    }

    /**
     * A JavaScript snippet which can be injected in loaded pages.
     * @gir-type Struct
     * @since 2.6
     */
    class UserScript {
        static $gtype: GObject.GType<UserScript>;

        // Constructors

        constructor(
            source: string,
            injected_frames: UserContentInjectedFrames,
            injection_time: UserScriptInjectionTime,
            allow_list?: string[] | null,
            block_list?: string[] | null,
        );

        static ['new'](
            source: string,
            injected_frames: UserContentInjectedFrames,
            injection_time: UserScriptInjectionTime,
            allow_list?: string[] | null,
            block_list?: string[] | null,
        ): UserScript;

        static new_for_world(
            source: string,
            injected_frames: UserContentInjectedFrames,
            injection_time: UserScriptInjectionTime,
            world_name: string,
            allow_list?: string[] | null,
            block_list?: string[] | null,
        ): UserScript;

        // Methods

        /**
         * Atomically increments the reference count of `user_script` by one.
         *
         * This function is MT-safe and may be called from any thread.
         * @returns The passed {@link WebKit2.UserScript}
         */
        ref(): UserScript;
        /**
         * Atomically decrements the reference count of `user_script` by one.
         *
         * If the reference count drops to 0, all memory allocated by
         * {@link WebKit2.UserScript} is released. This function is MT-safe and may be called
         * from any thread.
         */
        unref(): void;
    }

    /**
     * A CSS style sheet which can be injected in loaded pages.
     * @gir-type Struct
     * @since 2.6
     */
    class UserStyleSheet {
        static $gtype: GObject.GType<UserStyleSheet>;

        // Constructors

        constructor(
            source: string,
            injected_frames: UserContentInjectedFrames,
            level: UserStyleLevel,
            allow_list?: string[] | null,
            block_list?: string[] | null,
        );

        static ['new'](
            source: string,
            injected_frames: UserContentInjectedFrames,
            level: UserStyleLevel,
            allow_list?: string[] | null,
            block_list?: string[] | null,
        ): UserStyleSheet;

        static new_for_world(
            source: string,
            injected_frames: UserContentInjectedFrames,
            level: UserStyleLevel,
            world_name: string,
            allow_list?: string[] | null,
            block_list?: string[] | null,
        ): UserStyleSheet;

        // Methods

        /**
         * Atomically increments the reference count of `user_style_sheet` by one.
         *
         * This function is MT-safe and may be called from any thread.
         * @returns The passed {@link WebKit2.UserStyleSheet}
         */
        ref(): UserStyleSheet;
        /**
         * Atomically decrements the reference count of `user_style_sheet` by one.
         *
         * If the reference count drops to 0, all memory allocated by
         * {@link WebKit2.UserStyleSheet} is released. This function is MT-safe and may be
         * called from any thread.
         */
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type WebContextClass = typeof WebContext;
    /**
     * @gir-type Struct
     */
    abstract class WebContextPrivate {
        static $gtype: GObject.GType<WebContextPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type WebInspectorClass = typeof WebInspector;
    /**
     * @gir-type Struct
     */
    abstract class WebInspectorPrivate {
        static $gtype: GObject.GType<WebInspectorPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type WebResourceClass = typeof WebResource;
    /**
     * @gir-type Struct
     */
    abstract class WebResourcePrivate {
        static $gtype: GObject.GType<WebResourcePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type WebViewBaseClass = typeof WebViewBase;
    /**
     * @gir-type Struct
     */
    abstract class WebViewBasePrivate {
        static $gtype: GObject.GType<WebViewBasePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type WebViewClass = typeof WebView;
    /**
     * @gir-type Struct
     */
    abstract class WebViewPrivate {
        static $gtype: GObject.GType<WebViewPrivate>;
    }

    /**
     * Handles serialization of a web view's browsing state.
     * @gir-type Struct
     * @since 2.12
     */
    class WebViewSessionState {
        static $gtype: GObject.GType<WebViewSessionState>;

        // Constructors

        constructor(data: GLib.Bytes | Uint8Array);

        static ['new'](data: GLib.Bytes | Uint8Array): WebViewSessionState;

        // Methods

        /**
         * Atomically increments the reference count of `state` by one.
         *
         * This
         * function is MT-safe and may be called from any thread.
         * @returns The passed in {@link WebKit2.WebViewSessionState}
         */
        ref(): WebViewSessionState;
        /**
         * Serializes a {@link WebKit2.WebViewSessionState}.
         * @returns a {@link GLib.Bytes} containing the `state` serialized.
         */
        serialize(): GLib.Bytes;
        /**
         * Atomically decrements the reference count of `state` by one.
         *
         * If the
         * reference count drops to 0, all memory allocated by the {@link WebKit2.WebViewSessionState} is
         * released. This function is MT-safe and may be called from any thread.
         */
        unref(): void;
    }

    /**
     * Data stored locally by a web site.
     *
     * WebKitWebsiteData represents data stored in the client by a particular website.
     * A website is normally a set of URLs grouped by domain name. You can get the website name,
     * which is usually the domain, with `webkit_website_data_get_name()`.
     * Documents loaded from the file system, like file:// URIs, are all grouped in the same WebKitWebsiteData
     * with the name "Local files".
     *
     * A website can store different types of data in the client side. {@link WebKit2.WebsiteDataTypes} is an enum containing
     * all the possible data types; use `webkit_website_data_get_types()` to get the bitmask of data types.
     * It's also possible to know the size of the data stored for some of the {@link WebKit2.WebsiteDataTypes} by using
     * `webkit_website_data_get_size()`.
     *
     * A list of WebKitWebsiteData can be retrieved with `webkit_website_data_manager_fetch()`. See {@link WebKit2.WebsiteDataManager}
     * for more information.
     * @gir-type Struct
     * @since 2.16
     */
    abstract class WebsiteData {
        static $gtype: GObject.GType<WebsiteData>;

        // Methods

        /**
         * Gets the name of {@link WebKit2.WebsiteData}.
         *
         * This is the website name, normally represented by
         * a domain or host name. All local documents are grouped in the same {@link WebKit2.WebsiteData} using
         * the name "Local files".
         * @returns the website name of `website_data`.
         */
        get_name(): string;
        /**
         * Gets the size of the data of types `types` in a {@link WebKit2.WebsiteData}.
         *
         * Note that currently the data size is only known for {@link WebKit2.WebsiteDataTypes.DISK_CACHE} data type
         * so for all other types 0 will be returned.
         * @param types a bitmask  of {@link WebKit2.WebsiteDataTypes}
         * @returns the size of `website_data` for the given `types`.
         */
        get_size(types: WebsiteDataTypes | null): number;
        /**
         * Gets the types of data stored in the client for a {@link WebKit2.WebsiteData}.
         *
         * These are the
         * types actually present, not the types queried with `webkit_website_data_manager_fetch()`.
         * @returns a bitmask of {@link WebKit2.WebsiteDataTypes} in `website_data`
         */
        get_types(): WebsiteDataTypes;
        /**
         * Atomically increments the reference count of `website_data` by one.
         *
         * This function is MT-safe and may be called from any thread.
         * @returns The passed {@link WebKit2.WebsiteData}
         */
        ref(): WebsiteData;
        /**
         * Atomically decrements the reference count of `website_data` by one.
         *
         * If the reference count drops to 0, all memory allocated by
         * {@link WebKit2.WebsiteData} is released. This function is MT-safe and may be
         * called from any thread.
         */
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type WebsiteDataAccessPermissionRequestClass = typeof WebsiteDataAccessPermissionRequest;
    /**
     * @gir-type Struct
     */
    abstract class WebsiteDataAccessPermissionRequestPrivate {
        static $gtype: GObject.GType<WebsiteDataAccessPermissionRequestPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type WebsiteDataManagerClass = typeof WebsiteDataManager;
    /**
     * @gir-type Struct
     */
    abstract class WebsiteDataManagerPrivate {
        static $gtype: GObject.GType<WebsiteDataManagerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type WebsitePoliciesClass = typeof WebsitePolicies;
    /**
     * @gir-type Struct
     */
    abstract class WebsitePoliciesPrivate {
        static $gtype: GObject.GType<WebsitePoliciesPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type WindowPropertiesClass = typeof WindowProperties;
    /**
     * @gir-type Struct
     */
    abstract class WindowPropertiesPrivate {
        static $gtype: GObject.GType<WindowPropertiesPrivate>;
    }

    namespace PermissionRequest {
        /**
         * Interface for implementing PermissionRequest.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Allow the action which triggered this request.
             * @virtual
             */
            vfunc_allow(): void;
            /**
             * Deny the action which triggered this request.
             * @virtual
             */
            vfunc_deny(): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface PermissionRequestNamespace {
        $gtype: GObject.GType<PermissionRequest>;
        prototype: PermissionRequest;
    }
    /**
     * A permission request.
     *
     * There are situations where an embedder would need to ask the user
     * for permission to do certain types of operations, such as switching
     * to fullscreen mode or reporting the user's location through the
     * standard Geolocation API. In those cases, WebKit will emit a
     * {@link WebKit2.WebView.SignalSignatures.permission_request | WebKit2.WebView::permission-request} signal with a
     * {@link WebKit2.PermissionRequest} object attached to it.
     * @gir-type Interface
     */
    interface PermissionRequest extends GObject.Object, PermissionRequest.Interface {
        // Methods

        /**
         * Allow the action which triggered this request.
         */
        allow(): void;
        /**
         * Deny the action which triggered this request.
         */
        deny(): void;
    }

    export const PermissionRequest: PermissionRequestNamespace & {
        new (): PermissionRequest; // This allows `obj instanceof PermissionRequest`
    };

    /**
     * Name of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;
    /**
     * Version of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default WebKit2;

// END
