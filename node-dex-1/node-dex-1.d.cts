
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-dex-1-import.d.ts';
    
/**
 * Dex-1
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

export enum BlockKind {
    THEN,
    CATCH,
    FINALLY,
}
export enum Error {
    UNKNOWN,
    CHANNEL_CLOSED,
    DEPENDENCY_FAILED,
    FIBER_EXITED,
    NO_FIBER,
    PENDING,
    SEMAPHORE_CLOSED,
    TIMED_OUT,
    TYPE_MISMATCH,
    TYPE_NOT_SUPPORTED,
    FIBER_CANCELLED,
}
export enum FutureStatus {
    PENDING,
    RESOLVED,
    REJECTED,
}
/**
 * An asynchronous `pread()` wrapper.
 * @param aioContext 
 * @param fd 
 * @param buffer 
 * @param count 
 * @param offset 
 * @returns a future that will resolve when the   read completes or rejects with error.
 */
export function aioRead(aioContext: AioContext, fd: number, buffer: any | null, count: number, offset: number): Future
/**
 * An asynchronous `pwrite()` wrapper.
 * @param aioContext 
 * @param fd 
 * @param buffer 
 * @param count 
 * @param offset 
 * @returns a future that will resolve when the   write completes or rejects with error.
 */
export function aioWrite(aioContext: AioContext, fd: number, buffer: any | null, count: number, offset: number): Future
/**
 * Wrapper for g_bus_get().
 * @param busType 
 * @returns a #DexFuture that resolves to a #GDBusConnection   or rejects with error.
 */
export function busGet(busType: Gio.BusType): Future
/**
 * Wrapper for g_dbus_connection_call().
 * @param connection 
 * @param busName 
 * @param objectPath 
 * @param interfaceName 
 * @param methodName 
 * @param parameters 
 * @param replyType 
 * @param flags 
 * @param timeoutMsec 
 * @returns a #DexFuture that resolves to a #GVariant   or rejects with error.
 */
export function dbusConnectionCall(connection: Gio.DBusConnection, busName: string | null, objectPath: string | null, interfaceName: string | null, methodName: string | null, parameters: GLib.Variant, replyType: GLib.VariantType, flags: Gio.DBusCallFlags, timeoutMsec: number): Future
/**
 * Wrapper for g_dbus_connection_call_with_unix_fd_list().
 * @param connection 
 * @param busName 
 * @param objectPath 
 * @param interfaceName 
 * @param methodName 
 * @param parameters 
 * @param replyType 
 * @param flags 
 * @param timeoutMsec 
 * @param fdList a #GUnixFDList
 * @returns a #DexFutureSet that resolves to a #GVariant.   The #DexFuture containing the resulting #GUnixFDList can be retrieved   with dex_future_set_get_future_at() with an index of 1.
 */
export function dbusConnectionCallWithUnixFdList(connection: Gio.DBusConnection, busName: string | null, objectPath: string | null, interfaceName: string | null, methodName: string | null, parameters: GLib.Variant, replyType: GLib.VariantType, flags: Gio.DBusCallFlags, timeoutMsec: number, fdList: Gio.UnixFDList | null): Future
/**
 * Wrapper for g_dbus_connection_send_message_with_reply().
 * @param connection a #GDBusConnection
 * @param message a #GDBusMessage
 * @param flags flags for `message`
 * @param timeoutMsec timeout in milliseconds, or -1 for default, or %G_MAXINT   for no timeout.
 * @returns a #DexFuture that will resolve to a #GDBusMessage   or reject with failure.
 */
export function dbusConnectionSendMessageWithReply(connection: Gio.DBusConnection, message: Gio.DBusMessage, flags: Gio.DBusSendMessageFlags, timeoutMsec: number): [ /* returnType */ Future, /* outSerial */ number | null ]
export function errorQuark(): GLib.Quark
/**
 * Asynchronously copies a file and returns a #DexFuture which
 * can be observed for the result.
 * @param source a #GFile
 * @param destination a #GFile
 * @param flags the #GFileCopyFlags
 * @param ioPriority IO priority such as %G_PRIORITY_DEFAULT
 * @returns a #DexFuture
 */
export function fileCopy(source: Gio.File, destination: Gio.File, flags: Gio.FileCopyFlags, ioPriority: number): Future
export function fileEnumerateChildren(file: Gio.File, attributes: string | null, flags: Gio.FileQueryInfoFlags, ioPriority: number): Future
export function fileEnumeratorNextFiles(fileEnumerator: Gio.FileEnumerator, numFiles: number, ioPriority: number): Future
export function fileLoadContentsBytes(file: Gio.File): Future
/**
 * Asynchronously creates a directory and returns #DexFuture which
 * can be observed for the result.
 * @param file a #GFile
 * @param ioPriority IO priority such as %G_PRIORITY_DEFAULT
 * @returns a #DexFuture
 */
export function fileMakeDirectory(file: Gio.File, ioPriority: number): Future
export function fileQueryInfo(file: Gio.File, attributes: string | null, flags: Gio.FileQueryInfoFlags, ioPriority: number): Future
/**
 * Asynchronously opens a file for reading.
 * @param file a #GFile
 * @param ioPriority IO priority such as %G_PRIORITY_DEFAULT
 * @returns a #DexFuture
 */
export function fileRead(file: Gio.File, ioPriority: number): Future
export function fileReplace(file: Gio.File, etag: string | null, makeBackup: boolean, flags: Gio.FileCreateFlags, ioPriority: number): Future
export function getMinStackSize(): number
export function getPageSize(): number
export function init(): void
export function inputStreamClose(self: Gio.InputStream, ioPriority: number): Future
export function inputStreamRead(self: Gio.InputStream, buffer: any | null, count: number, ioPriority: number): Future
export function inputStreamReadBytes(self: Gio.InputStream, count: number, ioPriority: number): Future
export function inputStreamSkip(self: Gio.InputStream, count: number, ioPriority: number): Future
export function ioStreamClose(ioStream: Gio.IOStream, ioPriority: number): Future
export function outputStreamClose(self: Gio.OutputStream, ioPriority: number): Future
export function outputStreamSplice(output: Gio.OutputStream, input: Gio.InputStream, flags: Gio.OutputStreamSpliceFlags, ioPriority: number): Future
export function outputStreamWrite(self: Gio.OutputStream, buffer: any | null, count: number, ioPriority: number): Future
export function outputStreamWriteBytes(self: Gio.OutputStream, bytes: any, ioPriority: number): Future
export function resolverLookupByName(resolver: Gio.Resolver, address: string | null): Future
export function socketClientConnect(socketClient: Gio.SocketClient, socketConnectable: Gio.SocketConnectable): Future
export function socketListenerAccept(listener: Gio.SocketListener): Future
/**
 * Creates a future that awaits for `subprocess` to complete using
 * g_subprocess_wait_check_async().
 * @param subprocess a #GSubprocess
 * @returns a #DexFuture that will resolve when @subprocess   exits cleanly or reject upon signal or non-successful exit.
 */
export function subprocessWaitCheck(subprocess: Gio.Subprocess): Future
/**
 * Retrieves the `DexObject` stored inside the given `value`.
 * @param value a `GValue` initialized with type `DEX_TYPE_OBJECT`
 * @returns a `DexObject`
 */
export function valueGetObject(value: any): Object | null
/**
 * Stores the given `DexObject` inside `value`.
 * 
 * The [struct`GObject`.Value] will acquire a reference to the `object`.
 * @param value a [struct`GObject`.Value] initialized with type `DEX_TYPE_OBJECT`
 * @param object a `DexObject` or %NULL
 */
export function valueSetObject(value: any, object: Object | null): void
/**
 * Stores the given `DexObject` inside `value`.
 * 
 * This function transfers the ownership of the `object` to the `GValue`.
 * @param value a [struct`GObject`.Value] initialized with type `DEX_TYPE_OBJECT`
 * @param object a `DexObject`
 */
export function valueTakeObject(value: any, object: Object | null): void
/**
 * This function prototype is used for spawning fibers. A fiber
 * is a lightweight, cooperative-multitasking feature where the
 * fiber is given it's own stack. The fiber runs until it reaches
 * a point of suspention (using `dex_await` or similar) or exits
 * the fiber.
 * 
 * When suspended, the fiber is placed onto a queue until it is
 * runnable again. Once runnable, the fiber is scheduled to run
 * from within whatever scheduler it was created with.
 * 
 * See `dex_scheduler_spawn()`
 * @callback 
 * @returns a #DexFuture or %NULL
 */
export interface FiberFunc {
    (): Future | null
}
/**
 * A #DexFutureCallback can be executed from a #DexBlock as response to
 * another #DexFuture resolving or rejecting.
 * 
 * The callback will be executed within the scheduler environment the
 * block is created within when using dex_future_then(), dex_future_catch(),
 * dex_future_finally(), dex_future_all(), and similar functions.
 * 
 * This is the expected way to handle completion of a future when not using
 * #DexFiber via dex_scheduler_spawn().
 * @callback 
 * @param future a resolved or rejected #DexFuture
 * @returns a #DexFuture or %NULL
 */
export interface FutureCallback {
    (future: Future): Future | null
}
export interface SchedulerFunc {
    (): void
}
export interface AsyncPair {

    // Owm methods of Dex-1.Dex.AsyncPair

    /**
     * Gets the cancellable for the async pair.
     * 
     * If the DexAsyncPair is discarded by it's callers, then it will automatically
     * be cancelled using g_cancellable_cancel().
     * @returns a #GCancellable
     */
    getCancellable(): Gio.Cancellable
    returnBoolean(value: boolean): void
    /**
     * Rejects `async_pair` with `error`.
     * 
     * This function is meant to be used when manually wrapping
     * various #GAsyncReadyCallback based API.
     * 
     * The ownership of `error` is taken when calling this function.
     * @param error a #GError
     */
    returnError(error: GLib.Error): void
    returnInt64(value: number): void
    /**
     * Resolves `async_pair` with a value of `instance`.
     * 
     * This function is meant to be used when manually wrapping
     * various #GAsyncReadyCallback based API.
     * 
     * The ownership of `instance` is taken when calling this function.
     * @param instance a #GObject
     */
    returnObject(instance: GObject.Object): void
    /**
     * Resolves `async_pair` with `value`.
     * @param value a string or %NULL
     */
    returnString(value: string | null): void
    returnUint64(value: number): void
    /**
     * Resolves `async_pair` with `variant`.
     * @param variant the variant to resolve with
     */
    returnVariant(variant: GLib.Variant): void
    /**
     * Sets whether or not the future should cancel the async operation when
     * the future is discarded. This happens when no more futures are awaiting
     * the completion of this future.
     * @param cancelOnDiscard if the operation should cancel when the future is discarded
     */
    setCancelOnDiscard(cancelOnDiscard: boolean): void
}

export class AsyncPair extends Future {

    // Own properties of Dex-1.Dex.AsyncPair

    static name: string

    // Constructors of Dex-1.Dex.AsyncPair

    constructor(instance: any | null, info: AsyncPairInfo) 
    static new(instance: any | null, info: AsyncPairInfo): AsyncPair
}

export module AsyncResult {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncResult.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface AsyncResult extends Gio.AsyncResult {

    // Own properties of Dex-1.Dex.AsyncResult

    __gtype__: number

    // Owm methods of Dex-1.Dex.AsyncResult

    /**
     * Tracks the result of `future` and uses the value to complete `async_result,`
     * eventually calling the registered #GAsyncReadyCallback.
     * @param future a #DexFuture
     */
    await(future: Future): void
    /**
     * Gets the future for the #DexAsyncResult, or %NULL if a future
     * is not available.
     * @returns a #DexFuture or %NULL
     */
    dupFuture(): Future | null
    getName(): string | null
    propagateBoolean(): boolean
    propagateDouble(): number
    propagateInt(): number
    propagatePointer(): any | null
    setName(name: string | null): void
    setPriority(priority: number): void
    setStaticName(name: string | null): void

    // Class property signals of Dex-1.Dex.AsyncResult

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class AsyncResult extends GObject.Object {

    // Own properties of Dex-1.Dex.AsyncResult

    static name: string

    // Constructors of Dex-1.Dex.AsyncResult

    constructor(config?: AsyncResult.ConstructorProperties) 
    constructor(sourceObject: any | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) 
    static new(sourceObject: any | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): AsyncResult
    _init(config?: AsyncResult.ConstructorProperties): void
}

export interface Block {

    // Owm methods of Dex-1.Dex.Block

    /**
     * Gets the kind of block.
     * 
     * The kind of block relates to what situations the block would be
     * executed such as for handling a future resolution, rejection, or
     * both.
     * @returns a #DexBlockKind
     */
    getKind(): BlockKind
    /**
     * Gets the scheduler to use when executing a block.
     * @returns a #DexScheduler
     */
    getScheduler(): Scheduler
}

export class Block extends Future {

    // Own properties of Dex-1.Dex.Block

    static name: string
}

export interface Cancellable {

    // Owm methods of Dex-1.Dex.Cancellable

    cancel(): void
}

export class Cancellable extends Future {

    // Own properties of Dex-1.Dex.Cancellable

    static name: string

    // Constructors of Dex-1.Dex.Cancellable

    constructor() 
    static new(): Cancellable
    static newFromCancellable(cancellable: Gio.Cancellable | null): Cancellable
}

export interface Channel {

    // Owm methods of Dex-1.Dex.Channel

    canReceive(): boolean
    canSend(): boolean
    closeReceive(): void
    closeSend(): void
    /**
     * Receives the next item from the channel.
     * 
     * The resulting future will resolve or reject when an item is available
     * to the channel or when send side has closed (in that order).
     * @returns a #DexFuture
     */
    receive(): Future
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
    receiveAll(): Future
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
    send(future: Future): Future
}

export class Channel extends Object {

    // Own properties of Dex-1.Dex.Channel

    static name: string

    // Constructors of Dex-1.Dex.Channel

    /**
     * Creates a new #DexChannel.
     * 
     * If capacity is non-zero, it can be used to limit the size of the channel
     * so that functions can asynchronously stall until items have been removed
     * from the channel. This is useful in buffering situations so that the
     * producer does not outpace the consumer.
     * @constructor 
     * @param capacity the channel queue depth or 0 for unlimited
     * @returns a new #DexChannel
     */
    constructor(capacity: number) 
    /**
     * Creates a new #DexChannel.
     * 
     * If capacity is non-zero, it can be used to limit the size of the channel
     * so that functions can asynchronously stall until items have been removed
     * from the channel. This is useful in buffering situations so that the
     * producer does not outpace the consumer.
     * @constructor 
     * @param capacity the channel queue depth or 0 for unlimited
     * @returns a new #DexChannel
     */
    static new(capacity: number): Channel
}

export interface Delayed {

    // Owm methods of Dex-1.Dex.Delayed

    /**
     * Retrieves the delayed future provided to dex_delayed_new().
     * 
     * This function can only return a #DexFuture before dex_delayed_release()
     * is called. After that, the delayed future is released and this function
     * will return %NULL.
     * @returns a #DexFuture or %NULL
     */
    dupFuture(): Future | null
    release(): void
}

export class Delayed extends Future {

    // Own properties of Dex-1.Dex.Delayed

    static name: string

    // Constructors of Dex-1.Dex.Delayed

    constructor(future: Future) 
    static new(future: Future): Delayed
}

export interface Fiber {
}

export class Fiber extends Future {

    // Own properties of Dex-1.Dex.Fiber

    static name: string
}

export interface Future {

    // Owm methods of Dex-1.Dex.Future

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
    await(): boolean
    /**
     * Awaits on `future` and returns the gboolean result.
     * 
     * If the result is not a #gboolean, `error` is set.
     * @returns the #gboolean, or %FALSE and @error is set
     */
    awaitBoolean(): boolean
    /**
     * Awaits on `future` and returns the %G_TYPE_BOXED based result.
     * @returns the boxed result, or %NULL and @error is set.
     */
    awaitBoxed(): any | null
    /**
     * Awaits on `future` and returns the result as an double.
     * 
     * The resolved value must be of type %G_TYPE_INT or `error` is set.
     * @returns an double, or 0 in case of failure and @error is set.
     */
    awaitDouble(): number
    /**
     * Awaits on `future` and returns the enum result.
     * 
     * If the result is not a %G_TYPE_ENUM, `error` is set.
     * @returns the enum or 0 and @error is set.
     */
    awaitEnum(): number
    /**
     * Awaits on `future` and returns the flags result.
     * 
     * If the result is not a %G_TYPE_FLAGS, `error` is set.
     * @returns the flags or 0 and @error is set.
     */
    awaitFlags(): number
    /**
     * Awaits on `future` and returns the result as an float.
     * 
     * The resolved value must be of type %G_TYPE_INT or `error` is set.
     * @returns an float, or 0 in case of failure and @error is set.
     */
    awaitFloat(): number
    /**
     * Awaits on `future` and returns the result as an int.
     * 
     * The resolved value must be of type %G_TYPE_INT or `error` is set.
     * @returns an int, or 0 in case of failure and @error is set.
     */
    awaitInt(): number
    /**
     * Awaits on `future` and returns the result as an int64.
     * 
     * The resolved value must be of type %G_TYPE_INT64 or `error` is set.
     * @returns an int64, or 0 in case of failure and @error is set.
     */
    awaitInt64(): number
    /**
     * Awaits on `future` and returns the #GObject-based result.
     * @returns the object, or %NULL and @error is set.
     */
    awaitObject(): GObject.Object
    /**
     * Calls dex_await() and returns the value of g_value_get_pointer(),
     * otherwise `error` is set if the future rejected.
     * @returns a pointer or %NULL
     */
    awaitPointer(): any | null
    /**
     * Awaits on `future` and returns the string result.
     * 
     * If the result is not a %G_TYPE_STRING, `error` is set.
     * @returns the string  or %NULL and @error is set
     */
    awaitString(): string | null
    /**
     * Awaits on `future` and returns the result as an uint.
     * 
     * The resolved value must be of type %G_TYPE_INT or `error` is set.
     * @returns an uint, or 0 in case of failure and @error is set.
     */
    awaitUint(): number
    /**
     * Awaits on `future` and returns the result as an uint64.
     * 
     * The resolved value must be of type %G_TYPE_INT64 or `error` is set.
     * @returns an uint64, or 0 in case of failure and @error is set.
     */
    awaitUint64(): number
    /**
     * Awaits on `future` and returns the %G_TYPE_VARIANT based result.
     * @returns the variant result, or %NULL and @error is set.
     */
    awaitVariant(): GLib.Variant
    /**
     * Disowns a future, allowing it to run to completion even though there may
     * be no observer interested in the futures completion or rejection.
     */
    disown(): void
    getName(): string | null
    getStatus(): FutureStatus
    getValue(): any
}

export class Future extends Object {

    // Own properties of Dex-1.Dex.Future

    static name: string

    // Constructors of Dex-1.Dex.Future

    /**
     * Creates a new #DexFuture that resolves when all futures resolve.
     * 
     * If any future rejects, the resulting #DexFuture also rejects immediately.
     * @constructor 
     * @param futures an array of futures
     * @returns a #DexFuture
     */
    static allRace(futures: Future[]): Future
    /**
     * Creates a new #DexFuture that resolves when all futures resolve.
     * 
     * The resulting #DexFuture will not resolve or reject until all futures
     * have either resolved or rejected.
     * @constructor 
     * @param futures an array of futures
     * @returns a #DexFuture
     */
    static all(futures: Future[]): Future
    /**
     * Creates a new #DexFuture that resolves when the first future resolves.
     * 
     * If all futures reject, then the #DexFuture returned will also reject.
     * @constructor 
     * @param futures an array of futures
     * @returns a #DexFuture
     */
    static any(futures: Future[]): Future
    /**
     * Calls `callback` when `future` rejects.
     * 
     * If `future` resolves, then `callback` will not be called.
     * @constructor 
     * @param future a #DexFuture
     * @param callback a callback to execute
     * @returns a #DexFuture
     */
    static catch(future: Future, callback: FutureCallback): Future
    /**
     * Asynchronously calls `callback` when `future` rejects.
     * 
     * This is similar to dex_future_catch() except that it will call
     * `callback` multiple times as each returned #DexFuture rejects,
     * allowing for infinite loops.
     * @constructor 
     * @param future a #DexFuture
     * @param callback a callback to execute
     * @returns a #DexFuture
     */
    static catchLoop(future: Future, callback: FutureCallback): Future
    /**
     * Calls `callback` when `future` resolves or rejects.
     * @constructor 
     * @param future a #DexFuture
     * @param callback a callback to execute
     * @returns a #DexFuture
     */
    static finally(future: Future, callback: FutureCallback): Future
    /**
     * Asynchronously calls `callback` when `future` rejects or resolves.
     * 
     * This is similar to dex_future_finally() except that it will call
     * `callback` multiple times as each returned #DexFuture rejects or resolves,
     * allowing for infinite loops.
     * @constructor 
     * @param future a #DexFuture
     * @param callback a callback to execute
     * @returns a #DexFuture
     */
    static finallyLoop(future: Future, callback: FutureCallback): Future
    /**
     * Creates a new #DexFuture that resolves or rejects as soon as the
     * first dependent future resolves or rejects, sharing the same result.
     * @constructor 
     * @param futures an array of futures
     * @returns a #DexFuture
     */
    static first(futures: Future[]): Future
    /**
     * Creates a new #DexFuture and resolves it with `v_bool`.
     * @constructor 
     * @param vBool the resolved value for the future
     * @returns a resolved #DexFuture
     */
    static newForBoolean(vBool: boolean): Future
    /**
     * Creates a new #DexFuture and resolves it with `v_double`.
     * @constructor 
     * @param vDouble the resolved value for the future
     * @returns a resolved #DexFuture
     */
    static newForDouble(vDouble: number): Future
    /**
     * Creates a new rejected future using `errno_` as the value
     * of errno for the GError.
     * 
     * The resulting error domain will be %G_IO_ERROR.
     * @constructor 
     * @param errno the `errno` to use for rejection
     * @returns a rejected #DexFuture.
     */
    static newForErrno(errno: number): Future
    /**
     * Creates a read-only #DexFuture that has rejected.
     * @constructor 
     * @param error a #GError
     * @returns a #DexFuture
     */
    static newForError(error: GLib.Error): Future
    /**
     * Creates a new #DexFuture and resolves it with `v_float`.
     * @constructor 
     * @param vFloat the resolved value for the future
     * @returns a resolved #DexFuture
     */
    static newForFloat(vFloat: number): Future
    /**
     * Creates a new #DexFuture and resolves it with `v_int`.
     * @constructor 
     * @param vInt the resolved value for the future
     * @returns a resolved #DexFuture
     */
    static newForInt(vInt: number): Future
    /**
     * Creates a new #DexFuture and resolves it with `v_int6`4.
     * @constructor 
     * @param vInt64 the resolved value for the future
     * @returns a resolved #DexFuture
     */
    static newForInt64(vInt64: number): Future
    /**
     * Creates a new #DexFuture that is resolved with `value`.
     * @constructor 
     * @param value the value
     * @returns a resolved #DexFuture
     */
    static newForObject(value: GObject.Object): Future
    /**
     * Creates a new #DexFuture that is resolved with `pointer` as a %G_TYPE_POINTER.
     * @constructor 
     * @param pointer the resolved future value as a pointer
     * @returns a resolved #DexFuture
     */
    static newForPointer(pointer: any | null): Future
    /**
     * Creates a new #DexFuture and resolves it with `string`.
     * @constructor 
     * @param string the resolved value for the future
     * @returns a resolved #DexFuture
     */
    static newForString(string: string | null): Future
    /**
     * Creates a new #DexFuture and resolves it with `v_uint`.
     * @constructor 
     * @param vUint the resolved value for the future
     * @returns a resolved #DexFuture
     */
    static newForUint(vUint: number): Future
    /**
     * Creates a new #DexFuture and resolves it with `v_uint6`4.
     * @constructor 
     * @param vUint64 the resolved value for the future
     * @returns a resolved #DexFuture
     */
    static newForUint64(vUint64: number): Future
    /**
     * Creates a read-only #DexFuture that has resolved.
     * @constructor 
     * @param value the resolved #GValue
     * @returns a #DexFuture
     */
    static newForValue(value: any): Future
    /**
     * Creates an infinite future that will never resolve or reject. This can
     * be useful when you want to mock a situation of "run forever" unless
     * another future rejects or resolves.
     * @constructor 
     * @returns a #DexFuture that will never complete or reject
     */
    static newInfinite(): Future
    /**
     * Creates a new #DexFuture that is resolved with `value`.
     * @constructor 
     * @param value the value
     * @returns a resolved #DexFuture
     */
    static newTakeObject(value: GObject.Object): Future
    /**
     * Creates a new #DexFuture and resolves it with `string`.
     * @constructor 
     * @param string the resolved value for the future
     * @returns a resolved #DexFuture
     */
    static newTakeString(string: string | null): Future
    /**
     * Calls `callback` when `future` resolves.
     * 
     * If `future` rejects, then `callback` will not be called.
     * @constructor 
     * @param future a #DexFuture
     * @param callback a callback to execute
     * @returns a #DexFuture
     */
    static then(future: Future, callback: FutureCallback): Future
    /**
     * Asynchronously calls `callback` when `future` resolves.
     * 
     * This is similar to dex_future_then() except that it will call
     * `callback` multiple times as each returned #DexFuture resolves or
     * rejects, allowing for infinite loops.
     * @constructor 
     * @param future a #DexFuture
     * @param callback a callback to execute
     * @returns a #DexFuture
     */
    static thenLoop(future: Future, callback: FutureCallback): Future
}

export interface FutureSet {

    // Owm methods of Dex-1.Dex.FutureSet

    /**
     * Gets a #DexFuture that was used to produce the result of `future_set`.
     * 
     * Use dex_future_set_get_size() to determine the number of #DexFuture that
     * are contained within the #DexFutureSet.
     * @param position 
     * @returns a #DexFuture
     */
    getFutureAt(position: number): Future
    /**
     * Gets the number of futures associated with the #DexFutureSet. You may
     * use dex_future_set_get_future_at() to obtain the individual #DexFuture.
     * @returns the number of #DexFuture in @future_set.
     */
    getSize(): number
    /**
     * Gets the result from a #DexFuture that is part of the
     * #DexFutureSet.
     * @param position the #DexFuture position within the set
     * @returns a #GValue if successful; otherwise %NULL   and @error is set.
     */
    getValueAt(position: number): any
}

export class FutureSet extends Future {

    // Own properties of Dex-1.Dex.FutureSet

    static name: string
}

export interface MainScheduler {
}

export class MainScheduler extends Scheduler {

    // Own properties of Dex-1.Dex.MainScheduler

    static name: string
}

export interface Object {

    // Owm methods of Dex-1.Dex.Object

    /**
     * Acquires a reference on the given object, and increases its reference count by one.
     * @returns the object with its reference count increased
     */
    ref(): Object
    /**
     * Releases a reference on the given object, and decreases its reference count by one.
     * 
     * If it was the last reference, the resources associated to the instance are freed.
     */
    unref(): void
}

/**
 * `DexObject` is the basic building block of types defined within
 * libdex. Futures, Schedulers, and Channels all inherit from DexObject
 * which provides features like thread-safe weak pointers and memory
 * management operations.
 * 
 * Objects that are integrating with GIO instead inherit from their
 * natural type in GIO.
 * @class 
 */
export class Object {

    // Own properties of Dex-1.Dex.Object

    static name: string
}

export interface Promise {

    // Owm methods of Dex-1.Dex.Promise

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
    getCancellable(): Gio.Cancellable | null
    /**
     * Marks the promise as rejected, indicating a failure.
     * @param error a #GError
     */
    reject(error: GLib.Error): void
    /**
     * Sets the result for a #DexPromise.
     * @param value a #GValue containing the resolved value
     */
    resolve(value: any): void
    resolveBoolean(value: boolean): void
    resolveDouble(value: number): void
    resolveFloat(value: number): void
    resolveInt(value: number): void
    resolveInt64(value: number): void
    resolveLong(value: number): void
    resolveObject(object: any | null): void
    resolveString(value: string | null): void
    resolveUint(value: number): void
    resolveUint64(value: number): void
    resolveUlong(value: number): void
}

export class Promise extends Future {

    // Own properties of Dex-1.Dex.Promise

    static name: string

    // Constructors of Dex-1.Dex.Promise

    constructor() 
    static new(): Promise
    /**
     * Creates a new #DexPromise that can propagate cancellation if the
     * promise is discarded.
     * 
     * This can be used to plumb cancellation between promises and
     * #GAsyncReadyCallback based APIs.
     * @constructor 
     * @returns a #DexPromise
     */
    static newCancellable(): Promise
}

export interface Scheduler {

    // Owm methods of Dex-1.Dex.Scheduler

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
    getMainContext(): GLib.MainContext
    /**
     * Queues `func` to run on `scheduler`.
     * @param func the function callback
     */
    push(func: SchedulerFunc): void
    /**
     * Request `scheduler` to spawn a #DexFiber.
     * 
     * The fiber will have it's own stack and cooperatively schedules among other
     * fibers sharing the schaeduler.
     * 
     * If `stack_size` is 0, it will set to a sensible default. Otherwise, it is
     * rounded up to the nearest page size.
     * @param stackSize stack size in bytes or 0
     * @returns a #DexFuture that will resolve or reject when   @func completes (or it's resulting #DexFuture completes).
     */
    spawn(stackSize: number): Future
}

export class Scheduler extends Object {

    // Own properties of Dex-1.Dex.Scheduler

    static name: string

    // Constructors of Dex-1.Dex.Scheduler

    /**
     * Gets the default scheduler for the process.
     * 
     * The default scheduler executes tasks within the default #GMainContext.
     * Typically that is the main thread of the application.
     * @returns a #DexScheduler
     */
    static getDefault(): Scheduler
    /**
     * Gets the default scheduler for the thread.
     * @returns a #DexScheduler or %NULL
     */
    static getThreadDefault(): Scheduler | null
    /**
     * Gets the thread default scheduler with the reference count incremented.
     * @returns a #DexScheduler or %NULL
     */
    static refThreadDefault(): Scheduler | null
}

export interface StaticFuture {
}

export class StaticFuture extends Future {

    // Own properties of Dex-1.Dex.StaticFuture

    static name: string
}

export interface ThreadPoolScheduler {
}

export class ThreadPoolScheduler extends Scheduler {

    // Own properties of Dex-1.Dex.ThreadPoolScheduler

    static name: string

    // Constructors of Dex-1.Dex.ThreadPoolScheduler

    /**
     * Creates a new #DexScheduler that executes work items on a thread pool.
     * @constructor 
     * @returns a #DexThreadPoolScheduler
     */
    constructor() 
    /**
     * Creates a new #DexScheduler that executes work items on a thread pool.
     * @constructor 
     * @returns a #DexThreadPoolScheduler
     */
    static new(): ThreadPoolScheduler
    /**
     * Gets the default thread pool scheduler for the instance.
     * 
     * This function is useful to allow programs and libraries to share
     * an off-main-thread scheduler without having to coordinate on where
     * the scheduler instance is created or owned.
     * @returns a #DexScheduler
     */
    static getDefault(): Scheduler
}

export interface Timeout {

    // Owm methods of Dex-1.Dex.Timeout

    postponeUntil(deadline: number): void
}

export class Timeout extends Future {

    // Own properties of Dex-1.Dex.Timeout

    static name: string

    // Constructors of Dex-1.Dex.Timeout

    static newDeadline(deadline: number): Timeout
    static newMsec(msec: number): Timeout
    static newSeconds(seconds: number): Timeout
    static newUsec(usec: number): Timeout
}

export interface UnixSignal {

    // Owm methods of Dex-1.Dex.UnixSignal

    getSignum(): number
}

export class UnixSignal extends Future {

    // Own properties of Dex-1.Dex.UnixSignal

    static name: string

    // Constructors of Dex-1.Dex.UnixSignal

    /**
     * Creates a new #DexUnixSignal that completes when `signum` is delivered
     * to the process.
     * 
     * `signum` must be one of SIGHUP, SIGINT, SIGTERM, SIGUSR1, SIGUSR2, or
     * SIGWINCH.
     * 
     * This API is only supported on UNIX-like systems.
     * @constructor 
     * @param signum a unix signal number
     * @returns a new #DexFuture
     */
    constructor(signum: number) 
    /**
     * Creates a new #DexUnixSignal that completes when `signum` is delivered
     * to the process.
     * 
     * `signum` must be one of SIGHUP, SIGINT, SIGTERM, SIGUSR1, SIGUSR2, or
     * SIGWINCH.
     * 
     * This API is only supported on UNIX-like systems.
     * @constructor 
     * @param signum a unix signal number
     * @returns a new #DexFuture
     */
    static new(signum: number): UnixSignal
}

export interface AioContext {
}

export class AioContext {

    // Own properties of Dex-1.Dex.AioContext

    static name: string
}

export interface AsyncPairInfo {

    // Own fields of Dex-1.Dex.AsyncPairInfo

    async: any
    finish: any
    returnType: GObject.GType
}

export class AsyncPairInfo {

    // Own properties of Dex-1.Dex.AsyncPairInfo

    static name: string
}

export interface AsyncResultClass {

    // Own fields of Dex-1.Dex.AsyncResultClass

    parentClass: GObject.ObjectClass
}

export abstract class AsyncResultClass {

    // Own properties of Dex-1.Dex.AsyncResultClass

    static name: string
}

// END