// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * WebKit2-5.0
 */

import type Soup from './Soup-3.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type JavaScriptCore from './JavaScriptCore-5.0';
import type Gtk from './Gtk-4.0';
import type Gsk from './Gsk-4.0';
import type Graphene from './Graphene-1.0';
import type Gdk from './Gdk-4.0';
import type cairo from './cairo-1.0';
import type PangoCairo from './PangoCairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';

export namespace WebKit2 {

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
     * The #WebKitFaviconDatabase has not been initialized yet
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
 * Enum values used for determining the hardware acceleration policy.
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
    FAILED,
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
 * Enum values used to denote the various plugin and multimedia errors.
 */
enum PluginError {
    /**
     * Generic plugin load failure. Deprecated 2.32
     */
    FAILED,
    /**
     * Load failure due to missing plugin. Deprecated 2.32
     */
    CANNOT_FIND_PLUGIN,
    /**
     * Load failure due to inability to load plugin. Deprecated 2.32
     */
    CANNOT_LOAD_PLUGIN,
    /**
     * Load failure due to missing Java support that is required to load plugin. Deprecated 2.32
     */
    JAVA_UNAVAILABLE,
    /**
     * Load failure due to connection cancellation. Deprecated 2.32
     */
    CONNECTION_CANCELLED,
    /**
     * Preliminary load failure for media content types. A new load will be started to perform the media load.
     */
    WILL_HANDLE_LOAD,
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
     *   target attribute on &lt;a&gt; elements.
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
 * Enum values used for determining the #WebKitWebContext process model.
 */
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
     *   rest ??? for example a full-fledged web browser with support for
     *   multiple tabs.
     */
    MULTIPLE_SECONDARY_PROCESSES,
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
function downloadErrorQuark(): GLib.Quark
function faviconDatabaseErrorQuark(): GLib.Quark
/**
 * Returns the major version number of the WebKit library.
 * (e.g. in WebKit version 1.8.3 this is 1.)
 * 
 * This function is in the library, so it represents the WebKit library
 * your code is running against. Contrast with the #WEBKIT_MAJOR_VERSION
 * macro, which represents the major version of the WebKit headers you
 * have included when compiling your code.
 */
function getMajorVersion(): number
/**
 * Returns the micro version number of the WebKit library.
 * (e.g. in WebKit version 1.8.3 this is 3.)
 * 
 * This function is in the library, so it represents the WebKit library
 * your code is running against. Contrast with the #WEBKIT_MICRO_VERSION
 * macro, which represents the micro version of the WebKit headers you
 * have included when compiling your code.
 */
function getMicroVersion(): number
/**
 * Returns the minor version number of the WebKit library.
 * (e.g. in WebKit version 1.8.3 this is 8.)
 * 
 * This function is in the library, so it represents the WebKit library
 * your code is running against. Contrast with the #WEBKIT_MINOR_VERSION
 * macro, which represents the minor version of the WebKit headers you
 * have included when compiling your code.
 */
function getMinorVersion(): number
function javascriptErrorQuark(): GLib.Quark
/**
 * Get the key system for which access permission is being requested.
 * @param request a #WebKitMediaKeySystemPermissionRequest
 */
function mediaKeySystemPermissionGetName(request: MediaKeySystemPermissionRequest): string
function networkErrorQuark(): GLib.Quark
function pluginErrorQuark(): GLib.Quark
function policyErrorQuark(): GLib.Quark
function printErrorQuark(): GLib.Quark
function snapshotErrorQuark(): GLib.Quark
/**
 * Use this function to format a URI for display. The URIs used internally by
 * WebKit may contain percent-encoded characters or Punycode, which are not
 * generally suitable to display to users. This function provides protection
 * against IDN homograph attacks, so in some cases the host part of the returned
 * URI may be in Punycode if the safety check fails.
 * @param uri the URI to be converted
 */
function uriForDisplay(uri: string): string | null
function userContentFilterErrorQuark(): GLib.Quark
function userMediaPermissionIsForAudioDevice(request: UserMediaPermissionRequest): boolean
function userMediaPermissionIsForDisplayDevice(request: UserMediaPermissionRequest): boolean
function userMediaPermissionIsForVideoDevice(request: UserMediaPermissionRequest): boolean
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
interface PermissionRequest_ConstructProps extends GObject.Object_ConstructProps {
}

interface PermissionRequest {

    // Owm methods of WebKit2-5.0.WebKit2.PermissionRequest

    /**
     * Allow the action which triggered this request.
     */
    allow(): void
    /**
     * Deny the action which triggered this request.
     */
    deny(): void

    // Class property signals of WebKit2-5.0.WebKit2.PermissionRequest

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class PermissionRequest extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.PermissionRequest

    static name: string
    static $gtype: GObject.GType<PermissionRequest>

    // Constructors of WebKit2-5.0.WebKit2.PermissionRequest

    constructor(config?: PermissionRequest_ConstructProps) 
    _init(config?: PermissionRequest_ConstructProps): void
}

interface AuthenticationRequest_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `authenticated`
 */
interface AuthenticationRequest_AuthenticatedSignalCallback {
    (credential: Credential): void
}

/**
 * Signal callback interface for `cancelled`
 */
interface AuthenticationRequest_CancelledSignalCallback {
    (): void
}

interface AuthenticationRequest {

    // Own fields of WebKit2-5.0.WebKit2.AuthenticationRequest

    parent: GObject.Object

    // Owm methods of WebKit2-5.0.WebKit2.AuthenticationRequest

    /**
     * Authenticate the #WebKitAuthenticationRequest using the #WebKitCredential
     * supplied. To continue without credentials, pass %NULL as `credential`.
     * @param credential A #WebKitCredential, or %NULL
     */
    authenticate(credential: Credential | null): void
    /**
     * Determine whether the authentication method associated with this
     * #WebKitAuthenticationRequest should allow the storage of credentials.
     * This will return %FALSE if WebKit doesn't support credential storing,
     * if private browsing is enabled, or if persistent credential storage has been
     * disabled in #WebKitWebsiteDataManager, unless credentials saving has been
     * explicitly enabled with webkit_authentication_request_set_can_save_credentials().
     */
    canSaveCredentials(): boolean
    /**
     * Cancel the authentication challenge. This will also cancel the page loading and result in a
     * #WebKitWebView::load-failed signal with a #WebKitNetworkError of type %WEBKIT_NETWORK_ERROR_CANCELLED being emitted.
     */
    cancel(): void
    /**
     * Get the #GTlsPasswordFlags of the %WEBKIT_AUTHENTICATION_SCHEME_CLIENT_CERTIFICATE_PIN_REQUESTED authentication challenge.
     */
    getCertificatePinFlags(): Gio.TlsPasswordFlags
    /**
     * Get the host that this authentication challenge is applicable to.
     */
    getHost(): string
    /**
     * Get the port that this authentication challenge is applicable to.
     */
    getPort(): number
    /**
     * Get the #WebKitCredential of the proposed authentication challenge that was
     * stored from a previous session. The client can use this directly for
     * authentication or construct their own #WebKitCredential.
     */
    getProposedCredential(): Credential
    /**
     * Get the realm that this authentication challenge is applicable to.
     */
    getRealm(): string
    /**
     * Get the authentication scheme of the authentication challenge.
     */
    getScheme(): AuthenticationScheme
    /**
     * Get the #WebKitSecurityOrigin that this authentication challenge is applicable to.
     */
    getSecurityOrigin(): SecurityOrigin
    /**
     * Determine whether the authentication challenge is associated with a proxy server rather than an "origin" server.
     */
    isForProxy(): boolean
    /**
     * Determine whether this this is a first attempt or a retry for this authentication challenge.
     */
    isRetry(): boolean
    /**
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
     * Set the #WebKitCredential of the proposed authentication challenge that was
     * stored from a previous session. This should only be used by applications handling
     * their own credential storage. (When using the default WebKit credential storage,
     * webkit_authentication_request_get_proposed_credential() already contains previously-stored
     * credentials.)
     * Passing a %NULL `credential` will clear the proposed credential.
     * @param credential a #WebKitCredential, or %NULL
     */
    setProposedCredential(credential: Credential): void

    // Own signals of WebKit2-5.0.WebKit2.AuthenticationRequest

    connect(sigName: "authenticated", callback: AuthenticationRequest_AuthenticatedSignalCallback): number
    on(sigName: "authenticated", callback: AuthenticationRequest_AuthenticatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticated", callback: AuthenticationRequest_AuthenticatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticated", callback: AuthenticationRequest_AuthenticatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "authenticated", ...args: any[]): void
    connect(sigName: "cancelled", callback: AuthenticationRequest_CancelledSignalCallback): number
    on(sigName: "cancelled", callback: AuthenticationRequest_CancelledSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cancelled", callback: AuthenticationRequest_CancelledSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cancelled", callback: AuthenticationRequest_CancelledSignalCallback): NodeJS.EventEmitter
    emit(sigName: "cancelled", ...args: any[]): void

    // Class property signals of WebKit2-5.0.WebKit2.AuthenticationRequest

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AuthenticationRequest extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.AuthenticationRequest

    static name: string
    static $gtype: GObject.GType<AuthenticationRequest>

    // Constructors of WebKit2-5.0.WebKit2.AuthenticationRequest

    constructor(config?: AuthenticationRequest_ConstructProps) 
    _init(config?: AuthenticationRequest_ConstructProps): void
}

interface AutomationSession_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of WebKit2-5.0.WebKit2.AutomationSession

    /**
     * The session unique identifier.
     */
    id?: string | null
}

/**
 * Signal callback interface for `create-web-view`
 */
interface AutomationSession_CreateWebViewSignalCallback {
    (): WebView
}

interface AutomationSession {

    // Own properties of WebKit2-5.0.WebKit2.AutomationSession

    /**
     * The session unique identifier.
     */
    readonly id: string

    // Own fields of WebKit2-5.0.WebKit2.AutomationSession

    parent: GObject.Object
    priv: AutomationSessionPrivate

    // Owm methods of WebKit2-5.0.WebKit2.AutomationSession

    /**
     * Get the #WebKitAutomationSession previously set with webkit_automation_session_set_application_info().
     */
    getApplicationInfo(): ApplicationInfo
    /**
     * Get the unique identifier of a #WebKitAutomationSession
     */
    getId(): string
    /**
     * Set the application information to `session`. This information will be used by the driver service
     * to match the requested capabilities with the actual application information. If this information
     * is not provided to the session when a new automation session is requested, the creation might fail
     * if the client requested a specific browser name or version. This will not have any effect when called
     * after the automation session has been fully created, so this must be called in the callback of
     * #WebKitWebContext::automation-started signal.
     * @param info a #WebKitApplicationInfo
     */
    setApplicationInfo(info: ApplicationInfo): void

    // Own signals of WebKit2-5.0.WebKit2.AutomationSession

    connect(sigName: "create-web-view", callback: AutomationSession_CreateWebViewSignalCallback): number
    on(sigName: "create-web-view", callback: AutomationSession_CreateWebViewSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "create-web-view", callback: AutomationSession_CreateWebViewSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "create-web-view", callback: AutomationSession_CreateWebViewSignalCallback): NodeJS.EventEmitter
    emit(sigName: "create-web-view", ...args: any[]): void

    // Class property signals of WebKit2-5.0.WebKit2.AutomationSession

    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AutomationSession extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.AutomationSession

    static name: string
    static $gtype: GObject.GType<AutomationSession>

    // Constructors of WebKit2-5.0.WebKit2.AutomationSession

    constructor(config?: AutomationSession_ConstructProps) 
    _init(config?: AutomationSession_ConstructProps): void
}

interface BackForwardList_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `changed`
 */
interface BackForwardList_ChangedSignalCallback {
    (itemAdded: BackForwardListItem | null, itemsRemoved: object | null): void
}

interface BackForwardList {

    // Own fields of WebKit2-5.0.WebKit2.BackForwardList

    parent: GObject.Object
    priv: BackForwardListPrivate

    // Owm methods of WebKit2-5.0.WebKit2.BackForwardList

    /**
     * Returns the item that precedes the current item.
     */
    getBackItem(): BackForwardListItem | null
    getBackList(): BackForwardListItem[]
    getBackListWithLimit(limit: number): BackForwardListItem[]
    /**
     * Returns the current item in `back_forward_list`.
     */
    getCurrentItem(): BackForwardListItem | null
    /**
     * Returns the item that follows the current item.
     */
    getForwardItem(): BackForwardListItem | null
    getForwardList(): BackForwardListItem[]
    getForwardListWithLimit(limit: number): BackForwardListItem[]
    getLength(): number
    /**
     * Returns the item at a given index relative to the current item.
     * @param index the index of the item
     */
    getNthItem(index: number): BackForwardListItem | null

    // Own signals of WebKit2-5.0.WebKit2.BackForwardList

    connect(sigName: "changed", callback: BackForwardList_ChangedSignalCallback): number
    on(sigName: "changed", callback: BackForwardList_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: BackForwardList_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: BackForwardList_ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", itemsRemoved: object | null, ...args: any[]): void

    // Class property signals of WebKit2-5.0.WebKit2.BackForwardList

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class BackForwardList extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.BackForwardList

    static name: string
    static $gtype: GObject.GType<BackForwardList>

    // Constructors of WebKit2-5.0.WebKit2.BackForwardList

    constructor(config?: BackForwardList_ConstructProps) 
    _init(config?: BackForwardList_ConstructProps): void
}

interface BackForwardListItem_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
}

interface BackForwardListItem {

    // Own fields of WebKit2-5.0.WebKit2.BackForwardListItem

    parent: GObject.InitiallyUnowned
    priv: BackForwardListItemPrivate

    // Owm methods of WebKit2-5.0.WebKit2.BackForwardListItem

    /**
     * See also webkit_back_forward_list_item_get_uri().
     */
    getOriginalUri(): string
    getTitle(): string
    /**
     * This URI may differ from the original URI if the page was,
     * for example, redirected to a new location.
     * See also webkit_back_forward_list_item_get_original_uri().
     */
    getUri(): string

    // Class property signals of WebKit2-5.0.WebKit2.BackForwardListItem

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class BackForwardListItem extends GObject.InitiallyUnowned {

    // Own properties of WebKit2-5.0.WebKit2.BackForwardListItem

    static name: string
    static $gtype: GObject.GType<BackForwardListItem>

    // Constructors of WebKit2-5.0.WebKit2.BackForwardListItem

    constructor(config?: BackForwardListItem_ConstructProps) 
    _init(config?: BackForwardListItem_ConstructProps): void
}

interface ColorChooserRequest_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of WebKit2-5.0.WebKit2.ColorChooserRequest

    rgba?: Gdk.RGBA | null
}

/**
 * Signal callback interface for `finished`
 */
interface ColorChooserRequest_FinishedSignalCallback {
    (): void
}

interface ColorChooserRequest {

    // Own properties of WebKit2-5.0.WebKit2.ColorChooserRequest

    rgba: Gdk.RGBA

    // Own fields of WebKit2-5.0.WebKit2.ColorChooserRequest

    parent: GObject.Object

    // Owm methods of WebKit2-5.0.WebKit2.ColorChooserRequest

    /**
     * Cancels `request` and the input element changes to use the initial color
     * it has before the request started.
     * The signal #WebKitColorChooserRequest::finished
     * is emitted to notify that the request has finished.
     */
    cancel(): void
    /**
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

    // Own signals of WebKit2-5.0.WebKit2.ColorChooserRequest

    connect(sigName: "finished", callback: ColorChooserRequest_FinishedSignalCallback): number
    on(sigName: "finished", callback: ColorChooserRequest_FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: ColorChooserRequest_FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: ColorChooserRequest_FinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "finished", ...args: any[]): void

    // Class property signals of WebKit2-5.0.WebKit2.ColorChooserRequest

    connect(sigName: "notify::rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rgba", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ColorChooserRequest extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.ColorChooserRequest

    static name: string
    static $gtype: GObject.GType<ColorChooserRequest>

    // Constructors of WebKit2-5.0.WebKit2.ColorChooserRequest

    constructor(config?: ColorChooserRequest_ConstructProps) 
    _init(config?: ColorChooserRequest_ConstructProps): void
}

interface ContextMenu_ConstructProps extends GObject.Object_ConstructProps {
}

interface ContextMenu {

    // Own fields of WebKit2-5.0.WebKit2.ContextMenu

    parent: GObject.Object
    priv: ContextMenuPrivate

    // Owm methods of WebKit2-5.0.WebKit2.ContextMenu

    /**
     * Adds `item` at the end of the `menu`.
     * @param item the #WebKitContextMenuItem to add
     */
    append(item: ContextMenuItem): void
    /**
     * Gets the first item in the `menu`.
     */
    first(): ContextMenuItem
    /**
     * Gets the item at the given position in the `menu`.
     * @param position the position of the item, counting from 0
     */
    getItemAtPosition(position: number): ContextMenuItem
    /**
     * Returns the item list of `menu`.
     */
    getItems(): ContextMenuItem[]
    /**
     * Gets the length of the `menu`.
     */
    getNItems(): number
    /**
     * Gets the user data of `menu`.
     * This function can be used from the UI Process to get user data previously set
     * from the Web Process with webkit_context_menu_set_user_data().
     */
    getUserData(): GLib.Variant
    /**
     * Inserts `item` into the `menu` at the given position.
     * If `position` is negative, or is larger than the number of items
     * in the #WebKitContextMenu, the item is added on to the end of
     * the `menu`. The first position is 0.
     * @param item the #WebKitContextMenuItem to add
     * @param position the position to insert the item
     */
    insert(item: ContextMenuItem, position: number): void
    /**
     * Gets the last item in the `menu`.
     */
    last(): ContextMenuItem
    /**
     * Moves `item` to the given position in the `menu`.
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
     * This function can be used from a Web Process extension to set user data
     * that can be retrieved from the UI Process using webkit_context_menu_get_user_data().
     * If the `user_data` #GVariant is floating, it is consumed.
     * @param userData a #GVariant
     */
    setUserData(userData: GLib.Variant): void

    // Class property signals of WebKit2-5.0.WebKit2.ContextMenu

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ContextMenu extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.ContextMenu

    static name: string
    static $gtype: GObject.GType<ContextMenu>

    // Constructors of WebKit2-5.0.WebKit2.ContextMenu

    constructor(config?: ContextMenu_ConstructProps) 
    /**
     * Creates a new #WebKitContextMenu object to be used as a submenu of an existing
     * #WebKitContextMenu. The context menu of a #WebKitWebView is created by the view
     * and passed as an argument of #WebKitWebView::context-menu signal.
     * To add items to the menu use webkit_context_menu_prepend(),
     * webkit_context_menu_append() or webkit_context_menu_insert().
     * See also webkit_context_menu_new_with_items() to create a #WebKitContextMenu with
     * a list of initial items.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #WebKitContextMenu object to be used as a submenu of an existing
     * #WebKitContextMenu. The context menu of a #WebKitWebView is created by the view
     * and passed as an argument of #WebKitWebView::context-menu signal.
     * To add items to the menu use webkit_context_menu_prepend(),
     * webkit_context_menu_append() or webkit_context_menu_insert().
     * See also webkit_context_menu_new_with_items() to create a #WebKitContextMenu with
     * a list of initial items.
     * @constructor 
     */
    static new(): ContextMenu
    /**
     * Creates a new #WebKitContextMenu object to be used as a submenu of an existing
     * #WebKitContextMenu with the given initial items.
     * See also webkit_context_menu_new()
     * @constructor 
     * @param items a #GList of #WebKitContextMenuItem
     */
    static newWithItems(items: ContextMenuItem[]): ContextMenu
    _init(config?: ContextMenu_ConstructProps): void
}

interface ContextMenuItem_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
}

interface ContextMenuItem {

    // Own fields of WebKit2-5.0.WebKit2.ContextMenuItem

    parent: GObject.InitiallyUnowned
    priv: ContextMenuItemPrivate

    // Owm methods of WebKit2-5.0.WebKit2.ContextMenuItem

    /**
     * Gets the action associated to `item` as a #GAction.
     */
    getGaction(): Gio.Action
    /**
     * Gets the #WebKitContextMenuAction of `item`. If the #WebKitContextMenuItem was not
     * created for a stock action %WEBKIT_CONTEXT_MENU_ACTION_CUSTOM will be
     * returned. If the #WebKitContextMenuItem is a separator %WEBKIT_CONTEXT_MENU_ACTION_NO_ACTION
     * will be returned.
     */
    getStockAction(): ContextMenuAction
    /**
     * Gets the submenu of `item`.
     */
    getSubmenu(): ContextMenu
    /**
     * Checks whether `item` is a separator.
     */
    isSeparator(): boolean
    /**
     * Sets or replaces the `item` submenu. If `submenu` is %NULL the current
     * submenu of `item` is removed.
     * @param submenu a #WebKitContextMenu
     */
    setSubmenu(submenu: ContextMenu | null): void

    // Class property signals of WebKit2-5.0.WebKit2.ContextMenuItem

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ContextMenuItem extends GObject.InitiallyUnowned {

    // Own properties of WebKit2-5.0.WebKit2.ContextMenuItem

    static name: string
    static $gtype: GObject.GType<ContextMenuItem>

    // Constructors of WebKit2-5.0.WebKit2.ContextMenuItem

    constructor(config?: ContextMenuItem_ConstructProps) 
    /**
     * Creates a new #WebKitContextMenuItem for the given `action` and `label`. On activation
     * `target` will be passed as parameter to the callback.
     * @constructor 
     * @param action a #GAction
     * @param label the menu item label text
     * @param target a #GVariant to use as the action target
     */
    static newFromGaction(action: Gio.Action, label: string, target: GLib.Variant | null): ContextMenuItem
    /**
     * Creates a new #WebKitContextMenuItem for the given stock action.
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
     */
    static newFromStockAction(action: ContextMenuAction): ContextMenuItem
    /**
     * Creates a new #WebKitContextMenuItem for the given stock action using the given `label`.
     * Stock actions have a predefined label, this method can be used to create a
     * #WebKitContextMenuItem for a #WebKitContextMenuAction but using a custom label.
     * @constructor 
     * @param action a #WebKitContextMenuAction stock action
     * @param label a custom label text to use instead of the predefined one
     */
    static newFromStockActionWithLabel(action: ContextMenuAction, label: string): ContextMenuItem
    /**
     * Creates a new #WebKitContextMenuItem representing a separator.
     * @constructor 
     */
    static newSeparator(): ContextMenuItem
    /**
     * Creates a new #WebKitContextMenuItem using the given `label` with a submenu.
     * @constructor 
     * @param label the menu item label text
     * @param submenu a #WebKitContextMenu to set
     */
    static newWithSubmenu(label: string, submenu: ContextMenu): ContextMenuItem
    _init(config?: ContextMenuItem_ConstructProps): void
}

interface CookieManager_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `changed`
 */
interface CookieManager_ChangedSignalCallback {
    (): void
}

interface CookieManager {

    // Own fields of WebKit2-5.0.WebKit2.CookieManager

    parent: GObject.Object
    priv: CookieManagerPrivate

    // Owm methods of WebKit2-5.0.WebKit2.CookieManager

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
     */
    addCookieFinish(result: Gio.AsyncResult): boolean
    /**
     * Delete all cookies of `cookie_manager`
     */
    deleteAllCookies(): void
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
     */
    deleteCookieFinish(result: Gio.AsyncResult): boolean
    /**
     * Remove all cookies of `cookie_manager` for the given `domain`.
     * @param domain a domain name
     */
    deleteCookiesForDomain(domain: string): void
    /**
     * Asynchronously get the cookie acceptance policy of `cookie_manager`.
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
     */
    getAcceptPolicyFinish(result: Gio.AsyncResult): CookieAcceptPolicy
    /**
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
     * The return value is a #GSList of #SoupCookie instances which should be released
     * with g_list_free_full() and soup_cookie_free().
     * @param result a #GAsyncResult
     */
    getCookiesFinish(result: Gio.AsyncResult): Soup.Cookie[]
    /**
     * Asynchronously get the list of domains for which `cookie_manager` contains cookies.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * webkit_cookie_manager_get_domains_with_cookies_finish() to get the result of the operation.
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    getDomainsWithCookies(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation started with webkit_cookie_manager_get_domains_with_cookies().
     * The return value is a %NULL terminated list of strings which should
     * be released with g_strfreev().
     * @param result a #GAsyncResult
     */
    getDomainsWithCookiesFinish(result: Gio.AsyncResult): string[]
    /**
     * Set the cookie acceptance policy of `cookie_manager` as `policy`.
     * Note that ITP has its own way to handle third-party cookies, so when it's enabled,
     * and `policy` is set to %WEBKIT_COOKIE_POLICY_ACCEPT_NO_THIRD_PARTY, %WEBKIT_COOKIE_POLICY_ACCEPT_ALWAYS
     * will be used instead. Once disabled, the policy will be set back to %WEBKIT_COOKIE_POLICY_ACCEPT_NO_THIRD_PARTY.
     * See also webkit_website_data_manager_set_itp_enabled().
     * @param policy a #WebKitCookieAcceptPolicy
     */
    setAcceptPolicy(policy: CookieAcceptPolicy): void
    /**
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

    // Own signals of WebKit2-5.0.WebKit2.CookieManager

    connect(sigName: "changed", callback: CookieManager_ChangedSignalCallback): number
    on(sigName: "changed", callback: CookieManager_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: CookieManager_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: CookieManager_ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of WebKit2-5.0.WebKit2.CookieManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class CookieManager extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.CookieManager

    static name: string
    static $gtype: GObject.GType<CookieManager>

    // Constructors of WebKit2-5.0.WebKit2.CookieManager

    constructor(config?: CookieManager_ConstructProps) 
    _init(config?: CookieManager_ConstructProps): void
}

interface DeviceInfoPermissionRequest_ConstructProps extends PermissionRequest_ConstructProps, GObject.Object_ConstructProps {
}

interface DeviceInfoPermissionRequest extends PermissionRequest {

    // Own fields of WebKit2-5.0.WebKit2.DeviceInfoPermissionRequest

    parent: GObject.Object

    // Class property signals of WebKit2-5.0.WebKit2.DeviceInfoPermissionRequest

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DeviceInfoPermissionRequest extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.DeviceInfoPermissionRequest

    static name: string
    static $gtype: GObject.GType<DeviceInfoPermissionRequest>

    // Constructors of WebKit2-5.0.WebKit2.DeviceInfoPermissionRequest

    constructor(config?: DeviceInfoPermissionRequest_ConstructProps) 
    _init(config?: DeviceInfoPermissionRequest_ConstructProps): void
}

interface Download_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of WebKit2-5.0.WebKit2.Download

    /**
     * Whether or not the download is allowed to overwrite an existing file on
     * disk. If this property is %FALSE and the destination already exists,
     * the download will fail.
     */
    allowOverwrite?: boolean | null
}

/**
 * Signal callback interface for `created-destination`
 */
interface Download_CreatedDestinationSignalCallback {
    (destination: string): void
}

/**
 * Signal callback interface for `decide-destination`
 */
interface Download_DecideDestinationSignalCallback {
    (suggestedFilename: string): boolean
}

/**
 * Signal callback interface for `failed`
 */
interface Download_FailedSignalCallback {
    (error: GLib.Error): void
}

/**
 * Signal callback interface for `finished`
 */
interface Download_FinishedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `received-data`
 */
interface Download_ReceivedDataSignalCallback {
    (dataLength: number): void
}

interface Download {

    // Own properties of WebKit2-5.0.WebKit2.Download

    /**
     * Whether or not the download is allowed to overwrite an existing file on
     * disk. If this property is %FALSE and the destination already exists,
     * the download will fail.
     */
    allowOverwrite: boolean
    /**
     * The local URI to where the download will be saved.
     */
    readonly destination: string
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

    // Own fields of WebKit2-5.0.WebKit2.Download

    parent: GObject.Object
    priv: DownloadPrivate

    // Owm methods of WebKit2-5.0.WebKit2.Download

    /**
     * Cancels the download. When the ongoing download
     * operation is effectively cancelled the signal
     * #WebKitDownload::failed is emitted with
     * %WEBKIT_DOWNLOAD_ERROR_CANCELLED_BY_USER error.
     */
    cancel(): void
    /**
     * Returns the current value of the #WebKitDownload:allow-overwrite property,
     * which determines whether the download will overwrite an existing file on
     * disk, or if it will fail if the destination already exists.
     */
    getAllowOverwrite(): boolean
    /**
     * Obtains the URI to which the downloaded file will be written. You
     * can connect to #WebKitDownload::created-destination to make
     * sure this method returns a valid destination.
     */
    getDestination(): string
    /**
     * Gets the elapsed time in seconds, including any fractional part.
     * If the download finished, had an error or was cancelled this is
     * the time between its start and the event.
     */
    getElapsedTime(): number
    /**
     * Gets the value of the #WebKitDownload:estimated-progress property.
     * You can monitor the estimated progress of the download operation by
     * connecting to the notify::estimated-progress signal of `download`.
     */
    getEstimatedProgress(): number
    /**
     * Gets the length of the data already downloaded for `download`
     * in bytes.
     */
    getReceivedDataLength(): number
    /**
     * Retrieves the #WebKitURIRequest object that backs the download
     * process.
     */
    getRequest(): URIRequest
    /**
     * Retrieves the #WebKitURIResponse object that backs the download
     * process. This method returns %NULL if called before the response
     * is received from the server. You can connect to notify::response
     * signal to be notified when the response is received.
     */
    getResponse(): URIResponse
    /**
     * Get the #WebKitWebView that initiated the download.
     */
    getWebView(): WebView
    /**
     * Sets the #WebKitDownload:allow-overwrite property, which determines whether
     * the download may overwrite an existing file on disk, or if it will fail if
     * the destination already exists.
     * @param allowed the new value for the #WebKitDownload:allow-overwrite property
     */
    setAllowOverwrite(allowed: boolean): void
    /**
     * Sets the URI to which the downloaded file will be written.
     * This method should be called before the download transfer
     * starts or it will not have any effect on the ongoing download
     * operation. To set the destination using the filename suggested
     * by the server connect to #WebKitDownload::decide-destination
     * signal and call webkit_download_set_destination(). If you want to
     * set a fixed destination URI that doesn't depend on the suggested
     * filename you can connect to notify::response signal and call
     * webkit_download_set_destination().
     * If #WebKitDownload::decide-destination signal is not handled
     * and destination URI is not set when the download transfer starts,
     * the file will be saved with the filename suggested by the server in
     * %G_USER_DIRECTORY_DOWNLOAD directory.
     * @param uri the destination URI
     */
    setDestination(uri: string): void

    // Own signals of WebKit2-5.0.WebKit2.Download

    connect(sigName: "created-destination", callback: Download_CreatedDestinationSignalCallback): number
    on(sigName: "created-destination", callback: Download_CreatedDestinationSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "created-destination", callback: Download_CreatedDestinationSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "created-destination", callback: Download_CreatedDestinationSignalCallback): NodeJS.EventEmitter
    emit(sigName: "created-destination", ...args: any[]): void
    connect(sigName: "decide-destination", callback: Download_DecideDestinationSignalCallback): number
    on(sigName: "decide-destination", callback: Download_DecideDestinationSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "decide-destination", callback: Download_DecideDestinationSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "decide-destination", callback: Download_DecideDestinationSignalCallback): NodeJS.EventEmitter
    emit(sigName: "decide-destination", ...args: any[]): void
    connect(sigName: "failed", callback: Download_FailedSignalCallback): number
    on(sigName: "failed", callback: Download_FailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "failed", callback: Download_FailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "failed", callback: Download_FailedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "failed", ...args: any[]): void
    connect(sigName: "finished", callback: Download_FinishedSignalCallback): number
    on(sigName: "finished", callback: Download_FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: Download_FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: Download_FinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "finished", ...args: any[]): void
    connect(sigName: "received-data", callback: Download_ReceivedDataSignalCallback): number
    on(sigName: "received-data", callback: Download_ReceivedDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "received-data", callback: Download_ReceivedDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "received-data", callback: Download_ReceivedDataSignalCallback): NodeJS.EventEmitter
    emit(sigName: "received-data", ...args: any[]): void

    // Class property signals of WebKit2-5.0.WebKit2.Download

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Download extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.Download

    static name: string
    static $gtype: GObject.GType<Download>

    // Constructors of WebKit2-5.0.WebKit2.Download

    constructor(config?: Download_ConstructProps) 
    _init(config?: Download_ConstructProps): void
}

interface EditorState_ConstructProps extends GObject.Object_ConstructProps {
}

interface EditorState {

    // Own properties of WebKit2-5.0.WebKit2.EditorState

    /**
     * Bitmask of #WebKitEditorTypingAttributes flags.
     * See webkit_editor_state_get_typing_attributes() for more information.
     */
    readonly typingAttributes: number

    // Own fields of WebKit2-5.0.WebKit2.EditorState

    parent: GObject.Object
    priv: EditorStatePrivate

    // Owm methods of WebKit2-5.0.WebKit2.EditorState

    /**
     * Gets the typing attributes at the current cursor position.
     * If there is a selection, this returns the typing attributes
     * of the selected text. Note that in case of a selection,
     * typing attributes are considered active only when they are
     * present throughout the selection.
     */
    getTypingAttributes(): number
    /**
     * Gets whether a copy command can be issued.
     */
    isCopyAvailable(): boolean
    /**
     * Gets whether a cut command can be issued.
     */
    isCutAvailable(): boolean
    /**
     * Gets whether a paste command can be issued.
     */
    isPasteAvailable(): boolean
    /**
     * Gets whether a redo command can be issued.
     */
    isRedoAvailable(): boolean
    /**
     * Gets whether an undo command can be issued.
     */
    isUndoAvailable(): boolean

    // Class property signals of WebKit2-5.0.WebKit2.EditorState

    connect(sigName: "notify::typing-attributes", callback: (...args: any[]) => void): number
    on(sigName: "notify::typing-attributes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::typing-attributes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::typing-attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::typing-attributes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class EditorState extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.EditorState

    static name: string
    static $gtype: GObject.GType<EditorState>

    // Constructors of WebKit2-5.0.WebKit2.EditorState

    constructor(config?: EditorState_ConstructProps) 
    _init(config?: EditorState_ConstructProps): void
}

interface FaviconDatabase_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `favicon-changed`
 */
interface FaviconDatabase_FaviconChangedSignalCallback {
    (pageUri: string, faviconUri: string): void
}

interface FaviconDatabase {

    // Own fields of WebKit2-5.0.WebKit2.FaviconDatabase

    parent: GObject.Object
    priv: FaviconDatabasePrivate

    // Owm methods of WebKit2-5.0.WebKit2.FaviconDatabase

    /**
     * Clears all icons from the database.
     */
    clear(): void
    /**
     * Asynchronously obtains a #cairo_surface_t of the favicon for the
     * given page URI. It returns the cached icon if it's in the database
     * asynchronously waiting for the icon to be read from the database.
     * 
     * This is an asynchronous method. When the operation is finished, callback will
     * be invoked. You can then call webkit_favicon_database_get_favicon_finish()
     * to get the result of the operation.
     * 
     * You must call webkit_web_context_set_favicon_database_directory() for
     * the #WebKitWebContext associated with this #WebKitFaviconDatabase
     * before attempting to use this function; otherwise,
     * webkit_favicon_database_get_favicon_finish() will return
     * %WEBKIT_FAVICON_DATABASE_ERROR_NOT_INITIALIZED.
     * @param pageUri URI of the page for which we want to retrieve the favicon
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is            satisfied or %NULL if you don't care about the result.
     */
    getFavicon(pageUri: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with webkit_favicon_database_get_favicon().
     * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to webkit_favicon_database_get_favicon()
     */
    getFaviconFinish(result: Gio.AsyncResult): cairo.Surface
    /**
     * Obtains the URI of the favicon for the given `page_uri`.
     * @param pageUri URI of the page containing the icon
     */
    getFaviconUri(pageUri: string): string

    // Own signals of WebKit2-5.0.WebKit2.FaviconDatabase

    connect(sigName: "favicon-changed", callback: FaviconDatabase_FaviconChangedSignalCallback): number
    on(sigName: "favicon-changed", callback: FaviconDatabase_FaviconChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "favicon-changed", callback: FaviconDatabase_FaviconChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "favicon-changed", callback: FaviconDatabase_FaviconChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "favicon-changed", faviconUri: string, ...args: any[]): void

    // Class property signals of WebKit2-5.0.WebKit2.FaviconDatabase

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FaviconDatabase extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.FaviconDatabase

    static name: string
    static $gtype: GObject.GType<FaviconDatabase>

    // Constructors of WebKit2-5.0.WebKit2.FaviconDatabase

    constructor(config?: FaviconDatabase_ConstructProps) 
    _init(config?: FaviconDatabase_ConstructProps): void
}

interface FileChooserRequest_ConstructProps extends GObject.Object_ConstructProps {
}

interface FileChooserRequest {

    // Own properties of WebKit2-5.0.WebKit2.FileChooserRequest

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

    // Own fields of WebKit2-5.0.WebKit2.FileChooserRequest

    parent: GObject.Object

    // Owm methods of WebKit2-5.0.WebKit2.FileChooserRequest

    /**
     * Ask WebKit to cancel the request. It's important to do this in case
     * no selection has been made in the client, otherwise the request
     * won't be properly completed and the browser will keep the request
     * pending forever, which might cause the browser to hang.
     */
    cancel(): void
    /**
     * Get the list of MIME types the file chooser dialog should handle,
     * in the format specified in RFC 2046 for "media types". Its contents
     * depend on the value of the 'accept' attribute for HTML input
     * elements. This function should normally be called before presenting
     * the file chooser dialog to the user, to decide whether to allow the
     * user to select multiple files at once or only one.
     */
    getMimeTypes(): string[]
    /**
     * Get the filter currently associated with the request, ready to be
     * used by #GtkFileChooser. This function should normally be called
     * before presenting the file chooser dialog to the user, to decide
     * whether to apply a filter so the user would not be allowed to
     * select files with other MIME types.
     * 
     * See webkit_file_chooser_request_get_mime_types() if you are
     * interested in getting the list of accepted MIME types.
     */
    getMimeTypesFilter(): Gtk.FileFilter
    /**
     * Determine whether the file chooser associated to this
     * #WebKitFileChooserRequest should allow selecting multiple files,
     * which depends on the HTML input element having a 'multiple'
     * attribute defined.
     */
    getSelectMultiple(): boolean
    /**
     * Get the list of selected files currently associated to the
     * request. Initially, the return value of this method contains any
     * files selected in previous file chooser requests for this HTML
     * input element. Once webkit_file_chooser_request_select_files, the
     * value will reflect whatever files are given.
     * 
     * This function should normally be called only before presenting the
     * file chooser dialog to the user, to decide whether to perform some
     * extra action, like pre-selecting the files from a previous request.
     */
    getSelectedFiles(): string[]
    /**
     * Ask WebKit to select local files for upload and complete the
     * request.
     * @param files a %NULL-terminated array of strings, containing paths to local files.
     */
    selectFiles(files: string[]): void

    // Class property signals of WebKit2-5.0.WebKit2.FileChooserRequest

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FileChooserRequest extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.FileChooserRequest

    static name: string
    static $gtype: GObject.GType<FileChooserRequest>

    // Constructors of WebKit2-5.0.WebKit2.FileChooserRequest

    constructor(config?: FileChooserRequest_ConstructProps) 
    _init(config?: FileChooserRequest_ConstructProps): void
}

interface FindController_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of WebKit2-5.0.WebKit2.FindController

    /**
     * The #WebKitWebView this controller is associated to.
     */
    webView?: WebView | null
}

/**
 * Signal callback interface for `counted-matches`
 */
interface FindController_CountedMatchesSignalCallback {
    (matchCount: number): void
}

/**
 * Signal callback interface for `failed-to-find-text`
 */
interface FindController_FailedToFindTextSignalCallback {
    (): void
}

/**
 * Signal callback interface for `found-text`
 */
interface FindController_FoundTextSignalCallback {
    (matchCount: number): void
}

interface FindController {

    // Own properties of WebKit2-5.0.WebKit2.FindController

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
    readonly text: string
    /**
     * The #WebKitWebView this controller is associated to.
     */
    readonly webView: WebView

    // Own fields of WebKit2-5.0.WebKit2.FindController

    parent: GObject.Object

    // Owm methods of WebKit2-5.0.WebKit2.FindController

    /**
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
     * Gets the maximum number of matches to report during a text
     * lookup. This number is passed as the last argument of
     * webkit_find_controller_search() or
     * webkit_find_controller_count_matches().
     */
    getMaxMatchCount(): number
    /**
     * Gets a bitmask containing the #WebKitFindOptions associated with
     * the current search.
     */
    getOptions(): number
    /**
     * Gets the text that `find_controller` is currently searching
     * for. This text is passed to either
     * webkit_find_controller_search() or
     * webkit_find_controller_count_matches().
     */
    getSearchText(): string
    /**
     * Gets the #WebKitWebView this find controller is associated to. Do
     * not dereference the returned instance as it belongs to the
     * #WebKitFindController.
     */
    getWebView(): WebView
    /**
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

    // Own signals of WebKit2-5.0.WebKit2.FindController

    connect(sigName: "counted-matches", callback: FindController_CountedMatchesSignalCallback): number
    on(sigName: "counted-matches", callback: FindController_CountedMatchesSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "counted-matches", callback: FindController_CountedMatchesSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "counted-matches", callback: FindController_CountedMatchesSignalCallback): NodeJS.EventEmitter
    emit(sigName: "counted-matches", ...args: any[]): void
    connect(sigName: "failed-to-find-text", callback: FindController_FailedToFindTextSignalCallback): number
    on(sigName: "failed-to-find-text", callback: FindController_FailedToFindTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "failed-to-find-text", callback: FindController_FailedToFindTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "failed-to-find-text", callback: FindController_FailedToFindTextSignalCallback): NodeJS.EventEmitter
    emit(sigName: "failed-to-find-text", ...args: any[]): void
    connect(sigName: "found-text", callback: FindController_FoundTextSignalCallback): number
    on(sigName: "found-text", callback: FindController_FoundTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "found-text", callback: FindController_FoundTextSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "found-text", callback: FindController_FoundTextSignalCallback): NodeJS.EventEmitter
    emit(sigName: "found-text", ...args: any[]): void

    // Class property signals of WebKit2-5.0.WebKit2.FindController

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FindController extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.FindController

    static name: string
    static $gtype: GObject.GType<FindController>

    // Constructors of WebKit2-5.0.WebKit2.FindController

    constructor(config?: FindController_ConstructProps) 
    _init(config?: FindController_ConstructProps): void
}

interface FormSubmissionRequest_ConstructProps extends GObject.Object_ConstructProps {
}

interface FormSubmissionRequest {

    // Own fields of WebKit2-5.0.WebKit2.FormSubmissionRequest

    parent: GObject.Object

    // Owm methods of WebKit2-5.0.WebKit2.FormSubmissionRequest

    /**
     * Get a #GHashTable with the values of the text fields contained in the form
     * associated to `request`. Note that fields will be missing if the form
     * contains multiple text input elements with the same name, so this
     * function does not reliably return all text fields.
     */
    getTextFields(): GLib.HashTable | null
    /**
     * Get lists with the names and values of the text fields contained in
     * the form associated to `request`. Note that names and values may be
     * %NULL.
     * 
     * If this function returns %FALSE, then both `field_names` and
     * `field_values` will be empty.
     */
    listTextFields(): [ /* returnType */ boolean, /* fieldNames */ string[], /* fieldValues */ string[] ]
    /**
     * Continue the form submission.
     */
    submit(): void

    // Class property signals of WebKit2-5.0.WebKit2.FormSubmissionRequest

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class FormSubmissionRequest extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.FormSubmissionRequest

    static name: string
    static $gtype: GObject.GType<FormSubmissionRequest>

    // Constructors of WebKit2-5.0.WebKit2.FormSubmissionRequest

    constructor(config?: FormSubmissionRequest_ConstructProps) 
    _init(config?: FormSubmissionRequest_ConstructProps): void
}

interface GeolocationManager_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `start`
 */
interface GeolocationManager_StartSignalCallback {
    (): boolean
}

/**
 * Signal callback interface for `stop`
 */
interface GeolocationManager_StopSignalCallback {
    (): void
}

interface GeolocationManager {

    // Own properties of WebKit2-5.0.WebKit2.GeolocationManager

    /**
     * Whether high accuracy is enabled. This is a read-only property that will be
     * set to %TRUE when a #WebKitGeolocationManager needs to get accurate position updates.
     * You can connect to notify::enable-high-accuracy signal to monitor it.
     */
    readonly enableHighAccuracy: boolean

    // Own fields of WebKit2-5.0.WebKit2.GeolocationManager

    parent: GObject.Object

    // Owm methods of WebKit2-5.0.WebKit2.GeolocationManager

    /**
     * Notify `manager` that determining the position failed.
     * @param errorMessage the error message
     */
    failed(errorMessage: string): void
    /**
     * Get whether high accuracy is enabled.
     */
    getEnableHighAccuracy(): boolean
    /**
     * Notify `manager` that position has been updated to `position`.
     * @param position a #WebKitGeolocationPosition
     */
    updatePosition(position: GeolocationPosition): void

    // Own signals of WebKit2-5.0.WebKit2.GeolocationManager

    connect(sigName: "start", callback: GeolocationManager_StartSignalCallback): number
    on(sigName: "start", callback: GeolocationManager_StartSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "start", callback: GeolocationManager_StartSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "start", callback: GeolocationManager_StartSignalCallback): NodeJS.EventEmitter
    emit(sigName: "start", ...args: any[]): void
    connect(sigName: "stop", callback: GeolocationManager_StopSignalCallback): number
    on(sigName: "stop", callback: GeolocationManager_StopSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stop", callback: GeolocationManager_StopSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stop", callback: GeolocationManager_StopSignalCallback): NodeJS.EventEmitter
    emit(sigName: "stop", ...args: any[]): void

    // Class property signals of WebKit2-5.0.WebKit2.GeolocationManager

    connect(sigName: "notify::enable-high-accuracy", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-high-accuracy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-high-accuracy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-high-accuracy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-high-accuracy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GeolocationManager extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.GeolocationManager

    static name: string
    static $gtype: GObject.GType<GeolocationManager>

    // Constructors of WebKit2-5.0.WebKit2.GeolocationManager

    constructor(config?: GeolocationManager_ConstructProps) 
    _init(config?: GeolocationManager_ConstructProps): void
}

interface GeolocationPermissionRequest_ConstructProps extends PermissionRequest_ConstructProps, GObject.Object_ConstructProps {
}

interface GeolocationPermissionRequest extends PermissionRequest {

    // Own fields of WebKit2-5.0.WebKit2.GeolocationPermissionRequest

    parent: GObject.Object

    // Class property signals of WebKit2-5.0.WebKit2.GeolocationPermissionRequest

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GeolocationPermissionRequest extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.GeolocationPermissionRequest

    static name: string
    static $gtype: GObject.GType<GeolocationPermissionRequest>

    // Constructors of WebKit2-5.0.WebKit2.GeolocationPermissionRequest

    constructor(config?: GeolocationPermissionRequest_ConstructProps) 
    _init(config?: GeolocationPermissionRequest_ConstructProps): void
}

interface HitTestResult_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of WebKit2-5.0.WebKit2.HitTestResult

    /**
     * Bitmask of #WebKitHitTestResultContext flags representing
     * the context of the #WebKitHitTestResult.
     */
    context?: number | null
    /**
     * The URI of the image if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_IMAGE
     * is present in #WebKitHitTestResult:context
     */
    imageUri?: string | null
    /**
     * The label of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
     * is present in #WebKitHitTestResult:context
     */
    linkLabel?: string | null
    /**
     * The title of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
     * is present in #WebKitHitTestResult:context
     */
    linkTitle?: string | null
    /**
     * The URI of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
     * is present in #WebKitHitTestResult:context
     */
    linkUri?: string | null
    /**
     * The URI of the media if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_MEDIA
     * is present in #WebKitHitTestResult:context
     */
    mediaUri?: string | null
}

interface HitTestResult {

    // Own properties of WebKit2-5.0.WebKit2.HitTestResult

    /**
     * Bitmask of #WebKitHitTestResultContext flags representing
     * the context of the #WebKitHitTestResult.
     */
    readonly context: number
    /**
     * The URI of the image if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_IMAGE
     * is present in #WebKitHitTestResult:context
     */
    readonly imageUri: string
    /**
     * The label of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
     * is present in #WebKitHitTestResult:context
     */
    readonly linkLabel: string
    /**
     * The title of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
     * is present in #WebKitHitTestResult:context
     */
    readonly linkTitle: string
    /**
     * The URI of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
     * is present in #WebKitHitTestResult:context
     */
    readonly linkUri: string
    /**
     * The URI of the media if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_MEDIA
     * is present in #WebKitHitTestResult:context
     */
    readonly mediaUri: string

    // Own fields of WebKit2-5.0.WebKit2.HitTestResult

    parent: GObject.Object
    priv: HitTestResultPrivate

    // Owm methods of WebKit2-5.0.WebKit2.HitTestResult

    /**
     * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_EDITABLE flag is present in
     * #WebKitHitTestResult:context.
     */
    contextIsEditable(): boolean
    /**
     * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_IMAGE flag is present in
     * #WebKitHitTestResult:context.
     */
    contextIsImage(): boolean
    /**
     * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK flag is present in
     * #WebKitHitTestResult:context.
     */
    contextIsLink(): boolean
    /**
     * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_MEDIA flag is present in
     * #WebKitHitTestResult:context.
     */
    contextIsMedia(): boolean
    /**
     * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_SCROLLBAR flag is present in
     * #WebKitHitTestResult:context.
     */
    contextIsScrollbar(): boolean
    /**
     * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_SELECTION flag is present in
     * #WebKitHitTestResult:context.
     */
    contextIsSelection(): boolean
    /**
     * Gets the value of the #WebKitHitTestResult:context property.
     */
    getContext(): number
    /**
     * Gets the value of the #WebKitHitTestResult:image-uri property.
     */
    getImageUri(): string
    /**
     * Gets the value of the #WebKitHitTestResult:link-label property.
     */
    getLinkLabel(): string
    /**
     * Gets the value of the #WebKitHitTestResult:link-title property.
     */
    getLinkTitle(): string
    /**
     * Gets the value of the #WebKitHitTestResult:link-uri property.
     */
    getLinkUri(): string
    /**
     * Gets the value of the #WebKitHitTestResult:media-uri property.
     */
    getMediaUri(): string

    // Class property signals of WebKit2-5.0.WebKit2.HitTestResult

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class HitTestResult extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.HitTestResult

    static name: string
    static $gtype: GObject.GType<HitTestResult>

    // Constructors of WebKit2-5.0.WebKit2.HitTestResult

    constructor(config?: HitTestResult_ConstructProps) 
    _init(config?: HitTestResult_ConstructProps): void
}

interface InputMethodContext_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of WebKit2-5.0.WebKit2.InputMethodContext

    inputHints?: InputHints | null
    inputPurpose?: InputPurpose | null
}

/**
 * Signal callback interface for `committed`
 */
interface InputMethodContext_CommittedSignalCallback {
    (text: string): void
}

/**
 * Signal callback interface for `delete-surrounding`
 */
interface InputMethodContext_DeleteSurroundingSignalCallback {
    (offset: number, nChars: number): void
}

/**
 * Signal callback interface for `preedit-changed`
 */
interface InputMethodContext_PreeditChangedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `preedit-finished`
 */
interface InputMethodContext_PreeditFinishedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `preedit-started`
 */
interface InputMethodContext_PreeditStartedSignalCallback {
    (): void
}

interface InputMethodContext {

    // Own properties of WebKit2-5.0.WebKit2.InputMethodContext

    inputHints: InputHints
    inputPurpose: InputPurpose

    // Own fields of WebKit2-5.0.WebKit2.InputMethodContext

    parent: GObject.Object

    // Owm methods of WebKit2-5.0.WebKit2.InputMethodContext

    /**
     * Allow `key_event` to be handled by the input method. If %TRUE is returned, then no further processing should be
     * done for the key event.
     * @param keyEvent the key event to filter
     */
    filterKeyEvent(keyEvent: Gdk.Event): boolean
    /**
     * Get the value of the #WebKitInputMethodContext:input-hints property.
     */
    getInputHints(): InputHints
    /**
     * Get the value of the #WebKitInputMethodContext:input-purpose property.
     */
    getInputPurpose(): InputPurpose
    /**
     * Get the current preedit string for the `context,` and a list of WebKitInputMethodUnderline to apply to the string.
     * The string will be displayed inserted at `cursor_offset`.
     */
    getPreedit(): [ /* text */ string | null, /* underlines */ InputMethodUnderline[] | null, /* cursorOffset */ number | null ]
    /**
     * Notify `context` that cursor area changed in input associated.
     * @param x the x coordinate of cursor location
     * @param y the y coordinate of cursor location
     * @param width the width of cursor area
     * @param height the height of cursor area
     */
    notifyCursorArea(x: number, y: number, width: number, height: number): void
    /**
     * Notify `context` that input associated has gained focus.
     */
    notifyFocusIn(): void
    /**
     * Notify `context` that input associated has lost focus.
     */
    notifyFocusOut(): void
    /**
     * Notify `context` that the context surrounding the cursor has changed.
     * If there's no selection `selection_index` is the same as `cursor_index`.
     * @param text text surrounding the insertion point
     * @param length the length of `text,` or -1 if `text` is nul-terminated
     * @param cursorIndex the byte index of the insertion cursor within `text`.
     * @param selectionIndex the byte index of the selection cursor within `text`.
     */
    notifySurrounding(text: string, length: number, cursorIndex: number, selectionIndex: number): void
    /**
     * Reset the `context`. This will typically cause the input to clear the preedit state.
     */
    reset(): void
    /**
     * Set whether `context` should enable preedit to display feedback.
     * @param enabled whether to enable preedit
     */
    setEnablePreedit(enabled: boolean): void
    setInputHints(hints: InputHints): void
    /**
     * Set the value of the #WebKitInputMethodContext:input-purpose property.
     * @param purpose a #WebKitInputPurpose
     */
    setInputPurpose(purpose: InputPurpose): void

    // Own signals of WebKit2-5.0.WebKit2.InputMethodContext

    connect(sigName: "committed", callback: InputMethodContext_CommittedSignalCallback): number
    on(sigName: "committed", callback: InputMethodContext_CommittedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "committed", callback: InputMethodContext_CommittedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "committed", callback: InputMethodContext_CommittedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "committed", ...args: any[]): void
    connect(sigName: "delete-surrounding", callback: InputMethodContext_DeleteSurroundingSignalCallback): number
    on(sigName: "delete-surrounding", callback: InputMethodContext_DeleteSurroundingSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "delete-surrounding", callback: InputMethodContext_DeleteSurroundingSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "delete-surrounding", callback: InputMethodContext_DeleteSurroundingSignalCallback): NodeJS.EventEmitter
    emit(sigName: "delete-surrounding", nChars: number, ...args: any[]): void
    connect(sigName: "preedit-changed", callback: InputMethodContext_PreeditChangedSignalCallback): number
    on(sigName: "preedit-changed", callback: InputMethodContext_PreeditChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "preedit-changed", callback: InputMethodContext_PreeditChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "preedit-changed", callback: InputMethodContext_PreeditChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "preedit-changed", ...args: any[]): void
    connect(sigName: "preedit-finished", callback: InputMethodContext_PreeditFinishedSignalCallback): number
    on(sigName: "preedit-finished", callback: InputMethodContext_PreeditFinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "preedit-finished", callback: InputMethodContext_PreeditFinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "preedit-finished", callback: InputMethodContext_PreeditFinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "preedit-finished", ...args: any[]): void
    connect(sigName: "preedit-started", callback: InputMethodContext_PreeditStartedSignalCallback): number
    on(sigName: "preedit-started", callback: InputMethodContext_PreeditStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "preedit-started", callback: InputMethodContext_PreeditStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "preedit-started", callback: InputMethodContext_PreeditStartedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "preedit-started", ...args: any[]): void

    // Class property signals of WebKit2-5.0.WebKit2.InputMethodContext

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class InputMethodContext extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.InputMethodContext

    static name: string
    static $gtype: GObject.GType<InputMethodContext>

    // Constructors of WebKit2-5.0.WebKit2.InputMethodContext

    constructor(config?: InputMethodContext_ConstructProps) 
    _init(config?: InputMethodContext_ConstructProps): void
}

interface InstallMissingMediaPluginsPermissionRequest_ConstructProps extends PermissionRequest_ConstructProps, GObject.Object_ConstructProps {
}

interface InstallMissingMediaPluginsPermissionRequest extends PermissionRequest {

    // Own fields of WebKit2-5.0.WebKit2.InstallMissingMediaPluginsPermissionRequest

    parent: GObject.Object
    priv: InstallMissingMediaPluginsPermissionRequestPrivate

    // Owm methods of WebKit2-5.0.WebKit2.InstallMissingMediaPluginsPermissionRequest

    /**
     * Gets the description about the missing plugins provided by the media backend when a media couldn't be played.
     */
    getDescription(): string

    // Class property signals of WebKit2-5.0.WebKit2.InstallMissingMediaPluginsPermissionRequest

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class InstallMissingMediaPluginsPermissionRequest extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.InstallMissingMediaPluginsPermissionRequest

    static name: string
    static $gtype: GObject.GType<InstallMissingMediaPluginsPermissionRequest>

    // Constructors of WebKit2-5.0.WebKit2.InstallMissingMediaPluginsPermissionRequest

    constructor(config?: InstallMissingMediaPluginsPermissionRequest_ConstructProps) 
    _init(config?: InstallMissingMediaPluginsPermissionRequest_ConstructProps): void
}

interface MediaKeySystemPermissionRequest_ConstructProps extends PermissionRequest_ConstructProps, GObject.Object_ConstructProps {
}

interface MediaKeySystemPermissionRequest extends PermissionRequest {

    // Own fields of WebKit2-5.0.WebKit2.MediaKeySystemPermissionRequest

    parent: GObject.Object

    // Class property signals of WebKit2-5.0.WebKit2.MediaKeySystemPermissionRequest

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MediaKeySystemPermissionRequest extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.MediaKeySystemPermissionRequest

    static name: string
    static $gtype: GObject.GType<MediaKeySystemPermissionRequest>

    // Constructors of WebKit2-5.0.WebKit2.MediaKeySystemPermissionRequest

    constructor(config?: MediaKeySystemPermissionRequest_ConstructProps) 
    _init(config?: MediaKeySystemPermissionRequest_ConstructProps): void
}

interface NavigationPolicyDecision_ConstructProps extends PolicyDecision_ConstructProps {
}

interface NavigationPolicyDecision {

    // Own properties of WebKit2-5.0.WebKit2.NavigationPolicyDecision

    /**
     * If this navigation request targets a new frame, this property contains
     * the name of that frame. For example if the decision was triggered by clicking a
     * link with a target attribute equal to "_blank", this property will contain the
     * value of that attribute. In all other cases, this value will be %NULL.
     */
    readonly frameName: string
    /**
     * If the navigation associated with this policy decision was originally
     * triggered by a mouse event, this property contains a bitmask of various
     * #GdkModifierType values describing the modifiers used for that click.
     * If the navigation was not triggered by a mouse event or no modifiers
     * were active, the value of this property will be zero.
     */
    readonly modifiers: number
    /**
     * If the navigation associated with this policy decision was originally
     * triggered by a mouse event, this property contains non-zero button number
     * of the button triggering that event. The button numbers match those from GDK.
     * If the navigation was not triggered by a mouse event, the value of this
     * property will be 0.
     */
    readonly mouseButton: number
    /**
     * The #WebKitNavigationAction that triggered this policy decision.
     */
    readonly navigationAction: NavigationAction
    /**
     * The type of navigation that triggered this policy decision. This is
     * useful for enacting different policies depending on what type of user
     * action caused the navigation.
     */
    readonly navigationType: NavigationType
    /**
     * This property contains the #WebKitURIRequest associated with this
     * navigation.
     */
    readonly request: URIRequest

    // Own fields of WebKit2-5.0.WebKit2.NavigationPolicyDecision

    parent: PolicyDecision

    // Owm methods of WebKit2-5.0.WebKit2.NavigationPolicyDecision

    /**
     * Gets the value of the #WebKitNavigationPolicyDecision:frame-name property.
     */
    getFrameName(): string
    /**
     * Gets the value of the #WebKitNavigationPolicyDecision:modifiers property.
     */
    getModifiers(): number
    /**
     * Gets the value of the #WebKitNavigationPolicyDecision:mouse-button property.
     */
    getMouseButton(): number
    /**
     * Gets the value of the #WebKitNavigationPolicyDecision:navigation-action property.
     */
    getNavigationAction(): NavigationAction
    /**
     * Gets the value of the #WebKitNavigationPolicyDecision:navigation-type property.
     */
    getNavigationType(): NavigationType
    /**
     * Gets the value of the #WebKitNavigationPolicyDecision:request property.
     */
    getRequest(): URIRequest

    // Class property signals of WebKit2-5.0.WebKit2.NavigationPolicyDecision

    connect(sigName: "notify::frame-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::frame-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::frame-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::frame-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::frame-name", ...args: any[]): void
    connect(sigName: "notify::modifiers", callback: (...args: any[]) => void): number
    on(sigName: "notify::modifiers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::modifiers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::modifiers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::modifiers", ...args: any[]): void
    connect(sigName: "notify::mouse-button", callback: (...args: any[]) => void): number
    on(sigName: "notify::mouse-button", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mouse-button", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mouse-button", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mouse-button", ...args: any[]): void
    connect(sigName: "notify::navigation-action", callback: (...args: any[]) => void): number
    on(sigName: "notify::navigation-action", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::navigation-action", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::navigation-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::navigation-action", ...args: any[]): void
    connect(sigName: "notify::navigation-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::navigation-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::navigation-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::navigation-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::navigation-type", ...args: any[]): void
    connect(sigName: "notify::request", callback: (...args: any[]) => void): number
    on(sigName: "notify::request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class NavigationPolicyDecision extends PolicyDecision {

    // Own properties of WebKit2-5.0.WebKit2.NavigationPolicyDecision

    static name: string
    static $gtype: GObject.GType<NavigationPolicyDecision>

    // Constructors of WebKit2-5.0.WebKit2.NavigationPolicyDecision

    constructor(config?: NavigationPolicyDecision_ConstructProps) 
    _init(config?: NavigationPolicyDecision_ConstructProps): void
}

interface Notification_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `clicked`
 */
interface Notification_ClickedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `closed`
 */
interface Notification_ClosedSignalCallback {
    (): void
}

interface Notification {

    // Own properties of WebKit2-5.0.WebKit2.Notification

    /**
     * The body for the notification.
     */
    readonly body: string
    /**
     * The unique id for the notification.
     */
    readonly id: number
    /**
     * The tag identifier for the notification.
     */
    readonly tag: string
    /**
     * The title for the notification.
     */
    readonly title: string

    // Own fields of WebKit2-5.0.WebKit2.Notification

    parent: GObject.Object
    priv: NotificationPrivate

    // Owm methods of WebKit2-5.0.WebKit2.Notification

    /**
     * Tells WebKit the notification has been clicked. This will emit the
     * #WebKitNotification::clicked signal.
     */
    clicked(): void
    /**
     * Closes the notification.
     */
    close(): void
    /**
     * Obtains the body for the notification.
     */
    getBody(): string
    /**
     * Obtains the unique id for the notification.
     */
    getId(): number
    /**
     * Obtains the tag identifier for the notification.
     */
    getTag(): string | null
    /**
     * Obtains the title for the notification.
     */
    getTitle(): string

    // Own signals of WebKit2-5.0.WebKit2.Notification

    connect(sigName: "clicked", callback: Notification_ClickedSignalCallback): number
    on(sigName: "clicked", callback: Notification_ClickedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "clicked", callback: Notification_ClickedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "clicked", callback: Notification_ClickedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "clicked", ...args: any[]): void
    connect(sigName: "closed", callback: Notification_ClosedSignalCallback): number
    on(sigName: "closed", callback: Notification_ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: Notification_ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: Notification_ClosedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "closed", ...args: any[]): void

    // Class property signals of WebKit2-5.0.WebKit2.Notification

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Notification extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.Notification

    static name: string
    static $gtype: GObject.GType<Notification>

    // Constructors of WebKit2-5.0.WebKit2.Notification

    constructor(config?: Notification_ConstructProps) 
    _init(config?: Notification_ConstructProps): void
}

interface NotificationPermissionRequest_ConstructProps extends PermissionRequest_ConstructProps, GObject.Object_ConstructProps {
}

interface NotificationPermissionRequest extends PermissionRequest {

    // Own fields of WebKit2-5.0.WebKit2.NotificationPermissionRequest

    parent: GObject.Object

    // Class property signals of WebKit2-5.0.WebKit2.NotificationPermissionRequest

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class NotificationPermissionRequest extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.NotificationPermissionRequest

    static name: string
    static $gtype: GObject.GType<NotificationPermissionRequest>

    // Constructors of WebKit2-5.0.WebKit2.NotificationPermissionRequest

    constructor(config?: NotificationPermissionRequest_ConstructProps) 
    _init(config?: NotificationPermissionRequest_ConstructProps): void
}

interface OptionMenu_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `close`
 */
interface OptionMenu_CloseSignalCallback {
    (): void
}

interface OptionMenu {

    // Own fields of WebKit2-5.0.WebKit2.OptionMenu

    parent: GObject.Object
    priv: OptionMenuPrivate

    // Owm methods of WebKit2-5.0.WebKit2.OptionMenu

    /**
     * Activates the #WebKitOptionMenuItem at `index` in `menu`. Activating an item changes the value
     * of the element making the item the active one. You are expected to close the menu with
     * webkit_option_menu_close() after activating an item, calling this function again will have no
     * effect.
     * @param index the index of the item
     */
    activateItem(index: number): void
    /**
     * Request to close a #WebKitOptionMenu. This emits WebKitOptionMenu::close signal.
     * This function should always be called to notify WebKit that the associated
     * menu has been closed. If the menu is closed and neither webkit_option_menu_select_item()
     * nor webkit_option_menu_activate_item() have been called, the element value remains
     * unchanged.
     */
    close(): void
    /**
     * Returns the #WebKitOptionMenuItem at `index` in `menu`.
     * @param index the index of the item
     */
    getItem(index: number): OptionMenuItem
    /**
     * Gets the length of the `menu`.
     */
    getNItems(): number
    /**
     * Selects the #WebKitOptionMenuItem at `index` in `menu`. Selecting an item changes the
     * text shown by the combo button, but it doesn't change the value of the element. You need to
     * explicitly activate the item with webkit_option_menu_select_item() or close the menu with
     * webkit_option_menu_close() in which case the currently selected item will be activated.
     * @param index the index of the item
     */
    selectItem(index: number): void

    // Own signals of WebKit2-5.0.WebKit2.OptionMenu

    connect(sigName: "close", callback: OptionMenu_CloseSignalCallback): number
    on(sigName: "close", callback: OptionMenu_CloseSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "close", callback: OptionMenu_CloseSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "close", callback: OptionMenu_CloseSignalCallback): NodeJS.EventEmitter
    emit(sigName: "close", ...args: any[]): void

    // Class property signals of WebKit2-5.0.WebKit2.OptionMenu

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class OptionMenu extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.OptionMenu

    static name: string
    static $gtype: GObject.GType<OptionMenu>

    // Constructors of WebKit2-5.0.WebKit2.OptionMenu

    constructor(config?: OptionMenu_ConstructProps) 
    _init(config?: OptionMenu_ConstructProps): void
}

interface Plugin_ConstructProps extends GObject.Object_ConstructProps {
}

interface Plugin {

    // Own fields of WebKit2-5.0.WebKit2.Plugin

    parent: GObject.Object
    priv: PluginPrivate

    // Owm methods of WebKit2-5.0.WebKit2.Plugin

    getDescription(): string
    /**
     * Get information about MIME types handled by the plugin,
     * as a list of #WebKitMimeInfo.
     */
    getMimeInfoList(): MimeInfo[]
    getName(): string
    getPath(): string

    // Class property signals of WebKit2-5.0.WebKit2.Plugin

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Plugin extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.Plugin

    static name: string
    static $gtype: GObject.GType<Plugin>

    // Constructors of WebKit2-5.0.WebKit2.Plugin

    constructor(config?: Plugin_ConstructProps) 
    _init(config?: Plugin_ConstructProps): void
}

interface PointerLockPermissionRequest_ConstructProps extends PermissionRequest_ConstructProps, GObject.Object_ConstructProps {
}

interface PointerLockPermissionRequest extends PermissionRequest {

    // Own fields of WebKit2-5.0.WebKit2.PointerLockPermissionRequest

    parent: GObject.Object

    // Class property signals of WebKit2-5.0.WebKit2.PointerLockPermissionRequest

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class PointerLockPermissionRequest extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.PointerLockPermissionRequest

    static name: string
    static $gtype: GObject.GType<PointerLockPermissionRequest>

    // Constructors of WebKit2-5.0.WebKit2.PointerLockPermissionRequest

    constructor(config?: PointerLockPermissionRequest_ConstructProps) 
    _init(config?: PointerLockPermissionRequest_ConstructProps): void
}

interface PolicyDecision_ConstructProps extends GObject.Object_ConstructProps {
}

interface PolicyDecision {

    // Own fields of WebKit2-5.0.WebKit2.PolicyDecision

    parent: GObject.Object

    // Owm methods of WebKit2-5.0.WebKit2.PolicyDecision

    /**
     * Spawn a download from this decision.
     */
    download(): void
    /**
     * Ignore the action which triggered this decision. For instance, for a
     * #WebKitResponsePolicyDecision, this would cancel the request.
     */
    ignore(): void
    /**
     * Accept the action which triggered this decision.
     */
    use(): void
    /**
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

    // Class property signals of WebKit2-5.0.WebKit2.PolicyDecision

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class PolicyDecision extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.PolicyDecision

    static name: string
    static $gtype: GObject.GType<PolicyDecision>

    // Constructors of WebKit2-5.0.WebKit2.PolicyDecision

    constructor(config?: PolicyDecision_ConstructProps) 
    _init(config?: PolicyDecision_ConstructProps): void
}

interface PrintCustomWidget_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of WebKit2-5.0.WebKit2.PrintCustomWidget

    /**
     * The title of the custom widget.
     */
    title?: string | null
    /**
     * The custom #GtkWidget that will be embedded in the dialog.
     */
    widget?: Gtk.Widget | null
}

/**
 * Signal callback interface for `apply`
 */
interface PrintCustomWidget_ApplySignalCallback {
    (): void
}

/**
 * Signal callback interface for `update`
 */
interface PrintCustomWidget_UpdateSignalCallback {
    (pageSetup: Gtk.PageSetup, printSettings: Gtk.PrintSettings): void
}

interface PrintCustomWidget {

    // Own properties of WebKit2-5.0.WebKit2.PrintCustomWidget

    /**
     * The title of the custom widget.
     */
    readonly title: string
    /**
     * The custom #GtkWidget that will be embedded in the dialog.
     */
    readonly widget: Gtk.Widget

    // Own fields of WebKit2-5.0.WebKit2.PrintCustomWidget

    parent: GObject.Object
    priv: PrintCustomWidgetPrivate

    // Owm methods of WebKit2-5.0.WebKit2.PrintCustomWidget

    /**
     * Return the value of #WebKitPrintCustomWidget:title property for the given
     * `print_custom_widget` object.
     */
    getTitle(): string
    /**
     * Return the value of #WebKitPrintCustomWidget:widget property for the given
     * `print_custom_widget` object. The returned value will always be valid if called
     * from #WebKitPrintCustomWidget::apply or #WebKitPrintCustomWidget::update
     * callbacks, but it will be %NULL if called after the
     * #WebKitPrintCustomWidget::apply signal is emitted.
     */
    getWidget(): Gtk.Widget

    // Own signals of WebKit2-5.0.WebKit2.PrintCustomWidget

    connect(sigName: "apply", callback: PrintCustomWidget_ApplySignalCallback): number
    on(sigName: "apply", callback: PrintCustomWidget_ApplySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "apply", callback: PrintCustomWidget_ApplySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "apply", callback: PrintCustomWidget_ApplySignalCallback): NodeJS.EventEmitter
    emit(sigName: "apply", ...args: any[]): void
    connect(sigName: "update", callback: PrintCustomWidget_UpdateSignalCallback): number
    on(sigName: "update", callback: PrintCustomWidget_UpdateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "update", callback: PrintCustomWidget_UpdateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "update", callback: PrintCustomWidget_UpdateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "update", printSettings: Gtk.PrintSettings, ...args: any[]): void

    // Class property signals of WebKit2-5.0.WebKit2.PrintCustomWidget

    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::widget", callback: (...args: any[]) => void): number
    on(sigName: "notify::widget", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::widget", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::widget", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class PrintCustomWidget extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.PrintCustomWidget

    static name: string
    static $gtype: GObject.GType<PrintCustomWidget>

    // Constructors of WebKit2-5.0.WebKit2.PrintCustomWidget

    constructor(config?: PrintCustomWidget_ConstructProps) 
    /**
     * Create a new #WebKitPrintCustomWidget with given `widget` and `title`. The `widget`
     * ownership is taken and it is destroyed together with the dialog even if this
     * object could still be alive at that point. You typically want to pass a container
     * widget with multiple widgets in it.
     * @constructor 
     * @param widget a #GtkWidget
     * @param title a `widget'`s title
     */
    constructor(widget: Gtk.Widget, title: string) 
    /**
     * Create a new #WebKitPrintCustomWidget with given `widget` and `title`. The `widget`
     * ownership is taken and it is destroyed together with the dialog even if this
     * object could still be alive at that point. You typically want to pass a container
     * widget with multiple widgets in it.
     * @constructor 
     * @param widget a #GtkWidget
     * @param title a `widget'`s title
     */
    static new(widget: Gtk.Widget, title: string): PrintCustomWidget
    _init(config?: PrintCustomWidget_ConstructProps): void
}

interface PrintOperation_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of WebKit2-5.0.WebKit2.PrintOperation

    /**
     * The initial #GtkPageSetup for the print operation.
     */
    pageSetup?: Gtk.PageSetup | null
    /**
     * The initial #GtkPrintSettings for the print operation.
     */
    printSettings?: Gtk.PrintSettings | null
    /**
     * The #WebKitWebView that will be printed.
     */
    webView?: WebView | null
}

/**
 * Signal callback interface for `create-custom-widget`
 */
interface PrintOperation_CreateCustomWidgetSignalCallback {
    (): PrintCustomWidget
}

/**
 * Signal callback interface for `failed`
 */
interface PrintOperation_FailedSignalCallback {
    (error: GLib.Error): void
}

/**
 * Signal callback interface for `finished`
 */
interface PrintOperation_FinishedSignalCallback {
    (): void
}

interface PrintOperation {

    // Own properties of WebKit2-5.0.WebKit2.PrintOperation

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

    // Own fields of WebKit2-5.0.WebKit2.PrintOperation

    parent: GObject.Object
    priv: PrintOperationPrivate

    // Owm methods of WebKit2-5.0.WebKit2.PrintOperation

    /**
     * Return the current page setup of `print_operation`. It returns %NULL until
     * either webkit_print_operation_set_page_setup() or webkit_print_operation_run_dialog()
     * have been called.
     */
    getPageSetup(): Gtk.PageSetup
    /**
     * Return the current print settings of `print_operation`. It returns %NULL until
     * either webkit_print_operation_set_print_settings() or webkit_print_operation_run_dialog()
     * have been called.
     */
    getPrintSettings(): Gtk.PrintSettings
    /**
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
     */
    runDialog(parent: Gtk.Window | null): PrintOperationResponse
    /**
     * Set the current page setup of `print_operation`. Current page setup is used for the
     * initial values of the print dialog when webkit_print_operation_run_dialog() is called.
     * @param pageSetup a #GtkPageSetup to set
     */
    setPageSetup(pageSetup: Gtk.PageSetup): void
    /**
     * Set the current print settings of `print_operation`. Current print settings are used for
     * the initial values of the print dialog when webkit_print_operation_run_dialog() is called.
     * @param printSettings a #GtkPrintSettings to set
     */
    setPrintSettings(printSettings: Gtk.PrintSettings): void

    // Own signals of WebKit2-5.0.WebKit2.PrintOperation

    connect(sigName: "create-custom-widget", callback: PrintOperation_CreateCustomWidgetSignalCallback): number
    on(sigName: "create-custom-widget", callback: PrintOperation_CreateCustomWidgetSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "create-custom-widget", callback: PrintOperation_CreateCustomWidgetSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "create-custom-widget", callback: PrintOperation_CreateCustomWidgetSignalCallback): NodeJS.EventEmitter
    emit(sigName: "create-custom-widget", ...args: any[]): void
    connect(sigName: "failed", callback: PrintOperation_FailedSignalCallback): number
    on(sigName: "failed", callback: PrintOperation_FailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "failed", callback: PrintOperation_FailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "failed", callback: PrintOperation_FailedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "failed", ...args: any[]): void
    connect(sigName: "finished", callback: PrintOperation_FinishedSignalCallback): number
    on(sigName: "finished", callback: PrintOperation_FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: PrintOperation_FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: PrintOperation_FinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "finished", ...args: any[]): void

    // Class property signals of WebKit2-5.0.WebKit2.PrintOperation

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class PrintOperation extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.PrintOperation

    static name: string
    static $gtype: GObject.GType<PrintOperation>

    // Constructors of WebKit2-5.0.WebKit2.PrintOperation

    constructor(config?: PrintOperation_ConstructProps) 
    /**
     * Create a new #WebKitPrintOperation to print `web_view` contents.
     * @constructor 
     * @param webView a #WebKitWebView
     */
    constructor(webView: WebView) 
    /**
     * Create a new #WebKitPrintOperation to print `web_view` contents.
     * @constructor 
     * @param webView a #WebKitWebView
     */
    static new(webView: WebView): PrintOperation
    _init(config?: PrintOperation_ConstructProps): void
}

interface ResponsePolicyDecision_ConstructProps extends PolicyDecision_ConstructProps {
}

interface ResponsePolicyDecision {

    // Own properties of WebKit2-5.0.WebKit2.ResponsePolicyDecision

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

    // Own fields of WebKit2-5.0.WebKit2.ResponsePolicyDecision

    parent: PolicyDecision

    // Owm methods of WebKit2-5.0.WebKit2.ResponsePolicyDecision

    /**
     * Return the #WebKitURIRequest associated with the response decision.
     * Modifications to the returned object are <emphasis>not</emphasis> taken
     * into account when the request is sent over the network, and is intended
     * only to aid in evaluating whether a response decision should be taken or
     * not. To modify requests before they are sent over the network the
     * #WebKitPage::send-request signal can be used instead.
     */
    getRequest(): URIRequest
    /**
     * Gets the value of the #WebKitResponsePolicyDecision:response property.
     */
    getResponse(): URIResponse
    /**
     * Gets whether the MIME type of the response can be displayed in the #WebKitWebView
     * that triggered this policy decision request. See also webkit_web_view_can_show_mime_type().
     */
    isMimeTypeSupported(): boolean

    // Class property signals of WebKit2-5.0.WebKit2.ResponsePolicyDecision

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ResponsePolicyDecision extends PolicyDecision {

    // Own properties of WebKit2-5.0.WebKit2.ResponsePolicyDecision

    static name: string
    static $gtype: GObject.GType<ResponsePolicyDecision>

    // Constructors of WebKit2-5.0.WebKit2.ResponsePolicyDecision

    constructor(config?: ResponsePolicyDecision_ConstructProps) 
    _init(config?: ResponsePolicyDecision_ConstructProps): void
}

interface SecurityManager_ConstructProps extends GObject.Object_ConstructProps {
}

interface SecurityManager {

    // Own fields of WebKit2-5.0.WebKit2.SecurityManager

    parent: GObject.Object
    priv: SecurityManagerPrivate

    // Owm methods of WebKit2-5.0.WebKit2.SecurityManager

    /**
     * Register `scheme` as a CORS (Cross-origin resource sharing) enabled scheme.
     * This means that CORS requests are allowed. See W3C CORS specification
     * http://www.w3.org/TR/cors/.
     * @param scheme a URI scheme
     */
    registerUriSchemeAsCorsEnabled(scheme: string): void
    /**
     * Register `scheme` as a display isolated scheme. This means that pages cannot
     * display these URIs unless they are from the same scheme.
     * @param scheme a URI scheme
     */
    registerUriSchemeAsDisplayIsolated(scheme: string): void
    /**
     * Register `scheme` as an empty document scheme. This means that
     * they are allowed to commit synchronously.
     * @param scheme a URI scheme
     */
    registerUriSchemeAsEmptyDocument(scheme: string): void
    /**
     * Register `scheme` as a local scheme. This means that other non-local pages
     * cannot link to or access URIs of this scheme.
     * @param scheme a URI scheme
     */
    registerUriSchemeAsLocal(scheme: string): void
    /**
     * Register `scheme` as a no-access scheme. This means that pages loaded
     * with this URI scheme cannot access pages loaded with any other URI scheme.
     * @param scheme a URI scheme
     */
    registerUriSchemeAsNoAccess(scheme: string): void
    /**
     * Register `scheme` as a secure scheme. This means that mixed
     * content warnings won't be generated for this scheme when
     * included by an HTTPS page.
     * @param scheme a URI scheme
     */
    registerUriSchemeAsSecure(scheme: string): void
    /**
     * Whether `scheme` is considered as a CORS enabled scheme.
     * See also webkit_security_manager_register_uri_scheme_as_cors_enabled().
     * @param scheme a URI scheme
     */
    uriSchemeIsCorsEnabled(scheme: string): boolean
    /**
     * Whether `scheme` is considered as a display isolated scheme.
     * See also webkit_security_manager_register_uri_scheme_as_display_isolated().
     * @param scheme a URI scheme
     */
    uriSchemeIsDisplayIsolated(scheme: string): boolean
    /**
     * Whether `scheme` is considered as an empty document scheme.
     * See also webkit_security_manager_register_uri_scheme_as_empty_document().
     * @param scheme a URI scheme
     */
    uriSchemeIsEmptyDocument(scheme: string): boolean
    /**
     * Whether `scheme` is considered as a local scheme.
     * See also webkit_security_manager_register_uri_scheme_as_local().
     * @param scheme a URI scheme
     */
    uriSchemeIsLocal(scheme: string): boolean
    /**
     * Whether `scheme` is considered as a no-access scheme.
     * See also webkit_security_manager_register_uri_scheme_as_no_access().
     * @param scheme a URI scheme
     */
    uriSchemeIsNoAccess(scheme: string): boolean
    /**
     * Whether `scheme` is considered as a secure scheme.
     * See also webkit_security_manager_register_uri_scheme_as_secure().
     * @param scheme a URI scheme
     */
    uriSchemeIsSecure(scheme: string): boolean

    // Class property signals of WebKit2-5.0.WebKit2.SecurityManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class SecurityManager extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.SecurityManager

    static name: string
    static $gtype: GObject.GType<SecurityManager>

    // Constructors of WebKit2-5.0.WebKit2.SecurityManager

    constructor(config?: SecurityManager_ConstructProps) 
    _init(config?: SecurityManager_ConstructProps): void
}

interface Settings_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of WebKit2-5.0.WebKit2.Settings

    /**
     * Whether file access is allowed from file URLs. By default, when
     * something is loaded in a #WebKitWebView using a file URI, cross
     * origin requests to other file resources are not allowed. This
     * setting allows you to change that behaviour, so that it would be
     * possible to do a XMLHttpRequest of a local file, for example.
     */
    allowFileAccessFromFileUrls?: boolean | null
    /**
     * Determine whether it's allowed to create and run modal dialogs
     * from a #WebKitWebView through JavaScript with
     * <function>window.showModalDialog</function>. If it's set to
     * %FALSE, the associated #WebKitWebView won't be able to create
     * new modal dialogs, so not even the #WebKitWebView::create
     * signal will be emitted.
     */
    allowModalDialogs?: boolean | null
    /**
     * Whether or not the top frame is allowed to navigate to data URLs. It is disabled by default
     * due to the risk it poses when loading untrusted URLs, with data URLs being used in scamming
     * and phishing attacks. In contrast, a scenario where it could be enabled could be an app that
     * embeds a WebView and you have control of the pages being show instead of a generic browser.
     */
    allowTopNavigationToDataUrls?: boolean | null
    /**
     * Whether or not JavaScript running in the context of a file scheme URL
     * should be allowed to access content from any origin.  By default, when
     * something is loaded in a #WebKitWebView using a file scheme URL,
     * access to the local file system and arbitrary local storage is not
     * allowed. This setting allows you to change that behaviour, so that
     * it would be possible to use local storage, for example.
     */
    allowUniversalAccessFromFileUrls?: boolean | null
    /**
     * Determines whether images should be automatically loaded or not.
     * On devices where network bandwidth is of concern, it might be
     * useful to turn this property off.
     */
    autoLoadImages?: boolean | null
    /**
     * The font family used as the default for content using a cursive font.
     */
    cursiveFontFamily?: string | null
    /**
     * The default text charset used when interpreting content with an unspecified charset.
     */
    defaultCharset?: string | null
    /**
     * The font family to use as the default for content that does not specify a font.
     */
    defaultFontFamily?: string | null
    /**
     * The default font size in pixels to use for content displayed if
     * no font size is specified.
     */
    defaultFontSize?: number | null
    /**
     * The default font size in pixels to use for content displayed in
     * monospace font if no font size is specified.
     */
    defaultMonospaceFontSize?: number | null
    /**
     * Whether to draw compositing borders and repaint counters on layers drawn
     * with accelerated compositing. This is useful for debugging issues related
     * to web content that is composited with the GPU.
     */
    drawCompositingIndicators?: boolean | null
    /**
     * Enable or disable accelerated 2D canvas. Accelerated 2D canvas is only available
     * if WebKit was compiled with a version of Cairo including the unstable CairoGL API.
     * When accelerated 2D canvas is enabled, WebKit may render some 2D canvas content
     * using hardware accelerated drawing operations.
     */
    enableAccelerated2dCanvas?: boolean | null
    /**
     * Enable or disable horizontal swipe gesture for back-forward navigation.
     */
    enableBackForwardNavigationGestures?: boolean | null
    /**
     * Whether to enable accessibility enhanced keyboard navigation.
     */
    enableCaretBrowsing?: boolean | null
    /**
     * Determines whether or not developer tools, such as the Web Inspector, are enabled.
     */
    enableDeveloperExtras?: boolean | null
    /**
     * Determines whether or not to prefetch domain names. DNS prefetching attempts
     * to resolve domain names before a user tries to follow a link.
     */
    enableDnsPrefetching?: boolean | null
    /**
     * Enable or disable support for Encrypted Media API on pages.
     * EncryptedMedia is an experimental JavaScript API for playing encrypted media in HTML.
     * This property will only work as intended if the EncryptedMedia feature is enabled at build time
     * with the ENABLE_ENCRYPTED_MEDIA flag.
     * 
     * See https://www.w3.org/TR/encrypted-media/
     */
    enableEncryptedMedia?: boolean | null
    /**
     * Whether to enable the frame flattening. With this setting each subframe is expanded
     * to its contents, which will flatten all the frames to become one scrollable page.
     * On touch devices scrollable subframes on a page can result in a confusing user experience.
     */
    enableFrameFlattening?: boolean | null
    /**
     * Whether to enable the Javascript Fullscreen API. The API
     * allows any HTML element to request fullscreen display. See also
     * the current draft of the spec:
     * http://www.w3.org/TR/fullscreen/
     */
    enableFullscreen?: boolean | null
    /**
     * Whether to enable HTML5 client-side SQL database support (IndexedDB).
     */
    enableHtml5Database?: boolean | null
    /**
     * Whether to enable HTML5 local storage support. Local storage provides
     * simple synchronous storage access.
     * 
     * HTML5 local storage specification is available at
     * http://dev.w3.org/html5/webstorage/.
     */
    enableHtml5LocalStorage?: boolean | null
    /**
     * Determines whether or not hyperlink auditing is enabled.
     * 
     * The hyperlink auditing specification is available at
     * http://www.whatwg.org/specs/web-apps/current-work/multipage/links.html#hyperlink-auditing.
     */
    enableHyperlinkAuditing?: boolean | null
    /**
     * Determines whether or not Java is enabled on the page.
     */
    enableJava?: boolean | null
    /**
     * Determines whether or not JavaScript executes within a page.
     */
    enableJavascript?: boolean | null
    /**
     * Determines whether or not JavaScript markup is allowed in document. When this setting is disabled,
     * all JavaScript-related elements and attributes are removed from the document during parsing. Note that
     * executing JavaScript is still allowed if #WebKitSettings:enable-javascript is %TRUE.
     */
    enableJavascriptMarkup?: boolean | null
    /**
     * Enable or disable support for media playback on pages. This setting is enabled by
     * default. Disabling it means `<audio>`, `<track>` and `<video>` elements will have
     * playback support disabled.
     */
    enableMedia?: boolean | null
    /**
     * Enable or disable support for MediaCapabilities on pages. This
     * specification intends to provide APIs to allow websites to make an optimal
     * decision when picking media content for the user. The APIs will expose
     * information about the decoding and encoding capabilities for a given format
     * but also output capabilities to find the best match based on the device???s
     * display.
     * 
     * See also https://wicg.github.io/media-capabilities/
     */
    enableMediaCapabilities?: boolean | null
    /**
     * Enable or disable support for MediaStream on pages. MediaStream
     * is an experimental proposal for allowing web pages to access
     * audio and video devices for capture.
     * 
     * See also http://dev.w3.org/2011/webrtc/editor/getusermedia.html
     */
    enableMediaStream?: boolean | null
    /**
     * Enable or disable support for MediaSource on pages. MediaSource
     * extends HTMLMediaElement to allow JavaScript to generate media
     * streams for playback.
     * 
     * See also http://www.w3.org/TR/media-source/
     */
    enableMediasource?: boolean | null
    /**
     * Enable or disable the Mock Capture Devices. Those are fake
     * Microphone and Camera devices to be used as MediaStream
     * sources.
     */
    enableMockCaptureDevices?: boolean | null
    /**
     * Whether to enable HTML5 offline web application cache support. Offline
     * web application cache allows web applications to run even when
     * the user is not connected to the network.
     * 
     * HTML5 offline web application specification is available at
     * http://dev.w3.org/html5/spec/offline.html.
     */
    enableOfflineWebApplicationCache?: boolean | null
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
    enablePageCache?: boolean | null
    /**
     * Determines whether or not plugins on the page are enabled.
     */
    enablePlugins?: boolean | null
    /**
     * Determines whether or not private browsing is enabled. Private browsing
     * will disable history, cache and form auto-fill for any pages visited.
     */
    enablePrivateBrowsing?: boolean | null
    /**
     * Determines whether or not text areas can be resized.
     */
    enableResizableTextAreas?: boolean | null
    /**
     * Whether to turn on site-specific quirks. Turning this on will
     * tell WebKit to use some site-specific workarounds for
     * better web compatibility. For example, older versions of
     * MediaWiki will incorrectly send to WebKit a CSS file with KHTML
     * workarounds. By turning on site-specific quirks, WebKit will
     * special-case this and other cases to make some specific sites work.
     */
    enableSiteSpecificQuirks?: boolean | null
    /**
     * Enable or disable smooth scrolling.
     */
    enableSmoothScrolling?: boolean | null
    /**
     * Whether to enable Spatial Navigation. This feature consists in the ability
     * to navigate between focusable elements in a Web page, such as hyperlinks
     * and form controls, by using Left, Right, Up and Down arrow keys.
     * For example, if an user presses the Right key, heuristics determine whether
     * there is an element they might be trying to reach towards the right, and if
     * there are multiple elements, which element they probably wants.
     */
    enableSpatialNavigation?: boolean | null
    /**
     * Determines whether the tab key cycles through the elements on the page.
     * When this setting is enabled, users will be able to focus the next element
     * in the page by pressing the tab key. If the selected element is editable,
     * then pressing tab key will insert the tab character.
     */
    enableTabsToLinks?: boolean | null
    /**
     * Enable or disable support for WebAudio on pages. WebAudio is an
     * API for processing and synthesizing audio in web applications
     * 
     * See also https://webaudio.github.io/web-audio-api
     */
    enableWebaudio?: boolean | null
    /**
     * Enable or disable support for WebGL on pages. WebGL enables web
     * content to use an API based on OpenGL ES 2.0.
     */
    enableWebgl?: boolean | null
    /**
     * Enable or disable writing console messages to stdout. These are messages
     * sent to the console with console.log and related methods.
     */
    enableWriteConsoleMessagesToStdout?: boolean | null
    /**
     * Whether to enable the XSS auditor. This feature filters some kinds of
     * reflective XSS attacks on vulnerable web sites.
     */
    enableXssAuditor?: boolean | null
    /**
     * The font family used as the default for content using a fantasy font.
     */
    fantasyFontFamily?: string | null
    /**
     * The #WebKitHardwareAccelerationPolicy to decide how to enable and disable
     * hardware acceleration. The default value %WEBKIT_HARDWARE_ACCELERATION_POLICY_ON_DEMAND
     * enables the hardware acceleration when the web contents request it.
     * It's possible to enforce hardware acceleration to be always enabled
     * by using %WEBKIT_HARDWARE_ACCELERATION_POLICY_ALWAYS. And it's also possible to disable it
     * completely using %WEBKIT_HARDWARE_ACCELERATION_POLICY_NEVER. Note that disabling hardware
     * acceleration might cause some websites to not render correctly or consume more CPU.
     * 
     * Note that changing this setting might not be possible if hardware acceleration is not
     * supported by the hardware or the system. In that case you can get the value to know the
     * actual policy being used, but changing the setting will not have any effect.
     */
    hardwareAccelerationPolicy?: HardwareAccelerationPolicy | null
    /**
     * Whether JavaScript can access the clipboard. The default value is %FALSE. If
     * set to %TRUE, document.execCommand() allows cut, copy and paste commands.
     */
    javascriptCanAccessClipboard?: boolean | null
    /**
     * Whether JavaScript can open popup windows automatically without user
     * intervention.
     */
    javascriptCanOpenWindowsAutomatically?: boolean | null
    /**
     * Determines whether a site can load favicons irrespective
     * of the value of #WebKitSettings:auto-load-images.
     */
    loadIconsIgnoringImageLoadSetting?: boolean | null
    /**
     * List of media content types requiring hardware support, split by semicolons (:).
     * For example: 'video/webm; codecs="vp*":video/mp4; codecs="avc*":video/&ast; codecs="av1*"'.
     */
    mediaContentTypesRequiringHardwareSupport?: string | null
    /**
     * Whether media playback is full-screen only or inline playback is allowed.
     * This is %TRUE by default, so media playback can be inline. Setting it to
     * %FALSE allows specifying that media playback should be always fullscreen.
     */
    mediaPlaybackAllowsInline?: boolean | null
    /**
     * Whether a user gesture (such as clicking the play button)
     * would be required to start media playback or load media. This is off
     * by default, so media playback could start automatically.
     * Setting it on requires a gesture by the user to start playback, or to
     * load the media.
     */
    mediaPlaybackRequiresUserGesture?: boolean | null
    /**
     * The minimum font size in pixels used to display text. This setting
     * controls the absolute smallest size. Values other than 0 can
     * potentially break page layouts.
     */
    minimumFontSize?: number | null
    /**
     * The font family used as the default for content using a monospace font.
     */
    monospaceFontFamily?: string | null
    /**
     * The font family used as the default for content using a pictograph font.
     */
    pictographFontFamily?: string | null
    /**
     * Whether background images should be drawn during printing.
     */
    printBackgrounds?: boolean | null
    /**
     * The font family used as the default for content using a sans-serif font.
     */
    sansSerifFontFamily?: string | null
    /**
     * The font family used as the default for content using a serif font.
     */
    serifFontFamily?: string | null
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
    userAgent?: string | null
    /**
     * Whether #WebKitWebView:zoom-level affects only the
     * text of the page or all the contents. Other contents containing text
     * like form controls will be also affected by zoom factor when
     * this property is enabled.
     */
    zoomTextOnly?: boolean | null
}

interface Settings {

    // Own properties of WebKit2-5.0.WebKit2.Settings

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
    cursiveFontFamily: string
    /**
     * The default text charset used when interpreting content with an unspecified charset.
     */
    defaultCharset: string
    /**
     * The font family to use as the default for content that does not specify a font.
     */
    defaultFontFamily: string
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
     * Whether to draw compositing borders and repaint counters on layers drawn
     * with accelerated compositing. This is useful for debugging issues related
     * to web content that is composited with the GPU.
     */
    drawCompositingIndicators: boolean
    /**
     * Enable or disable accelerated 2D canvas. Accelerated 2D canvas is only available
     * if WebKit was compiled with a version of Cairo including the unstable CairoGL API.
     * When accelerated 2D canvas is enabled, WebKit may render some 2D canvas content
     * using hardware accelerated drawing operations.
     */
    enableAccelerated2dCanvas: boolean
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
     * Whether to enable the frame flattening. With this setting each subframe is expanded
     * to its contents, which will flatten all the frames to become one scrollable page.
     * On touch devices scrollable subframes on a page can result in a confusing user experience.
     */
    enableFrameFlattening: boolean
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
     * Determines whether or not Java is enabled on the page.
     */
    enableJava: boolean
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
     * but also output capabilities to find the best match based on the device???s
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
     * Determines whether or not plugins on the page are enabled.
     */
    enablePlugins: boolean
    /**
     * Determines whether or not private browsing is enabled. Private browsing
     * will disable history, cache and form auto-fill for any pages visited.
     */
    enablePrivateBrowsing: boolean
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
     * Enable or disable writing console messages to stdout. These are messages
     * sent to the console with console.log and related methods.
     */
    enableWriteConsoleMessagesToStdout: boolean
    /**
     * Whether to enable the XSS auditor. This feature filters some kinds of
     * reflective XSS attacks on vulnerable web sites.
     */
    enableXssAuditor: boolean
    /**
     * The font family used as the default for content using a fantasy font.
     */
    fantasyFontFamily: string
    /**
     * The #WebKitHardwareAccelerationPolicy to decide how to enable and disable
     * hardware acceleration. The default value %WEBKIT_HARDWARE_ACCELERATION_POLICY_ON_DEMAND
     * enables the hardware acceleration when the web contents request it.
     * It's possible to enforce hardware acceleration to be always enabled
     * by using %WEBKIT_HARDWARE_ACCELERATION_POLICY_ALWAYS. And it's also possible to disable it
     * completely using %WEBKIT_HARDWARE_ACCELERATION_POLICY_NEVER. Note that disabling hardware
     * acceleration might cause some websites to not render correctly or consume more CPU.
     * 
     * Note that changing this setting might not be possible if hardware acceleration is not
     * supported by the hardware or the system. In that case you can get the value to know the
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
     * Determines whether a site can load favicons irrespective
     * of the value of #WebKitSettings:auto-load-images.
     */
    loadIconsIgnoringImageLoadSetting: boolean
    /**
     * List of media content types requiring hardware support, split by semicolons (:).
     * For example: 'video/webm; codecs="vp*":video/mp4; codecs="avc*":video/&ast; codecs="av1*"'.
     */
    mediaContentTypesRequiringHardwareSupport: string
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
    monospaceFontFamily: string
    /**
     * The font family used as the default for content using a pictograph font.
     */
    pictographFontFamily: string
    /**
     * Whether background images should be drawn during printing.
     */
    printBackgrounds: boolean
    /**
     * The font family used as the default for content using a sans-serif font.
     */
    sansSerifFontFamily: string
    /**
     * The font family used as the default for content using a serif font.
     */
    serifFontFamily: string
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
    userAgent: string
    /**
     * Whether #WebKitWebView:zoom-level affects only the
     * text of the page or all the contents. Other contents containing text
     * like form controls will be also affected by zoom factor when
     * this property is enabled.
     */
    zoomTextOnly: boolean

    // Own fields of WebKit2-5.0.WebKit2.Settings

    parentInstance: GObject.Object
    priv: SettingsPrivate

    // Owm methods of WebKit2-5.0.WebKit2.Settings

    /**
     * Get the #WebKitSettings:allow-file-access-from-file-urls property.
     */
    getAllowFileAccessFromFileUrls(): boolean
    /**
     * Get the #WebKitSettings:allow-modal-dialogs property.
     */
    getAllowModalDialogs(): boolean
    /**
     * Get the #WebKitSettings:allow-top-navigation-to-data-urls property.
     */
    getAllowTopNavigationToDataUrls(): boolean
    /**
     * Get the #WebKitSettings:allow-universal-access-from-file-urls property.
     */
    getAllowUniversalAccessFromFileUrls(): boolean
    /**
     * Get the #WebKitSettings:auto-load-images property.
     */
    getAutoLoadImages(): boolean
    /**
     * Gets the #WebKitSettings:cursive-font-family property.
     */
    getCursiveFontFamily(): string
    /**
     * Gets the #WebKitSettings:default-charset property.
     */
    getDefaultCharset(): string
    getDefaultFontFamily(): string
    /**
     * Gets the #WebKitSettings:default-font-size property.
     */
    getDefaultFontSize(): number
    /**
     * Gets the #WebKitSettings:default-monospace-font-size property.
     */
    getDefaultMonospaceFontSize(): number
    /**
     * Get the #WebKitSettings:draw-compositing-indicators property.
     */
    getDrawCompositingIndicators(): boolean
    /**
     * Get the #WebKitSettings:enable-accelerated-2d-canvas property.
     */
    getEnableAccelerated2dCanvas(): boolean
    /**
     * Get the #WebKitSettings:enable-back-forward-navigation-gestures property.
     */
    getEnableBackForwardNavigationGestures(): boolean
    /**
     * Get the #WebKitSettings:enable-caret-browsing property.
     */
    getEnableCaretBrowsing(): boolean
    /**
     * Get the #WebKitSettings:enable-developer-extras property.
     */
    getEnableDeveloperExtras(): boolean
    /**
     * Get the #WebKitSettings:enable-dns-prefetching property.
     */
    getEnableDnsPrefetching(): boolean
    /**
     * Get the #WebKitSettings:enable-encrypted-media property.
     */
    getEnableEncryptedMedia(): boolean
    /**
     * Get the #WebKitSettings:enable-frame-flattening property.
     */
    getEnableFrameFlattening(): boolean
    /**
     * Get the #WebKitSettings:enable-fullscreen property.
     */
    getEnableFullscreen(): boolean
    /**
     * Get the #WebKitSettings:enable-html5-database property.
     */
    getEnableHtml5Database(): boolean
    /**
     * Get the #WebKitSettings:enable-html5-local-storage property.
     */
    getEnableHtml5LocalStorage(): boolean
    /**
     * Get the #WebKitSettings:enable-hyperlink-auditing property.
     */
    getEnableHyperlinkAuditing(): boolean
    /**
     * Get the #WebKitSettings:enable-java property.
     */
    getEnableJava(): boolean
    /**
     * Get the #WebKitSettings:enable-javascript property.
     */
    getEnableJavascript(): boolean
    /**
     * Get the #WebKitSettings:enable-javascript-markup property.
     */
    getEnableJavascriptMarkup(): boolean
    /**
     * Get the #WebKitSettings:enable-media property.
     */
    getEnableMedia(): boolean
    /**
     * Get the #WebKitSettings:enable-media-capabilities property.
     */
    getEnableMediaCapabilities(): boolean
    /**
     * Get the #WebKitSettings:enable-media-stream property.
     */
    getEnableMediaStream(): boolean
    /**
     * Get the #WebKitSettings:enable-mediasource property.
     */
    getEnableMediasource(): boolean
    /**
     * Get the #WebKitSettings:enable-mock-capture-devices property.
     */
    getEnableMockCaptureDevices(): boolean
    /**
     * Get the #WebKitSettings:enable-offline-web-application-cache property.
     */
    getEnableOfflineWebApplicationCache(): boolean
    /**
     * Get the #WebKitSettings:enable-page-cache property.
     */
    getEnablePageCache(): boolean
    /**
     * Get the #WebKitSettings:enable-plugins property.
     */
    getEnablePlugins(): boolean
    /**
     * Get the #WebKitSettings:enable-private-browsing property.
     */
    getEnablePrivateBrowsing(): boolean
    /**
     * Get the #WebKitSettings:enable-resizable-text-areas property.
     */
    getEnableResizableTextAreas(): boolean
    /**
     * Get the #WebKitSettings:enable-site-specific-quirks property.
     */
    getEnableSiteSpecificQuirks(): boolean
    /**
     * Get the #WebKitSettings:enable-smooth-scrolling property.
     */
    getEnableSmoothScrolling(): boolean
    /**
     * Get the #WebKitSettings:enable-spatial-navigation property.
     */
    getEnableSpatialNavigation(): boolean
    /**
     * Get the #WebKitSettings:enable-tabs-to-links property.
     */
    getEnableTabsToLinks(): boolean
    /**
     * Get the #WebKitSettings:enable-webaudio property.
     */
    getEnableWebaudio(): boolean
    /**
     * Get the #WebKitSettings:enable-webgl property.
     */
    getEnableWebgl(): boolean
    /**
     * Get the #WebKitSettings:enable-write-console-messages-to-stdout property.
     */
    getEnableWriteConsoleMessagesToStdout(): boolean
    /**
     * Get the #WebKitSettings:enable-xss-auditor property.
     */
    getEnableXssAuditor(): boolean
    /**
     * Gets the #WebKitSettings:fantasy-font-family property.
     */
    getFantasyFontFamily(): string
    /**
     * Get the #WebKitSettings:hardware-acceleration-policy property.
     */
    getHardwareAccelerationPolicy(): HardwareAccelerationPolicy
    /**
     * Get the #WebKitSettings:javascript-can-access-clipboard property.
     */
    getJavascriptCanAccessClipboard(): boolean
    /**
     * Get the #WebKitSettings:javascript-can-open-windows-automatically property.
     */
    getJavascriptCanOpenWindowsAutomatically(): boolean
    /**
     * Get the #WebKitSettings:load-icons-ignoring-image-load-setting property.
     */
    getLoadIconsIgnoringImageLoadSetting(): boolean
    /**
     * Gets the #WebKitSettings:media-content-types-requiring-hardware-support property.
     */
    getMediaContentTypesRequiringHardwareSupport(): string
    /**
     * Get the #WebKitSettings:media-playback-allows-inline property.
     */
    getMediaPlaybackAllowsInline(): boolean
    /**
     * Get the #WebKitSettings:media-playback-requires-user-gesture property.
     */
    getMediaPlaybackRequiresUserGesture(): boolean
    /**
     * Gets the #WebKitSettings:minimum-font-size property.
     */
    getMinimumFontSize(): number
    /**
     * Gets the #WebKitSettings:monospace-font-family property.
     */
    getMonospaceFontFamily(): string
    /**
     * Gets the #WebKitSettings:pictograph-font-family property.
     */
    getPictographFontFamily(): string
    /**
     * Get the #WebKitSettings:print-backgrounds property.
     */
    getPrintBackgrounds(): boolean
    /**
     * Gets the #WebKitSettings:sans-serif-font-family property.
     */
    getSansSerifFontFamily(): string
    /**
     * Gets the #WebKitSettings:serif-font-family property.
     */
    getSerifFontFamily(): string
    /**
     * Get the #WebKitSettings:user-agent property.
     */
    getUserAgent(): string
    /**
     * Get the #WebKitSettings:zoom-text-only property.
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
     * Set the #WebKitSettings:draw-compositing-indicators property.
     * @param enabled Value to be set
     */
    setDrawCompositingIndicators(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-accelerated-2d-canvas property.
     * @param enabled Value to be set
     */
    setEnableAccelerated2dCanvas(enabled: boolean): void
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
     * Set the #WebKitSettings:enable-frame-flattening property.
     * @param enabled Value to be set
     */
    setEnableFrameFlattening(enabled: boolean): void
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
     * Set the #WebKitSettings:enable-java property.
     * @param enabled Value to be set
     */
    setEnableJava(enabled: boolean): void
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
     * Set the #WebKitSettings:enable-plugins property.
     * @param enabled Value to be set
     */
    setEnablePlugins(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-private-browsing property.
     * @param enabled Value to be set
     */
    setEnablePrivateBrowsing(enabled: boolean): void
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
     * Set the #WebKitSettings:enable-write-console-messages-to-stdout property.
     * @param enabled Value to be set
     */
    setEnableWriteConsoleMessagesToStdout(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-xss-auditor property.
     * @param enabled Value to be set
     */
    setEnableXssAuditor(enabled: boolean): void
    /**
     * Set the #WebKitSettings:fantasy-font-family property.
     * @param fantasyFontFamily the new default fantasy font family
     */
    setFantasyFontFamily(fantasyFontFamily: string): void
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
     * Set the #WebKitSettings:load-icons-ignoring-image-load-setting property.
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

    // Class property signals of WebKit2-5.0.WebKit2.Settings

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
    connect(sigName: "notify::draw-compositing-indicators", callback: (...args: any[]) => void): number
    on(sigName: "notify::draw-compositing-indicators", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::draw-compositing-indicators", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::draw-compositing-indicators", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::draw-compositing-indicators", ...args: any[]): void
    connect(sigName: "notify::enable-accelerated-2d-canvas", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-accelerated-2d-canvas", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-accelerated-2d-canvas", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-accelerated-2d-canvas", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-accelerated-2d-canvas", ...args: any[]): void
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
    connect(sigName: "notify::enable-frame-flattening", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-frame-flattening", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-frame-flattening", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-frame-flattening", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-frame-flattening", ...args: any[]): void
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
    connect(sigName: "notify::enable-java", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-java", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-java", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-java", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-java", ...args: any[]): void
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
    connect(sigName: "notify::enable-plugins", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-plugins", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-plugins", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-plugins", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-plugins", ...args: any[]): void
    connect(sigName: "notify::enable-private-browsing", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-private-browsing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-private-browsing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-private-browsing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-private-browsing", ...args: any[]): void
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
    connect(sigName: "notify::enable-write-console-messages-to-stdout", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-write-console-messages-to-stdout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-write-console-messages-to-stdout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-write-console-messages-to-stdout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-write-console-messages-to-stdout", ...args: any[]): void
    connect(sigName: "notify::enable-xss-auditor", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-xss-auditor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-xss-auditor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-xss-auditor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-xss-auditor", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Settings extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.Settings

    static name: string
    static $gtype: GObject.GType<Settings>

    // Constructors of WebKit2-5.0.WebKit2.Settings

    constructor(config?: Settings_ConstructProps) 
    /**
     * Creates a new #WebKitSettings instance with default values. It must
     * be manually attached to a #WebKitWebView.
     * See also webkit_settings_new_with_settings().
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #WebKitSettings instance with default values. It must
     * be manually attached to a #WebKitWebView.
     * See also webkit_settings_new_with_settings().
     * @constructor 
     */
    static new(): Settings
    _init(config?: Settings_ConstructProps): void
    /**
     * Convert `points` to the equivalent value in pixels, based on the current
     * screen DPI. Applications can use this function to convert font size values
     * in points to font size values in pixels when setting the font size properties
     * of #WebKitSettings.
     * @param points the font size in points to convert to pixels
     */
    static fontSizeToPixels(points: number): number
    /**
     * Convert `pixels` to the equivalent value in points, based on the current
     * screen DPI. Applications can use this function to convert font size values
     * in pixels to font size values in points when getting the font size properties
     * of #WebKitSettings.
     * @param pixels the font size in pixels to convert to points
     */
    static fontSizeToPoints(pixels: number): number
}

interface URIRequest_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of WebKit2-5.0.WebKit2.URIRequest

    /**
     * The URI to which the request will be made.
     */
    uri?: string | null
}

interface URIRequest {

    // Own properties of WebKit2-5.0.WebKit2.URIRequest

    /**
     * The URI to which the request will be made.
     */
    uri: string

    // Own fields of WebKit2-5.0.WebKit2.URIRequest

    parent: GObject.Object

    // Owm methods of WebKit2-5.0.WebKit2.URIRequest

    /**
     * Get the HTTP headers of a #WebKitURIRequest as a #SoupMessageHeaders.
     */
    getHttpHeaders(): Soup.MessageHeaders
    /**
     * Get the HTTP method of the #WebKitURIRequest.
     */
    getHttpMethod(): string
    getUri(): string
    /**
     * Set the URI of `request`
     * @param uri an URI
     */
    setUri(uri: string): void

    // Class property signals of WebKit2-5.0.WebKit2.URIRequest

    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class URIRequest extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.URIRequest

    static name: string
    static $gtype: GObject.GType<URIRequest>

    // Constructors of WebKit2-5.0.WebKit2.URIRequest

    constructor(config?: URIRequest_ConstructProps) 
    /**
     * Creates a new #WebKitURIRequest for the given URI.
     * @constructor 
     * @param uri an URI
     */
    constructor(uri: string) 
    /**
     * Creates a new #WebKitURIRequest for the given URI.
     * @constructor 
     * @param uri an URI
     */
    static new(uri: string): URIRequest
    _init(config?: URIRequest_ConstructProps): void
}

interface URIResponse_ConstructProps extends GObject.Object_ConstructProps {
}

interface URIResponse {

    // Own properties of WebKit2-5.0.WebKit2.URIResponse

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
    readonly mimeType: string
    /**
     * The status code of the response as returned by the server.
     */
    readonly statusCode: number
    /**
     * The suggested filename for the URI response.
     */
    readonly suggestedFilename: string
    /**
     * The URI for which the response was made.
     */
    readonly uri: string

    // Own fields of WebKit2-5.0.WebKit2.URIResponse

    parent: GObject.Object

    // Owm methods of WebKit2-5.0.WebKit2.URIResponse

    /**
     * Get the expected content length of the #WebKitURIResponse. It can
     * be 0 if the server provided an incorrect or missing Content-Length.
     */
    getContentLength(): number
    /**
     * Get the HTTP headers of a #WebKitURIResponse as a #SoupMessageHeaders.
     */
    getHttpHeaders(): Soup.MessageHeaders
    getMimeType(): string
    /**
     * Get the status code of the #WebKitURIResponse as returned by
     * the server. It will normally be a #SoupKnownStatusCode, for
     * example %SOUP_STATUS_OK, though the server can respond with any
     * unsigned integer.
     */
    getStatusCode(): number
    /**
     * Get the suggested filename for `response,` as specified by
     * the 'Content-Disposition' HTTP header, or %NULL if it's not
     * present.
     */
    getSuggestedFilename(): string
    getUri(): string

    // Class property signals of WebKit2-5.0.WebKit2.URIResponse

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class URIResponse extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.URIResponse

    static name: string
    static $gtype: GObject.GType<URIResponse>

    // Constructors of WebKit2-5.0.WebKit2.URIResponse

    constructor(config?: URIResponse_ConstructProps) 
    _init(config?: URIResponse_ConstructProps): void
}

interface URISchemeRequest_ConstructProps extends GObject.Object_ConstructProps {
}

interface URISchemeRequest {

    // Own fields of WebKit2-5.0.WebKit2.URISchemeRequest

    parent: GObject.Object
    priv: URISchemeRequestPrivate

    // Owm methods of WebKit2-5.0.WebKit2.URISchemeRequest

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
    getHttpHeaders(): Soup.MessageHeaders
    /**
     * Get the HTTP method of the `request`
     */
    getHttpMethod(): string
    /**
     * Get the URI path of `request`
     */
    getPath(): string
    /**
     * Get the URI scheme of `request`
     */
    getScheme(): string
    /**
     * Get the URI of `request`
     */
    getUri(): string
    /**
     * Get the #WebKitWebView that initiated the request.
     */
    getWebView(): WebView

    // Class property signals of WebKit2-5.0.WebKit2.URISchemeRequest

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class URISchemeRequest extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.URISchemeRequest

    static name: string
    static $gtype: GObject.GType<URISchemeRequest>

    // Constructors of WebKit2-5.0.WebKit2.URISchemeRequest

    constructor(config?: URISchemeRequest_ConstructProps) 
    _init(config?: URISchemeRequest_ConstructProps): void
}

interface URISchemeResponse_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of WebKit2-5.0.WebKit2.URISchemeResponse

    /**
     * The input stream to read from.
     */
    stream?: Gio.InputStream | null
    streamLength?: number | null
}

interface URISchemeResponse {

    // Own properties of WebKit2-5.0.WebKit2.URISchemeResponse

    /**
     * The input stream to read from.
     */
    readonly stream: Gio.InputStream
    readonly streamLength: number

    // Own fields of WebKit2-5.0.WebKit2.URISchemeResponse

    parent: GObject.Object
    priv: URISchemeResponsePrivate

    // Owm methods of WebKit2-5.0.WebKit2.URISchemeResponse

    /**
     * Sets the content type for the `response`
     * @param contentType the content type of the stream
     */
    setContentType(contentType: string): void
    setHttpHeaders(headers: Soup.MessageHeaders): void
    /**
     * Sets the status code and reason phrase for the `response`.
     * If `status_code` is a known value and `reason_phrase` is %NULL, the `reason_phrase` will be set automatically.
     * @param statusCode the HTTP status code to be returned
     * @param reasonPhrase a reason phrase
     */
    setStatus(statusCode: number, reasonPhrase: string | null): void

    // Class property signals of WebKit2-5.0.WebKit2.URISchemeResponse

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class URISchemeResponse extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.URISchemeResponse

    static name: string
    static $gtype: GObject.GType<URISchemeResponse>

    // Constructors of WebKit2-5.0.WebKit2.URISchemeResponse

    constructor(config?: URISchemeResponse_ConstructProps) 
    /**
     * Create a new #WebKitURISchemeResponse
     * @constructor 
     * @param inputStream a #GInputStream to read the contents of the request
     * @param streamLength the length of the stream or -1 if not known
     */
    constructor(inputStream: Gio.InputStream, streamLength: number) 
    /**
     * Create a new #WebKitURISchemeResponse
     * @constructor 
     * @param inputStream a #GInputStream to read the contents of the request
     * @param streamLength the length of the stream or -1 if not known
     */
    static new(inputStream: Gio.InputStream, streamLength: number): URISchemeResponse
    _init(config?: URISchemeResponse_ConstructProps): void
}

interface UserContentFilterStore_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of WebKit2-5.0.WebKit2.UserContentFilterStore

    /**
     * The directory used for filter storage. This path is used as the base
     * directory where user content filters are stored on disk.
     */
    path?: string | null
}

interface UserContentFilterStore {

    // Own properties of WebKit2-5.0.WebKit2.UserContentFilterStore

    /**
     * The directory used for filter storage. This path is used as the base
     * directory where user content filters are stored on disk.
     */
    readonly path: string

    // Own fields of WebKit2-5.0.WebKit2.UserContentFilterStore

    parent: GObject.Object

    // Owm methods of WebKit2-5.0.WebKit2.UserContentFilterStore

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
     * Finishes an asynchronous fetch of the list of identifiers for the stored filters previously
     * started with webkit_user_content_filter_store_fetch_identifiers().
     * @param result a #GAsyncResult
     */
    fetchIdentifiersFinish(result: Gio.AsyncResult): string[]
    getPath(): string
    /**
     * Asynchronously load a content filter given its `identifier`. The filter must have been
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
     */
    removeFinish(result: Gio.AsyncResult): boolean
    /**
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
     */
    saveFinish(result: Gio.AsyncResult): UserContentFilter
    /**
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
     */
    saveFromFileFinish(result: Gio.AsyncResult): UserContentFilter

    // Class property signals of WebKit2-5.0.WebKit2.UserContentFilterStore

    connect(sigName: "notify::path", callback: (...args: any[]) => void): number
    on(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class UserContentFilterStore extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.UserContentFilterStore

    static name: string
    static $gtype: GObject.GType<UserContentFilterStore>

    // Constructors of WebKit2-5.0.WebKit2.UserContentFilterStore

    constructor(config?: UserContentFilterStore_ConstructProps) 
    /**
     * Create a new #WebKitUserContentFilterStore to manipulate filters stored at `storage_path`.
     * The path must point to a local filesystem, and will be created if needed.
     * @constructor 
     * @param storagePath path where data for filters will be stored on disk
     */
    constructor(storagePath: string) 
    /**
     * Create a new #WebKitUserContentFilterStore to manipulate filters stored at `storage_path`.
     * The path must point to a local filesystem, and will be created if needed.
     * @constructor 
     * @param storagePath path where data for filters will be stored on disk
     */
    static new(storagePath: string): UserContentFilterStore
    _init(config?: UserContentFilterStore_ConstructProps): void
}

interface UserContentManager_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `script-message-received`
 */
interface UserContentManager_ScriptMessageReceivedSignalCallback {
    (jsResult: JavascriptResult): void
}

interface UserContentManager {

    // Own fields of WebKit2-5.0.WebKit2.UserContentManager

    parent: GObject.Object

    // Owm methods of WebKit2-5.0.WebKit2.UserContentManager

    /**
     * Adds a #WebKitUserContentFilter to the given #WebKitUserContentManager.
     * The same #WebKitUserContentFilter can be reused with multiple
     * #WebKitUserContentManager instances.
     * 
     * Filters need to be saved and loaded from #WebKitUserContentFilterStore.
     * @param filter A #WebKitUserContentFilter
     */
    addFilter(filter: UserContentFilter): void
    /**
     * Adds a #WebKitUserScript to the given #WebKitUserContentManager.
     * The same #WebKitUserScript can be reused with multiple
     * #WebKitUserContentManager instances.
     * @param script A #WebKitUserScript
     */
    addScript(script: UserScript): void
    /**
     * Adds a #WebKitUserStyleSheet to the given #WebKitUserContentManager.
     * The same #WebKitUserStyleSheet can be reused with multiple
     * #WebKitUserContentManager instances.
     * @param stylesheet A #WebKitUserStyleSheet
     */
    addStyleSheet(stylesheet: UserStyleSheet): void
    /**
     * Registers a new user script message handler. After it is registered,
     * scripts can use `window.webkit.messageHandlers.&lt;name&gt;.postMessage(value)`
     * to send messages. Those messages are received by connecting handlers
     * to the #WebKitUserContentManager::script-message-received signal. The
     * handler name is used as the detail of the signal. To avoid race
     * conditions between registering the handler name, and starting to
     * receive the signals, it is recommended to connect to the signal
     * *before* registering the handler name:
     * 
     * <informalexample><programlisting>
     * WebKitWebView *view = webkit_web_view_new ();
     * WebKitUserContentManager *manager = webkit_web_view_get_user_content_manager ();
     * g_signal_connect (manager, "script-message-received::foobar",
     *                   G_CALLBACK (handle_script_message), NULL);
     * webkit_user_content_manager_register_script_message_handler (manager, "foobar");
     * </programlisting></informalexample>
     * 
     * Registering a script message handler will fail if the requested
     * name has been already registered before.
     * @param name Name of the script message channel
     */
    registerScriptMessageHandler(name: string): boolean
    /**
     * Registers a new user script message handler in script world with name `world_name`.
     * See webkit_user_content_manager_register_script_message_handler() for full description.
     * 
     * Registering a script message handler will fail if the requested
     * name has been already registered before.
     * @param name Name of the script message channel
     * @param worldName the name of a #WebKitScriptWorld
     */
    registerScriptMessageHandlerInWorld(name: string, worldName: string): boolean
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
    unregisterScriptMessageHandler(name: string): void
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
     * @param worldName the name of a #WebKitScriptWorld
     */
    unregisterScriptMessageHandlerInWorld(name: string, worldName: string): void

    // Own signals of WebKit2-5.0.WebKit2.UserContentManager

    connect(sigName: "script-message-received", callback: UserContentManager_ScriptMessageReceivedSignalCallback): number
    on(sigName: "script-message-received", callback: UserContentManager_ScriptMessageReceivedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "script-message-received", callback: UserContentManager_ScriptMessageReceivedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "script-message-received", callback: UserContentManager_ScriptMessageReceivedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "script-message-received", ...args: any[]): void

    // Class property signals of WebKit2-5.0.WebKit2.UserContentManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class UserContentManager extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.UserContentManager

    static name: string
    static $gtype: GObject.GType<UserContentManager>

    // Constructors of WebKit2-5.0.WebKit2.UserContentManager

    constructor(config?: UserContentManager_ConstructProps) 
    /**
     * Creates a new user content manager.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new user content manager.
     * @constructor 
     */
    static new(): UserContentManager
    _init(config?: UserContentManager_ConstructProps): void
}

interface UserMediaPermissionRequest_ConstructProps extends PermissionRequest_ConstructProps, GObject.Object_ConstructProps {
}

interface UserMediaPermissionRequest extends PermissionRequest {

    // Own properties of WebKit2-5.0.WebKit2.UserMediaPermissionRequest

    readonly isForAudioDevice: boolean
    readonly isForVideoDevice: boolean

    // Own fields of WebKit2-5.0.WebKit2.UserMediaPermissionRequest

    parent: GObject.Object

    // Class property signals of WebKit2-5.0.WebKit2.UserMediaPermissionRequest

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class UserMediaPermissionRequest extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.UserMediaPermissionRequest

    static name: string
    static $gtype: GObject.GType<UserMediaPermissionRequest>

    // Constructors of WebKit2-5.0.WebKit2.UserMediaPermissionRequest

    constructor(config?: UserMediaPermissionRequest_ConstructProps) 
    _init(config?: UserMediaPermissionRequest_ConstructProps): void
}

interface UserMessage_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {

    // Own constructor properties of WebKit2-5.0.WebKit2.UserMessage

    /**
     * The UNIX file descriptors of the user message.
     */
    fdList?: Gio.UnixFDList | null
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

interface UserMessage {

    // Own properties of WebKit2-5.0.WebKit2.UserMessage

    /**
     * The UNIX file descriptors of the user message.
     */
    readonly fdList: Gio.UnixFDList
    /**
     * The name of the user message.
     */
    readonly name: string
    /**
     * The parameters of the user message as a #GVariant, or %NULL
     * if the message doesn't include parameters. Note that only complete types are
     * allowed.
     */
    readonly parameters: GLib.Variant

    // Own fields of WebKit2-5.0.WebKit2.UserMessage

    parent: GObject.InitiallyUnowned
    priv: UserMessagePrivate

    // Owm methods of WebKit2-5.0.WebKit2.UserMessage

    /**
     * Get the `message` list of file descritpor
     */
    getFdList(): Gio.UnixFDList | null
    /**
     * Get the `message` name
     */
    getName(): string
    /**
     * Get the `message` parameters
     */
    getParameters(): GLib.Variant | null
    /**
     * Send a reply to `message`. If `reply` is floating, it's consumed.
     * You can only send a reply to a #WebKitUserMessage that has been
     * received.
     * @param reply a #WebKitUserMessage to send as reply
     */
    sendReply(reply: UserMessage): void

    // Class property signals of WebKit2-5.0.WebKit2.UserMessage

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class UserMessage extends GObject.InitiallyUnowned {

    // Own properties of WebKit2-5.0.WebKit2.UserMessage

    static name: string
    static $gtype: GObject.GType<UserMessage>

    // Constructors of WebKit2-5.0.WebKit2.UserMessage

    constructor(config?: UserMessage_ConstructProps) 
    /**
     * Create a new #WebKitUserMessage with `name`.
     * @constructor 
     * @param name the message name
     * @param parameters the message parameters as a #GVariant, or %NULL
     */
    constructor(name: string, parameters: GLib.Variant | null) 
    /**
     * Create a new #WebKitUserMessage with `name`.
     * @constructor 
     * @param name the message name
     * @param parameters the message parameters as a #GVariant, or %NULL
     */
    static new(name: string, parameters: GLib.Variant | null): UserMessage
    /**
     * Create a new #WebKitUserMessage including also a list of UNIX file descriptors to be sent.
     * @constructor 
     * @param name the message name
     * @param parameters the message parameters as a #GVariant
     * @param fdList the message file descriptors
     */
    static newWithFdList(name: string, parameters: GLib.Variant | null, fdList: Gio.UnixFDList | null): UserMessage
    _init(config?: UserMessage_ConstructProps): void
}

interface WebContext_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of WebKit2-5.0.WebKit2.WebContext

    /**
     * The directory where local storage data will be saved.
     */
    localStorageDirectory?: string | null
    /**
     * The #WebKitMemoryPressureSettings applied to the web processes created by this context.
     */
    memoryPressureSettings?: MemoryPressureSettings | null
    /**
     * Whether swap Web processes on cross-site navigations is enabled.
     * 
     * When enabled, pages from each security origin will be handled by
     * their own separate Web processes, which are started (and
     * terminated) on demand as the user navigates across different
     * domains. This is an important security measure which helps prevent
     * websites stealing data from other visited pages.
     */
    processSwapOnCrossSiteNavigationEnabled?: boolean | null
    /**
     * The #WebKitWebsiteDataManager associated with this context.
     */
    websiteDataManager?: WebsiteDataManager | null
}

/**
 * Signal callback interface for `automation-started`
 */
interface WebContext_AutomationStartedSignalCallback {
    (session: AutomationSession): void
}

/**
 * Signal callback interface for `download-started`
 */
interface WebContext_DownloadStartedSignalCallback {
    (download: Download): void
}

/**
 * Signal callback interface for `initialize-notification-permissions`
 */
interface WebContext_InitializeNotificationPermissionsSignalCallback {
    (): void
}

/**
 * Signal callback interface for `initialize-web-extensions`
 */
interface WebContext_InitializeWebExtensionsSignalCallback {
    (): void
}

/**
 * Signal callback interface for `user-message-received`
 */
interface WebContext_UserMessageReceivedSignalCallback {
    (message: UserMessage): boolean
}

interface WebContext {

    // Own properties of WebKit2-5.0.WebKit2.WebContext

    /**
     * The directory where local storage data will be saved.
     */
    readonly localStorageDirectory: string
    /**
     * The #WebKitMemoryPressureSettings applied to the web processes created by this context.
     */
    readonly memoryPressureSettings: MemoryPressureSettings
    /**
     * Whether swap Web processes on cross-site navigations is enabled.
     * 
     * When enabled, pages from each security origin will be handled by
     * their own separate Web processes, which are started (and
     * terminated) on demand as the user navigates across different
     * domains. This is an important security measure which helps prevent
     * websites stealing data from other visited pages.
     */
    readonly processSwapOnCrossSiteNavigationEnabled: boolean
    /**
     * The #WebKitWebsiteDataManager associated with this context.
     */
    readonly websiteDataManager: WebsiteDataManager

    // Own fields of WebKit2-5.0.WebKit2.WebContext

    parent: GObject.Object

    // Owm methods of WebKit2-5.0.WebKit2.WebContext

    /**
     * Adds a path to be mounted in the sandbox. `path` must exist before any web process
     * has been created otherwise it will be silently ignored. It is a fatal error to
     * add paths after a web process has been spawned.
     * 
     * Paths in directories such as `/sys`, `/proc`, and `/dev` or all of `/`
     * are not valid.
     * 
     * See also webkit_web_context_set_sandbox_enabled()
     * @param path an absolute path to mount in the sandbox
     * @param readOnly if %TRUE the path will be read-only
     */
    addPathToSandbox(path: string, readOnly: boolean): void
    /**
     * Ignore further TLS errors on the `host` for the certificate present in `info`.
     * @param certificate a #GTlsCertificate
     * @param host the host for which a certificate is to be allowed
     */
    allowTlsCertificateForHost(certificate: Gio.TlsCertificate, host: string): void
    /**
     * Clears all resources currently cached.
     * See also webkit_web_context_set_cache_model().
     */
    clearCache(): void
    /**
     * Requests downloading of the specified URI string. The download operation
     * will not be associated to any #WebKitWebView, if you are interested in
     * starting a download from a particular #WebKitWebView use
     * webkit_web_view_download_uri() instead.
     * @param uri the URI to download
     */
    downloadUri(uri: string): Download
    /**
     * Returns the current cache model. For more information about this
     * value check the documentation of the function
     * webkit_web_context_set_cache_model().
     */
    getCacheModel(): CacheModel
    /**
     * Get the #WebKitCookieManager of the `context'`s #WebKitWebsiteDataManager.
     */
    getCookieManager(): CookieManager
    /**
     * Get the #WebKitFaviconDatabase associated with `context`.
     * 
     * To initialize the database you need to call
     * webkit_web_context_set_favicon_database_directory().
     */
    getFaviconDatabase(): FaviconDatabase
    /**
     * Get the directory path being used to store the favicons database
     * for `context,` or %NULL if
     * webkit_web_context_set_favicon_database_directory() hasn't been
     * called yet.
     * 
     * This function will always return the same path after having called
     * webkit_web_context_set_favicon_database_directory() for the first
     * time.
     */
    getFaviconDatabaseDirectory(): string
    /**
     * Get the #WebKitGeolocationManager of `context`.
     */
    getGeolocationManager(): GeolocationManager
    /**
     * Asynchronously get the list of installed plugins.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * webkit_web_context_get_plugins_finish() to get the result of the operation.
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    getPlugins(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation started with webkit_web_context_get_plugins.
     * @param result a #GAsyncResult
     */
    getPluginsFinish(result: Gio.AsyncResult): Plugin[]
    /**
     * Returns the current process model. For more information about this value
     * see webkit_web_context_set_process_model().
     */
    getProcessModel(): ProcessModel
    /**
     * Get whether sandboxing is currently enabled.
     */
    getSandboxEnabled(): boolean
    /**
     * Get the #WebKitSecurityManager of `context`.
     */
    getSecurityManager(): SecurityManager
    /**
     * Get whether spell checking feature is currently enabled.
     */
    getSpellCheckingEnabled(): boolean
    /**
     * Get the the list of spell checking languages associated with
     * `context,` or %NULL if no languages have been previously set.
     * 
     * See webkit_web_context_set_spell_checking_languages() for more
     * details on the format of the languages in the list.
     */
    getSpellCheckingLanguages(): string[]
    /**
     * Get the TLS errors policy of `context`
     */
    getTlsErrorsPolicy(): TLSErrorsPolicy
    /**
     * Get the #WebKitWebContext:use-system-appearance-for-scrollbars property.
     */
    getUseSystemAppearanceForScrollbars(): boolean
    /**
     * Gets the maximum number of web processes that can be created at the same time for the `context`.
     * 
     * This function is now deprecated and always returns 0 (no limit). See also webkit_web_context_set_web_process_count_limit().
     */
    getWebProcessCountLimit(): number
    /**
     * Get the #WebKitWebsiteDataManager of `context`.
     */
    getWebsiteDataManager(): WebsiteDataManager
    /**
     * Sets initial desktop notification permissions for the `context`.
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
     * See also webkit_web_context_set_automation_allowed().
     */
    isAutomationAllowed(): boolean
    /**
     * Get whether a #WebKitWebContext is ephemeral.
     */
    isEphemeral(): boolean
    /**
     * Resolve the domain name of the given `hostname` in advance, so that if a URI
     * of `hostname` is requested the load will be performed more quickly.
     * @param hostname a hostname to be resolved
     */
    prefetchDns(hostname: string): void
    /**
     * Register `scheme` in `context,` so that when an URI request with `scheme` is made in the
     * #WebKitWebContext, the #WebKitURISchemeRequestCallback registered will be called with a
     * #WebKitURISchemeRequest.
     * It is possible to handle URI scheme requests asynchronously, by calling g_object_ref() on the
     * #WebKitURISchemeRequest and calling webkit_uri_scheme_request_finish() later
     * when the data of the request is available or
     * webkit_uri_scheme_request_finish_error() in case of error.
     * 
     * <informalexample><programlisting>
     * static void
     * about_uri_scheme_request_cb (WebKitURISchemeRequest *request,
     *                              gpointer                user_data)
     * {
     *     GInputStream *stream;
     *     gsize         stream_length;
     *     const gchar  *path;
     * 
     *     path = webkit_uri_scheme_request_get_path (request);
     *     if (!g_strcmp0 (path, "memory")) {
     *         /<!-- -->* Create a GInputStream with the contents of memory about page, and set its length to stream_length *<!-- -->/
     *     } else if (!g_strcmp0 (path, "applications")) {
     *         /<!-- -->* Create a GInputStream with the contents of applications about page, and set its length to stream_length *<!-- -->/
     *     } else if (!g_strcmp0 (path, "example")) {
     *         gchar *contents;
     * 
     *         contents = g_strdup_printf ("&lt;html&gt;&lt;body&gt;&lt;p&gt;Example about page&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;");
     *         stream_length = strlen (contents);
     *         stream = g_memory_input_stream_new_from_data (contents, stream_length, g_free);
     *     } else {
     *         GError *error;
     * 
     *         error = g_error_new (ABOUT_HANDLER_ERROR, ABOUT_HANDLER_ERROR_INVALID, "Invalid about:%s page.", path);
     *         webkit_uri_scheme_request_finish_error (request, error);
     *         g_error_free (error);
     *         return;
     *     }
     *     webkit_uri_scheme_request_finish (request, stream, stream_length, "text/html");
     *     g_object_unref (stream);
     * }
     * </programlisting></informalexample>
     * @param scheme the network scheme to register
     * @param callback a #WebKitURISchemeRequestCallback
     */
    registerUriScheme(scheme: string, callback: URISchemeRequestCallback): void
    /**
     * Send `message` to all #WebKitWebExtension<!-- -->s associated to `context`.
     * If `message` is floating, it's consumed.
     * @param message a #WebKitUserMessage
     */
    sendMessageToAllExtensions(message: UserMessage): void
    /**
     * Set an additional directory where WebKit will look for plugins.
     * @param directory the directory to add
     */
    setAdditionalPluginsDirectory(directory: string): void
    /**
     * Set whether automation is allowed in `context`. When automation is enabled the browser could
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
     * Set the directory where disk cache files will be stored
     * This method must be called before loading anything in this context, otherwise
     * it will not have any effect.
     * 
     * Note that this method overrides the directory set in the #WebKitWebsiteDataManager,
     * but it doesn't change the value returned by webkit_website_data_manager_get_disk_cache_directory()
     * since the #WebKitWebsiteDataManager is immutable.
     * @param directory the directory to set
     */
    setDiskCacheDirectory(directory: string): void
    /**
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
    setFaviconDatabaseDirectory(path: string | null): void
    /**
     * Set the network proxy settings to be used by connections started in `context`.
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
    setNetworkProxySettings(proxyMode: NetworkProxyMode, proxySettings: NetworkProxySettings | null): void
    /**
     * Set the list of preferred languages, sorted from most desirable
     * to least desirable. The list will be used to build the "Accept-Language"
     * header that will be included in the network requests started by
     * the #WebKitWebContext.
     * @param languages a %NULL-terminated list of language identifiers
     */
    setPreferredLanguages(languages: string[] | null): void
    /**
     * Specifies a process model for WebViews, which WebKit will use to
     * determine how auxiliary processes are handled.
     * 
     * %WEBKIT_PROCESS_MODEL_MULTIPLE_SECONDARY_PROCESSES will use
     * one process per view most of the time, while still allowing for web
     * views to share a process when needed (for example when different
     * views interact with each other). Using this model, when a process
     * hangs or crashes, only the WebViews using it stop working, while
     * the rest of the WebViews in the application will still function
     * normally.
     * 
     * %WEBKIT_PROCESS_MODEL_SHARED_SECONDARY_PROCESS is deprecated since 2.26,
     * using it has no effect for security reasons.
     * 
     * This method **must be called before any web process has been created**,
     * as early as possible in your application. Calling it later will make
     * your application crash.
     * @param processModel a #WebKitProcessModel
     */
    setProcessModel(processModel: ProcessModel): void
    /**
     * Set whether WebKit subprocesses will be sandboxed, limiting access to the system.
     * 
     * This method **must be called before any web process has been created**,
     * as early as possible in your application. Calling it later is a fatal error.
     * 
     * This is only implemented on Linux and is a no-op otherwise.
     * @param enabled if %TRUE enable sandboxing
     */
    setSandboxEnabled(enabled: boolean): void
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
     * Set the TLS errors policy of `context` as `policy`
     * @param policy a #WebKitTLSErrorsPolicy
     */
    setTlsErrorsPolicy(policy: TLSErrorsPolicy): void
    /**
     * Set the #WebKitWebContext:use-system-appearance-for-scrollbars property.
     * @param enabled value to set
     */
    setUseSystemAppearanceForScrollbars(enabled: boolean): void
    /**
     * Set the directory where WebKit will look for Web Extensions.
     * This method must be called before loading anything in this context,
     * otherwise it will not have any effect. You can connect to
     * #WebKitWebContext::initialize-web-extensions to call this method
     * before anything is loaded.
     * @param directory the directory to add
     */
    setWebExtensionsDirectory(directory: string): void
    /**
     * Set user data to be passed to Web Extensions on initialization.
     * The data will be passed to the
     * #WebKitWebExtensionInitializeWithUserDataFunction.
     * This method must be called before loading anything in this context,
     * otherwise it will not have any effect. You can connect to
     * #WebKitWebContext::initialize-web-extensions to call this method
     * before anything is loaded.
     * @param userData a #GVariant
     */
    setWebExtensionsInitializationUserData(userData: GLib.Variant): void
    /**
     * Sets the maximum number of web processes that can be created at the same time for the `context`.
     * The default value is 0 and means no limit.
     * 
     * This function is now deprecated and does nothing for security reasons.
     * @param limit the maximum number of web processes
     */
    setWebProcessCountLimit(limit: number): void

    // Own signals of WebKit2-5.0.WebKit2.WebContext

    connect(sigName: "automation-started", callback: WebContext_AutomationStartedSignalCallback): number
    on(sigName: "automation-started", callback: WebContext_AutomationStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "automation-started", callback: WebContext_AutomationStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "automation-started", callback: WebContext_AutomationStartedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "automation-started", ...args: any[]): void
    connect(sigName: "download-started", callback: WebContext_DownloadStartedSignalCallback): number
    on(sigName: "download-started", callback: WebContext_DownloadStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "download-started", callback: WebContext_DownloadStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "download-started", callback: WebContext_DownloadStartedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "download-started", ...args: any[]): void
    connect(sigName: "initialize-notification-permissions", callback: WebContext_InitializeNotificationPermissionsSignalCallback): number
    on(sigName: "initialize-notification-permissions", callback: WebContext_InitializeNotificationPermissionsSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "initialize-notification-permissions", callback: WebContext_InitializeNotificationPermissionsSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "initialize-notification-permissions", callback: WebContext_InitializeNotificationPermissionsSignalCallback): NodeJS.EventEmitter
    emit(sigName: "initialize-notification-permissions", ...args: any[]): void
    connect(sigName: "initialize-web-extensions", callback: WebContext_InitializeWebExtensionsSignalCallback): number
    on(sigName: "initialize-web-extensions", callback: WebContext_InitializeWebExtensionsSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "initialize-web-extensions", callback: WebContext_InitializeWebExtensionsSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "initialize-web-extensions", callback: WebContext_InitializeWebExtensionsSignalCallback): NodeJS.EventEmitter
    emit(sigName: "initialize-web-extensions", ...args: any[]): void
    connect(sigName: "user-message-received", callback: WebContext_UserMessageReceivedSignalCallback): number
    on(sigName: "user-message-received", callback: WebContext_UserMessageReceivedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-message-received", callback: WebContext_UserMessageReceivedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-message-received", callback: WebContext_UserMessageReceivedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "user-message-received", ...args: any[]): void

    // Class property signals of WebKit2-5.0.WebKit2.WebContext

    connect(sigName: "notify::local-storage-directory", callback: (...args: any[]) => void): number
    on(sigName: "notify::local-storage-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::local-storage-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::local-storage-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::local-storage-directory", ...args: any[]): void
    connect(sigName: "notify::memory-pressure-settings", callback: (...args: any[]) => void): number
    on(sigName: "notify::memory-pressure-settings", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::memory-pressure-settings", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::memory-pressure-settings", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::memory-pressure-settings", ...args: any[]): void
    connect(sigName: "notify::process-swap-on-cross-site-navigation-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::process-swap-on-cross-site-navigation-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::process-swap-on-cross-site-navigation-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::process-swap-on-cross-site-navigation-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::process-swap-on-cross-site-navigation-enabled", ...args: any[]): void
    connect(sigName: "notify::website-data-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::website-data-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::website-data-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::website-data-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::website-data-manager", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class WebContext extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.WebContext

    static name: string
    static $gtype: GObject.GType<WebContext>

    // Constructors of WebKit2-5.0.WebKit2.WebContext

    constructor(config?: WebContext_ConstructProps) 
    /**
     * Create a new #WebKitWebContext
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #WebKitWebContext
     * @constructor 
     */
    static new(): WebContext
    /**
     * Create a new ephemeral #WebKitWebContext. An ephemeral #WebKitWebContext is a context
     * created with an ephemeral #WebKitWebsiteDataManager. This is just a convenient method
     * to create ephemeral contexts without having to create your own #WebKitWebsiteDataManager.
     * All #WebKitWebView<!-- -->s associated with this context will also be ephemeral. Websites will
     * not store any data in the client storage.
     * This is normally used to implement private instances.
     * @constructor 
     */
    static newEphemeral(): WebContext
    /**
     * Create a new #WebKitWebContext with a #WebKitWebsiteDataManager.
     * @constructor 
     * @param manager a #WebKitWebsiteDataManager
     */
    static newWithWebsiteDataManager(manager: WebsiteDataManager): WebContext
    _init(config?: WebContext_ConstructProps): void
    /**
     * Gets the default web context
     */
    static getDefault(): WebContext
}

interface WebInspector_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `attach`
 */
interface WebInspector_AttachSignalCallback {
    (): boolean
}

/**
 * Signal callback interface for `bring-to-front`
 */
interface WebInspector_BringToFrontSignalCallback {
    (): boolean
}

/**
 * Signal callback interface for `closed`
 */
interface WebInspector_ClosedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `detach`
 */
interface WebInspector_DetachSignalCallback {
    (): boolean
}

/**
 * Signal callback interface for `open-window`
 */
interface WebInspector_OpenWindowSignalCallback {
    (): boolean
}

interface WebInspector {

    // Own properties of WebKit2-5.0.WebKit2.WebInspector

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
    readonly inspectedUri: string

    // Own fields of WebKit2-5.0.WebKit2.WebInspector

    parent: GObject.Object
    priv: WebInspectorPrivate

    // Owm methods of WebKit2-5.0.WebKit2.WebInspector

    /**
     * Request `inspector` to be attached. The signal #WebKitWebInspector::attach
     * will be emitted. If the inspector is already attached it does nothing.
     */
    attach(): void
    /**
     * Request `inspector` to be closed.
     */
    close(): void
    /**
     * Request `inspector` to be detached. The signal #WebKitWebInspector::detach
     * will be emitted. If the inspector is already detached it does nothing.
     */
    detach(): void
    /**
     * Get the height that the inspector view should have when
     * it's attached. If the inspector view is not attached this
     * returns 0.
     */
    getAttachedHeight(): number
    /**
     * Whether the `inspector` can be attached to the same window that contains
     * the inspected view.
     */
    getCanAttach(): boolean
    /**
     * Get the URI that is currently being inspected. This can be %NULL if
     * nothing has been loaded yet in the inspected view, if the inspector
     * has been closed or when inspected view was loaded from a HTML string
     * instead of a URI.
     */
    getInspectedUri(): string
    /**
     * Get the #WebKitWebViewBase used to display the inspector.
     * This might be %NULL if the inspector hasn't been loaded yet,
     * or it has been closed.
     */
    getWebView(): WebViewBase
    /**
     * Whether the `inspector` view is currently attached to the same window that contains
     * the inspected view.
     */
    isAttached(): boolean
    /**
     * Request `inspector` to be shown.
     */
    show(): void

    // Own signals of WebKit2-5.0.WebKit2.WebInspector

    connect(sigName: "attach", callback: WebInspector_AttachSignalCallback): number
    on(sigName: "attach", callback: WebInspector_AttachSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "attach", callback: WebInspector_AttachSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "attach", callback: WebInspector_AttachSignalCallback): NodeJS.EventEmitter
    emit(sigName: "attach", ...args: any[]): void
    connect(sigName: "bring-to-front", callback: WebInspector_BringToFrontSignalCallback): number
    on(sigName: "bring-to-front", callback: WebInspector_BringToFrontSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bring-to-front", callback: WebInspector_BringToFrontSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bring-to-front", callback: WebInspector_BringToFrontSignalCallback): NodeJS.EventEmitter
    emit(sigName: "bring-to-front", ...args: any[]): void
    connect(sigName: "closed", callback: WebInspector_ClosedSignalCallback): number
    on(sigName: "closed", callback: WebInspector_ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: WebInspector_ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: WebInspector_ClosedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "closed", ...args: any[]): void
    connect(sigName: "detach", callback: WebInspector_DetachSignalCallback): number
    on(sigName: "detach", callback: WebInspector_DetachSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "detach", callback: WebInspector_DetachSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "detach", callback: WebInspector_DetachSignalCallback): NodeJS.EventEmitter
    emit(sigName: "detach", ...args: any[]): void
    connect(sigName: "open-window", callback: WebInspector_OpenWindowSignalCallback): number
    on(sigName: "open-window", callback: WebInspector_OpenWindowSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "open-window", callback: WebInspector_OpenWindowSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "open-window", callback: WebInspector_OpenWindowSignalCallback): NodeJS.EventEmitter
    emit(sigName: "open-window", ...args: any[]): void

    // Class property signals of WebKit2-5.0.WebKit2.WebInspector

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class WebInspector extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.WebInspector

    static name: string
    static $gtype: GObject.GType<WebInspector>

    // Constructors of WebKit2-5.0.WebKit2.WebInspector

    constructor(config?: WebInspector_ConstructProps) 
    _init(config?: WebInspector_ConstructProps): void
}

interface WebResource_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `failed`
 */
interface WebResource_FailedSignalCallback {
    (error: GLib.Error): void
}

/**
 * Signal callback interface for `failed-with-tls-errors`
 */
interface WebResource_FailedWithTlsErrorsSignalCallback {
    (certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): void
}

/**
 * Signal callback interface for `finished`
 */
interface WebResource_FinishedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `received-data`
 */
interface WebResource_ReceivedDataSignalCallback {
    (dataLength: number): void
}

/**
 * Signal callback interface for `sent-request`
 */
interface WebResource_SentRequestSignalCallback {
    (request: URIRequest, redirectedResponse: URIResponse): void
}

interface WebResource {

    // Own properties of WebKit2-5.0.WebKit2.WebResource

    /**
     * The #WebKitURIResponse associated with this resource.
     */
    readonly response: URIResponse
    /**
     * The current active URI of the #WebKitWebResource.
     * See webkit_web_resource_get_uri() for more details.
     */
    readonly uri: string

    // Own fields of WebKit2-5.0.WebKit2.WebResource

    parent: GObject.Object
    priv: WebResourcePrivate

    // Owm methods of WebKit2-5.0.WebKit2.WebResource

    /**
     * Asynchronously get the raw data for `resource`.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * webkit_web_resource_get_data_finish() to get the result of the operation.
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    getData(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key?: string): object | null
    getData(...args: any[]): any
    getData(args_or_key?: any[] | string): void | object | null | any
    /**
     * Finish an asynchronous operation started with webkit_web_resource_get_data().
     * @param result a #GAsyncResult
     */
    getDataFinish(result: Gio.AsyncResult): Uint8Array
    /**
     * Retrieves the #WebKitURIResponse of the resource load operation.
     * This method returns %NULL if called before the response
     * is received from the server. You can connect to notify::response
     * signal to be notified when the response is received.
     */
    getResponse(): URIResponse
    /**
     * Returns the current active URI of `resource`. The active URI might change during
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
     */
    getUri(): string

    // Own signals of WebKit2-5.0.WebKit2.WebResource

    connect(sigName: "failed", callback: WebResource_FailedSignalCallback): number
    on(sigName: "failed", callback: WebResource_FailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "failed", callback: WebResource_FailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "failed", callback: WebResource_FailedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "failed", ...args: any[]): void
    connect(sigName: "failed-with-tls-errors", callback: WebResource_FailedWithTlsErrorsSignalCallback): number
    on(sigName: "failed-with-tls-errors", callback: WebResource_FailedWithTlsErrorsSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "failed-with-tls-errors", callback: WebResource_FailedWithTlsErrorsSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "failed-with-tls-errors", callback: WebResource_FailedWithTlsErrorsSignalCallback): NodeJS.EventEmitter
    emit(sigName: "failed-with-tls-errors", errors: Gio.TlsCertificateFlags, ...args: any[]): void
    connect(sigName: "finished", callback: WebResource_FinishedSignalCallback): number
    on(sigName: "finished", callback: WebResource_FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: WebResource_FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: WebResource_FinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "finished", ...args: any[]): void
    connect(sigName: "received-data", callback: WebResource_ReceivedDataSignalCallback): number
    on(sigName: "received-data", callback: WebResource_ReceivedDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "received-data", callback: WebResource_ReceivedDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "received-data", callback: WebResource_ReceivedDataSignalCallback): NodeJS.EventEmitter
    emit(sigName: "received-data", ...args: any[]): void
    connect(sigName: "sent-request", callback: WebResource_SentRequestSignalCallback): number
    on(sigName: "sent-request", callback: WebResource_SentRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "sent-request", callback: WebResource_SentRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "sent-request", callback: WebResource_SentRequestSignalCallback): NodeJS.EventEmitter
    emit(sigName: "sent-request", redirectedResponse: URIResponse, ...args: any[]): void

    // Class property signals of WebKit2-5.0.WebKit2.WebResource

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class WebResource extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.WebResource

    static name: string
    static $gtype: GObject.GType<WebResource>

    // Constructors of WebKit2-5.0.WebKit2.WebResource

    constructor(config?: WebResource_ConstructProps) 
    _init(config?: WebResource_ConstructProps): void
}

interface WebView_ConstructProps extends Gtk.Accessible_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.ConstraintTarget_ConstructProps, WebViewBase_ConstructProps {

    // Own constructor properties of WebKit2-5.0.WebKit2.WebView

    /**
     * The #WebKitAutomationBrowsingContextPresentation of #WebKitWebView. This should only be used when
     * creating a new #WebKitWebView as a response to #WebKitAutomationSession::create-web-view
     * signal request. If the new WebView was added to a new tab of current browsing context window
     * %WEBKIT_AUTOMATION_BROWSING_CONTEXT_PRESENTATION_TAB should be used.
     */
    automationPresentationType?: AutomationBrowsingContextPresentation | null
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
    cameraCaptureState?: MediaCaptureState | null
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
    displayCaptureState?: MediaCaptureState | null
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
    isControlledByAutomation?: boolean | null
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
    isEphemeral?: boolean | null
    /**
     * Whether the #WebKitWebView audio is muted. When %TRUE, audio is silenced.
     * It may still be playing, i.e. #WebKitWebView:is-playing-audio may be %TRUE.
     */
    isMuted?: boolean | null
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
    microphoneCaptureState?: MediaCaptureState | null
    /**
     * The related #WebKitWebView used when creating the view to share the
     * same web process. This property is not readable because the related
     * web view is only valid during the object construction.
     */
    relatedView?: WebView | null
    /**
     * The #WebKitSettings of the view.
     */
    settings?: Settings | null
    /**
     * The #WebKitUserContentManager of the view.
     */
    userContentManager?: UserContentManager | null
    /**
     * The #WebKitWebContext of the view.
     */
    webContext?: WebContext | null
    /**
     * The #WebKitWebsitePolicies for the view.
     */
    websitePolicies?: WebsitePolicies | null
    /**
     * The zoom level of the #WebKitWebView content.
     * See webkit_web_view_set_zoom_level() for more details.
     */
    zoomLevel?: number | null
}

/**
 * Signal callback interface for `authenticate`
 */
interface WebView_AuthenticateSignalCallback {
    (request: AuthenticationRequest): boolean
}

/**
 * Signal callback interface for `close`
 */
interface WebView_CloseSignalCallback {
    (): void
}

/**
 * Signal callback interface for `context-menu`
 */
interface WebView_ContextMenuSignalCallback {
    (contextMenu: ContextMenu, event: Gdk.Event, hitTestResult: HitTestResult): boolean
}

/**
 * Signal callback interface for `context-menu-dismissed`
 */
interface WebView_ContextMenuDismissedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `create`
 */
interface WebView_CreateSignalCallback {
    (navigationAction: NavigationAction): Gtk.Widget
}

/**
 * Signal callback interface for `decide-policy`
 */
interface WebView_DecidePolicySignalCallback {
    (decision: PolicyDecision, decisionType: PolicyDecisionType): boolean
}

/**
 * Signal callback interface for `enter-fullscreen`
 */
interface WebView_EnterFullscreenSignalCallback {
    (): boolean
}

/**
 * Signal callback interface for `insecure-content-detected`
 */
interface WebView_InsecureContentDetectedSignalCallback {
    (event: InsecureContentEvent): void
}

/**
 * Signal callback interface for `leave-fullscreen`
 */
interface WebView_LeaveFullscreenSignalCallback {
    (): boolean
}

/**
 * Signal callback interface for `load-changed`
 */
interface WebView_LoadChangedSignalCallback {
    (loadEvent: LoadEvent): void
}

/**
 * Signal callback interface for `load-failed`
 */
interface WebView_LoadFailedSignalCallback {
    (loadEvent: LoadEvent, failingUri: string, error: GLib.Error): boolean
}

/**
 * Signal callback interface for `load-failed-with-tls-errors`
 */
interface WebView_LoadFailedWithTlsErrorsSignalCallback {
    (failingUri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): boolean
}

/**
 * Signal callback interface for `mouse-target-changed`
 */
interface WebView_MouseTargetChangedSignalCallback {
    (hitTestResult: HitTestResult, modifiers: number): void
}

/**
 * Signal callback interface for `permission-request`
 */
interface WebView_PermissionRequestSignalCallback {
    (request: PermissionRequest): boolean
}

/**
 * Signal callback interface for `print`
 */
interface WebView_PrintSignalCallback {
    (printOperation: PrintOperation): boolean
}

/**
 * Signal callback interface for `ready-to-show`
 */
interface WebView_ReadyToShowSignalCallback {
    (): void
}

/**
 * Signal callback interface for `resource-load-started`
 */
interface WebView_ResourceLoadStartedSignalCallback {
    (resource: WebResource, request: URIRequest): void
}

/**
 * Signal callback interface for `run-as-modal`
 */
interface WebView_RunAsModalSignalCallback {
    (): void
}

/**
 * Signal callback interface for `run-color-chooser`
 */
interface WebView_RunColorChooserSignalCallback {
    (request: ColorChooserRequest): boolean
}

/**
 * Signal callback interface for `run-file-chooser`
 */
interface WebView_RunFileChooserSignalCallback {
    (request: FileChooserRequest): boolean
}

/**
 * Signal callback interface for `script-dialog`
 */
interface WebView_ScriptDialogSignalCallback {
    (dialog: ScriptDialog): boolean
}

/**
 * Signal callback interface for `show-notification`
 */
interface WebView_ShowNotificationSignalCallback {
    (notification: Notification): boolean
}

/**
 * Signal callback interface for `show-option-menu`
 */
interface WebView_ShowOptionMenuSignalCallback {
    (menu: OptionMenu, event: Gdk.Event, rectangle: Gdk.Rectangle): boolean
}

/**
 * Signal callback interface for `submit-form`
 */
interface WebView_SubmitFormSignalCallback {
    (request: FormSubmissionRequest): void
}

/**
 * Signal callback interface for `user-message-received`
 */
interface WebView_UserMessageReceivedSignalCallback {
    (message: UserMessage): boolean
}

/**
 * Signal callback interface for `web-process-crashed`
 */
interface WebView_WebProcessCrashedSignalCallback {
    (): boolean
}

/**
 * Signal callback interface for `web-process-terminated`
 */
interface WebView_WebProcessTerminatedSignalCallback {
    (reason: WebProcessTerminationReason): void
}

interface WebView extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of WebKit2-5.0.WebKit2.WebView

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
    readonly favicon: object
    /**
     * Whether the #WebKitWebView is controlled by automation. This should only be used when
     * creating a new #WebKitWebView as a response to #WebKitAutomationSession::create-web-view
     * signal request.
     */
    readonly isControlledByAutomation: boolean
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
    readonly isEphemeral: boolean
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
     * The identifier of the #WebKitWebPage corresponding to the #WebKitWebView.
     */
    readonly pageId: number
    /**
     * The related #WebKitWebView used when creating the view to share the
     * same web process. This property is not readable because the related
     * web view is only valid during the object construction.
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
    readonly title: string
    /**
     * The current active URI of the #WebKitWebView.
     * See webkit_web_view_get_uri() for more details.
     */
    readonly uri: string
    /**
     * The #WebKitUserContentManager of the view.
     */
    readonly userContentManager: UserContentManager
    /**
     * The #WebKitWebContext of the view.
     */
    readonly webContext: WebContext
    /**
     * The #WebKitWebsitePolicies for the view.
     */
    readonly websitePolicies: WebsitePolicies
    /**
     * The zoom level of the #WebKitWebView content.
     * See webkit_web_view_set_zoom_level() for more details.
     */
    zoomLevel: number

    // Conflicting properties

    parentInstance: any

    // Own fields of WebKit2-5.0.WebKit2.WebView

    parent: WebViewBase

    // Owm methods of WebKit2-5.0.WebKit2.WebView

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
     */
    canExecuteEditingCommandFinish(result: Gio.AsyncResult): boolean
    /**
     * Determines whether `web_view` has a previous history item.
     */
    canGoBack(): boolean
    /**
     * Determines whether `web_view` has a next history item.
     */
    canGoForward(): boolean
    /**
     * Whether or not a MIME type can be displayed in `web_view`.
     * @param mimeType a MIME type
     */
    canShowMimeType(mimeType: string): boolean
    /**
     * Requests downloading of the specified URI string for `web_view`.
     * @param uri the URI to download
     */
    downloadUri(uri: string): Download
    /**
     * Request to execute the given `command` for `web_view`. You can use
     * webkit_web_view_can_execute_editing_command() to check whether
     * it's possible to execute the command.
     * @param command the command to execute
     */
    executeEditingCommand(command: string): void
    /**
     * Request to execute the given `command` with `argument` for `web_view`. You can use
     * webkit_web_view_can_execute_editing_command() to check whether
     * it's possible to execute the command.
     * @param command the command to execute
     * @param argument the command argument
     */
    executeEditingCommandWithArgument(command: string, argument: string): void
    /**
     * Get the presentation type of #WebKitWebView when created for automation.
     */
    getAutomationPresentationType(): AutomationBrowsingContextPresentation
    /**
     * Obtains the #WebKitBackForwardList associated with the given #WebKitWebView. The
     * #WebKitBackForwardList is owned by the #WebKitWebView.
     */
    getBackForwardList(): BackForwardList
    /**
     * Gets the color that is used to draw the `web_view` background before
     * the actual contents are rendered.
     * For more information see also webkit_web_view_set_background_color()
     */
    getBackgroundColor(): /* rgba */ Gdk.RGBA
    /**
     * Get the camera capture state of a #WebKitWebView.
     */
    getCameraCaptureState(): MediaCaptureState
    /**
     * Gets the web context of `web_view`.
     */
    getContext(): WebContext
    /**
     * Returns the current custom character encoding name of `web_view`.
     */
    getCustomCharset(): string
    /**
     * Get the display capture state of a #WebKitWebView.
     */
    getDisplayCaptureState(): MediaCaptureState
    /**
     * Gets the web editor state of `web_view`.
     */
    getEditorState(): EditorState
    /**
     * Gets the value of the #WebKitWebView:estimated-load-progress property.
     * You can monitor the estimated progress of a load operation by
     * connecting to the notify::estimated-load-progress signal of `web_view`.
     */
    getEstimatedLoadProgress(): number
    /**
     * Returns favicon currently associated to `web_view,` if any. You can
     * connect to notify::favicon signal of `web_view` to be notified when
     * the favicon is available.
     */
    getFavicon(): cairo.Surface
    /**
     * Gets the #WebKitFindController that will allow the caller to query
     * the #WebKitWebView for the text to look for.
     */
    getFindController(): FindController
    /**
     * Get the #WebKitInputMethodContext currently in use by `web_view,` or %NULL if no input method is being used.
     */
    getInputMethodContext(): InputMethodContext | null
    /**
     * Get the #WebKitWebInspector associated to `web_view`
     */
    getInspector(): WebInspector
    /**
     * Gets the mute state of `web_view`.
     */
    getIsMuted(): boolean
    getIsWebProcessResponsive(): boolean
    /**
     * Return the main resource of `web_view`.
     */
    getMainResource(): WebResource
    /**
     * Get the microphone capture state of a #WebKitWebView.
     */
    getMicrophoneCaptureState(): MediaCaptureState
    /**
     * Get the identifier of the #WebKitWebPage corresponding to
     * the #WebKitWebView
     */
    getPageId(): number
    /**
     * Gets the current session state of `web_view`
     */
    getSessionState(): WebViewSessionState
    /**
     * Gets the #WebKitSettings currently applied to `web_view`.
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
     */
    getSettings(): Gtk.Settings
    getSettings(...args: any[]): any
    getSettings(...args: any[]): Settings | Gtk.Settings | any
    /**
     * Asynchronously retrieves a snapshot of `web_view` for `region`.
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
     */
    getSnapshotFinish(result: Gio.AsyncResult): cairo.Surface
    /**
     * Gets the value of the #WebKitWebView:title property.
     * You can connect to notify::title signal of `web_view` to
     * be notified when the title has been received.
     */
    getTitle(): string
    /**
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
     */
    getTlsInfo(): [ /* returnType */ boolean, /* certificate */ Gio.TlsCertificate, /* errors */ Gio.TlsCertificateFlags ]
    /**
     * Returns the current active URI of `web_view`. The active URI might change during
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
     */
    getUri(): string
    /**
     * Gets the user content manager associated to `web_view`.
     */
    getUserContentManager(): UserContentManager
    /**
     * Get the #WebKitWebsiteDataManager associated to `web_view`. If `web_view` is not ephemeral,
     * the returned #WebKitWebsiteDataManager will be the same as the #WebKitWebsiteDataManager
     * of `web_view'`s #WebKitWebContext.
     */
    getWebsiteDataManager(): WebsiteDataManager
    /**
     * Gets the default website policies set on construction in the
     * `web_view`. These can be overridden on a per-origin basis via the
     * #WebKitWebView::decide-policy signal handler.
     * 
     * See also webkit_policy_decision_use_with_policies().
     */
    getWebsitePolicies(): WebsitePolicies
    /**
     * Get the #WebKitWindowProperties object containing the properties
     * that the window containing `web_view` should have.
     */
    getWindowProperties(): WindowProperties
    /**
     * Get the zoom level of `web_view,` i.e. the factor by which the
     * view contents are scaled with respect to their original size.
     */
    getZoomLevel(): number
    /**
     * Loads the previous history item.
     * You can monitor the load operation by connecting to
     * #WebKitWebView::load-changed signal.
     */
    goBack(): void
    /**
     * Loads the next history item.
     * You can monitor the load operation by connecting to
     * #WebKitWebView::load-changed signal.
     */
    goForward(): void
    /**
     * Loads the specific history item `list_item`.
     * You can monitor the load operation by connecting to
     * #WebKitWebView::load-changed signal.
     * @param listItem a #WebKitBackForwardListItem
     */
    goToBackForwardListItem(listItem: BackForwardListItem): void
    isEditable(): boolean
    /**
     * Load the given `content` string for the URI `content_uri`.
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
     * Load the specified `plain_text` string into `web_view`. The mime type of
     * document will be "text/plain". You can monitor the load
     * operation by connecting to #WebKitWebView::load-changed signal.
     * @param plainText The plain text to load
     */
    loadPlainText(plainText: string): void
    /**
     * Requests loading of the specified #WebKitURIRequest.
     * You can monitor the load operation by connecting to
     * #WebKitWebView::load-changed signal.
     * @param request a #WebKitURIRequest to load
     */
    loadRequest(request: URIRequest): void
    /**
     * Requests loading of the specified URI string.
     * You can monitor the load operation by connecting to
     * #WebKitWebView::load-changed signal.
     * @param uri an URI string
     */
    loadUri(uri: string): void
    /**
     * Reloads the current contents of `web_view`.
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
     * Asynchronously run `script` in the context of the current page in `web_view`. If
     * WebKitSettings:enable-javascript is FALSE, this method will do nothing.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * webkit_web_view_run_javascript_finish() to get the result of the operation.
     * @param script the script to run
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the script finished
     */
    runJavascript(script: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation started with webkit_web_view_run_javascript().
     * 
     * This is an example of using webkit_web_view_run_javascript() with a script returning
     * a string:
     * 
     * <informalexample><programlisting>
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
     *         JSCException *exception;
     *         gchar        *str_value;
     * 
     *         str_value = jsc_value_to_string (value);
     *         exception = jsc_context_get_exception (jsc_value_get_context (value));
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
     *     gchar *script;
     * 
     *     script = g_strdup_printf ("window.document.getElementById('%s').href;", link_id);
     *     webkit_web_view_run_javascript (web_view, script, NULL, web_view_javascript_finished, NULL);
     *     g_free (script);
     * }
     * </programlisting></informalexample>
     * @param result a #GAsyncResult
     */
    runJavascriptFinish(result: Gio.AsyncResult): JavascriptResult
    /**
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
    runJavascriptFromGresource(resource: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation started with webkit_web_view_run_javascript_from_gresource().
     * 
     * Check webkit_web_view_run_javascript_finish() for a usage example.
     * @param result a #GAsyncResult
     */
    runJavascriptFromGresourceFinish(result: Gio.AsyncResult): JavascriptResult
    /**
     * Asynchronously run `script` in the script world with name `world_name` of the current page context in `web_view`.
     * If WebKitSettings:enable-javascript is FALSE, this method will do nothing.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * webkit_web_view_run_javascript_in_world_finish() to get the result of the operation.
     * @param script the script to run
     * @param worldName the name of a #WebKitScriptWorld
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the script finished
     */
    runJavascriptInWorld(script: string, worldName: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation started with webkit_web_view_run_javascript_in_world().
     * @param result a #GAsyncResult
     */
    runJavascriptInWorldFinish(result: Gio.AsyncResult): JavascriptResult
    /**
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
     */
    saveFinish(result: Gio.AsyncResult): Gio.InputStream
    /**
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
     */
    saveToFileFinish(result: Gio.AsyncResult): boolean
    /**
     * Send `message` to the #WebKitWebPage corresponding to `web_view`. If `message` is floating, it's consumed.
     * 
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
     */
    sendMessageToPageFinish(result: Gio.AsyncResult): UserMessage
    /**
     * Sets the color that will be used to draw the `web_view` background before
     * the actual contents are rendered. Note that if the web page loaded in `web_view`
     * specifies a background color, it will take precedence over the `rgba` color.
     * By default the `web_view` background color is opaque white.
     * Note that the parent window must have a RGBA visual and
     * #GtkWidget:app-paintable property set to %TRUE for backgrounds colors to work.
     * 
     * <informalexample><programlisting>
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
     * </programlisting></informalexample>
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
     * Sets the current custom character encoding override of `web_view`. The custom
     * character encoding will override any text encoding detected via HTTP headers or
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
     * Sets the #WebKitSettings to be applied to `web_view`. The
     * existing #WebKitSettings of `web_view` will be replaced by
     * `settings`. New settings are applied immediately on `web_view`.
     * The same #WebKitSettings object can be shared
     * by multiple #WebKitWebView<!-- -->s.
     * @param settings a #WebKitSettings
     */
    setSettings(settings: Settings): void
    /**
     * Set the zoom level of `web_view,` i.e. the factor by which the
     * view contents are scaled with respect to their original size.
     * @param zoomLevel the zoom level
     */
    setZoomLevel(zoomLevel: number): void
    /**
     * Stops any ongoing loading operation in `web_view`.
     * This method does nothing if no content is being loaded.
     * If there is a loading operation in progress, it will be cancelled and
     * #WebKitWebView::load-failed signal will be emitted with
     * %WEBKIT_NETWORK_ERROR_CANCELLED error.
     */
    stopLoading(): void
    /**
     * Terminates the web process associated to `web_view`. When the web process gets terminated
     * using this method, the #WebKitWebView::web-process-terminated signal is emitted with
     * %WEBKIT_WEB_PROCESS_TERMINATED_BY_API as the reason for termination.
     */
    terminateWebProcess(): void
    /**
     * Tries to close the `web_view`. This will fire the onbeforeunload event
     * to ask the user for confirmation to close the page. If there isn't an
     * onbeforeunload event handler or the user confirms to close the page,
     * the #WebKitWebView::close signal is emitted, otherwise nothing happens.
     */
    tryClose(): void

    // Own signals of WebKit2-5.0.WebKit2.WebView

    connect(sigName: "authenticate", callback: WebView_AuthenticateSignalCallback): number
    on(sigName: "authenticate", callback: WebView_AuthenticateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: WebView_AuthenticateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: WebView_AuthenticateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "authenticate", ...args: any[]): void
    connect(sigName: "close", callback: WebView_CloseSignalCallback): number
    on(sigName: "close", callback: WebView_CloseSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "close", callback: WebView_CloseSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "close", callback: WebView_CloseSignalCallback): NodeJS.EventEmitter
    emit(sigName: "close", ...args: any[]): void
    connect(sigName: "context-menu", callback: WebView_ContextMenuSignalCallback): number
    on(sigName: "context-menu", callback: WebView_ContextMenuSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "context-menu", callback: WebView_ContextMenuSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "context-menu", callback: WebView_ContextMenuSignalCallback): NodeJS.EventEmitter
    emit(sigName: "context-menu", event: Gdk.Event, hitTestResult: HitTestResult, ...args: any[]): void
    connect(sigName: "context-menu-dismissed", callback: WebView_ContextMenuDismissedSignalCallback): number
    on(sigName: "context-menu-dismissed", callback: WebView_ContextMenuDismissedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "context-menu-dismissed", callback: WebView_ContextMenuDismissedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "context-menu-dismissed", callback: WebView_ContextMenuDismissedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "context-menu-dismissed", ...args: any[]): void
    connect(sigName: "create", callback: WebView_CreateSignalCallback): number
    on(sigName: "create", callback: WebView_CreateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "create", callback: WebView_CreateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "create", callback: WebView_CreateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "create", ...args: any[]): void
    connect(sigName: "decide-policy", callback: WebView_DecidePolicySignalCallback): number
    on(sigName: "decide-policy", callback: WebView_DecidePolicySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "decide-policy", callback: WebView_DecidePolicySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "decide-policy", callback: WebView_DecidePolicySignalCallback): NodeJS.EventEmitter
    emit(sigName: "decide-policy", decisionType: PolicyDecisionType, ...args: any[]): void
    connect(sigName: "enter-fullscreen", callback: WebView_EnterFullscreenSignalCallback): number
    on(sigName: "enter-fullscreen", callback: WebView_EnterFullscreenSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-fullscreen", callback: WebView_EnterFullscreenSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-fullscreen", callback: WebView_EnterFullscreenSignalCallback): NodeJS.EventEmitter
    emit(sigName: "enter-fullscreen", ...args: any[]): void
    connect(sigName: "insecure-content-detected", callback: WebView_InsecureContentDetectedSignalCallback): number
    on(sigName: "insecure-content-detected", callback: WebView_InsecureContentDetectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "insecure-content-detected", callback: WebView_InsecureContentDetectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "insecure-content-detected", callback: WebView_InsecureContentDetectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "insecure-content-detected", ...args: any[]): void
    connect(sigName: "leave-fullscreen", callback: WebView_LeaveFullscreenSignalCallback): number
    on(sigName: "leave-fullscreen", callback: WebView_LeaveFullscreenSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-fullscreen", callback: WebView_LeaveFullscreenSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-fullscreen", callback: WebView_LeaveFullscreenSignalCallback): NodeJS.EventEmitter
    emit(sigName: "leave-fullscreen", ...args: any[]): void
    connect(sigName: "load-changed", callback: WebView_LoadChangedSignalCallback): number
    on(sigName: "load-changed", callback: WebView_LoadChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "load-changed", callback: WebView_LoadChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "load-changed", callback: WebView_LoadChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "load-changed", ...args: any[]): void
    connect(sigName: "load-failed", callback: WebView_LoadFailedSignalCallback): number
    on(sigName: "load-failed", callback: WebView_LoadFailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "load-failed", callback: WebView_LoadFailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "load-failed", callback: WebView_LoadFailedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "load-failed", failingUri: string, error: GLib.Error, ...args: any[]): void
    connect(sigName: "load-failed-with-tls-errors", callback: WebView_LoadFailedWithTlsErrorsSignalCallback): number
    on(sigName: "load-failed-with-tls-errors", callback: WebView_LoadFailedWithTlsErrorsSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "load-failed-with-tls-errors", callback: WebView_LoadFailedWithTlsErrorsSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "load-failed-with-tls-errors", callback: WebView_LoadFailedWithTlsErrorsSignalCallback): NodeJS.EventEmitter
    emit(sigName: "load-failed-with-tls-errors", certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags, ...args: any[]): void
    connect(sigName: "mouse-target-changed", callback: WebView_MouseTargetChangedSignalCallback): number
    on(sigName: "mouse-target-changed", callback: WebView_MouseTargetChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mouse-target-changed", callback: WebView_MouseTargetChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mouse-target-changed", callback: WebView_MouseTargetChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "mouse-target-changed", modifiers: number, ...args: any[]): void
    connect(sigName: "permission-request", callback: WebView_PermissionRequestSignalCallback): number
    on(sigName: "permission-request", callback: WebView_PermissionRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "permission-request", callback: WebView_PermissionRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "permission-request", callback: WebView_PermissionRequestSignalCallback): NodeJS.EventEmitter
    emit(sigName: "permission-request", ...args: any[]): void
    connect(sigName: "print", callback: WebView_PrintSignalCallback): number
    on(sigName: "print", callback: WebView_PrintSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "print", callback: WebView_PrintSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "print", callback: WebView_PrintSignalCallback): NodeJS.EventEmitter
    emit(sigName: "print", ...args: any[]): void
    connect(sigName: "ready-to-show", callback: WebView_ReadyToShowSignalCallback): number
    on(sigName: "ready-to-show", callback: WebView_ReadyToShowSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ready-to-show", callback: WebView_ReadyToShowSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ready-to-show", callback: WebView_ReadyToShowSignalCallback): NodeJS.EventEmitter
    emit(sigName: "ready-to-show", ...args: any[]): void
    connect(sigName: "resource-load-started", callback: WebView_ResourceLoadStartedSignalCallback): number
    on(sigName: "resource-load-started", callback: WebView_ResourceLoadStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resource-load-started", callback: WebView_ResourceLoadStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resource-load-started", callback: WebView_ResourceLoadStartedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "resource-load-started", request: URIRequest, ...args: any[]): void
    connect(sigName: "run-as-modal", callback: WebView_RunAsModalSignalCallback): number
    on(sigName: "run-as-modal", callback: WebView_RunAsModalSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "run-as-modal", callback: WebView_RunAsModalSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "run-as-modal", callback: WebView_RunAsModalSignalCallback): NodeJS.EventEmitter
    emit(sigName: "run-as-modal", ...args: any[]): void
    connect(sigName: "run-color-chooser", callback: WebView_RunColorChooserSignalCallback): number
    on(sigName: "run-color-chooser", callback: WebView_RunColorChooserSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "run-color-chooser", callback: WebView_RunColorChooserSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "run-color-chooser", callback: WebView_RunColorChooserSignalCallback): NodeJS.EventEmitter
    emit(sigName: "run-color-chooser", ...args: any[]): void
    connect(sigName: "run-file-chooser", callback: WebView_RunFileChooserSignalCallback): number
    on(sigName: "run-file-chooser", callback: WebView_RunFileChooserSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "run-file-chooser", callback: WebView_RunFileChooserSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "run-file-chooser", callback: WebView_RunFileChooserSignalCallback): NodeJS.EventEmitter
    emit(sigName: "run-file-chooser", ...args: any[]): void
    connect(sigName: "script-dialog", callback: WebView_ScriptDialogSignalCallback): number
    on(sigName: "script-dialog", callback: WebView_ScriptDialogSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "script-dialog", callback: WebView_ScriptDialogSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "script-dialog", callback: WebView_ScriptDialogSignalCallback): NodeJS.EventEmitter
    emit(sigName: "script-dialog", ...args: any[]): void
    connect(sigName: "show-notification", callback: WebView_ShowNotificationSignalCallback): number
    on(sigName: "show-notification", callback: WebView_ShowNotificationSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-notification", callback: WebView_ShowNotificationSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-notification", callback: WebView_ShowNotificationSignalCallback): NodeJS.EventEmitter
    emit(sigName: "show-notification", ...args: any[]): void
    connect(sigName: "show-option-menu", callback: WebView_ShowOptionMenuSignalCallback): number
    on(sigName: "show-option-menu", callback: WebView_ShowOptionMenuSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-option-menu", callback: WebView_ShowOptionMenuSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-option-menu", callback: WebView_ShowOptionMenuSignalCallback): NodeJS.EventEmitter
    emit(sigName: "show-option-menu", event: Gdk.Event, rectangle: Gdk.Rectangle, ...args: any[]): void
    connect(sigName: "submit-form", callback: WebView_SubmitFormSignalCallback): number
    on(sigName: "submit-form", callback: WebView_SubmitFormSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "submit-form", callback: WebView_SubmitFormSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "submit-form", callback: WebView_SubmitFormSignalCallback): NodeJS.EventEmitter
    emit(sigName: "submit-form", ...args: any[]): void
    connect(sigName: "user-message-received", callback: WebView_UserMessageReceivedSignalCallback): number
    on(sigName: "user-message-received", callback: WebView_UserMessageReceivedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "user-message-received", callback: WebView_UserMessageReceivedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "user-message-received", callback: WebView_UserMessageReceivedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "user-message-received", ...args: any[]): void
    connect(sigName: "web-process-crashed", callback: WebView_WebProcessCrashedSignalCallback): number
    on(sigName: "web-process-crashed", callback: WebView_WebProcessCrashedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "web-process-crashed", callback: WebView_WebProcessCrashedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "web-process-crashed", callback: WebView_WebProcessCrashedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "web-process-crashed", ...args: any[]): void
    connect(sigName: "web-process-terminated", callback: WebView_WebProcessTerminatedSignalCallback): number
    on(sigName: "web-process-terminated", callback: WebView_WebProcessTerminatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "web-process-terminated", callback: WebView_WebProcessTerminatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "web-process-terminated", callback: WebView_WebProcessTerminatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "web-process-terminated", ...args: any[]): void

    // Class property signals of WebKit2-5.0.WebKit2.WebView

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
    connect(sigName: "notify::is-ephemeral", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-ephemeral", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-ephemeral", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-ephemeral", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-ephemeral", ...args: any[]): void
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
}

class WebView extends WebViewBase {

    // Own properties of WebKit2-5.0.WebKit2.WebView

    static name: string
    static $gtype: GObject.GType<WebView>

    // Constructors of WebKit2-5.0.WebKit2.WebView

    constructor(config?: WebView_ConstructProps) 
    /**
     * Creates a new #WebKitWebView with the default #WebKitWebContext and
     * no #WebKitUserContentManager associated with it.
     * See also webkit_web_view_new_with_context(),
     * webkit_web_view_new_with_user_content_manager(), and
     * webkit_web_view_new_with_settings().
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #WebKitWebView with the default #WebKitWebContext and
     * no #WebKitUserContentManager associated with it.
     * See also webkit_web_view_new_with_context(),
     * webkit_web_view_new_with_user_content_manager(), and
     * webkit_web_view_new_with_settings().
     * @constructor 
     */
    static new(): WebView
    /**
     * Creates a new #WebKitWebView with the given #WebKitWebContext and
     * no #WebKitUserContentManager associated with it.
     * See also webkit_web_view_new_with_user_content_manager() and
     * webkit_web_view_new_with_settings().
     * @constructor 
     * @param context the #WebKitWebContext to be used by the #WebKitWebView
     */
    static newWithContext(context: WebContext): WebView
    /**
     * Creates a new #WebKitWebView sharing the same web process with `web_view`.
     * This method doesn't have any effect when %WEBKIT_PROCESS_MODEL_SHARED_SECONDARY_PROCESS
     * process model is used, because a single web process is shared for all the web views in the
     * same #WebKitWebContext. When using %WEBKIT_PROCESS_MODEL_MULTIPLE_SECONDARY_PROCESSES process model,
     * this method should always be used when creating the #WebKitWebView in the #WebKitWebView::create signal.
     * You can also use this method to implement other process models based on %WEBKIT_PROCESS_MODEL_MULTIPLE_SECONDARY_PROCESSES,
     * like for example, sharing the same web process for all the views in the same security domain.
     * 
     * The newly created #WebKitWebView will also have the same #WebKitUserContentManager,
     * #WebKitSettings, and #WebKitWebsitePolicies as `web_view`.
     * @constructor 
     * @param webView the related #WebKitWebView
     */
    static newWithRelatedView(webView: WebView): WebView
    /**
     * Creates a new #WebKitWebView with the given #WebKitSettings.
     * See also webkit_web_view_new_with_context(), and
     * webkit_web_view_new_with_user_content_manager().
     * @constructor 
     * @param settings a #WebKitSettings
     */
    static newWithSettings(settings: Settings): WebView
    /**
     * Creates a new #WebKitWebView with the given #WebKitUserContentManager.
     * The content loaded in the view may be affected by the content injected
     * in the view by the user content manager.
     * @constructor 
     * @param userContentManager a #WebKitUserContentManager.
     */
    static newWithUserContentManager(userContentManager: UserContentManager): WebView
    _init(config?: WebView_ConstructProps): void
}

interface WebViewBase_ConstructProps extends Gtk.Accessible_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.ConstraintTarget_ConstructProps, Gtk.Widget_ConstructProps {
}

interface WebViewBase extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own fields of WebKit2-5.0.WebKit2.WebViewBase

    parentInstance: Gtk.Widget

    // Class property signals of WebKit2-5.0.WebKit2.WebViewBase

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
}

class WebViewBase extends Gtk.Widget {

    // Own properties of WebKit2-5.0.WebKit2.WebViewBase

    static name: string
    static $gtype: GObject.GType<WebViewBase>

    // Constructors of WebKit2-5.0.WebKit2.WebViewBase

    constructor(config?: WebViewBase_ConstructProps) 
    _init(config?: WebViewBase_ConstructProps): void
}

interface WebsiteDataAccessPermissionRequest_ConstructProps extends PermissionRequest_ConstructProps, GObject.Object_ConstructProps {
}

interface WebsiteDataAccessPermissionRequest extends PermissionRequest {

    // Own fields of WebKit2-5.0.WebKit2.WebsiteDataAccessPermissionRequest

    parent: GObject.Object

    // Owm methods of WebKit2-5.0.WebKit2.WebsiteDataAccessPermissionRequest

    /**
     * Get the current domain being browsed.
     */
    getCurrentDomain(): string
    /**
     * Get the domain requesting permission to access its cookies while browsing the current domain.
     */
    getRequestingDomain(): string

    // Class property signals of WebKit2-5.0.WebKit2.WebsiteDataAccessPermissionRequest

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class WebsiteDataAccessPermissionRequest extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.WebsiteDataAccessPermissionRequest

    static name: string
    static $gtype: GObject.GType<WebsiteDataAccessPermissionRequest>

    // Constructors of WebKit2-5.0.WebKit2.WebsiteDataAccessPermissionRequest

    constructor(config?: WebsiteDataAccessPermissionRequest_ConstructProps) 
    _init(config?: WebsiteDataAccessPermissionRequest_ConstructProps): void
}

interface WebsiteDataManager_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of WebKit2-5.0.WebKit2.WebsiteDataManager

    /**
     * The base directory for Website cache. This is used as a base directory
     * for any Website cache when no specific cache directory has been provided.
     */
    baseCacheDirectory?: string | null
    /**
     * The base directory for Website data. This is used as a base directory
     * for any Website data when no specific data directory has been provided.
     */
    baseDataDirectory?: string | null
    /**
     * The directory where HTTP disk cache will be stored.
     */
    diskCacheDirectory?: string | null
    /**
     * The directory where DOM cache will be stored.
     */
    domCacheDirectory?: string | null
    /**
     * The directory where the HTTP Strict-Transport-Security (HSTS) cache will be stored.
     */
    hstsCacheDirectory?: string | null
    /**
     * The directory where IndexedDB databases will be stored.
     */
    indexeddbDirectory?: string | null
    /**
     * Whether the #WebKitWebsiteDataManager is ephemeral. An ephemeral #WebKitWebsiteDataManager
     * handles all websites data as non-persistent, and nothing will be written to the client
     * storage. Note that if you create an ephemeral #WebKitWebsiteDataManager all other construction
     * parameters to configure data directories will be ignored.
     */
    isEphemeral?: boolean | null
    /**
     * The directory where Intelligent Tracking Prevention (ITP) data will be stored.
     */
    itpDirectory?: string | null
    /**
     * The directory where local storage data will be stored.
     */
    localStorageDirectory?: string | null
    /**
     * The directory where offline web application cache will be stored.
     */
    offlineApplicationCacheDirectory?: string | null
    /**
     * The directory where service workers registrations will be stored.
     */
    serviceWorkerRegistrationsDirectory?: string | null
    /**
     * The directory where WebSQL databases will be stored.
     */
    websqlDirectory?: string | null
}

interface WebsiteDataManager {

    // Own properties of WebKit2-5.0.WebKit2.WebsiteDataManager

    /**
     * The base directory for Website cache. This is used as a base directory
     * for any Website cache when no specific cache directory has been provided.
     */
    readonly baseCacheDirectory: string
    /**
     * The base directory for Website data. This is used as a base directory
     * for any Website data when no specific data directory has been provided.
     */
    readonly baseDataDirectory: string
    /**
     * The directory where HTTP disk cache will be stored.
     */
    readonly diskCacheDirectory: string
    /**
     * The directory where DOM cache will be stored.
     */
    readonly domCacheDirectory: string
    /**
     * The directory where the HTTP Strict-Transport-Security (HSTS) cache will be stored.
     */
    readonly hstsCacheDirectory: string
    /**
     * The directory where IndexedDB databases will be stored.
     */
    readonly indexeddbDirectory: string
    /**
     * Whether the #WebKitWebsiteDataManager is ephemeral. An ephemeral #WebKitWebsiteDataManager
     * handles all websites data as non-persistent, and nothing will be written to the client
     * storage. Note that if you create an ephemeral #WebKitWebsiteDataManager all other construction
     * parameters to configure data directories will be ignored.
     */
    readonly isEphemeral: boolean
    /**
     * The directory where Intelligent Tracking Prevention (ITP) data will be stored.
     */
    readonly itpDirectory: string
    /**
     * The directory where local storage data will be stored.
     */
    readonly localStorageDirectory: string
    /**
     * The directory where offline web application cache will be stored.
     */
    readonly offlineApplicationCacheDirectory: string
    /**
     * The directory where service workers registrations will be stored.
     */
    readonly serviceWorkerRegistrationsDirectory: string
    /**
     * The directory where WebSQL databases will be stored.
     */
    readonly websqlDirectory: string

    // Own fields of WebKit2-5.0.WebKit2.WebsiteDataManager

    parent: GObject.Object
    priv: WebsiteDataManagerPrivate

    // Owm methods of WebKit2-5.0.WebKit2.WebsiteDataManager

    /**
     * Asynchronously clear the website data of the given `types` modified in the past `timespan`.
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
     */
    fetchFinish(result: Gio.AsyncResult): WebsiteData[]
    /**
     * Get the #WebKitWebsiteDataManager:base-cache-directory property.
     */
    getBaseCacheDirectory(): string | null
    /**
     * Get the #WebKitWebsiteDataManager:base-data-directory property.
     */
    getBaseDataDirectory(): string | null
    /**
     * Get the #WebKitCookieManager of `manager`.
     */
    getCookieManager(): CookieManager
    /**
     * Get the #WebKitWebsiteDataManager:disk-cache-directory property.
     */
    getDiskCacheDirectory(): string | null
    /**
     * Get the #WebKitWebsiteDataManager:dom-cache-directory property.
     */
    getDomCacheDirectory(): string | null
    /**
     * Get the #WebKitWebsiteDataManager:hsts-cache-directory property.
     */
    getHstsCacheDirectory(): string | null
    /**
     * Get the #WebKitWebsiteDataManager:indexeddb-directory property.
     */
    getIndexeddbDirectory(): string | null
    /**
     * Get the #WebKitWebsiteDataManager:itp-directory property.
     */
    getItpDirectory(): string | null
    /**
     * Get whether Intelligent Tracking Prevention (ITP) is enabled or not.
     */
    getItpEnabled(): boolean
    /**
     * Asynchronously get the list of #WebKitITPThirdParty seen for `manager`. Every #WebKitITPThirdParty
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
     */
    getItpSummaryFinish(result: Gio.AsyncResult): ITPThirdParty[]
    /**
     * Get the #WebKitWebsiteDataManager:local-storage-directory property.
     */
    getLocalStorageDirectory(): string | null
    /**
     * Get the #WebKitWebsiteDataManager:offline-application-cache-directory property.
     */
    getOfflineApplicationCacheDirectory(): string | null
    /**
     * Get whether persistent credential storage is enabled or not.
     * See also webkit_website_data_manager_set_persistent_credential_storage_enabled().
     */
    getPersistentCredentialStorageEnabled(): boolean
    /**
     * Get the #WebKitWebsiteDataManager:service-worker-registrations-directory property.
     */
    getServiceWorkerRegistrationsDirectory(): string | null
    /**
     * Get the TLS errors policy of `manager`
     */
    getTlsErrorsPolicy(): TLSErrorsPolicy
    /**
     * Get the #WebKitWebsiteDataManager:websql-directory property.
     */
    getWebsqlDirectory(): string | null
    /**
     * Asynchronously removes the website data of the for the given `types` for websites in the given `website_data` list.
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
     */
    removeFinish(result: Gio.AsyncResult): boolean
    /**
     * Enable or disable Intelligent Tracking Prevention (ITP). When ITP is enabled resource load statistics
     * are collected and used to decide whether to allow or block third-party cookies and prevent user tracking.
     * Note that while ITP is enabled the accept policy %WEBKIT_COOKIE_POLICY_ACCEPT_NO_THIRD_PARTY is ignored and
     * %WEBKIT_COOKIE_POLICY_ACCEPT_ALWAYS is used instead. See also webkit_cookie_manager_set_accept_policy().
     * @param enabled value to set
     */
    setItpEnabled(enabled: boolean): void
    /**
     * Set the network proxy settings to be used by connections started in `manager` session.
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
    setNetworkProxySettings(proxyMode: NetworkProxyMode, proxySettings: NetworkProxySettings | null): void
    /**
     * Enable or disable persistent credential storage. When enabled, which is the default for
     * non-ephemeral sessions, the network process will try to read and write HTTP authentiacation
     * credentials from persistent storage.
     * @param enabled value to set
     */
    setPersistentCredentialStorageEnabled(enabled: boolean): void
    /**
     * Set the TLS errors policy of `manager` as `policy`
     * @param policy a #WebKitTLSErrorsPolicy
     */
    setTlsErrorsPolicy(policy: TLSErrorsPolicy): void

    // Class property signals of WebKit2-5.0.WebKit2.WebsiteDataManager

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
    connect(sigName: "notify::disk-cache-directory", callback: (...args: any[]) => void): number
    on(sigName: "notify::disk-cache-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::disk-cache-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::disk-cache-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::disk-cache-directory", ...args: any[]): void
    connect(sigName: "notify::dom-cache-directory", callback: (...args: any[]) => void): number
    on(sigName: "notify::dom-cache-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dom-cache-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dom-cache-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dom-cache-directory", ...args: any[]): void
    connect(sigName: "notify::hsts-cache-directory", callback: (...args: any[]) => void): number
    on(sigName: "notify::hsts-cache-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hsts-cache-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hsts-cache-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hsts-cache-directory", ...args: any[]): void
    connect(sigName: "notify::indexeddb-directory", callback: (...args: any[]) => void): number
    on(sigName: "notify::indexeddb-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::indexeddb-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::indexeddb-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::indexeddb-directory", ...args: any[]): void
    connect(sigName: "notify::is-ephemeral", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-ephemeral", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-ephemeral", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-ephemeral", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-ephemeral", ...args: any[]): void
    connect(sigName: "notify::itp-directory", callback: (...args: any[]) => void): number
    on(sigName: "notify::itp-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::itp-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::itp-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::itp-directory", ...args: any[]): void
    connect(sigName: "notify::local-storage-directory", callback: (...args: any[]) => void): number
    on(sigName: "notify::local-storage-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::local-storage-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::local-storage-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::local-storage-directory", ...args: any[]): void
    connect(sigName: "notify::offline-application-cache-directory", callback: (...args: any[]) => void): number
    on(sigName: "notify::offline-application-cache-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offline-application-cache-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offline-application-cache-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offline-application-cache-directory", ...args: any[]): void
    connect(sigName: "notify::service-worker-registrations-directory", callback: (...args: any[]) => void): number
    on(sigName: "notify::service-worker-registrations-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service-worker-registrations-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service-worker-registrations-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service-worker-registrations-directory", ...args: any[]): void
    connect(sigName: "notify::websql-directory", callback: (...args: any[]) => void): number
    on(sigName: "notify::websql-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::websql-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::websql-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::websql-directory", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class WebsiteDataManager extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.WebsiteDataManager

    static name: string
    static $gtype: GObject.GType<WebsiteDataManager>

    // Constructors of WebKit2-5.0.WebKit2.WebsiteDataManager

    constructor(config?: WebsiteDataManager_ConstructProps) 
    /**
     * Creates an ephemeral #WebKitWebsiteDataManager. See #WebKitWebsiteDataManager:is-ephemeral for more details.
     * @constructor 
     */
    static newEphemeral(): WebsiteDataManager
    _init(config?: WebsiteDataManager_ConstructProps): void
    /**
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
    static setMemoryPressureSettings(settings: MemoryPressureSettings): void
}

interface WebsitePolicies_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of WebKit2-5.0.WebKit2.WebsitePolicies

    /**
     * The #WebKitAutoplayPolicy of #WebKitWebsitePolicies.
     */
    autoplay?: AutoplayPolicy | null
}

interface WebsitePolicies {

    // Own properties of WebKit2-5.0.WebKit2.WebsitePolicies

    /**
     * The #WebKitAutoplayPolicy of #WebKitWebsitePolicies.
     */
    readonly autoplay: AutoplayPolicy

    // Own fields of WebKit2-5.0.WebKit2.WebsitePolicies

    parent: GObject.Object
    priv: WebsitePoliciesPrivate

    // Owm methods of WebKit2-5.0.WebKit2.WebsitePolicies

    /**
     * Get the #WebKitWebsitePolicies:autoplay property.
     */
    getAutoplayPolicy(): AutoplayPolicy

    // Class property signals of WebKit2-5.0.WebKit2.WebsitePolicies

    connect(sigName: "notify::autoplay", callback: (...args: any[]) => void): number
    on(sigName: "notify::autoplay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::autoplay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::autoplay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::autoplay", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class WebsitePolicies extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.WebsitePolicies

    static name: string
    static $gtype: GObject.GType<WebsitePolicies>

    // Constructors of WebKit2-5.0.WebKit2.WebsitePolicies

    constructor(config?: WebsitePolicies_ConstructProps) 
    /**
     * Create a new #WebKitWebsitePolicies
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #WebKitWebsitePolicies
     * @constructor 
     */
    static new(): WebsitePolicies
    _init(config?: WebsitePolicies_ConstructProps): void
}

interface WindowProperties_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of WebKit2-5.0.WebKit2.WindowProperties

    fullscreen?: boolean | null
    geometry?: Gdk.Rectangle | null
    locationbarVisible?: boolean | null
    menubarVisible?: boolean | null
    resizable?: boolean | null
    scrollbarsVisible?: boolean | null
    statusbarVisible?: boolean | null
    toolbarVisible?: boolean | null
}

interface WindowProperties {

    // Own properties of WebKit2-5.0.WebKit2.WindowProperties

    readonly fullscreen: boolean
    readonly geometry: Gdk.Rectangle
    readonly locationbarVisible: boolean
    readonly menubarVisible: boolean
    readonly resizable: boolean
    readonly scrollbarsVisible: boolean
    readonly statusbarVisible: boolean
    readonly toolbarVisible: boolean

    // Own fields of WebKit2-5.0.WebKit2.WindowProperties

    parent: GObject.Object

    // Owm methods of WebKit2-5.0.WebKit2.WindowProperties

    /**
     * Get whether the window should be shown in fullscreen state or not.
     */
    getFullscreen(): boolean
    /**
     * Get the geometry the window should have on the screen when shown.
     */
    getGeometry(): /* geometry */ Gdk.Rectangle
    /**
     * Get whether the window should have the locationbar visible or not.
     */
    getLocationbarVisible(): boolean
    /**
     * Get whether the window should have the menubar visible or not.
     */
    getMenubarVisible(): boolean
    /**
     * Get whether the window should be resizable by the user or not.
     */
    getResizable(): boolean
    /**
     * Get whether the window should have the scrollbars visible or not.
     */
    getScrollbarsVisible(): boolean
    /**
     * Get whether the window should have the statusbar visible or not.
     */
    getStatusbarVisible(): boolean
    /**
     * Get whether the window should have the toolbar visible or not.
     */
    getToolbarVisible(): boolean

    // Class property signals of WebKit2-5.0.WebKit2.WindowProperties

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class WindowProperties extends GObject.Object {

    // Own properties of WebKit2-5.0.WebKit2.WindowProperties

    static name: string
    static $gtype: GObject.GType<WindowProperties>

    // Constructors of WebKit2-5.0.WebKit2.WindowProperties

    constructor(config?: WindowProperties_ConstructProps) 
    _init(config?: WindowProperties_ConstructProps): void
}

interface ApplicationInfo {

    // Owm methods of WebKit2-5.0.WebKit2.ApplicationInfo

    /**
     * Get the name of the application. If webkit_application_info_set_name() hasn't been
     * called with a valid name, this returns g_get_prgname().
     */
    getName(): string
    /**
     * Get the application version previously set with webkit_application_info_set_version().
     */
    getVersion(): [ /* major */ number, /* minor */ number, /* micro */ number ]
    /**
     * Atomically increments the reference count of `info` by one. This
     * function is MT-safe and may be called from any thread.
     */
    ref(): ApplicationInfo
    /**
     * Set the name of the application. If not provided, or %NULL is passed,
     * g_get_prgname() will be used.
     * @param name the application name
     */
    setName(name: string): void
    /**
     * Set the application version. If the application doesn't use the format
     * major.minor.micro you can pass 0 as the micro to use major.minor, or pass
     * 0 as both micro and minor to use only major number. Any other format must
     * be converted to major.minor.micro so that it can be used in version comparisons.
     * @param major the major version number
     * @param minor the minor version number
     * @param micro the micro version number
     */
    setVersion(major: number, minor: number, micro: number): void
    /**
     * Atomically decrements the reference count of `info` by one. If the
     * reference count drops to 0, all memory allocated by the #WebKitApplicationInfo is
     * released. This function is MT-safe and may be called from any
     * thread.
     */
    unref(): void
}

class ApplicationInfo {

    // Own properties of WebKit2-5.0.WebKit2.ApplicationInfo

    static name: string

    // Constructors of WebKit2-5.0.WebKit2.ApplicationInfo

    /**
     * Creates a new #WebKitApplicationInfo
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #WebKitApplicationInfo
     * @constructor 
     */
    static new(): ApplicationInfo
}

interface AuthenticationRequestClass {

    // Own fields of WebKit2-5.0.WebKit2.AuthenticationRequestClass

    parentClass: GObject.ObjectClass
}

abstract class AuthenticationRequestClass {

    // Own properties of WebKit2-5.0.WebKit2.AuthenticationRequestClass

    static name: string
}

interface AuthenticationRequestPrivate {
}

class AuthenticationRequestPrivate {

    // Own properties of WebKit2-5.0.WebKit2.AuthenticationRequestPrivate

    static name: string
}

interface AutomationSessionClass {

    // Own fields of WebKit2-5.0.WebKit2.AutomationSessionClass

    parentClass: GObject.ObjectClass
}

abstract class AutomationSessionClass {

    // Own properties of WebKit2-5.0.WebKit2.AutomationSessionClass

    static name: string
}

interface AutomationSessionPrivate {
}

class AutomationSessionPrivate {

    // Own properties of WebKit2-5.0.WebKit2.AutomationSessionPrivate

    static name: string
}

interface BackForwardListClass {

    // Own fields of WebKit2-5.0.WebKit2.BackForwardListClass

    parentClass: GObject.ObjectClass
}

abstract class BackForwardListClass {

    // Own properties of WebKit2-5.0.WebKit2.BackForwardListClass

    static name: string
}

interface BackForwardListItemClass {

    // Own fields of WebKit2-5.0.WebKit2.BackForwardListItemClass

    parentClass: GObject.InitiallyUnownedClass
}

abstract class BackForwardListItemClass {

    // Own properties of WebKit2-5.0.WebKit2.BackForwardListItemClass

    static name: string
}

interface BackForwardListItemPrivate {
}

class BackForwardListItemPrivate {

    // Own properties of WebKit2-5.0.WebKit2.BackForwardListItemPrivate

    static name: string
}

interface BackForwardListPrivate {
}

class BackForwardListPrivate {

    // Own properties of WebKit2-5.0.WebKit2.BackForwardListPrivate

    static name: string
}

interface ColorChooserRequestClass {

    // Own fields of WebKit2-5.0.WebKit2.ColorChooserRequestClass

    parentClass: GObject.ObjectClass
}

abstract class ColorChooserRequestClass {

    // Own properties of WebKit2-5.0.WebKit2.ColorChooserRequestClass

    static name: string
}

interface ColorChooserRequestPrivate {
}

class ColorChooserRequestPrivate {

    // Own properties of WebKit2-5.0.WebKit2.ColorChooserRequestPrivate

    static name: string
}

interface ContextMenuClass {

    // Own fields of WebKit2-5.0.WebKit2.ContextMenuClass

    parentClass: GObject.ObjectClass
}

abstract class ContextMenuClass {

    // Own properties of WebKit2-5.0.WebKit2.ContextMenuClass

    static name: string
}

interface ContextMenuItemClass {

    // Own fields of WebKit2-5.0.WebKit2.ContextMenuItemClass

    parentClass: GObject.InitiallyUnownedClass
}

abstract class ContextMenuItemClass {

    // Own properties of WebKit2-5.0.WebKit2.ContextMenuItemClass

    static name: string
}

interface ContextMenuItemPrivate {
}

class ContextMenuItemPrivate {

    // Own properties of WebKit2-5.0.WebKit2.ContextMenuItemPrivate

    static name: string
}

interface ContextMenuPrivate {
}

class ContextMenuPrivate {

    // Own properties of WebKit2-5.0.WebKit2.ContextMenuPrivate

    static name: string
}

interface CookieManagerClass {

    // Own fields of WebKit2-5.0.WebKit2.CookieManagerClass

    parentClass: GObject.ObjectClass
}

abstract class CookieManagerClass {

    // Own properties of WebKit2-5.0.WebKit2.CookieManagerClass

    static name: string
}

interface CookieManagerPrivate {
}

class CookieManagerPrivate {

    // Own properties of WebKit2-5.0.WebKit2.CookieManagerPrivate

    static name: string
}

interface Credential {

    // Owm methods of WebKit2-5.0.WebKit2.Credential

    /**
     * Make a copy of the #WebKitCredential.
     */
    copy(): Credential
    /**
     * Free the #WebKitCredential.
     */
    free(): void
    /**
     * Get the certificate currently held by this #WebKitCredential.
     */
    getCertificate(): Gio.TlsCertificate
    /**
     * Get the password currently held by this #WebKitCredential.
     */
    getPassword(): string
    /**
     * Get the persistence mode currently held by this #WebKitCredential.
     */
    getPersistence(): CredentialPersistence
    /**
     * Get the username currently held by this #WebKitCredential.
     */
    getUsername(): string
    /**
     * Determine whether this credential has a password stored.
     */
    hasPassword(): boolean
}

class Credential {

    // Own properties of WebKit2-5.0.WebKit2.Credential

    static name: string

    // Constructors of WebKit2-5.0.WebKit2.Credential

    /**
     * Create a new credential from the provided username, password and persistence mode.
     * @constructor 
     * @param username The username for the new credential
     * @param password The password for the new credential
     * @param persistence The #WebKitCredentialPersistence of the new credential
     */
    constructor(username: string, password: string, persistence: CredentialPersistence) 
    /**
     * Create a new credential from the provided username, password and persistence mode.
     * @constructor 
     * @param username The username for the new credential
     * @param password The password for the new credential
     * @param persistence The #WebKitCredentialPersistence of the new credential
     */
    static new(username: string, password: string, persistence: CredentialPersistence): Credential
    /**
     * Create a new credential from the `certificate` and persistence mode.
     * Note that %WEBKIT_CREDENTIAL_PERSISTENCE_PERMANENT is not supported for certificate credentials.
     * @constructor 
     * @param certificate The #GTlsCertificate, or %NULL
     * @param persistence The #WebKitCredentialPersistence of the new credential
     */
    static newForCertificate(certificate: Gio.TlsCertificate | null, persistence: CredentialPersistence): Credential
    /**
     * Create a new credential from the provided PIN and persistence mode.
     * Note that %WEBKIT_CREDENTIAL_PERSISTENCE_PERMANENT is not supported for certificate pin credentials.
     * @constructor 
     * @param pin The PIN for the new credential
     * @param persistence The #WebKitCredentialPersistence of the new credential
     */
    static newForCertificatePin(pin: string, persistence: CredentialPersistence): Credential
}

interface DeviceInfoPermissionRequestClass {

    // Own fields of WebKit2-5.0.WebKit2.DeviceInfoPermissionRequestClass

    parentClass: GObject.ObjectClass
}

abstract class DeviceInfoPermissionRequestClass {

    // Own properties of WebKit2-5.0.WebKit2.DeviceInfoPermissionRequestClass

    static name: string
}

interface DeviceInfoPermissionRequestPrivate {
}

class DeviceInfoPermissionRequestPrivate {

    // Own properties of WebKit2-5.0.WebKit2.DeviceInfoPermissionRequestPrivate

    static name: string
}

interface DownloadClass {

    // Own fields of WebKit2-5.0.WebKit2.DownloadClass

    parentClass: GObject.ObjectClass
    decideDestination: (download: Download, suggestedFilename: string) => boolean
}

abstract class DownloadClass {

    // Own properties of WebKit2-5.0.WebKit2.DownloadClass

    static name: string
}

interface DownloadPrivate {
}

class DownloadPrivate {

    // Own properties of WebKit2-5.0.WebKit2.DownloadPrivate

    static name: string
}

interface EditorStateClass {

    // Own fields of WebKit2-5.0.WebKit2.EditorStateClass

    parentClass: GObject.ObjectClass
}

abstract class EditorStateClass {

    // Own properties of WebKit2-5.0.WebKit2.EditorStateClass

    static name: string
}

interface EditorStatePrivate {
}

class EditorStatePrivate {

    // Own properties of WebKit2-5.0.WebKit2.EditorStatePrivate

    static name: string
}

interface FaviconDatabaseClass {

    // Own fields of WebKit2-5.0.WebKit2.FaviconDatabaseClass

    parentClass: GObject.ObjectClass
}

abstract class FaviconDatabaseClass {

    // Own properties of WebKit2-5.0.WebKit2.FaviconDatabaseClass

    static name: string
}

interface FaviconDatabasePrivate {
}

class FaviconDatabasePrivate {

    // Own properties of WebKit2-5.0.WebKit2.FaviconDatabasePrivate

    static name: string
}

interface FileChooserRequestClass {

    // Own fields of WebKit2-5.0.WebKit2.FileChooserRequestClass

    parentClass: GObject.ObjectClass
}

abstract class FileChooserRequestClass {

    // Own properties of WebKit2-5.0.WebKit2.FileChooserRequestClass

    static name: string
}

interface FileChooserRequestPrivate {
}

class FileChooserRequestPrivate {

    // Own properties of WebKit2-5.0.WebKit2.FileChooserRequestPrivate

    static name: string
}

interface FindControllerClass {

    // Own fields of WebKit2-5.0.WebKit2.FindControllerClass

    parentClass: GObject.ObjectClass
}

abstract class FindControllerClass {

    // Own properties of WebKit2-5.0.WebKit2.FindControllerClass

    static name: string
}

interface FindControllerPrivate {
}

class FindControllerPrivate {

    // Own properties of WebKit2-5.0.WebKit2.FindControllerPrivate

    static name: string
}

interface FormSubmissionRequestClass {

    // Own fields of WebKit2-5.0.WebKit2.FormSubmissionRequestClass

    parentClass: GObject.ObjectClass
}

abstract class FormSubmissionRequestClass {

    // Own properties of WebKit2-5.0.WebKit2.FormSubmissionRequestClass

    static name: string
}

interface FormSubmissionRequestPrivate {
}

class FormSubmissionRequestPrivate {

    // Own properties of WebKit2-5.0.WebKit2.FormSubmissionRequestPrivate

    static name: string
}

interface GeolocationManagerClass {

    // Own fields of WebKit2-5.0.WebKit2.GeolocationManagerClass

    parentClass: GObject.ObjectClass
}

abstract class GeolocationManagerClass {

    // Own properties of WebKit2-5.0.WebKit2.GeolocationManagerClass

    static name: string
}

interface GeolocationManagerPrivate {
}

class GeolocationManagerPrivate {

    // Own properties of WebKit2-5.0.WebKit2.GeolocationManagerPrivate

    static name: string
}

interface GeolocationPermissionRequestClass {

    // Own fields of WebKit2-5.0.WebKit2.GeolocationPermissionRequestClass

    parentClass: GObject.ObjectClass
}

abstract class GeolocationPermissionRequestClass {

    // Own properties of WebKit2-5.0.WebKit2.GeolocationPermissionRequestClass

    static name: string
}

interface GeolocationPermissionRequestPrivate {
}

class GeolocationPermissionRequestPrivate {

    // Own properties of WebKit2-5.0.WebKit2.GeolocationPermissionRequestPrivate

    static name: string
}

interface GeolocationPosition {

    // Owm methods of WebKit2-5.0.WebKit2.GeolocationPosition

    /**
     * Make a copy of the #WebKitGeolocationPosition
     */
    copy(): GeolocationPosition
    /**
     * Free the #WebKitGeolocationPosition
     */
    free(): void
    /**
     * Set the `position` altitude
     * @param altitude altitude in meters
     */
    setAltitude(altitude: number): void
    /**
     * Set the accuracy of `position` altitude
     * @param altitudeAccuracy accuracy of position altitude in meters
     */
    setAltitudeAccuracy(altitudeAccuracy: number): void
    /**
     * Set the `position` heading, as a positive angle between the direction of movement and the North
     * direction, in clockwise direction.
     * @param heading heading in degrees
     */
    setHeading(heading: number): void
    /**
     * Set the `position` speed
     * @param speed speed in meters per second
     */
    setSpeed(speed: number): void
    /**
     * Set the `position` timestamp. By default it's the time when the `position` was created.
     * @param timestamp timestamp in seconds since the epoch, or 0 to use current time
     */
    setTimestamp(timestamp: number): void
}

/**
 * WebKitGeolocationPosition is an opaque struct used to provide position updates to a
 * #WebKitGeolocationManager using webkit_geolocation_manager_update_position().
 * @record 
 */
class GeolocationPosition {

    // Own properties of WebKit2-5.0.WebKit2.GeolocationPosition

    static name: string

    // Constructors of WebKit2-5.0.WebKit2.GeolocationPosition

    /**
     * Create a new #WebKitGeolocationPosition
     * @constructor 
     * @param latitude a valid latitude in degrees
     * @param longitude a valid longitude in degrees
     * @param accuracy accuracy of location in meters
     */
    constructor(latitude: number, longitude: number, accuracy: number) 
    /**
     * Create a new #WebKitGeolocationPosition
     * @constructor 
     * @param latitude a valid latitude in degrees
     * @param longitude a valid longitude in degrees
     * @param accuracy accuracy of location in meters
     */
    static new(latitude: number, longitude: number, accuracy: number): GeolocationPosition
}

interface HitTestResultClass {

    // Own fields of WebKit2-5.0.WebKit2.HitTestResultClass

    parentClass: GObject.ObjectClass
}

abstract class HitTestResultClass {

    // Own properties of WebKit2-5.0.WebKit2.HitTestResultClass

    static name: string
}

interface HitTestResultPrivate {
}

class HitTestResultPrivate {

    // Own properties of WebKit2-5.0.WebKit2.HitTestResultPrivate

    static name: string
}

interface ITPFirstParty {

    // Owm methods of WebKit2-5.0.WebKit2.ITPFirstParty

    /**
     * Get the domain name of `itp_first_party`
     */
    getDomain(): string
    /**
     * Get the last time a #WebKitITPThirdParty has been seen under `itp_first_party`.
     * Each `WebKitITPFirstParty` is created by webkit_itp_third_party_get_first_parties() and
     * therefore corresponds to exactly one #WebKitITPThirdParty.
     */
    getLastUpdateTime(): GLib.DateTime
    /**
     * Get whether `itp_first_party` has granted website data access to its #WebKitITPThirdParty.
     * Each `WebKitITPFirstParty` is created by webkit_itp_third_party_get_first_parties() and
     * therefore corresponds to exactly one #WebKitITPThirdParty.
     */
    getWebsiteDataAccessAllowed(): boolean
    /**
     * Atomically increments the reference count of `itp_first_party` by one.
     * This function is MT-safe and may be called from any thread.
     */
    ref(): ITPFirstParty
    /**
     * Atomically decrements the reference count of `itp_first_party` by one.
     * If the reference count drops to 0, all memory allocated by
     * #WebKitITPFirstParty is released. This function is MT-safe and may be
     * called from any thread.
     */
    unref(): void
}

class ITPFirstParty {

    // Own properties of WebKit2-5.0.WebKit2.ITPFirstParty

    static name: string
}

interface ITPThirdParty {

    // Owm methods of WebKit2-5.0.WebKit2.ITPThirdParty

    /**
     * Get the domain name of `itp_third_party`
     */
    getDomain(): string
    /**
     * Get the list of #WebKitITPFirstParty under which `itp_third_party` has been seen.
     */
    getFirstParties(): ITPFirstParty[]
    /**
     * Atomically increments the reference count of `itp_third_party` by one.
     * This function is MT-safe and may be called from any thread.
     */
    ref(): ITPThirdParty
    /**
     * Atomically decrements the reference count of `itp_third_party` by one.
     * If the reference count drops to 0, all memory allocated by
     * #WebKitITPThirdParty is released. This function is MT-safe and may be
     * called from any thread.
     */
    unref(): void
}

class ITPThirdParty {

    // Own properties of WebKit2-5.0.WebKit2.ITPThirdParty

    static name: string
}

interface InputMethodContextClass {

    // Own fields of WebKit2-5.0.WebKit2.InputMethodContextClass

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

    // Own properties of WebKit2-5.0.WebKit2.InputMethodContextClass

    static name: string
}

interface InputMethodContextPrivate {
}

class InputMethodContextPrivate {

    // Own properties of WebKit2-5.0.WebKit2.InputMethodContextPrivate

    static name: string
}

interface InputMethodUnderline {

    // Owm methods of WebKit2-5.0.WebKit2.InputMethodUnderline

    /**
     * Make a copy of the #WebKitInputMethodUnderline.
     */
    copy(): InputMethodUnderline
    /**
     * Free the #WebKitInputMethodUnderline.
     */
    free(): void
    /**
     * Set the color of the underline. If `rgba` is %NULL the foreground text color will be used
     * for the underline too.
     * @param rgba a #GdkRGBA or %NULL
     */
    setColor(rgba: Gdk.RGBA | null): void
}

class InputMethodUnderline {

    // Own properties of WebKit2-5.0.WebKit2.InputMethodUnderline

    static name: string

    // Constructors of WebKit2-5.0.WebKit2.InputMethodUnderline

    /**
     * Create a new #WebKitInputMethodUnderline for the given range in preedit string
     * @constructor 
     * @param startOffset the start offset in preedit string
     * @param endOffset the end offset in preedit string
     */
    constructor(startOffset: number, endOffset: number) 
    /**
     * Create a new #WebKitInputMethodUnderline for the given range in preedit string
     * @constructor 
     * @param startOffset the start offset in preedit string
     * @param endOffset the end offset in preedit string
     */
    static new(startOffset: number, endOffset: number): InputMethodUnderline
}

interface InstallMissingMediaPluginsPermissionRequestClass {

    // Own fields of WebKit2-5.0.WebKit2.InstallMissingMediaPluginsPermissionRequestClass

    parentClass: GObject.ObjectClass
}

abstract class InstallMissingMediaPluginsPermissionRequestClass {

    // Own properties of WebKit2-5.0.WebKit2.InstallMissingMediaPluginsPermissionRequestClass

    static name: string
}

interface InstallMissingMediaPluginsPermissionRequestPrivate {
}

class InstallMissingMediaPluginsPermissionRequestPrivate {

    // Own properties of WebKit2-5.0.WebKit2.InstallMissingMediaPluginsPermissionRequestPrivate

    static name: string
}

interface JavascriptResult {

    // Owm methods of WebKit2-5.0.WebKit2.JavascriptResult

    /**
     * Get the #JSCValue of `js_result`.
     */
    getJsValue(): JavaScriptCore.Value
    /**
     * Atomically increments the reference count of `js_result` by one. This
     * function is MT-safe and may be called from any thread.
     */
    ref(): JavascriptResult
    /**
     * Atomically decrements the reference count of `js_result` by one. If the
     * reference count drops to 0, all memory allocated by the #WebKitJavascriptResult is
     * released. This function is MT-safe and may be called from any
     * thread.
     */
    unref(): void
}

class JavascriptResult {

    // Own properties of WebKit2-5.0.WebKit2.JavascriptResult

    static name: string
}

interface MediaKeySystemPermissionRequestClass {

    // Own fields of WebKit2-5.0.WebKit2.MediaKeySystemPermissionRequestClass

    parentClass: GObject.ObjectClass
}

abstract class MediaKeySystemPermissionRequestClass {

    // Own properties of WebKit2-5.0.WebKit2.MediaKeySystemPermissionRequestClass

    static name: string
}

interface MediaKeySystemPermissionRequestPrivate {
}

class MediaKeySystemPermissionRequestPrivate {

    // Own properties of WebKit2-5.0.WebKit2.MediaKeySystemPermissionRequestPrivate

    static name: string
}

interface MemoryPressureSettings {

    // Owm methods of WebKit2-5.0.WebKit2.MemoryPressureSettings

    /**
     * Make a copy of `settings`.
     */
    copy(): MemoryPressureSettings
    /**
     * Free the #WebKitMemoryPressureSettings.
     */
    free(): void
    getConservativeThreshold(): number
    getKillThreshold(): number
    getMemoryLimit(): number
    getPollInterval(): number
    getStrictThreshold(): number
    /**
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

class MemoryPressureSettings {

    // Own properties of WebKit2-5.0.WebKit2.MemoryPressureSettings

    static name: string

    // Constructors of WebKit2-5.0.WebKit2.MemoryPressureSettings

    /**
     * Create a new #WebKitMemoryPressureSettings with the default values.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #WebKitMemoryPressureSettings with the default values.
     * @constructor 
     */
    static new(): MemoryPressureSettings
}

interface MimeInfo {

    // Owm methods of WebKit2-5.0.WebKit2.MimeInfo

    getDescription(): string
    /**
     * Get the list of file extensions associated to the
     * MIME type of `info`
     */
    getExtensions(): string[]
    getMimeType(): string
    /**
     * Atomically increments the reference count of `info` by one. This
     * function is MT-safe and may be called from any thread.
     */
    ref(): MimeInfo
    /**
     * Atomically decrements the reference count of `info` by one. If the
     * reference count drops to 0, all memory allocated by the #WebKitMimeInfo is
     * released. This function is MT-safe and may be called from any
     * thread.
     */
    unref(): void
}

class MimeInfo {

    // Own properties of WebKit2-5.0.WebKit2.MimeInfo

    static name: string
}

interface NavigationAction {

    // Owm methods of WebKit2-5.0.WebKit2.NavigationAction

    /**
     * Make a copy of `navigation`.
     */
    copy(): NavigationAction
    /**
     * Free the #WebKitNavigationAction
     */
    free(): void
    /**
     * Return a bitmask of #GdkModifierType values describing the modifier keys that were in effect
     * when the navigation was requested
     */
    getModifiers(): number
    /**
     * Return the number of the mouse button that triggered the navigation, or 0 if
     * the navigation was not started by a mouse event.
     */
    getMouseButton(): number
    /**
     * Return the type of action that triggered the navigation.
     */
    getNavigationType(): NavigationType
    /**
     * Return the #WebKitURIRequest associated with the navigation action.
     * Modifications to the returned object are <emphasis>not</emphasis> taken
     * into account when the request is sent over the network, and is intended
     * only to aid in evaluating whether a navigation action should be taken or
     * not. To modify requests before they are sent over the network the
     * #WebKitPage::send-request signal can be used instead.
     */
    getRequest(): URIRequest
    /**
     * Returns whether the `navigation` was redirected.
     */
    isRedirect(): boolean
    /**
     * Return whether the navigation was triggered by a user gesture like a mouse click.
     */
    isUserGesture(): boolean
}

class NavigationAction {

    // Own properties of WebKit2-5.0.WebKit2.NavigationAction

    static name: string
}

interface NavigationPolicyDecisionClass {

    // Own fields of WebKit2-5.0.WebKit2.NavigationPolicyDecisionClass

    parentClass: PolicyDecisionClass
}

abstract class NavigationPolicyDecisionClass {

    // Own properties of WebKit2-5.0.WebKit2.NavigationPolicyDecisionClass

    static name: string
}

interface NavigationPolicyDecisionPrivate {
}

class NavigationPolicyDecisionPrivate {

    // Own properties of WebKit2-5.0.WebKit2.NavigationPolicyDecisionPrivate

    static name: string
}

interface NetworkProxySettings {

    // Owm methods of WebKit2-5.0.WebKit2.NetworkProxySettings

    /**
     * Adds a URI-scheme-specific proxy. URIs whose scheme matches `uri_scheme` will be proxied via `proxy_uri`.
     * As with the default proxy URI, if `proxy_uri` starts with "socks://", it will be treated as referring to
     * all three of the socks5, socks4a, and socks4 proxy types.
     * @param scheme the URI scheme to add a proxy for
     * @param proxyUri the proxy URI to use for `uri_scheme`
     */
    addProxyForScheme(scheme: string, proxyUri: string): void
    /**
     * Make a copy of the #WebKitNetworkProxySettings.
     */
    copy(): NetworkProxySettings
    /**
     * Free the #WebKitNetworkProxySettings.
     */
    free(): void
}

class NetworkProxySettings {

    // Own properties of WebKit2-5.0.WebKit2.NetworkProxySettings

    static name: string

    // Constructors of WebKit2-5.0.WebKit2.NetworkProxySettings

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
     */
    static new(defaultProxyUri: string | null, ignoreHosts: string[] | null): NetworkProxySettings
}

interface NotificationClass {

    // Own fields of WebKit2-5.0.WebKit2.NotificationClass

    parentClass: GObject.ObjectClass
}

abstract class NotificationClass {

    // Own properties of WebKit2-5.0.WebKit2.NotificationClass

    static name: string
}

interface NotificationPermissionRequestClass {

    // Own fields of WebKit2-5.0.WebKit2.NotificationPermissionRequestClass

    parentClass: GObject.ObjectClass
}

abstract class NotificationPermissionRequestClass {

    // Own properties of WebKit2-5.0.WebKit2.NotificationPermissionRequestClass

    static name: string
}

interface NotificationPermissionRequestPrivate {
}

class NotificationPermissionRequestPrivate {

    // Own properties of WebKit2-5.0.WebKit2.NotificationPermissionRequestPrivate

    static name: string
}

interface NotificationPrivate {
}

class NotificationPrivate {

    // Own properties of WebKit2-5.0.WebKit2.NotificationPrivate

    static name: string
}

interface OptionMenuClass {

    // Own fields of WebKit2-5.0.WebKit2.OptionMenuClass

    parentClass: GObject.ObjectClass
}

abstract class OptionMenuClass {

    // Own properties of WebKit2-5.0.WebKit2.OptionMenuClass

    static name: string
}

interface OptionMenuItem {

    // Owm methods of WebKit2-5.0.WebKit2.OptionMenuItem

    /**
     * Make a copy of the #WebKitOptionMenuItem.
     */
    copy(): OptionMenuItem
    /**
     * Free the #WebKitOptionMenuItem.
     */
    free(): void
    /**
     * Get the label of a #WebKitOptionMenuItem.
     */
    getLabel(): string
    /**
     * Get the tooltip of a #WebKitOptionMenuItem.
     */
    getTooltip(): string
    /**
     * Whether a #WebKitOptionMenuItem is enabled.
     */
    isEnabled(): boolean
    /**
     * Whether a #WebKitOptionMenuItem is a group child.
     */
    isGroupChild(): boolean
    /**
     * Whether a #WebKitOptionMenuItem is a group label.
     */
    isGroupLabel(): boolean
    /**
     * Whether a #WebKitOptionMenuItem is the currently selected one.
     */
    isSelected(): boolean
}

class OptionMenuItem {

    // Own properties of WebKit2-5.0.WebKit2.OptionMenuItem

    static name: string
}

interface OptionMenuPrivate {
}

class OptionMenuPrivate {

    // Own properties of WebKit2-5.0.WebKit2.OptionMenuPrivate

    static name: string
}

interface PermissionRequestIface {

    // Own fields of WebKit2-5.0.WebKit2.PermissionRequestIface

    parentInterface: GObject.TypeInterface
    allow: (request: PermissionRequest) => void
    deny: (request: PermissionRequest) => void
}

abstract class PermissionRequestIface {

    // Own properties of WebKit2-5.0.WebKit2.PermissionRequestIface

    static name: string
}

interface PluginClass {

    // Own fields of WebKit2-5.0.WebKit2.PluginClass

    parentClass: GObject.ObjectClass
}

abstract class PluginClass {

    // Own properties of WebKit2-5.0.WebKit2.PluginClass

    static name: string
}

interface PluginPrivate {
}

class PluginPrivate {

    // Own properties of WebKit2-5.0.WebKit2.PluginPrivate

    static name: string
}

interface PointerLockPermissionRequestClass {

    // Own fields of WebKit2-5.0.WebKit2.PointerLockPermissionRequestClass

    parentClass: GObject.ObjectClass
}

abstract class PointerLockPermissionRequestClass {

    // Own properties of WebKit2-5.0.WebKit2.PointerLockPermissionRequestClass

    static name: string
}

interface PointerLockPermissionRequestPrivate {
}

class PointerLockPermissionRequestPrivate {

    // Own properties of WebKit2-5.0.WebKit2.PointerLockPermissionRequestPrivate

    static name: string
}

interface PolicyDecisionClass {

    // Own fields of WebKit2-5.0.WebKit2.PolicyDecisionClass

    parentClass: GObject.ObjectClass
}

abstract class PolicyDecisionClass {

    // Own properties of WebKit2-5.0.WebKit2.PolicyDecisionClass

    static name: string
}

interface PolicyDecisionPrivate {
}

class PolicyDecisionPrivate {

    // Own properties of WebKit2-5.0.WebKit2.PolicyDecisionPrivate

    static name: string
}

interface PrintCustomWidgetClass {

    // Own fields of WebKit2-5.0.WebKit2.PrintCustomWidgetClass

    parentClass: GObject.ObjectClass
    apply: (printCustomWidget: PrintCustomWidget, widget: Gtk.Widget) => void
    update: (printCustomWidget: PrintCustomWidget, widget: Gtk.Widget, pageSetup: Gtk.PageSetup, printSettings: Gtk.PrintSettings) => void
}

abstract class PrintCustomWidgetClass {

    // Own properties of WebKit2-5.0.WebKit2.PrintCustomWidgetClass

    static name: string
}

interface PrintCustomWidgetPrivate {
}

class PrintCustomWidgetPrivate {

    // Own properties of WebKit2-5.0.WebKit2.PrintCustomWidgetPrivate

    static name: string
}

interface PrintOperationClass {

    // Own fields of WebKit2-5.0.WebKit2.PrintOperationClass

    parentClass: GObject.ObjectClass
}

abstract class PrintOperationClass {

    // Own properties of WebKit2-5.0.WebKit2.PrintOperationClass

    static name: string
}

interface PrintOperationPrivate {
}

class PrintOperationPrivate {

    // Own properties of WebKit2-5.0.WebKit2.PrintOperationPrivate

    static name: string
}

interface ResponsePolicyDecisionClass {

    // Own fields of WebKit2-5.0.WebKit2.ResponsePolicyDecisionClass

    parentClass: PolicyDecisionClass
}

abstract class ResponsePolicyDecisionClass {

    // Own properties of WebKit2-5.0.WebKit2.ResponsePolicyDecisionClass

    static name: string
}

interface ResponsePolicyDecisionPrivate {
}

class ResponsePolicyDecisionPrivate {

    // Own properties of WebKit2-5.0.WebKit2.ResponsePolicyDecisionPrivate

    static name: string
}

interface ScriptDialog {

    // Owm methods of WebKit2-5.0.WebKit2.ScriptDialog

    /**
     * Close `dialog`. When handling a #WebKitScriptDialog asynchronously (webkit_script_dialog_ref()
     * was called in #WebKitWebView::script-dialog callback), this function needs to be called to notify
     * that we are done with the script dialog. The dialog will be closed on destruction if this function
     * hasn't been called before.
     */
    close(): void
    /**
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
     */
    getDialogType(): ScriptDialogType
    /**
     * Get the message of a #WebKitScriptDialog.
     */
    getMessage(): string
    /**
     * Get the default text of a #WebKitScriptDialog of type %WEBKIT_SCRIPT_DIALOG_PROMPT.
     * It's an error to use this method with a #WebKitScriptDialog that is not of type
     * %WEBKIT_SCRIPT_DIALOG_PROMPT.
     */
    promptGetDefaultText(): string
    /**
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
     * Atomically increments the reference count of `dialog` by one. This
     * function is MT-safe and may be called from any thread.
     */
    ref(): ScriptDialog
    /**
     * Atomically decrements the reference count of `dialog` by one. If the
     * reference count drops to 0, all memory allocated by the #WebKitScriptdialog is
     * released. This function is MT-safe and may be called from any
     * thread.
     */
    unref(): void
}

class ScriptDialog {

    // Own properties of WebKit2-5.0.WebKit2.ScriptDialog

    static name: string
}

interface SecurityManagerClass {

    // Own fields of WebKit2-5.0.WebKit2.SecurityManagerClass

    parentClass: GObject.ObjectClass
}

abstract class SecurityManagerClass {

    // Own properties of WebKit2-5.0.WebKit2.SecurityManagerClass

    static name: string
}

interface SecurityManagerPrivate {
}

class SecurityManagerPrivate {

    // Own properties of WebKit2-5.0.WebKit2.SecurityManagerPrivate

    static name: string
}

interface SecurityOrigin {

    // Owm methods of WebKit2-5.0.WebKit2.SecurityOrigin

    /**
     * Gets the hostname of `origin`. It is reasonable for this to be %NULL
     * if its protocol does not require a host component.
     */
    getHost(): string | null
    /**
     * Gets the port of `origin`. This function will always return 0 if the
     * port is the default port for the given protocol. For example,
     * http://example.com has the same security origin as
     * http://example.com:80, and this function will return 0 for a
     * #WebKitSecurityOrigin constructed from either URI.
     */
    getPort(): number
    /**
     * Gets the protocol of `origin`.
     */
    getProtocol(): string | null
    /**
     * This function returns %FALSE. #WebKitSecurityOrigin is now a simple
     * wrapper around a &lt;protocol, host, port&gt; triplet, and no longer
     * represents an origin as defined by web standards that may be opaque.
     */
    isOpaque(): boolean
    /**
     * Atomically increments the reference count of `origin` by one.
     * This function is MT-safe and may be called from any thread.
     */
    ref(): SecurityOrigin
    /**
     * Gets a string representation of `origin`. The string representation
     * is a valid URI with only protocol, host, and port components, or
     * %NULL.
     */
    toString(): string | null
    /**
     * Atomically decrements the reference count of `origin` by one.
     * If the reference count drops to 0, all memory allocated by
     * #WebKitSecurityOrigin is released. This function is MT-safe and may be
     * called from any thread.
     */
    unref(): void
}

class SecurityOrigin {

    // Own properties of WebKit2-5.0.WebKit2.SecurityOrigin

    static name: string

    // Constructors of WebKit2-5.0.WebKit2.SecurityOrigin

    /**
     * Create a new security origin from the provided protocol, host and
     * port.
     * @constructor 
     * @param protocol The protocol for the new origin
     * @param host The host for the new origin
     * @param port The port number for the new origin, or 0 to indicate the        default port for `protocol`
     */
    constructor(protocol: string, host: string, port: number) 
    /**
     * Create a new security origin from the provided protocol, host and
     * port.
     * @constructor 
     * @param protocol The protocol for the new origin
     * @param host The host for the new origin
     * @param port The port number for the new origin, or 0 to indicate the        default port for `protocol`
     */
    static new(protocol: string, host: string, port: number): SecurityOrigin
    /**
     * Create a new security origin from the provided URI. Components of
     * `uri` other than protocol, host, and port do not affect the created
     * #WebKitSecurityOrigin.
     * @constructor 
     * @param uri The URI for the new origin
     */
    static newForUri(uri: string): SecurityOrigin
}

interface SettingsClass {

    // Own fields of WebKit2-5.0.WebKit2.SettingsClass

    parentClass: GObject.ObjectClass
}

abstract class SettingsClass {

    // Own properties of WebKit2-5.0.WebKit2.SettingsClass

    static name: string
}

interface SettingsPrivate {
}

class SettingsPrivate {

    // Own properties of WebKit2-5.0.WebKit2.SettingsPrivate

    static name: string
}

interface URIRequestClass {

    // Own fields of WebKit2-5.0.WebKit2.URIRequestClass

    parentClass: GObject.ObjectClass
}

abstract class URIRequestClass {

    // Own properties of WebKit2-5.0.WebKit2.URIRequestClass

    static name: string
}

interface URIRequestPrivate {
}

class URIRequestPrivate {

    // Own properties of WebKit2-5.0.WebKit2.URIRequestPrivate

    static name: string
}

interface URIResponseClass {

    // Own fields of WebKit2-5.0.WebKit2.URIResponseClass

    parentClass: GObject.ObjectClass
}

abstract class URIResponseClass {

    // Own properties of WebKit2-5.0.WebKit2.URIResponseClass

    static name: string
}

interface URIResponsePrivate {
}

class URIResponsePrivate {

    // Own properties of WebKit2-5.0.WebKit2.URIResponsePrivate

    static name: string
}

interface URISchemeRequestClass {

    // Own fields of WebKit2-5.0.WebKit2.URISchemeRequestClass

    parentClass: GObject.ObjectClass
}

abstract class URISchemeRequestClass {

    // Own properties of WebKit2-5.0.WebKit2.URISchemeRequestClass

    static name: string
}

interface URISchemeRequestPrivate {
}

class URISchemeRequestPrivate {

    // Own properties of WebKit2-5.0.WebKit2.URISchemeRequestPrivate

    static name: string
}

interface URISchemeResponseClass {

    // Own fields of WebKit2-5.0.WebKit2.URISchemeResponseClass

    parentClass: GObject.ObjectClass
}

abstract class URISchemeResponseClass {

    // Own properties of WebKit2-5.0.WebKit2.URISchemeResponseClass

    static name: string
}

interface URISchemeResponsePrivate {
}

class URISchemeResponsePrivate {

    // Own properties of WebKit2-5.0.WebKit2.URISchemeResponsePrivate

    static name: string
}

interface UserContentFilter {

    // Owm methods of WebKit2-5.0.WebKit2.UserContentFilter

    /**
     * Obtain the identifier previously used to save the `user_content_filter` in the
     * #WebKitUserContentFilterStore.
     */
    getIdentifier(): string
    /**
     * Atomically increments the reference count of `user_content_filter` by one.
     * This function is MT-safe and may be called from any thread.
     */
    ref(): UserContentFilter
    /**
     * Atomically decrements the reference count of `user_content_filter` by one.
     * If the reference count drops to 0, all the memory allocated by the
     * #WebKitUserContentFilter is released. This function is MT-safe and may
     * be called from any thread.
     */
    unref(): void
}

class UserContentFilter {

    // Own properties of WebKit2-5.0.WebKit2.UserContentFilter

    static name: string
}

interface UserContentFilterStoreClass {

    // Own fields of WebKit2-5.0.WebKit2.UserContentFilterStoreClass

    parentClass: GObject.ObjectClass
}

abstract class UserContentFilterStoreClass {

    // Own properties of WebKit2-5.0.WebKit2.UserContentFilterStoreClass

    static name: string
}

interface UserContentFilterStorePrivate {
}

class UserContentFilterStorePrivate {

    // Own properties of WebKit2-5.0.WebKit2.UserContentFilterStorePrivate

    static name: string
}

interface UserContentManagerClass {

    // Own fields of WebKit2-5.0.WebKit2.UserContentManagerClass

    parentClass: GObject.ObjectClass
}

abstract class UserContentManagerClass {

    // Own properties of WebKit2-5.0.WebKit2.UserContentManagerClass

    static name: string
}

interface UserContentManagerPrivate {
}

class UserContentManagerPrivate {

    // Own properties of WebKit2-5.0.WebKit2.UserContentManagerPrivate

    static name: string
}

interface UserMediaPermissionRequestClass {

    // Own fields of WebKit2-5.0.WebKit2.UserMediaPermissionRequestClass

    parentClass: GObject.ObjectClass
}

abstract class UserMediaPermissionRequestClass {

    // Own properties of WebKit2-5.0.WebKit2.UserMediaPermissionRequestClass

    static name: string
}

interface UserMediaPermissionRequestPrivate {
}

class UserMediaPermissionRequestPrivate {

    // Own properties of WebKit2-5.0.WebKit2.UserMediaPermissionRequestPrivate

    static name: string
}

interface UserMessageClass {

    // Own fields of WebKit2-5.0.WebKit2.UserMessageClass

    parentClass: GObject.InitiallyUnownedClass
}

abstract class UserMessageClass {

    // Own properties of WebKit2-5.0.WebKit2.UserMessageClass

    static name: string
}

interface UserMessagePrivate {
}

class UserMessagePrivate {

    // Own properties of WebKit2-5.0.WebKit2.UserMessagePrivate

    static name: string
}

interface UserScript {

    // Owm methods of WebKit2-5.0.WebKit2.UserScript

    /**
     * Atomically increments the reference count of `user_script` by one.
     * This function is MT-safe and may be called from any thread.
     */
    ref(): UserScript
    /**
     * Atomically decrements the reference count of `user_script` by one.
     * If the reference count drops to 0, all memory allocated by
     * #WebKitUserScript is released. This function is MT-safe and may be called
     * from any thread.
     */
    unref(): void
}

class UserScript {

    // Own properties of WebKit2-5.0.WebKit2.UserScript

    static name: string

    // Constructors of WebKit2-5.0.WebKit2.UserScript

    /**
     * Creates a new user script. Scripts can be applied to some URIs
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
     */
    constructor(source: string, injectedFrames: UserContentInjectedFrames, injectionTime: UserScriptInjectionTime, allowList: string[] | null, blockList: string[] | null) 
    /**
     * Creates a new user script. Scripts can be applied to some URIs
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
     */
    static new(source: string, injectedFrames: UserContentInjectedFrames, injectionTime: UserScriptInjectionTime, allowList: string[] | null, blockList: string[] | null): UserScript
    /**
     * Creates a new user script for script world with name `world_name`.
     * See webkit_user_script_new() for a full description.
     * @constructor 
     * @param source Source code of the user script.
     * @param injectedFrames A #WebKitUserContentInjectedFrames value
     * @param injectionTime A #WebKitUserScriptInjectionTime value
     * @param worldName the name of a #WebKitScriptWorld
     * @param allowList An allow_list of URI patterns or %NULL
     * @param blockList A block_list of URI patterns or %NULL
     */
    static newForWorld(source: string, injectedFrames: UserContentInjectedFrames, injectionTime: UserScriptInjectionTime, worldName: string, allowList: string[] | null, blockList: string[] | null): UserScript
}

interface UserStyleSheet {

    // Owm methods of WebKit2-5.0.WebKit2.UserStyleSheet

    /**
     * Atomically increments the reference count of `user_style_sheet` by one.
     * This function is MT-safe and may be called from any thread.
     */
    ref(): UserStyleSheet
    /**
     * Atomically decrements the reference count of `user_style_sheet` by one.
     * If the reference count drops to 0, all memory allocated by
     * #WebKitUserStyleSheet is released. This function is MT-safe and may be
     * called from any thread.
     */
    unref(): void
}

class UserStyleSheet {

    // Own properties of WebKit2-5.0.WebKit2.UserStyleSheet

    static name: string

    // Constructors of WebKit2-5.0.WebKit2.UserStyleSheet

    /**
     * Creates a new user style sheet. Style sheets can be applied to some URIs
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
     */
    constructor(source: string, injectedFrames: UserContentInjectedFrames, level: UserStyleLevel, allowList: string[] | null, blockList: string[] | null) 
    /**
     * Creates a new user style sheet. Style sheets can be applied to some URIs
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
     */
    static new(source: string, injectedFrames: UserContentInjectedFrames, level: UserStyleLevel, allowList: string[] | null, blockList: string[] | null): UserStyleSheet
    /**
     * Creates a new user style sheet for script world with name `world_name`.
     * See webkit_user_style_sheet_new() for a full description.
     * @constructor 
     * @param source Source code of the user style sheet.
     * @param injectedFrames A #WebKitUserContentInjectedFrames value
     * @param level A #WebKitUserStyleLevel
     * @param worldName the name of a #WebKitScriptWorld
     * @param allowList An allow_list of URI patterns or %NULL
     * @param blockList A block_list of URI patterns or %NULL
     */
    static newForWorld(source: string, injectedFrames: UserContentInjectedFrames, level: UserStyleLevel, worldName: string, allowList: string[] | null, blockList: string[] | null): UserStyleSheet
}

interface WebContextClass {

    // Own fields of WebKit2-5.0.WebKit2.WebContextClass

    parent: GObject.ObjectClass
    downloadStarted: (context: WebContext, download: Download) => void
    initializeWebExtensions: (context: WebContext) => void
    initializeNotificationPermissions: (context: WebContext) => void
    automationStarted: (context: WebContext, session: AutomationSession) => void
    userMessageReceived: (context: WebContext, message: UserMessage) => boolean
}

abstract class WebContextClass {

    // Own properties of WebKit2-5.0.WebKit2.WebContextClass

    static name: string
}

interface WebContextPrivate {
}

class WebContextPrivate {

    // Own properties of WebKit2-5.0.WebKit2.WebContextPrivate

    static name: string
}

interface WebInspectorClass {

    // Own fields of WebKit2-5.0.WebKit2.WebInspectorClass

    parentClass: GObject.ObjectClass
}

abstract class WebInspectorClass {

    // Own properties of WebKit2-5.0.WebKit2.WebInspectorClass

    static name: string
}

interface WebInspectorPrivate {
}

class WebInspectorPrivate {

    // Own properties of WebKit2-5.0.WebKit2.WebInspectorPrivate

    static name: string
}

interface WebResourceClass {

    // Own fields of WebKit2-5.0.WebKit2.WebResourceClass

    parentClass: GObject.ObjectClass
}

abstract class WebResourceClass {

    // Own properties of WebKit2-5.0.WebKit2.WebResourceClass

    static name: string
}

interface WebResourcePrivate {
}

class WebResourcePrivate {

    // Own properties of WebKit2-5.0.WebKit2.WebResourcePrivate

    static name: string
}

interface WebViewBaseClass {

    // Own fields of WebKit2-5.0.WebKit2.WebViewBaseClass

    parentClass: Gtk.WidgetClass
}

abstract class WebViewBaseClass {

    // Own properties of WebKit2-5.0.WebKit2.WebViewBaseClass

    static name: string
}

interface WebViewBasePrivate {
}

class WebViewBasePrivate {

    // Own properties of WebKit2-5.0.WebKit2.WebViewBasePrivate

    static name: string
}

interface WebViewClass {

    // Own fields of WebKit2-5.0.WebKit2.WebViewClass

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
    contextMenu: (webView: WebView, contextMenu: ContextMenu, event: Gdk.Event, hitTestResult: HitTestResult) => boolean
    contextMenuDismissed: (webView: WebView) => void
    submitForm: (webView: WebView, request: FormSubmissionRequest) => void
    insecureContentDetected: (webView: WebView, event: InsecureContentEvent) => void
    webProcessCrashed: (webView: WebView) => boolean
    authenticate: (webView: WebView, request: AuthenticationRequest) => boolean
    loadFailedWithTlsErrors: (webView: WebView, failingUri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => boolean
    showNotification: (webView: WebView, notification: Notification) => boolean
    runColorChooser: (webView: WebView, request: ColorChooserRequest) => boolean
    showOptionMenu: (webView: WebView, rectangle: Gdk.Rectangle, menu: OptionMenu) => boolean
    webProcessTerminated: (webView: WebView, reason: WebProcessTerminationReason) => void
    userMessageReceived: (webView: WebView, message: UserMessage) => boolean
}

abstract class WebViewClass {

    // Own properties of WebKit2-5.0.WebKit2.WebViewClass

    static name: string
}

interface WebViewPrivate {
}

class WebViewPrivate {

    // Own properties of WebKit2-5.0.WebKit2.WebViewPrivate

    static name: string
}

interface WebViewSessionState {

    // Owm methods of WebKit2-5.0.WebKit2.WebViewSessionState

    /**
     * Atomically increments the reference count of `state` by one. This
     * function is MT-safe and may be called from any thread.
     */
    ref(): WebViewSessionState
    /**
     * Serializes a #WebKitWebViewSessionState.
     */
    serialize(): any
    /**
     * Atomically decrements the reference count of `state` by one. If the
     * reference count drops to 0, all memory allocated by the #WebKitWebViewSessionState is
     * released. This function is MT-safe and may be called from any thread.
     */
    unref(): void
}

class WebViewSessionState {

    // Own properties of WebKit2-5.0.WebKit2.WebViewSessionState

    static name: string

    // Constructors of WebKit2-5.0.WebKit2.WebViewSessionState

    /**
     * Creates a new #WebKitWebViewSessionState from serialized data.
     * @constructor 
     * @param data a #GBytes
     */
    constructor(data: any) 
    /**
     * Creates a new #WebKitWebViewSessionState from serialized data.
     * @constructor 
     * @param data a #GBytes
     */
    static new(data: any): WebViewSessionState
}

interface WebsiteData {

    // Owm methods of WebKit2-5.0.WebKit2.WebsiteData

    /**
     * Gets the name of #WebKitWebsiteData. This is the website name, normally represented by
     * a domain or host name. All local documents are grouped in the same #WebKitWebsiteData using
     * the name "Local files".
     */
    getName(): string
    /**
     * Gets the size of the data of types `types` in a #WebKitWebsiteData.
     * Note that currently the data size is only known for %WEBKIT_WEBSITE_DATA_DISK_CACHE data type
     * so for all other types 0 will be returned.
     * @param types a bitmask  of #WebKitWebsiteDataTypes
     */
    getSize(types: WebsiteDataTypes): number
    /**
     * Gets the types of data stored in the client for a #WebKitWebsiteData. These are the
     * types actually present, not the types queried with webkit_website_data_manager_fetch().
     */
    getTypes(): WebsiteDataTypes
    /**
     * Atomically increments the reference count of `website_data` by one.
     * This function is MT-safe and may be called from any thread.
     */
    ref(): WebsiteData
    /**
     * Atomically decrements the reference count of `website_data` by one.
     * If the reference count drops to 0, all memory allocated by
     * #WebKitWebsiteData is released. This function is MT-safe and may be
     * called from any thread.
     */
    unref(): void
}

class WebsiteData {

    // Own properties of WebKit2-5.0.WebKit2.WebsiteData

    static name: string
}

interface WebsiteDataAccessPermissionRequestClass {

    // Own fields of WebKit2-5.0.WebKit2.WebsiteDataAccessPermissionRequestClass

    parentClass: GObject.ObjectClass
}

abstract class WebsiteDataAccessPermissionRequestClass {

    // Own properties of WebKit2-5.0.WebKit2.WebsiteDataAccessPermissionRequestClass

    static name: string
}

interface WebsiteDataAccessPermissionRequestPrivate {
}

class WebsiteDataAccessPermissionRequestPrivate {

    // Own properties of WebKit2-5.0.WebKit2.WebsiteDataAccessPermissionRequestPrivate

    static name: string
}

interface WebsiteDataManagerClass {

    // Own fields of WebKit2-5.0.WebKit2.WebsiteDataManagerClass

    parentClass: GObject.ObjectClass
}

abstract class WebsiteDataManagerClass {

    // Own properties of WebKit2-5.0.WebKit2.WebsiteDataManagerClass

    static name: string
}

interface WebsiteDataManagerPrivate {
}

class WebsiteDataManagerPrivate {

    // Own properties of WebKit2-5.0.WebKit2.WebsiteDataManagerPrivate

    static name: string
}

interface WebsitePoliciesClass {

    // Own fields of WebKit2-5.0.WebKit2.WebsitePoliciesClass

    parentClass: GObject.ObjectClass
}

abstract class WebsitePoliciesClass {

    // Own properties of WebKit2-5.0.WebKit2.WebsitePoliciesClass

    static name: string
}

interface WebsitePoliciesPrivate {
}

class WebsitePoliciesPrivate {

    // Own properties of WebKit2-5.0.WebKit2.WebsitePoliciesPrivate

    static name: string
}

interface WindowPropertiesClass {

    // Own fields of WebKit2-5.0.WebKit2.WindowPropertiesClass

    parentClass: GObject.ObjectClass
}

abstract class WindowPropertiesClass {

    // Own properties of WebKit2-5.0.WebKit2.WindowPropertiesClass

    static name: string
}

interface WindowPropertiesPrivate {
}

class WindowPropertiesPrivate {

    // Own properties of WebKit2-5.0.WebKit2.WindowPropertiesPrivate

    static name: string
}

}
export default WebKit2;