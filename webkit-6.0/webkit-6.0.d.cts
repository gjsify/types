
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * WebKit-6.0
 */

import type Soup from '@girs/soup-3.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type JavaScriptCore from '@girs/javascriptcore-6.0';
import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from '@girs/cairo-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';

/**
 * Enum values representing the authentication scheme.
 */
export enum AuthenticationScheme {
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
export enum AutomationBrowsingContextPresentation {
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
export enum AutoplayPolicy {
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
export enum CacheModel {
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
export enum ContextMenuAction {
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
export enum CookieAcceptPolicy {
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
export enum CookiePersistentStorage {
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
export enum CredentialPersistence {
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
export enum DownloadError {
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
export enum FaviconDatabaseError {
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
 * Enum values used for determining the hardware acceleration policy.
 */
export enum HardwareAccelerationPolicy {
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
export enum InputPurpose {
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
export enum InsecureContentEvent {
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
export enum JavascriptError {
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
export enum LoadEvent {
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
export enum MediaCaptureState {
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
export enum MediaError {
    /**
     * Preliminary load failure for media content types. A new load will be started to perform the media load. Since: 2.40
     */
    LOAD,
}
/**
 * Enum values used to denote the various navigation types.
 */
export enum NavigationType {
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
export enum NetworkError {
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
export enum NetworkProxyMode {
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
export enum PermissionState {
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
export enum PolicyDecisionType {
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
export enum PolicyError {
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
export enum PrintError {
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
export enum PrintOperationResponse {
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
export enum SaveMode {
    /**
     * Save the current page using the MHTML format.
     */
    MHTML,
}
/**
 * Enum values used for determining the type of #WebKitScriptDialog
 */
export enum ScriptDialogType {
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
export enum SnapshotError {
    /**
     * An error occurred when creating a webpage snapshot.
     */
    CREATE,
}
/**
 * Enum values used to specify the region from which to get a #WebKitWebView
 * snapshot
 */
export enum SnapshotRegion {
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
export enum TLSErrorsPolicy {
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
export enum UserContentFilterError {
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
export enum UserContentInjectedFrames {
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
export enum UserMessageError {
    /**
     * The message was not handled by the receiver.
     */
    MESSAGE,
}
/**
 * Specifies at which place of documents an user script will be inserted.
 */
export enum UserScriptInjectionTime {
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
export enum UserStyleLevel {
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
export enum WebExtensionMode {
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
export enum WebProcessTerminationReason {
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
export enum EditorTypingAttributes {
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
export enum FindOptions {
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
export enum HitTestResultContext {
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
export enum InputHints {
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
export enum SnapshotOptions {
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
export enum WebsiteDataTypes {
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
export const EDITING_COMMAND_COPY: string | null
/**
 * The create link command. Creates a link element that is inserted at
 * the current cursor position. If there's a selection, the selected text
 * will be used as the link text, otherwise the URL itself will be used.
 * It receives the link URL as argument. This command should be executed
 * with webkit_web_view_execute_editing_command_with_argument()
 */
export const EDITING_COMMAND_CREATE_LINK: string | null
/**
 * The cut clipboard command. Copies the current selection inside
 * a #WebKitWebView to the clipboard and deletes the selected content.
 * You can check whether it's possible to execute the command with
 * webkit_web_view_can_execute_editing_command(). In general it's
 * possible to cut to the clipboard when the #WebKitWebView content is
 * editable and there is an active selection.
 */
export const EDITING_COMMAND_CUT: string | null
/**
 * The insert image command. Creates an image element that is inserted at
 * the current cursor position. It receives an URI as argument,
 * that is used as the image source. This command should be executed with
 * webkit_web_view_execute_editing_command_with_argument().
 */
export const EDITING_COMMAND_INSERT_IMAGE: string | null
/**
 * The paste clipboard command. Pastes the contents of the clipboard to
 * a #WebKitWebView.
 * You can check whether it's possible to execute the command with
 * webkit_web_view_can_execute_editing_command(). In general it's possible
 * to paste from the clipboard when the #WebKitWebView content is editable
 * and clipboard is not empty.
 */
export const EDITING_COMMAND_PASTE: string | null
/**
 * The paste as plaintext clipboard command. Pastes the contents of the
 * clipboard to a #WebKitWebView, with formatting removed.
 * You can check whether it's possible to execute the command with
 * webkit_web_view_can_execute_editing_command(). In general it's possible
 * to paste from the clipboard when the #WebKitWebView content is editable
 * and clipboard is not empty.
 */
export const EDITING_COMMAND_PASTE_AS_PLAIN_TEXT: string | null
/**
 * The redo command. Redoes a previously undone editing command in
 * a #WebKitWebView.
 * You can check whether it's possible to execute the command with
 * webkit_web_view_can_execute_editing_command(). It's only possible
 * to redo a command when it has been previously undone.
 */
export const EDITING_COMMAND_REDO: string | null
/**
 * The select all command. Selects all the content of the current text field in
 * a #WebKitWebView.
 * It is always possible to select all text, no matter whether the
 * #WebKitWebView content is editable or not. You can still check it
 * with webkit_web_view_can_execute_editing_command().
 */
export const EDITING_COMMAND_SELECT_ALL: string | null
/**
 * The undo command. Undoes the last editing command in a #WebKitWebView.
 * You can check whether it's possible to execute the command with
 * webkit_web_view_can_execute_editing_command(). It's only possible
 * to undo a command after a previously executed editing operation.
 */
export const EDITING_COMMAND_UNDO: string | null
/**
 * Like webkit_get_major_version(), but from the headers used at
 * application compile time, rather than from the library linked
 * against at application run time.
 */
export const MAJOR_VERSION: number
/**
 * Like webkit_get_micro_version(), but from the headers used at
 * application compile time, rather than from the library linked
 * against at application run time.
 */
export const MICRO_VERSION: number
/**
 * Like webkit_get_minor_version(), but from the headers used at
 * application compile time, rather than from the library linked
 * against at application run time.
 */
export const MINOR_VERSION: number
/**
 * Gets the quark for the domain of download errors.
 * @returns download error domain.
 */
export function download_error_quark(): GLib.Quark
/**
 * Gets the quark for the domain of favicon database errors.
 * @returns favicon database error domain.
 */
export function favicon_database_error_quark(): GLib.Quark
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
export function get_major_version(): number
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
export function get_micro_version(): number
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
export function get_minor_version(): number
/**
 * Gets the quark for the domain of JavaScript errors.
 * @returns JavaScript error domain.
 */
export function javascript_error_quark(): GLib.Quark
/**
 * Gets the quark for the domain of media errors.
 * @returns media error domin.
 */
export function media_error_quark(): GLib.Quark
/**
 * Get the key system for which access permission is being requested.
 * @param request a #WebKitMediaKeySystemPermissionRequest
 * @returns the key system name for @request
 */
export function media_key_system_permission_get_name(request: MediaKeySystemPermissionRequest): string | null
/**
 * Gets the quark for the domain of networking errors.
 * @returns network error domain.
 */
export function network_error_quark(): GLib.Quark
/**
 * Gets the quark for the domain of policy errors.
 * @returns policy error domain.
 */
export function policy_error_quark(): GLib.Quark
/**
 * Gets the quark for the domain of printing errors.
 * @returns print error domain.
 */
export function print_error_quark(): GLib.Quark
/**
 * Gets the quark for the domain of page snapshot errors.
 * @returns snapshot error domain.
 */
export function snapshot_error_quark(): GLib.Quark
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
export function uri_for_display(uri: string | null): string | null
/**
 * Gets the quark for the domain of user content filter errors.
 * @returns user content filter error domain.
 */
export function user_content_filter_error_quark(): GLib.Quark
/**
 * Check whether the permission request is for an audio device.
 * @param request a #WebKitUserMediaPermissionRequest
 * @returns %TRUE if access to an audio device was requested.
 */
export function user_media_permission_is_for_audio_device(request: UserMediaPermissionRequest): boolean
/**
 * Check whether the permission request is for a display device.
 * @param request a #WebKitUserMediaPermissionRequest
 * @returns %TRUE if access to a display device was requested.
 */
export function user_media_permission_is_for_display_device(request: UserMediaPermissionRequest): boolean
/**
 * Check whether the permission request is for a video device.
 * @param request a #WebKitUserMediaPermissionRequest
 * @returns %TRUE if access to a video device was requested.
 */
export function user_media_permission_is_for_video_device(request: UserMediaPermissionRequest): boolean
/**
 * Gets the quark for the domain of user message errors.
 * @returns user message error domain.
 */
export function user_message_error_quark(): GLib.Quark
/**
 * Type definition for a function that will be called back when an URI request is
 * made for a user registered URI scheme.
 * @callback 
 * @param request the #WebKitURISchemeRequest
 */
export interface URISchemeRequestCallback {
    (request: URISchemeRequest): void
}
export module PermissionRequest {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface PermissionRequest {

    // Owm methods of WebKit-6.0.WebKit.PermissionRequest

    /**
     * Allow the action which triggered this request.
     */
    allow(): void
    /**
     * Deny the action which triggered this request.
     */
    deny(): void

    // Own virtual methods of WebKit-6.0.WebKit.PermissionRequest

    /**
     * Allow the action which triggered this request.
     * @virtual 
     */
    vfunc_allow(): void
    /**
     * Deny the action which triggered this request.
     * @virtual 
     */
    vfunc_deny(): void

    // Class property signals of WebKit-6.0.WebKit.PermissionRequest

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class PermissionRequest extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.PermissionRequest

    static name: string
    static $gtype: GObject.GType<PermissionRequest>

    // Constructors of WebKit-6.0.WebKit.PermissionRequest

    constructor(config?: PermissionRequest.ConstructorProperties) 
    _init(config?: PermissionRequest.ConstructorProperties): void
}

export module AuthenticationRequest {

    // Signal callback interfaces

    /**
     * Signal callback interface for `authenticated`
     */
    export interface AuthenticatedSignalCallback {
        ($obj: AuthenticationRequest, credential: Credential): void
    }

    /**
     * Signal callback interface for `cancelled`
     */
    export interface CancelledSignalCallback {
        ($obj: AuthenticationRequest): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface AuthenticationRequest {

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
    can_save_credentials(): boolean
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
    get_certificate_pin_flags(): Gio.TlsPasswordFlags
    /**
     * Get the host that this authentication challenge is applicable to.
     * @returns The host of @request.
     */
    get_host(): string | null
    /**
     * Get the port that this authentication challenge is applicable to.
     * @returns The port of @request.
     */
    get_port(): number
    /**
     * Get the #WebKitCredential of the proposed authentication challenge.
     * 
     * Get the #WebKitCredential of the proposed authentication challenge that was
     * stored from a previous session. The client can use this directly for
     * authentication or construct their own #WebKitCredential.
     * @returns A #WebKitCredential encapsulating credential details or %NULL if there is no stored credential.
     */
    get_proposed_credential(): Credential
    /**
     * Get the realm that this authentication challenge is applicable to.
     * @returns The realm of @request.
     */
    get_realm(): string | null
    /**
     * Get the authentication scheme of the authentication challenge.
     * @returns The #WebKitAuthenticationScheme of @request.
     */
    get_scheme(): AuthenticationScheme
    /**
     * Get the #WebKitSecurityOrigin that this authentication challenge is applicable to.
     * @returns a newly created #WebKitSecurityOrigin.
     */
    get_security_origin(): SecurityOrigin
    /**
     * Determine whether the authentication challenge is associated with a proxy server.
     * 
     * Determine whether the authentication challenge is associated with a proxy server rather than an "origin" server.
     * @returns %TRUE if authentication is for a proxy or %FALSE otherwise.
     */
    is_for_proxy(): boolean
    /**
     * Determine whether this this is a first attempt or a retry for this authentication challenge.
     * @returns %TRUE if authentication attempt is a retry or %FALSE otherwise.
     */
    is_retry(): boolean
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
    set_can_save_credentials(enabled: boolean): void
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
    set_proposed_credential(credential: Credential): void

    // Own signals of WebKit-6.0.WebKit.AuthenticationRequest

    connect(sigName: "authenticated", callback: AuthenticationRequest.AuthenticatedSignalCallback): number
    connect_after(sigName: "authenticated", callback: AuthenticationRequest.AuthenticatedSignalCallback): number
    emit(sigName: "authenticated", credential: Credential, ...args: any[]): void
    connect(sigName: "cancelled", callback: AuthenticationRequest.CancelledSignalCallback): number
    connect_after(sigName: "cancelled", callback: AuthenticationRequest.CancelledSignalCallback): number
    emit(sigName: "cancelled", ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.AuthenticationRequest

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class AuthenticationRequest extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.AuthenticationRequest

    static name: string
    static $gtype: GObject.GType<AuthenticationRequest>

    // Constructors of WebKit-6.0.WebKit.AuthenticationRequest

    constructor(config?: AuthenticationRequest.ConstructorProperties) 
    _init(config?: AuthenticationRequest.ConstructorProperties): void
}

export module AutomationSession {

    // Signal callback interfaces

    /**
     * Signal callback interface for `create-web-view`
     */
    export interface CreateWebViewSignalCallback {
        ($obj: AutomationSession): WebView
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of WebKit-6.0.WebKit.AutomationSession

        /**
         * The session unique identifier.
         */
        id?: string | null
    }

}

export interface AutomationSession {

    // Own properties of WebKit-6.0.WebKit.AutomationSession

    /**
     * The session unique identifier.
     */
    readonly id: string | null

    // Owm methods of WebKit-6.0.WebKit.AutomationSession

    /**
     * Get the the previously set #WebKitAutomationSession.
     * 
     * Get the #WebKitAutomationSession previously set with webkit_automation_session_set_application_info().
     * @returns the #WebKitAutomationSession of @session, or %NULL if no one has been set.
     */
    get_application_info(): ApplicationInfo
    /**
     * Get the unique identifier of a #WebKitAutomationSession
     * @returns the unique identifier of @session
     */
    get_id(): string | null
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
    set_application_info(info: ApplicationInfo): void

    // Own signals of WebKit-6.0.WebKit.AutomationSession

    connect(sigName: "create-web-view", callback: AutomationSession.CreateWebViewSignalCallback): number
    connect_after(sigName: "create-web-view", callback: AutomationSession.CreateWebViewSignalCallback): number
    emit(sigName: "create-web-view", ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.AutomationSession

    connect(sigName: "notify::id", callback: (($obj: AutomationSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: AutomationSession, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class AutomationSession extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.AutomationSession

    static name: string
    static $gtype: GObject.GType<AutomationSession>

    // Constructors of WebKit-6.0.WebKit.AutomationSession

    constructor(config?: AutomationSession.ConstructorProperties) 
    _init(config?: AutomationSession.ConstructorProperties): void
}

export module BackForwardList {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        ($obj: BackForwardList, item_added: BackForwardListItem | null, items_removed: any | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface BackForwardList {

    // Owm methods of WebKit-6.0.WebKit.BackForwardList

    /**
     * Returns the item that precedes the current item.
     * @returns the #WebKitBackForwardListItem    preceding the current item or %NULL.
     */
    get_back_item(): BackForwardListItem | null
    /**
     * Obtain the list of items preceding the current one.
     * @returns a #GList of    items preceding the current item.
     */
    get_back_list(): BackForwardListItem[]
    /**
     * Obtain a list up to some number of items preceding the current one.
     * @param limit the number of items to retrieve
     * @returns a #GList of    items preceding the current item limited by @limit.
     */
    get_back_list_with_limit(limit: number): BackForwardListItem[]
    /**
     * Returns the current item in `back_forward_list`.
     * @returns a #WebKitBackForwardListItem    or %NULL if @back_forward_list is empty.
     */
    get_current_item(): BackForwardListItem | null
    /**
     * Returns the item that follows the current item.
     * @returns the #WebKitBackForwardListItem    following the current item or %NULL.
     */
    get_forward_item(): BackForwardListItem | null
    /**
     * Obtain the list of items following the current one.
     * @returns a #GList of    items following the current item.
     */
    get_forward_list(): BackForwardListItem[]
    /**
     * Obtain a list up to some number of items following the current one.
     * @param limit the number of items to retrieve
     * @returns a #GList of    items following the current item limited by @limit.
     */
    get_forward_list_with_limit(limit: number): BackForwardListItem[]
    /**
     * Obtain the amount of items in the list.
     * @returns the length of @back_forward_list.
     */
    get_length(): number
    /**
     * Returns the item at a given index relative to the current item.
     * @param index the index of the item
     * @returns the #WebKitBackForwardListItem    located at the specified index relative to the current item or %NULL.
     */
    get_nth_item(index: number): BackForwardListItem | null

    // Own signals of WebKit-6.0.WebKit.BackForwardList

    connect(sigName: "changed", callback: BackForwardList.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: BackForwardList.ChangedSignalCallback): number
    emit(sigName: "changed", item_added: BackForwardListItem | null, items_removed: any | null, ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.BackForwardList

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class BackForwardList extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.BackForwardList

    static name: string
    static $gtype: GObject.GType<BackForwardList>

    // Constructors of WebKit-6.0.WebKit.BackForwardList

    constructor(config?: BackForwardList.ConstructorProperties) 
    _init(config?: BackForwardList.ConstructorProperties): void
}

export module BackForwardListItem {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
    }

}

export interface BackForwardListItem {

    // Owm methods of WebKit-6.0.WebKit.BackForwardListItem

    /**
     * Obtain the original URI of the item.
     * 
     * See also webkit_back_forward_list_item_get_uri().
     * @returns the original URI of @list_item or %NULL    when the original URI is empty.
     */
    get_original_uri(): string | null
    /**
     * Obtain the title of the item.
     * @returns the page title of @list_item or %NULL    when the title is empty.
     */
    get_title(): string | null
    /**
     * Obtain the URI of the item.
     * 
     * This URI may differ from the original URI if the page was,
     * for example, redirected to a new location.
     * See also webkit_back_forward_list_item_get_original_uri().
     * @returns the URI of @list_item or %NULL    when the URI is empty.
     */
    get_uri(): string | null

    // Class property signals of WebKit-6.0.WebKit.BackForwardListItem

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class BackForwardListItem extends GObject.InitiallyUnowned {

    // Own properties of WebKit-6.0.WebKit.BackForwardListItem

    static name: string
    static $gtype: GObject.GType<BackForwardListItem>

    // Constructors of WebKit-6.0.WebKit.BackForwardListItem

    constructor(config?: BackForwardListItem.ConstructorProperties) 
    _init(config?: BackForwardListItem.ConstructorProperties): void
}

export module ColorChooserRequest {

    // Signal callback interfaces

    /**
     * Signal callback interface for `finished`
     */
    export interface FinishedSignalCallback {
        ($obj: ColorChooserRequest): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of WebKit-6.0.WebKit.ColorChooserRequest

        /**
         * The #GdkRGBA color of the request
         */
        rgba?: Gdk.RGBA | null
    }

}

export interface ColorChooserRequest {

    // Own properties of WebKit-6.0.WebKit.ColorChooserRequest

    /**
     * The #GdkRGBA color of the request
     */
    rgba: Gdk.RGBA

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
    get_element_rectangle(): /* rect */ Gdk.Rectangle
    /**
     * Gets the current #GdkRGBA color of `request`
     */
    get_rgba(): /* rgba */ Gdk.RGBA
    /**
     * Sets the current #GdkRGBA color of `request`
     * @param rgba a pointer #GdkRGBA
     */
    set_rgba(rgba: Gdk.RGBA): void

    // Own signals of WebKit-6.0.WebKit.ColorChooserRequest

    connect(sigName: "finished", callback: ColorChooserRequest.FinishedSignalCallback): number
    connect_after(sigName: "finished", callback: ColorChooserRequest.FinishedSignalCallback): number
    emit(sigName: "finished", ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.ColorChooserRequest

    connect(sigName: "notify::rgba", callback: (($obj: ColorChooserRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: ColorChooserRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rgba", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class ColorChooserRequest extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.ColorChooserRequest

    static name: string
    static $gtype: GObject.GType<ColorChooserRequest>

    // Constructors of WebKit-6.0.WebKit.ColorChooserRequest

    constructor(config?: ColorChooserRequest.ConstructorProperties) 
    _init(config?: ColorChooserRequest.ConstructorProperties): void
}

export module ContextMenu {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ContextMenu {

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
    get_event(): Gdk.Event
    /**
     * Gets the item at the given position in the `menu`.
     * @param position the position of the item, counting from 0
     * @returns the #WebKitContextMenuItem at position @position in @menu,    or %NULL if the position is off the end of the @menu.
     */
    get_item_at_position(position: number): ContextMenuItem
    /**
     * Returns the item list of `menu`.
     * @returns a #GList of    #WebKitContextMenuItem<!-- -->s
     */
    get_items(): ContextMenuItem[]
    /**
     * Gets the length of the `menu`.
     * @returns the number of #WebKitContextMenuItem<!-- -->s in @menu
     */
    get_n_items(): number
    /**
     * Gets the user data of `menu`.
     * 
     * This function can be used from the UI Process to get user data previously set
     * from the Web Process with webkit_context_menu_set_user_data().
     * @returns the user data of @menu, or %NULL if @menu doesn't have user data
     */
    get_user_data(): GLib.Variant
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
    move_item(item: ContextMenuItem, position: number): void
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
    remove_all(): void
    /**
     * Sets user data to `menu`.
     * 
     * This function can be used from a Web Process extension to set user data
     * that can be retrieved from the UI Process using webkit_context_menu_get_user_data().
     * If the `user_data` #GVariant is floating, it is consumed.
     * @param user_data a #GVariant
     */
    set_user_data(user_data: GLib.Variant): void

    // Class property signals of WebKit-6.0.WebKit.ContextMenu

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class ContextMenu extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.ContextMenu

    static name: string
    static $gtype: GObject.GType<ContextMenu>

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
    static new_with_items(items: ContextMenuItem[]): ContextMenu
    _init(config?: ContextMenu.ConstructorProperties): void
}

export module ContextMenuItem {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
    }

}

export interface ContextMenuItem {

    // Owm methods of WebKit-6.0.WebKit.ContextMenuItem

    /**
     * Gets the action associated to `item` as a #GAction.
     * @returns the #GAction associated to the #WebKitContextMenuItem,    or %NULL if @item is a separator.
     */
    get_gaction(): Gio.Action
    /**
     * Gets the #WebKitContextMenuAction of `item`.
     * 
     * If the #WebKitContextMenuItem was not
     * created for a stock action %WEBKIT_CONTEXT_MENU_ACTION_CUSTOM will be
     * returned. If the #WebKitContextMenuItem is a separator %WEBKIT_CONTEXT_MENU_ACTION_NO_ACTION
     * will be returned.
     * @returns the #WebKitContextMenuAction of @item
     */
    get_stock_action(): ContextMenuAction
    /**
     * Gets the submenu of `item`.
     * @returns the #WebKitContextMenu representing the submenu of    @item or %NULL if @item doesn't have a submenu.
     */
    get_submenu(): ContextMenu
    /**
     * Checks whether `item` is a separator.
     * @returns %TRUE is @item is a separator or %FALSE otherwise
     */
    is_separator(): boolean
    /**
     * Sets or replaces the `item` submenu.
     * 
     * If `submenu` is %NULL the current
     * submenu of `item` is removed.
     * @param submenu a #WebKitContextMenu
     */
    set_submenu(submenu: ContextMenu | null): void

    // Class property signals of WebKit-6.0.WebKit.ContextMenuItem

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class ContextMenuItem extends GObject.InitiallyUnowned {

    // Own properties of WebKit-6.0.WebKit.ContextMenuItem

    static name: string
    static $gtype: GObject.GType<ContextMenuItem>

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
    static new_from_gaction(action: Gio.Action, label: string | null, target: GLib.Variant | null): ContextMenuItem
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
    static new_from_stock_action(action: ContextMenuAction): ContextMenuItem
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
    static new_from_stock_action_with_label(action: ContextMenuAction, label: string | null): ContextMenuItem
    /**
     * Creates a new #WebKitContextMenuItem representing a separator.
     * @constructor 
     * @returns the newly created #WebKitContextMenuItem object.
     */
    static new_separator(): ContextMenuItem
    /**
     * Creates a new #WebKitContextMenuItem using the given `label` with a submenu.
     * @constructor 
     * @param label the menu item label text
     * @param submenu a #WebKitContextMenu to set
     * @returns the newly created #WebKitContextMenuItem object.
     */
    static new_with_submenu(label: string | null, submenu: ContextMenu): ContextMenuItem
    _init(config?: ContextMenuItem.ConstructorProperties): void
}

export module CookieManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        ($obj: CookieManager): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface CookieManager {

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
    add_cookie(cookie: Soup.Cookie, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finish an asynchronous operation started with webkit_cookie_manager_add_cookie().
     * @param result a #GAsyncResult
     * @returns %TRUE if the cookie was added or %FALSE in case of error.
     */
    add_cookie_finish(result: Gio.AsyncResult): boolean
    /**
     * Asynchronously delete a #SoupCookie from the current session.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * webkit_cookie_manager_delete_cookie_finish() to get the result of the operation.
     * @param cookie the #SoupCookie to be deleted
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    delete_cookie(cookie: Soup.Cookie, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finish an asynchronous operation started with webkit_cookie_manager_delete_cookie().
     * @param result a #GAsyncResult
     * @returns %TRUE if the cookie was deleted or %FALSE in case of error.
     */
    delete_cookie_finish(result: Gio.AsyncResult): boolean
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
    get_accept_policy(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finish an asynchronous operation started with webkit_cookie_manager_get_accept_policy().
     * @param result a #GAsyncResult
     * @returns the cookie acceptance policy of @cookie_manager as a #WebKitCookieAcceptPolicy.
     */
    get_accept_policy_finish(result: Gio.AsyncResult): CookieAcceptPolicy
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
    get_cookies(uri: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finish an asynchronous operation started with webkit_cookie_manager_get_cookies().
     * 
     * The return value is a #GSList of #SoupCookie instances which should be released
     * with g_list_free_full() and soup_cookie_free().
     * @param result a #GAsyncResult
     * @returns A #GList of #SoupCookie instances.
     */
    get_cookies_finish(result: Gio.AsyncResult): Soup.Cookie[]
    /**
     * Set the cookie acceptance policy of `cookie_manager` as `policy`.
     * 
     * Note that ITP has its own way to handle third-party cookies, so when it's enabled,
     * and `policy` is set to %WEBKIT_COOKIE_POLICY_ACCEPT_NO_THIRD_PARTY, %WEBKIT_COOKIE_POLICY_ACCEPT_ALWAYS
     * will be used instead. Once disabled, the policy will be set back to %WEBKIT_COOKIE_POLICY_ACCEPT_NO_THIRD_PARTY.
     * See also webkit_website_data_manager_set_itp_enabled().
     * @param policy a #WebKitCookieAcceptPolicy
     */
    set_accept_policy(policy: CookieAcceptPolicy): void
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
    set_persistent_storage(filename: string | null, storage: CookiePersistentStorage): void

    // Own signals of WebKit-6.0.WebKit.CookieManager

    connect(sigName: "changed", callback: CookieManager.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: CookieManager.ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.CookieManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class CookieManager extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.CookieManager

    static name: string
    static $gtype: GObject.GType<CookieManager>

    // Constructors of WebKit-6.0.WebKit.CookieManager

    constructor(config?: CookieManager.ConstructorProperties) 
    _init(config?: CookieManager.ConstructorProperties): void
}

export module DeviceInfoPermissionRequest {

    // Constructor properties interface

    export interface ConstructorProperties extends PermissionRequest.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface DeviceInfoPermissionRequest extends PermissionRequest {

    // Class property signals of WebKit-6.0.WebKit.DeviceInfoPermissionRequest

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class DeviceInfoPermissionRequest extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.DeviceInfoPermissionRequest

    static name: string
    static $gtype: GObject.GType<DeviceInfoPermissionRequest>

    // Constructors of WebKit-6.0.WebKit.DeviceInfoPermissionRequest

    constructor(config?: DeviceInfoPermissionRequest.ConstructorProperties) 
    _init(config?: DeviceInfoPermissionRequest.ConstructorProperties): void
}

export module Download {

    // Signal callback interfaces

    /**
     * Signal callback interface for `created-destination`
     */
    export interface CreatedDestinationSignalCallback {
        ($obj: Download, destination: string | null): void
    }

    /**
     * Signal callback interface for `decide-destination`
     */
    export interface DecideDestinationSignalCallback {
        ($obj: Download, suggested_filename: string | null): boolean
    }

    /**
     * Signal callback interface for `failed`
     */
    export interface FailedSignalCallback {
        ($obj: Download, error: GLib.Error): void
    }

    /**
     * Signal callback interface for `finished`
     */
    export interface FinishedSignalCallback {
        ($obj: Download): void
    }

    /**
     * Signal callback interface for `received-data`
     */
    export interface ReceivedDataSignalCallback {
        ($obj: Download, data_length: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of WebKit-6.0.WebKit.Download

        /**
         * Whether or not the download is allowed to overwrite an existing file on
         * disk. If this property is %FALSE and the destination already exists,
         * the download will fail.
         */
        allow_overwrite?: boolean | null
    }

}

export interface Download {

    // Own properties of WebKit-6.0.WebKit.Download

    /**
     * Whether or not the download is allowed to overwrite an existing file on
     * disk. If this property is %FALSE and the destination already exists,
     * the download will fail.
     */
    allow_overwrite: boolean
    /**
     * The local URI to where the download will be saved.
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
    readonly estimated_progress: number
    /**
     * The #WebKitURIResponse associated with this download.
     */
    readonly response: URIResponse

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
    get_allow_overwrite(): boolean
    /**
     * Obtains the URI to which the downloaded file will be written.
     * 
     * You
     * can connect to #WebKitDownload::created-destination to make
     * sure this method returns a valid destination.
     * @returns the destination URI or %NULL
     */
    get_destination(): string | null
    /**
     * Gets the elapsed time in seconds, including any fractional part.
     * 
     * If the download finished, had an error or was cancelled this is
     * the time between its start and the event.
     * @returns seconds since the download was started
     */
    get_elapsed_time(): number
    /**
     * Gets the value of the #WebKitDownload:estimated-progress property.
     * Gets the value of the #WebKitDownload:estimated-progress property.
     * You can monitor the estimated progress of the download operation by
     * connecting to the notify::estimated-progress signal of `download`.
     * @returns an estimate of the of the percent complete for a download     as a range from 0.0 to 1.0.
     */
    get_estimated_progress(): number
    /**
     * Gets the length of the data already downloaded for `download`.
     * 
     * Gets the length of the data already downloaded for `download`
     * in bytes.
     * @returns the amount of bytes already downloaded.
     */
    get_received_data_length(): number
    /**
     * Retrieves the #WebKitURIRequest object that backs the download
     * process.
     * @returns the #WebKitURIRequest of @download
     */
    get_request(): URIRequest
    /**
     * Retrieves the #WebKitURIResponse object that backs the download process.
     * 
     * Retrieves the #WebKitURIResponse object that backs the download
     * process. This method returns %NULL if called before the response
     * is received from the server. You can connect to notify::response
     * signal to be notified when the response is received.
     * @returns the #WebKitURIResponse, or %NULL if     the response hasn't been received yet.
     */
    get_response(): URIResponse
    /**
     * Get the #WebKitWebView that initiated the download.
     * @returns the #WebKitWebView that initiated @download,    or %NULL if @download was not initiated by a #WebKitWebView.
     */
    get_web_view(): WebView
    /**
     * Sets the #WebKitDownload:allow-overwrite property.
     * 
     * Sets the #WebKitDownload:allow-overwrite property, which determines whether
     * the download may overwrite an existing file on disk, or if it will fail if
     * the destination already exists.
     * @param allowed the new value for the #WebKitDownload:allow-overwrite property
     */
    set_allow_overwrite(allowed: boolean): void
    /**
     * Sets the URI to which the downloaded file will be written.
     * 
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
    set_destination(uri: string | null): void

    // Own virtual methods of WebKit-6.0.WebKit.Download

    vfunc_decide_destination(suggested_filename: string | null): boolean

    // Own signals of WebKit-6.0.WebKit.Download

    connect(sigName: "created-destination", callback: Download.CreatedDestinationSignalCallback): number
    connect_after(sigName: "created-destination", callback: Download.CreatedDestinationSignalCallback): number
    emit(sigName: "created-destination", destination: string | null, ...args: any[]): void
    connect(sigName: "decide-destination", callback: Download.DecideDestinationSignalCallback): number
    connect_after(sigName: "decide-destination", callback: Download.DecideDestinationSignalCallback): number
    emit(sigName: "decide-destination", suggested_filename: string | null, ...args: any[]): void
    connect(sigName: "failed", callback: Download.FailedSignalCallback): number
    connect_after(sigName: "failed", callback: Download.FailedSignalCallback): number
    emit(sigName: "failed", error: GLib.Error, ...args: any[]): void
    connect(sigName: "finished", callback: Download.FinishedSignalCallback): number
    connect_after(sigName: "finished", callback: Download.FinishedSignalCallback): number
    emit(sigName: "finished", ...args: any[]): void
    connect(sigName: "received-data", callback: Download.ReceivedDataSignalCallback): number
    connect_after(sigName: "received-data", callback: Download.ReceivedDataSignalCallback): number
    emit(sigName: "received-data", data_length: number, ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.Download

    connect(sigName: "notify::allow-overwrite", callback: (($obj: Download, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-overwrite", callback: (($obj: Download, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-overwrite", ...args: any[]): void
    connect(sigName: "notify::destination", callback: (($obj: Download, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destination", callback: (($obj: Download, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destination", ...args: any[]): void
    connect(sigName: "notify::estimated-progress", callback: (($obj: Download, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-progress", callback: (($obj: Download, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::estimated-progress", ...args: any[]): void
    connect(sigName: "notify::response", callback: (($obj: Download, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::response", callback: (($obj: Download, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::response", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class Download extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.Download

    static name: string
    static $gtype: GObject.GType<Download>

    // Constructors of WebKit-6.0.WebKit.Download

    constructor(config?: Download.ConstructorProperties) 
    _init(config?: Download.ConstructorProperties): void
}

export module EditorState {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface EditorState {

    // Own properties of WebKit-6.0.WebKit.EditorState

    /**
     * Bitmask of #WebKitEditorTypingAttributes flags.
     * See webkit_editor_state_get_typing_attributes() for more information.
     */
    readonly typing_attributes: number

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
    get_typing_attributes(): number
    /**
     * Gets whether a copy command can be issued.
     * @returns %TRUE if copy is currently available
     */
    is_copy_available(): boolean
    /**
     * Gets whether a cut command can be issued.
     * @returns %TRUE if cut is currently available
     */
    is_cut_available(): boolean
    /**
     * Gets whether a paste command can be issued.
     * @returns %TRUE if paste is currently available
     */
    is_paste_available(): boolean
    /**
     * Gets whether a redo command can be issued.
     * @returns %TRUE if redo is currently available
     */
    is_redo_available(): boolean
    /**
     * Gets whether an undo command can be issued.
     * @returns %TRUE if undo is currently available
     */
    is_undo_available(): boolean

    // Class property signals of WebKit-6.0.WebKit.EditorState

    connect(sigName: "notify::typing-attributes", callback: (($obj: EditorState, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typing-attributes", callback: (($obj: EditorState, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::typing-attributes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class EditorState extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.EditorState

    static name: string
    static $gtype: GObject.GType<EditorState>

    // Constructors of WebKit-6.0.WebKit.EditorState

    constructor(config?: EditorState.ConstructorProperties) 
    _init(config?: EditorState.ConstructorProperties): void
}

export module FaviconDatabase {

    // Signal callback interfaces

    /**
     * Signal callback interface for `favicon-changed`
     */
    export interface FaviconChangedSignalCallback {
        ($obj: FaviconDatabase, page_uri: string | null, favicon_uri: string | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface FaviconDatabase {

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
     * @param page_uri URI of the page for which we want to retrieve the favicon
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is            satisfied or %NULL if you don't care about the result.
     */
    get_favicon(page_uri: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with webkit_favicon_database_get_favicon().
     * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to webkit_favicon_database_get_favicon()
     * @returns a new favicon image, or %NULL in case of error.
     */
    get_favicon_finish(result: Gio.AsyncResult): Gdk.Texture
    /**
     * Obtains the URI of the favicon for the given `page_uri`.
     * @param page_uri URI of the page containing the icon
     * @returns a newly allocated URI for the favicon, or %NULL if the database doesn't have a favicon for @page_uri.
     */
    get_favicon_uri(page_uri: string | null): string | null

    // Own signals of WebKit-6.0.WebKit.FaviconDatabase

    connect(sigName: "favicon-changed", callback: FaviconDatabase.FaviconChangedSignalCallback): number
    connect_after(sigName: "favicon-changed", callback: FaviconDatabase.FaviconChangedSignalCallback): number
    emit(sigName: "favicon-changed", page_uri: string | null, favicon_uri: string | null, ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.FaviconDatabase

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class FaviconDatabase extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.FaviconDatabase

    static name: string
    static $gtype: GObject.GType<FaviconDatabase>

    // Constructors of WebKit-6.0.WebKit.FaviconDatabase

    constructor(config?: FaviconDatabase.ConstructorProperties) 
    _init(config?: FaviconDatabase.ConstructorProperties): void
}

export module FileChooserRequest {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface FileChooserRequest {

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
    readonly mime_types: string[]
    /**
     * Whether the file chooser should allow selecting multiple
     * files. See
     * webkit_file_chooser_request_get_select_multiple() for
     * more details.
     */
    readonly select_multiple: boolean
    /**
     * A %NULL-terminated array of strings containing the list of
     * selected files associated to the current request. See
     * webkit_file_chooser_request_get_selected_files() for more details.
     */
    readonly selected_files: string[]

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
    get_mime_types(): string[]
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
    get_mime_types_filter(): Gtk.FileFilter
    /**
     * Whether the file chooser should allow selecting multiple files.
     * 
     * Determine whether the file chooser associated to this
     * #WebKitFileChooserRequest should allow selecting multiple files,
     * which depends on the HTML input element having a 'multiple'
     * attribute defined.
     * @returns %TRUE if the file chooser should allow selecting multiple files or %FALSE otherwise.
     */
    get_select_multiple(): boolean
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
    get_selected_files(): string[]
    /**
     * Ask WebKit to select local files for upload and complete the
     * request.
     * @param files a %NULL-terminated array of strings, containing paths to local files.
     */
    select_files(files: string[]): void

    // Class property signals of WebKit-6.0.WebKit.FileChooserRequest

    connect(sigName: "notify::filter", callback: (($obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter", callback: (($obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filter", ...args: any[]): void
    connect(sigName: "notify::mime-types", callback: (($obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-types", callback: (($obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mime-types", ...args: any[]): void
    connect(sigName: "notify::select-multiple", callback: (($obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::select-multiple", callback: (($obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::select-multiple", ...args: any[]): void
    connect(sigName: "notify::selected-files", callback: (($obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected-files", callback: (($obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selected-files", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class FileChooserRequest extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.FileChooserRequest

    static name: string
    static $gtype: GObject.GType<FileChooserRequest>

    // Constructors of WebKit-6.0.WebKit.FileChooserRequest

    constructor(config?: FileChooserRequest.ConstructorProperties) 
    _init(config?: FileChooserRequest.ConstructorProperties): void
}

export module FindController {

    // Signal callback interfaces

    /**
     * Signal callback interface for `counted-matches`
     */
    export interface CountedMatchesSignalCallback {
        ($obj: FindController, match_count: number): void
    }

    /**
     * Signal callback interface for `failed-to-find-text`
     */
    export interface FailedToFindTextSignalCallback {
        ($obj: FindController): void
    }

    /**
     * Signal callback interface for `found-text`
     */
    export interface FoundTextSignalCallback {
        ($obj: FindController, match_count: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of WebKit-6.0.WebKit.FindController

        /**
         * The #WebKitWebView this controller is associated to.
         */
        web_view?: WebView | null
    }

}

export interface FindController {

    // Own properties of WebKit-6.0.WebKit.FindController

    /**
     * The maximum number of matches to report for a given search.
     */
    readonly max_match_count: number
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
    readonly web_view: WebView

    // Owm methods of WebKit-6.0.WebKit.FindController

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
    count_matches(search_text: string | null, find_options: number, max_match_count: number): void
    /**
     * Gets the maximum number of matches to report.
     * 
     * Gets the maximum number of matches to report during a text
     * lookup. This number is passed as the last argument of
     * webkit_find_controller_search() or
     * webkit_find_controller_count_matches().
     * @returns the maximum number of matches to report.
     */
    get_max_match_count(): number
    /**
     * Gets the #WebKitFindOptions for the current search.
     * 
     * Gets a bitmask containing the #WebKitFindOptions associated with
     * the current search.
     * @returns a bitmask containing the #WebKitFindOptions associated with the current search.
     */
    get_options(): number
    /**
     * Gets the text that `find_controller` is searching for.
     * 
     * Gets the text that `find_controller` is currently searching
     * for. This text is passed to either
     * webkit_find_controller_search() or
     * webkit_find_controller_count_matches().
     * @returns the text to look for in the #WebKitWebView.
     */
    get_search_text(): string | null
    /**
     * Gets the #WebKitWebView this find controller is associated to.
     * 
     * Do
     * not dereference the returned instance as it belongs to the
     * #WebKitFindController.
     * @returns the #WebKitWebView.
     */
    get_web_view(): WebView
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
    search(search_text: string | null, find_options: number, max_match_count: number): void
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
    search_finish(): void
    /**
     * Looks for the next occurrence of the search text.
     * 
     * Calling this method before webkit_find_controller_search() or
     * webkit_find_controller_count_matches() is a programming error.
     */
    search_next(): void
    /**
     * Looks for the previous occurrence of the search text.
     * 
     * Calling this method before webkit_find_controller_search() or
     * webkit_find_controller_count_matches() is a programming error.
     */
    search_previous(): void

    // Own signals of WebKit-6.0.WebKit.FindController

    connect(sigName: "counted-matches", callback: FindController.CountedMatchesSignalCallback): number
    connect_after(sigName: "counted-matches", callback: FindController.CountedMatchesSignalCallback): number
    emit(sigName: "counted-matches", match_count: number, ...args: any[]): void
    connect(sigName: "failed-to-find-text", callback: FindController.FailedToFindTextSignalCallback): number
    connect_after(sigName: "failed-to-find-text", callback: FindController.FailedToFindTextSignalCallback): number
    emit(sigName: "failed-to-find-text", ...args: any[]): void
    connect(sigName: "found-text", callback: FindController.FoundTextSignalCallback): number
    connect_after(sigName: "found-text", callback: FindController.FoundTextSignalCallback): number
    emit(sigName: "found-text", match_count: number, ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.FindController

    connect(sigName: "notify::max-match-count", callback: (($obj: FindController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-match-count", callback: (($obj: FindController, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-match-count", ...args: any[]): void
    connect(sigName: "notify::options", callback: (($obj: FindController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: (($obj: FindController, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::options", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: FindController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: FindController, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::web-view", callback: (($obj: FindController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::web-view", callback: (($obj: FindController, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::web-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class FindController extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.FindController

    static name: string
    static $gtype: GObject.GType<FindController>

    // Constructors of WebKit-6.0.WebKit.FindController

    constructor(config?: FindController.ConstructorProperties) 
    _init(config?: FindController.ConstructorProperties): void
}

export module FormSubmissionRequest {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface FormSubmissionRequest {

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
    list_text_fields(): [ /* returnType */ boolean, /* field_names */ string[], /* field_values */ string[] ]
    /**
     * Continue the form submission.
     */
    submit(): void

    // Class property signals of WebKit-6.0.WebKit.FormSubmissionRequest

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class FormSubmissionRequest extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.FormSubmissionRequest

    static name: string
    static $gtype: GObject.GType<FormSubmissionRequest>

    // Constructors of WebKit-6.0.WebKit.FormSubmissionRequest

    constructor(config?: FormSubmissionRequest.ConstructorProperties) 
    _init(config?: FormSubmissionRequest.ConstructorProperties): void
}

export module GeolocationManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `start`
     */
    export interface StartSignalCallback {
        ($obj: GeolocationManager): boolean
    }

    /**
     * Signal callback interface for `stop`
     */
    export interface StopSignalCallback {
        ($obj: GeolocationManager): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface GeolocationManager {

    // Own properties of WebKit-6.0.WebKit.GeolocationManager

    /**
     * Whether high accuracy is enabled. This is a read-only property that will be
     * set to %TRUE when a #WebKitGeolocationManager needs to get accurate position updates.
     * You can connect to notify::enable-high-accuracy signal to monitor it.
     */
    readonly enable_high_accuracy: boolean

    // Owm methods of WebKit-6.0.WebKit.GeolocationManager

    /**
     * Notify `manager` that determining the position failed.
     * @param error_message the error message
     */
    failed(error_message: string | null): void
    /**
     * Get whether high accuracy is enabled.
     * @returns Whether the setting is enabled.
     */
    get_enable_high_accuracy(): boolean
    /**
     * Notify `manager` that position has been updated to `position`.
     * @param position a #WebKitGeolocationPosition
     */
    update_position(position: GeolocationPosition): void

    // Own signals of WebKit-6.0.WebKit.GeolocationManager

    connect(sigName: "start", callback: GeolocationManager.StartSignalCallback): number
    connect_after(sigName: "start", callback: GeolocationManager.StartSignalCallback): number
    emit(sigName: "start", ...args: any[]): void
    connect(sigName: "stop", callback: GeolocationManager.StopSignalCallback): number
    connect_after(sigName: "stop", callback: GeolocationManager.StopSignalCallback): number
    emit(sigName: "stop", ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.GeolocationManager

    connect(sigName: "notify::enable-high-accuracy", callback: (($obj: GeolocationManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-high-accuracy", callback: (($obj: GeolocationManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-high-accuracy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class GeolocationManager extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.GeolocationManager

    static name: string
    static $gtype: GObject.GType<GeolocationManager>

    // Constructors of WebKit-6.0.WebKit.GeolocationManager

    constructor(config?: GeolocationManager.ConstructorProperties) 
    _init(config?: GeolocationManager.ConstructorProperties): void
}

export module GeolocationPermissionRequest {

    // Constructor properties interface

    export interface ConstructorProperties extends PermissionRequest.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface GeolocationPermissionRequest extends PermissionRequest {

    // Class property signals of WebKit-6.0.WebKit.GeolocationPermissionRequest

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class GeolocationPermissionRequest extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.GeolocationPermissionRequest

    static name: string
    static $gtype: GObject.GType<GeolocationPermissionRequest>

    // Constructors of WebKit-6.0.WebKit.GeolocationPermissionRequest

    constructor(config?: GeolocationPermissionRequest.ConstructorProperties) 
    _init(config?: GeolocationPermissionRequest.ConstructorProperties): void
}

export module HitTestResult {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

export interface HitTestResult {

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
    readonly image_uri: string | null
    /**
     * The label of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
     * is present in #WebKitHitTestResult:context
     */
    readonly link_label: string | null
    /**
     * The title of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
     * is present in #WebKitHitTestResult:context
     */
    readonly link_title: string | null
    /**
     * The URI of the link if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK
     * is present in #WebKitHitTestResult:context
     */
    readonly link_uri: string | null
    /**
     * The URI of the media if flag %WEBKIT_HIT_TEST_RESULT_CONTEXT_MEDIA
     * is present in #WebKitHitTestResult:context
     */
    readonly media_uri: string | null

    // Owm methods of WebKit-6.0.WebKit.HitTestResult

    /**
     * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_EDITABLE flag is present in
     * #WebKitHitTestResult:context.
     * @returns %TRUE if there's an editable element at the coordinates of the @hit_test_result,    or %FALSE otherwise
     */
    context_is_editable(): boolean
    /**
     * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_IMAGE flag is present in
     * #WebKitHitTestResult:context.
     * @returns %TRUE if there's an image element in the coordinates of the Hit Test,    or %FALSE otherwise
     */
    context_is_image(): boolean
    /**
     * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK flag is present in
     * #WebKitHitTestResult:context.
     * @returns %TRUE if there's a link element in the coordinates of the Hit Test,    or %FALSE otherwise
     */
    context_is_link(): boolean
    /**
     * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_MEDIA flag is present in
     * #WebKitHitTestResult:context.
     * @returns %TRUE if there's a media element in the coordinates of the Hit Test,    or %FALSE otherwise
     */
    context_is_media(): boolean
    /**
     * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_SCROLLBAR flag is present in
     * #WebKitHitTestResult:context.
     * @returns %TRUE if there's a scrollbar element at the coordinates of the @hit_test_result,    or %FALSE otherwise
     */
    context_is_scrollbar(): boolean
    /**
     * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_SELECTION flag is present in
     * #WebKitHitTestResult:context.
     * @returns %TRUE if there's a selected element at the coordinates of the @hit_test_result,    or %FALSE otherwise
     */
    context_is_selection(): boolean
    /**
     * Gets the value of the #WebKitHitTestResult:context property.
     * @returns a bitmask of #WebKitHitTestResultContext flags
     */
    get_context(): number
    /**
     * Gets the value of the #WebKitHitTestResult:image-uri property.
     * @returns the URI of the image element in the coordinates of the Hit Test,    or %NULL if there isn't an image element in @hit_test_result context
     */
    get_image_uri(): string | null
    /**
     * Gets the value of the #WebKitHitTestResult:link-label property.
     * @returns the label of the link element in the coordinates of the Hit Test,    or %NULL if there isn't a link element in @hit_test_result context or the    link element doesn't have a label
     */
    get_link_label(): string | null
    /**
     * Gets the value of the #WebKitHitTestResult:link-title property.
     * @returns the title of the link element in the coordinates of the Hit Test,    or %NULL if there isn't a link element in @hit_test_result context or the    link element doesn't have a title
     */
    get_link_title(): string | null
    /**
     * Gets the value of the #WebKitHitTestResult:link-uri property.
     * @returns the URI of the link element in the coordinates of the Hit Test,    or %NULL if there isn't a link element in @hit_test_result context
     */
    get_link_uri(): string | null
    /**
     * Gets the value of the #WebKitHitTestResult:media-uri property.
     * @returns the URI of the media element in the coordinates of the Hit Test,    or %NULL if there isn't a media element in @hit_test_result context
     */
    get_media_uri(): string | null

    // Class property signals of WebKit-6.0.WebKit.HitTestResult

    connect(sigName: "notify::context", callback: (($obj: HitTestResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: HitTestResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::image-uri", callback: (($obj: HitTestResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image-uri", callback: (($obj: HitTestResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image-uri", ...args: any[]): void
    connect(sigName: "notify::link-label", callback: (($obj: HitTestResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::link-label", callback: (($obj: HitTestResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::link-label", ...args: any[]): void
    connect(sigName: "notify::link-title", callback: (($obj: HitTestResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::link-title", callback: (($obj: HitTestResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::link-title", ...args: any[]): void
    connect(sigName: "notify::link-uri", callback: (($obj: HitTestResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::link-uri", callback: (($obj: HitTestResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::link-uri", ...args: any[]): void
    connect(sigName: "notify::media-uri", callback: (($obj: HitTestResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-uri", callback: (($obj: HitTestResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::media-uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class HitTestResult extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.HitTestResult

    static name: string
    static $gtype: GObject.GType<HitTestResult>

    // Constructors of WebKit-6.0.WebKit.HitTestResult

    constructor(config?: HitTestResult.ConstructorProperties) 
    _init(config?: HitTestResult.ConstructorProperties): void
}

export module InputMethodContext {

    // Signal callback interfaces

    /**
     * Signal callback interface for `committed`
     */
    export interface CommittedSignalCallback {
        ($obj: InputMethodContext, text: string | null): void
    }

    /**
     * Signal callback interface for `delete-surrounding`
     */
    export interface DeleteSurroundingSignalCallback {
        ($obj: InputMethodContext, offset: number, n_chars: number): void
    }

    /**
     * Signal callback interface for `preedit-changed`
     */
    export interface PreeditChangedSignalCallback {
        ($obj: InputMethodContext): void
    }

    /**
     * Signal callback interface for `preedit-finished`
     */
    export interface PreeditFinishedSignalCallback {
        ($obj: InputMethodContext): void
    }

    /**
     * Signal callback interface for `preedit-started`
     */
    export interface PreeditStartedSignalCallback {
        ($obj: InputMethodContext): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

export interface InputMethodContext {

    // Own properties of WebKit-6.0.WebKit.InputMethodContext

    /**
     * The #WebKitInputHints of the input associated with this context.
     */
    input_hints: InputHints
    /**
     * The #WebKitInputPurpose of the input associated with this context.
     */
    input_purpose: InputPurpose

    // Own fields of WebKit-6.0.WebKit.InputMethodContext

    parent_instance: GObject.Object
    priv: InputMethodContextPrivate

    // Owm methods of WebKit-6.0.WebKit.InputMethodContext

    /**
     * Allow `key_event` to be handled by the input method.
     * 
     * If %TRUE is returned, then no further processing should be
     * done for the key event.
     * @param key_event the key event to filter
     * @returns %TRUE if the key event was handled, or %FALSE otherwise
     */
    filter_key_event(key_event: Gdk.Event): boolean
    /**
     * Get the value of the #WebKitInputMethodContext:input-hints property.
     * @returns the #WebKitInputHints of the input associated with @context
     */
    get_input_hints(): InputHints
    /**
     * Get the value of the #WebKitInputMethodContext:input-purpose property.
     * @returns the #WebKitInputPurpose of the input associated with @context
     */
    get_input_purpose(): InputPurpose
    /**
     * Get the pre-edit string and a list of WebKitInputMethodUnderline.
     * 
     * Get the current pre-edit string for the `context,` and a list of WebKitInputMethodUnderline to apply to the string.
     * The string will be displayed inserted at `cursor_offset`.
     */
    get_preedit(): [ /* text */ string | null, /* underlines */ InputMethodUnderline[] | null, /* cursor_offset */ number | null ]
    /**
     * Notify `context` that cursor area changed in input associated.
     * @param x the x coordinate of cursor location
     * @param y the y coordinate of cursor location
     * @param width the width of cursor area
     * @param height the height of cursor area
     */
    notify_cursor_area(x: number, y: number, width: number, height: number): void
    /**
     * Notify `context` that input associated has gained focus.
     */
    notify_focus_in(): void
    /**
     * Notify `context` that input associated has lost focus.
     */
    notify_focus_out(): void
    /**
     * Notify `context` that the context surrounding the cursor has changed.
     * 
     * If there's no selection `selection_index` is the same as `cursor_index`.
     * @param text text surrounding the insertion point
     * @param length the length of `text,` or -1 if `text` is nul-terminated
     * @param cursor_index the byte index of the insertion cursor within `text`.
     * @param selection_index the byte index of the selection cursor within `text`.
     */
    notify_surrounding(text: string | null, length: number, cursor_index: number, selection_index: number): void
    /**
     * Reset the `context`.
     * 
     * This will typically cause the input to clear the preedit state.
     */
    reset(): void
    /**
     * Set whether `context` should enable preedit to display feedback.
     * @param enabled whether to enable preedit
     */
    set_enable_preedit(enabled: boolean): void
    /**
     * Set the value of the #WebKitInputMethodContext:input-hints property.
     * @param hints a #WebKitInputHints
     */
    set_input_hints(hints: InputHints): void
    /**
     * Set the value of the #WebKitInputMethodContext:input-purpose property.
     * @param purpose a #WebKitInputPurpose
     */
    set_input_purpose(purpose: InputPurpose): void

    // Own virtual methods of WebKit-6.0.WebKit.InputMethodContext

    vfunc_committed(text: string | null): void
    vfunc_delete_surrounding(offset: number, n_chars: number): void
    /**
     * Allow `key_event` to be handled by the input method.
     * 
     * If %TRUE is returned, then no further processing should be
     * done for the key event.
     * @virtual 
     * @param key_event the key event to filter
     * @returns %TRUE if the key event was handled, or %FALSE otherwise
     */
    vfunc_filter_key_event(key_event: Gdk.Event): boolean
    /**
     * Get the pre-edit string and a list of WebKitInputMethodUnderline.
     * 
     * Get the current pre-edit string for the `context,` and a list of WebKitInputMethodUnderline to apply to the string.
     * The string will be displayed inserted at `cursor_offset`.
     * @virtual 
     */
    vfunc_get_preedit(): [ /* text */ string | null, /* underlines */ InputMethodUnderline[] | null, /* cursor_offset */ number | null ]
    /**
     * Notify `context` that cursor area changed in input associated.
     * @virtual 
     * @param x the x coordinate of cursor location
     * @param y the y coordinate of cursor location
     * @param width the width of cursor area
     * @param height the height of cursor area
     */
    vfunc_notify_cursor_area(x: number, y: number, width: number, height: number): void
    /**
     * Notify `context` that input associated has gained focus.
     * @virtual 
     */
    vfunc_notify_focus_in(): void
    /**
     * Notify `context` that input associated has lost focus.
     * @virtual 
     */
    vfunc_notify_focus_out(): void
    /**
     * Notify `context` that the context surrounding the cursor has changed.
     * 
     * If there's no selection `selection_index` is the same as `cursor_index`.
     * @virtual 
     * @param text text surrounding the insertion point
     * @param length the length of `text,` or -1 if `text` is nul-terminated
     * @param cursor_index the byte index of the insertion cursor within `text`.
     * @param selection_index the byte index of the selection cursor within `text`.
     */
    vfunc_notify_surrounding(text: string | null, length: number, cursor_index: number, selection_index: number): void
    vfunc_preedit_changed(): void
    vfunc_preedit_finished(): void
    vfunc_preedit_started(): void
    /**
     * Reset the `context`.
     * 
     * This will typically cause the input to clear the preedit state.
     * @virtual 
     */
    vfunc_reset(): void
    /**
     * Set whether `context` should enable preedit to display feedback.
     * @virtual 
     * @param enabled whether to enable preedit
     */
    vfunc_set_enable_preedit(enabled: boolean): void

    // Own signals of WebKit-6.0.WebKit.InputMethodContext

    connect(sigName: "committed", callback: InputMethodContext.CommittedSignalCallback): number
    connect_after(sigName: "committed", callback: InputMethodContext.CommittedSignalCallback): number
    emit(sigName: "committed", text: string | null, ...args: any[]): void
    connect(sigName: "delete-surrounding", callback: InputMethodContext.DeleteSurroundingSignalCallback): number
    connect_after(sigName: "delete-surrounding", callback: InputMethodContext.DeleteSurroundingSignalCallback): number
    emit(sigName: "delete-surrounding", offset: number, n_chars: number, ...args: any[]): void
    connect(sigName: "preedit-changed", callback: InputMethodContext.PreeditChangedSignalCallback): number
    connect_after(sigName: "preedit-changed", callback: InputMethodContext.PreeditChangedSignalCallback): number
    emit(sigName: "preedit-changed", ...args: any[]): void
    connect(sigName: "preedit-finished", callback: InputMethodContext.PreeditFinishedSignalCallback): number
    connect_after(sigName: "preedit-finished", callback: InputMethodContext.PreeditFinishedSignalCallback): number
    emit(sigName: "preedit-finished", ...args: any[]): void
    connect(sigName: "preedit-started", callback: InputMethodContext.PreeditStartedSignalCallback): number
    connect_after(sigName: "preedit-started", callback: InputMethodContext.PreeditStartedSignalCallback): number
    emit(sigName: "preedit-started", ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.InputMethodContext

    connect(sigName: "notify::input-hints", callback: (($obj: InputMethodContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: InputMethodContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: (($obj: InputMethodContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: InputMethodContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class InputMethodContext extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.InputMethodContext

    static name: string
    static $gtype: GObject.GType<InputMethodContext>

    // Constructors of WebKit-6.0.WebKit.InputMethodContext

    constructor(config?: InputMethodContext.ConstructorProperties) 
    _init(config?: InputMethodContext.ConstructorProperties): void
}

export module MediaKeySystemPermissionRequest {

    // Constructor properties interface

    export interface ConstructorProperties extends PermissionRequest.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface MediaKeySystemPermissionRequest extends PermissionRequest {

    // Class property signals of WebKit-6.0.WebKit.MediaKeySystemPermissionRequest

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class MediaKeySystemPermissionRequest extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.MediaKeySystemPermissionRequest

    static name: string
    static $gtype: GObject.GType<MediaKeySystemPermissionRequest>

    // Constructors of WebKit-6.0.WebKit.MediaKeySystemPermissionRequest

    constructor(config?: MediaKeySystemPermissionRequest.ConstructorProperties) 
    _init(config?: MediaKeySystemPermissionRequest.ConstructorProperties): void
}

export module NavigationPolicyDecision {

    // Constructor properties interface

    export interface ConstructorProperties extends PolicyDecision.ConstructorProperties {
    }

}

export interface NavigationPolicyDecision {

    // Own properties of WebKit-6.0.WebKit.NavigationPolicyDecision

    /**
     * The #WebKitNavigationAction that triggered this policy decision.
     */
    readonly navigation_action: NavigationAction

    // Owm methods of WebKit-6.0.WebKit.NavigationPolicyDecision

    /**
     * Gets the value of the #WebKitNavigationPolicyDecision:navigation-action property.
     * @returns The #WebKitNavigationAction triggering this policy decision.
     */
    get_navigation_action(): NavigationAction

    // Class property signals of WebKit-6.0.WebKit.NavigationPolicyDecision

    connect(sigName: "notify::navigation-action", callback: (($obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::navigation-action", callback: (($obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::navigation-action", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class NavigationPolicyDecision extends PolicyDecision {

    // Own properties of WebKit-6.0.WebKit.NavigationPolicyDecision

    static name: string
    static $gtype: GObject.GType<NavigationPolicyDecision>

    // Constructors of WebKit-6.0.WebKit.NavigationPolicyDecision

    constructor(config?: NavigationPolicyDecision.ConstructorProperties) 
    _init(config?: NavigationPolicyDecision.ConstructorProperties): void
}

export module NetworkSession {

    // Signal callback interfaces

    /**
     * Signal callback interface for `download-started`
     */
    export interface DownloadStartedSignalCallback {
        ($obj: NetworkSession, download: Download): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

export interface NetworkSession {

    // Own properties of WebKit-6.0.WebKit.NetworkSession

    /**
     * The base caches directory used to create the #WebKitWebsiteDataManager. If %NULL, a default location will be used.
     */
    readonly cache_directory: string | null
    /**
     * The base data directory used to create the #WebKitWebsiteDataManager. If %NULL, a default location will be used.
     */
    readonly data_directory: string | null
    /**
     * Whether to create an ephermeral #WebKitWebsiteDataManager for the session.
     */
    readonly is_ephemeral: boolean

    // Owm methods of WebKit-6.0.WebKit.NetworkSession

    /**
     * Ignore further TLS errors on the `host` for the certificate present in `info`.
     * @param certificate a #GTlsCertificate
     * @param host the host for which a certificate is to be allowed
     */
    allow_tls_certificate_for_host(certificate: Gio.TlsCertificate, host: string | null): void
    /**
     * Requests downloading of the specified URI string.
     * 
     * The download operation will not be associated to any #WebKitWebView,
     * if you are interested in starting a download from a particular #WebKitWebView use
     * webkit_web_view_download_uri() instead.
     * @param uri the URI to download
     * @returns a new #WebKitDownload representing    the download operation.
     */
    download_uri(uri: string | null): Download
    /**
     * Get the #WebKitCookieManager of `session`.
     * @returns a #WebKitCookieManager
     */
    get_cookie_manager(): CookieManager
    /**
     * Get whether Intelligent Tracking Prevention (ITP) is enabled or not.
     * @returns %TRUE if ITP is enabled, or %FALSE otherwise.
     */
    get_itp_enabled(): boolean
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
    get_itp_summary(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finish an asynchronous operation started with webkit_network_session_get_itp_summary().
     * @param result a #GAsyncResult
     * @returns a #GList of #WebKitITPThirdParty.    You must free the #GList with g_list_free() and unref the #WebKitITPThirdParty<!-- -->s with    webkit_itp_third_party_unref() when you're done with them.
     */
    get_itp_summary_finish(result: Gio.AsyncResult): ITPThirdParty[]
    /**
     * Get whether persistent credential storage is enabled or not.
     * 
     * See also webkit_network_session_set_persistent_credential_storage_enabled().
     * @returns %TRUE if persistent credential storage is enabled, or %FALSE otherwise.
     */
    get_persistent_credential_storage_enabled(): boolean
    /**
     * Get the TLS errors policy of `session`.
     * @returns a #WebKitTLSErrorsPolicy
     */
    get_tls_errors_policy(): TLSErrorsPolicy
    /**
     * Get the #WebKitWebsiteDataManager of `session`.
     * @returns a #WebKitWebsiteDataManager
     */
    get_website_data_manager(): WebsiteDataManager
    /**
     * Resolve the domain name of the given `hostname` in advance, so that if a URI
     * of `hostname` is requested the load will be performed more quickly.
     * @param hostname a hostname to be resolved
     */
    prefetch_dns(hostname: string | null): void
    /**
     * Enable or disable Intelligent Tracking Prevention (ITP).
     * 
     * When ITP is enabled resource load statistics
     * are collected and used to decide whether to allow or block third-party cookies and prevent user tracking.
     * Note that while ITP is enabled the accept policy %WEBKIT_COOKIE_POLICY_ACCEPT_NO_THIRD_PARTY is ignored and
     * %WEBKIT_COOKIE_POLICY_ACCEPT_ALWAYS is used instead. See also webkit_cookie_session_set_accept_policy().
     * @param enabled value to set
     */
    set_itp_enabled(enabled: boolean): void
    /**
     * Enable or disable persistent credential storage.
     * 
     * When enabled, which is the default for
     * non-ephemeral sessions, the network process will try to read and write HTTP authentiacation
     * credentials from persistent storage.
     * @param enabled value to set
     */
    set_persistent_credential_storage_enabled(enabled: boolean): void
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
     * @param proxy_mode a #WebKitNetworkProxyMode
     * @param proxy_settings a #WebKitNetworkProxySettings, or %NULL
     */
    set_proxy_settings(proxy_mode: NetworkProxyMode, proxy_settings: NetworkProxySettings | null): void
    /**
     * Set the TLS errors policy of `session` as `policy`.
     * @param policy a #WebKitTLSErrorsPolicy
     */
    set_tls_errors_policy(policy: TLSErrorsPolicy): void

    // Own signals of WebKit-6.0.WebKit.NetworkSession

    connect(sigName: "download-started", callback: NetworkSession.DownloadStartedSignalCallback): number
    connect_after(sigName: "download-started", callback: NetworkSession.DownloadStartedSignalCallback): number
    emit(sigName: "download-started", download: Download, ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.NetworkSession

    connect(sigName: "notify::cache-directory", callback: (($obj: NetworkSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cache-directory", callback: (($obj: NetworkSession, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cache-directory", ...args: any[]): void
    connect(sigName: "notify::data-directory", callback: (($obj: NetworkSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-directory", callback: (($obj: NetworkSession, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-directory", ...args: any[]): void
    connect(sigName: "notify::is-ephemeral", callback: (($obj: NetworkSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-ephemeral", callback: (($obj: NetworkSession, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-ephemeral", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Manages network configuration.
 * @class 
 */
export class NetworkSession extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.NetworkSession

    static name: string
    static $gtype: GObject.GType<NetworkSession>

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
     * @param data_directory a base directory for data, or %NULL
     * @param cache_directory a base directory for caches, or %NULL
     * @returns the newly created #WebKitNetworkSession
     */
    constructor(data_directory: string | null, cache_directory: string | null) 
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
     * @param data_directory a base directory for data, or %NULL
     * @param cache_directory a base directory for caches, or %NULL
     * @returns the newly created #WebKitNetworkSession
     */
    static new(data_directory: string | null, cache_directory: string | null): NetworkSession
    /**
     * Creates a new #WebKitNetworkSession with an ephemeral #WebKitWebsiteDataManager.
     * @constructor 
     * @returns a new ephemeral #WebKitNetworkSession.
     */
    static new_ephemeral(): NetworkSession
    _init(config?: NetworkSession.ConstructorProperties): void
    /**
     * Get the default network session.
     * The default network session is created using webkit_network_session_new() and passing
     * %NULL as data and cache directories.
     * @returns a #WebKitNetworkSession
     */
    static get_default(): NetworkSession
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
    static set_memory_pressure_settings(settings: MemoryPressureSettings): void
}

export module Notification {

    // Signal callback interfaces

    /**
     * Signal callback interface for `clicked`
     */
    export interface ClickedSignalCallback {
        ($obj: Notification): void
    }

    /**
     * Signal callback interface for `closed`
     */
    export interface ClosedSignalCallback {
        ($obj: Notification): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Notification {

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
    get_body(): string | null
    /**
     * Obtains the unique id for the notification.
     * @returns the unique id for the notification
     */
    get_id(): number
    /**
     * Obtains the tag identifier for the notification.
     * @returns the tag for the notification
     */
    get_tag(): string | null
    /**
     * Obtains the title for the notification.
     * @returns the title for the notification
     */
    get_title(): string | null

    // Own signals of WebKit-6.0.WebKit.Notification

    connect(sigName: "clicked", callback: Notification.ClickedSignalCallback): number
    connect_after(sigName: "clicked", callback: Notification.ClickedSignalCallback): number
    emit(sigName: "clicked", ...args: any[]): void
    connect(sigName: "closed", callback: Notification.ClosedSignalCallback): number
    connect_after(sigName: "closed", callback: Notification.ClosedSignalCallback): number
    emit(sigName: "closed", ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.Notification

    connect(sigName: "notify::body", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::body", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::body", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::tag", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Holds information about a notification that should be shown to the user.
 * @class 
 */
export class Notification extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.Notification

    static name: string
    static $gtype: GObject.GType<Notification>

    // Constructors of WebKit-6.0.WebKit.Notification

    constructor(config?: Notification.ConstructorProperties) 
    _init(config?: Notification.ConstructorProperties): void
}

export module NotificationPermissionRequest {

    // Constructor properties interface

    export interface ConstructorProperties extends PermissionRequest.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface NotificationPermissionRequest extends PermissionRequest {

    // Class property signals of WebKit-6.0.WebKit.NotificationPermissionRequest

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class NotificationPermissionRequest extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.NotificationPermissionRequest

    static name: string
    static $gtype: GObject.GType<NotificationPermissionRequest>

    // Constructors of WebKit-6.0.WebKit.NotificationPermissionRequest

    constructor(config?: NotificationPermissionRequest.ConstructorProperties) 
    _init(config?: NotificationPermissionRequest.ConstructorProperties): void
}

export module OptionMenu {

    // Signal callback interfaces

    /**
     * Signal callback interface for `close`
     */
    export interface CloseSignalCallback {
        ($obj: OptionMenu): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface OptionMenu {

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
    activate_item(index: number): void
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
    get_event(): Gdk.Event
    /**
     * Returns the #WebKitOptionMenuItem at `index` in `menu`.
     * @param index the index of the item
     * @returns a #WebKitOptionMenuItem of @menu.
     */
    get_item(index: number): OptionMenuItem
    /**
     * Gets the length of the `menu`.
     * @returns the number of #WebKitOptionMenuItem<!-- -->s in @menu
     */
    get_n_items(): number
    /**
     * Selects the #WebKitOptionMenuItem at `index` in `menu`.
     * 
     * Selecting an item changes the
     * text shown by the combo button, but it doesn't change the value of the element. You need to
     * explicitly activate the item with webkit_option_menu_select_item() or close the menu with
     * webkit_option_menu_close() in which case the currently selected item will be activated.
     * @param index the index of the item
     */
    select_item(index: number): void

    // Own signals of WebKit-6.0.WebKit.OptionMenu

    connect(sigName: "close", callback: OptionMenu.CloseSignalCallback): number
    connect_after(sigName: "close", callback: OptionMenu.CloseSignalCallback): number
    emit(sigName: "close", ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.OptionMenu

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class OptionMenu extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.OptionMenu

    static name: string
    static $gtype: GObject.GType<OptionMenu>

    // Constructors of WebKit-6.0.WebKit.OptionMenu

    constructor(config?: OptionMenu.ConstructorProperties) 
    _init(config?: OptionMenu.ConstructorProperties): void
}

export module PointerLockPermissionRequest {

    // Constructor properties interface

    export interface ConstructorProperties extends PermissionRequest.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface PointerLockPermissionRequest extends PermissionRequest {

    // Class property signals of WebKit-6.0.WebKit.PointerLockPermissionRequest

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class PointerLockPermissionRequest extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.PointerLockPermissionRequest

    static name: string
    static $gtype: GObject.GType<PointerLockPermissionRequest>

    // Constructors of WebKit-6.0.WebKit.PointerLockPermissionRequest

    constructor(config?: PointerLockPermissionRequest.ConstructorProperties) 
    _init(config?: PointerLockPermissionRequest.ConstructorProperties): void
}

export module PolicyDecision {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface PolicyDecision {

    // Own fields of WebKit-6.0.WebKit.PolicyDecision

    parent_instance: GObject.Object
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
    use_with_policies(policies: WebsitePolicies): void

    // Class property signals of WebKit-6.0.WebKit.PolicyDecision

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class PolicyDecision extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.PolicyDecision

    static name: string
    static $gtype: GObject.GType<PolicyDecision>

    // Constructors of WebKit-6.0.WebKit.PolicyDecision

    constructor(config?: PolicyDecision.ConstructorProperties) 
    _init(config?: PolicyDecision.ConstructorProperties): void
}

export module PrintOperation {

    // Signal callback interfaces

    /**
     * Signal callback interface for `failed`
     */
    export interface FailedSignalCallback {
        ($obj: PrintOperation, error: GLib.Error): void
    }

    /**
     * Signal callback interface for `finished`
     */
    export interface FinishedSignalCallback {
        ($obj: PrintOperation): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

export interface PrintOperation {

    // Own properties of WebKit-6.0.WebKit.PrintOperation

    /**
     * The initial #GtkPageSetup for the print operation.
     */
    page_setup: Gtk.PageSetup
    /**
     * The initial #GtkPrintSettings for the print operation.
     */
    print_settings: Gtk.PrintSettings
    /**
     * The #WebKitWebView that will be printed.
     */
    readonly web_view: WebView

    // Owm methods of WebKit-6.0.WebKit.PrintOperation

    /**
     * Return the current page setup of `print_operation`.
     * 
     * It returns %NULL until
     * either webkit_print_operation_set_page_setup() or webkit_print_operation_run_dialog()
     * have been called.
     * @returns the current #GtkPageSetup of @print_operation.
     */
    get_page_setup(): Gtk.PageSetup
    /**
     * Return the current print settings of `print_operation`.
     * 
     * It returns %NULL until
     * either webkit_print_operation_set_print_settings() or webkit_print_operation_run_dialog()
     * have been called.
     * @returns the current #GtkPrintSettings of @print_operation.
     */
    get_print_settings(): Gtk.PrintSettings
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
    run_dialog(parent: Gtk.Window | null): PrintOperationResponse
    /**
     * Set the current page setup of `print_operation`.
     * 
     * Current page setup is used for the
     * initial values of the print dialog when webkit_print_operation_run_dialog() is called.
     * @param page_setup a #GtkPageSetup to set
     */
    set_page_setup(page_setup: Gtk.PageSetup): void
    /**
     * Set the current print settings of `print_operation`.
     * 
     * Set the current print settings of `print_operation`. Current print settings are used for
     * the initial values of the print dialog when webkit_print_operation_run_dialog() is called.
     * @param print_settings a #GtkPrintSettings to set
     */
    set_print_settings(print_settings: Gtk.PrintSettings): void

    // Own signals of WebKit-6.0.WebKit.PrintOperation

    connect(sigName: "failed", callback: PrintOperation.FailedSignalCallback): number
    connect_after(sigName: "failed", callback: PrintOperation.FailedSignalCallback): number
    emit(sigName: "failed", error: GLib.Error, ...args: any[]): void
    connect(sigName: "finished", callback: PrintOperation.FinishedSignalCallback): number
    connect_after(sigName: "finished", callback: PrintOperation.FinishedSignalCallback): number
    emit(sigName: "finished", ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.PrintOperation

    connect(sigName: "notify::page-setup", callback: (($obj: PrintOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-setup", callback: (($obj: PrintOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page-setup", ...args: any[]): void
    connect(sigName: "notify::print-settings", callback: (($obj: PrintOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-settings", callback: (($obj: PrintOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::print-settings", ...args: any[]): void
    connect(sigName: "notify::web-view", callback: (($obj: PrintOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::web-view", callback: (($obj: PrintOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::web-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class PrintOperation extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.PrintOperation

    static name: string
    static $gtype: GObject.GType<PrintOperation>

    // Constructors of WebKit-6.0.WebKit.PrintOperation

    constructor(config?: PrintOperation.ConstructorProperties) 
    /**
     * Create a new #WebKitPrintOperation to print `web_view` contents.
     * @constructor 
     * @param web_view a #WebKitWebView
     * @returns a new #WebKitPrintOperation.
     */
    constructor(web_view: WebView) 
    /**
     * Create a new #WebKitPrintOperation to print `web_view` contents.
     * @constructor 
     * @param web_view a #WebKitWebView
     * @returns a new #WebKitPrintOperation.
     */
    static new(web_view: WebView): PrintOperation
    _init(config?: PrintOperation.ConstructorProperties): void
}

export module ResponsePolicyDecision {

    // Constructor properties interface

    export interface ConstructorProperties extends PolicyDecision.ConstructorProperties {
    }

}

export interface ResponsePolicyDecision {

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
    get_request(): URIRequest
    /**
     * Gets the value of the #WebKitResponsePolicyDecision:response property.
     * @returns The URI response that is associated with this policy decision.
     */
    get_response(): URIResponse
    /**
     * Gets whether the request is the main frame main resource
     * @returns %TRUE if the request is the main frame main resouce or %FALSE otherwise
     */
    is_main_frame_main_resource(): boolean
    /**
     * Gets whether the MIME type of the response can be displayed in the #WebKitWebView.
     * 
     * Gets whether the MIME type of the response can be displayed in the #WebKitWebView
     * that triggered this policy decision request. See also webkit_web_view_can_show_mime_type().
     * @returns %TRUE if the MIME type of the response is supported or %FALSE otherwise
     */
    is_mime_type_supported(): boolean

    // Class property signals of WebKit-6.0.WebKit.ResponsePolicyDecision

    connect(sigName: "notify::request", callback: (($obj: ResponsePolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request", callback: (($obj: ResponsePolicyDecision, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::request", ...args: any[]): void
    connect(sigName: "notify::response", callback: (($obj: ResponsePolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::response", callback: (($obj: ResponsePolicyDecision, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::response", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class ResponsePolicyDecision extends PolicyDecision {

    // Own properties of WebKit-6.0.WebKit.ResponsePolicyDecision

    static name: string
    static $gtype: GObject.GType<ResponsePolicyDecision>

    // Constructors of WebKit-6.0.WebKit.ResponsePolicyDecision

    constructor(config?: ResponsePolicyDecision.ConstructorProperties) 
    _init(config?: ResponsePolicyDecision.ConstructorProperties): void
}

export module SecurityManager {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SecurityManager {

    // Owm methods of WebKit-6.0.WebKit.SecurityManager

    /**
     * Register `scheme` as a CORS (Cross-origin resource sharing) enabled scheme.
     * 
     * This means that CORS requests are allowed. See W3C CORS specification
     * http://www.w3.org/TR/cors/.
     * @param scheme a URI scheme
     */
    register_uri_scheme_as_cors_enabled(scheme: string | null): void
    /**
     * Register `scheme` as a display isolated scheme.
     * 
     * This means that pages cannot
     * display these URIs unless they are from the same scheme.
     * @param scheme a URI scheme
     */
    register_uri_scheme_as_display_isolated(scheme: string | null): void
    /**
     * Register `scheme` as an empty document scheme.
     * 
     * This means that
     * they are allowed to commit synchronously.
     * @param scheme a URI scheme
     */
    register_uri_scheme_as_empty_document(scheme: string | null): void
    /**
     * Register `scheme` as a local scheme.
     * 
     * This means that other non-local pages
     * cannot link to or access URIs of this scheme.
     * @param scheme a URI scheme
     */
    register_uri_scheme_as_local(scheme: string | null): void
    /**
     * Register `scheme` as a no-access scheme.
     * 
     * This means that pages loaded
     * with this URI scheme cannot access pages loaded with any other URI scheme.
     * @param scheme a URI scheme
     */
    register_uri_scheme_as_no_access(scheme: string | null): void
    /**
     * Register `scheme` as a secure scheme.
     * 
     * This means that mixed
     * content warnings won't be generated for this scheme when
     * included by an HTTPS page.
     * @param scheme a URI scheme
     */
    register_uri_scheme_as_secure(scheme: string | null): void
    /**
     * Whether `scheme` is considered as a CORS enabled scheme.
     * 
     * See also webkit_security_manager_register_uri_scheme_as_cors_enabled().
     * @param scheme a URI scheme
     * @returns %TRUE if @scheme is a CORS enabled scheme or %FALSE otherwise.
     */
    uri_scheme_is_cors_enabled(scheme: string | null): boolean
    /**
     * Whether `scheme` is considered as a display isolated scheme.
     * 
     * See also webkit_security_manager_register_uri_scheme_as_display_isolated().
     * @param scheme a URI scheme
     * @returns %TRUE if @scheme is a display isolated scheme or %FALSE otherwise.
     */
    uri_scheme_is_display_isolated(scheme: string | null): boolean
    /**
     * Whether `scheme` is considered as an empty document scheme.
     * 
     * See also webkit_security_manager_register_uri_scheme_as_empty_document().
     * @param scheme a URI scheme
     * @returns %TRUE if @scheme is an empty document scheme or %FALSE otherwise.
     */
    uri_scheme_is_empty_document(scheme: string | null): boolean
    /**
     * Whether `scheme` is considered as a local scheme.
     * 
     * See also webkit_security_manager_register_uri_scheme_as_local().
     * @param scheme a URI scheme
     * @returns %TRUE if @scheme is a local scheme or %FALSE otherwise.
     */
    uri_scheme_is_local(scheme: string | null): boolean
    /**
     * Whether `scheme` is considered as a no-access scheme.
     * 
     * See also webkit_security_manager_register_uri_scheme_as_no_access().
     * @param scheme a URI scheme
     * @returns %TRUE if @scheme is a no-access scheme or %FALSE otherwise.
     */
    uri_scheme_is_no_access(scheme: string | null): boolean
    /**
     * Whether `scheme` is considered as a secure scheme.
     * 
     * See also webkit_security_manager_register_uri_scheme_as_secure().
     * @param scheme a URI scheme
     * @returns %TRUE if @scheme is a secure scheme or %FALSE otherwise.
     */
    uri_scheme_is_secure(scheme: string | null): boolean

    // Class property signals of WebKit-6.0.WebKit.SecurityManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class SecurityManager extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.SecurityManager

    static name: string
    static $gtype: GObject.GType<SecurityManager>

    // Constructors of WebKit-6.0.WebKit.SecurityManager

    constructor(config?: SecurityManager.ConstructorProperties) 
    _init(config?: SecurityManager.ConstructorProperties): void
}

export module Settings {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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
         * Determines whether a site can load favicons irrespective
         * of the value of #WebKitSettings:auto-load-images.
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

export interface Settings {

    // Own properties of WebKit-6.0.WebKit.Settings

    /**
     * Whether file access is allowed from file URLs. By default, when
     * something is loaded in a #WebKitWebView using a file URI, cross
     * origin requests to other file resources are not allowed. This
     * setting allows you to change that behaviour, so that it would be
     * possible to do a XMLHttpRequest of a local file, for example.
     */
    allow_file_access_from_file_urls: boolean
    /**
     * Determine whether it's allowed to create and run modal dialogs
     * from a #WebKitWebView through JavaScript with
     * <function>window.showModalDialog</function>. If it's set to
     * %FALSE, the associated #WebKitWebView won't be able to create
     * new modal dialogs, so not even the #WebKitWebView::create
     * signal will be emitted.
     */
    allow_modal_dialogs: boolean
    /**
     * Whether or not the top frame is allowed to navigate to data URLs. It is disabled by default
     * due to the risk it poses when loading untrusted URLs, with data URLs being used in scamming
     * and phishing attacks. In contrast, a scenario where it could be enabled could be an app that
     * embeds a WebView and you have control of the pages being show instead of a generic browser.
     */
    allow_top_navigation_to_data_urls: boolean
    /**
     * Whether or not JavaScript running in the context of a file scheme URL
     * should be allowed to access content from any origin.  By default, when
     * something is loaded in a #WebKitWebView using a file scheme URL,
     * access to the local file system and arbitrary local storage is not
     * allowed. This setting allows you to change that behaviour, so that
     * it would be possible to use local storage, for example.
     */
    allow_universal_access_from_file_urls: boolean
    /**
     * Determines whether images should be automatically loaded or not.
     * On devices where network bandwidth is of concern, it might be
     * useful to turn this property off.
     */
    auto_load_images: boolean
    /**
     * The font family used as the default for content using a cursive font.
     */
    cursive_font_family: string | null
    /**
     * The default text charset used when interpreting content with an unspecified charset.
     */
    default_charset: string | null
    /**
     * The font family to use as the default for content that does not specify a font.
     */
    default_font_family: string | null
    /**
     * The default font size in pixels to use for content displayed if
     * no font size is specified.
     */
    default_font_size: number
    /**
     * The default font size in pixels to use for content displayed in
     * monospace font if no font size is specified.
     */
    default_monospace_font_size: number
    /**
     * Enable or disable support for Web Security on pages.
     * 
     * This setting disables the same-origin policy, allowing every website full control over
     * all other websites. This is for use in special environments where you wish to disable
     * all security and allow websites to hack each other. It is impossible to use this setting
     * securely.
     */
    disable_web_security: boolean
    /**
     * Whether to draw compositing borders and repaint counters on layers drawn
     * with accelerated compositing. This is useful for debugging issues related
     * to web content that is composited with the GPU.
     */
    draw_compositing_indicators: boolean
    /**
     * Enable or disable horizontal swipe gesture for back-forward navigation.
     */
    enable_back_forward_navigation_gestures: boolean
    /**
     * Whether to enable accessibility enhanced keyboard navigation.
     */
    enable_caret_browsing: boolean
    /**
     * Determines whether or not developer tools, such as the Web Inspector, are enabled.
     */
    enable_developer_extras: boolean
    /**
     * Determines whether or not to prefetch domain names. DNS prefetching attempts
     * to resolve domain names before a user tries to follow a link.
     */
    enable_dns_prefetching: boolean
    /**
     * Enable or disable support for Encrypted Media API on pages.
     * EncryptedMedia is an experimental JavaScript API for playing encrypted media in HTML.
     * This property will only work as intended if the EncryptedMedia feature is enabled at build time
     * with the ENABLE_ENCRYPTED_MEDIA flag.
     * 
     * See https://www.w3.org/TR/encrypted-media/
     */
    enable_encrypted_media: boolean
    /**
     * Whether to enable the Javascript Fullscreen API. The API
     * allows any HTML element to request fullscreen display. See also
     * the current draft of the spec:
     * http://www.w3.org/TR/fullscreen/
     */
    enable_fullscreen: boolean
    /**
     * Whether to enable HTML5 client-side SQL database support (IndexedDB).
     */
    enable_html5_database: boolean
    /**
     * Whether to enable HTML5 local storage support. Local storage provides
     * simple synchronous storage access.
     * 
     * HTML5 local storage specification is available at
     * http://dev.w3.org/html5/webstorage/.
     */
    enable_html5_local_storage: boolean
    /**
     * Determines whether or not hyperlink auditing is enabled.
     * 
     * The hyperlink auditing specification is available at
     * http://www.whatwg.org/specs/web-apps/current-work/multipage/links.html#hyperlink-auditing.
     */
    enable_hyperlink_auditing: boolean
    /**
     * Determines whether or not JavaScript executes within a page.
     */
    enable_javascript: boolean
    /**
     * Determines whether or not JavaScript markup is allowed in document. When this setting is disabled,
     * all JavaScript-related elements and attributes are removed from the document during parsing. Note that
     * executing JavaScript is still allowed if #WebKitSettings:enable-javascript is %TRUE.
     */
    enable_javascript_markup: boolean
    /**
     * Enable or disable support for media playback on pages. This setting is enabled by
     * default. Disabling it means `<audio>`, `<track>` and `<video>` elements will have
     * playback support disabled.
     */
    enable_media: boolean
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
    enable_media_capabilities: boolean
    /**
     * Enable or disable support for MediaStream on pages. MediaStream
     * is an experimental proposal for allowing web pages to access
     * audio and video devices for capture.
     * 
     * See also http://dev.w3.org/2011/webrtc/editor/getusermedia.html
     */
    enable_media_stream: boolean
    /**
     * Enable or disable support for MediaSource on pages. MediaSource
     * extends HTMLMediaElement to allow JavaScript to generate media
     * streams for playback.
     * 
     * See also http://www.w3.org/TR/media-source/
     */
    enable_mediasource: boolean
    /**
     * Enable or disable the Mock Capture Devices. Those are fake
     * Microphone and Camera devices to be used as MediaStream
     * sources.
     */
    enable_mock_capture_devices: boolean
    /**
     * Whether to enable HTML5 offline web application cache support. Offline
     * web application cache allows web applications to run even when
     * the user is not connected to the network.
     * 
     * HTML5 offline web application specification is available at
     * http://dev.w3.org/html5/spec/offline.html.
     */
    enable_offline_web_application_cache: boolean
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
    enable_page_cache: boolean
    /**
     * Determines whether or not text areas can be resized.
     */
    enable_resizable_text_areas: boolean
    /**
     * Whether to turn on site-specific quirks. Turning this on will
     * tell WebKit to use some site-specific workarounds for
     * better web compatibility. For example, older versions of
     * MediaWiki will incorrectly send to WebKit a CSS file with KHTML
     * workarounds. By turning on site-specific quirks, WebKit will
     * special-case this and other cases to make some specific sites work.
     */
    enable_site_specific_quirks: boolean
    /**
     * Enable or disable smooth scrolling.
     */
    enable_smooth_scrolling: boolean
    /**
     * Whether to enable Spatial Navigation. This feature consists in the ability
     * to navigate between focusable elements in a Web page, such as hyperlinks
     * and form controls, by using Left, Right, Up and Down arrow keys.
     * For example, if an user presses the Right key, heuristics determine whether
     * there is an element they might be trying to reach towards the right, and if
     * there are multiple elements, which element they probably wants.
     */
    enable_spatial_navigation: boolean
    /**
     * Determines whether the tab key cycles through the elements on the page.
     * When this setting is enabled, users will be able to focus the next element
     * in the page by pressing the tab key. If the selected element is editable,
     * then pressing tab key will insert the tab character.
     */
    enable_tabs_to_links: boolean
    /**
     * Enable or disable support for WebAudio on pages. WebAudio is an
     * API for processing and synthesizing audio in web applications
     * 
     * See also https://webaudio.github.io/web-audio-api
     */
    enable_webaudio: boolean
    /**
     * Enable or disable support for WebGL on pages. WebGL enables web
     * content to use an API based on OpenGL ES 2.0.
     */
    enable_webgl: boolean
    /**
     * Enable WebRTC support for loaded pages.
     * 
     * Enabling this setting implies that [property`Settings:`enable-media-stream]
     * will be enabled as well.
     * 
     * See also https://www.w3.org/TR/webrtc/
     */
    enable_webrtc: boolean
    /**
     * Enable or disable writing console messages to stdout. These are messages
     * sent to the console with console.log and related methods.
     */
    enable_write_console_messages_to_stdout: boolean
    /**
     * The font family used as the default for content using a fantasy font.
     */
    fantasy_font_family: string | null
    /**
     * The #WebKitHardwareAccelerationPolicy to decide how to enable and disable
     * hardware acceleration. Disabling hardware acceleration might
     * cause some websites to not render correctly or consume more CPU.
     * 
     * Note that changing this setting might not be possible if hardware acceleration is not
     * supported by the hardware or the system. In that case, you can get the value to know the
     * actual policy being used, but changing the setting will not have any effect.
     */
    hardware_acceleration_policy: HardwareAccelerationPolicy
    /**
     * Whether JavaScript can access the clipboard. The default value is %FALSE. If
     * set to %TRUE, document.execCommand() allows cut, copy and paste commands.
     */
    javascript_can_access_clipboard: boolean
    /**
     * Whether JavaScript can open popup windows automatically without user
     * intervention.
     */
    javascript_can_open_windows_automatically: boolean
    /**
     * Determines whether a site can load favicons irrespective
     * of the value of #WebKitSettings:auto-load-images.
     */
    load_icons_ignoring_image_load_setting: boolean
    /**
     * List of media content types requiring hardware support, split by semicolons (:).
     * For example: 'video/webm; codecs="vp*":video/mp4; codecs="avc*":video/&ast; codecs="av1*"'.
     */
    media_content_types_requiring_hardware_support: string | null
    /**
     * Whether media playback is full-screen only or inline playback is allowed.
     * This is %TRUE by default, so media playback can be inline. Setting it to
     * %FALSE allows specifying that media playback should be always fullscreen.
     */
    media_playback_allows_inline: boolean
    /**
     * Whether a user gesture (such as clicking the play button)
     * would be required to start media playback or load media. This is off
     * by default, so media playback could start automatically.
     * Setting it on requires a gesture by the user to start playback, or to
     * load the media.
     */
    media_playback_requires_user_gesture: boolean
    /**
     * The minimum font size in pixels used to display text. This setting
     * controls the absolute smallest size. Values other than 0 can
     * potentially break page layouts.
     */
    minimum_font_size: number
    /**
     * The font family used as the default for content using a monospace font.
     */
    monospace_font_family: string | null
    /**
     * The font family used as the default for content using a pictograph font.
     */
    pictograph_font_family: string | null
    /**
     * Whether background images should be drawn during printing.
     */
    print_backgrounds: boolean
    /**
     * The font family used as the default for content using a sans-serif font.
     */
    sans_serif_font_family: string | null
    /**
     * The font family used as the default for content using a serif font.
     */
    serif_font_family: string | null
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
    user_agent: string | null
    /**
     * Whether #WebKitWebView:zoom-level affects only the
     * text of the page or all the contents. Other contents containing text
     * like form controls will be also affected by zoom factor when
     * this property is enabled.
     */
    zoom_text_only: boolean

    // Owm methods of WebKit-6.0.WebKit.Settings

    /**
     * Get the #WebKitSettings:allow-file-access-from-file-urls property.
     * @returns %TRUE If file access from file URLs is allowed or %FALSE otherwise.
     */
    get_allow_file_access_from_file_urls(): boolean
    /**
     * Get the #WebKitSettings:allow-modal-dialogs property.
     * @returns %TRUE if it's allowed to create and run modal dialogs or %FALSE otherwise.
     */
    get_allow_modal_dialogs(): boolean
    /**
     * Get the #WebKitSettings:allow-top-navigation-to-data-urls property.
     * @returns %TRUE If navigation to data URLs from the top frame is allowed or %FALSE\ otherwise.
     */
    get_allow_top_navigation_to_data_urls(): boolean
    /**
     * Get the #WebKitSettings:allow-universal-access-from-file-urls property.
     * @returns %TRUE If universal access from file URLs is allowed or %FALSE otherwise.
     */
    get_allow_universal_access_from_file_urls(): boolean
    /**
     * Get the #WebKitSettings:auto-load-images property.
     * @returns %TRUE If auto loading of images is enabled or %FALSE otherwise.
     */
    get_auto_load_images(): boolean
    /**
     * Gets the #WebKitSettings:cursive-font-family property.
     * @returns The default font family used to display content marked with cursive font.
     */
    get_cursive_font_family(): string | null
    /**
     * Gets the #WebKitSettings:default-charset property.
     * @returns Default charset.
     */
    get_default_charset(): string | null
    /**
     * Gets the #WebKitSettings:default-font-family property.
     * @returns The default font family used to display content that does not specify a font.
     */
    get_default_font_family(): string | null
    /**
     * Gets the #WebKitSettings:default-font-size property.
     * @returns The default font size, in pixels.
     */
    get_default_font_size(): number
    /**
     * Gets the #WebKitSettings:default-monospace-font-size property.
     * @returns Default monospace font size, in pixels.
     */
    get_default_monospace_font_size(): number
    /**
     * Get the #WebKitSettings:disable-web-security property.
     * @returns %TRUE If web security support is disabled or %FALSE otherwise.
     */
    get_disable_web_security(): boolean
    /**
     * Get the #WebKitSettings:draw-compositing-indicators property.
     * @returns %TRUE If compositing borders are drawn or %FALSE otherwise.
     */
    get_draw_compositing_indicators(): boolean
    /**
     * Get the #WebKitSettings:enable-back-forward-navigation-gestures property.
     * @returns %TRUE if horizontal swipe gesture will trigger back-forward navigaiton or %FALSE otherwise.
     */
    get_enable_back_forward_navigation_gestures(): boolean
    /**
     * Get the #WebKitSettings:enable-caret-browsing property.
     * @returns %TRUE If caret browsing is enabled or %FALSE otherwise.
     */
    get_enable_caret_browsing(): boolean
    /**
     * Get the #WebKitSettings:enable-developer-extras property.
     * @returns %TRUE If developer extras is enabled or %FALSE otherwise.
     */
    get_enable_developer_extras(): boolean
    /**
     * Get the #WebKitSettings:enable-dns-prefetching property.
     * @returns %TRUE If DNS prefetching is enabled or %FALSE otherwise.
     */
    get_enable_dns_prefetching(): boolean
    /**
     * Get the #WebKitSettings:enable-encrypted-media property.
     * @returns %TRUE if EncryptedMedia support is enabled or %FALSE otherwise.
     */
    get_enable_encrypted_media(): boolean
    /**
     * Get the #WebKitSettings:enable-fullscreen property.
     * @returns %TRUE If fullscreen support is enabled or %FALSE otherwise.
     */
    get_enable_fullscreen(): boolean
    /**
     * Get the #WebKitSettings:enable-html5-database property.
     * @returns %TRUE if IndexedDB support is enabled or %FALSE otherwise.
     */
    get_enable_html5_database(): boolean
    /**
     * Get the #WebKitSettings:enable-html5-local-storage property.
     * @returns %TRUE If HTML5 local storage support is enabled or %FALSE otherwise.
     */
    get_enable_html5_local_storage(): boolean
    /**
     * Get the #WebKitSettings:enable-hyperlink-auditing property.
     * @returns %TRUE If hyper link auditing is enabled or %FALSE otherwise.
     */
    get_enable_hyperlink_auditing(): boolean
    /**
     * Get the #WebKitSettings:enable-javascript property.
     * @returns %TRUE If JavaScript is enabled or %FALSE otherwise.
     */
    get_enable_javascript(): boolean
    /**
     * Get the #WebKitSettings:enable-javascript-markup property.
     * @returns %TRUE if JavaScript markup is enabled or %FALSE otherwise.
     */
    get_enable_javascript_markup(): boolean
    /**
     * Get the #WebKitSettings:enable-media property.
     * @returns %TRUE if media support is enabled or %FALSE otherwise.
     */
    get_enable_media(): boolean
    /**
     * Get the #WebKitSettings:enable-media-capabilities property.
     * @returns %TRUE if MediaCapabilities support is enabled or %FALSE otherwise.
     */
    get_enable_media_capabilities(): boolean
    /**
     * Get the #WebKitSettings:enable-media-stream property.
     * @returns %TRUE If mediastream support is enabled or %FALSE otherwise.
     */
    get_enable_media_stream(): boolean
    /**
     * Get the #WebKitSettings:enable-mediasource property.
     * @returns %TRUE If MediaSource support is enabled or %FALSE otherwise.
     */
    get_enable_mediasource(): boolean
    /**
     * Get the #WebKitSettings:enable-mock-capture-devices property.
     * @returns %TRUE If mock capture devices is enabled or %FALSE otherwise.
     */
    get_enable_mock_capture_devices(): boolean
    /**
     * Get the #WebKitSettings:enable-offline-web-application-cache property.
     * @returns %TRUE If HTML5 offline web application cache support is enabled or %FALSE otherwise.
     */
    get_enable_offline_web_application_cache(): boolean
    /**
     * Get the #WebKitSettings:enable-page-cache property.
     * @returns %TRUE if page cache enabled or %FALSE otherwise.
     */
    get_enable_page_cache(): boolean
    /**
     * Get the #WebKitSettings:enable-resizable-text-areas property.
     * @returns %TRUE If text areas can be resized or %FALSE otherwise.
     */
    get_enable_resizable_text_areas(): boolean
    /**
     * Get the #WebKitSettings:enable-site-specific-quirks property.
     * @returns %TRUE if site specific quirks are enabled or %FALSE otherwise.
     */
    get_enable_site_specific_quirks(): boolean
    /**
     * Get the #WebKitSettings:enable-smooth-scrolling property.
     * @returns %TRUE if smooth scrolling is enabled or %FALSE otherwise.
     */
    get_enable_smooth_scrolling(): boolean
    /**
     * Get the #WebKitSettings:enable-spatial-navigation property.
     * @returns %TRUE If HTML5 spatial navigation support is enabled or %FALSE otherwise.
     */
    get_enable_spatial_navigation(): boolean
    /**
     * Get the #WebKitSettings:enable-tabs-to-links property.
     * @returns %TRUE If tabs to link is enabled or %FALSE otherwise.
     */
    get_enable_tabs_to_links(): boolean
    /**
     * Get the #WebKitSettings:enable-webaudio property.
     * @returns %TRUE If webaudio support is enabled or %FALSE otherwise.
     */
    get_enable_webaudio(): boolean
    /**
     * Get the #WebKitSettings:enable-webgl property.
     * @returns %TRUE If WebGL support is enabled or %FALSE otherwise.
     */
    get_enable_webgl(): boolean
    /**
     * Get the [property`Settings:`enable-webrtc] property.
     * @returns %TRUE If WebRTC support is enabled or %FALSE otherwise.
     */
    get_enable_webrtc(): boolean
    /**
     * Get the #WebKitSettings:enable-write-console-messages-to-stdout property.
     * @returns %TRUE if writing console messages to stdout is enabled or %FALSE otherwise.
     */
    get_enable_write_console_messages_to_stdout(): boolean
    /**
     * Gets the #WebKitSettings:fantasy-font-family property.
     * @returns The default font family used to display content marked with fantasy font.
     */
    get_fantasy_font_family(): string | null
    /**
     * Get the #WebKitSettings:hardware-acceleration-policy property.
     * @returns a #WebKitHardwareAccelerationPolicy
     */
    get_hardware_acceleration_policy(): HardwareAccelerationPolicy
    /**
     * Get the #WebKitSettings:javascript-can-access-clipboard property.
     * @returns %TRUE If javascript-can-access-clipboard is enabled or %FALSE otherwise.
     */
    get_javascript_can_access_clipboard(): boolean
    /**
     * Get the #WebKitSettings:javascript-can-open-windows-automatically property.
     * @returns %TRUE If JavaScript can open window automatically or %FALSE otherwise.
     */
    get_javascript_can_open_windows_automatically(): boolean
    /**
     * Get the #WebKitSettings:load-icons-ignoring-image-load-setting property.
     * @returns %TRUE If site icon can be loaded irrespective of image loading preference or %FALSE otherwise.
     */
    get_load_icons_ignoring_image_load_setting(): boolean
    /**
     * Gets the #WebKitSettings:media-content-types-requiring-hardware-support property.
     * @returns Media content types requiring hardware support, or %NULL.
     */
    get_media_content_types_requiring_hardware_support(): string | null
    /**
     * Get the #WebKitSettings:media-playback-allows-inline property.
     * @returns %TRUE If inline playback is allowed for media    or %FALSE if only fullscreen playback is allowed.
     */
    get_media_playback_allows_inline(): boolean
    /**
     * Get the #WebKitSettings:media-playback-requires-user-gesture property.
     * @returns %TRUE If an user gesture is needed to play or load media    or %FALSE if no user gesture is needed.
     */
    get_media_playback_requires_user_gesture(): boolean
    /**
     * Gets the #WebKitSettings:minimum-font-size property.
     * @returns Minimum font size, in pixels.
     */
    get_minimum_font_size(): number
    /**
     * Gets the #WebKitSettings:monospace-font-family property.
     * @returns Default font family used to display content marked with monospace font.
     */
    get_monospace_font_family(): string | null
    /**
     * Gets the #WebKitSettings:pictograph-font-family property.
     * @returns The default font family used to display content marked with pictograph font.
     */
    get_pictograph_font_family(): string | null
    /**
     * Get the #WebKitSettings:print-backgrounds property.
     * @returns %TRUE If background images should be printed or %FALSE otherwise.
     */
    get_print_backgrounds(): boolean
    /**
     * Gets the #WebKitSettings:sans-serif-font-family property.
     * @returns The default font family used to display content marked with sans-serif font.
     */
    get_sans_serif_font_family(): string | null
    /**
     * Gets the #WebKitSettings:serif-font-family property.
     * @returns The default font family used to display content marked with serif font.
     */
    get_serif_font_family(): string | null
    /**
     * Get the #WebKitSettings:user-agent property.
     * @returns The current value of the user-agent property.
     */
    get_user_agent(): string | null
    /**
     * Get the #WebKitSettings:zoom-text-only property.
     * @returns %TRUE If zoom level of the view should only affect the text    or %FALSE if all view contents should be scaled.
     */
    get_zoom_text_only(): boolean
    /**
     * Set the #WebKitSettings:allow-file-access-from-file-urls property.
     * @param allowed Value to be set
     */
    set_allow_file_access_from_file_urls(allowed: boolean): void
    /**
     * Set the #WebKitSettings:allow-modal-dialogs property.
     * @param allowed Value to be set
     */
    set_allow_modal_dialogs(allowed: boolean): void
    /**
     * Set the #WebKitSettings:allow-top-navigation-to-data-urls property.
     * @param allowed Value to be set
     */
    set_allow_top_navigation_to_data_urls(allowed: boolean): void
    /**
     * Set the #WebKitSettings:allow-universal-access-from-file-urls property.
     * @param allowed Value to be set
     */
    set_allow_universal_access_from_file_urls(allowed: boolean): void
    /**
     * Set the #WebKitSettings:auto-load-images property.
     * @param enabled Value to be set
     */
    set_auto_load_images(enabled: boolean): void
    /**
     * Set the #WebKitSettings:cursive-font-family property.
     * @param cursive_font_family the new default cursive font family
     */
    set_cursive_font_family(cursive_font_family: string | null): void
    /**
     * Set the #WebKitSettings:default-charset property.
     * @param default_charset default charset to be set
     */
    set_default_charset(default_charset: string | null): void
    /**
     * Set the #WebKitSettings:default-font-family property.
     * @param default_font_family the new default font family
     */
    set_default_font_family(default_font_family: string | null): void
    /**
     * Set the #WebKitSettings:default-font-size property.
     * @param font_size default font size to be set in pixels
     */
    set_default_font_size(font_size: number): void
    /**
     * Set the #WebKitSettings:default-monospace-font-size property.
     * @param font_size default monospace font size to be set in pixels
     */
    set_default_monospace_font_size(font_size: number): void
    /**
     * Set the #WebKitSettings:disable-web-security property.
     * @param disabled Value to be set
     */
    set_disable_web_security(disabled: boolean): void
    /**
     * Set the #WebKitSettings:draw-compositing-indicators property.
     * @param enabled Value to be set
     */
    set_draw_compositing_indicators(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-back-forward-navigation-gestures property.
     * @param enabled value to be set
     */
    set_enable_back_forward_navigation_gestures(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-caret-browsing property.
     * @param enabled Value to be set
     */
    set_enable_caret_browsing(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-developer-extras property.
     * @param enabled Value to be set
     */
    set_enable_developer_extras(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-dns-prefetching property.
     * @param enabled Value to be set
     */
    set_enable_dns_prefetching(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-encrypted-media property.
     * @param enabled Value to be set
     */
    set_enable_encrypted_media(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-fullscreen property.
     * @param enabled Value to be set
     */
    set_enable_fullscreen(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-html5-database property.
     * @param enabled Value to be set
     */
    set_enable_html5_database(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-html5-local-storage property.
     * @param enabled Value to be set
     */
    set_enable_html5_local_storage(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-hyperlink-auditing property.
     * @param enabled Value to be set
     */
    set_enable_hyperlink_auditing(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-javascript property.
     * @param enabled Value to be set
     */
    set_enable_javascript(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-javascript-markup property.
     * @param enabled Value to be set
     */
    set_enable_javascript_markup(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-media property.
     * @param enabled Value to be set
     */
    set_enable_media(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-media-capabilities property.
     * @param enabled Value to be set
     */
    set_enable_media_capabilities(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-media-stream property.
     * @param enabled Value to be set
     */
    set_enable_media_stream(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-mediasource property.
     * @param enabled Value to be set
     */
    set_enable_mediasource(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-mock-capture-devices property.
     * @param enabled Value to be set
     */
    set_enable_mock_capture_devices(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-offline-web-application-cache property.
     * @param enabled Value to be set
     */
    set_enable_offline_web_application_cache(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-page-cache property.
     * @param enabled Value to be set
     */
    set_enable_page_cache(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-resizable-text-areas property.
     * @param enabled Value to be set
     */
    set_enable_resizable_text_areas(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-site-specific-quirks property.
     * @param enabled Value to be set
     */
    set_enable_site_specific_quirks(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-smooth-scrolling property.
     * @param enabled Value to be set
     */
    set_enable_smooth_scrolling(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-spatial-navigation property.
     * @param enabled Value to be set
     */
    set_enable_spatial_navigation(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-tabs-to-links property.
     * @param enabled Value to be set
     */
    set_enable_tabs_to_links(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-webaudio property.
     * @param enabled Value to be set
     */
    set_enable_webaudio(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-webgl property.
     * @param enabled Value to be set
     */
    set_enable_webgl(enabled: boolean): void
    /**
     * Set the [property`Settings:`enable-webrtc] property.
     * 
     * Setting this property to %TRUE implies the media-stream web-setting will also be enabled.
     * @param enabled Value to be set
     */
    set_enable_webrtc(enabled: boolean): void
    /**
     * Set the #WebKitSettings:enable-write-console-messages-to-stdout property.
     * @param enabled Value to be set
     */
    set_enable_write_console_messages_to_stdout(enabled: boolean): void
    /**
     * Set the #WebKitSettings:fantasy-font-family property.
     * @param fantasy_font_family the new default fantasy font family
     */
    set_fantasy_font_family(fantasy_font_family: string | null): void
    /**
     * Set the #WebKitSettings:hardware-acceleration-policy property.
     * @param policy a #WebKitHardwareAccelerationPolicy
     */
    set_hardware_acceleration_policy(policy: HardwareAccelerationPolicy): void
    /**
     * Set the #WebKitSettings:javascript-can-access-clipboard property.
     * @param enabled Value to be set
     */
    set_javascript_can_access_clipboard(enabled: boolean): void
    /**
     * Set the #WebKitSettings:javascript-can-open-windows-automatically property.
     * @param enabled Value to be set
     */
    set_javascript_can_open_windows_automatically(enabled: boolean): void
    /**
     * Set the #WebKitSettings:load-icons-ignoring-image-load-setting property.
     * @param enabled Value to be set
     */
    set_load_icons_ignoring_image_load_setting(enabled: boolean): void
    /**
     * Set the #WebKitSettings:media-content-types-requiring-hardware-support property.
     * @param content_types list of media content types requiring hardware support split by semicolons (:) or %NULL to use the default value.
     */
    set_media_content_types_requiring_hardware_support(content_types: string | null): void
    /**
     * Set the #WebKitSettings:media-playback-allows-inline property.
     * @param enabled Value to be set
     */
    set_media_playback_allows_inline(enabled: boolean): void
    /**
     * Set the #WebKitSettings:media-playback-requires-user-gesture property.
     * @param enabled Value to be set
     */
    set_media_playback_requires_user_gesture(enabled: boolean): void
    /**
     * Set the #WebKitSettings:minimum-font-size property.
     * @param font_size minimum font size to be set in pixels
     */
    set_minimum_font_size(font_size: number): void
    /**
     * Set the #WebKitSettings:monospace-font-family property.
     * @param monospace_font_family the new default monospace font family
     */
    set_monospace_font_family(monospace_font_family: string | null): void
    /**
     * Set the #WebKitSettings:pictograph-font-family property.
     * @param pictograph_font_family the new default pictograph font family
     */
    set_pictograph_font_family(pictograph_font_family: string | null): void
    /**
     * Set the #WebKitSettings:print-backgrounds property.
     * @param print_backgrounds Value to be set
     */
    set_print_backgrounds(print_backgrounds: boolean): void
    /**
     * Set the #WebKitSettings:sans-serif-font-family property.
     * @param sans_serif_font_family the new default sans-serif font family
     */
    set_sans_serif_font_family(sans_serif_font_family: string | null): void
    /**
     * Set the #WebKitSettings:serif-font-family property.
     * @param serif_font_family the new default serif font family
     */
    set_serif_font_family(serif_font_family: string | null): void
    /**
     * Set the #WebKitSettings:user-agent property.
     * @param user_agent The new custom user agent string or %NULL to use the default user agent
     */
    set_user_agent(user_agent: string | null): void
    /**
     * Set the #WebKitSettings:user-agent property by appending the application details.
     * 
     * Set the #WebKitSettings:user-agent property by appending the application details to the default user
     * agent. If no application name or version is given, the default user agent used will be used. If only
     * the version is given, the default engine version is used with the given application name.
     * @param application_name The application name used for the user agent or %NULL to use the default user agent.
     * @param application_version The application version for the user agent or %NULL to user the default version.
     */
    set_user_agent_with_application_details(application_name: string | null, application_version: string | null): void
    /**
     * Set the #WebKitSettings:zoom-text-only property.
     * @param zoom_text_only Value to be set
     */
    set_zoom_text_only(zoom_text_only: boolean): void

    // Class property signals of WebKit-6.0.WebKit.Settings

    connect(sigName: "notify::allow-file-access-from-file-urls", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-file-access-from-file-urls", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-file-access-from-file-urls", ...args: any[]): void
    connect(sigName: "notify::allow-modal-dialogs", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-modal-dialogs", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-modal-dialogs", ...args: any[]): void
    connect(sigName: "notify::allow-top-navigation-to-data-urls", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-top-navigation-to-data-urls", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-top-navigation-to-data-urls", ...args: any[]): void
    connect(sigName: "notify::allow-universal-access-from-file-urls", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-universal-access-from-file-urls", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-universal-access-from-file-urls", ...args: any[]): void
    connect(sigName: "notify::auto-load-images", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-load-images", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::auto-load-images", ...args: any[]): void
    connect(sigName: "notify::cursive-font-family", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursive-font-family", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursive-font-family", ...args: any[]): void
    connect(sigName: "notify::default-charset", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-charset", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-charset", ...args: any[]): void
    connect(sigName: "notify::default-font-family", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-font-family", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-font-family", ...args: any[]): void
    connect(sigName: "notify::default-font-size", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-font-size", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-font-size", ...args: any[]): void
    connect(sigName: "notify::default-monospace-font-size", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-monospace-font-size", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-monospace-font-size", ...args: any[]): void
    connect(sigName: "notify::disable-web-security", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-web-security", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disable-web-security", ...args: any[]): void
    connect(sigName: "notify::draw-compositing-indicators", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draw-compositing-indicators", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::draw-compositing-indicators", ...args: any[]): void
    connect(sigName: "notify::enable-back-forward-navigation-gestures", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-back-forward-navigation-gestures", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-back-forward-navigation-gestures", ...args: any[]): void
    connect(sigName: "notify::enable-caret-browsing", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-caret-browsing", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-caret-browsing", ...args: any[]): void
    connect(sigName: "notify::enable-developer-extras", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-developer-extras", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-developer-extras", ...args: any[]): void
    connect(sigName: "notify::enable-dns-prefetching", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-dns-prefetching", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-dns-prefetching", ...args: any[]): void
    connect(sigName: "notify::enable-encrypted-media", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-encrypted-media", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-encrypted-media", ...args: any[]): void
    connect(sigName: "notify::enable-fullscreen", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-fullscreen", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-fullscreen", ...args: any[]): void
    connect(sigName: "notify::enable-html5-database", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-html5-database", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-html5-database", ...args: any[]): void
    connect(sigName: "notify::enable-html5-local-storage", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-html5-local-storage", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-html5-local-storage", ...args: any[]): void
    connect(sigName: "notify::enable-hyperlink-auditing", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-hyperlink-auditing", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-hyperlink-auditing", ...args: any[]): void
    connect(sigName: "notify::enable-javascript", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-javascript", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-javascript", ...args: any[]): void
    connect(sigName: "notify::enable-javascript-markup", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-javascript-markup", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-javascript-markup", ...args: any[]): void
    connect(sigName: "notify::enable-media", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-media", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-media", ...args: any[]): void
    connect(sigName: "notify::enable-media-capabilities", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-media-capabilities", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-media-capabilities", ...args: any[]): void
    connect(sigName: "notify::enable-media-stream", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-media-stream", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-media-stream", ...args: any[]): void
    connect(sigName: "notify::enable-mediasource", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-mediasource", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-mediasource", ...args: any[]): void
    connect(sigName: "notify::enable-mock-capture-devices", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-mock-capture-devices", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-mock-capture-devices", ...args: any[]): void
    connect(sigName: "notify::enable-offline-web-application-cache", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-offline-web-application-cache", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-offline-web-application-cache", ...args: any[]): void
    connect(sigName: "notify::enable-page-cache", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-page-cache", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-page-cache", ...args: any[]): void
    connect(sigName: "notify::enable-resizable-text-areas", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-resizable-text-areas", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-resizable-text-areas", ...args: any[]): void
    connect(sigName: "notify::enable-site-specific-quirks", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-site-specific-quirks", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-site-specific-quirks", ...args: any[]): void
    connect(sigName: "notify::enable-smooth-scrolling", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-smooth-scrolling", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-smooth-scrolling", ...args: any[]): void
    connect(sigName: "notify::enable-spatial-navigation", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-spatial-navigation", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-spatial-navigation", ...args: any[]): void
    connect(sigName: "notify::enable-tabs-to-links", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-tabs-to-links", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-tabs-to-links", ...args: any[]): void
    connect(sigName: "notify::enable-webaudio", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-webaudio", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-webaudio", ...args: any[]): void
    connect(sigName: "notify::enable-webgl", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-webgl", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-webgl", ...args: any[]): void
    connect(sigName: "notify::enable-webrtc", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-webrtc", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-webrtc", ...args: any[]): void
    connect(sigName: "notify::enable-write-console-messages-to-stdout", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-write-console-messages-to-stdout", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-write-console-messages-to-stdout", ...args: any[]): void
    connect(sigName: "notify::fantasy-font-family", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fantasy-font-family", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fantasy-font-family", ...args: any[]): void
    connect(sigName: "notify::hardware-acceleration-policy", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hardware-acceleration-policy", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hardware-acceleration-policy", ...args: any[]): void
    connect(sigName: "notify::javascript-can-access-clipboard", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::javascript-can-access-clipboard", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::javascript-can-access-clipboard", ...args: any[]): void
    connect(sigName: "notify::javascript-can-open-windows-automatically", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::javascript-can-open-windows-automatically", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::javascript-can-open-windows-automatically", ...args: any[]): void
    connect(sigName: "notify::load-icons-ignoring-image-load-setting", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::load-icons-ignoring-image-load-setting", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::load-icons-ignoring-image-load-setting", ...args: any[]): void
    connect(sigName: "notify::media-content-types-requiring-hardware-support", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-content-types-requiring-hardware-support", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::media-content-types-requiring-hardware-support", ...args: any[]): void
    connect(sigName: "notify::media-playback-allows-inline", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-playback-allows-inline", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::media-playback-allows-inline", ...args: any[]): void
    connect(sigName: "notify::media-playback-requires-user-gesture", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-playback-requires-user-gesture", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::media-playback-requires-user-gesture", ...args: any[]): void
    connect(sigName: "notify::minimum-font-size", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minimum-font-size", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minimum-font-size", ...args: any[]): void
    connect(sigName: "notify::monospace-font-family", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monospace-font-family", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::monospace-font-family", ...args: any[]): void
    connect(sigName: "notify::pictograph-font-family", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pictograph-font-family", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pictograph-font-family", ...args: any[]): void
    connect(sigName: "notify::print-backgrounds", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-backgrounds", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::print-backgrounds", ...args: any[]): void
    connect(sigName: "notify::sans-serif-font-family", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sans-serif-font-family", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sans-serif-font-family", ...args: any[]): void
    connect(sigName: "notify::serif-font-family", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serif-font-family", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::serif-font-family", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: "notify::zoom-text-only", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-text-only", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::zoom-text-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class Settings extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.Settings

    static name: string
    static $gtype: GObject.GType<Settings>

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
    static font_size_to_pixels(points: number): number
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
    static font_size_to_points(pixels: number): number
}

export module URIRequest {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of WebKit-6.0.WebKit.URIRequest

        /**
         * The URI to which the request will be made.
         */
        uri?: string | null
    }

}

export interface URIRequest {

    // Own properties of WebKit-6.0.WebKit.URIRequest

    /**
     * The URI to which the request will be made.
     */
    uri: string | null

    // Owm methods of WebKit-6.0.WebKit.URIRequest

    /**
     * Get the HTTP headers of a #WebKitURIRequest as a #SoupMessageHeaders.
     * @returns a #SoupMessageHeaders with the HTTP headers of @request    or %NULL if @request is not an HTTP request.
     */
    get_http_headers(): Soup.MessageHeaders
    /**
     * Get the HTTP method of the #WebKitURIRequest.
     * @returns the HTTP method of the #WebKitURIRequest or %NULL if @request is not    an HTTP request.
     */
    get_http_method(): string | null
    /**
     * Obtains the request URI.
     * @returns request URI, as a string.
     */
    get_uri(): string | null
    /**
     * Set the URI of `request`
     * @param uri an URI
     */
    set_uri(uri: string | null): void

    // Class property signals of WebKit-6.0.WebKit.URIRequest

    connect(sigName: "notify::uri", callback: (($obj: URIRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: URIRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class URIRequest extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.URIRequest

    static name: string
    static $gtype: GObject.GType<URIRequest>

    // Constructors of WebKit-6.0.WebKit.URIRequest

    constructor(config?: URIRequest.ConstructorProperties) 
    /**
     * Creates a new #WebKitURIRequest for the given URI.
     * @constructor 
     * @param uri an URI
     * @returns a new #WebKitURIRequest
     */
    constructor(uri: string | null) 
    /**
     * Creates a new #WebKitURIRequest for the given URI.
     * @constructor 
     * @param uri an URI
     * @returns a new #WebKitURIRequest
     */
    static new(uri: string | null): URIRequest
    _init(config?: URIRequest.ConstructorProperties): void
}

export module URIResponse {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface URIResponse {

    // Own properties of WebKit-6.0.WebKit.URIResponse

    /**
     * The expected content length of the response.
     */
    readonly content_length: number
    /**
     * The HTTP headers of the response, or %NULL if the response is not an HTTP response.
     */
    readonly http_headers: Soup.MessageHeaders
    /**
     * The MIME type of the response.
     */
    readonly mime_type: string | null
    /**
     * The status code of the response as returned by the server.
     */
    readonly status_code: number
    /**
     * The suggested filename for the URI response.
     */
    readonly suggested_filename: string | null
    /**
     * The URI for which the response was made.
     */
    readonly uri: string | null

    // Owm methods of WebKit-6.0.WebKit.URIResponse

    /**
     * Get the expected content length of the #WebKitURIResponse.
     * 
     * It can be 0 if the server provided an incorrect or missing Content-Length.
     * @returns the expected content length of @response.
     */
    get_content_length(): number
    /**
     * Get the HTTP headers of a #WebKitURIResponse as a #SoupMessageHeaders.
     * @returns a #SoupMessageHeaders with the HTTP headers of @response    or %NULL if @response is not an HTTP response.
     */
    get_http_headers(): Soup.MessageHeaders
    /**
     * Gets the MIME type of the response.
     * @returns MIME type, as a string.
     */
    get_mime_type(): string | null
    /**
     * Get the status code of the #WebKitURIResponse.
     * 
     * Get the status code of the #WebKitURIResponse as returned by
     * the server. It will normally be a #SoupKnownStatusCode, for
     * example %SOUP_STATUS_OK, though the server can respond with any
     * unsigned integer.
     * @returns the status code of @response
     */
    get_status_code(): number
    /**
     * Get the suggested filename for `response`.
     * 
     * Get the suggested filename for `response,` as specified by
     * the 'Content-Disposition' HTTP header, or %NULL if it's not
     * present.
     * @returns the suggested filename or %NULL if    the 'Content-Disposition' HTTP header is not present.
     */
    get_suggested_filename(): string | null
    /**
     * Gets the URI which resulted in the response.
     * @returns response URI, as a string.
     */
    get_uri(): string | null

    // Class property signals of WebKit-6.0.WebKit.URIResponse

    connect(sigName: "notify::content-length", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-length", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-length", ...args: any[]): void
    connect(sigName: "notify::http-headers", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-headers", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::http-headers", ...args: any[]): void
    connect(sigName: "notify::mime-type", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mime-type", ...args: any[]): void
    connect(sigName: "notify::status-code", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-code", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status-code", ...args: any[]): void
    connect(sigName: "notify::suggested-filename", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suggested-filename", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::suggested-filename", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class URIResponse extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.URIResponse

    static name: string
    static $gtype: GObject.GType<URIResponse>

    // Constructors of WebKit-6.0.WebKit.URIResponse

    constructor(config?: URIResponse.ConstructorProperties) 
    _init(config?: URIResponse.ConstructorProperties): void
}

export module URISchemeRequest {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface URISchemeRequest {

    // Owm methods of WebKit-6.0.WebKit.URISchemeRequest

    /**
     * Finish a #WebKitURISchemeRequest by setting the contents of the request and its mime type.
     * @param stream a #GInputStream to read the contents of the request
     * @param stream_length the length of the stream or -1 if not known
     * @param content_type the content type of the stream or %NULL if not known
     */
    finish(stream: Gio.InputStream, stream_length: number, content_type: string | null): void
    /**
     * Finish a #WebKitURISchemeRequest with a #GError.
     * @param error a #GError that will be passed to the #WebKitWebView
     */
    finish_error(error: GLib.Error): void
    /**
     * Finish a #WebKitURISchemeRequest by returning a #WebKitURISchemeResponse
     * @param response a #WebKitURISchemeResponse
     */
    finish_with_response(response: URISchemeResponse): void
    /**
     * Get the #SoupMessageHeaders of the request.
     * @returns the #SoupMessageHeaders of the @request.
     */
    get_http_headers(): Soup.MessageHeaders
    /**
     * Get the HTTP method of the `request`.
     * @returns the HTTP method of the @request
     */
    get_http_method(): string | null
    /**
     * Get the URI path of `request`.
     * @returns the URI path of @request
     */
    get_path(): string | null
    /**
     * Get the URI scheme of `request`.
     * @returns the URI scheme of @request
     */
    get_scheme(): string | null
    /**
     * Get the URI of `request`.
     * @returns the full URI of @request
     */
    get_uri(): string | null
    /**
     * Get the #WebKitWebView that initiated the request.
     * @returns the #WebKitWebView that initiated @request.
     */
    get_web_view(): WebView

    // Class property signals of WebKit-6.0.WebKit.URISchemeRequest

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class URISchemeRequest extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.URISchemeRequest

    static name: string
    static $gtype: GObject.GType<URISchemeRequest>

    // Constructors of WebKit-6.0.WebKit.URISchemeRequest

    constructor(config?: URISchemeRequest.ConstructorProperties) 
    _init(config?: URISchemeRequest.ConstructorProperties): void
}

export module URISchemeResponse {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

export interface URISchemeResponse {

    // Own properties of WebKit-6.0.WebKit.URISchemeResponse

    /**
     * The input stream to read from.
     */
    readonly stream: Gio.InputStream
    /**
     * The input stream length in bytes, `-1` for unknown length.
     */
    readonly stream_length: number

    // Owm methods of WebKit-6.0.WebKit.URISchemeResponse

    /**
     * Sets the content type for the `response`
     * @param content_type the content type of the stream
     */
    set_content_type(content_type: string | null): void
    /**
     * Assign the provided #SoupMessageHeaders to the response.
     * 
     * `headers` need to be of the type %SOUP_MESSAGE_HEADERS_RESPONSE.
     * Any existing headers will be overwritten.
     * @param headers the HTTP headers to be set
     */
    set_http_headers(headers: Soup.MessageHeaders): void
    /**
     * Sets the status code and reason phrase for the `response`.
     * 
     * If `status_code` is a known value and `reason_phrase` is %NULL, the `reason_phrase` will be set automatically.
     * @param status_code the HTTP status code to be returned
     * @param reason_phrase a reason phrase
     */
    set_status(status_code: number, reason_phrase: string | null): void

    // Class property signals of WebKit-6.0.WebKit.URISchemeResponse

    connect(sigName: "notify::stream", callback: (($obj: URISchemeResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stream", callback: (($obj: URISchemeResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stream", ...args: any[]): void
    connect(sigName: "notify::stream-length", callback: (($obj: URISchemeResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stream-length", callback: (($obj: URISchemeResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stream-length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class URISchemeResponse extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.URISchemeResponse

    static name: string
    static $gtype: GObject.GType<URISchemeResponse>

    // Constructors of WebKit-6.0.WebKit.URISchemeResponse

    constructor(config?: URISchemeResponse.ConstructorProperties) 
    /**
     * Create a new #WebKitURISchemeResponse
     * @constructor 
     * @param input_stream a #GInputStream to read the contents of the request
     * @param stream_length the length of the stream or -1 if not known
     * @returns the newly created #WebKitURISchemeResponse.
     */
    constructor(input_stream: Gio.InputStream, stream_length: number) 
    /**
     * Create a new #WebKitURISchemeResponse
     * @constructor 
     * @param input_stream a #GInputStream to read the contents of the request
     * @param stream_length the length of the stream or -1 if not known
     * @returns the newly created #WebKitURISchemeResponse.
     */
    static new(input_stream: Gio.InputStream, stream_length: number): URISchemeResponse
    _init(config?: URISchemeResponse.ConstructorProperties): void
}

export module UserContentFilterStore {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of WebKit-6.0.WebKit.UserContentFilterStore

        /**
         * The directory used for filter storage. This path is used as the base
         * directory where user content filters are stored on disk.
         */
        path?: string | null
    }

}

export interface UserContentFilterStore {

    // Own properties of WebKit-6.0.WebKit.UserContentFilterStore

    /**
     * The directory used for filter storage. This path is used as the base
     * directory where user content filters are stored on disk.
     */
    readonly path: string | null

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
    fetch_identifiers(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an asynchronous fetch of the list of stored filters.
     * 
     * Finishes an asynchronous fetch of the list of identifiers for the stored filters previously
     * started with webkit_user_content_filter_store_fetch_identifiers().
     * @param result a #GAsyncResult
     * @returns a %NULL-terminated list of filter identifiers.
     */
    fetch_identifiers_finish(result: Gio.AsyncResult): string[]
    /**
     * Gets the storage path for user content filters.
     * @returns path, as a string.
     */
    get_path(): string | null
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
    load(identifier: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an asynchronous filter load previously started with
     * webkit_user_content_filter_store_load().
     * @param result a #GAsyncResult
     * @returns a #WebKitUserContentFilter, or %NULL if the load failed
     */
    load_finish(result: Gio.AsyncResult): UserContentFilter
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
    remove(identifier: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an asynchronous filter removal previously started with
     * webkit_user_content_filter_store_remove().
     * @param result a #GAsyncResult
     * @returns whether the removal was successful
     */
    remove_finish(result: Gio.AsyncResult): boolean
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
    save(identifier: string | null, source: GLib.Bytes, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an asynchronous filter save previously started with
     * webkit_user_content_filter_store_save().
     * @param result a #GAsyncResult
     * @returns a #WebKitUserContentFilter, or %NULL if saving failed
     */
    save_finish(result: Gio.AsyncResult): UserContentFilter
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
    save_from_file(identifier: string | null, file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes and asynchronous filter save previously started with
     * webkit_user_content_filter_store_save_from_file().
     * @param result a #GAsyncResult
     * @returns a #WebKitUserContentFilter, or %NULL if saving failed.
     */
    save_from_file_finish(result: Gio.AsyncResult): UserContentFilter

    // Class property signals of WebKit-6.0.WebKit.UserContentFilterStore

    connect(sigName: "notify::path", callback: (($obj: UserContentFilterStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: UserContentFilterStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class UserContentFilterStore extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.UserContentFilterStore

    static name: string
    static $gtype: GObject.GType<UserContentFilterStore>

    // Constructors of WebKit-6.0.WebKit.UserContentFilterStore

    constructor(config?: UserContentFilterStore.ConstructorProperties) 
    /**
     * Create a new #WebKitUserContentFilterStore to manipulate filters stored at `storage_path`.
     * 
     * The path must point to a local filesystem, and will be created if needed.
     * @constructor 
     * @param storage_path path where data for filters will be stored on disk
     * @returns a newly created #WebKitUserContentFilterStore
     */
    constructor(storage_path: string | null) 
    /**
     * Create a new #WebKitUserContentFilterStore to manipulate filters stored at `storage_path`.
     * 
     * The path must point to a local filesystem, and will be created if needed.
     * @constructor 
     * @param storage_path path where data for filters will be stored on disk
     * @returns a newly created #WebKitUserContentFilterStore
     */
    static new(storage_path: string | null): UserContentFilterStore
    _init(config?: UserContentFilterStore.ConstructorProperties): void
}

export module UserContentManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `script-message-received`
     */
    export interface ScriptMessageReceivedSignalCallback {
        ($obj: UserContentManager, js_result: JavascriptResult): void
    }

    /**
     * Signal callback interface for `script-message-with-reply-received`
     */
    export interface ScriptMessageWithReplyReceivedSignalCallback {
        ($obj: UserContentManager, js_result: JavascriptResult, reply: ScriptMessageReply): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface UserContentManager {

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
    add_filter(filter: UserContentFilter): void
    /**
     * Adds a #WebKitUserScript to the given #WebKitUserContentManager.
     * 
     * The same #WebKitUserScript can be reused with multiple
     * #WebKitUserContentManager instances.
     * @param script A #WebKitUserScript
     */
    add_script(script: UserScript): void
    /**
     * Adds a #WebKitUserStyleSheet to the given #WebKitUserContentManager.
     * 
     * The same #WebKitUserStyleSheet can be reused with multiple
     * #WebKitUserContentManager instances.
     * @param stylesheet A #WebKitUserStyleSheet
     */
    add_style_sheet(stylesheet: UserStyleSheet): void
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
     * @param name Name of the script message channel `world_name` (nullable): the name of a #WebKitScriptWorld
     * @param world_name 
     * @returns %TRUE if message handler was registered successfully, or %FALSE otherwise.
     */
    register_script_message_handler(name: string | null, world_name: string | null): boolean
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
     * @param world_name 
     * @returns %TRUE if message handler was registered successfully, or %FALSE otherwise.
     */
    register_script_message_handler_with_reply(name: string | null, world_name: string | null): boolean
    /**
     * Removes all content filters from the given #WebKitUserContentManager.
     */
    remove_all_filters(): void
    /**
     * Removes all user scripts from the given #WebKitUserContentManager
     * 
     * See also webkit_user_content_manager_remove_script().
     */
    remove_all_scripts(): void
    /**
     * Removes all user style sheets from the given #WebKitUserContentManager.
     */
    remove_all_style_sheets(): void
    /**
     * Removes a filter from the given #WebKitUserContentManager.
     * 
     * Since 2.24
     * @param filter A #WebKitUserContentFilter
     */
    remove_filter(filter: UserContentFilter): void
    /**
     * Removes a filter by the given identifier.
     * 
     * Removes a filter from the given #WebKitUserContentManager given the
     * identifier of a #WebKitUserContentFilter as returned by
     * webkit_user_content_filter_get_identifier().
     * @param filter_id Filter identifier
     */
    remove_filter_by_id(filter_id: string | null): void
    /**
     * Removes a #WebKitUserScript from the given #WebKitUserContentManager.
     * 
     * See also webkit_user_content_manager_remove_all_scripts().
     * @param script A #WebKitUserScript
     */
    remove_script(script: UserScript): void
    /**
     * Removes a #WebKitUserStyleSheet from the given #WebKitUserContentManager.
     * 
     * See also webkit_user_content_manager_remove_all_style_sheets().
     * @param stylesheet A #WebKitUserStyleSheet
     */
    remove_style_sheet(stylesheet: UserStyleSheet): void
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
     * @param world_name the name of a #WebKitScriptWorld
     */
    unregister_script_message_handler(name: string | null, world_name: string | null): void

    // Own signals of WebKit-6.0.WebKit.UserContentManager

    connect(sigName: "script-message-received", callback: UserContentManager.ScriptMessageReceivedSignalCallback): number
    connect_after(sigName: "script-message-received", callback: UserContentManager.ScriptMessageReceivedSignalCallback): number
    emit(sigName: "script-message-received", js_result: JavascriptResult, ...args: any[]): void
    connect(sigName: "script-message-with-reply-received", callback: UserContentManager.ScriptMessageWithReplyReceivedSignalCallback): number
    connect_after(sigName: "script-message-with-reply-received", callback: UserContentManager.ScriptMessageWithReplyReceivedSignalCallback): number
    emit(sigName: "script-message-with-reply-received", js_result: JavascriptResult, reply: ScriptMessageReply, ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.UserContentManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class UserContentManager extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.UserContentManager

    static name: string
    static $gtype: GObject.GType<UserContentManager>

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

export module UserMediaPermissionRequest {

    // Constructor properties interface

    export interface ConstructorProperties extends PermissionRequest.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface UserMediaPermissionRequest extends PermissionRequest {

    // Own properties of WebKit-6.0.WebKit.UserMediaPermissionRequest

    /**
     * Whether the media device to which the permission was requested has a microphone or not.
     */
    readonly is_for_audio_device: boolean
    /**
     * Whether the media device to which the permission was requested has a video capture capability or not.
     */
    readonly is_for_video_device: boolean

    // Class property signals of WebKit-6.0.WebKit.UserMediaPermissionRequest

    connect(sigName: "notify::is-for-audio-device", callback: (($obj: UserMediaPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-for-audio-device", callback: (($obj: UserMediaPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-for-audio-device", ...args: any[]): void
    connect(sigName: "notify::is-for-video-device", callback: (($obj: UserMediaPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-for-video-device", callback: (($obj: UserMediaPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-for-video-device", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class UserMediaPermissionRequest extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.UserMediaPermissionRequest

    static name: string
    static $gtype: GObject.GType<UserMediaPermissionRequest>

    // Constructors of WebKit-6.0.WebKit.UserMediaPermissionRequest

    constructor(config?: UserMediaPermissionRequest.ConstructorProperties) 
    _init(config?: UserMediaPermissionRequest.ConstructorProperties): void
}

export module UserMessage {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {

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

export interface UserMessage {

    // Own properties of WebKit-6.0.WebKit.UserMessage

    /**
     * The UNIX file descriptors of the user message.
     */
    readonly fd_list: Gio.UnixFDList
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

    // Owm methods of WebKit-6.0.WebKit.UserMessage

    /**
     * Get the `message` list of file descritpor.
     * @returns the message list of file descriptors
     */
    get_fd_list(): Gio.UnixFDList | null
    /**
     * Get the `message` name.
     * @returns the message name
     */
    get_name(): string | null
    /**
     * Get the `message` parameters.
     * @returns the message parameters
     */
    get_parameters(): GLib.Variant | null
    /**
     * Send a reply to an user message.
     * 
     * If `reply` is floating, it's consumed.
     * You can only send a reply to a #WebKitUserMessage that has been
     * received.
     * @param reply a #WebKitUserMessage to send as reply
     */
    send_reply(reply: UserMessage): void

    // Class property signals of WebKit-6.0.WebKit.UserMessage

    connect(sigName: "notify::fd-list", callback: (($obj: UserMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fd-list", callback: (($obj: UserMessage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fd-list", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: UserMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: UserMessage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: (($obj: UserMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: UserMessage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Message that can be sent between the UI process and web extensions.
 * 
 * A WebKitUserMessage is a message that can be used for the communication between the UI process
 * and web extensions. A WebKitUserMessage always has a name, and it can also include parameters and
 * UNIX file descriptors. Messages can be sent from a #WebKitWebContext to all #WebKitWebExtension<!-- -->s,
 * from a #WebKitWebExtension to its corresponding #WebKitWebContext, and from a #WebKitWebView to its
 * corresponding #WebKitWebPage (and vice versa). One to one messages can be replied to directly with
 * webkit_user_message_send_reply().
 * @class 
 */
export class UserMessage extends GObject.InitiallyUnowned {

    // Own properties of WebKit-6.0.WebKit.UserMessage

    static name: string
    static $gtype: GObject.GType<UserMessage>

    // Constructors of WebKit-6.0.WebKit.UserMessage

    constructor(config?: UserMessage.ConstructorProperties) 
    /**
     * Create a new #WebKitUserMessage with `name`.
     * @constructor 
     * @param name the message name
     * @param parameters the message parameters as a #GVariant, or %NULL
     * @returns the newly created #WebKitUserMessage object.
     */
    constructor(name: string | null, parameters: GLib.Variant | null) 
    /**
     * Create a new #WebKitUserMessage with `name`.
     * @constructor 
     * @param name the message name
     * @param parameters the message parameters as a #GVariant, or %NULL
     * @returns the newly created #WebKitUserMessage object.
     */
    static new(name: string | null, parameters: GLib.Variant | null): UserMessage
    /**
     * Create a new #WebKitUserMessage including also a list of UNIX file descriptors to be sent.
     * @constructor 
     * @param name the message name
     * @param parameters the message parameters as a #GVariant
     * @param fd_list the message file descriptors
     * @returns the newly created #WebKitUserMessage object.
     */
    static new_with_fd_list(name: string | null, parameters: GLib.Variant | null, fd_list: Gio.UnixFDList | null): UserMessage
    _init(config?: UserMessage.ConstructorProperties): void
}

export module WebContext {

    // Signal callback interfaces

    /**
     * Signal callback interface for `automation-started`
     */
    export interface AutomationStartedSignalCallback {
        ($obj: WebContext, session: AutomationSession): void
    }

    /**
     * Signal callback interface for `initialize-notification-permissions`
     */
    export interface InitializeNotificationPermissionsSignalCallback {
        ($obj: WebContext): void
    }

    /**
     * Signal callback interface for `initialize-web-extensions`
     */
    export interface InitializeWebExtensionsSignalCallback {
        ($obj: WebContext): void
    }

    /**
     * Signal callback interface for `user-message-received`
     */
    export interface UserMessageReceivedSignalCallback {
        ($obj: WebContext, message: UserMessage): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

export interface WebContext {

    // Own properties of WebKit-6.0.WebKit.WebContext

    /**
     * The #WebKitMemoryPressureSettings applied to the web processes created by this context.
     */
    readonly memory_pressure_settings: MemoryPressureSettings
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
    readonly time_zone_override: string | null

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
     * @param read_only if %TRUE the path will be read-only
     */
    add_path_to_sandbox(path: string, read_only: boolean): void
    /**
     * Returns the current cache model.
     * 
     * For more information about this
     * value check the documentation of the function
     * webkit_web_context_set_cache_model().
     * @returns the current #WebKitCacheModel
     */
    get_cache_model(): CacheModel
    /**
     * Get the #WebKitGeolocationManager of `context`.
     * @returns the #WebKitGeolocationManager of @context.
     */
    get_geolocation_manager(): GeolocationManager
    /**
     * Get the #WebKitNetworkSession used for automation sessions started in `context`.
     * @returns a #WebKitNetworkSession, or %NULL if automation is not enabled
     */
    get_network_session_for_automation(): NetworkSession | null
    /**
     * Get the #WebKitSecurityManager of `context`.
     * @returns the #WebKitSecurityManager of @context.
     */
    get_security_manager(): SecurityManager
    /**
     * Get whether spell checking feature is currently enabled.
     * @returns %TRUE If spell checking is enabled, or %FALSE otherwise.
     */
    get_spell_checking_enabled(): boolean
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
    get_spell_checking_languages(): string[]
    /**
     * Get the #WebKitWebContext:time-zone-override property.
     */
    get_time_zone_override(): string | null
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
    initialize_notification_permissions(allowed_origins: SecurityOrigin[], disallowed_origins: SecurityOrigin[]): void
    /**
     * Get whether automation is allowed in `context`.
     * 
     * See also webkit_web_context_set_automation_allowed().
     * @returns %TRUE if automation is allowed or %FALSE otherwise.
     */
    is_automation_allowed(): boolean
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
    register_uri_scheme(scheme: string | null, callback: URISchemeRequestCallback): void
    /**
     * Send `message` to all #WebKitWebExtension<!-- -->s associated to `context`.
     * 
     * If `message` is floating, it's consumed.
     * @param message a #WebKitUserMessage
     */
    send_message_to_all_extensions(message: UserMessage): void
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
    set_automation_allowed(allowed: boolean): void
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
    set_cache_model(cache_model: CacheModel): void
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
    set_preferred_languages(languages: string[] | null): void
    /**
     * Enable or disable the spell checking feature.
     * @param enabled Value to be set
     */
    set_spell_checking_enabled(enabled: boolean): void
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
    set_spell_checking_languages(languages: string[]): void
    /**
     * Set the directory where WebKit will look for Web Extensions.
     * 
     * This method must be called before loading anything in this context,
     * otherwise it will not have any effect. You can connect to
     * #WebKitWebContext::initialize-web-extensions to call this method
     * before anything is loaded.
     * @param directory the directory to add
     */
    set_web_extensions_directory(directory: string | null): void
    /**
     * Set user data to be passed to Web Extensions on initialization.
     * 
     * The data will be passed to the
     * #WebKitWebExtensionInitializeWithUserDataFunction.
     * This method must be called before loading anything in this context,
     * otherwise it will not have any effect. You can connect to
     * #WebKitWebContext::initialize-web-extensions to call this method
     * before anything is loaded.
     * @param user_data a #GVariant
     */
    set_web_extensions_initialization_user_data(user_data: GLib.Variant): void

    // Own virtual methods of WebKit-6.0.WebKit.WebContext

    vfunc_automation_started(session: AutomationSession): void
    vfunc_initialize_notification_permissions(): void
    vfunc_initialize_web_extensions(): void
    vfunc_user_message_received(message: UserMessage): boolean

    // Own signals of WebKit-6.0.WebKit.WebContext

    connect(sigName: "automation-started", callback: WebContext.AutomationStartedSignalCallback): number
    connect_after(sigName: "automation-started", callback: WebContext.AutomationStartedSignalCallback): number
    emit(sigName: "automation-started", session: AutomationSession, ...args: any[]): void
    connect(sigName: "initialize-notification-permissions", callback: WebContext.InitializeNotificationPermissionsSignalCallback): number
    connect_after(sigName: "initialize-notification-permissions", callback: WebContext.InitializeNotificationPermissionsSignalCallback): number
    emit(sigName: "initialize-notification-permissions", ...args: any[]): void
    connect(sigName: "initialize-web-extensions", callback: WebContext.InitializeWebExtensionsSignalCallback): number
    connect_after(sigName: "initialize-web-extensions", callback: WebContext.InitializeWebExtensionsSignalCallback): number
    emit(sigName: "initialize-web-extensions", ...args: any[]): void
    connect(sigName: "user-message-received", callback: WebContext.UserMessageReceivedSignalCallback): number
    connect_after(sigName: "user-message-received", callback: WebContext.UserMessageReceivedSignalCallback): number
    emit(sigName: "user-message-received", message: UserMessage, ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.WebContext

    connect(sigName: "notify::memory-pressure-settings", callback: (($obj: WebContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::memory-pressure-settings", callback: (($obj: WebContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::memory-pressure-settings", ...args: any[]): void
    connect(sigName: "notify::time-zone-override", callback: (($obj: WebContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-zone-override", callback: (($obj: WebContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-zone-override", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class WebContext extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.WebContext

    static name: string
    static $gtype: GObject.GType<WebContext>

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
    static get_default(): WebContext
}

export module WebInspector {

    // Signal callback interfaces

    /**
     * Signal callback interface for `attach`
     */
    export interface AttachSignalCallback {
        ($obj: WebInspector): boolean
    }

    /**
     * Signal callback interface for `bring-to-front`
     */
    export interface BringToFrontSignalCallback {
        ($obj: WebInspector): boolean
    }

    /**
     * Signal callback interface for `closed`
     */
    export interface ClosedSignalCallback {
        ($obj: WebInspector): void
    }

    /**
     * Signal callback interface for `detach`
     */
    export interface DetachSignalCallback {
        ($obj: WebInspector): boolean
    }

    /**
     * Signal callback interface for `open-window`
     */
    export interface OpenWindowSignalCallback {
        ($obj: WebInspector): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface WebInspector {

    // Own properties of WebKit-6.0.WebKit.WebInspector

    /**
     * The height that the inspector view should have when it is attached.
     */
    readonly attached_height: number
    /**
     * Whether the `inspector` can be attached to the same window that contains
     * the inspected view.
     */
    readonly can_attach: boolean
    /**
     * The URI that is currently being inspected.
     */
    readonly inspected_uri: string | null

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
    get_attached_height(): number
    /**
     * Whether the `inspector` can be attached to the same window that contains
     * the inspected view.
     * @returns %TRUE if there is enough room for the inspector view inside the     window that contains the inspected view, or %FALSE otherwise.
     */
    get_can_attach(): boolean
    /**
     * Get the URI that is currently being inspected.
     * 
     * This can be %NULL if
     * nothing has been loaded yet in the inspected view, if the inspector
     * has been closed or when inspected view was loaded from a HTML string
     * instead of a URI.
     * @returns the URI that is currently being inspected or %NULL
     */
    get_inspected_uri(): string | null
    /**
     * Get the #WebKitWebViewBase used to display the inspector.
     * 
     * This might be %NULL if the inspector hasn't been loaded yet,
     * or it has been closed.
     * @returns the #WebKitWebViewBase used to display the inspector or %NULL
     */
    get_web_view(): WebViewBase
    /**
     * Whether the `inspector` view is currently attached to the same window that contains
     * the inspected view.
     * @returns %TRUE if @inspector is currently attached or %FALSE otherwise
     */
    is_attached(): boolean
    /**
     * Request `inspector` to be shown.
     */
    show(): void

    // Own signals of WebKit-6.0.WebKit.WebInspector

    connect(sigName: "attach", callback: WebInspector.AttachSignalCallback): number
    connect_after(sigName: "attach", callback: WebInspector.AttachSignalCallback): number
    emit(sigName: "attach", ...args: any[]): void
    connect(sigName: "bring-to-front", callback: WebInspector.BringToFrontSignalCallback): number
    connect_after(sigName: "bring-to-front", callback: WebInspector.BringToFrontSignalCallback): number
    emit(sigName: "bring-to-front", ...args: any[]): void
    connect(sigName: "closed", callback: WebInspector.ClosedSignalCallback): number
    connect_after(sigName: "closed", callback: WebInspector.ClosedSignalCallback): number
    emit(sigName: "closed", ...args: any[]): void
    connect(sigName: "detach", callback: WebInspector.DetachSignalCallback): number
    connect_after(sigName: "detach", callback: WebInspector.DetachSignalCallback): number
    emit(sigName: "detach", ...args: any[]): void
    connect(sigName: "open-window", callback: WebInspector.OpenWindowSignalCallback): number
    connect_after(sigName: "open-window", callback: WebInspector.OpenWindowSignalCallback): number
    emit(sigName: "open-window", ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.WebInspector

    connect(sigName: "notify::attached-height", callback: (($obj: WebInspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-height", callback: (($obj: WebInspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attached-height", ...args: any[]): void
    connect(sigName: "notify::can-attach", callback: (($obj: WebInspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-attach", callback: (($obj: WebInspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-attach", ...args: any[]): void
    connect(sigName: "notify::inspected-uri", callback: (($obj: WebInspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inspected-uri", callback: (($obj: WebInspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inspected-uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class WebInspector extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.WebInspector

    static name: string
    static $gtype: GObject.GType<WebInspector>

    // Constructors of WebKit-6.0.WebKit.WebInspector

    constructor(config?: WebInspector.ConstructorProperties) 
    _init(config?: WebInspector.ConstructorProperties): void
}

export module WebResource {

    // Signal callback interfaces

    /**
     * Signal callback interface for `failed`
     */
    export interface FailedSignalCallback {
        ($obj: WebResource, error: GLib.Error): void
    }

    /**
     * Signal callback interface for `failed-with-tls-errors`
     */
    export interface FailedWithTlsErrorsSignalCallback {
        ($obj: WebResource, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): void
    }

    /**
     * Signal callback interface for `finished`
     */
    export interface FinishedSignalCallback {
        ($obj: WebResource): void
    }

    /**
     * Signal callback interface for `sent-request`
     */
    export interface SentRequestSignalCallback {
        ($obj: WebResource, request: URIRequest, redirected_response: URIResponse): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface WebResource {

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

    // Owm methods of WebKit-6.0.WebKit.WebResource

    /**
     * Asynchronously get the raw data for `resource`.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * webkit_web_resource_get_data_finish() to get the result of the operation.
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_data(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of get_data

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string | null): any | null
    /**
     * Finish an asynchronous operation started with webkit_web_resource_get_data().
     * @param result a #GAsyncResult
     * @returns a    string with the data of @resource, or %NULL in case of error. if @length    is not %NULL, the size of the data will be assigned to it.
     */
    get_data_finish(result: Gio.AsyncResult): Uint8Array
    /**
     * Retrieves the #WebKitURIResponse of the resource load operation.
     * 
     * This method returns %NULL if called before the response
     * is received from the server. You can connect to notify::response
     * signal to be notified when the response is received.
     * @returns the #WebKitURIResponse, or %NULL if     the response hasn't been received yet.
     */
    get_response(): URIResponse
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
    get_uri(): string | null

    // Own signals of WebKit-6.0.WebKit.WebResource

    connect(sigName: "failed", callback: WebResource.FailedSignalCallback): number
    connect_after(sigName: "failed", callback: WebResource.FailedSignalCallback): number
    emit(sigName: "failed", error: GLib.Error, ...args: any[]): void
    connect(sigName: "failed-with-tls-errors", callback: WebResource.FailedWithTlsErrorsSignalCallback): number
    connect_after(sigName: "failed-with-tls-errors", callback: WebResource.FailedWithTlsErrorsSignalCallback): number
    emit(sigName: "failed-with-tls-errors", certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags, ...args: any[]): void
    connect(sigName: "finished", callback: WebResource.FinishedSignalCallback): number
    connect_after(sigName: "finished", callback: WebResource.FinishedSignalCallback): number
    emit(sigName: "finished", ...args: any[]): void
    connect(sigName: "sent-request", callback: WebResource.SentRequestSignalCallback): number
    connect_after(sigName: "sent-request", callback: WebResource.SentRequestSignalCallback): number
    emit(sigName: "sent-request", request: URIRequest, redirected_response: URIResponse, ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.WebResource

    connect(sigName: "notify::response", callback: (($obj: WebResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::response", callback: (($obj: WebResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::response", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: WebResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: WebResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class WebResource extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.WebResource

    static name: string
    static $gtype: GObject.GType<WebResource>

    // Constructors of WebKit-6.0.WebKit.WebResource

    constructor(config?: WebResource.ConstructorProperties) 
    _init(config?: WebResource.ConstructorProperties): void
}

export module WebView {

    // Signal callback interfaces

    /**
     * Signal callback interface for `authenticate`
     */
    export interface AuthenticateSignalCallback {
        ($obj: WebView, request: AuthenticationRequest): boolean
    }

    /**
     * Signal callback interface for `close`
     */
    export interface CloseSignalCallback {
        ($obj: WebView): void
    }

    /**
     * Signal callback interface for `context-menu`
     */
    export interface ContextMenuSignalCallback {
        ($obj: WebView, context_menu: ContextMenu, hit_test_result: HitTestResult): boolean
    }

    /**
     * Signal callback interface for `context-menu-dismissed`
     */
    export interface ContextMenuDismissedSignalCallback {
        ($obj: WebView): void
    }

    /**
     * Signal callback interface for `create`
     */
    export interface CreateSignalCallback {
        ($obj: WebView, navigation_action: NavigationAction): Gtk.Widget
    }

    /**
     * Signal callback interface for `decide-policy`
     */
    export interface DecidePolicySignalCallback {
        ($obj: WebView, decision: PolicyDecision, decision_type: PolicyDecisionType): boolean
    }

    /**
     * Signal callback interface for `enter-fullscreen`
     */
    export interface EnterFullscreenSignalCallback {
        ($obj: WebView): boolean
    }

    /**
     * Signal callback interface for `insecure-content-detected`
     */
    export interface InsecureContentDetectedSignalCallback {
        ($obj: WebView, event: InsecureContentEvent): void
    }

    /**
     * Signal callback interface for `leave-fullscreen`
     */
    export interface LeaveFullscreenSignalCallback {
        ($obj: WebView): boolean
    }

    /**
     * Signal callback interface for `load-changed`
     */
    export interface LoadChangedSignalCallback {
        ($obj: WebView, load_event: LoadEvent): void
    }

    /**
     * Signal callback interface for `load-failed`
     */
    export interface LoadFailedSignalCallback {
        ($obj: WebView, load_event: LoadEvent, failing_uri: string | null, error: GLib.Error): boolean
    }

    /**
     * Signal callback interface for `load-failed-with-tls-errors`
     */
    export interface LoadFailedWithTlsErrorsSignalCallback {
        ($obj: WebView, failing_uri: string | null, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): boolean
    }

    /**
     * Signal callback interface for `mouse-target-changed`
     */
    export interface MouseTargetChangedSignalCallback {
        ($obj: WebView, hit_test_result: HitTestResult, modifiers: number): void
    }

    /**
     * Signal callback interface for `permission-request`
     */
    export interface PermissionRequestSignalCallback {
        ($obj: WebView, request: PermissionRequest): boolean
    }

    /**
     * Signal callback interface for `print`
     */
    export interface PrintSignalCallback {
        ($obj: WebView, print_operation: PrintOperation): boolean
    }

    /**
     * Signal callback interface for `query-permission-state`
     */
    export interface QueryPermissionStateSignalCallback {
        ($obj: WebView, query: PermissionStateQuery): boolean
    }

    /**
     * Signal callback interface for `ready-to-show`
     */
    export interface ReadyToShowSignalCallback {
        ($obj: WebView): void
    }

    /**
     * Signal callback interface for `resource-load-started`
     */
    export interface ResourceLoadStartedSignalCallback {
        ($obj: WebView, resource: WebResource, request: URIRequest): void
    }

    /**
     * Signal callback interface for `run-as-modal`
     */
    export interface RunAsModalSignalCallback {
        ($obj: WebView): void
    }

    /**
     * Signal callback interface for `run-color-chooser`
     */
    export interface RunColorChooserSignalCallback {
        ($obj: WebView, request: ColorChooserRequest): boolean
    }

    /**
     * Signal callback interface for `run-file-chooser`
     */
    export interface RunFileChooserSignalCallback {
        ($obj: WebView, request: FileChooserRequest): boolean
    }

    /**
     * Signal callback interface for `script-dialog`
     */
    export interface ScriptDialogSignalCallback {
        ($obj: WebView, dialog: ScriptDialog): boolean
    }

    /**
     * Signal callback interface for `show-notification`
     */
    export interface ShowNotificationSignalCallback {
        ($obj: WebView, notification: Notification): boolean
    }

    /**
     * Signal callback interface for `show-option-menu`
     */
    export interface ShowOptionMenuSignalCallback {
        ($obj: WebView, menu: OptionMenu, rectangle: Gdk.Rectangle): boolean
    }

    /**
     * Signal callback interface for `submit-form`
     */
    export interface SubmitFormSignalCallback {
        ($obj: WebView, request: FormSubmissionRequest): void
    }

    /**
     * Signal callback interface for `user-message-received`
     */
    export interface UserMessageReceivedSignalCallback {
        ($obj: WebView, message: UserMessage): boolean
    }

    /**
     * Signal callback interface for `web-process-terminated`
     */
    export interface WebProcessTerminatedSignalCallback {
        ($obj: WebView, reason: WebProcessTerminationReason): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, WebViewBase.ConstructorProperties {

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

export interface WebView extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of WebKit-6.0.WebKit.WebView

    /**
     * The #WebKitAutomationBrowsingContextPresentation of #WebKitWebView. This should only be used when
     * creating a new #WebKitWebView as a response to #WebKitAutomationSession::create-web-view
     * signal request. If the new WebView was added to a new tab of current browsing context window
     * %WEBKIT_AUTOMATION_BROWSING_CONTEXT_PRESENTATION_TAB should be used.
     */
    readonly automation_presentation_type: AutomationBrowsingContextPresentation
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
    camera_capture_state: MediaCaptureState
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
    readonly default_content_security_policy: string | null
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
    display_capture_state: MediaCaptureState
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
    readonly estimated_load_progress: number
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
    readonly is_controlled_by_automation: boolean
    /**
     * Whether the #WebKitWebView is currently loading a page. This property becomes
     * %TRUE as soon as a new load operation is requested and before the
     * #WebKitWebView::load-changed signal is emitted with %WEBKIT_LOAD_STARTED and
     * at that point the active URI is the requested one.
     * When the load operation finishes the property is set to %FALSE before
     * #WebKitWebView::load-changed is emitted with %WEBKIT_LOAD_FINISHED.
     */
    readonly is_loading: boolean
    /**
     * Whether the #WebKitWebView audio is muted. When %TRUE, audio is silenced.
     * It may still be playing, i.e. #WebKitWebView:is-playing-audio may be %TRUE.
     */
    is_muted: boolean
    /**
     * Whether the #WebKitWebView is currently playing audio from a page.
     * This property becomes %TRUE as soon as web content starts playing any
     * kind of audio. When a page is no longer playing any kind of sound,
     * the property is set back to %FALSE.
     */
    readonly is_playing_audio: boolean
    /**
     * Whether the web process currently associated to the #WebKitWebView is responsive.
     */
    readonly is_web_process_responsive: boolean
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
    microphone_capture_state: MediaCaptureState
    /**
     * The #WebKitNetworkSession of the view
     */
    readonly network_session: NetworkSession
    /**
     * The identifier of the #WebKitWebPage corresponding to the #WebKitWebView.
     */
    readonly page_id: number
    /**
     * The related #WebKitWebView used when creating the view to share the
     * same web process and network session. This property is not readable
     * because the related web view is only valid during the object construction.
     */
    readonly related_view: WebView
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
    readonly user_content_manager: UserContentManager
    /**
     * The #WebKitWebContext of the view.
     */
    readonly web_context: WebContext
    /**
     * This configures `web_view` to treat the content as a WebExtension.
     * 
     * Note that this refers to the web standard [WebExtensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
     * and not WebKitWebExtensions.
     * 
     * In practice this limits the Content-Security-Policies that are allowed to be set. Some details can be found in
     * [Chrome's documentation](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-migration/#content-security-policy).
     */
    readonly web_extension_mode: WebExtensionMode
    /**
     * The #WebKitWebsitePolicies for the view.
     */
    readonly website_policies: WebsitePolicies
    /**
     * The zoom level of the #WebKitWebView content.
     * See webkit_web_view_set_zoom_level() for more details.
     */
    zoom_level: number

    // Own fields of WebKit-6.0.WebKit.WebView

    parent_instance: WebViewBase & Gtk.Widget & GObject.InitiallyUnowned & GObject.InitiallyUnowned
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
     *     WebKitJavascriptResult *js_result;
     *     JSCValue               *value;
     *     GError                 *error = NULL;
     * 
     *     js_result = webkit_web_view_call_async_javascript_function_finish (WEBKIT_WEB_VIEW (object), result, &error);
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
     *     webkit_web_view_call_async_javascript_function (web_view, body, -1, arguments, NULL, NULL, NULL, web_view_javascript_finished, NULL);
     * }
     * ```
     * @param body the function body
     * @param length length of `body,` or -1 if `body` is a nul-terminated string
     * @param arguments_ a #GVariant with format `a{sv}` storing the function arguments, or %NULL
     * @param world_name the name of a #WebKitScriptWorld or %NULL to use the default
     * @param source_uri the source URI
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the script finished
     */
    call_async_javascript_function(body: string | null, length: number, arguments_: GLib.Variant | null, world_name: string | null, source_uri: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finish an asynchronous operation started with webkit_web_view_call_async_javascript_function().
     * @param result a #GAsyncResult
     * @returns a #WebKitJavascriptResult with the return value of the async function    or %NULL in case of error
     */
    call_async_javascript_function_finish(result: Gio.AsyncResult): JavascriptResult
    /**
     * Asynchronously check if it is possible to execute the given editing command.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * webkit_web_view_can_execute_editing_command_finish() to get the result of the operation.
     * @param command the command to check
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    can_execute_editing_command(command: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finish an asynchronous operation started with webkit_web_view_can_execute_editing_command().
     * @param result a #GAsyncResult
     * @returns %TRUE if the editing command can be executed or %FALSE otherwise
     */
    can_execute_editing_command_finish(result: Gio.AsyncResult): boolean
    /**
     * Determines whether `web_view` has a previous history item.
     * @returns %TRUE if able to move back or %FALSE otherwise.
     */
    can_go_back(): boolean
    /**
     * Determines whether `web_view` has a next history item.
     * @returns %TRUE if able to move forward or %FALSE otherwise.
     */
    can_go_forward(): boolean
    /**
     * Whether or not a MIME type can be displayed in `web_view`.
     * @param mime_type a MIME type
     * @returns %TRUE if the MIME type @mime_type can be displayed or %FALSE otherwise
     */
    can_show_mime_type(mime_type: string | null): boolean
    /**
     * Requests downloading of the specified URI string for `web_view`.
     * @param uri the URI to download
     * @returns a new #WebKitDownload representing    the download operation.
     */
    download_uri(uri: string | null): Download
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
     *     WebKitJavascriptResult *js_result;
     *     JSCValue               *value;
     *     GError                 *error = NULL;
     * 
     *     js_result = webkit_web_view_evaluate_javascript_finish (WEBKIT_WEB_VIEW (object), result, &error);
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
     *     webkit_web_view_evaluate_javascript (web_view, script, -1, NULL, NULL, NULL, web_view_javascript_finished, NULL);
     *     g_free (script);
     * }
     * ```
     * @param script the script to evaluate
     * @param length length of `script,` or -1 if `script` is a nul-terminated string
     * @param world_name the name of a #WebKitScriptWorld or %NULL to use the default
     * @param source_uri the source URI
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the script finished
     */
    evaluate_javascript(script: string | null, length: number, world_name: string | null, source_uri: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finish an asynchronous operation started with webkit_web_view_evaluate_javascript().
     * @param result a #GAsyncResult
     * @returns a #WebKitJavascriptResult with the result of the last executed statement in script    or %NULL in case of error
     */
    evaluate_javascript_finish(result: Gio.AsyncResult): JavascriptResult
    /**
     * Request to execute the given `command` for `web_view`.
     * 
     * You can use webkit_web_view_can_execute_editing_command() to check whether
     * it's possible to execute the command.
     * @param command the command to execute
     */
    execute_editing_command(command: string | null): void
    /**
     * Request to execute the given `command` with `argument` for `web_view`.
     * 
     * You can use
     * webkit_web_view_can_execute_editing_command() to check whether
     * it's possible to execute the command.
     * @param command the command to execute
     * @param argument the command argument
     */
    execute_editing_command_with_argument(command: string | null, argument: string | null): void
    /**
     * Get the presentation type of #WebKitWebView when created for automation.
     * @returns a #WebKitAutomationBrowsingContextPresentation.
     */
    get_automation_presentation_type(): AutomationBrowsingContextPresentation
    /**
     * Obtains the #WebKitBackForwardList associated with the given #WebKitWebView.
     * 
     * The #WebKitBackForwardList is owned by the #WebKitWebView.
     * @returns the #WebKitBackForwardList
     */
    get_back_forward_list(): BackForwardList
    /**
     * Gets the color that is used to draw the `web_view` background.
     * 
     * Gets the color that is used to draw the `web_view` background before
     * the actual contents are rendered.
     * For more information see also webkit_web_view_set_background_color()
     */
    get_background_color(): /* rgba */ Gdk.RGBA
    /**
     * Get the camera capture state of a #WebKitWebView.
     * @returns The #WebKitMediaCaptureState of the camera device. If #WebKitSettings:enable-mediastream is %FALSE, this method will return %WEBKIT_MEDIA_CAPTURE_STATE_NONE.
     */
    get_camera_capture_state(): MediaCaptureState
    /**
     * Gets the web context of `web_view`.
     * @returns the #WebKitWebContext of the view
     */
    get_context(): WebContext
    /**
     * Returns the current custom character encoding name of `web_view`.
     * @returns the current custom character encoding name or %NULL if no    custom character encoding has been set.
     */
    get_custom_charset(): string | null
    /**
     * Gets the configured default Content-Security-Policy.
     * @returns The default policy or %NULL
     */
    get_default_content_security_policy(): string | null
    /**
     * Get the display capture state of a #WebKitWebView.
     * @returns The #WebKitMediaCaptureState of the display device. If #WebKitSettings:enable-mediastream is %FALSE, this method will return %WEBKIT_MEDIA_CAPTURE_STATE_NONE.
     */
    get_display_capture_state(): MediaCaptureState
    /**
     * Gets the web editor state of `web_view`.
     * @returns the #WebKitEditorState of the view
     */
    get_editor_state(): EditorState
    /**
     * Gets the value of the #WebKitWebView:estimated-load-progress property.
     * 
     * You can monitor the estimated progress of a load operation by
     * connecting to the notify::estimated-load-progress signal of `web_view`.
     * @returns an estimate of the of the percent complete for a document     load as a range from 0.0 to 1.0.
     */
    get_estimated_load_progress(): number
    /**
     * Returns favicon currently associated to `web_view`.
     * 
     * Returns favicon currently associated to `web_view,` if any. You can
     * connect to notify::favicon signal of `web_view` to be notified when
     * the favicon is available.
     * @returns the favicon image or %NULL if there's no    icon associated with @web_view.
     */
    get_favicon(): Gdk.Texture
    /**
     * Gets the #WebKitFindController.
     * 
     * Gets the #WebKitFindController that will allow the caller to query
     * the #WebKitWebView for the text to look for.
     * @returns the #WebKitFindController associated to this particular #WebKitWebView.
     */
    get_find_controller(): FindController
    /**
     * Get the #WebKitInputMethodContext currently in use by `web_view`.
     * 
     * Get the #WebKitInputMethodContext currently in use by `web_view,` or %NULL if no input method is being used.
     * @returns a #WebKitInputMethodContext, or %NULL
     */
    get_input_method_context(): InputMethodContext | null
    /**
     * Get the #WebKitWebInspector associated to `web_view`
     * @returns the #WebKitWebInspector of @web_view
     */
    get_inspector(): WebInspector
    /**
     * Gets the mute state of `web_view`.
     * @returns %TRUE if @web_view audio is muted or %FALSE is audio is not muted.
     */
    get_is_muted(): boolean
    /**
     * Get whether the current web process of a #WebKitWebView is responsive.
     * @returns %TRUE if the web process attached to @web_view is responsive, or %FALSE otherwise.
     */
    get_is_web_process_responsive(): boolean
    /**
     * Return the main resource of `web_view`.
     * @returns the main #WebKitWebResource of the view    or %NULL if nothing has been loaded.
     */
    get_main_resource(): WebResource
    /**
     * Get the microphone capture state of a #WebKitWebView.
     * @returns The #WebKitMediaCaptureState of the microphone device. If #WebKitSettings:enable-mediastream is %FALSE, this method will return %WEBKIT_MEDIA_CAPTURE_STATE_NONE.
     */
    get_microphone_capture_state(): MediaCaptureState
    /**
     * Get the #WebKitNetworkSession associated to `web_view`.
     * @returns a #WebKitNetworkSession
     */
    get_network_session(): NetworkSession
    /**
     * Get the identifier of the #WebKitWebPage corresponding to
     * the #WebKitWebView
     * @returns the page ID of @web_view.
     */
    get_page_id(): number
    /**
     * Gets the current session state of `web_view`
     * @returns a #WebKitWebViewSessionState
     */
    get_session_state(): WebViewSessionState
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
    get_settings(): Settings

    // Overloads of get_settings

    /**
     * Gets the settings object holding the settings used for this widget.
     * 
     * Note that this function can only be called when the `GtkWidget`
     * is attached to a toplevel, since the settings object is specific
     * to a particular `GdkDisplay`. If you want to monitor the widget for
     * changes in its settings, connect to the `notify::display` signal.
     * @returns the relevant `GtkSettings` object
     */
    get_settings(): Gtk.Settings
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
    get_snapshot(region: SnapshotRegion, options: SnapshotOptions, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an asynchronous operation started with webkit_web_view_get_snapshot().
     * @param result a #GAsyncResult
     * @returns an image with the retrieved snapshot, or %NULL in case of error.
     */
    get_snapshot_finish(result: Gio.AsyncResult): Gdk.Texture
    /**
     * Gets the value of the #WebKitWebView:title property.
     * 
     * You can connect to notify::title signal of `web_view` to
     * be notified when the title has been received.
     * @returns The main frame document title of @web_view.
     */
    get_title(): string | null
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
    get_tls_info(): [ /* returnType */ boolean, /* certificate */ Gio.TlsCertificate, /* errors */ Gio.TlsCertificateFlags ]
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
    get_uri(): string | null
    /**
     * Gets the user content manager associated to `web_view`.
     * @returns the #WebKitUserContentManager associated with the view
     */
    get_user_content_manager(): UserContentManager
    /**
     * Get the view's #WebKitWebExtensionMode.
     * @returns the #WebKitWebExtensionMode
     */
    get_web_extension_mode(): WebExtensionMode
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
    get_website_policies(): WebsitePolicies
    /**
     * Get the #WebKitWindowProperties object.
     * 
     * Get the #WebKitWindowProperties object containing the properties
     * that the window containing `web_view` should have.
     * @returns the #WebKitWindowProperties of @web_view
     */
    get_window_properties(): WindowProperties
    /**
     * Set the zoom level of `web_view`.
     * 
     * Get the zoom level of `web_view,` i.e. the factor by which the
     * view contents are scaled with respect to their original size.
     * @returns the current zoom level of @web_view
     */
    get_zoom_level(): number
    /**
     * Loads the previous history item.
     * 
     * You can monitor the load operation by connecting to
     * #WebKitWebView::load-changed signal.
     */
    go_back(): void
    /**
     * Loads the next history item.
     * 
     * You can monitor the load operation by connecting to
     * #WebKitWebView::load-changed signal.
     */
    go_forward(): void
    /**
     * Loads the specific history item `list_item`.
     * 
     * You can monitor the load operation by connecting to
     * #WebKitWebView::load-changed signal.
     * @param list_item a #WebKitBackForwardListItem
     */
    go_to_back_forward_list_item(list_item: BackForwardListItem): void
    /**
     * Gets whether the user is allowed to edit the HTML document.
     * 
     * When `web_view` is not editable an element in the HTML document can only be edited if the
     * CONTENTEDITABLE attribute has been set on the element or one of its parent
     * elements. By default a #WebKitWebView is not editable.
     * @returns %TRUE if the user is allowed to edit the HTML document, or %FALSE otherwise.
     */
    is_editable(): boolean
    /**
     * Load the given `content` string for the URI `content_uri`.
     * 
     * This allows clients to display page-loading errors in the #WebKitWebView itself.
     * When this method is called from #WebKitWebView::load-failed signal to show an
     * error page, then the back-forward list is maintained appropriately.
     * For everything else this method works the same way as webkit_web_view_load_html().
     * @param content the new content to display as the main page of the `web_view`
     * @param content_uri the URI for the alternate page content
     * @param base_uri the base URI for relative locations or %NULL
     */
    load_alternate_html(content: string | null, content_uri: string | null, base_uri: string | null): void
    /**
     * Load the specified `bytes` into `web_view` using the given `mime_type` and `encoding`.
     * 
     * When `mime_type` is %NULL, it defaults to "text/html".
     * When `encoding` is %NULL, it defaults to "UTF-8".
     * When `base_uri` is %NULL, it defaults to "about:blank".
     * You can monitor the load operation by connecting to #WebKitWebView::load-changed signal.
     * @param bytes input data to load
     * @param mime_type the MIME type of `bytes,` or %NULL
     * @param encoding the character encoding of `bytes,` or %NULL
     * @param base_uri the base URI for relative locations or %NULL
     */
    load_bytes(bytes: GLib.Bytes, mime_type: string | null, encoding: string | null, base_uri: string | null): void
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
    load_html(content: string | null, base_uri: string | null): void
    /**
     * Load the specified `plain_text` string into `web_view`.
     * 
     * The mime type of document will be "text/plain". You can monitor the load
     * operation by connecting to #WebKitWebView::load-changed signal.
     * @param plain_text The plain text to load
     */
    load_plain_text(plain_text: string | null): void
    /**
     * Requests loading of the specified #WebKitURIRequest.
     * 
     * You can monitor the load operation by connecting to
     * #WebKitWebView::load-changed signal.
     * @param request a #WebKitURIRequest to load
     */
    load_request(request: URIRequest): void
    /**
     * Requests loading of the specified URI string.
     * 
     * You can monitor the load operation by connecting to
     * #WebKitWebView::load-changed signal.
     * @param uri an URI string
     */
    load_uri(uri: string | null): void
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
    reload_bypass_cache(): void
    /**
     * Restore the `web_view` session state from `state`
     * @param state a #WebKitWebViewSessionState
     */
    restore_session_state(state: WebViewSessionState): void
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
    save(save_mode: SaveMode, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finish an asynchronous operation started with webkit_web_view_save().
     * @param result a #GAsyncResult
     * @returns a #GInputStream with the result of saving    the current web page or %NULL in case of error.
     */
    save_finish(result: Gio.AsyncResult): Gio.InputStream
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
    save_to_file(file: Gio.File, save_mode: SaveMode, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finish an asynchronous operation started with webkit_web_view_save_to_file().
     * @param result a #GAsyncResult
     * @returns %TRUE if the web page was successfully saved to a file or %FALSE otherwise.
     */
    save_to_file_finish(result: Gio.AsyncResult): boolean
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
    send_message_to_page(message: UserMessage, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finish an asynchronous operation started with webkit_web_view_send_message_to_page().
     * @param result a #GAsyncResult
     * @returns a #WebKitUserMessage with the reply or %NULL in case of error.
     */
    send_message_to_page_finish(result: Gio.AsyncResult): UserMessage
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
    set_background_color(rgba: Gdk.RGBA): void
    /**
     * Set the camera capture state of a #WebKitWebView.
     * 
     * If #WebKitSettings:enable-mediastream is %FALSE, this method will have no visible effect. Once the
     * state of the device has been set to %WEBKIT_MEDIA_CAPTURE_STATE_NONE it cannot be changed
     * anymore. The page can however request capture again using the mediaDevices API.
     * @param state a #WebKitMediaCaptureState
     */
    set_camera_capture_state(state: MediaCaptureState): void
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
    set_cors_allowlist(allowlist: string[] | null): void
    /**
     * Sets the current custom character encoding override of `web_view`.
     * 
     * The custom character encoding will override any text encoding detected via HTTP headers or
     * META tags. Calling this method will stop any current load operation and reload the
     * current page. Setting the custom character encoding to %NULL removes the character
     * encoding override.
     * @param charset a character encoding name or %NULL
     */
    set_custom_charset(charset: string | null): void
    /**
     * Set the display capture state of a #WebKitWebView.
     * 
     * If #WebKitSettings:enable-mediastream is %FALSE, this method will have no visible effect. Once the
     * state of the device has been set to %WEBKIT_MEDIA_CAPTURE_STATE_NONE it cannot be changed
     * anymore. The page can however request capture again using the mediaDevices API.
     * @param state a #WebKitMediaCaptureState
     */
    set_display_capture_state(state: MediaCaptureState): void
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
    set_editable(editable: boolean): void
    /**
     * Set the #WebKitInputMethodContext to be used by `web_view`.
     * 
     * Set the #WebKitInputMethodContext to be used by `web_view,` or %NULL to not use any input method.
     * Note that the same #WebKitInputMethodContext can't be set on more than one #WebKitWebView at the same time.
     * @param context the #WebKitInputMethodContext to set, or %NULL
     */
    set_input_method_context(context: InputMethodContext | null): void
    /**
     * Sets the mute state of `web_view`.
     * @param muted mute flag
     */
    set_is_muted(muted: boolean): void
    /**
     * Set the microphone capture state of a #WebKitWebView.
     * 
     * If #WebKitSettings:enable-mediastream is %FALSE, this method will have no visible effect. Once the
     * state of the device has been set to %WEBKIT_MEDIA_CAPTURE_STATE_NONE it cannot be changed
     * anymore. The page can however request capture again using the mediaDevices API.
     * @param state a #WebKitMediaCaptureState
     */
    set_microphone_capture_state(state: MediaCaptureState): void
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
    set_settings(settings: Settings): void
    /**
     * Set the zoom level of `web_view`.
     * 
     * Set the zoom level of `web_view,` i.e. the factor by which the
     * view contents are scaled with respect to their original size.
     * @param zoom_level the zoom level
     */
    set_zoom_level(zoom_level: number): void
    /**
     * Stops any ongoing loading operation in `web_view`.
     * 
     * This method does nothing if no content is being loaded.
     * If there is a loading operation in progress, it will be cancelled and
     * #WebKitWebView::load-failed signal will be emitted with
     * %WEBKIT_NETWORK_ERROR_CANCELLED error.
     */
    stop_loading(): void
    /**
     * Terminates the web process associated to `web_view`.
     * 
     * When the web process gets terminated
     * using this method, the #WebKitWebView::web-process-terminated signal is emitted with
     * %WEBKIT_WEB_PROCESS_TERMINATED_BY_API as the reason for termination.
     */
    terminate_web_process(): void
    /**
     * Tries to close the `web_view`.
     * 
     * This will fire the onbeforeunload event
     * to ask the user for confirmation to close the page. If there isn't an
     * onbeforeunload event handler or the user confirms to close the page,
     * the #WebKitWebView::close signal is emitted, otherwise nothing happens.
     */
    try_close(): void

    // Own virtual methods of WebKit-6.0.WebKit.WebView

    vfunc_authenticate(request: AuthenticationRequest): boolean
    vfunc_close(): void
    vfunc_context_menu(context_menu: ContextMenu, hit_test_result: HitTestResult): boolean
    vfunc_context_menu_dismissed(): void
    vfunc_decide_policy(decision: PolicyDecision, type: PolicyDecisionType): boolean
    vfunc_enter_fullscreen(): boolean
    vfunc_insecure_content_detected(event: InsecureContentEvent): void
    vfunc_leave_fullscreen(): boolean
    vfunc_load_changed(load_event: LoadEvent): void
    vfunc_load_failed(load_event: LoadEvent, failing_uri: string | null, error: GLib.Error): boolean
    vfunc_load_failed_with_tls_errors(failing_uri: string | null, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): boolean
    vfunc_mouse_target_changed(hit_test_result: HitTestResult, modifiers: number): void
    vfunc_permission_request(permission_request: PermissionRequest): boolean
    vfunc_print(print_operation: PrintOperation): boolean
    vfunc_query_permission_state(query: PermissionStateQuery): boolean
    vfunc_ready_to_show(): void
    vfunc_resource_load_started(resource: WebResource, request: URIRequest): void
    vfunc_run_as_modal(): void
    vfunc_run_color_chooser(request: ColorChooserRequest): boolean
    vfunc_run_file_chooser(request: FileChooserRequest): boolean
    vfunc_script_dialog(dialog: ScriptDialog): boolean
    vfunc_show_notification(notification: Notification): boolean
    vfunc_show_option_menu(menu: OptionMenu, rectangle: Gdk.Rectangle): boolean
    vfunc_submit_form(request: FormSubmissionRequest): void
    vfunc_user_message_received(message: UserMessage): boolean
    vfunc_web_process_crashed(): boolean
    vfunc_web_process_terminated(reason: WebProcessTerminationReason): void

    // Own signals of WebKit-6.0.WebKit.WebView

    connect(sigName: "authenticate", callback: WebView.AuthenticateSignalCallback): number
    connect_after(sigName: "authenticate", callback: WebView.AuthenticateSignalCallback): number
    emit(sigName: "authenticate", request: AuthenticationRequest, ...args: any[]): void
    connect(sigName: "close", callback: WebView.CloseSignalCallback): number
    connect_after(sigName: "close", callback: WebView.CloseSignalCallback): number
    emit(sigName: "close", ...args: any[]): void
    connect(sigName: "context-menu", callback: WebView.ContextMenuSignalCallback): number
    connect_after(sigName: "context-menu", callback: WebView.ContextMenuSignalCallback): number
    emit(sigName: "context-menu", context_menu: ContextMenu, hit_test_result: HitTestResult, ...args: any[]): void
    connect(sigName: "context-menu-dismissed", callback: WebView.ContextMenuDismissedSignalCallback): number
    connect_after(sigName: "context-menu-dismissed", callback: WebView.ContextMenuDismissedSignalCallback): number
    emit(sigName: "context-menu-dismissed", ...args: any[]): void
    connect(sigName: "create", callback: WebView.CreateSignalCallback): number
    connect_after(sigName: "create", callback: WebView.CreateSignalCallback): number
    emit(sigName: "create", navigation_action: NavigationAction, ...args: any[]): void
    connect(sigName: "decide-policy", callback: WebView.DecidePolicySignalCallback): number
    connect_after(sigName: "decide-policy", callback: WebView.DecidePolicySignalCallback): number
    emit(sigName: "decide-policy", decision: PolicyDecision, decision_type: PolicyDecisionType, ...args: any[]): void
    connect(sigName: "enter-fullscreen", callback: WebView.EnterFullscreenSignalCallback): number
    connect_after(sigName: "enter-fullscreen", callback: WebView.EnterFullscreenSignalCallback): number
    emit(sigName: "enter-fullscreen", ...args: any[]): void
    connect(sigName: "insecure-content-detected", callback: WebView.InsecureContentDetectedSignalCallback): number
    connect_after(sigName: "insecure-content-detected", callback: WebView.InsecureContentDetectedSignalCallback): number
    emit(sigName: "insecure-content-detected", event: InsecureContentEvent, ...args: any[]): void
    connect(sigName: "leave-fullscreen", callback: WebView.LeaveFullscreenSignalCallback): number
    connect_after(sigName: "leave-fullscreen", callback: WebView.LeaveFullscreenSignalCallback): number
    emit(sigName: "leave-fullscreen", ...args: any[]): void
    connect(sigName: "load-changed", callback: WebView.LoadChangedSignalCallback): number
    connect_after(sigName: "load-changed", callback: WebView.LoadChangedSignalCallback): number
    emit(sigName: "load-changed", load_event: LoadEvent, ...args: any[]): void
    connect(sigName: "load-failed", callback: WebView.LoadFailedSignalCallback): number
    connect_after(sigName: "load-failed", callback: WebView.LoadFailedSignalCallback): number
    emit(sigName: "load-failed", load_event: LoadEvent, failing_uri: string | null, error: GLib.Error, ...args: any[]): void
    connect(sigName: "load-failed-with-tls-errors", callback: WebView.LoadFailedWithTlsErrorsSignalCallback): number
    connect_after(sigName: "load-failed-with-tls-errors", callback: WebView.LoadFailedWithTlsErrorsSignalCallback): number
    emit(sigName: "load-failed-with-tls-errors", failing_uri: string | null, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags, ...args: any[]): void
    connect(sigName: "mouse-target-changed", callback: WebView.MouseTargetChangedSignalCallback): number
    connect_after(sigName: "mouse-target-changed", callback: WebView.MouseTargetChangedSignalCallback): number
    emit(sigName: "mouse-target-changed", hit_test_result: HitTestResult, modifiers: number, ...args: any[]): void
    connect(sigName: "permission-request", callback: WebView.PermissionRequestSignalCallback): number
    connect_after(sigName: "permission-request", callback: WebView.PermissionRequestSignalCallback): number
    emit(sigName: "permission-request", request: PermissionRequest, ...args: any[]): void
    connect(sigName: "print", callback: WebView.PrintSignalCallback): number
    connect_after(sigName: "print", callback: WebView.PrintSignalCallback): number
    emit(sigName: "print", print_operation: PrintOperation, ...args: any[]): void
    connect(sigName: "query-permission-state", callback: WebView.QueryPermissionStateSignalCallback): number
    connect_after(sigName: "query-permission-state", callback: WebView.QueryPermissionStateSignalCallback): number
    emit(sigName: "query-permission-state", query: PermissionStateQuery, ...args: any[]): void
    connect(sigName: "ready-to-show", callback: WebView.ReadyToShowSignalCallback): number
    connect_after(sigName: "ready-to-show", callback: WebView.ReadyToShowSignalCallback): number
    emit(sigName: "ready-to-show", ...args: any[]): void
    connect(sigName: "resource-load-started", callback: WebView.ResourceLoadStartedSignalCallback): number
    connect_after(sigName: "resource-load-started", callback: WebView.ResourceLoadStartedSignalCallback): number
    emit(sigName: "resource-load-started", resource: WebResource, request: URIRequest, ...args: any[]): void
    connect(sigName: "run-as-modal", callback: WebView.RunAsModalSignalCallback): number
    connect_after(sigName: "run-as-modal", callback: WebView.RunAsModalSignalCallback): number
    emit(sigName: "run-as-modal", ...args: any[]): void
    connect(sigName: "run-color-chooser", callback: WebView.RunColorChooserSignalCallback): number
    connect_after(sigName: "run-color-chooser", callback: WebView.RunColorChooserSignalCallback): number
    emit(sigName: "run-color-chooser", request: ColorChooserRequest, ...args: any[]): void
    connect(sigName: "run-file-chooser", callback: WebView.RunFileChooserSignalCallback): number
    connect_after(sigName: "run-file-chooser", callback: WebView.RunFileChooserSignalCallback): number
    emit(sigName: "run-file-chooser", request: FileChooserRequest, ...args: any[]): void
    connect(sigName: "script-dialog", callback: WebView.ScriptDialogSignalCallback): number
    connect_after(sigName: "script-dialog", callback: WebView.ScriptDialogSignalCallback): number
    emit(sigName: "script-dialog", dialog: ScriptDialog, ...args: any[]): void
    connect(sigName: "show-notification", callback: WebView.ShowNotificationSignalCallback): number
    connect_after(sigName: "show-notification", callback: WebView.ShowNotificationSignalCallback): number
    emit(sigName: "show-notification", notification: Notification, ...args: any[]): void
    connect(sigName: "show-option-menu", callback: WebView.ShowOptionMenuSignalCallback): number
    connect_after(sigName: "show-option-menu", callback: WebView.ShowOptionMenuSignalCallback): number
    emit(sigName: "show-option-menu", menu: OptionMenu, rectangle: Gdk.Rectangle, ...args: any[]): void
    connect(sigName: "submit-form", callback: WebView.SubmitFormSignalCallback): number
    connect_after(sigName: "submit-form", callback: WebView.SubmitFormSignalCallback): number
    emit(sigName: "submit-form", request: FormSubmissionRequest, ...args: any[]): void
    connect(sigName: "user-message-received", callback: WebView.UserMessageReceivedSignalCallback): number
    connect_after(sigName: "user-message-received", callback: WebView.UserMessageReceivedSignalCallback): number
    emit(sigName: "user-message-received", message: UserMessage, ...args: any[]): void
    connect(sigName: "web-process-terminated", callback: WebView.WebProcessTerminatedSignalCallback): number
    connect_after(sigName: "web-process-terminated", callback: WebView.WebProcessTerminatedSignalCallback): number
    emit(sigName: "web-process-terminated", reason: WebProcessTerminationReason, ...args: any[]): void

    // Class property signals of WebKit-6.0.WebKit.WebView

    connect(sigName: "notify::automation-presentation-type", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automation-presentation-type", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::automation-presentation-type", ...args: any[]): void
    connect(sigName: "notify::camera-capture-state", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::camera-capture-state", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::camera-capture-state", ...args: any[]): void
    connect(sigName: "notify::default-content-security-policy", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-content-security-policy", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-content-security-policy", ...args: any[]): void
    connect(sigName: "notify::display-capture-state", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-capture-state", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-capture-state", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::estimated-load-progress", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-load-progress", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::estimated-load-progress", ...args: any[]): void
    connect(sigName: "notify::favicon", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::favicon", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::favicon", ...args: any[]): void
    connect(sigName: "notify::is-controlled-by-automation", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-controlled-by-automation", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-controlled-by-automation", ...args: any[]): void
    connect(sigName: "notify::is-loading", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-loading", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-loading", ...args: any[]): void
    connect(sigName: "notify::is-muted", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-muted", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-muted", ...args: any[]): void
    connect(sigName: "notify::is-playing-audio", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-playing-audio", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-playing-audio", ...args: any[]): void
    connect(sigName: "notify::is-web-process-responsive", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-web-process-responsive", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-web-process-responsive", ...args: any[]): void
    connect(sigName: "notify::microphone-capture-state", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::microphone-capture-state", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::microphone-capture-state", ...args: any[]): void
    connect(sigName: "notify::network-session", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-session", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::network-session", ...args: any[]): void
    connect(sigName: "notify::page-id", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-id", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page-id", ...args: any[]): void
    connect(sigName: "notify::related-view", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::related-view", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::related-view", ...args: any[]): void
    connect(sigName: "notify::settings", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::settings", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::user-content-manager", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-content-manager", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-content-manager", ...args: any[]): void
    connect(sigName: "notify::web-context", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::web-context", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::web-context", ...args: any[]): void
    connect(sigName: "notify::web-extension-mode", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::web-extension-mode", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::web-extension-mode", ...args: any[]): void
    connect(sigName: "notify::website-policies", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::website-policies", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::website-policies", ...args: any[]): void
    connect(sigName: "notify::zoom-level", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-level", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::zoom-level", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class WebView extends WebViewBase {

    // Own properties of WebKit-6.0.WebKit.WebView

    static name: string
    static $gtype: GObject.GType<WebView>

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

export module WebViewBase {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {
    }

}

export interface WebViewBase extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own fields of WebKit-6.0.WebKit.WebViewBase

    parent_instance: Gtk.Widget & GObject.InitiallyUnowned
    priv: WebViewBasePrivate

    // Class property signals of WebKit-6.0.WebKit.WebViewBase

    connect(sigName: "notify::can-focus", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-name", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focusable", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overflow", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class WebViewBase extends Gtk.Widget {

    // Own properties of WebKit-6.0.WebKit.WebViewBase

    static name: string
    static $gtype: GObject.GType<WebViewBase>

    // Constructors of WebKit-6.0.WebKit.WebViewBase

    constructor(config?: WebViewBase.ConstructorProperties) 
    _init(config?: WebViewBase.ConstructorProperties): void
}

export module WebsiteDataAccessPermissionRequest {

    // Constructor properties interface

    export interface ConstructorProperties extends PermissionRequest.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface WebsiteDataAccessPermissionRequest extends PermissionRequest {

    // Owm methods of WebKit-6.0.WebKit.WebsiteDataAccessPermissionRequest

    /**
     * Get the current domain being browsed.
     * @returns the current domain name
     */
    get_current_domain(): string | null
    /**
     * Get the domain requesting permission to access its cookies while browsing the current domain.
     * @returns the requesting domain name
     */
    get_requesting_domain(): string | null

    // Class property signals of WebKit-6.0.WebKit.WebsiteDataAccessPermissionRequest

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class WebsiteDataAccessPermissionRequest extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.WebsiteDataAccessPermissionRequest

    static name: string
    static $gtype: GObject.GType<WebsiteDataAccessPermissionRequest>

    // Constructors of WebKit-6.0.WebKit.WebsiteDataAccessPermissionRequest

    constructor(config?: WebsiteDataAccessPermissionRequest.ConstructorProperties) 
    _init(config?: WebsiteDataAccessPermissionRequest.ConstructorProperties): void
}

export module WebsiteDataManager {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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
    }

}

export interface WebsiteDataManager {

    // Own properties of WebKit-6.0.WebKit.WebsiteDataManager

    /**
     * The base directory for caches. If %NULL, a default location will be used.
     */
    readonly base_cache_directory: string | null
    /**
     * The base directory for website data. If %NULL, a default location will be used.
     */
    readonly base_data_directory: string | null
    /**
     * Whether the #WebKitWebsiteDataManager is ephemeral. An ephemeral #WebKitWebsiteDataManager
     * handles all websites data as non-persistent, and nothing will be written to the client
     * storage. Note that if you create an ephemeral #WebKitWebsiteDataManager all other construction
     * parameters to configure data directories will be ignored.
     */
    readonly is_ephemeral: boolean

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
    clear(types: WebsiteDataTypes, timespan: GLib.TimeSpan, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finish an asynchronous operation started with webkit_website_data_manager_clear()
     * @param result a #GAsyncResult
     * @returns %TRUE if website data was successfully cleared, or %FALSE otherwise.
     */
    clear_finish(result: Gio.AsyncResult): boolean
    /**
     * Asynchronously get the list of #WebKitWebsiteData for the given `types`.
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * webkit_website_data_manager_fetch_finish() to get the result of the operation.
     * @param types #WebKitWebsiteDataTypes
     * @param cancellable a #GCancellable or %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    fetch(types: WebsiteDataTypes, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finish an asynchronous operation started with webkit_website_data_manager_fetch().
     * @param result a #GAsyncResult
     * @returns a #GList of #WebKitWebsiteData. You must free the #GList with    g_list_free() and unref the #WebKitWebsiteData<!-- -->s with webkit_website_data_unref() when you're done with them.
     */
    fetch_finish(result: Gio.AsyncResult): WebsiteData[]
    /**
     * Get the #WebKitWebsiteDataManager:base-cache-directory property.
     * @returns the base directory for caches, or %NULL if    #WebKitWebsiteDataManager:base-cache-directory was not provided or @manager is ephemeral.
     */
    get_base_cache_directory(): string | null
    /**
     * Get the #WebKitWebsiteDataManager:base-data-directory property.
     * @returns the base directory for website data, or %NULL if    #WebKitWebsiteDataManager:base-data-directory was not provided or @manager is ephemeral.
     */
    get_base_data_directory(): string | null
    /**
     * Get the #WebKitFaviconDatabase of `manager`.
     * @returns a #WebKitFaviconDatabase, or %NULL if website icons are disabled
     */
    get_favicon_database(): FaviconDatabase | null
    /**
     * Get whether website icons are enabled.
     * @returns %TRUE if website icons are enabled, or %FALSE otherwise.
     */
    get_favicons_enabled(): boolean
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
    get_itp_summary(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finish an asynchronous operation started with webkit_website_data_manager_get_itp_summary().
     * @param result a #GAsyncResult
     * @returns a #GList of #WebKitITPThirdParty.    You must free the #GList with g_list_free() and unref the #WebKitITPThirdParty<!-- -->s with    webkit_itp_third_party_unref() when you're done with them.
     */
    get_itp_summary_finish(result: Gio.AsyncResult): ITPThirdParty[]
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
    remove(types: WebsiteDataTypes, website_data: WebsiteData[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finish an asynchronous operation started with webkit_website_data_manager_remove().
     * @param result a #GAsyncResult
     * @returns %TRUE if website data resources were successfully removed, or %FALSE otherwise.
     */
    remove_finish(result: Gio.AsyncResult): boolean
    /**
     * Set whether website icons are enabled. Website icons are disabled by default.
     * When website icons are disabled, the #WebKitFaviconDatabase of `manager` is closed and
     * its reference removed, so webkit_website_data_manager_get_favicon_database() will
     * return %NULL. If website icons are enabled again, a new #WebKitFaviconDatabase will
     * be created.
     * @param enabled value to set
     */
    set_favicons_enabled(enabled: boolean): void

    // Class property signals of WebKit-6.0.WebKit.WebsiteDataManager

    connect(sigName: "notify::base-cache-directory", callback: (($obj: WebsiteDataManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-cache-directory", callback: (($obj: WebsiteDataManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-cache-directory", ...args: any[]): void
    connect(sigName: "notify::base-data-directory", callback: (($obj: WebsiteDataManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-data-directory", callback: (($obj: WebsiteDataManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base-data-directory", ...args: any[]): void
    connect(sigName: "notify::is-ephemeral", callback: (($obj: WebsiteDataManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-ephemeral", callback: (($obj: WebsiteDataManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-ephemeral", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Manages data stored locally by web sites.
 * 
 * You can use WebKitWebsiteDataManager to configure the local directories
 * where website data will be stored. Use #WebKitWebsiteDataManager:base-data-directory
 * and #WebKitWebsiteDataManager:base-cache-directory set a common base directory for all
 * website data and caches. The newly created WebKitWebsiteDataManager must be passed as
 * a construct property to a #WebKitWebContext; you can use webkit_web_context_new_with_website_data_manager()
 * to create a new #WebKitWebContext with a WebKitWebsiteDataManager.
 * If you don't want to set any specific configuration, you don't need to create
 * a WebKitWebsiteDataManager: the #WebKitWebContext will create a WebKitWebsiteDataManager
 * with the default configuration. To get the WebKitWebsiteDataManager of a #WebKitWebContext,
 * you can use webkit_web_context_get_website_data_manager().
 * 
 * A WebKitWebsiteDataManager can also be ephemeral, in which case all the directory configuration
 * is not needed because website data will never persist. You can create an ephemeral WebKitWebsiteDataManager
 * with webkit_website_data_manager_new_ephemeral() and pass the ephemeral WebKitWebsiteDataManager to
 * a #WebKitWebContext, or simply use webkit_web_context_new_ephemeral().
 * 
 * WebKitWebsiteDataManager can also be used to fetch website data, remove data
 * stored by particular websites, or clear data for all websites modified since a given
 * period of time.
 * @class 
 */
export class WebsiteDataManager extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.WebsiteDataManager

    static name: string
    static $gtype: GObject.GType<WebsiteDataManager>

    // Constructors of WebKit-6.0.WebKit.WebsiteDataManager

    constructor(config?: WebsiteDataManager.ConstructorProperties) 
    _init(config?: WebsiteDataManager.ConstructorProperties): void
}

export module WebsitePolicies {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of WebKit-6.0.WebKit.WebsitePolicies

        /**
         * The #WebKitAutoplayPolicy of #WebKitWebsitePolicies.
         */
        autoplay?: AutoplayPolicy | null
    }

}

export interface WebsitePolicies {

    // Own properties of WebKit-6.0.WebKit.WebsitePolicies

    /**
     * The #WebKitAutoplayPolicy of #WebKitWebsitePolicies.
     */
    readonly autoplay: AutoplayPolicy

    // Owm methods of WebKit-6.0.WebKit.WebsitePolicies

    /**
     * Get the #WebKitWebsitePolicies:autoplay property.
     * @returns #WebKitAutoplayPolicy
     */
    get_autoplay_policy(): AutoplayPolicy

    // Class property signals of WebKit-6.0.WebKit.WebsitePolicies

    connect(sigName: "notify::autoplay", callback: (($obj: WebsitePolicies, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autoplay", callback: (($obj: WebsitePolicies, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::autoplay", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class WebsitePolicies extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.WebsitePolicies

    static name: string
    static $gtype: GObject.GType<WebsitePolicies>

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

export module WindowProperties {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

export interface WindowProperties {

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
    readonly locationbar_visible: boolean
    /**
     * Whether the menubar should be visible for the window.
     */
    readonly menubar_visible: boolean
    /**
     * Whether the window can be resized.
     */
    readonly resizable: boolean
    /**
     * Whether the scrollbars should be visible for the window.
     */
    readonly scrollbars_visible: boolean
    /**
     * Whether the statusbar should be visible for the window.
     */
    readonly statusbar_visible: boolean
    /**
     * Whether the toolbar should be visible for the window.
     */
    readonly toolbar_visible: boolean

    // Owm methods of WebKit-6.0.WebKit.WindowProperties

    /**
     * Get whether the window should be shown in fullscreen state or not.
     * @returns %TRUE if the window should be fullscreen or %FALSE otherwise.
     */
    get_fullscreen(): boolean
    /**
     * Get the geometry the window should have on the screen when shown.
     */
    get_geometry(): /* geometry */ Gdk.Rectangle
    /**
     * Get whether the window should have the locationbar visible or not.
     * @returns %TRUE if locationbar should be visible or %FALSE otherwise.
     */
    get_locationbar_visible(): boolean
    /**
     * Get whether the window should have the menubar visible or not.
     * @returns %TRUE if menubar should be visible or %FALSE otherwise.
     */
    get_menubar_visible(): boolean
    /**
     * Get whether the window should be resizable by the user or not.
     * @returns %TRUE if the window should be resizable or %FALSE otherwise.
     */
    get_resizable(): boolean
    /**
     * Get whether the window should have the scrollbars visible or not.
     * @returns %TRUE if scrollbars should be visible or %FALSE otherwise.
     */
    get_scrollbars_visible(): boolean
    /**
     * Get whether the window should have the statusbar visible or not.
     * @returns %TRUE if statusbar should be visible or %FALSE otherwise.
     */
    get_statusbar_visible(): boolean
    /**
     * Get whether the window should have the toolbar visible or not.
     * @returns %TRUE if toolbar should be visible or %FALSE otherwise.
     */
    get_toolbar_visible(): boolean

    // Class property signals of WebKit-6.0.WebKit.WindowProperties

    connect(sigName: "notify::fullscreen", callback: (($obj: WindowProperties, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreen", callback: (($obj: WindowProperties, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fullscreen", ...args: any[]): void
    connect(sigName: "notify::geometry", callback: (($obj: WindowProperties, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::geometry", callback: (($obj: WindowProperties, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::geometry", ...args: any[]): void
    connect(sigName: "notify::locationbar-visible", callback: (($obj: WindowProperties, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locationbar-visible", callback: (($obj: WindowProperties, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::locationbar-visible", ...args: any[]): void
    connect(sigName: "notify::menubar-visible", callback: (($obj: WindowProperties, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menubar-visible", callback: (($obj: WindowProperties, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::menubar-visible", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (($obj: WindowProperties, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: WindowProperties, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::scrollbars-visible", callback: (($obj: WindowProperties, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scrollbars-visible", callback: (($obj: WindowProperties, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scrollbars-visible", ...args: any[]): void
    connect(sigName: "notify::statusbar-visible", callback: (($obj: WindowProperties, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::statusbar-visible", callback: (($obj: WindowProperties, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::statusbar-visible", ...args: any[]): void
    connect(sigName: "notify::toolbar-visible", callback: (($obj: WindowProperties, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::toolbar-visible", callback: (($obj: WindowProperties, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::toolbar-visible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
export class WindowProperties extends GObject.Object {

    // Own properties of WebKit-6.0.WebKit.WindowProperties

    static name: string
    static $gtype: GObject.GType<WindowProperties>

    // Constructors of WebKit-6.0.WebKit.WindowProperties

    constructor(config?: WindowProperties.ConstructorProperties) 
    _init(config?: WindowProperties.ConstructorProperties): void
}

export interface ApplicationInfo {

    // Owm methods of WebKit-6.0.WebKit.ApplicationInfo

    /**
     * Get the name of the application.
     * 
     * If webkit_application_info_set_name() hasn't been
     * called with a valid name, this returns g_get_prgname().
     * @returns the application name
     */
    get_name(): string | null
    /**
     * Get the application version previously set with webkit_application_info_set_version().
     */
    get_version(): [ /* major */ number, /* minor */ number, /* micro */ number ]
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
    set_name(name: string | null): void
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
    set_version(major: number, minor: number, micro: number): void
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
export class ApplicationInfo {

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

export interface AuthenticationRequestClass {

    // Own fields of WebKit-6.0.WebKit.AuthenticationRequestClass

    parent_class: GObject.ObjectClass
}

export abstract class AuthenticationRequestClass {

    // Own properties of WebKit-6.0.WebKit.AuthenticationRequestClass

    static name: string
}

export interface AutomationSessionClass {

    // Own fields of WebKit-6.0.WebKit.AutomationSessionClass

    parent_class: GObject.ObjectClass
}

export abstract class AutomationSessionClass {

    // Own properties of WebKit-6.0.WebKit.AutomationSessionClass

    static name: string
}

export interface BackForwardListClass {

    // Own fields of WebKit-6.0.WebKit.BackForwardListClass

    parent_class: GObject.ObjectClass
}

export abstract class BackForwardListClass {

    // Own properties of WebKit-6.0.WebKit.BackForwardListClass

    static name: string
}

export interface BackForwardListItemClass {

    // Own fields of WebKit-6.0.WebKit.BackForwardListItemClass

    parent_class: GObject.InitiallyUnownedClass
}

export abstract class BackForwardListItemClass {

    // Own properties of WebKit-6.0.WebKit.BackForwardListItemClass

    static name: string
}

export interface ColorChooserRequestClass {

    // Own fields of WebKit-6.0.WebKit.ColorChooserRequestClass

    parent_class: GObject.ObjectClass
}

export abstract class ColorChooserRequestClass {

    // Own properties of WebKit-6.0.WebKit.ColorChooserRequestClass

    static name: string
}

export interface ContextMenuClass {

    // Own fields of WebKit-6.0.WebKit.ContextMenuClass

    parent_class: GObject.ObjectClass
}

export abstract class ContextMenuClass {

    // Own properties of WebKit-6.0.WebKit.ContextMenuClass

    static name: string
}

export interface ContextMenuItemClass {

    // Own fields of WebKit-6.0.WebKit.ContextMenuItemClass

    parent_class: GObject.InitiallyUnownedClass
}

export abstract class ContextMenuItemClass {

    // Own properties of WebKit-6.0.WebKit.ContextMenuItemClass

    static name: string
}

export interface CookieManagerClass {

    // Own fields of WebKit-6.0.WebKit.CookieManagerClass

    parent_class: GObject.ObjectClass
}

export abstract class CookieManagerClass {

    // Own properties of WebKit-6.0.WebKit.CookieManagerClass

    static name: string
}

export interface Credential {

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
    get_certificate(): Gio.TlsCertificate
    /**
     * Get the password currently held by this #WebKitCredential.
     * @returns The password stored in the #WebKitCredential.
     */
    get_password(): string | null
    /**
     * Get the persistence mode currently held by this #WebKitCredential.
     * @returns The #WebKitCredentialPersistence stored in the #WebKitCredential.
     */
    get_persistence(): CredentialPersistence
    /**
     * Get the username currently held by this #WebKitCredential.
     * @returns The username stored in the #WebKitCredential.
     */
    get_username(): string | null
    /**
     * Determine whether this credential has a password stored.
     * @returns %TRUE if the credential has a password or %FALSE otherwise.
     */
    has_password(): boolean
}

/**
 * Groups information used for user authentication.
 * @record 
 */
export class Credential {

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
    constructor(username: string | null, password: string | null, persistence: CredentialPersistence) 
    /**
     * Create a new credential from the provided username, password and persistence mode.
     * @constructor 
     * @param username The username for the new credential
     * @param password The password for the new credential
     * @param persistence The #WebKitCredentialPersistence of the new credential
     * @returns A #WebKitCredential.
     */
    static new(username: string | null, password: string | null, persistence: CredentialPersistence): Credential
    /**
     * Create a new credential from the `certificate` and persistence mode.
     * 
     * Note that %WEBKIT_CREDENTIAL_PERSISTENCE_PERMANENT is not supported for certificate credentials.
     * @constructor 
     * @param certificate The #GTlsCertificate, or %NULL
     * @param persistence The #WebKitCredentialPersistence of the new credential
     * @returns A #WebKitCredential.
     */
    static new_for_certificate(certificate: Gio.TlsCertificate | null, persistence: CredentialPersistence): Credential
    /**
     * Create a new credential from the provided PIN and persistence mode.
     * 
     * Note that %WEBKIT_CREDENTIAL_PERSISTENCE_PERMANENT is not supported for certificate pin credentials.
     * @constructor 
     * @param pin The PIN for the new credential
     * @param persistence The #WebKitCredentialPersistence of the new credential
     * @returns A #WebKitCredential.
     */
    static new_for_certificate_pin(pin: string | null, persistence: CredentialPersistence): Credential
}

export interface DeviceInfoPermissionRequestClass {

    // Own fields of WebKit-6.0.WebKit.DeviceInfoPermissionRequestClass

    parent_class: GObject.ObjectClass
}

export abstract class DeviceInfoPermissionRequestClass {

    // Own properties of WebKit-6.0.WebKit.DeviceInfoPermissionRequestClass

    static name: string
}

export interface DownloadClass {

    // Own fields of WebKit-6.0.WebKit.DownloadClass

    parent_class: GObject.ObjectClass
    decide_destination: (download: Download, suggested_filename: string | null) => boolean
}

export abstract class DownloadClass {

    // Own properties of WebKit-6.0.WebKit.DownloadClass

    static name: string
}

export interface DownloadPrivate {
}

export class DownloadPrivate {

    // Own properties of WebKit-6.0.WebKit.DownloadPrivate

    static name: string
}

export interface EditorStateClass {

    // Own fields of WebKit-6.0.WebKit.EditorStateClass

    parent_class: GObject.ObjectClass
}

export abstract class EditorStateClass {

    // Own properties of WebKit-6.0.WebKit.EditorStateClass

    static name: string
}

export interface FaviconDatabaseClass {

    // Own fields of WebKit-6.0.WebKit.FaviconDatabaseClass

    parent_class: GObject.ObjectClass
}

export abstract class FaviconDatabaseClass {

    // Own properties of WebKit-6.0.WebKit.FaviconDatabaseClass

    static name: string
}

export interface FileChooserRequestClass {

    // Own fields of WebKit-6.0.WebKit.FileChooserRequestClass

    parent_class: GObject.ObjectClass
}

export abstract class FileChooserRequestClass {

    // Own properties of WebKit-6.0.WebKit.FileChooserRequestClass

    static name: string
}

export interface FindControllerClass {

    // Own fields of WebKit-6.0.WebKit.FindControllerClass

    parent_class: GObject.ObjectClass
}

export abstract class FindControllerClass {

    // Own properties of WebKit-6.0.WebKit.FindControllerClass

    static name: string
}

export interface FormSubmissionRequestClass {

    // Own fields of WebKit-6.0.WebKit.FormSubmissionRequestClass

    parent_class: GObject.ObjectClass
}

export abstract class FormSubmissionRequestClass {

    // Own properties of WebKit-6.0.WebKit.FormSubmissionRequestClass

    static name: string
}

export interface GeolocationManagerClass {

    // Own fields of WebKit-6.0.WebKit.GeolocationManagerClass

    parent_class: GObject.ObjectClass
}

export abstract class GeolocationManagerClass {

    // Own properties of WebKit-6.0.WebKit.GeolocationManagerClass

    static name: string
}

export interface GeolocationPermissionRequestClass {

    // Own fields of WebKit-6.0.WebKit.GeolocationPermissionRequestClass

    parent_class: GObject.ObjectClass
}

export abstract class GeolocationPermissionRequestClass {

    // Own properties of WebKit-6.0.WebKit.GeolocationPermissionRequestClass

    static name: string
}

export interface GeolocationPosition {

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
    set_altitude(altitude: number): void
    /**
     * Set the accuracy of `position` altitude.
     * @param altitude_accuracy accuracy of position altitude in meters
     */
    set_altitude_accuracy(altitude_accuracy: number): void
    /**
     * Set the `position` heading.
     * 
     * Set the `position` heading, as a positive angle between the direction of movement and the North
     * direction, in clockwise direction.
     * @param heading heading in degrees
     */
    set_heading(heading: number): void
    /**
     * Set the `position` speed.
     * @param speed speed in meters per second
     */
    set_speed(speed: number): void
    /**
     * Set the `position` timestamp.
     * 
     * By default it's the time when the `position` was created.
     * @param timestamp timestamp in seconds since the epoch, or 0 to use current time
     */
    set_timestamp(timestamp: number): void
}

/**
 * An opaque struct to provide position updates to a #WebKitGeolocationManager.
 * 
 * WebKitGeolocationPosition is an opaque struct used to provide position updates to a
 * #WebKitGeolocationManager using webkit_geolocation_manager_update_position().
 * @record 
 */
export class GeolocationPosition {

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

export interface HitTestResultClass {

    // Own fields of WebKit-6.0.WebKit.HitTestResultClass

    parent_class: GObject.ObjectClass
}

export abstract class HitTestResultClass {

    // Own properties of WebKit-6.0.WebKit.HitTestResultClass

    static name: string
}

export interface ITPFirstParty {

    // Owm methods of WebKit-6.0.WebKit.ITPFirstParty

    /**
     * Get the domain name of `itp_first_party`.
     * @returns the domain name
     */
    get_domain(): string | null
    /**
     * Get the last time a #WebKitITPThirdParty has been seen under `itp_first_party`.
     * 
     * Each `WebKitITPFirstParty` is created by webkit_itp_third_party_get_first_parties() and
     * therefore corresponds to exactly one #WebKitITPThirdParty.
     * @returns the last update time as a #GDateTime
     */
    get_last_update_time(): GLib.DateTime
    /**
     * Get whether `itp_first_party` has granted website data access to its #WebKitITPThirdParty.
     * 
     * Each `WebKitITPFirstParty` is created by webkit_itp_third_party_get_first_parties() and
     * therefore corresponds to exactly one #WebKitITPThirdParty.
     * @returns %TRUE if website data access has been granted, or %FALSE otherwise
     */
    get_website_data_access_allowed(): boolean
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
export class ITPFirstParty {

    // Own properties of WebKit-6.0.WebKit.ITPFirstParty

    static name: string
}

export interface ITPThirdParty {

    // Owm methods of WebKit-6.0.WebKit.ITPThirdParty

    /**
     * Get the domain name of `itp_third_party`.
     * @returns the domain name
     */
    get_domain(): string | null
    /**
     * Get the list of #WebKitITPFirstParty under which `itp_third_party` has been seen.
     * @returns a #GList of #WebKitITPFirstParty
     */
    get_first_parties(): ITPFirstParty[]
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
export class ITPThirdParty {

    // Own properties of WebKit-6.0.WebKit.ITPThirdParty

    static name: string
}

export interface InputMethodContextClass {

    // Own fields of WebKit-6.0.WebKit.InputMethodContextClass

    parent_class: GObject.ObjectClass
    preedit_started: (context: InputMethodContext) => void
    preedit_changed: (context: InputMethodContext) => void
    preedit_finished: (context: InputMethodContext) => void
    committed: (context: InputMethodContext, text: string | null) => void
    delete_surrounding: (context: InputMethodContext, offset: number, n_chars: number) => void
    set_enable_preedit: (context: InputMethodContext, enabled: boolean) => void
    get_preedit: (context: InputMethodContext) => [ /* text */ string | null, /* underlines */ InputMethodUnderline[] | null, /* cursor_offset */ number | null ]
    filter_key_event: (context: InputMethodContext, key_event: Gdk.Event) => boolean
    notify_focus_in: (context: InputMethodContext) => void
    notify_focus_out: (context: InputMethodContext) => void
    notify_cursor_area: (context: InputMethodContext, x: number, y: number, width: number, height: number) => void
    notify_surrounding: (context: InputMethodContext, text: string | null, length: number, cursor_index: number, selection_index: number) => void
    reset: (context: InputMethodContext) => void
}

export abstract class InputMethodContextClass {

    // Own properties of WebKit-6.0.WebKit.InputMethodContextClass

    static name: string
}

export interface InputMethodContextPrivate {
}

export class InputMethodContextPrivate {

    // Own properties of WebKit-6.0.WebKit.InputMethodContextPrivate

    static name: string
}

export interface InputMethodUnderline {

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
    set_color(rgba: Gdk.RGBA | null): void
}

/**
 * Range of text in an preedit string to be shown underlined.
 * @record 
 */
export class InputMethodUnderline {

    // Own properties of WebKit-6.0.WebKit.InputMethodUnderline

    static name: string

    // Constructors of WebKit-6.0.WebKit.InputMethodUnderline

    /**
     * Create a new #WebKitInputMethodUnderline for the given range in preedit string
     * @constructor 
     * @param start_offset the start offset in preedit string
     * @param end_offset the end offset in preedit string
     * @returns A newly created #WebKitInputMethodUnderline
     */
    constructor(start_offset: number, end_offset: number) 
    /**
     * Create a new #WebKitInputMethodUnderline for the given range in preedit string
     * @constructor 
     * @param start_offset the start offset in preedit string
     * @param end_offset the end offset in preedit string
     * @returns A newly created #WebKitInputMethodUnderline
     */
    static new(start_offset: number, end_offset: number): InputMethodUnderline
}

export interface JavascriptResult {

    // Owm methods of WebKit-6.0.WebKit.JavascriptResult

    /**
     * Get the #JSCValue of `js_result`.
     * @returns the #JSCValue of the #WebKitJavascriptResult
     */
    get_js_value(): JavaScriptCore.Value
    /**
     * Atomically increments the reference count of `js_result` by one.
     * 
     * This function is MT-safe and may be called from any thread.
     * @returns The passed in #WebKitJavascriptResult
     */
    ref(): JavascriptResult
    /**
     * Atomically decrements the reference count of `js_result` by one.
     * 
     * If the reference count drops to 0,
     * all memory allocated by the #WebKitJavascriptResult is
     * released. This function is MT-safe and may be called from any
     * thread.
     */
    unref(): void
}

/**
 * Result of JavaScript evaluation in a web view.
 * @record 
 */
export class JavascriptResult {

    // Own properties of WebKit-6.0.WebKit.JavascriptResult

    static name: string
}

export interface MediaKeySystemPermissionRequestClass {

    // Own fields of WebKit-6.0.WebKit.MediaKeySystemPermissionRequestClass

    parent_class: GObject.ObjectClass
}

export abstract class MediaKeySystemPermissionRequestClass {

    // Own properties of WebKit-6.0.WebKit.MediaKeySystemPermissionRequestClass

    static name: string
}

export interface MemoryPressureSettings {

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
    get_conservative_threshold(): number
    /**
     * Gets the kill memory usage threshold.
     * @returns positive value, can be zero.
     */
    get_kill_threshold(): number
    /**
     * Gets the memory usage limit.
     * @returns current value, in megabytes.
     */
    get_memory_limit(): number
    /**
     * Gets the interval at which memory usage is checked.
     * @returns current interval value, in seconds.
     */
    get_poll_interval(): number
    /**
     * Gets the strict memory usage threshold.
     * @returns value in the `(0, 1)` range.
     */
    get_strict_threshold(): number
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
    set_conservative_threshold(value: number): void
    /**
     * Sets `value` as the fraction of the defined memory limit where the process will be
     * killed.
     * 
     * The threshold must be a value bigger or equal to 0. A value of 0 means that the process
     * is never killed. If the threshold is not 0, then it must be bigger than the strict threshold
     * defined in `settings`. The threshold can also have values bigger than 1. The default value is 0.
     * @param value fraction of the memory limit where the process will be killed because   of excessive memory usage.
     */
    set_kill_threshold(value: number): void
    /**
     * Sets `memory_limit` the memory limit value to `settings`.
     * 
     * The default value is the system's RAM size with a maximum of 3GB.
     * @param memory_limit amount of memory (in MB) that the process is allowed to use.
     */
    set_memory_limit(memory_limit: number): void
    /**
     * Sets `value` as the poll interval used by `settings`.
     * 
     * The poll interval value must be bigger than 0. The default value is 30 seconds.
     * @param value period (in seconds) between memory usage measurements.
     */
    set_poll_interval(value: number): void
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
    set_strict_threshold(value: number): void
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
export class MemoryPressureSettings {

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

export interface NavigationAction {

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
    get_frame_name(): string | null
    /**
     * Return the modifier keys.
     * 
     * Return a bitmask of #GdkModifierType values describing the modifier keys that were in effect
     * when the navigation was requested
     * @returns the modifier keys
     */
    get_modifiers(): number
    /**
     * Return the number of the mouse button that triggered the navigation.
     * 
     * Return the number of the mouse button that triggered the navigation, or 0 if
     * the navigation was not started by a mouse event.
     * @returns the mouse button number or 0
     */
    get_mouse_button(): number
    /**
     * Return the type of action that triggered the navigation.
     * @returns a #WebKitNavigationType
     */
    get_navigation_type(): NavigationType
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
    get_request(): URIRequest
    /**
     * Returns whether the `navigation` was redirected.
     * @returns %TRUE if the original navigation was redirected, %FALSE otherwise.
     */
    is_redirect(): boolean
    /**
     * Return whether the navigation was triggered by a user gesture like a mouse click.
     * @returns whether navigation action is a user gesture
     */
    is_user_gesture(): boolean
}

/**
 * Provides details about interaction resulting in a resource load.
 * @record 
 */
export class NavigationAction {

    // Own properties of WebKit-6.0.WebKit.NavigationAction

    static name: string
}

export interface NavigationPolicyDecisionClass {

    // Own fields of WebKit-6.0.WebKit.NavigationPolicyDecisionClass

    parent_class: PolicyDecisionClass
}

export abstract class NavigationPolicyDecisionClass {

    // Own properties of WebKit-6.0.WebKit.NavigationPolicyDecisionClass

    static name: string
}

export interface NetworkProxySettings {

    // Owm methods of WebKit-6.0.WebKit.NetworkProxySettings

    /**
     * Adds a URI-scheme-specific proxy.
     * 
     * URIs whose scheme matches `uri_scheme` will be proxied via `proxy_uri`.
     * As with the default proxy URI, if `proxy_uri` starts with "socks://", it will be treated as referring to
     * all three of the socks5, socks4a, and socks4 proxy types.
     * @param scheme the URI scheme to add a proxy for
     * @param proxy_uri the proxy URI to use for `uri_scheme`
     */
    add_proxy_for_scheme(scheme: string | null, proxy_uri: string | null): void
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
export class NetworkProxySettings {

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
     * @param default_proxy_uri the default proxy URI to use, or %NULL.
     * @param ignore_hosts an optional list of hosts/IP addresses to not use a proxy for.
     * @returns A new #WebKitNetworkProxySettings.
     */
    constructor(default_proxy_uri: string | null, ignore_hosts: string[] | null) 
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
     * @param default_proxy_uri the default proxy URI to use, or %NULL.
     * @param ignore_hosts an optional list of hosts/IP addresses to not use a proxy for.
     * @returns A new #WebKitNetworkProxySettings.
     */
    static new(default_proxy_uri: string | null, ignore_hosts: string[] | null): NetworkProxySettings
}

export interface NetworkSessionClass {

    // Own fields of WebKit-6.0.WebKit.NetworkSessionClass

    parent_class: GObject.ObjectClass
}

export abstract class NetworkSessionClass {

    // Own properties of WebKit-6.0.WebKit.NetworkSessionClass

    static name: string
}

export interface NotificationClass {

    // Own fields of WebKit-6.0.WebKit.NotificationClass

    parent_class: GObject.ObjectClass
}

export abstract class NotificationClass {

    // Own properties of WebKit-6.0.WebKit.NotificationClass

    static name: string
}

export interface NotificationPermissionRequestClass {

    // Own fields of WebKit-6.0.WebKit.NotificationPermissionRequestClass

    parent_class: GObject.ObjectClass
}

export abstract class NotificationPermissionRequestClass {

    // Own properties of WebKit-6.0.WebKit.NotificationPermissionRequestClass

    static name: string
}

export interface OptionMenuClass {

    // Own fields of WebKit-6.0.WebKit.OptionMenuClass

    parent_class: GObject.ObjectClass
}

export abstract class OptionMenuClass {

    // Own properties of WebKit-6.0.WebKit.OptionMenuClass

    static name: string
}

export interface OptionMenuItem {

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
    get_label(): string | null
    /**
     * Get the tooltip of a #WebKitOptionMenuItem.
     * @returns The tooltip of @item, or %NULL.
     */
    get_tooltip(): string | null
    /**
     * Whether a #WebKitOptionMenuItem is enabled.
     * @returns %TRUE if the @item is enabled or %FALSE otherwise.
     */
    is_enabled(): boolean
    /**
     * Whether a #WebKitOptionMenuItem is a group child.
     * @returns %TRUE if the @item is a group child or %FALSE otherwise.
     */
    is_group_child(): boolean
    /**
     * Whether a #WebKitOptionMenuItem is a group label.
     * @returns %TRUE if the @item is a group label or %FALSE otherwise.
     */
    is_group_label(): boolean
    /**
     * Whether a #WebKitOptionMenuItem is the currently selected one.
     * @returns %TRUE if the @item is selected or %FALSE otherwise.
     */
    is_selected(): boolean
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
export class OptionMenuItem {

    // Own properties of WebKit-6.0.WebKit.OptionMenuItem

    static name: string
}

export interface PermissionRequestInterface {

    // Own fields of WebKit-6.0.WebKit.PermissionRequestInterface

    parent_interface: GObject.TypeInterface
    allow: (request: PermissionRequest) => void
    deny: (request: PermissionRequest) => void
}

export abstract class PermissionRequestInterface {

    // Own properties of WebKit-6.0.WebKit.PermissionRequestInterface

    static name: string
}

export interface PermissionStateQuery {

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
    get_name(): string | null
    /**
     * Get the permission origin for which access is being queried.
     * @returns A #WebKitSecurityOrigin representing the origin from which the @query was emitted.
     */
    get_security_origin(): SecurityOrigin
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
export class PermissionStateQuery {

    // Own properties of WebKit-6.0.WebKit.PermissionStateQuery

    static name: string
}

export interface PointerLockPermissionRequestClass {

    // Own fields of WebKit-6.0.WebKit.PointerLockPermissionRequestClass

    parent_class: GObject.ObjectClass
}

export abstract class PointerLockPermissionRequestClass {

    // Own properties of WebKit-6.0.WebKit.PointerLockPermissionRequestClass

    static name: string
}

export interface PolicyDecisionClass {

    // Own fields of WebKit-6.0.WebKit.PolicyDecisionClass

    parent_class: GObject.ObjectClass
}

export abstract class PolicyDecisionClass {

    // Own properties of WebKit-6.0.WebKit.PolicyDecisionClass

    static name: string
}

export interface PolicyDecisionPrivate {
}

export class PolicyDecisionPrivate {

    // Own properties of WebKit-6.0.WebKit.PolicyDecisionPrivate

    static name: string
}

export interface PrintOperationClass {

    // Own fields of WebKit-6.0.WebKit.PrintOperationClass

    parent_class: GObject.ObjectClass
}

export abstract class PrintOperationClass {

    // Own properties of WebKit-6.0.WebKit.PrintOperationClass

    static name: string
}

export interface ResponsePolicyDecisionClass {

    // Own fields of WebKit-6.0.WebKit.ResponsePolicyDecisionClass

    parent_class: PolicyDecisionClass
}

export abstract class ResponsePolicyDecisionClass {

    // Own properties of WebKit-6.0.WebKit.ResponsePolicyDecisionClass

    static name: string
}

export interface ScriptDialog {

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
    confirm_set_confirmed(confirmed: boolean): void
    /**
     * Get the dialog type of a #WebKitScriptDialog.
     * @returns the #WebKitScriptDialogType of @dialog
     */
    get_dialog_type(): ScriptDialogType
    /**
     * Get the message of a #WebKitScriptDialog.
     * @returns the message of @dialog.
     */
    get_message(): string | null
    /**
     * Get the default text of a #WebKitScriptDialog of type %WEBKIT_SCRIPT_DIALOG_PROMPT.
     * 
     * It's an error to use this method with a #WebKitScriptDialog that is not of type
     * %WEBKIT_SCRIPT_DIALOG_PROMPT.
     * @returns the default text of @dialog
     */
    prompt_get_default_text(): string | null
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
    prompt_set_text(text: string | null): void
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
export class ScriptDialog {

    // Own properties of WebKit-6.0.WebKit.ScriptDialog

    static name: string
}

export interface ScriptMessageReply {

    // Owm methods of WebKit-6.0.WebKit.ScriptMessageReply

    /**
     * Atomically increments the reference count of `script_message_reply` by one.
     * @returns the @script_message_reply passed in.
     */
    ref(): ScriptMessageReply
    /**
     * Reply to a script message with an error message.
     * @param error_message An error message to return as specified by the user's script message
     */
    return_error_message(error_message: string | null): void
    /**
     * Reply to a script message with a value.
     * 
     * This function can be called twice for passing the reply value in.
     * @param reply_value Reply value of the provided script message
     */
    return_value(reply_value: JavaScriptCore.Value): void
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
export class ScriptMessageReply {

    // Own properties of WebKit-6.0.WebKit.ScriptMessageReply

    static name: string
}

export interface SecurityManagerClass {

    // Own fields of WebKit-6.0.WebKit.SecurityManagerClass

    parent_class: GObject.ObjectClass
}

export abstract class SecurityManagerClass {

    // Own properties of WebKit-6.0.WebKit.SecurityManagerClass

    static name: string
}

export interface SecurityOrigin {

    // Owm methods of WebKit-6.0.WebKit.SecurityOrigin

    /**
     * Gets the hostname of `origin`.
     * 
     * It is reasonable for this to be %NULL
     * if its protocol does not require a host component.
     * @returns The host of the #WebKitSecurityOrigin
     */
    get_host(): string | null
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
    get_port(): number
    /**
     * Gets the protocol of `origin`.
     * @returns The protocol of the #WebKitSecurityOrigin
     */
    get_protocol(): string | null
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
    to_string(): string | null
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
export class SecurityOrigin {

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
    constructor(protocol: string | null, host: string | null, port: number) 
    /**
     * Create a new security origin from the provided protocol, host and
     * port.
     * @constructor 
     * @param protocol The protocol for the new origin
     * @param host The host for the new origin
     * @param port The port number for the new origin, or 0 to indicate the        default port for `protocol`
     * @returns A #WebKitSecurityOrigin.
     */
    static new(protocol: string | null, host: string | null, port: number): SecurityOrigin
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
    static new_for_uri(uri: string | null): SecurityOrigin
}

export interface SettingsClass {

    // Own fields of WebKit-6.0.WebKit.SettingsClass

    parent_class: GObject.ObjectClass
}

export abstract class SettingsClass {

    // Own properties of WebKit-6.0.WebKit.SettingsClass

    static name: string
}

export interface URIRequestClass {

    // Own fields of WebKit-6.0.WebKit.URIRequestClass

    parent_class: GObject.ObjectClass
}

export abstract class URIRequestClass {

    // Own properties of WebKit-6.0.WebKit.URIRequestClass

    static name: string
}

export interface URIResponseClass {

    // Own fields of WebKit-6.0.WebKit.URIResponseClass

    parent_class: GObject.ObjectClass
}

export abstract class URIResponseClass {

    // Own properties of WebKit-6.0.WebKit.URIResponseClass

    static name: string
}

export interface URISchemeRequestClass {

    // Own fields of WebKit-6.0.WebKit.URISchemeRequestClass

    parent_class: GObject.ObjectClass
}

export abstract class URISchemeRequestClass {

    // Own properties of WebKit-6.0.WebKit.URISchemeRequestClass

    static name: string
}

export interface URISchemeResponseClass {

    // Own fields of WebKit-6.0.WebKit.URISchemeResponseClass

    parent_class: GObject.ObjectClass
}

export abstract class URISchemeResponseClass {

    // Own properties of WebKit-6.0.WebKit.URISchemeResponseClass

    static name: string
}

export interface UserContentFilter {

    // Owm methods of WebKit-6.0.WebKit.UserContentFilter

    /**
     * Obtain the identifier previously used to save the `user_content_filter`.
     * 
     * Obtain the identifier previously used to save the `user_content_filter` in the
     * #WebKitUserContentFilterStore.
     * @returns the identifier for the filter
     */
    get_identifier(): string | null
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
export class UserContentFilter {

    // Own properties of WebKit-6.0.WebKit.UserContentFilter

    static name: string
}

export interface UserContentFilterStoreClass {

    // Own fields of WebKit-6.0.WebKit.UserContentFilterStoreClass

    parent_class: GObject.ObjectClass
}

export abstract class UserContentFilterStoreClass {

    // Own properties of WebKit-6.0.WebKit.UserContentFilterStoreClass

    static name: string
}

export interface UserContentManagerClass {

    // Own fields of WebKit-6.0.WebKit.UserContentManagerClass

    parent_class: GObject.ObjectClass
}

export abstract class UserContentManagerClass {

    // Own properties of WebKit-6.0.WebKit.UserContentManagerClass

    static name: string
}

export interface UserMediaPermissionRequestClass {

    // Own fields of WebKit-6.0.WebKit.UserMediaPermissionRequestClass

    parent_class: GObject.ObjectClass
}

export abstract class UserMediaPermissionRequestClass {

    // Own properties of WebKit-6.0.WebKit.UserMediaPermissionRequestClass

    static name: string
}

export interface UserMessageClass {

    // Own fields of WebKit-6.0.WebKit.UserMessageClass

    parent_class: GObject.InitiallyUnownedClass
}

export abstract class UserMessageClass {

    // Own properties of WebKit-6.0.WebKit.UserMessageClass

    static name: string
}

export interface UserScript {

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
export class UserScript {

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
     * @param injected_frames A #WebKitUserContentInjectedFrames value
     * @param injection_time A #WebKitUserScriptInjectionTime value
     * @param allow_list An allow_list of URI patterns or %NULL
     * @param block_list A block_list of URI patterns or %NULL
     * @returns A new #WebKitUserScript
     */
    constructor(source: string | null, injected_frames: UserContentInjectedFrames, injection_time: UserScriptInjectionTime, allow_list: string[] | null, block_list: string[] | null) 
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
     * @param injected_frames A #WebKitUserContentInjectedFrames value
     * @param injection_time A #WebKitUserScriptInjectionTime value
     * @param allow_list An allow_list of URI patterns or %NULL
     * @param block_list A block_list of URI patterns or %NULL
     * @returns A new #WebKitUserScript
     */
    static new(source: string | null, injected_frames: UserContentInjectedFrames, injection_time: UserScriptInjectionTime, allow_list: string[] | null, block_list: string[] | null): UserScript
    /**
     * Creates a new user script for script world with name `world_name`.
     * 
     * See webkit_user_script_new() for a full description.
     * @constructor 
     * @param source Source code of the user script.
     * @param injected_frames A #WebKitUserContentInjectedFrames value
     * @param injection_time A #WebKitUserScriptInjectionTime value
     * @param world_name the name of a #WebKitScriptWorld
     * @param allow_list An allow_list of URI patterns or %NULL
     * @param block_list A block_list of URI patterns or %NULL
     * @returns A new #WebKitUserScript
     */
    static new_for_world(source: string | null, injected_frames: UserContentInjectedFrames, injection_time: UserScriptInjectionTime, world_name: string | null, allow_list: string[] | null, block_list: string[] | null): UserScript
}

export interface UserStyleSheet {

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
export class UserStyleSheet {

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
     * @param injected_frames A #WebKitUserContentInjectedFrames value
     * @param level A #WebKitUserStyleLevel
     * @param allow_list An allow_list of URI patterns or %NULL
     * @param block_list A block_list of URI patterns or %NULL
     * @returns A new #WebKitUserStyleSheet
     */
    constructor(source: string | null, injected_frames: UserContentInjectedFrames, level: UserStyleLevel, allow_list: string[] | null, block_list: string[] | null) 
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
     * @param injected_frames A #WebKitUserContentInjectedFrames value
     * @param level A #WebKitUserStyleLevel
     * @param allow_list An allow_list of URI patterns or %NULL
     * @param block_list A block_list of URI patterns or %NULL
     * @returns A new #WebKitUserStyleSheet
     */
    static new(source: string | null, injected_frames: UserContentInjectedFrames, level: UserStyleLevel, allow_list: string[] | null, block_list: string[] | null): UserStyleSheet
    /**
     * Creates a new user style sheet for script world.
     * 
     * Creates a new user style sheet for script world with name `world_name`.
     * See webkit_user_style_sheet_new() for a full description.
     * @constructor 
     * @param source Source code of the user style sheet.
     * @param injected_frames A #WebKitUserContentInjectedFrames value
     * @param level A #WebKitUserStyleLevel
     * @param world_name the name of a #WebKitScriptWorld
     * @param allow_list An allow_list of URI patterns or %NULL
     * @param block_list A block_list of URI patterns or %NULL
     * @returns A new #WebKitUserStyleSheet
     */
    static new_for_world(source: string | null, injected_frames: UserContentInjectedFrames, level: UserStyleLevel, world_name: string | null, allow_list: string[] | null, block_list: string[] | null): UserStyleSheet
}

export interface WebContextClass {

    // Own fields of WebKit-6.0.WebKit.WebContextClass

    parent: GObject.ObjectClass
    initialize_web_extensions: (context: WebContext) => void
    initialize_notification_permissions: (context: WebContext) => void
    automation_started: (context: WebContext, session: AutomationSession) => void
    user_message_received: (context: WebContext, message: UserMessage) => boolean
}

export abstract class WebContextClass {

    // Own properties of WebKit-6.0.WebKit.WebContextClass

    static name: string
}

export interface WebContextPrivate {
}

export class WebContextPrivate {

    // Own properties of WebKit-6.0.WebKit.WebContextPrivate

    static name: string
}

export interface WebInspectorClass {

    // Own fields of WebKit-6.0.WebKit.WebInspectorClass

    parent_class: GObject.ObjectClass
}

export abstract class WebInspectorClass {

    // Own properties of WebKit-6.0.WebKit.WebInspectorClass

    static name: string
}

export interface WebResourceClass {

    // Own fields of WebKit-6.0.WebKit.WebResourceClass

    parent_class: GObject.ObjectClass
}

export abstract class WebResourceClass {

    // Own properties of WebKit-6.0.WebKit.WebResourceClass

    static name: string
}

export interface WebViewBaseClass {

    // Own fields of WebKit-6.0.WebKit.WebViewBaseClass

    parentClass: Gtk.WidgetClass
}

export abstract class WebViewBaseClass {

    // Own properties of WebKit-6.0.WebKit.WebViewBaseClass

    static name: string
}

export interface WebViewBasePrivate {
}

export class WebViewBasePrivate {

    // Own properties of WebKit-6.0.WebKit.WebViewBasePrivate

    static name: string
}

export interface WebViewClass {

    // Own fields of WebKit-6.0.WebKit.WebViewClass

    parent: WebViewBaseClass
    load_changed: (web_view: WebView, load_event: LoadEvent) => void
    load_failed: (web_view: WebView, load_event: LoadEvent, failing_uri: string | null, error: GLib.Error) => boolean
    ready_to_show: (web_view: WebView) => void
    run_as_modal: (web_view: WebView) => void
    close: (web_view: WebView) => void
    script_dialog: (web_view: WebView, dialog: ScriptDialog) => boolean
    decide_policy: (web_view: WebView, decision: PolicyDecision, type: PolicyDecisionType) => boolean
    permission_request: (web_view: WebView, permission_request: PermissionRequest) => boolean
    mouse_target_changed: (web_view: WebView, hit_test_result: HitTestResult, modifiers: number) => void
    print: (web_view: WebView, print_operation: PrintOperation) => boolean
    resource_load_started: (web_view: WebView, resource: WebResource, request: URIRequest) => void
    enter_fullscreen: (web_view: WebView) => boolean
    leave_fullscreen: (web_view: WebView) => boolean
    run_file_chooser: (web_view: WebView, request: FileChooserRequest) => boolean
    context_menu: (web_view: WebView, context_menu: ContextMenu, hit_test_result: HitTestResult) => boolean
    context_menu_dismissed: (web_view: WebView) => void
    submit_form: (web_view: WebView, request: FormSubmissionRequest) => void
    insecure_content_detected: (web_view: WebView, event: InsecureContentEvent) => void
    web_process_crashed: (web_view: WebView) => boolean
    authenticate: (web_view: WebView, request: AuthenticationRequest) => boolean
    load_failed_with_tls_errors: (web_view: WebView, failing_uri: string | null, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => boolean
    show_notification: (web_view: WebView, notification: Notification) => boolean
    run_color_chooser: (web_view: WebView, request: ColorChooserRequest) => boolean
    show_option_menu: (web_view: WebView, menu: OptionMenu, rectangle: Gdk.Rectangle) => boolean
    web_process_terminated: (web_view: WebView, reason: WebProcessTerminationReason) => void
    user_message_received: (web_view: WebView, message: UserMessage) => boolean
    query_permission_state: (web_view: WebView, query: PermissionStateQuery) => boolean
}

export abstract class WebViewClass {

    // Own properties of WebKit-6.0.WebKit.WebViewClass

    static name: string
}

export interface WebViewPrivate {
}

export class WebViewPrivate {

    // Own properties of WebKit-6.0.WebKit.WebViewPrivate

    static name: string
}

export interface WebViewSessionState {

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
    serialize(): GLib.Bytes
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
export class WebViewSessionState {

    // Own properties of WebKit-6.0.WebKit.WebViewSessionState

    static name: string

    // Constructors of WebKit-6.0.WebKit.WebViewSessionState

    /**
     * Creates a new #WebKitWebViewSessionState from serialized data.
     * @constructor 
     * @param data a #GBytes
     * @returns a new #WebKitWebViewSessionState, or %NULL if @data doesn't contain a     valid serialized #WebKitWebViewSessionState.
     */
    constructor(data: GLib.Bytes) 
    /**
     * Creates a new #WebKitWebViewSessionState from serialized data.
     * @constructor 
     * @param data a #GBytes
     * @returns a new #WebKitWebViewSessionState, or %NULL if @data doesn't contain a     valid serialized #WebKitWebViewSessionState.
     */
    static new(data: GLib.Bytes): WebViewSessionState
}

export interface WebsiteData {

    // Owm methods of WebKit-6.0.WebKit.WebsiteData

    /**
     * Gets the name of #WebKitWebsiteData.
     * 
     * This is the website name, normally represented by
     * a domain or host name. All local documents are grouped in the same #WebKitWebsiteData using
     * the name "Local files".
     * @returns the website name of @website_data.
     */
    get_name(): string | null
    /**
     * Gets the size of the data of types `types` in a #WebKitWebsiteData.
     * 
     * Note that currently the data size is only known for %WEBKIT_WEBSITE_DATA_DISK_CACHE data type
     * so for all other types 0 will be returned.
     * @param types a bitmask  of #WebKitWebsiteDataTypes
     * @returns the size of @website_data for the given @types.
     */
    get_size(types: WebsiteDataTypes): number
    /**
     * Gets the types of data stored in the client for a #WebKitWebsiteData.
     * 
     * These are the
     * types actually present, not the types queried with webkit_website_data_manager_fetch().
     * @returns a bitmask of #WebKitWebsiteDataTypes in @website_data
     */
    get_types(): WebsiteDataTypes
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
export class WebsiteData {

    // Own properties of WebKit-6.0.WebKit.WebsiteData

    static name: string
}

export interface WebsiteDataAccessPermissionRequestClass {

    // Own fields of WebKit-6.0.WebKit.WebsiteDataAccessPermissionRequestClass

    parent_class: GObject.ObjectClass
}

export abstract class WebsiteDataAccessPermissionRequestClass {

    // Own properties of WebKit-6.0.WebKit.WebsiteDataAccessPermissionRequestClass

    static name: string
}

export interface WebsiteDataManagerClass {

    // Own fields of WebKit-6.0.WebKit.WebsiteDataManagerClass

    parent_class: GObject.ObjectClass
}

export abstract class WebsiteDataManagerClass {

    // Own properties of WebKit-6.0.WebKit.WebsiteDataManagerClass

    static name: string
}

export interface WebsitePoliciesClass {

    // Own fields of WebKit-6.0.WebKit.WebsitePoliciesClass

    parent_class: GObject.ObjectClass
}

export abstract class WebsitePoliciesClass {

    // Own properties of WebKit-6.0.WebKit.WebsitePoliciesClass

    static name: string
}

export interface WindowPropertiesClass {

    // Own fields of WebKit-6.0.WebKit.WindowPropertiesClass

    parent_class: GObject.ObjectClass
}

export abstract class WindowPropertiesClass {

    // Own properties of WebKit-6.0.WebKit.WindowPropertiesClass

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END