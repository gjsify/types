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
    /**
     * @param src
     * @param size
     */
    function gst_type_find_helper(src: Gst.Pad, size: number): Gst.Caps;
    /**
     * @param obj
     * @param buf
     * @param prob
     */
    function gst_type_find_helper_for_buffer(
        obj: Gst.Object,
        buf: Gst.Buffer,
        prob: Gst.TypeFindProbability | null,
    ): Gst.Caps;
    /**
     * @param obj
     * @param extension
     */
    function gst_type_find_helper_for_extension(obj: Gst.Object, extension: string): Gst.Caps;
    /**
     * @param obj
     * @param func
     * @param size
     * @param prob
     */
    function gst_type_find_helper_get_range(
        obj: Gst.Object,
        func: Gst.TypeFindHelperGetRangeFunction,
        size: number,
        prob: Gst.TypeFindProbability | null,
    ): Gst.Caps;
    /**
     * @param obj
     * @param func
     * @param size
     * @param extension
     * @param prob
     */
    function gst_type_find_helper_get_range_ext(
        obj: Gst.Object,
        func: Gst.TypeFindHelperGetRangeFunction,
        size: number,
        extension: string,
        prob: Gst.TypeFindProbability | null,
    ): Gst.Caps;
    /**
     * @gir-type Callback
     */
    interface GstCollectDataDestroyNotify {
        (data: Gst.CollectData): void;
    }
    /**
     * @gir-type Callback
     */
    interface GstCollectPadsClipFunction {
        (pads: Gst.CollectPads, data: Gst.CollectData, buffer: Gst.Buffer): Gst.Buffer;
    }
    /**
     * @gir-type Callback
     */
    interface GstCollectPadsFunction {
        (pads: Gst.CollectPads): Gst.FlowReturn;
    }
    /**
     * @gir-type Callback
     */
    interface GstDataQueueCheckFullFunction {
        (queue: Gst.DataQueue, visible: number, bytes: number, time: number, checkdata: any): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface GstDataQueueEmptyCallback {
        (queue: Gst.DataQueue, checkdata: any): void;
    }
    /**
     * @gir-type Callback
     */
    interface GstDataQueueFullCallback {
        (queue: Gst.DataQueue, checkdata: any): void;
    }
    /**
     * @gir-type Callback
     */
    interface GstTypeFindHelperGetRangeFunction {
        (obj: Gst.Object, offset: number, length: number, buffer: Gst.Buffer): Gst.FlowReturn;
    }
    /**
     * The {@link Gst.Element} flags that a basesrc element may have.
     * @gir-type Flags
     */
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
     * The opaque {@link GstBase.GstAdapter} data structure.
     * @gir-type Class
     */
    class GstAdapter extends GObject.Object {
        static $gtype: GObject.GType<GstAdapter>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GstAdapter.SignalSignatures;

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

        // Signals

        /** @signal */
        connect<K extends keyof GstAdapter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GstAdapter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GstAdapter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GstAdapter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GstAdapter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GstAdapter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        clear(): void;
        /**
         * @param buf
         */
        push(buf: Gst.Buffer): void;
        /**
         * @param size
         */
        peek(size: number): number[];
        /**
         * @param dest
         * @param offset
         * @param size
         */
        copy(dest: number[], offset: number, size: number): void;
        /**
         * @param flush
         */
        flush(flush: number): void;
        /**
         * @param nbytes
         */
        take(nbytes: number): number[];
        /**
         * @param nbytes
         */
        take_buffer(nbytes: number): Gst.Buffer;
        available(): number;
        available_fast(): number;
        prev_timestamp(): [Gst.ClockTime, number];
        /**
         * @param mask
         * @param pattern
         * @param offset
         * @param size
         */
        masked_scan_uint32(mask: number, pattern: number, offset: number, size: number): number;
        /**
         * @param mask
         * @param pattern
         * @param offset
         * @param size
         */
        masked_scan_uint32_peek(mask: number, pattern: number, offset: number, size: number): [number, number];
    }

    namespace GstCollectPads {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }

    /**
     * Collectpads object.
     * Note that `data` doesn't contain the complete {@link GstBase.GstCollectData} list
     * at all times and should not be used for iterating them.
     * @gir-type Class
     */
    class GstCollectPads extends Gst.Object {
        static $gtype: GObject.GType<GstCollectPads>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GstCollectPads.SignalSignatures;

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

        // Signals

        /** @signal */
        connect<K extends keyof GstCollectPads.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GstCollectPads.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GstCollectPads.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GstCollectPads.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GstCollectPads.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GstCollectPads.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param func
         * @param user_data
         */
        set_function(func: Gst.CollectPadsFunction, user_data: any): void;
        /**
         * @param clipfunc
         * @param user_data
         */
        set_clip_function(clipfunc: Gst.CollectPadsClipFunction, user_data: any): void;
        /**
         * @param pad
         * @param size
         */
        add_pad(pad: Gst.Pad, size: number): Gst.CollectData;
        /**
         * @param pad
         * @param size
         * @param destroy_notify
         */
        add_pad_full(pad: Gst.Pad, size: number, destroy_notify: Gst.CollectDataDestroyNotify): Gst.CollectData;
        /**
         * @param pad
         */
        remove_pad(pad: Gst.Pad): boolean;
        /**
         * @param pad
         */
        is_active(pad: Gst.Pad): boolean;
        collect(): Gst.FlowReturn;
        /**
         * @param offset
         * @param length
         */
        collect_range(offset: number, length: number): Gst.FlowReturn;
        start(): void;
        stop(): void;
        /**
         * @param flushing
         */
        set_flushing(flushing: boolean): void;
        /**
         * @param data
         */
        peek(data: Gst.CollectData): Gst.Buffer;
        /**
         * @param data
         */
        pop(data: Gst.CollectData): Gst.Buffer;
        available(): number;
        /**
         * @param data
         * @param size
         */
        read(data: Gst.CollectData, size: number): [number, number];
        /**
         * @param data
         * @param size
         */
        read_buffer(data: Gst.CollectData, size: number): Gst.Buffer;
        /**
         * @param data
         * @param size
         */
        take_buffer(data: Gst.CollectData, size: number): Gst.Buffer;
        /**
         * @param data
         * @param size
         */
        flush(data: Gst.CollectData, size: number): number;
    }

    namespace GstDataQueue {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            empty: () => void;
            /**
             * @signal
             */
            full: () => void;
            'notify::current-level-bytes': (pspec: GObject.ParamSpec) => void;
            'notify::current-level-time': (pspec: GObject.ParamSpec) => void;
            'notify::current-level-visible': (pspec: GObject.ParamSpec) => void;
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
     * Opaque {@link GstBase.GstDataQueue} structure.
     * @gir-type Class
     */
    class GstDataQueue extends GObject.Object {
        static $gtype: GObject.GType<GstDataQueue>;

        // Properties

        get current_level_bytes(): number;
        get currentLevelBytes(): number;
        get current_level_time(): number;
        get currentLevelTime(): number;
        get current_level_visible(): number;
        get currentLevelVisible(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GstDataQueue.SignalSignatures;

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

        /** @signal */
        connect<K extends keyof GstDataQueue.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GstDataQueue.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GstDataQueue.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GstDataQueue.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GstDataQueue.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GstDataQueue.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param item
         */
        push(item: Gst.DataQueueItem): boolean;
        /**
         * @param item
         */
        pop(item: Gst.DataQueueItem): boolean;
        flush(): void;
        /**
         * @param flushing
         */
        set_flushing(flushing: boolean): void;
        /**
         * @param type
         */
        drop_head(type: GObject.GType): boolean;
        is_full(): boolean;
        is_empty(): boolean;
        /**
         * @param level
         */
        get_level(level: Gst.DataQueueSize): void;
        limits_changed(): void;
    }

    namespace GstPushSrc {
        // Signal signatures
        interface SignalSignatures extends Src.SignalSignatures {
            'notify::blocksize': (pspec: GObject.ParamSpec) => void;
            'notify::do-timestamp': (pspec: GObject.ParamSpec) => void;
            'notify::num-buffers': (pspec: GObject.ParamSpec) => void;
            'notify::typefind': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Src.ConstructorProps {}
    }

    /**
     * The opaque {@link GstBase.GstPushSrc} data structure.
     * @gir-type Class
     */
    class GstPushSrc extends Src {
        static $gtype: GObject.GType<GstPushSrc>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GstPushSrc.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GstPushSrc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof GstPushSrc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GstPushSrc.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GstPushSrc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GstPushSrc.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GstPushSrc.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GstPushSrc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Sink {
        // Signal signatures
        interface SignalSignatures extends Gst.Element.SignalSignatures {
            'notify::async': (pspec: GObject.ParamSpec) => void;
            'notify::blocksize': (pspec: GObject.ParamSpec) => void;
            'notify::enable-last-buffer': (pspec: GObject.ParamSpec) => void;
            'notify::last-buffer': (pspec: GObject.ParamSpec) => void;
            'notify::max-lateness': (pspec: GObject.ParamSpec) => void;
            'notify::preroll-queue-len': (pspec: GObject.ParamSpec) => void;
            'notify::qos': (pspec: GObject.ParamSpec) => void;
            'notify::render-delay': (pspec: GObject.ParamSpec) => void;
            'notify::sync': (pspec: GObject.ParamSpec) => void;
            'notify::ts-offset': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

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
     * The opaque {@link GstBase.Sink} data structure.
     * @gir-type Class
     */
    abstract class Sink extends Gst.Element {
        static $gtype: GObject.GType<Sink>;

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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Sink.SignalSignatures;

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

        // Signals

        /** @signal */
        connect<K extends keyof Sink.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Sink.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Sink.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Sink.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Sink.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Sink.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param obj
         */
        do_preroll(obj: Gst.MiniObject): Gst.FlowReturn;
        wait_preroll(): Gst.FlowReturn;
        /**
         * @param sync
         */
        set_sync(sync: boolean): void;
        get_sync(): boolean;
        /**
         * @param max_lateness
         */
        set_max_lateness(max_lateness: number): void;
        get_max_lateness(): number;
        /**
         * @param enabled
         */
        set_qos_enabled(enabled: boolean): void;
        is_qos_enabled(): boolean;
        /**
         * @param enabled
         */
        set_async_enabled(enabled: boolean): void;
        is_async_enabled(): boolean;
        /**
         * @param offset
         */
        set_ts_offset(offset: Gst.ClockTimeDiff): void;
        get_ts_offset(): Gst.ClockTimeDiff;
        get_last_buffer(): Gst.Buffer;
        /**
         * @param enable
         */
        set_last_buffer_enabled(enable: boolean): void;
        is_last_buffer_enabled(): boolean;
        /**
         * @param min_latency
         * @param max_latency
         */
        query_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): [boolean, boolean, boolean];
        get_latency(): Gst.ClockTime;
        /**
         * @param delay
         */
        set_render_delay(delay: Gst.ClockTime): void;
        get_render_delay(): Gst.ClockTime;
        /**
         * @param blocksize
         */
        set_blocksize(blocksize: number): void;
        get_blocksize(): number;
        /**
         * @param time
         * @param jitter
         */
        wait_clock(time: Gst.ClockTime, jitter: Gst.ClockTimeDiff): Gst.ClockReturn;
        /**
         * @param time
         * @param jitter
         */
        wait_eos(time: Gst.ClockTime, jitter: Gst.ClockTimeDiff): Gst.FlowReturn;
    }

    namespace Src {
        // Signal signatures
        interface SignalSignatures extends Gst.Element.SignalSignatures {
            'notify::blocksize': (pspec: GObject.ParamSpec) => void;
            'notify::do-timestamp': (pspec: GObject.ParamSpec) => void;
            'notify::num-buffers': (pspec: GObject.ParamSpec) => void;
            'notify::typefind': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Element.ConstructorProps {
            blocksize: number;
            do_timestamp: boolean;
            doTimestamp: boolean;
            num_buffers: number;
            numBuffers: number;
            typefind: boolean;
        }
    }

    /**
     * The opaque {@link GstBase.Src} data structure.
     * @gir-type Class
     */
    abstract class Src extends Gst.Element {
        static $gtype: GObject.GType<Src>;

        // Properties

        get blocksize(): number;
        set blocksize(val: number);
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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Src.SignalSignatures;

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

        // Signals

        /** @signal */
        connect<K extends keyof Src.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Src.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Src.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Src.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Src.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Src.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        wait_playing(): Gst.FlowReturn;
        /**
         * @param live
         */
        set_live(live: boolean): void;
        is_live(): boolean;
        /**
         * @param format
         */
        set_format(format: Gst.Format | null): void;
        /**
         * @param min_latency
         * @param max_latency
         */
        query_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): [boolean, boolean];
        /**
         * @param blocksize
         */
        set_blocksize(blocksize: number): void;
        get_blocksize(): number;
        /**
         * @param timestamp
         */
        set_do_timestamp(timestamp: boolean): void;
        get_do_timestamp(): boolean;
        /**
         * @param start
         * @param stop
         * @param position
         */
        new_seamless_segment(start: number, stop: number, position: number): boolean;
    }

    namespace Transform {
        // Signal signatures
        interface SignalSignatures extends Gst.Element.SignalSignatures {
            'notify::qos': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Element.ConstructorProps {
            qos: boolean;
        }
    }

    /**
     * The opaque {@link GstBase.Transform} data structure.
     * @gir-type Class
     */
    abstract class Transform extends Gst.Element {
        static $gtype: GObject.GType<Transform>;

        // Properties

        get qos(): boolean;
        set qos(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Transform.SignalSignatures;

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

        // Signals

        /** @signal */
        connect<K extends keyof Transform.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Transform.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Transform.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Transform.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Transform.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Transform.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param passthrough
         */
        set_passthrough(passthrough: boolean): void;
        is_passthrough(): boolean;
        /**
         * @param in_place
         */
        set_in_place(in_place: boolean): void;
        is_in_place(): boolean;
        /**
         * @param proportion
         * @param diff
         * @param timestamp
         */
        update_qos(proportion: number, diff: Gst.ClockTimeDiff, timestamp: Gst.ClockTime): void;
        /**
         * @param enabled
         */
        set_qos_enabled(enabled: boolean): void;
        is_qos_enabled(): boolean;
        /**
         * @param gap_aware
         */
        set_gap_aware(gap_aware: boolean): void;
        /**
         * @param caps
         * @param size
         */
        suggest(caps: Gst.Caps, size: number): void;
        reconfigure(): void;
    }

    /**
     * @gir-type Alias
     */
    type GstAdapterClass = typeof GstAdapter;
    /**
     * @gir-type Struct
     */
    class GstAdapterPrivate {
        static $gtype: GObject.GType<GstAdapterPrivate>;
    }

    /**
     * A bit reader instance.
     * @gir-type Struct
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

        static ['new'](data: number[], size: number): GstBitReader;

        static new_from_buffer(buffer: Gst.Buffer): GstBitReader;

        // Methods

        free(): void;
        /**
         * @param data
         * @param size
         */
        init(data: number[], size: number): void;
        /**
         * @param buffer
         */
        init_from_buffer(buffer: Gst.Buffer): void;
        /**
         * @param pos
         */
        set_pos(pos: number): boolean;
        get_pos(): number;
        get_remaining(): number;
        get_size(): number;
        /**
         * @param nbits
         */
        skip(nbits: number): boolean;
        skip_to_byte(): boolean;
        /**
         * @param val
         * @param nbits
         */
        get_bits_uint8(val: number[], nbits: number): boolean;
        /**
         * @param nbits
         */
        get_bits_uint16(nbits: number): [boolean, number];
        /**
         * @param nbits
         */
        get_bits_uint32(nbits: number): [boolean, number];
        /**
         * @param nbits
         */
        get_bits_uint64(nbits: number): [boolean, number];
        /**
         * @param val
         * @param nbits
         */
        peek_bits_uint8(val: number[], nbits: number): boolean;
        /**
         * @param nbits
         */
        peek_bits_uint16(nbits: number): [boolean, number];
        /**
         * @param nbits
         */
        peek_bits_uint32(nbits: number): [boolean, number];
        /**
         * @param nbits
         */
        peek_bits_uint64(nbits: number): [boolean, number];
    }

    /**
     * A byte reader instance.
     * @gir-type Struct
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

        static ['new'](data: number[], size: number): GstByteReader;

        static new_from_buffer(buffer: Gst.Buffer): GstByteReader;

        // Methods

        free(): void;
        /**
         * @param data
         * @param size
         */
        init(data: number[], size: number): void;
        /**
         * @param buffer
         */
        init_from_buffer(buffer: Gst.Buffer): void;
        /**
         * @param pos
         */
        set_pos(pos: number): boolean;
        get_pos(): number;
        get_remaining(): number;
        get_size(): number;
        /**
         * @param nbytes
         */
        skip(nbytes: number): boolean;
        /**
         * @param val
         */
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
        /**
         * @param val
         */
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
        /**
         * @param size
         */
        dup_data(size: number): [boolean, number];
        /**
         * @param size
         */
        get_data(size: number): [boolean, number];
        /**
         * @param size
         */
        peek_data(size: number): [boolean, number];
        /**
         * @param str
         */
        dup_string_utf8(str: string[]): boolean;
        dup_string_utf16(): [boolean, number];
        dup_string_utf32(): [boolean, number];
        skip_string_utf8(): boolean;
        skip_string_utf16(): boolean;
        skip_string_utf32(): boolean;
        /**
         * @param str
         */
        get_string_utf8(str: string[]): boolean;
        /**
         * @param str
         */
        peek_string_utf8(str: string[]): boolean;
        /**
         * @param mask
         * @param pattern
         * @param offset
         * @param size
         */
        masked_scan_uint32(mask: number, pattern: number, offset: number, size: number): number;
    }

    /**
     * A byte writer instance.
     * @gir-type Struct
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

        static ['new'](): GstByteWriter;

        static new_with_size(size: number, fixed: boolean): GstByteWriter;

        static new_with_data(data: number[], size: number, initialized: boolean): GstByteWriter;

        static new_with_buffer(buffer: Gst.Buffer, initialized: boolean): GstByteWriter;

        // Methods

        init(): void;
        /**
         * @param size
         * @param fixed
         */
        init_with_size(size: number, fixed: boolean): void;
        /**
         * @param data
         * @param size
         * @param initialized
         */
        init_with_data(data: number[], size: number, initialized: boolean): void;
        /**
         * @param buffer
         * @param initialized
         */
        init_with_buffer(buffer: Gst.Buffer, initialized: boolean): void;
        free(): void;
        free_and_get_data(): number[];
        free_and_get_buffer(): Gst.Buffer;
        reset(): void;
        reset_and_get_data(): number[];
        reset_and_get_buffer(): Gst.Buffer;
        get_remaining(): number;
        /**
         * @param size
         */
        ensure_free_space(size: number): boolean;
        /**
         * @param val
         */
        put_uint8(val: number): boolean;
        /**
         * @param val
         */
        put_int8(val: number): boolean;
        /**
         * @param val
         */
        put_uint16_be(val: number): boolean;
        /**
         * @param val
         */
        put_uint16_le(val: number): boolean;
        /**
         * @param val
         */
        put_int16_be(val: number): boolean;
        /**
         * @param val
         */
        put_int16_le(val: number): boolean;
        /**
         * @param val
         */
        put_uint24_be(val: number): boolean;
        /**
         * @param val
         */
        put_uint24_le(val: number): boolean;
        /**
         * @param val
         */
        put_int24_be(val: number): boolean;
        /**
         * @param val
         */
        put_int24_le(val: number): boolean;
        /**
         * @param val
         */
        put_uint32_be(val: number): boolean;
        /**
         * @param val
         */
        put_uint32_le(val: number): boolean;
        /**
         * @param val
         */
        put_int32_be(val: number): boolean;
        /**
         * @param val
         */
        put_int32_le(val: number): boolean;
        /**
         * @param val
         */
        put_uint64_be(val: number): boolean;
        /**
         * @param val
         */
        put_uint64_le(val: number): boolean;
        /**
         * @param val
         */
        put_int64_be(val: number): boolean;
        /**
         * @param val
         */
        put_int64_le(val: number): boolean;
        /**
         * @param val
         */
        put_float32_be(val: number): boolean;
        /**
         * @param val
         */
        put_float32_le(val: number): boolean;
        /**
         * @param val
         */
        put_float64_be(val: number): boolean;
        /**
         * @param val
         */
        put_float64_le(val: number): boolean;
        /**
         * @param data
         * @param size
         */
        put_data(data: number[], size: number): boolean;
        /**
         * @param value
         * @param size
         */
        fill(value: number, size: number): boolean;
        /**
         * @param data
         */
        put_string_utf8(data: string): boolean;
        put_string_utf16(): [boolean, number];
        put_string_utf32(): [boolean, number];
    }

    /**
     * Structure used by the collect_pads.
     * @gir-type Struct
     */
    class GstCollectData {
        static $gtype: GObject.GType<GstCollectData>;

        // Fields

        collect: Gst.CollectPads;
        pad: Gst.Pad;
        buffer: Gst.Buffer;
        pos: number;
    }

    /**
     * @gir-type Alias
     */
    type GstCollectPadsClass = typeof GstCollectPads;
    /**
     * @gir-type Struct
     */
    class GstCollectPadsPrivate {
        static $gtype: GObject.GType<GstCollectPadsPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type GstDataQueueClass = typeof GstDataQueue;
    /**
     * Structure used by {@link GstBase.GstDataQueue}. You can supply a different structure, as
     * long as the top of the structure is identical to this structure.
     * @gir-type Struct
     */
    class GstDataQueueItem {
        static $gtype: GObject.GType<GstDataQueueItem>;

        // Fields

        object: Gst.MiniObject;
        size: number;
        duration: number;
        visible: boolean;
        destroy: GLib.DestroyNotify;
    }

    /**
     * Structure describing the size of a queue.
     * @gir-type Struct
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
    }

    /**
     * @gir-type Alias
     */
    type GstPushSrcClass = typeof GstPushSrc;
    /**
     * @gir-type Alias
     */
    type SinkClass = typeof Sink;
    /**
     * @gir-type Struct
     */
    class SinkPrivate {
        static $gtype: GObject.GType<SinkPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type SrcClass = typeof Src;
    /**
     * @gir-type Struct
     */
    class SrcPrivate {
        static $gtype: GObject.GType<SrcPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type TransformClass = typeof Transform;
    /**
     * @gir-type Struct
     */
    class TransformPrivate {
        static $gtype: GObject.GType<TransformPrivate>;
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
