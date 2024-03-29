
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-webkit-6.0-import.d.ts';
    
/**
 * WebKit-6.0
 */

import type Soup from '@girs/node-soup-3.0';
import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type JavaScriptCore from '@girs/node-javascriptcore-6.0';
import type Gtk from '@girs/node-gtk-4.0';
import type Gsk from '@girs/node-gsk-4.0';
import type Graphene from '@girs/node-graphene-1.0';
import type Gdk from '@girs/node-gdk-4.0';
import type cairo from '@girs/node-cairo-1.0';
import type PangoCairo from '@girs/node-pangocairo-1.0';
import type Pango from '@girs/node-pango-1.0';
import type HarfBuzz from '@girs/node-harfbuzz-0.0';
import type freetype2 from '@girs/node-freetype2-2.0';
import type GdkPixbuf from '@girs/node-gdkpixbuf-2.0';
import type GModule from '@girs/node-gmodule-2.0';

export namespace WebKit {

/**
 * Enum values representing the authentication scheme.
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
 * Enum values used for determining the automation browsing context presentation.
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
 * Enum values used to specify autoplay policies.
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
 * Enum values used for determining the #WebKitWebContext cache model.
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
 * Enum values used to denote the stock actions for
 * #WebKitContextMenuItem<!-- -->s
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
 * Enum values used to denote the cookie acceptance policies.
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
 * Enum values used to denote the cookie persistent storage types.
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
 * Enum values representing the duration for which a credential persists.
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
 */
enum DownloadError {
    /**
     * Download failure due to network error
     */
    NETWORK,
    /**
     * Download was cancelled by user
     */
    CANCELLED_BY_USER,
    /**
     * Download failure due to destination error
     */
    DESTINATION,
}
/**
 * Enum values used to denote the various errors related to the #WebKitFaviconDatabase.
 */
enum FaviconDatabaseError {
    /**
     * The #WebKitFaviconDatabase is closed
     */
    NOT_INITIALIZED,
    /**
     * There is not an icon available for the requested URL
     */
    FAVICON_NOT_FOUND,
    /**
     * There might be an icon for the requested URL, but its data is unknown at the moment
     */
    FAVICON_UNKNOWN,
}
/**
 * Describes the status of a [struct`WebKitFeature]`.
 * 
 * The status for a given feature can be obtained with
 * [id`webkit_feature_get_status]`.
 */
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
enum HardwareAccelerationPolicy {
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
 * Enum values used to denote the different events which can trigger
 * the detection of insecure content.
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
 */
enum JavascriptError {
    /**
     * An exception was raised in JavaScript execution
     */
    SCRIPT_FAILED,
    /**
     * An unsupported parameter has been used to call and async function from API. Since 2.40
     */
    INVALID_PARAMETER,
    /**
     * The result of JavaScript execution could not be returned. Since 2.40
     */
    INVALID_RESULT,
}
/**
 * Enum values used to denote the different events that happen during a
 * #WebKitWebView load operation.
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
 * Enum values used to specify the capture state of a media device.
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
 * Enum values used to denote the various media errors.
 */
enum MediaError {
    /**
     * Preliminary load failure for media content types. A new load will be started to perform the media load. Since: 2.40
     */
    LOAD,
}
/**
 * Enum values used to denote the various navigation types.
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
 */
enum NetworkError {
    /**
     * Generic load failure
     */
    FAILED,
    /**
     * Load failure due to transport error
     */
    TRANSPORT,
    /**
     * Load failure due to unknown protocol
     */
    UNKNOWN_PROTOCOL,
    /**
     * Load failure due to cancellation
     */
    CANCELLED,
    /**
     * Load failure due to missing file
     */
    FILE_DOES_NOT_EXIST,
}
/**
 * Enum values used to set the network proxy mode.
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
 * Enum values representing query permission results.
 */
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
 * Enum values used for determining the type of a policy decision during
 * #WebKitWebView::decide-policy.
 */
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
enum PolicyError {
    /**
     * Generic load failure due to policy error
     */
    FAILED,
    /**
     * Load failure due to unsupported mime type
     */
    CANNOT_SHOW_MIME_TYPE,
    /**
     * Load failure due to URI that can not be shown
     */
    CANNOT_SHOW_URI,
    /**
     * Load failure due to frame load interruption by policy change
     */
    FRAME_LOAD_INTERRUPTED_BY_POLICY_CHANGE,
    /**
     * Load failure due to port restriction
     */
    CANNOT_USE_RESTRICTED_PORT,
}
/**
 * Enum values used to denote the various print errors.
 */
enum PrintError {
    /**
     * Unspecified error during a print operation
     */
    GENERAL,
    /**
     * Selected printer cannot be found
     */
    PRINTER_NOT_FOUND,
    /**
     * Invalid page range
     */
    INVALID_PAGE_RANGE,
}
/**
 * Enum values representing the response of the print dialog shown with
 * webkit_print_operation_run_dialog().
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
 * Enum values to specify the different ways in which a #WebKitWebView
 * can save its current web page into a self-contained file.
 */
enum SaveMode {
    /**
     * Save the current page using the MHTML format.
     */
    MHTML,
}
/**
 * Enum values used for determining the type of #WebKitScriptDialog
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
 * Enum values used to denote errors happening when creating snapshots of #WebKitWebView
 */
enum SnapshotError {
    /**
     * An error occurred when creating a webpage snapshot.
     */
    CREATE,
}
/**
 * Enum values used to specify the region from which to get a #WebKitWebView
 * snapshot
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
 * Enum values used to denote the TLS errors policy.
 */
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
enum UserContentFilterError {
    /**
     * The JSON source for a content filter is invalid.
     */
    INVALID_SOURCE,
    /**
     * The requested content filter could not be found.
     */
    NOT_FOUND,
}
/**
 * Specifies in which frames user style sheets are to be inserted in.
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
 */
enum UserMessageError {
    /**
     * The message was not handled by the receiver.
     */
    MESSAGE,
}
/**
 * Specifies at which place of documents an user script will be inserted.
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
 * Specifies how to treat an user style sheet.
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
 * Enum values used for setting if a #WebKitWebView is intended for
 * WebExtensions.
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
 * Enum values used to specify the reason why the web process terminated abnormally.
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
 * Enum values with flags representing typing attributes.
 * @bitfield 
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
 * Enum values used to specify search options.
 * @bitfield 
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
 * Enum values with flags representing the context of a #WebKitHitTestResult.
 * @bitfield 
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
 * Enum values used to describe hints that might be taken into account by input methods.
 * @bitfield 
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
 * Enum values used to specify options when taking a snapshot
 * from a #WebKitWebView.
 * @bitfield 
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
 * Enum values with flags representing types of Website data.
 * @bitfield 
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
     * IndexedDB databases.
     */
    INDEXEDDB_DATABASES,
    /**
     * Cookies.
     */
    COOKIES,
    /**
     * Hash salt used to generate the device ids used by webpages.
     */
    DEVICE_ID_HASH_SALT,
    /**
     * HSTS cache.
     */
    HSTS_CACHE,
    /**
     * Intelligent Tracking Prevention data.
     */
    ITP,
    /**
     * Service worker registrations.
     */
    SERVICE_WORKER_REGISTRATIONS,
    /**
     * DOM (CacheStorage) cache.
     */
    DOM_CACHE,
    /**
     * All types.
     */
    ALL,
}
/**
 * The copy clipboard command. Copies the current selection inside
 * a #WebKitWebView to the clipboard.
 * You can check whether it's possible to execute the command with
 * webkit_web_view_can_execute_editing_command(). In general it's
 * possible to copy to the clipboard when there is an active selection
 * inside the #WebKitWebView.
 */
const EDITING_COMMAND_COPY: string
/**
 * The create link command. Creates a link element that is inserted at
 * the current cursor position. If there's a selection, the selected text
 * will be used as the link text, otherwise the URL itself will be used.
 * It receives the link URL as argument. This command should be executed
 * with webkit_web_view_execute_editing_command_with_argument()
 */
const EDITING_COMMAND_CREATE_LINK: string
/**
 * The cut clipboard command. Copies the current selection inside
 * a #WebKitWebView to the clipboard and deletes the selected content.
 * You can check whether it's possible to execute the command with
 * webkit_web_view_can_execute_editing_command(). In general it's
 * possible to cut to the clipboard when the #WebKitWebView content is
 * editable and there is an active selection.
 */
const EDITING_COMMAND_CUT: string
/**
 * The insert image command. Creates an image element that is inserted at
 * the current cursor position. It receives an URI as argument,
 * that is used as the image source. This command should be executed with
 * webkit_web_view_execute_editing_command_with_argument().
 */
const EDITING_COMMAND_INSERT_IMAGE: string
/**
 * The paste clipboard command. Pastes the contents of the clipboard to
 * a #WebKitWebView.
 * You can check whether it's possible to execute the command with
 * webkit_web_view_can_execute_editing_command(). In general it's possible
 * to paste from the clipboard when the #WebKitWebView content is editable
 * and clipboard is not empty.
 */
const EDITING_COMMAND_PASTE: string
/**
 * The paste as plaintext clipboard command. Pastes the contents of the
 * clipboard to a #WebKitWebView, with formatting removed.
 * You can check whether it's possible to execute the command with
 * webkit_web_view_can_execute_editing_command(). In general it's possible
 * to paste from the clipboard when the #WebKitWebView content is editable
 * and clipboard is not empty.
 */
const EDITING_COMMAND_PASTE_AS_PLAIN_TEXT: string
/**
 * The redo command. Redoes a previously undone editing command in
 * a #WebKitWebView.
 * You can check whether it's possible to execute the command with
 * webkit_web_view_can_execute_editing_command(). It's only possible
 * to redo a command when it has been previously undone.
 */
const EDITING_COMMAND_REDO: string
/**
 * The select all command. Selects all the content of the current text field in
 * a #WebKitWebView.
 * It is always possible to select all text, no matter whether the
 * #WebKitWebView content is editable or not. You can still check it
 * with webkit_web_view_can_execute_editing_command().
 */
const EDITING_COMMAND_SELECT_ALL: string
/**
 * The undo command. Undoes the last editing command in a #WebKitWebView.
 * You can check whether it's possible to execute the command with
 * webkit_web_view_can_execute_editing_command(). It's only possible
 * to undo a command after a previously executed editing operation.
 */
const EDITING_COMMAND_UNDO: string
/**
 * Like webkit_get_major_version(), but from the headers used at
 * application compile time, rather than from the library linked
 * against at application run time.
 */
const MAJOR_VERSION: number
/**
 * Like webkit_get_micro_version(), but from the headers used at
 * application compile time, rather than from the library linked
 * against at application run time.
 */
const MICRO_VERSION: number
/**
 * Like webkit_get_minor_version(), but from the headers used at
 * application compile time, rather than from the library linked
 * against at application run time.
 */
const MINOR_VERSION: number
/**
 * Gets the quark for the domain of download errors.
 * @returns download error domain.
 */
function downloadErrorQuark(): GLib.Quark
/**
 * Gets the quark for the domain of favicon database errors.
 * @returns favicon database error domain.
 */
function faviconDatabaseErrorQuark(): GLib.Quark
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
function getMajorVersion(): number
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
function getMicroVersion(): number
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
function getMinorVersion(): number
/**
 * Gets the quark for the domain of JavaScript errors.
 * @returns JavaScript error domain.
 */
function javascriptErrorQuark(): GLib.Quark
/**
 * Gets the quark for the domain of media errors.
 * @returns media error domin.
 */
function mediaErrorQuark(): GLib.Quark
/**
 * Get the key system for which access permission is being requested.
 * @param request a #WebKitMediaKeySystemPermissionRequest
 * @returns the key system name for @request
 */
function mediaKeySystemPermissionGetName(request: MediaKeySystemPermissionRequest): string
/**
 * Gets the quark for the domain of networking errors.
 * @returns network error domain.
 */
function networkErrorQuark(): GLib.Quark
/**
 * Gets the quark for the domain of policy errors.
 * @returns policy error domain.
 */
function policyErrorQuark(): GLib.Quark
/**
 * Gets the quark for the domain of printing errors.
 * @returns print error domain.
 */
function printErrorQuark(): GLib.Quark
/**
 * Gets the quark for the domain of page snapshot errors.
 * @returns snapshot error domain.
 */
function snapshotErrorQuark(): GLib.Quark
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
function uriForDisplay(uri: string): string | null
/**
 * Gets the quark for the domain of user content filter errors.
 * @returns user content filter error domain.
 */
function userContentFilterErrorQuark(): GLib.Quark
/**
 * Check whether the permission request is for an audio device.
 * @param request a #WebKitUserMediaPermissionRequest
 * @returns %TRUE if access to an audio device was requested.
 */
function userMediaPermissionIsForAudioDevice(request: UserMediaPermissionRequest): boolean
/**
 * Check whether the permission request is for a display device.
 * @param request a #WebKitUserMediaPermissionRequest
 * @returns %TRUE if access to a display device was requested.
 */
function userMediaPermissionIsForDisplayDevice(request: UserMediaPermissionRequest): boolean
/**
 * Check whether the permission request is for a video device.
 * @param request a #WebKitUserMediaPermissionRequest
 * @returns %TRUE if access to a video device was requested.
 */
function userMediaPermissionIsForVideoDevice(request: UserMediaPermissionRequest): boolean
/**
 * Gets the quark for the domain of user message errors.
 * @returns user message error domain.
 */
function userMessageErrorQuark(): GLib.Quark
/**
 * Type definition for a function that will be called back when an URI request is
 * made for a user registered URI scheme.
 * @callback 
 * @param request the #WebKitURISchemeRequest
 */
interface URISchemeRequestCallback {
    (request: URISchemeRequest): void
}
module PermissionRequest {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface PermissionRequest {

    // Own properties of WebKit-6.0.WebKit.PermissionRequest

    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.PermissionRequest

    // Has conflict: allow(): void
    // Has conflict: deny(): void

    // Own virtual methods of WebKit-6.0.WebKit.PermissionRequest

    /**
     * Allow the action which triggered this request.
     * @virtual 
     */
    allow(): void
    /**
     * Deny the action which triggered this request.
     * @virtual 
     */
    deny(): void

    // Class property signals of WebKit-6.0.WebKit.PermissionRequest

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A permission request.
 * 
 * There are situations where an embedder would need to ask the user
 * for permission to do certain types of operations, such as switching
 * to fullscreen mode or reporting the user's location through the
 * standard Geolocation API. In those cases, WebKit will emit a
 * #WebKitWebView::permission-request signal with a
 * #WebKitPermissionRequest object attached to it.
 * @interface 
 */
class PermissionRequest extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.PermissionRequest

    static name: string

    // Constructors of WebKit-6.0.WebKit.PermissionRequest

    constructor(config?: PermissionRequest.ConstructorProperties) 
    _init(config?: PermissionRequest.ConstructorProperties): void
}

module AuthenticationRequest {

    // Signal callback interfaces

    /**
     * Signal callback interface for `authenticated`
     */
    interface AuthenticatedSignalCallback {
        (credential: Credential): void
    }

    /**
     * Signal callback interface for `cancelled`
     */
    interface CancelledSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface AuthenticationRequest {

    // Own properties of WebKit-6.0.WebKit.AuthenticationRequest

    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.AuthenticationRequest

    /**
     * Authenticate the #WebKitAuthenticationRequest.
     * 
     * Authenticate the #WebKitAuthenticationRequest using the #WebKitCredential
     * supplied. To continue without credentials, pass %NULL as `credential`.
     * @param credential A #WebKitCredential, or %NULL
     */
    authenticate(credential: Credential | null): void
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
    canSaveCredentials(): boolean
    /**
     * Cancel the authentication challenge.
     * 
     * This will also cancel the page loading and result in a
     * #WebKitWebView::load-failed signal with a #WebKitNetworkError of type %WEBKIT_NETWORK_ERROR_CANCELLED being emitted.
     */
    cancel(): void
    /**
     * Get the #GTlsPasswordFlags of the %WEBKIT_AUTHENTICATION_SCHEME_CLIENT_CERTIFICATE_PIN_REQUESTED authentication challenge.
     * @returns a #GTlsPasswordFlags
     */
    getCertificatePinFlags(): Gio.TlsPasswordFlags
    /**
     * Get the host that this authentication challenge is applicable to.
     * @returns The host of @request.
     */
    getHost(): string
    /**
     * Get the port that this authentication challenge is applicable to.
     * @returns The port of @request.
     */
    getPort(): number
    /**
     * Get the #WebKitCredential of the proposed authentication challenge.
     * 
     * Get the #WebKitCredential of the proposed authentication challenge that was
     * stored from a previous session. The client can use this directly for
     * authentication or construct their own #WebKitCredential.
     * @returns A #WebKitCredential encapsulating credential details or %NULL if there is no stored credential.
     */
    getProposedCredential(): Credential
    /**
     * Get the realm that this authentication challenge is applicable to.
     * @returns The realm of @request.
     */
    getRealm(): string
    /**
     * Get the authentication scheme of the authentication challenge.
     * @returns The #WebKitAuthenticationScheme of @request.
     */
    getScheme(): AuthenticationScheme
    /**
     * Get the #WebKitSecurityOrigin that this authentication challenge is applicable to.
     * @returns a newly created #WebKitSecurityOrigin.
     */
    getSecurityOrigin(): SecurityOrigin
    /**
     * Determine whether the authentication challenge is associated with a proxy server.
     * 
     * Determine whether the authentication challenge is associated with a proxy server rather than an "origin" server.
     * @returns %TRUE if authentication is for a proxy or %FALSE otherwise.
     */
    isForProxy(): boolean
    /**
     * Determine whether this this is a first attempt or a retry for this authentication challenge.
     * @returns %TRUE if authentication attempt is a retry or %FALSE otherwise.
     */
    isRetry(): boolean
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
    setCanSaveCredentials(enabled: boolean): void
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
    setProposedCredential(credential: Credential): void

    // Own signals of WebKit-6.0.WebKit.AuthenticationRequest

    connect(sigName: "authenticated", callback: AuthenticationRequest.AuthenticatedSignalCallback): number
    on(sigName: "authenticated", callback: AuthenticationRequest.AuthenticatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticated", callback: AuthenticationRequest.AuthenticatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticated", callback: AuthenticationRequest.AuthenticatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "authenticated", ...args: any[]): void
    connect(sigName: "cancelled", callback: AuthenticationRequest.CancelledSignalCallback): number
    on(sigName: "cancelled", callback: AuthenticationRequest.CancelledSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cancelled", callback: AuthenticationRequest.CancelledSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cancelled", callback: AuthenticationRequest.CancelledSignalCallback): NodeJS.EventEmitter
    emit(sigName: "cancelled", ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.AuthenticationRequest

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class AuthenticationRequest extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.AuthenticationRequest

    static name: string

    // Constructors of WebKit-6.0.WebKit.AuthenticationRequest

    constructor(config?: AuthenticationRequest.ConstructorProperties) 
    _init(config?: AuthenticationRequest.ConstructorProperties): void
}

module AutomationSession {

    // Signal callback interfaces

    /**
     * Signal callback interface for `create-web-view`
     */
    interface CreateWebViewSignalCallback {
        (): WebView
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of WebKit-6.0.WebKit.AutomationSession

        /**
         * The session unique identifier.
         */
        id?: string | null
    }

}

interface AutomationSession {

    // Own properties of WebKit-6.0.WebKit.AutomationSession

    /**
     * The session unique identifier.
     */
    readonly id: string | null
    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.AutomationSession

    /**
     * Get the the previously set #WebKitAutomationSession.
     * 
     * Get the #WebKitAutomationSession previously set with webkit_automation_session_set_application_info().
     * @returns the #WebKitAutomationSession of @session, or %NULL if no one has been set.
     */
    getApplicationInfo(): ApplicationInfo
    /**
     * Get the unique identifier of a #WebKitAutomationSession
     * @returns the unique identifier of @session
     */
    getId(): string
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
    setApplicationInfo(info: ApplicationInfo): void

    // Own signals of WebKit-6.0.WebKit.AutomationSession

    connect(sigName: "create-web-view", callback: AutomationSession.CreateWebViewSignalCallback): number
    on(sigName: "create-web-view", callback: AutomationSession.CreateWebViewSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "create-web-view", callback: AutomationSession.CreateWebViewSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "create-web-view", callback: AutomationSession.CreateWebViewSignalCallback): NodeJS.EventEmitter
    emit(sigName: "create-web-view", ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.AutomationSession

    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class AutomationSession extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.AutomationSession

    static name: string

    // Constructors of WebKit-6.0.WebKit.AutomationSession

    constructor(config?: AutomationSession.ConstructorProperties) 
    _init(config?: AutomationSession.ConstructorProperties): void
}

module BackForwardList {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        (itemAdded: BackForwardListItem | null, itemsRemoved: any | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface BackForwardList {

    // Own properties of WebKit-6.0.WebKit.BackForwardList

    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.BackForwardList

    /**
     * Returns the item that precedes the current item.
     * @returns the #WebKitBackForwardListItem    preceding the current item or %NULL.
     */
    getBackItem(): BackForwardListItem | null
    /**
     * Obtain the list of items preceding the current one.
     * @returns a #GList of    items preceding the current item.
     */
    getBackList(): BackForwardListItem[]
    /**
     * Obtain a list up to some number of items preceding the current one.
     * @param limit the number of items to retrieve
     * @returns a #GList of    items preceding the current item limited by @limit.
     */
    getBackListWithLimit(limit: number): BackForwardListItem[]
    /**
     * Returns the current item in `back_forward_list`.
     * @returns a #WebKitBackForwardListItem    or %NULL if @back_forward_list is empty.
     */
    getCurrentItem(): BackForwardListItem | null
    /**
     * Returns the item that follows the current item.
     * @returns the #WebKitBackForwardListItem    following the current item or %NULL.
     */
    getForwardItem(): BackForwardListItem | null
    /**
     * Obtain the list of items following the current one.
     * @returns a #GList of    items following the current item.
     */
    getForwardList(): BackForwardListItem[]
    /**
     * Obtain a list up to some number of items following the current one.
     * @param limit the number of items to retrieve
     * @returns a #GList of    items following the current item limited by @limit.
     */
    getForwardListWithLimit(limit: number): BackForwardListItem[]
    /**
     * Obtain the amount of items in the list.
     * @returns the length of @back_forward_list.
     */
    getLength(): number
    /**
     * Returns the item at a given index relative to the current item.
     * @param index the index of the item
     * @returns the #WebKitBackForwardListItem    located at the specified index relative to the current item or %NULL.
     */
    getNthItem(index: number): BackForwardListItem | null

    // Own signals of WebKit-6.0.WebKit.BackForwardList

    connect(sigName: "changed", callback: BackForwardList.ChangedSignalCallback): number
    on(sigName: "changed", callback: BackForwardList.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: BackForwardList.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: BackForwardList.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", itemsRemoved: any | null, ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.BackForwardList

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class BackForwardList extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.BackForwardList

    static name: string

    // Constructors of WebKit-6.0.WebKit.BackForwardList

    constructor(config?: BackForwardList.ConstructorProperties) 
    _init(config?: BackForwardList.ConstructorProperties): void
}

module BackForwardListItem {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
    }

}

interface BackForwardListItem {

    // Own properties of WebKit-6.0.WebKit.BackForwardListItem

    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.BackForwardListItem

    /**
     * Obtain the original URI of the item.
     * 
     * See also webkit_back_forward_list_item_get_uri().
     * @returns the original URI of @list_item or %NULL    when the original URI is empty.
     */
    getOriginalUri(): string
    /**
     * Obtain the title of the item.
     * @returns the page title of @list_item or %NULL    when the title is empty.
     */
    getTitle(): string
    /**
     * Obtain the URI of the item.
     * 
     * This URI may differ from the original URI if the page was,
     * for example, redirected to a new location.
     * See also webkit_back_forward_list_item_get_original_uri().
     * @returns the URI of @list_item or %NULL    when the URI is empty.
     */
    getUri(): string

    // Class property signals of WebKit-6.0.WebKit.BackForwardListItem

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * One item of the #WebKitBackForwardList.
 * 
 * A history item is part of the #WebKitBackForwardList and consists
 * out of a title and a URI.
 * @class 
 */
class BackForwardListItem extends GObject.InitiallyUnowned {

    // Own properties of WebKit-6.0.WebKit.BackForwardListItem

    static name: string

    // Constructors of WebKit-6.0.WebKit.BackForwardListItem

    constructor(config?: BackForwardListItem.ConstructorProperties) 
    _init(config?: BackForwardListItem.ConstructorProperties): void
}

module ClipboardPermissionRequest {

    // Constructor properties interface

    interface ConstructorProperties extends PermissionRequest.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface ClipboardPermissionRequest extends PermissionRequest {

    // Own properties of WebKit-6.0.WebKit.ClipboardPermissionRequest

    __gtype__: number

    // Class property signals of WebKit-6.0.WebKit.ClipboardPermissionRequest

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class ClipboardPermissionRequest extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.ClipboardPermissionRequest

    static name: string

    // Constructors of WebKit-6.0.WebKit.ClipboardPermissionRequest

    constructor(config?: ClipboardPermissionRequest.ConstructorProperties) 
    _init(config?: ClipboardPermissionRequest.ConstructorProperties): void
}

module ColorChooserRequest {

    // Signal callback interfaces

    /**
     * Signal callback interface for `finished`
     */
    interface FinishedSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of WebKit-6.0.WebKit.ColorChooserRequest

        /**
         * The #GdkRGBA color of the request
         */
        rgba?: Gdk.RGBA | null
    }

}

interface ColorChooserRequest {

    // Own properties of WebKit-6.0.WebKit.ColorChooserRequest

    /**
     * The #GdkRGBA color of the request
     */
    rgba: Gdk.RGBA
    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.ColorChooserRequest

    /**
     * Cancels `request` and the input element changes to use the initial color.
     * 
     * Cancels `request` and the input element changes to use the initial color
     * it has before the request started.
     * The signal #WebKitColorChooserRequest::finished
     * is emitted to notify that the request has finished.
     */
    cancel(): void
    /**
     * Finishes `request` and the input element keeps the current value of
     * #WebKitColorChooserRequest:rgba.
     * 
     * Finishes `request` and the input element keeps the current value of
     * #WebKitColorChooserRequest:rgba.
     * The signal #WebKitColorChooserRequest::finished
     * is emitted to notify that the request has finished.
     */
    finish(): void
    /**
     * Gets the bounding box of the color input element.
     */
    getElementRectangle(): /* rect */ Gdk.Rectangle
    /**
     * Gets the current #GdkRGBA color of `request`
     */
    getRgba(): /* rgba */ Gdk.RGBA
    /**
     * Sets the current #GdkRGBA color of `request`
     * @param rgba a pointer #GdkRGBA
     */
    setRgba(rgba: Gdk.RGBA): void

    // Own signals of WebKit-6.0.WebKit.ColorChooserRequest

    connect(sigName: "finished", callback: ColorChooserRequest.FinishedSignalCallback): number
    on(sigName: "finished", callback: ColorChooserRequest.FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: ColorChooserRequest.FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: ColorChooserRequest.FinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "finished", ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.ColorChooserRequest

    connect(sigName: "notify::rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rgba", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class ColorChooserRequest extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.ColorChooserRequest

    static name: string

    // Constructors of WebKit-6.0.WebKit.ColorChooserRequest

    constructor(config?: ColorChooserRequest.ConstructorProperties) 
    _init(config?: ColorChooserRequest.ConstructorProperties): void
}

module ContextMenu {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ContextMenu {

    // Own properties of WebKit-6.0.WebKit.ContextMenu

    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.ContextMenu

    /**
     * Adds `item` at the end of the `menu`.
     * @param item the #WebKitContextMenuItem to add
     */
    append(item: ContextMenuItem): void
    /**
     * Gets the first item in the `menu`.
     * @returns the first #WebKitContextMenuItem of @menu,    or %NULL if the #WebKitContextMenu is empty.
     */
    first(): ContextMenuItem
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
    getEvent(): Gdk.Event
    /**
     * Gets the item at the given position in the `menu`.
     * @param position the position of the item, counting from 0
     * @returns the #WebKitContextMenuItem at position @position in @menu,    or %NULL if the position is off the end of the @menu.
     */
    getItemAtPosition(position: number): ContextMenuItem
    /**
     * Returns the item list of `menu`.
     * @returns a #GList of    #WebKitContextMenuItem<!-- -->s
     */
    getItems(): ContextMenuItem[]
    /**
     * Gets the length of the `menu`.
     * @returns the number of #WebKitContextMenuItem<!-- -->s in @menu
     */
    getNItems(): number
    /**
     * Gets the user data of `menu`.
     * 
     * This function can be used from the UI Process to get user data previously set
     * from the Web Process with webkit_context_menu_set_user_data().
     * @returns the user data of @menu, or %NULL if @menu doesn't have user data
     */
    getUserData(): GLib.Variant
    /**
     * Inserts `item` into the `menu` at the given position.
     * 
     * If `position` is negative, or is larger than the number of items
     * in the #WebKitContextMenu, the item is added on to the end of
     * the `menu`. The first position is 0.
     * @param item the #WebKitContextMenuItem to add
     * @param position the position to insert the item
     */
    insert(item: ContextMenuItem, position: number): void
    /**
     * Gets the last item in the `menu`.
     * @returns the last #WebKitContextMenuItem of @menu,    or %NULL if the #WebKitContextMenu is empty.
     */
    last(): ContextMenuItem
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
    moveItem(item: ContextMenuItem, position: number): void
    /**
     * Adds `item` at the beginning of the `menu`.
     * @param item the #WebKitContextMenuItem to add
     */
    prepend(item: ContextMenuItem): void
    /**
     * Removes `item` from the `menu`.
     * 
     * See also webkit_context_menu_remove_all() to remove all items.
     * @param item the #WebKitContextMenuItem to remove
     */
    remove(item: ContextMenuItem): void
    /**
     * Removes all items of the `menu`.
     */
    removeAll(): void
    /**
     * Sets user data to `menu`.
     * 
     * This function can be used from a Web Process extension to set user data
     * that can be retrieved from the UI Process using webkit_context_menu_get_user_data().
     * If the `user_data` #GVariant is floating, it is consumed.
     * @param userData a #GVariant
     */
    setUserData(userData: GLib.Variant): void

    // Class property signals of WebKit-6.0.WebKit.ContextMenu

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class ContextMenu extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.ContextMenu

    static name: string

    // Constructors of WebKit-6.0.WebKit.ContextMenu

    constructor(config?: ContextMenu.ConstructorProperties) 
    /**
     * Creates a new #WebKitContextMenu object.
     * 
     * Creates a new #WebKitContextMenu object to be used as a submenu of an existing
     * #WebKitContextMenu. The context menu of a #WebKitWebView is created by the view
     * and passed as an argument of #WebKitWebView::context-menu signal.
     * To add items to the menu use webkit_context_menu_prepend(),
     * webkit_context_menu_append() or webkit_context_menu_insert().
     * See also webkit_context_menu_new_with_items() to create a #WebKitContextMenu with
     * a list of initial items.
     * @constructor 
     * @returns The newly created #WebKitContextMenu object
     */
    constructor() 
    /**
     * Creates a new #WebKitContextMenu object.
     * 
     * Creates a new #WebKitContextMenu object to be used as a submenu of an existing
     * #WebKitContextMenu. The context menu of a #WebKitWebView is created by the view
     * and passed as an argument of #WebKitWebView::context-menu signal.
     * To add items to the menu use webkit_context_menu_prepend(),
     * webkit_context_menu_append() or webkit_context_menu_insert().
     * See also webkit_context_menu_new_with_items() to create a #WebKitContextMenu with
     * a list of initial items.
     * @constructor 
     * @returns The newly created #WebKitContextMenu object
     */
    static new(): ContextMenu
    /**
     * Creates a new #WebKitContextMenu object with the given items.
     * 
     * Creates a new #WebKitContextMenu object to be used as a submenu of an existing
     * #WebKitContextMenu with the given initial items.
     * See also webkit_context_menu_new()
     * @constructor 
     * @param items a #GList of #WebKitContextMenuItem
     * @returns The newly created #WebKitContextMenu object
     */
    static newWithItems(items: ContextMenuItem[]): ContextMenu
    _init(config?: ContextMenu.ConstructorProperties): void
}

module ContextMenuItem {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
    }

}

interface ContextMenuItem {

    // Own properties of WebKit-6.0.WebKit.ContextMenuItem

    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.ContextMenuItem

    /**
     * Gets the action associated to `item` as a #GAction.
     * @returns the #GAction associated to the #WebKitContextMenuItem,    or %NULL if @item is a separator.
     */
    getGaction(): Gio.Action
    /**
     * Gets the #WebKitContextMenuAction of `item`.
     * 
     * If the #WebKitContextMenuItem was not
     * created for a stock action %WEBKIT_CONTEXT_MENU_ACTION_CUSTOM will be
     * returned. If the #WebKitContextMenuItem is a separator %WEBKIT_CONTEXT_MENU_ACTION_NO_ACTION
     * will be returned.
     * @returns the #WebKitContextMenuAction of @item
     */
    getStockAction(): ContextMenuAction
    /**
     * Gets the submenu of `item`.
     * @returns the #WebKitContextMenu representing the submenu of    @item or %NULL if @item doesn't have a submenu.
     */
    getSubmenu(): ContextMenu
    /**
     * Checks whether `item` is a separator.
     * @returns %TRUE is @item is a separator or %FALSE otherwise
     */
    isSeparator(): boolean
    /**
     * Sets or replaces the `item` submenu.
     * 
     * If `submenu` is %NULL the current
     * submenu of `item` is removed.
     * @param submenu a #WebKitContextMenu
     */
    setSubmenu(submenu: ContextMenu | null): void

    // Class property signals of WebKit-6.0.WebKit.ContextMenuItem

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * One item of a #WebKitContextMenu.
 * 
 * The #WebKitContextMenu is composed of #WebKitContextMenuItem<!--
 * -->s. These items can be created from a #GtkAction, from a
 * #WebKitContextMenuAction or from a #WebKitContextMenuAction and a
 * label. These #WebKitContextMenuAction<!-- -->s denote stock actions
 * for the items. You can also create separators and submenus.
 * @class 
 */
class ContextMenuItem extends GObject.InitiallyUnowned {

    // Own properties of WebKit-6.0.WebKit.ContextMenuItem

    static name: string

    // Constructors of WebKit-6.0.WebKit.ContextMenuItem

    constructor(config?: ContextMenuItem.ConstructorProperties) 
    /**
     * Creates a new #WebKitContextMenuItem for the given `action` and `label`.
     * 
     * On activation
     * `target` will be passed as parameter to the callback.
     * @constructor 
     * @param action a #GAction
     * @param label the menu item label text
     * @param target a #GVariant to use as the action target
     * @returns the newly created #WebKitContextMenuItem object.
     */
    static newFromGaction(action: Gio.Action, label: string, target: GLib.Variant | null): ContextMenuItem
    /**
     * Creates a new #WebKitContextMenuItem for the given stock action.
     * 
     * Stock actions are handled automatically by WebKit so that, for example,
     * when a menu item created with a %WEBKIT_CONTEXT_MENU_ACTION_STOP is
     * activated the action associated will be handled by WebKit and the current
     * load operation will be stopped. You can get the #GAction of a
     * #WebKitContextMenuItem created with a #WebKitContextMenuAction with
     * webkit_context_menu_item_get_gaction() and connect to the #GSimpleAction::activate signal
     * to be notified when the item is activated, but you can't prevent the associated
     * action from being performed.
     * @constructor 
     * @param action a #WebKitContextMenuAction stock action
     * @returns the newly created #WebKitContextMenuItem object.
     */
    static newFromStockAction(action: ContextMenuAction): ContextMenuItem
    /**
     * Creates a new #WebKitContextMenuItem for the given stock action using the given `label`.
     * 
     * Stock actions have a predefined label, this method can be used to create a
     * #WebKitContextMenuItem for a #WebKitContextMenuAction but using a custom label.
     * @constructor 
     * @param action a #WebKitContextMenuAction stock action
     * @param label a custom label text to use instead of the predefined one
     * @returns the newly created #WebKitContextMenuItem object.
     */
    static newFromStockActionWithLabel(action: ContextMenuAction, label: string): ContextMenuItem
    /**
     * Creates a new #WebKitContextMenuItem representing a separator.
     * @constructor 
     * @returns the newly created #WebKitContextMenuItem object.
     */
    static newSeparator(): ContextMenuItem
    /**
     * Creates a new #WebKitContextMenuItem using the given `label` with a submenu.
     * @constructor 
     * @param label the menu item label text
     * @param submenu a #WebKitContextMenu to set
     * @returns the newly created #WebKitContextMenuItem object.
     */
    static newWithSubmenu(label: string, submenu: ContextMenu): ContextMenuItem
    _init(config?: ContextMenuItem.ConstructorProperties): void
}

module CookieManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface CookieManager {

    // Own properties of WebKit-6.0.WebKit.CookieManager

    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.CookieManager

    /**
     * Asynchronously add a #SoupCookie to the underlying storage.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * webkit_cookie_manager_add_cookie_finish() to get the result of the operation.
     * @param cookie the #SoupCookie to be added
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    addCookie(cookie: Soup.Cookie, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation started with webkit_cookie_manager_add_cookie().
     * @param result a #GAsyncResult
     * @returns %TRUE if the cookie was added or %FALSE in case of error.
     */
    addCookieFinish(result: Gio.AsyncResult): boolean
    /**
     * Asynchronously delete a #SoupCookie from the current session.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * webkit_cookie_manager_delete_cookie_finish() to get the result of the operation.
     * @param cookie the #SoupCookie to be deleted
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    deleteCookie(cookie: Soup.Cookie, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation started with webkit_cookie_manager_delete_cookie().
     * @param result a #GAsyncResult
     * @returns %TRUE if the cookie was deleted or %FALSE in case of error.
     */
    deleteCookieFinish(result: Gio.AsyncResult): boolean
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
    getAcceptPolicy(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation started with webkit_cookie_manager_get_accept_policy().
     * @param result a #GAsyncResult
     * @returns the cookie acceptance policy of @cookie_manager as a #WebKitCookieAcceptPolicy.
     */
    getAcceptPolicyFinish(result: Gio.AsyncResult): CookieAcceptPolicy
    /**
     * Asynchronously get a list of #SoupCookie from `cookie_manager`.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * webkit_cookie_manager_get_all_cookies_finish() to get the result of the operation.
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback (closure user_data): a #GAsyncReadyCallback to call when the request is satisfied
     */
    getAllCookies(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation started with webkit_cookie_manager_get_all_cookies().
     * 
     * The return value is a #GSList of #SoupCookie instances which should be released
     * with g_list_free_full() and soup_cookie_free().
     * @param result a #GAsyncResult
     * @returns A #GList of #SoupCookie instances.
     */
    getAllCookiesFinish(result: Gio.AsyncResult): Soup.Cookie[]
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
    getCookies(uri: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation started with webkit_cookie_manager_get_cookies().
     * 
     * The return value is a #GSList of #SoupCookie instances which should be released
     * with g_list_free_full() and soup_cookie_free().
     * @param result a #GAsyncResult
     * @returns A #GList of #SoupCookie instances.
     */
    getCookiesFinish(result: Gio.AsyncResult): Soup.Cookie[]
    /**
     * Asynchronously replace all cookies in `cookie_manager` with the given list of `cookies`.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * webkit_cookie_manager_replace_cookies_finish() to get the result of the operation.
     * @param cookies a #GList of #SoupCookie to be added
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback (closure user_data): a #GAsyncReadyCallback to call when the request is satisfied
     */
    replaceCookies(cookies: Soup.Cookie[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation started with webkit_cookie_manager_replace_cookies().
     * @param result a #GAsyncResult
     * @returns %TRUE if the cookies were added or %FALSE in case of error.
     */
    replaceCookiesFinish(result: Gio.AsyncResult): boolean
    /**
     * Set the cookie acceptance policy of `cookie_manager` as `policy`.
     * 
     * Note that ITP has its own way to handle third-party cookies, so when it's enabled,
     * and `policy` is set to %WEBKIT_COOKIE_POLICY_ACCEPT_NO_THIRD_PARTY, %WEBKIT_COOKIE_POLICY_ACCEPT_ALWAYS
     * will be used instead. Once disabled, the policy will be set back to %WEBKIT_COOKIE_POLICY_ACCEPT_NO_THIRD_PARTY.
     * See also webkit_website_data_manager_set_itp_enabled().
     * @param policy a #WebKitCookieAcceptPolicy
     */
    setAcceptPolicy(policy: CookieAcceptPolicy): void
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
    setPersistentStorage(filename: string, storage: CookiePersistentStorage): void

    // Own signals of WebKit-6.0.WebKit.CookieManager

    connect(sigName: "changed", callback: CookieManager.ChangedSignalCallback): number
    on(sigName: "changed", callback: CookieManager.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: CookieManager.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: CookieManager.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.CookieManager

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Defines how to handle cookies in a #WebKitWebContext.
 * 
 * The WebKitCookieManager defines how to set up and handle cookies.
 * You can get it from a #WebKitWebsiteDataManager with
 * webkit_website_data_manager_get_cookie_manager(), and use it to set where to
 * store cookies with webkit_cookie_manager_set_persistent_storage(),
 * or to set the acceptance policy, with webkit_cookie_manager_get_accept_policy().
 * @class 
 */
class CookieManager extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.CookieManager

    static name: string

    // Constructors of WebKit-6.0.WebKit.CookieManager

    constructor(config?: CookieManager.ConstructorProperties) 
    _init(config?: CookieManager.ConstructorProperties): void
}

module DeviceInfoPermissionRequest {

    // Constructor properties interface

    interface ConstructorProperties extends PermissionRequest.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface DeviceInfoPermissionRequest extends PermissionRequest {

    // Own properties of WebKit-6.0.WebKit.DeviceInfoPermissionRequest

    __gtype__: number

    // Class property signals of WebKit-6.0.WebKit.DeviceInfoPermissionRequest

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class DeviceInfoPermissionRequest extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.DeviceInfoPermissionRequest

    static name: string

    // Constructors of WebKit-6.0.WebKit.DeviceInfoPermissionRequest

    constructor(config?: DeviceInfoPermissionRequest.ConstructorProperties) 
    _init(config?: DeviceInfoPermissionRequest.ConstructorProperties): void
}

module Download {

    // Signal callback interfaces

    /**
     * Signal callback interface for `created-destination`
     */
    interface CreatedDestinationSignalCallback {
        (destination: string | null): void
    }

    /**
     * Signal callback interface for `decide-destination`
     */
    interface DecideDestinationSignalCallback {
        (suggestedFilename: string | null): boolean
    }

    /**
     * Signal callback interface for `failed`
     */
    interface FailedSignalCallback {
        (error: GLib.Error): void
    }

    /**
     * Signal callback interface for `finished`
     */
    interface FinishedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `received-data`
     */
    interface ReceivedDataSignalCallback {
        (dataLength: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of WebKit-6.0.WebKit.Download

        /**
         * Whether or not the download is allowed to overwrite an existing file on
         * disk. If this property is %FALSE and the destination already exists,
         * the download will fail.
         */
        allow_overwrite?: boolean | null
    }

}

interface Download {

    // Own properties of WebKit-6.0.WebKit.Download

    /**
     * Whether or not the download is allowed to overwrite an existing file on
     * disk. If this property is %FALSE and the destination already exists,
     * the download will fail.
     */
    allowOverwrite: boolean
    /**
     * The local path to where the download will be saved.
     */
    readonly destination: string | null
    /**
     * An estimate of the percent completion for the download operation.
     * This value will range from 0.0 to 1.0. The value is an estimate
     * based on the total number of bytes expected to be received for
     * a download.
     * If you need a more accurate progress information you can connect to
     * #WebKitDownload::received-data signal to track the progress.
     */
    readonly estimatedProgress: number
    /**
     * The #WebKitURIResponse associated with this download.
     */
    readonly response: URIResponse
    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.Download

    /**
     * Cancels the download.
     * 
     * When the ongoing download
     * operation is effectively cancelled the signal
     * #WebKitDownload::failed is emitted with
     * %WEBKIT_DOWNLOAD_ERROR_CANCELLED_BY_USER error.
     */
    cancel(): void
    /**
     * Returns the current value of the #WebKitDownload:allow-overwrite property.
     * 
     * Returns the current value of the #WebKitDownload:allow-overwrite property,
     * which determines whether the download will overwrite an existing file on
     * disk, or if it will fail if the destination already exists.
     * @returns the current value of the #WebKitDownload:allow-overwrite property
     */
    getAllowOverwrite(): boolean
    /**
     * Obtains the destination to which the downloaded file will be written.
     * 
     * You can connect to #WebKitDownload::created-destination to make
     * sure this method returns a valid destination.
     * @returns the destination or %NULL
     */
    getDestination(): string | null
    /**
     * Gets the elapsed time in seconds, including any fractional part.
     * 
     * If the download finished, had an error or was cancelled this is
     * the time between its start and the event.
     * @returns seconds since the download was started
     */
    getElapsedTime(): number
    /**
     * Gets the value of the #WebKitDownload:estimated-progress property.
     * Gets the value of the #WebKitDownload:estimated-progress property.
     * You can monitor the estimated progress of the download operation by
     * connecting to the notify::estimated-progress signal of `download`.
     * @returns an estimate of the of the percent complete for a download     as a range from 0.0 to 1.0.
     */
    getEstimatedProgress(): number
    /**
     * Gets the length of the data already downloaded for `download`.
     * 
     * Gets the length of the data already downloaded for `download`
     * in bytes.
     * @returns the amount of bytes already downloaded.
     */
    getReceivedDataLength(): number
    /**
     * Retrieves the #WebKitURIRequest object that backs the download
     * process.
     * @returns the #WebKitURIRequest of @download
     */
    getRequest(): URIRequest
    /**
     * Retrieves the #WebKitURIResponse object that backs the download process.
     * 
     * Retrieves the #WebKitURIResponse object that backs the download
     * process. This method returns %NULL if called before the response
     * is received from the server. You can connect to notify::response
     * signal to be notified when the response is received.
     * @returns the #WebKitURIResponse, or %NULL if     the response hasn't been received yet.
     */
    getResponse(): URIResponse
    /**
     * Get the #WebKitWebView that initiated the download.
     * @returns the #WebKitWebView that initiated @download,    or %NULL if @download was not initiated by a #WebKitWebView.
     */
    getWebView(): WebView
    /**
     * Sets the #WebKitDownload:allow-overwrite property.
     * 
     * Sets the #WebKitDownload:allow-overwrite property, which determines whether
     * the download may overwrite an existing file on disk, or if it will fail if
     * the destination already exists.
     * @param allowed the new value for the #WebKitDownload:allow-overwrite property
     */
    setAllowOverwrite(allowed: boolean): void
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
    setDestination(destination: string): void

    // Own signals of WebKit-6.0.WebKit.Download

    connect(sigName: "created-destination", callback: Download.CreatedDestinationSignalCallback): number
    on(sigName: "created-destination", callback: Download.CreatedDestinationSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "created-destination", callback: Download.CreatedDestinationSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "created-destination", callback: Download.CreatedDestinationSignalCallback): NodeJS.EventEmitter
    emit(sigName: "created-destination", ...args: any[]): void
    connect(sigName: "decide-destination", callback: Download.DecideDestinationSignalCallback): number
    on(sigName: "decide-destination", callback: Download.DecideDestinationSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "decide-destination", callback: Download.DecideDestinationSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "decide-destination", callback: Download.DecideDestinationSignalCallback): NodeJS.EventEmitter
    emit(sigName: "decide-destination", ...args: any[]): void
    connect(sigName: "failed", callback: Download.FailedSignalCallback): number
    on(sigName: "failed", callback: Download.FailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "failed", callback: Download.FailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "failed", callback: Download.FailedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "failed", ...args: any[]): void
    connect(sigName: "finished", callback: Download.FinishedSignalCallback): number
    on(sigName: "finished", callback: Download.FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: Download.FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: Download.FinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "finished", ...args: any[]): void
    connect(sigName: "received-data", callback: Download.ReceivedDataSignalCallback): number
    on(sigName: "received-data", callback: Download.ReceivedDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "received-data", callback: Download.ReceivedDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "received-data", callback: Download.ReceivedDataSignalCallback): NodeJS.EventEmitter
    emit(sigName: "received-data", ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.Download

    connect(sigName: "notify::allow-overwrite", callback: (...args: any[]) => void): number
    on(sigName: "notify::allow-overwrite", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allow-overwrite", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allow-overwrite", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allow-overwrite", ...args: any[]): void
    connect(sigName: "notify::destination", callback: (...args: any[]) => void): number
    on(sigName: "notify::destination", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::destination", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::destination", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::destination", ...args: any[]): void
    connect(sigName: "notify::estimated-progress", callback: (...args: any[]) => void): number
    on(sigName: "notify::estimated-progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::estimated-progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::estimated-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::estimated-progress", ...args: any[]): void
    connect(sigName: "notify::response", callback: (...args: any[]) => void): number
    on(sigName: "notify::response", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::response", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::response", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Object used to communicate with the application when downloading.
 * 
 * #WebKitDownload carries information about a download request and
 * response, including a #WebKitURIRequest and a #WebKitURIResponse
 * objects. The application may use this object to control the
 * download process, or to simply figure out what is to be downloaded,
 * and handle the download process itself.
 * @class 
 */
class Download extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.Download

    static name: string

    // Constructors of WebKit-6.0.WebKit.Download

    constructor(config?: Download.ConstructorProperties) 
    _init(config?: Download.ConstructorProperties): void
}

module EditorState {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface EditorState {

    // Own properties of WebKit-6.0.WebKit.EditorState

    /**
     * Bitmask of #WebKitEditorTypingAttributes flags.
     * See webkit_editor_state_get_typing_attributes() for more information.
     */
    readonly typingAttributes: number
    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.EditorState

    /**
     * Gets the typing attributes at the current cursor position.
     * 
     * If there is a selection, this returns the typing attributes
     * of the selected text. Note that in case of a selection,
     * typing attributes are considered active only when they are
     * present throughout the selection.
     * @returns a bitmask of #WebKitEditorTypingAttributes flags
     */
    getTypingAttributes(): number
    /**
     * Gets whether a copy command can be issued.
     * @returns %TRUE if copy is currently available
     */
    isCopyAvailable(): boolean
    /**
     * Gets whether a cut command can be issued.
     * @returns %TRUE if cut is currently available
     */
    isCutAvailable(): boolean
    /**
     * Gets whether a paste command can be issued.
     * @returns %TRUE if paste is currently available
     */
    isPasteAvailable(): boolean
    /**
     * Gets whether a redo command can be issued.
     * @returns %TRUE if redo is currently available
     */
    isRedoAvailable(): boolean
    /**
     * Gets whether an undo command can be issued.
     * @returns %TRUE if undo is currently available
     */
    isUndoAvailable(): boolean

    // Class property signals of WebKit-6.0.WebKit.EditorState

    connect(sigName: "notify::typing-attributes", callback: (...args: any[]) => void): number
    on(sigName: "notify::typing-attributes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::typing-attributes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::typing-attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::typing-attributes", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Web editor state.
 * 
 * WebKitEditorState represents the state of a #WebKitWebView editor.
 * Use webkit_web_view_get_editor_state() to get the WebKitEditorState
 * of a #WebKitWebView.
 * @class 
 */
class EditorState extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.EditorState

    static name: string

    // Constructors of WebKit-6.0.WebKit.EditorState

    constructor(config?: EditorState.ConstructorProperties) 
    _init(config?: EditorState.ConstructorProperties): void
}

module FaviconDatabase {

    // Signal callback interfaces

    /**
     * Signal callback interface for `favicon-changed`
     */
    interface FaviconChangedSignalCallback {
        (pageUri: string | null, faviconUri: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface FaviconDatabase {

    // Own properties of WebKit-6.0.WebKit.FaviconDatabase

    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.FaviconDatabase

    /**
     * Clears all icons from the database.
     */
    clear(): void
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
     * @param pageUri URI of the page for which we want to retrieve the favicon
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is            satisfied or %NULL if you don't care about the result.
     */
    getFavicon(pageUri: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with webkit_favicon_database_get_favicon().
     * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to webkit_favicon_database_get_favicon()
     * @returns a new favicon image, or %NULL in case of error.
     */
    getFaviconFinish(result: Gio.AsyncResult): Gdk.Texture
    /**
     * Obtains the URI of the favicon for the given `page_uri`.
     * @param pageUri URI of the page containing the icon
     * @returns a newly allocated URI for the favicon, or %NULL if the database doesn't have a favicon for @page_uri.
     */
    getFaviconUri(pageUri: string): string | null

    // Own signals of WebKit-6.0.WebKit.FaviconDatabase

    connect(sigName: "favicon-changed", callback: FaviconDatabase.FaviconChangedSignalCallback): number
    on(sigName: "favicon-changed", callback: FaviconDatabase.FaviconChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "favicon-changed", callback: FaviconDatabase.FaviconChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "favicon-changed", callback: FaviconDatabase.FaviconChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "favicon-changed", faviconUri: string | null, ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.FaviconDatabase

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class FaviconDatabase extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.FaviconDatabase

    static name: string

    // Constructors of WebKit-6.0.WebKit.FaviconDatabase

    constructor(config?: FaviconDatabase.ConstructorProperties) 
    _init(config?: FaviconDatabase.ConstructorProperties): void
}

module FileChooserRequest {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface FileChooserRequest {

    // Own properties of WebKit-6.0.WebKit.FileChooserRequest

    /**
     * The filter currently associated with the request. See
     * webkit_file_chooser_request_get_mime_types_filter() for more
     * details.
     */
    readonly filter: Gtk.FileFilter
    /**
     * A %NULL-terminated array of strings containing the list of MIME
     * types the file chooser dialog should handle. See
     * webkit_file_chooser_request_get_mime_types() for more details.
     */
    readonly mimeTypes: string[]
    /**
     * Whether the file chooser should allow selecting multiple
     * files. See
     * webkit_file_chooser_request_get_select_multiple() for
     * more details.
     */
    readonly selectMultiple: boolean
    /**
     * A %NULL-terminated array of strings containing the list of
     * selected files associated to the current request. See
     * webkit_file_chooser_request_get_selected_files() for more details.
     */
    readonly selectedFiles: string[]
    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.FileChooserRequest

    /**
     * Ask WebKit to cancel the request.
     * 
     * It's important to do this in case
     * no selection has been made in the client, otherwise the request
     * won't be properly completed and the browser will keep the request
     * pending forever, which might cause the browser to hang.
     */
    cancel(): void
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
    getMimeTypes(): string[]
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
    getMimeTypesFilter(): Gtk.FileFilter
    /**
     * Whether the file chooser should allow selecting multiple files.
     * 
     * Determine whether the file chooser associated to this
     * #WebKitFileChooserRequest should allow selecting multiple files,
     * which depends on the HTML input element having a 'multiple'
     * attribute defined.
     * @returns %TRUE if the file chooser should allow selecting multiple files or %FALSE otherwise.
     */
    getSelectMultiple(): boolean
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
    getSelectedFiles(): string[]
    /**
     * Ask WebKit to select local files for upload and complete the
     * request.
     * @param files a %NULL-terminated array of strings, containing paths to local files.
     */
    selectFiles(files: string[]): void

    // Class property signals of WebKit-6.0.WebKit.FileChooserRequest

    connect(sigName: "notify::filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filter", ...args: any[]): void
    connect(sigName: "notify::mime-types", callback: (...args: any[]) => void): number
    on(sigName: "notify::mime-types", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mime-types", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mime-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mime-types", ...args: any[]): void
    connect(sigName: "notify::select-multiple", callback: (...args: any[]) => void): number
    on(sigName: "notify::select-multiple", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::select-multiple", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::select-multiple", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::select-multiple", ...args: any[]): void
    connect(sigName: "notify::selected-files", callback: (...args: any[]) => void): number
    on(sigName: "notify::selected-files", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::selected-files", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::selected-files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::selected-files", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class FileChooserRequest extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.FileChooserRequest

    static name: string

    // Constructors of WebKit-6.0.WebKit.FileChooserRequest

    constructor(config?: FileChooserRequest.ConstructorProperties) 
    _init(config?: FileChooserRequest.ConstructorProperties): void
}

module FindController {

    // Signal callback interfaces

    /**
     * Signal callback interface for `counted-matches`
     */
    interface CountedMatchesSignalCallback {
        (matchCount: number): void
    }

    /**
     * Signal callback interface for `failed-to-find-text`
     */
    interface FailedToFindTextSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `found-text`
     */
    interface FoundTextSignalCallback {
        (matchCount: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of WebKit-6.0.WebKit.FindController

        /**
         * The #WebKitWebView this controller is associated to.
         */
        web_view?: WebView | null
    }

}

interface FindController {

    // Own properties of WebKit-6.0.WebKit.FindController

    /**
     * The maximum number of matches to report for a given search.
     */
    readonly maxMatchCount: number
    /**
     * The options to be used in the search operation.
     */
    readonly options: FindOptions
    /**
     * The current search text for this #WebKitFindController.
     */
    readonly text: string | null
    /**
     * The #WebKitWebView this controller is associated to.
     */
    readonly webView: WebView
    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.FindController

    /**
     * Counts the number of matches for `search_text`.
     * 
     * Counts the number of matches for `search_text` found in the
     * #WebKitWebView with the provided `find_options`. The number of
     * matches will be provided by the
     * #WebKitFindController::counted-matches signal.
     * @param searchText the text to look for
     * @param findOptions a bitmask with the #WebKitFindOptions used in the search
     * @param maxMatchCount the maximum number of matches allowed in the search
     */
    countMatches(searchText: string, findOptions: number, maxMatchCount: number): void
    /**
     * Gets the maximum number of matches to report.
     * 
     * Gets the maximum number of matches to report during a text
     * lookup. This number is passed as the last argument of
     * webkit_find_controller_search() or
     * webkit_find_controller_count_matches().
     * @returns the maximum number of matches to report.
     */
    getMaxMatchCount(): number
    /**
     * Gets the #WebKitFindOptions for the current search.
     * 
     * Gets a bitmask containing the #WebKitFindOptions associated with
     * the current search.
     * @returns a bitmask containing the #WebKitFindOptions associated with the current search.
     */
    getOptions(): number
    /**
     * Gets the text that `find_controller` is searching for.
     * 
     * Gets the text that `find_controller` is currently searching
     * for. This text is passed to either
     * webkit_find_controller_search() or
     * webkit_find_controller_count_matches().
     * @returns the text to look for in the #WebKitWebView.
     */
    getSearchText(): string
    /**
     * Gets the #WebKitWebView this find controller is associated to.
     * 
     * Do
     * not dereference the returned instance as it belongs to the
     * #WebKitFindController.
     * @returns the #WebKitWebView.
     */
    getWebView(): WebView
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
     * @param searchText the text to look for
     * @param findOptions a bitmask with the #WebKitFindOptions used in the search
     * @param maxMatchCount the maximum number of matches allowed in the search
     */
    search(searchText: string, findOptions: number, maxMatchCount: number): void
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
    searchFinish(): void
    /**
     * Looks for the next occurrence of the search text.
     * 
     * Calling this method before webkit_find_controller_search() or
     * webkit_find_controller_count_matches() is a programming error.
     */
    searchNext(): void
    /**
     * Looks for the previous occurrence of the search text.
     * 
     * Calling this method before webkit_find_controller_search() or
     * webkit_find_controller_count_matches() is a programming error.
     */
    searchPrevious(): void

    // Own signals of WebKit-6.0.WebKit.FindController

    connect(sigName: "counted-matches", callback: FindController.CountedMatchesSignalCallback): number
    on(sigName: "counted-matches", callback: FindController.CountedMatchesSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "counted-matches", callback: FindController.CountedMatchesSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "counted-matches", callback: FindController.CountedMatchesSignalCallback): NodeJS.EventEmitter
    emit(sigName: "counted-matches", ...args: any[]): void
    connect(sigName: "failed-to-find-text", callback: FindController.FailedToFindTextSignalCallback): number
    on(sigName: "failed-to-find-text", callback: FindController.FailedToFindTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "failed-to-find-text", callback: FindController.FailedToFindTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "failed-to-find-text", callback: FindController.FailedToFindTextSignalCallback): NodeJS.EventEmitter
    emit(sigName: "failed-to-find-text", ...args: any[]): void
    connect(sigName: "found-text", callback: FindController.FoundTextSignalCallback): number
    on(sigName: "found-text", callback: FindController.FoundTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "found-text", callback: FindController.FoundTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "found-text", callback: FindController.FoundTextSignalCallback): NodeJS.EventEmitter
    emit(sigName: "found-text", ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.FindController

    connect(sigName: "notify::max-match-count", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-match-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-match-count", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-match-count", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-match-count", ...args: any[]): void
    connect(sigName: "notify::options", callback: (...args: any[]) => void): number
    on(sigName: "notify::options", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::options", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::options", ...args: any[]): void
    connect(sigName: "notify::text", callback: (...args: any[]) => void): number
    on(sigName: "notify::text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::web-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::web-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::web-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::web-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::web-view", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class FindController extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.FindController

    static name: string

    // Constructors of WebKit-6.0.WebKit.FindController

    constructor(config?: FindController.ConstructorProperties) 
    _init(config?: FindController.ConstructorProperties): void
}

module FormSubmissionRequest {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface FormSubmissionRequest {

    // Own properties of WebKit-6.0.WebKit.FormSubmissionRequest

    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.FormSubmissionRequest

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
    listTextFields(): [ /* returnType */ boolean, /* fieldNames */ string[], /* fieldValues */ string[] ]
    /**
     * Continue the form submission.
     */
    submit(): void

    // Class property signals of WebKit-6.0.WebKit.FormSubmissionRequest

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class FormSubmissionRequest extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.FormSubmissionRequest

    static name: string

    // Constructors of WebKit-6.0.WebKit.FormSubmissionRequest

    constructor(config?: FormSubmissionRequest.ConstructorProperties) 
    _init(config?: FormSubmissionRequest.ConstructorProperties): void
}

module GeolocationManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `start`
     */
    interface StartSignalCallback {
        (): boolean
    }

    /**
     * Signal callback interface for `stop`
     */
    interface StopSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface GeolocationManager {

    // Own properties of WebKit-6.0.WebKit.GeolocationManager

    /**
     * Whether high accuracy is enabled. This is a read-only property that will be
     * set to %TRUE when a #WebKitGeolocationManager needs to get accurate position updates.
     * You can connect to notify::enable-high-accuracy signal to monitor it.
     */
    readonly enableHighAccuracy: boolean
    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.GeolocationManager

    /**
     * Notify `manager` that determining the position failed.
     * @param errorMessage the error message
     */
    failed(errorMessage: string): void
    /**
     * Get whether high accuracy is enabled.
     * @returns Whether the setting is enabled.
     */
    getEnableHighAccuracy(): boolean
    /**
     * Notify `manager` that position has been updated to `position`.
     * @param position a #WebKitGeolocationPosition
     */
    updatePosition(position: GeolocationPosition): void

    // Own signals of WebKit-6.0.WebKit.GeolocationManager

    connect(sigName: "start", callback: GeolocationManager.StartSignalCallback): number
    on(sigName: "start", callback: GeolocationManager.StartSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "start", callback: GeolocationManager.StartSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "start", callback: GeolocationManager.StartSignalCallback): NodeJS.EventEmitter
    emit(sigName: "start", ...args: any[]): void
    connect(sigName: "stop", callback: GeolocationManager.StopSignalCallback): number
    on(sigName: "stop", callback: GeolocationManager.StopSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stop", callback: GeolocationManager.StopSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stop", callback: GeolocationManager.StopSignalCallback): NodeJS.EventEmitter
    emit(sigName: "stop", ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.GeolocationManager

    connect(sigName: "notify::enable-high-accuracy", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-high-accuracy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-high-accuracy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-high-accuracy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-high-accuracy", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class GeolocationManager extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.GeolocationManager

    static name: string

    // Constructors of WebKit-6.0.WebKit.GeolocationManager

    constructor(config?: GeolocationManager.ConstructorProperties) 
    _init(config?: GeolocationManager.ConstructorProperties): void
}

module GeolocationPermissionRequest {

    // Constructor properties interface

    interface ConstructorProperties extends PermissionRequest.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface GeolocationPermissionRequest extends PermissionRequest {

    // Own properties of WebKit-6.0.WebKit.GeolocationPermissionRequest

    __gtype__: number

    // Class property signals of WebKit-6.0.WebKit.GeolocationPermissionRequest

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class GeolocationPermissionRequest extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.GeolocationPermissionRequest

    static name: string

    // Constructors of WebKit-6.0.WebKit.GeolocationPermissionRequest

    constructor(config?: GeolocationPermissionRequest.ConstructorProperties) 
    _init(config?: GeolocationPermissionRequest.ConstructorProperties): void
}

module HitTestResult {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of WebKit-6.0.WebKit.HitTestResult

        /**
         * Bitmask of #WebKitHitTestResultContext flags representing
         * the context of the #WebKitHitTestResult.
         */
        context?: number | null
        /**
         * The URI of the image if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_IMAGE
         * is present in #WebKitHitTestResult:context
         */
        image_uri?: string | null
        /**
         * The label of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
         * is present in #WebKitHitTestResult:context
         */
        link_label?: string | null
        /**
         * The title of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
         * is present in #WebKitHitTestResult:context
         */
        link_title?: string | null
        /**
         * The URI of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
         * is present in #WebKitHitTestResult:context
         */
        link_uri?: string | null
        /**
         * The URI of the media if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_MEDIA
         * is present in #WebKitHitTestResult:context
         */
        media_uri?: string | null
    }

}

interface HitTestResult {

    // Own properties of WebKit-6.0.WebKit.HitTestResult

    /**
     * Bitmask of #WebKitHitTestResultContext flags representing
     * the context of the #WebKitHitTestResult.
     */
    readonly context: number
    /**
     * The URI of the image if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_IMAGE
     * is present in #WebKitHitTestResult:context
     */
    readonly imageUri: string | null
    /**
     * The label of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
     * is present in #WebKitHitTestResult:context
     */
    readonly linkLabel: string | null
    /**
     * The title of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
     * is present in #WebKitHitTestResult:context
     */
    readonly linkTitle: string | null
    /**
     * The URI of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
     * is present in #WebKitHitTestResult:context
     */
    readonly linkUri: string | null
    /**
     * The URI of the media if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_MEDIA
     * is present in #WebKitHitTestResult:context
     */
    readonly mediaUri: string | null
    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.HitTestResult

    /**
     * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_EDITABLE flag is present in
     * #WebKitHitTestResult:context.
     * @returns %TRUE if there's an editable element at the coordinates of the @hit_test_result,    or %FALSE otherwise
     */
    contextIsEditable(): boolean
    /**
     * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_IMAGE flag is present in
     * #WebKitHitTestResult:context.
     * @returns %TRUE if there's an image element in the coordinates of the Hit Test,    or %FALSE otherwise
     */
    contextIsImage(): boolean
    /**
     * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK flag is present in
     * #WebKitHitTestResult:context.
     * @returns %TRUE if there's a link element in the coordinates of the Hit Test,    or %FALSE otherwise
     */
    contextIsLink(): boolean
    /**
     * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_MEDIA flag is present in
     * #WebKitHitTestResult:context.
     * @returns %TRUE if there's a media element in the coordinates of the Hit Test,    or %FALSE otherwise
     */
    contextIsMedia(): boolean
    /**
     * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_SCROLLBAR flag is present in
     * #WebKitHitTestResult:context.
     * @returns %TRUE if there's a scrollbar element at the coordinates of the @hit_test_result,    or %FALSE otherwise
     */
    contextIsScrollbar(): boolean
    /**
     * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_SELECTION flag is present in
     * #WebKitHitTestResult:context.
     * @returns %TRUE if there's a selected element at the coordinates of the @hit_test_result,    or %FALSE otherwise
     */
    contextIsSelection(): boolean
    /**
     * Gets the value of the #WebKitHitTestResult:context property.
     * @returns a bitmask of #WebKitHitTestResultContext flags
     */
    getContext(): number
    /**
     * Gets the value of the #WebKitHitTestResult:image-uri property.
     * @returns the URI of the image element in the coordinates of the Hit Test,    or %NULL if there isn't an image element in @hit_test_result context
     */
    getImageUri(): string
    /**
     * Gets the value of the #WebKitHitTestResult:link-label property.
     * @returns the label of the link element in the coordinates of the Hit Test,    or %NULL if there isn't a link element in @hit_test_result context or the    link element doesn't have a label
     */
    getLinkLabel(): string
    /**
     * Gets the value of the #WebKitHitTestResult:link-title property.
     * @returns the title of the link element in the coordinates of the Hit Test,    or %NULL if there isn't a link element in @hit_test_result context or the    link element doesn't have a title
     */
    getLinkTitle(): string
    /**
     * Gets the value of the #WebKitHitTestResult:link-uri property.
     * @returns the URI of the link element in the coordinates of the Hit Test,    or %NULL if there isn't a link element in @hit_test_result context
     */
    getLinkUri(): string
    /**
     * Gets the value of the #WebKitHitTestResult:media-uri property.
     * @returns the URI of the media element in the coordinates of the Hit Test,    or %NULL if there isn't a media element in @hit_test_result context
     */
    getMediaUri(): string

    // Class property signals of WebKit-6.0.WebKit.HitTestResult

    connect(sigName: "notify::context", callback: (...args: any[]) => void): number
    on(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::image-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::image-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::image-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::image-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::image-uri", ...args: any[]): void
    connect(sigName: "notify::link-label", callback: (...args: any[]) => void): number
    on(sigName: "notify::link-label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::link-label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::link-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::link-label", ...args: any[]): void
    connect(sigName: "notify::link-title", callback: (...args: any[]) => void): number
    on(sigName: "notify::link-title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::link-title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::link-title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::link-title", ...args: any[]): void
    connect(sigName: "notify::link-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::link-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::link-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::link-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::link-uri", ...args: any[]): void
    connect(sigName: "notify::media-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::media-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::media-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::media-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::media-uri", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class HitTestResult extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.HitTestResult

    static name: string

    // Constructors of WebKit-6.0.WebKit.HitTestResult

    constructor(config?: HitTestResult.ConstructorProperties) 
    _init(config?: HitTestResult.ConstructorProperties): void
}

module InputMethodContext {

    // Signal callback interfaces

    /**
     * Signal callback interface for `committed`
     */
    interface CommittedSignalCallback {
        (text: string | null): void
    }

    /**
     * Signal callback interface for `delete-surrounding`
     */
    interface DeleteSurroundingSignalCallback {
        (offset: number, nChars: number): void
    }

    /**
     * Signal callback interface for `preedit-changed`
     */
    interface PreeditChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `preedit-finished`
     */
    interface PreeditFinishedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `preedit-started`
     */
    interface PreeditStartedSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of WebKit-6.0.WebKit.InputMethodContext

        /**
         * The #WebKitInputHints of the input associated with this context.
         */
        input_hints?: InputHints | null
        /**
         * The #WebKitInputPurpose of the input associated with this context.
         */
        input_purpose?: InputPurpose | null
    }

}

interface InputMethodContext {

    // Own properties of WebKit-6.0.WebKit.InputMethodContext

    /**
     * The #WebKitInputHints of the input associated with this context.
     */
    inputHints: InputHints
    /**
     * The #WebKitInputPurpose of the input associated with this context.
     */
    inputPurpose: InputPurpose
    __gtype__: number

    // Own fields of WebKit-6.0.WebKit.InputMethodContext

    parentInstance: GObject.Object
    priv: InputMethodContextPrivate

    // Owm methods of WebKit-6.0.WebKit.InputMethodContext

    // Has conflict: filterKeyEvent(keyEvent: Gdk.Event): boolean
    /**
     * Get the value of the #WebKitInputMethodContext:input-hints property.
     * @returns the #WebKitInputHints of the input associated with @context
     */
    getInputHints(): InputHints
    /**
     * Get the value of the #WebKitInputMethodContext:input-purpose property.
     * @returns the #WebKitInputPurpose of the input associated with @context
     */
    getInputPurpose(): InputPurpose
    // Has conflict: getPreedit(): [ /* text */ string | null, /* underlines */ InputMethodUnderline[] | null, /* cursorOffset */ number | null ]
    // Has conflict: notifyCursorArea(x: number, y: number, width: number, height: number): void
    // Has conflict: notifyFocusIn(): void
    // Has conflict: notifyFocusOut(): void
    // Has conflict: notifySurrounding(text: string, length: number, cursorIndex: number, selectionIndex: number): void
    // Has conflict: reset(): void
    // Has conflict: setEnablePreedit(enabled: boolean): void
    /**
     * Set the value of the #WebKitInputMethodContext:input-hints property.
     * @param hints a #WebKitInputHints
     */
    setInputHints(hints: InputHints): void
    /**
     * Set the value of the #WebKitInputMethodContext:input-purpose property.
     * @param purpose a #WebKitInputPurpose
     */
    setInputPurpose(purpose: InputPurpose): void

    // Own virtual methods of WebKit-6.0.WebKit.InputMethodContext

    committed(text: string): void
    deleteSurrounding(offset: number, nChars: number): void
    /**
     * Allow `key_event` to be handled by the input method.
     * 
     * If %TRUE is returned, then no further processing should be
     * done for the key event.
     * @virtual 
     * @param keyEvent the key event to filter
     * @returns %TRUE if the key event was handled, or %FALSE otherwise
     */
    filterKeyEvent(keyEvent: Gdk.Event): boolean
    /**
     * Get the pre-edit string and a list of WebKitInputMethodUnderline.
     * 
     * Get the current pre-edit string for the `context,` and a list of WebKitInputMethodUnderline to apply to the string.
     * The string will be displayed inserted at `cursor_offset`.
     * @virtual 
     */
    getPreedit(): [ /* text */ string | null, /* underlines */ InputMethodUnderline[] | null, /* cursorOffset */ number | null ]
    /**
     * Notify `context` that cursor area changed in input associated.
     * @virtual 
     * @param x the x coordinate of cursor location
     * @param y the y coordinate of cursor location
     * @param width the width of cursor area
     * @param height the height of cursor area
     */
    notifyCursorArea(x: number, y: number, width: number, height: number): void
    /**
     * Notify `context` that input associated has gained focus.
     * @virtual 
     */
    notifyFocusIn(): void
    /**
     * Notify `context` that input associated has lost focus.
     * @virtual 
     */
    notifyFocusOut(): void
    /**
     * Notify `context` that the context surrounding the cursor has changed.
     * 
     * If there's no selection `selection_index` is the same as `cursor_index`.
     * @virtual 
     * @param text text surrounding the insertion point
     * @param length the length of `text,` or -1 if `text` is nul-terminated
     * @param cursorIndex the byte index of the insertion cursor within `text`.
     * @param selectionIndex the byte index of the selection cursor within `text`.
     */
    notifySurrounding(text: string, length: number, cursorIndex: number, selectionIndex: number): void
    preeditChanged(): void
    preeditFinished(): void
    preeditStarted(): void
    /**
     * Reset the `context`.
     * 
     * This will typically cause the input to clear the preedit state.
     * @virtual 
     */
    reset(): void
    /**
     * Set whether `context` should enable preedit to display feedback.
     * @virtual 
     * @param enabled whether to enable preedit
     */
    setEnablePreedit(enabled: boolean): void

    // Own signals of WebKit-6.0.WebKit.InputMethodContext

    connect(sigName: "committed", callback: InputMethodContext.CommittedSignalCallback): number
    on(sigName: "committed", callback: InputMethodContext.CommittedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "committed", callback: InputMethodContext.CommittedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "committed", callback: InputMethodContext.CommittedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "committed", ...args: any[]): void
    connect(sigName: "delete-surrounding", callback: InputMethodContext.DeleteSurroundingSignalCallback): number
    on(sigName: "delete-surrounding", callback: InputMethodContext.DeleteSurroundingSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "delete-surrounding", callback: InputMethodContext.DeleteSurroundingSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "delete-surrounding", callback: InputMethodContext.DeleteSurroundingSignalCallback): NodeJS.EventEmitter
    emit(sigName: "delete-surrounding", nChars: number, ...args: any[]): void
    connect(sigName: "preedit-changed", callback: InputMethodContext.PreeditChangedSignalCallback): number
    on(sigName: "preedit-changed", callback: InputMethodContext.PreeditChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "preedit-changed", callback: InputMethodContext.PreeditChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "preedit-changed", callback: InputMethodContext.PreeditChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "preedit-changed", ...args: any[]): void
    connect(sigName: "preedit-finished", callback: InputMethodContext.PreeditFinishedSignalCallback): number
    on(sigName: "preedit-finished", callback: InputMethodContext.PreeditFinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "preedit-finished", callback: InputMethodContext.PreeditFinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "preedit-finished", callback: InputMethodContext.PreeditFinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "preedit-finished", ...args: any[]): void
    connect(sigName: "preedit-started", callback: InputMethodContext.PreeditStartedSignalCallback): number
    on(sigName: "preedit-started", callback: InputMethodContext.PreeditStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "preedit-started", callback: InputMethodContext.PreeditStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "preedit-started", callback: InputMethodContext.PreeditStartedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "preedit-started", ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.InputMethodContext

    connect(sigName: "notify::input-hints", callback: (...args: any[]) => void): number
    on(sigName: "notify::input-hints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::input-hints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::input-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: (...args: any[]) => void): number
    on(sigName: "notify::input-purpose", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::input-purpose", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::input-purpose", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class InputMethodContext extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.InputMethodContext

    static name: string

    // Constructors of WebKit-6.0.WebKit.InputMethodContext

    constructor(config?: InputMethodContext.ConstructorProperties) 
    _init(config?: InputMethodContext.ConstructorProperties): void
}

module MediaKeySystemPermissionRequest {

    // Constructor properties interface

    interface ConstructorProperties extends PermissionRequest.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface MediaKeySystemPermissionRequest extends PermissionRequest {

    // Own properties of WebKit-6.0.WebKit.MediaKeySystemPermissionRequest

    __gtype__: number

    // Class property signals of WebKit-6.0.WebKit.MediaKeySystemPermissionRequest

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class MediaKeySystemPermissionRequest extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.MediaKeySystemPermissionRequest

    static name: string

    // Constructors of WebKit-6.0.WebKit.MediaKeySystemPermissionRequest

    constructor(config?: MediaKeySystemPermissionRequest.ConstructorProperties) 
    _init(config?: MediaKeySystemPermissionRequest.ConstructorProperties): void
}

module NavigationPolicyDecision {

    // Constructor properties interface

    interface ConstructorProperties extends PolicyDecision.ConstructorProperties {
    }

}

interface NavigationPolicyDecision {

    // Own properties of WebKit-6.0.WebKit.NavigationPolicyDecision

    /**
     * The #WebKitNavigationAction that triggered this policy decision.
     */
    readonly navigationAction: NavigationAction
    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.NavigationPolicyDecision

    /**
     * Gets the value of the #WebKitNavigationPolicyDecision:navigation-action property.
     * @returns The #WebKitNavigationAction triggering this policy decision.
     */
    getNavigationAction(): NavigationAction

    // Class property signals of WebKit-6.0.WebKit.NavigationPolicyDecision

    connect(sigName: "notify::navigation-action", callback: (...args: any[]) => void): number
    on(sigName: "notify::navigation-action", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::navigation-action", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::navigation-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::navigation-action", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A policy decision for navigation actions.
 * 
 * WebKitNavigationPolicyDecision represents a policy decision for events associated with
 * navigations. If the value of #WebKitNavigationPolicyDecision:mouse-button is not 0, then
 * the navigation was triggered by a mouse event.
 * @class 
 */
class NavigationPolicyDecision extends PolicyDecision {

    // Own properties of WebKit-6.0.WebKit.NavigationPolicyDecision

    static name: string

    // Constructors of WebKit-6.0.WebKit.NavigationPolicyDecision

    constructor(config?: NavigationPolicyDecision.ConstructorProperties) 
    _init(config?: NavigationPolicyDecision.ConstructorProperties): void
}

module NetworkSession {

    // Signal callback interfaces

    /**
     * Signal callback interface for `download-started`
     */
    interface DownloadStartedSignalCallback {
        (download: Download): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of WebKit-6.0.WebKit.NetworkSession

        /**
         * The base caches directory used to create the #WebKitWebsiteDataManager. If %NULL, a default location will be used.
         */
        cache_directory?: string | null
        /**
         * The base data directory used to create the #WebKitWebsiteDataManager. If %NULL, a default location will be used.
         */
        data_directory?: string | null
        /**
         * Whether to create an ephermeral #WebKitWebsiteDataManager for the session.
         */
        is_ephemeral?: boolean | null
    }

}

interface NetworkSession {

    // Own properties of WebKit-6.0.WebKit.NetworkSession

    /**
     * The base caches directory used to create the #WebKitWebsiteDataManager. If %NULL, a default location will be used.
     */
    readonly cacheDirectory: string | null
    /**
     * The base data directory used to create the #WebKitWebsiteDataManager. If %NULL, a default location will be used.
     */
    readonly dataDirectory: string | null
    /**
     * Whether to create an ephermeral #WebKitWebsiteDataManager for the session.
     */
    readonly isEphemeral: boolean
    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.NetworkSession

    /**
     * Ignore further TLS errors on the `host` for the certificate present in `info`.
     * @param certificate a #GTlsCertificate
     * @param host the host for which a certificate is to be allowed
     */
    allowTlsCertificateForHost(certificate: Gio.TlsCertificate, host: string): void
    /**
     * Requests downloading of the specified URI string.
     * 
     * The download operation will not be associated to any #WebKitWebView,
     * if you are interested in starting a download from a particular #WebKitWebView use
     * webkit_web_view_download_uri() instead.
     * @param uri the URI to download
     * @returns a new #WebKitDownload representing    the download operation.
     */
    downloadUri(uri: string): Download
    /**
     * Get the #WebKitCookieManager of `session`.
     * @returns a #WebKitCookieManager
     */
    getCookieManager(): CookieManager
    /**
     * Get whether Intelligent Tracking Prevention (ITP) is enabled or not.
     * @returns %TRUE if ITP is enabled, or %FALSE otherwise.
     */
    getItpEnabled(): boolean
    /**
     * Asynchronously get the list of #WebKitITPThirdParty seen for `session`.
     * 
     * Every #WebKitITPThirdParty
     * contains the list of #WebKitITPFirstParty under which it has been seen.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * webkit_network_session_get_itp_summary_finish() to get the result of the operation.
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    getItpSummary(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation started with webkit_network_session_get_itp_summary().
     * @param result a #GAsyncResult
     * @returns a #GList of #WebKitITPThirdParty.    You must free the #GList with g_list_free() and unref the #WebKitITPThirdParty<!-- -->s with    webkit_itp_third_party_unref() when you're done with them.
     */
    getItpSummaryFinish(result: Gio.AsyncResult): ITPThirdParty[]
    /**
     * Get whether persistent credential storage is enabled or not.
     * 
     * See also webkit_network_session_set_persistent_credential_storage_enabled().
     * @returns %TRUE if persistent credential storage is enabled, or %FALSE otherwise.
     */
    getPersistentCredentialStorageEnabled(): boolean
    /**
     * Get the TLS errors policy of `session`.
     * @returns a #WebKitTLSErrorsPolicy
     */
    getTlsErrorsPolicy(): TLSErrorsPolicy
    /**
     * Get the #WebKitWebsiteDataManager of `session`.
     * @returns a #WebKitWebsiteDataManager
     */
    getWebsiteDataManager(): WebsiteDataManager
    /**
     * Resolve the domain name of the given `hostname` in advance, so that if a URI
     * of `hostname` is requested the load will be performed more quickly.
     * @param hostname a hostname to be resolved
     */
    prefetchDns(hostname: string): void
    /**
     * Enable or disable Intelligent Tracking Prevention (ITP).
     * 
     * When ITP is enabled resource load statistics
     * are collected and used to decide whether to allow or block third-party cookies and prevent user tracking.
     * Note that while ITP is enabled the accept policy %WEBKIT_COOKIE_POLICY_ACCEPT_NO_THIRD_PARTY is ignored and
     * %WEBKIT_COOKIE_POLICY_ACCEPT_ALWAYS is used instead. See also webkit_cookie_session_set_accept_policy().
     * @param enabled value to set
     */
    setItpEnabled(enabled: boolean): void
    /**
     * Enable or disable persistent credential storage.
     * 
     * When enabled, which is the default for
     * non-ephemeral sessions, the network process will try to read and write HTTP authentiacation
     * credentials from persistent storage.
     * @param enabled value to set
     */
    setPersistentCredentialStorageEnabled(enabled: boolean): void
    /**
     * Set the network proxy settings to be used by connections started in `session` session.
     * 
     * By default %WEBKIT_NETWORK_PROXY_MODE_DEFAULT is used, which means that the
     * system settings will be used (g_proxy_resolver_get_default()).
     * If you want to override the system default settings, you can either use
     * %WEBKIT_NETWORK_PROXY_MODE_NO_PROXY to make sure no proxies are used at all,
     * or %WEBKIT_NETWORK_PROXY_MODE_CUSTOM to provide your own proxy settings.
     * When `proxy_mode` is %WEBKIT_NETWORK_PROXY_MODE_CUSTOM `proxy_settings` must be
     * a valid #WebKitNetworkProxySettings; otherwise, `proxy_settings` must be %NULL.
     * @param proxyMode a #WebKitNetworkProxyMode
     * @param proxySettings a #WebKitNetworkProxySettings, or %NULL
     */
    setProxySettings(proxyMode: NetworkProxyMode, proxySettings: NetworkProxySettings | null): void
    /**
     * Set the TLS errors policy of `session` as `policy`.
     * @param policy a #WebKitTLSErrorsPolicy
     */
    setTlsErrorsPolicy(policy: TLSErrorsPolicy): void

    // Own signals of WebKit-6.0.WebKit.NetworkSession

    connect(sigName: "download-started", callback: NetworkSession.DownloadStartedSignalCallback): number
    on(sigName: "download-started", callback: NetworkSession.DownloadStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "download-started", callback: NetworkSession.DownloadStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "download-started", callback: NetworkSession.DownloadStartedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "download-started", ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.NetworkSession

    connect(sigName: "notify::cache-directory", callback: (...args: any[]) => void): number
    on(sigName: "notify::cache-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cache-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cache-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cache-directory", ...args: any[]): void
    connect(sigName: "notify::data-directory", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-directory", ...args: any[]): void
    connect(sigName: "notify::is-ephemeral", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-ephemeral", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-ephemeral", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-ephemeral", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-ephemeral", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Manages network configuration.
 * @class 
 */
class NetworkSession extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.NetworkSession

    static name: string

    // Constructors of WebKit-6.0.WebKit.NetworkSession

    constructor(config?: NetworkSession.ConstructorProperties) 
    /**
     * Creates a new #WebKitNetworkSession with a persistent #WebKitWebsiteDataManager.
     * The parameters `data_directory` and `cache_directory` will be used as construct
     * properties of the #WebKitWebsiteDataManager of the network session. Note that if
     * %NULL is passed, the default directory will be passed to #WebKitWebsiteDataManager
     * so that webkit_website_data_manager_get_base_data_directory() and
     * webkit_website_data_manager_get_base_cache_directory() always return a value for
     * non ephemeral sessions.
     * 
     * It must be passed as construct parameter of a #WebKitWebView.
     * @constructor 
     * @param dataDirectory a base directory for data, or %NULL
     * @param cacheDirectory a base directory for caches, or %NULL
     * @returns the newly created #WebKitNetworkSession
     */
    constructor(dataDirectory: string | null, cacheDirectory: string | null) 
    /**
     * Creates a new #WebKitNetworkSession with a persistent #WebKitWebsiteDataManager.
     * The parameters `data_directory` and `cache_directory` will be used as construct
     * properties of the #WebKitWebsiteDataManager of the network session. Note that if
     * %NULL is passed, the default directory will be passed to #WebKitWebsiteDataManager
     * so that webkit_website_data_manager_get_base_data_directory() and
     * webkit_website_data_manager_get_base_cache_directory() always return a value for
     * non ephemeral sessions.
     * 
     * It must be passed as construct parameter of a #WebKitWebView.
     * @constructor 
     * @param dataDirectory a base directory for data, or %NULL
     * @param cacheDirectory a base directory for caches, or %NULL
     * @returns the newly created #WebKitNetworkSession
     */
    static new(dataDirectory: string | null, cacheDirectory: string | null): NetworkSession
    /**
     * Creates a new #WebKitNetworkSession with an ephemeral #WebKitWebsiteDataManager.
     * @constructor 
     * @returns a new ephemeral #WebKitNetworkSession.
     */
    static newEphemeral(): NetworkSession
    _init(config?: NetworkSession.ConstructorProperties): void
    /**
     * Get the default network session.
     * The default network session is created using webkit_network_session_new() and passing
     * %NULL as data and cache directories.
     * @returns a #WebKitNetworkSession
     */
    static getDefault(): NetworkSession
    /**
     * Sets `settings` as the #WebKitMemoryPressureSettings.
     * 
     * Sets `settings` as the #WebKitMemoryPressureSettings to be used by the network
     * process created by any instance of #WebKitNetworkSession after this function
     * is called.
     * 
     * Be sure to call this function before creating any #WebKitNetworkSession.
     * 
     * The periodic check for used memory is disabled by default on network processes. This will
     * be enabled only if custom settings have been set using this function. After that, in order
     * to remove the custom settings and disable the periodic check, this function must be called
     * passing %NULL as the value of `settings`.
     * @param settings a WebKitMemoryPressureSettings.
     */
    static setMemoryPressureSettings(settings: MemoryPressureSettings): void
}

module Notification {

    // Signal callback interfaces

    /**
     * Signal callback interface for `clicked`
     */
    interface ClickedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `closed`
     */
    interface ClosedSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Notification {

    // Own properties of WebKit-6.0.WebKit.Notification

    /**
     * The body for the notification.
     */
    readonly body: string | null
    /**
     * The unique id for the notification.
     */
    readonly id: number
    /**
     * The tag identifier for the notification.
     */
    readonly tag: string | null
    /**
     * The title for the notification.
     */
    readonly title: string | null
    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.Notification

    /**
     * Tells WebKit the notification has been clicked.
     * 
     * This will emit the
     * #WebKitNotification::clicked signal.
     */
    clicked(): void
    /**
     * Closes the notification.
     */
    close(): void
    /**
     * Obtains the body for the notification.
     * @returns the body for the notification
     */
    getBody(): string
    /**
     * Obtains the unique id for the notification.
     * @returns the unique id for the notification
     */
    getId(): number
    /**
     * Obtains the tag identifier for the notification.
     * @returns the tag for the notification
     */
    getTag(): string | null
    /**
     * Obtains the title for the notification.
     * @returns the title for the notification
     */
    getTitle(): string

    // Own signals of WebKit-6.0.WebKit.Notification

    connect(sigName: "clicked", callback: Notification.ClickedSignalCallback): number
    on(sigName: "clicked", callback: Notification.ClickedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "clicked", callback: Notification.ClickedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "clicked", callback: Notification.ClickedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "clicked", ...args: any[]): void
    connect(sigName: "closed", callback: Notification.ClosedSignalCallback): number
    on(sigName: "closed", callback: Notification.ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: Notification.ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: Notification.ClosedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "closed", ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.Notification

    connect(sigName: "notify::body", callback: (...args: any[]) => void): number
    on(sigName: "notify::body", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::body", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::body", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::body", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::tag", callback: (...args: any[]) => void): number
    on(sigName: "notify::tag", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tag", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tag", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tag", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Holds information about a notification that should be shown to the user.
 * @class 
 */
class Notification extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.Notification

    static name: string

    // Constructors of WebKit-6.0.WebKit.Notification

    constructor(config?: Notification.ConstructorProperties) 
    _init(config?: Notification.ConstructorProperties): void
}

module NotificationPermissionRequest {

    // Constructor properties interface

    interface ConstructorProperties extends PermissionRequest.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface NotificationPermissionRequest extends PermissionRequest {

    // Own properties of WebKit-6.0.WebKit.NotificationPermissionRequest

    __gtype__: number

    // Class property signals of WebKit-6.0.WebKit.NotificationPermissionRequest

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class NotificationPermissionRequest extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.NotificationPermissionRequest

    static name: string

    // Constructors of WebKit-6.0.WebKit.NotificationPermissionRequest

    constructor(config?: NotificationPermissionRequest.ConstructorProperties) 
    _init(config?: NotificationPermissionRequest.ConstructorProperties): void
}

module OptionMenu {

    // Signal callback interfaces

    /**
     * Signal callback interface for `close`
     */
    interface CloseSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface OptionMenu {

    // Own properties of WebKit-6.0.WebKit.OptionMenu

    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.OptionMenu

    /**
     * Activates the #WebKitOptionMenuItem at `index` in `menu`.
     * 
     * Activating an item changes the value
     * of the element making the item the active one. You are expected to close the menu with
     * webkit_option_menu_close() after activating an item, calling this function again will have no
     * effect.
     * @param index the index of the item
     */
    activateItem(index: number): void
    /**
     * Request to close a #WebKitOptionMenu.
     * 
     * This emits WebKitOptionMenu::close signal.
     * This function should always be called to notify WebKit that the associated
     * menu has been closed. If the menu is closed and neither webkit_option_menu_select_item()
     * nor webkit_option_menu_activate_item() have been called, the element value remains
     * unchanged.
     */
    close(): void
    /**
     * Gets the #GdkEvent that triggered the dropdown menu.
     * If `menu` was not triggered by a user interaction, like a mouse click,
     * %NULL is returned.
     * @returns the menu event or %NULL.
     */
    getEvent(): Gdk.Event
    /**
     * Returns the #WebKitOptionMenuItem at `index` in `menu`.
     * @param index the index of the item
     * @returns a #WebKitOptionMenuItem of @menu.
     */
    getItem(index: number): OptionMenuItem
    /**
     * Gets the length of the `menu`.
     * @returns the number of #WebKitOptionMenuItem<!-- -->s in @menu
     */
    getNItems(): number
    /**
     * Selects the #WebKitOptionMenuItem at `index` in `menu`.
     * 
     * Selecting an item changes the
     * text shown by the combo button, but it doesn't change the value of the element. You need to
     * explicitly activate the item with webkit_option_menu_select_item() or close the menu with
     * webkit_option_menu_close() in which case the currently selected item will be activated.
     * @param index the index of the item
     */
    selectItem(index: number): void

    // Own signals of WebKit-6.0.WebKit.OptionMenu

    connect(sigName: "close", callback: OptionMenu.CloseSignalCallback): number
    on(sigName: "close", callback: OptionMenu.CloseSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "close", callback: OptionMenu.CloseSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "close", callback: OptionMenu.CloseSignalCallback): NodeJS.EventEmitter
    emit(sigName: "close", ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.OptionMenu

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents the dropdown menu of a `select` element in a #WebKitWebView.
 * 
 * When a select element in a #WebKitWebView needs to display a dropdown menu, the signal
 * #WebKitWebView::show-option-menu is emitted, providing a WebKitOptionMenu with the
 * #WebKitOptionMenuItem<!-- -->s that should be displayed.
 * @class 
 */
class OptionMenu extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.OptionMenu

    static name: string

    // Constructors of WebKit-6.0.WebKit.OptionMenu

    constructor(config?: OptionMenu.ConstructorProperties) 
    _init(config?: OptionMenu.ConstructorProperties): void
}

module PointerLockPermissionRequest {

    // Constructor properties interface

    interface ConstructorProperties extends PermissionRequest.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface PointerLockPermissionRequest extends PermissionRequest {

    // Own properties of WebKit-6.0.WebKit.PointerLockPermissionRequest

    __gtype__: number

    // Class property signals of WebKit-6.0.WebKit.PointerLockPermissionRequest

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class PointerLockPermissionRequest extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.PointerLockPermissionRequest

    static name: string

    // Constructors of WebKit-6.0.WebKit.PointerLockPermissionRequest

    constructor(config?: PointerLockPermissionRequest.ConstructorProperties) 
    _init(config?: PointerLockPermissionRequest.ConstructorProperties): void
}

module PolicyDecision {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface PolicyDecision {

    // Own properties of WebKit-6.0.WebKit.PolicyDecision

    __gtype__: number

    // Own fields of WebKit-6.0.WebKit.PolicyDecision

    parentInstance: GObject.Object
    priv: PolicyDecisionPrivate

    // Owm methods of WebKit-6.0.WebKit.PolicyDecision

    /**
     * Spawn a download from this decision.
     */
    download(): void
    /**
     * #WebKitResponsePolicyDecision, this would cancel the request.
     * 
     * Ignore the action which triggered this decision. For instance, for a
     * #WebKitResponsePolicyDecision, this would cancel the request.
     */
    ignore(): void
    /**
     * Accept the action which triggered this decision.
     */
    use(): void
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
    useWithPolicies(policies: WebsitePolicies): void

    // Class property signals of WebKit-6.0.WebKit.PolicyDecision

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class PolicyDecision extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.PolicyDecision

    static name: string

    // Constructors of WebKit-6.0.WebKit.PolicyDecision

    constructor(config?: PolicyDecision.ConstructorProperties) 
    _init(config?: PolicyDecision.ConstructorProperties): void
}

module PrintOperation {

    // Signal callback interfaces

    /**
     * Signal callback interface for `failed`
     */
    interface FailedSignalCallback {
        (error: GLib.Error): void
    }

    /**
     * Signal callback interface for `finished`
     */
    interface FinishedSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of WebKit-6.0.WebKit.PrintOperation

        /**
         * The initial #GtkPageSetup for the print operation.
         */
        page_setup?: Gtk.PageSetup | null
        /**
         * The initial #GtkPrintSettings for the print operation.
         */
        print_settings?: Gtk.PrintSettings | null
        /**
         * The #WebKitWebView that will be printed.
         */
        web_view?: WebView | null
    }

}

interface PrintOperation {

    // Own properties of WebKit-6.0.WebKit.PrintOperation

    /**
     * The initial #GtkPageSetup for the print operation.
     */
    pageSetup: Gtk.PageSetup
    /**
     * The initial #GtkPrintSettings for the print operation.
     */
    printSettings: Gtk.PrintSettings
    /**
     * The #WebKitWebView that will be printed.
     */
    readonly webView: WebView
    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.PrintOperation

    /**
     * Return the current page setup of `print_operation`.
     * 
     * It returns %NULL until
     * either webkit_print_operation_set_page_setup() or webkit_print_operation_run_dialog()
     * have been called.
     * @returns the current #GtkPageSetup of @print_operation.
     */
    getPageSetup(): Gtk.PageSetup
    /**
     * Return the current print settings of `print_operation`.
     * 
     * It returns %NULL until
     * either webkit_print_operation_set_print_settings() or webkit_print_operation_run_dialog()
     * have been called.
     * @returns the current #GtkPrintSettings of @print_operation.
     */
    getPrintSettings(): Gtk.PrintSettings
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
     */
    print(): void
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
    runDialog(parent: Gtk.Window | null): PrintOperationResponse
    /**
     * Set the current page setup of `print_operation`.
     * 
     * Current page setup is used for the
     * initial values of the print dialog when webkit_print_operation_run_dialog() is called.
     * @param pageSetup a #GtkPageSetup to set
     */
    setPageSetup(pageSetup: Gtk.PageSetup): void
    /**
     * Set the current print settings of `print_operation`.
     * 
     * Set the current print settings of `print_operation`. Current print settings are used for
     * the initial values of the print dialog when webkit_print_operation_run_dialog() is called.
     * @param printSettings a #GtkPrintSettings to set
     */
    setPrintSettings(printSettings: Gtk.PrintSettings): void

    // Own signals of WebKit-6.0.WebKit.PrintOperation

    connect(sigName: "failed", callback: PrintOperation.FailedSignalCallback): number
    on(sigName: "failed", callback: PrintOperation.FailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "failed", callback: PrintOperation.FailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "failed", callback: PrintOperation.FailedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "failed", ...args: any[]): void
    connect(sigName: "finished", callback: PrintOperation.FinishedSignalCallback): number
    on(sigName: "finished", callback: PrintOperation.FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: PrintOperation.FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: PrintOperation.FinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "finished", ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.PrintOperation

    connect(sigName: "notify::page-setup", callback: (...args: any[]) => void): number
    on(sigName: "notify::page-setup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::page-setup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::page-setup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::page-setup", ...args: any[]): void
    connect(sigName: "notify::print-settings", callback: (...args: any[]) => void): number
    on(sigName: "notify::print-settings", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::print-settings", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::print-settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::print-settings", ...args: any[]): void
    connect(sigName: "notify::web-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::web-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::web-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::web-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::web-view", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Controls a print operation.
 * 
 * A #WebKitPrintOperation controls a print operation in WebKit. With
 * a similar API to #GtkPrintOperation, it lets you set the print
 * settings with webkit_print_operation_set_print_settings() or
 * display the print dialog with webkit_print_operation_run_dialog().
 * @class 
 */
class PrintOperation extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.PrintOperation

    static name: string

    // Constructors of WebKit-6.0.WebKit.PrintOperation

    constructor(config?: PrintOperation.ConstructorProperties) 
    /**
     * Create a new #WebKitPrintOperation to print `web_view` contents.
     * @constructor 
     * @param webView a #WebKitWebView
     * @returns a new #WebKitPrintOperation.
     */
    constructor(webView: WebView) 
    /**
     * Create a new #WebKitPrintOperation to print `web_view` contents.
     * @constructor 
     * @param webView a #WebKitWebView
     * @returns a new #WebKitPrintOperation.
     */
    static new(webView: WebView): PrintOperation
    _init(config?: PrintOperation.ConstructorProperties): void
}

module ResponsePolicyDecision {

    // Constructor properties interface

    interface ConstructorProperties extends PolicyDecision.ConstructorProperties {
    }

}

interface ResponsePolicyDecision {

    // Own properties of WebKit-6.0.WebKit.ResponsePolicyDecision

    /**
     * This property contains the #WebKitURIRequest associated with this
     * policy decision.
     */
    readonly request: URIRequest
    /**
     * This property contains the #WebKitURIResponse associated with this
     * policy decision.
     */
    readonly response: URIResponse
    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.ResponsePolicyDecision

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
    getRequest(): URIRequest
    /**
     * Gets the value of the #WebKitResponsePolicyDecision:response property.
     * @returns The URI response that is associated with this policy decision.
     */
    getResponse(): URIResponse
    /**
     * Gets whether the request is the main frame main resource
     * @returns %TRUE if the request is the main frame main resouce or %FALSE otherwise
     */
    isMainFrameMainResource(): boolean
    /**
     * Gets whether the MIME type of the response can be displayed in the #WebKitWebView.
     * 
     * Gets whether the MIME type of the response can be displayed in the #WebKitWebView
     * that triggered this policy decision request. See also webkit_web_view_can_show_mime_type().
     * @returns %TRUE if the MIME type of the response is supported or %FALSE otherwise
     */
    isMimeTypeSupported(): boolean

    // Class property signals of WebKit-6.0.WebKit.ResponsePolicyDecision

    connect(sigName: "notify::request", callback: (...args: any[]) => void): number
    on(sigName: "notify::request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request", ...args: any[]): void
    connect(sigName: "notify::response", callback: (...args: any[]) => void): number
    on(sigName: "notify::response", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::response", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::response", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A policy decision for resource responses.
 * 
 * WebKitResponsePolicyDecision represents a policy decision for a
 * resource response, whether from the network or the local system.
 * A very common use case for these types of decision is deciding
 * whether or not to download a particular resource or to load it
 * normally.
 * @class 
 */
class ResponsePolicyDecision extends PolicyDecision {

    // Own properties of WebKit-6.0.WebKit.ResponsePolicyDecision

    static name: string

    // Constructors of WebKit-6.0.WebKit.ResponsePolicyDecision

    constructor(config?: ResponsePolicyDecision.ConstructorProperties) 
    _init(config?: ResponsePolicyDecision.ConstructorProperties): void
}

module SecurityManager {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface SecurityManager {

    // Own properties of WebKit-6.0.WebKit.SecurityManager

    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.SecurityManager

    /**
     * Register `scheme` as a CORS (Cross-origin resource sharing) enabled scheme.
     * 
     * This means that CORS requests are allowed. See W3C CORS specification
     * http://www.w3.org/TR/cors/.
     * @param scheme a URI scheme
     */
    registerUriSchemeAsCorsEnabled(scheme: string): void
    /**
     * Register `scheme` as a display isolated scheme.
     * 
     * This means that pages cannot
     * display these URIs unless they are from the same scheme.
     * @param scheme a URI scheme
     */
    registerUriSchemeAsDisplayIsolated(scheme: string): void
    /**
     * Register `scheme` as an empty document scheme.
     * 
     * This means that
     * they are allowed to commit synchronously.
     * @param scheme a URI scheme
     */
    registerUriSchemeAsEmptyDocument(scheme: string): void
    /**
     * Register `scheme` as a local scheme.
     * 
     * This means that other non-local pages
     * cannot link to or access URIs of this scheme.
     * @param scheme a URI scheme
     */
    registerUriSchemeAsLocal(scheme: string): void
    /**
     * Register `scheme` as a no-access scheme.
     * 
     * This means that pages loaded
     * with this URI scheme cannot access pages loaded with any other URI scheme.
     * @param scheme a URI scheme
     */
    registerUriSchemeAsNoAccess(scheme: string): void
    /**
     * Register `scheme` as a secure scheme.
     * 
     * This means that mixed
     * content warnings won't be generated for this scheme when
     * included by an HTTPS page.
     * @param scheme a URI scheme
     */
    registerUriSchemeAsSecure(scheme: string): void
    /**
     * Whether `scheme` is considered as a CORS enabled scheme.
     * 
     * See also webkit_security_manager_register_uri_scheme_as_cors_enabled().
     * @param scheme a URI scheme
     * @returns %TRUE if @scheme is a CORS enabled scheme or %FALSE otherwise.
     */
    uriSchemeIsCorsEnabled(scheme: string): boolean
    /**
     * Whether `scheme` is considered as a display isolated scheme.
     * 
     * See also webkit_security_manager_register_uri_scheme_as_display_isolated().
     * @param scheme a URI scheme
     * @returns %TRUE if @scheme is a display isolated scheme or %FALSE otherwise.
     */
    uriSchemeIsDisplayIsolated(scheme: string): boolean
    /**
     * Whether `scheme` is considered as an empty document scheme.
     * 
     * See also webkit_security_manager_register_uri_scheme_as_empty_document().
     * @param scheme a URI scheme
     * @returns %TRUE if @scheme is an empty document scheme or %FALSE otherwise.
     */
    uriSchemeIsEmptyDocument(scheme: string): boolean
    /**
     * Whether `scheme` is considered as a local scheme.
     * 
     * See also webkit_security_manager_register_uri_scheme_as_local().
     * @param scheme a URI scheme
     * @returns %TRUE if @scheme is a local scheme or %FALSE otherwise.
     */
    uriSchemeIsLocal(scheme: string): boolean
    /**
     * Whether `scheme` is considered as a no-access scheme.
     * 
     * See also webkit_security_manager_register_uri_scheme_as_no_access().
     * @param scheme a URI scheme
     * @returns %TRUE if @scheme is a no-access scheme or %FALSE otherwise.
     */
    uriSchemeIsNoAccess(scheme: string): boolean
    /**
     * Whether `scheme` is considered as a secure scheme.
     * 
     * See also webkit_security_manager_register_uri_scheme_as_secure().
     * @param scheme a URI scheme
     * @returns %TRUE if @scheme is a secure scheme or %FALSE otherwise.
     */
    uriSchemeIsSecure(scheme: string): boolean

    // Class property signals of WebKit-6.0.WebKit.SecurityManager

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Controls security settings in a #WebKitWebContext.
 * 
 * The #WebKitSecurityManager defines security settings for URI
 * schemes in a #WebKitWebContext. Get it from the context with
 * webkit_web_context_get_security_manager(), and use it to register a
 * URI scheme with a certain security level, or to check if it already
 * has it.
 * @class 
 */
class SecurityManager extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.SecurityManager

    static name: string

    // Constructors of WebKit-6.0.WebKit.SecurityManager

    constructor(config?: SecurityManager.ConstructorProperties) 
    _init(config?: SecurityManager.ConstructorProperties): void
}

module Settings {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of WebKit-6.0.WebKit.Settings

        /**
         * Whether file access is allowed from file URLs. By default, when
         * something is loaded in a #WebKitWebView using a file URI, cross
         * origin requests to other file resources are not allowed. This
         * setting allows you to change that behaviour, so that it would be
         * possible to do a XMLHttpRequest of a local file, for example.
         */
        allow_file_access_from_file_urls?: boolean | null
        /**
         * Determine whether it's allowed to create and run modal dialogs
         * from a #WebKitWebView through JavaScript with
         * <function>window.showModalDialog</function>. If it's set to
         * %FALSE, the associated #WebKitWebView won't be able to create
         * new modal dialogs, so not even the #WebKitWebView::create
         * signal will be emitted.
         */
        allow_modal_dialogs?: boolean | null
        /**
         * Whether or not the top frame is allowed to navigate to data URLs. It is disabled by default
         * due to the risk it poses when loading untrusted URLs, with data URLs being used in scamming
         * and phishing attacks. In contrast, a scenario where it could be enabled could be an app that
         * embeds a WebView and you have control of the pages being show instead of a generic browser.
         */
        allow_top_navigation_to_data_urls?: boolean | null
        /**
         * Whether or not JavaScript running in the context of a file scheme URL
         * should be allowed to access content from any origin.  By default, when
         * something is loaded in a #WebKitWebView using a file scheme URL,
         * access to the local file system and arbitrary local storage is not
         * allowed. This setting allows you to change that behaviour, so that
         * it would be possible to use local storage, for example.
         */
        allow_universal_access_from_file_urls?: boolean | null
        /**
         * Determines whether images should be automatically loaded or not.
         * On devices where network bandwidth is of concern, it might be
         * useful to turn this property off.
         */
        auto_load_images?: boolean | null
        /**
         * The font family used as the default for content using a cursive font.
         */
        cursive_font_family?: string | null
        /**
         * The default text charset used when interpreting content with an unspecified charset.
         */
        default_charset?: string | null
        /**
         * The font family to use as the default for content that does not specify a font.
         */
        default_font_family?: string | null
        /**
         * The default font size in pixels to use for content displayed if
         * no font size is specified.
         */
        default_font_size?: number | null
        /**
         * The default font size in pixels to use for content displayed in
         * monospace font if no font size is specified.
         */
        default_monospace_font_size?: number | null
        /**
         * Enable or disable support for Web Security on pages.
         * 
         * This setting disables the same-origin policy, allowing every website full control over
         * all other websites. This is for use in special environments where you wish to disable
         * all security and allow websites to hack each other. It is impossible to use this setting
         * securely.
         */
        disable_web_security?: boolean | null
        /**
         * Whether to draw compositing borders and repaint counters on layers drawn
         * with accelerated compositing. This is useful for debugging issues related
         * to web content that is composited with the GPU.
         */
        draw_compositing_indicators?: boolean | null
        /**
         * Enable or disable horizontal swipe gesture for back-forward navigation.
         */
        enable_back_forward_navigation_gestures?: boolean | null
        /**
         * Whether to enable accessibility enhanced keyboard navigation.
         */
        enable_caret_browsing?: boolean | null
        /**
         * Determines whether or not developer tools, such as the Web Inspector, are enabled.
         */
        enable_developer_extras?: boolean | null
        /**
         * Determines whether or not to prefetch domain names. DNS prefetching attempts
         * to resolve domain names before a user tries to follow a link.
         */
        enable_dns_prefetching?: boolean | null
        /**
         * Enable or disable support for Encrypted Media API on pages.
         * EncryptedMedia is an experimental JavaScript API for playing encrypted media in HTML.
         * This property will only work as intended if the EncryptedMedia feature is enabled at build time
         * with the ENABLE_ENCRYPTED_MEDIA flag.
         * 
         * See https://www.w3.org/TR/encrypted-media/
         */
        enable_encrypted_media?: boolean | null
        /**
         * Whether to enable the Javascript Fullscreen API. The API
         * allows any HTML element to request fullscreen display. See also
         * the current draft of the spec:
         * http://www.w3.org/TR/fullscreen/
         */
        enable_fullscreen?: boolean | null
        /**
         * Whether to enable HTML5 client-side SQL database support (IndexedDB).
         */
        enable_html5_database?: boolean | null
        /**
         * Whether to enable HTML5 local storage support. Local storage provides
         * simple synchronous storage access.
         * 
         * HTML5 local storage specification is available at
         * http://dev.w3.org/html5/webstorage/.
         */
        enable_html5_local_storage?: boolean | null
        /**
         * Determines whether or not hyperlink auditing is enabled.
         * 
         * The hyperlink auditing specification is available at
         * http://www.whatwg.org/specs/web-apps/current-work/multipage/links.html#hyperlink-auditing.
         */
        enable_hyperlink_auditing?: boolean | null
        /**
         * Determines whether or not JavaScript executes within a page.
         */
        enable_javascript?: boolean | null
        /**
         * Determines whether or not JavaScript markup is allowed in document. When this setting is disabled,
         * all JavaScript-related elements and attributes are removed from the document during parsing. Note that
         * executing JavaScript is still allowed if #WebKitSettings:enable-javascript is %TRUE.
         */
        enable_javascript_markup?: boolean | null
        /**
         * Enable or disable support for media playback on pages. This setting is enabled by
         * default. Disabling it means `<audio>`, `<track>` and `<video>` elements will have
         * playback support disabled.
         */
        enable_media?: boolean | null
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
        enable_media_capabilities?: boolean | null
        /**
         * Enable or disable support for MediaStream on pages. MediaStream
         * is an experimental proposal for allowing web pages to access
         * audio and video devices for capture.
         * 
         * See also http://dev.w3.org/2011/webrtc/editor/getusermedia.html
         */
        enable_media_stream?: boolean | null
        /**
         * Enable or disable support for MediaSource on pages. MediaSource
         * extends HTMLMediaElement to allow JavaScript to generate media
         * streams for playback.
         * 
         * See also http://www.w3.org/TR/media-source/
         */
        enable_mediasource?: boolean | null
        /**
         * Enable or disable the Mock Capture Devices. Those are fake
         * Microphone and Camera devices to be used as MediaStream
         * sources.
         */
        enable_mock_capture_devices?: boolean | null
        /**
         * Whether to enable HTML5 offline web application cache support. Offline
         * web application cache allows web applications to run even when
         * the user is not connected to the network.
         * 
         * HTML5 offline web application specification is available at
         * http://dev.w3.org/html5/spec/offline.html.
         */
        enable_offline_web_application_cache?: boolean | null
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
        enable_page_cache?: boolean | null
        /**
         * Determines whether or not text areas can be resized.
         */
        enable_resizable_text_areas?: boolean | null
        /**
         * Whether to turn on site-specific quirks. Turning this on will
         * tell WebKit to use some site-specific workarounds for
         * better web compatibility. For example, older versions of
         * MediaWiki will incorrectly send to WebKit a CSS file with KHTML
         * workarounds. By turning on site-specific quirks, WebKit will
         * special-case this and other cases to make some specific sites work.
         */
        enable_site_specific_quirks?: boolean | null
        /**
         * Enable or disable smooth scrolling.
         */
        enable_smooth_scrolling?: boolean | null
        /**
         * Whether to enable Spatial Navigation. This feature consists in the ability
         * to navigate between focusable elements in a Web page, such as hyperlinks
         * and form controls, by using Left, Right, Up and Down arrow keys.
         * For example, if an user presses the Right key, heuristics determine whether
         * there is an element they might be trying to reach towards the right, and if
         * there are multiple elements, which element they probably wants.
         */
        enable_spatial_navigation?: boolean | null
        /**
         * Determines whether the tab key cycles through the elements on the page.
         * When this setting is enabled, users will be able to focus the next element
         * in the page by pressing the tab key. If the selected element is editable,
         * then pressing tab key will insert the tab character.
         */
        enable_tabs_to_links?: boolean | null
        /**
         * Enable or disable support for WebAudio on pages. WebAudio is an
         * API for processing and synthesizing audio in web applications
         * 
         * See also https://webaudio.github.io/web-audio-api
         */
        enable_webaudio?: boolean | null
        /**
         * Enable or disable support for WebGL on pages. WebGL enables web
         * content to use an API based on OpenGL ES 2.0.
         */
        enable_webgl?: boolean | null
        /**
         * Enable WebRTC support for loaded pages.
         * 
         * Enabling this setting implies that [property`Settings:`enable-media-stream]
         * will be enabled as well.
         * 
         * See also https://www.w3.org/TR/webrtc/
         */
        enable_webrtc?: boolean | null
        /**
         * Enable or disable writing console messages to stdout. These are messages
         * sent to the console with console.log and related methods.
         */
        enable_write_console_messages_to_stdout?: boolean | null
        /**
         * The font family used as the default for content using a fantasy font.
         */
        fantasy_font_family?: string | null
        /**
         * The #WebKitHardwareAccelerationPolicy to decide how to enable and disable
         * hardware acceleration. Disabling hardware acceleration might
         * cause some websites to not render correctly or consume more CPU.
         * 
         * Note that changing this setting might not be possible if hardware acceleration is not
         * supported by the hardware or the system. In that case, you can get the value to know the
         * actual policy being used, but changing the setting will not have any effect.
         */
        hardware_acceleration_policy?: HardwareAccelerationPolicy | null
        /**
         * Whether JavaScript can access the clipboard. The default value is %FALSE. If
         * set to %TRUE, document.execCommand() allows cut, copy and paste commands.
         */
        javascript_can_access_clipboard?: boolean | null
        /**
         * Whether JavaScript can open popup windows automatically without user
         * intervention.
         */
        javascript_can_open_windows_automatically?: boolean | null
        /**
         * Unsupported setting. This property does nothing.
         */
        load_icons_ignoring_image_load_setting?: boolean | null
        /**
         * List of media content types requiring hardware support, split by semicolons (:).
         * For example: 'video/webm; codecs="vp*":video/mp4; codecs="avc*":video/&ast; codecs="av1*"'.
         */
        media_content_types_requiring_hardware_support?: string | null
        /**
         * Whether media playback is full-screen only or inline playback is allowed.
         * This is %TRUE by default, so media playback can be inline. Setting it to
         * %FALSE allows specifying that media playback should be always fullscreen.
         */
        media_playback_allows_inline?: boolean | null
        /**
         * Whether a user gesture (such as clicking the play button)
         * would be required to start media playback or load media. This is off
         * by default, so media playback could start automatically.
         * Setting it on requires a gesture by the user to start playback, or to
         * load the media.
         */
        media_playback_requires_user_gesture?: boolean | null
        /**
         * The minimum font size in pixels used to display text. This setting
         * controls the absolute smallest size. Values other than 0 can
         * potentially break page layouts.
         */
        minimum_font_size?: number | null
        /**
         * The font family used as the default for content using a monospace font.
         */
        monospace_font_family?: string | null
        /**
         * The font family used as the default for content using a pictograph font.
         */
        pictograph_font_family?: string | null
        /**
         * Whether background images should be drawn during printing.
         */
        print_backgrounds?: boolean | null
        /**
         * The font family used as the default for content using a sans-serif font.
         */
        sans_serif_font_family?: string | null
        /**
         * The font family used as the default for content using a serif font.
         */
        serif_font_family?: string | null
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
        user_agent?: string | null
        /**
         * Whether #WebKitWebView:zoom-level affects only the
         * text of the page or all the contents. Other contents containing text
         * like form controls will be also affected by zoom factor when
         * this property is enabled.
         */
        zoom_text_only?: boolean | null
    }

}

interface Settings {

    // Own properties of WebKit-6.0.WebKit.Settings

    /**
     * Whether file access is allowed from file URLs. By default, when
     * something is loaded in a #WebKitWebView using a file URI, cross
     * origin requests to other file resources are not allowed. This
     * setting allows you to change that behaviour, so that it would be
     * possible to do a XMLHttpRequest of a local file, for example.
     */
    allowFileAccessFromFileUrls: boolean
    /**
     * Determine whether it's allowed to create and run modal dialogs
     * from a #WebKitWebView through JavaScript with
     * <function>window.showModalDialog</function>. If it's set to
     * %FALSE, the associated #WebKitWebView won't be able to create
     * new modal dialogs, so not even the #WebKitWebView::create
     * signal will be emitted.
     */
    allowModalDialogs: boolean
    /**
     * Whether or not the top frame is allowed to navigate to data URLs. It is disabled by default
     * due to the risk it poses when loading untrusted URLs, with data URLs being used in scamming
     * and phishing attacks. In contrast, a scenario where it could be enabled could be an app that
     * embeds a WebView and you have control of the pages being show instead of a generic browser.
     */
    allowTopNavigationToDataUrls: boolean
    /**
     * Whether or not JavaScript running in the context of a file scheme URL
     * should be allowed to access content from any origin.  By default, when
     * something is loaded in a #WebKitWebView using a file scheme URL,
     * access to the local file system and arbitrary local storage is not
     * allowed. This setting allows you to change that behaviour, so that
     * it would be possible to use local storage, for example.
     */
    allowUniversalAccessFromFileUrls: boolean
    /**
     * Determines whether images should be automatically loaded or not.
     * On devices where network bandwidth is of concern, it might be
     * useful to turn this property off.
     */
    autoLoadImages: boolean
    /**
     * The font family used as the default for content using a cursive font.
     */
    cursiveFontFamily: string | null
    /**
     * The default text charset used when interpreting content with an unspecified charset.
     */
    defaultCharset: string | null
    /**
     * The font family to use as the default for content that does not specify a font.
     */
    defaultFontFamily: string | null
    /**
     * The default font size in pixels to use for content displayed if
     * no font size is specified.
     */
    defaultFontSize: number
    /**
     * The default font size in pixels to use for content displayed in
     * monospace font if no font size is specified.
     */
    defaultMonospaceFontSize: number
    /**
     * Enable or disable support for Web Security on pages.
     * 
     * This setting disables the same-origin policy, allowing every website full control over
     * all other websites. This is for use in special environments where you wish to disable
     * all security and allow websites to hack each other. It is impossible to use this setting
     * securely.
     */
    disableWebSecurity: boolean
    /**
     * Whether to draw compositing borders and repaint counters on layers drawn
     * with accelerated compositing. This is useful for debugging issues related
     * to web content that is composited with the GPU.
     */
    drawCompositingIndicators: boolean
    /**
     * Enable or disable horizontal swipe gesture for back-forward navigation.
     */
    enableBackForwardNavigationGestures: boolean
    /**
     * Whether to enable accessibility enhanced keyboard navigation.
     */
    enableCaretBrowsing: boolean
    /**
     * Determines whether or not developer tools, such as the Web Inspector, are enabled.
     */
    enableDeveloperExtras: boolean
    /**
     * Determines whether or not to prefetch domain names. DNS prefetching attempts
     * to resolve domain names before a user tries to follow a link.
     */
    enableDnsPrefetching: boolean
    /**
     * Enable or disable support for Encrypted Media API on pages.
     * EncryptedMedia is an experimental JavaScript API for playing encrypted media in HTML.
     * This property will only work as intended if the EncryptedMedia feature is enabled at build time
     * with the ENABLE_ENCRYPTED_MEDIA flag.
     * 
     * See https://www.w3.org/TR/encrypted-media/
     */
    enableEncryptedMedia: boolean
    /**
     * Whether to enable the Javascript Fullscreen API. The API
     * allows any HTML element to request fullscreen display. See also
     * the current draft of the spec:
     * http://www.w3.org/TR/fullscreen/
     */
    enableFullscreen: boolean
    /**
     * Whether to enable HTML5 client-side SQL database support (IndexedDB).
     */
    enableHtml5Database: boolean
    /**
     * Whether to enable HTML5 local storage support. Local storage provides
     * simple synchronous storage access.
     * 
     * HTML5 local storage specification is available at
     * http://dev.w3.org/html5/webstorage/.
     */
    enableHtml5LocalStorage: boolean
    /**
     * Determines whether or not hyperlink auditing is enabled.
     * 
     * The hyperlink auditing specification is available at
     * http://www.whatwg.org/specs/web-apps/current-work/multipage/links.html#hyperlink-auditing.
     */
    enableHyperlinkAuditing: boolean
    /**
     * Determines whether or not JavaScript executes within a page.
     */
    enableJavascript: boolean
    /**
     * Determines whether or not JavaScript markup is allowed in document. When this setting is disabled,
     * all JavaScript-related elements and attributes are removed from the document during parsing. Note that
     * executing JavaScript is still allowed if #WebKitSettings:enable-javascript is %TRUE.
     */
    enableJavascriptMarkup: boolean
    /**
     * Enable or disable support for media playback on pages. This setting is enabled by
     * default. Disabling it means `<audio>`, `<track>` and `<video>` elements will have
     * playback support disabled.
     */
    enableMedia: boolean
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
    enableMediaCapabilities: boolean
    /**
     * Enable or disable support for MediaStream on pages. MediaStream
     * is an experimental proposal for allowing web pages to access
     * audio and video devices for capture.
     * 
     * See also http://dev.w3.org/2011/webrtc/editor/getusermedia.html
     */
    enableMediaStream: boolean
    /**
     * Enable or disable support for MediaSource on pages. MediaSource
     * extends HTMLMediaElement to allow JavaScript to generate media
     * streams for playback.
     * 
     * See also http://www.w3.org/TR/media-source/
     */
    enableMediasource: boolean
    /**
     * Enable or disable the Mock Capture Devices. Those are fake
     * Microphone and Camera devices to be used as MediaStream
     * sources.
     */
    enableMockCaptureDevices: boolean
    /**
     * Whether to enable HTML5 offline web application cache support. Offline
     * web application cache allows web applications to run even when
     * the user is not connected to the network.
     * 
     * HTML5 offline web application specification is available at
     * http://dev.w3.org/html5/spec/offline.html.
     */
    enableOfflineWebApplicationCache: boolean
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
    enablePageCache: boolean
    /**
     * Determines whether or not text areas can be resized.
     */
    enableResizableTextAreas: boolean
    /**
     * Whether to turn on site-specific quirks. Turning this on will
     * tell WebKit to use some site-specific workarounds for
     * better web compatibility. For example, older versions of
     * MediaWiki will incorrectly send to WebKit a CSS file with KHTML
     * workarounds. By turning on site-specific quirks, WebKit will
     * special-case this and other cases to make some specific sites work.
     */
    enableSiteSpecificQuirks: boolean
    /**
     * Enable or disable smooth scrolling.
     */
    enableSmoothScrolling: boolean
    /**
     * Whether to enable Spatial Navigation. This feature consists in the ability
     * to navigate between focusable elements in a Web page, such as hyperlinks
     * and form controls, by using Left, Right, Up and Down arrow keys.
     * For example, if an user presses the Right key, heuristics determine whether
     * there is an element they might be trying to reach towards the right, and if
     * there are multiple elements, which element they probably wants.
     */
    enableSpatialNavigation: boolean
    /**
     * Determines whether the tab key cycles through the elements on the page.
     * When this setting is enabled, users will be able to focus the next element
     * in the page by pressing the tab key. If the selected element is editable,
     * then pressing tab key will insert the tab character.
     */
    enableTabsToLinks: boolean
    /**
     * Enable or disable support for WebAudio on pages. WebAudio is an
     * API for processing and synthesizing audio in web applications
     * 
     * See also https://webaudio.github.io/web-audio-api
     */
    enableWebaudio: boolean
    /**
     * Enable or disable support for WebGL on pages. WebGL enables web
     * content to use an API based on OpenGL ES 2.0.
     */
    enableWebgl: boolean
    /**
     * Enable WebRTC support for loaded pages.
     * 
     * Enabling this setting implies that [property`Settings:`enable-media-stream]
     * will be enabled as well.
     * 
     * See also https://www.w3.org/TR/webrtc/
     */
    enableWebrtc: boolean
    /**
     * Enable or disable writing console messages to stdout. These are messages
     * sent to the console with console.log and related methods.
     */
    enableWriteConsoleMessagesToStdout: boolean
    /**
     * The font family used as the default for content using a fantasy font.
     */
    fantasyFontFamily: string | null
    /**
     * The #WebKitHardwareAccelerationPolicy to decide how to enable and disable
     * hardware acceleration. Disabling hardware acceleration might
     * cause some websites to not render correctly or consume more CPU.
     * 
     * Note that changing this setting might not be possible if hardware acceleration is not
     * supported by the hardware or the system. In that case, you can get the value to know the
     * actual policy being used, but changing the setting will not have any effect.
     */
    hardwareAccelerationPolicy: HardwareAccelerationPolicy
    /**
     * Whether JavaScript can access the clipboard. The default value is %FALSE. If
     * set to %TRUE, document.execCommand() allows cut, copy and paste commands.
     */
    javascriptCanAccessClipboard: boolean
    /**
     * Whether JavaScript can open popup windows automatically without user
     * intervention.
     */
    javascriptCanOpenWindowsAutomatically: boolean
    /**
     * Unsupported setting. This property does nothing.
     */
    loadIconsIgnoringImageLoadSetting: boolean
    /**
     * List of media content types requiring hardware support, split by semicolons (:).
     * For example: 'video/webm; codecs="vp*":video/mp4; codecs="avc*":video/&ast; codecs="av1*"'.
     */
    mediaContentTypesRequiringHardwareSupport: string | null
    /**
     * Whether media playback is full-screen only or inline playback is allowed.
     * This is %TRUE by default, so media playback can be inline. Setting it to
     * %FALSE allows specifying that media playback should be always fullscreen.
     */
    mediaPlaybackAllowsInline: boolean
    /**
     * Whether a user gesture (such as clicking the play button)
     * would be required to start media playback or load media. This is off
     * by default, so media playback could start automatically.
     * Setting it on requires a gesture by the user to start playback, or to
     * load the media.
     */
    mediaPlaybackRequiresUserGesture: boolean
    /**
     * The minimum font size in pixels used to display text. This setting
     * controls the absolute smallest size. Values other than 0 can
     * potentially break page layouts.
     */
    minimumFontSize: number
    /**
     * The font family used as the default for content using a monospace font.
     */
    monospaceFontFamily: string | null
    /**
     * The font family used as the default for content using a pictograph font.
     */
    pictographFontFamily: string | null
    /**
     * Whether background images should be drawn during printing.
     */
    printBackgrounds: boolean
    /**
     * The font family used as the default for content using a sans-serif font.
     */
    sansSerifFontFamily: string | null
    /**
     * The font family used as the default for content using a serif font.
     */
    serifFontFamily: string | null
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
    userAgent: string | null
    /**
     * Whether #WebKitWebView:zoom-level affects only the
     * text of the page or all the contents. Other contents containing text
     * like form controls will be also affected by zoom factor when
     * this property is enabled.
     */
    zoomTextOnly: boolean
    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.Settings

    /**
     * Get the #WebKitSettings:allow-file-access-from-file-urls property.
     * @returns %TRUE If file access from file URLs is allowed or %FALSE otherwise.
     */
    getAllowFileAccessFromFileUrls(): boolean
    /**
     * Get the #WebKitSettings:allow-modal-dialogs property.
     * @returns %TRUE if it's allowed to create and run modal dialogs or %FALSE otherwise.
     */
    getAllowModalDialogs(): boolean
    /**
     * Get the #WebKitSettings:allow-top-navigation-to-data-urls property.
     * @returns %TRUE If navigation to data URLs from the top frame is allowed or %FALSE\ otherwise.
     */
    getAllowTopNavigationToDataUrls(): boolean
    /**
     * Get the #WebKitSettings:allow-universal-access-from-file-urls property.
     * @returns %TRUE If universal access from file URLs is allowed or %FALSE otherwise.
     */
    getAllowUniversalAccessFromFileUrls(): boolean
    /**
     * Get the #WebKitSettings:auto-load-images property.
     * @returns %TRUE If auto loading of images is enabled or %FALSE otherwise.
     */
    getAutoLoadImages(): boolean
    /**
     * Gets the #WebKitSettings:cursive-font-family property.
     * @returns The default font family used to display content marked with cursive font.
     */
    getCursiveFontFamily(): string
    /**
     * Gets the #WebKitSettings:default-charset property.
     * @returns Default charset.
     */
    getDefaultCharset(): string
    /**
     * Gets the #WebKitSettings:default-font-family property.
     * @returns The default font family used to display content that does not specify a font.
     */
    getDefaultFontFamily(): string
    /**
     * Gets the #WebKitSettings:default-font-size property.
     * @returns The default font size, in pixels.
     */
    getDefaultFontSize(): number
    /**
     * Gets the #WebKitSettings:default-monospace-font-size property.
     * @returns Default monospace font size, in pixels.
     */
    getDefaultMonospaceFontSize(): number
    /**
     * Get the #WebKitSettings:disable-web-security property.
     * @returns %TRUE If web security support is disabled or %FALSE otherwise.
     */
    getDisableWebSecurity(): boolean
    /**
     * Get the #WebKitSettings:draw-compositing-indicators property.
     * @returns %TRUE If compositing borders are drawn or %FALSE otherwise.
     */
    getDrawCompositingIndicators(): boolean
    /**
     * Get the #WebKitSettings:enable-back-forward-navigation-gestures property.
     * @returns %TRUE if horizontal swipe gesture will trigger back-forward navigaiton or %FALSE otherwise.
     */
    getEnableBackForwardNavigationGestures(): boolean
    /**
     * Get the #WebKitSettings:enable-caret-browsing property.
     * @returns %TRUE If caret browsing is enabled or %FALSE otherwise.
     */
    getEnableCaretBrowsing(): boolean
    /**
     * Get the #WebKitSettings:enable-developer-extras property.
     * @returns %TRUE If developer extras is enabled or %FALSE otherwise.
     */
    getEnableDeveloperExtras(): boolean
    /**
     * Get the #WebKitSettings:enable-dns-prefetching property.
     * @returns %TRUE If DNS prefetching is enabled or %FALSE otherwise.
     */
    getEnableDnsPrefetching(): boolean
    /**
     * Get the #WebKitSettings:enable-encrypted-media property.
     * @returns %TRUE if EncryptedMedia support is enabled or %FALSE otherwise.
     */
    getEnableEncryptedMedia(): boolean
    /**
     * Get the #WebKitSettings:enable-fullscreen property.
     * @returns %TRUE If fullscreen support is enabled or %FALSE otherwise.
     */
    getEnableFullscreen(): boolean
    /**
     * Get the #WebKitSettings:enable-html5-database property.
     * @returns %TRUE if IndexedDB support is enabled or %FALSE otherwise.
     */
    getEnableHtml5Database(): boolean
    /**
     * Get the #WebKitSettings:enable-html5-local-storage property.
     * @returns %TRUE If HTML5 local storage support is enabled or %FALSE otherwise.
     */
    getEnableHtml5LocalStorage(): boolean
    /**
     * Get the #WebKitSettings:enable-hyperlink-auditing property.
     * @returns %TRUE If hyper link auditing is enabled or %FALSE otherwise.
     */
    getEnableHyperlinkAuditing(): boolean
    /**
     * Get the #WebKitSettings:enable-javascript property.
     * @returns %TRUE If JavaScript is enabled or %FALSE otherwise.
     */
    getEnableJavascript(): boolean
    /**
     * Get the #WebKitSettings:enable-javascript-markup property.
     * @returns %TRUE if JavaScript markup is enabled or %FALSE otherwise.
     */
    getEnableJavascriptMarkup(): boolean
    /**
     * Get the #WebKitSettings:enable-media property.
     * @returns %TRUE if media support is enabled or %FALSE otherwise.
     */
    getEnableMedia(): boolean
    /**
     * Get the #WebKitSettings:enable-media-capabilities property.
     * @returns %TRUE if MediaCapabilities support is enabled or %FALSE otherwise.
     */
    getEnableMediaCapabilities(): boolean
    /**
     * Get the #WebKitSettings:enable-media-stream property.
     * @returns %TRUE If mediastream support is enabled or %FALSE otherwise.
     */
    getEnableMediaStream(): boolean
    /**
     * Get the #WebKitSettings:enable-mediasource property.
     * @returns %TRUE If MediaSource support is enabled or %FALSE otherwise.
     */
    getEnableMediasource(): boolean
    /**
     * Get the #WebKitSettings:enable-mock-capture-devices property.
     * @returns %TRUE If mock capture devices is enabled or %FALSE otherwise.
     */
    getEnableMockCaptureDevices(): boolean
    /**
     * Get the #WebKitSettings:enable-offline-web-application-cache property.
     * @returns %TRUE If HTML5 offline web application cache support is enabled or %FALSE otherwise.
     */
    getEnableOfflineWebApplicationCache(): boolean
    /**
     * Get the #WebKitSettings:enable-page-cache property.
     * @returns %TRUE if page cache enabled or %FALSE otherwise.
     */
    getEnablePageCache(): boolean
    /**
     * Get the #WebKitSettings:enable-resizable-text-areas property.
     * @returns %TRUE If text areas can be resized or %FALSE otherwise.
     */
    getEnableResizableTextAreas(): boolean
    /**
     * Get the #WebKitSettings:enable-site-specific-quirks property.
     * @returns %TRUE if site specific quirks are enabled or %FALSE otherwise.
     */
    getEnableSiteSpecificQuirks(): boolean
    /**
     * Get the #WebKitSettings:enable-smooth-scrolling property.
     * @returns %TRUE if smooth scrolling is enabled or %FALSE otherwise.
     */
    getEnableSmoothScrolling(): boolean
    /**
     * Get the #WebKitSettings:enable-spatial-navigation property.
     * @returns %TRUE If HTML5 spatial navigation support is enabled or %FALSE otherwise.
     */
    getEnableSpatialNavigation(): boolean
    /**
     * Get the #WebKitSettings:enable-tabs-to-links property.
     * @returns %TRUE If tabs to link is enabled or %FALSE otherwise.
     */
    getEnableTabsToLinks(): boolean
    /**
     * Get the #WebKitSettings:enable-webaudio property.
     * @returns %TRUE If webaudio support is enabled or %FALSE otherwise.
     */
    getEnableWebaudio(): boolean
    /**
     * Get the #WebKitSettings:enable-webgl property.
     * @returns %TRUE If WebGL support is enabled or %FALSE otherwise.
     */
    getEnableWebgl(): boolean
    /**
     * Get the [property`Settings:`enable-webrtc] property.
     * @returns %TRUE If WebRTC support is enabled or %FALSE otherwise.
     */
    getEnableWebrtc(): boolean
    /**
     * Get the #WebKitSettings:enable-write-console-messages-to-stdout property.
     * @returns %TRUE if writing console messages to stdout is enabled or %FALSE otherwise.
     */
    getEnableWriteConsoleMessagesToStdout(): boolean
    /**
     * Gets the #WebKitSettings:fantasy-font-family property.
     * @returns The default font family used to display content marked with fantasy font.
     */
    getFantasyFontFamily(): string
    /**
     * Gets whether a feature is enabled.
     * @param feature the feature to toggle.
     * @returns Whether the feature is enabled.
     */
    getFeatureEnabled(feature: Feature): boolean
    /**
     * Get the #WebKitSettings:hardware-acceleration-policy property.
     * @returns a #WebKitHardwareAccelerationPolicy
     */
    getHardwareAccelerationPolicy(): HardwareAccelerationPolicy
    /**
     * Get the #WebKitSettings:javascript-can-access-clipboard property.
     * @returns %TRUE If javascript-can-access-clipboard is enabled or %FALSE otherwise.
     */
    getJavascriptCanAccessClipboard(): boolean
    /**
     * Get the #WebKitSettings:javascript-can-open-windows-automatically property.
     * @returns %TRUE If JavaScript can open window automatically or %FALSE otherwise.
     */
    getJavascriptCanOpenWindowsAutomatically(): boolean
    /**
     * Setting no longer supported. This function returns %FALSE.
     * @returns %FALSE
     */
    getLoadIconsIgnoringImageLoadSetting(): boolean
    /**
     * Gets the #WebKitSettings:media-content-types-requiring-hardware-support property.
     * @returns Media content types requiring hardware support, or %NULL.
     */
    getMediaContentTypesRequiringHardwareSupport(): string
    /**
     * Get the #WebKitSettings:media-playback-allows-inline property.
     * @returns %TRUE If inline playback is allowed for media    or %FALSE if only fullscreen playback is allowed.
     */
    getMediaPlaybackAllowsInline(): boolean
    /**
     * Get the #WebKitSettings:media-playback-requires-user-gesture property.
     * @returns %TRUE If an user gesture is needed to play or load media    or %FALSE if no user gesture is needed.
     */
    getMediaPlaybackRequiresUserGesture(): boolean
    /**
     * Gets the #WebKitSettings:minimum-font-size property.
     * @returns Minimum font size, in pixels.
     */
    getMinimumFontSize(): number
    /**
     * Gets the #WebKitSettings:monospace-font-family property.
     * @returns Default font family used to display content marked with monospace font.
     */
    getMonospaceFontFamily(): string
    /**
     * Gets the #WebKitSettings:pictograph-font-family property.
     * @returns The default font family used to display content marked with pictograph font.
     */
    getPictographFontFamily(): string
    /**
     * Get the #WebKitSettings:print-backgrounds property.
     * @returns %TRUE If background images should be printed or %FALSE otherwise.
     */
    getPrintBackgrounds(): boolean
    /**
     * Gets the #WebKitSettings:sans-serif-font-family property.
     * @returns The default font family used to display content marked with sans-serif font.
     */
    getSansSerifFontFamily(): string
    /**
     * Gets the #WebKitSettings:serif-font-family property.
     * @returns The default font family used to display content marked with serif font.
     */
    getSerifFontFamily(): string
    /**
     * Get the #WebKitSettings:user-agent property.
     * @returns The current value of the user-agent property.
     */
    getUserAgent(): string
    /**
     * Get the #WebKitSettings:zoom-text-only property.
     * @returns %TRUE If zoom level of the view should only affect the text    or %FALSE if all view contents should be scaled.
     */
    getZoomTextOnly(): boolean
    /**
     * Set the #WebKitSettings:allow-file-access-from-file-urls property.
     * @param allowed Value to be set
     */
    setAllowFileAccessFromFileUrls(allowed: boolean): void
    /**
     * Set the #WebKitSettings:allow-modal-dialogs property.
     * @param allowed Value to be set
     */
    setAllowModalDialogs(allowed: boolean): void
    /**
     * Set the #WebKitSettings:allow-top-navigation-to-data-urls property.
     * @param allowed Value to be set
     */
    setAllowTopNavigationToDataUrls(allowed: boolean): void
    /**
     * Set the #WebKitSettings:allow-universal-access-from-file-urls property.
     * @param allowed Value to be set
     */
    setAllowUniversalAccessFromFileUrls(allowed: boolean): void
    /**
     * Set the #WebKitSettings:auto-load-images property.
     * @param enabled Value to be set
     */
    setAutoLoadImages(enabled: boolean): void
    /**
     * Set the #WebKitSettings:cursive-font-family property.
     * @param cursiveFontFamily the new default cursive font family
     */
    setCursiveFontFamily(cursiveFontFamily: string): void
    /**
     * Set the #WebKitSettings:default-charset property.
     * @param defaultCharset default charset to be set
     */
    setDefaultCharset(defaultCharset: string): void
    /**
     * Set the #WebKitSettings:default-font-family property.
     * @param defaultFontFamily the new default font family
     */
    setDefaultFontFamily(defaultFontFamily: string): void
    /**
     * Set the #WebKitSettings:default-font-size property.
     * @param fontSize default font size to be set in pixels
     */
    setDefaultFontSize(fontSize: number): void
    /**
     * Set the #WebKitSettings:default-monospace-font-size property.
     * @param fontSize default monospace font size to be set in pixels
     */
    setDefaultMonospaceFontSize(fontSize: number): void
    /**
     * Set the #WebKitSettings:disable-web-security property.
     * @param disabled Value to be set
     */
    setDisableWebSecurity(disabled: boolean): void
    /**
     * Set the #WebKitSettings:draw-compositing-indicators property.
     * @param enabled Value to be set
     */
    setDrawCompositingIndicators(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-back-forward-navigation-gestures property.
     * @param enabled value to be set
     */
    setEnableBackForwardNavigationGestures(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-caret-browsing property.
     * @param enabled Value to be set
     */
    setEnableCaretBrowsing(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-developer-extras property.
     * @param enabled Value to be set
     */
    setEnableDeveloperExtras(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-dns-prefetching property.
     * @param enabled Value to be set
     */
    setEnableDnsPrefetching(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-encrypted-media property.
     * @param enabled Value to be set
     */
    setEnableEncryptedMedia(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-fullscreen property.
     * @param enabled Value to be set
     */
    setEnableFullscreen(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-html5-database property.
     * @param enabled Value to be set
     */
    setEnableHtml5Database(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-html5-local-storage property.
     * @param enabled Value to be set
     */
    setEnableHtml5LocalStorage(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-hyperlink-auditing property.
     * @param enabled Value to be set
     */
    setEnableHyperlinkAuditing(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-javascript property.
     * @param enabled Value to be set
     */
    setEnableJavascript(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-javascript-markup property.
     * @param enabled Value to be set
     */
    setEnableJavascriptMarkup(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-media property.
     * @param enabled Value to be set
     */
    setEnableMedia(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-media-capabilities property.
     * @param enabled Value to be set
     */
    setEnableMediaCapabilities(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-media-stream property.
     * @param enabled Value to be set
     */
    setEnableMediaStream(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-mediasource property.
     * @param enabled Value to be set
     */
    setEnableMediasource(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-mock-capture-devices property.
     * @param enabled Value to be set
     */
    setEnableMockCaptureDevices(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-offline-web-application-cache property.
     * @param enabled Value to be set
     */
    setEnableOfflineWebApplicationCache(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-page-cache property.
     * @param enabled Value to be set
     */
    setEnablePageCache(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-resizable-text-areas property.
     * @param enabled Value to be set
     */
    setEnableResizableTextAreas(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-site-specific-quirks property.
     * @param enabled Value to be set
     */
    setEnableSiteSpecificQuirks(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-smooth-scrolling property.
     * @param enabled Value to be set
     */
    setEnableSmoothScrolling(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-spatial-navigation property.
     * @param enabled Value to be set
     */
    setEnableSpatialNavigation(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-tabs-to-links property.
     * @param enabled Value to be set
     */
    setEnableTabsToLinks(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-webaudio property.
     * @param enabled Value to be set
     */
    setEnableWebaudio(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-webgl property.
     * @param enabled Value to be set
     */
    setEnableWebgl(enabled: boolean): void
    /**
     * Set the [property`Settings:`enable-webrtc] property.
     * 
     * Setting this property to %TRUE implies the media-stream web-setting will also be enabled.
     * @param enabled Value to be set
     */
    setEnableWebrtc(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-write-console-messages-to-stdout property.
     * @param enabled Value to be set
     */
    setEnableWriteConsoleMessagesToStdout(enabled: boolean): void
    /**
     * Set the #WebKitSettings:fantasy-font-family property.
     * @param fantasyFontFamily the new default fantasy font family
     */
    setFantasyFontFamily(fantasyFontFamily: string): void
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
    setFeatureEnabled(feature: Feature, enabled: boolean): void
    /**
     * Set the #WebKitSettings:hardware-acceleration-policy property.
     * @param policy a #WebKitHardwareAccelerationPolicy
     */
    setHardwareAccelerationPolicy(policy: HardwareAccelerationPolicy): void
    /**
     * Set the #WebKitSettings:javascript-can-access-clipboard property.
     * @param enabled Value to be set
     */
    setJavascriptCanAccessClipboard(enabled: boolean): void
    /**
     * Set the #WebKitSettings:javascript-can-open-windows-automatically property.
     * @param enabled Value to be set
     */
    setJavascriptCanOpenWindowsAutomatically(enabled: boolean): void
    /**
     * Setting no longer supported. This function does nothing.
     * @param enabled Value to be set
     */
    setLoadIconsIgnoringImageLoadSetting(enabled: boolean): void
    /**
     * Set the #WebKitSettings:media-content-types-requiring-hardware-support property.
     * @param contentTypes list of media content types requiring hardware support split by semicolons (:) or %NULL to use the default value.
     */
    setMediaContentTypesRequiringHardwareSupport(contentTypes: string | null): void
    /**
     * Set the #WebKitSettings:media-playback-allows-inline property.
     * @param enabled Value to be set
     */
    setMediaPlaybackAllowsInline(enabled: boolean): void
    /**
     * Set the #WebKitSettings:media-playback-requires-user-gesture property.
     * @param enabled Value to be set
     */
    setMediaPlaybackRequiresUserGesture(enabled: boolean): void
    /**
     * Set the #WebKitSettings:minimum-font-size property.
     * @param fontSize minimum font size to be set in pixels
     */
    setMinimumFontSize(fontSize: number): void
    /**
     * Set the #WebKitSettings:monospace-font-family property.
     * @param monospaceFontFamily the new default monospace font family
     */
    setMonospaceFontFamily(monospaceFontFamily: string): void
    /**
     * Set the #WebKitSettings:pictograph-font-family property.
     * @param pictographFontFamily the new default pictograph font family
     */
    setPictographFontFamily(pictographFontFamily: string): void
    /**
     * Set the #WebKitSettings:print-backgrounds property.
     * @param printBackgrounds Value to be set
     */
    setPrintBackgrounds(printBackgrounds: boolean): void
    /**
     * Set the #WebKitSettings:sans-serif-font-family property.
     * @param sansSerifFontFamily the new default sans-serif font family
     */
    setSansSerifFontFamily(sansSerifFontFamily: string): void
    /**
     * Set the #WebKitSettings:serif-font-family property.
     * @param serifFontFamily the new default serif font family
     */
    setSerifFontFamily(serifFontFamily: string): void
    /**
     * Set the #WebKitSettings:user-agent property.
     * @param userAgent The new custom user agent string or %NULL to use the default user agent
     */
    setUserAgent(userAgent: string | null): void
    /**
     * Set the #WebKitSettings:user-agent property by appending the application details.
     * 
     * Set the #WebKitSettings:user-agent property by appending the application details to the default user
     * agent. If no application name or version is given, the default user agent used will be used. If only
     * the version is given, the default engine version is used with the given application name.
     * @param applicationName The application name used for the user agent or %NULL to use the default user agent.
     * @param applicationVersion The application version for the user agent or %NULL to user the default version.
     */
    setUserAgentWithApplicationDetails(applicationName: string | null, applicationVersion: string | null): void
    /**
     * Set the #WebKitSettings:zoom-text-only property.
     * @param zoomTextOnly Value to be set
     */
    setZoomTextOnly(zoomTextOnly: boolean): void

    // Class property signals of WebKit-6.0.WebKit.Settings

    connect(sigName: "notify::allow-file-access-from-file-urls", callback: (...args: any[]) => void): number
    on(sigName: "notify::allow-file-access-from-file-urls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allow-file-access-from-file-urls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allow-file-access-from-file-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allow-file-access-from-file-urls", ...args: any[]): void
    connect(sigName: "notify::allow-modal-dialogs", callback: (...args: any[]) => void): number
    on(sigName: "notify::allow-modal-dialogs", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allow-modal-dialogs", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allow-modal-dialogs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allow-modal-dialogs", ...args: any[]): void
    connect(sigName: "notify::allow-top-navigation-to-data-urls", callback: (...args: any[]) => void): number
    on(sigName: "notify::allow-top-navigation-to-data-urls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allow-top-navigation-to-data-urls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allow-top-navigation-to-data-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allow-top-navigation-to-data-urls", ...args: any[]): void
    connect(sigName: "notify::allow-universal-access-from-file-urls", callback: (...args: any[]) => void): number
    on(sigName: "notify::allow-universal-access-from-file-urls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allow-universal-access-from-file-urls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allow-universal-access-from-file-urls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allow-universal-access-from-file-urls", ...args: any[]): void
    connect(sigName: "notify::auto-load-images", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-load-images", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-load-images", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-load-images", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-load-images", ...args: any[]): void
    connect(sigName: "notify::cursive-font-family", callback: (...args: any[]) => void): number
    on(sigName: "notify::cursive-font-family", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cursive-font-family", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cursive-font-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cursive-font-family", ...args: any[]): void
    connect(sigName: "notify::default-charset", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-charset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-charset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-charset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-charset", ...args: any[]): void
    connect(sigName: "notify::default-font-family", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-font-family", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-font-family", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-font-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-font-family", ...args: any[]): void
    connect(sigName: "notify::default-font-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-font-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-font-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-font-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-font-size", ...args: any[]): void
    connect(sigName: "notify::default-monospace-font-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-monospace-font-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-monospace-font-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-monospace-font-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-monospace-font-size", ...args: any[]): void
    connect(sigName: "notify::disable-web-security", callback: (...args: any[]) => void): number
    on(sigName: "notify::disable-web-security", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::disable-web-security", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::disable-web-security", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::disable-web-security", ...args: any[]): void
    connect(sigName: "notify::draw-compositing-indicators", callback: (...args: any[]) => void): number
    on(sigName: "notify::draw-compositing-indicators", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::draw-compositing-indicators", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::draw-compositing-indicators", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::draw-compositing-indicators", ...args: any[]): void
    connect(sigName: "notify::enable-back-forward-navigation-gestures", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-back-forward-navigation-gestures", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-back-forward-navigation-gestures", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-back-forward-navigation-gestures", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-back-forward-navigation-gestures", ...args: any[]): void
    connect(sigName: "notify::enable-caret-browsing", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-caret-browsing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-caret-browsing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-caret-browsing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-caret-browsing", ...args: any[]): void
    connect(sigName: "notify::enable-developer-extras", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-developer-extras", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-developer-extras", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-developer-extras", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-developer-extras", ...args: any[]): void
    connect(sigName: "notify::enable-dns-prefetching", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-dns-prefetching", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-dns-prefetching", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-dns-prefetching", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-dns-prefetching", ...args: any[]): void
    connect(sigName: "notify::enable-encrypted-media", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-encrypted-media", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-encrypted-media", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-encrypted-media", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-encrypted-media", ...args: any[]): void
    connect(sigName: "notify::enable-fullscreen", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-fullscreen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-fullscreen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-fullscreen", ...args: any[]): void
    connect(sigName: "notify::enable-html5-database", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-html5-database", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-html5-database", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-html5-database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-html5-database", ...args: any[]): void
    connect(sigName: "notify::enable-html5-local-storage", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-html5-local-storage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-html5-local-storage", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-html5-local-storage", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-html5-local-storage", ...args: any[]): void
    connect(sigName: "notify::enable-hyperlink-auditing", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-hyperlink-auditing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-hyperlink-auditing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-hyperlink-auditing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-hyperlink-auditing", ...args: any[]): void
    connect(sigName: "notify::enable-javascript", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-javascript", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-javascript", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-javascript", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-javascript", ...args: any[]): void
    connect(sigName: "notify::enable-javascript-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-javascript-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-javascript-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-javascript-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-javascript-markup", ...args: any[]): void
    connect(sigName: "notify::enable-media", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-media", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-media", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-media", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-media", ...args: any[]): void
    connect(sigName: "notify::enable-media-capabilities", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-media-capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-media-capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-media-capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-media-capabilities", ...args: any[]): void
    connect(sigName: "notify::enable-media-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-media-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-media-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-media-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-media-stream", ...args: any[]): void
    connect(sigName: "notify::enable-mediasource", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-mediasource", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-mediasource", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-mediasource", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-mediasource", ...args: any[]): void
    connect(sigName: "notify::enable-mock-capture-devices", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-mock-capture-devices", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-mock-capture-devices", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-mock-capture-devices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-mock-capture-devices", ...args: any[]): void
    connect(sigName: "notify::enable-offline-web-application-cache", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-offline-web-application-cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-offline-web-application-cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-offline-web-application-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-offline-web-application-cache", ...args: any[]): void
    connect(sigName: "notify::enable-page-cache", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-page-cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-page-cache", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-page-cache", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-page-cache", ...args: any[]): void
    connect(sigName: "notify::enable-resizable-text-areas", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-resizable-text-areas", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-resizable-text-areas", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-resizable-text-areas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-resizable-text-areas", ...args: any[]): void
    connect(sigName: "notify::enable-site-specific-quirks", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-site-specific-quirks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-site-specific-quirks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-site-specific-quirks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-site-specific-quirks", ...args: any[]): void
    connect(sigName: "notify::enable-smooth-scrolling", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-smooth-scrolling", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-smooth-scrolling", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-smooth-scrolling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-smooth-scrolling", ...args: any[]): void
    connect(sigName: "notify::enable-spatial-navigation", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-spatial-navigation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-spatial-navigation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-spatial-navigation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-spatial-navigation", ...args: any[]): void
    connect(sigName: "notify::enable-tabs-to-links", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-tabs-to-links", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-tabs-to-links", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-tabs-to-links", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-tabs-to-links", ...args: any[]): void
    connect(sigName: "notify::enable-webaudio", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-webaudio", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-webaudio", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-webaudio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-webaudio", ...args: any[]): void
    connect(sigName: "notify::enable-webgl", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-webgl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-webgl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-webgl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-webgl", ...args: any[]): void
    connect(sigName: "notify::enable-webrtc", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-webrtc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-webrtc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-webrtc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-webrtc", ...args: any[]): void
    connect(sigName: "notify::enable-write-console-messages-to-stdout", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-write-console-messages-to-stdout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-write-console-messages-to-stdout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-write-console-messages-to-stdout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-write-console-messages-to-stdout", ...args: any[]): void
    connect(sigName: "notify::fantasy-font-family", callback: (...args: any[]) => void): number
    on(sigName: "notify::fantasy-font-family", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fantasy-font-family", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fantasy-font-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fantasy-font-family", ...args: any[]): void
    connect(sigName: "notify::hardware-acceleration-policy", callback: (...args: any[]) => void): number
    on(sigName: "notify::hardware-acceleration-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hardware-acceleration-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hardware-acceleration-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hardware-acceleration-policy", ...args: any[]): void
    connect(sigName: "notify::javascript-can-access-clipboard", callback: (...args: any[]) => void): number
    on(sigName: "notify::javascript-can-access-clipboard", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::javascript-can-access-clipboard", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::javascript-can-access-clipboard", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::javascript-can-access-clipboard", ...args: any[]): void
    connect(sigName: "notify::javascript-can-open-windows-automatically", callback: (...args: any[]) => void): number
    on(sigName: "notify::javascript-can-open-windows-automatically", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::javascript-can-open-windows-automatically", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::javascript-can-open-windows-automatically", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::javascript-can-open-windows-automatically", ...args: any[]): void
    connect(sigName: "notify::load-icons-ignoring-image-load-setting", callback: (...args: any[]) => void): number
    on(sigName: "notify::load-icons-ignoring-image-load-setting", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::load-icons-ignoring-image-load-setting", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::load-icons-ignoring-image-load-setting", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::load-icons-ignoring-image-load-setting", ...args: any[]): void
    connect(sigName: "notify::media-content-types-requiring-hardware-support", callback: (...args: any[]) => void): number
    on(sigName: "notify::media-content-types-requiring-hardware-support", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::media-content-types-requiring-hardware-support", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::media-content-types-requiring-hardware-support", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::media-content-types-requiring-hardware-support", ...args: any[]): void
    connect(sigName: "notify::media-playback-allows-inline", callback: (...args: any[]) => void): number
    on(sigName: "notify::media-playback-allows-inline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::media-playback-allows-inline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::media-playback-allows-inline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::media-playback-allows-inline", ...args: any[]): void
    connect(sigName: "notify::media-playback-requires-user-gesture", callback: (...args: any[]) => void): number
    on(sigName: "notify::media-playback-requires-user-gesture", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::media-playback-requires-user-gesture", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::media-playback-requires-user-gesture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::media-playback-requires-user-gesture", ...args: any[]): void
    connect(sigName: "notify::minimum-font-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::minimum-font-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minimum-font-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minimum-font-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minimum-font-size", ...args: any[]): void
    connect(sigName: "notify::monospace-font-family", callback: (...args: any[]) => void): number
    on(sigName: "notify::monospace-font-family", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::monospace-font-family", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::monospace-font-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::monospace-font-family", ...args: any[]): void
    connect(sigName: "notify::pictograph-font-family", callback: (...args: any[]) => void): number
    on(sigName: "notify::pictograph-font-family", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pictograph-font-family", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pictograph-font-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pictograph-font-family", ...args: any[]): void
    connect(sigName: "notify::print-backgrounds", callback: (...args: any[]) => void): number
    on(sigName: "notify::print-backgrounds", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::print-backgrounds", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::print-backgrounds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::print-backgrounds", ...args: any[]): void
    connect(sigName: "notify::sans-serif-font-family", callback: (...args: any[]) => void): number
    on(sigName: "notify::sans-serif-font-family", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sans-serif-font-family", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sans-serif-font-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sans-serif-font-family", ...args: any[]): void
    connect(sigName: "notify::serif-font-family", callback: (...args: any[]) => void): number
    on(sigName: "notify::serif-font-family", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::serif-font-family", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::serif-font-family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::serif-font-family", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: "notify::zoom-text-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::zoom-text-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::zoom-text-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::zoom-text-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::zoom-text-only", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class Settings extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.Settings

    static name: string

    // Constructors of WebKit-6.0.WebKit.Settings

    constructor(config?: Settings.ConstructorProperties) 
    /**
     * Creates a new #WebKitSettings instance with default values.
     * 
     * It must be manually attached to a #WebKitWebView.
     * See also webkit_settings_new_with_settings().
     * @constructor 
     * @returns a new #WebKitSettings instance.
     */
    constructor() 
    /**
     * Creates a new #WebKitSettings instance with default values.
     * 
     * It must be manually attached to a #WebKitWebView.
     * See also webkit_settings_new_with_settings().
     * @constructor 
     * @returns a new #WebKitSettings instance.
     */
    static new(): Settings
    _init(config?: Settings.ConstructorProperties): void
    /**
     * Convert `points` to the equivalent value in pixels.
     * 
     * Convert `points` to the equivalent value in pixels, based on the current
     * screen DPI. Applications can use this function to convert font size values
     * in points to font size values in pixels when setting the font size properties
     * of #WebKitSettings.
     * @param points the font size in points to convert to pixels
     * @returns the equivalent font size in pixels.
     */
    static fontSizeToPixels(points: number): number
    /**
     * Convert `pixels` to the equivalent value in points.
     * 
     * Convert `pixels` to the equivalent value in points, based on the current
     * screen DPI. Applications can use this function to convert font size values
     * in pixels to font size values in points when getting the font size properties
     * of #WebKitSettings.
     * @param pixels the font size in pixels to convert to points
     * @returns the equivalent font size in points.
     */
    static fontSizeToPoints(pixels: number): number
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
     * @returns List of all features.
     */
    static getAllFeatures(): FeatureList
    /**
     * Gets the list of available development WebKit features.
     * 
     * The returned features are a subset of those returned by
     * [func`Settings`.get_all_features], and includes those which
     * web and WebKit developers might find useful, but in general should
     * *not* be exposed to end users; see [enum`FeatureStatus]` for
     * more details.
     * @returns List of development features.
     */
    static getDevelopmentFeatures(): FeatureList
    /**
     * Gets the list of available experimental WebKit features.
     * 
     * The returned features are a subset of those returned by
     * [func`Settings`.get_all_features], and includes those which
     * certain applications may want to expose to end users; see
     * [enum`FeatureStatus]` for more details.
     * @returns List of experimental features.
     */
    static getExperimentalFeatures(): FeatureList
}

module URIRequest {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of WebKit-6.0.WebKit.URIRequest

        /**
         * The URI to which the request will be made.
         */
        uri?: string | null
    }

}

interface URIRequest {

    // Own properties of WebKit-6.0.WebKit.URIRequest

    /**
     * The URI to which the request will be made.
     */
    uri: string | null
    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.URIRequest

    /**
     * Get the HTTP headers of a #WebKitURIRequest as a #SoupMessageHeaders.
     * @returns a #SoupMessageHeaders with the HTTP headers of @request    or %NULL if @request is not an HTTP request.
     */
    getHttpHeaders(): Soup.MessageHeaders
    /**
     * Get the HTTP method of the #WebKitURIRequest.
     * @returns the HTTP method of the #WebKitURIRequest or %NULL if @request is not    an HTTP request.
     */
    getHttpMethod(): string
    /**
     * Obtains the request URI.
     * @returns request URI, as a string.
     */
    getUri(): string
    /**
     * Set the URI of `request`
     * @param uri an URI
     */
    setUri(uri: string): void

    // Class property signals of WebKit-6.0.WebKit.URIRequest

    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents a URI request.
 * 
 * A #WebKitURIRequest can be created with a URI using the
 * webkit_uri_request_new() method, and you can get the URI of an
 * existing request with the webkit_uri_request_get_uri() one.
 * @class 
 */
class URIRequest extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.URIRequest

    static name: string

    // Constructors of WebKit-6.0.WebKit.URIRequest

    constructor(config?: URIRequest.ConstructorProperties) 
    /**
     * Creates a new #WebKitURIRequest for the given URI.
     * @constructor 
     * @param uri an URI
     * @returns a new #WebKitURIRequest
     */
    constructor(uri: string) 
    /**
     * Creates a new #WebKitURIRequest for the given URI.
     * @constructor 
     * @param uri an URI
     * @returns a new #WebKitURIRequest
     */
    static new(uri: string): URIRequest
    _init(config?: URIRequest.ConstructorProperties): void
}

module URIResponse {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface URIResponse {

    // Own properties of WebKit-6.0.WebKit.URIResponse

    /**
     * The expected content length of the response.
     */
    readonly contentLength: number
    /**
     * The HTTP headers of the response, or %NULL if the response is not an HTTP response.
     */
    readonly httpHeaders: Soup.MessageHeaders
    /**
     * The MIME type of the response.
     */
    readonly mimeType: string | null
    /**
     * The status code of the response as returned by the server.
     */
    readonly statusCode: number
    /**
     * The suggested filename for the URI response.
     */
    readonly suggestedFilename: string | null
    /**
     * The URI for which the response was made.
     */
    readonly uri: string | null
    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.URIResponse

    /**
     * Get the expected content length of the #WebKitURIResponse.
     * 
     * It can be 0 if the server provided an incorrect or missing Content-Length.
     * @returns the expected content length of @response.
     */
    getContentLength(): number
    /**
     * Get the HTTP headers of a #WebKitURIResponse as a #SoupMessageHeaders.
     * @returns a #SoupMessageHeaders with the HTTP headers of @response    or %NULL if @response is not an HTTP response.
     */
    getHttpHeaders(): Soup.MessageHeaders
    /**
     * Gets the MIME type of the response.
     * @returns MIME type, as a string.
     */
    getMimeType(): string
    /**
     * Get the status code of the #WebKitURIResponse.
     * 
     * Get the status code of the #WebKitURIResponse as returned by
     * the server. It will normally be a #SoupKnownStatusCode, for
     * example %SOUP_STATUS_OK, though the server can respond with any
     * unsigned integer.
     * @returns the status code of @response
     */
    getStatusCode(): number
    /**
     * Get the suggested filename for `response`.
     * 
     * Get the suggested filename for `response,` as specified by
     * the 'Content-Disposition' HTTP header, or %NULL if it's not
     * present.
     * @returns the suggested filename or %NULL if    the 'Content-Disposition' HTTP header is not present.
     */
    getSuggestedFilename(): string
    /**
     * Gets the URI which resulted in the response.
     * @returns response URI, as a string.
     */
    getUri(): string

    // Class property signals of WebKit-6.0.WebKit.URIResponse

    connect(sigName: "notify::content-length", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-length", ...args: any[]): void
    connect(sigName: "notify::http-headers", callback: (...args: any[]) => void): number
    on(sigName: "notify::http-headers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::http-headers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::http-headers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::http-headers", ...args: any[]): void
    connect(sigName: "notify::mime-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mime-type", ...args: any[]): void
    connect(sigName: "notify::status-code", callback: (...args: any[]) => void): number
    on(sigName: "notify::status-code", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::status-code", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::status-code", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::status-code", ...args: any[]): void
    connect(sigName: "notify::suggested-filename", callback: (...args: any[]) => void): number
    on(sigName: "notify::suggested-filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::suggested-filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::suggested-filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::suggested-filename", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents an URI response.
 * 
 * A #WebKitURIResponse contains information such as the URI, the
 * status code, the content length, the mime type, the HTTP status or
 * the suggested filename.
 * @class 
 */
class URIResponse extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.URIResponse

    static name: string

    // Constructors of WebKit-6.0.WebKit.URIResponse

    constructor(config?: URIResponse.ConstructorProperties) 
    _init(config?: URIResponse.ConstructorProperties): void
}

module URISchemeRequest {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface URISchemeRequest {

    // Own properties of WebKit-6.0.WebKit.URISchemeRequest

    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.URISchemeRequest

    /**
     * Finish a #WebKitURISchemeRequest by setting the contents of the request and its mime type.
     * @param stream a #GInputStream to read the contents of the request
     * @param streamLength the length of the stream or -1 if not known
     * @param contentType the content type of the stream or %NULL if not known
     */
    finish(stream: Gio.InputStream, streamLength: number, contentType: string | null): void
    /**
     * Finish a #WebKitURISchemeRequest with a #GError.
     * @param error a #GError that will be passed to the #WebKitWebView
     */
    finishError(error: GLib.Error): void
    /**
     * Finish a #WebKitURISchemeRequest by returning a #WebKitURISchemeResponse
     * @param response a #WebKitURISchemeResponse
     */
    finishWithResponse(response: URISchemeResponse): void
    /**
     * Get the request body.
     * @returns (nullable): the body of the @request.
     */
    getHttpBody(): Gio.InputStream
    /**
     * Get the #SoupMessageHeaders of the request.
     * @returns the #SoupMessageHeaders of the @request.
     */
    getHttpHeaders(): Soup.MessageHeaders
    /**
     * Get the HTTP method of the `request`.
     * @returns the HTTP method of the @request
     */
    getHttpMethod(): string
    /**
     * Get the URI path of `request`.
     * @returns the URI path of @request
     */
    getPath(): string
    /**
     * Get the URI scheme of `request`.
     * @returns the URI scheme of @request
     */
    getScheme(): string
    /**
     * Get the URI of `request`.
     * @returns the full URI of @request
     */
    getUri(): string
    /**
     * Get the #WebKitWebView that initiated the request.
     * @returns the #WebKitWebView that initiated @request.
     */
    getWebView(): WebView

    // Class property signals of WebKit-6.0.WebKit.URISchemeRequest

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class URISchemeRequest extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.URISchemeRequest

    static name: string

    // Constructors of WebKit-6.0.WebKit.URISchemeRequest

    constructor(config?: URISchemeRequest.ConstructorProperties) 
    _init(config?: URISchemeRequest.ConstructorProperties): void
}

module URISchemeResponse {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of WebKit-6.0.WebKit.URISchemeResponse

        /**
         * The input stream to read from.
         */
        stream?: Gio.InputStream | null
        /**
         * The input stream length in bytes, `-1` for unknown length.
         */
        stream_length?: number | null
    }

}

interface URISchemeResponse {

    // Own properties of WebKit-6.0.WebKit.URISchemeResponse

    /**
     * The input stream to read from.
     */
    readonly stream: Gio.InputStream
    /**
     * The input stream length in bytes, `-1` for unknown length.
     */
    readonly streamLength: number
    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.URISchemeResponse

    /**
     * Sets the content type for the `response`
     * @param contentType the content type of the stream
     */
    setContentType(contentType: string): void
    /**
     * Assign the provided #SoupMessageHeaders to the response.
     * 
     * `headers` need to be of the type %SOUP_MESSAGE_HEADERS_RESPONSE.
     * Any existing headers will be overwritten.
     * @param headers the HTTP headers to be set
     */
    setHttpHeaders(headers: Soup.MessageHeaders): void
    /**
     * Sets the status code and reason phrase for the `response`.
     * 
     * If `status_code` is a known value and `reason_phrase` is %NULL, the `reason_phrase` will be set automatically.
     * @param statusCode the HTTP status code to be returned
     * @param reasonPhrase a reason phrase
     */
    setStatus(statusCode: number, reasonPhrase: string | null): void

    // Class property signals of WebKit-6.0.WebKit.URISchemeResponse

    connect(sigName: "notify::stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stream", ...args: any[]): void
    connect(sigName: "notify::stream-length", callback: (...args: any[]) => void): number
    on(sigName: "notify::stream-length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stream-length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stream-length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stream-length", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class URISchemeResponse extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.URISchemeResponse

    static name: string

    // Constructors of WebKit-6.0.WebKit.URISchemeResponse

    constructor(config?: URISchemeResponse.ConstructorProperties) 
    /**
     * Create a new #WebKitURISchemeResponse
     * @constructor 
     * @param inputStream a #GInputStream to read the contents of the request
     * @param streamLength the length of the stream or -1 if not known
     * @returns the newly created #WebKitURISchemeResponse.
     */
    constructor(inputStream: Gio.InputStream, streamLength: number) 
    /**
     * Create a new #WebKitURISchemeResponse
     * @constructor 
     * @param inputStream a #GInputStream to read the contents of the request
     * @param streamLength the length of the stream or -1 if not known
     * @returns the newly created #WebKitURISchemeResponse.
     */
    static new(inputStream: Gio.InputStream, streamLength: number): URISchemeResponse
    _init(config?: URISchemeResponse.ConstructorProperties): void
}

module UserContentFilterStore {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of WebKit-6.0.WebKit.UserContentFilterStore

        /**
         * The directory used for filter storage. This path is used as the base
         * directory where user content filters are stored on disk.
         */
        path?: string | null
    }

}

interface UserContentFilterStore {

    // Own properties of WebKit-6.0.WebKit.UserContentFilterStore

    /**
     * The directory used for filter storage. This path is used as the base
     * directory where user content filters are stored on disk.
     */
    readonly path: string | null
    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.UserContentFilterStore

    /**
     * Asynchronously retrieve a list of the identifiers for all the stored filters.
     * 
     * When the operation is finished, `callback` will be invoked, which then can use
     * webkit_user_content_filter_store_fetch_identifiers_finish() to obtain the list of
     * filter identifiers.
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the removal is completed
     */
    fetchIdentifiers(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous fetch of the list of stored filters.
     * 
     * Finishes an asynchronous fetch of the list of identifiers for the stored filters previously
     * started with webkit_user_content_filter_store_fetch_identifiers().
     * @param result a #GAsyncResult
     * @returns a %NULL-terminated list of filter identifiers.
     */
    fetchIdentifiersFinish(result: Gio.AsyncResult): string[]
    /**
     * Gets the storage path for user content filters.
     * @returns path, as a string.
     */
    getPath(): string
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
    load(identifier: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous filter load previously started with
     * webkit_user_content_filter_store_load().
     * @param result a #GAsyncResult
     * @returns a #WebKitUserContentFilter, or %NULL if the load failed
     */
    loadFinish(result: Gio.AsyncResult): UserContentFilter
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
    remove(identifier: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous filter removal previously started with
     * webkit_user_content_filter_store_remove().
     * @param result a #GAsyncResult
     * @returns whether the removal was successful
     */
    removeFinish(result: Gio.AsyncResult): boolean
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
    save(identifier: string, source: any, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous filter save previously started with
     * webkit_user_content_filter_store_save().
     * @param result a #GAsyncResult
     * @returns a #WebKitUserContentFilter, or %NULL if saving failed
     */
    saveFinish(result: Gio.AsyncResult): UserContentFilter
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
    saveFromFile(identifier: string, file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes and asynchronous filter save previously started with
     * webkit_user_content_filter_store_save_from_file().
     * @param result a #GAsyncResult
     * @returns a #WebKitUserContentFilter, or %NULL if saving failed.
     */
    saveFromFileFinish(result: Gio.AsyncResult): UserContentFilter

    // Class property signals of WebKit-6.0.WebKit.UserContentFilterStore

    connect(sigName: "notify::path", callback: (...args: any[]) => void): number
    on(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class UserContentFilterStore extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.UserContentFilterStore

    static name: string

    // Constructors of WebKit-6.0.WebKit.UserContentFilterStore

    constructor(config?: UserContentFilterStore.ConstructorProperties) 
    /**
     * Create a new #WebKitUserContentFilterStore to manipulate filters stored at `storage_path`.
     * 
     * The path must point to a local filesystem, and will be created if needed.
     * @constructor 
     * @param storagePath path where data for filters will be stored on disk
     * @returns a newly created #WebKitUserContentFilterStore
     */
    constructor(storagePath: string) 
    /**
     * Create a new #WebKitUserContentFilterStore to manipulate filters stored at `storage_path`.
     * 
     * The path must point to a local filesystem, and will be created if needed.
     * @constructor 
     * @param storagePath path where data for filters will be stored on disk
     * @returns a newly created #WebKitUserContentFilterStore
     */
    static new(storagePath: string): UserContentFilterStore
    _init(config?: UserContentFilterStore.ConstructorProperties): void
}

module UserContentManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `script-message-received`
     */
    interface ScriptMessageReceivedSignalCallback {
        (value: JavaScriptCore.Value): void
    }

    /**
     * Signal callback interface for `script-message-with-reply-received`
     */
    interface ScriptMessageWithReplyReceivedSignalCallback {
        (value: JavaScriptCore.Value, reply: ScriptMessageReply): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface UserContentManager {

    // Own properties of WebKit-6.0.WebKit.UserContentManager

    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.UserContentManager

    /**
     * Adds a #WebKitUserContentFilter to the given #WebKitUserContentManager.
     * 
     * The same #WebKitUserContentFilter can be reused with multiple
     * #WebKitUserContentManager instances.
     * 
     * Filters need to be saved and loaded from #WebKitUserContentFilterStore.
     * @param filter A #WebKitUserContentFilter
     */
    addFilter(filter: UserContentFilter): void
    /**
     * Adds a #WebKitUserScript to the given #WebKitUserContentManager.
     * 
     * The same #WebKitUserScript can be reused with multiple
     * #WebKitUserContentManager instances.
     * @param script A #WebKitUserScript
     */
    addScript(script: UserScript): void
    /**
     * Adds a #WebKitUserStyleSheet to the given #WebKitUserContentManager.
     * 
     * The same #WebKitUserStyleSheet can be reused with multiple
     * #WebKitUserContentManager instances.
     * @param stylesheet A #WebKitUserStyleSheet
     */
    addStyleSheet(stylesheet: UserStyleSheet): void
    /**
     * Registers a new user script message handler in script world.
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
     * 
     * If %NULL is passed as the `world_name,` the default world will be used.
     * 
     * The registered handler can be unregistered by using
     * webkit_user_content_manager_unregister_script_message_handler().
     * @param name Name of the script message channel
     * @param worldName the name of a #WebKitScriptWorld
     * @returns %TRUE if message handler was registered successfully, or %FALSE otherwise.
     */
    registerScriptMessageHandler(name: string, worldName: string | null): boolean
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
     * @param name Name of the script message channel `world_name` (nullable): the name of a #WebKitScriptWorld
     * @param worldName 
     * @returns %TRUE if message handler was registered successfully, or %FALSE otherwise.
     */
    registerScriptMessageHandlerWithReply(name: string, worldName: string): boolean
    /**
     * Removes all content filters from the given #WebKitUserContentManager.
     */
    removeAllFilters(): void
    /**
     * Removes all user scripts from the given #WebKitUserContentManager
     * 
     * See also webkit_user_content_manager_remove_script().
     */
    removeAllScripts(): void
    /**
     * Removes all user style sheets from the given #WebKitUserContentManager.
     */
    removeAllStyleSheets(): void
    /**
     * Removes a filter from the given #WebKitUserContentManager.
     * 
     * Since 2.24
     * @param filter A #WebKitUserContentFilter
     */
    removeFilter(filter: UserContentFilter): void
    /**
     * Removes a filter by the given identifier.
     * 
     * Removes a filter from the given #WebKitUserContentManager given the
     * identifier of a #WebKitUserContentFilter as returned by
     * webkit_user_content_filter_get_identifier().
     * @param filterId Filter identifier
     */
    removeFilterById(filterId: string): void
    /**
     * Removes a #WebKitUserScript from the given #WebKitUserContentManager.
     * 
     * See also webkit_user_content_manager_remove_all_scripts().
     * @param script A #WebKitUserScript
     */
    removeScript(script: UserScript): void
    /**
     * Removes a #WebKitUserStyleSheet from the given #WebKitUserContentManager.
     * 
     * See also webkit_user_content_manager_remove_all_style_sheets().
     * @param stylesheet A #WebKitUserStyleSheet
     */
    removeStyleSheet(stylesheet: UserStyleSheet): void
    /**
     * Unregisters a previously registered message handler in script world with name `world_name`.
     * If %NULL is passed as the `world_name,` the default world will be used.
     * 
     * Note that this does *not* disconnect handlers for the
     * #WebKitUserContentManager::script-message-received signal;
     * they will be kept connected, but the signal will not be emitted
     * unless the handler name is registered again.
     * 
     * See also webkit_user_content_manager_register_script_message_handler().
     * @param name Name of the script message channel
     * @param worldName the name of a #WebKitScriptWorld
     */
    unregisterScriptMessageHandler(name: string, worldName: string | null): void

    // Own signals of WebKit-6.0.WebKit.UserContentManager

    connect(sigName: "script-message-received", callback: UserContentManager.ScriptMessageReceivedSignalCallback): number
    on(sigName: "script-message-received", callback: UserContentManager.ScriptMessageReceivedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "script-message-received", callback: UserContentManager.ScriptMessageReceivedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "script-message-received", callback: UserContentManager.ScriptMessageReceivedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "script-message-received", ...args: any[]): void
    connect(sigName: "script-message-with-reply-received", callback: UserContentManager.ScriptMessageWithReplyReceivedSignalCallback): number
    on(sigName: "script-message-with-reply-received", callback: UserContentManager.ScriptMessageWithReplyReceivedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "script-message-with-reply-received", callback: UserContentManager.ScriptMessageWithReplyReceivedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "script-message-with-reply-received", callback: UserContentManager.ScriptMessageWithReplyReceivedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "script-message-with-reply-received", reply: ScriptMessageReply, ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.UserContentManager

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class UserContentManager extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.UserContentManager

    static name: string

    // Constructors of WebKit-6.0.WebKit.UserContentManager

    constructor(config?: UserContentManager.ConstructorProperties) 
    /**
     * Creates a new user content manager.
     * @constructor 
     * @returns A #WebKitUserContentManager
     */
    constructor() 
    /**
     * Creates a new user content manager.
     * @constructor 
     * @returns A #WebKitUserContentManager
     */
    static new(): UserContentManager
    _init(config?: UserContentManager.ConstructorProperties): void
}

module UserMediaPermissionRequest {

    // Constructor properties interface

    interface ConstructorProperties extends PermissionRequest.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface UserMediaPermissionRequest extends PermissionRequest {

    // Own properties of WebKit-6.0.WebKit.UserMediaPermissionRequest

    /**
     * Whether the media device to which the permission was requested has a microphone or not.
     */
    readonly isForAudioDevice: boolean
    /**
     * Whether the media device to which the permission was requested has a video capture capability or not.
     */
    readonly isForVideoDevice: boolean
    __gtype__: number

    // Class property signals of WebKit-6.0.WebKit.UserMediaPermissionRequest

    connect(sigName: "notify::is-for-audio-device", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-for-audio-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-for-audio-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-for-audio-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-for-audio-device", ...args: any[]): void
    connect(sigName: "notify::is-for-video-device", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-for-video-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-for-video-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-for-video-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-for-video-device", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class UserMediaPermissionRequest extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.UserMediaPermissionRequest

    static name: string

    // Constructors of WebKit-6.0.WebKit.UserMediaPermissionRequest

    constructor(config?: UserMediaPermissionRequest.ConstructorProperties) 
    _init(config?: UserMediaPermissionRequest.ConstructorProperties): void
}

module UserMessage {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {

        // Own constructor properties of WebKit-6.0.WebKit.UserMessage

        /**
         * The UNIX file descriptors of the user message.
         */
        fd_list?: Gio.UnixFDList | null
        /**
         * The name of the user message.
         */
        name?: string | null
        /**
         * The parameters of the user message as a #GVariant, or %NULL
         * if the message doesn't include parameters. Note that only complete types are
         * allowed.
         */
        parameters?: GLib.Variant | null
    }

}

interface UserMessage {

    // Own properties of WebKit-6.0.WebKit.UserMessage

    /**
     * The UNIX file descriptors of the user message.
     */
    readonly fdList: Gio.UnixFDList
    /**
     * The name of the user message.
     */
    readonly name: string | null
    /**
     * The parameters of the user message as a #GVariant, or %NULL
     * if the message doesn't include parameters. Note that only complete types are
     * allowed.
     */
    readonly parameters: GLib.Variant
    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.UserMessage

    /**
     * Get the `message` list of file descritpor.
     * @returns the message list of file descriptors
     */
    getFdList(): Gio.UnixFDList | null
    /**
     * Get the `message` name.
     * @returns the message name
     */
    getName(): string
    /**
     * Get the `message` parameters.
     * @returns the message parameters
     */
    getParameters(): GLib.Variant | null
    /**
     * Send a reply to an user message.
     * 
     * If `reply` is floating, it's consumed.
     * You can only send a reply to a #WebKitUserMessage that has been
     * received.
     * @param reply a #WebKitUserMessage to send as reply
     */
    sendReply(reply: UserMessage): void

    // Class property signals of WebKit-6.0.WebKit.UserMessage

    connect(sigName: "notify::fd-list", callback: (...args: any[]) => void): number
    on(sigName: "notify::fd-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fd-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fd-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fd-list", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (...args: any[]) => void): number
    on(sigName: "notify::parameters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parameters", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parameters", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class UserMessage extends GObject.InitiallyUnowned {

    // Own properties of WebKit-6.0.WebKit.UserMessage

    static name: string

    // Constructors of WebKit-6.0.WebKit.UserMessage

    constructor(config?: UserMessage.ConstructorProperties) 
    /**
     * Create a new #WebKitUserMessage with `name`.
     * @constructor 
     * @param name the message name
     * @param parameters the message parameters as a #GVariant, or %NULL
     * @returns the newly created #WebKitUserMessage object.
     */
    constructor(name: string, parameters: GLib.Variant | null) 
    /**
     * Create a new #WebKitUserMessage with `name`.
     * @constructor 
     * @param name the message name
     * @param parameters the message parameters as a #GVariant, or %NULL
     * @returns the newly created #WebKitUserMessage object.
     */
    static new(name: string, parameters: GLib.Variant | null): UserMessage
    /**
     * Create a new #WebKitUserMessage including also a list of UNIX file descriptors to be sent.
     * @constructor 
     * @param name the message name
     * @param parameters the message parameters as a #GVariant
     * @param fdList the message file descriptors
     * @returns the newly created #WebKitUserMessage object.
     */
    static newWithFdList(name: string, parameters: GLib.Variant | null, fdList: Gio.UnixFDList | null): UserMessage
    _init(config?: UserMessage.ConstructorProperties): void
}

module WebContext {

    // Signal callback interfaces

    /**
     * Signal callback interface for `automation-started`
     */
    interface AutomationStartedSignalCallback {
        (session: AutomationSession): void
    }

    /**
     * Signal callback interface for `initialize-notification-permissions`
     */
    interface InitializeNotificationPermissionsSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `initialize-web-process-extensions`
     */
    interface InitializeWebProcessExtensionsSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `user-message-received`
     */
    interface UserMessageReceivedSignalCallback {
        (message: UserMessage): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of WebKit-6.0.WebKit.WebContext

        /**
         * The #WebKitMemoryPressureSettings applied to the web processes created by this context.
         */
        memory_pressure_settings?: MemoryPressureSettings | null
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
        time_zone_override?: string | null
    }

}

interface WebContext {

    // Own properties of WebKit-6.0.WebKit.WebContext

    /**
     * The #WebKitMemoryPressureSettings applied to the web processes created by this context.
     */
    readonly memoryPressureSettings: MemoryPressureSettings
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
    readonly timeZoneOverride: string | null
    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.WebContext

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
     * @param readOnly if %TRUE the path will be read-only
     */
    addPathToSandbox(path: string, readOnly: boolean): void
    /**
     * Returns the current cache model.
     * 
     * For more information about this
     * value check the documentation of the function
     * webkit_web_context_set_cache_model().
     * @returns the current #WebKitCacheModel
     */
    getCacheModel(): CacheModel
    /**
     * Get the #WebKitGeolocationManager of `context`.
     * @returns the #WebKitGeolocationManager of @context.
     */
    getGeolocationManager(): GeolocationManager
    /**
     * Get the #WebKitNetworkSession used for automation sessions started in `context`.
     * @returns a #WebKitNetworkSession, or %NULL if automation is not enabled
     */
    getNetworkSessionForAutomation(): NetworkSession | null
    /**
     * Get the #WebKitSecurityManager of `context`.
     * @returns the #WebKitSecurityManager of @context.
     */
    getSecurityManager(): SecurityManager
    /**
     * Get whether spell checking feature is currently enabled.
     * @returns %TRUE If spell checking is enabled, or %FALSE otherwise.
     */
    getSpellCheckingEnabled(): boolean
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
    getSpellCheckingLanguages(): string[]
    /**
     * Get the #WebKitWebContext:time-zone-override property.
     */
    getTimeZoneOverride(): string
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
     * @param allowedOrigins a #GList of security origins
     * @param disallowedOrigins a #GList of security origins
     */
    initializeNotificationPermissions(allowedOrigins: SecurityOrigin[], disallowedOrigins: SecurityOrigin[]): void
    /**
     * Get whether automation is allowed in `context`.
     * 
     * See also webkit_web_context_set_automation_allowed().
     * @returns %TRUE if automation is allowed or %FALSE otherwise.
     */
    isAutomationAllowed(): boolean
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
    registerUriScheme(scheme: string, callback: URISchemeRequestCallback): void
    /**
     * Send `message` to all web process extensions associated to `context`.
     * 
     * If `message` is floating, it's consumed.
     * @param message a #WebKitUserMessage
     */
    sendMessageToAllExtensions(message: UserMessage): void
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
    setAutomationAllowed(allowed: boolean): void
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
     * @param cacheModel a #WebKitCacheModel
     */
    setCacheModel(cacheModel: CacheModel): void
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
    setPreferredLanguages(languages: string[] | null): void
    /**
     * Enable or disable the spell checking feature.
     * @param enabled Value to be set
     */
    setSpellCheckingEnabled(enabled: boolean): void
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
    setSpellCheckingLanguages(languages: string[]): void
    /**
     * Set the directory where WebKit will look for web process extensions.
     * 
     * This method must be called before loading anything in this context,
     * otherwise it will not have any effect. You can connect to
     * #WebKitWebContext::initialize-web-process-extensions to call this method
     * before anything is loaded.
     * @param directory the directory to add
     */
    setWebProcessExtensionsDirectory(directory: string): void
    /**
     * Set user data to be passed to Web Extensions on initialization.
     * 
     * The data will be passed to the
     * #WebKitWebProcessExtensionInitializeWithUserDataFunction.
     * This method must be called before loading anything in this context,
     * otherwise it will not have any effect. You can connect to
     * #WebKitWebContext::initialize-web-process-extensions to call this method
     * before anything is loaded.
     * @param userData a #GVariant
     */
    setWebProcessExtensionsInitializationUserData(userData: GLib.Variant): void

    // Own signals of WebKit-6.0.WebKit.WebContext

    connect(sigName: "automation-started", callback: WebContext.AutomationStartedSignalCallback): number
    on(sigName: "automation-started", callback: WebContext.AutomationStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "automation-started", callback: WebContext.AutomationStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "automation-started", callback: WebContext.AutomationStartedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "automation-started", ...args: any[]): void
    connect(sigName: "initialize-notification-permissions", callback: WebContext.InitializeNotificationPermissionsSignalCallback): number
    on(sigName: "initialize-notification-permissions", callback: WebContext.InitializeNotificationPermissionsSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "initialize-notification-permissions", callback: WebContext.InitializeNotificationPermissionsSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "initialize-notification-permissions", callback: WebContext.InitializeNotificationPermissionsSignalCallback): NodeJS.EventEmitter
    emit(sigName: "initialize-notification-permissions", ...args: any[]): void
    connect(sigName: "initialize-web-process-extensions", callback: WebContext.InitializeWebProcessExtensionsSignalCallback): number
    on(sigName: "initialize-web-process-extensions", callback: WebContext.InitializeWebProcessExtensionsSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "initialize-web-process-extensions", callback: WebContext.InitializeWebProcessExtensionsSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "initialize-web-process-extensions", callback: WebContext.InitializeWebProcessExtensionsSignalCallback): NodeJS.EventEmitter
    emit(sigName: "initialize-web-process-extensions", ...args: any[]): void
    connect(sigName: "user-message-received", callback: WebContext.UserMessageReceivedSignalCallback): number
    on(sigName: "user-message-received", callback: WebContext.UserMessageReceivedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-message-received", callback: WebContext.UserMessageReceivedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-message-received", callback: WebContext.UserMessageReceivedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "user-message-received", ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.WebContext

    connect(sigName: "notify::memory-pressure-settings", callback: (...args: any[]) => void): number
    on(sigName: "notify::memory-pressure-settings", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::memory-pressure-settings", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::memory-pressure-settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::memory-pressure-settings", ...args: any[]): void
    connect(sigName: "notify::time-zone-override", callback: (...args: any[]) => void): number
    on(sigName: "notify::time-zone-override", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::time-zone-override", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::time-zone-override", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::time-zone-override", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class WebContext extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.WebContext

    static name: string

    // Constructors of WebKit-6.0.WebKit.WebContext

    constructor(config?: WebContext.ConstructorProperties) 
    /**
     * Create a new #WebKitWebContext.
     * @constructor 
     * @returns a newly created #WebKitWebContext
     */
    constructor() 
    /**
     * Create a new #WebKitWebContext.
     * @constructor 
     * @returns a newly created #WebKitWebContext
     */
    static new(): WebContext
    _init(config?: WebContext.ConstructorProperties): void
    /**
     * Gets the default web context.
     * @returns a #WebKitWebContext
     */
    static getDefault(): WebContext
}

module WebInspector {

    // Signal callback interfaces

    /**
     * Signal callback interface for `attach`
     */
    interface AttachSignalCallback {
        (): boolean
    }

    /**
     * Signal callback interface for `bring-to-front`
     */
    interface BringToFrontSignalCallback {
        (): boolean
    }

    /**
     * Signal callback interface for `closed`
     */
    interface ClosedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `detach`
     */
    interface DetachSignalCallback {
        (): boolean
    }

    /**
     * Signal callback interface for `open-window`
     */
    interface OpenWindowSignalCallback {
        (): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface WebInspector {

    // Own properties of WebKit-6.0.WebKit.WebInspector

    /**
     * The height that the inspector view should have when it is attached.
     */
    readonly attachedHeight: number
    /**
     * Whether the `inspector` can be attached to the same window that contains
     * the inspected view.
     */
    readonly canAttach: boolean
    /**
     * The URI that is currently being inspected.
     */
    readonly inspectedUri: string | null
    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.WebInspector

    /**
     * Request `inspector` to be attached.
     * 
     * The signal #WebKitWebInspector::attach
     * will be emitted. If the inspector is already attached it does nothing.
     */
    attach(): void
    /**
     * Request `inspector` to be closed.
     */
    close(): void
    /**
     * Request `inspector` to be detached.
     * 
     * The signal #WebKitWebInspector::detach
     * will be emitted. If the inspector is already detached it does nothing.
     */
    detach(): void
    /**
     * Get the height that the inspector view when attached.
     * 
     * Get the height that the inspector view should have when
     * it's attached. If the inspector view is not attached this
     * returns 0.
     * @returns the height of the inspector view when attached
     */
    getAttachedHeight(): number
    /**
     * Whether the `inspector` can be attached to the same window that contains
     * the inspected view.
     * @returns %TRUE if there is enough room for the inspector view inside the     window that contains the inspected view, or %FALSE otherwise.
     */
    getCanAttach(): boolean
    /**
     * Get the URI that is currently being inspected.
     * 
     * This can be %NULL if
     * nothing has been loaded yet in the inspected view, if the inspector
     * has been closed or when inspected view was loaded from a HTML string
     * instead of a URI.
     * @returns the URI that is currently being inspected or %NULL
     */
    getInspectedUri(): string
    /**
     * Get the #WebKitWebViewBase used to display the inspector.
     * 
     * This might be %NULL if the inspector hasn't been loaded yet,
     * or it has been closed.
     * @returns the #WebKitWebViewBase used to display the inspector or %NULL
     */
    getWebView(): WebViewBase
    /**
     * Whether the `inspector` view is currently attached to the same window that contains
     * the inspected view.
     * @returns %TRUE if @inspector is currently attached or %FALSE otherwise
     */
    isAttached(): boolean
    /**
     * Request `inspector` to be shown.
     */
    show(): void

    // Own signals of WebKit-6.0.WebKit.WebInspector

    connect(sigName: "attach", callback: WebInspector.AttachSignalCallback): number
    on(sigName: "attach", callback: WebInspector.AttachSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "attach", callback: WebInspector.AttachSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "attach", callback: WebInspector.AttachSignalCallback): NodeJS.EventEmitter
    emit(sigName: "attach", ...args: any[]): void
    connect(sigName: "bring-to-front", callback: WebInspector.BringToFrontSignalCallback): number
    on(sigName: "bring-to-front", callback: WebInspector.BringToFrontSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bring-to-front", callback: WebInspector.BringToFrontSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bring-to-front", callback: WebInspector.BringToFrontSignalCallback): NodeJS.EventEmitter
    emit(sigName: "bring-to-front", ...args: any[]): void
    connect(sigName: "closed", callback: WebInspector.ClosedSignalCallback): number
    on(sigName: "closed", callback: WebInspector.ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: WebInspector.ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: WebInspector.ClosedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "closed", ...args: any[]): void
    connect(sigName: "detach", callback: WebInspector.DetachSignalCallback): number
    on(sigName: "detach", callback: WebInspector.DetachSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "detach", callback: WebInspector.DetachSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "detach", callback: WebInspector.DetachSignalCallback): NodeJS.EventEmitter
    emit(sigName: "detach", ...args: any[]): void
    connect(sigName: "open-window", callback: WebInspector.OpenWindowSignalCallback): number
    on(sigName: "open-window", callback: WebInspector.OpenWindowSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "open-window", callback: WebInspector.OpenWindowSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "open-window", callback: WebInspector.OpenWindowSignalCallback): NodeJS.EventEmitter
    emit(sigName: "open-window", ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.WebInspector

    connect(sigName: "notify::attached-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::attached-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::attached-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::attached-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::attached-height", ...args: any[]): void
    connect(sigName: "notify::can-attach", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-attach", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-attach", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-attach", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-attach", ...args: any[]): void
    connect(sigName: "notify::inspected-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::inspected-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::inspected-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::inspected-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::inspected-uri", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class WebInspector extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.WebInspector

    static name: string

    // Constructors of WebKit-6.0.WebKit.WebInspector

    constructor(config?: WebInspector.ConstructorProperties) 
    _init(config?: WebInspector.ConstructorProperties): void
}

module WebResource {

    // Signal callback interfaces

    /**
     * Signal callback interface for `failed`
     */
    interface FailedSignalCallback {
        (error: GLib.Error): void
    }

    /**
     * Signal callback interface for `failed-with-tls-errors`
     */
    interface FailedWithTlsErrorsSignalCallback {
        (certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): void
    }

    /**
     * Signal callback interface for `finished`
     */
    interface FinishedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `sent-request`
     */
    interface SentRequestSignalCallback {
        (request: URIRequest, redirectedResponse: URIResponse): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface WebResource {

    // Own properties of WebKit-6.0.WebKit.WebResource

    /**
     * The #WebKitURIResponse associated with this resource.
     */
    readonly response: URIResponse
    /**
     * The current active URI of the #WebKitWebResource.
     * See webkit_web_resource_get_uri() for more details.
     */
    readonly uri: string | null
    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.WebResource

    /**
     * Asynchronously get the raw data for `resource`.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * webkit_web_resource_get_data_finish() to get the result of the operation.
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    getData(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    getData(key: string): any | null
    /**
     * Finish an asynchronous operation started with webkit_web_resource_get_data().
     * @param result a #GAsyncResult
     * @returns a    string with the data of @resource, or %NULL in case of error. if @length    is not %NULL, the size of the data will be assigned to it.
     */
    getDataFinish(result: Gio.AsyncResult): number[]
    /**
     * Retrieves the #WebKitURIResponse of the resource load operation.
     * 
     * This method returns %NULL if called before the response
     * is received from the server. You can connect to notify::response
     * signal to be notified when the response is received.
     * @returns the #WebKitURIResponse, or %NULL if     the response hasn't been received yet.
     */
    getResponse(): URIResponse
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
    getUri(): string

    // Own signals of WebKit-6.0.WebKit.WebResource

    connect(sigName: "failed", callback: WebResource.FailedSignalCallback): number
    on(sigName: "failed", callback: WebResource.FailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "failed", callback: WebResource.FailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "failed", callback: WebResource.FailedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "failed", ...args: any[]): void
    connect(sigName: "failed-with-tls-errors", callback: WebResource.FailedWithTlsErrorsSignalCallback): number
    on(sigName: "failed-with-tls-errors", callback: WebResource.FailedWithTlsErrorsSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "failed-with-tls-errors", callback: WebResource.FailedWithTlsErrorsSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "failed-with-tls-errors", callback: WebResource.FailedWithTlsErrorsSignalCallback): NodeJS.EventEmitter
    emit(sigName: "failed-with-tls-errors", errors: Gio.TlsCertificateFlags, ...args: any[]): void
    connect(sigName: "finished", callback: WebResource.FinishedSignalCallback): number
    on(sigName: "finished", callback: WebResource.FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: WebResource.FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: WebResource.FinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "finished", ...args: any[]): void
    connect(sigName: "sent-request", callback: WebResource.SentRequestSignalCallback): number
    on(sigName: "sent-request", callback: WebResource.SentRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sent-request", callback: WebResource.SentRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sent-request", callback: WebResource.SentRequestSignalCallback): NodeJS.EventEmitter
    emit(sigName: "sent-request", redirectedResponse: URIResponse, ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.WebResource

    connect(sigName: "notify::response", callback: (...args: any[]) => void): number
    on(sigName: "notify::response", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::response", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::response", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::response", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class WebResource extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.WebResource

    static name: string

    // Constructors of WebKit-6.0.WebKit.WebResource

    constructor(config?: WebResource.ConstructorProperties) 
    _init(config?: WebResource.ConstructorProperties): void
}

module WebView {

    // Signal callback interfaces

    /**
     * Signal callback interface for `authenticate`
     */
    interface AuthenticateSignalCallback {
        (request: AuthenticationRequest): boolean
    }

    /**
     * Signal callback interface for `close`
     */
    interface CloseSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `context-menu`
     */
    interface ContextMenuSignalCallback {
        (contextMenu: ContextMenu, hitTestResult: HitTestResult): boolean
    }

    /**
     * Signal callback interface for `context-menu-dismissed`
     */
    interface ContextMenuDismissedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `create`
     */
    interface CreateSignalCallback {
        (navigationAction: NavigationAction): Gtk.Widget
    }

    /**
     * Signal callback interface for `decide-policy`
     */
    interface DecidePolicySignalCallback {
        (decision: PolicyDecision, decisionType: PolicyDecisionType): boolean
    }

    /**
     * Signal callback interface for `enter-fullscreen`
     */
    interface EnterFullscreenSignalCallback {
        (): boolean
    }

    /**
     * Signal callback interface for `insecure-content-detected`
     */
    interface InsecureContentDetectedSignalCallback {
        (event: InsecureContentEvent): void
    }

    /**
     * Signal callback interface for `leave-fullscreen`
     */
    interface LeaveFullscreenSignalCallback {
        (): boolean
    }

    /**
     * Signal callback interface for `load-changed`
     */
    interface LoadChangedSignalCallback {
        (loadEvent: LoadEvent): void
    }

    /**
     * Signal callback interface for `load-failed`
     */
    interface LoadFailedSignalCallback {
        (loadEvent: LoadEvent, failingUri: string | null, error: GLib.Error): boolean
    }

    /**
     * Signal callback interface for `load-failed-with-tls-errors`
     */
    interface LoadFailedWithTlsErrorsSignalCallback {
        (failingUri: string | null, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): boolean
    }

    /**
     * Signal callback interface for `mouse-target-changed`
     */
    interface MouseTargetChangedSignalCallback {
        (hitTestResult: HitTestResult, modifiers: number): void
    }

    /**
     * Signal callback interface for `permission-request`
     */
    interface PermissionRequestSignalCallback {
        (request: PermissionRequest): boolean
    }

    /**
     * Signal callback interface for `print`
     */
    interface PrintSignalCallback {
        (printOperation: PrintOperation): boolean
    }

    /**
     * Signal callback interface for `query-permission-state`
     */
    interface QueryPermissionStateSignalCallback {
        (query: PermissionStateQuery): boolean
    }

    /**
     * Signal callback interface for `ready-to-show`
     */
    interface ReadyToShowSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `resource-load-started`
     */
    interface ResourceLoadStartedSignalCallback {
        (resource: WebResource, request: URIRequest): void
    }

    /**
     * Signal callback interface for `run-as-modal`
     */
    interface RunAsModalSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `run-color-chooser`
     */
    interface RunColorChooserSignalCallback {
        (request: ColorChooserRequest): boolean
    }

    /**
     * Signal callback interface for `run-file-chooser`
     */
    interface RunFileChooserSignalCallback {
        (request: FileChooserRequest): boolean
    }

    /**
     * Signal callback interface for `script-dialog`
     */
    interface ScriptDialogSignalCallback {
        (dialog: ScriptDialog): boolean
    }

    /**
     * Signal callback interface for `show-notification`
     */
    interface ShowNotificationSignalCallback {
        (notification: Notification): boolean
    }

    /**
     * Signal callback interface for `show-option-menu`
     */
    interface ShowOptionMenuSignalCallback {
        (menu: OptionMenu, rectangle: Gdk.Rectangle): boolean
    }

    /**
     * Signal callback interface for `submit-form`
     */
    interface SubmitFormSignalCallback {
        (request: FormSubmissionRequest): void
    }

    /**
     * Signal callback interface for `user-message-received`
     */
    interface UserMessageReceivedSignalCallback {
        (message: UserMessage): boolean
    }

    /**
     * Signal callback interface for `web-process-terminated`
     */
    interface WebProcessTerminatedSignalCallback {
        (reason: WebProcessTerminationReason): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, WebViewBase.ConstructorProperties {

        // Own constructor properties of WebKit-6.0.WebKit.WebView

        /**
         * The #WebKitAutomationBrowsingContextPresentation of #WebKitWebView. This should only be used when
         * creating a new #WebKitWebView as a response to #WebKitAutomationSession::create-web-view
         * signal request. If the new WebView was added to a new tab of current browsing context window
         * %WEBKIT_AUTOMATION_BROWSING_CONTEXT_PRESENTATION_TAB should be used.
         */
        automation_presentation_type?: AutomationBrowsingContextPresentation | null
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
        camera_capture_state?: MediaCaptureState | null
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
        default_content_security_policy?: string | null
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
        display_capture_state?: MediaCaptureState | null
        /**
         * Whether the pages loaded inside #WebKitWebView are editable. For more
         * information see webkit_web_view_set_editable().
         */
        editable?: boolean | null
        /**
         * Whether the #WebKitWebView is controlled by automation. This should only be used when
         * creating a new #WebKitWebView as a response to #WebKitAutomationSession::create-web-view
         * signal request.
         */
        is_controlled_by_automation?: boolean | null
        /**
         * Whether the #WebKitWebView audio is muted. When %TRUE, audio is silenced.
         * It may still be playing, i.e. #WebKitWebView:is-playing-audio may be %TRUE.
         */
        is_muted?: boolean | null
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
        microphone_capture_state?: MediaCaptureState | null
        /**
         * The #WebKitNetworkSession of the view
         */
        network_session?: NetworkSession | null
        /**
         * The related #WebKitWebView used when creating the view to share the
         * same web process and network session. This property is not readable
         * because the related web view is only valid during the object construction.
         */
        related_view?: WebView | null
        /**
         * The #WebKitSettings of the view.
         */
        settings?: Settings | null
        /**
         * The #WebKitUserContentManager of the view.
         */
        user_content_manager?: UserContentManager | null
        /**
         * The #WebKitWebContext of the view.
         */
        web_context?: WebContext | null
        /**
         * This configures `web_view` to treat the content as a WebExtension.
         * 
         * Note that this refers to the web standard [WebExtensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
         * and not WebKitWebExtensions.
         * 
         * In practice this limits the Content-Security-Policies that are allowed to be set. Some details can be found in
         * [Chrome's documentation](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-migration/#content-security-policy).
         */
        web_extension_mode?: WebExtensionMode | null
        /**
         * The #WebKitWebsitePolicies for the view.
         */
        website_policies?: WebsitePolicies | null
        /**
         * The zoom level of the #WebKitWebView content.
         * See webkit_web_view_set_zoom_level() for more details.
         */
        zoom_level?: number | null
    }

}

interface WebView extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of WebKit-6.0.WebKit.WebView

    /**
     * The #WebKitAutomationBrowsingContextPresentation of #WebKitWebView. This should only be used when
     * creating a new #WebKitWebView as a response to #WebKitAutomationSession::create-web-view
     * signal request. If the new WebView was added to a new tab of current browsing context window
     * %WEBKIT_AUTOMATION_BROWSING_CONTEXT_PRESENTATION_TAB should be used.
     */
    readonly automationPresentationType: AutomationBrowsingContextPresentation
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
    cameraCaptureState: MediaCaptureState
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
    readonly defaultContentSecurityPolicy: string | null
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
    displayCaptureState: MediaCaptureState
    /**
     * Whether the pages loaded inside #WebKitWebView are editable. For more
     * information see webkit_web_view_set_editable().
     */
    editable: boolean
    /**
     * An estimate of the percent completion for the current loading operation.
     * This value will range from 0.0 to 1.0 and, once a load completes,
     * will remain at 1.0 until a new load starts, at which point it
     * will be reset to 0.0.
     * The value is an estimate based on the total number of bytes expected
     * to be received for a document, including all its possible subresources
     * and child documents.
     */
    readonly estimatedLoadProgress: number
    /**
     * The favicon currently associated to the #WebKitWebView.
     * See webkit_web_view_get_favicon() for more details.
     */
    readonly favicon: Gdk.Texture
    /**
     * Whether the #WebKitWebView is controlled by automation. This should only be used when
     * creating a new #WebKitWebView as a response to #WebKitAutomationSession::create-web-view
     * signal request.
     */
    readonly isControlledByAutomation: boolean
    /**
     * Whether the #WebKitWebView is currently loading a page. This property becomes
     * %TRUE as soon as a new load operation is requested and before the
     * #WebKitWebView::load-changed signal is emitted with %WEBKIT_LOAD_STARTED and
     * at that point the active URI is the requested one.
     * When the load operation finishes the property is set to %FALSE before
     * #WebKitWebView::load-changed is emitted with %WEBKIT_LOAD_FINISHED.
     */
    readonly isLoading: boolean
    /**
     * Whether the #WebKitWebView audio is muted. When %TRUE, audio is silenced.
     * It may still be playing, i.e. #WebKitWebView:is-playing-audio may be %TRUE.
     */
    isMuted: boolean
    /**
     * Whether the #WebKitWebView is currently playing audio from a page.
     * This property becomes %TRUE as soon as web content starts playing any
     * kind of audio. When a page is no longer playing any kind of sound,
     * the property is set back to %FALSE.
     */
    readonly isPlayingAudio: boolean
    /**
     * Whether the web process currently associated to the #WebKitWebView is responsive.
     */
    readonly isWebProcessResponsive: boolean
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
    microphoneCaptureState: MediaCaptureState
    /**
     * The #WebKitNetworkSession of the view
     */
    readonly networkSession: NetworkSession
    /**
     * The identifier of the #WebKitWebPage corresponding to the #WebKitWebView.
     */
    readonly pageId: number
    /**
     * The related #WebKitWebView used when creating the view to share the
     * same web process and network session. This property is not readable
     * because the related web view is only valid during the object construction.
     */
    readonly relatedView: WebView
    /**
     * The #WebKitSettings of the view.
     */
    settings: Settings
    /**
     * The main frame document title of this #WebKitWebView. If
     * the title has not been received yet, it will be %NULL.
     */
    readonly title: string | null
    /**
     * The current active URI of the #WebKitWebView.
     * See webkit_web_view_get_uri() for more details.
     */
    readonly uri: string | null
    /**
     * The #WebKitUserContentManager of the view.
     */
    readonly userContentManager: UserContentManager
    /**
     * The #WebKitWebContext of the view.
     */
    readonly webContext: WebContext
    /**
     * This configures `web_view` to treat the content as a WebExtension.
     * 
     * Note that this refers to the web standard [WebExtensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
     * and not WebKitWebExtensions.
     * 
     * In practice this limits the Content-Security-Policies that are allowed to be set. Some details can be found in
     * [Chrome's documentation](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-migration/#content-security-policy).
     */
    readonly webExtensionMode: WebExtensionMode
    /**
     * The #WebKitWebsitePolicies for the view.
     */
    readonly websitePolicies: WebsitePolicies
    /**
     * The zoom level of the #WebKitWebView content.
     * See webkit_web_view_set_zoom_level() for more details.
     */
    zoomLevel: number
    __gtype__: number

    // Own fields of WebKit-6.0.WebKit.WebView

    parentInstance: any
    priv: any

    // Owm methods of WebKit-6.0.WebKit.WebView

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
     *     webkit_web_view_call_async_javascript_function (web_view, body, -1, arguments, NULL, NULL, NULL, web_view_javascript_finished, NULL);
     * }
     * ```
     * @param body the function body
     * @param length length of `body,` or -1 if `body` is a nul-terminated string
     * @param arguments_ a #GVariant with format `a{sv}` storing the function arguments, or %NULL
     * @param worldName the name of a #WebKitScriptWorld or %NULL to use the default
     * @param sourceUri the source URI
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the script finished
     */
    callAsyncJavascriptFunction(body: string, length: number, arguments_: GLib.Variant | null, worldName: string | null, sourceUri: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation started with webkit_web_view_call_async_javascript_function().
     * @param result a #GAsyncResult
     * @returns a #JSCValue with the return value of the async function    or %NULL in case of error
     */
    callAsyncJavascriptFunctionFinish(result: Gio.AsyncResult): JavaScriptCore.Value
    /**
     * Asynchronously check if it is possible to execute the given editing command.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * webkit_web_view_can_execute_editing_command_finish() to get the result of the operation.
     * @param command the command to check
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    canExecuteEditingCommand(command: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation started with webkit_web_view_can_execute_editing_command().
     * @param result a #GAsyncResult
     * @returns %TRUE if the editing command can be executed or %FALSE otherwise
     */
    canExecuteEditingCommandFinish(result: Gio.AsyncResult): boolean
    /**
     * Determines whether `web_view` has a previous history item.
     * @returns %TRUE if able to move back or %FALSE otherwise.
     */
    canGoBack(): boolean
    /**
     * Determines whether `web_view` has a next history item.
     * @returns %TRUE if able to move forward or %FALSE otherwise.
     */
    canGoForward(): boolean
    /**
     * Whether or not a MIME type can be displayed in `web_view`.
     * @param mimeType a MIME type
     * @returns %TRUE if the MIME type @mime_type can be displayed or %FALSE otherwise
     */
    canShowMimeType(mimeType: string): boolean
    /**
     * Requests downloading of the specified URI string for `web_view`.
     * @param uri the URI to download
     * @returns a new #WebKitDownload representing    the download operation.
     */
    downloadUri(uri: string): Download
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
     *     webkit_javascript_result_unref (js_result);
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
     * @param length length of `script,` or -1 if `script` is a nul-terminated string
     * @param worldName the name of a #WebKitScriptWorld or %NULL to use the default
     * @param sourceUri the source URI
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the script finished
     */
    evaluateJavascript(script: string, length: number, worldName: string | null, sourceUri: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation started with webkit_web_view_evaluate_javascript().
     * @param result a #GAsyncResult
     * @returns a #JSCValue with the result of the last executed statement in script    or %NULL in case of error
     */
    evaluateJavascriptFinish(result: Gio.AsyncResult): JavaScriptCore.Value
    /**
     * Request to execute the given `command` for `web_view`.
     * 
     * You can use webkit_web_view_can_execute_editing_command() to check whether
     * it's possible to execute the command.
     * @param command the command to execute
     */
    executeEditingCommand(command: string): void
    /**
     * Request to execute the given `command` with `argument` for `web_view`.
     * 
     * You can use
     * webkit_web_view_can_execute_editing_command() to check whether
     * it's possible to execute the command.
     * @param command the command to execute
     * @param argument the command argument
     */
    executeEditingCommandWithArgument(command: string, argument: string): void
    /**
     * Get the presentation type of #WebKitWebView when created for automation.
     * @returns a #WebKitAutomationBrowsingContextPresentation.
     */
    getAutomationPresentationType(): AutomationBrowsingContextPresentation
    /**
     * Obtains the #WebKitBackForwardList associated with the given #WebKitWebView.
     * 
     * The #WebKitBackForwardList is owned by the #WebKitWebView.
     * @returns the #WebKitBackForwardList
     */
    getBackForwardList(): BackForwardList
    /**
     * Gets the color that is used to draw the `web_view` background.
     * 
     * Gets the color that is used to draw the `web_view` background before
     * the actual contents are rendered.
     * For more information see also webkit_web_view_set_background_color()
     */
    getBackgroundColor(): /* rgba */ Gdk.RGBA
    /**
     * Get the camera capture state of a #WebKitWebView.
     * @returns The #WebKitMediaCaptureState of the camera device. If #WebKitSettings:enable-mediastream is %FALSE, this method will return %WEBKIT_MEDIA_CAPTURE_STATE_NONE.
     */
    getCameraCaptureState(): MediaCaptureState
    /**
     * Gets the web context of `web_view`.
     * @returns the #WebKitWebContext of the view
     */
    getContext(): WebContext
    /**
     * Returns the current custom character encoding name of `web_view`.
     * @returns the current custom character encoding name or %NULL if no    custom character encoding has been set.
     */
    getCustomCharset(): string
    /**
     * Gets the configured default Content-Security-Policy.
     * @returns The default policy or %NULL
     */
    getDefaultContentSecurityPolicy(): string | null
    /**
     * Get the display capture state of a #WebKitWebView.
     * @returns The #WebKitMediaCaptureState of the display device. If #WebKitSettings:enable-mediastream is %FALSE, this method will return %WEBKIT_MEDIA_CAPTURE_STATE_NONE.
     */
    getDisplayCaptureState(): MediaCaptureState
    /**
     * Gets the web editor state of `web_view`.
     * @returns the #WebKitEditorState of the view
     */
    getEditorState(): EditorState
    /**
     * Gets the value of the #WebKitWebView:estimated-load-progress property.
     * 
     * You can monitor the estimated progress of a load operation by
     * connecting to the notify::estimated-load-progress signal of `web_view`.
     * @returns an estimate of the of the percent complete for a document     load as a range from 0.0 to 1.0.
     */
    getEstimatedLoadProgress(): number
    /**
     * Returns favicon currently associated to `web_view`.
     * 
     * Returns favicon currently associated to `web_view,` if any. You can
     * connect to notify::favicon signal of `web_view` to be notified when
     * the favicon is available.
     * @returns the favicon image or %NULL if there's no    icon associated with @web_view.
     */
    getFavicon(): Gdk.Texture
    /**
     * Gets the #WebKitFindController.
     * 
     * Gets the #WebKitFindController that will allow the caller to query
     * the #WebKitWebView for the text to look for.
     * @returns the #WebKitFindController associated to this particular #WebKitWebView.
     */
    getFindController(): FindController
    /**
     * Get the #WebKitInputMethodContext currently in use by `web_view`.
     * 
     * Get the #WebKitInputMethodContext currently in use by `web_view,` or %NULL if no input method is being used.
     * @returns a #WebKitInputMethodContext, or %NULL
     */
    getInputMethodContext(): InputMethodContext | null
    /**
     * Get the #WebKitWebInspector associated to `web_view`
     * @returns the #WebKitWebInspector of @web_view
     */
    getInspector(): WebInspector
    /**
     * Gets the mute state of `web_view`.
     * @returns %TRUE if @web_view audio is muted or %FALSE is audio is not muted.
     */
    getIsMuted(): boolean
    /**
     * Get whether the current web process of a #WebKitWebView is responsive.
     * @returns %TRUE if the web process attached to @web_view is responsive, or %FALSE otherwise.
     */
    getIsWebProcessResponsive(): boolean
    /**
     * Return the main resource of `web_view`.
     * @returns the main #WebKitWebResource of the view    or %NULL if nothing has been loaded.
     */
    getMainResource(): WebResource
    /**
     * Get the microphone capture state of a #WebKitWebView.
     * @returns The #WebKitMediaCaptureState of the microphone device. If #WebKitSettings:enable-mediastream is %FALSE, this method will return %WEBKIT_MEDIA_CAPTURE_STATE_NONE.
     */
    getMicrophoneCaptureState(): MediaCaptureState
    /**
     * Get the #WebKitNetworkSession associated to `web_view`.
     * @returns a #WebKitNetworkSession
     */
    getNetworkSession(): NetworkSession
    /**
     * Get the identifier of the #WebKitWebPage corresponding to
     * the #WebKitWebView
     * @returns the page ID of @web_view.
     */
    getPageId(): number
    /**
     * Gets the current session state of `web_view`
     * @returns a #WebKitWebViewSessionState
     */
    getSessionState(): WebViewSessionState
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
    getSettings(): Settings

    // Overloads of getSettings

    /**
     * Gets the settings object holding the settings used for this widget.
     * 
     * Note that this function can only be called when the `GtkWidget`
     * is attached to a toplevel, since the settings object is specific
     * to a particular `GdkDisplay`. If you want to monitor the widget for
     * changes in its settings, connect to the `notify::display` signal.
     * @returns the relevant `GtkSettings` object
     */
    getSettings(): Gtk.Settings
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
    getSnapshot(region: SnapshotRegion, options: SnapshotOptions, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous operation started with webkit_web_view_get_snapshot().
     * @param result a #GAsyncResult
     * @returns an image with the retrieved snapshot, or %NULL in case of error.
     */
    getSnapshotFinish(result: Gio.AsyncResult): Gdk.Texture
    /**
     * Gets the value of the #WebKitWebView:title property.
     * 
     * You can connect to notify::title signal of `web_view` to
     * be notified when the title has been received.
     * @returns The main frame document title of @web_view.
     */
    getTitle(): string
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
    getTlsInfo(): [ /* returnType */ boolean, /* certificate */ Gio.TlsCertificate, /* errors */ Gio.TlsCertificateFlags ]
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
    getUri(): string
    /**
     * Gets the user content manager associated to `web_view`.
     * @returns the #WebKitUserContentManager associated with the view
     */
    getUserContentManager(): UserContentManager
    /**
     * Get the view's #WebKitWebExtensionMode.
     * @returns the #WebKitWebExtensionMode
     */
    getWebExtensionMode(): WebExtensionMode
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
    getWebsitePolicies(): WebsitePolicies
    /**
     * Get the #WebKitWindowProperties object.
     * 
     * Get the #WebKitWindowProperties object containing the properties
     * that the window containing `web_view` should have.
     * @returns the #WebKitWindowProperties of @web_view
     */
    getWindowProperties(): WindowProperties
    /**
     * Set the zoom level of `web_view`.
     * 
     * Get the zoom level of `web_view,` i.e. the factor by which the
     * view contents are scaled with respect to their original size.
     * @returns the current zoom level of @web_view
     */
    getZoomLevel(): number
    /**
     * Loads the previous history item.
     * 
     * You can monitor the load operation by connecting to
     * #WebKitWebView::load-changed signal.
     */
    goBack(): void
    /**
     * Loads the next history item.
     * 
     * You can monitor the load operation by connecting to
     * #WebKitWebView::load-changed signal.
     */
    goForward(): void
    /**
     * Loads the specific history item `list_item`.
     * 
     * You can monitor the load operation by connecting to
     * #WebKitWebView::load-changed signal.
     * @param listItem a #WebKitBackForwardListItem
     */
    goToBackForwardListItem(listItem: BackForwardListItem): void
    /**
     * Gets whether the user is allowed to edit the HTML document.
     * 
     * When `web_view` is not editable an element in the HTML document can only be edited if the
     * CONTENTEDITABLE attribute has been set on the element or one of its parent
     * elements. By default a #WebKitWebView is not editable.
     * @returns %TRUE if the user is allowed to edit the HTML document, or %FALSE otherwise.
     */
    isEditable(): boolean
    /**
     * Load the given `content` string for the URI `content_uri`.
     * 
     * This allows clients to display page-loading errors in the #WebKitWebView itself.
     * When this method is called from #WebKitWebView::load-failed signal to show an
     * error page, then the back-forward list is maintained appropriately.
     * For everything else this method works the same way as webkit_web_view_load_html().
     * @param content the new content to display as the main page of the `web_view`
     * @param contentUri the URI for the alternate page content
     * @param baseUri the base URI for relative locations or %NULL
     */
    loadAlternateHtml(content: string, contentUri: string, baseUri: string | null): void
    /**
     * Load the specified `bytes` into `web_view` using the given `mime_type` and `encoding`.
     * 
     * When `mime_type` is %NULL, it defaults to "text/html".
     * When `encoding` is %NULL, it defaults to "UTF-8".
     * When `base_uri` is %NULL, it defaults to "about:blank".
     * You can monitor the load operation by connecting to #WebKitWebView::load-changed signal.
     * @param bytes input data to load
     * @param mimeType the MIME type of `bytes,` or %NULL
     * @param encoding the character encoding of `bytes,` or %NULL
     * @param baseUri the base URI for relative locations or %NULL
     */
    loadBytes(bytes: any, mimeType: string | null, encoding: string | null, baseUri: string | null): void
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
     * @param baseUri The base URI for relative locations or %NULL
     */
    loadHtml(content: string, baseUri: string | null): void
    /**
     * Load the specified `plain_text` string into `web_view`.
     * 
     * The mime type of document will be "text/plain". You can monitor the load
     * operation by connecting to #WebKitWebView::load-changed signal.
     * @param plainText The plain text to load
     */
    loadPlainText(plainText: string): void
    /**
     * Requests loading of the specified #WebKitURIRequest.
     * 
     * You can monitor the load operation by connecting to
     * #WebKitWebView::load-changed signal.
     * @param request a #WebKitURIRequest to load
     */
    loadRequest(request: URIRequest): void
    /**
     * Requests loading of the specified URI string.
     * 
     * You can monitor the load operation by connecting to
     * #WebKitWebView::load-changed signal.
     * @param uri an URI string
     */
    loadUri(uri: string): void
    /**
     * Reloads the current contents of `web_view`.
     * 
     * See also webkit_web_view_reload_bypass_cache().
     */
    reload(): void
    /**
     * Reloads the current contents of `web_view` without
     * using any cached data.
     */
    reloadBypassCache(): void
    /**
     * Restore the `web_view` session state from `state`
     * @param state a #WebKitWebViewSessionState
     */
    restoreSessionState(state: WebViewSessionState): void
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
     * @param saveMode the #WebKitSaveMode specifying how the web page should be saved.
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    save(saveMode: SaveMode, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation started with webkit_web_view_save().
     * @param result a #GAsyncResult
     * @returns a #GInputStream with the result of saving    the current web page or %NULL in case of error.
     */
    saveFinish(result: Gio.AsyncResult): Gio.InputStream
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
     * @param saveMode the #WebKitSaveMode specifying how the web page should be saved.
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    saveToFile(file: Gio.File, saveMode: SaveMode, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation started with webkit_web_view_save_to_file().
     * @param result a #GAsyncResult
     * @returns %TRUE if the web page was successfully saved to a file or %FALSE otherwise.
     */
    saveToFileFinish(result: Gio.AsyncResult): boolean
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
    sendMessageToPage(message: UserMessage, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation started with webkit_web_view_send_message_to_page().
     * @param result a #GAsyncResult
     * @returns a #WebKitUserMessage with the reply or %NULL in case of error.
     */
    sendMessageToPageFinish(result: Gio.AsyncResult): UserMessage
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
    setBackgroundColor(rgba: Gdk.RGBA): void
    /**
     * Set the camera capture state of a #WebKitWebView.
     * 
     * If #WebKitSettings:enable-mediastream is %FALSE, this method will have no visible effect. Once the
     * state of the device has been set to %WEBKIT_MEDIA_CAPTURE_STATE_NONE it cannot be changed
     * anymore. The page can however request capture again using the mediaDevices API.
     * @param state a #WebKitMediaCaptureState
     */
    setCameraCaptureState(state: MediaCaptureState): void
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
    setCorsAllowlist(allowlist: string[] | null): void
    /**
     * Sets the current custom character encoding override of `web_view`.
     * 
     * The custom character encoding will override any text encoding detected via HTTP headers or
     * META tags. Calling this method will stop any current load operation and reload the
     * current page. Setting the custom character encoding to %NULL removes the character
     * encoding override.
     * @param charset a character encoding name or %NULL
     */
    setCustomCharset(charset: string | null): void
    /**
     * Set the display capture state of a #WebKitWebView.
     * 
     * If #WebKitSettings:enable-mediastream is %FALSE, this method will have no visible effect. Once the
     * state of the device has been set to %WEBKIT_MEDIA_CAPTURE_STATE_NONE it cannot be changed
     * anymore. The page can however request capture again using the mediaDevices API.
     * @param state a #WebKitMediaCaptureState
     */
    setDisplayCaptureState(state: MediaCaptureState): void
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
    setEditable(editable: boolean): void
    /**
     * Set the #WebKitInputMethodContext to be used by `web_view`.
     * 
     * Set the #WebKitInputMethodContext to be used by `web_view,` or %NULL to not use any input method.
     * Note that the same #WebKitInputMethodContext can't be set on more than one #WebKitWebView at the same time.
     * @param context the #WebKitInputMethodContext to set, or %NULL
     */
    setInputMethodContext(context: InputMethodContext | null): void
    /**
     * Sets the mute state of `web_view`.
     * @param muted mute flag
     */
    setIsMuted(muted: boolean): void
    /**
     * Set the microphone capture state of a #WebKitWebView.
     * 
     * If #WebKitSettings:enable-mediastream is %FALSE, this method will have no visible effect. Once the
     * state of the device has been set to %WEBKIT_MEDIA_CAPTURE_STATE_NONE it cannot be changed
     * anymore. The page can however request capture again using the mediaDevices API.
     * @param state a #WebKitMediaCaptureState
     */
    setMicrophoneCaptureState(state: MediaCaptureState): void
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
    setSettings(settings: Settings): void
    /**
     * Set the zoom level of `web_view`.
     * 
     * Set the zoom level of `web_view,` i.e. the factor by which the
     * view contents are scaled with respect to their original size.
     * @param zoomLevel the zoom level
     */
    setZoomLevel(zoomLevel: number): void
    /**
     * Stops any ongoing loading operation in `web_view`.
     * 
     * This method does nothing if no content is being loaded.
     * If there is a loading operation in progress, it will be cancelled and
     * #WebKitWebView::load-failed signal will be emitted with
     * %WEBKIT_NETWORK_ERROR_CANCELLED error.
     */
    stopLoading(): void
    /**
     * Terminates the web process associated to `web_view`.
     * 
     * When the web process gets terminated
     * using this method, the #WebKitWebView::web-process-terminated signal is emitted with
     * %WEBKIT_WEB_PROCESS_TERMINATED_BY_API as the reason for termination.
     */
    terminateWebProcess(): void
    /**
     * Tries to close the `web_view`.
     * 
     * This will fire the onbeforeunload event
     * to ask the user for confirmation to close the page. If there isn't an
     * onbeforeunload event handler or the user confirms to close the page,
     * the #WebKitWebView::close signal is emitted, otherwise nothing happens.
     */
    tryClose(): void

    // Own virtual methods of WebKit-6.0.WebKit.WebView

    authenticate(request: AuthenticationRequest): boolean
    close(): void
    contextMenu(contextMenu: ContextMenu, hitTestResult: HitTestResult): boolean
    contextMenuDismissed(): void
    decidePolicy(decision: PolicyDecision, type: PolicyDecisionType): boolean
    enterFullscreen(): boolean
    insecureContentDetected(event: InsecureContentEvent): void
    leaveFullscreen(): boolean
    loadChanged(loadEvent: LoadEvent): void
    loadFailed(loadEvent: LoadEvent, failingUri: string, error: GLib.Error): boolean
    loadFailedWithTlsErrors(failingUri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): boolean
    mouseTargetChanged(hitTestResult: HitTestResult, modifiers: number): void
    permissionRequest(permissionRequest: PermissionRequest): boolean
    print(printOperation: PrintOperation): boolean
    queryPermissionState(query: PermissionStateQuery): boolean
    readyToShow(): void
    resourceLoadStarted(resource: WebResource, request: URIRequest): void
    runAsModal(): void
    runColorChooser(request: ColorChooserRequest): boolean
    runFileChooser(request: FileChooserRequest): boolean
    scriptDialog(dialog: ScriptDialog): boolean
    showNotification(notification: Notification): boolean
    showOptionMenu(menu: OptionMenu, rectangle: Gdk.Rectangle): boolean
    submitForm(request: FormSubmissionRequest): void
    userMessageReceived(message: UserMessage): boolean
    webProcessCrashed(): boolean
    webProcessTerminated(reason: WebProcessTerminationReason): void

    // Own signals of WebKit-6.0.WebKit.WebView

    connect(sigName: "authenticate", callback: WebView.AuthenticateSignalCallback): number
    on(sigName: "authenticate", callback: WebView.AuthenticateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: WebView.AuthenticateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: WebView.AuthenticateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "authenticate", ...args: any[]): void
    connect(sigName: "close", callback: WebView.CloseSignalCallback): number
    on(sigName: "close", callback: WebView.CloseSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "close", callback: WebView.CloseSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "close", callback: WebView.CloseSignalCallback): NodeJS.EventEmitter
    emit(sigName: "close", ...args: any[]): void
    connect(sigName: "context-menu", callback: WebView.ContextMenuSignalCallback): number
    on(sigName: "context-menu", callback: WebView.ContextMenuSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "context-menu", callback: WebView.ContextMenuSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "context-menu", callback: WebView.ContextMenuSignalCallback): NodeJS.EventEmitter
    emit(sigName: "context-menu", hitTestResult: HitTestResult, ...args: any[]): void
    connect(sigName: "context-menu-dismissed", callback: WebView.ContextMenuDismissedSignalCallback): number
    on(sigName: "context-menu-dismissed", callback: WebView.ContextMenuDismissedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "context-menu-dismissed", callback: WebView.ContextMenuDismissedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "context-menu-dismissed", callback: WebView.ContextMenuDismissedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "context-menu-dismissed", ...args: any[]): void
    connect(sigName: "create", callback: WebView.CreateSignalCallback): number
    on(sigName: "create", callback: WebView.CreateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "create", callback: WebView.CreateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "create", callback: WebView.CreateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "create", ...args: any[]): void
    connect(sigName: "decide-policy", callback: WebView.DecidePolicySignalCallback): number
    on(sigName: "decide-policy", callback: WebView.DecidePolicySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "decide-policy", callback: WebView.DecidePolicySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "decide-policy", callback: WebView.DecidePolicySignalCallback): NodeJS.EventEmitter
    emit(sigName: "decide-policy", decisionType: PolicyDecisionType, ...args: any[]): void
    connect(sigName: "enter-fullscreen", callback: WebView.EnterFullscreenSignalCallback): number
    on(sigName: "enter-fullscreen", callback: WebView.EnterFullscreenSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-fullscreen", callback: WebView.EnterFullscreenSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-fullscreen", callback: WebView.EnterFullscreenSignalCallback): NodeJS.EventEmitter
    emit(sigName: "enter-fullscreen", ...args: any[]): void
    connect(sigName: "insecure-content-detected", callback: WebView.InsecureContentDetectedSignalCallback): number
    on(sigName: "insecure-content-detected", callback: WebView.InsecureContentDetectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "insecure-content-detected", callback: WebView.InsecureContentDetectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "insecure-content-detected", callback: WebView.InsecureContentDetectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "insecure-content-detected", ...args: any[]): void
    connect(sigName: "leave-fullscreen", callback: WebView.LeaveFullscreenSignalCallback): number
    on(sigName: "leave-fullscreen", callback: WebView.LeaveFullscreenSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-fullscreen", callback: WebView.LeaveFullscreenSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-fullscreen", callback: WebView.LeaveFullscreenSignalCallback): NodeJS.EventEmitter
    emit(sigName: "leave-fullscreen", ...args: any[]): void
    connect(sigName: "load-changed", callback: WebView.LoadChangedSignalCallback): number
    on(sigName: "load-changed", callback: WebView.LoadChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "load-changed", callback: WebView.LoadChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "load-changed", callback: WebView.LoadChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "load-changed", ...args: any[]): void
    connect(sigName: "load-failed", callback: WebView.LoadFailedSignalCallback): number
    on(sigName: "load-failed", callback: WebView.LoadFailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "load-failed", callback: WebView.LoadFailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "load-failed", callback: WebView.LoadFailedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "load-failed", failingUri: string | null, error: GLib.Error, ...args: any[]): void
    connect(sigName: "load-failed-with-tls-errors", callback: WebView.LoadFailedWithTlsErrorsSignalCallback): number
    on(sigName: "load-failed-with-tls-errors", callback: WebView.LoadFailedWithTlsErrorsSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "load-failed-with-tls-errors", callback: WebView.LoadFailedWithTlsErrorsSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "load-failed-with-tls-errors", callback: WebView.LoadFailedWithTlsErrorsSignalCallback): NodeJS.EventEmitter
    emit(sigName: "load-failed-with-tls-errors", certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags, ...args: any[]): void
    connect(sigName: "mouse-target-changed", callback: WebView.MouseTargetChangedSignalCallback): number
    on(sigName: "mouse-target-changed", callback: WebView.MouseTargetChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mouse-target-changed", callback: WebView.MouseTargetChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mouse-target-changed", callback: WebView.MouseTargetChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "mouse-target-changed", modifiers: number, ...args: any[]): void
    connect(sigName: "permission-request", callback: WebView.PermissionRequestSignalCallback): number
    on(sigName: "permission-request", callback: WebView.PermissionRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "permission-request", callback: WebView.PermissionRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "permission-request", callback: WebView.PermissionRequestSignalCallback): NodeJS.EventEmitter
    emit(sigName: "permission-request", ...args: any[]): void
    connect(sigName: "print", callback: WebView.PrintSignalCallback): number
    on(sigName: "print", callback: WebView.PrintSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "print", callback: WebView.PrintSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "print", callback: WebView.PrintSignalCallback): NodeJS.EventEmitter
    emit(sigName: "print", ...args: any[]): void
    connect(sigName: "query-permission-state", callback: WebView.QueryPermissionStateSignalCallback): number
    on(sigName: "query-permission-state", callback: WebView.QueryPermissionStateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "query-permission-state", callback: WebView.QueryPermissionStateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "query-permission-state", callback: WebView.QueryPermissionStateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "query-permission-state", ...args: any[]): void
    connect(sigName: "ready-to-show", callback: WebView.ReadyToShowSignalCallback): number
    on(sigName: "ready-to-show", callback: WebView.ReadyToShowSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ready-to-show", callback: WebView.ReadyToShowSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ready-to-show", callback: WebView.ReadyToShowSignalCallback): NodeJS.EventEmitter
    emit(sigName: "ready-to-show", ...args: any[]): void
    connect(sigName: "resource-load-started", callback: WebView.ResourceLoadStartedSignalCallback): number
    on(sigName: "resource-load-started", callback: WebView.ResourceLoadStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resource-load-started", callback: WebView.ResourceLoadStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resource-load-started", callback: WebView.ResourceLoadStartedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "resource-load-started", request: URIRequest, ...args: any[]): void
    connect(sigName: "run-as-modal", callback: WebView.RunAsModalSignalCallback): number
    on(sigName: "run-as-modal", callback: WebView.RunAsModalSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "run-as-modal", callback: WebView.RunAsModalSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "run-as-modal", callback: WebView.RunAsModalSignalCallback): NodeJS.EventEmitter
    emit(sigName: "run-as-modal", ...args: any[]): void
    connect(sigName: "run-color-chooser", callback: WebView.RunColorChooserSignalCallback): number
    on(sigName: "run-color-chooser", callback: WebView.RunColorChooserSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "run-color-chooser", callback: WebView.RunColorChooserSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "run-color-chooser", callback: WebView.RunColorChooserSignalCallback): NodeJS.EventEmitter
    emit(sigName: "run-color-chooser", ...args: any[]): void
    connect(sigName: "run-file-chooser", callback: WebView.RunFileChooserSignalCallback): number
    on(sigName: "run-file-chooser", callback: WebView.RunFileChooserSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "run-file-chooser", callback: WebView.RunFileChooserSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "run-file-chooser", callback: WebView.RunFileChooserSignalCallback): NodeJS.EventEmitter
    emit(sigName: "run-file-chooser", ...args: any[]): void
    connect(sigName: "script-dialog", callback: WebView.ScriptDialogSignalCallback): number
    on(sigName: "script-dialog", callback: WebView.ScriptDialogSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "script-dialog", callback: WebView.ScriptDialogSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "script-dialog", callback: WebView.ScriptDialogSignalCallback): NodeJS.EventEmitter
    emit(sigName: "script-dialog", ...args: any[]): void
    connect(sigName: "show-notification", callback: WebView.ShowNotificationSignalCallback): number
    on(sigName: "show-notification", callback: WebView.ShowNotificationSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-notification", callback: WebView.ShowNotificationSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-notification", callback: WebView.ShowNotificationSignalCallback): NodeJS.EventEmitter
    emit(sigName: "show-notification", ...args: any[]): void
    connect(sigName: "show-option-menu", callback: WebView.ShowOptionMenuSignalCallback): number
    on(sigName: "show-option-menu", callback: WebView.ShowOptionMenuSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-option-menu", callback: WebView.ShowOptionMenuSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-option-menu", callback: WebView.ShowOptionMenuSignalCallback): NodeJS.EventEmitter
    emit(sigName: "show-option-menu", rectangle: Gdk.Rectangle, ...args: any[]): void
    connect(sigName: "submit-form", callback: WebView.SubmitFormSignalCallback): number
    on(sigName: "submit-form", callback: WebView.SubmitFormSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "submit-form", callback: WebView.SubmitFormSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "submit-form", callback: WebView.SubmitFormSignalCallback): NodeJS.EventEmitter
    emit(sigName: "submit-form", ...args: any[]): void
    connect(sigName: "user-message-received", callback: WebView.UserMessageReceivedSignalCallback): number
    on(sigName: "user-message-received", callback: WebView.UserMessageReceivedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-message-received", callback: WebView.UserMessageReceivedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-message-received", callback: WebView.UserMessageReceivedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "user-message-received", ...args: any[]): void
    connect(sigName: "web-process-terminated", callback: WebView.WebProcessTerminatedSignalCallback): number
    on(sigName: "web-process-terminated", callback: WebView.WebProcessTerminatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "web-process-terminated", callback: WebView.WebProcessTerminatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "web-process-terminated", callback: WebView.WebProcessTerminatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "web-process-terminated", ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.WebView

    connect(sigName: "notify::automation-presentation-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::automation-presentation-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::automation-presentation-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::automation-presentation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::automation-presentation-type", ...args: any[]): void
    connect(sigName: "notify::camera-capture-state", callback: (...args: any[]) => void): number
    on(sigName: "notify::camera-capture-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::camera-capture-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::camera-capture-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::camera-capture-state", ...args: any[]): void
    connect(sigName: "notify::default-content-security-policy", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-content-security-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-content-security-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-content-security-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-content-security-policy", ...args: any[]): void
    connect(sigName: "notify::display-capture-state", callback: (...args: any[]) => void): number
    on(sigName: "notify::display-capture-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-capture-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-capture-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-capture-state", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (...args: any[]) => void): number
    on(sigName: "notify::editable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::editable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::editable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::estimated-load-progress", callback: (...args: any[]) => void): number
    on(sigName: "notify::estimated-load-progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::estimated-load-progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::estimated-load-progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::estimated-load-progress", ...args: any[]): void
    connect(sigName: "notify::favicon", callback: (...args: any[]) => void): number
    on(sigName: "notify::favicon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::favicon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::favicon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::favicon", ...args: any[]): void
    connect(sigName: "notify::is-controlled-by-automation", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-controlled-by-automation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-controlled-by-automation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-controlled-by-automation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-controlled-by-automation", ...args: any[]): void
    connect(sigName: "notify::is-loading", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-loading", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-loading", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-loading", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-loading", ...args: any[]): void
    connect(sigName: "notify::is-muted", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-muted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-muted", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-muted", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-muted", ...args: any[]): void
    connect(sigName: "notify::is-playing-audio", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-playing-audio", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-playing-audio", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-playing-audio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-playing-audio", ...args: any[]): void
    connect(sigName: "notify::is-web-process-responsive", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-web-process-responsive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-web-process-responsive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-web-process-responsive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-web-process-responsive", ...args: any[]): void
    connect(sigName: "notify::microphone-capture-state", callback: (...args: any[]) => void): number
    on(sigName: "notify::microphone-capture-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::microphone-capture-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::microphone-capture-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::microphone-capture-state", ...args: any[]): void
    connect(sigName: "notify::network-session", callback: (...args: any[]) => void): number
    on(sigName: "notify::network-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::network-session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::network-session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::network-session", ...args: any[]): void
    connect(sigName: "notify::page-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::page-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::page-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::page-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::page-id", ...args: any[]): void
    connect(sigName: "notify::related-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::related-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::related-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::related-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::related-view", ...args: any[]): void
    connect(sigName: "notify::settings", callback: (...args: any[]) => void): number
    on(sigName: "notify::settings", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::settings", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::settings", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::user-content-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-content-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-content-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-content-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-content-manager", ...args: any[]): void
    connect(sigName: "notify::web-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::web-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::web-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::web-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::web-context", ...args: any[]): void
    connect(sigName: "notify::web-extension-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::web-extension-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::web-extension-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::web-extension-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::web-extension-mode", ...args: any[]): void
    connect(sigName: "notify::website-policies", callback: (...args: any[]) => void): number
    on(sigName: "notify::website-policies", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::website-policies", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::website-policies", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::website-policies", ...args: any[]): void
    connect(sigName: "notify::zoom-level", callback: (...args: any[]) => void): number
    on(sigName: "notify::zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::zoom-level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::zoom-level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::zoom-level", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (...args: any[]) => void): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::css-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::css-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::css-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (...args: any[]) => void): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (...args: any[]) => void): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (...args: any[]) => void): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (...args: any[]) => void): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (...args: any[]) => void): number
    on(sigName: "notify::root", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (...args: any[]) => void): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class WebView extends WebViewBase {

    // Own properties of WebKit-6.0.WebKit.WebView

    static name: string

    // Constructors of WebKit-6.0.WebKit.WebView

    constructor(config?: WebView.ConstructorProperties) 
    /**
     * Creates a new #WebKitWebView with the default #WebKitWebContext.
     * 
     * Creates a new #WebKitWebView with the default #WebKitWebContext and
     * no #WebKitUserContentManager associated with it.
     * See also webkit_web_view_new_with_context(),
     * webkit_web_view_new_with_user_content_manager(), and
     * webkit_web_view_new_with_settings().
     * @constructor 
     * @returns The newly created #WebKitWebView widget
     */
    constructor() 
    /**
     * Creates a new #WebKitWebView with the default #WebKitWebContext.
     * 
     * Creates a new #WebKitWebView with the default #WebKitWebContext and
     * no #WebKitUserContentManager associated with it.
     * See also webkit_web_view_new_with_context(),
     * webkit_web_view_new_with_user_content_manager(), and
     * webkit_web_view_new_with_settings().
     * @constructor 
     * @returns The newly created #WebKitWebView widget
     */
    static new(): WebView
    _init(config?: WebView.ConstructorProperties): void
}

module WebViewBase {

    // Constructor properties interface

    interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {
    }

}

interface WebViewBase extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of WebKit-6.0.WebKit.WebViewBase

    __gtype__: number

    // Own fields of WebKit-6.0.WebKit.WebViewBase

    parentInstance: any
    priv: WebViewBasePrivate

    // Class property signals of WebKit-6.0.WebKit.WebViewBase

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (...args: any[]) => void): number
    on(sigName: "notify::css-classes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::css-classes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::css-classes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::css-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::css-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::css-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (...args: any[]) => void): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (...args: any[]) => void): number
    on(sigName: "notify::focusable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focusable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (...args: any[]) => void): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (...args: any[]) => void): number
    on(sigName: "notify::overflow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::overflow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::overflow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (...args: any[]) => void): number
    on(sigName: "notify::root", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (...args: any[]) => void): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (...args: any[]) => void): number
    on(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accessible-role", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accessible-role", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WebViewBase extends Gtk.Widget {

    // Own properties of WebKit-6.0.WebKit.WebViewBase

    static name: string

    // Constructors of WebKit-6.0.WebKit.WebViewBase

    constructor(config?: WebViewBase.ConstructorProperties) 
    _init(config?: WebViewBase.ConstructorProperties): void
}

module WebsiteDataAccessPermissionRequest {

    // Constructor properties interface

    interface ConstructorProperties extends PermissionRequest.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface WebsiteDataAccessPermissionRequest extends PermissionRequest {

    // Own properties of WebKit-6.0.WebKit.WebsiteDataAccessPermissionRequest

    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.WebsiteDataAccessPermissionRequest

    /**
     * Get the current domain being browsed.
     * @returns the current domain name
     */
    getCurrentDomain(): string
    /**
     * Get the domain requesting permission to access its cookies while browsing the current domain.
     * @returns the requesting domain name
     */
    getRequestingDomain(): string

    // Class property signals of WebKit-6.0.WebKit.WebsiteDataAccessPermissionRequest

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A permission request for accessing website data from third-party domains.
 * 
 * WebKitWebsiteDataAccessPermissionRequest represents a request for
 * permission to allow a third-party domain access its cookies.
 * 
 * When a WebKitWebsiteDataAccessPermissionRequest is not handled by the user,
 * it is denied by default.
 * @class 
 */
class WebsiteDataAccessPermissionRequest extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.WebsiteDataAccessPermissionRequest

    static name: string

    // Constructors of WebKit-6.0.WebKit.WebsiteDataAccessPermissionRequest

    constructor(config?: WebsiteDataAccessPermissionRequest.ConstructorProperties) 
    _init(config?: WebsiteDataAccessPermissionRequest.ConstructorProperties): void
}

module WebsiteDataManager {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of WebKit-6.0.WebKit.WebsiteDataManager

        /**
         * The base directory for caches. If %NULL, a default location will be used.
         */
        base_cache_directory?: string | null
        /**
         * The base directory for website data. If %NULL, a default location will be used.
         */
        base_data_directory?: string | null
        /**
         * Whether the #WebKitWebsiteDataManager is ephemeral. An ephemeral #WebKitWebsiteDataManager
         * handles all websites data as non-persistent, and nothing will be written to the client
         * storage. Note that if you create an ephemeral #WebKitWebsiteDataManager all other construction
         * parameters to configure data directories will be ignored.
         */
        is_ephemeral?: boolean | null
        /**
         * The percentage of volume space that can be used for data storage for every domain.
         * If the maximum storage is reached the storage request will fail with a QuotaExceededError exception.
         * A value of 0.0 means that data storage is not allowed. A value of -1.0, which is the default,
         * means WebKit will use the default quota (1 GiB).
         */
        origin_storage_ratio?: number | null
        /**
         * The percentage of volume space that can be used for data storage for all domains.
         * If the maximum storage is reached the eviction will happen.
         * A value of 0.0 means that data storage is not allowed. A value of -1.0, which is the default,
         * means there's no limit for the total storage.
         */
        total_storage_ratio?: number | null
    }

}

interface WebsiteDataManager {

    // Own properties of WebKit-6.0.WebKit.WebsiteDataManager

    /**
     * The base directory for caches. If %NULL, a default location will be used.
     */
    readonly baseCacheDirectory: string | null
    /**
     * The base directory for website data. If %NULL, a default location will be used.
     */
    readonly baseDataDirectory: string | null
    /**
     * Whether the #WebKitWebsiteDataManager is ephemeral. An ephemeral #WebKitWebsiteDataManager
     * handles all websites data as non-persistent, and nothing will be written to the client
     * storage. Note that if you create an ephemeral #WebKitWebsiteDataManager all other construction
     * parameters to configure data directories will be ignored.
     */
    readonly isEphemeral: boolean
    /**
     * The percentage of volume space that can be used for data storage for every domain.
     * If the maximum storage is reached the storage request will fail with a QuotaExceededError exception.
     * A value of 0.0 means that data storage is not allowed. A value of -1.0, which is the default,
     * means WebKit will use the default quota (1 GiB).
     */
    readonly originStorageRatio: number
    /**
     * The percentage of volume space that can be used for data storage for all domains.
     * If the maximum storage is reached the eviction will happen.
     * A value of 0.0 means that data storage is not allowed. A value of -1.0, which is the default,
     * means there's no limit for the total storage.
     */
    readonly totalStorageRatio: number
    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.WebsiteDataManager

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
    clear(types: WebsiteDataTypes, timespan: GLib.TimeSpan, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation started with webkit_website_data_manager_clear()
     * @param result a #GAsyncResult
     * @returns %TRUE if website data was successfully cleared, or %FALSE otherwise.
     */
    clearFinish(result: Gio.AsyncResult): boolean
    /**
     * Asynchronously get the list of #WebKitWebsiteData for the given `types`.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * webkit_website_data_manager_fetch_finish() to get the result of the operation.
     * @param types #WebKitWebsiteDataTypes
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    fetch(types: WebsiteDataTypes, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation started with webkit_website_data_manager_fetch().
     * @param result a #GAsyncResult
     * @returns a #GList of #WebKitWebsiteData. You must free the #GList with    g_list_free() and unref the #WebKitWebsiteData<!-- -->s with webkit_website_data_unref() when you're done with them.
     */
    fetchFinish(result: Gio.AsyncResult): WebsiteData[]
    /**
     * Get the #WebKitWebsiteDataManager:base-cache-directory property.
     * @returns the base directory for caches, or %NULL if    #WebKitWebsiteDataManager:base-cache-directory was not provided or @manager is ephemeral.
     */
    getBaseCacheDirectory(): string | null
    /**
     * Get the #WebKitWebsiteDataManager:base-data-directory property.
     * @returns the base directory for website data, or %NULL if    #WebKitWebsiteDataManager:base-data-directory was not provided or @manager is ephemeral.
     */
    getBaseDataDirectory(): string | null
    /**
     * Get the #WebKitFaviconDatabase of `manager`.
     * @returns a #WebKitFaviconDatabase, or %NULL if website icons are disabled
     */
    getFaviconDatabase(): FaviconDatabase | null
    /**
     * Get whether website icons are enabled.
     * @returns %TRUE if website icons are enabled, or %FALSE otherwise.
     */
    getFaviconsEnabled(): boolean
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
    getItpSummary(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation started with webkit_website_data_manager_get_itp_summary().
     * @param result a #GAsyncResult
     * @returns a #GList of #WebKitITPThirdParty.    You must free the #GList with g_list_free() and unref the #WebKitITPThirdParty<!-- -->s with    webkit_itp_third_party_unref() when you're done with them.
     */
    getItpSummaryFinish(result: Gio.AsyncResult): ITPThirdParty[]
    /**
     * Asynchronously removes the website data in the given `website_data` list.
     * 
     * Asynchronously removes the website data of the given `types` for websites in the given `website_data` list.
     * Use webkit_website_data_manager_clear() if you want to remove the website data for all sites.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * webkit_website_data_manager_remove_finish() to get the result of the operation.
     * @param types #WebKitWebsiteDataTypes
     * @param websiteData a #GList of #WebKitWebsiteData
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    remove(types: WebsiteDataTypes, websiteData: WebsiteData[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation started with webkit_website_data_manager_remove().
     * @param result a #GAsyncResult
     * @returns %TRUE if website data resources were successfully removed, or %FALSE otherwise.
     */
    removeFinish(result: Gio.AsyncResult): boolean
    /**
     * Set whether website icons are enabled. Website icons are disabled by default.
     * When website icons are disabled, the #WebKitFaviconDatabase of `manager` is closed and
     * its reference removed, so webkit_website_data_manager_get_favicon_database() will
     * return %NULL. If website icons are enabled again, a new #WebKitFaviconDatabase will
     * be created.
     * @param enabled value to set
     */
    setFaviconsEnabled(enabled: boolean): void

    // Class property signals of WebKit-6.0.WebKit.WebsiteDataManager

    connect(sigName: "notify::base-cache-directory", callback: (...args: any[]) => void): number
    on(sigName: "notify::base-cache-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::base-cache-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::base-cache-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::base-cache-directory", ...args: any[]): void
    connect(sigName: "notify::base-data-directory", callback: (...args: any[]) => void): number
    on(sigName: "notify::base-data-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::base-data-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::base-data-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::base-data-directory", ...args: any[]): void
    connect(sigName: "notify::is-ephemeral", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-ephemeral", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-ephemeral", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-ephemeral", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-ephemeral", ...args: any[]): void
    connect(sigName: "notify::origin-storage-ratio", callback: (...args: any[]) => void): number
    on(sigName: "notify::origin-storage-ratio", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::origin-storage-ratio", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::origin-storage-ratio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::origin-storage-ratio", ...args: any[]): void
    connect(sigName: "notify::total-storage-ratio", callback: (...args: any[]) => void): number
    on(sigName: "notify::total-storage-ratio", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::total-storage-ratio", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::total-storage-ratio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::total-storage-ratio", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class WebsiteDataManager extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.WebsiteDataManager

    static name: string

    // Constructors of WebKit-6.0.WebKit.WebsiteDataManager

    constructor(config?: WebsiteDataManager.ConstructorProperties) 
    _init(config?: WebsiteDataManager.ConstructorProperties): void
}

module WebsitePolicies {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of WebKit-6.0.WebKit.WebsitePolicies

        /**
         * The #WebKitAutoplayPolicy of #WebKitWebsitePolicies.
         */
        autoplay?: AutoplayPolicy | null
    }

}

interface WebsitePolicies {

    // Own properties of WebKit-6.0.WebKit.WebsitePolicies

    /**
     * The #WebKitAutoplayPolicy of #WebKitWebsitePolicies.
     */
    readonly autoplay: AutoplayPolicy
    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.WebsitePolicies

    /**
     * Get the #WebKitWebsitePolicies:autoplay property.
     * @returns #WebKitAutoplayPolicy
     */
    getAutoplayPolicy(): AutoplayPolicy

    // Class property signals of WebKit-6.0.WebKit.WebsitePolicies

    connect(sigName: "notify::autoplay", callback: (...args: any[]) => void): number
    on(sigName: "notify::autoplay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::autoplay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::autoplay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::autoplay", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * View specific website policies.
 * 
 * WebKitWebsitePolicies allows you to configure per-page policies,
 * currently only autoplay policies are supported.
 * @class 
 */
class WebsitePolicies extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.WebsitePolicies

    static name: string

    // Constructors of WebKit-6.0.WebKit.WebsitePolicies

    constructor(config?: WebsitePolicies.ConstructorProperties) 
    /**
     * Create a new #WebKitWebsitePolicies.
     * @constructor 
     * @returns the newly created #WebKitWebsitePolicies
     */
    constructor() 
    /**
     * Create a new #WebKitWebsitePolicies.
     * @constructor 
     * @returns the newly created #WebKitWebsitePolicies
     */
    static new(): WebsitePolicies
    _init(config?: WebsitePolicies.ConstructorProperties): void
}

module WindowProperties {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of WebKit-6.0.WebKit.WindowProperties

        /**
         * Whether window will be displayed fullscreen.
         */
        fullscreen?: boolean | null
        /**
         * The size and position of the window on the screen.
         */
        geometry?: Gdk.Rectangle | null
        /**
         * Whether the locationbar should be visible for the window.
         */
        locationbar_visible?: boolean | null
        /**
         * Whether the menubar should be visible for the window.
         */
        menubar_visible?: boolean | null
        /**
         * Whether the window can be resized.
         */
        resizable?: boolean | null
        /**
         * Whether the scrollbars should be visible for the window.
         */
        scrollbars_visible?: boolean | null
        /**
         * Whether the statusbar should be visible for the window.
         */
        statusbar_visible?: boolean | null
        /**
         * Whether the toolbar should be visible for the window.
         */
        toolbar_visible?: boolean | null
    }

}

interface WindowProperties {

    // Own properties of WebKit-6.0.WebKit.WindowProperties

    /**
     * Whether window will be displayed fullscreen.
     */
    readonly fullscreen: boolean
    /**
     * The size and position of the window on the screen.
     */
    readonly geometry: Gdk.Rectangle
    /**
     * Whether the locationbar should be visible for the window.
     */
    readonly locationbarVisible: boolean
    /**
     * Whether the menubar should be visible for the window.
     */
    readonly menubarVisible: boolean
    /**
     * Whether the window can be resized.
     */
    readonly resizable: boolean
    /**
     * Whether the scrollbars should be visible for the window.
     */
    readonly scrollbarsVisible: boolean
    /**
     * Whether the statusbar should be visible for the window.
     */
    readonly statusbarVisible: boolean
    /**
     * Whether the toolbar should be visible for the window.
     */
    readonly toolbarVisible: boolean
    __gtype__: number

    // Owm methods of WebKit-6.0.WebKit.WindowProperties

    /**
     * Get whether the window should be shown in fullscreen state or not.
     * @returns %TRUE if the window should be fullscreen or %FALSE otherwise.
     */
    getFullscreen(): boolean
    /**
     * Get the geometry the window should have on the screen when shown.
     */
    getGeometry(): /* geometry */ Gdk.Rectangle
    /**
     * Get whether the window should have the locationbar visible or not.
     * @returns %TRUE if locationbar should be visible or %FALSE otherwise.
     */
    getLocationbarVisible(): boolean
    /**
     * Get whether the window should have the menubar visible or not.
     * @returns %TRUE if menubar should be visible or %FALSE otherwise.
     */
    getMenubarVisible(): boolean
    /**
     * Get whether the window should be resizable by the user or not.
     * @returns %TRUE if the window should be resizable or %FALSE otherwise.
     */
    getResizable(): boolean
    /**
     * Get whether the window should have the scrollbars visible or not.
     * @returns %TRUE if scrollbars should be visible or %FALSE otherwise.
     */
    getScrollbarsVisible(): boolean
    /**
     * Get whether the window should have the statusbar visible or not.
     * @returns %TRUE if statusbar should be visible or %FALSE otherwise.
     */
    getStatusbarVisible(): boolean
    /**
     * Get whether the window should have the toolbar visible or not.
     * @returns %TRUE if toolbar should be visible or %FALSE otherwise.
     */
    getToolbarVisible(): boolean

    // Class property signals of WebKit-6.0.WebKit.WindowProperties

    connect(sigName: "notify::fullscreen", callback: (...args: any[]) => void): number
    on(sigName: "notify::fullscreen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fullscreen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fullscreen", ...args: any[]): void
    connect(sigName: "notify::geometry", callback: (...args: any[]) => void): number
    on(sigName: "notify::geometry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::geometry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::geometry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::geometry", ...args: any[]): void
    connect(sigName: "notify::locationbar-visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::locationbar-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::locationbar-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::locationbar-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::locationbar-visible", ...args: any[]): void
    connect(sigName: "notify::menubar-visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::menubar-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::menubar-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::menubar-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::menubar-visible", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (...args: any[]) => void): number
    on(sigName: "notify::resizable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resizable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resizable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::scrollbars-visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::scrollbars-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scrollbars-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scrollbars-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scrollbars-visible", ...args: any[]): void
    connect(sigName: "notify::statusbar-visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::statusbar-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::statusbar-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::statusbar-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::statusbar-visible", ...args: any[]): void
    connect(sigName: "notify::toolbar-visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::toolbar-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::toolbar-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::toolbar-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::toolbar-visible", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class WindowProperties extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.WindowProperties

    static name: string

    // Constructors of WebKit-6.0.WebKit.WindowProperties

    constructor(config?: WindowProperties.ConstructorProperties) 
    _init(config?: WindowProperties.ConstructorProperties): void
}

interface ApplicationInfo {

    // Owm methods of WebKit-6.0.WebKit.ApplicationInfo

    /**
     * Get the name of the application.
     * 
     * If webkit_application_info_set_name() hasn't been
     * called with a valid name, this returns g_get_prgname().
     * @returns the application name
     */
    getName(): string
    /**
     * Get the application version previously set with webkit_application_info_set_version().
     */
    getVersion(): [ /* major */ number, /* minor */ number, /* micro */ number ]
    /**
     * Atomically increments the reference count of `info` by one.
     * 
     * This
     * function is MT-safe and may be called from any thread.
     * @returns The passed in #WebKitApplicationInfo
     */
    ref(): ApplicationInfo
    /**
     * Set the name of the application.
     * 
     * If not provided, or %NULL is passed,
     * g_get_prgname() will be used.
     * @param name the application name
     */
    setName(name: string): void
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
    setVersion(major: number, minor: number, micro: number): void
    /**
     * Atomically decrements the reference count of `info` by one.
     * 
     * If the
     * reference count drops to 0, all memory allocated by the #WebKitApplicationInfo is
     * released. This function is MT-safe and may be called from any
     * thread.
     */
    unref(): void
}

/**
 * Information about an application running in automation mode.
 * @record 
 */
class ApplicationInfo {

    // Own properties of WebKit-6.0.WebKit.ApplicationInfo

    static name: string

    // Constructors of WebKit-6.0.WebKit.ApplicationInfo

    /**
     * Creates a new #WebKitApplicationInfo
     * @constructor 
     * @returns the newly created #WebKitApplicationInfo.
     */
    constructor() 
    /**
     * Creates a new #WebKitApplicationInfo
     * @constructor 
     * @returns the newly created #WebKitApplicationInfo.
     */
    static new(): ApplicationInfo
}

interface AuthenticationRequestClass {

    // Own fields of WebKit-6.0.WebKit.AuthenticationRequestClass

    parentClass: GObject.ObjectClass
}

abstract class AuthenticationRequestClass {

    // Own properties of WebKit-6.0.WebKit.AuthenticationRequestClass

    static name: string
}

interface AutomationSessionClass {

    // Own fields of WebKit-6.0.WebKit.AutomationSessionClass

    parentClass: GObject.ObjectClass
}

abstract class AutomationSessionClass {

    // Own properties of WebKit-6.0.WebKit.AutomationSessionClass

    static name: string
}

interface BackForwardListClass {

    // Own fields of WebKit-6.0.WebKit.BackForwardListClass

    parentClass: GObject.ObjectClass
}

abstract class BackForwardListClass {

    // Own properties of WebKit-6.0.WebKit.BackForwardListClass

    static name: string
}

interface BackForwardListItemClass {

    // Own fields of WebKit-6.0.WebKit.BackForwardListItemClass

    parentClass: GObject.InitiallyUnownedClass
}

abstract class BackForwardListItemClass {

    // Own properties of WebKit-6.0.WebKit.BackForwardListItemClass

    static name: string
}

interface ClipboardPermissionRequestClass {

    // Own fields of WebKit-6.0.WebKit.ClipboardPermissionRequestClass

    parentClass: GObject.ObjectClass
}

abstract class ClipboardPermissionRequestClass {

    // Own properties of WebKit-6.0.WebKit.ClipboardPermissionRequestClass

    static name: string
}

interface ColorChooserRequestClass {

    // Own fields of WebKit-6.0.WebKit.ColorChooserRequestClass

    parentClass: GObject.ObjectClass
}

abstract class ColorChooserRequestClass {

    // Own properties of WebKit-6.0.WebKit.ColorChooserRequestClass

    static name: string
}

interface ContextMenuClass {

    // Own fields of WebKit-6.0.WebKit.ContextMenuClass

    parentClass: GObject.ObjectClass
}

abstract class ContextMenuClass {

    // Own properties of WebKit-6.0.WebKit.ContextMenuClass

    static name: string
}

interface ContextMenuItemClass {

    // Own fields of WebKit-6.0.WebKit.ContextMenuItemClass

    parentClass: GObject.InitiallyUnownedClass
}

abstract class ContextMenuItemClass {

    // Own properties of WebKit-6.0.WebKit.ContextMenuItemClass

    static name: string
}

interface CookieManagerClass {

    // Own fields of WebKit-6.0.WebKit.CookieManagerClass

    parentClass: GObject.ObjectClass
}

abstract class CookieManagerClass {

    // Own properties of WebKit-6.0.WebKit.CookieManagerClass

    static name: string
}

interface Credential {

    // Owm methods of WebKit-6.0.WebKit.Credential

    /**
     * Make a copy of the #WebKitCredential.
     * @returns A copy of passed in #WebKitCredential
     */
    copy(): Credential
    /**
     * Free the #WebKitCredential.
     */
    free(): void
    /**
     * Get the certificate currently held by this #WebKitCredential.
     * @returns a #GTlsCertificate, or %NULL
     */
    getCertificate(): Gio.TlsCertificate
    /**
     * Get the password currently held by this #WebKitCredential.
     * @returns The password stored in the #WebKitCredential.
     */
    getPassword(): string
    /**
     * Get the persistence mode currently held by this #WebKitCredential.
     * @returns The #WebKitCredentialPersistence stored in the #WebKitCredential.
     */
    getPersistence(): CredentialPersistence
    /**
     * Get the username currently held by this #WebKitCredential.
     * @returns The username stored in the #WebKitCredential.
     */
    getUsername(): string
    /**
     * Determine whether this credential has a password stored.
     * @returns %TRUE if the credential has a password or %FALSE otherwise.
     */
    hasPassword(): boolean
}

/**
 * Groups information used for user authentication.
 * @record 
 */
class Credential {

    // Own properties of WebKit-6.0.WebKit.Credential

    static name: string

    // Constructors of WebKit-6.0.WebKit.Credential

    /**
     * Create a new credential from the provided username, password and persistence mode.
     * @constructor 
     * @param username The username for the new credential
     * @param password The password for the new credential
     * @param persistence The #WebKitCredentialPersistence of the new credential
     * @returns A #WebKitCredential.
     */
    constructor(username: string, password: string, persistence: CredentialPersistence) 
    /**
     * Create a new credential from the provided username, password and persistence mode.
     * @constructor 
     * @param username The username for the new credential
     * @param password The password for the new credential
     * @param persistence The #WebKitCredentialPersistence of the new credential
     * @returns A #WebKitCredential.
     */
    static new(username: string, password: string, persistence: CredentialPersistence): Credential
    /**
     * Create a new credential from the `certificate` and persistence mode.
     * 
     * Note that %WEBKIT_CREDENTIAL_PERSISTENCE_PERMANENT is not supported for certificate credentials.
     * @constructor 
     * @param certificate The #GTlsCertificate, or %NULL
     * @param persistence The #WebKitCredentialPersistence of the new credential
     * @returns A #WebKitCredential.
     */
    static newForCertificate(certificate: Gio.TlsCertificate | null, persistence: CredentialPersistence): Credential
    /**
     * Create a new credential from the provided PIN and persistence mode.
     * 
     * Note that %WEBKIT_CREDENTIAL_PERSISTENCE_PERMANENT is not supported for certificate pin credentials.
     * @constructor 
     * @param pin The PIN for the new credential
     * @param persistence The #WebKitCredentialPersistence of the new credential
     * @returns A #WebKitCredential.
     */
    static newForCertificatePin(pin: string, persistence: CredentialPersistence): Credential
}

interface DeviceInfoPermissionRequestClass {

    // Own fields of WebKit-6.0.WebKit.DeviceInfoPermissionRequestClass

    parentClass: GObject.ObjectClass
}

abstract class DeviceInfoPermissionRequestClass {

    // Own properties of WebKit-6.0.WebKit.DeviceInfoPermissionRequestClass

    static name: string
}

interface DownloadClass {

    // Own fields of WebKit-6.0.WebKit.DownloadClass

    parentClass: GObject.ObjectClass
}

abstract class DownloadClass {

    // Own properties of WebKit-6.0.WebKit.DownloadClass

    static name: string
}

interface EditorStateClass {

    // Own fields of WebKit-6.0.WebKit.EditorStateClass

    parentClass: GObject.ObjectClass
}

abstract class EditorStateClass {

    // Own properties of WebKit-6.0.WebKit.EditorStateClass

    static name: string
}

interface FaviconDatabaseClass {

    // Own fields of WebKit-6.0.WebKit.FaviconDatabaseClass

    parentClass: GObject.ObjectClass
}

abstract class FaviconDatabaseClass {

    // Own properties of WebKit-6.0.WebKit.FaviconDatabaseClass

    static name: string
}

interface Feature {

    // Owm methods of WebKit-6.0.WebKit.Feature

    /**
     * Gets the category of the feature.
     * 
     * Applications which include user interface to toggle features may want
     * to use the category to group related features together.
     * @returns Feature category.
     */
    getCategory(): string
    /**
     * Gets whether the feature is enabled by default.
     * 
     * The default value may be used by applications which include user interface
     * to toggle features to restore its settings to their defaults. Note that
     * whether a feature is actually enabled must be checked with
     * [method`Settings`.get_feature_enabled].
     * @returns Whether the feature is enabled by default.
     */
    getDefaultValue(): boolean
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
    getDetails(): string | null
    /**
     * Gets a string that uniquely identifies the `feature`.
     * @returns The identifier string for the feature.
     */
    getIdentifier(): string
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
    getName(): string | null
    /**
     * Gets the status of the feature.
     * @returns Feature status.
     */
    getStatus(): FeatureStatus
    /**
     * Atomically acquires a reference on the given `feature`.
     * 
     * This function is MT-safe and may be called from any thread.
     * @returns The same @feature with an additional reference.
     */
    ref(): Feature
    /**
     * Atomically releases a reference on the given `feature`.
     * 
     * If the reference was the last, the resources associated to the
     * `feature` are freed. This function is MT-safe and may be called from
     * any thread.
     */
    unref(): void
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
 * @record 
 */
class Feature {

    // Own properties of WebKit-6.0.WebKit.Feature

    static name: string
}

interface FeatureList {

    // Owm methods of WebKit-6.0.WebKit.FeatureList

    /**
     * Gets a feature given its index.
     * @param index index of the feature
     * @returns The feature at @index.
     */
    get(index: number): Feature
    /**
     * Gets the number of elements in the feature list.
     * @returns number of elements. Since 2.42
     */
    getLength(): number
    /**
     * Atomically acquires a reference on the given `feature_list`.
     * 
     * This function is MT-safe and may be called from any thread.
     * @returns The same @feature_list with an additional reference.
     */
    ref(): FeatureList
    /**
     * Atomically releases a reference on the given `feature_list`.
     * 
     * If the reference was the last, the resources associated to the
     * `feature_list` are freed. This function is MT-safe and may be called
     * from any thread.
     */
    unref(): void
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
 * @record 
 */
class FeatureList {

    // Own properties of WebKit-6.0.WebKit.FeatureList

    static name: string
}

interface FileChooserRequestClass {

    // Own fields of WebKit-6.0.WebKit.FileChooserRequestClass

    parentClass: GObject.ObjectClass
}

abstract class FileChooserRequestClass {

    // Own properties of WebKit-6.0.WebKit.FileChooserRequestClass

    static name: string
}

interface FindControllerClass {

    // Own fields of WebKit-6.0.WebKit.FindControllerClass

    parentClass: GObject.ObjectClass
}

abstract class FindControllerClass {

    // Own properties of WebKit-6.0.WebKit.FindControllerClass

    static name: string
}

interface FormSubmissionRequestClass {

    // Own fields of WebKit-6.0.WebKit.FormSubmissionRequestClass

    parentClass: GObject.ObjectClass
}

abstract class FormSubmissionRequestClass {

    // Own properties of WebKit-6.0.WebKit.FormSubmissionRequestClass

    static name: string
}

interface GeolocationManagerClass {

    // Own fields of WebKit-6.0.WebKit.GeolocationManagerClass

    parentClass: GObject.ObjectClass
}

abstract class GeolocationManagerClass {

    // Own properties of WebKit-6.0.WebKit.GeolocationManagerClass

    static name: string
}

interface GeolocationPermissionRequestClass {

    // Own fields of WebKit-6.0.WebKit.GeolocationPermissionRequestClass

    parentClass: GObject.ObjectClass
}

abstract class GeolocationPermissionRequestClass {

    // Own properties of WebKit-6.0.WebKit.GeolocationPermissionRequestClass

    static name: string
}

interface GeolocationPosition {

    // Owm methods of WebKit-6.0.WebKit.GeolocationPosition

    /**
     * Make a copy of the #WebKitGeolocationPosition.
     * @returns a copy of @position
     */
    copy(): GeolocationPosition
    /**
     * Free the #WebKitGeolocationPosition
     */
    free(): void
    /**
     * Set the `position` altitude.
     * @param altitude altitude in meters
     */
    setAltitude(altitude: number): void
    /**
     * Set the accuracy of `position` altitude.
     * @param altitudeAccuracy accuracy of position altitude in meters
     */
    setAltitudeAccuracy(altitudeAccuracy: number): void
    /**
     * Set the `position` heading.
     * 
     * Set the `position` heading, as a positive angle between the direction of movement and the North
     * direction, in clockwise direction.
     * @param heading heading in degrees
     */
    setHeading(heading: number): void
    /**
     * Set the `position` speed.
     * @param speed speed in meters per second
     */
    setSpeed(speed: number): void
    /**
     * Set the `position` timestamp.
     * 
     * By default it's the time when the `position` was created.
     * @param timestamp timestamp in seconds since the epoch, or 0 to use current time
     */
    setTimestamp(timestamp: number): void
}

/**
 * An opaque struct to provide position updates to a #WebKitGeolocationManager.
 * 
 * WebKitGeolocationPosition is an opaque struct used to provide position updates to a
 * #WebKitGeolocationManager using webkit_geolocation_manager_update_position().
 * @record 
 */
class GeolocationPosition {

    // Own properties of WebKit-6.0.WebKit.GeolocationPosition

    static name: string

    // Constructors of WebKit-6.0.WebKit.GeolocationPosition

    /**
     * Create a new #WebKitGeolocationPosition.
     * @constructor 
     * @param latitude a valid latitude in degrees
     * @param longitude a valid longitude in degrees
     * @param accuracy accuracy of location in meters
     * @returns a newly created #WebKitGeolocationPosition
     */
    constructor(latitude: number, longitude: number, accuracy: number) 
    /**
     * Create a new #WebKitGeolocationPosition.
     * @constructor 
     * @param latitude a valid latitude in degrees
     * @param longitude a valid longitude in degrees
     * @param accuracy accuracy of location in meters
     * @returns a newly created #WebKitGeolocationPosition
     */
    static new(latitude: number, longitude: number, accuracy: number): GeolocationPosition
}

interface HitTestResultClass {

    // Own fields of WebKit-6.0.WebKit.HitTestResultClass

    parentClass: GObject.ObjectClass
}

abstract class HitTestResultClass {

    // Own properties of WebKit-6.0.WebKit.HitTestResultClass

    static name: string
}

interface ITPFirstParty {

    // Owm methods of WebKit-6.0.WebKit.ITPFirstParty

    /**
     * Get the domain name of `itp_first_party`.
     * @returns the domain name
     */
    getDomain(): string
    /**
     * Get the last time a #WebKitITPThirdParty has been seen under `itp_first_party`.
     * 
     * Each `WebKitITPFirstParty` is created by webkit_itp_third_party_get_first_parties() and
     * therefore corresponds to exactly one #WebKitITPThirdParty.
     * @returns the last update time as a #GDateTime
     */
    getLastUpdateTime(): GLib.DateTime
    /**
     * Get whether `itp_first_party` has granted website data access to its #WebKitITPThirdParty.
     * 
     * Each `WebKitITPFirstParty` is created by webkit_itp_third_party_get_first_parties() and
     * therefore corresponds to exactly one #WebKitITPThirdParty.
     * @returns %TRUE if website data access has been granted, or %FALSE otherwise
     */
    getWebsiteDataAccessAllowed(): boolean
    /**
     * Atomically increments the reference count of `itp_first_party` by one.
     * 
     * This function is MT-safe and may be called from any thread.
     * @returns The passed #WebKitITPFirstParty
     */
    ref(): ITPFirstParty
    /**
     * Atomically decrements the reference count of `itp_first_party` by one.
     * 
     * If the reference count drops to 0, all memory allocated by
     * #WebKitITPFirstParty is released. This function is MT-safe and may be
     * called from any thread.
     */
    unref(): void
}

/**
 * Describes a first party origin.
 * @record 
 */
class ITPFirstParty {

    // Own properties of WebKit-6.0.WebKit.ITPFirstParty

    static name: string
}

interface ITPThirdParty {

    // Owm methods of WebKit-6.0.WebKit.ITPThirdParty

    /**
     * Get the domain name of `itp_third_party`.
     * @returns the domain name
     */
    getDomain(): string
    /**
     * Get the list of #WebKitITPFirstParty under which `itp_third_party` has been seen.
     * @returns a #GList of #WebKitITPFirstParty
     */
    getFirstParties(): ITPFirstParty[]
    /**
     * Atomically increments the reference count of `itp_third_party` by one.
     * 
     * This function is MT-safe and may be called from any thread.
     * @returns The passed #WebKitITPThirdParty
     */
    ref(): ITPThirdParty
    /**
     * Atomically decrements the reference count of `itp_third_party` by one.
     * 
     * If the reference count drops to 0, all memory allocated by
     * #WebKitITPThirdParty is released. This function is MT-safe and may be
     * called from any thread.
     */
    unref(): void
}

/**
 * Describes a third party origin.
 * @record 
 */
class ITPThirdParty {

    // Own properties of WebKit-6.0.WebKit.ITPThirdParty

    static name: string
}

interface InputMethodContextClass {

    // Own fields of WebKit-6.0.WebKit.InputMethodContextClass

    parentClass: GObject.ObjectClass
    preeditStarted: (context: InputMethodContext) => void
    preeditChanged: (context: InputMethodContext) => void
    preeditFinished: (context: InputMethodContext) => void
    committed: (context: InputMethodContext, text: string) => void
    deleteSurrounding: (context: InputMethodContext, offset: number, nChars: number) => void
    setEnablePreedit: (context: InputMethodContext, enabled: boolean) => void
    getPreedit: (context: InputMethodContext) => [ /* text */ string | null, /* underlines */ InputMethodUnderline[] | null, /* cursorOffset */ number | null ]
    filterKeyEvent: (context: InputMethodContext, keyEvent: Gdk.Event) => boolean
    notifyFocusIn: (context: InputMethodContext) => void
    notifyFocusOut: (context: InputMethodContext) => void
    notifyCursorArea: (context: InputMethodContext, x: number, y: number, width: number, height: number) => void
    notifySurrounding: (context: InputMethodContext, text: string, length: number, cursorIndex: number, selectionIndex: number) => void
    reset: (context: InputMethodContext) => void
}

abstract class InputMethodContextClass {

    // Own properties of WebKit-6.0.WebKit.InputMethodContextClass

    static name: string
}

interface InputMethodContextPrivate {
}

class InputMethodContextPrivate {

    // Own properties of WebKit-6.0.WebKit.InputMethodContextPrivate

    static name: string
}

interface InputMethodUnderline {

    // Owm methods of WebKit-6.0.WebKit.InputMethodUnderline

    /**
     * Make a copy of the #WebKitInputMethodUnderline.
     * @returns A copy of passed in #WebKitInputMethodUnderline
     */
    copy(): InputMethodUnderline
    /**
     * Free the #WebKitInputMethodUnderline.
     */
    free(): void
    /**
     * Set the color of the underline.
     * 
     * If `rgba` is %NULL the foreground text color will be used
     * for the underline too.
     * @param rgba a #GdkRGBA or %NULL
     */
    setColor(rgba: Gdk.RGBA | null): void
}

/**
 * Range of text in an preedit string to be shown underlined.
 * @record 
 */
class InputMethodUnderline {

    // Own properties of WebKit-6.0.WebKit.InputMethodUnderline

    static name: string

    // Constructors of WebKit-6.0.WebKit.InputMethodUnderline

    /**
     * Create a new #WebKitInputMethodUnderline for the given range in preedit string
     * @constructor 
     * @param startOffset the start offset in preedit string
     * @param endOffset the end offset in preedit string
     * @returns A newly created #WebKitInputMethodUnderline
     */
    constructor(startOffset: number, endOffset: number) 
    /**
     * Create a new #WebKitInputMethodUnderline for the given range in preedit string
     * @constructor 
     * @param startOffset the start offset in preedit string
     * @param endOffset the end offset in preedit string
     * @returns A newly created #WebKitInputMethodUnderline
     */
    static new(startOffset: number, endOffset: number): InputMethodUnderline
}

interface MediaKeySystemPermissionRequestClass {

    // Own fields of WebKit-6.0.WebKit.MediaKeySystemPermissionRequestClass

    parentClass: GObject.ObjectClass
}

abstract class MediaKeySystemPermissionRequestClass {

    // Own properties of WebKit-6.0.WebKit.MediaKeySystemPermissionRequestClass

    static name: string
}

interface MemoryPressureSettings {

    // Owm methods of WebKit-6.0.WebKit.MemoryPressureSettings

    /**
     * Make a copy of `settings`.
     * @returns A copy of of the passed #WebKitMemoryPressureSettings.
     */
    copy(): MemoryPressureSettings
    /**
     * Free the #WebKitMemoryPressureSettings.
     */
    free(): void
    /**
     * Gets the conservative memory usage threshold.
     * @returns value in the `(0, 1)` range.
     */
    getConservativeThreshold(): number
    /**
     * Gets the kill memory usage threshold.
     * @returns positive value, can be zero.
     */
    getKillThreshold(): number
    /**
     * Gets the memory usage limit.
     * @returns current value, in megabytes.
     */
    getMemoryLimit(): number
    /**
     * Gets the interval at which memory usage is checked.
     * @returns current interval value, in seconds.
     */
    getPollInterval(): number
    /**
     * Gets the strict memory usage threshold.
     * @returns value in the `(0, 1)` range.
     */
    getStrictThreshold(): number
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
    setConservativeThreshold(value: number): void
    /**
     * Sets `value` as the fraction of the defined memory limit where the process will be
     * killed.
     * 
     * The threshold must be a value bigger or equal to 0. A value of 0 means that the process
     * is never killed. If the threshold is not 0, then it must be bigger than the strict threshold
     * defined in `settings`. The threshold can also have values bigger than 1. The default value is 0.
     * @param value fraction of the memory limit where the process will be killed because   of excessive memory usage.
     */
    setKillThreshold(value: number): void
    /**
     * Sets `memory_limit` the memory limit value to `settings`.
     * 
     * The default value is the system's RAM size with a maximum of 3GB.
     * @param memoryLimit amount of memory (in MB) that the process is allowed to use.
     */
    setMemoryLimit(memoryLimit: number): void
    /**
     * Sets `value` as the poll interval used by `settings`.
     * 
     * The poll interval value must be bigger than 0. The default value is 30 seconds.
     * @param value period (in seconds) between memory usage measurements.
     */
    setPollInterval(value: number): void
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
    setStrictThreshold(value: number): void
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
 * @record 
 */
class MemoryPressureSettings {

    // Own properties of WebKit-6.0.WebKit.MemoryPressureSettings

    static name: string

    // Constructors of WebKit-6.0.WebKit.MemoryPressureSettings

    /**
     * Create a new #WebKitMemoryPressureSettings with the default values.
     * @constructor 
     * @returns A new #WebKitMemoryPressureSettings instance filled with the default values.
     */
    constructor() 
    /**
     * Create a new #WebKitMemoryPressureSettings with the default values.
     * @constructor 
     * @returns A new #WebKitMemoryPressureSettings instance filled with the default values.
     */
    static new(): MemoryPressureSettings
}

interface NavigationAction {

    // Owm methods of WebKit-6.0.WebKit.NavigationAction

    /**
     * Make a copy of `navigation`.
     * @returns A copy of passed in #WebKitNavigationAction
     */
    copy(): NavigationAction
    /**
     * Free the #WebKitNavigationAction
     */
    free(): void
    /**
     * Gets the `navigation` target frame name. For example if navigation was triggered by clicking a
     * link with a target attribute equal to "_blank", this will return the value of that attribute.
     * In all other cases this function will return %NULL.
     * @returns The name of the new frame this navigation action targets or %NULL
     */
    getFrameName(): string | null
    /**
     * Return the modifier keys.
     * 
     * Return a bitmask of #GdkModifierType values describing the modifier keys that were in effect
     * when the navigation was requested
     * @returns the modifier keys
     */
    getModifiers(): number
    /**
     * Return the number of the mouse button that triggered the navigation.
     * 
     * Return the number of the mouse button that triggered the navigation, or 0 if
     * the navigation was not started by a mouse event.
     * @returns the mouse button number or 0
     */
    getMouseButton(): number
    /**
     * Return the type of action that triggered the navigation.
     * @returns a #WebKitNavigationType
     */
    getNavigationType(): NavigationType
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
    getRequest(): URIRequest
    /**
     * Returns whether the `navigation` was redirected.
     * @returns %TRUE if the original navigation was redirected, %FALSE otherwise.
     */
    isRedirect(): boolean
    /**
     * Return whether the navigation was triggered by a user gesture like a mouse click.
     * @returns whether navigation action is a user gesture
     */
    isUserGesture(): boolean
}

/**
 * Provides details about interaction resulting in a resource load.
 * @record 
 */
class NavigationAction {

    // Own properties of WebKit-6.0.WebKit.NavigationAction

    static name: string
}

interface NavigationPolicyDecisionClass {

    // Own fields of WebKit-6.0.WebKit.NavigationPolicyDecisionClass

    parentClass: PolicyDecisionClass
}

abstract class NavigationPolicyDecisionClass {

    // Own properties of WebKit-6.0.WebKit.NavigationPolicyDecisionClass

    static name: string
}

interface NetworkProxySettings {

    // Owm methods of WebKit-6.0.WebKit.NetworkProxySettings

    /**
     * Adds a URI-scheme-specific proxy.
     * 
     * URIs whose scheme matches `uri_scheme` will be proxied via `proxy_uri`.
     * As with the default proxy URI, if `proxy_uri` starts with "socks://", it will be treated as referring to
     * all three of the socks5, socks4a, and socks4 proxy types.
     * @param scheme the URI scheme to add a proxy for
     * @param proxyUri the proxy URI to use for `uri_scheme`
     */
    addProxyForScheme(scheme: string, proxyUri: string): void
    /**
     * Make a copy of the #WebKitNetworkProxySettings.
     * @returns A copy of passed in #WebKitNetworkProxySettings
     */
    copy(): NetworkProxySettings
    /**
     * Free the #WebKitNetworkProxySettings.
     */
    free(): void
}

/**
 * Configures network proxies.
 * 
 * WebKitNetworkProxySettings can be used to provide a custom proxy configuration
 * to a #WebKitWebContext. You need to call webkit_web_context_set_network_proxy_settings()
 * with %WEBKIT_NETWORK_PROXY_MODE_CUSTOM and a WebKitNetworkProxySettings.
 * @record 
 */
class NetworkProxySettings {

    // Own properties of WebKit-6.0.WebKit.NetworkProxySettings

    static name: string

    // Constructors of WebKit-6.0.WebKit.NetworkProxySettings

    /**
     * Create a new #WebKitNetworkProxySettings with the given `default_proxy_uri` and `ignore_hosts`.
     * 
     * The default proxy URI will be used for any URI that doesn't match `ignore_hosts,` and doesn't match any
     * of the schemes added with webkit_network_proxy_settings_add_proxy_for_scheme().
     * If `default_proxy_uri` starts with "socks://", it will be treated as referring to all three of the
     * socks5, socks4a, and socks4 proxy types.
     * 
     * `ignore_hosts` is a list of hostnames and IP addresses that the resolver should allow direct connections to.
     * Entries can be in one of 4 formats:
     * <itemizedlist>
     * <listitem><para>
     * A hostname, such as "example.com", ".example.com", or "*.example.com", any of which match "example.com" or
     * any subdomain of it.
     * </para></listitem>
     * <listitem><para>
     * An IPv4 or IPv6 address, such as "192.168.1.1", which matches only that address.
     * </para></listitem>
     * <listitem><para>
     * A hostname or IP address followed by a port, such as "example.com:80", which matches whatever the hostname or IP
     * address would match, but only for URLs with the (explicitly) indicated port. In the case of an IPv6 address, the address
     * part must appear in brackets: "[::1]:443"
     * </para></listitem>
     * <listitem><para>
     * An IP address range, given by a base address and prefix length, such as "fe80::/10", which matches any address in that range.
     * </para></listitem>
     * </itemizedlist>
     * 
     * Note that when dealing with Unicode hostnames, the matching is done against the ASCII form of the name.
     * Also note that hostname exclusions apply only to connections made to hosts identified by name, and IP address exclusions apply only
     * to connections made to hosts identified by address. That is, if example.com has an address of 192.168.1.1, and `ignore_hosts`
     * contains only "192.168.1.1", then a connection to "example.com" will use the proxy, and a connection to 192.168.1.1" will not.
     * @constructor 
     * @param defaultProxyUri the default proxy URI to use, or %NULL.
     * @param ignoreHosts an optional list of hosts/IP addresses to not use a proxy for.
     * @returns A new #WebKitNetworkProxySettings.
     */
    constructor(defaultProxyUri: string | null, ignoreHosts: string[] | null) 
    /**
     * Create a new #WebKitNetworkProxySettings with the given `default_proxy_uri` and `ignore_hosts`.
     * 
     * The default proxy URI will be used for any URI that doesn't match `ignore_hosts,` and doesn't match any
     * of the schemes added with webkit_network_proxy_settings_add_proxy_for_scheme().
     * If `default_proxy_uri` starts with "socks://", it will be treated as referring to all three of the
     * socks5, socks4a, and socks4 proxy types.
     * 
     * `ignore_hosts` is a list of hostnames and IP addresses that the resolver should allow direct connections to.
     * Entries can be in one of 4 formats:
     * <itemizedlist>
     * <listitem><para>
     * A hostname, such as "example.com", ".example.com", or "*.example.com", any of which match "example.com" or
     * any subdomain of it.
     * </para></listitem>
     * <listitem><para>
     * An IPv4 or IPv6 address, such as "192.168.1.1", which matches only that address.
     * </para></listitem>
     * <listitem><para>
     * A hostname or IP address followed by a port, such as "example.com:80", which matches whatever the hostname or IP
     * address would match, but only for URLs with the (explicitly) indicated port. In the case of an IPv6 address, the address
     * part must appear in brackets: "[::1]:443"
     * </para></listitem>
     * <listitem><para>
     * An IP address range, given by a base address and prefix length, such as "fe80::/10", which matches any address in that range.
     * </para></listitem>
     * </itemizedlist>
     * 
     * Note that when dealing with Unicode hostnames, the matching is done against the ASCII form of the name.
     * Also note that hostname exclusions apply only to connections made to hosts identified by name, and IP address exclusions apply only
     * to connections made to hosts identified by address. That is, if example.com has an address of 192.168.1.1, and `ignore_hosts`
     * contains only "192.168.1.1", then a connection to "example.com" will use the proxy, and a connection to 192.168.1.1" will not.
     * @constructor 
     * @param defaultProxyUri the default proxy URI to use, or %NULL.
     * @param ignoreHosts an optional list of hosts/IP addresses to not use a proxy for.
     * @returns A new #WebKitNetworkProxySettings.
     */
    static new(defaultProxyUri: string | null, ignoreHosts: string[] | null): NetworkProxySettings
}

interface NetworkSessionClass {

    // Own fields of WebKit-6.0.WebKit.NetworkSessionClass

    parentClass: GObject.ObjectClass
}

abstract class NetworkSessionClass {

    // Own properties of WebKit-6.0.WebKit.NetworkSessionClass

    static name: string
}

interface NotificationClass {

    // Own fields of WebKit-6.0.WebKit.NotificationClass

    parentClass: GObject.ObjectClass
}

abstract class NotificationClass {

    // Own properties of WebKit-6.0.WebKit.NotificationClass

    static name: string
}

interface NotificationPermissionRequestClass {

    // Own fields of WebKit-6.0.WebKit.NotificationPermissionRequestClass

    parentClass: GObject.ObjectClass
}

abstract class NotificationPermissionRequestClass {

    // Own properties of WebKit-6.0.WebKit.NotificationPermissionRequestClass

    static name: string
}

interface OptionMenuClass {

    // Own fields of WebKit-6.0.WebKit.OptionMenuClass

    parentClass: GObject.ObjectClass
}

abstract class OptionMenuClass {

    // Own properties of WebKit-6.0.WebKit.OptionMenuClass

    static name: string
}

interface OptionMenuItem {

    // Owm methods of WebKit-6.0.WebKit.OptionMenuItem

    /**
     * Make a copy of the #WebKitOptionMenuItem.
     * @returns A copy of passed in #WebKitOptionMenuItem
     */
    copy(): OptionMenuItem
    /**
     * Free the #WebKitOptionMenuItem.
     */
    free(): void
    /**
     * Get the label of a #WebKitOptionMenuItem.
     * @returns The label of @item.
     */
    getLabel(): string
    /**
     * Get the tooltip of a #WebKitOptionMenuItem.
     * @returns The tooltip of @item, or %NULL.
     */
    getTooltip(): string
    /**
     * Whether a #WebKitOptionMenuItem is enabled.
     * @returns %TRUE if the @item is enabled or %FALSE otherwise.
     */
    isEnabled(): boolean
    /**
     * Whether a #WebKitOptionMenuItem is a group child.
     * @returns %TRUE if the @item is a group child or %FALSE otherwise.
     */
    isGroupChild(): boolean
    /**
     * Whether a #WebKitOptionMenuItem is a group label.
     * @returns %TRUE if the @item is a group label or %FALSE otherwise.
     */
    isGroupLabel(): boolean
    /**
     * Whether a #WebKitOptionMenuItem is the currently selected one.
     * @returns %TRUE if the @item is selected or %FALSE otherwise.
     */
    isSelected(): boolean
}

/**
 * One item of a #WebKitOptionMenu.
 * 
 * The #WebKitOptionMenu is composed of WebKitOptionMenuItem<!-- -->s.
 * A WebKitOptionMenuItem always has a label and can contain a tooltip text.
 * You can use the WebKitOptionMenuItem of a #WebKitOptionMenu to build your
 * own menus.
 * @record 
 */
class OptionMenuItem {

    // Own properties of WebKit-6.0.WebKit.OptionMenuItem

    static name: string
}

interface PermissionRequestInterface {

    // Own fields of WebKit-6.0.WebKit.PermissionRequestInterface

    parentInterface: GObject.TypeInterface
    allow: (request: PermissionRequest) => void
    deny: (request: PermissionRequest) => void
}

abstract class PermissionRequestInterface {

    // Own properties of WebKit-6.0.WebKit.PermissionRequestInterface

    static name: string
}

interface PermissionStateQuery {

    // Owm methods of WebKit-6.0.WebKit.PermissionStateQuery

    /**
     * Notify the web-engine of the selected permission state for the given query. This function should
     * only be called as a response to the `WebKitWebView::query-permission-state` signal.
     * @param state a #WebKitPermissionState
     */
    finish(state: PermissionState): void
    /**
     * Get the permission name for which access is being queried.
     * @returns the permission name for @query
     */
    getName(): string
    /**
     * Get the permission origin for which access is being queried.
     * @returns A #WebKitSecurityOrigin representing the origin from which the @query was emitted.
     */
    getSecurityOrigin(): SecurityOrigin
    /**
     * Atomically increments the reference count of `query` by one.
     * 
     * This function is MT-safe and may be called from any thread.
     * @returns The passed #WebKitPermissionStateQuery
     */
    ref(): PermissionStateQuery
    /**
     * Atomically decrements the reference count of `query` by one.
     * 
     * If the reference count drops to 0, all memory allocated by #WebKitPermissionStateQuery is
     * released. This function is MT-safe and may be called from any thread.
     */
    unref(): void
}

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
 * @record 
 */
class PermissionStateQuery {

    // Own properties of WebKit-6.0.WebKit.PermissionStateQuery

    static name: string
}

interface PointerLockPermissionRequestClass {

    // Own fields of WebKit-6.0.WebKit.PointerLockPermissionRequestClass

    parentClass: GObject.ObjectClass
}

abstract class PointerLockPermissionRequestClass {

    // Own properties of WebKit-6.0.WebKit.PointerLockPermissionRequestClass

    static name: string
}

interface PolicyDecisionClass {

    // Own fields of WebKit-6.0.WebKit.PolicyDecisionClass

    parentClass: GObject.ObjectClass
}

abstract class PolicyDecisionClass {

    // Own properties of WebKit-6.0.WebKit.PolicyDecisionClass

    static name: string
}

interface PolicyDecisionPrivate {
}

class PolicyDecisionPrivate {

    // Own properties of WebKit-6.0.WebKit.PolicyDecisionPrivate

    static name: string
}

interface PrintOperationClass {

    // Own fields of WebKit-6.0.WebKit.PrintOperationClass

    parentClass: GObject.ObjectClass
}

abstract class PrintOperationClass {

    // Own properties of WebKit-6.0.WebKit.PrintOperationClass

    static name: string
}

interface ResponsePolicyDecisionClass {

    // Own fields of WebKit-6.0.WebKit.ResponsePolicyDecisionClass

    parentClass: PolicyDecisionClass
}

abstract class ResponsePolicyDecisionClass {

    // Own properties of WebKit-6.0.WebKit.ResponsePolicyDecisionClass

    static name: string
}

interface ScriptDialog {

    // Owm methods of WebKit-6.0.WebKit.ScriptDialog

    /**
     * Close `dialog`.
     * 
     * When handling a #WebKitScriptDialog asynchronously (webkit_script_dialog_ref()
     * was called in #WebKitWebView::script-dialog callback), this function needs to be called to notify
     * that we are done with the script dialog. The dialog will be closed on destruction if this function
     * hasn't been called before.
     */
    close(): void
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
    confirmSetConfirmed(confirmed: boolean): void
    /**
     * Get the dialog type of a #WebKitScriptDialog.
     * @returns the #WebKitScriptDialogType of @dialog
     */
    getDialogType(): ScriptDialogType
    /**
     * Get the message of a #WebKitScriptDialog.
     * @returns the message of @dialog.
     */
    getMessage(): string
    /**
     * Get the default text of a #WebKitScriptDialog of type %WEBKIT_SCRIPT_DIALOG_PROMPT.
     * 
     * It's an error to use this method with a #WebKitScriptDialog that is not of type
     * %WEBKIT_SCRIPT_DIALOG_PROMPT.
     * @returns the default text of @dialog
     */
    promptGetDefaultText(): string
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
    promptSetText(text: string): void
    /**
     * Atomically increments the reference count of `dialog` by one.
     * 
     * This
     * function is MT-safe and may be called from any thread.
     * @returns The passed in #WebKitScriptDialog
     */
    ref(): ScriptDialog
    /**
     * Atomically decrements the reference count of `dialog` by one.
     * 
     * If the
     * reference count drops to 0, all memory allocated by the #WebKitScriptdialog is
     * released. This function is MT-safe and may be called from any
     * thread.
     */
    unref(): void
}

/**
 * Carries details to be shown in user-facing dialogs.
 * @record 
 */
class ScriptDialog {

    // Own properties of WebKit-6.0.WebKit.ScriptDialog

    static name: string
}

interface ScriptMessageReply {

    // Owm methods of WebKit-6.0.WebKit.ScriptMessageReply

    /**
     * Atomically increments the reference count of `script_message_reply` by one.
     * @returns the @script_message_reply passed in.
     */
    ref(): ScriptMessageReply
    /**
     * Reply to a script message with an error message.
     * @param errorMessage An error message to return as specified by the user's script message
     */
    returnErrorMessage(errorMessage: string): void
    /**
     * Reply to a script message with a value.
     * 
     * This function can be called twice for passing the reply value in.
     * @param replyValue Reply value of the provided script message
     */
    returnValue(replyValue: JavaScriptCore.Value): void
    /**
     * Atomically decrements the reference count of `script_message_reply` by one.
     * 
     * If the reference count drops to 0, all the memory allocated by the
     * #WebKitScriptMessageReply is released. This function is MT-safe and may
     * be called from any thread.
     */
    unref(): void
}

/**
 * A reply for a script message received.
 * If no reply has been sent by the user, an automatically generated reply with
 * undefined value with be sent.
 * @record 
 */
class ScriptMessageReply {

    // Own properties of WebKit-6.0.WebKit.ScriptMessageReply

    static name: string
}

interface SecurityManagerClass {

    // Own fields of WebKit-6.0.WebKit.SecurityManagerClass

    parentClass: GObject.ObjectClass
}

abstract class SecurityManagerClass {

    // Own properties of WebKit-6.0.WebKit.SecurityManagerClass

    static name: string
}

interface SecurityOrigin {

    // Owm methods of WebKit-6.0.WebKit.SecurityOrigin

    /**
     * Gets the hostname of `origin`.
     * 
     * It is reasonable for this to be %NULL
     * if its protocol does not require a host component.
     * @returns The host of the #WebKitSecurityOrigin
     */
    getHost(): string | null
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
    getPort(): number
    /**
     * Gets the protocol of `origin`.
     * @returns The protocol of the #WebKitSecurityOrigin
     */
    getProtocol(): string | null
    /**
     * Atomically increments the reference count of `origin` by one.
     * 
     * This function is MT-safe and may be called from any thread.
     * @returns The passed #WebKitSecurityOrigin
     */
    ref(): SecurityOrigin
    /**
     * Gets a string representation of `origin`.
     * 
     * The string representation
     * is a valid URI with only protocol, host, and port components, or
     * %NULL.
     * @returns a URI representing @origin.
     */
    toString(): string | null
    /**
     * Atomically decrements the reference count of `origin` by one.
     * 
     * If the reference count drops to 0, all memory allocated by
     * #WebKitSecurityOrigin is released. This function is MT-safe and may be
     * called from any thread.
     */
    unref(): void
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
 * @record 
 */
class SecurityOrigin {

    // Own properties of WebKit-6.0.WebKit.SecurityOrigin

    static name: string

    // Constructors of WebKit-6.0.WebKit.SecurityOrigin

    /**
     * Create a new security origin from the provided protocol, host and
     * port.
     * @constructor 
     * @param protocol The protocol for the new origin
     * @param host The host for the new origin
     * @param port The port number for the new origin, or 0 to indicate the        default port for `protocol`
     * @returns A #WebKitSecurityOrigin.
     */
    constructor(protocol: string, host: string, port: number) 
    /**
     * Create a new security origin from the provided protocol, host and
     * port.
     * @constructor 
     * @param protocol The protocol for the new origin
     * @param host The host for the new origin
     * @param port The port number for the new origin, or 0 to indicate the        default port for `protocol`
     * @returns A #WebKitSecurityOrigin.
     */
    static new(protocol: string, host: string, port: number): SecurityOrigin
    /**
     * Create a new security origin from the provided.
     * 
     * Create a new security origin from the provided URI. Components of
     * `uri` other than protocol, host, and port do not affect the created
     * #WebKitSecurityOrigin.
     * @constructor 
     * @param uri The URI for the new origin
     * @returns A #WebKitSecurityOrigin.
     */
    static newForUri(uri: string): SecurityOrigin
}

interface SettingsClass {

    // Own fields of WebKit-6.0.WebKit.SettingsClass

    parentClass: GObject.ObjectClass
}

abstract class SettingsClass {

    // Own properties of WebKit-6.0.WebKit.SettingsClass

    static name: string
}

interface URIRequestClass {

    // Own fields of WebKit-6.0.WebKit.URIRequestClass

    parentClass: GObject.ObjectClass
}

abstract class URIRequestClass {

    // Own properties of WebKit-6.0.WebKit.URIRequestClass

    static name: string
}

interface URIResponseClass {

    // Own fields of WebKit-6.0.WebKit.URIResponseClass

    parentClass: GObject.ObjectClass
}

abstract class URIResponseClass {

    // Own properties of WebKit-6.0.WebKit.URIResponseClass

    static name: string
}

interface URISchemeRequestClass {

    // Own fields of WebKit-6.0.WebKit.URISchemeRequestClass

    parentClass: GObject.ObjectClass
}

abstract class URISchemeRequestClass {

    // Own properties of WebKit-6.0.WebKit.URISchemeRequestClass

    static name: string
}

interface URISchemeResponseClass {

    // Own fields of WebKit-6.0.WebKit.URISchemeResponseClass

    parentClass: GObject.ObjectClass
}

abstract class URISchemeResponseClass {

    // Own properties of WebKit-6.0.WebKit.URISchemeResponseClass

    static name: string
}

interface UserContentFilter {

    // Owm methods of WebKit-6.0.WebKit.UserContentFilter

    /**
     * Obtain the identifier previously used to save the `user_content_filter`.
     * 
     * Obtain the identifier previously used to save the `user_content_filter` in the
     * #WebKitUserContentFilterStore.
     * @returns the identifier for the filter
     */
    getIdentifier(): string
    /**
     * Atomically increments the reference count of `user_content_filter` by one.
     * 
     * This function is MT-safe and may be called from any thread.
     * @returns the @user_content_filter passed in.
     */
    ref(): UserContentFilter
    /**
     * Atomically decrements the reference count of `user_content_filter` by one.
     * 
     * If the reference count drops to 0, all the memory allocated by the
     * #WebKitUserContentFilter is released. This function is MT-safe and may
     * be called from any thread.
     */
    unref(): void
}

/**
 * A compiled set of rules which applied to resource loads.
 * @record 
 */
class UserContentFilter {

    // Own properties of WebKit-6.0.WebKit.UserContentFilter

    static name: string
}

interface UserContentFilterStoreClass {

    // Own fields of WebKit-6.0.WebKit.UserContentFilterStoreClass

    parentClass: GObject.ObjectClass
}

abstract class UserContentFilterStoreClass {

    // Own properties of WebKit-6.0.WebKit.UserContentFilterStoreClass

    static name: string
}

interface UserContentManagerClass {

    // Own fields of WebKit-6.0.WebKit.UserContentManagerClass

    parentClass: GObject.ObjectClass
}

abstract class UserContentManagerClass {

    // Own properties of WebKit-6.0.WebKit.UserContentManagerClass

    static name: string
}

interface UserMediaPermissionRequestClass {

    // Own fields of WebKit-6.0.WebKit.UserMediaPermissionRequestClass

    parentClass: GObject.ObjectClass
}

abstract class UserMediaPermissionRequestClass {

    // Own properties of WebKit-6.0.WebKit.UserMediaPermissionRequestClass

    static name: string
}

interface UserMessageClass {

    // Own fields of WebKit-6.0.WebKit.UserMessageClass

    parentClass: GObject.InitiallyUnownedClass
}

abstract class UserMessageClass {

    // Own properties of WebKit-6.0.WebKit.UserMessageClass

    static name: string
}

interface UserScript {

    // Owm methods of WebKit-6.0.WebKit.UserScript

    /**
     * Atomically increments the reference count of `user_script` by one.
     * 
     * This function is MT-safe and may be called from any thread.
     * @returns The passed #WebKitUserScript
     */
    ref(): UserScript
    /**
     * Atomically decrements the reference count of `user_script` by one.
     * 
     * If the reference count drops to 0, all memory allocated by
     * #WebKitUserScript is released. This function is MT-safe and may be called
     * from any thread.
     */
    unref(): void
}

/**
 * A JavaScript snippet which can be injected in loaded pages.
 * @record 
 */
class UserScript {

    // Own properties of WebKit-6.0.WebKit.UserScript

    static name: string

    // Constructors of WebKit-6.0.WebKit.UserScript

    /**
     * Creates a new user script.
     * 
     * Scripts can be applied to some URIs
     * only by passing non-null values for `allow_list` or `block_list`. Passing a
     * %NULL allow_list implies that all URIs are on the allow_list. The script
     * is applied if an URI matches the allow_list and not the block_list.
     * URI patterns must be of the form `[protocol]://[host]/[path]`, where the
     * *host* and *path* components can contain the wildcard character (`*`) to
     * represent zero or more other characters.
     * @constructor 
     * @param source Source code of the user script.
     * @param injectedFrames A #WebKitUserContentInjectedFrames value
     * @param injectionTime A #WebKitUserScriptInjectionTime value
     * @param allowList An allow_list of URI patterns or %NULL
     * @param blockList A block_list of URI patterns or %NULL
     * @returns A new #WebKitUserScript
     */
    constructor(source: string, injectedFrames: UserContentInjectedFrames, injectionTime: UserScriptInjectionTime, allowList: string[] | null, blockList: string[] | null) 
    /**
     * Creates a new user script.
     * 
     * Scripts can be applied to some URIs
     * only by passing non-null values for `allow_list` or `block_list`. Passing a
     * %NULL allow_list implies that all URIs are on the allow_list. The script
     * is applied if an URI matches the allow_list and not the block_list.
     * URI patterns must be of the form `[protocol]://[host]/[path]`, where the
     * *host* and *path* components can contain the wildcard character (`*`) to
     * represent zero or more other characters.
     * @constructor 
     * @param source Source code of the user script.
     * @param injectedFrames A #WebKitUserContentInjectedFrames value
     * @param injectionTime A #WebKitUserScriptInjectionTime value
     * @param allowList An allow_list of URI patterns or %NULL
     * @param blockList A block_list of URI patterns or %NULL
     * @returns A new #WebKitUserScript
     */
    static new(source: string, injectedFrames: UserContentInjectedFrames, injectionTime: UserScriptInjectionTime, allowList: string[] | null, blockList: string[] | null): UserScript
    /**
     * Creates a new user script for script world with name `world_name`.
     * 
     * See webkit_user_script_new() for a full description.
     * @constructor 
     * @param source Source code of the user script.
     * @param injectedFrames A #WebKitUserContentInjectedFrames value
     * @param injectionTime A #WebKitUserScriptInjectionTime value
     * @param worldName the name of a #WebKitScriptWorld
     * @param allowList An allow_list of URI patterns or %NULL
     * @param blockList A block_list of URI patterns or %NULL
     * @returns A new #WebKitUserScript
     */
    static newForWorld(source: string, injectedFrames: UserContentInjectedFrames, injectionTime: UserScriptInjectionTime, worldName: string, allowList: string[] | null, blockList: string[] | null): UserScript
}

interface UserStyleSheet {

    // Owm methods of WebKit-6.0.WebKit.UserStyleSheet

    /**
     * Atomically increments the reference count of `user_style_sheet` by one.
     * 
     * This function is MT-safe and may be called from any thread.
     * @returns The passed #WebKitUserStyleSheet
     */
    ref(): UserStyleSheet
    /**
     * Atomically decrements the reference count of `user_style_sheet` by one.
     * 
     * If the reference count drops to 0, all memory allocated by
     * #WebKitUserStyleSheet is released. This function is MT-safe and may be
     * called from any thread.
     */
    unref(): void
}

/**
 * A CSS style sheet which can be injected in loaded pages.
 * @record 
 */
class UserStyleSheet {

    // Own properties of WebKit-6.0.WebKit.UserStyleSheet

    static name: string

    // Constructors of WebKit-6.0.WebKit.UserStyleSheet

    /**
     * Creates a new user style sheet.
     * 
     * Style sheets can be applied to some URIs
     * only by passing non-null values for `allow_list` or `block_list`. Passing a
     * %NULL allow_list implies that all URIs are on the allow_list. The style
     * sheet is applied if an URI matches the allow_list and not the block_list.
     * URI patterns must be of the form `[protocol]://[host]/[path]`, where the
     * *host* and *path* components can contain the wildcard character (`*`) to
     * represent zero or more other characters.
     * @constructor 
     * @param source Source code of the user style sheet.
     * @param injectedFrames A #WebKitUserContentInjectedFrames value
     * @param level A #WebKitUserStyleLevel
     * @param allowList An allow_list of URI patterns or %NULL
     * @param blockList A block_list of URI patterns or %NULL
     * @returns A new #WebKitUserStyleSheet
     */
    constructor(source: string, injectedFrames: UserContentInjectedFrames, level: UserStyleLevel, allowList: string[] | null, blockList: string[] | null) 
    /**
     * Creates a new user style sheet.
     * 
     * Style sheets can be applied to some URIs
     * only by passing non-null values for `allow_list` or `block_list`. Passing a
     * %NULL allow_list implies that all URIs are on the allow_list. The style
     * sheet is applied if an URI matches the allow_list and not the block_list.
     * URI patterns must be of the form `[protocol]://[host]/[path]`, where the
     * *host* and *path* components can contain the wildcard character (`*`) to
     * represent zero or more other characters.
     * @constructor 
     * @param source Source code of the user style sheet.
     * @param injectedFrames A #WebKitUserContentInjectedFrames value
     * @param level A #WebKitUserStyleLevel
     * @param allowList An allow_list of URI patterns or %NULL
     * @param blockList A block_list of URI patterns or %NULL
     * @returns A new #WebKitUserStyleSheet
     */
    static new(source: string, injectedFrames: UserContentInjectedFrames, level: UserStyleLevel, allowList: string[] | null, blockList: string[] | null): UserStyleSheet
    /**
     * Creates a new user style sheet for script world.
     * 
     * Creates a new user style sheet for script world with name `world_name`.
     * See webkit_user_style_sheet_new() for a full description.
     * @constructor 
     * @param source Source code of the user style sheet.
     * @param injectedFrames A #WebKitUserContentInjectedFrames value
     * @param level A #WebKitUserStyleLevel
     * @param worldName the name of a #WebKitScriptWorld
     * @param allowList An allow_list of URI patterns or %NULL
     * @param blockList A block_list of URI patterns or %NULL
     * @returns A new #WebKitUserStyleSheet
     */
    static newForWorld(source: string, injectedFrames: UserContentInjectedFrames, level: UserStyleLevel, worldName: string, allowList: string[] | null, blockList: string[] | null): UserStyleSheet
}

interface WebContextClass {

    // Own fields of WebKit-6.0.WebKit.WebContextClass

    parentClass: GObject.ObjectClass
}

abstract class WebContextClass {

    // Own properties of WebKit-6.0.WebKit.WebContextClass

    static name: string
}

interface WebInspectorClass {

    // Own fields of WebKit-6.0.WebKit.WebInspectorClass

    parentClass: GObject.ObjectClass
}

abstract class WebInspectorClass {

    // Own properties of WebKit-6.0.WebKit.WebInspectorClass

    static name: string
}

interface WebResourceClass {

    // Own fields of WebKit-6.0.WebKit.WebResourceClass

    parentClass: GObject.ObjectClass
}

abstract class WebResourceClass {

    // Own properties of WebKit-6.0.WebKit.WebResourceClass

    static name: string
}

interface WebViewBaseClass {

    // Own fields of WebKit-6.0.WebKit.WebViewBaseClass

    parentClass: Gtk.WidgetClass
}

abstract class WebViewBaseClass {

    // Own properties of WebKit-6.0.WebKit.WebViewBaseClass

    static name: string
}

interface WebViewBasePrivate {
}

class WebViewBasePrivate {

    // Own properties of WebKit-6.0.WebKit.WebViewBasePrivate

    static name: string
}

interface WebViewClass {

    // Own fields of WebKit-6.0.WebKit.WebViewClass

    parent: WebViewBaseClass
    loadChanged: (webView: WebView, loadEvent: LoadEvent) => void
    loadFailed: (webView: WebView, loadEvent: LoadEvent, failingUri: string, error: GLib.Error) => boolean
    readyToShow: (webView: WebView) => void
    runAsModal: (webView: WebView) => void
    close: (webView: WebView) => void
    scriptDialog: (webView: WebView, dialog: ScriptDialog) => boolean
    decidePolicy: (webView: WebView, decision: PolicyDecision, type: PolicyDecisionType) => boolean
    permissionRequest: (webView: WebView, permissionRequest: PermissionRequest) => boolean
    mouseTargetChanged: (webView: WebView, hitTestResult: HitTestResult, modifiers: number) => void
    print: (webView: WebView, printOperation: PrintOperation) => boolean
    resourceLoadStarted: (webView: WebView, resource: WebResource, request: URIRequest) => void
    enterFullscreen: (webView: WebView) => boolean
    leaveFullscreen: (webView: WebView) => boolean
    runFileChooser: (webView: WebView, request: FileChooserRequest) => boolean
    contextMenu: (webView: WebView, contextMenu: ContextMenu, hitTestResult: HitTestResult) => boolean
    contextMenuDismissed: (webView: WebView) => void
    submitForm: (webView: WebView, request: FormSubmissionRequest) => void
    insecureContentDetected: (webView: WebView, event: InsecureContentEvent) => void
    webProcessCrashed: (webView: WebView) => boolean
    authenticate: (webView: WebView, request: AuthenticationRequest) => boolean
    loadFailedWithTlsErrors: (webView: WebView, failingUri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => boolean
    showNotification: (webView: WebView, notification: Notification) => boolean
    runColorChooser: (webView: WebView, request: ColorChooserRequest) => boolean
    showOptionMenu: (webView: WebView, menu: OptionMenu, rectangle: Gdk.Rectangle) => boolean
    webProcessTerminated: (webView: WebView, reason: WebProcessTerminationReason) => void
    userMessageReceived: (webView: WebView, message: UserMessage) => boolean
    queryPermissionState: (webView: WebView, query: PermissionStateQuery) => boolean
}

abstract class WebViewClass {

    // Own properties of WebKit-6.0.WebKit.WebViewClass

    static name: string
}

interface WebViewPrivate {
}

class WebViewPrivate {

    // Own properties of WebKit-6.0.WebKit.WebViewPrivate

    static name: string
}

interface WebViewSessionState {

    // Owm methods of WebKit-6.0.WebKit.WebViewSessionState

    /**
     * Atomically increments the reference count of `state` by one.
     * 
     * This
     * function is MT-safe and may be called from any thread.
     * @returns The passed in #WebKitWebViewSessionState
     */
    ref(): WebViewSessionState
    /**
     * Serializes a #WebKitWebViewSessionState.
     * @returns a #GBytes containing the @state serialized.
     */
    serialize(): any
    /**
     * Atomically decrements the reference count of `state` by one.
     * 
     * If the
     * reference count drops to 0, all memory allocated by the #WebKitWebViewSessionState is
     * released. This function is MT-safe and may be called from any thread.
     */
    unref(): void
}

/**
 * Handles serialization of a web view's browsing state.
 * @record 
 */
class WebViewSessionState {

    // Own properties of WebKit-6.0.WebKit.WebViewSessionState

    static name: string

    // Constructors of WebKit-6.0.WebKit.WebViewSessionState

    /**
     * Creates a new #WebKitWebViewSessionState from serialized data.
     * @constructor 
     * @param data a #GBytes
     * @returns a new #WebKitWebViewSessionState, or %NULL if @data doesn't contain a     valid serialized #WebKitWebViewSessionState.
     */
    constructor(data: any) 
    /**
     * Creates a new #WebKitWebViewSessionState from serialized data.
     * @constructor 
     * @param data a #GBytes
     * @returns a new #WebKitWebViewSessionState, or %NULL if @data doesn't contain a     valid serialized #WebKitWebViewSessionState.
     */
    static new(data: any): WebViewSessionState
}

interface WebsiteData {

    // Owm methods of WebKit-6.0.WebKit.WebsiteData

    /**
     * Gets the name of #WebKitWebsiteData.
     * 
     * This is the website name, normally represented by
     * a domain or host name. All local documents are grouped in the same #WebKitWebsiteData using
     * the name "Local files".
     * @returns the website name of @website_data.
     */
    getName(): string
    /**
     * Gets the size of the data of types `types` in a #WebKitWebsiteData.
     * 
     * Note that currently the data size is only known for %WEBKIT_WEBSITE_DATA_DISK_CACHE data type
     * so for all other types 0 will be returned.
     * @param types a bitmask  of #WebKitWebsiteDataTypes
     * @returns the size of @website_data for the given @types.
     */
    getSize(types: WebsiteDataTypes): number
    /**
     * Gets the types of data stored in the client for a #WebKitWebsiteData.
     * 
     * These are the
     * types actually present, not the types queried with webkit_website_data_manager_fetch().
     * @returns a bitmask of #WebKitWebsiteDataTypes in @website_data
     */
    getTypes(): WebsiteDataTypes
    /**
     * Atomically increments the reference count of `website_data` by one.
     * 
     * This function is MT-safe and may be called from any thread.
     * @returns The passed #WebKitWebsiteData
     */
    ref(): WebsiteData
    /**
     * Atomically decrements the reference count of `website_data` by one.
     * 
     * If the reference count drops to 0, all memory allocated by
     * #WebKitWebsiteData is released. This function is MT-safe and may be
     * called from any thread.
     */
    unref(): void
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
 * @record 
 */
class WebsiteData {

    // Own properties of WebKit-6.0.WebKit.WebsiteData

    static name: string
}

interface WebsiteDataAccessPermissionRequestClass {

    // Own fields of WebKit-6.0.WebKit.WebsiteDataAccessPermissionRequestClass

    parentClass: GObject.ObjectClass
}

abstract class WebsiteDataAccessPermissionRequestClass {

    // Own properties of WebKit-6.0.WebKit.WebsiteDataAccessPermissionRequestClass

    static name: string
}

interface WebsiteDataManagerClass {

    // Own fields of WebKit-6.0.WebKit.WebsiteDataManagerClass

    parentClass: GObject.ObjectClass
}

abstract class WebsiteDataManagerClass {

    // Own properties of WebKit-6.0.WebKit.WebsiteDataManagerClass

    static name: string
}

interface WebsitePoliciesClass {

    // Own fields of WebKit-6.0.WebKit.WebsitePoliciesClass

    parentClass: GObject.ObjectClass
}

abstract class WebsitePoliciesClass {

    // Own properties of WebKit-6.0.WebKit.WebsitePoliciesClass

    static name: string
}

interface WindowPropertiesClass {

    // Own fields of WebKit-6.0.WebKit.WindowPropertiesClass

    parentClass: GObject.ObjectClass
}

abstract class WindowPropertiesClass {

    // Own properties of WebKit-6.0.WebKit.WindowPropertiesClass

    static name: string
}

}

export default WebKit;
// END