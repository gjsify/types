/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './ide-1.0-ambient.d.ts';
import './ide-1.0-import.d.ts';
/**
 * Ide-1.0
 */

import type Template from '@girs/template-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Peas from '@girs/peas-1.0';
import type GModule from '@girs/gmodule-2.0';
import type GIRepository from '@girs/girepository-2.0';
import type Json from '@girs/json-1.0';
import type GtkSource from '@girs/gtksource-3.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';
import type Dazzle from '@girs/dazzle-1.0';

export namespace Ide {
    enum ApplicationMode {
        PRIMARY,
        WORKER,
        TOOL,
        TESTS,
    }
    enum BufferLineChange {
        NONE,
        ADDED,
        CHANGED,
        DELETED,
    }
    enum BuildLogStream {
        STDOUT,
        STDERR,
    }
    enum CursorType {
        COLUMN,
        SELECT,
        MATCH,
    }
    class DeviceError extends GLib.Error {
        // Own fields of Ide-1.0.DeviceError

        DEVICE: number;

        // Constructors of Ide-1.0.DeviceError

        constructor(options: { message: string; code: number });

        // Owm methods of Ide-1.0.DeviceError

        static quark(): GLib.Quark;
    }

    enum DiagnosticSeverity {
        IGNORED,
        NOTE,
        DEPRECATED,
        WARNING,
        ERROR,
        FATAL,
    }
    class DoapError extends GLib.Error {
        // Own fields of Ide-1.0.DoapError

        FORMAT: number;

        // Constructors of Ide-1.0.DoapError

        constructor(options: { message: string; code: number });

        // Owm methods of Ide-1.0.DoapError

        static quark(): GLib.Quark;
    }

    enum HighlightResult {
        STOP,
        CONTINUE,
    }
    enum IndentStyle {
        SPACES,
        TABS,
    }
    /**
     * %IDE_LAYOUT_GRID_SPLIT_LEFT:
     * %IDE_LAYOUT_GRID_SPLIT_RIGHT:
     * %IDE_LAYOUT_GRID_SPLIT_MOVE_LEFT:
     * %IDE_LAYOUT_GRID_SPLIT_MOVE_RIGHT:
     */
    enum LayoutGridSplit {
        LEFT,
        RIGHT,
        MOVE_LEFT,
        MOVE_RIGHT,
    }
    class RuntimeError extends GLib.Error {
        // Own fields of Ide-1.0.RuntimeError

        RUNTIME: number;

        // Constructors of Ide-1.0.RuntimeError

        constructor(options: { message: string; code: number });

        // Owm methods of Ide-1.0.RuntimeError

        static quark(): GLib.Quark;
    }

    /**
     * The type of keyboard mode.
     */
    enum SourceViewModeType {
        TRANSIENT,
        PERMANENT,
        MODAL,
    }
    /**
     * The type of movement.
     *
     * Some of these movements may be modified by using the modify-repeat action.
     * First adjust the repeat and then perform the "movement" action.
     */
    enum SourceViewMovement {
        /**
         * move to previous character in the file.
         *   This includes line breaks.
         */
        PREVIOUS_OFFSET,
        /**
         * move to next character in the file.
         *   This includes line breaks.
         */
        NEXT_OFFSET,
        /**
         * move to nth character in line. Use a repeat to
         *   specify the target character within the line.
         */
        NTH_CHAR,
        /**
         * move to previous character in line.
         */
        PREVIOUS_CHAR,
        /**
         * move to next character in line.
         */
        NEXT_CHAR,
        /**
         * move to line offset of zero.
         */
        FIRST_CHAR,
        /**
         * move to first non-whitespace character in line.
         */
        FIRST_NONSPACE_CHAR,
        /**
         * move to the middle character in the line.
         */
        MIDDLE_CHAR,
        /**
         * move to the last character in the line. this can be
         *   inclusve or exclusive. inclusive is equivalent to %IDE_SOURCE_VIEW_MOVEMENT_LINE_END.
         */
        LAST_CHAR,
        /**
         * move to beginning of next word.
         */
        NEXT_WORD_START,
        NEXT_FULL_WORD_START,
        /**
         * move to the next sub-word start, similar
         *   to the default in GtkTextView. This includes the underline character as a word break,
         *   as is common in Emacs.
         */
        NEXT_SUB_WORD_START,
        /**
         * move to the previous sub-wird start,
         *   similar to the default in GtkTextView. This includes the underline character as a
         *   word break, as is common in Emacs.
         */
        PREVIOUS_SUB_WORD_START,
        /**
         * move to beginning of previous word.
         */
        PREVIOUS_WORD_START,
        PREVIOUS_FULL_WORD_START,
        /**
         * move to end of previous word.
         */
        PREVIOUS_WORD_END,
        PREVIOUS_FULL_WORD_END,
        /**
         * move to end of next word.
         */
        NEXT_WORD_END,
        NEXT_FULL_WORD_END,
        /**
         * move to beginning of sentance.
         */
        SENTENCE_START,
        /**
         * move to end of sentance.
         */
        SENTENCE_END,
        /**
         * move to start of paragraph.
         */
        PARAGRAPH_START,
        /**
         * move to end of paragraph.
         */
        PARAGRAPH_END,
        /**
         * move to previous line, keeping line offset if possible.
         */
        PREVIOUS_LINE,
        /**
         * move to next line, keeping line offset if possible.
         */
        NEXT_LINE,
        /**
         * move to first line in file, line offset of zero.
         */
        FIRST_LINE,
        /**
         * move to nth line, line offset of zero. use repeat to
         *   select the given line number.
         */
        NTH_LINE,
        /**
         * move to last line in file, with line offset of zero.
         */
        LAST_LINE,
        /**
         * move to line based on percentage. Use repeat to
         *   specify the percentage, 0 to 100.
         */
        LINE_PERCENTAGE,
        /**
         * special selection to select all line characters up to the
         *   cursor position. special care will be taken if the line is blank to select only the blank
         *   space if any. otherwise, the line break will be selected.
         */
        LINE_CHARS,
        /**
         * This will move you to the location of the newline at the
         *   end of the current line. It does not support exclusive will not select the newline, while
         *   inclusive will select the newline.
         */
        LINE_END,
        /**
         * move half a page up.
         */
        HALF_PAGE_UP,
        /**
         * move half a page down.
         */
        HALF_PAGE_DOWN,
        /**
         * move half a page left.
         */
        HALF_PAGE_LEFT,
        /**
         * move half a page right.
         */
        HALF_PAGE_RIGHT,
        /**
         * move a full page up.
         */
        PAGE_UP,
        /**
         * move a full page up, but extend to whole line.
         */
        PAGE_UP_LINES,
        /**
         * move a full page down.
         */
        PAGE_DOWN,
        /**
         * move a full page down, but extend to whole line.
         */
        PAGE_DOWN_LINES,
        /**
         * move to viewport up by visible line, adjusting cursor
         *   to stay on screen if necessary.
         */
        SCREEN_UP,
        /**
         * move to viewport down by visible line, adjusting cursor
         *   to stay on screen if necessary.
         */
        SCREEN_DOWN,
        /**
         * move to viewport left by visible char, adjusting cursor
         *   to stay on screen if necessary.
         */
        SCREEN_LEFT,
        /**
         * move to viewport right by visible char, adjusting cursor
         *   to stay on screen if necessary.
         */
        SCREEN_RIGHT,
        /**
         * move to the top of the screen.
         */
        SCREEN_TOP,
        /**
         * move to the middle of the screen.
         */
        SCREEN_MIDDLE,
        /**
         * move to the bottom of the screen.
         */
        SCREEN_BOTTOM,
        /**
         * move to match of brace, bracket, comment.
         */
        MATCH_SPECIAL,
        /**
         * scroll until insert cursor or [count]th line is at screen top.
         */
        SCROLL_SCREEN_TOP,
        /**
         * scroll until insert cursor or [count]th line is at screen center.
         */
        SCROLL_SCREEN_CENTER,
        /**
         * scroll until insert cursor or [count]th line is at screen bottom.
         */
        SCROLL_SCREEN_BOTTOM,
        /**
         * scroll until insert cursor or [count]th char is at screen left.
         */
        SCROLL_SCREEN_LEFT,
        /**
         * scroll until insert cursor or [count]th char is at screen right.
         */
        SCROLL_SCREEN_RIGHT,
        PREVIOUS_UNMATCHED_BRACE,
        NEXT_UNMATCHED_BRACE,
        PREVIOUS_UNMATCHED_PAREN,
        NEXT_UNMATCHED_PAREN,
        NEXT_MATCH_MODIFIER,
        PREVIOUS_MATCH_MODIFIER,
        /**
         * move to the next matching char according to f and t in vim.
         */
        NEXT_MATCH_SEARCH_CHAR,
        /**
         * move to the previous matching char according to F and T in vim.
         */
        PREVIOUS_MATCH_SEARCH_CHAR,
    }
    /**
     * The style of theatric.
     */
    enum SourceViewTheatric {
        /**
         * expand from selection location.
         */
        EXPAND,
        /**
         * shrink from selection location.
         */
        SHRINK,
    }
    enum SymbolKind {
        NONE,
        ARRAY,
        BOOLEAN,
        CLASS,
        CONSTANT,
        CONSTRUCTOR,
        ENUM,
        ENUM_VALUE,
        FIELD,
        FILE,
        FUNCTION,
        HEADER,
        INTERFACE,
        METHOD,
        MODULE,
        NAMESPACE,
        NUMBER,
        PACKAGE,
        PROPERTY,
        SCALAR,
        STRING,
        STRUCT,
        UNION,
        VARIABLE,
        KEYWORD,
        UI_ATTRIBUTES,
        UI_CHILD,
        UI_ITEM,
        UI_MENU,
        UI_MENU_ATTRIBUTE,
        UI_OBJECT,
        UI_PACKING,
        UI_PROPERTY,
        UI_SECTION,
        UI_SIGNAL,
        UI_STYLE,
        UI_STYLE_CLASS,
        UI_SUBMENU,
        UI_TEMPLATE,
        XML_ATTRIBUTE,
        XML_DECLARATION,
        XML_ELEMENT,
        XML_COMMENT,
        XML_CDATA,
    }
    enum ThreadPoolKind {
        COMPILER,
        INDEXER,
        LAST,
    }
    enum TransferError {
        UNKNOWN,
        CONNECTION_IS_METERED,
    }
    /**
     * Error codes returned by #IdeUri methods.
     */
    class UriError extends GLib.Error {
        // Own fields of Ide-1.0.UriError

        MISC: number;
        BAD_SCHEME: number;
        BAD_USER: number;
        BAD_PASSWORD: number;
        BAD_AUTH_PARAMS: number;
        BAD_HOST: number;
        BAD_PORT: number;
        BAD_PATH: number;
        BAD_QUERY: number;
        BAD_FRAGMENT: number;

        // Constructors of Ide-1.0.UriError

        constructor(options: { message: string; code: number });
    }

    enum VcsConfigType {
        FULL_NAME,
        EMAIL,
    }
    const BUFFER_LINE_FLAGS_DIAGNOSTICS_MASK: number;
    const BUILD_PHASE_MASK: number;
    const BUILD_PHASE_WHENCE_MASK: number;
    const ENABLE_TRACE: number;
    const FILE_SETTINGS_EXTENSION_POINT: string;
    const LANGSERV_COMPLETION_PROVIDER_PRIORITY: number;
    const PREFERENCES_PERSPECTIVE_PRIORITY: number;
    const RECENT_PROJECTS_BOOKMARK_FILENAME: string;
    const RECENT_PROJECTS_BUILD_SYSTEM_GROUP_PREFIX: string;
    const RECENT_PROJECTS_GROUP: string;
    const RECENT_PROJECTS_LANGUAGE_GROUP_PREFIX: string;
    /**
     * Asynchronously creates a new #IdeBuildSystem instance using the registered
     * #GIOExtensionPoint system. Each extension point will be tried asynchronously
     * by priority until one has been found that supports `project_file`.
     *
     * If no build system could be found, then ide_build_system_new_finish() will
     * return %NULL.
     * @param context #IdeBuildSystem
     * @param project_file A #GFile containing the directory or project file.
     * @param build_system_hint A hint for the build system to use
     * @param cancellable A #GCancellable
     * @param callback A callback to execute upon completion
     */
    function build_system_new_async(
        context: Context,
        project_file: Gio.File,
        build_system_hint: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Context> | null,
    ): void;
    /**
     * Complete an asynchronous call to ide_build_system_new_async().
     * @param result
     * @returns An #IdeBuildSystem if successful; otherwise   %NULL and @error is set.
     */
    function build_system_new_finish(result: Gio.AsyncResult): BuildSystem;
    function build_utils_color_codes_filtering(txt: string): string;
    function completion_provider_context_current_word(context: GtkSource.CompletionContext): string;
    function completion_provider_context_in_comment(context: GtkSource.CompletionContext): boolean;
    function completion_provider_context_in_comment_or_string(context: GtkSource.CompletionContext): boolean;
    function device_error_quark(): GLib.Quark;
    function diagnostic_severity_to_string(severity: DiagnosticSeverity): string;
    function doap_error_quark(): GLib.Quark;
    function flatpak_get_app_path(path: string): string;
    /**
     * This is just like g_task_return_boolean() except that it enforces
     * that the current stack return to the main context before dispatching
     * the callback.
     * @param task
     * @param value
     */
    function g_task_return_boolean_from_main(task: Gio.Task, value: boolean): void;
    /**
     * Like g_task_return_error() but ensures we return to the main loop before
     * dispatching the result.
     * @param task A #GTask
     * @param error A #GError.
     */
    function g_task_return_error_from_main(task: Gio.Task, error: GLib.Error): void;
    function g_task_return_int_from_main(task: Gio.Task, value: number): void;
    function g_task_return_pointer_from_main(task: Gio.Task, value?: any | null): void;
    function get_program_name(): string;
    function get_resource(): Gio.Resource;
    function get_system_arch(): string;
    function get_system_page_size(): number;
    function get_system_type(): string;
    function gettext(message: string): string;
    function icons_get_resource(): Gio.Resource;
    /**
     * This function checks to see if the application is running within
     * a flatpak. This might be useful for cases where you need to perform
     * a different command when you are in the bundled flatpak version.
     */
    function is_flatpak(): boolean;
    function langserv_decode_completion_kind(kind: number): SymbolKind;
    function langserv_decode_symbol_kind(kind: number): SymbolKind;
    function language_format_header(language: GtkSource.Language, header: string): string;
    function log_get_verbosity(): number;
    /**
     * Increases the amount of logging that will occur. By default, only
     * warning and above will be displayed.
     *
     * Calling this once will cause G_LOG_LEVEL_MESSAGE to be displayed.
     * Calling this twice will cause G_LOG_LEVEL_INFO to be displayed.
     * Calling this thrice will cause G_LOG_LEVEL_DEBUG to be displayed.
     * Calling this four times will cause IDE_LOG_LEVEL_TRACE to be displayed.
     *
     * Note that many DEBUG and TRACE level log messages are only compiled into
     * debug builds, and therefore will not be available in release builds.
     *
     * This method is meant to be called for every -v provided on the command
     * line.
     *
     * Calling this method more than four times is acceptable.
     */
    function log_increase_verbosity(): void;
    /**
     * Initializes the logging subsystem.
     * @param stdout_ Indicates logging should be written to stdout.
     * @param filename An optional file in which to store logs.
     */
    function log_init(stdout_: boolean, filename: string): void;
    function log_set_verbosity(level: number): void;
    /**
     * Cleans up after the logging subsystem.
     */
    function log_shutdown(): void;
    /**
     * This function will collapse a path that starts with the users home
     * directory into a shorthand notation using ~/ for the home directory.
     *
     * If the path does not have the home directory as a prefix, it will
     * simply return a copy of `path`.
     * @param path
     * @returns A new path, possibly collapsed.
     */
    function path_collapse(path: string): string;
    /**
     * This function will expand various "shell-like" features of the provided
     * path using the POSIX wordexp(3) function. Command substitution will
     * not be enabled, but path features such as ~user will be expanded.
     * @param path
     * @returns A newly allocated string containing the   expansion. A copy of the input string upon failure to expand.
     */
    function path_expand(path: string): string;
    function runtime_error_quark(): GLib.Quark;
    function set_program_name(program_name: string): void;
    function source_style_scheme_apply_style(
        style_scheme: GtkSource.StyleScheme,
        style: string,
        tag: Gtk.TextTag,
    ): boolean;
    function symbol_kind_get_icon_name(kind: SymbolKind): string;
    /**
     * Runs the callback on the thread pool thread.
     * @param kind the threadpool kind to use.
     * @param func A function to call in the worker thread.
     */
    function thread_pool_push(kind: ThreadPoolKind, func: ThreadFunc): void;
    /**
     * This pushes a task to be executed on a worker thread based on the task kind as denoted by
     * `kind`. Some tasks will be placed on special work queues or throttled based on priority.
     * @param kind The task kind.
     * @param task A #GTask to execute.
     * @param func The thread worker to execute for @task.
     */
    function thread_pool_push_task(kind: ThreadPoolKind, task: Gio.Task, func: Gio.TaskThreadFunc): void;
    function uri_build(
        scheme: string,
        userinfo: string,
        host: string,
        port: string,
        path: string,
        query: string,
        fragment: string,
    ): string;
    function uri_error_quark(): GLib.Quark;
    /**
     * Utility function for parsing "network" URIs. This extracts just the
     * scheme, host, and port from `uri_string`. All three out parameters
     * are mandatory.
     * @param uri_string a string containing a network URI
     * @param flags flags for parsing @uri_string
     * @returns %TRUE on success, %FALSE on failure.
     */
    function uri_parse_host(uri_string: string, flags: UriParseFlags): boolean;
    /**
     * Many URI schemes include one or more attribute/value pairs
     * as part of the URI value. This method can be used to parse them
     * into a hash table.
     *
     * The `params` string is assumed to still be %<!-- -->-encoded, but
     * the returned values will be fully decoded. (Thus it is possible
     * that the returned values may contain '=' or `separator,` if the
     * value was encoded in the input.) Invalid %<!-- -->-encoding is
     * treated as with the non-%IDE_URI_PARSE_STRICT rules for ide_uri_new().
     * (However, if `params` is the path or query string from a #IdeUri that
     * was parsed with %IDE_URI_PARSE_STRICT, then you already know that it
     * does not contain any invalid encoding.)
     * @param params a string containing "attribute=value" parameters
     * @param length the length of @params, or -1 if it is NUL-terminated
     * @param separator the separator character between parameters.   (usually ';', but sometimes '&')
     * @param case_insensitive whether to match parameter names case-insensitively
     * @returns a hash table of attribute/value pairs. Both names and values will be fully-decoded. If @params cannot be parsed (eg, it contains two @separator characters in a row), then %NULL is returned.
     */
    function uri_parse_params(
        params: string,
        length: number,
        separator: number,
        case_insensitive: boolean,
    ): GLib.HashTable<string, string>;
    /**
     * Parses `uri_string` more-or-less according to the generic grammar of
     * RFC 3986 ("more" if `strict` is %TRUE, "less" if %FALSE), and
     * outputs the pieces into the provided variables. This is a low-level
     * method that does not do any pre- or post-processing of `uri_string,`
     * and is "garbage in, garbage out"; it just splits `uri_string` into
     * pieces at the appropriate punctuation characters (consuming
     * delimiters as appropriate), and returns the pieces. Components that
     * are not present in `uri_string` will be set to %NULL (but note that
     * the path is always present, though it may be an empty string).
     * @param uri_string a string containing a relative or absolute URI
     * @param strict whether to parse @uri_string strictly
     */
    function uri_split(uri_string: string, strict: boolean): void;
    function vcs_new_async(
        context: Context,
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Context> | null,
    ): void;
    /**
     * Completes a call to ide_vcs_new_async().
     * @param result
     * @returns An #IdeVcs.
     */
    function vcs_new_finish(result: Gio.AsyncResult): Vcs;
    function vcs_register_ignored(pattern: string): void;
    function vcs_uri_is_valid(uri_string: string): boolean;
    /**
     * Gets the workbench `widget` is associated with, if any.
     *
     * If no workbench is associated, NULL is returned.
     * @param widget
     * @returns An #IdeWorkbench
     */
    function widget_get_workbench(widget: Gtk.Widget): Workbench | null;
    /**
     * Calls `handler` when the #IdeContext has been set for `widget`.
     * @param widget A #GtkWidget
     * @param handler A callback to handle the context
     */
    function widget_set_context_handler(widget: Gtk.Widget, handler: WidgetContextHandler): void;
    interface BuildLogObserver {
        (log_stream: BuildLogStream, message: string, message_len: number): void;
    }
    interface ExtensionSetAdapterForeachFunc {
        (set: ExtensionSetAdapter, plugin_info: Peas.PluginInfo, extension: Peas.Extension): void;
    }
    interface HighlightCallback {
        (begin: Gtk.TextIter, end: Gtk.TextIter, style_name: string): HighlightResult;
    }
    interface RunHandler {
        (self: RunManager, runner: Runner): void;
    }
    interface ThreadFunc {
        (): void;
    }
    interface WidgetContextHandler {
        (widget: Gtk.Widget, context: Context): void;
    }
    enum BufferLineFlags {
        NONE,
        ADDED,
        CHANGED,
        DELETED,
        ERROR,
        WARNING,
        NOTE,
    }
    enum BuildPhase {
        NONE,
        PREPARE,
        DOWNLOADS,
        DEPENDENCIES,
        AUTOGEN,
        CONFIGURE,
        BUILD,
        INSTALL,
        EXPORT,
        FINAL,
        BEFORE,
        AFTER,
        FINISHED,
        FAILED,
    }
    enum SymbolFlags {
        NONE,
        IS_STATIC,
        IS_MEMBER,
        IS_DEPRECATED,
    }
    /**
     * Flags that control how a URI string is parsed (or re-parsed).
     */
    enum UriParseFlags {
        /**
         * Parse the URI strictly according to the RFC
         *     3986 grammar.
         */
        STRICT,
        /**
         * Parse the URI according to the HTML5 web
         *     address parsing rules.
         */
        HTML5,
        /**
         * Disallow Internationalized URIs; return an
         *     error if the URI contains non-ASCII characters
         */
        NO_IRI,
        /**
         * Split the userinfo into user and password,
         *     separated by ':'.
         */
        PASSWORD,
        /**
         * Split the userinfo into user/password and
         *     parameters, separated by ';'.
         */
        AUTH_PARAMS,
        /**
         * Do not parse the host as a DNS host/IP address.
         *     (Eg, for smb URIs with NetBIOS hostnames).
         */
        NON_DNS,
        /**
         * Decode even reserved %<!-- -->encoded
         *     characters in the URI (unless this would result in non-UTF8
         *     strings). Using this flag means that you cannot reliably
         *     convert the parsed URI back to string form with
         *     ide_uri_to_string().
         */
        DECODED,
        /**
         * Return an error if non-UTF8 characters are
         *     encountered in the URI.
         */
        UTF8_ONLY,
    }
    enum UriToStringFlags {
        AUTH_PARAMS,
        FRAGMENT,
    }
    enum WorkbenchOpenFlags {
        NONE,
        BACKGROUND,
    }
    module Application {
        // Constructor properties interface
    }

    class Application extends Dazzle.Application {
        // Constructors of Ide-1.0.Application

        static ['new'](): Application;

        // Owm methods of Ide-1.0.Application

        /**
         * This function returns the thread-id of the main thread for the applicaiton.
         * This is only really useful to determine if you are in the main UI thread.
         * This is used by IDE_IS_MAIN_THREAD for assertion checks.
         */
        static get_main_thread(): GLib.Thread;

        // Owm methods of Ide-1.0.Application

        add_reaper(reaper: Dazzle.DirectoryReaper): void;
        get_keybindings_mode(): string;
        get_mode(): ApplicationMode;
        /**
         * This method will retreive an #IdeRecentProjects for the application that
         * represents recent and discover projects on the system. The first time
         * the #IdeRecentProjects is loaded, discovery of projects will occur. There
         * is no need to call ide_recent_projects_discover_async().
         *
         * If you would like to display a spinner while discovery is in process, simply
         * connect to the #IdeRecentProjects:busy: property notification.
         * @returns An #IdeRecentProjects.
         */
        get_recent_projects(): RecentProjects;
        /**
         * Gets the startup time of the application.
         * @returns A #GDateTime.
         */
        get_started_at(): GLib.DateTime;
        /**
         * Asynchronously requests a #GDBusProxy to a service provided in a worker
         * process. The worker should be an #IdeWorker implemented by the plugin named
         * `plugin_name`. The #IdeWorker is responsible for created both the service
         * registered on the bus and the proxy to it.
         *
         * The #IdeApplication is responsible for spawning a subprocess for the worker.
         *
         * `callback` should call ide_application_get_worker_finish() with the result
         * provided to retrieve the result.
         * @param plugin_name The name of the plugin.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback or %NULL.
         */
        get_worker_async(
            plugin_name: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes an asynchronous request to get a proxy to a worker process.
         * @param result A #GAsyncResult
         * @returns A #GDBusProxy or %NULL.
         */
        get_worker_finish(result: Gio.AsyncResult): Gio.DBusProxy;
        open_project(file: Gio.File): boolean;
        show_projects_window(): void;
    }

    module BackForwardItem {
        // Constructor properties interface
    }

    class BackForwardItem extends Object {
        // Own properties of Ide-1.0.BackForwardItem

        mark: Gtk.TextMark;
        /**
         * The #IdeBackForwardItem:uri property contains the location for the
         * back/forward item.
         *
         * This might be a uri to a file, including a line number.
         *
         * #IdeWorkbenchAddin can hook how these are loaded, by implementing the
         * IdeWorkbenchAddin::can_open() vfunc and associated functions.
         */
        uri: Uri;

        // Constructors of Ide-1.0.BackForwardItem

        static ['new'](context: Context, uri: Uri, mark: Gtk.TextMark): BackForwardItem;

        // Owm methods of Ide-1.0.BackForwardItem

        chain(other: BackForwardItem): boolean;
        /**
         * Gets the text mark or %NULL.
         * @returns A #GtkTextMark or %NULL.
         */
        get_mark(): Gtk.TextMark;
        /**
         * Gets the uri for the #IdeBackForwardItem.
         * @returns An #IdeUri or %NULL.
         */
        get_uri(): Uri | null;
    }

    module BackForwardList {
        // Signal callback interfaces

        interface NavigateTo {
            (object: BackForwardItem): void;
        }

        // Constructor properties interface
    }

    class BackForwardList extends Object {
        // Own properties of Ide-1.0.BackForwardList

        readonly can_go_backward: boolean;
        readonly canGoBackward: boolean;
        readonly can_go_forward: boolean;
        readonly canGoForward: boolean;
        readonly current_item: BackForwardItem;
        readonly currentItem: BackForwardItem;

        // Owm methods of Ide-1.0.BackForwardList

        /**
         * Branches `self` into a newly created #IdeBackForwardList.
         *
         * This can be used independently and then merged back into a global
         * #IdeBackForwardList. This can be useful in situations where you have
         * multiple sets of editors.
         * @returns An #IdeBackForwardList
         */
        branch(): BackForwardList;
        get_can_go_backward(): boolean;
        get_can_go_forward(): boolean;
        /**
         * Retrieves the current #IdeBackForwardItem or %NULL if no items have been
         * added to the #IdeBackForwardList.
         * @returns An #IdeBackForwardItem or %NULL.
         */
        get_current_item(): BackForwardItem | null;
        go_backward(): void;
        go_forward(): void;
        merge(branch: BackForwardList): void;
        push(item: BackForwardItem): void;
    }

    module Buffer {
        // Signal callback interfaces

        interface CursorMoved {
            (location: Gtk.TextIter): void;
        }

        interface Destroy {
            (): void;
        }

        interface LineFlagsChanged {
            (): void;
        }

        interface Loaded {
            (): void;
        }

        interface Saved {
            (): void;
        }

        interface SymbolResolverLoaded {
            (): void;
        }

        // Constructor properties interface
    }

    class Buffer extends GtkSource.Buffer {
        // Own properties of Ide-1.0.Buffer

        readonly busy: boolean;
        readonly changed_on_volume: boolean;
        readonly changedOnVolume: boolean;
        context: Context;
        file: File;
        readonly has_diagnostics: boolean;
        readonly hasDiagnostics: boolean;
        highlight_diagnostics: boolean;
        highlightDiagnostics: boolean;
        readonly read_only: boolean;
        readonly readOnly: boolean;
        style_scheme_name: string;
        styleSchemeName: string;
        title: string;

        // Owm methods of Ide-1.0.Buffer

        /**
         * Update the #IdeBuffer:read-only property and the corresponding
         * modification time (mtime).
         */
        check_for_volume_change(): void;
        format_selection_async(
            options: FormatterOptions,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        format_selection_finish(result: Gio.AsyncResult): boolean;
        /**
         * Gets the #IdeBuffer:busy property.
         * Return whether the buffer is performing background work or not.
         * @returns %TRUE if the #IdeBuffer is performing background work. Otherwise %FALSE.
         */
        get_busy(): boolean;
        get_change_count(): number;
        /**
         * Gets if the file backing the buffer has changed on the underlying storage.
         *
         * Use ide_buffer_manager_load_file_async() to reload the buffer.
         * @returns %TRUE if the file has changed.
         */
        get_changed_on_volume(): boolean;
        /**
         * Gets the contents of the buffer as GBytes.
         *
         * By using this function to get the bytes, you allow #IdeBuffer to avoid calculating the buffer
         * text unnecessarily, potentially saving on allocations.
         *
         * Additionally, this allows the buffer to update the state in #IdeUnsavedFiles if the content
         * is out of sync.
         * @returns A #GBytes containing the buffer content.
         */
        get_content(): GLib.Bytes;
        /**
         * Gets the #IdeBuffer:context property. This is the #IdeContext that owns the buffer.
         * @returns An #IdeContext.
         */
        get_context(): Context;
        /**
         * Gets the first diagnostic that overlaps the position
         * @param iter a #GtkTextIter.
         * @returns An #IdeDiagnostic or %NULL.
         */
        get_diagnostic_at_iter(iter: Gtk.TextIter): Diagnostic | null;
        /**
         * Gets the underlying file behind the buffer.
         * @returns An #IdeFile.
         */
        get_file(): File;
        /**
         * Gets the #IdeBuffer:highlight-diagnostics property.
         * Return whether the diagnostic warnings and errors should be highlighted.
         * @returns %TRUE if diagnostics are highlighted. Otherwise %FALSE.
         */
        get_highlight_diagnostics(): boolean;
        /**
         * Gets the location of the insert mark as an #IdeSourceLocation.
         * @returns An #IdeSourceLocation
         */
        get_insert_location(): SourceLocation;
        /**
         * Fill `iter` with the position designated by `location`.
         * @param location a #IdeSourceLocation.
         */
        get_iter_at_source_location(location: SourceLocation): void;
        /**
         * Gets the location of the iter as an #IdeSourceLocation.
         * @param iter
         * @returns An #IdeSourceLocation
         */
        get_iter_location(iter: Gtk.TextIter): SourceLocation;
        /**
         * Return the flags set for the #IdeBuffer `line` number.
         * (diagnostics and errors messages, line changed or added, notes)
         * @param line a buffer line number.
         * @returns An #IdeBufferLineFlags struct.
         */
        get_line_flags(line: number): BufferLineFlags;
        /**
         * Gets the #IdeBuffer:read-only property. This property indicate if the underlying file is read only or not.
         * @returns %TRUE if the #IdeBuffer is read only. Otherwise %FALSE.
         */
        get_read_only(): boolean;
        /**
         * Gets the #IdeRenameProvider for this buffer, or %NULL.
         * @returns An #IdeRenameProvider or %NULL if there   is no #IdeRenameProvider that can statisfy the buffer.
         */
        get_rename_provider(): RenameProvider | null;
        /**
         * This function acts like gtk_text_buffer_get_selection_bounds() except that it always
         * places the location of the insert mark at `insert` and the location of the selection
         * mark at `selection`.
         *
         * Calling gtk_text_iter_order() with the results of this function would be equivalent
         * to calling gtk_text_buffer_get_selection_bounds().
         */
        get_selection_bounds(): void;
        get_spell_checking(): boolean;
        /**
         * Gets the #IdeBuffer:style-scheme-name property.
         * This property contains the current style scheme used by the buffer.
         * @returns A string containing the name of the currently used style scheme.
         */
        get_style_scheme_name(): string;
        /**
         * Asynchronously get a possible symbol at `location`.
         * @param location a #GtkTextIter indicating a position to search for a symbol.
         * @param cancellable A #GCancellable.
         * @param callback A #GAsyncReadyCallback.
         */
        get_symbol_at_location_async(
            location: Gtk.TextIter,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes an asynchronous request to locate a symbol at a location.
         * @param result A #GAsyncResult.
         * @returns An #IdeSymbol or %NULL.
         */
        get_symbol_at_location_finish(result: Gio.AsyncResult): Symbol;
        /**
         * Gets the symbol resolver for the buffer based on the current language.
         * @returns An #IdeSymbolResolver or %NULL.
         */
        get_symbol_resolver(): SymbolResolver | null;
        /**
         * Gets the #IdeBuffer:title property. This property contains a title for the buffer suitable
         * for display.
         * @returns A string containing the buffer title.
         */
        get_title(): string;
        get_uri(): string;
        /**
         * Gets the word found under the position denoted by `iter`.
         * @param iter A #GtkTextIter.
         * @returns A newly allocated string.
         */
        get_word_at_iter(iter: Gtk.TextIter): string;
        hold(): void;
        /**
         * Force the #IdeBuffer to rebuild the highlight.
         */
        rehighlight(): void;
        release(): void;
        /**
         * Sets the underlying file to use when saving and loading `self` to and from storage.
         * @param file An #IdeFile.
         */
        set_file(file: File): void;
        /**
         * Sets the #IdeBuffer:highlight-diagnostics property.
         * Sets whether the diagnostic warnings and errors should be highlighted.
         * @param highlight_diagnostics Whether to highlight the diagnostics or not.
         */
        set_highlight_diagnostics(highlight_diagnostics: boolean): void;
        set_spell_checking(enable: boolean): void;
        /**
         * Sets the #IdeBuffer:style-scheme-name property.
         * Sets the style scheme to be used by this buffer.
         * @param style_scheme_name A string containing the name of the style scheme to use.
         */
        set_style_scheme_name(style_scheme_name: string): void;
        sync_to_unsaved_files(): void;
        /**
         * Trim trailing whitespaces from the buffer.
         */
        trim_trailing_whitespace(): void;
    }

    module BufferChangeMonitor {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface
    }

    class BufferChangeMonitor extends Object {
        // Own properties of Ide-1.0.BufferChangeMonitor

        buffer: Buffer;

        // Owm methods of Ide-1.0.BufferChangeMonitor

        emit_changed(): void;
        get_change(iter: Gtk.TextIter): BufferLineChange;
        reload(): void;
    }

    module BufferManager {
        // Signal callback interfaces

        interface BufferFocusEnter {
            (buffer: Buffer): void;
        }

        interface BufferFocusLeave {
            (buffer: Buffer): void;
        }

        interface BufferLoaded {
            (buffer: Buffer): void;
        }

        interface BufferSaved {
            (buffer: Buffer): void;
        }

        interface BufferUnloaded {
            (buffer: Buffer): void;
        }

        interface CreateBuffer {
            (file: File): Buffer | null;
        }

        interface LoadBuffer {
            (buffer: Buffer, create_new_view: boolean): void;
        }

        interface SaveBuffer {
            (buffer: Buffer): void;
        }

        // Constructor properties interface
    }

    class BufferManager<A extends GObject.Object = GObject.Object> extends Object {
        // Own properties of Ide-1.0.BufferManager

        auto_save: boolean;
        autoSave: boolean;
        auto_save_timeout: number;
        autoSaveTimeout: number;
        focus_buffer: Buffer;
        focusBuffer: Buffer;
        minimum_word_size: number;
        minimumWordSize: number;

        // Owm methods of Ide-1.0.BufferManager

        /**
         * Asynchronously requests that all of `edits` are applied to the buffers
         * in the project. If the buffer has not been loaded for a particular edit,
         * it will be loaded.
         * @param edits An #GPtrArray of #IdeProjectEdit
         * @param cancellable A #GCancellable or %NULL
         * @param callback the callback to complete the request
         */
        apply_edits_async(
            edits: ProjectEdit[],
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        apply_edits_finish(result: Gio.AsyncResult): boolean;
        /**
         * Creates a new #IdeBuffer that does not yet have a backing file attached to it. Interfaces
         * should perform a save-as operation to save the file to a real file.
         *
         * ide_file_get_file() will return %NULL to denote this type of buffer.
         * @returns A newly created #IdeBuffer
         */
        create_temporary_buffer(): Buffer;
        /**
         * Gets the buffer for a given file. If it has not yet been loaded, %NULL is
         * returned.
         * @param file A #GFile.
         * @returns An #IdeBuffer or %NULL.
         */
        find_buffer(file: Gio.File): Buffer | null;
        /**
         * Returns a newly allocated #GPtrArray of all the buffers managed by the #IdeBufferManager
         * instance.
         *
         * Buffers are generally not added to the buffer list until they have been loaded.
         * @returns A #GPtrArray of buffers.
         */
        get_buffers(): Buffer[];
        /**
         * Gets the #IdeBufferManager:focus-buffer property. This is the buffer behind
         * the current selected view.
         * @returns An #IdeBuffer or %NULL.
         */
        get_focus_buffer(): Buffer;
        /**
         * Gets the #IdeBufferManager:max-file-size property. This contains the maximum file size in bytes
         * that a file may be to be loaded by the #IdeBufferManager.
         *
         * If zero, no size limits will be enforced.
         * @returns A #gsize in bytes or zero.
         */
        get_max_file_size(): number;
        get_n_buffers(): number;
        /**
         * Gets the #GtkSourceCompletionWords completion provider that will complete
         * words using the loaded documents.
         * @returns A #GtkSourceCompletionWords
         */
        get_word_completion(): GtkSource.CompletionWords;
        /**
         * Checks to see if the buffer manager has the file loaded.
         * @param file An #IdeFile.
         * @returns %TRUE if @file is loaded.
         */
        has_file(file: Gio.File): boolean;
        /**
         * Asynchronously requests that the file represented by `file` is loaded. If the file is already
         * loaded, the previously loaded version of the file will be returned, asynchronously.
         *
         * Before loading the file, #IdeBufferManager will check the file size to help protect itself
         * from the user accidentally loading very large files. You can change the maximum size of file
         * that will be loaded with the #IdeBufferManager:max-file-size property.
         *
         * See ide_buffer_manager_load_file_finish() for how to complete this asynchronous request.
         * @param file
         * @param force_reload
         * @param flags
         * @param cancellable
         * @param callback
         */
        load_file_async(
            file: File,
            force_reload: boolean,
            flags: WorkbenchOpenFlags,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes an asynchronous request to load a file via ide_buffer_manager_load_file_async().
         * If the buffer was already loaded, this function will return a reference to the previous buffer
         * with its reference count incremented by one.
         * @param result
         * @returns An #IdeBuffer if successful; otherwise %NULL and @error is set.
         */
        load_file_finish(result: Gio.AsyncResult): Buffer;
        save_all_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        save_all_finish(result: Gio.AsyncResult): boolean;
        /**
         * This function asynchronously requests that a buffer be saved to the storage represented by
         * `file`. `buffer` should be a previously loaded buffer owned by `self,` such as one loaded with
         * ide_buffer_manager_load_file_async().
         *
         * Call ide_buffer_manager_save_file_finish() to complete this asynchronous request.
         * @param buffer
         * @param file
         * @param progress
         * @param cancellable
         * @param callback
         */
        save_file_async(
            buffer: Buffer,
            file: File,
            progress: Progress,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * This function completes an asynchronous request to save a buffer to storage using
         * ide_buffer_manager_save_file_async(). Upon failure, %FALSE is returned and `error` is set.
         * @param result
         * @returns %TRUE if successful %FALSE upon failure and @error is set.
         */
        save_file_finish(result: Gio.AsyncResult): boolean;
        set_focus_buffer(buffer: Buffer): void;
        /**
         * Sets the maximum file size in bytes, that will be loaded by the #IdeBufferManager.
         * @param max_file_size The maximum file size in bytes, or zero for no limit.
         */
        set_max_file_size(max_file_size: number): void;
    }

    module BuildManager {
        // Signal callback interfaces

        interface BuildFailed {
            (pipeline: BuildPipeline): void;
        }

        interface BuildFinished {
            (pipeline: BuildPipeline): void;
        }

        interface BuildStarted {
            (pipeline: BuildPipeline): void;
        }

        // Constructor properties interface
    }

    class BuildManager extends Object {
        // Own properties of Ide-1.0.BuildManager

        /**
         * The "busy" property indicates if there is currently a build
         * executing. This can be bound to UI elements to display to the
         * user that a build is active (and therefore other builds cannot
         * be activated at the moment).
         */
        readonly busy: boolean;
        /**
         * Gets if the build manager can queue a build request.
         *
         * This might be false if the required runtime is not available or other
         * errors in setting up the build pipeline.
         */
        readonly can_build: boolean;
        /**
         * Gets if the build manager can queue a build request.
         *
         * This might be false if the required runtime is not available or other
         * errors in setting up the build pipeline.
         */
        readonly canBuild: boolean;
        /**
         * The "has-diagnostics" property indicates that there have been
         * diagnostics found during the last execution of the build pipeline.
         */
        readonly has_diagnostics: boolean;
        /**
         * The "has-diagnostics" property indicates that there have been
         * diagnostics found during the last execution of the build pipeline.
         */
        readonly hasDiagnostics: boolean;
        /**
         * The "last-build-time" property contains a #GDateTime of the time
         * the last build request was submitted.
         */
        readonly last_build_time: GLib.DateTime;
        /**
         * The "last-build-time" property contains a #GDateTime of the time
         * the last build request was submitted.
         */
        readonly lastBuildTime: GLib.DateTime;
        /**
         * The "message" property contains a string message describing
         * the current state of the build process. This may be bound to
         * UI elements to notify the user of the buid progress.
         */
        readonly message: string;
        readonly pipeline: BuildPipeline;
        /**
         * The "running-time" property can be bound by UI elements that
         * want to track how long the current build has taken. g_object_notify()
         * is called on a regular interval during the build so that the UI
         * elements may automatically update.
         *
         * The value of this property is a #GTimeSpan, which are 64-bit signed
         * integers with microsecond precision. See %G_USEC_PER_SEC for a constant
         * to tranform this to seconds.
         */
        readonly running_time: number;
        /**
         * The "running-time" property can be bound by UI elements that
         * want to track how long the current build has taken. g_object_notify()
         * is called on a regular interval during the build so that the UI
         * elements may automatically update.
         *
         * The value of this property is a #GTimeSpan, which are 64-bit signed
         * integers with microsecond precision. See %G_USEC_PER_SEC for a constant
         * to tranform this to seconds.
         */
        readonly runningTime: number;

        // Owm methods of Ide-1.0.BuildManager

        /**
         * This function will cancel any in-flight builds.
         *
         * You may also activate this using the "cancel" #GAction provided
         * by the #GActionGroup interface.
         */
        cancel(): void;
        clean_async(
            phase: BuildPhase,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        clean_finish(result: Gio.AsyncResult): boolean;
        /**
         * This function will request that `phase` is completed in the underlying
         * build pipeline and execute a build. Upon completion, `callback` will be
         * executed and it can determine the success or failure of the operation
         * using ide_build_manager_execute_finish().
         * @param phase An #IdeBuildPhase or 0
         * @param cancellable A #GCancellable or %NULL
         * @param callback A callback to execute upon completion
         */
        execute_async(
            phase: BuildPhase,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes a request to ide_build_manager_execute_async().
         * @param result A #GAsyncResult
         * @returns %TRUE if successful, otherwise %FALSE and @error is set.
         */
        execute_finish(result: Gio.AsyncResult): boolean;
        /**
         * Gets if the #IdeBuildManager is currently busy building the
         * project.
         *
         * See #IdeBuildManager:busy for more information.
         */
        get_busy(): boolean;
        get_can_build(): boolean;
        /**
         * This function returns a #GDateTime of the last build request. If
         * there has not yet been a build request, this will return %NULL.
         *
         * See #IdeBuildManager:last-build-time for more information.
         * @returns A #GDateTime or %NULL.
         */
        get_last_build_time(): GLib.DateTime | null;
        /**
         * This function returns the current build message as a string.
         *
         * See #IdeBuildManager:message for more information.
         * @returns A string containing the build message or %NULL
         */
        get_message(): string;
        /**
         * This function gets the current build pipeline. The pipeline will be
         * reloaded as build configurations change.
         * @returns An #IdeBuildPipeline.
         */
        get_pipeline(): BuildPipeline | null;
        /**
         * Gets the amount of elapsed time of the current build as a
         * #GTimeSpan.
         * @returns A #GTimeSpan containing the elapsed time of the build.
         */
        get_running_time(): GLib.TimeSpan;
        rebuild_async(
            phase: BuildPhase,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        rebuild_finish(result: Gio.AsyncResult): boolean;
    }

    module BuildPipeline {
        // Signal callback interfaces

        interface Diagnostic {
            (diagnostic: Diagnostic): void;
        }

        interface Finished {
            (failed: boolean): void;
        }

        interface Started {
            (phase: BuildPhase): void;
        }

        // Constructor properties interface
    }

    /**
     * The #IdeBuildPipeline is responsible for managing the build process
     * for Builder. It consists of multiple build "phases" (see #IdeBuildPhase
     * for the individual phases). An #IdeBuildStage can be attached with
     * a priority to each phase and is the primary mechanism that plugins
     * use to perform their operations in the proper ordering.
     *
     * For example, the flatpak plugin provides its download stage as part of the
     * %IDE_BUILD_PHASE_DOWNLOAD phase. The autotools plugin provides stages to
     * phases such as %IDE_BUILD_PHASE_AUTOGEN, %IDE_BUILD_PHASE_CONFIGURE,
     * %IDE_BUILD_PHASE_BUILD, and %IDE_BUILD_PHASE_INSTALL.
     *
     * If you want ensure a particular phase is performed as part of a build,
     * then fall ide_build_pipeline_request_phase() with the phase you are
     * interested in seeing complete successfully.
     *
     * If your plugin has discovered that something has changed that invalidates a
     * given phase, use ide_build_pipeline_invalidate_phase() to ensure that the
     * phase is re-executed the next time a requested phase of higher precidence
     * is requested.
     *
     * It can be useful to perform operations before or after a given stage (but
     * still be executed as part of that stage) so the %IDE_BUILD_PHASE_BEFORE and
     * %IDE_BUILD_PHASE_AFTER flags may be xor'd with the requested phase.  If more
     * precise ordering is required, you may use the priority parameter to order
     * the operation with regards to other stages in that phase.
     *
     * Transient stages may be added to the pipeline and they will be removed after
     * the ide_build_pipeline_execute_async() operation has completed successfully
     * or has failed. You can mark a stage as trandient with
     * ide_build_stage_set_transient(). This may be useful to perform operations
     * such as an "export tarball" stage which should only run once as determined
     * by the user requesting a "make dist" style operation.
     */
    class BuildPipeline extends Object {
        // Own properties of Ide-1.0.BuildPipeline

        /**
         * Gets the "busy" property. If %TRUE, the pipeline is busy executing.
         */
        busy: boolean;
        /**
         * The configuration to use for the build pipeline.
         */
        configuration: Configuration;
        readonly message: string;
        /**
         * The current build phase during execution of the pipeline.
         */
        readonly phase: BuildPhase;

        // Owm methods of Ide-1.0.BuildPipeline

        /**
         * This can be used to add a regex that will extract errors from
         * standard output. This is similar to the "errorformat" feature
         * of vim to extract warnings from standard output.
         *
         * The regex should used named capture groups to pass information
         * to the extraction process.
         *
         * Supported group names are:
         *
         *  • filename (a string path)
         *  • line (an integer)
         *  • column (an integer)
         *  • level (a string)
         *  • message (a string)
         *
         * For example, to extract warnings from GCC you might do something
         * like the following:
         *
         *   "(?<filename>[a-zA-Z0-9\\-\\.\\/]+):"
         *   "(?<line>\\d+):"
         *   "(?<column>\\d+): "
         *   "(?<level>[\\w\\s]+): "
         *   "(?<message>.*)"
         *
         * To remove the regex, use the ide_build_pipeline_remove_error_format()
         * function with the resulting format id returned from this function.
         *
         * The resulting format id will be > 0 if successful.
         * @param regex A regex to be compiled
         * @param flags
         * @returns an error format id that may be passed to   ide_build_pipeline_remove_error_format().
         */
        add_error_format(regex: string, flags: GLib.RegexCompileFlags): number;
        add_log_observer(observer: BuildLogObserver): number;
        clean_async(
            phase: BuildPhase,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        clean_finish(result: Gio.AsyncResult): boolean;
        /**
         * Insert `stage` into the pipeline as part of the phase denoted by `phase`.
         *
         * If priority is non-zero, it will be used to sort the stage among other
         * stages that are part of the same phase.
         * @param phase An #IdeBuildPhase
         * @param priority an optional priority for sorting within the phase
         * @param stage An #IdeBuildStage
         * @returns A stage_id that may be passed to ide_build_pipeline_disconnect().
         */
        connect(phase: BuildPhase, priority: number, stage: BuildStage): number;
        /**
         * This creates a new stage that will spawn a process using `launcher` and log
         * the output of stdin/stdout.
         *
         * It is a programmer error to modify `launcher` after passing it to this
         * function.
         * @param phase An #IdeBuildPhase
         * @param priority an optional priority for sorting within the phase
         * @param launcher An #IdeSubprocessLauncher
         * @returns A stage_id that may be passed to ide_build_pipeline_remove().
         */
        connect_launcher(phase: BuildPhase, priority: number, launcher: SubprocessLauncher): number;
        /**
         * This is a convenience function to create a new #IdeSubprocessLauncher
         * using the configuration and runtime associated with the pipeline.
         * @returns An #IdeSubprocessLauncher.
         */
        create_launcher(): SubprocessLauncher;
        /**
         * This removes the stage matching `stage_id`. You are returned a `stage_id` when
         * inserting a stage with functions such as ide_build_pipeline_connect()
         * or ide_build_pipeline_connect_launcher().
         *
         * Plugins should use this function to remove their stages when the plugin
         * is unloading.
         * @param stage_id An identifier returned from adding a stage
         */
        disconnect(stage_id: number): void;
        emit_diagnostic(diagnostic: Diagnostic): void;
        /**
         * Asynchronously starts the build pipeline.
         *
         * Any phase that has been invalidated up to the requested phase
         * will be executed until a stage has failed.
         *
         * Upon completion, `callback` will be executed and should call
         * ide_build_pipeline_execute_finish() to get the status of the
         * operation.
         * @param cancellable A #GCancellable or %NULL
         * @param callback a callback to execute upon completion
         */
        execute_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        execute_finish(result: Gio.AsyncResult): boolean;
        /**
         * This function will call `stage_callback` for every #IdeBuildStage registered
         * in the pipeline.
         * @param stage_callback A callback for each #IdePipelineStage
         */
        foreach_stage(stage_callback: GLib.Func): void;
        /**
         * Gets the "builddir" to be used for the build process. This is generally
         * the location that build systems will use for out-of-tree builds.
         * @returns the path of the build directory
         */
        get_builddir(): string;
        get_busy(): boolean;
        /**
         * Gets the #IdeConfiguration to use for the pipeline.
         * @returns An #IdeConfiguration
         */
        get_configuration(): Configuration;
        /**
         * Gets the current message for the build pipeline. This can be
         * shown to users in UI elements to signify progress in the
         * build.
         * @returns A string representing the   current stage of the build, or %NULL.
         */
        get_message(): string | null;
        /**
         * Gets the "srcdir" of the project. This is equivalent to the
         * IdeVcs:working-directory property as a string.
         * @returns the path of the source directory
         */
        get_srcdir(): string;
        /**
         * Gets the stage matching the identifier `stage_id` as returned from
         * ide_build_pipeline_connect().
         * @param stage_id the identfier of the stage
         * @returns An #IdeBuildStage or %NULL if the   stage could not be found.
         */
        get_stage_by_id(stage_id: number): BuildStage | null;
        /**
         * Invalidates the phases matching `phases` flags.
         *
         * If the requested phases include the phases invalidated here, the next
         * execution of the pipeline will execute thse phases.
         *
         * This should be used by plugins to ensure a particular phase is re-executed
         * upon discovering its state is no longer valid. Such an example might be
         * invalidating the %IDE_BUILD_PHASE_AUTOGEN phase when the an autotools
         * projects autogen.sh file has been changed.
         * @param phases The phases to invalidate
         */
        invalidate_phase(phases: BuildPhase): void;
        rebuild_async(
            phase: BuildPhase,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        rebuild_finish(result: Gio.AsyncResult): boolean;
        /**
         * Removes an error format that was registered with
         * ide_build_pipeline_add_error_format().
         * @param error_format_id an identifier for the error format.
         * @returns %TRUE if the error format was removed.
         */
        remove_error_format(error_format_id: number): boolean;
        remove_log_observer(observer_id: number): boolean;
        /**
         * Requests that the next execution of the pipeline will build up to `phase`
         * including all stages that were previously invalidated.
         * @param phase An #IdeBuildPhase
         * @returns %TRUE if a stage is known to require execution.
         */
        request_phase(phase: BuildPhase): boolean;
    }

    module BuildStage {
        // Signal callback interfaces

        interface Chain {
            (object: BuildStage): boolean;
        }

        interface Query {
            (pipeline: BuildPipeline, cancellable?: Gio.Cancellable | null): void;
        }

        interface Reap {
            (reaper: Dazzle.DirectoryReaper): void;
        }

        // Constructor properties interface
    }

    class BuildStage extends Object {
        // Own properties of Ide-1.0.BuildStage

        /**
         * Most build systems will preserve stderr for the processes they call, such
         * as gcc, clang, and others. However, if your build system redirects all
         * output to stdout, you may need to set this property to %TRUE to ensure
         * that Builder will extract errors from stdout.
         *
         * One such example is Ninja.
         */
        check_stdout: boolean;
        /**
         * Most build systems will preserve stderr for the processes they call, such
         * as gcc, clang, and others. However, if your build system redirects all
         * output to stdout, you may need to set this property to %TRUE to ensure
         * that Builder will extract errors from stdout.
         *
         * One such example is Ninja.
         */
        checkStdout: boolean;
        /**
         * The "completed" property is set to %TRUE after the pipeline has
         * completed processing the stage. When the pipeline invalidates
         * phases, completed may be reset to %FALSE.
         */
        completed: boolean;
        /**
         * If the build stage is disabled. This allows you to have a stage that is
         * attached but will not be activated during execution.
         *
         * You may enable it later and then re-execute the pipeline.
         *
         * If the stage is both transient and disabled, it will not be removed during
         * the transient cleanup phase.
         */
        disabled: boolean;
        /**
         * The name of the build stage. This is only used by UI to view
         * the build pipeline.
         */
        name: string;
        /**
         * The "stdout-path" property allows a build stage to redirect its log
         * messages to a stdout file. Instead of passing stdout along to the
         * build pipeline, they will be redirected to this file.
         *
         * For safety reasons, the contents are first redirected to a temporary
         * file and will be redirected to the stdout-path location after the
         * build stage has completed executing.
         */
        stdout_path: string;
        /**
         * The "stdout-path" property allows a build stage to redirect its log
         * messages to a stdout file. Instead of passing stdout along to the
         * build pipeline, they will be redirected to this file.
         *
         * For safety reasons, the contents are first redirected to a temporary
         * file and will be redirected to the stdout-path location after the
         * build stage has completed executing.
         */
        stdoutPath: string;
        /**
         * If the build stage is transient.
         *
         * A transient build stage is removed after the completion of
         * ide_build_pipeline_execute_async(). This can be a convenient
         * way to add a temporary item to a build pipeline that should
         * be immediately discarded.
         */
        'transient': boolean;

        // Owm methods of Ide-1.0.BuildStage

        chain(next: BuildStage): boolean;
        clean_async(
            pipeline: BuildPipeline,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        clean_finish(result: Gio.AsyncResult): boolean;
        emit_reap(reaper: Dazzle.DirectoryReaper): void;
        execute_async(
            pipeline: BuildPipeline,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        execute_finish(result: Gio.AsyncResult): boolean;
        get_check_stdout(): boolean;
        get_completed(): boolean;
        get_disabled(): boolean;
        get_name(): string;
        get_stdout_path(): string;
        get_transient(): boolean;
        log(stream: BuildLogStream, message: string, message_len: number): void;
        /**
         * This function will begin logging `subprocess` by reading from the
         * stdout and stderr streams of the subprocess. You must have created
         * the subprocess with %G_SUBPROCESS_FLAGS_STDERR_PIPE and
         * %G_SUBPROCESS_FLAGS_STDOUT_PIPE so that the streams may be read.
         * @param subprocess An #IdeSubprocess
         */
        log_subprocess(subprocess: Subprocess): void;
        pause(): void;
        set_check_stdout(check_stdout: boolean): void;
        set_completed(completed: boolean): void;
        set_disabled(disabled: boolean): void;
        /**
         * Sets the log observer to handle calls to the various stage logging
         * functions. This will be set by the pipeline to mux logs from all
         * stages into a unified build log.
         *
         * Plugins that need to handle logging from a build stage should set
         * an observer on the pipeline so that log distribution may be fanned
         * out to all observers.
         * @param observer The observer for the log entries
         */
        set_log_observer(observer: BuildLogObserver): void;
        set_name(name: string): void;
        set_stdout_path(path: string): void;
        set_transient(_transient: boolean): void;
        unpause(): void;
    }

    module BuildStageLauncher {
        // Constructor properties interface
    }

    class BuildStageLauncher extends BuildStage {
        // Own properties of Ide-1.0.BuildStageLauncher

        clean_launcher: SubprocessLauncher;
        cleanLauncher: SubprocessLauncher;
        ignore_exit_status: boolean;
        ignoreExitStatus: boolean;
        launcher: SubprocessLauncher;

        // Constructors of Ide-1.0.BuildStageLauncher

        static ['new'](context: Context, launcher?: SubprocessLauncher | null): BuildStageLauncher;

        // Owm methods of Ide-1.0.BuildStageLauncher

        get_clean_launcher(): SubprocessLauncher | null;
        /**
         * Gets the "ignore-exit-status" property.
         *
         * If set to %TRUE, a non-zero exit status from the subprocess will not cause
         * the build stage to fail.
         */
        get_ignore_exit_status(): boolean;
        get_launcher(): SubprocessLauncher;
        set_clean_launcher(clean_launcher: SubprocessLauncher): void;
        /**
         * Sets the "ignore-exit-status" property.
         *
         * If set to %TRUE, a non-zero exit status from the subprocess will not cause
         * the build stage to fail.
         * @param ignore_exit_status
         */
        set_ignore_exit_status(ignore_exit_status: boolean): void;
        set_launcher(launcher: SubprocessLauncher): void;
    }

    module BuildStageMkdirs {
        // Constructor properties interface
    }

    class BuildStageMkdirs extends BuildStage {
        // Constructors of Ide-1.0.BuildStageMkdirs

        static ['new'](context: Context): BuildStageMkdirs;

        // Owm methods of Ide-1.0.BuildStageMkdirs

        add_path(path: string, with_parents: boolean, mode: number): void;
    }

    module BuildStageTransfer {
        // Constructor properties interface
    }

    class BuildStageTransfer extends BuildStage {
        // Own properties of Ide-1.0.BuildStageTransfer

        disable_when_metered: boolean;
        disableWhenMetered: boolean;
        transfer: Transfer;

        // Constructors of Ide-1.0.BuildStageTransfer

        static ['new'](context: Context, transfer: Transfer): BuildStageTransfer;
    }

    module BuildconfigConfiguration {
        // Constructor properties interface
    }

    class BuildconfigConfiguration extends Configuration {
        // Own properties of Ide-1.0.BuildconfigConfiguration

        postbuild: string[];
        prebuild: string[];

        // Owm methods of Ide-1.0.BuildconfigConfiguration

        get_postbuild(): string[];
        get_prebuild(): string[];
        set_postbuild(postbuild: string): void;
        set_prebuild(prebuild: string): void;
    }

    module BuildconfigConfigurationProvider {
        // Constructor properties interface
    }

    class BuildconfigConfigurationProvider extends GObject.Object {
        // Owm methods of Ide-1.0.BuildconfigConfigurationProvider

        track_config(config: BuildconfigConfiguration): void;
    }

    module CompletionItem {
        // Constructor properties interface
    }

    abstract class CompletionItem extends GObject.Object {
        // Constructors of Ide-1.0.CompletionItem

        static ['new'](): CompletionItem;

        // Owm methods of Ide-1.0.CompletionItem

        static fuzzy_highlight(haystack: string, casefold_query: string): string;
        /**
         * This helper function can do a fuzzy match for you giving a haystack and
         * casefolded needle. Casefold your needle using g_utf8_casefold() before
         * running the query against a batch of #IdeCompletionItem for the best performance.
         *
         * score will be set with the score of the match upon success. Otherwise,
         * it will be set to zero.
         * @param haystack the string to be searched.
         * @param casefold_needle A g_utf8_casefold() version of the needle.
         */
        static fuzzy_match(haystack: string, casefold_needle: string): boolean;

        // Owm methods of Ide-1.0.CompletionItem

        match(query: string, casefold: string): boolean;
        set_priority(priority: number): void;
    }

    module CompletionResults {
        // Constructor properties interface
    }

    class CompletionResults extends GObject.Object {
        // Own properties of Ide-1.0.CompletionResults

        query: string;

        // Constructors of Ide-1.0.CompletionResults

        static ['new'](query: string): CompletionResults;

        // Owm methods of Ide-1.0.CompletionResults

        get_query(): string;
        get_size(): number;
        invalidate_sort(): void;
        present(provider: GtkSource.CompletionProvider, context: GtkSource.CompletionContext): void;
        replay(query: string): boolean;
        take_proposal(proposal: CompletionItem): void;
    }

    module CompletionWords {
        // Constructor properties interface
    }

    class CompletionWords extends GtkSource.CompletionWords {}

    module Configuration {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface
    }

    class Configuration extends Object {
        // Own properties of Ide-1.0.Configuration

        app_id: string;
        appId: string;
        build_commands: string[];
        buildCommands: string[];
        config_opts: string;
        configOpts: string;
        debug: boolean;
        device: Device;
        device_id: string;
        deviceId: string;
        dirty: boolean;
        display_name: string;
        displayName: string;
        readonly environ: string[];
        id: string;
        parallelism: number;
        post_install_commands: string[];
        postInstallCommands: string[];
        prefix: string;
        readonly ready: boolean;
        runtime: Runtime;
        runtime_id: string;
        runtimeId: string;

        // Constructors of Ide-1.0.Configuration

        static ['new'](context: Context, id: string, device_id: string, runtime_id: string): Configuration;

        // Owm methods of Ide-1.0.Configuration

        /**
         * Copies the configuration into a new configuration.
         * @returns An #IdeConfiguration.
         */
        duplicate(): Configuration;
        /**
         * Gets the application ID for the configuration.
         * @returns A string.
         */
        get_app_id(): string | null;
        get_build_commands(): string[];
        get_config_opts(): string;
        get_debug(): boolean;
        /**
         * Gets the device for the configuration.
         * @returns An #IdeDevice.
         */
        get_device(): Device | null;
        get_device_id(): string;
        get_dirty(): boolean;
        get_display_name(): string;
        /**
         * Gets the environment to use when spawning processes.
         * @returns An array of key=value environment variables.
         */
        get_environ(): string[];
        get_environment(): Environment;
        get_id(): string;
        get_internal_boolean(key: string): boolean;
        get_internal_int(key: string): number;
        get_internal_int64(key: string): number;
        /**
         * Gets the value associated with `key` if it is a #GObject.
         * @param key The key to get
         * @returns A #GObject or %NULL.
         */
        get_internal_object<T = GObject.Object>(key: string): T;
        get_internal_string(key: string): string;
        get_internal_strv(key: string): string[];
        get_parallelism(): number;
        get_post_install_commands(): string[];
        get_prefix(): string;
        /**
         * Determines if the configuration is ready for use. That means that the
         * build device can be accessed and the runtime is loaded. This may change
         * at runtime as devices and runtimes are added or removed.
         * @returns %TRUE if the configuration is ready for use.
         */
        get_ready(): boolean;
        /**
         * Gets the runtime for the configuration.
         * @returns An #IdeRuntime
         */
        get_runtime(): Runtime | null;
        get_runtime_id(): string;
        /**
         * This returns a sequence number for the configuration. This is useful
         * for build systems that want to clear the "dirty" bit on the configuration
         * so that they need not bootstrap a second time. This should be done by
         * checking the sequence number before executing the bootstrap, and only
         * cleared if the sequence number matches after performing the bootstrap.
         * This indicates no changes have been made to the configuration in the
         * mean time.
         * @returns A monotonic sequence number.
         */
        get_sequence(): number;
        getenv(key: string): string;
        set_app_id(app_id: string): void;
        set_build_commands(build_commands: string): void;
        set_config_opts(config_opts: string): void;
        set_debug(debug: boolean): void;
        set_device(device: Device): void;
        set_device_id(device_id: string): void;
        set_dirty(dirty: boolean): void;
        set_display_name(display_name: string): void;
        set_environment(environment: Environment): void;
        set_internal_boolean(key: string, value: boolean): void;
        set_internal_int(key: string, value: number): void;
        set_internal_int64(key: string, value: number): void;
        /**
         * Sets the value for `key` to `instance`.
         * @param key the key to set
         * @param instance A #GObject or %NULL
         */
        set_internal_object(key: string, instance?: GObject.Object | null): void;
        set_internal_string(key: string, value: string): void;
        set_internal_strv(key: string, value: string): void;
        set_parallelism(parallelism: number): void;
        set_post_install_commands(post_install_commands: string): void;
        set_prefix(prefix: string): void;
        set_runtime(runtime: Runtime): void;
        set_runtime_id(runtime_id: string): void;
        setenv(key: string, value: string): void;
        /**
         * Makes a snapshot of the configuration that can be used by build processes
         * to build the project without synchronizing with other threads.
         * @returns A newly allocated #IdeConfiguration.
         */
        snapshot(): Configuration;
        supports_device(device: Device): boolean;
        supports_runtime(runtime: Runtime): boolean;
    }

    module ConfigurationManager {
        // Signal callback interfaces

        interface Invalidate {
            (): void;
        }

        // Constructor properties interface
    }

    class ConfigurationManager<A extends GObject.Object = GObject.Object> extends Object {
        // Own properties of Ide-1.0.ConfigurationManager

        current: Configuration;
        readonly current_display_name: string;
        readonly currentDisplayName: string;

        // Owm methods of Ide-1.0.ConfigurationManager

        add(configuration: Configuration): void;
        /**
         * Gets the #IdeConfiguration by id. See ide_configuration_get_id().
         * @param id The string identifier of the configuration
         * @returns An #IdeConfiguration or %NULL if   the configuration could not be found.
         */
        get_configuration(id: string): Configuration | null;
        /**
         * Gets the current configuration to use for building.
         *
         * Many systems allow you to pass a configuration in instead of relying on the
         * default configuration. This gets the default configuration that various
         * background items might use, such as tags builders which need to discover
         * settings.
         * @returns An #IdeConfiguration
         */
        get_current(): Configuration;
        remove(configuration: Configuration): void;
        save_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        save_finish(result: Gio.AsyncResult): boolean;
        set_current(configuration: Configuration): void;
    }

    module Context {
        // Signal callback interfaces

        interface Loaded {
            (): void;
        }

        // Constructor properties interface
    }

    class Context extends GObject.Object {
        // Own properties of Ide-1.0.Context

        readonly back_forward_list: BackForwardList;
        readonly backForwardList: BackForwardList;
        readonly buffer_manager: BufferManager;
        readonly bufferManager: BufferManager;
        readonly build_system: BuildSystem;
        readonly buildSystem: BuildSystem;
        readonly configuration_manager: ConfigurationManager;
        readonly configurationManager: ConfigurationManager;
        readonly device_manager: DeviceManager;
        readonly deviceManager: DeviceManager;
        readonly project: Project;
        project_file: Gio.File;
        projectFile: Gio.File;
        root_build_dir: string;
        rootBuildDir: string;
        readonly runtime_manager: RuntimeManager;
        readonly runtimeManager: RuntimeManager;
        readonly search_engine: SearchEngine;
        readonly searchEngine: SearchEngine;
        snippets_manager: SourceSnippetsManager;
        snippetsManager: SourceSnippetsManager;
        readonly unsaved_files: UnsavedFiles;
        readonly unsavedFiles: UnsavedFiles;
        readonly vcs: Vcs;

        // Constructors of Ide-1.0.Context

        static new_finish(result: Gio.AsyncResult): Context;

        // Owm methods of Ide-1.0.Context

        static new_async(
            project_file: Gio.File,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<Context> | null,
        ): void;

        // Owm methods of Ide-1.0.Context

        /**
         * Retrieves the global back forward list for the #IdeContext.
         *
         * Consumers of this should branch the #IdeBackForwardList and merge them
         * when their document stack is closed.
         *
         * See ide_back_forward_list_branch() and ide_back_forward_list_merge() for
         * more information.
         * @returns An #IdeBackForwardList.
         */
        get_back_forward_list(): BackForwardList;
        /**
         * Gets the #IdeContext:buffer-manager property. The buffer manager is responsible for loading
         * and saving buffers (files) within the #IdeContext. It provides a convenient place for scripts
         * to hook into the load and save process.
         * @returns An #IdeBufferManager.
         */
        get_buffer_manager(): BufferManager;
        get_build_manager(): BuildManager;
        /**
         * Fetches the "build-system" property of `context`.
         * @returns An #IdeBuildSystem.
         */
        get_build_system(): BuildSystem;
        /**
         * Gets the #IdeConfigurationManager for the context.
         *
         * The configuration manager is responsible for loading and saving
         * configurations. Configurations consist of information about how to
         * perform a particular build. Such information includes the target
         * #IdeDevice, the #IdeRuntime to use, and various other build options.
         * @returns An #IdeConfigurationManager.
         */
        get_configuration_manager(): ConfigurationManager;
        /**
         * Retrieves the "device-manager" property. The device manager is responsible
         * for connecting and disconnecting to physical or virtual devices within
         * LibIDE.
         * @returns An #IdeDeviceManager.
         */
        get_device_manager(): DeviceManager;
        /**
         * Gets the #IdeDiagnosticsManager for the context.
         * @returns An #IdeDiagnosticsManager.
         */
        get_diagnostics_manager(): DiagnosticsManager;
        /**
         * Retrieves the #IdeProject for the context.
         * @returns An #IdeContext.
         */
        get_project(): Project;
        /**
         * Retrieves a #GFile containing the project file that was used to load
         * the context.
         * @returns A #GFile.
         */
        get_project_file(): Gio.File;
        /**
         * Gets the IdeContext:recent-manager property. The recent manager is a GtkRecentManager instance
         * that should be used for the workbench.
         * @returns A #GtkRecentManager.
         */
        get_recent_manager(): Gtk.RecentManager;
        /**
         * Retrieves the "root-build-dir" for the context. This is the root directory
         * that will contain builds made for various devices.
         * @returns A string containing the "root-build-dir" property.
         */
        get_root_build_dir(): string;
        /**
         * Gets the #IdeRunManager for the context. This manager object simplifies
         * the process of running an #IdeBuildTarget from the build system. Primarily,
         * it enforces that only a single target may be run at a time, since that is
         * what the UI will expect.
         * @returns An #IdeRunManager.
         */
        get_run_manager(): RunManager;
        /**
         * Gets the #IdeRuntimeManager for the LibIDE context.
         *
         * The runtime manager provies access to #IdeRuntime instances via the
         * #GListModel interface. These can provide support for building projects
         * in various runtimes such as xdg-app.
         * @returns An #IdeRuntimeManager.
         */
        get_runtime_manager(): RuntimeManager;
        /**
         * Retrieves the search engine for the context.
         * @returns An #IdeSearchEngine.
         */
        get_search_engine(): SearchEngine;
        /**
         * Retrieves a service matching `service_type`. If no match was found, a type
         * implementing the requested service type will be returned. If no matching
         * service type could be found, then an instance of the service will be
         * created, started, and returned.
         * @param service_type A #GType of the service desired.
         * @returns An #IdeService or %NULL.
         */
        get_service_typed(service_type: GObject.GType): Service | null;
        /**
         * Gets an #IdeSettings representing the given #GSettingsSchema.
         *
         * relative_path will be used to apply multiple layers of settings. Project settings will be
         * applied to first, followed by global settings.
         * @param schema_id
         * @param relative_path
         * @returns An #IdeSettings.
         */
        get_settings(schema_id: string, relative_path: string): Settings;
        /**
         * Gets the #IdeContext:snippets-manager property.
         * @returns An #IdeSourceSnippetsManager.
         */
        get_snippets_manager(): SourceSnippetsManager;
        /**
         * Gets the #IdeTransferManager for the context.
         * @returns An #IdeTransferManager.
         */
        get_transfer_manager(): TransferManager;
        /**
         * Returns the unsaved files for the #IdeContext. These are the contents of
         * open buffers in the IDE.
         * @returns An #IdeUnsavedFiles.
         */
        get_unsaved_files(): UnsavedFiles;
        /**
         * Retrieves the #IdeVcs used to load the project. If no version control system
         * could be found, this will return an #IdeDirectoryVcs.
         * @returns An #IdeVcs.
         */
        get_vcs(): Vcs;
        /**
         * Puts a hold on the #IdeContext, preventing the context from being unloaded
         * until a call to ide_context_release().
         *
         * If ide_context_unload_async() is called while a hold is in progress, the
         * unload will be delayed until ide_context_release() has been called the
         * same number of times as ide_context_hold().
         */
        hold(): void;
        /**
         * Adds a hold on `self` for the lifetime of `instance`.
         * @param instance A #GObject instance
         */
        hold_for_object(instance: GObject.Object): void;
        /**
         * Releases a hold on the context previously created with ide_context_hold().
         *
         * If a pending unload of the context has been requested, it will be dispatched
         * once the hold count reaches zero.
         */
        release(): void;
        restore_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        restore_finish(result: Gio.AsyncResult): boolean;
        /**
         * Sets the "root-build-dir" property. This is the root directory that will
         * be used when building projects for projects that support building out of
         * tree.
         * @param root_build_dir the path to the root build directory.
         */
        set_root_build_dir(root_build_dir: string): void;
        /**
         * This function attempts to unload various components in the #IdeContext. This
         * should be called before you dispose the context. Unsaved buffers will be
         * persisted to the drafts directory.  More operations may be added in the
         * future.
         *
         * If there is a hold on the #IdeContext, created by ide_context_hold(), then
         * the unload request will be delayed until the appropriate number of calls to
         * ide_context_release() have been called.
         * @param cancellable
         * @param callback
         */
        unload_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        unload_finish(result: Gio.AsyncResult): boolean;
    }

    module Cursor {
        // Constructor properties interface
    }

    class Cursor extends GObject.Object {
        // Own properties of Ide-1.0.Cursor

        ide_source_view: SourceView;
        ideSourceView: SourceView;

        // Owm methods of Ide-1.0.Cursor

        add_cursor(type: number): void;
        insert_text(text: string, len: number): void;
        is_enabled(): boolean;
        remove_cursors(): void;
    }

    module Device {
        // Constructor properties interface
    }

    abstract class Device extends Object {
        // Own properties of Ide-1.0.Device

        display_name: string;
        displayName: string;
        id: string;
        readonly system_type: string;
        readonly systemType: string;

        // Owm methods of Ide-1.0.Device

        /**
         * This function returns the name of the device. If no name has been set, then
         * %NULL is returned.
         *
         * In some cases, this value wont be available until additional information
         * has been probed from the device.
         * @returns A string containing the display name for the device.
         */
        get_display_name(): string | null;
        /**
         * Retrieves the "id" property of the #IdeDevice. This is generally not a
         * user friendly name as it is often a guid.
         * @returns A unique identifier for the device.
         */
        get_id(): string;
        /**
         * This is the description of the system we are building for. Commonly, this
         * is referred to as a "system_type". A combination of the machine architecture
         * such as x86_64, the operating system, and the libc.
         *
         * "x86_64-linux-gnu" might be one such system.
         * @returns A string containing the system type.
         */
        get_system_type(): string;
        prepare_configuration(configuration: Configuration): void;
        set_display_name(display_name: string): void;
        set_id(id: string): void;
    }

    module DeviceManager {
        // Signal callback interfaces

        interface DeviceAdded {
            (object: DeviceProvider, p0: Device): void;
        }

        interface DeviceRemoved {
            (object: DeviceProvider, p0: Device): void;
        }

        // Constructor properties interface
    }

    class DeviceManager<A extends GObject.Object = GObject.Object> extends Object {
        // Own properties of Ide-1.0.DeviceManager

        readonly settled: boolean;

        // Owm methods of Ide-1.0.DeviceManager

        add_provider(provider: DeviceProvider): void;
        /**
         * Fetches the first device that matches the device identifier `device_id`.
         * @param device_id The device identifier string.
         * @returns An #IdeDevice or %NULL.
         */
        get_device(device_id: string): Device;
        /**
         * Retrieves all of the devices that are registered with the #IdeDeviceManager.
         * @returns An array of devices   registered with the #IdeManager.
         */
        get_devices(): Device[];
        get_settled(): boolean;
        remove_provider(provider: DeviceProvider): void;
    }

    module DiagnosticsManager {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface
    }

    class DiagnosticsManager extends Object {
        // Own properties of Ide-1.0.DiagnosticsManager

        readonly busy: boolean;

        // Owm methods of Ide-1.0.DiagnosticsManager

        /**
         * Gets if the diagnostics manager is currently executing a diagnosis.
         * @returns %TRUE if the #IdeDiagnosticsManager is busy diagnosing.
         */
        get_busy(): boolean;
        /**
         * This function collects all of the diagnostics that have been collected
         * for `file` and returns them as a new #IdeDiagnostics to the caller.
         *
         * The #IdeDiagnostics structure will contain zero items if there are
         * no diagnostics discovered. Therefore, this function will never return
         * a %NULL value.
         * @param file A #GFile to retrieve diagnostics for
         * @returns A new #IdeDiagnostics.
         */
        get_diagnostics_for_file(file: Gio.File): Diagnostics;
        get_sequence_for_file(file: Gio.File): number;
        update_group_by_file(buffer: Buffer, new_file: Gio.File): void;
    }

    module DirectoryBuildSystem {
        // Constructor properties interface
    }

    class DirectoryBuildSystem extends Object {
        // Own properties of Ide-1.0.DirectoryBuildSystem

        project_file: Gio.File;
        projectFile: Gio.File;
    }

    module DirectoryVcs {
        // Constructor properties interface
    }

    class DirectoryVcs extends Object {}

    module Doap {
        // Constructor properties interface
    }

    class Doap extends GObject.Object {
        // Own properties of Ide-1.0.Doap

        bug_database: string;
        bugDatabase: string;
        category: string;
        description: string;
        download_page: string;
        downloadPage: string;
        homepage: string;
        languages: string;
        name: string;
        shortdesc: string;

        // Constructors of Ide-1.0.Doap

        static ['new'](): Doap;

        // Owm methods of Ide-1.0.Doap

        get_bug_database(): string;
        get_category(): string;
        get_description(): string;
        get_download_page(): string;
        get_homepage(): string;
        get_languages(): string[];
        get_maintainers(): DoapPerson[];
        get_name(): string;
        get_shortdesc(): string;
        load_from_data(data: string, length: number): boolean;
        load_from_file(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean;
    }

    module DoapPerson {
        // Constructor properties interface
    }

    class DoapPerson extends GObject.Object {
        // Own properties of Ide-1.0.DoapPerson

        email: string;
        name: string;

        // Constructors of Ide-1.0.DoapPerson

        static ['new'](): DoapPerson;

        // Owm methods of Ide-1.0.DoapPerson

        get_email(): string;
        get_name(): string;
        set_email(email: string): void;
        set_name(name: string): void;
    }

    module EditorPerspective {
        // Signal callback interfaces

        interface ViewAdded {
            (object: Gtk.Widget): void;
        }

        interface ViewRemoved {
            (object: Gtk.Widget): void;
        }

        // Constructor properties interface
    }

    class EditorPerspective extends Dazzle.DockOverlay {
        // Own properties of Ide-1.0.EditorPerspective

        readonly active_view: Gtk.Widget;
        readonly activeView: Gtk.Widget;

        // Owm methods of Ide-1.0.EditorPerspective

        focus_buffer_in_current_stack(buffer: Buffer): void;
        focus_location(location: SourceLocation): void;
        get_active_view(): Gtk.Widget | null;
        get_bottom_edge(): Gtk.Widget;
        /**
         * Gets the center widget for the editor perspective.
         * @returns A #GtkWidget or %NULL.
         */
        get_center_widget(): Gtk.Widget | null;
        /**
         * Gets the #IdeLayout widget for the editor perspective.
         * @returns A #IdeLayout or %NULL.
         */
        get_layout(): Layout | null;
        get_left_edge(): Gtk.Widget;
        /**
         * self: an #IdeEditorPerspective.
         * position: a #GtkPositionType.
         * @param position
         * @returns A #DzlDockOverlayEdge
         */
        get_overlay_edge(position: Gtk.PositionType): Dazzle.DockOverlayEdge;
        get_right_edge(): Gtk.Widget;
        get_top_edge(): Gtk.Widget;
        show_spellchecker(source_view: SourceView): void;
    }

    module EditorView {
        // Signal callback interfaces

        interface RequestDocumentation {
            (object: string): void;
        }

        // Constructor properties interface
    }

    class EditorView extends LayoutView {
        // Own properties of Ide-1.0.EditorView

        document: Buffer;

        // Owm methods of Ide-1.0.EditorView

        get_active_source_view(): SourceView;
        get_document(): Buffer;
    }

    module Environment {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface
    }

    class Environment<A extends GObject.Object = GObject.Object> extends GObject.Object {
        // Constructors of Ide-1.0.Environment

        static ['new'](): Environment;

        // Owm methods of Ide-1.0.Environment

        append(variable: EnvironmentVariable): void;
        /**
         * Copies the contents of #IdeEnvironment into a newly allocated #IdeEnvironment.
         * @returns An #IdeEnvironment.
         */
        copy(): Environment;
        /**
         * Gets the environment as a set of key=value pairs, suitable for use
         * in various GLib process functions.
         * @returns A newly allocated string array.
         */
        get_environ(): string[];
        getenv(key: string): string;
        remove(variable: EnvironmentVariable): void;
        setenv(key: string, value: string): void;
    }

    module EnvironmentVariable {
        // Constructor properties interface
    }

    class EnvironmentVariable extends GObject.Object {
        // Own properties of Ide-1.0.EnvironmentVariable

        key: string;
        value: string;

        // Constructors of Ide-1.0.EnvironmentVariable

        static ['new'](key: string, value: string): EnvironmentVariable;

        // Owm methods of Ide-1.0.EnvironmentVariable

        get_key(): string;
        get_value(): string;
        set_key(key: string): void;
        set_value(value: string): void;
    }

    module ExtensionAdapter {
        // Constructor properties interface
    }

    class ExtensionAdapter extends Object {
        // Own properties of Ide-1.0.ExtensionAdapter

        engine: Peas.Engine;
        readonly extension: GObject.Object;
        interface_type: GObject.GType;
        interfaceType: GObject.GType;
        key: string;
        value: string;

        // Constructors of Ide-1.0.ExtensionAdapter

        static ['new'](
            context: Context,
            engine: Peas.Engine | null,
            interface_type: GObject.GType,
            key: string,
            value?: string | null,
        ): ExtensionAdapter;

        // Owm methods of Ide-1.0.ExtensionAdapter

        /**
         * Gets the #IdeExtensionAdapter:engine property.
         * @returns A #PeasEngine.
         */
        get_engine(): Peas.Engine;
        /**
         * Gets the extension object managed by the adapter.
         * @returns A #GObject or %NULL.
         */
        get_extension<T = GObject.Object>(): T;
        get_interface_type(): GObject.GType;
        get_key(): string;
        get_value(): string;
        set_key(key: string): void;
        set_value(value: string): void;
    }

    module ExtensionSetAdapter {
        // Signal callback interfaces

        interface ExtensionAdded {
            (object: Peas.PluginInfo, p0: GObject.Object): void;
        }

        interface ExtensionRemoved {
            (object: Peas.PluginInfo, p0: GObject.Object): void;
        }

        // Constructor properties interface
    }

    class ExtensionSetAdapter extends Object {
        // Own properties of Ide-1.0.ExtensionSetAdapter

        engine: Peas.Engine;
        interface_type: GObject.GType;
        interfaceType: GObject.GType;
        key: string;
        value: string;

        // Constructors of Ide-1.0.ExtensionSetAdapter

        static ['new'](
            context: Context,
            engine: Peas.Engine,
            interface_type: GObject.GType,
            key: string,
            value: string,
        ): ExtensionSetAdapter;

        // Owm methods of Ide-1.0.ExtensionSetAdapter

        /**
         * Calls `foreach_func` for every extension loaded by the extension set.
         * @param foreach_func A callback
         */
        foreach(foreach_func: ExtensionSetAdapterForeachFunc): void;
        /**
         * Gets the #IdeExtensionSetAdapter:engine property.
         * @returns A #PeasEngine.
         */
        get_engine(): Peas.Engine;
        get_interface_type(): GObject.GType;
        get_key(): string;
        get_n_extensions(): number;
        get_value(): string;
        set_key(key: string): void;
        set_value(value: string): void;
    }

    module File {
        // Constructor properties interface
    }

    class File extends Object {
        // Own properties of Ide-1.0.File

        file: Gio.File;
        readonly is_temporary: boolean;
        readonly isTemporary: boolean;
        readonly language: GtkSource.Language;
        path: string;
        temporary_id: number;
        temporaryId: number;

        // Constructors of Ide-1.0.File

        static ['new'](context: Context | null, file: Gio.File): File;

        static new_for_path(context: Context, path: string): File;

        // Owm methods of Ide-1.0.File

        compare(b: File): number;
        equal(other: File): boolean;
        find_other_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Completes an asynchronous call to ide_file_find_other_async(). This function
         * will try to find a matching file for languages where this exists. Such cases
         * include C and C++ where a .c or .cpp file may have a .h or .hh header. Additional
         * suffixes are implemented including (.c, .cc, .cpp, .cxx, .h, .hh, .hpp, and .hxx).
         *
         * Returns an #IdeFile if successful, otherwise %NULL and `error` is set.
         * @param result
         * @returns An #IdeFIle or %NULL.
         */
        find_other_finish(result: Gio.AsyncResult): File | null;
        /**
         * Retrieves the underlying #GFile represented by `self`.
         * @returns A #GFile.
         */
        get_file(): Gio.File;
        get_is_temporary(): boolean;
        /**
         * Retrieves the #GtkSourceLanguage that was discovered for the file.
         * @returns A #GtkSourceLanguage or %NULL.
         */
        get_language(): GtkSource.Language | null;
        get_language_id(): string;
        get_path(): string;
        /**
         * Gets the #IdeFile:temporary-id property for the file.
         *
         * Temporary files have unique identifiers associated with them so that we can
         * display names such as "unsaved file 1" and know that it will not collide with
         * another temporary file.
         *
         * Files that are not temporary, will return zero.
         * @returns A positive integer greater than zero if the file is a temporary file.
         */
        get_temporary_id(): number;
        hash(): number;
        load_settings_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        load_settings_finish(result: Gio.AsyncResult): FileSettings;
    }

    module FileSettings {
        // Constructor properties interface
    }

    class FileSettings extends Object {
        // Own properties of Ide-1.0.FileSettings

        encoding: string;
        encoding_set: boolean;
        encodingSet: boolean;
        file: File;
        indent_style: IndentStyle;
        indentStyle: IndentStyle;
        indent_style_set: boolean;
        indentStyleSet: boolean;
        indent_width: number;
        indentWidth: number;
        indent_width_set: boolean;
        indentWidthSet: boolean;
        insert_trailing_newline: boolean;
        insertTrailingNewline: boolean;
        insert_trailing_newline_set: boolean;
        insertTrailingNewlineSet: boolean;
        newline_type: GtkSource.NewlineType;
        newlineType: GtkSource.NewlineType;
        newline_type_set: boolean;
        newlineTypeSet: boolean;
        overwrite_braces: boolean;
        overwriteBraces: boolean;
        overwrite_braces_set: boolean;
        overwriteBracesSet: boolean;
        right_margin_position: number;
        rightMarginPosition: number;
        right_margin_position_set: boolean;
        rightMarginPositionSet: boolean;
        settled: boolean;
        show_right_margin: boolean;
        showRightMargin: boolean;
        show_right_margin_set: boolean;
        showRightMarginSet: boolean;
        tab_width: number;
        tabWidth: number;
        tab_width_set: boolean;
        tabWidthSet: boolean;
        trim_trailing_whitespace: boolean;
        trimTrailingWhitespace: boolean;
        trim_trailing_whitespace_set: boolean;
        trimTrailingWhitespaceSet: boolean;

        // Constructors of Ide-1.0.FileSettings

        static ['new'](file: File): FileSettings;

        // Owm methods of Ide-1.0.FileSettings

        /**
         * Retrieves the underlying file that `self` refers to.
         *
         * This may be used by #IdeFileSettings implementations to discover additional
         * information about the settings. For example, a modeline parser might load
         * some portion of the file looking for modelines. An editorconfig
         * implementation might look for ".editorconfig" files.
         * @returns An #IdeFile.
         */
        get_file(): File;
        /**
         * Gets the #IdeFileSettings:settled property.
         *
         * This property is %TRUE when all of the children file settings have completed loading.
         *
         * Some file setting implementations require that various I/O be performed on disk in
         * the background. This property will change to %TRUE when all of the settings have
         * been loaded.
         *
         * Normally, this is not a problem, since the editor will respond to changes and update them
         * accordingly. However, if you are writing a tool that prints the file settings
         * (such as ide-list-file-settings), you probably want to wait until the values have
         * settled.
         * @returns %TRUE if all the settings have loaded.
         */
        get_settled(): boolean;
    }

    module FormatterOptions {
        // Constructor properties interface
    }

    class FormatterOptions extends GObject.Object {
        // Own properties of Ide-1.0.FormatterOptions

        insert_spaces: boolean;
        insertSpaces: boolean;
        tab_width: number;
        tabWidth: number;

        // Constructors of Ide-1.0.FormatterOptions

        static ['new'](): FormatterOptions;

        // Owm methods of Ide-1.0.FormatterOptions

        get_insert_spaces(): boolean;
        get_tab_width(): number;
        set_insert_spaces(insert_spaces: boolean): void;
        set_tab_width(tab_width: number): void;
    }

    module HighlightEngine {
        // Constructor properties interface
    }

    class HighlightEngine extends Object {
        // Own properties of Ide-1.0.HighlightEngine

        buffer: Buffer;
        readonly highlighter: Highlighter;

        // Constructors of Ide-1.0.HighlightEngine

        static ['new'](buffer: Buffer): HighlightEngine;

        // Owm methods of Ide-1.0.HighlightEngine

        clear(): void;
        /**
         * Gets the IdeHighlightEngine:buffer property.
         * @returns An #IdeBuffer.
         */
        get_buffer(): Buffer;
        /**
         * Gets the IdeHighlightEngine:highlighter property.
         * @returns An #IdeHighlighter.
         */
        get_highlighter(): Highlighter;
        /**
         * A #GtkTextTag for `style_name`.
         * @param style_name the name of the style to retrieve
         * @returns A #GtkTextTag.
         */
        get_style(style_name: string): Gtk.TextTag;
        /**
         * This function will extend the invalidated range of the buffer to include
         * the range of `begin` to `end`.
         *
         * The highlighter will be queued to interactively update the invalidated
         * region.
         *
         * Updating the invalidated region of the buffer may take some time, as it is
         * important that the highlighter does not block for more than 1-2 milliseconds
         * to avoid dropping frames.
         * @param begin the beginning of the range to invalidate
         * @param end the end of the range to invalidate
         */
        invalidate(begin: Gtk.TextIter, end: Gtk.TextIter): void;
        rebuild(): void;
    }

    module LangservClient {
        // Signal callback interfaces

        interface Notification {
            (object: string, p0: GLib.Variant): void;
        }

        interface PublishedDiagnostics {
            (object: Gio.File, p0: Diagnostics): void;
        }

        interface SupportsLanguage {
            (object: string): boolean;
        }

        // Constructor properties interface
    }

    class LangservClient extends Object {
        // Own properties of Ide-1.0.LangservClient

        io_stream: Gio.IOStream;
        ioStream: Gio.IOStream;

        // Constructors of Ide-1.0.LangservClient

        static ['new'](context: Context, io_stream: Gio.IOStream): LangservClient;

        // Owm methods of Ide-1.0.LangservClient

        add_language(language_id: string): void;
        /**
         * Asynchronously queries the Language Server using the JSON-RPC protocol.
         * @param method the method to call
         * @param params An #GVariant or %NULL
         * @param cancellable A cancellable or %NULL
         * @param callback the callback to receive the result, or %NULL
         */
        call_async(
            method: string,
            params?: GLib.Variant | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        call_finish(result: Gio.AsyncResult, return_value: GLib.Variant): boolean;
        get_diagnostics_async(
            file: Gio.File,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes a request to ide_langserv_client_get_diagnostics_async().
         * @param result A #GAsyncResult
         * @returns %TRUE if successful and @diagnostics is set, otherwise %FALSE   and @error is set.
         */
        get_diagnostics_finish(result: Gio.AsyncResult): boolean;
        /**
         * Asynchronously sends a notification to the Language Server.
         * @param method the method to notification
         * @param params An #GVariant or %NULL
         * @param cancellable A cancellable or %NULL
         * @param notificationback the notificationback to receive the result, or %NULL
         */
        send_notification_async(
            method: string,
            params?: GLib.Variant | null,
            cancellable?: Gio.Cancellable | null,
            notificationback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        send_notification_finish(result: Gio.AsyncResult): boolean;
        start(): void;
        stop(): void;
    }

    module LangservCompletionProvider {
        // Constructor properties interface
    }

    abstract class LangservCompletionProvider extends Object {
        // Own properties of Ide-1.0.LangservCompletionProvider

        client: LangservClient;

        // Owm methods of Ide-1.0.LangservCompletionProvider

        /**
         * Gets the client for the completion provider.
         * @returns An #IdeLangservClient or %NULL
         */
        get_client(): LangservClient | null;
        set_client(client: LangservClient): void;
    }

    module LangservDiagnosticProvider {
        // Constructor properties interface
    }

    abstract class LangservDiagnosticProvider extends Object {
        // Own properties of Ide-1.0.LangservDiagnosticProvider

        client: LangservClient;

        // Owm methods of Ide-1.0.LangservDiagnosticProvider

        /**
         * Gets the client used by diagnostic provider.
         * @returns An #IdeLangservClient or %NULL.
         */
        get_client(): LangservClient | null;
        set_client(client: LangservClient): void;
    }

    module LangservFormatter {
        // Constructor properties interface
    }

    class LangservFormatter extends Object {
        // Own properties of Ide-1.0.LangservFormatter

        client: LangservClient;

        // Owm methods of Ide-1.0.LangservFormatter

        /**
         * Gets the client to use for the formatter.
         * @returns An #IdeLangservClient or %NULL.
         */
        get_client(): LangservClient;
        set_client(client: LangservClient): void;
    }

    module LangservHighlighter {
        // Constructor properties interface
    }

    class LangservHighlighter extends Object {
        // Own properties of Ide-1.0.LangservHighlighter

        client: LangservClient;

        // Owm methods of Ide-1.0.LangservHighlighter

        get_client(): LangservClient | null;
        set_client(client: LangservClient): void;
    }

    module LangservRenameProvider {
        // Constructor properties interface
    }

    abstract class LangservRenameProvider extends Object {
        // Own properties of Ide-1.0.LangservRenameProvider

        buffer: Buffer;
        client: LangservClient;

        // Owm methods of Ide-1.0.LangservRenameProvider

        get_client(): LangservClient | null;
        set_client(client: LangservClient): void;
    }

    module LangservSymbolNode {
        // Constructor properties interface
    }

    class LangservSymbolNode extends SymbolNode {
        // Constructors of Ide-1.0.LangservSymbolNode

        static ['new'](
            file: Gio.File,
            name: string,
            parent_name: string,
            kind: number,
            begin_line: number,
            begin_column: number,
            end_line: number,
            end_column: number,
        ): LangservSymbolNode;

        // Owm methods of Ide-1.0.LangservSymbolNode

        get_parent_name(): string;
        is_parent_of(other: LangservSymbolNode): boolean;
    }

    module LangservSymbolResolver {
        // Constructor properties interface
    }

    abstract class LangservSymbolResolver extends Object {
        // Own properties of Ide-1.0.LangservSymbolResolver

        client: LangservClient;

        // Owm methods of Ide-1.0.LangservSymbolResolver

        /**
         * Gets the client used by the symbol resolver.
         * @returns An #IdeLangservClient or %NULL.
         */
        get_client(): LangservClient | null;
        set_client(client: LangservClient): void;
    }

    module LangservSymbolTree {
        // Constructor properties interface
    }

    class LangservSymbolTree extends GObject.Object {
        // Constructors of Ide-1.0.LangservSymbolTree

        static ['new'](symbols: LangservSymbolNode[]): LangservSymbolTree;
    }

    module Layout {
        // Constructor properties interface
    }

    class Layout extends Dazzle.DockBin {
        // Own properties of Ide-1.0.Layout

        readonly active_view: Gtk.Widget;
        readonly activeView: Gtk.Widget;

        // Owm methods of Ide-1.0.Layout

        get_active_view(): Gtk.Widget | null;
    }

    module LayoutGrid {
        // Signal callback interfaces

        interface Empty {
            (): void;
        }

        // Constructor properties interface
    }

    class LayoutGrid extends Gtk.Bin {
        // Constructors of Ide-1.0.LayoutGrid

        static ['new'](): LayoutGrid;

        // Owm methods of Ide-1.0.LayoutGrid

        add_stack_after(stack: LayoutStack): LayoutStack;
        add_stack_before(stack: LayoutStack): LayoutStack;
        /**
         * Calls `callback` for every view found in the #IdeLayoutGrid.
         * @param callback A #GtkCallback
         */
        foreach_view(callback: Gtk.Callback): void;
        /**
         * Gets the last focused #IdeLayoutStack.
         * @returns A #IdeLayoutStack or %NULL.
         */
        get_last_focus(): Gtk.Widget | null;
        get_stack_after(stack: LayoutStack): LayoutStack | null;
        get_stack_before(stack: LayoutStack): LayoutStack | null;
        /**
         * Fetches all of the stacks in the grid. The resulting #GList should be
         * freed with g_list_free().
         * @returns A #GList.
         */
        get_stacks(): LayoutStack[];
    }

    module LayoutPane {
        // Constructor properties interface
    }

    class LayoutPane extends Dazzle.DockBinEdge {}

    module LayoutStack {
        // Signal callback interfaces

        interface Empty {
            (): void;
        }

        interface Split {
            (view: LayoutView, split_type: number, file: Gio.File): void;
        }

        // Constructor properties interface
    }

    class LayoutStack extends Gtk.Bin {
        // Own properties of Ide-1.0.LayoutStack

        active_view: LayoutView;
        activeView: LayoutView;

        // Constructors of Ide-1.0.LayoutStack

        static ['new'](): LayoutStack;

        // Owm methods of Ide-1.0.LayoutStack

        add_control(control: Gtk.Widget, priority: number): void;
        foreach_view(callback: Gtk.Callback): void;
        get_active_view(): Gtk.Widget | null;
        remove(view: Gtk.Widget): void;
        set_active_view(active_view: Gtk.Widget): void;
    }

    module LayoutView {
        // Constructor properties interface
    }

    class LayoutView extends Gtk.Box {
        // Own properties of Ide-1.0.LayoutView

        readonly can_split: boolean;
        readonly canSplit: boolean;
        readonly modified: boolean;
        readonly special_title: string;
        readonly specialTitle: string;
        readonly title: string;

        // Owm methods of Ide-1.0.LayoutView

        agree_to_close(): boolean;
        /**
         * Creates a new view that can be displayed in a split, potentially with a different
         * buffer. If the view does not support splits, %NULL will be returned.
         * @param file A #GFile already loaded by the #IdeBufferManager, or %NULL to use the existing buffer.
         * @returns A #IdeLayoutView.
         */
        create_split(file: Gio.File): LayoutView;
        /**
         * Checks if `self` can create a preview view (such as html, markdown, etc).
         * @returns %TRUE if @self can create a preview view.
         */
        get_can_preview(): boolean;
        /**
         * Checks if `self` can create a split view. If so, %TRUE is returned. Otherwise, %FALSE.
         * @returns %TRUE if @self can create a split.
         */
        get_can_split(): boolean;
        get_modified(): boolean;
        get_special_title(): string;
        /**
         * Returns whether view is split or not.
         */
        get_split_view(): boolean;
        get_title(): string;
        navigate_to(location: SourceLocation): void;
        set_back_forward_list(back_forward_list: BackForwardList): void;
        /**
         * Set a split view using GtkPaned style split with %GTK_ORIENTATION_VERTICAL.
         * @param split_view if the split should be enabled.
         */
        set_split_view(split_view: boolean): void;
    }

    module LocalDevice {
        // Constructor properties interface
    }

    class LocalDevice extends Device {}

    module Object {
        // Signal callback interfaces

        interface Destroy {
            (): void;
        }

        // Constructor properties interface
    }

    class Object extends GObject.Object {
        // Own properties of Ide-1.0.Object

        context: Context;

        // Constructors of Ide-1.0.Object

        static new_finish(result: Gio.AsyncResult): Object;

        // Owm methods of Ide-1.0.Object

        static notify_in_main(instance: any | null, pspec: GObject.ParamSpec): void;

        // Owm methods of Ide-1.0.Object

        /**
         * Fetches the #IdeObject:context property.
         * @returns An #IdeContext.
         */
        get_context(): Context;
        /**
         * This function will acquire a reference to the IdeContext that the object
         * is a part of. This is useful if you are going to be doing a long running
         * task (such as something in a thread) and want to ensure the context cannot
         * be unloaded during your operation.
         *
         * You should call ide_object_release() an equivalent number of times to
         * ensure the context may be freed afterwards.
         *
         * You should check the return value of this function to ensure that the
         * context is not already in shutdown.
         * @returns %TRUE if a hold was successfully created.
         */
        hold(): boolean;
        /**
         * Releases a successful hold on the context previously created with ide_object_hold().
         */
        release(): void;
        set_context(context: Context): void;
    }

    module OmniBar {
        // Constructor properties interface
    }

    class OmniBar extends Gtk.Box {
        // Constructors of Ide-1.0.OmniBar

        static ['new'](): OmniBar;
    }

    module OmniSearchDisplay {
        // Signal callback interfaces

        interface Activate {
            (): void;
        }

        interface ResultActivated {
            (object: SearchResult): void;
        }

        // Constructor properties interface
    }

    class OmniSearchDisplay extends Gtk.Box {
        // Own properties of Ide-1.0.OmniSearchDisplay

        context: SearchContext;

        // Owm methods of Ide-1.0.OmniSearchDisplay

        get_context(): SearchContext;
        get_count(): number;
        move_next_result(): void;
        move_previous_result(): void;
        set_context(context: SearchContext): void;
    }

    module OmniSearchEntry {
        // Signal callback interfaces

        interface ClearSearch {
            (): void;
        }

        interface MoveNextResult {
            (): void;
        }

        interface MovePreviousResult {
            (): void;
        }

        // Constructor properties interface
    }

    class OmniSearchEntry extends Gtk.Entry {
        // Constructors of Ide-1.0.OmniSearchEntry

        static ['new'](): OmniSearchEntry;

        // Owm methods of Ide-1.0.OmniSearchEntry

        /**
         * Gets the search engine to use with the current workbench.
         * @returns An #IdeSearchEngine.
         */
        get_search_engine(): SearchEngine;
        set_search_engine(search_engine: SearchEngine): void;
    }

    module OmniSearchGroup {
        // Signal callback interfaces

        interface ResultActivated {
            (object: Gtk.Widget, p0: SearchResult): void;
        }

        interface ResultSelected {
            (object: SearchResult): void;
        }

        // Constructor properties interface
    }

    class OmniSearchGroup extends Gtk.Box {
        // Own properties of Ide-1.0.OmniSearchGroup

        provider: SearchProvider;

        // Owm methods of Ide-1.0.OmniSearchGroup

        activate(): boolean;
        add_result(result: SearchResult): void;
        clear(): void;
        get_count(): number;
        get_first(): SearchResult | null;
        get_provider(): SearchProvider;
        has_selection(): boolean;
        move_next(): boolean;
        move_previous(): boolean;
        remove_result(result: SearchResult): void;
        select_first(): void;
        select_last(): void;
        unselect(): void;
    }

    module OmniSearchRow {
        // Constructor properties interface
    }

    class OmniSearchRow extends Gtk.ListBoxRow {
        // Own properties of Ide-1.0.OmniSearchRow

        icon_name: string;
        iconName: string;
        result: SearchResult;

        // Owm methods of Ide-1.0.OmniSearchRow

        get_result(): SearchResult;
        set_result(result: SearchResult): void;
    }

    module PkconTransfer {
        // Constructor properties interface
    }

    class PkconTransfer extends Transfer {
        // Own properties of Ide-1.0.PkconTransfer

        packages: string[];

        // Constructors of Ide-1.0.PkconTransfer

        static ['new'](packages: string): PkconTransfer;
    }

    module PreferencesPerspective {
        // Constructor properties interface
    }

    class PreferencesPerspective extends Dazzle.PreferencesView {}

    module Progress {
        // Constructor properties interface
    }

    class Progress extends GObject.Object {
        // Own properties of Ide-1.0.Progress

        readonly completed: boolean;
        fraction: number;
        message: string;

        // Constructors of Ide-1.0.Progress

        static ['new'](): Progress;

        // Owm methods of Ide-1.0.Progress

        /**
         * This function is a #GFileProgressCallback helper that will update the
         * #IdeProgress:fraction property. `user_data` must be an #IdeProgress.
         *
         * Remember to make sure to unref the #IdeProgress instance with
         * g_object_unref() during the #GDestroyNotify.
         * @param current_num_bytes
         * @param total_num_bytes
         * @param user_data
         */
        static file_progress_callback(current_num_bytes: number, total_num_bytes: number, user_data?: any | null): void;
        static flatpak_progress_callback(
            status: string,
            progress: number,
            estimating: boolean,
            user_data?: any | null,
        ): void;

        // Owm methods of Ide-1.0.Progress

        get_fraction(): number;
        get_message(): string;
        set_fraction(fraction: number): void;
        set_message(message: string): void;
    }

    module Project {
        // Signal callback interfaces

        interface FileRenamed {
            (object: Gio.File, p0: Gio.File): void;
        }

        interface FileTrashed {
            (object: Gio.File): void;
        }

        // Constructor properties interface
    }

    class Project extends Object {
        // Own properties of Ide-1.0.Project

        readonly id: string;
        readonly name: string;
        root: ProjectItem;

        // Owm methods of Ide-1.0.Project

        add_file(file: ProjectFile): void;
        /**
         * Retrieves an #IdeFile for the path specified. #IdeFile provides access to
         * language specific features via ide_file_get_language().
         *
         * You must hold the reader lock while calling this function. See
         * ide_project_reader_lock() and ide_project_reader_unlock() for more
         * information.
         * @param path A relative path from the project root.
         * @returns An #IdeFile or %NULL if no matching   file could be found.
         */
        get_file_for_path(path: string): File | null;
        /**
         * Gets the #IdeProjectFiles instance within the project tree.
         * If it has not yet been loaded, %NULL is returned.
         * @returns An #IdeProjectFiles or %NULL.
         */
        get_files(): ProjectFiles | null;
        get_id(): string;
        get_name(): string;
        /**
         * Gets a new #IdeFile representing `gfile`.
         * @param gfile A #GFile.
         * @returns An #IdeFile.
         */
        get_project_file(gfile: Gio.File): File;
        /**
         * Retrieves the root item of the project tree.
         *
         * You must be holding the reader lock while calling and using the result of
         * this function. Other thread may be accessing or modifying the tree without
         * your knowledge. See ide_project_reader_lock() and ide_project_reader_unlock()
         * for more information.
         *
         * If you need to modify the tree, you must hold a writer lock that has been
         * acquired with ide_project_writer_lock() and released with
         * ide_project_writer_unlock() when you are no longer modifiying the tree.
         * @returns An #IdeProjectItem.
         */
        get_root(): ProjectItem;
        reader_lock(): void;
        reader_unlock(): void;
        rename_file_async(
            orig_file: Gio.File,
            new_file: Gio.File,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        rename_file_finish(result: Gio.AsyncResult): boolean;
        trash_file_async(
            file: Gio.File,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        trash_file_finish(result: Gio.AsyncResult): boolean;
        writer_lock(): void;
        writer_unlock(): void;
    }

    module ProjectEdit {
        // Constructor properties interface
    }

    class ProjectEdit extends GObject.Object {
        // Own properties of Ide-1.0.ProjectEdit

        range: SourceRange;
        replacement: string;

        // Constructors of Ide-1.0.ProjectEdit

        static ['new'](): ProjectEdit;

        // Owm methods of Ide-1.0.ProjectEdit

        /**
         * Returns the range for the edit.
         * @returns An #IdeSourceRange
         */
        get_range(): SourceRange | null;
        get_replacement(): string;
        set_range(range: SourceRange): void;
        set_replacement(replacement: string): void;
    }

    module ProjectFile {
        // Constructor properties interface
    }

    class ProjectFile extends ProjectItem {
        // Own properties of Ide-1.0.ProjectFile

        file: Gio.File;
        file_info: Gio.FileInfo;
        fileInfo: Gio.FileInfo;
        readonly is_directory: boolean;
        readonly isDirectory: boolean;
        readonly name: string;
        path: string;

        // Owm methods of Ide-1.0.ProjectFile

        /**
         * Retrieves the underlying #GFile represented by `file`.
         * @returns Retrieves the #GFile represented by @file.
         */
        get_file(): Gio.File;
        /**
         * Retrieves a #GFileInfo containing the basic information about `file`. This
         * includes the name, display name, and file type.
         * @returns A #GFileInfo
         */
        get_file_info(): Gio.FileInfo;
        get_is_directory(): boolean;
        get_name(): string;
        get_path(): string;
    }

    module ProjectFiles {
        // Constructor properties interface
    }

    class ProjectFiles extends ProjectItem {
        // Owm methods of Ide-1.0.ProjectFiles

        add_file(file: ProjectFile): void;
        /**
         * Tries to locate an #IdeProjectFile matching the given file.
         * If `file` is the working directory, `self` is returned.
         * @param file A #GFile.
         * @returns An #IdeProjectItem or %NULL.
         */
        find_file(file: Gio.File): ProjectItem | null;
        /**
         * Retrieves an #IdeFile for the path. If no such path exists within the
         * project, %NULL is returned.
         * @param path
         * @returns An #IdeFile or %NULL.
         */
        get_file_for_path(path: string): File | null;
    }

    module ProjectInfo {
        // Constructor properties interface
    }

    /**
     * This class contains information about a project that can be loaded.
     * This information should be used to display a list of available projects.
     */
    class ProjectInfo extends GObject.Object {
        // Own properties of Ide-1.0.ProjectInfo

        build_system_name: string;
        buildSystemName: string;
        description: string;
        directory: Gio.File;
        doap: Doap;
        file: Gio.File;
        is_recent: boolean;
        isRecent: boolean;
        languages: string[];
        last_modified_at: GLib.DateTime;
        lastModifiedAt: GLib.DateTime;
        name: string;
        priority: number;

        // Owm methods of Ide-1.0.ProjectInfo

        compare(info2: ProjectInfo): number;
        get_build_system_name(): string;
        get_description(): string;
        /**
         * Gets the #IdeProjectInfo:directory property.
         * This is the directory containing the project (if known).
         * @returns A #GFile.
         */
        get_directory(): Gio.File | null;
        get_doap(): Doap | null;
        /**
         * Gets the #IdeProjectInfo:file property.
         * This is the project file (such as configure.ac) of the project.
         * @returns A #GFile.
         */
        get_file(): Gio.File | null;
        get_is_recent(): boolean;
        get_languages(): string[];
        get_last_modified_at(): GLib.DateTime | null;
        get_name(): string;
        get_priority(): number;
        set_build_system_name(build_system_name: string): void;
        set_description(description: string): void;
        set_directory(directory: Gio.File): void;
        set_file(file: Gio.File): void;
        set_is_recent(is_recent: boolean): void;
        set_languages(languages: string): void;
        set_name(name: string): void;
        set_priority(priority: number): void;
    }

    module ProjectItem {
        // Constructor properties interface
    }

    class ProjectItem extends Object {
        // Own properties of Ide-1.0.ProjectItem

        parent: ProjectItem;

        // Owm methods of Ide-1.0.ProjectItem

        append(child: ProjectItem): void;
        /**
         * A scalable list containing the children of the item.
         * @returns A #GSequence.
         */
        get_children(): GLib.Sequence;
        /**
         * Retrieves the parent #IdeProjectItem of `item,` or %NULL if `item` is the root
         * of the project tree.
         * @returns An #IdeProjectItem or %NULL if the item   is the root of the tree.
         */
        get_parent(): ProjectItem | null;
        remove(child: ProjectItem): void;
    }

    module RecentProjects {
        // Constructor properties interface
    }

    class RecentProjects<A extends GObject.Object = GObject.Object> extends GObject.Object {
        // Constructors of Ide-1.0.RecentProjects

        static ['new'](): RecentProjects;

        // Owm methods of Ide-1.0.RecentProjects

        discover_async(
            recent_only: boolean,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        discover_finish(result: Gio.AsyncResult): boolean;
        get_busy(): boolean;
        /**
         * Gets a #GPtrArray containing the #IdeProjectInfo that have been discovered.
         * @returns A #GPtrArray of #IdeProjectInfo.
         */
        get_projects(): ProjectInfo[];
        /**
         * Removes the provided projects from the recent projects file.
         * @param project_infos A #GList of #IdeProjectInfo.
         */
        remove(project_infos: ProjectInfo[]): void;
    }

    module RunButton {
        // Constructor properties interface
    }

    class RunButton extends Gtk.Box {
        // Constructors of Ide-1.0.RunButton

        static ['new'](): RunButton;
    }

    module RunManager {
        // Signal callback interfaces

        interface Run {
            (runner: Runner): void;
        }

        interface Stopped {
            (): void;
        }

        // Constructor properties interface
    }

    class RunManager extends Object {
        // Own properties of Ide-1.0.RunManager

        build_target: BuildTarget;
        buildTarget: BuildTarget;
        readonly busy: boolean;
        readonly handler: string;

        // Owm methods of Ide-1.0.RunManager

        add_handler(id: string, title: string, icon_name: string, accel: string, run_handler: RunHandler): void;
        cancel(): void;
        discover_default_target_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        discover_default_target_finish(result: Gio.AsyncResult): BuildTarget;
        /**
         * Gets the build target that will be executed by the run manager which
         * was either specified to ide_run_manager_run_async() or determined by
         * the build system.
         * @returns An #IdeBuildTarget or %NULL if no build target   has been set.
         */
        get_build_target(): BuildTarget;
        get_busy(): boolean;
        get_handler(): string;
        remove_handler(id: string): void;
        run_async(
            build_target: BuildTarget,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        run_finish(result: Gio.AsyncResult): boolean;
        set_build_target(build_target: BuildTarget): void;
        set_handler(id: string): void;
    }

    module Runner {
        // Signal callback interfaces

        interface Exited {
            (): void;
        }

        interface Spawned {
            (object: string): void;
        }

        // Constructor properties interface
    }

    class Runner extends Object {
        // Own properties of Ide-1.0.Runner

        argv: string[];
        clear_env: boolean;
        clearEnv: boolean;
        readonly environment: Environment;
        /**
         * If the runner has "failed". This should be set if a plugin can determine
         * that the runner cannot be executed due to an external issue. One such
         * example might be a debugger plugin that cannot locate a suitable debugger
         * to run the program.
         */
        failed: boolean;
        /**
         * The "run-on-host" property indicates the program should be run on the
         * host machine rather than inside the application sandbox.
         */
        run_on_host: boolean;
        /**
         * The "run-on-host" property indicates the program should be run on the
         * host machine rather than inside the application sandbox.
         */
        runOnHost: boolean;

        // Constructors of Ide-1.0.Runner

        static ['new'](context: Context): Runner;

        // Owm methods of Ide-1.0.Runner

        append_argv(param: string): void;
        force_quit(): void;
        /**
         * Gets the argument list as a newly allocated string array.
         * @returns A newly allocated string array that should   be freed with g_strfreev().
         */
        get_argv(): string[];
        get_clear_env(): boolean;
        get_environment(): Environment;
        get_failed(): boolean;
        get_flags(): Gio.SubprocessFlags;
        get_run_on_host(): boolean;
        /**
         * This function will get the #IdeRuntime that will be used to execute the
         * application. Consumers may want to use this to determine if a particular
         * program is available (such as gdb, perf, strace, etc).
         * @returns An #IdeRuntime or %NULL.
         */
        get_runtime(): Runtime | null;
        get_stderr(): Gio.InputStream | null;
        get_stdin(): Gio.OutputStream | null;
        get_stdout(): Gio.InputStream | null;
        prepend_argv(param: string): void;
        run_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        run_finish(result: Gio.AsyncResult): boolean;
        set_argv(argv: string): void;
        set_clear_env(clear_env: boolean): void;
        set_failed(failed: boolean): void;
        set_flags(flags: Gio.SubprocessFlags): void;
        set_run_on_host(run_on_host: boolean): void;
        set_tty(tty_fd: number): void;
        /**
         * This will ensure that `source_fd` is mapped into the new process as `dest_fd`.
         * If `dest_fd` is -1, then the next fd will be used and that value will be
         * returned. Note that this is not a valid fd in the calling process, only
         * within the destination process.
         * @param source_fd the fd to map, this will be closed by #IdeRunner
         * @param dest_fd the target FD in the spawned process, or -1 for next available
         * @returns @dest_fd or the FD or the next available dest_fd.
         */
        take_fd(source_fd: number, dest_fd: number): number;
    }

    module Runtime {
        // Constructor properties interface
    }

    class Runtime extends Object {
        // Own properties of Ide-1.0.Runtime

        display_name: string;
        displayName: string;
        id: string;

        // Constructors of Ide-1.0.Runtime

        static ['new'](context: Context, id: string, title: string): Runtime;

        // Owm methods of Ide-1.0.Runtime

        contains_program_in_path(program: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Creates a launcher for the runtime.
         *
         * This can be used to execute a command within a runtime.
         *
         * It is important that this function can be run from a thread without
         * side effects.
         * @returns An #IdeSubprocessLauncher or %NULL upon failure.
         */
        create_launcher(): SubprocessLauncher;
        /**
         * Creates a new runner that can be used to execute the build target within
         * the runtime. This should be used to implement such features as "run target"
         * or "run unit test" inside the target runtime.
         * @param build_target
         * @returns An #IdeRunner if successful, otherwise   %NULL and @error is set.
         */
        create_runner(build_target: BuildTarget): Runner | null;
        get_display_name(): string;
        get_id(): string;
        prepare_configuration(configuration: Configuration): void;
        set_display_name(display_name: string): void;
        set_id(id: string): void;
        /**
         * Translates the file from a path within the runtime to a path that can
         * be accessed from the host system.
         * @param file A #GFile
         * @returns A #GFile.
         */
        translate_file(file: Gio.File): Gio.File;
    }

    module RuntimeManager {
        // Constructor properties interface
    }

    class RuntimeManager<A extends GObject.Object = GObject.Object> extends Object {
        // Owm methods of Ide-1.0.RuntimeManager

        add(runtime: Runtime): void;
        /**
         * This function will asynchronously check if a runtime is installed.
         *
         * If it is not installed, it will check to see if any runtime provider
         * can provide the runtime by installing it. If so, the runtime will be
         * installed.
         *
         * Call ide_runtime_manager_ensure_finish() to get the resulting runtime
         * or a #GError in case of failure.
         * @param runtime_id the id for an expected runtime
         * @param cancellable A #GCancellable or %NULL
         * @param callback a callback to call after execution
         */
        ensure_async(
            runtime_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        ensure_finish(result: Gio.AsyncResult): Runtime;
        /**
         * Gets the runtime by its internal identifier.
         * @param id the identifier of the runtime
         * @returns An #IdeRuntime.
         */
        get_runtime(id: string): Runtime;
        remove(runtime: Runtime): void;
    }

    module SearchContext {
        // Signal callback interfaces

        interface Completed {
            (): void;
        }

        interface CountSet {
            (object: SearchProvider, p0: number): void;
        }

        interface ResultAdded {
            (object: SearchProvider, p0: SearchResult): void;
        }

        interface ResultRemoved {
            (object: SearchProvider, p0: SearchResult): void;
        }

        // Constructor properties interface
    }

    class SearchContext extends Object {
        // Owm methods of Ide-1.0.SearchContext

        add_result(provider: SearchProvider, result: SearchResult): void;
        cancel(): void;
        execute(search_terms: string, max_results: number): void;
        get_max_results(): number;
        /**
         * Retrieve the list of providers for the search context.
         * @returns A #GList of   #IdeSearchProvider.
         */
        get_providers(): SearchProvider[];
        provider_completed(provider: SearchProvider): void;
        remove_result(provider: SearchProvider, result: SearchResult): void;
        set_provider_count(provider: SearchProvider, count: number): void;
    }

    module SearchEngine {
        // Constructor properties interface
    }

    class SearchEngine extends Object {
        // Owm methods of Ide-1.0.SearchEngine

        /**
         * Begins a query against the requested search providers.
         *
         * If `providers` is %NULL, all registered providers will be used.
         * @param search_terms The search terms.
         * @returns An #IdeSearchContext or %NULL if no   providers could be loaded.
         */
        search(search_terms: string): SearchContext | null;
    }

    module SearchResult {
        // Constructor properties interface
    }

    class SearchResult extends Object {
        // Own properties of Ide-1.0.SearchResult

        provider: SearchProvider;
        score: number;
        subtitle: string;
        title: string;

        // Constructors of Ide-1.0.SearchResult

        static ['new'](provider: SearchProvider, title: string, subtitle: string, score: number): SearchResult;

        // Owm methods of Ide-1.0.SearchResult

        activate(): void;
        compare(b: SearchResult): number;
        /**
         * Gets the provider that created the search result.
         * @returns An #IdeSearchProvider.
         */
        get_provider(): SearchProvider;
        get_score(): number;
        get_subtitle(): string;
        get_title(): string;
    }

    module Settings {
        // Signal callback interfaces

        interface Changed {
            (object: string): void;
        }

        // Constructor properties interface
    }

    /**
     * In Builder, we need support for settings at the user level (their chosen defaults) as well
     * as defaults for a project. #IdeSettings attempts to simplify this by providing a layered
     * approach to settings.
     *
     * If a setting has been set for the current project, it will be returned. If not, the users
     * preference will be returned. Setting a preference via #IdeSettings will always modify the
     * projects setting, not the users default settings.
     */
    class Settings extends Object {
        // Own properties of Ide-1.0.Settings

        ignore_project_settings: boolean;
        ignoreProjectSettings: boolean;
        relative_path: string;
        relativePath: string;
        schema_id: string;
        schemaId: string;

        // Owm methods of Ide-1.0.Settings

        bind(key: string, object: any | null, property: string, flags: Gio.SettingsBindFlags): void;
        /**
         * Like ide_settings_bind() but allows transforming to and from settings storage using
         * `get_mapping` and `set_mapping` transformation functions.
         *
         * Call ide_settings_unbind() to unbind the mapping.
         * @param key The settings key
         * @param object the object to bind to
         * @param property the property of @object to bind to
         * @param flags flags for the binding
         * @param get_mapping variant to value mapping
         * @param set_mapping value to variant mapping
         */
        bind_with_mapping(
            key: string,
            object: any | null,
            property: string,
            flags: Gio.SettingsBindFlags,
            get_mapping?: Gio.SettingsBindGetMapping | null,
            set_mapping?: Gio.SettingsBindSetMapping | null,
        ): void;
        get_boolean(key: string): boolean;
        get_default_value(key: string): GLib.Variant;
        get_double(key: string): number;
        get_ignore_project_settings(): boolean;
        get_int(key: string): number;
        get_relative_path(): string;
        get_schema_id(): string;
        get_string(key: string): string;
        get_uint(key: string): number;
        get_user_value(key: string): GLib.Variant;
        get_value(key: string): GLib.Variant;
        set_boolean(key: string, val: boolean): void;
        set_double(key: string, val: number): void;
        set_int(key: string, val: number): void;
        set_string(key: string, val: string): void;
        set_uint(key: string, val: number): void;
        set_value(key: string, value: GLib.Variant): void;
        unbind(property: string): void;
    }

    module SourceMap {
        // Signal callback interfaces

        interface HideMap {
            (): void;
        }

        interface ShowMap {
            (): void;
        }

        // Constructor properties interface
    }

    class SourceMap extends GtkSource.Map {}

    module SourceSnippet {
        // Constructor properties interface
    }

    class SourceSnippet extends GObject.Object {
        // Own properties of Ide-1.0.SourceSnippet

        readonly buffer: Gtk.TextBuffer;
        description: string;
        language: string;
        readonly mark_begin: Gtk.TextMark;
        readonly markBegin: Gtk.TextMark;
        readonly mark_end: Gtk.TextMark;
        readonly markEnd: Gtk.TextMark;
        snippet_text: string;
        snippetText: string;
        readonly tab_stop: number;
        readonly tabStop: number;
        trigger: string;

        // Constructors of Ide-1.0.SourceSnippet

        static ['new'](trigger: string, language: string): SourceSnippet;

        // Owm methods of Ide-1.0.SourceSnippet

        add_chunk(chunk: SourceSnippetChunk): void;
        copy(): SourceSnippet;
        get_chunk_range(chunk: SourceSnippetChunk, begin: Gtk.TextIter, end: Gtk.TextIter): void;
        get_context(): SourceSnippetContext;
        get_description(): string;
        get_language(): string;
        get_mark_begin(): Gtk.TextMark;
        get_mark_end(): Gtk.TextMark;
        get_n_chunks(): number;
        get_nth_chunk(n: number): SourceSnippetChunk;
        get_snippet_text(): string;
        get_tab_stop(): number;
        get_trigger(): string;
        set_description(description: string): void;
        set_language(language: string): void;
        set_snippet_text(snippet_text: string): void;
        set_trigger(trigger: string): void;
    }

    module SourceSnippetChunk {
        // Constructor properties interface
    }

    class SourceSnippetChunk extends GObject.Object {
        // Own properties of Ide-1.0.SourceSnippetChunk

        context: SourceSnippetContext;
        spec: string;
        tab_stop: number;
        tabStop: number;
        text: string;
        text_set: boolean;
        textSet: boolean;

        // Constructors of Ide-1.0.SourceSnippetChunk

        static ['new'](): SourceSnippetChunk;

        // Owm methods of Ide-1.0.SourceSnippetChunk

        /**
         * Copies the source snippet.
         * @returns An #IdeSourceSnippetChunk.
         */
        copy(): SourceSnippetChunk;
        /**
         * Gets the context for the snippet insertion.
         * @returns An #IdeSourceSnippetContext.
         */
        get_context(): SourceSnippetContext;
        get_spec(): string;
        get_tab_stop(): number;
        get_text(): string;
        get_text_set(): boolean;
        set_context(context: SourceSnippetContext): void;
        set_spec(spec: string): void;
        set_tab_stop(tab_stop: number): void;
        set_text(text: string): void;
        set_text_set(text_set: boolean): void;
    }

    module SourceSnippetContext {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * This class is currently used primary as a hashtable. However, the longer
     * term goal is to have it hold onto a GjsContext as well as other languages
     * so that #IdeSourceSnippetChunk<!-- -->'s can expand themselves by executing
     * script within the context.
     *
     * The #IdeSourceSnippet will build the context and then expand each of the
     * chunks during the insertion/edit phase.
     */
    class SourceSnippetContext extends GObject.Object {
        // Constructors of Ide-1.0.SourceSnippetContext

        static ['new'](): SourceSnippetContext;

        // Owm methods of Ide-1.0.SourceSnippetContext

        add_shared_variable(key: string, value: string): void;
        add_variable(key: string, value: string): void;
        clear_variables(): void;
        dump(): void;
        emit_changed(): void;
        expand(input: string): string;
        get_variable(key: string): string;
        set_line_prefix(line_prefix: string): void;
        set_tab_width(tab_size: number): void;
        set_use_spaces(use_spaces: boolean): void;
    }

    module SourceSnippets {
        // Constructor properties interface
    }

    class SourceSnippets extends GObject.Object {
        // Constructors of Ide-1.0.SourceSnippets

        static ['new'](): SourceSnippets;

        // Owm methods of Ide-1.0.SourceSnippets

        add(snippet: SourceSnippet): void;
        clear(): void;
        count(): number;
        foreach(prefix: string, foreach_func: GLib.Func): void;
        merge(other: SourceSnippets): void;
    }

    module SourceSnippetsManager {
        // Constructor properties interface
    }

    class SourceSnippetsManager extends GObject.Object {
        // Owm methods of Ide-1.0.SourceSnippetsManager

        /**
         * Gets the snippets for a given source language.
         * @param language
         * @returns An #IdeSourceSnippets or %NULL.
         */
        get_for_language(language: GtkSource.Language): SourceSnippets | null;
        /**
         * Gets the snippets for a given source language.
         * @param language_id
         * @returns An #IdeSourceSnippets or %NULL.
         */
        get_for_language_id(language_id: string): SourceSnippets | null;
        load_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        load_finish(result: Gio.AsyncResult): boolean;
    }

    module SourceView {
        // Signal callback interfaces

        interface Action {
            (object: string, p0: string, p1: string): void;
        }

        interface AddCursor {
            (object: CursorType): void;
        }

        interface AppendToCount {
            (object: number): void;
        }

        interface BeginMacro {
            (): void;
        }

        interface BeginRename {
            (): void;
        }

        interface BeginUserAction {
            (): void;
        }

        interface CaptureModifier {
            (): void;
        }

        interface ClearCount {
            (): void;
        }

        interface ClearModifier {
            (): void;
        }

        interface ClearSearch {
            (): void;
        }

        interface ClearSelection {
            (): void;
        }

        interface ClearSnippets {
            (): void;
        }

        interface CycleCompletion {
            (object: Gtk.DirectionType): void;
        }

        interface DecreaseFontSize {
            (): void;
        }

        interface DeleteSelection {
            (): void;
        }

        interface DuplicateEntireLine {
            (): void;
        }

        interface EndMacro {
            (): void;
        }

        interface EndUserAction {
            (): void;
        }

        interface FindReferences {
            (): void;
        }

        interface FocusLocation {
            (object: SourceLocation): void;
        }

        interface FormatSelection {
            (): void;
        }

        interface GotoDefinition {
            (): void;
        }

        interface HideCompletion {
            (): void;
        }

        interface IncreaseFontSize {
            (): void;
        }

        interface IndentSelection {
            (object: number): void;
        }

        interface InsertModifier {
            (use_count: boolean): void;
        }

        interface Jump {
            (object: Gtk.TextIter): void;
        }

        interface MoveError {
            (dir: Gtk.DirectionType): void;
        }

        interface MoveSearch {
            (object: Gtk.DirectionType, p0: boolean, p1: boolean, p2: boolean, p3: boolean, p4: number): void;
        }

        interface Movement {
            (object: SourceViewMovement, p0: boolean, p1: boolean, p2: boolean): void;
        }

        interface PasteClipboardExtended {
            (object: boolean, p0: boolean, p1: boolean): void;
        }

        interface PopSelection {
            (): void;
        }

        interface PopSnippet {
            (): void;
        }

        interface PushSelection {
            (): void;
        }

        interface PushSnippet {
            (snippet: SourceSnippet, iter?: Gtk.TextIter | null): void;
        }

        interface RebuildHighlight {
            (): void;
        }

        interface Reindent {
            (): void;
        }

        interface RemoveCursors {
            (): void;
        }

        interface ReplayMacro {
            (object: boolean): void;
        }

        interface RequestDocumentation {
            (): void;
        }

        interface ResetFontSize {
            (): void;
        }

        interface RestoreInsertMark {
            (): void;
        }

        interface SaveCommand {
            (): void;
        }

        interface SaveInsertMark {
            (): void;
        }

        interface SaveSearchChar {
            (): void;
        }

        interface SelectInner {
            (object: string, p0: string, p1: boolean, p2: boolean): void;
        }

        interface SelectTag {
            (object: boolean): void;
        }

        interface SelectionTheatric {
            (object: SourceViewTheatric): void;
        }

        interface SetMode {
            (object: string, p0: SourceViewModeType): void;
        }

        interface SetOverwrite {
            (object: boolean): void;
        }

        interface SetSearchText {
            (object: string, p0: boolean): void;
        }

        interface Sort {
            (ignore_case: boolean, reverse: boolean): void;
        }

        interface SwapSelectionBounds {
            (): void;
        }

        // Constructor properties interface
    }

    class SourceView extends GtkSource.View {
        // Own properties of Ide-1.0.SourceView

        back_forward_list: BackForwardList;
        backForwardList: BackForwardList;
        count: number;
        enable_word_completion: boolean;
        enableWordCompletion: boolean;
        readonly file_settings: FileSettings;
        readonly fileSettings: FileSettings;
        font_desc: Pango.FontDescription;
        fontDesc: Pango.FontDescription;
        font_name: string;
        fontName: string;
        indent_style: IndentStyle;
        indentStyle: IndentStyle;
        readonly indenter: Indenter;
        insert_matching_brace: boolean;
        insertMatchingBrace: boolean;
        readonly mode_display_name: string;
        readonly modeDisplayName: string;
        overscroll: number;
        overwrite_braces: boolean;
        overwriteBraces: boolean;
        rubberband_search: boolean;
        rubberbandSearch: boolean;
        scroll_offset: number;
        scrollOffset: number;
        readonly search_context: GtkSource.SearchContext;
        readonly searchContext: GtkSource.SearchContext;
        search_direction: Gtk.DirectionType;
        searchDirection: Gtk.DirectionType;
        show_grid_lines: boolean;
        showGridLines: boolean;
        show_line_changes: boolean;
        showLineChanges: boolean;
        /**
         * If the diagnostics gutter should be visible.
         *
         * This also requires that IdeBuffer:highlight-diagnostics is set to %TRUE
         * to generate diagnostics.
         */
        show_line_diagnostics: boolean;
        /**
         * If the diagnostics gutter should be visible.
         *
         * This also requires that IdeBuffer:highlight-diagnostics is set to %TRUE
         * to generate diagnostics.
         */
        showLineDiagnostics: boolean;
        show_search_bubbles: boolean;
        showSearchBubbles: boolean;
        show_search_shadow: boolean;
        showSearchShadow: boolean;
        snippet_completion: boolean;
        snippetCompletion: boolean;
        spell_checking: boolean;
        spellChecking: boolean;

        // Owm methods of Ide-1.0.SourceView

        clear_search(): void;
        clear_snippets(): void;
        /**
         * Gets the #IdeSourceView:back-forward-list property. This is the list that is used to manage
         * navigation history between multiple #IdeSourceView.
         * @returns An #IdeBackForwardList or %NULL.
         */
        get_back_forward_list(): BackForwardList | null;
        get_count(): number;
        /**
         * Gets the current snippet if there is one, otherwise %NULL.
         * @returns An #IdeSourceSnippet or %NULL.
         */
        get_current_snippet(): SourceSnippet | null;
        get_enable_word_completion(): boolean;
        /**
         * Gets the #IdeSourceView:file-settings property. This contains various
         * settings for how the file should be rendered in the view, and preferences
         * such as spaces vs tabs.
         * @returns An #IdeFileSettings or %NULL.
         */
        get_file_settings(): FileSettings | null;
        get_font_desc(): Pango.FontDescription;
        get_highlight_current_line(): boolean;
        get_insert_matching_brace(): boolean;
        get_iter_at_visual_column(column: number, location: Gtk.TextIter): void;
        get_mode_display_name(): string;
        get_mode_name(): string;
        get_overwrite(): boolean;
        get_overwrite_braces(): boolean;
        get_rubberband_search(): boolean;
        /**
         * Gets the #IdeSourceView:scroll-offset property. This property contains the number of lines
         * that should be kept above or below the line containing the insertion cursor relative to the
         * top and bottom of the visible text window.
         */
        get_scroll_offset(): number;
        /**
         * Returns the #GtkSourceSearchContext for the source view if there is one.
         * @returns A #GtkSourceSearchContext or %NULL.
         */
        get_search_context(): GtkSource.SearchContext | null;
        /**
         * Gets the current search direction.
         * @returns A #GtkDirectionType
         */
        get_search_direction(): Gtk.DirectionType;
        get_show_grid_lines(): boolean;
        get_show_line_changes(): boolean;
        get_show_line_diagnostics(): boolean;
        /**
         * Gets the #IdeSourceView:show-search-bubbles property.
         *
         * If this is set to %TRUE, a bubble will be drawn around search results to
         * make them stand out.
         *
         * The default is %FALSE.
         */
        get_show_search_bubbles(): boolean;
        /**
         * Gets the #IdeSourceView:show-search-shadow property.
         *
         * If this property is %TRUE, then when searching, a shadow will be drawn over
         * the portion of the visible region that does not contain a match. This can
         * be used to help bring focus to the matches.
         *
         * The default is %FALSE.
         */
        get_show_search_shadow(): boolean;
        /**
         * Gets the #IdeSourceView:snippet-completion property.
         *
         * If enabled, snippet expansion can be performed via the auto completion drop down.
         */
        get_snippet_completion(): boolean;
        get_spell_checking(): boolean;
        /**
         * Gets the visible region in buffer coordinates that is the visible area of the buffer. This
         * is similar to gtk_text_view_get_visible_area() except that it takes into account the
         * #IdeSourceView:scroll-offset property to ensure there is space above and below the
         * visible_rect.
         */
        get_visible_rect(): void;
        get_visual_column(location: Gtk.TextIter): number;
        get_visual_position(line: number, line_column: number): void;
        jump(location: Gtk.TextIter): void;
        move_mark_onscreen(mark: Gtk.TextMark): boolean;
        place_cursor_onscreen(): boolean;
        pop_snippet(): void;
        /**
         * Pushes a new snippet onto the source view.
         * @param snippet An #IdeSourceSnippet.
         * @param location A location for the snippet or %NULL.
         */
        push_snippet(snippet: SourceSnippet, location?: Gtk.TextIter | null): void;
        rollback_search(): void;
        scroll_mark_onscreen(mark: Gtk.TextMark, use_align: boolean, alignx: number, aligny: number): void;
        scroll_to_iter(
            iter: Gtk.TextIter,
            within_margin: number,
            use_align: boolean,
            xalign: number,
            yalign: number,
            animate_scroll: boolean,
        ): void;
        scroll_to_mark(
            mark: Gtk.TextMark,
            within_margin: number,
            use_align: boolean,
            xalign: number,
            yalign: number,
            animate_scroll: boolean,
        ): void;
        set_back_forward_list(back_forward_list: BackForwardList): void;
        set_count(count: number): void;
        set_enable_word_completion(enable_word_copletion: boolean): void;
        set_font_desc(font_desc: Pango.FontDescription): void;
        set_font_name(font_name: string): void;
        set_highlight_current_line(highlight_current_line: boolean): void;
        set_insert_matching_brace(insert_matching_brace: boolean): void;
        set_misspelled_word(start: Gtk.TextIter, end: Gtk.TextIter): void;
        set_overwrite_braces(overwrite_braces: boolean): void;
        set_rubberband_search(rubberband_search: boolean): void;
        /**
         * Sets the #IdeSourceView:scroll-offset property. See ide_source_view_get_scroll_offset() for
         * more information. Set to 0 to unset this property.
         * @param scroll_offset
         */
        set_scroll_offset(scroll_offset: number): void;
        /**
         * Sets the search direction.
         *
         * This can be used to invert the normal search direction so that a forward
         * movement is towards the beginning of the document.
         * @param direction the direction
         */
        set_search_direction(direction: Gtk.DirectionType): void;
        set_show_grid_lines(show_grid_lines: boolean): void;
        set_show_line_changes(show_line_changes: boolean): void;
        set_show_line_diagnostics(show_line_changes: boolean): void;
        set_show_search_bubbles(show_search_bubbles: boolean): void;
        set_show_search_shadow(show_search_bubbles: boolean): void;
        /**
         * Sets the #IdeSourceView:snippet-completion property. By setting this property to %TRUE,
         * snippets will be loaded for the currently activated source code language. See #IdeSourceSnippet
         * for more information on what can be provided via a snippet.
         *
         * See also: ide_source_view_get_snippet_completion()
         * @param snippet_completion
         */
        set_snippet_completion(snippet_completion: boolean): void;
        set_spell_checking(enable: boolean): void;
    }

    module SourceViewMode {
        // Signal callback interfaces

        interface Action {
            (object: string, p0: string, p1: string): void;
        }

        interface AddCursor {
            (object: CursorType): void;
        }

        interface AppendToCount {
            (object: number): void;
        }

        interface Backspace {
            (): void;
        }

        interface BeginMacro {
            (): void;
        }

        interface BeginRename {
            (): void;
        }

        interface BeginUserAction {
            (): void;
        }

        interface CaptureModifier {
            (): void;
        }

        interface ChangeCase {
            (object: GtkSource.ChangeCaseType): void;
        }

        interface ChangeNumber {
            (object: number): void;
        }

        interface ClearCount {
            (): void;
        }

        interface ClearModifier {
            (): void;
        }

        interface ClearSearch {
            (): void;
        }

        interface ClearSelection {
            (): void;
        }

        interface ClearSnippets {
            (): void;
        }

        interface CopyClipboard {
            (): void;
        }

        interface CutClipboard {
            (): void;
        }

        interface CycleCompletion {
            (object: Gtk.DirectionType): void;
        }

        interface DecreaseFontSize {
            (): void;
        }

        interface DeleteFromCursor {
            (object: Gtk.DeleteType, p0: number): void;
        }

        interface DeleteSelection {
            (): void;
        }

        interface DuplicateEntireLine {
            (): void;
        }

        interface EndMacro {
            (): void;
        }

        interface EndUserAction {
            (): void;
        }

        interface FindReferences {
            (): void;
        }

        interface FormatSelection {
            (): void;
        }

        interface GotoDefinition {
            (): void;
        }

        interface HideCompletion {
            (): void;
        }

        interface IncreaseFontSize {
            (): void;
        }

        interface IndentSelection {
            (object: number): void;
        }

        interface InsertAtCursor {
            (object: string): void;
        }

        interface InsertModifier {
            (object: boolean): void;
        }

        interface JoinLines {
            (): void;
        }

        interface MoveCursor {
            (object: Gtk.MovementStep, p0: number, p1: boolean): void;
        }

        interface MoveError {
            (object: Gtk.DirectionType): void;
        }

        interface MoveLines {
            (object: boolean, p0: number): void;
        }

        interface MoveSearch {
            (object: Gtk.DirectionType, p0: boolean, p1: boolean, p2: boolean, p3: boolean, p4: number): void;
        }

        interface MoveToMatchingBracket {
            (object: boolean): void;
        }

        interface MoveViewport {
            (object: Gtk.ScrollStep, p0: number): void;
        }

        interface MoveWords {
            (object: number): void;
        }

        interface Movement {
            (object: SourceViewMovement, p0: boolean, p1: boolean, p2: boolean): void;
        }

        interface PasteClipboard {
            (): void;
        }

        interface PasteClipboardExtended {
            (object: boolean, p0: boolean, p1: boolean): void;
        }

        interface PopSelection {
            (): void;
        }

        interface PreeditChanged {
            (object: string): void;
        }

        interface PushSelection {
            (): void;
        }

        interface RebuildHighlight {
            (): void;
        }

        interface Redo {
            (): void;
        }

        interface Reindent {
            (): void;
        }

        interface RemoveCursors {
            (): void;
        }

        interface ReplayMacro {
            (object: boolean): void;
        }

        interface RequestDocumentation {
            (): void;
        }

        interface ResetFontSize {
            (): void;
        }

        interface RestoreInsertMark {
            (): void;
        }

        interface SaveCommand {
            (): void;
        }

        interface SaveInsertMark {
            (): void;
        }

        interface SaveSearchChar {
            (): void;
        }

        interface SelectAll {
            (object: boolean): void;
        }

        interface SelectInner {
            (object: string, p0: string, p1: boolean, p2: boolean): void;
        }

        interface SelectTag {
            (object: boolean): void;
        }

        interface SelectionTheatric {
            (object: SourceViewTheatric): void;
        }

        interface SetAnchor {
            (): void;
        }

        interface SetMode {
            (object: string, p0: SourceViewModeType): void;
        }

        interface SetOverwrite {
            (object: boolean): void;
        }

        interface SetSearchText {
            (object: string, p0: boolean): void;
        }

        interface ShowCompletion {
            (): void;
        }

        interface Sort {
            (object: boolean, p0: boolean): void;
        }

        interface SwapSelectionBounds {
            (): void;
        }

        interface ToggleCursorVisible {
            (): void;
        }

        interface ToggleOverwrite {
            (): void;
        }

        interface Undo {
            (): void;
        }

        // Constructor properties interface
    }

    class SourceViewMode extends Gtk.Widget {
        // Own properties of Ide-1.0.SourceViewMode

        readonly name: string;

        // Owm methods of Ide-1.0.SourceViewMode

        get_block_cursor(): boolean;
        get_default_mode(): string;
        get_display_name(): string;
        get_keep_mark_on_char(): boolean;
        get_mode_type(): SourceViewModeType;
        get_name(): string;
        get_repeat_insert_with_count(): boolean;
        get_suppress_unbound(): boolean;
        set_has_indenter(has_indenter: boolean): void;
    }

    module SubprocessLauncher {
        // Constructor properties interface
    }

    class SubprocessLauncher extends GObject.Object {
        // Own properties of Ide-1.0.SubprocessLauncher

        clean_env: boolean;
        cleanEnv: boolean;
        cwd: string;
        environ: string[];
        flags: Gio.SubprocessFlags;
        run_on_host: boolean;
        runOnHost: boolean;

        // Constructors of Ide-1.0.SubprocessLauncher

        static ['new'](flags: Gio.SubprocessFlags): SubprocessLauncher;

        // Owm methods of Ide-1.0.SubprocessLauncher

        get_argv(): string[];
        get_clear_env(): boolean;
        get_cwd(): string;
        get_environ(): string[];
        get_flags(): Gio.SubprocessFlags;
        /**
         * Gets if the process should be executed on the host system. This might be
         * useful for situations where running in a contained environment is not
         * sufficient to perform the given task.
         *
         * Currently, only flatpak is supported for breaking out of the containment
         * zone and requires the application was built with --allow=devel.
         * @returns %TRUE if the process should be executed outside the containment zone.
         */
        get_run_on_host(): boolean;
        getenv(key: string): string;
        insert_argv(index: number, arg: string): void;
        overlay_environment(environment: Environment): void;
        pop_argv(): string;
        /**
         * This function is semantically identical to calling ide_subprocess_launcher_push_argv()
         * for each element of `args`.
         *
         * If `args` is %NULL, this function does nothing.
         * @param args the arguments
         */
        push_args(args?: string[] | null): void;
        push_argv(argv: string): void;
        replace_argv(index: number, arg: string): void;
        set_clear_env(clear_env: boolean): void;
        set_cwd(cwd: string): void;
        set_environ(environ_: string): void;
        set_flags(flags: Gio.SubprocessFlags): void;
        /**
         * Sets the #IdeSubprocessLauncher:run-on-host property. See
         * ide_subprocess_launcher_get_run_on_host() for more information.
         * @param run_on_host
         */
        set_run_on_host(run_on_host: boolean): void;
        set_stdout_file_path(stdout_file_path: string): void;
        setenv(key: string, value: string, replace: boolean): void;
        /**
         * Synchronously spawn a process using the internal state.
         * @param cancellable
         * @returns A #IdeSubprocess or %NULL upon error.
         */
        spawn(cancellable?: Gio.Cancellable | null): Subprocess;
        take_fd(source_fd: number, dest_fd: number): void;
        take_stderr_fd(stderr_fd: number): void;
        take_stdin_fd(stdin_fd: number): void;
        take_stdout_fd(stdout_fd: number): void;
    }

    module SubprocessSupervisor {
        // Signal callback interfaces

        interface Spawned {
            (object: Subprocess): void;
        }

        interface Supervise {
            (object: SubprocessLauncher): boolean;
        }

        interface Unsupervise {
            (object: SubprocessLauncher): boolean;
        }

        // Constructor properties interface
    }

    class SubprocessSupervisor extends GObject.Object {
        // Constructors of Ide-1.0.SubprocessSupervisor

        static ['new'](): SubprocessSupervisor;

        // Owm methods of Ide-1.0.SubprocessSupervisor

        get_launcher(): SubprocessLauncher | null;
        /**
         * Gets the current #IdeSubprocess that is being supervised. This might be
         * %NULL if the ide_subprocess_supervisor_start() has not yet been
         * called or if there was a failure to spawn the process.
         * @returns An #IdeSubprocess or %NULL.
         */
        get_subprocess(): Subprocess | null;
        set_launcher(launcher: SubprocessLauncher): void;
        set_subprocess(subprocess: Subprocess): void;
        start(): void;
        stop(): void;
    }

    module SymbolNode {
        // Constructor properties interface
    }

    class SymbolNode extends Object {
        // Own properties of Ide-1.0.SymbolNode

        flags: SymbolFlags;
        kind: SymbolKind;
        name: string;
        use_markup: boolean;
        useMarkup: boolean;

        // Owm methods of Ide-1.0.SymbolNode

        get_flags(): SymbolFlags;
        get_kind(): SymbolKind;
        get_location_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Completes the request to gets the location for the symbol node.
         * @param result
         * @returns An #IdeSourceLocation or %NULL.
         */
        get_location_finish(result: Gio.AsyncResult): SourceLocation | null;
        get_name(): string;
        get_use_markup(): boolean;
    }

    module TemplateBase {
        // Constructor properties interface
    }

    abstract class TemplateBase extends GObject.Object {
        // Own properties of Ide-1.0.TemplateBase

        /**
         * The #IdeTemplateBase:locator property contains the #TmplTemplateLocator
         * that should be used to resolve template includes. If %NULL, templates
         * will not be allowed to include other templates.
         * directive.
         */
        locator: Template.TemplateLocator;

        // Owm methods of Ide-1.0.TemplateBase

        add_path(path: string, destination: Gio.File, scope: Template.Scope, mode: number): void;
        add_resource(resource_path: string, destination: Gio.File, scope: Template.Scope, mode: number): void;
        expand_all_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        expand_all_finish(result: Gio.AsyncResult): boolean;
        /**
         * Fetches the #TmplTemplateLocator used for resolving templates.
         * @returns A #TmplTemplateLocator or %NULL.
         */
        get_locator(): Template.TemplateLocator | null;
        reset(): void;
        set_locator(locator: Template.TemplateLocator): void;
    }

    module Transfer {
        // Constructor properties interface
    }

    class Transfer extends GObject.Object {
        // Own properties of Ide-1.0.Transfer

        readonly active: boolean;
        readonly completed: boolean;
        icon_name: string;
        iconName: string;
        progress: number;
        status: string;
        title: string;

        // Owm methods of Ide-1.0.Transfer

        static error_quark(): GLib.Quark;

        // Owm methods of Ide-1.0.Transfer

        cancel(): void;
        execute_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        execute_finish(result: Gio.AsyncResult): boolean;
        get_active(): boolean;
        get_completed(): boolean;
        get_icon_name(): string;
        get_progress(): number;
        get_status(): string;
        get_title(): string;
        set_icon_name(icon_name: string): void;
        set_progress(progress: number): void;
        set_status(status: string): void;
        set_title(title: string): void;
    }

    module TransferButton {
        // Constructor properties interface
    }

    class TransferButton extends Dazzle.ProgressButton {
        // Own properties of Ide-1.0.TransferButton

        transfer: Transfer;

        // Constructors of Ide-1.0.TransferButton

        static ['new'](transfer: Transfer): TransferButton;
    }

    module TransferManager {
        // Signal callback interfaces

        interface AllTransfersCompleted {
            (): void;
        }

        interface TransferCompleted {
            (transfer: Transfer): void;
        }

        interface TransferFailed {
            (transfer: Transfer, reason: GLib.Error): void;
        }

        // Constructor properties interface
    }

    class TransferManager<A extends GObject.Object = GObject.Object> extends Object {
        // Own properties of Ide-1.0.TransferManager

        /**
         * If there are transfers active, this will be set.
         */
        readonly has_active: boolean;
        /**
         * If there are transfers active, this will be set.
         */
        readonly hasActive: boolean;
        /**
         * A double between and including 0.0 and 1.0 describing the progress of
         * all tasks.
         */
        readonly progress: number;

        // Owm methods of Ide-1.0.TransferManager

        cancel_all(): void;
        /**
         * Removes all transfers from the manager that are completed.
         */
        clear(): void;
        /**
         * This is a convenience function that will queue `transfer` into the transfer
         * manager and execute callback upon completion of the transfer. The success
         * or failure #GError will be propagated to the caller via
         * ide_transfer_manager_execute_finish().
         * @param transfer
         * @param cancellable A #GCancellable
         * @param callback A callback or %NULL
         */
        execute_async(
            transfer: Transfer,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        execute_finish(result: Gio.AsyncResult): boolean;
        /**
         * Gets if there are active transfers.
         * @returns %TRUE if there are active transfers.
         */
        get_has_active(): boolean;
        get_progress(): number;
    }

    module TransferRow {
        // Signal callback interfaces

        interface Cancelled {
            (): void;
        }

        // Constructor properties interface
    }

    class TransferRow extends Gtk.ListBoxRow {
        // Own properties of Ide-1.0.TransferRow

        transfer: Transfer;

        // Owm methods of Ide-1.0.TransferRow

        get_transfer(): Transfer | null;
        set_transfer(transfer: Transfer): void;
    }

    module TransfersButton {
        // Constructor properties interface
    }

    class TransfersButton extends Gtk.MenuButton {
        // Constructors of Ide-1.0.TransfersButton

        static ['new'](): TransfersButton;
    }

    module TransfersProgressIcon {
        // Constructor properties interface
    }

    class TransfersProgressIcon extends Gtk.DrawingArea {
        // Own properties of Ide-1.0.TransfersProgressIcon

        progress: number;

        // Constructors of Ide-1.0.TransfersProgressIcon

        static ['new'](): TransfersProgressIcon;

        // Owm methods of Ide-1.0.TransfersProgressIcon

        get_progress(): number;
        set_progress(progress: number): void;
    }

    module UnsavedFiles {
        // Constructor properties interface
    }

    class UnsavedFiles extends Object {
        // Owm methods of Ide-1.0.UnsavedFiles

        clear(): void;
        contains(file: Gio.File): boolean;
        get_sequence(): number;
        /**
         * Retrieves the unsaved file content for a particular file. If no unsaved
         * file content is registered, %NULL is returned.
         * @param file
         * @returns An #IdeUnsavedFile or %NULL.
         */
        get_unsaved_file(file: Gio.File): UnsavedFile | null;
        remove(file: Gio.File): void;
        restore_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        restore_finish(result: Gio.AsyncResult): boolean;
        save_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        save_finish(result: Gio.AsyncResult): boolean;
        /**
         * This retrieves all of the unsaved file buffers known to the context.
         * These are handy if you need to pass modified state to parsers such as
         * clang.
         *
         * Call g_ptr_array_unref() on the resulting #GPtrArray when no longer in use.
         *
         * If you would like to hold onto an unsaved file instance, call
         * ide_unsaved_file_ref() to increment its reference count.
         * @returns A #GPtrArray   containing #IdeUnsavedFile elements.
         */
        to_array(): UnsavedFile[];
        update(file: Gio.File, content: GLib.Bytes): void;
    }

    module Workbench {
        // Signal callback interfaces

        interface Action {
            (object: string, p0: string, p1: string): void;
        }

        interface SetPerspective {
            (name: string): void;
        }

        interface Unload {
            (object: Context): void;
        }

        // Constructor properties interface
    }

    class Workbench extends Gtk.ApplicationWindow {
        // Own properties of Ide-1.0.Workbench

        /**
         * The #IdeWorkbench:context property contains the #IdeContext for the loaded
         * project. Loading a project consists of creating an #IdeContext, so there
         * is a 1:1 mapping between "loaded project" and an #IdeContext.
         *
         * The #IdeContext contains many of the important components of a project.
         * For example, it contains the #IdeVcs representing the active version
         * control system and an #IdeBuildSystem representing the current build
         * system.
         *
         * The creation of #IdeWorkbenchAddin addins are deferred until this property
         * has been set.
         */
        readonly context: Context;
        /**
         * This property is used internally by Builder to avoid creating the
         * greeter when opening a new workspace that is only for loading a
         * project.
         *
         * This should not be used by application plugins.
         */
        disable_greeter: boolean;
        /**
         * This property is used internally by Builder to avoid creating the
         * greeter when opening a new workspace that is only for loading a
         * project.
         *
         * This should not be used by application plugins.
         */
        disableGreeter: boolean;
        /**
         * This property contains the #IdePerspective that is currently selected.
         * Connect to the "notify::visible-perspective" signal to be notified when
         * the perspective has been changed.
         */
        visible_perspective: Perspective;
        /**
         * This property contains the #IdePerspective that is currently selected.
         * Connect to the "notify::visible-perspective" signal to be notified when
         * the perspective has been changed.
         */
        visiblePerspective: Perspective;
        /**
         * This property is just like #IdeWorkbench:visible-perspective except that
         * it contains the name of the perspective as a string.
         */
        visible_perspective_name: string;
        /**
         * This property is just like #IdeWorkbench:visible-perspective except that
         * it contains the name of the perspective as a string.
         */
        visiblePerspectiveName: string;

        // Owm methods of Ide-1.0.Workbench

        add_perspective(perspective: Perspective): void;
        close(): void;
        focus(widget: Gtk.Widget): void;
        /**
         * Gets the context associated with the workbench, or %NULL.
         * @returns An #IdeContext or %NULL.
         */
        get_context(): Context | null;
        get_fullscreen(): boolean;
        /**
         * Helper that is equivalent to calling gtk_window_get_titlebar() and casting
         * to an #IdeWorkbenchHeaderBar. This is convenience for plugins.
         * @returns An #IdeWorkbenchHeaderBar.
         */
        get_headerbar(): WorkbenchHeaderBar;
        /**
         * Gets the perspective by its registered name as defined in
         * ide_perspective_get_id().
         * @param name
         * @returns An #IdePerspective or %NULL.
         */
        get_perspective_by_name(name: string): Perspective | null;
        /**
         * Gets the current perspective.
         * @returns An #IdePerspective.
         */
        get_visible_perspective(): Perspective;
        get_visible_perspective_name(): string;
        /**
         * Starts the process of loading the buffers for the given `files,` possibly
         * creating an #IdeEditorView for each depending on `flags`.
         * @param files An array of #GFile objects to be opened.
         * @param n_files The number of files given.
         * @param hint The id of an #IdeWorkbenchAddin that should be preferred as a loader.
         * @param flags A #IdeWorkbenchOpenFlags (if WORKBENCH_OPEN_FLAGS_BG is set, the buffer is loaded but not made visible in the UI).
         * @param cancellable A #GCancellable.
         * @param callback A #GASyncReadyCallback.
         */
        open_files_async(
            files: Gio.File,
            n_files: number,
            hint: string,
            flags: WorkbenchOpenFlags,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        open_files_finish(result: Gio.AsyncResult): boolean;
        open_project_async(
            file_or_directory: Gio.File,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        open_project_finish(result: Gio.AsyncResult): boolean;
        open_uri_async(
            uri: Uri,
            hint: string,
            flags: WorkbenchOpenFlags,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        open_uri_finish(result: Gio.AsyncResult): boolean;
        pop_message(message_id: string): boolean;
        push_message(message: WorkbenchMessage): void;
        remove_perspective(perspective: Perspective): void;
        save_all_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        save_all_finish(result: Gio.AsyncResult): boolean;
        set_fullscreen(fullscreen: boolean): void;
        set_visible_perspective(perspective: Perspective): void;
        set_visible_perspective_name(name: string): void;
        /**
         * Executes `callback` for every #IdeLayoutView across all perspectives.
         * @param callback The callback to execute
         */
        views_foreach(callback: Gtk.Callback): void;
    }

    module WorkbenchHeaderBar {
        // Constructor properties interface
    }

    class WorkbenchHeaderBar extends Gtk.HeaderBar {
        // Constructors of Ide-1.0.WorkbenchHeaderBar

        static ['new'](): WorkbenchHeaderBar;

        // Owm methods of Ide-1.0.WorkbenchHeaderBar

        focus_search(): void;
        get_omni_bar(): OmniBar;
        insert_left(widget: Gtk.Widget, pack_type: Gtk.PackType, priority: number): void;
        insert_right(widget: Gtk.Widget, pack_type: Gtk.PackType, priority: number): void;
    }

    module WorkbenchMessage {
        // Constructor properties interface
    }

    class WorkbenchMessage extends Gtk.InfoBar {
        // Own properties of Ide-1.0.WorkbenchMessage

        id: string;
        subtitle: string;
        title: string;

        // Constructors of Ide-1.0.WorkbenchMessage

        static ['new'](): WorkbenchMessage;

        // Owm methods of Ide-1.0.WorkbenchMessage

        add_action(label: string, action_name: string): void;
        get_id(): string;
        get_subtitle(): string;
        get_title(): string;
        set_id(id: string): void;
        set_subtitle(subtitle: string): void;
        set_title(title: string): void;
    }

    class ApplicationAddinInterface {}

    class ApplicationClass {}

    class ApplicationToolInterface {}

    class BackForwardItemClass {}

    class BackForwardListClass {}

    class BufferChangeMonitorClass {}

    class BufferClass {}

    class BufferManagerClass {}

    class BuildCommand {}

    class BuildCommandQueue {}

    class BuildManagerClass {}

    class BuildPipelineAddinInterface {}

    class BuildPipelineClass {}

    class BuildResult {}

    class BuildStageClass {}

    class BuildStageLauncherClass {}

    class BuildStageMkdirsClass {}

    class BuildStageTransferClass {}

    class BuildSystemDiscoveryInterface {}

    class BuildSystemInterface {}

    class BuildTargetInterface {}

    class BuildconfigConfigurationClass {}

    class BuildconfigConfigurationProviderClass {}

    class Builder {}

    class CompletionItemClass {}

    class CompletionProviderInterface {}

    class CompletionResultsClass {}

    class CompletionWordsClass {}

    class ConfigurationClass {}

    class ConfigurationManagerClass {}

    class ConfigurationProviderInterface {}

    class ContextClass {}

    class CursorClass {}

    class DeviceClass {}

    class DeviceManagerClass {}

    class DeviceProviderInterface {}

    class Diagnostic {
        // Constructors of Ide-1.0.Diagnostic

        constructor(severity: DiagnosticSeverity, text: string, location: SourceLocation);

        static ['new'](severity: DiagnosticSeverity, text: string, location: SourceLocation): Diagnostic;

        // Owm methods of Ide-1.0.Diagnostic

        /**
         * Adds the range to the diagnostic. This allows diagnostic tools to highlight
         * the errored text appropriately.
         * @param range An #IdeSourceRange.
         */
        add_range(range: SourceRange): void;
        compare(b: Diagnostic): number;
        /**
         * This is a helper to simplify the process of determining what file
         * the diagnostic is within. It is equivalent to getting the source
         * location and looking at the file.
         * @returns A #GFile or %NULL.
         */
        get_file(): Gio.File | null;
        /**
         * Gets the fixit denoted by `index`. This value should be less than the value
         * returned from ide_diagnostic_get_num_fixits().
         * @param index The index of the fixit.
         * @returns An #IdeFixit.
         */
        get_fixit(index: number): Fixit;
        /**
         * Gets the location of a diagnostic.
         * @returns Gets the location of a diagnostic.
         */
        get_location(): SourceLocation;
        get_num_fixits(): number;
        get_num_ranges(): number;
        /**
         * Retrieves the range found at `index`. It is a programming error to call this
         * function with a value greater or equal to ide_diagnostic_get_num_ranges().
         * @param index
         * @returns An #IdeSourceRange
         */
        get_range(index: number): SourceRange | null;
        get_severity(): DiagnosticSeverity;
        get_text(): string;
        /**
         * This creates a new string that is formatted using the diagnostics line number, column, severity,
         * and message text in the format "line:column: severity: message".
         *
         * This can be convenient when wanting to quickly display a diagnostic such as in a tooltip.
         * @returns A string containing the text formatted for display.
         */
        get_text_for_display(): string;
        hash(): number;
        ref(): Diagnostic;
        /**
         * Adds the suggested fixit to the diagnostic while transfering ownership
         * of `fixit` to `self`.
         * @param fixit An #IdeFixit.
         */
        take_fixit(fixit: Fixit): void;
        /**
         * Steals the ownership of `range` and adds to the diagnostic.
         *
         * This saves multiple atomic references of `range` which could be expensive
         * if you are doing lots of diagnostics.
         * @param range An #IdeSourceRange.
         */
        take_range(range: SourceRange): void;
        unref(): void;
    }

    class DiagnosticProviderInterface {}

    class Diagnostics {
        // Constructors of Ide-1.0.Diagnostics

        constructor(ar?: Diagnostic[] | null);

        static ['new'](ar?: Diagnostic[] | null): Diagnostics;

        // Owm methods of Ide-1.0.Diagnostics

        add(diagnostic: Diagnostic): void;
        /**
         * Retrieves the number of diagnostics that can be accessed via
         * ide_diagnostics_index().
         * @returns The number of diagnostics in @self.
         */
        get_size(): number;
        /**
         * Retrieves the diagnostic at `index`.
         * @param index
         * @returns An #IdeDiagnostic.
         */
        index(index: number): Diagnostic;
        /**
         * Copies the contents of `other` into `self`.
         *
         * This is performed by taking a reference to the immutable #IdeDiagnostic
         * instances.
         * @param other
         */
        merge(other: Diagnostics): void;
        ref(): Diagnostics;
        unref(): void;
    }

    class DiagnosticsManagerClass {}

    class DirectoryBuildSystemClass {}

    class DirectoryVcsClass {}

    class DoapClass {}

    class DoapPersonClass {}

    class EditorFrame {}

    class EditorPerspectiveClass {}

    class EditorViewAddinInterface {}

    class EditorViewClass {}

    class EnvironmentClass {}

    class EnvironmentVariableClass {}

    class ExtensionAdapterClass {}

    class ExtensionSetAdapterClass {}

    class FileClass {}

    class FileSettingsClass {}

    class Fixit {
        // Owm methods of Ide-1.0.Fixit

        apply(): void;
        /**
         * Gets the range for the replacement text. The range is non inclusive of the
         * end location. [a,b)
         * @returns An #IdeSourceRange.
         */
        get_range(): SourceRange;
        /**
         * Gets the text to replace the source range with.
         * @returns A string with the replacement text.
         */
        get_text(): string;
        ref(): Fixit;
        unref(): void;
    }

    class FormatterInterface {}

    class FormatterOptionsClass {}

    class GenesisAddinInterface {}

    class HighlightEngineClass {}

    class HighlightIndex {
        // Constructors of Ide-1.0.HighlightIndex

        constructor(properties?: Partial<{}>);

        static ['new'](): HighlightIndex;

        // Owm methods of Ide-1.0.HighlightIndex

        dump(): void;
        insert(word: string, tag?: any | null): void;
        /**
         * Gets the pointer tag that was registered for `word,` or %NULL.  This can be
         * any arbitrary value. Some highlight engines might use it to point at
         * internal structures or strings they know about to optimize later work.
         * @param word
         * @returns Highlighter specific tag.
         */
        lookup(word: string): any | null;
        ref(): HighlightIndex;
        unref(): void;
    }

    class HighlighterInterface {}

    class IndenterInterface {}

    class LangservClientClass {}

    class LangservCompletionProviderClass {}

    class LangservDiagnosticProviderClass {}

    class LangservFormatterClass {}

    class LangservHighlighterClass {}

    class LangservRenameProviderClass {}

    class LangservSymbolNodeClass {}

    class LangservSymbolResolverClass {}

    class LangservSymbolTreeClass {}

    class LayoutClass {}

    class LayoutGridClass {}

    class LayoutPaneClass {}

    class LayoutStackAddinInterface {}

    class LayoutStackClass {}

    class LayoutViewClass {}

    class LineReader {
        // Own fields of Ide-1.0.LineReader

        contents: string;
        length: number;
        pos: number;

        // Constructors of Ide-1.0.LineReader

        constructor(
            properties?: Partial<{
                contents: string;
                length: number;
                pos: number;
            }>,
        );

        // Owm methods of Ide-1.0.LineReader

        init(contents: string, length: number): void;
        /**
         * Moves forward to the beginning of the next line in the buffer. No changes to the buffer
         * are made, and the result is a pointer within the string passed as `contents` in
         * ide_line_reader_init(). Since the line most likely will not be terminated with a NULL byte,
         * you must provide `length` to determine the length of the line.
         * @param length a location for the length of the line in bytes.
         * @returns The beginning of the line within the buffer.
         */
        next(length: number): string;
    }

    class LocalDeviceClass {}

    class ObjectClass {}

    class OmniBarClass {}

    class OmniSearchDisplayClass {}

    class OmniSearchEntryClass {}

    class OmniSearchGroupClass {}

    class OmniSearchRowClass {}

    /**
     * This works similar to GPatternSpec except the query syntax is different.
     * It tries to mtach word boundaries, but with matching partial words up
     * to those boundaries. For example, "gtk widg" would match "gtk_widget_show".
     * Word boundaries include '_' and ' '. If any character is uppercase, then
     * case sensitivity is used.
     */
    class PatternSpec {
        // Constructors of Ide-1.0.PatternSpec

        constructor(keywords: string);

        static ['new'](keywords: string): PatternSpec;

        // Owm methods of Ide-1.0.PatternSpec

        get_text(): string;
        match(haystack: string): boolean;
        ref(): PatternSpec;
        unref(): void;
    }

    class PerspectiveInterface {}

    class PkconTransferClass {}

    class PreferencesAddinInterface {}

    class PreferencesPerspectiveClass {}

    class ProgressClass {}

    class ProjectClass {}

    class ProjectEditClass {}

    class ProjectFileClass {}

    class ProjectFilesClass {}

    class ProjectInfoClass {}

    class ProjectItemClass {}

    class ProjectMinerInterface {}

    class ProjectTemplateInterface {}

    class RecentProjectsClass {}

    class RenameProviderInterface {}

    class RunButtonClass {}

    class RunManagerClass {}

    class RunnerAddinInterface {}

    class RunnerClass {}

    class RuntimeClass {}

    class RuntimeManagerClass {}

    class RuntimeProviderInterface {}

    class Script {}

    class ScriptManager {}

    class SearchContextClass {}

    class SearchEngineClass {}

    class SearchProviderInterface {}

    class SearchReducer {
        // Own fields of Ide-1.0.SearchReducer

        context: SearchContext;
        provider: SearchProvider;
        max_results: number;
        count: number;

        // Owm methods of Ide-1.0.SearchReducer

        accepts(score: number): boolean;
        destroy(): void;
        init(context: SearchContext, provider: SearchProvider, max_results: number): void;
        push(result: SearchResult): void;
    }

    class SearchResultClass {}

    class ServiceInterface {}

    class SettingsClass {}

    class SourceLocation {
        // Constructors of Ide-1.0.SourceLocation

        constructor(file: File, line: number, line_offset: number, offset: number);

        static ['new'](file: File, line: number, line_offset: number, offset: number): SourceLocation;

        // Owm methods of Ide-1.0.SourceLocation

        compare(b: SourceLocation): number;
        /**
         * The file represented by this source location.
         * @returns An #IdeFile.
         */
        get_file(): File;
        /**
         * Retrieves the target line number starting from 0.
         * @returns A #guint containing the target line.
         */
        get_line(): number;
        /**
         * Retrieves the character offset within the line.
         * @returns A #guint containing the offset within the line.
         */
        get_line_offset(): number;
        /**
         * Retrieves the character offset within the file.
         * @returns A #guint containing the character offset within the file.
         */
        get_offset(): number;
        get_uri(): Uri;
        hash(): number;
        /**
         * Increments the reference count of `self` by one.
         * @returns self
         */
        ref(): SourceLocation;
        /**
         * Decrements the reference count of `self` by one. If the reference count
         * reaches zero, then the structure is freed.
         */
        unref(): void;
    }

    class SourceMapClass {}

    class SourceRange {
        // Constructors of Ide-1.0.SourceRange

        constructor(begin: SourceLocation, end: SourceLocation);

        static ['new'](begin: SourceLocation, end: SourceLocation): SourceRange;

        // Owm methods of Ide-1.0.SourceRange

        /**
         * Gets the beginning of the source range.
         * @returns An #IdeSourceLocation.
         */
        get_begin(): SourceLocation;
        /**
         * Gets the end of the source range.
         * @returns An #IdeSourceLocation.
         */
        get_end(): SourceLocation;
        /**
         * Increments the reference count of `self` by one. When you are done with
         * `self,` release it by calling ide_source_range_unref().
         * @returns @self
         */
        ref(): SourceRange;
        /**
         * Decrements the reference count of `self` by one.
         */
        unref(): void;
    }

    class SourceSnippetChunkClass {}

    class SourceSnippetClass {}

    class SourceSnippetContextClass {}

    class SourceSnippetsClass {}

    class SourceSnippetsManagerClass {}

    class SourceViewClass {}

    class SourceViewModeClass {}

    class SubprocessInterface {}

    class SubprocessLauncherClass {}

    class SubprocessSupervisorClass {}

    class Symbol {
        // Constructors of Ide-1.0.Symbol

        constructor(
            name: string,
            kind: SymbolKind,
            flags: SymbolFlags,
            declaration_location?: SourceLocation | null,
            definition_location?: SourceLocation | null,
            canonical_location?: SourceLocation | null,
        );

        static ['new'](
            name: string,
            kind: SymbolKind,
            flags: SymbolFlags,
            declaration_location?: SourceLocation | null,
            definition_location?: SourceLocation | null,
            canonical_location?: SourceLocation | null,
        ): Symbol;

        // Owm methods of Ide-1.0.Symbol

        /**
         * Gets the location of the symbols "implementation". In C/C++ languages, you can have multiple
         * declarations by only a single implementation.
         * @returns An #IdeSourceLocation or %NULL.
         */
        get_canonical_location(): SourceLocation | null;
        /**
         * The location of a symbol equates to the declaration of the symbol. In C and C++, this would
         * mean the header location (or forward declaration in a C file before the implementation).
         *
         * If the symbol provider did not register this information, %NULL will be returned.
         * @returns An #IdeSourceLocation or %NULL.
         */
        get_declaration_location(): SourceLocation | null;
        /**
         * Like ide_symbol_get_declaration_location() but gets the first declaration (only one can be
         * the definition).
         * @returns An #IdeSourceLocation or %NULL.
         */
        get_definition_location(): SourceLocation | null;
        get_flags(): SymbolFlags;
        get_kind(): SymbolKind;
        get_name(): string;
        ref(): Symbol;
        unref(): void;
    }

    class SymbolNodeClass {}

    class SymbolResolverInterface {}

    class SymbolTreeInterface {}

    class TagsBuilderInterface {}

    class TemplateBaseClass {}

    class TemplateProviderInterface {}

    class ThreadPool {
        // Owm methods of Ide-1.0.ThreadPool

        /**
         * Runs the callback on the thread pool thread.
         * @param kind the threadpool kind to use.
         * @param func A function to call in the worker thread.
         */
        static push(kind: ThreadPoolKind, func: ThreadFunc): void;
        /**
         * This pushes a task to be executed on a worker thread based on the task kind as denoted by
         * `kind`. Some tasks will be placed on special work queues or throttled based on priority.
         * @param kind The task kind.
         * @param task A #GTask to execute.
         * @param func The thread worker to execute for @task.
         */
        static push_task(kind: ThreadPoolKind, task: Gio.Task, func: Gio.TaskThreadFunc): void;
    }

    class TransferButtonClass {}

    class TransferClass {}

    class TransferManagerClass {}

    class TransferRowClass {}

    class TransfersButtonClass {}

    class TransfersProgressIconClass {}

    class UnsavedFile {
        // Owm methods of Ide-1.0.UnsavedFile

        /**
         * Gets the contents of the unsaved file.
         * @returns A #GBytes containing the unsaved file content.
         */
        get_content(): GLib.Bytes;
        /**
         * Retrieves the underlying file represented by `self`.
         * @returns A #GFile.
         */
        get_file(): Gio.File;
        get_sequence(): number;
        get_temp_path(): string;
        persist(cancellable?: Gio.Cancellable | null): boolean;
        ref(): UnsavedFile;
        unref(): void;
    }

    class UnsavedFilesClass {}

    /**
     * FIXME
     */
    class Uri {
        // Constructors of Ide-1.0.Uri

        constructor(uri_string: string, flags: UriParseFlags);

        static ['new'](uri_string: string, flags: UriParseFlags): Uri;

        static new_from_file(file: Gio.File): Uri;

        // Owm methods of Ide-1.0.Uri

        static build(
            scheme: string,
            userinfo: string,
            host: string,
            port: string,
            path: string,
            query: string,
            fragment: string,
        ): string;
        static error_quark(): GLib.Quark;
        /**
         * Utility function for parsing "network" URIs. This extracts just the
         * scheme, host, and port from `uri_string`. All three out parameters
         * are mandatory.
         * @param uri_string a string containing a network URI
         * @param flags flags for parsing @uri_string
         */
        static parse_host(uri_string: string, flags: UriParseFlags): boolean;
        /**
         * Many URI schemes include one or more attribute/value pairs
         * as part of the URI value. This method can be used to parse them
         * into a hash table.
         *
         * The `params` string is assumed to still be %<!-- -->-encoded, but
         * the returned values will be fully decoded. (Thus it is possible
         * that the returned values may contain '=' or `separator,` if the
         * value was encoded in the input.) Invalid %<!-- -->-encoding is
         * treated as with the non-%IDE_URI_PARSE_STRICT rules for ide_uri_new().
         * (However, if `params` is the path or query string from a #IdeUri that
         * was parsed with %IDE_URI_PARSE_STRICT, then you already know that it
         * does not contain any invalid encoding.)
         * @param params a string containing "attribute=value" parameters
         * @param length the length of @params, or -1 if it is NUL-terminated
         * @param separator the separator character between parameters.   (usually ';', but sometimes '&')
         * @param case_insensitive whether to match parameter names case-insensitively
         */
        static parse_params(
            params: string,
            length: number,
            separator: number,
            case_insensitive: boolean,
        ): GLib.HashTable<string, string>;
        /**
         * Parses `uri_string` more-or-less according to the generic grammar of
         * RFC 3986 ("more" if `strict` is %TRUE, "less" if %FALSE), and
         * outputs the pieces into the provided variables. This is a low-level
         * method that does not do any pre- or post-processing of `uri_string,`
         * and is "garbage in, garbage out"; it just splits `uri_string` into
         * pieces at the appropriate punctuation characters (consuming
         * delimiters as appropriate), and returns the pieces. Components that
         * are not present in `uri_string` will be set to %NULL (but note that
         * the path is always present, though it may be an empty string).
         * @param uri_string a string containing a relative or absolute URI
         * @param strict whether to parse @uri_string strictly
         */
        static split(uri_string: string, strict: boolean): void;

        // Owm methods of Ide-1.0.Uri

        /**
         * Copies `uri`
         * @returns a copy of @uri
         */
        copy(): Uri;
        /**
         * Gets `uri'`s authentication parameters. Depending on the URI scheme,
         * ide_uri_parse_params() may be useful for further parsing this
         * information.
         * @returns @uri's authentication parameters.
         */
        get_auth_params(): string;
        /**
         * Gets `uri'`s fragment, which may contain %<!-- -->-encoding,
         * depending on the flags with which `uri` was parsed.
         * @returns @uri's fragment.
         */
        get_fragment(): string;
        /**
         * Gets `uri'`s host. If `uri` contained an IPv6 address literal, this
         * value will not include the brackets that are required by the URI
         * syntax.
         * @returns @uri's host.
         */
        get_host(): string;
        /**
         * Gets `uri'`s password. If `uri` was not parsed with
         * %IDE_URI_PARSE_PASSWORD, this will always be %NULL.
         * @returns @uri's password.
         */
        get_password(): string;
        /**
         * Gets `uri'`s path, which may contain %<!-- -->-encoding, depending
         * on the flags with which `uri` was parsed.
         * @returns @uri's path.
         */
        get_path(): string;
        /**
         * Gets `uri'`s port.
         * @returns @uri's port, or %0 if it was unset
         */
        get_port(): number;
        /**
         * Gets `uri'`s query, which may contain %<!-- -->-encoding, depending
         * on the flags with which `uri` was parsed.
         *
         * For queries consisting of a series of "name=value" parameters,
         * ide_uri_parse_params() may be useful.
         * @returns @uri's query.
         */
        get_query(): string;
        /**
         * Gets `uri'`s scheme.
         * @returns @uri's scheme.
         */
        get_scheme(): string;
        /**
         * Gets `uri'`s user. If `uri` was parsed with %IDE_URI_PARSE_PASSWORD or
         * %IDE_URI_PARSE_AUTH_PARAMS, this is the string that appears before the
         * password and parameters in the userinfo. If not, then the entire
         * userinfo is considered the user.
         * @returns @uri's user.
         */
        get_user(): string;
        is_file(file: Gio.File): boolean;
        /**
         * Parses `uri_string` according to `flags` and, if it is a relative
         * URI, merges it with `base_uri`. If the result is not a valid
         * absolute URI, it will be discarded, and an error returned.
         * @param uri_string a string representing a relative or absolute URI
         * @param flags flags describing how to parse @uri_string
         * @returns a new #IdeUri.
         */
        new_relative(uri_string: string, flags: UriParseFlags): Uri;
        /**
         * Increments the reference count of `uri` by one.
         * @returns uri
         */
        ref(): Uri;
        /**
         * Sets `uri'`s authentication parameters to `auth_params`.
         * @param auth_params the authentication parameters, or %NULL
         */
        set_auth_params(auth_params: string): void;
        /**
         * Sets `uri'`s fragment to `fragment,` which is assumed to have been
         * %<!-- -->-encoded by the caller. See ide_uri_set_path() for more
         * details.
         * @param fragment the (%<!-- -->-encoded) fragment
         */
        set_fragment(fragment: string): void;
        /**
         * Sets `uri'`s host to `host`.
         *
         * If `host` is an IPv6 IP address, it should not include the brackets
         * required by the URI syntax; they will be added automatically when
         * converting `uri` to a string.
         * @param host the hostname or IP address, or %NULL
         */
        set_host(host: string): void;
        /**
         * Sets `uri'`s password to `password`.
         * @param password the password, or %NULL
         */
        set_password(password: string): void;
        /**
         * Sets `uri'`s path to `path,` which is assumed to have been
         * appropriately %<!-- -->-encoded. In particular, this means that if
         * you want to include a literal percent sign the path, you must write
         * it as "%<!-- -->25". That being said, if `path` contains an
         * unencoded '?' or '#' character, it will get encoded, since
         * otherwise converting `uri` to a string and then back to a #IdeUri
         * again would give a different result.
         * @param path the (%<!-- -->-encoded) path
         */
        set_path(path: string): void;
        /**
         * Sets `uri'`s port to `port`. If `port` is 0, it will not be output
         * when calling ide_uri_to_string().
         * @param port the port, or %0
         */
        set_port(port: number): void;
        /**
         * Sets `uri'`s query to `query,` which is assumed to have been
         * %<!-- -->-encoded by the caller. See ide_uri_set_path() for more
         * details.
         * @param query the (%<!-- -->-encoded) query
         */
        set_query(query: string): void;
        /**
         * Sets `uri'`s scheme to `scheme`.
         * @param scheme the URI scheme
         */
        set_scheme(scheme: string): void;
        /**
         * Sets `uri'`s user to `user`. See ide_uri_get_user() for a description
         * of how this interacts with various parsing flags.
         * @param user the username, or %NULL
         */
        set_user(user: string): void;
        /**
         * Creates a #GFile that represents the resource `uri`.
         * @returns A #GFile or %NULL upon failure.
         */
        to_file(): Gio.File | null;
        /**
         * Returns a string representing `uri`.
         * @param flags flags describing how to convert @uri
         * @returns a string representing @uri, which the caller must free.
         */
        to_string(flags: UriToStringFlags): string;
        /**
         * Decrements the reference count of `uri` by 1. If the reference count
         * reaches zero, the structure will be freed.
         */
        unref(): void;
    }

    class VcsConfigInterface {}

    class VcsInitializerInterface {}

    class VcsInterface {}

    class VcsUri {
        // Constructors of Ide-1.0.VcsUri

        constructor(uri: string);

        static ['new'](uri: string): VcsUri;

        // Owm methods of Ide-1.0.VcsUri

        static is_valid(uri_string: string): boolean;

        // Owm methods of Ide-1.0.VcsUri

        get_host(): string;
        get_path(): string;
        get_port(): number;
        get_scheme(): string;
        get_user(): string;
        ref(): VcsUri;
        set_host(host: string): void;
        set_path(path: string): void;
        set_port(port: number): void;
        set_scheme(scheme: string): void;
        set_user(user: string): void;
        to_string(): string;
        unref(): void;
    }

    class WorkbenchAddinInterface {}

    class WorkbenchClass {}

    class WorkbenchHeaderBarClass {}

    class WorkbenchMessageClass {}

    class WorkerInterface {}

    interface ApplicationAddin {
        // Owm methods of Ide-1.0.ApplicationAddin

        /**
         * This interface method is called when the application is started or
         * the plugin has just been activated.
         *
         * Use this to setup code in your plugin that needs to be loaded once
         * per application process.
         * @param application An #IdeApplication.
         */
        load(application: Application): void;
        /**
         * This inteface method is called when the application is shutting down
         * or the plugin has been unloaded.
         *
         * Use this function to cleanup after anything setup in ide_application_addin_load().
         * @param application An #IdeApplication.
         */
        unload(application: Application): void;

        // Own virtual methods of Ide-1.0.ApplicationAddin

        /**
         * This interface method is called when the application is started or
         * the plugin has just been activated.
         *
         * Use this to setup code in your plugin that needs to be loaded once
         * per application process.
         * @param application An #IdeApplication.
         */
        vfunc_load(application: Application): void;
        /**
         * This inteface method is called when the application is shutting down
         * or the plugin has been unloaded.
         *
         * Use this function to cleanup after anything setup in ide_application_addin_load().
         * @param application An #IdeApplication.
         */
        vfunc_unload(application: Application): void;
    }

    interface ApplicationTool {
        // Owm methods of Ide-1.0.ApplicationTool

        /**
         * Asynchronously runs an application tool. This is typically done on the
         * command line using the `ide` command.
         * @param _arguments argv for the command
         * @param cancellable A #GCancellable or %NULL
         * @param callback A callback to execute upon completion
         */
        run_async(
            _arguments: string[],
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        run_finish(result: Gio.AsyncResult): number;

        // Own virtual methods of Ide-1.0.ApplicationTool

        /**
         * Asynchronously runs an application tool. This is typically done on the
         * command line using the `ide` command.
         * @param _arguments argv for the command
         * @param cancellable A #GCancellable or %NULL
         * @param callback A callback to execute upon completion
         */
        vfunc_run_async(
            _arguments: string[],
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_run_finish(result: Gio.AsyncResult): number;
    }

    interface BuildPipelineAddin {
        // Owm methods of Ide-1.0.BuildPipelineAddin

        load(pipeline: BuildPipeline): void;
        /**
         * This function will track the stage_id that was returned from
         * ide_build_pipeline_connect() or similar functions. Doing so results in
         * the stage being automatically disconnected when the addin is unloaded.
         *
         * This means that many #IdeBuildPipelineAddin implementations do not need
         * an unload vfunc if they track all registered stages.
         *
         * You should not mix this function with manual pipeline disconnections.
         * While it should work, that is not yet guaranteed.
         * @param stage_id a stage id returned from ide_build_pipeline_connect()
         */
        track(stage_id: number): void;
        unload(pipeline: BuildPipeline): void;

        // Own virtual methods of Ide-1.0.BuildPipelineAddin

        vfunc_load(pipeline: BuildPipeline): void;
        vfunc_unload(pipeline: BuildPipeline): void;
    }

    interface BuildSystem {
        // Own properties of Ide-1.0.BuildSystem

        context: Context;
        project_file: Gio.File;
        projectFile: Gio.File;

        // Owm methods of Ide-1.0.BuildSystem

        get_build_flags_async(
            file: File,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        get_build_flags_finish(result: Gio.AsyncResult): string[];
        get_build_targets_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        get_build_targets_finish(result: Gio.AsyncResult): BuildTarget[];
        get_builddir(configuration: Configuration): string;
        get_display_name(): string;
        get_id(): string;
        get_priority(): number;

        // Own virtual methods of Ide-1.0.BuildSystem

        vfunc_get_build_flags_async(
            file: File,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_get_build_flags_finish(result: Gio.AsyncResult): string[];
        vfunc_get_build_targets_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_get_build_targets_finish(result: Gio.AsyncResult): BuildTarget[];
        vfunc_get_builddir(configuration: Configuration): string;
        vfunc_get_display_name(): string;
        vfunc_get_id(): string;
        vfunc_get_priority(): number;
    }

    interface BuildSystemDiscovery {
        // Owm methods of Ide-1.0.BuildSystemDiscovery

        /**
         * This virtual method can be used to try to discover the build system to use for
         * a particular project. This might be used in cases like Flatpak where the build
         * system can be determined from the .json manifest rather than auto-discovery
         * by locating project files.
         * @param project_file A #GFile containing the project file (a directory)
         * @param cancellable A #GCancellable or %NULL
         * @returns The hint for the build system, which should match what   the build system returns from ide_build_system_get_id().
         */
        discover(project_file: Gio.File, cancellable: Gio.Cancellable | null): string;

        // Own virtual methods of Ide-1.0.BuildSystemDiscovery

        /**
         * This virtual method can be used to try to discover the build system to use for
         * a particular project. This might be used in cases like Flatpak where the build
         * system can be determined from the .json manifest rather than auto-discovery
         * by locating project files.
         * @param project_file A #GFile containing the project file (a directory)
         * @param cancellable A #GCancellable or %NULL
         */
        vfunc_discover(project_file: Gio.File, cancellable: Gio.Cancellable | null): string;
    }

    interface BuildTarget {
        // Owm methods of Ide-1.0.BuildTarget

        get_install_directory(): Gio.File | null;
        get_name(): string | null;

        // Own virtual methods of Ide-1.0.BuildTarget

        vfunc_get_install_directory(): Gio.File | null;
        vfunc_get_name(): string | null;
    }

    interface CompletionProvider {
        // Owm methods of Ide-1.0.CompletionProvider

        load(context: Context): void;

        // Own virtual methods of Ide-1.0.CompletionProvider

        vfunc_load(context: Context): void;
    }

    interface ConfigurationProvider {
        // Owm methods of Ide-1.0.ConfigurationProvider

        load_async(
            manager: ConfigurationManager,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        load_finish(result: Gio.AsyncResult): boolean;
        save_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        save_finish(result: Gio.AsyncResult): boolean;
        unload(manager: ConfigurationManager): void;

        // Own virtual methods of Ide-1.0.ConfigurationProvider

        vfunc_load_async(
            manager: ConfigurationManager,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_load_finish(result: Gio.AsyncResult): boolean;
        vfunc_save_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_save_finish(result: Gio.AsyncResult): boolean;
        vfunc_unload(manager: ConfigurationManager): void;
    }

    interface DeviceProvider {
        // Own properties of Ide-1.0.DeviceProvider

        context: Context;
        readonly settled: boolean;

        // Owm methods of Ide-1.0.DeviceProvider

        emit_device_added(device: Device): void;
        emit_device_removed(device: Device): void;
        /**
         * Retrieves a list of devices currently managed by `provider`.
         * @returns A #GPtrArray of  #IdeDevice instances.
         */
        get_devices(): Device[];
        get_settled(): boolean;

        // Own virtual methods of Ide-1.0.DeviceProvider

        /**
         * Retrieves a list of devices currently managed by `provider`.
         */
        vfunc_get_devices(): Device[];
        vfunc_get_settled(): boolean;
    }

    interface DiagnosticProvider {
        // Owm methods of Ide-1.0.DiagnosticProvider

        diagnose_async(
            file: File,
            buffer: Buffer,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes an asynchronous call to ide_diagnostic_provider_diagnose_async().
         * @param result
         * @returns #IdeDiagnostics or %NULL and @error is set.
         */
        diagnose_finish(result: Gio.AsyncResult): Diagnostics | null;
        emit_invalidated(): void;
        load(): void;

        // Own virtual methods of Ide-1.0.DiagnosticProvider

        vfunc_diagnose_async(
            file: File,
            buffer: Buffer,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes an asynchronous call to ide_diagnostic_provider_diagnose_async().
         * @param result
         */
        vfunc_diagnose_finish(result: Gio.AsyncResult): Diagnostics | null;
        vfunc_load(): void;
    }

    interface EditorViewAddin {
        // Own virtual methods of Ide-1.0.EditorViewAddin

        vfunc_language_changed(language_id: string): void;
        vfunc_load(view: EditorView): void;
        vfunc_load_source_view(source_view: SourceView): void;
        vfunc_unload(view: EditorView): void;
        vfunc_unload_source_view(source_view: SourceView): void;
    }

    interface Formatter {
        // Owm methods of Ide-1.0.Formatter

        format_async(
            buffer: Buffer,
            options: FormatterOptions,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        format_finish(result: Gio.AsyncResult): boolean;
        format_range_async(
            buffer: Buffer,
            options: FormatterOptions,
            begin: Gtk.TextIter,
            end: Gtk.TextIter,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        format_range_finish(result: Gio.AsyncResult): boolean;
        load(): void;

        // Own virtual methods of Ide-1.0.Formatter

        vfunc_format_async(
            buffer: Buffer,
            options: FormatterOptions,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_format_finish(result: Gio.AsyncResult): boolean;
        vfunc_format_range_async(
            buffer: Buffer,
            options: FormatterOptions,
            begin: Gtk.TextIter,
            end: Gtk.TextIter,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_format_range_finish(result: Gio.AsyncResult): boolean;
        vfunc_load(): void;
    }

    interface GenesisAddin {
        // Own properties of Ide-1.0.GenesisAddin

        readonly is_ready: boolean;
        readonly isReady: boolean;

        // Owm methods of Ide-1.0.GenesisAddin

        get_icon_name(): string;
        get_label(): string;
        get_next_label(): string;
        get_priority(): number;
        get_title(): string;
        get_widget(): Gtk.Widget;
        run_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        run_finish(result: Gio.AsyncResult): boolean;

        // Own virtual methods of Ide-1.0.GenesisAddin

        vfunc_get_icon_name(): string;
        vfunc_get_label(): string;
        vfunc_get_next_label(): string;
        vfunc_get_priority(): number;
        vfunc_get_title(): string;
        vfunc_get_widget(): Gtk.Widget;
        vfunc_run_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_run_finish(result: Gio.AsyncResult): boolean;
    }

    interface Highlighter {
        // Own properties of Ide-1.0.Highlighter

        context: Context;

        // Owm methods of Ide-1.0.Highlighter

        load(): void;
        /**
         * Incrementally processes more of the buffer for highlighting.  If `callback`
         * returns %IDE_HIGHLIGHT_STOP, then this vfunc should stop processing and
         * return, having set `location` to the current position of processing.
         *
         * If processing the entire range was successful, then `location` should be set
         * to `range_end`.
         * @param callback A callback to apply a given style.
         * @param range_begin The beginning of the range to update.
         * @param range_end The end of the range to update.
         */
        update(callback: HighlightCallback, range_begin: Gtk.TextIter, range_end: Gtk.TextIter): void;

        // Own virtual methods of Ide-1.0.Highlighter

        vfunc_load(): void;
        vfunc_set_engine(engine: HighlightEngine): void;
        /**
         * Incrementally processes more of the buffer for highlighting.  If `callback`
         * returns %IDE_HIGHLIGHT_STOP, then this vfunc should stop processing and
         * return, having set `location` to the current position of processing.
         *
         * If processing the entire range was successful, then `location` should be set
         * to `range_end`.
         * @param callback A callback to apply a given style.
         * @param range_begin The beginning of the range to update.
         * @param range_end The end of the range to update.
         */
        vfunc_update(callback: HighlightCallback, range_begin: Gtk.TextIter, range_end: Gtk.TextIter): void;
    }

    interface Indenter {
        // Owm methods of Ide-1.0.Indenter

        /**
         * This function performs an indentation for the key press activated by `event`.
         * The implementation is free to move the `begin` and `end` iters to swallow
         * adjacent content. The result, a string, is the contents that will replace
         * the content inbetween `begin` and `end`.
         *
         * `cursor_offset` may be set to jump the cursor starting from `end`. Negative
         * values are allowed.
         * @param text_view A #GtkTextView
         * @param begin A #GtkTextIter for the beginning region of text to replace.
         * @param end A #GtkTextIter for the end region of text to replace.
         * @param event The #GdkEventKey that triggered the event.
         * @returns A string containing the replacement text, or %NULL.
         */
        format(text_view: Gtk.TextView, begin: Gtk.TextIter, end: Gtk.TextIter, event: Gdk.EventKey): string | null;
        /**
         * Determines if `event` should trigger an indentation request. If %TRUE is
         * returned then ide_indenter_format() will be called.
         * @param event a #GdkEventKey
         * @returns %TRUE if @event should trigger an indentation request.
         */
        is_trigger(event: Gdk.EventKey): boolean;

        // Own virtual methods of Ide-1.0.Indenter

        /**
         * This function performs an indentation for the key press activated by `event`.
         * The implementation is free to move the `begin` and `end` iters to swallow
         * adjacent content. The result, a string, is the contents that will replace
         * the content inbetween `begin` and `end`.
         *
         * `cursor_offset` may be set to jump the cursor starting from `end`. Negative
         * values are allowed.
         * @param text_view A #GtkTextView
         * @param begin A #GtkTextIter for the beginning region of text to replace.
         * @param end A #GtkTextIter for the end region of text to replace.
         * @param event The #GdkEventKey that triggered the event.
         */
        vfunc_format(
            text_view: Gtk.TextView,
            begin: Gtk.TextIter,
            end: Gtk.TextIter,
            event: Gdk.EventKey,
        ): string | null;
        /**
         * Determines if `event` should trigger an indentation request. If %TRUE is
         * returned then ide_indenter_format() will be called.
         * @param event a #GdkEventKey
         */
        vfunc_is_trigger(event: Gdk.EventKey): boolean;
    }

    interface LayoutStackAddin {
        // Owm methods of Ide-1.0.LayoutStackAddin

        /**
         * This function should be implemented by #IdeLayoutStackAddin plugins
         * in #IdeLayoutStackAddinInterface.
         *
         * This virtual method is called when the plugin should load itself.
         * A new instance of the plugin is created for every #IdeLayoutStack
         * that is created in Builder.
         * @param stack An #IdeLayoutStack
         */
        load(stack: LayoutStack): void;
        /**
         * This virtual method is called whenever the active view changes
         * in the #IdeLayoutView. Plugins may want to alter what controls
         * are displayed on the stack based on the current view.
         * @param view An #IdeLayoutView or %NULL.
         */
        set_view(view?: LayoutView | null): void;
        /**
         * This function should be implemented by #IdeLayoutStackAddin plugins
         * in #IdeLayoutStackAddinInterface.
         *
         * This virtual method is called when the plugin should unload itself.
         * It should revert anything performed via ide_layout_stack_addin_load().
         * @param stack An #IdeLayoutStack
         */
        unload(stack: LayoutStack): void;

        // Own virtual methods of Ide-1.0.LayoutStackAddin

        /**
         * This function should be implemented by #IdeLayoutStackAddin plugins
         * in #IdeLayoutStackAddinInterface.
         *
         * This virtual method is called when the plugin should load itself.
         * A new instance of the plugin is created for every #IdeLayoutStack
         * that is created in Builder.
         * @param stack An #IdeLayoutStack
         */
        vfunc_load(stack: LayoutStack): void;
        /**
         * This virtual method is called whenever the active view changes
         * in the #IdeLayoutView. Plugins may want to alter what controls
         * are displayed on the stack based on the current view.
         * @param view An #IdeLayoutView or %NULL.
         */
        vfunc_set_view(view?: LayoutView | null): void;
        /**
         * This function should be implemented by #IdeLayoutStackAddin plugins
         * in #IdeLayoutStackAddinInterface.
         *
         * This virtual method is called when the plugin should unload itself.
         * It should revert anything performed via ide_layout_stack_addin_load().
         * @param stack An #IdeLayoutStack
         */
        vfunc_unload(stack: LayoutStack): void;
    }

    interface Perspective {
        // Owm methods of Ide-1.0.Perspective

        /**
         * This interface method is called when the workbench would like to shutdown.
         * If the perspective needs to focus and ask the user a question, this is the place
         * to do so. You may run a #GtkDialog using gtk_dialog_run() or simply focus your
         * perspective and return %FALSE.
         * @returns %TRUE to allow the workbench to continue shutting down.
         */
        agree_to_shutdown(): boolean;
        /**
         * Gets the accelerator to use to jump to the perspective. The workbench will
         * register this accelerator on behalf of the perspective.
         * @returns A newly allocated string or %NULL.
         */
        get_accelerator(): string | null;
        /**
         * This interface method should retrieve a #GActionGroup associated with the
         * perspective, if necessary. The #GActionGroup will automatically be
         * registered with the "perspective" action prefix while the perspective is
         * active. A perspective is "active" when it is currently displayed in the
         * workbench.
         * @returns A #GActionGroup or %NULL.
         */
        get_actions(): Gio.ActionGroup | null;
        /**
         * This interface methods retrieves the icon name to use when displaying the
         * perspective selection sidebar.
         *
         * If you implement an "icon-name" property, the icon may change at runtime.
         * @returns A newly allcoated string that contains the icon-name   to use for the perspective.
         */
        get_icon_name(): string | null;
        /**
         * This interface method is used to identify the perspective. It should be a short
         * internal name, such as "editor" which should not be translated. Internally, the
         * default implementation of this method will return the name of the instances #GType.
         *
         * The identifier must be alpha-numeric only (a-z A-Z 0-9).
         *
         * This value should be unique per workspace.
         * @returns A string identifier for the perspective.
         */
        get_id(): string | null;
        /**
         * This interface method returns %TRUE if the interface needs attention.
         *
         * One such use of this would be to indicate that contents within a perspective have
         * changed since the user last focused the perspective. This should also be implemented
         * with a boolean property named "needs-attention". If you call g_object_notify() (or one
         * of its variants), the notifcation visual will be rendered with your icon.
         * @returns %TRUE if the perspective needs attention.
         */
        get_needs_attention(): boolean;
        get_priority(): number;
        /**
         * This interface method gets the title of the perspective. This is used for tooltips
         * in the perspective selector and potentially other UI components.
         * @returns A string which will not be modified or freed.
         */
        get_title(): string;
        /**
         * This interface method should return a #GtkWidget suitable for being embedded as the
         * titlebar for the application. If you return %NULL from this method, a suitable titlebar
         * will be created for you.
         *
         * You may use #IdeHeaderBar for a base implementation to save you the trouble of
         * creating a titlebar similar to other perspectives in Builder.
         * @returns A #GtkWidget or %NULL.
         */
        get_titlebar(): Gtk.Widget | null;
        /**
         * If %TRUE, the perspective can be used before loading a project.
         */
        is_early(): boolean;
        /**
         * This interface method is used to notify the perspective that it is going into
         * fullscreen mode. The #IdeWorkbench will notify the perspective before it is displayed.
         * @param fullscreen If fullscreen mode should be activated.
         */
        set_fullscreen(fullscreen: boolean): void;
        /**
         * This interface method is used to iterate all #IdeLayoutView's that are descendents of `self`.
         * @param callback A #GtkCallback.
         */
        views_foreach(callback: Gtk.Callback): void;

        // Own virtual methods of Ide-1.0.Perspective

        /**
         * This interface method is called when the workbench would like to shutdown.
         * If the perspective needs to focus and ask the user a question, this is the place
         * to do so. You may run a #GtkDialog using gtk_dialog_run() or simply focus your
         * perspective and return %FALSE.
         */
        vfunc_agree_to_shutdown(): boolean;
        /**
         * Gets the accelerator to use to jump to the perspective. The workbench will
         * register this accelerator on behalf of the perspective.
         */
        vfunc_get_accelerator(): string | null;
        /**
         * This interface method should retrieve a #GActionGroup associated with the
         * perspective, if necessary. The #GActionGroup will automatically be
         * registered with the "perspective" action prefix while the perspective is
         * active. A perspective is "active" when it is currently displayed in the
         * workbench.
         */
        vfunc_get_actions(): Gio.ActionGroup | null;
        /**
         * This interface methods retrieves the icon name to use when displaying the
         * perspective selection sidebar.
         *
         * If you implement an "icon-name" property, the icon may change at runtime.
         */
        vfunc_get_icon_name(): string | null;
        /**
         * This interface method is used to identify the perspective. It should be a short
         * internal name, such as "editor" which should not be translated. Internally, the
         * default implementation of this method will return the name of the instances #GType.
         *
         * The identifier must be alpha-numeric only (a-z A-Z 0-9).
         *
         * This value should be unique per workspace.
         */
        vfunc_get_id(): string | null;
        /**
         * This interface method returns %TRUE if the interface needs attention.
         *
         * One such use of this would be to indicate that contents within a perspective have
         * changed since the user last focused the perspective. This should also be implemented
         * with a boolean property named "needs-attention". If you call g_object_notify() (or one
         * of its variants), the notifcation visual will be rendered with your icon.
         */
        vfunc_get_needs_attention(): boolean;
        vfunc_get_priority(): number;
        /**
         * This interface method gets the title of the perspective. This is used for tooltips
         * in the perspective selector and potentially other UI components.
         */
        vfunc_get_title(): string;
        /**
         * This interface method should return a #GtkWidget suitable for being embedded as the
         * titlebar for the application. If you return %NULL from this method, a suitable titlebar
         * will be created for you.
         *
         * You may use #IdeHeaderBar for a base implementation to save you the trouble of
         * creating a titlebar similar to other perspectives in Builder.
         */
        vfunc_get_titlebar(): Gtk.Widget | null;
        /**
         * If %TRUE, the perspective can be used before loading a project.
         */
        vfunc_is_early(): boolean;
        /**
         * This interface method is used to notify the perspective that it is going into
         * fullscreen mode. The #IdeWorkbench will notify the perspective before it is displayed.
         * @param fullscreen If fullscreen mode should be activated.
         */
        vfunc_set_fullscreen(fullscreen: boolean): void;
        /**
         * This interface method is used to iterate all #IdeLayoutView's that are descendents of `self`.
         * @param callback A #GtkCallback.
         */
        vfunc_views_foreach(callback: Gtk.Callback): void;
    }

    interface PreferencesAddin {
        // Owm methods of Ide-1.0.PreferencesAddin

        /**
         * This interface method is called when a preferences addin is initialized. It could be
         * initialized from multiple preferences implementations, so consumers should use the
         * #DzlPreferences interface to add their preferences controls to the container.
         *
         * Such implementations might include a preferences dialog window, or a preferences
         * widget which could be rendered as a perspective.
         * @param preferences The preferences container implementation.
         */
        load(preferences: Dazzle.Preferences): void;
        /**
         * This interface method is called when the preferences addin should remove all controls
         * added to `preferences`. This could happen during desctruction of `preferences,` or when
         * the plugin is unloaded.
         * @param preferences The preferences container implementation.
         */
        unload(preferences: Dazzle.Preferences): void;

        // Own virtual methods of Ide-1.0.PreferencesAddin

        /**
         * This interface method is called when a preferences addin is initialized. It could be
         * initialized from multiple preferences implementations, so consumers should use the
         * #DzlPreferences interface to add their preferences controls to the container.
         *
         * Such implementations might include a preferences dialog window, or a preferences
         * widget which could be rendered as a perspective.
         * @param preferences The preferences container implementation.
         */
        vfunc_load(preferences: Dazzle.Preferences): void;
        /**
         * This interface method is called when the preferences addin should remove all controls
         * added to `preferences`. This could happen during desctruction of `preferences,` or when
         * the plugin is unloaded.
         * @param preferences The preferences container implementation.
         */
        vfunc_unload(preferences: Dazzle.Preferences): void;
    }

    interface ProjectMiner {
        // Owm methods of Ide-1.0.ProjectMiner

        emit_discovered(project_info: ProjectInfo): void;
        mine_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        mine_finish(result: Gio.AsyncResult): boolean;

        // Own virtual methods of Ide-1.0.ProjectMiner

        vfunc_discovered(project_info: ProjectInfo): void;
        vfunc_mine_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_mine_finish(result: Gio.AsyncResult): boolean;
    }

    interface ProjectTemplate {
        // Owm methods of Ide-1.0.ProjectTemplate

        /**
         * Asynchronously requests expansion of the template.
         *
         * This may involve creating files and directories on disk as well as
         * expanding files based on the contents of `params`.
         *
         * It is expected that this method is only called once on an #IdeProjectTemplate.
         * @param params A hashtable of template parameters.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback the callback for the asynchronous operation.
         */
        expand_async(
            params: GLib.HashTable<string, GLib.Variant>,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        expand_finish(result: Gio.AsyncResult): boolean;
        get_description(): string;
        get_icon_name(): string;
        get_id(): string;
        /**
         * Gets the list of languages that this template can support when generating
         * the project.
         * @returns A newly allocated, NULL terminated list of   supported languages.
         */
        get_languages(): string[];
        get_name(): string;
        /**
         * Get's the configuration widget for the template if there is one.
         * @returns A #GtkWidget.
         */
        get_widget(): Gtk.Widget;

        // Own virtual methods of Ide-1.0.ProjectTemplate

        /**
         * Asynchronously requests expansion of the template.
         *
         * This may involve creating files and directories on disk as well as
         * expanding files based on the contents of `params`.
         *
         * It is expected that this method is only called once on an #IdeProjectTemplate.
         * @param params A hashtable of template parameters.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback the callback for the asynchronous operation.
         */
        vfunc_expand_async(
            params: GLib.HashTable<string, GLib.Variant>,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_expand_finish(result: Gio.AsyncResult): boolean;
        vfunc_get_description(): string;
        vfunc_get_icon_name(): string;
        vfunc_get_id(): string;
        /**
         * Gets the list of languages that this template can support when generating
         * the project.
         */
        vfunc_get_languages(): string[];
        vfunc_get_name(): string;
        /**
         * Get's the configuration widget for the template if there is one.
         */
        vfunc_get_widget(): Gtk.Widget;
    }

    interface RenameProvider {
        // Own properties of Ide-1.0.RenameProvider

        buffer: Buffer;

        // Owm methods of Ide-1.0.RenameProvider

        load(): void;
        /**
         * This requests the provider to determine the edits that must be made to the
         * project to perform the renaming of a symbol found at `location`.
         *
         * Use ide_rename_provider_rename_finish() to get the results.
         * @param location An #IdeSourceLocation
         * @param new_name The replacement name for the symbol
         * @param cancellable A #GCancellable or %NULL
         * @param callback a callback to complete the request
         */
        rename_async(
            location: SourceLocation,
            new_name: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes a request to ide_rename_provider_rename_async().
         *
         * You can use the resulting #GPtrArray of #IdeProjectEdit instances to edit the project
         * to complete the symbol rename.
         * @param result A #GAsyncResult
         * @returns %TRUE if successful and @edits is set. Otherwise %FALSE and @error is set.
         */
        rename_finish(result: Gio.AsyncResult): boolean;

        // Own virtual methods of Ide-1.0.RenameProvider

        vfunc_load(): void;
        /**
         * This requests the provider to determine the edits that must be made to the
         * project to perform the renaming of a symbol found at `location`.
         *
         * Use ide_rename_provider_rename_finish() to get the results.
         * @param location An #IdeSourceLocation
         * @param new_name The replacement name for the symbol
         * @param cancellable A #GCancellable or %NULL
         * @param callback a callback to complete the request
         */
        vfunc_rename_async(
            location: SourceLocation,
            new_name: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes a request to ide_rename_provider_rename_async().
         *
         * You can use the resulting #GPtrArray of #IdeProjectEdit instances to edit the project
         * to complete the symbol rename.
         * @param result A #GAsyncResult
         */
        vfunc_rename_finish(result: Gio.AsyncResult): boolean;
    }

    interface RunnerAddin {
        // Owm methods of Ide-1.0.RunnerAddin

        load(runner: Runner): void;
        posthook_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        posthook_finish(result: Gio.AsyncResult): boolean;
        prehook_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        prehook_finish(result: Gio.AsyncResult): boolean;
        unload(runner: Runner): void;

        // Own virtual methods of Ide-1.0.RunnerAddin

        vfunc_load(runner: Runner): void;
        vfunc_posthook_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_posthook_finish(result: Gio.AsyncResult): boolean;
        vfunc_prehook_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_prehook_finish(result: Gio.AsyncResult): boolean;
        vfunc_unload(runner: Runner): void;
    }

    interface RuntimeProvider {
        // Owm methods of Ide-1.0.RuntimeProvider

        can_install(runtime_id: string): boolean;
        install_async(
            runtime_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        install_finish(result: Gio.AsyncResult): boolean;
        load(manager: RuntimeManager): void;
        unload(manager: RuntimeManager): void;

        // Own virtual methods of Ide-1.0.RuntimeProvider

        vfunc_can_install(runtime_id: string): boolean;
        vfunc_install_async(
            runtime_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_install_finish(result: Gio.AsyncResult): boolean;
        vfunc_load(manager: RuntimeManager): void;
        vfunc_unload(manager: RuntimeManager): void;
    }

    interface SearchProvider {
        // Owm methods of Ide-1.0.SearchProvider

        activate(row: Gtk.Widget, result: SearchResult): void;
        /**
         * Create a row to display the search result.
         * @param result A #IdeSearchResult.
         * @returns A #GtkWidget.
         */
        create_row(result: SearchResult): Gtk.Widget;
        get_prefix(): number;
        get_priority(): number;
        get_verb(): string;
        populate(
            context: SearchContext,
            search_terms: string,
            max_results: number,
            cancellable?: Gio.Cancellable | null,
        ): void;

        // Own virtual methods of Ide-1.0.SearchProvider

        vfunc_activate(row: Gtk.Widget, result: SearchResult): void;
        /**
         * Create a row to display the search result.
         * @param result A #IdeSearchResult.
         */
        vfunc_create_row(result: SearchResult): Gtk.Widget;
        vfunc_get_prefix(): number;
        vfunc_get_priority(): number;
        vfunc_get_verb(): string;
        vfunc_populate(
            context: SearchContext,
            search_terms: string,
            max_results: number,
            cancellable?: Gio.Cancellable | null,
        ): void;
    }

    interface Service {
        // Owm methods of Ide-1.0.Service

        get_name(): string;
        start(): void;
        stop(): void;

        // Own virtual methods of Ide-1.0.Service

        vfunc_context_loaded(): void;
        vfunc_get_name(): string;
        vfunc_start(): void;
        vfunc_stop(): void;
    }

    interface Subprocess {
        // Owm methods of Ide-1.0.Subprocess

        check_exit_status(): boolean;
        communicate(
            stdin_buf: GLib.Bytes,
            cancellable: Gio.Cancellable | null,
            stdout_buf: GLib.Bytes,
            stderr_buf: GLib.Bytes,
        ): boolean;
        /**
         * Asynchronously communicates with the the child process.
         *
         * There is no need to call ide_subprocess_wait() on the process if using
         * this asynchronous operation as it will internally wait for the child
         * to exit or be signaled.
         *
         * Ensure you've set the proper flags to ensure that you can write to stdin
         * or read from stderr/stdout as necessary.
         * @param stdin_buf A #GBytes to send to stdin or %NULL
         * @param cancellable A #GCancellable or %NULL
         * @param callback A callback to complete the request
         */
        communicate_async(
            stdin_buf?: GLib.Bytes | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes a request to ide_subprocess_communicate_async().
         * @param result A #GAsyncResult
         * @returns %TRUE if successful; otherwise %FALSE and @error is set.
         */
        communicate_finish(result: Gio.AsyncResult): boolean;
        /**
         * This process acts identical to g_subprocess_communicate_utf8().
         * @param stdin_buf input to deliver to the subprocesses stdin stream
         * @param cancellable an optional #GCancellable
         * @returns %TRUE if successful; otherwise %FALSE and @error is set.
         */
        communicate_utf8(stdin_buf: string | null, cancellable: Gio.Cancellable | null): boolean;
        communicate_utf8_async(
            stdin_buf?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        communicate_utf8_finish(result: Gio.AsyncResult): boolean;
        force_exit(): void;
        get_exit_status(): number;
        get_identifier(): string;
        get_if_exited(): boolean;
        get_if_signaled(): boolean;
        get_status(): number;
        get_stderr_pipe(): Gio.InputStream;
        get_stdin_pipe(): Gio.OutputStream;
        get_stdout_pipe(): Gio.InputStream;
        get_successful(): boolean;
        get_term_sig(): number;
        send_signal(signal_num: number): void;
        wait(cancellable?: Gio.Cancellable | null): boolean;
        wait_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        wait_check(cancellable?: Gio.Cancellable | null): boolean;
        wait_check_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        wait_check_finish(result: Gio.AsyncResult): boolean;
        wait_finish(result: Gio.AsyncResult): boolean;

        // Own virtual methods of Ide-1.0.Subprocess

        vfunc_communicate(
            stdin_buf: GLib.Bytes,
            cancellable: Gio.Cancellable | null,
            stdout_buf: GLib.Bytes,
            stderr_buf: GLib.Bytes,
        ): boolean;
        /**
         * Asynchronously communicates with the the child process.
         *
         * There is no need to call ide_subprocess_wait() on the process if using
         * this asynchronous operation as it will internally wait for the child
         * to exit or be signaled.
         *
         * Ensure you've set the proper flags to ensure that you can write to stdin
         * or read from stderr/stdout as necessary.
         * @param stdin_buf A #GBytes to send to stdin or %NULL
         * @param cancellable A #GCancellable or %NULL
         * @param callback A callback to complete the request
         */
        vfunc_communicate_async(
            stdin_buf?: GLib.Bytes | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes a request to ide_subprocess_communicate_async().
         * @param result A #GAsyncResult
         */
        vfunc_communicate_finish(result: Gio.AsyncResult): boolean;
        /**
         * This process acts identical to g_subprocess_communicate_utf8().
         * @param stdin_buf input to deliver to the subprocesses stdin stream
         * @param cancellable an optional #GCancellable
         */
        vfunc_communicate_utf8(stdin_buf: string | null, cancellable: Gio.Cancellable | null): boolean;
        vfunc_communicate_utf8_async(
            stdin_buf?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_communicate_utf8_finish(result: Gio.AsyncResult): boolean;
        vfunc_force_exit(): void;
        vfunc_get_exit_status(): number;
        vfunc_get_identifier(): string;
        vfunc_get_if_exited(): boolean;
        vfunc_get_if_signaled(): boolean;
        vfunc_get_status(): number;
        vfunc_get_stderr_pipe(): Gio.InputStream;
        vfunc_get_stdin_pipe(): Gio.OutputStream;
        vfunc_get_stdout_pipe(): Gio.InputStream;
        vfunc_get_successful(): boolean;
        vfunc_get_term_sig(): number;
        vfunc_send_signal(signal_num: number): void;
        vfunc_wait(cancellable?: Gio.Cancellable | null): boolean;
        vfunc_wait_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        vfunc_wait_finish(result: Gio.AsyncResult): boolean;
    }

    interface SymbolResolver {
        // Owm methods of Ide-1.0.SymbolResolver

        find_references_async(
            location: SourceLocation,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes an asynchronous request to ide_symbol_resolver_find_references_async().
         * @param result a #GAsyncResult
         * @returns A #GPtrArray   of #IdeSourceRange if successful; otherwise %NULL and @error is set.
         */
        find_references_finish(result: Gio.AsyncResult): SourceRange[];
        /**
         * Asynchronously fetch an up to date symbol tree for `file`.
         * @param file A #GFile
         * @param buffer A #IdeBuffer or %NULL
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a callback to execute upon completion
         */
        get_symbol_tree_async(
            file: Gio.File,
            buffer: Buffer,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes an asynchronous request to get the symbol tree for the requested file.
         * @param result
         * @returns An #IdeSymbolTree; otherwise %NULL and @error is set.
         */
        get_symbol_tree_finish(result: Gio.AsyncResult): SymbolTree | null;
        load(): void;
        /**
         * Asynchronously requests that `self` determine the symbol existing at the source location
         * denoted by `self`. `callback` should call ide_symbol_resolver_lookup_symbol_finish() to
         * retrieve the result.
         * @param location An #IdeSourceLocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A callback to execute upon completion.
         */
        lookup_symbol_async(
            location: SourceLocation,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes an asynchronous call to lookup a symbol using
         * ide_symbol_resolver_lookup_symbol_async().
         * @param result A #GAsyncResult provided to the callback.
         * @returns An #IdeSymbol if successful; otherwise %NULL.
         */
        lookup_symbol_finish(result: Gio.AsyncResult): Symbol | null;

        // Own virtual methods of Ide-1.0.SymbolResolver

        vfunc_find_references_async(
            location: SourceLocation,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes an asynchronous request to ide_symbol_resolver_find_references_async().
         * @param result a #GAsyncResult
         */
        vfunc_find_references_finish(result: Gio.AsyncResult): SourceRange[];
        /**
         * Asynchronously fetch an up to date symbol tree for `file`.
         * @param file A #GFile
         * @param buffer A #IdeBuffer or %NULL
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a callback to execute upon completion
         */
        vfunc_get_symbol_tree_async(
            file: Gio.File,
            buffer: Buffer,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes an asynchronous request to get the symbol tree for the requested file.
         * @param result
         */
        vfunc_get_symbol_tree_finish(result: Gio.AsyncResult): SymbolTree | null;
        vfunc_load(): void;
        /**
         * Asynchronously requests that `self` determine the symbol existing at the source location
         * denoted by `self`. `callback` should call ide_symbol_resolver_lookup_symbol_finish() to
         * retrieve the result.
         * @param location An #IdeSourceLocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A callback to execute upon completion.
         */
        vfunc_lookup_symbol_async(
            location: SourceLocation,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Completes an asynchronous call to lookup a symbol using
         * ide_symbol_resolver_lookup_symbol_async().
         * @param result A #GAsyncResult provided to the callback.
         */
        vfunc_lookup_symbol_finish(result: Gio.AsyncResult): Symbol | null;
    }

    interface SymbolTree {
        // Owm methods of Ide-1.0.SymbolTree

        /**
         * Get the number of children of `node`. If `node` is NULL, the root node
         * is assumed.
         * @param node An #IdeSymbolNode or %NULL.
         * @returns An unsigned integer containing the number of children.
         */
        get_n_children(node?: SymbolNode | null): number;
        /**
         * Gets the `nth` child node of `node`.
         * @param node an #IdeSymboNode
         * @param nth the nth child to retrieve.
         * @returns A #IdeSymbolNode or %NULL.
         */
        get_nth_child(node: SymbolNode | null, nth: number): SymbolNode | null;

        // Own virtual methods of Ide-1.0.SymbolTree

        /**
         * Get the number of children of `node`. If `node` is NULL, the root node
         * is assumed.
         * @param node An #IdeSymbolNode or %NULL.
         */
        vfunc_get_n_children(node?: SymbolNode | null): number;
        /**
         * Gets the `nth` child node of `node`.
         * @param node an #IdeSymboNode
         * @param nth the nth child to retrieve.
         */
        vfunc_get_nth_child(node: SymbolNode | null, nth: number): SymbolNode | null;
    }

    interface TagsBuilder {
        // Owm methods of Ide-1.0.TagsBuilder

        build_async(
            directory_or_file: Gio.File,
            recursive: boolean,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        build_finish(result: Gio.AsyncResult): boolean;

        // Own virtual methods of Ide-1.0.TagsBuilder

        vfunc_build_async(
            directory_or_file: Gio.File,
            recursive: boolean,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_build_finish(result: Gio.AsyncResult): boolean;
    }

    interface TemplateProvider {
        // Owm methods of Ide-1.0.TemplateProvider

        /**
         * Gets a list of templates for this provider.
         *
         * Plugins should implement this interface to feed #IdeProjectTemplate's into
         * the project creation workflow.
         * @returns A #GList of   #IdeProjectTemplate instances.
         */
        get_project_templates(): ProjectTemplate[];

        // Own virtual methods of Ide-1.0.TemplateProvider

        /**
         * Gets a list of templates for this provider.
         *
         * Plugins should implement this interface to feed #IdeProjectTemplate's into
         * the project creation workflow.
         */
        vfunc_get_project_templates(): ProjectTemplate[];
    }

    interface Vcs {
        // Own properties of Ide-1.0.Vcs

        readonly branch_name: string;
        readonly branchName: string;
        context: Context;
        readonly working_directory: Gio.File;
        readonly workingDirectory: Gio.File;

        // Owm methods of Ide-1.0.Vcs

        emit_changed(): void;
        /**
         * Retrieves the name of the branch in the current working directory.
         * @returns A string containing the branch name.
         */
        get_branch_name(): string;
        /**
         * Gets an #IdeBufferChangeMonitor for the buffer provided. If the #IdeVcs implementation does not
         * support change monitoring, or cannot for the current file, then %NULL is returned.
         * @param buffer
         * @returns An #IdeBufferChangeMonitor or %NULL.
         */
        get_buffer_change_monitor(buffer: Buffer): BufferChangeMonitor | null;
        /**
         * Retrieves an #IdeVcsConfig for the #IdeVcs provided. If the #IdeVcs implementation does not
         * support access to configuration, then %NULL is returned.
         * @returns An #IdeVcsConfig or %NULL.
         */
        get_config(): VcsConfig | null;
        get_priority(): number;
        /**
         * Retrieves the working directory for the context. This is the root of where
         * the project files exist.
         * @returns A #GFile.
         */
        get_working_directory(): Gio.File;
        is_ignored(file: Gio.File): boolean;

        // Own virtual methods of Ide-1.0.Vcs

        vfunc_changed(): void;
        /**
         * Retrieves the name of the branch in the current working directory.
         */
        vfunc_get_branch_name(): string;
        /**
         * Gets an #IdeBufferChangeMonitor for the buffer provided. If the #IdeVcs implementation does not
         * support change monitoring, or cannot for the current file, then %NULL is returned.
         * @param buffer
         */
        vfunc_get_buffer_change_monitor(buffer: Buffer): BufferChangeMonitor | null;
        /**
         * Retrieves an #IdeVcsConfig for the #IdeVcs provided. If the #IdeVcs implementation does not
         * support access to configuration, then %NULL is returned.
         */
        vfunc_get_config(): VcsConfig | null;
        vfunc_get_priority(): number;
        /**
         * Retrieves the working directory for the context. This is the root of where
         * the project files exist.
         */
        vfunc_get_working_directory(): Gio.File;
        vfunc_is_ignored(file: Gio.File): boolean;
    }

    interface VcsConfig {
        // Owm methods of Ide-1.0.VcsConfig

        get_config(type: VcsConfigType, value: GObject.Value): void;
        set_config(type: VcsConfigType, value: GObject.Value): void;

        // Own virtual methods of Ide-1.0.VcsConfig

        vfunc_get_config(type: VcsConfigType, value: GObject.Value): void;
        vfunc_set_config(type: VcsConfigType, value: GObject.Value): void;
    }

    interface VcsInitializer {
        // Owm methods of Ide-1.0.VcsInitializer

        get_title(): string;
        initialize_async(
            file: Gio.File,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        initialize_finish(result: Gio.AsyncResult): boolean;

        // Own virtual methods of Ide-1.0.VcsInitializer

        vfunc_get_title(): string;
        vfunc_initialize_async(
            file: Gio.File,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_initialize_finish(result: Gio.AsyncResult): boolean;
    }

    interface WorkbenchAddin {
        // Owm methods of Ide-1.0.WorkbenchAddin

        /**
         * This interface method indicates if the workbench addin can load the content
         * found at `uri`. If so, `priority` should be set to an integer priority
         * indicating how important it is for this addin to load `uri`.
         *
         * The lowest integer value wins. However, a load fails, the next addin which
         * returned %TRUE from this method will be consulted.
         * @param uri An #IdeUri.
         * @param content_type A content-type or %NULL.
         * @returns %TRUE if @self and open @uri.
         */
        can_open(uri: Uri, content_type: string | null): boolean;
        /**
         * Gets the identifier for this workbench addin. By default this is the
         * name of the classes GType (such as "MyObject").
         *
         * This can be used as the hint to various open operations in IdeWorkbench
         * to prefer a given loader.
         * @returns a newly allocated string.
         */
        get_id(): string;
        /**
         * This interface method is called to load `self`. Addin implementations should add any
         * required UI or actions to `workbench` here. You should remove anything you've added
         * in ide_workbench_addin_unload(), as that will be called when your plugin is deactivated
         * or the workbench is in the destruction process.
         * @param workbench An #IdeWorkbench
         */
        load(workbench: Workbench): void;
        open_async(
            uri: Uri,
            content_type: string,
            flags: WorkbenchOpenFlags,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        open_finish(result: Gio.AsyncResult): boolean;
        /**
         * This function is called when the workbench changes the perspective.
         *
         * Addins that wish to add buttons to the header bar may want to show or
         * hide the widgets in this vfunc.
         * @param perspective An #IdePerspective
         */
        perspective_set(perspective: Perspective): void;
        /**
         * This interface method should cleanup after anything added to `workbench` in
         * ide_workbench_addin_load().
         *
         * This might be called when a plugin is deactivated, or the workbench is in the
         * destruction process.
         * @param workbench An #IdeWorkbench
         */
        unload(workbench: Workbench): void;

        // Own virtual methods of Ide-1.0.WorkbenchAddin

        /**
         * This interface method indicates if the workbench addin can load the content
         * found at `uri`. If so, `priority` should be set to an integer priority
         * indicating how important it is for this addin to load `uri`.
         *
         * The lowest integer value wins. However, a load fails, the next addin which
         * returned %TRUE from this method will be consulted.
         * @param uri An #IdeUri.
         * @param content_type A content-type or %NULL.
         */
        vfunc_can_open(uri: Uri, content_type: string | null): boolean;
        /**
         * Gets the identifier for this workbench addin. By default this is the
         * name of the classes GType (such as "MyObject").
         *
         * This can be used as the hint to various open operations in IdeWorkbench
         * to prefer a given loader.
         */
        vfunc_get_id(): string;
        /**
         * This interface method is called to load `self`. Addin implementations should add any
         * required UI or actions to `workbench` here. You should remove anything you've added
         * in ide_workbench_addin_unload(), as that will be called when your plugin is deactivated
         * or the workbench is in the destruction process.
         * @param workbench An #IdeWorkbench
         */
        vfunc_load(workbench: Workbench): void;
        vfunc_open_async(
            uri: Uri,
            content_type: string,
            flags: WorkbenchOpenFlags,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        vfunc_open_finish(result: Gio.AsyncResult): boolean;
        /**
         * This function is called when the workbench changes the perspective.
         *
         * Addins that wish to add buttons to the header bar may want to show or
         * hide the widgets in this vfunc.
         * @param perspective An #IdePerspective
         */
        vfunc_perspective_set(perspective: Perspective): void;
        /**
         * This interface method should cleanup after anything added to `workbench` in
         * ide_workbench_addin_load().
         *
         * This might be called when a plugin is deactivated, or the workbench is in the
         * destruction process.
         * @param workbench An #IdeWorkbench
         */
        vfunc_unload(workbench: Workbench): void;
    }

    interface Worker {
        // Owm methods of Ide-1.0.Worker

        /**
         * Creates a new proxy to be connected to the subprocess peer on the other
         * end of `connection`.
         * @param connection A #GDBusConnection connected to the worker process.
         * @returns A #GDBusProxy or %NULL.
         */
        create_proxy(connection: Gio.DBusConnection): Gio.DBusProxy;
        register_service(connection: Gio.DBusConnection): void;

        // Own virtual methods of Ide-1.0.Worker

        /**
         * Creates a new proxy to be connected to the subprocess peer on the other
         * end of `connection`.
         * @param connection A #GDBusConnection connected to the worker process.
         */
        vfunc_create_proxy(connection: Gio.DBusConnection): Gio.DBusProxy;
        vfunc_register_service(connection: Gio.DBusConnection): void;
    }

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

export default Ide;
// END
