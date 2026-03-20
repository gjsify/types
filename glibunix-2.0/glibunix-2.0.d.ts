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
import type GLib from '@girs/glib-2.0';
import type GObject from '@girs/gobject-2.0';

export namespace GLibUnix {
    /**
     * GLibUnix-2.0
     */

    /**
     * Mnemonic constants for the ends of a Unix pipe.
     * @gir-type Enum
     * @since 2.80
     */
    enum PipeEnd {
        /**
         * The readable file descriptor 0
         */
        READ,
        /**
         * The writable file descriptor 1
         */
        WRITE,
    }

    /**
     * Close every file descriptor equal to or greater than `lowfd`.
     *
     * Typically `lowfd` will be 3, to leave standard input, standard output
     * and standard error open.
     *
     * This is the same as Linux `close_range (lowfd, ~0U, 0)`,
     * but portable to other OSs and to older versions of Linux.
     * Equivalently, it is the same as BSD `closefrom (lowfd)`, but portable,
     * and async-signal-safe on all OSs.
     *
     * This function is async-signal safe, making it safe to call from a
     * signal handler or a {@link GLib.SpawnChildSetupFunc}, as long as `lowfd` is
     * non-negative.
     * See [`signal(7)`](man:signal(7)) and
     * [`signal-safety(7)`](man:signal-safety(7)) for more details.
     * @param lowfd Minimum fd to close, which must be non-negative
     * @returns 0 on success, -1 with errno set on error
     * @since 2.80
     */
    function closefrom(lowfd: number): number;
    function error_quark(): GLib.Quark;
    /**
     * Sets a function to be called when the IO condition, as specified by
     * `condition` becomes true for `fd`.
     *
     * This is the same as `g_unix_fd_add()`, except that it allows you to
     * specify a non-default priority and a provide a {@link GLib.DestroyNotify} for
     * `user_data`.
     * @param priority the priority of the source
     * @param fd a file descriptor
     * @param condition IO conditions to watch for on `fd`
     * @param _function a {@link GLibUnix.FDSourceFunc}
     * @returns the ID (greater than 0) of the event source
     * @since 2.36
     */
    function fd_add_full(
        priority: number,
        fd: number,
        condition: GLib.IOCondition | null,
        _function: FDSourceFunc,
    ): number;
    /**
     * Queries the file path for the given FD opened by the current process.
     * @param fd The file descriptor to query.
     * @returns The file path, or `NULL` on error
     * @since 2.88
     */
    function fd_query_path(fd: number): string;
    /**
     * Creates a {@link GLib.Source} to watch for a particular I/O condition on a file
     * descriptor.
     *
     * The source will never close the `fd` — you must do it yourself.
     *
     * Any callback attached to the returned {@link GLib.Source} must have type
     * {@link GLibUnix.FDSourceFunc}.
     * @param fd a file descriptor
     * @param condition I/O conditions to watch for on `fd`
     * @returns the newly created {@link GLib.Source}
     * @since 2.36
     */
    function fd_source_new(fd: number, condition: GLib.IOCondition | null): GLib.Source;
    /**
     * Mark every file descriptor equal to or greater than `lowfd` to be closed
     * at the next `execve()` or similar, as if via the `FD_CLOEXEC` flag.
     *
     * Typically `lowfd` will be 3, to leave standard input, standard output
     * and standard error open after exec.
     *
     * This is the same as Linux `close_range (lowfd, ~0U, CLOSE_RANGE_CLOEXEC)`,
     * but portable to other OSs and to older versions of Linux.
     *
     * This function is async-signal safe, making it safe to call from a
     * signal handler or a {@link GLib.SpawnChildSetupFunc}, as long as `lowfd` is
     * non-negative.
     * See [`signal(7)`](man:signal(7)) and
     * [`signal-safety(7)`](man:signal-safety(7)) for more details.
     * @param lowfd Minimum fd to act on, which must be non-negative
     * @returns 0 on success, -1 with errno set on error
     * @since 2.80
     */
    function fdwalk_set_cloexec(lowfd: number): number;
    /**
     * Get the `passwd` file entry for the given `user_name` using `getpwnam_r()`.
     * This can fail if the given `user_name` doesn’t exist.
     *
     * The returned `struct passwd` has been allocated using `g_malloc()` and should
     * be freed using `g_free()`. The strings referenced by the returned struct are
     * included in the same allocation, so are valid until the `struct passwd` is
     * freed.
     *
     * This function is safe to call from multiple threads concurrently.
     *
     * You will need to include `pwd.h` to get the definition of `struct passwd`.
     * @param user_name the username to get the passwd file entry for
     * @returns passwd entry, or `null` on error; free the returned    value with `g_free()`
     * @since 2.64
     */
    function get_passwd_entry(user_name: string): any | null;
    /**
     * Similar to the UNIX `pipe()` call, but on modern systems like Linux
     * uses the `pipe2()` system call, which atomically creates a pipe with
     * the configured flags.
     *
     * As of GLib 2.78, the supported flags are `O_CLOEXEC`/`FD_CLOEXEC` (see below)
     * and `O_NONBLOCK`. Prior to GLib 2.78, only `FD_CLOEXEC` was supported — if
     * you wanted to configure `O_NONBLOCK` then that had to be done separately with
     * `fcntl()`.
     *
     * Since GLib 2.80, the constants {@link GLibUnix.PipeEnd.READ} and
     * {@link GLibUnix.PipeEnd.WRITE} can be used as mnemonic indexes in `fds`.
     *
     * It is a programmer error to call this function with unsupported flags, and a
     * critical warning will be raised.
     *
     * As of GLib 2.78, it is preferred to pass `O_CLOEXEC` in, rather than
     * `FD_CLOEXEC`, as that matches the underlying `pipe()` API more closely. Prior
     * to 2.78, only `FD_CLOEXEC` was supported. Support for `FD_CLOEXEC` may be
     * deprecated and removed in future.
     * @param fds Array of two integers
     * @param flags Bitfield of file descriptor flags, as for `fcntl()`
     * @returns `true` on success, `false` if not (and errno will be set).
     * @since 2.30
     */
    function open_pipe(fds: number[], flags: number): boolean;
    /**
     * Control the non-blocking state of the given file descriptor,
     * according to `nonblock`. On most systems this uses `O_NONBLOCK`, but
     * on some older ones may use `O_NDELAY`.
     * @param fd A file descriptor
     * @param nonblock If `true`, set the descriptor to be non-blocking
     * @returns `true` if successful
     * @since 2.30
     */
    function set_fd_nonblocking(fd: number, nonblock: boolean): boolean;
    /**
     * A convenience function for `g_unix_signal_source_new()`, which
     * attaches to the default {@link GLib.MainContext}.  You can remove the watch
     * using `g_source_remove()`.
     * @param priority the priority of the signal source. Typically this will be in            the range between `G_PRIORITY_DEFAULT` and `G_PRIORITY_HIGH`.
     * @param signum Signal number
     * @param handler Callback
     * @returns An ID (greater than 0) for the event source
     * @since 2.30
     */
    function signal_add(priority: number, signum: number, handler: GLib.SourceFunc): number;
    /**
     * Create a {@link GLib.Source} that will be dispatched upon delivery of the UNIX
     * signal `signum`.  In GLib versions before 2.36, only `SIGHUP`, `SIGINT`,
     * `SIGTERM` can be monitored.  In GLib 2.36, `SIGUSR1` and `SIGUSR2`
     * were added. In GLib 2.54, `SIGWINCH` was added.
     *
     * Note that unlike the UNIX default, all sources which have created a
     * watch will be dispatched, regardless of which underlying thread
     * invoked `g_unix_signal_source_new()`.
     *
     * For example, an effective use of this function is to handle `SIGTERM`
     * cleanly; flushing any outstanding files, and then calling
     * `g_main_loop_quit()`.  It is not safe to do any of this from a regular
     * UNIX signal handler; such a handler may be invoked while `malloc()` or
     * another library function is running, causing reentrancy issues if the
     * handler attempts to use those functions.  None of the GLib/GObject
     * API is safe against this kind of reentrancy.
     *
     * The interaction of this source when combined with native UNIX
     * functions like `sigprocmask()` is not defined.
     *
     * The source will not initially be associated with any {@link GLib.MainContext}
     * and must be added to one with `g_source_attach()` before it will be
     * executed.
     * @param signum A signal number
     * @returns A newly created {@link GLib.Source}
     * @since 2.30
     */
    function signal_source_new(signum: number): GLib.Source;
    /**
     * @gir-type Callback
     */
    interface FDSourceFunc {
        (fd: number, condition: GLib.IOCondition): boolean;
    }
    /**
     * A Unix pipe. The advantage of this type over `int[2]` is that it can
     * be closed automatically when it goes out of scope, using `g_auto(GUnixPipe)`,
     * on compilers that support that feature.
     * @gir-type Struct
     * @since 2.80
     */
    class Pipe {
        static $gtype: GObject.GType<Pipe>;

        // Fields

        fds: number[];

        // Constructors

        constructor(
            properties?: Partial<{
                fds: number[];
            }>,
        );
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

export default GLibUnix;

// END
