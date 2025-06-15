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
import type Soup from '@girs/soup-2.4';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type JavaScriptCore from '@girs/javascriptcore-4.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace WebKit2 {
    /**
     * WebKit2-4.0
     */

    /**
     * Enum values representing the authentication scheme.
     */

    /**
     * Enum values representing the authentication scheme.
     */
    export namespace AuthenticationScheme {
        export const $gtype: GObject.GType<AuthenticationScheme>;
    }

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
     * Enum values used for determining the automation browsing context presentation.
     */

    /**
     * Enum values used for determining the automation browsing context presentation.
     */
    export namespace AutomationBrowsingContextPresentation {
        export const $gtype: GObject.GType<AutomationBrowsingContextPresentation>;
    }

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
     * Enum values used to specify autoplay policies.
     */

    /**
     * Enum values used to specify autoplay policies.
     */
    export namespace AutoplayPolicy {
        export const $gtype: GObject.GType<AutoplayPolicy>;
    }

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
     * Enum values used for determining the #WebKitWebContext cache model.
     */

    /**
     * Enum values used for determining the #WebKitWebContext cache model.
     */
    export namespace CacheModel {
        export const $gtype: GObject.GType<CacheModel>;
    }

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
     * Enum values used to denote the stock actions for
     * #WebKitContextMenuItem<!-- -->s
     */

    /**
     * Enum values used to denote the stock actions for
     * #WebKitContextMenuItem<!-- -->s
     */
    export namespace ContextMenuAction {
        export const $gtype: GObject.GType<ContextMenuAction>;
    }

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
     * Enum values used to denote the cookie acceptance policies.
     */

    /**
     * Enum values used to denote the cookie acceptance policies.
     */
    export namespace CookieAcceptPolicy {
        export const $gtype: GObject.GType<CookieAcceptPolicy>;
    }

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
     * Enum values used to denote the cookie persistent storage types.
     */

    /**
     * Enum values used to denote the cookie persistent storage types.
     */
    export namespace CookiePersistentStorage {
        export const $gtype: GObject.GType<CookiePersistentStorage>;
    }

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
     * Enum values representing the duration for which a credential persists.
     */

    /**
     * Enum values representing the duration for which a credential persists.
     */
    export namespace CredentialPersistence {
        export const $gtype: GObject.GType<CredentialPersistence>;
    }

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
     */
    class DownloadError extends GLib.Error {
        static $gtype: GObject.GType<DownloadError>;

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
        _init(...args: any[]): void;

        // Static methods

        /**
         * Gets the quark for the domain of download errors.
         */
        static quark(): GLib.Quark;
    }

    /**
     * Enum values used to denote the various errors related to the #WebKitFaviconDatabase.
     */
    class FaviconDatabaseError extends GLib.Error {
        static $gtype: GObject.GType<FaviconDatabaseError>;

        // Static fields

        /**
         * The #WebKitFaviconDatabase is closed
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
        _init(...args: any[]): void;

        // Static methods

        /**
         * Gets the quark for the domain of favicon database errors.
         */
        static quark(): GLib.Quark;
    }

    /**
     * Describes the status of a [struct`WebKitFeature]`.
     *
     * The status for a given feature can be obtained with
     * [id`webkit_feature_get_status]`.
     */

    /**
     * Describes the status of a [struct`WebKitFeature]`.
     *
     * The status for a given feature can be obtained with
     * [id`webkit_feature_get_status]`.
     */
    export namespace FeatureStatus {
        export const $gtype: GObject.GType<FeatureStatus>;
    }

    enum FeatureStatus {
        /**
         * Feature that adjust behaviour for
         *   specific application needs. The feature is not part of a Web platform
         *   feature, not a mature feature intended to be always on.
         */
        EMBEDDER,
        /**
         * Feature in development. The feature
         *   may be unfinished, and there are no guarantees about its safety and
         *   stability.
         */
        UNSTABLE,
        /**
         * Feature for debugging the WebKit engine.
         *   The feature is not generally useful for user or web developers, and
         *   always disabled by default.
         */
        INTERNAL,
        /**
         * Feature for web developers. The feature
         *   is not generally useful for end users, and always disabled by default.
         */
        DEVELOPER,
        /**
         * Feature in active development and
         *   complete enough for testing. The feature may not be yet ready to
         *   ship and is disabled by default.
         */
        TESTABLE,
        /**
         * Feature ready to be tested by users.
         *   The feature is disabled by default, but may be enabled by applications
         *   automatically e.g. in their “technology preview” or “beta” versions.
         */
        PREVIEW,
        /**
         * Feature ready for general use. The
         *   feature is enabled by default, but it may still be toggled to support
         *   debugging and testing.
         */
        STABLE,
        /**
         * Feature in general use. The feature is
         *   always enabled and in general there should be no user-facing interface
         *   to toggle it.
         */
        MATURE,
    }
    /**
     * Enum values used for determining the hardware acceleration policy.
     */

    /**
     * Enum values used for determining the hardware acceleration policy.
     */
    export namespace HardwareAccelerationPolicy {
        export const $gtype: GObject.GType<HardwareAccelerationPolicy>;
    }

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
     * Enum values used to describe the primary purpose of the active editable element.
     */

    /**
     * Enum values used to describe the primary purpose of the active editable element.
     */
    export namespace InputPurpose {
        export const $gtype: GObject.GType<InputPurpose>;
    }

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
     * Enum values previously used to denote the different events which can trigger
     * the detection of insecure content. Since 2.46, WebKit generally no longer
     * loads insecure content in secure contexts.
     */

    /**
     * Enum values previously used to denote the different events which can trigger
     * the detection of insecure content. Since 2.46, WebKit generally no longer
     * loads insecure content in secure contexts.
     */
    export namespace InsecureContentEvent {
        export const $gtype: GObject.GType<InsecureContentEvent>;
    }

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
     */
    class JavascriptError extends GLib.Error {
        static $gtype: GObject.GType<JavascriptError>;

        // Static fields

        /**
         * An exception was raised in JavaScript execution
         */
        static SCRIPT_FAILED: number;
        /**
         * An unsupported parameter has been used to call and async function from API. Since 2.40
         */
        static INVALID_PARAMETER: number;
        /**
         * The result of JavaScript execution could not be returned. Since 2.40
         */
        static INVALID_RESULT: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Gets the quark for the domain of JavaScript errors.
         */
        static quark(): GLib.Quark;
    }

    /**
     * Enum values used to denote the different events that happen during a
     * #WebKitWebView load operation.
     */

    /**
     * Enum values used to denote the different events that happen during a
     * #WebKitWebView load operation.
     */
    export namespace LoadEvent {
        export const $gtype: GObject.GType<LoadEvent>;
    }

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
     * Enum values used to specify the capture state of a media device.
     */

    /**
     * Enum values used to specify the capture state of a media device.
     */
    export namespace MediaCaptureState {
        export const $gtype: GObject.GType<MediaCaptureState>;
    }

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
     * Enum values used to denote the various navigation types.
     */

    /**
     * Enum values used to denote the various navigation types.
     */
    export namespace NavigationType {
        export const $gtype: GObject.GType<NavigationType>;
    }

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
     */
    class NetworkError extends GLib.Error {
        static $gtype: GObject.GType<NetworkError>;

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
        _init(...args: any[]): void;

        // Static methods

        /**
         * Gets the quark for the domain of networking errors.
         */
        static quark(): GLib.Quark;
    }

    /**
     * Enum values used to set the network proxy mode.
     */

    /**
     * Enum values used to set the network proxy mode.
     */
    export namespace NetworkProxyMode {
        export const $gtype: GObject.GType<NetworkProxyMode>;
    }

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
     * Enum values representing query permission results.
     */

    /**
     * Enum values representing query permission results.
     */
    export namespace PermissionState {
        export const $gtype: GObject.GType<PermissionState>;
    }

    enum PermissionState {
        /**
         * Access to the feature is granted.
         */
        GRANTED,
        /**
         * Access to the feature is denied.
         */
        DENIED,
        /**
         * Access to the feature has to be requested via user prompt.
         */
        PROMPT,
    }
    /**
     * Enum values used to denote the various plugin and media errors.
     */
    class PluginError extends GLib.Error {
        static $gtype: GObject.GType<PluginError>;

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
        _init(...args: any[]): void;

        // Static methods

        /**
         * Gets the quark for the domain of plug-in errors.
         */
        static quark(): GLib.Quark;
    }

    /**
     * Enum values used for determining the type of a policy decision during
     * #WebKitWebView::decide-policy.
     */

    /**
     * Enum values used for determining the type of a policy decision during
     * #WebKitWebView::decide-policy.
     */
    export namespace PolicyDecisionType {
        export const $gtype: GObject.GType<PolicyDecisionType>;
    }

    enum PolicyDecisionType {
        /**
         * This type of policy decision
         *   is requested when WebKit is about to navigate to a new page in either the
         *   main frame or a subframe. Acceptable policy decisions are either
         *   webkit_policy_decision_use() or webkit_policy_decision_ignore(). This
         *   type of policy decision is always a #WebKitNavigationPolicyDecision.
         */
        NAVIGATION_ACTION,
        /**
         * This type of policy decision
         *   is requested when WebKit is about to create a new window. Acceptable policy
         *   decisions are either webkit_policy_decision_use() or
         *   webkit_policy_decision_ignore(). This type of policy decision is always
         *   a #WebKitNavigationPolicyDecision. These decisions are useful for implementing
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
         *   this decision are webkit_policy_decision_use(), webkit_policy_decision_ignore(),
         *   or webkit_policy_decision_download(). This type of policy decision is always
         *   a #WebKitResponsePolicyDecision. This decision is useful for forcing
         *   some types of resources to be downloaded rather than rendered in the WebView
         *   or to block the transfer of resources entirely.
         */
        RESPONSE,
    }
    /**
     * Enum values used to denote the various policy errors.
     */
    class PolicyError extends GLib.Error {
        static $gtype: GObject.GType<PolicyError>;

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
        _init(...args: any[]): void;

        // Static methods

        /**
         * Gets the quark for the domain of policy errors.
         */
        static quark(): GLib.Quark;
    }

    /**
     * Enum values used to denote the various print errors.
     */
    class PrintError extends GLib.Error {
        static $gtype: GObject.GType<PrintError>;

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
        _init(...args: any[]): void;

        // Static methods

        /**
         * Gets the quark for the domain of printing errors.
         */
        static quark(): GLib.Quark;
    }

    /**
     * Enum values representing the response of the print dialog shown with
     * webkit_print_operation_run_dialog().
     */

    /**
     * Enum values representing the response of the print dialog shown with
     * webkit_print_operation_run_dialog().
     */
    export namespace PrintOperationResponse {
        export const $gtype: GObject.GType<PrintOperationResponse>;
    }

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
     * Enum values used for determining the #WebKitWebContext process model.
     */

    /**
     * Enum values used for determining the #WebKitWebContext process model.
     */
    export namespace ProcessModel {
        export const $gtype: GObject.GType<ProcessModel>;
    }

    enum ProcessModel {
        /**
         * Deprecated 2.26.
         */
        SHARED_SECONDARY_PROCESS,
        /**
         * Use one process
         *   for each #WebKitWebView, while still allowing for some of them to
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
     * Enum values to specify the different ways in which a #WebKitWebView
     * can save its current web page into a self-contained file.
     */

    /**
     * Enum values to specify the different ways in which a #WebKitWebView
     * can save its current web page into a self-contained file.
     */
    export namespace SaveMode {
        export const $gtype: GObject.GType<SaveMode>;
    }

    enum SaveMode {
        /**
         * Save the current page using the MHTML format.
         */
        MHTML,
    }
    /**
     * Enum values used for determining the type of #WebKitScriptDialog
     */

    /**
     * Enum values used for determining the type of #WebKitScriptDialog
     */
    export namespace ScriptDialogType {
        export const $gtype: GObject.GType<ScriptDialogType>;
    }

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
     * Enum values used to denote errors happening when creating snapshots of #WebKitWebView
     */
    class SnapshotError extends GLib.Error {
        static $gtype: GObject.GType<SnapshotError>;

        // Static fields

        /**
         * An error occurred when creating a webpage snapshot.
         */
        static CREATE: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Gets the quark for the domain of page snapshot errors.
         */
        static quark(): GLib.Quark;
    }

    /**
     * Enum values used to specify the region from which to get a #WebKitWebView
     * snapshot
     */

    /**
     * Enum values used to specify the region from which to get a #WebKitWebView
     * snapshot
     */
    export namespace SnapshotRegion {
        export const $gtype: GObject.GType<SnapshotRegion>;
    }

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
     * Enum values used to denote the TLS errors policy.
     */

    /**
     * Enum values used to denote the TLS errors policy.
     */
    export namespace TLSErrorsPolicy {
        export const $gtype: GObject.GType<TLSErrorsPolicy>;
    }

    enum TLSErrorsPolicy {
        /**
         * Ignore TLS errors.
         */
        IGNORE,
        /**
         * TLS errors will emit
         *   #WebKitWebView::load-failed-with-tls-errors and, if the signal is handled,
         *   finish the load. In case the signal is not handled,
         *   #WebKitWebView::load-failed is emitted before the load finishes.
         */
        FAIL,
    }
    /**
     * Errors that can occur while compiling content filters.
     */
    class UserContentFilterError extends GLib.Error {
        static $gtype: GObject.GType<UserContentFilterError>;

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
        _init(...args: any[]): void;

        // Static methods

        /**
         * Gets the quark for the domain of user content filter errors.
         */
        static quark(): GLib.Quark;
    }

    /**
     * Specifies in which frames user style sheets are to be inserted in.
     */

    /**
     * Specifies in which frames user style sheets are to be inserted in.
     */
    export namespace UserContentInjectedFrames {
        export const $gtype: GObject.GType<UserContentInjectedFrames>;
    }

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
     */
    class UserMessageError extends GLib.Error {
        static $gtype: GObject.GType<UserMessageError>;

        // Static fields

        /**
         * The message was not handled by the receiver.
         */
        static MESSAGE: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Gets the quark for the domain of user message errors.
         */
        static quark(): GLib.Quark;
    }

    /**
     * Specifies at which place of documents an user script will be inserted.
     */

    /**
     * Specifies at which place of documents an user script will be inserted.
     */
    export namespace UserScriptInjectionTime {
        export const $gtype: GObject.GType<UserScriptInjectionTime>;
    }

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
     * Specifies how to treat an user style sheet.
     */

    /**
     * Specifies how to treat an user style sheet.
     */
    export namespace UserStyleLevel {
        export const $gtype: GObject.GType<UserStyleLevel>;
    }

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
     * Enum values used for setting if a #WebKitWebView is intended for
     * WebExtensions.
     */

    /**
     * Enum values used for setting if a #WebKitWebView is intended for
     * WebExtensions.
     */
    export namespace WebExtensionMode {
        export const $gtype: GObject.GType<WebExtensionMode>;
    }

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
     * Enum values used to specify the reason why the web process terminated abnormally.
     */

    /**
     * Enum values used to specify the reason why the web process terminated abnormally.
     */
    export namespace WebProcessTerminationReason {
        export const $gtype: GObject.GType<WebProcessTerminationReason>;
    }

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
     * a #WebKitWebView to the clipboard.
     * You can check whether it's possible to execute the command with
     * webkit_web_view_can_execute_editing_command(). In general it's
     * possible to copy to the clipboard when there is an active selection
     * inside the #WebKitWebView.
     */
    const EDITING_COMMAND_COPY: string;
    /**
     * The create link command. Creates a link element that is inserted at
     * the current cursor position. If there's a selection, the selected text
     * will be used as the link text, otherwise the URL itself will be used.
     * It receives the link URL as argument. This command should be executed
     * with webkit_web_view_execute_editing_command_with_argument()
     */
    const EDITING_COMMAND_CREATE_LINK: string;
    /**
     * The cut clipboard command. Copies the current selection inside
     * a #WebKitWebView to the clipboard and deletes the selected content.
     * You can check whether it's possible to execute the command with
     * webkit_web_view_can_execute_editing_command(). In general it's
     * possible to cut to the clipboard when the #WebKitWebView content is
     * editable and there is an active selection.
     */
    const EDITING_COMMAND_CUT: string;
    /**
     * The insert image command. Creates an image element that is inserted at
     * the current cursor position. It receives an URI as argument,
     * that is used as the image source. This command should be executed with
     * webkit_web_view_execute_editing_command_with_argument().
     */
    const EDITING_COMMAND_INSERT_IMAGE: string;
    /**
     * The paste clipboard command. Pastes the contents of the clipboard to
     * a #WebKitWebView.
     * You can check whether it's possible to execute the command with
     * webkit_web_view_can_execute_editing_command(). In general it's possible
     * to paste from the clipboard when the #WebKitWebView content is editable
     * and clipboard is not empty.
     */
    const EDITING_COMMAND_PASTE: string;
    /**
     * The paste as plaintext clipboard command. Pastes the contents of the
     * clipboard to a #WebKitWebView, with formatting removed.
     * You can check whether it's possible to execute the command with
     * webkit_web_view_can_execute_editing_command(). In general it's possible
     * to paste from the clipboard when the #WebKitWebView content is editable
     * and clipboard is not empty.
     */
    const EDITING_COMMAND_PASTE_AS_PLAIN_TEXT: string;
    /**
     * The redo command. Redoes a previously undone editing command in
     * a #WebKitWebView.
     * You can check whether it's possible to execute the command with
     * webkit_web_view_can_execute_editing_command(). It's only possible
     * to redo a command when it has been previously undone.
     */
    const EDITING_COMMAND_REDO: string;
    /**
     * The select all command. Selects all the content of the current text field in
     * a #WebKitWebView.
     * It is always possible to select all text, no matter whether the
     * #WebKitWebView content is editable or not. You can still check it
     * with webkit_web_view_can_execute_editing_command().
     */
    const EDITING_COMMAND_SELECT_ALL: string;
    /**
     * The undo command. Undoes the last editing command in a #WebKitWebView.
     * You can check whether it's possible to execute the command with
     * webkit_web_view_can_execute_editing_command(). It's only possible
     * to undo a command after a previously executed editing operation.
     */
    const EDITING_COMMAND_UNDO: string;
    /**
     * Like webkit_get_major_version(), but from the headers used at
     * application compile time, rather than from the library linked
     * against at application run time.
     */
    const MAJOR_VERSION: number;
    /**
     * Like webkit_get_micro_version(), but from the headers used at
     * application compile time, rather than from the library linked
     * against at application run time.
     */
    const MICRO_VERSION: number;
    /**
     * Like webkit_get_minor_version(), but from the headers used at
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
     * @param request a #WebKitMediaKeySystemPermissionRequest
     * @returns the key system name for @request
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
     * @returns @uri suitable for display, or %NULL in    case of error.
     */
    function uri_for_display(uri: string): string | null;
    /**
     * Gets the quark for the domain of user content filter errors.
     * @returns user content filter error domain.
     */
    function user_content_filter_error_quark(): GLib.Quark;
    /**
     * Check whether the permission request is for an audio device.
     * @param request a #WebKitUserMediaPermissionRequest
     * @returns %TRUE if access to an audio device was requested.
     */
    function user_media_permission_is_for_audio_device(request: UserMediaPermissionRequest): boolean;
    /**
     * Check whether the permission request is for a display device.
     * @param request a #WebKitUserMediaPermissionRequest
     * @returns %TRUE if access to a display device was requested.
     */
    function user_media_permission_is_for_display_device(request: UserMediaPermissionRequest): boolean;
    /**
     * Check whether the permission request is for a video device.
     * @param request a #WebKitUserMediaPermissionRequest
     * @returns %TRUE if access to a video device was requested.
     */
    function user_media_permission_is_for_video_device(request: UserMediaPermissionRequest): boolean;
    /**
     * Gets the quark for the domain of user message errors.
     * @returns user message error domain.
     */
    function user_message_error_quark(): GLib.Quark;
    interface URISchemeRequestCallback {
        (request: URISchemeRequest): void;
    }
    /**
     * Enum values with flags representing typing attributes.
     */

    /**
     * Enum values with flags representing typing attributes.
     */
    export namespace EditorTypingAttributes {
        export const $gtype: GObject.GType<EditorTypingAttributes>;
    }

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
     * Enum values used to specify search options.
     */

    /**
     * Enum values used to specify search options.
     */
    export namespace FindOptions {
        export const $gtype: GObject.GType<FindOptions>;
    }

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
     * Enum values with flags representing the context of a #WebKitHitTestResult.
     */

    /**
     * Enum values with flags representing the context of a #WebKitHitTestResult.
     */
    export namespace HitTestResultContext {
        export const $gtype: GObject.GType<HitTestResultContext>;
    }

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
     * Enum values used to describe hints that might be taken into account by input methods.
     */

    /**
     * Enum values used to describe hints that might be taken into account by input methods.
     */
    export namespace InputHints {
        export const $gtype: GObject.GType<InputHints>;
    }

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
     * Enum values used to specify options when taking a snapshot
     * from a #WebKitWebView.
     */

    /**
     * Enum values used to specify options when taking a snapshot
     * from a #WebKitWebView.
     */
    export namespace SnapshotOptions {
        export const $gtype: GObject.GType<SnapshotOptions>;
    }

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
     * Enum values with flags representing types of Website data.
     */

    /**
     * Enum values with flags representing types of Website data.
     */
    export namespace WebsiteDataTypes {
        export const $gtype: GObject.GType<WebsiteDataTypes>;
    }

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
        // Signal callback interfaces

        interface Authenticated {
            (_source: AuthenticationRequest, credential: Credential): void;
        }

        interface Cancelled {
            (_source: AuthenticationRequest): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            authenticated: Authenticated;
            cancelled: Cancelled;
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
     * WebKit will fire a #WebKitWebView::authenticate signal with a
     * WebKitAuthenticationRequest object to provide client side
     * authentication support. Credentials are exposed through the
     * #WebKitCredential object.
     *
     * In case the client application does not wish
     * to handle this signal WebKit will provide a default handler. To handle
     * authentication asynchronously, simply increase the reference count of the
     * WebKitAuthenticationRequest object.
     */
    class AuthenticationRequest extends GObject.Object {
        static $gtype: GObject.GType<AuthenticationRequest>;

        // Constructors

        constructor(properties?: Partial<AuthenticationRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof AuthenticationRequest.SignalSignatures>(
            signal: K,
            callback: AuthenticationRequest.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AuthenticationRequest.SignalSignatures>(
            signal: K,
            callback: AuthenticationRequest.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AuthenticationRequest.SignalSignatures>(
            signal: K,
            ...args: AuthenticationRequest.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Authenticate the #WebKitAuthenticationRequest.
         *
         * Authenticate the #WebKitAuthenticationRequest using the #WebKitCredential
         * supplied. To continue without credentials, pass %NULL as `credential`.
         * @param credential A #WebKitCredential, or %NULL
         */
        authenticate(credential?: Credential | null): void;
        /**
         * Determine whether this #WebKitAuthenticationRequest should allow the storage of credentials.
         *
         * Determine whether the authentication method associated with this
         * #WebKitAuthenticationRequest should allow the storage of credentials.
         * This will return %FALSE if WebKit doesn't support credential storing,
         * if private browsing is enabled, or if persistent credential storage has been
         * disabled in #WebKitWebsiteDataManager, unless credentials saving has been
         * explicitly enabled with webkit_authentication_request_set_can_save_credentials().
         * @returns %TRUE if WebKit can store credentials or %FALSE otherwise.
         */
        can_save_credentials(): boolean;
        /**
         * Cancel the authentication challenge.
         *
         * This will also cancel the page loading and result in a
         * #WebKitWebView::load-failed signal with a #WebKitNetworkError of type %WEBKIT_NETWORK_ERROR_CANCELLED being emitted.
         */
        cancel(): void;
        /**
         * Get the #GTlsPasswordFlags of the %WEBKIT_AUTHENTICATION_SCHEME_CLIENT_CERTIFICATE_PIN_REQUESTED authentication challenge.
         * @returns a #GTlsPasswordFlags
         */
        get_certificate_pin_flags(): Gio.TlsPasswordFlags;
        /**
         * Get the host that this authentication challenge is applicable to.
         * @returns The host of @request.
         */
        get_host(): string;
        /**
         * Get the port that this authentication challenge is applicable to.
         * @returns The port of @request.
         */
        get_port(): number;
        /**
         * Get the #WebKitCredential of the proposed authentication challenge.
         *
         * Get the #WebKitCredential of the proposed authentication challenge that was
         * stored from a previous session. The client can use this directly for
         * authentication or construct their own #WebKitCredential.
         * @returns A #WebKitCredential encapsulating credential details or %NULL if there is no stored credential.
         */
        get_proposed_credential(): Credential;
        /**
         * Get the realm that this authentication challenge is applicable to.
         * @returns The realm of @request.
         */
        get_realm(): string;
        /**
         * Get the authentication scheme of the authentication challenge.
         * @returns The #WebKitAuthenticationScheme of @request.
         */
        get_scheme(): AuthenticationScheme;
        /**
         * Get the #WebKitSecurityOrigin that this authentication challenge is applicable to.
         * @returns a newly created #WebKitSecurityOrigin.
         */
        get_security_origin(): SecurityOrigin;
        /**
         * Determine whether the authentication challenge is associated with a proxy server.
         *
         * Determine whether the authentication challenge is associated with a proxy server rather than an "origin" server.
         * @returns %TRUE if authentication is for a proxy or %FALSE otherwise.
         */
        is_for_proxy(): boolean;
        /**
         * Determine whether this this is a first attempt or a retry for this authentication challenge.
         * @returns %TRUE if authentication attempt is a retry or %FALSE otherwise.
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
         * Set the #WebKitCredential of the proposed authentication challenge.
         *
         * Set the #WebKitCredential of the proposed authentication challenge that was
         * stored from a previous session. This should only be used by applications handling
         * their own credential storage. (When using the default WebKit credential storage,
         * webkit_authentication_request_get_proposed_credential() already contains previously-stored
         * credentials.)
         * Passing a %NULL `credential` will clear the proposed credential.
         * @param credential a #WebKitCredential, or %NULL
         */
        set_proposed_credential(credential: Credential): void;
    }

    namespace AutomationSession {
        // Signal callback interfaces

        interface CreateWebView {
            (_source: AutomationSession): WebView;
        }

        interface WillClose {
            (_source: AutomationSession): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'create-web-view': CreateWebView;
            'will-close': WillClose;
            'notify::id': GObject.Object.Notify;
            'create-web-view::id': CreateWebView;
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
     * #WebKitWebView to interact with it. When this happens the signal #WebKitAutomationSession::create-web-view
     * is emitted.
     */
    class AutomationSession extends GObject.Object {
        static $gtype: GObject.GType<AutomationSession>;

        // Properties

        /**
         * The session unique identifier.
         */
        get id(): string;

        // Constructors

        constructor(properties?: Partial<AutomationSession.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof AutomationSession.SignalSignatures>(
            signal: K,
            callback: AutomationSession.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AutomationSession.SignalSignatures>(
            signal: K,
            callback: AutomationSession.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AutomationSession.SignalSignatures>(
            signal: K,
            ...args: AutomationSession.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the the previously set #WebKitAutomationSession.
         *
         * Get the #WebKitAutomationSession previously set with webkit_automation_session_set_application_info().
         * @returns the #WebKitAutomationSession of @session, or %NULL if no one has been set.
         */
        get_application_info(): ApplicationInfo;
        /**
         * Get the unique identifier of a #WebKitAutomationSession
         * @returns the unique identifier of @session
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
         * #WebKitWebContext::automation-started signal.
         * @param info a #WebKitApplicationInfo
         */
        set_application_info(info: ApplicationInfo): void;
    }

    namespace BackForwardList {
        // Signal callback interfaces

        interface Changed {
            (_source: BackForwardList, item_added?: BackForwardListItem | null, items_removed?: any | null): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed: Changed;
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
     * Methods webkit_web_view_go_back() and webkit_web_view_go_forward() move
     * the current item backward or forward by one. Method
     * webkit_web_view_go_to_back_forward_list_item() sets the current item to the
     * specified item. All other methods returning #WebKitBackForwardListItem<!-- -->s
     * do not change the value of the current item, they just return the requested
     * item or items.
     */
    class BackForwardList extends GObject.Object {
        static $gtype: GObject.GType<BackForwardList>;

        // Constructors

        constructor(properties?: Partial<BackForwardList.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof BackForwardList.SignalSignatures>(
            signal: K,
            callback: BackForwardList.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BackForwardList.SignalSignatures>(
            signal: K,
            callback: BackForwardList.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BackForwardList.SignalSignatures>(
            signal: K,
            ...args: BackForwardList.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Returns the item that precedes the current item.
         * @returns the #WebKitBackForwardListItem    preceding the current item or %NULL.
         */
        get_back_item(): BackForwardListItem | null;
        /**
         * Obtain the list of items preceding the current one.
         * @returns a #GList of    items preceding the current item.
         */
        get_back_list(): BackForwardListItem[];
        /**
         * Obtain a list up to some number of items preceding the current one.
         * @param limit the number of items to retrieve
         * @returns a #GList of    items preceding the current item limited by @limit.
         */
        get_back_list_with_limit(limit: number): BackForwardListItem[];
        /**
         * Returns the current item in `back_forward_list`.
         * @returns a #WebKitBackForwardListItem    or %NULL if @back_forward_list is empty.
         */
        get_current_item(): BackForwardListItem | null;
        /**
         * Returns the item that follows the current item.
         * @returns the #WebKitBackForwardListItem    following the current item or %NULL.
         */
        get_forward_item(): BackForwardListItem | null;
        /**
         * Obtain the list of items following the current one.
         * @returns a #GList of    items following the current item.
         */
        get_forward_list(): BackForwardListItem[];
        /**
         * Obtain a list up to some number of items following the current one.
         * @param limit the number of items to retrieve
         * @returns a #GList of    items following the current item limited by @limit.
         */
        get_forward_list_with_limit(limit: number): BackForwardListItem[];
        /**
         * Obtain the amount of items in the list.
         * @returns the length of @back_forward_list.
         */
        get_length(): number;
        /**
         * Returns the item at a given index relative to the current item.
         * @param index the index of the item
         * @returns the #WebKitBackForwardListItem    located at the specified index relative to the current item or %NULL.
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
     * One item of the #WebKitBackForwardList.
     *
     * A history item is part of the #WebKitBackForwardList and consists
     * out of a title and a URI.
     */
    class BackForwardListItem extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<BackForwardListItem>;

        // Constructors

        constructor(properties?: Partial<BackForwardListItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof BackForwardListItem.SignalSignatures>(
            signal: K,
            callback: BackForwardListItem.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BackForwardListItem.SignalSignatures>(
            signal: K,
            callback: BackForwardListItem.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BackForwardListItem.SignalSignatures>(
            signal: K,
            ...args: BackForwardListItem.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Obtain the original URI of the item.
         *
         * See also webkit_back_forward_list_item_get_uri().
         * @returns the original URI of @list_item or %NULL    when the original URI is empty.
         */
        get_original_uri(): string;
        /**
         * Obtain the title of the item.
         * @returns the page title of @list_item or %NULL    when the title is empty.
         */
        get_title(): string;
        /**
         * Obtain the URI of the item.
         *
         * This URI may differ from the original URI if the page was,
         * for example, redirected to a new location.
         * See also webkit_back_forward_list_item_get_original_uri().
         * @returns the URI of @list_item or %NULL    when the URI is empty.
         */
        get_uri(): string;
    }

    namespace ClipboardPermissionRequest {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, PermissionRequest.ConstructorProps {}
    }

    /**
     * A permission request for reading clipboard contents.
     *
     * WebKitClipboardPermissionRequest represents a request for
     * permission to decide whether WebKit can access the clipboard to read
     * its contents through the Async Clipboard API.
     *
     * When a WebKitClipboardPermissionRequest is not handled by the user,
     * it is denied by default.
     */
    class ClipboardPermissionRequest extends GObject.Object implements PermissionRequest {
        static $gtype: GObject.GType<ClipboardPermissionRequest>;

        // Constructors

        constructor(properties?: Partial<ClipboardPermissionRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ClipboardPermissionRequest.SignalSignatures>(
            signal: K,
            callback: ClipboardPermissionRequest.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClipboardPermissionRequest.SignalSignatures>(
            signal: K,
            callback: ClipboardPermissionRequest.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClipboardPermissionRequest.SignalSignatures>(
            signal: K,
            ...args: ClipboardPermissionRequest.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited methods
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
         */
        vfunc_allow(): void;
        /**
         * Deny the action which triggered this request.
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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

    namespace ColorChooserRequest {
        // Signal callback interfaces

        interface Finished {
            (_source: ColorChooserRequest): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            finished: Finished;
            'notify::rgba': GObject.Object.Notify;
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
     * to happen in a general way, instead of just opening a #GtkColorChooser
     * (which might be not desirable in some cases, which could prefer to use their
     * own color chooser dialog), WebKit will fire the
     * #WebKitWebView::run-color-chooser signal with a #WebKitColorChooserRequest
     * object, which will allow the client application to specify the color to be
     * selected, to inspect the details of the request (e.g. to get initial color)
     * and to cancel the request, in case nothing was selected.
     *
     * In case the client application does not wish to handle this signal,
     * WebKit will provide a default handler which will asynchronously run
     * a regular #GtkColorChooserDialog for the user to interact with.
     */
    class ColorChooserRequest extends GObject.Object {
        static $gtype: GObject.GType<ColorChooserRequest>;

        // Properties

        /**
         * The #GdkRGBA color of the request
         */
        get rgba(): Gdk.RGBA;
        set rgba(val: Gdk.RGBA);

        // Constructors

        constructor(properties?: Partial<ColorChooserRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ColorChooserRequest.SignalSignatures>(
            signal: K,
            callback: ColorChooserRequest.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ColorChooserRequest.SignalSignatures>(
            signal: K,
            callback: ColorChooserRequest.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ColorChooserRequest.SignalSignatures>(
            signal: K,
            ...args: ColorChooserRequest.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Cancels `request` and the input element changes to use the initial color.
         *
         * Cancels `request` and the input element changes to use the initial color
         * it has before the request started.
         * The signal #WebKitColorChooserRequest::finished
         * is emitted to notify that the request has finished.
         */
        cancel(): void;
        /**
         * Finishes `request` and the input element keeps the current value of
         * #WebKitColorChooserRequest:rgba.
         *
         * Finishes `request` and the input element keeps the current value of
         * #WebKitColorChooserRequest:rgba.
         * The signal #WebKitColorChooserRequest::finished
         * is emitted to notify that the request has finished.
         */
        finish(): void;
        /**
         * Gets the bounding box of the color input element.
         */
        get_element_rectangle(): Gdk.Rectangle;
        /**
         * Gets the current #GdkRGBA color of `request`
         */
        get_rgba(): Gdk.RGBA;
        /**
         * Sets the current #GdkRGBA color of `request`
         * @param rgba a pointer #GdkRGBA
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
     * Represents the context menu in a #WebKitWebView.
     *
     * #WebKitContextMenu represents a context menu containing
     * #WebKitContextMenuItem<!-- -->s in a #WebKitWebView.
     *
     * When a #WebKitWebView is about to display the context menu, it
     * emits the #WebKitWebView::context-menu signal, which has the
     * #WebKitContextMenu as an argument. You can modify it, adding new
     * submenus that you can create with webkit_context_menu_new(), adding
     * new #WebKitContextMenuItem<!-- -->s with
     * webkit_context_menu_prepend(), webkit_context_menu_append() or
     * webkit_context_menu_insert(), maybe after having removed the
     * existing ones with webkit_context_menu_remove_all().
     */
    class ContextMenu extends GObject.Object {
        static $gtype: GObject.GType<ContextMenu>;

        // Constructors

        constructor(properties?: Partial<ContextMenu.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ContextMenu;

        static new_with_items(items: ContextMenuItem[]): ContextMenu;

        // Signals

        connect<K extends keyof ContextMenu.SignalSignatures>(
            signal: K,
            callback: ContextMenu.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ContextMenu.SignalSignatures>(
            signal: K,
            callback: ContextMenu.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ContextMenu.SignalSignatures>(
            signal: K,
            ...args: ContextMenu.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds `item` at the end of the `menu`.
         * @param item the #WebKitContextMenuItem to add
         */
        append(item: ContextMenuItem): void;
        /**
         * Gets the first item in the `menu`.
         * @returns the first #WebKitContextMenuItem of @menu,    or %NULL if the #WebKitContextMenu is empty.
         */
        first(): ContextMenuItem;
        /**
         * Gets the #GdkEvent that triggered the context menu. This function only returns a valid
         * #GdkEvent when called for a #WebKitContextMenu passed to #WebKitWebView::context-menu
         * signal; in all other cases, %NULL is returned.
         *
         * The returned #GdkEvent is expected to be one of the following types:
         * <itemizedlist>
         * <listitem><para>
         * a #GdkEventButton of type %GDK_BUTTON_PRESS when the context menu was triggered with mouse.
         * </para></listitem>
         * <listitem><para>
         * a #GdkEventKey of type %GDK_KEY_PRESS if the keyboard was used to show the menu.
         * </para></listitem>
         * <listitem><para>
         * a generic #GdkEvent of type %GDK_NOTHING when the #GtkWidget::popup-menu signal was used to show the context menu.
         * </para></listitem>
         * </itemizedlist>
         * @returns the menu event or %NULL.
         */
        get_event(): Gdk.Event;
        /**
         * Gets the item at the given position in the `menu`.
         * @param position the position of the item, counting from 0
         * @returns the #WebKitContextMenuItem at position @position in @menu,    or %NULL if the position is off the end of the @menu.
         */
        get_item_at_position(position: number): ContextMenuItem;
        /**
         * Returns the item list of `menu`.
         * @returns a #GList of    #WebKitContextMenuItem<!-- -->s
         */
        get_items(): ContextMenuItem[];
        /**
         * Gets the length of the `menu`.
         * @returns the number of #WebKitContextMenuItem<!-- -->s in @menu
         */
        get_n_items(): number;
        /**
         * Gets the user data of `menu`.
         *
         * This function can be used from the UI Process to get user data previously set
         * from the Web Process with webkit_context_menu_set_user_data().
         * @returns the user data of @menu, or %NULL if @menu doesn't have user data
         */
        get_user_data(): GLib.Variant;
        /**
         * Inserts `item` into the `menu` at the given position.
         *
         * If `position` is negative, or is larger than the number of items
         * in the #WebKitContextMenu, the item is added on to the end of
         * the `menu`. The first position is 0.
         * @param item the #WebKitContextMenuItem to add
         * @param position the position to insert the item
         */
        insert(item: ContextMenuItem, position: number): void;
        /**
         * Gets the last item in the `menu`.
         * @returns the last #WebKitContextMenuItem of @menu,    or %NULL if the #WebKitContextMenu is empty.
         */
        last(): ContextMenuItem;
        /**
         * Moves `item` to the given position in the `menu`.
         *
         * If `position` is negative, or is larger than the number of items
         * in the #WebKitContextMenu, the item is added on to the end of
         * the `menu`.
         * The first position is 0.
         * @param item the #WebKitContextMenuItem to add
         * @param position the new position to move the item
         */
        move_item(item: ContextMenuItem, position: number): void;
        /**
         * Adds `item` at the beginning of the `menu`.
         * @param item the #WebKitContextMenuItem to add
         */
        prepend(item: ContextMenuItem): void;
        /**
         * Removes `item` from the `menu`.
         *
         * See also webkit_context_menu_remove_all() to remove all items.
         * @param item the #WebKitContextMenuItem to remove
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
         * that can be retrieved from the UI Process using webkit_context_menu_get_user_data().
         * If the `user_data` #GVariant is floating, it is consumed.
         * @param user_data a #GVariant
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
     * One item of a #WebKitContextMenu.
     *
     * The #WebKitContextMenu is composed of #WebKitContextMenuItem<!--
     * -->s. These items can be created from a #GtkAction, from a
     * #WebKitContextMenuAction or from a #WebKitContextMenuAction and a
     * label. These #WebKitContextMenuAction<!-- -->s denote stock actions
     * for the items. You can also create separators and submenus.
     */
    class ContextMenuItem extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<ContextMenuItem>;

        // Constructors

        constructor(properties?: Partial<ContextMenuItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](action: Gtk.Action): ContextMenuItem;

        static new_from_gaction(action: Gio.Action, label: string, target?: GLib.Variant | null): ContextMenuItem;

        static new_from_stock_action(action: ContextMenuAction): ContextMenuItem;

        static new_from_stock_action_with_label(action: ContextMenuAction, label: string): ContextMenuItem;

        static new_separator(): ContextMenuItem;

        static new_with_submenu(label: string, submenu: ContextMenu): ContextMenuItem;

        // Signals

        connect<K extends keyof ContextMenuItem.SignalSignatures>(
            signal: K,
            callback: ContextMenuItem.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ContextMenuItem.SignalSignatures>(
            signal: K,
            callback: ContextMenuItem.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ContextMenuItem.SignalSignatures>(
            signal: K,
            ...args: ContextMenuItem.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the action associated to `item` as a #GtkAction.
         * @returns the #GtkAction associated to the #WebKitContextMenuItem,    or %NULL if @item is a separator.
         */
        get_action(): Gtk.Action;
        /**
         * Gets the action associated to `item` as a #GAction.
         * @returns the #GAction associated to the #WebKitContextMenuItem,    or %NULL if @item is a separator.
         */
        get_gaction(): Gio.Action;
        /**
         * Gets the #WebKitContextMenuAction of `item`.
         *
         * If the #WebKitContextMenuItem was not
         * created for a stock action %WEBKIT_CONTEXT_MENU_ACTION_CUSTOM will be
         * returned. If the #WebKitContextMenuItem is a separator %WEBKIT_CONTEXT_MENU_ACTION_NO_ACTION
         * will be returned.
         * @returns the #WebKitContextMenuAction of @item
         */
        get_stock_action(): ContextMenuAction;
        /**
         * Gets the submenu of `item`.
         * @returns the #WebKitContextMenu representing the submenu of    @item or %NULL if @item doesn't have a submenu.
         */
        get_submenu(): ContextMenu;
        /**
         * Checks whether `item` is a separator.
         * @returns %TRUE is @item is a separator or %FALSE otherwise
         */
        is_separator(): boolean;
        /**
         * Sets or replaces the `item` submenu.
         *
         * If `submenu` is %NULL the current
         * submenu of `item` is removed.
         * @param submenu a #WebKitContextMenu
         */
        set_submenu(submenu?: ContextMenu | null): void;
    }

    namespace CookieManager {
        // Signal callback interfaces

        interface Changed {
            (_source: CookieManager): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed: Changed;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Defines how to handle cookies in a #WebKitWebContext.
     *
     * The WebKitCookieManager defines how to set up and handle cookies.
     * You can get it from a #WebKitWebsiteDataManager with
     * webkit_website_data_manager_get_cookie_manager(), and use it to set where to
     * store cookies with webkit_cookie_manager_set_persistent_storage(),
     * or to set the acceptance policy, with webkit_cookie_manager_get_accept_policy().
     */
    class CookieManager extends GObject.Object {
        static $gtype: GObject.GType<CookieManager>;

        // Constructors

        constructor(properties?: Partial<CookieManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof CookieManager.SignalSignatures>(
            signal: K,
            callback: CookieManager.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CookieManager.SignalSignatures>(
            signal: K,
            callback: CookieManager.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CookieManager.SignalSignatures>(
            signal: K,
            ...args: CookieManager.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Asynchronously add a #SoupCookie to the underlying storage.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_cookie_manager_add_cookie_finish() to get the result of the operation.
         * @param cookie the #SoupCookie to be added
         * @param cancellable a #GCancellable or %NULL to ignore
         */
        add_cookie(cookie: Soup.Cookie, cancellable?: Gio.Cancellable | null): Promise<boolean>;
        /**
         * Asynchronously add a #SoupCookie to the underlying storage.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_cookie_manager_add_cookie_finish() to get the result of the operation.
         * @param cookie the #SoupCookie to be added
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        add_cookie(
            cookie: Soup.Cookie,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously add a #SoupCookie to the underlying storage.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_cookie_manager_add_cookie_finish() to get the result of the operation.
         * @param cookie the #SoupCookie to be added
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        add_cookie(
            cookie: Soup.Cookie,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        /**
         * Finish an asynchronous operation started with webkit_cookie_manager_add_cookie().
         * @param result a #GAsyncResult
         * @returns %TRUE if the cookie was added or %FALSE in case of error.
         */
        add_cookie_finish(result: Gio.AsyncResult): boolean;
        /**
         * Delete all cookies of `cookie_manager`.
         */
        delete_all_cookies(): void;
        /**
         * Asynchronously delete a #SoupCookie from the current session.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_cookie_manager_delete_cookie_finish() to get the result of the operation.
         * @param cookie the #SoupCookie to be deleted
         * @param cancellable a #GCancellable or %NULL to ignore
         */
        delete_cookie(cookie: Soup.Cookie, cancellable?: Gio.Cancellable | null): Promise<boolean>;
        /**
         * Asynchronously delete a #SoupCookie from the current session.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_cookie_manager_delete_cookie_finish() to get the result of the operation.
         * @param cookie the #SoupCookie to be deleted
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        delete_cookie(
            cookie: Soup.Cookie,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously delete a #SoupCookie from the current session.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_cookie_manager_delete_cookie_finish() to get the result of the operation.
         * @param cookie the #SoupCookie to be deleted
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        delete_cookie(
            cookie: Soup.Cookie,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        /**
         * Finish an asynchronous operation started with webkit_cookie_manager_delete_cookie().
         * @param result a #GAsyncResult
         * @returns %TRUE if the cookie was deleted or %FALSE in case of error.
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
         * Note that when policy was set to %WEBKIT_COOKIE_POLICY_ACCEPT_NO_THIRD_PARTY and
         * ITP is enabled, this will return %WEBKIT_COOKIE_POLICY_ACCEPT_ALWAYS.
         * See also webkit_website_data_manager_set_itp_enabled().
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_cookie_manager_get_accept_policy_finish() to get the result of the operation.
         * @param cancellable a #GCancellable or %NULL to ignore
         */
        get_accept_policy(cancellable?: Gio.Cancellable | null): Promise<CookieAcceptPolicy>;
        /**
         * Asynchronously get the cookie acceptance policy of `cookie_manager`.
         *
         * Note that when policy was set to %WEBKIT_COOKIE_POLICY_ACCEPT_NO_THIRD_PARTY and
         * ITP is enabled, this will return %WEBKIT_COOKIE_POLICY_ACCEPT_ALWAYS.
         * See also webkit_website_data_manager_set_itp_enabled().
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_cookie_manager_get_accept_policy_finish() to get the result of the operation.
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        get_accept_policy(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously get the cookie acceptance policy of `cookie_manager`.
         *
         * Note that when policy was set to %WEBKIT_COOKIE_POLICY_ACCEPT_NO_THIRD_PARTY and
         * ITP is enabled, this will return %WEBKIT_COOKIE_POLICY_ACCEPT_ALWAYS.
         * See also webkit_website_data_manager_set_itp_enabled().
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_cookie_manager_get_accept_policy_finish() to get the result of the operation.
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        get_accept_policy(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<CookieAcceptPolicy> | void;
        /**
         * Finish an asynchronous operation started with webkit_cookie_manager_get_accept_policy().
         * @param result a #GAsyncResult
         * @returns the cookie acceptance policy of @cookie_manager as a #WebKitCookieAcceptPolicy.
         */
        get_accept_policy_finish(result: Gio.AsyncResult): CookieAcceptPolicy;
        /**
         * Asynchronously get a list of #SoupCookie from `cookie_manager`.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_cookie_manager_get_all_cookies_finish() to get the result of the operation.
         * @param cancellable a #GCancellable or %NULL to ignore
         */
        get_all_cookies(cancellable?: Gio.Cancellable | null): Promise<Soup.Cookie[]>;
        /**
         * Asynchronously get a list of #SoupCookie from `cookie_manager`.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_cookie_manager_get_all_cookies_finish() to get the result of the operation.
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback (closure user_data): a #GAsyncReadyCallback to call when the request is satisfied
         */
        get_all_cookies(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously get a list of #SoupCookie from `cookie_manager`.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_cookie_manager_get_all_cookies_finish() to get the result of the operation.
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback (closure user_data): a #GAsyncReadyCallback to call when the request is satisfied
         */
        get_all_cookies(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<Soup.Cookie[]> | void;
        /**
         * Finish an asynchronous operation started with webkit_cookie_manager_get_all_cookies().
         *
         * The return value is a #GList of #SoupCookie instances which should be released
         * with g_list_free_full() and soup_cookie_free().
         * @param result a #GAsyncResult
         * @returns A #GList of #SoupCookie instances.
         */
        get_all_cookies_finish(result: Gio.AsyncResult): Soup.Cookie[];
        /**
         * Asynchronously get a list of #SoupCookie from `cookie_manager`.
         *
         * Asynchronously get a list of #SoupCookie from `cookie_manager` associated with `uri,` which
         * must be either an HTTP or an HTTPS URL.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_cookie_manager_get_cookies_finish() to get the result of the operation.
         * @param uri the URI associated to the cookies to be retrieved
         * @param cancellable a #GCancellable or %NULL to ignore
         */
        get_cookies(uri: string, cancellable?: Gio.Cancellable | null): Promise<Soup.Cookie[]>;
        /**
         * Asynchronously get a list of #SoupCookie from `cookie_manager`.
         *
         * Asynchronously get a list of #SoupCookie from `cookie_manager` associated with `uri,` which
         * must be either an HTTP or an HTTPS URL.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_cookie_manager_get_cookies_finish() to get the result of the operation.
         * @param uri the URI associated to the cookies to be retrieved
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        get_cookies(
            uri: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously get a list of #SoupCookie from `cookie_manager`.
         *
         * Asynchronously get a list of #SoupCookie from `cookie_manager` associated with `uri,` which
         * must be either an HTTP or an HTTPS URL.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_cookie_manager_get_cookies_finish() to get the result of the operation.
         * @param uri the URI associated to the cookies to be retrieved
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        get_cookies(
            uri: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<Soup.Cookie[]> | void;
        /**
         * Finish an asynchronous operation started with webkit_cookie_manager_get_cookies().
         *
         * The return value is a #GList of #SoupCookie instances which should be released
         * with g_list_free_full() and soup_cookie_free().
         * @param result a #GAsyncResult
         * @returns A #GList of #SoupCookie instances.
         */
        get_cookies_finish(result: Gio.AsyncResult): Soup.Cookie[];
        /**
         * Asynchronously get the list of domains for which `cookie_manager` contains cookies.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_cookie_manager_get_domains_with_cookies_finish() to get the result of the operation.
         * @param cancellable a #GCancellable or %NULL to ignore
         */
        get_domains_with_cookies(cancellable?: Gio.Cancellable | null): Promise<string[]>;
        /**
         * Asynchronously get the list of domains for which `cookie_manager` contains cookies.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_cookie_manager_get_domains_with_cookies_finish() to get the result of the operation.
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        get_domains_with_cookies(
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously get the list of domains for which `cookie_manager` contains cookies.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_cookie_manager_get_domains_with_cookies_finish() to get the result of the operation.
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        get_domains_with_cookies(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<string[]> | void;
        /**
         * Finish an asynchronous operation started with webkit_cookie_manager_get_domains_with_cookies().
         *
         * The return value is a %NULL terminated list of strings which should
         * be released with g_strfreev().
         * @param result a #GAsyncResult
         * @returns A %NULL terminated array of domain names    or %NULL in case of error.
         */
        get_domains_with_cookies_finish(result: Gio.AsyncResult): string[];
        /**
         * Asynchronously replace all cookies in `cookie_manager` with the given list of `cookies`.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_cookie_manager_replace_cookies_finish() to get the result of the operation.
         * @param cookies a #GList of #SoupCookie to be added
         * @param cancellable a #GCancellable or %NULL to ignore
         */
        replace_cookies(cookies: Soup.Cookie[], cancellable?: Gio.Cancellable | null): Promise<boolean>;
        /**
         * Asynchronously replace all cookies in `cookie_manager` with the given list of `cookies`.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_cookie_manager_replace_cookies_finish() to get the result of the operation.
         * @param cookies a #GList of #SoupCookie to be added
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback (closure user_data): a #GAsyncReadyCallback to call when the request is satisfied
         */
        replace_cookies(
            cookies: Soup.Cookie[],
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously replace all cookies in `cookie_manager` with the given list of `cookies`.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_cookie_manager_replace_cookies_finish() to get the result of the operation.
         * @param cookies a #GList of #SoupCookie to be added
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback (closure user_data): a #GAsyncReadyCallback to call when the request is satisfied
         */
        replace_cookies(
            cookies: Soup.Cookie[],
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        /**
         * Finish an asynchronous operation started with webkit_cookie_manager_replace_cookies().
         * @param result a #GAsyncResult
         * @returns %TRUE if the cookies were added or %FALSE in case of error.
         */
        replace_cookies_finish(result: Gio.AsyncResult): boolean;
        /**
         * Set the cookie acceptance policy of `cookie_manager` as `policy`.
         *
         * Note that ITP has its own way to handle third-party cookies, so when it's enabled,
         * and `policy` is set to %WEBKIT_COOKIE_POLICY_ACCEPT_NO_THIRD_PARTY, %WEBKIT_COOKIE_POLICY_ACCEPT_ALWAYS
         * will be used instead. Once disabled, the policy will be set back to %WEBKIT_COOKIE_POLICY_ACCEPT_NO_THIRD_PARTY.
         * See also webkit_website_data_manager_set_itp_enabled().
         * @param policy a #WebKitCookieAcceptPolicy
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
         * This method should never be called on a #WebKitCookieManager associated to an ephemeral #WebKitWebsiteDataManager.
         * @param filename the filename to read to/write from
         * @param storage a #WebKitCookiePersistentStorage
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
     */
    class DeviceInfoPermissionRequest extends GObject.Object implements PermissionRequest {
        static $gtype: GObject.GType<DeviceInfoPermissionRequest>;

        // Constructors

        constructor(properties?: Partial<DeviceInfoPermissionRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof DeviceInfoPermissionRequest.SignalSignatures>(
            signal: K,
            callback: DeviceInfoPermissionRequest.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof DeviceInfoPermissionRequest.SignalSignatures>(
            signal: K,
            callback: DeviceInfoPermissionRequest.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof DeviceInfoPermissionRequest.SignalSignatures>(
            signal: K,
            ...args: DeviceInfoPermissionRequest.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited methods
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
         */
        vfunc_allow(): void;
        /**
         * Deny the action which triggered this request.
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
        // Signal callback interfaces

        interface CreatedDestination {
            (_source: Download, destination: string): void;
        }

        interface DecideDestination {
            (_source: Download, suggested_filename: string): boolean | void;
        }

        interface Failed {
            (_source: Download, error: GLib.Error): void;
        }

        interface Finished {
            (_source: Download): void;
        }

        interface ReceivedData {
            (_source: Download, data_length: number): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'created-destination': CreatedDestination;
            'decide-destination': DecideDestination;
            failed: Failed;
            finished: Finished;
            'received-data': ReceivedData;
            'notify::allow-overwrite': GObject.Object.Notify;
            'notify::destination': GObject.Object.Notify;
            'notify::estimated-progress': GObject.Object.Notify;
            'notify::response': GObject.Object.Notify;
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
     * #WebKitDownload carries information about a download request and
     * response, including a #WebKitURIRequest and a #WebKitURIResponse
     * objects. The application may use this object to control the
     * download process, or to simply figure out what is to be downloaded,
     * and handle the download process itself.
     */
    class Download extends GObject.Object {
        static $gtype: GObject.GType<Download>;

        // Properties

        /**
         * Whether or not the download is allowed to overwrite an existing file on
         * disk. If this property is %FALSE and the destination already exists,
         * the download will fail.
         */
        get allow_overwrite(): boolean;
        set allow_overwrite(val: boolean);
        /**
         * Whether or not the download is allowed to overwrite an existing file on
         * disk. If this property is %FALSE and the destination already exists,
         * the download will fail.
         */
        get allowOverwrite(): boolean;
        set allowOverwrite(val: boolean);
        /**
         * The local path to where the download will be saved.
         */
        get destination(): string;
        /**
         * An estimate of the percent completion for the download operation.
         * This value will range from 0.0 to 1.0. The value is an estimate
         * based on the total number of bytes expected to be received for
         * a download.
         * If you need a more accurate progress information you can connect to
         * #WebKitDownload::received-data signal to track the progress.
         */
        get estimated_progress(): number;
        /**
         * An estimate of the percent completion for the download operation.
         * This value will range from 0.0 to 1.0. The value is an estimate
         * based on the total number of bytes expected to be received for
         * a download.
         * If you need a more accurate progress information you can connect to
         * #WebKitDownload::received-data signal to track the progress.
         */
        get estimatedProgress(): number;
        /**
         * The #WebKitURIResponse associated with this download.
         */
        get response(): URIResponse;

        // Constructors

        constructor(properties?: Partial<Download.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Download.SignalSignatures>(signal: K, callback: Download.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Download.SignalSignatures>(
            signal: K,
            callback: Download.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Download.SignalSignatures>(
            signal: K,
            ...args: Download.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_decide_destination(suggested_filename: string): boolean;

        // Methods

        /**
         * Cancels the download.
         *
         * When the ongoing download
         * operation is effectively cancelled the signal
         * #WebKitDownload::failed is emitted with
         * %WEBKIT_DOWNLOAD_ERROR_CANCELLED_BY_USER error.
         */
        cancel(): void;
        /**
         * Returns the current value of the #WebKitDownload:allow-overwrite property.
         *
         * Returns the current value of the #WebKitDownload:allow-overwrite property,
         * which determines whether the download will overwrite an existing file on
         * disk, or if it will fail if the destination already exists.
         * @returns the current value of the #WebKitDownload:allow-overwrite property
         */
        get_allow_overwrite(): boolean;
        /**
         * Obtains the destination to which the downloaded file will be written.
         *
         * You can connect to #WebKitDownload::created-destination to make
         * sure this method returns a valid destination.
         * @returns the destination or %NULL
         */
        get_destination(): string | null;
        /**
         * Gets the elapsed time in seconds, including any fractional part.
         *
         * If the download finished, had an error or was cancelled this is
         * the time between its start and the event.
         * @returns seconds since the download was started
         */
        get_elapsed_time(): number;
        /**
         * Gets the value of the #WebKitDownload:estimated-progress property.
         * Gets the value of the #WebKitDownload:estimated-progress property.
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
         * Retrieves the #WebKitURIRequest object that backs the download
         * process.
         * @returns the #WebKitURIRequest of @download
         */
        get_request(): URIRequest;
        /**
         * Retrieves the #WebKitURIResponse object that backs the download process.
         *
         * Retrieves the #WebKitURIResponse object that backs the download
         * process. This method returns %NULL if called before the response
         * is received from the server. You can connect to notify::response
         * signal to be notified when the response is received.
         * @returns the #WebKitURIResponse, or %NULL if     the response hasn't been received yet.
         */
        get_response(): URIResponse;
        /**
         * Get the #WebKitWebView that initiated the download.
         * @returns the #WebKitWebView that initiated @download,    or %NULL if @download was not initiated by a #WebKitWebView.
         */
        get_web_view(): WebView;
        /**
         * Sets the #WebKitDownload:allow-overwrite property.
         *
         * Sets the #WebKitDownload:allow-overwrite property, which determines whether
         * the download may overwrite an existing file on disk, or if it will fail if
         * the destination already exists.
         * @param allowed the new value for the #WebKitDownload:allow-overwrite property
         */
        set_allow_overwrite(allowed: boolean): void;
        /**
         * Sets the destination to which the downloaded file will be written.
         *
         * This method should be called before the download transfer
         * starts or it will not have any effect on the ongoing download
         * operation. To set the destination using the filename suggested
         * by the server connect to #WebKitDownload::decide-destination
         * signal and call webkit_download_set_destination(). If you want to
         * set a fixed destination that doesn't depend on the suggested
         * filename you can connect to notify::response signal and call
         * webkit_download_set_destination().
         *
         * If #WebKitDownload::decide-destination signal is not handled
         * and destination is not set when the download transfer starts,
         * the file will be saved with the filename suggested by the server in
         * %G_USER_DIRECTORY_DOWNLOAD directory.
         * @param destination the destination
         */
        set_destination(destination: string): void;
    }

    namespace EditorState {
        // Signal callback interfaces

        interface Changed {
            (_source: EditorState): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed: Changed;
            'notify::typing-attributes': GObject.Object.Notify;
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
     * WebKitEditorState represents the state of a #WebKitWebView editor.
     * Use webkit_web_view_get_editor_state() to get the WebKitEditorState
     * of a #WebKitWebView.
     */
    class EditorState extends GObject.Object {
        static $gtype: GObject.GType<EditorState>;

        // Properties

        /**
         * Bitmask of #WebKitEditorTypingAttributes flags.
         * See webkit_editor_state_get_typing_attributes() for more information.
         */
        get typing_attributes(): number;
        /**
         * Bitmask of #WebKitEditorTypingAttributes flags.
         * See webkit_editor_state_get_typing_attributes() for more information.
         */
        get typingAttributes(): number;

        // Constructors

        constructor(properties?: Partial<EditorState.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof EditorState.SignalSignatures>(
            signal: K,
            callback: EditorState.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof EditorState.SignalSignatures>(
            signal: K,
            callback: EditorState.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof EditorState.SignalSignatures>(
            signal: K,
            ...args: EditorState.SignalSignatures[K] extends (...args: infer P) => any ? P : never
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
         * @returns a bitmask of #WebKitEditorTypingAttributes flags
         */
        get_typing_attributes(): number;
        /**
         * Gets whether a copy command can be issued.
         * @returns %TRUE if copy is currently available
         */
        is_copy_available(): boolean;
        /**
         * Gets whether a cut command can be issued.
         * @returns %TRUE if cut is currently available
         */
        is_cut_available(): boolean;
        /**
         * Gets whether a paste command can be issued.
         * @returns %TRUE if paste is currently available
         */
        is_paste_available(): boolean;
        /**
         * Gets whether a redo command can be issued.
         * @returns %TRUE if redo is currently available
         */
        is_redo_available(): boolean;
        /**
         * Gets whether an undo command can be issued.
         * @returns %TRUE if undo is currently available
         */
        is_undo_available(): boolean;
    }

    namespace FaviconDatabase {
        // Signal callback interfaces

        interface FaviconChanged {
            (_source: FaviconDatabase, page_uri: string, favicon_uri: string): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'favicon-changed': FaviconChanged;
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
     * If #WebKitSettings:enable-private-browsing is %TRUE, new icons
     * won't be added to the on-disk database and no existing icons will
     * be deleted from it. Nevertheless, WebKit will still store them in
     * the in-memory cache during the current execution.
     */
    class FaviconDatabase extends GObject.Object {
        static $gtype: GObject.GType<FaviconDatabase>;

        // Constructors

        constructor(properties?: Partial<FaviconDatabase.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof FaviconDatabase.SignalSignatures>(
            signal: K,
            callback: FaviconDatabase.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FaviconDatabase.SignalSignatures>(
            signal: K,
            callback: FaviconDatabase.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FaviconDatabase.SignalSignatures>(
            signal: K,
            ...args: FaviconDatabase.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Clears all icons from the database.
         */
        clear(): void;
        /**
         * Asynchronously obtains a favicon image.
         *
         * Asynchronously obtains an image of the favicon for the
         * given page URI. It returns the cached icon if it's in the database
         * asynchronously waiting for the icon to be read from the database.
         *
         * This is an asynchronous method. When the operation is finished, callback will
         * be invoked. You can then call webkit_favicon_database_get_favicon_finish()
         * to get the result of the operation.
         * @param page_uri URI of the page for which we want to retrieve the favicon
         * @param cancellable A #GCancellable or %NULL.
         */
        get_favicon(page_uri: string, cancellable?: Gio.Cancellable | null): Promise<cairo.Surface>;
        /**
         * Asynchronously obtains a favicon image.
         *
         * Asynchronously obtains an image of the favicon for the
         * given page URI. It returns the cached icon if it's in the database
         * asynchronously waiting for the icon to be read from the database.
         *
         * This is an asynchronous method. When the operation is finished, callback will
         * be invoked. You can then call webkit_favicon_database_get_favicon_finish()
         * to get the result of the operation.
         * @param page_uri URI of the page for which we want to retrieve the favicon
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is            satisfied or %NULL if you don't care about the result.
         */
        get_favicon(
            page_uri: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously obtains a favicon image.
         *
         * Asynchronously obtains an image of the favicon for the
         * given page URI. It returns the cached icon if it's in the database
         * asynchronously waiting for the icon to be read from the database.
         *
         * This is an asynchronous method. When the operation is finished, callback will
         * be invoked. You can then call webkit_favicon_database_get_favicon_finish()
         * to get the result of the operation.
         * @param page_uri URI of the page for which we want to retrieve the favicon
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is            satisfied or %NULL if you don't care about the result.
         */
        get_favicon(
            page_uri: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<cairo.Surface> | void;
        /**
         * Finishes an operation started with webkit_favicon_database_get_favicon().
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to webkit_favicon_database_get_favicon()
         * @returns a new favicon image, or %NULL in case of error.
         */
        get_favicon_finish(result: Gio.AsyncResult): cairo.Surface;
        /**
         * Obtains the URI of the favicon for the given `page_uri`.
         * @param page_uri URI of the page containing the icon
         * @returns a newly allocated URI for the favicon, or %NULL if the database doesn't have a favicon for @page_uri.
         */
        get_favicon_uri(page_uri: string): string;
    }

    namespace FileChooserRequest {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::filter': GObject.Object.Notify;
            'notify::mime-types': GObject.Object.Notify;
            'notify::select-multiple': GObject.Object.Notify;
            'notify::selected-files': GObject.Object.Notify;
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
     * Whenever the user interacts with an HTML input element with
     * file type, WebKit will need to show a dialog to choose one or
     * more files to be uploaded to the server along with the rest of the
     * form data. For that to happen in a general way, instead of just
     * opening a #GtkFileChooserDialog (which might be not desirable in
     * some cases, which could prefer to use their own file chooser
     * dialog), WebKit will fire the #WebKitWebView::run-file-chooser
     * signal with a #WebKitFileChooserRequest object, which will allow
     * the client application to specify the files to be selected, to
     * inspect the details of the request (e.g. if multiple selection
     * should be allowed) and to cancel the request, in case nothing was
     * selected.
     *
     * In case the client application does not wish to handle this signal,
     * WebKit will provide a default handler which will asynchronously run
     * a regular #GtkFileChooserDialog for the user to interact with.
     */
    class FileChooserRequest extends GObject.Object {
        static $gtype: GObject.GType<FileChooserRequest>;

        // Properties

        /**
         * The filter currently associated with the request. See
         * webkit_file_chooser_request_get_mime_types_filter() for more
         * details.
         */
        get filter(): Gtk.FileFilter;
        /**
         * A %NULL-terminated array of strings containing the list of MIME
         * types the file chooser dialog should handle. See
         * webkit_file_chooser_request_get_mime_types() for more details.
         */
        get mime_types(): string[];
        /**
         * A %NULL-terminated array of strings containing the list of MIME
         * types the file chooser dialog should handle. See
         * webkit_file_chooser_request_get_mime_types() for more details.
         */
        get mimeTypes(): string[];
        /**
         * Whether the file chooser should allow selecting multiple
         * files. See
         * webkit_file_chooser_request_get_select_multiple() for
         * more details.
         */
        get select_multiple(): boolean;
        /**
         * Whether the file chooser should allow selecting multiple
         * files. See
         * webkit_file_chooser_request_get_select_multiple() for
         * more details.
         */
        get selectMultiple(): boolean;
        /**
         * A %NULL-terminated array of strings containing the list of
         * selected files associated to the current request. See
         * webkit_file_chooser_request_get_selected_files() for more details.
         */
        get selected_files(): string[];
        /**
         * A %NULL-terminated array of strings containing the list of
         * selected files associated to the current request. See
         * webkit_file_chooser_request_get_selected_files() for more details.
         */
        get selectedFiles(): string[];

        // Constructors

        constructor(properties?: Partial<FileChooserRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof FileChooserRequest.SignalSignatures>(
            signal: K,
            callback: FileChooserRequest.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FileChooserRequest.SignalSignatures>(
            signal: K,
            callback: FileChooserRequest.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FileChooserRequest.SignalSignatures>(
            signal: K,
            ...args: FileChooserRequest.SignalSignatures[K] extends (...args: infer P) => any ? P : never
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
         * @returns a %NULL-terminated array of strings if a list of accepted MIME types is defined or %NULL otherwise, meaning that any MIME type should be accepted. This array and its contents are owned by WebKit and should not be modified or freed.
         */
        get_mime_types(): string[];
        /**
         * Get the filter currently associated with the request.
         *
         * Get the filter currently associated with the request, ready to be
         * used by #GtkFileChooser. This function should normally be called
         * before presenting the file chooser dialog to the user, to decide
         * whether to apply a filter so the user would not be allowed to
         * select files with other MIME types.
         *
         * See webkit_file_chooser_request_get_mime_types() if you are
         * interested in getting the list of accepted MIME types.
         * @returns a #GtkFileFilter if a list of accepted MIME types is defined or %NULL otherwise. The returned object is owned by WebKit should not be modified or freed.
         */
        get_mime_types_filter(): Gtk.FileFilter;
        /**
         * Whether the file chooser should allow selecting multiple files.
         *
         * Determine whether the file chooser associated to this
         * #WebKitFileChooserRequest should allow selecting multiple files,
         * which depends on the HTML input element having a 'multiple'
         * attribute defined.
         * @returns %TRUE if the file chooser should allow selecting multiple files or %FALSE otherwise.
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
         * @returns a %NULL-terminated array of strings if there are selected files associated with the request or %NULL otherwise. This array and its contents are owned by WebKit and should not be modified or freed.
         */
        get_selected_files(): string[];
        /**
         * Ask WebKit to select local files for upload and complete the
         * request.
         * @param files a %NULL-terminated array of strings, containing paths to local files.
         */
        select_files(files: string[]): void;
    }

    namespace FindController {
        // Signal callback interfaces

        interface CountedMatches {
            (_source: FindController, match_count: number): void;
        }

        interface FailedToFindText {
            (_source: FindController): void;
        }

        interface FoundText {
            (_source: FindController, match_count: number): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'counted-matches': CountedMatches;
            'failed-to-find-text': FailedToFindText;
            'found-text': FoundText;
            'notify::max-match-count': GObject.Object.Notify;
            'notify::options': GObject.Object.Notify;
            'notify::text': GObject.Object.Notify;
            'notify::web-view': GObject.Object.Notify;
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
     * Controls text search in a #WebKitWebView.
     *
     * A #WebKitFindController is used to search text in a #WebKitWebView. You
     * can get a #WebKitWebView<!-- -->'s #WebKitFindController with
     * webkit_web_view_get_find_controller(), and later use it to search
     * for text using webkit_find_controller_search(), or get the
     * number of matches using webkit_find_controller_count_matches(). The
     * operations are asynchronous and trigger signals when ready, such as
     * #WebKitFindController::found-text,
     * #WebKitFindController::failed-to-find-text or
     * #WebKitFindController::counted-matches<!-- -->.
     */
    class FindController extends GObject.Object {
        static $gtype: GObject.GType<FindController>;

        // Properties

        /**
         * The maximum number of matches to report for a given search.
         */
        get max_match_count(): number;
        /**
         * The maximum number of matches to report for a given search.
         */
        get maxMatchCount(): number;
        /**
         * The options to be used in the search operation.
         */
        get options(): FindOptions;
        /**
         * The current search text for this #WebKitFindController.
         */
        get text(): string;
        /**
         * The #WebKitWebView this controller is associated to.
         */
        get web_view(): WebView;
        /**
         * The #WebKitWebView this controller is associated to.
         */
        get webView(): WebView;

        // Constructors

        constructor(properties?: Partial<FindController.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof FindController.SignalSignatures>(
            signal: K,
            callback: FindController.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FindController.SignalSignatures>(
            signal: K,
            callback: FindController.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FindController.SignalSignatures>(
            signal: K,
            ...args: FindController.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Counts the number of matches for `search_text`.
         *
         * Counts the number of matches for `search_text` found in the
         * #WebKitWebView with the provided `find_options`. The number of
         * matches will be provided by the
         * #WebKitFindController::counted-matches signal.
         * @param search_text the text to look for
         * @param find_options a bitmask with the #WebKitFindOptions used in the search
         * @param max_match_count the maximum number of matches allowed in the search
         */
        count_matches(search_text: string, find_options: number, max_match_count: number): void;
        /**
         * Gets the maximum number of matches to report.
         *
         * Gets the maximum number of matches to report during a text
         * lookup. This number is passed as the last argument of
         * webkit_find_controller_search() or
         * webkit_find_controller_count_matches().
         * @returns the maximum number of matches to report.
         */
        get_max_match_count(): number;
        /**
         * Gets the #WebKitFindOptions for the current search.
         *
         * Gets a bitmask containing the #WebKitFindOptions associated with
         * the current search.
         * @returns a bitmask containing the #WebKitFindOptions associated with the current search.
         */
        get_options(): number;
        /**
         * Gets the text that `find_controller` is searching for.
         *
         * Gets the text that `find_controller` is currently searching
         * for. This text is passed to either
         * webkit_find_controller_search() or
         * webkit_find_controller_count_matches().
         * @returns the text to look for in the #WebKitWebView.
         */
        get_search_text(): string;
        /**
         * Gets the #WebKitWebView this find controller is associated to.
         *
         * Do
         * not dereference the returned instance as it belongs to the
         * #WebKitFindController.
         * @returns the #WebKitWebView.
         */
        get_web_view(): WebView;
        /**
         * Looks for `search_text` associated with `find_controller`.
         *
         * Looks for `search_text` in the #WebKitWebView associated with
         * `find_controller` since the beginning of the document highlighting
         * up to `max_match_count` matches. The outcome of the search will be
         * asynchronously provided by the #WebKitFindController::found-text
         * and #WebKitFindController::failed-to-find-text signals.
         *
         * To look for the next or previous occurrences of the same text
         * with the same find options use webkit_find_controller_search_next()
         * and/or webkit_find_controller_search_previous(). The
         * #WebKitFindController will use the same text and options for the
         * following searches unless they are modified by another call to this
         * method.
         *
         * Note that if the number of matches is higher than `max_match_count`
         * then #WebKitFindController::found-text will report %G_MAXUINT matches
         * instead of the actual number.
         *
         * Callers should call webkit_find_controller_search_finish() to
         * finish the current search operation.
         * @param search_text the text to look for
         * @param find_options a bitmask with the #WebKitFindOptions used in the search
         * @param max_match_count the maximum number of matches allowed in the search
         */
        search(search_text: string, find_options: number, max_match_count: number): void;
        /**
         * Finishes a find operation.
         *
         * Finishes a find operation started by
         * webkit_find_controller_search(). It will basically unhighlight
         * every text match found.
         *
         * This method will be typically called when the search UI is
         * closed/hidden by the client application.
         */
        search_finish(): void;
        /**
         * Looks for the next occurrence of the search text.
         *
         * Calling this method before webkit_find_controller_search() or
         * webkit_find_controller_count_matches() is a programming error.
         */
        search_next(): void;
        /**
         * Looks for the previous occurrence of the search text.
         *
         * Calling this method before webkit_find_controller_search() or
         * webkit_find_controller_count_matches() is a programming error.
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
     * When a form is about to be submitted in a #WebKitWebView, the
     * #WebKitWebView::submit-form signal is emitted. Its request argument
     * contains information about the text fields of the form, that are
     * typically used to store login information, returned as lists by
     * webkit_form_submission_request_list_text_fields(). You can submit the
     * form with webkit_form_submission_request_submit().
     */
    class FormSubmissionRequest extends GObject.Object {
        static $gtype: GObject.GType<FormSubmissionRequest>;

        // Constructors

        constructor(properties?: Partial<FormSubmissionRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof FormSubmissionRequest.SignalSignatures>(
            signal: K,
            callback: FormSubmissionRequest.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FormSubmissionRequest.SignalSignatures>(
            signal: K,
            callback: FormSubmissionRequest.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FormSubmissionRequest.SignalSignatures>(
            signal: K,
            ...args: FormSubmissionRequest.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the values of the text fields contained in the form associated to `request`.
         *
         * Get a #GHashTable with the values of the text fields contained in the form
         * associated to `request`. Note that fields will be missing if the form
         * contains multiple text input elements with the same name, so this
         * function does not reliably return all text fields.
         * @returns a #GHashTable with the form    text fields, or %NULL if the form doesn't contain text fields.
         */
        get_text_fields(): GLib.HashTable<any, any> | null;
        /**
         * Get lists of the text fields contained in the form associated to `request`.
         *
         * Get lists with the names and values of the text fields contained in
         * the form associated to `request`. Note that names and values may be
         * %NULL.
         *
         * If this function returns %FALSE, then both `field_names` and
         * `field_values` will be empty.
         * @returns %TRUE if the form contains text fields, or %FALSE otherwise
         */
        list_text_fields(): [boolean, string[] | null, string[] | null];
        /**
         * Continue the form submission.
         */
        submit(): void;
    }

    namespace GeolocationManager {
        // Signal callback interfaces

        interface Start {
            (_source: GeolocationManager): boolean | void;
        }

        interface Stop {
            (_source: GeolocationManager): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            start: Start;
            stop: Stop;
            'notify::enable-high-accuracy': GObject.Object.Notify;
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
     * Once a #WebKitGeolocationPermissionRequest is allowed, when WebKit needs to know the
     * user location #WebKitGeolocationManager::start signal is emitted. If the signal is handled
     * and returns %TRUE, the application is responsible for providing the position every time it's
     * updated by calling webkit_geolocation_manager_update_position(). The signal #WebKitGeolocationManager::stop
     * will be emitted when location updates are no longer needed.
     */
    class GeolocationManager extends GObject.Object {
        static $gtype: GObject.GType<GeolocationManager>;

        // Properties

        /**
         * Whether high accuracy is enabled. This is a read-only property that will be
         * set to %TRUE when a #WebKitGeolocationManager needs to get accurate position updates.
         * You can connect to notify::enable-high-accuracy signal to monitor it.
         */
        get enable_high_accuracy(): boolean;
        /**
         * Whether high accuracy is enabled. This is a read-only property that will be
         * set to %TRUE when a #WebKitGeolocationManager needs to get accurate position updates.
         * You can connect to notify::enable-high-accuracy signal to monitor it.
         */
        get enableHighAccuracy(): boolean;

        // Constructors

        constructor(properties?: Partial<GeolocationManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof GeolocationManager.SignalSignatures>(
            signal: K,
            callback: GeolocationManager.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GeolocationManager.SignalSignatures>(
            signal: K,
            callback: GeolocationManager.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GeolocationManager.SignalSignatures>(
            signal: K,
            ...args: GeolocationManager.SignalSignatures[K] extends (...args: infer P) => any ? P : never
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
         * @param position a #WebKitGeolocationPosition
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
     * If your application uses #GApplication (or any subclass like
     * #GtkApplication), WebKit will automatically use the identifier returned by
     * g_application_get_application_id(). This is the recommended approach for
     * enabling geolocation in applications.
     *
     * If an identifier cannot be obtained through #GApplication, the value
     * returned by g_get_prgname() will be used instead as a fallback. For
     * programs which cannot use #GApplication, calling g_set_prgname() early
     * during initialization is needed when the name of the executable on disk
     * does not match the name of a valid `.desktop` file.
     */
    class GeolocationPermissionRequest extends GObject.Object implements PermissionRequest {
        static $gtype: GObject.GType<GeolocationPermissionRequest>;

        // Constructors

        constructor(properties?: Partial<GeolocationPermissionRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof GeolocationPermissionRequest.SignalSignatures>(
            signal: K,
            callback: GeolocationPermissionRequest.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GeolocationPermissionRequest.SignalSignatures>(
            signal: K,
            callback: GeolocationPermissionRequest.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GeolocationPermissionRequest.SignalSignatures>(
            signal: K,
            ...args: GeolocationPermissionRequest.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited methods
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
         */
        vfunc_allow(): void;
        /**
         * Deny the action which triggered this request.
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
            'notify::context': GObject.Object.Notify;
            'notify::image-uri': GObject.Object.Notify;
            'notify::link-label': GObject.Object.Notify;
            'notify::link-title': GObject.Object.Notify;
            'notify::link-uri': GObject.Object.Notify;
            'notify::media-uri': GObject.Object.Notify;
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
     * point in a #WebKitWebView. #WebKitHitTestResult represents the
     * result of a Hit Test. It provides context information about what is
     * at the coordinates of the Hit Test, such as if there's a link,
     * an image or a media.
     *
     * You can get the context of the HitTestResult with
     * webkit_hit_test_result_get_context() that returns a bitmask of
     * #WebKitHitTestResultContext flags. You can also use
     * webkit_hit_test_result_context_is_link(), webkit_hit_test_result_context_is_image() and
     * webkit_hit_test_result_context_is_media() to determine whether there's
     * a link, image or a media element at the coordinates of the Hit Test.
     * Note that it's possible that several #WebKitHitTestResultContext flags
     * are active at the same time, for example if there's a link containing an image.
     *
     * When the mouse is moved over a #WebKitWebView a Hit Test is performed
     * for the mouse coordinates and #WebKitWebView::mouse-target-changed
     * signal is emitted with a #WebKitHitTestResult.
     */
    class HitTestResult extends GObject.Object {
        static $gtype: GObject.GType<HitTestResult>;

        // Properties

        /**
         * Bitmask of #WebKitHitTestResultContext flags representing
         * the context of the #WebKitHitTestResult.
         */
        get context(): number;
        /**
         * The URI of the image if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_IMAGE
         * is present in #WebKitHitTestResult:context
         */
        get image_uri(): string;
        /**
         * The URI of the image if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_IMAGE
         * is present in #WebKitHitTestResult:context
         */
        get imageUri(): string;
        /**
         * The label of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
         * is present in #WebKitHitTestResult:context
         */
        get link_label(): string;
        /**
         * The label of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
         * is present in #WebKitHitTestResult:context
         */
        get linkLabel(): string;
        /**
         * The title of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
         * is present in #WebKitHitTestResult:context
         */
        get link_title(): string;
        /**
         * The title of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
         * is present in #WebKitHitTestResult:context
         */
        get linkTitle(): string;
        /**
         * The URI of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
         * is present in #WebKitHitTestResult:context
         */
        get link_uri(): string;
        /**
         * The URI of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
         * is present in #WebKitHitTestResult:context
         */
        get linkUri(): string;
        /**
         * The URI of the media if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_MEDIA
         * is present in #WebKitHitTestResult:context
         */
        get media_uri(): string;
        /**
         * The URI of the media if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_MEDIA
         * is present in #WebKitHitTestResult:context
         */
        get mediaUri(): string;

        // Constructors

        constructor(properties?: Partial<HitTestResult.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof HitTestResult.SignalSignatures>(
            signal: K,
            callback: HitTestResult.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof HitTestResult.SignalSignatures>(
            signal: K,
            callback: HitTestResult.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof HitTestResult.SignalSignatures>(
            signal: K,
            ...args: HitTestResult.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_EDITABLE flag is present in
         * #WebKitHitTestResult:context.
         * @returns %TRUE if there's an editable element at the coordinates of the @hit_test_result,    or %FALSE otherwise
         */
        context_is_editable(): boolean;
        /**
         * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_IMAGE flag is present in
         * #WebKitHitTestResult:context.
         * @returns %TRUE if there's an image element in the coordinates of the Hit Test,    or %FALSE otherwise
         */
        context_is_image(): boolean;
        /**
         * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK flag is present in
         * #WebKitHitTestResult:context.
         * @returns %TRUE if there's a link element in the coordinates of the Hit Test,    or %FALSE otherwise
         */
        context_is_link(): boolean;
        /**
         * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_MEDIA flag is present in
         * #WebKitHitTestResult:context.
         * @returns %TRUE if there's a media element in the coordinates of the Hit Test,    or %FALSE otherwise
         */
        context_is_media(): boolean;
        /**
         * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_SCROLLBAR flag is present in
         * #WebKitHitTestResult:context.
         * @returns %TRUE if there's a scrollbar element at the coordinates of the @hit_test_result,    or %FALSE otherwise
         */
        context_is_scrollbar(): boolean;
        /**
         * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_SELECTION flag is present in
         * #WebKitHitTestResult:context.
         * @returns %TRUE if there's a selected element at the coordinates of the @hit_test_result,    or %FALSE otherwise
         */
        context_is_selection(): boolean;
        /**
         * Gets the value of the #WebKitHitTestResult:context property.
         * @returns a bitmask of #WebKitHitTestResultContext flags
         */
        get_context(): number;
        /**
         * Gets the value of the #WebKitHitTestResult:image-uri property.
         * @returns the URI of the image element in the coordinates of the Hit Test,    or %NULL if there isn't an image element in @hit_test_result context
         */
        get_image_uri(): string;
        /**
         * Gets the value of the #WebKitHitTestResult:link-label property.
         * @returns the label of the link element in the coordinates of the Hit Test,    or %NULL if there isn't a link element in @hit_test_result context or the    link element doesn't have a label
         */
        get_link_label(): string;
        /**
         * Gets the value of the #WebKitHitTestResult:link-title property.
         * @returns the title of the link element in the coordinates of the Hit Test,    or %NULL if there isn't a link element in @hit_test_result context or the    link element doesn't have a title
         */
        get_link_title(): string;
        /**
         * Gets the value of the #WebKitHitTestResult:link-uri property.
         * @returns the URI of the link element in the coordinates of the Hit Test,    or %NULL if there isn't a link element in @hit_test_result context
         */
        get_link_uri(): string;
        /**
         * Gets the value of the #WebKitHitTestResult:media-uri property.
         * @returns the URI of the media element in the coordinates of the Hit Test,    or %NULL if there isn't a media element in @hit_test_result context
         */
        get_media_uri(): string;
    }

    namespace InputMethodContext {
        // Signal callback interfaces

        interface Committed {
            (_source: InputMethodContext, text: string): void;
        }

        interface DeleteSurrounding {
            (_source: InputMethodContext, offset: number, n_chars: number): void;
        }

        interface PreeditChanged {
            (_source: InputMethodContext): void;
        }

        interface PreeditFinished {
            (_source: InputMethodContext): void;
        }

        interface PreeditStarted {
            (_source: InputMethodContext): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            committed: Committed;
            'delete-surrounding': DeleteSurrounding;
            'preedit-changed': PreeditChanged;
            'preedit-finished': PreeditFinished;
            'preedit-started': PreeditStarted;
            'notify::input-hints': GObject.Object.Notify;
            'notify::input-purpose': GObject.Object.Notify;
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
     */
    abstract class InputMethodContext extends GObject.Object {
        static $gtype: GObject.GType<InputMethodContext>;

        // Properties

        /**
         * The #WebKitInputHints of the input associated with this context.
         */
        get input_hints(): InputHints;
        set input_hints(val: InputHints);
        /**
         * The #WebKitInputHints of the input associated with this context.
         */
        get inputHints(): InputHints;
        set inputHints(val: InputHints);
        /**
         * The #WebKitInputPurpose of the input associated with this context.
         */
        get input_purpose(): InputPurpose;
        set input_purpose(val: InputPurpose);
        /**
         * The #WebKitInputPurpose of the input associated with this context.
         */
        get inputPurpose(): InputPurpose;
        set inputPurpose(val: InputPurpose);

        // Constructors

        constructor(properties?: Partial<InputMethodContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof InputMethodContext.SignalSignatures>(
            signal: K,
            callback: InputMethodContext.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InputMethodContext.SignalSignatures>(
            signal: K,
            callback: InputMethodContext.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InputMethodContext.SignalSignatures>(
            signal: K,
            ...args: InputMethodContext.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_committed(text: string): void;
        vfunc_delete_surrounding(offset: number, n_chars: number): void;
        /**
         * Allow `key_event` to be handled by the input method.
         *
         * If %TRUE is returned, then no further processing should be
         * done for the key event.
         * @param key_event the key event to filter
         */
        vfunc_filter_key_event(key_event: Gdk.EventKey): boolean;
        /**
         * Get the pre-edit string and a list of WebKitInputMethodUnderline.
         *
         * Get the current pre-edit string for the `context,` and a list of WebKitInputMethodUnderline to apply to the string.
         * The string will be displayed inserted at `cursor_offset`.
         */
        vfunc_get_preedit(): [string, InputMethodUnderline[] | null, number];
        /**
         * Notify `context` that cursor area changed in input associated.
         * @param x the x coordinate of cursor location
         * @param y the y coordinate of cursor location
         * @param width the width of cursor area
         * @param height the height of cursor area
         */
        vfunc_notify_cursor_area(x: number, y: number, width: number, height: number): void;
        /**
         * Notify `context` that input associated has gained focus.
         */
        vfunc_notify_focus_in(): void;
        /**
         * Notify `context` that input associated has lost focus.
         */
        vfunc_notify_focus_out(): void;
        /**
         * Notify `context` that the context surrounding the cursor has changed.
         *
         * If there's no selection `selection_index` is the same as `cursor_index`.
         * @param text text surrounding the insertion point
         * @param length the length of @text, or -1 if @text is nul-terminated
         * @param cursor_index the byte index of the insertion cursor within @text.
         * @param selection_index the byte index of the selection cursor within @text.
         */
        vfunc_notify_surrounding(text: string, length: number, cursor_index: number, selection_index: number): void;
        vfunc_preedit_changed(): void;
        vfunc_preedit_finished(): void;
        vfunc_preedit_started(): void;
        /**
         * Reset the `context`.
         *
         * This will typically cause the input to clear the preedit state.
         */
        vfunc_reset(): void;
        /**
         * Set whether `context` should enable preedit to display feedback.
         * @param enabled whether to enable preedit
         */
        vfunc_set_enable_preedit(enabled: boolean): void;

        // Methods

        /**
         * Allow `key_event` to be handled by the input method.
         *
         * If %TRUE is returned, then no further processing should be
         * done for the key event.
         * @param key_event the key event to filter
         * @returns %TRUE if the key event was handled, or %FALSE otherwise
         */
        filter_key_event(key_event: Gdk.EventKey): boolean;
        /**
         * Get the value of the #WebKitInputMethodContext:input-hints property.
         * @returns the #WebKitInputHints of the input associated with @context
         */
        get_input_hints(): InputHints;
        /**
         * Get the value of the #WebKitInputMethodContext:input-purpose property.
         * @returns the #WebKitInputPurpose of the input associated with @context
         */
        get_input_purpose(): InputPurpose;
        /**
         * Get the pre-edit string and a list of WebKitInputMethodUnderline.
         *
         * Get the current pre-edit string for the `context,` and a list of WebKitInputMethodUnderline to apply to the string.
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
         * @param length the length of @text, or -1 if @text is nul-terminated
         * @param cursor_index the byte index of the insertion cursor within @text.
         * @param selection_index the byte index of the selection cursor within @text.
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
         * Set the value of the #WebKitInputMethodContext:input-hints property.
         * @param hints a #WebKitInputHints
         */
        set_input_hints(hints: InputHints | null): void;
        /**
         * Set the value of the #WebKitInputMethodContext:input-purpose property.
         * @param purpose a #WebKitInputPurpose
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
     * Previously, a permission request for installing missing media plugins.
     *
     * WebKitInstallMissingMediaPluginsPermissionRequest will no longer ever be created, so
     * you can remove any code that attempts to handle it.
     */
    class InstallMissingMediaPluginsPermissionRequest extends GObject.Object implements PermissionRequest {
        static $gtype: GObject.GType<InstallMissingMediaPluginsPermissionRequest>;

        // Constructors

        constructor(properties?: Partial<InstallMissingMediaPluginsPermissionRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof InstallMissingMediaPluginsPermissionRequest.SignalSignatures>(
            signal: K,
            callback: InstallMissingMediaPluginsPermissionRequest.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InstallMissingMediaPluginsPermissionRequest.SignalSignatures>(
            signal: K,
            callback: InstallMissingMediaPluginsPermissionRequest.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InstallMissingMediaPluginsPermissionRequest.SignalSignatures>(
            signal: K,
            ...args: InstallMissingMediaPluginsPermissionRequest.SignalSignatures[K] extends (...args: infer P) => any
                ? P
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * This function returns an empty string.
         * @returns an empty string
         */
        get_description(): string;

        // Inherited methods
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
         */
        vfunc_allow(): void;
        /**
         * Deny the action which triggered this request.
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
     */
    class MediaKeySystemPermissionRequest extends GObject.Object implements PermissionRequest {
        static $gtype: GObject.GType<MediaKeySystemPermissionRequest>;

        // Constructors

        constructor(properties?: Partial<MediaKeySystemPermissionRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof MediaKeySystemPermissionRequest.SignalSignatures>(
            signal: K,
            callback: MediaKeySystemPermissionRequest.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MediaKeySystemPermissionRequest.SignalSignatures>(
            signal: K,
            callback: MediaKeySystemPermissionRequest.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MediaKeySystemPermissionRequest.SignalSignatures>(
            signal: K,
            ...args: MediaKeySystemPermissionRequest.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited methods
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
         */
        vfunc_allow(): void;
        /**
         * Deny the action which triggered this request.
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
            'notify::frame-name': GObject.Object.Notify;
            'notify::modifiers': GObject.Object.Notify;
            'notify::mouse-button': GObject.Object.Notify;
            'notify::navigation-action': GObject.Object.Notify;
            'notify::navigation-type': GObject.Object.Notify;
            'notify::request': GObject.Object.Notify;
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
     * navigations. If the value of #WebKitNavigationPolicyDecision:mouse-button is not 0, then
     * the navigation was triggered by a mouse event.
     */
    class NavigationPolicyDecision extends PolicyDecision {
        static $gtype: GObject.GType<NavigationPolicyDecision>;

        // Properties

        /**
         * If this navigation request targets a new frame, this property contains
         * the name of that frame. For example if the decision was triggered by clicking a
         * link with a target attribute equal to "_blank", this property will contain the
         * value of that attribute. In all other cases, this value will be %NULL.
         */
        get frame_name(): string;
        /**
         * If this navigation request targets a new frame, this property contains
         * the name of that frame. For example if the decision was triggered by clicking a
         * link with a target attribute equal to "_blank", this property will contain the
         * value of that attribute. In all other cases, this value will be %NULL.
         */
        get frameName(): string;
        /**
         * If the navigation associated with this policy decision was originally
         * triggered by a mouse event, this property contains a bitmask of various
         * #GdkModifierType values describing the modifiers used for that click.
         * If the navigation was not triggered by a mouse event or no modifiers
         * were active, the value of this property will be zero.
         */
        get modifiers(): number;
        /**
         * If the navigation associated with this policy decision was originally
         * triggered by a mouse event, this property contains non-zero button number
         * of the button triggering that event. The button numbers match those from GDK.
         * If the navigation was not triggered by a mouse event, the value of this
         * property will be 0.
         */
        get mouse_button(): number;
        /**
         * If the navigation associated with this policy decision was originally
         * triggered by a mouse event, this property contains non-zero button number
         * of the button triggering that event. The button numbers match those from GDK.
         * If the navigation was not triggered by a mouse event, the value of this
         * property will be 0.
         */
        get mouseButton(): number;
        /**
         * The #WebKitNavigationAction that triggered this policy decision.
         */
        get navigation_action(): NavigationAction;
        /**
         * The #WebKitNavigationAction that triggered this policy decision.
         */
        get navigationAction(): NavigationAction;
        /**
         * The type of navigation that triggered this policy decision. This is
         * useful for enacting different policies depending on what type of user
         * action caused the navigation.
         */
        get navigation_type(): NavigationType;
        /**
         * The type of navigation that triggered this policy decision. This is
         * useful for enacting different policies depending on what type of user
         * action caused the navigation.
         */
        get navigationType(): NavigationType;
        /**
         * This property contains the #WebKitURIRequest associated with this
         * navigation.
         */
        get request(): URIRequest;

        // Constructors

        constructor(properties?: Partial<NavigationPolicyDecision.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof NavigationPolicyDecision.SignalSignatures>(
            signal: K,
            callback: NavigationPolicyDecision.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof NavigationPolicyDecision.SignalSignatures>(
            signal: K,
            callback: NavigationPolicyDecision.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof NavigationPolicyDecision.SignalSignatures>(
            signal: K,
            ...args: NavigationPolicyDecision.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the value of the #WebKitNavigationPolicyDecision:frame-name property.
         * @returns The name of the new frame this navigation action targets or %NULL
         */
        get_frame_name(): string;
        /**
         * Gets the value of the #WebKitNavigationPolicyDecision:modifiers property.
         * @returns The modifiers active if this decision was triggered by a mouse event
         */
        get_modifiers(): number;
        /**
         * Gets the value of the #WebKitNavigationPolicyDecision:mouse-button property.
         * @returns The mouse button used if this decision was triggered by a mouse event or 0 otherwise
         */
        get_mouse_button(): number;
        /**
         * Gets the value of the #WebKitNavigationPolicyDecision:navigation-action property.
         * @returns The #WebKitNavigationAction triggering this policy decision.
         */
        get_navigation_action(): NavigationAction;
        /**
         * Gets the value of the #WebKitNavigationPolicyDecision:navigation-type property.
         * @returns The type of navigation triggering this policy decision.
         */
        get_navigation_type(): NavigationType;
        /**
         * Gets the value of the #WebKitNavigationPolicyDecision:request property.
         * @returns The URI request that is associated with this navigation
         */
        get_request(): URIRequest;
    }

    namespace Notification {
        // Signal callback interfaces

        interface Clicked {
            (_source: Notification): void;
        }

        interface Closed {
            (_source: Notification): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            clicked: Clicked;
            closed: Closed;
            'notify::body': GObject.Object.Notify;
            'notify::id': GObject.Object.Notify;
            'notify::tag': GObject.Object.Notify;
            'notify::title': GObject.Object.Notify;
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
     */
    class Notification extends GObject.Object {
        static $gtype: GObject.GType<Notification>;

        // Properties

        /**
         * The body for the notification.
         */
        get body(): string;
        /**
         * The unique id for the notification.
         */
        get id(): number;
        /**
         * The tag identifier for the notification.
         */
        get tag(): string;
        /**
         * The title for the notification.
         */
        get title(): string;

        // Constructors

        constructor(properties?: Partial<Notification.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Notification.SignalSignatures>(
            signal: K,
            callback: Notification.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Notification.SignalSignatures>(
            signal: K,
            callback: Notification.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Notification.SignalSignatures>(
            signal: K,
            ...args: Notification.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Tells WebKit the notification has been clicked.
         *
         * This will emit the
         * #WebKitNotification::clicked signal.
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
     */
    class NotificationPermissionRequest extends GObject.Object implements PermissionRequest {
        static $gtype: GObject.GType<NotificationPermissionRequest>;

        // Constructors

        constructor(properties?: Partial<NotificationPermissionRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof NotificationPermissionRequest.SignalSignatures>(
            signal: K,
            callback: NotificationPermissionRequest.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof NotificationPermissionRequest.SignalSignatures>(
            signal: K,
            callback: NotificationPermissionRequest.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof NotificationPermissionRequest.SignalSignatures>(
            signal: K,
            ...args: NotificationPermissionRequest.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited methods
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
         */
        vfunc_allow(): void;
        /**
         * Deny the action which triggered this request.
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
        // Signal callback interfaces

        interface Close {
            (_source: OptionMenu): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            close: Close;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Represents the dropdown menu of a `select` element in a #WebKitWebView.
     *
     * When a select element in a #WebKitWebView needs to display a dropdown menu, the signal
     * #WebKitWebView::show-option-menu is emitted, providing a WebKitOptionMenu with the
     * #WebKitOptionMenuItem<!-- -->s that should be displayed.
     */
    class OptionMenu extends GObject.Object {
        static $gtype: GObject.GType<OptionMenu>;

        // Constructors

        constructor(properties?: Partial<OptionMenu.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof OptionMenu.SignalSignatures>(
            signal: K,
            callback: OptionMenu.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof OptionMenu.SignalSignatures>(
            signal: K,
            callback: OptionMenu.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof OptionMenu.SignalSignatures>(
            signal: K,
            ...args: OptionMenu.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Activates the #WebKitOptionMenuItem at `index` in `menu`.
         *
         * Activating an item changes the value
         * of the element making the item the active one. You are expected to close the menu with
         * webkit_option_menu_close() after activating an item, calling this function again will have no
         * effect.
         * @param index the index of the item
         */
        activate_item(index: number): void;
        /**
         * Request to close a #WebKitOptionMenu.
         *
         * This emits WebKitOptionMenu::close signal.
         * This function should always be called to notify WebKit that the associated
         * menu has been closed. If the menu is closed and neither webkit_option_menu_select_item()
         * nor webkit_option_menu_activate_item() have been called, the element value remains
         * unchanged.
         */
        close(): void;
        /**
         * Gets the #GdkEvent that triggered the dropdown menu.
         * If `menu` was not triggered by a user interaction, like a mouse click,
         * %NULL is returned.
         * @returns the menu event or %NULL.
         */
        get_event(): Gdk.Event;
        /**
         * Returns the #WebKitOptionMenuItem at `index` in `menu`.
         * @param index the index of the item
         * @returns a #WebKitOptionMenuItem of @menu.
         */
        get_item(index: number): OptionMenuItem;
        /**
         * Gets the length of the `menu`.
         * @returns the number of #WebKitOptionMenuItem<!-- -->s in @menu
         */
        get_n_items(): number;
        /**
         * Selects the #WebKitOptionMenuItem at `index` in `menu`.
         *
         * Selecting an item changes the
         * text shown by the combo button, but it doesn't change the value of the element. You need to
         * explicitly activate the item with webkit_option_menu_select_item() or close the menu with
         * webkit_option_menu_close() in which case the currently selected item will be activated.
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
     * be obtained from the #WebKitWebContext, with
     * webkit_web_context_get_plugins().
     */
    class Plugin extends GObject.Object {
        static $gtype: GObject.GType<Plugin>;

        // Constructors

        constructor(properties?: Partial<Plugin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Plugin.SignalSignatures>(signal: K, callback: Plugin.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Plugin.SignalSignatures>(signal: K, callback: Plugin.SignalSignatures[K]): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Plugin.SignalSignatures>(
            signal: K,
            ...args: Plugin.SignalSignatures[K] extends (...args: infer P) => any ? P : never
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
         * as a list of #WebKitMimeInfo.
         * @returns a #GList of #WebKitMimeInfo.
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
     */
    class PointerLockPermissionRequest extends GObject.Object implements PermissionRequest {
        static $gtype: GObject.GType<PointerLockPermissionRequest>;

        // Constructors

        constructor(properties?: Partial<PointerLockPermissionRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof PointerLockPermissionRequest.SignalSignatures>(
            signal: K,
            callback: PointerLockPermissionRequest.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PointerLockPermissionRequest.SignalSignatures>(
            signal: K,
            callback: PointerLockPermissionRequest.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PointerLockPermissionRequest.SignalSignatures>(
            signal: K,
            ...args: PointerLockPermissionRequest.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited methods
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
         */
        vfunc_allow(): void;
        /**
         * Deny the action which triggered this request.
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
     * #WebKitWebView::decide-policy signal with a #WebKitPolicyDecision
     * object. If the signal handler does nothing, WebKit will act as if
     * webkit_policy_decision_use() was called as soon as signal handling
     * completes. To make a policy decision asynchronously, simply increment
     * the reference count of the #WebKitPolicyDecision object.
     */
    abstract class PolicyDecision extends GObject.Object {
        static $gtype: GObject.GType<PolicyDecision>;

        // Constructors

        constructor(properties?: Partial<PolicyDecision.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof PolicyDecision.SignalSignatures>(
            signal: K,
            callback: PolicyDecision.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PolicyDecision.SignalSignatures>(
            signal: K,
            callback: PolicyDecision.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PolicyDecision.SignalSignatures>(
            signal: K,
            ...args: PolicyDecision.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Spawn a download from this decision.
         */
        download(): void;
        /**
         * #WebKitResponsePolicyDecision, this would cancel the request.
         *
         * Ignore the action which triggered this decision. For instance, for a
         * #WebKitResponsePolicyDecision, this would cancel the request.
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
         * @param policies a #WebKitWebsitePolicies
         */
        use_with_policies(policies: WebsitePolicies): void;
    }

    namespace PrintCustomWidget {
        // Signal callback interfaces

        interface Apply {
            (_source: PrintCustomWidget): void;
        }

        interface Update {
            (_source: PrintCustomWidget, page_setup: Gtk.PageSetup, print_settings: Gtk.PrintSettings): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            apply: Apply;
            update: Update;
            'notify::title': GObject.Object.Notify;
            'notify::widget': GObject.Object.Notify;
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
     * dialog by connecting to the #WebKitPrintOperation::create-custom-widget
     * signal, creating a new WebKitPrintCustomWidget with
     * webkit_print_custom_widget_new() and returning it from there. You can later
     * use webkit_print_operation_run_dialog() to display the dialog.
     *
     * Unfortunately, use of custom widgets is incompatible with modern
     * containerized application frameworks like Flatpak. A print dialog
     * constructed in the application process will not have access to host
     * printers, so instead it must be constructed by a desktop portal service
     * running on the host system. Because this print dialog runs in a separate
     * process, it's not possible to attach a custom widget.
     */
    class PrintCustomWidget extends GObject.Object {
        static $gtype: GObject.GType<PrintCustomWidget>;

        // Properties

        /**
         * The title of the custom widget.
         */
        get title(): string;
        /**
         * The custom #GtkWidget that will be embedded in the dialog.
         */
        get widget(): Gtk.Widget;

        // Constructors

        constructor(properties?: Partial<PrintCustomWidget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](widget: Gtk.Widget, title: string): PrintCustomWidget;

        // Signals

        connect<K extends keyof PrintCustomWidget.SignalSignatures>(
            signal: K,
            callback: PrintCustomWidget.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PrintCustomWidget.SignalSignatures>(
            signal: K,
            callback: PrintCustomWidget.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PrintCustomWidget.SignalSignatures>(
            signal: K,
            ...args: PrintCustomWidget.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_apply(widget: Gtk.Widget): void;
        vfunc_update(widget: Gtk.Widget, page_setup: Gtk.PageSetup, print_settings: Gtk.PrintSettings): void;

        // Methods

        /**
         * Return the value of #WebKitPrintCustomWidget:title property.
         *
         * Return the value of #WebKitPrintCustomWidget:title property for the given
         * `print_custom_widget` object.
         * @returns Title of the @print_custom_widget.
         */
        get_title(): string;
        /**
         * Return the value of #WebKitPrintCustomWidget:widget property.
         *
         * Return the value of #WebKitPrintCustomWidget:widget property for the given
         * `print_custom_widget` object. The returned value will always be valid if called
         * from #WebKitPrintCustomWidget::apply or #WebKitPrintCustomWidget::update
         * callbacks, but it will be %NULL if called after the
         * #WebKitPrintCustomWidget::apply signal is emitted.
         * @returns a #GtkWidget.
         */
        get_widget(): Gtk.Widget;
    }

    namespace PrintOperation {
        // Signal callback interfaces

        interface CreateCustomWidget {
            (_source: PrintOperation): PrintCustomWidget;
        }

        interface Failed {
            (_source: PrintOperation, error: GLib.Error): void;
        }

        interface Finished {
            (_source: PrintOperation): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'create-custom-widget': CreateCustomWidget;
            failed: Failed;
            finished: Finished;
            'notify::page-setup': GObject.Object.Notify;
            'notify::print-settings': GObject.Object.Notify;
            'notify::web-view': GObject.Object.Notify;
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
     * A #WebKitPrintOperation controls a print operation in WebKit. With
     * a similar API to #GtkPrintOperation, it lets you set the print
     * settings with webkit_print_operation_set_print_settings() or
     * display the print dialog with webkit_print_operation_run_dialog().
     */
    class PrintOperation extends GObject.Object {
        static $gtype: GObject.GType<PrintOperation>;

        // Properties

        /**
         * The initial #GtkPageSetup for the print operation.
         */
        get page_setup(): Gtk.PageSetup;
        set page_setup(val: Gtk.PageSetup);
        /**
         * The initial #GtkPageSetup for the print operation.
         */
        get pageSetup(): Gtk.PageSetup;
        set pageSetup(val: Gtk.PageSetup);
        /**
         * The initial #GtkPrintSettings for the print operation.
         */
        get print_settings(): Gtk.PrintSettings;
        set print_settings(val: Gtk.PrintSettings);
        /**
         * The initial #GtkPrintSettings for the print operation.
         */
        get printSettings(): Gtk.PrintSettings;
        set printSettings(val: Gtk.PrintSettings);
        /**
         * The #WebKitWebView that will be printed.
         */
        get web_view(): WebView;
        /**
         * The #WebKitWebView that will be printed.
         */
        get webView(): WebView;

        // Constructors

        constructor(properties?: Partial<PrintOperation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](web_view: WebView): PrintOperation;

        // Signals

        connect<K extends keyof PrintOperation.SignalSignatures>(
            signal: K,
            callback: PrintOperation.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PrintOperation.SignalSignatures>(
            signal: K,
            callback: PrintOperation.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PrintOperation.SignalSignatures>(
            signal: K,
            ...args: PrintOperation.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Return the current page setup of `print_operation`.
         *
         * It returns %NULL until
         * either webkit_print_operation_set_page_setup() or webkit_print_operation_run_dialog()
         * have been called.
         * @returns the current #GtkPageSetup of @print_operation.
         */
        get_page_setup(): Gtk.PageSetup;
        /**
         * Return the current print settings of `print_operation`.
         *
         * It returns %NULL until
         * either webkit_print_operation_set_print_settings() or webkit_print_operation_run_dialog()
         * have been called.
         * @returns the current #GtkPrintSettings of @print_operation.
         */
        get_print_settings(): Gtk.PrintSettings;
        /**
         * Start a print operation using current print settings and page setup.
         *
         * Start a print operation using current print settings and page setup
         * without showing the print dialog. If either print settings or page setup
         * are not set with webkit_print_operation_set_print_settings() and
         * webkit_print_operation_set_page_setup(), the default options will be used
         * and the print job will be sent to the default printer.
         * The #WebKitPrintOperation::finished signal is emitted when the printing
         * operation finishes. If an error occurs while printing the signal
         * #WebKitPrintOperation::failed is emitted before #WebKitPrintOperation::finished.
         *
         * If the app is running in a sandbox, this function only works if printing to
         * a file that is in a location accessible to the sandbox, usually acquired
         * through the File Chooser portal. This function will not work for physical
         * printers when running in a sandbox.
         */
        print(): void;
        /**
         * Run the print dialog and start printing.
         *
         * Run the print dialog and start printing using the options selected by
         * the user. This method returns when the print dialog is closed.
         * If the print dialog is cancelled %WEBKIT_PRINT_OPERATION_RESPONSE_CANCEL
         * is returned. If the user clicks on the print button, %WEBKIT_PRINT_OPERATION_RESPONSE_PRINT
         * is returned and the print operation starts. In this case, the #WebKitPrintOperation::finished
         * signal is emitted when the operation finishes. If an error occurs while printing, the signal
         * #WebKitPrintOperation::failed is emitted before #WebKitPrintOperation::finished.
         * If the print dialog is not cancelled current print settings and page setup of `print_operation`
         * are updated with options selected by the user when Print button is pressed in print dialog.
         * You can get the updated print settings and page setup by calling
         * webkit_print_operation_get_print_settings() and webkit_print_operation_get_page_setup()
         * after this method.
         * @param parent transient parent of the print dialog
         * @returns the #WebKitPrintOperationResponse of the print dialog
         */
        run_dialog(parent?: Gtk.Window | null): PrintOperationResponse;
        /**
         * Set the current page setup of `print_operation`.
         *
         * Current page setup is used for the
         * initial values of the print dialog when webkit_print_operation_run_dialog() is called.
         * @param page_setup a #GtkPageSetup to set
         */
        set_page_setup(page_setup: Gtk.PageSetup): void;
        /**
         * Set the current print settings of `print_operation`.
         *
         * Set the current print settings of `print_operation`. Current print settings are used for
         * the initial values of the print dialog when webkit_print_operation_run_dialog() is called.
         * @param print_settings a #GtkPrintSettings to set
         */
        set_print_settings(print_settings: Gtk.PrintSettings): void;
    }

    namespace ResponsePolicyDecision {
        // Signal signatures
        interface SignalSignatures extends PolicyDecision.SignalSignatures {
            'notify::request': GObject.Object.Notify;
            'notify::response': GObject.Object.Notify;
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
     */
    class ResponsePolicyDecision extends PolicyDecision {
        static $gtype: GObject.GType<ResponsePolicyDecision>;

        // Properties

        /**
         * This property contains the #WebKitURIRequest associated with this
         * policy decision.
         */
        get request(): URIRequest;
        /**
         * This property contains the #WebKitURIResponse associated with this
         * policy decision.
         */
        get response(): URIResponse;

        // Constructors

        constructor(properties?: Partial<ResponsePolicyDecision.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ResponsePolicyDecision.SignalSignatures>(
            signal: K,
            callback: ResponsePolicyDecision.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ResponsePolicyDecision.SignalSignatures>(
            signal: K,
            callback: ResponsePolicyDecision.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ResponsePolicyDecision.SignalSignatures>(
            signal: K,
            ...args: ResponsePolicyDecision.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Return the #WebKitURIRequest associated with the response decision.
         *
         * Modifications to the returned object are <emphasis>not</emphasis> taken
         * into account when the request is sent over the network, and is intended
         * only to aid in evaluating whether a response decision should be taken or
         * not. To modify requests before they are sent over the network the
         * #WebKitPage::send-request signal can be used instead.
         * @returns The URI request that is associated with this policy decision.
         */
        get_request(): URIRequest;
        /**
         * Gets the value of the #WebKitResponsePolicyDecision:response property.
         * @returns The URI response that is associated with this policy decision.
         */
        get_response(): URIResponse;
        /**
         * Gets whether the request is the main frame main resource
         * @returns %TRUE if the request is the main frame main resouce or %FALSE otherwise
         */
        is_main_frame_main_resource(): boolean;
        /**
         * Gets whether the MIME type of the response can be displayed in the #WebKitWebView.
         *
         * Gets whether the MIME type of the response can be displayed in the #WebKitWebView
         * that triggered this policy decision request. See also webkit_web_view_can_show_mime_type().
         * @returns %TRUE if the MIME type of the response is supported or %FALSE otherwise
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
     * Controls security settings in a #WebKitWebContext.
     *
     * The #WebKitSecurityManager defines security settings for URI
     * schemes in a #WebKitWebContext. Get it from the context with
     * webkit_web_context_get_security_manager(), and use it to register a
     * URI scheme with a certain security level, or to check if it already
     * has it.
     */
    class SecurityManager extends GObject.Object {
        static $gtype: GObject.GType<SecurityManager>;

        // Constructors

        constructor(properties?: Partial<SecurityManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof SecurityManager.SignalSignatures>(
            signal: K,
            callback: SecurityManager.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SecurityManager.SignalSignatures>(
            signal: K,
            callback: SecurityManager.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SecurityManager.SignalSignatures>(
            signal: K,
            ...args: SecurityManager.SignalSignatures[K] extends (...args: infer P) => any ? P : never
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
         * See also webkit_security_manager_register_uri_scheme_as_cors_enabled().
         * @param scheme a URI scheme
         * @returns %TRUE if @scheme is a CORS enabled scheme or %FALSE otherwise.
         */
        uri_scheme_is_cors_enabled(scheme: string): boolean;
        /**
         * Whether `scheme` is considered as a display isolated scheme.
         *
         * See also webkit_security_manager_register_uri_scheme_as_display_isolated().
         * @param scheme a URI scheme
         * @returns %TRUE if @scheme is a display isolated scheme or %FALSE otherwise.
         */
        uri_scheme_is_display_isolated(scheme: string): boolean;
        /**
         * Whether `scheme` is considered as an empty document scheme.
         *
         * See also webkit_security_manager_register_uri_scheme_as_empty_document().
         * @param scheme a URI scheme
         * @returns %TRUE if @scheme is an empty document scheme or %FALSE otherwise.
         */
        uri_scheme_is_empty_document(scheme: string): boolean;
        /**
         * Whether `scheme` is considered as a local scheme.
         *
         * See also webkit_security_manager_register_uri_scheme_as_local().
         * @param scheme a URI scheme
         * @returns %TRUE if @scheme is a local scheme or %FALSE otherwise.
         */
        uri_scheme_is_local(scheme: string): boolean;
        /**
         * Whether `scheme` is considered as a no-access scheme.
         *
         * See also webkit_security_manager_register_uri_scheme_as_no_access().
         * @param scheme a URI scheme
         * @returns %TRUE if @scheme is a no-access scheme or %FALSE otherwise.
         */
        uri_scheme_is_no_access(scheme: string): boolean;
        /**
         * Whether `scheme` is considered as a secure scheme.
         *
         * See also webkit_security_manager_register_uri_scheme_as_secure().
         * @param scheme a URI scheme
         * @returns %TRUE if @scheme is a secure scheme or %FALSE otherwise.
         */
        uri_scheme_is_secure(scheme: string): boolean;
    }

    namespace Settings {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::allow-file-access-from-file-urls': GObject.Object.Notify;
            'notify::allow-modal-dialogs': GObject.Object.Notify;
            'notify::allow-top-navigation-to-data-urls': GObject.Object.Notify;
            'notify::allow-universal-access-from-file-urls': GObject.Object.Notify;
            'notify::auto-load-images': GObject.Object.Notify;
            'notify::cursive-font-family': GObject.Object.Notify;
            'notify::default-charset': GObject.Object.Notify;
            'notify::default-font-family': GObject.Object.Notify;
            'notify::default-font-size': GObject.Object.Notify;
            'notify::default-monospace-font-size': GObject.Object.Notify;
            'notify::disable-web-security': GObject.Object.Notify;
            'notify::draw-compositing-indicators': GObject.Object.Notify;
            'notify::enable-2d-canvas-acceleration': GObject.Object.Notify;
            'notify::enable2d-canvas-acceleration': GObject.Object.Notify;
            'notify::enable-accelerated-2d-canvas': GObject.Object.Notify;
            'notify::enable-accelerated2d-canvas': GObject.Object.Notify;
            'notify::enable-back-forward-navigation-gestures': GObject.Object.Notify;
            'notify::enable-caret-browsing': GObject.Object.Notify;
            'notify::enable-developer-extras': GObject.Object.Notify;
            'notify::enable-dns-prefetching': GObject.Object.Notify;
            'notify::enable-encrypted-media': GObject.Object.Notify;
            'notify::enable-frame-flattening': GObject.Object.Notify;
            'notify::enable-fullscreen': GObject.Object.Notify;
            'notify::enable-html5-database': GObject.Object.Notify;
            'notify::enable-html5-local-storage': GObject.Object.Notify;
            'notify::enable-hyperlink-auditing': GObject.Object.Notify;
            'notify::enable-java': GObject.Object.Notify;
            'notify::enable-javascript': GObject.Object.Notify;
            'notify::enable-javascript-markup': GObject.Object.Notify;
            'notify::enable-media': GObject.Object.Notify;
            'notify::enable-media-capabilities': GObject.Object.Notify;
            'notify::enable-media-stream': GObject.Object.Notify;
            'notify::enable-mediasource': GObject.Object.Notify;
            'notify::enable-mock-capture-devices': GObject.Object.Notify;
            'notify::enable-offline-web-application-cache': GObject.Object.Notify;
            'notify::enable-page-cache': GObject.Object.Notify;
            'notify::enable-plugins': GObject.Object.Notify;
            'notify::enable-private-browsing': GObject.Object.Notify;
            'notify::enable-resizable-text-areas': GObject.Object.Notify;
            'notify::enable-site-specific-quirks': GObject.Object.Notify;
            'notify::enable-smooth-scrolling': GObject.Object.Notify;
            'notify::enable-spatial-navigation': GObject.Object.Notify;
            'notify::enable-tabs-to-links': GObject.Object.Notify;
            'notify::enable-webaudio': GObject.Object.Notify;
            'notify::enable-webgl': GObject.Object.Notify;
            'notify::enable-webrtc': GObject.Object.Notify;
            'notify::enable-write-console-messages-to-stdout': GObject.Object.Notify;
            'notify::enable-xss-auditor': GObject.Object.Notify;
            'notify::fantasy-font-family': GObject.Object.Notify;
            'notify::hardware-acceleration-policy': GObject.Object.Notify;
            'notify::javascript-can-access-clipboard': GObject.Object.Notify;
            'notify::javascript-can-open-windows-automatically': GObject.Object.Notify;
            'notify::load-icons-ignoring-image-load-setting': GObject.Object.Notify;
            'notify::media-content-types-requiring-hardware-support': GObject.Object.Notify;
            'notify::media-playback-allows-inline': GObject.Object.Notify;
            'notify::media-playback-requires-user-gesture': GObject.Object.Notify;
            'notify::minimum-font-size': GObject.Object.Notify;
            'notify::monospace-font-family': GObject.Object.Notify;
            'notify::pictograph-font-family': GObject.Object.Notify;
            'notify::print-backgrounds': GObject.Object.Notify;
            'notify::sans-serif-font-family': GObject.Object.Notify;
            'notify::serif-font-family': GObject.Object.Notify;
            'notify::user-agent': GObject.Object.Notify;
            'notify::webrtc-udp-ports-range': GObject.Object.Notify;
            'notify::zoom-text-only': GObject.Object.Notify;
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
            disable_web_security: boolean;
            disableWebSecurity: boolean;
            draw_compositing_indicators: boolean;
            drawCompositingIndicators: boolean;
            enable_2d_canvas_acceleration: boolean;
            enable2dCanvasAcceleration: boolean;
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
            webrtc_udp_ports_range: string;
            webrtcUdpPortsRange: string;
            zoom_text_only: boolean;
            zoomTextOnly: boolean;
        }
    }

    /**
     * Control the behaviour of a #WebKitWebView.
     *
     * #WebKitSettings can be applied to a #WebKitWebView to control text charset,
     * color, font sizes, printing mode, script support, loading of images and various
     * other things on a #WebKitWebView. After creation, a #WebKitSettings object
     * contains default settings.
     *
     * ```c
     * // Disable JavaScript
     * WebKitSettings *settings = webkit_web_view_group_get_settings (my_view_group);
     * webkit_settings_set_enable_javascript (settings, FALSE);
     * ```
     */
    class Settings extends GObject.Object {
        static $gtype: GObject.GType<Settings>;

        // Properties

        /**
         * Whether file access is allowed from file URLs. By default, when
         * something is loaded in a #WebKitWebView using a file URI, cross
         * origin requests to other file resources are not allowed. This
         * setting allows you to change that behaviour, so that it would be
         * possible to do a XMLHttpRequest of a local file, for example.
         */
        get allow_file_access_from_file_urls(): boolean;
        set allow_file_access_from_file_urls(val: boolean);
        /**
         * Whether file access is allowed from file URLs. By default, when
         * something is loaded in a #WebKitWebView using a file URI, cross
         * origin requests to other file resources are not allowed. This
         * setting allows you to change that behaviour, so that it would be
         * possible to do a XMLHttpRequest of a local file, for example.
         */
        get allowFileAccessFromFileUrls(): boolean;
        set allowFileAccessFromFileUrls(val: boolean);
        /**
         * Determine whether it's allowed to create and run modal dialogs
         * from a #WebKitWebView through JavaScript with
         * <function>window.showModalDialog</function>. If it's set to
         * %FALSE, the associated #WebKitWebView won't be able to create
         * new modal dialogs, so not even the #WebKitWebView::create
         * signal will be emitted.
         */
        get allow_modal_dialogs(): boolean;
        set allow_modal_dialogs(val: boolean);
        /**
         * Determine whether it's allowed to create and run modal dialogs
         * from a #WebKitWebView through JavaScript with
         * <function>window.showModalDialog</function>. If it's set to
         * %FALSE, the associated #WebKitWebView won't be able to create
         * new modal dialogs, so not even the #WebKitWebView::create
         * signal will be emitted.
         */
        get allowModalDialogs(): boolean;
        set allowModalDialogs(val: boolean);
        /**
         * Whether or not the top frame is allowed to navigate to data URLs. It is disabled by default
         * due to the risk it poses when loading untrusted URLs, with data URLs being used in scamming
         * and phishing attacks. In contrast, a scenario where it could be enabled could be an app that
         * embeds a WebView and you have control of the pages being show instead of a generic browser.
         */
        get allow_top_navigation_to_data_urls(): boolean;
        set allow_top_navigation_to_data_urls(val: boolean);
        /**
         * Whether or not the top frame is allowed to navigate to data URLs. It is disabled by default
         * due to the risk it poses when loading untrusted URLs, with data URLs being used in scamming
         * and phishing attacks. In contrast, a scenario where it could be enabled could be an app that
         * embeds a WebView and you have control of the pages being show instead of a generic browser.
         */
        get allowTopNavigationToDataUrls(): boolean;
        set allowTopNavigationToDataUrls(val: boolean);
        /**
         * Whether or not JavaScript running in the context of a file scheme URL
         * should be allowed to access content from any origin.  By default, when
         * something is loaded in a #WebKitWebView using a file scheme URL,
         * access to the local file system and arbitrary local storage is not
         * allowed. This setting allows you to change that behaviour, so that
         * it would be possible to use local storage, for example.
         */
        get allow_universal_access_from_file_urls(): boolean;
        set allow_universal_access_from_file_urls(val: boolean);
        /**
         * Whether or not JavaScript running in the context of a file scheme URL
         * should be allowed to access content from any origin.  By default, when
         * something is loaded in a #WebKitWebView using a file scheme URL,
         * access to the local file system and arbitrary local storage is not
         * allowed. This setting allows you to change that behaviour, so that
         * it would be possible to use local storage, for example.
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
         * Enable or disable support for Web Security on pages.
         *
         * This setting disables the same-origin policy, allowing every website full control over
         * all other websites. This is for use in special environments where you wish to disable
         * all security and allow websites to hack each other. It is impossible to use this setting
         * securely.
         */
        get disable_web_security(): boolean;
        set disable_web_security(val: boolean);
        /**
         * Enable or disable support for Web Security on pages.
         *
         * This setting disables the same-origin policy, allowing every website full control over
         * all other websites. This is for use in special environments where you wish to disable
         * all security and allow websites to hack each other. It is impossible to use this setting
         * securely.
         */
        get disableWebSecurity(): boolean;
        set disableWebSecurity(val: boolean);
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
         * Enable or disable 2D canvas acceleration.
         * If this setting is enabled, the 2D canvas will be accelerated even if Skia CPU
         * is used for rendering. However, the canvas can be unaccelerated even when this setting
         * is enabled, for other reasons like its size or when willReadFrequently property is used.
         */
        get enable_2d_canvas_acceleration(): boolean;
        set enable_2d_canvas_acceleration(val: boolean);
        /**
         * Enable or disable 2D canvas acceleration.
         * If this setting is enabled, the 2D canvas will be accelerated even if Skia CPU
         * is used for rendering. However, the canvas can be unaccelerated even when this setting
         * is enabled, for other reasons like its size or when willReadFrequently property is used.
         */
        get enable2dCanvasAcceleration(): boolean;
        set enable2dCanvasAcceleration(val: boolean);
        /**
         * Enable or disable accelerated 2D canvas. Accelerated 2D canvas is only available
         * if WebKit was compiled with a version of Cairo including the unstable CairoGL API.
         * When accelerated 2D canvas is enabled, WebKit may render some 2D canvas content
         * using hardware accelerated drawing operations.
         */
        get enable_accelerated_2d_canvas(): boolean;
        set enable_accelerated_2d_canvas(val: boolean);
        /**
         * Enable or disable accelerated 2D canvas. Accelerated 2D canvas is only available
         * if WebKit was compiled with a version of Cairo including the unstable CairoGL API.
         * When accelerated 2D canvas is enabled, WebKit may render some 2D canvas content
         * using hardware accelerated drawing operations.
         */
        get enableAccelerated2dCanvas(): boolean;
        set enableAccelerated2dCanvas(val: boolean);
        /**
         * Enable or disable horizontal swipe gesture for back-forward navigation.
         */
        get enable_back_forward_navigation_gestures(): boolean;
        set enable_back_forward_navigation_gestures(val: boolean);
        /**
         * Enable or disable horizontal swipe gesture for back-forward navigation.
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
         */
        get enableEncryptedMedia(): boolean;
        set enableEncryptedMedia(val: boolean);
        /**
         * Frame flattening is no longer supported. This property does nothing.
         */
        get enable_frame_flattening(): boolean;
        set enable_frame_flattening(val: boolean);
        /**
         * Frame flattening is no longer supported. This property does nothing.
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
         */
        get enable_java(): boolean;
        set enable_java(val: boolean);
        /**
         * Determines whether or not Java is enabled on the page.
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
         * executing JavaScript is still allowed if #WebKitSettings:enable-javascript is %TRUE.
         */
        get enable_javascript_markup(): boolean;
        set enable_javascript_markup(val: boolean);
        /**
         * Determines whether or not JavaScript markup is allowed in document. When this setting is disabled,
         * all JavaScript-related elements and attributes are removed from the document during parsing. Note that
         * executing JavaScript is still allowed if #WebKitSettings:enable-javascript is %TRUE.
         */
        get enableJavascriptMarkup(): boolean;
        set enableJavascriptMarkup(val: boolean);
        /**
         * Enable or disable support for media playback on pages. This setting is enabled by
         * default. Disabling it means `<audio>`, `<track>` and `<video>` elements will have
         * playback support disabled.
         */
        get enable_media(): boolean;
        set enable_media(val: boolean);
        /**
         * Enable or disable support for media playback on pages. This setting is enabled by
         * default. Disabling it means `<audio>`, `<track>` and `<video>` elements will have
         * playback support disabled.
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
         */
        get enableMediaCapabilities(): boolean;
        set enableMediaCapabilities(val: boolean);
        /**
         * Enable or disable support for MediaStream on pages. MediaStream
         * is an experimental proposal for allowing web pages to access
         * audio and video devices for capture.
         *
         * See also http://dev.w3.org/2011/webrtc/editor/getusermedia.html
         */
        get enable_media_stream(): boolean;
        set enable_media_stream(val: boolean);
        /**
         * Enable or disable support for MediaStream on pages. MediaStream
         * is an experimental proposal for allowing web pages to access
         * audio and video devices for capture.
         *
         * See also http://dev.w3.org/2011/webrtc/editor/getusermedia.html
         */
        get enableMediaStream(): boolean;
        set enableMediaStream(val: boolean);
        /**
         * Enable or disable support for MediaSource on pages. MediaSource
         * extends HTMLMediaElement to allow JavaScript to generate media
         * streams for playback.
         *
         * See also http://www.w3.org/TR/media-source/
         */
        get enable_mediasource(): boolean;
        set enable_mediasource(val: boolean);
        /**
         * Enable or disable support for MediaSource on pages. MediaSource
         * extends HTMLMediaElement to allow JavaScript to generate media
         * streams for playback.
         *
         * See also http://www.w3.org/TR/media-source/
         */
        get enableMediasource(): boolean;
        set enableMediasource(val: boolean);
        /**
         * Enable or disable the Mock Capture Devices. Those are fake
         * Microphone and Camera devices to be used as MediaStream
         * sources.
         */
        get enable_mock_capture_devices(): boolean;
        set enable_mock_capture_devices(val: boolean);
        /**
         * Enable or disable the Mock Capture Devices. Those are fake
         * Microphone and Camera devices to be used as MediaStream
         * sources.
         */
        get enableMockCaptureDevices(): boolean;
        set enableMockCaptureDevices(val: boolean);
        /**
         * Unsupported setting. This property does nothing.
         */
        get enable_offline_web_application_cache(): boolean;
        set enable_offline_web_application_cache(val: boolean);
        /**
         * Unsupported setting. This property does nothing.
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
         */
        get enable_plugins(): boolean;
        set enable_plugins(val: boolean);
        /**
         * Determines whether or not plugins on the page are enabled.
         */
        get enablePlugins(): boolean;
        set enablePlugins(val: boolean);
        /**
         * Determines whether or not private browsing is enabled. Private browsing
         * will disable history, cache and form auto-fill for any pages visited.
         */
        get enable_private_browsing(): boolean;
        set enable_private_browsing(val: boolean);
        /**
         * Determines whether or not private browsing is enabled. Private browsing
         * will disable history, cache and form auto-fill for any pages visited.
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
         * Enabling this setting implies that [property`Settings:`enable-media-stream]
         * will be enabled as well.
         *
         * See also https://www.w3.org/TR/webrtc/
         */
        get enable_webrtc(): boolean;
        set enable_webrtc(val: boolean);
        /**
         * Enable WebRTC support for loaded pages.
         *
         * Enabling this setting implies that [property`Settings:`enable-media-stream]
         * will be enabled as well.
         *
         * See also https://www.w3.org/TR/webrtc/
         */
        get enableWebrtc(): boolean;
        set enableWebrtc(val: boolean);
        /**
         * Enable or disable writing console messages to stdout. These are messages
         * sent to the console with console.log and related methods.
         */
        get enable_write_console_messages_to_stdout(): boolean;
        set enable_write_console_messages_to_stdout(val: boolean);
        /**
         * Enable or disable writing console messages to stdout. These are messages
         * sent to the console with console.log and related methods.
         */
        get enableWriteConsoleMessagesToStdout(): boolean;
        set enableWriteConsoleMessagesToStdout(val: boolean);
        /**
         * Whether to enable the XSS auditor. This feature filters some kinds of
         * reflective XSS attacks on vulnerable web sites.
         */
        get enable_xss_auditor(): boolean;
        set enable_xss_auditor(val: boolean);
        /**
         * Whether to enable the XSS auditor. This feature filters some kinds of
         * reflective XSS attacks on vulnerable web sites.
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
         * The #WebKitHardwareAccelerationPolicy to decide how to enable and disable
         * hardware acceleration. Disabling hardware acceleration might
         * cause some websites to not render correctly or consume more CPU.
         *
         * Note that changing this setting might not be possible if hardware acceleration is not
         * supported by the hardware or the system. In that case, you can get the value to know the
         * actual policy being used, but changing the setting will not have any effect.
         */
        get hardware_acceleration_policy(): HardwareAccelerationPolicy;
        set hardware_acceleration_policy(val: HardwareAccelerationPolicy);
        /**
         * The #WebKitHardwareAccelerationPolicy to decide how to enable and disable
         * hardware acceleration. Disabling hardware acceleration might
         * cause some websites to not render correctly or consume more CPU.
         *
         * Note that changing this setting might not be possible if hardware acceleration is not
         * supported by the hardware or the system. In that case, you can get the value to know the
         * actual policy being used, but changing the setting will not have any effect.
         */
        get hardwareAccelerationPolicy(): HardwareAccelerationPolicy;
        set hardwareAccelerationPolicy(val: HardwareAccelerationPolicy);
        /**
         * Whether JavaScript can access the clipboard. The default value is %FALSE. If
         * set to %TRUE, document.execCommand() allows cut, copy and paste commands.
         */
        get javascript_can_access_clipboard(): boolean;
        set javascript_can_access_clipboard(val: boolean);
        /**
         * Whether JavaScript can access the clipboard. The default value is %FALSE. If
         * set to %TRUE, document.execCommand() allows cut, copy and paste commands.
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
         * Unsupported setting. This property does nothing.
         */
        get load_icons_ignoring_image_load_setting(): boolean;
        set load_icons_ignoring_image_load_setting(val: boolean);
        /**
         * Unsupported setting. This property does nothing.
         */
        get loadIconsIgnoringImageLoadSetting(): boolean;
        set loadIconsIgnoringImageLoadSetting(val: boolean);
        /**
         * List of media content types requiring hardware support, split by semicolons (:).
         * For example: 'video/webm; codecs="vp*":video/mp4; codecs="avc*":video/&ast; codecs="av1*"'.
         */
        get media_content_types_requiring_hardware_support(): string;
        set media_content_types_requiring_hardware_support(val: string);
        /**
         * List of media content types requiring hardware support, split by semicolons (:).
         * For example: 'video/webm; codecs="vp*":video/mp4; codecs="avc*":video/&ast; codecs="av1*"'.
         */
        get mediaContentTypesRequiringHardwareSupport(): string;
        set mediaContentTypesRequiringHardwareSupport(val: string);
        /**
         * Whether media playback is full-screen only or inline playback is allowed.
         * This is %TRUE by default, so media playback can be inline. Setting it to
         * %FALSE allows specifying that media playback should be always fullscreen.
         */
        get media_playback_allows_inline(): boolean;
        set media_playback_allows_inline(val: boolean);
        /**
         * Whether media playback is full-screen only or inline playback is allowed.
         * This is %TRUE by default, so media playback can be inline. Setting it to
         * %FALSE allows specifying that media playback should be always fullscreen.
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
         * webkit_settings_set_user_agent_with_application_details() instead.
         *
         * If this property is set to the empty string or %NULL, it will revert to the standard
         * user-agent.
         */
        get user_agent(): string;
        set user_agent(val: string);
        /**
         * The user-agent string used by WebKit. Unusual user-agent strings may cause web
         * content to render incorrectly or fail to run, as many web pages are written to
         * parse the user-agent strings of only the most popular browsers. Therefore, it's
         * typically better to not completely override the standard user-agent, but to use
         * webkit_settings_set_user_agent_with_application_details() instead.
         *
         * If this property is set to the empty string or %NULL, it will revert to the standard
         * user-agent.
         */
        get userAgent(): string;
        set userAgent(val: string);
        /**
         * Allow customization of the WebRTC UDP ports range.
         *
         * In some constrained environments where a firewall blocks UDP network traffic excepted on a
         * specific port range, this settings can be used to give hints to the WebRTC backend regarding
         * which ports to allocate. The format is min-port:max-port, so for instance 20000:30000. The
         * default empty string value means the OS will use no hints from the WebRTC backend. Using 0
         * for one of the values is allowed and means the value is unspecified.
         */
        get webrtc_udp_ports_range(): string;
        set webrtc_udp_ports_range(val: string);
        /**
         * Allow customization of the WebRTC UDP ports range.
         *
         * In some constrained environments where a firewall blocks UDP network traffic excepted on a
         * specific port range, this settings can be used to give hints to the WebRTC backend regarding
         * which ports to allocate. The format is min-port:max-port, so for instance 20000:30000. The
         * default empty string value means the OS will use no hints from the WebRTC backend. Using 0
         * for one of the values is allowed and means the value is unspecified.
         */
        get webrtcUdpPortsRange(): string;
        set webrtcUdpPortsRange(val: string);
        /**
         * Whether #WebKitWebView:zoom-level affects only the
         * text of the page or all the contents. Other contents containing text
         * like form controls will be also affected by zoom factor when
         * this property is enabled.
         */
        get zoom_text_only(): boolean;
        set zoom_text_only(val: boolean);
        /**
         * Whether #WebKitWebView:zoom-level affects only the
         * text of the page or all the contents. Other contents containing text
         * like form controls will be also affected by zoom factor when
         * this property is enabled.
         */
        get zoomTextOnly(): boolean;
        set zoomTextOnly(val: boolean);

        // Constructors

        constructor(properties?: Partial<Settings.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Settings;

        // Signals

        connect<K extends keyof Settings.SignalSignatures>(signal: K, callback: Settings.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Settings.SignalSignatures>(
            signal: K,
            callback: Settings.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Settings.SignalSignatures>(
            signal: K,
            ...args: Settings.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Convert `points` to the equivalent value in pixels.
         *
         * Convert `points` to the equivalent value in pixels, based on the current
         * screen DPI. Applications can use this function to convert font size values
         * in points to font size values in pixels when setting the font size properties
         * of #WebKitSettings.
         * @param points the font size in points to convert to pixels
         */
        static font_size_to_pixels(points: number): number;
        /**
         * Convert `pixels` to the equivalent value in points.
         *
         * Convert `pixels` to the equivalent value in points, based on the current
         * screen DPI. Applications can use this function to convert font size values
         * in pixels to font size values in points when getting the font size properties
         * of #WebKitSettings.
         * @param pixels the font size in pixels to convert to points
         */
        static font_size_to_points(pixels: number): number;
        /**
         * Gets the list of all available WebKit features.
         *
         * Features can be toggled with [method`Settings`.set_feature_enabled],
         * and their current state determined with
         * [method`Settings`.get_feature_enabled].
         *
         * Note that most applications should use
         * [func`Settings`.get_development_features] and
         * [func`Settings`.get_experimental_features] instead.
         */
        static get_all_features(): FeatureList;
        /**
         * Gets the list of available development WebKit features.
         *
         * The returned features are a subset of those returned by
         * [func`Settings`.get_all_features], and includes those which
         * web and WebKit developers might find useful, but in general should
         * *not* be exposed to end users; see [enum`FeatureStatus]` for
         * more details.
         */
        static get_development_features(): FeatureList;
        /**
         * Gets the list of available experimental WebKit features.
         *
         * The returned features are a subset of those returned by
         * [func`Settings`.get_all_features], and includes those which
         * certain applications may want to expose to end users; see
         * [enum`FeatureStatus]` for more details.
         */
        static get_experimental_features(): FeatureList;

        // Methods

        /**
         * Reads the contents of the given `group_name` from the given `key_file` and apply the value of
         * each key/value to the corresponding property on the `settings`.
         *
         * Value types have to match with the corresponding setting property type and the group keys have to
         * match existing setting property names. If those conditions are not met, the function will return
         * %FALSE.
         *
         * Supported value types are strings (unquoted), booleans (0, 1, true, false) and unsigned integers.
         * @param key_file a #GKeyFile
         * @param group_name Name of the group to read from @key_file
         * @returns %TRUE if the settings were correctly applied or %FALSE on error.
         */
        apply_from_key_file(key_file: GLib.KeyFile, group_name: string): boolean;
        /**
         * Get the #WebKitSettings:allow-file-access-from-file-urls property.
         * @returns %TRUE If file access from file URLs is allowed or %FALSE otherwise.
         */
        get_allow_file_access_from_file_urls(): boolean;
        /**
         * Get the #WebKitSettings:allow-modal-dialogs property.
         * @returns %TRUE if it's allowed to create and run modal dialogs or %FALSE otherwise.
         */
        get_allow_modal_dialogs(): boolean;
        /**
         * Get the #WebKitSettings:allow-top-navigation-to-data-urls property.
         * @returns %TRUE If navigation to data URLs from the top frame is allowed or %FALSE\ otherwise.
         */
        get_allow_top_navigation_to_data_urls(): boolean;
        /**
         * Get the #WebKitSettings:allow-universal-access-from-file-urls property.
         * @returns %TRUE If universal access from file URLs is allowed or %FALSE otherwise.
         */
        get_allow_universal_access_from_file_urls(): boolean;
        /**
         * Get the #WebKitSettings:auto-load-images property.
         * @returns %TRUE If auto loading of images is enabled or %FALSE otherwise.
         */
        get_auto_load_images(): boolean;
        /**
         * Gets the #WebKitSettings:cursive-font-family property.
         * @returns The default font family used to display content marked with cursive font.
         */
        get_cursive_font_family(): string;
        /**
         * Gets the #WebKitSettings:default-charset property.
         * @returns Default charset.
         */
        get_default_charset(): string;
        /**
         * Gets the #WebKitSettings:default-font-family property.
         * @returns The default font family used to display content that does not specify a font.
         */
        get_default_font_family(): string;
        /**
         * Gets the #WebKitSettings:default-font-size property.
         * @returns The default font size, in pixels.
         */
        get_default_font_size(): number;
        /**
         * Gets the #WebKitSettings:default-monospace-font-size property.
         * @returns Default monospace font size, in pixels.
         */
        get_default_monospace_font_size(): number;
        /**
         * Get the #WebKitSettings:disable-web-security property.
         * @returns %TRUE If web security support is disabled or %FALSE otherwise.
         */
        get_disable_web_security(): boolean;
        /**
         * Get the #WebKitSettings:draw-compositing-indicators property.
         * @returns %TRUE If compositing borders are drawn or %FALSE otherwise.
         */
        get_draw_compositing_indicators(): boolean;
        /**
         * Get the #WebKitSettings:enable-2d-canvas-acceleration property.
         * @returns %TRUE if 2D canvas acceleration is enabled or %FALSE otherwise.
         */
        get_enable_2d_canvas_acceleration(): boolean;
        /**
         * Get the #WebKitSettings:enable-accelerated-2d-canvas property.
         * @returns %TRUE if accelerated 2D canvas is enabled or %FALSE otherwise.
         */
        get_enable_accelerated_2d_canvas(): boolean;
        /**
         * Get the #WebKitSettings:enable-back-forward-navigation-gestures property.
         * @returns %TRUE if horizontal swipe gesture will trigger back-forward navigaiton or %FALSE otherwise.
         */
        get_enable_back_forward_navigation_gestures(): boolean;
        /**
         * Get the #WebKitSettings:enable-caret-browsing property.
         * @returns %TRUE If caret browsing is enabled or %FALSE otherwise.
         */
        get_enable_caret_browsing(): boolean;
        /**
         * Get the #WebKitSettings:enable-developer-extras property.
         * @returns %TRUE If developer extras is enabled or %FALSE otherwise.
         */
        get_enable_developer_extras(): boolean;
        /**
         * Get the #WebKitSettings:enable-dns-prefetching property.
         * @returns %TRUE If DNS prefetching is enabled or %FALSE otherwise.
         */
        get_enable_dns_prefetching(): boolean;
        /**
         * Get the #WebKitSettings:enable-encrypted-media property.
         * @returns %TRUE if EncryptedMedia support is enabled or %FALSE otherwise.
         */
        get_enable_encrypted_media(): boolean;
        /**
         * Frame flattening is no longer supported. This function returns %FALSE.
         * @returns %FALSE
         */
        get_enable_frame_flattening(): boolean;
        /**
         * Get the #WebKitSettings:enable-fullscreen property.
         * @returns %TRUE If fullscreen support is enabled or %FALSE otherwise.
         */
        get_enable_fullscreen(): boolean;
        /**
         * Get the #WebKitSettings:enable-html5-database property.
         * @returns %TRUE if IndexedDB support is enabled or %FALSE otherwise.
         */
        get_enable_html5_database(): boolean;
        /**
         * Get the #WebKitSettings:enable-html5-local-storage property.
         * @returns %TRUE If HTML5 local storage support is enabled or %FALSE otherwise.
         */
        get_enable_html5_local_storage(): boolean;
        /**
         * Get the #WebKitSettings:enable-hyperlink-auditing property.
         * @returns %TRUE If hyper link auditing is enabled or %FALSE otherwise.
         */
        get_enable_hyperlink_auditing(): boolean;
        /**
         * Get the #WebKitSettings:enable-java property.
         * @returns %FALSE always.
         */
        get_enable_java(): boolean;
        /**
         * Get the #WebKitSettings:enable-javascript property.
         * @returns %TRUE If JavaScript is enabled or %FALSE otherwise.
         */
        get_enable_javascript(): boolean;
        /**
         * Get the #WebKitSettings:enable-javascript-markup property.
         * @returns %TRUE if JavaScript markup is enabled or %FALSE otherwise.
         */
        get_enable_javascript_markup(): boolean;
        /**
         * Get the #WebKitSettings:enable-media property.
         * @returns %TRUE if media support is enabled or %FALSE otherwise.
         */
        get_enable_media(): boolean;
        /**
         * Get the #WebKitSettings:enable-media-capabilities property.
         * @returns %TRUE if MediaCapabilities support is enabled or %FALSE otherwise.
         */
        get_enable_media_capabilities(): boolean;
        /**
         * Get the #WebKitSettings:enable-media-stream property.
         * @returns %TRUE If mediastream support is enabled or %FALSE otherwise.
         */
        get_enable_media_stream(): boolean;
        /**
         * Get the #WebKitSettings:enable-mediasource property.
         * @returns %TRUE If MediaSource support is enabled or %FALSE otherwise.
         */
        get_enable_mediasource(): boolean;
        /**
         * Get the #WebKitSettings:enable-mock-capture-devices property.
         * @returns %TRUE If mock capture devices is enabled or %FALSE otherwise.
         */
        get_enable_mock_capture_devices(): boolean;
        /**
         * Get the #WebKitSettings:enable-offline-web-application-cache property.
         * @returns %FALSE.
         */
        get_enable_offline_web_application_cache(): boolean;
        /**
         * Get the #WebKitSettings:enable-page-cache property.
         * @returns %TRUE if page cache enabled or %FALSE otherwise.
         */
        get_enable_page_cache(): boolean;
        /**
         * Get the #WebKitSettings:enable-plugins property.
         * @returns %TRUE If plugins are enabled or %FALSE otherwise.
         */
        get_enable_plugins(): boolean;
        /**
         * Get the #WebKitSettings:enable-private-browsing property.
         * @returns %TRUE If private browsing is enabled or %FALSE otherwise.
         */
        get_enable_private_browsing(): boolean;
        /**
         * Get the #WebKitSettings:enable-resizable-text-areas property.
         * @returns %TRUE If text areas can be resized or %FALSE otherwise.
         */
        get_enable_resizable_text_areas(): boolean;
        /**
         * Get the #WebKitSettings:enable-site-specific-quirks property.
         * @returns %TRUE if site specific quirks are enabled or %FALSE otherwise.
         */
        get_enable_site_specific_quirks(): boolean;
        /**
         * Get the #WebKitSettings:enable-smooth-scrolling property.
         * @returns %TRUE if smooth scrolling is enabled or %FALSE otherwise.
         */
        get_enable_smooth_scrolling(): boolean;
        /**
         * Get the #WebKitSettings:enable-spatial-navigation property.
         * @returns %TRUE If HTML5 spatial navigation support is enabled or %FALSE otherwise.
         */
        get_enable_spatial_navigation(): boolean;
        /**
         * Get the #WebKitSettings:enable-tabs-to-links property.
         * @returns %TRUE If tabs to link is enabled or %FALSE otherwise.
         */
        get_enable_tabs_to_links(): boolean;
        /**
         * Get the #WebKitSettings:enable-webaudio property.
         * @returns %TRUE If webaudio support is enabled or %FALSE otherwise.
         */
        get_enable_webaudio(): boolean;
        /**
         * Get the #WebKitSettings:enable-webgl property.
         * @returns %TRUE If WebGL support is enabled or %FALSE otherwise.
         */
        get_enable_webgl(): boolean;
        /**
         * Get the [property`Settings:`enable-webrtc] property.
         * @returns %TRUE If WebRTC support is enabled or %FALSE otherwise.
         */
        get_enable_webrtc(): boolean;
        /**
         * Get the #WebKitSettings:enable-write-console-messages-to-stdout property.
         * @returns %TRUE if writing console messages to stdout is enabled or %FALSE otherwise.
         */
        get_enable_write_console_messages_to_stdout(): boolean;
        /**
         * The XSS auditor has been removed. This function returns %FALSE.
         * @returns %FALSE
         */
        get_enable_xss_auditor(): boolean;
        /**
         * Gets the #WebKitSettings:fantasy-font-family property.
         * @returns The default font family used to display content marked with fantasy font.
         */
        get_fantasy_font_family(): string;
        /**
         * Gets whether a feature is enabled.
         * @param feature the feature to toggle.
         * @returns Whether the feature is enabled.
         */
        get_feature_enabled(feature: Feature): boolean;
        /**
         * Get the #WebKitSettings:hardware-acceleration-policy property.
         * @returns a #WebKitHardwareAccelerationPolicy
         */
        get_hardware_acceleration_policy(): HardwareAccelerationPolicy;
        /**
         * Get the #WebKitSettings:javascript-can-access-clipboard property.
         * @returns %TRUE If javascript-can-access-clipboard is enabled or %FALSE otherwise.
         */
        get_javascript_can_access_clipboard(): boolean;
        /**
         * Get the #WebKitSettings:javascript-can-open-windows-automatically property.
         * @returns %TRUE If JavaScript can open window automatically or %FALSE otherwise.
         */
        get_javascript_can_open_windows_automatically(): boolean;
        /**
         * Setting no longer supported. This function returns %FALSE.
         * @returns %FALSE
         */
        get_load_icons_ignoring_image_load_setting(): boolean;
        /**
         * Gets the #WebKitSettings:media-content-types-requiring-hardware-support property.
         * @returns Media content types requiring hardware support, or %NULL.
         */
        get_media_content_types_requiring_hardware_support(): string;
        /**
         * Get the #WebKitSettings:media-playback-allows-inline property.
         * @returns %TRUE If inline playback is allowed for media    or %FALSE if only fullscreen playback is allowed.
         */
        get_media_playback_allows_inline(): boolean;
        /**
         * Get the #WebKitSettings:media-playback-requires-user-gesture property.
         * @returns %TRUE If an user gesture is needed to play or load media    or %FALSE if no user gesture is needed.
         */
        get_media_playback_requires_user_gesture(): boolean;
        /**
         * Gets the #WebKitSettings:minimum-font-size property.
         * @returns Minimum font size, in pixels.
         */
        get_minimum_font_size(): number;
        /**
         * Gets the #WebKitSettings:monospace-font-family property.
         * @returns Default font family used to display content marked with monospace font.
         */
        get_monospace_font_family(): string;
        /**
         * Gets the #WebKitSettings:pictograph-font-family property.
         * @returns The default font family used to display content marked with pictograph font.
         */
        get_pictograph_font_family(): string;
        /**
         * Get the #WebKitSettings:print-backgrounds property.
         * @returns %TRUE If background images should be printed or %FALSE otherwise.
         */
        get_print_backgrounds(): boolean;
        /**
         * Gets the #WebKitSettings:sans-serif-font-family property.
         * @returns The default font family used to display content marked with sans-serif font.
         */
        get_sans_serif_font_family(): string;
        /**
         * Gets the #WebKitSettings:serif-font-family property.
         * @returns The default font family used to display content marked with serif font.
         */
        get_serif_font_family(): string;
        /**
         * Get the #WebKitSettings:user-agent property.
         * @returns The current value of the user-agent property.
         */
        get_user_agent(): string;
        /**
         * Get the [property`Settings:`webrtc-udp-ports-range] property.
         * @returns The WebRTC UDP ports range, or %NULL if un-set.
         */
        get_webrtc_udp_ports_range(): string;
        /**
         * Get the #WebKitSettings:zoom-text-only property.
         * @returns %TRUE If zoom level of the view should only affect the text    or %FALSE if all view contents should be scaled.
         */
        get_zoom_text_only(): boolean;
        /**
         * Set the #WebKitSettings:allow-file-access-from-file-urls property.
         * @param allowed Value to be set
         */
        set_allow_file_access_from_file_urls(allowed: boolean): void;
        /**
         * Set the #WebKitSettings:allow-modal-dialogs property.
         * @param allowed Value to be set
         */
        set_allow_modal_dialogs(allowed: boolean): void;
        /**
         * Set the #WebKitSettings:allow-top-navigation-to-data-urls property.
         * @param allowed Value to be set
         */
        set_allow_top_navigation_to_data_urls(allowed: boolean): void;
        /**
         * Set the #WebKitSettings:allow-universal-access-from-file-urls property.
         * @param allowed Value to be set
         */
        set_allow_universal_access_from_file_urls(allowed: boolean): void;
        /**
         * Set the #WebKitSettings:auto-load-images property.
         * @param enabled Value to be set
         */
        set_auto_load_images(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:cursive-font-family property.
         * @param cursive_font_family the new default cursive font family
         */
        set_cursive_font_family(cursive_font_family: string): void;
        /**
         * Set the #WebKitSettings:default-charset property.
         * @param default_charset default charset to be set
         */
        set_default_charset(default_charset: string): void;
        /**
         * Set the #WebKitSettings:default-font-family property.
         * @param default_font_family the new default font family
         */
        set_default_font_family(default_font_family: string): void;
        /**
         * Set the #WebKitSettings:default-font-size property.
         * @param font_size default font size to be set in pixels
         */
        set_default_font_size(font_size: number): void;
        /**
         * Set the #WebKitSettings:default-monospace-font-size property.
         * @param font_size default monospace font size to be set in pixels
         */
        set_default_monospace_font_size(font_size: number): void;
        /**
         * Set the #WebKitSettings:disable-web-security property.
         * @param disabled Value to be set
         */
        set_disable_web_security(disabled: boolean): void;
        /**
         * Set the #WebKitSettings:draw-compositing-indicators property.
         * @param enabled Value to be set
         */
        set_draw_compositing_indicators(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:enable-2d-canvas-acceleration property.
         * @param enabled Value to be set
         */
        set_enable_2d_canvas_acceleration(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:enable-accelerated-2d-canvas property.
         * @param enabled Value to be set
         */
        set_enable_accelerated_2d_canvas(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:enable-back-forward-navigation-gestures property.
         * @param enabled value to be set
         */
        set_enable_back_forward_navigation_gestures(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:enable-caret-browsing property.
         * @param enabled Value to be set
         */
        set_enable_caret_browsing(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:enable-developer-extras property.
         * @param enabled Value to be set
         */
        set_enable_developer_extras(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:enable-dns-prefetching property.
         * @param enabled Value to be set
         */
        set_enable_dns_prefetching(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:enable-encrypted-media property.
         * @param enabled Value to be set
         */
        set_enable_encrypted_media(enabled: boolean): void;
        /**
         * Frame flattening is no longer supported. This function does nothing.
         * @param enabled Value to be set
         */
        set_enable_frame_flattening(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:enable-fullscreen property.
         * @param enabled Value to be set
         */
        set_enable_fullscreen(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:enable-html5-database property.
         * @param enabled Value to be set
         */
        set_enable_html5_database(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:enable-html5-local-storage property.
         * @param enabled Value to be set
         */
        set_enable_html5_local_storage(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:enable-hyperlink-auditing property.
         * @param enabled Value to be set
         */
        set_enable_hyperlink_auditing(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:enable-java property.
         *
         * Deprecated function that does nothing.
         * @param enabled Value to be set
         */
        set_enable_java(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:enable-javascript property.
         * @param enabled Value to be set
         */
        set_enable_javascript(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:enable-javascript-markup property.
         * @param enabled Value to be set
         */
        set_enable_javascript_markup(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:enable-media property.
         * @param enabled Value to be set
         */
        set_enable_media(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:enable-media-capabilities property.
         * @param enabled Value to be set
         */
        set_enable_media_capabilities(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:enable-media-stream property.
         * @param enabled Value to be set
         */
        set_enable_media_stream(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:enable-mediasource property.
         * @param enabled Value to be set
         */
        set_enable_mediasource(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:enable-mock-capture-devices property.
         * @param enabled Value to be set
         */
        set_enable_mock_capture_devices(enabled: boolean): void;
        /**
         * Setting no longer supported. This function does nothing.
         * @param enabled Value to be set
         */
        set_enable_offline_web_application_cache(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:enable-page-cache property.
         * @param enabled Value to be set
         */
        set_enable_page_cache(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:enable-plugins property.
         * @param enabled Value to be set
         */
        set_enable_plugins(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:enable-private-browsing property.
         * @param enabled Value to be set
         */
        set_enable_private_browsing(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:enable-resizable-text-areas property.
         * @param enabled Value to be set
         */
        set_enable_resizable_text_areas(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:enable-site-specific-quirks property.
         * @param enabled Value to be set
         */
        set_enable_site_specific_quirks(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:enable-smooth-scrolling property.
         * @param enabled Value to be set
         */
        set_enable_smooth_scrolling(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:enable-spatial-navigation property.
         * @param enabled Value to be set
         */
        set_enable_spatial_navigation(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:enable-tabs-to-links property.
         * @param enabled Value to be set
         */
        set_enable_tabs_to_links(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:enable-webaudio property.
         * @param enabled Value to be set
         */
        set_enable_webaudio(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:enable-webgl property.
         * @param enabled Value to be set
         */
        set_enable_webgl(enabled: boolean): void;
        /**
         * Set the [property`Settings:`enable-webrtc] property.
         *
         * Setting this property to %TRUE implies the media-stream web-setting will also be enabled.
         * @param enabled Value to be set
         */
        set_enable_webrtc(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:enable-write-console-messages-to-stdout property.
         * @param enabled Value to be set
         */
        set_enable_write_console_messages_to_stdout(enabled: boolean): void;
        /**
         * The XSS auditor has been removed. This function does nothing.
         * @param enabled Value to be set
         */
        set_enable_xss_auditor(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:fantasy-font-family property.
         * @param fantasy_font_family the new default fantasy font family
         */
        set_fantasy_font_family(fantasy_font_family: string): void;
        /**
         * Enables or disables a feature.
         *
         * The current status of the feature can be determined with
         * [id`webkit_settings_get_feature_enabled]`. To reset a feature to its
         * initial status, pass the value returned by
         * [id`webkit_feature_get_default_value]` as the `enabled` parameter.
         * @param feature the feature to toggle.
         * @param enabled whether the feature will be enabled.
         */
        set_feature_enabled(feature: Feature, enabled: boolean): void;
        /**
         * Set the #WebKitSettings:hardware-acceleration-policy property.
         * @param policy a #WebKitHardwareAccelerationPolicy
         */
        set_hardware_acceleration_policy(policy: HardwareAccelerationPolicy | null): void;
        /**
         * Set the #WebKitSettings:javascript-can-access-clipboard property.
         * @param enabled Value to be set
         */
        set_javascript_can_access_clipboard(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:javascript-can-open-windows-automatically property.
         * @param enabled Value to be set
         */
        set_javascript_can_open_windows_automatically(enabled: boolean): void;
        /**
         * Setting no longer supported. This function does nothing.
         * @param enabled Value to be set
         */
        set_load_icons_ignoring_image_load_setting(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:media-content-types-requiring-hardware-support property.
         * @param content_types list of media content types requiring hardware support split by semicolons (:) or %NULL to use the default value.
         */
        set_media_content_types_requiring_hardware_support(content_types?: string | null): void;
        /**
         * Set the #WebKitSettings:media-playback-allows-inline property.
         * @param enabled Value to be set
         */
        set_media_playback_allows_inline(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:media-playback-requires-user-gesture property.
         * @param enabled Value to be set
         */
        set_media_playback_requires_user_gesture(enabled: boolean): void;
        /**
         * Set the #WebKitSettings:minimum-font-size property.
         * @param font_size minimum font size to be set in pixels
         */
        set_minimum_font_size(font_size: number): void;
        /**
         * Set the #WebKitSettings:monospace-font-family property.
         * @param monospace_font_family the new default monospace font family
         */
        set_monospace_font_family(monospace_font_family: string): void;
        /**
         * Set the #WebKitSettings:pictograph-font-family property.
         * @param pictograph_font_family the new default pictograph font family
         */
        set_pictograph_font_family(pictograph_font_family: string): void;
        /**
         * Set the #WebKitSettings:print-backgrounds property.
         * @param print_backgrounds Value to be set
         */
        set_print_backgrounds(print_backgrounds: boolean): void;
        /**
         * Set the #WebKitSettings:sans-serif-font-family property.
         * @param sans_serif_font_family the new default sans-serif font family
         */
        set_sans_serif_font_family(sans_serif_font_family: string): void;
        /**
         * Set the #WebKitSettings:serif-font-family property.
         * @param serif_font_family the new default serif font family
         */
        set_serif_font_family(serif_font_family: string): void;
        /**
         * Set the #WebKitSettings:user-agent property.
         * @param user_agent The new custom user agent string or %NULL to use the default user agent
         */
        set_user_agent(user_agent?: string | null): void;
        /**
         * Set the #WebKitSettings:user-agent property by appending the application details.
         *
         * Set the #WebKitSettings:user-agent property by appending the application details to the default user
         * agent. If no application name or version is given, the default user agent used will be used. If only
         * the version is given, the default engine version is used with the given application name.
         * @param application_name The application name used for the user agent or %NULL to use the default user agent.
         * @param application_version The application version for the user agent or %NULL to user the default version.
         */
        set_user_agent_with_application_details(
            application_name?: string | null,
            application_version?: string | null,
        ): void;
        /**
         * Set the [property`Settings:`webrtc-udp-ports-range] property.
         * @param udp_port_range Value to be set
         */
        set_webrtc_udp_ports_range(udp_port_range: string): void;
        /**
         * Set the #WebKitSettings:zoom-text-only property.
         * @param zoom_text_only Value to be set
         */
        set_zoom_text_only(zoom_text_only: boolean): void;
    }

    namespace URIRequest {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::uri': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            uri: string;
        }
    }

    /**
     * Represents a URI request.
     *
     * A #WebKitURIRequest can be created with a URI using the
     * webkit_uri_request_new() method, and you can get the URI of an
     * existing request with the webkit_uri_request_get_uri() one.
     */
    class URIRequest extends GObject.Object {
        static $gtype: GObject.GType<URIRequest>;

        // Properties

        /**
         * The URI to which the request will be made.
         */
        get uri(): string;
        set uri(val: string);

        // Constructors

        constructor(properties?: Partial<URIRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](uri: string): URIRequest;

        // Signals

        connect<K extends keyof URIRequest.SignalSignatures>(
            signal: K,
            callback: URIRequest.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof URIRequest.SignalSignatures>(
            signal: K,
            callback: URIRequest.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof URIRequest.SignalSignatures>(
            signal: K,
            ...args: URIRequest.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the HTTP headers of a #WebKitURIRequest as a #SoupMessageHeaders.
         * @returns a #SoupMessageHeaders with the HTTP headers of @request    or %NULL if @request is not an HTTP request.
         */
        get_http_headers(): Soup.MessageHeaders;
        /**
         * Get the HTTP method of the #WebKitURIRequest.
         * @returns the HTTP method of the #WebKitURIRequest or %NULL if @request is not    an HTTP request.
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
            'notify::content-length': GObject.Object.Notify;
            'notify::http-headers': GObject.Object.Notify;
            'notify::mime-type': GObject.Object.Notify;
            'notify::status-code': GObject.Object.Notify;
            'notify::suggested-filename': GObject.Object.Notify;
            'notify::uri': GObject.Object.Notify;
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
     * A #WebKitURIResponse contains information such as the URI, the
     * status code, the content length, the mime type, the HTTP status or
     * the suggested filename.
     */
    class URIResponse extends GObject.Object {
        static $gtype: GObject.GType<URIResponse>;

        // Properties

        /**
         * The expected content length of the response.
         */
        get content_length(): number;
        /**
         * The expected content length of the response.
         */
        get contentLength(): number;
        /**
         * The HTTP headers of the response, or %NULL if the response is not an HTTP response.
         */
        get http_headers(): Soup.MessageHeaders;
        /**
         * The HTTP headers of the response, or %NULL if the response is not an HTTP response.
         */
        get httpHeaders(): Soup.MessageHeaders;
        /**
         * The MIME type of the response.
         */
        get mime_type(): string;
        /**
         * The MIME type of the response.
         */
        get mimeType(): string;
        /**
         * The status code of the response as returned by the server.
         */
        get status_code(): number;
        /**
         * The status code of the response as returned by the server.
         */
        get statusCode(): number;
        /**
         * The suggested filename for the URI response.
         */
        get suggested_filename(): string;
        /**
         * The suggested filename for the URI response.
         */
        get suggestedFilename(): string;
        /**
         * The URI for which the response was made.
         */
        get uri(): string;

        // Constructors

        constructor(properties?: Partial<URIResponse.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof URIResponse.SignalSignatures>(
            signal: K,
            callback: URIResponse.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof URIResponse.SignalSignatures>(
            signal: K,
            callback: URIResponse.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof URIResponse.SignalSignatures>(
            signal: K,
            ...args: URIResponse.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the expected content length of the #WebKitURIResponse.
         *
         * It can be 0 if the server provided an incorrect or missing Content-Length.
         * @returns the expected content length of @response.
         */
        get_content_length(): number;
        /**
         * Get the HTTP headers of a #WebKitURIResponse as a #SoupMessageHeaders.
         * @returns a #SoupMessageHeaders with the HTTP headers of @response    or %NULL if @response is not an HTTP response.
         */
        get_http_headers(): Soup.MessageHeaders;
        /**
         * Gets the MIME type of the response.
         * @returns MIME type, as a string.
         */
        get_mime_type(): string;
        /**
         * Get the status code of the #WebKitURIResponse.
         *
         * Get the status code of the #WebKitURIResponse as returned by
         * the server. It will normally be a #SoupKnownStatusCode, for
         * example %SOUP_STATUS_OK, though the server can respond with any
         * unsigned integer.
         * @returns the status code of @response
         */
        get_status_code(): number;
        /**
         * Get the suggested filename for `response`.
         *
         * Get the suggested filename for `response,` as specified by
         * the 'Content-Disposition' HTTP header, or %NULL if it's not
         * present.
         * @returns the suggested filename or %NULL if    the 'Content-Disposition' HTTP header is not present.
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
     * If you register a particular URI scheme in a #WebKitWebContext,
     * using webkit_web_context_register_uri_scheme(), you have to provide
     * a #WebKitURISchemeRequestCallback. After that, when a URI request
     * is made with that particular scheme, your callback will be
     * called. There you will be able to access properties such as the
     * scheme, the URI and path, and the #WebKitWebView that initiated the
     * request, and also finish the request with
     * webkit_uri_scheme_request_finish().
     */
    class URISchemeRequest extends GObject.Object {
        static $gtype: GObject.GType<URISchemeRequest>;

        // Constructors

        constructor(properties?: Partial<URISchemeRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof URISchemeRequest.SignalSignatures>(
            signal: K,
            callback: URISchemeRequest.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof URISchemeRequest.SignalSignatures>(
            signal: K,
            callback: URISchemeRequest.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof URISchemeRequest.SignalSignatures>(
            signal: K,
            ...args: URISchemeRequest.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Finish a #WebKitURISchemeRequest by setting the contents of the request and its mime type.
         * @param stream a #GInputStream to read the contents of the request
         * @param stream_length the length of the stream or -1 if not known
         * @param content_type the content type of the stream or %NULL if not known
         */
        finish(stream: Gio.InputStream, stream_length: number, content_type?: string | null): void;
        /**
         * Finish a #WebKitURISchemeRequest with a #GError.
         * @param error a #GError that will be passed to the #WebKitWebView
         */
        finish_error(error: GLib.Error): void;
        /**
         * Finish a #WebKitURISchemeRequest by returning a #WebKitURISchemeResponse
         * @param response a #WebKitURISchemeResponse
         */
        finish_with_response(response: URISchemeResponse): void;
        /**
         * Get the request body.
         * @returns (nullable): the body of the @request.
         */
        get_http_body(): Gio.InputStream;
        /**
         * Get the #SoupMessageHeaders of the request.
         * @returns the #SoupMessageHeaders of the @request.
         */
        get_http_headers(): Soup.MessageHeaders;
        /**
         * Get the HTTP method of the `request`.
         * @returns the HTTP method of the @request
         */
        get_http_method(): string;
        /**
         * Get the URI path of `request`.
         * @returns the URI path of @request
         */
        get_path(): string;
        /**
         * Get the URI scheme of `request`.
         * @returns the URI scheme of @request
         */
        get_scheme(): string;
        /**
         * Get the URI of `request`.
         * @returns the full URI of @request
         */
        get_uri(): string;
        /**
         * Get the #WebKitWebView that initiated the request.
         * @returns the #WebKitWebView that initiated @request.
         */
        get_web_view(): WebView;
    }

    namespace URISchemeResponse {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::stream': GObject.Object.Notify;
            'notify::stream-length': GObject.Object.Notify;
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
     * If you register a particular URI scheme in a #WebKitWebContext,
     * using webkit_web_context_register_uri_scheme(), you have to provide
     * a #WebKitURISchemeRequestCallback. After that, when a URI response
     * is made with that particular scheme, your callback will be
     * called. There you will be able to provide more response parameters
     * when the methods and properties of a #WebKitURISchemeRequest is not
     * enough.
     *
     * When you finished setting up your #WebKitURISchemeResponse, call
     * webkit_uri_request_finish_with_response() with it to return the response.
     */
    class URISchemeResponse extends GObject.Object {
        static $gtype: GObject.GType<URISchemeResponse>;

        // Properties

        /**
         * The input stream to read from.
         */
        set stream(val: Gio.InputStream);
        /**
         * The input stream length in bytes, `-1` for unknown length.
         */
        set stream_length(val: number);
        /**
         * The input stream length in bytes, `-1` for unknown length.
         */
        set streamLength(val: number);

        // Constructors

        constructor(properties?: Partial<URISchemeResponse.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](input_stream: Gio.InputStream, stream_length: number): URISchemeResponse;

        // Signals

        connect<K extends keyof URISchemeResponse.SignalSignatures>(
            signal: K,
            callback: URISchemeResponse.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof URISchemeResponse.SignalSignatures>(
            signal: K,
            callback: URISchemeResponse.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof URISchemeResponse.SignalSignatures>(
            signal: K,
            ...args: URISchemeResponse.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Sets the content type for the `response`
         * @param content_type the content type of the stream
         */
        set_content_type(content_type: string): void;
        /**
         * Assign the provided #SoupMessageHeaders to the response.
         *
         * `headers` need to be of the type %SOUP_MESSAGE_HEADERS_RESPONSE.
         * Any existing headers will be overwritten.
         * @param headers the HTTP headers to be set
         */
        set_http_headers(headers: Soup.MessageHeaders): void;
        /**
         * Sets the status code and reason phrase for the `response`.
         *
         * If `status_code` is a known value and `reason_phrase` is %NULL, the `reason_phrase` will be set automatically.
         * @param status_code the HTTP status code to be returned
         * @param reason_phrase a reason phrase
         */
        set_status(status_code: number, reason_phrase?: string | null): void;
    }

    namespace UserContentFilterStore {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::path': GObject.Object.Notify;
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
     * the #WebKitUserContentFilter objects which represent them can be added to
     * a #WebKitUserContentManager with webkit_user_content_manager_add_filter().
     *
     * JSON rule sets are imported using webkit_user_content_filter_store_save() and stored
     * on disk in an implementation defined format. The contents of a filter store must be
     * managed using the #WebKitUserContentFilterStore: a list of all the stored filters
     * can be obtained with webkit_user_content_filter_store_fetch_identifiers(),
     * webkit_user_content_filter_store_load() can be used to retrieve a previously saved
     * filter, and removed from the store with webkit_user_content_filter_store_remove().
     */
    class UserContentFilterStore extends GObject.Object {
        static $gtype: GObject.GType<UserContentFilterStore>;

        // Properties

        /**
         * The directory used for filter storage. This path is used as the base
         * directory where user content filters are stored on disk.
         */
        get path(): string;

        // Constructors

        constructor(properties?: Partial<UserContentFilterStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](storage_path: string): UserContentFilterStore;

        // Signals

        connect<K extends keyof UserContentFilterStore.SignalSignatures>(
            signal: K,
            callback: UserContentFilterStore.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof UserContentFilterStore.SignalSignatures>(
            signal: K,
            callback: UserContentFilterStore.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof UserContentFilterStore.SignalSignatures>(
            signal: K,
            ...args: UserContentFilterStore.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Asynchronously retrieve a list of the identifiers for all the stored filters.
         *
         * When the operation is finished, `callback` will be invoked, which then can use
         * webkit_user_content_filter_store_fetch_identifiers_finish() to obtain the list of
         * filter identifiers.
         * @param cancellable a #GCancellable or %NULL to ignore
         */
        fetch_identifiers(cancellable?: Gio.Cancellable | null): Promise<string[]>;
        /**
         * Asynchronously retrieve a list of the identifiers for all the stored filters.
         *
         * When the operation is finished, `callback` will be invoked, which then can use
         * webkit_user_content_filter_store_fetch_identifiers_finish() to obtain the list of
         * filter identifiers.
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the removal is completed
         */
        fetch_identifiers(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously retrieve a list of the identifiers for all the stored filters.
         *
         * When the operation is finished, `callback` will be invoked, which then can use
         * webkit_user_content_filter_store_fetch_identifiers_finish() to obtain the list of
         * filter identifiers.
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the removal is completed
         */
        fetch_identifiers(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<string[]> | void;
        /**
         * Finishes an asynchronous fetch of the list of stored filters.
         *
         * Finishes an asynchronous fetch of the list of identifiers for the stored filters previously
         * started with webkit_user_content_filter_store_fetch_identifiers().
         * @param result a #GAsyncResult
         * @returns a %NULL-terminated list of filter identifiers.
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
         * previously stored using webkit_user_content_filter_store_save().
         *
         * When the operation is finished, `callback` will be invoked, which then can use
         * webkit_user_content_filter_store_load_finish() to obtain the resulting filter.
         * @param identifier a filter identifier
         * @param cancellable a #GCancellable or %NULL to ignore
         */
        load(identifier: string, cancellable?: Gio.Cancellable | null): Promise<UserContentFilter>;
        /**
         * Asynchronously load a content filter given its `identifier`.
         *
         * The filter must have been
         * previously stored using webkit_user_content_filter_store_save().
         *
         * When the operation is finished, `callback` will be invoked, which then can use
         * webkit_user_content_filter_store_load_finish() to obtain the resulting filter.
         * @param identifier a filter identifier
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the load is completed
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
         * previously stored using webkit_user_content_filter_store_save().
         *
         * When the operation is finished, `callback` will be invoked, which then can use
         * webkit_user_content_filter_store_load_finish() to obtain the resulting filter.
         * @param identifier a filter identifier
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the load is completed
         */
        load(
            identifier: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<UserContentFilter> | void;
        /**
         * Finishes an asynchronous filter load previously started with
         * webkit_user_content_filter_store_load().
         * @param result a #GAsyncResult
         * @returns a #WebKitUserContentFilter, or %NULL if the load failed
         */
        load_finish(result: Gio.AsyncResult): UserContentFilter;
        /**
         * Asynchronously remove a content filter given its `identifier`.
         *
         * When the operation is finished, `callback` will be invoked, which then can use
         * webkit_user_content_filter_store_remove_finish() to check whether the removal was
         * successful.
         * @param identifier a filter identifier
         * @param cancellable a #GCancellable or %NULL to ignore
         */
        remove(identifier: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
        /**
         * Asynchronously remove a content filter given its `identifier`.
         *
         * When the operation is finished, `callback` will be invoked, which then can use
         * webkit_user_content_filter_store_remove_finish() to check whether the removal was
         * successful.
         * @param identifier a filter identifier
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the removal is completed
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
         * webkit_user_content_filter_store_remove_finish() to check whether the removal was
         * successful.
         * @param identifier a filter identifier
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the removal is completed
         */
        remove(
            identifier: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        /**
         * Finishes an asynchronous filter removal previously started with
         * webkit_user_content_filter_store_remove().
         * @param result a #GAsyncResult
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
         * webkit_user_content_filter_store_remove() and webkit_user_content_filter_store_load().
         * When the `identifier` has been used in the past, the new filter source will replace
         * the one saved beforehand for the same identifier.
         *
         * When the operation is finished, `callback` will be invoked, which then can use
         * webkit_user_content_filter_store_save_finish() to obtain the resulting filter.
         * @param identifier a string used to identify the saved filter
         * @param source #GBytes containing the rule set in JSON format
         * @param cancellable a #GCancellable or %NULL to ignore
         */
        save(
            identifier: string,
            source: GLib.Bytes | Uint8Array,
            cancellable?: Gio.Cancellable | null,
        ): Promise<UserContentFilter>;
        /**
         * Asynchronously save a content filter from a set source rule.
         *
         * Asynchronously save a content filter from a source rule set in the
         * [WebKit content extesions JSON format](https://webkit.org/blog/3476/content-blockers-first-look/).
         *
         * The `identifier` can be used afterwards to refer to the filter when using
         * webkit_user_content_filter_store_remove() and webkit_user_content_filter_store_load().
         * When the `identifier` has been used in the past, the new filter source will replace
         * the one saved beforehand for the same identifier.
         *
         * When the operation is finished, `callback` will be invoked, which then can use
         * webkit_user_content_filter_store_save_finish() to obtain the resulting filter.
         * @param identifier a string used to identify the saved filter
         * @param source #GBytes containing the rule set in JSON format
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when saving is completed
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
         * webkit_user_content_filter_store_remove() and webkit_user_content_filter_store_load().
         * When the `identifier` has been used in the past, the new filter source will replace
         * the one saved beforehand for the same identifier.
         *
         * When the operation is finished, `callback` will be invoked, which then can use
         * webkit_user_content_filter_store_save_finish() to obtain the resulting filter.
         * @param identifier a string used to identify the saved filter
         * @param source #GBytes containing the rule set in JSON format
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when saving is completed
         */
        save(
            identifier: string,
            source: GLib.Bytes | Uint8Array,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<UserContentFilter> | void;
        /**
         * Finishes an asynchronous filter save previously started with
         * webkit_user_content_filter_store_save().
         * @param result a #GAsyncResult
         * @returns a #WebKitUserContentFilter, or %NULL if saving failed
         */
        save_finish(result: Gio.AsyncResult): UserContentFilter;
        /**
         * Asynchronously save a content filter from the contents of a file.
         *
         * Asynchronously save a content filter from the contents of a file, which must be
         * native to the platform, as checked by g_file_is_native(). See
         * webkit_user_content_filter_store_save() for more details.
         *
         * When the operation is finished, `callback` will be invoked, which then can use
         * webkit_user_content_filter_store_save_finish() to obtain the resulting filter.
         * @param identifier a string used to identify the saved filter
         * @param file a #GFile containing the rule set in JSON format
         * @param cancellable a #GCancellable or %NULL to ignore
         */
        save_from_file(
            identifier: string,
            file: Gio.File,
            cancellable?: Gio.Cancellable | null,
        ): Promise<UserContentFilter>;
        /**
         * Asynchronously save a content filter from the contents of a file.
         *
         * Asynchronously save a content filter from the contents of a file, which must be
         * native to the platform, as checked by g_file_is_native(). See
         * webkit_user_content_filter_store_save() for more details.
         *
         * When the operation is finished, `callback` will be invoked, which then can use
         * webkit_user_content_filter_store_save_finish() to obtain the resulting filter.
         * @param identifier a string used to identify the saved filter
         * @param file a #GFile containing the rule set in JSON format
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when saving is completed
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
         * native to the platform, as checked by g_file_is_native(). See
         * webkit_user_content_filter_store_save() for more details.
         *
         * When the operation is finished, `callback` will be invoked, which then can use
         * webkit_user_content_filter_store_save_finish() to obtain the resulting filter.
         * @param identifier a string used to identify the saved filter
         * @param file a #GFile containing the rule set in JSON format
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when saving is completed
         */
        save_from_file(
            identifier: string,
            file: Gio.File,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<UserContentFilter> | void;
        /**
         * Finishes and asynchronous filter save previously started with
         * webkit_user_content_filter_store_save_from_file().
         * @param result a #GAsyncResult
         * @returns a #WebKitUserContentFilter, or %NULL if saving failed.
         */
        save_from_file_finish(result: Gio.AsyncResult): UserContentFilter;
    }

    namespace UserContentManager {
        // Signal callback interfaces

        interface ScriptMessageReceived {
            (_source: UserContentManager, value: JavascriptResult): void;
        }

        interface ScriptMessageWithReplyReceived {
            (_source: UserContentManager, value: JavaScriptCore.Value, reply: ScriptMessageReply): boolean | void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'script-message-received': ScriptMessageReceived;
            'script-message-with-reply-received': ScriptMessageWithReplyReceived;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Manages user-defined content which affects web pages.
     *
     * Using a #WebKitUserContentManager user CSS style sheets can be set to
     * be injected in the web pages loaded by a #WebKitWebView, by
     * webkit_user_content_manager_add_style_sheet().
     *
     * To use a #WebKitUserContentManager, it must be created using
     * webkit_user_content_manager_new(), and then used to construct
     * a #WebKitWebView. User style sheets can be created with
     * webkit_user_style_sheet_new().
     *
     * User style sheets can be added and removed at any time, but
     * they will affect the web pages loaded afterwards.
     */
    class UserContentManager extends GObject.Object {
        static $gtype: GObject.GType<UserContentManager>;

        // Constructors

        constructor(properties?: Partial<UserContentManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): UserContentManager;

        // Signals

        connect<K extends keyof UserContentManager.SignalSignatures>(
            signal: K,
            callback: UserContentManager.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof UserContentManager.SignalSignatures>(
            signal: K,
            callback: UserContentManager.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof UserContentManager.SignalSignatures>(
            signal: K,
            ...args: UserContentManager.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds a #WebKitUserContentFilter to the given #WebKitUserContentManager.
         *
         * The same #WebKitUserContentFilter can be reused with multiple
         * #WebKitUserContentManager instances.
         *
         * Filters need to be saved and loaded from #WebKitUserContentFilterStore.
         * @param filter A #WebKitUserContentFilter
         */
        add_filter(filter: UserContentFilter): void;
        /**
         * Adds a #WebKitUserScript to the given #WebKitUserContentManager.
         *
         * The same #WebKitUserScript can be reused with multiple
         * #WebKitUserContentManager instances.
         * @param script A #WebKitUserScript
         */
        add_script(script: UserScript): void;
        /**
         * Adds a #WebKitUserStyleSheet to the given #WebKitUserContentManager.
         *
         * The same #WebKitUserStyleSheet can be reused with multiple
         * #WebKitUserContentManager instances.
         * @param stylesheet A #WebKitUserStyleSheet
         */
        add_style_sheet(stylesheet: UserStyleSheet): void;
        /**
         * Registers a new user script message handler.
         *
         * After it is registered,
         * scripts can use `window.webkit.messageHandlers.<name>.postMessage(value)`
         * to send messages. Those messages are received by connecting handlers
         * to the #WebKitUserContentManager::script-message-received signal. The
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
         * @returns %TRUE if message handler was registered successfully, or %FALSE otherwise.
         */
        register_script_message_handler(name: string): boolean;
        /**
         * Registers a new user script message handler in script world.
         *
         * Registers a new user script message handler in script world with name `world_name`.
         * See webkit_user_content_manager_register_script_message_handler() for full description.
         *
         * Registering a script message handler will fail if the requested
         * name has been already registered before.
         * @param name Name of the script message channel
         * @param world_name the name of a #WebKitScriptWorld
         * @returns %TRUE if message handler was registered successfully, or %FALSE otherwise.
         */
        register_script_message_handler_in_world(name: string, world_name: string): boolean;
        /**
         * Registers a new user script message handler in script world with name `world_name`.
         *
         * Different from webkit_user_content_manager_register_script_message_handler(),
         * when using this function to register the handler, the connected signal is
         * script-message-with-reply-received, and a reply provided by the user is expected.
         * Otherwise, the user will receive a default undefined value.
         *
         * If %NULL is passed as the `world_name,` the default world will be used.
         * See webkit_user_content_manager_register_script_message_handler() for full description.
         *
         * Registering a script message handler will fail if the requested
         * name has been already registered before.
         *
         * The registered handler can be unregistered by using
         * webkit_user_content_manager_unregister_script_message_handler().
         * @param name Name of the script message channel
         * @param world_name the name of a #WebKitScriptWorld
         * @returns %TRUE if message handler was registered successfully, or %FALSE otherwise.
         */
        register_script_message_handler_with_reply(name: string, world_name?: string | null): boolean;
        /**
         * Removes all content filters from the given #WebKitUserContentManager.
         */
        remove_all_filters(): void;
        /**
         * Removes all user scripts from the given #WebKitUserContentManager
         *
         * See also webkit_user_content_manager_remove_script().
         */
        remove_all_scripts(): void;
        /**
         * Removes all user style sheets from the given #WebKitUserContentManager.
         */
        remove_all_style_sheets(): void;
        /**
         * Removes a filter from the given #WebKitUserContentManager.
         *
         * Since 2.24
         * @param filter A #WebKitUserContentFilter
         */
        remove_filter(filter: UserContentFilter): void;
        /**
         * Removes a filter by the given identifier.
         *
         * Removes a filter from the given #WebKitUserContentManager given the
         * identifier of a #WebKitUserContentFilter as returned by
         * webkit_user_content_filter_get_identifier().
         * @param filter_id Filter identifier
         */
        remove_filter_by_id(filter_id: string): void;
        /**
         * Removes a #WebKitUserScript from the given #WebKitUserContentManager.
         *
         * See also webkit_user_content_manager_remove_all_scripts().
         * @param script A #WebKitUserScript
         */
        remove_script(script: UserScript): void;
        /**
         * Removes a #WebKitUserStyleSheet from the given #WebKitUserContentManager.
         *
         * See also webkit_user_content_manager_remove_all_style_sheets().
         * @param stylesheet A #WebKitUserStyleSheet
         */
        remove_style_sheet(stylesheet: UserStyleSheet): void;
        /**
         * Unregisters a previously registered message handler.
         *
         * Note that this does *not* disconnect handlers for the
         * #WebKitUserContentManager::script-message-received signal;
         * they will be kept connected, but the signal will not be emitted
         * unless the handler name is registered again.
         *
         * See also webkit_user_content_manager_register_script_message_handler().
         * @param name Name of the script message channel
         */
        unregister_script_message_handler(name: string): void;
        /**
         * Unregisters a previously registered message handler in script world with name `world_name`.
         *
         * Note that this does *not* disconnect handlers for the
         * #WebKitUserContentManager::script-message-received signal;
         * they will be kept connected, but the signal will not be emitted
         * unless the handler name is registered again.
         *
         * See also webkit_user_content_manager_register_script_message_handler_in_world().
         * @param name Name of the script message channel
         * @param world_name the name of a #WebKitScriptWorld
         */
        unregister_script_message_handler_in_world(name: string, world_name: string): void;
    }

    namespace UserMediaPermissionRequest {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::is-for-audio-device': GObject.Object.Notify;
            'notify::is-for-video-device': GObject.Object.Notify;
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
     */
    class UserMediaPermissionRequest extends GObject.Object implements PermissionRequest {
        static $gtype: GObject.GType<UserMediaPermissionRequest>;

        // Properties

        /**
         * Whether the media device to which the permission was requested has a microphone or not.
         */
        get is_for_audio_device(): boolean;
        /**
         * Whether the media device to which the permission was requested has a microphone or not.
         */
        get isForAudioDevice(): boolean;
        /**
         * Whether the media device to which the permission was requested has a video capture capability or not.
         */
        get is_for_video_device(): boolean;
        /**
         * Whether the media device to which the permission was requested has a video capture capability or not.
         */
        get isForVideoDevice(): boolean;

        // Constructors

        constructor(properties?: Partial<UserMediaPermissionRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof UserMediaPermissionRequest.SignalSignatures>(
            signal: K,
            callback: UserMediaPermissionRequest.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof UserMediaPermissionRequest.SignalSignatures>(
            signal: K,
            callback: UserMediaPermissionRequest.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof UserMediaPermissionRequest.SignalSignatures>(
            signal: K,
            ...args: UserMediaPermissionRequest.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited methods
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
         */
        vfunc_allow(): void;
        /**
         * Deny the action which triggered this request.
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
            'notify::fd-list': GObject.Object.Notify;
            'notify::name': GObject.Object.Notify;
            'notify::parameters': GObject.Object.Notify;
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
     * Message that can be sent between the UI process and web process extensions.
     *
     * A WebKitUserMessage is a message that can be used for the communication between the UI process
     * and web process extensions. A WebKitUserMessage always has a name, and it can also include parameters and
     * UNIX file descriptors. Messages can be sent from a #WebKitWebContext to all web process extensions,
     * from a web process extension to its corresponding #WebKitWebContext, and from a #WebKitWebView to its
     * corresponding #WebKitWebPage (and vice versa). One to one messages can be replied to directly with
     * webkit_user_message_send_reply().
     */
    class UserMessage extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<UserMessage>;

        // Properties

        /**
         * The UNIX file descriptors of the user message.
         */
        get fd_list(): Gio.UnixFDList;
        /**
         * The UNIX file descriptors of the user message.
         */
        get fdList(): Gio.UnixFDList;
        /**
         * The name of the user message.
         */
        get name(): string;
        /**
         * The parameters of the user message as a #GVariant, or %NULL
         * if the message doesn't include parameters. Note that only complete types are
         * allowed.
         */
        get parameters(): GLib.Variant;

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

        connect<K extends keyof UserMessage.SignalSignatures>(
            signal: K,
            callback: UserMessage.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof UserMessage.SignalSignatures>(
            signal: K,
            callback: UserMessage.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof UserMessage.SignalSignatures>(
            signal: K,
            ...args: UserMessage.SignalSignatures[K] extends (...args: infer P) => any ? P : never
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
         * You can only send a reply to a #WebKitUserMessage that has been
         * received.
         * @param reply a #WebKitUserMessage to send as reply
         */
        send_reply(reply: UserMessage): void;
    }

    namespace WebContext {
        // Signal callback interfaces

        interface AutomationStarted {
            (_source: WebContext, session: AutomationSession): void;
        }

        interface DownloadStarted {
            (_source: WebContext, download: Download): void;
        }

        interface InitializeNotificationPermissions {
            (_source: WebContext): void;
        }

        interface InitializeWebExtensions {
            (_source: WebContext): void;
        }

        interface UserMessageReceived {
            (_source: WebContext, message: UserMessage): boolean | void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'automation-started': AutomationStarted;
            'download-started': DownloadStarted;
            'initialize-notification-permissions': InitializeNotificationPermissions;
            'initialize-web-extensions': InitializeWebExtensions;
            'user-message-received': UserMessageReceived;
            'notify::local-storage-directory': GObject.Object.Notify;
            'notify::memory-pressure-settings': GObject.Object.Notify;
            'notify::process-swap-on-cross-site-navigation-enabled': GObject.Object.Notify;
            'notify::time-zone-override': GObject.Object.Notify;
            'notify::use-system-appearance-for-scrollbars': GObject.Object.Notify;
            'notify::website-data-manager': GObject.Object.Notify;
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
            use_system_appearance_for_scrollbars: boolean;
            useSystemAppearanceForScrollbars: boolean;
            website_data_manager: WebsiteDataManager;
            websiteDataManager: WebsiteDataManager;
        }
    }

    /**
     * Manages aspects common to all #WebKitWebView<!-- -->s
     *
     * The #WebKitWebContext manages all aspects common to all
     * #WebKitWebView<!-- -->s.
     *
     * You can define the #WebKitCacheModel with
     * webkit_web_context_set_cache_model(), depending on the needs of
     * your application. You can access the #WebKitSecurityManager to specify
     * the behaviour of your application regarding security using
     * webkit_web_context_get_security_manager().
     *
     * It is also possible to change your preferred language or enable
     * spell checking, using webkit_web_context_set_preferred_languages(),
     * webkit_web_context_set_spell_checking_languages() and
     * webkit_web_context_set_spell_checking_enabled().
     *
     * You can use webkit_web_context_register_uri_scheme() to register
     * custom URI schemes, and manage several other settings.
     *
     * TLS certificate validation failure is now treated as a transport
     * error by default. To handle TLS failures differently, you can
     * connect to #WebKitWebView::load-failed-with-tls-errors.
     * Alternatively, you can use webkit_web_context_set_tls_errors_policy()
     * to set the policy %WEBKIT_TLS_ERRORS_POLICY_IGNORE; however, this is
     * not appropriate for Internet applications.
     */
    class WebContext extends GObject.Object {
        static $gtype: GObject.GType<WebContext>;

        // Properties

        /**
         * The directory where local storage data will be saved.
         */
        get local_storage_directory(): string;
        /**
         * The directory where local storage data will be saved.
         */
        get localStorageDirectory(): string;
        /**
         * The #WebKitMemoryPressureSettings applied to the web processes created by this context.
         */
        set memory_pressure_settings(val: MemoryPressureSettings);
        /**
         * The #WebKitMemoryPressureSettings applied to the web processes created by this context.
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
         */
        get timeZoneOverride(): string;
        /**
         * Whether to use system appearance for rendering scrollbars.
         *
         * This is enabled by default for backwards compatibility, but it's only
         * recommened to use when the application includes other widgets to ensure
         * consistency, or when consistency with other applications is required too.
         */
        get use_system_appearance_for_scrollbars(): boolean;
        set use_system_appearance_for_scrollbars(val: boolean);
        /**
         * Whether to use system appearance for rendering scrollbars.
         *
         * This is enabled by default for backwards compatibility, but it's only
         * recommened to use when the application includes other widgets to ensure
         * consistency, or when consistency with other applications is required too.
         */
        get useSystemAppearanceForScrollbars(): boolean;
        set useSystemAppearanceForScrollbars(val: boolean);
        /**
         * The #WebKitWebsiteDataManager associated with this context.
         */
        get website_data_manager(): WebsiteDataManager;
        /**
         * The #WebKitWebsiteDataManager associated with this context.
         */
        get websiteDataManager(): WebsiteDataManager;

        // Constructors

        constructor(properties?: Partial<WebContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): WebContext;

        static new_ephemeral(): WebContext;

        static new_with_website_data_manager(manager: WebsiteDataManager): WebContext;

        // Signals

        connect<K extends keyof WebContext.SignalSignatures>(
            signal: K,
            callback: WebContext.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebContext.SignalSignatures>(
            signal: K,
            callback: WebContext.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebContext.SignalSignatures>(
            signal: K,
            ...args: WebContext.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets the default web context.
         */
        static get_default(): WebContext;

        // Virtual methods

        vfunc_automation_started(session: AutomationSession): void;
        vfunc_download_started(download: Download): void;
        vfunc_initialize_notification_permissions(): void;
        vfunc_initialize_web_extensions(): void;
        vfunc_user_message_received(message: UserMessage): boolean;

        // Methods

        /**
         * Adds a path to be mounted in the sandbox.
         *
         * `path` must exist before any web process has been created; otherwise,
         * it will be silently ignored. It is a fatal error to add paths after
         * a web process has been spawned.
         *
         * Paths under `/sys`, `/proc`, and `/dev` are invalid. Attempting to
         * add all of `/` is not valid. Since 2.40, adding the user's entire
         * home directory or /home is also not valid.
         *
         * See also webkit_web_context_set_sandbox_enabled()
         * @param path an absolute path to mount in the sandbox
         * @param read_only if %TRUE the path will be read-only
         */
        add_path_to_sandbox(path: string, read_only: boolean): void;
        /**
         * Ignore further TLS errors on the `host` for the certificate present in `info`.
         *
         * If `host` is an IPv6 address, it should not be surrounded by brackets. This
         * expectation matches g_uri_get_host().
         * @param certificate a #GTlsCertificate
         * @param host the host for which a certificate is to be allowed
         */
        allow_tls_certificate_for_host(certificate: Gio.TlsCertificate, host: string): void;
        /**
         * Clears all resources currently cached.
         *
         * See also webkit_web_context_set_cache_model().
         */
        clear_cache(): void;
        /**
         * Requests downloading of the specified URI string.
         *
         * The download operation will not be associated to any #WebKitWebView,
         * if you are interested in starting a download from a particular #WebKitWebView use
         * webkit_web_view_download_uri() instead.
         * @param uri the URI to download
         * @returns a new #WebKitDownload representing    the download operation.
         */
        download_uri(uri: string): Download;
        /**
         * Returns the current cache model.
         *
         * For more information about this
         * value check the documentation of the function
         * webkit_web_context_set_cache_model().
         * @returns the current #WebKitCacheModel
         */
        get_cache_model(): CacheModel;
        /**
         * Get the #WebKitCookieManager of the `context'`s #WebKitWebsiteDataManager.
         * @returns the #WebKitCookieManager of @context.
         */
        get_cookie_manager(): CookieManager;
        /**
         * Get the #WebKitFaviconDatabase associated with `context`.
         *
         * To initialize the database you need to call
         * webkit_web_context_set_favicon_database_directory().
         * @returns the #WebKitFaviconDatabase of @context.
         */
        get_favicon_database(): FaviconDatabase;
        /**
         * Get the directory path to store the favicons database.
         *
         * Get the directory path being used to store the favicons database
         * for `context,` or %NULL if
         * webkit_web_context_set_favicon_database_directory() hasn't been
         * called yet.
         *
         * This function will always return the same path after having called
         * webkit_web_context_set_favicon_database_directory() for the first
         * time.
         * @returns the path of the directory of the favicons database associated with @context, or %NULL.
         */
        get_favicon_database_directory(): string;
        /**
         * Get the #WebKitGeolocationManager of `context`.
         * @returns the #WebKitGeolocationManager of @context.
         */
        get_geolocation_manager(): GeolocationManager;
        /**
         * Asynchronously get the list of installed plugins.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_web_context_get_plugins_finish() to get the result of the operation.
         * @param cancellable a #GCancellable or %NULL to ignore
         */
        get_plugins(cancellable?: Gio.Cancellable | null): Promise<Plugin[]>;
        /**
         * Asynchronously get the list of installed plugins.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_web_context_get_plugins_finish() to get the result of the operation.
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        get_plugins(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously get the list of installed plugins.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_web_context_get_plugins_finish() to get the result of the operation.
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        get_plugins(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<Plugin[]> | void;
        /**
         * Finish an asynchronous operation started with webkit_web_context_get_plugins.
         * @param result a #GAsyncResult
         * @returns a #GList of #WebKitPlugin. You must free the #GList with    g_list_free() and unref the #WebKitPlugin<!-- -->s with g_object_unref() when you're done with them.
         */
        get_plugins_finish(result: Gio.AsyncResult): Plugin[];
        /**
         * Returns %WEBKIT_PROCESS_MODEL_MULTIPLE_SECONDARY_PROCESSES.
         *
         * For more information about why this function is deprecated,
         * see webkit_web_context_set_process_model().
         * @returns %WEBKIT_PROCESS_MODEL_MULTIPLE_SECONDARY_PROCESSES
         */
        get_process_model(): ProcessModel;
        /**
         * Get whether sandboxing is currently enabled.
         * @returns %TRUE if sandboxing is enabled, or %FALSE otherwise.
         */
        get_sandbox_enabled(): boolean;
        /**
         * Get the #WebKitSecurityManager of `context`.
         * @returns the #WebKitSecurityManager of @context.
         */
        get_security_manager(): SecurityManager;
        /**
         * Get whether spell checking feature is currently enabled.
         * @returns %TRUE If spell checking is enabled, or %FALSE otherwise.
         */
        get_spell_checking_enabled(): boolean;
        /**
         * Get the the list of spell checking languages.
         *
         * Get the the list of spell checking languages associated with
         * `context,` or %NULL if no languages have been previously set.
         *
         * See webkit_web_context_set_spell_checking_languages() for more
         * details on the format of the languages in the list.
         * @returns A %NULL-terminated    array of languages if available, or %NULL otherwise.
         */
        get_spell_checking_languages(): string[];
        /**
         * Get the #WebKitWebContext:time-zone-override property.
         */
        get_time_zone_override(): string;
        /**
         * Get the TLS errors policy of `context`.
         * @returns a #WebKitTLSErrorsPolicy
         */
        get_tls_errors_policy(): TLSErrorsPolicy;
        /**
         * Get the #WebKitWebContext:use-system-appearance-for-scrollbars property.
         * @returns %TRUE if scrollbars are rendering using the system appearance, or %FALSE otherwise
         */
        get_use_system_appearance_for_scrollbars(): boolean;
        /**
         * Gets the maximum number of web processes that can be created at the same time for the `context`.
         *
         * This function is now deprecated and always returns 0 (no limit). See also webkit_web_context_set_web_process_count_limit().
         * @returns the maximum limit of web processes, or 0 if there isn't a limit.
         */
        get_web_process_count_limit(): number;
        /**
         * Get the #WebKitWebsiteDataManager of `context`.
         * @returns a #WebKitWebsiteDataManager
         */
        get_website_data_manager(): WebsiteDataManager;
        /**
         * Sets initial desktop notification permissions for the `context`.
         *
         * `allowed_origins` and `disallowed_origins` must each be #GList of
         * #WebKitSecurityOrigin objects representing origins that will,
         * respectively, either always or never have permission to show desktop
         * notifications. No #WebKitNotificationPermissionRequest will ever be
         * generated for any of the security origins represented in
         * `allowed_origins` or `disallowed_origins`. This function is necessary
         * because some webpages proactively check whether they have permission
         * to display notifications without ever creating a permission request.
         *
         * This function only affects web processes that have not already been
         * created. The best time to call it is when handling
         * #WebKitWebContext::initialize-notification-permissions so as to
         * ensure that new web processes receive the most recent set of
         * permissions.
         * @param allowed_origins a #GList of security origins
         * @param disallowed_origins a #GList of security origins
         */
        initialize_notification_permissions(
            allowed_origins: SecurityOrigin[],
            disallowed_origins: SecurityOrigin[],
        ): void;
        /**
         * Get whether automation is allowed in `context`.
         *
         * See also webkit_web_context_set_automation_allowed().
         * @returns %TRUE if automation is allowed or %FALSE otherwise.
         */
        is_automation_allowed(): boolean;
        /**
         * Get whether a #WebKitWebContext is ephemeral.
         * @returns %TRUE if @context is ephemeral or %FALSE otherwise.
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
         * Register `scheme` in `context,` so that when an URI request with `scheme` is made in the
         * #WebKitWebContext, the #WebKitURISchemeRequestCallback registered will be called with a
         * #WebKitURISchemeRequest.
         * It is possible to handle URI scheme requests asynchronously, by calling g_object_ref() on the
         * #WebKitURISchemeRequest and calling webkit_uri_scheme_request_finish() later
         * when the data of the request is available or
         * webkit_uri_scheme_request_finish_error() in case of error.
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
         * @param callback a #WebKitURISchemeRequestCallback
         */
        register_uri_scheme(scheme: string, callback: URISchemeRequestCallback): void;
        /**
         * Send `message` to all web process extensions associated to `context`.
         *
         * If `message` is floating, it's consumed.
         * @param message a #WebKitUserMessage
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
         * session is requested the signal #WebKitWebContext::automation-started is emitted.
         * Automation is disabled by default, so you need to explicitly call this method passing %TRUE
         * to enable it.
         *
         * Note that only one #WebKitWebContext can have automation enabled, so this will do nothing
         * if there's another #WebKitWebContext with automation already enabled.
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
         * specifying %WEBKIT_CACHE_MODEL_WEB_BROWSER. Applications without a
         * browsing interface can reduce memory usage substantially by
         * specifying %WEBKIT_CACHE_MODEL_DOCUMENT_VIEWER. The default value is
         * %WEBKIT_CACHE_MODEL_WEB_BROWSER.
         * @param cache_model a #WebKitCacheModel
         */
        set_cache_model(cache_model: CacheModel | null): void;
        /**
         * Set the directory where disk cache files will be stored.
         *
         * This method must be called before loading anything in this context, otherwise
         * it will not have any effect.
         *
         * Note that this method overrides the directory set in the #WebKitWebsiteDataManager,
         * but it doesn't change the value returned by webkit_website_data_manager_get_disk_cache_directory()
         * since the #WebKitWebsiteDataManager is immutable.
         * @param directory the directory to set
         */
        set_disk_cache_directory(directory: string): void;
        /**
         * Set the directory path to store the favicons database.
         *
         * Set the directory path to be used to store the favicons database
         * for `context` on disk. Passing %NULL as `path` means using the
         * default directory for the platform (see g_get_user_cache_dir()).
         *
         * Calling this method also means enabling the favicons database for
         * its use from the applications, so that's why it's expected to be
         * called only once. Further calls for the same instance of
         * #WebKitWebContext won't cause any effect.
         * @param path an absolute path to the icon database directory or %NULL to use the defaults
         */
        set_favicon_database_directory(path?: string | null): void;
        /**
         * Set the network proxy settings to be used by connections started in `context`.
         *
         * By default %WEBKIT_NETWORK_PROXY_MODE_DEFAULT is used, which means that the
         * system settings will be used (g_proxy_resolver_get_default()).
         * If you want to override the system default settings, you can either use
         * %WEBKIT_NETWORK_PROXY_MODE_NO_PROXY to make sure no proxies are used at all,
         * or %WEBKIT_NETWORK_PROXY_MODE_CUSTOM to provide your own proxy settings.
         * When `proxy_mode` is %WEBKIT_NETWORK_PROXY_MODE_CUSTOM `proxy_settings` must be
         * a valid #WebKitNetworkProxySettings; otherwise, `proxy_settings` must be %NULL.
         * @param proxy_mode a #WebKitNetworkProxyMode
         * @param proxy_settings a #WebKitNetworkProxySettings, or %NULL
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
         *   included in the network requests started by the #WebKitWebContext.
         * - Setting the values of `navigator.language` and `navigator.languages`.
         * - The first item in the list sets the default locale for JavaScript
         *   `Intl` functions.
         * @param languages a %NULL-terminated list of language identifiers
         */
        set_preferred_languages(languages?: string[] | null): void;
        /**
         * This function previously allowed specifying the process model to use.
         * However, since 2.26, the only allowed process model is
         * %WEBKIT_PROCESS_MODEL_MULTIPLE_SECONDARY_PROCESSES, so this function
         * does nothing.
         * @param process_model a #WebKitProcessModel
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
         * @param enabled if %TRUE enable sandboxing
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
         * @param languages a %NULL-terminated list of spell checking languages
         */
        set_spell_checking_languages(languages: string[]): void;
        /**
         * Set the TLS errors policy of `context` as `policy`.
         * @param policy a #WebKitTLSErrorsPolicy
         */
        set_tls_errors_policy(policy: TLSErrorsPolicy | null): void;
        /**
         * Set the #WebKitWebContext:use-system-appearance-for-scrollbars property.
         *
         * This is now deprecated and when WebKit is built with Skia this method does nothing.
         * @param enabled value to set
         */
        set_use_system_appearance_for_scrollbars(enabled: boolean): void;
        /**
         * Set the directory where WebKit will look for web process extensions.
         *
         * This method must be called before loading anything in this context,
         * otherwise it will not have any effect. You can connect to
         * #WebKitWebContext::initialize-web-extensions to call this method
         * before anything is loaded.
         * @param directory the directory to add
         */
        set_web_extensions_directory(directory: string): void;
        /**
         * Set user data to be passed to web process extensions on initialization.
         *
         * The data will be passed to the
         * #WebKitWebExtensionInitializeWithUserDataFunction.
         * This method must be called before loading anything in this context,
         * otherwise it will not have any effect. You can connect to
         * #WebKitWebContext::initialize-web-extensions to call this method
         * before anything is loaded.
         * @param user_data a #GVariant
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
        // Signal callback interfaces

        interface Attach {
            (_source: WebInspector): boolean | void;
        }

        interface BringToFront {
            (_source: WebInspector): boolean | void;
        }

        interface Closed {
            (_source: WebInspector): void;
        }

        interface Detach {
            (_source: WebInspector): boolean | void;
        }

        interface OpenWindow {
            (_source: WebInspector): boolean | void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            attach: Attach;
            'bring-to-front': BringToFront;
            closed: Closed;
            detach: Detach;
            'open-window': OpenWindow;
            'notify::attached-height': GObject.Object.Notify;
            'notify::can-attach': GObject.Object.Notify;
            'notify::inspected-uri': GObject.Object.Notify;
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
     * content of a #WebKitWebView. It also includes an interactive
     * JavaScript debugger. Using this class one can get a #GtkWidget
     * which can be embedded into an application to show the inspector.
     *
     * The inspector is available when the #WebKitSettings of the
     * #WebKitWebView has set the #WebKitSettings:enable-developer-extras
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
     */
    class WebInspector extends GObject.Object {
        static $gtype: GObject.GType<WebInspector>;

        // Properties

        /**
         * The height that the inspector view should have when it is attached.
         */
        get attached_height(): number;
        /**
         * The height that the inspector view should have when it is attached.
         */
        get attachedHeight(): number;
        /**
         * Whether the `inspector` can be attached to the same window that contains
         * the inspected view.
         */
        get can_attach(): boolean;
        /**
         * Whether the `inspector` can be attached to the same window that contains
         * the inspected view.
         */
        get canAttach(): boolean;
        /**
         * The URI that is currently being inspected.
         */
        get inspected_uri(): string;
        /**
         * The URI that is currently being inspected.
         */
        get inspectedUri(): string;

        // Constructors

        constructor(properties?: Partial<WebInspector.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof WebInspector.SignalSignatures>(
            signal: K,
            callback: WebInspector.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebInspector.SignalSignatures>(
            signal: K,
            callback: WebInspector.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebInspector.SignalSignatures>(
            signal: K,
            ...args: WebInspector.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Request `inspector` to be attached.
         *
         * The signal #WebKitWebInspector::attach
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
         * The signal #WebKitWebInspector::detach
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
         * @returns %TRUE if there is enough room for the inspector view inside the     window that contains the inspected view, or %FALSE otherwise.
         */
        get_can_attach(): boolean;
        /**
         * Get the URI that is currently being inspected.
         *
         * This can be %NULL if
         * nothing has been loaded yet in the inspected view, if the inspector
         * has been closed or when inspected view was loaded from a HTML string
         * instead of a URI.
         * @returns the URI that is currently being inspected or %NULL
         */
        get_inspected_uri(): string;
        /**
         * Get the #WebKitWebViewBase used to display the inspector.
         *
         * This might be %NULL if the inspector hasn't been loaded yet,
         * or it has been closed.
         * @returns the #WebKitWebViewBase used to display the inspector or %NULL
         */
        get_web_view(): WebViewBase;
        /**
         * Whether the `inspector` view is currently attached to the same window that contains
         * the inspected view.
         * @returns %TRUE if @inspector is currently attached or %FALSE otherwise
         */
        is_attached(): boolean;
        /**
         * Request `inspector` to be shown.
         */
        show(): void;
    }

    namespace WebResource {
        // Signal callback interfaces

        interface Failed {
            (_source: WebResource, error: GLib.Error): void;
        }

        interface FailedWithTlsErrors {
            (_source: WebResource, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): void;
        }

        interface Finished {
            (_source: WebResource): void;
        }

        interface ReceivedData {
            (_source: WebResource, data_length: number): void;
        }

        interface SentRequest {
            (_source: WebResource, request: URIRequest, redirected_response: URIResponse): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            failed: Failed;
            'failed-with-tls-errors': FailedWithTlsErrors;
            finished: Finished;
            'received-data': ReceivedData;
            'sent-request': SentRequest;
            'notify::response': GObject.Object.Notify;
            'notify::uri': GObject.Object.Notify;
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
     * A #WebKitWebResource encapsulates content for each resource at the
     * end of a particular URI. For example, one #WebKitWebResource will
     * be created for each separate image and stylesheet when a page is
     * loaded.
     *
     * You can access the response and the URI for a given
     * #WebKitWebResource, using webkit_web_resource_get_uri() and
     * webkit_web_resource_get_response(), as well as the raw data, using
     * webkit_web_resource_get_data().
     */
    class WebResource extends GObject.Object {
        static $gtype: GObject.GType<WebResource>;

        // Properties

        /**
         * The #WebKitURIResponse associated with this resource.
         */
        get response(): URIResponse;
        /**
         * The current active URI of the #WebKitWebResource.
         * See webkit_web_resource_get_uri() for more details.
         */
        get uri(): string;

        // Constructors

        constructor(properties?: Partial<WebResource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof WebResource.SignalSignatures>(
            signal: K,
            callback: WebResource.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebResource.SignalSignatures>(
            signal: K,
            callback: WebResource.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebResource.SignalSignatures>(
            signal: K,
            ...args: WebResource.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Asynchronously get the raw data for `resource`.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_web_resource_get_data_finish() to get the result of the operation.
         * @param cancellable a #GCancellable or %NULL to ignore
         */
        get_data(cancellable?: Gio.Cancellable | null): Promise<Uint8Array>;
        /**
         * Asynchronously get the raw data for `resource`.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_web_resource_get_data_finish() to get the result of the operation.
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        get_data(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously get the raw data for `resource`.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_web_resource_get_data_finish() to get the result of the operation.
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        get_data(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<Uint8Array> | void;
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
        /**
         * Finish an asynchronous operation started with webkit_web_resource_get_data().
         * @param result a #GAsyncResult
         * @returns a    string with the data of @resource, or %NULL in case of error. if @length    is not %NULL, the size of the data will be assigned to it.
         */
        get_data_finish(result: Gio.AsyncResult): Uint8Array;
        /**
         * Retrieves the #WebKitURIResponse of the resource load operation.
         *
         * This method returns %NULL if called before the response
         * is received from the server. You can connect to notify::response
         * signal to be notified when the response is received.
         * @returns the #WebKitURIResponse, or %NULL if     the response hasn't been received yet.
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
         *   When the initial request is sent to the server, #WebKitWebResource::sent-request
         *   signal is emitted without a redirected response, the active URI is the URI of
         *   the request sent to the server.
         * </para></listitem>
         * <listitem><para>
         *   In case of a server redirection, #WebKitWebResource::sent-request signal
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
         * @returns the current active URI of @resource
         */
        get_uri(): string;
    }

    namespace WebView {
        // Signal callback interfaces

        interface Authenticate {
            (_source: WebView, request: AuthenticationRequest): boolean | void;
        }

        interface Close {
            (_source: WebView): void;
        }

        interface ContextMenu {
            (
                _source: WebView,
                context_menu: ContextMenu,
                event: Gdk.Event,
                hit_test_result: HitTestResult,
            ): boolean | void;
        }

        interface ContextMenuDismissed {
            (_source: WebView): void;
        }

        interface Create {
            (_source: WebView, navigation_action: NavigationAction): Gtk.Widget;
        }

        interface DecidePolicy {
            (_source: WebView, decision: PolicyDecision, decision_type: PolicyDecisionType): boolean | void;
        }

        interface EnterFullscreen {
            (_source: WebView): boolean | void;
        }

        interface InsecureContentDetected {
            (_source: WebView, event: InsecureContentEvent): void;
        }

        interface LeaveFullscreen {
            (_source: WebView): boolean | void;
        }

        interface LoadChanged {
            (_source: WebView, load_event: LoadEvent): void;
        }

        interface LoadFailed {
            (_source: WebView, load_event: LoadEvent, failing_uri: string, error: GLib.Error): boolean | void;
        }

        interface LoadFailedWithTlsErrors {
            (
                _source: WebView,
                failing_uri: string,
                certificate: Gio.TlsCertificate,
                errors: Gio.TlsCertificateFlags,
            ): boolean | void;
        }

        interface MouseTargetChanged {
            (_source: WebView, hit_test_result: HitTestResult, modifiers: number): void;
        }

        interface PermissionRequest {
            (_source: WebView, request: PermissionRequest): boolean | void;
        }

        interface Print {
            (_source: WebView, print_operation: PrintOperation): boolean | void;
        }

        interface QueryPermissionState {
            (_source: WebView, query: PermissionStateQuery): boolean | void;
        }

        interface ReadyToShow {
            (_source: WebView): void;
        }

        interface ResourceLoadStarted {
            (_source: WebView, resource: WebResource, request: URIRequest): void;
        }

        interface RunAsModal {
            (_source: WebView): void;
        }

        interface RunColorChooser {
            (_source: WebView, request: ColorChooserRequest): boolean | void;
        }

        interface RunFileChooser {
            (_source: WebView, request: FileChooserRequest): boolean | void;
        }

        interface ScriptDialog {
            (_source: WebView, dialog: ScriptDialog): boolean | void;
        }

        interface ShowNotification {
            (_source: WebView, notification: Notification): boolean | void;
        }

        interface ShowOptionMenu {
            (_source: WebView, menu: OptionMenu, event: Gdk.Event, rectangle: Gdk.Rectangle): boolean | void;
        }

        interface SubmitForm {
            (_source: WebView, request: FormSubmissionRequest): void;
        }

        interface UserMessageReceived {
            (_source: WebView, message: UserMessage): boolean | void;
        }

        interface WebProcessCrashed {
            (_source: WebView): boolean | void;
        }

        interface WebProcessTerminated {
            (_source: WebView, reason: WebProcessTerminationReason): void;
        }

        // Signal signatures
        interface SignalSignatures extends WebViewBase.SignalSignatures {
            authenticate: Authenticate;
            close: Close;
            'context-menu': ContextMenu;
            'context-menu-dismissed': ContextMenuDismissed;
            create: Create;
            'decide-policy': DecidePolicy;
            'enter-fullscreen': EnterFullscreen;
            'insecure-content-detected': InsecureContentDetected;
            'leave-fullscreen': LeaveFullscreen;
            'load-changed': LoadChanged;
            'load-failed': LoadFailed;
            'load-failed-with-tls-errors': LoadFailedWithTlsErrors;
            'mouse-target-changed': MouseTargetChanged;
            'permission-request': PermissionRequest;
            print: Print;
            'query-permission-state': QueryPermissionState;
            'ready-to-show': ReadyToShow;
            'resource-load-started': ResourceLoadStarted;
            'run-as-modal': RunAsModal;
            'run-color-chooser': RunColorChooser;
            'run-file-chooser': RunFileChooser;
            'script-dialog': ScriptDialog;
            'show-notification': ShowNotification;
            'show-option-menu': ShowOptionMenu;
            'submit-form': SubmitForm;
            'user-message-received': UserMessageReceived;
            'web-process-crashed': WebProcessCrashed;
            'web-process-terminated': WebProcessTerminated;
            'notify::automation-presentation-type': GObject.Object.Notify;
            'notify::camera-capture-state': GObject.Object.Notify;
            'notify::default-content-security-policy': GObject.Object.Notify;
            'notify::display-capture-state': GObject.Object.Notify;
            'notify::editable': GObject.Object.Notify;
            'notify::estimated-load-progress': GObject.Object.Notify;
            'notify::favicon': GObject.Object.Notify;
            'notify::is-controlled-by-automation': GObject.Object.Notify;
            'notify::is-ephemeral': GObject.Object.Notify;
            'notify::is-loading': GObject.Object.Notify;
            'notify::is-muted': GObject.Object.Notify;
            'notify::is-playing-audio': GObject.Object.Notify;
            'notify::is-web-process-responsive': GObject.Object.Notify;
            'notify::microphone-capture-state': GObject.Object.Notify;
            'notify::page-id': GObject.Object.Notify;
            'notify::related-view': GObject.Object.Notify;
            'notify::settings': GObject.Object.Notify;
            'notify::title': GObject.Object.Notify;
            'notify::uri': GObject.Object.Notify;
            'notify::user-content-manager': GObject.Object.Notify;
            'notify::web-context': GObject.Object.Notify;
            'notify::web-extension-mode': GObject.Object.Notify;
            'notify::website-policies': GObject.Object.Notify;
            'notify::zoom-level': GObject.Object.Notify;
            'notify::border-width': GObject.Object.Notify;
            'notify::child': GObject.Object.Notify;
            'notify::resize-mode': GObject.Object.Notify;
            'notify::app-paintable': GObject.Object.Notify;
            'notify::can-default': GObject.Object.Notify;
            'notify::can-focus': GObject.Object.Notify;
            'notify::composite-child': GObject.Object.Notify;
            'notify::double-buffered': GObject.Object.Notify;
            'notify::events': GObject.Object.Notify;
            'notify::expand': GObject.Object.Notify;
            'notify::focus-on-click': GObject.Object.Notify;
            'notify::halign': GObject.Object.Notify;
            'notify::has-default': GObject.Object.Notify;
            'notify::has-focus': GObject.Object.Notify;
            'notify::has-tooltip': GObject.Object.Notify;
            'notify::height-request': GObject.Object.Notify;
            'notify::hexpand': GObject.Object.Notify;
            'notify::hexpand-set': GObject.Object.Notify;
            'notify::is-focus': GObject.Object.Notify;
            'notify::margin': GObject.Object.Notify;
            'notify::margin-bottom': GObject.Object.Notify;
            'notify::margin-end': GObject.Object.Notify;
            'notify::margin-left': GObject.Object.Notify;
            'notify::margin-right': GObject.Object.Notify;
            'notify::margin-start': GObject.Object.Notify;
            'notify::margin-top': GObject.Object.Notify;
            'notify::name': GObject.Object.Notify;
            'notify::no-show-all': GObject.Object.Notify;
            'notify::opacity': GObject.Object.Notify;
            'notify::parent': GObject.Object.Notify;
            'notify::receives-default': GObject.Object.Notify;
            'notify::scale-factor': GObject.Object.Notify;
            'notify::sensitive': GObject.Object.Notify;
            'notify::style': GObject.Object.Notify;
            'notify::tooltip-markup': GObject.Object.Notify;
            'notify::tooltip-text': GObject.Object.Notify;
            'notify::valign': GObject.Object.Notify;
            'notify::vexpand': GObject.Object.Notify;
            'notify::vexpand-set': GObject.Object.Notify;
            'notify::visible': GObject.Object.Notify;
            'notify::width-request': GObject.Object.Notify;
            'notify::window': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends WebViewBase.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
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
     * #WebKitWebView is the central class of the WPE WebKit and WebKitGTK
     * APIs. It is responsible for managing the drawing of the content and
     * forwarding of events. You can load any URI into the #WebKitWebView or
     * a data string. With #WebKitSettings you can control various aspects
     * of the rendering and loading of the content.
     *
     * Note that in WebKitGTK, #WebKitWebView is scrollable by itself, so
     * you don't need to embed it in a #GtkScrolledWindow.
     */
    class WebView extends WebViewBase implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<WebView>;

        // Properties

        /**
         * The #WebKitAutomationBrowsingContextPresentation of #WebKitWebView. This should only be used when
         * creating a new #WebKitWebView as a response to #WebKitAutomationSession::create-web-view
         * signal request. If the new WebView was added to a new tab of current browsing context window
         * %WEBKIT_AUTOMATION_BROWSING_CONTEXT_PRESENTATION_TAB should be used.
         */
        get automation_presentation_type(): AutomationBrowsingContextPresentation;
        /**
         * The #WebKitAutomationBrowsingContextPresentation of #WebKitWebView. This should only be used when
         * creating a new #WebKitWebView as a response to #WebKitAutomationSession::create-web-view
         * signal request. If the new WebView was added to a new tab of current browsing context window
         * %WEBKIT_AUTOMATION_BROWSING_CONTEXT_PRESENTATION_TAB should be used.
         */
        get automationPresentationType(): AutomationBrowsingContextPresentation;
        /**
         * Capture state of the camera device. Whenever the user grants a media-request sent by the web
         * page, requesting video capture capabilities (`navigator.mediaDevices.getUserMedia({video:
         * true})`) this property will be set to %WEBKIT_MEDIA_CAPTURE_STATE_ACTIVE.
         *
         * The application can monitor this property and provide a visual indicator allowing to optionally
         * deactivate or mute the capture device by setting this property respectively to
         * %WEBKIT_MEDIA_CAPTURE_STATE_NONE or %WEBKIT_MEDIA_CAPTURE_STATE_MUTED.
         *
         * If the capture state of the device is set to %WEBKIT_MEDIA_CAPTURE_STATE_NONE the web-page
         * can still re-request the permission to the user. Permission desision caching is left to the
         * application.
         */
        get camera_capture_state(): MediaCaptureState;
        set camera_capture_state(val: MediaCaptureState);
        /**
         * Capture state of the camera device. Whenever the user grants a media-request sent by the web
         * page, requesting video capture capabilities (`navigator.mediaDevices.getUserMedia({video:
         * true})`) this property will be set to %WEBKIT_MEDIA_CAPTURE_STATE_ACTIVE.
         *
         * The application can monitor this property and provide a visual indicator allowing to optionally
         * deactivate or mute the capture device by setting this property respectively to
         * %WEBKIT_MEDIA_CAPTURE_STATE_NONE or %WEBKIT_MEDIA_CAPTURE_STATE_MUTED.
         *
         * If the capture state of the device is set to %WEBKIT_MEDIA_CAPTURE_STATE_NONE the web-page
         * can still re-request the permission to the user. Permission desision caching is left to the
         * application.
         */
        get cameraCaptureState(): MediaCaptureState;
        set cameraCaptureState(val: MediaCaptureState);
        /**
         * The default Content-Security-Policy used by the webview as if it were set
         * by an HTTP header.
         *
         * This applies to all content loaded including through navigation or via the various
         * webkit_web_view_load_\* APIs. However do note that many WebKit APIs bypass
         * Content-Security-Policy in general such as #WebKitUserContentManager and
         * webkit_web_view_run_javascript().
         *
         * Policies are additive so if a website sets its own policy it still applies
         * on top of the policy set here.
         */
        get default_content_security_policy(): string;
        /**
         * The default Content-Security-Policy used by the webview as if it were set
         * by an HTTP header.
         *
         * This applies to all content loaded including through navigation or via the various
         * webkit_web_view_load_\* APIs. However do note that many WebKit APIs bypass
         * Content-Security-Policy in general such as #WebKitUserContentManager and
         * webkit_web_view_run_javascript().
         *
         * Policies are additive so if a website sets its own policy it still applies
         * on top of the policy set here.
         */
        get defaultContentSecurityPolicy(): string;
        /**
         * Capture state of the display device. Whenever the user grants a media-request sent by the web
         * page, requesting screencasting capabilities (`navigator.mediaDevices.getDisplayMedia() this
         * property will be set to %WEBKIT_MEDIA_CAPTURE_STATE_ACTIVE.
         *
         * The application can monitor this property and provide a visual indicator allowing to
         * optionally deactivate or mute the capture device by setting this property respectively to
         * %WEBKIT_MEDIA_CAPTURE_STATE_NONE or %WEBKIT_MEDIA_CAPTURE_STATE_MUTED.
         *
         * If the capture state of the device is set to %WEBKIT_MEDIA_CAPTURE_STATE_NONE the web-page
         * can still re-request the permission to the user. Permission desision caching is left to the
         * application.
         */
        get display_capture_state(): MediaCaptureState;
        set display_capture_state(val: MediaCaptureState);
        /**
         * Capture state of the display device. Whenever the user grants a media-request sent by the web
         * page, requesting screencasting capabilities (`navigator.mediaDevices.getDisplayMedia() this
         * property will be set to %WEBKIT_MEDIA_CAPTURE_STATE_ACTIVE.
         *
         * The application can monitor this property and provide a visual indicator allowing to
         * optionally deactivate or mute the capture device by setting this property respectively to
         * %WEBKIT_MEDIA_CAPTURE_STATE_NONE or %WEBKIT_MEDIA_CAPTURE_STATE_MUTED.
         *
         * If the capture state of the device is set to %WEBKIT_MEDIA_CAPTURE_STATE_NONE the web-page
         * can still re-request the permission to the user. Permission desision caching is left to the
         * application.
         */
        get displayCaptureState(): MediaCaptureState;
        set displayCaptureState(val: MediaCaptureState);
        /**
         * Whether the pages loaded inside #WebKitWebView are editable. For more
         * information see webkit_web_view_set_editable().
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
         */
        get estimatedLoadProgress(): number;
        /**
         * The favicon currently associated to the #WebKitWebView.
         * See webkit_web_view_get_favicon() for more details.
         */
        get favicon(): any;
        /**
         * Whether the #WebKitWebView is controlled by automation tools (e.g. WebDriver, Selenium). This is
         * required for views returned as a response to #WebKitAutomationSession::create-web-view signal,
         * alongside any view you want to control during an automation session.
         *
         * As a %G_PARAM_CONSTRUCT_ONLY, you need to set it during construction and it can't be modified.
         *
         * If #WebKitWebView:related-view is also passed during construction, #WebKitWebView:is-controlled-by-automation
         * ignores its own parameter and inherits directly from the related view #WebKitWebView:is-controlled-by-automation
         * property. This is the recommended way when creating new views as a response to the #WebKitWebView::create
         * signal. For example, as response to JavaScript `window.open()` calls during an automation session.
         */
        get is_controlled_by_automation(): boolean;
        /**
         * Whether the #WebKitWebView is controlled by automation tools (e.g. WebDriver, Selenium). This is
         * required for views returned as a response to #WebKitAutomationSession::create-web-view signal,
         * alongside any view you want to control during an automation session.
         *
         * As a %G_PARAM_CONSTRUCT_ONLY, you need to set it during construction and it can't be modified.
         *
         * If #WebKitWebView:related-view is also passed during construction, #WebKitWebView:is-controlled-by-automation
         * ignores its own parameter and inherits directly from the related view #WebKitWebView:is-controlled-by-automation
         * property. This is the recommended way when creating new views as a response to the #WebKitWebView::create
         * signal. For example, as response to JavaScript `window.open()` calls during an automation session.
         */
        get isControlledByAutomation(): boolean;
        /**
         * Whether the #WebKitWebView is ephemeral. An ephemeral web view never writes
         * website data to the client storage, no matter what #WebKitWebsiteDataManager
         * its context is using. This is normally used to implement private browsing mode.
         * This is a %G_PARAM_CONSTRUCT_ONLY property, so you have to create an ephemeral
         * #WebKitWebView and it can't be changed. The ephemeral #WebKitWebsiteDataManager
         * created for the #WebKitWebView will inherit the network settings from the
         * #WebKitWebContext<!-- -->'s #WebKitWebsiteDataManager. To use different settings
         * you can get the #WebKitWebsiteDataManager with webkit_web_view_get_website_data_manager()
         * and set the new ones.
         * Note that all #WebKitWebView<!-- -->s created with an ephemeral #WebKitWebContext
         * will be ephemeral automatically.
         * See also webkit_web_context_new_ephemeral().
         */
        get is_ephemeral(): boolean;
        /**
         * Whether the #WebKitWebView is ephemeral. An ephemeral web view never writes
         * website data to the client storage, no matter what #WebKitWebsiteDataManager
         * its context is using. This is normally used to implement private browsing mode.
         * This is a %G_PARAM_CONSTRUCT_ONLY property, so you have to create an ephemeral
         * #WebKitWebView and it can't be changed. The ephemeral #WebKitWebsiteDataManager
         * created for the #WebKitWebView will inherit the network settings from the
         * #WebKitWebContext<!-- -->'s #WebKitWebsiteDataManager. To use different settings
         * you can get the #WebKitWebsiteDataManager with webkit_web_view_get_website_data_manager()
         * and set the new ones.
         * Note that all #WebKitWebView<!-- -->s created with an ephemeral #WebKitWebContext
         * will be ephemeral automatically.
         * See also webkit_web_context_new_ephemeral().
         */
        get isEphemeral(): boolean;
        /**
         * Whether the #WebKitWebView is currently loading a page. This property becomes
         * %TRUE as soon as a new load operation is requested and before the
         * #WebKitWebView::load-changed signal is emitted with %WEBKIT_LOAD_STARTED and
         * at that point the active URI is the requested one.
         * When the load operation finishes the property is set to %FALSE before
         * #WebKitWebView::load-changed is emitted with %WEBKIT_LOAD_FINISHED.
         */
        get is_loading(): boolean;
        /**
         * Whether the #WebKitWebView is currently loading a page. This property becomes
         * %TRUE as soon as a new load operation is requested and before the
         * #WebKitWebView::load-changed signal is emitted with %WEBKIT_LOAD_STARTED and
         * at that point the active URI is the requested one.
         * When the load operation finishes the property is set to %FALSE before
         * #WebKitWebView::load-changed is emitted with %WEBKIT_LOAD_FINISHED.
         */
        get isLoading(): boolean;
        /**
         * Whether the #WebKitWebView audio is muted. When %TRUE, audio is silenced.
         * It may still be playing, i.e. #WebKitWebView:is-playing-audio may be %TRUE.
         */
        get is_muted(): boolean;
        set is_muted(val: boolean);
        /**
         * Whether the #WebKitWebView audio is muted. When %TRUE, audio is silenced.
         * It may still be playing, i.e. #WebKitWebView:is-playing-audio may be %TRUE.
         */
        get isMuted(): boolean;
        set isMuted(val: boolean);
        /**
         * Whether the #WebKitWebView is currently playing audio from a page.
         * This property becomes %TRUE as soon as web content starts playing any
         * kind of audio. When a page is no longer playing any kind of sound,
         * the property is set back to %FALSE.
         */
        get is_playing_audio(): boolean;
        /**
         * Whether the #WebKitWebView is currently playing audio from a page.
         * This property becomes %TRUE as soon as web content starts playing any
         * kind of audio. When a page is no longer playing any kind of sound,
         * the property is set back to %FALSE.
         */
        get isPlayingAudio(): boolean;
        /**
         * Whether the web process currently associated to the #WebKitWebView is responsive.
         */
        get is_web_process_responsive(): boolean;
        /**
         * Whether the web process currently associated to the #WebKitWebView is responsive.
         */
        get isWebProcessResponsive(): boolean;
        /**
         * Capture state of the microphone device. Whenever the user grants a media-request sent by the web
         * page, requesting audio capture capabilities (`navigator.mediaDevices.getUserMedia({audio:
         * true})`) this property will be set to %WEBKIT_MEDIA_CAPTURE_STATE_ACTIVE.
         *
         * The application can monitor this property and provide a visual indicator allowing to
         * optionally deactivate or mute the capture device by setting this property respectively to
         * %WEBKIT_MEDIA_CAPTURE_STATE_NONE or %WEBKIT_MEDIA_CAPTURE_STATE_MUTED.
         *
         * If the capture state of the device is set to %WEBKIT_MEDIA_CAPTURE_STATE_NONE the web-page
         * can still re-request the permission to the user. Permission desision caching is left to the
         * application.
         */
        get microphone_capture_state(): MediaCaptureState;
        set microphone_capture_state(val: MediaCaptureState);
        /**
         * Capture state of the microphone device. Whenever the user grants a media-request sent by the web
         * page, requesting audio capture capabilities (`navigator.mediaDevices.getUserMedia({audio:
         * true})`) this property will be set to %WEBKIT_MEDIA_CAPTURE_STATE_ACTIVE.
         *
         * The application can monitor this property and provide a visual indicator allowing to
         * optionally deactivate or mute the capture device by setting this property respectively to
         * %WEBKIT_MEDIA_CAPTURE_STATE_NONE or %WEBKIT_MEDIA_CAPTURE_STATE_MUTED.
         *
         * If the capture state of the device is set to %WEBKIT_MEDIA_CAPTURE_STATE_NONE the web-page
         * can still re-request the permission to the user. Permission desision caching is left to the
         * application.
         */
        get microphoneCaptureState(): MediaCaptureState;
        set microphoneCaptureState(val: MediaCaptureState);
        /**
         * The identifier of the #WebKitWebPage corresponding to the #WebKitWebView.
         */
        get page_id(): number;
        /**
         * The identifier of the #WebKitWebPage corresponding to the #WebKitWebView.
         */
        get pageId(): number;
        /**
         * The related #WebKitWebView used when creating the view to share the
         * same web process and network session. This property is not readable
         * because the related web view is only valid during the object construction.
         */
        set related_view(val: WebView);
        /**
         * The related #WebKitWebView used when creating the view to share the
         * same web process and network session. This property is not readable
         * because the related web view is only valid during the object construction.
         */
        set relatedView(val: WebView);
        /**
         * The #WebKitSettings of the view.
         */
        set settings(val: Settings);
        /**
         * The main frame document title of this #WebKitWebView. If
         * the title has not been received yet, it will be %NULL.
         */
        get title(): string;
        /**
         * The current active URI of the #WebKitWebView.
         * See webkit_web_view_get_uri() for more details.
         */
        get uri(): string;
        /**
         * The #WebKitUserContentManager of the view.
         */
        get user_content_manager(): UserContentManager;
        /**
         * The #WebKitUserContentManager of the view.
         */
        get userContentManager(): UserContentManager;
        /**
         * The #WebKitWebContext of the view.
         */
        get web_context(): WebContext;
        /**
         * The #WebKitWebContext of the view.
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
         */
        get webExtensionMode(): WebExtensionMode;
        /**
         * The #WebKitWebsitePolicies for the view.
         */
        get website_policies(): WebsitePolicies;
        /**
         * The #WebKitWebsitePolicies for the view.
         */
        get websitePolicies(): WebsitePolicies;
        /**
         * The zoom level of the #WebKitWebView content.
         * See webkit_web_view_set_zoom_level() for more details.
         */
        get zoom_level(): number;
        set zoom_level(val: number);
        /**
         * The zoom level of the #WebKitWebView content.
         * See webkit_web_view_set_zoom_level() for more details.
         */
        get zoomLevel(): number;
        set zoomLevel(val: number);

        // Constructors

        constructor(properties?: Partial<WebView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): WebView;

        static new_with_context(context: WebContext): WebView;

        static new_with_related_view(web_view: WebView): WebView;

        static new_with_settings(settings: Settings): WebView;

        static new_with_user_content_manager(user_content_manager: UserContentManager): WebView;

        // Signals

        connect<K extends keyof WebView.SignalSignatures>(signal: K, callback: WebView.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebView.SignalSignatures>(
            signal: K,
            callback: WebView.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebView.SignalSignatures>(
            signal: K,
            ...args: WebView.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_authenticate(request: AuthenticationRequest): boolean;
        vfunc_close(): void;
        vfunc_context_menu(context_menu: ContextMenu, event: Gdk.Event, hit_test_result: HitTestResult): boolean;
        vfunc_context_menu_dismissed(): void;
        vfunc_decide_policy(decision: PolicyDecision, type: PolicyDecisionType): boolean;
        vfunc_enter_fullscreen(): boolean;
        vfunc_insecure_content_detected(event: InsecureContentEvent): void;
        vfunc_leave_fullscreen(): boolean;
        vfunc_load_changed(load_event: LoadEvent): void;
        vfunc_load_failed(load_event: LoadEvent, failing_uri: string, error: GLib.Error): boolean;
        vfunc_load_failed_with_tls_errors(
            failing_uri: string,
            certificate: Gio.TlsCertificate,
            errors: Gio.TlsCertificateFlags,
        ): boolean;
        vfunc_mouse_target_changed(hit_test_result: HitTestResult, modifiers: number): void;
        vfunc_permission_request(permission_request: PermissionRequest): boolean;
        vfunc_print(print_operation: PrintOperation): boolean;
        vfunc_query_permission_state(query: PermissionStateQuery): boolean;
        vfunc_ready_to_show(): void;
        vfunc_resource_load_started(resource: WebResource, request: URIRequest): void;
        vfunc_run_as_modal(): void;
        vfunc_run_color_chooser(request: ColorChooserRequest): boolean;
        vfunc_run_file_chooser(request: FileChooserRequest): boolean;
        vfunc_script_dialog(dialog: ScriptDialog): boolean;
        vfunc_show_notification(notification: Notification): boolean;
        vfunc_show_option_menu(menu: OptionMenu, event: Gdk.Event, rectangle: Gdk.Rectangle): boolean;
        vfunc_submit_form(request: FormSubmissionRequest): void;
        vfunc_user_message_received(message: UserMessage): boolean;
        vfunc_web_process_crashed(): boolean;
        vfunc_web_process_terminated(reason: WebProcessTerminationReason): void;

        // Methods

        /**
         * Asynchronously call `body` with `arguments` in the script world with name `world_name` of the main frame current context in `web_view`.
         * The `arguments` values must be one of the following types, or contain only the following GVariant types: number, string and dictionary.
         * The result of the operation can be a Promise that will be properly passed to the callback.
         * If `world_name` is %NULL, the default world is used. Any value that is not %NULL is a distin ct world.
         * The `source_uri` will be shown in exceptions and doesn't affect the behavior of the script.
         * When not provided, the document URL is used.
         *
         * Note that if #WebKitSettings:enable-javascript is %FALSE, this method will do nothing.
         * If you want to use this method but still prevent web content from executing its own
         * JavaScript, then use #WebKitSettings:enable-javascript-markup.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_web_view_call_async_javascript_function_finish() to get the result of the operation.
         *
         * This is an example that shows how to pass arguments to a JS function that returns a Promise
         * that resolves with the passed argument:
         *
         * ```c
         * static void
         * web_view_javascript_finished (GObject      *object,
         *                               GAsyncResult *result,
         *                               gpointer      user_data)
         * {
         *     JSCValue               *value;
         *     GError                 *error = NULL;
         *
         *     value = webkit_web_view_call_async_javascript_function_finish (WEBKIT_WEB_VIEW (object), result, &error);
         *     if (!value) {
         *         g_warning ("Error running javascript: %s", error->message);
         *         g_error_free (error);
         *         return;
         *     }
         *
         *     if (jsc_value_is_number (value)) {
         *         gint32        int_value = jsc_value_to_string (value);
         *         JSCException *exception = jsc_context_get_exception (jsc_value_get_context (value));
         *         if (exception)
         *             g_warning ("Error running javascript: %s", jsc_exception_get_message (exception));
         *         else
         *             g_print ("Script result: %d\n", int_value);
         *         g_free (str_value);
         *     } else {
         *         g_warning ("Error running javascript: unexpected return value");
         *     }
         *     g_object_unref (value);
         * }
         *
         * static void
         * web_view_evaluate_promise (WebKitWebView *web_view)
         * {
         *     GVariantDict dict;
         *     g_variant_dict_init (&dict, NULL);
         *     g_variant_dict_insert (&dict, "count", "u", 42);
         *     GVariant *args = g_variant_dict_end (&dict);
         *     const gchar *body = "return new Promise((resolve) => { resolve(count); });";
         *     webkit_web_view_call_async_javascript_function (web_view, body, -1, arguments, NULL, NULL, NULL, web_view_javascript_finished, NULL);
         * }
         * ```
         * @param body the function body
         * @param length length of @body, or -1 if @body is a nul-terminated string
         * @param _arguments a #GVariant with format `a{sv}` storing the function arguments, or %NULL
         * @param world_name the name of a #WebKitScriptWorld or %NULL to use the default
         * @param source_uri the source URI
         * @param cancellable a #GCancellable or %NULL to ignore
         */
        call_async_javascript_function(
            body: string,
            length: number,
            _arguments?: GLib.Variant | null,
            world_name?: string | null,
            source_uri?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): Promise<JavaScriptCore.Value>;
        /**
         * Asynchronously call `body` with `arguments` in the script world with name `world_name` of the main frame current context in `web_view`.
         * The `arguments` values must be one of the following types, or contain only the following GVariant types: number, string and dictionary.
         * The result of the operation can be a Promise that will be properly passed to the callback.
         * If `world_name` is %NULL, the default world is used. Any value that is not %NULL is a distin ct world.
         * The `source_uri` will be shown in exceptions and doesn't affect the behavior of the script.
         * When not provided, the document URL is used.
         *
         * Note that if #WebKitSettings:enable-javascript is %FALSE, this method will do nothing.
         * If you want to use this method but still prevent web content from executing its own
         * JavaScript, then use #WebKitSettings:enable-javascript-markup.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_web_view_call_async_javascript_function_finish() to get the result of the operation.
         *
         * This is an example that shows how to pass arguments to a JS function that returns a Promise
         * that resolves with the passed argument:
         *
         * ```c
         * static void
         * web_view_javascript_finished (GObject      *object,
         *                               GAsyncResult *result,
         *                               gpointer      user_data)
         * {
         *     JSCValue               *value;
         *     GError                 *error = NULL;
         *
         *     value = webkit_web_view_call_async_javascript_function_finish (WEBKIT_WEB_VIEW (object), result, &error);
         *     if (!value) {
         *         g_warning ("Error running javascript: %s", error->message);
         *         g_error_free (error);
         *         return;
         *     }
         *
         *     if (jsc_value_is_number (value)) {
         *         gint32        int_value = jsc_value_to_string (value);
         *         JSCException *exception = jsc_context_get_exception (jsc_value_get_context (value));
         *         if (exception)
         *             g_warning ("Error running javascript: %s", jsc_exception_get_message (exception));
         *         else
         *             g_print ("Script result: %d\n", int_value);
         *         g_free (str_value);
         *     } else {
         *         g_warning ("Error running javascript: unexpected return value");
         *     }
         *     g_object_unref (value);
         * }
         *
         * static void
         * web_view_evaluate_promise (WebKitWebView *web_view)
         * {
         *     GVariantDict dict;
         *     g_variant_dict_init (&dict, NULL);
         *     g_variant_dict_insert (&dict, "count", "u", 42);
         *     GVariant *args = g_variant_dict_end (&dict);
         *     const gchar *body = "return new Promise((resolve) => { resolve(count); });";
         *     webkit_web_view_call_async_javascript_function (web_view, body, -1, arguments, NULL, NULL, NULL, web_view_javascript_finished, NULL);
         * }
         * ```
         * @param body the function body
         * @param length length of @body, or -1 if @body is a nul-terminated string
         * @param _arguments a #GVariant with format `a{sv}` storing the function arguments, or %NULL
         * @param world_name the name of a #WebKitScriptWorld or %NULL to use the default
         * @param source_uri the source URI
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the script finished
         */
        call_async_javascript_function(
            body: string,
            length: number,
            _arguments: GLib.Variant | null,
            world_name: string | null,
            source_uri: string | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously call `body` with `arguments` in the script world with name `world_name` of the main frame current context in `web_view`.
         * The `arguments` values must be one of the following types, or contain only the following GVariant types: number, string and dictionary.
         * The result of the operation can be a Promise that will be properly passed to the callback.
         * If `world_name` is %NULL, the default world is used. Any value that is not %NULL is a distin ct world.
         * The `source_uri` will be shown in exceptions and doesn't affect the behavior of the script.
         * When not provided, the document URL is used.
         *
         * Note that if #WebKitSettings:enable-javascript is %FALSE, this method will do nothing.
         * If you want to use this method but still prevent web content from executing its own
         * JavaScript, then use #WebKitSettings:enable-javascript-markup.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_web_view_call_async_javascript_function_finish() to get the result of the operation.
         *
         * This is an example that shows how to pass arguments to a JS function that returns a Promise
         * that resolves with the passed argument:
         *
         * ```c
         * static void
         * web_view_javascript_finished (GObject      *object,
         *                               GAsyncResult *result,
         *                               gpointer      user_data)
         * {
         *     JSCValue               *value;
         *     GError                 *error = NULL;
         *
         *     value = webkit_web_view_call_async_javascript_function_finish (WEBKIT_WEB_VIEW (object), result, &error);
         *     if (!value) {
         *         g_warning ("Error running javascript: %s", error->message);
         *         g_error_free (error);
         *         return;
         *     }
         *
         *     if (jsc_value_is_number (value)) {
         *         gint32        int_value = jsc_value_to_string (value);
         *         JSCException *exception = jsc_context_get_exception (jsc_value_get_context (value));
         *         if (exception)
         *             g_warning ("Error running javascript: %s", jsc_exception_get_message (exception));
         *         else
         *             g_print ("Script result: %d\n", int_value);
         *         g_free (str_value);
         *     } else {
         *         g_warning ("Error running javascript: unexpected return value");
         *     }
         *     g_object_unref (value);
         * }
         *
         * static void
         * web_view_evaluate_promise (WebKitWebView *web_view)
         * {
         *     GVariantDict dict;
         *     g_variant_dict_init (&dict, NULL);
         *     g_variant_dict_insert (&dict, "count", "u", 42);
         *     GVariant *args = g_variant_dict_end (&dict);
         *     const gchar *body = "return new Promise((resolve) => { resolve(count); });";
         *     webkit_web_view_call_async_javascript_function (web_view, body, -1, arguments, NULL, NULL, NULL, web_view_javascript_finished, NULL);
         * }
         * ```
         * @param body the function body
         * @param length length of @body, or -1 if @body is a nul-terminated string
         * @param _arguments a #GVariant with format `a{sv}` storing the function arguments, or %NULL
         * @param world_name the name of a #WebKitScriptWorld or %NULL to use the default
         * @param source_uri the source URI
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the script finished
         */
        call_async_javascript_function(
            body: string,
            length: number,
            _arguments?: GLib.Variant | null,
            world_name?: string | null,
            source_uri?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<JavaScriptCore.Value> | void;
        /**
         * Finish an asynchronous operation started with webkit_web_view_call_async_javascript_function().
         * @param result a #GAsyncResult
         * @returns a #JSCValue with the return value of the async function    or %NULL in case of error
         */
        call_async_javascript_function_finish(result: Gio.AsyncResult): JavaScriptCore.Value;
        /**
         * Asynchronously check if it is possible to execute the given editing command.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_web_view_can_execute_editing_command_finish() to get the result of the operation.
         * @param command the command to check
         * @param cancellable a #GCancellable or %NULL to ignore
         */
        can_execute_editing_command(command: string, cancellable?: Gio.Cancellable | null): Promise<boolean>;
        /**
         * Asynchronously check if it is possible to execute the given editing command.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_web_view_can_execute_editing_command_finish() to get the result of the operation.
         * @param command the command to check
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
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
         * webkit_web_view_can_execute_editing_command_finish() to get the result of the operation.
         * @param command the command to check
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        can_execute_editing_command(
            command: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        /**
         * Finish an asynchronous operation started with webkit_web_view_can_execute_editing_command().
         * @param result a #GAsyncResult
         * @returns %TRUE if the editing command can be executed or %FALSE otherwise
         */
        can_execute_editing_command_finish(result: Gio.AsyncResult): boolean;
        /**
         * Determines whether `web_view` has a previous history item.
         * @returns %TRUE if able to move back or %FALSE otherwise.
         */
        can_go_back(): boolean;
        /**
         * Determines whether `web_view` has a next history item.
         * @returns %TRUE if able to move forward or %FALSE otherwise.
         */
        can_go_forward(): boolean;
        /**
         * Whether or not a MIME type can be displayed in `web_view`.
         * @param mime_type a MIME type
         * @returns %TRUE if the MIME type @mime_type can be displayed or %FALSE otherwise
         */
        can_show_mime_type(mime_type: string): boolean;
        /**
         * Requests downloading of the specified URI string for `web_view`.
         * @param uri the URI to download
         * @returns a new #WebKitDownload representing    the download operation.
         */
        download_uri(uri: string): Download;
        /**
         * Asynchronously evaluate `script` in the script world with name `world_name` of the main frame current context in `web_view`.
         * If `world_name` is %NULL, the default world is used. Any value that is not %NULL is a distinct world.
         * The `source_uri` will be shown in exceptions and doesn't affect the behavior of the script.
         * When not provided, the document URL is used.
         *
         * Note that if #WebKitSettings:enable-javascript is %FALSE, this method will do nothing.
         * If you want to use this method but still prevent web content from executing its own
         * JavaScript, then use #WebKitSettings:enable-javascript-markup.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_web_view_evaluate_javascript_finish() to get the result of the operation.
         *
         * This is an example of using webkit_web_view_evaluate_javascript() with a script returning
         * a string:
         *
         * ```c
         * static void
         * web_view_javascript_finished (GObject      *object,
         *                               GAsyncResult *result,
         *                               gpointer      user_data)
         * {
         *     JSCValue               *value;
         *     GError                 *error = NULL;
         *
         *     value = webkit_web_view_evaluate_javascript_finish (WEBKIT_WEB_VIEW (object), result, &error);
         *     if (!value) {
         *         g_warning ("Error running javascript: %s", error->message);
         *         g_error_free (error);
         *         return;
         *     }
         *
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
         *     g_object_unref (value);
         * }
         *
         * static void
         * web_view_get_link_url (WebKitWebView *web_view,
         *                        const gchar   *link_id)
         * {
         *     gchar *script = g_strdup_printf ("window.document.getElementById('%s').href;", link_id);
         *     webkit_web_view_evaluate_javascript (web_view, script, -1, NULL, NULL, NULL, web_view_javascript_finished, NULL);
         *     g_free (script);
         * }
         * ```
         * @param script the script to evaluate
         * @param length length of @script, or -1 if @script is a nul-terminated string
         * @param world_name the name of a #WebKitScriptWorld or %NULL to use the default
         * @param source_uri the source URI
         * @param cancellable a #GCancellable or %NULL to ignore
         */
        evaluate_javascript(
            script: string,
            length: number,
            world_name?: string | null,
            source_uri?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): Promise<JavaScriptCore.Value>;
        /**
         * Asynchronously evaluate `script` in the script world with name `world_name` of the main frame current context in `web_view`.
         * If `world_name` is %NULL, the default world is used. Any value that is not %NULL is a distinct world.
         * The `source_uri` will be shown in exceptions and doesn't affect the behavior of the script.
         * When not provided, the document URL is used.
         *
         * Note that if #WebKitSettings:enable-javascript is %FALSE, this method will do nothing.
         * If you want to use this method but still prevent web content from executing its own
         * JavaScript, then use #WebKitSettings:enable-javascript-markup.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_web_view_evaluate_javascript_finish() to get the result of the operation.
         *
         * This is an example of using webkit_web_view_evaluate_javascript() with a script returning
         * a string:
         *
         * ```c
         * static void
         * web_view_javascript_finished (GObject      *object,
         *                               GAsyncResult *result,
         *                               gpointer      user_data)
         * {
         *     JSCValue               *value;
         *     GError                 *error = NULL;
         *
         *     value = webkit_web_view_evaluate_javascript_finish (WEBKIT_WEB_VIEW (object), result, &error);
         *     if (!value) {
         *         g_warning ("Error running javascript: %s", error->message);
         *         g_error_free (error);
         *         return;
         *     }
         *
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
         *     g_object_unref (value);
         * }
         *
         * static void
         * web_view_get_link_url (WebKitWebView *web_view,
         *                        const gchar   *link_id)
         * {
         *     gchar *script = g_strdup_printf ("window.document.getElementById('%s').href;", link_id);
         *     webkit_web_view_evaluate_javascript (web_view, script, -1, NULL, NULL, NULL, web_view_javascript_finished, NULL);
         *     g_free (script);
         * }
         * ```
         * @param script the script to evaluate
         * @param length length of @script, or -1 if @script is a nul-terminated string
         * @param world_name the name of a #WebKitScriptWorld or %NULL to use the default
         * @param source_uri the source URI
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the script finished
         */
        evaluate_javascript(
            script: string,
            length: number,
            world_name: string | null,
            source_uri: string | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously evaluate `script` in the script world with name `world_name` of the main frame current context in `web_view`.
         * If `world_name` is %NULL, the default world is used. Any value that is not %NULL is a distinct world.
         * The `source_uri` will be shown in exceptions and doesn't affect the behavior of the script.
         * When not provided, the document URL is used.
         *
         * Note that if #WebKitSettings:enable-javascript is %FALSE, this method will do nothing.
         * If you want to use this method but still prevent web content from executing its own
         * JavaScript, then use #WebKitSettings:enable-javascript-markup.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_web_view_evaluate_javascript_finish() to get the result of the operation.
         *
         * This is an example of using webkit_web_view_evaluate_javascript() with a script returning
         * a string:
         *
         * ```c
         * static void
         * web_view_javascript_finished (GObject      *object,
         *                               GAsyncResult *result,
         *                               gpointer      user_data)
         * {
         *     JSCValue               *value;
         *     GError                 *error = NULL;
         *
         *     value = webkit_web_view_evaluate_javascript_finish (WEBKIT_WEB_VIEW (object), result, &error);
         *     if (!value) {
         *         g_warning ("Error running javascript: %s", error->message);
         *         g_error_free (error);
         *         return;
         *     }
         *
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
         *     g_object_unref (value);
         * }
         *
         * static void
         * web_view_get_link_url (WebKitWebView *web_view,
         *                        const gchar   *link_id)
         * {
         *     gchar *script = g_strdup_printf ("window.document.getElementById('%s').href;", link_id);
         *     webkit_web_view_evaluate_javascript (web_view, script, -1, NULL, NULL, NULL, web_view_javascript_finished, NULL);
         *     g_free (script);
         * }
         * ```
         * @param script the script to evaluate
         * @param length length of @script, or -1 if @script is a nul-terminated string
         * @param world_name the name of a #WebKitScriptWorld or %NULL to use the default
         * @param source_uri the source URI
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the script finished
         */
        evaluate_javascript(
            script: string,
            length: number,
            world_name?: string | null,
            source_uri?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<JavaScriptCore.Value> | void;
        /**
         * Finish an asynchronous operation started with webkit_web_view_evaluate_javascript().
         * @param result a #GAsyncResult
         * @returns a #JSCValue with the result of the last executed statement in script    or %NULL in case of error
         */
        evaluate_javascript_finish(result: Gio.AsyncResult): JavaScriptCore.Value;
        /**
         * Request to execute the given `command` for `web_view`.
         *
         * You can use webkit_web_view_can_execute_editing_command() to check whether
         * it's possible to execute the command.
         * @param command the command to execute
         */
        execute_editing_command(command: string): void;
        /**
         * Request to execute the given `command` with `argument` for `web_view`.
         *
         * You can use
         * webkit_web_view_can_execute_editing_command() to check whether
         * it's possible to execute the command.
         * @param command the command to execute
         * @param argument the command argument
         */
        execute_editing_command_with_argument(command: string, argument: string): void;
        /**
         * Get the presentation type of #WebKitWebView when created for automation.
         * @returns a #WebKitAutomationBrowsingContextPresentation.
         */
        get_automation_presentation_type(): AutomationBrowsingContextPresentation;
        /**
         * Obtains the #WebKitBackForwardList associated with the given #WebKitWebView.
         *
         * The #WebKitBackForwardList is owned by the #WebKitWebView.
         * @returns the #WebKitBackForwardList
         */
        get_back_forward_list(): BackForwardList;
        /**
         * Gets the color that is used to draw the `web_view` background.
         *
         * Gets the color that is used to draw the `web_view` background before
         * the actual contents are rendered.
         * For more information see also webkit_web_view_set_background_color()
         */
        get_background_color(): Gdk.RGBA;
        /**
         * Get the camera capture state of a #WebKitWebView.
         * @returns The #WebKitMediaCaptureState of the camera device. If #WebKitSettings:enable-mediastream is %FALSE, this method will return %WEBKIT_MEDIA_CAPTURE_STATE_NONE.
         */
        get_camera_capture_state(): MediaCaptureState;
        /**
         * Gets the web context of `web_view`.
         * @returns the #WebKitWebContext of the view
         */
        get_context(): WebContext;
        /**
         * Returns the current custom character encoding name of `web_view`.
         * @returns the current custom character encoding name or %NULL if no    custom character encoding has been set.
         */
        get_custom_charset(): string;
        /**
         * Gets the configured default Content-Security-Policy.
         * @returns The default policy or %NULL
         */
        get_default_content_security_policy(): string | null;
        /**
         * Get the display capture state of a #WebKitWebView.
         * @returns The #WebKitMediaCaptureState of the display device. If #WebKitSettings:enable-mediastream is %FALSE, this method will return %WEBKIT_MEDIA_CAPTURE_STATE_NONE.
         */
        get_display_capture_state(): MediaCaptureState;
        /**
         * Gets the web editor state of `web_view`.
         * @returns the #WebKitEditorState of the view
         */
        get_editor_state(): EditorState;
        /**
         * Gets the value of the #WebKitWebView:estimated-load-progress property.
         *
         * You can monitor the estimated progress of a load operation by
         * connecting to the notify::estimated-load-progress signal of `web_view`.
         * @returns an estimate of the of the percent complete for a document     load as a range from 0.0 to 1.0.
         */
        get_estimated_load_progress(): number;
        /**
         * Returns favicon currently associated to `web_view`.
         *
         * Returns favicon currently associated to `web_view,` if any. You can
         * connect to notify::favicon signal of `web_view` to be notified when
         * the favicon is available.
         * @returns the favicon image or %NULL if there's no    icon associated with @web_view.
         */
        get_favicon(): cairo.Surface;
        /**
         * Gets the #WebKitFindController.
         *
         * Gets the #WebKitFindController that will allow the caller to query
         * the #WebKitWebView for the text to look for.
         * @returns the #WebKitFindController associated to this particular #WebKitWebView.
         */
        get_find_controller(): FindController;
        /**
         * Get the #WebKitInputMethodContext currently in use by `web_view`.
         *
         * Get the #WebKitInputMethodContext currently in use by `web_view,` or %NULL if no input method is being used.
         * @returns a #WebKitInputMethodContext, or %NULL
         */
        get_input_method_context(): InputMethodContext | null;
        /**
         * Get the #WebKitWebInspector associated to `web_view`
         * @returns the #WebKitWebInspector of @web_view
         */
        get_inspector(): WebInspector;
        /**
         * Gets the mute state of `web_view`.
         * @returns %TRUE if @web_view audio is muted or %FALSE is audio is not muted.
         */
        get_is_muted(): boolean;
        /**
         * Get whether the current web process of a #WebKitWebView is responsive.
         * @returns %TRUE if the web process attached to @web_view is responsive, or %FALSE otherwise.
         */
        get_is_web_process_responsive(): boolean;
        /**
         * Return the main resource of `web_view`.
         * @returns the main #WebKitWebResource of the view    or %NULL if nothing has been loaded.
         */
        get_main_resource(): WebResource;
        /**
         * Get the microphone capture state of a #WebKitWebView.
         * @returns The #WebKitMediaCaptureState of the microphone device. If #WebKitSettings:enable-mediastream is %FALSE, this method will return %WEBKIT_MEDIA_CAPTURE_STATE_NONE.
         */
        get_microphone_capture_state(): MediaCaptureState;
        /**
         * Get the identifier of the #WebKitWebPage corresponding to
         * the #WebKitWebView
         * @returns the page ID of @web_view.
         */
        get_page_id(): number;
        /**
         * Gets the current session state of `web_view`
         * @returns a #WebKitWebViewSessionState
         */
        get_session_state(): WebViewSessionState;
        /**
         * Gets the #WebKitSettings currently applied to `web_view`.
         *
         * If no other #WebKitSettings have been explicitly applied to
         * `web_view` with webkit_web_view_set_settings(), the default
         * #WebKitSettings will be returned. This method always returns
         * a valid #WebKitSettings object.
         * To modify any of the `web_view` settings, you can either create
         * a new #WebKitSettings object with webkit_settings_new(), setting
         * the desired preferences, and then replace the existing `web_view`
         * settings with webkit_web_view_set_settings() or get the existing
         * `web_view` settings and update it directly. #WebKitSettings objects
         * can be shared by multiple #WebKitWebView<!-- -->s, so modifying
         * the settings of a #WebKitWebView would affect other
         * #WebKitWebView<!-- -->s using the same #WebKitSettings.
         * @returns the #WebKitSettings attached to @web_view
         */
        get_settings(): Settings;
        // Conflicted with Gtk.Widget.get_settings
        get_settings(...args: never[]): any;
        /**
         * Asynchronously retrieves a snapshot of `web_view` for `region`.
         *
         * `options` specifies how the snapshot should be rendered.
         *
         * When the operation is finished, `callback` will be called. You must
         * call webkit_web_view_get_snapshot_finish() to get the result of the
         * operation.
         * @param region the #WebKitSnapshotRegion for this snapshot
         * @param options #WebKitSnapshotOptions for the snapshot
         * @param cancellable a #GCancellable
         */
        get_snapshot(
            region: SnapshotRegion | null,
            options: SnapshotOptions | null,
            cancellable?: Gio.Cancellable | null,
        ): Promise<cairo.Surface>;
        /**
         * Asynchronously retrieves a snapshot of `web_view` for `region`.
         *
         * `options` specifies how the snapshot should be rendered.
         *
         * When the operation is finished, `callback` will be called. You must
         * call webkit_web_view_get_snapshot_finish() to get the result of the
         * operation.
         * @param region the #WebKitSnapshotRegion for this snapshot
         * @param options #WebKitSnapshotOptions for the snapshot
         * @param cancellable a #GCancellable
         * @param callback a #GAsyncReadyCallback
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
         * call webkit_web_view_get_snapshot_finish() to get the result of the
         * operation.
         * @param region the #WebKitSnapshotRegion for this snapshot
         * @param options #WebKitSnapshotOptions for the snapshot
         * @param cancellable a #GCancellable
         * @param callback a #GAsyncReadyCallback
         */
        get_snapshot(
            region: SnapshotRegion | null,
            options: SnapshotOptions | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<cairo.Surface> | void;
        /**
         * Finishes an asynchronous operation started with webkit_web_view_get_snapshot().
         * @param result a #GAsyncResult
         * @returns an image with the retrieved snapshot, or %NULL in case of error.
         */
        get_snapshot_finish(result: Gio.AsyncResult): cairo.Surface;
        /**
         * Gets the value of the #WebKitWebView:title property.
         *
         * You can connect to notify::title signal of `web_view` to
         * be notified when the title has been received.
         * @returns The main frame document title of @web_view.
         */
        get_title(): string;
        /**
         * Retrieves the #GTlsCertificate associated with the main resource of `web_view`.
         *
         * Retrieves the #GTlsCertificate associated with the main resource of `web_view,`
         * and the #GTlsCertificateFlags showing what problems, if any, have been found
         * with that certificate.
         * If the connection is not HTTPS, this function returns %FALSE.
         * This function should be called after a response has been received from the
         * server, so you can connect to #WebKitWebView::load-changed and call this function
         * when it's emitted with %WEBKIT_LOAD_COMMITTED event.
         *
         * Note that this function provides no information about the security of the web
         * page if the current #WebKitTLSErrorsPolicy is %WEBKIT_TLS_ERRORS_POLICY_IGNORE,
         * as subresources of the page may be controlled by an attacker. This function
         * may safely be used to determine the security status of the current page only
         * if the current #WebKitTLSErrorsPolicy is %WEBKIT_TLS_ERRORS_POLICY_FAIL, in
         * which case subresources that fail certificate verification will be blocked.
         * @returns %TRUE if the @web_view connection uses HTTPS and a response has been received    from the server, or %FALSE otherwise.
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
         *   When nothing has been loaded yet on `web_view` the active URI is %NULL.
         * </para></listitem>
         * <listitem><para>
         *   When a new load operation starts the active URI is the requested URI:
         *   <itemizedlist>
         *   <listitem><para>
         *     If the load operation was started by webkit_web_view_load_uri(),
         *     the requested URI is the given one.
         *   </para></listitem>
         *   <listitem><para>
         *     If the load operation was started by webkit_web_view_load_html(),
         *     the requested URI is "about:blank".
         *   </para></listitem>
         *   <listitem><para>
         *     If the load operation was started by webkit_web_view_load_alternate_html(),
         *     the requested URI is content URI provided.
         *   </para></listitem>
         *   <listitem><para>
         *     If the load operation was started by webkit_web_view_go_back() or
         *     webkit_web_view_go_forward(), the requested URI is the original URI
         *     of the previous/next item in the #WebKitBackForwardList of `web_view`.
         *   </para></listitem>
         *   <listitem><para>
         *     If the load operation was started by
         *     webkit_web_view_go_to_back_forward_list_item(), the requested URI
         *     is the opriginal URI of the given #WebKitBackForwardListItem.
         *   </para></listitem>
         *   </itemizedlist>
         * </para></listitem>
         * <listitem><para>
         *   If there is a server redirection during the load operation,
         *   the active URI is the redirected URI. When the signal
         *   #WebKitWebView::load-changed is emitted with %WEBKIT_LOAD_REDIRECTED
         *   event, the active URI is already updated to the redirected URI.
         * </para></listitem>
         * <listitem><para>
         *   When the signal #WebKitWebView::load-changed is emitted
         *   with %WEBKIT_LOAD_COMMITTED event, the active URI is the final
         *   one and it will not change unless a new load operation is started
         *   or a navigation action within the same page is performed.
         * </para></listitem>
         * </orderedlist>
         *
         * You can monitor the active URI by connecting to the notify::uri
         * signal of `web_view`.
         * @returns the current active URI of @web_view or %NULL    if nothing has been loaded yet.
         */
        get_uri(): string;
        /**
         * Gets the user content manager associated to `web_view`.
         * @returns the #WebKitUserContentManager associated with the view
         */
        get_user_content_manager(): UserContentManager;
        /**
         * Get the view's #WebKitWebExtensionMode.
         * @returns the #WebKitWebExtensionMode
         */
        get_web_extension_mode(): WebExtensionMode;
        /**
         * Get the #WebKitWebsiteDataManager associated to `web_view`.
         *
         * If `web_view` is not ephemeral,
         * the returned #WebKitWebsiteDataManager will be the same as the #WebKitWebsiteDataManager
         * of `web_view'`s #WebKitWebContext.
         * @returns a #WebKitWebsiteDataManager
         */
        get_website_data_manager(): WebsiteDataManager;
        /**
         * Gets the default website policies.
         *
         * Gets the default website policies set on construction in the
         * `web_view`. These can be overridden on a per-origin basis via the
         * #WebKitWebView::decide-policy signal handler.
         *
         * See also webkit_policy_decision_use_with_policies().
         * @returns the default #WebKitWebsitePolicies     associated with the view.
         */
        get_website_policies(): WebsitePolicies;
        /**
         * Get the #WebKitWindowProperties object.
         *
         * Get the #WebKitWindowProperties object containing the properties
         * that the window containing `web_view` should have.
         * @returns the #WebKitWindowProperties of @web_view
         */
        get_window_properties(): WindowProperties;
        /**
         * Set the zoom level of `web_view`.
         *
         * Get the zoom level of `web_view,` i.e. the factor by which the
         * view contents are scaled with respect to their original size.
         * @returns the current zoom level of @web_view
         */
        get_zoom_level(): number;
        /**
         * Loads the previous history item.
         *
         * You can monitor the load operation by connecting to
         * #WebKitWebView::load-changed signal.
         */
        go_back(): void;
        /**
         * Loads the next history item.
         *
         * You can monitor the load operation by connecting to
         * #WebKitWebView::load-changed signal.
         */
        go_forward(): void;
        /**
         * Loads the specific history item `list_item`.
         *
         * You can monitor the load operation by connecting to
         * #WebKitWebView::load-changed signal.
         * @param list_item a #WebKitBackForwardListItem
         */
        go_to_back_forward_list_item(list_item: BackForwardListItem): void;
        /**
         * Gets whether the user is allowed to edit the HTML document.
         *
         * When `web_view` is not editable an element in the HTML document can only be edited if the
         * CONTENTEDITABLE attribute has been set on the element or one of its parent
         * elements. By default a #WebKitWebView is not editable.
         * @returns %TRUE if the user is allowed to edit the HTML document, or %FALSE otherwise.
         */
        is_editable(): boolean;
        /**
         * Load the given `content` string for the URI `content_uri`.
         *
         * This allows clients to display page-loading errors in the #WebKitWebView itself.
         * When this method is called from #WebKitWebView::load-failed signal to show an
         * error page, then the back-forward list is maintained appropriately.
         * For everything else this method works the same way as webkit_web_view_load_html().
         * @param content the new content to display as the main page of the @web_view
         * @param content_uri the URI for the alternate page content
         * @param base_uri the base URI for relative locations or %NULL
         */
        load_alternate_html(content: string, content_uri: string, base_uri?: string | null): void;
        /**
         * Load the specified `bytes` into `web_view` using the given `mime_type` and `encoding`.
         *
         * When `mime_type` is %NULL, it defaults to "text/html".
         * When `encoding` is %NULL, it defaults to "UTF-8".
         * When `base_uri` is %NULL, it defaults to "about:blank".
         * You can monitor the load operation by connecting to #WebKitWebView::load-changed signal.
         * @param bytes input data to load
         * @param mime_type the MIME type of @bytes, or %NULL
         * @param encoding the character encoding of @bytes, or %NULL
         * @param base_uri the base URI for relative locations or %NULL
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
         * If `base_uri` is not %NULL, relative URLs in the `content` will be
         * resolved against `base_uri` and absolute local paths must be children of the `base_uri`.
         * For security reasons absolute local paths that are not children of `base_uri`
         * will cause the web process to terminate.
         * If you need to include URLs in `content` that are local paths in a different
         * directory than `base_uri` you can build a data URI for them. When `base_uri` is %NULL,
         * it defaults to "about:blank". The mime type of the document will be "text/html".
         * You can monitor the load operation by connecting to #WebKitWebView::load-changed signal.
         * @param content The HTML string to load
         * @param base_uri The base URI for relative locations or %NULL
         */
        load_html(content: string, base_uri?: string | null): void;
        /**
         * Load the specified `plain_text` string into `web_view`.
         *
         * The mime type of document will be "text/plain". You can monitor the load
         * operation by connecting to #WebKitWebView::load-changed signal.
         * @param plain_text The plain text to load
         */
        load_plain_text(plain_text: string): void;
        /**
         * Requests loading of the specified #WebKitURIRequest.
         *
         * You can monitor the load operation by connecting to
         * #WebKitWebView::load-changed signal.
         * @param request a #WebKitURIRequest to load
         */
        load_request(request: URIRequest): void;
        /**
         * Requests loading of the specified URI string.
         *
         * You can monitor the load operation by connecting to
         * #WebKitWebView::load-changed signal.
         * @param uri an URI string
         */
        load_uri(uri: string): void;
        /**
         * Reloads the current contents of `web_view`.
         *
         * See also webkit_web_view_reload_bypass_cache().
         */
        reload(): void;
        /**
         * Reloads the current contents of `web_view` without
         * using any cached data.
         */
        reload_bypass_cache(): void;
        /**
         * Restore the `web_view` session state from `state`
         * @param state a #WebKitWebViewSessionState
         */
        restore_session_state(state: WebViewSessionState): void;
        /**
         * Asynchronously run `body` in the script world with name `world_name` of the current page context in
         * `web_view`. If WebKitSettings:enable-javascript is FALSE, this method will do nothing. This API
         * differs from webkit_web_view_run_javascript_in_world() in that the JavaScript function can return a
         * Promise and its result will be properly passed to the callback.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_web_view_run_javascript_in_world_finish() to get the result of the operation.
         *
         * For instance here is a dummy example that shows how to pass arguments to a JS function that
         * returns a Promise that resolves with the passed argument:
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
         *     if (jsc_value_is_number (value)) {
         *         gint32        int_value = jsc_value_to_string (value);
         *         JSCException *exception = jsc_context_get_exception (jsc_value_get_context (value));
         *         if (exception)
         *             g_warning ("Error running javascript: %s", jsc_exception_get_message (exception));
         *         else
         *             g_print ("Script result: %d\n", int_value);
         *         g_free (str_value);
         *     } else {
         *         g_warning ("Error running javascript: unexpected return value");
         *     }
         *     webkit_javascript_result_unref (js_result);
         * }
         *
         * static void
         * web_view_evaluate_promise (WebKitWebView *web_view)
         * {
         *     GVariantDict dict;
         *     g_variant_dict_init (&dict, NULL);
         *     g_variant_dict_insert (&dict, "count", "u", 42);
         *     GVariant *args = g_variant_dict_end (&dict);
         *     const gchar *body = "return new Promise((resolve) => { resolve(count); });";
         *     webkit_web_view_run_async_javascript_function_in_world (web_view, body, arguments, NULL, NULL, web_view_javascript_finished, NULL);
         * }
         * ```
         * @param body the JavaScript function body
         * @param _arguments a #GVariant with format `{&sv}` storing the function arguments. Function argument values must be one of the following types, or contain only the following GVariant types: number, string, array, and dictionary.
         * @param world_name the name of a #WebKitScriptWorld, if no name (i.e. %NULL) is provided, the default world is used. Any value that is not %NULL is a distinct world.
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the script finished
         */
        run_async_javascript_function_in_world(
            body: string,
            _arguments: GLib.Variant,
            world_name?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously run `script` in the context of the current page in `web_view`.
         *
         * If WebKitSettings:enable-javascript is FALSE, this method will do nothing.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_web_view_run_javascript_finish() to get the result of the operation.
         * @param script the script to run
         * @param cancellable a #GCancellable or %NULL to ignore
         */
        run_javascript(script: string, cancellable?: Gio.Cancellable | null): Promise<JavascriptResult>;
        /**
         * Asynchronously run `script` in the context of the current page in `web_view`.
         *
         * If WebKitSettings:enable-javascript is FALSE, this method will do nothing.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_web_view_run_javascript_finish() to get the result of the operation.
         * @param script the script to run
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the script finished
         */
        run_javascript(
            script: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously run `script` in the context of the current page in `web_view`.
         *
         * If WebKitSettings:enable-javascript is FALSE, this method will do nothing.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_web_view_run_javascript_finish() to get the result of the operation.
         * @param script the script to run
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the script finished
         */
        run_javascript(
            script: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<JavascriptResult> | void;
        /**
         * Finish an asynchronous operation started with webkit_web_view_run_javascript().
         *
         * This is an example of using webkit_web_view_run_javascript() with a script returning
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
         * @param result a #GAsyncResult
         * @returns a #WebKitJavascriptResult with the result of the last executed statement in @script    or %NULL in case of error
         */
        run_javascript_finish(result: Gio.AsyncResult): JavascriptResult;
        /**
         * Asynchronously run the script from `resource`.
         *
         * Asynchronously run the script from `resource` in the context of the
         * current page in `web_view`.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call webkit_web_view_run_javascript_from_gresource_finish() to get the result
         * of the operation.
         * @param resource the location of the resource to load
         * @param cancellable a #GCancellable or %NULL to ignore
         */
        run_javascript_from_gresource(
            resource: string,
            cancellable?: Gio.Cancellable | null,
        ): Promise<JavascriptResult>;
        /**
         * Asynchronously run the script from `resource`.
         *
         * Asynchronously run the script from `resource` in the context of the
         * current page in `web_view`.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call webkit_web_view_run_javascript_from_gresource_finish() to get the result
         * of the operation.
         * @param resource the location of the resource to load
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the script finished
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
         * then call webkit_web_view_run_javascript_from_gresource_finish() to get the result
         * of the operation.
         * @param resource the location of the resource to load
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the script finished
         */
        run_javascript_from_gresource(
            resource: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<JavascriptResult> | void;
        /**
         * Finish an asynchronous operation started with webkit_web_view_run_javascript_from_gresource().
         *
         * Check webkit_web_view_run_javascript_finish() for a usage example.
         * @param result a #GAsyncResult
         * @returns a #WebKitJavascriptResult with the result of the last executed statement in @script    or %NULL in case of error
         */
        run_javascript_from_gresource_finish(result: Gio.AsyncResult): JavascriptResult;
        /**
         * Asynchronously run `script` in the script world.
         *
         * Asynchronously run `script` in the script world with name `world_name` of the current page context in `web_view`.
         * If WebKitSettings:enable-javascript is FALSE, this method will do nothing.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_web_view_run_javascript_in_world_finish() to get the result of the operation.
         * @param script the script to run
         * @param world_name the name of a #WebKitScriptWorld
         * @param cancellable a #GCancellable or %NULL to ignore
         */
        run_javascript_in_world(
            script: string,
            world_name: string,
            cancellable?: Gio.Cancellable | null,
        ): Promise<JavascriptResult>;
        /**
         * Asynchronously run `script` in the script world.
         *
         * Asynchronously run `script` in the script world with name `world_name` of the current page context in `web_view`.
         * If WebKitSettings:enable-javascript is FALSE, this method will do nothing.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_web_view_run_javascript_in_world_finish() to get the result of the operation.
         * @param script the script to run
         * @param world_name the name of a #WebKitScriptWorld
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the script finished
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
         * webkit_web_view_run_javascript_in_world_finish() to get the result of the operation.
         * @param script the script to run
         * @param world_name the name of a #WebKitScriptWorld
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the script finished
         */
        run_javascript_in_world(
            script: string,
            world_name: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<JavascriptResult> | void;
        /**
         * Finish an asynchronous operation started with webkit_web_view_run_javascript_in_world().
         * @param result a #GAsyncResult
         * @returns a #WebKitJavascriptResult with the result of the last executed statement in @script    or %NULL in case of error
         */
        run_javascript_in_world_finish(result: Gio.AsyncResult): JavascriptResult;
        /**
         * Asynchronously save the current web page.
         *
         * Asynchronously save the current web page associated to the
         * #WebKitWebView into a self-contained format using the mode
         * specified in `save_mode`.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call webkit_web_view_save_finish() to get the result of the
         * operation.
         * @param save_mode the #WebKitSaveMode specifying how the web page should be saved.
         * @param cancellable a #GCancellable or %NULL to ignore
         */
        save(save_mode: SaveMode | null, cancellable?: Gio.Cancellable | null): Promise<Gio.InputStream>;
        /**
         * Asynchronously save the current web page.
         *
         * Asynchronously save the current web page associated to the
         * #WebKitWebView into a self-contained format using the mode
         * specified in `save_mode`.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call webkit_web_view_save_finish() to get the result of the
         * operation.
         * @param save_mode the #WebKitSaveMode specifying how the web page should be saved.
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
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
         * #WebKitWebView into a self-contained format using the mode
         * specified in `save_mode`.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call webkit_web_view_save_finish() to get the result of the
         * operation.
         * @param save_mode the #WebKitSaveMode specifying how the web page should be saved.
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        save(
            save_mode: SaveMode | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<Gio.InputStream> | void;
        /**
         * Finish an asynchronous operation started with webkit_web_view_save().
         * @param result a #GAsyncResult
         * @returns a #GInputStream with the result of saving    the current web page or %NULL in case of error.
         */
        save_finish(result: Gio.AsyncResult): Gio.InputStream;
        /**
         * Asynchronously save the current web page.
         *
         * Asynchronously save the current web page associated to the
         * #WebKitWebView into a self-contained format using the mode
         * specified in `save_mode` and writing it to `file`.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call webkit_web_view_save_to_file_finish() to get the result of the
         * operation.
         * @param file the #GFile where the current web page should be saved to.
         * @param save_mode the #WebKitSaveMode specifying how the web page should be saved.
         * @param cancellable a #GCancellable or %NULL to ignore
         */
        save_to_file(
            file: Gio.File,
            save_mode: SaveMode | null,
            cancellable?: Gio.Cancellable | null,
        ): Promise<boolean>;
        /**
         * Asynchronously save the current web page.
         *
         * Asynchronously save the current web page associated to the
         * #WebKitWebView into a self-contained format using the mode
         * specified in `save_mode` and writing it to `file`.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call webkit_web_view_save_to_file_finish() to get the result of the
         * operation.
         * @param file the #GFile where the current web page should be saved to.
         * @param save_mode the #WebKitSaveMode specifying how the web page should be saved.
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
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
         * #WebKitWebView into a self-contained format using the mode
         * specified in `save_mode` and writing it to `file`.
         *
         * When the operation is finished, `callback` will be called. You can
         * then call webkit_web_view_save_to_file_finish() to get the result of the
         * operation.
         * @param file the #GFile where the current web page should be saved to.
         * @param save_mode the #WebKitSaveMode specifying how the web page should be saved.
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        save_to_file(
            file: Gio.File,
            save_mode: SaveMode | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        /**
         * Finish an asynchronous operation started with webkit_web_view_save_to_file().
         * @param result a #GAsyncResult
         * @returns %TRUE if the web page was successfully saved to a file or %FALSE otherwise.
         */
        save_to_file_finish(result: Gio.AsyncResult): boolean;
        /**
         * Send `message` to the #WebKitWebPage corresponding to `web_view`.
         *
         * If `message` is floating, it's consumed.
         * If you don't expect any reply, or you simply want to ignore it, you can pass %NULL as `callback`.
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_web_view_send_message_to_page_finish() to get the message reply.
         * @param message a #WebKitUserMessage
         * @param cancellable a #GCancellable or %NULL to ignore
         */
        send_message_to_page(message: UserMessage, cancellable?: Gio.Cancellable | null): Promise<UserMessage>;
        /**
         * Send `message` to the #WebKitWebPage corresponding to `web_view`.
         *
         * If `message` is floating, it's consumed.
         * If you don't expect any reply, or you simply want to ignore it, you can pass %NULL as `callback`.
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_web_view_send_message_to_page_finish() to get the message reply.
         * @param message a #WebKitUserMessage
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback (nullable): A #GAsyncReadyCallback to call when the request is satisfied or %NULL
         */
        send_message_to_page(
            message: UserMessage,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Send `message` to the #WebKitWebPage corresponding to `web_view`.
         *
         * If `message` is floating, it's consumed.
         * If you don't expect any reply, or you simply want to ignore it, you can pass %NULL as `callback`.
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_web_view_send_message_to_page_finish() to get the message reply.
         * @param message a #WebKitUserMessage
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback (nullable): A #GAsyncReadyCallback to call when the request is satisfied or %NULL
         */
        send_message_to_page(
            message: UserMessage,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<UserMessage> | void;
        /**
         * Finish an asynchronous operation started with webkit_web_view_send_message_to_page().
         * @param result a #GAsyncResult
         * @returns a #WebKitUserMessage with the reply or %NULL in case of error.
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
         * #GtkWidget:app-paintable property set to %TRUE for backgrounds colors to work.
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
         * @param rgba a #GdkRGBA
         */
        set_background_color(rgba: Gdk.RGBA): void;
        /**
         * Set the camera capture state of a #WebKitWebView.
         *
         * If #WebKitSettings:enable-mediastream is %FALSE, this method will have no visible effect. Once the
         * state of the device has been set to %WEBKIT_MEDIA_CAPTURE_STATE_NONE it cannot be changed
         * anymore. The page can however request capture again using the mediaDevices API.
         * @param state a #WebKitMediaCaptureState
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
         * @param allowlist an allowlist of URI patterns, or %NULL
         */
        set_cors_allowlist(allowlist?: string[] | null): void;
        /**
         * Sets the current custom character encoding override of `web_view`.
         *
         * The custom character encoding will override any text encoding detected via HTTP headers or
         * META tags. Calling this method will stop any current load operation and reload the
         * current page. Setting the custom character encoding to %NULL removes the character
         * encoding override.
         * @param charset a character encoding name or %NULL
         */
        set_custom_charset(charset?: string | null): void;
        /**
         * Set the display capture state of a #WebKitWebView.
         *
         * If #WebKitSettings:enable-mediastream is %FALSE, this method will have no visible effect. Once the
         * state of the device has been set to %WEBKIT_MEDIA_CAPTURE_STATE_NONE it cannot be changed
         * anymore. The page can however request capture again using the mediaDevices API.
         * @param state a #WebKitMediaCaptureState
         */
        set_display_capture_state(state: MediaCaptureState | null): void;
        /**
         * Sets whether the user is allowed to edit the HTML document.
         *
         * If `editable` is %TRUE, `web_view` allows the user to edit the HTML document. If
         * `editable` is %FALSE, an element in `web_view'`s document can only be edited if the
         * CONTENTEDITABLE attribute has been set on the element or one of its parent
         * elements. By default a #WebKitWebView is not editable.
         *
         * Normally, a HTML document is not editable unless the elements within the
         * document are editable. This function provides a way to make the contents
         * of a #WebKitWebView editable without altering the document or DOM structure.
         * @param editable a #gboolean indicating the editable state
         */
        set_editable(editable: boolean): void;
        /**
         * Set the #WebKitInputMethodContext to be used by `web_view`.
         *
         * Set the #WebKitInputMethodContext to be used by `web_view,` or %NULL to not use any input method.
         * Note that the same #WebKitInputMethodContext can't be set on more than one #WebKitWebView at the same time.
         * @param context the #WebKitInputMethodContext to set, or %NULL
         */
        set_input_method_context(context?: InputMethodContext | null): void;
        /**
         * Sets the mute state of `web_view`.
         * @param muted mute flag
         */
        set_is_muted(muted: boolean): void;
        /**
         * Set the microphone capture state of a #WebKitWebView.
         *
         * If #WebKitSettings:enable-mediastream is %FALSE, this method will have no visible effect. Once the
         * state of the device has been set to %WEBKIT_MEDIA_CAPTURE_STATE_NONE it cannot be changed
         * anymore. The page can however request capture again using the mediaDevices API.
         * @param state a #WebKitMediaCaptureState
         */
        set_microphone_capture_state(state: MediaCaptureState | null): void;
        /**
         * Sets the #WebKitSettings to be applied to `web_view`.
         *
         * The
         * existing #WebKitSettings of `web_view` will be replaced by
         * `settings`. New settings are applied immediately on `web_view`.
         * The same #WebKitSettings object can be shared
         * by multiple #WebKitWebView<!-- -->s.
         * @param settings a #WebKitSettings
         */
        set_settings(settings: Settings): void;
        /**
         * Set the zoom level of `web_view`.
         *
         * Set the zoom level of `web_view,` i.e. the factor by which the
         * view contents are scaled with respect to their original size.
         * @param zoom_level the zoom level
         */
        set_zoom_level(zoom_level: number): void;
        /**
         * Stops any ongoing loading operation in `web_view`.
         *
         * This method does nothing if no content is being loaded.
         * If there is a loading operation in progress, it will be cancelled and
         * #WebKitWebView::load-failed signal will be emitted with
         * %WEBKIT_NETWORK_ERROR_CANCELLED error.
         */
        stop_loading(): void;
        /**
         * Terminates the web process associated to `web_view`.
         *
         * When the web process gets terminated
         * using this method, the #WebKitWebView::web-process-terminated signal is emitted with
         * %WEBKIT_WEB_PROCESS_TERMINATED_BY_API as the reason for termination.
         */
        terminate_web_process(): void;
        /**
         * Tries to close the `web_view`.
         *
         * This will fire the onbeforeunload event
         * to ask the user for confirmation to close the page. If there isn't an
         * onbeforeunload event handler or the user confirms to close the page,
         * the #WebKitWebView::close signal is emitted, otherwise nothing happens.
         */
        try_close(): void;

        // Inherited methods
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
        interface SignalSignatures extends Gtk.Container.SignalSignatures {
            'notify::border-width': GObject.Object.Notify;
            'notify::child': GObject.Object.Notify;
            'notify::resize-mode': GObject.Object.Notify;
            'notify::app-paintable': GObject.Object.Notify;
            'notify::can-default': GObject.Object.Notify;
            'notify::can-focus': GObject.Object.Notify;
            'notify::composite-child': GObject.Object.Notify;
            'notify::double-buffered': GObject.Object.Notify;
            'notify::events': GObject.Object.Notify;
            'notify::expand': GObject.Object.Notify;
            'notify::focus-on-click': GObject.Object.Notify;
            'notify::halign': GObject.Object.Notify;
            'notify::has-default': GObject.Object.Notify;
            'notify::has-focus': GObject.Object.Notify;
            'notify::has-tooltip': GObject.Object.Notify;
            'notify::height-request': GObject.Object.Notify;
            'notify::hexpand': GObject.Object.Notify;
            'notify::hexpand-set': GObject.Object.Notify;
            'notify::is-focus': GObject.Object.Notify;
            'notify::margin': GObject.Object.Notify;
            'notify::margin-bottom': GObject.Object.Notify;
            'notify::margin-end': GObject.Object.Notify;
            'notify::margin-left': GObject.Object.Notify;
            'notify::margin-right': GObject.Object.Notify;
            'notify::margin-start': GObject.Object.Notify;
            'notify::margin-top': GObject.Object.Notify;
            'notify::name': GObject.Object.Notify;
            'notify::no-show-all': GObject.Object.Notify;
            'notify::opacity': GObject.Object.Notify;
            'notify::parent': GObject.Object.Notify;
            'notify::receives-default': GObject.Object.Notify;
            'notify::scale-factor': GObject.Object.Notify;
            'notify::sensitive': GObject.Object.Notify;
            'notify::style': GObject.Object.Notify;
            'notify::tooltip-markup': GObject.Object.Notify;
            'notify::tooltip-text': GObject.Object.Notify;
            'notify::valign': GObject.Object.Notify;
            'notify::vexpand': GObject.Object.Notify;
            'notify::vexpand-set': GObject.Object.Notify;
            'notify::visible': GObject.Object.Notify;
            'notify::width-request': GObject.Object.Notify;
            'notify::window': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Container.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
    }

    class WebViewBase extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<WebViewBase>;

        // Constructors

        constructor(properties?: Partial<WebViewBase.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof WebViewBase.SignalSignatures>(
            signal: K,
            callback: WebViewBase.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebViewBase.SignalSignatures>(
            signal: K,
            callback: WebViewBase.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebViewBase.SignalSignatures>(
            signal: K,
            ...args: WebViewBase.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited methods
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
     */
    class WebsiteDataAccessPermissionRequest extends GObject.Object implements PermissionRequest {
        static $gtype: GObject.GType<WebsiteDataAccessPermissionRequest>;

        // Constructors

        constructor(properties?: Partial<WebsiteDataAccessPermissionRequest.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof WebsiteDataAccessPermissionRequest.SignalSignatures>(
            signal: K,
            callback: WebsiteDataAccessPermissionRequest.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebsiteDataAccessPermissionRequest.SignalSignatures>(
            signal: K,
            callback: WebsiteDataAccessPermissionRequest.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebsiteDataAccessPermissionRequest.SignalSignatures>(
            signal: K,
            ...args: WebsiteDataAccessPermissionRequest.SignalSignatures[K] extends (...args: infer P) => any
                ? P
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

        // Inherited methods
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
         */
        vfunc_allow(): void;
        /**
         * Deny the action which triggered this request.
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
            'notify::base-cache-directory': GObject.Object.Notify;
            'notify::base-data-directory': GObject.Object.Notify;
            'notify::disk-cache-directory': GObject.Object.Notify;
            'notify::dom-cache-directory': GObject.Object.Notify;
            'notify::hsts-cache-directory': GObject.Object.Notify;
            'notify::indexeddb-directory': GObject.Object.Notify;
            'notify::is-ephemeral': GObject.Object.Notify;
            'notify::itp-directory': GObject.Object.Notify;
            'notify::local-storage-directory': GObject.Object.Notify;
            'notify::offline-application-cache-directory': GObject.Object.Notify;
            'notify::origin-storage-ratio': GObject.Object.Notify;
            'notify::service-worker-registrations-directory': GObject.Object.Notify;
            'notify::total-storage-ratio': GObject.Object.Notify;
            'notify::websql-directory': GObject.Object.Notify;
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
            origin_storage_ratio: number;
            originStorageRatio: number;
            service_worker_registrations_directory: string;
            serviceWorkerRegistrationsDirectory: string;
            total_storage_ratio: number;
            totalStorageRatio: number;
            websql_directory: string;
            websqlDirectory: string;
        }
    }

    /**
     * Manages data stored locally by web sites.
     *
     * You can use WebKitWebsiteDataManager to configure the local directories
     * where website data will be stored. Use #WebKitWebsiteDataManager:base-data-directory
     * and #WebKitWebsiteDataManager:base-cache-directory set a common base directory for all
     * website data and caches.
     *
     * A WebKitWebsiteDataManager can be ephemeral, in which case all the directory configuration
     * is not needed because website data will never persist. You can create an ephemeral WebKitWebsiteDataManager
     * with webkit_website_data_manager_new_ephemeral().
     *
     * WebKitWebsiteDataManager can also be used to fetch website data, remove data
     * stored by particular websites, or clear data for all websites modified since a given
     * period of time.
     */
    class WebsiteDataManager extends GObject.Object {
        static $gtype: GObject.GType<WebsiteDataManager>;

        // Properties

        /**
         * The base directory for caches. If %NULL, a default location will be used.
         */
        get base_cache_directory(): string;
        /**
         * The base directory for caches. If %NULL, a default location will be used.
         */
        get baseCacheDirectory(): string;
        /**
         * The base directory for website data. If %NULL, a default location will be used.
         */
        get base_data_directory(): string;
        /**
         * The base directory for website data. If %NULL, a default location will be used.
         */
        get baseDataDirectory(): string;
        /**
         * The directory where HTTP disk cache will be stored.
         */
        get disk_cache_directory(): string;
        /**
         * The directory where HTTP disk cache will be stored.
         */
        get diskCacheDirectory(): string;
        /**
         * The directory where DOM cache will be stored.
         */
        get dom_cache_directory(): string;
        /**
         * The directory where DOM cache will be stored.
         */
        get domCacheDirectory(): string;
        /**
         * The directory where the HTTP Strict-Transport-Security (HSTS) cache will be stored.
         */
        get hsts_cache_directory(): string;
        /**
         * The directory where the HTTP Strict-Transport-Security (HSTS) cache will be stored.
         */
        get hstsCacheDirectory(): string;
        /**
         * The directory where IndexedDB databases will be stored.
         */
        get indexeddb_directory(): string;
        /**
         * The directory where IndexedDB databases will be stored.
         */
        get indexeddbDirectory(): string;
        /**
         * Whether the #WebKitWebsiteDataManager is ephemeral. An ephemeral #WebKitWebsiteDataManager
         * handles all websites data as non-persistent, and nothing will be written to the client
         * storage. Note that if you create an ephemeral #WebKitWebsiteDataManager all other construction
         * parameters to configure data directories will be ignored.
         */
        get is_ephemeral(): boolean;
        /**
         * Whether the #WebKitWebsiteDataManager is ephemeral. An ephemeral #WebKitWebsiteDataManager
         * handles all websites data as non-persistent, and nothing will be written to the client
         * storage. Note that if you create an ephemeral #WebKitWebsiteDataManager all other construction
         * parameters to configure data directories will be ignored.
         */
        get isEphemeral(): boolean;
        /**
         * The directory where Intelligent Tracking Prevention (ITP) data will be stored.
         */
        get itp_directory(): string;
        /**
         * The directory where Intelligent Tracking Prevention (ITP) data will be stored.
         */
        get itpDirectory(): string;
        /**
         * The directory where local storage data will be stored.
         */
        get local_storage_directory(): string;
        /**
         * The directory where local storage data will be stored.
         */
        get localStorageDirectory(): string;
        /**
         * The directory where offline web application cache will be stored.
         */
        get offline_application_cache_directory(): string;
        /**
         * The directory where offline web application cache will be stored.
         */
        get offlineApplicationCacheDirectory(): string;
        /**
         * The percentage of volume space that can be used for data storage for every domain.
         * If the maximum storage is reached the storage request will fail with a QuotaExceededError exception.
         * A value of 0.0 means that data storage is not allowed. A value of -1.0, which is the default,
         * means WebKit will use the default quota (1 GiB).
         */
        set origin_storage_ratio(val: number);
        /**
         * The percentage of volume space that can be used for data storage for every domain.
         * If the maximum storage is reached the storage request will fail with a QuotaExceededError exception.
         * A value of 0.0 means that data storage is not allowed. A value of -1.0, which is the default,
         * means WebKit will use the default quota (1 GiB).
         */
        set originStorageRatio(val: number);
        /**
         * The directory where service workers registrations will be stored.
         */
        get service_worker_registrations_directory(): string;
        /**
         * The directory where service workers registrations will be stored.
         */
        get serviceWorkerRegistrationsDirectory(): string;
        /**
         * The percentage of volume space that can be used for data storage for all domains.
         * If the maximum storage is reached the eviction will happen.
         * A value of 0.0 means that data storage is not allowed. A value of -1.0, which is the default,
         * means there's no limit for the total storage.
         */
        set total_storage_ratio(val: number);
        /**
         * The percentage of volume space that can be used for data storage for all domains.
         * If the maximum storage is reached the eviction will happen.
         * A value of 0.0 means that data storage is not allowed. A value of -1.0, which is the default,
         * means there's no limit for the total storage.
         */
        set totalStorageRatio(val: number);
        /**
         * The directory where WebSQL databases will be stored.
         */
        get websql_directory(): string;
        /**
         * The directory where WebSQL databases will be stored.
         */
        get websqlDirectory(): string;

        // Constructors

        constructor(properties?: Partial<WebsiteDataManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_ephemeral(): WebsiteDataManager;

        // Signals

        connect<K extends keyof WebsiteDataManager.SignalSignatures>(
            signal: K,
            callback: WebsiteDataManager.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebsiteDataManager.SignalSignatures>(
            signal: K,
            callback: WebsiteDataManager.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebsiteDataManager.SignalSignatures>(
            signal: K,
            ...args: WebsiteDataManager.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Sets `settings` as the #WebKitMemoryPressureSettings.
         *
         * Sets `settings` as the #WebKitMemoryPressureSettings to be used by all the network
         * processes created by any instance of #WebKitWebsiteDataManager after this function
         * is called.
         *
         * Be sure to call this function before creating any #WebKitWebsiteDataManager, as network
         * processes of existing instances are not guaranteed to receive the passed settings.
         *
         * The periodic check for used memory is disabled by default on network processes. This will
         * be enabled only if custom settings have been set using this function. After that, in order
         * to remove the custom settings and disable the periodic check, this function must be called
         * passing %NULL as the value of `settings`.
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
         * webkit_website_data_manager_clear_finish() to get the result of the operation.
         *
         * Due to implementation limitations, this function does not currently delete
         * any stored cookies if `timespan` is nonzero. This behavior may change in the
         * future.
         * @param types #WebKitWebsiteDataTypes
         * @param timespan a #GTimeSpan
         * @param cancellable a #GCancellable or %NULL to ignore
         */
        clear(
            types: WebsiteDataTypes | null,
            timespan: GLib.TimeSpan,
            cancellable?: Gio.Cancellable | null,
        ): Promise<boolean>;
        /**
         * Asynchronously clear the website data of the given `types` modified in the past `timespan`.
         *
         * If `timespan` is 0, all website data will be removed.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_website_data_manager_clear_finish() to get the result of the operation.
         *
         * Due to implementation limitations, this function does not currently delete
         * any stored cookies if `timespan` is nonzero. This behavior may change in the
         * future.
         * @param types #WebKitWebsiteDataTypes
         * @param timespan a #GTimeSpan
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
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
         * webkit_website_data_manager_clear_finish() to get the result of the operation.
         *
         * Due to implementation limitations, this function does not currently delete
         * any stored cookies if `timespan` is nonzero. This behavior may change in the
         * future.
         * @param types #WebKitWebsiteDataTypes
         * @param timespan a #GTimeSpan
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        clear(
            types: WebsiteDataTypes | null,
            timespan: GLib.TimeSpan,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        /**
         * Finish an asynchronous operation started with webkit_website_data_manager_clear()
         * @param result a #GAsyncResult
         * @returns %TRUE if website data was successfully cleared, or %FALSE otherwise.
         */
        clear_finish(result: Gio.AsyncResult): boolean;
        /**
         * Asynchronously get the list of #WebKitWebsiteData for the given `types`.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_website_data_manager_fetch_finish() to get the result of the operation.
         * @param types #WebKitWebsiteDataTypes
         * @param cancellable a #GCancellable or %NULL to ignore
         */
        fetch(types: WebsiteDataTypes | null, cancellable?: Gio.Cancellable | null): Promise<WebsiteData[]>;
        /**
         * Asynchronously get the list of #WebKitWebsiteData for the given `types`.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_website_data_manager_fetch_finish() to get the result of the operation.
         * @param types #WebKitWebsiteDataTypes
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        fetch(
            types: WebsiteDataTypes | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously get the list of #WebKitWebsiteData for the given `types`.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_website_data_manager_fetch_finish() to get the result of the operation.
         * @param types #WebKitWebsiteDataTypes
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        fetch(
            types: WebsiteDataTypes | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<WebsiteData[]> | void;
        /**
         * Finish an asynchronous operation started with webkit_website_data_manager_fetch().
         * @param result a #GAsyncResult
         * @returns a #GList of #WebKitWebsiteData. You must free the #GList with    g_list_free() and unref the #WebKitWebsiteData<!-- -->s with webkit_website_data_unref() when you're done with them.
         */
        fetch_finish(result: Gio.AsyncResult): WebsiteData[];
        /**
         * Get the #WebKitWebsiteDataManager:base-cache-directory property.
         * @returns the base directory for caches, or %NULL if    #WebKitWebsiteDataManager:base-cache-directory was not provided or @manager is ephemeral.
         */
        get_base_cache_directory(): string | null;
        /**
         * Get the #WebKitWebsiteDataManager:base-data-directory property.
         * @returns the base directory for website data, or %NULL if    #WebKitWebsiteDataManager:base-data-directory was not provided or @manager is ephemeral.
         */
        get_base_data_directory(): string | null;
        /**
         * Get the #WebKitCookieManager of `manager`.
         * @returns a #WebKitCookieManager
         */
        get_cookie_manager(): CookieManager;
        /**
         * Get the #WebKitWebsiteDataManager:disk-cache-directory property.
         * @returns the directory where HTTP disk cache is stored or %NULL if @manager is ephemeral.
         */
        get_disk_cache_directory(): string | null;
        /**
         * Get the #WebKitWebsiteDataManager:dom-cache-directory property.
         * @returns the directory where DOM cache is stored or %NULL if @manager is ephemeral.
         */
        get_dom_cache_directory(): string | null;
        /**
         * Get the #WebKitWebsiteDataManager:hsts-cache-directory property.
         * @returns the directory where the HSTS cache is stored or %NULL if @manager is ephemeral.
         */
        get_hsts_cache_directory(): string | null;
        /**
         * Get the #WebKitWebsiteDataManager:indexeddb-directory property.
         * @returns the directory where IndexedDB databases are stored or %NULL if @manager is ephemeral.
         */
        get_indexeddb_directory(): string | null;
        /**
         * Get the #WebKitWebsiteDataManager:itp-directory property.
         * @returns the directory where Intelligent Tracking Prevention data is stored or %NULL if @manager is ephemeral.
         */
        get_itp_directory(): string | null;
        /**
         * Get whether Intelligent Tracking Prevention (ITP) is enabled or not.
         * @returns %TRUE if ITP is enabled, or %FALSE otherwise.
         */
        get_itp_enabled(): boolean;
        /**
         * Asynchronously get the list of #WebKitITPThirdParty seen for `manager`.
         *
         * Every #WebKitITPThirdParty
         * contains the list of #WebKitITPFirstParty under which it has been seen.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_website_data_manager_get_itp_summary_finish() to get the result of the operation.
         * @param cancellable a #GCancellable or %NULL to ignore
         */
        get_itp_summary(cancellable?: Gio.Cancellable | null): Promise<ITPThirdParty[]>;
        /**
         * Asynchronously get the list of #WebKitITPThirdParty seen for `manager`.
         *
         * Every #WebKitITPThirdParty
         * contains the list of #WebKitITPFirstParty under which it has been seen.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_website_data_manager_get_itp_summary_finish() to get the result of the operation.
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        get_itp_summary(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously get the list of #WebKitITPThirdParty seen for `manager`.
         *
         * Every #WebKitITPThirdParty
         * contains the list of #WebKitITPFirstParty under which it has been seen.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_website_data_manager_get_itp_summary_finish() to get the result of the operation.
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        get_itp_summary(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<ITPThirdParty[]> | void;
        /**
         * Finish an asynchronous operation started with webkit_website_data_manager_get_itp_summary().
         * @param result a #GAsyncResult
         * @returns a #GList of #WebKitITPThirdParty.    You must free the #GList with g_list_free() and unref the #WebKitITPThirdParty<!-- -->s with    webkit_itp_third_party_unref() when you're done with them.
         */
        get_itp_summary_finish(result: Gio.AsyncResult): ITPThirdParty[];
        /**
         * Get the #WebKitWebsiteDataManager:local-storage-directory property.
         * @returns the directory where local storage data is stored or %NULL if @manager is ephemeral.
         */
        get_local_storage_directory(): string | null;
        /**
         * Get the #WebKitWebsiteDataManager:offline-application-cache-directory property.
         * @returns the directory where offline web application cache is stored or %NULL if @manager is ephemeral.
         */
        get_offline_application_cache_directory(): string | null;
        /**
         * Get whether persistent credential storage is enabled or not.
         *
         * See also webkit_website_data_manager_set_persistent_credential_storage_enabled().
         * @returns %TRUE if persistent credential storage is enabled, or %FALSE otherwise.
         */
        get_persistent_credential_storage_enabled(): boolean;
        /**
         * Get the #WebKitWebsiteDataManager:service-worker-registrations-directory property.
         * @returns the directory where service worker registrations are stored or %NULL if @manager is ephemeral.
         */
        get_service_worker_registrations_directory(): string | null;
        /**
         * Get the TLS errors policy of `manager`.
         * @returns a #WebKitTLSErrorsPolicy
         */
        get_tls_errors_policy(): TLSErrorsPolicy;
        /**
         * Get the #WebKitWebsiteDataManager:websql-directory property.
         * @returns the directory where WebSQL databases are stored or %NULL if @manager is ephemeral.
         */
        get_websql_directory(): string | null;
        /**
         * Asynchronously removes the website data in the given `website_data` list.
         *
         * Asynchronously removes the website data of the given `types` for websites in the given `website_data` list.
         * Use webkit_website_data_manager_clear() if you want to remove the website data for all sites.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_website_data_manager_remove_finish() to get the result of the operation.
         * @param types #WebKitWebsiteDataTypes
         * @param website_data a #GList of #WebKitWebsiteData
         * @param cancellable a #GCancellable or %NULL to ignore
         */
        remove(
            types: WebsiteDataTypes | null,
            website_data: WebsiteData[],
            cancellable?: Gio.Cancellable | null,
        ): Promise<boolean>;
        /**
         * Asynchronously removes the website data in the given `website_data` list.
         *
         * Asynchronously removes the website data of the given `types` for websites in the given `website_data` list.
         * Use webkit_website_data_manager_clear() if you want to remove the website data for all sites.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_website_data_manager_remove_finish() to get the result of the operation.
         * @param types #WebKitWebsiteDataTypes
         * @param website_data a #GList of #WebKitWebsiteData
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
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
         * Use webkit_website_data_manager_clear() if you want to remove the website data for all sites.
         *
         * When the operation is finished, `callback` will be called. You can then call
         * webkit_website_data_manager_remove_finish() to get the result of the operation.
         * @param types #WebKitWebsiteDataTypes
         * @param website_data a #GList of #WebKitWebsiteData
         * @param cancellable a #GCancellable or %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        remove(
            types: WebsiteDataTypes | null,
            website_data: WebsiteData[],
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        /**
         * Finish an asynchronous operation started with webkit_website_data_manager_remove().
         * @param result a #GAsyncResult
         * @returns %TRUE if website data resources were successfully removed, or %FALSE otherwise.
         */
        remove_finish(result: Gio.AsyncResult): boolean;
        /**
         * Enable or disable Intelligent Tracking Prevention (ITP).
         *
         * When ITP is enabled resource load statistics
         * are collected and used to decide whether to allow or block third-party cookies and prevent user tracking.
         * Note that while ITP is enabled the accept policy %WEBKIT_COOKIE_POLICY_ACCEPT_NO_THIRD_PARTY is ignored and
         * %WEBKIT_COOKIE_POLICY_ACCEPT_ALWAYS is used instead. See also webkit_cookie_manager_set_accept_policy().
         * @param enabled value to set
         */
        set_itp_enabled(enabled: boolean): void;
        /**
         * Set the network proxy settings to be used by connections started in `manager` session.
         *
         * By default %WEBKIT_NETWORK_PROXY_MODE_DEFAULT is used, which means that the
         * system settings will be used (g_proxy_resolver_get_default()).
         * If you want to override the system default settings, you can either use
         * %WEBKIT_NETWORK_PROXY_MODE_NO_PROXY to make sure no proxies are used at all,
         * or %WEBKIT_NETWORK_PROXY_MODE_CUSTOM to provide your own proxy settings.
         * When `proxy_mode` is %WEBKIT_NETWORK_PROXY_MODE_CUSTOM `proxy_settings` must be
         * a valid #WebKitNetworkProxySettings; otherwise, `proxy_settings` must be %NULL.
         * @param proxy_mode a #WebKitNetworkProxyMode
         * @param proxy_settings a #WebKitNetworkProxySettings, or %NULL
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
         * @param policy a #WebKitTLSErrorsPolicy
         */
        set_tls_errors_policy(policy: TLSErrorsPolicy | null): void;
    }

    namespace WebsitePolicies {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::autoplay': GObject.Object.Notify;
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
     */
    class WebsitePolicies extends GObject.Object {
        static $gtype: GObject.GType<WebsitePolicies>;

        // Properties

        /**
         * The #WebKitAutoplayPolicy of #WebKitWebsitePolicies.
         */
        get autoplay(): AutoplayPolicy;

        // Constructors

        constructor(properties?: Partial<WebsitePolicies.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): WebsitePolicies;

        // Signals

        connect<K extends keyof WebsitePolicies.SignalSignatures>(
            signal: K,
            callback: WebsitePolicies.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WebsitePolicies.SignalSignatures>(
            signal: K,
            callback: WebsitePolicies.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WebsitePolicies.SignalSignatures>(
            signal: K,
            ...args: WebsitePolicies.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the #WebKitWebsitePolicies:autoplay property.
         * @returns #WebKitAutoplayPolicy
         */
        get_autoplay_policy(): AutoplayPolicy;
    }

    namespace WindowProperties {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::fullscreen': GObject.Object.Notify;
            'notify::geometry': GObject.Object.Notify;
            'notify::locationbar-visible': GObject.Object.Notify;
            'notify::menubar-visible': GObject.Object.Notify;
            'notify::resizable': GObject.Object.Notify;
            'notify::scrollbars-visible': GObject.Object.Notify;
            'notify::statusbar-visible': GObject.Object.Notify;
            'notify::toolbar-visible': GObject.Object.Notify;
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
     * Window properties of a #WebKitWebView.
     *
     * The content of a #WebKitWebView can request to change certain
     * properties of the window containing the view. This can include the x, y position
     * of the window, the width and height but also if a toolbar,
     * scrollbar, statusbar, locationbar should be visible to the user,
     * and the request to show the #WebKitWebView fullscreen.
     *
     * The #WebKitWebView::ready-to-show signal handler is the proper place
     * to apply the initial window properties. Then you can monitor the
     * #WebKitWindowProperties by connecting to ::notify signal.
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
     */
    class WindowProperties extends GObject.Object {
        static $gtype: GObject.GType<WindowProperties>;

        // Properties

        /**
         * Whether window will be displayed fullscreen.
         */
        get fullscreen(): boolean;
        /**
         * The size and position of the window on the screen.
         */
        get geometry(): Gdk.Rectangle;
        /**
         * Whether the locationbar should be visible for the window.
         */
        get locationbar_visible(): boolean;
        /**
         * Whether the locationbar should be visible for the window.
         */
        get locationbarVisible(): boolean;
        /**
         * Whether the menubar should be visible for the window.
         */
        get menubar_visible(): boolean;
        /**
         * Whether the menubar should be visible for the window.
         */
        get menubarVisible(): boolean;
        /**
         * Whether the window can be resized.
         */
        get resizable(): boolean;
        /**
         * Whether the scrollbars should be visible for the window.
         */
        get scrollbars_visible(): boolean;
        /**
         * Whether the scrollbars should be visible for the window.
         */
        get scrollbarsVisible(): boolean;
        /**
         * Whether the statusbar should be visible for the window.
         */
        get statusbar_visible(): boolean;
        /**
         * Whether the statusbar should be visible for the window.
         */
        get statusbarVisible(): boolean;
        /**
         * Whether the toolbar should be visible for the window.
         */
        get toolbar_visible(): boolean;
        /**
         * Whether the toolbar should be visible for the window.
         */
        get toolbarVisible(): boolean;

        // Constructors

        constructor(properties?: Partial<WindowProperties.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof WindowProperties.SignalSignatures>(
            signal: K,
            callback: WindowProperties.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WindowProperties.SignalSignatures>(
            signal: K,
            callback: WindowProperties.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WindowProperties.SignalSignatures>(
            signal: K,
            ...args: WindowProperties.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get whether the window should be shown in fullscreen state or not.
         * @returns %TRUE if the window should be fullscreen or %FALSE otherwise.
         */
        get_fullscreen(): boolean;
        /**
         * Get the geometry the window should have on the screen when shown.
         */
        get_geometry(): Gdk.Rectangle;
        /**
         * Get whether the window should have the locationbar visible or not.
         * @returns %TRUE if locationbar should be visible or %FALSE otherwise.
         */
        get_locationbar_visible(): boolean;
        /**
         * Get whether the window should have the menubar visible or not.
         * @returns %TRUE if menubar should be visible or %FALSE otherwise.
         */
        get_menubar_visible(): boolean;
        /**
         * Get whether the window should be resizable by the user or not.
         * @returns %TRUE if the window should be resizable or %FALSE otherwise.
         */
        get_resizable(): boolean;
        /**
         * Get whether the window should have the scrollbars visible or not.
         * @returns %TRUE if scrollbars should be visible or %FALSE otherwise.
         */
        get_scrollbars_visible(): boolean;
        /**
         * Get whether the window should have the statusbar visible or not.
         * @returns %TRUE if statusbar should be visible or %FALSE otherwise.
         */
        get_statusbar_visible(): boolean;
        /**
         * Get whether the window should have the toolbar visible or not.
         * @returns %TRUE if toolbar should be visible or %FALSE otherwise.
         */
        get_toolbar_visible(): boolean;
    }

    /**
     * Information about an application running in automation mode.
     */
    class ApplicationInfo {
        static $gtype: GObject.GType<ApplicationInfo>;

        // Constructors

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        static ['new'](): ApplicationInfo;

        // Methods

        /**
         * Get the name of the application.
         *
         * If webkit_application_info_set_name() hasn't been
         * called with a valid name, this returns g_get_prgname().
         * @returns the application name
         */
        get_name(): string;
        /**
         * Get the application version previously set with webkit_application_info_set_version().
         */
        get_version(): [number, number, number];
        /**
         * Atomically increments the reference count of `info` by one.
         *
         * This
         * function is MT-safe and may be called from any thread.
         * @returns The passed in #WebKitApplicationInfo
         */
        ref(): ApplicationInfo;
        /**
         * Set the name of the application.
         *
         * If not provided, or %NULL is passed,
         * g_get_prgname() will be used.
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
         * reference count drops to 0, all memory allocated by the #WebKitApplicationInfo is
         * released. This function is MT-safe and may be called from any
         * thread.
         */
        unref(): void;
    }

    type AuthenticationRequestClass = typeof AuthenticationRequest;
    abstract class AuthenticationRequestPrivate {
        static $gtype: GObject.GType<AuthenticationRequestPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type AutomationSessionClass = typeof AutomationSession;
    abstract class AutomationSessionPrivate {
        static $gtype: GObject.GType<AutomationSessionPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type BackForwardListClass = typeof BackForwardList;
    type BackForwardListItemClass = typeof BackForwardListItem;
    abstract class BackForwardListItemPrivate {
        static $gtype: GObject.GType<BackForwardListItemPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class BackForwardListPrivate {
        static $gtype: GObject.GType<BackForwardListPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ClipboardPermissionRequestClass = typeof ClipboardPermissionRequest;
    abstract class ClipboardPermissionRequestPrivate {
        static $gtype: GObject.GType<ClipboardPermissionRequestPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ColorChooserRequestClass = typeof ColorChooserRequest;
    abstract class ColorChooserRequestPrivate {
        static $gtype: GObject.GType<ColorChooserRequestPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ContextMenuClass = typeof ContextMenu;
    type ContextMenuItemClass = typeof ContextMenuItem;
    abstract class ContextMenuItemPrivate {
        static $gtype: GObject.GType<ContextMenuItemPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class ContextMenuPrivate {
        static $gtype: GObject.GType<ContextMenuPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type CookieManagerClass = typeof CookieManager;
    abstract class CookieManagerPrivate {
        static $gtype: GObject.GType<CookieManagerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Groups information used for user authentication.
     */
    class Credential {
        static $gtype: GObject.GType<Credential>;

        // Constructors

        constructor(username: string, password: string, persistence: CredentialPersistence);
        _init(...args: any[]): void;

        static ['new'](username: string, password: string, persistence: CredentialPersistence): Credential;

        static new_for_certificate(
            certificate: Gio.TlsCertificate | null,
            persistence: CredentialPersistence,
        ): Credential;

        static new_for_certificate_pin(pin: string, persistence: CredentialPersistence): Credential;

        // Methods

        /**
         * Make a copy of the #WebKitCredential.
         * @returns A copy of passed in #WebKitCredential
         */
        copy(): Credential;
        /**
         * Free the #WebKitCredential.
         */
        free(): void;
        /**
         * Get the certificate currently held by this #WebKitCredential.
         * @returns a #GTlsCertificate, or %NULL
         */
        get_certificate(): Gio.TlsCertificate;
        /**
         * Get the password currently held by this #WebKitCredential.
         * @returns The password stored in the #WebKitCredential.
         */
        get_password(): string;
        /**
         * Get the persistence mode currently held by this #WebKitCredential.
         * @returns The #WebKitCredentialPersistence stored in the #WebKitCredential.
         */
        get_persistence(): CredentialPersistence;
        /**
         * Get the username currently held by this #WebKitCredential.
         * @returns The username stored in the #WebKitCredential.
         */
        get_username(): string;
        /**
         * Determine whether this credential has a password stored.
         * @returns %TRUE if the credential has a password or %FALSE otherwise.
         */
        has_password(): boolean;
    }

    type DeviceInfoPermissionRequestClass = typeof DeviceInfoPermissionRequest;
    abstract class DeviceInfoPermissionRequestPrivate {
        static $gtype: GObject.GType<DeviceInfoPermissionRequestPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DownloadClass = typeof Download;
    abstract class DownloadPrivate {
        static $gtype: GObject.GType<DownloadPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type EditorStateClass = typeof EditorState;
    abstract class EditorStatePrivate {
        static $gtype: GObject.GType<EditorStatePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FaviconDatabaseClass = typeof FaviconDatabase;
    abstract class FaviconDatabasePrivate {
        static $gtype: GObject.GType<FaviconDatabasePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Describes a web engine feature that may be toggled at runtime.
     *
     * The WebKit web engine includes a set of features which may be toggled
     * programmatically, each one represented by a #WebKitFeature that provides
     * information about it:
     *
     * - A unique “identifier”: [method`Feature`.get_identifier].
     * - A “default value”, which indicates whether the option is enabled
     *   automatically: [method`Feature`.get_default_value].
     * - Its “status”, which determines whether it should be considered
     *   user-settable and its development stage (see [enum`FeatureStatus]`
     *   for details): [method`Feature`.get_status].
     * - A category, which may be used to group features together:
     *   [method`Feature`.get_category].
     * - An optional short “name” which can be presented to an user:
     *   [method`Feature`.get_name].
     * - An optional longer “detailed” description:
     *   [method`Feature`.get_details].
     *
     * The lists of available features can be obtained with
     * [func`Settings`.get_all_features], [func`Settings`.get_experimental_features],
     * and [func`Settings`.get_development_features]). As a rule of thumb,
     * applications which may want to allow users (i.e. web developers) to test
     * WebKit features should use the list of experimental features. Additionally,
     * applications might want to expose development features *when targeting
     * technically inclined users* for early testing of in-development features
     * (i.e. in “technology preview” or “canary” builds).
     *
     * Applications **must not** expose the list of all features to end users
     * because they often lack descriptions and control parts of the web engine
     * which are either intended to be used during development of WebKit itself,
     * or in specific scenarios to tweak how WebKit integrates with the
     * application.
     */
    abstract class Feature {
        static $gtype: GObject.GType<Feature>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Gets the category of the feature.
         *
         * Applications which include user interface to toggle features may want
         * to use the category to group related features together.
         * @returns Feature category.
         */
        get_category(): string;
        /**
         * Gets whether the feature is enabled by default.
         *
         * The default value may be used by applications which include user interface
         * to toggle features to restore its settings to their defaults. Note that
         * whether a feature is actually enabled must be checked with
         * [method`Settings`.get_feature_enabled].
         * @returns Whether the feature is enabled by default.
         */
        get_default_value(): boolean;
        /**
         * Gets a description for the `feature`.
         *
         * The detailed description should be considered an additional clarification
         * on the purpose of the feature, to be used as complementary aid to be
         * displayed along the feature name returned by [method`Feature`.get_name].
         * The returned string is suitable to be displayed to end users, but it
         * should not be relied upon being localized.
         *
         * Note that some *features may not* have a detailed description, and `NULL`
         * is returned in this case.
         * @returns Feature description.
         */
        get_details(): string | null;
        /**
         * Gets a string that uniquely identifies the `feature`.
         * @returns The identifier string for the feature.
         */
        get_identifier(): string;
        /**
         * Gets a short name for the `feature`.
         *
         * The returned string is suitable to be displayed to end users, but it
         * should not be relied upon being localized.
         *
         * Note that some *features may not* have a short name, and `NULL`
         * is returned in this case.
         * @returns Short feature name.
         */
        get_name(): string | null;
        /**
         * Gets the status of the feature.
         * @returns Feature status.
         */
        get_status(): FeatureStatus;
        /**
         * Atomically acquires a reference on the given `feature`.
         *
         * This function is MT-safe and may be called from any thread.
         * @returns The same @feature with an additional reference.
         */
        ref(): Feature;
        /**
         * Atomically releases a reference on the given `feature`.
         *
         * If the reference was the last, the resources associated to the
         * `feature` are freed. This function is MT-safe and may be called from
         * any thread.
         */
        unref(): void;
    }

    /**
     * Contains a set of toggle-able web engine features.
     *
     * The list supports passing around a set of [struct`Feature]` objects and
     * iterating over them:
     *
     * ```c
     * g_autoptr(WebKitFeatureList) list = webkit_settings_get_experimental_features();
     * for (gsize i = 0; i < webkit_feature_list_get_length(list): i++) {
     *     WebKitFeature *feature = webkit_feature_list_get(list, i);
     *     // Do something with "feature".
     * }
     * ```
     *
     * Lists of features can be obtained with
     * [func`Settings`.get_experimental_features],
     * [func`Settings`.get_development_features], and
     * [func`Settings`.get_all_features].
     */
    abstract class FeatureList {
        static $gtype: GObject.GType<FeatureList>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Gets a feature given its index.
         * @param index index of the feature
         * @returns The feature at @index.
         */
        get(index: number): Feature;
        /**
         * Gets the number of elements in the feature list.
         * @returns number of elements. Since 2.42
         */
        get_length(): number;
        /**
         * Atomically acquires a reference on the given `feature_list`.
         *
         * This function is MT-safe and may be called from any thread.
         * @returns The same @feature_list with an additional reference.
         */
        ref(): FeatureList;
        /**
         * Atomically releases a reference on the given `feature_list`.
         *
         * If the reference was the last, the resources associated to the
         * `feature_list` are freed. This function is MT-safe and may be called
         * from any thread.
         */
        unref(): void;
    }

    type FileChooserRequestClass = typeof FileChooserRequest;
    abstract class FileChooserRequestPrivate {
        static $gtype: GObject.GType<FileChooserRequestPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FindControllerClass = typeof FindController;
    abstract class FindControllerPrivate {
        static $gtype: GObject.GType<FindControllerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FormSubmissionRequestClass = typeof FormSubmissionRequest;
    abstract class FormSubmissionRequestPrivate {
        static $gtype: GObject.GType<FormSubmissionRequestPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type GeolocationManagerClass = typeof GeolocationManager;
    abstract class GeolocationManagerPrivate {
        static $gtype: GObject.GType<GeolocationManagerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type GeolocationPermissionRequestClass = typeof GeolocationPermissionRequest;
    abstract class GeolocationPermissionRequestPrivate {
        static $gtype: GObject.GType<GeolocationPermissionRequestPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * An opaque struct to provide position updates to a #WebKitGeolocationManager.
     *
     * WebKitGeolocationPosition is an opaque struct used to provide position updates to a
     * #WebKitGeolocationManager using webkit_geolocation_manager_update_position().
     */
    class GeolocationPosition {
        static $gtype: GObject.GType<GeolocationPosition>;

        // Constructors

        constructor(latitude: number, longitude: number, accuracy: number);
        _init(...args: any[]): void;

        static ['new'](latitude: number, longitude: number, accuracy: number): GeolocationPosition;

        // Methods

        /**
         * Make a copy of the #WebKitGeolocationPosition.
         * @returns a copy of @position
         */
        copy(): GeolocationPosition;
        /**
         * Free the #WebKitGeolocationPosition
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

    type HitTestResultClass = typeof HitTestResult;
    abstract class HitTestResultPrivate {
        static $gtype: GObject.GType<HitTestResultPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Describes a first party origin.
     */
    abstract class ITPFirstParty {
        static $gtype: GObject.GType<ITPFirstParty>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Get the domain name of `itp_first_party`.
         * @returns the domain name
         */
        get_domain(): string;
        /**
         * Get the last time a #WebKitITPThirdParty has been seen under `itp_first_party`.
         *
         * Each `WebKitITPFirstParty` is created by webkit_itp_third_party_get_first_parties() and
         * therefore corresponds to exactly one #WebKitITPThirdParty.
         * @returns the last update time as a #GDateTime
         */
        get_last_update_time(): GLib.DateTime;
        /**
         * Get whether `itp_first_party` has granted website data access to its #WebKitITPThirdParty.
         *
         * Each `WebKitITPFirstParty` is created by webkit_itp_third_party_get_first_parties() and
         * therefore corresponds to exactly one #WebKitITPThirdParty.
         * @returns %TRUE if website data access has been granted, or %FALSE otherwise
         */
        get_website_data_access_allowed(): boolean;
        /**
         * Atomically increments the reference count of `itp_first_party` by one.
         *
         * This function is MT-safe and may be called from any thread.
         * @returns The passed #WebKitITPFirstParty
         */
        ref(): ITPFirstParty;
        /**
         * Atomically decrements the reference count of `itp_first_party` by one.
         *
         * If the reference count drops to 0, all memory allocated by
         * #WebKitITPFirstParty is released. This function is MT-safe and may be
         * called from any thread.
         */
        unref(): void;
    }

    /**
     * Describes a third party origin.
     */
    abstract class ITPThirdParty {
        static $gtype: GObject.GType<ITPThirdParty>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Get the domain name of `itp_third_party`.
         * @returns the domain name
         */
        get_domain(): string;
        /**
         * Get the list of #WebKitITPFirstParty under which `itp_third_party` has been seen.
         * @returns a #GList of #WebKitITPFirstParty
         */
        get_first_parties(): ITPFirstParty[];
        /**
         * Atomically increments the reference count of `itp_third_party` by one.
         *
         * This function is MT-safe and may be called from any thread.
         * @returns The passed #WebKitITPThirdParty
         */
        ref(): ITPThirdParty;
        /**
         * Atomically decrements the reference count of `itp_third_party` by one.
         *
         * If the reference count drops to 0, all memory allocated by
         * #WebKitITPThirdParty is released. This function is MT-safe and may be
         * called from any thread.
         */
        unref(): void;
    }

    type InputMethodContextClass = typeof InputMethodContext;
    abstract class InputMethodContextPrivate {
        static $gtype: GObject.GType<InputMethodContextPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Range of text in an preedit string to be shown underlined.
     */
    class InputMethodUnderline {
        static $gtype: GObject.GType<InputMethodUnderline>;

        // Constructors

        constructor(start_offset: number, end_offset: number);
        _init(...args: any[]): void;

        static ['new'](start_offset: number, end_offset: number): InputMethodUnderline;

        // Methods

        /**
         * Make a copy of the #WebKitInputMethodUnderline.
         * @returns A copy of passed in #WebKitInputMethodUnderline
         */
        copy(): InputMethodUnderline;
        /**
         * Free the #WebKitInputMethodUnderline.
         */
        free(): void;
        /**
         * Set the color of the underline.
         *
         * If `rgba` is %NULL the foreground text color will be used
         * for the underline too.
         * @param rgba a #GdkRGBA or %NULL
         */
        set_color(rgba?: Gdk.RGBA | null): void;
    }

    type InstallMissingMediaPluginsPermissionRequestClass = typeof InstallMissingMediaPluginsPermissionRequest;
    abstract class InstallMissingMediaPluginsPermissionRequestPrivate {
        static $gtype: GObject.GType<InstallMissingMediaPluginsPermissionRequestPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Result of JavaScript evaluation in a web view.
     */
    abstract class JavascriptResult {
        static $gtype: GObject.GType<JavascriptResult>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Get the #JSCValue of `js_result`.
         * @returns the #JSCValue of the #WebKitJavascriptResult
         */
        get_js_value(): JavaScriptCore.Value;
        /**
         * Atomically increments the reference count of `js_result` by one.
         *
         * This function is MT-safe and may be called from any thread.
         * @returns The passed in #WebKitJavascriptResult
         */
        ref(): JavascriptResult;
        /**
         * Atomically decrements the reference count of `js_result` by one.
         *
         * If the reference count drops to 0,
         * all memory allocated by the #WebKitJavascriptResult is
         * released. This function is MT-safe and may be called from any
         * thread.
         */
        unref(): void;
    }

    type MediaKeySystemPermissionRequestClass = typeof MediaKeySystemPermissionRequest;
    abstract class MediaKeySystemPermissionRequestPrivate {
        static $gtype: GObject.GType<MediaKeySystemPermissionRequestPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * A boxed type representing the settings for the memory pressure handler
     *
     * #WebKitMemoryPressureSettings is a boxed type that can be used to provide some custom settings
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
     * A #WebKitMemoryPressureSettings can be passed to a #WebKitWebContext constructor, and the settings will
     * be applied to all the web processes created by that context.
     *
     * A #WebKitMemoryPressureSettings can be passed to webkit_website_data_manager_set_memory_pressure_settings(),
     * and the settings will be applied to all the network processes created after that call by any instance of
     * #WebKitWebsiteDataManager.
     */
    class MemoryPressureSettings {
        static $gtype: GObject.GType<MemoryPressureSettings>;

        // Constructors

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        static ['new'](): MemoryPressureSettings;

        // Methods

        /**
         * Make a copy of `settings`.
         * @returns A copy of of the passed #WebKitMemoryPressureSettings.
         */
        copy(): MemoryPressureSettings;
        /**
         * Free the #WebKitMemoryPressureSettings.
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
         * than the conservative threshold defined in `settings,` and smaller than the kill
         * threshold if the latter is not 0. The default value is 0.5.
         * @param value fraction of the memory limit where the strict policy starts working.
         */
        set_strict_threshold(value: number): void;
    }

    /**
     * Information about a MIME type.
     */
    abstract class MimeInfo {
        static $gtype: GObject.GType<MimeInfo>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Gets the description of the MIME type.
         * @returns description, as a string.
         */
        get_description(): string | null;
        /**
         * Get the list of file extensions associated to the MIME type.
         * @returns a     %NULL-terminated array of strings
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
         * @returns The passed in #WebKitMimeInfo
         */
        ref(): MimeInfo;
        /**
         * Atomically decrements the reference count of `info` by one.
         *
         * If the reference count drops to 0, all memory allocated by the #WebKitMimeInfo is
         * released. This function is MT-safe and may be called from any
         * thread.
         */
        unref(): void;
    }

    /**
     * Provides details about interaction resulting in a resource load.
     */
    abstract class NavigationAction {
        static $gtype: GObject.GType<NavigationAction>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Make a copy of `navigation`.
         * @returns A copy of passed in #WebKitNavigationAction
         */
        copy(): NavigationAction;
        /**
         * Free the #WebKitNavigationAction
         */
        free(): void;
        /**
         * Gets the `navigation` target frame name. For example if navigation was triggered by clicking a
         * link with a target attribute equal to "_blank", this will return the value of that attribute.
         * In all other cases this function will return %NULL.
         * @returns The name of the new frame this navigation action targets or %NULL
         */
        get_frame_name(): string | null;
        /**
         * Return the modifier keys.
         *
         * Return a bitmask of #GdkModifierType values describing the modifier keys that were in effect
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
         * @returns a #WebKitNavigationType
         */
        get_navigation_type(): NavigationType;
        /**
         * Return the #WebKitURIRequest associated with the navigation action.
         *
         * Modifications to the returned object are <emphasis>not</emphasis> taken
         * into account when the request is sent over the network, and is intended
         * only to aid in evaluating whether a navigation action should be taken or
         * not. To modify requests before they are sent over the network the
         * #WebKitPage::send-request signal can be used instead.
         * @returns a #WebKitURIRequest
         */
        get_request(): URIRequest;
        /**
         * Returns whether the `navigation` was redirected.
         * @returns %TRUE if the original navigation was redirected, %FALSE otherwise.
         */
        is_redirect(): boolean;
        /**
         * Return whether the navigation was triggered by a user gesture like a mouse click.
         * @returns whether navigation action is a user gesture
         */
        is_user_gesture(): boolean;
    }

    type NavigationPolicyDecisionClass = typeof NavigationPolicyDecision;
    abstract class NavigationPolicyDecisionPrivate {
        static $gtype: GObject.GType<NavigationPolicyDecisionPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Configures network proxies.
     *
     * WebKitNetworkProxySettings can be used to provide a custom proxy configuration
     * to a #WebKitWebContext. You need to call webkit_web_context_set_network_proxy_settings()
     * with %WEBKIT_NETWORK_PROXY_MODE_CUSTOM and a WebKitNetworkProxySettings.
     */
    class NetworkProxySettings {
        static $gtype: GObject.GType<NetworkProxySettings>;

        // Constructors

        constructor(default_proxy_uri?: string | null, ignore_hosts?: string[] | null);
        _init(...args: any[]): void;

        static ['new'](default_proxy_uri?: string | null, ignore_hosts?: string[] | null): NetworkProxySettings;

        // Methods

        /**
         * Adds a URI-scheme-specific proxy.
         *
         * URIs whose scheme matches `uri_scheme` will be proxied via `proxy_uri`.
         * As with the default proxy URI, if `proxy_uri` starts with "socks://", it will be treated as referring to
         * all three of the socks5, socks4a, and socks4 proxy types.
         * @param scheme the URI scheme to add a proxy for
         * @param proxy_uri the proxy URI to use for @uri_scheme
         */
        add_proxy_for_scheme(scheme: string, proxy_uri: string): void;
        /**
         * Make a copy of the #WebKitNetworkProxySettings.
         * @returns A copy of passed in #WebKitNetworkProxySettings
         */
        copy(): NetworkProxySettings;
        /**
         * Free the #WebKitNetworkProxySettings.
         */
        free(): void;
    }

    type NotificationClass = typeof Notification;
    type NotificationPermissionRequestClass = typeof NotificationPermissionRequest;
    abstract class NotificationPermissionRequestPrivate {
        static $gtype: GObject.GType<NotificationPermissionRequestPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class NotificationPrivate {
        static $gtype: GObject.GType<NotificationPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type OptionMenuClass = typeof OptionMenu;
    /**
     * One item of a #WebKitOptionMenu.
     *
     * The #WebKitOptionMenu is composed of WebKitOptionMenuItem<!-- -->s.
     * A WebKitOptionMenuItem always has a label and can contain a tooltip text.
     * You can use the WebKitOptionMenuItem of a #WebKitOptionMenu to build your
     * own menus.
     */
    abstract class OptionMenuItem {
        static $gtype: GObject.GType<OptionMenuItem>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Make a copy of the #WebKitOptionMenuItem.
         * @returns A copy of passed in #WebKitOptionMenuItem
         */
        copy(): OptionMenuItem;
        /**
         * Free the #WebKitOptionMenuItem.
         */
        free(): void;
        /**
         * Get the label of a #WebKitOptionMenuItem.
         * @returns The label of @item.
         */
        get_label(): string;
        /**
         * Get the tooltip of a #WebKitOptionMenuItem.
         * @returns The tooltip of @item, or %NULL.
         */
        get_tooltip(): string;
        /**
         * Whether a #WebKitOptionMenuItem is enabled.
         * @returns %TRUE if the @item is enabled or %FALSE otherwise.
         */
        is_enabled(): boolean;
        /**
         * Whether a #WebKitOptionMenuItem is a group child.
         * @returns %TRUE if the @item is a group child or %FALSE otherwise.
         */
        is_group_child(): boolean;
        /**
         * Whether a #WebKitOptionMenuItem is a group label.
         * @returns %TRUE if the @item is a group label or %FALSE otherwise.
         */
        is_group_label(): boolean;
        /**
         * Whether a #WebKitOptionMenuItem is the currently selected one.
         * @returns %TRUE if the @item is selected or %FALSE otherwise.
         */
        is_selected(): boolean;
    }

    abstract class OptionMenuPrivate {
        static $gtype: GObject.GType<OptionMenuPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PermissionRequestIface = typeof PermissionRequest;
    /**
     * This query represents a user's choice to allow or deny access to "powerful features" of the
     * platform, as specified in the [Permissions W3C
     * Specification](https://w3c.github.io/permissions/).
     *
     * When signalled by the #WebKitWebView through the `query-permission-state` signal, the application
     * has to eventually respond, via `webkit_permission_state_query_finish()`, whether it grants,
     * denies or requests a dedicated permission prompt for the given query.
     *
     * When a #WebKitPermissionStateQuery is not handled by the user, the user-agent is instructed to
     * `prompt` the user for the given permission.
     */
    abstract class PermissionStateQuery {
        static $gtype: GObject.GType<PermissionStateQuery>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Notify the web-engine of the selected permission state for the given query. This function should
         * only be called as a response to the `WebKitWebView::query-permission-state` signal.
         * @param state a #WebKitPermissionState
         */
        finish(state: PermissionState | null): void;
        /**
         * Get the permission name for which access is being queried.
         * @returns the permission name for @query
         */
        get_name(): string;
        /**
         * Get the permission origin for which access is being queried.
         * @returns A #WebKitSecurityOrigin representing the origin from which the @query was emitted.
         */
        get_security_origin(): SecurityOrigin;
        /**
         * Atomically increments the reference count of `query` by one.
         *
         * This function is MT-safe and may be called from any thread.
         * @returns The passed #WebKitPermissionStateQuery
         */
        ref(): PermissionStateQuery;
        /**
         * Atomically decrements the reference count of `query` by one.
         *
         * If the reference count drops to 0, all memory allocated by #WebKitPermissionStateQuery is
         * released. This function is MT-safe and may be called from any thread.
         */
        unref(): void;
    }

    type PluginClass = typeof Plugin;
    abstract class PluginPrivate {
        static $gtype: GObject.GType<PluginPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PointerLockPermissionRequestClass = typeof PointerLockPermissionRequest;
    abstract class PointerLockPermissionRequestPrivate {
        static $gtype: GObject.GType<PointerLockPermissionRequestPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PolicyDecisionClass = typeof PolicyDecision;
    abstract class PolicyDecisionPrivate {
        static $gtype: GObject.GType<PolicyDecisionPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PrintCustomWidgetClass = typeof PrintCustomWidget;
    abstract class PrintCustomWidgetPrivate {
        static $gtype: GObject.GType<PrintCustomWidgetPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PrintOperationClass = typeof PrintOperation;
    abstract class PrintOperationPrivate {
        static $gtype: GObject.GType<PrintOperationPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ResponsePolicyDecisionClass = typeof ResponsePolicyDecision;
    abstract class ResponsePolicyDecisionPrivate {
        static $gtype: GObject.GType<ResponsePolicyDecisionPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Carries details to be shown in user-facing dialogs.
     */
    abstract class ScriptDialog {
        static $gtype: GObject.GType<ScriptDialog>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Close `dialog`.
         *
         * When handling a #WebKitScriptDialog asynchronously (webkit_script_dialog_ref()
         * was called in #WebKitWebView::script-dialog callback), this function needs to be called to notify
         * that we are done with the script dialog. The dialog will be closed on destruction if this function
         * hasn't been called before.
         */
        close(): void;
        /**
         * Set whether the user confirmed the dialog.
         *
         * This method is used for %WEBKIT_SCRIPT_DIALOG_CONFIRM and %WEBKIT_SCRIPT_DIALOG_BEFORE_UNLOAD_CONFIRM dialogs when
         * #WebKitWebView::script-dialog signal is emitted to set whether the user
         * confirmed the dialog or not. The default implementation of #WebKitWebView::script-dialog
         * signal sets %TRUE when the OK or Stay buttons are clicked and %FALSE otherwise.
         * It's an error to use this method with a #WebKitScriptDialog that is not of type
         * %WEBKIT_SCRIPT_DIALOG_CONFIRM or %WEBKIT_SCRIPT_DIALOG_BEFORE_UNLOAD_CONFIRM
         * @param confirmed whether user confirmed the dialog
         */
        confirm_set_confirmed(confirmed: boolean): void;
        /**
         * Get the dialog type of a #WebKitScriptDialog.
         * @returns the #WebKitScriptDialogType of @dialog
         */
        get_dialog_type(): ScriptDialogType;
        /**
         * Get the message of a #WebKitScriptDialog.
         * @returns the message of @dialog.
         */
        get_message(): string;
        /**
         * Get the default text of a #WebKitScriptDialog of type %WEBKIT_SCRIPT_DIALOG_PROMPT.
         *
         * It's an error to use this method with a #WebKitScriptDialog that is not of type
         * %WEBKIT_SCRIPT_DIALOG_PROMPT.
         * @returns the default text of @dialog
         */
        prompt_get_default_text(): string;
        /**
         * Set the text entered by the user in the dialog.
         *
         * This method is used for %WEBKIT_SCRIPT_DIALOG_PROMPT dialogs when
         * #WebKitWebView::script-dialog signal is emitted to set the text
         * entered by the user. The default implementation of #WebKitWebView::script-dialog
         * signal sets the text of the entry form when OK button is clicked, otherwise %NULL is set.
         * It's an error to use this method with a #WebKitScriptDialog that is not of type
         * %WEBKIT_SCRIPT_DIALOG_PROMPT.
         * @param text the text to set
         */
        prompt_set_text(text: string): void;
        /**
         * Atomically increments the reference count of `dialog` by one.
         *
         * This
         * function is MT-safe and may be called from any thread.
         * @returns The passed in #WebKitScriptDialog
         */
        ref(): ScriptDialog;
        /**
         * Atomically decrements the reference count of `dialog` by one.
         *
         * If the
         * reference count drops to 0, all memory allocated by the #WebKitScriptdialog is
         * released. This function is MT-safe and may be called from any
         * thread.
         */
        unref(): void;
    }

    /**
     * A reply for a script message received.
     * If no reply has been sent by the user, an automatically generated reply with
     * undefined value with be sent.
     */
    abstract class ScriptMessageReply {
        static $gtype: GObject.GType<ScriptMessageReply>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Atomically increments the reference count of `script_message_reply` by one.
         * @returns the @script_message_reply passed in.
         */
        ref(): ScriptMessageReply;
        /**
         * Reply to a script message with an error message.
         * @param error_message An error message to return as specified by the user's script message
         */
        return_error_message(error_message: string): void;
        /**
         * Reply to a script message with a value.
         *
         * This function can be called twice for passing the reply value in.
         * @param reply_value Reply value of the provided script message
         */
        return_value(reply_value: JavaScriptCore.Value): void;
        /**
         * Atomically decrements the reference count of `script_message_reply` by one.
         *
         * If the reference count drops to 0, all the memory allocated by the
         * #WebKitScriptMessageReply is released. This function is MT-safe and may
         * be called from any thread.
         */
        unref(): void;
    }

    type SecurityManagerClass = typeof SecurityManager;
    abstract class SecurityManagerPrivate {
        static $gtype: GObject.GType<SecurityManagerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * A security boundary for websites.
     *
     * #WebKitSecurityOrigin is a representation of a security domain
     * defined by websites. A security origin consists of a protocol, a
     * hostname, and an optional port number.
     *
     * Resources with the same security origin can generally access each
     * other for client-side scripting or database access. When comparing
     * origins, beware that if both protocol and host are %NULL, the origins
     * should not be treated as equal.
     */
    class SecurityOrigin {
        static $gtype: GObject.GType<SecurityOrigin>;

        // Constructors

        constructor(protocol: string, host: string, port: number);
        _init(...args: any[]): void;

        static ['new'](protocol: string, host: string, port: number): SecurityOrigin;

        static new_for_uri(uri: string): SecurityOrigin;

        // Methods

        /**
         * Gets the hostname of `origin`.
         *
         * It is reasonable for this to be %NULL
         * if its protocol does not require a host component.
         * @returns The host of the #WebKitSecurityOrigin
         */
        get_host(): string | null;
        /**
         * Gets the port of `origin`.
         *
         * This function will always return 0 if the
         * port is the default port for the given protocol. For example,
         * http://example.com has the same security origin as
         * http://example.com:80, and this function will return 0 for a
         * #WebKitSecurityOrigin constructed from either URI.
         * @returns The port of the #WebKitSecurityOrigin.
         */
        get_port(): number;
        /**
         * Gets the protocol of `origin`.
         * @returns The protocol of the #WebKitSecurityOrigin
         */
        get_protocol(): string | null;
        /**
         * This function returns %FALSE.
         *
         * This function returns %FALSE. #WebKitSecurityOrigin is now a simple
         * wrapper around a <protocol, host, port> triplet, and no longer
         * represents an origin as defined by web standards that may be opaque.
         * @returns %FALSE
         */
        is_opaque(): boolean;
        /**
         * Atomically increments the reference count of `origin` by one.
         *
         * This function is MT-safe and may be called from any thread.
         * @returns The passed #WebKitSecurityOrigin
         */
        ref(): SecurityOrigin;
        /**
         * Gets a string representation of `origin`.
         *
         * The string representation
         * is a valid URI with only protocol, host, and port components, or
         * %NULL.
         * @returns a URI representing @origin.
         */
        to_string(): string | null;
        /**
         * Atomically decrements the reference count of `origin` by one.
         *
         * If the reference count drops to 0, all memory allocated by
         * #WebKitSecurityOrigin is released. This function is MT-safe and may be
         * called from any thread.
         */
        unref(): void;
    }

    type SettingsClass = typeof Settings;
    abstract class SettingsPrivate {
        static $gtype: GObject.GType<SettingsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type URIRequestClass = typeof URIRequest;
    abstract class URIRequestPrivate {
        static $gtype: GObject.GType<URIRequestPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type URIResponseClass = typeof URIResponse;
    abstract class URIResponsePrivate {
        static $gtype: GObject.GType<URIResponsePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type URISchemeRequestClass = typeof URISchemeRequest;
    abstract class URISchemeRequestPrivate {
        static $gtype: GObject.GType<URISchemeRequestPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type URISchemeResponseClass = typeof URISchemeResponse;
    abstract class URISchemeResponsePrivate {
        static $gtype: GObject.GType<URISchemeResponsePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * A compiled set of rules which applied to resource loads.
     */
    abstract class UserContentFilter {
        static $gtype: GObject.GType<UserContentFilter>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Obtain the identifier previously used to save the `user_content_filter`.
         *
         * Obtain the identifier previously used to save the `user_content_filter` in the
         * #WebKitUserContentFilterStore.
         * @returns the identifier for the filter
         */
        get_identifier(): string;
        /**
         * Atomically increments the reference count of `user_content_filter` by one.
         *
         * This function is MT-safe and may be called from any thread.
         * @returns the @user_content_filter passed in.
         */
        ref(): UserContentFilter;
        /**
         * Atomically decrements the reference count of `user_content_filter` by one.
         *
         * If the reference count drops to 0, all the memory allocated by the
         * #WebKitUserContentFilter is released. This function is MT-safe and may
         * be called from any thread.
         */
        unref(): void;
    }

    type UserContentFilterStoreClass = typeof UserContentFilterStore;
    abstract class UserContentFilterStorePrivate {
        static $gtype: GObject.GType<UserContentFilterStorePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type UserContentManagerClass = typeof UserContentManager;
    abstract class UserContentManagerPrivate {
        static $gtype: GObject.GType<UserContentManagerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type UserMediaPermissionRequestClass = typeof UserMediaPermissionRequest;
    abstract class UserMediaPermissionRequestPrivate {
        static $gtype: GObject.GType<UserMediaPermissionRequestPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type UserMessageClass = typeof UserMessage;
    abstract class UserMessagePrivate {
        static $gtype: GObject.GType<UserMessagePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * A JavaScript snippet which can be injected in loaded pages.
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
        _init(...args: any[]): void;

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
         * @returns The passed #WebKitUserScript
         */
        ref(): UserScript;
        /**
         * Atomically decrements the reference count of `user_script` by one.
         *
         * If the reference count drops to 0, all memory allocated by
         * #WebKitUserScript is released. This function is MT-safe and may be called
         * from any thread.
         */
        unref(): void;
    }

    /**
     * A CSS style sheet which can be injected in loaded pages.
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
        _init(...args: any[]): void;

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
         * @returns The passed #WebKitUserStyleSheet
         */
        ref(): UserStyleSheet;
        /**
         * Atomically decrements the reference count of `user_style_sheet` by one.
         *
         * If the reference count drops to 0, all memory allocated by
         * #WebKitUserStyleSheet is released. This function is MT-safe and may be
         * called from any thread.
         */
        unref(): void;
    }

    type WebContextClass = typeof WebContext;
    abstract class WebContextPrivate {
        static $gtype: GObject.GType<WebContextPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WebInspectorClass = typeof WebInspector;
    abstract class WebInspectorPrivate {
        static $gtype: GObject.GType<WebInspectorPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WebResourceClass = typeof WebResource;
    abstract class WebResourcePrivate {
        static $gtype: GObject.GType<WebResourcePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WebViewBaseClass = typeof WebViewBase;
    abstract class WebViewBasePrivate {
        static $gtype: GObject.GType<WebViewBasePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WebViewClass = typeof WebView;
    abstract class WebViewPrivate {
        static $gtype: GObject.GType<WebViewPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Handles serialization of a web view's browsing state.
     */
    class WebViewSessionState {
        static $gtype: GObject.GType<WebViewSessionState>;

        // Constructors

        constructor(data: GLib.Bytes | Uint8Array);
        _init(...args: any[]): void;

        static ['new'](data: GLib.Bytes | Uint8Array): WebViewSessionState;

        // Methods

        /**
         * Atomically increments the reference count of `state` by one.
         *
         * This
         * function is MT-safe and may be called from any thread.
         * @returns The passed in #WebKitWebViewSessionState
         */
        ref(): WebViewSessionState;
        /**
         * Serializes a #WebKitWebViewSessionState.
         * @returns a #GBytes containing the @state serialized.
         */
        serialize(): GLib.Bytes;
        /**
         * Atomically decrements the reference count of `state` by one.
         *
         * If the
         * reference count drops to 0, all memory allocated by the #WebKitWebViewSessionState is
         * released. This function is MT-safe and may be called from any thread.
         */
        unref(): void;
    }

    /**
     * Data stored locally by a web site.
     *
     * WebKitWebsiteData represents data stored in the client by a particular website.
     * A website is normally a set of URLs grouped by domain name. You can get the website name,
     * which is usually the domain, with webkit_website_data_get_name().
     * Documents loaded from the file system, like file:// URIs, are all grouped in the same WebKitWebsiteData
     * with the name "Local files".
     *
     * A website can store different types of data in the client side. #WebKitWebsiteDataTypes is an enum containing
     * all the possible data types; use webkit_website_data_get_types() to get the bitmask of data types.
     * It's also possible to know the size of the data stored for some of the #WebKitWebsiteDataTypes by using
     * webkit_website_data_get_size().
     *
     * A list of WebKitWebsiteData can be retrieved with webkit_website_data_manager_fetch(). See #WebKitWebsiteDataManager
     * for more information.
     */
    abstract class WebsiteData {
        static $gtype: GObject.GType<WebsiteData>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Gets the name of #WebKitWebsiteData.
         *
         * This is the website name, normally represented by
         * a domain or host name. All local documents are grouped in the same #WebKitWebsiteData using
         * the name "Local files".
         * @returns the website name of @website_data.
         */
        get_name(): string;
        /**
         * Gets the size of the data of types `types` in a #WebKitWebsiteData.
         *
         * Note that currently the data size is only known for %WEBKIT_WEBSITE_DATA_DISK_CACHE data type
         * so for all other types 0 will be returned.
         * @param types a bitmask  of #WebKitWebsiteDataTypes
         * @returns the size of @website_data for the given @types.
         */
        get_size(types: WebsiteDataTypes | null): number;
        /**
         * Gets the types of data stored in the client for a #WebKitWebsiteData.
         *
         * These are the
         * types actually present, not the types queried with webkit_website_data_manager_fetch().
         * @returns a bitmask of #WebKitWebsiteDataTypes in @website_data
         */
        get_types(): WebsiteDataTypes;
        /**
         * Atomically increments the reference count of `website_data` by one.
         *
         * This function is MT-safe and may be called from any thread.
         * @returns The passed #WebKitWebsiteData
         */
        ref(): WebsiteData;
        /**
         * Atomically decrements the reference count of `website_data` by one.
         *
         * If the reference count drops to 0, all memory allocated by
         * #WebKitWebsiteData is released. This function is MT-safe and may be
         * called from any thread.
         */
        unref(): void;
    }

    type WebsiteDataAccessPermissionRequestClass = typeof WebsiteDataAccessPermissionRequest;
    abstract class WebsiteDataAccessPermissionRequestPrivate {
        static $gtype: GObject.GType<WebsiteDataAccessPermissionRequestPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WebsiteDataManagerClass = typeof WebsiteDataManager;
    abstract class WebsiteDataManagerPrivate {
        static $gtype: GObject.GType<WebsiteDataManagerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WebsitePoliciesClass = typeof WebsitePolicies;
    abstract class WebsitePoliciesPrivate {
        static $gtype: GObject.GType<WebsitePoliciesPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type WindowPropertiesClass = typeof WindowProperties;
    abstract class WindowPropertiesPrivate {
        static $gtype: GObject.GType<WindowPropertiesPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    namespace PermissionRequest {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface PermissionRequestNamespace {
        $gtype: GObject.GType<PermissionRequest>;
        prototype: PermissionRequest;
    }
    interface PermissionRequest extends GObject.Object {
        // Methods

        /**
         * Allow the action which triggered this request.
         */
        allow(): void;
        /**
         * Deny the action which triggered this request.
         */
        deny(): void;

        // Virtual methods

        /**
         * Allow the action which triggered this request.
         */
        vfunc_allow(): void;
        /**
         * Deny the action which triggered this request.
         */
        vfunc_deny(): void;
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
