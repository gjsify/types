
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * GstBase-0.10
 */

import type libxml2 from '@girs/libxml2-2.0';
import type Gst from '@girs/gst-0.10';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

/**
 * The #GstElement flags that a basesrc element may have.
 * @bitfield 
 */
export enum SrcFlags {
    STARTED,
    FLAG_LAST,
}
export const TRANSFORM_SINK_NAME: string
export const TRANSFORM_SRC_NAME: string
export function gstTypeFindHelper(src: Gst.Pad, size: number): Gst.Caps
export function gstTypeFindHelperForBuffer(obj: Gst.Object, buf: Gst.Buffer, prob: Gst.TypeFindProbability): Gst.Caps
export function gstTypeFindHelperForExtension(obj: Gst.Object, extension: string | null): Gst.Caps
export function gstTypeFindHelperGetRange(obj: Gst.Object, func: Gst.TypeFindHelperGetRangeFunction, size: number, prob: Gst.TypeFindProbability): Gst.Caps
export function gstTypeFindHelperGetRangeExt(obj: Gst.Object, func: Gst.TypeFindHelperGetRangeFunction, size: number, extension: string | null, prob: Gst.TypeFindProbability): Gst.Caps
/**
 * A function that will be called when the #GstCollectData will be freed.
 * It is passed the pointer to the structure and should free any custom
 * memory and resources allocated for it.
 * @callback 
 * @param data the #GstCollectData that will be freed
 */
export interface GstCollectDataDestroyNotify {
    (data: Gst.CollectData): void
}
/**
 * A function that will be called when `buffer` is received on the pad managed
 * by `data` in the collecpad object `pads`.
 * The function should use the segment of `data` and the negotiated media type on
 * the pad to perform clipping of `buffer`. 
 * This function takes ownership of `buffer`.
 * the buffer has been clipped completely.
 * @callback 
 * @param pads a #GstCollectPads
 * @param data a #GstCollectData
 * @param buffer a #GstBuffer
 * @returns a #GstBuffer that contains the clipped data of @buffer or NULL when
 */
export interface GstCollectPadsClipFunction {
    (pads: Gst.CollectPads, data: Gst.CollectData, buffer: Gst.Buffer): Gst.Buffer
}
/**
 * A function that will be called when all pads have received data.
 * @callback 
 * @param pads the #GstCollectPads that triggered the callback
 * @returns #GST_FLOW_OK for success
 */
export interface GstCollectPadsFunction {
    (pads: Gst.CollectPads): Gst.FlowReturn
}
/**
 * The prototype of the function used to inform the queue that it should be
 * considered as full.
 * @callback 
 * @param queue a #GstDataQueue.
 * @param visible The number of visible items currently in the queue.
 * @param bytes The amount of bytes currently in the queue.
 * @param time The accumulated duration of the items currently in the queue.
 * @param checkdata The #gpointer registered when the #GstDataQueue was created.
 * @returns #TRUE if the queue should be considered full.
 */
export interface GstDataQueueCheckFullFunction {
    (queue: Gst.DataQueue, visible: number, bytes: number, time: number, checkdata: any): boolean
}
export interface GstDataQueueEmptyCallback {
    (queue: Gst.DataQueue, checkdata: any): void
}
export interface GstDataQueueFullCallback {
    (queue: Gst.DataQueue, checkdata: any): void
}
/**
 * This function will be called by gst_type_find_helper_get_range() when
 * typefinding functions request to peek at the data of a stream at certain
 * offsets. If this function returns GST_FLOW_OK, the result buffer will be
 * stored in `buffer`. The  contents of `buffer` is invalid for any other
 * return value.
 * This function is supposed to behave exactly like a #GstPadGetRangeFunction.
 * @callback 
 * @param obj a #GstObject that will handle the getrange request
 * @param offset the offset of the range
 * @param length the length of the range
 * @param buffer a memory location to hold the result buffer
 * @returns GST_FLOW_OK for success
 */
export interface GstTypeFindHelperGetRangeFunction {
    (obj: Gst.Object, offset: number, length: number, buffer: Gst.Buffer): Gst.FlowReturn
}
// Workaround
/** @ignore */
export module BaseSink {
    export type ConstructorProperties = Gst.BaseSink.ConstructorProperties;
}

export module GstAdapter {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface GstAdapter {

    // Own properties of GstBase-0.10.GstBase.GstAdapter

    __gtype__: number

    // Own fields of GstBase-0.10.GstBase.GstAdapter

    object: GObject.Object
    buflist: any[]
    size: number
    skip: number
    assembledData: any
    assembledSize: number
    assembledLen: number
    buflistEnd: any[]
    priv: Gst.AdapterPrivate
    gstReserved: any[]

    // Owm methods of GstBase-0.10.GstBase.GstAdapter

    clear(): void
    push(buf: Gst.Buffer): void
    peek(size: number): number[]
    copy(dest: number[], offset: number, size: number): void
    flush(flush: number): void
    take(nbytes: number): number[]
    takeBuffer(nbytes: number): Gst.Buffer
    available(): number
    availableFast(): number
    prevTimestamp(): [ /* returnType */ Gst.ClockTime, /* distance */ number ]
    maskedScanUint32(mask: number, pattern: number, offset: number, size: number): number
    maskedScanUint32Peek(mask: number, pattern: number, offset: number, size: number): [ /* returnType */ number, /* value */ number ]

    // Class property signals of GstBase-0.10.GstBase.GstAdapter

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
}

/**
 * The opaque #GstAdapter data structure.
 * @class 
 */
export class GstAdapter extends GObject.Object {

    // Own properties of GstBase-0.10.GstBase.GstAdapter

    static name: string

    // Constructors of GstBase-0.10.GstBase.GstAdapter

    constructor(config?: GstAdapter.ConstructorProperties) 
    constructor() 
    static new(): GstAdapter
    _init(config?: GstAdapter.ConstructorProperties): void
}

export module GstCollectPads {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
    }

}

export interface GstCollectPads {

    // Own properties of GstBase-0.10.GstBase.GstCollectPads

    __gtype__: number

    // Own fields of GstBase-0.10.GstBase.GstCollectPads

    object: any
    data: any[]
    cookie: number
    cond: GLib.Cond
    func: Gst.CollectPadsFunction
    userData: any
    numpads: number
    queuedpads: number
    eospads: number
    started: boolean

    // Owm methods of GstBase-0.10.GstBase.GstCollectPads

    setFunction(func: Gst.CollectPadsFunction, userData: any): void
    setClipFunction(clipfunc: Gst.CollectPadsClipFunction, userData: any): void
    addPad(pad: Gst.Pad, size: number): Gst.CollectData
    addPadFull(pad: Gst.Pad, size: number, destroyNotify: Gst.CollectDataDestroyNotify): Gst.CollectData
    removePad(pad: Gst.Pad): boolean
    isActive(pad: Gst.Pad): boolean
    collect(): Gst.FlowReturn
    collectRange(offset: number, length: number): Gst.FlowReturn
    start(): void
    stop(): void
    setFlushing(flushing: boolean): void
    peek(data: Gst.CollectData): Gst.Buffer
    pop(data: Gst.CollectData): Gst.Buffer
    available(): number
    read(data: Gst.CollectData, size: number): [ /* returnType */ number, /* bytes */ number ]
    readBuffer(data: Gst.CollectData, size: number): Gst.Buffer
    takeBuffer(data: Gst.CollectData, size: number): Gst.Buffer
    flush(data: Gst.CollectData, size: number): number

    // Class property signals of GstBase-0.10.GstBase.GstCollectPads

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
}

/**
 * Collectpads object.
 * Note that `data` doesn't contain the complete #GstCollectData list
 * at all times and should not be used for iterating them.
 * @class 
 */
export class GstCollectPads extends Gst.Object {

    // Own properties of GstBase-0.10.GstBase.GstCollectPads

    static name: string

    // Constructors of GstBase-0.10.GstBase.GstCollectPads

    constructor(config?: GstCollectPads.ConstructorProperties) 
    constructor() 
    static new(): GstCollectPads
    _init(config?: GstCollectPads.ConstructorProperties): void
}

export module GstDataQueue {

    // Signal callback interfaces

    /**
     * Signal callback interface for `empty`
     */
    export interface EmptySignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `full`
     */
    export interface FullSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface GstDataQueue {

    // Own properties of GstBase-0.10.GstBase.GstDataQueue

    readonly currentLevelBytes: number
    readonly currentLevelTime: number
    readonly currentLevelVisible: number
    __gtype__: number

    // Own fields of GstBase-0.10.GstBase.GstDataQueue

    object: GObject.Object
    queue: GLib.Queue
    curLevel: Gst.DataQueueSize
    checkfull: Gst.DataQueueCheckFullFunction
    checkdata: any
    qlock: GLib.Mutex
    itemAdd: GLib.Cond
    itemDel: GLib.Cond
    flushing: boolean
    fullcallback: Gst.DataQueueFullCallback
    emptycallback: Gst.DataQueueEmptyCallback
    gstReserved: any[]

    // Owm methods of GstBase-0.10.GstBase.GstDataQueue

    push(item: Gst.DataQueueItem): boolean
    pop(item: Gst.DataQueueItem): boolean
    flush(): void
    setFlushing(flushing: boolean): void
    dropHead(type: GObject.GType): boolean
    isFull(): boolean
    isEmpty(): boolean
    getLevel(level: Gst.DataQueueSize): void
    limitsChanged(): void

    // Own signals of GstBase-0.10.GstBase.GstDataQueue

    connect(sigName: "empty", callback: GstDataQueue.EmptySignalCallback): number
    on(sigName: "empty", callback: GstDataQueue.EmptySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "empty", callback: GstDataQueue.EmptySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "empty", callback: GstDataQueue.EmptySignalCallback): NodeJS.EventEmitter
    emit(sigName: "empty", ...args: any[]): void
    connect(sigName: "full", callback: GstDataQueue.FullSignalCallback): number
    on(sigName: "full", callback: GstDataQueue.FullSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "full", callback: GstDataQueue.FullSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "full", callback: GstDataQueue.FullSignalCallback): NodeJS.EventEmitter
    emit(sigName: "full", ...args: any[]): void

    // Class property signals of GstBase-0.10.GstBase.GstDataQueue

    connect(sigName: "notify::current-level-bytes", callback: (...args: any[]) => void): number
    on(sigName: "notify::current-level-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::current-level-bytes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::current-level-bytes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::current-level-bytes", ...args: any[]): void
    connect(sigName: "notify::current-level-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::current-level-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::current-level-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::current-level-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::current-level-time", ...args: any[]): void
    connect(sigName: "notify::current-level-visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::current-level-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::current-level-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::current-level-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::current-level-visible", ...args: any[]): void
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
}

/**
 * Opaque #GstDataQueue structure.
 * @class 
 */
export class GstDataQueue extends GObject.Object {

    // Own properties of GstBase-0.10.GstBase.GstDataQueue

    static name: string

    // Constructors of GstBase-0.10.GstBase.GstDataQueue

    constructor(config?: GstDataQueue.ConstructorProperties) 
    constructor(checkfull: Gst.DataQueueCheckFullFunction) 
    static new(checkfull: Gst.DataQueueCheckFullFunction): GstDataQueue
    static newFull(checkfull: Gst.DataQueueCheckFullFunction, fullcallback: Gst.DataQueueFullCallback, emptycallback: Gst.DataQueueEmptyCallback): GstDataQueue
    _init(config?: GstDataQueue.ConstructorProperties): void
}

export module GstPushSrc {

    // Constructor properties interface

    export interface ConstructorProperties extends Src.ConstructorProperties {
    }

}

export interface GstPushSrc {

    // Own properties of GstBase-0.10.GstBase.GstPushSrc

    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstBase-0.10.GstBase.GstPushSrc

    parent: Gst.BaseSrc & Gst.Object
    gstReserved: any

    // Class property signals of GstBase-0.10.GstBase.GstPushSrc

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): number
    on(sigName: "notify::do-timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::do-timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::do-timestamp", ...args: any[]): void
    connect(sigName: "notify::typefind", callback: (...args: any[]) => void): number
    on(sigName: "notify::typefind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::typefind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::typefind", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The opaque #GstPushSrc data structure.
 * @class 
 */
export class GstPushSrc extends Src {

    // Own properties of GstBase-0.10.GstBase.GstPushSrc

    static name: string

    // Constructors of GstBase-0.10.GstBase.GstPushSrc

    constructor(config?: GstPushSrc.ConstructorProperties) 
    _init(config?: GstPushSrc.ConstructorProperties): void
}

export module Sink {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Element.ConstructorProperties {

        // Own constructor properties of GstBase-0.10.GstBase.Sink

        async?: boolean | null
        blocksize?: number | null
        enableLastBuffer?: boolean | null
        maxLateness?: number | null
        prerollQueueLen?: number | null
        qos?: boolean | null
        renderDelay?: number | null
        sync?: boolean | null
        tsOffset?: number | null
    }

}

export interface Sink {

    // Own properties of GstBase-0.10.GstBase.Sink

    async: boolean
    blocksize: number
    enableLastBuffer: boolean
    readonly lastBuffer: Gst.Buffer
    maxLateness: number
    prerollQueueLen: number
    qos: boolean
    renderDelay: number
    tsOffset: number
    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstBase-0.10.GstBase.Sink

    element: Gst.Element
    sinkpad: Gst.Pad
    padMode: Gst.ActivateMode
    offset: number
    canActivatePull: boolean
    canActivatePush: boolean
    prerollQueue: GLib.Queue
    prerollQueueMaxLen: number
    prerollQueued: number
    buffersQueued: number
    eventsQueued: number
    eos: boolean
    eosQueued: boolean
    needPreroll: boolean
    havePreroll: boolean
    playingAsync: boolean
    haveNewsegment: boolean
    segment: Gst.Segment
    clockId: Gst.ClockID
    endTime: Gst.ClockTime
    sync: boolean
    flushing: boolean
    priv: Gst.BaseSinkPrivate

    // Owm methods of GstBase-0.10.GstBase.Sink

    doPreroll(obj: Gst.MiniObject): Gst.FlowReturn
    waitPreroll(): Gst.FlowReturn
    setSync(sync: boolean): void
    getSync(): boolean
    setMaxLateness(maxLateness: number): void
    getMaxLateness(): number
    setQosEnabled(enabled: boolean): void
    isQosEnabled(): boolean
    setAsyncEnabled(enabled: boolean): void
    isAsyncEnabled(): boolean
    setTsOffset(offset: Gst.ClockTimeDiff): void
    getTsOffset(): Gst.ClockTimeDiff
    getLastBuffer(): Gst.Buffer
    setLastBufferEnabled(enable: boolean): void
    isLastBufferEnabled(): boolean
    queryLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): [ /* returnType */ boolean, /* live */ boolean, /* upstreamLive */ boolean ]
    getLatency(): Gst.ClockTime
    setRenderDelay(delay: Gst.ClockTime): void
    getRenderDelay(): Gst.ClockTime
    setBlocksize(blocksize: number): void
    getBlocksize(): number
    waitClock(time: Gst.ClockTime, jitter: Gst.ClockTimeDiff): Gst.ClockReturn
    waitEos(time: Gst.ClockTime, jitter: Gst.ClockTimeDiff): Gst.FlowReturn

    // Class property signals of GstBase-0.10.GstBase.Sink

    connect(sigName: "notify::async", callback: (...args: any[]) => void): number
    on(sigName: "notify::async", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::async", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::async", ...args: any[]): void
    connect(sigName: "notify::blocksize", callback: (...args: any[]) => void): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::blocksize", ...args: any[]): void
    connect(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-last-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-last-buffer", ...args: any[]): void
    connect(sigName: "notify::last-buffer", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-buffer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-buffer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-buffer", ...args: any[]): void
    connect(sigName: "notify::max-lateness", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-lateness", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-lateness", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-lateness", ...args: any[]): void
    connect(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void): number
    on(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::preroll-queue-len", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::preroll-queue-len", ...args: any[]): void
    connect(sigName: "notify::qos", callback: (...args: any[]) => void): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: "notify::render-delay", callback: (...args: any[]) => void): number
    on(sigName: "notify::render-delay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::render-delay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::render-delay", ...args: any[]): void
    connect(sigName: "notify::ts-offset", callback: (...args: any[]) => void): number
    on(sigName: "notify::ts-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ts-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ts-offset", ...args: any[]): void
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
}

/**
 * The opaque #GstBaseSink data structure.
 * @class 
 */
export class Sink extends Gst.Element {

    // Own properties of GstBase-0.10.GstBase.Sink

    static name: string

    // Constructors of GstBase-0.10.GstBase.Sink

    constructor(config?: Sink.ConstructorProperties) 
    _init(config?: Sink.ConstructorProperties): void
}

export module Src {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Element.ConstructorProperties {

        // Own constructor properties of GstBase-0.10.GstBase.Src

        blocksize?: number | null
        doTimestamp?: boolean | null
        numBuffers?: number | null
        typefind?: boolean | null
    }

}

export interface Src {

    // Own properties of GstBase-0.10.GstBase.Src

    doTimestamp: boolean
    typefind: boolean
    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstBase-0.10.GstBase.Src

    element: Gst.Element
    srcpad: Gst.Pad
    liveLock: GLib.Mutex
    liveCond: GLib.Cond
    isLive: boolean
    liveRunning: boolean
    blocksize: number
    canActivatePush: boolean
    padMode: Gst.ActivateMode
    seekable: boolean
    randomAccess: boolean
    clockId: Gst.ClockID
    endTime: Gst.ClockTime
    segment: Gst.Segment
    needNewsegment: boolean
    offset: number
    size: number
    numBuffers: number
    numBuffersLeft: number
    priv: Gst.BaseSrcPrivate

    // Owm methods of GstBase-0.10.GstBase.Src

    waitPlaying(): Gst.FlowReturn
    setLive(live: boolean): void
    setFormat(format: Gst.Format): void
    queryLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): [ /* returnType */ boolean, /* live */ boolean ]
    setBlocksize(blocksize: number): void
    getBlocksize(): number
    setDoTimestamp(timestamp: boolean): void
    getDoTimestamp(): boolean
    newSeamlessSegment(start: number, stop: number, position: number): boolean

    // Class property signals of GstBase-0.10.GstBase.Src

    connect(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): number
    on(sigName: "notify::do-timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::do-timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::do-timestamp", ...args: any[]): void
    connect(sigName: "notify::typefind", callback: (...args: any[]) => void): number
    on(sigName: "notify::typefind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::typefind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::typefind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::typefind", ...args: any[]): void
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
}

/**
 * The opaque #GstBaseSrc data structure.
 * @class 
 */
export class Src extends Gst.Element {

    // Own properties of GstBase-0.10.GstBase.Src

    static name: string

    // Constructors of GstBase-0.10.GstBase.Src

    constructor(config?: Src.ConstructorProperties) 
    _init(config?: Src.ConstructorProperties): void
}

export module Transform {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Element.ConstructorProperties {

        // Own constructor properties of GstBase-0.10.GstBase.Transform

        qos?: boolean | null
    }

}

export interface Transform {

    // Own properties of GstBase-0.10.GstBase.Transform

    qos: boolean
    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstBase-0.10.GstBase.Transform

    element: Gst.Element
    sinkpad: Gst.Pad
    srcpad: Gst.Pad
    passthrough: boolean
    alwaysInPlace: boolean
    cacheCaps1: Gst.Caps
    cacheCaps1Size: number
    cacheCaps2: Gst.Caps
    cacheCaps2Size: number
    haveSameCaps: boolean
    delayConfigure: boolean
    pendingConfigure: boolean
    negotiated: boolean
    haveNewsegment: boolean
    segment: Gst.Segment
    transformLock: GLib.Mutex
    priv: Gst.BaseTransformPrivate
    gstReserved: any

    // Owm methods of GstBase-0.10.GstBase.Transform

    setPassthrough(passthrough: boolean): void
    isPassthrough(): boolean
    setInPlace(inPlace: boolean): void
    isInPlace(): boolean
    updateQos(proportion: number, diff: Gst.ClockTimeDiff, timestamp: Gst.ClockTime): void
    setQosEnabled(enabled: boolean): void
    isQosEnabled(): boolean
    setGapAware(gapAware: boolean): void
    suggest(caps: Gst.Caps, size: number): void
    reconfigure(): void

    // Class property signals of GstBase-0.10.GstBase.Transform

    connect(sigName: "notify::qos", callback: (...args: any[]) => void): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::qos", ...args: any[]): void
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
}

/**
 * The opaque #GstBaseTransform data structure.
 * @class 
 */
export class Transform extends Gst.Element {

    // Own properties of GstBase-0.10.GstBase.Transform

    static name: string

    // Constructors of GstBase-0.10.GstBase.Transform

    constructor(config?: Transform.ConstructorProperties) 
    _init(config?: Transform.ConstructorProperties): void
}

export interface GstAdapterClass {

    // Own fields of GstBase-0.10.GstBase.GstAdapterClass

    parentClass: GObject.ObjectClass
    gstReserved: any[]
}

export abstract class GstAdapterClass {

    // Own properties of GstBase-0.10.GstBase.GstAdapterClass

    static name: string
}

export interface GstAdapterPrivate {
}

export class GstAdapterPrivate {

    // Own properties of GstBase-0.10.GstBase.GstAdapterPrivate

    static name: string
}

export interface GstBitReader {

    // Own fields of GstBase-0.10.GstBase.GstBitReader

    data: any
    size: number
    byte: number
    bit: number

    // Owm methods of GstBase-0.10.GstBase.GstBitReader

    free(): void
    init(data: number[], size: number): void
    initFromBuffer(buffer: Gst.Buffer): void
    setPos(pos: number): boolean
    getPos(): number
    getRemaining(): number
    getSize(): number
    skip(nbits: number): boolean
    skipToByte(): boolean
    getBitsUint8(val: number[], nbits: number): boolean
    getBitsUint16(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    getBitsUint32(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    getBitsUint64(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    peekBitsUint8(val: number[], nbits: number): boolean
    peekBitsUint16(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    peekBitsUint32(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    peekBitsUint64(nbits: number): [ /* returnType */ boolean, /* val */ number ]
}

/**
 * A bit reader instance.
 * @record 
 */
export class GstBitReader {

    // Own properties of GstBase-0.10.GstBase.GstBitReader

    static name: string

    // Constructors of GstBase-0.10.GstBase.GstBitReader

    constructor(data: number[], size: number) 
    static new(data: number[], size: number): GstBitReader
    static newFromBuffer(buffer: Gst.Buffer): GstBitReader
}

export interface GstByteReader {

    // Own fields of GstBase-0.10.GstBase.GstByteReader

    data: any
    size: number
    byte: number

    // Owm methods of GstBase-0.10.GstBase.GstByteReader

    free(): void
    init(data: number[], size: number): void
    initFromBuffer(buffer: Gst.Buffer): void
    setPos(pos: number): boolean
    getPos(): number
    getRemaining(): number
    getSize(): number
    skip(nbytes: number): boolean
    getUint8(val: number[]): boolean
    getInt8(): [ /* returnType */ boolean, /* val */ number ]
    getUint16Le(): [ /* returnType */ boolean, /* val */ number ]
    getInt16Le(): [ /* returnType */ boolean, /* val */ number ]
    getUint16Be(): [ /* returnType */ boolean, /* val */ number ]
    getInt16Be(): [ /* returnType */ boolean, /* val */ number ]
    getUint24Le(): [ /* returnType */ boolean, /* val */ number ]
    getInt24Le(): [ /* returnType */ boolean, /* val */ number ]
    getUint24Be(): [ /* returnType */ boolean, /* val */ number ]
    getInt24Be(): [ /* returnType */ boolean, /* val */ number ]
    getUint32Le(): [ /* returnType */ boolean, /* val */ number ]
    getInt32Le(): [ /* returnType */ boolean, /* val */ number ]
    getUint32Be(): [ /* returnType */ boolean, /* val */ number ]
    getInt32Be(): [ /* returnType */ boolean, /* val */ number ]
    getUint64Le(): [ /* returnType */ boolean, /* val */ number ]
    getInt64Le(): [ /* returnType */ boolean, /* val */ number ]
    getUint64Be(): [ /* returnType */ boolean, /* val */ number ]
    getInt64Be(): [ /* returnType */ boolean, /* val */ number ]
    peekUint8(val: number[]): boolean
    peekInt8(): [ /* returnType */ boolean, /* val */ number ]
    peekUint16Le(): [ /* returnType */ boolean, /* val */ number ]
    peekInt16Le(): [ /* returnType */ boolean, /* val */ number ]
    peekUint16Be(): [ /* returnType */ boolean, /* val */ number ]
    peekInt16Be(): [ /* returnType */ boolean, /* val */ number ]
    peekUint24Le(): [ /* returnType */ boolean, /* val */ number ]
    peekInt24Le(): [ /* returnType */ boolean, /* val */ number ]
    peekUint24Be(): [ /* returnType */ boolean, /* val */ number ]
    peekInt24Be(): [ /* returnType */ boolean, /* val */ number ]
    peekUint32Le(): [ /* returnType */ boolean, /* val */ number ]
    peekInt32Le(): [ /* returnType */ boolean, /* val */ number ]
    peekUint32Be(): [ /* returnType */ boolean, /* val */ number ]
    peekInt32Be(): [ /* returnType */ boolean, /* val */ number ]
    peekUint64Le(): [ /* returnType */ boolean, /* val */ number ]
    peekInt64Le(): [ /* returnType */ boolean, /* val */ number ]
    peekUint64Be(): [ /* returnType */ boolean, /* val */ number ]
    peekInt64Be(): [ /* returnType */ boolean, /* val */ number ]
    getFloat32Le(): [ /* returnType */ boolean, /* val */ number ]
    getFloat32Be(): [ /* returnType */ boolean, /* val */ number ]
    getFloat64Le(): [ /* returnType */ boolean, /* val */ number ]
    getFloat64Be(): [ /* returnType */ boolean, /* val */ number ]
    peekFloat32Le(): [ /* returnType */ boolean, /* val */ number ]
    peekFloat32Be(): [ /* returnType */ boolean, /* val */ number ]
    peekFloat64Le(): [ /* returnType */ boolean, /* val */ number ]
    peekFloat64Be(): [ /* returnType */ boolean, /* val */ number ]
    dupData(size: number): [ /* returnType */ boolean, /* val */ number ]
    getData(size: number): [ /* returnType */ boolean, /* val */ number ]
    peekData(size: number): [ /* returnType */ boolean, /* val */ number ]
    dupStringUtf8(str: string[]): boolean
    dupStringUtf16(): [ /* returnType */ boolean, /* str */ number ]
    dupStringUtf32(): [ /* returnType */ boolean, /* str */ number ]
    skipStringUtf8(): boolean
    skipStringUtf16(): boolean
    skipStringUtf32(): boolean
    getStringUtf8(str: string[]): boolean
    peekStringUtf8(str: string[]): boolean
    maskedScanUint32(mask: number, pattern: number, offset: number, size: number): number
}

/**
 * A byte reader instance.
 * @record 
 */
export class GstByteReader {

    // Own properties of GstBase-0.10.GstBase.GstByteReader

    static name: string

    // Constructors of GstBase-0.10.GstBase.GstByteReader

    constructor(data: number[], size: number) 
    static new(data: number[], size: number): GstByteReader
    static newFromBuffer(buffer: Gst.Buffer): GstByteReader
}

export interface GstByteWriter {

    // Own fields of GstBase-0.10.GstBase.GstByteWriter

    parent: Gst.ByteReader
    allocSize: number
    fixed: boolean
    owned: boolean

    // Owm methods of GstBase-0.10.GstBase.GstByteWriter

    init(): void
    initWithSize(size: number, fixed: boolean): void
    initWithData(data: number[], size: number, initialized: boolean): void
    initWithBuffer(buffer: Gst.Buffer, initialized: boolean): void
    free(): void
    freeAndGetData(): number[]
    freeAndGetBuffer(): Gst.Buffer
    reset(): void
    resetAndGetData(): number[]
    resetAndGetBuffer(): Gst.Buffer
    getRemaining(): number
    ensureFreeSpace(size: number): boolean
    putUint8(val: number): boolean
    putInt8(val: number): boolean
    putUint16Be(val: number): boolean
    putUint16Le(val: number): boolean
    putInt16Be(val: number): boolean
    putInt16Le(val: number): boolean
    putUint24Be(val: number): boolean
    putUint24Le(val: number): boolean
    putInt24Be(val: number): boolean
    putInt24Le(val: number): boolean
    putUint32Be(val: number): boolean
    putUint32Le(val: number): boolean
    putInt32Be(val: number): boolean
    putInt32Le(val: number): boolean
    putUint64Be(val: number): boolean
    putUint64Le(val: number): boolean
    putInt64Be(val: number): boolean
    putInt64Le(val: number): boolean
    putFloat32Be(val: number): boolean
    putFloat32Le(val: number): boolean
    putFloat64Be(val: number): boolean
    putFloat64Le(val: number): boolean
    putData(data: number[], size: number): boolean
    fill(value: number, size: number): boolean
    putStringUtf8(data: string | null): boolean
    putStringUtf16(): [ /* returnType */ boolean, /* data */ number ]
    putStringUtf32(): [ /* returnType */ boolean, /* data */ number ]
}

/**
 * A byte writer instance.
 * @record 
 */
export class GstByteWriter {

    // Own properties of GstBase-0.10.GstBase.GstByteWriter

    static name: string

    // Constructors of GstBase-0.10.GstBase.GstByteWriter

    constructor() 
    static new(): GstByteWriter
    static newWithSize(size: number, fixed: boolean): GstByteWriter
    static newWithData(data: number[], size: number, initialized: boolean): GstByteWriter
    static newWithBuffer(buffer: Gst.Buffer, initialized: boolean): GstByteWriter
}

export interface GstCollectData {

    // Own fields of GstBase-0.10.GstBase.GstCollectData

    collect: Gst.CollectPads
    pad: Gst.Pad
    buffer: Gst.Buffer
    pos: number
    segment: Gst.Segment
}

/**
 * Structure used by the collect_pads.
 * @record 
 */
export class GstCollectData {

    // Own properties of GstBase-0.10.GstBase.GstCollectData

    static name: string
}

export interface GstCollectPadsClass {

    // Own fields of GstBase-0.10.GstBase.GstCollectPadsClass

    parentClass: Gst.ObjectClass
    gstReserved: any[]
}

export abstract class GstCollectPadsClass {

    // Own properties of GstBase-0.10.GstBase.GstCollectPadsClass

    static name: string
}

export interface GstCollectPadsPrivate {
}

export class GstCollectPadsPrivate {

    // Own properties of GstBase-0.10.GstBase.GstCollectPadsPrivate

    static name: string
}

export interface GstDataQueueClass {

    // Own fields of GstBase-0.10.GstBase.GstDataQueueClass

    parentClass: GObject.ObjectClass
    empty: (queue: Gst.DataQueue) => void
    full: (queue: Gst.DataQueue) => void
    gstReserved: any[]
}

export abstract class GstDataQueueClass {

    // Own properties of GstBase-0.10.GstBase.GstDataQueueClass

    static name: string
}

export interface GstDataQueueItem {

    // Own fields of GstBase-0.10.GstBase.GstDataQueueItem

    object: Gst.MiniObject
    size: number
    duration: number
    visible: boolean
    destroy: GLib.DestroyNotify
}

/**
 * Structure used by #GstDataQueue. You can supply a different structure, as
 * long as the top of the structure is identical to this structure.
 * @record 
 */
export class GstDataQueueItem {

    // Own properties of GstBase-0.10.GstBase.GstDataQueueItem

    static name: string
}

export interface GstDataQueueSize {

    // Own fields of GstBase-0.10.GstBase.GstDataQueueSize

    visible: number
    bytes: number
    time: number
}

/**
 * Structure describing the size of a queue.
 * @record 
 */
export class GstDataQueueSize {

    // Own properties of GstBase-0.10.GstBase.GstDataQueueSize

    static name: string
}

export interface GstPushSrcClass {

    // Own fields of GstBase-0.10.GstBase.GstPushSrcClass

    parentClass: Gst.BaseSrcClass
    create: (src: Gst.PushSrc, buf: Gst.Buffer) => Gst.FlowReturn
    gstReserved: any[]
}

export abstract class GstPushSrcClass {

    // Own properties of GstBase-0.10.GstBase.GstPushSrcClass

    static name: string
}

export interface SinkClass {

    // Own fields of GstBase-0.10.GstBase.SinkClass

    parentClass: Gst.ElementClass
    getCaps: (sink: Gst.BaseSink) => Gst.Caps
    setCaps: (sink: Gst.BaseSink, caps: Gst.Caps) => boolean
    bufferAlloc: (sink: Gst.BaseSink, offset: number, size: number, caps: Gst.Caps, buf: Gst.Buffer) => Gst.FlowReturn
    getTimes: (sink: Gst.BaseSink, buffer: Gst.Buffer, start: Gst.ClockTime, end: Gst.ClockTime) => void
    start: (sink: Gst.BaseSink) => boolean
    stop: (sink: Gst.BaseSink) => boolean
    unlock: (sink: Gst.BaseSink) => boolean
    event: (sink: Gst.BaseSink, event: Gst.Event) => boolean
    preroll: (sink: Gst.BaseSink, buffer: Gst.Buffer) => Gst.FlowReturn
    render: (sink: Gst.BaseSink, buffer: Gst.Buffer) => Gst.FlowReturn
    asyncPlay: (sink: Gst.BaseSink) => Gst.StateChangeReturn
    activatePull: (sink: Gst.BaseSink, active: boolean) => boolean
    fixate: (sink: Gst.BaseSink, caps: Gst.Caps) => void
    unlockStop: (sink: Gst.BaseSink) => boolean
    renderList: (sink: Gst.BaseSink, bufferList: Gst.BufferList) => Gst.FlowReturn
    gstReserved: any[]
}

/**
 * Subclasses can override any of the available virtual methods or not, as
 * needed. At the minimum, the `render` method should be overridden to
 * output/present buffers.
 * @record 
 */
export abstract class SinkClass {

    // Own properties of GstBase-0.10.GstBase.SinkClass

    static name: string
}

export interface SinkPrivate {
}

export class SinkPrivate {

    // Own properties of GstBase-0.10.GstBase.SinkPrivate

    static name: string
}

export interface SrcClass {

    // Own fields of GstBase-0.10.GstBase.SrcClass

    parentClass: Gst.ElementClass
    getCaps: (src: Gst.BaseSrc) => Gst.Caps
    setCaps: (src: Gst.BaseSrc, caps: Gst.Caps) => boolean
    negotiate: (src: Gst.BaseSrc) => boolean
    newsegment: (src: Gst.BaseSrc) => boolean
    start: (src: Gst.BaseSrc) => boolean
    stop: (src: Gst.BaseSrc) => boolean
    getTimes: (src: Gst.BaseSrc, buffer: Gst.Buffer, start: Gst.ClockTime, end: Gst.ClockTime) => void
    getSize: (src: Gst.BaseSrc) => [ /* returnType */ boolean, /* size */ number ]
    isSeekable: (src: Gst.BaseSrc) => boolean
    unlock: (src: Gst.BaseSrc) => boolean
    event: (src: Gst.BaseSrc, event: Gst.Event) => boolean
    create: (src: Gst.BaseSrc, offset: number, size: number, buf: Gst.Buffer) => Gst.FlowReturn
    doSeek: (src: Gst.BaseSrc, segment: Gst.Segment) => boolean
    query: (src: Gst.BaseSrc, query: Gst.Query) => boolean
    checkGetRange: (src: Gst.BaseSrc) => boolean
    fixate: (src: Gst.BaseSrc, caps: Gst.Caps) => void
    unlockStop: (src: Gst.BaseSrc) => boolean
    prepareSeekSegment: (src: Gst.BaseSrc, seek: Gst.Event, segment: Gst.Segment) => boolean
    gstReserved: any[]
}

/**
 * Subclasses can override any of the available virtual methods or not, as
 * needed. At the minimum, the `create` method should be overridden to produce
 * buffers.
 * @record 
 */
export abstract class SrcClass {

    // Own properties of GstBase-0.10.GstBase.SrcClass

    static name: string
}

export interface SrcPrivate {
}

export class SrcPrivate {

    // Own properties of GstBase-0.10.GstBase.SrcPrivate

    static name: string
}

export interface TransformClass {

    // Own fields of GstBase-0.10.GstBase.TransformClass

    parentClass: Gst.ElementClass
    transformCaps: (trans: Gst.BaseTransform, direction: Gst.PadDirection, caps: Gst.Caps) => Gst.Caps
    fixateCaps: (trans: Gst.BaseTransform, direction: Gst.PadDirection, caps: Gst.Caps, othercaps: Gst.Caps) => void
    transformSize: (trans: Gst.BaseTransform, direction: Gst.PadDirection, caps: Gst.Caps, size: number, othercaps: Gst.Caps) => [ /* returnType */ boolean, /* othersize */ number ]
    getUnitSize: (trans: Gst.BaseTransform, caps: Gst.Caps) => [ /* returnType */ boolean, /* size */ number ]
    setCaps: (trans: Gst.BaseTransform, incaps: Gst.Caps, outcaps: Gst.Caps) => boolean
    start: (trans: Gst.BaseTransform) => boolean
    stop: (trans: Gst.BaseTransform) => boolean
    event: (trans: Gst.BaseTransform, event: Gst.Event) => boolean
    transform: (trans: Gst.BaseTransform, inbuf: Gst.Buffer, outbuf: Gst.Buffer) => Gst.FlowReturn
    transformIp: (trans: Gst.BaseTransform, buf: Gst.Buffer) => Gst.FlowReturn
    passthroughOnSameCaps: boolean
    prepareOutputBuffer: (trans: Gst.BaseTransform, input: Gst.Buffer, size: number, caps: Gst.Caps, buf: Gst.Buffer) => Gst.FlowReturn
    srcEvent: (trans: Gst.BaseTransform, event: Gst.Event) => boolean
    beforeTransform: (trans: Gst.BaseTransform, buffer: Gst.Buffer) => void
    acceptCaps: (trans: Gst.BaseTransform, direction: Gst.PadDirection, caps: Gst.Caps) => boolean
    gstReserved: any[]
}

/**
 * Subclasses can override any of the available virtual methods or not, as
 * needed. At minimum either `transform` or `transform_ip` need to be overridden.
 * If the element can overwrite the input data with the results (data is of the
 * same type and quantity) it should provide `transform_ip`.
 * @record 
 */
export abstract class TransformClass {

    // Own properties of GstBase-0.10.GstBase.TransformClass

    static name: string
}

export interface TransformPrivate {
}

export class TransformPrivate {

    // Own properties of GstBase-0.10.GstBase.TransformPrivate

    static name: string
}
