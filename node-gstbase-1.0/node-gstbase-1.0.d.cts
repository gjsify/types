
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gstbase-1.0-import.d.ts';
    
/**
 * GstBase-1.0
 */

import type Gst from '@girs/node-gst-1.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type GModule from '@girs/node-gmodule-2.0';

export enum AggregatorStartTimeSelection {
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
}
/**
 * Flags to be used in a #GstBaseParseFrame.
 * @bitfield 
 */
export enum BaseParseFrameFlags {
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
 * The #GstElement flags that a basesrc element may have.
 * @bitfield 
 */
export enum BaseSrcFlags {
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
export enum CollectPadsStateFlags {
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
     * #GstCollectPadsStateFlags indicate private state of a collectdata('s pad).
     */
    LOCKED,
}
export const BASE_PARSE_FLAG_DRAINING: number
export const BASE_PARSE_FLAG_LOST_SYNC: number
/**
 * The name of the templates for the sink pad.
 */
export const BASE_TRANSFORM_SINK_NAME: string | null
/**
 * The name of the templates for the source pad.
 */
export const BASE_TRANSFORM_SRC_NAME: string | null
/**
 * Tries to find what type of data is flowing from the given source #GstPad.
 * 
 * Free-function: gst_caps_unref
 * @param src A source #GstPad
 * @param size The length in bytes
 * @returns the #GstCaps corresponding to the data     stream.  Returns %NULL if no #GstCaps matches the data stream.
 */
export function typeFindHelper(src: Gst.Pad, size: number): Gst.Caps | null
/**
 * Tries to find what type of data is contained in the given #GstBuffer, the
 * assumption being that the buffer represents the beginning of the stream or
 * file.
 * 
 * All available typefinders will be called on the data in order of rank. If
 * a typefinding function returns a probability of %GST_TYPE_FIND_MAXIMUM,
 * typefinding is stopped immediately and the found caps will be returned
 * right away. Otherwise, all available typefind functions will the tried,
 * and the caps with the highest probability will be returned, or %NULL if
 * the content of the buffer could not be identified.
 * 
 * Free-function: gst_caps_unref
 * @param obj object doing the typefinding, or %NULL (used for logging)
 * @param buf a #GstBuffer with data to typefind
 * @returns the #GstCaps corresponding to the data,     or %NULL if no type could be found. The caller should free the caps     returned with gst_caps_unref().
 */
export function typeFindHelperForBuffer(obj: Gst.Object | null, buf: Gst.Buffer): [ /* returnType */ Gst.Caps | null, /* prob */ Gst.TypeFindProbability ]
/**
 * Tries to find if type of media contained in the given #GstBuffer, matches
 * `caps` specified, assumption being that the buffer represents the beginning
 * of the stream or file.
 * 
 * Tries to find what type of data is contained in the given `data,` the
 * assumption being that the data represents the beginning of the stream or
 * file.
 * 
 * Only the typefinder matching the given caps will be called, if found. The
 * caps with the highest probability will be returned, or %NULL if the content
 * of the `data` could not be identified.
 * 
 * Free-function: gst_caps_unref
 * @param obj object doing the typefinding, or %NULL (used for logging)
 * @param buf a #GstBuffer with data to typefind
 * @param caps caps of the media
 * @returns the #GstCaps corresponding to the data,     or %NULL if no type could be found. The caller should free the caps     returned with gst_caps_unref().
 */
export function typeFindHelperForBufferWithCaps(obj: Gst.Object | null, buf: Gst.Buffer, caps: Gst.Caps): [ /* returnType */ Gst.Caps | null, /* prob */ Gst.TypeFindProbability ]
/**
 * Tries to find what type of data is contained in the given #GstBuffer, the
 * assumption being that the buffer represents the beginning of the stream or
 * file.
 * 
 * All available typefinders will be called on the data in order of rank. If
 * a typefinding function returns a probability of %GST_TYPE_FIND_MAXIMUM,
 * typefinding is stopped immediately and the found caps will be returned
 * right away. Otherwise, all available typefind functions will the tried,
 * and the caps with the highest probability will be returned, or %NULL if
 * the content of the buffer could not be identified.
 * 
 * When `extension` is not %NULL, this function will first try the typefind
 * functions for the given extension, which might speed up the typefinding
 * in many cases.
 * 
 * Free-function: gst_caps_unref
 * @param obj object doing the typefinding, or %NULL (used for logging)
 * @param buf a #GstBuffer with data to typefind
 * @param extension extension of the media, or %NULL
 * @returns the #GstCaps corresponding to the data,     or %NULL if no type could be found. The caller should free the caps     returned with gst_caps_unref().
 */
export function typeFindHelperForBufferWithExtension(obj: Gst.Object | null, buf: Gst.Buffer, extension: string | null): [ /* returnType */ Gst.Caps | null, /* prob */ Gst.TypeFindProbability ]
/**
 * Tries to find what type of data is contained in the given `data,` the
 * assumption being that the data represents the beginning of the stream or
 * file.
 * 
 * All available typefinders will be called on the data in order of rank. If
 * a typefinding function returns a probability of %GST_TYPE_FIND_MAXIMUM,
 * typefinding is stopped immediately and the found caps will be returned
 * right away. Otherwise, all available typefind functions will the tried,
 * and the caps with the highest probability will be returned, or %NULL if
 * the content of `data` could not be identified.
 * 
 * Free-function: gst_caps_unref
 * @param obj object doing the typefinding, or %NULL (used for logging)
 * @param data * a pointer with data to typefind
 * @returns the #GstCaps corresponding to the data,     or %NULL if no type could be found. The caller should free the caps     returned with gst_caps_unref().
 */
export function typeFindHelperForData(obj: Gst.Object | null, data: number[]): [ /* returnType */ Gst.Caps | null, /* prob */ Gst.TypeFindProbability ]
/**
 * Tries to find if type of media contained in the given `data,` matches the
 * `caps` specified, assumption being that the data represents the beginning
 * of the stream or file.
 * 
 * Only the typefinder matching the given caps will be called, if found. The
 * caps with the highest probability will be returned, or %NULL if the content
 * of the `data` could not be identified.
 * 
 * Free-function: gst_caps_unref
 * @param obj object doing the typefinding, or %NULL (used for logging)
 * @param data a pointer with data to typefind
 * @param caps caps of the media
 * @returns the #GstCaps corresponding to the data,     or %NULL if no type could be found. The caller should free the caps     returned with gst_caps_unref().
 */
export function typeFindHelperForDataWithCaps(obj: Gst.Object | null, data: number[], caps: Gst.Caps): [ /* returnType */ Gst.Caps | null, /* prob */ Gst.TypeFindProbability ]
/**
 * Tries to find what type of data is contained in the given `data,` the
 * assumption being that the data represents the beginning of the stream or
 * file.
 * 
 * All available typefinders will be called on the data in order of rank. If
 * a typefinding function returns a probability of %GST_TYPE_FIND_MAXIMUM,
 * typefinding is stopped immediately and the found caps will be returned
 * right away. Otherwise, all available typefind functions will the tried,
 * and the caps with the highest probability will be returned, or %NULL if
 * the content of `data` could not be identified.
 * 
 * When `extension` is not %NULL, this function will first try the typefind
 * functions for the given extension, which might speed up the typefinding
 * in many cases.
 * 
 * Free-function: gst_caps_unref
 * @param obj object doing the typefinding, or %NULL (used for logging)
 * @param data * a pointer with data to typefind
 * @param extension extension of the media, or %NULL
 * @returns the #GstCaps corresponding to the data,     or %NULL if no type could be found. The caller should free the caps     returned with gst_caps_unref().
 */
export function typeFindHelperForDataWithExtension(obj: Gst.Object | null, data: number[], extension: string | null): [ /* returnType */ Gst.Caps | null, /* prob */ Gst.TypeFindProbability ]
/**
 * Tries to find the best #GstCaps associated with `extension`.
 * 
 * All available typefinders will be checked against the extension in order
 * of rank. The caps of the first typefinder that can handle `extension` will be
 * returned.
 * 
 * Free-function: gst_caps_unref
 * @param obj object doing the typefinding, or %NULL (used for logging)
 * @param extension an extension
 * @returns the #GstCaps corresponding to     @extension, or %NULL if no type could be found. The caller should free     the caps returned with gst_caps_unref().
 */
export function typeFindHelperForExtension(obj: Gst.Object | null, extension: string | null): Gst.Caps | null
/**
 * Utility function to do pull-based typefinding. Unlike gst_type_find_helper()
 * however, this function will use the specified function `func` to obtain the
 * data needed by the typefind functions, rather than operating on a given
 * source pad. This is useful mostly for elements like tag demuxers which
 * strip off data at the beginning and/or end of a file and want to typefind
 * the stripped data stream before adding their own source pad (the specified
 * callback can then call the upstream peer pad with offsets adjusted for the
 * tag size, for example).
 * 
 * When `extension` is not %NULL, this function will first try the typefind
 * functions for the given extension, which might speed up the typefinding
 * in many cases.
 * 
 * Free-function: gst_caps_unref
 * @param obj A #GstObject that will be passed as first argument to `func`
 * @param parent the parent of `obj` or %NULL
 * @param func A generic #GstTypeFindHelperGetRangeFunction that will        be used to access data at random offsets when doing the typefinding
 * @param size The length in bytes
 * @param extension extension of the media, or %NULL
 * @returns the #GstCaps corresponding to the data     stream.  Returns %NULL if no #GstCaps matches the data stream.
 */
export function typeFindHelperGetRange(obj: Gst.Object, parent: Gst.Object | null, func: TypeFindHelperGetRangeFunction, size: number, extension: string | null): [ /* returnType */ Gst.Caps | null, /* prob */ Gst.TypeFindProbability ]
/**
 * Utility function to do pull-based typefinding. Unlike gst_type_find_helper()
 * however, this function will use the specified function `func` to obtain the
 * data needed by the typefind functions, rather than operating on a given
 * source pad. This is useful mostly for elements like tag demuxers which
 * strip off data at the beginning and/or end of a file and want to typefind
 * the stripped data stream before adding their own source pad (the specified
 * callback can then call the upstream peer pad with offsets adjusted for the
 * tag size, for example).
 * 
 * When `extension` is not %NULL, this function will first try the typefind
 * functions for the given extension, which might speed up the typefinding
 * in many cases.
 * @param obj A #GstObject that will be passed as first argument to `func`
 * @param parent the parent of `obj` or %NULL
 * @param func A generic #GstTypeFindHelperGetRangeFunction that will        be used to access data at random offsets when doing the typefinding
 * @param size The length in bytes
 * @param extension extension of the media, or %NULL
 * @returns the last %GstFlowReturn from pulling a buffer or %GST_FLOW_OK if          typefinding was successful.
 */
export function typeFindHelperGetRangeFull(obj: Gst.Object, parent: Gst.Object | null, func: TypeFindHelperGetRangeFunction, size: number, extension: string | null): [ /* returnType */ Gst.FlowReturn, /* caps */ Gst.Caps, /* prob */ Gst.TypeFindProbability ]
/**
 * Tries to find the best #GstTypeFindFactory associated with `caps`.
 * 
 * The typefinder that can handle `caps` will be returned.
 * 
 * Free-function: g_list_free
 * @param obj object doing the typefinding, or %NULL (used for logging)
 * @param caps caps of the media
 * @returns the list of #GstTypeFindFactory          corresponding to @caps, or %NULL if no typefinder could be          found. Caller should free the returned list with g_list_free()          and list elements with gst_object_unref().
 */
export function typeFindListFactoriesForCaps(obj: Gst.Object | null, caps: Gst.Caps): Gst.TypeFindFactory[] | null
/**
 * A function that will be called when the #GstCollectData will be freed.
 * It is passed the pointer to the structure and should free any custom
 * memory and resources allocated for it.
 * @callback 
 * @param data the #GstCollectData that will be freed
 */
export interface CollectDataDestroyNotify {
    (data: CollectData): void
}
/**
 * A function that will be called when a (considered oldest) buffer can be muxed.
 * If all pads have reached EOS, this function is called with %NULL `buffer`
 * and %NULL `data`.
 * @callback 
 * @param pads the #GstCollectPads that triggered the callback
 * @param data the #GstCollectData of pad that has received the buffer
 * @param buffer the #GstBuffer
 * @returns %GST_FLOW_OK for success
 */
export interface CollectPadsBufferFunction {
    (pads: CollectPads, data: CollectData, buffer: Gst.Buffer): Gst.FlowReturn
}
/**
 * A function that will be called when `inbuffer` is received on the pad managed
 * by `data` in the collectpad object `pads`.
 * 
 * The function should use the segment of `data` and the negotiated media type on
 * the pad to perform clipping of `inbuffer`.
 * 
 * This function takes ownership of `inbuffer` and should output a buffer in
 * `outbuffer` or return %NULL in `outbuffer` if the buffer should be dropped.
 * @callback 
 * @param pads a #GstCollectPads
 * @param data a #GstCollectData
 * @param inbuffer the input #GstBuffer
 * @returns a #GstFlowReturn that corresponds to the result of clipping.
 */
export interface CollectPadsClipFunction {
    (pads: CollectPads, data: CollectData, inbuffer: Gst.Buffer): Gst.FlowReturn
}
/**
 * A function for comparing two timestamps of buffers or newsegments collected on one pad.
 * @callback 
 * @param pads the #GstCollectPads that is comparing the timestamps
 * @param data1 the first #GstCollectData
 * @param timestamp1 the first timestamp
 * @param data2 the second #GstCollectData
 * @param timestamp2 the second timestamp
 * @returns Integer less than zero when first timestamp is deemed older than the second one.          Zero if the timestamps are deemed equally old.          Integer greater than zero when second timestamp is deemed older than the first one.
 */
export interface CollectPadsCompareFunction {
    (pads: CollectPads, data1: CollectData, timestamp1: Gst.ClockTime, data2: CollectData, timestamp2: Gst.ClockTime): number
}
/**
 * A function that will be called while processing an event. It takes
 * ownership of the event and is responsible for chaining up (to
 * gst_collect_pads_event_default()) or dropping events (such typical cases
 * being handled by the default handler).
 * @callback 
 * @param pads the #GstCollectPads that triggered the callback
 * @param pad the #GstPad that received an event
 * @param event the #GstEvent received
 * @returns %TRUE if the pad could handle the event
 */
export interface CollectPadsEventFunction {
    (pads: CollectPads, pad: CollectData, event: Gst.Event): boolean
}
/**
 * A function that will be called while processing a flushing seek event.
 * 
 * The function should flush any internal state of the element and the state of
 * all the pads. It should clear only the state not directly managed by the
 * `pads` object. It is therefore not necessary to call
 * gst_collect_pads_set_flushing nor gst_collect_pads_clear from this function.
 * @callback 
 * @param pads a #GstCollectPads
 */
export interface CollectPadsFlushFunction {
    (pads: CollectPads): void
}
/**
 * A function that will be called when all pads have received data.
 * @callback 
 * @param pads the #GstCollectPads that triggered the callback
 * @returns %GST_FLOW_OK for success
 */
export interface CollectPadsFunction {
    (pads: CollectPads): Gst.FlowReturn
}
/**
 * A function that will be called while processing a query. It takes
 * ownership of the query and is responsible for chaining up (to
 * events downstream (with gst_pad_event_default()).
 * @callback 
 * @param pads the #GstCollectPads that triggered the callback
 * @param pad the #GstPad that received an event
 * @param query the #GstEvent received
 * @returns %TRUE if the pad could handle the event
 */
export interface CollectPadsQueryFunction {
    (pads: CollectPads, pad: CollectData, query: Gst.Query): boolean
}
export interface DataQueueEmptyCallback {
    (queue: DataQueue, checkdata: any | null): void
}
export interface DataQueueFullCallback {
    (queue: DataQueue, checkdata: any | null): void
}
/**
 * This function will be called by gst_type_find_helper_get_range() when
 * typefinding functions request to peek at the data of a stream at certain
 * offsets. If this function returns GST_FLOW_OK, the result buffer will be
 * stored in `buffer`. The  contents of `buffer` is invalid for any other
 * return value.
 * 
 * This function is supposed to behave exactly like a #GstPadGetRangeFunction.
 * @callback 
 * @param obj a #GstObject that will handle the getrange request
 * @param parent the parent of `obj` or %NULL
 * @param offset the offset of the range
 * @param length the length of the range
 * @returns GST_FLOW_OK for success
 */
export interface TypeFindHelperGetRangeFunction {
    (obj: Gst.Object, parent: Gst.Object | null, offset: number, length: number): Gst.FlowReturn
}
export module Adapter {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Adapter {

    // Own properties of GstBase-1.0.GstBase.Adapter

    __gtype__: number

    // Owm methods of GstBase-1.0.GstBase.Adapter

    /**
     * Gets the maximum amount of bytes available, that is it returns the maximum
     * value that can be supplied to gst_adapter_map() without that function
     * returning %NULL.
     * @returns number of bytes available in @adapter
     */
    available(): number
    /**
     * Gets the maximum number of bytes that are immediately available without
     * requiring any expensive operations (like copying the data into a
     * temporary buffer).
     * @returns number of bytes that are available in @adapter without expensive operations
     */
    availableFast(): number
    /**
     * Removes all buffers from `adapter`.
     */
    clear(): void
    /**
     * Similar to gst_adapter_copy, but more suitable for language bindings. `size`
     * bytes of data starting at `offset` will be copied out of the buffers contained
     * in `adapter` and into a new #GBytes structure which is returned. Depending on
     * the value of the `size` argument an empty #GBytes structure may be returned.
     * @param offset the bytes offset in the adapter to start from
     * @param size the number of bytes to copy
     * @returns A new #GBytes structure containing the copied data.
     */
    copy(offset: number, size: number): any
    /**
     * Get the distance in bytes since the last buffer with the
     * %GST_BUFFER_FLAG_DISCONT flag.
     * 
     * The distance will be reset to 0 for all buffers with
     * %GST_BUFFER_FLAG_DISCONT on them, and then calculated for all other
     * following buffers based on their size.
     * @returns The offset. Can be %GST_BUFFER_OFFSET_NONE.
     */
    distanceFromDiscont(): number
    /**
     * Get the DTS that was on the last buffer with the GST_BUFFER_FLAG_DISCONT
     * flag, or GST_CLOCK_TIME_NONE.
     * @returns The DTS at the last discont or GST_CLOCK_TIME_NONE.
     */
    dtsAtDiscont(): Gst.ClockTime
    /**
     * Flushes the first `flush` bytes in the `adapter`. The caller must ensure that
     * at least this many bytes are available.
     * 
     * See also: gst_adapter_map(), gst_adapter_unmap()
     * @param flush the number of bytes to flush
     */
    flush(flush: number): void
    /**
     * Returns a #GstBuffer containing the first `nbytes` of the `adapter,` but
     * does not flush them from the adapter. See gst_adapter_take_buffer()
     * for details.
     * 
     * Caller owns a reference to the returned buffer. gst_buffer_unref() after
     * usage.
     * 
     * Free-function: gst_buffer_unref
     * @param nbytes the number of bytes to get
     * @returns a #GstBuffer containing the first     @nbytes of the adapter, or %NULL if @nbytes bytes are not available.     gst_buffer_unref() when no longer needed.
     */
    getBuffer(nbytes: number): Gst.Buffer | null
    /**
     * Returns a #GstBuffer containing the first `nbytes` of the `adapter,` but
     * does not flush them from the adapter. See gst_adapter_take_buffer_fast()
     * for details.
     * 
     * Caller owns a reference to the returned buffer. gst_buffer_unref() after
     * usage.
     * 
     * Free-function: gst_buffer_unref
     * @param nbytes the number of bytes to get
     * @returns a #GstBuffer containing the first     @nbytes of the adapter, or %NULL if @nbytes bytes are not available.     gst_buffer_unref() when no longer needed.
     */
    getBufferFast(nbytes: number): Gst.Buffer | null
    /**
     * Returns a #GstBufferList of buffers containing the first `nbytes` bytes of
     * the `adapter` but does not flush them from the adapter. See
     * gst_adapter_take_buffer_list() for details.
     * 
     * Caller owns the returned list. Call gst_buffer_list_unref() to free
     * the list after usage.
     * @param nbytes the number of bytes to get
     * @returns a #GstBufferList of buffers containing     the first @nbytes of the adapter, or %NULL if @nbytes bytes are not     available
     */
    getBufferList(nbytes: number): Gst.BufferList | null
    /**
     * Returns a #GList of buffers containing the first `nbytes` bytes of the
     * `adapter,` but does not flush them from the adapter. See
     * gst_adapter_take_list() for details.
     * 
     * Caller owns returned list and contained buffers. gst_buffer_unref() each
     * buffer in the list before freeing the list after usage.
     * @param nbytes the number of bytes to get
     * @returns a #GList of     buffers containing the first @nbytes of the adapter, or %NULL if @nbytes     bytes are not available
     */
    getList(nbytes: number): Gst.Buffer[] | null
    /**
     * Gets the first `size` bytes stored in the `adapter`. The returned pointer is
     * valid until the next function is called on the adapter.
     * 
     * Note that setting the returned pointer as the data of a #GstBuffer is
     * incorrect for general-purpose plugins. The reason is that if a downstream
     * element stores the buffer so that it has access to it outside of the bounds
     * of its chain function, the buffer will have an invalid data pointer after
     * your element flushes the bytes. In that case you should use
     * gst_adapter_take(), which returns a freshly-allocated buffer that you can set
     * as #GstBuffer memory or the potentially more performant
     * gst_adapter_take_buffer().
     * 
     * Returns %NULL if `size` bytes are not available.
     * @returns      a pointer to the first @size bytes of data, or %NULL
     */
    map(): number[] | null
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
     * This function calls gst_adapter_masked_scan_uint32_peek() passing %NULL
     * for value.
     * @param mask mask to apply to data before matching against `pattern`
     * @param pattern pattern to match (after mask is applied)
     * @param offset offset into the adapter data from which to start scanning, returns          the last scanned position.
     * @param size number of bytes to scan from offset
     * @returns offset of the first match, or -1 if no match was found. Example: |[ // Assume the adapter contains 0x00 0x01 0x02 ... 0xfe 0xff gst_adapter_masked_scan_uint32 (adapter, 0xffffffff, 0x00010203, 0, 256); // -> returns 0 gst_adapter_masked_scan_uint32 (adapter, 0xffffffff, 0x00010203, 1, 255); // -> returns -1 gst_adapter_masked_scan_uint32 (adapter, 0xffffffff, 0x01020304, 1, 255); // -> returns 1 gst_adapter_masked_scan_uint32 (adapter, 0xffff, 0x0001, 0, 256); // -> returns -1 gst_adapter_masked_scan_uint32 (adapter, 0xffff, 0x0203, 0, 256); // -> returns 0 gst_adapter_masked_scan_uint32 (adapter, 0xffff0000, 0x02030000, 0, 256); // -> returns 2 gst_adapter_masked_scan_uint32 (adapter, 0xffff0000, 0x02030000, 0, 4); // -> returns -1 ]|
     */
    maskedScanUint32(mask: number, pattern: number, offset: number, size: number): number
    /**
     * Scan for pattern `pattern` with applied mask `mask` in the adapter data,
     * starting from offset `offset`.  If a match is found, the value that matched
     * is returned through `value,` otherwise `value` is left untouched.
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
    maskedScanUint32Peek(mask: number, pattern: number, offset: number, size: number): [ /* returnType */ number, /* value */ number ]
    /**
     * Get the offset that was on the last buffer with the GST_BUFFER_FLAG_DISCONT
     * flag, or GST_BUFFER_OFFSET_NONE.
     * @returns The offset at the last discont or GST_BUFFER_OFFSET_NONE.
     */
    offsetAtDiscont(): number
    /**
     * Get the dts that was before the current byte in the adapter. When
     * `distance` is given, the amount of bytes between the dts and the current
     * position is returned.
     * 
     * The dts is reset to GST_CLOCK_TIME_NONE and the distance is set to 0 when
     * the adapter is first created or when it is cleared. This also means that before
     * the first byte with a dts is removed from the adapter, the dts
     * and distance returned are GST_CLOCK_TIME_NONE and 0 respectively.
     * @returns The previously seen dts.
     */
    prevDts(): [ /* returnType */ Gst.ClockTime, /* distance */ number ]
    /**
     * Get the dts that was before the byte at offset `offset` in the adapter. When
     * `distance` is given, the amount of bytes between the dts and the current
     * position is returned.
     * 
     * The dts is reset to GST_CLOCK_TIME_NONE and the distance is set to 0 when
     * the adapter is first created or when it is cleared. This also means that before
     * the first byte with a dts is removed from the adapter, the dts
     * and distance returned are GST_CLOCK_TIME_NONE and 0 respectively.
     * @param offset the offset in the adapter at which to get timestamp
     * @returns The previously seen dts at given offset.
     */
    prevDtsAtOffset(offset: number): [ /* returnType */ Gst.ClockTime, /* distance */ number ]
    /**
     * Get the offset that was before the current byte in the adapter. When
     * `distance` is given, the amount of bytes between the offset and the current
     * position is returned.
     * 
     * The offset is reset to GST_BUFFER_OFFSET_NONE and the distance is set to 0
     * when the adapter is first created or when it is cleared. This also means that
     * before the first byte with an offset is removed from the adapter, the offset
     * and distance returned are GST_BUFFER_OFFSET_NONE and 0 respectively.
     * @returns The previous seen offset.
     */
    prevOffset(): [ /* returnType */ number, /* distance */ number ]
    /**
     * Get the pts that was before the current byte in the adapter. When
     * `distance` is given, the amount of bytes between the pts and the current
     * position is returned.
     * 
     * The pts is reset to GST_CLOCK_TIME_NONE and the distance is set to 0 when
     * the adapter is first created or when it is cleared. This also means that before
     * the first byte with a pts is removed from the adapter, the pts
     * and distance returned are GST_CLOCK_TIME_NONE and 0 respectively.
     * @returns The previously seen pts.
     */
    prevPts(): [ /* returnType */ Gst.ClockTime, /* distance */ number ]
    /**
     * Get the pts that was before the byte at offset `offset` in the adapter. When
     * `distance` is given, the amount of bytes between the pts and the current
     * position is returned.
     * 
     * The pts is reset to GST_CLOCK_TIME_NONE and the distance is set to 0 when
     * the adapter is first created or when it is cleared. This also means that before
     * the first byte with a pts is removed from the adapter, the pts
     * and distance returned are GST_CLOCK_TIME_NONE and 0 respectively.
     * @param offset the offset in the adapter at which to get timestamp
     * @returns The previously seen pts at given offset.
     */
    prevPtsAtOffset(offset: number): [ /* returnType */ Gst.ClockTime, /* distance */ number ]
    /**
     * Get the PTS that was on the last buffer with the GST_BUFFER_FLAG_DISCONT
     * flag, or GST_CLOCK_TIME_NONE.
     * @returns The PTS at the last discont or GST_CLOCK_TIME_NONE.
     */
    ptsAtDiscont(): Gst.ClockTime
    /**
     * Adds the data from `buf` to the data stored inside `adapter` and takes
     * ownership of the buffer.
     * @param buf a #GstBuffer to add to queue in the adapter
     */
    push(buf: Gst.Buffer): void
    /**
     * Returns a freshly allocated buffer containing the first `nbytes` bytes of the
     * `adapter`. The returned bytes will be flushed from the adapter.
     * 
     * Caller owns returned value. g_free after usage.
     * 
     * Free-function: g_free
     * @returns      oven-fresh hot data, or %NULL if @nbytes bytes are not available
     */
    take(): number[] | null
    /**
     * Returns a #GstBuffer containing the first `nbytes` bytes of the
     * `adapter`. The returned bytes will be flushed from the adapter.
     * This function is potentially more performant than
     * gst_adapter_take() since it can reuse the memory in pushed buffers
     * by subbuffering or merging. This function will always return a
     * buffer with a single memory region.
     * 
     * Note that no assumptions should be made as to whether certain buffer
     * flags such as the DISCONT flag are set on the returned buffer, or not.
     * The caller needs to explicitly set or unset flags that should be set or
     * unset.
     * 
     * Since 1.6 this will also copy over all GstMeta of the input buffers except
     * for meta with the %GST_META_FLAG_POOLED flag or with the "memory" tag.
     * 
     * Caller owns a reference to the returned buffer. gst_buffer_unref() after
     * usage.
     * 
     * Free-function: gst_buffer_unref
     * @param nbytes the number of bytes to take
     * @returns a #GstBuffer containing the first     @nbytes of the adapter, or %NULL if @nbytes bytes are not available.     gst_buffer_unref() when no longer needed.
     */
    takeBuffer(nbytes: number): Gst.Buffer | null
    /**
     * Returns a #GstBuffer containing the first `nbytes` of the `adapter`.
     * The returned bytes will be flushed from the adapter.  This function
     * is potentially more performant than gst_adapter_take_buffer() since
     * it can reuse the memory in pushed buffers by subbuffering or
     * merging. Unlike gst_adapter_take_buffer(), the returned buffer may
     * be composed of multiple non-contiguous #GstMemory objects, no
     * copies are made.
     * 
     * Note that no assumptions should be made as to whether certain buffer
     * flags such as the DISCONT flag are set on the returned buffer, or not.
     * The caller needs to explicitly set or unset flags that should be set or
     * unset.
     * 
     * This will also copy over all GstMeta of the input buffers except
     * for meta with the %GST_META_FLAG_POOLED flag or with the "memory" tag.
     * 
     * This function can return buffer up to the return value of
     * gst_adapter_available() without making copies if possible.
     * 
     * Caller owns a reference to the returned buffer. gst_buffer_unref() after
     * usage.
     * 
     * Free-function: gst_buffer_unref
     * @param nbytes the number of bytes to take
     * @returns a #GstBuffer containing the first     @nbytes of the adapter, or %NULL if @nbytes bytes are not available.     gst_buffer_unref() when no longer needed.
     */
    takeBufferFast(nbytes: number): Gst.Buffer | null
    /**
     * Returns a #GstBufferList of buffers containing the first `nbytes` bytes of
     * the `adapter`. The returned bytes will be flushed from the adapter.
     * When the caller can deal with individual buffers, this function is more
     * performant because no memory should be copied.
     * 
     * Caller owns the returned list. Call gst_buffer_list_unref() to free
     * the list after usage.
     * @param nbytes the number of bytes to take
     * @returns a #GstBufferList of buffers containing     the first @nbytes of the adapter, or %NULL if @nbytes bytes are not     available
     */
    takeBufferList(nbytes: number): Gst.BufferList | null
    /**
     * Returns a #GList of buffers containing the first `nbytes` bytes of the
     * `adapter`. The returned bytes will be flushed from the adapter.
     * When the caller can deal with individual buffers, this function is more
     * performant because no memory should be copied.
     * 
     * Caller owns returned list and contained buffers. gst_buffer_unref() each
     * buffer in the list before freeing the list after usage.
     * @param nbytes the number of bytes to take
     * @returns a #GList of     buffers containing the first @nbytes of the adapter, or %NULL if @nbytes     bytes are not available
     */
    takeList(nbytes: number): Gst.Buffer[] | null
    /**
     * Releases the memory obtained with the last gst_adapter_map().
     */
    unmap(): void

    // Class property signals of GstBase-1.0.GstBase.Adapter

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

/**
 * This class is for elements that receive buffers in an undesired size.
 * While for example raw video contains one image per buffer, the same is not
 * true for a lot of other formats, especially those that come directly from
 * a file. So if you have undefined buffer sizes and require a specific size,
 * this object is for you.
 * 
 * An adapter is created with gst_adapter_new(). It can be freed again with
 * g_object_unref().
 * 
 * The theory of operation is like this: All buffers received are put
 * into the adapter using gst_adapter_push() and the data is then read back
 * in chunks of the desired size using gst_adapter_map()/gst_adapter_unmap()
 * and/or gst_adapter_copy(). After the data has been processed, it is freed
 * using gst_adapter_unmap().
 * 
 * Other methods such as gst_adapter_take() and gst_adapter_take_buffer()
 * combine gst_adapter_map() and gst_adapter_unmap() in one method and are
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
 * For another example, a simple element inside GStreamer that uses #GstAdapter
 * is the libvisual element.
 * 
 * An element using #GstAdapter in its sink pad chain function should ensure that
 * when the FLUSH_STOP event is received, that any queued data is cleared using
 * gst_adapter_clear(). Data should also be cleared or processed on EOS and
 * when changing state from %GST_STATE_PAUSED to %GST_STATE_READY.
 * 
 * Also check the GST_BUFFER_FLAG_DISCONT flag on the buffer. Some elements might
 * need to clear the adapter after a discontinuity.
 * 
 * The adapter will keep track of the timestamps of the buffers
 * that were pushed. The last seen timestamp before the current position
 * can be queried with gst_adapter_prev_pts(). This function can
 * optionally return the number of bytes between the start of the buffer that
 * carried the timestamp and the current adapter position. The distance is
 * useful when dealing with, for example, raw audio samples because it allows
 * you to calculate the timestamp of the current adapter position by using the
 * last seen timestamp and the amount of bytes since.  Additionally, the
 * gst_adapter_prev_pts_at_offset() can be used to determine the last
 * seen timestamp at a particular offset in the adapter.
 * 
 * The adapter will also keep track of the offset of the buffers
 * (#GST_BUFFER_OFFSET) that were pushed. The last seen offset before the
 * current position can be queried with gst_adapter_prev_offset(). This function
 * can optionally return the number of bytes between the start of the buffer
 * that carried the offset and the current adapter position.
 * 
 * Additionally the adapter also keeps track of the PTS, DTS and buffer offset
 * at the last discontinuity, which can be retrieved with
 * gst_adapter_pts_at_discont(), gst_adapter_dts_at_discont() and
 * gst_adapter_offset_at_discont(). The number of bytes that were consumed
 * since then can be queried with gst_adapter_distance_from_discont().
 * 
 * A last thing to note is that while #GstAdapter is pretty optimized,
 * merging buffers still might be an operation that requires a `malloc()` and
 * `memcpy()` operation, and these operations are not the fastest. Because of
 * this, some functions like gst_adapter_available_fast() are provided to help
 * speed up such cases should you want to. To avoid repeated memory allocations,
 * gst_adapter_copy() can be used to copy data into a (statically allocated)
 * user provided buffer.
 * 
 * #GstAdapter is not MT safe. All operations on an adapter must be serialized by
 * the caller. This is not normally a problem, however, as the normal use case
 * of #GstAdapter is inside one pad's chain function, in which case access is
 * serialized via the pad's STREAM_LOCK.
 * 
 * Note that gst_adapter_push() takes ownership of the buffer passed. Use
 * gst_buffer_ref() before pushing it into the adapter if you still want to
 * access the buffer later. The adapter will never modify the data in the
 * buffer pushed in it.
 * @class 
 */
export class Adapter extends GObject.Object {

    // Own properties of GstBase-1.0.GstBase.Adapter

    static name: string

    // Constructors of GstBase-1.0.GstBase.Adapter

    constructor(config?: Adapter.ConstructorProperties) 
    /**
     * Creates a new #GstAdapter. Free with g_object_unref().
     * @constructor 
     * @returns a new #GstAdapter
     */
    constructor() 
    /**
     * Creates a new #GstAdapter. Free with g_object_unref().
     * @constructor 
     * @returns a new #GstAdapter
     */
    static new(): Adapter
    _init(config?: Adapter.ConstructorProperties): void
}

export module Aggregator {

    // Signal callback interfaces

    /**
     * Signal callback interface for `samples-selected`
     */
    export interface SamplesSelectedSignalCallback {
        (segment: Gst.Segment, pts: number, dts: number, duration: number, info: Gst.Structure | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Element.ConstructorProperties {

        // Own constructor properties of GstBase-1.0.GstBase.Aggregator

        /**
         * Enables the emission of signals such as #GstAggregator::samples-selected
         */
        emitSignals?: boolean | null
        latency?: number | null
        /**
         * Force minimum upstream latency (in nanoseconds). When sources with a
         * higher latency are expected to be plugged in dynamically after the
         * aggregator has started playing, this allows overriding the minimum
         * latency reported by the initial source(s). This is only taken into
         * account when larger than the actually reported minimum latency.
         */
        minUpstreamLatency?: number | null
        startTime?: number | null
        startTimeSelection?: AggregatorStartTimeSelection | null
    }

}

export interface Aggregator {

    // Own properties of GstBase-1.0.GstBase.Aggregator

    /**
     * Enables the emission of signals such as #GstAggregator::samples-selected
     */
    emitSignals: boolean
    latency: number
    /**
     * Force minimum upstream latency (in nanoseconds). When sources with a
     * higher latency are expected to be plugged in dynamically after the
     * aggregator has started playing, this allows overriding the minimum
     * latency reported by the initial source(s). This is only taken into
     * account when larger than the actually reported minimum latency.
     */
    minUpstreamLatency: number
    startTime: any
    startTimeSelection: AggregatorStartTimeSelection
    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstBase-1.0.GstBase.Aggregator

    parent: Gst.Element & Gst.Object
    /**
     * the aggregator's source pad
     * @field 
     */
    srcpad: Gst.Pad

    // Owm methods of GstBase-1.0.GstBase.Aggregator

    // Has conflict: finishBuffer(buffer: Gst.Buffer): Gst.FlowReturn
    // Has conflict: finishBufferList(bufferlist: Gst.BufferList): Gst.FlowReturn
    /**
     * Lets #GstAggregator sub-classes get the memory `allocator`
     * acquired by the base class and its `params`.
     * 
     * Unref the `allocator` after use it.
     */
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams ]
    getBufferPool(): Gst.BufferPool | null
    /**
     * Subclasses may use the return value to inform whether they should return
     * %GST_FLOW_EOS from their aggregate implementation.
     * @returns whether live status was forced on @self.
     */
    getForceLive(): boolean
    getIgnoreInactivePads(): boolean
    /**
     * Retrieves the latency values reported by `self` in response to the latency
     * query, or %GST_CLOCK_TIME_NONE if there is not live source connected and the element
     * will not wait for the clock.
     * 
     * Typically only called by subclasses.
     * @returns The latency or %GST_CLOCK_TIME_NONE if the element does not sync
     */
    getLatency(): Gst.ClockTime
    // Has conflict: negotiate(): boolean
    // Has conflict: peekNextSample(pad: AggregatorPad): Gst.Sample | null
    /**
     * Subclasses should call this when they have prepared the
     * buffers they will aggregate for each of their sink pads, but
     * before using any of the properties of the pads that govern
     * *how* aggregation should be performed, for example z-index
     * for video aggregators.
     * 
     * If gst_aggregator_update_segment() is used by the subclass,
     * it MUST be called before gst_aggregator_selected_samples().
     * 
     * This function MUST only be called from the #GstAggregatorClass::aggregate()
     * function.
     * @param pts The presentation timestamp of the next output buffer
     * @param dts The decoding timestamp of the next output buffer
     * @param duration The duration of the next output buffer
     * @param info a #GstStructure containing additional information
     */
    selectedSamples(pts: Gst.ClockTime, dts: Gst.ClockTime, duration: Gst.ClockTime, info: Gst.Structure | null): void
    /**
     * Subclasses should call this at construction time in order for `self` to
     * aggregate on a timeout even when no live source is connected.
     * @param forceLive 
     */
    setForceLive(forceLive: boolean): void
    /**
     * Subclasses should call this when they don't want to time out
     * waiting for a pad that hasn't yet received any buffers in live
     * mode.
     * 
     * #GstAggregator will still wait once on each newly-added pad, making
     * sure upstream has had a fair chance to start up.
     * @param ignore whether inactive pads should not be waited on
     */
    setIgnoreInactivePads(ignore: boolean): void
    /**
     * Lets #GstAggregator sub-classes tell the baseclass what their internal
     * latency is. Will also post a LATENCY message on the bus so the pipeline
     * can reconfigure its global latency if the values changed.
     * @param minLatency minimum latency
     * @param maxLatency maximum latency
     */
    setLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): void
    /**
     * Sets the caps to be used on the src pad.
     * @param caps The #GstCaps to set on the src pad.
     */
    setSrcCaps(caps: Gst.Caps): void
    /**
     * This is a simple #GstAggregatorClass::get_next_time implementation that
     * just looks at the #GstSegment on the srcpad of the aggregator and bases
     * the next time on the running time there.
     * 
     * This is the desired behaviour in most cases where you have a live source
     * and you have a dead line based aggregator subclass.
     * @returns The running time based on the position
     */
    simpleGetNextTime(): Gst.ClockTime
    /**
     * Subclasses should use this to update the segment on their
     * source pad, instead of directly pushing new segment events
     * downstream.
     * 
     * Subclasses MUST call this before gst_aggregator_selected_samples(),
     * if it is used at all.
     * @param segment 
     */
    updateSegment(segment: Gst.Segment): void

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own virtual methods of GstBase-1.0.GstBase.Aggregator

    aggregate(timeout: boolean): Gst.FlowReturn
    clip(aggregatorPad: AggregatorPad, buf: Gst.Buffer): Gst.Buffer
    decideAllocation(query: Gst.Query): boolean
    /**
     * This method will push the provided output buffer downstream. If needed,
     * mandatory events such as stream-start, caps, and segment events will be
     * sent before pushing the buffer.
     * @virtual 
     * @param buffer the #GstBuffer to push.
     */
    finishBuffer(buffer: Gst.Buffer): Gst.FlowReturn
    /**
     * This method will push the provided output buffer list downstream. If needed,
     * mandatory events such as stream-start, caps, and segment events will be
     * sent before pushing the buffer.
     * @virtual 
     * @param bufferlist the #GstBufferList to push.
     */
    finishBufferList(bufferlist: Gst.BufferList): Gst.FlowReturn
    fixateSrcCaps(caps: Gst.Caps): Gst.Caps
    flush(): Gst.FlowReturn
    getNextTime(): Gst.ClockTime
    /**
     * Negotiates src pad caps with downstream elements.
     * Unmarks GST_PAD_FLAG_NEED_RECONFIGURE in any case. But marks it again
     * if #GstAggregatorClass::negotiate fails.
     * @virtual 
     * @returns %TRUE if the negotiation succeeded, else %FALSE.
     */
    negotiate(): boolean
    negotiatedSrcCaps(caps: Gst.Caps): boolean
    /**
     * Use this function to determine what input buffers will be aggregated
     * to produce the next output buffer. This should only be called from
     * a #GstAggregator::samples-selected handler, and can be used to precisely
     * control aggregating parameters for a given set of input samples.
     * @virtual 
     * @param aggregatorPad 
     * @returns The sample that is about to be aggregated. It may hold a #GstBuffer   or a #GstBufferList. The contents of its info structure is subclass-dependent,   and documented on a subclass basis. The buffers held by the sample are   not writable.
     */
    peekNextSample(aggregatorPad: AggregatorPad): Gst.Sample | null
    proposeAllocation(pad: AggregatorPad, decideQuery: Gst.Query, query: Gst.Query): boolean
    sinkEvent(aggregatorPad: AggregatorPad, event: Gst.Event): boolean
    sinkEventPreQueue(aggregatorPad: AggregatorPad, event: Gst.Event): Gst.FlowReturn
    sinkQuery(aggregatorPad: AggregatorPad, query: Gst.Query): boolean
    sinkQueryPreQueue(aggregatorPad: AggregatorPad, query: Gst.Query): boolean
    srcActivate(mode: Gst.PadMode, active: boolean): boolean
    srcEvent(event: Gst.Event): boolean
    srcQuery(query: Gst.Query): boolean
    start(): boolean
    stop(): boolean
    updateSrcCaps(caps: Gst.Caps): [ /* returnType */ Gst.FlowReturn, /* ret */ Gst.Caps ]

    // Own signals of GstBase-1.0.GstBase.Aggregator

    connect(sigName: "samples-selected", callback: Aggregator.SamplesSelectedSignalCallback): number
    on(sigName: "samples-selected", callback: Aggregator.SamplesSelectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "samples-selected", callback: Aggregator.SamplesSelectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "samples-selected", callback: Aggregator.SamplesSelectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "samples-selected", pts: number, dts: number, duration: number, info: Gst.Structure | null, ...args: any[]): void

    // Class property signals of GstBase-1.0.GstBase.Aggregator

    connect(sigName: "notify::emit-signals", callback: (...args: any[]) => void): number
    on(sigName: "notify::emit-signals", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::emit-signals", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::emit-signals", ...args: any[]): void
    connect(sigName: "notify::latency", callback: (...args: any[]) => void): number
    on(sigName: "notify::latency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::latency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::latency", ...args: any[]): void
    connect(sigName: "notify::min-upstream-latency", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-upstream-latency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-upstream-latency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-upstream-latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-upstream-latency", ...args: any[]): void
    connect(sigName: "notify::start-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::start-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::start-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::start-time", ...args: any[]): void
    connect(sigName: "notify::start-time-selection", callback: (...args: any[]) => void): number
    on(sigName: "notify::start-time-selection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::start-time-selection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::start-time-selection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::start-time-selection", ...args: any[]): void
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

/**
 * Manages a set of pads with the purpose of aggregating their buffers.
 * Control is given to the subclass when all pads have data.
 * 
 *  * Base class for mixers and muxers. Subclasses should at least implement
 *    the #GstAggregatorClass::aggregate virtual method.
 * 
 *  * Installs a #GstPadChainFunction, a #GstPadEventFullFunction and a
 *    #GstPadQueryFunction to queue all serialized data packets per sink pad.
 *    Subclasses should not overwrite those, but instead implement
 *    #GstAggregatorClass::sink_event and #GstAggregatorClass::sink_query as
 *    needed.
 * 
 *  * When data is queued on all pads, the aggregate vmethod is called.
 * 
 *  * One can peek at the data on any given GstAggregatorPad with the
 *    gst_aggregator_pad_peek_buffer() method, and remove it from the pad
 *    with the gst_aggregator_pad_pop_buffer () method. When a buffer
 *    has been taken with pop_buffer (), a new buffer can be queued
 *    on that pad.
 * 
 *  * When gst_aggregator_pad_peek_buffer() or gst_aggregator_pad_has_buffer()
 *    are called, a reference is taken to the returned buffer, which stays
 *    valid until either:
 * 
 *      - gst_aggregator_pad_pop_buffer() is called, in which case the caller
 *        is guaranteed that the buffer they receive is the same as the peeked
 *        buffer.
 *      - gst_aggregator_pad_drop_buffer() is called, in which case the caller
 *        is guaranteed that the dropped buffer is the one that was peeked.
 *      - the subclass implementation of #GstAggregatorClass.aggregate returns.
 * 
 *    Subsequent calls to gst_aggregator_pad_peek_buffer() or
 *    gst_aggregator_pad_has_buffer() return / check the same buffer that was
 *    returned / checked, until one of the conditions listed above is met.
 * 
 *    Subclasses are only allowed to call these methods from the aggregate
 *    thread.
 * 
 *  * If the subclass wishes to push a buffer downstream in its aggregate
 *    implementation, it should do so through the
 *    gst_aggregator_finish_buffer() method. This method will take care
 *    of sending and ordering mandatory events such as stream start, caps
 *    and segment. Buffer lists can also be pushed out with
 *    gst_aggregator_finish_buffer_list().
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
 *  * Subclasses must use (a subclass of) #GstAggregatorPad for both their
 *    sink and source pads.
 *    See gst_element_class_add_static_pad_template_with_gtype().
 * 
 * This class used to live in gst-plugins-bad and was moved to core.
 * @class 
 */
export class Aggregator extends Gst.Element {

    // Own properties of GstBase-1.0.GstBase.Aggregator

    static name: string

    // Constructors of GstBase-1.0.GstBase.Aggregator

    constructor(config?: Aggregator.ConstructorProperties) 
    _init(config?: Aggregator.ConstructorProperties): void
}

export module AggregatorPad {

    // Signal callback interfaces

    /**
     * Signal callback interface for `buffer-consumed`
     */
    export interface BufferConsumedSignalCallback {
        (object: Gst.Buffer): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Pad.ConstructorProperties {

        // Own constructor properties of GstBase-1.0.GstBase.AggregatorPad

        /**
         * Enables the emission of signals such as #GstAggregatorPad::buffer-consumed
         */
        emitSignals?: boolean | null
    }

}

export interface AggregatorPad {

    // Own properties of GstBase-1.0.GstBase.AggregatorPad

    /**
     * Enables the emission of signals such as #GstAggregatorPad::buffer-consumed
     */
    emitSignals: boolean
    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstBase-1.0.GstBase.AggregatorPad

    parent: Gst.Pad & Gst.Object
    /**
     * last segment received.
     * @field 
     */
    segment: Gst.Segment

    // Owm methods of GstBase-1.0.GstBase.AggregatorPad

    /**
     * Drop the buffer currently queued in `pad`.
     * @returns TRUE if there was a buffer queued in @pad, or FALSE if not.
     */
    dropBuffer(): boolean
    /**
     * This checks if a pad has a buffer available that will be returned by
     * a call to gst_aggregator_pad_peek_buffer() or
     * gst_aggregator_pad_pop_buffer().
     * @returns %TRUE if the pad has a buffer available as the next thing.
     */
    hasBuffer(): boolean
    isEos(): boolean
    /**
     * It is only valid to call this method from #GstAggregatorClass::aggregate()
     * @returns %TRUE if the pad is inactive, %FALSE otherwise.   See gst_aggregator_ignore_inactive_pads() for more info.
     */
    isInactive(): boolean
    peekBuffer(): Gst.Buffer | null
    /**
     * Steal the ref to the buffer currently queued in `pad`.
     * @returns The buffer in @pad or NULL if no buffer was   queued. You should unref the buffer after usage.
     */
    popBuffer(): Gst.Buffer | null

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own virtual methods of GstBase-1.0.GstBase.AggregatorPad

    flush(aggregator: Aggregator): Gst.FlowReturn
    skipBuffer(aggregator: Aggregator, buffer: Gst.Buffer): boolean

    // Own signals of GstBase-1.0.GstBase.AggregatorPad

    connect(sigName: "buffer-consumed", callback: AggregatorPad.BufferConsumedSignalCallback): number
    on(sigName: "buffer-consumed", callback: AggregatorPad.BufferConsumedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "buffer-consumed", callback: AggregatorPad.BufferConsumedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "buffer-consumed", callback: AggregatorPad.BufferConsumedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "buffer-consumed", ...args: any[]): void

    // Class property signals of GstBase-1.0.GstBase.AggregatorPad

    connect(sigName: "notify::emit-signals", callback: (...args: any[]) => void): number
    on(sigName: "notify::emit-signals", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::emit-signals", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::emit-signals", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::emit-signals", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::caps", callback: (...args: any[]) => void): number
    on(sigName: "notify::caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::caps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::caps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::caps", ...args: any[]): void
    connect(sigName: "notify::offset", callback: (...args: any[]) => void): number
    on(sigName: "notify::offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offset", ...args: any[]): void
    connect(sigName: "notify::template", callback: (...args: any[]) => void): number
    on(sigName: "notify::template", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::template", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::template", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::template", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Pads managed by a #GstAggregator subclass.
 * 
 * This class used to live in gst-plugins-bad and was moved to core.
 * @class 
 */
export class AggregatorPad extends Gst.Pad {

    // Own properties of GstBase-1.0.GstBase.AggregatorPad

    static name: string

    // Constructors of GstBase-1.0.GstBase.AggregatorPad

    constructor(config?: AggregatorPad.ConstructorProperties) 
    _init(config?: AggregatorPad.ConstructorProperties): void
}

export module BaseParse {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Element.ConstructorProperties {

        // Own constructor properties of GstBase-1.0.GstBase.BaseParse

        /**
         * If set to %TRUE, baseparse will unconditionally force parsing of the
         * incoming data. This can be required in the rare cases where the incoming
         * side-data (caps, pts, dts, ...) is not trusted by the user and wants to
         * force validation and parsing of the incoming data.
         * If set to %FALSE, decision of whether to parse the data or not is up to
         * the implementation (standard behaviour).
         */
        disablePassthrough?: boolean | null
    }

}

export interface BaseParse {

    // Own properties of GstBase-1.0.GstBase.BaseParse

    /**
     * If set to %TRUE, baseparse will unconditionally force parsing of the
     * incoming data. This can be required in the rare cases where the incoming
     * side-data (caps, pts, dts, ...) is not trusted by the user and wants to
     * force validation and parsing of the incoming data.
     * If set to %FALSE, decision of whether to parse the data or not is up to
     * the implementation (standard behaviour).
     */
    disablePassthrough: boolean
    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstBase-1.0.GstBase.BaseParse

    /**
     * the parent element.
     * @field 
     */
    element: Gst.Element
    sinkpad: Gst.Pad
    srcpad: Gst.Pad
    flags: number
    segment: Gst.Segment

    // Owm methods of GstBase-1.0.GstBase.BaseParse

    /**
     * Adds an entry to the index associating `offset` to `ts`.  It is recommended
     * to only add keyframe entries.  `force` allows to bypass checks, such as
     * whether the stream is (upstream) seekable, another entry is already "close"
     * to the new entry, etc.
     * @param offset offset of entry
     * @param ts timestamp associated with offset
     * @param key whether entry refers to keyframe
     * @param force add entry disregarding sanity checks
     * @returns #gboolean indicating whether entry was added
     */
    addIndexEntry(offset: number, ts: Gst.ClockTime, key: boolean, force: boolean): boolean
    /**
     * Default implementation of #GstBaseParseClass::convert.
     * @param srcFormat #GstFormat describing the source format.
     * @param srcValue Source value to be converted.
     * @param destFormat #GstFormat defining the converted format.
     * @returns %TRUE if conversion was successful.
     */
    convertDefault(srcFormat: Gst.Format, srcValue: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destValue */ number ]
    /**
     * Drains the adapter until it is empty. It decreases the min_frame_size to
     * match the current adapter size and calls chain method until the adapter
     * is emptied or chain returns with error.
     */
    drain(): void
    /**
     * Collects parsed data and pushes this downstream.
     * Source pad caps must be set when this is called.
     * 
     * If `frame'`s out_buffer is set, that will be used as subsequent frame data.
     * Otherwise, `size` samples will be taken from the input and used for output,
     * and the output's metadata (timestamps etc) will be taken as (optionally)
     * set by the subclass on `frame'`s (input) buffer (which is otherwise
     * ignored for any but the above purpose/information).
     * 
     * Note that the latter buffer is invalidated by this call, whereas the
     * caller retains ownership of `frame`.
     * @param frame a #GstBaseParseFrame
     * @param size consumed input data represented by frame
     * @returns a #GstFlowReturn that should be escalated to caller (of caller)
     */
    finishFrame(frame: BaseParseFrame, size: number): Gst.FlowReturn
    /**
     * Sets the parser subclass's tags and how they should be merged with any
     * upstream stream tags. This will override any tags previously-set
     * with gst_base_parse_merge_tags().
     * 
     * Note that this is provided for convenience, and the subclass is
     * not required to use this and can still do tag handling on its own.
     * @param tags a #GstTagList to merge, or NULL to unset     previously-set tags
     * @param mode the #GstTagMergeMode to use, usually #GST_TAG_MERGE_REPLACE
     */
    mergeTags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    /**
     * Pushes the frame's buffer downstream, sends any pending events and
     * does some timestamp and segment handling. Takes ownership of
     * frame's buffer, though caller retains ownership of `frame`.
     * 
     * This must be called with sinkpad STREAM_LOCK held.
     * @param frame a #GstBaseParseFrame
     * @returns #GstFlowReturn
     */
    pushFrame(frame: BaseParseFrame): Gst.FlowReturn
    /**
     * Optionally sets the average bitrate detected in media (if non-zero),
     * e.g. based on metadata, as it will be posted to the application.
     * 
     * By default, announced average bitrate is estimated. The average bitrate
     * is used to estimate the total duration of the stream and to estimate
     * a seek position, if there's no index and the format is syncable
     * (see gst_base_parse_set_syncable()).
     * @param bitrate average bitrate in bits/second
     */
    setAverageBitrate(bitrate: number): void
    /**
     * Sets the duration of the currently playing media. Subclass can use this
     * when it is able to determine duration and/or notices a change in the media
     * duration.  Alternatively, if `interval` is non-zero (default), then stream
     * duration is determined based on estimated bitrate, and updated every `interval`
     * frames.
     * @param fmt #GstFormat.
     * @param duration duration value.
     * @param interval how often to update the duration estimate based on bitrate, or 0.
     */
    setDuration(fmt: Gst.Format, duration: number, interval: number): void
    /**
     * If frames per second is configured, parser can take care of buffer duration
     * and timestamping.  When performing segment clipping, or seeking to a specific
     * location, a corresponding decoder might need an initial `lead_in` and a
     * following `lead_out` number of frames to ensure the desired segment is
     * entirely filled upon decoding.
     * @param fpsNum frames per second (numerator).
     * @param fpsDen frames per second (denominator).
     * @param leadIn frames needed before a segment for subsequent decode
     * @param leadOut frames needed after a segment
     */
    setFrameRate(fpsNum: number, fpsDen: number, leadIn: number, leadOut: number): void
    /**
     * Set if frames carry timing information which the subclass can (generally)
     * parse and provide.  In particular, intrinsic (rather than estimated) time
     * can be obtained following a seek.
     * @param hasTiming whether frames carry timing information
     */
    setHasTimingInfo(hasTiming: boolean): void
    /**
     * By default, the base class might try to infer PTS from DTS and vice
     * versa.  While this is generally correct for audio data, it may not
     * be otherwise. Sub-classes implementing such formats should disable
     * timestamp inferring.
     * @param inferTs %TRUE if parser should infer DTS/PTS from each other
     */
    setInferTs(inferTs: boolean): void
    /**
     * Sets the minimum and maximum (which may likely be equal) latency introduced
     * by the parsing process. If there is such a latency, which depends on the
     * particular parsing of the format, it typically corresponds to 1 frame duration.
     * 
     * If the provided values changed from previously provided ones, this will
     * also post a LATENCY message on the bus so the pipeline can reconfigure its
     * global latency.
     * @param minLatency minimum parse latency
     * @param maxLatency maximum parse latency
     */
    setLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): void
    /**
     * Subclass can use this function to tell the base class that it needs to
     * be given buffers of at least `min_size` bytes.
     * @param minSize Minimum size in bytes of the data that this base class should       give to subclass.
     */
    setMinFrameSize(minSize: number): void
    /**
     * Set if the nature of the format or configuration does not allow (much)
     * parsing, and the parser should operate in passthrough mode (which only
     * applies when operating in push mode). That is, incoming buffers are
     * pushed through unmodified, i.e. no #GstBaseParseClass::handle_frame
     * will be invoked, but #GstBaseParseClass::pre_push_frame will still be
     * invoked, so subclass can perform as much or as little is appropriate for
     * passthrough semantics in #GstBaseParseClass::pre_push_frame.
     * @param passthrough %TRUE if parser should run in passthrough mode
     */
    setPassthrough(passthrough: boolean): void
    /**
     * By default, the base class will guess PTS timestamps using a simple
     * interpolation (previous timestamp + duration), which is incorrect for
     * data streams with reordering, where PTS can go backward. Sub-classes
     * implementing such formats should disable PTS interpolation.
     * @param ptsInterpolate %TRUE if parser should interpolate PTS timestamps
     */
    setPtsInterpolation(ptsInterpolate: boolean): void
    /**
     * Set if frame starts can be identified. This is set by default and
     * determines whether seeking based on bitrate averages
     * is possible for a format/stream.
     * @param syncable set if frame starts can be identified
     */
    setSyncable(syncable: boolean): void
    /**
     * This function should only be called from a `handle_frame` implementation.
     * 
     * #GstBaseParse creates initial timestamps for frames by using the last
     * timestamp seen in the stream before the frame starts.  In certain
     * cases, the correct timestamps will occur in the stream after the
     * start of the frame, but before the start of the actual picture data.
     * This function can be used to set the timestamps based on the offset
     * into the frame data that the picture starts.
     * @param offset offset into current buffer
     */
    setTsAtOffset(offset: number): void

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own virtual methods of GstBase-1.0.GstBase.BaseParse

    convert(srcFormat: Gst.Format, srcValue: number, destFormat: Gst.Format, destValue: number): boolean
    detect(buffer: Gst.Buffer): Gst.FlowReturn
    getSinkCaps(filter: Gst.Caps): Gst.Caps
    /**
     * Parses the input data into valid frames as defined by subclass
     * which should be passed to gst_base_parse_finish_frame().
     * The frame's input buffer is guaranteed writable,
     * whereas the input frame ownership is held by caller
     * (so subclass should make a copy if it needs to hang on).
     * Input buffer (data) is provided by baseclass with as much
     * metadata set as possible by baseclass according to upstream
     * information and/or subclass settings,
     * though subclass may still set buffer timestamp and duration
     * if desired.
     * @virtual 
     * @param frame 
     */
    handleFrame(frame: BaseParseFrame): [ /* returnType */ Gst.FlowReturn, /* skipsize */ number ]
    prePushFrame(frame: BaseParseFrame): Gst.FlowReturn
    setSinkCaps(caps: Gst.Caps): boolean
    sinkEvent(event: Gst.Event): boolean
    sinkQuery(query: Gst.Query): boolean
    srcEvent(event: Gst.Event): boolean
    srcQuery(query: Gst.Query): boolean
    start(): boolean
    stop(): boolean

    // Class property signals of GstBase-1.0.GstBase.BaseParse

    connect(sigName: "notify::disable-passthrough", callback: (...args: any[]) => void): number
    on(sigName: "notify::disable-passthrough", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::disable-passthrough", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::disable-passthrough", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::disable-passthrough", ...args: any[]): void
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
 *  * #GstBaseParse calls #GstBaseParseClass::start to inform subclass
 *    that data processing is about to start now.
 * 
 *  * #GstBaseParse class calls #GstBaseParseClass::set_sink_caps to
 *    inform the subclass about incoming sinkpad caps. Subclass could
 *    already set the srcpad caps accordingly, but this might be delayed
 *    until calling gst_base_parse_finish_frame() with a non-queued frame.
 * 
 *  * At least at this point subclass needs to tell the #GstBaseParse class
 *    how big data chunks it wants to receive (minimum frame size ). It can
 *    do this with gst_base_parse_set_min_frame_size().
 * 
 *  * #GstBaseParse class sets up appropriate data passing mode (pull/push)
 *    and starts to process the data.
 * 
 * ## Parsing phase
 * 
 *  * #GstBaseParse gathers at least min_frame_size bytes of data either
 *    by pulling it from upstream or collecting buffers in an internal
 *    #GstAdapter.
 * 
 *  * A buffer of (at least) min_frame_size bytes is passed to subclass
 *    with #GstBaseParseClass::handle_frame. Subclass checks the contents
 *    and can optionally return #GST_FLOW_OK along with an amount of data
 *    to be skipped to find a valid frame (which will result in a
 *    subsequent DISCONT).  If, otherwise, the buffer does not hold a
 *    complete frame, #GstBaseParseClass::handle_frame can merely return
 *    and will be called again when additional data is available.  In push
 *    mode this amounts to an additional input buffer (thus minimal
 *    additional latency), in pull mode this amounts to some arbitrary
 *    reasonable buffer size increase.
 * 
 *    Of course, gst_base_parse_set_min_frame_size() could also be used if
 *    a very specific known amount of additional data is required.  If,
 *    however, the buffer holds a complete valid frame, it can pass the
 *    size of this frame to gst_base_parse_finish_frame().
 * 
 *    If acting as a converter, it can also merely indicate consumed input
 *    data while simultaneously providing custom output data.  Note that
 *    baseclass performs some processing (such as tracking overall consumed
 *    data rate versus duration) for each finished frame, but other state
 *    is only updated upon each call to #GstBaseParseClass::handle_frame
 *    (such as tracking upstream input timestamp).
 * 
 *    Subclass is also responsible for setting the buffer metadata
 *    (e.g. buffer timestamp and duration, or keyframe if applicable).
 *    (although the latter can also be done by #GstBaseParse if it is
 *    appropriately configured, see below).  Frame is provided with
 *    timestamp derived from upstream (as much as generally possible),
 *    duration obtained from configuration (see below), and offset
 *    if meaningful (in pull mode).
 * 
 *    Note that #GstBaseParseClass::handle_frame might receive any small
 *    amount of input data when leftover data is being drained (e.g. at
 *    EOS).
 * 
 *  * As part of finish frame processing, just prior to actually pushing
 *    the buffer in question, it is passed to
 *    #GstBaseParseClass::pre_push_frame which gives subclass yet one last
 *    chance to examine buffer metadata, or to send some custom (tag)
 *    events, or to perform custom (segment) filtering.
 * 
 *  * During the parsing process #GstBaseParseClass will handle both srcpad
 *    and sinkpad events. They will be passed to subclass if
 *    #GstBaseParseClass::sink_event or #GstBaseParseClass::src_event
 *    implementations have been provided.
 * 
 * ## Shutdown phase
 * 
 * * #GstBaseParse class calls #GstBaseParseClass::stop to inform the
 *   subclass that data parsing will be stopped.
 * 
 * Subclass is responsible for providing pad template caps for source and
 * sink pads. The pads need to be named "sink" and "src". It also needs to
 * set the fixed caps on srcpad, when the format is ensured (e.g.  when
 * base class calls subclass' #GstBaseParseClass::set_sink_caps function).
 * 
 * This base class uses %GST_FORMAT_DEFAULT as a meaning of frames. So,
 * subclass conversion routine needs to know that conversion from
 * %GST_FORMAT_TIME to %GST_FORMAT_DEFAULT must return the
 * frame number that can be found from the given byte position.
 * 
 * #GstBaseParse uses subclasses conversion methods also for seeking (or
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
 *   done with gst_base_parse_set_min_frame_size() function.
 * * Examine data chunks passed to subclass with
 *   #GstBaseParseClass::handle_frame and pass proper frame(s) to
 *   gst_base_parse_finish_frame(), and setting src pad caps and timestamps
 *   on frame.
 * * Provide conversion functions
 * * Update the duration information with gst_base_parse_set_duration()
 * * Optionally passthrough using gst_base_parse_set_passthrough()
 * * Configure various baseparse parameters using
 *   gst_base_parse_set_average_bitrate(), gst_base_parse_set_syncable()
 *   and gst_base_parse_set_frame_rate().
 * 
 * * In particular, if subclass is unable to determine a duration, but
 *   parsing (or specs) yields a frames per seconds rate, then this can be
 *   provided to #GstBaseParse to enable it to cater for buffer time
 *   metadata (which will be taken from upstream as much as
 *   possible). Internally keeping track of frame durations and respective
 *   sizes that have been pushed provides #GstBaseParse with an estimated
 *   bitrate. A default #GstBaseParseClass::convert (used if not
 *   overridden) will then use these rates to perform obvious conversions.
 *   These rates are also used to update (estimated) duration at regular
 *   frame intervals.
 * @class 
 */
export class BaseParse extends Gst.Element {

    // Own properties of GstBase-1.0.GstBase.BaseParse

    static name: string

    // Constructors of GstBase-1.0.GstBase.BaseParse

    constructor(config?: BaseParse.ConstructorProperties) 
    _init(config?: BaseParse.ConstructorProperties): void
}

export module BaseSink {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Element.ConstructorProperties {

        // Own constructor properties of GstBase-1.0.GstBase.BaseSink

        /**
         * If set to %TRUE, the basesink will perform asynchronous state changes.
         * When set to %FALSE, the sink will not signal the parent when it prerolls.
         * Use this option when dealing with sparse streams or when synchronisation is
         * not required.
         */
        async?: boolean | null
        /**
         * The amount of bytes to pull when operating in pull mode.
         */
        blocksize?: number | null
        /**
         * Enable the last-sample property. If %FALSE, basesink doesn't keep a
         * reference to the last buffer arrived and the last-sample property is always
         * set to %NULL. This can be useful if you need buffers to be released as soon
         * as possible, eg. if you're using a buffer pool.
         */
        enableLastSample?: boolean | null
        /**
         * Control the maximum amount of bits that will be rendered per second.
         * Setting this property to a value bigger than 0 will make the sink delay
         * rendering of the buffers when it would exceed to max-bitrate.
         */
        maxBitrate?: number | null
        maxLateness?: number | null
        /**
         * Maximum amount of time (in nanoseconds) that the pipeline can take
         * for processing the buffer. This is added to the latency of live
         * pipelines.
         */
        processingDeadline?: number | null
        qos?: boolean | null
        /**
         * The additional delay between synchronisation and actual rendering of the
         * media. This property will add additional latency to the device in order to
         * make other sinks compensate for the delay.
         */
        renderDelay?: number | null
        sync?: boolean | null
        /**
         * The time to insert between buffers. This property can be used to control
         * the maximum amount of buffers per second to render. Setting this property
         * to a value bigger than 0 will make the sink create THROTTLE QoS events.
         */
        throttleTime?: number | null
        /**
         * Controls the final synchronisation, a negative value will render the buffer
         * earlier while a positive value delays playback. This property can be
         * used to fix synchronisation in bad files.
         */
        tsOffset?: number | null
    }

}

export interface BaseSink {

    // Own properties of GstBase-1.0.GstBase.BaseSink

    /**
     * If set to %TRUE, the basesink will perform asynchronous state changes.
     * When set to %FALSE, the sink will not signal the parent when it prerolls.
     * Use this option when dealing with sparse streams or when synchronisation is
     * not required.
     */
    async: boolean
    /**
     * The amount of bytes to pull when operating in pull mode.
     */
    blocksize: number
    /**
     * Enable the last-sample property. If %FALSE, basesink doesn't keep a
     * reference to the last buffer arrived and the last-sample property is always
     * set to %NULL. This can be useful if you need buffers to be released as soon
     * as possible, eg. if you're using a buffer pool.
     */
    enableLastSample: boolean
    /**
     * The last buffer that arrived in the sink and was used for preroll or for
     * rendering. This property can be used to generate thumbnails. This property
     * can be %NULL when the sink has not yet received a buffer.
     */
    readonly lastSample: Gst.Sample
    /**
     * Control the maximum amount of bits that will be rendered per second.
     * Setting this property to a value bigger than 0 will make the sink delay
     * rendering of the buffers when it would exceed to max-bitrate.
     */
    maxBitrate: number
    maxLateness: number
    /**
     * Maximum amount of time (in nanoseconds) that the pipeline can take
     * for processing the buffer. This is added to the latency of live
     * pipelines.
     */
    processingDeadline: number
    qos: boolean
    /**
     * The additional delay between synchronisation and actual rendering of the
     * media. This property will add additional latency to the device in order to
     * make other sinks compensate for the delay.
     */
    renderDelay: number
    /**
     * Various #GstBaseSink statistics. This property returns a #GstStructure
     * with name `application/x-gst-base-sink-stats` with the following fields:
     * 
     * - "average-rate"  G_TYPE_DOUBLE   average frame rate
     * - "dropped" G_TYPE_UINT64   Number of dropped frames
     * - "rendered" G_TYPE_UINT64   Number of rendered frames
     */
    readonly stats: Gst.Structure
    sync: boolean
    /**
     * The time to insert between buffers. This property can be used to control
     * the maximum amount of buffers per second to render. Setting this property
     * to a value bigger than 0 will make the sink create THROTTLE QoS events.
     */
    throttleTime: number
    /**
     * Controls the final synchronisation, a negative value will render the buffer
     * earlier while a positive value delays playback. This property can be
     * used to fix synchronisation in bad files.
     */
    tsOffset: number
    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstBase-1.0.GstBase.BaseSink

    element: Gst.Element
    sinkpad: Gst.Pad
    padMode: Gst.PadMode
    offset: number
    canActivatePull: boolean
    canActivatePush: boolean
    prerollLock: GLib.Mutex
    prerollCond: GLib.Cond
    // Has conflict: eos: boolean
    needPreroll: boolean
    havePreroll: boolean
    playingAsync: boolean
    haveNewsegment: boolean
    segment: Gst.Segment

    // Owm methods of GstBase-1.0.GstBase.BaseSink

    /**
     * If the `sink` spawns its own thread for pulling buffers from upstream it
     * should call this method after it has pulled a buffer. If the element needed
     * to preroll, this function will perform the preroll and will then block
     * until the element state is changed.
     * 
     * This function should be called with the PREROLL_LOCK held.
     * @param obj the mini object that caused the preroll
     * @returns %GST_FLOW_OK if the preroll completed and processing can continue. Any other return value should be returned from the render vmethod.
     */
    doPreroll(obj: Gst.MiniObject): Gst.FlowReturn
    /**
     * Get the number of bytes that the sink will pull when it is operating in pull
     * mode.
     * @returns the number of bytes @sink will pull in pull mode.
     */
    getBlocksize(): number
    /**
     * Checks if `sink` is currently configured to drop buffers which are outside
     * the current segment
     * @returns %TRUE if the sink is configured to drop buffers outside the current segment.
     */
    getDropOutOfSegment(): boolean
    /**
     * Get the last sample that arrived in the sink and was used for preroll or for
     * rendering. This property can be used to generate thumbnails.
     * 
     * The #GstCaps on the sample can be used to determine the type of the buffer.
     * 
     * Free-function: gst_sample_unref
     * @returns a #GstSample. gst_sample_unref() after     usage.  This function returns %NULL when no buffer has arrived in the     sink yet or when the sink is not in PAUSED or PLAYING.
     */
    getLastSample(): Gst.Sample | null
    /**
     * Get the currently configured latency.
     * @returns The configured latency.
     */
    getLatency(): Gst.ClockTime
    /**
     * Get the maximum amount of bits per second that the sink will render.
     * @returns the maximum number of bits per second @sink will render.
     */
    getMaxBitrate(): number
    /**
     * Gets the max lateness value. See gst_base_sink_set_max_lateness() for
     * more details.
     * @returns The maximum time in nanoseconds that a buffer can be late before it is dropped and not rendered. A value of -1 means an unlimited time.
     */
    getMaxLateness(): number
    /**
     * Get the processing deadline of `sink`. see
     * gst_base_sink_set_processing_deadline() for more information about
     * the processing deadline.
     * @returns the processing deadline
     */
    getProcessingDeadline(): Gst.ClockTime
    /**
     * Get the render delay of `sink`. see gst_base_sink_set_render_delay() for more
     * information about the render delay.
     * @returns the render delay of @sink.
     */
    getRenderDelay(): Gst.ClockTime
    /**
     * Return various #GstBaseSink statistics. This function returns a #GstStructure
     * with name `application/x-gst-base-sink-stats` with the following fields:
     * 
     * - "average-rate" G_TYPE_DOUBLE   average frame rate
     * - "dropped" G_TYPE_UINT64   Number of dropped frames
     * - "rendered" G_TYPE_UINT64   Number of rendered frames
     * @returns pointer to #GstStructure
     */
    getStats(): Gst.Structure
    /**
     * Checks if `sink` is currently configured to synchronize against the
     * clock.
     * @returns %TRUE if the sink is configured to synchronize against the clock.
     */
    getSync(): boolean
    /**
     * Get the time that will be inserted between frames to control the
     * maximum buffers per second.
     * @returns the number of nanoseconds @sink will put between frames.
     */
    getThrottleTime(): number
    /**
     * Get the synchronisation offset of `sink`.
     * @returns The synchronisation offset.
     */
    getTsOffset(): Gst.ClockTimeDiff
    /**
     * Checks if `sink` is currently configured to perform asynchronous state
     * changes to PAUSED.
     * @returns %TRUE if the sink is configured to perform asynchronous state changes.
     */
    isAsyncEnabled(): boolean
    /**
     * Checks if `sink` is currently configured to store the last received sample in
     * the last-sample property.
     * @returns %TRUE if the sink is configured to store the last received sample.
     */
    isLastSampleEnabled(): boolean
    /**
     * Checks if `sink` is currently configured to send Quality-of-Service events
     * upstream.
     * @returns %TRUE if the sink is configured to perform Quality-of-Service.
     */
    isQosEnabled(): boolean
    /**
     * Query the sink for the latency parameters. The latency will be queried from
     * the upstream elements. `live` will be %TRUE if `sink` is configured to
     * synchronize against the clock. `upstream_live` will be %TRUE if an upstream
     * element is live.
     * 
     * If both `live` and `upstream_live` are %TRUE, the sink will want to compensate
     * for the latency introduced by the upstream elements by setting the
     * `min_latency` to a strictly positive value.
     * 
     * This function is mostly used by subclasses.
     * @returns %TRUE if the query succeeded.
     */
    queryLatency(): [ /* returnType */ boolean, /* live */ boolean, /* upstreamLive */ boolean, /* minLatency */ Gst.ClockTime, /* maxLatency */ Gst.ClockTime ]
    /**
     * Configures `sink` to perform all state changes asynchronously. When async is
     * disabled, the sink will immediately go to PAUSED instead of waiting for a
     * preroll buffer. This feature is useful if the sink does not synchronize
     * against the clock or when it is dealing with sparse streams.
     * @param enabled the new async value.
     */
    setAsyncEnabled(enabled: boolean): void
    /**
     * Set the number of bytes that the sink will pull when it is operating in pull
     * mode.
     * @param blocksize the blocksize in bytes
     */
    setBlocksize(blocksize: number): void
    /**
     * Configure `sink` to drop buffers which are outside the current segment
     * @param dropOutOfSegment drop buffers outside the segment
     */
    setDropOutOfSegment(dropOutOfSegment: boolean): void
    /**
     * Configures `sink` to store the last received sample in the last-sample
     * property.
     * @param enabled the new enable-last-sample value.
     */
    setLastSampleEnabled(enabled: boolean): void
    /**
     * Set the maximum amount of bits per second that the sink will render.
     * @param maxBitrate the max_bitrate in bits per second
     */
    setMaxBitrate(maxBitrate: number): void
    /**
     * Sets the new max lateness value to `max_lateness`. This value is
     * used to decide if a buffer should be dropped or not based on the
     * buffer timestamp and the current clock time. A value of -1 means
     * an unlimited time.
     * @param maxLateness the new max lateness value.
     */
    setMaxLateness(maxLateness: number): void
    /**
     * Maximum amount of time (in nanoseconds) that the pipeline can take
     * for processing the buffer. This is added to the latency of live
     * pipelines.
     * 
     * This function is usually called by subclasses.
     * @param processingDeadline the new processing deadline in nanoseconds.
     */
    setProcessingDeadline(processingDeadline: Gst.ClockTime): void
    /**
     * Configures `sink` to send Quality-of-Service events upstream.
     * @param enabled the new qos value.
     */
    setQosEnabled(enabled: boolean): void
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
    setRenderDelay(delay: Gst.ClockTime): void
    /**
     * Configures `sink` to synchronize on the clock or not. When
     * `sync` is %FALSE, incoming samples will be played as fast as
     * possible. If `sync` is %TRUE, the timestamps of the incoming
     * buffers will be used to schedule the exact render time of its
     * contents.
     * @param sync the new sync value.
     */
    setSync(sync: boolean): void
    /**
     * Set the time that will be inserted between rendered buffers. This
     * can be used to control the maximum buffers per second that the sink
     * will render.
     * @param throttle the throttle time in nanoseconds
     */
    setThrottleTime(throttle: number): void
    /**
     * Adjust the synchronisation of `sink` with `offset`. A negative value will
     * render buffers earlier than their timestamp. A positive value will delay
     * rendering. This function can be used to fix playback of badly timestamped
     * buffers.
     * @param offset the new offset
     */
    setTsOffset(offset: Gst.ClockTimeDiff): void
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
     * @returns #GstFlowReturn
     */
    wait(time: Gst.ClockTime): [ /* returnType */ Gst.FlowReturn, /* jitter */ Gst.ClockTimeDiff ]
    /**
     * This function will block until `time` is reached. It is usually called by
     * subclasses that use their own internal synchronisation.
     * 
     * If `time` is not valid, no synchronisation is done and %GST_CLOCK_BADTIME is
     * returned. Likewise, if synchronisation is disabled in the element or there
     * is no clock, no synchronisation is done and %GST_CLOCK_BADTIME is returned.
     * 
     * This function should only be called with the PREROLL_LOCK held, like when
     * receiving an EOS event in the #GstBaseSinkClass::event vmethod or when
     * receiving a buffer in
     * the #GstBaseSinkClass::render vmethod.
     * 
     * The `time` argument should be the running_time of when this method should
     * return and is not adjusted with any latency or offset configured in the
     * sink.
     * @param time the running_time to be reached
     * @returns #GstClockReturn
     */
    waitClock(time: Gst.ClockTime): [ /* returnType */ Gst.ClockReturn, /* jitter */ Gst.ClockTimeDiff ]
    /**
     * If the #GstBaseSinkClass::render method performs its own synchronisation
     * against the clock it must unblock when going from PLAYING to the PAUSED state
     * and call this method before continuing to render the remaining data.
     * 
     * If the #GstBaseSinkClass::render method can block on something else than
     * the clock, it must also be ready to unblock immediately on
     * the #GstBaseSinkClass::unlock method and cause the
     * #GstBaseSinkClass::render method to immediately call this function.
     * In this case, the subclass must be prepared to continue rendering where it
     * left off if this function returns %GST_FLOW_OK.
     * 
     * This function will block until a state change to PLAYING happens (in which
     * case this function returns %GST_FLOW_OK) or the processing must be stopped due
     * to a state change to READY or a FLUSH event (in which case this function
     * returns %GST_FLOW_FLUSHING).
     * 
     * This function should only be called with the PREROLL_LOCK held, like in the
     * render function.
     * @returns %GST_FLOW_OK if the preroll completed and processing can continue. Any other return value should be returned from the render vmethod.
     */
    waitPreroll(): Gst.FlowReturn

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own virtual methods of GstBase-1.0.GstBase.BaseSink

    activatePull(active: boolean): boolean
    event(event: Gst.Event): boolean
    fixate(caps: Gst.Caps): Gst.Caps
    /**
     * Called to get sink pad caps from the subclass.
     * @virtual 
     * @param filter 
     */
    getCaps(filter: Gst.Caps | null): Gst.Caps
    /**
     * Get the start and end times for syncing on this buffer.
     * @virtual 
     * @param buffer 
     */
    getTimes(buffer: Gst.Buffer): [ /* start */ Gst.ClockTime, /* end */ Gst.ClockTime ]
    prepare(buffer: Gst.Buffer): Gst.FlowReturn
    prepareList(bufferList: Gst.BufferList): Gst.FlowReturn
    preroll(buffer: Gst.Buffer): Gst.FlowReturn
    proposeAllocation(query: Gst.Query): boolean
    query(query: Gst.Query): boolean

    // Overloads of query

    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @virtual 
     * @param query the #GstQuery.
     * @returns %TRUE if the query could be performed. MT safe.
     */
    query(query: Gst.Query): boolean
    render(buffer: Gst.Buffer): Gst.FlowReturn
    renderList(bufferList: Gst.BufferList): Gst.FlowReturn
    setCaps(caps: Gst.Caps): boolean
    start(): boolean
    stop(): boolean
    unlock(): boolean
    unlockStop(): boolean
    waitEvent(event: Gst.Event): Gst.FlowReturn

    // Class property signals of GstBase-1.0.GstBase.BaseSink

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
    connect(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-last-sample", ...args: any[]): void
    connect(sigName: "notify::last-sample", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-sample", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-sample", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-sample", ...args: any[]): void
    connect(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-bitrate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-bitrate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-bitrate", ...args: any[]): void
    connect(sigName: "notify::max-lateness", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-lateness", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-lateness", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-lateness", ...args: any[]): void
    connect(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): number
    on(sigName: "notify::processing-deadline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::processing-deadline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::processing-deadline", ...args: any[]): void
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
    connect(sigName: "notify::stats", callback: (...args: any[]) => void): number
    on(sigName: "notify::stats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stats", ...args: any[]): void
    connect(sigName: "notify::sync", callback: (...args: any[]) => void): number
    on(sigName: "notify::sync", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sync", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sync", ...args: any[]): void
    connect(sigName: "notify::throttle-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::throttle-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::throttle-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::throttle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::throttle-time", ...args: any[]): void
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
    disconnect(id: number): void
}

/**
 * #GstBaseSink is the base class for sink elements in GStreamer, such as
 * xvimagesink or filesink. It is a layer on top of #GstElement that provides a
 * simplified interface to plugin writers. #GstBaseSink handles many details
 * for you, for example: preroll, clock synchronization, state changes,
 * activation in push or pull mode, and queries.
 * 
 * In most cases, when writing sink elements, there is no need to implement
 * class methods from #GstElement or to set functions on pads, because the
 * #GstBaseSink infrastructure should be sufficient.
 * 
 * #GstBaseSink provides support for exactly one sink pad, which should be
 * named "sink". A sink implementation (subclass of #GstBaseSink) should
 * install a pad template in its class_init function, like so:
 * 
 * ```c
 * static void
 * my_element_class_init (GstMyElementClass *klass)
 * {
 *   GstElementClass *gstelement_class = GST_ELEMENT_CLASS (klass);
 * 
 *   // sinktemplate should be a #GstStaticPadTemplate with direction
 *   // %GST_PAD_SINK and name "sink"
 *   gst_element_class_add_static_pad_template (gstelement_class, &sinktemplate);
 * 
 *   gst_element_class_set_static_metadata (gstelement_class,
 *       "Sink name",
 *       "Sink",
 *       "My Sink element",
 *       "The author <my.sink`my`.email>");
 * }
 * ```
 * 
 * 
 * #GstBaseSink will handle the prerolling correctly. This means that it will
 * return %GST_STATE_CHANGE_ASYNC from a state change to PAUSED until the first
 * buffer arrives in this element. The base class will call the
 * #GstBaseSinkClass::preroll vmethod with this preroll buffer and will then
 * commit the state change to the next asynchronously pending state.
 * 
 * When the element is set to PLAYING, #GstBaseSink will synchronise on the
 * clock using the times returned from #GstBaseSinkClass::get_times. If this
 * function returns %GST_CLOCK_TIME_NONE for the start time, no synchronisation
 * will be done. Synchronisation can be disabled entirely by setting the object
 * #GstBaseSink:sync property to %FALSE.
 * 
 * After synchronisation the virtual method #GstBaseSinkClass::render will be
 * called. Subclasses should minimally implement this method.
 * 
 * Subclasses that synchronise on the clock in the #GstBaseSinkClass::render
 * method are supported as well. These classes typically receive a buffer in
 * the render method and can then potentially block on the clock while
 * rendering. A typical example is an audiosink.
 * These subclasses can use gst_base_sink_wait_preroll() to perform the
 * blocking wait.
 * 
 * Upon receiving the EOS event in the PLAYING state, #GstBaseSink will wait
 * for the clock to reach the time indicated by the stop time of the last
 * #GstBaseSinkClass::get_times call before posting an EOS message. When the
 * element receives EOS in PAUSED, preroll completes, the event is queued and an
 * EOS message is posted when going to PLAYING.
 * 
 * #GstBaseSink will internally use the %GST_EVENT_SEGMENT events to schedule
 * synchronisation and clipping of buffers. Buffers that fall completely outside
 * of the current segment are dropped. Buffers that fall partially in the
 * segment are rendered (and prerolled). Subclasses should do any subbuffer
 * clipping themselves when needed.
 * 
 * #GstBaseSink will by default report the current playback position in
 * %GST_FORMAT_TIME based on the current clock time and segment information.
 * If no clock has been set on the element, the query will be forwarded
 * upstream.
 * 
 * The #GstBaseSinkClass::set_caps function will be called when the subclass
 * should configure itself to process a specific media type.
 * 
 * The #GstBaseSinkClass::start and #GstBaseSinkClass::stop virtual methods
 * will be called when resources should be allocated. Any
 * #GstBaseSinkClass::preroll, #GstBaseSinkClass::render and
 * #GstBaseSinkClass::set_caps function will be called between the
 * #GstBaseSinkClass::start and #GstBaseSinkClass::stop calls.
 * 
 * The #GstBaseSinkClass::event virtual method will be called when an event is
 * received by #GstBaseSink. Normally this method should only be overridden by
 * very specific elements (such as file sinks) which need to handle the
 * newsegment event specially.
 * 
 * The #GstBaseSinkClass::unlock method is called when the elements should
 * unblock any blocking operations they perform in the
 * #GstBaseSinkClass::render method. This is mostly useful when the
 * #GstBaseSinkClass::render method performs a blocking write on a file
 * descriptor, for example.
 * 
 * The #GstBaseSink:max-lateness property affects how the sink deals with
 * buffers that arrive too late in the sink. A buffer arrives too late in the
 * sink when the presentation time (as a combination of the last segment, buffer
 * timestamp and element base_time) plus the duration is before the current
 * time of the clock.
 * If the frame is later than max-lateness, the sink will drop the buffer
 * without calling the render method.
 * This feature is disabled if sync is disabled, the
 * #GstBaseSinkClass::get_times method does not return a valid start time or
 * max-lateness is set to -1 (the default).
 * Subclasses can use gst_base_sink_set_max_lateness() to configure the
 * max-lateness value.
 * 
 * The #GstBaseSink:qos property will enable the quality-of-service features of
 * the basesink which gather statistics about the real-time performance of the
 * clock synchronisation. For each buffer received in the sink, statistics are
 * gathered and a QOS event is sent upstream with these numbers. This
 * information can then be used by upstream elements to reduce their processing
 * rate, for example.
 * 
 * The #GstBaseSink:async property can be used to instruct the sink to never
 * perform an ASYNC state change. This feature is mostly usable when dealing
 * with non-synchronized streams or sparse streams.
 * @class 
 */
export class BaseSink extends Gst.Element {

    // Own properties of GstBase-1.0.GstBase.BaseSink

    static name: string

    // Constructors of GstBase-1.0.GstBase.BaseSink

    constructor(config?: BaseSink.ConstructorProperties) 
    _init(config?: BaseSink.ConstructorProperties): void
}

export module BaseSrc {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Element.ConstructorProperties {

        // Own constructor properties of GstBase-1.0.GstBase.BaseSrc

        blocksize?: number | null
        doTimestamp?: boolean | null
        numBuffers?: number | null
        typefind?: boolean | null
    }

}

export interface BaseSrc {

    // Own properties of GstBase-1.0.GstBase.BaseSrc

    doTimestamp: boolean
    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstBase-1.0.GstBase.BaseSrc

    element: Gst.Element
    srcpad: Gst.Pad
    liveLock: GLib.Mutex
    liveCond: GLib.Cond
    isLive: boolean
    liveRunning: boolean
    blocksize: number
    canActivatePush: boolean
    randomAccess: boolean
    clockId: Gst.ClockID
    segment: Gst.Segment
    needNewsegment: boolean
    numBuffers: number
    numBuffersLeft: number
    typefind: boolean
    running: boolean
    pendingSeek: Gst.Event
    priv: BaseSrcPrivate

    // Owm methods of GstBase-1.0.GstBase.BaseSrc

    /**
     * Lets #GstBaseSrc sub-classes to know the memory `allocator`
     * used by the base class and its `params`.
     * 
     * Unref the `allocator` after usage.
     */
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams ]
    /**
     * Get the number of bytes that `src` will push out with each buffer.
     * @returns the number of bytes pushed with each buffer.
     */
    getBlocksize(): number
    getBufferPool(): Gst.BufferPool | null
    /**
     * Query if `src` timestamps outgoing buffers based on the current running_time.
     * @returns %TRUE if the base class will automatically timestamp outgoing buffers.
     */
    getDoTimestamp(): boolean
    /**
     * Get the current async behaviour of `src`. See also gst_base_src_set_async().
     * @returns %TRUE if @src is operating in async mode.
     */
    isAsync(): boolean
    // Has conflict: negotiate(): boolean
    /**
     * Prepare a new seamless segment for emission downstream. This function must
     * only be called by derived sub-classes, and only from the #GstBaseSrcClass::create function,
     * as the stream-lock needs to be held.
     * 
     * The format for the new segment will be the current format of the source, as
     * configured with gst_base_src_set_format()
     * @param start The new start value for the segment
     * @param stop Stop value for the new segment
     * @param time The new time value for the start of the new segment
     * @returns %TRUE if preparation of the seamless segment succeeded.
     */
    newSeamlessSegment(start: number, stop: number, time: number): boolean
    /**
     * Prepare a new segment for emission downstream. This function must
     * only be called by derived sub-classes, and only from the #GstBaseSrcClass::create function,
     * as the stream-lock needs to be held.
     * 
     * The format for the `segment` must be identical with the current format
     * of the source, as configured with gst_base_src_set_format().
     * 
     * The format of `src` must not be %GST_FORMAT_UNDEFINED and the format
     * should be configured via gst_base_src_set_format() before calling this method.
     * @param segment a pointer to a #GstSegment
     * @returns %TRUE if preparation of new segment succeeded.
     */
    newSegment(segment: Gst.Segment): boolean
    /**
     * Send a new segment downstream. This function must
     * only be called by derived sub-classes, and only from the #GstBaseSrcClass::create function,
     * as the stream-lock needs to be held.
     * This method also requires that an out caps has been configured, so
     * gst_base_src_set_caps() needs to have been called before.
     * 
     * The format for the `segment` must be identical with the current format
     * of the source, as configured with gst_base_src_set_format().
     * 
     * The format of `src` must not be %GST_FORMAT_UNDEFINED and the format
     * should be configured via gst_base_src_set_format() before calling this method.
     * 
     * This is a variant of gst_base_src_new_segment() sending the segment right away,
     * which can be useful to ensure events ordering.
     * @param segment a pointer to a #GstSegment
     * @returns %TRUE if sending of new segment succeeded.
     */
    pushSegment(segment: Gst.Segment): boolean
    /**
     * Query the source for the latency parameters. `live` will be %TRUE when `src` is
     * configured as a live source. `min_latency` and `max_latency` will be set
     * to the difference between the running time and the timestamp of the first
     * buffer.
     * 
     * This function is mostly used by subclasses.
     * @returns %TRUE if the query succeeded.
     */
    queryLatency(): [ /* returnType */ boolean, /* live */ boolean, /* minLatency */ Gst.ClockTime, /* maxLatency */ Gst.ClockTime ]
    /**
     * Configure async behaviour in `src,` no state change will block. The open,
     * close, start, stop, play and pause virtual methods will be executed in a
     * different thread and are thus allowed to perform blocking operations. Any
     * blocking operation should be unblocked with the unlock vmethod.
     * @param async new async mode
     */
    setAsync(async: boolean): void
    /**
     * If `automatic_eos` is %TRUE, `src` will automatically go EOS if a buffer
     * after the total size is returned. By default this is %TRUE but sources
     * that can't return an authoritative size and only know that they're EOS
     * when trying to read more should set this to %FALSE.
     * 
     * When `src` operates in %GST_FORMAT_TIME, #GstBaseSrc will send an EOS
     * when a buffer outside of the currently configured segment is pushed if
     * `automatic_eos` is %TRUE. Since 1.16, if `automatic_eos` is %FALSE an
     * EOS will be pushed only when the #GstBaseSrcClass::create implementation
     * returns %GST_FLOW_EOS.
     * @param automaticEos automatic eos
     */
    setAutomaticEos(automaticEos: boolean): void
    /**
     * Set the number of bytes that `src` will push out with each buffer. When
     * `blocksize` is set to -1, a default length will be used.
     * @param blocksize the new blocksize in bytes
     */
    setBlocksize(blocksize: number): void
    // Has conflict: setCaps(caps: Gst.Caps): boolean
    /**
     * Configure `src` to automatically timestamp outgoing buffers based on the
     * current running_time of the pipeline. This property is mostly useful for live
     * sources.
     * @param timestamp enable or disable timestamping
     */
    setDoTimestamp(timestamp: boolean): void
    /**
     * If not `dynamic,` size is only updated when needed, such as when trying to
     * read past current tracked size.  Otherwise, size is checked for upon each
     * read.
     * @param dynamic new dynamic size mode
     */
    setDynamicSize(dynamic: boolean): void
    /**
     * Sets the default format of the source. This will be the format used
     * for sending SEGMENT events and for performing seeks.
     * 
     * If a format of GST_FORMAT_BYTES is set, the element will be able to
     * operate in pull mode if the #GstBaseSrcClass::is_seekable returns %TRUE.
     * 
     * This function must only be called in states < %GST_STATE_PAUSED.
     * @param format the format to use
     */
    setFormat(format: Gst.Format): void
    /**
     * If the element listens to a live source, `live` should
     * be set to %TRUE.
     * 
     * A live source will not produce data in the PAUSED state and
     * will therefore not be able to participate in the PREROLL phase
     * of a pipeline. To signal this fact to the application and the
     * pipeline, the state change return value of the live source will
     * be GST_STATE_CHANGE_NO_PREROLL.
     * @param live new live-mode
     */
    setLive(live: boolean): void
    /**
     * Complete an asynchronous start operation. When the subclass overrides the
     * start method, it should call gst_base_src_start_complete() when the start
     * operation completes either from the same thread or from an asynchronous
     * helper thread.
     * @param ret a #GstFlowReturn
     */
    startComplete(ret: Gst.FlowReturn): void
    /**
     * Wait until the start operation completes.
     * @returns a #GstFlowReturn.
     */
    startWait(): Gst.FlowReturn
    /**
     * Subclasses can call this from their create virtual method implementation
     * to submit a buffer list to be pushed out later. This is useful in
     * cases where the create function wants to produce multiple buffers to be
     * pushed out in one go in form of a #GstBufferList, which can reduce overhead
     * drastically, especially for packetised inputs (for data streams where
     * the packetisation/chunking is not important it is usually more efficient
     * to return larger buffers instead).
     * 
     * Subclasses that use this function from their create function must return
     * %GST_FLOW_OK and no buffer from their create virtual method implementation.
     * If a buffer is returned after a buffer list has also been submitted via this
     * function the behaviour is undefined.
     * 
     * Subclasses must only call this function once per create function call and
     * subclasses must only call this function when the source operates in push
     * mode.
     * @param bufferList a #GstBufferList
     */
    submitBufferList(bufferList: Gst.BufferList): void
    /**
     * If the #GstBaseSrcClass::create method performs its own synchronisation
     * against the clock it must unblock when going from PLAYING to the PAUSED state
     * and call this method before continuing to produce the remaining data.
     * 
     * This function will block until a state change to PLAYING happens (in which
     * case this function returns %GST_FLOW_OK) or the processing must be stopped due
     * to a state change to READY or a FLUSH event (in which case this function
     * returns %GST_FLOW_FLUSHING).
     * @returns %GST_FLOW_OK if @src is PLAYING and processing can continue. Any other return value should be returned from the create vmethod.
     */
    waitPlaying(): Gst.FlowReturn

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own virtual methods of GstBase-1.0.GstBase.BaseSrc

    /**
     * Ask the subclass to allocate an output buffer with `offset` and `size,` the default
     * implementation will use the negotiated allocator.
     * @virtual 
     * @param offset 
     * @param size 
     */
    alloc(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]
    /**
     * Ask the subclass to create a buffer with `offset` and `size,` the default
     * implementation will call alloc if no allocated `buf` is provided and then call fill.
     * @virtual 
     * @param offset 
     * @param size 
     * @param buf 
     */
    create(offset: number, size: number, buf: Gst.Buffer | null): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]
    decideAllocation(query: Gst.Query): boolean
    doSeek(segment: Gst.Segment): boolean
    event(event: Gst.Event): boolean
    fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn
    /**
     * Called if, in negotiation, caps need fixating.
     * @virtual 
     * @param caps 
     * @returns the fixated caps
     */
    fixate(caps: Gst.Caps): Gst.Caps
    /**
     * Called to get the caps to report.
     * @virtual 
     * @param filter 
     */
    getCaps(filter: Gst.Caps | null): Gst.Caps
    /**
     * Get the total size of the resource in the format set by
     * gst_base_src_set_format().
     * @virtual 
     * @returns %TRUE if the size is available and has been set.
     */
    getSize(): [ /* returnType */ boolean, /* size */ number ]
    /**
     * Given `buffer,` return `start` and `end` time when it should be pushed
     * out. The base class will sync on the clock using these times.
     * @virtual 
     * @param buffer 
     */
    getTimes(buffer: Gst.Buffer): [ /* start */ Gst.ClockTime, /* end */ Gst.ClockTime ]
    isSeekable(): boolean
    /**
     * Negotiates src pad caps with downstream elements.
     * Unmarks GST_PAD_FLAG_NEED_RECONFIGURE in any case. But marks it again
     * if #GstBaseSrcClass::negotiate fails.
     * 
     * Do not call this in the #GstBaseSrcClass::fill vmethod. Call this in
     * #GstBaseSrcClass::create or in #GstBaseSrcClass::alloc, _before_ any
     * buffer is allocated.
     * @virtual 
     * @returns %TRUE if the negotiation succeeded, else %FALSE.
     */
    negotiate(): boolean
    prepareSeekSegment(seek: Gst.Event, segment: Gst.Segment): boolean
    query(query: Gst.Query): boolean

    // Overloads of query

    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @virtual 
     * @param query the #GstQuery.
     * @returns %TRUE if the query could be performed. MT safe.
     */
    query(query: Gst.Query): boolean
    /**
     * Set new caps on the basesrc source pad.
     * @virtual 
     * @param caps a #GstCaps
     * @returns %TRUE if the caps could be set
     */
    setCaps(caps: Gst.Caps): boolean
    start(): boolean
    stop(): boolean
    unlock(): boolean
    unlockStop(): boolean

    // Class property signals of GstBase-1.0.GstBase.BaseSrc

    connect(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): number
    on(sigName: "notify::do-timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::do-timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::do-timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::do-timestamp", ...args: any[]): void
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

/**
 * This is a generic base class for source elements. The following
 * types of sources are supported:
 * 
 *   * random access sources like files
 *   * seekable sources
 *   * live sources
 * 
 * The source can be configured to operate in any #GstFormat with the
 * gst_base_src_set_format() method. The currently set format determines
 * the format of the internal #GstSegment and any %GST_EVENT_SEGMENT
 * events. The default format for #GstBaseSrc is %GST_FORMAT_BYTES.
 * 
 * #GstBaseSrc always supports push mode scheduling. If the following
 * conditions are met, it also supports pull mode scheduling:
 * 
 *   * The format is set to %GST_FORMAT_BYTES (default).
 *   * #GstBaseSrcClass::is_seekable returns %TRUE.
 * 
 * If all the conditions are met for operating in pull mode, #GstBaseSrc is
 * automatically seekable in push mode as well. The following conditions must
 * be met to make the element seekable in push mode when the format is not
 * %GST_FORMAT_BYTES:
 * 
 * * #GstBaseSrcClass::is_seekable returns %TRUE.
 * * #GstBaseSrcClass::query can convert all supported seek formats to the
 *   internal format as set with gst_base_src_set_format().
 * * #GstBaseSrcClass::do_seek is implemented, performs the seek and returns
 *    %TRUE.
 * 
 * When the element does not meet the requirements to operate in pull mode, the
 * offset and length in the #GstBaseSrcClass::create method should be ignored.
 * It is recommended to subclass #GstPushSrc instead, in this situation. If the
 * element can operate in pull mode but only with specific offsets and
 * lengths, it is allowed to generate an error when the wrong values are passed
 * to the #GstBaseSrcClass::create function.
 * 
 * #GstBaseSrc has support for live sources. Live sources are sources that when
 * paused discard data, such as audio or video capture devices. A typical live
 * source also produces data at a fixed rate and thus provides a clock to publish
 * this rate.
 * Use gst_base_src_set_live() to activate the live source mode.
 * 
 * A live source does not produce data in the PAUSED state. This means that the
 * #GstBaseSrcClass::create method will not be called in PAUSED but only in
 * PLAYING. To signal the pipeline that the element will not produce data, the
 * return value from the READY to PAUSED state will be
 * %GST_STATE_CHANGE_NO_PREROLL.
 * 
 * A typical live source will timestamp the buffers it creates with the
 * current running time of the pipeline. This is one reason why a live source
 * can only produce data in the PLAYING state, when the clock is actually
 * distributed and running.
 * 
 * Live sources that synchronize and block on the clock (an audio source, for
 * example) can use gst_base_src_wait_playing() when the
 * #GstBaseSrcClass::create function was interrupted by a state change to
 * PAUSED.
 * 
 * The #GstBaseSrcClass::get_times method can be used to implement pseudo-live
 * sources. It only makes sense to implement the #GstBaseSrcClass::get_times
 * function if the source is a live source. The #GstBaseSrcClass::get_times
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
 * There is only support in #GstBaseSrc for exactly one source pad, which
 * should be named "src". A source implementation (subclass of #GstBaseSrc)
 * should install a pad template in its class_init function, like so:
 * 
 * ```c
 * static void
 * my_element_class_init (GstMyElementClass *klass)
 * {
 *   GstElementClass *gstelement_class = GST_ELEMENT_CLASS (klass);
 *   // srctemplate should be a #GstStaticPadTemplate with direction
 *   // %GST_PAD_SRC and name "src"
 *   gst_element_class_add_static_pad_template (gstelement_class, &srctemplate);
 * 
 *   gst_element_class_set_static_metadata (gstelement_class,
 *      "Source name",
 *      "Source",
 *      "My Source element",
 *      "The author <my.sink`my`.email>");
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
 * %GST_MESSAGE_SEGMENT_DONE on the bus). This can typically be done
 * with the gst_element_send_event() function on the element or its parent bin.
 * 
 * After the EOS has been sent to the element, the application should wait for
 * an EOS message to be posted on the pipeline's bus. Once this EOS message is
 * received, it may safely shut down the entire pipeline.
 * @class 
 */
export class BaseSrc extends Gst.Element {

    // Own properties of GstBase-1.0.GstBase.BaseSrc

    static name: string

    // Constructors of GstBase-1.0.GstBase.BaseSrc

    constructor(config?: BaseSrc.ConstructorProperties) 
    _init(config?: BaseSrc.ConstructorProperties): void
}

export module BaseTransform {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Element.ConstructorProperties {

        // Own constructor properties of GstBase-1.0.GstBase.BaseTransform

        qos?: boolean | null
    }

}

export interface BaseTransform {

    // Own properties of GstBase-1.0.GstBase.BaseTransform

    qos: boolean
    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstBase-1.0.GstBase.BaseTransform

    element: Gst.Element
    sinkpad: Gst.Pad
    srcpad: Gst.Pad
    haveSegment: boolean
    segment: Gst.Segment
    queuedBuf: Gst.Buffer

    // Owm methods of GstBase-1.0.GstBase.BaseTransform

    /**
     * Lets #GstBaseTransform sub-classes know the memory `allocator`
     * used by the base class and its `params`.
     * 
     * Unref the `allocator` after use.
     */
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams ]
    getBufferPool(): Gst.BufferPool | null
    /**
     * See if `trans` is configured as a in_place transform.
     * @returns %TRUE if the transform is configured in in_place mode. MT safe.
     */
    isInPlace(): boolean
    /**
     * See if `trans` is configured as a passthrough transform.
     * @returns %TRUE if the transform is configured in passthrough mode. MT safe.
     */
    isPassthrough(): boolean
    /**
     * Queries if the transform will handle QoS.
     * @returns %TRUE if QoS is enabled. MT safe.
     */
    isQosEnabled(): boolean
    /**
     * Negotiates src pad caps with downstream elements if the source pad is
     * marked as needing reconfiguring. Unmarks GST_PAD_FLAG_NEED_RECONFIGURE in
     * any case. But marks it again if negotiation fails.
     * 
     * Do not call this in the #GstBaseTransformClass::transform or
     * #GstBaseTransformClass::transform_ip vmethod. Call this in
     * #GstBaseTransformClass::submit_input_buffer,
     * #GstBaseTransformClass::prepare_output_buffer or in
     * #GstBaseTransformClass::generate_output _before_ any output buffer is
     * allocated.
     * 
     * It will be default be called when handling an ALLOCATION query or at the
     * very beginning of the default #GstBaseTransformClass::submit_input_buffer
     * implementation.
     * @returns %TRUE if the negotiation succeeded, else %FALSE.
     */
    reconfigure(): boolean
    /**
     * Instructs `trans` to request renegotiation upstream. This function is
     * typically called after properties on the transform were set that
     * influence the input format.
     */
    reconfigureSink(): void
    /**
     * Instructs `trans` to renegotiate a new downstream transform on the next
     * buffer. This function is typically called after properties on the transform
     * were set that influence the output format.
     */
    reconfigureSrc(): void
    /**
     * If `gap_aware` is %FALSE (the default), output buffers will have the
     * %GST_BUFFER_FLAG_GAP flag unset.
     * 
     * If set to %TRUE, the element must handle output buffers with this flag set
     * correctly, i.e. it can assume that the buffer contains neutral data but must
     * unset the flag if the output is no neutral data.
     * 
     * MT safe.
     * @param gapAware New state
     */
    setGapAware(gapAware: boolean): void
    /**
     * Determines whether a non-writable buffer will be copied before passing
     * to the transform_ip function.
     * 
     *   * Always %TRUE if no transform function is implemented.
     *   * Always %FALSE if ONLY transform function is implemented.
     * 
     * MT safe.
     * @param inPlace Boolean value indicating that we would like to operate on in_place buffers.
     */
    setInPlace(inPlace: boolean): void
    /**
     * Set passthrough mode for this filter by default. This is mostly
     * useful for filters that do not care about negotiation.
     * 
     * Always %TRUE for filters which don't implement either a transform
     * or transform_ip or generate_output method.
     * 
     * MT safe.
     * @param passthrough boolean indicating passthrough mode.
     */
    setPassthrough(passthrough: boolean): void
    /**
     * If `prefer_passthrough` is %TRUE (the default), `trans` will check and
     * prefer passthrough caps from the list of caps returned by the
     * transform_caps vmethod.
     * 
     * If set to %FALSE, the element must order the caps returned from the
     * transform_caps function in such a way that the preferred format is
     * first in the list. This can be interesting for transforms that can do
     * passthrough transforms but prefer to do something else, like a
     * capsfilter.
     * 
     * MT safe.
     * @param preferPassthrough New state
     */
    setPreferPassthrough(preferPassthrough: boolean): void
    /**
     * Enable or disable QoS handling in the transform.
     * 
     * MT safe.
     * @param enabled new state
     */
    setQosEnabled(enabled: boolean): void
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
    updateQos(proportion: number, diff: Gst.ClockTimeDiff, timestamp: Gst.ClockTime): void
    /**
     * Updates the srcpad caps and sends the caps downstream. This function
     * can be used by subclasses when they have already negotiated their caps
     * but found a change in them (or computed new information). This way,
     * they can notify downstream about that change without losing any
     * buffer.
     * @param updatedCaps An updated version of the srcpad caps to be pushed downstream
     * @returns %TRUE if the caps could be sent downstream %FALSE otherwise
     */
    updateSrcCaps(updatedCaps: Gst.Caps): boolean

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own virtual methods of GstBase-1.0.GstBase.BaseTransform

    acceptCaps(direction: Gst.PadDirection, caps: Gst.Caps): boolean
    beforeTransform(buffer: Gst.Buffer): void
    copyMetadata(input: Gst.Buffer, outbuf: Gst.Buffer): boolean
    decideAllocation(query: Gst.Query): boolean
    filterMeta(query: Gst.Query, api: GObject.GType, params: Gst.Structure): boolean
    fixateCaps(direction: Gst.PadDirection, caps: Gst.Caps, othercaps: Gst.Caps): Gst.Caps
    generateOutput(): [ /* returnType */ Gst.FlowReturn, /* outbuf */ Gst.Buffer ]
    getUnitSize(caps: Gst.Caps): [ /* returnType */ boolean, /* size */ number ]
    prepareOutputBuffer(input: Gst.Buffer): [ /* returnType */ Gst.FlowReturn, /* outbuf */ Gst.Buffer ]
    proposeAllocation(decideQuery: Gst.Query, query: Gst.Query): boolean
    query(direction: Gst.PadDirection, query: Gst.Query): boolean

    // Overloads of query

    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @virtual 
     * @param query the #GstQuery.
     * @returns %TRUE if the query could be performed. MT safe.
     */
    query(query: Gst.Query): boolean
    setCaps(incaps: Gst.Caps, outcaps: Gst.Caps): boolean
    sinkEvent(event: Gst.Event): boolean
    srcEvent(event: Gst.Event): boolean
    start(): boolean
    stop(): boolean
    submitInputBuffer(isDiscont: boolean, input: Gst.Buffer): Gst.FlowReturn
    transform(inbuf: Gst.Buffer, outbuf: Gst.Buffer): Gst.FlowReturn
    transformCaps(direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps): Gst.Caps
    transformIp(buf: Gst.Buffer): Gst.FlowReturn
    transformMeta(outbuf: Gst.Buffer, meta: Gst.Meta, inbuf: Gst.Buffer): boolean
    transformSize(direction: Gst.PadDirection, caps: Gst.Caps, size: number, othercaps: Gst.Caps): [ /* returnType */ boolean, /* othersize */ number ]

    // Class property signals of GstBase-1.0.GstBase.BaseTransform

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
    disconnect(id: number): void
}

/**
 * This base class is for filter elements that process data. Elements
 * that are suitable for implementation using #GstBaseTransform are ones
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
 *   * The #GstBaseTransformClass.passthrough_on_same_caps variable
 *     will automatically set/unset passthrough based on whether the
 *     element negotiates the same caps on both pads.
 * 
 *   * #GstBaseTransformClass.passthrough_on_same_caps on an element that
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
 * * only implementing transform_ip and not transform implies always_in_place = %TRUE
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
 *   and set always_in_place to %TRUE
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
 *   * Implied %TRUE if no transform function is implemented.
 *   * Implied %FALSE if ONLY transform function is implemented.
 * @class 
 */
export class BaseTransform extends Gst.Element {

    // Own properties of GstBase-1.0.GstBase.BaseTransform

    static name: string

    // Constructors of GstBase-1.0.GstBase.BaseTransform

    constructor(config?: BaseTransform.ConstructorProperties) 
    _init(config?: BaseTransform.ConstructorProperties): void
}

export module CollectPads {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
    }

}

export interface CollectPads {

    // Own properties of GstBase-1.0.GstBase.CollectPads

    __gtype__: number

    // Own fields of GstBase-1.0.GstBase.CollectPads

    object: any
    /**
     * #GList of #GstCollectData managed
     *   by this #GstCollectPads.
     * @field 
     */
    data: CollectData[]

    // Owm methods of GstBase-1.0.GstBase.CollectPads

    /**
     * Add a pad to the collection of collect pads. The pad has to be
     * a sinkpad. The refcount of the pad is incremented. Use
     * gst_collect_pads_remove_pad() to remove the pad from the collection
     * again.
     * 
     * You specify a size for the returned #GstCollectData structure
     * so that you can use it to store additional information.
     * 
     * You can also specify a #GstCollectDataDestroyNotify that will be called
     * just before the #GstCollectData structure is freed. It is passed the
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
     * @param size the size of the returned #GstCollectData structure
     * @param destroyNotify function to be called before the returned   #GstCollectData structure is freed
     * @param lock whether to lock this pad in usual waiting state
     * @returns a new #GstCollectData to identify the   new pad. Or %NULL if wrong parameters are supplied.
     */
    addPad(pad: Gst.Pad, size: number, destroyNotify: CollectDataDestroyNotify, lock: boolean): CollectData | null
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
    available(): number
    /**
     * Convenience clipping function that converts incoming buffer's timestamp
     * to running time, or clips the buffer if outside configured segment.
     * 
     * Since 1.6, this clipping function also sets the DTS parameter of the
     * GstCollectData structure. This version of the running time DTS can be
     * negative. G_MININT64 is used to indicate invalid value.
     * @param cdata collect data of corresponding pad
     * @param buf buffer being clipped
     * @param userData user data (unused)
     */
    clipRunningTime(cdata: CollectData, buf: Gst.Buffer, userData: any | null): [ /* returnType */ Gst.FlowReturn, /* outbuf */ Gst.Buffer ]
    /**
     * Default #GstCollectPads event handling that elements should always
     * chain up to to ensure proper operation.  Element might however indicate
     * event should not be forwarded downstream.
     * @param data collect data of corresponding pad
     * @param event event being processed
     * @param discard process but do not send event downstream
     */
    eventDefault(data: CollectData, event: Gst.Event, discard: boolean): boolean
    /**
     * Flush `size` bytes from the pad `data`.
     * 
     * This function should be called with `pads` STREAM_LOCK held, such as
     * in the callback.
     * 
     * MT safe.
     * @param data the data to use
     * @param size the number of bytes to flush
     * @returns The number of bytes flushed This can be less than @size and is 0 if the pad was end-of-stream.
     */
    flush(data: CollectData, size: number): number
    /**
     * Peek at the buffer currently queued in `data`. This function
     * should be called with the `pads` STREAM_LOCK held, such as in the callback
     * handler.
     * 
     * MT safe.
     * @param data the data to use
     * @returns The buffer in @data or %NULL if no buffer is queued. should unref the buffer after usage.
     */
    peek(data: CollectData): Gst.Buffer | null
    /**
     * Pop the buffer currently queued in `data`. This function
     * should be called with the `pads` STREAM_LOCK held, such as in the callback
     * handler.
     * 
     * MT safe.
     * @param data the data to use
     * @returns The buffer in @data or %NULL if no buffer was queued. You should unref the buffer after usage.
     */
    pop(data: CollectData): Gst.Buffer | null
    /**
     * Default #GstCollectPads query handling that elements should always
     * chain up to to ensure proper operation.  Element might however indicate
     * query should not be forwarded downstream.
     * @param data collect data of corresponding pad
     * @param query query being processed
     * @param discard process but do not send event downstream
     */
    queryDefault(data: CollectData, query: Gst.Query, discard: boolean): boolean
    /**
     * Get a subbuffer of `size` bytes from the given pad `data`.
     * 
     * This function should be called with `pads` STREAM_LOCK held, such as in the
     * callback.
     * 
     * MT safe.
     * @param data the data to use
     * @param size the number of bytes to read
     * @returns A sub buffer. The size of the buffer can be less that requested. A return of %NULL signals that the pad is end-of-stream. Unref the buffer after use.
     */
    readBuffer(data: CollectData, size: number): Gst.Buffer | null
    /**
     * Remove a pad from the collection of collect pads. This function will also
     * free the #GstCollectData and all the resources that were allocated with
     * gst_collect_pads_add_pad().
     * 
     * The pad will be deactivated automatically when `pads` is stopped.
     * 
     * MT safe.
     * @param pad the pad to remove
     * @returns %TRUE if the pad could be removed.
     */
    removePad(pad: Gst.Pad): boolean
    /**
     * Set the callback function and user data that will be called with
     * the oldest buffer when all pads have been collected, or %NULL on EOS.
     * If a buffer is passed, the callback owns a reference and must unref
     * it.
     * 
     * MT safe.
     * @param func the function to set
     */
    setBufferFunction(func: CollectPadsBufferFunction): void
    /**
     * Install a clipping function that is called right after a buffer is received
     * on a pad managed by `pads`. See #GstCollectPadsClipFunction for more info.
     * @param clipfunc clip function to install
     */
    setClipFunction(clipfunc: CollectPadsClipFunction): void
    /**
     * Set the timestamp comparison function.
     * 
     * MT safe.
     * @param func the function to set
     */
    setCompareFunction(func: CollectPadsCompareFunction): void
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
    setEventFunction(func: CollectPadsEventFunction): void
    /**
     * Install a flush function that is called when the internal
     * state of all pads should be flushed as part of flushing seek
     * handling. See #GstCollectPadsFlushFunction for more info.
     * @param func flush function to install
     */
    setFlushFunction(func: CollectPadsFlushFunction): void
    /**
     * Change the flushing state of all the pads in the collection. No pad
     * is able to accept anymore data when `flushing` is %TRUE. Calling this
     * function with `flushing` %FALSE makes `pads` accept data again.
     * Caller must ensure that downstream streaming (thread) is not blocked,
     * e.g. by sending a FLUSH_START downstream.
     * 
     * MT safe.
     * @param flushing desired state of the pads
     */
    setFlushing(flushing: boolean): void
    /**
     * CollectPads provides a default collection algorithm that will determine
     * the oldest buffer available on all of its pads, and then delegate
     * to a configured callback.
     * However, if circumstances are more complicated and/or more control
     * is desired, this sets a callback that will be invoked instead when
     * all the pads added to the collection have buffers queued.
     * Evidently, this callback is not compatible with
     * gst_collect_pads_set_buffer_function() callback.
     * If this callback is set, the former will be unset.
     * 
     * MT safe.
     * @param func the function to set
     */
    setFunction(func: CollectPadsFunction): void
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
    setQueryFunction(func: CollectPadsQueryFunction): void
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
    setWaiting(data: CollectData, waiting: boolean): void
    /**
     * Default #GstCollectPads event handling for the src pad of elements.
     * Elements can chain up to this to let flushing seek event handling
     * be done by #GstCollectPads.
     * @param pad src #GstPad that received the event
     * @param event event being processed
     */
    srcEventDefault(pad: Gst.Pad, event: Gst.Event): boolean
    /**
     * Starts the processing of data in the collect_pads.
     * 
     * MT safe.
     */
    start(): void
    /**
     * Stops the processing of data in the collect_pads. this function
     * will also unblock any blocking operations.
     * 
     * MT safe.
     */
    stop(): void
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
     * @returns A sub buffer. The size of the buffer can be less that requested. A return of %NULL signals that the pad is end-of-stream. Unref the buffer after use.
     */
    takeBuffer(data: CollectData, size: number): Gst.Buffer | null

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstBase-1.0.GstBase.CollectPads

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

/**
 * Manages a set of pads that operate in collect mode. This means that control
 * is given to the manager of this object when all pads have data.
 * 
 *   * Collectpads are created with gst_collect_pads_new(). A callback should then
 *     be installed with gst_collect_pads_set_function ().
 * 
 *   * Pads are added to the collection with gst_collect_pads_add_pad()/
 *     gst_collect_pads_remove_pad(). The pad has to be a sinkpad. When added,
 *     the chain, event and query functions of the pad are overridden. The
 *     element_private of the pad is used to store private information for the
 *     collectpads.
 * 
 *   * For each pad, data is queued in the _chain function or by
 *     performing a pull_range.
 * 
 *   * When data is queued on all pads in waiting mode, the callback function is called.
 * 
 *   * Data can be dequeued from the pad with the gst_collect_pads_pop() method.
 *     One can peek at the data with the gst_collect_pads_peek() function.
 *     These functions will return %NULL if the pad received an EOS event. When all
 *     pads return %NULL from a gst_collect_pads_peek(), the element can emit an EOS
 *     event itself.
 * 
 *   * Data can also be dequeued in byte units using the gst_collect_pads_available(),
 *     gst_collect_pads_read_buffer() and gst_collect_pads_flush() calls.
 * 
 *   * Elements should call gst_collect_pads_start() and gst_collect_pads_stop() in
 *     their state change functions to start and stop the processing of the collectpads.
 *     The gst_collect_pads_stop() call should be called before calling the parent
 *     element state change function in the PAUSED_TO_READY state change to ensure
 *     no pad is blocked and the element can finish streaming.
 * 
 *   * gst_collect_pads_set_waiting() sets a pad to waiting or non-waiting mode.
 *     CollectPads element is not waiting for data to be collected on non-waiting pads.
 *     Thus these pads may but need not have data when the callback is called.
 *     All pads are in waiting mode by default.
 * @class 
 */
export class CollectPads extends Gst.Object {

    // Own properties of GstBase-1.0.GstBase.CollectPads

    static name: string

    // Constructors of GstBase-1.0.GstBase.CollectPads

    constructor(config?: CollectPads.ConstructorProperties) 
    /**
     * Create a new instance of #GstCollectPads.
     * 
     * MT safe.
     * @constructor 
     * @returns a new #GstCollectPads, or %NULL in case of an error.
     */
    constructor() 
    /**
     * Create a new instance of #GstCollectPads.
     * 
     * MT safe.
     * @constructor 
     * @returns a new #GstCollectPads, or %NULL in case of an error.
     */
    static new(): CollectPads
    _init(config?: CollectPads.ConstructorProperties): void
}

export module DataQueue {

    // Signal callback interfaces




    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DataQueue {

    // Own properties of GstBase-1.0.GstBase.DataQueue

    readonly currentLevelBytes: number
    readonly currentLevelTime: number
    readonly currentLevelVisible: number
    __gtype__: number

    // Own fields of GstBase-1.0.GstBase.DataQueue

    /**
     * the parent structure
     * @field 
     */
    object: GObject.Object

    // Own virtual methods of GstBase-1.0.GstBase.DataQueue

    empty(): void
    full(): void

    // Own signals of GstBase-1.0.GstBase.DataQueue

    connect(sigName: "empty", callback: (...args: any[]) => void): number
    on(sigName: "empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "empty", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "empty", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "empty", ...args: any[]): void
    connect(sigName: "full", callback: (...args: any[]) => void): number
    on(sigName: "full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "full", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "full", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "full", ...args: any[]): void

    // Class property signals of GstBase-1.0.GstBase.DataQueue

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
    disconnect(id: number): void
}

/**
 * #GstDataQueue is an object that handles threadsafe queueing of objects. It
 * also provides size-related functionality. This object should be used for
 * any #GstElement that wishes to provide some sort of queueing functionality.
 * @class 
 */
export class DataQueue extends GObject.Object {

    // Own properties of GstBase-1.0.GstBase.DataQueue

    static name: string

    // Constructors of GstBase-1.0.GstBase.DataQueue

    constructor(config?: DataQueue.ConstructorProperties) 
    _init(config?: DataQueue.ConstructorProperties): void
}

export module PushSrc {

    // Constructor properties interface

    export interface ConstructorProperties extends BaseSrc.ConstructorProperties {
    }

}

export interface PushSrc {

    // Own properties of GstBase-1.0.GstBase.PushSrc

    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstBase-1.0.GstBase.PushSrc

    parent: BaseSrc & Gst.Object

    // Conflicting methods

    query(query: Gst.Query): boolean

    // Overloads of query

    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @virtual 
     * @param query the #GstQuery.
     * @returns %TRUE if the query could be performed. MT safe.
     */
    query(query: Gst.Query): boolean
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @virtual 
     * @param query the #GstQuery.
     * @returns %TRUE if the query could be performed. MT safe.
     */
    query(query: Gst.Query): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own virtual methods of GstBase-1.0.GstBase.PushSrc

    /**
     * Allocate memory for a buffer.
     * @virtual 
     */
    alloc(): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]

    // Overloads of alloc

    /**
     * Ask the subclass to allocate an output buffer with `offset` and `size,` the default
     * implementation will use the negotiated allocator.
     * @virtual 
     * @param offset 
     * @param size 
     */
    alloc(offset: number, size: number): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]
    /**
     * Ask the subclass to create a buffer, the default implementation will call alloc if
     * no allocated `buf` is provided and then call fill.
     * @virtual 
     * @param buf 
     */
    create(buf: Gst.Buffer | null): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]

    // Overloads of create

    /**
     * Ask the subclass to create a buffer with `offset` and `size,` the default
     * implementation will call alloc if no allocated `buf` is provided and then call fill.
     * @virtual 
     * @param offset 
     * @param size 
     * @param buf 
     */
    create(offset: number, size: number, buf: Gst.Buffer | null): [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]
    fill(buf: Gst.Buffer): Gst.FlowReturn

    // Overloads of fill

    fill(offset: number, size: number, buf: Gst.Buffer): Gst.FlowReturn

    // Class property signals of GstBase-1.0.GstBase.PushSrc

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This class is mostly useful for elements that cannot do
 * random access, or at least very slowly. The source usually
 * prefers to push out a fixed size buffer.
 * 
 * Subclasses usually operate in a format that is different from the
 * default GST_FORMAT_BYTES format of #GstBaseSrc.
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
 * @class 
 */
export class PushSrc extends BaseSrc {

    // Own properties of GstBase-1.0.GstBase.PushSrc

    static name: string

    // Constructors of GstBase-1.0.GstBase.PushSrc

    constructor(config?: PushSrc.ConstructorProperties) 
    _init(config?: PushSrc.ConstructorProperties): void
}

export interface AdapterClass {
}

export abstract class AdapterClass {

    // Own properties of GstBase-1.0.GstBase.AdapterClass

    static name: string
}

export interface AggregatorClass {

    // Own fields of GstBase-1.0.GstBase.AggregatorClass

    parentClass: Gst.ElementClass
    flush: (aggregator: Aggregator) => Gst.FlowReturn
    clip: (aggregator: Aggregator, aggregatorPad: AggregatorPad, buf: Gst.Buffer) => Gst.Buffer
    finishBuffer: (aggregator: Aggregator, buffer: Gst.Buffer) => Gst.FlowReturn
    sinkEvent: (aggregator: Aggregator, aggregatorPad: AggregatorPad, event: Gst.Event) => boolean
    sinkQuery: (aggregator: Aggregator, aggregatorPad: AggregatorPad, query: Gst.Query) => boolean
    srcEvent: (aggregator: Aggregator, event: Gst.Event) => boolean
    srcQuery: (aggregator: Aggregator, query: Gst.Query) => boolean
    srcActivate: (aggregator: Aggregator, mode: Gst.PadMode, active: boolean) => boolean
    aggregate: (aggregator: Aggregator, timeout: boolean) => Gst.FlowReturn
    stop: (aggregator: Aggregator) => boolean
    start: (aggregator: Aggregator) => boolean
    getNextTime: (aggregator: Aggregator) => Gst.ClockTime
    updateSrcCaps: (self: Aggregator, caps: Gst.Caps) => [ /* returnType */ Gst.FlowReturn, /* ret */ Gst.Caps ]
    fixateSrcCaps: (self: Aggregator, caps: Gst.Caps) => Gst.Caps
    negotiatedSrcCaps: (self: Aggregator, caps: Gst.Caps) => boolean
    decideAllocation: (self: Aggregator, query: Gst.Query) => boolean
    proposeAllocation: (self: Aggregator, pad: AggregatorPad, decideQuery: Gst.Query, query: Gst.Query) => boolean
    negotiate: (self: Aggregator) => boolean
    sinkEventPreQueue: (aggregator: Aggregator, aggregatorPad: AggregatorPad, event: Gst.Event) => Gst.FlowReturn
    sinkQueryPreQueue: (aggregator: Aggregator, aggregatorPad: AggregatorPad, query: Gst.Query) => boolean
    finishBufferList: (aggregator: Aggregator, bufferlist: Gst.BufferList) => Gst.FlowReturn
    peekNextSample: (aggregator: Aggregator, aggregatorPad: AggregatorPad) => Gst.Sample | null
}

/**
 * The aggregator base class will handle in a thread-safe way all manners of
 * concurrent flushes, seeks, pad additions and removals, leaving to the
 * subclass the responsibility of clipping buffers, and aggregating buffers in
 * the way the implementor sees fit.
 * 
 * It will also take care of event ordering (stream-start, segment, eos).
 * 
 * Basically, a simple implementation will override `aggregate,` and call
 * _finish_buffer from inside that function.
 * @record 
 */
export abstract class AggregatorClass {

    // Own properties of GstBase-1.0.GstBase.AggregatorClass

    static name: string
}

export interface AggregatorPadClass {

    // Own fields of GstBase-1.0.GstBase.AggregatorPadClass

    parentClass: Gst.PadClass
    flush: (aggpad: AggregatorPad, aggregator: Aggregator) => Gst.FlowReturn
    skipBuffer: (aggpad: AggregatorPad, aggregator: Aggregator, buffer: Gst.Buffer) => boolean
}

export abstract class AggregatorPadClass {

    // Own properties of GstBase-1.0.GstBase.AggregatorPadClass

    static name: string
}

export interface AggregatorPadPrivate {
}

export class AggregatorPadPrivate {

    // Own properties of GstBase-1.0.GstBase.AggregatorPadPrivate

    static name: string
}

export interface AggregatorPrivate {
}

export class AggregatorPrivate {

    // Own properties of GstBase-1.0.GstBase.AggregatorPrivate

    static name: string
}

export interface BaseParseClass {

    // Own fields of GstBase-1.0.GstBase.BaseParseClass

    /**
     * the parent class
     * @field 
     */
    parentClass: Gst.ElementClass
    start: (parse: BaseParse) => boolean
    stop: (parse: BaseParse) => boolean
    setSinkCaps: (parse: BaseParse, caps: Gst.Caps) => boolean
    handleFrame: (parse: BaseParse, frame: BaseParseFrame) => [ /* returnType */ Gst.FlowReturn, /* skipsize */ number ]
    prePushFrame: (parse: BaseParse, frame: BaseParseFrame) => Gst.FlowReturn
    convert: (parse: BaseParse, srcFormat: Gst.Format, srcValue: number, destFormat: Gst.Format, destValue: number) => boolean
    sinkEvent: (parse: BaseParse, event: Gst.Event) => boolean
    srcEvent: (parse: BaseParse, event: Gst.Event) => boolean
    getSinkCaps: (parse: BaseParse, filter: Gst.Caps) => Gst.Caps
    detect: (parse: BaseParse, buffer: Gst.Buffer) => Gst.FlowReturn
    sinkQuery: (parse: BaseParse, query: Gst.Query) => boolean
    srcQuery: (parse: BaseParse, query: Gst.Query) => boolean
}

/**
 * Subclasses can override any of the available virtual methods or not, as
 * needed. At minimum `handle_frame` needs to be overridden.
 * @record 
 */
export abstract class BaseParseClass {

    // Own properties of GstBase-1.0.GstBase.BaseParseClass

    static name: string
}

export interface BaseParseFrame {

    // Own fields of GstBase-1.0.GstBase.BaseParseFrame

    /**
     * input data to be parsed for frames.
     * @field 
     */
    buffer: Gst.Buffer
    /**
     * output data.
     * @field 
     */
    outBuffer: Gst.Buffer
    /**
     * a combination of input and output #GstBaseParseFrameFlags that
     *  convey additional context to subclass or allow subclass to tune
     *  subsequent #GstBaseParse actions.
     * @field 
     */
    flags: number
    /**
     * media specific offset of input frame
     *   Note that a converter may have a different one on the frame's buffer.
     * @field 
     */
    offset: number
    /**
     * subclass can set this to indicates the metadata overhead
     *   for the given frame, which is then used to enable more accurate bitrate
     *   computations. If this is -1, it is assumed that this frame should be
     *   skipped in bitrate calculation.
     * @field 
     */
    overhead: number

    // Owm methods of GstBase-1.0.GstBase.BaseParseFrame

    /**
     * Copies a #GstBaseParseFrame.
     * @returns A copy of @frame
     */
    copy(): BaseParseFrame
    /**
     * Frees the provided `frame`.
     */
    free(): void
    /**
     * Sets a #GstBaseParseFrame to initial state.  Currently this means
     * all public fields are zero-ed and a private flag is set to make
     * sure gst_base_parse_frame_free() only frees the contents but not
     * the actual frame. Use this function to initialise a #GstBaseParseFrame
     * allocated on the stack.
     */
    init(): void
}

/**
 * Frame (context) data passed to each frame parsing virtual methods.  In
 * addition to providing the data to be checked for a valid frame or an already
 * identified frame, it conveys additional metadata or control information
 * from and to the subclass w.r.t. the particular frame in question (rather
 * than global parameters).  Some of these may apply to each parsing stage, others
 * only to some a particular one.  These parameters are effectively zeroed at start
 * of each frame's processing, i.e. parsing virtual method invocation sequence.
 * @record 
 */
export class BaseParseFrame {

    // Own properties of GstBase-1.0.GstBase.BaseParseFrame

    static name: string

    // Constructors of GstBase-1.0.GstBase.BaseParseFrame

    /**
     * Allocates a new #GstBaseParseFrame. This function is mainly for bindings,
     * elements written in C should usually allocate the frame on the stack and
     * then use gst_base_parse_frame_init() to initialise it.
     * @constructor 
     * @param buffer a #GstBuffer
     * @param flags the flags
     * @param overhead number of bytes in this frame which should be counted as     metadata overhead, ie. not used to calculate the average bitrate.     Set to -1 to mark the entire frame as metadata. If in doubt, set to 0.
     * @returns a newly-allocated #GstBaseParseFrame. Free with     gst_base_parse_frame_free() when no longer needed.
     */
    constructor(buffer: Gst.Buffer, flags: BaseParseFrameFlags, overhead: number) 
    /**
     * Allocates a new #GstBaseParseFrame. This function is mainly for bindings,
     * elements written in C should usually allocate the frame on the stack and
     * then use gst_base_parse_frame_init() to initialise it.
     * @constructor 
     * @param buffer a #GstBuffer
     * @param flags the flags
     * @param overhead number of bytes in this frame which should be counted as     metadata overhead, ie. not used to calculate the average bitrate.     Set to -1 to mark the entire frame as metadata. If in doubt, set to 0.
     * @returns a newly-allocated #GstBaseParseFrame. Free with     gst_base_parse_frame_free() when no longer needed.
     */
    static new(buffer: Gst.Buffer, flags: BaseParseFrameFlags, overhead: number): BaseParseFrame
}

export interface BaseParsePrivate {
}

export class BaseParsePrivate {

    // Own properties of GstBase-1.0.GstBase.BaseParsePrivate

    static name: string
}

export interface BaseSinkClass {

    // Own fields of GstBase-1.0.GstBase.BaseSinkClass

    /**
     * Element parent class
     * @field 
     */
    parentClass: Gst.ElementClass
    getCaps: (sink: BaseSink, filter: Gst.Caps | null) => Gst.Caps
    setCaps: (sink: BaseSink, caps: Gst.Caps) => boolean
    fixate: (sink: BaseSink, caps: Gst.Caps) => Gst.Caps
    activatePull: (sink: BaseSink, active: boolean) => boolean
    getTimes: (sink: BaseSink, buffer: Gst.Buffer) => [ /* start */ Gst.ClockTime, /* end */ Gst.ClockTime ]
    proposeAllocation: (sink: BaseSink, query: Gst.Query) => boolean
    start: (sink: BaseSink) => boolean
    stop: (sink: BaseSink) => boolean
    unlock: (sink: BaseSink) => boolean
    unlockStop: (sink: BaseSink) => boolean
    query: (sink: BaseSink, query: Gst.Query) => boolean
    event: (sink: BaseSink, event: Gst.Event) => boolean
    waitEvent: (sink: BaseSink, event: Gst.Event) => Gst.FlowReturn
    prepare: (sink: BaseSink, buffer: Gst.Buffer) => Gst.FlowReturn
    prepareList: (sink: BaseSink, bufferList: Gst.BufferList) => Gst.FlowReturn
    preroll: (sink: BaseSink, buffer: Gst.Buffer) => Gst.FlowReturn
    render: (sink: BaseSink, buffer: Gst.Buffer) => Gst.FlowReturn
    renderList: (sink: BaseSink, bufferList: Gst.BufferList) => Gst.FlowReturn
}

/**
 * Subclasses can override any of the available virtual methods or not, as
 * needed. At the minimum, the `render` method should be overridden to
 * output/present buffers.
 * @record 
 */
export abstract class BaseSinkClass {

    // Own properties of GstBase-1.0.GstBase.BaseSinkClass

    static name: string
}

export interface BaseSinkPrivate {
}

export class BaseSinkPrivate {

    // Own properties of GstBase-1.0.GstBase.BaseSinkPrivate

    static name: string
}

export interface BaseSrcClass {

    // Own fields of GstBase-1.0.GstBase.BaseSrcClass

    /**
     * Element parent class
     * @field 
     */
    parentClass: Gst.ElementClass
    getCaps: (src: BaseSrc, filter: Gst.Caps | null) => Gst.Caps
    negotiate: (src: BaseSrc) => boolean
    fixate: (src: BaseSrc, caps: Gst.Caps) => Gst.Caps
    setCaps: (src: BaseSrc, caps: Gst.Caps) => boolean
    decideAllocation: (src: BaseSrc, query: Gst.Query) => boolean
    start: (src: BaseSrc) => boolean
    stop: (src: BaseSrc) => boolean
    getTimes: (src: BaseSrc, buffer: Gst.Buffer) => [ /* start */ Gst.ClockTime, /* end */ Gst.ClockTime ]
    getSize: (src: BaseSrc) => [ /* returnType */ boolean, /* size */ number ]
    isSeekable: (src: BaseSrc) => boolean
    prepareSeekSegment: (src: BaseSrc, seek: Gst.Event, segment: Gst.Segment) => boolean
    doSeek: (src: BaseSrc, segment: Gst.Segment) => boolean
    unlock: (src: BaseSrc) => boolean
    unlockStop: (src: BaseSrc) => boolean
    query: (src: BaseSrc, query: Gst.Query) => boolean
    event: (src: BaseSrc, event: Gst.Event) => boolean
    create: (src: BaseSrc, offset: number, size: number, buf: Gst.Buffer | null) => [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]
    alloc: (src: BaseSrc, offset: number, size: number) => [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]
    fill: (src: BaseSrc, offset: number, size: number, buf: Gst.Buffer) => Gst.FlowReturn
}

/**
 * Subclasses can override any of the available virtual methods or not, as
 * needed. At the minimum, the `create` method should be overridden to produce
 * buffers.
 * @record 
 */
export abstract class BaseSrcClass {

    // Own properties of GstBase-1.0.GstBase.BaseSrcClass

    static name: string
}

export interface BaseSrcPrivate {
}

export class BaseSrcPrivate {

    // Own properties of GstBase-1.0.GstBase.BaseSrcPrivate

    static name: string
}

export interface BaseTransformClass {

    // Own fields of GstBase-1.0.GstBase.BaseTransformClass

    /**
     * Element parent class
     * @field 
     */
    parentClass: Gst.ElementClass
    /**
     * If set to %TRUE, passthrough mode will be
     *                            automatically enabled if the caps are the same.
     *                            Set to %FALSE by default.
     * @field 
     */
    passthroughOnSameCaps: boolean
    /**
     * If set to %TRUE, `transform_ip` will be called in
     *                           passthrough mode. The passed buffer might not be
     *                           writable. When %FALSE, neither `transform` nor
     *                           `transform_ip` will be called in passthrough mode.
     *                           Set to %TRUE by default.
     * @field 
     */
    transformIpOnPassthrough: boolean
    transformCaps: (trans: BaseTransform, direction: Gst.PadDirection, caps: Gst.Caps, filter: Gst.Caps) => Gst.Caps
    fixateCaps: (trans: BaseTransform, direction: Gst.PadDirection, caps: Gst.Caps, othercaps: Gst.Caps) => Gst.Caps
    acceptCaps: (trans: BaseTransform, direction: Gst.PadDirection, caps: Gst.Caps) => boolean
    setCaps: (trans: BaseTransform, incaps: Gst.Caps, outcaps: Gst.Caps) => boolean
    query: (trans: BaseTransform, direction: Gst.PadDirection, query: Gst.Query) => boolean
    decideAllocation: (trans: BaseTransform, query: Gst.Query) => boolean
    filterMeta: (trans: BaseTransform, query: Gst.Query, api: GObject.GType, params: Gst.Structure) => boolean
    proposeAllocation: (trans: BaseTransform, decideQuery: Gst.Query, query: Gst.Query) => boolean
    transformSize: (trans: BaseTransform, direction: Gst.PadDirection, caps: Gst.Caps, size: number, othercaps: Gst.Caps) => [ /* returnType */ boolean, /* othersize */ number ]
    getUnitSize: (trans: BaseTransform, caps: Gst.Caps) => [ /* returnType */ boolean, /* size */ number ]
    start: (trans: BaseTransform) => boolean
    stop: (trans: BaseTransform) => boolean
    sinkEvent: (trans: BaseTransform, event: Gst.Event) => boolean
    srcEvent: (trans: BaseTransform, event: Gst.Event) => boolean
    prepareOutputBuffer: (trans: BaseTransform, input: Gst.Buffer) => [ /* returnType */ Gst.FlowReturn, /* outbuf */ Gst.Buffer ]
    copyMetadata: (trans: BaseTransform, input: Gst.Buffer, outbuf: Gst.Buffer) => boolean
    transformMeta: (trans: BaseTransform, outbuf: Gst.Buffer, meta: Gst.Meta, inbuf: Gst.Buffer) => boolean
    beforeTransform: (trans: BaseTransform, buffer: Gst.Buffer) => void
    transform: (trans: BaseTransform, inbuf: Gst.Buffer, outbuf: Gst.Buffer) => Gst.FlowReturn
    transformIp: (trans: BaseTransform, buf: Gst.Buffer) => Gst.FlowReturn
    submitInputBuffer: (trans: BaseTransform, isDiscont: boolean, input: Gst.Buffer) => Gst.FlowReturn
    generateOutput: (trans: BaseTransform) => [ /* returnType */ Gst.FlowReturn, /* outbuf */ Gst.Buffer ]
}

/**
 * Subclasses can override any of the available virtual methods or not, as
 * needed. At minimum either `transform` or `transform_ip` need to be overridden.
 * If the element can overwrite the input data with the results (data is of the
 * same type and quantity) it should provide `transform_ip`.
 * @record 
 */
export abstract class BaseTransformClass {

    // Own properties of GstBase-1.0.GstBase.BaseTransformClass

    static name: string
}

export interface BaseTransformPrivate {
}

export class BaseTransformPrivate {

    // Own properties of GstBase-1.0.GstBase.BaseTransformPrivate

    static name: string
}

export interface BitReader {

    // Own fields of GstBase-1.0.GstBase.BitReader

    /**
     * Data from which the bit reader will
     *   read
     * @field 
     */
    data: number[]
    /**
     * Size of `data` in bytes
     * @field 
     */
    size: number
    /**
     * Current byte position
     * @field 
     */
    byte: number
    /**
     * Bit position in the current byte
     * @field 
     */
    bit: number

    // Owm methods of GstBase-1.0.GstBase.BitReader

    /**
     * Frees a #GstBitReader instance, which was previously allocated by
     * gst_bit_reader_new().
     */
    free(): void
    /**
     * Read `nbits` bits into `val` and update the current position.
     * @param nbits number of bits to read
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getBitsUint16(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read `nbits` bits into `val` and update the current position.
     * @param nbits number of bits to read
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getBitsUint32(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read `nbits` bits into `val` and update the current position.
     * @param nbits number of bits to read
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getBitsUint64(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read `nbits` bits into `val` and update the current position.
     * @param nbits number of bits to read
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getBitsUint8(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Returns the current position of a #GstBitReader instance in bits.
     * @returns The current position of @reader in bits.
     */
    getPos(): number
    /**
     * Returns the remaining number of bits of a #GstBitReader instance.
     * @returns The remaining number of bits of @reader instance.
     */
    getRemaining(): number
    /**
     * Returns the total number of bits of a #GstBitReader instance.
     * @returns The total number of bits of @reader instance.
     */
    getSize(): number
    /**
     * Initializes a #GstBitReader instance to read from `data`. This function
     * can be called on already initialized instances.
     * @param data data from which the bit reader should read
     */
    init(data: number[]): void
    /**
     * Read `nbits` bits into `val` but keep the current position.
     * @param nbits number of bits to read
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    peekBitsUint16(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read `nbits` bits into `val` but keep the current position.
     * @param nbits number of bits to read
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    peekBitsUint32(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read `nbits` bits into `val` but keep the current position.
     * @param nbits number of bits to read
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    peekBitsUint64(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read `nbits` bits into `val` but keep the current position.
     * @param nbits number of bits to read
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    peekBitsUint8(nbits: number): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Sets the new position of a #GstBitReader instance to `pos` in bits.
     * @param pos The new position in bits
     * @returns %TRUE if the position could be set successfully, %FALSE otherwise.
     */
    setPos(pos: number): boolean
    /**
     * Skips `nbits` bits of the #GstBitReader instance.
     * @param nbits the number of bits to skip
     * @returns %TRUE if @nbits bits could be skipped, %FALSE otherwise.
     */
    skip(nbits: number): boolean
    /**
     * Skips until the next byte.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    skipToByte(): boolean
}

/**
 * #GstBitReader provides a bit reader that can read any number of bits
 * from a memory buffer. It provides functions for reading any number of bits
 * into 8, 16, 32 and 64 bit variables.
 * @record 
 */
export class BitReader {

    // Own properties of GstBase-1.0.GstBase.BitReader

    static name: string
}

export interface BitWriter {

    // Own fields of GstBase-1.0.GstBase.BitWriter

    /**
     * Allocated `data` for bit writer to write
     * @field 
     */
    data: number
    /**
     * Size of written `data` in bits
     * @field 
     */
    bitSize: number

    // Owm methods of GstBase-1.0.GstBase.BitWriter

    /**
     * Write trailing bit to align last byte of `data`. `trailing_bit` can
     * only be 1 or 0.
     * @param trailingBit trailing bits of last byte, 0 or 1
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    alignBytes(trailingBit: number): boolean
    /**
     * Frees `bitwriter` and the allocated data inside.
     */
    free(): void
    /**
     * Frees `bitwriter` without destroying the internal data, which is
     * returned as #GstBuffer.
     * 
     * Free-function: gst_buffer_unref
     * @returns a new allocated #GstBuffer wrapping the     data inside. gst_buffer_unref() after usage.
     */
    freeAndGetBuffer(): Gst.Buffer
    /**
     * Frees `bitwriter` without destroying the internal data, which is
     * returned.
     * 
     * Free-function: g_free
     * @returns the current data. g_free() after     usage.
     */
    freeAndGetData(): number[]
    /**
     * Get written data pointer
     * @returns data pointer
     */
    getData(): number[]
    getRemaining(): number
    /**
     * Get size of written `data`
     * @returns size of bits written in @data
     */
    getSize(): number
    /**
     * Write `nbits` bits of `value` to #GstBitWriter.
     * @param value value of #guint16 to write
     * @param nbits number of bits to write
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    putBitsUint16(value: number, nbits: number): boolean
    /**
     * Write `nbits` bits of `value` to #GstBitWriter.
     * @param value value of #guint32 to write
     * @param nbits number of bits to write
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    putBitsUint32(value: number, nbits: number): boolean
    /**
     * Write `nbits` bits of `value` to #GstBitWriter.
     * @param value value of #guint64 to write
     * @param nbits number of bits to write
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    putBitsUint64(value: number, nbits: number): boolean
    /**
     * Write `nbits` bits of `value` to #GstBitWriter.
     * @param value value of #guint8 to write
     * @param nbits number of bits to write
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    putBitsUint8(value: number, nbits: number): boolean
    /**
     * Write `nbytes` bytes of `data` to #GstBitWriter.
     * @param data pointer of data to write
     * @param nbytes number of bytes to write
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    putBytes(data: number[], nbytes: number): boolean
    /**
     * Resets `bitwriter` and frees the data if it's owned by `bitwriter`.
     */
    reset(): void
    /**
     * Resets `bitwriter` and returns the current data as #GstBuffer.
     * 
     * Free-function: gst_buffer_unref
     * @returns a new allocated #GstBuffer wrapping the     current data. gst_buffer_unref() after usage.
     */
    resetAndGetBuffer(): Gst.Buffer
    /**
     * Resets `bitwriter` and returns the current data.
     * 
     * Free-function: g_free
     * @returns the current data. g_free() after     usage.
     */
    resetAndGetData(): number[]
    setPos(pos: number): boolean
}

/**
 * #GstBitWriter provides a bit writer that can write any number of
 * bits into a memory buffer. It provides functions for writing any
 * number of bits into 8, 16, 32 and 64 bit variables.
 * @record 
 */
export class BitWriter {

    // Own properties of GstBase-1.0.GstBase.BitWriter

    static name: string
}

export interface ByteReader {

    // Own fields of GstBase-1.0.GstBase.ByteReader

    /**
     * Data from which the bit reader will
     *   read
     * @field 
     */
    data: number[]
    /**
     * Size of `data` in bytes
     * @field 
     */
    size: number
    /**
     * Current byte position
     * @field 
     */
    byte: number

    // Owm methods of GstBase-1.0.GstBase.ByteReader

    /**
     * Free-function: g_free
     * 
     * Returns a newly-allocated copy of the current data
     * position if at least `size` bytes are left and
     * updates the current position. Free with g_free() when no longer needed.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    dupData(): [ /* returnType */ boolean, /* val */ number[] ]
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
     * @returns %TRUE if a string could be read, %FALSE otherwise. The     string put into @str must be freed with g_free() when no longer needed.
     */
    dupStringUtf16(): [ /* returnType */ boolean, /* str */ number[] ]
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
     * @returns %TRUE if a string could be read, %FALSE otherwise. The     string put into @str must be freed with g_free() when no longer needed.
     */
    dupStringUtf32(): [ /* returnType */ boolean, /* str */ number[] ]
    /**
     * Free-function: g_free
     * 
     * FIXME:Reads (copies) a NUL-terminated string in the #GstByteReader instance,
     * advancing the current position to the byte after the string. This will work
     * for any NUL-terminated string with a character width of 8 bits, so ASCII,
     * UTF-8, ISO-8859-N etc. No input checking for valid UTF-8 is done.
     * 
     * This function will fail if no NUL-terminator was found in in the data.
     * @returns %TRUE if a string could be read into @str, %FALSE otherwise. The     string put into @str must be freed with g_free() when no longer needed.
     */
    dupStringUtf8(): [ /* returnType */ boolean, /* str */ string[] ]
    /**
     * Frees a #GstByteReader instance, which was previously allocated by
     * gst_byte_reader_new().
     */
    free(): void
    /**
     * Returns a constant pointer to the current data
     * position if at least `size` bytes are left and
     * updates the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getData(): [ /* returnType */ boolean, /* val */ number[] ]
    /**
     * Read a 32 bit big endian floating point value into `val`
     * and update the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getFloat32Be(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read a 32 bit little endian floating point value into `val`
     * and update the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getFloat32Le(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read a 64 bit big endian floating point value into `val`
     * and update the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getFloat64Be(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read a 64 bit little endian floating point value into `val`
     * and update the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getFloat64Le(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read a signed 16 bit big endian integer into `val`
     * and update the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getInt16Be(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read a signed 16 bit little endian integer into `val`
     * and update the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getInt16Le(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read a signed 24 bit big endian integer into `val`
     * and update the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getInt24Be(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read a signed 24 bit little endian integer into `val`
     * and update the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getInt24Le(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read a signed 32 bit big endian integer into `val`
     * and update the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getInt32Be(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read a signed 32 bit little endian integer into `val`
     * and update the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getInt32Le(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read a signed 64 bit big endian integer into `val`
     * and update the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getInt64Be(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read a signed 64 bit little endian integer into `val`
     * and update the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getInt64Le(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read a signed 8 bit integer into `val` and update the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getInt8(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Returns the current position of a #GstByteReader instance in bytes.
     * @returns The current position of @reader in bytes.
     */
    getPos(): number
    /**
     * Returns the remaining number of bytes of a #GstByteReader instance.
     * @returns The remaining number of bytes of @reader instance.
     */
    getRemaining(): number
    /**
     * Returns the total number of bytes of a #GstByteReader instance.
     * @returns The total number of bytes of @reader instance.
     */
    getSize(): number
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
     * @returns %TRUE if a string could be found, %FALSE otherwise.
     */
    getStringUtf8(): [ /* returnType */ boolean, /* str */ string[] ]
    /**
     * Read an unsigned 16 bit big endian integer into `val`
     * and update the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getUint16Be(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read an unsigned 16 bit little endian integer into `val`
     * and update the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getUint16Le(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read an unsigned 24 bit big endian integer into `val`
     * and update the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getUint24Be(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read an unsigned 24 bit little endian integer into `val`
     * and update the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getUint24Le(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read an unsigned 32 bit big endian integer into `val`
     * and update the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getUint32Be(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read an unsigned 32 bit little endian integer into `val`
     * and update the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getUint32Le(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read an unsigned 64 bit big endian integer into `val`
     * and update the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getUint64Be(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read an unsigned 64 bit little endian integer into `val`
     * and update the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getUint64Le(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read an unsigned 8 bit integer into `val` and update the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    getUint8(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Initializes a #GstByteReader instance to read from `data`. This function
     * can be called on already initialized instances.
     * @param data data from which     the #GstByteReader should read
     */
    init(data: number[]): void
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
    maskedScanUint32(mask: number, pattern: number, offset: number, size: number): number
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
    maskedScanUint32Peek(mask: number, pattern: number, offset: number, size: number): [ /* returnType */ number, /* value */ number ]
    /**
     * Returns a constant pointer to the current data
     * position if at least `size` bytes are left and
     * keeps the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    peekData(): [ /* returnType */ boolean, /* val */ number[] ]
    /**
     * Read a 32 bit big endian floating point value into `val`
     * but keep the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    peekFloat32Be(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read a 32 bit little endian floating point value into `val`
     * but keep the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    peekFloat32Le(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read a 64 bit big endian floating point value into `val`
     * but keep the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    peekFloat64Be(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read a 64 bit little endian floating point value into `val`
     * but keep the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    peekFloat64Le(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read a signed 16 bit big endian integer into `val`
     * but keep the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    peekInt16Be(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read a signed 16 bit little endian integer into `val`
     * but keep the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    peekInt16Le(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read a signed 24 bit big endian integer into `val`
     * but keep the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    peekInt24Be(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read a signed 24 bit little endian integer into `val`
     * but keep the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    peekInt24Le(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read a signed 32 bit big endian integer into `val`
     * but keep the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    peekInt32Be(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read a signed 32 bit little endian integer into `val`
     * but keep the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    peekInt32Le(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read a signed 64 bit big endian integer into `val`
     * but keep the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    peekInt64Be(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read a signed 64 bit little endian integer into `val`
     * but keep the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    peekInt64Le(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read a signed 8 bit integer into `val` but keep the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    peekInt8(): [ /* returnType */ boolean, /* val */ number ]
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
     * @returns %TRUE if a string could be skipped, %FALSE otherwise.
     */
    peekStringUtf8(): [ /* returnType */ boolean, /* str */ string[] ]
    /**
     * Read an unsigned 16 bit big endian integer into `val`
     * but keep the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    peekUint16Be(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read an unsigned 16 bit little endian integer into `val`
     * but keep the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    peekUint16Le(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read an unsigned 24 bit big endian integer into `val`
     * but keep the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    peekUint24Be(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read an unsigned 24 bit little endian integer into `val`
     * but keep the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    peekUint24Le(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read an unsigned 32 bit big endian integer into `val`
     * but keep the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    peekUint32Be(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read an unsigned 32 bit little endian integer into `val`
     * but keep the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    peekUint32Le(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read an unsigned 64 bit big endian integer into `val`
     * but keep the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    peekUint64Be(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read an unsigned 64 bit little endian integer into `val`
     * but keep the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    peekUint64Le(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Read an unsigned 8 bit integer into `val` but keep the current position.
     * @returns %TRUE if successful, %FALSE otherwise.
     */
    peekUint8(): [ /* returnType */ boolean, /* val */ number ]
    /**
     * Sets the new position of a #GstByteReader instance to `pos` in bytes.
     * @param pos The new position in bytes
     * @returns %TRUE if the position could be set successfully, %FALSE otherwise.
     */
    setPos(pos: number): boolean
    /**
     * Skips `nbytes` bytes of the #GstByteReader instance.
     * @param nbytes the number of bytes to skip
     * @returns %TRUE if @nbytes bytes could be skipped, %FALSE otherwise.
     */
    skip(nbytes: number): boolean
    /**
     * Skips a NUL-terminated UTF-16 string in the #GstByteReader instance,
     * advancing the current position to the byte after the string.
     * 
     * No input checking for valid UTF-16 is done.
     * 
     * This function will fail if no NUL-terminator was found in in the data.
     * @returns %TRUE if a string could be skipped, %FALSE otherwise.
     */
    skipStringUtf16(): boolean
    /**
     * Skips a NUL-terminated UTF-32 string in the #GstByteReader instance,
     * advancing the current position to the byte after the string.
     * 
     * No input checking for valid UTF-32 is done.
     * 
     * This function will fail if no NUL-terminator was found in in the data.
     * @returns %TRUE if a string could be skipped, %FALSE otherwise.
     */
    skipStringUtf32(): boolean
    /**
     * Skips a NUL-terminated string in the #GstByteReader instance, advancing
     * the current position to the byte after the string. This will work for
     * any NUL-terminated string with a character width of 8 bits, so ASCII,
     * UTF-8, ISO-8859-N etc. No input checking for valid UTF-8 is done.
     * 
     * This function will fail if no NUL-terminator was found in in the data.
     * @returns %TRUE if a string could be skipped, %FALSE otherwise.
     */
    skipStringUtf8(): boolean
}

/**
 * #GstByteReader provides a byte reader that can read different integer and
 * floating point types from a memory buffer. It provides functions for reading
 * signed/unsigned, little/big endian integers of 8, 16, 24, 32 and 64 bits
 * and functions for reading little/big endian floating points numbers of
 * 32 and 64 bits. It also provides functions to read NUL-terminated strings
 * in various character encodings.
 * @record 
 */
export class ByteReader {

    // Own properties of GstBase-1.0.GstBase.ByteReader

    static name: string
}

export interface ByteWriter {

    // Own fields of GstBase-1.0.GstBase.ByteWriter

    /**
     * #GstByteReader parent
     * @field 
     */
    parent: ByteReader
    /**
     * Allocation size of the data
     * @field 
     */
    allocSize: number
    /**
     * If %TRUE no reallocations are allowed
     * @field 
     */
    fixed: boolean
    /**
     * If %FALSE no reallocations are allowed and copies of data are returned
     * @field 
     */
    owned: boolean

    // Owm methods of GstBase-1.0.GstBase.ByteWriter

    /**
     * Checks if enough free space from the current write cursor is
     * available and reallocates if necessary.
     * @param size Number of bytes that should be available
     * @returns %TRUE if at least @size bytes are still available
     */
    ensureFreeSpace(size: number): boolean
    /**
     * Writes `size` bytes containing `value` to `writer`.
     * @param value Value to be written
     * @param size Number of bytes to be written
     * @returns %TRUE if the value could be written
     */
    fill(value: number, size: number): boolean
    /**
     * Frees `writer` and all memory allocated by it.
     */
    free(): void
    /**
     * Frees `writer` and all memory allocated by it except
     * the current data, which is returned as #GstBuffer.
     * 
     * Free-function: gst_buffer_unref
     * @returns the current data as buffer. gst_buffer_unref()     after usage.
     */
    freeAndGetBuffer(): Gst.Buffer
    /**
     * Frees `writer` and all memory allocated by it except
     * the current data, which is returned.
     * 
     * Free-function: g_free
     * @returns the current data. g_free() after usage.
     */
    freeAndGetData(): number
    /**
     * Returns the remaining size of data that can still be written. If
     * -1 is returned the remaining size is only limited by system resources.
     * @returns the remaining size of data that can still be written
     */
    getRemaining(): number
    /**
     * Initializes `writer` to an empty instance
     */
    init(): void
    /**
     * Initializes `writer` with the given
     * memory area. If `initialized` is %TRUE it is possible to
     * read `size` bytes from the #GstByteWriter from the beginning.
     * @param data Memory area for writing
     * @param initialized If %TRUE the complete data can be read from the beginning
     */
    initWithData(data: number[], initialized: boolean): void
    /**
     * Initializes `writer` with the given initial data size.
     * @param size Initial size of data
     * @param fixed If %TRUE the data can't be reallocated
     */
    initWithSize(size: number, fixed: boolean): void
    /**
     * Writes `size` bytes of `data` to `writer`.
     * @param buffer source #GstBuffer
     * @param offset offset to copy from
     * @param size total size to copy. If -1, all data is copied
     * @returns %TRUE if the data could be written
     */
    putBuffer(buffer: Gst.Buffer, offset: number, size: number): boolean
    /**
     * Writes `size` bytes of `data` to `writer`.
     * @param data Data to write
     * @returns %TRUE if the value could be written
     */
    putData(data: number[]): boolean
    /**
     * Writes a big endian 32 bit float to `writer`.
     * @param val Value to write
     * @returns %TRUE if the value could be written
     */
    putFloat32Be(val: number): boolean
    /**
     * Writes a little endian 32 bit float to `writer`.
     * @param val Value to write
     * @returns %TRUE if the value could be written
     */
    putFloat32Le(val: number): boolean
    /**
     * Writes a big endian 64 bit float to `writer`.
     * @param val Value to write
     * @returns %TRUE if the value could be written
     */
    putFloat64Be(val: number): boolean
    /**
     * Writes a little endian 64 bit float to `writer`.
     * @param val Value to write
     * @returns %TRUE if the value could be written
     */
    putFloat64Le(val: number): boolean
    /**
     * Writes a signed big endian 16 bit integer to `writer`.
     * @param val Value to write
     * @returns %TRUE if the value could be written
     */
    putInt16Be(val: number): boolean
    /**
     * Writes a signed little endian 16 bit integer to `writer`.
     * @param val Value to write
     * @returns %TRUE if the value could be written
     */
    putInt16Le(val: number): boolean
    /**
     * Writes a signed big endian 24 bit integer to `writer`.
     * @param val Value to write
     * @returns %TRUE if the value could be written
     */
    putInt24Be(val: number): boolean
    /**
     * Writes a signed little endian 24 bit integer to `writer`.
     * @param val Value to write
     * @returns %TRUE if the value could be written
     */
    putInt24Le(val: number): boolean
    /**
     * Writes a signed big endian 32 bit integer to `writer`.
     * @param val Value to write
     * @returns %TRUE if the value could be written
     */
    putInt32Be(val: number): boolean
    /**
     * Writes a signed little endian 32 bit integer to `writer`.
     * @param val Value to write
     * @returns %TRUE if the value could be written
     */
    putInt32Le(val: number): boolean
    /**
     * Writes a signed big endian 64 bit integer to `writer`.
     * @param val Value to write
     * @returns %TRUE if the value could be written
     */
    putInt64Be(val: number): boolean
    /**
     * Writes a signed little endian 64 bit integer to `writer`.
     * @param val Value to write
     * @returns %TRUE if the value could be written
     */
    putInt64Le(val: number): boolean
    /**
     * Writes a signed 8 bit integer to `writer`.
     * @param val Value to write
     * @returns %TRUE if the value could be written
     */
    putInt8(val: number): boolean
    /**
     * Writes a NUL-terminated UTF16 string to `writer` (including the terminator).
     * @param data UTF16 string to write
     * @returns %TRUE if the value could be written
     */
    putStringUtf16(data: number[]): boolean
    /**
     * Writes a NUL-terminated UTF32 string to `writer` (including the terminator).
     * @param data UTF32 string to write
     * @returns %TRUE if the value could be written
     */
    putStringUtf32(data: number[]): boolean
    /**
     * Writes a NUL-terminated UTF8 string to `writer` (including the terminator).
     * @param data UTF8 string to write
     * @returns %TRUE if the value could be written
     */
    putStringUtf8(data: string | null): boolean
    /**
     * Writes a unsigned big endian 16 bit integer to `writer`.
     * @param val Value to write
     * @returns %TRUE if the value could be written
     */
    putUint16Be(val: number): boolean
    /**
     * Writes a unsigned little endian 16 bit integer to `writer`.
     * @param val Value to write
     * @returns %TRUE if the value could be written
     */
    putUint16Le(val: number): boolean
    /**
     * Writes a unsigned big endian 24 bit integer to `writer`.
     * @param val Value to write
     * @returns %TRUE if the value could be written
     */
    putUint24Be(val: number): boolean
    /**
     * Writes a unsigned little endian 24 bit integer to `writer`.
     * @param val Value to write
     * @returns %TRUE if the value could be written
     */
    putUint24Le(val: number): boolean
    /**
     * Writes a unsigned big endian 32 bit integer to `writer`.
     * @param val Value to write
     * @returns %TRUE if the value could be written
     */
    putUint32Be(val: number): boolean
    /**
     * Writes a unsigned little endian 32 bit integer to `writer`.
     * @param val Value to write
     * @returns %TRUE if the value could be written
     */
    putUint32Le(val: number): boolean
    /**
     * Writes a unsigned big endian 64 bit integer to `writer`.
     * @param val Value to write
     * @returns %TRUE if the value could be written
     */
    putUint64Be(val: number): boolean
    /**
     * Writes a unsigned little endian 64 bit integer to `writer`.
     * @param val Value to write
     * @returns %TRUE if the value could be written
     */
    putUint64Le(val: number): boolean
    /**
     * Writes a unsigned 8 bit integer to `writer`.
     * @param val Value to write
     * @returns %TRUE if the value could be written
     */
    putUint8(val: number): boolean
    /**
     * Resets `writer` and frees the data if it's
     * owned by `writer`.
     */
    reset(): void
    /**
     * Resets `writer` and returns the current data as buffer.
     * 
     * Free-function: gst_buffer_unref
     * @returns the current data as buffer. gst_buffer_unref()     after usage.
     */
    resetAndGetBuffer(): Gst.Buffer
    /**
     * Resets `writer` and returns the current data.
     * 
     * Free-function: g_free
     * @returns the current data. g_free() after usage.
     */
    resetAndGetData(): number[]
}

/**
 * #GstByteWriter provides a byte writer and reader that can write/read different
 * integer and floating point types to/from a memory buffer. It provides functions
 * for writing/reading signed/unsigned, little/big endian integers of 8, 16, 24,
 * 32 and 64 bits and functions for reading little/big endian floating points numbers of
 * 32 and 64 bits. It also provides functions to write/read NUL-terminated strings
 * in various character encodings.
 * @record 
 */
export class ByteWriter {

    // Own properties of GstBase-1.0.GstBase.ByteWriter

    static name: string
}

export interface CollectData {

    // Own fields of GstBase-1.0.GstBase.CollectData

    /**
     * owner #GstCollectPads
     * @field 
     */
    collect: CollectPads
    /**
     * #GstPad managed by this data
     * @field 
     */
    pad: Gst.Pad
    /**
     * currently queued buffer.
     * @field 
     */
    buffer: Gst.Buffer
    /**
     * position in the buffer
     * @field 
     */
    pos: number
    /**
     * last segment received.
     * @field 
     */
    segment: Gst.Segment
}

/**
 * Structure used by the collect_pads.
 * @record 
 */
export class CollectData {

    // Own properties of GstBase-1.0.GstBase.CollectData

    static name: string
}

export interface CollectDataPrivate {
}

export class CollectDataPrivate {

    // Own properties of GstBase-1.0.GstBase.CollectDataPrivate

    static name: string
}

export interface CollectPadsClass {

    // Own fields of GstBase-1.0.GstBase.CollectPadsClass

    parentClass: Gst.ObjectClass
}

export abstract class CollectPadsClass {

    // Own properties of GstBase-1.0.GstBase.CollectPadsClass

    static name: string
}

export interface CollectPadsPrivate {
}

export class CollectPadsPrivate {

    // Own properties of GstBase-1.0.GstBase.CollectPadsPrivate

    static name: string
}

export interface DataQueueClass {

    // Own fields of GstBase-1.0.GstBase.DataQueueClass

    parentClass: GObject.ObjectClass
    empty: (queue: DataQueue) => void
    full: (queue: DataQueue) => void
    gstReserved: any[]
}

export abstract class DataQueueClass {

    // Own properties of GstBase-1.0.GstBase.DataQueueClass

    static name: string
}

export interface DataQueueItem {

    // Own fields of GstBase-1.0.GstBase.DataQueueItem

    /**
     * the #GstMiniObject to queue.
     * @field 
     */
    object: Gst.MiniObject
    /**
     * the size in bytes of the miniobject.
     * @field 
     */
    size: number
    /**
     * the duration in #GstClockTime of the miniobject. Can not be
     * %GST_CLOCK_TIME_NONE.
     * @field 
     */
    duration: number
    /**
     * %TRUE if `object` should be considered as a visible object.
     * @field 
     */
    visible: boolean
    /**
     * The #GDestroyNotify function to use to free the #GstDataQueueItem.
     * This function should also drop the reference to `object` the owner of the
     * #GstDataQueueItem is assumed to hold.
     * @field 
     */
    destroy: GLib.DestroyNotify
}

/**
 * Structure used by #GstDataQueue. You can supply a different structure, as
 * long as the top of the structure is identical to this structure.
 * @record 
 */
export class DataQueueItem {

    // Own properties of GstBase-1.0.GstBase.DataQueueItem

    static name: string
}

export interface DataQueuePrivate {
}

export class DataQueuePrivate {

    // Own properties of GstBase-1.0.GstBase.DataQueuePrivate

    static name: string
}

export interface DataQueueSize {

    // Own fields of GstBase-1.0.GstBase.DataQueueSize

    /**
     * number of buffers
     * @field 
     */
    visible: number
    /**
     * number of bytes
     * @field 
     */
    bytes: number
    /**
     * amount of time
     * @field 
     */
    time: number
}

/**
 * Structure describing the size of a queue.
 * @record 
 */
export class DataQueueSize {

    // Own properties of GstBase-1.0.GstBase.DataQueueSize

    static name: string
}

export interface FlowCombiner {

    // Owm methods of GstBase-1.0.GstBase.FlowCombiner

    /**
     * Adds a new #GstPad to the #GstFlowCombiner.
     * @param pad the #GstPad that is being added
     */
    addPad(pad: Gst.Pad): void
    /**
     * Removes all pads from a #GstFlowCombiner and resets it to its initial state.
     */
    clear(): void
    /**
     * Frees a #GstFlowCombiner struct and all its internal data.
     */
    free(): void
    /**
     * Increments the reference count on the #GstFlowCombiner.
     * @returns the #GstFlowCombiner.
     */
    ref(): FlowCombiner
    /**
     * Removes a #GstPad from the #GstFlowCombiner.
     * @param pad the #GstPad to remove
     */
    removePad(pad: Gst.Pad): void
    /**
     * Reset flow combiner and all pads to their initial state without removing pads.
     */
    reset(): void
    /**
     * Decrements the reference count on the #GstFlowCombiner.
     */
    unref(): void
    /**
     * Computes the combined flow return for the pads in it.
     * 
     * The #GstFlowReturn parameter should be the last flow return update for a pad
     * in this #GstFlowCombiner. It will use this value to be able to shortcut some
     * combinations and avoid looking over all pads again. e.g. The last combined
     * return is the same as the latest obtained #GstFlowReturn.
     * @param fret the latest #GstFlowReturn received for a pad in this #GstFlowCombiner
     * @returns The combined #GstFlowReturn
     */
    updateFlow(fret: Gst.FlowReturn): Gst.FlowReturn
    /**
     * Sets the provided pad's last flow return to provided value and computes
     * the combined flow return for the pads in it.
     * 
     * The #GstFlowReturn parameter should be the last flow return update for a pad
     * in this #GstFlowCombiner. It will use this value to be able to shortcut some
     * combinations and avoid looking over all pads again. e.g. The last combined
     * return is the same as the latest obtained #GstFlowReturn.
     * @param pad the #GstPad whose #GstFlowReturn to update
     * @param fret the latest #GstFlowReturn received for a pad in this #GstFlowCombiner
     * @returns The combined #GstFlowReturn
     */
    updatePadFlow(pad: Gst.Pad, fret: Gst.FlowReturn): Gst.FlowReturn
}

/**
 * Utility struct to help handling #GstFlowReturn combination. Useful for
 * #GstElement<!-- -->s that have multiple source pads and need to combine
 * the different #GstFlowReturn for those pads.
 * 
 * #GstFlowCombiner works by using the last #GstFlowReturn for all #GstPad
 * it has in its list and computes the combined return value and provides
 * it to the caller.
 * 
 * To add a new pad to the #GstFlowCombiner use gst_flow_combiner_add_pad().
 * The new #GstPad is stored with a default value of %GST_FLOW_OK.
 * 
 * In case you want a #GstPad to be removed, use gst_flow_combiner_remove_pad().
 * 
 * Please be aware that this struct isn't thread safe as its designed to be
 *  used by demuxers, those usually will have a single thread operating it.
 * 
 * These functions will take refs on the passed #GstPad<!-- -->s.
 * 
 * Aside from reducing the user's code size, the main advantage of using this
 * helper struct is to follow the standard rules for #GstFlowReturn combination.
 * These rules are:
 * 
 * * %GST_FLOW_EOS: only if all returns are EOS too
 * * %GST_FLOW_NOT_LINKED: only if all returns are NOT_LINKED too
 * * %GST_FLOW_ERROR or below: if at least one returns an error return
 * * %GST_FLOW_NOT_NEGOTIATED: if at least one returns a not-negotiated return
 * * %GST_FLOW_FLUSHING: if at least one returns flushing
 * * %GST_FLOW_OK: otherwise
 * 
 * %GST_FLOW_ERROR or below, GST_FLOW_NOT_NEGOTIATED and GST_FLOW_FLUSHING are
 * returned immediately from the gst_flow_combiner_update_flow() function.
 * @record 
 */
export class FlowCombiner {

    // Own properties of GstBase-1.0.GstBase.FlowCombiner

    static name: string

    // Constructors of GstBase-1.0.GstBase.FlowCombiner

    /**
     * Creates a new #GstFlowCombiner, use gst_flow_combiner_free() to free it.
     * @constructor 
     * @returns A new #GstFlowCombiner
     */
    constructor() 
    /**
     * Creates a new #GstFlowCombiner, use gst_flow_combiner_free() to free it.
     * @constructor 
     * @returns A new #GstFlowCombiner
     */
    static new(): FlowCombiner
}

export interface PushSrcClass {

    // Own fields of GstBase-1.0.GstBase.PushSrcClass

    /**
     * Element parent class
     * @field 
     */
    parentClass: BaseSrcClass
    create: (src: PushSrc, buf: Gst.Buffer | null) => [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]
    alloc: (src: PushSrc) => [ /* returnType */ Gst.FlowReturn, /* buf */ Gst.Buffer | null ]
    fill: (src: PushSrc, buf: Gst.Buffer) => Gst.FlowReturn
}

/**
 * Subclasses can override any of the available virtual methods or not, as
 * needed. At the minimum, the `fill` method should be overridden to produce
 * buffers.
 * @record 
 */
export abstract class PushSrcClass {

    // Own properties of GstBase-1.0.GstBase.PushSrcClass

    static name: string
}

export interface QueueArray {

    // Owm methods of GstBase-1.0.GstBase.QueueArray

    pushTailStruct(pStruct: any | null): void
}

/**
 * #GstQueueArray is an object that provides standard queue functionality
 * based on an array instead of linked lists. This reduces the overhead
 * caused by memory management by a large factor.
 * @record 
 */
export class QueueArray {

    // Own properties of GstBase-1.0.GstBase.QueueArray

    static name: string
}

export interface TypeFindData {
}

/**
 * The opaque #GstTypeFindData structure.
 * @record 
 */
export class TypeFindData {

    // Own properties of GstBase-1.0.GstBase.TypeFindData

    static name: string
}

// END