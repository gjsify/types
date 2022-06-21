// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Vte-2.91
 */

import type * as Gjs from './Gjs';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gtk from './Gtk-3.0';
import type xlib from './xlib-2.0';
import type Gdk from './Gdk-3.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';

export namespace Vte {

/**
 * An enumeration type that can be used to specify how the terminal
 * uses extra allocated space.
 */
enum Align {
    /**
     * align to left/top
     */
    START,
    /**
     * align to centre
     */
    CENTER,
    /**
     * align to right/bottom
     */
    END,
}
/**
 * An enumerated type which can be used to indicate the cursor blink mode
 * for the terminal.
 */
enum CursorBlinkMode {
    /**
     * Follow GTK+ settings for cursor blinking.
     */
    SYSTEM,
    /**
     * Cursor blinks.
     */
    ON,
    /**
     * Cursor does not blink.
     */
    OFF,
}
/**
 * An enumerated type which can be used to indicate what should the terminal
 * draw at the cursor position.
 */
enum CursorShape {
    /**
     * Draw a block cursor.  This is the default.
     */
    BLOCK,
    /**
     * Draw a vertical bar on the left side of character.
     * This is similar to the default cursor for other GTK+ widgets.
     */
    IBEAM,
    /**
     * Draw a horizontal bar below the character.
     */
    UNDERLINE,
}
/**
 * An enumerated type which can be used to indicate which string the terminal
 * should send to an application when the user presses the Delete or Backspace
 * keys.
 */
enum EraseBinding {
    /**
     * For backspace, attempt to determine the right value from the terminal's IO settings.  For delete, use the control sequence.
     */
    AUTO,
    /**
     * Send an ASCII backspace character (0x08).
     */
    ASCII_BACKSPACE,
    /**
     * Send an ASCII delete character (0x7F).
     */
    ASCII_DELETE,
    /**
     * Send the "`@`7" control sequence.
     */
    DELETE_SEQUENCE,
    /**
     * Send terminal's "erase" setting.
     */
    TTY,
}
/**
 * An enumeration type that can be used to specify the format the selection
 * should be copied to the clipboard in.
 */
enum Format {
    /**
     * Export as plain text
     */
    TEXT,
    /**
     * Export as HTML formatted text
     */
    HTML,
}
enum PtyError {
    /**
     * Obsolete. Deprecated: 0.42
     */
    PTY_HELPER_FAILED,
    /**
     * failure when using PTY98 to allocate the PTY
     */
    PTY98_FAILED,
}
/**
 * An enum type for regex errors. In addition to the values listed above,
 * any PCRE2 error values may occur.
 */
enum RegexError {
    /**
     * The PCRE2 library was built without
     *   Unicode support which is required for VTE
     */
    INCOMPATIBLE,
    /**
     * Regexes are not supported because VTE was
     *   built without PCRE2 support
     */
    NOT_SUPPORTED,
}
/**
 * An enumerated type which can be used to indicate whether the terminal allows
 * the text contents to be blinked.
 */
enum TextBlinkMode {
    /**
     * Do not blink the text.
     */
    NEVER,
    /**
     * Allow blinking text only if the terminal is focused.
     */
    FOCUSED,
    /**
     * Allow blinking text only if the terminal is unfocused.
     */
    UNFOCUSED,
    /**
     * Allow blinking text. This is the default.
     */
    ALWAYS,
}
/**
 * A flag type to determine how terminal contents should be written
 * to an output stream.
 */
enum WriteFlags {
    /**
     * Write contents as UTF-8 text.  This is the default.
     */
    DEFAULT,
}
/**
 * An enumeration type for features.
 * @bitfield 
 */
enum FeatureFlags {
    /**
     * whether VTE was built with bidirectional text support
     */
    FLAG_BIDI,
    /**
     * whether VTE was built with ICU support
     */
    FLAG_ICU,
    /**
     * whether VTE was built with systemd support
     */
    FLAG_SYSTEMD,
    /**
     * whether VTE was built with SIXEL support
     */
    FLAG_SIXEL,
    /**
     * mask of all feature flags
     */
    FLAGS_MASK,
}
enum PtyFlags {
    /**
     * Unused. Deprecated: 0.38
     */
    NO_LASTLOG,
    /**
     * Unused. Deprecated: 0.38
     */
    NO_UTMP,
    /**
     * Unused. Deprecated: 0.38
     */
    NO_WTMP,
    /**
     * Unused. Deprecated: 0.38
     */
    NO_HELPER,
    /**
     * Unused. Deprecated: 0.38
     */
    NO_FALLBACK,
    /**
     * Do not start a new session for the child in
     *   vte_pty_child_setup(). See man:setsid(2) for more information. Since: 0.58
     */
    NO_SESSION,
    /**
     * Do not set the PTY as the controlling TTY for the child
     *   in vte_pty_child_setup(). See man:tty_ioctl(4) for more information. Since: 0.58
     */
    NO_CTTY,
    /**
     * the default flags
     */
    DEFAULT,
}
/**
 * The major version number of the VTE library
 * (e.g. in version 3.1.4 this is 3).
 */
const MAJOR_VERSION: number
/**
 * The micro version number of the VTE library
 * (e.g. in version 3.1.4 this is 4).
 */
const MICRO_VERSION: number
/**
 * The minor version number of the VTE library
 * (e.g. in version 3.1.4 this is 1).
 */
const MINOR_VERSION: number
const REGEX_FLAGS_DEFAULT: number
/**
 * Use this as a spawn flag (together with flags from #GSpawnFlags) in
 * vte_pty_spawn_async().
 * 
 * Normally, the spawned process inherits the environment from the parent
 * process; when this flag is used, only the environment variables passed
 * to vte_pty_spawn_async() etc. are passed to the child process.
 */
const SPAWN_NO_PARENT_ENVV: number
/**
 * Use this as a spawn flag (together with flags from #GSpawnFlags) in
 * vte_pty_spawn_async().
 * 
 * Prevents vte_pty_spawn_async() etc. from moving the newly created child
 * process to a systemd user scope.
 */
const SPAWN_NO_SYSTEMD_SCOPE: number
/**
 * Use this as a spawn flag (together with flags from #GSpawnFlags) in
 * vte_pty_spawn_async().
 * 
 * Requires vte_pty_spawn_async() etc. to move the newly created child
 * process to a systemd user scope; if that fails, the whole spawn fails.
 * 
 * This is supported on Linux only.
 */
const SPAWN_REQUIRE_SYSTEMD_SCOPE: number
const TEST_FLAGS_ALL: number
const TEST_FLAGS_NONE: number
/**
 * Queries whether the legacy encoding `encoding` is supported.
 * 
 * If ICU support is not available, this function always returns %FALSE.
 * 
 * Note that UTF-8 is always supported; you can select it by
 * passing %NULL to vte_terminal_set_encoding().
 * @param encoding the name of the legacy encoding
 */
function get_encoding_supported(encoding: string): boolean
/**
 * Gets the list of supported legacy encodings.
 * 
 * If ICU support is not available, this returns an empty vector.
 * Note that UTF-8 is always supported; you can select it by
 * passing %NULL to vte_terminal_set_encoding().
 * @param include_aliases whether to include alias names
 */
function get_encodings(include_aliases: boolean): string[]
/**
 * Gets features VTE was compiled with.
 */
function get_feature_flags(): FeatureFlags
/**
 * Gets a list of features vte was compiled with.
 */
function get_features(): string
/**
 * Returns the major version of the VTE library at runtime.
 * Contrast this with %VTE_MAJOR_VERSION which represents
 * the version of the VTE library that the code was compiled
 * with.
 */
function get_major_version(): number
/**
 * Returns the micro version of the VTE library at runtime.
 * Contrast this with %VTE_MICRO_VERSION which represents
 * the version of the VTE library that the code was compiled
 * with.
 */
function get_micro_version(): number
/**
 * Returns the minor version of the VTE library at runtime.
 * Contrast this with %VTE_MINOR_VERSION which represents
 * the version of the VTE library that the code was compiled
 * with.
 */
function get_minor_version(): number
/**
 * Gets the user's shell, or %NULL. In the latter case, the
 * system default (usually "/bin/sh") should be used.
 */
function get_user_shell(): string
/**
 * Error domain for VTE PTY errors. Errors in this domain will be from the #VtePtyError
 * enumeration. See #GError for more information on error domains.
 */
function pty_error_quark(): GLib.Quark
function regex_error_quark(): GLib.Quark
/**
 * Specifies the type of a selection function used to check whether
 * a cell has to be selected or not.
 * @callback 
 * @param terminal terminal in which the cell is.
 * @param column column in which the cell is.
 * @param row row in which the cell is.
 */
interface SelectionFunc {
    (terminal: Terminal, column: number, row: number): boolean
}
/**
 * Callback for vte_terminal_spawn_async().
 * 
 * On success, `pid` contains the PID of the spawned process, and `error`
 * is %NULL.
 * On failure, `pid` is -1 and `error` contains the error information.
 * @callback 
 * @param terminal the #VteTerminal
 * @param pid a #GPid
 * @param error a #GError, or %NULL
 */
interface TerminalSpawnAsyncCallback {
    (terminal: Terminal, pid: GLib.Pid, error: GLib.Error): void
}
interface Pty_ConstructProps extends Gio.Initable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Vte-2.91.Vte.Pty

    /**
     * The file descriptor of the PTY master.
     */
    fd?: number | null
    /**
     * Flags.
     */
    flags?: PtyFlags | null
}

interface Pty extends Gio.Initable {

    // Own properties of Vte-2.91.Vte.Pty

    /**
     * The file descriptor of the PTY master.
     */
    readonly fd: number
    /**
     * Flags.
     */
    readonly flags: PtyFlags

    // Owm methods of Vte-2.91.Vte.Pty

    child_setup(): void
    /**
     * Since 0.42 this is a no-op.
     */
    close(): void
    get_fd(): number
    /**
     * Reads the pseudo terminal's window size.
     * 
     * If getting the window size failed, `error` will be set to a #GIOError.
     */
    get_size(): [ /* returnType */ boolean, /* rows */ number, /* columns */ number ]
    /**
     * Attempts to resize the pseudo terminal's window size.  If successful, the
     * OS kernel will send <literal>SIGWINCH</literal> to the child process group.
     * 
     * If setting the window size failed, `error` will be set to a #GIOError.
     * @param rows the desired number of rows
     * @param columns the desired number of columns
     */
    set_size(rows: number, columns: number): boolean
    /**
     * Tells the kernel whether the terminal is UTF-8 or not, in case it can make
     * use of the info.  Linux 2.6.5 or so defines IUTF8 to make the line
     * discipline do multibyte backspace correctly.
     * @param utf8 whether or not the pty is in UTF-8 mode
     */
    set_utf8(utf8: boolean): boolean
    /**
     * Like vte_pty_spawn_with_fds_async(), except that this function does not
     * allow passing file descriptors to the child process. See vte_pty_spawn_with_fds_async()
     * for more information.
     * @param working_directory the name of a directory the command should start   in, or %NULL to use the current working directory
     * @param argv child's argument vector
     * @param envv a list of environment   variables to be added to the environment before starting the process, or %NULL
     * @param spawn_flags flags from #GSpawnFlags
     * @param timeout a timeout value in ms, -1 for the default timeout, or G_MAXINT to wait indefinitely
     * @param cancellable a #GCancellable, or %NULL
     */
    spawn_async(working_directory: string | null, argv: string[], envv: string[] | null, spawn_flags: GLib.SpawnFlags, timeout: number, cancellable: Gio.Cancellable | null): void
    spawn_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* child_pid */ GLib.Pid ]
    /**
     * Starts the specified command under the pseudo-terminal `pty`.
     * The `argv` and `envv` lists should be %NULL-terminated.
     * The "TERM" environment variable is automatically set to a default value,
     * but can be overridden from `envv`.
     * `pty_flags` controls logging the session to the specified system log files.
     * 
     * Note also that %G_SPAWN_STDOUT_TO_DEV_NULL, %G_SPAWN_STDERR_TO_DEV_NULL,
     * and %G_SPAWN_CHILD_INHERITS_STDIN are not supported in `spawn_flags,` since
     * stdin, stdout and stderr of the child process will always be connected to
     * the PTY. Also %G_SPAWN_LEAVE_DESCRIPTORS_OPEN is not supported; and
     * %G_SPAWN_DO_NOT_REAP_CHILD will always be added to `spawn_flags`.
     * 
     * If `fds` is not %NULL, the child process will map the file descriptors from
     * `fds` according to `map_fds;` `n_map_fds` must be less or equal to `n_fds`.
     * This function will take ownership of the file descriptors in `fds;`
     * you must not use or close them after this call. All file descriptors in `fds`
     * must have the FD_CLOEXEC flag set on them; it will be unset in the child process
     * before calling man:execve(2). Note also that no file descriptor may be mapped
     * to stdin, stdout, or stderr (file descriptors 0, 1, or 2), since these will be
     * assigned to the PTY. All open file descriptors apart from those mapped as above
     * will be closed when execve() is called.
     * 
     * Beginning with 0.60, and on linux only, and unless %VTE_SPAWN_NO_SYSTEMD_SCOPE is
     * passed in `spawn_flags,` the newly created child process will be moved to its own
     * systemd user scope; and if %VTE_SPAWN_REQUIRE_SYSTEMD_SCOPE is passed, and creation
     * of the systemd user scope fails, the whole spawn will fail.
     * You can override the options used for the systemd user scope by
     * providing a systemd override file for 'vte-spawn-.scope' unit. See man:systemd.unit(5)
     * for further information.
     * 
     * See vte_pty_new(), and vte_terminal_watch_child() for more information.
     * @param working_directory the name of a directory the command should start   in, or %NULL to use the current working directory
     * @param argv child's argument vector
     * @param envv a list of environment   variables to be added to the environment before starting the process, or %NULL
     * @param fds an array of file descriptors, or %NULL
     * @param map_fds an array of integers, or %NULL
     * @param spawn_flags flags from #GSpawnFlags
     * @param timeout a timeout value in ms, -1 for the default timeout, or G_MAXINT to wait indefinitely
     * @param cancellable a #GCancellable, or %NULL
     */
    spawn_with_fds_async(working_directory: string | null, argv: string[], envv: string[] | null, fds: number[] | null, map_fds: number[] | null, spawn_flags: GLib.SpawnFlags, timeout: number, cancellable: Gio.Cancellable | null): void

    // Class property signals of Vte-2.91.Vte.Pty

    connect(sigName: "notify::fd", callback: (($obj: Pty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fd", callback: (($obj: Pty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fd", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (($obj: Pty, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Pty, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Pty extends GObject.Object {

    // Own properties of Vte-2.91.Vte.Pty

    static name: string
    static $gtype: GObject.GType<Pty>

    // Constructors of Vte-2.91.Vte.Pty

    constructor(config?: Pty_ConstructProps) 
    /**
     * Creates a new #VtePty for the PTY master `fd`.
     * 
     * No entry will be made in the lastlog, utmp or wtmp system files.
     * 
     * Note that the newly created #VtePty will take ownership of `fd`
     * and close it on finalize.
     * @constructor 
     * @param fd a file descriptor to the PTY
     * @param cancellable a #GCancellable, or %NULL
     */
    static new_foreign_sync(fd: number, cancellable: Gio.Cancellable | null): Pty
    /**
     * Allocates a new pseudo-terminal.
     * 
     * You can later use fork() or the g_spawn_async() family of functions
     * to start a process on the PTY.
     * 
     * If using fork(), you MUST call vte_pty_child_setup() in the child.
     * 
     * If using g_spawn_async() and friends, you MUST either use
     * vte_pty_child_setup() directly as the child setup function, or call
     * vte_pty_child_setup() from your own child setup function supplied.
     * 
     * When using vte_terminal_spawn_sync() with a custom child setup
     * function, vte_pty_child_setup() will be called before the supplied
     * function; you must not call it again.
     * 
     * Also, you MUST pass the %G_SPAWN_DO_NOT_REAP_CHILD flag.
     * 
     * Note also that %G_SPAWN_STDOUT_TO_DEV_NULL, %G_SPAWN_STDERR_TO_DEV_NULL,
     * and %G_SPAWN_CHILD_INHERITS_STDIN are not supported, since stdin, stdout
     * and stderr of the child process will always be connected to the PTY.
     * 
     * Note that you should set the PTY's size using vte_pty_set_size() before
     * spawning the child process, so that the child process has the correct
     * size from the start instead of starting with a default size and then
     * shortly afterwards receiving a <literal>SIGWINCH</literal> signal. You
     * should prefer using vte_terminal_pty_new_sync() which does this
     * automatically.
     * @constructor 
     * @param flags flags from #VtePtyFlags
     * @param cancellable a #GCancellable, or %NULL
     */
    static new_sync(flags: PtyFlags, cancellable: Gio.Cancellable | null): Pty
    _init(config?: Pty_ConstructProps): void
}

interface Terminal_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Scrollable_ConstructProps, Gtk.Widget_ConstructProps {

    // Own constructor properties of Vte-2.91.Vte.Terminal

    /**
     * Controls whether or not the terminal will attempt to draw bold text,
     * by using a bold font variant.
     */
    allow_bold?: boolean | null
    /**
     * Controls whether or not hyperlinks (OSC 8 escape sequence) are recognized and displayed.
     */
    allow_hyperlink?: boolean | null
    /**
     * Controls whether or not the terminal will beep when the child outputs the
     * "bl" sequence.
     */
    audible_bell?: boolean | null
    /**
     * Controls what string or control sequence the terminal sends to its child
     * when the user presses the backspace key.
     */
    backspace_binding?: EraseBinding | null
    /**
     * Whether the SGR 1 attribute also switches to the bright counterpart
     * of the first 8 palette colors, in addition to making them bold (legacy behavior)
     * or if SGR 1 only enables bold and leaves the color intact.
     */
    bold_is_bright?: boolean | null
    /**
     * Scale factor for the cell height, to increase line spacing. (The font's height is not affected.)
     */
    cell_height_scale?: number | null
    /**
     * Scale factor for the cell width, to increase letter spacing. (The font's width is not affected.)
     */
    cell_width_scale?: number | null
    /**
     * This setting controls whether ambiguous-width characters are narrow or wide.
     * (Note that when using a non-UTF-8 encoding set via vte_terminal_set_encoding(),
     * the width of ambiguous-width characters is fixed and determined by the encoding
     * itself.)
     * 
     * This setting only takes effect the next time the terminal is reset, either
     * via escape sequence or with vte_terminal_reset().
     */
    cjk_ambiguous_width?: number | null
    /**
     * Sets whether or not the cursor will blink. Using %VTE_CURSOR_BLINK_SYSTEM
     * will use the #GtkSettings:gtk-cursor-blink setting.
     */
    cursor_blink_mode?: CursorBlinkMode | null
    /**
     * Controls the shape of the cursor.
     */
    cursor_shape?: CursorShape | null
    /**
     * Controls what string or control sequence the terminal sends to its child
     * when the user presses the delete key.
     */
    delete_binding?: EraseBinding | null
    /**
     * Controls whether or not the terminal will perform bidirectional text rendering.
     */
    enable_bidi?: boolean | null
    enable_fallback_scrolling?: boolean | null
    /**
     * Controls whether or not the terminal will shape Arabic text.
     */
    enable_shaping?: boolean | null
    /**
     * Controls whether SIXEL image support is enabled.
     */
    enable_sixel?: boolean | null
    /**
     * Controls the encoding the terminal will expect data from the child to
     * be encoded with.  For certain terminal types, applications executing in the
     * terminal can change the encoding.  The default is defined by the
     * application's locale settings.
     */
    encoding?: string | null
    /**
     * Specifies the font used for rendering all text displayed by the terminal,
     * overriding any fonts set using gtk_widget_modify_font().  The terminal
     * will immediately attempt to load the desired font, retrieve its
     * metrics, and attempt to resize itself to keep the same number of rows
     * and columns.
     */
    font_desc?: Pango.FontDescription | null
    /**
     * The terminal's font scale.
     */
    font_scale?: number | null
    /**
     * Controls whether the terminal allows user input. When user input is disabled,
     * key press and mouse button press and motion events are not sent to the
     * terminal's child.
     */
    input_enabled?: boolean | null
    /**
     * Controls the value of the terminal's mouse autohide setting.  When autohiding
     * is enabled, the mouse cursor will be hidden when the user presses a key and
     * shown when the user moves the mouse.
     */
    pointer_autohide?: boolean | null
    /**
     * The PTY object for the terminal.
     */
    pty?: Pty | null
    /**
     * Controls whether or not the terminal will rewrap its contents, including
     * the scrollback buffer, whenever the terminal's width changes.
     */
    rewrap_on_resize?: boolean | null
    /**
     * Controls whether or not the terminal will forcibly scroll to the bottom of
     * the viewable history when the user presses a key.  Modifier keys do not
     * trigger this behavior.
     */
    scroll_on_keystroke?: boolean | null
    /**
     * Controls whether or not the terminal will forcibly scroll to the bottom of
     * the viewable history when the new data is received from the child.
     */
    scroll_on_output?: boolean | null
    /**
     * Controls whether the terminal's GtkAdjustment values unit is lines
     * or pixels. This can be enabled when the terminal is the child of a
     * GtkScrolledWindow to fix some bugs with its kinetic scrolling.
     */
    scroll_unit_is_pixels?: boolean | null
    /**
     * The length of the scrollback buffer used by the terminal.  The size of
     * the scrollback buffer will be set to the larger of this value and the number
     * of visible rows the widget can display, so 0 can safely be used to disable
     * scrollback.  Note that this setting only affects the normal screen buffer.
     * For terminal types which have an alternate screen buffer, no scrollback is
     * allowed on the alternate screen buffer.
     */
    scrollback_lines?: number | null
    /**
     * Controls whether or not the terminal will allow blinking text.
     */
    text_blink_mode?: TextBlinkMode | null
    /**
     * The horizontal alignment of `terminal` within its allocation.
     */
    xalign?: Align | null
    /**
     * The horizontal fillment of `terminal` within its allocation.
     */
    xfill?: boolean | null
    /**
     * The vertical alignment of `terminal` within its allocation
     */
    yalign?: Align | null
    /**
     * The vertical fillment of `terminal` within its allocation
     */
    yfill?: boolean | null
}

/**
 * Signal callback interface for `bell`
 */
interface Terminal_BellSignalCallback {
    ($obj: Terminal): void
}

/**
 * Signal callback interface for `char-size-changed`
 */
interface Terminal_CharSizeChangedSignalCallback {
    ($obj: Terminal, width: number, height: number): void
}

/**
 * Signal callback interface for `child-exited`
 */
interface Terminal_ChildExitedSignalCallback {
    ($obj: Terminal, status: number): void
}

/**
 * Signal callback interface for `commit`
 */
interface Terminal_CommitSignalCallback {
    ($obj: Terminal, text: string, size: number): void
}

/**
 * Signal callback interface for `contents-changed`
 */
interface Terminal_ContentsChangedSignalCallback {
    ($obj: Terminal): void
}

/**
 * Signal callback interface for `copy-clipboard`
 */
interface Terminal_CopyClipboardSignalCallback {
    ($obj: Terminal): void
}

/**
 * Signal callback interface for `current-directory-uri-changed`
 */
interface Terminal_CurrentDirectoryUriChangedSignalCallback {
    ($obj: Terminal): void
}

/**
 * Signal callback interface for `current-file-uri-changed`
 */
interface Terminal_CurrentFileUriChangedSignalCallback {
    ($obj: Terminal): void
}

/**
 * Signal callback interface for `cursor-moved`
 */
interface Terminal_CursorMovedSignalCallback {
    ($obj: Terminal): void
}

/**
 * Signal callback interface for `decrease-font-size`
 */
interface Terminal_DecreaseFontSizeSignalCallback {
    ($obj: Terminal): void
}

/**
 * Signal callback interface for `deiconify-window`
 */
interface Terminal_DeiconifyWindowSignalCallback {
    ($obj: Terminal): void
}

/**
 * Signal callback interface for `encoding-changed`
 */
interface Terminal_EncodingChangedSignalCallback {
    ($obj: Terminal): void
}

/**
 * Signal callback interface for `eof`
 */
interface Terminal_EofSignalCallback {
    ($obj: Terminal): void
}

/**
 * Signal callback interface for `hyperlink-hover-uri-changed`
 */
interface Terminal_HyperlinkHoverUriChangedSignalCallback {
    ($obj: Terminal, uri: string, bbox: Gdk.Rectangle): void
}

/**
 * Signal callback interface for `icon-title-changed`
 */
interface Terminal_IconTitleChangedSignalCallback {
    ($obj: Terminal): void
}

/**
 * Signal callback interface for `iconify-window`
 */
interface Terminal_IconifyWindowSignalCallback {
    ($obj: Terminal): void
}

/**
 * Signal callback interface for `increase-font-size`
 */
interface Terminal_IncreaseFontSizeSignalCallback {
    ($obj: Terminal): void
}

/**
 * Signal callback interface for `lower-window`
 */
interface Terminal_LowerWindowSignalCallback {
    ($obj: Terminal): void
}

/**
 * Signal callback interface for `maximize-window`
 */
interface Terminal_MaximizeWindowSignalCallback {
    ($obj: Terminal): void
}

/**
 * Signal callback interface for `move-window`
 */
interface Terminal_MoveWindowSignalCallback {
    ($obj: Terminal, x: number, y: number): void
}

/**
 * Signal callback interface for `paste-clipboard`
 */
interface Terminal_PasteClipboardSignalCallback {
    ($obj: Terminal): void
}

/**
 * Signal callback interface for `raise-window`
 */
interface Terminal_RaiseWindowSignalCallback {
    ($obj: Terminal): void
}

/**
 * Signal callback interface for `refresh-window`
 */
interface Terminal_RefreshWindowSignalCallback {
    ($obj: Terminal): void
}

/**
 * Signal callback interface for `resize-window`
 */
interface Terminal_ResizeWindowSignalCallback {
    ($obj: Terminal, width: number, height: number): void
}

/**
 * Signal callback interface for `restore-window`
 */
interface Terminal_RestoreWindowSignalCallback {
    ($obj: Terminal): void
}

/**
 * Signal callback interface for `selection-changed`
 */
interface Terminal_SelectionChangedSignalCallback {
    ($obj: Terminal): void
}

/**
 * Signal callback interface for `text-deleted`
 */
interface Terminal_TextDeletedSignalCallback {
    ($obj: Terminal): void
}

/**
 * Signal callback interface for `text-inserted`
 */
interface Terminal_TextInsertedSignalCallback {
    ($obj: Terminal): void
}

/**
 * Signal callback interface for `text-modified`
 */
interface Terminal_TextModifiedSignalCallback {
    ($obj: Terminal): void
}

/**
 * Signal callback interface for `text-scrolled`
 */
interface Terminal_TextScrolledSignalCallback {
    ($obj: Terminal, delta: number): void
}

/**
 * Signal callback interface for `window-title-changed`
 */
interface Terminal_WindowTitleChangedSignalCallback {
    ($obj: Terminal): void
}

interface Terminal extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own properties of Vte-2.91.Vte.Terminal

    /**
     * Controls whether or not the terminal will attempt to draw bold text,
     * by using a bold font variant.
     */
    allow_bold: boolean
    /**
     * Controls whether or not hyperlinks (OSC 8 escape sequence) are recognized and displayed.
     */
    allow_hyperlink: boolean
    /**
     * Controls whether or not the terminal will beep when the child outputs the
     * "bl" sequence.
     */
    audible_bell: boolean
    /**
     * Controls what string or control sequence the terminal sends to its child
     * when the user presses the backspace key.
     */
    backspace_binding: EraseBinding
    /**
     * Whether the SGR 1 attribute also switches to the bright counterpart
     * of the first 8 palette colors, in addition to making them bold (legacy behavior)
     * or if SGR 1 only enables bold and leaves the color intact.
     */
    bold_is_bright: boolean
    /**
     * Scale factor for the cell height, to increase line spacing. (The font's height is not affected.)
     */
    cell_height_scale: number
    /**
     * Scale factor for the cell width, to increase letter spacing. (The font's width is not affected.)
     */
    cell_width_scale: number
    /**
     * This setting controls whether ambiguous-width characters are narrow or wide.
     * (Note that when using a non-UTF-8 encoding set via vte_terminal_set_encoding(),
     * the width of ambiguous-width characters is fixed and determined by the encoding
     * itself.)
     * 
     * This setting only takes effect the next time the terminal is reset, either
     * via escape sequence or with vte_terminal_reset().
     */
    cjk_ambiguous_width: number
    /**
     * The current directory URI, or %NULL if unset.
     */
    readonly current_directory_uri: string
    /**
     * The current file URI, or %NULL if unset.
     */
    readonly current_file_uri: string
    /**
     * Sets whether or not the cursor will blink. Using %VTE_CURSOR_BLINK_SYSTEM
     * will use the #GtkSettings:gtk-cursor-blink setting.
     */
    cursor_blink_mode: CursorBlinkMode
    /**
     * Controls the shape of the cursor.
     */
    cursor_shape: CursorShape
    /**
     * Controls what string or control sequence the terminal sends to its child
     * when the user presses the delete key.
     */
    delete_binding: EraseBinding
    /**
     * Controls whether or not the terminal will perform bidirectional text rendering.
     */
    enable_bidi: boolean
    enable_fallback_scrolling: boolean
    /**
     * Controls whether or not the terminal will shape Arabic text.
     */
    enable_shaping: boolean
    /**
     * Controls whether SIXEL image support is enabled.
     */
    enable_sixel: boolean
    /**
     * Controls the encoding the terminal will expect data from the child to
     * be encoded with.  For certain terminal types, applications executing in the
     * terminal can change the encoding.  The default is defined by the
     * application's locale settings.
     */
    encoding: string
    /**
     * Specifies the font used for rendering all text displayed by the terminal,
     * overriding any fonts set using gtk_widget_modify_font().  The terminal
     * will immediately attempt to load the desired font, retrieve its
     * metrics, and attempt to resize itself to keep the same number of rows
     * and columns.
     */
    font_desc: Pango.FontDescription
    /**
     * The terminal's font scale.
     */
    font_scale: number
    /**
     * The currently hovered hyperlink URI, or %NULL if unset.
     */
    readonly hyperlink_hover_uri: string
    readonly icon_title: string
    /**
     * Controls whether the terminal allows user input. When user input is disabled,
     * key press and mouse button press and motion events are not sent to the
     * terminal's child.
     */
    input_enabled: boolean
    /**
     * Controls the value of the terminal's mouse autohide setting.  When autohiding
     * is enabled, the mouse cursor will be hidden when the user presses a key and
     * shown when the user moves the mouse.
     */
    pointer_autohide: boolean
    /**
     * The PTY object for the terminal.
     */
    pty: Pty
    /**
     * Controls whether or not the terminal will rewrap its contents, including
     * the scrollback buffer, whenever the terminal's width changes.
     */
    rewrap_on_resize: boolean
    /**
     * Controls whether or not the terminal will forcibly scroll to the bottom of
     * the viewable history when the user presses a key.  Modifier keys do not
     * trigger this behavior.
     */
    scroll_on_keystroke: boolean
    /**
     * Controls whether or not the terminal will forcibly scroll to the bottom of
     * the viewable history when the new data is received from the child.
     */
    scroll_on_output: boolean
    /**
     * Controls whether the terminal's GtkAdjustment values unit is lines
     * or pixels. This can be enabled when the terminal is the child of a
     * GtkScrolledWindow to fix some bugs with its kinetic scrolling.
     */
    scroll_unit_is_pixels: boolean
    /**
     * The length of the scrollback buffer used by the terminal.  The size of
     * the scrollback buffer will be set to the larger of this value and the number
     * of visible rows the widget can display, so 0 can safely be used to disable
     * scrollback.  Note that this setting only affects the normal screen buffer.
     * For terminal types which have an alternate screen buffer, no scrollback is
     * allowed on the alternate screen buffer.
     */
    scrollback_lines: number
    /**
     * Controls whether or not the terminal will allow blinking text.
     */
    text_blink_mode: TextBlinkMode
    /**
     * The terminal's title.
     */
    readonly window_title: string
    /**
     * The set of characters which will be considered parts of a word
     * when doing word-wise selection, in addition to the default which only
     * considers alphanumeric characters part of a word.
     * 
     * If %NULL, a built-in set is used.
     */
    readonly word_char_exceptions: string
    /**
     * The horizontal alignment of `terminal` within its allocation.
     */
    xalign: Align
    /**
     * The horizontal fillment of `terminal` within its allocation.
     */
    xfill: boolean
    /**
     * The vertical alignment of `terminal` within its allocation
     */
    yalign: Align
    /**
     * The vertical fillment of `terminal` within its allocation
     */
    yfill: boolean

    // Own fields of Vte-2.91.Vte.Terminal

    widget: Gtk.Widget

    // Owm methods of Vte-2.91.Vte.Terminal

    /**
     * Places the selected text in the terminal in the #GDK_SELECTION_CLIPBOARD
     * selection.
     */
    copy_clipboard(): void
    /**
     * Places the selected text in the terminal in the #GDK_SELECTION_CLIPBOARD
     * selection in the form specified by `format`.
     * 
     * For all formats, the selection data (see #GtkSelectionData) will include the
     * text targets (see gtk_target_list_add_text_targets() and
     * gtk_selection_data_targets_includes_text()). For %VTE_FORMAT_HTML,
     * the selection will also include the "text/html" target, which when requested,
     * returns the HTML data in UTF-16 with a U+FEFF BYTE ORDER MARK character at
     * the start.
     * @param format a #VteFormat
     */
    copy_clipboard_format(format: Format): void
    /**
     * Places the selected text in the terminal in the #GDK_SELECTION_PRIMARY
     * selection.
     */
    copy_primary(): void
    /**
     * This function does nothing.
     * @param event a #GdkEvent
     * @param regexes an array of #GRegex
     * @param match_flags the #GRegexMatchFlags to use when matching the regexes
     */
    event_check_gregex_simple(event: Gdk.Event, regexes: GLib.Regex[], match_flags: GLib.RegexMatchFlags): [ /* returnType */ boolean, /* matches */ string[] ]
    /**
     * Like vte_terminal_event_check_regex_simple(), but returns an array of strings,
     * containing the matching text (or %NULL if no match) corresponding to each of the
     * regexes in `regexes`.
     * 
     * You must free each string and the array; but note that this is *not* a %NULL-terminated
     * string array, and so you must *not* use g_strfreev() on it.
     * @param event a #GdkEvent
     * @param regexes an array of #VteRegex
     * @param match_flags PCRE2 match flags, or 0
     */
    event_check_regex_simple(event: Gdk.Event, regexes: Regex[], match_flags: number): string[] | null
    /**
     * Interprets `data` as if it were data received from a child process.
     * @param data a string in the terminal's current encoding
     */
    feed(data: Uint8Array | null): void
    /**
     * Sends a block of UTF-8 text to the child as if it were entered by the user
     * at the keyboard.
     * @param text data to send to the child
     */
    feed_child(text: Uint8Array | null): void
    /**
     * Sends a block of binary data to the child.
     * @param data data to send to the child
     */
    feed_child_binary(data: Uint8Array | null): void
    /**
     * Checks whether or not the terminal will attempt to draw bold text,
     * by using a bold font variant.
     */
    get_allow_bold(): boolean
    /**
     * Checks whether or not hyperlinks (OSC 8 escape sequence) are allowed.
     */
    get_allow_hyperlink(): boolean
    /**
     * Checks whether or not the terminal will beep when the child outputs the
     * "bl" sequence.
     */
    get_audible_bell(): boolean
    /**
     * Checks whether the SGR 1 attribute also switches to the bright counterpart
     * of the first 8 palette colors, in addition to making them bold (legacy behavior)
     * or if SGR 1 only enables bold and leaves the color intact.
     */
    get_bold_is_bright(): boolean
    get_cell_height_scale(): number
    get_cell_width_scale(): number
    get_char_height(): number
    get_char_width(): number
    /**
     * Returns whether ambiguous-width characters are narrow or wide.
     * (Note that when using a non-UTF-8 encoding set via vte_terminal_set_encoding(),
     * the width of ambiguous-width characters is fixed and determined by the encoding
     * itself.)
     */
    get_cjk_ambiguous_width(): number
    /**
     * Returns the background colour, as used by `terminal` when
     * drawing the background, which may be different from
     * the color set by vte_terminal_set_color_background().
     * 
     * Note: you must only call this function while handling the
     * GtkWidget::draw signal.
     * 
     * This function is rarely useful. One use for it is if you disable
     * drawing the background (see vte_terminal_set_clear_background())
     * and then need to draw the background yourself.
     */
    get_color_background_for_draw(): /* color */ Gdk.RGBA
    get_column_count(): number
    get_current_directory_uri(): string | null
    get_current_file_uri(): string | null
    /**
     * Returns the currently set cursor blink mode.
     */
    get_cursor_blink_mode(): CursorBlinkMode
    /**
     * Reads the location of the insertion cursor and returns it.  The row
     * coordinate is absolute.
     * 
     * This method is unaware of BiDi. The returned column is logical column.
     */
    get_cursor_position(): [ /* column */ number, /* row */ number ]
    /**
     * Returns the currently set cursor shape.
     */
    get_cursor_shape(): CursorShape
    /**
     * Checks whether the terminal performs bidirectional text rendering.
     */
    get_enable_bidi(): boolean
    get_enable_fallback_scrolling(): boolean
    /**
     * Checks whether the terminal shapes Arabic text.
     */
    get_enable_shaping(): boolean
    get_enable_sixel(): boolean
    /**
     * Determines the name of the encoding in which the terminal expects data to be
     * encoded, or %NULL if UTF-8 is in use.
     */
    get_encoding(): string | null
    /**
     * Queries the terminal for information about the fonts which will be
     * used to draw text in the terminal.  The actual font takes the font scale
     * into account, this is not reflected in the return value, the unscaled
     * font is returned.
     */
    get_font(): Pango.FontDescription
    get_font_scale(): number
    /**
     * Fills in some `hints` from `terminal'`s geometry. The hints
     * filled are those covered by the %GDK_HINT_RESIZE_INC,
     * %GDK_HINT_MIN_SIZE and %GDK_HINT_BASE_SIZE flags.
     * 
     * See gtk_window_set_geometry_hints() for more information.
     * 
     * `terminal` must be realized (see gtk_widget_get_realized()).
     * @param min_rows the minimum number of rows to request
     * @param min_columns the minimum number of columns to request
     */
    get_geometry_hints(min_rows: number, min_columns: number): /* hints */ Gdk.Geometry
    /**
     * Checks if the terminal currently contains selected text.  Note that this
     * is different from determining if the terminal is the owner of any
     * #GtkClipboard items.
     */
    get_has_selection(): boolean
    get_icon_title(): string | null
    /**
     * Returns whether the terminal allow user input.
     */
    get_input_enabled(): boolean
    /**
     * Determines the value of the terminal's mouse autohide setting.  When
     * autohiding is enabled, the mouse cursor will be hidden when the user presses
     * a key and shown when the user moves the mouse.  This setting can be changed
     * using vte_terminal_set_mouse_autohide().
     */
    get_mouse_autohide(): boolean
    /**
     * Returns the #VtePty of `terminal`.
     */
    get_pty(): Pty
    /**
     * Checks whether or not the terminal will rewrap its contents upon resize.
     */
    get_rewrap_on_resize(): boolean
    get_row_count(): number
    get_scroll_on_keystroke(): boolean
    get_scroll_on_output(): boolean
    get_scroll_unit_is_pixels(): boolean
    get_scrollback_lines(): number
    /**
     * Extracts a view of the visible part of the terminal.  If `is_selected` is not
     * %NULL, characters will only be read if `is_selected` returns %TRUE after being
     * passed the column and row, respectively.  A #VteCharAttributes structure
     * is added to `attributes` for each byte added to the returned string detailing
     * the character's position, colors, and other characteristics.
     * 
     * This method is unaware of BiDi. The columns returned in `attributes` are
     * logical columns.
     * 
     * Note: since 0.68, passing a non-%NULL `array` parameter is deprecated. Starting with
     * 0.70, passing a non-%NULL `array` parameter will make this function itself return %NULL.
     * @param is_selected a #VteSelectionFunc callback
     */
    get_text(is_selected: SelectionFunc | null): [ /* returnType */ string | null, /* attributes */ CharAttributes[] | null ]
    /**
     * Checks whether or not the terminal will allow blinking text.
     */
    get_text_blink_mode(): TextBlinkMode
    /**
     * Extracts a view of the visible part of the terminal.  If `is_selected` is not
     * %NULL, characters will only be read if `is_selected` returns %TRUE after being
     * passed the column and row, respectively.  A #VteCharAttributes structure
     * is added to `attributes` for each byte added to the returned string detailing
     * the character's position, colors, and other characteristics.
     * 
     * This method is unaware of BiDi. The columns returned in `attributes` are
     * logical columns.
     * 
     * Note: since 0.68, passing a non-%NULL `array` parameter is deprecated. Starting with
     * 0.70, passing a non-%NULL `array` parameter will make this function itself return %NULL.
     * @param is_selected a #VteSelectionFunc callback
     */
    get_text_include_trailing_spaces(is_selected: SelectionFunc | null): [ /* returnType */ string, /* attributes */ CharAttributes[] ]
    /**
     * Extracts a view of the visible part of the terminal.  If `is_selected` is not
     * %NULL, characters will only be read if `is_selected` returns %TRUE after being
     * passed the column and row, respectively.  A #VteCharAttributes structure
     * is added to `attributes` for each byte added to the returned string detailing
     * the character's position, colors, and other characteristics.  The
     * entire scrollback buffer is scanned, so it is possible to read the entire
     * contents of the buffer using this function.
     * 
     * This method is unaware of BiDi. The columns passed in `start_col` and `end_row,`
     * and returned in `attributes` are logical columns.
     * 
     * Note: since 0.68, passing a non-%NULL `array` parameter is deprecated. Starting with
     * 0.70, passing a non-%NULL `array` parameter will make this function itself return %NULL.
     * @param start_row first row to search for data
     * @param start_col first column to search for data
     * @param end_row last row to search for data
     * @param end_col last column to search for data
     * @param is_selected a #VteSelectionFunc callback
     */
    get_text_range(start_row: number, start_col: number, end_row: number, end_col: number, is_selected: SelectionFunc | null): [ /* returnType */ string | null, /* attributes */ CharAttributes[] | null ]
    get_window_title(): string | null
    /**
     * Returns the set of characters which will be considered parts of a word
     * when doing word-wise selection, in addition to the default which only
     * considers alphanumeric characters part of a word.
     * 
     * If %NULL, a built-in set is used.
     */
    get_word_char_exceptions(): string | null
    get_xalign(): Align
    get_xfill(): boolean
    get_yalign(): Align
    get_yfill(): boolean
    /**
     * Returns a nonempty string: the target of the explicit hyperlink (printed using the OSC 8
     * escape sequence) at the position of the event, or %NULL.
     * 
     * Proper use of the escape sequence should result in URI-encoded URIs with a proper scheme
     * like "http://", "https://", "file://", "mailto:" etc. This is, however, not enforced by VTE.
     * The caller must tolerate the returned string potentially not being a valid URI.
     * @param event a #GdkEvent
     */
    hyperlink_check_event(event: Gdk.Event): string | null
    /**
     * This function does nothing since version 0.60.
     * @param gregex a #GRegex
     * @param gflags the #GRegexMatchFlags to use when matching the regex
     */
    match_add_gregex(gregex: GLib.Regex, gflags: GLib.RegexMatchFlags): number
    /**
     * Adds the regular expression `regex` to the list of matching expressions.  When the
     * user moves the mouse cursor over a section of displayed text which matches
     * this expression, the text will be highlighted.
     * 
     * Note that `regex` should have been created using the <literal>PCRE2_MULTILINE</literal>
     * flag.
     * @param regex a #VteRegex
     * @param flags PCRE2 match flags, or 0
     */
    match_add_regex(regex: Regex, flags: number): number
    /**
     * Checks if the text in and around the specified position matches any of the
     * regular expressions previously set using vte_terminal_match_add().  If a
     * match exists, the text string is returned and if `tag` is not %NULL, the number
     * associated with the matched regular expression will be stored in `tag`.
     * 
     * If more than one regular expression has been set with
     * vte_terminal_match_add(), then expressions are checked in the order in
     * which they were added.
     * @param column the text column
     * @param row the text row
     */
    match_check(column: number, row: number): [ /* returnType */ string | null, /* tag */ number ]
    /**
     * Checks if the text in and around the position of the event matches any of the
     * regular expressions previously set using vte_terminal_match_add().  If a
     * match exists, the text string is returned and if `tag` is not %NULL, the number
     * associated with the matched regular expression will be stored in `tag`.
     * 
     * If more than one regular expression has been set with
     * vte_terminal_match_add(), then expressions are checked in the order in
     * which they were added.
     * @param event a #GdkEvent
     */
    match_check_event(event: Gdk.Event): [ /* returnType */ string | null, /* tag */ number ]
    /**
     * Removes the regular expression which is associated with the given `tag` from
     * the list of expressions which the terminal will highlight when the user
     * moves the mouse cursor over matching text.
     * @param tag the tag of the regex to remove
     */
    match_remove(tag: number): void
    /**
     * Clears the list of regular expressions the terminal uses to highlight text
     * when the user moves the mouse cursor.
     */
    match_remove_all(): void
    /**
     * Sets which cursor the terminal will use if the pointer is over the pattern
     * specified by `tag`.  The terminal keeps a reference to `cursor`.
     * @param tag the tag of the regex which should use the specified cursor
     * @param cursor the #GdkCursor which the terminal should use when the pattern is   highlighted, or %NULL to use the standard cursor
     */
    match_set_cursor(tag: number, cursor: Gdk.Cursor | null): void
    /**
     * Sets which cursor the terminal will use if the pointer is over the pattern
     * specified by `tag`.
     * @param tag the tag of the regex which should use the specified cursor
     * @param cursor_name the name of the cursor
     */
    match_set_cursor_name(tag: number, cursor_name: string): void
    /**
     * Sets which cursor the terminal will use if the pointer is over the pattern
     * specified by `tag`.
     * @param tag the tag of the regex which should use the specified cursor
     * @param cursor_type a #GdkCursorType
     */
    match_set_cursor_type(tag: number, cursor_type: Gdk.CursorType): void
    /**
     * Sends the contents of the #GDK_SELECTION_CLIPBOARD selection to the
     * terminal's child. It's called on paste menu item, or when
     * user presses Shift+Insert.
     */
    paste_clipboard(): void
    /**
     * Sends the contents of the #GDK_SELECTION_PRIMARY selection to the terminal's
     * child. The terminal will call also paste the
     * #GDK_SELECTION_PRIMARY selection when the user clicks with the the second
     * mouse button.
     */
    paste_primary(): void
    /**
     * Sends `text` to the terminal's child as if retrived from the clipboard,
     * this differs from vte_terminal_feed_child() in that it may process
     * `text` before passing it to the child (e.g. apply bracketed mode)
     * @param text a string to paste
     */
    paste_text(text: string): void
    /**
     * Creates a new #VtePty, sets the emulation property
     * from #VteTerminal:emulation, and sets the size using
     * `terminal'`s size.
     * 
     * See vte_pty_new() for more information.
     * @param flags flags from #VtePtyFlags
     * @param cancellable a #GCancellable, or %NULL
     */
    pty_new_sync(flags: PtyFlags, cancellable: Gio.Cancellable | null): Pty
    /**
     * Resets as much of the terminal's internal state as possible, discarding any
     * unprocessed input data, resetting character attributes, cursor state,
     * national character set state, status line, terminal modes (insert/delete),
     * selection state, and encoding.
     * @param clear_tabstops whether to reset tabstops
     * @param clear_history whether to empty the terminal's scrollback buffer
     */
    reset(clear_tabstops: boolean, clear_history: boolean): void
    /**
     * Searches the next string matching the search regex set with
     * vte_terminal_search_set_regex().
     */
    search_find_next(): boolean
    /**
     * Searches the previous string matching the search regex set with
     * vte_terminal_search_set_regex().
     */
    search_find_previous(): boolean
    search_get_gregex(): GLib.Regex
    search_get_regex(): Regex
    search_get_wrap_around(): boolean
    /**
     * This function does nothing since version 0.60.
     * @param gregex a #GRegex, or %NULL
     * @param gflags flags from #GRegexMatchFlags
     */
    search_set_gregex(gregex: GLib.Regex | null, gflags: GLib.RegexMatchFlags): void
    /**
     * Sets the regex to search for. Unsets the search regex when passed %NULL.
     * 
     * Note that `regex` should have been created using the
     * <literal>PCRE2_MULTILINE</literal> flag.
     * @param regex a #VteRegex, or %NULL
     * @param flags PCRE2 match flags, or 0
     */
    search_set_regex(regex: Regex | null, flags: number): void
    /**
     * Sets whether search should wrap around to the beginning of the
     * terminal content when reaching its end.
     * @param wrap_around whether search should wrap
     */
    search_set_wrap_around(wrap_around: boolean): void
    /**
     * Selects all text within the terminal (not including the scrollback buffer).
     */
    select_all(): void
    /**
     * Controls whether or not the terminal will attempt to draw bold text,
     * by using a bold font variant.
     * @param allow_bold %TRUE if the terminal should attempt to draw bold text
     */
    set_allow_bold(allow_bold: boolean): void
    /**
     * Controls whether or not hyperlinks (OSC 8 escape sequence) are allowed.
     * @param allow_hyperlink %TRUE if the terminal should allow hyperlinks
     */
    set_allow_hyperlink(allow_hyperlink: boolean): void
    /**
     * Controls whether or not the terminal will beep when the child outputs the
     * "bl" sequence.
     * @param is_audible %TRUE if the terminal should beep
     */
    set_audible_bell(is_audible: boolean): void
    /**
     * Modifies the terminal's backspace key binding, which controls what
     * string or control sequence the terminal sends to its child when the user
     * presses the backspace key.
     * @param binding a #VteEraseBinding for the backspace key
     */
    set_backspace_binding(binding: EraseBinding): void
    /**
     * Sets whether the SGR 1 attribute also switches to the bright counterpart
     * of the first 8 palette colors, in addition to making them bold (legacy behavior)
     * or if SGR 1 only enables bold and leaves the color intact.
     * @param bold_is_bright %TRUE if bold should also enable bright
     */
    set_bold_is_bright(bold_is_bright: boolean): void
    /**
     * Sets the terminal's cell height scale to `scale`.
     * 
     * This can be used to increase the line spacing. (The font's height is not affected.)
     * Valid values go from 1.0 (default) to 2.0 ("double spacing").
     * @param scale the cell height scale
     */
    set_cell_height_scale(scale: number): void
    /**
     * Sets the terminal's cell width scale to `scale`.
     * 
     * This can be used to increase the letter spacing. (The font's width is not affected.)
     * Valid values go from 1.0 (default) to 2.0.
     * @param scale the cell width scale
     */
    set_cell_width_scale(scale: number): void
    /**
     * This setting controls whether ambiguous-width characters are narrow or wide.
     * (Note that when using a non-UTF-8 encoding set via vte_terminal_set_encoding(),
     * the width of ambiguous-width characters is fixed and determined by the encoding
     * itself.)
     * @param width either 1 (narrow) or 2 (wide)
     */
    set_cjk_ambiguous_width(width: number): void
    /**
     * Sets whether to paint the background with the background colour.
     * The default is %TRUE.
     * 
     * This function is rarely useful. One use for it is to add a background
     * image to the terminal.
     * @param setting whether to clear the background
     */
    set_clear_background(setting: boolean): void
    /**
     * Sets the background color for text which does not have a specific background
     * color assigned.  Only has effect when no background image is set and when
     * the terminal is not transparent.
     * @param background the new background color
     */
    set_color_background(background: Gdk.RGBA): void
    /**
     * Sets the color used to draw bold text in the default foreground color.
     * If `bold` is %NULL then the default color is used.
     * @param bold the new bold color or %NULL
     */
    set_color_bold(bold: Gdk.RGBA | null): void
    /**
     * Sets the background color for text which is under the cursor.  If %NULL, text
     * under the cursor will be drawn with foreground and background colors
     * reversed.
     * @param cursor_background the new color to use for the text cursor, or %NULL
     */
    set_color_cursor(cursor_background: Gdk.RGBA | null): void
    /**
     * Sets the foreground color for text which is under the cursor.  If %NULL, text
     * under the cursor will be drawn with foreground and background colors
     * reversed.
     * @param cursor_foreground the new color to use for the text cursor, or %NULL
     */
    set_color_cursor_foreground(cursor_foreground: Gdk.RGBA | null): void
    /**
     * Sets the foreground color used to draw normal text.
     * @param foreground the new foreground color
     */
    set_color_foreground(foreground: Gdk.RGBA): void
    /**
     * Sets the background color for text which is highlighted.  If %NULL,
     * it is unset.  If neither highlight background nor highlight foreground are set,
     * highlighted text (which is usually highlighted because it is selected) will
     * be drawn with foreground and background colors reversed.
     * @param highlight_background the new color to use for highlighted text, or %NULL
     */
    set_color_highlight(highlight_background: Gdk.RGBA | null): void
    /**
     * Sets the foreground color for text which is highlighted.  If %NULL,
     * it is unset.  If neither highlight background nor highlight foreground are set,
     * highlighted text (which is usually highlighted because it is selected) will
     * be drawn with foreground and background colors reversed.
     * @param highlight_foreground the new color to use for highlighted text, or %NULL
     */
    set_color_highlight_foreground(highlight_foreground: Gdk.RGBA | null): void
    /**
     * `palette` specifies the new values for the 256 palette colors: 8 standard colors,
     * their 8 bright counterparts, 6x6x6 color cube, and 24 grayscale colors.
     * Omitted entries will default to a hardcoded value.
     * 
     * `palette_size` must be 0, 8, 16, 232 or 256.
     * 
     * If `foreground` is %NULL and `palette_size` is greater than 0, the new foreground
     * color is taken from `palette[`7].  If `background` is %NULL and `palette_size` is
     * greater than 0, the new background color is taken from `palette[`0].
     * @param foreground the new foreground color, or %NULL
     * @param background the new background color, or %NULL
     * @param palette the color palette
     */
    set_colors(foreground: Gdk.RGBA | null, background: Gdk.RGBA | null, palette: Gdk.RGBA[] | null): void
    /**
     * Sets whether or not the cursor will blink. Using %VTE_CURSOR_BLINK_SYSTEM
     * will use the #GtkSettings::gtk-cursor-blink setting.
     * @param mode the #VteCursorBlinkMode to use
     */
    set_cursor_blink_mode(mode: CursorBlinkMode): void
    /**
     * Sets the shape of the cursor drawn.
     * @param shape the #VteCursorShape to use
     */
    set_cursor_shape(shape: CursorShape): void
    /**
     * Reset the terminal palette to reasonable compiled-in default color.
     */
    set_default_colors(): void
    /**
     * Modifies the terminal's delete key binding, which controls what
     * string or control sequence the terminal sends to its child when the user
     * presses the delete key.
     * @param binding a #VteEraseBinding for the delete key
     */
    set_delete_binding(binding: EraseBinding): void
    /**
     * Controls whether or not the terminal will perform bidirectional text rendering.
     * @param enable_bidi %TRUE to enable BiDi support
     */
    set_enable_bidi(enable_bidi: boolean): void
    /**
     * Controls whether the terminal uses scroll events to scroll the history
     * if the event was not otherwise consumed by it.
     * 
     * This function is rarely useful, except when the terminal is added to a
     * #GtkScrolledWindow, to perform kinetic scrolling (while vte itself does
     * not, yet, implement kinetic scrolling by itself).
     * @param enable whether to enable fallback scrolling
     */
    set_enable_fallback_scrolling(enable: boolean): void
    /**
     * Controls whether or not the terminal will shape Arabic text.
     * @param enable_shaping %TRUE to enable Arabic shaping
     */
    set_enable_shaping(enable_shaping: boolean): void
    /**
     * Set whether to enable SIXEL images.
     * @param enabled whether to enable SIXEL images
     */
    set_enable_sixel(enabled: boolean): void
    /**
     * Changes the encoding the terminal will expect data from the child to
     * be encoded with.  For certain terminal types, applications executing in the
     * terminal can change the encoding. If `codeset` is %NULL, it uses "UTF-8".
     * 
     * Note: Support for non-UTF-8 is deprecated and may get removed altogether.
     * Instead of this function, you should use a wrapper like luit(1) when
     * spawning the child process.
     * @param codeset target charset, or %NULL to use UTF-8
     */
    set_encoding(codeset: string | null): boolean
    /**
     * Sets the font used for rendering all text displayed by the terminal,
     * overriding any fonts set using gtk_widget_modify_font().  The terminal
     * will immediately attempt to load the desired font, retrieve its
     * metrics, and attempt to resize itself to keep the same number of rows
     * and columns.  The font scale is applied to the specified font.
     * @param font_desc a #PangoFontDescription for the desired font, or %NULL
     */
    set_font(font_desc: Pango.FontDescription | null): void
    /**
     * Sets the terminal's font scale to `scale`.
     * @param scale the font scale
     */
    set_font_scale(scale: number): void
    /**
     * Sets `terminal` as `window'`s geometry widget. See
     * gtk_window_set_geometry_hints() for more information.
     * 
     * `terminal` must be realized (see gtk_widget_get_realized()).
     * @param window a #GtkWindow
     */
    set_geometry_hints_for_window(window: Gtk.Window): void
    /**
     * Enables or disables user input. When user input is disabled,
     * the terminal's child will not receive any key press, or mouse button
     * press or motion events sent to it.
     * @param enabled whether to enable user input
     */
    set_input_enabled(enabled: boolean): void
    /**
     * Changes the value of the terminal's mouse autohide setting.  When autohiding
     * is enabled, the mouse cursor will be hidden when the user presses a key and
     * shown when the user moves the mouse.  This setting can be read using
     * vte_terminal_get_mouse_autohide().
     * @param setting whether the mouse pointer should autohide
     */
    set_mouse_autohide(setting: boolean): void
    /**
     * Sets `pty` as the PTY to use in `terminal`.
     * Use %NULL to unset the PTY.
     * @param pty a #VtePty, or %NULL
     */
    set_pty(pty: Pty | null): void
    /**
     * Controls whether or not the terminal will rewrap its contents, including
     * the scrollback history, whenever the terminal's width changes.
     * @param rewrap %TRUE if the terminal should rewrap on resize
     */
    set_rewrap_on_resize(rewrap: boolean): void
    /**
     * Controls whether or not the terminal will forcibly scroll to the bottom of
     * the viewable history when the user presses a key.  Modifier keys do not
     * trigger this behavior.
     * @param scroll whether the terminal should scroll on keystrokes
     */
    set_scroll_on_keystroke(scroll: boolean): void
    /**
     * Controls whether or not the terminal will forcibly scroll to the bottom of
     * the viewable history when the new data is received from the child.
     * @param scroll whether the terminal should scroll on output
     */
    set_scroll_on_output(scroll: boolean): void
    /**
     * Controls whether the terminal's scroll unit is lines or pixels.
     * 
     * This function is rarely useful, except when the terminal is added to a
     * #GtkScrolledWindow.
     * @param enable whether to use pixels as scroll unit
     */
    set_scroll_unit_is_pixels(enable: boolean): void
    /**
     * Sets the length of the scrollback buffer used by the terminal.  The size of
     * the scrollback buffer will be set to the larger of this value and the number
     * of visible rows the widget can display, so 0 can safely be used to disable
     * scrollback.
     * 
     * A negative value means "infinite scrollback".
     * 
     * Note that this setting only affects the normal screen buffer.
     * No scrollback is allowed on the alternate screen buffer.
     * @param lines the length of the history buffer
     */
    set_scrollback_lines(lines: number): void
    /**
     * Attempts to change the terminal's size in terms of rows and columns.  If
     * the attempt succeeds, the widget will resize itself to the proper size.
     * @param columns the desired number of columns
     * @param rows the desired number of rows
     */
    set_size(columns: number, rows: number): void
    /**
     * Controls whether or not the terminal will allow blinking text.
     * @param text_blink_mode the #VteTextBlinkMode to use
     */
    set_text_blink_mode(text_blink_mode: TextBlinkMode): void
    /**
     * With this function you can provide a set of characters which will
     * be considered parts of a word when doing word-wise selection, in
     * addition to the default which only considers alphanumeric characters
     * part of a word.
     * 
     * The characters in `exceptions` must be non-alphanumeric, each character
     * must occur only once, and if `exceptions` contains the character
     * U+002D HYPHEN-MINUS, it must be at the start of the string.
     * 
     * Use %NULL to reset the set of exception characters to the default.
     * @param exceptions a string of ASCII punctuation characters, or %NULL
     */
    set_word_char_exceptions(exceptions: string): void
    /**
     * Sets the horizontal alignment of `terminal` within its allocation.
     * 
     * Note: %VTE_ALIGN_START_FILL is not supported, and will be treated
     *   like %VTE_ALIGN_START.
     * @param align alignment value from #VteAlign
     */
    set_xalign(align: Align): void
    /**
     * Sets the horizontal fillment of `terminal` within its allocation.
     * 
     * Note: %VTE_FILL_START_FILL is not supported, and will be treated
     *   like %VTE_FILL_START.
     * @param fill fillment value from #VteFill
     */
    set_xfill(fill: boolean): void
    /**
     * Sets the vertical alignment of `terminal` within its allocation.
     * @param align alignment value from #VteAlign
     */
    set_yalign(align: Align): void
    /**
     * Sets the vertical fillment of `terminal` within its allocation.
     * @param fill fillment value from #VteFill
     */
    set_yfill(fill: boolean): void
    /**
     * A convenience function that wraps creating the #VtePty and spawning
     * the child process on it. Like vte_terminal_spawn_with_fds_async(),
     * except that this function does not allow passing file descriptors to
     * the child process. See vte_terminal_spawn_with_fds_async() for more
     * information.
     * @param pty_flags flags from #VtePtyFlags
     * @param working_directory the name of a directory the command should start   in, or %NULL to use the current working directory
     * @param argv child's argument vector
     * @param envv a list of environment   variables to be added to the environment before starting the process, or %NULL
     * @param spawn_flags flags from #GSpawnFlags
     * @param timeout a timeout value in ms, -1 for the default timeout, or G_MAXINT to wait indefinitely
     * @param cancellable a #GCancellable, or %NULL
     */
    spawn_async(pty_flags: PtyFlags, working_directory: string | null, argv: string[], envv: string[] | null, spawn_flags: GLib.SpawnFlags, timeout: number, cancellable: Gio.Cancellable | null): void
    /**
     * Starts the specified command under a newly-allocated controlling
     * pseudo-terminal.  The `argv` and `envv` lists should be %NULL-terminated.
     * The "TERM" environment variable is automatically set to a default value,
     * but can be overridden from `envv`.
     * `pty_flags` controls logging the session to the specified system log files.
     * 
     * Note that %G_SPAWN_DO_NOT_REAP_CHILD will always be added to `spawn_flags`.
     * 
     * Note also that %G_SPAWN_STDOUT_TO_DEV_NULL, %G_SPAWN_STDERR_TO_DEV_NULL,
     * and %G_SPAWN_CHILD_INHERITS_STDIN are not supported in `spawn_flags,` since
     * stdin, stdout and stderr of the child process will always be connected to
     * the PTY.
     * 
     * Note that all open file descriptors will be closed in the child. If you want
     * to keep some file descriptor open for use in the child process, you need to
     * use a child setup function that unsets the FD_CLOEXEC flag on that file
     * descriptor.
     * 
     * See vte_pty_new(), g_spawn_async() and vte_terminal_watch_child() for more information.
     * 
     * Beginning with 0.52, sets PWD to `working_directory` in order to preserve symlink components.
     * The caller should also make sure that symlinks were preserved while constructing the value of `working_directory,`
     * e.g. by using vte_terminal_get_current_directory_uri(), g_get_current_dir() or get_current_dir_name().
     * @param pty_flags flags from #VtePtyFlags
     * @param working_directory the name of a directory the command should start   in, or %NULL to use the current working directory
     * @param argv child's argument vector
     * @param envv a list of environment   variables to be added to the environment before starting the process, or %NULL
     * @param spawn_flags flags from #GSpawnFlags
     * @param child_setup an extra child setup function to run in the child just before exec(), or %NULL
     * @param cancellable a #GCancellable, or %NULL
     */
    spawn_sync(pty_flags: PtyFlags, working_directory: string | null, argv: string[], envv: string[] | null, spawn_flags: GLib.SpawnFlags, child_setup: GLib.SpawnChildSetupFunc | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* child_pid */ GLib.Pid ]
    /**
     * A convenience function that wraps creating the #VtePty and spawning
     * the child process on it. See vte_pty_new_sync(), vte_pty_spawn_with_fds_async(),
     * and vte_pty_spawn_finish() for more information.
     * 
     * When the operation is finished successfully, `callback` will be called
     * with the child #GPid, and a %NULL #GError. The child PID will already be
     * watched via vte_terminal_watch_child().
     * 
     * When the operation fails, `callback` will be called with a -1 #GPid,
     * and a non-%NULL #GError containing the error information.
     * 
     * Note that %G_SPAWN_STDOUT_TO_DEV_NULL, %G_SPAWN_STDERR_TO_DEV_NULL,
     * and %G_SPAWN_CHILD_INHERITS_STDIN are not supported in `spawn_flags,` since
     * stdin, stdout and stderr of the child process will always be connected to
     * the PTY.
     * 
     * If `fds` is not %NULL, the child process will map the file descriptors from
     * `fds` according to `map_fds;` `n_map_fds` must be less or equal to `n_fds`.
     * This function will take ownership of the file descriptors in `fds;`
     * you must not use or close them after this call.
     * 
     * Note that all  open file descriptors apart from those mapped as above
     * will be closed in the child. (If you want to keep some other file descriptor
     * open for use in the child process, you need to use a child setup function
     * that unsets the FD_CLOEXEC flag on that file descriptor manually.)
     * 
     * Beginning with 0.60, and on linux only, and unless %VTE_SPAWN_NO_SYSTEMD_SCOPE is
     * passed in `spawn_flags,` the newly created child process will be moved to its own
     * systemd user scope; and if %VTE_SPAWN_REQUIRE_SYSTEMD_SCOPE is passed, and creation
     * of the systemd user scope fails, the whole spawn will fail.
     * You can override the options used for the systemd user scope by
     * providing a systemd override file for 'vte-spawn-.scope' unit. See man:systemd.unit(5)
     * for further information.
     * 
     * Note that if `terminal` has been destroyed before the operation is called,
     * `callback` will be called with a %NULL `terminal;` you must not do anything
     * in the callback besides freeing any resources associated with `user_data,`
     * but taking care not to access the now-destroyed #VteTerminal. Note that
     * in this case, if spawning was successful, the child process will be aborted
     * automatically.
     * 
     * Beginning with 0.52, sets PWD to `working_directory` in order to preserve symlink components.
     * The caller should also make sure that symlinks were preserved while constructing the value of `working_directory,`
     * e.g. by using vte_terminal_get_current_directory_uri(), g_get_current_dir() or get_current_dir_name().
     * @param pty_flags flags from #VtePtyFlags
     * @param working_directory the name of a directory the command should start   in, or %NULL to use the current working directory
     * @param argv child's argument vector
     * @param envv a list of environment   variables to be added to the environment before starting the process, or %NULL
     * @param fds an array of file descriptors, or %NULL
     * @param map_fds an array of integers, or %NULL
     * @param spawn_flags flags from #GSpawnFlags
     * @param timeout a timeout value in ms, -1 for the default timeout, or G_MAXINT to wait indefinitely
     * @param cancellable a #GCancellable, or %NULL
     */
    spawn_with_fds_async(pty_flags: PtyFlags, working_directory: string | null, argv: string[], envv: string[] | null, fds: number[] | null, map_fds: number[] | null, spawn_flags: GLib.SpawnFlags, timeout: number, cancellable: Gio.Cancellable | null): void
    /**
     * Clears the current selection.
     */
    unselect_all(): void
    /**
     * Watches `child_pid`. When the process exists, the #VteTerminal::child-exited
     * signal will be called with the child's exit status.
     * 
     * Prior to calling this function, a #VtePty must have been set in `terminal`
     * using vte_terminal_set_pty().
     * When the child exits, the terminal's #VtePty will be set to %NULL.
     * 
     * Note: g_child_watch_add() or g_child_watch_add_full() must not have
     * been called for `child_pid,` nor a #GSource for it been created with
     * g_child_watch_source_new().
     * 
     * Note: when using the g_spawn_async() family of functions,
     * the %G_SPAWN_DO_NOT_REAP_CHILD flag MUST have been passed.
     * @param child_pid a #GPid
     */
    watch_child(child_pid: GLib.Pid): void
    /**
     * Write contents of the current contents of `terminal` (including any
     * scrollback history) to `stream` according to `flags`.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by triggering
     * the cancellable object from another thread. If the operation was cancelled,
     * the error %G_IO_ERROR_CANCELLED will be returned in `error`.
     * 
     * This is a synchronous operation and will make the widget (and input
     * processing) during the write operation, which may take a long time
     * depending on scrollback history and `stream` availability for writing.
     * @param stream a #GOutputStream to write to
     * @param flags a set of #VteWriteFlags
     * @param cancellable a #GCancellable object, or %NULL
     */
    write_contents_sync(stream: Gio.OutputStream, flags: WriteFlags, cancellable: Gio.Cancellable | null): boolean

    // Own virtual methods of Vte-2.91.Vte.Terminal

    vfunc_bell(): void
    vfunc_char_size_changed(char_width: number, char_height: number): void
    vfunc_child_exited(status: number): void
    vfunc_commit(text: string, size: number): void
    vfunc_contents_changed(): void
    /**
     * Places the selected text in the terminal in the #GDK_SELECTION_CLIPBOARD
     * selection.
     * @virtual 
     */
    vfunc_copy_clipboard(): void
    vfunc_cursor_moved(): void
    vfunc_decrease_font_size(): void
    vfunc_deiconify_window(): void
    vfunc_encoding_changed(): void
    vfunc_eof(): void
    vfunc_icon_title_changed(): void
    vfunc_iconify_window(): void
    vfunc_increase_font_size(): void
    vfunc_lower_window(): void
    vfunc_maximize_window(): void
    vfunc_move_window(x: number, y: number): void
    /**
     * Sends the contents of the #GDK_SELECTION_CLIPBOARD selection to the
     * terminal's child. It's called on paste menu item, or when
     * user presses Shift+Insert.
     * @virtual 
     */
    vfunc_paste_clipboard(): void
    vfunc_raise_window(): void
    vfunc_refresh_window(): void
    vfunc_resize_window(width: number, height: number): void
    vfunc_restore_window(): void
    vfunc_selection_changed(): void
    vfunc_text_deleted(): void
    vfunc_text_inserted(): void
    vfunc_text_modified(): void
    vfunc_text_scrolled(delta: number): void
    vfunc_window_title_changed(): void

    // Own signals of Vte-2.91.Vte.Terminal

    connect(sigName: "bell", callback: Terminal_BellSignalCallback): number
    connect_after(sigName: "bell", callback: Terminal_BellSignalCallback): number
    emit(sigName: "bell", ...args: any[]): void
    connect(sigName: "char-size-changed", callback: Terminal_CharSizeChangedSignalCallback): number
    connect_after(sigName: "char-size-changed", callback: Terminal_CharSizeChangedSignalCallback): number
    emit(sigName: "char-size-changed", width: number, height: number, ...args: any[]): void
    connect(sigName: "child-exited", callback: Terminal_ChildExitedSignalCallback): number
    connect_after(sigName: "child-exited", callback: Terminal_ChildExitedSignalCallback): number
    emit(sigName: "child-exited", status: number, ...args: any[]): void
    connect(sigName: "commit", callback: Terminal_CommitSignalCallback): number
    connect_after(sigName: "commit", callback: Terminal_CommitSignalCallback): number
    emit(sigName: "commit", text: string, size: number, ...args: any[]): void
    connect(sigName: "contents-changed", callback: Terminal_ContentsChangedSignalCallback): number
    connect_after(sigName: "contents-changed", callback: Terminal_ContentsChangedSignalCallback): number
    emit(sigName: "contents-changed", ...args: any[]): void
    connect(sigName: "copy-clipboard", callback: Terminal_CopyClipboardSignalCallback): number
    connect_after(sigName: "copy-clipboard", callback: Terminal_CopyClipboardSignalCallback): number
    emit(sigName: "copy-clipboard", ...args: any[]): void
    connect(sigName: "current-directory-uri-changed", callback: Terminal_CurrentDirectoryUriChangedSignalCallback): number
    connect_after(sigName: "current-directory-uri-changed", callback: Terminal_CurrentDirectoryUriChangedSignalCallback): number
    emit(sigName: "current-directory-uri-changed", ...args: any[]): void
    connect(sigName: "current-file-uri-changed", callback: Terminal_CurrentFileUriChangedSignalCallback): number
    connect_after(sigName: "current-file-uri-changed", callback: Terminal_CurrentFileUriChangedSignalCallback): number
    emit(sigName: "current-file-uri-changed", ...args: any[]): void
    connect(sigName: "cursor-moved", callback: Terminal_CursorMovedSignalCallback): number
    connect_after(sigName: "cursor-moved", callback: Terminal_CursorMovedSignalCallback): number
    emit(sigName: "cursor-moved", ...args: any[]): void
    connect(sigName: "decrease-font-size", callback: Terminal_DecreaseFontSizeSignalCallback): number
    connect_after(sigName: "decrease-font-size", callback: Terminal_DecreaseFontSizeSignalCallback): number
    emit(sigName: "decrease-font-size", ...args: any[]): void
    connect(sigName: "deiconify-window", callback: Terminal_DeiconifyWindowSignalCallback): number
    connect_after(sigName: "deiconify-window", callback: Terminal_DeiconifyWindowSignalCallback): number
    emit(sigName: "deiconify-window", ...args: any[]): void
    connect(sigName: "encoding-changed", callback: Terminal_EncodingChangedSignalCallback): number
    connect_after(sigName: "encoding-changed", callback: Terminal_EncodingChangedSignalCallback): number
    emit(sigName: "encoding-changed", ...args: any[]): void
    connect(sigName: "eof", callback: Terminal_EofSignalCallback): number
    connect_after(sigName: "eof", callback: Terminal_EofSignalCallback): number
    emit(sigName: "eof", ...args: any[]): void
    connect(sigName: "hyperlink-hover-uri-changed", callback: Terminal_HyperlinkHoverUriChangedSignalCallback): number
    connect_after(sigName: "hyperlink-hover-uri-changed", callback: Terminal_HyperlinkHoverUriChangedSignalCallback): number
    emit(sigName: "hyperlink-hover-uri-changed", uri: string, bbox: Gdk.Rectangle, ...args: any[]): void
    connect(sigName: "icon-title-changed", callback: Terminal_IconTitleChangedSignalCallback): number
    connect_after(sigName: "icon-title-changed", callback: Terminal_IconTitleChangedSignalCallback): number
    emit(sigName: "icon-title-changed", ...args: any[]): void
    connect(sigName: "iconify-window", callback: Terminal_IconifyWindowSignalCallback): number
    connect_after(sigName: "iconify-window", callback: Terminal_IconifyWindowSignalCallback): number
    emit(sigName: "iconify-window", ...args: any[]): void
    connect(sigName: "increase-font-size", callback: Terminal_IncreaseFontSizeSignalCallback): number
    connect_after(sigName: "increase-font-size", callback: Terminal_IncreaseFontSizeSignalCallback): number
    emit(sigName: "increase-font-size", ...args: any[]): void
    connect(sigName: "lower-window", callback: Terminal_LowerWindowSignalCallback): number
    connect_after(sigName: "lower-window", callback: Terminal_LowerWindowSignalCallback): number
    emit(sigName: "lower-window", ...args: any[]): void
    connect(sigName: "maximize-window", callback: Terminal_MaximizeWindowSignalCallback): number
    connect_after(sigName: "maximize-window", callback: Terminal_MaximizeWindowSignalCallback): number
    emit(sigName: "maximize-window", ...args: any[]): void
    connect(sigName: "move-window", callback: Terminal_MoveWindowSignalCallback): number
    connect_after(sigName: "move-window", callback: Terminal_MoveWindowSignalCallback): number
    emit(sigName: "move-window", x: number, y: number, ...args: any[]): void
    connect(sigName: "paste-clipboard", callback: Terminal_PasteClipboardSignalCallback): number
    connect_after(sigName: "paste-clipboard", callback: Terminal_PasteClipboardSignalCallback): number
    emit(sigName: "paste-clipboard", ...args: any[]): void
    connect(sigName: "raise-window", callback: Terminal_RaiseWindowSignalCallback): number
    connect_after(sigName: "raise-window", callback: Terminal_RaiseWindowSignalCallback): number
    emit(sigName: "raise-window", ...args: any[]): void
    connect(sigName: "refresh-window", callback: Terminal_RefreshWindowSignalCallback): number
    connect_after(sigName: "refresh-window", callback: Terminal_RefreshWindowSignalCallback): number
    emit(sigName: "refresh-window", ...args: any[]): void
    connect(sigName: "resize-window", callback: Terminal_ResizeWindowSignalCallback): number
    connect_after(sigName: "resize-window", callback: Terminal_ResizeWindowSignalCallback): number
    emit(sigName: "resize-window", width: number, height: number, ...args: any[]): void
    connect(sigName: "restore-window", callback: Terminal_RestoreWindowSignalCallback): number
    connect_after(sigName: "restore-window", callback: Terminal_RestoreWindowSignalCallback): number
    emit(sigName: "restore-window", ...args: any[]): void
    connect(sigName: "selection-changed", callback: Terminal_SelectionChangedSignalCallback): number
    connect_after(sigName: "selection-changed", callback: Terminal_SelectionChangedSignalCallback): number
    emit(sigName: "selection-changed", ...args: any[]): void
    connect(sigName: "text-deleted", callback: Terminal_TextDeletedSignalCallback): number
    connect_after(sigName: "text-deleted", callback: Terminal_TextDeletedSignalCallback): number
    emit(sigName: "text-deleted", ...args: any[]): void
    connect(sigName: "text-inserted", callback: Terminal_TextInsertedSignalCallback): number
    connect_after(sigName: "text-inserted", callback: Terminal_TextInsertedSignalCallback): number
    emit(sigName: "text-inserted", ...args: any[]): void
    connect(sigName: "text-modified", callback: Terminal_TextModifiedSignalCallback): number
    connect_after(sigName: "text-modified", callback: Terminal_TextModifiedSignalCallback): number
    emit(sigName: "text-modified", ...args: any[]): void
    connect(sigName: "text-scrolled", callback: Terminal_TextScrolledSignalCallback): number
    connect_after(sigName: "text-scrolled", callback: Terminal_TextScrolledSignalCallback): number
    emit(sigName: "text-scrolled", delta: number, ...args: any[]): void
    connect(sigName: "window-title-changed", callback: Terminal_WindowTitleChangedSignalCallback): number
    connect_after(sigName: "window-title-changed", callback: Terminal_WindowTitleChangedSignalCallback): number
    emit(sigName: "window-title-changed", ...args: any[]): void

    // Class property signals of Vte-2.91.Vte.Terminal

    connect(sigName: "notify::allow-bold", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-bold", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-bold", ...args: any[]): void
    connect(sigName: "notify::allow-hyperlink", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-hyperlink", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allow-hyperlink", ...args: any[]): void
    connect(sigName: "notify::audible-bell", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audible-bell", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::audible-bell", ...args: any[]): void
    connect(sigName: "notify::backspace-binding", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backspace-binding", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backspace-binding", ...args: any[]): void
    connect(sigName: "notify::bold-is-bright", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bold-is-bright", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bold-is-bright", ...args: any[]): void
    connect(sigName: "notify::cell-height-scale", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-height-scale", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-height-scale", ...args: any[]): void
    connect(sigName: "notify::cell-width-scale", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-width-scale", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-width-scale", ...args: any[]): void
    connect(sigName: "notify::cjk-ambiguous-width", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cjk-ambiguous-width", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cjk-ambiguous-width", ...args: any[]): void
    connect(sigName: "notify::current-directory-uri", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-directory-uri", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-directory-uri", ...args: any[]): void
    connect(sigName: "notify::current-file-uri", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-file-uri", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-file-uri", ...args: any[]): void
    connect(sigName: "notify::cursor-blink-mode", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-blink-mode", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor-blink-mode", ...args: any[]): void
    connect(sigName: "notify::cursor-shape", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-shape", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor-shape", ...args: any[]): void
    connect(sigName: "notify::delete-binding", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::delete-binding", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::delete-binding", ...args: any[]): void
    connect(sigName: "notify::enable-bidi", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-bidi", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-bidi", ...args: any[]): void
    connect(sigName: "notify::enable-fallback-scrolling", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-fallback-scrolling", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-fallback-scrolling", ...args: any[]): void
    connect(sigName: "notify::enable-shaping", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-shaping", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-shaping", ...args: any[]): void
    connect(sigName: "notify::enable-sixel", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-sixel", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-sixel", ...args: any[]): void
    connect(sigName: "notify::encoding", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encoding", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::encoding", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-desc", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::font-scale", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-scale", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::font-scale", ...args: any[]): void
    connect(sigName: "notify::hyperlink-hover-uri", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hyperlink-hover-uri", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hyperlink-hover-uri", ...args: any[]): void
    connect(sigName: "notify::icon-title", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-title", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-title", ...args: any[]): void
    connect(sigName: "notify::input-enabled", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-enabled", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-enabled", ...args: any[]): void
    connect(sigName: "notify::pointer-autohide", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pointer-autohide", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pointer-autohide", ...args: any[]): void
    connect(sigName: "notify::pty", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pty", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pty", ...args: any[]): void
    connect(sigName: "notify::rewrap-on-resize", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rewrap-on-resize", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rewrap-on-resize", ...args: any[]): void
    connect(sigName: "notify::scroll-on-keystroke", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-on-keystroke", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scroll-on-keystroke", ...args: any[]): void
    connect(sigName: "notify::scroll-on-output", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-on-output", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scroll-on-output", ...args: any[]): void
    connect(sigName: "notify::scroll-unit-is-pixels", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-unit-is-pixels", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scroll-unit-is-pixels", ...args: any[]): void
    connect(sigName: "notify::scrollback-lines", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scrollback-lines", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scrollback-lines", ...args: any[]): void
    connect(sigName: "notify::text-blink-mode", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-blink-mode", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-blink-mode", ...args: any[]): void
    connect(sigName: "notify::window-title", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-title", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-title", ...args: any[]): void
    connect(sigName: "notify::word-char-exceptions", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::word-char-exceptions", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::word-char-exceptions", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xfill", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xfill", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xfill", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::yfill", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yfill", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yfill", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: Terminal, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Terminal extends Gtk.Widget {

    // Own properties of Vte-2.91.Vte.Terminal

    static name: string
    static $gtype: GObject.GType<Terminal>

    // Constructors of Vte-2.91.Vte.Terminal

    constructor(config?: Terminal_ConstructProps) 
    /**
     * Creates a new terminal widget.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new terminal widget.
     * @constructor 
     */
    static new(): Terminal
    _init(config?: Terminal_ConstructProps): void
}

interface CharAttributes {
}

class CharAttributes {

    // Own properties of Vte-2.91.Vte.CharAttributes

    static name: string
}

interface PtyClass {
}

abstract class PtyClass {

    // Own properties of Vte-2.91.Vte.PtyClass

    static name: string
}

interface Regex {

    // Owm methods of Vte-2.91.Vte.Regex

    /**
     * If the platform supports JITing, JIT compiles `regex`.
     * @param flags PCRE2 JIT flags, or 0
     */
    jit(flags: number): boolean
    /**
     * Increases the reference count of `regex` by one.
     */
    ref(): Regex
    /**
     * See man:pcre2api(3) and man:pcre2_substitute(3) for more information.
     * @param subject the subject string
     * @param replacement the replacement string
     * @param flags PCRE2 match flags
     */
    substitute(subject: string, replacement: string, flags: number): string
    /**
     * Decreases the reference count of `regex` by one, and frees `regex`
     * if the refcount reaches zero.
     */
    unref(): Regex
}

class Regex {

    // Own properties of Vte-2.91.Vte.Regex

    static name: string

    // Constructors of Vte-2.91.Vte.Regex

    /**
     * Compiles `pattern` into a regex for use as a match regex
     * with vte_terminal_match_add_regex() or
     * vte_terminal_event_check_regex_simple().
     * 
     * See man:pcre2pattern(3) for information
     * about the supported regex language.
     * 
     * The regex will be compiled using <literal>PCRE2_UTF</literal> and
     * possibly other flags, in addition to the flags supplied in `flags`.
     * @constructor 
     * @param pattern a regex pattern string
     * @param pattern_length the length of `pattern` in bytes, or -1 if the  string is NUL-terminated and the length is unknown
     * @param flags PCRE2 compile flags
     */
    static new_for_match(pattern: string, pattern_length: number, flags: number): Regex
    /**
     * Compiles `pattern` into a regex for use as a search regex
     * with vte_terminal_search_set_regex().
     * 
     * See man:pcre2pattern(3) for information
     * about the supported regex language.
     * 
     * The regex will be compiled using <literal>PCRE2_UTF</literal> and
     * possibly other flags, in addition to the flags supplied in `flags`.
     * @constructor 
     * @param pattern a regex pattern string
     * @param pattern_length the length of `pattern` in bytes, or -1 if the  string is NUL-terminated and the length is unknown
     * @param flags PCRE2 compile flags
     */
    static new_for_search(pattern: string, pattern_length: number, flags: number): Regex
}

interface TerminalClass {

    // Own fields of Vte-2.91.Vte.TerminalClass

    parent_class: Gtk.WidgetClass
    eof: (terminal: Terminal) => void
    child_exited: (terminal: Terminal, status: number) => void
    encoding_changed: (terminal: Terminal) => void
    char_size_changed: (terminal: Terminal, char_width: number, char_height: number) => void
    window_title_changed: (terminal: Terminal) => void
    icon_title_changed: (terminal: Terminal) => void
    selection_changed: (terminal: Terminal) => void
    contents_changed: (terminal: Terminal) => void
    cursor_moved: (terminal: Terminal) => void
    commit: (terminal: Terminal, text: string, size: number) => void
    deiconify_window: (terminal: Terminal) => void
    iconify_window: (terminal: Terminal) => void
    raise_window: (terminal: Terminal) => void
    lower_window: (terminal: Terminal) => void
    refresh_window: (terminal: Terminal) => void
    restore_window: (terminal: Terminal) => void
    maximize_window: (terminal: Terminal) => void
    resize_window: (terminal: Terminal, width: number, height: number) => void
    move_window: (terminal: Terminal, x: number, y: number) => void
    increase_font_size: (terminal: Terminal) => void
    decrease_font_size: (terminal: Terminal) => void
    text_modified: (terminal: Terminal) => void
    text_inserted: (terminal: Terminal) => void
    text_deleted: (terminal: Terminal) => void
    text_scrolled: (terminal: Terminal, delta: number) => void
    copy_clipboard: (terminal: Terminal) => void
    paste_clipboard: (terminal: Terminal) => void
    bell: (terminal: Terminal) => void
}

/**
 * All of these fields should be considered read-only, except for derived classes.
 * @record 
 */
abstract class TerminalClass {

    // Own properties of Vte-2.91.Vte.TerminalClass

    static name: string
}

interface TerminalClassPrivate {
}

class TerminalClassPrivate {

    // Own properties of Vte-2.91.Vte.TerminalClassPrivate

    static name: string
}

}
export default Vte;