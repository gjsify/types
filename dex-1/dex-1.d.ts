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
     * @param aio_context
     * @param fd
     * @param buffer
     * @param count
     * @param offset
     * @returns a future that will resolve when the   read completes or rejects with error.
     */
    function aio_read(
        aio_context: AioContext,
        fd: number,
        buffer: any | null,
        count: bigint | number,
        offset: bigint | number,
    ): Future;
    /**
     * An asynchronous `pwrite()` wrapper.
     * @param aio_context
     * @param fd
     * @param buffer
     * @param count
     * @param offset
     * @returns a future that will resolve when the   write completes or rejects with error.
     */
    function aio_write(
        aio_context: AioContext,
        fd: number,
        buffer: any | null,
        count: bigint | number,
        offset: bigint | number,
    ): Future;
    /**
     * Wrapper for `g_bus_get()`.
     * @param bus_type
     * @returns a {@link Dex.Future} that resolves to a {@link Gio.DBusConnection}   or rejects with error.
     * @since 0.4
     */
    function bus_get(bus_type: Gio.BusType): Future;
    /**
     * Wrapper for `g_dbus_connection_call()`.
     * @param connection
     * @param bus_name
     * @param object_path
     * @param interface_name
     * @param method_name
     * @param parameters
     * @param reply_type
     * @param flags
     * @param timeout_msec
     * @returns a {@link Dex.Future} that resolves to a {@link GLib.Variant}   or rejects with error.
     * @since 0.4
     */
    function dbus_connection_call(
        connection: Gio.DBusConnection,
        bus_name: string,
        object_path: string,
        interface_name: string,
        method_name: string,
        parameters: GLib.Variant,
        reply_type: GLib.VariantType,
        flags: Gio.DBusCallFlags,
        timeout_msec: number,
    ): Future;
    /**
     * Wrapper for `g_dbus_connection_call_with_unix_fd_list()`.
     * @param connection
     * @param bus_name
     * @param object_path
     * @param interface_name
     * @param method_name
     * @param parameters
     * @param reply_type
     * @param flags
     * @param timeout_msec
     * @param fd_list a {@link Gio.UnixFDList}
     * @returns a {@link Dex.FutureSet} that resolves to a {@link GLib.Variant}.   The {@link Dex.Future} containing the resulting {@link Gio.UnixFDList} can be retrieved   with `dex_future_set_get_future_at()` with an index of 1.
     * @since 0.4
     */
    function dbus_connection_call_with_unix_fd_list(
        connection: Gio.DBusConnection,
        bus_name: string,
        object_path: string,
        interface_name: string,
        method_name: string,
        parameters: GLib.Variant,
        reply_type: GLib.VariantType,
        flags: Gio.DBusCallFlags,
        timeout_msec: number,
        fd_list: Gio.UnixFDList | null,
    ): Future;
    /**
     * Wrapper for `g_dbus_connection_send_message_with_reply()`.
     * @param connection a {@link Gio.DBusConnection}
     * @param message a {@link Gio.DBusMessage}
     * @param flags flags for `message`
     * @param timeout_msec timeout in milliseconds, or -1 for default, or `G_MAXINT`   for no timeout.
     * @returns a {@link Dex.Future} that will resolve to a {@link Gio.DBusMessage}   or reject with failure.
     * @since 0.4
     */
    function dbus_connection_send_message_with_reply(
        connection: Gio.DBusConnection,
        message: Gio.DBusMessage,
        flags: Gio.DBusSendMessageFlags,
        timeout_msec: number,
    ): [Future, number];
    function error_quark(): GLib.Quark;
    /**
     * Asynchronously copies a file and returns a {@link Dex.Future} which
     * can be observed for the result.
     * @param source a {@link Gio.File}
     * @param destination a {@link Gio.File}
     * @param flags the {@link Gio.FileCopyFlags}
     * @param io_priority IO priority such as `G_PRIORITY_DEFAULT`
     * @returns a {@link Dex.Future}
     */
    function file_copy(source: Gio.File, destination: Gio.File, flags: Gio.FileCopyFlags, io_priority: number): Future;
    /**
     * @param file
     * @param attributes
     * @param flags
     * @param io_priority
     * @returns a {@link Dex.Future}
     */
    function file_enumerate_children(
        file: Gio.File,
        attributes: string,
        flags: Gio.FileQueryInfoFlags,
        io_priority: number,
    ): Future;
    /**
     * @param file_enumerator
     * @param num_files
     * @param io_priority
     * @returns a {@link Dex.Future}
     */
    function file_enumerator_next_files(
        file_enumerator: Gio.FileEnumerator,
        num_files: number,
        io_priority: number,
    ): Future;
    /**
     * @param file
     * @returns a {@link Dex.Future}
     */
    function file_load_contents_bytes(file: Gio.File): Future;
    /**
     * Asynchronously creates a directory and returns {@link Dex.Future} which
     * can be observed for the result.
     * @param file a {@link Gio.File}
     * @param io_priority IO priority such as `G_PRIORITY_DEFAULT`
     * @returns a {@link Dex.Future}
     */
    function file_make_directory(file: Gio.File, io_priority: number): Future;
    /**
     * @param file
     * @param attributes
     * @param flags
     * @param io_priority
     * @returns a {@link Dex.Future}
     */
    function file_query_info(
        file: Gio.File,
        attributes: string,
        flags: Gio.FileQueryInfoFlags,
        io_priority: number,
    ): Future;
    /**
     * Asynchronously opens a file for reading.
     * @param file a {@link Gio.File}
     * @param io_priority IO priority such as `G_PRIORITY_DEFAULT`
     * @returns a {@link Dex.Future}
     */
    function file_read(file: Gio.File, io_priority: number): Future;
    /**
     * @param file
     * @param etag
     * @param make_backup
     * @param flags
     * @param io_priority
     * @returns a {@link Dex.Future}
     */
    function file_replace(
        file: Gio.File,
        etag: string,
        make_backup: boolean,
        flags: Gio.FileCreateFlags,
        io_priority: number,
    ): Future;
    function get_min_stack_size(): number;
    function get_page_size(): number;
    function init(): void;
    /**
     * @param self
     * @param io_priority
     * @returns a {@link Dex.Future}
     */
    function input_stream_close(self: Gio.InputStream, io_priority: number): Future;
    /**
     * @param self
     * @param buffer
     * @param count
     * @param io_priority
     * @returns a {@link Dex.Future}
     */
    function input_stream_read(
        self: Gio.InputStream,
        buffer: any | null,
        count: bigint | number,
        io_priority: number,
    ): Future;
    /**
     * @param self
     * @param count
     * @param io_priority
     * @returns a {@link Dex.Future}
     */
    function input_stream_read_bytes(self: Gio.InputStream, count: bigint | number, io_priority: number): Future;
    /**
     * @param self
     * @param count the number of bytes to skip
     * @param io_priority `G_PRIORITY_DEFAULT` or similar priority value
     * @returns a {@link Dex.Future}
     */
    function input_stream_skip(self: Gio.InputStream, count: bigint | number, io_priority: number): Future;
    /**
     * @param io_stream
     * @param io_priority
     * @returns a {@link Dex.Future}
     */
    function io_stream_close(io_stream: Gio.IOStream, io_priority: number): Future;
    /**
     * @param self
     * @param io_priority
     * @returns a {@link Dex.Future}
     */
    function output_stream_close(self: Gio.OutputStream, io_priority: number): Future;
    /**
     * @param output
     * @param input
     * @param flags
     * @param io_priority
     * @returns a {@link Dex.Future}
     */
    function output_stream_splice(
        output: Gio.OutputStream,
        input: Gio.InputStream,
        flags: Gio.OutputStreamSpliceFlags,
        io_priority: number,
    ): Future;
    /**
     * @param self
     * @param buffer
     * @param count
     * @param io_priority
     * @returns a {@link Dex.Future}
     */
    function output_stream_write(
        self: Gio.OutputStream,
        buffer: any | null,
        count: bigint | number,
        io_priority: number,
    ): Future;
    /**
     * @param self
     * @param bytes
     * @param io_priority
     * @returns a {@link Dex.Future}
     */
    function output_stream_write_bytes(
        self: Gio.OutputStream,
        bytes: GLib.Bytes | Uint8Array,
        io_priority: number,
    ): Future;
    /**
     * @param resolver
     * @param address
     * @returns a {@link Dex.Future}
     */
    function resolver_lookup_by_name(resolver: Gio.Resolver, address: string): Future;
    /**
     * @param socket_client
     * @param socket_connectable
     * @returns a {@link Dex.Future}
     */
    function socket_client_connect(socket_client: Gio.SocketClient, socket_connectable: Gio.SocketConnectable): Future;
    /**
     * @param listener
     * @returns a {@link Dex.Future}
     */
    function socket_listener_accept(listener: Gio.SocketListener): Future;
    /**
     * Creates a future that awaits for `subprocess` to complete using
     * `g_subprocess_wait_check_async()`.
     * @param subprocess a {@link Gio.Subprocess}
     * @returns a {@link Dex.Future} that will resolve when `subprocess`   exits cleanly or reject upon signal or non-successful exit.
     * @since 0.4
     */
    function subprocess_wait_check(subprocess: Gio.Subprocess): Future;
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
    interface FiberFunc {
        (user_data: any | null): Future | null;
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
        (user_data: any | null): void;
    }
    /**
     * @gir-type Alias
     */
    type FileInfoList = object | null;
    /**
     * @gir-type Alias
     */
    type InetAddressList = object | null;
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
         * If the DexAsyncPair is discarded by it's callers, then it will automatically
         * be cancelled using `g_cancellable_cancel()`.
         * @returns a {@link Gio.Cancellable}
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
         * @param variant the variant to resolve with
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
            source_object: any | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback | null,
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
        is_tagged(source_tag: any | null): boolean;
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
        vfunc_is_tagged(source_tag: any | null): boolean;
    }

    namespace Block {
        // Signal signatures
        interface SignalSignatures extends Future.SignalSignatures {}
    }

    /**
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
         * @returns a {@link Dex.BlockKind}
         */
        get_kind(): BlockKind;
        /**
         * Gets the scheduler to use when executing a block.
         * @returns a {@link Dex.Scheduler}
         */
        get_scheduler(): Scheduler;
    }

    namespace Cancellable {
        // Signal signatures
        interface SignalSignatures extends Future.SignalSignatures {}
    }

    /**
     * @gir-type Class
     */
    class Cancellable extends Future {
        static $gtype: GObject.GType<Cancellable>;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](): Cancellable;

        static new_from_cancellable(cancellable: Gio.Cancellable | null): Cancellable;

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
         * Will attempt to receive all items in the channel as a `DexResultSet`.
         *
         * If the receive side of the channel is closed, then the future will
         * reject with an error.
         *
         * If there are items in the queue, then they will be returned as part
         * of a `DexResultSet` containing each of the futures.
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
         * eventually resolve to `future`) using `dex_channel_receive()`.
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

    namespace Delayed {
        // Signal signatures
        interface SignalSignatures extends Future.SignalSignatures {}
    }

    /**
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
         * Retrieves the delayed future provided to `dex_delayed_new()`.
         *
         * This function can only return a {@link Dex.Future} before `dex_delayed_release()`
         * is called. After that, the delayed future is released and this function
         * will return `null`.
         * @returns a {@link Dex.Future} or `null`
         */
        dup_future(): Future | null;
        release(): void;
    }

    namespace Fiber {
        // Signal signatures
        interface SignalSignatures extends Future.SignalSignatures {}
    }

    /**
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

        static new_for_float(v_float: number): Future;

        static new_for_int(v_int: number): Future;

        static new_for_int64(v_int64: bigint | number): Future;

        static new_for_object(value: GObject.Object): Future;

        static new_for_pointer(pointer: any | null): Future;

        static new_for_string(string: string): Future;

        static new_for_uint(v_uint: number): Future;

        static new_for_uint64(v_uint64: bigint | number): Future;

        static new_for_value(value: GObject.Value | any): Future;

        static new_infinite(): Future;

        static new_take_object(value: GObject.Object): Future;

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
         * The resolved value must be of type `G_TYPE_INT` or `error` is set.
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
         * Awaits on `future` and returns the flags result.
         *
         * If the result is not a `G_TYPE_FLAGS`, `error` is set.
         * @returns the flags or 0 and `error` is set.
         */
        await_flags(): number;
        /**
         * Awaits on `future` and returns the result as an float.
         *
         * The resolved value must be of type `G_TYPE_INT` or `error` is set.
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
         * Calls `dex_await()` and returns the value of `g_value_get_pointer()`,
         * otherwise `error` is set if the future rejected.
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
         * The resolved value must be of type `G_TYPE_INT` or `error` is set.
         * @returns an uint, or 0 in case of failure and `error` is set.
         */
        await_uint(): number;
        /**
         * Awaits on `future` and returns the result as an uint64.
         *
         * The resolved value must be of type `G_TYPE_INT64` or `error` is set.
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
    }

    namespace FutureSet {
        // Signal signatures
        interface SignalSignatures extends Future.SignalSignatures {}
    }

    /**
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
         * Gets a {@link Dex.Future} that was used to produce the result of `future_set`.
         *
         * Use `dex_future_set_get_size()` to determine the number of {@link Dex.Future} that
         * are contained within the {@link Dex.FutureSet}.
         * @param position
         * @returns a {@link Dex.Future}
         */
        get_future_at(position: number): Future;
        /**
         * Gets the number of futures associated with the {@link Dex.FutureSet}. You may
         * use `dex_future_set_get_future_at()` to obtain the individual {@link Dex.Future}.
         * @returns the number of {@link Dex.Future} in `future_set`.
         */
        get_size(): number;
        /**
         * Gets the result from a {@link Dex.Future} that is part of the
         * {@link Dex.FutureSet}.
         * @param position the {@link Dex.Future} position within the set
         * @returns a {@link GObject.Value} if successful; otherwise `null`   and `error` is set.
         */
        get_value_at(position: number): unknown;
    }

    namespace MainScheduler {
        // Signal signatures
        interface SignalSignatures extends Scheduler.SignalSignatures {}
    }

    /**
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
     * libdex. Futures, Schedulers, and Channels all inherit from DexObject
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
         * If `promise` was created with `dex_promise_new()`, then `null` is returned.
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
         * @param value
         */
        resolve_boolean(value: boolean): void;
        /**
         * @param value
         */
        resolve_double(value: number): void;
        /**
         * @param value
         */
        resolve_float(value: number): void;
        /**
         * @param value
         */
        resolve_int(value: number): void;
        /**
         * @param value
         */
        resolve_int64(value: bigint | number): void;
        /**
         * @param value
         */
        resolve_long(value: bigint | number): void;
        /**
         * @param object a {@link GObject.Object}
         */
        resolve_object(object: any | null): void;
        /**
         * @param value a string to use to resolve the promise
         */
        resolve_string(value: string): void;
        /**
         * @param value
         */
        resolve_uint(value: number): void;
        /**
         * @param value
         */
        resolve_uint64(value: bigint | number): void;
        /**
         * @param value
         */
        resolve_ulong(value: bigint | number): void;
    }

    namespace Scheduler {
        // Signal signatures
        interface SignalSignatures extends Object.SignalSignatures {}
    }

    /**
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
         * The default scheduler executes tasks within the default {@link GLib.MainContext}.
         * Typically that is the main thread of the application.
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
         * For example, calling this on the `DexThreadPoolScheduer` from outside
         * a worker thread may result in getting a shared {@link GLib.MainContext} for the
         * process.
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
         * The fiber will have it's own stack and cooperatively schedules among other
         * fibers sharing the schaeduler.
         *
         * If `stack_size` is 0, it will set to a sensible default. Otherwise, it is
         * rounded up to the nearest page size.
         * @param stack_size stack size in bytes or 0
         * @returns a {@link Dex.Future} that will resolve or reject when   `func` completes (or it's resulting {@link Dex.Future} completes).
         */
        spawn(stack_size: bigint | number): Future;
    }

    namespace StaticFuture {
        // Signal signatures
        interface SignalSignatures extends Future.SignalSignatures {}
    }

    /**
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
         * @param deadline
         */
        postpone_until(deadline: bigint | number): void;
    }

    namespace UnixSignal {
        // Signal signatures
        interface SignalSignatures extends Future.SignalSignatures {}
    }

    /**
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
