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
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type Gdk from '@girs/gdk-4.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';

export namespace Vte {
    /**
     * Vte-4-2.91
     */

    /**
     * An enumeration type that can be used to specify how the terminal
     * uses extra allocated space.
     */

    /**
     * An enumeration type that can be used to specify how the terminal
     * uses extra allocated space.
     */
    export namespace Align {
        export const $gtype: GObject.GType<Align>;
    }

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

    /**
     * An enumerated type which can be used to indicate the cursor blink mode
     * for the terminal.
     */
    export namespace CursorBlinkMode {
        export const $gtype: GObject.GType<CursorBlinkMode>;
    }

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

    /**
     * An enumerated type which can be used to indicate what should the terminal
     * draw at the cursor position.
     */
    export namespace CursorShape {
        export const $gtype: GObject.GType<CursorShape>;
    }

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

    /**
     * An enumerated type which can be used to indicate which string the terminal
     * should send to an application when the user presses the Delete or Backspace
     * keys.
     */
    export namespace EraseBinding {
        export const $gtype: GObject.GType<EraseBinding>;
    }

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

    /**
     * An enumeration type that can be used to specify the format the selection
     * should be copied to the clipboard in.
     */
    export namespace Format {
        export const $gtype: GObject.GType<Format>;
    }

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
    class PtyError extends GLib.Error {
        static $gtype: GObject.GType<PtyError>;

        // Static fields

        /**
         * Obsolete. Deprecated: 0.42
         */
        static PTY_HELPER_FAILED: number;
        /**
         * failure when using PTY98 to allocate the PTY
         */
        static PTY98_FAILED: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Error domain for VTE PTY errors. Errors in this domain will be from the #VtePtyError
         * enumeration. See #GError for more information on error domains.
         */
        static quark(): GLib.Quark;
    }

    /**
     * An enum type for regex errors. In addition to the values listed above,
     * any PCRE2 error values may occur.
     */
    class RegexError extends GLib.Error {
        static $gtype: GObject.GType<RegexError>;

        // Static fields

        /**
         * The PCRE2 library was built without
         *   Unicode support which is required for VTE
         */
        static INCOMPATIBLE: number;
        /**
         * Regexes are not supported because VTE was
         *   built without PCRE2 support
         */
        static NOT_SUPPORTED: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * An enumerated type which can be used to indicate whether the terminal allows
     * the text contents to be blinked.
     */

    /**
     * An enumerated type which can be used to indicate whether the terminal allows
     * the text contents to be blinked.
     */
    export namespace TextBlinkMode {
        export const $gtype: GObject.GType<TextBlinkMode>;
    }

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

    /**
     * A flag type to determine how terminal contents should be written
     * to an output stream.
     */
    export namespace WriteFlags {
        export const $gtype: GObject.GType<WriteFlags>;
    }

    enum WriteFlags {
        /**
         * Write contents as UTF-8 text.  This is the default.
         */
        DEFAULT,
    }
    /**
     * The major version number of the VTE library
     * (e.g. in version 3.1.4 this is 3).
     */
    const MAJOR_VERSION: number;
    /**
     * The micro version number of the VTE library
     * (e.g. in version 3.1.4 this is 4).
     */
    const MICRO_VERSION: number;
    /**
     * The minor version number of the VTE library
     * (e.g. in version 3.1.4 this is 1).
     */
    const MINOR_VERSION: number;
    const REGEX_FLAGS_DEFAULT: number;
    /**
     * Use this as a spawn flag (together with flags from #GSpawnFlags) in
     * vte_pty_spawn_async().
     *
     * Normally, the spawned process inherits the environment from the parent
     * process; when this flag is used, only the environment variables passed
     * to vte_pty_spawn_async() etc. are passed to the child process.
     */
    const SPAWN_NO_PARENT_ENVV: number;
    /**
     * Use this as a spawn flag (together with flags from #GSpawnFlags) in
     * vte_pty_spawn_async().
     *
     * Prevents vte_pty_spawn_async() etc. from moving the newly created child
     * process to a systemd user scope.
     */
    const SPAWN_NO_SYSTEMD_SCOPE: number;
    /**
     * Use this as a spawn flag (together with flags from #GSpawnFlags) in
     * vte_pty_spawn_async().
     *
     * Requires vte_pty_spawn_async() etc. to move the newly created child
     * process to a systemd user scope; if that fails, the whole spawn fails.
     *
     * This is supported on Linux only.
     */
    const SPAWN_REQUIRE_SYSTEMD_SCOPE: number;
    const TEST_FLAGS_ALL: number;
    const TEST_FLAGS_NONE: number;
    /**
     * Queries whether the legacy encoding `encoding` is supported.
     *
     * If ICU support is not available, this function always returns %FALSE.
     *
     * Note that UTF-8 is always supported; you can select it by
     * passing %NULL to vte_terminal_set_encoding().
     * @param encoding the name of the legacy encoding
     * @returns %TRUE iff the legacy encoding @encoding is supported
     */
    function get_encoding_supported(encoding: string): boolean;
    /**
     * Gets the list of supported legacy encodings.
     *
     * If ICU support is not available, this returns an empty vector.
     * Note that UTF-8 is always supported; you can select it by
     * passing %NULL to vte_terminal_set_encoding().
     * @param include_aliases whether to include alias names
     * @returns the list of supported encodings; free with   g_strfreev()
     */
    function get_encodings(include_aliases: boolean): string[];
    /**
     * Gets features VTE was compiled with.
     * @returns flags from #VteFeatureFlags
     */
    function get_feature_flags(): FeatureFlags;
    /**
     * Gets a list of features vte was compiled with.
     * @returns a string with features
     */
    function get_features(): string;
    /**
     * Returns the major version of the VTE library at runtime.
     * Contrast this with %VTE_MAJOR_VERSION which represents
     * the version of the VTE library that the code was compiled
     * with.
     * @returns the major version
     */
    function get_major_version(): number;
    /**
     * Returns the micro version of the VTE library at runtime.
     * Contrast this with %VTE_MICRO_VERSION which represents
     * the version of the VTE library that the code was compiled
     * with.
     * @returns the micro version
     */
    function get_micro_version(): number;
    /**
     * Returns the minor version of the VTE library at runtime.
     * Contrast this with %VTE_MINOR_VERSION which represents
     * the version of the VTE library that the code was compiled
     * with.
     * @returns the minor version
     */
    function get_minor_version(): number;
    /**
     * Gets the user's shell, or %NULL. In the latter case, the
     * system default (usually "/bin/sh") should be used.
     * @returns a newly allocated string with the   user's shell, or %NULL
     */
    function get_user_shell(): string;
    /**
     * Error domain for VTE PTY errors. Errors in this domain will be from the #VtePtyError
     * enumeration. See #GError for more information on error domains.
     * @returns the error domain for VTE PTY errors
     */
    function pty_error_quark(): GLib.Quark;
    function regex_error_quark(): GLib.Quark;
    interface SelectionFunc {
        (terminal: Terminal, column: number, row: number): boolean;
    }
    interface TerminalSpawnAsyncCallback {
        (terminal: Terminal, pid: GLib.Pid, error: GLib.Error): void;
    }
    /**
     * An enumeration type for features.
     */

    /**
     * An enumeration type for features.
     */
    export namespace FeatureFlags {
        export const $gtype: GObject.GType<FeatureFlags>;
    }

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

    export namespace PtyFlags {
        export const $gtype: GObject.GType<PtyFlags>;
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
    namespace Pty {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::fd': (pspec: GObject.ParamSpec) => void;
            'notify::flags': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            fd: number;
            flags: PtyFlags;
        }
    }

    class Pty extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Pty>;

        // Properties

        /**
         * The file descriptor of the PTY master.
         */
        get fd(): number;
        /**
         * Flags.
         */
        get flags(): PtyFlags;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Pty.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Pty.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_foreign_sync(fd: number, cancellable?: Gio.Cancellable | null): Pty;

        static new_sync(flags: PtyFlags, cancellable?: Gio.Cancellable | null): Pty;

        // Signals

        connect<K extends keyof Pty.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pty.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Pty.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Pty.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Pty.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Pty.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        child_setup(): void;
        /**
         * Since 0.42 this is a no-op.
         */
        close(): void;
        get_fd(): number;
        /**
         * Reads the pseudo terminal's window size.
         *
         * If getting the window size failed, `error` will be set to a #GIOError.
         * @returns %TRUE on success, %FALSE on failure with @error filled in
         */
        get_size(): [boolean, number, number];
        /**
         * Attempts to resize the pseudo terminal's window size.  If successful, the
         * OS kernel will send <literal>SIGWINCH</literal> to the child process group.
         *
         * If setting the window size failed, `error` will be set to a #GIOError.
         * @param rows the desired number of rows
         * @param columns the desired number of columns
         * @returns %TRUE on success, %FALSE on failure with @error filled in
         */
        set_size(rows: number, columns: number): boolean;
        /**
         * Tells the kernel whether the terminal is UTF-8 or not, in case it can make
         * use of the info.  Linux 2.6.5 or so defines IUTF8 to make the line
         * discipline do multibyte backspace correctly.
         * @param utf8 whether or not the pty is in UTF-8 mode
         * @returns %TRUE on success, %FALSE on failure with @error filled in
         */
        set_utf8(utf8: boolean): boolean;
        /**
         * Like vte_pty_spawn_with_fds_async(), except that this function does not
         * allow passing file descriptors to the child process. See vte_pty_spawn_with_fds_async()
         * for more information.
         * @param working_directory the name of a directory the command should start   in, or %NULL to use the current working directory
         * @param argv child's argument vector
         * @param envv a list of environment   variables to be added to the environment before starting the process, or %NULL
         * @param spawn_flags flags from #GSpawnFlags
         * @param child_setup_data_destroy a #GDestroyNotify for @child_setup_data, or %NULL
         * @param timeout a timeout value in ms, -1 for the default timeout, or G_MAXINT to wait indefinitely
         * @param cancellable a #GCancellable, or %NULL
         */
        spawn_async(
            working_directory: string | null,
            argv: string[],
            envv: string[] | null,
            spawn_flags: GLib.SpawnFlags | null,
            child_setup_data_destroy: GLib.DestroyNotify | null,
            timeout: number,
            cancellable?: Gio.Cancellable | null,
        ): void;
        spawn_finish(result: Gio.AsyncResult): [boolean, GLib.Pid | null];
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
         * @param child_setup_data_destroy a #GDestroyNotify for @child_setup_data, or %NULL
         * @param timeout a timeout value in ms, -1 for the default timeout, or G_MAXINT to wait indefinitely
         * @param cancellable a #GCancellable, or %NULL
         */
        spawn_with_fds_async(
            working_directory: string | null,
            argv: string[],
            envv: string[] | null,
            fds: number[] | null,
            map_fds: number[] | null,
            spawn_flags: GLib.SpawnFlags | null,
            child_setup_data_destroy: GLib.DestroyNotify | null,
            timeout: number,
            cancellable?: Gio.Cancellable | null,
        ): void;

        // Inherited methods
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [description][iface`Gio`.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [description][iface`Gio`.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
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

    namespace Terminal {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            bell: () => void;
            'char-size-changed': (arg0: number, arg1: number) => void;
            'child-exited': (arg0: number) => void;
            commit: (arg0: string, arg1: number) => void;
            'contents-changed': () => void;
            'copy-clipboard': () => void;
            'current-directory-uri-changed': () => void;
            'current-file-uri-changed': () => void;
            'cursor-moved': () => void;
            'decrease-font-size': () => void;
            'deiconify-window': () => void;
            'encoding-changed': () => void;
            eof: () => void;
            'hyperlink-hover-uri-changed': (arg0: string, arg1: Gdk.Rectangle) => void;
            'icon-title-changed': () => void;
            'iconify-window': () => void;
            'increase-font-size': () => void;
            'lower-window': () => void;
            'maximize-window': () => void;
            'move-window': (arg0: number, arg1: number) => void;
            'paste-clipboard': () => void;
            'raise-window': () => void;
            'refresh-window': () => void;
            'resize-window': (arg0: number, arg1: number) => void;
            'restore-window': () => void;
            'selection-changed': () => void;
            'window-title-changed': () => void;
            'notify::allow-bold': (pspec: GObject.ParamSpec) => void;
            'notify::allow-hyperlink': (pspec: GObject.ParamSpec) => void;
            'notify::audible-bell': (pspec: GObject.ParamSpec) => void;
            'notify::backspace-binding': (pspec: GObject.ParamSpec) => void;
            'notify::bold-is-bright': (pspec: GObject.ParamSpec) => void;
            'notify::cell-height-scale': (pspec: GObject.ParamSpec) => void;
            'notify::cell-width-scale': (pspec: GObject.ParamSpec) => void;
            'notify::cjk-ambiguous-width': (pspec: GObject.ParamSpec) => void;
            'notify::current-directory-uri': (pspec: GObject.ParamSpec) => void;
            'notify::current-file-uri': (pspec: GObject.ParamSpec) => void;
            'notify::cursor-blink-mode': (pspec: GObject.ParamSpec) => void;
            'notify::cursor-shape': (pspec: GObject.ParamSpec) => void;
            'notify::delete-binding': (pspec: GObject.ParamSpec) => void;
            'notify::enable-bidi': (pspec: GObject.ParamSpec) => void;
            'notify::enable-fallback-scrolling': (pspec: GObject.ParamSpec) => void;
            'notify::enable-shaping': (pspec: GObject.ParamSpec) => void;
            'notify::enable-sixel': (pspec: GObject.ParamSpec) => void;
            'notify::encoding': (pspec: GObject.ParamSpec) => void;
            'notify::font-desc': (pspec: GObject.ParamSpec) => void;
            'notify::font-scale': (pspec: GObject.ParamSpec) => void;
            'notify::hyperlink-hover-uri': (pspec: GObject.ParamSpec) => void;
            'notify::icon-title': (pspec: GObject.ParamSpec) => void;
            'notify::input-enabled': (pspec: GObject.ParamSpec) => void;
            'notify::pointer-autohide': (pspec: GObject.ParamSpec) => void;
            'notify::pty': (pspec: GObject.ParamSpec) => void;
            'notify::rewrap-on-resize': (pspec: GObject.ParamSpec) => void;
            'notify::scroll-on-keystroke': (pspec: GObject.ParamSpec) => void;
            'notify::scroll-on-output': (pspec: GObject.ParamSpec) => void;
            'notify::scroll-unit-is-pixels': (pspec: GObject.ParamSpec) => void;
            'notify::scrollback-lines': (pspec: GObject.ParamSpec) => void;
            'notify::text-blink-mode': (pspec: GObject.ParamSpec) => void;
            'notify::window-title': (pspec: GObject.ParamSpec) => void;
            'notify::word-char-exceptions': (pspec: GObject.ParamSpec) => void;
            'notify::xalign': (pspec: GObject.ParamSpec) => void;
            'notify::xfill': (pspec: GObject.ParamSpec) => void;
            'notify::yalign': (pspec: GObject.ParamSpec) => void;
            'notify::yfill': (pspec: GObject.ParamSpec) => void;
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
            'notify::hadjustment': (pspec: GObject.ParamSpec) => void;
            'notify::hscroll-policy': (pspec: GObject.ParamSpec) => void;
            'notify::vadjustment': (pspec: GObject.ParamSpec) => void;
            'notify::vscroll-policy': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Widget.ConstructorProps,
                Gtk.Accessible.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.ConstraintTarget.ConstructorProps,
                Gtk.Scrollable.ConstructorProps {
            allow_bold: boolean;
            allowBold: boolean;
            allow_hyperlink: boolean;
            allowHyperlink: boolean;
            audible_bell: boolean;
            audibleBell: boolean;
            backspace_binding: EraseBinding;
            backspaceBinding: EraseBinding;
            bold_is_bright: boolean;
            boldIsBright: boolean;
            cell_height_scale: number;
            cellHeightScale: number;
            cell_width_scale: number;
            cellWidthScale: number;
            cjk_ambiguous_width: number;
            cjkAmbiguousWidth: number;
            current_directory_uri: string;
            currentDirectoryUri: string;
            current_file_uri: string;
            currentFileUri: string;
            cursor_blink_mode: CursorBlinkMode;
            cursorBlinkMode: CursorBlinkMode;
            cursor_shape: CursorShape;
            cursorShape: CursorShape;
            delete_binding: EraseBinding;
            deleteBinding: EraseBinding;
            enable_bidi: boolean;
            enableBidi: boolean;
            enable_fallback_scrolling: boolean;
            enableFallbackScrolling: boolean;
            enable_shaping: boolean;
            enableShaping: boolean;
            enable_sixel: boolean;
            enableSixel: boolean;
            encoding: string;
            font_desc: Pango.FontDescription;
            fontDesc: Pango.FontDescription;
            font_scale: number;
            fontScale: number;
            hyperlink_hover_uri: string;
            hyperlinkHoverUri: string;
            icon_title: string;
            iconTitle: string;
            input_enabled: boolean;
            inputEnabled: boolean;
            pointer_autohide: boolean;
            pointerAutohide: boolean;
            pty: Pty;
            rewrap_on_resize: boolean;
            rewrapOnResize: boolean;
            scroll_on_keystroke: boolean;
            scrollOnKeystroke: boolean;
            scroll_on_output: boolean;
            scrollOnOutput: boolean;
            scroll_unit_is_pixels: boolean;
            scrollUnitIsPixels: boolean;
            scrollback_lines: number;
            scrollbackLines: number;
            text_blink_mode: TextBlinkMode;
            textBlinkMode: TextBlinkMode;
            window_title: string;
            windowTitle: string;
            word_char_exceptions: string;
            wordCharExceptions: string;
            xalign: Align;
            xfill: boolean;
            yalign: Align;
            yfill: boolean;
        }
    }

    class Terminal extends Gtk.Widget implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Gtk.Scrollable {
        static $gtype: GObject.GType<Terminal>;

        // Properties

        /**
         * Controls whether or not the terminal will attempt to draw bold text,
         * by using a bold font variant.
         */
        get allow_bold(): boolean;
        set allow_bold(val: boolean);
        /**
         * Controls whether or not the terminal will attempt to draw bold text,
         * by using a bold font variant.
         */
        get allowBold(): boolean;
        set allowBold(val: boolean);
        /**
         * Controls whether or not hyperlinks (OSC 8 escape sequence) are recognized and displayed.
         */
        get allow_hyperlink(): boolean;
        set allow_hyperlink(val: boolean);
        /**
         * Controls whether or not hyperlinks (OSC 8 escape sequence) are recognized and displayed.
         */
        get allowHyperlink(): boolean;
        set allowHyperlink(val: boolean);
        /**
         * Controls whether or not the terminal will beep when the child outputs the
         * "bl" sequence.
         */
        get audible_bell(): boolean;
        set audible_bell(val: boolean);
        /**
         * Controls whether or not the terminal will beep when the child outputs the
         * "bl" sequence.
         */
        get audibleBell(): boolean;
        set audibleBell(val: boolean);
        /**
         * Controls what string or control sequence the terminal sends to its child
         * when the user presses the backspace key.
         */
        get backspace_binding(): EraseBinding;
        set backspace_binding(val: EraseBinding);
        /**
         * Controls what string or control sequence the terminal sends to its child
         * when the user presses the backspace key.
         */
        get backspaceBinding(): EraseBinding;
        set backspaceBinding(val: EraseBinding);
        /**
         * Whether the SGR 1 attribute also switches to the bright counterpart
         * of the first 8 palette colors, in addition to making them bold (legacy behavior)
         * or if SGR 1 only enables bold and leaves the color intact.
         */
        get bold_is_bright(): boolean;
        set bold_is_bright(val: boolean);
        /**
         * Whether the SGR 1 attribute also switches to the bright counterpart
         * of the first 8 palette colors, in addition to making them bold (legacy behavior)
         * or if SGR 1 only enables bold and leaves the color intact.
         */
        get boldIsBright(): boolean;
        set boldIsBright(val: boolean);
        /**
         * Scale factor for the cell height, to increase line spacing. (The font's height is not affected.)
         */
        get cell_height_scale(): number;
        set cell_height_scale(val: number);
        /**
         * Scale factor for the cell height, to increase line spacing. (The font's height is not affected.)
         */
        get cellHeightScale(): number;
        set cellHeightScale(val: number);
        /**
         * Scale factor for the cell width, to increase letter spacing. (The font's width is not affected.)
         */
        get cell_width_scale(): number;
        set cell_width_scale(val: number);
        /**
         * Scale factor for the cell width, to increase letter spacing. (The font's width is not affected.)
         */
        get cellWidthScale(): number;
        set cellWidthScale(val: number);
        /**
         * This setting controls whether ambiguous-width characters are narrow or wide.
         * (Note that when using a non-UTF-8 encoding set via vte_terminal_set_encoding(),
         * the width of ambiguous-width characters is fixed and determined by the encoding
         * itself.)
         *
         * This setting only takes effect the next time the terminal is reset, either
         * via escape sequence or with vte_terminal_reset().
         */
        get cjk_ambiguous_width(): number;
        set cjk_ambiguous_width(val: number);
        /**
         * This setting controls whether ambiguous-width characters are narrow or wide.
         * (Note that when using a non-UTF-8 encoding set via vte_terminal_set_encoding(),
         * the width of ambiguous-width characters is fixed and determined by the encoding
         * itself.)
         *
         * This setting only takes effect the next time the terminal is reset, either
         * via escape sequence or with vte_terminal_reset().
         */
        get cjkAmbiguousWidth(): number;
        set cjkAmbiguousWidth(val: number);
        /**
         * The current directory URI, or %NULL if unset.
         */
        get current_directory_uri(): string;
        /**
         * The current directory URI, or %NULL if unset.
         */
        get currentDirectoryUri(): string;
        /**
         * The current file URI, or %NULL if unset.
         */
        get current_file_uri(): string;
        /**
         * The current file URI, or %NULL if unset.
         */
        get currentFileUri(): string;
        /**
         * Sets whether or not the cursor will blink. Using %VTE_CURSOR_BLINK_SYSTEM
         * will use the #GtkSettings:gtk-cursor-blink setting.
         */
        get cursor_blink_mode(): CursorBlinkMode;
        set cursor_blink_mode(val: CursorBlinkMode);
        /**
         * Sets whether or not the cursor will blink. Using %VTE_CURSOR_BLINK_SYSTEM
         * will use the #GtkSettings:gtk-cursor-blink setting.
         */
        get cursorBlinkMode(): CursorBlinkMode;
        set cursorBlinkMode(val: CursorBlinkMode);
        /**
         * Controls the shape of the cursor.
         */
        get cursor_shape(): CursorShape;
        set cursor_shape(val: CursorShape);
        /**
         * Controls the shape of the cursor.
         */
        get cursorShape(): CursorShape;
        set cursorShape(val: CursorShape);
        /**
         * Controls what string or control sequence the terminal sends to its child
         * when the user presses the delete key.
         */
        get delete_binding(): EraseBinding;
        set delete_binding(val: EraseBinding);
        /**
         * Controls what string or control sequence the terminal sends to its child
         * when the user presses the delete key.
         */
        get deleteBinding(): EraseBinding;
        set deleteBinding(val: EraseBinding);
        /**
         * Controls whether or not the terminal will perform bidirectional text rendering.
         */
        get enable_bidi(): boolean;
        set enable_bidi(val: boolean);
        /**
         * Controls whether or not the terminal will perform bidirectional text rendering.
         */
        get enableBidi(): boolean;
        set enableBidi(val: boolean);
        get enable_fallback_scrolling(): boolean;
        set enable_fallback_scrolling(val: boolean);
        get enableFallbackScrolling(): boolean;
        set enableFallbackScrolling(val: boolean);
        /**
         * Controls whether or not the terminal will shape Arabic text.
         */
        get enable_shaping(): boolean;
        set enable_shaping(val: boolean);
        /**
         * Controls whether or not the terminal will shape Arabic text.
         */
        get enableShaping(): boolean;
        set enableShaping(val: boolean);
        /**
         * Controls whether SIXEL image support is enabled.
         */
        get enable_sixel(): boolean;
        set enable_sixel(val: boolean);
        /**
         * Controls whether SIXEL image support is enabled.
         */
        get enableSixel(): boolean;
        set enableSixel(val: boolean);
        /**
         * Controls the encoding the terminal will expect data from the child to
         * be encoded with.  For certain terminal types, applications executing in the
         * terminal can change the encoding.  The default is defined by the
         * application's locale settings.
         */
        get encoding(): string;
        set encoding(val: string);
        /**
         * Specifies the font used for rendering all text displayed by the terminal,
         * overriding any fonts set using gtk_widget_modify_font().  The terminal
         * will immediately attempt to load the desired font, retrieve its
         * metrics, and attempt to resize itself to keep the same number of rows
         * and columns.
         */
        get font_desc(): Pango.FontDescription;
        set font_desc(val: Pango.FontDescription);
        /**
         * Specifies the font used for rendering all text displayed by the terminal,
         * overriding any fonts set using gtk_widget_modify_font().  The terminal
         * will immediately attempt to load the desired font, retrieve its
         * metrics, and attempt to resize itself to keep the same number of rows
         * and columns.
         */
        get fontDesc(): Pango.FontDescription;
        set fontDesc(val: Pango.FontDescription);
        /**
         * The terminal's font scale.
         */
        get font_scale(): number;
        set font_scale(val: number);
        /**
         * The terminal's font scale.
         */
        get fontScale(): number;
        set fontScale(val: number);
        /**
         * The currently hovered hyperlink URI, or %NULL if unset.
         */
        get hyperlink_hover_uri(): string;
        /**
         * The currently hovered hyperlink URI, or %NULL if unset.
         */
        get hyperlinkHoverUri(): string;
        get icon_title(): string;
        get iconTitle(): string;
        /**
         * Controls whether the terminal allows user input. When user input is disabled,
         * key press and mouse button press and motion events are not sent to the
         * terminal's child.
         */
        get input_enabled(): boolean;
        set input_enabled(val: boolean);
        /**
         * Controls whether the terminal allows user input. When user input is disabled,
         * key press and mouse button press and motion events are not sent to the
         * terminal's child.
         */
        get inputEnabled(): boolean;
        set inputEnabled(val: boolean);
        /**
         * Controls the value of the terminal's mouse autohide setting.  When autohiding
         * is enabled, the mouse cursor will be hidden when the user presses a key and
         * shown when the user moves the mouse.
         */
        get pointer_autohide(): boolean;
        set pointer_autohide(val: boolean);
        /**
         * Controls the value of the terminal's mouse autohide setting.  When autohiding
         * is enabled, the mouse cursor will be hidden when the user presses a key and
         * shown when the user moves the mouse.
         */
        get pointerAutohide(): boolean;
        set pointerAutohide(val: boolean);
        /**
         * The PTY object for the terminal.
         */
        get pty(): Pty;
        set pty(val: Pty);
        /**
         * Controls whether or not the terminal will rewrap its contents, including
         * the scrollback buffer, whenever the terminal's width changes.
         */
        get rewrap_on_resize(): boolean;
        set rewrap_on_resize(val: boolean);
        /**
         * Controls whether or not the terminal will rewrap its contents, including
         * the scrollback buffer, whenever the terminal's width changes.
         */
        get rewrapOnResize(): boolean;
        set rewrapOnResize(val: boolean);
        /**
         * Controls whether or not the terminal will forcibly scroll to the bottom of
         * the viewable history when the user presses a key.  Modifier keys do not
         * trigger this behavior.
         */
        get scroll_on_keystroke(): boolean;
        set scroll_on_keystroke(val: boolean);
        /**
         * Controls whether or not the terminal will forcibly scroll to the bottom of
         * the viewable history when the user presses a key.  Modifier keys do not
         * trigger this behavior.
         */
        get scrollOnKeystroke(): boolean;
        set scrollOnKeystroke(val: boolean);
        /**
         * Controls whether or not the terminal will forcibly scroll to the bottom of
         * the viewable history when the new data is received from the child.
         */
        get scroll_on_output(): boolean;
        set scroll_on_output(val: boolean);
        /**
         * Controls whether or not the terminal will forcibly scroll to the bottom of
         * the viewable history when the new data is received from the child.
         */
        get scrollOnOutput(): boolean;
        set scrollOnOutput(val: boolean);
        /**
         * Controls whether the terminal's GtkAdjustment values unit is lines
         * or pixels. This can be enabled when the terminal is the child of a
         * GtkScrolledWindow to fix some bugs with its kinetic scrolling.
         */
        get scroll_unit_is_pixels(): boolean;
        set scroll_unit_is_pixels(val: boolean);
        /**
         * Controls whether the terminal's GtkAdjustment values unit is lines
         * or pixels. This can be enabled when the terminal is the child of a
         * GtkScrolledWindow to fix some bugs with its kinetic scrolling.
         */
        get scrollUnitIsPixels(): boolean;
        set scrollUnitIsPixels(val: boolean);
        /**
         * The length of the scrollback buffer used by the terminal.  The size of
         * the scrollback buffer will be set to the larger of this value and the number
         * of visible rows the widget can display, so 0 can safely be used to disable
         * scrollback.  Note that this setting only affects the normal screen buffer.
         * For terminal types which have an alternate screen buffer, no scrollback is
         * allowed on the alternate screen buffer.
         */
        get scrollback_lines(): number;
        set scrollback_lines(val: number);
        /**
         * The length of the scrollback buffer used by the terminal.  The size of
         * the scrollback buffer will be set to the larger of this value and the number
         * of visible rows the widget can display, so 0 can safely be used to disable
         * scrollback.  Note that this setting only affects the normal screen buffer.
         * For terminal types which have an alternate screen buffer, no scrollback is
         * allowed on the alternate screen buffer.
         */
        get scrollbackLines(): number;
        set scrollbackLines(val: number);
        /**
         * Controls whether or not the terminal will allow blinking text.
         */
        get text_blink_mode(): TextBlinkMode;
        set text_blink_mode(val: TextBlinkMode);
        /**
         * Controls whether or not the terminal will allow blinking text.
         */
        get textBlinkMode(): TextBlinkMode;
        set textBlinkMode(val: TextBlinkMode);
        /**
         * The terminal's title.
         */
        get window_title(): string;
        /**
         * The terminal's title.
         */
        get windowTitle(): string;
        /**
         * The set of characters which will be considered parts of a word
         * when doing word-wise selection, in addition to the default which only
         * considers alphanumeric characters part of a word.
         *
         * If %NULL, a built-in set is used.
         */
        get word_char_exceptions(): string;
        /**
         * The set of characters which will be considered parts of a word
         * when doing word-wise selection, in addition to the default which only
         * considers alphanumeric characters part of a word.
         *
         * If %NULL, a built-in set is used.
         */
        get wordCharExceptions(): string;
        /**
         * The horizontal alignment of `terminal` within its allocation.
         */
        get xalign(): Align;
        set xalign(val: Align);
        /**
         * The horizontal fillment of `terminal` within its allocation.
         */
        get xfill(): boolean;
        set xfill(val: boolean);
        /**
         * The vertical alignment of `terminal` within its allocation
         */
        get yalign(): Align;
        set yalign(val: Align);
        /**
         * The vertical fillment of `terminal` within its allocation
         */
        get yfill(): boolean;
        set yfill(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Terminal.SignalSignatures;

        // Fields

        widget: Gtk.Widget;

        // Constructors

        constructor(properties?: Partial<Terminal.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Terminal;

        // Signals

        connect<K extends keyof Terminal.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Terminal.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Terminal.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Terminal.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Terminal.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Terminal.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_bell(): void;
        vfunc_char_size_changed(char_width: number, char_height: number): void;
        vfunc_child_exited(status: number): void;
        vfunc_commit(text: string, size: number): void;
        vfunc_contents_changed(): void;
        /**
         * Places the selected text in the terminal in the #GDK_SELECTION_CLIPBOARD
         * selection.
         */
        vfunc_copy_clipboard(): void;
        vfunc_cursor_moved(): void;
        vfunc_decrease_font_size(): void;
        vfunc_deiconify_window(): void;
        vfunc_encoding_changed(): void;
        vfunc_eof(): void;
        vfunc_icon_title_changed(): void;
        vfunc_iconify_window(): void;
        vfunc_increase_font_size(): void;
        vfunc_lower_window(): void;
        vfunc_maximize_window(): void;
        vfunc_move_window(x: number, y: number): void;
        /**
         * Sends the contents of the #GDK_SELECTION_CLIPBOARD selection to the
         * terminal's child. It's called on paste menu item, or when
         * user presses Shift+Insert.
         */
        vfunc_paste_clipboard(): void;
        vfunc_raise_window(): void;
        vfunc_refresh_window(): void;
        vfunc_resize_window(width: number, height: number): void;
        vfunc_restore_window(): void;
        vfunc_selection_changed(): void;
        vfunc_window_title_changed(): void;

        // Methods

        /**
         * Places the selected text in the terminal in the #GDK_SELECTION_CLIPBOARD
         * selection.
         */
        copy_clipboard(): void;
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
        copy_clipboard_format(format: Format | null): void;
        /**
         * Places the selected text in the terminal in the #GDK_SELECTION_PRIMARY
         * selection.
         */
        copy_primary(): void;
        /**
         * Interprets `data` as if it were data received from a child process.
         * @param data a string in the terminal's current encoding
         */
        feed(data?: Uint8Array | null): void;
        /**
         * Sends a block of UTF-8 text to the child as if it were entered by the user
         * at the keyboard.
         * @param text data to send to the child
         */
        feed_child(text?: Uint8Array | null): void;
        /**
         * Sends a block of binary data to the child.
         * @param data data to send to the child
         */
        feed_child_binary(data?: Uint8Array | null): void;
        /**
         * Checks whether or not the terminal will attempt to draw bold text,
         * by using a bold font variant.
         * @returns %TRUE if bolding is enabled, %FALSE if not
         */
        get_allow_bold(): boolean;
        /**
         * Checks whether or not hyperlinks (OSC 8 escape sequence) are allowed.
         * @returns %TRUE if hyperlinks are enabled, %FALSE if not
         */
        get_allow_hyperlink(): boolean;
        /**
         * Checks whether or not the terminal will beep when the child outputs the
         * "bl" sequence.
         * @returns %TRUE if audible bell is enabled, %FALSE if not
         */
        get_audible_bell(): boolean;
        /**
         * Checks whether the SGR 1 attribute also switches to the bright counterpart
         * of the first 8 palette colors, in addition to making them bold (legacy behavior)
         * or if SGR 1 only enables bold and leaves the color intact.
         * @returns %TRUE if bold also enables bright, %FALSE if not
         */
        get_bold_is_bright(): boolean;
        get_cell_height_scale(): number;
        get_cell_width_scale(): number;
        get_char_height(): number;
        get_char_width(): number;
        /**
         * Returns whether ambiguous-width characters are narrow or wide.
         * (Note that when using a non-UTF-8 encoding set via vte_terminal_set_encoding(),
         * the width of ambiguous-width characters is fixed and determined by the encoding
         * itself.)
         * @returns 1 if ambiguous-width characters are narrow, or 2 if they are wide
         */
        get_cjk_ambiguous_width(): number;
        get_column_count(): number;
        get_current_directory_uri(): string | null;
        get_current_file_uri(): string | null;
        /**
         * Returns the currently set cursor blink mode.
         * @returns cursor blink mode.
         */
        get_cursor_blink_mode(): CursorBlinkMode;
        /**
         * Reads the location of the insertion cursor and returns it.  The row
         * coordinate is absolute.
         *
         * This method is unaware of BiDi. The returned column is logical column.
         */
        get_cursor_position(): [number, number];
        /**
         * Returns the currently set cursor shape.
         * @returns cursor shape.
         */
        get_cursor_shape(): CursorShape;
        /**
         * Checks whether the terminal performs bidirectional text rendering.
         * @returns %TRUE if BiDi is enabled, %FALSE if not
         */
        get_enable_bidi(): boolean;
        get_enable_fallback_scrolling(): boolean;
        /**
         * Checks whether the terminal shapes Arabic text.
         * @returns %TRUE if Arabic shaping is enabled, %FALSE if not
         */
        get_enable_shaping(): boolean;
        get_enable_sixel(): boolean;
        /**
         * Determines the name of the encoding in which the terminal expects data to be
         * encoded, or %NULL if UTF-8 is in use.
         * @returns the current encoding for the terminal
         */
        get_encoding(): string | null;
        /**
         * Queries the terminal for information about the fonts which will be
         * used to draw text in the terminal.  The actual font takes the font scale
         * into account, this is not reflected in the return value, the unscaled
         * font is returned.
         * @returns a #PangoFontDescription describing the font the terminal uses to render text at the default font scale of 1.0.
         */
        get_font(): Pango.FontDescription;
        get_font_scale(): number;
        /**
         * Checks if the terminal currently contains selected text.  Note that this
         * is different from determining if the terminal is the owner of any
         * #GtkClipboard items.
         * @returns %TRUE if part of the text in the terminal is selected.
         */
        get_has_selection(): boolean;
        get_icon_title(): string | null;
        /**
         * Returns whether the terminal allow user input.
         */
        get_input_enabled(): boolean;
        /**
         * Determines the value of the terminal's mouse autohide setting.  When
         * autohiding is enabled, the mouse cursor will be hidden when the user presses
         * a key and shown when the user moves the mouse.  This setting can be changed
         * using vte_terminal_set_mouse_autohide().
         * @returns %TRUE if autohiding is enabled, %FALSE if not
         */
        get_mouse_autohide(): boolean;
        /**
         * Returns the #VtePty of `terminal`.
         * @returns a #VtePty, or %NULL
         */
        get_pty(): Pty;
        /**
         * Checks whether or not the terminal will rewrap its contents upon resize.
         * @returns %TRUE if rewrapping is enabled, %FALSE if not
         */
        get_rewrap_on_resize(): boolean;
        get_row_count(): number;
        get_scroll_on_keystroke(): boolean;
        get_scroll_on_output(): boolean;
        get_scroll_unit_is_pixels(): boolean;
        get_scrollback_lines(): number;
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
         * @returns a newly allocated text string, or %NULL.
         */
        get_text(is_selected?: SelectionFunc | null): [string | null, CharAttributes[] | null];
        /**
         * Checks whether or not the terminal will allow blinking text.
         * @returns the blinking setting
         */
        get_text_blink_mode(): TextBlinkMode;
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
         * @returns a newly allocated text string, or %NULL.
         */
        get_text_include_trailing_spaces(is_selected: SelectionFunc | null): [string, CharAttributes[]];
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
         * @returns a newly allocated text string, or %NULL.
         */
        get_text_range(
            start_row: number,
            start_col: number,
            end_row: number,
            end_col: number,
            is_selected?: SelectionFunc | null,
        ): [string | null, CharAttributes[] | null];
        get_window_title(): string | null;
        /**
         * Returns the set of characters which will be considered parts of a word
         * when doing word-wise selection, in addition to the default which only
         * considers alphanumeric characters part of a word.
         *
         * If %NULL, a built-in set is used.
         * @returns a string, or %NULL
         */
        get_word_char_exceptions(): string | null;
        get_xalign(): Align;
        get_xfill(): boolean;
        get_yalign(): Align;
        get_yfill(): boolean;
        /**
         * Adds the regular expression `regex` to the list of matching expressions.  When the
         * user moves the mouse cursor over a section of displayed text which matches
         * this expression, the text will be highlighted.
         *
         * Note that `regex` should have been created using the <literal>PCRE2_MULTILINE</literal>
         * flag.
         * @param regex a #VteRegex
         * @param flags PCRE2 match flags, or 0
         * @returns an integer associated with this expression
         */
        match_add_regex(regex: Regex, flags: number): number;
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
         * @returns a newly allocated string which matches one of the previously   set regular expressions
         */
        match_check(column: number, row: number): [string | null, number];
        /**
         * Removes the regular expression which is associated with the given `tag` from
         * the list of expressions which the terminal will highlight when the user
         * moves the mouse cursor over matching text.
         * @param tag the tag of the regex to remove
         */
        match_remove(tag: number): void;
        /**
         * Clears the list of regular expressions the terminal uses to highlight text
         * when the user moves the mouse cursor.
         */
        match_remove_all(): void;
        /**
         * Sets which cursor the terminal will use if the pointer is over the pattern
         * specified by `tag`.  The terminal keeps a reference to `cursor`.
         * @param tag the tag of the regex which should use the specified cursor
         * @param cursor the #GdkCursor which the terminal should use when the pattern is   highlighted, or %NULL to use the standard cursor
         */
        match_set_cursor(tag: number, cursor?: Gdk.Cursor | null): void;
        /**
         * Sets which cursor the terminal will use if the pointer is over the pattern
         * specified by `tag`.
         * @param tag the tag of the regex which should use the specified cursor
         * @param cursor_name the name of the cursor
         */
        match_set_cursor_name(tag: number, cursor_name: string): void;
        /**
         * Sends the contents of the #GDK_SELECTION_CLIPBOARD selection to the
         * terminal's child. It's called on paste menu item, or when
         * user presses Shift+Insert.
         */
        paste_clipboard(): void;
        /**
         * Sends the contents of the #GDK_SELECTION_PRIMARY selection to the terminal's
         * child. The terminal will call also paste the
         * #GDK_SELECTION_PRIMARY selection when the user clicks with the the second
         * mouse button.
         */
        paste_primary(): void;
        /**
         * Sends `text` to the terminal's child as if retrived from the clipboard,
         * this differs from vte_terminal_feed_child() in that it may process
         * `text` before passing it to the child (e.g. apply bracketed mode)
         * @param text a string to paste
         */
        paste_text(text: string): void;
        /**
         * Creates a new #VtePty, sets the emulation property
         * from #VteTerminal:emulation, and sets the size using
         * `terminal'`s size.
         *
         * See vte_pty_new() for more information.
         * @param flags flags from #VtePtyFlags
         * @param cancellable a #GCancellable, or %NULL
         * @returns a new #VtePty
         */
        pty_new_sync(flags: PtyFlags | null, cancellable?: Gio.Cancellable | null): Pty;
        /**
         * Resets as much of the terminal's internal state as possible, discarding any
         * unprocessed input data, resetting character attributes, cursor state,
         * national character set state, status line, terminal modes (insert/delete),
         * selection state, and encoding.
         * @param clear_tabstops whether to reset tabstops
         * @param clear_history whether to empty the terminal's scrollback buffer
         */
        reset(clear_tabstops: boolean, clear_history: boolean): void;
        /**
         * Searches the next string matching the search regex set with
         * vte_terminal_search_set_regex().
         * @returns %TRUE if a match was found
         */
        search_find_next(): boolean;
        /**
         * Searches the previous string matching the search regex set with
         * vte_terminal_search_set_regex().
         * @returns %TRUE if a match was found
         */
        search_find_previous(): boolean;
        search_get_regex(): Regex;
        search_get_wrap_around(): boolean;
        /**
         * Sets the regex to search for. Unsets the search regex when passed %NULL.
         *
         * Note that `regex` should have been created using the
         * <literal>PCRE2_MULTILINE</literal> flag.
         * @param regex a #VteRegex, or %NULL
         * @param flags PCRE2 match flags, or 0
         */
        search_set_regex(regex: Regex | null, flags: number): void;
        /**
         * Sets whether search should wrap around to the beginning of the
         * terminal content when reaching its end.
         * @param wrap_around whether search should wrap
         */
        search_set_wrap_around(wrap_around: boolean): void;
        /**
         * Selects all text within the terminal (not including the scrollback buffer).
         */
        select_all(): void;
        /**
         * Controls whether or not the terminal will attempt to draw bold text,
         * by using a bold font variant.
         * @param allow_bold %TRUE if the terminal should attempt to draw bold text
         */
        set_allow_bold(allow_bold: boolean): void;
        /**
         * Controls whether or not hyperlinks (OSC 8 escape sequence) are allowed.
         * @param allow_hyperlink %TRUE if the terminal should allow hyperlinks
         */
        set_allow_hyperlink(allow_hyperlink: boolean): void;
        /**
         * Controls whether or not the terminal will beep when the child outputs the
         * "bl" sequence.
         * @param is_audible %TRUE if the terminal should beep
         */
        set_audible_bell(is_audible: boolean): void;
        /**
         * Modifies the terminal's backspace key binding, which controls what
         * string or control sequence the terminal sends to its child when the user
         * presses the backspace key.
         * @param binding a #VteEraseBinding for the backspace key
         */
        set_backspace_binding(binding: EraseBinding | null): void;
        /**
         * Sets whether the SGR 1 attribute also switches to the bright counterpart
         * of the first 8 palette colors, in addition to making them bold (legacy behavior)
         * or if SGR 1 only enables bold and leaves the color intact.
         * @param bold_is_bright %TRUE if bold should also enable bright
         */
        set_bold_is_bright(bold_is_bright: boolean): void;
        /**
         * Sets the terminal's cell height scale to `scale`.
         *
         * This can be used to increase the line spacing. (The font's height is not affected.)
         * Valid values go from 1.0 (default) to 2.0 ("double spacing").
         * @param scale the cell height scale
         */
        set_cell_height_scale(scale: number): void;
        /**
         * Sets the terminal's cell width scale to `scale`.
         *
         * This can be used to increase the letter spacing. (The font's width is not affected.)
         * Valid values go from 1.0 (default) to 2.0.
         * @param scale the cell width scale
         */
        set_cell_width_scale(scale: number): void;
        /**
         * This setting controls whether ambiguous-width characters are narrow or wide.
         * (Note that when using a non-UTF-8 encoding set via vte_terminal_set_encoding(),
         * the width of ambiguous-width characters is fixed and determined by the encoding
         * itself.)
         * @param width either 1 (narrow) or 2 (wide)
         */
        set_cjk_ambiguous_width(width: number): void;
        /**
         * Sets the background color for text which does not have a specific background
         * color assigned.  Only has effect when no background image is set and when
         * the terminal is not transparent.
         * @param background the new background color
         */
        set_color_background(background: Gdk.RGBA): void;
        /**
         * Sets the color used to draw bold text in the default foreground color.
         * If `bold` is %NULL then the default color is used.
         * @param bold the new bold color or %NULL
         */
        set_color_bold(bold?: Gdk.RGBA | null): void;
        /**
         * Sets the background color for text which is under the cursor.  If %NULL, text
         * under the cursor will be drawn with foreground and background colors
         * reversed.
         * @param cursor_background the new color to use for the text cursor, or %NULL
         */
        set_color_cursor(cursor_background?: Gdk.RGBA | null): void;
        /**
         * Sets the foreground color for text which is under the cursor.  If %NULL, text
         * under the cursor will be drawn with foreground and background colors
         * reversed.
         * @param cursor_foreground the new color to use for the text cursor, or %NULL
         */
        set_color_cursor_foreground(cursor_foreground?: Gdk.RGBA | null): void;
        /**
         * Sets the foreground color used to draw normal text.
         * @param foreground the new foreground color
         */
        set_color_foreground(foreground: Gdk.RGBA): void;
        /**
         * Sets the background color for text which is highlighted.  If %NULL,
         * it is unset.  If neither highlight background nor highlight foreground are set,
         * highlighted text (which is usually highlighted because it is selected) will
         * be drawn with foreground and background colors reversed.
         * @param highlight_background the new color to use for highlighted text, or %NULL
         */
        set_color_highlight(highlight_background?: Gdk.RGBA | null): void;
        /**
         * Sets the foreground color for text which is highlighted.  If %NULL,
         * it is unset.  If neither highlight background nor highlight foreground are set,
         * highlighted text (which is usually highlighted because it is selected) will
         * be drawn with foreground and background colors reversed.
         * @param highlight_foreground the new color to use for highlighted text, or %NULL
         */
        set_color_highlight_foreground(highlight_foreground?: Gdk.RGBA | null): void;
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
        set_colors(foreground?: Gdk.RGBA | null, background?: Gdk.RGBA | null, palette?: Gdk.RGBA[] | null): void;
        /**
         * Sets whether or not the cursor will blink. Using %VTE_CURSOR_BLINK_SYSTEM
         * will use the #GtkSettings::gtk-cursor-blink setting.
         * @param mode the #VteCursorBlinkMode to use
         */
        set_cursor_blink_mode(mode: CursorBlinkMode | null): void;
        /**
         * Sets the shape of the cursor drawn.
         * @param shape the #VteCursorShape to use
         */
        set_cursor_shape(shape: CursorShape | null): void;
        /**
         * Reset the terminal palette to reasonable compiled-in default color.
         */
        set_default_colors(): void;
        /**
         * Modifies the terminal's delete key binding, which controls what
         * string or control sequence the terminal sends to its child when the user
         * presses the delete key.
         * @param binding a #VteEraseBinding for the delete key
         */
        set_delete_binding(binding: EraseBinding | null): void;
        /**
         * Controls whether or not the terminal will perform bidirectional text rendering.
         * @param enable_bidi %TRUE to enable BiDi support
         */
        set_enable_bidi(enable_bidi: boolean): void;
        /**
         * Controls whether the terminal uses scroll events to scroll the history
         * if the event was not otherwise consumed by it.
         *
         * This function is rarely useful, except when the terminal is added to a
         * #GtkScrolledWindow, to perform kinetic scrolling (while vte itself does
         * not, yet, implement kinetic scrolling by itself).
         * @param enable whether to enable fallback scrolling
         */
        set_enable_fallback_scrolling(enable: boolean): void;
        /**
         * Controls whether or not the terminal will shape Arabic text.
         * @param enable_shaping %TRUE to enable Arabic shaping
         */
        set_enable_shaping(enable_shaping: boolean): void;
        /**
         * Set whether to enable SIXEL images.
         * @param enabled whether to enable SIXEL images
         */
        set_enable_sixel(enabled: boolean): void;
        /**
         * Changes the encoding the terminal will expect data from the child to
         * be encoded with.  For certain terminal types, applications executing in the
         * terminal can change the encoding. If `codeset` is %NULL, it uses "UTF-8".
         *
         * Note: Support for non-UTF-8 is deprecated and may get removed altogether.
         * Instead of this function, you should use a wrapper like luit(1) when
         * spawning the child process.
         * @param codeset target charset, or %NULL to use UTF-8
         * @returns %TRUE if the encoding could be changed to the specified one,  or %FALSE with @error set to %G_CONVERT_ERROR_NO_CONVERSION.
         */
        set_encoding(codeset?: string | null): boolean;
        /**
         * Sets the font used for rendering all text displayed by the terminal,
         * overriding any fonts set using gtk_widget_modify_font().  The terminal
         * will immediately attempt to load the desired font, retrieve its
         * metrics, and attempt to resize itself to keep the same number of rows
         * and columns.  The font scale is applied to the specified font.
         * @param font_desc a #PangoFontDescription for the desired font, or %NULL
         */
        set_font(font_desc?: Pango.FontDescription | null): void;
        /**
         * Sets the terminal's font scale to `scale`.
         * @param scale the font scale
         */
        set_font_scale(scale: number): void;
        /**
         * Enables or disables user input. When user input is disabled,
         * the terminal's child will not receive any key press, or mouse button
         * press or motion events sent to it.
         * @param enabled whether to enable user input
         */
        set_input_enabled(enabled: boolean): void;
        /**
         * Changes the value of the terminal's mouse autohide setting.  When autohiding
         * is enabled, the mouse cursor will be hidden when the user presses a key and
         * shown when the user moves the mouse.  This setting can be read using
         * vte_terminal_get_mouse_autohide().
         * @param setting whether the mouse pointer should autohide
         */
        set_mouse_autohide(setting: boolean): void;
        /**
         * Sets `pty` as the PTY to use in `terminal`.
         * Use %NULL to unset the PTY.
         * @param pty a #VtePty, or %NULL
         */
        set_pty(pty?: Pty | null): void;
        /**
         * Controls whether or not the terminal will rewrap its contents, including
         * the scrollback history, whenever the terminal's width changes.
         * @param rewrap %TRUE if the terminal should rewrap on resize
         */
        set_rewrap_on_resize(rewrap: boolean): void;
        /**
         * Controls whether or not the terminal will forcibly scroll to the bottom of
         * the viewable history when the user presses a key.  Modifier keys do not
         * trigger this behavior.
         * @param scroll whether the terminal should scroll on keystrokes
         */
        set_scroll_on_keystroke(scroll: boolean): void;
        /**
         * Controls whether or not the terminal will forcibly scroll to the bottom of
         * the viewable history when the new data is received from the child.
         * @param scroll whether the terminal should scroll on output
         */
        set_scroll_on_output(scroll: boolean): void;
        /**
         * Controls whether the terminal's scroll unit is lines or pixels.
         *
         * This function is rarely useful, except when the terminal is added to a
         * #GtkScrolledWindow.
         * @param enable whether to use pixels as scroll unit
         */
        set_scroll_unit_is_pixels(enable: boolean): void;
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
        set_scrollback_lines(lines: number): void;
        /**
         * Attempts to change the terminal's size in terms of rows and columns.  If
         * the attempt succeeds, the widget will resize itself to the proper size.
         * @param columns the desired number of columns
         * @param rows the desired number of rows
         */
        set_size(columns: number, rows: number): void;
        /**
         * Controls whether or not the terminal will allow blinking text.
         * @param text_blink_mode the #VteTextBlinkMode to use
         */
        set_text_blink_mode(text_blink_mode: TextBlinkMode | null): void;
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
        set_word_char_exceptions(exceptions: string): void;
        /**
         * Sets the horizontal alignment of `terminal` within its allocation.
         *
         * Note: %VTE_ALIGN_START_FILL is not supported, and will be treated
         *   like %VTE_ALIGN_START.
         * @param align alignment value from #VteAlign
         */
        set_xalign(align: Align | null): void;
        /**
         * Sets the horizontal fillment of `terminal` within its allocation.
         *
         * Note: %VTE_FILL_START_FILL is not supported, and will be treated
         *   like %VTE_FILL_START.
         * @param fill fillment value from #VteFill
         */
        set_xfill(fill: boolean): void;
        /**
         * Sets the vertical alignment of `terminal` within its allocation.
         * @param align alignment value from #VteAlign
         */
        set_yalign(align: Align | null): void;
        /**
         * Sets the vertical fillment of `terminal` within its allocation.
         * @param fill fillment value from #VteFill
         */
        set_yfill(fill: boolean): void;
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
         * @param child_setup_data_destroy a #GDestroyNotify for @child_setup_data, or %NULL
         * @param timeout a timeout value in ms, -1 for the default timeout, or G_MAXINT to wait indefinitely
         * @param cancellable a #GCancellable, or %NULL
         */
        spawn_async(
            pty_flags: PtyFlags | null,
            working_directory: string | null,
            argv: string[],
            envv: string[] | null,
            spawn_flags: GLib.SpawnFlags | null,
            child_setup_data_destroy: GLib.DestroyNotify | null,
            timeout: number,
            cancellable?: Gio.Cancellable | null,
        ): void;
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
         * @returns %TRUE on success, or %FALSE on error with @error filled in
         */
        spawn_sync(
            pty_flags: PtyFlags | null,
            working_directory: string | null,
            argv: string[],
            envv: string[] | null,
            spawn_flags: GLib.SpawnFlags | null,
            child_setup?: GLib.SpawnChildSetupFunc | null,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, GLib.Pid | null];
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
         * @param child_setup_data_destroy a #GDestroyNotify for @child_setup_data, or %NULL
         * @param timeout a timeout value in ms, -1 for the default timeout, or G_MAXINT to wait indefinitely
         * @param cancellable a #GCancellable, or %NULL
         */
        spawn_with_fds_async(
            pty_flags: PtyFlags | null,
            working_directory: string | null,
            argv: string[],
            envv: string[] | null,
            fds: number[] | null,
            map_fds: number[] | null,
            spawn_flags: GLib.SpawnFlags | null,
            child_setup_data_destroy: GLib.DestroyNotify | null,
            timeout: number,
            cancellable?: Gio.Cancellable | null,
        ): void;
        /**
         * Clears the current selection.
         */
        unselect_all(): void;
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
        watch_child(child_pid: GLib.Pid): void;
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
         * @returns %TRUE on success, %FALSE if there was an error
         */
        write_contents_sync(
            stream: Gio.OutputStream,
            flags: WriteFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;

        // Inherited properties
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessible_role(): Gtk.AccessibleRole;
        set accessible_role(val: Gtk.AccessibleRole);
        /**
         * The accessible role of the given `GtkAccessible` implementation.
         *
         * The accessible role cannot be changed once set.
         */
        get accessibleRole(): Gtk.AccessibleRole;
        set accessibleRole(val: Gtk.AccessibleRole);
        /**
         * Horizontal `GtkAdjustment` of the scrollable widget.
         *
         * This adjustment is shared between the scrollable widget and its parent.
         */
        get hadjustment(): Gtk.Adjustment;
        set hadjustment(val: Gtk.Adjustment);
        /**
         * Determines when horizontal scrolling should start.
         */
        get hscroll_policy(): Gtk.ScrollablePolicy;
        set hscroll_policy(val: Gtk.ScrollablePolicy);
        /**
         * Determines when horizontal scrolling should start.
         */
        get hscrollPolicy(): Gtk.ScrollablePolicy;
        set hscrollPolicy(val: Gtk.ScrollablePolicy);
        /**
         * Vertical `GtkAdjustment` of the scrollable widget.
         *
         * This adjustment is shared between the scrollable widget and its parent.
         */
        get vadjustment(): Gtk.Adjustment;
        set vadjustment(val: Gtk.Adjustment);
        /**
         * Determines when vertical scrolling should start.
         */
        get vscroll_policy(): Gtk.ScrollablePolicy;
        set vscroll_policy(val: Gtk.ScrollablePolicy);
        /**
         * Determines when vertical scrolling should start.
         */
        get vscrollPolicy(): Gtk.ScrollablePolicy;
        set vscrollPolicy(val: Gtk.ScrollablePolicy);

        // Inherited methods
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
         * This functionality can be overridden by `GtkAccessible`
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
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
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
         * for each child, and you want that object to implement the `GtkAccessible`
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
         * This function should be used by `GtkAccessible` implementations that
         * have a platform state but are not widgets. Widgets handle platform
         * states automatically.
         * @param state the platform state to update
         */
        update_platform_state(state: Gtk.AccessiblePlatformState | null): void;
        /**
         * Updates an array of accessible properties.
         *
         * This function should be called by `GtkWidget` types whenever an accessible
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
         * This function should be called by `GtkWidget` types whenever an accessible
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
         * This function should be called by `GtkWidget` types whenever an accessible
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
         */
        vfunc_get_accessible_parent(): Gtk.Accessible | null;
        /**
         * Retrieves the implementation for the given accessible object.
         */
        vfunc_get_at_context(): Gtk.ATContext | null;
        /**
         * Queries the coordinates and dimensions of this accessible
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get the bounds from an ignored
         * child widget.
         */
        vfunc_get_bounds(): [boolean, number, number, number, number];
        /**
         * Retrieves the first accessible child of an accessible object.
         */
        vfunc_get_first_accessible_child(): Gtk.Accessible | null;
        /**
         * Retrieves the next accessible sibling of an accessible object
         */
        vfunc_get_next_accessible_sibling(): Gtk.Accessible | null;
        /**
         * Queries a platform state, such as focus.
         *
         * This functionality can be overridden by `GtkAccessible`
         * implementations, e.g. to get platform state from an ignored
         * child widget, as is the case for `GtkText` wrappers.
         * @param state platform state to query
         */
        vfunc_get_platform_state(state: Gtk.AccessiblePlatformState): boolean;
        /**
         * Gets the ID of the `buildable` object.
         *
         * `GtkBuilder` sets the name based on the ID attribute
         * of the `<object>` tag used to construct the `buildable`.
         * @returns the ID of the buildable object
         */
        get_buildable_id(): string | null;
        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a `GtkBuilder`
         * @param child child to add
         * @param type kind of child or %NULL
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void;
        /**
         * Similar to gtk_buildable_parser_finished() but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a `GtkBuilder`
         * @param child child object or %NULL for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
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
         * @param builder `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        vfunc_custom_tag_end(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
            data?: any | null,
        ): void;
        /**
         * Called for each unknown element under `<child>`.
         * @param builder a `GtkBuilder` used to construct this object
         * @param child child object or %NULL for non-child tags
         * @param tagname name of tag
         */
        vfunc_custom_tag_start(
            builder: Gtk.Builder,
            child: GObject.Object | null,
            tagname: string,
        ): [boolean, Gtk.BuildableParser, any];
        /**
         * The getter corresponding to `set_id`. Implement this
         *   if you implement `set_id`.
         */
        vfunc_get_id(): string;
        /**
         * Retrieves the internal child called `childname` of the `buildable` object.
         * @param builder a `GtkBuilder`
         * @param childname name of child
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;
        /**
         * Called when a builder finishes the parsing
         *  of a UI definition. It is normally not necessary to implement this,
         *  unless you need to perform special cleanup actions. `GtkWindow` sets
         *  the `GtkWidget:visible` property here.
         * @param builder
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;
        /**
         * Sets a property of a buildable object.
         *  It is normally not necessary to implement this, g_object_set_property()
         *  is used by default. `GtkWindow` implements this to delay showing itself
         *  (i.e. setting the [property`Gtk`.Widget:visible] property) until the whole
         *  interface is created.
         * @param builder
         * @param name
         * @param value
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: GObject.Value | any): void;
        /**
         * Stores the id attribute given in the `GtkBuilder` UI definition.
         *   `GtkWidget` stores the name as object data. Implement this method if your
         *   object has some notion of “ID” and it makes sense to map the XML id
         *   attribute to it.
         * @param id
         */
        vfunc_set_id(id: string): void;
        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable.
         *
         * An example for this would be treeview headers. GTK can use
         * this information to display overlaid graphics, like the
         * overshoot indication, at the right position.
         * @returns %TRUE if @border has been set
         */
        get_border(): [boolean, Gtk.Border];
        /**
         * Retrieves the `GtkAdjustment` used for horizontal scrolling.
         * @returns horizontal `GtkAdjustment`.
         */
        get_hadjustment(): Gtk.Adjustment | null;
        /**
         * Gets the horizontal `GtkScrollablePolicy`.
         * @returns The horizontal `GtkScrollablePolicy`.
         */
        get_hscroll_policy(): Gtk.ScrollablePolicy;
        /**
         * Retrieves the `GtkAdjustment` used for vertical scrolling.
         * @returns vertical `GtkAdjustment`.
         */
        get_vadjustment(): Gtk.Adjustment | null;
        /**
         * Gets the vertical `GtkScrollablePolicy`.
         * @returns The vertical `GtkScrollablePolicy`.
         */
        get_vscroll_policy(): Gtk.ScrollablePolicy;
        /**
         * Sets the horizontal adjustment of the `GtkScrollable`.
         * @param hadjustment a `GtkAdjustment`
         */
        set_hadjustment(hadjustment?: Gtk.Adjustment | null): void;
        /**
         * Sets the `GtkScrollablePolicy`.
         *
         * The policy determines whether horizontal scrolling should start
         * below the minimum width or below the natural width.
         * @param policy the horizontal `GtkScrollablePolicy`
         */
        set_hscroll_policy(policy: Gtk.ScrollablePolicy | null): void;
        /**
         * Sets the vertical adjustment of the `GtkScrollable`.
         * @param vadjustment a `GtkAdjustment`
         */
        set_vadjustment(vadjustment?: Gtk.Adjustment | null): void;
        /**
         * Sets the `GtkScrollablePolicy`.
         *
         * The policy determines whether vertical scrolling should start
         * below the minimum height or below the natural height.
         * @param policy the vertical `GtkScrollablePolicy`
         */
        set_vscroll_policy(policy: Gtk.ScrollablePolicy | null): void;
        /**
         * Returns the size of a non-scrolling border around the
         * outside of the scrollable.
         *
         * An example for this would be treeview headers. GTK can use
         * this information to display overlaid graphics, like the
         * overshoot indication, at the right position.
         */
        vfunc_get_border(): [boolean, Gtk.Border];
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

    class CharAttributes {
        static $gtype: GObject.GType<CharAttributes>;

        // Constructors

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;
    }

    type PtyClass = typeof Pty;
    class Regex {
        static $gtype: GObject.GType<Regex>;

        // Constructors

        constructor(pattern: string, pattern_length: number, flags: number);
        _init(...args: any[]): void;

        static new_for_match(pattern: string, pattern_length: number, flags: number): Regex;

        static new_for_search(pattern: string, pattern_length: number, flags: number): Regex;

        // Methods

        /**
         * If the platform supports JITing, JIT compiles `regex`.
         * @param flags PCRE2 JIT flags, or 0
         * @returns %TRUE if JITing succeeded (or PCRE2 was built without   JIT support), or %FALSE with @error filled in
         */
        jit(flags: number): boolean;
        /**
         * Increases the reference count of `regex` by one.
         * @returns @regex
         */
        ref(): Regex;
        /**
         * See man:pcre2api(3) and man:pcre2_substitute(3) for more information.
         * @param subject the subject string
         * @param replacement the replacement string
         * @param flags PCRE2 match flags
         * @returns the substituted string, or %NULL   if an error occurred
         */
        substitute(subject: string, replacement: string, flags: number): string;
        /**
         * Decreases the reference count of `regex` by one, and frees `regex`
         * if the refcount reaches zero.
         * @returns %NULL
         */
        unref(): Regex;
    }

    type TerminalClass = typeof Terminal;
    abstract class TerminalClassPrivate {
        static $gtype: GObject.GType<TerminalClassPrivate>;

        // Constructors

        _init(...args: any[]): void;
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

export default Vte;

// END
