
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './bump-0.1-ambient.d.ts';
import './bump-0.1-import.d.ts';
/**
 * Bump-0.1
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gee from '@girs/gee-0.8';

export namespace Bump {

interface Callback {
    (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify): any | null
}
module Queue {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Queue extends GObject.Object {

    // Own properties of Bump-0.1.Bump.Queue

    readonly length: number

    // Owm methods of Bump-0.1.Bump.Queue

    process(wait: GLib.TimeSpan): boolean
    get_length(): number

    // Own virtual methods of Bump-0.1.Bump.Queue

    vfunc_process(wait: GLib.TimeSpan): boolean
    vfunc_get_length(): number

    // Class property signals of Bump-0.1.Bump.Queue

    connect(sigName: "notify::length", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: Queue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Queue {

    // Own properties of Bump-0.1.Bump.Queue

    static name: string
    static $gtype: GObject.GType<Queue>

    // Constructors of Bump-0.1.Bump.Queue

    constructor(config?: Queue.ConstructorProperties) 
    _init(config?: Queue.ConstructorProperties): void
}

module Threading {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties, Queue.ConstructorProperties {
    }

}

interface Threading extends GObject.Object, Queue {

    // Owm methods of Bump-0.1.Bump.Threading

    get_max_threads(): number
    set_max_threads(value: number): void
    get_max_idle_time(): GLib.TimeSpan
    set_max_idle_time(value: GLib.TimeSpan): void
    get_num_threads(): number
    get_idle_threads(): number
    increase_max_threads(new_max_threads: number): void
    run_task(func: GLib.SourceFunc): boolean
    spawn(max_new_threads: number): number

    // Own virtual methods of Bump-0.1.Bump.Threading

    vfunc_spawn(max_new_threads: number): number

    // Class property signals of Bump-0.1.Bump.Threading

    connect(sigName: "notify::length", callback: (($obj: Threading, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: Threading, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Threading {

    // Own properties of Bump-0.1.Bump.Threading

    static name: string
    static $gtype: GObject.GType<Threading>

    // Constructors of Bump-0.1.Bump.Threading

    constructor(config?: Threading.ConstructorProperties) 
    _init(config?: Threading.ConstructorProperties): void
}

module AsyncPriorityQueue {

    // Signal callback interfaces

    /**
     * Signal callback interface for `consumer-shortage`
     */
    interface ConsumerShortageSignalCallback {
        ($obj: AsyncPriorityQueue): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gee.PriorityQueue.ConstructorProperties {

        // Own constructor properties of Bump-0.1.Bump.AsyncPriorityQueue

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
        waitingThreads?: number | null
    }

}

interface AsyncPriorityQueue {

    // Own properties of Bump-0.1.Bump.AsyncPriorityQueue

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    waitingThreads: number

    // Owm methods of Bump-0.1.Bump.AsyncPriorityQueue

    poll_timed(wait: GLib.TimeSpan): any | null
    peek_timed(wait: GLib.TimeSpan): any | null
    offer(element?: any | null): boolean

    // Overloads of offer

    offer(element: any): boolean
    get_waiting_threads(): number

    // Own signals of Bump-0.1.Bump.AsyncPriorityQueue

    connect(sigName: "consumer-shortage", callback: AsyncPriorityQueue.ConsumerShortageSignalCallback): number
    connect_after(sigName: "consumer-shortage", callback: AsyncPriorityQueue.ConsumerShortageSignalCallback): number
    emit(sigName: "consumer-shortage", ...args: any[]): void

    // Class property signals of Bump-0.1.Bump.AsyncPriorityQueue

    connect(sigName: "notify::g-type", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::waiting-threads", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::waiting-threads", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::waiting-threads", ...args: any[]): void
    connect(sigName: "notify::capacity", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capacity", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::remaining-capacity", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-capacity", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remaining-capacity", ...args: any[]): void
    connect(sigName: "notify::is-full", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-full", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-full", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only-view", callback: (($obj: AsyncPriorityQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AsyncPriorityQueue extends Gee.PriorityQueue {

    // Own properties of Bump-0.1.Bump.AsyncPriorityQueue

    static name: string
    static $gtype: GObject.GType<AsyncPriorityQueue>

    // Constructors of Bump-0.1.Bump.AsyncPriorityQueue

    constructor(config?: AsyncPriorityQueue.ConstructorProperties) 
    constructor(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, compare_func: GLib.CompareDataFunc | null) 
    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, compare_func: GLib.CompareDataFunc | null): AsyncPriorityQueue

    // Overloads of new

    static new(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, compare_func: GLib.CompareDataFunc | null): Gee.PriorityQueue
    _init(config?: AsyncPriorityQueue.ConstructorProperties): void
}

module Claim {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Bump-0.1.Bump.Claim

        timeAcquired?: number | null
        timeReleased?: number | null
    }

}

interface Claim extends Gio.Initable, Gio.AsyncInitable {

    // Own properties of Bump-0.1.Bump.Claim

    readonly active: boolean
    timeAcquired: number
    timeReleased: number
    readonly durationHeld: GLib.TimeSpan

    // Owm methods of Bump-0.1.Bump.Claim

    release(): void
    init(cancellable?: Gio.Cancellable | null): boolean

    // Overloads of init

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
     * behaviour. See the [introduction][ginitable] for more details.
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
    init(cancellable: Gio.Cancellable | null): boolean
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of init_async

    /**
     * Promisified version of {@link init_async}
     * 
     * 
     * @param io_priority 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link init_async}
     */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    init_finish(_res_: Gio.AsyncResult): boolean
    get_active(): boolean
    get_time_acquired(): number
    get_time_released(): number
    get_duration_held(): GLib.TimeSpan

    // Own virtual methods of Bump-0.1.Bump.Claim

    vfunc_release(): void
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean

    // Overloads of vfunc_init

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
     * behaviour. See the [introduction][ginitable] for more details.
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
     * @virtual 
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
     */
    vfunc_init(cancellable: Gio.Cancellable | null): boolean
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of vfunc_init_async

    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @virtual 
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    vfunc_init_finish(_res_: Gio.AsyncResult): boolean

    // Class property signals of Bump-0.1.Bump.Claim

    connect(sigName: "notify::active", callback: (($obj: Claim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Claim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::time-acquired", callback: (($obj: Claim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-acquired", callback: (($obj: Claim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-acquired", ...args: any[]): void
    connect(sigName: "notify::time-released", callback: (($obj: Claim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-released", callback: (($obj: Claim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-released", ...args: any[]): void
    connect(sigName: "notify::duration-held", callback: (($obj: Claim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-held", callback: (($obj: Claim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::duration-held", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Claim extends GObject.Object {

    // Own properties of Bump-0.1.Bump.Claim

    static name: string
    static $gtype: GObject.GType<Claim>

    // Constructors of Bump-0.1.Bump.Claim

    constructor(config?: Claim.ConstructorProperties) 
    constructor() 
    static new(): Claim
    _init(config?: Claim.ConstructorProperties): void
}

module Event {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Bump-0.1.Bump.Event

        tType?: GObject.GType | null
        tDupFunc?: GObject.BoxedCopyFunc | null
        tDestroyFunc?: GLib.DestroyNotify | null
        pool?: TaskQueue | null
        autoReset?: boolean | null
        triggered?: boolean | null
    }

}

interface Event {

    // Own properties of Bump-0.1.Bump.Event

    readonly tType: GObject.GType
    readonly tDupFunc: GObject.BoxedCopyFunc
    readonly tDestroyFunc: GLib.DestroyNotify
    readonly pool: TaskQueue
    readonly autoReset: boolean
    triggered: boolean

    // Owm methods of Bump-0.1.Bump.Event

    reset(): void
    trigger(value?: any | null): void
    add(func: any, priority: number, cancellable?: Gio.Cancellable | null): void
    execute(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, r_destroy_func: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null): any | null
    execute_async(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, r_destroy_func: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of execute_async

    /**
     * Promisified version of {@link execute_async}
     * 
     * 
     * @param r_type 
     * @param r_dup_func 
     * @param r_destroy_func 
     * @param func 
     * @param priority 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link execute_async}
     */
    execute_async(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, r_destroy_func: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<any | null>
    execute_finish(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, r_destroy_func: GLib.DestroyNotify, _res_: Gio.AsyncResult): any | null
    execute_background(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, r_destroy_func: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    execute_background_finish(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, r_destroy_func: GLib.DestroyNotify, _res_: Gio.AsyncResult): any | null
    get_pool(): TaskQueue
    get_auto_reset(): boolean
    get_triggered(): boolean

    // Class property signals of Bump-0.1.Bump.Event

    connect(sigName: "notify::t-type", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-type", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-dup-func", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-destroy-func", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::pool", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pool", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pool", ...args: any[]): void
    connect(sigName: "notify::auto-reset", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-reset", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::auto-reset", ...args: any[]): void
    connect(sigName: "notify::triggered", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::triggered", callback: (($obj: Event, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::triggered", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Event extends GObject.Object {

    // Own properties of Bump-0.1.Bump.Event

    static name: string
    static $gtype: GObject.GType<Event>

    // Constructors of Bump-0.1.Bump.Event

    constructor(config?: Event.ConstructorProperties) 
    constructor(t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, t_destroy_func: GLib.DestroyNotify, auto_reset: boolean) 
    static new(t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, t_destroy_func: GLib.DestroyNotify, auto_reset: boolean): Event
    _init(config?: Event.ConstructorProperties): void
}

module Factory {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Bump-0.1.Bump.Factory

        gType?: GObject.GType | null
        gDupFunc?: GObject.BoxedCopyFunc | null
        gDestroyFunc?: GLib.DestroyNotify | null
    }

}

interface Factory {

    // Own properties of Bump-0.1.Bump.Factory

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Owm methods of Bump-0.1.Bump.Factory

    create(priority: number, cancellable?: Gio.Cancellable | null): any | null
    create_async(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of create_async

    /**
     * Promisified version of {@link create_async}
     * 
     * 
     * @param priority 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link create_async}
     */
    create_async(priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<any | null>
    create_finish(_res_: Gio.AsyncResult): any | null
    create_background(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    create_background_finish(_res_: Gio.AsyncResult): any | null
    acquire(priority: number, cancellable?: Gio.Cancellable | null): any | null
    acquire_async(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of acquire_async

    /**
     * Promisified version of {@link acquire_async}
     * 
     * 
     * @param priority 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link acquire_async}
     */
    acquire_async(priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<any | null>
    acquire_finish(_res_: Gio.AsyncResult): any | null
    acquire_background(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    acquire_background_finish(_res_: Gio.AsyncResult): any | null
    get_construct_properties(): GObject.Parameter[] | null
    set_construct_properties(value: GObject.Parameter[] | null): void

    // Own virtual methods of Bump-0.1.Bump.Factory

    vfunc_create(priority: number, cancellable?: Gio.Cancellable | null): any | null
    vfunc_create_async(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_create_finish(_res_: Gio.AsyncResult): any | null
    vfunc_create_background(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_create_background_finish(_res_: Gio.AsyncResult): any | null
    vfunc_acquire(priority: number, cancellable?: Gio.Cancellable | null): any | null
    vfunc_acquire_async(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_acquire_finish(_res_: Gio.AsyncResult): any | null
    vfunc_acquire_background(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_acquire_background_finish(_res_: Gio.AsyncResult): any | null

    // Class property signals of Bump-0.1.Bump.Factory

    connect(sigName: "notify::g-type", callback: (($obj: Factory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: Factory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: Factory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: Factory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: Factory, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: Factory, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Factory extends GObject.Object {

    // Own properties of Bump-0.1.Bump.Factory

    static name: string
    static $gtype: GObject.GType<Factory>

    // Constructors of Bump-0.1.Bump.Factory

    constructor(config?: Factory.ConstructorProperties) 
    _init(config?: Factory.ConstructorProperties): void
}

module Lazy {

    // Constructor properties interface

    interface ConstructorProperties extends Factory.ConstructorProperties {

        // Own constructor properties of Bump-0.1.Bump.Lazy

        tType?: GObject.GType | null
        tDupFunc?: GObject.BoxedCopyFunc | null
        tDestroyFunc?: GLib.DestroyNotify | null
        pool?: TaskQueue | null
    }

}

interface Lazy {

    // Own properties of Bump-0.1.Bump.Lazy

    readonly tType: GObject.GType
    readonly tDupFunc: GObject.BoxedCopyFunc
    readonly tDestroyFunc: GLib.DestroyNotify
    readonly pool: TaskQueue
    readonly value: any
    readonly isInitialized: boolean

    // Owm methods of Bump-0.1.Bump.Lazy

    get_pool(): TaskQueue
    get_value(): any | null
    get_is_initialized(): boolean

    // Class property signals of Bump-0.1.Bump.Lazy

    connect(sigName: "notify::t-type", callback: (($obj: Lazy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-type", callback: (($obj: Lazy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: (($obj: Lazy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-dup-func", callback: (($obj: Lazy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: (($obj: Lazy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-destroy-func", callback: (($obj: Lazy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::pool", callback: (($obj: Lazy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pool", callback: (($obj: Lazy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pool", ...args: any[]): void
    connect(sigName: "notify::value", callback: (($obj: Lazy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::value", callback: (($obj: Lazy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::is-initialized", callback: (($obj: Lazy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-initialized", callback: (($obj: Lazy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-initialized", ...args: any[]): void
    connect(sigName: "notify::g-type", callback: (($obj: Lazy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: Lazy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: Lazy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: Lazy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: Lazy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: Lazy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Lazy extends Factory {

    // Own properties of Bump-0.1.Bump.Lazy

    static name: string
    static $gtype: GObject.GType<Lazy>

    // Constructors of Bump-0.1.Bump.Lazy

    constructor(config?: Lazy.ConstructorProperties) 
    constructor(t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, t_destroy_func: GLib.DestroyNotify) 
    static new(t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, t_destroy_func: GLib.DestroyNotify): Lazy
    _init(config?: Lazy.ConstructorProperties): void
}

module ResourceClaim {

    // Constructor properties interface

    interface ConstructorProperties extends Claim.ConstructorProperties {

        // Own constructor properties of Bump-0.1.Bump.ResourceClaim

        tType?: GObject.GType | null
        tDupFunc?: GObject.BoxedCopyFunc | null
        tDestroyFunc?: GLib.DestroyNotify | null
        pool?: ResourcePool | null
    }

}

interface ResourceClaim {

    // Own properties of Bump-0.1.Bump.ResourceClaim

    readonly tType: GObject.GType
    readonly tDupFunc: GObject.BoxedCopyFunc
    readonly tDestroyFunc: GLib.DestroyNotify
    readonly pool: ResourcePool
    readonly resource: any

    // Owm methods of Bump-0.1.Bump.ResourceClaim

    get_pool(): ResourcePool
    get_resource(): any | null

    // Conflicting methods

    init(cancellable?: Gio.Cancellable | null): boolean

    // Overloads of init

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
     * behaviour. See the [introduction][ginitable] for more details.
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
    init(cancellable: Gio.Cancellable | null): boolean
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
     * behaviour. See the [introduction][ginitable] for more details.
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
    init(cancellable: Gio.Cancellable | null): boolean
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of init_async

    /**
     * Promisified version of {@link init_async}
     * 
     * 
     * @param io_priority 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link init_async}
     */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of init_async

    /**
     * Promisified version of {@link init_async}
     * 
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns A Promise of: %TRUE if successful. If an error has occurred, this function will return %FALSE and set @error appropriately if present.
     */
    init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean

    // Overloads of vfunc_init

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
     * behaviour. See the [introduction][ginitable] for more details.
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
     * @virtual 
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
     */
    vfunc_init(cancellable: Gio.Cancellable | null): boolean
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
     * behaviour. See the [introduction][ginitable] for more details.
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
     * @virtual 
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
     */
    vfunc_init(cancellable: Gio.Cancellable | null): boolean
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of vfunc_init_async

    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @virtual 
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @virtual 
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Class property signals of Bump-0.1.Bump.ResourceClaim

    connect(sigName: "notify::t-type", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-type", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-dup-func", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-destroy-func", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::pool", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pool", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pool", ...args: any[]): void
    connect(sigName: "notify::resource", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resource", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::time-acquired", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-acquired", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-acquired", ...args: any[]): void
    connect(sigName: "notify::time-released", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-released", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-released", ...args: any[]): void
    connect(sigName: "notify::duration-held", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-held", callback: (($obj: ResourceClaim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::duration-held", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ResourceClaim extends Claim {

    // Own properties of Bump-0.1.Bump.ResourceClaim

    static name: string
    static $gtype: GObject.GType<ResourceClaim>

    // Constructors of Bump-0.1.Bump.ResourceClaim

    constructor(config?: ResourceClaim.ConstructorProperties) 
    constructor(t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, t_destroy_func: GLib.DestroyNotify, pool: ResourcePool) 
    static new(t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, t_destroy_func: GLib.DestroyNotify, pool: ResourcePool): ResourceClaim

    // Overloads of new

    static new(): Claim
    _init(config?: ResourceClaim.ConstructorProperties): void
}

module ResourcePool {

    // Constructor properties interface

    interface ConstructorProperties extends Factory.ConstructorProperties {

        // Own constructor properties of Bump-0.1.Bump.ResourcePool

        tType?: GObject.GType | null
        tDupFunc?: GObject.BoxedCopyFunc | null
        tDestroyFunc?: GLib.DestroyNotify | null
        maxResources?: number | null
        maxIdleTime?: GLib.TimeSpan | null
        numResources?: number | null
        pool?: TaskQueue | null
    }

}

interface ResourcePool {

    // Own properties of Bump-0.1.Bump.ResourcePool

    readonly tType: GObject.GType
    readonly tDupFunc: GObject.BoxedCopyFunc
    readonly tDestroyFunc: GLib.DestroyNotify
    readonly maxResources: number
    maxIdleTime: GLib.TimeSpan
    numResources: number
    readonly idleResources: number
    readonly activeResources: number
    readonly pool: TaskQueue

    // Owm methods of Bump-0.1.Bump.ResourcePool

    release(resource?: any | null): void
    execute(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, r_destroy_func: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null): any | null
    execute_async(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, r_destroy_func: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of execute_async

    /**
     * Promisified version of {@link execute_async}
     * 
     * 
     * @param r_type 
     * @param r_dup_func 
     * @param r_destroy_func 
     * @param func 
     * @param priority 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link execute_async}
     */
    execute_async(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, r_destroy_func: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<any | null>
    execute_finish(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, r_destroy_func: GLib.DestroyNotify, _res_: Gio.AsyncResult): any | null
    execute_background(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, r_destroy_func: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    execute_background_finish(r_type: GObject.GType, r_dup_func: GObject.BoxedCopyFunc, r_destroy_func: GLib.DestroyNotify, _res_: Gio.AsyncResult): any | null
    claim(priority: number, cancellable?: Gio.Cancellable | null): ResourceClaim
    claim_async(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of claim_async

    /**
     * Promisified version of {@link claim_async}
     * 
     * 
     * @param priority 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link claim_async}
     */
    claim_async(priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<ResourceClaim>
    claim_finish(_res_: Gio.AsyncResult): ResourceClaim
    get_max_resources(): number
    get_max_idle_time(): GLib.TimeSpan
    set_max_idle_time(value: GLib.TimeSpan): void
    get_num_resources(): number
    get_idle_resources(): number
    get_active_resources(): number
    get_pool(): TaskQueue

    // Own virtual methods of Bump-0.1.Bump.ResourcePool

    vfunc_release(resource?: any | null): void

    // Class property signals of Bump-0.1.Bump.ResourcePool

    connect(sigName: "notify::t-type", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-type", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-dup-func", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::t-destroy-func", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::max-resources", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-resources", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-resources", ...args: any[]): void
    connect(sigName: "notify::max-idle-time", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-idle-time", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-idle-time", ...args: any[]): void
    connect(sigName: "notify::num-resources", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-resources", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::num-resources", ...args: any[]): void
    connect(sigName: "notify::idle-resources", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle-resources", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::idle-resources", ...args: any[]): void
    connect(sigName: "notify::active-resources", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-resources", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-resources", ...args: any[]): void
    connect(sigName: "notify::pool", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pool", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pool", ...args: any[]): void
    connect(sigName: "notify::g-type", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-type", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-dup-func", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-destroy-func", callback: (($obj: ResourcePool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ResourcePool extends Factory {

    // Own properties of Bump-0.1.Bump.ResourcePool

    static name: string
    static $gtype: GObject.GType<ResourcePool>

    // Constructors of Bump-0.1.Bump.ResourcePool

    constructor(config?: ResourcePool.ConstructorProperties) 
    constructor(t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, t_destroy_func: GLib.DestroyNotify, max_resources: number) 
    static new(t_type: GObject.GType, t_dup_func: GObject.BoxedCopyFunc, t_destroy_func: GLib.DestroyNotify, max_resources: number): ResourcePool
    _init(config?: ResourcePool.ConstructorProperties): void
}

module Semaphore {

    // Constructor properties interface

    interface ConstructorProperties extends TaskQueue.ConstructorProperties {

        // Own constructor properties of Bump-0.1.Bump.Semaphore

        maxClaims?: number | null
        claims?: number | null
        pool?: TaskQueue | null
    }

}

interface Semaphore {

    // Own properties of Bump-0.1.Bump.Semaphore

    readonly maxClaims: number
    claims: number
    readonly pool: TaskQueue

    // Owm methods of Bump-0.1.Bump.Semaphore

    unlock(): void
    lock(priority: number, cancellable?: Gio.Cancellable | null): void
    lock_async(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of lock_async

    /**
     * Promisified version of {@link lock_async}
     * 
     * 
     * @param priority 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link lock_async}
     */
    lock_async(priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<void>
    lock_finish(_res_: Gio.AsyncResult): void
    claim(priority: number, cancellable?: Gio.Cancellable | null): SemaphoreClaim
    claim_async(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of claim_async

    /**
     * Promisified version of {@link claim_async}
     * 
     * 
     * @param priority 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link claim_async}
     */
    claim_async(priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<SemaphoreClaim>
    claim_finish(_res_: Gio.AsyncResult): SemaphoreClaim
    get_max_claims(): number
    get_claims(): number
    get_pool(): TaskQueue

    // Own virtual methods of Bump-0.1.Bump.Semaphore

    vfunc_claim(priority: number, cancellable?: Gio.Cancellable | null): SemaphoreClaim
    vfunc_claim_async(priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_claim_finish(_res_: Gio.AsyncResult): SemaphoreClaim

    // Class property signals of Bump-0.1.Bump.Semaphore

    connect(sigName: "notify::max-claims", callback: (($obj: Semaphore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-claims", callback: (($obj: Semaphore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-claims", ...args: any[]): void
    connect(sigName: "notify::claims", callback: (($obj: Semaphore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::claims", callback: (($obj: Semaphore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::claims", ...args: any[]): void
    connect(sigName: "notify::pool", callback: (($obj: Semaphore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pool", callback: (($obj: Semaphore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pool", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Semaphore extends TaskQueue {

    // Own properties of Bump-0.1.Bump.Semaphore

    static name: string
    static $gtype: GObject.GType<Semaphore>

    // Constructors of Bump-0.1.Bump.Semaphore

    constructor(config?: Semaphore.ConstructorProperties) 
    constructor(max_claims: number) 
    static new(max_claims: number): Semaphore

    // Overloads of new

    static new(): TaskQueue
    _init(config?: Semaphore.ConstructorProperties): void
}

module SemaphoreClaim {

    // Constructor properties interface

    interface ConstructorProperties extends Claim.ConstructorProperties {

        // Own constructor properties of Bump-0.1.Bump.SemaphoreClaim

        semaphore?: Semaphore | null
    }

}

interface SemaphoreClaim {

    // Own properties of Bump-0.1.Bump.SemaphoreClaim

    readonly semaphore: Semaphore

    // Owm methods of Bump-0.1.Bump.SemaphoreClaim

    get_semaphore(): Semaphore

    // Conflicting methods

    init(cancellable?: Gio.Cancellable | null): boolean

    // Overloads of init

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
     * behaviour. See the [introduction][ginitable] for more details.
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
    init(cancellable: Gio.Cancellable | null): boolean
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
     * behaviour. See the [introduction][ginitable] for more details.
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
    init(cancellable: Gio.Cancellable | null): boolean
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of init_async

    /**
     * Promisified version of {@link init_async}
     * 
     * 
     * @param io_priority 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link init_async}
     */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of init_async

    /**
     * Promisified version of {@link init_async}
     * 
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns A Promise of: %TRUE if successful. If an error has occurred, this function will return %FALSE and set @error appropriately if present.
     */
    init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean

    // Overloads of vfunc_init

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
     * behaviour. See the [introduction][ginitable] for more details.
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
     * @virtual 
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
     */
    vfunc_init(cancellable: Gio.Cancellable | null): boolean
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
     * behaviour. See the [introduction][ginitable] for more details.
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
     * @virtual 
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
     */
    vfunc_init(cancellable: Gio.Cancellable | null): boolean
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of vfunc_init_async

    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @virtual 
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @virtual 
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Class property signals of Bump-0.1.Bump.SemaphoreClaim

    connect(sigName: "notify::semaphore", callback: (($obj: SemaphoreClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::semaphore", callback: (($obj: SemaphoreClaim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::semaphore", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: SemaphoreClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: SemaphoreClaim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::time-acquired", callback: (($obj: SemaphoreClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-acquired", callback: (($obj: SemaphoreClaim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-acquired", ...args: any[]): void
    connect(sigName: "notify::time-released", callback: (($obj: SemaphoreClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-released", callback: (($obj: SemaphoreClaim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-released", ...args: any[]): void
    connect(sigName: "notify::duration-held", callback: (($obj: SemaphoreClaim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration-held", callback: (($obj: SemaphoreClaim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::duration-held", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class SemaphoreClaim extends Claim {

    // Own properties of Bump-0.1.Bump.SemaphoreClaim

    static name: string
    static $gtype: GObject.GType<SemaphoreClaim>

    // Constructors of Bump-0.1.Bump.SemaphoreClaim

    constructor(config?: SemaphoreClaim.ConstructorProperties) 
    _init(config?: SemaphoreClaim.ConstructorProperties): void
}

module TaskQueue {

    // Constructor properties interface

    interface ConstructorProperties extends Queue.ConstructorProperties, Threading.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface TaskQueue extends Queue, Threading {

    // Owm methods of Bump-0.1.Bump.TaskQueue

    spawn(max: number): number
    add(task: GLib.SourceFunc, priority: number, cancellable?: Gio.Cancellable | null): void
    process(wait: GLib.TimeSpan): boolean
    execute(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null): any | null
    execute_async(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of execute_async

    /**
     * Promisified version of {@link execute_async}
     * 
     * 
     * @param g_type 
     * @param g_dup_func 
     * @param g_destroy_func 
     * @param func 
     * @param priority 
     * @param cancellable 
     * @param _callback_ 
     * @returns A Promise of the result of {@link execute_async}
     */
    execute_async(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<any | null>
    execute_finish(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, _res_: Gio.AsyncResult): any | null
    execute_background(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    execute_background_finish(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, _res_: Gio.AsyncResult): any | null

    // Own virtual methods of Bump-0.1.Bump.TaskQueue

    vfunc_spawn(max: number): number
    vfunc_add(task: GLib.SourceFunc, priority: number, cancellable?: Gio.Cancellable | null): void
    vfunc_process(wait: GLib.TimeSpan): boolean
    vfunc_execute(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null): any | null
    vfunc_execute_async(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_execute_finish(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, _res_: Gio.AsyncResult): any | null
    vfunc_execute_background(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    vfunc_execute_background_finish(g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, _res_: Gio.AsyncResult): any | null

    // Class property signals of Bump-0.1.Bump.TaskQueue

    connect(sigName: "notify::length", callback: (($obj: TaskQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::length", callback: (($obj: TaskQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TaskQueue extends GObject.Object {

    // Own properties of Bump-0.1.Bump.TaskQueue

    static name: string
    static $gtype: GObject.GType<TaskQueue>

    // Constructors of Bump-0.1.Bump.TaskQueue

    constructor(config?: TaskQueue.ConstructorProperties) 
    constructor() 
    static new(): TaskQueue
    _init(config?: TaskQueue.ConstructorProperties): void
    static get_global(): TaskQueue
}

interface AsyncPriorityQueueClass {
}

abstract class AsyncPriorityQueueClass {

    // Own properties of Bump-0.1.Bump.AsyncPriorityQueueClass

    static name: string
}

interface AsyncPriorityQueuePrivate {
}

class AsyncPriorityQueuePrivate {

    // Own properties of Bump-0.1.Bump.AsyncPriorityQueuePrivate

    static name: string
}

interface ClaimClass {

    // Own fields of Bump-0.1.Bump.ClaimClass

    release: () => void
    init: (cancellable?: Gio.Cancellable | null) => boolean
    init_async: (io_priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    init_finish: (_res_: Gio.AsyncResult) => boolean
}

abstract class ClaimClass {

    // Own properties of Bump-0.1.Bump.ClaimClass

    static name: string
}

interface ClaimPrivate {
}

class ClaimPrivate {

    // Own properties of Bump-0.1.Bump.ClaimPrivate

    static name: string
}

interface EventClass {
}

abstract class EventClass {

    // Own properties of Bump-0.1.Bump.EventClass

    static name: string
}

interface EventPrivate {
}

class EventPrivate {

    // Own properties of Bump-0.1.Bump.EventPrivate

    static name: string
}

interface FactoryClass {

    // Own fields of Bump-0.1.Bump.FactoryClass

    create: (priority: number, cancellable?: Gio.Cancellable | null) => any | null
    create_async: (priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    create_finish: (_res_: Gio.AsyncResult) => any | null
    create_background: (priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    create_background_finish: (_res_: Gio.AsyncResult) => any | null
    acquire: (priority: number, cancellable?: Gio.Cancellable | null) => any | null
    acquire_async: (priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    acquire_finish: (_res_: Gio.AsyncResult) => any | null
    acquire_background: (priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    acquire_background_finish: (_res_: Gio.AsyncResult) => any | null
}

abstract class FactoryClass {

    // Own properties of Bump-0.1.Bump.FactoryClass

    static name: string
}

interface FactoryPrivate {
}

class FactoryPrivate {

    // Own properties of Bump-0.1.Bump.FactoryPrivate

    static name: string
}

interface LazyClass {
}

abstract class LazyClass {

    // Own properties of Bump-0.1.Bump.LazyClass

    static name: string
}

interface LazyPrivate {
}

class LazyPrivate {

    // Own properties of Bump-0.1.Bump.LazyPrivate

    static name: string
}

interface ResourceClaimClass {
}

abstract class ResourceClaimClass {

    // Own properties of Bump-0.1.Bump.ResourceClaimClass

    static name: string
}

interface ResourceClaimPrivate {
}

class ResourceClaimPrivate {

    // Own properties of Bump-0.1.Bump.ResourceClaimPrivate

    static name: string
}

interface ResourcePoolClass {

    // Own fields of Bump-0.1.Bump.ResourcePoolClass

    release: (resource?: any | null) => void
}

abstract class ResourcePoolClass {

    // Own properties of Bump-0.1.Bump.ResourcePoolClass

    static name: string
}

interface ResourcePoolPrivate {
}

class ResourcePoolPrivate {

    // Own properties of Bump-0.1.Bump.ResourcePoolPrivate

    static name: string
}

interface SemaphoreClass {

    // Own fields of Bump-0.1.Bump.SemaphoreClass

    claim: (priority: number, cancellable?: Gio.Cancellable | null) => SemaphoreClaim
    claim_async: (priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    claim_finish: (_res_: Gio.AsyncResult) => SemaphoreClaim
}

abstract class SemaphoreClass {

    // Own properties of Bump-0.1.Bump.SemaphoreClass

    static name: string
}

interface SemaphorePrivate {
}

class SemaphorePrivate {

    // Own properties of Bump-0.1.Bump.SemaphorePrivate

    static name: string
}

interface SemaphoreClaimClass {
}

abstract class SemaphoreClaimClass {

    // Own properties of Bump-0.1.Bump.SemaphoreClaimClass

    static name: string
}

interface SemaphoreClaimPrivate {
}

class SemaphoreClaimPrivate {

    // Own properties of Bump-0.1.Bump.SemaphoreClaimPrivate

    static name: string
}

interface TaskQueueClass {

    // Own fields of Bump-0.1.Bump.TaskQueueClass

    spawn: (max: number) => number
    add: (task: GLib.SourceFunc, priority: number, cancellable?: Gio.Cancellable | null) => void
    process: (wait: GLib.TimeSpan) => boolean
    execute: (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null) => any | null
    execute_async: (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    execute_finish: (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, _res_: Gio.AsyncResult) => any | null
    execute_background: (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback | null) => void
    execute_background_finish: (g_type: GObject.GType, g_dup_func: GObject.BoxedCopyFunc, g_destroy_func: GLib.DestroyNotify, _res_: Gio.AsyncResult) => any | null
}

abstract class TaskQueueClass {

    // Own properties of Bump-0.1.Bump.TaskQueueClass

    static name: string
}

interface TaskQueuePrivate {
}

class TaskQueuePrivate {

    // Own properties of Bump-0.1.Bump.TaskQueuePrivate

    static name: string
}

interface QueueIface {

    // Own fields of Bump-0.1.Bump.QueueIface

    process: (wait: GLib.TimeSpan) => boolean
    get_length: () => number
}

abstract class QueueIface {

    // Own properties of Bump-0.1.Bump.QueueIface

    static name: string
}

interface ThreadingIface {

    // Own fields of Bump-0.1.Bump.ThreadingIface

    spawn: (max_new_threads: number) => number
}

abstract class ThreadingIface {

    // Own properties of Bump-0.1.Bump.ThreadingIface

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

export default Bump;
// END