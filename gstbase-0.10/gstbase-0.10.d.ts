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
import type libxml2 from '@girs/libxml2-2.0';
import type Gst from '@girs/gst-0.10';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstBase {
    // Workaround
    /** @ignore */
    export module BaseSink {
        export type ConstructorProps = Gst.BaseSink.ConstructorProps;
    }

    /**
     * GstBase-0.10
     */

    const TRANSFORM_SINK_NAME: string;
    const TRANSFORM_SRC_NAME: string;
    function gst_type_find_helper(src: Gst.Pad, size: number): Gst.Caps;
    function gst_type_find_helper_for_buffer(
        obj: Gst.Object,
        buf: Gst.Buffer,
        prob: Gst.TypeFindProbability | null,
    ): Gst.Caps;
    function gst_type_find_helper_for_extension(obj: Gst.Object, extension: string): Gst.Caps;
    function gst_type_find_helper_get_range(
        obj: Gst.Object,
        func: Gst.TypeFindHelperGetRangeFunction,
        size: number,
        prob: Gst.TypeFindProbability | null,
    ): Gst.Caps;
    function gst_type_find_helper_get_range_ext(
        obj: Gst.Object,
        func: Gst.TypeFindHelperGetRangeFunction,
        size: number,
        extension: string,
        prob: Gst.TypeFindProbability | null,
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
        (queue: Gst.DataQueue, visible: number, bytes: number, time: number, checkdata: any): boolean;
    }
    interface GstDataQueueEmptyCallback {
        (queue: Gst.DataQueue, checkdata: any): void;
    }
    interface GstDataQueueFullCallback {
        (queue: Gst.DataQueue, checkdata: any): void;
    }
    interface GstTypeFindHelperGetRangeFunction {
        (obj: Gst.Object, offset: number, length: number, buffer: Gst.Buffer): Gst.FlowReturn;
    }
    /**
     * The #GstElement flags that a basesrc element may have.
     */

    /**
     * The #GstElement flags that a basesrc element may have.
     */
    export namespace SrcFlags {
        export const $gtype: GObject.GType<SrcFlags>;
    }

    enum SrcFlags {
        STARTED,
        FLAG_LAST,
    }
    namespace GstAdapter {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * The opaque #GstAdapter data structure.
     */
    class GstAdapter extends GObject.Object {
        static $gtype: GObject.GType<GstAdapter>;
        declare static readonly __signalSignatures: GstAdapter.SignalSignatures;

        // Fields

        object: GObject.Object;
        buflist: any[];
        size: number;
        skip: number;
        assembled_data: any;
        assembled_size: number;
        assembled_len: number;
        buflist_end: any[];

        // Constructors

        constructor(properties?: Partial<GstAdapter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): GstAdapter;

        // Methods

        clear(): void;
        push(buf: Gst.Buffer): void;
        peek(size: number): number[];
        copy(dest: number[], offset: number, size: number): void;
        flush(flush: number): void;
        take(nbytes: number): number[];
        take_buffer(nbytes: number): Gst.Buffer;
        available(): number;
        available_fast(): number;
        prev_timestamp(): [Gst.ClockTime, number];
        masked_scan_uint32(mask: number, pattern: number, offset: number, size: number): number;
        masked_scan_uint32_peek(mask: number, pattern: number, offset: number, size: number): [number, number];
    }

    namespace GstCollectPads {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }

    /**
     * Collectpads object.
     * Note that `data` doesn't contain the complete #GstCollectData list
     * at all times and should not be used for iterating them.
     */
    class GstCollectPads extends Gst.Object {
        static $gtype: GObject.GType<GstCollectPads>;
        declare static readonly __signalSignatures: GstCollectPads.SignalSignatures;

        // Fields

        object: Gst.Object;
        data: any[];
        cookie: number;
        func: Gst.CollectPadsFunction;
        user_data: any;
        numpads: number;
        queuedpads: number;
        eospads: number;
        started: boolean;

        // Constructors

        constructor(properties?: Partial<GstCollectPads.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): GstCollectPads;

        // Methods

        set_function(func: Gst.CollectPadsFunction, user_data: any): void;
        set_clip_function(clipfunc: Gst.CollectPadsClipFunction, user_data: any): void;
        add_pad(pad: Gst.Pad, size: number): Gst.CollectData;
        add_pad_full(pad: Gst.Pad, size: number, destroy_notify: Gst.CollectDataDestroyNotify): Gst.CollectData;
        remove_pad(pad: Gst.Pad): boolean;
        is_active(pad: Gst.Pad): boolean;
        collect(): Gst.FlowReturn;
        collect_range(offset: number, length: number): Gst.FlowReturn;
        start(): void;
        stop(): void;
        set_flushing(flushing: boolean): void;
        peek(data: Gst.CollectData): Gst.Buffer;
        pop(data: Gst.CollectData): Gst.Buffer;
        available(): number;
        read(data: Gst.CollectData, size: number): [number, number];
        read_buffer(data: Gst.CollectData, size: number): Gst.Buffer;
        take_buffer(data: Gst.CollectData, size: number): Gst.Buffer;
        flush(data: Gst.CollectData, size: number): number;
    }

    namespace GstDataQueue {
        // Signal callback interfaces

        interface Empty {
            (): void;
        }

        interface Full {
            (): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            empty: Empty;
            full: Full;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            current_level_bytes: number;
            currentLevelBytes: number;
            current_level_time: number;
            currentLevelTime: number;
            current_level_visible: number;
            currentLevelVisible: number;
        }
    }

    /**
     * Opaque #GstDataQueue structure.
     */
    class GstDataQueue extends GObject.Object {
        static $gtype: GObject.GType<GstDataQueue>;
        declare static readonly __signalSignatures: GstDataQueue.SignalSignatures;

        // Properties

        get current_level_bytes(): number;
        get currentLevelBytes(): number;
        get current_level_time(): number;
        get currentLevelTime(): number;
        get current_level_visible(): number;
        get currentLevelVisible(): number;

        // Fields

        object: GObject.Object;
        queue: GLib.Queue;
        cur_level: Gst.DataQueueSize;
        checkfull: Gst.DataQueueCheckFullFunction;
        checkdata: any;
        flushing: boolean;
        fullcallback: Gst.DataQueueFullCallback;
        emptycallback: Gst.DataQueueEmptyCallback;

        // Constructors

        constructor(properties?: Partial<GstDataQueue.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](checkfull: Gst.DataQueueCheckFullFunction): GstDataQueue;

        static new_full(
            checkfull: Gst.DataQueueCheckFullFunction,
            fullcallback: Gst.DataQueueFullCallback,
            emptycallback: Gst.DataQueueEmptyCallback,
        ): GstDataQueue;

        // Signals

        connect<K extends keyof GstDataQueue.SignalSignatures>(
            signal: K,
            callback: GstDataQueue.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof GstDataQueue.SignalSignatures>(
            signal: K,
            callback: GstDataQueue.SignalSignatures[K],
        ): number;
        emit<K extends keyof GstDataQueue.SignalSignatures>(
            signal: K,
            ...args: Parameters<GstDataQueue.SignalSignatures[K]>
        ): void;
        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'empty', callback: (_source: this) => void): number;
        connect_after(signal: 'empty', callback: (_source: this) => void): number;
        emit(signal: 'empty'): void;
        connect(signal: 'full', callback: (_source: this) => void): number;
        connect_after(signal: 'full', callback: (_source: this) => void): number;
        emit(signal: 'full'): void;

        // Methods

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

    namespace GstPushSrc {
        // Signal signatures
        interface SignalSignatures extends Src.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Src.ConstructorProps {}
    }

    /**
     * The opaque #GstPushSrc data structure.
     */
    class GstPushSrc extends Src {
        static $gtype: GObject.GType<GstPushSrc>;
        declare static readonly __signalSignatures: GstPushSrc.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GstPushSrc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    namespace Sink {
        // Signal signatures
        interface SignalSignatures extends Gst.Element.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Gst.Element.ConstructorProps {
            async: boolean;
            blocksize: number;
            enable_last_buffer: boolean;
            enableLastBuffer: boolean;
            last_buffer: Gst.Buffer;
            lastBuffer: Gst.Buffer;
            max_lateness: number;
            maxLateness: number;
            preroll_queue_len: number;
            prerollQueueLen: number;
            qos: boolean;
            render_delay: number;
            renderDelay: number;
            sync: boolean;
            ts_offset: number;
            tsOffset: number;
        }
    }

    /**
     * The opaque #GstBaseSink data structure.
     */
    abstract class Sink extends Gst.Element {
        static $gtype: GObject.GType<Sink>;
        declare static readonly __signalSignatures: Sink.SignalSignatures;

        // Properties

        get async(): boolean;
        set async(val: boolean);
        get blocksize(): number;
        set blocksize(val: number);
        get enable_last_buffer(): boolean;
        set enable_last_buffer(val: boolean);
        get enableLastBuffer(): boolean;
        set enableLastBuffer(val: boolean);
        get last_buffer(): Gst.Buffer;
        get lastBuffer(): Gst.Buffer;
        get max_lateness(): number;
        set max_lateness(val: number);
        get maxLateness(): number;
        set maxLateness(val: number);
        get preroll_queue_len(): number;
        set preroll_queue_len(val: number);
        get prerollQueueLen(): number;
        set prerollQueueLen(val: number);
        get qos(): boolean;
        set qos(val: boolean);
        get render_delay(): number;
        set render_delay(val: number);
        get renderDelay(): number;
        set renderDelay(val: number);
        get sync(): boolean;
        set sync(val: boolean);
        get ts_offset(): number;
        set ts_offset(val: number);
        get tsOffset(): number;
        set tsOffset(val: number);

        // Fields

        element: Gst.Element;
        sinkpad: Gst.Pad;
        pad_mode: Gst.ActivateMode;
        offset: number;
        can_activate_pull: boolean;
        can_activate_push: boolean;
        preroll_queue: GLib.Queue;
        preroll_queue_max_len: number;
        preroll_queued: number;
        buffers_queued: number;
        events_queued: number;
        eos: boolean;
        eos_queued: boolean;
        need_preroll: boolean;
        have_preroll: boolean;
        playing_async: boolean;
        have_newsegment: boolean;
        clock_id: Gst.ClockID;
        end_time: Gst.ClockTime;
        flushing: boolean;

        // Constructors

        constructor(properties?: Partial<Sink.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        do_preroll(obj: Gst.MiniObject): Gst.FlowReturn;
        wait_preroll(): Gst.FlowReturn;
        set_sync(sync: boolean): void;
        get_sync(): boolean;
        set_max_lateness(max_lateness: number): void;
        get_max_lateness(): number;
        set_qos_enabled(enabled: boolean): void;
        is_qos_enabled(): boolean;
        set_async_enabled(enabled: boolean): void;
        is_async_enabled(): boolean;
        set_ts_offset(offset: Gst.ClockTimeDiff): void;
        get_ts_offset(): Gst.ClockTimeDiff;
        get_last_buffer(): Gst.Buffer;
        set_last_buffer_enabled(enable: boolean): void;
        is_last_buffer_enabled(): boolean;
        query_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): [boolean, boolean, boolean];
        get_latency(): Gst.ClockTime;
        set_render_delay(delay: Gst.ClockTime): void;
        get_render_delay(): Gst.ClockTime;
        set_blocksize(blocksize: number): void;
        get_blocksize(): number;
        wait_clock(time: Gst.ClockTime, jitter: Gst.ClockTimeDiff): Gst.ClockReturn;
        wait_eos(time: Gst.ClockTime, jitter: Gst.ClockTimeDiff): Gst.FlowReturn;
    }

    namespace Src {
        // Signal signatures
        interface SignalSignatures extends Gst.Element.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Gst.Element.ConstructorProps {
            blocksize: never;
            do_timestamp: boolean;
            doTimestamp: boolean;
            num_buffers: number;
            numBuffers: number;
            typefind: boolean;
        }
    }

    /**
     * The opaque #GstBaseSrc data structure.
     */
    abstract class Src extends Gst.Element {
        static $gtype: GObject.GType<Src>;
        declare static readonly __signalSignatures: Src.SignalSignatures;

        // Properties

        get blocksize(): never;
        set blocksize(val: never);
        get do_timestamp(): boolean;
        set do_timestamp(val: boolean);
        get doTimestamp(): boolean;
        set doTimestamp(val: boolean);
        get num_buffers(): number;
        set num_buffers(val: number);
        get numBuffers(): number;
        set numBuffers(val: number);
        get typefind(): boolean;
        set typefind(val: boolean);

        // Fields

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
        offset: number;
        size: number;
        num_buffers_left: number;

        // Constructors

        constructor(properties?: Partial<Src.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        wait_playing(): Gst.FlowReturn;
        set_live(live: boolean): void;
        is_live(): boolean;
        set_format(format: Gst.Format | null): void;
        query_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): [boolean, boolean];
        set_blocksize(blocksize: never): void;
        get_blocksize(): never;
        set_do_timestamp(timestamp: boolean): void;
        get_do_timestamp(): boolean;
        new_seamless_segment(start: number, stop: number, position: number): boolean;
    }

    namespace Transform {
        // Signal signatures
        interface SignalSignatures extends Gst.Element.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Gst.Element.ConstructorProps {
            qos: boolean;
        }
    }

    /**
     * The opaque #GstBaseTransform data structure.
     */
    abstract class Transform extends Gst.Element {
        static $gtype: GObject.GType<Transform>;
        declare static readonly __signalSignatures: Transform.SignalSignatures;

        // Properties

        get qos(): boolean;
        set qos(val: boolean);

        // Fields

        element: Gst.Element;
        sinkpad: Gst.Pad;
        srcpad: Gst.Pad;
        passthrough: boolean;
        always_in_place: boolean;
        cache_caps1_size: number;
        cache_caps2_size: number;
        have_same_caps: boolean;
        delay_configure: boolean;
        pending_configure: boolean;
        negotiated: boolean;
        have_newsegment: boolean;

        // Constructors

        constructor(properties?: Partial<Transform.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        set_passthrough(passthrough: boolean): void;
        is_passthrough(): boolean;
        set_in_place(in_place: boolean): void;
        is_in_place(): boolean;
        update_qos(proportion: number, diff: Gst.ClockTimeDiff, timestamp: Gst.ClockTime): void;
        set_qos_enabled(enabled: boolean): void;
        is_qos_enabled(): boolean;
        set_gap_aware(gap_aware: boolean): void;
        suggest(caps: Gst.Caps, size: number): void;
        reconfigure(): void;
    }

    type GstAdapterClass = typeof GstAdapter;
    class GstAdapterPrivate {
        static $gtype: GObject.GType<GstAdapterPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * A bit reader instance.
     */
    class GstBitReader {
        static $gtype: GObject.GType<GstBitReader>;

        // Fields

        data: any;
        size: number;
        'byte': number;
        bit: number;

        // Constructors

        constructor(
            properties?: Partial<{
                data: any;
                size: number;
                byte: number;
                bit: number;
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](data: number[], size: number): GstBitReader;

        static new_from_buffer(buffer: Gst.Buffer): GstBitReader;

        // Methods

        free(): void;
        init(data: number[], size: number): void;
        init_from_buffer(buffer: Gst.Buffer): void;
        set_pos(pos: number): boolean;
        get_pos(): number;
        get_remaining(): number;
        get_size(): number;
        skip(nbits: number): boolean;
        skip_to_byte(): boolean;
        get_bits_uint8(val: number[], nbits: number): boolean;
        get_bits_uint16(nbits: number): [boolean, number];
        get_bits_uint32(nbits: number): [boolean, number];
        get_bits_uint64(nbits: number): [boolean, number];
        peek_bits_uint8(val: number[], nbits: number): boolean;
        peek_bits_uint16(nbits: number): [boolean, number];
        peek_bits_uint32(nbits: number): [boolean, number];
        peek_bits_uint64(nbits: number): [boolean, number];
    }

    /**
     * A byte reader instance.
     */
    class GstByteReader {
        static $gtype: GObject.GType<GstByteReader>;

        // Fields

        data: any;
        size: number;
        'byte': number;

        // Constructors

        constructor(
            properties?: Partial<{
                data: any;
                size: number;
                byte: number;
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](data: number[], size: number): GstByteReader;

        static new_from_buffer(buffer: Gst.Buffer): GstByteReader;

        // Methods

        free(): void;
        init(data: number[], size: number): void;
        init_from_buffer(buffer: Gst.Buffer): void;
        set_pos(pos: number): boolean;
        get_pos(): number;
        get_remaining(): number;
        get_size(): number;
        skip(nbytes: number): boolean;
        get_uint8(val: number[]): boolean;
        get_int8(): [boolean, number];
        get_uint16_le(): [boolean, number];
        get_int16_le(): [boolean, number];
        get_uint16_be(): [boolean, number];
        get_int16_be(): [boolean, number];
        get_uint24_le(): [boolean, number];
        get_int24_le(): [boolean, number];
        get_uint24_be(): [boolean, number];
        get_int24_be(): [boolean, number];
        get_uint32_le(): [boolean, number];
        get_int32_le(): [boolean, number];
        get_uint32_be(): [boolean, number];
        get_int32_be(): [boolean, number];
        get_uint64_le(): [boolean, number];
        get_int64_le(): [boolean, number];
        get_uint64_be(): [boolean, number];
        get_int64_be(): [boolean, number];
        peek_uint8(val: number[]): boolean;
        peek_int8(): [boolean, number];
        peek_uint16_le(): [boolean, number];
        peek_int16_le(): [boolean, number];
        peek_uint16_be(): [boolean, number];
        peek_int16_be(): [boolean, number];
        peek_uint24_le(): [boolean, number];
        peek_int24_le(): [boolean, number];
        peek_uint24_be(): [boolean, number];
        peek_int24_be(): [boolean, number];
        peek_uint32_le(): [boolean, number];
        peek_int32_le(): [boolean, number];
        peek_uint32_be(): [boolean, number];
        peek_int32_be(): [boolean, number];
        peek_uint64_le(): [boolean, number];
        peek_int64_le(): [boolean, number];
        peek_uint64_be(): [boolean, number];
        peek_int64_be(): [boolean, number];
        get_float32_le(): [boolean, number];
        get_float32_be(): [boolean, number];
        get_float64_le(): [boolean, number];
        get_float64_be(): [boolean, number];
        peek_float32_le(): [boolean, number];
        peek_float32_be(): [boolean, number];
        peek_float64_le(): [boolean, number];
        peek_float64_be(): [boolean, number];
        dup_data(size: number): [boolean, number];
        get_data(size: number): [boolean, number];
        peek_data(size: number): [boolean, number];
        dup_string_utf8(str: string[]): boolean;
        dup_string_utf16(): [boolean, number];
        dup_string_utf32(): [boolean, number];
        skip_string_utf8(): boolean;
        skip_string_utf16(): boolean;
        skip_string_utf32(): boolean;
        get_string_utf8(str: string[]): boolean;
        peek_string_utf8(str: string[]): boolean;
        masked_scan_uint32(mask: number, pattern: number, offset: number, size: number): number;
    }

    /**
     * A byte writer instance.
     */
    class GstByteWriter {
        static $gtype: GObject.GType<GstByteWriter>;

        // Fields

        alloc_size: number;
        fixed: boolean;
        owned: boolean;

        // Constructors

        constructor(
            properties?: Partial<{
                parent: Gst.ByteReader;
                alloc_size: number;
                fixed: boolean;
                owned: boolean;
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](): GstByteWriter;

        static new_with_size(size: number, fixed: boolean): GstByteWriter;

        static new_with_data(data: number[], size: number, initialized: boolean): GstByteWriter;

        static new_with_buffer(buffer: Gst.Buffer, initialized: boolean): GstByteWriter;

        // Methods

        init(): void;
        init_with_size(size: number, fixed: boolean): void;
        init_with_data(data: number[], size: number, initialized: boolean): void;
        init_with_buffer(buffer: Gst.Buffer, initialized: boolean): void;
        free(): void;
        free_and_get_data(): number[];
        free_and_get_buffer(): Gst.Buffer;
        reset(): void;
        reset_and_get_data(): number[];
        reset_and_get_buffer(): Gst.Buffer;
        get_remaining(): number;
        ensure_free_space(size: number): boolean;
        put_uint8(val: number): boolean;
        put_int8(val: number): boolean;
        put_uint16_be(val: number): boolean;
        put_uint16_le(val: number): boolean;
        put_int16_be(val: number): boolean;
        put_int16_le(val: number): boolean;
        put_uint24_be(val: number): boolean;
        put_uint24_le(val: number): boolean;
        put_int24_be(val: number): boolean;
        put_int24_le(val: number): boolean;
        put_uint32_be(val: number): boolean;
        put_uint32_le(val: number): boolean;
        put_int32_be(val: number): boolean;
        put_int32_le(val: number): boolean;
        put_uint64_be(val: number): boolean;
        put_uint64_le(val: number): boolean;
        put_int64_be(val: number): boolean;
        put_int64_le(val: number): boolean;
        put_float32_be(val: number): boolean;
        put_float32_le(val: number): boolean;
        put_float64_be(val: number): boolean;
        put_float64_le(val: number): boolean;
        put_data(data: number[], size: number): boolean;
        fill(value: number, size: number): boolean;
        put_string_utf8(data: string): boolean;
        put_string_utf16(): [boolean, number];
        put_string_utf32(): [boolean, number];
    }

    /**
     * Structure used by the collect_pads.
     */
    class GstCollectData {
        static $gtype: GObject.GType<GstCollectData>;

        // Fields

        collect: Gst.CollectPads;
        pad: Gst.Pad;
        buffer: Gst.Buffer;
        pos: number;

        // Constructors

        _init(...args: any[]): void;
    }

    type GstCollectPadsClass = typeof GstCollectPads;
    class GstCollectPadsPrivate {
        static $gtype: GObject.GType<GstCollectPadsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type GstDataQueueClass = typeof GstDataQueue;
    /**
     * Structure used by #GstDataQueue. You can supply a different structure, as
     * long as the top of the structure is identical to this structure.
     */
    class GstDataQueueItem {
        static $gtype: GObject.GType<GstDataQueueItem>;

        // Fields

        object: Gst.MiniObject;
        size: number;
        duration: number;
        visible: boolean;
        destroy: GLib.DestroyNotify;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Structure describing the size of a queue.
     */
    class GstDataQueueSize {
        static $gtype: GObject.GType<GstDataQueueSize>;

        // Fields

        visible: number;
        bytes: number;
        time: number;

        // Constructors

        constructor(
            properties?: Partial<{
                visible: number;
                bytes: number;
                time: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    type GstPushSrcClass = typeof GstPushSrc;
    type SinkClass = typeof Sink;
    class SinkPrivate {
        static $gtype: GObject.GType<SinkPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SrcClass = typeof Src;
    class SrcPrivate {
        static $gtype: GObject.GType<SrcPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type TransformClass = typeof Transform;
    class TransformPrivate {
        static $gtype: GObject.GType<TransformPrivate>;

        // Constructors

        _init(...args: any[]): void;
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
