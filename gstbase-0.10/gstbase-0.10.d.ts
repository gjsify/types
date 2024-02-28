/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gstbase-0.10-ambient.d.ts';
import './gstbase-0.10-import.d.ts';
/**
 * GstBase-0.10
 */

import type libxml2 from '@girs/libxml2-2.0';
import type Gst from '@girs/gst-0.10';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstBase {
    const TRANSFORM_SINK_NAME: string;
    const TRANSFORM_SRC_NAME: string;
    function gst_type_find_helper(src: Gst.Pad, size: uint64): Gst.Caps;
    function gst_type_find_helper_for_buffer(obj: Gst.Object, buf: Gst.Buffer, prob: Gst.TypeFindProbability): Gst.Caps;
    function gst_type_find_helper_for_extension(obj: Gst.Object, extension: string): Gst.Caps;
    function gst_type_find_helper_get_range(
        obj: Gst.Object,
        func: Gst.TypeFindHelperGetRangeFunction,
        size: uint64,
        prob: Gst.TypeFindProbability,
    ): Gst.Caps;
    function gst_type_find_helper_get_range_ext(
        obj: Gst.Object,
        func: Gst.TypeFindHelperGetRangeFunction,
        size: uint64,
        extension: string,
        prob: Gst.TypeFindProbability,
    ): Gst.Caps;
    interface GstCollectDataDestroyNotify {
        (data: Gst.CollectData): void;
    }
    interface GstCollectPadsClipFunction {
        (pads: Gst.CollectPads, data: Gst.CollectData, buffer: Gst.Buffer): Gst.Buffer;
    }
    interface GstCollectPadsFunction {
        (pads: Gst.CollectPads): Gst.FlowReturn;
    }
    interface GstDataQueueCheckFullFunction {
        (queue: Gst.DataQueue, visible: uint, bytes: uint, time: uint64, checkdata: any): boolean;
    }
    interface GstDataQueueEmptyCallback {
        (queue: Gst.DataQueue, checkdata: any): void;
    }
    interface GstDataQueueFullCallback {
        (queue: Gst.DataQueue, checkdata: any): void;
    }
    interface GstTypeFindHelperGetRangeFunction {
        (obj: Gst.Object, offset: uint64, length: uint, buffer: Gst.Buffer): Gst.FlowReturn;
    }
    /**
     * The #GstElement flags that a basesrc element may have.
     */
    enum SrcFlags {
        STARTED,
        FLAG_LAST,
    }
    module GstAdapter {
        // Constructor properties interface
    }

    /**
     * The opaque #GstAdapter data structure.
     */
    class GstAdapter extends GObject.Object {
        // Own fields of GstBase-0.10.GstAdapter

        object: GObject.Object;
        buflist: any[];
        size: uint;
        skip: uint;
        assembled_data: any;
        assembled_size: uint;
        assembled_len: uint;
        buflist_end: any[];

        // Constructors of GstBase-0.10.GstAdapter

        static ['new'](): GstAdapter;

        // Owm methods of GstBase-0.10.GstAdapter

        clear(): void;
        push(buf: Gst.Buffer): void;
        peek(size: uint): uint8[];
        copy(dest: uint8[], offset: uint, size: uint): void;
        flush(flush: uint): void;
        take(nbytes: uint): uint8[];
        take_buffer(nbytes: uint): Gst.Buffer;
        available(): uint;
        available_fast(): uint;
        prev_timestamp(): Gst.ClockTime;
        masked_scan_uint32(mask: number, pattern: number, offset: uint, size: uint): uint;
        masked_scan_uint32_peek(mask: number, pattern: number, offset: uint, size: uint): uint;
    }

    module GstCollectPads {
        // Constructor properties interface
    }

    /**
     * Collectpads object.
     * Note that `data` doesn't contain the complete #GstCollectData list
     * at all times and should not be used for iterating them.
     */
    class GstCollectPads extends Gst.Object {
        // Own fields of GstBase-0.10.GstCollectPads

        object: Gst.Object;
        data: any[];
        cookie: number;
        func: Gst.CollectPadsFunction;
        user_data: any;
        numpads: uint;
        queuedpads: uint;
        eospads: uint;
        started: boolean;

        // Constructors of GstBase-0.10.GstCollectPads

        static ['new'](): GstCollectPads;

        // Owm methods of GstBase-0.10.GstCollectPads

        set_function(func: Gst.CollectPadsFunction, user_data: any): void;
        set_clip_function(clipfunc: Gst.CollectPadsClipFunction, user_data: any): void;
        add_pad(pad: Gst.Pad, size: uint): Gst.CollectData;
        add_pad_full(pad: Gst.Pad, size: uint, destroy_notify: Gst.CollectDataDestroyNotify): Gst.CollectData;
        remove_pad(pad: Gst.Pad): boolean;
        is_active(pad: Gst.Pad): boolean;
        collect(): Gst.FlowReturn;
        collect_range(offset: uint64, length: uint): Gst.FlowReturn;
        start(): void;
        stop(): void;
        set_flushing(flushing: boolean): void;
        peek(data: Gst.CollectData): Gst.Buffer;
        pop(data: Gst.CollectData): Gst.Buffer;
        available(): uint;
        read(data: Gst.CollectData, size: uint): uint;
        read_buffer(data: Gst.CollectData, size: uint): Gst.Buffer;
        take_buffer(data: Gst.CollectData, size: uint): Gst.Buffer;
        flush(data: Gst.CollectData, size: uint): uint;
    }

    module GstDataQueue {
        // Signal callback interfaces

        interface Empty {
            (): void;
        }

        interface Full {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * Opaque #GstDataQueue structure.
     */
    class GstDataQueue extends GObject.Object {
        // Own properties of GstBase-0.10.GstDataQueue

        readonly current_level_bytes: uint;
        readonly currentLevelBytes: uint;
        readonly current_level_time: uint64;
        readonly currentLevelTime: uint64;
        readonly current_level_visible: uint;
        readonly currentLevelVisible: uint;

        // Own fields of GstBase-0.10.GstDataQueue

        object: GObject.Object;
        queue: GLib.Queue;
        checkfull: Gst.DataQueueCheckFullFunction;
        checkdata: any;
        flushing: boolean;
        fullcallback: Gst.DataQueueFullCallback;
        emptycallback: Gst.DataQueueEmptyCallback;

        // Constructors of GstBase-0.10.GstDataQueue

        static ['new'](checkfull: Gst.DataQueueCheckFullFunction): GstDataQueue;

        static new_full(
            checkfull: Gst.DataQueueCheckFullFunction,
            fullcallback: Gst.DataQueueFullCallback,
            emptycallback: Gst.DataQueueEmptyCallback,
        ): GstDataQueue;

        // Owm methods of GstBase-0.10.GstDataQueue

        push(item: Gst.DataQueueItem): boolean;
        pop(item: Gst.DataQueueItem): boolean;
        flush(): void;
        set_flushing(flushing: boolean): void;
        drop_head(type: GObject.GType): boolean;
        is_full(): boolean;
        is_empty(): boolean;
        get_level(level: Gst.DataQueueSize): void;
        limits_changed(): void;
    }

    module GstPushSrc {
        // Constructor properties interface
    }

    /**
     * The opaque #GstPushSrc data structure.
     */
    class GstPushSrc extends Src {}

    module Sink {
        // Constructor properties interface
    }

    /**
     * The opaque #GstBaseSink data structure.
     */
    abstract class Sink extends Gst.Element {
        // Own properties of GstBase-0.10.Sink

        async: boolean;
        blocksize: uint;
        enable_last_buffer: boolean;
        enableLastBuffer: boolean;
        readonly last_buffer: Gst.Buffer;
        readonly lastBuffer: Gst.Buffer;
        max_lateness: int64;
        maxLateness: int64;
        preroll_queue_len: uint;
        prerollQueueLen: uint;
        qos: boolean;
        render_delay: uint64;
        renderDelay: uint64;
        sync: boolean;
        ts_offset: int64;
        tsOffset: int64;

        // Own fields of GstBase-0.10.Sink

        element: Gst.Element;
        sinkpad: Gst.Pad;
        pad_mode: Gst.ActivateMode;
        offset: uint64;
        can_activate_pull: boolean;
        can_activate_push: boolean;
        preroll_queue: GLib.Queue;
        preroll_queue_max_len: int;
        preroll_queued: int;
        buffers_queued: int;
        events_queued: int;
        eos: boolean;
        eos_queued: boolean;
        need_preroll: boolean;
        have_preroll: boolean;
        playing_async: boolean;
        have_newsegment: boolean;
        clock_id: Gst.ClockID;
        end_time: Gst.ClockTime;
        flushing: boolean;

        // Owm methods of GstBase-0.10.Sink

        do_preroll(obj: Gst.MiniObject): Gst.FlowReturn;
        wait_preroll(): Gst.FlowReturn;
        set_sync(sync: boolean): void;
        get_sync(): boolean;
        set_max_lateness(max_lateness: int64): void;
        get_max_lateness(): int64;
        set_qos_enabled(enabled: boolean): void;
        is_qos_enabled(): boolean;
        set_async_enabled(enabled: boolean): void;
        is_async_enabled(): boolean;
        set_ts_offset(offset: Gst.ClockTimeDiff): void;
        get_ts_offset(): Gst.ClockTimeDiff;
        get_last_buffer(): Gst.Buffer;
        set_last_buffer_enabled(enable: boolean): void;
        is_last_buffer_enabled(): boolean;
        query_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): boolean;
        get_latency(): Gst.ClockTime;
        set_render_delay(delay: Gst.ClockTime): void;
        get_render_delay(): Gst.ClockTime;
        set_blocksize(blocksize: uint): void;
        get_blocksize(): uint;
        wait_clock(time: Gst.ClockTime, jitter: Gst.ClockTimeDiff): Gst.ClockReturn;
        wait_eos(time: Gst.ClockTime, jitter: Gst.ClockTimeDiff): Gst.FlowReturn;
    }

    module Src {
        // Constructor properties interface
    }

    /**
     * The opaque #GstBaseSrc data structure.
     */
    abstract class Src extends Gst.Element {
        // Own properties of GstBase-0.10.Src

        blocksize: ulong;
        do_timestamp: boolean;
        doTimestamp: boolean;
        num_buffers: int;
        numBuffers: int;
        typefind: boolean;

        // Own fields of GstBase-0.10.Src

        element: Gst.Element;
        srcpad: Gst.Pad;
        live_running: boolean;
        can_activate_push: boolean;
        pad_mode: Gst.ActivateMode;
        seekable: boolean;
        random_access: boolean;
        clock_id: Gst.ClockID;
        end_time: Gst.ClockTime;
        need_newsegment: boolean;
        offset: uint64;
        size: uint64;
        num_buffers_left: int;

        // Owm methods of GstBase-0.10.Src

        wait_playing(): Gst.FlowReturn;
        set_live(live: boolean): void;
        is_live(): boolean;
        set_format(format: Gst.Format): void;
        query_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): boolean;
        set_blocksize(blocksize: ulong): void;
        get_blocksize(): ulong;
        set_do_timestamp(timestamp: boolean): void;
        get_do_timestamp(): boolean;
        new_seamless_segment(start: int64, stop: int64, position: int64): boolean;
    }

    module Transform {
        // Constructor properties interface
    }

    /**
     * The opaque #GstBaseTransform data structure.
     */
    abstract class Transform extends Gst.Element {
        // Own properties of GstBase-0.10.Transform

        qos: boolean;

        // Own fields of GstBase-0.10.Transform

        element: Gst.Element;
        sinkpad: Gst.Pad;
        srcpad: Gst.Pad;
        passthrough: boolean;
        always_in_place: boolean;
        cache_caps1_size: uint;
        cache_caps2_size: uint;
        have_same_caps: boolean;
        delay_configure: boolean;
        pending_configure: boolean;
        negotiated: boolean;
        have_newsegment: boolean;

        // Owm methods of GstBase-0.10.Transform

        set_passthrough(passthrough: boolean): void;
        is_passthrough(): boolean;
        set_in_place(in_place: boolean): void;
        is_in_place(): boolean;
        update_qos(proportion: number, diff: Gst.ClockTimeDiff, timestamp: Gst.ClockTime): void;
        set_qos_enabled(enabled: boolean): void;
        is_qos_enabled(): boolean;
        set_gap_aware(gap_aware: boolean): void;
        suggest(caps: Gst.Caps, size: uint): void;
        reconfigure(): void;
    }

    class GstAdapterClass {}

    class GstAdapterPrivate {}

    /**
     * A bit reader instance.
     */
    class GstBitReader {
        // Own fields of GstBase-0.10.GstBitReader

        data: any;
        size: uint;
        'byte': uint;
        bit: uint;

        // Constructors of GstBase-0.10.GstBitReader

        constructor(data: uint8[], size: uint);

        static ['new'](data: uint8[], size: uint): GstBitReader;

        static new_from_buffer(buffer: Gst.Buffer): GstBitReader;

        // Owm methods of GstBase-0.10.GstBitReader

        free(): void;
        init(data: uint8[], size: uint): void;
        init_from_buffer(buffer: Gst.Buffer): void;
        set_pos(pos: uint): boolean;
        get_pos(): uint;
        get_remaining(): uint;
        get_size(): uint;
        skip(nbits: uint): boolean;
        skip_to_byte(): boolean;
        get_bits_uint8(val: uint8[], nbits: uint): boolean;
        get_bits_uint16(nbits: uint): boolean;
        get_bits_uint32(nbits: uint): boolean;
        get_bits_uint64(nbits: uint): boolean;
        peek_bits_uint8(val: uint8[], nbits: uint): boolean;
        peek_bits_uint16(nbits: uint): boolean;
        peek_bits_uint32(nbits: uint): boolean;
        peek_bits_uint64(nbits: uint): boolean;
    }

    /**
     * A byte reader instance.
     */
    class GstByteReader {
        // Own fields of GstBase-0.10.GstByteReader

        data: any;
        size: uint;
        'byte': uint;

        // Constructors of GstBase-0.10.GstByteReader

        constructor(data: uint8[], size: uint);

        static ['new'](data: uint8[], size: uint): GstByteReader;

        static new_from_buffer(buffer: Gst.Buffer): GstByteReader;

        // Owm methods of GstBase-0.10.GstByteReader

        free(): void;
        init(data: uint8[], size: uint): void;
        init_from_buffer(buffer: Gst.Buffer): void;
        set_pos(pos: uint): boolean;
        get_pos(): uint;
        get_remaining(): uint;
        get_size(): uint;
        skip(nbytes: uint): boolean;
        get_uint8(val: uint8[]): boolean;
        get_int8(): boolean;
        get_uint16_le(): boolean;
        get_int16_le(): boolean;
        get_uint16_be(): boolean;
        get_int16_be(): boolean;
        get_uint24_le(): boolean;
        get_int24_le(): boolean;
        get_uint24_be(): boolean;
        get_int24_be(): boolean;
        get_uint32_le(): boolean;
        get_int32_le(): boolean;
        get_uint32_be(): boolean;
        get_int32_be(): boolean;
        get_uint64_le(): boolean;
        get_int64_le(): boolean;
        get_uint64_be(): boolean;
        get_int64_be(): boolean;
        peek_uint8(val: uint8[]): boolean;
        peek_int8(): boolean;
        peek_uint16_le(): boolean;
        peek_int16_le(): boolean;
        peek_uint16_be(): boolean;
        peek_int16_be(): boolean;
        peek_uint24_le(): boolean;
        peek_int24_le(): boolean;
        peek_uint24_be(): boolean;
        peek_int24_be(): boolean;
        peek_uint32_le(): boolean;
        peek_int32_le(): boolean;
        peek_uint32_be(): boolean;
        peek_int32_be(): boolean;
        peek_uint64_le(): boolean;
        peek_int64_le(): boolean;
        peek_uint64_be(): boolean;
        peek_int64_be(): boolean;
        get_float32_le(): boolean;
        get_float32_be(): boolean;
        get_float64_le(): boolean;
        get_float64_be(): boolean;
        peek_float32_le(): boolean;
        peek_float32_be(): boolean;
        peek_float64_le(): boolean;
        peek_float64_be(): boolean;
        dup_data(size: uint): boolean;
        get_data(size: uint): boolean;
        peek_data(size: uint): boolean;
        dup_string_utf8(str: string[]): boolean;
        dup_string_utf16(): boolean;
        dup_string_utf32(): boolean;
        skip_string_utf8(): boolean;
        skip_string_utf16(): boolean;
        skip_string_utf32(): boolean;
        get_string_utf8(str: string[]): boolean;
        peek_string_utf8(str: string[]): boolean;
        masked_scan_uint32(mask: number, pattern: number, offset: uint, size: uint): uint;
    }

    /**
     * A byte writer instance.
     */
    class GstByteWriter {
        // Own fields of GstBase-0.10.GstByteWriter

        alloc_size: uint;
        fixed: boolean;
        owned: boolean;

        // Constructors of GstBase-0.10.GstByteWriter

        constructor(
            properties?: Partial<{
                parent: Gst.ByteReader;
                alloc_size: uint;
                fixed: boolean;
                owned: boolean;
            }>,
        );

        static ['new'](): GstByteWriter;

        static new_with_size(size: uint, fixed: boolean): GstByteWriter;

        static new_with_data(data: uint8[], size: uint, initialized: boolean): GstByteWriter;

        static new_with_buffer(buffer: Gst.Buffer, initialized: boolean): GstByteWriter;

        // Owm methods of GstBase-0.10.GstByteWriter

        init(): void;
        init_with_size(size: uint, fixed: boolean): void;
        init_with_data(data: uint8[], size: uint, initialized: boolean): void;
        init_with_buffer(buffer: Gst.Buffer, initialized: boolean): void;
        free(): void;
        free_and_get_data(): uint8[];
        free_and_get_buffer(): Gst.Buffer;
        reset(): void;
        reset_and_get_data(): uint8[];
        reset_and_get_buffer(): Gst.Buffer;
        get_remaining(): uint;
        ensure_free_space(size: uint): boolean;
        put_uint8(val: uint8): boolean;
        put_int8(val: int8): boolean;
        put_uint16_be(val: uint16): boolean;
        put_uint16_le(val: uint16): boolean;
        put_int16_be(val: int16): boolean;
        put_int16_le(val: int16): boolean;
        put_uint24_be(val: number): boolean;
        put_uint24_le(val: number): boolean;
        put_int24_be(val: number): boolean;
        put_int24_le(val: number): boolean;
        put_uint32_be(val: number): boolean;
        put_uint32_le(val: number): boolean;
        put_int32_be(val: number): boolean;
        put_int32_le(val: number): boolean;
        put_uint64_be(val: uint64): boolean;
        put_uint64_le(val: uint64): boolean;
        put_int64_be(val: int64): boolean;
        put_int64_le(val: int64): boolean;
        put_float32_be(val: float): boolean;
        put_float32_le(val: float): boolean;
        put_float64_be(val: number): boolean;
        put_float64_le(val: number): boolean;
        put_data(data: uint8[], size: uint): boolean;
        fill(value: uint8, size: uint): boolean;
        put_string_utf8(data: string): boolean;
        put_string_utf16(): boolean;
        put_string_utf32(): boolean;
    }

    /**
     * Structure used by the collect_pads.
     */
    class GstCollectData {
        // Own fields of GstBase-0.10.GstCollectData

        collect: Gst.CollectPads;
        pad: Gst.Pad;
        buffer: Gst.Buffer;
        pos: uint;
    }

    class GstCollectPadsClass {}

    class GstCollectPadsPrivate {}

    class GstDataQueueClass {}

    /**
     * Structure used by #GstDataQueue. You can supply a different structure, as
     * long as the top of the structure is identical to this structure.
     */
    class GstDataQueueItem {
        // Own fields of GstBase-0.10.GstDataQueueItem

        object: Gst.MiniObject;
        size: uint;
        duration: uint64;
        visible: boolean;
        destroy: GLib.DestroyNotify;
    }

    /**
     * Structure describing the size of a queue.
     */
    class GstDataQueueSize {
        // Own fields of GstBase-0.10.GstDataQueueSize

        visible: uint;
        bytes: uint;
        time: uint64;
    }

    class GstPushSrcClass {}

    /**
     * Subclasses can override any of the available virtual methods or not, as
     * needed. At the minimum, the `render` method should be overridden to
     * output/present buffers.
     */
    class SinkClass {}

    class SinkPrivate {}

    /**
     * Subclasses can override any of the available virtual methods or not, as
     * needed. At the minimum, the `create` method should be overridden to produce
     * buffers.
     */
    class SrcClass {}

    class SrcPrivate {}

    /**
     * Subclasses can override any of the available virtual methods or not, as
     * needed. At minimum either `transform` or `transform_ip` need to be overridden.
     * If the element can overwrite the input data with the results (data is of the
     * same type and quantity) it should provide `transform_ip`.
     */
    class TransformClass {
        // Own fields of GstBase-0.10.TransformClass

        passthrough_on_same_caps: boolean;
    }

    class TransformPrivate {}

    // Workaround
    /** @ignore */
    export module BaseSink {
        export type ConstructorProperties = Gst.BaseSink.ConstructorProperties;
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

export default GstBase;
// END
