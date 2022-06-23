// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Bump-0.1
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gee from './Gee-0.8';

export namespace Bump {

interface Callback {
    (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): object | null
}
interface Queue_ConstructProps extends GObject.Object_ConstructProps {
}

interface Queue extends GObject.Object {

    // Own properties of Bump-0.1.Bump.Queue

    readonly length: number

    // Owm methods of Bump-0.1.Bump.Queue

    process(wait: GLib.TimeSpan): boolean
    getLength(): number

    // Class property signals of Bump-0.1.Bump.Queue

    connect(sigName: "notify::length", callback: (...args: any[]) => void): number
    on(sigName: "notify::length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Queue {

    // Own properties of Bump-0.1.Bump.Queue

    static name: string
    static $gtype: GObject.GType<Queue>

    // Constructors of Bump-0.1.Bump.Queue

    constructor(config?: Queue_ConstructProps) 
    _init(config?: Queue_ConstructProps): void
}

interface Threading_ConstructProps extends GObject.Object_ConstructProps, Queue_ConstructProps {
}

interface Threading extends GObject.Object, Queue {

    // Owm methods of Bump-0.1.Bump.Threading

    getMaxThreads(): number
    setMaxThreads(value: number): void
    getMaxIdleTime(): GLib.TimeSpan
    setMaxIdleTime(value: GLib.TimeSpan): void
    getNumThreads(): number
    getIdleThreads(): number
    increaseMaxThreads(newMaxThreads: number): void
    runTask(func: GLib.SourceFunc): boolean
    spawn(maxNewThreads: number): number

    // Class property signals of Bump-0.1.Bump.Threading

    connect(sigName: "notify::length", callback: (...args: any[]) => void): number
    on(sigName: "notify::length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Threading {

    // Own properties of Bump-0.1.Bump.Threading

    static name: string
    static $gtype: GObject.GType<Threading>

    // Constructors of Bump-0.1.Bump.Threading

    constructor(config?: Threading_ConstructProps) 
    _init(config?: Threading_ConstructProps): void
}

interface AsyncPriorityQueue_ConstructProps extends Gee.PriorityQueue_ConstructProps {

    // Own constructor properties of Bump-0.1.Bump.AsyncPriorityQueue

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
    waitingThreads?: number | null
}

/**
 * Signal callback interface for `consumer-shortage`
 */
interface AsyncPriorityQueue_ConsumerShortageSignalCallback {
    (): void
}

interface AsyncPriorityQueue {

    // Own properties of Bump-0.1.Bump.AsyncPriorityQueue

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify
    waitingThreads: number

    // Owm methods of Bump-0.1.Bump.AsyncPriorityQueue

    pollTimed(wait: GLib.TimeSpan): object | null
    peekTimed(wait: GLib.TimeSpan): object | null
    offer(element?: object | null): boolean

    // Overloads of offer

    offer(element?: object | null): boolean
    offer(...args: any[]): any
    offer(args_or_element?: any[] | object | null): boolean | any
    getWaitingThreads(): number

    // Own signals of Bump-0.1.Bump.AsyncPriorityQueue

    connect(sigName: "consumer-shortage", callback: AsyncPriorityQueue_ConsumerShortageSignalCallback): number
    on(sigName: "consumer-shortage", callback: AsyncPriorityQueue_ConsumerShortageSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "consumer-shortage", callback: AsyncPriorityQueue_ConsumerShortageSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "consumer-shortage", callback: AsyncPriorityQueue_ConsumerShortageSignalCallback): NodeJS.EventEmitter
    emit(sigName: "consumer-shortage", ...args: any[]): void

    // Class property signals of Bump-0.1.Bump.AsyncPriorityQueue

    connect(sigName: "notify::g-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::waiting-threads", callback: (...args: any[]) => void): number
    on(sigName: "notify::waiting-threads", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::waiting-threads", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::waiting-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::waiting-threads", ...args: any[]): void
    connect(sigName: "notify::capacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capacity", ...args: any[]): void
    connect(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remaining-capacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remaining-capacity", ...args: any[]): void
    connect(sigName: "notify::is-full", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-full", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only-view", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only-view", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AsyncPriorityQueue extends Gee.PriorityQueue {

    // Own properties of Bump-0.1.Bump.AsyncPriorityQueue

    static name: string
    static $gtype: GObject.GType<AsyncPriorityQueue>

    // Constructors of Bump-0.1.Bump.AsyncPriorityQueue

    constructor(config?: AsyncPriorityQueue_ConstructProps) 
    constructor(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compareFunc: GLib.CompareDataFunc | null) 
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compareFunc: GLib.CompareDataFunc | null): AsyncPriorityQueue

    // Overloads of new

    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, compareFunc: GLib.CompareDataFunc | null): Gee.PriorityQueue
    _init(config?: AsyncPriorityQueue_ConstructProps): void
}

interface Claim_ConstructProps extends Gio.Initable_ConstructProps, Gio.AsyncInitable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Bump-0.1.Bump.Claim

    timeAcquired?: number | null
    timeReleased?: number | null
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
     */
    init(cancellable?: Gio.Cancellable | null): boolean
    init(...args: any[]): any
    init(args_or_cancellable?: any[] | Gio.Cancellable | null): boolean | any
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of initAsync

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
     * @param ioPriority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    initAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    initAsync(...args: any[]): any
    initAsync(args_or_ioPriority: any[] | number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    initFinish(res: Gio.AsyncResult): boolean
    getActive(): boolean
    getTimeAcquired(): number
    getTimeReleased(): number
    getDurationHeld(): GLib.TimeSpan

    // Class property signals of Bump-0.1.Bump.Claim

    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::time-acquired", callback: (...args: any[]) => void): number
    on(sigName: "notify::time-acquired", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::time-acquired", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::time-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::time-acquired", ...args: any[]): void
    connect(sigName: "notify::time-released", callback: (...args: any[]) => void): number
    on(sigName: "notify::time-released", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::time-released", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::time-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::time-released", ...args: any[]): void
    connect(sigName: "notify::duration-held", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration-held", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration-held", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration-held", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration-held", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Claim extends GObject.Object {

    // Own properties of Bump-0.1.Bump.Claim

    static name: string
    static $gtype: GObject.GType<Claim>

    // Constructors of Bump-0.1.Bump.Claim

    constructor(config?: Claim_ConstructProps) 
    constructor() 
    static new(): Claim
    _init(config?: Claim_ConstructProps): void
}

interface Event_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Bump-0.1.Bump.Event

    tType?: GObject.GType | null
    tDupFunc?: GObject.BoxedCopyFunc | null
    tDestroyFunc?: GLib.DestroyNotify | null
    pool?: TaskQueue | null
    autoReset?: boolean | null
    triggered?: boolean | null
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
    trigger(value?: object | null): void
    add(func: any, priority: number, cancellable?: Gio.Cancellable | null): void
    execute(rType: GObject.GType, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null): object | null
    executeAsync(rType: GObject.GType, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    executeFinish(rType: GObject.GType, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, res: Gio.AsyncResult): object | null
    executeBackground(rType: GObject.GType, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    executeBackgroundFinish(rType: GObject.GType, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, res: Gio.AsyncResult): object | null
    getPool(): TaskQueue
    getAutoReset(): boolean
    getTriggered(): boolean

    // Class property signals of Bump-0.1.Bump.Event

    connect(sigName: "notify::t-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::pool", callback: (...args: any[]) => void): number
    on(sigName: "notify::pool", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pool", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pool", ...args: any[]): void
    connect(sigName: "notify::auto-reset", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-reset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-reset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-reset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-reset", ...args: any[]): void
    connect(sigName: "notify::triggered", callback: (...args: any[]) => void): number
    on(sigName: "notify::triggered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::triggered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::triggered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::triggered", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Event extends GObject.Object {

    // Own properties of Bump-0.1.Bump.Event

    static name: string
    static $gtype: GObject.GType<Event>

    // Constructors of Bump-0.1.Bump.Event

    constructor(config?: Event_ConstructProps) 
    constructor(tType: GObject.GType, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify, autoReset: boolean) 
    static new(tType: GObject.GType, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify, autoReset: boolean): Event
    _init(config?: Event_ConstructProps): void
}

interface Factory_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Bump-0.1.Bump.Factory

    gType?: GObject.GType | null
    gDupFunc?: GObject.BoxedCopyFunc | null
    gDestroyFunc?: GLib.DestroyNotify | null
}

interface Factory {

    // Own properties of Bump-0.1.Bump.Factory

    readonly gType: GObject.GType
    readonly gDupFunc: GObject.BoxedCopyFunc
    readonly gDestroyFunc: GLib.DestroyNotify

    // Owm methods of Bump-0.1.Bump.Factory

    create(priority: number, cancellable?: Gio.Cancellable | null): object | null
    createAsync(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createFinish(res: Gio.AsyncResult): object | null
    createBackground(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    createBackgroundFinish(res: Gio.AsyncResult): object | null
    acquire(priority: number, cancellable?: Gio.Cancellable | null): object | null
    acquireAsync(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    acquireFinish(res: Gio.AsyncResult): object | null
    acquireBackground(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    acquireBackgroundFinish(res: Gio.AsyncResult): object | null
    getConstructProperties(): GObject.Parameter[] | null
    setConstructProperties(value: GObject.Parameter[] | null): void

    // Class property signals of Bump-0.1.Bump.Factory

    connect(sigName: "notify::g-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Factory extends GObject.Object {

    // Own properties of Bump-0.1.Bump.Factory

    static name: string
    static $gtype: GObject.GType<Factory>

    // Constructors of Bump-0.1.Bump.Factory

    constructor(config?: Factory_ConstructProps) 
    _init(config?: Factory_ConstructProps): void
}

interface Lazy_ConstructProps extends Factory_ConstructProps {

    // Own constructor properties of Bump-0.1.Bump.Lazy

    tType?: GObject.GType | null
    tDupFunc?: GObject.BoxedCopyFunc | null
    tDestroyFunc?: GLib.DestroyNotify | null
    pool?: TaskQueue | null
}

interface Lazy {

    // Own properties of Bump-0.1.Bump.Lazy

    readonly tType: GObject.GType
    readonly tDupFunc: GObject.BoxedCopyFunc
    readonly tDestroyFunc: GLib.DestroyNotify
    readonly pool: TaskQueue
    readonly value: object
    readonly isInitialized: boolean

    // Owm methods of Bump-0.1.Bump.Lazy

    getPool(): TaskQueue
    getValue(): object | null
    getIsInitialized(): boolean

    // Class property signals of Bump-0.1.Bump.Lazy

    connect(sigName: "notify::t-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::pool", callback: (...args: any[]) => void): number
    on(sigName: "notify::pool", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pool", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pool", ...args: any[]): void
    connect(sigName: "notify::value", callback: (...args: any[]) => void): number
    on(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::value", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::value", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::is-initialized", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-initialized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-initialized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-initialized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-initialized", ...args: any[]): void
    connect(sigName: "notify::g-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Lazy extends Factory {

    // Own properties of Bump-0.1.Bump.Lazy

    static name: string
    static $gtype: GObject.GType<Lazy>

    // Constructors of Bump-0.1.Bump.Lazy

    constructor(config?: Lazy_ConstructProps) 
    constructor(tType: GObject.GType, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify) 
    static new(tType: GObject.GType, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify): Lazy
    _init(config?: Lazy_ConstructProps): void
}

interface ResourceClaim_ConstructProps extends Claim_ConstructProps {

    // Own constructor properties of Bump-0.1.Bump.ResourceClaim

    tType?: GObject.GType | null
    tDupFunc?: GObject.BoxedCopyFunc | null
    tDestroyFunc?: GLib.DestroyNotify | null
    pool?: ResourcePool | null
}

interface ResourceClaim {

    // Own properties of Bump-0.1.Bump.ResourceClaim

    readonly tType: GObject.GType
    readonly tDupFunc: GObject.BoxedCopyFunc
    readonly tDestroyFunc: GLib.DestroyNotify
    readonly pool: ResourcePool
    readonly resource: object

    // Owm methods of Bump-0.1.Bump.ResourceClaim

    getPool(): ResourcePool
    getResource(): object | null

    // Class property signals of Bump-0.1.Bump.ResourceClaim

    connect(sigName: "notify::t-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::pool", callback: (...args: any[]) => void): number
    on(sigName: "notify::pool", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pool", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pool", ...args: any[]): void
    connect(sigName: "notify::resource", callback: (...args: any[]) => void): number
    on(sigName: "notify::resource", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resource", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resource", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resource", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::time-acquired", callback: (...args: any[]) => void): number
    on(sigName: "notify::time-acquired", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::time-acquired", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::time-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::time-acquired", ...args: any[]): void
    connect(sigName: "notify::time-released", callback: (...args: any[]) => void): number
    on(sigName: "notify::time-released", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::time-released", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::time-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::time-released", ...args: any[]): void
    connect(sigName: "notify::duration-held", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration-held", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration-held", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration-held", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration-held", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ResourceClaim extends Claim {

    // Own properties of Bump-0.1.Bump.ResourceClaim

    static name: string
    static $gtype: GObject.GType<ResourceClaim>

    // Constructors of Bump-0.1.Bump.ResourceClaim

    constructor(config?: ResourceClaim_ConstructProps) 
    constructor(tType: GObject.GType, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify, pool: ResourcePool) 
    static new(tType: GObject.GType, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify, pool: ResourcePool): ResourceClaim

    // Overloads of new

    static new(): Claim
    _init(config?: ResourceClaim_ConstructProps): void
}

interface ResourcePool_ConstructProps extends Factory_ConstructProps {

    // Own constructor properties of Bump-0.1.Bump.ResourcePool

    tType?: GObject.GType | null
    tDupFunc?: GObject.BoxedCopyFunc | null
    tDestroyFunc?: GLib.DestroyNotify | null
    maxResources?: number | null
    maxIdleTime?: GLib.TimeSpan | null
    numResources?: number | null
    pool?: TaskQueue | null
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

    release(resource?: object | null): void
    execute(rType: GObject.GType, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null): object | null
    executeAsync(rType: GObject.GType, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    executeFinish(rType: GObject.GType, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, res: Gio.AsyncResult): object | null
    executeBackground(rType: GObject.GType, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, func: any, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    executeBackgroundFinish(rType: GObject.GType, rDupFunc: GObject.BoxedCopyFunc, rDestroyFunc: GLib.DestroyNotify, res: Gio.AsyncResult): object | null
    claim(priority: number, cancellable?: Gio.Cancellable | null): ResourceClaim
    claimAsync(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    claimFinish(res: Gio.AsyncResult): ResourceClaim
    getMaxResources(): number
    getMaxIdleTime(): GLib.TimeSpan
    setMaxIdleTime(value: GLib.TimeSpan): void
    getNumResources(): number
    getIdleResources(): number
    getActiveResources(): number
    getPool(): TaskQueue

    // Class property signals of Bump-0.1.Bump.ResourcePool

    connect(sigName: "notify::t-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::t-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::max-resources", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-resources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-resources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-resources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-resources", ...args: any[]): void
    connect(sigName: "notify::max-idle-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-idle-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-idle-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-idle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-idle-time", ...args: any[]): void
    connect(sigName: "notify::num-resources", callback: (...args: any[]) => void): number
    on(sigName: "notify::num-resources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::num-resources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::num-resources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::num-resources", ...args: any[]): void
    connect(sigName: "notify::idle-resources", callback: (...args: any[]) => void): number
    on(sigName: "notify::idle-resources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::idle-resources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::idle-resources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::idle-resources", ...args: any[]): void
    connect(sigName: "notify::active-resources", callback: (...args: any[]) => void): number
    on(sigName: "notify::active-resources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active-resources", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active-resources", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active-resources", ...args: any[]): void
    connect(sigName: "notify::pool", callback: (...args: any[]) => void): number
    on(sigName: "notify::pool", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pool", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pool", ...args: any[]): void
    connect(sigName: "notify::g-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-dup-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-dup-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-destroy-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ResourcePool extends Factory {

    // Own properties of Bump-0.1.Bump.ResourcePool

    static name: string
    static $gtype: GObject.GType<ResourcePool>

    // Constructors of Bump-0.1.Bump.ResourcePool

    constructor(config?: ResourcePool_ConstructProps) 
    constructor(tType: GObject.GType, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify, maxResources: number) 
    static new(tType: GObject.GType, tDupFunc: GObject.BoxedCopyFunc, tDestroyFunc: GLib.DestroyNotify, maxResources: number): ResourcePool
    _init(config?: ResourcePool_ConstructProps): void
}

interface Semaphore_ConstructProps extends TaskQueue_ConstructProps {

    // Own constructor properties of Bump-0.1.Bump.Semaphore

    maxClaims?: number | null
    claims?: number | null
    pool?: TaskQueue | null
}

interface Semaphore {

    // Own properties of Bump-0.1.Bump.Semaphore

    readonly maxClaims: number
    claims: number
    readonly pool: TaskQueue

    // Owm methods of Bump-0.1.Bump.Semaphore

    unlock(): void
    lock(priority: number, cancellable?: Gio.Cancellable | null): void
    lockAsync(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    lockFinish(res: Gio.AsyncResult): void
    claim(priority: number, cancellable?: Gio.Cancellable | null): SemaphoreClaim
    claimAsync(priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    claimFinish(res: Gio.AsyncResult): SemaphoreClaim
    getMaxClaims(): number
    getClaims(): number
    getPool(): TaskQueue

    // Class property signals of Bump-0.1.Bump.Semaphore

    connect(sigName: "notify::max-claims", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-claims", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-claims", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-claims", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-claims", ...args: any[]): void
    connect(sigName: "notify::claims", callback: (...args: any[]) => void): number
    on(sigName: "notify::claims", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::claims", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::claims", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::claims", ...args: any[]): void
    connect(sigName: "notify::pool", callback: (...args: any[]) => void): number
    on(sigName: "notify::pool", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pool", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pool", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Semaphore extends TaskQueue {

    // Own properties of Bump-0.1.Bump.Semaphore

    static name: string
    static $gtype: GObject.GType<Semaphore>

    // Constructors of Bump-0.1.Bump.Semaphore

    constructor(config?: Semaphore_ConstructProps) 
    constructor(maxClaims: number) 
    static new(maxClaims: number): Semaphore

    // Overloads of new

    static new(): TaskQueue
    _init(config?: Semaphore_ConstructProps): void
}

interface SemaphoreClaim_ConstructProps extends Claim_ConstructProps {

    // Own constructor properties of Bump-0.1.Bump.SemaphoreClaim

    semaphore?: Semaphore | null
}

interface SemaphoreClaim {

    // Own properties of Bump-0.1.Bump.SemaphoreClaim

    readonly semaphore: Semaphore

    // Owm methods of Bump-0.1.Bump.SemaphoreClaim

    getSemaphore(): Semaphore

    // Class property signals of Bump-0.1.Bump.SemaphoreClaim

    connect(sigName: "notify::semaphore", callback: (...args: any[]) => void): number
    on(sigName: "notify::semaphore", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::semaphore", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::semaphore", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::semaphore", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::time-acquired", callback: (...args: any[]) => void): number
    on(sigName: "notify::time-acquired", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::time-acquired", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::time-acquired", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::time-acquired", ...args: any[]): void
    connect(sigName: "notify::time-released", callback: (...args: any[]) => void): number
    on(sigName: "notify::time-released", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::time-released", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::time-released", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::time-released", ...args: any[]): void
    connect(sigName: "notify::duration-held", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration-held", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration-held", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration-held", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration-held", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class SemaphoreClaim extends Claim {

    // Own properties of Bump-0.1.Bump.SemaphoreClaim

    static name: string
    static $gtype: GObject.GType<SemaphoreClaim>

    // Constructors of Bump-0.1.Bump.SemaphoreClaim

    constructor(config?: SemaphoreClaim_ConstructProps) 
    _init(config?: SemaphoreClaim_ConstructProps): void
}

interface TaskQueue_ConstructProps extends Queue_ConstructProps, Threading_ConstructProps, GObject.Object_ConstructProps {
}

interface TaskQueue extends Queue, Threading {

    // Owm methods of Bump-0.1.Bump.TaskQueue

    spawn(max: number): number
    add(task: GLib.SourceFunc, priority: number, cancellable?: Gio.Cancellable | null): void
    process(wait: GLib.TimeSpan): boolean
    execute(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null): object | null
    executeAsync(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    executeFinish(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, res: Gio.AsyncResult): object | null
    executeBackground(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    executeBackgroundFinish(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, res: Gio.AsyncResult): object | null

    // Class property signals of Bump-0.1.Bump.TaskQueue

    connect(sigName: "notify::length", callback: (...args: any[]) => void): number
    on(sigName: "notify::length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::length", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::length", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class TaskQueue extends GObject.Object {

    // Own properties of Bump-0.1.Bump.TaskQueue

    static name: string
    static $gtype: GObject.GType<TaskQueue>

    // Constructors of Bump-0.1.Bump.TaskQueue

    constructor(config?: TaskQueue_ConstructProps) 
    constructor() 
    static new(): TaskQueue
    _init(config?: TaskQueue_ConstructProps): void
    static getGlobal(): TaskQueue
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
    initAsync: (ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    initFinish: (res: Gio.AsyncResult) => boolean
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

    create: (priority: number, cancellable?: Gio.Cancellable | null) => object | null
    createAsync: (priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    createFinish: (res: Gio.AsyncResult) => object | null
    createBackground: (priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    createBackgroundFinish: (res: Gio.AsyncResult) => object | null
    acquire: (priority: number, cancellable?: Gio.Cancellable | null) => object | null
    acquireAsync: (priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    acquireFinish: (res: Gio.AsyncResult) => object | null
    acquireBackground: (priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    acquireBackgroundFinish: (res: Gio.AsyncResult) => object | null
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

    release: (resource?: object | null) => void
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
    claimAsync: (priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    claimFinish: (res: Gio.AsyncResult) => SemaphoreClaim
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
    execute: (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null) => object | null
    executeAsync: (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    executeFinish: (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, res: Gio.AsyncResult) => object | null
    executeBackground: (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, func: Callback, priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    executeBackgroundFinish: (gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, res: Gio.AsyncResult) => object | null
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
    getLength: () => number
}

abstract class QueueIface {

    // Own properties of Bump-0.1.Bump.QueueIface

    static name: string
}

interface ThreadingIface {

    // Own fields of Bump-0.1.Bump.ThreadingIface

    spawn: (maxNewThreads: number) => number
}

abstract class ThreadingIface {

    // Own properties of Bump-0.1.Bump.ThreadingIface

    static name: string
}

}
export default Bump;