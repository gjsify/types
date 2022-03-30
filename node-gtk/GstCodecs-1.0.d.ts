/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstCodecs-1.0
 */

import type GstVideo from './GstVideo-1.0';
import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GstCodecs {

enum H264DecoderCompliance {
    /**
     * The decoder behavior is
     *     automatically choosen.
     */
    AUTO,
    /**
     * The decoder behavior strictly
     *     conforms to the SPEC. All the decoder behaviors conform to the
     *     SPEC, not including any nonstandard behavior which is not
     *     mentioned in the SPEC.
     */
    STRICT,
    /**
     * The decoder behavior normally
     *     conforms to the SPEC. Most behaviors conform to the SPEC but
     *     including some nonstandard features which are widely used or
     *     often used in the industry practice. This meets the request of
     *     real streams and usages, but may not 100% conform to the
     *     SPEC. It has very low risk. E.g., we will output pictures
     *     without waiting DPB being full for the lower latency, which may
     *     cause B frame disorder when there are reference frames with
     *     smaller POC after it in decoder order. And the baseline profile
     *     may be mapped to the constrained-baseline profile, but it may
     *     have problems when a real baseline stream comes with FMO or
     *     ASO.
     */
    NORMAL,
    /**
     * The decoder behavior
     *     flexibly conforms to the SPEC. It uses the nonstandard features
     *     more aggressively in order to get better performance(for
     *     example, lower latency). It may change the result of the
     *     decoder and should be used carefully. Besides including all
     *     risks in *normal* mode, it has more risks, such as frames
     *     disorder when reference frames POC decrease in decoder order.
     */
    FLEXIBLE,
}
enum H264DpbBumpMode {
    /**
     * No latency requirement for DBP bumping.
     */
    NORMAL_LATENCY,
    /**
     * Low-latency requirement for DBP bumping.
     */
    LOW_LATENCY,
    /**
     * Very low-latency requirement for DBP bumping.
     */
    VERY_LOW_LATENCY,
}
enum H264PictureField {
    FRAME,
    TOP_FIELD,
    BOTTOM_FIELD,
}
enum H264PictureReference {
    /**
     * Not used for reference picture
     */
    NONE,
    /**
     * Used for short-term reference picture
     */
    SHORT_TERM,
    /**
     * Used for long-term reference picture
     */
    LONG_TERM,
}
/**
 * Reference modes: Specify the type of inter prediction to be used
 */
enum Vp9ReferenceMode {
    /**
     * Indicates that all the inter blocks use only a single reference frame
     */
    SINGLE_REFERENCE,
    /**
     * Requires all the inter blocks to use compound mode
     */
    COMPOUND_REFERENCE,
    /**
     * Allows each individual inter block to select between single and compound prediction modes
     */
    SELECT,
}
/**
 * TxMode: Specifies how the transform size is determined
 */
enum Vp9TxMode {
    /**
     * Only 4x4
     */
    ONLY_4X4,
    /**
     * Allow 8x8
     */
    ALLOW_8X8,
    /**
     * Allow 16x16
     */
    ALLOW_16X16,
    /**
     * Allow 32x32
     */
    ALLOW_32X32,
    /**
     * The choice is specified explicitly for each block
     */
    SELECT,
}
/**
 * TxSize: Specifies the transform size
 */
enum Vp9TxSize {
    /**
     * 4x4
     */
    TODO_4X4,
    /**
     * 8x8
     */
    TODO_8X8,
    /**
     * 16x16
     */
    TODO_16X16,
    /**
     * 32x32
     */
    TODO_32X32,
}
const H264_DPB_MAX_SIZE: number
const H265_DPB_MAX_SIZE: number
/**
 * Number of contexts when decoding intra_mode
 */
const VP9_BLOCK_SIZE_GROUPS: number
/**
 * Number of values for mv_classO_bit
 */
const VP9_CLASS0_SIZE: number
/**
 * Number of contexts for comp_mode
 */
const VP9_COMP_MODE_CONTEXTS: number
/**
 * Number of contexts for interp_filter
 */
const VP9_INTERP_FILTER_CONTEXTS: number
/**
 * Number of values for inter_mode
 */
const VP9_INTER_MODES: number
/**
 * Number of contexts for inter_mode
 */
const VP9_INTER_MODE_CONTEXTS: number
/**
 * Number of values for intra_mode
 */
const VP9_INTRA_MODES: number
/**
 * Number of contexts for interp_filter
 */
const VP9_IS_INTER_CONTEXTS: number
/**
 * Number of values for mv_class
 */
const VP9_MV_CLASSES: number
/**
 * Number of values that can be decoded for mv_fr
 */
const VP9_MV_FR_SIZE: number
/**
 * Number of values for partition
 */
const VP9_MV_JOINTS: number
/**
 * Maximum number of bits for decoding motion vectors
 */
const VP9_MV_OFFSET_BITS: number
/**
 * Number of contexts when decoding partition
 */
const VP9_PARTITION_CONTEXTS: number
/**
 * Number of values for partition
 */
const VP9_PARTITION_TYPES: number
/**
 * Number of contexts for single_ref and comp_ref
 */
const VP9_REF_CONTEXTS: number
/**
 * Index for loop filter segment feature
 */
const VP9_SEG_LVL_ALT_L: number
/**
 * Index for quantizer segment feature
 */
const VP9_SEG_LVL_ALT_Q: number
/**
 * Number of segment features
 */
const VP9_SEG_LVL_MAX: number
/**
 * Index for reference frame segment feature
 */
const VP9_SEG_LVL_REF_FRAME: number
/**
 * Index for skip segment feature
 */
const VP9_SEG_SEG_LVL_SKIP: number
/**
 * Number of contexts for decoding skip
 */
const VP9_SKIP_CONTEXTS: number
/**
 * Number of contexts for interp_filter
 */
const VP9_SWITCHABLE_FILTERS: number
/**
 * Number of values for tx_mode
 */
const VP9_TX_MODES: number
/**
 * Number of values for tx_size
 */
const VP9_TX_SIZES: number
/**
 * Number of contexts for transform size
 */
const VP9_TX_SIZE_CONTEXTS: number
function vp9GetAcQuant(qindex: number, deltaQAc: number, bitDepth: number): number
function vp9GetDcQuant(qindex: number, deltaQDc: number, bitDepth: number): number
function vp9GetQindex(segmentationParams: Vp9SegmentationParams, quantizationParams: Vp9QuantizationParams, segmentId: number): number
function vp9SegFeatureActive(params: Vp9SegmentationParams, segmentId: number, feature: number): boolean
interface AV1Decoder_ConstructProps extends GstVideo.VideoDecoder_ConstructProps {
}
class AV1Decoder {
    /* Properties of GstVideo-1.0.GstVideo.VideoDecoder */
    /**
     * GstVideoDecoderRequestSyncPointFlags to use for the automatically
     * requested sync points if `automatic-request-sync-points` is enabled.
     */
    automaticRequestSyncPointFlags: GstVideo.VideoDecoderRequestSyncPointFlags
    /**
     * If set to %TRUE the decoder will automatically request sync points when
     * it seems like a good idea, e.g. if the first frames are not key frames or
     * if packet loss was reported by upstream.
     */
    automaticRequestSyncPoints: boolean
    /**
     * If set to %TRUE the decoder will discard frames that are marked as
     * corrupted instead of outputting them.
     */
    discardCorruptedFrames: boolean
    /**
     * Maximum number of tolerated consecutive decode errors. See
     * gst_video_decoder_set_max_errors() for more details.
     */
    maxErrors: number
    /**
     * Minimum interval between force-key-unit events sent upstream by the
     * decoder. Setting this to 0 will cause every event to be handled, setting
     * this to %GST_CLOCK_TIME_NONE will cause every event to be ignored.
     * 
     * See gst_video_event_new_upstream_force_key_unit() for more details about
     * force-key-unit events.
     */
    minForceKeyUnitInterval: number
    /**
     * If set to %TRUE the decoder will handle QoS events received
     * from downstream elements.
     * This includes dropping output frames which are detected as late
     * using the metrics reported by those events.
     */
    qos: boolean
    /* Fields of Gst-1.0.Gst.Element */
    object: Gst.Object
    /**
     * Used to serialize execution of gst_element_set_state()
     */
    stateLock: GLib.RecMutex
    /**
     * Used to signal completion of a state change
     */
    stateCond: GLib.Cond
    /**
     * Used to detect concurrent execution of
     * gst_element_set_state() and gst_element_get_state()
     */
    stateCookie: number
    /**
     * the target state of an element as set by the application
     */
    targetState: Gst.State
    /**
     * the current state of an element
     */
    currentState: Gst.State
    /**
     * the next state of an element, can be #GST_STATE_VOID_PENDING if
     * the element is in the correct state.
     */
    nextState: Gst.State
    /**
     * the final state the element should go to, can be
     * #GST_STATE_VOID_PENDING if the element is in the correct state
     */
    pendingState: Gst.State
    /**
     * the last return value of an element state change
     */
    lastReturn: Gst.StateChangeReturn
    /**
     * the bus of the element. This bus is provided to the element by the
     * parent element or the application. A #GstPipeline has a bus of its own.
     */
    bus: Gst.Bus
    /**
     * the clock of the element. This clock is usually provided to the
     * element by the toplevel #GstPipeline.
     */
    clock: Gst.Clock
    /**
     * the time of the clock right before the element is set to
     * PLAYING. Subtracting `base_time` from the current clock time in the PLAYING
     * state will yield the running_time against the clock.
     */
    baseTime: Gst.ClockTimeDiff
    /**
     * the running_time of the last PAUSED state
     */
    startTime: Gst.ClockTime
    /**
     * number of pads of the element, includes both source and sink pads.
     */
    numpads: number
    /**
     * list of pads
     */
    pads: Gst.Pad[]
    /**
     * number of source pads of the element.
     */
    numsrcpads: number
    /**
     * list of source pads
     */
    srcpads: Gst.Pad[]
    /**
     * number of sink pads of the element.
     */
    numsinkpads: number
    /**
     * list of sink pads
     */
    sinkpads: Gst.Pad[]
    /**
     * updated whenever the a pad is added or removed
     */
    padsCookie: number
    /**
     * list of contexts
     */
    contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    /**
     * object LOCK
     */
    lock: GLib.Mutex
    /**
     * The name of the object
     */
    name: string
    /**
     * this object's parent, weak ref
     */
    parent: Gst.Object
    /**
     * flags for this object
     */
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstVideo-1.0.GstVideo.VideoDecoder */
    /**
     * Removes next `n_bytes` of input data and adds it to currently parsed frame.
     * @param nBytes the number of bytes to add
     */
    addToFrame(nBytes: number): void
    /**
     * Helper function that allocates a buffer to hold a video frame for `decoder'`s
     * current #GstVideoCodecState.
     * 
     * You should use gst_video_decoder_allocate_output_frame() instead of this
     * function, if possible at all.
     */
    allocateOutputBuffer(): Gst.Buffer
    /**
     * Helper function that allocates a buffer to hold a video frame for `decoder'`s
     * current #GstVideoCodecState.  Subclass should already have configured video
     * state and set src pad caps.
     * 
     * The buffer allocated here is owned by the frame and you should only
     * keep references to the frame, not the buffer.
     * @param frame a #GstVideoCodecFrame
     */
    allocateOutputFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * Same as #gst_video_decoder_allocate_output_frame except it allows passing
     * #GstBufferPoolAcquireParams to the sub call gst_buffer_pool_acquire_buffer.
     * @param frame a #GstVideoCodecFrame
     * @param params a #GstBufferPoolAcquireParams
     */
    allocateOutputFrameWithParams(frame: GstVideo.VideoCodecFrame, params: Gst.BufferPoolAcquireParams): Gst.FlowReturn
    /**
     * Similar to gst_video_decoder_finish_frame(), but drops `frame` in any
     * case and posts a QoS message with the frame's details on the bus.
     * In any case, the frame is considered finished and released.
     * @param frame the #GstVideoCodecFrame to drop
     */
    dropFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * Drops input data.
     * The frame is not considered finished until the whole frame
     * is finished or dropped by the subclass.
     * @param frame the #GstVideoCodecFrame
     */
    dropSubframe(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * `frame` should have a valid decoded data buffer, whose metadata fields
     * are then appropriately set according to frame data and pushed downstream.
     * If no output data is provided, `frame` is considered skipped.
     * In any case, the frame is considered finished and released.
     * 
     * After calling this function the output buffer of the frame is to be
     * considered read-only. This function will also change the metadata
     * of the buffer.
     * @param frame a decoded #GstVideoCodecFrame
     */
    finishFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * Indicate that a subframe has been finished to be decoded
     * by the subclass. This method should be called for all subframes
     * except the last subframe where `gst_video_decoder_finish_frame`
     * should be called instead.
     * @param frame the #GstVideoCodecFrame
     */
    finishSubframe(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * Lets #GstVideoDecoder sub-classes to know the memory `allocator`
     * used by the base class and its `params`.
     * 
     * Unref the `allocator` after use it.
     */
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    getBufferPool(): Gst.BufferPool
    getEstimateRate(): number
    /**
     * Get a pending unfinished #GstVideoCodecFrame
     * @param frameNumber system_frame_number of a frame
     */
    getFrame(frameNumber: number): GstVideo.VideoCodecFrame
    /**
     * Get all pending unfinished #GstVideoCodecFrame
     */
    getFrames(): GstVideo.VideoCodecFrame[]
    /**
     * Queries the number of the last subframe received by
     * the decoder baseclass in the `frame`.
     * @param frame the #GstVideoCodecFrame to update
     */
    getInputSubframeIndex(frame: GstVideo.VideoCodecFrame): number
    /**
     * Query the configured decoder latency. Results will be returned via
     * `min_latency` and `max_latency`.
     */
    getLatency(): [ /* minLatency */ Gst.ClockTime | null, /* maxLatency */ Gst.ClockTime | null ]
    /**
     * Determines maximum possible decoding time for `frame` that will
     * allow it to decode and arrive in time (as determined by QoS events).
     * In particular, a negative result means decoding in time is no longer possible
     * and should therefore occur as soon/skippy as possible.
     * @param frame a #GstVideoCodecFrame
     */
    getMaxDecodeTime(frame: GstVideo.VideoCodecFrame): Gst.ClockTimeDiff
    getMaxErrors(): number
    /**
     * Queries decoder required format handling.
     */
    getNeedsFormat(): boolean
    /**
     * Queries if the decoder requires a sync point before it starts outputting
     * data in the beginning.
     */
    getNeedsSyncPoint(): boolean
    /**
     * Get the oldest pending unfinished #GstVideoCodecFrame
     */
    getOldestFrame(): GstVideo.VideoCodecFrame
    /**
     * Get the #GstVideoCodecState currently describing the output stream.
     */
    getOutputState(): GstVideo.VideoCodecState
    /**
     * Queries whether input data is considered packetized or not by the
     * base class.
     */
    getPacketized(): boolean
    /**
     * Returns the number of bytes previously added to the current frame
     * by calling gst_video_decoder_add_to_frame().
     */
    getPendingFrameSize(): number
    /**
     * Queries the number of subframes in the frame processed by
     * the decoder baseclass.
     * @param frame the #GstVideoCodecFrame to update
     */
    getProcessedSubframeIndex(frame: GstVideo.VideoCodecFrame): number
    getQosProportion(): number
    /**
     * Queries whether input data is considered as subframes or not by the
     * base class. If FALSE, each input buffer will be considered as a full
     * frame.
     */
    getSubframeMode(): boolean
    /**
     * Gathers all data collected for currently parsed frame, gathers corresponding
     * metadata and passes it along for further processing, i.e. `handle_frame`.
     */
    haveFrame(): Gst.FlowReturn
    /**
     * Indicates that the last subframe has been processed by the decoder
     * in `frame`. This will release the current frame in video decoder
     * allowing to receive new frames from upstream elements. This method
     * must be called in the subclass `handle_frame` callback.
     * @param frame the #GstVideoCodecFrame to update
     */
    haveLastSubframe(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * Sets the audio decoder tags and how they should be merged with any
     * upstream stream tags. This will override any tags previously-set
     * with gst_audio_decoder_merge_tags().
     * 
     * Note that this is provided for convenience, and the subclass is
     * not required to use this and can still do tag handling on its own.
     * 
     * MT safe.
     * @param tags a #GstTagList to merge, or NULL to unset     previously-set tags
     * @param mode the #GstTagMergeMode to use, usually #GST_TAG_MERGE_REPLACE
     */
    mergeTags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    /**
     * Negotiate with downstream elements to currently configured #GstVideoCodecState.
     * Unmark GST_PAD_FLAG_NEED_RECONFIGURE in any case. But mark it again if
     * negotiate fails.
     */
    negotiate(): boolean
    /**
     * Returns caps that express `caps` (or sink template caps if `caps` == NULL)
     * restricted to resolution/format/... combinations supported by downstream
     * elements.
     * @param caps initial caps
     * @param filter filter caps
     */
    proxyGetcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps
    /**
     * Similar to gst_video_decoder_drop_frame(), but simply releases `frame`
     * without any processing other than removing it from list of pending frames,
     * after which it is considered finished and released.
     * @param frame the #GstVideoCodecFrame to release
     */
    releaseFrame(frame: GstVideo.VideoCodecFrame): void
    /**
     * Allows the #GstVideoDecoder subclass to request from the base class that
     * a new sync should be requested from upstream, and that `frame` was the frame
     * when the subclass noticed that a new sync point is required. A reason for
     * the subclass to do this could be missing reference frames, for example.
     * 
     * The base class will then request a new sync point from upstream as long as
     * the time that passed since the last one is exceeding
     * #GstVideoDecoder:min-force-key-unit-interval.
     * 
     * The subclass can signal via `flags` how the frames until the next sync point
     * should be handled:
     * 
     *   * If %GST_VIDEO_DECODER_REQUEST_SYNC_POINT_DISCARD_INPUT is selected then
     *     all following input frames until the next sync point are discarded.
     *     This can be useful if the lack of a sync point will prevent all further
     *     decoding and the decoder implementation is not very robust in handling
     *     missing references frames.
     *   * If %GST_VIDEO_DECODER_REQUEST_SYNC_POINT_CORRUPT_OUTPUT is selected
     *     then all output frames following `frame` are marked as corrupted via
     *     %GST_BUFFER_FLAG_CORRUPTED. Corrupted frames can be automatically
     *     dropped by the base class, see #GstVideoDecoder:discard-corrupted-frames.
     *     Subclasses can manually mark frames as corrupted via %GST_VIDEO_CODEC_FRAME_FLAG_CORRUPTED
     *     before calling gst_video_decoder_finish_frame().
     * @param frame a #GstVideoCodecFrame
     * @param flags #GstVideoDecoderRequestSyncPointFlags
     */
    requestSyncPoint(frame: GstVideo.VideoCodecFrame, flags: GstVideo.VideoDecoderRequestSyncPointFlags): void
    /**
     * Allows baseclass to perform byte to time estimated conversion.
     * @param enabled whether to enable byte to time conversion
     */
    setEstimateRate(enabled: boolean): void
    /**
     * Same as #gst_video_decoder_set_output_state() but also allows you to also set
     * the interlacing mode.
     * @param fmt a #GstVideoFormat
     * @param interlaceMode A #GstVideoInterlaceMode
     * @param width The width in pixels
     * @param height The height in pixels
     * @param reference An optional reference #GstVideoCodecState
     */
    setInterlacedOutputState(fmt: GstVideo.VideoFormat, interlaceMode: GstVideo.VideoInterlaceMode, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    /**
     * Lets #GstVideoDecoder sub-classes tell the baseclass what the decoder
     * latency is. Will also post a LATENCY message on the bus so the pipeline
     * can reconfigure its global latency.
     * @param minLatency minimum latency
     * @param maxLatency maximum latency
     */
    setLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): void
    /**
     * Sets numbers of tolerated decoder errors, where a tolerated one is then only
     * warned about, but more than tolerated will lead to fatal error.  You can set
     * -1 for never returning fatal errors. Default is set to
     * GST_VIDEO_DECODER_MAX_ERRORS.
     * 
     * The '-1' option was added in 1.4
     * @param num max tolerated errors
     */
    setMaxErrors(num: number): void
    /**
     * Configures decoder format needs.  If enabled, subclass needs to be
     * negotiated with format caps before it can process any data.  It will then
     * never be handed any data before it has been configured.
     * Otherwise, it might be handed data without having been configured and
     * is then expected being able to do so either by default
     * or based on the input data.
     * @param enabled new state
     */
    setNeedsFormat(enabled: boolean): void
    /**
     * Configures whether the decoder requires a sync point before it starts
     * outputting data in the beginning. If enabled, the base class will discard
     * all non-sync point frames in the beginning and after a flush and does not
     * pass it to the subclass.
     * 
     * If the first frame is not a sync point, the base class will request a sync
     * point via the force-key-unit event.
     * @param enabled new state
     */
    setNeedsSyncPoint(enabled: boolean): void
    /**
     * Creates a new #GstVideoCodecState with the specified `fmt,` `width` and `height`
     * as the output state for the decoder.
     * Any previously set output state on `decoder` will be replaced by the newly
     * created one.
     * 
     * If the subclass wishes to copy over existing fields (like pixel aspec ratio,
     * or framerate) from an existing #GstVideoCodecState, it can be provided as a
     * `reference`.
     * 
     * If the subclass wishes to override some fields from the output state (like
     * pixel-aspect-ratio or framerate) it can do so on the returned #GstVideoCodecState.
     * 
     * The new output state will only take effect (set on pads and buffers) starting
     * from the next call to #gst_video_decoder_finish_frame().
     * @param fmt a #GstVideoFormat
     * @param width The width in pixels
     * @param height The height in pixels
     * @param reference An optional reference #GstVideoCodecState
     */
    setOutputState(fmt: GstVideo.VideoFormat, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    /**
     * Allows baseclass to consider input data as packetized or not. If the
     * input is packetized, then the `parse` method will not be called.
     * @param packetized whether the input data should be considered as packetized.
     */
    setPacketized(packetized: boolean): void
    /**
     * If this is set to TRUE, it informs the base class that the subclass
     * can receive the data at a granularity lower than one frame.
     * 
     * Note that in this mode, the subclass has two options. It can either
     * require the presence of a GST_VIDEO_BUFFER_FLAG_MARKER to mark the
     * end of a frame. Or it can operate in such a way that it will decode
     * a single frame at a time. In this second case, every buffer that
     * arrives to the element is considered part of the same frame until
     * gst_video_decoder_finish_frame() is called.
     * 
     * In either case, the same #GstVideoCodecFrame will be passed to the
     * GstVideoDecoderClass:handle_frame vmethod repeatedly with a
     * different GstVideoCodecFrame:input_buffer every time until the end of the
     * frame has been signaled using either method.
     * This method must be called during the decoder subclass `set_format` call.
     * @param subframeMode whether the input data should be considered as subframes.
     */
    setSubframeMode(subframeMode: boolean): void
    /**
     * Lets #GstVideoDecoder sub-classes decide if they want the sink pad
     * to use the default pad query handler to reply to accept-caps queries.
     * 
     * By setting this to true it is possible to further customize the default
     * handler with %GST_PAD_SET_ACCEPT_INTERSECT and
     * %GST_PAD_SET_ACCEPT_TEMPLATE
     * @param use if the default pad accept-caps query handling should be used
     */
    setUseDefaultPadAcceptcaps(use: boolean): void
    /* Methods of Gst-1.0.Gst.Element */
    /**
     * Abort the state change of the element. This function is used
     * by elements that do asynchronous state changes and find out
     * something is wrong.
     * 
     * This function should be called with the STATE_LOCK held.
     * 
     * MT safe.
     */
    abortState(): void
    /**
     * Adds a pad (link point) to `element`. `pad'`s parent will be set to `element;`
     * see gst_object_set_parent() for refcounting information.
     * 
     * Pads are automatically activated when added in the PAUSED or PLAYING
     * state.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-added signal on the element.
     * @param pad the #GstPad to add to the element.
     */
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    /**
     * Calls `func` from another thread and passes `user_data` to it. This is to be
     * used for cases when a state change has to be performed from a streaming
     * thread, directly via gst_element_set_state() or indirectly e.g. via SEEK
     * events.
     * 
     * Calling those functions directly from the streaming thread will cause
     * deadlocks in many situations, as they might involve waiting for the
     * streaming thread to shut down from this very streaming thread.
     * 
     * MT safe.
     * @param func Function to call asynchronously from another thread
     */
    callAsync(func: Gst.ElementCallAsyncFunc): void
    /**
     * Perform `transition` on `element`.
     * 
     * This function must be called with STATE_LOCK held and is mainly used
     * internally.
     * @param transition the requested transition
     */
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    /**
     * Commit the state change of the element and proceed to the next
     * pending state if any. This function is used
     * by elements that do asynchronous state changes.
     * The core will normally call this method automatically when an
     * element returned %GST_STATE_CHANGE_SUCCESS from the state change function.
     * 
     * If after calling this method the element still has not reached
     * the pending state, the next state change is performed.
     * 
     * This method is used internally and should normally not be called by plugins
     * or applications.
     * 
     * This function must be called with STATE_LOCK held.
     * @param ret The previous state return value
     */
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    /**
     * Creates a pad for each pad template that is always available.
     * This function is only useful during object initialization of
     * subclasses of #GstElement.
     */
    createAllPads(): void
    /**
     * Call `func` with `user_data` for each of `element'`s pads. `func` will be called
     * exactly once for each pad that exists at the time of this call, unless
     * one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new pads are added or pads are removed
     * while pads are being iterated, this will not be taken into account until
     * next time this function is used.
     * @param func function to call for each pad
     */
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s sink pads. `func` will be
     * called exactly once for each sink pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new sink pads are added or sink pads
     * are removed while the sink pads are being iterated, this will not be taken
     * into account until next time this function is used.
     * @param func function to call for each sink pad
     */
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s source pads. `func` will be
     * called exactly once for each source pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new source pads are added or source pads
     * are removed while the source pads are being iterated, this will not be taken
     * into account until next time this function is used.
     * @param func function to call for each source pad
     */
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Returns the base time of the element. The base time is the
     * absolute time of the clock when this element was last put to
     * PLAYING. Subtracting the base time from the clock time gives
     * the running time of the element.
     */
    getBaseTime(): Gst.ClockTime
    /**
     * Returns the bus of the element. Note that only a #GstPipeline will provide a
     * bus for the application.
     */
    getBus(): Gst.Bus | null
    /**
     * Gets the currently configured clock of the element. This is the clock as was
     * last set with gst_element_set_clock().
     * 
     * Elements in a pipeline will only have their clock set when the
     * pipeline is in the PLAYING state.
     */
    getClock(): Gst.Clock | null
    /**
     * Looks for an unlinked pad to which the given pad can link. It is not
     * guaranteed that linking the pads will work, though it should work in most
     * cases.
     * 
     * This function will first attempt to find a compatible unlinked ALWAYS pad,
     * and if none can be found, it will request a compatible REQUEST pad by looking
     * at the templates of `element`.
     * @param pad the #GstPad to find a compatible one for.
     * @param caps the #GstCaps to use as a filter.
     */
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad template from `element` that is compatible with `compattempl`.
     * Pads from compatible templates can be linked together.
     * @param compattempl the #GstPadTemplate to find a compatible     template for
     */
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * 
     * MT safe.
     * @param contextType a name of a context to retrieve
     */
    getContext(contextType: string): Gst.Context | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * @param contextType a name of a context to retrieve
     */
    getContextUnlocked(contextType: string): Gst.Context | null
    /**
     * Gets the contexts set on the element.
     * 
     * MT safe.
     */
    getContexts(): Gst.Context[]
    /**
     * Returns the current clock time of the element, as in, the time of the
     * element's clock, or GST_CLOCK_TIME_NONE if there is no clock.
     */
    getCurrentClockTime(): Gst.ClockTime
    /**
     * Returns the running time of the element. The running time is the
     * element's clock time minus its base time. Will return GST_CLOCK_TIME_NONE
     * if the element has no clock, or if its base time has not been set.
     */
    getCurrentRunningTime(): Gst.ClockTime
    /**
     * Retrieves the factory that was used to create this element.
     */
    getFactory(): Gst.ElementFactory | null
    /**
     * Get metadata with `key` in `klass`.
     * @param key the key to get
     */
    getMetadata(key: string): string
    /**
     * Retrieves a padtemplate from `element` with the given name.
     * @param name the name of the #GstPadTemplate to get.
     */
    getPadTemplate(name: string): Gst.PadTemplate | null
    /**
     * Retrieves a list of the pad templates associated with `element`. The
     * list must not be modified by the calling code.
     */
    getPadTemplateList(): Gst.PadTemplate[]
    /**
     * The name of this function is confusing to people learning GStreamer.
     * gst_element_request_pad_simple() aims at making it more explicit it is
     * a simplified gst_element_request_pad().
     * @param name the name of the request #GstPad to retrieve.
     */
    getRequestPad(name: string): Gst.Pad | null
    /**
     * Returns the start time of the element. The start time is the
     * running time of the clock when this element was last put to PAUSED.
     * 
     * Usually the start_time is managed by a toplevel element such as
     * #GstPipeline.
     * 
     * MT safe.
     */
    getStartTime(): Gst.ClockTime
    /**
     * Gets the state of the element.
     * 
     * For elements that performed an ASYNC state change, as reported by
     * gst_element_set_state(), this function will block up to the
     * specified timeout value for the state change to complete.
     * If the element completes the state change or goes into
     * an error, this function returns immediately with a return value of
     * %GST_STATE_CHANGE_SUCCESS or %GST_STATE_CHANGE_FAILURE respectively.
     * 
     * For elements that did not return %GST_STATE_CHANGE_ASYNC, this function
     * returns the current and pending state immediately.
     * 
     * This function returns %GST_STATE_CHANGE_NO_PREROLL if the element
     * successfully changed its state but is not able to provide data yet.
     * This mostly happens for live sources that only produce data in
     * %GST_STATE_PLAYING. While the state change return is equivalent to
     * %GST_STATE_CHANGE_SUCCESS, it is returned to the application to signal that
     * some sink elements might not be able to complete their state change because
     * an element is not producing data to complete the preroll. When setting the
     * element to playing, the preroll will complete and playback will start.
     * @param timeout a #GstClockTime to specify the timeout for an async           state change or %GST_CLOCK_TIME_NONE for infinite timeout.
     */
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    /**
     * Retrieves a pad from `element` by name. This version only retrieves
     * already-existing (i.e. 'static') pads.
     * @param name the name of the static #GstPad to retrieve.
     */
    getStaticPad(name: string): Gst.Pad | null
    /**
     * Checks if the state of an element is locked.
     * If the state of an element is locked, state changes of the parent don't
     * affect the element.
     * This way you can leave currently unused elements inside bins. Just lock their
     * state before changing the state from #GST_STATE_NULL.
     * 
     * MT safe.
     */
    isLockedState(): boolean
    /**
     * Retrieves an iterator of `element'`s pads. The iterator should
     * be freed after usage. Also more specialized iterators exists such as
     * gst_element_iterate_src_pads() or gst_element_iterate_sink_pads().
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iteratePads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s sink pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterateSinkPads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s source pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterateSrcPads(): Gst.Iterator
    /**
     * Links `src` to `dest`. The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * Such pads need to be released manually when unlinking.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     * @param dest the #GstElement containing the destination pad.
     */
    link(dest: Gst.Element): boolean
    /**
     * Links `src` to `dest` using the given caps as filtercaps.
     * The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     * @param dest the #GstElement containing the destination pad.
     * @param filter the #GstCaps to filter the link,     or %NULL for no filter.
     */
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element, or %NULL for any pad.
     */
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    /**
     * Links the two named pads of the source and destination elements. Side effect
     * is that if one of the pads has no parent, it becomes a child of the parent of
     * the other element. If they have different parents, the link fails. If `caps`
     * is not %NULL, makes sure that the caps of the link is a subset of `caps`.
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element     or %NULL for any pad.
     * @param filter the #GstCaps to filter the link,     or %NULL for no filter.
     */
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     * 
     * Calling gst_element_link_pads_full() with `flags` == %GST_PAD_LINK_CHECK_DEFAULT
     * is the same as calling gst_element_link_pads() and the recommended way of
     * linking pads with safety checks applied.
     * 
     * This is a convenience function for gst_pad_link_full().
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element, or %NULL for any pad.
     * @param flags the #GstPadLinkCheck to be performed when linking pads.
     */
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    /**
     * Brings the element to the lost state. The current state of the
     * element is copied to the pending state so that any call to
     * gst_element_get_state() will return %GST_STATE_CHANGE_ASYNC.
     * 
     * An ASYNC_START message is posted. If the element was PLAYING, it will
     * go to PAUSED. The element will be restored to its PLAYING state by
     * the parent pipeline when it prerolls again.
     * 
     * This is mostly used for elements that lost their preroll buffer
     * in the %GST_STATE_PAUSED or %GST_STATE_PLAYING state after a flush,
     * they will go to their pending state again when a new preroll buffer is
     * queued. This function can only be called when the element is currently
     * not in error or an async state change.
     * 
     * This function is used internally and should normally not be called from
     * plugins or applications.
     */
    lostState(): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     * 
     * MT safe.
     * @param type the #GstMessageType
     * @param domain the GStreamer GError domain this message belongs to
     * @param code the GError code belonging to the domain
     * @param text an allocated text string to be used            as a replacement for the default message connected to code,            or %NULL
     * @param debug an allocated debug message to be            used as a replacement for the default debugging information,            or %NULL
     * @param file the source code file where the error was generated
     * @param function_ the source code function where the error was generated
     * @param line the source code line where the error was generated
     */
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     * @param type the #GstMessageType
     * @param domain the GStreamer GError domain this message belongs to
     * @param code the GError code belonging to the domain
     * @param text an allocated text string to be used            as a replacement for the default message connected to code,            or %NULL
     * @param debug an allocated debug message to be            used as a replacement for the default debugging information,            or %NULL
     * @param file the source code file where the error was generated
     * @param function_ the source code function where the error was generated
     * @param line the source code line where the error was generated
     * @param structure optional details structure
     */
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    /**
     * Use this function to signal that the element does not expect any more pads
     * to show up in the current pipeline. This function should be called whenever
     * pads have been added by the element itself. Elements with #GST_PAD_SOMETIMES
     * pad templates use this in combination with autopluggers to figure out that
     * the element is done initializing its pads.
     * 
     * This function emits the #GstElement::no-more-pads signal.
     * 
     * MT safe.
     */
    noMorePads(): void
    /**
     * Post a message on the element's #GstBus. This function takes ownership of the
     * message; if you want to access the message after this call, you should add an
     * additional reference before calling.
     * @param message a #GstMessage to post
     */
    postMessage(message: Gst.Message): boolean
    /**
     * Get the clock provided by the given element.
     * > An element is only required to provide a clock in the PAUSED
     * > state. Some elements can provide a clock in other states.
     */
    provideClock(): Gst.Clock | null
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @param query the #GstQuery.
     */
    query(query: Gst.Query): boolean
    /**
     * Queries an element to convert `src_val` in `src_format` to `dest_format`.
     * @param srcFormat a #GstFormat to convert from.
     * @param srcVal a value to convert.
     * @param destFormat the #GstFormat to convert to.
     */
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * total stream duration in nanoseconds. This query will only work once the
     * pipeline is prerolled (i.e. reached PAUSED or PLAYING state). The application
     * will receive an ASYNC_DONE message on the pipeline bus when that is the case.
     * 
     * If the duration changes for some reason, you will get a DURATION_CHANGED
     * message on the pipeline bus, in which case you should re-query the duration
     * using this function.
     * @param format the #GstFormat requested
     */
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * stream position in nanoseconds. This will be a value between 0 and the
     * stream duration (if the stream duration is known). This query will usually
     * only work once the pipeline is prerolled (i.e. reached PAUSED or PLAYING
     * state). The application will receive an ASYNC_DONE message on the pipeline
     * bus when that is the case.
     * 
     * If one repeatedly calls this function one can also create a query and reuse
     * it in gst_element_query().
     * @param format the #GstFormat requested
     */
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    /**
     * Makes the element free the previously requested pad as obtained
     * with gst_element_request_pad().
     * 
     * This does not unref the pad. If the pad was created by using
     * gst_element_request_pad(), gst_element_release_request_pad() needs to be
     * followed by gst_object_unref() to free the `pad`.
     * 
     * MT safe.
     * @param pad the #GstPad to release.
     */
    releaseRequestPad(pad: Gst.Pad): void
    /**
     * Removes `pad` from `element`. `pad` will be destroyed if it has not been
     * referenced elsewhere using gst_object_unparent().
     * 
     * This function is used by plugin developers and should not be used
     * by applications. Pads that were dynamically requested from elements
     * with gst_element_request_pad() should be released with the
     * gst_element_release_request_pad() function instead.
     * 
     * Pads are not automatically deactivated so elements should perform the needed
     * steps to deactivate the pad in case this pad is removed in the PAUSED or
     * PLAYING state. See gst_pad_set_active() for more information about
     * deactivating pads.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-removed signal on the element.
     * @param pad the #GstPad to remove from the element.
     */
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    /**
     * Retrieves a request pad from the element according to the provided template.
     * Pad templates can be looked up using
     * gst_element_factory_get_static_pad_templates().
     * 
     * The pad should be released with gst_element_release_request_pad().
     * @param templ a #GstPadTemplate of which we want a pad of.
     * @param name the name of the request #GstPad to retrieve. Can be %NULL.
     * @param caps the caps of the pad we want to request. Can be %NULL.
     */
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad from the element by name (e.g. "src_\%d"). This version only
     * retrieves request pads. The pad should be released with
     * gst_element_release_request_pad().
     * 
     * This method is slower than manually getting the pad template and calling
     * gst_element_request_pad() if the pads should have a specific name (e.g.
     * `name` is "src_1" instead of "src_\%u").
     * 
     * Note that this function was introduced in GStreamer 1.20 in order to provide
     * a better name to gst_element_get_request_pad(). Prior to 1.20, users
     * should use gst_element_get_request_pad() which provides the same
     * functionality.
     * @param name the name of the request #GstPad to retrieve.
     */
    requestPadSimple(name: string): Gst.Pad | null
    /**
     * Sends a seek event to an element. See gst_event_new_seek() for the details of
     * the parameters. The seek event is sent to the element using
     * gst_element_send_event().
     * 
     * MT safe.
     * @param rate The new playback rate
     * @param format The format of the seek values
     * @param flags The optional seek flags.
     * @param startType The type and flags for the new start position
     * @param start The value of the new start position
     * @param stopType The type and flags for the new stop position
     * @param stop The value of the new stop position
     */
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
    /**
     * Simple API to perform a seek on the given element, meaning it just seeks
     * to the given position relative to the start of the stream. For more complex
     * operations like segment seeks (e.g. for looping) or changing the playback
     * rate or seeking relative to the last configured playback segment you should
     * use gst_element_seek().
     * 
     * In a completely prerolled PAUSED or PLAYING pipeline, seeking is always
     * guaranteed to return %TRUE on a seekable media type or %FALSE when the media
     * type is certainly not seekable (such as a live stream).
     * 
     * Some elements allow for seeking in the READY state, in this
     * case they will store the seek event and execute it when they are put to
     * PAUSED. If the element supports seek in READY, it will always return %TRUE when
     * it receives the event in the READY state.
     * @param format a #GstFormat to execute the seek in, such as #GST_FORMAT_TIME
     * @param seekFlags seek options; playback applications will usually want to use            GST_SEEK_FLAG_FLUSH | GST_SEEK_FLAG_KEY_UNIT here
     * @param seekPos position to seek to (relative to the start); if you are doing            a seek in #GST_FORMAT_TIME this value is in nanoseconds -            multiply with #GST_SECOND to convert seconds to nanoseconds or            with #GST_MSECOND to convert milliseconds to nanoseconds.
     */
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    /**
     * Sends an event to an element. If the element doesn't implement an
     * event handler, the event will be pushed on a random linked sink pad for
     * downstream events or a random linked source pad for upstream events.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     * 
     * MT safe.
     * @param event the #GstEvent to send to the element.
     */
    sendEvent(event: Gst.Event): boolean
    /**
     * Set the base time of an element. See gst_element_get_base_time().
     * 
     * MT safe.
     * @param time the base time to set.
     */
    setBaseTime(time: Gst.ClockTime): void
    /**
     * Sets the bus of the element. Increases the refcount on the bus.
     * For internal use only, unless you're testing elements.
     * 
     * MT safe.
     * @param bus the #GstBus to set.
     */
    setBus(bus?: Gst.Bus | null): void
    /**
     * Sets the clock for the element. This function increases the
     * refcount on the clock. Any previously set clock on the object
     * is unreffed.
     * @param clock the #GstClock to set for the element.
     */
    setClock(clock?: Gst.Clock | null): boolean
    /**
     * Sets the context of the element. Increases the refcount of the context.
     * 
     * MT safe.
     * @param context the #GstContext to set.
     */
    setContext(context: Gst.Context): void
    /**
     * Locks the state of an element, so state changes of the parent don't affect
     * this element anymore.
     * 
     * Note that this is racy if the state lock of the parent bin is not taken.
     * The parent bin might've just checked the flag in another thread and as the
     * next step proceed to change the child element's state.
     * 
     * MT safe.
     * @param lockedState %TRUE to lock the element's state
     */
    setLockedState(lockedState: boolean): boolean
    /**
     * Set the start time of an element. The start time of the element is the
     * running time of the element when it last went to the PAUSED state. In READY
     * or after a flushing seek, it is set to 0.
     * 
     * Toplevel elements like #GstPipeline will manage the start_time and
     * base_time on its children. Setting the start_time to #GST_CLOCK_TIME_NONE
     * on such a toplevel element will disable the distribution of the base_time to
     * the children and can be useful if the application manages the base_time
     * itself, for example if you want to synchronize capture from multiple
     * pipelines, and you can also ensure that the pipelines have the same clock.
     * 
     * MT safe.
     * @param time the base time to set.
     */
    setStartTime(time: Gst.ClockTime): void
    /**
     * Sets the state of the element. This function will try to set the
     * requested state by going through all the intermediary states and calling
     * the class's state change function for each.
     * 
     * This function can return #GST_STATE_CHANGE_ASYNC, in which case the
     * element will perform the remainder of the state change asynchronously in
     * another thread.
     * An application can use gst_element_get_state() to wait for the completion
     * of the state change or it can wait for a %GST_MESSAGE_ASYNC_DONE or
     * %GST_MESSAGE_STATE_CHANGED on the bus.
     * 
     * State changes to %GST_STATE_READY or %GST_STATE_NULL never return
     * #GST_STATE_CHANGE_ASYNC.
     * @param state the element's new #GstState.
     */
    setState(state: Gst.State): Gst.StateChangeReturn
    /**
     * Tries to change the state of the element to the same as its parent.
     * If this function returns %FALSE, the state of element is undefined.
     */
    syncStateWithParent(): boolean
    /**
     * Unlinks all source pads of the source element with all sink pads
     * of the sink element to which they are linked.
     * 
     * If the link has been made using gst_element_link(), it could have created an
     * requestpad, which has to be released using gst_element_release_request_pad().
     * @param dest the sink #GstElement to unlink.
     */
    unlink(dest: Gst.Element): void
    /**
     * Unlinks the two named pads of the source and destination elements.
     * 
     * This is a convenience function for gst_pad_unlink().
     * @param srcpadname the name of the #GstPad in source element.
     * @param dest a #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element.
     */
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    /**
     * Attach the #GstControlBinding to the object. If there already was a
     * #GstControlBinding for this property it will be replaced.
     * 
     * The object's reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     * @param binding the #GstControlBinding that should be used
     */
    addControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * A default error function that uses g_printerr() to display the error message
     * and the optional debug string..
     * 
     * The default handler will simply print the error string using g_print.
     * @param error the GError.
     * @param debug an additional debug information string, or %NULL
     */
    defaultError(error: GLib.Error, debug?: string | null): void
    /**
     * Gets the corresponding #GstControlBinding for the property. This should be
     * unreferenced again after use.
     * @param propertyName name of the property
     */
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    /**
     * Obtain the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * If the `object` is not under property control, this will return
     * %GST_CLOCK_TIME_NONE. This allows the element to avoid the sub-dividing.
     * 
     * The control-rate is not expected to change if the element is in
     * %GST_STATE_PAUSED or %GST_STATE_PLAYING.
     */
    getControlRate(): Gst.ClockTime
    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     * @param propertyName the name of the property to get
     * @param timestamp the time that should be processed
     * @param interval the time spacing between subsequent values
     * @param values array to put control-values in
     */
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Returns a copy of the name of `object`.
     * Caller should g_free() the return value after usage.
     * For a nameless object, this returns %NULL, which you can safely g_free()
     * as well.
     * 
     * Free-function: g_free
     */
    getName(): string | null
    /**
     * Returns the parent of `object`. This function increases the refcount
     * of the parent object so you should gst_object_unref() it after usage.
     */
    getParent(): Gst.Object | null
    /**
     * Generates a string describing the path of `object` in
     * the object hierarchy. Only useful (or used) for debugging.
     * 
     * Free-function: g_free
     */
    getPathString(): string
    /**
     * Gets the value for the given controlled property at the requested time.
     * @param propertyName the name of the property to get
     * @param timestamp the time the control-change should be read from
     */
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    /**
     * Check if the `object` has active controlled properties.
     */
    hasActiveControlBindings(): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    hasAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    hasAsAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `parent` is the parent of `object`.
     * E.g. a #GstElement can check if it owns a given #GstPad.
     * @param parent a #GstObject to check as parent
     */
    hasAsParent(parent: Gst.Object): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     */
    ref(): Gst.Object
    /**
     * Removes the corresponding #GstControlBinding. If it was the
     * last ref of the binding, it will be disposed.
     * @param binding the binding
     */
    removeControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * This function is used to disable the control bindings on a property for
     * some time, i.e. gst_object_sync_values() will do nothing for the
     * property.
     * @param propertyName property to disable
     * @param disabled boolean that specifies whether to disable the controller or not.
     */
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    /**
     * This function is used to disable all controlled properties of the `object` for
     * some time, i.e. gst_object_sync_values() will do nothing.
     * @param disabled boolean that specifies whether to disable the controller or not.
     */
    setControlBindingsDisabled(disabled: boolean): void
    /**
     * Change the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * The control-rate should not change if the element is in %GST_STATE_PAUSED or
     * %GST_STATE_PLAYING.
     * @param controlRate the new control-rate in nanoseconds.
     */
    setControlRate(controlRate: Gst.ClockTime): void
    /**
     * Sets the name of `object,` or gives `object` a guaranteed unique
     * name (if `name` is %NULL).
     * This function makes a copy of the provided name, so the caller
     * retains ownership of the name it sent.
     * @param name new name of object
     */
    setName(name?: string | null): boolean
    /**
     * Sets the parent of `object` to `parent`. The object's reference count will
     * be incremented, and any floating reference will be removed (see gst_object_ref_sink()).
     * @param parent new parent of object
     */
    setParent(parent: Gst.Object): boolean
    /**
     * Returns a suggestion for timestamps where buffers should be split
     * to get best controller results.
     */
    suggestNextSync(): Gst.ClockTime
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     * @param timestamp the time that should be processed
     */
    syncValues(timestamp: Gst.ClockTime): boolean
    /**
     * Clear the parent of `object,` removing the associated reference.
     * This function decreases the refcount of `object`.
     * 
     * MT safe. Grabs and releases `object'`s lock.
     */
    unparent(): void
    /**
     * Decrements the reference count on `object`.  If reference count hits
     * zero, destroy `object`. This function does not take the lock
     * on `object` as it relies on atomic refcounting.
     * 
     * The unref method should never be called with the LOCK held since
     * this might deadlock the dispose function.
     */
    unref(): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Signals of Gst-1.0.Gst.Element */
    /**
     * This signals that the element will not generate more dynamic pads.
     * Note that this signal will usually be emitted from the context of
     * the streaming thread.
     */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    /**
     * a new #GstPad has been added to the element. Note that this signal will
     * usually be emitted from the context of the streaming thread. Also keep in
     * mind that if you add new elements to the pipeline in the signal handler
     * you will need to set them to the desired target state with
     * gst_element_set_state() or gst_element_sync_state_with_parent().
     * @param newPad the pad that has been added
     */
    connect(sigName: "pad-added", callback: ((newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    /**
     * a #GstPad has been removed from the element
     * @param oldPad the pad that has been removed
     */
    connect(sigName: "pad-removed", callback: ((oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    /**
     * The deep notify signal is used to be notified of property changes. It is
     * typically attached to the toplevel bin to receive notifications from all
     * the elements contained in that bin.
     * @param propObject the object that originated the signal
     * @param prop the property that changed
     */
    connect(sigName: "deep-notify", callback: ((propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::automatic-request-sync-point-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-request-sync-point-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::automatic-request-sync-point-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::automatic-request-sync-point-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::automatic-request-sync-point-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::automatic-request-sync-points", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-request-sync-points", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::automatic-request-sync-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::automatic-request-sync-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::automatic-request-sync-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::discard-corrupted-frames", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard-corrupted-frames", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-force-key-unit-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-force-key-unit-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: AV1Decoder_ConstructProps)
    _init (config?: AV1Decoder_ConstructProps): void
    static $gtype: GObject.Type
}
interface H264Decoder_ConstructProps extends GstVideo.VideoDecoder_ConstructProps {
    /* Constructor properties of GstCodecs-1.0.GstCodecs.H264Decoder */
    /**
     * The compliance controls the behavior of the decoder to handle some
     * subtle cases and contexts, such as the low-latency DPB bumping or
     * mapping the baseline profile as the constrained-baseline profile,
     * etc.
     */
    compliance?: H264DecoderCompliance
}
class H264Decoder {
    /* Properties of GstCodecs-1.0.GstCodecs.H264Decoder */
    /**
     * The compliance controls the behavior of the decoder to handle some
     * subtle cases and contexts, such as the low-latency DPB bumping or
     * mapping the baseline profile as the constrained-baseline profile,
     * etc.
     */
    compliance: H264DecoderCompliance
    /* Properties of GstVideo-1.0.GstVideo.VideoDecoder */
    /**
     * GstVideoDecoderRequestSyncPointFlags to use for the automatically
     * requested sync points if `automatic-request-sync-points` is enabled.
     */
    automaticRequestSyncPointFlags: GstVideo.VideoDecoderRequestSyncPointFlags
    /**
     * If set to %TRUE the decoder will automatically request sync points when
     * it seems like a good idea, e.g. if the first frames are not key frames or
     * if packet loss was reported by upstream.
     */
    automaticRequestSyncPoints: boolean
    /**
     * If set to %TRUE the decoder will discard frames that are marked as
     * corrupted instead of outputting them.
     */
    discardCorruptedFrames: boolean
    /**
     * Maximum number of tolerated consecutive decode errors. See
     * gst_video_decoder_set_max_errors() for more details.
     */
    maxErrors: number
    /**
     * Minimum interval between force-key-unit events sent upstream by the
     * decoder. Setting this to 0 will cause every event to be handled, setting
     * this to %GST_CLOCK_TIME_NONE will cause every event to be ignored.
     * 
     * See gst_video_event_new_upstream_force_key_unit() for more details about
     * force-key-unit events.
     */
    minForceKeyUnitInterval: number
    /**
     * If set to %TRUE the decoder will handle QoS events received
     * from downstream elements.
     * This includes dropping output frames which are detected as late
     * using the metrics reported by those events.
     */
    qos: boolean
    /* Fields of Gst-1.0.Gst.Element */
    object: Gst.Object
    /**
     * Used to serialize execution of gst_element_set_state()
     */
    stateLock: GLib.RecMutex
    /**
     * Used to signal completion of a state change
     */
    stateCond: GLib.Cond
    /**
     * Used to detect concurrent execution of
     * gst_element_set_state() and gst_element_get_state()
     */
    stateCookie: number
    /**
     * the target state of an element as set by the application
     */
    targetState: Gst.State
    /**
     * the current state of an element
     */
    currentState: Gst.State
    /**
     * the next state of an element, can be #GST_STATE_VOID_PENDING if
     * the element is in the correct state.
     */
    nextState: Gst.State
    /**
     * the final state the element should go to, can be
     * #GST_STATE_VOID_PENDING if the element is in the correct state
     */
    pendingState: Gst.State
    /**
     * the last return value of an element state change
     */
    lastReturn: Gst.StateChangeReturn
    /**
     * the bus of the element. This bus is provided to the element by the
     * parent element or the application. A #GstPipeline has a bus of its own.
     */
    bus: Gst.Bus
    /**
     * the clock of the element. This clock is usually provided to the
     * element by the toplevel #GstPipeline.
     */
    clock: Gst.Clock
    /**
     * the time of the clock right before the element is set to
     * PLAYING. Subtracting `base_time` from the current clock time in the PLAYING
     * state will yield the running_time against the clock.
     */
    baseTime: Gst.ClockTimeDiff
    /**
     * the running_time of the last PAUSED state
     */
    startTime: Gst.ClockTime
    /**
     * number of pads of the element, includes both source and sink pads.
     */
    numpads: number
    /**
     * list of pads
     */
    pads: Gst.Pad[]
    /**
     * number of source pads of the element.
     */
    numsrcpads: number
    /**
     * list of source pads
     */
    srcpads: Gst.Pad[]
    /**
     * number of sink pads of the element.
     */
    numsinkpads: number
    /**
     * list of sink pads
     */
    sinkpads: Gst.Pad[]
    /**
     * updated whenever the a pad is added or removed
     */
    padsCookie: number
    /**
     * list of contexts
     */
    contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    /**
     * object LOCK
     */
    lock: GLib.Mutex
    /**
     * The name of the object
     */
    name: string
    /**
     * this object's parent, weak ref
     */
    parent: Gst.Object
    /**
     * flags for this object
     */
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstCodecs-1.0.GstCodecs.H264Decoder */
    /**
     * Retrive DPB and return a #GstH264Picture corresponding to
     * the `system_frame_number`
     * @param systemFrameNumber a target system frame number of #GstH264Picture
     */
    getPicture(systemFrameNumber: number): H264Picture
    /**
     * Called to en/disable reference picture modification process.
     * @param process whether subclass is requiring reference picture modification process
     */
    setProcessRefPicLists(process: boolean): void
    /* Methods of GstVideo-1.0.GstVideo.VideoDecoder */
    /**
     * Removes next `n_bytes` of input data and adds it to currently parsed frame.
     * @param nBytes the number of bytes to add
     */
    addToFrame(nBytes: number): void
    /**
     * Helper function that allocates a buffer to hold a video frame for `decoder'`s
     * current #GstVideoCodecState.
     * 
     * You should use gst_video_decoder_allocate_output_frame() instead of this
     * function, if possible at all.
     */
    allocateOutputBuffer(): Gst.Buffer
    /**
     * Helper function that allocates a buffer to hold a video frame for `decoder'`s
     * current #GstVideoCodecState.  Subclass should already have configured video
     * state and set src pad caps.
     * 
     * The buffer allocated here is owned by the frame and you should only
     * keep references to the frame, not the buffer.
     * @param frame a #GstVideoCodecFrame
     */
    allocateOutputFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * Same as #gst_video_decoder_allocate_output_frame except it allows passing
     * #GstBufferPoolAcquireParams to the sub call gst_buffer_pool_acquire_buffer.
     * @param frame a #GstVideoCodecFrame
     * @param params a #GstBufferPoolAcquireParams
     */
    allocateOutputFrameWithParams(frame: GstVideo.VideoCodecFrame, params: Gst.BufferPoolAcquireParams): Gst.FlowReturn
    /**
     * Similar to gst_video_decoder_finish_frame(), but drops `frame` in any
     * case and posts a QoS message with the frame's details on the bus.
     * In any case, the frame is considered finished and released.
     * @param frame the #GstVideoCodecFrame to drop
     */
    dropFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * Drops input data.
     * The frame is not considered finished until the whole frame
     * is finished or dropped by the subclass.
     * @param frame the #GstVideoCodecFrame
     */
    dropSubframe(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * `frame` should have a valid decoded data buffer, whose metadata fields
     * are then appropriately set according to frame data and pushed downstream.
     * If no output data is provided, `frame` is considered skipped.
     * In any case, the frame is considered finished and released.
     * 
     * After calling this function the output buffer of the frame is to be
     * considered read-only. This function will also change the metadata
     * of the buffer.
     * @param frame a decoded #GstVideoCodecFrame
     */
    finishFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * Indicate that a subframe has been finished to be decoded
     * by the subclass. This method should be called for all subframes
     * except the last subframe where `gst_video_decoder_finish_frame`
     * should be called instead.
     * @param frame the #GstVideoCodecFrame
     */
    finishSubframe(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * Lets #GstVideoDecoder sub-classes to know the memory `allocator`
     * used by the base class and its `params`.
     * 
     * Unref the `allocator` after use it.
     */
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    getBufferPool(): Gst.BufferPool
    getEstimateRate(): number
    /**
     * Get a pending unfinished #GstVideoCodecFrame
     * @param frameNumber system_frame_number of a frame
     */
    getFrame(frameNumber: number): GstVideo.VideoCodecFrame
    /**
     * Get all pending unfinished #GstVideoCodecFrame
     */
    getFrames(): GstVideo.VideoCodecFrame[]
    /**
     * Queries the number of the last subframe received by
     * the decoder baseclass in the `frame`.
     * @param frame the #GstVideoCodecFrame to update
     */
    getInputSubframeIndex(frame: GstVideo.VideoCodecFrame): number
    /**
     * Query the configured decoder latency. Results will be returned via
     * `min_latency` and `max_latency`.
     */
    getLatency(): [ /* minLatency */ Gst.ClockTime | null, /* maxLatency */ Gst.ClockTime | null ]
    /**
     * Determines maximum possible decoding time for `frame` that will
     * allow it to decode and arrive in time (as determined by QoS events).
     * In particular, a negative result means decoding in time is no longer possible
     * and should therefore occur as soon/skippy as possible.
     * @param frame a #GstVideoCodecFrame
     */
    getMaxDecodeTime(frame: GstVideo.VideoCodecFrame): Gst.ClockTimeDiff
    getMaxErrors(): number
    /**
     * Queries decoder required format handling.
     */
    getNeedsFormat(): boolean
    /**
     * Queries if the decoder requires a sync point before it starts outputting
     * data in the beginning.
     */
    getNeedsSyncPoint(): boolean
    /**
     * Get the oldest pending unfinished #GstVideoCodecFrame
     */
    getOldestFrame(): GstVideo.VideoCodecFrame
    /**
     * Get the #GstVideoCodecState currently describing the output stream.
     */
    getOutputState(): GstVideo.VideoCodecState
    /**
     * Queries whether input data is considered packetized or not by the
     * base class.
     */
    getPacketized(): boolean
    /**
     * Returns the number of bytes previously added to the current frame
     * by calling gst_video_decoder_add_to_frame().
     */
    getPendingFrameSize(): number
    /**
     * Queries the number of subframes in the frame processed by
     * the decoder baseclass.
     * @param frame the #GstVideoCodecFrame to update
     */
    getProcessedSubframeIndex(frame: GstVideo.VideoCodecFrame): number
    getQosProportion(): number
    /**
     * Queries whether input data is considered as subframes or not by the
     * base class. If FALSE, each input buffer will be considered as a full
     * frame.
     */
    getSubframeMode(): boolean
    /**
     * Gathers all data collected for currently parsed frame, gathers corresponding
     * metadata and passes it along for further processing, i.e. `handle_frame`.
     */
    haveFrame(): Gst.FlowReturn
    /**
     * Indicates that the last subframe has been processed by the decoder
     * in `frame`. This will release the current frame in video decoder
     * allowing to receive new frames from upstream elements. This method
     * must be called in the subclass `handle_frame` callback.
     * @param frame the #GstVideoCodecFrame to update
     */
    haveLastSubframe(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * Sets the audio decoder tags and how they should be merged with any
     * upstream stream tags. This will override any tags previously-set
     * with gst_audio_decoder_merge_tags().
     * 
     * Note that this is provided for convenience, and the subclass is
     * not required to use this and can still do tag handling on its own.
     * 
     * MT safe.
     * @param tags a #GstTagList to merge, or NULL to unset     previously-set tags
     * @param mode the #GstTagMergeMode to use, usually #GST_TAG_MERGE_REPLACE
     */
    mergeTags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    /**
     * Negotiate with downstream elements to currently configured #GstVideoCodecState.
     * Unmark GST_PAD_FLAG_NEED_RECONFIGURE in any case. But mark it again if
     * negotiate fails.
     */
    negotiate(): boolean
    /**
     * Returns caps that express `caps` (or sink template caps if `caps` == NULL)
     * restricted to resolution/format/... combinations supported by downstream
     * elements.
     * @param caps initial caps
     * @param filter filter caps
     */
    proxyGetcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps
    /**
     * Similar to gst_video_decoder_drop_frame(), but simply releases `frame`
     * without any processing other than removing it from list of pending frames,
     * after which it is considered finished and released.
     * @param frame the #GstVideoCodecFrame to release
     */
    releaseFrame(frame: GstVideo.VideoCodecFrame): void
    /**
     * Allows the #GstVideoDecoder subclass to request from the base class that
     * a new sync should be requested from upstream, and that `frame` was the frame
     * when the subclass noticed that a new sync point is required. A reason for
     * the subclass to do this could be missing reference frames, for example.
     * 
     * The base class will then request a new sync point from upstream as long as
     * the time that passed since the last one is exceeding
     * #GstVideoDecoder:min-force-key-unit-interval.
     * 
     * The subclass can signal via `flags` how the frames until the next sync point
     * should be handled:
     * 
     *   * If %GST_VIDEO_DECODER_REQUEST_SYNC_POINT_DISCARD_INPUT is selected then
     *     all following input frames until the next sync point are discarded.
     *     This can be useful if the lack of a sync point will prevent all further
     *     decoding and the decoder implementation is not very robust in handling
     *     missing references frames.
     *   * If %GST_VIDEO_DECODER_REQUEST_SYNC_POINT_CORRUPT_OUTPUT is selected
     *     then all output frames following `frame` are marked as corrupted via
     *     %GST_BUFFER_FLAG_CORRUPTED. Corrupted frames can be automatically
     *     dropped by the base class, see #GstVideoDecoder:discard-corrupted-frames.
     *     Subclasses can manually mark frames as corrupted via %GST_VIDEO_CODEC_FRAME_FLAG_CORRUPTED
     *     before calling gst_video_decoder_finish_frame().
     * @param frame a #GstVideoCodecFrame
     * @param flags #GstVideoDecoderRequestSyncPointFlags
     */
    requestSyncPoint(frame: GstVideo.VideoCodecFrame, flags: GstVideo.VideoDecoderRequestSyncPointFlags): void
    /**
     * Allows baseclass to perform byte to time estimated conversion.
     * @param enabled whether to enable byte to time conversion
     */
    setEstimateRate(enabled: boolean): void
    /**
     * Same as #gst_video_decoder_set_output_state() but also allows you to also set
     * the interlacing mode.
     * @param fmt a #GstVideoFormat
     * @param interlaceMode A #GstVideoInterlaceMode
     * @param width The width in pixels
     * @param height The height in pixels
     * @param reference An optional reference #GstVideoCodecState
     */
    setInterlacedOutputState(fmt: GstVideo.VideoFormat, interlaceMode: GstVideo.VideoInterlaceMode, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    /**
     * Lets #GstVideoDecoder sub-classes tell the baseclass what the decoder
     * latency is. Will also post a LATENCY message on the bus so the pipeline
     * can reconfigure its global latency.
     * @param minLatency minimum latency
     * @param maxLatency maximum latency
     */
    setLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): void
    /**
     * Sets numbers of tolerated decoder errors, where a tolerated one is then only
     * warned about, but more than tolerated will lead to fatal error.  You can set
     * -1 for never returning fatal errors. Default is set to
     * GST_VIDEO_DECODER_MAX_ERRORS.
     * 
     * The '-1' option was added in 1.4
     * @param num max tolerated errors
     */
    setMaxErrors(num: number): void
    /**
     * Configures decoder format needs.  If enabled, subclass needs to be
     * negotiated with format caps before it can process any data.  It will then
     * never be handed any data before it has been configured.
     * Otherwise, it might be handed data without having been configured and
     * is then expected being able to do so either by default
     * or based on the input data.
     * @param enabled new state
     */
    setNeedsFormat(enabled: boolean): void
    /**
     * Configures whether the decoder requires a sync point before it starts
     * outputting data in the beginning. If enabled, the base class will discard
     * all non-sync point frames in the beginning and after a flush and does not
     * pass it to the subclass.
     * 
     * If the first frame is not a sync point, the base class will request a sync
     * point via the force-key-unit event.
     * @param enabled new state
     */
    setNeedsSyncPoint(enabled: boolean): void
    /**
     * Creates a new #GstVideoCodecState with the specified `fmt,` `width` and `height`
     * as the output state for the decoder.
     * Any previously set output state on `decoder` will be replaced by the newly
     * created one.
     * 
     * If the subclass wishes to copy over existing fields (like pixel aspec ratio,
     * or framerate) from an existing #GstVideoCodecState, it can be provided as a
     * `reference`.
     * 
     * If the subclass wishes to override some fields from the output state (like
     * pixel-aspect-ratio or framerate) it can do so on the returned #GstVideoCodecState.
     * 
     * The new output state will only take effect (set on pads and buffers) starting
     * from the next call to #gst_video_decoder_finish_frame().
     * @param fmt a #GstVideoFormat
     * @param width The width in pixels
     * @param height The height in pixels
     * @param reference An optional reference #GstVideoCodecState
     */
    setOutputState(fmt: GstVideo.VideoFormat, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    /**
     * Allows baseclass to consider input data as packetized or not. If the
     * input is packetized, then the `parse` method will not be called.
     * @param packetized whether the input data should be considered as packetized.
     */
    setPacketized(packetized: boolean): void
    /**
     * If this is set to TRUE, it informs the base class that the subclass
     * can receive the data at a granularity lower than one frame.
     * 
     * Note that in this mode, the subclass has two options. It can either
     * require the presence of a GST_VIDEO_BUFFER_FLAG_MARKER to mark the
     * end of a frame. Or it can operate in such a way that it will decode
     * a single frame at a time. In this second case, every buffer that
     * arrives to the element is considered part of the same frame until
     * gst_video_decoder_finish_frame() is called.
     * 
     * In either case, the same #GstVideoCodecFrame will be passed to the
     * GstVideoDecoderClass:handle_frame vmethod repeatedly with a
     * different GstVideoCodecFrame:input_buffer every time until the end of the
     * frame has been signaled using either method.
     * This method must be called during the decoder subclass `set_format` call.
     * @param subframeMode whether the input data should be considered as subframes.
     */
    setSubframeMode(subframeMode: boolean): void
    /**
     * Lets #GstVideoDecoder sub-classes decide if they want the sink pad
     * to use the default pad query handler to reply to accept-caps queries.
     * 
     * By setting this to true it is possible to further customize the default
     * handler with %GST_PAD_SET_ACCEPT_INTERSECT and
     * %GST_PAD_SET_ACCEPT_TEMPLATE
     * @param use if the default pad accept-caps query handling should be used
     */
    setUseDefaultPadAcceptcaps(use: boolean): void
    /* Methods of Gst-1.0.Gst.Element */
    /**
     * Abort the state change of the element. This function is used
     * by elements that do asynchronous state changes and find out
     * something is wrong.
     * 
     * This function should be called with the STATE_LOCK held.
     * 
     * MT safe.
     */
    abortState(): void
    /**
     * Adds a pad (link point) to `element`. `pad'`s parent will be set to `element;`
     * see gst_object_set_parent() for refcounting information.
     * 
     * Pads are automatically activated when added in the PAUSED or PLAYING
     * state.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-added signal on the element.
     * @param pad the #GstPad to add to the element.
     */
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    /**
     * Calls `func` from another thread and passes `user_data` to it. This is to be
     * used for cases when a state change has to be performed from a streaming
     * thread, directly via gst_element_set_state() or indirectly e.g. via SEEK
     * events.
     * 
     * Calling those functions directly from the streaming thread will cause
     * deadlocks in many situations, as they might involve waiting for the
     * streaming thread to shut down from this very streaming thread.
     * 
     * MT safe.
     * @param func Function to call asynchronously from another thread
     */
    callAsync(func: Gst.ElementCallAsyncFunc): void
    /**
     * Perform `transition` on `element`.
     * 
     * This function must be called with STATE_LOCK held and is mainly used
     * internally.
     * @param transition the requested transition
     */
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    /**
     * Commit the state change of the element and proceed to the next
     * pending state if any. This function is used
     * by elements that do asynchronous state changes.
     * The core will normally call this method automatically when an
     * element returned %GST_STATE_CHANGE_SUCCESS from the state change function.
     * 
     * If after calling this method the element still has not reached
     * the pending state, the next state change is performed.
     * 
     * This method is used internally and should normally not be called by plugins
     * or applications.
     * 
     * This function must be called with STATE_LOCK held.
     * @param ret The previous state return value
     */
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    /**
     * Creates a pad for each pad template that is always available.
     * This function is only useful during object initialization of
     * subclasses of #GstElement.
     */
    createAllPads(): void
    /**
     * Call `func` with `user_data` for each of `element'`s pads. `func` will be called
     * exactly once for each pad that exists at the time of this call, unless
     * one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new pads are added or pads are removed
     * while pads are being iterated, this will not be taken into account until
     * next time this function is used.
     * @param func function to call for each pad
     */
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s sink pads. `func` will be
     * called exactly once for each sink pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new sink pads are added or sink pads
     * are removed while the sink pads are being iterated, this will not be taken
     * into account until next time this function is used.
     * @param func function to call for each sink pad
     */
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s source pads. `func` will be
     * called exactly once for each source pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new source pads are added or source pads
     * are removed while the source pads are being iterated, this will not be taken
     * into account until next time this function is used.
     * @param func function to call for each source pad
     */
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Returns the base time of the element. The base time is the
     * absolute time of the clock when this element was last put to
     * PLAYING. Subtracting the base time from the clock time gives
     * the running time of the element.
     */
    getBaseTime(): Gst.ClockTime
    /**
     * Returns the bus of the element. Note that only a #GstPipeline will provide a
     * bus for the application.
     */
    getBus(): Gst.Bus | null
    /**
     * Gets the currently configured clock of the element. This is the clock as was
     * last set with gst_element_set_clock().
     * 
     * Elements in a pipeline will only have their clock set when the
     * pipeline is in the PLAYING state.
     */
    getClock(): Gst.Clock | null
    /**
     * Looks for an unlinked pad to which the given pad can link. It is not
     * guaranteed that linking the pads will work, though it should work in most
     * cases.
     * 
     * This function will first attempt to find a compatible unlinked ALWAYS pad,
     * and if none can be found, it will request a compatible REQUEST pad by looking
     * at the templates of `element`.
     * @param pad the #GstPad to find a compatible one for.
     * @param caps the #GstCaps to use as a filter.
     */
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad template from `element` that is compatible with `compattempl`.
     * Pads from compatible templates can be linked together.
     * @param compattempl the #GstPadTemplate to find a compatible     template for
     */
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * 
     * MT safe.
     * @param contextType a name of a context to retrieve
     */
    getContext(contextType: string): Gst.Context | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * @param contextType a name of a context to retrieve
     */
    getContextUnlocked(contextType: string): Gst.Context | null
    /**
     * Gets the contexts set on the element.
     * 
     * MT safe.
     */
    getContexts(): Gst.Context[]
    /**
     * Returns the current clock time of the element, as in, the time of the
     * element's clock, or GST_CLOCK_TIME_NONE if there is no clock.
     */
    getCurrentClockTime(): Gst.ClockTime
    /**
     * Returns the running time of the element. The running time is the
     * element's clock time minus its base time. Will return GST_CLOCK_TIME_NONE
     * if the element has no clock, or if its base time has not been set.
     */
    getCurrentRunningTime(): Gst.ClockTime
    /**
     * Retrieves the factory that was used to create this element.
     */
    getFactory(): Gst.ElementFactory | null
    /**
     * Get metadata with `key` in `klass`.
     * @param key the key to get
     */
    getMetadata(key: string): string
    /**
     * Retrieves a padtemplate from `element` with the given name.
     * @param name the name of the #GstPadTemplate to get.
     */
    getPadTemplate(name: string): Gst.PadTemplate | null
    /**
     * Retrieves a list of the pad templates associated with `element`. The
     * list must not be modified by the calling code.
     */
    getPadTemplateList(): Gst.PadTemplate[]
    /**
     * The name of this function is confusing to people learning GStreamer.
     * gst_element_request_pad_simple() aims at making it more explicit it is
     * a simplified gst_element_request_pad().
     * @param name the name of the request #GstPad to retrieve.
     */
    getRequestPad(name: string): Gst.Pad | null
    /**
     * Returns the start time of the element. The start time is the
     * running time of the clock when this element was last put to PAUSED.
     * 
     * Usually the start_time is managed by a toplevel element such as
     * #GstPipeline.
     * 
     * MT safe.
     */
    getStartTime(): Gst.ClockTime
    /**
     * Gets the state of the element.
     * 
     * For elements that performed an ASYNC state change, as reported by
     * gst_element_set_state(), this function will block up to the
     * specified timeout value for the state change to complete.
     * If the element completes the state change or goes into
     * an error, this function returns immediately with a return value of
     * %GST_STATE_CHANGE_SUCCESS or %GST_STATE_CHANGE_FAILURE respectively.
     * 
     * For elements that did not return %GST_STATE_CHANGE_ASYNC, this function
     * returns the current and pending state immediately.
     * 
     * This function returns %GST_STATE_CHANGE_NO_PREROLL if the element
     * successfully changed its state but is not able to provide data yet.
     * This mostly happens for live sources that only produce data in
     * %GST_STATE_PLAYING. While the state change return is equivalent to
     * %GST_STATE_CHANGE_SUCCESS, it is returned to the application to signal that
     * some sink elements might not be able to complete their state change because
     * an element is not producing data to complete the preroll. When setting the
     * element to playing, the preroll will complete and playback will start.
     * @param timeout a #GstClockTime to specify the timeout for an async           state change or %GST_CLOCK_TIME_NONE for infinite timeout.
     */
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    /**
     * Retrieves a pad from `element` by name. This version only retrieves
     * already-existing (i.e. 'static') pads.
     * @param name the name of the static #GstPad to retrieve.
     */
    getStaticPad(name: string): Gst.Pad | null
    /**
     * Checks if the state of an element is locked.
     * If the state of an element is locked, state changes of the parent don't
     * affect the element.
     * This way you can leave currently unused elements inside bins. Just lock their
     * state before changing the state from #GST_STATE_NULL.
     * 
     * MT safe.
     */
    isLockedState(): boolean
    /**
     * Retrieves an iterator of `element'`s pads. The iterator should
     * be freed after usage. Also more specialized iterators exists such as
     * gst_element_iterate_src_pads() or gst_element_iterate_sink_pads().
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iteratePads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s sink pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterateSinkPads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s source pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterateSrcPads(): Gst.Iterator
    /**
     * Links `src` to `dest`. The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * Such pads need to be released manually when unlinking.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     * @param dest the #GstElement containing the destination pad.
     */
    link(dest: Gst.Element): boolean
    /**
     * Links `src` to `dest` using the given caps as filtercaps.
     * The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     * @param dest the #GstElement containing the destination pad.
     * @param filter the #GstCaps to filter the link,     or %NULL for no filter.
     */
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element, or %NULL for any pad.
     */
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    /**
     * Links the two named pads of the source and destination elements. Side effect
     * is that if one of the pads has no parent, it becomes a child of the parent of
     * the other element. If they have different parents, the link fails. If `caps`
     * is not %NULL, makes sure that the caps of the link is a subset of `caps`.
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element     or %NULL for any pad.
     * @param filter the #GstCaps to filter the link,     or %NULL for no filter.
     */
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     * 
     * Calling gst_element_link_pads_full() with `flags` == %GST_PAD_LINK_CHECK_DEFAULT
     * is the same as calling gst_element_link_pads() and the recommended way of
     * linking pads with safety checks applied.
     * 
     * This is a convenience function for gst_pad_link_full().
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element, or %NULL for any pad.
     * @param flags the #GstPadLinkCheck to be performed when linking pads.
     */
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    /**
     * Brings the element to the lost state. The current state of the
     * element is copied to the pending state so that any call to
     * gst_element_get_state() will return %GST_STATE_CHANGE_ASYNC.
     * 
     * An ASYNC_START message is posted. If the element was PLAYING, it will
     * go to PAUSED. The element will be restored to its PLAYING state by
     * the parent pipeline when it prerolls again.
     * 
     * This is mostly used for elements that lost their preroll buffer
     * in the %GST_STATE_PAUSED or %GST_STATE_PLAYING state after a flush,
     * they will go to their pending state again when a new preroll buffer is
     * queued. This function can only be called when the element is currently
     * not in error or an async state change.
     * 
     * This function is used internally and should normally not be called from
     * plugins or applications.
     */
    lostState(): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     * 
     * MT safe.
     * @param type the #GstMessageType
     * @param domain the GStreamer GError domain this message belongs to
     * @param code the GError code belonging to the domain
     * @param text an allocated text string to be used            as a replacement for the default message connected to code,            or %NULL
     * @param debug an allocated debug message to be            used as a replacement for the default debugging information,            or %NULL
     * @param file the source code file where the error was generated
     * @param function_ the source code function where the error was generated
     * @param line the source code line where the error was generated
     */
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     * @param type the #GstMessageType
     * @param domain the GStreamer GError domain this message belongs to
     * @param code the GError code belonging to the domain
     * @param text an allocated text string to be used            as a replacement for the default message connected to code,            or %NULL
     * @param debug an allocated debug message to be            used as a replacement for the default debugging information,            or %NULL
     * @param file the source code file where the error was generated
     * @param function_ the source code function where the error was generated
     * @param line the source code line where the error was generated
     * @param structure optional details structure
     */
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    /**
     * Use this function to signal that the element does not expect any more pads
     * to show up in the current pipeline. This function should be called whenever
     * pads have been added by the element itself. Elements with #GST_PAD_SOMETIMES
     * pad templates use this in combination with autopluggers to figure out that
     * the element is done initializing its pads.
     * 
     * This function emits the #GstElement::no-more-pads signal.
     * 
     * MT safe.
     */
    noMorePads(): void
    /**
     * Post a message on the element's #GstBus. This function takes ownership of the
     * message; if you want to access the message after this call, you should add an
     * additional reference before calling.
     * @param message a #GstMessage to post
     */
    postMessage(message: Gst.Message): boolean
    /**
     * Get the clock provided by the given element.
     * > An element is only required to provide a clock in the PAUSED
     * > state. Some elements can provide a clock in other states.
     */
    provideClock(): Gst.Clock | null
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @param query the #GstQuery.
     */
    query(query: Gst.Query): boolean
    /**
     * Queries an element to convert `src_val` in `src_format` to `dest_format`.
     * @param srcFormat a #GstFormat to convert from.
     * @param srcVal a value to convert.
     * @param destFormat the #GstFormat to convert to.
     */
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * total stream duration in nanoseconds. This query will only work once the
     * pipeline is prerolled (i.e. reached PAUSED or PLAYING state). The application
     * will receive an ASYNC_DONE message on the pipeline bus when that is the case.
     * 
     * If the duration changes for some reason, you will get a DURATION_CHANGED
     * message on the pipeline bus, in which case you should re-query the duration
     * using this function.
     * @param format the #GstFormat requested
     */
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * stream position in nanoseconds. This will be a value between 0 and the
     * stream duration (if the stream duration is known). This query will usually
     * only work once the pipeline is prerolled (i.e. reached PAUSED or PLAYING
     * state). The application will receive an ASYNC_DONE message on the pipeline
     * bus when that is the case.
     * 
     * If one repeatedly calls this function one can also create a query and reuse
     * it in gst_element_query().
     * @param format the #GstFormat requested
     */
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    /**
     * Makes the element free the previously requested pad as obtained
     * with gst_element_request_pad().
     * 
     * This does not unref the pad. If the pad was created by using
     * gst_element_request_pad(), gst_element_release_request_pad() needs to be
     * followed by gst_object_unref() to free the `pad`.
     * 
     * MT safe.
     * @param pad the #GstPad to release.
     */
    releaseRequestPad(pad: Gst.Pad): void
    /**
     * Removes `pad` from `element`. `pad` will be destroyed if it has not been
     * referenced elsewhere using gst_object_unparent().
     * 
     * This function is used by plugin developers and should not be used
     * by applications. Pads that were dynamically requested from elements
     * with gst_element_request_pad() should be released with the
     * gst_element_release_request_pad() function instead.
     * 
     * Pads are not automatically deactivated so elements should perform the needed
     * steps to deactivate the pad in case this pad is removed in the PAUSED or
     * PLAYING state. See gst_pad_set_active() for more information about
     * deactivating pads.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-removed signal on the element.
     * @param pad the #GstPad to remove from the element.
     */
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    /**
     * Retrieves a request pad from the element according to the provided template.
     * Pad templates can be looked up using
     * gst_element_factory_get_static_pad_templates().
     * 
     * The pad should be released with gst_element_release_request_pad().
     * @param templ a #GstPadTemplate of which we want a pad of.
     * @param name the name of the request #GstPad to retrieve. Can be %NULL.
     * @param caps the caps of the pad we want to request. Can be %NULL.
     */
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad from the element by name (e.g. "src_\%d"). This version only
     * retrieves request pads. The pad should be released with
     * gst_element_release_request_pad().
     * 
     * This method is slower than manually getting the pad template and calling
     * gst_element_request_pad() if the pads should have a specific name (e.g.
     * `name` is "src_1" instead of "src_\%u").
     * 
     * Note that this function was introduced in GStreamer 1.20 in order to provide
     * a better name to gst_element_get_request_pad(). Prior to 1.20, users
     * should use gst_element_get_request_pad() which provides the same
     * functionality.
     * @param name the name of the request #GstPad to retrieve.
     */
    requestPadSimple(name: string): Gst.Pad | null
    /**
     * Sends a seek event to an element. See gst_event_new_seek() for the details of
     * the parameters. The seek event is sent to the element using
     * gst_element_send_event().
     * 
     * MT safe.
     * @param rate The new playback rate
     * @param format The format of the seek values
     * @param flags The optional seek flags.
     * @param startType The type and flags for the new start position
     * @param start The value of the new start position
     * @param stopType The type and flags for the new stop position
     * @param stop The value of the new stop position
     */
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
    /**
     * Simple API to perform a seek on the given element, meaning it just seeks
     * to the given position relative to the start of the stream. For more complex
     * operations like segment seeks (e.g. for looping) or changing the playback
     * rate or seeking relative to the last configured playback segment you should
     * use gst_element_seek().
     * 
     * In a completely prerolled PAUSED or PLAYING pipeline, seeking is always
     * guaranteed to return %TRUE on a seekable media type or %FALSE when the media
     * type is certainly not seekable (such as a live stream).
     * 
     * Some elements allow for seeking in the READY state, in this
     * case they will store the seek event and execute it when they are put to
     * PAUSED. If the element supports seek in READY, it will always return %TRUE when
     * it receives the event in the READY state.
     * @param format a #GstFormat to execute the seek in, such as #GST_FORMAT_TIME
     * @param seekFlags seek options; playback applications will usually want to use            GST_SEEK_FLAG_FLUSH | GST_SEEK_FLAG_KEY_UNIT here
     * @param seekPos position to seek to (relative to the start); if you are doing            a seek in #GST_FORMAT_TIME this value is in nanoseconds -            multiply with #GST_SECOND to convert seconds to nanoseconds or            with #GST_MSECOND to convert milliseconds to nanoseconds.
     */
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    /**
     * Sends an event to an element. If the element doesn't implement an
     * event handler, the event will be pushed on a random linked sink pad for
     * downstream events or a random linked source pad for upstream events.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     * 
     * MT safe.
     * @param event the #GstEvent to send to the element.
     */
    sendEvent(event: Gst.Event): boolean
    /**
     * Set the base time of an element. See gst_element_get_base_time().
     * 
     * MT safe.
     * @param time the base time to set.
     */
    setBaseTime(time: Gst.ClockTime): void
    /**
     * Sets the bus of the element. Increases the refcount on the bus.
     * For internal use only, unless you're testing elements.
     * 
     * MT safe.
     * @param bus the #GstBus to set.
     */
    setBus(bus?: Gst.Bus | null): void
    /**
     * Sets the clock for the element. This function increases the
     * refcount on the clock. Any previously set clock on the object
     * is unreffed.
     * @param clock the #GstClock to set for the element.
     */
    setClock(clock?: Gst.Clock | null): boolean
    /**
     * Sets the context of the element. Increases the refcount of the context.
     * 
     * MT safe.
     * @param context the #GstContext to set.
     */
    setContext(context: Gst.Context): void
    /**
     * Locks the state of an element, so state changes of the parent don't affect
     * this element anymore.
     * 
     * Note that this is racy if the state lock of the parent bin is not taken.
     * The parent bin might've just checked the flag in another thread and as the
     * next step proceed to change the child element's state.
     * 
     * MT safe.
     * @param lockedState %TRUE to lock the element's state
     */
    setLockedState(lockedState: boolean): boolean
    /**
     * Set the start time of an element. The start time of the element is the
     * running time of the element when it last went to the PAUSED state. In READY
     * or after a flushing seek, it is set to 0.
     * 
     * Toplevel elements like #GstPipeline will manage the start_time and
     * base_time on its children. Setting the start_time to #GST_CLOCK_TIME_NONE
     * on such a toplevel element will disable the distribution of the base_time to
     * the children and can be useful if the application manages the base_time
     * itself, for example if you want to synchronize capture from multiple
     * pipelines, and you can also ensure that the pipelines have the same clock.
     * 
     * MT safe.
     * @param time the base time to set.
     */
    setStartTime(time: Gst.ClockTime): void
    /**
     * Sets the state of the element. This function will try to set the
     * requested state by going through all the intermediary states and calling
     * the class's state change function for each.
     * 
     * This function can return #GST_STATE_CHANGE_ASYNC, in which case the
     * element will perform the remainder of the state change asynchronously in
     * another thread.
     * An application can use gst_element_get_state() to wait for the completion
     * of the state change or it can wait for a %GST_MESSAGE_ASYNC_DONE or
     * %GST_MESSAGE_STATE_CHANGED on the bus.
     * 
     * State changes to %GST_STATE_READY or %GST_STATE_NULL never return
     * #GST_STATE_CHANGE_ASYNC.
     * @param state the element's new #GstState.
     */
    setState(state: Gst.State): Gst.StateChangeReturn
    /**
     * Tries to change the state of the element to the same as its parent.
     * If this function returns %FALSE, the state of element is undefined.
     */
    syncStateWithParent(): boolean
    /**
     * Unlinks all source pads of the source element with all sink pads
     * of the sink element to which they are linked.
     * 
     * If the link has been made using gst_element_link(), it could have created an
     * requestpad, which has to be released using gst_element_release_request_pad().
     * @param dest the sink #GstElement to unlink.
     */
    unlink(dest: Gst.Element): void
    /**
     * Unlinks the two named pads of the source and destination elements.
     * 
     * This is a convenience function for gst_pad_unlink().
     * @param srcpadname the name of the #GstPad in source element.
     * @param dest a #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element.
     */
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    /**
     * Attach the #GstControlBinding to the object. If there already was a
     * #GstControlBinding for this property it will be replaced.
     * 
     * The object's reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     * @param binding the #GstControlBinding that should be used
     */
    addControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * A default error function that uses g_printerr() to display the error message
     * and the optional debug string..
     * 
     * The default handler will simply print the error string using g_print.
     * @param error the GError.
     * @param debug an additional debug information string, or %NULL
     */
    defaultError(error: GLib.Error, debug?: string | null): void
    /**
     * Gets the corresponding #GstControlBinding for the property. This should be
     * unreferenced again after use.
     * @param propertyName name of the property
     */
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    /**
     * Obtain the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * If the `object` is not under property control, this will return
     * %GST_CLOCK_TIME_NONE. This allows the element to avoid the sub-dividing.
     * 
     * The control-rate is not expected to change if the element is in
     * %GST_STATE_PAUSED or %GST_STATE_PLAYING.
     */
    getControlRate(): Gst.ClockTime
    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     * @param propertyName the name of the property to get
     * @param timestamp the time that should be processed
     * @param interval the time spacing between subsequent values
     * @param values array to put control-values in
     */
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Returns a copy of the name of `object`.
     * Caller should g_free() the return value after usage.
     * For a nameless object, this returns %NULL, which you can safely g_free()
     * as well.
     * 
     * Free-function: g_free
     */
    getName(): string | null
    /**
     * Returns the parent of `object`. This function increases the refcount
     * of the parent object so you should gst_object_unref() it after usage.
     */
    getParent(): Gst.Object | null
    /**
     * Generates a string describing the path of `object` in
     * the object hierarchy. Only useful (or used) for debugging.
     * 
     * Free-function: g_free
     */
    getPathString(): string
    /**
     * Gets the value for the given controlled property at the requested time.
     * @param propertyName the name of the property to get
     * @param timestamp the time the control-change should be read from
     */
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    /**
     * Check if the `object` has active controlled properties.
     */
    hasActiveControlBindings(): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    hasAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    hasAsAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `parent` is the parent of `object`.
     * E.g. a #GstElement can check if it owns a given #GstPad.
     * @param parent a #GstObject to check as parent
     */
    hasAsParent(parent: Gst.Object): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     */
    ref(): Gst.Object
    /**
     * Removes the corresponding #GstControlBinding. If it was the
     * last ref of the binding, it will be disposed.
     * @param binding the binding
     */
    removeControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * This function is used to disable the control bindings on a property for
     * some time, i.e. gst_object_sync_values() will do nothing for the
     * property.
     * @param propertyName property to disable
     * @param disabled boolean that specifies whether to disable the controller or not.
     */
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    /**
     * This function is used to disable all controlled properties of the `object` for
     * some time, i.e. gst_object_sync_values() will do nothing.
     * @param disabled boolean that specifies whether to disable the controller or not.
     */
    setControlBindingsDisabled(disabled: boolean): void
    /**
     * Change the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * The control-rate should not change if the element is in %GST_STATE_PAUSED or
     * %GST_STATE_PLAYING.
     * @param controlRate the new control-rate in nanoseconds.
     */
    setControlRate(controlRate: Gst.ClockTime): void
    /**
     * Sets the name of `object,` or gives `object` a guaranteed unique
     * name (if `name` is %NULL).
     * This function makes a copy of the provided name, so the caller
     * retains ownership of the name it sent.
     * @param name new name of object
     */
    setName(name?: string | null): boolean
    /**
     * Sets the parent of `object` to `parent`. The object's reference count will
     * be incremented, and any floating reference will be removed (see gst_object_ref_sink()).
     * @param parent new parent of object
     */
    setParent(parent: Gst.Object): boolean
    /**
     * Returns a suggestion for timestamps where buffers should be split
     * to get best controller results.
     */
    suggestNextSync(): Gst.ClockTime
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     * @param timestamp the time that should be processed
     */
    syncValues(timestamp: Gst.ClockTime): boolean
    /**
     * Clear the parent of `object,` removing the associated reference.
     * This function decreases the refcount of `object`.
     * 
     * MT safe. Grabs and releases `object'`s lock.
     */
    unparent(): void
    /**
     * Decrements the reference count on `object`.  If reference count hits
     * zero, destroy `object`. This function does not take the lock
     * on `object` as it relies on atomic refcounting.
     * 
     * The unref method should never be called with the LOCK held since
     * this might deadlock the dispose function.
     */
    unref(): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Signals of Gst-1.0.Gst.Element */
    /**
     * This signals that the element will not generate more dynamic pads.
     * Note that this signal will usually be emitted from the context of
     * the streaming thread.
     */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    /**
     * a new #GstPad has been added to the element. Note that this signal will
     * usually be emitted from the context of the streaming thread. Also keep in
     * mind that if you add new elements to the pipeline in the signal handler
     * you will need to set them to the desired target state with
     * gst_element_set_state() or gst_element_sync_state_with_parent().
     * @param newPad the pad that has been added
     */
    connect(sigName: "pad-added", callback: ((newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    /**
     * a #GstPad has been removed from the element
     * @param oldPad the pad that has been removed
     */
    connect(sigName: "pad-removed", callback: ((oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    /**
     * The deep notify signal is used to be notified of property changes. It is
     * typically attached to the toplevel bin to receive notifications from all
     * the elements contained in that bin.
     * @param propObject the object that originated the signal
     * @param prop the property that changed
     */
    connect(sigName: "deep-notify", callback: ((propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::compliance", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compliance", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::compliance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::compliance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::compliance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::automatic-request-sync-point-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-request-sync-point-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::automatic-request-sync-point-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::automatic-request-sync-point-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::automatic-request-sync-point-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::automatic-request-sync-points", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-request-sync-points", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::automatic-request-sync-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::automatic-request-sync-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::automatic-request-sync-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::discard-corrupted-frames", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard-corrupted-frames", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-force-key-unit-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-force-key-unit-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: H264Decoder_ConstructProps)
    _init (config?: H264Decoder_ConstructProps): void
    static $gtype: GObject.Type
}
interface H265Decoder_ConstructProps extends GstVideo.VideoDecoder_ConstructProps {
}
class H265Decoder {
    /* Properties of GstVideo-1.0.GstVideo.VideoDecoder */
    /**
     * GstVideoDecoderRequestSyncPointFlags to use for the automatically
     * requested sync points if `automatic-request-sync-points` is enabled.
     */
    automaticRequestSyncPointFlags: GstVideo.VideoDecoderRequestSyncPointFlags
    /**
     * If set to %TRUE the decoder will automatically request sync points when
     * it seems like a good idea, e.g. if the first frames are not key frames or
     * if packet loss was reported by upstream.
     */
    automaticRequestSyncPoints: boolean
    /**
     * If set to %TRUE the decoder will discard frames that are marked as
     * corrupted instead of outputting them.
     */
    discardCorruptedFrames: boolean
    /**
     * Maximum number of tolerated consecutive decode errors. See
     * gst_video_decoder_set_max_errors() for more details.
     */
    maxErrors: number
    /**
     * Minimum interval between force-key-unit events sent upstream by the
     * decoder. Setting this to 0 will cause every event to be handled, setting
     * this to %GST_CLOCK_TIME_NONE will cause every event to be ignored.
     * 
     * See gst_video_event_new_upstream_force_key_unit() for more details about
     * force-key-unit events.
     */
    minForceKeyUnitInterval: number
    /**
     * If set to %TRUE the decoder will handle QoS events received
     * from downstream elements.
     * This includes dropping output frames which are detected as late
     * using the metrics reported by those events.
     */
    qos: boolean
    /* Fields of Gst-1.0.Gst.Element */
    object: Gst.Object
    /**
     * Used to serialize execution of gst_element_set_state()
     */
    stateLock: GLib.RecMutex
    /**
     * Used to signal completion of a state change
     */
    stateCond: GLib.Cond
    /**
     * Used to detect concurrent execution of
     * gst_element_set_state() and gst_element_get_state()
     */
    stateCookie: number
    /**
     * the target state of an element as set by the application
     */
    targetState: Gst.State
    /**
     * the current state of an element
     */
    currentState: Gst.State
    /**
     * the next state of an element, can be #GST_STATE_VOID_PENDING if
     * the element is in the correct state.
     */
    nextState: Gst.State
    /**
     * the final state the element should go to, can be
     * #GST_STATE_VOID_PENDING if the element is in the correct state
     */
    pendingState: Gst.State
    /**
     * the last return value of an element state change
     */
    lastReturn: Gst.StateChangeReturn
    /**
     * the bus of the element. This bus is provided to the element by the
     * parent element or the application. A #GstPipeline has a bus of its own.
     */
    bus: Gst.Bus
    /**
     * the clock of the element. This clock is usually provided to the
     * element by the toplevel #GstPipeline.
     */
    clock: Gst.Clock
    /**
     * the time of the clock right before the element is set to
     * PLAYING. Subtracting `base_time` from the current clock time in the PLAYING
     * state will yield the running_time against the clock.
     */
    baseTime: Gst.ClockTimeDiff
    /**
     * the running_time of the last PAUSED state
     */
    startTime: Gst.ClockTime
    /**
     * number of pads of the element, includes both source and sink pads.
     */
    numpads: number
    /**
     * list of pads
     */
    pads: Gst.Pad[]
    /**
     * number of source pads of the element.
     */
    numsrcpads: number
    /**
     * list of source pads
     */
    srcpads: Gst.Pad[]
    /**
     * number of sink pads of the element.
     */
    numsinkpads: number
    /**
     * list of sink pads
     */
    sinkpads: Gst.Pad[]
    /**
     * updated whenever the a pad is added or removed
     */
    padsCookie: number
    /**
     * list of contexts
     */
    contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    /**
     * object LOCK
     */
    lock: GLib.Mutex
    /**
     * The name of the object
     */
    name: string
    /**
     * this object's parent, weak ref
     */
    parent: Gst.Object
    /**
     * flags for this object
     */
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstCodecs-1.0.GstCodecs.H265Decoder */
    /**
     * Retrive DPB and return a #GstH265Picture corresponding to
     * the `system_frame_number`
     * @param systemFrameNumber a target system frame number of #GstH265Picture
     */
    getPicture(systemFrameNumber: number): H265Picture
    /**
     * Called to en/disable reference picture modification process.
     * @param process whether subclass is requiring reference picture modification process
     */
    setProcessRefPicLists(process: boolean): void
    /* Methods of GstVideo-1.0.GstVideo.VideoDecoder */
    /**
     * Removes next `n_bytes` of input data and adds it to currently parsed frame.
     * @param nBytes the number of bytes to add
     */
    addToFrame(nBytes: number): void
    /**
     * Helper function that allocates a buffer to hold a video frame for `decoder'`s
     * current #GstVideoCodecState.
     * 
     * You should use gst_video_decoder_allocate_output_frame() instead of this
     * function, if possible at all.
     */
    allocateOutputBuffer(): Gst.Buffer
    /**
     * Helper function that allocates a buffer to hold a video frame for `decoder'`s
     * current #GstVideoCodecState.  Subclass should already have configured video
     * state and set src pad caps.
     * 
     * The buffer allocated here is owned by the frame and you should only
     * keep references to the frame, not the buffer.
     * @param frame a #GstVideoCodecFrame
     */
    allocateOutputFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * Same as #gst_video_decoder_allocate_output_frame except it allows passing
     * #GstBufferPoolAcquireParams to the sub call gst_buffer_pool_acquire_buffer.
     * @param frame a #GstVideoCodecFrame
     * @param params a #GstBufferPoolAcquireParams
     */
    allocateOutputFrameWithParams(frame: GstVideo.VideoCodecFrame, params: Gst.BufferPoolAcquireParams): Gst.FlowReturn
    /**
     * Similar to gst_video_decoder_finish_frame(), but drops `frame` in any
     * case and posts a QoS message with the frame's details on the bus.
     * In any case, the frame is considered finished and released.
     * @param frame the #GstVideoCodecFrame to drop
     */
    dropFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * Drops input data.
     * The frame is not considered finished until the whole frame
     * is finished or dropped by the subclass.
     * @param frame the #GstVideoCodecFrame
     */
    dropSubframe(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * `frame` should have a valid decoded data buffer, whose metadata fields
     * are then appropriately set according to frame data and pushed downstream.
     * If no output data is provided, `frame` is considered skipped.
     * In any case, the frame is considered finished and released.
     * 
     * After calling this function the output buffer of the frame is to be
     * considered read-only. This function will also change the metadata
     * of the buffer.
     * @param frame a decoded #GstVideoCodecFrame
     */
    finishFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * Indicate that a subframe has been finished to be decoded
     * by the subclass. This method should be called for all subframes
     * except the last subframe where `gst_video_decoder_finish_frame`
     * should be called instead.
     * @param frame the #GstVideoCodecFrame
     */
    finishSubframe(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * Lets #GstVideoDecoder sub-classes to know the memory `allocator`
     * used by the base class and its `params`.
     * 
     * Unref the `allocator` after use it.
     */
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    getBufferPool(): Gst.BufferPool
    getEstimateRate(): number
    /**
     * Get a pending unfinished #GstVideoCodecFrame
     * @param frameNumber system_frame_number of a frame
     */
    getFrame(frameNumber: number): GstVideo.VideoCodecFrame
    /**
     * Get all pending unfinished #GstVideoCodecFrame
     */
    getFrames(): GstVideo.VideoCodecFrame[]
    /**
     * Queries the number of the last subframe received by
     * the decoder baseclass in the `frame`.
     * @param frame the #GstVideoCodecFrame to update
     */
    getInputSubframeIndex(frame: GstVideo.VideoCodecFrame): number
    /**
     * Query the configured decoder latency. Results will be returned via
     * `min_latency` and `max_latency`.
     */
    getLatency(): [ /* minLatency */ Gst.ClockTime | null, /* maxLatency */ Gst.ClockTime | null ]
    /**
     * Determines maximum possible decoding time for `frame` that will
     * allow it to decode and arrive in time (as determined by QoS events).
     * In particular, a negative result means decoding in time is no longer possible
     * and should therefore occur as soon/skippy as possible.
     * @param frame a #GstVideoCodecFrame
     */
    getMaxDecodeTime(frame: GstVideo.VideoCodecFrame): Gst.ClockTimeDiff
    getMaxErrors(): number
    /**
     * Queries decoder required format handling.
     */
    getNeedsFormat(): boolean
    /**
     * Queries if the decoder requires a sync point before it starts outputting
     * data in the beginning.
     */
    getNeedsSyncPoint(): boolean
    /**
     * Get the oldest pending unfinished #GstVideoCodecFrame
     */
    getOldestFrame(): GstVideo.VideoCodecFrame
    /**
     * Get the #GstVideoCodecState currently describing the output stream.
     */
    getOutputState(): GstVideo.VideoCodecState
    /**
     * Queries whether input data is considered packetized or not by the
     * base class.
     */
    getPacketized(): boolean
    /**
     * Returns the number of bytes previously added to the current frame
     * by calling gst_video_decoder_add_to_frame().
     */
    getPendingFrameSize(): number
    /**
     * Queries the number of subframes in the frame processed by
     * the decoder baseclass.
     * @param frame the #GstVideoCodecFrame to update
     */
    getProcessedSubframeIndex(frame: GstVideo.VideoCodecFrame): number
    getQosProportion(): number
    /**
     * Queries whether input data is considered as subframes or not by the
     * base class. If FALSE, each input buffer will be considered as a full
     * frame.
     */
    getSubframeMode(): boolean
    /**
     * Gathers all data collected for currently parsed frame, gathers corresponding
     * metadata and passes it along for further processing, i.e. `handle_frame`.
     */
    haveFrame(): Gst.FlowReturn
    /**
     * Indicates that the last subframe has been processed by the decoder
     * in `frame`. This will release the current frame in video decoder
     * allowing to receive new frames from upstream elements. This method
     * must be called in the subclass `handle_frame` callback.
     * @param frame the #GstVideoCodecFrame to update
     */
    haveLastSubframe(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * Sets the audio decoder tags and how they should be merged with any
     * upstream stream tags. This will override any tags previously-set
     * with gst_audio_decoder_merge_tags().
     * 
     * Note that this is provided for convenience, and the subclass is
     * not required to use this and can still do tag handling on its own.
     * 
     * MT safe.
     * @param tags a #GstTagList to merge, or NULL to unset     previously-set tags
     * @param mode the #GstTagMergeMode to use, usually #GST_TAG_MERGE_REPLACE
     */
    mergeTags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    /**
     * Negotiate with downstream elements to currently configured #GstVideoCodecState.
     * Unmark GST_PAD_FLAG_NEED_RECONFIGURE in any case. But mark it again if
     * negotiate fails.
     */
    negotiate(): boolean
    /**
     * Returns caps that express `caps` (or sink template caps if `caps` == NULL)
     * restricted to resolution/format/... combinations supported by downstream
     * elements.
     * @param caps initial caps
     * @param filter filter caps
     */
    proxyGetcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps
    /**
     * Similar to gst_video_decoder_drop_frame(), but simply releases `frame`
     * without any processing other than removing it from list of pending frames,
     * after which it is considered finished and released.
     * @param frame the #GstVideoCodecFrame to release
     */
    releaseFrame(frame: GstVideo.VideoCodecFrame): void
    /**
     * Allows the #GstVideoDecoder subclass to request from the base class that
     * a new sync should be requested from upstream, and that `frame` was the frame
     * when the subclass noticed that a new sync point is required. A reason for
     * the subclass to do this could be missing reference frames, for example.
     * 
     * The base class will then request a new sync point from upstream as long as
     * the time that passed since the last one is exceeding
     * #GstVideoDecoder:min-force-key-unit-interval.
     * 
     * The subclass can signal via `flags` how the frames until the next sync point
     * should be handled:
     * 
     *   * If %GST_VIDEO_DECODER_REQUEST_SYNC_POINT_DISCARD_INPUT is selected then
     *     all following input frames until the next sync point are discarded.
     *     This can be useful if the lack of a sync point will prevent all further
     *     decoding and the decoder implementation is not very robust in handling
     *     missing references frames.
     *   * If %GST_VIDEO_DECODER_REQUEST_SYNC_POINT_CORRUPT_OUTPUT is selected
     *     then all output frames following `frame` are marked as corrupted via
     *     %GST_BUFFER_FLAG_CORRUPTED. Corrupted frames can be automatically
     *     dropped by the base class, see #GstVideoDecoder:discard-corrupted-frames.
     *     Subclasses can manually mark frames as corrupted via %GST_VIDEO_CODEC_FRAME_FLAG_CORRUPTED
     *     before calling gst_video_decoder_finish_frame().
     * @param frame a #GstVideoCodecFrame
     * @param flags #GstVideoDecoderRequestSyncPointFlags
     */
    requestSyncPoint(frame: GstVideo.VideoCodecFrame, flags: GstVideo.VideoDecoderRequestSyncPointFlags): void
    /**
     * Allows baseclass to perform byte to time estimated conversion.
     * @param enabled whether to enable byte to time conversion
     */
    setEstimateRate(enabled: boolean): void
    /**
     * Same as #gst_video_decoder_set_output_state() but also allows you to also set
     * the interlacing mode.
     * @param fmt a #GstVideoFormat
     * @param interlaceMode A #GstVideoInterlaceMode
     * @param width The width in pixels
     * @param height The height in pixels
     * @param reference An optional reference #GstVideoCodecState
     */
    setInterlacedOutputState(fmt: GstVideo.VideoFormat, interlaceMode: GstVideo.VideoInterlaceMode, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    /**
     * Lets #GstVideoDecoder sub-classes tell the baseclass what the decoder
     * latency is. Will also post a LATENCY message on the bus so the pipeline
     * can reconfigure its global latency.
     * @param minLatency minimum latency
     * @param maxLatency maximum latency
     */
    setLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): void
    /**
     * Sets numbers of tolerated decoder errors, where a tolerated one is then only
     * warned about, but more than tolerated will lead to fatal error.  You can set
     * -1 for never returning fatal errors. Default is set to
     * GST_VIDEO_DECODER_MAX_ERRORS.
     * 
     * The '-1' option was added in 1.4
     * @param num max tolerated errors
     */
    setMaxErrors(num: number): void
    /**
     * Configures decoder format needs.  If enabled, subclass needs to be
     * negotiated with format caps before it can process any data.  It will then
     * never be handed any data before it has been configured.
     * Otherwise, it might be handed data without having been configured and
     * is then expected being able to do so either by default
     * or based on the input data.
     * @param enabled new state
     */
    setNeedsFormat(enabled: boolean): void
    /**
     * Configures whether the decoder requires a sync point before it starts
     * outputting data in the beginning. If enabled, the base class will discard
     * all non-sync point frames in the beginning and after a flush and does not
     * pass it to the subclass.
     * 
     * If the first frame is not a sync point, the base class will request a sync
     * point via the force-key-unit event.
     * @param enabled new state
     */
    setNeedsSyncPoint(enabled: boolean): void
    /**
     * Creates a new #GstVideoCodecState with the specified `fmt,` `width` and `height`
     * as the output state for the decoder.
     * Any previously set output state on `decoder` will be replaced by the newly
     * created one.
     * 
     * If the subclass wishes to copy over existing fields (like pixel aspec ratio,
     * or framerate) from an existing #GstVideoCodecState, it can be provided as a
     * `reference`.
     * 
     * If the subclass wishes to override some fields from the output state (like
     * pixel-aspect-ratio or framerate) it can do so on the returned #GstVideoCodecState.
     * 
     * The new output state will only take effect (set on pads and buffers) starting
     * from the next call to #gst_video_decoder_finish_frame().
     * @param fmt a #GstVideoFormat
     * @param width The width in pixels
     * @param height The height in pixels
     * @param reference An optional reference #GstVideoCodecState
     */
    setOutputState(fmt: GstVideo.VideoFormat, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    /**
     * Allows baseclass to consider input data as packetized or not. If the
     * input is packetized, then the `parse` method will not be called.
     * @param packetized whether the input data should be considered as packetized.
     */
    setPacketized(packetized: boolean): void
    /**
     * If this is set to TRUE, it informs the base class that the subclass
     * can receive the data at a granularity lower than one frame.
     * 
     * Note that in this mode, the subclass has two options. It can either
     * require the presence of a GST_VIDEO_BUFFER_FLAG_MARKER to mark the
     * end of a frame. Or it can operate in such a way that it will decode
     * a single frame at a time. In this second case, every buffer that
     * arrives to the element is considered part of the same frame until
     * gst_video_decoder_finish_frame() is called.
     * 
     * In either case, the same #GstVideoCodecFrame will be passed to the
     * GstVideoDecoderClass:handle_frame vmethod repeatedly with a
     * different GstVideoCodecFrame:input_buffer every time until the end of the
     * frame has been signaled using either method.
     * This method must be called during the decoder subclass `set_format` call.
     * @param subframeMode whether the input data should be considered as subframes.
     */
    setSubframeMode(subframeMode: boolean): void
    /**
     * Lets #GstVideoDecoder sub-classes decide if they want the sink pad
     * to use the default pad query handler to reply to accept-caps queries.
     * 
     * By setting this to true it is possible to further customize the default
     * handler with %GST_PAD_SET_ACCEPT_INTERSECT and
     * %GST_PAD_SET_ACCEPT_TEMPLATE
     * @param use if the default pad accept-caps query handling should be used
     */
    setUseDefaultPadAcceptcaps(use: boolean): void
    /* Methods of Gst-1.0.Gst.Element */
    /**
     * Abort the state change of the element. This function is used
     * by elements that do asynchronous state changes and find out
     * something is wrong.
     * 
     * This function should be called with the STATE_LOCK held.
     * 
     * MT safe.
     */
    abortState(): void
    /**
     * Adds a pad (link point) to `element`. `pad'`s parent will be set to `element;`
     * see gst_object_set_parent() for refcounting information.
     * 
     * Pads are automatically activated when added in the PAUSED or PLAYING
     * state.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-added signal on the element.
     * @param pad the #GstPad to add to the element.
     */
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    /**
     * Calls `func` from another thread and passes `user_data` to it. This is to be
     * used for cases when a state change has to be performed from a streaming
     * thread, directly via gst_element_set_state() or indirectly e.g. via SEEK
     * events.
     * 
     * Calling those functions directly from the streaming thread will cause
     * deadlocks in many situations, as they might involve waiting for the
     * streaming thread to shut down from this very streaming thread.
     * 
     * MT safe.
     * @param func Function to call asynchronously from another thread
     */
    callAsync(func: Gst.ElementCallAsyncFunc): void
    /**
     * Perform `transition` on `element`.
     * 
     * This function must be called with STATE_LOCK held and is mainly used
     * internally.
     * @param transition the requested transition
     */
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    /**
     * Commit the state change of the element and proceed to the next
     * pending state if any. This function is used
     * by elements that do asynchronous state changes.
     * The core will normally call this method automatically when an
     * element returned %GST_STATE_CHANGE_SUCCESS from the state change function.
     * 
     * If after calling this method the element still has not reached
     * the pending state, the next state change is performed.
     * 
     * This method is used internally and should normally not be called by plugins
     * or applications.
     * 
     * This function must be called with STATE_LOCK held.
     * @param ret The previous state return value
     */
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    /**
     * Creates a pad for each pad template that is always available.
     * This function is only useful during object initialization of
     * subclasses of #GstElement.
     */
    createAllPads(): void
    /**
     * Call `func` with `user_data` for each of `element'`s pads. `func` will be called
     * exactly once for each pad that exists at the time of this call, unless
     * one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new pads are added or pads are removed
     * while pads are being iterated, this will not be taken into account until
     * next time this function is used.
     * @param func function to call for each pad
     */
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s sink pads. `func` will be
     * called exactly once for each sink pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new sink pads are added or sink pads
     * are removed while the sink pads are being iterated, this will not be taken
     * into account until next time this function is used.
     * @param func function to call for each sink pad
     */
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s source pads. `func` will be
     * called exactly once for each source pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new source pads are added or source pads
     * are removed while the source pads are being iterated, this will not be taken
     * into account until next time this function is used.
     * @param func function to call for each source pad
     */
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Returns the base time of the element. The base time is the
     * absolute time of the clock when this element was last put to
     * PLAYING. Subtracting the base time from the clock time gives
     * the running time of the element.
     */
    getBaseTime(): Gst.ClockTime
    /**
     * Returns the bus of the element. Note that only a #GstPipeline will provide a
     * bus for the application.
     */
    getBus(): Gst.Bus | null
    /**
     * Gets the currently configured clock of the element. This is the clock as was
     * last set with gst_element_set_clock().
     * 
     * Elements in a pipeline will only have their clock set when the
     * pipeline is in the PLAYING state.
     */
    getClock(): Gst.Clock | null
    /**
     * Looks for an unlinked pad to which the given pad can link. It is not
     * guaranteed that linking the pads will work, though it should work in most
     * cases.
     * 
     * This function will first attempt to find a compatible unlinked ALWAYS pad,
     * and if none can be found, it will request a compatible REQUEST pad by looking
     * at the templates of `element`.
     * @param pad the #GstPad to find a compatible one for.
     * @param caps the #GstCaps to use as a filter.
     */
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad template from `element` that is compatible with `compattempl`.
     * Pads from compatible templates can be linked together.
     * @param compattempl the #GstPadTemplate to find a compatible     template for
     */
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * 
     * MT safe.
     * @param contextType a name of a context to retrieve
     */
    getContext(contextType: string): Gst.Context | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * @param contextType a name of a context to retrieve
     */
    getContextUnlocked(contextType: string): Gst.Context | null
    /**
     * Gets the contexts set on the element.
     * 
     * MT safe.
     */
    getContexts(): Gst.Context[]
    /**
     * Returns the current clock time of the element, as in, the time of the
     * element's clock, or GST_CLOCK_TIME_NONE if there is no clock.
     */
    getCurrentClockTime(): Gst.ClockTime
    /**
     * Returns the running time of the element. The running time is the
     * element's clock time minus its base time. Will return GST_CLOCK_TIME_NONE
     * if the element has no clock, or if its base time has not been set.
     */
    getCurrentRunningTime(): Gst.ClockTime
    /**
     * Retrieves the factory that was used to create this element.
     */
    getFactory(): Gst.ElementFactory | null
    /**
     * Get metadata with `key` in `klass`.
     * @param key the key to get
     */
    getMetadata(key: string): string
    /**
     * Retrieves a padtemplate from `element` with the given name.
     * @param name the name of the #GstPadTemplate to get.
     */
    getPadTemplate(name: string): Gst.PadTemplate | null
    /**
     * Retrieves a list of the pad templates associated with `element`. The
     * list must not be modified by the calling code.
     */
    getPadTemplateList(): Gst.PadTemplate[]
    /**
     * The name of this function is confusing to people learning GStreamer.
     * gst_element_request_pad_simple() aims at making it more explicit it is
     * a simplified gst_element_request_pad().
     * @param name the name of the request #GstPad to retrieve.
     */
    getRequestPad(name: string): Gst.Pad | null
    /**
     * Returns the start time of the element. The start time is the
     * running time of the clock when this element was last put to PAUSED.
     * 
     * Usually the start_time is managed by a toplevel element such as
     * #GstPipeline.
     * 
     * MT safe.
     */
    getStartTime(): Gst.ClockTime
    /**
     * Gets the state of the element.
     * 
     * For elements that performed an ASYNC state change, as reported by
     * gst_element_set_state(), this function will block up to the
     * specified timeout value for the state change to complete.
     * If the element completes the state change or goes into
     * an error, this function returns immediately with a return value of
     * %GST_STATE_CHANGE_SUCCESS or %GST_STATE_CHANGE_FAILURE respectively.
     * 
     * For elements that did not return %GST_STATE_CHANGE_ASYNC, this function
     * returns the current and pending state immediately.
     * 
     * This function returns %GST_STATE_CHANGE_NO_PREROLL if the element
     * successfully changed its state but is not able to provide data yet.
     * This mostly happens for live sources that only produce data in
     * %GST_STATE_PLAYING. While the state change return is equivalent to
     * %GST_STATE_CHANGE_SUCCESS, it is returned to the application to signal that
     * some sink elements might not be able to complete their state change because
     * an element is not producing data to complete the preroll. When setting the
     * element to playing, the preroll will complete and playback will start.
     * @param timeout a #GstClockTime to specify the timeout for an async           state change or %GST_CLOCK_TIME_NONE for infinite timeout.
     */
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    /**
     * Retrieves a pad from `element` by name. This version only retrieves
     * already-existing (i.e. 'static') pads.
     * @param name the name of the static #GstPad to retrieve.
     */
    getStaticPad(name: string): Gst.Pad | null
    /**
     * Checks if the state of an element is locked.
     * If the state of an element is locked, state changes of the parent don't
     * affect the element.
     * This way you can leave currently unused elements inside bins. Just lock their
     * state before changing the state from #GST_STATE_NULL.
     * 
     * MT safe.
     */
    isLockedState(): boolean
    /**
     * Retrieves an iterator of `element'`s pads. The iterator should
     * be freed after usage. Also more specialized iterators exists such as
     * gst_element_iterate_src_pads() or gst_element_iterate_sink_pads().
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iteratePads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s sink pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterateSinkPads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s source pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterateSrcPads(): Gst.Iterator
    /**
     * Links `src` to `dest`. The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * Such pads need to be released manually when unlinking.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     * @param dest the #GstElement containing the destination pad.
     */
    link(dest: Gst.Element): boolean
    /**
     * Links `src` to `dest` using the given caps as filtercaps.
     * The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     * @param dest the #GstElement containing the destination pad.
     * @param filter the #GstCaps to filter the link,     or %NULL for no filter.
     */
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element, or %NULL for any pad.
     */
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    /**
     * Links the two named pads of the source and destination elements. Side effect
     * is that if one of the pads has no parent, it becomes a child of the parent of
     * the other element. If they have different parents, the link fails. If `caps`
     * is not %NULL, makes sure that the caps of the link is a subset of `caps`.
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element     or %NULL for any pad.
     * @param filter the #GstCaps to filter the link,     or %NULL for no filter.
     */
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     * 
     * Calling gst_element_link_pads_full() with `flags` == %GST_PAD_LINK_CHECK_DEFAULT
     * is the same as calling gst_element_link_pads() and the recommended way of
     * linking pads with safety checks applied.
     * 
     * This is a convenience function for gst_pad_link_full().
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element, or %NULL for any pad.
     * @param flags the #GstPadLinkCheck to be performed when linking pads.
     */
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    /**
     * Brings the element to the lost state. The current state of the
     * element is copied to the pending state so that any call to
     * gst_element_get_state() will return %GST_STATE_CHANGE_ASYNC.
     * 
     * An ASYNC_START message is posted. If the element was PLAYING, it will
     * go to PAUSED. The element will be restored to its PLAYING state by
     * the parent pipeline when it prerolls again.
     * 
     * This is mostly used for elements that lost their preroll buffer
     * in the %GST_STATE_PAUSED or %GST_STATE_PLAYING state after a flush,
     * they will go to their pending state again when a new preroll buffer is
     * queued. This function can only be called when the element is currently
     * not in error or an async state change.
     * 
     * This function is used internally and should normally not be called from
     * plugins or applications.
     */
    lostState(): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     * 
     * MT safe.
     * @param type the #GstMessageType
     * @param domain the GStreamer GError domain this message belongs to
     * @param code the GError code belonging to the domain
     * @param text an allocated text string to be used            as a replacement for the default message connected to code,            or %NULL
     * @param debug an allocated debug message to be            used as a replacement for the default debugging information,            or %NULL
     * @param file the source code file where the error was generated
     * @param function_ the source code function where the error was generated
     * @param line the source code line where the error was generated
     */
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     * @param type the #GstMessageType
     * @param domain the GStreamer GError domain this message belongs to
     * @param code the GError code belonging to the domain
     * @param text an allocated text string to be used            as a replacement for the default message connected to code,            or %NULL
     * @param debug an allocated debug message to be            used as a replacement for the default debugging information,            or %NULL
     * @param file the source code file where the error was generated
     * @param function_ the source code function where the error was generated
     * @param line the source code line where the error was generated
     * @param structure optional details structure
     */
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    /**
     * Use this function to signal that the element does not expect any more pads
     * to show up in the current pipeline. This function should be called whenever
     * pads have been added by the element itself. Elements with #GST_PAD_SOMETIMES
     * pad templates use this in combination with autopluggers to figure out that
     * the element is done initializing its pads.
     * 
     * This function emits the #GstElement::no-more-pads signal.
     * 
     * MT safe.
     */
    noMorePads(): void
    /**
     * Post a message on the element's #GstBus. This function takes ownership of the
     * message; if you want to access the message after this call, you should add an
     * additional reference before calling.
     * @param message a #GstMessage to post
     */
    postMessage(message: Gst.Message): boolean
    /**
     * Get the clock provided by the given element.
     * > An element is only required to provide a clock in the PAUSED
     * > state. Some elements can provide a clock in other states.
     */
    provideClock(): Gst.Clock | null
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @param query the #GstQuery.
     */
    query(query: Gst.Query): boolean
    /**
     * Queries an element to convert `src_val` in `src_format` to `dest_format`.
     * @param srcFormat a #GstFormat to convert from.
     * @param srcVal a value to convert.
     * @param destFormat the #GstFormat to convert to.
     */
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * total stream duration in nanoseconds. This query will only work once the
     * pipeline is prerolled (i.e. reached PAUSED or PLAYING state). The application
     * will receive an ASYNC_DONE message on the pipeline bus when that is the case.
     * 
     * If the duration changes for some reason, you will get a DURATION_CHANGED
     * message on the pipeline bus, in which case you should re-query the duration
     * using this function.
     * @param format the #GstFormat requested
     */
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * stream position in nanoseconds. This will be a value between 0 and the
     * stream duration (if the stream duration is known). This query will usually
     * only work once the pipeline is prerolled (i.e. reached PAUSED or PLAYING
     * state). The application will receive an ASYNC_DONE message on the pipeline
     * bus when that is the case.
     * 
     * If one repeatedly calls this function one can also create a query and reuse
     * it in gst_element_query().
     * @param format the #GstFormat requested
     */
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    /**
     * Makes the element free the previously requested pad as obtained
     * with gst_element_request_pad().
     * 
     * This does not unref the pad. If the pad was created by using
     * gst_element_request_pad(), gst_element_release_request_pad() needs to be
     * followed by gst_object_unref() to free the `pad`.
     * 
     * MT safe.
     * @param pad the #GstPad to release.
     */
    releaseRequestPad(pad: Gst.Pad): void
    /**
     * Removes `pad` from `element`. `pad` will be destroyed if it has not been
     * referenced elsewhere using gst_object_unparent().
     * 
     * This function is used by plugin developers and should not be used
     * by applications. Pads that were dynamically requested from elements
     * with gst_element_request_pad() should be released with the
     * gst_element_release_request_pad() function instead.
     * 
     * Pads are not automatically deactivated so elements should perform the needed
     * steps to deactivate the pad in case this pad is removed in the PAUSED or
     * PLAYING state. See gst_pad_set_active() for more information about
     * deactivating pads.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-removed signal on the element.
     * @param pad the #GstPad to remove from the element.
     */
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    /**
     * Retrieves a request pad from the element according to the provided template.
     * Pad templates can be looked up using
     * gst_element_factory_get_static_pad_templates().
     * 
     * The pad should be released with gst_element_release_request_pad().
     * @param templ a #GstPadTemplate of which we want a pad of.
     * @param name the name of the request #GstPad to retrieve. Can be %NULL.
     * @param caps the caps of the pad we want to request. Can be %NULL.
     */
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad from the element by name (e.g. "src_\%d"). This version only
     * retrieves request pads. The pad should be released with
     * gst_element_release_request_pad().
     * 
     * This method is slower than manually getting the pad template and calling
     * gst_element_request_pad() if the pads should have a specific name (e.g.
     * `name` is "src_1" instead of "src_\%u").
     * 
     * Note that this function was introduced in GStreamer 1.20 in order to provide
     * a better name to gst_element_get_request_pad(). Prior to 1.20, users
     * should use gst_element_get_request_pad() which provides the same
     * functionality.
     * @param name the name of the request #GstPad to retrieve.
     */
    requestPadSimple(name: string): Gst.Pad | null
    /**
     * Sends a seek event to an element. See gst_event_new_seek() for the details of
     * the parameters. The seek event is sent to the element using
     * gst_element_send_event().
     * 
     * MT safe.
     * @param rate The new playback rate
     * @param format The format of the seek values
     * @param flags The optional seek flags.
     * @param startType The type and flags for the new start position
     * @param start The value of the new start position
     * @param stopType The type and flags for the new stop position
     * @param stop The value of the new stop position
     */
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
    /**
     * Simple API to perform a seek on the given element, meaning it just seeks
     * to the given position relative to the start of the stream. For more complex
     * operations like segment seeks (e.g. for looping) or changing the playback
     * rate or seeking relative to the last configured playback segment you should
     * use gst_element_seek().
     * 
     * In a completely prerolled PAUSED or PLAYING pipeline, seeking is always
     * guaranteed to return %TRUE on a seekable media type or %FALSE when the media
     * type is certainly not seekable (such as a live stream).
     * 
     * Some elements allow for seeking in the READY state, in this
     * case they will store the seek event and execute it when they are put to
     * PAUSED. If the element supports seek in READY, it will always return %TRUE when
     * it receives the event in the READY state.
     * @param format a #GstFormat to execute the seek in, such as #GST_FORMAT_TIME
     * @param seekFlags seek options; playback applications will usually want to use            GST_SEEK_FLAG_FLUSH | GST_SEEK_FLAG_KEY_UNIT here
     * @param seekPos position to seek to (relative to the start); if you are doing            a seek in #GST_FORMAT_TIME this value is in nanoseconds -            multiply with #GST_SECOND to convert seconds to nanoseconds or            with #GST_MSECOND to convert milliseconds to nanoseconds.
     */
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    /**
     * Sends an event to an element. If the element doesn't implement an
     * event handler, the event will be pushed on a random linked sink pad for
     * downstream events or a random linked source pad for upstream events.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     * 
     * MT safe.
     * @param event the #GstEvent to send to the element.
     */
    sendEvent(event: Gst.Event): boolean
    /**
     * Set the base time of an element. See gst_element_get_base_time().
     * 
     * MT safe.
     * @param time the base time to set.
     */
    setBaseTime(time: Gst.ClockTime): void
    /**
     * Sets the bus of the element. Increases the refcount on the bus.
     * For internal use only, unless you're testing elements.
     * 
     * MT safe.
     * @param bus the #GstBus to set.
     */
    setBus(bus?: Gst.Bus | null): void
    /**
     * Sets the clock for the element. This function increases the
     * refcount on the clock. Any previously set clock on the object
     * is unreffed.
     * @param clock the #GstClock to set for the element.
     */
    setClock(clock?: Gst.Clock | null): boolean
    /**
     * Sets the context of the element. Increases the refcount of the context.
     * 
     * MT safe.
     * @param context the #GstContext to set.
     */
    setContext(context: Gst.Context): void
    /**
     * Locks the state of an element, so state changes of the parent don't affect
     * this element anymore.
     * 
     * Note that this is racy if the state lock of the parent bin is not taken.
     * The parent bin might've just checked the flag in another thread and as the
     * next step proceed to change the child element's state.
     * 
     * MT safe.
     * @param lockedState %TRUE to lock the element's state
     */
    setLockedState(lockedState: boolean): boolean
    /**
     * Set the start time of an element. The start time of the element is the
     * running time of the element when it last went to the PAUSED state. In READY
     * or after a flushing seek, it is set to 0.
     * 
     * Toplevel elements like #GstPipeline will manage the start_time and
     * base_time on its children. Setting the start_time to #GST_CLOCK_TIME_NONE
     * on such a toplevel element will disable the distribution of the base_time to
     * the children and can be useful if the application manages the base_time
     * itself, for example if you want to synchronize capture from multiple
     * pipelines, and you can also ensure that the pipelines have the same clock.
     * 
     * MT safe.
     * @param time the base time to set.
     */
    setStartTime(time: Gst.ClockTime): void
    /**
     * Sets the state of the element. This function will try to set the
     * requested state by going through all the intermediary states and calling
     * the class's state change function for each.
     * 
     * This function can return #GST_STATE_CHANGE_ASYNC, in which case the
     * element will perform the remainder of the state change asynchronously in
     * another thread.
     * An application can use gst_element_get_state() to wait for the completion
     * of the state change or it can wait for a %GST_MESSAGE_ASYNC_DONE or
     * %GST_MESSAGE_STATE_CHANGED on the bus.
     * 
     * State changes to %GST_STATE_READY or %GST_STATE_NULL never return
     * #GST_STATE_CHANGE_ASYNC.
     * @param state the element's new #GstState.
     */
    setState(state: Gst.State): Gst.StateChangeReturn
    /**
     * Tries to change the state of the element to the same as its parent.
     * If this function returns %FALSE, the state of element is undefined.
     */
    syncStateWithParent(): boolean
    /**
     * Unlinks all source pads of the source element with all sink pads
     * of the sink element to which they are linked.
     * 
     * If the link has been made using gst_element_link(), it could have created an
     * requestpad, which has to be released using gst_element_release_request_pad().
     * @param dest the sink #GstElement to unlink.
     */
    unlink(dest: Gst.Element): void
    /**
     * Unlinks the two named pads of the source and destination elements.
     * 
     * This is a convenience function for gst_pad_unlink().
     * @param srcpadname the name of the #GstPad in source element.
     * @param dest a #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element.
     */
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    /**
     * Attach the #GstControlBinding to the object. If there already was a
     * #GstControlBinding for this property it will be replaced.
     * 
     * The object's reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     * @param binding the #GstControlBinding that should be used
     */
    addControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * A default error function that uses g_printerr() to display the error message
     * and the optional debug string..
     * 
     * The default handler will simply print the error string using g_print.
     * @param error the GError.
     * @param debug an additional debug information string, or %NULL
     */
    defaultError(error: GLib.Error, debug?: string | null): void
    /**
     * Gets the corresponding #GstControlBinding for the property. This should be
     * unreferenced again after use.
     * @param propertyName name of the property
     */
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    /**
     * Obtain the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * If the `object` is not under property control, this will return
     * %GST_CLOCK_TIME_NONE. This allows the element to avoid the sub-dividing.
     * 
     * The control-rate is not expected to change if the element is in
     * %GST_STATE_PAUSED or %GST_STATE_PLAYING.
     */
    getControlRate(): Gst.ClockTime
    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     * @param propertyName the name of the property to get
     * @param timestamp the time that should be processed
     * @param interval the time spacing between subsequent values
     * @param values array to put control-values in
     */
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Returns a copy of the name of `object`.
     * Caller should g_free() the return value after usage.
     * For a nameless object, this returns %NULL, which you can safely g_free()
     * as well.
     * 
     * Free-function: g_free
     */
    getName(): string | null
    /**
     * Returns the parent of `object`. This function increases the refcount
     * of the parent object so you should gst_object_unref() it after usage.
     */
    getParent(): Gst.Object | null
    /**
     * Generates a string describing the path of `object` in
     * the object hierarchy. Only useful (or used) for debugging.
     * 
     * Free-function: g_free
     */
    getPathString(): string
    /**
     * Gets the value for the given controlled property at the requested time.
     * @param propertyName the name of the property to get
     * @param timestamp the time the control-change should be read from
     */
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    /**
     * Check if the `object` has active controlled properties.
     */
    hasActiveControlBindings(): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    hasAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    hasAsAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `parent` is the parent of `object`.
     * E.g. a #GstElement can check if it owns a given #GstPad.
     * @param parent a #GstObject to check as parent
     */
    hasAsParent(parent: Gst.Object): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     */
    ref(): Gst.Object
    /**
     * Removes the corresponding #GstControlBinding. If it was the
     * last ref of the binding, it will be disposed.
     * @param binding the binding
     */
    removeControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * This function is used to disable the control bindings on a property for
     * some time, i.e. gst_object_sync_values() will do nothing for the
     * property.
     * @param propertyName property to disable
     * @param disabled boolean that specifies whether to disable the controller or not.
     */
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    /**
     * This function is used to disable all controlled properties of the `object` for
     * some time, i.e. gst_object_sync_values() will do nothing.
     * @param disabled boolean that specifies whether to disable the controller or not.
     */
    setControlBindingsDisabled(disabled: boolean): void
    /**
     * Change the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * The control-rate should not change if the element is in %GST_STATE_PAUSED or
     * %GST_STATE_PLAYING.
     * @param controlRate the new control-rate in nanoseconds.
     */
    setControlRate(controlRate: Gst.ClockTime): void
    /**
     * Sets the name of `object,` or gives `object` a guaranteed unique
     * name (if `name` is %NULL).
     * This function makes a copy of the provided name, so the caller
     * retains ownership of the name it sent.
     * @param name new name of object
     */
    setName(name?: string | null): boolean
    /**
     * Sets the parent of `object` to `parent`. The object's reference count will
     * be incremented, and any floating reference will be removed (see gst_object_ref_sink()).
     * @param parent new parent of object
     */
    setParent(parent: Gst.Object): boolean
    /**
     * Returns a suggestion for timestamps where buffers should be split
     * to get best controller results.
     */
    suggestNextSync(): Gst.ClockTime
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     * @param timestamp the time that should be processed
     */
    syncValues(timestamp: Gst.ClockTime): boolean
    /**
     * Clear the parent of `object,` removing the associated reference.
     * This function decreases the refcount of `object`.
     * 
     * MT safe. Grabs and releases `object'`s lock.
     */
    unparent(): void
    /**
     * Decrements the reference count on `object`.  If reference count hits
     * zero, destroy `object`. This function does not take the lock
     * on `object` as it relies on atomic refcounting.
     * 
     * The unref method should never be called with the LOCK held since
     * this might deadlock the dispose function.
     */
    unref(): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Signals of Gst-1.0.Gst.Element */
    /**
     * This signals that the element will not generate more dynamic pads.
     * Note that this signal will usually be emitted from the context of
     * the streaming thread.
     */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    /**
     * a new #GstPad has been added to the element. Note that this signal will
     * usually be emitted from the context of the streaming thread. Also keep in
     * mind that if you add new elements to the pipeline in the signal handler
     * you will need to set them to the desired target state with
     * gst_element_set_state() or gst_element_sync_state_with_parent().
     * @param newPad the pad that has been added
     */
    connect(sigName: "pad-added", callback: ((newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    /**
     * a #GstPad has been removed from the element
     * @param oldPad the pad that has been removed
     */
    connect(sigName: "pad-removed", callback: ((oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    /**
     * The deep notify signal is used to be notified of property changes. It is
     * typically attached to the toplevel bin to receive notifications from all
     * the elements contained in that bin.
     * @param propObject the object that originated the signal
     * @param prop the property that changed
     */
    connect(sigName: "deep-notify", callback: ((propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::automatic-request-sync-point-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-request-sync-point-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::automatic-request-sync-point-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::automatic-request-sync-point-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::automatic-request-sync-point-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::automatic-request-sync-points", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-request-sync-points", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::automatic-request-sync-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::automatic-request-sync-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::automatic-request-sync-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::discard-corrupted-frames", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard-corrupted-frames", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-force-key-unit-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-force-key-unit-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: H265Decoder_ConstructProps)
    _init (config?: H265Decoder_ConstructProps): void
    static $gtype: GObject.Type
}
interface Mpeg2Decoder_ConstructProps extends GstVideo.VideoDecoder_ConstructProps {
}
class Mpeg2Decoder {
    /* Properties of GstVideo-1.0.GstVideo.VideoDecoder */
    /**
     * GstVideoDecoderRequestSyncPointFlags to use for the automatically
     * requested sync points if `automatic-request-sync-points` is enabled.
     */
    automaticRequestSyncPointFlags: GstVideo.VideoDecoderRequestSyncPointFlags
    /**
     * If set to %TRUE the decoder will automatically request sync points when
     * it seems like a good idea, e.g. if the first frames are not key frames or
     * if packet loss was reported by upstream.
     */
    automaticRequestSyncPoints: boolean
    /**
     * If set to %TRUE the decoder will discard frames that are marked as
     * corrupted instead of outputting them.
     */
    discardCorruptedFrames: boolean
    /**
     * Maximum number of tolerated consecutive decode errors. See
     * gst_video_decoder_set_max_errors() for more details.
     */
    maxErrors: number
    /**
     * Minimum interval between force-key-unit events sent upstream by the
     * decoder. Setting this to 0 will cause every event to be handled, setting
     * this to %GST_CLOCK_TIME_NONE will cause every event to be ignored.
     * 
     * See gst_video_event_new_upstream_force_key_unit() for more details about
     * force-key-unit events.
     */
    minForceKeyUnitInterval: number
    /**
     * If set to %TRUE the decoder will handle QoS events received
     * from downstream elements.
     * This includes dropping output frames which are detected as late
     * using the metrics reported by those events.
     */
    qos: boolean
    /* Fields of Gst-1.0.Gst.Element */
    object: Gst.Object
    /**
     * Used to serialize execution of gst_element_set_state()
     */
    stateLock: GLib.RecMutex
    /**
     * Used to signal completion of a state change
     */
    stateCond: GLib.Cond
    /**
     * Used to detect concurrent execution of
     * gst_element_set_state() and gst_element_get_state()
     */
    stateCookie: number
    /**
     * the target state of an element as set by the application
     */
    targetState: Gst.State
    /**
     * the current state of an element
     */
    currentState: Gst.State
    /**
     * the next state of an element, can be #GST_STATE_VOID_PENDING if
     * the element is in the correct state.
     */
    nextState: Gst.State
    /**
     * the final state the element should go to, can be
     * #GST_STATE_VOID_PENDING if the element is in the correct state
     */
    pendingState: Gst.State
    /**
     * the last return value of an element state change
     */
    lastReturn: Gst.StateChangeReturn
    /**
     * the bus of the element. This bus is provided to the element by the
     * parent element or the application. A #GstPipeline has a bus of its own.
     */
    bus: Gst.Bus
    /**
     * the clock of the element. This clock is usually provided to the
     * element by the toplevel #GstPipeline.
     */
    clock: Gst.Clock
    /**
     * the time of the clock right before the element is set to
     * PLAYING. Subtracting `base_time` from the current clock time in the PLAYING
     * state will yield the running_time against the clock.
     */
    baseTime: Gst.ClockTimeDiff
    /**
     * the running_time of the last PAUSED state
     */
    startTime: Gst.ClockTime
    /**
     * number of pads of the element, includes both source and sink pads.
     */
    numpads: number
    /**
     * list of pads
     */
    pads: Gst.Pad[]
    /**
     * number of source pads of the element.
     */
    numsrcpads: number
    /**
     * list of source pads
     */
    srcpads: Gst.Pad[]
    /**
     * number of sink pads of the element.
     */
    numsinkpads: number
    /**
     * list of sink pads
     */
    sinkpads: Gst.Pad[]
    /**
     * updated whenever the a pad is added or removed
     */
    padsCookie: number
    /**
     * list of contexts
     */
    contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    /**
     * object LOCK
     */
    lock: GLib.Mutex
    /**
     * The name of the object
     */
    name: string
    /**
     * this object's parent, weak ref
     */
    parent: Gst.Object
    /**
     * flags for this object
     */
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstVideo-1.0.GstVideo.VideoDecoder */
    /**
     * Removes next `n_bytes` of input data and adds it to currently parsed frame.
     * @param nBytes the number of bytes to add
     */
    addToFrame(nBytes: number): void
    /**
     * Helper function that allocates a buffer to hold a video frame for `decoder'`s
     * current #GstVideoCodecState.
     * 
     * You should use gst_video_decoder_allocate_output_frame() instead of this
     * function, if possible at all.
     */
    allocateOutputBuffer(): Gst.Buffer
    /**
     * Helper function that allocates a buffer to hold a video frame for `decoder'`s
     * current #GstVideoCodecState.  Subclass should already have configured video
     * state and set src pad caps.
     * 
     * The buffer allocated here is owned by the frame and you should only
     * keep references to the frame, not the buffer.
     * @param frame a #GstVideoCodecFrame
     */
    allocateOutputFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * Same as #gst_video_decoder_allocate_output_frame except it allows passing
     * #GstBufferPoolAcquireParams to the sub call gst_buffer_pool_acquire_buffer.
     * @param frame a #GstVideoCodecFrame
     * @param params a #GstBufferPoolAcquireParams
     */
    allocateOutputFrameWithParams(frame: GstVideo.VideoCodecFrame, params: Gst.BufferPoolAcquireParams): Gst.FlowReturn
    /**
     * Similar to gst_video_decoder_finish_frame(), but drops `frame` in any
     * case and posts a QoS message with the frame's details on the bus.
     * In any case, the frame is considered finished and released.
     * @param frame the #GstVideoCodecFrame to drop
     */
    dropFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * Drops input data.
     * The frame is not considered finished until the whole frame
     * is finished or dropped by the subclass.
     * @param frame the #GstVideoCodecFrame
     */
    dropSubframe(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * `frame` should have a valid decoded data buffer, whose metadata fields
     * are then appropriately set according to frame data and pushed downstream.
     * If no output data is provided, `frame` is considered skipped.
     * In any case, the frame is considered finished and released.
     * 
     * After calling this function the output buffer of the frame is to be
     * considered read-only. This function will also change the metadata
     * of the buffer.
     * @param frame a decoded #GstVideoCodecFrame
     */
    finishFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * Indicate that a subframe has been finished to be decoded
     * by the subclass. This method should be called for all subframes
     * except the last subframe where `gst_video_decoder_finish_frame`
     * should be called instead.
     * @param frame the #GstVideoCodecFrame
     */
    finishSubframe(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * Lets #GstVideoDecoder sub-classes to know the memory `allocator`
     * used by the base class and its `params`.
     * 
     * Unref the `allocator` after use it.
     */
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    getBufferPool(): Gst.BufferPool
    getEstimateRate(): number
    /**
     * Get a pending unfinished #GstVideoCodecFrame
     * @param frameNumber system_frame_number of a frame
     */
    getFrame(frameNumber: number): GstVideo.VideoCodecFrame
    /**
     * Get all pending unfinished #GstVideoCodecFrame
     */
    getFrames(): GstVideo.VideoCodecFrame[]
    /**
     * Queries the number of the last subframe received by
     * the decoder baseclass in the `frame`.
     * @param frame the #GstVideoCodecFrame to update
     */
    getInputSubframeIndex(frame: GstVideo.VideoCodecFrame): number
    /**
     * Query the configured decoder latency. Results will be returned via
     * `min_latency` and `max_latency`.
     */
    getLatency(): [ /* minLatency */ Gst.ClockTime | null, /* maxLatency */ Gst.ClockTime | null ]
    /**
     * Determines maximum possible decoding time for `frame` that will
     * allow it to decode and arrive in time (as determined by QoS events).
     * In particular, a negative result means decoding in time is no longer possible
     * and should therefore occur as soon/skippy as possible.
     * @param frame a #GstVideoCodecFrame
     */
    getMaxDecodeTime(frame: GstVideo.VideoCodecFrame): Gst.ClockTimeDiff
    getMaxErrors(): number
    /**
     * Queries decoder required format handling.
     */
    getNeedsFormat(): boolean
    /**
     * Queries if the decoder requires a sync point before it starts outputting
     * data in the beginning.
     */
    getNeedsSyncPoint(): boolean
    /**
     * Get the oldest pending unfinished #GstVideoCodecFrame
     */
    getOldestFrame(): GstVideo.VideoCodecFrame
    /**
     * Get the #GstVideoCodecState currently describing the output stream.
     */
    getOutputState(): GstVideo.VideoCodecState
    /**
     * Queries whether input data is considered packetized or not by the
     * base class.
     */
    getPacketized(): boolean
    /**
     * Returns the number of bytes previously added to the current frame
     * by calling gst_video_decoder_add_to_frame().
     */
    getPendingFrameSize(): number
    /**
     * Queries the number of subframes in the frame processed by
     * the decoder baseclass.
     * @param frame the #GstVideoCodecFrame to update
     */
    getProcessedSubframeIndex(frame: GstVideo.VideoCodecFrame): number
    getQosProportion(): number
    /**
     * Queries whether input data is considered as subframes or not by the
     * base class. If FALSE, each input buffer will be considered as a full
     * frame.
     */
    getSubframeMode(): boolean
    /**
     * Gathers all data collected for currently parsed frame, gathers corresponding
     * metadata and passes it along for further processing, i.e. `handle_frame`.
     */
    haveFrame(): Gst.FlowReturn
    /**
     * Indicates that the last subframe has been processed by the decoder
     * in `frame`. This will release the current frame in video decoder
     * allowing to receive new frames from upstream elements. This method
     * must be called in the subclass `handle_frame` callback.
     * @param frame the #GstVideoCodecFrame to update
     */
    haveLastSubframe(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * Sets the audio decoder tags and how they should be merged with any
     * upstream stream tags. This will override any tags previously-set
     * with gst_audio_decoder_merge_tags().
     * 
     * Note that this is provided for convenience, and the subclass is
     * not required to use this and can still do tag handling on its own.
     * 
     * MT safe.
     * @param tags a #GstTagList to merge, or NULL to unset     previously-set tags
     * @param mode the #GstTagMergeMode to use, usually #GST_TAG_MERGE_REPLACE
     */
    mergeTags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    /**
     * Negotiate with downstream elements to currently configured #GstVideoCodecState.
     * Unmark GST_PAD_FLAG_NEED_RECONFIGURE in any case. But mark it again if
     * negotiate fails.
     */
    negotiate(): boolean
    /**
     * Returns caps that express `caps` (or sink template caps if `caps` == NULL)
     * restricted to resolution/format/... combinations supported by downstream
     * elements.
     * @param caps initial caps
     * @param filter filter caps
     */
    proxyGetcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps
    /**
     * Similar to gst_video_decoder_drop_frame(), but simply releases `frame`
     * without any processing other than removing it from list of pending frames,
     * after which it is considered finished and released.
     * @param frame the #GstVideoCodecFrame to release
     */
    releaseFrame(frame: GstVideo.VideoCodecFrame): void
    /**
     * Allows the #GstVideoDecoder subclass to request from the base class that
     * a new sync should be requested from upstream, and that `frame` was the frame
     * when the subclass noticed that a new sync point is required. A reason for
     * the subclass to do this could be missing reference frames, for example.
     * 
     * The base class will then request a new sync point from upstream as long as
     * the time that passed since the last one is exceeding
     * #GstVideoDecoder:min-force-key-unit-interval.
     * 
     * The subclass can signal via `flags` how the frames until the next sync point
     * should be handled:
     * 
     *   * If %GST_VIDEO_DECODER_REQUEST_SYNC_POINT_DISCARD_INPUT is selected then
     *     all following input frames until the next sync point are discarded.
     *     This can be useful if the lack of a sync point will prevent all further
     *     decoding and the decoder implementation is not very robust in handling
     *     missing references frames.
     *   * If %GST_VIDEO_DECODER_REQUEST_SYNC_POINT_CORRUPT_OUTPUT is selected
     *     then all output frames following `frame` are marked as corrupted via
     *     %GST_BUFFER_FLAG_CORRUPTED. Corrupted frames can be automatically
     *     dropped by the base class, see #GstVideoDecoder:discard-corrupted-frames.
     *     Subclasses can manually mark frames as corrupted via %GST_VIDEO_CODEC_FRAME_FLAG_CORRUPTED
     *     before calling gst_video_decoder_finish_frame().
     * @param frame a #GstVideoCodecFrame
     * @param flags #GstVideoDecoderRequestSyncPointFlags
     */
    requestSyncPoint(frame: GstVideo.VideoCodecFrame, flags: GstVideo.VideoDecoderRequestSyncPointFlags): void
    /**
     * Allows baseclass to perform byte to time estimated conversion.
     * @param enabled whether to enable byte to time conversion
     */
    setEstimateRate(enabled: boolean): void
    /**
     * Same as #gst_video_decoder_set_output_state() but also allows you to also set
     * the interlacing mode.
     * @param fmt a #GstVideoFormat
     * @param interlaceMode A #GstVideoInterlaceMode
     * @param width The width in pixels
     * @param height The height in pixels
     * @param reference An optional reference #GstVideoCodecState
     */
    setInterlacedOutputState(fmt: GstVideo.VideoFormat, interlaceMode: GstVideo.VideoInterlaceMode, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    /**
     * Lets #GstVideoDecoder sub-classes tell the baseclass what the decoder
     * latency is. Will also post a LATENCY message on the bus so the pipeline
     * can reconfigure its global latency.
     * @param minLatency minimum latency
     * @param maxLatency maximum latency
     */
    setLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): void
    /**
     * Sets numbers of tolerated decoder errors, where a tolerated one is then only
     * warned about, but more than tolerated will lead to fatal error.  You can set
     * -1 for never returning fatal errors. Default is set to
     * GST_VIDEO_DECODER_MAX_ERRORS.
     * 
     * The '-1' option was added in 1.4
     * @param num max tolerated errors
     */
    setMaxErrors(num: number): void
    /**
     * Configures decoder format needs.  If enabled, subclass needs to be
     * negotiated with format caps before it can process any data.  It will then
     * never be handed any data before it has been configured.
     * Otherwise, it might be handed data without having been configured and
     * is then expected being able to do so either by default
     * or based on the input data.
     * @param enabled new state
     */
    setNeedsFormat(enabled: boolean): void
    /**
     * Configures whether the decoder requires a sync point before it starts
     * outputting data in the beginning. If enabled, the base class will discard
     * all non-sync point frames in the beginning and after a flush and does not
     * pass it to the subclass.
     * 
     * If the first frame is not a sync point, the base class will request a sync
     * point via the force-key-unit event.
     * @param enabled new state
     */
    setNeedsSyncPoint(enabled: boolean): void
    /**
     * Creates a new #GstVideoCodecState with the specified `fmt,` `width` and `height`
     * as the output state for the decoder.
     * Any previously set output state on `decoder` will be replaced by the newly
     * created one.
     * 
     * If the subclass wishes to copy over existing fields (like pixel aspec ratio,
     * or framerate) from an existing #GstVideoCodecState, it can be provided as a
     * `reference`.
     * 
     * If the subclass wishes to override some fields from the output state (like
     * pixel-aspect-ratio or framerate) it can do so on the returned #GstVideoCodecState.
     * 
     * The new output state will only take effect (set on pads and buffers) starting
     * from the next call to #gst_video_decoder_finish_frame().
     * @param fmt a #GstVideoFormat
     * @param width The width in pixels
     * @param height The height in pixels
     * @param reference An optional reference #GstVideoCodecState
     */
    setOutputState(fmt: GstVideo.VideoFormat, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    /**
     * Allows baseclass to consider input data as packetized or not. If the
     * input is packetized, then the `parse` method will not be called.
     * @param packetized whether the input data should be considered as packetized.
     */
    setPacketized(packetized: boolean): void
    /**
     * If this is set to TRUE, it informs the base class that the subclass
     * can receive the data at a granularity lower than one frame.
     * 
     * Note that in this mode, the subclass has two options. It can either
     * require the presence of a GST_VIDEO_BUFFER_FLAG_MARKER to mark the
     * end of a frame. Or it can operate in such a way that it will decode
     * a single frame at a time. In this second case, every buffer that
     * arrives to the element is considered part of the same frame until
     * gst_video_decoder_finish_frame() is called.
     * 
     * In either case, the same #GstVideoCodecFrame will be passed to the
     * GstVideoDecoderClass:handle_frame vmethod repeatedly with a
     * different GstVideoCodecFrame:input_buffer every time until the end of the
     * frame has been signaled using either method.
     * This method must be called during the decoder subclass `set_format` call.
     * @param subframeMode whether the input data should be considered as subframes.
     */
    setSubframeMode(subframeMode: boolean): void
    /**
     * Lets #GstVideoDecoder sub-classes decide if they want the sink pad
     * to use the default pad query handler to reply to accept-caps queries.
     * 
     * By setting this to true it is possible to further customize the default
     * handler with %GST_PAD_SET_ACCEPT_INTERSECT and
     * %GST_PAD_SET_ACCEPT_TEMPLATE
     * @param use if the default pad accept-caps query handling should be used
     */
    setUseDefaultPadAcceptcaps(use: boolean): void
    /* Methods of Gst-1.0.Gst.Element */
    /**
     * Abort the state change of the element. This function is used
     * by elements that do asynchronous state changes and find out
     * something is wrong.
     * 
     * This function should be called with the STATE_LOCK held.
     * 
     * MT safe.
     */
    abortState(): void
    /**
     * Adds a pad (link point) to `element`. `pad'`s parent will be set to `element;`
     * see gst_object_set_parent() for refcounting information.
     * 
     * Pads are automatically activated when added in the PAUSED or PLAYING
     * state.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-added signal on the element.
     * @param pad the #GstPad to add to the element.
     */
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    /**
     * Calls `func` from another thread and passes `user_data` to it. This is to be
     * used for cases when a state change has to be performed from a streaming
     * thread, directly via gst_element_set_state() or indirectly e.g. via SEEK
     * events.
     * 
     * Calling those functions directly from the streaming thread will cause
     * deadlocks in many situations, as they might involve waiting for the
     * streaming thread to shut down from this very streaming thread.
     * 
     * MT safe.
     * @param func Function to call asynchronously from another thread
     */
    callAsync(func: Gst.ElementCallAsyncFunc): void
    /**
     * Perform `transition` on `element`.
     * 
     * This function must be called with STATE_LOCK held and is mainly used
     * internally.
     * @param transition the requested transition
     */
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    /**
     * Commit the state change of the element and proceed to the next
     * pending state if any. This function is used
     * by elements that do asynchronous state changes.
     * The core will normally call this method automatically when an
     * element returned %GST_STATE_CHANGE_SUCCESS from the state change function.
     * 
     * If after calling this method the element still has not reached
     * the pending state, the next state change is performed.
     * 
     * This method is used internally and should normally not be called by plugins
     * or applications.
     * 
     * This function must be called with STATE_LOCK held.
     * @param ret The previous state return value
     */
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    /**
     * Creates a pad for each pad template that is always available.
     * This function is only useful during object initialization of
     * subclasses of #GstElement.
     */
    createAllPads(): void
    /**
     * Call `func` with `user_data` for each of `element'`s pads. `func` will be called
     * exactly once for each pad that exists at the time of this call, unless
     * one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new pads are added or pads are removed
     * while pads are being iterated, this will not be taken into account until
     * next time this function is used.
     * @param func function to call for each pad
     */
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s sink pads. `func` will be
     * called exactly once for each sink pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new sink pads are added or sink pads
     * are removed while the sink pads are being iterated, this will not be taken
     * into account until next time this function is used.
     * @param func function to call for each sink pad
     */
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s source pads. `func` will be
     * called exactly once for each source pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new source pads are added or source pads
     * are removed while the source pads are being iterated, this will not be taken
     * into account until next time this function is used.
     * @param func function to call for each source pad
     */
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Returns the base time of the element. The base time is the
     * absolute time of the clock when this element was last put to
     * PLAYING. Subtracting the base time from the clock time gives
     * the running time of the element.
     */
    getBaseTime(): Gst.ClockTime
    /**
     * Returns the bus of the element. Note that only a #GstPipeline will provide a
     * bus for the application.
     */
    getBus(): Gst.Bus | null
    /**
     * Gets the currently configured clock of the element. This is the clock as was
     * last set with gst_element_set_clock().
     * 
     * Elements in a pipeline will only have their clock set when the
     * pipeline is in the PLAYING state.
     */
    getClock(): Gst.Clock | null
    /**
     * Looks for an unlinked pad to which the given pad can link. It is not
     * guaranteed that linking the pads will work, though it should work in most
     * cases.
     * 
     * This function will first attempt to find a compatible unlinked ALWAYS pad,
     * and if none can be found, it will request a compatible REQUEST pad by looking
     * at the templates of `element`.
     * @param pad the #GstPad to find a compatible one for.
     * @param caps the #GstCaps to use as a filter.
     */
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad template from `element` that is compatible with `compattempl`.
     * Pads from compatible templates can be linked together.
     * @param compattempl the #GstPadTemplate to find a compatible     template for
     */
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * 
     * MT safe.
     * @param contextType a name of a context to retrieve
     */
    getContext(contextType: string): Gst.Context | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * @param contextType a name of a context to retrieve
     */
    getContextUnlocked(contextType: string): Gst.Context | null
    /**
     * Gets the contexts set on the element.
     * 
     * MT safe.
     */
    getContexts(): Gst.Context[]
    /**
     * Returns the current clock time of the element, as in, the time of the
     * element's clock, or GST_CLOCK_TIME_NONE if there is no clock.
     */
    getCurrentClockTime(): Gst.ClockTime
    /**
     * Returns the running time of the element. The running time is the
     * element's clock time minus its base time. Will return GST_CLOCK_TIME_NONE
     * if the element has no clock, or if its base time has not been set.
     */
    getCurrentRunningTime(): Gst.ClockTime
    /**
     * Retrieves the factory that was used to create this element.
     */
    getFactory(): Gst.ElementFactory | null
    /**
     * Get metadata with `key` in `klass`.
     * @param key the key to get
     */
    getMetadata(key: string): string
    /**
     * Retrieves a padtemplate from `element` with the given name.
     * @param name the name of the #GstPadTemplate to get.
     */
    getPadTemplate(name: string): Gst.PadTemplate | null
    /**
     * Retrieves a list of the pad templates associated with `element`. The
     * list must not be modified by the calling code.
     */
    getPadTemplateList(): Gst.PadTemplate[]
    /**
     * The name of this function is confusing to people learning GStreamer.
     * gst_element_request_pad_simple() aims at making it more explicit it is
     * a simplified gst_element_request_pad().
     * @param name the name of the request #GstPad to retrieve.
     */
    getRequestPad(name: string): Gst.Pad | null
    /**
     * Returns the start time of the element. The start time is the
     * running time of the clock when this element was last put to PAUSED.
     * 
     * Usually the start_time is managed by a toplevel element such as
     * #GstPipeline.
     * 
     * MT safe.
     */
    getStartTime(): Gst.ClockTime
    /**
     * Gets the state of the element.
     * 
     * For elements that performed an ASYNC state change, as reported by
     * gst_element_set_state(), this function will block up to the
     * specified timeout value for the state change to complete.
     * If the element completes the state change or goes into
     * an error, this function returns immediately with a return value of
     * %GST_STATE_CHANGE_SUCCESS or %GST_STATE_CHANGE_FAILURE respectively.
     * 
     * For elements that did not return %GST_STATE_CHANGE_ASYNC, this function
     * returns the current and pending state immediately.
     * 
     * This function returns %GST_STATE_CHANGE_NO_PREROLL if the element
     * successfully changed its state but is not able to provide data yet.
     * This mostly happens for live sources that only produce data in
     * %GST_STATE_PLAYING. While the state change return is equivalent to
     * %GST_STATE_CHANGE_SUCCESS, it is returned to the application to signal that
     * some sink elements might not be able to complete their state change because
     * an element is not producing data to complete the preroll. When setting the
     * element to playing, the preroll will complete and playback will start.
     * @param timeout a #GstClockTime to specify the timeout for an async           state change or %GST_CLOCK_TIME_NONE for infinite timeout.
     */
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    /**
     * Retrieves a pad from `element` by name. This version only retrieves
     * already-existing (i.e. 'static') pads.
     * @param name the name of the static #GstPad to retrieve.
     */
    getStaticPad(name: string): Gst.Pad | null
    /**
     * Checks if the state of an element is locked.
     * If the state of an element is locked, state changes of the parent don't
     * affect the element.
     * This way you can leave currently unused elements inside bins. Just lock their
     * state before changing the state from #GST_STATE_NULL.
     * 
     * MT safe.
     */
    isLockedState(): boolean
    /**
     * Retrieves an iterator of `element'`s pads. The iterator should
     * be freed after usage. Also more specialized iterators exists such as
     * gst_element_iterate_src_pads() or gst_element_iterate_sink_pads().
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iteratePads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s sink pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterateSinkPads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s source pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterateSrcPads(): Gst.Iterator
    /**
     * Links `src` to `dest`. The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * Such pads need to be released manually when unlinking.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     * @param dest the #GstElement containing the destination pad.
     */
    link(dest: Gst.Element): boolean
    /**
     * Links `src` to `dest` using the given caps as filtercaps.
     * The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     * @param dest the #GstElement containing the destination pad.
     * @param filter the #GstCaps to filter the link,     or %NULL for no filter.
     */
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element, or %NULL for any pad.
     */
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    /**
     * Links the two named pads of the source and destination elements. Side effect
     * is that if one of the pads has no parent, it becomes a child of the parent of
     * the other element. If they have different parents, the link fails. If `caps`
     * is not %NULL, makes sure that the caps of the link is a subset of `caps`.
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element     or %NULL for any pad.
     * @param filter the #GstCaps to filter the link,     or %NULL for no filter.
     */
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     * 
     * Calling gst_element_link_pads_full() with `flags` == %GST_PAD_LINK_CHECK_DEFAULT
     * is the same as calling gst_element_link_pads() and the recommended way of
     * linking pads with safety checks applied.
     * 
     * This is a convenience function for gst_pad_link_full().
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element, or %NULL for any pad.
     * @param flags the #GstPadLinkCheck to be performed when linking pads.
     */
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    /**
     * Brings the element to the lost state. The current state of the
     * element is copied to the pending state so that any call to
     * gst_element_get_state() will return %GST_STATE_CHANGE_ASYNC.
     * 
     * An ASYNC_START message is posted. If the element was PLAYING, it will
     * go to PAUSED. The element will be restored to its PLAYING state by
     * the parent pipeline when it prerolls again.
     * 
     * This is mostly used for elements that lost their preroll buffer
     * in the %GST_STATE_PAUSED or %GST_STATE_PLAYING state after a flush,
     * they will go to their pending state again when a new preroll buffer is
     * queued. This function can only be called when the element is currently
     * not in error or an async state change.
     * 
     * This function is used internally and should normally not be called from
     * plugins or applications.
     */
    lostState(): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     * 
     * MT safe.
     * @param type the #GstMessageType
     * @param domain the GStreamer GError domain this message belongs to
     * @param code the GError code belonging to the domain
     * @param text an allocated text string to be used            as a replacement for the default message connected to code,            or %NULL
     * @param debug an allocated debug message to be            used as a replacement for the default debugging information,            or %NULL
     * @param file the source code file where the error was generated
     * @param function_ the source code function where the error was generated
     * @param line the source code line where the error was generated
     */
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     * @param type the #GstMessageType
     * @param domain the GStreamer GError domain this message belongs to
     * @param code the GError code belonging to the domain
     * @param text an allocated text string to be used            as a replacement for the default message connected to code,            or %NULL
     * @param debug an allocated debug message to be            used as a replacement for the default debugging information,            or %NULL
     * @param file the source code file where the error was generated
     * @param function_ the source code function where the error was generated
     * @param line the source code line where the error was generated
     * @param structure optional details structure
     */
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    /**
     * Use this function to signal that the element does not expect any more pads
     * to show up in the current pipeline. This function should be called whenever
     * pads have been added by the element itself. Elements with #GST_PAD_SOMETIMES
     * pad templates use this in combination with autopluggers to figure out that
     * the element is done initializing its pads.
     * 
     * This function emits the #GstElement::no-more-pads signal.
     * 
     * MT safe.
     */
    noMorePads(): void
    /**
     * Post a message on the element's #GstBus. This function takes ownership of the
     * message; if you want to access the message after this call, you should add an
     * additional reference before calling.
     * @param message a #GstMessage to post
     */
    postMessage(message: Gst.Message): boolean
    /**
     * Get the clock provided by the given element.
     * > An element is only required to provide a clock in the PAUSED
     * > state. Some elements can provide a clock in other states.
     */
    provideClock(): Gst.Clock | null
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @param query the #GstQuery.
     */
    query(query: Gst.Query): boolean
    /**
     * Queries an element to convert `src_val` in `src_format` to `dest_format`.
     * @param srcFormat a #GstFormat to convert from.
     * @param srcVal a value to convert.
     * @param destFormat the #GstFormat to convert to.
     */
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * total stream duration in nanoseconds. This query will only work once the
     * pipeline is prerolled (i.e. reached PAUSED or PLAYING state). The application
     * will receive an ASYNC_DONE message on the pipeline bus when that is the case.
     * 
     * If the duration changes for some reason, you will get a DURATION_CHANGED
     * message on the pipeline bus, in which case you should re-query the duration
     * using this function.
     * @param format the #GstFormat requested
     */
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * stream position in nanoseconds. This will be a value between 0 and the
     * stream duration (if the stream duration is known). This query will usually
     * only work once the pipeline is prerolled (i.e. reached PAUSED or PLAYING
     * state). The application will receive an ASYNC_DONE message on the pipeline
     * bus when that is the case.
     * 
     * If one repeatedly calls this function one can also create a query and reuse
     * it in gst_element_query().
     * @param format the #GstFormat requested
     */
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    /**
     * Makes the element free the previously requested pad as obtained
     * with gst_element_request_pad().
     * 
     * This does not unref the pad. If the pad was created by using
     * gst_element_request_pad(), gst_element_release_request_pad() needs to be
     * followed by gst_object_unref() to free the `pad`.
     * 
     * MT safe.
     * @param pad the #GstPad to release.
     */
    releaseRequestPad(pad: Gst.Pad): void
    /**
     * Removes `pad` from `element`. `pad` will be destroyed if it has not been
     * referenced elsewhere using gst_object_unparent().
     * 
     * This function is used by plugin developers and should not be used
     * by applications. Pads that were dynamically requested from elements
     * with gst_element_request_pad() should be released with the
     * gst_element_release_request_pad() function instead.
     * 
     * Pads are not automatically deactivated so elements should perform the needed
     * steps to deactivate the pad in case this pad is removed in the PAUSED or
     * PLAYING state. See gst_pad_set_active() for more information about
     * deactivating pads.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-removed signal on the element.
     * @param pad the #GstPad to remove from the element.
     */
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    /**
     * Retrieves a request pad from the element according to the provided template.
     * Pad templates can be looked up using
     * gst_element_factory_get_static_pad_templates().
     * 
     * The pad should be released with gst_element_release_request_pad().
     * @param templ a #GstPadTemplate of which we want a pad of.
     * @param name the name of the request #GstPad to retrieve. Can be %NULL.
     * @param caps the caps of the pad we want to request. Can be %NULL.
     */
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad from the element by name (e.g. "src_\%d"). This version only
     * retrieves request pads. The pad should be released with
     * gst_element_release_request_pad().
     * 
     * This method is slower than manually getting the pad template and calling
     * gst_element_request_pad() if the pads should have a specific name (e.g.
     * `name` is "src_1" instead of "src_\%u").
     * 
     * Note that this function was introduced in GStreamer 1.20 in order to provide
     * a better name to gst_element_get_request_pad(). Prior to 1.20, users
     * should use gst_element_get_request_pad() which provides the same
     * functionality.
     * @param name the name of the request #GstPad to retrieve.
     */
    requestPadSimple(name: string): Gst.Pad | null
    /**
     * Sends a seek event to an element. See gst_event_new_seek() for the details of
     * the parameters. The seek event is sent to the element using
     * gst_element_send_event().
     * 
     * MT safe.
     * @param rate The new playback rate
     * @param format The format of the seek values
     * @param flags The optional seek flags.
     * @param startType The type and flags for the new start position
     * @param start The value of the new start position
     * @param stopType The type and flags for the new stop position
     * @param stop The value of the new stop position
     */
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
    /**
     * Simple API to perform a seek on the given element, meaning it just seeks
     * to the given position relative to the start of the stream. For more complex
     * operations like segment seeks (e.g. for looping) or changing the playback
     * rate or seeking relative to the last configured playback segment you should
     * use gst_element_seek().
     * 
     * In a completely prerolled PAUSED or PLAYING pipeline, seeking is always
     * guaranteed to return %TRUE on a seekable media type or %FALSE when the media
     * type is certainly not seekable (such as a live stream).
     * 
     * Some elements allow for seeking in the READY state, in this
     * case they will store the seek event and execute it when they are put to
     * PAUSED. If the element supports seek in READY, it will always return %TRUE when
     * it receives the event in the READY state.
     * @param format a #GstFormat to execute the seek in, such as #GST_FORMAT_TIME
     * @param seekFlags seek options; playback applications will usually want to use            GST_SEEK_FLAG_FLUSH | GST_SEEK_FLAG_KEY_UNIT here
     * @param seekPos position to seek to (relative to the start); if you are doing            a seek in #GST_FORMAT_TIME this value is in nanoseconds -            multiply with #GST_SECOND to convert seconds to nanoseconds or            with #GST_MSECOND to convert milliseconds to nanoseconds.
     */
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    /**
     * Sends an event to an element. If the element doesn't implement an
     * event handler, the event will be pushed on a random linked sink pad for
     * downstream events or a random linked source pad for upstream events.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     * 
     * MT safe.
     * @param event the #GstEvent to send to the element.
     */
    sendEvent(event: Gst.Event): boolean
    /**
     * Set the base time of an element. See gst_element_get_base_time().
     * 
     * MT safe.
     * @param time the base time to set.
     */
    setBaseTime(time: Gst.ClockTime): void
    /**
     * Sets the bus of the element. Increases the refcount on the bus.
     * For internal use only, unless you're testing elements.
     * 
     * MT safe.
     * @param bus the #GstBus to set.
     */
    setBus(bus?: Gst.Bus | null): void
    /**
     * Sets the clock for the element. This function increases the
     * refcount on the clock. Any previously set clock on the object
     * is unreffed.
     * @param clock the #GstClock to set for the element.
     */
    setClock(clock?: Gst.Clock | null): boolean
    /**
     * Sets the context of the element. Increases the refcount of the context.
     * 
     * MT safe.
     * @param context the #GstContext to set.
     */
    setContext(context: Gst.Context): void
    /**
     * Locks the state of an element, so state changes of the parent don't affect
     * this element anymore.
     * 
     * Note that this is racy if the state lock of the parent bin is not taken.
     * The parent bin might've just checked the flag in another thread and as the
     * next step proceed to change the child element's state.
     * 
     * MT safe.
     * @param lockedState %TRUE to lock the element's state
     */
    setLockedState(lockedState: boolean): boolean
    /**
     * Set the start time of an element. The start time of the element is the
     * running time of the element when it last went to the PAUSED state. In READY
     * or after a flushing seek, it is set to 0.
     * 
     * Toplevel elements like #GstPipeline will manage the start_time and
     * base_time on its children. Setting the start_time to #GST_CLOCK_TIME_NONE
     * on such a toplevel element will disable the distribution of the base_time to
     * the children and can be useful if the application manages the base_time
     * itself, for example if you want to synchronize capture from multiple
     * pipelines, and you can also ensure that the pipelines have the same clock.
     * 
     * MT safe.
     * @param time the base time to set.
     */
    setStartTime(time: Gst.ClockTime): void
    /**
     * Sets the state of the element. This function will try to set the
     * requested state by going through all the intermediary states and calling
     * the class's state change function for each.
     * 
     * This function can return #GST_STATE_CHANGE_ASYNC, in which case the
     * element will perform the remainder of the state change asynchronously in
     * another thread.
     * An application can use gst_element_get_state() to wait for the completion
     * of the state change or it can wait for a %GST_MESSAGE_ASYNC_DONE or
     * %GST_MESSAGE_STATE_CHANGED on the bus.
     * 
     * State changes to %GST_STATE_READY or %GST_STATE_NULL never return
     * #GST_STATE_CHANGE_ASYNC.
     * @param state the element's new #GstState.
     */
    setState(state: Gst.State): Gst.StateChangeReturn
    /**
     * Tries to change the state of the element to the same as its parent.
     * If this function returns %FALSE, the state of element is undefined.
     */
    syncStateWithParent(): boolean
    /**
     * Unlinks all source pads of the source element with all sink pads
     * of the sink element to which they are linked.
     * 
     * If the link has been made using gst_element_link(), it could have created an
     * requestpad, which has to be released using gst_element_release_request_pad().
     * @param dest the sink #GstElement to unlink.
     */
    unlink(dest: Gst.Element): void
    /**
     * Unlinks the two named pads of the source and destination elements.
     * 
     * This is a convenience function for gst_pad_unlink().
     * @param srcpadname the name of the #GstPad in source element.
     * @param dest a #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element.
     */
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    /**
     * Attach the #GstControlBinding to the object. If there already was a
     * #GstControlBinding for this property it will be replaced.
     * 
     * The object's reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     * @param binding the #GstControlBinding that should be used
     */
    addControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * A default error function that uses g_printerr() to display the error message
     * and the optional debug string..
     * 
     * The default handler will simply print the error string using g_print.
     * @param error the GError.
     * @param debug an additional debug information string, or %NULL
     */
    defaultError(error: GLib.Error, debug?: string | null): void
    /**
     * Gets the corresponding #GstControlBinding for the property. This should be
     * unreferenced again after use.
     * @param propertyName name of the property
     */
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    /**
     * Obtain the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * If the `object` is not under property control, this will return
     * %GST_CLOCK_TIME_NONE. This allows the element to avoid the sub-dividing.
     * 
     * The control-rate is not expected to change if the element is in
     * %GST_STATE_PAUSED or %GST_STATE_PLAYING.
     */
    getControlRate(): Gst.ClockTime
    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     * @param propertyName the name of the property to get
     * @param timestamp the time that should be processed
     * @param interval the time spacing between subsequent values
     * @param values array to put control-values in
     */
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Returns a copy of the name of `object`.
     * Caller should g_free() the return value after usage.
     * For a nameless object, this returns %NULL, which you can safely g_free()
     * as well.
     * 
     * Free-function: g_free
     */
    getName(): string | null
    /**
     * Returns the parent of `object`. This function increases the refcount
     * of the parent object so you should gst_object_unref() it after usage.
     */
    getParent(): Gst.Object | null
    /**
     * Generates a string describing the path of `object` in
     * the object hierarchy. Only useful (or used) for debugging.
     * 
     * Free-function: g_free
     */
    getPathString(): string
    /**
     * Gets the value for the given controlled property at the requested time.
     * @param propertyName the name of the property to get
     * @param timestamp the time the control-change should be read from
     */
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    /**
     * Check if the `object` has active controlled properties.
     */
    hasActiveControlBindings(): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    hasAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    hasAsAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `parent` is the parent of `object`.
     * E.g. a #GstElement can check if it owns a given #GstPad.
     * @param parent a #GstObject to check as parent
     */
    hasAsParent(parent: Gst.Object): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     */
    ref(): Gst.Object
    /**
     * Removes the corresponding #GstControlBinding. If it was the
     * last ref of the binding, it will be disposed.
     * @param binding the binding
     */
    removeControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * This function is used to disable the control bindings on a property for
     * some time, i.e. gst_object_sync_values() will do nothing for the
     * property.
     * @param propertyName property to disable
     * @param disabled boolean that specifies whether to disable the controller or not.
     */
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    /**
     * This function is used to disable all controlled properties of the `object` for
     * some time, i.e. gst_object_sync_values() will do nothing.
     * @param disabled boolean that specifies whether to disable the controller or not.
     */
    setControlBindingsDisabled(disabled: boolean): void
    /**
     * Change the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * The control-rate should not change if the element is in %GST_STATE_PAUSED or
     * %GST_STATE_PLAYING.
     * @param controlRate the new control-rate in nanoseconds.
     */
    setControlRate(controlRate: Gst.ClockTime): void
    /**
     * Sets the name of `object,` or gives `object` a guaranteed unique
     * name (if `name` is %NULL).
     * This function makes a copy of the provided name, so the caller
     * retains ownership of the name it sent.
     * @param name new name of object
     */
    setName(name?: string | null): boolean
    /**
     * Sets the parent of `object` to `parent`. The object's reference count will
     * be incremented, and any floating reference will be removed (see gst_object_ref_sink()).
     * @param parent new parent of object
     */
    setParent(parent: Gst.Object): boolean
    /**
     * Returns a suggestion for timestamps where buffers should be split
     * to get best controller results.
     */
    suggestNextSync(): Gst.ClockTime
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     * @param timestamp the time that should be processed
     */
    syncValues(timestamp: Gst.ClockTime): boolean
    /**
     * Clear the parent of `object,` removing the associated reference.
     * This function decreases the refcount of `object`.
     * 
     * MT safe. Grabs and releases `object'`s lock.
     */
    unparent(): void
    /**
     * Decrements the reference count on `object`.  If reference count hits
     * zero, destroy `object`. This function does not take the lock
     * on `object` as it relies on atomic refcounting.
     * 
     * The unref method should never be called with the LOCK held since
     * this might deadlock the dispose function.
     */
    unref(): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Signals of Gst-1.0.Gst.Element */
    /**
     * This signals that the element will not generate more dynamic pads.
     * Note that this signal will usually be emitted from the context of
     * the streaming thread.
     */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    /**
     * a new #GstPad has been added to the element. Note that this signal will
     * usually be emitted from the context of the streaming thread. Also keep in
     * mind that if you add new elements to the pipeline in the signal handler
     * you will need to set them to the desired target state with
     * gst_element_set_state() or gst_element_sync_state_with_parent().
     * @param newPad the pad that has been added
     */
    connect(sigName: "pad-added", callback: ((newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    /**
     * a #GstPad has been removed from the element
     * @param oldPad the pad that has been removed
     */
    connect(sigName: "pad-removed", callback: ((oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    /**
     * The deep notify signal is used to be notified of property changes. It is
     * typically attached to the toplevel bin to receive notifications from all
     * the elements contained in that bin.
     * @param propObject the object that originated the signal
     * @param prop the property that changed
     */
    connect(sigName: "deep-notify", callback: ((propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::automatic-request-sync-point-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-request-sync-point-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::automatic-request-sync-point-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::automatic-request-sync-point-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::automatic-request-sync-point-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::automatic-request-sync-points", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-request-sync-points", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::automatic-request-sync-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::automatic-request-sync-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::automatic-request-sync-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::discard-corrupted-frames", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard-corrupted-frames", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-force-key-unit-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-force-key-unit-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Mpeg2Decoder_ConstructProps)
    _init (config?: Mpeg2Decoder_ConstructProps): void
    static $gtype: GObject.Type
}
interface Vp8Decoder_ConstructProps extends GstVideo.VideoDecoder_ConstructProps {
}
class Vp8Decoder {
    /* Properties of GstVideo-1.0.GstVideo.VideoDecoder */
    /**
     * GstVideoDecoderRequestSyncPointFlags to use for the automatically
     * requested sync points if `automatic-request-sync-points` is enabled.
     */
    automaticRequestSyncPointFlags: GstVideo.VideoDecoderRequestSyncPointFlags
    /**
     * If set to %TRUE the decoder will automatically request sync points when
     * it seems like a good idea, e.g. if the first frames are not key frames or
     * if packet loss was reported by upstream.
     */
    automaticRequestSyncPoints: boolean
    /**
     * If set to %TRUE the decoder will discard frames that are marked as
     * corrupted instead of outputting them.
     */
    discardCorruptedFrames: boolean
    /**
     * Maximum number of tolerated consecutive decode errors. See
     * gst_video_decoder_set_max_errors() for more details.
     */
    maxErrors: number
    /**
     * Minimum interval between force-key-unit events sent upstream by the
     * decoder. Setting this to 0 will cause every event to be handled, setting
     * this to %GST_CLOCK_TIME_NONE will cause every event to be ignored.
     * 
     * See gst_video_event_new_upstream_force_key_unit() for more details about
     * force-key-unit events.
     */
    minForceKeyUnitInterval: number
    /**
     * If set to %TRUE the decoder will handle QoS events received
     * from downstream elements.
     * This includes dropping output frames which are detected as late
     * using the metrics reported by those events.
     */
    qos: boolean
    /* Fields of Gst-1.0.Gst.Element */
    object: Gst.Object
    /**
     * Used to serialize execution of gst_element_set_state()
     */
    stateLock: GLib.RecMutex
    /**
     * Used to signal completion of a state change
     */
    stateCond: GLib.Cond
    /**
     * Used to detect concurrent execution of
     * gst_element_set_state() and gst_element_get_state()
     */
    stateCookie: number
    /**
     * the target state of an element as set by the application
     */
    targetState: Gst.State
    /**
     * the current state of an element
     */
    currentState: Gst.State
    /**
     * the next state of an element, can be #GST_STATE_VOID_PENDING if
     * the element is in the correct state.
     */
    nextState: Gst.State
    /**
     * the final state the element should go to, can be
     * #GST_STATE_VOID_PENDING if the element is in the correct state
     */
    pendingState: Gst.State
    /**
     * the last return value of an element state change
     */
    lastReturn: Gst.StateChangeReturn
    /**
     * the bus of the element. This bus is provided to the element by the
     * parent element or the application. A #GstPipeline has a bus of its own.
     */
    bus: Gst.Bus
    /**
     * the clock of the element. This clock is usually provided to the
     * element by the toplevel #GstPipeline.
     */
    clock: Gst.Clock
    /**
     * the time of the clock right before the element is set to
     * PLAYING. Subtracting `base_time` from the current clock time in the PLAYING
     * state will yield the running_time against the clock.
     */
    baseTime: Gst.ClockTimeDiff
    /**
     * the running_time of the last PAUSED state
     */
    startTime: Gst.ClockTime
    /**
     * number of pads of the element, includes both source and sink pads.
     */
    numpads: number
    /**
     * list of pads
     */
    pads: Gst.Pad[]
    /**
     * number of source pads of the element.
     */
    numsrcpads: number
    /**
     * list of source pads
     */
    srcpads: Gst.Pad[]
    /**
     * number of sink pads of the element.
     */
    numsinkpads: number
    /**
     * list of sink pads
     */
    sinkpads: Gst.Pad[]
    /**
     * updated whenever the a pad is added or removed
     */
    padsCookie: number
    /**
     * list of contexts
     */
    contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    /**
     * object LOCK
     */
    lock: GLib.Mutex
    /**
     * The name of the object
     */
    name: string
    /**
     * this object's parent, weak ref
     */
    parent: Gst.Object
    /**
     * flags for this object
     */
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstVideo-1.0.GstVideo.VideoDecoder */
    /**
     * Removes next `n_bytes` of input data and adds it to currently parsed frame.
     * @param nBytes the number of bytes to add
     */
    addToFrame(nBytes: number): void
    /**
     * Helper function that allocates a buffer to hold a video frame for `decoder'`s
     * current #GstVideoCodecState.
     * 
     * You should use gst_video_decoder_allocate_output_frame() instead of this
     * function, if possible at all.
     */
    allocateOutputBuffer(): Gst.Buffer
    /**
     * Helper function that allocates a buffer to hold a video frame for `decoder'`s
     * current #GstVideoCodecState.  Subclass should already have configured video
     * state and set src pad caps.
     * 
     * The buffer allocated here is owned by the frame and you should only
     * keep references to the frame, not the buffer.
     * @param frame a #GstVideoCodecFrame
     */
    allocateOutputFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * Same as #gst_video_decoder_allocate_output_frame except it allows passing
     * #GstBufferPoolAcquireParams to the sub call gst_buffer_pool_acquire_buffer.
     * @param frame a #GstVideoCodecFrame
     * @param params a #GstBufferPoolAcquireParams
     */
    allocateOutputFrameWithParams(frame: GstVideo.VideoCodecFrame, params: Gst.BufferPoolAcquireParams): Gst.FlowReturn
    /**
     * Similar to gst_video_decoder_finish_frame(), but drops `frame` in any
     * case and posts a QoS message with the frame's details on the bus.
     * In any case, the frame is considered finished and released.
     * @param frame the #GstVideoCodecFrame to drop
     */
    dropFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * Drops input data.
     * The frame is not considered finished until the whole frame
     * is finished or dropped by the subclass.
     * @param frame the #GstVideoCodecFrame
     */
    dropSubframe(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * `frame` should have a valid decoded data buffer, whose metadata fields
     * are then appropriately set according to frame data and pushed downstream.
     * If no output data is provided, `frame` is considered skipped.
     * In any case, the frame is considered finished and released.
     * 
     * After calling this function the output buffer of the frame is to be
     * considered read-only. This function will also change the metadata
     * of the buffer.
     * @param frame a decoded #GstVideoCodecFrame
     */
    finishFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * Indicate that a subframe has been finished to be decoded
     * by the subclass. This method should be called for all subframes
     * except the last subframe where `gst_video_decoder_finish_frame`
     * should be called instead.
     * @param frame the #GstVideoCodecFrame
     */
    finishSubframe(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * Lets #GstVideoDecoder sub-classes to know the memory `allocator`
     * used by the base class and its `params`.
     * 
     * Unref the `allocator` after use it.
     */
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    getBufferPool(): Gst.BufferPool
    getEstimateRate(): number
    /**
     * Get a pending unfinished #GstVideoCodecFrame
     * @param frameNumber system_frame_number of a frame
     */
    getFrame(frameNumber: number): GstVideo.VideoCodecFrame
    /**
     * Get all pending unfinished #GstVideoCodecFrame
     */
    getFrames(): GstVideo.VideoCodecFrame[]
    /**
     * Queries the number of the last subframe received by
     * the decoder baseclass in the `frame`.
     * @param frame the #GstVideoCodecFrame to update
     */
    getInputSubframeIndex(frame: GstVideo.VideoCodecFrame): number
    /**
     * Query the configured decoder latency. Results will be returned via
     * `min_latency` and `max_latency`.
     */
    getLatency(): [ /* minLatency */ Gst.ClockTime | null, /* maxLatency */ Gst.ClockTime | null ]
    /**
     * Determines maximum possible decoding time for `frame` that will
     * allow it to decode and arrive in time (as determined by QoS events).
     * In particular, a negative result means decoding in time is no longer possible
     * and should therefore occur as soon/skippy as possible.
     * @param frame a #GstVideoCodecFrame
     */
    getMaxDecodeTime(frame: GstVideo.VideoCodecFrame): Gst.ClockTimeDiff
    getMaxErrors(): number
    /**
     * Queries decoder required format handling.
     */
    getNeedsFormat(): boolean
    /**
     * Queries if the decoder requires a sync point before it starts outputting
     * data in the beginning.
     */
    getNeedsSyncPoint(): boolean
    /**
     * Get the oldest pending unfinished #GstVideoCodecFrame
     */
    getOldestFrame(): GstVideo.VideoCodecFrame
    /**
     * Get the #GstVideoCodecState currently describing the output stream.
     */
    getOutputState(): GstVideo.VideoCodecState
    /**
     * Queries whether input data is considered packetized or not by the
     * base class.
     */
    getPacketized(): boolean
    /**
     * Returns the number of bytes previously added to the current frame
     * by calling gst_video_decoder_add_to_frame().
     */
    getPendingFrameSize(): number
    /**
     * Queries the number of subframes in the frame processed by
     * the decoder baseclass.
     * @param frame the #GstVideoCodecFrame to update
     */
    getProcessedSubframeIndex(frame: GstVideo.VideoCodecFrame): number
    getQosProportion(): number
    /**
     * Queries whether input data is considered as subframes or not by the
     * base class. If FALSE, each input buffer will be considered as a full
     * frame.
     */
    getSubframeMode(): boolean
    /**
     * Gathers all data collected for currently parsed frame, gathers corresponding
     * metadata and passes it along for further processing, i.e. `handle_frame`.
     */
    haveFrame(): Gst.FlowReturn
    /**
     * Indicates that the last subframe has been processed by the decoder
     * in `frame`. This will release the current frame in video decoder
     * allowing to receive new frames from upstream elements. This method
     * must be called in the subclass `handle_frame` callback.
     * @param frame the #GstVideoCodecFrame to update
     */
    haveLastSubframe(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * Sets the audio decoder tags and how they should be merged with any
     * upstream stream tags. This will override any tags previously-set
     * with gst_audio_decoder_merge_tags().
     * 
     * Note that this is provided for convenience, and the subclass is
     * not required to use this and can still do tag handling on its own.
     * 
     * MT safe.
     * @param tags a #GstTagList to merge, or NULL to unset     previously-set tags
     * @param mode the #GstTagMergeMode to use, usually #GST_TAG_MERGE_REPLACE
     */
    mergeTags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    /**
     * Negotiate with downstream elements to currently configured #GstVideoCodecState.
     * Unmark GST_PAD_FLAG_NEED_RECONFIGURE in any case. But mark it again if
     * negotiate fails.
     */
    negotiate(): boolean
    /**
     * Returns caps that express `caps` (or sink template caps if `caps` == NULL)
     * restricted to resolution/format/... combinations supported by downstream
     * elements.
     * @param caps initial caps
     * @param filter filter caps
     */
    proxyGetcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps
    /**
     * Similar to gst_video_decoder_drop_frame(), but simply releases `frame`
     * without any processing other than removing it from list of pending frames,
     * after which it is considered finished and released.
     * @param frame the #GstVideoCodecFrame to release
     */
    releaseFrame(frame: GstVideo.VideoCodecFrame): void
    /**
     * Allows the #GstVideoDecoder subclass to request from the base class that
     * a new sync should be requested from upstream, and that `frame` was the frame
     * when the subclass noticed that a new sync point is required. A reason for
     * the subclass to do this could be missing reference frames, for example.
     * 
     * The base class will then request a new sync point from upstream as long as
     * the time that passed since the last one is exceeding
     * #GstVideoDecoder:min-force-key-unit-interval.
     * 
     * The subclass can signal via `flags` how the frames until the next sync point
     * should be handled:
     * 
     *   * If %GST_VIDEO_DECODER_REQUEST_SYNC_POINT_DISCARD_INPUT is selected then
     *     all following input frames until the next sync point are discarded.
     *     This can be useful if the lack of a sync point will prevent all further
     *     decoding and the decoder implementation is not very robust in handling
     *     missing references frames.
     *   * If %GST_VIDEO_DECODER_REQUEST_SYNC_POINT_CORRUPT_OUTPUT is selected
     *     then all output frames following `frame` are marked as corrupted via
     *     %GST_BUFFER_FLAG_CORRUPTED. Corrupted frames can be automatically
     *     dropped by the base class, see #GstVideoDecoder:discard-corrupted-frames.
     *     Subclasses can manually mark frames as corrupted via %GST_VIDEO_CODEC_FRAME_FLAG_CORRUPTED
     *     before calling gst_video_decoder_finish_frame().
     * @param frame a #GstVideoCodecFrame
     * @param flags #GstVideoDecoderRequestSyncPointFlags
     */
    requestSyncPoint(frame: GstVideo.VideoCodecFrame, flags: GstVideo.VideoDecoderRequestSyncPointFlags): void
    /**
     * Allows baseclass to perform byte to time estimated conversion.
     * @param enabled whether to enable byte to time conversion
     */
    setEstimateRate(enabled: boolean): void
    /**
     * Same as #gst_video_decoder_set_output_state() but also allows you to also set
     * the interlacing mode.
     * @param fmt a #GstVideoFormat
     * @param interlaceMode A #GstVideoInterlaceMode
     * @param width The width in pixels
     * @param height The height in pixels
     * @param reference An optional reference #GstVideoCodecState
     */
    setInterlacedOutputState(fmt: GstVideo.VideoFormat, interlaceMode: GstVideo.VideoInterlaceMode, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    /**
     * Lets #GstVideoDecoder sub-classes tell the baseclass what the decoder
     * latency is. Will also post a LATENCY message on the bus so the pipeline
     * can reconfigure its global latency.
     * @param minLatency minimum latency
     * @param maxLatency maximum latency
     */
    setLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): void
    /**
     * Sets numbers of tolerated decoder errors, where a tolerated one is then only
     * warned about, but more than tolerated will lead to fatal error.  You can set
     * -1 for never returning fatal errors. Default is set to
     * GST_VIDEO_DECODER_MAX_ERRORS.
     * 
     * The '-1' option was added in 1.4
     * @param num max tolerated errors
     */
    setMaxErrors(num: number): void
    /**
     * Configures decoder format needs.  If enabled, subclass needs to be
     * negotiated with format caps before it can process any data.  It will then
     * never be handed any data before it has been configured.
     * Otherwise, it might be handed data without having been configured and
     * is then expected being able to do so either by default
     * or based on the input data.
     * @param enabled new state
     */
    setNeedsFormat(enabled: boolean): void
    /**
     * Configures whether the decoder requires a sync point before it starts
     * outputting data in the beginning. If enabled, the base class will discard
     * all non-sync point frames in the beginning and after a flush and does not
     * pass it to the subclass.
     * 
     * If the first frame is not a sync point, the base class will request a sync
     * point via the force-key-unit event.
     * @param enabled new state
     */
    setNeedsSyncPoint(enabled: boolean): void
    /**
     * Creates a new #GstVideoCodecState with the specified `fmt,` `width` and `height`
     * as the output state for the decoder.
     * Any previously set output state on `decoder` will be replaced by the newly
     * created one.
     * 
     * If the subclass wishes to copy over existing fields (like pixel aspec ratio,
     * or framerate) from an existing #GstVideoCodecState, it can be provided as a
     * `reference`.
     * 
     * If the subclass wishes to override some fields from the output state (like
     * pixel-aspect-ratio or framerate) it can do so on the returned #GstVideoCodecState.
     * 
     * The new output state will only take effect (set on pads and buffers) starting
     * from the next call to #gst_video_decoder_finish_frame().
     * @param fmt a #GstVideoFormat
     * @param width The width in pixels
     * @param height The height in pixels
     * @param reference An optional reference #GstVideoCodecState
     */
    setOutputState(fmt: GstVideo.VideoFormat, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    /**
     * Allows baseclass to consider input data as packetized or not. If the
     * input is packetized, then the `parse` method will not be called.
     * @param packetized whether the input data should be considered as packetized.
     */
    setPacketized(packetized: boolean): void
    /**
     * If this is set to TRUE, it informs the base class that the subclass
     * can receive the data at a granularity lower than one frame.
     * 
     * Note that in this mode, the subclass has two options. It can either
     * require the presence of a GST_VIDEO_BUFFER_FLAG_MARKER to mark the
     * end of a frame. Or it can operate in such a way that it will decode
     * a single frame at a time. In this second case, every buffer that
     * arrives to the element is considered part of the same frame until
     * gst_video_decoder_finish_frame() is called.
     * 
     * In either case, the same #GstVideoCodecFrame will be passed to the
     * GstVideoDecoderClass:handle_frame vmethod repeatedly with a
     * different GstVideoCodecFrame:input_buffer every time until the end of the
     * frame has been signaled using either method.
     * This method must be called during the decoder subclass `set_format` call.
     * @param subframeMode whether the input data should be considered as subframes.
     */
    setSubframeMode(subframeMode: boolean): void
    /**
     * Lets #GstVideoDecoder sub-classes decide if they want the sink pad
     * to use the default pad query handler to reply to accept-caps queries.
     * 
     * By setting this to true it is possible to further customize the default
     * handler with %GST_PAD_SET_ACCEPT_INTERSECT and
     * %GST_PAD_SET_ACCEPT_TEMPLATE
     * @param use if the default pad accept-caps query handling should be used
     */
    setUseDefaultPadAcceptcaps(use: boolean): void
    /* Methods of Gst-1.0.Gst.Element */
    /**
     * Abort the state change of the element. This function is used
     * by elements that do asynchronous state changes and find out
     * something is wrong.
     * 
     * This function should be called with the STATE_LOCK held.
     * 
     * MT safe.
     */
    abortState(): void
    /**
     * Adds a pad (link point) to `element`. `pad'`s parent will be set to `element;`
     * see gst_object_set_parent() for refcounting information.
     * 
     * Pads are automatically activated when added in the PAUSED or PLAYING
     * state.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-added signal on the element.
     * @param pad the #GstPad to add to the element.
     */
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    /**
     * Calls `func` from another thread and passes `user_data` to it. This is to be
     * used for cases when a state change has to be performed from a streaming
     * thread, directly via gst_element_set_state() or indirectly e.g. via SEEK
     * events.
     * 
     * Calling those functions directly from the streaming thread will cause
     * deadlocks in many situations, as they might involve waiting for the
     * streaming thread to shut down from this very streaming thread.
     * 
     * MT safe.
     * @param func Function to call asynchronously from another thread
     */
    callAsync(func: Gst.ElementCallAsyncFunc): void
    /**
     * Perform `transition` on `element`.
     * 
     * This function must be called with STATE_LOCK held and is mainly used
     * internally.
     * @param transition the requested transition
     */
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    /**
     * Commit the state change of the element and proceed to the next
     * pending state if any. This function is used
     * by elements that do asynchronous state changes.
     * The core will normally call this method automatically when an
     * element returned %GST_STATE_CHANGE_SUCCESS from the state change function.
     * 
     * If after calling this method the element still has not reached
     * the pending state, the next state change is performed.
     * 
     * This method is used internally and should normally not be called by plugins
     * or applications.
     * 
     * This function must be called with STATE_LOCK held.
     * @param ret The previous state return value
     */
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    /**
     * Creates a pad for each pad template that is always available.
     * This function is only useful during object initialization of
     * subclasses of #GstElement.
     */
    createAllPads(): void
    /**
     * Call `func` with `user_data` for each of `element'`s pads. `func` will be called
     * exactly once for each pad that exists at the time of this call, unless
     * one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new pads are added or pads are removed
     * while pads are being iterated, this will not be taken into account until
     * next time this function is used.
     * @param func function to call for each pad
     */
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s sink pads. `func` will be
     * called exactly once for each sink pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new sink pads are added or sink pads
     * are removed while the sink pads are being iterated, this will not be taken
     * into account until next time this function is used.
     * @param func function to call for each sink pad
     */
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s source pads. `func` will be
     * called exactly once for each source pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new source pads are added or source pads
     * are removed while the source pads are being iterated, this will not be taken
     * into account until next time this function is used.
     * @param func function to call for each source pad
     */
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Returns the base time of the element. The base time is the
     * absolute time of the clock when this element was last put to
     * PLAYING. Subtracting the base time from the clock time gives
     * the running time of the element.
     */
    getBaseTime(): Gst.ClockTime
    /**
     * Returns the bus of the element. Note that only a #GstPipeline will provide a
     * bus for the application.
     */
    getBus(): Gst.Bus | null
    /**
     * Gets the currently configured clock of the element. This is the clock as was
     * last set with gst_element_set_clock().
     * 
     * Elements in a pipeline will only have their clock set when the
     * pipeline is in the PLAYING state.
     */
    getClock(): Gst.Clock | null
    /**
     * Looks for an unlinked pad to which the given pad can link. It is not
     * guaranteed that linking the pads will work, though it should work in most
     * cases.
     * 
     * This function will first attempt to find a compatible unlinked ALWAYS pad,
     * and if none can be found, it will request a compatible REQUEST pad by looking
     * at the templates of `element`.
     * @param pad the #GstPad to find a compatible one for.
     * @param caps the #GstCaps to use as a filter.
     */
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad template from `element` that is compatible with `compattempl`.
     * Pads from compatible templates can be linked together.
     * @param compattempl the #GstPadTemplate to find a compatible     template for
     */
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * 
     * MT safe.
     * @param contextType a name of a context to retrieve
     */
    getContext(contextType: string): Gst.Context | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * @param contextType a name of a context to retrieve
     */
    getContextUnlocked(contextType: string): Gst.Context | null
    /**
     * Gets the contexts set on the element.
     * 
     * MT safe.
     */
    getContexts(): Gst.Context[]
    /**
     * Returns the current clock time of the element, as in, the time of the
     * element's clock, or GST_CLOCK_TIME_NONE if there is no clock.
     */
    getCurrentClockTime(): Gst.ClockTime
    /**
     * Returns the running time of the element. The running time is the
     * element's clock time minus its base time. Will return GST_CLOCK_TIME_NONE
     * if the element has no clock, or if its base time has not been set.
     */
    getCurrentRunningTime(): Gst.ClockTime
    /**
     * Retrieves the factory that was used to create this element.
     */
    getFactory(): Gst.ElementFactory | null
    /**
     * Get metadata with `key` in `klass`.
     * @param key the key to get
     */
    getMetadata(key: string): string
    /**
     * Retrieves a padtemplate from `element` with the given name.
     * @param name the name of the #GstPadTemplate to get.
     */
    getPadTemplate(name: string): Gst.PadTemplate | null
    /**
     * Retrieves a list of the pad templates associated with `element`. The
     * list must not be modified by the calling code.
     */
    getPadTemplateList(): Gst.PadTemplate[]
    /**
     * The name of this function is confusing to people learning GStreamer.
     * gst_element_request_pad_simple() aims at making it more explicit it is
     * a simplified gst_element_request_pad().
     * @param name the name of the request #GstPad to retrieve.
     */
    getRequestPad(name: string): Gst.Pad | null
    /**
     * Returns the start time of the element. The start time is the
     * running time of the clock when this element was last put to PAUSED.
     * 
     * Usually the start_time is managed by a toplevel element such as
     * #GstPipeline.
     * 
     * MT safe.
     */
    getStartTime(): Gst.ClockTime
    /**
     * Gets the state of the element.
     * 
     * For elements that performed an ASYNC state change, as reported by
     * gst_element_set_state(), this function will block up to the
     * specified timeout value for the state change to complete.
     * If the element completes the state change or goes into
     * an error, this function returns immediately with a return value of
     * %GST_STATE_CHANGE_SUCCESS or %GST_STATE_CHANGE_FAILURE respectively.
     * 
     * For elements that did not return %GST_STATE_CHANGE_ASYNC, this function
     * returns the current and pending state immediately.
     * 
     * This function returns %GST_STATE_CHANGE_NO_PREROLL if the element
     * successfully changed its state but is not able to provide data yet.
     * This mostly happens for live sources that only produce data in
     * %GST_STATE_PLAYING. While the state change return is equivalent to
     * %GST_STATE_CHANGE_SUCCESS, it is returned to the application to signal that
     * some sink elements might not be able to complete their state change because
     * an element is not producing data to complete the preroll. When setting the
     * element to playing, the preroll will complete and playback will start.
     * @param timeout a #GstClockTime to specify the timeout for an async           state change or %GST_CLOCK_TIME_NONE for infinite timeout.
     */
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    /**
     * Retrieves a pad from `element` by name. This version only retrieves
     * already-existing (i.e. 'static') pads.
     * @param name the name of the static #GstPad to retrieve.
     */
    getStaticPad(name: string): Gst.Pad | null
    /**
     * Checks if the state of an element is locked.
     * If the state of an element is locked, state changes of the parent don't
     * affect the element.
     * This way you can leave currently unused elements inside bins. Just lock their
     * state before changing the state from #GST_STATE_NULL.
     * 
     * MT safe.
     */
    isLockedState(): boolean
    /**
     * Retrieves an iterator of `element'`s pads. The iterator should
     * be freed after usage. Also more specialized iterators exists such as
     * gst_element_iterate_src_pads() or gst_element_iterate_sink_pads().
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iteratePads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s sink pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterateSinkPads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s source pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterateSrcPads(): Gst.Iterator
    /**
     * Links `src` to `dest`. The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * Such pads need to be released manually when unlinking.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     * @param dest the #GstElement containing the destination pad.
     */
    link(dest: Gst.Element): boolean
    /**
     * Links `src` to `dest` using the given caps as filtercaps.
     * The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     * @param dest the #GstElement containing the destination pad.
     * @param filter the #GstCaps to filter the link,     or %NULL for no filter.
     */
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element, or %NULL for any pad.
     */
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    /**
     * Links the two named pads of the source and destination elements. Side effect
     * is that if one of the pads has no parent, it becomes a child of the parent of
     * the other element. If they have different parents, the link fails. If `caps`
     * is not %NULL, makes sure that the caps of the link is a subset of `caps`.
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element     or %NULL for any pad.
     * @param filter the #GstCaps to filter the link,     or %NULL for no filter.
     */
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     * 
     * Calling gst_element_link_pads_full() with `flags` == %GST_PAD_LINK_CHECK_DEFAULT
     * is the same as calling gst_element_link_pads() and the recommended way of
     * linking pads with safety checks applied.
     * 
     * This is a convenience function for gst_pad_link_full().
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element, or %NULL for any pad.
     * @param flags the #GstPadLinkCheck to be performed when linking pads.
     */
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    /**
     * Brings the element to the lost state. The current state of the
     * element is copied to the pending state so that any call to
     * gst_element_get_state() will return %GST_STATE_CHANGE_ASYNC.
     * 
     * An ASYNC_START message is posted. If the element was PLAYING, it will
     * go to PAUSED. The element will be restored to its PLAYING state by
     * the parent pipeline when it prerolls again.
     * 
     * This is mostly used for elements that lost their preroll buffer
     * in the %GST_STATE_PAUSED or %GST_STATE_PLAYING state after a flush,
     * they will go to their pending state again when a new preroll buffer is
     * queued. This function can only be called when the element is currently
     * not in error or an async state change.
     * 
     * This function is used internally and should normally not be called from
     * plugins or applications.
     */
    lostState(): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     * 
     * MT safe.
     * @param type the #GstMessageType
     * @param domain the GStreamer GError domain this message belongs to
     * @param code the GError code belonging to the domain
     * @param text an allocated text string to be used            as a replacement for the default message connected to code,            or %NULL
     * @param debug an allocated debug message to be            used as a replacement for the default debugging information,            or %NULL
     * @param file the source code file where the error was generated
     * @param function_ the source code function where the error was generated
     * @param line the source code line where the error was generated
     */
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     * @param type the #GstMessageType
     * @param domain the GStreamer GError domain this message belongs to
     * @param code the GError code belonging to the domain
     * @param text an allocated text string to be used            as a replacement for the default message connected to code,            or %NULL
     * @param debug an allocated debug message to be            used as a replacement for the default debugging information,            or %NULL
     * @param file the source code file where the error was generated
     * @param function_ the source code function where the error was generated
     * @param line the source code line where the error was generated
     * @param structure optional details structure
     */
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    /**
     * Use this function to signal that the element does not expect any more pads
     * to show up in the current pipeline. This function should be called whenever
     * pads have been added by the element itself. Elements with #GST_PAD_SOMETIMES
     * pad templates use this in combination with autopluggers to figure out that
     * the element is done initializing its pads.
     * 
     * This function emits the #GstElement::no-more-pads signal.
     * 
     * MT safe.
     */
    noMorePads(): void
    /**
     * Post a message on the element's #GstBus. This function takes ownership of the
     * message; if you want to access the message after this call, you should add an
     * additional reference before calling.
     * @param message a #GstMessage to post
     */
    postMessage(message: Gst.Message): boolean
    /**
     * Get the clock provided by the given element.
     * > An element is only required to provide a clock in the PAUSED
     * > state. Some elements can provide a clock in other states.
     */
    provideClock(): Gst.Clock | null
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @param query the #GstQuery.
     */
    query(query: Gst.Query): boolean
    /**
     * Queries an element to convert `src_val` in `src_format` to `dest_format`.
     * @param srcFormat a #GstFormat to convert from.
     * @param srcVal a value to convert.
     * @param destFormat the #GstFormat to convert to.
     */
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * total stream duration in nanoseconds. This query will only work once the
     * pipeline is prerolled (i.e. reached PAUSED or PLAYING state). The application
     * will receive an ASYNC_DONE message on the pipeline bus when that is the case.
     * 
     * If the duration changes for some reason, you will get a DURATION_CHANGED
     * message on the pipeline bus, in which case you should re-query the duration
     * using this function.
     * @param format the #GstFormat requested
     */
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * stream position in nanoseconds. This will be a value between 0 and the
     * stream duration (if the stream duration is known). This query will usually
     * only work once the pipeline is prerolled (i.e. reached PAUSED or PLAYING
     * state). The application will receive an ASYNC_DONE message on the pipeline
     * bus when that is the case.
     * 
     * If one repeatedly calls this function one can also create a query and reuse
     * it in gst_element_query().
     * @param format the #GstFormat requested
     */
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    /**
     * Makes the element free the previously requested pad as obtained
     * with gst_element_request_pad().
     * 
     * This does not unref the pad. If the pad was created by using
     * gst_element_request_pad(), gst_element_release_request_pad() needs to be
     * followed by gst_object_unref() to free the `pad`.
     * 
     * MT safe.
     * @param pad the #GstPad to release.
     */
    releaseRequestPad(pad: Gst.Pad): void
    /**
     * Removes `pad` from `element`. `pad` will be destroyed if it has not been
     * referenced elsewhere using gst_object_unparent().
     * 
     * This function is used by plugin developers and should not be used
     * by applications. Pads that were dynamically requested from elements
     * with gst_element_request_pad() should be released with the
     * gst_element_release_request_pad() function instead.
     * 
     * Pads are not automatically deactivated so elements should perform the needed
     * steps to deactivate the pad in case this pad is removed in the PAUSED or
     * PLAYING state. See gst_pad_set_active() for more information about
     * deactivating pads.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-removed signal on the element.
     * @param pad the #GstPad to remove from the element.
     */
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    /**
     * Retrieves a request pad from the element according to the provided template.
     * Pad templates can be looked up using
     * gst_element_factory_get_static_pad_templates().
     * 
     * The pad should be released with gst_element_release_request_pad().
     * @param templ a #GstPadTemplate of which we want a pad of.
     * @param name the name of the request #GstPad to retrieve. Can be %NULL.
     * @param caps the caps of the pad we want to request. Can be %NULL.
     */
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad from the element by name (e.g. "src_\%d"). This version only
     * retrieves request pads. The pad should be released with
     * gst_element_release_request_pad().
     * 
     * This method is slower than manually getting the pad template and calling
     * gst_element_request_pad() if the pads should have a specific name (e.g.
     * `name` is "src_1" instead of "src_\%u").
     * 
     * Note that this function was introduced in GStreamer 1.20 in order to provide
     * a better name to gst_element_get_request_pad(). Prior to 1.20, users
     * should use gst_element_get_request_pad() which provides the same
     * functionality.
     * @param name the name of the request #GstPad to retrieve.
     */
    requestPadSimple(name: string): Gst.Pad | null
    /**
     * Sends a seek event to an element. See gst_event_new_seek() for the details of
     * the parameters. The seek event is sent to the element using
     * gst_element_send_event().
     * 
     * MT safe.
     * @param rate The new playback rate
     * @param format The format of the seek values
     * @param flags The optional seek flags.
     * @param startType The type and flags for the new start position
     * @param start The value of the new start position
     * @param stopType The type and flags for the new stop position
     * @param stop The value of the new stop position
     */
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
    /**
     * Simple API to perform a seek on the given element, meaning it just seeks
     * to the given position relative to the start of the stream. For more complex
     * operations like segment seeks (e.g. for looping) or changing the playback
     * rate or seeking relative to the last configured playback segment you should
     * use gst_element_seek().
     * 
     * In a completely prerolled PAUSED or PLAYING pipeline, seeking is always
     * guaranteed to return %TRUE on a seekable media type or %FALSE when the media
     * type is certainly not seekable (such as a live stream).
     * 
     * Some elements allow for seeking in the READY state, in this
     * case they will store the seek event and execute it when they are put to
     * PAUSED. If the element supports seek in READY, it will always return %TRUE when
     * it receives the event in the READY state.
     * @param format a #GstFormat to execute the seek in, such as #GST_FORMAT_TIME
     * @param seekFlags seek options; playback applications will usually want to use            GST_SEEK_FLAG_FLUSH | GST_SEEK_FLAG_KEY_UNIT here
     * @param seekPos position to seek to (relative to the start); if you are doing            a seek in #GST_FORMAT_TIME this value is in nanoseconds -            multiply with #GST_SECOND to convert seconds to nanoseconds or            with #GST_MSECOND to convert milliseconds to nanoseconds.
     */
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    /**
     * Sends an event to an element. If the element doesn't implement an
     * event handler, the event will be pushed on a random linked sink pad for
     * downstream events or a random linked source pad for upstream events.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     * 
     * MT safe.
     * @param event the #GstEvent to send to the element.
     */
    sendEvent(event: Gst.Event): boolean
    /**
     * Set the base time of an element. See gst_element_get_base_time().
     * 
     * MT safe.
     * @param time the base time to set.
     */
    setBaseTime(time: Gst.ClockTime): void
    /**
     * Sets the bus of the element. Increases the refcount on the bus.
     * For internal use only, unless you're testing elements.
     * 
     * MT safe.
     * @param bus the #GstBus to set.
     */
    setBus(bus?: Gst.Bus | null): void
    /**
     * Sets the clock for the element. This function increases the
     * refcount on the clock. Any previously set clock on the object
     * is unreffed.
     * @param clock the #GstClock to set for the element.
     */
    setClock(clock?: Gst.Clock | null): boolean
    /**
     * Sets the context of the element. Increases the refcount of the context.
     * 
     * MT safe.
     * @param context the #GstContext to set.
     */
    setContext(context: Gst.Context): void
    /**
     * Locks the state of an element, so state changes of the parent don't affect
     * this element anymore.
     * 
     * Note that this is racy if the state lock of the parent bin is not taken.
     * The parent bin might've just checked the flag in another thread and as the
     * next step proceed to change the child element's state.
     * 
     * MT safe.
     * @param lockedState %TRUE to lock the element's state
     */
    setLockedState(lockedState: boolean): boolean
    /**
     * Set the start time of an element. The start time of the element is the
     * running time of the element when it last went to the PAUSED state. In READY
     * or after a flushing seek, it is set to 0.
     * 
     * Toplevel elements like #GstPipeline will manage the start_time and
     * base_time on its children. Setting the start_time to #GST_CLOCK_TIME_NONE
     * on such a toplevel element will disable the distribution of the base_time to
     * the children and can be useful if the application manages the base_time
     * itself, for example if you want to synchronize capture from multiple
     * pipelines, and you can also ensure that the pipelines have the same clock.
     * 
     * MT safe.
     * @param time the base time to set.
     */
    setStartTime(time: Gst.ClockTime): void
    /**
     * Sets the state of the element. This function will try to set the
     * requested state by going through all the intermediary states and calling
     * the class's state change function for each.
     * 
     * This function can return #GST_STATE_CHANGE_ASYNC, in which case the
     * element will perform the remainder of the state change asynchronously in
     * another thread.
     * An application can use gst_element_get_state() to wait for the completion
     * of the state change or it can wait for a %GST_MESSAGE_ASYNC_DONE or
     * %GST_MESSAGE_STATE_CHANGED on the bus.
     * 
     * State changes to %GST_STATE_READY or %GST_STATE_NULL never return
     * #GST_STATE_CHANGE_ASYNC.
     * @param state the element's new #GstState.
     */
    setState(state: Gst.State): Gst.StateChangeReturn
    /**
     * Tries to change the state of the element to the same as its parent.
     * If this function returns %FALSE, the state of element is undefined.
     */
    syncStateWithParent(): boolean
    /**
     * Unlinks all source pads of the source element with all sink pads
     * of the sink element to which they are linked.
     * 
     * If the link has been made using gst_element_link(), it could have created an
     * requestpad, which has to be released using gst_element_release_request_pad().
     * @param dest the sink #GstElement to unlink.
     */
    unlink(dest: Gst.Element): void
    /**
     * Unlinks the two named pads of the source and destination elements.
     * 
     * This is a convenience function for gst_pad_unlink().
     * @param srcpadname the name of the #GstPad in source element.
     * @param dest a #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element.
     */
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    /**
     * Attach the #GstControlBinding to the object. If there already was a
     * #GstControlBinding for this property it will be replaced.
     * 
     * The object's reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     * @param binding the #GstControlBinding that should be used
     */
    addControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * A default error function that uses g_printerr() to display the error message
     * and the optional debug string..
     * 
     * The default handler will simply print the error string using g_print.
     * @param error the GError.
     * @param debug an additional debug information string, or %NULL
     */
    defaultError(error: GLib.Error, debug?: string | null): void
    /**
     * Gets the corresponding #GstControlBinding for the property. This should be
     * unreferenced again after use.
     * @param propertyName name of the property
     */
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    /**
     * Obtain the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * If the `object` is not under property control, this will return
     * %GST_CLOCK_TIME_NONE. This allows the element to avoid the sub-dividing.
     * 
     * The control-rate is not expected to change if the element is in
     * %GST_STATE_PAUSED or %GST_STATE_PLAYING.
     */
    getControlRate(): Gst.ClockTime
    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     * @param propertyName the name of the property to get
     * @param timestamp the time that should be processed
     * @param interval the time spacing between subsequent values
     * @param values array to put control-values in
     */
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Returns a copy of the name of `object`.
     * Caller should g_free() the return value after usage.
     * For a nameless object, this returns %NULL, which you can safely g_free()
     * as well.
     * 
     * Free-function: g_free
     */
    getName(): string | null
    /**
     * Returns the parent of `object`. This function increases the refcount
     * of the parent object so you should gst_object_unref() it after usage.
     */
    getParent(): Gst.Object | null
    /**
     * Generates a string describing the path of `object` in
     * the object hierarchy. Only useful (or used) for debugging.
     * 
     * Free-function: g_free
     */
    getPathString(): string
    /**
     * Gets the value for the given controlled property at the requested time.
     * @param propertyName the name of the property to get
     * @param timestamp the time the control-change should be read from
     */
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    /**
     * Check if the `object` has active controlled properties.
     */
    hasActiveControlBindings(): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    hasAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    hasAsAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `parent` is the parent of `object`.
     * E.g. a #GstElement can check if it owns a given #GstPad.
     * @param parent a #GstObject to check as parent
     */
    hasAsParent(parent: Gst.Object): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     */
    ref(): Gst.Object
    /**
     * Removes the corresponding #GstControlBinding. If it was the
     * last ref of the binding, it will be disposed.
     * @param binding the binding
     */
    removeControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * This function is used to disable the control bindings on a property for
     * some time, i.e. gst_object_sync_values() will do nothing for the
     * property.
     * @param propertyName property to disable
     * @param disabled boolean that specifies whether to disable the controller or not.
     */
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    /**
     * This function is used to disable all controlled properties of the `object` for
     * some time, i.e. gst_object_sync_values() will do nothing.
     * @param disabled boolean that specifies whether to disable the controller or not.
     */
    setControlBindingsDisabled(disabled: boolean): void
    /**
     * Change the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * The control-rate should not change if the element is in %GST_STATE_PAUSED or
     * %GST_STATE_PLAYING.
     * @param controlRate the new control-rate in nanoseconds.
     */
    setControlRate(controlRate: Gst.ClockTime): void
    /**
     * Sets the name of `object,` or gives `object` a guaranteed unique
     * name (if `name` is %NULL).
     * This function makes a copy of the provided name, so the caller
     * retains ownership of the name it sent.
     * @param name new name of object
     */
    setName(name?: string | null): boolean
    /**
     * Sets the parent of `object` to `parent`. The object's reference count will
     * be incremented, and any floating reference will be removed (see gst_object_ref_sink()).
     * @param parent new parent of object
     */
    setParent(parent: Gst.Object): boolean
    /**
     * Returns a suggestion for timestamps where buffers should be split
     * to get best controller results.
     */
    suggestNextSync(): Gst.ClockTime
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     * @param timestamp the time that should be processed
     */
    syncValues(timestamp: Gst.ClockTime): boolean
    /**
     * Clear the parent of `object,` removing the associated reference.
     * This function decreases the refcount of `object`.
     * 
     * MT safe. Grabs and releases `object'`s lock.
     */
    unparent(): void
    /**
     * Decrements the reference count on `object`.  If reference count hits
     * zero, destroy `object`. This function does not take the lock
     * on `object` as it relies on atomic refcounting.
     * 
     * The unref method should never be called with the LOCK held since
     * this might deadlock the dispose function.
     */
    unref(): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Signals of Gst-1.0.Gst.Element */
    /**
     * This signals that the element will not generate more dynamic pads.
     * Note that this signal will usually be emitted from the context of
     * the streaming thread.
     */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    /**
     * a new #GstPad has been added to the element. Note that this signal will
     * usually be emitted from the context of the streaming thread. Also keep in
     * mind that if you add new elements to the pipeline in the signal handler
     * you will need to set them to the desired target state with
     * gst_element_set_state() or gst_element_sync_state_with_parent().
     * @param newPad the pad that has been added
     */
    connect(sigName: "pad-added", callback: ((newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    /**
     * a #GstPad has been removed from the element
     * @param oldPad the pad that has been removed
     */
    connect(sigName: "pad-removed", callback: ((oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    /**
     * The deep notify signal is used to be notified of property changes. It is
     * typically attached to the toplevel bin to receive notifications from all
     * the elements contained in that bin.
     * @param propObject the object that originated the signal
     * @param prop the property that changed
     */
    connect(sigName: "deep-notify", callback: ((propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::automatic-request-sync-point-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-request-sync-point-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::automatic-request-sync-point-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::automatic-request-sync-point-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::automatic-request-sync-point-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::automatic-request-sync-points", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-request-sync-points", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::automatic-request-sync-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::automatic-request-sync-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::automatic-request-sync-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::discard-corrupted-frames", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard-corrupted-frames", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-force-key-unit-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-force-key-unit-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Vp8Decoder_ConstructProps)
    _init (config?: Vp8Decoder_ConstructProps): void
    static $gtype: GObject.Type
}
interface Vp9Decoder_ConstructProps extends GstVideo.VideoDecoder_ConstructProps {
}
class Vp9Decoder {
    /* Properties of GstVideo-1.0.GstVideo.VideoDecoder */
    /**
     * GstVideoDecoderRequestSyncPointFlags to use for the automatically
     * requested sync points if `automatic-request-sync-points` is enabled.
     */
    automaticRequestSyncPointFlags: GstVideo.VideoDecoderRequestSyncPointFlags
    /**
     * If set to %TRUE the decoder will automatically request sync points when
     * it seems like a good idea, e.g. if the first frames are not key frames or
     * if packet loss was reported by upstream.
     */
    automaticRequestSyncPoints: boolean
    /**
     * If set to %TRUE the decoder will discard frames that are marked as
     * corrupted instead of outputting them.
     */
    discardCorruptedFrames: boolean
    /**
     * Maximum number of tolerated consecutive decode errors. See
     * gst_video_decoder_set_max_errors() for more details.
     */
    maxErrors: number
    /**
     * Minimum interval between force-key-unit events sent upstream by the
     * decoder. Setting this to 0 will cause every event to be handled, setting
     * this to %GST_CLOCK_TIME_NONE will cause every event to be ignored.
     * 
     * See gst_video_event_new_upstream_force_key_unit() for more details about
     * force-key-unit events.
     */
    minForceKeyUnitInterval: number
    /**
     * If set to %TRUE the decoder will handle QoS events received
     * from downstream elements.
     * This includes dropping output frames which are detected as late
     * using the metrics reported by those events.
     */
    qos: boolean
    /* Fields of Gst-1.0.Gst.Element */
    object: Gst.Object
    /**
     * Used to serialize execution of gst_element_set_state()
     */
    stateLock: GLib.RecMutex
    /**
     * Used to signal completion of a state change
     */
    stateCond: GLib.Cond
    /**
     * Used to detect concurrent execution of
     * gst_element_set_state() and gst_element_get_state()
     */
    stateCookie: number
    /**
     * the target state of an element as set by the application
     */
    targetState: Gst.State
    /**
     * the current state of an element
     */
    currentState: Gst.State
    /**
     * the next state of an element, can be #GST_STATE_VOID_PENDING if
     * the element is in the correct state.
     */
    nextState: Gst.State
    /**
     * the final state the element should go to, can be
     * #GST_STATE_VOID_PENDING if the element is in the correct state
     */
    pendingState: Gst.State
    /**
     * the last return value of an element state change
     */
    lastReturn: Gst.StateChangeReturn
    /**
     * the bus of the element. This bus is provided to the element by the
     * parent element or the application. A #GstPipeline has a bus of its own.
     */
    bus: Gst.Bus
    /**
     * the clock of the element. This clock is usually provided to the
     * element by the toplevel #GstPipeline.
     */
    clock: Gst.Clock
    /**
     * the time of the clock right before the element is set to
     * PLAYING. Subtracting `base_time` from the current clock time in the PLAYING
     * state will yield the running_time against the clock.
     */
    baseTime: Gst.ClockTimeDiff
    /**
     * the running_time of the last PAUSED state
     */
    startTime: Gst.ClockTime
    /**
     * number of pads of the element, includes both source and sink pads.
     */
    numpads: number
    /**
     * list of pads
     */
    pads: Gst.Pad[]
    /**
     * number of source pads of the element.
     */
    numsrcpads: number
    /**
     * list of source pads
     */
    srcpads: Gst.Pad[]
    /**
     * number of sink pads of the element.
     */
    numsinkpads: number
    /**
     * list of sink pads
     */
    sinkpads: Gst.Pad[]
    /**
     * updated whenever the a pad is added or removed
     */
    padsCookie: number
    /**
     * list of contexts
     */
    contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    /**
     * object LOCK
     */
    lock: GLib.Mutex
    /**
     * The name of the object
     */
    name: string
    /**
     * this object's parent, weak ref
     */
    parent: Gst.Object
    /**
     * flags for this object
     */
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of GstCodecs-1.0.GstCodecs.Vp9Decoder */
    /**
     * Called to set non-keyframe format change awareness
     * @param support whether subclass can support non-keyframe format change
     */
    setNonKeyframeFormatChangeSupport(support: boolean): void
    /* Methods of GstVideo-1.0.GstVideo.VideoDecoder */
    /**
     * Removes next `n_bytes` of input data and adds it to currently parsed frame.
     * @param nBytes the number of bytes to add
     */
    addToFrame(nBytes: number): void
    /**
     * Helper function that allocates a buffer to hold a video frame for `decoder'`s
     * current #GstVideoCodecState.
     * 
     * You should use gst_video_decoder_allocate_output_frame() instead of this
     * function, if possible at all.
     */
    allocateOutputBuffer(): Gst.Buffer
    /**
     * Helper function that allocates a buffer to hold a video frame for `decoder'`s
     * current #GstVideoCodecState.  Subclass should already have configured video
     * state and set src pad caps.
     * 
     * The buffer allocated here is owned by the frame and you should only
     * keep references to the frame, not the buffer.
     * @param frame a #GstVideoCodecFrame
     */
    allocateOutputFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * Same as #gst_video_decoder_allocate_output_frame except it allows passing
     * #GstBufferPoolAcquireParams to the sub call gst_buffer_pool_acquire_buffer.
     * @param frame a #GstVideoCodecFrame
     * @param params a #GstBufferPoolAcquireParams
     */
    allocateOutputFrameWithParams(frame: GstVideo.VideoCodecFrame, params: Gst.BufferPoolAcquireParams): Gst.FlowReturn
    /**
     * Similar to gst_video_decoder_finish_frame(), but drops `frame` in any
     * case and posts a QoS message with the frame's details on the bus.
     * In any case, the frame is considered finished and released.
     * @param frame the #GstVideoCodecFrame to drop
     */
    dropFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * Drops input data.
     * The frame is not considered finished until the whole frame
     * is finished or dropped by the subclass.
     * @param frame the #GstVideoCodecFrame
     */
    dropSubframe(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * `frame` should have a valid decoded data buffer, whose metadata fields
     * are then appropriately set according to frame data and pushed downstream.
     * If no output data is provided, `frame` is considered skipped.
     * In any case, the frame is considered finished and released.
     * 
     * After calling this function the output buffer of the frame is to be
     * considered read-only. This function will also change the metadata
     * of the buffer.
     * @param frame a decoded #GstVideoCodecFrame
     */
    finishFrame(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * Indicate that a subframe has been finished to be decoded
     * by the subclass. This method should be called for all subframes
     * except the last subframe where `gst_video_decoder_finish_frame`
     * should be called instead.
     * @param frame the #GstVideoCodecFrame
     */
    finishSubframe(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * Lets #GstVideoDecoder sub-classes to know the memory `allocator`
     * used by the base class and its `params`.
     * 
     * Unref the `allocator` after use it.
     */
    getAllocator(): [ /* allocator */ Gst.Allocator | null, /* params */ Gst.AllocationParams | null ]
    getBufferPool(): Gst.BufferPool
    getEstimateRate(): number
    /**
     * Get a pending unfinished #GstVideoCodecFrame
     * @param frameNumber system_frame_number of a frame
     */
    getFrame(frameNumber: number): GstVideo.VideoCodecFrame
    /**
     * Get all pending unfinished #GstVideoCodecFrame
     */
    getFrames(): GstVideo.VideoCodecFrame[]
    /**
     * Queries the number of the last subframe received by
     * the decoder baseclass in the `frame`.
     * @param frame the #GstVideoCodecFrame to update
     */
    getInputSubframeIndex(frame: GstVideo.VideoCodecFrame): number
    /**
     * Query the configured decoder latency. Results will be returned via
     * `min_latency` and `max_latency`.
     */
    getLatency(): [ /* minLatency */ Gst.ClockTime | null, /* maxLatency */ Gst.ClockTime | null ]
    /**
     * Determines maximum possible decoding time for `frame` that will
     * allow it to decode and arrive in time (as determined by QoS events).
     * In particular, a negative result means decoding in time is no longer possible
     * and should therefore occur as soon/skippy as possible.
     * @param frame a #GstVideoCodecFrame
     */
    getMaxDecodeTime(frame: GstVideo.VideoCodecFrame): Gst.ClockTimeDiff
    getMaxErrors(): number
    /**
     * Queries decoder required format handling.
     */
    getNeedsFormat(): boolean
    /**
     * Queries if the decoder requires a sync point before it starts outputting
     * data in the beginning.
     */
    getNeedsSyncPoint(): boolean
    /**
     * Get the oldest pending unfinished #GstVideoCodecFrame
     */
    getOldestFrame(): GstVideo.VideoCodecFrame
    /**
     * Get the #GstVideoCodecState currently describing the output stream.
     */
    getOutputState(): GstVideo.VideoCodecState
    /**
     * Queries whether input data is considered packetized or not by the
     * base class.
     */
    getPacketized(): boolean
    /**
     * Returns the number of bytes previously added to the current frame
     * by calling gst_video_decoder_add_to_frame().
     */
    getPendingFrameSize(): number
    /**
     * Queries the number of subframes in the frame processed by
     * the decoder baseclass.
     * @param frame the #GstVideoCodecFrame to update
     */
    getProcessedSubframeIndex(frame: GstVideo.VideoCodecFrame): number
    getQosProportion(): number
    /**
     * Queries whether input data is considered as subframes or not by the
     * base class. If FALSE, each input buffer will be considered as a full
     * frame.
     */
    getSubframeMode(): boolean
    /**
     * Gathers all data collected for currently parsed frame, gathers corresponding
     * metadata and passes it along for further processing, i.e. `handle_frame`.
     */
    haveFrame(): Gst.FlowReturn
    /**
     * Indicates that the last subframe has been processed by the decoder
     * in `frame`. This will release the current frame in video decoder
     * allowing to receive new frames from upstream elements. This method
     * must be called in the subclass `handle_frame` callback.
     * @param frame the #GstVideoCodecFrame to update
     */
    haveLastSubframe(frame: GstVideo.VideoCodecFrame): Gst.FlowReturn
    /**
     * Sets the audio decoder tags and how they should be merged with any
     * upstream stream tags. This will override any tags previously-set
     * with gst_audio_decoder_merge_tags().
     * 
     * Note that this is provided for convenience, and the subclass is
     * not required to use this and can still do tag handling on its own.
     * 
     * MT safe.
     * @param tags a #GstTagList to merge, or NULL to unset     previously-set tags
     * @param mode the #GstTagMergeMode to use, usually #GST_TAG_MERGE_REPLACE
     */
    mergeTags(tags: Gst.TagList | null, mode: Gst.TagMergeMode): void
    /**
     * Negotiate with downstream elements to currently configured #GstVideoCodecState.
     * Unmark GST_PAD_FLAG_NEED_RECONFIGURE in any case. But mark it again if
     * negotiate fails.
     */
    negotiate(): boolean
    /**
     * Returns caps that express `caps` (or sink template caps if `caps` == NULL)
     * restricted to resolution/format/... combinations supported by downstream
     * elements.
     * @param caps initial caps
     * @param filter filter caps
     */
    proxyGetcaps(caps?: Gst.Caps | null, filter?: Gst.Caps | null): Gst.Caps
    /**
     * Similar to gst_video_decoder_drop_frame(), but simply releases `frame`
     * without any processing other than removing it from list of pending frames,
     * after which it is considered finished and released.
     * @param frame the #GstVideoCodecFrame to release
     */
    releaseFrame(frame: GstVideo.VideoCodecFrame): void
    /**
     * Allows the #GstVideoDecoder subclass to request from the base class that
     * a new sync should be requested from upstream, and that `frame` was the frame
     * when the subclass noticed that a new sync point is required. A reason for
     * the subclass to do this could be missing reference frames, for example.
     * 
     * The base class will then request a new sync point from upstream as long as
     * the time that passed since the last one is exceeding
     * #GstVideoDecoder:min-force-key-unit-interval.
     * 
     * The subclass can signal via `flags` how the frames until the next sync point
     * should be handled:
     * 
     *   * If %GST_VIDEO_DECODER_REQUEST_SYNC_POINT_DISCARD_INPUT is selected then
     *     all following input frames until the next sync point are discarded.
     *     This can be useful if the lack of a sync point will prevent all further
     *     decoding and the decoder implementation is not very robust in handling
     *     missing references frames.
     *   * If %GST_VIDEO_DECODER_REQUEST_SYNC_POINT_CORRUPT_OUTPUT is selected
     *     then all output frames following `frame` are marked as corrupted via
     *     %GST_BUFFER_FLAG_CORRUPTED. Corrupted frames can be automatically
     *     dropped by the base class, see #GstVideoDecoder:discard-corrupted-frames.
     *     Subclasses can manually mark frames as corrupted via %GST_VIDEO_CODEC_FRAME_FLAG_CORRUPTED
     *     before calling gst_video_decoder_finish_frame().
     * @param frame a #GstVideoCodecFrame
     * @param flags #GstVideoDecoderRequestSyncPointFlags
     */
    requestSyncPoint(frame: GstVideo.VideoCodecFrame, flags: GstVideo.VideoDecoderRequestSyncPointFlags): void
    /**
     * Allows baseclass to perform byte to time estimated conversion.
     * @param enabled whether to enable byte to time conversion
     */
    setEstimateRate(enabled: boolean): void
    /**
     * Same as #gst_video_decoder_set_output_state() but also allows you to also set
     * the interlacing mode.
     * @param fmt a #GstVideoFormat
     * @param interlaceMode A #GstVideoInterlaceMode
     * @param width The width in pixels
     * @param height The height in pixels
     * @param reference An optional reference #GstVideoCodecState
     */
    setInterlacedOutputState(fmt: GstVideo.VideoFormat, interlaceMode: GstVideo.VideoInterlaceMode, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    /**
     * Lets #GstVideoDecoder sub-classes tell the baseclass what the decoder
     * latency is. Will also post a LATENCY message on the bus so the pipeline
     * can reconfigure its global latency.
     * @param minLatency minimum latency
     * @param maxLatency maximum latency
     */
    setLatency(minLatency: Gst.ClockTime, maxLatency: Gst.ClockTime): void
    /**
     * Sets numbers of tolerated decoder errors, where a tolerated one is then only
     * warned about, but more than tolerated will lead to fatal error.  You can set
     * -1 for never returning fatal errors. Default is set to
     * GST_VIDEO_DECODER_MAX_ERRORS.
     * 
     * The '-1' option was added in 1.4
     * @param num max tolerated errors
     */
    setMaxErrors(num: number): void
    /**
     * Configures decoder format needs.  If enabled, subclass needs to be
     * negotiated with format caps before it can process any data.  It will then
     * never be handed any data before it has been configured.
     * Otherwise, it might be handed data without having been configured and
     * is then expected being able to do so either by default
     * or based on the input data.
     * @param enabled new state
     */
    setNeedsFormat(enabled: boolean): void
    /**
     * Configures whether the decoder requires a sync point before it starts
     * outputting data in the beginning. If enabled, the base class will discard
     * all non-sync point frames in the beginning and after a flush and does not
     * pass it to the subclass.
     * 
     * If the first frame is not a sync point, the base class will request a sync
     * point via the force-key-unit event.
     * @param enabled new state
     */
    setNeedsSyncPoint(enabled: boolean): void
    /**
     * Creates a new #GstVideoCodecState with the specified `fmt,` `width` and `height`
     * as the output state for the decoder.
     * Any previously set output state on `decoder` will be replaced by the newly
     * created one.
     * 
     * If the subclass wishes to copy over existing fields (like pixel aspec ratio,
     * or framerate) from an existing #GstVideoCodecState, it can be provided as a
     * `reference`.
     * 
     * If the subclass wishes to override some fields from the output state (like
     * pixel-aspect-ratio or framerate) it can do so on the returned #GstVideoCodecState.
     * 
     * The new output state will only take effect (set on pads and buffers) starting
     * from the next call to #gst_video_decoder_finish_frame().
     * @param fmt a #GstVideoFormat
     * @param width The width in pixels
     * @param height The height in pixels
     * @param reference An optional reference #GstVideoCodecState
     */
    setOutputState(fmt: GstVideo.VideoFormat, width: number, height: number, reference?: GstVideo.VideoCodecState | null): GstVideo.VideoCodecState
    /**
     * Allows baseclass to consider input data as packetized or not. If the
     * input is packetized, then the `parse` method will not be called.
     * @param packetized whether the input data should be considered as packetized.
     */
    setPacketized(packetized: boolean): void
    /**
     * If this is set to TRUE, it informs the base class that the subclass
     * can receive the data at a granularity lower than one frame.
     * 
     * Note that in this mode, the subclass has two options. It can either
     * require the presence of a GST_VIDEO_BUFFER_FLAG_MARKER to mark the
     * end of a frame. Or it can operate in such a way that it will decode
     * a single frame at a time. In this second case, every buffer that
     * arrives to the element is considered part of the same frame until
     * gst_video_decoder_finish_frame() is called.
     * 
     * In either case, the same #GstVideoCodecFrame will be passed to the
     * GstVideoDecoderClass:handle_frame vmethod repeatedly with a
     * different GstVideoCodecFrame:input_buffer every time until the end of the
     * frame has been signaled using either method.
     * This method must be called during the decoder subclass `set_format` call.
     * @param subframeMode whether the input data should be considered as subframes.
     */
    setSubframeMode(subframeMode: boolean): void
    /**
     * Lets #GstVideoDecoder sub-classes decide if they want the sink pad
     * to use the default pad query handler to reply to accept-caps queries.
     * 
     * By setting this to true it is possible to further customize the default
     * handler with %GST_PAD_SET_ACCEPT_INTERSECT and
     * %GST_PAD_SET_ACCEPT_TEMPLATE
     * @param use if the default pad accept-caps query handling should be used
     */
    setUseDefaultPadAcceptcaps(use: boolean): void
    /* Methods of Gst-1.0.Gst.Element */
    /**
     * Abort the state change of the element. This function is used
     * by elements that do asynchronous state changes and find out
     * something is wrong.
     * 
     * This function should be called with the STATE_LOCK held.
     * 
     * MT safe.
     */
    abortState(): void
    /**
     * Adds a pad (link point) to `element`. `pad'`s parent will be set to `element;`
     * see gst_object_set_parent() for refcounting information.
     * 
     * Pads are automatically activated when added in the PAUSED or PLAYING
     * state.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-added signal on the element.
     * @param pad the #GstPad to add to the element.
     */
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
    /**
     * Calls `func` from another thread and passes `user_data` to it. This is to be
     * used for cases when a state change has to be performed from a streaming
     * thread, directly via gst_element_set_state() or indirectly e.g. via SEEK
     * events.
     * 
     * Calling those functions directly from the streaming thread will cause
     * deadlocks in many situations, as they might involve waiting for the
     * streaming thread to shut down from this very streaming thread.
     * 
     * MT safe.
     * @param func Function to call asynchronously from another thread
     */
    callAsync(func: Gst.ElementCallAsyncFunc): void
    /**
     * Perform `transition` on `element`.
     * 
     * This function must be called with STATE_LOCK held and is mainly used
     * internally.
     * @param transition the requested transition
     */
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
    /**
     * Commit the state change of the element and proceed to the next
     * pending state if any. This function is used
     * by elements that do asynchronous state changes.
     * The core will normally call this method automatically when an
     * element returned %GST_STATE_CHANGE_SUCCESS from the state change function.
     * 
     * If after calling this method the element still has not reached
     * the pending state, the next state change is performed.
     * 
     * This method is used internally and should normally not be called by plugins
     * or applications.
     * 
     * This function must be called with STATE_LOCK held.
     * @param ret The previous state return value
     */
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    /**
     * Creates a pad for each pad template that is always available.
     * This function is only useful during object initialization of
     * subclasses of #GstElement.
     */
    createAllPads(): void
    /**
     * Call `func` with `user_data` for each of `element'`s pads. `func` will be called
     * exactly once for each pad that exists at the time of this call, unless
     * one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new pads are added or pads are removed
     * while pads are being iterated, this will not be taken into account until
     * next time this function is used.
     * @param func function to call for each pad
     */
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s sink pads. `func` will be
     * called exactly once for each sink pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new sink pads are added or sink pads
     * are removed while the sink pads are being iterated, this will not be taken
     * into account until next time this function is used.
     * @param func function to call for each sink pad
     */
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s source pads. `func` will be
     * called exactly once for each source pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new source pads are added or source pads
     * are removed while the source pads are being iterated, this will not be taken
     * into account until next time this function is used.
     * @param func function to call for each source pad
     */
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Returns the base time of the element. The base time is the
     * absolute time of the clock when this element was last put to
     * PLAYING. Subtracting the base time from the clock time gives
     * the running time of the element.
     */
    getBaseTime(): Gst.ClockTime
    /**
     * Returns the bus of the element. Note that only a #GstPipeline will provide a
     * bus for the application.
     */
    getBus(): Gst.Bus | null
    /**
     * Gets the currently configured clock of the element. This is the clock as was
     * last set with gst_element_set_clock().
     * 
     * Elements in a pipeline will only have their clock set when the
     * pipeline is in the PLAYING state.
     */
    getClock(): Gst.Clock | null
    /**
     * Looks for an unlinked pad to which the given pad can link. It is not
     * guaranteed that linking the pads will work, though it should work in most
     * cases.
     * 
     * This function will first attempt to find a compatible unlinked ALWAYS pad,
     * and if none can be found, it will request a compatible REQUEST pad by looking
     * at the templates of `element`.
     * @param pad the #GstPad to find a compatible one for.
     * @param caps the #GstCaps to use as a filter.
     */
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad template from `element` that is compatible with `compattempl`.
     * Pads from compatible templates can be linked together.
     * @param compattempl the #GstPadTemplate to find a compatible     template for
     */
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * 
     * MT safe.
     * @param contextType a name of a context to retrieve
     */
    getContext(contextType: string): Gst.Context | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * @param contextType a name of a context to retrieve
     */
    getContextUnlocked(contextType: string): Gst.Context | null
    /**
     * Gets the contexts set on the element.
     * 
     * MT safe.
     */
    getContexts(): Gst.Context[]
    /**
     * Returns the current clock time of the element, as in, the time of the
     * element's clock, or GST_CLOCK_TIME_NONE if there is no clock.
     */
    getCurrentClockTime(): Gst.ClockTime
    /**
     * Returns the running time of the element. The running time is the
     * element's clock time minus its base time. Will return GST_CLOCK_TIME_NONE
     * if the element has no clock, or if its base time has not been set.
     */
    getCurrentRunningTime(): Gst.ClockTime
    /**
     * Retrieves the factory that was used to create this element.
     */
    getFactory(): Gst.ElementFactory | null
    /**
     * Get metadata with `key` in `klass`.
     * @param key the key to get
     */
    getMetadata(key: string): string
    /**
     * Retrieves a padtemplate from `element` with the given name.
     * @param name the name of the #GstPadTemplate to get.
     */
    getPadTemplate(name: string): Gst.PadTemplate | null
    /**
     * Retrieves a list of the pad templates associated with `element`. The
     * list must not be modified by the calling code.
     */
    getPadTemplateList(): Gst.PadTemplate[]
    /**
     * The name of this function is confusing to people learning GStreamer.
     * gst_element_request_pad_simple() aims at making it more explicit it is
     * a simplified gst_element_request_pad().
     * @param name the name of the request #GstPad to retrieve.
     */
    getRequestPad(name: string): Gst.Pad | null
    /**
     * Returns the start time of the element. The start time is the
     * running time of the clock when this element was last put to PAUSED.
     * 
     * Usually the start_time is managed by a toplevel element such as
     * #GstPipeline.
     * 
     * MT safe.
     */
    getStartTime(): Gst.ClockTime
    /**
     * Gets the state of the element.
     * 
     * For elements that performed an ASYNC state change, as reported by
     * gst_element_set_state(), this function will block up to the
     * specified timeout value for the state change to complete.
     * If the element completes the state change or goes into
     * an error, this function returns immediately with a return value of
     * %GST_STATE_CHANGE_SUCCESS or %GST_STATE_CHANGE_FAILURE respectively.
     * 
     * For elements that did not return %GST_STATE_CHANGE_ASYNC, this function
     * returns the current and pending state immediately.
     * 
     * This function returns %GST_STATE_CHANGE_NO_PREROLL if the element
     * successfully changed its state but is not able to provide data yet.
     * This mostly happens for live sources that only produce data in
     * %GST_STATE_PLAYING. While the state change return is equivalent to
     * %GST_STATE_CHANGE_SUCCESS, it is returned to the application to signal that
     * some sink elements might not be able to complete their state change because
     * an element is not producing data to complete the preroll. When setting the
     * element to playing, the preroll will complete and playback will start.
     * @param timeout a #GstClockTime to specify the timeout for an async           state change or %GST_CLOCK_TIME_NONE for infinite timeout.
     */
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    /**
     * Retrieves a pad from `element` by name. This version only retrieves
     * already-existing (i.e. 'static') pads.
     * @param name the name of the static #GstPad to retrieve.
     */
    getStaticPad(name: string): Gst.Pad | null
    /**
     * Checks if the state of an element is locked.
     * If the state of an element is locked, state changes of the parent don't
     * affect the element.
     * This way you can leave currently unused elements inside bins. Just lock their
     * state before changing the state from #GST_STATE_NULL.
     * 
     * MT safe.
     */
    isLockedState(): boolean
    /**
     * Retrieves an iterator of `element'`s pads. The iterator should
     * be freed after usage. Also more specialized iterators exists such as
     * gst_element_iterate_src_pads() or gst_element_iterate_sink_pads().
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iteratePads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s sink pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterateSinkPads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s source pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterateSrcPads(): Gst.Iterator
    /**
     * Links `src` to `dest`. The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * Such pads need to be released manually when unlinking.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     * @param dest the #GstElement containing the destination pad.
     */
    link(dest: Gst.Element): boolean
    /**
     * Links `src` to `dest` using the given caps as filtercaps.
     * The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     * @param dest the #GstElement containing the destination pad.
     * @param filter the #GstCaps to filter the link,     or %NULL for no filter.
     */
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element, or %NULL for any pad.
     */
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    /**
     * Links the two named pads of the source and destination elements. Side effect
     * is that if one of the pads has no parent, it becomes a child of the parent of
     * the other element. If they have different parents, the link fails. If `caps`
     * is not %NULL, makes sure that the caps of the link is a subset of `caps`.
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element     or %NULL for any pad.
     * @param filter the #GstCaps to filter the link,     or %NULL for no filter.
     */
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     * 
     * Calling gst_element_link_pads_full() with `flags` == %GST_PAD_LINK_CHECK_DEFAULT
     * is the same as calling gst_element_link_pads() and the recommended way of
     * linking pads with safety checks applied.
     * 
     * This is a convenience function for gst_pad_link_full().
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element, or %NULL for any pad.
     * @param flags the #GstPadLinkCheck to be performed when linking pads.
     */
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    /**
     * Brings the element to the lost state. The current state of the
     * element is copied to the pending state so that any call to
     * gst_element_get_state() will return %GST_STATE_CHANGE_ASYNC.
     * 
     * An ASYNC_START message is posted. If the element was PLAYING, it will
     * go to PAUSED. The element will be restored to its PLAYING state by
     * the parent pipeline when it prerolls again.
     * 
     * This is mostly used for elements that lost their preroll buffer
     * in the %GST_STATE_PAUSED or %GST_STATE_PLAYING state after a flush,
     * they will go to their pending state again when a new preroll buffer is
     * queued. This function can only be called when the element is currently
     * not in error or an async state change.
     * 
     * This function is used internally and should normally not be called from
     * plugins or applications.
     */
    lostState(): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     * 
     * MT safe.
     * @param type the #GstMessageType
     * @param domain the GStreamer GError domain this message belongs to
     * @param code the GError code belonging to the domain
     * @param text an allocated text string to be used            as a replacement for the default message connected to code,            or %NULL
     * @param debug an allocated debug message to be            used as a replacement for the default debugging information,            or %NULL
     * @param file the source code file where the error was generated
     * @param function_ the source code function where the error was generated
     * @param line the source code line where the error was generated
     */
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     * @param type the #GstMessageType
     * @param domain the GStreamer GError domain this message belongs to
     * @param code the GError code belonging to the domain
     * @param text an allocated text string to be used            as a replacement for the default message connected to code,            or %NULL
     * @param debug an allocated debug message to be            used as a replacement for the default debugging information,            or %NULL
     * @param file the source code file where the error was generated
     * @param function_ the source code function where the error was generated
     * @param line the source code line where the error was generated
     * @param structure optional details structure
     */
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    /**
     * Use this function to signal that the element does not expect any more pads
     * to show up in the current pipeline. This function should be called whenever
     * pads have been added by the element itself. Elements with #GST_PAD_SOMETIMES
     * pad templates use this in combination with autopluggers to figure out that
     * the element is done initializing its pads.
     * 
     * This function emits the #GstElement::no-more-pads signal.
     * 
     * MT safe.
     */
    noMorePads(): void
    /**
     * Post a message on the element's #GstBus. This function takes ownership of the
     * message; if you want to access the message after this call, you should add an
     * additional reference before calling.
     * @param message a #GstMessage to post
     */
    postMessage(message: Gst.Message): boolean
    /**
     * Get the clock provided by the given element.
     * > An element is only required to provide a clock in the PAUSED
     * > state. Some elements can provide a clock in other states.
     */
    provideClock(): Gst.Clock | null
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @param query the #GstQuery.
     */
    query(query: Gst.Query): boolean
    /**
     * Queries an element to convert `src_val` in `src_format` to `dest_format`.
     * @param srcFormat a #GstFormat to convert from.
     * @param srcVal a value to convert.
     * @param destFormat the #GstFormat to convert to.
     */
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * total stream duration in nanoseconds. This query will only work once the
     * pipeline is prerolled (i.e. reached PAUSED or PLAYING state). The application
     * will receive an ASYNC_DONE message on the pipeline bus when that is the case.
     * 
     * If the duration changes for some reason, you will get a DURATION_CHANGED
     * message on the pipeline bus, in which case you should re-query the duration
     * using this function.
     * @param format the #GstFormat requested
     */
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * stream position in nanoseconds. This will be a value between 0 and the
     * stream duration (if the stream duration is known). This query will usually
     * only work once the pipeline is prerolled (i.e. reached PAUSED or PLAYING
     * state). The application will receive an ASYNC_DONE message on the pipeline
     * bus when that is the case.
     * 
     * If one repeatedly calls this function one can also create a query and reuse
     * it in gst_element_query().
     * @param format the #GstFormat requested
     */
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    /**
     * Makes the element free the previously requested pad as obtained
     * with gst_element_request_pad().
     * 
     * This does not unref the pad. If the pad was created by using
     * gst_element_request_pad(), gst_element_release_request_pad() needs to be
     * followed by gst_object_unref() to free the `pad`.
     * 
     * MT safe.
     * @param pad the #GstPad to release.
     */
    releaseRequestPad(pad: Gst.Pad): void
    /**
     * Removes `pad` from `element`. `pad` will be destroyed if it has not been
     * referenced elsewhere using gst_object_unparent().
     * 
     * This function is used by plugin developers and should not be used
     * by applications. Pads that were dynamically requested from elements
     * with gst_element_request_pad() should be released with the
     * gst_element_release_request_pad() function instead.
     * 
     * Pads are not automatically deactivated so elements should perform the needed
     * steps to deactivate the pad in case this pad is removed in the PAUSED or
     * PLAYING state. See gst_pad_set_active() for more information about
     * deactivating pads.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-removed signal on the element.
     * @param pad the #GstPad to remove from the element.
     */
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    /**
     * Retrieves a request pad from the element according to the provided template.
     * Pad templates can be looked up using
     * gst_element_factory_get_static_pad_templates().
     * 
     * The pad should be released with gst_element_release_request_pad().
     * @param templ a #GstPadTemplate of which we want a pad of.
     * @param name the name of the request #GstPad to retrieve. Can be %NULL.
     * @param caps the caps of the pad we want to request. Can be %NULL.
     */
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad from the element by name (e.g. "src_\%d"). This version only
     * retrieves request pads. The pad should be released with
     * gst_element_release_request_pad().
     * 
     * This method is slower than manually getting the pad template and calling
     * gst_element_request_pad() if the pads should have a specific name (e.g.
     * `name` is "src_1" instead of "src_\%u").
     * 
     * Note that this function was introduced in GStreamer 1.20 in order to provide
     * a better name to gst_element_get_request_pad(). Prior to 1.20, users
     * should use gst_element_get_request_pad() which provides the same
     * functionality.
     * @param name the name of the request #GstPad to retrieve.
     */
    requestPadSimple(name: string): Gst.Pad | null
    /**
     * Sends a seek event to an element. See gst_event_new_seek() for the details of
     * the parameters. The seek event is sent to the element using
     * gst_element_send_event().
     * 
     * MT safe.
     * @param rate The new playback rate
     * @param format The format of the seek values
     * @param flags The optional seek flags.
     * @param startType The type and flags for the new start position
     * @param start The value of the new start position
     * @param stopType The type and flags for the new stop position
     * @param stop The value of the new stop position
     */
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
    /**
     * Simple API to perform a seek on the given element, meaning it just seeks
     * to the given position relative to the start of the stream. For more complex
     * operations like segment seeks (e.g. for looping) or changing the playback
     * rate or seeking relative to the last configured playback segment you should
     * use gst_element_seek().
     * 
     * In a completely prerolled PAUSED or PLAYING pipeline, seeking is always
     * guaranteed to return %TRUE on a seekable media type or %FALSE when the media
     * type is certainly not seekable (such as a live stream).
     * 
     * Some elements allow for seeking in the READY state, in this
     * case they will store the seek event and execute it when they are put to
     * PAUSED. If the element supports seek in READY, it will always return %TRUE when
     * it receives the event in the READY state.
     * @param format a #GstFormat to execute the seek in, such as #GST_FORMAT_TIME
     * @param seekFlags seek options; playback applications will usually want to use            GST_SEEK_FLAG_FLUSH | GST_SEEK_FLAG_KEY_UNIT here
     * @param seekPos position to seek to (relative to the start); if you are doing            a seek in #GST_FORMAT_TIME this value is in nanoseconds -            multiply with #GST_SECOND to convert seconds to nanoseconds or            with #GST_MSECOND to convert milliseconds to nanoseconds.
     */
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    /**
     * Sends an event to an element. If the element doesn't implement an
     * event handler, the event will be pushed on a random linked sink pad for
     * downstream events or a random linked source pad for upstream events.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     * 
     * MT safe.
     * @param event the #GstEvent to send to the element.
     */
    sendEvent(event: Gst.Event): boolean
    /**
     * Set the base time of an element. See gst_element_get_base_time().
     * 
     * MT safe.
     * @param time the base time to set.
     */
    setBaseTime(time: Gst.ClockTime): void
    /**
     * Sets the bus of the element. Increases the refcount on the bus.
     * For internal use only, unless you're testing elements.
     * 
     * MT safe.
     * @param bus the #GstBus to set.
     */
    setBus(bus?: Gst.Bus | null): void
    /**
     * Sets the clock for the element. This function increases the
     * refcount on the clock. Any previously set clock on the object
     * is unreffed.
     * @param clock the #GstClock to set for the element.
     */
    setClock(clock?: Gst.Clock | null): boolean
    /**
     * Sets the context of the element. Increases the refcount of the context.
     * 
     * MT safe.
     * @param context the #GstContext to set.
     */
    setContext(context: Gst.Context): void
    /**
     * Locks the state of an element, so state changes of the parent don't affect
     * this element anymore.
     * 
     * Note that this is racy if the state lock of the parent bin is not taken.
     * The parent bin might've just checked the flag in another thread and as the
     * next step proceed to change the child element's state.
     * 
     * MT safe.
     * @param lockedState %TRUE to lock the element's state
     */
    setLockedState(lockedState: boolean): boolean
    /**
     * Set the start time of an element. The start time of the element is the
     * running time of the element when it last went to the PAUSED state. In READY
     * or after a flushing seek, it is set to 0.
     * 
     * Toplevel elements like #GstPipeline will manage the start_time and
     * base_time on its children. Setting the start_time to #GST_CLOCK_TIME_NONE
     * on such a toplevel element will disable the distribution of the base_time to
     * the children and can be useful if the application manages the base_time
     * itself, for example if you want to synchronize capture from multiple
     * pipelines, and you can also ensure that the pipelines have the same clock.
     * 
     * MT safe.
     * @param time the base time to set.
     */
    setStartTime(time: Gst.ClockTime): void
    /**
     * Sets the state of the element. This function will try to set the
     * requested state by going through all the intermediary states and calling
     * the class's state change function for each.
     * 
     * This function can return #GST_STATE_CHANGE_ASYNC, in which case the
     * element will perform the remainder of the state change asynchronously in
     * another thread.
     * An application can use gst_element_get_state() to wait for the completion
     * of the state change or it can wait for a %GST_MESSAGE_ASYNC_DONE or
     * %GST_MESSAGE_STATE_CHANGED on the bus.
     * 
     * State changes to %GST_STATE_READY or %GST_STATE_NULL never return
     * #GST_STATE_CHANGE_ASYNC.
     * @param state the element's new #GstState.
     */
    setState(state: Gst.State): Gst.StateChangeReturn
    /**
     * Tries to change the state of the element to the same as its parent.
     * If this function returns %FALSE, the state of element is undefined.
     */
    syncStateWithParent(): boolean
    /**
     * Unlinks all source pads of the source element with all sink pads
     * of the sink element to which they are linked.
     * 
     * If the link has been made using gst_element_link(), it could have created an
     * requestpad, which has to be released using gst_element_release_request_pad().
     * @param dest the sink #GstElement to unlink.
     */
    unlink(dest: Gst.Element): void
    /**
     * Unlinks the two named pads of the source and destination elements.
     * 
     * This is a convenience function for gst_pad_unlink().
     * @param srcpadname the name of the #GstPad in source element.
     * @param dest a #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element.
     */
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    /**
     * Attach the #GstControlBinding to the object. If there already was a
     * #GstControlBinding for this property it will be replaced.
     * 
     * The object's reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     * @param binding the #GstControlBinding that should be used
     */
    addControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * A default error function that uses g_printerr() to display the error message
     * and the optional debug string..
     * 
     * The default handler will simply print the error string using g_print.
     * @param error the GError.
     * @param debug an additional debug information string, or %NULL
     */
    defaultError(error: GLib.Error, debug?: string | null): void
    /**
     * Gets the corresponding #GstControlBinding for the property. This should be
     * unreferenced again after use.
     * @param propertyName name of the property
     */
    getControlBinding(propertyName: string): Gst.ControlBinding | null
    /**
     * Obtain the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * If the `object` is not under property control, this will return
     * %GST_CLOCK_TIME_NONE. This allows the element to avoid the sub-dividing.
     * 
     * The control-rate is not expected to change if the element is in
     * %GST_STATE_PAUSED or %GST_STATE_PLAYING.
     */
    getControlRate(): Gst.ClockTime
    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     * @param propertyName the name of the property to get
     * @param timestamp the time that should be processed
     * @param interval the time spacing between subsequent values
     * @param values array to put control-values in
     */
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Returns a copy of the name of `object`.
     * Caller should g_free() the return value after usage.
     * For a nameless object, this returns %NULL, which you can safely g_free()
     * as well.
     * 
     * Free-function: g_free
     */
    getName(): string | null
    /**
     * Returns the parent of `object`. This function increases the refcount
     * of the parent object so you should gst_object_unref() it after usage.
     */
    getParent(): Gst.Object | null
    /**
     * Generates a string describing the path of `object` in
     * the object hierarchy. Only useful (or used) for debugging.
     * 
     * Free-function: g_free
     */
    getPathString(): string
    /**
     * Gets the value for the given controlled property at the requested time.
     * @param propertyName the name of the property to get
     * @param timestamp the time the control-change should be read from
     */
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    /**
     * Check if the `object` has active controlled properties.
     */
    hasActiveControlBindings(): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    hasAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    hasAsAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `parent` is the parent of `object`.
     * E.g. a #GstElement can check if it owns a given #GstPad.
     * @param parent a #GstObject to check as parent
     */
    hasAsParent(parent: Gst.Object): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     */
    ref(): Gst.Object
    /**
     * Removes the corresponding #GstControlBinding. If it was the
     * last ref of the binding, it will be disposed.
     * @param binding the binding
     */
    removeControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * This function is used to disable the control bindings on a property for
     * some time, i.e. gst_object_sync_values() will do nothing for the
     * property.
     * @param propertyName property to disable
     * @param disabled boolean that specifies whether to disable the controller or not.
     */
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    /**
     * This function is used to disable all controlled properties of the `object` for
     * some time, i.e. gst_object_sync_values() will do nothing.
     * @param disabled boolean that specifies whether to disable the controller or not.
     */
    setControlBindingsDisabled(disabled: boolean): void
    /**
     * Change the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * The control-rate should not change if the element is in %GST_STATE_PAUSED or
     * %GST_STATE_PLAYING.
     * @param controlRate the new control-rate in nanoseconds.
     */
    setControlRate(controlRate: Gst.ClockTime): void
    /**
     * Sets the name of `object,` or gives `object` a guaranteed unique
     * name (if `name` is %NULL).
     * This function makes a copy of the provided name, so the caller
     * retains ownership of the name it sent.
     * @param name new name of object
     */
    setName(name?: string | null): boolean
    /**
     * Sets the parent of `object` to `parent`. The object's reference count will
     * be incremented, and any floating reference will be removed (see gst_object_ref_sink()).
     * @param parent new parent of object
     */
    setParent(parent: Gst.Object): boolean
    /**
     * Returns a suggestion for timestamps where buffers should be split
     * to get best controller results.
     */
    suggestNextSync(): Gst.ClockTime
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     * @param timestamp the time that should be processed
     */
    syncValues(timestamp: Gst.ClockTime): boolean
    /**
     * Clear the parent of `object,` removing the associated reference.
     * This function decreases the refcount of `object`.
     * 
     * MT safe. Grabs and releases `object'`s lock.
     */
    unparent(): void
    /**
     * Decrements the reference count on `object`.  If reference count hits
     * zero, destroy `object`. This function does not take the lock
     * on `object` as it relies on atomic refcounting.
     * 
     * The unref method should never be called with the LOCK held since
     * this might deadlock the dispose function.
     */
    unref(): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    stealQdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thawNotify(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watchClosure(closure: Function): void
    /* Signals of Gst-1.0.Gst.Element */
    /**
     * This signals that the element will not generate more dynamic pads.
     * Note that this signal will usually be emitted from the context of
     * the streaming thread.
     */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    /**
     * a new #GstPad has been added to the element. Note that this signal will
     * usually be emitted from the context of the streaming thread. Also keep in
     * mind that if you add new elements to the pipeline in the signal handler
     * you will need to set them to the desired target state with
     * gst_element_set_state() or gst_element_sync_state_with_parent().
     * @param newPad the pad that has been added
     */
    connect(sigName: "pad-added", callback: ((newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    /**
     * a #GstPad has been removed from the element
     * @param oldPad the pad that has been removed
     */
    connect(sigName: "pad-removed", callback: ((oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    /**
     * The deep notify signal is used to be notified of property changes. It is
     * typically attached to the toplevel bin to receive notifications from all
     * the elements contained in that bin.
     * @param propObject the object that originated the signal
     * @param prop the property that changed
     */
    connect(sigName: "deep-notify", callback: ((propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::automatic-request-sync-point-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-request-sync-point-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::automatic-request-sync-point-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::automatic-request-sync-point-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::automatic-request-sync-point-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::automatic-request-sync-points", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-request-sync-points", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::automatic-request-sync-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::automatic-request-sync-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::automatic-request-sync-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::discard-corrupted-frames", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard-corrupted-frames", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::discard-corrupted-frames", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-errors", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-force-key-unit-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-force-key-unit-interval", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-force-key-unit-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Vp9Decoder_ConstructProps)
    _init (config?: Vp9Decoder_ConstructProps): void
    static $gtype: GObject.Type
}
abstract class AV1DecoderClass {
    /* Fields of GstCodecs-1.0.GstCodecs.AV1DecoderClass */
    parentClass: GstVideo.VideoDecoderClass
    newPicture: (decoder: AV1Decoder, frame: GstVideo.VideoCodecFrame, picture: AV1Picture) => Gst.FlowReturn
    duplicatePicture: (decoder: AV1Decoder, frame: GstVideo.VideoCodecFrame, picture: AV1Picture) => AV1Picture
    startPicture: (decoder: AV1Decoder, picture: AV1Picture, dpb: AV1Dpb) => Gst.FlowReturn
    decodeTile: (decoder: AV1Decoder, picture: AV1Picture, tile: AV1Tile) => Gst.FlowReturn
    endPicture: (decoder: AV1Decoder, picture: AV1Picture) => Gst.FlowReturn
    outputPicture: (decoder: AV1Decoder, frame: GstVideo.VideoCodecFrame, picture: AV1Picture) => Gst.FlowReturn
    static name: string
}
class AV1DecoderPrivate {
    static name: string
}
class AV1Dpb {
    /* Fields of GstCodecs-1.0.GstCodecs.AV1Dpb */
    picList: AV1Picture[]
    /* Methods of GstCodecs-1.0.GstCodecs.AV1Dpb */
    /**
     * Store the `picture`
     * @param picture a #GstAV1Picture
     */
    add(picture: AV1Picture): void
    /**
     * Clear all stored #GstAV1Picture
     */
    clear(): void
    /**
     * Free the `dpb`
     */
    free(): void
    static name: string
}
class AV1Picture {
    /* Fields of GstCodecs-1.0.GstCodecs.AV1Picture */
    parent: Gst.MiniObject
    systemFrameNumber: number
    displayFrameId: number
    showFrame: boolean
    showableFrame: boolean
    applyGrain: boolean
    userData: object
    notify: GLib.DestroyNotify
    /* Methods of GstCodecs-1.0.GstCodecs.AV1Picture */
    /**
     * Gets private data set on the picture via
     * gst_av1_picture_set_user_data() previously.
     */
    getUserData(): object | null
    /**
     * Sets `user_data` on the picture and the #GDestroyNotify that will be called when
     * the picture is freed.
     * 
     * If a `user_data` was previously set, then the previous set `notify` will be called
     * before the `user_data` is replaced.
     * @param notify a #GDestroyNotify
     */
    setUserData(notify: GLib.DestroyNotify): void
    static name: string
    static new(): AV1Picture
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AV1Picture
}
class AV1Tile {
    static name: string
}
abstract class H264DecoderClass {
    /* Fields of GstCodecs-1.0.GstCodecs.H264DecoderClass */
    newPicture: (decoder: H264Decoder, frame: GstVideo.VideoCodecFrame, picture: H264Picture) => Gst.FlowReturn
    newFieldPicture: (decoder: H264Decoder, firstField: H264Picture, secondField: H264Picture) => Gst.FlowReturn
    startPicture: (decoder: H264Decoder, picture: H264Picture, slice: H264Slice, dpb: H264Dpb) => Gst.FlowReturn
    decodeSlice: (decoder: H264Decoder, picture: H264Picture, slice: H264Slice, refPicList0: H264Picture[], refPicList1: H264Picture[]) => Gst.FlowReturn
    endPicture: (decoder: H264Decoder, picture: H264Picture) => Gst.FlowReturn
    outputPicture: (decoder: H264Decoder, frame: GstVideo.VideoCodecFrame, picture: H264Picture) => Gst.FlowReturn
    getPreferredOutputDelay: (decoder: H264Decoder, live: boolean) => number
    static name: string
}
class H264DecoderPrivate {
    static name: string
}
class H264Dpb {
    /* Methods of GstCodecs-1.0.GstCodecs.H264Dpb */
    /**
     * Store the `picture`
     * @param picture a #GstH264Picture
     */
    add(picture: H264Picture): void
    /**
     * Perform bumping process as defined in C.4.5.3 "Bumping" process.
     * If `drain` is %TRUE, `dpb` will remove a #GstH264Picture from internal array
     * so that returned #GstH264Picture could hold the last reference of it
     * @param drain whether draining or not
     */
    bump(drain: boolean): H264Picture | null
    /**
     * Clear all stored #GstH264Picture
     */
    clear(): void
    /**
     * Delete already outputted and not referenced all pictures from dpb
     */
    deleteUnused(): void
    /**
     * Free the `dpb`
     */
    free(): void
    getInterlaced(): boolean
    /**
     * Find a long term reference picture which has matching long term picture number
     * @param longTermPicNum a long term picture number
     */
    getLongRefByLongTermPicNum(longTermPicNum: number): H264Picture | null
    /**
     * Find a short term reference picture which has the lowest frame_num_wrap
     */
    getLowestFrameNumShortRef(): H264Picture
    getMaxNumFrames(): number
    getPicture(systemFrameNumber: number): H264Picture
    getPicturesAll(): H264Picture[]
    /**
     * Retrieve all long-term reference pictures from `dpb`. The picture will be
     * appended to the array.
     * @param includeSecondField %TRUE if the second field pictures need to be included
     */
    getPicturesLongTermRef(includeSecondField: boolean): /* out */ H264Picture[]
    /**
     * Retrieve all short-term reference pictures from `dpb`. The picture will be
     * appended to the array.
     * @param includeNonExisting %TRUE if non-existing pictures need to be included
     * @param includeSecondField %TRUE if the second field pictures need to be included
     */
    getPicturesShortTermRef(includeNonExisting: boolean, includeSecondField: boolean): /* out */ H264Picture[]
    /**
     * Find a short term reference picture which has matching picture number
     * @param picNum a picture number
     */
    getShortRefByPicNum(picNum: number): H264Picture | null
    getSize(): number
    hasEmptyFrameBuffer(): boolean
    /**
     * Mark all pictures are not referenced
     */
    markAllNonRef(): void
    needsBump(toInsert: H264Picture, latencyMode: H264DpbBumpMode): boolean
    numRefFrames(): number
    setInterlaced(interlaced: boolean): void
    /**
     * Notify the DPB that `picture` is output directly without storing
     * in the DPB.
     * @param picture a #GstH264Picture of the last output.
     */
    setLastOutput(picture: H264Picture): void
    /**
     * Set the number of maximum allowed frames to store
     * @param maxNumFrames the maximum number of picture
     */
    setMaxNumFrames(maxNumFrames: number): void
    setMaxNumReorderFrames(maxNumReorderFrames: number): void
    static name: string
}
class H264Picture {
    /* Methods of GstCodecs-1.0.GstCodecs.H264Picture */
    /**
     * Gets private data set on the picture via
     * gst_h264_picture_set_user_data() previously.
     */
    getUserData(): object | null
    /**
     * Update reference picture type of `picture` with `reference`
     * @param reference a GstH264PictureReference
     * @param otherField %TRUE if `reference` needs to be applied to the other field if any
     */
    setReference(reference: H264PictureReference, otherField: boolean): void
    /**
     * Sets `user_data` on the picture and the #GDestroyNotify that will be called when
     * the picture is freed.
     * 
     * If a `user_data` was previously set, then the previous set `notify` will be called
     * before the `user_data` is replaced.
     * @param notify a #GDestroyNotify
     */
    setUserData(notify: GLib.DestroyNotify): void
    static name: string
    static new(): H264Picture
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): H264Picture
}
class H264Slice {
    static name: string
}
abstract class H265DecoderClass {
    /* Fields of GstCodecs-1.0.GstCodecs.H265DecoderClass */
    parentClass: GstVideo.VideoDecoderClass
    newPicture: (decoder: H265Decoder, frame: GstVideo.VideoCodecFrame, picture: H265Picture) => Gst.FlowReturn
    startPicture: (decoder: H265Decoder, picture: H265Picture, slice: H265Slice, dpb: H265Dpb) => Gst.FlowReturn
    decodeSlice: (decoder: H265Decoder, picture: H265Picture, slice: H265Slice, refPicList0: H265Picture[], refPicList1: H265Picture[]) => Gst.FlowReturn
    endPicture: (decoder: H265Decoder, picture: H265Picture) => Gst.FlowReturn
    outputPicture: (decoder: H265Decoder, frame: GstVideo.VideoCodecFrame, picture: H265Picture) => Gst.FlowReturn
    getPreferredOutputDelay: (decoder: H265Decoder, live: boolean) => number
    static name: string
}
class H265DecoderPrivate {
    static name: string
}
class H265Dpb {
    /* Methods of GstCodecs-1.0.GstCodecs.H265Dpb */
    /**
     * Store the `picture` and perform increase pic_latency_cnt as defined in
     * "C.5.2.3 Additional bumping" process
     * @param picture a #GstH265Picture
     */
    add(picture: H265Picture): void
    /**
     * Perform bumping process as defined in C.5.2.4 "Bumping" process.
     * If `drain` is %TRUE, `dpb` will remove a #GstH265Picture from internal array
     * so that returned #GstH265Picture could hold the last reference of it
     * @param drain whether draining or not
     */
    bump(drain: boolean): H265Picture | null
    /**
     * Clear all stored #GstH265Picture
     */
    clear(): void
    /**
     * Delete not needed for output and not referenced all pictures from dpb
     */
    deleteUnused(): void
    /**
     * Free the `dpb`
     */
    free(): void
    /**
     * Find a long term reference picture which has matching poc
     * @param poc a picture order count
     */
    getLongRefByPoc(poc: number): H265Picture | null
    getMaxNumPics(): number
    getPicture(systemFrameNumber: number): H265Picture
    getPicturesAll(): H265Picture[]
    /**
     * Find a short or long term reference picture which has matching poc
     * @param poc a picture order count
     */
    getRefByPoc(poc: number): H265Picture | null
    /**
     * Find a short or long term reference picture which has matching poc_lsb
     * @param pocLsb a picture order count lsb
     */
    getRefByPocLsb(pocLsb: number): H265Picture | null
    /**
     * Find a short term reference picture which has matching poc
     * @param poc a picture order count
     */
    getShortRefByPoc(poc: number): H265Picture | null
    getSize(): number
    /**
     * Mark all pictures are not referenced
     */
    markAllNonRef(): void
    needsBump(maxNumReorderPics: number, maxLatencyIncrease: number, maxDecPicBuffering: number): boolean
    numRefPictures(): number
    /**
     * Set the number of maximum allowed pictures to store
     * @param maxNumPics the maximum number of picture
     */
    setMaxNumPics(maxNumPics: number): void
    static name: string
}
class H265Picture {
    /* Methods of GstCodecs-1.0.GstCodecs.H265Picture */
    /**
     * Gets private data set on the picture via
     * gst_h265_picture_set_user_data() previously.
     */
    getUserData(): object | null
    /**
     * Sets `user_data` on the picture and the #GDestroyNotify that will be called when
     * the picture is freed.
     * 
     * If a `user_data` was previously set, then the previous set `notify` will be called
     * before the `user_data` is replaced.
     * @param notify a #GDestroyNotify
     */
    setUserData(notify: GLib.DestroyNotify): void
    static name: string
    static new(): H265Picture
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): H265Picture
}
class H265Slice {
    static name: string
}
abstract class Mpeg2DecoderClass {
    /* Fields of GstCodecs-1.0.GstCodecs.Mpeg2DecoderClass */
    parentClass: GstVideo.VideoDecoderClass
    newPicture: (decoder: Mpeg2Decoder, frame: GstVideo.VideoCodecFrame, picture: Mpeg2Picture) => Gst.FlowReturn
    newFieldPicture: (decoder: Mpeg2Decoder, firstField: Mpeg2Picture, secondField: Mpeg2Picture) => Gst.FlowReturn
    startPicture: (decoder: Mpeg2Decoder, picture: Mpeg2Picture, slice: Mpeg2Slice, prevPicture: Mpeg2Picture, nextPicture: Mpeg2Picture) => Gst.FlowReturn
    decodeSlice: (decoder: Mpeg2Decoder, picture: Mpeg2Picture, slice: Mpeg2Slice) => Gst.FlowReturn
    endPicture: (decoder: Mpeg2Decoder, picture: Mpeg2Picture) => Gst.FlowReturn
    outputPicture: (decoder: Mpeg2Decoder, frame: GstVideo.VideoCodecFrame, picture: Mpeg2Picture) => Gst.FlowReturn
    getPreferredOutputDelay: (decoder: Mpeg2Decoder, isLive: boolean) => number
    static name: string
}
class Mpeg2DecoderPrivate {
    static name: string
}
class Mpeg2Dpb {
    /* Methods of GstCodecs-1.0.GstCodecs.Mpeg2Dpb */
    /**
     * Store the `picture`
     * @param picture a #GstMpeg2Picture
     */
    add(picture: Mpeg2Picture): void
    bump(): Mpeg2Picture | null
    /**
     * Clear all stored #GstMpeg2Picture
     */
    clear(): void
    /**
     * Free the `dpb`
     */
    free(): void
    /**
     * Gets the neighbours #GstMpeg2Picture of `picture` in `dpb`.
     * @param picture current #GstMpeg2Picture
     */
    getNeighbours(picture: Mpeg2Picture): [ /* prevPicturePtr */ Mpeg2Picture | null, /* nextPicturePtr */ Mpeg2Picture | null ]
    /**
     * Checks if `dbp` has a new picture.
     */
    needBump(): boolean
    static name: string
}
class Mpeg2Picture {
    /* Methods of GstCodecs-1.0.GstCodecs.Mpeg2Picture */
    /**
     * Gets private data set on the picture via
     * gst_mpeg2_picture_set_user_data() previously.
     */
    getUserData(): object | null
    /**
     * Sets `user_data` on the picture and the #GDestroyNotify that will be called when
     * the picture is freed.
     * 
     * If a `user_data` was previously set, then the previous set `notify` will be called
     * before the `user_data` is replaced.
     * @param notify a #GDestroyNotify
     */
    setUserData(notify: GLib.DestroyNotify): void
    static name: string
    static new(): Mpeg2Picture
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Mpeg2Picture
}
class Mpeg2Slice {
    static name: string
}
abstract class Vp8DecoderClass {
    /* Fields of GstCodecs-1.0.GstCodecs.Vp8DecoderClass */
    parentClass: GstVideo.VideoDecoderClass
    newPicture: (decoder: Vp8Decoder, frame: GstVideo.VideoCodecFrame, picture: Vp8Picture) => Gst.FlowReturn
    startPicture: (decoder: Vp8Decoder, picture: Vp8Picture) => Gst.FlowReturn
    endPicture: (decoder: Vp8Decoder, picture: Vp8Picture) => Gst.FlowReturn
    outputPicture: (decoder: Vp8Decoder, frame: GstVideo.VideoCodecFrame, picture: Vp8Picture) => Gst.FlowReturn
    getPreferredOutputDelay: (decoder: Vp8Decoder, isLive: boolean) => number
    static name: string
}
class Vp8DecoderPrivate {
    static name: string
}
class Vp8Picture {
    /* Fields of GstCodecs-1.0.GstCodecs.Vp8Picture */
    parent: Gst.MiniObject
    pts: Gst.ClockTime
    systemFrameNumber: number
    data: number
    size: number
    userData: object
    notify: GLib.DestroyNotify
    /* Methods of GstCodecs-1.0.GstCodecs.Vp8Picture */
    /**
     * Gets private data set on the picture via
     * gst_vp8_picture_set_user_data() previously.
     */
    getUserData(): object | null
    /**
     * Sets `user_data` on the picture and the #GDestroyNotify that will be called when
     * the picture is freed.
     * 
     * If a `user_data` was previously set, then the previous set `notify` will be called
     * before the `user_data` is replaced.
     * @param notify a #GDestroyNotify
     */
    setUserData(notify: GLib.DestroyNotify): void
    static name: string
    static new(): Vp8Picture
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Vp8Picture
}
abstract class Vp9DecoderClass {
    /* Fields of GstCodecs-1.0.GstCodecs.Vp9DecoderClass */
    parentClass: GstVideo.VideoDecoderClass
    newSequence: (decoder: Vp9Decoder, frameHdr: Vp9FrameHeader) => Gst.FlowReturn
    newPicture: (decoder: Vp9Decoder, frame: GstVideo.VideoCodecFrame, picture: Vp9Picture) => Gst.FlowReturn
    duplicatePicture: (decoder: Vp9Decoder, frame: GstVideo.VideoCodecFrame, picture: Vp9Picture) => Vp9Picture
    startPicture: (decoder: Vp9Decoder, picture: Vp9Picture) => Gst.FlowReturn
    decodePicture: (decoder: Vp9Decoder, picture: Vp9Picture, dpb: Vp9Dpb) => Gst.FlowReturn
    endPicture: (decoder: Vp9Decoder, picture: Vp9Picture) => Gst.FlowReturn
    outputPicture: (decoder: Vp9Decoder, frame: GstVideo.VideoCodecFrame, picture: Vp9Picture) => Gst.FlowReturn
    getPreferredOutputDelay: (decoder: Vp9Decoder, isLive: boolean) => number
    static name: string
}
class Vp9DecoderPrivate {
    static name: string
}
class Vp9DeltaProbabilities {
    static name: string
}
class Vp9Dpb {
    /* Fields of GstCodecs-1.0.GstCodecs.Vp9Dpb */
    picList: Vp9Picture[]
    /* Methods of GstCodecs-1.0.GstCodecs.Vp9Dpb */
    /**
     * Store the `picture`
     * @param picture a #GstVp9Picture
     */
    add(picture: Vp9Picture): void
    /**
     * Clear all stored #GstVp9Picture
     */
    clear(): void
    /**
     * Free the `dpb`
     */
    free(): void
    static name: string
}
class Vp9FrameHeader {
    /* Fields of GstCodecs-1.0.GstCodecs.Vp9FrameHeader */
    /**
     * encoded profile
     */
    profile: number
    /**
     * encoded bit depth
     */
    bitDepth: number
    /**
     * specify the chroma subsampling format for x coordinate
     */
    subsamplingX: number
    /**
     * specify the chroma subsampling format for y coordinate
     */
    subsamplingY: number
    /**
     * specifies the color space of the stream
     */
    colorSpace: number
    /**
     * specifies the black level and range of the luma and chroma
     *   signals
     */
    colorRange: number
    /**
     * equal to 1, indicates the frame indexed by
     *   frame_to_show_map_idx is to be displayed
     */
    showExistingFrame: number
    /**
     * specifies the frame to be displayed.
     *   It is only available if show_existing_frame is 1
     */
    frameToShowMapIdx: number
    /**
     * equal to 0 indicates that the current frame is a key frame
     */
    frameType: number
    /**
     * indicate whether it is a displayable frame or not
     */
    showFrame: number
    /**
     * equal to 1 indicates that error resilient mode is
     *   enabled
     */
    errorResilientMode: number
    /**
     * coded frame width
     */
    width: number
    /**
     * coded frame height
     */
    height: number
    /**
     * equal to 0 means that the render width and
     *   height are inferred from the frame width and height
     */
    renderAndFrameSizeDifferent: number
    /**
     * render width of the frame
     */
    renderWidth: number
    /**
     * render width of the frame
     */
    renderHeight: number
    /**
     * equal to 1 indicates that the frame is an intra-only frame
     */
    intraOnly: number
    /**
     * specifies whether the frame context should be reset to
     *   default values
     */
    resetFrameContext: number
    /**
     * contains a bitmask that specifies which reference frame
     *   slots will be updated with the current frame after it is decoded
     */
    refreshFrameFlags: number
    /**
     * specifies which reference frames are used by inter frames
     */
    refFrameIdx: Uint8Array
    /**
     * specifies the intended direction of the motion vector
     *   in time for each reference frame. A sign bias equal to 0 indicates that
     *   the reference frame is a backwards reference
     */
    refFrameSignBias: Uint8Array
    /**
     * equal to 0 specifies that motion vectors are
     *   specified to quarter pel precision
     */
    allowHighPrecisionMv: number
    /**
     * specifies the filter selection used for performing
     *   inter prediction
     */
    interpolationFilter: number
    /**
     * equal to 1 indicates that the probabilities computed
     *   for this frame
     */
    refreshFrameContext: number
    /**
     * equal to 1 indicates that parallel decoding
     *   mode is enabled
     */
    frameParallelDecodingMode: number
    /**
     * indicates the frame context to use
     */
    frameContextIdx: number
    /**
     * a #GstVp9LoopFilterParams
     */
    loopFilterParams: Vp9LoopFilterParams
    /**
     * a #GstVp9QuantizationParams
     */
    quantizationParams: Vp9QuantizationParams
    /**
     * a #GstVp9SegmentationParams
     */
    segmentationParams: Vp9SegmentationParams
    /**
     * specifies the base 2 logarithm of the width of each tile
     */
    tileColsLog2: number
    /**
     * specifies the base 2 logarithm of the height of each tile
     */
    tileRowsLog2: number
    headerSizeInBytes: number
    /**
     * Specifies how the transform size is determined.
     */
    txMode: Vp9TxMode
    /**
     * Is a derived syntax element that specifies the type of
     * inter prediction to be used.
     */
    referenceMode: Vp9ReferenceMode
    /**
     * Modification to the probabilities encoded in the bitstream.
     */
    deltaProbabilities: Vp9DeltaProbabilities
    /**
     * lossless mode decode
     */
    losslessFlag: number
    /**
     * length of uncompressed header
     */
    frameHeaderLengthInBytes: number
    static name: string
}
class Vp9LoopFilterParams {
    /* Fields of GstCodecs-1.0.GstCodecs.Vp9LoopFilterParams */
    /**
     * indicates the loop filter strength
     */
    loopFilterLevel: number
    /**
     * indicates the sharpness level
     */
    loopFilterSharpness: number
    /**
     * equal to 1 means that the filter level depends
     *   on the mode and reference frame used to predict a block
     */
    loopFilterDeltaEnabled: number
    /**
     * equal to 1 means that the bitstream contains
     *   additional syntax elements that specify which mode and reference frame
     *   deltas are to be updated
     */
    loopFilterDeltaUpdate: number
    /**
     * equal to 1 means that the bitstream contains the syntax
     *   element loop_filter_ref_delta
     */
    updateRefDelta: Uint8Array
    /**
     * contains the adjustment needed for the filter level
     *   based on the chosen reference frame
     */
    loopFilterRefDeltas: Uint8Array
    /**
     * equal to 1 means that the bitstream contains the syntax
     *   element loop_filter_mode_deltas
     */
    updateModeDelta: Uint8Array
    /**
     * contains the adjustment needed for the filter level
     *   based on the chosen mode
     */
    loopFilterModeDeltas: Uint8Array
    static name: string
}
class Vp9MvDeltaProbs {
    static name: string
}
class Vp9Picture {
    /* Methods of GstCodecs-1.0.GstCodecs.Vp9Picture */
    /**
     * Gets private data set on the picture via
     * gst_vp9_picture_set_user_data() previously.
     */
    getUserData(): object | null
    /**
     * Sets `user_data` on the picture and the #GDestroyNotify that will be called when
     * the picture is freed.
     * 
     * If a `user_data` was previously set, then the previous set `notify` will be called
     * before the `user_data` is replaced.
     * @param notify a #GDestroyNotify
     */
    setUserData(notify: GLib.DestroyNotify): void
    static name: string
    static new(): Vp9Picture
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Vp9Picture
}
class Vp9QuantizationParams {
    /* Fields of GstCodecs-1.0.GstCodecs.Vp9QuantizationParams */
    /**
     * indicates the base frame qindex. This is used for Y AC
     *   coefficients and as the base value for the other quantizers
     */
    baseQIdx: number
    /**
     * indicates the Y DC quantizer relative to base_q_idx
     */
    deltaQYDc: number
    /**
     * indicates the UV DC quantizer relative to base_q_idx
     */
    deltaQUvDc: number
    /**
     * indicates the UV AC quantizer relative to base_q_idx
     */
    deltaQUvAc: number
    static name: string
}
class Vp9SegmentationParams {
    /* Fields of GstCodecs-1.0.GstCodecs.Vp9SegmentationParams */
    /**
     * equal to 1 indicates that this frame makes use of the
     *   segmentation tool
     */
    segmentationEnabled: number
    /**
     * equal to 1 indicates that the segmentation map
     *   should be updated during the decoding of this frame
     */
    segmentationUpdateMap: number
    /**
     * specify the probability values to be used when
     *   decoding segment_id
     */
    segmentationTreeProbs: Uint8Array
    /**
     * specify the probability values to be used when
     *    decoding seg_id_predicted
     */
    segmentationPredProb: Uint8Array
    /**
     * equal to 1 indicates that the updates to
     *   the segmentation map are coded relative to the existing segmentation map
     */
    segmentationTemporalUpdate: number
    /**
     * equal to 1 indicates that new parameters are
     *   about to be specified for each segment
     */
    segmentationUpdateData: number
    /**
     * equal to 0 indicates that the segmentation
     *   parameters represent adjustments relative to the standard values.
     *   equal to 1 indicates that the segmentation parameters represent the actual
     *   values to be used
     */
    segmentationAbsOrDeltaUpdate: number
    /**
     * indicates whether feature is enabled or not
     */
    featureEnabled: Uint8Array
    /**
     * segmentation feature data
     */
    featureData: number[]
    static name: string
}
class Vp9StatefulParser {
    /* Fields of GstCodecs-1.0.GstCodecs.Vp9StatefulParser */
    reference: object[]
    /* Methods of GstCodecs-1.0.GstCodecs.Vp9StatefulParser */
    /**
     * Frees `parser`.
     */
    free(): void
    static name: string
}
}
export default GstCodecs;