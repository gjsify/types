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

export namespace Dex {
    /**
     * Dex-1
     */

    /**
     * @gir-type Enum
     */
    export namespace BlockKind {
        export const $gtype: GObject.GType<BlockKind>;
    }

    /**
     * @gir-type Enum
     */
    enum BlockKind {
        THEN,
        CATCH,
        FINALLY,
    }

    /**
     * @gir-type Struct
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        static UNKNOWN: number;
        static CHANNEL_CLOSED: number;
        static DEPENDENCY_FAILED: number;
        static FIBER_EXITED: number;
        static NO_FIBER: number;
        static PENDING: number;
        static SEMAPHORE_CLOSED: number;
        static TIMED_OUT: number;
        static TYPE_MISMATCH: number;
        static TYPE_NOT_SUPPORTED: number;
        static FIBER_CANCELLED: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    /**
     * @gir-type Enum
     */
    export namespace FutureStatus {
        export const $gtype: GObject.GType<FutureStatus>;
    }

    /**
     * @gir-type Enum
     */
    enum FutureStatus {
        PENDING,
        RESOLVED,
        REJECTED,
    }

    /**
     * An asynchronous `pread()` wrapper.
     *
     * Generally you want to provide `NULL` for the `aio_context` as that
     * will get the default aio context for your scheduler.
     * @param aio_context
     * @param fd
     * @param offset the positioned offset within `fd` to read from
     * @returns a future that will resolve when the   read completes or rejects with error.
     */
    function aio_read(aio_context: AioContext | null, fd: number, offset: number): [Future, Uint8Array];
    /**
     * An asynchronous `pwrite()` wrapper.
     *
     * Generally you want to provide `NULL` for the `aio_context` as that
     * will get the default aio context for your scheduler.
     * @param aio_context
     * @param fd
     * @param buffer
     * @param offset the positioned offset within `fd` to write at
     * @returns a future that will resolve when the   write completes or rejects with error.
     */
    function aio_write(aio_context: AioContext | null, fd: number, buffer: Uint8Array | string, offset: number): Future;
    /**
     * A helper for {@link Gio.AsyncInitable.init_async}.
     * @param initable a {@link Gio.AsyncInitable}
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future} that resolves   to the `initable` instance or rejects with error.
     * @since 1.0
     */
    function async_initable_init(initable: Gio.AsyncInitable, io_priority: number): Future;
    /**
     * Wrapper for {@link Gio.bus_get}.
     * @param bus_type the {@link Gio.BusType}
     * @returns a {@link Dex.Future} that resolves to a   {@link Gio.DBusConnection} or rejects with error.
     * @since 0.4
     */
    function bus_get(bus_type: Gio.BusType | null): Future;
    /**
     * Wrapper for {@link Gio.bus_own_name}.
     *
     * Asks the D-Bus broker to own the well-known name `name` on the connection `connection`.
     *
     * `out_name_acquired_future` is a future that awaits owning the name and either
     * resolves to true, or rejects with an error.
     *
     * `out_name_lost_future` is a future that rejects when the name was lost.
     *
     * If either future is canceled, the name will be unowned.
     * @param connection The {@link Gio.DBusConnection} to own a name on.
     * @param name The well-known name to own.
     * @param flags a set of flags with ownership options.
     * @since 1.1
     */
    function bus_own_name_on_connection(
        connection: Gio.DBusConnection,
        name: string,
        flags: Gio.BusNameOwnerFlags | null,
    ): [Future | null, Future | null];
    /**
     * Reads a line from the data input stream.
     *
     * Wraps {@link Gio.DataInputStream.read_line_async}.
     * @param stream a {@link Gio.DataInputStream}
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future} that resolves   to a string containing the line (without the line terminator), or `null`   if the end of the stream is reached.
     * @since 1.1
     */
    function data_input_stream_read_line(stream: Gio.DataInputStream, io_priority: number): Future;
    /**
     * Wrapper for {@link Gio.DBusConnection.call}.
     * @param connection a {@link Gio.DBusConnection}
     * @param bus_name a unique or well-known bus name or `null` if   `connection` is not a message bus connection
     * @param object_path path of remote object
     * @param interface_name D-Bus interface to invoke method on
     * @param method_name the name of the method to invoke
     * @param parameters a {@link GLib.Variant} tuple with parameters for   the method or `null` if not passing parameters
     * @param reply_type the expected type of the reply (which will be a   tuple), or `null`
     * @param flags flags from the {@link Gio.DBusCallFlags} enumeration
     * @param timeout_msec the timeout in milliseconds, -1 to use the default   timeout or `G_MAXINT` for no timeout
     * @returns a {@link Dex.Future} that resolves to a   {@link GLib.Variant} or rejects with error.
     * @since 0.4
     */
    function dbus_connection_call(
        connection: Gio.DBusConnection,
        bus_name: string | null,
        object_path: string,
        interface_name: string,
        method_name: string,
        parameters: GLib.Variant | null,
        reply_type: GLib.VariantType | null,
        flags: Gio.DBusCallFlags | null,
        timeout_msec: number,
    ): Future;
    /**
     * Wrapper for {@link Gio.DBusConnection.call_with_unix_fd_list}.
     * @param connection a {@link Gio.DBusConnection}
     * @param bus_name a unique or well-known bus name or `null` if   `connection` is not a message bus connection
     * @param object_path path of remote object
     * @param interface_name D-Bus interface to invoke method on
     * @param method_name the name of the method to invoke
     * @param parameters a {@link GLib.Variant} tuple with parameters for   the method or `null` if not passing parameters
     * @param reply_type the expected type of the reply (which will be a   tuple), or `null`
     * @param flags flags from the {@link Gio.DBusCallFlags} enumeration
     * @param timeout_msec the timeout in milliseconds, -1 to use the default   timeout or `G_MAXINT` for no timeout
     * @param fd_list a {@link Gio.UnixFDList}
     * @returns a {@link Dex.FutureSet} that resolves to a   {@link GLib.Variant}.   The {@link Dex.Future} containing the resulting {@link Gio.UnixFDList} can   be retrieved with {@link Dex.FutureSet.get_future_at} with an index of 1.
     * @since 0.4
     */
    function dbus_connection_call_with_unix_fd_list(
        connection: Gio.DBusConnection,
        bus_name: string | null,
        object_path: string,
        interface_name: string,
        method_name: string,
        parameters: GLib.Variant | null,
        reply_type: GLib.VariantType | null,
        flags: Gio.DBusCallFlags | null,
        timeout_msec: number,
        fd_list?: Gio.UnixFDList | null,
    ): Future;
    /**
     * Asynchronously closes a connection.
     * @param connection a {@link Gio.DBusConnection}
     * @returns a {@link Dex.Future} that resolves   to `true` or rejects with error.
     * @since 1.0
     */
    function dbus_connection_close(connection: Gio.DBusConnection): Future;
    /**
     * Wrapper for {@link Gio.DBusConnection.send_message_with_reply}.
     * @param connection a {@link Gio.DBusConnection}
     * @param message a {@link Gio.DBusMessage}
     * @param flags a set of {@link Gio.DBusSendMessageFlags}
     * @param timeout_msec timeout in milliseconds, or -1 for default, or `G_MAXINT`   for no timeout.
     * @returns a {@link Dex.Future} that will resolve to a   {@link Gio.DBusMessage} or reject with failure.
     * @since 0.4
     */
    function dbus_connection_send_message_with_reply(
        connection: Gio.DBusConnection,
        message: Gio.DBusMessage,
        flags: Gio.DBusSendMessageFlags | null,
        timeout_msec: number,
    ): [Future, number];
    function error_quark(): GLib.Quark;
    /**
     * Creates a new GSource that will fire when `events` is satisfied.
     *
     * This is primarily useful when integrating with legacy systems on a
     * fiber.
     * @param fd a file-descriptor
     * @param events the POLLOUT|POLLIN style bitmask to watch for
     * @returns a {@link Dex.Future} that resolves to the   revents value when `events` is satisfied.
     * @since 1.1
     */
    function fd_watch(fd: number, events: number): Future;
    /**
     * Asynchronously copies a file and returns a {@link Dex.Future} which
     * can be observed for the result.
     * @param source a {@link Gio.File}
     * @param destination a {@link Gio.File}
     * @param flags a set of {@link Gio.FileCopyFlags}
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future} that resolves   to true if successful otherwise rejects with error.
     */
    function file_copy(
        source: Gio.File,
        destination: Gio.File,
        flags: Gio.FileCopyFlags | null,
        io_priority: number,
    ): Future;
    /**
     * Wraps {@link Gio.File.create} as a {@link Dex.Future}.
     * @param file a {@link Gio.File}
     * @param flags flags for creating the file
     * @param io_priority priority for the IO operation
     * @returns a {@link Dex.Future} that resolves to   a {@link Gio.FileOutputStream} or rejects with error.
     * @since 1.1
     */
    function file_create(file: Gio.File, flags: Gio.FileCreateFlags | null, io_priority: number): Future;
    /**
     * Asynchronously deletes a file and returns a {@link Dex.Future} which
     * can be observed for the result.
     * @param file a {@link Gio.File}
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future} that resolves   to true or rejects with error.
     */
    function file_delete(file: Gio.File, io_priority: number): Future;
    /**
     * @param file a {@link Gio.File}
     * @param attributes an attribute query string (see: [{@link Gio.File} documentation](iface@Gio.File))
     * @param flags a set of {@link Gio.FileQueryInfoFlags}
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future} that resolves to a   {@link Gio.FileEnumerator} or rejects with error.
     */
    function file_enumerate_children(
        file: Gio.File,
        attributes: string,
        flags: Gio.FileQueryInfoFlags | null,
        io_priority: number,
    ): Future;
    /**
     * Wraps {@link Gio.FileEnumerator.next_files_async}.
     *
     * Use {@link Dex.Future.await_boxed} to await for the result of this function.
     *
     * When on a fiber, you can do:
     *
     * ```c
     * g_autolist(GFileInfo) infos = dex_await_boxed (dex_file_enumerator_next_files (enumerator, 100, 0), &error);
     * ```
     * @param file_enumerator a {@link Gio.FileEnumerator}
     * @param num_files the number of files
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future} that resolves to   a {@link GLib.List} of {@link Gio.FileInfo}
     */
    function file_enumerator_next_files(
        file_enumerator: Gio.FileEnumerator,
        num_files: number,
        io_priority: number,
    ): Future;
    /**
     * @param file a {@link Gio.File}
     * @returns a {@link Dex.Future} that resolves   to a {@link GLib.Bytes}.
     */
    function file_load_contents_bytes(file: Gio.File): Future;
    /**
     * Asynchronously creates a directory and returns {@link Dex.Future} which
     * can be observed for the result.
     * @param file a {@link Gio.File}
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future}
     */
    function file_make_directory(file: Gio.File, io_priority: number): Future;
    /**
     * Creates a directory at `file`.
     *
     * If `file` already exists and is a directory, then the future
     * will resolve to `true`.
     * @param file a {@link Gio.File}
     * @returns a {@link Dex.Future} that resolves to   a boolean or rejects with error.
     * @since 1.0
     */
    function file_make_directory_with_parents(file: Gio.File): Future;
    /**
     * @param source source {@link Gio.File}
     * @param destination destination {@link Gio.File}
     * @param flags a set of {@link Gio.FileCopyFlags}
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @param progress_callback {@link Gio.FileProgressCallback} function for updates
     * @param progress_callback_data_destroy a function to destroy the   `progress_callback_data`, or `null`
     * @returns a {@link Dex.Future} that resolves to `true`   or rejects with error
     */
    function file_move(
        source: Gio.File,
        destination: Gio.File,
        flags: Gio.FileCopyFlags | null,
        io_priority: number,
        progress_callback: Gio.FileProgressCallback,
        progress_callback_data_destroy?: GLib.DestroyNotify | null,
    ): Future;
    /**
     * Queries to see if `file` exists asynchronously.
     * @param file a {@link Gio.File}
     * @returns a {@link Dex.Future} that will resolve with `true`   if the file exists, otherwise reject with error.
     * @since 0.6
     */
    function file_query_exists(file: Gio.File): Future;
    /**
     * @param file a {@link Gio.File}
     * @param flags a set of {@link Gio.FileQueryInfoFlags}
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future} that resolves to a   {@link Gio.FileType}.
     */
    function file_query_file_type(file: Gio.File, flags: Gio.FileQueryInfoFlags | null, io_priority: number): Future;
    /**
     * @param file a {@link Gio.File}
     * @param attributes an attribute query string (see: [GFile documentation](iface@Gio.File))
     * @param flags a set of {@link Gio.FileQueryInfoFlags}
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future} that resolves   to a {@link Gio.FileInfo} or rejects with error.
     */
    function file_query_info(
        file: Gio.File,
        attributes: string,
        flags: Gio.FileQueryInfoFlags | null,
        io_priority: number,
    ): Future;
    /**
     * Asynchronously opens a file for reading.
     * @param file a {@link Gio.File}
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future} that resolves   to a {@link Gio.FileInputStream}.
     */
    function file_read(file: Gio.File, io_priority: number): Future;
    /**
     * Opens a stream that will replace `file` on disk when the input
     * stream is closed.
     * @param file a {@link Gio.File}
     * @param etag the etag or `null`
     * @param make_backup
     * @param flags a set of {@link Gio.FileCreateFlags}
     * @param io_priority
     * @returns a {@link Dex.Future} that resolves   to a {@link Gio.FileInputStream}.
     */
    function file_replace(
        file: Gio.File,
        etag: string | null,
        make_backup: boolean,
        flags: Gio.FileCreateFlags | null,
        io_priority: number,
    ): Future;
    /**
     * Wraps {@link Gio.File.replace_contents_bytes_async}
     * @param file a {@link Gio.File}
     * @param contents a {@link GLib.Bytes}
     * @param etag the etag or `null`
     * @param make_backup if a backup file should be created
     * @param flags a set of {@link Gio.FileCreateFlags}
     * @returns a {@link Dex.Future} which resolves to the   new etag. Therefore, it is possible to be `null` without an   error having occurred.
     */
    function file_replace_contents_bytes(
        file: Gio.File,
        contents: GLib.Bytes | Uint8Array,
        etag: string | null,
        make_backup: boolean,
        flags: Gio.FileCreateFlags | null,
    ): Future;
    /**
     * @param file a {@link Gio.File}
     * @param file_info a {@link Gio.FileInfo}
     * @param flags a set of {@link Gio.FileQueryInfoFlags}
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future} that resolves to a   {@link Gio.FileInfo} or rejects with error.
     * @since 1.0
     */
    function file_set_attributes(
        file: Gio.File,
        file_info: Gio.FileInfo,
        flags: Gio.FileQueryInfoFlags | null,
        io_priority: number,
    ): Future;
    /**
     * Locates the first executable named program in the user’s path.
     *
     * This runs {@link GLib.find_program_in_path} on a dedicated thread.
     * @param program the name of the executable such as "grep"
     * @returns a {@link Dex.Future} that resolves to a   string containing the path or rejects with error.
     * @since 1.1
     */
    function find_program_in_path(program: string): Future;
    /**
     * Gets the major version number equivalent to `DEX_MAJOR_VERSION`
     * at compile time of libdex.
     * @since 1.1
     */
    function get_major_version(): number;
    /**
     * Gets the micro version number equivalent to `DEX_MICRO_VERSION`
     * at compile time of libdex.
     * @since 1.1
     */
    function get_micro_version(): number;
    function get_min_stack_size(): number;
    /**
     * Gets the minor version number equivalent to `DEX_MINOR_VERSION`
     * at compile time of libdex.
     * @since 1.1
     */
    function get_minor_version(): number;
    function get_page_size(): number;
    function init(): void;
    /**
     * @param self a {@link Gio.InputStream}
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future} that resolves   to true if successful or rejects with error.
     */
    function input_stream_close(self: Gio.InputStream, io_priority: number): Future;
    /**
     * Reads `count` bytes from an input stream into a pre-allocated `buffer`. The
     * `buffer` must stay valid for the lifetime of this future.
     * @param self a {@link Gio.InputStream}
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future} that reads `counts` bytes   into `buffer`
     */
    function input_stream_read(self: Gio.InputStream, io_priority: number): [Future, Uint8Array];
    /**
     * Reads `count` bytes from the stream.
     * @param stream a {@link Gio.InputStream}
     * @param count size in bytes to read from the stream
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future} that resolves   to a {@link GLib.Bytes}.
     */
    function input_stream_read_bytes(stream: Gio.InputStream, count: number, io_priority: number): Future;
    /**
     * @param self a {@link Gio.InputStream}
     * @param count the number of bytes to skip
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future} that resolves   to the number of bytes skipped as a `gint64`.
     */
    function input_stream_skip(self: Gio.InputStream, count: number, io_priority: number): Future;
    /**
     * @param io_stream a {@link Gio.IOStream}
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future} that resolves to   true or rejects with error.
     */
    function io_stream_close(io_stream: Gio.IOStream, io_priority: number): Future;
    /**
     * Similar to {@link GLib.mkdir_with_parents} but runs on a dedicated thread.
     * @param path a path to a directory to create
     * @param mode the mode for the directory such as `0750`
     * @returns a {@link Dex.Future} that resolves to 0   if successful, otherwise rejects with error.
     * @since 1.1
     */
    function mkdir_with_parents(path: string, mode: number): Future;
    /**
     * @param self a {@link Gio.OutputStream}
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future} that resolves   to true or rejects with error.
     */
    function output_stream_close(self: Gio.OutputStream, io_priority: number): Future;
    /**
     * @param output a {@link Gio.OutputStream}
     * @param input a {@link Gio.InputStream}
     * @param flags a set of {@link Gio.OutputStreamSpliceFlags}
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future} that resolves to the   number of bytes spliced as a `gint64` or rejects with error.
     */
    function output_stream_splice(
        output: Gio.OutputStream,
        input: Gio.InputStream,
        flags: Gio.OutputStreamSpliceFlags | null,
        io_priority: number,
    ): Future;
    /**
     * @param self a {@link Gio.OutputStream}
     * @param buffer
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future} that resolves   to the number of bytes written as a `gint64`
     */
    function output_stream_write(self: Gio.OutputStream, buffer: Uint8Array | string, io_priority: number): Future;
    /**
     * Writes `bytes` to `stream`.
     *
     * This function takes a reference to `bytes` and may be released after
     * calling this function.
     * @param stream a {@link Gio.InputStream}
     * @param bytes the {@link GLib.Bytes} to write to the stream
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future} that resolves to   a `gint64`.
     */
    function output_stream_write_bytes(
        stream: Gio.OutputStream,
        bytes: GLib.Bytes | Uint8Array,
        io_priority: number,
    ): Future;
    /**
     * @param resolver a {@link Gio.Resolver}
     * @param address the address to look up
     * @returns a {@link Dex.Future} that resolves to a   {@link GLib.List} of {@link Gio.InetAddress}.
     */
    function resolver_lookup_by_name(resolver: Gio.Resolver, address: string): Future;
    /**
     * @param socket_client a {@link Gio.SocketClient}
     * @param socket_connectable a {@link Gio.SocketConnectable}
     * @returns a {@link Dex.Future} that resolves to a   {@link Gio.SocketConnection} or rejects with error.
     */
    function socket_client_connect(socket_client: Gio.SocketClient, socket_connectable: Gio.SocketConnectable): Future;
    /**
     * @param listener a {@link Gio.SocketListener}
     * @returns a {@link Dex.Future} that resolves to   a {@link Gio.SocketConnection} or rejects with error.
     */
    function socket_listener_accept(listener: Gio.SocketListener): Future;
    /**
     * Creates a future that awaits for `subprocess` to complete using
     * {@link Gio.Subprocess.wait_check_async}.
     * @param subprocess a {@link Gio.Subprocess}
     * @returns a {@link Dex.Future} that will resolve when `subprocess`   exits cleanly or reject upon signal or non-successful exit.
     * @since 0.4
     */
    function subprocess_wait_check(subprocess: Gio.Subprocess): Future;
    /**
     * Spawns a new thread named `thread_name` running `thread_func` with
     * `user_data` passed to it.
     *
     * `thread_func` must return a {@link Dex.Future}.
     *
     * If this function is called from a thread that is not running a
     * {@link Dex.Scheduler} then the default scheduler will be used
     * to call `user_data_destroy`.
     *
     * If the resulting {@link Dex.Future} has not resolved or rejected,
     * then the same scheduler used to call `user_data_destroy` will be
     * used to propagate the result to the caller.
     * @param thread_name the name for the thread
     * @param thread_func the function to call on a thread
     * @returns a {@link Dex.Future} that resolves or rejects   the value or error returned from `thread_func` as a {@link Dex.Future}.
     * @since 1.0
     */
    function thread_spawn(thread_name: string | null, thread_func: ThreadFunc): Future;
    /**
     * Use this when running on a thread spawned with `dex_thread_spawn()` and
     * you need to block the thread until `future` has resolved or rejected.
     * @param future a {@link Dex.Future}
     * @returns `true` if `future` resolved, otherwise `false` and `error` is   set to the rejection.
     * @since 1.0
     */
    function thread_wait_for(future: Future): boolean;
    /**
     * This runs {@link GLib.unlink} on a dedicated thread.
     * @param path the path to unlink
     * @returns a {@link Dex.Future} that resolves to an   int of 0 on success or rejects with error.
     * @since 1.1
     */
    function unlink(path: string): Future;
    /**
     * Retrieves the {@link Dex.Object} stored inside the given `value`.
     * @param value a {@link GObject.Value} initialized with type `DEX_TYPE_OBJECT`
     * @returns a {@link Dex.Object}
     * @since 1.0
     */
    function value_dup_object(value: GObject.Value | any): Object | null;
    /**
     * Retrieves the {@link Dex.Object} stored inside the given `value`.
     * @param value a {@link GObject.Value} initialized with type `DEX_TYPE_OBJECT`
     * @returns a {@link Dex.Object}
     * @since 0.4
     */
    function value_get_object(value: GObject.Value | any): Object | null;
    /**
     * Stores the given {@link Dex.Object} inside `value`.
     *
     * The {@link GObject.Value} will acquire a reference to the `object`.
     * @param value a {@link GObject.Value} initialized with type `DEX_TYPE_OBJECT`
     * @param object a {@link Dex.Object} or `null`
     * @since 0.4
     */
    function value_set_object(value: GObject.Value | any, object?: Object | null): void;
    /**
     * Stores the given {@link Dex.Object} inside `value`.
     *
     * This function transfers the ownership of the `object` to the {@link GObject.Value}.
     * @param value a {@link GObject.Value} initialized with type `DEX_TYPE_OBJECT`
     * @param object a {@link Dex.Object}
     * @since 0.4
     */
    function value_take_object(value: GObject.Value | any, object?: Object | null): void;
    /**
     * @gir-type Callback
     */
    interface FiberFunc {
        (user_data?: any | null): Future | null;
    }
    /**
     * @gir-type Callback
     */
    interface FutureCallback {
        (future: Future): Future | null;
    }
    /**
     * @gir-type Callback
     */
    interface SchedulerFunc {
        (user_data?: any | null): void;
    }
    /**
     * @gir-type Callback
     */
    interface ThreadFunc {
        (user_data?: any | null): Future;
    }
    /**
     * @gir-type Alias
     */
    type FileInfoList = object | null;
    /**
     * @gir-type Alias
     */
    type InetAddressList = object | null;
    /**
     * Flags describing the behavior of a {@link Gio.DBusInterfaceSkeleton} instance.
     * @gir-type Flags
     * @since 1.1
     */
    enum DBusInterfaceSkeletonFlags {
        /**
         * No flags set.
         */
        NONE,
        /**
         * Each method invocation is
         *   handled in a fiber dedicated to the invocation. This means that the method implementation can
         *   use dex_await or similar. Authorization for method invocations uses the same fiber.
         *   This can not be used in combination with METHOD_INVOCATIONS_IN_THREAD and trying to do so leads
         *   to a runtime error.
         */
        HANDLE_METHOD_INVOCATIONS_IN_FIBER,
    }

    namespace AsyncPair {
        // Signal signatures
        interface SignalSignatures extends Future.SignalSignatures {}
    }

    /**
     * @gir-type Class
     */
    class AsyncPair extends Future {
        static $gtype: GObject.GType<AsyncPair>;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](instance: any | null, info: AsyncPairInfo): AsyncPair;

        // Signals

        /** @signal */
        connect<K extends keyof AsyncPair.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AsyncPair.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AsyncPair.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AsyncPair.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AsyncPair.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AsyncPair.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the cancellable for the async pair.
         *
         * If the {@link Dex.AsyncPair} is discarded by its callers, then it will
         * automatically be cancelled using {@link Gio.Cancellable.cancel}.
         * @returns the {@link Gio.Cancellable} associated with the   `async_pair`
         */
        get_cancellable(): Gio.Cancellable;
        /**
         * @param value
         */
        return_boolean(value: boolean): void;
        /**
         * Rejects `async_pair` with `error`.
         *
         * This function is meant to be used when manually wrapping
         * various {@link Gio.AsyncReadyCallback} based API.
         *
         * The ownership of `error` is taken when calling this function.
         * @param error a {@link GLib.Error}
         */
        return_error(error: GLib.Error): void;
        /**
         * @param value
         */
        return_int64(value: number): void;
        /**
         * Resolves `async_pair` with a value of `instance`.
         *
         * This function is meant to be used when manually wrapping
         * various {@link Gio.AsyncReadyCallback} based API.
         *
         * The ownership of `instance` is taken when calling this function.
         * @param instance a {@link GObject.Object}
         */
        return_object(instance: GObject.Object): void;
        /**
         * Resolves `async_pair` with `value`.
         * @param value a string or `null`
         */
        return_string(value?: string | null): void;
        /**
         * @param value
         */
        return_uint64(value: number): void;
        /**
         * Resolves `async_pair` with `variant`.
         * @param variant the {@link GLib.Variant} to resolve with
         */
        return_variant(variant: GLib.Variant): void;
        /**
         * Sets whether or not the future should cancel the async operation when
         * the future is discarded. This happens when no more futures are awaiting
         * the completion of this future.
         * @param cancel_on_discard if the operation should cancel when the future is discarded
         */
        set_cancel_on_discard(cancel_on_discard: boolean): void;
    }

    namespace AsyncResult {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AsyncResult.ConstructorProps {}
    }

    /**
     * {@link Dex.AsyncResult} is used to integrate a {@link Dex.Future} with {@link Gio.AsyncResult}.
     *
     * Use this class when you need to expose the traditional async/finish
     * behavior of {@link Gio.AsyncResult}.
     * @gir-type Class
     */
    class AsyncResult extends GObject.Object implements Gio.AsyncResult {
        static $gtype: GObject.GType<AsyncResult>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AsyncResult.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AsyncResult.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            source_object?: any | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback | null,
        ): AsyncResult;

        // Signals

        /** @signal */
        connect<K extends keyof AsyncResult.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AsyncResult.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AsyncResult.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AsyncResult.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AsyncResult.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AsyncResult.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Tracks the result of `future` and uses the value to complete `async_result`,
         * eventually calling the registered {@link Gio.AsyncReadyCallback}.
         * @param future a {@link Dex.Future}
         */
        ['await'](future: Future): void;
        /**
         * Gets the future for the {@link Dex.AsyncResult}, or `null` if a future
         * is not available.
         * @returns a {@link Dex.Future} or `null`
         */
        dup_future(): Future | null;
        get_name(): string;
        propagate_boolean(): boolean;
        propagate_double(): number;
        propagate_int(): number;
        propagate_pointer(): any | null;
        /**
         * @param name
         */
        set_name(name: string): void;
        /**
         * @param priority
         */
        set_priority(priority: number): void;
        /**
         * @param name
         */
        set_static_name(name: string): void;
        /**
         * Gets the source object from a {@link Gio.AsyncResult}.
         * @returns a new reference to the source    object for the `res`, or `NULL` if there is none.
         */
        get_source_object<T = GObject.Object>(): T;
        /**
         * Gets the user data from a {@link Gio.AsyncResult}.
         * @returns the user data for `res`.
         */
        get_user_data(): any | null;
        /**
         * Checks if `res` has the given `source_tag` (generally a function
         * pointer indicating the function `res` was created by).
         * @param source_tag an application-defined tag
         * @returns `TRUE` if `res` has the indicated `source_tag`, `FALSE` if   not.
         */
        is_tagged(source_tag?: any | null): boolean;
        /**
         * If `res` is a {@link Gio.SimpleAsyncResult}, this is equivalent to
         * {@link Gio.SimpleAsyncResult.propagate_error}. Otherwise it returns
         * `FALSE`.
         *
         * This can be used for legacy error handling in async `*_finish()`
         * wrapper functions that traditionally handled {@link Gio.SimpleAsyncResult}
         * error returns themselves rather than calling into the virtual method.
         * This should not be used in new code; {@link Gio.AsyncResult} errors that are
         * set by virtual methods should also be extracted by virtual methods,
         * to enable subclasses to chain up correctly.
         * @returns `TRUE` if `error` is has been filled in with an error from   `res`, `FALSE` if not.
         */
        legacy_propagate_error(): boolean;
        /**
         * Gets the source object from a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_get_source_object<T = GObject.Object>(): T;
        /**
         * Gets the user data from a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_get_user_data(): any | null;
        /**
         * Checks if `res` has the given `source_tag` (generally a function
         * pointer indicating the function `res` was created by).
         * @param source_tag an application-defined tag
         * @virtual
         */
        vfunc_is_tagged(source_tag?: any | null): boolean;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
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
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
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
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
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
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
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
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
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
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
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
         * @virtual
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

    namespace Block {
        // Signal signatures
        interface SignalSignatures extends Future.SignalSignatures {}
    }

    /**
     * {@link Dex.Block} represents a callback closure that can be scheduled to run
     * within a specific {@link GLib.MainContext}.
     *
     * You create these by chaining futures together using {@link Dex.Future.then},
     * {@link Dex.Future.catch}, {@link Dex.Future.finally} and similar.
     * @gir-type Class
     */
    class Block extends Future {
        static $gtype: GObject.GType<Block>;

        // Constructors

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Block.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Block.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Block.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Block.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Block.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Block.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the kind of block.
         *
         * The kind of block relates to what situations the block would be
         * executed such as for handling a future resolution, rejection, or
         * both.
         * @returns the {@link Dex.BlockKind} associated with the `block`
         */
        get_kind(): BlockKind;
        /**
         * Gets the scheduler to use when executing a block.
         * @returns the {@link Dex.Scheduler} associated with the `block`
         */
        get_scheduler(): Scheduler;
    }

    namespace Cancellable {
        // Signal signatures
        interface SignalSignatures extends Future.SignalSignatures {}
    }

    /**
     * {@link Dex.Cancellable} is a simple cancellation primitive which allows
     * for you to create {@link Dex.Future} that will reject upon cancellation.
     *
     * Use this combined with other futures using {@link Dex.Future.all_race}
     * to create a future that resolves when all other futures complete
     * or {@link Dex.Cancellable.cancel} is called to reject.
     * @gir-type Class
     */
    class Cancellable extends Future {
        static $gtype: GObject.GType<Cancellable>;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](): Cancellable;

        static new_from_cancellable(cancellable?: Gio.Cancellable | null): Cancellable;

        // Signals

        /** @signal */
        connect<K extends keyof Cancellable.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cancellable.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Cancellable.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cancellable.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Cancellable.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cancellable.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Rejects `cancellable`.
         *
         * Any future that is dependent on this cancellable will be notified
         * of the rejection. For some futures, that may cause them to also
         * reject or resolve.
         */
        cancel(): void;
    }

    namespace Channel {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}
    }

    /**
     * @gir-type Class
     */
    class Channel extends Object {
        static $gtype: GObject.GType<Channel>;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](capacity: number): Channel;

        // Signals

        /** @signal */
        connect<K extends keyof Channel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Channel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Channel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Channel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Channel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Channel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        can_receive(): boolean;
        can_send(): boolean;
        close_receive(): void;
        close_send(): void;
        /**
         * Receives the next item from the channel.
         *
         * The resulting future will resolve or reject when an item is available
         * to the channel or when send side has closed (in that order).
         * @returns a {@link Dex.Future}
         */
        receive(): Future;
        /**
         * Will attempt to receive all items in the channel as a {@link Dex.FutureSet}.
         *
         * If the receive side of the channel is closed, then the future will
         * reject with an error.
         *
         * If there are items in the queue, then they will be returned as part
         * of a {@link Dex.FutureSet} containing each of the futures.
         *
         * Otherwise, a {@link Dex.FutureSet} will be returned which will resolve or
         * reject when the next item is available in the channel (or the send
         * or receive sides are closed).
         * @returns a {@link Dex.Future}
         */
        receive_all(): Future;
        /**
         * Queues `future` into the channel.
         *
         * The other end of the channel can receive the future (or a future that will
         * eventually resolve to `future`) using {@link Dex.Channel.receive}.
         *
         * This function returns a {@link Dex.Future} that will resolve when the channels
         * capacity is low enough to queue more items.
         *
         * If the send side of the channel is closed, the returned {@link Dex.Future} will be
         * rejected with {@link Dex.Error.CHANNEL_CLOSED}.
         * @param future a {@link Dex.Future}
         * @returns a {@link Dex.Future}
         */
        send(future: Future): Future;
    }

    namespace DBusInterfaceSkeleton {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            'notify::g-flags': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gio.DBusInterfaceSkeleton.ConstructorProps, Gio.DBusInterface.ConstructorProps {}
    }

    /**
     * {@link Dex.DBusInterfaceSkeleton} provides integration between libdex and the GDBus
     * codegen. If the gdbus-codegen dex extension is used, all generated
     * InterfaceSkeletons inherit from {@link Dex.DBusInterfaceSkeleton} instead of
     * {@link Gio.DBusInterfaceSkeleton}, which allows the use of the API exposed here.
     * @gir-type Class
     */
    abstract class DBusInterfaceSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface {
        static $gtype: GObject.GType<DBusInterfaceSkeleton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DBusInterfaceSkeleton.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DBusInterfaceSkeleton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DBusInterfaceSkeleton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DBusInterfaceSkeleton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DBusInterfaceSkeleton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DBusInterfaceSkeleton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DBusInterfaceSkeleton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DBusInterfaceSkeleton.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Cancels all in-flight fibers.
         */
        cancel(): void;
        /**
         * Gets the {@link Dex.DBusInterfaceSkeletonFlags} that describes the behavior
         * of `interface_`
         * @returns One or more flags from the {@link Dex.DBusInterfaceSkeletonFlags} enumeration.
         */
        get_flags(): DBusInterfaceSkeletonFlags;
        /**
         * @param args
         */
        // Conflicted with Gio.DBusInterfaceSkeleton.get_flags
        get_flags(...args: never[]): any;
        /**
         * Sets flags describing what the behavior of `interface_` should be.
         * @param flags Flags from the {@link Dex.DBusInterfaceSkeletonFlags} enumeration.
         */
        set_flags(flags: DBusInterfaceSkeletonFlags | null): void;
        /**
         * @param args
         */
        // Conflicted with Gio.DBusInterfaceSkeleton.set_flags
        set_flags(...args: never[]): any;
        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         *
         * This can return `null` if no {@link Gio.DBusInterfaceInfo} was provided during
         * construction of `interface_` and is also not made available otherwise.
         * For example, {@link Gio.DBusProxy} implements {@link Gio.DBusInterface} but allows for a `null`
         * {@link Gio.DBusInterfaceInfo}.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo | null;
        /**
         * @param args
         */
        // Conflicted with Gio.DBusInterfaceSkeleton.get_info
        get_info(...args: never[]): any;
        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         */
        set_object(object?: Gio.DBusObject | null): void;
        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @virtual
         */
        vfunc_dup_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         *
         * This can return `null` if no {@link Gio.DBusInterfaceInfo} was provided during
         * construction of `interface_` and is also not made available otherwise.
         * For example, {@link Gio.DBusProxy} implements {@link Gio.DBusInterface} but allows for a `null`
         * {@link Gio.DBusInterfaceInfo}.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Gio.DBusInterfaceSkeleton.vfunc_get_info
        vfunc_get_info(...args: never[]): any;
        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object?: Gio.DBusObject | null): void;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
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
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
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
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
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
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
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
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
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
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
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
         * @virtual
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

    namespace Delayed {
        // Signal signatures
        interface SignalSignatures extends Future.SignalSignatures {}
    }

    /**
     * {@link Dex.Delayed} is a future which will resolve or reject the value of another
     * {@link Dex.Future} when {@link Dex.Delayed.release} is called.
     *
     * This allows you to gate the resolution of a future which has already
     * resolved or rejected until a later moment.
     * @gir-type Class
     */
    class Delayed extends Future {
        static $gtype: GObject.GType<Delayed>;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](future: Future): Delayed;

        // Signals

        /** @signal */
        connect<K extends keyof Delayed.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Delayed.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Delayed.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Delayed.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Delayed.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Delayed.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Retrieves the delayed future provided to {@link Dex.Delayed.new}.
         *
         * This function can only return a {@link Dex.Future} before
         * {@link Dex.Delayed.release} is called. After that, the delayed future is
         * released and this function will return `null`.
         * @returns a {@link Dex.Future} or `null`
         */
        dup_future(): Future | null;
        /**
         * Completes `delayed` using the value provided at construction.
         */
        release(): void;
    }

    namespace Fiber {
        // Signal signatures
        interface SignalSignatures extends Future.SignalSignatures {}
    }

    /**
     * {@link Dex.Fiber} is a fiber (a stack-based coroutine) which itself is a
     * {@link Dex.Future}.
     *
     * When the fiber completes execution it will either resolve or reject the
     * with the result or error.
     *
     * You may treat a {@link Dex.Fiber} like any other {@link Dex.Future} which makes it simple
     * to integrate fibers into other processing chains.
     *
     * {@link Dex.Fiber} are provided their own stack separate from a thread's main stack,
     * and are automatically scheduled as necessary.
     *
     * Use {@link Dex.Future.await} and similar functions to await the result of
     * another future within the fiber and the fiber will be suspended allowing
     * another fiber to run and/or the rest of the application's main loop.
     *
     * Once a fiber is created, it is pinned to that scheduler. Use
     * {@link Dex.Scheduler.spawn} to create a fiber on a specific scheduler.
     * @gir-type Class
     */
    class Fiber extends Future {
        static $gtype: GObject.GType<Fiber>;

        // Constructors

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Fiber.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Fiber.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Fiber.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Fiber.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Fiber.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Fiber.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Future {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}
    }

    /**
     * {@link Dex.Future} is the base class representing a future which may resolve with
     * a value or reject with error at some point in the future.
     *
     * It is the basis for libdex's concurrency and parallelism model.
     *
     * Use futures to represent work in progress and allow consumers to build
     * robust processing chains up front which will complete or fail as futures
     * resolve or reject.
     *
     * When running on a {@link Dex.Fiber}, you may use {@link Dex.Future.await}
     * and similar functions to suspend the current thread and return upon
     * completion of the dependent future.
     * @gir-type Class
     */
    class Future extends Object {
        static $gtype: GObject.GType<Future>;

        // Constructors

        _init(...args: any[]): void;

        static all_race(futures: Future[]): Future;

        static all(futures: Future[]): Future;

        static any(futures: Future[]): Future;

        static ['catch'](future: Future, callback: FutureCallback): Future;

        static catch_loop(future: Future, callback: FutureCallback): Future;

        static ['finally'](future: Future, callback: FutureCallback): Future;

        static finally_loop(future: Future, callback: FutureCallback): Future;

        static first(futures: Future[]): Future;

        static new_for_boolean(v_bool: boolean): Future;

        static new_for_double(v_double: number): Future;

        static new_for_errno(errno_: number): Future;

        static new_for_error(error: GLib.Error): Future;

        static new_for_fd(fd: number): Future;

        static new_for_float(v_float: number): Future;

        static new_for_int(v_int: number): Future;

        static new_for_int64(v_int64: number): Future;

        static new_for_object(value: GObject.Object): Future;

        static new_for_pointer(pointer?: any | null): Future;

        static new_for_string(string: string): Future;

        static new_for_uint(v_uint: number): Future;

        static new_for_uint64(v_uint64: number): Future;

        static new_for_value(value: GObject.Value | any): Future;

        static new_infinite(): Future;

        static new_take_object(value?: GObject.Object | null): Future;

        static new_take_string(string: string): Future;

        static then(future: Future, callback: FutureCallback): Future;

        static then_loop(future: Future, callback: FutureCallback): Future;

        // Signals

        /** @signal */
        connect<K extends keyof Future.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Future.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Future.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Future.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Future.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Future.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Suspends the current {@link Dex.Fiber} and resumes when `future` has completed.
         *
         * If `future` is completed when this function is called, the fiber will handle
         * the result immediately.
         *
         * This function may only be called within a {@link Dex.Fiber}. To do otherwise will
         * return `false` and `error` set to {@link Dex.Error.NO_FIBER}.
         *
         * It is an error to call this function in a way that would cause
         * intermediate code to become invalid when resuming the stack. For example,
         * if a foreach-style function taking a callback was to suspend from the
         * callback, undefined behavior may occur such as thread-local-storage
         * having changed.
         * @returns `true` if the future resolved, otherwise `false`   and `error` is set.
         */
        ['await'](): boolean;
        /**
         * Awaits on `future` and returns the gboolean result.
         *
         * If the result is not a `gboolean`, `error` is set.
         * @returns the `gboolean`, or `false` and `error` is set
         */
        await_boolean(): boolean;
        /**
         * Awaits on `future` and returns the `G_TYPE_BOXED` based result.
         * @returns the boxed result, or `null` and `error` is set.
         */
        await_boxed(): any | null;
        /**
         * Awaits on `future` and returns the result as an double.
         *
         * The resolved value must be of type `G_TYPE_DOUBLE` or `error` is set.
         * @returns an double, or 0 in case of failure and `error` is set.
         */
        await_double(): number;
        /**
         * Awaits on `future` and returns the enum result.
         *
         * If the result is not a `G_TYPE_ENUM`, `error` is set.
         * @returns the enum or 0 and `error` is set.
         */
        await_enum(): number;
        /**
         * Awaits on `future` and returns the resulting file-descriptor.
         *
         * The resolved value must be of type `DEX_TYPE_FD` or `error` is set.
         * @returns a valid file descriptor or -1. you may get -1 without   error being set if there was no rejected future.
         */
        await_fd(): number;
        /**
         * Awaits on `future` and returns the flags result.
         *
         * If the result is not a `G_TYPE_FLAGS`, `error` is set.
         * @returns the flags or 0 and `error` is set.
         */
        await_flags(): number;
        /**
         * Awaits on `future` and returns the result as an float.
         *
         * The resolved value must be of type `G_TYPE_FLOAT` or `error` is set.
         * @returns an float, or 0 in case of failure and `error` is set.
         */
        await_float(): number;
        /**
         * Awaits on `future` and returns the result as an int.
         *
         * The resolved value must be of type `G_TYPE_INT` or `error` is set.
         * @returns an int, or 0 in case of failure and `error` is set.
         */
        await_int(): number;
        /**
         * Awaits on `future` and returns the result as an int64.
         *
         * The resolved value must be of type `G_TYPE_INT64` or `error` is set.
         * @returns an int64, or 0 in case of failure and `error` is set.
         */
        await_int64(): number;
        /**
         * Awaits on `future` and returns the {@link GObject.Object}-based result.
         * @returns the object, or `null` and `error` is set.
         */
        await_object<T = GObject.Object>(): T;
        /**
         * Calls {@link Dex.Future.await} and returns the value of
         * {@link GObject.Value.get_pointer}, otherwise `error` is set if the future
         * rejected.
         * @returns a pointer or `null`
         */
        await_pointer(): any | null;
        /**
         * Awaits on `future` and returns the string result.
         *
         * If the result is not a `G_TYPE_STRING`, `error` is set.
         * @returns the string  or `null` and `error` is set
         */
        await_string(): string | null;
        /**
         * Awaits on `future` and returns the result as an uint.
         *
         * The resolved value must be of type `G_TYPE_UINT` or `error` is set.
         * @returns an uint, or 0 in case of failure and `error` is set.
         */
        await_uint(): number;
        /**
         * Awaits on `future` and returns the result as an uint64.
         *
         * The resolved value must be of type `G_TYPE_UINT64` or `error` is set.
         * @returns an uint64, or 0 in case of failure and `error` is set.
         */
        await_uint64(): number;
        /**
         * Awaits on `future` and returns the `G_TYPE_VARIANT` based result.
         * @returns the variant result, or `null` and `error` is set.
         */
        await_variant(): GLib.Variant;
        /**
         * Disowns a future, allowing it to run to completion even though there may
         * be no observer interested in the futures completion or rejection.
         */
        disown(): void;
        get_name(): string;
        get_status(): FutureStatus;
        get_value(): unknown;
        /**
         * This is a convenience function equivalent to calling
         * {@link Dex.Future.get_status} and checking for {@link Dex.FutureStatus.PENDING}.
         * @returns `true` if the future is still pending; otherwise `false`
         */
        is_pending(): boolean;
        /**
         * This is a convenience function equivalent to calling
         * {@link Dex.Future.get_status} and checking for {@link Dex.FutureStatus.REJECTED}.
         * @returns `true` if the future was rejected with an error; otherwise `false`
         */
        is_rejected(): boolean;
        /**
         * This is a convenience function equivalent to calling
         * {@link Dex.Future.get_status} and checking for {@link Dex.FutureStatus.RESOLVED}.
         * @returns `true` if the future has successfully resolved with a value;   otherwise `false`
         */
        is_resolved(): boolean;
        /**
         * Creates a new list model that will initially be empty and after
         * `future` resolves contain the items within it.
         * @returns a new {@link Dex.FutureListModel}
         */
        list_model_new(): Gio.ListModel;
    }

    namespace FutureListModel {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps<A extends GObject.Object = GObject.Object>
            extends GObject.Object.ConstructorProps, Gio.ListModel.ConstructorProps {}
    }

    /**
     * This class provides a {@link Gio.ListModel} implementation that will
     * expand to the contents of another {@link Gio.ListModel} from a
     * {@link Dex.Future}.
     * @gir-type Class
     * @since 1.1
     */
    class FutureListModel<A extends GObject.Object = GObject.Object>
        extends GObject.Object
        implements Gio.ListModel<A>
    {
        static $gtype: GObject.GType<FutureListModel>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FutureListModel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FutureListModel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof FutureListModel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FutureListModel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FutureListModel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FutureListModel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FutureListModel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FutureListModel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the future provided when creating the list model.
         * @returns a {@link Dex.Future} that resolves to a   {@link Gio.ListModel} or rejects with error.
         */
        dup_future(): Future;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @returns the {@link GObject.GType} of the items contained in `list`.
         */
        get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @returns the number of items in `list`.
         */
        get_n_items(): number;
        /**
         * Get the item at `position`.
         *
         * If `position` is greater than the number of items in `list`, `null` is
         * returned.
         *
         * `null` is never returned for an index that is smaller than the length
         * of the list.
         *
         * This function is meant to be used by language bindings in place
         * of `g_list_model_get_item()`.
         *
         * See also: `g_list_model_get_n_items()`
         * @param position the position of the item to fetch
         * @returns the object at `position`.
         */
        get_item(position: number): A | null;
        /**
         * Emits the {@link Gio.ListModel.SignalSignatures.items_changed | Gio.ListModel::items-changed} signal on `list`.
         *
         * This function should only be called by classes implementing
         * {@link Gio.ListModel}. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         *
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as {@link Gio.ListStore}), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the {@link Gio.ListModel}
         * consumer API.
         *
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         * @param position the position at which `list` changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;
        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list`, `null` is returned.
         *
         * `null` is never returned for an index that is smaller than the length
         * of the list.  See `g_list_model_get_n_items()`.
         *
         * The same {@link GObject.Object} instance may not appear more than once in a {@link Gio.ListModel}.
         * @param position the position of the item to fetch
         * @virtual
         */
        vfunc_get_item(position: number): A | null;
        /**
         * Gets the type of the items in `list`.
         *
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         *
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @virtual
         */
        vfunc_get_item_type(): GObject.GType;
        /**
         * Gets the number of items in `list`.
         *
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @virtual
         */
        vfunc_get_n_items(): number;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
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
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
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
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
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
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
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
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
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
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
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
         * @virtual
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

    namespace FutureSet {
        // Signal signatures
        interface SignalSignatures extends Future.SignalSignatures {}
    }

    /**
     * {@link Dex.FutureSet} represents a set of {@link Dex.Future}.
     *
     * You may retrieve each underlying {@link Dex.Future} using
     * {@link Dex.FutureSet.get_future_at}.
     *
     * The {@link Dex.FutureStatus} of of the {@link Dex.FutureSet} depends on how the set
     * was created using {@link Dex.Future.all}, {@link Dex.Future.any}, and similar
     * methods.
     * @gir-type Class
     */
    class FutureSet extends Future {
        static $gtype: GObject.GType<FutureSet>;

        // Constructors

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof FutureSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FutureSet.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FutureSet.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FutureSet.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FutureSet.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FutureSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the {@link Dex.Future} at `position` within `future_set`.
         *
         * It is a programmer error to request a {@link Dex.Future} which is outside of the
         * range of the number of futures contained within the `future_set`. Use
         * {@link Dex.FutureSet.get_size} to determine the number of {@link Dex.Future} that
         * are contained within the {@link Dex.FutureSet}.
         * @param position the position within the `future_set`
         * @returns the {@link Dex.Future} at `position`, or `null`
         */
        get_future_at(position: number): Future;
        /**
         * Gets the number of futures associated with the {@link Dex.FutureSet}. You
         * may use {@link Dex.FutureSet.get_future_at} to obtain the individual
         * {@link Dex.Future}.
         * @returns the number of {@link Dex.Future} in `future_set`.
         */
        get_size(): number;
        /**
         * Gets the result from a {@link Dex.Future} that is part of the
         * {@link Dex.FutureSet}.
         * @param position the {@link Dex.Future} position within the set
         * @returns a {@link GObject.Value} if successful; otherwise   `null` and `error` is set.
         */
        get_value_at(position: number): unknown;
    }

    namespace MainScheduler {
        // Signal signatures
        interface SignalSignatures extends Scheduler.SignalSignatures {}
    }

    /**
     * {@link Dex.MainScheduler} is the scheduler used on the default thread of an
     * application. It is meant to integrate with your main loop.
     *
     * This scheduler does the bulk of the work in an application.
     *
     * Use {@link Dex.ThreadPoolScheduler} when you want to offload work to a thread
     * and still use future-based programming.
     * @gir-type Class
     */
    class MainScheduler extends Scheduler {
        static $gtype: GObject.GType<MainScheduler>;

        // Constructors

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof MainScheduler.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MainScheduler.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MainScheduler.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MainScheduler.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MainScheduler.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MainScheduler.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Object {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }

    /**
     * {@link Dex.Object} is the basic building block of types defined within
     * libdex. Futures, Schedulers, and Channels all inherit from {@link Dex.Object}
     * which provides features like thread-safe weak pointers and memory
     * management operations.
     *
     * Objects that are integrating with GIO instead inherit from their
     * natural type in GIO.
     * @gir-type Class
     */
    abstract class Object {
        static $gtype: GObject.GType<Object>;

        // Constructors

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Object.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Object.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Object.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Acquires a reference on the given object, and increases its reference count by one.
         * @returns the object with its reference count increased
         */
        ref(): Object;
        /**
         * Releases a reference on the given object, and decreases its reference count by one.
         *
         * If it was the last reference, the resources associated to the instance are freed.
         */
        unref(): void;
    }

    namespace Promise {
        // Signal signatures
        interface SignalSignatures extends Future.SignalSignatures {}
    }

    /**
     * {@link Dex.Promise} is a convenient {@link Dex.Future} for propagating a result or
     * rejection in application and library code.
     *
     * Use this when there is not a more specialized {@link Dex.Future} for your needs to
     * propagate a result or rejection to the caller in an asynchronous fashion.
     * @gir-type Class
     */
    class Promise extends Future {
        static $gtype: GObject.GType<Promise>;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](): Promise;

        static new_cancellable(): Promise;

        // Signals

        /** @signal */
        connect<K extends keyof Promise.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Promise.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Promise.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Promise.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Promise.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Promise.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets a {@link Gio.Cancellable} that will cancel when the promise has
         * been discarded (and therefore result no longer necessary).
         *
         * This is useful when manually implementing wrappers around various
         * {@link Gio.AsyncReadyCallback} based API.
         *
         * If `promise` was created with {@link Dex.Promise.new}, then `null` is returned.
         * @returns a {@link Gio.Cancellable} or `null`
         */
        get_cancellable(): Gio.Cancellable | null;
        /**
         * Marks the promise as rejected, indicating a failure.
         * @param error a {@link GLib.Error}
         */
        reject(error: GLib.Error): void;
        /**
         * Sets the result for a {@link Dex.Promise}.
         * @param value a {@link GObject.Value} containing the resolved value
         */
        resolve(value: GObject.Value | any): void;
        /**
         * Resolve promise to `value`.
         * @param value
         */
        resolve_boolean(value: boolean): void;
        /**
         * @param boxed_type a {@link GObject.GType} of `G_TYPE_BOXED`
         * @param instance the boxed value to store
         */
        resolve_boxed(boxed_type: GObject.GType, instance?: any | null): void;
        /**
         * Resolve promise to `value`.
         * @param value
         */
        resolve_double(value: number): void;
        /**
         * Resolves the promise to `fd`.
         *
         * The file-descriptor may be `dup()`'d by this function and
         * `fd` closed immediately.
         *
         * Use `dex_await_fd()` or similar to retrieve the resolved FD.
         * @param fd a file-descriptor for the resolve to resolve to
         */
        resolve_fd(fd: number): void;
        /**
         * Resolve promise to `value`.
         * @param value
         */
        resolve_float(value: number): void;
        /**
         * Resolve promise to `value`.
         * @param value
         */
        resolve_int(value: number): void;
        /**
         * Resolve promise to `value`.
         * @param value
         */
        resolve_int64(value: number): void;
        /**
         * Resolve promise to `value`.
         * @param value
         */
        resolve_long(value: number): void;
        /**
         * @param object a {@link GObject.Object}
         */
        resolve_object(object?: GObject.Object | null): void;
        /**
         * @param value a string to use to resolve the promise
         */
        resolve_string(value: string): void;
        /**
         * Resolve promise to `value`.
         * @param value
         */
        resolve_uint(value: number): void;
        /**
         * Resolve promise to `value`.
         * @param value
         */
        resolve_uint64(value: number): void;
        /**
         * Resolve promise to `value`.
         * @param value
         */
        resolve_ulong(value: number): void;
        /**
         * If `variant` is floating, its reference is consumed.
         * @param variant a {@link GLib.Variant}
         */
        resolve_variant(variant?: GLib.Variant | null): void;
    }

    namespace Scheduler {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}
    }

    /**
     * {@link Dex.Scheduler} is the base class used by schedulers.
     *
     * Schedulers are responsible for ensuring asynchronous IO requests and
     * completions are processed. They also schedule closures to be run as part
     * of future result propagation. Additionally, they manage {@link Dex.Fiber}
     * execution and suspension.
     *
     * Specialized schedulers such as {@link Dex.ThreadPoolScheduler} will do this
     * for a number of threads and dispatch new work between them.
     * @gir-type Class
     */
    abstract class Scheduler extends Object {
        static $gtype: GObject.GType<Scheduler>;

        // Constructors

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Scheduler.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Scheduler.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Scheduler.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Scheduler.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Scheduler.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Scheduler.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets the default scheduler for the process.
         *
         * The default scheduler executes tasks within the default
         * {@link GLib.MainContext}.  Typically that is the main thread of the
         * application.
         */
        static get_default(): Scheduler;
        /**
         * Gets the default scheduler for the thread.
         */
        static get_thread_default(): Scheduler | null;
        /**
         * Gets the thread default scheduler with the reference count incremented.
         */
        static ref_thread_default(): Scheduler | null;

        // Methods

        /**
         * Gets the default main context for a scheduler.
         *
         * This may be a different value depending on the calling thread.
         *
         * For example, calling this on the {@link Dex.ThreadPoolScheduler} from
         * outside a worker thread may result in getting a shared
         * {@link GLib.MainContext} for the process.
         *
         * However, calling from a worker thread may give you a {@link GLib.MainContext}
         * specifically for that thread.
         * @returns a {@link GLib.MainContext}
         */
        get_main_context(): GLib.MainContext;
        /**
         * Queues `func` to run on `scheduler`.
         * @param func the function callback
         */
        push(func: SchedulerFunc): void;
        /**
         * Request `scheduler` to spawn a {@link Dex.Fiber}.
         *
         * The fiber will have its own stack and cooperatively schedules among other
         * fibers sharing the scheduler.
         *
         * If `stack_size` is 0, it will set to a sensible default. Otherwise, it is
         * rounded up to the nearest page size.
         *
         * ```c
         * static DexFuture *
         * fiber_func (gpointer data)
         * {
         *   GInputStream *stream = data;
         *   g_autoptr(GError) error = NULL;
         *   g_autoptr(GBytes) bytes = NULL;
         *
         *   if (!(bytes = dex_await_boxed (dex_input_stream_read_bytes (stream, 4096, 0), &error)))
         *     return dex_future_new_for_error (g_steal_pointer (&error));
         *
         *   ...
         *
         *   return dex_future_new_true ();
         * }
         *
         * DexFuture *
         * spawn_fiber (GInputStream *stream)
         * {
         *   return dex_scheduler_spawn (NULL, 0, fiber_func,
         *                               g_object_ref (stream),
         *                               g_object_unref);
         * }
         * ```
         * @param stack_size stack size in bytes or 0
         * @param func a {@link Dex.FiberFunc}
         * @returns a {@link Dex.Future} that will resolve or reject when   `func` completes (or its resulting {@link Dex.Future} completes).
         */
        spawn(stack_size: number, func: FiberFunc): Future;
    }

    namespace StaticFuture {
        // Signal signatures
        interface SignalSignatures extends Future.SignalSignatures {}
    }

    /**
     * {@link Dex.StaticFuture} represents a future that is resolved from the initial
     * state.
     *
     * Use this when you need to create a future for API reasons but already have
     * the value or rejection at that point.
     *
     * {@link Dex.StaticFuture} is used internally by functions like
     * {@link Dex.Future.new_for_boolean} and similar.
     * @gir-type Class
     */
    class StaticFuture extends Future {
        static $gtype: GObject.GType<StaticFuture>;

        // Constructors

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof StaticFuture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StaticFuture.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StaticFuture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StaticFuture.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StaticFuture.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StaticFuture.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace ThreadPoolScheduler {
        // Signal signatures
        interface SignalSignatures extends Scheduler.SignalSignatures {}
    }

    /**
     * {@link Dex.ThreadPoolScheduler} is a {@link Dex.Scheduler} that will dispatch work
     * items and fibers to sub-schedulers on a specific operating system thread.
     *
     * {@link Dex.Fiber} will never migrate from the thread they are created on to
     * reduce chances of safety issues involved in tracking state between CPU.
     *
     * New work items are placed into a global work queue and then dispatched
     * efficiently to a single thread pool worker using a specialized async
     * semaphore. On modern Linux using io_uring, this wakes up a single worker
     * thread and therefore is not subject to "thundering herd" common with
     * global work queues.
     *
     * When a worker creates a new work item, it is placed into a work stealing
     * queue owned by the thread. Other worker threads may steal work items when
     * they have exhausted their own work queue.
     * @gir-type Class
     */
    class ThreadPoolScheduler extends Scheduler {
        static $gtype: GObject.GType<ThreadPoolScheduler>;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](): ThreadPoolScheduler;

        // Signals

        /** @signal */
        connect<K extends keyof ThreadPoolScheduler.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ThreadPoolScheduler.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ThreadPoolScheduler.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ThreadPoolScheduler.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ThreadPoolScheduler.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ThreadPoolScheduler.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets the default thread pool scheduler for the instance.
         *
         * This function is useful to allow programs and libraries to share
         * an off-main-thread scheduler without having to coordinate on where
         * the scheduler instance is created or owned.
         */
        static get_default(): Scheduler;
    }

    namespace Timeout {
        // Signal signatures
        interface SignalSignatures extends Future.SignalSignatures {}
    }

    /**
     * {@link Dex.Timeout} is a {@link Dex.Future} that will reject after the configured
     * period of time.
     * @gir-type Class
     */
    class Timeout extends Future {
        static $gtype: GObject.GType<Timeout>;

        // Constructors

        _init(...args: any[]): void;

        static new_deadline(deadline: number): Timeout;

        static new_msec(msec: number): Timeout;

        static new_seconds(seconds: number): Timeout;

        static new_usec(usec: number): Timeout;

        // Signals

        /** @signal */
        connect<K extends keyof Timeout.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Timeout.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Timeout.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Timeout.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Timeout.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Timeout.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Postpoone `timeout` to complete at `deadline` in the monotonic
         * clock. See {@link GLib.get_monotonic_time} for getting the
         * monotonic time in microseconds.
         * @param deadline a deadline in monotonic clock
         */
        postpone_until(deadline: number): void;
    }

    namespace UnixSignal {
        // Signal signatures
        interface SignalSignatures extends Future.SignalSignatures {}
    }

    /**
     * {@link Dex.UnixSignal} is a {@link Dex.Future} that will resolve when a specific
     * unix signal has been received.
     *
     * Use this when you want to handle a signal from your main loop rather than
     * from a resticted operating signal handler.
     *
     * On Linux, this uses a signalfd.
     * @gir-type Class
     */
    class UnixSignal extends Future {
        static $gtype: GObject.GType<UnixSignal>;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](signum: number): UnixSignal;

        // Signals

        /** @signal */
        connect<K extends keyof UnixSignal.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UnixSignal.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof UnixSignal.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UnixSignal.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof UnixSignal.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UnixSignal.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the signal number that the future represents.
         */
        get_signum(): number;
    }

    /**
     * @gir-type Struct
     */
    abstract class AioContext {
        static $gtype: GObject.GType<AioContext>;
    }

    /**
     * @gir-type Struct
     */
    class AsyncPairInfo {
        static $gtype: GObject.GType<AsyncPairInfo>;

        // Fields

        async: any;
        finish: any;
        return_type: GObject.GType;
    }

    /**
     * @gir-type Alias
     */
    type AsyncResultClass = typeof AsyncResult;
    /**
     * @gir-type Alias
     */
    type DBusInterfaceSkeletonClass = typeof DBusInterfaceSkeleton;
    /**
     * @gir-type Alias
     */
    type FutureListModelClass = typeof FutureListModel;
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

export default Dex;

// END
