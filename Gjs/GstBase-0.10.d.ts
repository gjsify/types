// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstBase-0.10
 */

import type * as Gjs from './Gjs';
import type libxml2 from './libxml2-2.0';
import type Gst from './Gst-0.10';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GstBase {

/**
 * The #GstElement flags that a basesrc element may have.
 * @bitfield 
 */
enum SrcFlags {
    STARTED,
    FLAG_LAST,
}
const TRANSFORM_SINK_NAME: string
const TRANSFORM_SRC_NAME: string
function gst_type_find_helper(src: Gst.Pad, size: number): Gst.Caps
function gst_type_find_helper_for_buffer(obj: Gst.Object, buf: Gst.Buffer, prob: Gst.TypeFindProbability): Gst.Caps
function gst_type_find_helper_for_extension(obj: Gst.Object, extension: string): Gst.Caps
function gst_type_find_helper_get_range(obj: Gst.Object, func: Gst.TypeFindHelperGetRangeFunction, size: number, prob: Gst.TypeFindProbability): Gst.Caps
function gst_type_find_helper_get_range_ext(obj: Gst.Object, func: Gst.TypeFindHelperGetRangeFunction, size: number, extension: string, prob: Gst.TypeFindProbability): Gst.Caps
/**
 * A function that will be called when the #GstCollectData will be freed.
 * It is passed the pointer to the structure and should free any custom
 * memory and resources allocated for it.
 * @callback 
 * @param data the #GstCollectData that will be freed
 */
interface GstCollectDataDestroyNotify {
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
 */
interface GstCollectPadsClipFunction {
    (pads: Gst.CollectPads, data: Gst.CollectData, buffer: Gst.Buffer): Gst.Buffer
}
/**
 * A function that will be called when all pads have received data.
 * @callback 
 * @param pads the #GstCollectPads that triggered the callback
 */
interface GstCollectPadsFunction {
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
 */
interface GstDataQueueCheckFullFunction {
    (queue: Gst.DataQueue, visible: number, bytes: number, time: number, checkdata: object): boolean
}
interface GstDataQueueEmptyCallback {
    (queue: Gst.DataQueue, checkdata: object): void
}
interface GstDataQueueFullCallback {
    (queue: Gst.DataQueue, checkdata: object): void
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
 */
interface GstTypeFindHelperGetRangeFunction {
    (obj: Gst.Object, offset: number, length: number, buffer: Gst.Buffer): Gst.FlowReturn
}
// Workaround
/** @ignore */
export type BaseSink_ConstructProps = Gst.BaseSink_ConstructProps;

interface GstAdapter_ConstructProps extends GObject.Object_ConstructProps {
}

interface GstAdapter {

    // Own fields of GstBase-0.10.GstBase.GstAdapter

    object: GObject.Object
    buflist: object[]
    size: number
    skip: number
    assembled_data: number
    assembled_size: number
    assembled_len: number
    buflist_end: object[]
    priv: Gst.AdapterPrivate
    _gst_reserved: any[]

    // Owm methods of GstBase-0.10.GstBase.GstAdapter

    clear(): void
    push(buf: Gst.Buffer): void
    peek(size: number): any[]
    copy(dest: any[], offset: number, size: number): void
    flush(flush: number): void
    take(nbytes: number): any[]
    take_buffer(nbytes: number): Gst.Buffer
    available(): number
    available_fast(): number
    prev_timestamp(): [ /* returnType */ Gst.ClockTime, /* distance */ number ]
    masked_scan_uint32(mask: number, pattern: number, offset: number, size: number): number
    masked_scan_uint32_peek(mask: number, pattern: number, offset: number, size: number): [ /* returnType */ number, /* value */ number ]

    // Class property signals of GstBase-0.10.GstBase.GstAdapter

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The opaque #GstAdapter data structure.
 * @class 
 */
class GstAdapter extends GObject.Object {

    // Own properties of GstBase-0.10.GstBase.GstAdapter

    static name: string
    static $gtype: GObject.GType<GstAdapter>

    // Constructors of GstBase-0.10.GstBase.GstAdapter

    constructor(config?: GstAdapter_ConstructProps) 
    constructor() 
    static new(): GstAdapter
    _init(config?: GstAdapter_ConstructProps): void
}

interface GstCollectPads_ConstructProps extends Gst.Object_ConstructProps {
}

interface GstCollectPads {

    // Own fields of GstBase-0.10.GstBase.GstCollectPads

    object: Gst.Object
    data: object[]
    cookie: number
    cond: GLib.Cond
    func: Gst.CollectPadsFunction
    user_data: object
    numpads: number
    queuedpads: number
    eospads: number
    started: boolean

    // Owm methods of GstBase-0.10.GstBase.GstCollectPads

    set_function(func: Gst.CollectPadsFunction, user_data: object): void
    set_clip_function(clipfunc: Gst.CollectPadsClipFunction, user_data: object): void
    add_pad(pad: Gst.Pad, size: number): Gst.CollectData
    add_pad_full(pad: Gst.Pad, size: number, destroy_notify: Gst.CollectDataDestroyNotify): Gst.CollectData
    remove_pad(pad: Gst.Pad): boolean
    is_active(pad: Gst.Pad): boolean
    collect(): Gst.FlowReturn
    collect_range(offset: number, length: number): Gst.FlowReturn
    start(): void
    stop(): void
    set_flushing(flushing: boolean): void
    peek(data: Gst.CollectData): Gst.Buffer
    pop(data: Gst.CollectData): Gst.Buffer
    available(): number
    read(data: Gst.CollectData, size: number): [ /* returnType */ number, /* bytes */ number ]
    read_buffer(data: Gst.CollectData, size: number): Gst.Buffer
    take_buffer(data: Gst.CollectData, size: number): Gst.Buffer
    flush(data: Gst.CollectData, size: number): number

    // Class property signals of GstBase-0.10.GstBase.GstCollectPads

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Collectpads object.
 * Note that `data` doesn't contain the complete #GstCollectData list
 * at all times and should not be used for iterating them.
 * @class 
 */
class GstCollectPads extends Gst.Object {

    // Own properties of GstBase-0.10.GstBase.GstCollectPads

    static name: string
    static $gtype: GObject.GType<GstCollectPads>

    // Constructors of GstBase-0.10.GstBase.GstCollectPads

    constructor(config?: GstCollectPads_ConstructProps) 
    constructor() 
    static new(): GstCollectPads
    _init(config?: GstCollectPads_ConstructProps): void
}

interface GstDataQueue_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `empty`
 */
interface GstDataQueue_EmptySignalCallback {
    ($obj: GstDataQueue): void
}

/**
 * Signal callback interface for `full`
 */
interface GstDataQueue_FullSignalCallback {
    ($obj: GstDataQueue): void
}

interface GstDataQueue {

    // Own properties of GstBase-0.10.GstBase.GstDataQueue

    readonly current_level_bytes: number
    readonly current_level_time: number
    readonly current_level_visible: number

    // Own fields of GstBase-0.10.GstBase.GstDataQueue

    object: GObject.Object
    queue: GLib.Queue
    cur_level: Gst.DataQueueSize
    checkfull: Gst.DataQueueCheckFullFunction
    checkdata: object
    qlock: GLib.Mutex
    item_add: GLib.Cond
    item_del: GLib.Cond
    flushing: boolean
    fullcallback: Gst.DataQueueFullCallback
    emptycallback: Gst.DataQueueEmptyCallback
    _gst_reserved: any[]

    // Owm methods of GstBase-0.10.GstBase.GstDataQueue

    push(item: Gst.DataQueueItem): boolean
    pop(item: Gst.DataQueueItem): boolean
    flush(): void
    set_flushing(flushing: boolean): void
    drop_head(type: GObject.GType): boolean
    is_full(): boolean
    is_empty(): boolean
    get_level(level: Gst.DataQueueSize): void
    limits_changed(): void

    // Own signals of GstBase-0.10.GstBase.GstDataQueue

    connect(sigName: "empty", callback: GstDataQueue_EmptySignalCallback): number
    connect_after(sigName: "empty", callback: GstDataQueue_EmptySignalCallback): number
    emit(sigName: "empty", ...args: any[]): void
    connect(sigName: "full", callback: GstDataQueue_FullSignalCallback): number
    connect_after(sigName: "full", callback: GstDataQueue_FullSignalCallback): number
    emit(sigName: "full", ...args: any[]): void

    // Class property signals of GstBase-0.10.GstBase.GstDataQueue

    connect(sigName: "notify::current-level-bytes", callback: (($obj: GstDataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-bytes", callback: (($obj: GstDataQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-level-bytes", ...args: any[]): void
    connect(sigName: "notify::current-level-time", callback: (($obj: GstDataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-time", callback: (($obj: GstDataQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-level-time", ...args: any[]): void
    connect(sigName: "notify::current-level-visible", callback: (($obj: GstDataQueue, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-level-visible", callback: (($obj: GstDataQueue, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-level-visible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque #GstDataQueue structure.
 * @class 
 */
class GstDataQueue extends GObject.Object {

    // Own properties of GstBase-0.10.GstBase.GstDataQueue

    static name: string
    static $gtype: GObject.GType<GstDataQueue>

    // Constructors of GstBase-0.10.GstBase.GstDataQueue

    constructor(config?: GstDataQueue_ConstructProps) 
    constructor(checkfull: Gst.DataQueueCheckFullFunction) 
    static new(checkfull: Gst.DataQueueCheckFullFunction): GstDataQueue
    static new_full(checkfull: Gst.DataQueueCheckFullFunction, fullcallback: Gst.DataQueueFullCallback, emptycallback: Gst.DataQueueEmptyCallback): GstDataQueue
    _init(config?: GstDataQueue_ConstructProps): void
}

interface GstPushSrc_ConstructProps extends Src_ConstructProps {
}

interface GstPushSrc {

    // Conflicting properties

    object: any

    // Own fields of GstBase-0.10.GstBase.GstPushSrc

    parent: Gst.BaseSrc
    _gst_reserved: any[]

    // Class property signals of GstBase-0.10.GstBase.GstPushSrc

    connect(sigName: "notify::do-timestamp", callback: (($obj: GstPushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: GstPushSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::do-timestamp", ...args: any[]): void
    connect(sigName: "notify::typefind", callback: (($obj: GstPushSrc, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: (($obj: GstPushSrc, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::typefind", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The opaque #GstPushSrc data structure.
 * @class 
 */
class GstPushSrc extends Src {

    // Own properties of GstBase-0.10.GstBase.GstPushSrc

    static name: string
    static $gtype: GObject.GType<GstPushSrc>

    // Constructors of GstBase-0.10.GstBase.GstPushSrc

    constructor(config?: GstPushSrc_ConstructProps) 
    _init(config?: GstPushSrc_ConstructProps): void
}

interface Sink_ConstructProps extends Gst.Element_ConstructProps {

    // Own constructor properties of GstBase-0.10.GstBase.Sink

    async?: boolean | null
    blocksize?: number | null
    enable_last_buffer?: boolean | null
    max_lateness?: number | null
    preroll_queue_len?: number | null
    qos?: boolean | null
    render_delay?: number | null
    sync?: boolean | null
    ts_offset?: number | null
}

interface Sink {

    // Own properties of GstBase-0.10.GstBase.Sink

    async: boolean
    blocksize: number
    enable_last_buffer: boolean
    readonly last_buffer: Gst.Buffer
    max_lateness: number
    preroll_queue_len: number
    qos: boolean
    render_delay: number
    ts_offset: number

    // Conflicting properties

    object: any

    // Own fields of GstBase-0.10.GstBase.Sink

    element: Gst.Element
    sinkpad: Gst.Pad
    pad_mode: Gst.ActivateMode
    offset: number
    can_activate_pull: boolean
    can_activate_push: boolean
    preroll_queue: GLib.Queue
    preroll_queue_max_len: number
    preroll_queued: number
    buffers_queued: number
    events_queued: number
    eos: boolean
    eos_queued: boolean
    need_preroll: boolean
    have_preroll: boolean
    playing_async: boolean
    have_newsegment: boolean
    segment: Gst.Segment
    clock_id: Gst.ClockID
    end_time: Gst.ClockTime
    sync: boolean
    flushing: boolean
    priv: Gst.BaseSinkPrivate

    // Owm methods of GstBase-0.10.GstBase.Sink

    do_preroll(obj: Gst.MiniObject): Gst.FlowReturn
    wait_preroll(): Gst.FlowReturn
    set_sync(sync: boolean): void
    get_sync(): boolean
    set_max_lateness(max_lateness: number): void
    get_max_lateness(): number
    set_qos_enabled(enabled: boolean): void
    is_qos_enabled(): boolean
    set_async_enabled(enabled: boolean): void
    is_async_enabled(): boolean
    set_ts_offset(offset: Gst.ClockTimeDiff): void
    get_ts_offset(): Gst.ClockTimeDiff
    get_last_buffer(): Gst.Buffer
    set_last_buffer_enabled(enable: boolean): void
    is_last_buffer_enabled(): boolean
    query_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): [ /* returnType */ boolean, /* live */ boolean, /* upstream_live */ boolean ]
    get_latency(): Gst.ClockTime
    set_render_delay(delay: Gst.ClockTime): void
    get_render_delay(): Gst.ClockTime
    set_blocksize(blocksize: number): void
    get_blocksize(): number
    wait_clock(time: Gst.ClockTime, jitter: Gst.ClockTimeDiff): Gst.ClockReturn
    wait_eos(time: Gst.ClockTime, jitter: Gst.ClockTimeDiff): Gst.FlowReturn

    // Class property signals of GstBase-0.10.GstBase.Sink

    connect(sigName: "notify::async", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::async", ...args: any[]): void
    connect(sigName: "notify::blocksize", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::blocksize", ...args: any[]): void
    connect(sigName: "notify::enable-last-buffer", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-buffer", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-last-buffer", ...args: any[]): void
    connect(sigName: "notify::last-buffer", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-buffer", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-buffer", ...args: any[]): void
    connect(sigName: "notify::max-lateness", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-lateness", ...args: any[]): void
    connect(sigName: "notify::preroll-queue-len", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preroll-queue-len", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::preroll-queue-len", ...args: any[]): void
    connect(sigName: "notify::qos", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: "notify::render-delay", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::render-delay", ...args: any[]): void
    connect(sigName: "notify::ts-offset", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: (($obj: Sink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ts-offset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The opaque #GstBaseSink data structure.
 * @class 
 */
class Sink extends Gst.Element {

    // Own properties of GstBase-0.10.GstBase.Sink

    static name: string
    static $gtype: GObject.GType<Sink>

    // Constructors of GstBase-0.10.GstBase.Sink

    constructor(config?: Sink_ConstructProps) 
    _init(config?: Sink_ConstructProps): void
}

interface Src_ConstructProps extends Gst.Element_ConstructProps {

    // Own constructor properties of GstBase-0.10.GstBase.Src

    blocksize?: number | null
    do_timestamp?: boolean | null
    num_buffers?: number | null
    typefind?: boolean | null
}

interface Src {

    // Own properties of GstBase-0.10.GstBase.Src

    do_timestamp: boolean
    typefind: boolean

    // Conflicting properties

    object: any

    // Own fields of GstBase-0.10.GstBase.Src

    element: Gst.Element
    srcpad: Gst.Pad
    live_lock: GLib.Mutex
    live_cond: GLib.Cond
    is_live: boolean
    live_running: boolean
    blocksize: number
    can_activate_push: boolean
    pad_mode: Gst.ActivateMode
    seekable: boolean
    random_access: boolean
    clock_id: Gst.ClockID
    end_time: Gst.ClockTime
    segment: Gst.Segment
    need_newsegment: boolean
    offset: number
    size: number
    num_buffers: number
    num_buffers_left: number
    priv: Gst.BaseSrcPrivate

    // Owm methods of GstBase-0.10.GstBase.Src

    wait_playing(): Gst.FlowReturn
    set_live(live: boolean): void
    set_format(format: Gst.Format): void
    query_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): [ /* returnType */ boolean, /* live */ boolean ]
    set_blocksize(blocksize: number): void
    get_blocksize(): number
    set_do_timestamp(timestamp: boolean): void
    get_do_timestamp(): boolean
    new_seamless_segment(start: number, stop: number, position: number): boolean

    // Class property signals of GstBase-0.10.GstBase.Src

    connect(sigName: "notify::do-timestamp", callback: (($obj: Src, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-timestamp", callback: (($obj: Src, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::do-timestamp", ...args: any[]): void
    connect(sigName: "notify::typefind", callback: (($obj: Src, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typefind", callback: (($obj: Src, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::typefind", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The opaque #GstBaseSrc data structure.
 * @class 
 */
class Src extends Gst.Element {

    // Own properties of GstBase-0.10.GstBase.Src

    static name: string
    static $gtype: GObject.GType<Src>

    // Constructors of GstBase-0.10.GstBase.Src

    constructor(config?: Src_ConstructProps) 
    _init(config?: Src_ConstructProps): void
}

interface Transform_ConstructProps extends Gst.Element_ConstructProps {

    // Own constructor properties of GstBase-0.10.GstBase.Transform

    qos?: boolean | null
}

interface Transform {

    // Own properties of GstBase-0.10.GstBase.Transform

    qos: boolean

    // Conflicting properties

    object: any

    // Own fields of GstBase-0.10.GstBase.Transform

    element: Gst.Element
    sinkpad: Gst.Pad
    srcpad: Gst.Pad
    passthrough: boolean
    always_in_place: boolean
    cache_caps1: Gst.Caps
    cache_caps1_size: number
    cache_caps2: Gst.Caps
    cache_caps2_size: number
    have_same_caps: boolean
    delay_configure: boolean
    pending_configure: boolean
    negotiated: boolean
    have_newsegment: boolean
    segment: Gst.Segment
    transform_lock: GLib.Mutex
    priv: Gst.BaseTransformPrivate
    _gst_reserved: any[]

    // Owm methods of GstBase-0.10.GstBase.Transform

    set_passthrough(passthrough: boolean): void
    is_passthrough(): boolean
    set_in_place(in_place: boolean): void
    is_in_place(): boolean
    update_qos(proportion: number, diff: Gst.ClockTimeDiff, timestamp: Gst.ClockTime): void
    set_qos_enabled(enabled: boolean): void
    is_qos_enabled(): boolean
    set_gap_aware(gap_aware: boolean): void
    suggest(caps: Gst.Caps, size: number): void
    reconfigure(): void

    // Class property signals of GstBase-0.10.GstBase.Transform

    connect(sigName: "notify::qos", callback: (($obj: Transform, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: Transform, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The opaque #GstBaseTransform data structure.
 * @class 
 */
class Transform extends Gst.Element {

    // Own properties of GstBase-0.10.GstBase.Transform

    static name: string
    static $gtype: GObject.GType<Transform>

    // Constructors of GstBase-0.10.GstBase.Transform

    constructor(config?: Transform_ConstructProps) 
    _init(config?: Transform_ConstructProps): void
}

interface GstAdapterClass {

    // Own fields of GstBase-0.10.GstBase.GstAdapterClass

    parent_class: GObject.ObjectClass
    _gst_reserved: any[]
}

abstract class GstAdapterClass {

    // Own properties of GstBase-0.10.GstBase.GstAdapterClass

    static name: string
}

interface GstAdapterPrivate {
}

class GstAdapterPrivate {

    // Own properties of GstBase-0.10.GstBase.GstAdapterPrivate

    static name: string
}

interface GstBitReader {

    // Own fields of GstBase-0.10.GstBase.GstBitReader

    data: number
    size: number
    byte: number
    bit: number

    // Owm methods of GstBase-0.10.GstBase.GstBitReader

    free(): void
    init(data: any[], size: number): void
    init_from_buffer(buffer: Gst.Buffer): void
    set_pos(pos: number): boolean
    get_pos(): number
    get_remaining(): number
    get_size(): number
    skip(nbits: number): boolean
    skip_to_byte(): boolean
    get_bits_uint8(val: any[], nbits: number): boolean
    get_bits_uint16(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    get_bits_uint32(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    get_bits_uint64(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    peek_bits_uint8(val: any[], nbits: number): boolean
    peek_bits_uint16(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    peek_bits_uint32(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    peek_bits_uint64(nbits: number): [ /* returnType */ boolean, /* val */ number ]
}

/**
 * A bit reader instance.
 * @record 
 */
class GstBitReader {

    // Own properties of GstBase-0.10.GstBase.GstBitReader

    static name: string

    // Constructors of GstBase-0.10.GstBase.GstBitReader

    constructor(data: any[], size: number) 
    static new(data: any[], size: number): GstBitReader
    static new_from_buffer(buffer: Gst.Buffer): GstBitReader
}

interface GstByteReader {

    // Own fields of GstBase-0.10.GstBase.GstByteReader

    data: number
    size: number
    byte: number

    // Owm methods of GstBase-0.10.GstBase.GstByteReader

    free(): void
    init(data: any[], size: number): void
    init_from_buffer(buffer: Gst.Buffer): void
    set_pos(pos: number): boolean
    get_pos(): number
    get_remaining(): number
    get_size(): number
    skip(nbytes: number): boolean
    get_uint8(val: any[]): boolean
    get_int8(): [ /* returnType */ boolean, /* val */ number ]
    get_uint16_le(): [ /* returnType */ boolean, /* val */ number ]
    get_int16_le(): [ /* returnType */ boolean, /* val */ number ]
    get_uint16_be(): [ /* returnType */ boolean, /* val */ number ]
    get_int16_be(): [ /* returnType */ boolean, /* val */ number ]
    get_uint24_le(): [ /* returnType */ boolean, /* val */ number ]
    get_int24_le(): [ /* returnType */ boolean, /* val */ number ]
    get_uint24_be(): [ /* returnType */ boolean, /* val */ number ]
    get_int24_be(): [ /* returnType */ boolean, /* val */ number ]
    get_uint32_le(): [ /* returnType */ boolean, /* val */ number ]
    get_int32_le(): [ /* returnType */ boolean, /* val */ number ]
    get_uint32_be(): [ /* returnType */ boolean, /* val */ number ]
    get_int32_be(): [ /* returnType */ boolean, /* val */ number ]
    get_uint64_le(): [ /* returnType */ boolean, /* val */ number ]
    get_int64_le(): [ /* returnType */ boolean, /* val */ number ]
    get_uint64_be(): [ /* returnType */ boolean, /* val */ number ]
    get_int64_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint8(val: any[]): boolean
    peek_int8(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint16_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_int16_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint16_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_int16_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint24_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_int24_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint24_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_int24_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint32_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_int32_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint32_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_int32_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint64_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_int64_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_uint64_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_int64_be(): [ /* returnType */ boolean, /* val */ number ]
    get_float32_le(): [ /* returnType */ boolean, /* val */ number ]
    get_float32_be(): [ /* returnType */ boolean, /* val */ number ]
    get_float64_le(): [ /* returnType */ boolean, /* val */ number ]
    get_float64_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_float32_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_float32_be(): [ /* returnType */ boolean, /* val */ number ]
    peek_float64_le(): [ /* returnType */ boolean, /* val */ number ]
    peek_float64_be(): [ /* returnType */ boolean, /* val */ number ]
    dup_data(size: number): [ /* returnType */ boolean, /* val */ number ]
    get_data(size: number): [ /* returnType */ boolean, /* val */ number ]
    peek_data(size: number): [ /* returnType */ boolean, /* val */ number ]
    dup_string_utf8(str: string[]): boolean
    dup_string_utf16(): [ /* returnType */ boolean, /* str */ any ]
    dup_string_utf32(): [ /* returnType */ boolean, /* str */ any ]
    skip_string_utf8(): boolean
    skip_string_utf16(): boolean
    skip_string_utf32(): boolean
    get_string_utf8(str: string[]): boolean
    peek_string_utf8(str: string[]): boolean
    masked_scan_uint32(mask: number, pattern: number, offset: number, size: number): number
}

/**
 * A byte reader instance.
 * @record 
 */
class GstByteReader {

    // Own properties of GstBase-0.10.GstBase.GstByteReader

    static name: string

    // Constructors of GstBase-0.10.GstBase.GstByteReader

    constructor(data: any[], size: number) 
    static new(data: any[], size: number): GstByteReader
    static new_from_buffer(buffer: Gst.Buffer): GstByteReader
}

interface GstByteWriter {

    // Own fields of GstBase-0.10.GstBase.GstByteWriter

    parent: Gst.ByteReader
    alloc_size: number
    fixed: boolean
    owned: boolean

    // Owm methods of GstBase-0.10.GstBase.GstByteWriter

    init(): void
    init_with_size(size: number, fixed: boolean): void
    init_with_data(data: any[], size: number, initialized: boolean): void
    init_with_buffer(buffer: Gst.Buffer, initialized: boolean): void
    free(): void
    free_and_get_data(): any[]
    free_and_get_buffer(): Gst.Buffer
    reset(): void
    reset_and_get_data(): any[]
    reset_and_get_buffer(): Gst.Buffer
    get_remaining(): number
    ensure_free_space(size: number): boolean
    put_uint8(val: number): boolean
    put_int8(val: number): boolean
    put_uint16_be(val: number): boolean
    put_uint16_le(val: number): boolean
    put_int16_be(val: number): boolean
    put_int16_le(val: number): boolean
    put_uint24_be(val: number): boolean
    put_uint24_le(val: number): boolean
    put_int24_be(val: number): boolean
    put_int24_le(val: number): boolean
    put_uint32_be(val: number): boolean
    put_uint32_le(val: number): boolean
    put_int32_be(val: number): boolean
    put_int32_le(val: number): boolean
    put_uint64_be(val: number): boolean
    put_uint64_le(val: number): boolean
    put_int64_be(val: number): boolean
    put_int64_le(val: number): boolean
    put_float32_be(val: number): boolean
    put_float32_le(val: number): boolean
    put_float64_be(val: number): boolean
    put_float64_le(val: number): boolean
    put_data(data: any[], size: number): boolean
    fill(value: number, size: number): boolean
    put_string_utf8(data: string): boolean
    put_string_utf16(): [ /* returnType */ boolean, /* data */ number ]
    put_string_utf32(): [ /* returnType */ boolean, /* data */ number ]
}

/**
 * A byte writer instance.
 * @record 
 */
class GstByteWriter {

    // Own properties of GstBase-0.10.GstBase.GstByteWriter

    static name: string

    // Constructors of GstBase-0.10.GstBase.GstByteWriter

    constructor() 
    static new(): GstByteWriter
    static new_with_size(size: number, fixed: boolean): GstByteWriter
    static new_with_data(data: any[], size: number, initialized: boolean): GstByteWriter
    static new_with_buffer(buffer: Gst.Buffer, initialized: boolean): GstByteWriter
}

interface GstCollectData {

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
class GstCollectData {

    // Own properties of GstBase-0.10.GstBase.GstCollectData

    static name: string
}

interface GstCollectPadsClass {

    // Own fields of GstBase-0.10.GstBase.GstCollectPadsClass

    parent_class: Gst.ObjectClass
    _gst_reserved: any[]
}

abstract class GstCollectPadsClass {

    // Own properties of GstBase-0.10.GstBase.GstCollectPadsClass

    static name: string
}

interface GstCollectPadsPrivate {
}

class GstCollectPadsPrivate {

    // Own properties of GstBase-0.10.GstBase.GstCollectPadsPrivate

    static name: string
}

interface GstDataQueueClass {

    // Own fields of GstBase-0.10.GstBase.GstDataQueueClass

    parent_class: GObject.ObjectClass
    empty: (queue: Gst.DataQueue) => void
    full: (queue: Gst.DataQueue) => void
    _gst_reserved: any[]
}

abstract class GstDataQueueClass {

    // Own properties of GstBase-0.10.GstBase.GstDataQueueClass

    static name: string
}

interface GstDataQueueItem {

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
class GstDataQueueItem {

    // Own properties of GstBase-0.10.GstBase.GstDataQueueItem

    static name: string
}

interface GstDataQueueSize {

    // Own fields of GstBase-0.10.GstBase.GstDataQueueSize

    visible: number
    bytes: number
    time: number
}

/**
 * Structure describing the size of a queue.
 * @record 
 */
class GstDataQueueSize {

    // Own properties of GstBase-0.10.GstBase.GstDataQueueSize

    static name: string
}

interface GstPushSrcClass {

    // Own fields of GstBase-0.10.GstBase.GstPushSrcClass

    parent_class: Gst.BaseSrcClass
    create: (src: Gst.PushSrc, buf: Gst.Buffer) => Gst.FlowReturn
    _gst_reserved: any[]
}

abstract class GstPushSrcClass {

    // Own properties of GstBase-0.10.GstBase.GstPushSrcClass

    static name: string
}

interface SinkClass {

    // Own fields of GstBase-0.10.GstBase.SinkClass

    parent_class: Gst.ElementClass
    get_caps: (sink: Gst.BaseSink) => Gst.Caps
    set_caps: (sink: Gst.BaseSink, caps: Gst.Caps) => boolean
    buffer_alloc: (sink: Gst.BaseSink, offset: number, size: number, caps: Gst.Caps, buf: Gst.Buffer) => Gst.FlowReturn
    get_times: (sink: Gst.BaseSink, buffer: Gst.Buffer, start: Gst.ClockTime, end: Gst.ClockTime) => void
    start: (sink: Gst.BaseSink) => boolean
    stop: (sink: Gst.BaseSink) => boolean
    unlock: (sink: Gst.BaseSink) => boolean
    event: (sink: Gst.BaseSink, event: Gst.Event) => boolean
    preroll: (sink: Gst.BaseSink, buffer: Gst.Buffer) => Gst.FlowReturn
    render: (sink: Gst.BaseSink, buffer: Gst.Buffer) => Gst.FlowReturn
    async_play: (sink: Gst.BaseSink) => Gst.StateChangeReturn
    activate_pull: (sink: Gst.BaseSink, active: boolean) => boolean
    fixate: (sink: Gst.BaseSink, caps: Gst.Caps) => void
    unlock_stop: (sink: Gst.BaseSink) => boolean
    render_list: (sink: Gst.BaseSink, buffer_list: Gst.BufferList) => Gst.FlowReturn
    _gst_reserved: any[]
}

/**
 * Subclasses can override any of the available virtual methods or not, as
 * needed. At the minimum, the `render` method should be overridden to
 * output/present buffers.
 * @record 
 */
abstract class SinkClass {

    // Own properties of GstBase-0.10.GstBase.SinkClass

    static name: string
}

interface SinkPrivate {
}

class SinkPrivate {

    // Own properties of GstBase-0.10.GstBase.SinkPrivate

    static name: string
}

interface SrcClass {

    // Own fields of GstBase-0.10.GstBase.SrcClass

    parent_class: Gst.ElementClass
    get_caps: (src: Gst.BaseSrc) => Gst.Caps
    set_caps: (src: Gst.BaseSrc, caps: Gst.Caps) => boolean
    negotiate: (src: Gst.BaseSrc) => boolean
    newsegment: (src: Gst.BaseSrc) => boolean
    start: (src: Gst.BaseSrc) => boolean
    stop: (src: Gst.BaseSrc) => boolean
    get_times: (src: Gst.BaseSrc, buffer: Gst.Buffer, start: Gst.ClockTime, end: Gst.ClockTime) => void
    get_size: (src: Gst.BaseSrc) => [ /* returnType */ boolean, /* size */ number ]
    is_seekable: (src: Gst.BaseSrc) => boolean
    unlock: (src: Gst.BaseSrc) => boolean
    event: (src: Gst.BaseSrc, event: Gst.Event) => boolean
    create: (src: Gst.BaseSrc, offset: number, size: number, buf: Gst.Buffer) => Gst.FlowReturn
    do_seek: (src: Gst.BaseSrc, segment: Gst.Segment) => boolean
    query: (src: Gst.BaseSrc, query: Gst.Query) => boolean
    check_get_range: (src: Gst.BaseSrc) => boolean
    fixate: (src: Gst.BaseSrc, caps: Gst.Caps) => void
    unlock_stop: (src: Gst.BaseSrc) => boolean
    prepare_seek_segment: (src: Gst.BaseSrc, seek: Gst.Event, segment: Gst.Segment) => boolean
    _gst_reserved: any[]
}

/**
 * Subclasses can override any of the available virtual methods or not, as
 * needed. At the minimum, the `create` method should be overridden to produce
 * buffers.
 * @record 
 */
abstract class SrcClass {

    // Own properties of GstBase-0.10.GstBase.SrcClass

    static name: string
}

interface SrcPrivate {
}

class SrcPrivate {

    // Own properties of GstBase-0.10.GstBase.SrcPrivate

    static name: string
}

interface TransformClass {

    // Own fields of GstBase-0.10.GstBase.TransformClass

    parent_class: Gst.ElementClass
    transform_caps: (trans: Gst.BaseTransform, direction: Gst.PadDirection, caps: Gst.Caps) => Gst.Caps
    fixate_caps: (trans: Gst.BaseTransform, direction: Gst.PadDirection, caps: Gst.Caps, othercaps: Gst.Caps) => void
    transform_size: (trans: Gst.BaseTransform, direction: Gst.PadDirection, caps: Gst.Caps, size: number, othercaps: Gst.Caps) => [ /* returnType */ boolean, /* othersize */ number ]
    get_unit_size: (trans: Gst.BaseTransform, caps: Gst.Caps) => [ /* returnType */ boolean, /* size */ number ]
    set_caps: (trans: Gst.BaseTransform, incaps: Gst.Caps, outcaps: Gst.Caps) => boolean
    start: (trans: Gst.BaseTransform) => boolean
    stop: (trans: Gst.BaseTransform) => boolean
    event: (trans: Gst.BaseTransform, event: Gst.Event) => boolean
    transform: (trans: Gst.BaseTransform, inbuf: Gst.Buffer, outbuf: Gst.Buffer) => Gst.FlowReturn
    transform_ip: (trans: Gst.BaseTransform, buf: Gst.Buffer) => Gst.FlowReturn
    passthrough_on_same_caps: boolean
    prepare_output_buffer: (trans: Gst.BaseTransform, input: Gst.Buffer, size: number, caps: Gst.Caps, buf: Gst.Buffer) => Gst.FlowReturn
    src_event: (trans: Gst.BaseTransform, event: Gst.Event) => boolean
    before_transform: (trans: Gst.BaseTransform, buffer: Gst.Buffer) => void
    accept_caps: (trans: Gst.BaseTransform, direction: Gst.PadDirection, caps: Gst.Caps) => boolean
    _gst_reserved: any[]
}

/**
 * Subclasses can override any of the available virtual methods or not, as
 * needed. At minimum either `transform` or `transform_ip` need to be overridden.
 * If the element can overwrite the input data with the results (data is of the
 * same type and quantity) it should provide `transform_ip`.
 * @record 
 */
abstract class TransformClass {

    // Own properties of GstBase-0.10.GstBase.TransformClass

    static name: string
}

interface TransformPrivate {
}

class TransformPrivate {

    // Own properties of GstBase-0.10.GstBase.TransformPrivate

    static name: string
}

}
export default GstBase;