
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * GstBadAudio-1.0
 */

import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GstAudio from '@girs/gstaudio-1.0';

export namespace GstBadAudio {

/**
 * The output mode defines how the output behaves with regards to looping. Either the playback position is
 * moved back to the beginning of the loop, acting like a backwards seek, or it increases steadily, as if
 * loop were "unrolled".
 */
enum NonstreamAudioOutputMode {
    /**
     * Playback position is moved back to the beginning of the loop
     */
    LOOPING,
    /**
     * Playback position increases steadily, even when looping
     */
    STEADY,
}
/**
 * The subsong mode defines how the decoder shall handle subsongs.
 */
enum NonstreamAudioSubsongMode {
    /**
     * Only the current subsong is played
     */
    SINGLE,
    /**
     * All subsongs are played (current subsong index is ignored)
     */
    ALL,
    /**
     * Use decoder specific default behavior
     */
    DECODER_DEFAULT,
}
/**
 * The name of the template for the sink pad.
 */
const NONSTREAM_AUDIO_DECODER_SINK_NAME: string | null
/**
 * The name of the template for the source pad.
 */
const NONSTREAM_AUDIO_DECODER_SRC_NAME: string | null
module NonstreamAudioDecoder {

    // Constructor properties interface

    interface ConstructorProperties extends Gst.Element.ConstructorProperties {

        // Own constructor properties of GstBadAudio-1.0.GstBadAudio.NonstreamAudioDecoder

        currentSubsong?: number | null
        numLoops?: number | null
    }

}

interface NonstreamAudioDecoder {

    // Own properties of GstBadAudio-1.0.GstBadAudio.NonstreamAudioDecoder

    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstBadAudio-1.0.GstBadAudio.NonstreamAudioDecoder

    element: Gst.Element
    sinkpad: Gst.Pad
    srcpad: Gst.Pad
    upstreamSize: number
    loadedMode: boolean
    inputDataAdapter: GstBase.Adapter
    currentSubsong: number
    subsongMode: NonstreamAudioSubsongMode
    subsongDuration: Gst.ClockTime
    outputMode: NonstreamAudioOutputMode
    numLoops: number
    outputFormatChanged: boolean
    outputAudioInfo: GstAudio.AudioInfo
    curPosInSamples: number
    numDecodedSamples: number
    curSegment: Gst.Segment
    discont: boolean
    toc: Gst.Toc
    allocator: Gst.Allocator
    allocationParams: Gst.AllocationParams
    mutex: GLib.Mutex

    // Owm methods of GstBadAudio-1.0.GstBadAudio.NonstreamAudioDecoder

    /**
     * Allocates an output buffer with the internally configured buffer pool.
     * 
     * This function may only be called from within `load_from_buffer,`
     * `load_from_custom,` and `decode`.
     * @param size Size of the output buffer, in bytes
     * @returns Newly allocated output buffer, or NULL if allocation failed
     */
    allocateOutputBuffer(size: number): Gst.Buffer | null
    /**
     * Gets sample format, sample rate, channel count from the allowed srcpad caps.
     * 
     * This is useful for when the subclass wishes to adjust one or more output
     * parameters to whatever downstream is supporting. For example, the output
     * sample rate is often a freely adjustable value in module players.
     * 
     * This function tries to find a value inside the srcpad peer's caps for
     * `format,` `sample_rate,` `num_chnanels` . Any of these can be NULL; they
     * (and the corresponding downstream caps) are then skipped while retrieving
     * information. Non-fixated caps are fixated first; the value closest to
     * their present value is then chosen. For example, if the variables pointed
     * to by the arguments are GST_AUDIO_FORMAT_16, 48000 Hz, and 2 channels,
     * and the downstream caps are:
     * 
     * "audio/x-raw, format={S16LE,S32LE}, rate=[1,32000], channels=[1,MAX]"
     * 
     * Then `format` and `channels` stay the same, while `sample_rate` is set to 32000 Hz.
     * This way, the initial values the the variables pointed to by the arguments
     * are set to can be used as default output values. Note that if no downstream
     * caps can be retrieved, then this function does nothing, therefore it is
     * necessary to ensure that `format,` `sample_rate,` and `channels` have valid
     * initial values.
     * 
     * Decoder lock is not held by this function, so it can be called from within
     * any of the class vfuncs.
     * @param format #GstAudioFormat value to fill with a sample format
     * @param sampleRate Integer to fill with a sample rate
     * @param numChannels Integer to fill with a channel count
     */
    getDownstreamInfo(format: GstAudio.AudioFormat, sampleRate: number, numChannels: number): void
    /**
     * Reports that a loop has been completed and creates a new appropriate
     * segment for the next loop.
     * 
     * `new_position` exists because a loop may not start at the beginning.
     * 
     * This function is only useful for subclasses which can be in the
     * GST_NONSTREAM_AUDIO_OUTPUT_MODE_LOOPING output mode, since in the
     * GST_NONSTREAM_AUDIO_OUTPUT_MODE_STEADY output mode, this function
     * does nothing. See #GstNonstreamAudioOutputMode for more details.
     * 
     * The subclass calls this during playback when it loops. It produces
     * a new segment with updated base time and internal time values, to allow
     * for seamless looping. It does *not* check the number of elapsed loops;
     * this is up the subclass.
     * 
     * Note that if this function is called, then it must be done after the
     * last samples of the loop have been decoded and pushed downstream.
     * 
     * This function must be called with the decoder mutex lock held, since it
     * is typically called from within `decode` (which in turn are called with
     * the lock already held).
     * @param newPosition 
     */
    handleLoop(newPosition: Gst.ClockTime): void
    /**
     * Sets the output caps by means of a GstAudioInfo structure.
     * 
     * This must be called latest in the first `decode` call, to ensure src caps are
     * set before decoded samples are sent downstream. Typically, this is called
     * from inside `load_from_buffer` or `load_from_custom`.
     * 
     * This function must be called with the decoder mutex lock held, since it
     * is typically called from within the aforementioned vfuncs (which in turn
     * are called with the lock already held).
     * @param audioInfo Valid audio info structure containing the output format
     * @returns TRUE if setting the output format succeeded, FALSE otherwise
     */
    setOutputFormat(audioInfo: GstAudio.AudioInfo): boolean
    /**
     * Convenience function; sets the output caps by means of common parameters.
     * 
     * Internally, this fills a GstAudioInfo structure and calls
     * gst_nonstream_audio_decoder_set_output_format().
     * @param sampleRate Output sample rate to use, in Hz
     * @param sampleFormat Output sample format to use
     * @param numChannels Number of output channels to use
     * @returns TRUE if setting the output format succeeded, FALSE otherwise
     */
    setOutputFormatSimple(sampleRate: number, sampleFormat: GstAudio.AudioFormat, numChannels: number): boolean

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

    // Own virtual methods of GstBadAudio-1.0.GstBadAudio.NonstreamAudioDecoder

    decideAllocation(query: Gst.Query): boolean
    decode(buffer: Gst.Buffer, numSamples: number): boolean
    getCurrentSubsong(): number
    getMainTags(): Gst.TagList
    getNumLoops(): number
    getNumSubsongs(): number
    getSubsongDuration(subsong: number): Gst.ClockTime
    getSubsongTags(subsong: number): Gst.TagList
    getSupportedOutputModes(): number
    loadFromBuffer(sourceData: Gst.Buffer, initialSubsong: number, initialSubsongMode: NonstreamAudioSubsongMode, initialPosition: Gst.ClockTime, initialOutputMode: NonstreamAudioOutputMode, initialNumLoops: number): boolean
    loadFromCustom(initialSubsong: number, initialSubsongMode: NonstreamAudioSubsongMode, initialPosition: Gst.ClockTime, initialOutputMode: NonstreamAudioOutputMode, initialNumLoops: number): boolean
    negotiate(): boolean
    proposeAllocation(query: Gst.Query): boolean
    seek(newPosition: Gst.ClockTime): boolean

    // Overloads of seek

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
     * @returns %TRUE if the event was handled. Flushing seeks will trigger a preroll, which will emit %GST_MESSAGE_ASYNC_DONE.
     */
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
    setCurrentSubsong(subsong: number, initialPosition: Gst.ClockTime): boolean
    setNumLoops(numLoops: number): boolean
    setOutputMode(mode: NonstreamAudioOutputMode, currentPosition: Gst.ClockTime): boolean
    setSubsongMode(mode: NonstreamAudioSubsongMode, initialPosition: Gst.ClockTime): boolean
    tell(): Gst.ClockTime

    // Class property signals of GstBadAudio-1.0.GstBadAudio.NonstreamAudioDecoder

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
 * This base class is for decoders which do not operate on a streaming model.
 * That is: they load the encoded media at once, as part of an initialization,
 * and afterwards can decode samples (sometimes referred to as "rendering the
 * samples").
 * 
 * This sets it apart from GstAudioDecoder, which is a base class for
 * streaming audio decoders.
 * 
 * The base class is conceptually a mix between decoder and parser. This is
 * unavoidable, since virtually no format that isn't streaming based has a
 * clear distinction between parsing and decoding. As a result, this class
 * also handles seeking.
 * 
 * Non-streaming audio formats tend to have some characteristics unknown to
 * more "regular" bitstreams. These include subsongs and looping.
 * 
 * Subsongs are a set of songs-within-a-song. An analogy would be a multitrack
 * recording, where each track is its own song. The first subsong is typically
 * the "main" one. Subsongs were popular for video games to enable context-
 * aware music; for example, subsong `#0` would be the "main" song, `#1` would be
 * an alternate song playing when a fight started, `#2` would be heard during
 * conversations etc. The base class is designed to always have at least one
 * subsong. If the subclass doesn't provide any, the base class creates a
 * "pseudo" subsong, which is actually the whole song.
 * Downstream is informed about the subsong using a table of contents (TOC),
 * but only if there are at least 2 subsongs.
 * 
 * Looping refers to jumps within the song, typically backwards to the loop
 * start (although bi-directional looping is possible). The loop is defined
 * by a chronological start and end; once the playback position reaches the
 * loop end, it jumps back to the loop start.
 * Depending on the subclass, looping may not be possible at all, or it
 * may only be possible to enable/disable it (that is, either no looping, or
 * an infinite amount of loops), or it may allow for defining a finite number
 * of times the loop is repeated.
 * Looping can affect output in two ways. Either, the playback position is
 * reset to the start of the loop, similar to what happens after a seek event.
 * Or, it is not reset, so the pipeline sees playback steadily moving forwards,
 * the playback position monotonically increasing. However, seeking must
 * always happen within the confines of the defined subsong duration; for
 * example, if a subsong is 2 minutes long, steady playback is at 5 minutes
 * (because infinite looping is enabled), then seeking will still place the
 * position within the 2 minute period.
 * Loop count 0 means no looping. Loop count -1 means infinite looping.
 * Nonzero positive values indicate how often a loop shall occur.
 * 
 * If the initial subsong and loop count are set to values the subclass does
 * not support, the subclass has a chance to correct these values.
 * `get_property` then reports the corrected versions.
 * 
 * The base class operates as follows:
 * * Unloaded mode
 *   - Initial values are set. If a current subsong has already been
 *     defined (for example over the command line with gst-launch), then
 *     the subsong index is copied over to current_subsong .
 *     Same goes for the num-loops and output-mode properties.
 *     Media is NOT loaded yet.
 *   - Once the sinkpad is activated, the process continues. The sinkpad is
 *     activated in push mode, and the class accumulates the incoming media
 *     data in an adapter inside the sinkpad's chain function until either an
 *     EOS event is received from upstream, or the number of bytes reported
 *     by upstream is reached. Then it loads the media, and starts the decoder
 *     output task.
 *   - If upstream cannot respond to the size query (in bytes) of `load_from_buffer`
 *     fails, an error is reported, and the pipeline stops.
 *   - If there are no errors, `load_from_buffer` is called to load the media. The
 *     subclass must at least call gst_nonstream_audio_decoder_set_output_format()
 *     there, and is free to make use of the initial subsong, output mode, and
 *     position. If the actual output mode or position differs from the initial
 *     value,it must set the initial value to the actual one (for example, if
 *     the actual starting position is always 0, set *initial_position to 0).
 *     If loading is unsuccessful, an error is reported, and the pipeline
 *     stops. Otherwise, the base class calls `get_current_subsong` to retrieve
 *     the actual current subsong, `get_subsong_duration` to report the current
 *     subsong's duration in a duration event and message, and `get_subsong_tags`
 *     to send tags downstream in an event (these functions are optional; if
 *     set to NULL, the associated operation is skipped). Afterwards, the base
 *     class switches to loaded mode, and starts the decoder output task.
 * 
 * * Loaded mode</title>
 *   - Inside the decoder output task, the base class repeatedly calls `decode,`
 *     which returns a buffer with decoded, ready-to-play samples. If the
 *     subclass reached the end of playback, `decode` returns FALSE, otherwise
 *     TRUE.
 *   - Upon reaching a loop end, subclass either ignores that, or loops back
 *     to the beginning of the loop. In the latter case, if the output mode is set
 *     to LOOPING, the subclass must call gst_nonstream_audio_decoder_handle_loop()
 *     *after* the playback position moved to the start of the loop. In
 *     STEADY mode, the subclass must *not* call this function.
 *     Since many decoders only provide a callback for when the looping occurs,
 *     and that looping occurs inside the decoding operation itself, the following
 *     mechanism for subclass is suggested: set a flag inside such a callback.
 *     Then, in the next `decode` call, before doing the decoding, check this flag.
 *     If it is set, gst_nonstream_audio_decoder_handle_loop() is called, and the
 *     flag is cleared.
 *     (This function call is necessary in LOOPING mode because it updates the
 *     current segment and makes sure the next buffer that is sent downstream
 *     has its DISCONT flag set.)
 *   - When the current subsong is switched, `set_current_subsong` is called.
 *     If it fails, a warning is reported, and nothing else is done. Otherwise,
 *     it calls `get_subsong_duration` to get the new current subsongs's
 *     duration, `get_subsong_tags` to get its tags, reports a new duration
 *     (i.e. it sends a duration event downstream and generates a duration
 *     message), updates the current segment, and sends the subsong's tags in
 *     an event downstream. (If `set_current_subsong` has been set to NULL by
 *     the subclass, attempts to set a current subsong are ignored; likewise,
 *     if `get_subsong_duration` is NULL, no duration is reported, and if
 *     `get_subsong_tags` is NULL, no tags are sent downstream.)
 *   - When an attempt is made to switch the output mode, it is checked against
 *     the bitmask returned by `get_supported_output_modes`. If the proposed
 *     new output mode is supported, the current segment is updated
 *     (it is open-ended in STEADY mode, and covers the (sub)song length in
 *     LOOPING mode), and the subclass' `set_output_mode` function is called
 *     unless it is set to NULL. Subclasses should reset internal loop counters
 *     in this function.
 * 
 * The relationship between (sub)song duration, output mode, and number of loops
 * is defined this way (this is all done by the base class automatically):
 * 
 * * Segments have their duration and stop values set to GST_CLOCK_TIME_NONE in
 *   STEADY mode, and to the duration of the (sub)song in LOOPING mode.
 * 
 * * The duration that is returned to a DURATION query is always the duration
 *   of the (sub)song, regardless of number of loops or output mode. The same
 *   goes for DURATION messages and tags.
 * 
 * * If the number of loops is >0 or -1, durations of TOC entries are set to
 *   the duration of the respective subsong in LOOPING mode and to G_MAXINT64 in
 *   STEADY mode. If the number of loops is 0, entry durations are set to the
 *   subsong duration regardless of the output mode.
 * @class 
 */
class NonstreamAudioDecoder extends Gst.Element {

    // Own properties of GstBadAudio-1.0.GstBadAudio.NonstreamAudioDecoder

    static name: string

    // Constructors of GstBadAudio-1.0.GstBadAudio.NonstreamAudioDecoder

    constructor(config?: NonstreamAudioDecoder.ConstructorProperties) 
    _init(config?: NonstreamAudioDecoder.ConstructorProperties): void
}

module PlanarAudioAdapter {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface PlanarAudioAdapter {

    // Own properties of GstBadAudio-1.0.GstBadAudio.PlanarAudioAdapter

    __gtype__: number

    // Owm methods of GstBadAudio-1.0.GstBadAudio.PlanarAudioAdapter

    /**
     * Gets the maximum amount of samples available, that is it returns the maximum
     * value that can be supplied to gst_planar_audio_adapter_get_buffer() without
     * that function returning %NULL.
     * @returns number of samples available in @adapter
     */
    available(): number
    /**
     * Removes all buffers from `adapter`.
     */
    clear(): void
    /**
     * Sets up the `adapter` to handle audio data of the specified audio format.
     * Note that this will internally clear the adapter and re-initialize it.
     * @param info a #GstAudioInfo describing the format of the audio data
     */
    configure(info: GstAudio.AudioInfo): void
    distanceFromDiscont(): number
    /**
     * Get the DTS that was on the last buffer with the GST_BUFFER_FLAG_DISCONT
     * flag, or GST_CLOCK_TIME_NONE.
     * @returns The DTS at the last discont or GST_CLOCK_TIME_NONE.
     */
    dtsAtDiscont(): Gst.ClockTime
    /**
     * Flushes the first `to_flush` samples in the `adapter`. The caller must ensure
     * that at least this many samples are available.
     * @param toFlush the number of samples to flush
     */
    flush(toFlush: number): void
    /**
     * Returns a #GstBuffer containing the first `nsamples` of the `adapter,` but
     * does not flush them from the adapter.
     * Use gst_planar_audio_adapter_take_buffer() for flushing at the same time.
     * 
     * The map `flags` can be used to give an optimization hint to this function.
     * When the requested buffer is meant to be mapped only for reading, it might
     * be possible to avoid copying memory in some cases.
     * 
     * Caller owns a reference to the returned buffer. gst_buffer_unref() after
     * usage.
     * 
     * Free-function: gst_buffer_unref
     * @param nsamples the number of samples to get
     * @param flags hint the intended use of the returned buffer
     * @returns a #GstBuffer containing the first     @nsamples of the adapter, or %NULL if @nsamples samples are not     available. gst_buffer_unref() when no longer needed.
     */
    getBuffer(nsamples: number, flags: Gst.MapFlags): Gst.Buffer | null
    /**
     * Get the offset that was on the last buffer with the GST_BUFFER_FLAG_DISCONT
     * flag, or GST_BUFFER_OFFSET_NONE.
     * @returns The offset at the last discont or GST_BUFFER_OFFSET_NONE.
     */
    offsetAtDiscont(): number
    /**
     * Get the dts that was before the current sample in the adapter. When
     * `distance` is given, the amount of bytes between the dts and the current
     * position is returned.
     * 
     * The dts is reset to GST_CLOCK_TIME_NONE and the distance is set to 0 when
     * the adapter is first created or when it is cleared. This also means that
     * before the first sample with a dts is removed from the adapter, the dts
     * and distance returned are GST_CLOCK_TIME_NONE and 0 respectively.
     * @returns The previously seen dts.
     */
    prevDts(): [ /* returnType */ Gst.ClockTime, /* distance */ number ]
    /**
     * Get the offset that was before the current sample in the adapter. When
     * `distance` is given, the amount of samples between the offset and the current
     * position is returned.
     * 
     * The offset is reset to GST_BUFFER_OFFSET_NONE and the distance is set to 0
     * when the adapter is first created or when it is cleared. This also means that
     * before the first sample with an offset is removed from the adapter, the
     * offset and distance returned are GST_BUFFER_OFFSET_NONE and 0 respectively.
     * @returns The previous seen offset.
     */
    prevOffset(): [ /* returnType */ number, /* distance */ number ]
    /**
     * Get the pts that was before the current sample in the adapter. When
     * `distance` is given, the amount of samples between the pts and the current
     * position is returned.
     * 
     * The pts is reset to GST_CLOCK_TIME_NONE and the distance is set to 0 when
     * the adapter is first created or when it is cleared. This also means that before
     * the first sample with a pts is removed from the adapter, the pts
     * and distance returned are GST_CLOCK_TIME_NONE and 0 respectively.
     * @returns The previously seen pts.
     */
    prevPts(): [ /* returnType */ Gst.ClockTime, /* distance */ number ]
    /**
     * Get the PTS that was on the last buffer with the GST_BUFFER_FLAG_DISCONT
     * flag, or GST_CLOCK_TIME_NONE.
     * @returns The PTS at the last discont or GST_CLOCK_TIME_NONE.
     */
    ptsAtDiscont(): Gst.ClockTime
    /**
     * Adds the data from `buf` to the data stored inside `adapter` and takes
     * ownership of the buffer.
     * @param buf a #GstBuffer to queue in the adapter
     */
    push(buf: Gst.Buffer): void
    /**
     * Returns a #GstBuffer containing the first `nsamples` bytes of the
     * `adapter`. The returned bytes will be flushed from the adapter.
     * 
     * See gst_planar_audio_adapter_get_buffer() for more details.
     * 
     * Caller owns a reference to the returned buffer. gst_buffer_unref() after
     * usage.
     * 
     * Free-function: gst_buffer_unref
     * @param nsamples the number of samples to take
     * @param flags hint the intended use of the returned buffer
     * @returns a #GstBuffer containing the first     @nsamples of the adapter, or %NULL if @nsamples samples are not     available. gst_buffer_unref() when no longer needed.
     */
    takeBuffer(nsamples: number, flags: Gst.MapFlags): Gst.Buffer | null

    // Class property signals of GstBadAudio-1.0.GstBadAudio.PlanarAudioAdapter

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
 * This class is similar to GstAdapter, but it is made to work with
 * non-interleaved (planar) audio buffers. Before using, an audio format
 * must be configured with gst_planar_audio_adapter_configure()
 * @class 
 */
class PlanarAudioAdapter extends GObject.Object {

    // Own properties of GstBadAudio-1.0.GstBadAudio.PlanarAudioAdapter

    static name: string

    // Constructors of GstBadAudio-1.0.GstBadAudio.PlanarAudioAdapter

    constructor(config?: PlanarAudioAdapter.ConstructorProperties) 
    /**
     * Creates a new #GstPlanarAudioAdapter. Free with g_object_unref().
     * @constructor 
     * @returns a new #GstPlanarAudioAdapter
     */
    constructor() 
    /**
     * Creates a new #GstPlanarAudioAdapter. Free with g_object_unref().
     * @constructor 
     * @returns a new #GstPlanarAudioAdapter
     */
    static new(): PlanarAudioAdapter
    _init(config?: PlanarAudioAdapter.ConstructorProperties): void
}

interface NonstreamAudioDecoderClass {

    // Own fields of GstBadAudio-1.0.GstBadAudio.NonstreamAudioDecoderClass

    /**
     * The parent class structure
     * @field 
     */
    elementClass: Gst.ElementClass
    loadsFromSinkpad: boolean
    seek: (dec: NonstreamAudioDecoder, newPosition: Gst.ClockTime) => boolean
    tell: (dec: NonstreamAudioDecoder) => Gst.ClockTime
    loadFromBuffer: (dec: NonstreamAudioDecoder, sourceData: Gst.Buffer, initialSubsong: number, initialSubsongMode: NonstreamAudioSubsongMode, initialPosition: Gst.ClockTime, initialOutputMode: NonstreamAudioOutputMode, initialNumLoops: number) => boolean
    loadFromCustom: (dec: NonstreamAudioDecoder, initialSubsong: number, initialSubsongMode: NonstreamAudioSubsongMode, initialPosition: Gst.ClockTime, initialOutputMode: NonstreamAudioOutputMode, initialNumLoops: number) => boolean
    getMainTags: (dec: NonstreamAudioDecoder) => Gst.TagList
    setCurrentSubsong: (dec: NonstreamAudioDecoder, subsong: number, initialPosition: Gst.ClockTime) => boolean
    getCurrentSubsong: (dec: NonstreamAudioDecoder) => number
    getNumSubsongs: (dec: NonstreamAudioDecoder) => number
    getSubsongDuration: (dec: NonstreamAudioDecoder, subsong: number) => Gst.ClockTime
    getSubsongTags: (dec: NonstreamAudioDecoder, subsong: number) => Gst.TagList
    setSubsongMode: (dec: NonstreamAudioDecoder, mode: NonstreamAudioSubsongMode, initialPosition: Gst.ClockTime) => boolean
    setNumLoops: (dec: NonstreamAudioDecoder, numLoops: number) => boolean
    getNumLoops: (dec: NonstreamAudioDecoder) => number
    getSupportedOutputModes: (dec: NonstreamAudioDecoder) => number
    setOutputMode: (dec: NonstreamAudioDecoder, mode: NonstreamAudioOutputMode, currentPosition: Gst.ClockTime) => boolean
    decode: (dec: NonstreamAudioDecoder, buffer: Gst.Buffer, numSamples: number) => boolean
    negotiate: (dec: NonstreamAudioDecoder) => boolean
    decideAllocation: (dec: NonstreamAudioDecoder, query: Gst.Query) => boolean
    proposeAllocation: (dec: NonstreamAudioDecoder, query: Gst.Query) => boolean
}

/**
 * Subclasses can override any of the available optional virtual methods or not, as
 * needed. At minimum, `load_from_buffer` (or `load_from_custom)`, `get_supported_output_modes,`
 * and `decode` need to be overridden.
 * 
 * All functions are called with a locked decoder mutex.
 * 
 * > If GST_ELEMENT_ERROR, GST_ELEMENT_WARNING, or GST_ELEMENT_INFO are called from
 * > inside one of these functions, it is strongly recommended to unlock the decoder mutex
 * > before and re-lock it after these macros to prevent potential deadlocks in case the
 * > application does something with the element when it receives an ERROR/WARNING/INFO
 * > message. Same goes for gst_element_post_message() calls and non-serialized events.
 * 
 * By default, this class works by reading media data from the sinkpad, and then commencing
 * playback. Some decoders cannot be given data from a memory block, so the usual way of
 * reading all upstream data and passing it to `load_from_buffer` doesn't work then. In this case,
 * set the value of loads_from_sinkpad to FALSE. This changes the way this class operates;
 * it does not require a sinkpad to exist anymore, and will call `load_from_custom` instead.
 * One example of a decoder where this makes sense is UADE (Unix Amiga Delitracker Emulator).
 * For some formats (such as TFMX), it needs to do the file loading by itself.
 * Since most decoders can read input data from a memory block, the default value of
 * loads_from_sinkpad is TRUE.
 * @record 
 */
abstract class NonstreamAudioDecoderClass {

    // Own properties of GstBadAudio-1.0.GstBadAudio.NonstreamAudioDecoderClass

    static name: string
}

interface PlanarAudioAdapterClass {
}

abstract class PlanarAudioAdapterClass {

    // Own properties of GstBadAudio-1.0.GstBadAudio.PlanarAudioAdapterClass

    static name: string
}

}

export default GstBadAudio;