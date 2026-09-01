
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
import type GioUnix from '@girs/giounix-2.0';
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
        THEN = 1,
        CATCH = 2,
        FINALLY = 3,
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

        static INVALID_TRANSITION: number;

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
        PENDING = 0,
        RESOLVED = 1,
        REJECTED = 2,
    }


    /**
     * @gir-type Enum
     */
    enum ThreadPoolShutdownMode {
        DRAIN = 0,
        CANCEL_QUEUED = 1,
    }


    /**
     * An asynchronous `close()` wrapper.
     * 
     * This function takes ownership of `fd` and will close it asynchronously.
     * 
     * Generally you want to provide `NULL` for the `aio_context` as that
     * will get the default aio context for your scheduler.
     * @param aio_context 
     * @param fd the file descriptor to close
     * @returns a future that will resolve to `true` when the   close completes or rejects with error.
     * @since 1.2
     */
    function aio_close(aio_context: AioContext | null, fd: number): Future;

    /**
     * An asynchronous `open()` wrapper.
     * 
     * Generally you want to provide `NULL` for the `aio_context` as that
     * will get the default aio context for your scheduler.
     * 
     * The resulting future resolves to a file descriptor which can be consumed
     * with {@link Dex.Future.await_fd}.
     * @param aio_context 
     * @param path the path to open
     * @param flags flags for `open()`
     * @param mode permissions to use when creating the file
     * @returns a future that will resolve when the   open completes or rejects with error.
     * @since 1.2
     */
    function aio_open(aio_context: AioContext | null, path: string, flags: number, mode: number): Future;

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
    function aio_read(aio_context: AioContext | null, fd: number, offset: bigint | number): [Future, Uint8Array];

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
    function aio_write(aio_context: AioContext | null, fd: number, buffer: Uint8Array | string, offset: bigint | number): Future;

    /**
     * Wraps {@link Gio.AppInfo.get_default_for_type_async}.
     * @param content_type a content type
     * @param must_support_uris whether the app must support URIs
     * @returns a {@link Dex.Future} that resolves to a   {@link Gio.AppInfo} or rejects with error.
     * @since 1.2
     */
    function app_info_get_default_for_type(content_type: string, must_support_uris: boolean): Future;

    /**
     * Wraps {@link Gio.AppInfo.get_default_for_uri_scheme_async}.
     * @param uri_scheme a URI scheme
     * @returns a {@link Dex.Future} that resolves to a   {@link Gio.AppInfo} or rejects with error.
     * @since 1.2
     */
    function app_info_get_default_for_uri_scheme(uri_scheme: string): Future;

    /**
     * Wraps {@link Gio.AppInfo.launch_default_for_uri_async}.
     * @param uri a URI to launch
     * @param context a {@link Gio.AppLaunchContext}, or `null`
     * @returns a {@link Dex.Future} that resolves to `true`   or rejects with error.
     * @since 1.2
     */
    function app_info_launch_default_for_uri(uri: string, context: Gio.AppLaunchContext | null): Future;

    /**
     * Wraps {@link Gio.AppInfo.launch_uris_async}.
     * @param appinfo a {@link Gio.AppInfo}
     * @param uris URIs to launch
     * @param context a {@link Gio.AppLaunchContext}, or `null`
     * @returns a {@link Dex.Future} that resolves to `true`   or rejects with error.
     * @since 1.2
     */
    function app_info_launch_uris(appinfo: Gio.AppInfo, uris: string[], context: Gio.AppLaunchContext | null): Future;

    /**
     * A helper for {@link Gio.AsyncInitable.init_async}.
     * @param initable a {@link Gio.AsyncInitable}
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future} that resolves   to the `initable` instance or rejects with error.
     * @since 1.0
     */
    function async_initable_init(initable: Gio.AsyncInitable, io_priority: number): Future;

    /**
     * Wraps {@link Gio.BufferedInputStream.fill_async}.
     * @param stream a {@link Gio.BufferedInputStream}
     * @param count the number of bytes to fill, or -1
     * @param io_priority priority for the IO operation
     * @returns a {@link Dex.Future} that resolves to the number   of bytes read as a `gint64`, or rejects with error.
     * @since 1.2
     */
    function buffered_input_stream_fill(stream: Gio.BufferedInputStream, count: bigint | number, io_priority: number): Future;

    /**
     * Wrapper for {@link Gio.bus_get}.
     * @param bus_type the {@link Gio.BusType}
     * @returns a {@link Dex.Future} that resolves to a   {@link Gio.DBusConnection} or rejects with error.
     * @since 0.4
     */
    function bus_get(bus_type: Gio.BusType): Future;

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
    function bus_own_name_on_connection(connection: Gio.DBusConnection, name: string, flags: Gio.BusNameOwnerFlags): [Future | null, Future | null];

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
     * Reads a UTF-8 line from the data input stream.
     * 
     * Wraps {@link Gio.DataInputStream.read_line_async} with
     * {@link Gio.DataInputStream.read_line_finish_utf8}.
     * @param stream a {@link Gio.DataInputStream}
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future} that resolves   to a string containing the line (without the line terminator), or `null`   if the end of the stream is reached.
     * @since 1.2
     */
    function data_input_stream_read_line_utf8(stream: Gio.DataInputStream, io_priority: number): Future;

    /**
     * Reads data from the stream until one of `stop_chars` is found.
     * 
     * Wraps {@link Gio.DataInputStream.read_upto_async}.
     * @param stream a {@link Gio.DataInputStream}
     * @param stop_chars characters to terminate the read
     * @param stop_chars_len length of `stop_chars`, or -1 if `stop_chars` is nul-terminated
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future} that resolves   to a string containing the read data, not including the stop character, or   `null` if the end of the stream is reached.
     * @since 1.2
     */
    function data_input_stream_read_upto(stream: Gio.DataInputStream, stop_chars: string, stop_chars_len: bigint | number, io_priority: number): Future;

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
    function dbus_connection_call(connection: Gio.DBusConnection, bus_name: string | null, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant | null, reply_type: GLib.VariantType | null, flags: Gio.DBusCallFlags, timeout_msec: number): Future;

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
    function dbus_connection_call_with_unix_fd_list(connection: Gio.DBusConnection, bus_name: string | null, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant | null, reply_type: GLib.VariantType | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list: Gio.UnixFDList | null): Future;

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
    function dbus_connection_send_message_with_reply(connection: Gio.DBusConnection, message: Gio.DBusMessage, flags: Gio.DBusSendMessageFlags, timeout_msec: number): [Future, number];

    /**
     * Wraps {@link Gio.DtlsConnection.close_async}.
     * @param dtls_connection a {@link Gio.DtlsConnection}
     * @param io_priority priority for the IO operation
     * @returns a {@link Dex.Future} that resolves to `true`   or rejects with error.
     * @since 1.2
     */
    function dtls_connection_close(dtls_connection: Gio.DtlsConnection, io_priority: number): Future;

    /**
     * Wraps {@link Gio.DtlsConnection.handshake_async}.
     * @param dtls_connection a {@link Gio.DtlsConnection}
     * @param io_priority priority for the IO operation
     * @returns a {@link Dex.Future} that resolves to `true`   or rejects with error.
     * @since 1.2
     */
    function dtls_connection_handshake(dtls_connection: Gio.DtlsConnection, io_priority: number): Future;

    /**
     * Wraps {@link Gio.DtlsConnection.shutdown_async}.
     * @param dtls_connection a {@link Gio.DtlsConnection}
     * @param shutdown_read whether to shut down the read side
     * @param shutdown_write whether to shut down the write side
     * @param io_priority priority for the IO operation
     * @returns a {@link Dex.Future} that resolves to `true`   or rejects with error.
     * @since 1.2
     */
    function dtls_connection_shutdown(dtls_connection: Gio.DtlsConnection, shutdown_read: boolean, shutdown_write: boolean, io_priority: number): Future;

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
     * Wraps {@link Gio.File.append_to_async} as a {@link Dex.Future}.
     * @param file a {@link Gio.File}
     * @param flags flags for appending to the file
     * @param io_priority priority for the IO operation
     * @returns a {@link Dex.Future} that resolves to a   {@link Gio.FileOutputStream} or rejects with error.
     * @since 1.2
     */
    function file_append_to(file: Gio.File, flags: Gio.FileCreateFlags, io_priority: number): Future;

    /**
     * Asynchronously copies a file and returns a {@link Dex.Future} which
     * can be observed for the result.
     * @param source a {@link Gio.File}
     * @param destination a {@link Gio.File}
     * @param flags a set of {@link Gio.FileCopyFlags}
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future} that resolves   to true if successful otherwise rejects with error.
     */
    function file_copy(source: Gio.File, destination: Gio.File, flags: Gio.FileCopyFlags, io_priority: number): Future;

    /**
     * Wraps {@link Gio.File.copy_async} with progress callback support.
     * @param source source {@link Gio.File}
     * @param destination destination {@link Gio.File}
     * @param flags a set of {@link Gio.FileCopyFlags}
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @param progress_callback {@link Gio.FileProgressCallback} function for updates
     * @returns a {@link Dex.Future} that resolves to `true`   or rejects with error
     * @since 1.2
     */
    function file_copy_with_progress(source: Gio.File, destination: Gio.File, flags: Gio.FileCopyFlags, io_priority: number, progress_callback: Gio.FileProgressCallback | null): Future;

    /**
     * Wraps {@link Gio.File.create} as a {@link Dex.Future}.
     * @param file a {@link Gio.File}
     * @param flags flags for creating the file
     * @param io_priority priority for the IO operation
     * @returns a {@link Dex.Future} that resolves to   a {@link Gio.FileOutputStream} or rejects with error.
     * @since 1.1
     */
    function file_create(file: Gio.File, flags: Gio.FileCreateFlags, io_priority: number): Future;

    /**
     * Wraps {@link Gio.File.create_readwrite_async} as a {@link Dex.Future}.
     * @param file a {@link Gio.File}
     * @param flags flags for creating the file
     * @param io_priority priority for the IO operation
     * @returns a {@link Dex.Future} that resolves to a   {@link Gio.FileIOStream} or rejects with error.
     * @since 1.2
     */
    function file_create_readwrite(file: Gio.File, flags: Gio.FileCreateFlags, io_priority: number): Future;

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
    function file_enumerate_children(file: Gio.File, attributes: string, flags: Gio.FileQueryInfoFlags, io_priority: number): Future;

    /**
     * Wraps {@link Gio.FileEnumerator.close_async}.
     * @param file_enumerator a {@link Gio.FileEnumerator}
     * @param io_priority priority for the IO operation
     * @returns a {@link Dex.Future} that resolves to `true`   or rejects with error.
     * @since 1.2
     */
    function file_enumerator_close(file_enumerator: Gio.FileEnumerator, io_priority: number): Future;

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
    function file_enumerator_next_files(file_enumerator: Gio.FileEnumerator, num_files: number, io_priority: number): Future;

    /**
     * Wraps {@link Gio.File.find_enclosing_mount_async}.
     * @param file a {@link Gio.File}
     * @param io_priority priority for the IO operation
     * @returns a {@link Dex.Future} that resolves to a   {@link Gio.Mount} or rejects with error.
     * @since 1.2
     */
    function file_find_enclosing_mount(file: Gio.File, io_priority: number): Future;

    /**
     * Wraps {@link Gio.FileInputStream.query_info_async}.
     * @param stream a {@link Gio.FileInputStream}
     * @param attributes file attributes to query
     * @param io_priority priority for the IO operation
     * @returns a {@link Dex.Future} that resolves to a   {@link Gio.FileInfo} or rejects with error.
     * @since 1.2
     */
    function file_input_stream_query_info(stream: Gio.FileInputStream, attributes: string, io_priority: number): Future;

    /**
     * Wraps {@link Gio.FileIOStream.query_info_async}.
     * @param stream a {@link Gio.FileIOStream}
     * @param attributes file attributes to query
     * @param io_priority priority for the IO operation
     * @returns a {@link Dex.Future} that resolves to a   {@link Gio.FileInfo} or rejects with error.
     * @since 1.2
     */
    function file_io_stream_query_info(stream: Gio.FileIOStream, attributes: string, io_priority: number): Future;

    /**
     * Wraps {@link Gio.File.load_bytes_async}.
     * @param file a {@link Gio.File}
     * @returns a {@link Dex.Future} that resolves to a   {@link GLib.Bytes} or rejects with error.
     * @since 1.2
     */
    function file_load_bytes(file: Gio.File): Future;

    /**
     * @param file a {@link Gio.File}
     * @returns a {@link Dex.Future} that resolves   to a {@link GLib.Bytes}.
     */
    function file_load_contents_bytes(file: Gio.File): Future;

    /**
     * Wraps {@link Gio.File.load_partial_contents_async}.
     * @param file a {@link Gio.File}
     * @param read_more_callback callback to determine if more bytes should be loaded
     * @returns a {@link Dex.Future} that resolves to a   {@link GLib.Bytes} or rejects with error.
     * @since 1.2
     */
    function file_load_partial_contents_bytes(file: Gio.File, read_more_callback: Gio.FileReadMoreCallback | null): Future;

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
     * Wraps {@link Gio.File.make_symbolic_link_async}.
     * @param file a {@link Gio.File}
     * @param symlink_value the path for the target of the symbolic link
     * @param io_priority priority for the IO operation
     * @returns a {@link Dex.Future} that resolves to `true`   or rejects with error.
     * @since 1.2
     */
    function file_make_symbolic_link(file: Gio.File, symlink_value: string, io_priority: number): Future;

    /**
     * @param source source {@link Gio.File}
     * @param destination destination {@link Gio.File}
     * @param flags a set of {@link Gio.FileCopyFlags}
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @param progress_callback {@link Gio.FileProgressCallback} function for updates
     * @returns a {@link Dex.Future} that resolves to `true`   or rejects with error
     */
    function file_move(source: Gio.File, destination: Gio.File, flags: Gio.FileCopyFlags, io_priority: number, progress_callback: Gio.FileProgressCallback): Future;

    /**
     * Wraps {@link Gio.File.new_tmp_dir_async} as a {@link Dex.Future}.
     * @param tmpl template for the directory name, or `null`
     * @param io_priority priority for the IO operation
     * @returns a {@link Dex.Future} that resolves to a   {@link Gio.File} or rejects with error.
     * @since 1.2
     */
    function file_new_tmp_dir(tmpl: string | null, io_priority: number): Future;

    /**
     * Wraps {@link Gio.File.open_readwrite_async} as a {@link Dex.Future}.
     * @param file a {@link Gio.File}
     * @param io_priority priority for the IO operation
     * @returns a {@link Dex.Future} that resolves to a   {@link Gio.FileIOStream} or rejects with error.
     * @since 1.2
     */
    function file_open_readwrite(file: Gio.File, io_priority: number): Future;

    /**
     * Wraps {@link Gio.FileOutputStream.query_info_async}.
     * @param stream a {@link Gio.FileOutputStream}
     * @param attributes file attributes to query
     * @param io_priority priority for the IO operation
     * @returns a {@link Dex.Future} that resolves to a   {@link Gio.FileInfo} or rejects with error.
     * @since 1.2
     */
    function file_output_stream_query_info(stream: Gio.FileOutputStream, attributes: string, io_priority: number): Future;

    /**
     * Wraps {@link Gio.File.query_default_handler_async}.
     * @param file a {@link Gio.File}
     * @param io_priority priority for the IO operation
     * @returns a {@link Dex.Future} that resolves to a   {@link Gio.AppInfo} or rejects with error.
     * @since 1.2
     */
    function file_query_default_handler(file: Gio.File, io_priority: number): Future;

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
    function file_query_file_type(file: Gio.File, flags: Gio.FileQueryInfoFlags, io_priority: number): Future;

    /**
     * Wraps {@link Gio.File.query_filesystem_info_async}.
     * @param file a {@link Gio.File}
     * @param attributes an attribute query string
     * @param io_priority priority for the IO operation
     * @returns a {@link Dex.Future} that resolves to a   {@link Gio.FileInfo} or rejects with error.
     * @since 1.2
     */
    function file_query_filesystem_info(file: Gio.File, attributes: string, io_priority: number): Future;

    /**
     * @param file a {@link Gio.File}
     * @param attributes an attribute query string (see: [GFile documentation](iface@Gio.File))
     * @param flags a set of {@link Gio.FileQueryInfoFlags}
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future} that resolves   to a {@link Gio.FileInfo} or rejects with error.
     */
    function file_query_info(file: Gio.File, attributes: string, flags: Gio.FileQueryInfoFlags, io_priority: number): Future;

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
    function file_replace(file: Gio.File, etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, io_priority: number): Future;

    /**
     * Wraps {@link Gio.File.replace_contents_async}.
     * 
     * This function copies `contents` into a {@link GLib.Bytes} so the caller does
     * not need to keep the buffer alive for the duration of the operation.
     * @param file a {@link Gio.File}
     * @param contents the contents to write
     * @param etag the etag or `null`
     * @param make_backup if a backup file should be created
     * @param flags a set of {@link Gio.FileCreateFlags}
     * @returns a {@link Dex.Future} which resolves to the new   etag, or `null` if no etag is available.
     * @since 1.2
     */
    function file_replace_contents(file: Gio.File, contents: Uint8Array | string, etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags): Future;

    /**
     * Wraps {@link Gio.File.replace_contents_bytes_async}
     * @param file a {@link Gio.File}
     * @param contents a {@link GLib.Bytes}
     * @param etag the etag or `null`
     * @param make_backup if a backup file should be created
     * @param flags a set of {@link Gio.FileCreateFlags}
     * @returns a {@link Dex.Future} which resolves to the   new etag. Therefore, it is possible to be `null` without an   error having occurred.
     */
    function file_replace_contents_bytes(file: Gio.File, contents: GLib.Bytes | Uint8Array, etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags): Future;

    /**
     * Wraps {@link Gio.File.replace_readwrite_async} as a {@link Dex.Future}.
     * @param file a {@link Gio.File}
     * @param etag the etag or `null`
     * @param make_backup if a backup file should be created
     * @param flags flags for replacing the file
     * @param io_priority priority for the IO operation
     * @returns a {@link Dex.Future} that resolves to a   {@link Gio.FileIOStream} or rejects with error.
     * @since 1.2
     */
    function file_replace_readwrite(file: Gio.File, etag: string | null, make_backup: boolean, flags: Gio.FileCreateFlags, io_priority: number): Future;

    /**
     * @param file a {@link Gio.File}
     * @param file_info a {@link Gio.FileInfo}
     * @param flags a set of {@link Gio.FileQueryInfoFlags}
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future} that resolves to a   {@link Gio.FileInfo} or rejects with error.
     * @since 1.0
     */
    function file_set_attributes(file: Gio.File, file_info: Gio.FileInfo, flags: Gio.FileQueryInfoFlags, io_priority: number): Future;

    /**
     * Wraps {@link Gio.File.set_display_name_async}.
     * @param file a {@link Gio.File}
     * @param display_name a new display name
     * @param io_priority priority for the IO operation
     * @returns a {@link Dex.Future} that resolves to the renamed   {@link Gio.File} or rejects with error.
     * @since 1.2
     */
    function file_set_display_name(file: Gio.File, display_name: string, io_priority: number): Future;

    /**
     * Wraps {@link Gio.File.trash_async}.
     * @param file a {@link Gio.File}
     * @param io_priority priority for the IO operation
     * @returns a {@link Dex.Future} that resolves to `true`   or rejects with error.
     * @since 1.2
     */
    function file_trash(file: Gio.File, io_priority: number): Future;

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
    function input_stream_read_bytes(stream: Gio.InputStream, count: bigint | number, io_priority: number): Future;

    /**
     * @param self a {@link Gio.InputStream}
     * @param count the number of bytes to skip
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future} that resolves   to the number of bytes skipped as a `gint64`.
     */
    function input_stream_skip(self: Gio.InputStream, count: bigint | number, io_priority: number): Future;

    /**
     * @param io_stream a {@link Gio.IOStream}
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future} that resolves to   true or rejects with error.
     */
    function io_stream_close(io_stream: Gio.IOStream, io_priority: number): Future;

    /**
     * Wraps {@link Gio.IOStream.splice_async}.
     * @param stream1 a {@link Gio.IOStream}
     * @param stream2 a {@link Gio.IOStream}
     * @param flags splice flags
     * @param io_priority priority for the IO operation
     * @returns a {@link Dex.Future} that resolves to `true`   or rejects with error.
     * @since 1.2
     */
    function io_stream_splice(stream1: Gio.IOStream, stream2: Gio.IOStream, flags: Gio.IOStreamSpliceFlags, io_priority: number): Future;

    /**
     * Similar to {@link GLib.mkdir_with_parents} but runs on a dedicated thread.
     * @param path a path to a directory to create
     * @param mode the mode for the directory such as `0750`
     * @returns a {@link Dex.Future} that resolves to 0   if successful, otherwise rejects with error.
     * @since 1.1
     */
    function mkdir_with_parents(path: string, mode: number): Future;

    /**
     * Wraps {@link Gio.NetworkMonitor.can_reach_async}.
     * @param monitor a {@link Gio.NetworkMonitor}
     * @param connectable a {@link Gio.SocketConnectable}
     * @returns a {@link Dex.Future} that resolves to `true`   or rejects with error.
     * @since 1.2
     */
    function network_monitor_can_reach(monitor: Gio.NetworkMonitor, connectable: Gio.SocketConnectable): Future;

    /**
     * @param self a {@link Gio.OutputStream}
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future} that resolves   to true or rejects with error.
     */
    function output_stream_close(self: Gio.OutputStream, io_priority: number): Future;

    /**
     * Wraps {@link Gio.OutputStream.flush_async}.
     * @param self a {@link Gio.OutputStream}
     * @param io_priority priority for the IO operation
     * @returns a {@link Dex.Future} that resolves to `true`   or rejects with error.
     * @since 1.2
     */
    function output_stream_flush(self: Gio.OutputStream, io_priority: number): Future;

    /**
     * @param output a {@link Gio.OutputStream}
     * @param input a {@link Gio.InputStream}
     * @param flags a set of {@link Gio.OutputStreamSpliceFlags}
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future} that resolves to the   number of bytes spliced as a `gint64` or rejects with error.
     */
    function output_stream_splice(output: Gio.OutputStream, input: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, io_priority: number): Future;

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
    function output_stream_write_bytes(stream: Gio.OutputStream, bytes: GLib.Bytes | Uint8Array, io_priority: number): Future;

    /**
     * Writes all bytes in `vectors` to `stream`.
     * 
     * This function copies the `vectors` array before starting the operation, but
     * the buffers referenced by the vectors must remain valid until the returned
     * future completes.
     * 
     * Wraps {@link Gio.OutputStream.writev_all_async}.
     * @param stream a {@link Gio.OutputStream}
     * @param vectors vectors to write to `stream`
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future} that resolves to a `guint64`   containing the number of bytes written, or rejects with error.
     * @since 1.2
     */
    function output_stream_writev_all(stream: Gio.OutputStream, vectors: Gio.OutputVector[], io_priority: number): Future;

    /**
     * Creates a new {@link GObject.ParamSpec} instance specifying a
     * `DEX_TYPE_OBJECT` derived property.
     * 
     * This is similar to {@link GObject.param_spec_object}, but for {@link Dex.Object}
     * instances such as {@link Dex.Future}.
     * @param name canonical name of the property specified
     * @param nick nick name for the property specified
     * @param blurb description of the property specified
     * @param object_type a `DEX_TYPE_OBJECT` derived type for this property
     * @param flags flags for the property specified
     * @returns a newly created parameter specification
     * @since 1.2
     */
    function param_spec_object(name: string, nick: string | null, blurb: string | null, object_type: GObject.GType, flags: GObject.ParamFlags): GObject.ParamSpec;

    /**
     * Wraps {@link Gio.Permission.acquire_async}.
     * @param permission a {@link Gio.Permission}
     * @returns a {@link Dex.Future} that resolves to `true`   or rejects with error.
     * @since 1.2
     */
    function permission_acquire(permission: Gio.Permission): Future;

    /**
     * Wraps {@link Gio.Permission.release_async}.
     * @param permission a {@link Gio.Permission}
     * @returns a {@link Dex.Future} that resolves to `true`   or rejects with error.
     * @since 1.2
     */
    function permission_release(permission: Gio.Permission): Future;

    /**
     * Wraps {@link Gio.Proxy.connect_async}.
     * @param proxy a {@link Gio.Proxy}
     * @param connection a {@link Gio.IOStream}
     * @param proxy_address a {@link Gio.ProxyAddress}
     * @returns a {@link Dex.Future} that resolves to a   {@link Gio.IOStream} or rejects with error.
     * @since 1.2
     */
    function proxy_connect(proxy: Gio.Proxy, connection: Gio.IOStream, proxy_address: Gio.ProxyAddress): Future;

    /**
     * Wraps {@link Gio.ProxyResolver.lookup_async}.
     * @param resolver a {@link Gio.ProxyResolver}
     * @param uri a URI
     * @returns a {@link Dex.Future} that resolves to a   string vector of proxy URIs or rejects with error.
     * @since 1.2
     */
    function proxy_resolver_lookup(resolver: Gio.ProxyResolver, uri: string): Future;

    /**
     * Wraps {@link Gio.Resolver.lookup_by_address_async}.
     * @param resolver a {@link Gio.Resolver}
     * @param address a {@link Gio.InetAddress}
     * @returns a {@link Dex.Future} that resolves to a hostname   string or rejects with error.
     * @since 1.2
     */
    function resolver_lookup_by_address(resolver: Gio.Resolver, address: Gio.InetAddress): Future;

    /**
     * @param resolver a {@link Gio.Resolver}
     * @param address the address to look up
     * @returns a {@link Dex.Future} that resolves to a   {@link GLib.List} of {@link Gio.InetAddress}.
     */
    function resolver_lookup_by_name(resolver: Gio.Resolver, address: string): Future;

    /**
     * Wraps {@link Gio.Resolver.lookup_by_name_with_flags_async}.
     * @param resolver a {@link Gio.Resolver}
     * @param address hostname to look up
     * @param flags lookup flags
     * @returns a {@link Dex.Future} that resolves to a   {@link GLib.List} of {@link Gio.InetAddress} or rejects with error.
     * @since 1.2
     */
    function resolver_lookup_by_name_with_flags(resolver: Gio.Resolver, address: string, flags: Gio.ResolverNameLookupFlags): Future;

    /**
     * Wraps {@link Gio.Resolver.lookup_records_async}.
     * @param resolver a {@link Gio.Resolver}
     * @param rrname DNS record name
     * @param record_type DNS record type
     * @returns a {@link Dex.Future} that resolves to a   {@link GLib.List} of {@link GLib.Variant} or rejects with error.
     * @since 1.2
     */
    function resolver_lookup_records(resolver: Gio.Resolver, rrname: string, record_type: Gio.ResolverRecordType): Future;

    /**
     * Wraps {@link Gio.Resolver.lookup_service_async}.
     * @param resolver a {@link Gio.Resolver}
     * @param service service name
     * @param protocol protocol name
     * @param domain domain name
     * @returns a {@link Dex.Future} that resolves to a   {@link GLib.List} of {@link Gio.SrvTarget} or rejects with error.
     * @since 1.2
     */
    function resolver_lookup_service(resolver: Gio.Resolver, service: string, protocol: string, domain: string): Future;

    /**
     * Wraps {@link Gio.SocketAddressEnumerator.next_async}.
     * @param enumerator a {@link Gio.SocketAddressEnumerator}
     * @returns a {@link Dex.Future} that resolves to a   {@link Gio.SocketAddress}, `null` at the end of the enumeration, or   rejects with error.
     * @since 1.2
     */
    function socket_address_enumerator_next(enumerator: Gio.SocketAddressEnumerator): Future;

    /**
     * @param socket_client a {@link Gio.SocketClient}
     * @param socket_connectable a {@link Gio.SocketConnectable}
     * @returns a {@link Dex.Future} that resolves to a   {@link Gio.SocketConnection} or rejects with error.
     */
    function socket_client_connect(socket_client: Gio.SocketClient, socket_connectable: Gio.SocketConnectable): Future;

    /**
     * Wraps {@link Gio.SocketClient.connect_to_host_async}.
     * @param socket_client a {@link Gio.SocketClient}
     * @param host_and_port host and optional port to connect to
     * @param default_port default port to use
     * @returns a {@link Dex.Future} that resolves to a   {@link Gio.SocketConnection} or rejects with error.
     * @since 1.2
     */
    function socket_client_connect_to_host(socket_client: Gio.SocketClient, host_and_port: string, default_port: number): Future;

    /**
     * Wraps {@link Gio.SocketClient.connect_to_service_async}.
     * @param socket_client a {@link Gio.SocketClient}
     * @param domain domain to connect to
     * @param service service to connect to
     * @returns a {@link Dex.Future} that resolves to a   {@link Gio.SocketConnection} or rejects with error.
     * @since 1.2
     */
    function socket_client_connect_to_service(socket_client: Gio.SocketClient, domain: string, service: string): Future;

    /**
     * Wraps {@link Gio.SocketClient.connect_to_uri_async}.
     * @param socket_client a {@link Gio.SocketClient}
     * @param uri URI to connect to
     * @param default_port default port to use
     * @returns a {@link Dex.Future} that resolves to a   {@link Gio.SocketConnection} or rejects with error.
     * @since 1.2
     */
    function socket_client_connect_to_uri(socket_client: Gio.SocketClient, uri: string, default_port: number): Future;

    /**
     * Wraps {@link Gio.SocketConnection.connect_async}.
     * @param connection a {@link Gio.SocketConnection}
     * @param address a {@link Gio.SocketAddress}
     * @returns a {@link Dex.Future} that resolves to `true`   or rejects with error.
     * @since 1.2
     */
    function socket_connection_connect(connection: Gio.SocketConnection, address: Gio.SocketAddress): Future;

    /**
     * @param listener a {@link Gio.SocketListener}
     * @returns a {@link Dex.Future} that resolves to   a {@link Gio.SocketConnection} or rejects with error.
     */
    function socket_listener_accept(listener: Gio.SocketListener): Future;

    /**
     * Creates a {@link Dex.Future} that resolves when `socket` satisfies
     * `condition`.
     * 
     * The future resolves to the {@link GLib.IOCondition} reported by the socket
     * source. This may include additional conditions such as {@link GObject.IOCondition.HUP} or
     * {@link GObject.IOCondition.ERR}.
     * @param socket a {@link Gio.Socket}
     * @param condition a {@link GLib.IOCondition} to wait for
     * @returns a {@link Dex.Future} that resolves to a   {@link GLib.IOCondition}.
     * @since 1.2
     */
    function socket_wait(socket: Gio.Socket, condition: GLib.IOCondition): Future;

    /**
     * Wraps {@link Gio.Subprocess.wait_async}.
     * @param subprocess a {@link Gio.Subprocess}
     * @returns a {@link Dex.Future} that resolves to `true`   or rejects with error.
     * @since 1.2
     */
    function subprocess_wait(subprocess: Gio.Subprocess): Future;

    /**
     * Creates a future that awaits for `subprocess` to complete using
     * {@link Gio.Subprocess.wait_check_async}.
     * @param subprocess a {@link Gio.Subprocess}
     * @returns a {@link Dex.Future} that will resolve when `subprocess`   exits cleanly or reject upon signal or non-successful exit.
     * @since 0.4
     */
    function subprocess_wait_check(subprocess: Gio.Subprocess): Future;

    /**
     * Adds a test function like `g_test_add_func()`, but runs `test_func` from a
     * {@link Dex.Fiber}. The calling thread is given a thread-default
     * {@link Dex.Scheduler} if it does not already have one, allowing tests to use
     * `dex_await()` and related APIs directly.
     * 
     * After `test_func` completes, the scheduler's main context is iterated until no
     * immediately pending sources remain.
     * @param testpath test case path
     * @param test_func test function to execute from a fiber
     */
    function test_add_func(testpath: string, test_func: GLib.TestFunc): void;

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
     * @throws GLib.Error
     */
    function thread_wait_for(future: Future): boolean;

    /**
     * @param tls_connection a {@link Gio.TlsConnection}
     * @param io_priority the [IO priority][iface@Gio.AsyncResult#io-priority] of the   request
     * @returns a {@link Dex.Future} that resolves to   true or rejects with error.
     * @since 1.2
     */
    function tls_connection_handshake(tls_connection: Gio.TlsConnection, io_priority: number): Future;

    /**
     * Wraps {@link Gio.TlsDatabase.lookup_certificate_for_handle_async}.
     * @param database a {@link Gio.TlsDatabase}
     * @param handle certificate handle
     * @param interaction a {@link Gio.TlsInteraction}, or `null`
     * @param flags lookup flags
     * @returns a {@link Dex.Future} that resolves to a   {@link Gio.TlsCertificate} or rejects with error.
     * @since 1.2
     */
    function tls_database_lookup_certificate_for_handle(database: Gio.TlsDatabase, handle: string, interaction: Gio.TlsInteraction | null, flags: Gio.TlsDatabaseLookupFlags): Future;

    /**
     * Wraps {@link Gio.TlsDatabase.lookup_certificate_issuer_async}.
     * @param database a {@link Gio.TlsDatabase}
     * @param certificate a {@link Gio.TlsCertificate}
     * @param interaction a {@link Gio.TlsInteraction}, or `null`
     * @param flags lookup flags
     * @returns a {@link Dex.Future} that resolves to a   {@link Gio.TlsCertificate} or rejects with error.
     * @since 1.2
     */
    function tls_database_lookup_certificate_issuer(database: Gio.TlsDatabase, certificate: Gio.TlsCertificate, interaction: Gio.TlsInteraction | null, flags: Gio.TlsDatabaseLookupFlags): Future;

    /**
     * Wraps {@link Gio.TlsDatabase.lookup_certificates_issued_by_async}.
     * @param database a {@link Gio.TlsDatabase}
     * @param issuer_raw_dn issuer distinguished name bytes
     * @param interaction a {@link Gio.TlsInteraction}, or `null`
     * @param flags lookup flags
     * @returns a {@link Dex.Future} that resolves to a   {@link GLib.List} of {@link Gio.TlsCertificate} or rejects with error.
     * @since 1.2
     */
    function tls_database_lookup_certificates_issued_by(database: Gio.TlsDatabase, issuer_raw_dn: Uint8Array | string, interaction: Gio.TlsInteraction | null, flags: Gio.TlsDatabaseLookupFlags): Future;

    /**
     * Wraps {@link Gio.TlsDatabase.verify_chain_async}.
     * @param database a {@link Gio.TlsDatabase}
     * @param chain a {@link Gio.TlsCertificate}
     * @param purpose certificate purpose
     * @param identity expected peer identity, or `null`
     * @param interaction a {@link Gio.TlsInteraction}, or `null`
     * @param flags verification flags
     * @returns a {@link Dex.Future} that resolves to   {@link Gio.TlsCertificateFlags} or rejects with error.
     * @since 1.2
     */
    function tls_database_verify_chain(database: Gio.TlsDatabase, chain: Gio.TlsCertificate, purpose: string, identity: Gio.SocketConnectable | null, interaction: Gio.TlsInteraction | null, flags: Gio.TlsDatabaseVerifyFlags): Future;

    /**
     * Wraps {@link Gio.TlsInteraction.ask_password_async}.
     * @param interaction a {@link Gio.TlsInteraction}
     * @param password a {@link Gio.TlsPassword}
     * @returns a {@link Dex.Future} that resolves to a   {@link Gio.TlsInteractionResult} or rejects with error.
     * @since 1.2
     */
    function tls_interaction_ask_password(interaction: Gio.TlsInteraction, password: Gio.TlsPassword): Future;

    /**
     * Wraps {@link Gio.TlsInteraction.request_certificate_async}.
     * @param interaction a {@link Gio.TlsInteraction}
     * @param connection a {@link Gio.TlsConnection}
     * @param flags certificate request flags
     * @returns a {@link Dex.Future} that resolves to a   {@link Gio.TlsInteractionResult} or rejects with error.
     * @since 1.2
     */
    function tls_interaction_request_certificate(interaction: Gio.TlsInteraction, connection: Gio.TlsConnection, flags: Gio.TlsCertificateRequestFlags): Future;

    /**
     * Wraps `g_unix_connection_receive_credentials_async()`.
     * @param connection a {@link Gio.UnixConnection}
     * @returns a {@link Dex.Future} that resolves to a   {@link Gio.Credentials} or rejects with error.
     * @since 1.2
     */
    function unix_connection_receive_credentials(connection: Gio.UnixConnection): Future;

    /**
     * Wraps `g_unix_connection_send_credentials_async()`.
     * @param connection a {@link Gio.UnixConnection}
     * @returns a {@link Dex.Future} that resolves to `true`   or rejects with error.
     * @since 1.2
     */
    function unix_connection_send_credentials(connection: Gio.UnixConnection): Future;

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
    function value_set_object(value: GObject.Value | any, object: Object | null): void;

    /**
     * Stores the given {@link Dex.Object} inside `value`.
     * 
     * This function transfers the ownership of the `object` to the {@link GObject.Value}.
     * @param value a {@link GObject.Value} initialized with type `DEX_TYPE_OBJECT`
     * @param object a {@link Dex.Object}
     * @since 0.4
     */
    function value_take_object(value: GObject.Value | any, object: Object | null): void;

    /**
     * @gir-type Callback
     */
    interface CoroutineFunc {
        (context: CoroutineContext): Future | null;
    }

    /**
     * @gir-type Callback
     */
    interface FiberFunc {
        (user_data: null): Future | null;
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
        (user_data: null): void;
    }

    /**
     * @gir-type Callback
     */
    interface StateTransitionFunc {
        (context: StateTransitionContext): boolean;
    }

    /**
     * @gir-type Callback
     */
    interface ThreadFunc {
        (user_data: null): Future;
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
        NONE = 0,
        /**
         * Each method invocation is
         *   handled in a fiber dedicated to the invocation. This means that the method implementation can
         *   use dex_await or similar. Authorization for method invocations uses the same fiber.
         *   This can not be used in combination with METHOD_INVOCATIONS_IN_THREAD and trying to do so leads
         *   to a runtime error.
         */
        HANDLE_METHOD_INVOCATIONS_IN_FIBER = 1,
    }


    /**
     * @gir-type Flags
     */
    enum TaskGroupFlags {
        NONE = 0,
        CANCEL_ON_ERROR = 1,
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

        static ["new"](instance: null, info: AsyncPairInfo): AsyncPair;

        // Signals
        /** @signal */
        connect<K extends keyof AsyncPair.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AsyncPair.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AsyncPair.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AsyncPair.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AsyncPair.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AsyncPair.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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
        return_int64(value: bigint | number): void;

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
        return_string(value: string | null): void;

        /**
         * @param value 
         */
        return_uint64(value: bigint | number): void;

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
         * @since 0.4
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

        static ["new"](source_object: null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): AsyncResult;

        // Signals
        /** @signal */
        connect<K extends keyof AsyncResult.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AsyncResult.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AsyncResult.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AsyncResult.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AsyncResult.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AsyncResult.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Tracks the result of `future` and uses the value to complete `async_result`,
         * eventually calling the registered {@link Gio.AsyncReadyCallback}.
         * @param future a {@link Dex.Future}
         */
        ["await"](future: Future): void;

        /**
         * Gets the future for the {@link Dex.AsyncResult}, or `null` if a future
         * is not available.
         * @returns a {@link Dex.Future} or `null`
         */
        dup_future(): Future | null;

        get_name(): string;

        /**
         * @throws GLib.Error
         */
        propagate_boolean(): boolean;

        /**
         * @throws GLib.Error
         */
        propagate_double(): number;

        /**
         * @throws GLib.Error
         */
        propagate_int(): number;

        /**
         * @throws GLib.Error
         */
        propagate_pointer(): null;

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
        get_user_data(): null;

        /**
         * Checks if `res` has the given `source_tag` (generally a function
         * pointer indicating the function `res` was created by).
         * @param source_tag an application-defined tag
         * @returns `TRUE` if `res` has the indicated `source_tag`, `FALSE` if   not.
         * @since 2.34
         */
        is_tagged(source_tag: null): boolean;

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
         * @since 2.34
         * @throws GLib.Error
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
        vfunc_get_user_data(): null;

        /**
         * Checks if `res` has the given `source_tag` (generally a function
         * pointer indicating the function `res` was created by).
         * @param source_tag an application-defined tag
         * @since 2.34
         * @virtual
         */
        vfunc_is_tagged(source_tag: null): boolean;
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
        connect<K extends keyof Block.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Block.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Block.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Block.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Block.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Block.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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

        static ["new"](): Cancellable;

        static new_from_cancellable(cancellable: Gio.Cancellable | null): Cancellable;

        // Signals
        /** @signal */
        connect<K extends keyof Cancellable.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Cancellable.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Cancellable.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Cancellable.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Cancellable.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Cancellable.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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

        static ["new"](capacity: number): Channel;

        // Signals
        /** @signal */
        connect<K extends keyof Channel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Channel.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Channel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Channel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Channel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Channel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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


    namespace Coroutine {
        // Signal signatures
        interface SignalSignatures extends Future.SignalSignatures {}
    }

    /**
     * {@link Dex.Coroutine} is a {@link Dex.Future} implemented as a stateful stackless
     * coroutine cooperatively scheduled on a {@link Dex.Scheduler}.
     * 
     * Each coroutine stores stackful suspension state and optionally accepts user
     * data via `user_data`.
     * 
     * Use user data passed at spawn time for stateful data.
     * @gir-type Class
     */
    class Coroutine extends Future {
        static $gtype: GObject.GType<Coroutine>;

        // Constructors
        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Coroutine.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Coroutine.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Coroutine.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Coroutine.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Coroutine.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Coroutine.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace DBusInterfaceSkeleton {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, Gio.DBusInterface.ConstructorProps {}
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
        connect<K extends keyof DBusInterfaceSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DBusInterfaceSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DBusInterfaceSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DBusInterfaceSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DBusInterfaceSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DBusInterfaceSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Cancels all in-flight fibers.
         * @since 1.1
         */
        cancel(): void;

        /**
         * Gets the {@link Dex.DBusInterfaceSkeletonFlags} that describes the behavior
         * of `interface_`
         * @returns One or more flags from the {@link Dex.DBusInterfaceSkeletonFlags} enumeration.
         * @since 1.1
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
         * @since 1.1
         */
        set_flags(flags: DBusInterfaceSkeletonFlags): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusInterfaceSkeleton.set_flags
        set_flags(...args: never[]): any;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         * @since 2.32
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
         * @since 2.30
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
         * @since 2.30
         */
        set_object(object: Gio.DBusObject | null): void;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @since 2.32
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
         * @since 2.30
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
         * @since 2.30
         * @virtual
         */
        vfunc_set_object(object: Gio.DBusObject | null): void;
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

        static ["new"](future: Future): Delayed;

        // Signals
        /** @signal */
        connect<K extends keyof Delayed.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Delayed.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Delayed.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Delayed.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Delayed.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Delayed.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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
        connect<K extends keyof Fiber.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Fiber.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Fiber.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Fiber.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Fiber.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Fiber.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Cooperatively yields execution back to the current scheduler.
         * 
         * This may only be called from within a {@link Dex.Fiber}. If it is called
         * from any other context, `error` is set to {@link Dex.Error.NO_FIBER}.
         * @since 1.2
         */
        static ["yield"](): boolean;
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

        static ["catch"](future: Future, callback: FutureCallback): Future;

        static catch_loop(future: Future, callback: FutureCallback): Future;

        static ["finally"](future: Future, callback: FutureCallback): Future;

        static finally_loop(future: Future, callback: FutureCallback): Future;

        static first(futures: Future[]): Future;

        static new_enum(enum_type: GObject.GType, enum_value: number): Future;

        static new_for_boolean(v_bool: boolean): Future;

        static new_for_double(v_double: number): Future;

        static new_for_errno(errno_: number): Future;

        static new_for_error(error: GLib.Error): Future;

        static new_for_fd(fd: number): Future;

        static new_for_float(v_float: number): Future;

        static new_for_int(v_int: number): Future;

        static new_for_int64(v_int64: bigint | number): Future;

        static new_for_object(value: GObject.Object): Future;

        static new_for_pointer(pointer: null): Future;

        static new_for_string(string: string): Future;

        static new_for_uint(v_uint: number): Future;

        static new_for_uint64(v_uint64: bigint | number): Future;

        static new_for_value(value: GObject.Value | any): Future;

        static new_infinite(): Future;

        static new_take_object(value: GObject.Object | null): Future;

        static new_take_string(string: string): Future;

        static then(future: Future, callback: FutureCallback): Future;

        static then_loop(future: Future, callback: FutureCallback): Future;

        static with_deadline(future: Future, deadline: bigint | number): Future;

        static with_timeout(future: Future, usec: bigint | number): Future;

        static with_timeout_msec(future: Future, msec: number): Future;

        static with_timeout_seconds(future: Future, seconds: number): Future;

        // Signals
        /** @signal */
        connect<K extends keyof Future.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Future.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Future.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Future.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Future.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Future.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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
         * @throws GLib.Error
         */
        ["await"](): boolean;

        /**
         * Awaits on `future` and returns the gboolean result.
         * 
         * If the result is not a `gboolean`, `error` is set.
         * @returns the `gboolean`, or `false` and `error` is set
         * @throws GLib.Error
         */
        await_boolean(): boolean;

        /**
         * Awaits on `future` and returns the `G_TYPE_BOXED` based result.
         * @returns the boxed result, or `null` and `error` is set.
         * @throws GLib.Error
         */
        await_boxed(): null;

        /**
         * Awaits on `future` and returns the result as an double.
         * 
         * The resolved value must be of type `G_TYPE_DOUBLE` or `error` is set.
         * @returns an double, or 0 in case of failure and `error` is set.
         * @throws GLib.Error
         */
        await_double(): number;

        /**
         * Awaits on `future` and returns the enum result.
         * 
         * If the result is not a `G_TYPE_ENUM`, `error` is set.
         * @returns the enum or 0 and `error` is set.
         * @throws GLib.Error
         */
        await_enum(): number;

        /**
         * Awaits on `future` and returns the resulting file-descriptor.
         * 
         * The resolved value must be of type `DEX_TYPE_FD` or `error` is set.
         * @returns a valid file descriptor or -1. you may get -1 without   error being set if there was no rejected future.
         * @since 0.10
         * @throws GLib.Error
         */
        await_fd(): number;

        /**
         * Awaits on `future` and returns the flags result.
         * 
         * If the result is not a `G_TYPE_FLAGS`, `error` is set.
         * @returns the flags or 0 and `error` is set.
         * @throws GLib.Error
         */
        await_flags(): number;

        /**
         * Awaits on `future` and returns the result as an float.
         * 
         * The resolved value must be of type `G_TYPE_FLOAT` or `error` is set.
         * @returns an float, or 0 in case of failure and `error` is set.
         * @throws GLib.Error
         */
        await_float(): number;

        /**
         * Awaits on `future` and returns the result as an int.
         * 
         * The resolved value must be of type `G_TYPE_INT` or `error` is set.
         * @returns an int, or 0 in case of failure and `error` is set.
         * @throws GLib.Error
         */
        await_int(): number;

        /**
         * Awaits on `future` and returns the result as an int64.
         * 
         * The resolved value must be of type `G_TYPE_INT64` or `error` is set.
         * @returns an int64, or 0 in case of failure and `error` is set.
         * @throws GLib.Error
         */
        await_int64(): number;

        /**
         * Awaits on `future` and returns the {@link GObject.Object}-based result.
         * @returns the object, or `null` and `error` is set.
         * @throws GLib.Error
         */
        await_object<T = GObject.Object>(): T;

        /**
         * Calls {@link Dex.Future.await} and returns the value of
         * {@link GObject.Value.get_pointer}, otherwise `error` is set if the future
         * rejected.
         * @returns a pointer or `null`
         * @throws GLib.Error
         */
        await_pointer(): null;

        /**
         * Awaits on `future` and returns the string result.
         * 
         * If the result is not a `G_TYPE_STRING`, `error` is set.
         * @returns the string  or `null` and `error` is set
         * @throws GLib.Error
         */
        await_string(): string | null;

        /**
         * Awaits on `future` and returns the result as an uint.
         * 
         * The resolved value must be of type `G_TYPE_UINT` or `error` is set.
         * @returns an uint, or 0 in case of failure and `error` is set.
         * @throws GLib.Error
         */
        await_uint(): number;

        /**
         * Awaits on `future` and returns the result as an uint64.
         * 
         * The resolved value must be of type `G_TYPE_UINT64` or `error` is set.
         * @returns an uint64, or 0 in case of failure and `error` is set.
         * @throws GLib.Error
         */
        await_uint64(): number;

        /**
         * Awaits on `future` and returns the `G_TYPE_VARIANT` based result.
         * @returns the variant result, or `null` and `error` is set.
         * @since 0.4
         * @throws GLib.Error
         */
        await_variant(): GLib.Variant;

        /**
         * Disowns a future, allowing it to run to completion even though there may
         * be no observer interested in the futures completion or rejection.
         * @since 0.4
         */
        disown(): void;

        get_name(): string;

        get_status(): FutureStatus;

        /**
         * @throws GLib.Error
         */
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
         * @since 1.1
         */
        list_model_new(): Gio.ListModel;
    }


    namespace FutureListModel {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures, Gio.ListModel.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps<A extends GObject.Object = GObject.Object> extends GObject.Object.ConstructorProps, Gio.ListModel.ConstructorProps {}
    }

    /**
     * This class provides a {@link Gio.ListModel} implementation that will
     * expand to the contents of another {@link Gio.ListModel} from a
     * {@link Dex.Future}.
     * @gir-type Class
     * @since 1.1
     */
    class FutureListModel<A extends GObject.Object = GObject.Object> extends GObject.Object implements Gio.ListModel<A> {
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
        connect<K extends keyof FutureListModel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FutureListModel.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FutureListModel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FutureListModel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FutureListModel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FutureListModel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the future provided when creating the list model.
         * @returns a {@link Dex.Future} that resolves to a   {@link Gio.ListModel} or rejects with error.
         * @since 1.1
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
         * @since 2.44
         */
        get_item_type(): GObject.GType;

        /**
         * Gets the number of items in `list`.
         * 
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @returns the number of items in `list`.
         * @since 2.44
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
         * @since 2.44
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
         * @since 2.44
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
         * @since 2.44
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
         * @since 2.44
         * @virtual
         */
        vfunc_get_item_type(): GObject.GType;

        /**
         * Gets the number of items in `list`.
         * 
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @since 2.44
         * @virtual
         */
        vfunc_get_n_items(): number;
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
        connect<K extends keyof FutureSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FutureSet.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FutureSet.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FutureSet.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FutureSet.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FutureSet.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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
         * @throws GLib.Error
         */
        get_value_at(position: number): unknown;
    }


    namespace Limiter {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}
    }

    /**
     * {@link Dex.Limiter} limits the number of operations running concurrently.
     * 
     * A limiter starts with a fixed number of permits. Use {@link Dex.Limiter.acquire}
     * and {@link Dex.Limiter.release} directly when a permit must cover a custom
     * scope, or use {@link Dex.Limiter.run} or
     * {@link Dex.Limiter.run_on_pool} to acquire a permit and release it
     * automatically when the work completes.
     * @gir-type Class
     * @since 1.2
     */
    class Limiter extends Object {
        static $gtype: GObject.GType<Limiter>;

        // Constructors
        _init(...args: any[]): void;

        static ["new"](max_concurrency: number): Limiter;

        // Signals
        /** @signal */
        connect<K extends keyof Limiter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Limiter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Limiter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Limiter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Limiter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Limiter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Acquires one permit from `limiter`.
         * 
         * The returned future resolves to `true` when a permit has been acquired. Call
         * {@link Dex.Limiter.release} exactly once for each resolved acquisition.
         * 
         * If the returned future is discarded before the permit is acquired, the permit
         * is returned to the limiter when it becomes available. If `limiter` is closed
         * before acquisition completes, the returned future rejects with
         * {@link Dex.Error.SEMAPHORE_CLOSED}.
         * @returns a future that resolves when a permit is acquired
         * @since 1.2
         */
        acquire(): Future;

        /**
         * Closes `limiter`.
         * 
         * Pending and future acquisitions reject with {@link Dex.Error.SEMAPHORE_CLOSED}.
         * Permits already acquired remain valid, but releasing them after close will
         * not make them available for new work.
         * @since 1.2
         */
        close(): void;

        /**
         * Closes `limiter` and waits for all queued and running work to complete.
         * 
         * After this function is called, new acquire attempts are rejected with
         * {@link Dex.Error.SEMAPHORE_CLOSED}.
         * 
         * The returned future resolves to ``true`` once all outstanding pending acquire
         * futures and held permits are complete. Existing permit holders must still
         * eventually release.
         * @returns a {@link Dex.Future} that resolves to `true`
         * @since 1.2
         */
        close_after_drain(): Future;

        /**
         * Gets the maximum number of permits available from `limiter`.
         * @returns the maximum number of concurrent operations
         * @since 1.2
         */
        get_max_concurrency(): number;

        /**
         * Releases one permit previously acquired from `limiter`.
         * 
         * This must be called exactly once for each successful
         * {@link Dex.Limiter.acquire} unless the permit is managed by
         * {@link Dex.Limiter.run}.
         * @since 1.2
         */
        release(): void;

        /**
         * Runs `func` while holding one permit from `limiter`.
         * 
         * The returned future resolves or rejects with the result of the spawned fiber.
         * The permit is released automatically after the fiber resolves or rejects. If
         * the returned future is discarded after the fiber starts, the fiber is allowed
         * to complete so that the permit can be released.
         * @param scheduler scheduler to spawn `func` on, or `null` for the thread default
         * @param stack_size stack size for the spawned fiber, or zero to use the default
         * @param func fiber function to run after a permit is acquired
         * @returns a future representing the spawned fiber
         * @since 1.2
         */
        run(scheduler: Scheduler | null, stack_size: bigint | number, func: FiberFunc): Future;

        /**
         * Runs `func` while holding one permit from `limiter`.
         * 
         * The returned future resolves or rejects with the result of the spawned
         * coroutine. The permit is released automatically after the coroutine resolves
         * or rejects. If the returned future is discarded after the coroutine starts,
         * the coroutine is allowed to complete so that the permit can be released.
         * @param scheduler scheduler to spawn `func` on, or `null` for the thread default
         * @param func coroutine function to run after a permit is acquired
         * @returns a future representing the spawned coroutine
         * @since 1.2
         */
        run_coroutine(scheduler: Scheduler | null, func: CoroutineFunc): Future;

        /**
         * Runs `thread_func` on `pool` while holding one permit from `limiter`.
         * 
         * The returned future resolves or rejects with the result of the submitted
         * thread-pool work. The permit is released automatically after the work
         * resolves or rejects. If the returned future is discarded after the work is
         * submitted to `pool`, the work is allowed to complete so that the permit can be
         * released.
         * 
         * Workers in {@link Dex.ThreadPool} are not scheduler threads, so `thread_func` must
         * not use `dex_await()`.
         * @param pool a {@link Dex.ThreadPool}
         * @param thread_func function to run on `pool` after a permit is acquired
         * @returns a future representing the submitted work
         * @since 1.2
         */
        run_on_pool(pool: ThreadPool, thread_func: ThreadFunc): Future;
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
        connect<K extends keyof MainScheduler.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MainScheduler.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MainScheduler.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MainScheduler.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MainScheduler.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MainScheduler.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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
        connect<K extends keyof Object.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Object.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Object.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Object.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Object.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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

        static ["new"](): Promise;

        static new_cancellable(): Promise;

        // Signals
        /** @signal */
        connect<K extends keyof Promise.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Promise.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Promise.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Promise.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Promise.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Promise.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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
         * @since 0.10
         */
        resolve_boxed(boxed_type: GObject.GType, instance: null): void;

        /**
         * Resolve promise to `value`.
         * @param value 
         */
        resolve_double(value: number): void;

        /**
         * Resolve `promise` to `value`.
         * @param enum_type a {@link GObject.GType} of `G_TYPE_ENUM`
         * @param value the enum value
         * @since 1.2
         */
        resolve_enum(enum_type: GObject.GType, value: number): void;

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
        resolve_int64(value: bigint | number): void;

        /**
         * Resolve promise to `value`.
         * @param value 
         */
        resolve_long(value: bigint | number): void;

        /**
         * @param object a {@link GObject.Object}
         */
        resolve_object(object: GObject.Object | null): void;

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
        resolve_uint64(value: bigint | number): void;

        /**
         * Resolve promise to `value`.
         * @param value 
         */
        resolve_ulong(value: bigint | number): void;

        /**
         * If `variant` is floating, its reference is consumed.
         * @param variant a {@link GLib.Variant}
         * @since 0.8
         */
        resolve_variant(variant: GLib.Variant | null): void;
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
        connect<K extends keyof Scheduler.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Scheduler.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Scheduler.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Scheduler.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Scheduler.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Scheduler.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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
         * This can be called from any thread. The resulting fiber runs on the thread
         * associated with the `scheduler`.
         * 
         * If `stack_size` is 0, it will set to a sensible default. Otherwise, it is
         * rounded up to the nearest page size.
         * 
         * ```c
         * static DexFuture *
         * fiber_func (gpointer data)
         * {
         *   GInputStream *stream = data;
         *   GError *error = NULL;
         *   GBytes *bytes = NULL;
         * 
         *   if (!(bytes = dex_await_boxed (dex_input_stream_read_bytes (stream, 4096, 0), &error)))
         *     return dex_future_new_for_error (error);
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
        spawn(stack_size: bigint | number, func: FiberFunc): Future;

        /**
         * Request `scheduler` to spawn a {@link Dex.Coroutine} and execute
         * `func` with user data.
         * 
         * If the function returns `null` while suspended, it should have set an awaited
         * future in its context using one of the `DEX_COROUTINE_SUSPEND_*` helpers.
         * @param func coroutine entrypoint
         * @returns a {@link Dex.Future} that will resolve or reject   when `func` finishes or returns an error.
         * @since 1.2
         */
        spawn_coroutine(func: CoroutineFunc): Future;
    }


    namespace StateMachine {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}
    }

    /**
     * {@link Dex.StateMachine} provides a serialized asynchronous state machine.
     * 
     * Transitions are declared up front with a static table of
     * {@link Dex.StateTransition} entries. Requests made with
     * {@link Dex.StateMachine.transition} are serialized through an internal
     * {@link Dex.Limiter} with a max concurrency of one. Transition callbacks run
     * from a fiber, so they may use `dex_await()` and related APIs while still
     * appearing as synchronous functions.
     * @gir-type Class
     */
    class StateMachine extends Object {
        static $gtype: GObject.GType<StateMachine>;

        // Constructors
        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof StateMachine.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StateMachine.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof StateMachine.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StateMachine.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof StateMachine.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StateMachine.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the most recent valid state requested with
         * {@link Dex.StateMachine.transition}.
         * 
         * The requested state is initialized to the initial state passed to
         * {@link Dex.StateMachine.new}. It is updated immediately when
         * {@link Dex.StateMachine.transition} is called with a valid target state,
         * before that transition is run. It is not a guarantee that the transition
         * will run or succeed, and it may differ from the current state returned by
         * {@link Dex.StateMachine.get_state}.
         * @returns the most recent valid requested state
         * @since 1.2
         */
        get_requested_state(): number;

        /**
         * Gets the current state of `state_machine`.
         * @returns the current state
         */
        get_state(): number;

        /**
         * Cooperatively interrupts the active transition callback.
         * 
         * If a transition callback is currently active, its interrupt future returned
         * by {@link Dex.StateTransitionContext.wait_for_interrupt} is resolved. This
         * does not request a transition or change the current state; the active
         * callback decides how to handle the interrupt.
         * @returns `true` if an active transition context was marked interrupted;   otherwise `false`
         * @since 1.2
         */
        interrupt(): boolean;

        /**
         * Requests a transition to `target`.
         * 
         * If `target` is a valid value for the state machine's enum type, it becomes
         * the requested state immediately and can be read with
         * {@link Dex.StateMachine.get_requested_state}. The requested state is the
         * most recent valid target passed to this method. It may differ from the
         * current state and does not imply that the transition will succeed.
         * 
         * Transition requests are serialized. The matching callback is run from a
         * fiber and may use `dex_await()` to wait for asynchronous work. If the
         * callback succeeds without calling
         * {@link Dex.StateTransitionContext.set_state}, the state machine commits
         * `target`. If the callback updates the state directly, the returned future
         * resolves to the current state after the callback returns.
         * @param target the target state
         * @returns a future resolving to the final enum state
         */
        transition(target: number): Future;

        /**
         * Waits until `state_machine` enters `state`.
         * 
         * If `state_machine` is already in `state`, the returned future is already
         * resolved. Otherwise, the future resolves the next time the current state is
         * set to `state`. This does not request a transition; use
         * {@link Dex.StateMachine.transition} to move the state machine.
         * @param state the state to wait for
         * @returns a future resolving to `state`
         * @since 1.2
         */
        wait_for_state(state: number): Future;
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
        connect<K extends keyof StaticFuture.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StaticFuture.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof StaticFuture.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, StaticFuture.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof StaticFuture.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<StaticFuture.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace TaskGroup {
        // Signal signatures
        interface SignalSignatures extends Future.SignalSignatures {}
    }

    /**
     * A structured scope for related {@link Dex.Future} instances.
     * 
     * A task group owns the futures added to it until the group is closed or
     * cancelled. The group itself is also a {@link Dex.Future}, so callers can
     * await the scope to learn when all tracked futures have finished.
     * 
     * Use {@link Dex.TaskGroup.add} to attach futures explicitly, or pass `NULL`
     * to {@link Dex.TaskGroup.add} after pushing a thread-default group with
     * {@link Dex.TaskGroup.push_thread_default}. Close the group with
     * {@link Dex.TaskGroup.close} once no more futures will be added.
     * 
     * Cancellation is stronger than ordinary discard-driven cleanup: calling
     * {@link Dex.TaskGroup.cancel} cancels all tracked children, including nested
     * task groups, and completes the task group with a cancellation error. When
     * {@link Dex.TaskGroup.close} is used instead, the task group resolves only
     * after every tracked future has resolved or rejected.
     * 
     * Developer note: always pair {@link Dex.TaskGroup.push_thread_default} with
     * {@link Dex.TaskGroup.pop_thread_default} on the same thread, and prefer
     * {@link Dex.TaskGroup.close} over relying on finalization to finish work.
     * @gir-type Class
     * @since 1.2
     */
    class TaskGroup extends Future {
        static $gtype: GObject.GType<TaskGroup>;

        // Constructors
        _init(...args: any[]): void;

        static ["new"](flags: TaskGroupFlags): TaskGroup;

        // Signals
        /** @signal */
        connect<K extends keyof TaskGroup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TaskGroup.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TaskGroup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TaskGroup.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TaskGroup.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TaskGroup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Adds `future` to `group`.
         * 
         * If `group` is `null`, then the future will be disowned.
         * Otherwise, `future` will be added to `group`.
         * @param future a {@link Dex.Future}
         * @returns `false` if the group is closed or cancelled;   otherwise `true`.
         * @since 1.2
         */
        add(future: Future): boolean;

        cancel(): void;

        /**
         * Close the group to new tasks.
         * @returns a {@link Dex.Future} that resolves when all the   collected futures have resolved or rejected.
         * @since 1.2
         */
        close(): Future;

        pop_thread_default(): void;

        push_thread_default(): void;
    }


    namespace ThreadPool {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}
    }

    /**
     * {@link Dex.ThreadPool} is a thread pool for managing native OS threads similar
     * to {@link GLib.ThreadPool}.
     * 
     * The threads managed by {@link Dex.ThreadPool} do not contain a
     * {@link Dex.Scheduler} which means that you cannot await
     * futures or schedule {@link Dex.Block} from a worker thread.
     * 
     * Threads are created up-front from {@link Dex.ThreadPool.new}.
     * 
     * {@link Dex.ThreadPool} primarily exists for situations where you are
     * using blocking external libraries and want to avoid calling
     * {@link Dex.thread_spawn} without any sort of queuing or bounding
     * on the permitted concurrency.
     * @gir-type Class
     * @since 1.2
     */
    class ThreadPool extends Object {
        static $gtype: GObject.GType<ThreadPool>;

        // Constructors
        _init(...args: any[]): void;

        static ["new"](n_threads: number): ThreadPool;

        // Signals
        /** @signal */
        connect<K extends keyof ThreadPool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ThreadPool.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ThreadPool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ThreadPool.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ThreadPool.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ThreadPool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Begins shutting down the pool and prevents new submissions.
         * @param mode shutdown policy for queued work
         * @returns a future that resolves when shutdown completes
         */
        close(mode: ThreadPoolShutdownMode): Future;

        /**
         * Gets the fixed number of threads owned by the pool.
         * @returns the number of threads in the pool
         * @since 1.2
         */
        get_n_threads(): number;

        /**
         * Queues blocking work to run on one of the pool's reusable threads.
         * 
         * The provided `thread_name` is applied to the returned future using
         * `dex_future_set_static_name()` so that tracing and debugging tools can
         * identify the work item. It does not rename the underlying OS worker thread.
         * @param thread_name the name to use for debugging the returned future
         * @param thread_func the function to run on a pooled thread
         * @returns a future that resolves when the work completes
         * @since 1.2
         */
        submit(thread_name: string | null, thread_func: ThreadFunc): Future;
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

        static ["new"](): ThreadPoolScheduler;

        // Signals
        /** @signal */
        connect<K extends keyof ThreadPoolScheduler.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ThreadPoolScheduler.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ThreadPoolScheduler.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ThreadPoolScheduler.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ThreadPoolScheduler.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ThreadPoolScheduler.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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

        static new_deadline(deadline: bigint | number): Timeout;

        static new_msec(msec: number): Timeout;

        static new_seconds(seconds: number): Timeout;

        static new_usec(usec: bigint | number): Timeout;

        // Signals
        /** @signal */
        connect<K extends keyof Timeout.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Timeout.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Timeout.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Timeout.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Timeout.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Timeout.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Postpoone `timeout` to complete at `deadline` in the monotonic
         * clock. See {@link GLib.get_monotonic_time} for getting the
         * monotonic time in microseconds.
         * @param deadline a deadline in monotonic clock
         */
        postpone_until(deadline: bigint | number): void;
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

        static ["new"](signum: number): UnixSignal;

        // Signals
        /** @signal */
        connect<K extends keyof UnixSignal.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnixSignal.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof UnixSignal.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UnixSignal.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof UnixSignal.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UnixSignal.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get the signal number that the future represents.
         * @since 1.0
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
        async: null;

        finish: null;

        return_type: GObject.GType;
    }


    /**
     * @gir-type Alias
     */
    type AsyncResultClass = typeof AsyncResult;

    /**
     * @gir-type Alias
     */
    type CoroutineClass = typeof Coroutine;

    /**
     * @gir-type Struct
     */
    abstract class CoroutineContext {
        static $gtype: GObject.GType<CoroutineContext>;

        // Methods
        /**
         * @param pc 
         * @param future 
         */
        resume(pc: number, future: Future): void;

        /**
         * @param pc 
         * @param future 
         */
        suspend(pc: number, future: Future): void;
    }


    /**
     * @gir-type Alias
     */
    type DBusInterfaceSkeletonClass = typeof DBusInterfaceSkeleton;

    /**
     * @gir-type Alias
     */
    type FutureListModelClass = typeof FutureListModel;

    /**
     * Describes one supported transition edge in a {@link Dex.StateMachine}.
     * @gir-type Struct
     */
    class StateTransition {
        static $gtype: GObject.GType<StateTransition>;

        // Fields
        from: number;

        to: number;

        func: StateTransitionFunc;
    }


    /**
     * {@link Dex.StateTransitionContext} is an opaque per-callback structure with
     * information and state access for a {@link Dex.StateTransition} callback.
     * 
     * It is only valid for the duration of the callback and must not be stored.
     * 
     * {@link Dex.StateTransitionContext.get_from} and
     * {@link Dex.StateTransitionContext.get_to} return the declared edge that
     * caused the callback to run. {@link Dex.StateTransitionContext.get_state}
     * and {@link Dex.StateTransitionContext.set_state} access the real state in
     * the {@link Dex.StateMachine}. Use
     * {@link Dex.StateTransitionContext.continue_to} to follow another declared
     * edge before queued transition requests are processed.
     * @gir-type Struct
     * @since 1.2
     */
    abstract class StateTransitionContext {
        static $gtype: GObject.GType<StateTransitionContext>;

        // Methods
        /**
         * Attempts to continue from the current transition to `target` immediately.
         * 
         * The continuation runs while the state machine still holds its internal
         * serialization slot, so queued {@link Dex.StateMachine.transition} requests
         * are not processed first. If `context` has not explicitly set the state with
         * {@link Dex.StateTransitionContext.set_state}, the current edge target is
         * committed before the next edge is executed.
         * 
         * The next transition callback is called before this function returns. If that
         * callback uses `dex_await()`, the same transition fiber suspends and resumes,
         * while the state machine still holds the serialization slot. Chained
         * continuations therefore use the normal C call stack and should be reserved
         * for short, bounded chains rather than unbounded graph traversal.
         * 
         * The next edge is looked up from the real current state to `target`. If no
         * such edge exists, `false` is returned and `error` is set to
         * {@link Dex.Error.INVALID_TRANSITION}. If the next edge callback fails, its
         * error is propagated.
         * @param target the target state for the next edge
         * @returns `true` if the continuation succeeded; otherwise `false`
         * @since 1.2
         * @throws GLib.Error
         */
        continue_to(target: number): boolean;

        /**
         * Gets the source state for the transition edge being executed.
         * 
         * This value is fixed for the lifetime of `context` and does not change if
         * {@link Dex.StateTransitionContext.set_state} is called.
         * @returns the source state for the transition edge
         * @since 1.2
         */
        get_from(): number;

        /**
         * Gets the real current state from the {@link Dex.StateMachine}.
         * @returns the current state
         * @since 1.2
         */
        get_state(): number;

        /**
         * Gets the target state for the transition edge being executed.
         * 
         * This value is fixed for the lifetime of `context` and does not change if
         * {@link Dex.StateTransitionContext.set_state} is called.
         * @returns the target state for the transition edge
         * @since 1.2
         */
        get_to(): number;

        /**
         * Sets the real current state in the {@link Dex.StateMachine}.
         * 
         * This may be used by transition callbacks to expose intermediate states while
         * doing asynchronous work. `state` must be a valid value in the state machine's
         * enum type. This method may only be used while the transition callback is
         * active.
         * @param state the new state
         * @since 1.2
         */
        set_state(state: number): void;

        /**
         * Creates a future that resolves when the active transition context is
         * interrupted.
         * 
         * This is a cooperative mechanism for long-running transition callbacks. The
         * returned future resolves to `true` when {@link Dex.StateMachine.interrupt}
         * is called while `context` is active. If the context was already interrupted
         * before this function is called, the returned future is already resolved.
         * 
         * If `context` completes before it is interrupted, the returned future is
         * rejected with {@link Gio.IOErrorEnum.CANCELLED}.
         * @returns a future resolving to `true` when interrupted
         * @since 1.2
         */
        wait_for_interrupt(): Future;
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

export default Dex;

// END
