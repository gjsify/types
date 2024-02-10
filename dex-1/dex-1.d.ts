/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './dex-1-ambient.d.ts';
import './dex-1-import.d.ts';
/**
 * Dex-1
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Dex {
    enum BlockKind {
        THEN,
        CATCH,
        FINALLY,
    }
    class Error extends GLib.Error {
        // Own fields of Dex-1.Error

        UNKNOWN: number;
        CHANNEL_CLOSED: number;
        DEPENDENCY_FAILED: number;
        FIBER_EXITED: number;
        NO_FIBER: number;
        PENDING: number;
        SEMAPHORE_CLOSED: number;
        TIMED_OUT: number;
        TYPE_MISMATCH: number;
        TYPE_NOT_SUPPORTED: number;
        FIBER_CANCELLED: number;

        // Constructors of Dex-1.Error

        constructor(options: { message: string; code: number });
    }

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
    function aio_read(aio_context: AioContext, fd: number, buffer: any | null, count: number, offset: number): Future;
    /**
     * An asynchronous `pwrite()` wrapper.
     * @param aio_context
     * @param fd
     * @param buffer
     * @param count
     * @param offset
     * @returns a future that will resolve when the   write completes or rejects with error.
     */
    function aio_write(aio_context: AioContext, fd: number, buffer: any | null, count: number, offset: number): Future;
    /**
     * Wrapper for g_bus_get().
     * @param bus_type
     * @returns a #DexFuture that resolves to a #GDBusConnection   or rejects with error.
     */
    function bus_get(bus_type: Gio.BusType): Future;
    /**
     * Wrapper for g_dbus_connection_call().
     * @param connection
     * @param bus_name
     * @param object_path
     * @param interface_name
     * @param method_name
     * @param parameters
     * @param reply_type
     * @param flags
     * @param timeout_msec
     * @returns a #DexFuture that resolves to a #GVariant   or rejects with error.
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
     * Wrapper for g_dbus_connection_call_with_unix_fd_list().
     * @param connection
     * @param bus_name
     * @param object_path
     * @param interface_name
     * @param method_name
     * @param parameters
     * @param reply_type
     * @param flags
     * @param timeout_msec
     * @param fd_list a #GUnixFDList
     * @returns a #DexFutureSet that resolves to a #GVariant.   The #DexFuture containing the resulting #GUnixFDList can be retrieved   with dex_future_set_get_future_at() with an index of 1.
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
        fd_list?: Gio.UnixFDList | null,
    ): Future;
    /**
     * Wrapper for g_dbus_connection_send_message_with_reply().
     * @param connection a #GDBusConnection
     * @param message a #GDBusMessage
     * @param flags flags for @message
     * @param timeout_msec timeout in milliseconds, or -1 for default, or %G_MAXINT   for no timeout.
     * @returns a #DexFuture that will resolve to a #GDBusMessage   or reject with failure.
     */
    function dbus_connection_send_message_with_reply(
        connection: Gio.DBusConnection,
        message: Gio.DBusMessage,
        flags: Gio.DBusSendMessageFlags,
        timeout_msec: number,
    ): Future;
    function error_quark(): GLib.Quark;
    /**
     * Asynchronously copies a file and returns a #DexFuture which
     * can be observed for the result.
     * @param source a #GFile
     * @param destination a #GFile
     * @param flags the #GFileCopyFlags
     * @param io_priority IO priority such as %G_PRIORITY_DEFAULT
     * @returns a #DexFuture
     */
    function file_copy(source: Gio.File, destination: Gio.File, flags: Gio.FileCopyFlags, io_priority: number): Future;
    function file_enumerate_children(
        file: Gio.File,
        attributes: string,
        flags: Gio.FileQueryInfoFlags,
        io_priority: number,
    ): Future;
    function file_enumerator_next_files(
        file_enumerator: Gio.FileEnumerator,
        num_files: number,
        io_priority: number,
    ): Future;
    function file_load_contents_bytes(file: Gio.File): Future;
    /**
     * Asynchronously creates a directory and returns #DexFuture which
     * can be observed for the result.
     * @param file a #GFile
     * @param io_priority IO priority such as %G_PRIORITY_DEFAULT
     * @returns a #DexFuture
     */
    function file_make_directory(file: Gio.File, io_priority: number): Future;
    function file_query_info(
        file: Gio.File,
        attributes: string,
        flags: Gio.FileQueryInfoFlags,
        io_priority: number,
    ): Future;
    /**
     * Asynchronously opens a file for reading.
     * @param file a #GFile
     * @param io_priority IO priority such as %G_PRIORITY_DEFAULT
     * @returns a #DexFuture
     */
    function file_read(file: Gio.File, io_priority: number): Future;
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
    function input_stream_close(self: Gio.InputStream, io_priority: number): Future;
    function input_stream_read(self: Gio.InputStream, buffer: any | null, count: number, io_priority: number): Future;
    function input_stream_read_bytes(self: Gio.InputStream, count: number, io_priority: number): Future;
    function input_stream_skip(self: Gio.InputStream, count: number, io_priority: number): Future;
    function io_stream_close(io_stream: Gio.IOStream, io_priority: number): Future;
    function output_stream_close(self: Gio.OutputStream, io_priority: number): Future;
    function output_stream_splice(
        output: Gio.OutputStream,
        input: Gio.InputStream,
        flags: Gio.OutputStreamSpliceFlags,
        io_priority: number,
    ): Future;
    function output_stream_write(
        self: Gio.OutputStream,
        buffer: any | null,
        count: number,
        io_priority: number,
    ): Future;
    function output_stream_write_bytes(self: Gio.OutputStream, bytes: GLib.Bytes, io_priority: number): Future;
    function resolver_lookup_by_name(resolver: Gio.Resolver, address: string): Future;
    function socket_client_connect(socket_client: Gio.SocketClient, socket_connectable: Gio.SocketConnectable): Future;
    function socket_listener_accept(listener: Gio.SocketListener): Future;
    /**
     * Creates a future that awaits for `subprocess` to complete using
     * g_subprocess_wait_check_async().
     * @param subprocess a #GSubprocess
     * @returns a #DexFuture that will resolve when @subprocess   exits cleanly or reject upon signal or non-successful exit.
     */
    function subprocess_wait_check(subprocess: Gio.Subprocess): Future;
    /**
     * Retrieves the `DexObject` stored inside the given `value`.
     * @param value a `GValue` initialized with type `DEX_TYPE_OBJECT`
     * @returns a `DexObject`
     */
    function value_get_object(value: GObject.Value): Object | null;
    /**
     * Stores the given `DexObject` inside `value`.
     *
     * The [struct`GObject`.Value] will acquire a reference to the `object`.
     * @param value a [struct@GObject.Value] initialized with type `DEX_TYPE_OBJECT`
     * @param object a `DexObject` or %NULL
     */
    function value_set_object(value: GObject.Value, object?: Object | null): void;
    /**
     * Stores the given `DexObject` inside `value`.
     *
     * This function transfers the ownership of the `object` to the `GValue`.
     * @param value a [struct@GObject.Value] initialized with type `DEX_TYPE_OBJECT`
     * @param object a `DexObject`
     */
    function value_take_object(value: GObject.Value, object?: Object | null): void;
    interface FiberFunc {
        (): Future | null;
    }
    interface FutureCallback {
        (future: Future): Future | null;
    }
    interface SchedulerFunc {
        (): void;
    }
    type FileInfoList = object | null;
    type InetAddressList = object | null;
    class AsyncPair extends Future {
        // Constructors of Dex-1.AsyncPair

        static ['new'](instance: any | null, info: AsyncPairInfo): AsyncPair;

        // Owm methods of Dex-1.AsyncPair

        /**
         * Gets the cancellable for the async pair.
         *
         * If the DexAsyncPair is discarded by it's callers, then it will automatically
         * be cancelled using g_cancellable_cancel().
         * @returns a #GCancellable
         */
        get_cancellable(): Gio.Cancellable;
        return_boolean(value: boolean): void;
        /**
         * Rejects `async_pair` with `error`.
         *
         * This function is meant to be used when manually wrapping
         * various #GAsyncReadyCallback based API.
         *
         * The ownership of `error` is taken when calling this function.
         * @param error a #GError
         */
        return_error(error: GLib.Error): void;
        return_int64(value: number): void;
        /**
         * Resolves `async_pair` with a value of `instance`.
         *
         * This function is meant to be used when manually wrapping
         * various #GAsyncReadyCallback based API.
         *
         * The ownership of `instance` is taken when calling this function.
         * @param instance a #GObject
         */
        return_object(instance: GObject.Object): void;
        /**
         * Resolves `async_pair` with `value`.
         * @param value a string or %NULL
         */
        return_string(value?: string | null): void;
        return_uint64(value: number): void;
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

    module AsyncResult {
        // Constructor properties interface
    }

    class AsyncResult extends GObject.Object {
        // Constructors of Dex-1.AsyncResult

        static ['new'](
            source_object?: any | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback | null,
        ): AsyncResult;

        // Owm methods of Dex-1.AsyncResult

        /**
         * Tracks the result of `future` and uses the value to complete `async_result,`
         * eventually calling the registered #GAsyncReadyCallback.
         * @param future a #DexFuture
         */
        await(future: Future): void;
        /**
         * Gets the future for the #DexAsyncResult, or %NULL if a future
         * is not available.
         * @returns a #DexFuture or %NULL
         */
        dup_future(): Future | null;
        get_name(): string;
        propagate_boolean(): boolean;
        propagate_double(): number;
        propagate_int(): number;
        propagate_pointer(): any | null;
        set_name(name: string): void;
        set_priority(priority: number): void;
        set_static_name(name: string): void;
    }

    class Block extends Future {
        // Owm methods of Dex-1.Block

        /**
         * Gets the kind of block.
         *
         * The kind of block relates to what situations the block would be
         * executed such as for handling a future resolution, rejection, or
         * both.
         * @returns a #DexBlockKind
         */
        get_kind(): BlockKind;
        /**
         * Gets the scheduler to use when executing a block.
         * @returns a #DexScheduler
         */
        get_scheduler(): Scheduler;
    }

    class Cancellable extends Future {
        // Constructors of Dex-1.Cancellable

        static ['new'](): Cancellable;

        static new_from_cancellable(cancellable?: Gio.Cancellable | null): Cancellable;

        // Owm methods of Dex-1.Cancellable

        cancel(): void;
    }

    class Channel extends Object {
        // Constructors of Dex-1.Channel

        static ['new'](capacity: number): Channel;

        // Owm methods of Dex-1.Channel

        can_receive(): boolean;
        can_send(): boolean;
        close_receive(): void;
        close_send(): void;
        /**
         * Receives the next item from the channel.
         *
         * The resulting future will resolve or reject when an item is available
         * to the channel or when send side has closed (in that order).
         * @returns a #DexFuture
         */
        receive(): Future;
        /**
         * Will attempt to receive all items in the channel as a #DexResultSet.
         *
         * If the receive side of the channel is closed, then the future will
         * reject with an error.
         *
         * If there are items in the queue, then they will be returned as part
         * of a #DexResultSet containing each of the futures.
         *
         * Otherwise, a #DexFutureSet will be returned which will resolve or
         * reject when the next item is available in the channel (or the send
         * or receive sides are closed).
         * @returns a #DexFuture
         */
        receive_all(): Future;
        /**
         * Queues `future` into the channel.
         *
         * The other end of the channel can receive the future (or a future that will
         * eventually resolve to `future)` using dex_channel_receive().
         *
         * This function returns a #DexFuture that will resolve when the channels
         * capacity is low enough to queue more items.
         *
         * If the send side of the channel is closed, the returned #DexFuture will be
         * rejected with %DEX_ERROR_CHANNEL_CLOSED.
         * @param future a #DexFuture
         * @returns a #DexFuture
         */
        send(future: Future): Future;
    }

    class Delayed extends Future {
        // Constructors of Dex-1.Delayed

        static ['new'](future: Future): Delayed;

        // Owm methods of Dex-1.Delayed

        /**
         * Retrieves the delayed future provided to dex_delayed_new().
         *
         * This function can only return a #DexFuture before dex_delayed_release()
         * is called. After that, the delayed future is released and this function
         * will return %NULL.
         * @returns a #DexFuture or %NULL
         */
        dup_future(): Future | null;
        release(): void;
    }

    class Fiber extends Future {}

    class Future extends Object {
        // Constructors of Dex-1.Future

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

        static new_for_int64(v_int64: number): Future;

        static new_for_object(value: GObject.Object): Future;

        static new_for_pointer(pointer?: any | null): Future;

        static new_for_string(string: string): Future;

        static new_for_uint(v_uint: number): Future;

        static new_for_uint64(v_uint64: number): Future;

        static new_for_value(value: GObject.Value): Future;

        static new_infinite(): Future;

        static new_take_object(value: GObject.Object): Future;

        static new_take_string(string: string): Future;

        static then(future: Future, callback: FutureCallback): Future;

        static then_loop(future: Future, callback: FutureCallback): Future;

        // Owm methods of Dex-1.Future

        /**
         * Suspends the current #DexFiber and resumes when `future` has completed.
         *
         * If `future` is completed when this function is called, the fiber will handle
         * the result immediately.
         *
         * This function may only be called within a #DexFiber. To do otherwise will
         * return %FALSE and `error` set to %DEX_ERROR_NO_FIBER.
         *
         * It is an error to call this function in a way that would cause
         * intermediate code to become invalid when resuming the stack. For example,
         * if a foreach-style function taking a callback was to suspend from the
         * callback, undefined behavior may occur such as thread-local-storage
         * having changed.
         * @returns %TRUE if the future resolved, otherwise %FALSE   and @error is set.
         */
        await(): boolean;
        /**
         * Awaits on `future` and returns the gboolean result.
         *
         * If the result is not a #gboolean, `error` is set.
         * @returns the #gboolean, or %FALSE and @error is set
         */
        await_boolean(): boolean;
        /**
         * Awaits on `future` and returns the %G_TYPE_BOXED based result.
         * @returns the boxed result, or %NULL and @error is set.
         */
        await_boxed(): any | null;
        /**
         * Awaits on `future` and returns the result as an double.
         *
         * The resolved value must be of type %G_TYPE_INT or `error` is set.
         * @returns an double, or 0 in case of failure and @error is set.
         */
        await_double(): number;
        /**
         * Awaits on `future` and returns the enum result.
         *
         * If the result is not a %G_TYPE_ENUM, `error` is set.
         * @returns the enum or 0 and @error is set.
         */
        await_enum(): number;
        /**
         * Awaits on `future` and returns the flags result.
         *
         * If the result is not a %G_TYPE_FLAGS, `error` is set.
         * @returns the flags or 0 and @error is set.
         */
        await_flags(): number;
        /**
         * Awaits on `future` and returns the result as an float.
         *
         * The resolved value must be of type %G_TYPE_INT or `error` is set.
         * @returns an float, or 0 in case of failure and @error is set.
         */
        await_float(): number;
        /**
         * Awaits on `future` and returns the result as an int.
         *
         * The resolved value must be of type %G_TYPE_INT or `error` is set.
         * @returns an int, or 0 in case of failure and @error is set.
         */
        await_int(): number;
        /**
         * Awaits on `future` and returns the result as an int64.
         *
         * The resolved value must be of type %G_TYPE_INT64 or `error` is set.
         * @returns an int64, or 0 in case of failure and @error is set.
         */
        await_int64(): number;
        /**
         * Awaits on `future` and returns the #GObject-based result.
         * @returns the object, or %NULL and @error is set.
         */
        await_object<T = GObject.Object>(): T;
        /**
         * Calls dex_await() and returns the value of g_value_get_pointer(),
         * otherwise `error` is set if the future rejected.
         * @returns a pointer or %NULL
         */
        await_pointer(): any | null;
        /**
         * Awaits on `future` and returns the string result.
         *
         * If the result is not a %G_TYPE_STRING, `error` is set.
         * @returns the string  or %NULL and @error is set
         */
        await_string(): string | null;
        /**
         * Awaits on `future` and returns the result as an uint.
         *
         * The resolved value must be of type %G_TYPE_INT or `error` is set.
         * @returns an uint, or 0 in case of failure and @error is set.
         */
        await_uint(): number;
        /**
         * Awaits on `future` and returns the result as an uint64.
         *
         * The resolved value must be of type %G_TYPE_INT64 or `error` is set.
         * @returns an uint64, or 0 in case of failure and @error is set.
         */
        await_uint64(): number;
        /**
         * Awaits on `future` and returns the %G_TYPE_VARIANT based result.
         * @returns the variant result, or %NULL and @error is set.
         */
        await_variant(): GLib.Variant;
        /**
         * Disowns a future, allowing it to run to completion even though there may
         * be no observer interested in the futures completion or rejection.
         */
        disown(): void;
        get_name(): string;
        get_status(): FutureStatus;
        get_value(): GObject.Value;
    }

    class FutureSet extends Future {
        // Owm methods of Dex-1.FutureSet

        /**
         * Gets a #DexFuture that was used to produce the result of `future_set`.
         *
         * Use dex_future_set_get_size() to determine the number of #DexFuture that
         * are contained within the #DexFutureSet.
         * @param position
         * @returns a #DexFuture
         */
        get_future_at(position: number): Future;
        /**
         * Gets the number of futures associated with the #DexFutureSet. You may
         * use dex_future_set_get_future_at() to obtain the individual #DexFuture.
         * @returns the number of #DexFuture in @future_set.
         */
        get_size(): number;
        /**
         * Gets the result from a #DexFuture that is part of the
         * #DexFutureSet.
         * @param position the #DexFuture position within the set
         * @returns a #GValue if successful; otherwise %NULL   and @error is set.
         */
        get_value_at(position: number): GObject.Value;
    }

    class MainScheduler extends Scheduler {}

    /**
     * `DexObject` is the basic building block of types defined within
     * libdex. Futures, Schedulers, and Channels all inherit from DexObject
     * which provides features like thread-safe weak pointers and memory
     * management operations.
     *
     * Objects that are integrating with GIO instead inherit from their
     * natural type in GIO.
     */
    abstract class Object {
        // Owm methods of Dex-1.Object

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

    class Promise extends Future {
        // Constructors of Dex-1.Promise

        static ['new'](): Promise;

        static new_cancellable(): Promise;

        // Owm methods of Dex-1.Promise

        /**
         * Gets a #GCancellable that will cancel when the promise has
         * been discarded (and therefore result no longer necessary).
         *
         * This is useful when manually implementing wrappers around various
         * #GAsyncReadyCallback based API.
         *
         * If `promise` was created with dex_promise_new(), then %NULL is returned.
         * @returns a #GCancellable or %NULL
         */
        get_cancellable(): Gio.Cancellable | null;
        /**
         * Marks the promise as rejected, indicating a failure.
         * @param error a #GError
         */
        reject(error: GLib.Error): void;
        /**
         * Sets the result for a #DexPromise.
         * @param value a #GValue containing the resolved value
         */
        resolve(value: GObject.Value): void;
        resolve_boolean(value: boolean): void;
        resolve_double(value: number): void;
        resolve_float(value: number): void;
        resolve_int(value: number): void;
        resolve_int64(value: number): void;
        resolve_long(value: number): void;
        resolve_object(object?: any | null): void;
        resolve_string(value: string): void;
        resolve_uint(value: number): void;
        resolve_uint64(value: number): void;
        resolve_ulong(value: number): void;
    }

    abstract class Scheduler extends Object {
        // Owm methods of Dex-1.Scheduler

        /**
         * Gets the default scheduler for the process.
         *
         * The default scheduler executes tasks within the default #GMainContext.
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

        // Owm methods of Dex-1.Scheduler

        /**
         * Gets the default main context for a scheduler.
         *
         * This may be a different value depending on the calling thread.
         *
         * For example, calling this on the #DexThreadPoolScheduer from outside
         * a worker thread may result in getting a shared #GMainContext for the
         * process.
         *
         * However, calling from a worker thread may give you a #GMainContext
         * specifically for that thread.
         * @returns a #GMainContext
         */
        get_main_context(): GLib.MainContext;
        /**
         * Queues `func` to run on `scheduler`.
         * @param func the function callback
         */
        push(func: SchedulerFunc): void;
        /**
         * Request `scheduler` to spawn a #DexFiber.
         *
         * The fiber will have it's own stack and cooperatively schedules among other
         * fibers sharing the schaeduler.
         *
         * If `stack_size` is 0, it will set to a sensible default. Otherwise, it is
         * rounded up to the nearest page size.
         * @param stack_size stack size in bytes or 0
         * @returns a #DexFuture that will resolve or reject when   @func completes (or it's resulting #DexFuture completes).
         */
        spawn(stack_size: number): Future;
    }

    class StaticFuture extends Future {}

    class ThreadPoolScheduler extends Scheduler {
        // Constructors of Dex-1.ThreadPoolScheduler

        static ['new'](): ThreadPoolScheduler;

        // Owm methods of Dex-1.ThreadPoolScheduler

        /**
         * Gets the default thread pool scheduler for the instance.
         *
         * This function is useful to allow programs and libraries to share
         * an off-main-thread scheduler without having to coordinate on where
         * the scheduler instance is created or owned.
         */
        static get_default(): Scheduler;
    }

    class Timeout extends Future {
        // Constructors of Dex-1.Timeout

        static new_deadline(deadline: number): Timeout;

        static new_msec(msec: number): Timeout;

        static new_seconds(seconds: number): Timeout;

        static new_usec(usec: number): Timeout;

        // Owm methods of Dex-1.Timeout

        postpone_until(deadline: number): void;
    }

    class UnixSignal extends Future {
        // Constructors of Dex-1.UnixSignal

        static ['new'](signum: number): UnixSignal;

        // Owm methods of Dex-1.UnixSignal

        get_signum(): number;
    }

    class AioContext {}

    class AsyncPairInfo {
        // Own fields of Dex-1.AsyncPairInfo

        async: any;
        finish: any;
        return_type: GObject.GType;
    }

    class AsyncResultClass {}

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
