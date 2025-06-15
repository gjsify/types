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
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GSystem {
    /**
     * GSystem-1.0
     */

    /**
     * Flags to define the behaviour of the standard input/output/error of
     * a #GSSubprocess.
     */

    /**
     * Flags to define the behaviour of the standard input/output/error of
     * a #GSSubprocess.
     */
    export namespace SubprocessStreamDisposition {
        export const $gtype: GObject.GType<SubprocessStreamDisposition>;
    }

    enum SubprocessStreamDisposition {
        /**
         * Redirect to operating system's null output stream
         */
        NULL,
        /**
         * Keep the stream from the parent process
         */
        INHERIT,
        /**
         * Open a private unidirectional channel between the processes
         */
        PIPE,
        /**
         * Only applicable to standard error; causes it to be merged with standard output
         */
        STDERR_MERGE,
    }
    /**
     * Load all extended attributes for the file named `name` residing in
     * directory `dfd`.
     * @param dfd Parent directory file descriptor
     * @param name File name
     * @param cancellable Cancellable
     */
    function dfd_and_name_get_all_xattrs(
        dfd: number,
        name: string,
        cancellable?: Gio.Cancellable | null,
    ): [boolean, GLib.Variant];
    function dfd_and_name_set_all_xattrs(
        dfd: number,
        name: string,
        xattrs: GLib.Variant,
        cancellable?: Gio.Cancellable | null,
    ): boolean;
    function dirfd_iterator_clear(dfd_iter: DirFdIterator): void;
    function dirfd_iterator_init_at(dfd: number, path: string, follow: boolean, dfd_iter: DirFdIterator): boolean;
    function dirfd_iterator_init_take_fd(dfd: number, dfd_iter: DirFdIterator): boolean;
    /**
     * Read all extended attributes from `fd` in a canonical sorted order, and
     * set `out_xattrs` with the result.
     *
     * If the filesystem does not support extended attributes, `out_xattrs`
     * will have 0 elements, and this function will return successfully.
     * @param fd a file descriptor
     * @param cancellable Cancellable
     */
    function fd_get_all_xattrs(fd: number, cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant];
    /**
     * For each attribute in `xattrs,` set its value on the file or
     * directory referred to by `fd`.  This function does not remove any
     * attributes not in `xattrs`.
     * @param fd File descriptor
     * @param xattrs Extended attributes
     * @param cancellable Cancellable
     */
    function fd_set_all_xattrs(fd: number, xattrs: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
    /**
     * Merely wraps UNIX chmod().
     * @param path Path to file
     * @param mode UNIX mode
     * @param cancellable a #GCancellable
     * @returns %TRUE on success, %FALSE on error
     */
    function file_chmod(path: Gio.File, mode: number, cancellable?: Gio.Cancellable | null): boolean;
    /**
     * Merely wraps UNIX chown().
     * @param path Path to file
     * @param owner UNIX owner
     * @param group UNIX group
     * @param cancellable a #GCancellable
     * @returns %TRUE on success, %FALSE on error
     */
    function file_chown(path: Gio.File, owner: number, group: number, cancellable?: Gio.Cancellable | null): boolean;
    /**
     * Like g_file_create(), except this function allows specifying the
     * access mode.  This allows atomically creating private files.
     * @param file Path to non-existent file
     * @param mode Unix access permissions
     * @param cancellable a #GCancellable
     */
    function file_create(
        file: Gio.File,
        mode: number,
        cancellable?: Gio.Cancellable | null,
    ): [boolean, Gio.OutputStream | null];
    /**
     * Like g_file_make_directory(), except does not throw an error if the
     * directory already exists.
     * @param dir Path to create as directory
     * @param with_parents Also create parent directories
     * @param cancellable a #GCancellable
     */
    function file_ensure_directory(dir: Gio.File, with_parents: boolean, cancellable?: Gio.Cancellable | null): boolean;
    /**
     * Wraps UNIX mkdir() function with support for `cancellable,` and
     * uses `error` instead of errno.
     * @param dir Path to create as directory
     * @param mode Create directory with these permissions
     * @param cancellable a #GCancellable
     */
    function file_ensure_directory_mode(dir: Gio.File, mode: number, cancellable?: Gio.Cancellable | null): boolean;
    /**
     * This is a version of g_file_enumerator_next_file() that's easier to
     * use correctly from C programs.  With g_file_enumerator_next_file(),
     * the gboolean return value signifies "end of iteration or error", which
     * requires allocation of a temporary #GError.
     *
     * In contrast, with this function, a %FALSE return from
     * gs_file_enumerator_iterate() <emphasis>always</emphasis> means
     * "error".  End of iteration is signaled by `out_info` being %NULL.
     *
     * Another crucial difference is that the references for `out_info` and
     * `out_child` are owned by `direnum` (they are cached as hidden
     * properties).  You must not unref them in your own code.  This makes
     * memory management significantly easier for C code in combination
     * with loops.
     *
     * Finally, this function optionally allows retrieving a #GFile as
     * well.
     *
     * The code pattern for correctly using gs_file_enumerator_iterate() from C
     * is:
     *
     *
     * ```
     * direnum = g_file_enumerate_children (file, ...);
     * while (TRUE)
     *   {
     *     GFileInfo *info;
     *     if (!gs_file_enumerator_iterate (direnum, &info, NULL, cancellable, error))
     *       goto out;
     *     if (!info)
     *       break;
     *     ... do stuff with "info"; do not unref it! ...
     *   }
     *
     * out:
     *   g_object_unref (direnum); // Note: frees the last `info`
     * ```
     *
     * @param direnum an open #GFileEnumerator
     * @param cancellable a #GCancellable
     */
    function file_enumerator_iterate(
        direnum: Gio.FileEnumerator,
        cancellable?: Gio.Cancellable | null,
    ): [boolean, Gio.FileInfo | null, Gio.File | null];
    /**
     * Read all extended attributes of `f` in a canonical sorted order, and
     * set `out_xattrs` with the result.
     *
     * If the filesystem does not support extended attributes, `out_xattrs`
     * will have 0 elements, and this function will return successfully.
     * @param f a #GFile
     * @param cancellable Cancellable
     */
    function file_get_all_xattrs(f: Gio.File, cancellable?: Gio.Cancellable | null): [boolean, GLib.Variant];
    /**
     * Like g_file_get_basename(), but returns a constant copy so callers
     * don't need to free the result.
     * @param file
     */
    function file_get_basename_cached(file: Gio.File): string;
    /**
     * Like g_file_get_path(), but returns a constant copy so callers
     * don't need to free the result.
     * @param file
     */
    function file_get_path_cached(file: Gio.File): string;
    /**
     * Like gs_file_get_relative_path(), but does not mandate that
     * the two files have any parent in common. This function will
     * instead insert "../" where appropriate.
     * @param one The first #GFile
     * @param two The second #GFile
     * @returns The relative path between the two.
     */
    function file_get_relpath(one: Gio.File, two: Gio.File): string;
    /**
     * Merely wraps UNIX lchown().
     * @param path Path to file
     * @param owner UNIX owner
     * @param group UNIX group
     * @param cancellable a #GCancellable
     * @returns %TRUE on success, %FALSE on error
     */
    function file_lchown(path: Gio.File, owner: number, group: number, cancellable?: Gio.Cancellable | null): boolean;
    /**
     * First tries to use the UNIX link() call, but if the files are on
     * separate devices, fall back to copying via g_file_copy().
     *
     * The given `flags` have different semantics than those documented
     * when hardlinking is used.  Specifically, both
     * #G_FILE_COPY_TARGET_DEFAULT_PERMS and #G_FILE_COPY_BACKUP are not
     * supported.  #G_FILE_COPY_NOFOLLOW_SYMLINKS treated as if it was
     * always given - if you want to follow symbolic links, you will need
     * to resolve them manually.
     *
     * Beware - do not use this function if `src` may be modified, and it's
     * undesirable for the changes to also be reflected in `dest`.  The
     * best use of this function is in the case where `src` and `dest` are
     * read-only, or where `src` is a temporary file, and you want to put
     * it in the final place.
     * @param src Source file
     * @param dest Destination file
     * @param flags flags
     * @param cancellable
     */
    function file_linkcopy(
        src: Gio.File,
        dest: Gio.File,
        flags: Gio.FileCopyFlags | null,
        cancellable?: Gio.Cancellable | null,
    ): boolean;
    /**
     * This function is similar to gs_file_linkcopy(), except it also uses
     * gs_file_sync_data() to ensure that `dest` is in stable storage
     * before it is moved into place.
     * @param src Source file
     * @param dest Destination file
     * @param flags flags
     * @param cancellable
     */
    function file_linkcopy_sync_data(
        src: Gio.File,
        dest: Gio.File,
        flags: Gio.FileCopyFlags | null,
        cancellable?: Gio.Cancellable | null,
    ): boolean;
    /**
     * Like g_file_load_contents(), except validates the contents are
     * UTF-8.
     * @param file Path to file whose contents must be UTF-8
     * @param cancellable
     */
    function file_load_contents_utf8(file: Gio.File, cancellable?: Gio.Cancellable | null): string;
    /**
     * Return a #GBytes which references a readonly view of the contents of
     * `file`.  This function uses #GMappedFile internally.
     * @param file a #GFile
     * @param cancellable
     * @returns a newly referenced #GBytes
     */
    function file_map_readonly(file: Gio.File, cancellable?: Gio.Cancellable | null): GLib.Bytes;
    /**
     * On success, sets `out_fd` to a file descriptor for the directory
     * that can be used with UNIX functions such as openat().
     * @param path Directory name
     * @param cancellable Cancellable
     */
    function file_open_dir_fd(path: Gio.File, cancellable?: Gio.Cancellable | null): [boolean, number];
    /**
     * On success, sets `out_fd` to a file descriptor for the directory
     * that can be used with UNIX functions such as openat().
     * @param parent_dfd Parent directory file descriptor
     * @param name Directory name
     * @param cancellable Cancellable
     */
    function file_open_dir_fd_at(
        parent_dfd: number,
        name: string,
        cancellable?: Gio.Cancellable | null,
    ): [boolean, number];
    /**
     * Like g_file_open_tmp(), except the file will be created in the
     * provided `tmpdir,` and allows specification of the Unix `mode,` which
     * means private files may be created.  Return values will be stored
     * in `out_file,` and optionally `out_stream`.
     * @param tmpdir Directory to place temporary file
     * @param mode Default mode (will be affected by umask)
     * @param cancellable
     */
    function file_open_in_tmpdir(
        tmpdir: Gio.File,
        mode: number,
        cancellable?: Gio.Cancellable | null,
    ): [boolean, Gio.File, Gio.OutputStream | null];
    /**
     * Like g_file_open_tmp(), except the file will be created in the
     * provided `tmpdir,` and allows specification of the Unix `mode,` which
     * means private files may be created.  Return values will be stored
     * in `out_name,` and optionally `out_stream`.
     * @param tmpdir_fd Directory to place temporary file
     * @param mode Default mode (will be affected by umask)
     * @param cancellable
     */
    function file_open_in_tmpdir_at(
        tmpdir_fd: number,
        mode: number,
        cancellable?: Gio.Cancellable | null,
    ): [boolean, string, Gio.OutputStream | null];
    /**
     * Wrapper for openat() using %O_RDONLY with %O_NOATIME if available.
     * @param dfd File descriptor for directory
     * @param name Pathname, relative to @dfd
     * @param cancellable Cancellable
     */
    function file_openat_noatime(dfd: number, name: string, cancellable?: Gio.Cancellable | null): [boolean, number];
    /**
     * Like g_file_read(), but try to avoid updating the file's
     * access time.  This should be used by background scanning
     * components such as search indexers, antivirus programs, etc.
     * @param file a #GFile
     * @param cancellable a #GCancellable
     * @returns A new input stream, or %NULL on error
     */
    function file_read_noatime(file: Gio.File, cancellable?: Gio.Cancellable | null): Gio.InputStream;
    /**
     * Return a #GFile that contains the same path with symlinks
     * followed. That is, it's a #GFile whose path is the result
     * of calling realpath() on `file`.
     * @param file A #GFile
     * @returns A new #GFile or %NULL if @file is invalid
     */
    function file_realpath(file: Gio.File): Gio.File | null;
    /**
     * This function wraps the raw Unix function rename().
     * @param from Current path
     * @param to New path
     * @param cancellable a #GCancellable
     * @returns %TRUE on success, %FALSE on error
     */
    function file_rename(from: Gio.File, to: Gio.File, cancellable?: Gio.Cancellable | null): boolean;
    /**
     * For each attribute in `xattrs,` set its value on the file or
     * directory referred to by `file`.  This function does not remove any
     * attributes not in `xattrs`.
     * @param file File descriptor
     * @param xattrs Extended attributes
     * @param cancellable Cancellable
     */
    function file_set_all_xattrs(file: Gio.File, xattrs: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
    /**
     * Wraps the UNIX fsync() function (or fdatasync(), if available), which
     * ensures that the data in `file` is on non-volatile storage.
     * @param file a #GFile
     * @param cancellable
     */
    function file_sync_data(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean;
    /**
     * Like g_file_delete(), except this function does not follow Unix
     * symbolic links, and will delete a symbolic link even if it's
     * pointing to a nonexistent file.  In other words, this function
     * merely wraps the raw Unix function unlink().
     * @param path Path to file
     * @param cancellable a #GCancellable
     * @returns %TRUE on success, %FALSE on error
     */
    function file_unlink(path: Gio.File, cancellable?: Gio.Cancellable | null): boolean;
    /**
     * Generate a name suitable for use as a temporary file.  This
     * function does no I/O; it is not guaranteed that a file with that
     * name does not exist.
     * @param prefix String prepended to the result
     * @param suffix String suffixed to the result
     */
    function fileutil_gen_tmp_name(prefix?: string | null, suffix?: string | null): string;
    /**
     * Log structured data in an operating-system specific fashion.  The
     * parameter `opts` should be an array of UTF-8 KEY=VALUE strings.
     * This function does not support binary data.  See
     * http://www.freedesktop.org/software/systemd/man/systemd.journal-fields.html
     * for more information about fields that can be used on a systemd
     * system.
     * @param message Text message to send
     * @param keys Optional structured data
     */
    function log_structured(message: string, keys?: string[] | null): void;
    /**
     * Like gs_log_structured(), but also print to standard output (if it
     * is not already connected to the system log).
     * @param message A message to log
     * @param keys Optional structured data
     */
    function log_structured_print(message: string, keys?: string[] | null): void;
    /**
     * Use openat() to open a directory, using a standard set of flags.
     * @param dfd File descriptor for origin directory
     * @param path Pathname, relative to @dfd
     * @param follow Whether or not to follow symbolic links
     * @param out_fd
     */
    function opendirat(dfd: number, path: string, follow: boolean, out_fd: number): boolean;
    /**
     * Use openat() to open a directory, using a standard set of flags.
     * This function sets errno.
     * @param dfd File descriptor for origin directory
     * @param path Pathname, relative to @dfd
     * @param follow Whether or not to follow symbolic links
     */
    function opendirat_with_errno(dfd: number, path: string, follow: boolean): number;
    /**
     * Set `error` to an error with domain %G_IO_ERROR, and code based on
     * the value of `saved_errno`.  The error message is set using a
     * literal return from g_strerror().
     * @param error Error
     * @param saved_errno errno value
     */
    function set_error_from_errno(error: GLib.Error | null, saved_errno: number): void;
    /**
     * Recursively copy path `src` (which must be a directory) to the
     * target `dest`.  Any existing files are overwritten.
     * @param src Source path
     * @param dest Destination path
     * @param cancellable
     * @returns %TRUE on success
     */
    function shutil_cp_a(src: Gio.File, dest: Gio.File, cancellable?: Gio.Cancellable | null): boolean;
    /**
     * Recursively copy path `src` (which must be a directory) to the
     * target `dest`.  If possible, hardlinks are used; if a hardlink is
     * not possible, a regular copy is created.  Any existing files are
     * overwritten.
     * @param src Source path
     * @param dest Destination path
     * @param cancellable
     * @returns %TRUE on success
     */
    function shutil_cp_al_or_fallback(src: Gio.File, dest: Gio.File, cancellable?: Gio.Cancellable | null): boolean;
    /**
     * Recursively delete the filename referenced by `path;` it may be a
     * file or directory.  No error is thrown if `path` does not exist.
     * @param path A file or directory
     * @param cancellable
     */
    function shutil_rm_rf(path: Gio.File, cancellable?: Gio.Cancellable | null): boolean;
    /**
     * Recursively delete the filename referenced by the combination of
     * the directory fd`dfd` and `path;` it may be a file or directory.  No
     * error is thrown if `path` does not exist.
     * @param dfd A directory file descriptor, or -1 for current
     * @param path Path
     * @param cancellable Cancellable
     */
    function shutil_rm_rf_at(dfd: number, path: string, cancellable?: Gio.Cancellable | null): boolean;
    /**
     * Use this function when you want your code to behave differently
     * depeneding on whether your program was started as a systemd unit,
     * or e.g. interactively at a terminal.
     * @returns %TRUE if stdout is (probably) connnected to the systemd journal
     */
    function stdout_is_journal(): boolean;
    namespace Console {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * First, this class offers API to access the standard input and
     * output/error, streams as #GInputStream and #GOutputStream
     * respectively.
     *
     * In the case where the process is connected to a controlling
     * terminal, the gs_console_get() API is available, which exposes a
     * number of additional features such as no-echo password reading.
     */
    class Console extends GObject.Object {
        static $gtype: GObject.GType<Console>;

        // Constructors

        constructor(properties?: Partial<Console.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Console.SignalSignatures>(signal: K, callback: Console.SignalSignatures[K]): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Console.SignalSignatures>(
            signal: K,
            callback: Console.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Console.SignalSignatures>(
            signal: K,
            ...args: Console.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * If the current process has an interactive console, return the
         * singleton #GSConsole instance.  On Unix, this is equivalent to
         * isatty().  For all other cases, such as pipes, sockets, /dev/null,
         * this function will return %NULL.
         */
        static get(): Console;
        static get_stderr(): Gio.OutputStream;
        static get_stdin(): Gio.InputStream;
        static get_stdout(): Gio.OutputStream;

        // Methods

        /**
         * The primary use case for this function is to output periodic
         * "status" or "progress" information.  The first time this function
         * is called, `line` will be output normally.  Subsequent invocations
         * will overwrite the previous.
         *
         * You must invoke gs_console_end_status_line() to return the console
         * to normal mode.  In particular, concurrent use of this function and
         * the stream returned by gs_console_get_stdout() results in undefined
         * behavior.
         * @param line String to output
         * @param cancellable
         */
        begin_status_line(line: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Complete a series of invocations of gs_console_begin_status_line(),
         * returning the stream to normal mode.  The last printed status line
         * remains on the console; if this is not desired, print an empty
         * string to clear it before invoking this function.
         * @param cancellable
         */
        end_status_line(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Write `prompt` to standard output, then switch output echo off, read
         * a result string, then switch output echo back on.
         * @param prompt A string to output before reading the password
         * @param cancellable
         * @returns A string, or %NULL on error
         */
        read_password(prompt: string, cancellable?: Gio.Cancellable | null): string;
    }

    namespace Subprocess {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::context': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            context: SubprocessContext;
        }
    }

    /**
     * This class wraps the lower-level g_spawn_async_with_pipes() API,
     * providing a more modern GIO-style API, such as returning
     * #GInputStream objects for child output pipes.
     *
     * One major advantage that GIO brings over the core GLib library is
     * comprehensive API for asynchronous I/O, such
     * g_output_stream_splice_async().  This makes GSubprocess
     * significantly more powerful and flexible than equivalent APIs in
     * some other languages such as the <literal>subprocess.py</literal>
     * included with Python.  For example, using #GSubprocess one could
     * create two child processes, reading standard output from the first,
     * processing it, and writing to the input stream of the second, all
     * without blocking the main loop.
     */
    class Subprocess extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Subprocess>;

        // Properties

        get context(): SubprocessContext;

        // Constructors

        constructor(properties?: Partial<Subprocess.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](context: SubprocessContext, cancellable?: Gio.Cancellable | null): Subprocess;

        static new_simple_argv(
            argv: string[],
            stdout_disposition: SubprocessStreamDisposition,
            stderr_disposition: SubprocessStreamDisposition,
            cancellable?: Gio.Cancellable | null,
        ): Subprocess;

        // Signals

        connect<K extends keyof Subprocess.SignalSignatures>(
            signal: K,
            callback: Subprocess.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Subprocess.SignalSignatures>(
            signal: K,
            callback: Subprocess.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Subprocess.SignalSignatures>(
            signal: K,
            ...args: Subprocess.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Use an operating-system specific method to attempt an immediate,
         * forceful termination of the process.  There is no mechanism to
         * determine whether or not the request itself was successful;
         * however, you can use gs_subprocess_wait() to monitor the status of
         * the process after calling this function.
         *
         * On Unix, this function sends %SIGKILL.
         */
        force_exit(): void;
        /**
         * The identifier for this child process; it is valid as long as the
         * process `self` is referenced.  In particular, do
         * <emphasis>not</emphasis> call g_spawn_close_pid() on this value;
         * that is handled internally.
         *
         * On some Unix versions, it is possible for there to be a race
         * condition where waitpid() may have been called to collect the child
         * before any watches (such as that installed by
         * gs_subprocess_add_watch()) have fired.  If you are planning to use
         * native functions such as kill() on the pid, your program should
         * gracefully handle an %ESRCH result to mitigate this.
         *
         * If you want to request process termination, using the high level
         * gs_subprocess_request_exit() and gs_subprocess_force_exit() API is
         * recommended.
         * @returns Operating-system specific identifier for child process
         */
        get_pid(): GLib.Pid;
        get_stderr_pipe(): Gio.InputStream;
        get_stdin_pipe(): Gio.OutputStream;
        get_stdout_pipe(): Gio.InputStream;
        /**
         * This API uses an operating-system specific mechanism to request
         * that the subprocess gracefully exit.  This API is not available on
         * all operating systems; for those not supported, it will do nothing
         * and return %FALSE.  Portable code should handle this situation
         * gracefully.  For example, if you are communicating via input or
         * output pipe with the child, many programs will automatically exit
         * when one of their standard input or output are closed.
         *
         * On Unix, this API sends %SIGTERM.
         *
         * A %TRUE return value does <emphasis>not</emphasis> mean the
         * subprocess has exited, merely that an exit request was initiated.
         * You can use gs_subprocess_add_watch() to monitor the status of the
         * process after calling this function.
         *
         * This function returns %TRUE if the process has already exited.
         * @returns %TRUE if the operation is supported, %FALSE otherwise.
         */
        request_exit(): boolean;
        /**
         * Start an asynchronous wait for the subprocess `self` to exit.
         * @param cancellable a #GCancellable
         */
        wait(cancellable?: Gio.Cancellable | null): Promise<number>;
        /**
         * Start an asynchronous wait for the subprocess `self` to exit.
         * @param cancellable a #GCancellable
         * @param callback Invoked when process exits, or @cancellable is cancelled
         */
        wait(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Start an asynchronous wait for the subprocess `self` to exit.
         * @param cancellable a #GCancellable
         * @param callback Invoked when process exits, or @cancellable is cancelled
         */
        wait(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<number> | void;
        /**
         * The exit status of the process will be stored in `out_exit_status`.
         * See the documentation of g_spawn_check_exit_status() for more
         * details.
         *
         * Note that `error` is not set if the process exits abnormally; you
         * must use g_spawn_check_exit_status() for that.
         * @param result a #GAsyncResult
         */
        wait_finish(result: Gio.AsyncResult): [boolean, number];
        /**
         * Synchronously wait for the subprocess to terminate, returning the
         * status code in `out_exit_status`.  See the documentation of
         * g_spawn_check_exit_status() for how to interpret it.  Note that if
         * `error` is set, then `out_exit_status` will be left uninitialized.
         * @param cancellable a #GCancellable
         * @returns %TRUE on success, %FALSE if @cancellable was cancelled
         */
        wait_sync(cancellable?: Gio.Cancellable | null): [boolean, number];
        /**
         * Combines gs_subprocess_wait_sync() with g_spawn_check_exit_status().
         * @param cancellable a #GCancellable
         * @returns %TRUE on success, %FALSE if process exited abnormally, or @cancellable was cancelled
         */
        wait_sync_check(cancellable?: Gio.Cancellable | null): boolean;

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

    namespace SubprocessContext {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::argv': GObject.Object.Notify;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            argv: string[];
        }
    }

    /**
     * This class contains a set of options for launching child processes,
     * such as where its standard input and output will be directed, the
     * argument list, the environment, and more.
     *
     * While the #GSSubprocess class has high level functions covering
     * popular cases, use of this class allows access to more advanced
     * options.  It can also be used to launch multiple subprocesses with
     * a similar configuration.
     */
    class SubprocessContext extends GObject.Object {
        static $gtype: GObject.GType<SubprocessContext>;

        // Properties

        /**
         * Array of arguments passed to child process; must have at least
         * one element.  The first element has special handling - if it is
         * an not absolute path ( as determined by g_path_is_absolute() ),
         * then the system search path will be used.  See
         * %G_SPAWN_SEARCH_PATH.
         *
         * Note that in order to use the Unix-specific argv0 functionality,
         * you must use the setter function
         * gs_subprocess_context_set_args_and_argv0().  For more information
         * about this, see %G_SPAWN_FILE_AND_ARGV_ZERO.
         */
        get argv(): string[];
        set argv(val: string[]);

        // Constructors

        constructor(properties?: Partial<SubprocessContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](argv: string): SubprocessContext;

        static new_argv0(argv0: string, argv: string): SubprocessContext;

        // Signals

        connect<K extends keyof SubprocessContext.SignalSignatures>(
            signal: K,
            callback: SubprocessContext.SignalSignatures[K],
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SubprocessContext.SignalSignatures>(
            signal: K,
            callback: SubprocessContext.SignalSignatures[K],
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SubprocessContext.SignalSignatures>(
            signal: K,
            ...args: SubprocessContext.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Append an argument to the child's argument vector.
         * @param arg An argument
         */
        argv_append(arg: string): void;
        /**
         * This allows you to open a pipe between the parent and child
         * processes, independent of the standard streams.  For this function,
         * the pipe is set up so that the parent can read, and the child can
         * write.  For the opposite version, see
         * gs_subprocess_context_open_pipe_write().
         *
         * The returned `out_fdno` is the file descriptor number that the child
         * will see; you need to communicate this number via a separate
         * channel, such as the argument list.  For example, if you're using
         * this pipe to send a password, provide
         * <literal>--password-fd=&lt;fdno string&gt;</literal>.
         * @returns %TRUE on success, %FALSE on error (and @error will be set)
         */
        open_pipe_read(): [boolean, Gio.InputStream, number];
        /**
         * Like gs_subprocess_context_open_pipe_read(), but returns a writable
         * channel from which the child process can read.
         * @returns %TRUE on success, %FALSE on error (and @error will be set)
         */
        open_pipe_write(): [boolean, Gio.OutputStream, number];
        set_cwd(cwd: string): void;
        /**
         * Replace the environment that will be used for the child process.
         * The default is to inherit the current process.
         * @param environ Environment KEY=VALUE pairs
         */
        set_environment(environ: string[]): void;
        set_keep_descriptors(keep_descriptors: boolean): void;
        set_search_path(search_path: boolean, search_path_from_envp: boolean): void;
        set_stderr_disposition(disposition: SubprocessStreamDisposition | null): void;
        set_stderr_fd(fd: number): void;
        set_stderr_file_path(path: string): void;
        set_stdin_disposition(disposition: SubprocessStreamDisposition | null): void;
        set_stdin_fd(fd: number): void;
        set_stdin_file_path(path: string): void;
        set_stdout_disposition(disposition: SubprocessStreamDisposition | null): void;
        set_stdout_fd(fd: number): void;
        set_stdout_file_path(path: string): void;
    }

    class DirFdIterator {
        static $gtype: GObject.GType<DirFdIterator>;

        // Fields

        initialized: boolean;
        fd: number;
        padding_data: any[];

        // Constructors

        constructor(
            properties?: Partial<{
                initialized: boolean;
                fd: number;
                padding_data: any[];
            }>,
        );
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

export default GSystem;

// END
