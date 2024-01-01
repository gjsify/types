
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gsystem-1.0-ambient.d.ts';
import './gsystem-1.0-import.d.ts';
/**
 * GSystem-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace GSystem {

/**
 * Flags to define the behaviour of the standard input/output/error of
 * a #GSSubprocess.
 */
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
function dfd_and_name_get_all_xattrs(dfd: number, name: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_xattrs */ GLib.Variant ]
function dfd_and_name_set_all_xattrs(dfd: number, name: string, xattrs: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
function dirfd_iterator_clear(dfd_iter: DirFdIterator): void
function dirfd_iterator_init_at(dfd: number, path: string, follow: boolean, dfd_iter: DirFdIterator): boolean
function dirfd_iterator_init_take_fd(dfd: number, dfd_iter: DirFdIterator): boolean
/**
 * Read all extended attributes from `fd` in a canonical sorted order, and
 * set `out_xattrs` with the result.
 * 
 * If the filesystem does not support extended attributes, `out_xattrs`
 * will have 0 elements, and this function will return successfully.
 * @param fd a file descriptor
 * @param cancellable Cancellable
 */
function fd_get_all_xattrs(fd: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_xattrs */ GLib.Variant ]
/**
 * For each attribute in `xattrs,` set its value on the file or
 * directory referred to by `fd`.  This function does not remove any
 * attributes not in `xattrs`.
 * @param fd File descriptor
 * @param xattrs Extended attributes
 * @param cancellable Cancellable
 */
function fd_set_all_xattrs(fd: number, xattrs: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
/**
 * Merely wraps UNIX chmod().
 * @param path Path to file
 * @param mode UNIX mode
 * @param cancellable a #GCancellable
 * @returns %TRUE on success, %FALSE on error
 */
function file_chmod(path: Gio.File, mode: number, cancellable: Gio.Cancellable | null): boolean
/**
 * Merely wraps UNIX chown().
 * @param path Path to file
 * @param owner UNIX owner
 * @param group UNIX group
 * @param cancellable a #GCancellable
 * @returns %TRUE on success, %FALSE on error
 */
function file_chown(path: Gio.File, owner: number, group: number, cancellable: Gio.Cancellable | null): boolean
/**
 * Like g_file_create(), except this function allows specifying the
 * access mode.  This allows atomically creating private files.
 * @param file Path to non-existent file
 * @param mode Unix access permissions
 * @param cancellable a #GCancellable
 */
function file_create(file: Gio.File, mode: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_stream */ Gio.OutputStream ]
/**
 * Like g_file_make_directory(), except does not throw an error if the
 * directory already exists.
 * @param dir Path to create as directory
 * @param with_parents Also create parent directories
 * @param cancellable a #GCancellable
 */
function file_ensure_directory(dir: Gio.File, with_parents: boolean, cancellable: Gio.Cancellable | null): boolean
/**
 * Wraps UNIX mkdir() function with support for `cancellable,` and
 * uses `error` instead of errno.
 * @param dir Path to create as directory
 * @param mode Create directory with these permissions
 * @param cancellable a #GCancellable
 */
function file_ensure_directory_mode(dir: Gio.File, mode: number, cancellable: Gio.Cancellable | null): boolean
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
function file_enumerator_iterate(direnum: Gio.FileEnumerator, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_info */ Gio.FileInfo, /* out_child */ Gio.File ]
/**
 * Read all extended attributes of `f` in a canonical sorted order, and
 * set `out_xattrs` with the result.
 * 
 * If the filesystem does not support extended attributes, `out_xattrs`
 * will have 0 elements, and this function will return successfully.
 * @param f a #GFile
 * @param cancellable Cancellable
 */
function file_get_all_xattrs(f: Gio.File, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_xattrs */ GLib.Variant ]
/**
 * Like g_file_get_basename(), but returns a constant copy so callers
 * don't need to free the result.
 * @param file 
 */
function file_get_basename_cached(file: Gio.File): string
/**
 * Like g_file_get_path(), but returns a constant copy so callers
 * don't need to free the result.
 * @param file 
 */
function file_get_path_cached(file: Gio.File): string
/**
 * Like gs_file_get_relative_path(), but does not mandate that
 * the two files have any parent in common. This function will
 * instead insert "../" where appropriate.
 * @param one The first #GFile
 * @param two The second #GFile
 * @returns The relative path between the two.
 */
function file_get_relpath(one: Gio.File, two: Gio.File): string | null
/**
 * Merely wraps UNIX lchown().
 * @param path Path to file
 * @param owner UNIX owner
 * @param group UNIX group
 * @param cancellable a #GCancellable
 * @returns %TRUE on success, %FALSE on error
 */
function file_lchown(path: Gio.File, owner: number, group: number, cancellable: Gio.Cancellable | null): boolean
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
function file_linkcopy(src: Gio.File, dest: Gio.File, flags: Gio.FileCopyFlags, cancellable: Gio.Cancellable | null): boolean
/**
 * This function is similar to gs_file_linkcopy(), except it also uses
 * gs_file_sync_data() to ensure that `dest` is in stable storage
 * before it is moved into place.
 * @param src Source file
 * @param dest Destination file
 * @param flags flags
 * @param cancellable 
 */
function file_linkcopy_sync_data(src: Gio.File, dest: Gio.File, flags: Gio.FileCopyFlags, cancellable: Gio.Cancellable | null): boolean
/**
 * Like g_file_load_contents(), except validates the contents are
 * UTF-8.
 * @param file Path to file whose contents must be UTF-8
 * @param cancellable 
 */
function file_load_contents_utf8(file: Gio.File, cancellable: Gio.Cancellable | null): string | null
/**
 * Return a #GBytes which references a readonly view of the contents of
 * `file`.  This function uses #GMappedFile internally.
 * @param file a #GFile
 * @param cancellable 
 * @returns a newly referenced #GBytes
 */
function file_map_readonly(file: Gio.File, cancellable: Gio.Cancellable | null): GLib.Bytes
/**
 * On success, sets `out_fd` to a file descriptor for the directory
 * that can be used with UNIX functions such as openat().
 * @param path Directory name
 * @param cancellable Cancellable
 */
function file_open_dir_fd(path: Gio.File, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_fd */ number ]
/**
 * On success, sets `out_fd` to a file descriptor for the directory
 * that can be used with UNIX functions such as openat().
 * @param parent_dfd Parent directory file descriptor
 * @param name Directory name
 * @param cancellable Cancellable
 */
function file_open_dir_fd_at(parent_dfd: number, name: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_fd */ number ]
/**
 * Like g_file_open_tmp(), except the file will be created in the
 * provided `tmpdir,` and allows specification of the Unix `mode,` which
 * means private files may be created.  Return values will be stored
 * in `out_file,` and optionally `out_stream`.
 * @param tmpdir Directory to place temporary file
 * @param mode Default mode (will be affected by umask)
 * @param cancellable 
 */
function file_open_in_tmpdir(tmpdir: Gio.File, mode: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_file */ Gio.File, /* out_stream */ Gio.OutputStream ]
/**
 * Like g_file_open_tmp(), except the file will be created in the
 * provided `tmpdir,` and allows specification of the Unix `mode,` which
 * means private files may be created.  Return values will be stored
 * in `out_name,` and optionally `out_stream`.
 * @param tmpdir_fd Directory to place temporary file
 * @param mode Default mode (will be affected by umask)
 * @param cancellable 
 */
function file_open_in_tmpdir_at(tmpdir_fd: number, mode: number, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_name */ string | null, /* out_stream */ Gio.OutputStream ]
/**
 * Wrapper for openat() using %O_RDONLY with %O_NOATIME if available.
 * @param dfd File descriptor for directory
 * @param name Pathname, relative to `dfd`
 * @param cancellable Cancellable
 */
function file_openat_noatime(dfd: number, name: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* ret_fd */ number ]
/**
 * Like g_file_read(), but try to avoid updating the file's
 * access time.  This should be used by background scanning
 * components such as search indexers, antivirus programs, etc.
 * @param file a #GFile
 * @param cancellable a #GCancellable
 * @returns A new input stream, or %NULL on error
 */
function file_read_noatime(file: Gio.File, cancellable: Gio.Cancellable | null): Gio.InputStream
/**
 * Return a #GFile that contains the same path with symlinks
 * followed. That is, it's a #GFile whose path is the result
 * of calling realpath() on `file`.
 * @param file A #GFile
 * @returns A new #GFile or %NULL if @file is invalid
 */
function file_realpath(file: Gio.File): Gio.File | null
/**
 * This function wraps the raw Unix function rename().
 * @param from Current path
 * @param to New path
 * @param cancellable a #GCancellable
 * @returns %TRUE on success, %FALSE on error
 */
function file_rename(from: Gio.File, to: Gio.File, cancellable: Gio.Cancellable | null): boolean
/**
 * For each attribute in `xattrs,` set its value on the file or
 * directory referred to by `file`.  This function does not remove any
 * attributes not in `xattrs`.
 * @param file File descriptor
 * @param xattrs Extended attributes
 * @param cancellable Cancellable
 */
function file_set_all_xattrs(file: Gio.File, xattrs: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
/**
 * Wraps the UNIX fsync() function (or fdatasync(), if available), which
 * ensures that the data in `file` is on non-volatile storage.
 * @param file a #GFile
 * @param cancellable 
 */
function file_sync_data(file: Gio.File, cancellable: Gio.Cancellable | null): boolean
/**
 * Like g_file_delete(), except this function does not follow Unix
 * symbolic links, and will delete a symbolic link even if it's
 * pointing to a nonexistent file.  In other words, this function
 * merely wraps the raw Unix function unlink().
 * @param path Path to file
 * @param cancellable a #GCancellable
 * @returns %TRUE on success, %FALSE on error
 */
function file_unlink(path: Gio.File, cancellable: Gio.Cancellable | null): boolean
/**
 * Generate a name suitable for use as a temporary file.  This
 * function does no I/O; it is not guaranteed that a file with that
 * name does not exist.
 * @param prefix String prepended to the result
 * @param suffix String suffixed to the result
 */
function fileutil_gen_tmp_name(prefix: string | null, suffix: string | null): string | null
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
function log_structured(message: string, keys: string[] | null): void
/**
 * Like gs_log_structured(), but also print to standard output (if it
 * is not already connected to the system log).
 * @param message A message to log
 * @param keys Optional structured data
 */
function log_structured_print(message: string, keys: string[] | null): void
/**
 * Use openat() to open a directory, using a standard set of flags.
 * @param dfd File descriptor for origin directory
 * @param path Pathname, relative to `dfd`
 * @param follow Whether or not to follow symbolic links
 * @param out_fd 
 */
function opendirat(dfd: number, path: string, follow: boolean, out_fd: number): boolean
/**
 * Use openat() to open a directory, using a standard set of flags.
 * This function sets errno.
 * @param dfd File descriptor for origin directory
 * @param path Pathname, relative to `dfd`
 * @param follow Whether or not to follow symbolic links
 */
function opendirat_with_errno(dfd: number, path: string, follow: boolean): number
/**
 * Set `error` to an error with domain %G_IO_ERROR, and code based on
 * the value of `saved_errno`.  The error message is set using a
 * literal return from g_strerror().
 * @param error Error
 * @param saved_errno errno value
 */
function set_error_from_errno(error: GLib.Error | null, saved_errno: number): void
/**
 * Recursively copy path `src` (which must be a directory) to the
 * target `dest`.  Any existing files are overwritten.
 * @param src Source path
 * @param dest Destination path
 * @param cancellable 
 * @returns %TRUE on success
 */
function shutil_cp_a(src: Gio.File, dest: Gio.File, cancellable: Gio.Cancellable | null): boolean
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
function shutil_cp_al_or_fallback(src: Gio.File, dest: Gio.File, cancellable: Gio.Cancellable | null): boolean
/**
 * Recursively delete the filename referenced by `path;` it may be a
 * file or directory.  No error is thrown if `path` does not exist.
 * @param path A file or directory
 * @param cancellable 
 */
function shutil_rm_rf(path: Gio.File, cancellable: Gio.Cancellable | null): boolean
/**
 * Recursively delete the filename referenced by the combination of
 * the directory fd`dfd` and `path;` it may be a file or directory.  No
 * error is thrown if `path` does not exist.
 * @param dfd A directory file descriptor, or -1 for current
 * @param path Path
 * @param cancellable Cancellable
 */
function shutil_rm_rf_at(dfd: number, path: string, cancellable: Gio.Cancellable | null): boolean
/**
 * Use this function when you want your code to behave differently
 * depeneding on whether your program was started as a systemd unit,
 * or e.g. interactively at a terminal.
 * @returns %TRUE if stdout is (probably) connnected to the systemd journal
 */
function stdout_is_journal(): boolean
module Console {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Console {

    // Owm methods of GSystem-1.0.GSystem.Console

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
    begin_status_line(line: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Complete a series of invocations of gs_console_begin_status_line(),
     * returning the stream to normal mode.  The last printed status line
     * remains on the console; if this is not desired, print an empty
     * string to clear it before invoking this function.
     * @param cancellable 
     */
    end_status_line(cancellable: Gio.Cancellable | null): boolean
    /**
     * Write `prompt` to standard output, then switch output echo off, read
     * a result string, then switch output echo back on.
     * @param prompt A string to output before reading the password
     * @param cancellable 
     * @returns A string, or %NULL on error
     */
    read_password(prompt: string, cancellable: Gio.Cancellable | null): string | null

    // Class property signals of GSystem-1.0.GSystem.Console

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * First, this class offers API to access the standard input and
 * output/error, streams as #GInputStream and #GOutputStream
 * respectively.
 * 
 * In the case where the process is connected to a controlling
 * terminal, the gs_console_get() API is available, which exposes a
 * number of additional features such as no-echo password reading.
 * @class 
 */
class Console extends GObject.Object {

    // Own properties of GSystem-1.0.GSystem.Console

    static name: string
    static $gtype: GObject.GType<Console>

    // Constructors of GSystem-1.0.GSystem.Console

    constructor(config?: Console.ConstructorProperties) 
    _init(config?: Console.ConstructorProperties): void
    /**
     * If the current process has an interactive console, return the
     * singleton #GSConsole instance.  On Unix, this is equivalent to
     * isatty().  For all other cases, such as pipes, sockets, /dev/null,
     * this function will return %NULL.
     * @returns The console instance, or %NULL if not interactive
     */
    static get(): Console
    static get_stderr(): Gio.OutputStream
    static get_stdin(): Gio.InputStream
    static get_stdout(): Gio.OutputStream
}

module Subprocess {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GSystem-1.0.GSystem.Subprocess

        context?: SubprocessContext | null
    }

}

interface Subprocess extends Gio.Initable {

    // Own properties of GSystem-1.0.GSystem.Subprocess

    readonly context: SubprocessContext

    // Owm methods of GSystem-1.0.GSystem.Subprocess

    /**
     * Use an operating-system specific method to attempt an immediate,
     * forceful termination of the process.  There is no mechanism to
     * determine whether or not the request itself was successful;
     * however, you can use gs_subprocess_wait() to monitor the status of
     * the process after calling this function.
     * 
     * On Unix, this function sends %SIGKILL.
     */
    force_exit(): void
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
    get_pid(): GLib.Pid
    get_stderr_pipe(): Gio.InputStream
    get_stdin_pipe(): Gio.OutputStream
    get_stdout_pipe(): Gio.InputStream
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
    request_exit(): boolean
    /**
     * Start an asynchronous wait for the subprocess `self` to exit.
     * @param cancellable a #GCancellable
     * @param callback Invoked when process exits, or `cancellable` is cancelled
     */
    wait(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * The exit status of the process will be stored in `out_exit_status`.
     * See the documentation of g_spawn_check_exit_status() for more
     * details.
     * 
     * Note that `error` is not set if the process exits abnormally; you
     * must use g_spawn_check_exit_status() for that.
     * @param result a #GAsyncResult
     */
    wait_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* out_exit_status */ number ]
    /**
     * Synchronously wait for the subprocess to terminate, returning the
     * status code in `out_exit_status`.  See the documentation of
     * g_spawn_check_exit_status() for how to interpret it.  Note that if
     * `error` is set, then `out_exit_status` will be left uninitialized.
     * @param cancellable a #GCancellable
     * @returns %TRUE on success, %FALSE if @cancellable was cancelled
     */
    wait_sync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_exit_status */ number ]
    /**
     * Combines gs_subprocess_wait_sync() with g_spawn_check_exit_status().
     * @param cancellable a #GCancellable
     * @returns %TRUE on success, %FALSE if process exited abnormally, or @cancellable was cancelled
     */
    wait_sync_check(cancellable: Gio.Cancellable | null): boolean

    // Class property signals of GSystem-1.0.GSystem.Subprocess

    connect(sigName: "notify::context", callback: (($obj: Subprocess, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: Subprocess, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class Subprocess extends GObject.Object {

    // Own properties of GSystem-1.0.GSystem.Subprocess

    static name: string
    static $gtype: GObject.GType<Subprocess>

    // Constructors of GSystem-1.0.GSystem.Subprocess

    constructor(config?: Subprocess.ConstructorProperties) 
    /**
     * Create a new process, using the parameters specified by
     * GSSubprocessContext.
     * @constructor 
     * @param context 
     * @param cancellable 
     * @returns A newly created %GSSubprocess, or %NULL on error (and @error will be set)
     */
    constructor(context: SubprocessContext, cancellable: Gio.Cancellable | null) 
    /**
     * Create a new process, using the parameters specified by
     * GSSubprocessContext.
     * @constructor 
     * @param context 
     * @param cancellable 
     * @returns A newly created %GSSubprocess, or %NULL on error (and @error will be set)
     */
    static new(context: SubprocessContext, cancellable: Gio.Cancellable | null): Subprocess
    /**
     * Create a new subprocess using the provided argument array and
     * stream dispositions.
     * @constructor 
     * @param argv Argument array
     * @param stdout_disposition Where to redirect stdout
     * @param stderr_disposition Where to redirect stderr
     * @param cancellable 
     */
    static new_simple_argv(argv: string[], stdout_disposition: SubprocessStreamDisposition, stderr_disposition: SubprocessStreamDisposition, cancellable: Gio.Cancellable | null): Subprocess
    _init(config?: Subprocess.ConstructorProperties): void
}

module SubprocessContext {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GSystem-1.0.GSystem.SubprocessContext

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
        argv?: string[] | null
    }

}

interface SubprocessContext {

    // Own properties of GSystem-1.0.GSystem.SubprocessContext

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
    argv: string[]

    // Owm methods of GSystem-1.0.GSystem.SubprocessContext

    /**
     * Append an argument to the child's argument vector.
     * @param arg An argument
     */
    argv_append(arg: string): void
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
    open_pipe_read(): [ /* returnType */ boolean, /* out_stream */ Gio.InputStream, /* out_fdno */ number ]
    /**
     * Like gs_subprocess_context_open_pipe_read(), but returns a writable
     * channel from which the child process can read.
     * @returns %TRUE on success, %FALSE on error (and @error will be set)
     */
    open_pipe_write(): [ /* returnType */ boolean, /* out_stream */ Gio.OutputStream, /* out_fdno */ number ]
    set_cwd(cwd: string): void
    /**
     * Replace the environment that will be used for the child process.
     * The default is to inherit the current process.
     * @param environ Environment KEY=VALUE pairs
     */
    set_environment(environ: string[]): void
    set_keep_descriptors(keep_descriptors: boolean): void
    set_search_path(search_path: boolean, search_path_from_envp: boolean): void
    set_stderr_disposition(disposition: SubprocessStreamDisposition): void
    set_stderr_fd(fd: number): void
    set_stderr_file_path(path: string): void
    set_stdin_disposition(disposition: SubprocessStreamDisposition): void
    set_stdin_fd(fd: number): void
    set_stdin_file_path(path: string): void
    set_stdout_disposition(disposition: SubprocessStreamDisposition): void
    set_stdout_fd(fd: number): void
    set_stdout_file_path(path: string): void

    // Class property signals of GSystem-1.0.GSystem.SubprocessContext

    connect(sigName: "notify::argv", callback: (($obj: SubprocessContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::argv", callback: (($obj: SubprocessContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::argv", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
class SubprocessContext extends GObject.Object {

    // Own properties of GSystem-1.0.GSystem.SubprocessContext

    static name: string
    static $gtype: GObject.GType<SubprocessContext>

    // Constructors of GSystem-1.0.GSystem.SubprocessContext

    constructor(config?: SubprocessContext.ConstructorProperties) 
    constructor(argv: string | null) 
    static new(argv: string | null): SubprocessContext
    static new_argv0(argv0: string, argv: string | null): SubprocessContext
    _init(config?: SubprocessContext.ConstructorProperties): void
}

interface DirFdIterator {

    // Own fields of GSystem-1.0.GSystem.DirFdIterator

    initialized: boolean
    fd: number
    padding_data: any[]
}

class DirFdIterator {

    // Own properties of GSystem-1.0.GSystem.DirFdIterator

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default GSystem;
// END