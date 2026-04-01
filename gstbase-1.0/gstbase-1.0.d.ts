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
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstBase {
    /**
     * GstBase-1.0
     */

    /**
     * @gir-type Enum
     */
    export namespace AggregatorStartTimeSelection {
        export const $gtype: GObject.GType<AggregatorStartTimeSelection>;
    }

    /**
     * @gir-type Enum
     * @since 1.18
     */
    enum AggregatorStartTimeSelection {
        /**
         * Start at running time 0.
         */
        ZERO,
        /**
         * Start at the running time of
         * the first buffer that is received.
         */
        FIRST,
        /**
         * Start at the running time
         * selected by the `start-time` property.
         */
        SET,
        /**
         * Start at the current running time when reaching {@link Gst.State.PLAYING}.
         */
        NOW,
    }

    const BASE_PARSE_FLAG_DRAINING: number;
    const BASE_PARSE_FLAG_LOST_SYNC: number;
    /**
     * The name of the templates for the sink pad.
     */
    const BASE_TRANSFORM_SINK_NAME: string;
    /**
     * The name of the templates for the source pad.
     */
    const BASE_TRANSFORM_SRC_NAME: string;
    /**
     * Tries to find what type of data is flowing from the given source {@link Gst.Pad}.
     *
     * Free-function: gst_caps_unref
     * @param src A source {@link Gst.Pad}
     * @param size The length in bytes
     * @returns the {@link Gst.Caps} corresponding to the data     stream.  Returns `null` if no {@link Gst.Caps} matches the data stream.
     */
    function type_find_helper(src: Gst.Pad, size: number): Gst.Caps | null;
    /**
     * Tries to find what type of data is contained in the given {@link Gst.Buffer}, the
     * assumption being that the buffer represents the beginning of the stream or
     * file.
     *
     * All available typefinders will be called on the data in order of rank. If
     * a typefinding function returns a probability of {@link Gst.TypeFindProbability.MAXIMUM},
     * typefinding is stopped immediately and the found caps will be returned
     * right away. Otherwise, all available typefind functions will the tried,
     * and the caps with the highest probability will be returned, or `null` if
     * the content of the buffer could not be identified.
     *
     * Free-function: gst_caps_unref
     * @param obj object doing the typefinding, or `null` (used for logging)
     * @param buf a {@link Gst.Buffer} with data to typefind
     * @returns the {@link Gst.Caps} corresponding to the data,     or `null` if no type could be found. The caller should free the caps     returned with `gst_caps_unref()`.
     */
    function type_find_helper_for_buffer(
        obj: Gst.Object | null,
        buf: Gst.Buffer,
    ): [Gst.Caps | null, Gst.TypeFindProbability | null];
    /**
     * Tries to find if type of media contained in the given {@link Gst.Buffer}, matches
     * `caps` specified, assumption being that the buffer represents the beginning
     * of the stream or file.
     *
     * Tries to find what type of data is contained in the given `data`, the
     * assumption being that the data represents the beginning of the stream or
     * file.
     *
     * Only the typefinder matching the given caps will be called, if found. The
     * caps with the highest probability will be returned, or `null` if the content
     * of the `data` could not be identified.
     *
     * Free-function: gst_caps_unref
     * @param obj object doing the typefinding, or `null` (used for logging)
     * @param buf a {@link Gst.Buffer} with data to typefind
     * @param caps caps of the media
     * @returns the {@link Gst.Caps} corresponding to the data,     or `null` if no type could be found. The caller should free the caps     returned with `gst_caps_unref()`.
     * @since 1.22
     */
    function type_find_helper_for_buffer_with_caps(
        obj: Gst.Object | null,
        buf: Gst.Buffer,
        caps: Gst.Caps,
    ): [Gst.Caps | null, Gst.TypeFindProbability | null];
    /**
     * Tries to find what type of data is contained in the given {@link Gst.Buffer}, the
     * assumption being that the buffer represents the beginning of the stream or
     * file.
     *
     * All available typefinders will be called on the data in order of rank. If
     * a typefinding function returns a probability of {@link Gst.TypeFindProbability.MAXIMUM},
     * typefinding is stopped immediately and the found caps will be returned
     * right away. Otherwise, all available typefind functions will the tried,
     * and the caps with the highest probability will be returned, or `null` if
     * the content of the buffer could not be identified.
     *
     * When `extension` is not `null`, this function will first try the typefind
     * functions for the given extension, which might speed up the typefinding
     * in many cases.
     *
     * Free-function: gst_caps_unref
     * @param obj object doing the typefinding, or `null` (used for logging)
     * @param buf a {@link Gst.Buffer} with data to typefind
     * @param extension extension of the media, or `null`
     * @returns the {@link Gst.Caps} corresponding to the data,     or `null` if no type could be found. The caller should free the caps     returned with `gst_caps_unref()`.
     * @since 1.16
     */
    function type_find_helper_for_buffer_with_extension(
        obj: Gst.Object | null,
        buf: Gst.Buffer,
        extension?: string | null,
    ): [Gst.Caps | null, Gst.TypeFindProbability | null];
    /**
     * Tries to find what type of data is contained in the given `data`, the
     * assumption being that the data represents the beginning of the stream or
     * file.
     *
     * All available typefinders will be called on the data in order of rank. If
     * a typefinding function returns a probability of {@link Gst.TypeFindProbability.MAXIMUM},
     * typefinding is stopped immediately and the found caps will be returned
     * right away. Otherwise, all available typefind functions will the tried,
     * and the caps with the highest probability will be returned, or `null` if
     * the content of `data` could not be identified.
     *
     * Free-function: gst_caps_unref
     * @param obj object doing the typefinding, or `null` (used for logging)
     * @param data * a pointer with data to typefind
     * @returns the {@link Gst.Caps} corresponding to the data,     or `null` if no type could be found. The caller should free the caps     returned with `gst_caps_unref()`.
     */
    function type_find_helper_for_data(
        obj: Gst.Object | null,
        data: Uint8Array | string,
    ): [Gst.Caps | null, Gst.TypeFindProbability | null];
    /**
     * Tries to find if type of media contained in the given `data`, matches the
     * `caps` specified, assumption being that the data represents the beginning
     * of the stream or file.
     *
     * Only the typefinder matching the given caps will be called, if found. The
     * caps with the highest probability will be returned, or `null` if the content
     * of the `data` could not be identified.
     *
     * Free-function: gst_caps_unref
     * @param obj object doing the typefinding, or `null` (used for logging)
     * @param data a pointer with data to typefind
     * @param caps caps of the media
     * @returns the {@link Gst.Caps} corresponding to the data,     or `null` if no type could be found. The caller should free the caps     returned with `gst_caps_unref()`.
     * @since 1.22
     */
    function type_find_helper_for_data_with_caps(
        obj: Gst.Object | null,
        data: Uint8Array | string,
        caps: Gst.Caps,
    ): [Gst.Caps | null, Gst.TypeFindProbability | null];
    /**
     * Tries to find what type of data is contained in the given `data`, the
     * assumption being that the data represents the beginning of the stream or
     * file.
     *
     * All available typefinders will be called on the data in order of rank. If
     * a typefinding function returns a probability of {@link Gst.TypeFindProbability.MAXIMUM},
     * typefinding is stopped immediately and the found caps will be returned
     * right away. Otherwise, all available typefind functions will the tried,
     * and the caps with the highest probability will be returned, or `null` if
     * the content of `data` could not be identified.
     *
     * When `extension` is not `null`, this function will first try the typefind
     * functions for the given extension, which might speed up the typefinding
     * in many cases.
     *
     * Free-function: gst_caps_unref
     * @param obj object doing the typefinding, or `null` (used for logging)
     * @param data * a pointer with data to typefind
     * @param extension extension of the media, or `null`
     * @returns the {@link Gst.Caps} corresponding to the data,     or `null` if no type could be found. The caller should free the caps     returned with `gst_caps_unref()`.
     * @since 1.16
     */
    function type_find_helper_for_data_with_extension(
        obj: Gst.Object | null,
        data: Uint8Array | string,
        extension?: string | null,
    ): [Gst.Caps | null, Gst.TypeFindProbability | null];
    /**
     * Tries to find the best {@link Gst.Caps} associated with `extension`.
     *
     * All available typefinders will be checked against the extension in order
     * of rank. The caps of the first typefinder that can handle `extension` will be
     * returned.
     *
     * Free-function: gst_caps_unref
     * @param obj object doing the typefinding, or `null` (used for logging)
     * @param extension an extension
     * @returns the {@link Gst.Caps} corresponding to     `extension`, or `null` if no type could be found. The caller should free     the caps returned with `gst_caps_unref()`.
     */
    function type_find_helper_for_extension(obj: Gst.Object | null, extension: string): Gst.Caps | null;
    /**
     * Utility function to do pull-based typefinding. Unlike `gst_type_find_helper()`
     * however, this function will use the specified function `func` to obtain the
     * data needed by the typefind functions, rather than operating on a given
     * source pad. This is useful mostly for elements like tag demuxers which
     * strip off data at the beginning and/or end of a file and want to typefind
     * the stripped data stream before adding their own source pad (the specified
     * callback can then call the upstream peer pad with offsets adjusted for the
     * tag size, for example).
     *
     * When `extension` is not `null`, this function will first try the typefind
     * functions for the given extension, which might speed up the typefinding
     * in many cases.
     *
     * Free-function: gst_caps_unref
     * @param obj A {@link Gst.Object} that will be passed as first argument to `func`
     * @param parent the parent of `obj` or `null`
     * @param func A generic {@link GstBase.TypeFindHelperGetRangeFunction} that will        be used to access data at random offsets when doing the typefinding
     * @param size The length in bytes
     * @param extension extension of the media, or `null`
     * @returns the {@link Gst.Caps} corresponding to the data     stream.  Returns `null` if no {@link Gst.Caps} matches the data stream.
     */
    function type_find_helper_get_range(
        obj: Gst.Object,
        parent: Gst.Object | null,
        func: TypeFindHelperGetRangeFunction,
        size: number,
        extension?: string | null,
    ): [Gst.Caps | null, Gst.TypeFindProbability | null];
    /**
     * Utility function to do pull-based typefinding. Unlike `gst_type_find_helper()`
     * however, this function will use the specified function `func` to obtain the
     * data needed by the typefind functions, rather than operating on a given
     * source pad. This is useful mostly for elements like tag demuxers which
     * strip off data at the beginning and/or end of a file and want to typefind
     * the stripped data stream before adding their own source pad (the specified
     * callback can then call the upstream peer pad with offsets adjusted for the
     * tag size, for example).
     *
     * When `extension` is not `null`, this function will first try the typefind
     * functions for the given extension, which might speed up the typefinding
     * in many cases.
     * @param obj A {@link Gst.Object} that will be passed as first argument to `func`
     * @param parent the parent of `obj` or `null`
     * @param func A generic {@link GstBase.TypeFindHelperGetRangeFunction} that will        be used to access data at random offsets when doing the typefinding
     * @param size The length in bytes
     * @param extension extension of the media, or `null`
     * @returns the last %GstFlowReturn from pulling a buffer or {@link Gst.FlowReturn.OK} if          typefinding was successful.
     * @since 1.14.3
     */
    function type_find_helper_get_range_full(
        obj: Gst.Object,
        parent: Gst.Object | null,
        func: TypeFindHelperGetRangeFunction,
        size: number,
        extension: string | null,
    ): [Gst.FlowReturn, Gst.Caps, Gst.TypeFindProbability | null];
    /**
     * Tries to find the best {@link Gst.TypeFindFactory} associated with `caps`.
     *
     * The typefinder that can handle `caps` will be returned.
     *
     * Free-function: g_list_free
     * @param obj object doing the typefinding, or `null` (used for logging)
     * @param caps caps of the media
     * @returns the list of {@link Gst.TypeFindFactory}          corresponding to `caps`, or `null` if no typefinder could be          found. Caller should free the returned list with `g_list_free()`          and list elements with `gst_object_unref()`.
     * @since 1.22
     */
    function type_find_list_factories_for_caps(obj: Gst.Object | null, caps: Gst.Caps): Gst.TypeFindFactory[] | null;
    /**
     * @gir-type Callback
     */
    interface CollectDataDestroyNotify {
        (data: CollectData): void;
    }
    /**
     * @gir-type Callback
     */
    interface CollectPadsBufferFunction {
        (pads: CollectPads, data: CollectData, buffer: Gst.Buffer): Gst.FlowReturn;
    }
    /**
     * @gir-type Callback
     */
    interface CollectPadsClipFunction {
        (pads: CollectPads, data: CollectData, inbuffer: Gst.Buffer): Gst.FlowReturn;
    }
    /**
     * @gir-type Callback
     */
    interface CollectPadsCompareFunction {
        (
            pads: CollectPads,
            data1: CollectData,
            timestamp1: Gst.ClockTime,
            data2: CollectData,
            timestamp2: Gst.ClockTime,
        ): number;
    }
    /**
     * @gir-type Callback
     */
    interface CollectPadsEventFunction {
        (pads: CollectPads, pad: CollectData, event: Gst.Event): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface CollectPadsFlushFunction {
        (pads: CollectPads): void;
    }
    /**
     * @gir-type Callback
     */
    interface CollectPadsFunction {
        (pads: CollectPads): Gst.FlowReturn;
    }
    /**
     * @gir-type Callback
     */
    interface CollectPadsQueryFunction {
        (pads: CollectPads, pad: CollectData, query: Gst.Query): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface DataQueueEmptyCallback {
        (queue: DataQueue, checkdata?: any | null): void;
    }
    /**
     * @gir-type Callback
     */
    interface DataQueueFullCallback {
        (queue: DataQueue, checkdata?: any | null): void;
    }
    /**
     * @gir-type Callback
     */
    interface TypeFindHelperGetRangeFunction {
        (obj: Gst.Object, parent: Gst.Object | null, offset: number, length: number): Gst.FlowReturn;
    }
    /**
     * Flags to be used in a {@link GstBase.BaseParseFrame}.
     * @gir-type Flags
     */
    enum BaseParseFrameFlags {
        /**
         * no flag
         */
        NONE,
        /**
         * set by baseclass if current frame
         *   is passed for processing to the subclass for the first time
         *   (and not set on subsequent calls with same data).
         */
        NEW_FRAME,
        /**
         * set to indicate this buffer should not be
         *   counted as frame, e.g. if this frame is dependent on a previous one.
         *   As it is not counted as a frame, bitrate increases but frame to time
         *   conversions are maintained.
         */
        NO_FRAME,
        /**
         * `pre_push_frame` can set this to indicate
         *    that regular segment clipping can still be performed (as opposed to
         *    any custom one having been done).
         */
        CLIP,
        /**
         * indicates to `finish_frame` that the
         *    the frame should be dropped (and might be handled internally by subclass)
         */
        DROP,
        /**
         * indicates to `finish_frame` that the
         *    the frame should be queued for now and processed fully later
         *    when the first non-queued frame is finished
         */
        QUEUE,
    }

    /**
     * The {@link Gst.Element} flags that a basesrc element may have.
     * @gir-type Flags
     */
    enum BaseSrcFlags {
        /**
         * has source is starting
         */
        STARTING,
        /**
         * has source been started
         */
        STARTED,
        /**
         * offset to define more flags
         */
        LAST,
    }

    /**
     * @gir-type Flags
     */
    enum CollectPadsStateFlags {
        /**
         * Set if collectdata's pad is EOS.
         */
        EOS,
        /**
         * Set if collectdata's pad is flushing.
         */
        FLUSHING,
        /**
         * Set if collectdata's pad received a
         *                                      new_segment event.
         */
        NEW_SEGMENT,
        /**
         * Set if collectdata's pad must be waited
         *                                      for when collecting.
         */
        WAITING,
        /**
         * Set collectdata's pad WAITING state must
         *                                      not be changed.
         * {@link GstBase.CollectPadsStateFlags} indicate private state of a collectdata('s pad).
         */
        LOCKED,
    }

    namespace Adapter {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * This class is for elements that receive buffers in an undesired size.
     * While for example raw video contains one image per buffer, the same is not
     * true for a lot of other formats, especially those that come directly from
     * a file. So if you have undefined buffer sizes and require a specific size,
     * this object is for you.
     *
     * An adapter is created with `gst_adapter_new()`. It can be freed again with
     * `g_object_unref()`.
     *
     * The theory of operation is like this: All buffers received are put
     * into the adapter using `gst_adapter_push()` and the data is then read back
     * in chunks of the desired size using `gst_adapter_map()`/gst_adapter_unmap()
     * and/or `gst_adapter_copy()`. After the data has been processed, it is freed
     * using `gst_adapter_unmap()`.
     *
     * Other methods such as `gst_adapter_take()` and `gst_adapter_take_buffer()`
     * combine `gst_adapter_map()` and `gst_adapter_unmap()` in one method and are
     * potentially more convenient for some use cases.
     *
     * For example, a sink pad's chain function that needs to pass data to a library
     * in 512-byte chunks could be implemented like this:
     *
     * ```c
     * static GstFlowReturn
     * sink_pad_chain (GstPad *pad, GstObject *parent, GstBuffer *buffer)
     * {
     *   MyElement *this;
     *   GstAdapter *adapter;
     *   GstFlowReturn ret = GST_FLOW_OK;
     *
     *   this = MY_ELEMENT (parent);
     *
     *   adapter = this->adapter;
     *
     *   // put buffer into adapter
     *   gst_adapter_push (adapter, buffer);
     *
     *   // while we can read out 512 bytes, process them
     *   while (gst_adapter_available (adapter) >= 512 && ret == GST_FLOW_OK) {
     *     const guint8 *data = gst_adapter_map (adapter, 512);
     *     // use flowreturn as an error value
     *     ret = my_library_foo (data);
     *     gst_adapter_unmap (adapter);
     *     gst_adapter_flush (adapter, 512);
     *   }
     *   return ret;
     * }
     * ```
     *
     *
     * For another example, a simple element inside GStreamer that uses {@link GstBase.Adapter}
     * is the libvisual element.
     *
     * An element using {@link GstBase.Adapter} in its sink pad chain function should ensure that
     * when the FLUSH_STOP event is received, that any queued data is cleared using
     * `gst_adapter_clear()`. Data should also be cleared or processed on EOS and
     * when changing state from {@link Gst.State.PAUSED} to {@link Gst.State.READY}.
     *
     * Also check the GST_BUFFER_FLAG_DISCONT flag on the buffer. Some elements might
     * need to clear the adapter after a discontinuity.
     *
     * The adapter will keep track of the timestamps of the buffers
     * that were pushed. The last seen timestamp before the current position
     * can be queried with `gst_adapter_prev_pts()`. This function can
     * optionally return the number of bytes between the start of the buffer that
     * carried the timestamp and the current adapter position. The distance is
     * useful when dealing with, for example, raw audio samples because it allows
     * you to calculate the timestamp of the current adapter position by using the
     * last seen timestamp and the amount of bytes since.  Additionally, the
     * `gst_adapter_prev_pts_at_offset()` can be used to determine the last
     * seen timestamp at a particular offset in the adapter.
     *
     * The adapter will also keep track of the offset of the buffers
     * (#GST_BUFFER_OFFSET) that were pushed. The last seen offset before the
     * current position can be queried with `gst_adapter_prev_offset()`. This function
     * can optionally return the number of bytes between the start of the buffer
     * that carried the offset and the current adapter position.
     *
     * Additionally the adapter also keeps track of the PTS, DTS and buffer offset
     * at the last discontinuity, which can be retrieved with
     * `gst_adapter_pts_at_discont()`, `gst_adapter_dts_at_discont()` and
     * `gst_adapter_offset_at_discont()`. The number of bytes that were consumed
     * since then can be queried with `gst_adapter_distance_from_discont()`.
     *
     * A last thing to note is that while {@link GstBase.Adapter} is pretty optimized,
     * merging buffers still might be an operation that requires a `malloc()` and
     * `memcpy()` operation, and these operations are not the fastest. Because of
     * this, some functions like `gst_adapter_available_fast()` are provided to help
     * speed up such cases should you want to. To avoid repeated memory allocations,
     * `gst_adapter_copy()` can be used to copy data into a (statically allocated)
     * user provided buffer.
     *
     * {@link GstBase.Adapter} is not MT safe. All operations on an adapter must be serialized by
     * the caller. This is not normally a problem, however, as the normal use case
     * of {@link GstBase.Adapter} is inside one pad's chain function, in which case access is
     * serialized via the pad's STREAM_LOCK.
     *
     * Note that `gst_adapter_push()` takes ownership of the buffer passed. Use
     * `gst_buffer_ref()` before pushing it into the adapter if you still want to
     * access the buffer later. The adapter will never modify the data in the
     * buffer pushed in it.
     * @gir-type Class
     */
    class Adapter extends GObject.Object {
        static $gtype: GObject.GType<Adapter>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Adapter.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Adapter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Adapter;

        // Signals

        /** @signal */
        connect<K extends keyof Adapter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Adapter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Adapter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Adapter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Adapter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Adapter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the maximum amount of bytes available, that is it returns the maximum
         * value that can be supplied to `gst_adapter_map()` without that function
         * returning `null`.
         *
         * Calling `gst_adapter_map()` with the amount of bytes returned by this function
         * may require expensive operations (like copying the data into a temporary
         * buffer) in some cases.
         * @returns number of bytes available in `adapter`
         */
        available(): number;
        /**
         * Gets the maximum number of bytes that can be retrieved in a single map
         * operation without merging buffers.
         *
         * Calling `gst_adapter_map()` with the amount of bytes returned by this function
         * will never require any expensive operations (like copying the data into a
         * temporary buffer).
         * @returns number of bytes that are available in `adapter` without expensive operations
         */
        available_fast(): number;
        /**
         * Removes all buffers from `adapter`.
         */
        clear(): void;
        /**
         * Similar to gst_adapter_copy, but more suitable for language bindings. `size`
         * bytes of data starting at `offset` will be copied out of the buffers contained
         * in `adapter` and into a new {@link GLib.Bytes} structure which is returned. Depending on
         * the value of the `size` argument an empty {@link GLib.Bytes} structure may be returned.
         * @param offset the bytes offset in the adapter to start from
         * @param size the number of bytes to copy
         * @returns A new {@link GLib.Bytes} structure containing the copied data.
         */
        copy(offset: number, size: number): GLib.Bytes;
        /**
         * Get the distance in bytes since the last buffer with the
         * {@link Gst.BufferFlags.DISCONT} flag.
         *
         * The distance will be reset to 0 for all buffers with
         * {@link Gst.BufferFlags.DISCONT} on them, and then calculated for all other
         * following buffers based on their size.
         * @returns The offset. Can be `GST_BUFFER_OFFSET_NONE`.
         */
        distance_from_discont(): number;
        /**
         * Get the DTS that was on the last buffer with the GST_BUFFER_FLAG_DISCONT
         * flag, or GST_CLOCK_TIME_NONE.
         * @returns The DTS at the last discont or GST_CLOCK_TIME_NONE.
         */
        dts_at_discont(): Gst.ClockTime;
        /**
         * Flushes the first `flush` bytes in the `adapter`. The caller must ensure that
         * at least this many bytes are available.
         *
         * See also: `gst_adapter_map()`, `gst_adapter_unmap()`
         * @param flush the number of bytes to flush
         */
        flush(flush: number): void;
        /**
         * Returns a {@link Gst.Buffer} containing the first `nbytes` of the `adapter`, but
         * does not flush them from the adapter. See `gst_adapter_take_buffer()`
         * for details.
         *
         * Caller owns a reference to the returned buffer. `gst_buffer_unref()` after
         * usage.
         *
         * Free-function: gst_buffer_unref
         * @param nbytes the number of bytes to get
         * @returns a {@link Gst.Buffer} containing the first     `nbytes` of the adapter, or `null` if `nbytes` bytes are not available.     `gst_buffer_unref()` when no longer needed.
         */
        get_buffer(nbytes: number): Gst.Buffer | null;
        /**
         * Returns a {@link Gst.Buffer} containing the first `nbytes` of the `adapter`, but
         * does not flush them from the adapter. See `gst_adapter_take_buffer_fast()`
         * for details.
         *
         * Caller owns a reference to the returned buffer. `gst_buffer_unref()` after
         * usage.
         *
         * Free-function: gst_buffer_unref
         * @param nbytes the number of bytes to get
         * @returns a {@link Gst.Buffer} containing the first     `nbytes` of the adapter, or `null` if `nbytes` bytes are not available.     `gst_buffer_unref()` when no longer needed.
         */
        get_buffer_fast(nbytes: number): Gst.Buffer | null;
        /**
         * Returns a {@link Gst.BufferList} of buffers containing the first `nbytes` bytes of
         * the `adapter` but does not flush them from the adapter. See
         * `gst_adapter_take_buffer_list()` for details.
         *
         * Caller owns the returned list. Call `gst_buffer_list_unref()` to free
         * the list after usage.
         * @param nbytes the number of bytes to get
         * @returns a {@link Gst.BufferList} of buffers containing     the first `nbytes` of the adapter, or `null` if `nbytes` bytes are not     available
         */
        get_buffer_list(nbytes: number): Gst.BufferList | null;
        /**
         * Returns a {@link GLib.List} of buffers containing the first `nbytes` bytes of the
         * `adapter`, but does not flush them from the adapter. See
         * `gst_adapter_take_list()` for details.
         *
         * Caller owns returned list and contained buffers. `gst_buffer_unref()` each
         * buffer in the list before freeing the list after usage.
         * @param nbytes the number of bytes to get
         * @returns a {@link GLib.List} of     buffers containing the first `nbytes` of the adapter, or `null` if `nbytes`     bytes are not available
         */
        get_list(nbytes: number): Gst.Buffer[] | null;
        /**
         * Gets the first `size` bytes stored in the `adapter`. The returned pointer is
         * valid until the next function is called on the adapter.
         *
         * Note that setting the returned pointer as the data of a {@link Gst.Buffer} is
         * incorrect for general-purpose plugins. The reason is that if a downstream
         * element stores the buffer so that it has access to it outside of the bounds
         * of its chain function, the buffer will have an invalid data pointer after
         * your element flushes the bytes. In that case you should use
         * `gst_adapter_take()`, which returns a freshly-allocated buffer that you can set
         * as {@link Gst.Buffer} memory or the potentially more performant
         * `gst_adapter_take_buffer()`.
         *
         * Returns `null` if `size` bytes are not available.
         * @returns a pointer to the first `size` bytes of data, or `null`
         */
        map(): Uint8Array | null;
        /**
         * Scan for pattern `pattern` with applied mask `mask` in the adapter data,
         * starting from offset `offset`.
         *
         * The bytes in `pattern` and `mask` are interpreted left-to-right, regardless
         * of endianness.  All four bytes of the pattern must be present in the
         * adapter for it to match, even if the first or last bytes are masked out.
         *
         * It is an error to call this function without making sure that there is
         * enough data (offset+size bytes) in the adapter.
         *
         * This function calls `gst_adapter_masked_scan_uint32_peek()` passing `null`
         * for value.
         * @param mask mask to apply to data before matching against `pattern`
         * @param pattern pattern to match (after mask is applied)
         * @param offset offset into the adapter data from which to start scanning, returns          the last scanned position.
         * @param size number of bytes to scan from offset
         * @returns offset of the first match, or -1 if no match was found. Example: |[ // Assume the adapter contains 0x00 0x01 0x02 ... 0xfe 0xff gst_adapter_masked_scan_uint32 (adapter, 0xffffffff, 0x00010203, 0, 256); // -> returns 0 gst_adapter_masked_scan_uint32 (adapter, 0xffffffff, 0x00010203, 1, 255); // -> returns -1 gst_adapter_masked_scan_uint32 (adapter, 0xffffffff, 0x01020304, 1, 255); // -> returns 1 gst_adapter_masked_scan_uint32 (adapter, 0xffff, 0x0001, 0, 256); // -> returns -1 gst_adapter_masked_scan_uint32 (adapter, 0xffff, 0x0203, 0, 256); // -> returns 0 gst_adapter_masked_scan_uint32 (adapter, 0xffff0000, 0x02030000, 0, 256); // -> returns 2 gst_adapter_masked_scan_uint32 (adapter, 0xffff0000, 0x02030000, 0, 4); // -> returns -1 ]|
         */
        masked_scan_uint32(mask: number, pattern: number, offset: number, size: number): number;
        /**
         * Scan for pattern `pattern` with applied mask `mask` in the adapter data,
         * starting from offset `offset`.  If a match is found, the value that matched
         * is returned through `value`, otherwise `value` is left untouched.
         *
         * The bytes in `pattern` and `mask` are interpreted left-to-right, regardless
         * of endianness.  All four bytes of the pattern must be present in the
         * adapter for it to match, even if the first or last bytes are masked out.
         *
         * It is an error to call this function without making sure that there is
         * enough data (offset+size bytes) in the adapter.
         * @param mask mask to apply to data before matching against `pattern`
         * @param pattern pattern to match (after mask is applied)
         * @param offset offset into the adapter data from which to start scanning, returns          the last scanned position.
         * @param size number of bytes to scan from offset
         * @returns offset of the first match, or -1 if no match was found.
         */
        masked_scan_uint32_peek(mask: number, pattern: number, offset: number, size: number): [number, number];
        /**
         * Get the offset that was on the last buffer with the GST_BUFFER_FLAG_DISCONT
         * flag, or GST_BUFFER_OFFSET_NONE.
         * @returns The offset at the last discont or GST_BUFFER_OFFSET_NONE.
         */
        offset_at_discont(): number;
        /**
         * Get the dts that was before the current byte in the adapter. When
         * `distance` is given, the amount of bytes between the dts and the current
         * position is returned.
         *
         * The dts is reset to GST_CLOCK_TIME_NONE and the distance is set to 0 when
         * the adapter is first created or when it is cleared. This also means that before
         * the first byte with a dts is added to the adapter, the dts
         * and distance returned are GST_CLOCK_TIME_NONE and 0 respectively.
         * @returns The previously seen dts.
         */
        prev_dts(): [Gst.ClockTime, number];
        /**
         * Get the dts that was before the byte at offset `offset` in the adapter. When
         * `distance` is given, the amount of bytes between the dts and the current
         * position is returned.
         *
         * The dts is reset to GST_CLOCK_TIME_NONE and the distance is set to 0 when
         * the adapter is first created or when it is cleared. This also means that before
         * the first byte with a dts is added to the adapter, the dts
         * and distance returned are GST_CLOCK_TIME_NONE and 0 respectively.
         * @param offset the offset in the adapter at which to get timestamp
         * @returns The previously seen dts at given offset.
         */
        prev_dts_at_offset(offset: number): [Gst.ClockTime, number];
        /**
         * Get the offset that was before the current byte in the adapter. When
         * `distance` is given, the amount of bytes between the offset and the current
         * position is returned.
         *
         * The offset is reset to GST_BUFFER_OFFSET_NONE and the distance is set to 0
         * when the adapter is first created or when it is cleared. This also means that
         * before the first byte with an offset is added to the adapter, the offset
         * and distance returned are GST_BUFFER_OFFSET_NONE and 0 respectively.
         * @returns The previous seen offset.
         */
        prev_offset(): [number, number];
        /**
         * Get the pts that was before the current byte in the adapter. When
         * `distance` is given, the amount of bytes between the pts and the current
         * position is returned.
         *
         * The pts is reset to GST_CLOCK_TIME_NONE and the distance is set to 0 when
         * the adapter is first created or when it is cleared. This also means that before
         * the first byte with a pts is added to the adapter, the pts
         * and distance returned are GST_CLOCK_TIME_NONE and 0 respectively.
         * @returns The previously seen pts.
         */
        prev_pts(): [Gst.ClockTime, number];
        /**
         * Get the pts that was before the byte at offset `offset` in the adapter. When
         * `distance` is given, the amount of bytes between the pts and the current
         * position is returned.
         *
         * The pts is reset to GST_CLOCK_TIME_NONE and the distance is set to 0 when
         * the adapter is first created or when it is cleared. This also means that before
         * the first byte with a pts is added to the adapter, the pts
         * and distance returned are GST_CLOCK_TIME_NONE and 0 respectively.
         * @param offset the offset in the adapter at which to get timestamp
         * @returns The previously seen pts at given offset.
         */
        prev_pts_at_offset(offset: number): [Gst.ClockTime, number];
        /**
         * Get the PTS that was on the last buffer with the GST_BUFFER_FLAG_DISCONT
         * flag, or GST_CLOCK_TIME_NONE.
         * @returns The PTS at the last discont or GST_CLOCK_TIME_NONE.
         */
        pts_at_discont(): Gst.ClockTime;
        /**
         * Adds the data from `buf` to the data stored inside `adapter` and takes
         * ownership of the buffer.
         * @param buf a {@link Gst.Buffer} to add to queue in the adapter
         */
        push(buf: Gst.Buffer): void;
        /**
         * Returns a freshly allocated buffer containing the first `nbytes` bytes of the
         * `adapter`. The returned bytes will be flushed from the adapter.
         *
         * Caller owns returned value. g_free after usage.
         *
         * Free-function: g_free
         * @returns oven-fresh hot data, or `null` if `nbytes` bytes are not available
         */
        take(): Uint8Array | null;
        /**
         * Returns a {@link Gst.Buffer} containing the first `nbytes` bytes of the
         * `adapter`. The returned bytes will be flushed from the adapter.
         * This function is potentially more performant than
         * `gst_adapter_take()` since it can reuse the memory in pushed buffers
         * by subbuffering or merging. This function will always return a
         * buffer with a single memory region.
         *
         * Note that no assumptions should be made as to whether certain buffer
         * flags such as the DISCONT flag are set on the returned buffer, or not.
         * The caller needs to explicitly set or unset flags that should be set or
         * unset.
         *
         * Likewise, no assumptions should be made about timestamps and offset of the
         * returned buffer. The caller should use `gst_adapter_prev_pts()`,
         * `gst_adapter_prev_dts()`, and `gst_adapter_prev_offset()` to obtain the relevant
         * information.
         *
         * The returned buffer might not be writable, use `gst_buffer_make_writable()`
         * if you need to change e.g. flags or timestamps.
         *
         * Since 1.6 this will also copy over all GstMeta of the input buffers except
         * for meta with the {@link Gst.MetaFlags.POOLED} flag or with the "memory" tag.
         *
         * Caller owns a reference to the returned buffer. `gst_buffer_unref()` after
         * usage.
         *
         * Free-function: gst_buffer_unref
         * @param nbytes the number of bytes to take
         * @returns a {@link Gst.Buffer} containing the first     `nbytes` of the adapter, or `null` if `nbytes` bytes are not available.     `gst_buffer_unref()` when no longer needed.
         */
        take_buffer(nbytes: number): Gst.Buffer | null;
        /**
         * Returns a {@link Gst.Buffer} containing the first `nbytes` of the `adapter`.
         * The returned bytes will be flushed from the adapter.  This function
         * is potentially more performant than `gst_adapter_take_buffer()` since
         * it can reuse the memory in pushed buffers by subbuffering or
         * merging. Unlike `gst_adapter_take_buffer()`, the returned buffer may
         * be composed of multiple non-contiguous {@link Gst.Memory} objects, no
         * copies are made.
         *
         * Note that no assumptions should be made as to whether certain buffer
         * flags such as the DISCONT flag are set on the returned buffer, or not.
         * The caller needs to explicitly set or unset flags that should be set or
         * unset.
         *
         * This will also copy over all GstMeta of the input buffers except
         * for meta with the {@link Gst.MetaFlags.POOLED} flag or with the "memory" tag.
         *
         * This function can return buffer up to the return value of
         * `gst_adapter_available()` without making copies if possible.
         *
         * Caller owns a reference to the returned buffer. `gst_buffer_unref()` after
         * usage.
         *
         * Free-function: gst_buffer_unref
         * @param nbytes the number of bytes to take
         * @returns a {@link Gst.Buffer} containing the first     `nbytes` of the adapter, or `null` if `nbytes` bytes are not available.     `gst_buffer_unref()` when no longer needed.
         */
        take_buffer_fast(nbytes: number): Gst.Buffer | null;
        /**
         * Returns a {@link Gst.BufferList} of buffers containing the first `nbytes` bytes of
         * the `adapter`. The returned bytes will be flushed from the adapter.
         * When the caller can deal with individual buffers, this function is more
         * performant because no memory should be copied.
         *
         * Caller owns the returned list. Call `gst_buffer_list_unref()` to free
         * the list after usage.
         * @param nbytes the number of bytes to take
         * @returns a {@link Gst.BufferList} of buffers containing     the first `nbytes` of the adapter, or `null` if `nbytes` bytes are not     available
         */
        take_buffer_list(nbytes: number): Gst.BufferList | null;
        /**
         * Returns a {@link GLib.List} of buffers containing the first `nbytes` bytes of the
         * `adapter`. The returned bytes will be flushed from the adapter.
         * When the caller can deal with individual buffers, this function is more
         * performant because no memory should be copied.
         *
         * Caller owns returned list and contained buffers. `gst_buffer_unref()` each
         * buffer in the list before freeing the list after usage.
         * @param nbytes the number of bytes to take
         * @returns a {@link GLib.List} of     buffers containing the first `nbytes` of the adapter, or `null` if `nbytes`     bytes are not available
         */
        take_list(nbytes: number): Gst.Buffer[] | null;
        /**
         * Releases the memory obtained with the last `gst_adapter_map()`.
         */
        unmap(): void;
    }

    namespace Aggregator {
        // Signal signatures
        interface SignalSignatures extends Gst.Element.SignalSignatures {
            /**
             * Signals that the {@link GstBase.Aggregator} subclass has selected the next set
             * of input samples it will aggregate. Handlers may call
             * `gst_aggregator_peek_next_sample()` at that point.
             * @signal
             * @since 1.18
             * @run-first
             */
            'samples-selected': (
                arg0: Gst.Segment,
                arg1: number,
                arg2: number,
                arg3: number,
                arg4: Gst.Structure | null,
            ) => void;
            'notify::emit-signals': (pspec: GObject.ParamSpec) => void;
            'notify::latency': (pspec: GObject.ParamSpec) => void;
            'notify::min-upstream-latency': (pspec: GObject.ParamSpec) => void;
            'notify::start-time': (pspec: GObject.ParamSpec) => void;
            'notify::start-time-selection': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Element.ConstructorProps {
            emit_signals: boolean;
            emitSignals: boolean;
            latency: number;
            min_upstream_latency: number;
            minUpstreamLatency: number;
            start_time: number | any;
            startTime: number;
            start_time_selection: AggregatorStartTimeSelection;
            startTimeSelection: AggregatorStartTimeSelection;
        }
    }

    /**
     * Manages a set of pads with the purpose of aggregating their buffers.
     * Control is given to the subclass when all pads have data.
     *
     *  * Base class for mixers and muxers. Subclasses should at least implement
     *    the {@link GstBase.AggregatorClass.SignalSignatures.aggregate | GstBase.AggregatorClass::aggregate} virtual method.
     *
     *  * Installs a {@link Gst.PadChainFunction}, a {@link Gst.PadEventFullFunction} and a
     *    {@link Gst.PadQueryFunction} to queue all serialized data packets per sink pad.
     *    Subclasses should not overwrite those, but instead implement
     *    {@link GstBase.AggregatorClass.SignalSignatures.sink_event | GstBase.AggregatorClass::sink_event} and {@link GstBase.AggregatorClass.SignalSignatures.sink_query | GstBase.AggregatorClass::sink_query} as
     *    needed.
     *
     *  * When data is queued on all pads, the aggregate vmethod is called.
     *
     *  * One can peek at the data on any given GstAggregatorPad with the
     *    `gst_aggregator_pad_peek_buffer()` method, and remove it from the pad
     *    with the gst_aggregator_pad_pop_buffer () method. When a buffer
     *    has been taken with pop_buffer (), a new buffer can be queued
     *    on that pad.
     *
     *  * When `gst_aggregator_pad_peek_buffer()` or `gst_aggregator_pad_has_buffer()`
     *    are called, a reference is taken to the returned buffer, which stays
     *    valid until either:
     *
     *      - `gst_aggregator_pad_pop_buffer()` is called, in which case the caller
     *        is guaranteed that the buffer they receive is the same as the peeked
     *        buffer.
     *      - `gst_aggregator_pad_drop_buffer()` is called, in which case the caller
     *        is guaranteed that the dropped buffer is the one that was peeked.
     *      - the subclass implementation of {@link GstBase.AggregatorClass}.aggregate returns.
     *
     *    Subsequent calls to `gst_aggregator_pad_peek_buffer()` or
     *    `gst_aggregator_pad_has_buffer()` return / check the same buffer that was
     *    returned / checked, until one of the conditions listed above is met.
     *
     *    Subclasses are only allowed to call these methods from the aggregate
     *    thread.
     *
     *  * If the subclass wishes to push a buffer downstream in its aggregate
     *    implementation, it should do so through the
     *    `gst_aggregator_finish_buffer()` method. This method will take care
     *    of sending and ordering mandatory events such as stream start, caps
     *    and segment. Buffer lists can also be pushed out with
     *    `gst_aggregator_finish_buffer_list()`.
     *
     *  * Same goes for EOS events, which should not be pushed directly by the
     *    subclass, it should instead return GST_FLOW_EOS in its aggregate
     *    implementation.
     *
     *  * Note that the aggregator logic regarding gap event handling is to turn
     *    these into gap buffers with matching PTS and duration. It will also
     *    flag these buffers with GST_BUFFER_FLAG_GAP and GST_BUFFER_FLAG_DROPPABLE
     *    to ease their identification and subsequent processing.
     *    In addition, if the gap event was flagged with GST_GAP_FLAG_MISSING_DATA,
     *    a custom meta is added to the resulting gap buffer (GstAggregatorMissingDataMeta).
     *
     *  * Subclasses must use (a subclass of) {@link GstBase.AggregatorPad} for both their
     *    sink and source pads.
     *    See `gst_element_class_add_static_pad_template_with_gtype()`.
     *
     * This class used to live in gst-plugins-bad and was moved to core.
     * @gir-type Class
     * @since 1.14
     */
    abstract class Aggregator extends Gst.Element {
        static $gtype: GObject.GType<Aggregator>;

        // Properties

        /**
         * Enables the emission of signals such as {@link GstBase.Aggregator.SignalSignatures.samples_selected | GstBase.Aggregator::samples-selected}
         * @since 1.18
         */
        get emit_signals(): boolean;
        set emit_signals(val: boolean);
        /**
         * Enables the emission of signals such as {@link GstBase.Aggregator.SignalSignatures.samples_selected | GstBase.Aggregator::samples-selected}
         * @since 1.18
         */
        get emitSignals(): boolean;
        set emitSignals(val: boolean);
        get latency(): number;
        set latency(val: number);
        /**
         * Force minimum upstream latency (in nanoseconds). When sources with a
         * higher latency are expected to be plugged in dynamically after the
         * aggregator has started playing, this allows overriding the minimum
         * latency reported by the initial source(s). This is only taken into
         * account when larger than the actually reported minimum latency.
         * @since 1.16
         */
        get min_upstream_latency(): number;
        set min_upstream_latency(val: number);
        /**
         * Force minimum upstream latency (in nanoseconds). When sources with a
         * higher latency are expected to be plugged in dynamically after the
         * aggregator has started playing, this allows overriding the minimum
         * latency reported by the initial source(s). This is only taken into
         * account when larger than the actually reported minimum latency.
         * @since 1.16
         */
        get minUpstreamLatency(): number;
        set minUpstreamLatency(val: number);
        // This accessor conflicts with a property or field in a parent class or interface.
        start_time: number | any;
        get startTime(): number;
        set startTime(val: number);
        get start_time_selection(): AggregatorStartTimeSelection;
        set start_time_selection(val: AggregatorStartTimeSelection);
        get startTimeSelection(): AggregatorStartTimeSelection;
        set startTimeSelection(val: AggregatorStartTimeSelection);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Aggregator.SignalSignatures;

        // Fields

        srcpad: Gst.Pad;

        // Constructors

        constructor(properties?: Partial<Aggregator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Aggregator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Aggregator.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Aggregator.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Aggregator.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Aggregator.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Aggregator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Mandatory.
         *                  Called when buffers are queued on all sinkpads. Classes
         *                  should iterate the GstElement->sinkpads and peek or steal
         *                  buffers from the `GstAggregatorPads`. If the subclass returns
         *                  GST_FLOW_EOS, sending of the eos event will be taken care
         *                  of. Once / if a buffer has been constructed from the
         *                  aggregated buffers, the subclass should call _finish_buffer.
         * @param timeout
         * @virtual
         */
        vfunc_aggregate(timeout: boolean): Gst.FlowReturn;
        /**
         * Called when a buffer is received on a sink pad, the task of
         * clipping it and translating it to the current segment falls
         * on the subclass. The function should use the segment of data
         * and the negotiated media type on the pad to perform
         * clipping of input buffer. This function takes ownership of
         * buf and should output a buffer or return NULL in
         * if the buffer should be dropped.
         * @param aggregator_pad a {@link GstBase.AggregatorPad}
         * @param buf a {@link Gst.Buffer}
         * @virtual
         */
        vfunc_clip(aggregator_pad: AggregatorPad, buf: Gst.Buffer): Gst.Buffer | null;
        /**
         * Called when a new pad needs to be created. Allows subclass that
         * don't have a single sink pad template to provide a pad based
         * on the provided information.
         * @param templ the pad template to use
         * @param req_name requested pad name
         * @param caps caps for the pad
         * @virtual
         */
        vfunc_create_new_pad(templ: Gst.PadTemplate, req_name?: string | null, caps?: Gst.Caps | null): AggregatorPad;
        /**
         * Optional.
         *                     Allows the subclass to influence the allocation choices.
         *                     Setup the allocation parameters for allocating output
         *                     buffers. The passed in query contains the result of the
         *                     downstream allocation query.
         * @param query
         * @virtual
         */
        vfunc_decide_allocation(query: Gst.Query): boolean;
        /**
         * This method will push the provided output buffer downstream. If needed,
         * mandatory events such as stream-start, caps, and segment events will be
         * sent before pushing the buffer.
         * @param buffer the {@link Gst.Buffer} to push.
         * @virtual
         */
        vfunc_finish_buffer(buffer: Gst.Buffer): Gst.FlowReturn;
        /**
         * This method will push the provided output buffer list downstream. If needed,
         * mandatory events such as stream-start, caps, and segment events will be
         * sent before pushing the buffer.
         * @param bufferlist the {@link Gst.BufferList} to push.
         * @virtual
         */
        vfunc_finish_buffer_list(bufferlist: Gst.BufferList): Gst.FlowReturn;
        /**
         * Fixate and return the src pad caps provided. The function takes
         * ownership of `caps` and returns a fixated version of
         * `caps`. `caps` is not guaranteed to be writable.
         * @param caps a {@link Gst.Caps} to fixate
         * @virtual
         */
        vfunc_fixate_src_caps(caps: Gst.Caps): Gst.Caps;
        /**
         * Optional.
         *                  Called after a successful flushing seek, once all the flush
         *                  stops have been received. Flush pad-specific data in
         *                  {@link GstBase.AggregatorPad}->flush.
         * @virtual
         */
        vfunc_flush(): Gst.FlowReturn;
        /**
         * Optional.
         *                  Called when the element needs to know the running time of the next
         *                  rendered buffer for live pipelines. This causes deadline
         *                  based aggregation to occur. Defaults to returning
         *                  GST_CLOCK_TIME_NONE causing the element to wait for buffers
         *                  on all sink pads before aggregating.
         * @virtual
         */
        vfunc_get_next_time(): Gst.ClockTime;
        /**
         * Negotiates src pad caps with downstream elements.
         * Unmarks GST_PAD_FLAG_NEED_RECONFIGURE in any case. But marks it again
         * if {@link GstBase.AggregatorClass.SignalSignatures.negotiate | GstBase.AggregatorClass::negotiate} fails.
         * @virtual
         */
        vfunc_negotiate(): boolean;
        /**
         * Optional.
         *                       Notifies subclasses what caps format has been negotiated
         * @param caps
         * @virtual
         */
        vfunc_negotiated_src_caps(caps: Gst.Caps): boolean;
        /**
         * Use this function to determine what input buffers will be aggregated
         * to produce the next output buffer. This should only be called from
         * a {@link GstBase.Aggregator.SignalSignatures.samples_selected | GstBase.Aggregator::samples-selected} handler, and can be used to precisely
         * control aggregating parameters for a given set of input samples.
         * @param aggregator_pad a {@link GstBase.AggregatorPad}
         * @virtual
         */
        vfunc_peek_next_sample(aggregator_pad: AggregatorPad): Gst.Sample | null;
        /**
         * Optional.
         *                     Allows the subclass to handle the allocation query from upstream.
         * @param pad
         * @param decide_query
         * @param query
         * @virtual
         */
        vfunc_propose_allocation(pad: AggregatorPad, decide_query: Gst.Query, query: Gst.Query): boolean;
        /**
         * Called when an event is received on a sink pad, the subclass
         * should always chain up.
         * @param aggregator_pad a {@link GstBase.AggregatorPad}
         * @param event a {@link Gst.Event}
         * @virtual
         */
        vfunc_sink_event(aggregator_pad: AggregatorPad, event: Gst.Event): boolean;
        /**
         * Called when an event is received on a sink pad before queueing up
         * serialized events. The subclass should always chain up (Since: 1.18).
         * @param aggregator_pad a {@link GstBase.AggregatorPad}
         * @param event a {@link Gst.Event}
         * @virtual
         */
        vfunc_sink_event_pre_queue(aggregator_pad: AggregatorPad, event: Gst.Event): Gst.FlowReturn;
        /**
         * Optional.
         *                  Called when a query is received on a sink pad, the subclass
         *                  should always chain up.
         * @param aggregator_pad
         * @param query
         * @virtual
         */
        vfunc_sink_query(aggregator_pad: AggregatorPad, query: Gst.Query): boolean;
        /**
         * Optional.
         *                        Called when a query is received on a sink pad before queueing up
         *                        serialized queries. The subclass should always chain up (Since: 1.18).
         * @param aggregator_pad
         * @param query
         * @virtual
         */
        vfunc_sink_query_pre_queue(aggregator_pad: AggregatorPad, query: Gst.Query): boolean;
        /**
         * Optional.
         *                  Called when the src pad is activated, it will start/stop its
         *                  pad task right after that call.
         * @param mode
         * @param active
         * @virtual
         */
        vfunc_src_activate(mode: Gst.PadMode, active: boolean): boolean;
        /**
         * Called when an event is received on the src pad, the subclass
         * should always chain up.
         * @param event a {@link Gst.Event}
         * @virtual
         */
        vfunc_src_event(event: Gst.Event): boolean;
        /**
         * Optional.
         *                  Called when a query is received on the src pad, the subclass
         *                  should always chain up.
         * @param query
         * @virtual
         */
        vfunc_src_query(query: Gst.Query): boolean;
        /**
         * Optional.
         *                  Called when the element goes from READY to PAUSED.
         *                  The subclass should get ready to process
         *                  aggregated buffers.
         * @virtual
         */
        vfunc_start(): boolean;
        /**
         * Optional.
         *                  Called when the element goes from PAUSED to READY.
         *                  The subclass should free all resources and reset its state.
         * @virtual
         */
        vfunc_stop(): boolean;
        /**
         * @param caps the new source pad {@link Gst.Caps}
         * @virtual
         */
        vfunc_update_src_caps(caps: Gst.Caps): [Gst.FlowReturn, Gst.Caps | null];

        // Methods

        /**
         * This method will push the provided output buffer downstream. If needed,
         * mandatory events such as stream-start, caps, and segment events will be
         * sent before pushing the buffer.
         * @param buffer the {@link Gst.Buffer} to push.
         */
        finish_buffer(buffer: Gst.Buffer): Gst.FlowReturn;
        /**
         * This method will push the provided output buffer list downstream. If needed,
         * mandatory events such as stream-start, caps, and segment events will be
         * sent before pushing the buffer.
         * @param bufferlist the {@link Gst.BufferList} to push.
         */
        finish_buffer_list(bufferlist: Gst.BufferList): Gst.FlowReturn;
        /**
         * Lets {@link GstBase.Aggregator} sub-classes get the memory `allocator`
         * acquired by the base class and its `params`.
         *
         * Unref the `allocator` after use it.
         */
        get_allocator(): [Gst.Allocator | null, Gst.AllocationParams | null];
        /**
         * @returns the instance of the {@link Gst.BufferPool} used by `trans`; free it after use it
         */
        get_buffer_pool(): Gst.BufferPool | null;
        /**
         * Subclasses may use the return value to inform whether they should return
         * {@link Gst.FlowReturn.EOS} from their aggregate implementation.
         * @returns whether live status was forced on `self`.
         */
        get_force_live(): boolean;
        /**
         * @returns whether inactive pads will not be waited on
         */
        get_ignore_inactive_pads(): boolean;
        /**
         * Retrieves the latency values reported by `self` in response to the latency
         * query, or `GST_CLOCK_TIME_NONE` if there is not live source connected and the element
         * will not wait for the clock.
         *
         * Typically only called by subclasses.
         * @returns The latency or `GST_CLOCK_TIME_NONE` if the element does not sync
         */
        get_latency(): Gst.ClockTime;
        /**
         * Negotiates src pad caps with downstream elements.
         * Unmarks GST_PAD_FLAG_NEED_RECONFIGURE in any case. But marks it again
         * if {@link GstBase.AggregatorClass.SignalSignatures.negotiate | GstBase.AggregatorClass::negotiate} fails.
         * @returns `true` if the negotiation succeeded, else `false`.
         */
        negotiate(): boolean;
        /**
         * Use this function to determine what input buffers will be aggregated
         * to produce the next output buffer. This should only be called from
         * a {@link GstBase.Aggregator.SignalSignatures.samples_selected | GstBase.Aggregator::samples-selected} handler, and can be used to precisely
         * control aggregating parameters for a given set of input samples.
         * @param pad
         * @returns The sample that is about to be aggregated. It may hold a {@link Gst.Buffer}   or a {@link Gst.BufferList}. The contents of its info structure is subclass-dependent,   and documented on a subclass basis. The buffers held by the sample are   not writable.
         */
        peek_next_sample(pad: AggregatorPad): Gst.Sample | null;
        /**
         * This method will push the provided event downstream. If needed, mandatory
         * events such as stream-start, caps, and segment events will be sent before
         * pushing the event.
         *
         * This API does not allow pushing stream-start, caps, segment and EOS events.
         * Specific API like `gst_aggregator_set_src_caps()` should be used for these.
         * @param event the {@link Gst.Event} to push.
         */
        push_src_event(event: Gst.Event): boolean;
        /**
         * Subclasses should call this when they have prepared the
         * buffers they will aggregate for each of their sink pads, but
         * before using any of the properties of the pads that govern
         * *how* aggregation should be performed, for example z-index
         * for video aggregators.
         *
         * If `gst_aggregator_update_segment()` is used by the subclass,
         * it MUST be called before `gst_aggregator_selected_samples()`.
         *
         * This function MUST only be called from the {@link GstBase.AggregatorClass.SignalSignatures.aggregate | GstBase.AggregatorClass::aggregate}()
         * function.
         * @param pts The presentation timestamp of the next output buffer
         * @param dts The decoding timestamp of the next output buffer
         * @param duration The duration of the next output buffer
         * @param info a {@link Gst.Structure} containing additional information
         */
        selected_samples(
            pts: Gst.ClockTime,
            dts: Gst.ClockTime,
            duration: Gst.ClockTime,
            info?: Gst.Structure | null,
        ): void;
        /**
         * Subclasses should call this at construction time in order for `self` to
         * aggregate on a timeout even when no live source is connected.
         * @param force_live
         */
        set_force_live(force_live: boolean): void;
        /**
         * Subclasses should call this when they don't want to time out
         * waiting for a pad that hasn't yet received any buffers in live
         * mode.
         *
         * {@link GstBase.Aggregator} will still wait once on each newly-added pad, making
         * sure upstream has had a fair chance to start up.
         * @param ignore whether inactive pads should not be waited on
         */
        set_ignore_inactive_pads(ignore: boolean): void;
        /**
         * Lets {@link GstBase.Aggregator} sub-classes tell the baseclass what their internal
         * latency is. Will also post a LATENCY message on the bus so the pipeline
         * can reconfigure its global latency if the values changed.
         * @param min_latency minimum latency
         * @param max_latency maximum latency
         */
        set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void;
        /**
         * Sets the caps to be used on the src pad.
         * @param caps The {@link Gst.Caps} to set on the src pad.
         */
        set_src_caps(caps: Gst.Caps): void;
        /**
         * This is a simple {@link GstBase.AggregatorClass.SignalSignatures.get_next_time | GstBase.AggregatorClass::get_next_time} implementation that
         * just looks at the {@link Gst.Segment} on the srcpad of the aggregator and bases
         * the next time on the running time there.
         *
         * This is the desired behaviour in most cases where you have a live source
         * and you have a dead line based aggregator subclass.
         * @returns The running time based on the position
         */
        simple_get_next_time(): Gst.ClockTime;
        /**
         * Subclasses should use this to update the segment on their
         * source pad, instead of directly pushing new segment events
         * downstream.
         *
         * Subclasses MUST call this before `gst_aggregator_selected_samples()`,
         * if it is used at all.
         * @param segment
         */
        update_segment(segment: Gst.Segment): void;
    }

    namespace AggregatorPad {
        // Signal signatures
        interface SignalSignatures extends Gst.Pad.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            'buffer-consumed': (arg0: Gst.Buffer) => void;
            'notify::current-level-buffers': (pspec: GObject.ParamSpec) => void;
            'notify::current-level-bytes': (pspec: GObject.ParamSpec) => void;
            'notify::current-level-time': (pspec: GObject.ParamSpec) => void;
            'notify::emit-signals': (pspec: GObject.ParamSpec) => void;
            'notify::caps': (pspec: GObject.ParamSpec) => void;
            'notify::direction': (pspec: GObject.ParamSpec) => void;
            'notify::offset': (pspec: GObject.ParamSpec) => void;
            'notify::template': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Pad.ConstructorProps {
            current_level_buffers: number;
            currentLevelBuffers: number;
            current_level_bytes: number;
            currentLevelBytes: number;
            current_level_time: number;
            currentLevelTime: number;
            emit_signals: boolean;
            emitSignals: boolean;
        }
    }

    /**
     * Pads managed by a {@link GstBase.Aggregator} subclass.
     *
     * This class used to live in gst-plugins-bad and was moved to core.
     * @gir-type Class
     * @since 1.14
     */
    class AggregatorPad extends Gst.Pad {
        static $gtype: GObject.GType<AggregatorPad>;

        // Properties

        /**
         * The number of currently queued buffers inside this pad
         * @since 1.28
         * @read-only
         */
        get current_level_buffers(): number;
        /**
         * The number of currently queued buffers inside this pad
         * @since 1.28
         * @read-only
         */
        get currentLevelBuffers(): number;
        /**
         * The number of currently queued bytes inside this pad
         * @since 1.28
         * @read-only
         */
        get current_level_bytes(): number;
        /**
         * The number of currently queued bytes inside this pad
         * @since 1.28
         * @read-only
         */
        get currentLevelBytes(): number;
        /**
         * The amount of currently queued time inside this pad
         * @since 1.28
         * @read-only
         */
        get current_level_time(): number;
        /**
         * The amount of currently queued time inside this pad
         * @since 1.28
         * @read-only
         */
        get currentLevelTime(): number;
        /**
         * Enables the emission of signals such as {@link GstBase.AggregatorPad.SignalSignatures.buffer_consumed | GstBase.AggregatorPad::buffer-consumed}
         * @since 1.16
         */
        get emit_signals(): boolean;
        set emit_signals(val: boolean);
        /**
         * Enables the emission of signals such as {@link GstBase.AggregatorPad.SignalSignatures.buffer_consumed | GstBase.AggregatorPad::buffer-consumed}
         * @since 1.16
         */
        get emitSignals(): boolean;
        set emitSignals(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AggregatorPad.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AggregatorPad.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof AggregatorPad.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AggregatorPad.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AggregatorPad.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AggregatorPad.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AggregatorPad.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AggregatorPad.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Optional
         *               Called when the pad has received a flush stop, this is the place
         *               to flush any information specific to the pad, it allows for individual
         *               pads to be flushed while others might not be.
         * @param aggregator
         * @virtual
         */
        vfunc_flush(aggregator: Aggregator): Gst.FlowReturn;
        /**
         * Optional
         *               Called before input buffers are queued in the pad, return `true`
         *               if the buffer should be skipped.
         * @param aggregator
         * @param buffer
         * @virtual
         */
        vfunc_skip_buffer(aggregator: Aggregator, buffer: Gst.Buffer): boolean;

        // Methods

        /**
         * Drop the buffer currently queued in `pad`.
         * @returns TRUE if there was a buffer queued in `pad`, or FALSE if not.
         */
        drop_buffer(): boolean;
        /**
         * This checks if a pad has a buffer available that will be returned by
         * a call to `gst_aggregator_pad_peek_buffer()` or
         * `gst_aggregator_pad_pop_buffer()`.
         * @returns `true` if the pad has a buffer available as the next thing.
         */
        has_buffer(): boolean;
        /**
         * @returns `true` if the pad is EOS, otherwise `false`.
         */
        is_eos(): boolean;
        /**
         * It is only valid to call this method from {@link GstBase.AggregatorClass.SignalSignatures.aggregate | GstBase.AggregatorClass::aggregate}()
         * @returns `true` if the pad is inactive, `false` otherwise.   See `gst_aggregator_ignore_inactive_pads()` for more info.
         */
        is_inactive(): boolean;
        /**
         * @returns A reference to the buffer in `pad` or NULL if no buffer was queued. You should unref the buffer after usage.
         */
        peek_buffer(): Gst.Buffer | null;
        /**
         * Steal the ref to the buffer currently queued in `pad`.
         * @returns The buffer in `pad` or NULL if no buffer was   queued. You should unref the buffer after usage.
         */
        pop_buffer(): Gst.Buffer | null;
    }

    namespace BaseParse {
        // Signal signatures
        interface SignalSignatures extends Gst.Element.SignalSignatures {
            'notify::disable-clip': (pspec: GObject.ParamSpec) => void;
            'notify::disable-passthrough': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Element.ConstructorProps {
            disable_clip: boolean;
            disableClip: boolean;
            disable_passthrough: boolean;
            disablePassthrough: boolean;
        }
    }

    /**
     * This base class is for parser elements that process data and splits it
     * into separate audio/video/whatever frames.
     *
     * It provides for:
     *
     *   * provides one sink pad and one source pad
     *   * handles state changes
     *   * can operate in pull mode or push mode
     *   * handles seeking in both modes
     *   * handles events (SEGMENT/EOS/FLUSH)
     *   * handles queries (POSITION/DURATION/SEEKING/FORMAT/CONVERT)
     *   * handles flushing
     *
     * The purpose of this base class is to provide the basic functionality of
     * a parser and share a lot of rather complex code.
     *
     * # Description of the parsing mechanism:
     *
     * ## Set-up phase
     *
     *  * {@link GstBase.BaseParse} calls {@link GstBase.BaseParseClass.SignalSignatures.start | GstBase.BaseParseClass::start} to inform subclass
     *    that data processing is about to start now.
     *
     *  * {@link GstBase.BaseParse} class calls {@link GstBase.BaseParseClass.SignalSignatures.set_sink_caps | GstBase.BaseParseClass::set_sink_caps} to
     *    inform the subclass about incoming sinkpad caps. Subclass could
     *    already set the srcpad caps accordingly, but this might be delayed
     *    until calling `gst_base_parse_finish_frame()` with a non-queued frame.
     *
     *  * At least at this point subclass needs to tell the {@link GstBase.BaseParse} class
     *    how big data chunks it wants to receive (minimum frame size ). It can
     *    do this with `gst_base_parse_set_min_frame_size()`.
     *
     *  * {@link GstBase.BaseParse} class sets up appropriate data passing mode (pull/push)
     *    and starts to process the data.
     *
     * ## Parsing phase
     *
     *  * {@link GstBase.BaseParse} gathers at least min_frame_size bytes of data either
     *    by pulling it from upstream or collecting buffers in an internal
     *    {@link GstBase.Adapter}.
     *
     *  * A buffer of (at least) min_frame_size bytes is passed to subclass
     *    with {@link GstBase.BaseParseClass.SignalSignatures.handle_frame | GstBase.BaseParseClass::handle_frame}. Subclass checks the contents
     *    and can optionally return #GST_FLOW_OK along with an amount of data
     *    to be skipped to find a valid frame (which will result in a
     *    subsequent DISCONT).  If, otherwise, the buffer does not hold a
     *    complete frame, {@link GstBase.BaseParseClass.SignalSignatures.handle_frame | GstBase.BaseParseClass::handle_frame} can merely return
     *    and will be called again when additional data is available.  In push
     *    mode this amounts to an additional input buffer (thus minimal
     *    additional latency), in pull mode this amounts to some arbitrary
     *    reasonable buffer size increase.
     *
     *    Of course, `gst_base_parse_set_min_frame_size()` could also be used if
     *    a very specific known amount of additional data is required.  If,
     *    however, the buffer holds a complete valid frame, it can pass the
     *    size of this frame to `gst_base_parse_finish_frame()`.
     *
     *    If acting as a converter, it can also merely indicate consumed input
     *    data while simultaneously providing custom output data.  Note that
     *    baseclass performs some processing (such as tracking overall consumed
     *    data rate versus duration) for each finished frame, but other state
     *    is only updated upon each call to {@link GstBase.BaseParseClass.SignalSignatures.handle_frame | GstBase.BaseParseClass::handle_frame}
     *    (such as tracking upstream input timestamp).
     *
     *    Subclass is also responsible for setting the buffer metadata
     *    (e.g. buffer timestamp and duration, or keyframe if applicable).
     *    (although the latter can also be done by {@link GstBase.BaseParse} if it is
     *    appropriately configured, see below).  Frame is provided with
     *    timestamp derived from upstream (as much as generally possible),
     *    duration obtained from configuration (see below), and offset
     *    if meaningful (in pull mode).
     *
     *    Note that {@link GstBase.BaseParseClass.SignalSignatures.handle_frame | GstBase.BaseParseClass::handle_frame} might receive any small
     *    amount of input data when leftover data is being drained (e.g. at
     *    EOS).
     *
     *  * As part of finish frame processing, just prior to actually pushing
     *    the buffer in question, it is passed to
     *    {@link GstBase.BaseParseClass.SignalSignatures.pre_push_frame | GstBase.BaseParseClass::pre_push_frame} which gives subclass yet one last
     *    chance to examine buffer metadata, or to send some custom (tag)
     *    events, or to perform custom (segment) filtering.
     *
     *  * During the parsing process {@link GstBase.BaseParseClass} will handle both srcpad
     *    and sinkpad events. They will be passed to subclass if
     *    {@link GstBase.BaseParseClass.SignalSignatures.sink_event | GstBase.BaseParseClass::sink_event} or {@link GstBase.BaseParseClass.SignalSignatures.src_event | GstBase.BaseParseClass::src_event}
     *    implementations have been provided.
     *
     * ## Shutdown phase
     *
     * * {@link GstBase.BaseParse} class calls {@link GstBase.BaseParseClass.SignalSignatures.stop | GstBase.BaseParseClass::stop} to inform the
     *   subclass that data parsing will be stopped.
     *
     * Subclass is responsible for providing pad template caps for source and
     * sink pads. The pads need to be named "sink" and "src". It also needs to
     * set the fixed caps on srcpad, when the format is ensured (e.g.  when
     * base class calls subclass' {@link GstBase.BaseParseClass.SignalSignatures.set_sink_caps | GstBase.BaseParseClass::set_sink_caps} function).
     *
     * This base class uses {@link Gst.Format.DEFAULT} as a meaning of frames. So,
     * subclass conversion routine needs to know that conversion from
     * {@link Gst.Format.TIME} to {@link Gst.Format.DEFAULT} must return the
     * frame number that can be found from the given byte position.
     *
     * {@link GstBase.BaseParse} uses subclasses conversion methods also for seeking (or
     * otherwise uses its own default one, see also below).
     *
     * Subclass `start` and `stop` functions will be called to inform the beginning
     * and end of data processing.
     *
     * Things that subclass need to take care of:
     *
     * * Provide pad templates
     * * Fixate the source pad caps when appropriate
     * * Inform base class how big data chunks should be retrieved. This is
     *   done with `gst_base_parse_set_min_frame_size()` function.
     * * Examine data chunks passed to subclass with
     *   {@link GstBase.BaseParseClass.SignalSignatures.handle_frame | GstBase.BaseParseClass::handle_frame} and pass proper frame(s) to
     *   `gst_base_parse_finish_frame()`, and setting src pad caps and timestamps
     *   on frame.
     * * Provide conversion functions
     * * Update the duration information with `gst_base_parse_set_duration()`
     * * Optionally passthrough using `gst_base_parse_set_passthrough()`
     * * Configure various baseparse parameters using
     *   `gst_base_parse_set_average_bitrate()`, `gst_base_parse_set_syncable()`
     *   and `gst_base_parse_set_frame_rate()`.
     *
     * * In particular, if subclass is unable to determine a duration, but
     *   parsing (or specs) yields a frames per seconds rate, then this can be
     *   provided to {@link GstBase.BaseParse} to enable it to cater for buffer time
     *   metadata (which will be taken from upstream as much as
     *   possible). Internally keeping track of frame durations and respective
     *   sizes that have been pushed provides {@link GstBase.BaseParse} with an estimated
     *   bitrate. A default {@link GstBase.BaseParseClass.SignalSignatures.convert | GstBase.BaseParseClass::convert} (used if not
     *   overridden) will then use these rates to perform obvious conversions.
     *   These rates are also used to update (estimated) duration at regular
     *   frame intervals.
     * @gir-type Class
     */
    abstract class BaseParse extends Gst.Element {
        static $gtype: GObject.GType<BaseParse>;

        // Properties

        /**
         * Disable dropping buffers that are out of segment
         * @since 1.28
         */
        get disable_clip(): boolean;
        set disable_clip(val: boolean);
        /**
         * Disable dropping buffers that are out of segment
         * @since 1.28
         */
        get disableClip(): boolean;
        set disableClip(val: boolean);
        /**
         * If set to `true`, baseparse will unconditionally force parsing of the
         * incoming data. This can be required in the rare cases where the incoming
         * side-data (caps, pts, dts, ...) is not trusted by the user and wants to
         * force validation and parsing of the incoming data.
         * If set to `false`, decision of whether to parse the data or not is up to
         * the implementation (standard behaviour).
         */
        get disable_passthrough(): boolean;
        set disable_passthrough(val: boolean);
        /**
         * If set to `true`, baseparse will unconditionally force parsing of the
         * incoming data. This can be required in the rare cases where the incoming
         * side-data (caps, pts, dts, ...) is not trusted by the user and wants to
         * force validation and parsing of the incoming data.
         * If set to `false`, decision of whether to parse the data or not is up to
         * the implementation (standard behaviour).
         */
        get disablePassthrough(): boolean;
        set disablePassthrough(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BaseParse.SignalSignatures;

        // Fields

        element: Gst.Element;
        sinkpad: Gst.Pad;
        srcpad: Gst.Pad;
        flags: number;

        // Constructors

        constructor(properties?: Partial<BaseParse.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof BaseParse.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BaseParse.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BaseParse.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BaseParse.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BaseParse.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BaseParse.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Optional.
         *                  Convert between formats.
         * @param src_format
         * @param src_value
         * @param dest_format
         * @param dest_value
         * @virtual
         */
        vfunc_convert(src_format: Gst.Format, src_value: number, dest_format: Gst.Format, dest_value: number): boolean;
        /**
         * Optional.
         *                   Called until it doesn't return GST_FLOW_OK anymore for
         *                   the first buffers. Can be used by the subclass to detect
         *                   the stream format.
         * @param buffer
         * @virtual
         */
        vfunc_detect(buffer: Gst.Buffer): Gst.FlowReturn;
        /**
         * Optional.
         *                  Allows the subclass to do its own sink get caps if needed.
         * @param filter
         * @virtual
         */
        vfunc_get_sink_caps(filter: Gst.Caps): Gst.Caps;
        /**
         * Parses the input data into valid frames as defined by subclass
         * which should be passed to `gst_base_parse_finish_frame()`.
         * The frame's input buffer is guaranteed writable,
         * whereas the input frame ownership is held by caller
         * (so subclass should make a copy if it needs to hang on).
         * Input buffer (data) is provided by baseclass with as much
         * metadata set as possible by baseclass according to upstream
         * information and/or subclass settings,
         * though subclass may still set buffer timestamp and duration
         * if desired.
         * @param frame
         * @virtual
         */
        vfunc_handle_frame(frame: BaseParseFrame): [Gst.FlowReturn, number];
        /**
         * Optional.
         *                   Called just prior to pushing a frame (after any pending
         *                   events have been sent) to give subclass a chance to perform
         *                   additional actions at this time (e.g. tag sending) or to
         *                   decide whether this buffer should be dropped or not
         *                   (e.g. custom segment clipping).
         * @param frame
         * @virtual
         */
        vfunc_pre_push_frame(frame: BaseParseFrame): Gst.FlowReturn;
        /**
         * Optional.
         *                  Allows the subclass to be notified of the actual caps set.
         * @param caps
         * @virtual
         */
        vfunc_set_sink_caps(caps: Gst.Caps): boolean;
        /**
         * Optional.
         *                  Event handler on the sink pad. This function should chain
         *                  up to the parent implementation to let the default handler
         *                  run.
         * @param event
         * @virtual
         */
        vfunc_sink_event(event: Gst.Event): boolean;
        /**
         * Optional.
         *                   Query handler on the sink pad. This function should chain
         *                   up to the parent implementation to let the default handler
         *                   run (Since: 1.2)
         * @param query
         * @virtual
         */
        vfunc_sink_query(query: Gst.Query): boolean;
        /**
         * Optional.
         *                  Event handler on the source pad. Should chain up to the
         *                  parent to let the default handler run.
         * @param event
         * @virtual
         */
        vfunc_src_event(event: Gst.Event): boolean;
        /**
         * Optional.
         *                   Query handler on the source pad. Should chain up to the
         *                   parent to let the default handler run (Since: 1.2)
         * @param query
         * @virtual
         */
        vfunc_src_query(query: Gst.Query): boolean;
        /**
         * Optional.
         *                  Called when the element starts processing.
         *                  Allows opening external resources.
         * @virtual
         */
        vfunc_start(): boolean;
        /**
         * Optional.
         *                  Called when the element stops processing.
         *                  Allows closing external resources.
         * @virtual
         */
        vfunc_stop(): boolean;

        // Methods

        /**
         * Adds an entry to the index associating `offset` to `ts`.  It is recommended
         * to only add keyframe entries.  `force` allows to bypass checks, such as
         * whether the stream is (upstream) seekable, another entry is already "close"
         * to the new entry, etc.
         * @param offset offset of entry
         * @param ts timestamp associated with offset
         * @param key whether entry refers to keyframe
         * @param force add entry disregarding sanity checks
         * @returns `gboolean` indicating whether entry was added
         */
        add_index_entry(offset: number, ts: Gst.ClockTime, key: boolean, force: boolean): boolean;
        /**
         * Default implementation of {@link GstBase.BaseParseClass.SignalSignatures.convert | GstBase.BaseParseClass::convert}.
         * @param src_format {@link Gst.Format} describing the source format.
         * @param src_value Source value to be converted.
         * @param dest_format {@link Gst.Format} defining the converted format.
         * @returns `true` if conversion was successful.
         */
        convert_default(
            src_format: Gst.Format | null,
            src_value: number,
            dest_format: Gst.Format | null,
        ): [boolean, number];
        /**
         * Drains the adapter until it is empty. It decreases the min_frame_size to
         * match the current adapter size and calls chain method until the adapter
         * is emptied or chain returns with error.
         */
        drain(): void;
        /**
         * Collects parsed data and pushes it downstream.
         * Source pad caps must be set when this is called.
         *
         * If `frame`'s out_buffer is set, that will be used as subsequent frame data,
         * and `size` amount will be flushed from the input data. The output_buffer size
         * can differ from the consumed size indicated by `size`.
         *
         * Otherwise, `size` samples will be taken from the input and used for output,
         * and the output's metadata (timestamps etc) will be taken as (optionally)
         * set by the subclass on `frame`'s (input) buffer (which is otherwise
         * ignored for any but the above purpose/information).
         *
         * Note that the latter buffer is invalidated by this call, whereas the
         * caller retains ownership of `frame`.
         * @param frame a {@link GstBase.BaseParseFrame}
         * @param size consumed input data represented by frame
         * @returns a {@link Gst.FlowReturn} that should be escalated to caller (of caller)
         */
        finish_frame(frame: BaseParseFrame, size: number): Gst.FlowReturn;
        /**
         * Sets the parser subclass's tags and how they should be merged with any
         * upstream stream tags. This will override any tags previously-set
         * with `gst_base_parse_merge_tags()`.
         *
         * Note that this is provided for convenience, and the subclass is
         * not required to use this and can still do tag handling on its own.
         * @param tags a {@link Gst.TagList} to merge, or NULL to unset     previously-set tags
         * @param mode the {@link Gst.TagMergeMode} to use, usually #GST_TAG_MERGE_REPLACE
         */
        merge_tags(tags: Gst.TagList | null, mode: Gst.TagMergeMode | null): void;
        /**
         * Pushes the frame's buffer downstream, sends any pending events and
         * does some timestamp and segment handling. Takes ownership of
         * frame's buffer, though caller retains ownership of `frame`.
         *
         * This must be called with sinkpad STREAM_LOCK held.
         * @param frame a {@link GstBase.BaseParseFrame}
         * @returns {@link Gst.FlowReturn}
         */
        push_frame(frame: BaseParseFrame): Gst.FlowReturn;
        /**
         * Optionally sets the average bitrate detected in media (if non-zero),
         * e.g. based on metadata, as it will be posted to the application.
         *
         * By default, announced average bitrate is estimated. The average bitrate
         * is used to estimate the total duration of the stream and to estimate
         * a seek position, if there's no index and the format is syncable
         * (see `gst_base_parse_set_syncable()`).
         * @param bitrate average bitrate in bits/second
         */
        set_average_bitrate(bitrate: number): void;
        /**
         * Sets the duration of the currently playing media. Subclass can use this
         * when it is able to determine duration and/or notices a change in the media
         * duration.  Alternatively, if `interval` is non-zero (default), then stream
         * duration is determined based on estimated bitrate, and updated every `interval`
         * frames.
         * @param fmt {@link Gst.Format}.
         * @param duration duration value.
         * @param interval how often to update the duration estimate based on bitrate, or 0.
         */
        set_duration(fmt: Gst.Format | null, duration: number, interval: number): void;
        /**
         * If frames per second is configured, parser can take care of buffer duration
         * and timestamping.  When performing segment clipping, or seeking to a specific
         * location, a corresponding decoder might need an initial `lead_in` and a
         * following `lead_out` number of frames to ensure the desired segment is
         * entirely filled upon decoding.
         * @param fps_num frames per second (numerator).
         * @param fps_den frames per second (denominator).
         * @param lead_in frames needed before a segment for subsequent decode
         * @param lead_out frames needed after a segment
         */
        set_frame_rate(fps_num: number, fps_den: number, lead_in: number, lead_out: number): void;
        /**
         * Set if frames carry timing information which the subclass can (generally)
         * parse and provide.  In particular, intrinsic (rather than estimated) time
         * can be obtained following a seek.
         * @param has_timing whether frames carry timing information
         */
        set_has_timing_info(has_timing: boolean): void;
        /**
         * By default, the base class might try to infer PTS from DTS and vice
         * versa.  While this is generally correct for audio data, it may not
         * be otherwise. Sub-classes implementing such formats should disable
         * timestamp inferring.
         * @param infer_ts `true` if parser should infer DTS/PTS from each other
         */
        set_infer_ts(infer_ts: boolean): void;
        /**
         * Sets the minimum and maximum (which may likely be equal) latency introduced
         * by the parsing process. If there is such a latency, which depends on the
         * particular parsing of the format, it typically corresponds to 1 frame duration.
         *
         * If the provided values changed from previously provided ones, this will
         * also post a LATENCY message on the bus so the pipeline can reconfigure its
         * global latency.
         * @param min_latency minimum parse latency
         * @param max_latency maximum parse latency
         */
        set_latency(min_latency: Gst.ClockTime, max_latency: Gst.ClockTime): void;
        /**
         * Subclass can use this function to tell the base class that it needs to
         * be given buffers of at least `min_size` bytes.
         * @param min_size Minimum size in bytes of the data that this base class should       give to subclass.
         */
        set_min_frame_size(min_size: number): void;
        /**
         * Set if the nature of the format or configuration does not allow (much)
         * parsing, and the parser should operate in passthrough mode (which only
         * applies when operating in push mode). That is, incoming buffers are
         * pushed through unmodified, i.e. no {@link GstBase.BaseParseClass.SignalSignatures.handle_frame | GstBase.BaseParseClass::handle_frame}
         * will be invoked, but {@link GstBase.BaseParseClass.SignalSignatures.pre_push_frame | GstBase.BaseParseClass::pre_push_frame} will still be
         * invoked, so subclass can perform as much or as little is appropriate for
         * passthrough semantics in {@link GstBase.BaseParseClass.SignalSignatures.pre_push_frame | GstBase.BaseParseClass::pre_push_frame}.
         * @param passthrough `true` if parser should run in passthrough mode
         */
        set_passthrough(passthrough: boolean): void;
        /**
         * By default, the base class will guess PTS timestamps using a simple
         * interpolation (previous timestamp + duration), which is incorrect for
         * data streams with reordering, where PTS can go backward. Sub-classes
         * implementing such formats should disable PTS interpolation.
         * @param pts_interpolate `true` if parser should interpolate PTS timestamps
         */
        set_pts_interpolation(pts_interpolate: boolean): void;
        /**
         * Set if frame starts can be identified. This is set by default and
         * determines whether seeking based on bitrate averages
         * is possible for a format/stream.
         * @param syncable set if frame starts can be identified
         */
        set_syncable(syncable: boolean): void;
        /**
         * This function should only be called from a `handle_frame` implementation.
         *
         * {@link GstBase.BaseParse} creates initial timestamps for frames by using the last
         * timestamp seen in the stream before the frame starts.  In certain
         * cases, the correct timestamps will occur in the stream after the
         * start of the frame, but before the start of the actual picture data.
         * This function can be used to set the timestamps based on the offset
         * into the frame data that the picture starts.
         * @param offset offset into current buffer
         */
        set_ts_at_offset(offset: number): void;
    }

    namespace BaseSink {
        // Signal signatures
        interface SignalSignatures extends Gst.Element.SignalSignatures {
            'notify::async': (pspec: GObject.ParamSpec) => void;
            'notify::blocksize': (pspec: GObject.ParamSpec) => void;
            'notify::enable-last-sample': (pspec: GObject.ParamSpec) => void;
            'notify::last-sample': (pspec: GObject.ParamSpec) => void;
            'notify::max-bitrate': (pspec: GObject.ParamSpec) => void;
            'notify::max-lateness': (pspec: GObject.ParamSpec) => void;
            'notify::processing-deadline': (pspec: GObject.ParamSpec) => void;
            'notify::qos': (pspec: GObject.ParamSpec) => void;
            'notify::render-delay': (pspec: GObject.ParamSpec) => void;
            'notify::stats': (pspec: GObject.ParamSpec) => void;
            'notify::sync': (pspec: GObject.ParamSpec) => void;
            'notify::throttle-time': (pspec: GObject.ParamSpec) => void;
            'notify::ts-offset': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Element.ConstructorProps {
            async: boolean;
            blocksize: number;
            enable_last_sample: boolean;
            enableLastSample: boolean;
            last_sample: Gst.Sample;
            lastSample: Gst.Sample;
            max_bitrate: number;
            maxBitrate: number;
            max_lateness: number;
            maxLateness: number;
            processing_deadline: number;
            processingDeadline: number;
            qos: boolean;
            render_delay: number;
            renderDelay: number;
            stats: Gst.Structure;
            sync: boolean;
            throttle_time: number;
            throttleTime: number;
            ts_offset: number;
            tsOffset: number;
        }
    }

    /**
     * {@link GstBase.BaseSink} is the base class for sink elements in GStreamer, such as
     * xvimagesink or filesink. It is a layer on top of {@link Gst.Element} that provides a
     * simplified interface to plugin writers. {@link GstBase.BaseSink} handles many details
     * for you, for example: preroll, clock synchronization, state changes,
     * activation in push or pull mode, and queries.
     *
     * In most cases, when writing sink elements, there is no need to implement
     * class methods from {@link Gst.Element} or to set functions on pads, because the
     * {@link GstBase.BaseSink} infrastructure should be sufficient.
     *
     * {@link GstBase.BaseSink} provides support for exactly one sink pad, which should be
     * named "sink". A sink implementation (subclass of {@link GstBase.BaseSink}) should
     * install a pad template in its class_init function, like so:
     *
     * ```c
     * static void
     * my_element_class_init (GstMyElementClass *klass)
     * {
     *   GstElementClass *gstelement_class = GST_ELEMENT_CLASS (klass);
     *
     *   // sinktemplate should be a {@link Gst.StaticPadTemplate} with direction
     *   // {@link Gst.PadDirection.SINK} and name "sink"
     *   gst_element_class_add_static_pad_template (gstelement_class, &sinktemplate);
     *
     *   gst_element_class_set_static_metadata (gstelement_class,
     *       "Sink name",
     *       "Sink",
     *       "My Sink element",
     *       "The author <my.sink@my.email>");
     * }
     * ```
     *
     *
     * {@link GstBase.BaseSink} will handle the prerolling correctly. This means that it will
     * return {@link Gst.StateChangeReturn.ASYNC} from a state change to PAUSED until the first
     * buffer arrives in this element. The base class will call the
     * {@link GstBase.BaseSinkClass.SignalSignatures.preroll | GstBase.BaseSinkClass::preroll} vmethod with this preroll buffer and will then
     * commit the state change to the next asynchronously pending state.
     *
     * When the element is set to PLAYING, {@link GstBase.BaseSink} will synchronise on the
     * clock using the times returned from {@link GstBase.BaseSinkClass.SignalSignatures.get_times | GstBase.BaseSinkClass::get_times}. If this
     * function returns `GST_CLOCK_TIME_NONE` for the start time, no synchronisation
     * will be done. Synchronisation can be disabled entirely by setting the object
     * {@link GstBase.BaseSink.sync} property to `false`.
     *
     * After synchronisation the virtual method {@link GstBase.BaseSinkClass.SignalSignatures.render | GstBase.BaseSinkClass::render} will be
     * called. Subclasses should minimally implement this method.
     *
     * Subclasses that synchronise on the clock in the {@link GstBase.BaseSinkClass.SignalSignatures.render | GstBase.BaseSinkClass::render}
     * method are supported as well. These classes typically receive a buffer in
     * the render method and can then potentially block on the clock while
     * rendering. A typical example is an audiosink.
     * These subclasses can use `gst_base_sink_wait_preroll()` to perform the
     * blocking wait.
     *
     * Upon receiving the EOS event in the PLAYING state, {@link GstBase.BaseSink} will wait
     * for the clock to reach the time indicated by the stop time of the last
     * {@link GstBase.BaseSinkClass.SignalSignatures.get_times | GstBase.BaseSinkClass::get_times} call before posting an EOS message. When the
     * element receives EOS in PAUSED, preroll completes, the event is queued and an
     * EOS message is posted when going to PLAYING.
     *
     * {@link GstBase.BaseSink} will internally use the {@link Gst.EventType.SEGMENT} events to schedule
     * synchronisation and clipping of buffers. Buffers that fall completely outside
     * of the current segment are dropped. Buffers that fall partially in the
     * segment are rendered (and prerolled). Subclasses should do any subbuffer
     * clipping themselves when needed.
     *
     * {@link GstBase.BaseSink} will by default report the current playback position in
     * {@link Gst.Format.TIME} based on the current clock time and segment information.
     * If no clock has been set on the element, the query will be forwarded
     * upstream.
     *
     * The {@link GstBase.BaseSinkClass.SignalSignatures.set_caps | GstBase.BaseSinkClass::set_caps} function will be called when the subclass
     * should configure itself to process a specific media type.
     *
     * The {@link GstBase.BaseSinkClass.SignalSignatures.start | GstBase.BaseSinkClass::start} and {@link GstBase.BaseSinkClass.SignalSignatures.stop | GstBase.BaseSinkClass::stop} virtual methods
     * will be called when resources should be allocated. Any
     * {@link GstBase.BaseSinkClass.SignalSignatures.preroll | GstBase.BaseSinkClass::preroll}, {@link GstBase.BaseSinkClass.SignalSignatures.render | GstBase.BaseSinkClass::render} and
     * {@link GstBase.BaseSinkClass.SignalSignatures.set_caps | GstBase.BaseSinkClass::set_caps} function will be called between the
     * {@link GstBase.BaseSinkClass.SignalSignatures.start | GstBase.BaseSinkClass::start} and {@link GstBase.BaseSinkClass.SignalSignatures.stop | GstBase.BaseSinkClass::stop} calls.
     *
     * The {@link GstBase.BaseSinkClass.SignalSignatures.event | GstBase.BaseSinkClass::event} virtual method will be called when an event is
     * received by {@link GstBase.BaseSink}. Normally this method should only be overridden by
     * very specific elements (such as file sinks) which need to handle the
     * newsegment event specially.
     *
     * The {@link GstBase.BaseSinkClass.SignalSignatures.unlock | GstBase.BaseSinkClass::unlock} method is called when the elements should
     * unblock any blocking operations they perform in the
     * {@link GstBase.BaseSinkClass.SignalSignatures.render | GstBase.BaseSinkClass::render} method. This is mostly useful when the
     * {@link GstBase.BaseSinkClass.SignalSignatures.render | GstBase.BaseSinkClass::render} method performs a blocking write on a file
     * descriptor, for example.
     *
     * The {@link GstBase.BaseSink.max_lateness} property affects how the sink deals with
     * buffers that arrive too late in the sink. A buffer arrives too late in the
     * sink when the presentation time (as a combination of the last segment, buffer
     * timestamp and element base_time) plus the duration is before the current
     * time of the clock.
     * If the frame is later than max-lateness, the sink will drop the buffer
     * without calling the render method.
     * This feature is disabled if sync is disabled, the
     * {@link GstBase.BaseSinkClass.SignalSignatures.get_times | GstBase.BaseSinkClass::get_times} method does not return a valid start time or
     * max-lateness is set to -1 (the default).
     * Subclasses can use `gst_base_sink_set_max_lateness()` to configure the
     * max-lateness value.
     *
     * The {@link GstBase.BaseSink.qos} property will enable the quality-of-service features of
     * the basesink which gather statistics about the real-time performance of the
     * clock synchronisation. For each buffer received in the sink, statistics are
     * gathered and a QOS event is sent upstream with these numbers. This
     * information can then be used by upstream elements to reduce their processing
     * rate, for example.
     *
     * The {@link GstBase.BaseSink.async} property can be used to instruct the sink to never
     * perform an ASYNC state change. This feature is mostly usable when dealing
     * with non-synchronized streams or sparse streams.
     * @gir-type Class
     */
    abstract class BaseSink extends Gst.Element {
        static $gtype: GObject.GType<BaseSink>;

        // Properties

        /**
         * If set to `true`, the basesink will perform asynchronous state changes.
         * When set to `false`, the sink will not signal the parent when it prerolls.
         * Use this option when dealing with sparse streams or when synchronisation is
         * not required.
         */
        get async(): boolean;
        set async(val: boolean);
        /**
         * The amount of bytes to pull when operating in pull mode.
         */
        get blocksize(): number;
        set blocksize(val: number);
        /**
         * Enable the last-sample property. If `false`, basesink doesn't keep a
         * reference to the last buffer arrived and the last-sample property is always
         * set to `null`. This can be useful if you need buffers to be released as soon
         * as possible, eg. if you're using a buffer pool.
         */
        get enable_last_sample(): boolean;
        set enable_last_sample(val: boolean);
        /**
         * Enable the last-sample property. If `false`, basesink doesn't keep a
         * reference to the last buffer arrived and the last-sample property is always
         * set to `null`. This can be useful if you need buffers to be released as soon
         * as possible, eg. if you're using a buffer pool.
         */
        get enableLastSample(): boolean;
        set enableLastSample(val: boolean);
        /**
         * The last buffer that arrived in the sink and was used for preroll or for
         * rendering. This property can be used to generate thumbnails. This property
         * can be `null` when the sink has not yet received a buffer.
         * @read-only
         */
        get last_sample(): Gst.Sample;
        /**
         * The last buffer that arrived in the sink and was used for preroll or for
         * rendering. This property can be used to generate thumbnails. This property
         * can be `null` when the sink has not yet received a buffer.
         * @read-only
         */
        get lastSample(): Gst.Sample;
        /**
         * Control the maximum amount of bits that will be rendered per second.
         * Setting this property to a value bigger than 0 will make the sink delay
         * rendering of the buffers when it would exceed to max-bitrate.
         * @since 1.2
         */
        get max_bitrate(): number;
        set max_bitrate(val: number);
        /**
         * Control the maximum amount of bits that will be rendered per second.
         * Setting this property to a value bigger than 0 will make the sink delay
         * rendering of the buffers when it would exceed to max-bitrate.
         * @since 1.2
         */
        get maxBitrate(): number;
        set maxBitrate(val: number);
        get max_lateness(): number;
        set max_lateness(val: number);
        get maxLateness(): number;
        set maxLateness(val: number);
        /**
         * Maximum amount of time (in nanoseconds) that the pipeline can take
         * for processing the buffer. This is added to the latency of live
         * pipelines.
         * @since 1.16
         */
        get processing_deadline(): number;
        set processing_deadline(val: number);
        /**
         * Maximum amount of time (in nanoseconds) that the pipeline can take
         * for processing the buffer. This is added to the latency of live
         * pipelines.
         * @since 1.16
         */
        get processingDeadline(): number;
        set processingDeadline(val: number);
        get qos(): boolean;
        set qos(val: boolean);
        /**
         * The additional delay between synchronisation and actual rendering of the
         * media. This property will add additional latency to the device in order to
         * make other sinks compensate for the delay.
         */
        get render_delay(): number;
        set render_delay(val: number);
        /**
         * The additional delay between synchronisation and actual rendering of the
         * media. This property will add additional latency to the device in order to
         * make other sinks compensate for the delay.
         */
        get renderDelay(): number;
        set renderDelay(val: number);
        /**
         * Various {@link GstBase.BaseSink} statistics. This property returns a {@link Gst.Structure}
         * with name `application/x-gst-base-sink-stats` with the following fields:
         *
         * - "average-rate"  G_TYPE_DOUBLE   average frame rate
         * - "dropped" G_TYPE_UINT64   Number of dropped frames
         * - "rendered" G_TYPE_UINT64   Number of rendered frames
         * @since 1.18
         * @read-only
         */
        get stats(): Gst.Structure;
        get sync(): boolean;
        set sync(val: boolean);
        /**
         * The time to insert between buffers. This property can be used to control
         * the maximum amount of buffers per second to render. Setting this property
         * to a value bigger than 0 will make the sink create THROTTLE QoS events.
         */
        get throttle_time(): number;
        set throttle_time(val: number);
        /**
         * The time to insert between buffers. This property can be used to control
         * the maximum amount of buffers per second to render. Setting this property
         * to a value bigger than 0 will make the sink create THROTTLE QoS events.
         */
        get throttleTime(): number;
        set throttleTime(val: number);
        /**
         * Controls the final synchronisation, a negative value will render the buffer
         * earlier while a positive value delays playback. This property can be
         * used to fix synchronisation in bad files.
         */
        get ts_offset(): number;
        set ts_offset(val: number);
        /**
         * Controls the final synchronisation, a negative value will render the buffer
         * earlier while a positive value delays playback. This property can be
         * used to fix synchronisation in bad files.
         */
        get tsOffset(): number;
        set tsOffset(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BaseSink.SignalSignatures;

        // Fields

        element: Gst.Element;
        sinkpad: Gst.Pad;
        pad_mode: Gst.PadMode;
        offset: number;
        can_activate_pull: boolean;
        can_activate_push: boolean;
        eos: boolean;
        need_preroll: boolean;
        have_preroll: boolean;
        playing_async: boolean;
        have_newsegment: boolean;

        // Constructors

        constructor(properties?: Partial<BaseSink.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof BaseSink.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BaseSink.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BaseSink.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BaseSink.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BaseSink.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BaseSink.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Subclasses should override this when they can provide an
         *     alternate method of spawning a thread to drive the pipeline in pull mode.
         *     Should start or stop the pulling thread, depending on the value of the
         *     "active" argument. Called after actually activating the sink pad in pull
         *     mode. The default implementation starts a task on the sink pad.
         * @param active
         * @virtual
         */
        vfunc_activate_pull(active: boolean): boolean;
        /**
         * Override this to handle events arriving on the sink pad
         * @param event
         * @virtual
         */
        vfunc_event(event: Gst.Event): boolean;
        /**
         * Only useful in pull mode. Implement if you have
         *     ideas about what should be the default values for the caps you support.
         * @param caps
         * @virtual
         */
        vfunc_fixate(caps: Gst.Caps): Gst.Caps;
        /**
         * Called to get sink pad caps from the subclass.
         * @param filter
         * @virtual
         */
        vfunc_get_caps(filter?: Gst.Caps | null): Gst.Caps;
        /**
         * Get the start and end times for syncing on this buffer.
         * @param buffer
         * @virtual
         */
        vfunc_get_times(buffer: Gst.Buffer): [Gst.ClockTime, Gst.ClockTime];
        /**
         * Called to prepare the buffer for `render` and `preroll`. This
         *     function is called before synchronisation is performed.
         * @param buffer
         * @virtual
         */
        vfunc_prepare(buffer: Gst.Buffer): Gst.FlowReturn;
        /**
         * Called to prepare the buffer list for `render_list`. This
         *     function is called before synchronisation is performed.
         * @param buffer_list
         * @virtual
         */
        vfunc_prepare_list(buffer_list: Gst.BufferList): Gst.FlowReturn;
        /**
         * Called to present the preroll buffer if desired.
         * @param buffer
         * @virtual
         */
        vfunc_preroll(buffer: Gst.Buffer): Gst.FlowReturn;
        /**
         * configure the allocation query
         * @param query
         * @virtual
         */
        vfunc_propose_allocation(query: Gst.Query): boolean;
        /**
         * perform a {@link Gst.Query} on the element.
         * @param query
         * @virtual
         */
        vfunc_query(query: Gst.Query): boolean;
        /**
         * Called when a buffer should be presented or output, at the
         *     correct moment if the {@link GstBase.BaseSink} has been set to sync to the clock.
         * @param buffer
         * @virtual
         */
        vfunc_render(buffer: Gst.Buffer): Gst.FlowReturn;
        /**
         * Same as `render` but used with buffer lists instead of
         *     buffers.
         * @param buffer_list
         * @virtual
         */
        vfunc_render_list(buffer_list: Gst.BufferList): Gst.FlowReturn;
        /**
         * Notify subclass of changed caps
         * @param caps
         * @virtual
         */
        vfunc_set_caps(caps: Gst.Caps): boolean;
        /**
         * Start processing. Ideal for opening resources in the subclass
         * @virtual
         */
        vfunc_start(): boolean;
        /**
         * Stop processing. Subclasses should use this to close resources.
         * @virtual
         */
        vfunc_stop(): boolean;
        /**
         * Unlock any pending access to the resource. Subclasses should
         *     unblock any blocked function ASAP and call `gst_base_sink_wait_preroll()`
         * @virtual
         */
        vfunc_unlock(): boolean;
        /**
         * Clear the previous unlock request. Subclasses should clear
         *     any state they set during {@link GstBase.BaseSinkClass.SignalSignatures.unlock | GstBase.BaseSinkClass::unlock}, and be ready to
         *     continue where they left off after `gst_base_sink_wait_preroll()`,
         *     `gst_base_sink_wait()` or `gst_wait_sink_wait_clock()` return or
         *     {@link GstBase.BaseSinkClass.SignalSignatures.render | GstBase.BaseSinkClass::render} is called again.
         * @virtual
         */
        vfunc_unlock_stop(): boolean;
        /**
         * Override this to implement custom logic to wait for the event
         *     time (for events like EOS and GAP). Subclasses should always first
         *     chain up to the default implementation.
         * @param event
         * @virtual
         */
        vfunc_wait_event(event: Gst.Event): Gst.FlowReturn;

        // Methods

        /**
         * If the `sink` spawns its own thread for pulling buffers from upstream it
         * should call this method after it has pulled a buffer. If the element needed
         * to preroll, this function will perform the preroll and will then block
         * until the element state is changed.
         *
         * This function should be called with the PREROLL_LOCK held.
         * @param obj the mini object that caused the preroll
         * @returns {@link Gst.FlowReturn.OK} if the preroll completed and processing can continue. Any other return value should be returned from the render vmethod.
         */
        do_preroll(obj: Gst.MiniObject): Gst.FlowReturn;
        /**
         * Get the number of bytes that the sink will pull when it is operating in pull
         * mode.
         * @returns the number of bytes `sink` will pull in pull mode.
         */
        get_blocksize(): number;
        /**
         * Checks if `sink` is currently configured to drop buffers which are outside
         * the current segment
         * @returns `true` if the sink is configured to drop buffers outside the current segment.
         */
        get_drop_out_of_segment(): boolean;
        /**
         * Get the last sample that arrived in the sink and was used for preroll or for
         * rendering. This property can be used to generate thumbnails.
         *
         * The {@link Gst.Caps} on the sample can be used to determine the type of the buffer.
         *
         * Free-function: gst_sample_unref
         * @returns a {@link Gst.Sample}. `gst_sample_unref()` after     usage.  This function returns `null` when no buffer has arrived in the     sink yet or when the sink is not in PAUSED or PLAYING.
         */
        get_last_sample(): Gst.Sample | null;
        /**
         * Get the currently configured latency.
         * @returns The configured latency.
         */
        get_latency(): Gst.ClockTime;
        /**
         * Get the maximum amount of bits per second that the sink will render.
         * @returns the maximum number of bits per second `sink` will render.
         */
        get_max_bitrate(): number;
        /**
         * Gets the max lateness value. See `gst_base_sink_set_max_lateness()` for
         * more details.
         * @returns The maximum time in nanoseconds that a buffer can be late before it is dropped and not rendered. A value of -1 means an unlimited time.
         */
        get_max_lateness(): number;
        /**
         * Get the processing deadline of `sink`. see
         * `gst_base_sink_set_processing_deadline()` for more information about
         * the processing deadline.
         * @returns the processing deadline
         */
        get_processing_deadline(): Gst.ClockTime;
        /**
         * Get the render delay of `sink`. see `gst_base_sink_set_render_delay()` for more
         * information about the render delay.
         * @returns the render delay of `sink`.
         */
        get_render_delay(): Gst.ClockTime;
        /**
         * Return various {@link GstBase.BaseSink} statistics. This function returns a {@link Gst.Structure}
         * with name `application/x-gst-base-sink-stats` with the following fields:
         *
         * - "average-rate" G_TYPE_DOUBLE   average frame rate
         * - "dropped" G_TYPE_UINT64   Number of dropped frames
         * - "rendered" G_TYPE_UINT64   Number of rendered frames
         * @returns pointer to {@link Gst.Structure}
         */
        get_stats(): Gst.Structure;
        /**
         * Checks if `sink` is currently configured to synchronize against the
         * clock.
         * @returns `true` if the sink is configured to synchronize against the clock.
         */
        get_sync(): boolean;
        /**
         * Get the time that will be inserted between frames to control the
         * maximum buffers per second.
         * @returns the number of nanoseconds `sink` will put between frames.
         */
        get_throttle_time(): number;
        /**
         * Get the synchronisation offset of `sink`.
         * @returns The synchronisation offset.
         */
        get_ts_offset(): Gst.ClockTimeDiff;
        /**
         * Checks if `sink` is currently configured to perform asynchronous state
         * changes to PAUSED.
         * @returns `true` if the sink is configured to perform asynchronous state changes.
         */
        is_async_enabled(): boolean;
        /**
         * Checks if `sink` is currently configured to store the last received sample in
         * the last-sample property.
         * @returns `true` if the sink is configured to store the last received sample.
         */
        is_last_sample_enabled(): boolean;
        /**
         * Checks if `sink` is currently configured to send Quality-of-Service events
         * upstream.
         * @returns `true` if the sink is configured to perform Quality-of-Service.
         */
        is_qos_enabled(): boolean;
        /**
         * Query the sink for the latency parameters. The latency will be queried from
         * the upstream elements. `live` will be `true` if `sink` is configured to
         * synchronize against the clock. `upstream_live` will be `true` if an upstream
         * element is live.
         *
         * If both `live` and `upstream_live` are `true`, the sink will want to compensate
         * for the latency introduced by the upstream elements by setting the
         * `min_latency` to a strictly positive value.
         *
         * This function is mostly used by subclasses.
         * @returns `true` if the query succeeded.
         */
        query_latency(): [boolean, boolean, boolean, Gst.ClockTime | null, Gst.ClockTime | null];
        /**
         * Configures `sink` to perform all state changes asynchronously. When async is
         * disabled, the sink will immediately go to PAUSED instead of waiting for a
         * preroll buffer. This feature is useful if the sink does not synchronize
         * against the clock or when it is dealing with sparse streams.
         * @param enabled the new async value.
         */
        set_async_enabled(enabled: boolean): void;
        /**
         * Set the number of bytes that the sink will pull when it is operating in pull
         * mode.
         * @param blocksize the blocksize in bytes
         */
        set_blocksize(blocksize: number): void;
        /**
         * Configure `sink` to drop buffers which are outside the current segment
         * @param drop_out_of_segment drop buffers outside the segment
         */
        set_drop_out_of_segment(drop_out_of_segment: boolean): void;
        /**
         * Configures `sink` to store the last received sample in the last-sample
         * property.
         * @param enabled the new enable-last-sample value.
         */
        set_last_sample_enabled(enabled: boolean): void;
        /**
         * Set the maximum amount of bits per second that the sink will render.
         * @param max_bitrate the max_bitrate in bits per second
         */
        set_max_bitrate(max_bitrate: number): void;
        /**
         * Sets the new max lateness value to `max_lateness`. This value is
         * used to decide if a buffer should be dropped or not based on the
         * buffer timestamp and the current clock time. A value of -1 means
         * an unlimited time.
         * @param max_lateness the new max lateness value.
         */
        set_max_lateness(max_lateness: number): void;
        /**
         * Maximum amount of time (in nanoseconds) that the pipeline can take
         * for processing the buffer. This is added to the latency of live
         * pipelines.
         *
         * This function is usually called by subclasses.
         * @param processing_deadline the new processing deadline in nanoseconds.
         */
        set_processing_deadline(processing_deadline: Gst.ClockTime): void;
        /**
         * Configures `sink` to send Quality-of-Service events upstream.
         * @param enabled the new qos value.
         */
        set_qos_enabled(enabled: boolean): void;
        /**
         * Set the render delay in `sink` to `delay`. The render delay is the time
         * between actual rendering of a buffer and its synchronisation time. Some
         * devices might delay media rendering which can be compensated for with this
         * function.
         *
         * After calling this function, this sink will report additional latency and
         * other sinks will adjust their latency to delay the rendering of their media.
         *
         * This function is usually called by subclasses.
         * @param delay the new delay
         */
        set_render_delay(delay: Gst.ClockTime): void;
        /**
         * Configures `sink` to synchronize on the clock or not. When
         * `sync` is `false`, incoming samples will be played as fast as
         * possible. If `sync` is `true`, the timestamps of the incoming
         * buffers will be used to schedule the exact render time of its
         * contents.
         * @param sync the new sync value.
         */
        set_sync(sync: boolean): void;
        /**
         * Set the time that will be inserted between rendered buffers. This
         * can be used to control the maximum buffers per second that the sink
         * will render.
         * @param throttle the throttle time in nanoseconds
         */
        set_throttle_time(throttle: number): void;
        /**
         * Adjust the synchronisation of `sink` with `offset`. A negative value will
         * render buffers earlier than their timestamp. A positive value will delay
         * rendering. This function can be used to fix playback of badly timestamped
         * buffers.
         * @param offset the new offset
         */
        set_ts_offset(offset: Gst.ClockTimeDiff): void;
        /**
         * This function will wait for preroll to complete and will then block until `time`
         * is reached. It is usually called by subclasses that use their own internal
         * synchronisation but want to let some synchronization (like EOS) be handled
         * by the base class.
         *
         * This function should only be called with the PREROLL_LOCK held (like when
         * receiving an EOS event in the ::event vmethod or when handling buffers in
         * ::render).
         *
         * The `time` argument should be the running_time of when the timeout should happen
         * and will be adjusted with any latency and offset configured in the sink.
         * @param time the running_time to be reached
         * @returns {@link Gst.FlowReturn}
         */
        wait(time: Gst.ClockTime): [Gst.FlowReturn, Gst.ClockTimeDiff | null];
        /**
         * This function will block until `time` is reached. It is usually called by
         * subclasses that use their own internal synchronisation.
         *
         * If `time` is not valid, no synchronisation is done and {@link Gst.ClockReturn.BADTIME} is
         * returned. Likewise, if synchronisation is disabled in the element or there
         * is no clock, no synchronisation is done and {@link Gst.ClockReturn.BADTIME} is returned.
         *
         * This function should only be called with the PREROLL_LOCK held, like when
         * receiving an EOS event in the {@link GstBase.BaseSinkClass.SignalSignatures.event | GstBase.BaseSinkClass::event} vmethod or when
         * receiving a buffer in
         * the {@link GstBase.BaseSinkClass.SignalSignatures.render | GstBase.BaseSinkClass::render} vmethod.
         *
         * The `time` argument should be the running_time of when this method should
         * return and is not adjusted with any latency or offset configured in the
         * sink.
         * @param time the running_time to be reached
         * @returns {@link Gst.ClockReturn}
         */
        wait_clock(time: Gst.ClockTime): [Gst.ClockReturn, Gst.ClockTimeDiff | null];
        /**
         * If the {@link GstBase.BaseSinkClass.SignalSignatures.render | GstBase.BaseSinkClass::render} method performs its own synchronisation
         * against the clock it must unblock when going from PLAYING to the PAUSED state
         * and call this method before continuing to render the remaining data.
         *
         * If the {@link GstBase.BaseSinkClass.SignalSignatures.render | GstBase.BaseSinkClass::render} method can block on something else than
         * the clock, it must also be ready to unblock immediately on
         * the {@link GstBase.BaseSinkClass.SignalSignatures.unlock | GstBase.BaseSinkClass::unlock} method and cause the
         * {@link GstBase.BaseSinkClass.SignalSignatures.render | GstBase.BaseSinkClass::render} method to immediately call this function.
         * In this case, the subclass must be prepared to continue rendering where it
         * left off if this function returns {@link Gst.FlowReturn.OK}.
         *
         * This function will block until a state change to PLAYING happens (in which
         * case this function returns {@link Gst.FlowReturn.OK}) or the processing must be stopped due
         * to a state change to READY or a FLUSH event (in which case this function
         * returns {@link Gst.FlowReturn.FLUSHING}).
         *
         * This function should only be called with the PREROLL_LOCK held, like in the
         * render function.
         * @returns {@link Gst.FlowReturn.OK} if the preroll completed and processing can continue. Any other return value should be returned from the render vmethod.
         */
        wait_preroll(): Gst.FlowReturn;
    }

    namespace BaseSrc {
        // Signal signatures
        interface SignalSignatures extends Gst.Element.SignalSignatures {
            'notify::automatic-eos': (pspec: GObject.ParamSpec) => void;
            'notify::blocksize': (pspec: GObject.ParamSpec) => void;
            'notify::do-timestamp': (pspec: GObject.ParamSpec) => void;
            'notify::num-buffers': (pspec: GObject.ParamSpec) => void;
            'notify::typefind': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Element.ConstructorProps {
            automatic_eos: boolean;
            automaticEos: boolean;
            blocksize: number;
            do_timestamp: boolean;
            doTimestamp: boolean;
            num_buffers: number;
            numBuffers: number;
            typefind: boolean;
        }
    }

    /**
     * This is a generic base class for source elements. The following
     * types of sources are supported:
     *
     *   * random access sources like files
     *   * seekable sources
     *   * live sources
     *
     * The source can be configured to operate in any {@link Gst.Format} with the
     * `gst_base_src_set_format()` method. The currently set format determines
     * the format of the internal {@link Gst.Segment} and any {@link Gst.EventType.SEGMENT}
     * events. The default format for {@link GstBase.BaseSrc} is {@link Gst.Format.BYTES}.
     *
     * {@link GstBase.BaseSrc} always supports push mode scheduling. If the following
     * conditions are met, it also supports pull mode scheduling:
     *
     *   * The format is set to {@link Gst.Format.BYTES} (default).
     *   * {@link GstBase.BaseSrcClass.SignalSignatures.is_seekable | GstBase.BaseSrcClass::is_seekable} returns `true`.
     *
     * If all the conditions are met for operating in pull mode, {@link GstBase.BaseSrc} is
     * automatically seekable in push mode as well. The following conditions must
     * be met to make the element seekable in push mode when the format is not
     * {@link Gst.Format.BYTES}:
     *
     * * {@link GstBase.BaseSrcClass.SignalSignatures.is_seekable | GstBase.BaseSrcClass::is_seekable} returns `true`.
     * * {@link GstBase.BaseSrcClass.SignalSignatures.query | GstBase.BaseSrcClass::query} can convert all supported seek formats to the
     *   internal format as set with `gst_base_src_set_format()`.
     * * {@link GstBase.BaseSrcClass.SignalSignatures.do_seek | GstBase.BaseSrcClass::do_seek} is implemented, performs the seek and returns
     *    `true`.
     *
     * When the element does not meet the requirements to operate in pull mode, the
     * offset and length in the {@link GstBase.BaseSrcClass.SignalSignatures.create | GstBase.BaseSrcClass::create} method should be ignored.
     * It is recommended to subclass {@link GstBase.PushSrc} instead, in this situation. If the
     * element can operate in pull mode but only with specific offsets and
     * lengths, it is allowed to generate an error when the wrong values are passed
     * to the {@link GstBase.BaseSrcClass.SignalSignatures.create | GstBase.BaseSrcClass::create} function.
     *
     * {@link GstBase.BaseSrc} has support for live sources. Live sources are sources that when
     * paused discard data, such as audio or video capture devices. A typical live
     * source also produces data at a fixed rate and thus provides a clock to publish
     * this rate.
     * Use `gst_base_src_set_live()` to activate the live source mode.
     *
     * A live source does not produce data in the PAUSED state. This means that the
     * {@link GstBase.BaseSrcClass.SignalSignatures.create | GstBase.BaseSrcClass::create} method will not be called in PAUSED but only in
     * PLAYING. To signal the pipeline that the element will not produce data, the
     * return value from the READY to PAUSED state will be
     * {@link Gst.StateChangeReturn.NO_PREROLL}.
     *
     * A typical live source will timestamp the buffers it creates with the
     * current running time of the pipeline. This is one reason why a live source
     * can only produce data in the PLAYING state, when the clock is actually
     * distributed and running.
     *
     * Live sources that synchronize and block on the clock (an audio source, for
     * example) can use `gst_base_src_wait_playing()` when the
     * {@link GstBase.BaseSrcClass.SignalSignatures.create | GstBase.BaseSrcClass::create} function was interrupted by a state change to
     * PAUSED.
     *
     * The {@link GstBase.BaseSrcClass.SignalSignatures.get_times | GstBase.BaseSrcClass::get_times} method can be used to implement pseudo-live
     * sources. It only makes sense to implement the {@link GstBase.BaseSrcClass.SignalSignatures.get_times | GstBase.BaseSrcClass::get_times}
     * function if the source is a live source. The {@link GstBase.BaseSrcClass.SignalSignatures.get_times | GstBase.BaseSrcClass::get_times}
     * function should return timestamps starting from 0, as if it were a non-live
     * source. The base class will make sure that the timestamps are transformed
     * into the current running_time. The base source will then wait for the
     * calculated running_time before pushing out the buffer.
     *
     * For live sources, the base class will by default report a latency of 0.
     * For pseudo live sources, the base class will by default measure the difference
     * between the first buffer timestamp and the start time of get_times and will
     * report this value as the latency.
     * Subclasses should override the query function when this behaviour is not
     * acceptable.
     *
     * There is only support in {@link GstBase.BaseSrc} for exactly one source pad, which
     * should be named "src". A source implementation (subclass of {@link GstBase.BaseSrc})
     * should install a pad template in its class_init function, like so:
     *
     * ```c
     * static void
     * my_element_class_init (GstMyElementClass *klass)
     * {
     *   GstElementClass *gstelement_class = GST_ELEMENT_CLASS (klass);
     *   // srctemplate should be a {@link Gst.StaticPadTemplate} with direction
     *   // {@link Gst.PadDirection.SRC} and name "src"
     *   gst_element_class_add_static_pad_template (gstelement_class, &srctemplate);
     *
     *   gst_element_class_set_static_metadata (gstelement_class,
     *      "Source name",
     *      "Source",
     *      "My Source element",
     *      "The author <my.sink@my.email>");
     * }
     * ```
     *
     *
     * ## Controlled shutdown of live sources in applications
     *
     * Applications that record from a live source may want to stop recording
     * in a controlled way, so that the recording is stopped, but the data
     * already in the pipeline is processed to the end (remember that many live
     * sources would go on recording forever otherwise). For that to happen the
     * application needs to make the source stop recording and send an EOS
     * event down the pipeline. The application would then wait for an
     * EOS message posted on the pipeline's bus to know when all data has
     * been processed and the pipeline can safely be stopped.
     *
     * An application may send an EOS event to a source element to make it
     * perform the EOS logic (send EOS event downstream or post a
     * {@link Gst.MessageType.SEGMENT_DONE} on the bus). This can typically be done
     * with the `gst_element_send_event()` function on the element or its parent bin.
     *
     * After the EOS has been sent to the element, the application should wait for
     * an EOS message to be posted on the pipeline's bus. Once this EOS message is
     * received, it may safely shut down the entire pipeline.
     * @gir-type Class
     */
    abstract class BaseSrc extends Gst.Element {
        static $gtype: GObject.GType<BaseSrc>;

        // Properties

        /**
         * See `gst_base_src_set_automatic_eos()`
         * @since 1.24
         */
        get automatic_eos(): boolean;
        set automatic_eos(val: boolean);
        /**
         * See `gst_base_src_set_automatic_eos()`
         * @since 1.24
         */
        get automaticEos(): boolean;
        set automaticEos(val: boolean);
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
        $signals: BaseSrc.SignalSignatures;

        // Fields

        element: Gst.Element;
        srcpad: Gst.Pad;
        live_running: boolean;
        can_activate_push: boolean;
        random_access: boolean;
        clock_id: Gst.ClockID;
        need_newsegment: boolean;
        num_buffers_left: number;
        running: boolean;

        // Constructors

        constructor(properties?: Partial<BaseSrc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof BaseSrc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BaseSrc.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BaseSrc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BaseSrc.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BaseSrc.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BaseSrc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Ask the subclass to allocate an output buffer with `offset` and `size`, the default
         * implementation will use the negotiated allocator.
         * @param offset
         * @param size
         * @virtual
         */
        vfunc_alloc(offset: number, size: number): [Gst.FlowReturn, Gst.Buffer | null];
        /**
         * Ask the subclass to create a buffer with `offset` and `size`, the default
         * implementation will call alloc if no allocated `buf` is provided and then call fill.
         * @param offset
         * @param size
         * @param buf
         * @virtual
         */
        vfunc_create(offset: number, size: number, buf?: Gst.Buffer | null): [Gst.FlowReturn, Gst.Buffer | null];
        /**
         * configure the allocation query
         * @param query
         * @virtual
         */
        vfunc_decide_allocation(query: Gst.Query): boolean;
        /**
         * Perform seeking on the resource to the indicated segment.
         * @param segment
         * @virtual
         */
        vfunc_do_seek(segment: Gst.Segment): boolean;
        /**
         * Override this to implement custom event handling.
         * @param event
         * @virtual
         */
        vfunc_event(event: Gst.Event): boolean;
        /**
         * Ask the subclass to fill the buffer with data for offset and size. The
         *   passed buffer is guaranteed to hold the requested amount of bytes.
         * @param offset
         * @param size
         * @param buf
         * @virtual
         */
        vfunc_fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn;
        /**
         * Called if, in negotiation, caps need fixating.
         * @param caps
         * @virtual
         */
        vfunc_fixate(caps: Gst.Caps): Gst.Caps;
        /**
         * Called to get the caps to report.
         * @param filter
         * @virtual
         */
        vfunc_get_caps(filter?: Gst.Caps | null): Gst.Caps;
        /**
         * Get the total size of the resource in the format set by
         * `gst_base_src_set_format()`.
         * @virtual
         */
        vfunc_get_size(): [boolean, number];
        /**
         * Given `buffer`, return `start` and `end` time when it should be pushed
         * out. The base class will sync on the clock using these times.
         * @param buffer
         * @virtual
         */
        vfunc_get_times(buffer: Gst.Buffer): [Gst.ClockTime, Gst.ClockTime];
        /**
         * Check if the source can seek
         * @virtual
         */
        vfunc_is_seekable(): boolean;
        /**
         * Negotiates src pad caps with downstream elements.
         * Unmarks GST_PAD_FLAG_NEED_RECONFIGURE in any case. But marks it again
         * if {@link GstBase.BaseSrcClass.SignalSignatures.negotiate | GstBase.BaseSrcClass::negotiate} fails.
         *
         * Do not call this in the {@link GstBase.BaseSrcClass.SignalSignatures.fill | GstBase.BaseSrcClass::fill} vmethod. Call this in
         * {@link GstBase.BaseSrcClass.SignalSignatures.create | GstBase.BaseSrcClass::create} or in {@link GstBase.BaseSrcClass.SignalSignatures.alloc | GstBase.BaseSrcClass::alloc}, _before_ any
         * buffer is allocated.
         * @virtual
         */
        vfunc_negotiate(): boolean;
        /**
         * Prepare the {@link Gst.Segment} that will be passed to the
         *   {@link GstBase.BaseSrcClass.SignalSignatures.do_seek | GstBase.BaseSrcClass::do_seek} vmethod for executing a seek
         *   request. Sub-classes should override this if they support seeking in
         *   formats other than the configured native format. By default, it tries to
         *   convert the seek arguments to the configured native format and prepare a
         *   segment in that format.
         * @param seek
         * @param segment
         * @virtual
         */
        vfunc_prepare_seek_segment(seek: Gst.Event, segment: Gst.Segment): boolean;
        /**
         * Handle a requested query.
         * @param query
         * @virtual
         */
        vfunc_query(query: Gst.Query): boolean;
        /**
         * Set new caps on the basesrc source pad.
         * @param caps a {@link Gst.Caps}
         * @virtual
         */
        vfunc_set_caps(caps: Gst.Caps): boolean;
        /**
         * Start processing. Subclasses should open resources and prepare
         *    to produce data. Implementation should call `gst_base_src_start_complete()`
         *    when the operation completes, either from the current thread or any other
         *    thread that finishes the start operation asynchronously.
         * @virtual
         */
        vfunc_start(): boolean;
        /**
         * Stop processing. Subclasses should use this to close resources.
         * @virtual
         */
        vfunc_stop(): boolean;
        /**
         * Unlock any pending access to the resource. Subclasses should unblock
         *    any blocked function ASAP. In particular, any `create()` function in
         *    progress should be unblocked and should return GST_FLOW_FLUSHING. Any
         *    future {@link GstBase.BaseSrcClass.SignalSignatures.create | GstBase.BaseSrcClass::create} function call should also return
         *    GST_FLOW_FLUSHING until the {@link GstBase.BaseSrcClass.SignalSignatures.unlock_stop | GstBase.BaseSrcClass::unlock_stop} function has
         *    been called.
         * @virtual
         */
        vfunc_unlock(): boolean;
        /**
         * Clear the previous unlock request. Subclasses should clear any
         *    state they set during {@link GstBase.BaseSrcClass.SignalSignatures.unlock | GstBase.BaseSrcClass::unlock}, such as clearing command
         *    queues.
         * @virtual
         */
        vfunc_unlock_stop(): boolean;

        // Methods

        /**
         * Lets {@link GstBase.BaseSrc} sub-classes to know the memory `allocator`
         * used by the base class and its `params`.
         *
         * Unref the `allocator` after usage.
         */
        get_allocator(): [Gst.Allocator | null, Gst.AllocationParams | null];
        /**
         * Get the number of bytes that `src` will push out with each buffer.
         * @returns the number of bytes pushed with each buffer.
         */
        get_blocksize(): number;
        /**
         * @returns the instance of the {@link Gst.BufferPool} used by the src; unref it after usage.
         */
        get_buffer_pool(): Gst.BufferPool | null;
        /**
         * Query if `src` timestamps outgoing buffers based on the current running_time.
         * @returns `true` if the base class will automatically timestamp outgoing buffers.
         */
        get_do_timestamp(): boolean;
        /**
         * Get the current async behaviour of `src`. See also `gst_base_src_set_async()`.
         * @returns `true` if `src` is operating in async mode.
         */
        is_async(): boolean;
        /**
         * Check if an element is in live mode.
         * @returns `true` if element is in live mode.
         */
        is_live(): boolean;
        /**
         * Negotiates src pad caps with downstream elements.
         * Unmarks GST_PAD_FLAG_NEED_RECONFIGURE in any case. But marks it again
         * if {@link GstBase.BaseSrcClass.SignalSignatures.negotiate | GstBase.BaseSrcClass::negotiate} fails.
         *
         * Do not call this in the {@link GstBase.BaseSrcClass.SignalSignatures.fill | GstBase.BaseSrcClass::fill} vmethod. Call this in
         * {@link GstBase.BaseSrcClass.SignalSignatures.create | GstBase.BaseSrcClass::create} or in {@link GstBase.BaseSrcClass.SignalSignatures.alloc | GstBase.BaseSrcClass::alloc}, _before_ any
         * buffer is allocated.
         * @returns `true` if the negotiation succeeded, else `false`.
         */
        negotiate(): boolean;
        /**
         * Prepare a new seamless segment for emission downstream. This function must
         * only be called by derived sub-classes, and only from the {@link GstBase.BaseSrcClass.SignalSignatures.create | GstBase.BaseSrcClass::create} function,
         * as the stream-lock needs to be held.
         *
         * The format for the new segment will be the current format of the source, as
         * configured with `gst_base_src_set_format()`
         * @param start The new start value for the segment
         * @param stop Stop value for the new segment
         * @param time The new time value for the start of the new segment
         * @returns `true` if preparation of the seamless segment succeeded.
         */
        new_seamless_segment(start: number, stop: number, time: number): boolean;
        /**
         * Prepare a new segment for emission downstream. This function must
         * only be called by derived sub-classes, and only from the {@link GstBase.BaseSrcClass.SignalSignatures.create | GstBase.BaseSrcClass::create} function,
         * as the stream-lock needs to be held.
         *
         * The format for the `segment` must be identical with the current format
         * of the source, as configured with `gst_base_src_set_format()`.
         *
         * The format of `src` must not be {@link Gst.Format.UNDEFINED} and the format
         * should be configured via `gst_base_src_set_format()` before calling this method.
         * @param segment a pointer to a {@link Gst.Segment}
         * @returns `true` if preparation of new segment succeeded.
         */
        new_segment(segment: Gst.Segment): boolean;
        /**
         * Send a new segment downstream. This function must
         * only be called by derived sub-classes, and only from the {@link GstBase.BaseSrcClass.SignalSignatures.create | GstBase.BaseSrcClass::create} function,
         * as the stream-lock needs to be held.
         * This method also requires that an out caps has been configured, so
         * `gst_base_src_set_caps()` needs to have been called before.
         *
         * The format for the `segment` must be identical with the current format
         * of the source, as configured with `gst_base_src_set_format()`.
         *
         * The format of `src` must not be {@link Gst.Format.UNDEFINED} and the format
         * should be configured via `gst_base_src_set_format()` before calling this method.
         *
         * This is a variant of `gst_base_src_new_segment()` sending the segment right away,
         * which can be useful to ensure events ordering.
         * @param segment a pointer to a {@link Gst.Segment}
         * @returns `true` if sending of new segment succeeded.
         */
        push_segment(segment: Gst.Segment): boolean;
        /**
         * Query the source for the latency parameters. `live` will be `true` when `src` is
         * configured as a live source. `min_latency` and `max_latency` will be set
         * to the difference between the running time and the timestamp of the first
         * buffer.
         *
         * This function is mostly used by subclasses.
         * @returns `true` if the query succeeded.
         */
        query_latency(): [boolean, boolean, Gst.ClockTime | null, Gst.ClockTime | null];
        /**
         * Configure async behaviour in `src`, no state change will block. The open,
         * close, start, stop, play and pause virtual methods will be executed in a
         * different thread and are thus allowed to perform blocking operations. Any
         * blocking operation should be unblocked with the unlock vmethod.
         * @param async new async mode
         */
        set_async(async: boolean): void;
        /**
         * If `automatic_eos` is `true`, `src` will automatically go EOS if a buffer
         * after the total size is returned. By default this is `true` but sources
         * that can't return an authoritative size and only know that they're EOS
         * when trying to read more should set this to `false`.
         *
         * When `src` operates in {@link Gst.Format.TIME}, {@link GstBase.BaseSrc} will send an EOS
         * when a buffer outside of the currently configured segment is pushed if
         * `automatic_eos` is `true`. Since 1.16, if `automatic_eos` is `false` an
         * EOS will be pushed only when the {@link GstBase.BaseSrcClass.SignalSignatures.create | GstBase.BaseSrcClass::create} implementation
         * returns {@link Gst.FlowReturn.EOS}.
         * @param automatic_eos automatic eos
         */
        set_automatic_eos(automatic_eos: boolean): void;
        /**
         * Set the number of bytes that `src` will push out with each buffer. When
         * `blocksize` is set to -1, a default length will be used.
         * @param blocksize the new blocksize in bytes
         */
        set_blocksize(blocksize: number): void;
        /**
         * Set new caps on the basesrc source pad.
         * @param caps a {@link Gst.Caps}
         * @returns `true` if the caps could be set
         */
        set_caps(caps: Gst.Caps): boolean;
        /**
         * Configure `src` to automatically timestamp outgoing buffers based on the
         * current running_time of the pipeline. This property is mostly useful for live
         * sources.
         * @param timestamp enable or disable timestamping
         */
        set_do_timestamp(timestamp: boolean): void;
        /**
         * If not `dynamic`, size is only updated when needed, such as when trying to
         * read past current tracked size.  Otherwise, size is checked for upon each
         * read.
         * @param dynamic new dynamic size mode
         */
        set_dynamic_size(dynamic: boolean): void;
        /**
         * Sets the default format of the source. This will be the format used
         * for sending SEGMENT events and for performing seeks.
         *
         * If a format of GST_FORMAT_BYTES is set, the element will be able to
         * operate in pull mode if the {@link GstBase.BaseSrcClass.SignalSignatures.is_seekable | GstBase.BaseSrcClass::is_seekable} returns `true`.
         *
         * This function must only be called in states < {@link Gst.State.PAUSED}.
         * @param format the format to use
         */
        set_format(format: Gst.Format | null): void;
        /**
         * If the element listens to a live source, `live` should
         * be set to `true`.
         *
         * A live source will not produce data in the PAUSED state and
         * will therefore not be able to participate in the PREROLL phase
         * of a pipeline. To signal this fact to the application and the
         * pipeline, the state change return value of the live source will
         * be GST_STATE_CHANGE_NO_PREROLL.
         * @param live new live-mode
         */
        set_live(live: boolean): void;
        /**
         * Complete an asynchronous start operation. When the subclass overrides the
         * start method, it should call `gst_base_src_start_complete()` when the start
         * operation completes either from the same thread or from an asynchronous
         * helper thread.
         * @param ret a {@link Gst.FlowReturn}
         */
        start_complete(ret: Gst.FlowReturn | null): void;
        /**
         * Wait until the start operation completes.
         * @returns a {@link Gst.FlowReturn}.
         */
        start_wait(): Gst.FlowReturn;
        /**
         * Subclasses can call this from their create virtual method implementation
         * to submit a buffer list to be pushed out later. This is useful in
         * cases where the create function wants to produce multiple buffers to be
         * pushed out in one go in form of a {@link Gst.BufferList}, which can reduce overhead
         * drastically, especially for packetised inputs (for data streams where
         * the packetisation/chunking is not important it is usually more efficient
         * to return larger buffers instead).
         *
         * Subclasses that use this function from their create function must return
         * {@link Gst.FlowReturn.OK} and no buffer from their create virtual method implementation.
         * If a buffer is returned after a buffer list has also been submitted via this
         * function the behaviour is undefined.
         *
         * Subclasses must only call this function once per create function call and
         * subclasses must only call this function when the source operates in push
         * mode.
         * @param buffer_list a {@link Gst.BufferList}
         */
        submit_buffer_list(buffer_list: Gst.BufferList): void;
        /**
         * If the {@link GstBase.BaseSrcClass.SignalSignatures.create | GstBase.BaseSrcClass::create} method performs its own synchronisation
         * against the clock it must unblock when going from PLAYING to the PAUSED state
         * and call this method before continuing to produce the remaining data.
         *
         * This function will block until a state change to PLAYING happens (in which
         * case this function returns {@link Gst.FlowReturn.OK}) or the processing must be stopped due
         * to a state change to READY or a FLUSH event (in which case this function
         * returns {@link Gst.FlowReturn.FLUSHING}).
         * @returns {@link Gst.FlowReturn.OK} if `src` is PLAYING and processing can continue. Any other return value should be returned from the create vmethod.
         */
        wait_playing(): Gst.FlowReturn;
    }

    namespace BaseTransform {
        // Signal signatures
        interface SignalSignatures extends Gst.Element.SignalSignatures {
            'notify::qos': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Element.ConstructorProps {
            qos: boolean;
        }
    }

    /**
     * This base class is for filter elements that process data. Elements
     * that are suitable for implementation using {@link GstBase.BaseTransform} are ones
     * where the size and caps of the output is known entirely from the input
     * caps and buffer sizes. These include elements that directly transform
     * one buffer into another, modify the contents of a buffer in-place, as
     * well as elements that collate multiple input buffers into one output buffer,
     * or that expand one input buffer into multiple output buffers. See below
     * for more concrete use cases.
     *
     * It provides for:
     *
     * * one sinkpad and one srcpad
     * * Possible formats on sink and source pad implemented
     *   with custom transform_caps function. By default uses
     *   same format on sink and source.
     *
     * * Handles state changes
     * * Does flushing
     * * Push mode
     * * Pull mode if the sub-class transform can operate on arbitrary data
     *
     * # Use Cases
     *
     * ## Passthrough mode
     *
     *   * Element has no interest in modifying the buffer. It may want to inspect it,
     *     in which case the element should have a transform_ip function. If there
     *     is no transform_ip function in passthrough mode, the buffer is pushed
     *     intact.
     *
     *   * The {@link GstBase.BaseTransformClass}.passthrough_on_same_caps variable
     *     will automatically set/unset passthrough based on whether the
     *     element negotiates the same caps on both pads.
     *
     *   * {@link GstBase.BaseTransformClass}.passthrough_on_same_caps on an element that
     *     doesn't implement a transform_caps function is useful for elements that
     *     only inspect data (such as level)
     *
     *   * Example elements
     *
     *     * Level
     *     * Videoscale, audioconvert, videoconvert, audioresample in certain modes.
     *
     * ## Modifications in-place - input buffer and output buffer are the same thing.
     *
     * * The element must implement a transform_ip function.
     * * Output buffer size must <= input buffer size
     * * If the always_in_place flag is set, non-writable buffers will be copied
     *   and passed to the transform_ip function, otherwise a new buffer will be
     *   created and the transform function called.
     *
     * * Incoming writable buffers will be passed to the transform_ip function
     *   immediately.
     * * only implementing transform_ip and not transform implies always_in_place = `true`
     *
     *   * Example elements:
     *     * Volume
     *     * Audioconvert in certain modes (signed/unsigned conversion)
     *     * videoconvert in certain modes (endianness swapping)
     *
     * ## Modifications only to the caps/metadata of a buffer
     *
     * * The element does not require writable data, but non-writable buffers
     *   should be subbuffered so that the meta-information can be replaced.
     *
     * * Elements wishing to operate in this mode should replace the
     *   prepare_output_buffer method to create subbuffers of the input buffer
     *   and set always_in_place to `true`
     *
     * * Example elements
     *   * Capsfilter when setting caps on outgoing buffers that have
     *     none.
     *   * identity when it is going to re-timestamp buffers by
     *     datarate.
     *
     * ## Normal mode
     *   * always_in_place flag is not set, or there is no transform_ip function
     *   * Element will receive an input buffer and output buffer to operate on.
     *   * Output buffer is allocated by calling the prepare_output_buffer function.
     *   * Example elements:
     *     * Videoscale, videoconvert, audioconvert when doing
     *     scaling/conversions
     *
     * ## Special output buffer allocations
     *   * Elements which need to do special allocation of their output buffers
     *     beyond allocating output buffers via the negotiated allocator or
     *     buffer pool should implement the prepare_output_buffer method.
     *
     *   * Example elements:
     *     * efence
     *
     * # Sub-class settable flags on GstBaseTransform
     *
     * * passthrough
     *
     *   * Implies that in the current configuration, the sub-class is not interested in modifying the buffers.
     *   * Elements which are always in passthrough mode whenever the same caps has been negotiated on both pads can set the class variable passthrough_on_same_caps to have this behaviour automatically.
     *
     * * always_in_place
     *   * Determines whether a non-writable buffer will be copied before passing
     *     to the transform_ip function.
     *
     *   * Implied `true` if no transform function is implemented.
     *   * Implied `false` if ONLY transform function is implemented.
     * @gir-type Class
     */
    abstract class BaseTransform extends Gst.Element {
        static $gtype: GObject.GType<BaseTransform>;

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
        $signals: BaseTransform.SignalSignatures;

        // Fields

        element: Gst.Element;
        sinkpad: Gst.Pad;
        srcpad: Gst.Pad;
        have_segment: boolean;

        // Constructors

        constructor(properties?: Partial<BaseTransform.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof BaseTransform.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BaseTransform.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BaseTransform.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BaseTransform.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BaseTransform.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BaseTransform.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Optional.
         *                  Subclasses can override this method to check if `caps` can be
         *                  handled by the element. The default implementation might not be
         *                  the most optimal way to check this in all cases.
         * @param direction
         * @param caps
         * @virtual
         */
        vfunc_accept_caps(direction: Gst.PadDirection, caps: Gst.Caps): boolean;
        /**
         * Optional.
         *                    This method is called right before the base class will
         *                    start processing. Dynamic properties or other delayed
         *                    configuration could be performed in this method.
         * @param buffer
         * @virtual
         */
        vfunc_before_transform(buffer: Gst.Buffer): void;
        /**
         * Optional.
         *                 Copy the metadata from the input buffer to the output buffer.
         *                 The default implementation will copy the flags, timestamps and
         *                 offsets of the buffer.
         * @param input
         * @param outbuf
         * @virtual
         */
        vfunc_copy_metadata(input: Gst.Buffer, outbuf: Gst.Buffer): boolean;
        /**
         * Setup the allocation parameters for allocating output
         *                    buffers. The passed in query contains the result of the
         *                    downstream allocation query. This function is only called
         *                    when not operating in passthrough mode. The default
         *                    implementation will remove all memory dependent metadata.
         *                    If there is a `filter_meta` method implementation, it will
         *                    be called for all metadata API in the downstream query,
         *                    otherwise the metadata API is removed.
         * @param query
         * @virtual
         */
        vfunc_decide_allocation(query: Gst.Query): boolean;
        /**
         * Return `true` if the metadata API should be proposed in the
         *               upstream allocation query. The default implementation is `null`
         *               and will cause all metadata to be removed.
         * @param query
         * @param api
         * @param params
         * @virtual
         */
        vfunc_filter_meta(query: Gst.Query, api: GObject.GType, params: Gst.Structure): boolean;
        /**
         * @param direction
         * @param caps
         * @param othercaps
         * @virtual
         */
        vfunc_fixate_caps(direction: Gst.PadDirection, caps: Gst.Caps, othercaps: Gst.Caps): Gst.Caps;
        /**
         * @virtual
         */
        vfunc_generate_output(): [Gst.FlowReturn, Gst.Buffer];
        /**
         * @param caps
         * @virtual
         */
        vfunc_get_unit_size(caps: Gst.Caps): [boolean, number];
        /**
         * @param input
         * @virtual
         */
        vfunc_prepare_output_buffer(input: Gst.Buffer): [Gst.FlowReturn, Gst.Buffer];
        /**
         * Propose buffer allocation parameters for upstream elements.
         *                      This function must be implemented if the element reads or
         *                      writes the buffer content. The query that was passed to
         *                      the decide_allocation is passed in this method (or `null`
         *                      when the element is in passthrough mode). The default
         *                      implementation will pass the query downstream when in
         *                      passthrough mode and will copy all the filtered metadata
         *                      API in non-passthrough mode.
         * @param decide_query
         * @param query
         * @virtual
         */
        vfunc_propose_allocation(decide_query: Gst.Query, query: Gst.Query): boolean;
        /**
         * Optional.
         *                  Handle a requested query. Subclasses that implement this
         *                  must chain up to the parent if they didn't handle the
         *                  query
         * @param direction
         * @param query
         * @virtual
         */
        vfunc_query(direction: Gst.PadDirection, query: Gst.Query): boolean;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Gst.Element.vfunc_query
        vfunc_query(...args: never[]): any;
        /**
         * Allows the subclass to be notified of the actual caps set.
         * @param incaps
         * @param outcaps
         * @virtual
         */
        vfunc_set_caps(incaps: Gst.Caps, outcaps: Gst.Caps): boolean;
        /**
         * @param event
         * @virtual
         */
        vfunc_sink_event(event: Gst.Event): boolean;
        /**
         * @param event
         * @virtual
         */
        vfunc_src_event(event: Gst.Event): boolean;
        /**
         * Optional.
         *                  Called when the element starts processing.
         *                  Allows opening external resources.
         * @virtual
         */
        vfunc_start(): boolean;
        /**
         * Optional.
         *                  Called when the element stops processing.
         *                  Allows closing external resources.
         * @virtual
         */
        vfunc_stop(): boolean;
        /**
         * Function which accepts a new input buffer and pre-processes it.
         *                  The default implementation performs caps (re)negotiation, then
         *                  QoS if needed, and places the input buffer into the `queued_buf`
         *                  member variable. If the buffer is dropped due to QoS, it returns
         *                  GST_BASE_TRANSFORM_FLOW_DROPPED. If this input buffer is not
         *                  contiguous with any previous input buffer, then `is_discont`
         *                  is set to `true`. (Since: 1.6)
         * @param is_discont
         * @param input
         * @virtual
         */
        vfunc_submit_input_buffer(is_discont: boolean, input: Gst.Buffer): Gst.FlowReturn;
        /**
         * Required if the element does not operate in-place.
         *                  Transforms one incoming buffer to one outgoing buffer.
         *                  The function is allowed to change size/timestamp/duration
         *                  of the outgoing buffer.
         * @param inbuf
         * @param outbuf
         * @virtual
         */
        vfunc_transform(inbuf: Gst.Buffer, outbuf: Gst.Buffer): Gst.FlowReturn;
        /**
         * Optional.  Given the pad in this direction and the given
         *                  caps, what caps are allowed on the other pad in this
         *                  element ?
         * @param direction
         * @param caps
         * @param filter
         * @virtual
         */
        vfunc_transform_caps(direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps;
        /**
         * Required if the element operates in-place.
         *                  Transform the incoming buffer in-place.
         * @param buf
         * @virtual
         */
        vfunc_transform_ip(buf: Gst.Buffer): Gst.FlowReturn;
        /**
         * Optional. Transform the metadata on the input buffer to the
         *                  output buffer. By default this method copies all meta without
         *                  tags. Subclasses can implement this method and return `true` if
         *                  the metadata is to be copied.
         * @param outbuf
         * @param meta
         * @param inbuf
         * @virtual
         */
        vfunc_transform_meta(outbuf: Gst.Buffer, meta: Gst.Meta, inbuf: Gst.Buffer): boolean;
        /**
         * @param direction
         * @param caps
         * @param size
         * @param othercaps
         * @virtual
         */
        vfunc_transform_size(
            direction: Gst.PadDirection,
            caps: Gst.Caps,
            size: number,
            othercaps: Gst.Caps,
        ): [boolean, number];

        // Methods

        /**
         * Lets {@link GstBase.BaseTransform} sub-classes know the memory `allocator`
         * used by the base class and its `params`.
         *
         * Unref the `allocator` after use.
         */
        get_allocator(): [Gst.Allocator | null, Gst.AllocationParams | null];
        /**
         * @returns the instance of the {@link Gst.BufferPool} used by `trans`; free it after use
         */
        get_buffer_pool(): Gst.BufferPool | null;
        /**
         * See if `trans` is configured as a in_place transform.
         * @returns `true` if the transform is configured in in_place mode. MT safe.
         */
        is_in_place(): boolean;
        /**
         * See if `trans` is configured as a passthrough transform.
         * @returns `true` if the transform is configured in passthrough mode. MT safe.
         */
        is_passthrough(): boolean;
        /**
         * Queries if the transform will handle QoS.
         * @returns `true` if QoS is enabled. MT safe.
         */
        is_qos_enabled(): boolean;
        /**
         * Negotiates src pad caps with downstream elements if the source pad is
         * marked as needing reconfiguring. Unmarks GST_PAD_FLAG_NEED_RECONFIGURE in
         * any case. But marks it again if negotiation fails.
         *
         * Do not call this in the {@link GstBase.BaseTransformClass.SignalSignatures.transform | GstBase.BaseTransformClass::transform} or
         * {@link GstBase.BaseTransformClass.SignalSignatures.transform_ip | GstBase.BaseTransformClass::transform_ip} vmethod. Call this in
         * {@link GstBase.BaseTransformClass.SignalSignatures.submit_input_buffer | GstBase.BaseTransformClass::submit_input_buffer},
         * {@link GstBase.BaseTransformClass.SignalSignatures.prepare_output_buffer | GstBase.BaseTransformClass::prepare_output_buffer} or in
         * {@link GstBase.BaseTransformClass.SignalSignatures.generate_output | GstBase.BaseTransformClass::generate_output} _before_ any output buffer is
         * allocated.
         *
         * It will be default be called when handling an ALLOCATION query or at the
         * very beginning of the default {@link GstBase.BaseTransformClass.SignalSignatures.submit_input_buffer | GstBase.BaseTransformClass::submit_input_buffer}
         * implementation.
         * @returns `true` if the negotiation succeeded, else `false`.
         */
        reconfigure(): boolean;
        /**
         * Instructs `trans` to request renegotiation upstream. This function is
         * typically called after properties on the transform were set that
         * influence the input format.
         */
        reconfigure_sink(): void;
        /**
         * Instructs `trans` to renegotiate a new downstream transform on the next
         * buffer. This function is typically called after properties on the transform
         * were set that influence the output format.
         */
        reconfigure_src(): void;
        /**
         * If `gap_aware` is `false` (the default), output buffers will have the
         * {@link Gst.BufferFlags.GAP} flag unset.
         *
         * If set to `true`, the element must handle output buffers with this flag set
         * correctly, i.e. it can assume that the buffer contains neutral data but must
         * unset the flag if the output is no neutral data.
         *
         * MT safe.
         * @param gap_aware New state
         */
        set_gap_aware(gap_aware: boolean): void;
        /**
         * Determines whether a non-writable buffer will be copied before passing
         * to the transform_ip function.
         *
         *   * Always `true` if no transform function is implemented.
         *   * Always `false` if ONLY transform function is implemented.
         *
         * MT safe.
         * @param in_place Boolean value indicating that we would like to operate on in_place buffers.
         */
        set_in_place(in_place: boolean): void;
        /**
         * Set passthrough mode for this filter by default. This is mostly
         * useful for filters that do not care about negotiation.
         *
         * Always `true` for filters which don't implement either a transform
         * or transform_ip or generate_output method.
         *
         * MT safe.
         * @param passthrough boolean indicating passthrough mode.
         */
        set_passthrough(passthrough: boolean): void;
        /**
         * If `prefer_passthrough` is `true` (the default), `trans` will check and
         * prefer passthrough caps from the list of caps returned by the
         * transform_caps vmethod.
         *
         * If set to `false`, the element must order the caps returned from the
         * transform_caps function in such a way that the preferred format is
         * first in the list. This can be interesting for transforms that can do
         * passthrough transforms but prefer to do something else, like a
         * capsfilter.
         *
         * MT safe.
         * @param prefer_passthrough New state
         */
        set_prefer_passthrough(prefer_passthrough: boolean): void;
        /**
         * Enable or disable QoS handling in the transform.
         *
         * MT safe.
         * @param enabled new state
         */
        set_qos_enabled(enabled: boolean): void;
        /**
         * Set the QoS parameters in the transform. This function is called internally
         * when a QOS event is received but subclasses can provide custom information
         * when needed.
         *
         * MT safe.
         * @param proportion the proportion
         * @param diff the diff against the clock
         * @param timestamp the timestamp of the buffer generating the QoS expressed in running_time.
         */
        update_qos(proportion: number, diff: Gst.ClockTimeDiff, timestamp: Gst.ClockTime): void;
        /**
         * Updates the srcpad caps and sends the caps downstream. This function
         * can be used by subclasses when they have already negotiated their caps
         * but found a change in them (or computed new information). This way,
         * they can notify downstream about that change without losing any
         * buffer.
         * @param updated_caps An updated version of the srcpad caps to be pushed downstream
         * @returns `true` if the caps could be sent downstream `false` otherwise
         */
        update_src_caps(updated_caps: Gst.Caps): boolean;
    }

    namespace CollectPads {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {}
    }

    /**
     * Manages a set of pads that operate in collect mode. This means that control
     * is given to the manager of this object when all pads have data.
     *
     *   * Collectpads are created with `gst_collect_pads_new()`. A callback should then
     *     be installed with gst_collect_pads_set_function ().
     *
     *   * Pads are added to the collection with `gst_collect_pads_add_pad()`/
     *     `gst_collect_pads_remove_pad()`. The pad has to be a sinkpad. When added,
     *     the chain, event and query functions of the pad are overridden. The
     *     element_private of the pad is used to store private information for the
     *     collectpads.
     *
     *   * For each pad, data is queued in the _chain function or by
     *     performing a pull_range.
     *
     *   * When data is queued on all pads in waiting mode, the callback function is called.
     *
     *   * Data can be dequeued from the pad with the `gst_collect_pads_pop()` method.
     *     One can peek at the data with the `gst_collect_pads_peek()` function.
     *     These functions will return `null` if the pad received an EOS event. When all
     *     pads return `null` from a `gst_collect_pads_peek()`, the element can emit an EOS
     *     event itself.
     *
     *   * Data can also be dequeued in byte units using the `gst_collect_pads_available()`,
     *     `gst_collect_pads_read_buffer()` and `gst_collect_pads_flush()` calls.
     *
     *   * Elements should call `gst_collect_pads_start()` and `gst_collect_pads_stop()` in
     *     their state change functions to start and stop the processing of the collectpads.
     *     The `gst_collect_pads_stop()` call should be called before calling the parent
     *     element state change function in the PAUSED_TO_READY state change to ensure
     *     no pad is blocked and the element can finish streaming.
     *
     *   * `gst_collect_pads_set_waiting()` sets a pad to waiting or non-waiting mode.
     *     CollectPads element is not waiting for data to be collected on non-waiting pads.
     *     Thus these pads may but need not have data when the callback is called.
     *     All pads are in waiting mode by default.
     * @gir-type Class
     */
    class CollectPads extends Gst.Object {
        static $gtype: GObject.GType<CollectPads>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CollectPads.SignalSignatures;

        // Fields

        object: Gst.Object;

        // Constructors

        constructor(properties?: Partial<CollectPads.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CollectPads;

        // Signals

        /** @signal */
        connect<K extends keyof CollectPads.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CollectPads.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CollectPads.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CollectPads.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CollectPads.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CollectPads.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add a pad to the collection of collect pads. The pad has to be
         * a sinkpad. The refcount of the pad is incremented. Use
         * `gst_collect_pads_remove_pad()` to remove the pad from the collection
         * again.
         *
         * You specify a size for the returned {@link GstBase.CollectData} structure
         * so that you can use it to store additional information.
         *
         * You can also specify a {@link GstBase.CollectDataDestroyNotify} that will be called
         * just before the {@link GstBase.CollectData} structure is freed. It is passed the
         * pointer to the structure and should free any custom memory and resources
         * allocated for it.
         *
         * Keeping a pad locked in waiting state is only relevant when using
         * the default collection algorithm (providing the oldest buffer).
         * It ensures a buffer must be available on this pad for a collection
         * to take place.  This is of typical use to a muxer element where
         * non-subtitle streams should always be in waiting state,
         * e.g. to assure that caps information is available on all these streams
         * when initial headers have to be written.
         *
         * The pad will be automatically activated in push mode when `pads` is
         * started.
         *
         * MT safe.
         * @param pad the pad to add
         * @param size the size of the returned {@link GstBase.CollectData} structure
         * @param destroy_notify function to be called before the returned   {@link GstBase.CollectData} structure is freed
         * @param lock whether to lock this pad in usual waiting state
         * @returns a new {@link GstBase.CollectData} to identify the   new pad. Or `null` if wrong parameters are supplied.
         */
        add_pad(
            pad: Gst.Pad,
            size: number,
            destroy_notify: CollectDataDestroyNotify,
            lock: boolean,
        ): CollectData | null;
        /**
         * Query how much bytes can be read from each queued buffer. This means
         * that the result of this call is the maximum number of bytes that can
         * be read from each of the pads.
         *
         * This function should be called with `pads` STREAM_LOCK held, such as
         * in the callback.
         *
         * MT safe.
         * @returns The maximum number of bytes queued on all pads. This function returns 0 if a pad has no queued buffer.
         */
        available(): number;
        /**
         * Convenience clipping function that converts incoming buffer's timestamp
         * to running time, or clips the buffer if outside configured segment.
         *
         * Since 1.6, this clipping function also sets the DTS parameter of the
         * GstCollectData structure. This version of the running time DTS can be
         * negative. G_MININT64 is used to indicate invalid value.
         * @param cdata collect data of corresponding pad
         * @param buf buffer being clipped
         * @param user_data user data (unused)
         */
        clip_running_time(
            cdata: CollectData,
            buf: Gst.Buffer,
            user_data?: any | null,
        ): [Gst.FlowReturn, Gst.Buffer | null];
        /**
         * Default {@link GstBase.CollectPads} event handling that elements should always
         * chain up to to ensure proper operation.  Element might however indicate
         * event should not be forwarded downstream.
         * @param data collect data of corresponding pad
         * @param event event being processed
         * @param discard process but do not send event downstream
         */
        event_default(data: CollectData, event: Gst.Event, discard: boolean): boolean;
        /**
         * Flush `size` bytes from the pad `data`.
         *
         * This function should be called with `pads` STREAM_LOCK held, such as
         * in the callback.
         *
         * MT safe.
         * @param data the data to use
         * @param size the number of bytes to flush
         * @returns The number of bytes flushed This can be less than `size` and is 0 if the pad was end-of-stream.
         */
        flush(data: CollectData, size: number): number;
        /**
         * Peek at the buffer currently queued in `data`. This function
         * should be called with the `pads` STREAM_LOCK held, such as in the callback
         * handler.
         *
         * MT safe.
         * @param data the data to use
         * @returns The buffer in `data` or `null` if no buffer is queued. should unref the buffer after usage.
         */
        peek(data: CollectData): Gst.Buffer | null;
        /**
         * Pop the buffer currently queued in `data`. This function
         * should be called with the `pads` STREAM_LOCK held, such as in the callback
         * handler.
         *
         * MT safe.
         * @param data the data to use
         * @returns The buffer in `data` or `null` if no buffer was queued. You should unref the buffer after usage.
         */
        pop(data: CollectData): Gst.Buffer | null;
        /**
         * Default {@link GstBase.CollectPads} query handling that elements should always
         * chain up to to ensure proper operation.  Element might however indicate
         * query should not be forwarded downstream.
         * @param data collect data of corresponding pad
         * @param query query being processed
         * @param discard process but do not send event downstream
         */
        query_default(data: CollectData, query: Gst.Query, discard: boolean): boolean;
        /**
         * Get a subbuffer of `size` bytes from the given pad `data`.
         *
         * This function should be called with `pads` STREAM_LOCK held, such as in the
         * callback.
         *
         * MT safe.
         * @param data the data to use
         * @param size the number of bytes to read
         * @returns A sub buffer. The size of the buffer can be less that requested. A return of `null` signals that the pad is end-of-stream. Unref the buffer after use.
         */
        read_buffer(data: CollectData, size: number): Gst.Buffer | null;
        /**
         * Remove a pad from the collection of collect pads. This function will also
         * free the {@link GstBase.CollectData} and all the resources that were allocated with
         * `gst_collect_pads_add_pad()`.
         *
         * The pad will be deactivated automatically when `pads` is stopped.
         *
         * MT safe.
         * @param pad the pad to remove
         * @returns `true` if the pad could be removed.
         */
        remove_pad(pad: Gst.Pad): boolean;
        /**
         * Set the callback function and user data that will be called with
         * the oldest buffer when all pads have been collected, or `null` on EOS.
         * If a buffer is passed, the callback owns a reference and must unref
         * it.
         *
         * MT safe.
         * @param func the function to set
         */
        set_buffer_function(func: CollectPadsBufferFunction): void;
        /**
         * Install a clipping function that is called right after a buffer is received
         * on a pad managed by `pads`. See {@link GstBase.CollectPadsClipFunction} for more info.
         * @param clipfunc clip function to install
         */
        set_clip_function(clipfunc: CollectPadsClipFunction): void;
        /**
         * Set the timestamp comparison function.
         *
         * MT safe.
         * @param func the function to set
         */
        set_compare_function(func: CollectPadsCompareFunction): void;
        /**
         * Set the event callback function and user data that will be called when
         * collectpads has received an event originating from one of the collected
         * pads.  If the event being processed is a serialized one, this callback is
         * called with `pads` STREAM_LOCK held, otherwise not.  As this lock should be
         * held when calling a number of CollectPads functions, it should be acquired
         * if so (unusually) needed.
         *
         * MT safe.
         * @param func the function to set
         */
        set_event_function(func: CollectPadsEventFunction): void;
        /**
         * Install a flush function that is called when the internal
         * state of all pads should be flushed as part of flushing seek
         * handling. See {@link GstBase.CollectPadsFlushFunction} for more info.
         * @param func flush function to install
         */
        set_flush_function(func: CollectPadsFlushFunction): void;
        /**
         * Change the flushing state of all the pads in the collection. No pad
         * is able to accept anymore data when `flushing` is `true`. Calling this
         * function with `flushing` `false` makes `pads` accept data again.
         * Caller must ensure that downstream streaming (thread) is not blocked,
         * e.g. by sending a FLUSH_START downstream.
         *
         * MT safe.
         * @param flushing desired state of the pads
         */
        set_flushing(flushing: boolean): void;
        /**
         * CollectPads provides a default collection algorithm that will determine
         * the oldest buffer available on all of its pads, and then delegate
         * to a configured callback.
         * However, if circumstances are more complicated and/or more control
         * is desired, this sets a callback that will be invoked instead when
         * all the pads added to the collection have buffers queued.
         * Evidently, this callback is not compatible with
         * `gst_collect_pads_set_buffer_function()` callback.
         * If this callback is set, the former will be unset.
         *
         * MT safe.
         * @param func the function to set
         */
        set_function(func: CollectPadsFunction): void;
        /**
         * Set the query callback function and user data that will be called after
         * collectpads has received a query originating from one of the collected
         * pads.  If the query being processed is a serialized one, this callback is
         * called with `pads` STREAM_LOCK held, otherwise not.  As this lock should be
         * held when calling a number of CollectPads functions, it should be acquired
         * if so (unusually) needed.
         *
         * MT safe.
         * @param func the function to set
         */
        set_query_function(func: CollectPadsQueryFunction): void;
        /**
         * Sets a pad to waiting or non-waiting mode, if at least this pad
         * has not been created with locked waiting state,
         * in which case nothing happens.
         *
         * This function should be called with `pads` STREAM_LOCK held, such as
         * in the callback.
         *
         * MT safe.
         * @param data the data to use
         * @param waiting boolean indicating whether this pad should operate           in waiting or non-waiting mode
         */
        set_waiting(data: CollectData, waiting: boolean): void;
        /**
         * Default {@link GstBase.CollectPads} event handling for the src pad of elements.
         * Elements can chain up to this to let flushing seek event handling
         * be done by {@link GstBase.CollectPads}.
         * @param pad src {@link Gst.Pad} that received the event
         * @param event event being processed
         */
        src_event_default(pad: Gst.Pad, event: Gst.Event): boolean;
        /**
         * Starts the processing of data in the collect_pads.
         *
         * MT safe.
         */
        start(): void;
        /**
         * Stops the processing of data in the collect_pads. this function
         * will also unblock any blocking operations.
         *
         * MT safe.
         */
        stop(): void;
        /**
         * Get a subbuffer of `size` bytes from the given pad `data`. Flushes the amount
         * of read bytes.
         *
         * This function should be called with `pads` STREAM_LOCK held, such as in the
         * callback.
         *
         * MT safe.
         * @param data the data to use
         * @param size the number of bytes to read
         * @returns A sub buffer. The size of the buffer can be less that requested. A return of `null` signals that the pad is end-of-stream. Unref the buffer after use.
         */
        take_buffer(data: CollectData, size: number): Gst.Buffer | null;
    }

    namespace DataQueue {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Reports that the queue became empty (empty).
             * A queue is empty if the total amount of visible items inside it (num-visible, time,
             * size) is lower than the boundary values which can be set through the GObject
             * properties.
             * @signal
             * @run-first
             */
            empty: () => void;
            /**
             * Reports that the queue became full (full).
             * A queue is full if the total amount of data inside it (num-visible, time,
             * size) is higher than the boundary values which can be set through the GObject
             * properties.
             * @signal
             * @run-first
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
     * {@link GstBase.DataQueue} is an object that handles threadsafe queueing of objects. It
     * also provides size-related functionality. This object should be used for
     * any {@link Gst.Element} that wishes to provide some sort of queueing functionality.
     * @gir-type Class
     */
    class DataQueue extends GObject.Object {
        static $gtype: GObject.GType<DataQueue>;

        // Properties

        /**
         * @read-only
         */
        get current_level_bytes(): number;
        /**
         * @read-only
         */
        get currentLevelBytes(): number;
        /**
         * @read-only
         */
        get current_level_time(): number;
        /**
         * @read-only
         */
        get currentLevelTime(): number;
        /**
         * @read-only
         */
        get current_level_visible(): number;
        /**
         * @read-only
         */
        get currentLevelVisible(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DataQueue.SignalSignatures;

        // Fields

        object: GObject.Object;

        // Constructors

        constructor(properties?: Partial<DataQueue.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DataQueue.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DataQueue.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DataQueue.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DataQueue.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DataQueue.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DataQueue.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_empty(): void;
        /**
         * @virtual
         */
        vfunc_full(): void;
    }

    namespace PushSrc {
        // Signal signatures
        interface SignalSignatures extends BaseSrc.SignalSignatures {
            'notify::automatic-eos': (pspec: GObject.ParamSpec) => void;
            'notify::blocksize': (pspec: GObject.ParamSpec) => void;
            'notify::do-timestamp': (pspec: GObject.ParamSpec) => void;
            'notify::num-buffers': (pspec: GObject.ParamSpec) => void;
            'notify::typefind': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends BaseSrc.ConstructorProps {}
    }

    /**
     * This class is mostly useful for elements that cannot do
     * random access, or at least very slowly. The source usually
     * prefers to push out a fixed size buffer.
     *
     * Subclasses usually operate in a format that is different from the
     * default GST_FORMAT_BYTES format of {@link GstBase.BaseSrc}.
     *
     * Classes extending this base class will usually be scheduled
     * in a push based mode. If the peer accepts to operate without
     * offsets and within the limits of the allowed block size, this
     * class can operate in getrange based mode automatically. To make
     * this possible, the subclass should implement and override the
     * SCHEDULING query.
     *
     * The subclass should extend the methods from the baseclass in
     * addition to the ::create method.
     *
     * Seeking, flushing, scheduling and sync is all handled by this
     * base class.
     * @gir-type Class
     */
    class PushSrc extends BaseSrc {
        static $gtype: GObject.GType<PushSrc>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PushSrc.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PushSrc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof PushSrc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PushSrc.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PushSrc.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PushSrc.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PushSrc.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PushSrc.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Allocate memory for a buffer.
         * @virtual
         */
        vfunc_alloc(): [Gst.FlowReturn, Gst.Buffer | null];
        /**
         * Ask the subclass to create a buffer, the default implementation will call alloc if
         * no allocated `buf` is provided and then call fill.
         * @param buf
         * @virtual
         */
        vfunc_create(buf?: Gst.Buffer | null): [Gst.FlowReturn, Gst.Buffer | null];
        /**
         * @param args
         * @virtual
         */
        // Conflicted with GstBase.BaseSrc.vfunc_create
        vfunc_create(...args: never[]): any;
        /**
         * Ask the subclass to fill the buffer with data.
         * @param buf
         * @virtual
         */
        vfunc_fill(buf: Gst.Buffer): Gst.FlowReturn;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with GstBase.BaseSrc.vfunc_fill
        vfunc_fill(...args: never[]): any;
    }

    /**
     * @gir-type Alias
     */
    type AdapterClass = typeof Adapter;
    /**
     * @gir-type Alias
     */
    type AggregatorClass = typeof Aggregator;
    /**
     * @gir-type Alias
     */
    type AggregatorPadClass = typeof AggregatorPad;
    /**
     * @gir-type Struct
     */
    abstract class AggregatorPadPrivate {
        static $gtype: GObject.GType<AggregatorPadPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class AggregatorPrivate {
        static $gtype: GObject.GType<AggregatorPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type BaseParseClass = typeof BaseParse;
    /**
     * Frame (context) data passed to each frame parsing virtual methods.  In
     * addition to providing the data to be checked for a valid frame or an already
     * identified frame, it conveys additional metadata or control information
     * from and to the subclass w.r.t. the particular frame in question (rather
     * than global parameters).  Some of these may apply to each parsing stage, others
     * only to some a particular one.  These parameters are effectively zeroed at start
     * of each frame's processing, i.e. parsing virtual method invocation sequence.
     * @gir-type Struct
     */
    class BaseParseFrame {
        static $gtype: GObject.GType<BaseParseFrame>;

        // Fields

        flags: number;
        offset: number;
        overhead: number;

        // Constructors

        constructor(buffer: Gst.Buffer, flags: BaseParseFrameFlags, overhead: number);

        static ['new'](buffer: Gst.Buffer, flags: BaseParseFrameFlags, overhead: number): BaseParseFrame;

        // Methods

        /**
         * Copies a {@link GstBase.BaseParseFrame}.
         * @returns A copy of `frame`
         */
        copy(): BaseParseFrame;
        /**
         * Frees the provided `frame`.
         */
        free(): void;
        /**
         * Sets a {@link GstBase.BaseParseFrame} to initial state.  Currently this means
         * all public fields are zero-ed and a private flag is set to make
         * sure `gst_base_parse_frame_free()` only frees the contents but not
         * the actual frame. Use this function to initialise a {@link GstBase.BaseParseFrame}
         * allocated on the stack.
         */
        init(): void;
    }

    /**
     * @gir-type Struct
     */
    abstract class BaseParsePrivate {
        static $gtype: GObject.GType<BaseParsePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type BaseSinkClass = typeof BaseSink;
    /**
     * @gir-type Struct
     */
    abstract class BaseSinkPrivate {
        static $gtype: GObject.GType<BaseSinkPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type BaseSrcClass = typeof BaseSrc;
    /**
     * @gir-type Struct
     */
    abstract class BaseSrcPrivate {
        static $gtype: GObject.GType<BaseSrcPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type BaseTransformClass = typeof BaseTransform;
    /**
     * @gir-type Struct
     */
    abstract class BaseTransformPrivate {
        static $gtype: GObject.GType<BaseTransformPrivate>;
    }

    /**
     * {@link GstBase.BitReader} provides a bit reader that can read any number of bits
     * from a memory buffer. It provides functions for reading any number of bits
     * into 8, 16, 32 and 64 bit variables.
     * @gir-type Struct
     */
    class BitReader {
        static $gtype: GObject.GType<BitReader>;

        // Fields

        data: Uint8Array;
        size: number;
        'byte': number;
        bit: number;

        // Constructors

        constructor(
            properties?: Partial<{
                data: Uint8Array;
                size: number;
                byte: number;
                bit: number;
            }>,
        );

        // Methods

        /**
         * Frees a {@link GstBase.BitReader} instance, which was previously allocated by
         * `gst_bit_reader_new()`.
         */
        free(): void;
        /**
         * Read `nbits` bits into `val` and update the current position.
         * @param nbits number of bits to read
         * @returns `true` if successful, `false` otherwise.
         */
        get_bits_uint16(nbits: number): [boolean, number];
        /**
         * Read `nbits` bits into `val` and update the current position.
         * @param nbits number of bits to read
         * @returns `true` if successful, `false` otherwise.
         */
        get_bits_uint32(nbits: number): [boolean, number];
        /**
         * Read `nbits` bits into `val` and update the current position.
         * @param nbits number of bits to read
         * @returns `true` if successful, `false` otherwise.
         */
        get_bits_uint64(nbits: number): [boolean, number];
        /**
         * Read `nbits` bits into `val` and update the current position.
         * @param nbits number of bits to read
         * @returns `true` if successful, `false` otherwise.
         */
        get_bits_uint8(nbits: number): [boolean, number];
        /**
         * Returns the current position of a {@link GstBase.BitReader} instance in bits.
         * @returns The current position of `reader` in bits.
         */
        get_pos(): number;
        /**
         * Returns the remaining number of bits of a {@link GstBase.BitReader} instance.
         * @returns The remaining number of bits of `reader` instance.
         */
        get_remaining(): number;
        /**
         * Returns the total number of bits of a {@link GstBase.BitReader} instance.
         * @returns The total number of bits of `reader` instance.
         */
        get_size(): number;
        /**
         * Initializes a {@link GstBase.BitReader} instance to read from `data`. This function
         * can be called on already initialized instances.
         * @param data data from which the bit reader should read
         */
        init(data: Uint8Array | string): void;
        /**
         * Read `nbits` bits into `val` but keep the current position.
         * @param nbits number of bits to read
         * @returns `true` if successful, `false` otherwise.
         */
        peek_bits_uint16(nbits: number): [boolean, number];
        /**
         * Read `nbits` bits into `val` but keep the current position.
         * @param nbits number of bits to read
         * @returns `true` if successful, `false` otherwise.
         */
        peek_bits_uint32(nbits: number): [boolean, number];
        /**
         * Read `nbits` bits into `val` but keep the current position.
         * @param nbits number of bits to read
         * @returns `true` if successful, `false` otherwise.
         */
        peek_bits_uint64(nbits: number): [boolean, number];
        /**
         * Read `nbits` bits into `val` but keep the current position.
         * @param nbits number of bits to read
         * @returns `true` if successful, `false` otherwise.
         */
        peek_bits_uint8(nbits: number): [boolean, number];
        /**
         * Sets the new position of a {@link GstBase.BitReader} instance to `pos` in bits.
         * @param pos The new position in bits
         * @returns `true` if the position could be set successfully, `false` otherwise.
         */
        set_pos(pos: number): boolean;
        /**
         * Skips `nbits` bits of the {@link GstBase.BitReader} instance.
         * @param nbits the number of bits to skip
         * @returns `true` if `nbits` bits could be skipped, `false` otherwise.
         */
        skip(nbits: number): boolean;
        /**
         * Skips until the next byte.
         * @returns `true` if successful, `false` otherwise.
         */
        skip_to_byte(): boolean;
    }

    /**
     * {@link GstBase.BitWriter} provides a bit writer that can write any number of
     * bits into a memory buffer. It provides functions for writing any
     * number of bits into 8, 16, 32 and 64 bit variables.
     * @gir-type Struct
     * @since 1.16
     */
    class BitWriter {
        static $gtype: GObject.GType<BitWriter>;

        // Fields

        data: number;
        bit_size: number;

        // Constructors

        constructor(
            properties?: Partial<{
                data: number;
                bit_size: number;
            }>,
        );

        // Methods

        /**
         * Write trailing bit to align last byte of `data`. `trailing_bit` can
         * only be 1 or 0.
         * @param trailing_bit trailing bits of last byte, 0 or 1
         * @returns `true` if successful, `false` otherwise.
         */
        align_bytes(trailing_bit: number): boolean;
        /**
         * Frees `bitwriter` and the allocated data inside.
         */
        free(): void;
        /**
         * Frees `bitwriter` without destroying the internal data, which is
         * returned as {@link Gst.Buffer}.
         *
         * Free-function: gst_buffer_unref
         * @returns a new allocated {@link Gst.Buffer} wrapping the     data inside. `gst_buffer_unref()` after usage.
         */
        free_and_get_buffer(): Gst.Buffer;
        /**
         * Frees `bitwriter` without destroying the internal data, which is
         * returned.
         *
         * Free-function: g_free
         * @returns the current data. `g_free()` after     usage.
         */
        free_and_get_data(): Uint8Array;
        /**
         * Get written data pointer
         * @returns data pointer
         */
        get_data(): Uint8Array;
        get_remaining(): number;
        /**
         * Get size of written `data`
         * @returns size of bits written in `data`
         */
        get_size(): number;
        /**
         * Write `nbits` bits of `value` to {@link GstBase.BitWriter}.
         * @param value value of `guint16` to write
         * @param nbits number of bits to write
         * @returns `true` if successful, `false` otherwise.
         */
        put_bits_uint16(value: number, nbits: number): boolean;
        /**
         * Write `nbits` bits of `value` to {@link GstBase.BitWriter}.
         * @param value value of `guint32` to write
         * @param nbits number of bits to write
         * @returns `true` if successful, `false` otherwise.
         */
        put_bits_uint32(value: number, nbits: number): boolean;
        /**
         * Write `nbits` bits of `value` to {@link GstBase.BitWriter}.
         * @param value value of `guint64` to write
         * @param nbits number of bits to write
         * @returns `true` if successful, `false` otherwise.
         */
        put_bits_uint64(value: number, nbits: number): boolean;
        /**
         * Write `nbits` bits of `value` to {@link GstBase.BitWriter}.
         * @param value value of `guint8` to write
         * @param nbits number of bits to write
         * @returns `true` if successful, `false` otherwise.
         */
        put_bits_uint8(value: number, nbits: number): boolean;
        /**
         * Write `nbytes` bytes of `data` to {@link GstBase.BitWriter}.
         * @param data pointer of data to write
         * @param nbytes number of bytes to write
         * @returns `true` if successful, `false` otherwise.
         */
        put_bytes(data: Uint8Array | string, nbytes: number): boolean;
        /**
         * Resets `bitwriter` and frees the data if it's owned by `bitwriter`.
         */
        reset(): void;
        /**
         * Resets `bitwriter` and returns the current data as {@link Gst.Buffer}.
         *
         * Free-function: gst_buffer_unref
         * @returns a new allocated {@link Gst.Buffer} wrapping the     current data. `gst_buffer_unref()` after usage.
         */
        reset_and_get_buffer(): Gst.Buffer;
        /**
         * Resets `bitwriter` and returns the current data.
         *
         * Free-function: g_free
         * @returns the current data. `g_free()` after     usage.
         */
        reset_and_get_data(): Uint8Array;
        /**
         * @param pos
         */
        set_pos(pos: number): boolean;
    }

    /**
     * {@link GstBase.ByteReader} provides a byte reader that can read different integer and
     * floating point types from a memory buffer. It provides functions for reading
     * signed/unsigned, little/big endian integers of 8, 16, 24, 32 and 64 bits
     * and functions for reading little/big endian floating points numbers of
     * 32 and 64 bits. It also provides functions to read NUL-terminated strings
     * in various character encodings.
     * @gir-type Struct
     */
    class ByteReader {
        static $gtype: GObject.GType<ByteReader>;

        // Fields

        data: Uint8Array;
        size: number;
        'byte': number;

        // Constructors

        constructor(
            properties?: Partial<{
                data: Uint8Array;
                size: number;
                byte: number;
            }>,
        );

        // Methods

        /**
         * Free-function: g_free
         *
         * Returns a newly-allocated copy of the current data
         * position if at least `size` bytes are left and
         * updates the current position. Free with `g_free()` when no longer needed.
         * @returns `true` if successful, `false` otherwise.
         */
        dup_data(): [boolean, Uint8Array];
        /**
         * Free-function: g_free
         *
         * Returns a newly-allocated copy of the current data position if there is
         * a NUL-terminated UTF-16 string in the data (this could be an empty string
         * as well), and advances the current position.
         *
         * No input checking for valid UTF-16 is done. This function is endianness
         * agnostic - you should not assume the UTF-16 characters are in host
         * endianness.
         *
         * This function will fail if no NUL-terminator was found in in the data.
         *
         * Note: there is no peek or get variant of this function to ensure correct
         * byte alignment of the UTF-16 string.
         * @returns `true` if a string could be read, `false` otherwise. The     string put into `str` must be freed with `g_free()` when no longer needed.
         */
        dup_string_utf16(): [boolean, number[]];
        /**
         * Free-function: g_free
         *
         * Returns a newly-allocated copy of the current data position if there is
         * a NUL-terminated UTF-32 string in the data (this could be an empty string
         * as well), and advances the current position.
         *
         * No input checking for valid UTF-32 is done. This function is endianness
         * agnostic - you should not assume the UTF-32 characters are in host
         * endianness.
         *
         * This function will fail if no NUL-terminator was found in in the data.
         *
         * Note: there is no peek or get variant of this function to ensure correct
         * byte alignment of the UTF-32 string.
         * @returns `true` if a string could be read, `false` otherwise. The     string put into `str` must be freed with `g_free()` when no longer needed.
         */
        dup_string_utf32(): [boolean, number[]];
        /**
         * Free-function: g_free
         *
         * FIXME:Reads (copies) a NUL-terminated string in the {@link GstBase.ByteReader} instance,
         * advancing the current position to the byte after the string. This will work
         * for any NUL-terminated string with a character width of 8 bits, so ASCII,
         * UTF-8, ISO-8859-N etc. No input checking for valid UTF-8 is done.
         *
         * This function will fail if no NUL-terminator was found in in the data.
         * @returns `true` if a string could be read into `str`, `false` otherwise. The     string put into `str` must be freed with `g_free()` when no longer needed.
         */
        dup_string_utf8(): [boolean, string[]];
        /**
         * Frees a {@link GstBase.ByteReader} instance, which was previously allocated by
         * `gst_byte_reader_new()`.
         */
        free(): void;
        /**
         * Returns a constant pointer to the current data
         * position if at least `size` bytes are left and
         * updates the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        get_data(): [boolean, Uint8Array];
        /**
         * Read a 32 bit big endian floating point value into `val`
         * and update the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        get_float32_be(): [boolean, number];
        /**
         * Read a 32 bit little endian floating point value into `val`
         * and update the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        get_float32_le(): [boolean, number];
        /**
         * Read a 64 bit big endian floating point value into `val`
         * and update the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        get_float64_be(): [boolean, number];
        /**
         * Read a 64 bit little endian floating point value into `val`
         * and update the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        get_float64_le(): [boolean, number];
        /**
         * Read a signed 16 bit big endian integer into `val`
         * and update the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        get_int16_be(): [boolean, number];
        /**
         * Read a signed 16 bit little endian integer into `val`
         * and update the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        get_int16_le(): [boolean, number];
        /**
         * Read a signed 24 bit big endian integer into `val`
         * and update the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        get_int24_be(): [boolean, number];
        /**
         * Read a signed 24 bit little endian integer into `val`
         * and update the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        get_int24_le(): [boolean, number];
        /**
         * Read a signed 32 bit big endian integer into `val`
         * and update the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        get_int32_be(): [boolean, number];
        /**
         * Read a signed 32 bit little endian integer into `val`
         * and update the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        get_int32_le(): [boolean, number];
        /**
         * Read a signed 64 bit big endian integer into `val`
         * and update the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        get_int64_be(): [boolean, number];
        /**
         * Read a signed 64 bit little endian integer into `val`
         * and update the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        get_int64_le(): [boolean, number];
        /**
         * Read a signed 8 bit integer into `val` and update the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        get_int8(): [boolean, number];
        /**
         * Returns the current position of a {@link GstBase.ByteReader} instance in bytes.
         * @returns The current position of `reader` in bytes.
         */
        get_pos(): number;
        /**
         * Returns the remaining number of bytes of a {@link GstBase.ByteReader} instance.
         * @returns The remaining number of bytes of `reader` instance.
         */
        get_remaining(): number;
        /**
         * Returns the total number of bytes of a {@link GstBase.ByteReader} instance.
         * @returns The total number of bytes of `reader` instance.
         */
        get_size(): number;
        /**
         * Returns a constant pointer to the current data position if there is
         * a NUL-terminated string in the data (this could be just a NUL terminator),
         * advancing the current position to the byte after the string. This will work
         * for any NUL-terminated string with a character width of 8 bits, so ASCII,
         * UTF-8, ISO-8859-N etc.
         *
         * No input checking for valid UTF-8 is done.
         *
         * This function will fail if no NUL-terminator was found in in the data.
         * @returns `true` if a string could be found, `false` otherwise.
         */
        get_string_utf8(): [boolean, string[]];
        /**
         * Read an unsigned 16 bit big endian integer into `val`
         * and update the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        get_uint16_be(): [boolean, number];
        /**
         * Read an unsigned 16 bit little endian integer into `val`
         * and update the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        get_uint16_le(): [boolean, number];
        /**
         * Read an unsigned 24 bit big endian integer into `val`
         * and update the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        get_uint24_be(): [boolean, number];
        /**
         * Read an unsigned 24 bit little endian integer into `val`
         * and update the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        get_uint24_le(): [boolean, number];
        /**
         * Read an unsigned 32 bit big endian integer into `val`
         * and update the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        get_uint32_be(): [boolean, number];
        /**
         * Read an unsigned 32 bit little endian integer into `val`
         * and update the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        get_uint32_le(): [boolean, number];
        /**
         * Read an unsigned 64 bit big endian integer into `val`
         * and update the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        get_uint64_be(): [boolean, number];
        /**
         * Read an unsigned 64 bit little endian integer into `val`
         * and update the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        get_uint64_le(): [boolean, number];
        /**
         * Read an unsigned 8 bit integer into `val` and update the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        get_uint8(): [boolean, number];
        /**
         * Initializes a {@link GstBase.ByteReader} instance to read from `data`. This function
         * can be called on already initialized instances.
         * @param data data from which     the {@link GstBase.ByteReader} should read
         */
        init(data: Uint8Array | string): void;
        /**
         * Scan for pattern `pattern` with applied mask `mask` in the byte reader data,
         * starting from offset `offset` relative to the current position.
         *
         * The bytes in `pattern` and `mask` are interpreted left-to-right, regardless
         * of endianness.  All four bytes of the pattern must be present in the
         * byte reader data for it to match, even if the first or last bytes are masked
         * out.
         *
         * It is an error to call this function without making sure that there is
         * enough data (offset+size bytes) in the byte reader.
         * @param mask mask to apply to data before matching against `pattern`
         * @param pattern pattern to match (after mask is applied)
         * @param offset offset from which to start scanning, relative to the current     position
         * @param size number of bytes to scan from offset
         * @returns offset of the first match, or -1 if no match was found. Example: |[ // Assume the reader contains 0x00 0x01 0x02 ... 0xfe 0xff gst_byte_reader_masked_scan_uint32 (reader, 0xffffffff, 0x00010203, 0, 256); // -> returns 0 gst_byte_reader_masked_scan_uint32 (reader, 0xffffffff, 0x00010203, 1, 255); // -> returns -1 gst_byte_reader_masked_scan_uint32 (reader, 0xffffffff, 0x01020304, 1, 255); // -> returns 1 gst_byte_reader_masked_scan_uint32 (reader, 0xffff, 0x0001, 0, 256); // -> returns -1 gst_byte_reader_masked_scan_uint32 (reader, 0xffff, 0x0203, 0, 256); // -> returns 0 gst_byte_reader_masked_scan_uint32 (reader, 0xffff0000, 0x02030000, 0, 256); // -> returns 2 gst_byte_reader_masked_scan_uint32 (reader, 0xffff0000, 0x02030000, 0, 4); // -> returns -1 ]|
         */
        masked_scan_uint32(mask: number, pattern: number, offset: number, size: number): number;
        /**
         * Scan for pattern `pattern` with applied mask `mask` in the byte reader data,
         * starting from offset `offset` relative to the current position.
         *
         * The bytes in `pattern` and `mask` are interpreted left-to-right, regardless
         * of endianness.  All four bytes of the pattern must be present in the
         * byte reader data for it to match, even if the first or last bytes are masked
         * out.
         *
         * It is an error to call this function without making sure that there is
         * enough data (offset+size bytes) in the byte reader.
         * @param mask mask to apply to data before matching against `pattern`
         * @param pattern pattern to match (after mask is applied)
         * @param offset offset from which to start scanning, relative to the current     position
         * @param size number of bytes to scan from offset
         * @returns offset of the first match, or -1 if no match was found.
         */
        masked_scan_uint32_peek(mask: number, pattern: number, offset: number, size: number): [number, number];
        /**
         * Returns a constant pointer to the current data
         * position if at least `size` bytes are left and
         * keeps the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        peek_data(): [boolean, Uint8Array];
        /**
         * Read a 32 bit big endian floating point value into `val`
         * but keep the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        peek_float32_be(): [boolean, number];
        /**
         * Read a 32 bit little endian floating point value into `val`
         * but keep the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        peek_float32_le(): [boolean, number];
        /**
         * Read a 64 bit big endian floating point value into `val`
         * but keep the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        peek_float64_be(): [boolean, number];
        /**
         * Read a 64 bit little endian floating point value into `val`
         * but keep the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        peek_float64_le(): [boolean, number];
        /**
         * Read a signed 16 bit big endian integer into `val`
         * but keep the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        peek_int16_be(): [boolean, number];
        /**
         * Read a signed 16 bit little endian integer into `val`
         * but keep the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        peek_int16_le(): [boolean, number];
        /**
         * Read a signed 24 bit big endian integer into `val`
         * but keep the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        peek_int24_be(): [boolean, number];
        /**
         * Read a signed 24 bit little endian integer into `val`
         * but keep the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        peek_int24_le(): [boolean, number];
        /**
         * Read a signed 32 bit big endian integer into `val`
         * but keep the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        peek_int32_be(): [boolean, number];
        /**
         * Read a signed 32 bit little endian integer into `val`
         * but keep the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        peek_int32_le(): [boolean, number];
        /**
         * Read a signed 64 bit big endian integer into `val`
         * but keep the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        peek_int64_be(): [boolean, number];
        /**
         * Read a signed 64 bit little endian integer into `val`
         * but keep the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        peek_int64_le(): [boolean, number];
        /**
         * Read a signed 8 bit integer into `val` but keep the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        peek_int8(): [boolean, number];
        /**
         * Returns a constant pointer to the current data position if there is
         * a NUL-terminated string in the data (this could be just a NUL terminator).
         * The current position will be maintained. This will work for any
         * NUL-terminated string with a character width of 8 bits, so ASCII,
         * UTF-8, ISO-8859-N etc.
         *
         * No input checking for valid UTF-8 is done.
         *
         * This function will fail if no NUL-terminator was found in in the data.
         * @returns `true` if a string could be skipped, `false` otherwise.
         */
        peek_string_utf8(): [boolean, string[]];
        /**
         * Read an unsigned 16 bit big endian integer into `val`
         * but keep the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        peek_uint16_be(): [boolean, number];
        /**
         * Read an unsigned 16 bit little endian integer into `val`
         * but keep the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        peek_uint16_le(): [boolean, number];
        /**
         * Read an unsigned 24 bit big endian integer into `val`
         * but keep the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        peek_uint24_be(): [boolean, number];
        /**
         * Read an unsigned 24 bit little endian integer into `val`
         * but keep the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        peek_uint24_le(): [boolean, number];
        /**
         * Read an unsigned 32 bit big endian integer into `val`
         * but keep the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        peek_uint32_be(): [boolean, number];
        /**
         * Read an unsigned 32 bit little endian integer into `val`
         * but keep the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        peek_uint32_le(): [boolean, number];
        /**
         * Read an unsigned 64 bit big endian integer into `val`
         * but keep the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        peek_uint64_be(): [boolean, number];
        /**
         * Read an unsigned 64 bit little endian integer into `val`
         * but keep the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        peek_uint64_le(): [boolean, number];
        /**
         * Read an unsigned 8 bit integer into `val` but keep the current position.
         * @returns `true` if successful, `false` otherwise.
         */
        peek_uint8(): [boolean, number];
        /**
         * Sets the new position of a {@link GstBase.ByteReader} instance to `pos` in bytes.
         * @param pos The new position in bytes
         * @returns `true` if the position could be set successfully, `false` otherwise.
         */
        set_pos(pos: number): boolean;
        /**
         * Skips `nbytes` bytes of the {@link GstBase.ByteReader} instance.
         * @param nbytes the number of bytes to skip
         * @returns `true` if `nbytes` bytes could be skipped, `false` otherwise.
         */
        skip(nbytes: number): boolean;
        /**
         * Skips a NUL-terminated UTF-16 string in the {@link GstBase.ByteReader} instance,
         * advancing the current position to the byte after the string.
         *
         * No input checking for valid UTF-16 is done.
         *
         * This function will fail if no NUL-terminator was found in in the data.
         * @returns `true` if a string could be skipped, `false` otherwise.
         */
        skip_string_utf16(): boolean;
        /**
         * Skips a NUL-terminated UTF-32 string in the {@link GstBase.ByteReader} instance,
         * advancing the current position to the byte after the string.
         *
         * No input checking for valid UTF-32 is done.
         *
         * This function will fail if no NUL-terminator was found in in the data.
         * @returns `true` if a string could be skipped, `false` otherwise.
         */
        skip_string_utf32(): boolean;
        /**
         * Skips a NUL-terminated string in the {@link GstBase.ByteReader} instance, advancing
         * the current position to the byte after the string. This will work for
         * any NUL-terminated string with a character width of 8 bits, so ASCII,
         * UTF-8, ISO-8859-N etc. No input checking for valid UTF-8 is done.
         *
         * This function will fail if no NUL-terminator was found in in the data.
         * @returns `true` if a string could be skipped, `false` otherwise.
         */
        skip_string_utf8(): boolean;
    }

    /**
     * {@link GstBase.ByteWriter} provides a byte writer and reader that can write/read different
     * integer and floating point types to/from a memory buffer. It provides functions
     * for writing/reading signed/unsigned, little/big endian integers of 8, 16, 24,
     * 32 and 64 bits and functions for reading little/big endian floating points numbers of
     * 32 and 64 bits. It also provides functions to write/read NUL-terminated strings
     * in various character encodings.
     * @gir-type Struct
     */
    class ByteWriter {
        static $gtype: GObject.GType<ByteWriter>;

        // Fields

        alloc_size: number;
        fixed: boolean;
        owned: boolean;

        // Constructors

        constructor(
            properties?: Partial<{
                parent: ByteReader;
                alloc_size: number;
                fixed: boolean;
                owned: boolean;
            }>,
        );

        // Methods

        /**
         * Checks if enough free space from the current write cursor is
         * available and reallocates if necessary.
         * @param size Number of bytes that should be available
         * @returns `true` if at least `size` bytes are still available
         */
        ensure_free_space(size: number): boolean;
        /**
         * Writes `size` bytes containing `value` to `writer`.
         * @param value Value to be written
         * @param size Number of bytes to be written
         * @returns `true` if the value could be written
         */
        fill(value: number, size: number): boolean;
        /**
         * Frees `writer` and all memory allocated by it.
         */
        free(): void;
        /**
         * Frees `writer` and all memory allocated by it except
         * the current data, which is returned as {@link Gst.Buffer}.
         *
         * Free-function: gst_buffer_unref
         * @returns the current data as buffer. `gst_buffer_unref()`     after usage.
         */
        free_and_get_buffer(): Gst.Buffer;
        /**
         * Frees `writer` and all memory allocated by it except
         * the current data, which is returned.
         *
         * Free-function: g_free
         * @returns the current data. `g_free()` after usage.
         */
        free_and_get_data(): Uint8Array;
        /**
         * Returns the remaining size of data that can still be written. If
         * -1 is returned the remaining size is only limited by system resources.
         * @returns the remaining size of data that can still be written
         */
        get_remaining(): number;
        /**
         * Initializes `writer` to an empty instance
         */
        init(): void;
        /**
         * Initializes `writer` with the given
         * memory area. If `initialized` is `true` it is possible to
         * read `size` bytes from the {@link GstBase.ByteWriter} from the beginning.
         * @param data Memory area for writing
         * @param initialized If `true` the complete data can be read from the beginning
         */
        init_with_data(data: Uint8Array | string, initialized: boolean): void;
        /**
         * Initializes `writer` with the given initial data size.
         * @param size Initial size of data
         * @param fixed If `true` the data can't be reallocated
         */
        init_with_size(size: number, fixed: boolean): void;
        /**
         * Writes `size` bytes of `data` to `writer`.
         * @param buffer source {@link Gst.Buffer}
         * @param offset offset to copy from
         * @param size total size to copy. If -1, all data is copied
         * @returns `true` if the data could be written
         */
        put_buffer(buffer: Gst.Buffer, offset: number, size: number): boolean;
        /**
         * Writes `size` bytes of `data` to `writer`.
         * @param data Data to write
         * @returns `true` if the value could be written
         */
        put_data(data: Uint8Array | string): boolean;
        /**
         * Writes a big endian 32 bit float to `writer`.
         * @param val Value to write
         * @returns `true` if the value could be written
         */
        put_float32_be(val: number): boolean;
        /**
         * Writes a little endian 32 bit float to `writer`.
         * @param val Value to write
         * @returns `true` if the value could be written
         */
        put_float32_le(val: number): boolean;
        /**
         * Writes a big endian 64 bit float to `writer`.
         * @param val Value to write
         * @returns `true` if the value could be written
         */
        put_float64_be(val: number): boolean;
        /**
         * Writes a little endian 64 bit float to `writer`.
         * @param val Value to write
         * @returns `true` if the value could be written
         */
        put_float64_le(val: number): boolean;
        /**
         * Writes a signed big endian 16 bit integer to `writer`.
         * @param val Value to write
         * @returns `true` if the value could be written
         */
        put_int16_be(val: number): boolean;
        /**
         * Writes a signed little endian 16 bit integer to `writer`.
         * @param val Value to write
         * @returns `true` if the value could be written
         */
        put_int16_le(val: number): boolean;
        /**
         * Writes a signed big endian 24 bit integer to `writer`.
         * @param val Value to write
         * @returns `true` if the value could be written
         */
        put_int24_be(val: number): boolean;
        /**
         * Writes a signed little endian 24 bit integer to `writer`.
         * @param val Value to write
         * @returns `true` if the value could be written
         */
        put_int24_le(val: number): boolean;
        /**
         * Writes a signed big endian 32 bit integer to `writer`.
         * @param val Value to write
         * @returns `true` if the value could be written
         */
        put_int32_be(val: number): boolean;
        /**
         * Writes a signed little endian 32 bit integer to `writer`.
         * @param val Value to write
         * @returns `true` if the value could be written
         */
        put_int32_le(val: number): boolean;
        /**
         * Writes a signed big endian 64 bit integer to `writer`.
         * @param val Value to write
         * @returns `true` if the value could be written
         */
        put_int64_be(val: number): boolean;
        /**
         * Writes a signed little endian 64 bit integer to `writer`.
         * @param val Value to write
         * @returns `true` if the value could be written
         */
        put_int64_le(val: number): boolean;
        /**
         * Writes a signed 8 bit integer to `writer`.
         * @param val Value to write
         * @returns `true` if the value could be written
         */
        put_int8(val: number): boolean;
        /**
         * Writes a NUL-terminated UTF16 string to `writer` (including the terminator).
         * @param data UTF16 string to write
         * @returns `true` if the value could be written
         */
        put_string_utf16(data: number[]): boolean;
        /**
         * Writes a NUL-terminated UTF32 string to `writer` (including the terminator).
         * @param data UTF32 string to write
         * @returns `true` if the value could be written
         */
        put_string_utf32(data: number[]): boolean;
        /**
         * Writes a NUL-terminated UTF8 string to `writer` (including the terminator).
         * @param data UTF8 string to write
         * @returns `true` if the value could be written
         */
        put_string_utf8(data: string): boolean;
        /**
         * Writes a unsigned big endian 16 bit integer to `writer`.
         * @param val Value to write
         * @returns `true` if the value could be written
         */
        put_uint16_be(val: number): boolean;
        /**
         * Writes a unsigned little endian 16 bit integer to `writer`.
         * @param val Value to write
         * @returns `true` if the value could be written
         */
        put_uint16_le(val: number): boolean;
        /**
         * Writes a unsigned big endian 24 bit integer to `writer`.
         * @param val Value to write
         * @returns `true` if the value could be written
         */
        put_uint24_be(val: number): boolean;
        /**
         * Writes a unsigned little endian 24 bit integer to `writer`.
         * @param val Value to write
         * @returns `true` if the value could be written
         */
        put_uint24_le(val: number): boolean;
        /**
         * Writes a unsigned big endian 32 bit integer to `writer`.
         * @param val Value to write
         * @returns `true` if the value could be written
         */
        put_uint32_be(val: number): boolean;
        /**
         * Writes a unsigned little endian 32 bit integer to `writer`.
         * @param val Value to write
         * @returns `true` if the value could be written
         */
        put_uint32_le(val: number): boolean;
        /**
         * Writes a unsigned big endian 64 bit integer to `writer`.
         * @param val Value to write
         * @returns `true` if the value could be written
         */
        put_uint64_be(val: number): boolean;
        /**
         * Writes a unsigned little endian 64 bit integer to `writer`.
         * @param val Value to write
         * @returns `true` if the value could be written
         */
        put_uint64_le(val: number): boolean;
        /**
         * Writes a unsigned 8 bit integer to `writer`.
         * @param val Value to write
         * @returns `true` if the value could be written
         */
        put_uint8(val: number): boolean;
        /**
         * Resets `writer` and frees the data if it's
         * owned by `writer`.
         */
        reset(): void;
        /**
         * Resets `writer` and returns the current data as buffer.
         *
         * Free-function: gst_buffer_unref
         * @returns the current data as buffer. `gst_buffer_unref()`     after usage.
         */
        reset_and_get_buffer(): Gst.Buffer;
        /**
         * Resets `writer` and returns the current data.
         *
         * Free-function: g_free
         * @returns the current data. `g_free()` after usage.
         */
        reset_and_get_data(): Uint8Array;
    }

    /**
     * Structure used by the collect_pads.
     * @gir-type Struct
     */
    class CollectData {
        static $gtype: GObject.GType<CollectData>;

        // Fields

        collect: CollectPads;
        pad: Gst.Pad;
        pos: number;
    }

    /**
     * @gir-type Struct
     */
    abstract class CollectDataPrivate {
        static $gtype: GObject.GType<CollectDataPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type CollectPadsClass = typeof CollectPads;
    /**
     * @gir-type Struct
     */
    abstract class CollectPadsPrivate {
        static $gtype: GObject.GType<CollectPadsPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DataQueueClass = typeof DataQueue;
    /**
     * @gir-type Struct
     */
    abstract class DataQueuePrivate {
        static $gtype: GObject.GType<DataQueuePrivate>;
    }

    /**
     * Utility struct to help handling {@link Gst.FlowReturn} combination. Useful for
     * {@link Gst.Element}<!-- -->s that have multiple source pads and need to combine
     * the different {@link Gst.FlowReturn} for those pads.
     *
     * {@link GstBase.FlowCombiner} works by using the last {@link Gst.FlowReturn} for all {@link Gst.Pad}
     * it has in its list and computes the combined return value and provides
     * it to the caller.
     *
     * To add a new pad to the {@link GstBase.FlowCombiner} use `gst_flow_combiner_add_pad()`.
     * The new {@link Gst.Pad} is stored with a default value of {@link Gst.FlowReturn.OK}.
     *
     * In case you want a {@link Gst.Pad} to be removed, use `gst_flow_combiner_remove_pad()`.
     *
     * Please be aware that this struct isn't thread safe as its designed to be
     *  used by demuxers, those usually will have a single thread operating it.
     *
     * These functions will take refs on the passed {@link Gst.Pad}<!-- -->s.
     *
     * Aside from reducing the user's code size, the main advantage of using this
     * helper struct is to follow the standard rules for {@link Gst.FlowReturn} combination.
     * These rules are:
     *
     * * {@link Gst.FlowReturn.EOS}: only if all returns are EOS too
     * * {@link Gst.FlowReturn.NOT_LINKED}: only if all returns are NOT_LINKED too
     * * {@link Gst.FlowReturn.ERROR} or below: if at least one returns an error return
     * * {@link Gst.FlowReturn.NOT_NEGOTIATED}: if at least one returns a not-negotiated return
     * * {@link Gst.FlowReturn.FLUSHING}: if at least one returns flushing
     * * {@link Gst.FlowReturn.OK}: otherwise
     *
     * {@link Gst.FlowReturn.ERROR} or below, GST_FLOW_NOT_NEGOTIATED and GST_FLOW_FLUSHING are
     * returned immediately from the `gst_flow_combiner_update_flow()` function.
     * @gir-type Struct
     * @since 1.4
     */
    class FlowCombiner {
        static $gtype: GObject.GType<FlowCombiner>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): FlowCombiner;

        // Methods

        /**
         * Adds a new {@link Gst.Pad} to the {@link GstBase.FlowCombiner}.
         * @param pad the {@link Gst.Pad} that is being added
         */
        add_pad(pad: Gst.Pad): void;
        /**
         * Removes all pads from a {@link GstBase.FlowCombiner} and resets it to its initial state.
         */
        clear(): void;
        /**
         * Frees a {@link GstBase.FlowCombiner} struct and all its internal data.
         */
        free(): void;
        /**
         * Increments the reference count on the {@link GstBase.FlowCombiner}.
         * @returns the {@link GstBase.FlowCombiner}.
         */
        ref(): FlowCombiner;
        /**
         * Removes a {@link Gst.Pad} from the {@link GstBase.FlowCombiner}.
         * @param pad the {@link Gst.Pad} to remove
         */
        remove_pad(pad: Gst.Pad): void;
        /**
         * Reset flow combiner and all pads to their initial state without removing pads.
         */
        reset(): void;
        /**
         * Decrements the reference count on the {@link GstBase.FlowCombiner}.
         */
        unref(): void;
        /**
         * Computes the combined flow return for the pads in it.
         *
         * The {@link Gst.FlowReturn} parameter should be the last flow return update for a pad
         * in this {@link GstBase.FlowCombiner}. It will use this value to be able to shortcut some
         * combinations and avoid looking over all pads again. e.g. The last combined
         * return is the same as the latest obtained {@link Gst.FlowReturn}.
         * @param fret the latest {@link Gst.FlowReturn} received for a pad in this {@link GstBase.FlowCombiner}
         * @returns The combined {@link Gst.FlowReturn}
         */
        update_flow(fret: Gst.FlowReturn | null): Gst.FlowReturn;
        /**
         * Sets the provided pad's last flow return to provided value and computes
         * the combined flow return for the pads in it.
         *
         * The {@link Gst.FlowReturn} parameter should be the last flow return update for a pad
         * in this {@link GstBase.FlowCombiner}. It will use this value to be able to shortcut some
         * combinations and avoid looking over all pads again. e.g. The last combined
         * return is the same as the latest obtained {@link Gst.FlowReturn}.
         * @param pad the {@link Gst.Pad} whose {@link Gst.FlowReturn} to update
         * @param fret the latest {@link Gst.FlowReturn} received for a pad in this {@link GstBase.FlowCombiner}
         * @returns The combined {@link Gst.FlowReturn}
         */
        update_pad_flow(pad: Gst.Pad, fret: Gst.FlowReturn | null): Gst.FlowReturn;
    }

    /**
     * @gir-type Alias
     */
    type PushSrcClass = typeof PushSrc;
    /**
     * The opaque {@link GstBase.TypeFindData} structure.
     * @gir-type Struct
     * @since 1.22
     */
    abstract class TypeFindData {
        static $gtype: GObject.GType<TypeFindData>;

        // Methods

        free(): void;
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
