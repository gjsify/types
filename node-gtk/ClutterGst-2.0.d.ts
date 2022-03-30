/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * ClutterGst-2.0
 */

import type GstVideo from './GstVideo-1.0';
import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type GstAudio from './GstAudio-1.0';
import type Clutter from './Clutter-1.0';
import type cairo from './cairo-1.0';
import type Json from './Json-1.0';
import type Gio from './Gio-2.0';
import type GL from './GL-1.0';
import type CoglPango from './CoglPango-1.0';
import type PangoCairo from './PangoCairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type Cogl from './Cogl-1.0';
import type Atk from './Atk-1.0';

export namespace ClutterGst {

/**
 * Different buffering policies clutter-gst supports
 */
enum BufferingMode {
    /**
     * In-memory buffering
     */
    STREAM,
    /**
     * On-disk buffering
     */
    DOWNLOAD,
}
/**
 * Flags that can be given to clutter_gst_video_texture_set_seek_flags().
 */
enum SeekFlags {
    /**
     * Fast seeks (key frame boundaries, default)
     */
    NONE,
    /**
     * Accurate seeks (potentially slower)
     */
    ACCURATE,
}
/**
 * ClutterGst major version (e.g. "1", if %CLUTTER_GST_VERSION is "1.2.3")
 */
const MAJOR_VERSION: number
/**
 * ClutterGst micro version (e.g. "3", if %CLUTTER_GST_VERSION is "1.2.3")
 */
const MICRO_VERSION: number
/**
 * ClutterGst minor version (e.g. "2", if %CLUTTER_GST_VERSION is "1.2.3")
 */
const MINOR_VERSION: number
/**
 * ClutterGst full version, encoded as an hexadecimal value.
 */
const VERSION_HEX: number
/**
 * ClutterGst full version, encoded as a string.
 */
const VERSION_S: string
function init(argv?: string[] | null): [ /* returnType */ Clutter.InitError, /* argv */ string[] | null ]
function initWithArgs(argv: string[] | null, parameterString: string, entries: GLib.OptionEntry, translationDomain: string): [ /* returnType */ Clutter.InitError, /* argv */ string[] | null ]
function playerClassInit(objectClass: GObject.ObjectClass): void
class Player {
    /* Properties of ClutterGst-2.0.ClutterGst.Player */
    /**
     * Index of the current audio stream.
     */
    audioStream: number
    /**
     * List of audio streams available on the current media.
     */
    readonly audioStreams: object
    /**
     * Whether the #ClutterGstPlayer is in idle mode.
     */
    readonly idle: boolean
    /**
     * Whether or not the stream is being seeked.
     */
    readonly inSeek: boolean
    /**
     * Flags to use when seeking.
     */
    seekFlags: SeekFlags
    subtitleTrack: number
    readonly subtitleTracks: object
    /**
     * The User Agent used by #ClutterGstPlayer with network protocols.
     */
    userAgent: string
    /* Properties of Clutter-1.0.Clutter.Media */
    /**
     * The volume of the audio, as a normalized value between
     * 0.0 and 1.0.
     */
    audioVolume: number
    /**
     * The fill level of the buffer for the current stream,
     * as a value between 0.0 and 1.0.
     */
    readonly bufferFill: number
    /**
     * Whether the current stream is seekable.
     */
    readonly canSeek: boolean
    /**
     * The duration of the current stream, in seconds
     */
    readonly duration: number
    /**
     * Whether the #ClutterMedia actor is playing.
     */
    playing: boolean
    /**
     * The current progress of the playback, as a normalized
     * value between 0.0 and 1.0.
     */
    progress: number
    /**
     * The font used to display subtitles. The font description has to
     * follow the same grammar as the one recognized by
     * pango_font_description_from_string().
     */
    subtitleFontName: string
    /**
     * The location of a subtitle file, expressed as a valid URI.
     */
    subtitleUri: string
    /**
     * The location of a media file, expressed as a valid URI.
     */
    uri: string
    /* Methods of ClutterGst-2.0.ClutterGst.Player */
    /**
     * Frees the resources created by clutter_gst_player_init(). After
     * clutter_gst_player_deinit() has been called, no other player method can be
     * called on the instance.
     */
    deinit(): void
    /**
     * Get the current audio stream. The number returned in the index of the
     * audio stream playing in the list returned by
     * clutter_gst_player_get_audio_streams().
     */
    getAudioStream(): number
    /**
     * Get the list of audio streams of the current media.
     */
    getAudioStreams(): string[]
    getBufferingMode(): BufferingMode
    /**
     * Get the idle state of the pipeline.
     */
    getIdle(): boolean
    /**
     * Whether the player is seeking.
     */
    getInSeek(): boolean
    /**
     * Retrieves the #GstPipeline used by the `player,` for direct use with
     * GStreamer API.
     */
    getPipeline(): Gst.Element
    /**
     * Get the current value of the seek-flags property.
     */
    getSeekFlags(): SeekFlags
    /**
     * Get the current subtitles track. The number returned is the index of the
     * subtiles track in the list returned by
     * clutter_gst_player_get_subtitle_tracks().
     */
    getSubtitleTrack(): number
    /**
     * Get the list of subtitles tracks of the current media.
     */
    getSubtitleTracks(): string[]
    /**
     * Retrieves the user agent used when streaming.
     */
    getUserAgent(): string
    /**
     * Initialize a #ClutterGstPlayer instance. You should call this
     * function at the beginning of the init method of the class
     * implementing #ClutterGstPlayer.
     * 
     * When you're finished with the ClutterGstPlayer mixin features (usually in
     * the dispose or finalize vfuncs), call clutter_gst_player_deinit() to
     * desallocate the resources created by clutter_gst_player_init().
     */
    init(): boolean
    /**
     * Set the audio stream to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_player_get_audio_streams().
     * @param index the index of the audio stream
     */
    setAudioStream(index: number): void
    setBufferingMode(mode: BufferingMode): void
    /**
     * Seeking can be done with several trade-offs. Clutter-gst defaults
     * to %CLUTTER_GST_SEEK_FLAG_NONE.
     * @param flags a combination of #ClutterGstSeekFlags
     */
    setSeekFlags(flags: SeekFlags): void
    /**
     * Set the subtitles track to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_player_get_subtitle_tracks().
     * 
     * If `index_` is -1, the subtitles are turned off.
     * @param index the index of the subtitles track
     */
    setSubtitleTrack(index: number): void
    /**
     * Sets the user agent to use when streaming.
     * 
     * When streaming content, you might want to set a custom user agent, eg. to
     * promote your software, make it appear in statistics or because the server
     * requires a special user agent you want to impersonate.
     * @param userAgent the user agent
     */
    setUserAgent(userAgent: string): void
    /* Methods of Clutter-1.0.Clutter.Media */
    /**
     * Retrieves the playback volume of `media`.
     */
    getAudioVolume(): number
    /**
     * Retrieves the amount of the stream that is buffered.
     */
    getBufferFill(): number
    /**
     * Retrieves whether `media` is seekable or not.
     */
    getCanSeek(): boolean
    /**
     * Retrieves the duration of the media stream that `media` represents.
     */
    getDuration(): number
    /**
     * Retrieves the playing status of `media`.
     */
    getPlaying(): boolean
    /**
     * Retrieves the playback progress of `media`.
     */
    getProgress(): number
    /**
     * Retrieves the font name currently used.
     */
    getSubtitleFontName(): string
    /**
     * Retrieves the URI of the subtitle file in use.
     */
    getSubtitleUri(): string
    /**
     * Retrieves the URI from `media`.
     */
    getUri(): string
    /**
     * Sets the playback volume of `media` to `volume`.
     * @param volume the volume as a double between 0.0 and 1.0
     */
    setAudioVolume(volume: number): void
    /**
     * Sets the source of `media` using a file path.
     * @param filename A filename
     */
    setFilename(filename: string): void
    /**
     * Starts or stops playing of `media`.
     *  
     * The implementation might be asynchronous, so the way to know whether
     * the actual playing state of the `media` is to use the #GObject::notify
     * signal on the #ClutterMedia:playing property and then retrieve the
     * current state with clutter_media_get_playing(). ClutterGstVideoTexture
     * in clutter-gst is an example of such an asynchronous implementation.
     * @param playing %TRUE to start playing
     */
    setPlaying(playing: boolean): void
    /**
     * Sets the playback progress of `media`. The `progress` is
     * a normalized value between 0.0 (begin) and 1.0 (end).
     * @param progress the progress of the playback, between 0.0 and 1.0
     */
    setProgress(progress: number): void
    /**
     * Sets the font used by the subtitle renderer. The `font_name` string must be
     * either %NULL, which means that the default font name of the underlying
     * implementation will be used; or must follow the grammar recognized by
     * pango_font_description_from_string() like:
     * 
     * |[
     *   clutter_media_set_subtitle_font_name (media, "Sans 24pt");
     * ```
     * 
     * @param fontName a font name, or %NULL to set the default font name
     */
    setSubtitleFontName(fontName: string): void
    /**
     * Sets the location of a subtitle file to display while playing `media`.
     * @param uri the URI of a subtitle file
     */
    setSubtitleUri(uri: string): void
    /**
     * Sets the URI of `media` to `uri`.
     * @param uri the URI of the media stream
     */
    setUri(uri: string): void
    /* Signals of ClutterGst-2.0.ClutterGst.Player */
    /**
     * The ::download-buffering signal is emitted each time their an
     * update about the buffering of the current media.
     * @param start start position of the buffering
     * @param stop start position of the buffering
     */
    connect(sigName: "download-buffering", callback: ((start: number, stop: number) => void)): number
    on(sigName: "download-buffering", callback: (start: number, stop: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "download-buffering", callback: (start: number, stop: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "download-buffering", callback: (start: number, stop: number) => void): NodeJS.EventEmitter
    emit(sigName: "download-buffering", start: number, stop: number): void
    /* Signals of Clutter-1.0.Clutter.Media */
    /**
     * The ::eos signal is emitted each time the media stream ends.
     */
    connect(sigName: "eos", callback: (() => void)): number
    on(sigName: "eos", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "eos", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "eos", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "eos"): void
    /**
     * The ::error signal is emitted each time an error occurred.
     * @param error the #GError
     */
    connect(sigName: "error", callback: ((error: GLib.Error) => void)): number
    on(sigName: "error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: (error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "error", error: GLib.Error): void
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Adds the #ClutterGstPlayer properties to a class and surchages the
     * set/get_property of #GObjectClass. You should call this
     * function at the end of the class_init method of the class
     * implementing #ClutterGstPlayer.
     * @param objectClass a #GObjectClass
     */
    static classInit(objectClass: GObject.ObjectClass): void
}
interface VideoSink_ConstructProps extends GstBase.BaseSink_ConstructProps {
    /* Constructor properties of ClutterGst-2.0.ClutterGst.VideoSink */
    /**
     * This is the texture the video is decoded into. It can be any
     * #ClutterTexture, however Cluter-Gst has a handy subclass,
     * #ClutterGstVideoTexture, that implements the #ClutterMedia
     * interface.
     */
    texture?: Clutter.Texture
    /**
     * Clutter-Gst installs a #GSource to signal that a new frame is ready to
     * the Clutter thread. This property allows to tweak the priority of the
     * source (Lower value is higher priority).
     * 
     * Since 1.0
     */
    updatePriority?: number
}
class VideoSink {
    /* Properties of ClutterGst-2.0.ClutterGst.VideoSink */
    /**
     * This is the texture the video is decoded into. It can be any
     * #ClutterTexture, however Cluter-Gst has a handy subclass,
     * #ClutterGstVideoTexture, that implements the #ClutterMedia
     * interface.
     */
    texture: Clutter.Texture
    /**
     * Clutter-Gst installs a #GSource to signal that a new frame is ready to
     * the Clutter thread. This property allows to tweak the priority of the
     * source (Lower value is higher priority).
     * 
     * Since 1.0
     */
    updatePriority: number
    /* Properties of GstBase-1.0.GstBase.BaseSink */
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
    /* Fields of GstBase-1.0.GstBase.BaseSink */
    element: Gst.Element
    sinkpad: Gst.Pad
    padMode: Gst.PadMode
    offset: number
    canActivatePull: boolean
    canActivatePush: boolean
    prerollLock: GLib.Mutex
    prerollCond: GLib.Cond
    eos: boolean
    needPreroll: boolean
    havePreroll: boolean
    playingAsync: boolean
    haveNewsegment: boolean
    segment: Gst.Segment
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
    /* Methods of GstBase-1.0.GstBase.BaseSink */
    /**
     * If the `sink` spawns its own thread for pulling buffers from upstream it
     * should call this method after it has pulled a buffer. If the element needed
     * to preroll, this function will perform the preroll and will then block
     * until the element state is changed.
     * 
     * This function should be called with the PREROLL_LOCK held.
     * @param obj the mini object that caused the preroll
     */
    doPreroll(obj: Gst.MiniObject): Gst.FlowReturn
    /**
     * Get the number of bytes that the sink will pull when it is operating in pull
     * mode.
     */
    getBlocksize(): number
    /**
     * Checks if `sink` is currently configured to drop buffers which are outside
     * the current segment
     */
    getDropOutOfSegment(): boolean
    /**
     * Get the last sample that arrived in the sink and was used for preroll or for
     * rendering. This property can be used to generate thumbnails.
     * 
     * The #GstCaps on the sample can be used to determine the type of the buffer.
     * 
     * Free-function: gst_sample_unref
     */
    getLastSample(): Gst.Sample | null
    /**
     * Get the currently configured latency.
     */
    getLatency(): Gst.ClockTime
    /**
     * Get the maximum amount of bits per second that the sink will render.
     */
    getMaxBitrate(): number
    /**
     * Gets the max lateness value. See gst_base_sink_set_max_lateness() for
     * more details.
     */
    getMaxLateness(): number
    /**
     * Get the processing deadline of `sink`. see
     * gst_base_sink_set_processing_deadline() for more information about
     * the processing deadline.
     */
    getProcessingDeadline(): Gst.ClockTime
    /**
     * Get the render delay of `sink`. see gst_base_sink_set_render_delay() for more
     * information about the render delay.
     */
    getRenderDelay(): Gst.ClockTime
    /**
     * Return various #GstBaseSink statistics. This function returns a #GstStructure
     * with name `application/x-gst-base-sink-stats` with the following fields:
     * 
     * - "average-rate" G_TYPE_DOUBLE   average frame rate
     * - "dropped" G_TYPE_UINT64   Number of dropped frames
     * - "rendered" G_TYPE_UINT64   Number of rendered frames
     */
    getStats(): Gst.Structure
    /**
     * Checks if `sink` is currently configured to synchronize against the
     * clock.
     */
    getSync(): boolean
    /**
     * Get the time that will be inserted between frames to control the
     * maximum buffers per second.
     */
    getThrottleTime(): number
    /**
     * Get the synchronisation offset of `sink`.
     */
    getTsOffset(): Gst.ClockTimeDiff
    /**
     * Checks if `sink` is currently configured to perform asynchronous state
     * changes to PAUSED.
     */
    isAsyncEnabled(): boolean
    /**
     * Checks if `sink` is currently configured to store the last received sample in
     * the last-sample property.
     */
    isLastSampleEnabled(): boolean
    /**
     * Checks if `sink` is currently configured to send Quality-of-Service events
     * upstream.
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
     */
    queryLatency(): [ /* returnType */ boolean, /* live */ boolean | null, /* upstreamLive */ boolean | null, /* minLatency */ Gst.ClockTime | null, /* maxLatency */ Gst.ClockTime | null ]
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
     */
    wait(time: Gst.ClockTime): [ /* returnType */ Gst.FlowReturn, /* jitter */ Gst.ClockTimeDiff | null ]
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
     */
    waitClock(time: Gst.ClockTime): [ /* returnType */ Gst.ClockReturn, /* jitter */ Gst.ClockTimeDiff | null ]
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
     */
    waitPreroll(): Gst.FlowReturn
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
    /* Methods of GstVideo-1.0.GstVideo.Navigation */
    /**
     * Sends the indicated command to the navigation interface.
     * @param command The command to issue
     */
    sendCommand(command: GstVideo.NavigationCommand): void
    sendEvent(structure: Gst.Structure): void
    /**
     * Sends an event to the navigation interface.
     * @param event The event to send
     */
    sendEventSimple(event: Gst.Event): void
    sendKeyEvent(event: string, key: string): void
    /**
     * Sends a mouse event to the navigation interface. Mouse event coordinates
     * are sent relative to the display space of the related output area. This is
     * usually the size in pixels of the window associated with the element
     * implementing the #GstNavigation interface.
     * @param event The type of mouse event, as a text string. Recognised values are "mouse-button-press", "mouse-button-release" and "mouse-move".
     * @param button The button number of the button being pressed or released. Pass 0 for mouse-move events.
     * @param x The x coordinate of the mouse event.
     * @param y The y coordinate of the mouse event.
     */
    sendMouseEvent(event: string, button: number, x: number, y: number): void
    /**
     * Sends a mouse scroll event to the navigation interface. Mouse event coordinates
     * are sent relative to the display space of the related output area. This is
     * usually the size in pixels of the window associated with the element
     * implementing the #GstNavigation interface.
     * @param x The x coordinate of the mouse event.
     * @param y The y coordinate of the mouse event.
     * @param deltaX The delta_x coordinate of the mouse event.
     * @param deltaY The delta_y coordinate of the mouse event.
     */
    sendMouseScrollEvent(x: number, y: number, deltaX: number, deltaY: number): void
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
    connect(sigName: "notify::texture", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::texture", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::texture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::texture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::texture", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::update-priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::update-priority", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::update-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::update-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::update-priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::async", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::async", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::blocksize", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::blocksize", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::blocksize", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::enable-last-sample", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-last-sample", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::enable-last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-sample", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-sample", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-sample", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-bitrate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-bitrate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-bitrate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-lateness", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-lateness", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-lateness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::processing-deadline", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-deadline", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::processing-deadline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::render-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::render-delay", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::render-delay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stats", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sync", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sync", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::throttle-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttle-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::throttle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::throttle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::throttle-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ts-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ts-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ts-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoSink_ConstructProps)
    _init (config?: VideoSink_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(texture: Clutter.Texture): VideoSink
    /**
     * Try to retrieve x and y coordinates of a #GstNavigation event.
     * @param event The #GstEvent to inspect.
     */
    static eventGetCoordinates(event: Gst.Event): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null ]
    /**
     * Inspect a #GstEvent and return the #GstNavigationEventType of the event, or
     * #GST_NAVIGATION_EVENT_INVALID if the event is not a #GstNavigation event.
     * @param event A #GstEvent to inspect.
     */
    static eventGetType(event: Gst.Event): GstVideo.NavigationEventType
    /**
     * Create a new navigation event given navigation command..
     * @param command The navigation command to use.
     */
    static eventNewCommand(command: GstVideo.NavigationCommand): Gst.Event
    /**
     * Create a new navigation event for the given key press.
     * @param key A string identifying the key press.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     */
    static eventNewKeyPress(key: string, state: GstVideo.NavigationModifierType): Gst.Event
    /**
     * Create a new navigation event for the given key release.
     * @param key A string identifying the released key.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     */
    static eventNewKeyRelease(key: string, state: GstVideo.NavigationModifierType): Gst.Event
    /**
     * Create a new navigation event for the given key mouse button press.
     * @param button The number of the pressed mouse button.
     * @param x The x coordinate of the mouse cursor.
     * @param y The y coordinate of the mouse cursor.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     */
    static eventNewMouseButtonPress(button: number, x: number, y: number, state: GstVideo.NavigationModifierType): Gst.Event
    /**
     * Create a new navigation event for the given key mouse button release.
     * @param button The number of the released mouse button.
     * @param x The x coordinate of the mouse cursor.
     * @param y The y coordinate of the mouse cursor.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     */
    static eventNewMouseButtonRelease(button: number, x: number, y: number, state: GstVideo.NavigationModifierType): Gst.Event
    /**
     * Create a new navigation event for the new mouse location.
     * @param x The x coordinate of the mouse cursor.
     * @param y The y coordinate of the mouse cursor.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     */
    static eventNewMouseMove(x: number, y: number, state: GstVideo.NavigationModifierType): Gst.Event
    /**
     * Create a new navigation event for the mouse scroll.
     * @param x The x coordinate of the mouse cursor.
     * @param y The y coordinate of the mouse cursor.
     * @param deltaX The x component of the scroll movement.
     * @param deltaY The y component of the scroll movement.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     */
    static eventNewMouseScroll(x: number, y: number, deltaX: number, deltaY: number, state: GstVideo.NavigationModifierType): Gst.Event
    /**
     * Create a new navigation event signalling that all currently active touch
     * points are cancelled and should be discarded. For example, under Wayland
     * this event might be sent when a swipe passes the threshold to be recognized
     * as a gesture by the compositor.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     */
    static eventNewTouchCancel(state: GstVideo.NavigationModifierType): Gst.Event
    /**
     * Create a new navigation event for an added touch point.
     * @param identifier A number uniquely identifying this touch point. It must stay    unique to this touch point at least until an up event is sent for    the same identifier, or all touch points are cancelled.
     * @param x The x coordinate of the new touch point.
     * @param y The y coordinate of the new touch point.
     * @param pressure Pressure data of the touch point, from 0.0 to 1.0, or NaN if no    data is available.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     */
    static eventNewTouchDown(identifier: number, x: number, y: number, pressure: number, state: GstVideo.NavigationModifierType): Gst.Event
    /**
     * Create a new navigation event signalling the end of a touch frame. Touch
     * frames signal that all previous down, motion and up events not followed by
     * another touch frame event already should be considered simultaneous.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     */
    static eventNewTouchFrame(state: GstVideo.NavigationModifierType): Gst.Event
    /**
     * Create a new navigation event for a moved touch point.
     * @param identifier A number uniquely identifying this touch point. It must    correlate to exactly one previous touch_start event.
     * @param x The x coordinate of the touch point.
     * @param y The y coordinate of the touch point.
     * @param pressure Pressure data of the touch point, from 0.0 to 1.0, or NaN if no    data is available.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     */
    static eventNewTouchMotion(identifier: number, x: number, y: number, pressure: number, state: GstVideo.NavigationModifierType): Gst.Event
    /**
     * Create a new navigation event for a removed touch point.
     * @param identifier A number uniquely identifying this touch point. It must    correlate to exactly one previous down event, but can be reused    after sending this event.
     * @param x The x coordinate of the touch point.
     * @param y The y coordinate of the touch point.
     * @param state a bit-mask representing the state of the modifier keys (e.g. Control, Shift and Alt).
     */
    static eventNewTouchUp(identifier: number, x: number, y: number, state: GstVideo.NavigationModifierType): Gst.Event
    /**
     * Inspect a #GstNavigation command event and retrieve the enum value of the
     * associated command.
     * @param event A #GstEvent to inspect.
     */
    static eventParseCommand(event: Gst.Event): [ /* returnType */ boolean, /* command */ GstVideo.NavigationCommand | null ]
    /**
     * Note: Modifier keys (as defined in #GstNavigationModifierType)
     * [press](GST_NAVIGATION_EVENT_KEY_PRESS) and
     * [release](GST_NAVIGATION_KEY_PRESS) events are generated even if those states are
     * present on all other related events
     * @param event A #GstEvent to inspect.
     */
    static eventParseKeyEvent(event: Gst.Event): [ /* returnType */ boolean, /* key */ string | null ]
    /**
     * Retrieve the details of either a #GstNavigation mouse button press event or
     * a mouse button release event. Determine which type the event is using
     * gst_navigation_event_get_type() to retrieve the #GstNavigationEventType.
     * @param event A #GstEvent to inspect.
     */
    static eventParseMouseButtonEvent(event: Gst.Event): [ /* returnType */ boolean, /* button */ number | null, /* x */ number | null, /* y */ number | null ]
    /**
     * Inspect a #GstNavigation mouse movement event and extract the coordinates
     * of the event.
     * @param event A #GstEvent to inspect.
     */
    static eventParseMouseMoveEvent(event: Gst.Event): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null ]
    /**
     * Inspect a #GstNavigation mouse scroll event and extract the coordinates
     * of the event.
     * @param event A #GstEvent to inspect.
     */
    static eventParseMouseScrollEvent(event: Gst.Event): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* deltaX */ number | null, /* deltaY */ number | null ]
    static eventParseState(event: Gst.Event, state: GstVideo.NavigationModifierType): boolean
    /**
     * Retrieve the details of a #GstNavigation touch-down or touch-motion event.
     * Determine which type the event is using gst_navigation_event_get_type()
     * to retrieve the #GstNavigationEventType.
     * @param event A #GstEvent to inspect.
     */
    static eventParseTouchEvent(event: Gst.Event): [ /* returnType */ boolean, /* identifier */ number | null, /* x */ number | null, /* y */ number | null, /* pressure */ number | null ]
    /**
     * Retrieve the details of a #GstNavigation touch-up event.
     * @param event A #GstEvent to inspect.
     */
    static eventParseTouchUpEvent(event: Gst.Event): [ /* returnType */ boolean, /* identifier */ number | null, /* x */ number | null, /* y */ number | null ]
    /**
     * Try to set x and y coordinates on a #GstNavigation event. The event must
     * be writable.
     * @param event The #GstEvent to modify.
     * @param x The x coordinate to set.
     * @param y The y coordinate to set.
     */
    static eventSetCoordinates(event: Gst.Event, x: number, y: number): boolean
    /**
     * Check a bus message to see if it is a #GstNavigation event, and return
     * the #GstNavigationMessageType identifying the type of the message if so.
     * @param message A #GstMessage to inspect.
     */
    static messageGetType(message: Gst.Message): GstVideo.NavigationMessageType
    /**
     * Creates a new #GstNavigation message with type
     * #GST_NAVIGATION_MESSAGE_ANGLES_CHANGED for notifying an application
     * that the current angle, or current number of angles available in a
     * multiangle video has changed.
     * @param src A #GstObject to set as source of the new message.
     * @param curAngle The currently selected angle.
     * @param nAngles The number of viewing angles now available.
     */
    static messageNewAnglesChanged(src: Gst.Object, curAngle: number, nAngles: number): Gst.Message
    /**
     * Creates a new #GstNavigation message with type
     * #GST_NAVIGATION_MESSAGE_COMMANDS_CHANGED
     * @param src A #GstObject to set as source of the new message.
     */
    static messageNewCommandsChanged(src: Gst.Object): Gst.Message
    /**
     * Creates a new #GstNavigation message with type
     * #GST_NAVIGATION_MESSAGE_EVENT.
     * @param src A #GstObject to set as source of the new message.
     * @param event A navigation #GstEvent
     */
    static messageNewEvent(src: Gst.Object, event: Gst.Event): Gst.Message
    /**
     * Creates a new #GstNavigation message with type
     * #GST_NAVIGATION_MESSAGE_MOUSE_OVER.
     * @param src A #GstObject to set as source of the new message.
     * @param active %TRUE if the mouse has entered a clickable area of the display. %FALSE if it over a non-clickable area.
     */
    static messageNewMouseOver(src: Gst.Object, active: boolean): Gst.Message
    /**
     * Parse a #GstNavigation message of type GST_NAVIGATION_MESSAGE_ANGLES_CHANGED
     * and extract the `cur_angle` and `n_angles` parameters.
     * @param message A #GstMessage to inspect.
     */
    static messageParseAnglesChanged(message: Gst.Message): [ /* returnType */ boolean, /* curAngle */ number | null, /* nAngles */ number | null ]
    /**
     * Parse a #GstNavigation message of type #GST_NAVIGATION_MESSAGE_EVENT
     * and extract contained #GstEvent. The caller must unref the `event` when done
     * with it.
     * @param message A #GstMessage to inspect.
     */
    static messageParseEvent(message: Gst.Message): [ /* returnType */ boolean, /* event */ Gst.Event | null ]
    /**
     * Parse a #GstNavigation message of type #GST_NAVIGATION_MESSAGE_MOUSE_OVER
     * and extract the active/inactive flag. If the mouse over event is marked
     * active, it indicates that the mouse is over a clickable area.
     * @param message A #GstMessage to inspect.
     */
    static messageParseMouseOver(message: Gst.Message): [ /* returnType */ boolean, /* active */ boolean | null ]
    /**
     * Inspect a #GstQuery and return the #GstNavigationQueryType associated with
     * it if it is a #GstNavigation query.
     * @param query The query to inspect
     */
    static queryGetType(query: Gst.Query): GstVideo.NavigationQueryType
    /**
     * Create a new #GstNavigation angles query. When executed, it will
     * query the pipeline for the set of currently available angles, which may be
     * greater than one in a multiangle video.
     */
    static queryNewAngles(): Gst.Query
    /**
     * Create a new #GstNavigation commands query. When executed, it will
     * query the pipeline for the set of currently available commands.
     */
    static queryNewCommands(): Gst.Query
    /**
     * Parse the current angle number in the #GstNavigation angles `query` into the
     * #guint pointed to by the `cur_angle` variable, and the number of available
     * angles into the #guint pointed to by the `n_angles` variable.
     * @param query a #GstQuery
     */
    static queryParseAngles(query: Gst.Query): [ /* returnType */ boolean, /* curAngle */ number | null, /* nAngles */ number | null ]
    /**
     * Parse the number of commands in the #GstNavigation commands `query`.
     * @param query a #GstQuery
     */
    static queryParseCommandsLength(query: Gst.Query): [ /* returnType */ boolean, /* nCmds */ number | null ]
    /**
     * Parse the #GstNavigation command query and retrieve the `nth` command from
     * it into `cmd`. If the list contains less elements than `nth,` `cmd` will be
     * set to #GST_NAVIGATION_COMMAND_INVALID.
     * @param query a #GstQuery
     * @param nth the nth command to retrieve.
     */
    static queryParseCommandsNth(query: Gst.Query, nth: number): [ /* returnType */ boolean, /* cmd */ GstVideo.NavigationCommand | null ]
    /**
     * Set the #GstNavigation angles query result field in `query`.
     * @param query a #GstQuery
     * @param curAngle the current viewing angle to set.
     * @param nAngles the number of viewing angles to set.
     */
    static querySetAngles(query: Gst.Query, curAngle: number, nAngles: number): void
    /**
     * Set the #GstNavigation command query result fields in `query`. The number
     * of commands passed must be equal to `n_commands`.
     * @param query a #GstQuery
     * @param cmds An array containing `n_cmds`     `GstNavigationCommand` values.
     */
    static querySetCommandsv(query: Gst.Query, cmds: GstVideo.NavigationCommand[]): void
    static $gtype: GObject.Type
}
interface VideoTexture_ConstructProps extends Clutter.Texture_ConstructProps {
    /* Constructor properties of ClutterGst-2.0.ClutterGst.VideoTexture */
    pixelAspectRatio?: Gst.Fraction
    /* Constructor properties of Clutter-1.0.Clutter.Media */
    /**
     * The volume of the audio, as a normalized value between
     * 0.0 and 1.0.
     */
    audioVolume?: number
    /**
     * Whether the #ClutterMedia actor is playing.
     */
    playing?: boolean
    /**
     * The current progress of the playback, as a normalized
     * value between 0.0 and 1.0.
     */
    progress?: number
    /**
     * The font used to display subtitles. The font description has to
     * follow the same grammar as the one recognized by
     * pango_font_description_from_string().
     */
    subtitleFontName?: string
    /**
     * The location of a subtitle file, expressed as a valid URI.
     */
    subtitleUri?: string
    /**
     * The location of a media file, expressed as a valid URI.
     */
    uri?: string
    /* Constructor properties of ClutterGst-2.0.ClutterGst.Player */
    /**
     * Index of the current audio stream.
     */
    audioStream?: number
    /**
     * Flags to use when seeking.
     */
    seekFlags?: SeekFlags
    subtitleTrack?: number
    /**
     * The User Agent used by #ClutterGstPlayer with network protocols.
     */
    userAgent?: string
}
class VideoTexture {
    /* Properties of ClutterGst-2.0.ClutterGst.VideoTexture */
    pixelAspectRatio: Gst.Fraction
    /* Properties of Clutter-1.0.Clutter.Texture */
    readonly disableSlicing: boolean
    /**
     * The path of the file containing the image data to be displayed by
     * the texture.
     * 
     * This property is unset when using the clutter_texture_set_from_*_data()
     * family of functions.
     */
    filename: string
    filterQuality: Clutter.TextureQuality
    keepAspectRatio: boolean
    /**
     * Tries to load a texture from a filename by using a local thread to perform
     * the read operations. The initially created texture has dimensions 0x0 when
     * the true size becomes available the #ClutterTexture::size-change signal is
     * emitted and when the image has completed loading the
     * #ClutterTexture::load-finished signal is emitted.
     * 
     * Threading is only enabled if g_thread_init() has been called prior to
     * clutter_init(), otherwise #ClutterTexture will use the main loop to load
     * the image.
     * 
     * The upload of the texture data on the GL pipeline is not asynchronous, as
     * it must be performed from within the same thread that called
     * clutter_main().
     */
    loadAsync: boolean
    /**
     * Like #ClutterTexture:load-async but loads the width and height
     * synchronously causing some blocking.
     */
    loadDataAsync: boolean
    pickWithAlpha: boolean
    readonly pixelFormat: Cogl.PixelFormat
    repeatX: boolean
    repeatY: boolean
    syncSize: boolean
    readonly tileWaste: number
    /* Properties of Clutter-1.0.Clutter.Actor */
    /**
     * Adds a #ClutterAction to the actor
     */
    actions: Clutter.Action
    /**
     * The allocation for the actor, in pixels
     * 
     * This is property is read-only, but you might monitor it to know when an
     * actor moves or resizes
     */
    readonly allocation: Clutter.ActorBox
    /**
     * The anchor point expressed as a #ClutterGravity
     * 
     * It is highly recommended not to use #ClutterActor:anchor-x,
     * #ClutterActor:anchor-y, and #ClutterActor:anchor-gravity in newly
     * written code; the anchor point adds an additional translation that
     * will affect the actor's relative position with regards to its
     * parent, as well as the position of its children. This change needs
     * to always be taken into account when positioning the actor. It is
     * recommended to use the #ClutterActor:pivot-point property instead,
     * as it will affect only the transformations.
     */
    anchorGravity: Clutter.Gravity
    /**
     * The X coordinate of an actor's anchor point, relative to
     * the actor coordinate space, in pixels.
     * 
     * It is highly recommended not to use #ClutterActor:anchor-x,
     * #ClutterActor:anchor-y, and #ClutterActor:anchor-gravity in newly
     * written code; the anchor point adds an additional translation that
     * will affect the actor's relative position with regards to its
     * parent, as well as the position of its children. This change needs
     * to always be taken into account when positioning the actor. It is
     * recommended to use the #ClutterActor:pivot-point property instead,
     * as it will affect only the transformations.
     */
    anchorX: number
    /**
     * The Y coordinate of an actor's anchor point, relative to
     * the actor coordinate space, in pixels
     * 
     * It is highly recommended not to use #ClutterActor:anchor-x,
     * #ClutterActor:anchor-y, and #ClutterActor:anchor-gravity in newly
     * written code; the anchor point adds an additional translation that
     * will affect the actor's relative position with regards to its
     * parent, as well as the position of its children. This change needs
     * to always be taken into account when positioning the actor. It is
     * recommended to use the #ClutterActor:pivot-point property instead,
     * as it will affect only the transformations.
     */
    anchorY: number
    /**
     * Paints a solid fill of the actor's allocation using the specified
     * color.
     * 
     * The #ClutterActor:background-color property is animatable.
     */
    backgroundColor: Clutter.Color
    /**
     * Whether the #ClutterActor:background-color property has been set.
     */
    readonly backgroundColorSet: boolean
    /**
     * Applies a transformation matrix on each child of an actor.
     * 
     * Setting this property with a #ClutterMatrix will set the
     * #ClutterActor:child-transform-set property to %TRUE as a side effect;
     * setting this property with %NULL will set the
     * #ClutterActor:child-transform-set property to %FALSE.
     * 
     * The #ClutterActor:child-transform property is animatable.
     */
    childTransform: Clutter.Matrix
    /**
     * Whether the #ClutterActor:child-transform property is set.
     */
    readonly childTransformSet: boolean
    /**
     * The visible region of the actor, in actor-relative coordinates
     */
    clip: Clutter.Geometry
    /**
     * The visible region of the actor, in actor-relative coordinates,
     * expressed as a #ClutterRect.
     * 
     * Setting this property to %NULL will unset the existing clip.
     * 
     * Setting this property will change the #ClutterActor:has-clip
     * property as a side effect.
     */
    clipRect: Clutter.Rect
    /**
     * Whether the clip region should track the allocated area
     * of the actor.
     * 
     * This property is ignored if a clip area has been explicitly
     * set using clutter_actor_set_clip().
     */
    clipToAllocation: boolean
    /**
     * Adds a #ClutterConstraint to the actor
     */
    constraints: Clutter.Constraint
    /**
     * The #ClutterContent implementation that controls the content
     * of the actor.
     */
    content: Clutter.Content
    /**
     * The bounding box for the #ClutterContent used by the actor.
     * 
     * The value of this property is controlled by the #ClutterActor:allocation
     * and #ClutterActor:content-gravity properties of #ClutterActor.
     * 
     * The bounding box for the content is guaranteed to never exceed the
     * allocation's of the actor.
     */
    readonly contentBox: Clutter.ActorBox
    /**
     * The alignment that should be honoured by the #ClutterContent
     * set with the #ClutterActor:content property.
     * 
     * Changing the value of this property will change the bounding box of
     * the content; you can use the #ClutterActor:content-box property to
     * get the position and size of the content within the actor's
     * allocation.
     * 
     * This property is meaningful only for #ClutterContent implementations
     * that have a preferred size, and if the preferred size is smaller than
     * the actor's allocation.
     * 
     * The #ClutterActor:content-gravity property is animatable.
     */
    contentGravity: Clutter.ContentGravity
    /**
     * The repeat policy for the actor's #ClutterActor:content.
     */
    contentRepeat: Clutter.ContentRepeat
    /**
     * The position of the actor on the Z axis.
     * 
     * The #ClutterActor:depth property is relative to the parent's
     * modelview matrix.
     * 
     * Setting this property will call #ClutterContainerIface.sort_depth_order()
     * which is usually a no-op, and it's most likely not what you want.
     * 
     * The #ClutterActor:depth property is animatable.
     */
    depth: number
    /**
     * Adds #ClutterEffect to the list of effects be applied on a #ClutterActor
     */
    effect: Clutter.Effect
    /**
     * The actor's first child.
     */
    readonly firstChild: Clutter.Actor
    /**
     * This flag controls whether the #ClutterActor:fixed-x and
     * #ClutterActor:fixed-y properties are used
     */
    fixedPositionSet: boolean
    /**
     * The fixed X position of the actor in pixels.
     * 
     * Writing this property sets #ClutterActor:fixed-position-set
     * property as well, as a side effect
     */
    fixedX: number
    /**
     * The fixed Y position of the actor in pixels.
     * 
     * Writing this property sets the #ClutterActor:fixed-position-set
     * property as well, as a side effect
     */
    fixedY: number
    /**
     * Whether the actor has the #ClutterActor:clip property set or not
     */
    readonly hasClip: boolean
    /**
     * Whether the actor contains the pointer of a #ClutterInputDevice
     * or not.
     */
    readonly hasPointer: boolean
    /**
     * Height of the actor (in pixels).  If written, forces the minimum and
     * natural size request of the actor to the given height. If read, returns
     * the allocated height if available, otherwise the height request.
     * 
     * The #ClutterActor:height property is animatable.
     */
    height: number
    /**
     * The actor's last child.
     */
    readonly lastChild: Clutter.Actor
    /**
     * A delegate object for controlling the layout of the children of
     * an actor.
     */
    layoutManager: Clutter.LayoutManager
    magnificationFilter: Clutter.ScalingFilter
    /**
     * Whether the actor is mapped (will be painted when the stage
     * to which it belongs is mapped)
     */
    readonly mapped: boolean
    /**
     * The margin (in pixels) from the bottom of the actor.
     * 
     * This property adds a margin to the actor's preferred size; the margin
     * will be automatically taken into account when allocating the actor.
     * 
     * The #ClutterActor:margin-bottom property is animatable.
     */
    marginBottom: number
    /**
     * The margin (in pixels) from the left of the actor.
     * 
     * This property adds a margin to the actor's preferred size; the margin
     * will be automatically taken into account when allocating the actor.
     * 
     * The #ClutterActor:margin-left property is animatable.
     */
    marginLeft: number
    /**
     * The margin (in pixels) from the right of the actor.
     * 
     * This property adds a margin to the actor's preferred size; the margin
     * will be automatically taken into account when allocating the actor.
     * 
     * The #ClutterActor:margin-right property is animatable.
     */
    marginRight: number
    /**
     * The margin (in pixels) from the top of the actor.
     * 
     * This property adds a margin to the actor's preferred size; the margin
     * will be automatically taken into account when allocating the actor.
     * 
     * The #ClutterActor:margin-top property is animatable.
     */
    marginTop: number
    /**
     * A forced minimum height request for the actor, in pixels
     * 
     * Writing this property sets the #ClutterActor:min-height-set property
     * as well, as a side effect. This property overrides the usual height
     * request of the actor.
     */
    minHeight: number
    /**
     * This flag controls whether the #ClutterActor:min-height property
     * is used
     */
    minHeightSet: boolean
    /**
     * A forced minimum width request for the actor, in pixels
     * 
     * Writing this property sets the #ClutterActor:min-width-set property
     * as well, as a side effect.
     * 
     * This property overrides the usual width request of the actor.
     */
    minWidth: number
    /**
     * This flag controls whether the #ClutterActor:min-width property
     * is used
     */
    minWidthSet: boolean
    minificationFilter: Clutter.ScalingFilter
    /**
     * The name of the actor
     */
    name: string
    /**
     * A forced natural height request for the actor, in pixels
     * 
     * Writing this property sets the #ClutterActor:natural-height-set
     * property as well, as a side effect. This property overrides the
     * usual height request of the actor
     */
    naturalHeight: number
    /**
     * This flag controls whether the #ClutterActor:natural-height property
     * is used
     */
    naturalHeightSet: boolean
    /**
     * A forced natural width request for the actor, in pixels
     * 
     * Writing this property sets the #ClutterActor:natural-width-set
     * property as well, as a side effect. This property overrides the
     * usual width request of the actor
     */
    naturalWidth: number
    /**
     * This flag controls whether the #ClutterActor:natural-width property
     * is used
     */
    naturalWidthSet: boolean
    /**
     * Determines the conditions in which the actor will be redirected
     * to an offscreen framebuffer while being painted. For example this
     * can be used to cache an actor in a framebuffer or for improved
     * handling of transparent actors. See
     * clutter_actor_set_offscreen_redirect() for details.
     */
    offscreenRedirect: Clutter.OffscreenRedirect
    /**
     * Opacity of an actor, between 0 (fully transparent) and
     * 255 (fully opaque)
     * 
     * The #ClutterActor:opacity property is animatable.
     */
    opacity: number
    /**
     * The point around which the scaling and rotation transformations occur.
     * 
     * The pivot point is expressed in normalized coordinates space, with (0, 0)
     * being the top left corner of the actor and (1, 1) the bottom right corner
     * of the actor.
     * 
     * The default pivot point is located at (0, 0).
     * 
     * The #ClutterActor:pivot-point property is animatable.
     */
    pivotPoint: Clutter.Point
    /**
     * The Z component of the #ClutterActor:pivot-point, expressed as a value
     * along the Z axis.
     * 
     * The #ClutterActor:pivot-point-z property is animatable.
     */
    pivotPointZ: number
    /**
     * The position of the origin of the actor.
     * 
     * This property is a shorthand for setting and getting the
     * #ClutterActor:x and #ClutterActor:y properties at the same
     * time.
     * 
     * The #ClutterActor:position property is animatable.
     */
    position: Clutter.Point
    /**
     * Whether the actor is reactive to events or not
     * 
     * Only reactive actors will emit event-related signals
     */
    reactive: boolean
    /**
     * Whether the actor has been realized
     */
    readonly realized: boolean
    /**
     * Request mode for the #ClutterActor. The request mode determines the
     * type of geometry management used by the actor, either height for width
     * (the default) or width for height.
     * 
     * For actors implementing height for width, the parent container should get
     * the preferred width first, and then the preferred height for that width.
     * 
     * For actors implementing width for height, the parent container should get
     * the preferred height first, and then the preferred width for that height.
     * 
     * For instance:
     * 
     * 
     * ```c
     *   ClutterRequestMode mode;
     *   gfloat natural_width, min_width;
     *   gfloat natural_height, min_height;
     * 
     *   mode = clutter_actor_get_request_mode (child);
     *   if (mode == CLUTTER_REQUEST_HEIGHT_FOR_WIDTH)
     *     {
     *       clutter_actor_get_preferred_width (child, -1,
     *                                          &min_width,
     *                                          &natural_width);
     *       clutter_actor_get_preferred_height (child, natural_width,
     *                                           &min_height,
     *                                           &natural_height);
     *     }
     *   else if (mode == CLUTTER_REQUEST_WIDTH_FOR_HEIGHT)
     *     {
     *       clutter_actor_get_preferred_height (child, -1,
     *                                           &min_height,
     *                                           &natural_height);
     *       clutter_actor_get_preferred_width (child, natural_height,
     *                                          &min_width,
     *                                          &natural_width);
     *     }
     *   else if (mode == CLUTTER_REQUEST_CONTENT_SIZE)
     *     {
     *       ClutterContent *content = clutter_actor_get_content (child);
     * 
     *       min_width, min_height = 0;
     *       natural_width = natural_height = 0;
     * 
     *       if (content != NULL)
     *         clutter_content_get_preferred_size (content, &natural_width, &natural_height);
     *     }
     * ```
     * 
     * 
     * will retrieve the minimum and natural width and height depending on the
     * preferred request mode of the #ClutterActor "child".
     * 
     * The clutter_actor_get_preferred_size() function will implement this
     * check for you.
     */
    requestMode: Clutter.RequestMode
    /**
     * The rotation angle on the X axis.
     * 
     * The #ClutterActor:rotation-angle-x property is animatable.
     */
    rotationAngleX: number
    /**
     * The rotation angle on the Y axis
     * 
     * The #ClutterActor:rotation-angle-y property is animatable.
     */
    rotationAngleY: number
    /**
     * The rotation angle on the Z axis
     * 
     * The #ClutterActor:rotation-angle-z property is animatable.
     */
    rotationAngleZ: number
    /**
     * The rotation center on the X axis.
     */
    rotationCenterX: Clutter.Vertex
    /**
     * The rotation center on the Y axis.
     */
    rotationCenterY: Clutter.Vertex
    /**
     * The rotation center on the Z axis.
     */
    rotationCenterZ: Clutter.Vertex
    /**
     * The rotation center on the Z axis expressed as a #ClutterGravity.
     */
    rotationCenterZGravity: Clutter.Gravity
    /**
     * The horizontal center point for scaling
     */
    scaleCenterX: number
    /**
     * The vertical center point for scaling
     */
    scaleCenterY: number
    /**
     * The center point for scaling expressed as a #ClutterGravity
     */
    scaleGravity: Clutter.Gravity
    /**
     * The horizontal scale of the actor.
     * 
     * The #ClutterActor:scale-x property is animatable.
     */
    scaleX: number
    /**
     * The vertical scale of the actor.
     * 
     * The #ClutterActor:scale-y property is animatable.
     */
    scaleY: number
    /**
     * The scale factor of the actor along the Z axis.
     * 
     * The #ClutterActor:scale-y property is animatable.
     */
    scaleZ: number
    /**
     * If %TRUE, the actor is automatically shown when parented.
     * 
     * Calling clutter_actor_hide() on an actor which has not been
     * parented will set this property to %FALSE as a side effect.
     */
    showOnSetParent: boolean
    /**
     * The size of the actor.
     * 
     * This property is a shorthand for setting and getting the
     * #ClutterActor:width and #ClutterActor:height at the same time.
     * 
     * The #ClutterActor:size property is animatable.
     */
    size: Clutter.Size
    /**
     * The direction of the text inside a #ClutterActor.
     */
    textDirection: Clutter.TextDirection
    /**
     * Overrides the transformations of a #ClutterActor with a custom
     * matrix.
     * 
     * The matrix specified by the #ClutterActor:transform property is
     * applied to the actor and its children relative to the actor's
     * #ClutterActor:allocation and #ClutterActor:pivot-point.
     * 
     * Application code should rarely need to use this function directly.
     * 
     * Setting this property with a #ClutterMatrix will set the
     * #ClutterActor:transform-set property to %TRUE as a side effect;
     * setting this property with %NULL will set the
     * #ClutterActor:transform-set property to %FALSE.
     * 
     * The #ClutterActor:transform property is animatable.
     */
    transform: Clutter.Matrix
    /**
     * Whether the #ClutterActor:transform property is set.
     */
    readonly transformSet: boolean
    /**
     * An additional translation applied along the X axis, relative
     * to the actor's #ClutterActor:pivot-point.
     * 
     * The #ClutterActor:translation-x property is animatable.
     */
    translationX: number
    /**
     * An additional translation applied along the Y axis, relative
     * to the actor's #ClutterActor:pivot-point.
     * 
     * The #ClutterActor:translation-y property is animatable.
     */
    translationY: number
    /**
     * An additional translation applied along the Z axis, relative
     * to the actor's #ClutterActor:pivot-point.
     * 
     * The #ClutterActor:translation-z property is animatable.
     */
    translationZ: number
    /**
     * Whether the actor is set to be visible or not
     * 
     * See also #ClutterActor:mapped
     */
    visible: boolean
    /**
     * Width of the actor (in pixels). If written, forces the minimum and
     * natural size request of the actor to the given width. If read, returns
     * the allocated width if available, otherwise the width request.
     * 
     * The #ClutterActor:width property is animatable.
     */
    width: number
    /**
     * X coordinate of the actor in pixels. If written, forces a fixed
     * position for the actor. If read, returns the fixed position if any,
     * otherwise the allocation if available, otherwise 0.
     * 
     * The #ClutterActor:x property is animatable.
     */
    x: number
    /**
     * The alignment of an actor on the X axis, if the actor has been given
     * extra space for its allocation. See also the #ClutterActor:x-expand
     * property.
     */
    xAlign: Clutter.ActorAlign
    /**
     * Whether a layout manager should assign more space to the actor on
     * the X axis.
     */
    xExpand: boolean
    /**
     * Y coordinate of the actor in pixels. If written, forces a fixed
     * position for the actor.  If read, returns the fixed position if
     * any, otherwise the allocation if available, otherwise 0.
     * 
     * The #ClutterActor:y property is animatable.
     */
    y: number
    /**
     * The alignment of an actor on the Y axis, if the actor has been given
     * extra space for its allocation.
     */
    yAlign: Clutter.ActorAlign
    /**
     * Whether a layout manager should assign more space to the actor on
     * the Y axis.
     */
    yExpand: boolean
    /**
     * The actor's position on the Z axis, relative to the parent's
     * transformations.
     * 
     * Positive values will bring the actor's position nearer to the user,
     * whereas negative values will bring the actor's position farther from
     * the user.
     * 
     * The #ClutterActor:z-position does not affect the paint or allocation
     * order.
     * 
     * The #ClutterActor:z-position property is animatable.
     */
    zPosition: number
    /* Properties of Clutter-1.0.Clutter.Media */
    /**
     * The volume of the audio, as a normalized value between
     * 0.0 and 1.0.
     */
    audioVolume: number
    /**
     * The fill level of the buffer for the current stream,
     * as a value between 0.0 and 1.0.
     */
    readonly bufferFill: number
    /**
     * Whether the current stream is seekable.
     */
    readonly canSeek: boolean
    /**
     * The duration of the current stream, in seconds
     */
    readonly duration: number
    /**
     * Whether the #ClutterMedia actor is playing.
     */
    playing: boolean
    /**
     * The current progress of the playback, as a normalized
     * value between 0.0 and 1.0.
     */
    progress: number
    /**
     * The font used to display subtitles. The font description has to
     * follow the same grammar as the one recognized by
     * pango_font_description_from_string().
     */
    subtitleFontName: string
    /**
     * The location of a subtitle file, expressed as a valid URI.
     */
    subtitleUri: string
    /**
     * The location of a media file, expressed as a valid URI.
     */
    uri: string
    /* Properties of ClutterGst-2.0.ClutterGst.Player */
    /**
     * Index of the current audio stream.
     */
    audioStream: number
    /**
     * List of audio streams available on the current media.
     */
    readonly audioStreams: object
    /**
     * Whether the #ClutterGstPlayer is in idle mode.
     */
    readonly idle: boolean
    /**
     * Whether or not the stream is being seeked.
     */
    readonly inSeek: boolean
    /**
     * Flags to use when seeking.
     */
    seekFlags: SeekFlags
    subtitleTrack: number
    readonly subtitleTracks: object
    /**
     * The User Agent used by #ClutterGstPlayer with network protocols.
     */
    userAgent: string
    /* Fields of Clutter-1.0.Clutter.Actor */
    /**
     * #ClutterActorFlags
     */
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    gTypeInstance: GObject.TypeInstance
    /* Methods of ClutterGst-2.0.ClutterGst.VideoTexture */
    /**
     * Get the current audio stream. The number returned in the index of the
     * audio stream playing in the list returned by
     * clutter_gst_video_texture_get_audio_streams().
     */
    getAudioStream(): number
    /**
     * Get the list of audio streams of the current media.
     */
    getAudioStreams(): Gst.TagList[]
    getBufferingMode(): BufferingMode
    /**
     * Retrieves the material used to draw when no media is being played.
     */
    getIdleMaterial(): Cogl.Handle
    /**
     * Retrieves the #GstPipeline used by the `texture,` for direct use with
     * GStreamer API.
     */
    getPipeline(): Gst.Element
    /**
     * Get the current value of the seek-flags property.
     */
    getSeekFlags(): SeekFlags
    /**
     * Get the current subtitles track. The number returned is the index of the
     * subitles track in the list returned by
     * clutter_gst_video_texture_get_subtitle_tracks().
     */
    getSubtitleTrack(): number
    /**
     * Get the list of subtitles tracks of the current media.
     */
    getSubtitleTracks(): Gst.TagList[]
    /**
     * Retrieves the user agent used when streaming.
     */
    getUserAgent(): string
    /**
     * Set the audio stream to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_video_texture_get_audio_streams().
     * @param index the index of the audio stream
     */
    setAudioStream(index: number): void
    setBufferingMode(mode: BufferingMode): void
    /**
     * Sets a material to use to draw when no media is being played. The
     * #ClutterGstVideoTexture holds a reference of the `material`.
     * 
     * The default idle material will paint the #ClutterGstVideoTexture in black.
     * If %COGL_INVALID_HANDLE is given as `material` to this function, this
     * default idle material will be used.
     * @param material the handle of a Cogl material
     */
    setIdleMaterial(material: Cogl.Handle): void
    /**
     * Seeking can be done with several trade-offs. Clutter-gst defaults
     * to %CLUTTER_GST_SEEK_FLAG_NONE.
     * @param flags a combination of #ClutterGstSeekFlags
     */
    setSeekFlags(flags: SeekFlags): void
    /**
     * Set the subtitles track to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_video_texture_get_subtitle_tracks().
     * 
     * If `index_` is -1, the subtitles are turned off.
     * @param index the index of the subtitles track
     */
    setSubtitleTrack(index: number): void
    /**
     * Sets the user agent to use when streaming.
     * 
     * When streaming content, you might want to set a custom user agent, eg. to
     * promote your software, make it appear in statistics or because the server
     * requires a special user agent you want to impersonate.
     * @param userAgent the user agent
     */
    setUserAgent(userAgent: string): void
    /* Methods of Clutter-1.0.Clutter.Texture */
    /**
     * Gets the size in pixels of the untransformed underlying image
     */
    getBaseSize(): [ /* width */ number, /* height */ number ]
    /**
     * Returns a handle to the underlying COGL material used for drawing
     * the actor.
     */
    getCoglMaterial(): Cogl.Handle
    /**
     * Retrieves the handle to the underlying COGL texture used for drawing
     * the actor. No extra reference is taken so if you need to keep the
     * handle then you should call cogl_handle_ref() on it.
     * 
     * The texture handle returned is the first layer of the material
     * handle used by the #ClutterTexture. If you need to access the other
     * layers you should use clutter_texture_get_cogl_material() instead
     * and use the #CoglMaterial API.
     */
    getCoglTexture(): Cogl.Handle
    /**
     * Gets the filter quality used when scaling a texture.
     */
    getFilterQuality(): Clutter.TextureQuality
    /**
     * Retrieves the value set using clutter_texture_set_keep_aspect_ratio()
     */
    getKeepAspectRatio(): boolean
    /**
     * Retrieves the value set using clutter_texture_set_load_async()
     */
    getLoadAsync(): boolean
    /**
     * Retrieves the value set by clutter_texture_set_load_data_async()
     */
    getLoadDataAsync(): boolean
    /**
     * Gets the maximum waste that will be used when creating a texture or
     * -1 if slicing is disabled.
     */
    getMaxTileWaste(): number
    /**
     * Retrieves the value set by clutter_texture_set_load_data_async()
     */
    getPickWithAlpha(): boolean
    /**
     * Retrieves the pixel format used by `texture`. This is
     * equivalent to:
     * 
     * |[
     *   handle = clutter_texture_get_pixel_format (texture);
     * 
     *   if (handle != COGL_INVALID_HANDLE)
     *     format = cogl_texture_get_format (handle);
     * ```
     * 
     */
    getPixelFormat(): Cogl.PixelFormat
    /**
     * Retrieves the horizontal and vertical repeat values set
     * using clutter_texture_set_repeat()
     */
    getRepeat(): [ /* repeatX */ boolean, /* repeatY */ boolean ]
    /**
     * Retrieves the value set with clutter_texture_set_sync_size()
     */
    getSyncSize(): boolean
    /**
     * Updates a sub-region of the pixel data in a #ClutterTexture.
     * @param data Image data in RGB type colorspace.
     * @param hasAlpha Set to TRUE if image data has an alpha channel.
     * @param x X coordinate of upper left corner of region to update.
     * @param y Y coordinate of upper left corner of region to update.
     * @param width Width in pixels of region to update.
     * @param height Height in pixels of region to update.
     * @param rowstride Distance in bytes between row starts on source buffer.
     * @param bpp bytes per pixel (Currently only 3 and 4 supported,                        depending on `has_alpha)`
     * @param flags #ClutterTextureFlags
     */
    setAreaFromRgbData(data: Uint8Array, hasAlpha: boolean, x: number, y: number, width: number, height: number, rowstride: number, bpp: number, flags: Clutter.TextureFlags): boolean
    /**
     * Replaces the underlying Cogl material drawn by this actor with
     * `cogl_material`. A reference to the material is taken so if the
     * handle is no longer needed it should be deref'd with
     * cogl_handle_unref. Texture data is attached to the material so
     * calling this function also replaces the Cogl
     * texture. #ClutterTexture requires that the material have a texture
     * layer so you should set one on the material before calling this
     * function.
     * @param coglMaterial A CoglHandle for a material
     */
    setCoglMaterial(coglMaterial: Cogl.Handle): void
    /**
     * Replaces the underlying COGL texture drawn by this actor with
     * `cogl_tex`. A reference to the texture is taken so if the handle is
     * no longer needed it should be deref'd with cogl_handle_unref.
     * @param coglTex A CoglHandle for a texture
     */
    setCoglTexture(coglTex: Cogl.Handle): void
    /**
     * Sets the filter quality when scaling a texture. The quality is an
     * enumeration currently the following values are supported:
     * %CLUTTER_TEXTURE_QUALITY_LOW which is fast but only uses nearest neighbour
     * interpolation. %CLUTTER_TEXTURE_QUALITY_MEDIUM which is computationally a
     * bit more expensive (bilinear interpolation), and
     * %CLUTTER_TEXTURE_QUALITY_HIGH which uses extra texture memory resources to
     * improve scaled down rendering as well (by using mipmaps). The default value
     * is %CLUTTER_TEXTURE_QUALITY_MEDIUM.
     * @param filterQuality new filter quality value
     */
    setFilterQuality(filterQuality: Clutter.TextureQuality): void
    /**
     * Sets the #ClutterTexture image data from an image file. In case of
     * failure, %FALSE is returned and `error` is set.
     * 
     * If #ClutterTexture:load-async is set to %TRUE, this function
     * will return as soon as possible, and the actual image loading
     * from disk will be performed asynchronously. #ClutterTexture::size-change
     * will be emitten when the size of the texture is available and
     * #ClutterTexture::load-finished will be emitted when the image has been
     * loaded or if an error occurred.
     * @param filename The filename of the image in GLib file name encoding
     */
    setFromFile(filename: string): boolean
    /**
     * Sets #ClutterTexture image data.
     * @param data image data in RGBA type colorspace.
     * @param hasAlpha set to %TRUE if image data has an alpha channel.
     * @param width width in pixels of image data.
     * @param height height in pixels of image data
     * @param rowstride distance in bytes between row starts.
     * @param bpp bytes per pixel (currently only 3 and 4 supported, depending   on the value of `has_alpha)`
     * @param flags #ClutterTextureFlags
     */
    setFromRgbData(data: Uint8Array, hasAlpha: boolean, width: number, height: number, rowstride: number, bpp: number, flags: Clutter.TextureFlags): boolean
    /**
     * Sets a #ClutterTexture from YUV image data. If an error occurred,
     * %FALSE is returned and `error` is set.
     * 
     * The YUV support depends on the driver; the format supported by the
     * few drivers exposing this capability are not really useful.
     * 
     * The proper way to convert image data in any YUV colorspace to any
     * RGB colorspace is to use a fragment shader associated with the
     * #ClutterTexture material.
     * @param data Image data in YUV type colorspace.
     * @param width Width in pixels of image data.
     * @param height Height in pixels of image data
     * @param flags #ClutterTextureFlags
     */
    setFromYuvData(data: Uint8Array, width: number, height: number, flags: Clutter.TextureFlags): boolean
    /**
     * Sets whether `texture` should have a preferred size maintaining
     * the aspect ratio of the underlying image
     * @param keepAspect %TRUE to maintain aspect ratio
     */
    setKeepAspectRatio(keepAspect: boolean): void
    /**
     * Sets whether `texture` should use a worker thread to load the data
     * from disk asynchronously. Setting `load_async` to %TRUE will make
     * clutter_texture_set_from_file() return immediately.
     * 
     * See the #ClutterTexture:load-async property documentation, and
     * clutter_texture_set_load_data_async().
     * @param loadAsync %TRUE if the texture should asynchronously load data   from a filename
     */
    setLoadAsync(loadAsync: boolean): void
    /**
     * Sets whether `texture` should use a worker thread to load the data
     * from disk asynchronously. Setting `load_async` to %TRUE will make
     * clutter_texture_set_from_file() block until the #ClutterTexture has
     * determined the width and height of the image data.
     * 
     * See the #ClutterTexture:load-async property documentation, and
     * clutter_texture_set_load_async().
     * @param loadAsync %TRUE if the texture should asynchronously load data   from a filename
     */
    setLoadDataAsync(loadAsync: boolean): void
    /**
     * Sets whether `texture` should have it's shape defined by the alpha
     * channel when picking.
     * 
     * Be aware that this is a bit more costly than the default picking
     * due to the texture lookup, extra test against the alpha value and
     * the fact that it will also interrupt the batching of geometry done
     * internally.
     * 
     * Also there is currently no control over the threshold used to
     * determine what value of alpha is considered pickable, and so only
     * fully opaque parts of the texture will react to picking.
     * @param pickWithAlpha %TRUE if the alpha channel should affect the   picking shape
     */
    setPickWithAlpha(pickWithAlpha: boolean): void
    /**
     * Sets whether the `texture` should repeat horizontally or
     * vertically when the actor size is bigger than the image size
     * @param repeatX %TRUE if the texture should repeat horizontally
     * @param repeatY %TRUE if the texture should repeat vertically
     */
    setRepeat(repeatX: boolean, repeatY: boolean): void
    /**
     * Sets whether `texture` should have the same preferred size as the
     * underlying image data.
     * @param syncSize %TRUE if the texture should have the same size of the    underlying image data
     */
    setSyncSize(syncSize: boolean): void
    /* Methods of Clutter-1.0.Clutter.Actor */
    /**
     * Adds `action` to the list of actions applied to `self`
     * 
     * A #ClutterAction can only belong to one actor at a time
     * 
     * The #ClutterActor will hold a reference on `action` until either
     * clutter_actor_remove_action() or clutter_actor_clear_actions()
     * is called
     * @param action a #ClutterAction
     */
    addAction(action: Clutter.Action): void
    /**
     * A convenience function for setting the name of a #ClutterAction
     * while adding it to the list of actions applied to `self`
     * 
     * This function is the logical equivalent of:
     * 
     * 
     * ```c
     *   clutter_actor_meta_set_name (CLUTTER_ACTOR_META (action), name);
     *   clutter_actor_add_action (self, action);
     * ```
     * 
     * @param name the name to set on the action
     * @param action a #ClutterAction
     */
    addActionWithName(name: string, action: Clutter.Action): void
    /**
     * Adds `child` to the children of `self`.
     * 
     * This function will acquire a reference on `child` that will only
     * be released when calling clutter_actor_remove_child().
     * 
     * This function will take into consideration the #ClutterActor:depth
     * of `child,` and will keep the list of children sorted.
     * 
     * This function will emit the #ClutterContainer::actor-added signal
     * on `self`.
     * @param child a #ClutterActor
     */
    addChild(child: Clutter.Actor): void
    /**
     * Adds `constraint` to the list of #ClutterConstraint<!-- -->s applied
     * to `self`
     * 
     * The #ClutterActor will hold a reference on the `constraint` until
     * either clutter_actor_remove_constraint() or
     * clutter_actor_clear_constraints() is called.
     * @param constraint a #ClutterConstraint
     */
    addConstraint(constraint: Clutter.Constraint): void
    /**
     * A convenience function for setting the name of a #ClutterConstraint
     * while adding it to the list of constraints applied to `self`
     * 
     * This function is the logical equivalent of:
     * 
     * 
     * ```c
     *   clutter_actor_meta_set_name (CLUTTER_ACTOR_META (constraint), name);
     *   clutter_actor_add_constraint (self, constraint);
     * ```
     * 
     * @param name the name to set on the constraint
     * @param constraint a #ClutterConstraint
     */
    addConstraintWithName(name: string, constraint: Clutter.Constraint): void
    /**
     * Adds `effect` to the list of #ClutterEffect<!-- -->s applied to `self`
     * 
     * The #ClutterActor will hold a reference on the `effect` until either
     * clutter_actor_remove_effect() or clutter_actor_clear_effects() is
     * called.
     * 
     * Note that as #ClutterEffect is initially unowned,
     * clutter_actor_add_effect() will sink any floating reference on `effect`.
     * @param effect a #ClutterEffect
     */
    addEffect(effect: Clutter.Effect): void
    /**
     * A convenience function for setting the name of a #ClutterEffect
     * while adding it to the list of effects applied to `self`.
     * 
     * Note that as #ClutterEffect is initially unowned,
     * clutter_actor_add_effect_with_name() will sink any floating
     * reference on `effect`.
     * 
     * This function is the logical equivalent of:
     * 
     * 
     * ```c
     *   clutter_actor_meta_set_name (CLUTTER_ACTOR_META (effect), name);
     *   clutter_actor_add_effect (self, effect);
     * ```
     * 
     * @param name the name to set on the effect
     * @param effect a #ClutterEffect
     */
    addEffectWithName(name: string, effect: Clutter.Effect): void
    /**
     * Adds a `transition` to the #ClutterActor's list of animations.
     * 
     * The `name` string is a per-actor unique identifier of the `transition:` only
     * one #ClutterTransition can be associated to the specified `name`.
     * 
     * The `transition` will be started once added.
     * 
     * This function will take a reference on the `transition`.
     * 
     * This function is usually called implicitly when modifying an animatable
     * property.
     * @param name the name of the transition to add
     * @param transition the #ClutterTransition to add
     */
    addTransition(name: string, transition: Clutter.Transition): void
    /**
     * Assigns the size of a #ClutterActor from the given `box`.
     * 
     * This function should only be called on the children of an actor when
     * overriding the #ClutterActorClass.allocate() virtual function.
     * 
     * This function will adjust the stored allocation to take into account
     * the alignment flags set in the #ClutterActor:x-align and
     * #ClutterActor:y-align properties, as well as the margin values set in
     * the #ClutterActor:margin-top, #ClutterActor:margin-right,
     * #ClutterActor:margin-bottom, and #ClutterActor:margin-left properties.
     * 
     * This function will respect the easing state of the #ClutterActor and
     * interpolate between the current allocation and the new one if the
     * easing state duration is a positive value.
     * 
     * Actors can know from their allocation box whether they have moved
     * with respect to their parent actor. The `flags` parameter describes
     * additional information about the allocation, for instance whether
     * the parent has moved with respect to the stage, for example because
     * a grandparent's origin has moved.
     * @param box new allocation of the actor, in parent-relative coordinates
     * @param flags flags that control the allocation
     */
    allocate(box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    /**
     * Allocates `self` by taking into consideration the available allocation
     * area; an alignment factor on either axis; and whether the actor should
     * fill the allocation on either axis.
     * 
     * The `box` should contain the available allocation width and height;
     * if the x1 and y1 members of #ClutterActorBox are not set to 0, the
     * allocation will be offset by their value.
     * 
     * This function takes into consideration the geometry request specified by
     * the #ClutterActor:request-mode property, and the text direction.
     * 
     * This function is useful for fluid layout managers using legacy alignment
     * flags. Newly written layout managers should use the #ClutterActor:x-align
     * and #ClutterActor:y-align properties, instead, and just call
     * clutter_actor_allocate() inside their #ClutterActorClass.allocate()
     * implementation.
     * @param box a #ClutterActorBox, containing the available width and height
     * @param xAlign the horizontal alignment, between 0 and 1
     * @param yAlign the vertical alignment, between 0 and 1
     * @param xFill whether the actor should fill horizontally
     * @param yFill whether the actor should fill vertically
     * @param flags allocation flags to be passed to clutter_actor_allocate()
     */
    allocateAlignFill(box: Clutter.ActorBox, xAlign: number, yAlign: number, xFill: boolean, yFill: boolean, flags: Clutter.AllocationFlags): void
    /**
     * Allocates `self` taking into account the #ClutterActor's
     * preferred size, but limiting it to the maximum available width
     * and height provided.
     * 
     * This function will do the right thing when dealing with the
     * actor's request mode.
     * 
     * The implementation of this function is equivalent to:
     * 
     * 
     * ```c
     *   if (request_mode == CLUTTER_REQUEST_HEIGHT_FOR_WIDTH)
     *     {
     *       clutter_actor_get_preferred_width (self, available_height,
     *                                          &min_width,
     *                                          &natural_width);
     *       width = CLAMP (natural_width, min_width, available_width);
     * 
     *       clutter_actor_get_preferred_height (self, width,
     *                                           &min_height,
     *                                           &natural_height);
     *       height = CLAMP (natural_height, min_height, available_height);
     *     }
     *   else if (request_mode == CLUTTER_REQUEST_WIDTH_FOR_HEIGHT)
     *     {
     *       clutter_actor_get_preferred_height (self, available_width,
     *                                           &min_height,
     *                                           &natural_height);
     *       height = CLAMP (natural_height, min_height, available_height);
     * 
     *       clutter_actor_get_preferred_width (self, height,
     *                                          &min_width,
     *                                          &natural_width);
     *       width = CLAMP (natural_width, min_width, available_width);
     *     }
     *   else if (request_mode == CLUTTER_REQUEST_CONTENT_SIZE)
     *     {
     *       clutter_content_get_preferred_size (content, &natural_width, &natural_height);
     * 
     *       width = CLAMP (natural_width, 0, available_width);
     *       height = CLAMP (natural_height, 0, available_height);
     *     }
     * 
     *   box.x1 = x; box.y1 = y;
     *   box.x2 = box.x1 + available_width;
     *   box.y2 = box.y1 + available_height;
     *   clutter_actor_allocate (self, &box, flags);
     * ```
     * 
     * 
     * This function can be used by fluid layout managers to allocate
     * an actor's preferred size without making it bigger than the area
     * available for the container.
     * @param x the actor's X coordinate
     * @param y the actor's Y coordinate
     * @param availableWidth the maximum available width, or -1 to use the   actor's natural width
     * @param availableHeight the maximum available height, or -1 to use the   actor's natural height
     * @param flags flags controlling the allocation
     */
    allocateAvailableSize(x: number, y: number, availableWidth: number, availableHeight: number, flags: Clutter.AllocationFlags): void
    /**
     * Allocates the natural size of `self`.
     * 
     * This function is a utility call for #ClutterActor implementations
     * that allocates the actor's preferred natural size. It can be used
     * by fixed layout managers (like #ClutterGroup or so called
     * 'composite actors') inside the ClutterActor::allocate
     * implementation to give each child exactly how much space it
     * requires, regardless of the size of the parent.
     * 
     * This function is not meant to be used by applications. It is also
     * not meant to be used outside the implementation of the
     * #ClutterActorClass.allocate virtual function.
     * @param flags flags controlling the allocation
     */
    allocatePreferredSize(flags: Clutter.AllocationFlags): void
    /**
     * Animates the given list of properties of `actor` between the current
     * value for each property and a new final value. The animation has a
     * definite behaviour given by the passed `alpha`.
     * 
     * See clutter_actor_animate() for further details.
     * 
     * This function is useful if you want to use an existing #ClutterAlpha
     * to animate `actor`.
     * 
     * This is the vector-based variant of clutter_actor_animate_with_alpha(),
     * useful for language bindings.
     * 
     * Unlike clutter_actor_animate_with_alpha(), this function will
     * not allow you to specify "signal::" names and callbacks.
     * @param alpha a #ClutterAlpha
     * @param properties a vector    containing the property names to set
     * @param values a vector containing the    property values to set
     */
    animateWithAlphav(alpha: Clutter.Alpha, properties: string[], values: any[]): Clutter.Animation
    /**
     * Animates the given list of properties of `actor` between the current
     * value for each property and a new final value. The animation has a
     * definite duration given by `timeline` and a speed given by the `mode`.
     * 
     * See clutter_actor_animate() for further details.
     * 
     * This function is useful if you want to use an existing timeline
     * to animate `actor`.
     * 
     * This is the vector-based variant of clutter_actor_animate_with_timeline(),
     * useful for language bindings.
     * 
     * Unlike clutter_actor_animate_with_timeline(), this function
     * will not allow you to specify "signal::" names and callbacks.
     * @param mode an animation mode logical id
     * @param timeline a #ClutterTimeline
     * @param properties a vector    containing the property names to set
     * @param values a vector containing the    property values to set
     */
    animateWithTimelinev(mode: number, timeline: Clutter.Timeline, properties: string[], values: any[]): Clutter.Animation
    /**
     * Animates the given list of properties of `actor` between the current
     * value for each property and a new final value. The animation has a
     * definite duration and a speed given by the `mode`.
     * 
     * This is the vector-based variant of clutter_actor_animate(), useful
     * for language bindings.
     * 
     * Unlike clutter_actor_animate(), this function will not
     * allow you to specify "signal::" names and callbacks.
     * @param mode an animation mode logical id
     * @param duration duration of the animation, in milliseconds
     * @param properties a vector    containing the property names to set
     * @param values a vector containing the    property values to set
     */
    animatev(mode: number, duration: number, properties: string[], values: any[]): Clutter.Animation
    /**
     * Transforms `point` in coordinates relative to the actor into
     * ancestor-relative coordinates using the relevant transform
     * stack (i.e. scale, rotation, etc).
     * 
     * If `ancestor` is %NULL the ancestor will be the #ClutterStage. In
     * this case, the coordinates returned will be the coordinates on
     * the stage before the projection is applied. This is different from
     * the behaviour of clutter_actor_apply_transform_to_point().
     * @param ancestor A #ClutterActor ancestor, or %NULL to use the   default #ClutterStage
     * @param point A point as #ClutterVertex
     */
    applyRelativeTransformToPoint(ancestor: Clutter.Actor | null, point: Clutter.Vertex): /* vertex */ Clutter.Vertex
    /**
     * Transforms `point` in coordinates relative to the actor
     * into screen-relative coordinates with the current actor
     * transformation (i.e. scale, rotation, etc)
     * @param point A point as #ClutterVertex
     */
    applyTransformToPoint(point: Clutter.Vertex): /* vertex */ Clutter.Vertex
    /**
     * Binds a #GListModel to a #ClutterActor.
     * 
     * If the #ClutterActor was already bound to a #GListModel, the previous
     * binding is destroyed.
     * 
     * The existing children of #ClutterActor are destroyed when setting a
     * model, and new children are created and added, representing the contents
     * of the `model`. The #ClutterActor is updated whenever the `model` changes.
     * If `model` is %NULL, the #ClutterActor is left empty.
     * 
     * When a #ClutterActor is bound to a model, adding and removing children
     * directly is undefined behaviour.
     * @param model a #GListModel
     * @param createChildFunc a function that creates #ClutterActor instances   from the contents of the `model`
     */
    bindModel(model: Gio.ListModel | null, createChildFunc: Clutter.ActorCreateChildFunc): void
    /**
     * Clears the list of actions applied to `self`
     */
    clearActions(): void
    /**
     * Clears the list of constraints applied to `self`
     */
    clearConstraints(): void
    /**
     * Clears the list of effects applied to `self`
     */
    clearEffects(): void
    /**
     * Determines if `descendant` is contained inside `self` (either as an
     * immediate child, or as a deeper descendant). If `self` and
     * `descendant` point to the same actor then it will also return %TRUE.
     * @param descendant A #ClutterActor, possibly contained in `self`
     */
    contains(descendant: Clutter.Actor): boolean
    /**
     * Run the next stage of the paint sequence. This function should only
     * be called within the implementation of the ‘run’ virtual of a
     * #ClutterEffect. It will cause the run method of the next effect to
     * be applied, or it will paint the actual actor if the current effect
     * is the last effect in the chain.
     */
    continuePaint(): void
    /**
     * Creates a #PangoContext for the given actor. The #PangoContext
     * is already configured using the appropriate font map, resolution
     * and font options.
     * 
     * See also clutter_actor_get_pango_context().
     */
    createPangoContext(): Pango.Context
    /**
     * Creates a new #PangoLayout from the same #PangoContext used
     * by the #ClutterActor. The #PangoLayout is already configured
     * with the font map, resolution and font options, and the
     * given `text`.
     * 
     * If you want to keep around a #PangoLayout created by this
     * function you will have to connect to the #ClutterBackend::font-changed
     * and #ClutterBackend::resolution-changed signals, and call
     * pango_layout_context_changed() in response to them.
     * @param text the text to set on the #PangoLayout, or %NULL
     */
    createPangoLayout(text?: string | null): Pango.Layout
    /**
     * Destroys an actor.  When an actor is destroyed, it will break any
     * references it holds to other objects.  If the actor is inside a
     * container, the actor will be removed.
     * 
     * When you destroy a container, its children will be destroyed as well.
     * 
     * Note: you cannot destroy the #ClutterStage returned by
     * clutter_stage_get_default().
     */
    destroy(): void
    /**
     * Destroys all children of `self`.
     * 
     * This function releases the reference added by inserting a child
     * actor in the list of children of `self,` and ensures that the
     * #ClutterActor::destroy signal is emitted on each child of the
     * actor.
     * 
     * By default, #ClutterActor will emit the #ClutterActor::destroy signal
     * when its reference count drops to 0; the default handler of the
     * #ClutterActor::destroy signal will destroy all the children of an
     * actor. This function ensures that all children are destroyed, instead
     * of just removed from `self,` unlike clutter_actor_remove_all_children()
     * which will merely release the reference and remove each child.
     * 
     * Unless you acquired an additional reference on each child of `self`
     * prior to calling clutter_actor_remove_all_children() and want to reuse
     * the actors, you should use clutter_actor_destroy_all_children() in
     * order to make sure that children are destroyed and signal handlers
     * are disconnected even in cases where circular references prevent this
     * from automatically happening through reference counting alone.
     */
    destroyAllChildren(): void
    /**
     * Detaches the #ClutterAnimation used by `actor,` if clutter_actor_animate()
     * has been called on `actor`.
     * 
     * Once the animation has been detached, it loses a reference. If it was
     * the only reference then the #ClutterAnimation becomes invalid.
     * 
     * The #ClutterAnimation::completed signal will not be emitted.
     */
    detachAnimation(): void
    /**
     * This function is used to emit an event on the main stage.
     * You should rarely need to use this function, except for
     * synthetising events.
     * @param event a #ClutterEvent
     * @param capture %TRUE if event in in capture phase, %FALSE otherwise.
     */
    event(event: Clutter.Event, capture: boolean): boolean
    /**
     * Calculates the transformed screen coordinates of the four corners of
     * the actor; the returned vertices relate to the #ClutterActorBox
     * coordinates  as follows:
     * 
     *  - v[0] contains (x1, y1)
     *  - v[1] contains (x2, y1)
     *  - v[2] contains (x1, y2)
     *  - v[3] contains (x2, y2)
     */
    getAbsAllocationVertices(): /* verts */ Clutter.Vertex[]
    /**
     * Returns the accessible object that describes the actor to an
     * assistive technology.
     * 
     * If no class-specific #AtkObject implementation is available for the
     * actor instance in question, it will inherit an #AtkObject
     * implementation from the first ancestor class for which such an
     * implementation is defined.
     * 
     * The documentation of the <ulink
     * url="http://developer.gnome.org/doc/API/2.0/atk/index.html">ATK</ulink>
     * library contains more information about accessible objects and
     * their uses.
     */
    getAccessible(): Atk.Object
    /**
     * Retrieves the #ClutterAction with the given name in the list
     * of actions applied to `self`
     * @param name the name of the action to retrieve
     */
    getAction(name: string): Clutter.Action
    /**
     * Retrieves the list of actions applied to `self`
     */
    getActions(): Clutter.Action[]
    /**
     * Gets the layout box an actor has been assigned. The allocation can
     * only be assumed valid inside a paint() method; anywhere else, it
     * may be out-of-date.
     * 
     * An allocation does not incorporate the actor's scale or anchor point;
     * those transformations do not affect layout, only rendering.
     * 
     * Do not call any of the clutter_actor_get_allocation_*() family
     * of functions inside the implementation of the get_preferred_width()
     * or get_preferred_height() virtual functions.
     */
    getAllocationBox(): /* box */ Clutter.ActorBox
    /**
     * Gets the layout box an actor has been assigned.  The allocation can
     * only be assumed valid inside a paint() method; anywhere else, it
     * may be out-of-date.
     * 
     * An allocation does not incorporate the actor's scale or anchor point;
     * those transformations do not affect layout, only rendering.
     * 
     * The returned rectangle is in pixels.
     */
    getAllocationGeometry(): /* geom */ Clutter.Geometry
    /**
     * Calculates the transformed coordinates of the four corners of the
     * actor in the plane of `ancestor`. The returned vertices relate to
     * the #ClutterActorBox coordinates as follows:
     * 
     *  - `verts[`0] contains (x1, y1)
     *  - `verts[`1] contains (x2, y1)
     *  - `verts[`2] contains (x1, y2)
     *  - `verts[`3] contains (x2, y2)
     * 
     * If `ancestor` is %NULL the ancestor will be the #ClutterStage. In
     * this case, the coordinates returned will be the coordinates on
     * the stage before the projection is applied. This is different from
     * the behaviour of clutter_actor_get_abs_allocation_vertices().
     * @param ancestor A #ClutterActor to calculate the vertices   against, or %NULL to use the #ClutterStage
     */
    getAllocationVertices(ancestor?: Clutter.Actor | null): /* verts */ Clutter.Vertex[]
    /**
     * Gets the current anchor point of the `actor` in pixels.
     */
    getAnchorPoint(): [ /* anchorX */ number, /* anchorY */ number ]
    /**
     * Retrieves the anchor position expressed as a #ClutterGravity. If
     * the anchor point was specified using pixels or units this will
     * return %CLUTTER_GRAVITY_NONE.
     */
    getAnchorPointGravity(): Clutter.Gravity
    /**
     * Retrieves the #ClutterAnimation used by `actor,` if clutter_actor_animate()
     * has been called on `actor`.
     */
    getAnimation(): Clutter.Animation
    /**
     * Retrieves the color set using clutter_actor_set_background_color().
     */
    getBackgroundColor(): /* color */ Clutter.Color
    /**
     * Retrieves the actor at the given `index_` inside the list of
     * children of `self`.
     * @param index the position in the list of children
     */
    getChildAtIndex(index: number): Clutter.Actor
    /**
     * Retrieves the child transformation matrix set using
     * clutter_actor_set_child_transform(); if none is currently set,
     * the `transform` matrix will be initialized to the identity matrix.
     */
    getChildTransform(): /* transform */ Clutter.Matrix
    /**
     * Retrieves the list of children of `self`.
     */
    getChildren(): Clutter.Actor[]
    /**
     * Gets the clip area for `self,` if any is set.
     */
    getClip(): [ /* xoff */ number | null, /* yoff */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Retrieves the value set using clutter_actor_set_clip_to_allocation()
     */
    getClipToAllocation(): boolean
    /**
     * Retrieves the #ClutterConstraint with the given name in the list
     * of constraints applied to `self`
     * @param name the name of the constraint to retrieve
     */
    getConstraint(name: string): Clutter.Constraint
    /**
     * Retrieves the list of constraints applied to `self`
     */
    getConstraints(): Clutter.Constraint[]
    /**
     * Retrieves the contents of `self`.
     */
    getContent(): Clutter.Content
    /**
     * Retrieves the bounding box for the #ClutterContent of `self`.
     * 
     * The bounding box is relative to the actor's allocation.
     * 
     * If no #ClutterContent is set for `self,` or if `self` has not been
     * allocated yet, then the result is undefined.
     * 
     * The content box is guaranteed to be, at most, as big as the allocation
     * of the #ClutterActor.
     * 
     * If the #ClutterContent used by the actor has a preferred size, then
     * it is possible to modify the content box by using the
     * #ClutterActor:content-gravity property.
     */
    getContentBox(): /* box */ Clutter.ActorBox
    /**
     * Retrieves the content gravity as set using
     * clutter_actor_set_content_gravity().
     */
    getContentGravity(): Clutter.ContentGravity
    /**
     * Retrieves the repeat policy for a #ClutterActor set by
     * clutter_actor_set_content_repeat().
     */
    getContentRepeat(): Clutter.ContentRepeat
    /**
     * Retrieves the values set using clutter_actor_set_content_scaling_filters().
     */
    getContentScalingFilters(): [ /* minFilter */ Clutter.ScalingFilter | null, /* magFilter */ Clutter.ScalingFilter | null ]
    /**
     * Retrieves the default paint volume for `self`.
     * 
     * This function provides the same #ClutterPaintVolume that would be
     * computed by the default implementation inside #ClutterActor of the
     * #ClutterActorClass.get_paint_volume() virtual function.
     * 
     * This function should only be used by #ClutterActor subclasses that
     * cannot chain up to the parent implementation when computing their
     * paint volume.
     */
    getDefaultPaintVolume(): Clutter.PaintVolume
    /**
     * Retrieves the depth of `self`.
     */
    getDepth(): number
    /**
     * Retrieves the delay that should be applied when tweening animatable
     * properties.
     */
    getEasingDelay(): number
    /**
     * Retrieves the duration of the tweening for animatable
     * properties of `self` for the current easing state.
     */
    getEasingDuration(): number
    /**
     * Retrieves the easing mode for the tweening of animatable properties
     * of `self` for the current easing state.
     */
    getEasingMode(): Clutter.AnimationMode
    /**
     * Retrieves the #ClutterEffect with the given name in the list
     * of effects applied to `self`
     * @param name the name of the effect to retrieve
     */
    getEffect(name: string): Clutter.Effect
    /**
     * Retrieves the #ClutterEffect<!-- -->s applied on `self,` if any
     */
    getEffects(): Clutter.Effect[]
    /**
     * Retrieves the first child of `self`.
     * 
     * The returned pointer is only valid until the scene graph changes; it
     * is not safe to modify the list of children of `self` while iterating
     * it.
     */
    getFirstChild(): Clutter.Actor
    /**
     * Checks whether an actor has a fixed position set (and will thus be
     * unaffected by any layout manager).
     */
    getFixedPositionSet(): boolean
    /**
     * Retrieves the flags set on `self`
     */
    getFlags(): Clutter.ActorFlags
    /**
     * Gets the size and position of an actor relative to its parent
     * actor. This is the same as calling clutter_actor_get_position() and
     * clutter_actor_get_size(). It tries to "do what you mean" and get the
     * requested size and position if the actor's allocation is invalid.
     */
    getGeometry(): /* geometry */ Clutter.Geometry
    /**
     * Retrieves the unique id for `self`.
     */
    getGid(): number
    /**
     * Retrieves the height of a #ClutterActor.
     * 
     * If the actor has a valid allocation, this function will return the
     * height of the allocated area given to the actor.
     * 
     * If the actor does not have a valid allocation, this function will
     * return the actor's natural height, that is the preferred height of
     * the actor.
     * 
     * If you care whether you get the preferred height or the height that
     * has been assigned to the actor, you should probably call a different
     * function like clutter_actor_get_allocation_box() to retrieve the
     * allocated size or clutter_actor_get_preferred_height() to retrieve the
     * preferred height.
     * 
     * If an actor has a fixed height, for instance a height that has been
     * assigned using clutter_actor_set_height(), the height returned will
     * be the same value.
     */
    getHeight(): number
    /**
     * Retrieves the last child of `self`.
     * 
     * The returned pointer is only valid until the scene graph changes; it
     * is not safe to modify the list of children of `self` while iterating
     * it.
     */
    getLastChild(): Clutter.Actor
    /**
     * Retrieves the #ClutterLayoutManager used by `self`.
     */
    getLayoutManager(): Clutter.LayoutManager
    /**
     * Retrieves all the components of the margin of a #ClutterActor.
     */
    getMargin(): /* margin */ Clutter.Margin
    /**
     * Retrieves the bottom margin of a #ClutterActor.
     */
    getMarginBottom(): number
    /**
     * Retrieves the left margin of a #ClutterActor.
     */
    getMarginLeft(): number
    /**
     * Retrieves the right margin of a #ClutterActor.
     */
    getMarginRight(): number
    /**
     * Retrieves the top margin of a #ClutterActor.
     */
    getMarginTop(): number
    /**
     * Retrieves the number of children of `self`.
     */
    getNChildren(): number
    /**
     * Retrieves the name of `self`.
     */
    getName(): string
    /**
     * Retrieves the sibling of `self` that comes after it in the list
     * of children of `self'`s parent.
     * 
     * The returned pointer is only valid until the scene graph changes; it
     * is not safe to modify the list of children of `self` while iterating
     * it.
     */
    getNextSibling(): Clutter.Actor
    /**
     * Retrieves whether to redirect the actor to an offscreen buffer, as
     * set by clutter_actor_set_offscreen_redirect().
     */
    getOffscreenRedirect(): Clutter.OffscreenRedirect
    /**
     * Retrieves the opacity value of an actor, as set by
     * clutter_actor_set_opacity().
     * 
     * For retrieving the absolute opacity of the actor inside a paint
     * virtual function, see clutter_actor_get_paint_opacity().
     */
    getOpacity(): number
    /**
     * Retrieves the paint volume of the passed #ClutterActor, and
     * transforms it into a 2D bounding box in stage coordinates.
     * 
     * This function is useful to determine the on screen area occupied by
     * the actor. The box is only an approximation and may often be
     * considerably larger due to the optimizations used to calculate the
     * box. The box is never smaller though, so it can reliably be used
     * for culling.
     * 
     * There are times when a 2D paint box can't be determined, e.g.
     * because the actor isn't yet parented under a stage or because
     * the actor is unable to determine a paint volume.
     */
    getPaintBox(): [ /* returnType */ boolean, /* box */ Clutter.ActorBox ]
    /**
     * Retrieves the absolute opacity of the actor, as it appears on the stage.
     * 
     * This function traverses the hierarchy chain and composites the opacity of
     * the actor with that of its parents.
     * 
     * This function is intended for subclasses to use in the paint virtual
     * function, to paint themselves with the correct opacity.
     */
    getPaintOpacity(): number
    /**
     * Retrieves the 'paint' visibility of an actor recursively checking for non
     * visible parents.
     * 
     * This is by definition the same as %CLUTTER_ACTOR_IS_MAPPED.
     */
    getPaintVisibility(): boolean
    /**
     * Retrieves the paint volume of the passed #ClutterActor, or %NULL
     * when a paint volume can't be determined.
     * 
     * The paint volume is defined as the 3D space occupied by an actor
     * when being painted.
     * 
     * This function will call the #ClutterActorClass.get_paint_volume()
     * virtual function of the #ClutterActor class. Sub-classes of #ClutterActor
     * should not usually care about overriding the default implementation,
     * unless they are, for instance: painting outside their allocation, or
     * actors with a depth factor (not in terms of #ClutterActor:depth but real
     * 3D depth).
     * 
     * Note: 2D actors overriding #ClutterActorClass.get_paint_volume()
     * should ensure that their volume has a depth of 0. (This will be true
     * as long as you don't call clutter_paint_volume_set_depth().)
     */
    getPaintVolume(): Clutter.PaintVolume
    /**
     * Retrieves the #PangoContext for `self`. The actor's #PangoContext
     * is already configured using the appropriate font map, resolution
     * and font options.
     * 
     * Unlike clutter_actor_create_pango_context(), this context is owend
     * by the #ClutterActor and it will be updated each time the options
     * stored by the #ClutterBackend change.
     * 
     * You can use the returned #PangoContext to create a #PangoLayout
     * and render text using cogl_pango_render_layout() to reuse the
     * glyphs cache also used by Clutter.
     */
    getPangoContext(): Pango.Context
    /**
     * Retrieves the parent of `self`.
     */
    getParent(): Clutter.Actor
    /**
     * Retrieves the coordinates of the #ClutterActor:pivot-point.
     */
    getPivotPoint(): [ /* pivotX */ number | null, /* pivotY */ number | null ]
    /**
     * Retrieves the Z component of the #ClutterActor:pivot-point.
     */
    getPivotPointZ(): number
    /**
     * This function tries to "do what you mean" and tell you where the
     * actor is, prior to any transformations. Retrieves the fixed
     * position of an actor in pixels, if one has been set; otherwise, if
     * the allocation is valid, returns the actor's allocated position;
     * otherwise, returns 0,0.
     * 
     * The returned position is in pixels.
     */
    getPosition(): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Computes the requested minimum and natural heights for an actor,
     * or if they are already computed, returns the cached values.
     * 
     * An actor may not get its request - depending on the layout
     * manager that's in effect.
     * 
     * A request should not incorporate the actor's scale or anchor point;
     * those transformations do not affect layout, only rendering.
     * @param forWidth available width to assume in computing desired height,   or a negative value to indicate that no width is defined
     */
    getPreferredHeight(forWidth: number): [ /* minHeightP */ number | null, /* naturalHeightP */ number | null ]
    /**
     * Computes the preferred minimum and natural size of an actor, taking into
     * account the actor's geometry management (either height-for-width
     * or width-for-height).
     * 
     * The width and height used to compute the preferred height and preferred
     * width are the actor's natural ones.
     * 
     * If you need to control the height for the preferred width, or the width for
     * the preferred height, you should use clutter_actor_get_preferred_width()
     * and clutter_actor_get_preferred_height(), and check the actor's preferred
     * geometry management using the #ClutterActor:request-mode property.
     */
    getPreferredSize(): [ /* minWidthP */ number | null, /* minHeightP */ number | null, /* naturalWidthP */ number | null, /* naturalHeightP */ number | null ]
    /**
     * Computes the requested minimum and natural widths for an actor,
     * optionally depending on the specified height, or if they are
     * already computed, returns the cached values.
     * 
     * An actor may not get its request - depending on the layout
     * manager that's in effect.
     * 
     * A request should not incorporate the actor's scale or anchor point;
     * those transformations do not affect layout, only rendering.
     * @param forHeight available height when computing the preferred width,   or a negative value to indicate that no height is defined
     */
    getPreferredWidth(forHeight: number): [ /* minWidthP */ number | null, /* naturalWidthP */ number | null ]
    /**
     * Retrieves the sibling of `self` that comes before it in the list
     * of children of `self'`s parent.
     * 
     * The returned pointer is only valid until the scene graph changes; it
     * is not safe to modify the list of children of `self` while iterating
     * it.
     */
    getPreviousSibling(): Clutter.Actor
    /**
     * Checks whether `actor` is marked as reactive.
     */
    getReactive(): boolean
    /**
     * Retrieves the geometry request mode of `self`
     */
    getRequestMode(): Clutter.RequestMode
    /**
     * Retrieves the angle and center of rotation on the given axis,
     * set using clutter_actor_set_rotation().
     * @param axis the axis of rotation
     */
    getRotation(axis: Clutter.RotateAxis): [ /* returnType */ number, /* x */ number, /* y */ number, /* z */ number ]
    /**
     * Retrieves the angle of rotation set by clutter_actor_set_rotation_angle().
     * @param axis the axis of the rotation
     */
    getRotationAngle(axis: Clutter.RotateAxis): number
    /**
     * Retrieves an actors scale factors.
     */
    getScale(): [ /* scaleX */ number | null, /* scaleY */ number | null ]
    /**
     * Retrieves the scale center coordinate in pixels relative to the top
     * left corner of the actor. If the scale center was specified using a
     * #ClutterGravity this will calculate the pixel offset using the
     * current size of the actor.
     */
    getScaleCenter(): [ /* centerX */ number | null, /* centerY */ number | null ]
    /**
     * Retrieves the scale center as a compass direction. If the scale
     * center was specified in pixels or units this will return
     * %CLUTTER_GRAVITY_NONE.
     */
    getScaleGravity(): Clutter.Gravity
    /**
     * Retrieves the scaling factor along the Z axis, as set using
     * clutter_actor_set_scale_z().
     */
    getScaleZ(): number
    /**
     * Queries the currently set #ClutterShader on `self`.
     */
    getShader(): Clutter.Shader
    /**
     * This function tries to "do what you mean" and return
     * the size an actor will have. If the actor has a valid
     * allocation, the allocation will be returned; otherwise,
     * the actors natural size request will be returned.
     * 
     * If you care whether you get the request vs. the allocation, you
     * should probably call a different function like
     * clutter_actor_get_allocation_box() or
     * clutter_actor_get_preferred_width().
     */
    getSize(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Retrieves the #ClutterStage where `actor` is contained.
     */
    getStage(): Clutter.Stage
    /**
     * Retrieves the value set using clutter_actor_set_text_direction()
     * 
     * If no text direction has been previously set, the default text
     * direction, as returned by clutter_get_default_text_direction(), will
     * be returned instead
     */
    getTextDirection(): Clutter.TextDirection
    /**
     * Retrieves the current transformation matrix of a #ClutterActor.
     */
    getTransform(): /* transform */ Clutter.Matrix
    /**
     * Retrieves the transformations applied to `self` relative to its
     * parent.
     */
    getTransformationMatrix(): /* matrix */ Clutter.Matrix
    /**
     * Retrieves the 3D paint volume of an actor like
     * clutter_actor_get_paint_volume() does (Please refer to the
     * documentation of clutter_actor_get_paint_volume() for more
     * details.) and it additionally transforms the paint volume into the
     * coordinate space of `relative_to_ancestor`. (Or the stage if %NULL
     * is passed for `relative_to_ancestor)`
     * 
     * This can be used by containers that base their paint volume on
     * the volume of their children. Such containers can query the
     * transformed paint volume of all of its children and union them
     * together using clutter_paint_volume_union().
     * @param relativeToAncestor A #ClutterActor that is an ancestor of `self`    (or %NULL for the stage)
     */
    getTransformedPaintVolume(relativeToAncestor: Clutter.Actor): Clutter.PaintVolume
    /**
     * Gets the absolute position of an actor, in pixels relative to the stage.
     */
    getTransformedPosition(): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the absolute size of an actor in pixels, taking into account the
     * scaling factors.
     * 
     * If the actor has a valid allocation, the allocated size will be used.
     * If the actor has not a valid allocation then the preferred size will
     * be transformed and returned.
     * 
     * If you want the transformed allocation, see
     * clutter_actor_get_abs_allocation_vertices() instead.
     * 
     * When the actor (or one of its ancestors) is rotated around the
     * X or Y axis, it no longer appears as on the stage as a rectangle, but
     * as a generic quadrangle; in that case this function returns the size
     * of the smallest rectangle that encapsulates the entire quad. Please
     * note that in this case no assumptions can be made about the relative
     * position of this envelope to the absolute position of the actor, as
     * returned by clutter_actor_get_transformed_position(); if you need this
     * information, you need to use clutter_actor_get_abs_allocation_vertices()
     * to get the coords of the actual quadrangle.
     */
    getTransformedSize(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Retrieves the #ClutterTransition of a #ClutterActor by using the
     * transition `name`.
     * 
     * Transitions created for animatable properties use the name of the
     * property itself, for instance the code below:
     * 
     * 
     * ```c
     *   clutter_actor_set_easing_duration (actor, 1000);
     *   clutter_actor_set_rotation (actor, CLUTTER_Y_AXIS, 360.0, x, y, z);
     * 
     *   transition = clutter_actor_get_transition (actor, "rotation-angle-y");
     *   g_signal_connect (transition, "stopped",
     *                     G_CALLBACK (on_transition_stopped),
     *                     actor);
     * ```
     * 
     * 
     * will call the `on_transition_stopped` callback when the transition
     * is finished.
     * 
     * If you just want to get notifications of the completion of a transition,
     * you should use the #ClutterActor::transition-stopped signal, using the
     * transition name as the signal detail.
     * @param name the name of the transition
     */
    getTransition(name: string): Clutter.Transition
    /**
     * Retrieves the translation set using clutter_actor_set_translation().
     */
    getTranslation(): [ /* translateX */ number | null, /* translateY */ number | null, /* translateZ */ number | null ]
    /**
     * Retrieves the width of a #ClutterActor.
     * 
     * If the actor has a valid allocation, this function will return the
     * width of the allocated area given to the actor.
     * 
     * If the actor does not have a valid allocation, this function will
     * return the actor's natural width, that is the preferred width of
     * the actor.
     * 
     * If you care whether you get the preferred width or the width that
     * has been assigned to the actor, you should probably call a different
     * function like clutter_actor_get_allocation_box() to retrieve the
     * allocated size or clutter_actor_get_preferred_width() to retrieve the
     * preferred width.
     * 
     * If an actor has a fixed width, for instance a width that has been
     * assigned using clutter_actor_set_width(), the width returned will
     * be the same value.
     */
    getWidth(): number
    /**
     * Retrieves the X coordinate of a #ClutterActor.
     * 
     * This function tries to "do what you mean", by returning the
     * correct value depending on the actor's state.
     * 
     * If the actor has a valid allocation, this function will return
     * the X coordinate of the origin of the allocation box.
     * 
     * If the actor has any fixed coordinate set using clutter_actor_set_x(),
     * clutter_actor_set_position() or clutter_actor_set_geometry(), this
     * function will return that coordinate.
     * 
     * If both the allocation and a fixed position are missing, this function
     * will return 0.
     */
    getX(): number
    /**
     * Retrieves the horizontal alignment policy set using
     * clutter_actor_set_x_align().
     */
    getXAlign(): Clutter.ActorAlign
    /**
     * Retrieves the value set with clutter_actor_set_x_expand().
     * 
     * See also: clutter_actor_needs_expand()
     */
    getXExpand(): boolean
    /**
     * Retrieves the Y coordinate of a #ClutterActor.
     * 
     * This function tries to "do what you mean", by returning the
     * correct value depending on the actor's state.
     * 
     * If the actor has a valid allocation, this function will return
     * the Y coordinate of the origin of the allocation box.
     * 
     * If the actor has any fixed coordinate set using clutter_actor_set_y(),
     * clutter_actor_set_position() or clutter_actor_set_geometry(), this
     * function will return that coordinate.
     * 
     * If both the allocation and a fixed position are missing, this function
     * will return 0.
     */
    getY(): number
    /**
     * Retrieves the vertical alignment policy set using
     * clutter_actor_set_y_align().
     */
    getYAlign(): Clutter.ActorAlign
    /**
     * Retrieves the value set with clutter_actor_set_y_expand().
     * 
     * See also: clutter_actor_needs_expand()
     */
    getYExpand(): boolean
    /**
     * Retrieves the actor's position on the Z axis.
     */
    getZPosition(): number
    /**
     * Retrieves the center for the rotation around the Z axis as a
     * compass direction. If the center was specified in pixels or units
     * this will return %CLUTTER_GRAVITY_NONE.
     */
    getZRotationGravity(): Clutter.Gravity
    /**
     * Sets the key focus of the #ClutterStage including `self`
     * to this #ClutterActor.
     */
    grabKeyFocus(): void
    /**
     * Returns whether the actor has any actions applied.
     */
    hasActions(): boolean
    /**
     * Checks if the actor has an up-to-date allocation assigned to
     * it. This means that the actor should have an allocation: it's
     * visible and has a parent. It also means that there is no
     * outstanding relayout request in progress for the actor or its
     * children (There might be other outstanding layout requests in
     * progress that will cause the actor to get a new allocation
     * when the stage is laid out, however).
     * 
     * If this function returns %FALSE, then the actor will normally
     * be allocated before it is next drawn on the screen.
     */
    hasAllocation(): boolean
    /**
     * Returns whether the actor has any constraints applied.
     */
    hasConstraints(): boolean
    /**
     * Returns whether the actor has any effects applied.
     */
    hasEffects(): boolean
    /**
     * Checks whether `self` is the #ClutterActor that has key focus
     */
    hasKeyFocus(): boolean
    /**
     * Asks the actor's implementation whether it may contain overlapping
     * primitives.
     * 
     * For example; Clutter may use this to determine whether the painting
     * should be redirected to an offscreen buffer to correctly implement
     * the opacity property.
     * 
     * Custom actors can override the default response by implementing the
     * #ClutterActorClass.has_overlaps() virtual function. See
     * clutter_actor_set_offscreen_redirect() for more information.
     */
    hasOverlaps(): boolean
    /**
     * Flags an actor to be hidden. A hidden actor will not be
     * rendered on the stage.
     * 
     * Actors are visible by default.
     * 
     * If this function is called on an actor without a parent, the
     * #ClutterActor:show-on-set-parent property will be set to %FALSE
     * as a side-effect.
     */
    hide(): void
    /**
     * Calls clutter_actor_hide() on all child actors (if any).
     */
    hideAll(): void
    /**
     * Inserts `child` into the list of children of `self,` above another
     * child of `self` or, if `sibling` is %NULL, above all the children
     * of `self`.
     * 
     * This function will acquire a reference on `child` that will only
     * be released when calling clutter_actor_remove_child().
     * 
     * This function will not take into consideration the #ClutterActor:depth
     * of `child`.
     * 
     * This function will emit the #ClutterContainer::actor-added signal
     * on `self`.
     * @param child a #ClutterActor
     * @param sibling a child of `self,` or %NULL
     */
    insertChildAbove(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    /**
     * Inserts `child` into the list of children of `self,` using the
     * given `index_`. If `index_` is greater than the number of children
     * in `self,` or is less than 0, then the new child is added at the end.
     * 
     * This function will acquire a reference on `child` that will only
     * be released when calling clutter_actor_remove_child().
     * 
     * This function will not take into consideration the #ClutterActor:depth
     * of `child`.
     * 
     * This function will emit the #ClutterContainer::actor-added signal
     * on `self`.
     * @param child a #ClutterActor
     * @param index the index
     */
    insertChildAtIndex(child: Clutter.Actor, index: number): void
    /**
     * Inserts `child` into the list of children of `self,` below another
     * child of `self` or, if `sibling` is %NULL, below all the children
     * of `self`.
     * 
     * This function will acquire a reference on `child` that will only
     * be released when calling clutter_actor_remove_child().
     * 
     * This function will not take into consideration the #ClutterActor:depth
     * of `child`.
     * 
     * This function will emit the #ClutterContainer::actor-added signal
     * on `self`.
     * @param child a #ClutterActor
     * @param sibling a child of `self,` or %NULL
     */
    insertChildBelow(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    /**
     * Checks whether `self` is being currently painted by a #ClutterClone
     * 
     * This function is useful only inside the ::paint virtual function
     * implementations or within handlers for the #ClutterActor::paint
     * signal
     * 
     * This function should not be used by applications
     */
    isInClonePaint(): boolean
    /**
     * Checks whether a #ClutterActor has been set as mapped.
     * 
     * See also %CLUTTER_ACTOR_IS_MAPPED and #ClutterActor:mapped
     */
    isMapped(): boolean
    /**
     * Checks whether a #ClutterActor is realized.
     * 
     * See also %CLUTTER_ACTOR_IS_REALIZED and #ClutterActor:realized.
     */
    isRealized(): boolean
    /**
     * Checks whether any rotation is applied to the actor.
     */
    isRotated(): boolean
    /**
     * Checks whether the actor is scaled in either dimension.
     */
    isScaled(): boolean
    /**
     * Checks whether an actor is marked as visible.
     * 
     * See also %CLUTTER_ACTOR_IS_VISIBLE and #ClutterActor:visible.
     */
    isVisible(): boolean
    /**
     * Puts `self` below `above`.
     * 
     * Both actors must have the same parent, and the parent must implement
     * the #ClutterContainer interface.
     * 
     * This function calls clutter_container_lower_child() internally.
     * @param above A #ClutterActor to lower below
     */
    lower(above?: Clutter.Actor | null): void
    /**
     * Lowers `self` to the bottom.
     * 
     * This function calls clutter_actor_lower() internally.
     */
    lowerBottom(): void
    /**
     * Sets the %CLUTTER_ACTOR_MAPPED flag on the actor and possibly maps
     * and realizes its children if they are visible. Does nothing if the
     * actor is not visible.
     * 
     * Calling this function is strongly disencouraged: the default
     * implementation of #ClutterActorClass.map() will map all the children
     * of an actor when mapping its parent.
     * 
     * When overriding map, it is mandatory to chain up to the parent
     * implementation.
     */
    map(): void
    /**
     * Sets an anchor point for the actor, and adjusts the actor postion so that
     * the relative position of the actor toward its parent remains the same.
     * @param anchorX X coordinate of the anchor point
     * @param anchorY Y coordinate of the anchor point
     */
    moveAnchorPoint(anchorX: number, anchorY: number): void
    /**
     * Sets an anchor point on the actor based on the given gravity, adjusting the
     * actor postion so that its relative position within its parent remains
     * unchanged.
     * 
     * Since version 1.0 the anchor point will be stored as a gravity so
     * that if the actor changes size then the anchor point will move. For
     * example, if you set the anchor point to %CLUTTER_GRAVITY_SOUTH_EAST
     * and later double the size of the actor, the anchor point will move
     * to the bottom right.
     * @param gravity #ClutterGravity.
     */
    moveAnchorPointFromGravity(gravity: Clutter.Gravity): void
    /**
     * Moves an actor by the specified distance relative to its current
     * position in pixels.
     * 
     * This function modifies the fixed position of an actor and thus removes
     * it from any layout management. Another way to move an actor is with an
     * anchor point, see clutter_actor_set_anchor_point(), or with an additional
     * translation, using clutter_actor_set_translation().
     * @param dx Distance to move Actor on X axis.
     * @param dy Distance to move Actor on Y axis.
     */
    moveBy(dx: number, dy: number): void
    /**
     * Checks whether an actor, or any of its children, is set to expand
     * horizontally or vertically.
     * 
     * This function should only be called by layout managers that can
     * assign extra space to their children.
     * 
     * If you want to know whether the actor was explicitly set to expand,
     * use clutter_actor_get_x_expand() or clutter_actor_get_y_expand().
     * @param orientation the direction of expansion
     */
    needsExpand(orientation: Clutter.Orientation): boolean
    /**
     * Renders the actor to display.
     * 
     * This function should not be called directly by applications.
     * Call clutter_actor_queue_redraw() to queue paints, instead.
     * 
     * This function is context-aware, and will either cause a
     * regular paint or a pick paint.
     * 
     * This function will emit the #ClutterActor::paint signal or
     * the #ClutterActor::pick signal, depending on the context.
     * 
     * This function does not paint the actor if the actor is set to 0,
     * unless it is performing a pick paint.
     */
    paint(): void
    /**
     * Disables the effects of clutter_actor_push_internal().
     */
    popInternal(): void
    /**
     * Should be used by actors implementing the #ClutterContainer and with
     * internal children added through clutter_actor_set_parent(), for instance:
     * 
     * 
     * ```c
     *   static void
     *   my_actor_init (MyActor *self)
     *   {
     *     self->priv = my_actor_get_instance_private (self);
     * 
     *     clutter_actor_push_internal (CLUTTER_ACTOR (self));
     * 
     *     // calling clutter_actor_set_parent() now will result in
     *     // the internal flag being set on a child of MyActor
     * 
     *     // internal child - a background texture
     *     self->priv->background_tex = clutter_texture_new ();
     *     clutter_actor_set_parent (self->priv->background_tex,
     *                               CLUTTER_ACTOR (self));
     * 
     *     // internal child - a label
     *     self->priv->label = clutter_text_new ();
     *     clutter_actor_set_parent (self->priv->label,
     *                               CLUTTER_ACTOR (self));
     * 
     *     clutter_actor_pop_internal (CLUTTER_ACTOR (self));
     * 
     *     // calling clutter_actor_set_parent() now will not result in
     *     // the internal flag being set on a child of MyActor
     *   }
     * ```
     * 
     * 
     * This function will be used by Clutter to toggle an "internal child"
     * flag whenever clutter_actor_set_parent() is called; internal children
     * are handled differently by Clutter, specifically when destroying their
     * parent.
     * 
     * Call clutter_actor_pop_internal() when you finished adding internal
     * children.
     * 
     * Nested calls to clutter_actor_push_internal() are allowed, but each
     * one must by followed by a clutter_actor_pop_internal() call.
     */
    pushInternal(): void
    /**
     * Queues up a redraw of an actor and any children. The redraw occurs
     * once the main loop becomes idle (after the current batch of events
     * has been processed, roughly).
     * 
     * Applications rarely need to call this, as redraws are handled
     * automatically by modification functions.
     * 
     * This function will not do anything if `self` is not visible, or
     * if the actor is inside an invisible part of the scenegraph.
     * 
     * Also be aware that painting is a NOP for actors with an opacity of
     * 0
     * 
     * When you are implementing a custom actor you must queue a redraw
     * whenever some private state changes that will affect painting or
     * picking of your actor.
     */
    queueRedraw(): void
    /**
     * Queues a redraw on `self` limited to a specific, actor-relative
     * rectangular area.
     * 
     * If `clip` is %NULL this function is equivalent to
     * clutter_actor_queue_redraw().
     * @param clip a rectangular clip region, or %NULL
     */
    queueRedrawWithClip(clip?: cairo.RectangleInt | null): void
    /**
     * Indicates that the actor's size request or other layout-affecting
     * properties may have changed. This function is used inside #ClutterActor
     * subclass implementations, not by applications directly.
     * 
     * Queueing a new layout automatically queues a redraw as well.
     */
    queueRelayout(): void
    /**
     * Puts `self` above `below`.
     * 
     * Both actors must have the same parent, and the parent must implement
     * the #ClutterContainer interface
     * 
     * This function calls clutter_container_raise_child() internally.
     * @param below A #ClutterActor to raise above.
     */
    raise(below?: Clutter.Actor | null): void
    /**
     * Raises `self` to the top.
     * 
     * This function calls clutter_actor_raise() internally.
     */
    raiseTop(): void
    /**
     * Realization informs the actor that it is attached to a stage. It
     * can use this to allocate resources if it wanted to delay allocation
     * until it would be rendered. However it is perfectly acceptable for
     * an actor to create resources before being realized because Clutter
     * only ever has a single rendering context so that actor is free to
     * be moved from one stage to another.
     * 
     * This function does nothing if the actor is already realized.
     * 
     * Because a realized actor must have realized parent actors, calling
     * clutter_actor_realize() will also realize all parents of the actor.
     * 
     * This function does not realize child actors, except in the special
     * case that realizing the stage, when the stage is visible, will
     * suddenly map (and thus realize) the children of the stage.
     */
    realize(): void
    /**
     * Removes `action` from the list of actions applied to `self`
     * 
     * The reference held by `self` on the #ClutterAction will be released
     * @param action a #ClutterAction
     */
    removeAction(action: Clutter.Action): void
    /**
     * Removes the #ClutterAction with the given name from the list
     * of actions applied to `self`
     * @param name the name of the action to remove
     */
    removeActionByName(name: string): void
    /**
     * Removes all children of `self`.
     * 
     * This function releases the reference added by inserting a child actor
     * in the list of children of `self`.
     * 
     * If the reference count of a child drops to zero, the child will be
     * destroyed. If you want to ensure the destruction of all the children
     * of `self,` use clutter_actor_destroy_all_children().
     */
    removeAllChildren(): void
    /**
     * Removes all transitions associated to `self`.
     */
    removeAllTransitions(): void
    /**
     * Removes `child` from the children of `self`.
     * 
     * This function will release the reference added by
     * clutter_actor_add_child(), so if you want to keep using `child`
     * you will have to acquire a referenced on it before calling this
     * function.
     * 
     * This function will emit the #ClutterContainer::actor-removed
     * signal on `self`.
     * @param child a #ClutterActor
     */
    removeChild(child: Clutter.Actor): void
    /**
     * Removes clip area from `self`.
     */
    removeClip(): void
    /**
     * Removes `constraint` from the list of constraints applied to `self`
     * 
     * The reference held by `self` on the #ClutterConstraint will be released
     * @param constraint a #ClutterConstraint
     */
    removeConstraint(constraint: Clutter.Constraint): void
    /**
     * Removes the #ClutterConstraint with the given name from the list
     * of constraints applied to `self`
     * @param name the name of the constraint to remove
     */
    removeConstraintByName(name: string): void
    /**
     * Removes `effect` from the list of effects applied to `self`
     * 
     * The reference held by `self` on the #ClutterEffect will be released
     * @param effect a #ClutterEffect
     */
    removeEffect(effect: Clutter.Effect): void
    /**
     * Removes the #ClutterEffect with the given name from the list
     * of effects applied to `self`
     * @param name the name of the effect to remove
     */
    removeEffectByName(name: string): void
    /**
     * Removes the transition stored inside a #ClutterActor using `name`
     * identifier.
     * 
     * If the transition is currently in progress, it will be stopped.
     * 
     * This function releases the reference acquired when the transition
     * was added to the #ClutterActor.
     * @param name the name of the transition to remove
     */
    removeTransition(name: string): void
    /**
     * Resets the parent actor of `self`.
     * 
     * This function is logically equivalent to calling clutter_actor_unparent()
     * and clutter_actor_set_parent(), but more efficiently implemented, as it
     * ensures the child is not finalized when unparented, and emits the
     * #ClutterActor::parent-set signal only once.
     * 
     * In reality, calling this function is less useful than it sounds, as some
     * application code may rely on changes in the intermediate state between
     * removal and addition of the actor from its old parent to the `new_parent`.
     * Thus, it is strongly encouraged to avoid using this function in application
     * code.
     * @param newParent the new #ClutterActor parent
     */
    reparent(newParent: Clutter.Actor): void
    /**
     * Replaces `old_child` with `new_child` in the list of children of `self`.
     * @param oldChild the child of `self` to replace
     * @param newChild the #ClutterActor to replace `old_child`
     */
    replaceChild(oldChild: Clutter.Actor, newChild: Clutter.Actor): void
    /**
     * Restores the easing state as it was prior to a call to
     * clutter_actor_save_easing_state().
     */
    restoreEasingState(): void
    /**
     * Saves the current easing state for animatable properties, and creates
     * a new state with the default values for easing mode and duration.
     * 
     * New transitions created after calling this function will inherit the
     * duration, easing mode, and delay of the new easing state; this also
     * applies to transitions modified in flight.
     */
    saveEasingState(): void
    /**
     * Stores the allocation of `self` as defined by `box`.
     * 
     * This function can only be called from within the implementation of
     * the #ClutterActorClass.allocate() virtual function.
     * 
     * The allocation should have been adjusted to take into account constraints,
     * alignment, and margin properties. If you are implementing a #ClutterActor
     * subclass that provides its own layout management policy for its children
     * instead of using a #ClutterLayoutManager delegate, you should not call
     * this function on the children of `self;` instead, you should call
     * clutter_actor_allocate(), which will adjust the allocation box for
     * you.
     * 
     * This function should only be used by subclasses of #ClutterActor
     * that wish to store their allocation but cannot chain up to the
     * parent's implementation; the default implementation of the
     * #ClutterActorClass.allocate() virtual function will call this
     * function.
     * 
     * It is important to note that, while chaining up was the recommended
     * behaviour for #ClutterActor subclasses prior to the introduction of
     * this function, it is recommended to call clutter_actor_set_allocation()
     * instead.
     * 
     * If the #ClutterActor is using a #ClutterLayoutManager delegate object
     * to handle the allocation of its children, this function will call
     * the clutter_layout_manager_allocate() function only if the
     * %CLUTTER_DELEGATE_LAYOUT flag is set on `flags,` otherwise it is
     * expected that the subclass will call clutter_layout_manager_allocate()
     * by itself. For instance, the following code:
     * 
     * 
     * ```c
     * static void
     * my_actor_allocate (ClutterActor *actor,
     *                    const ClutterActorBox *allocation,
     *                    ClutterAllocationFlags flags)
     * {
     *   ClutterActorBox new_alloc;
     *   ClutterAllocationFlags new_flags;
     * 
     *   adjust_allocation (allocation, &new_alloc);
     * 
     *   new_flags = flags | CLUTTER_DELEGATE_LAYOUT;
     * 
     *   // this will use the layout manager set on the actor
     *   clutter_actor_set_allocation (actor, &new_alloc, new_flags);
     * }
     * ```
     * 
     * 
     * is equivalent to this:
     * 
     * 
     * ```c
     * static void
     * my_actor_allocate (ClutterActor *actor,
     *                    const ClutterActorBox *allocation,
     *                    ClutterAllocationFlags flags)
     * {
     *   ClutterLayoutManager *layout;
     *   ClutterActorBox new_alloc;
     * 
     *   adjust_allocation (allocation, &new_alloc);
     * 
     *   clutter_actor_set_allocation (actor, &new_alloc, flags);
     * 
     *   layout = clutter_actor_get_layout_manager (actor);
     *   clutter_layout_manager_allocate (layout,
     *                                    CLUTTER_CONTAINER (actor),
     *                                    &new_alloc,
     *                                    flags);
     * }
     * ```
     * 
     * @param box a #ClutterActorBox
     * @param flags allocation flags
     */
    setAllocation(box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    /**
     * Sets an anchor point for `self`. The anchor point is a point in the
     * coordinate space of an actor to which the actor position within its
     * parent is relative; the default is (0, 0), i.e. the top-left corner
     * of the actor.
     * @param anchorX X coordinate of the anchor point
     * @param anchorY Y coordinate of the anchor point
     */
    setAnchorPoint(anchorX: number, anchorY: number): void
    /**
     * Sets an anchor point on the actor, based on the given gravity (this is a
     * convenience function wrapping clutter_actor_set_anchor_point()).
     * 
     * Since version 1.0 the anchor point will be stored as a gravity so
     * that if the actor changes size then the anchor point will move. For
     * example, if you set the anchor point to %CLUTTER_GRAVITY_SOUTH_EAST
     * and later double the size of the actor, the anchor point will move
     * to the bottom right.
     * @param gravity #ClutterGravity.
     */
    setAnchorPointFromGravity(gravity: Clutter.Gravity): void
    /**
     * Sets the background color of a #ClutterActor.
     * 
     * The background color will be used to cover the whole allocation of the
     * actor. The default background color of an actor is transparent.
     * 
     * To check whether an actor has a background color, you can use the
     * #ClutterActor:background-color-set actor property.
     * 
     * The #ClutterActor:background-color property is animatable.
     * @param color a #ClutterColor, or %NULL to unset a previously  set color
     */
    setBackgroundColor(color?: Clutter.Color | null): void
    /**
     * Sets `child` to be above `sibling` in the list of children of `self`.
     * 
     * If `sibling` is %NULL, `child` will be the new last child of `self`.
     * 
     * This function is logically equivalent to removing `child` and using
     * clutter_actor_insert_child_above(), but it will not emit signals
     * or change state on `child`.
     * @param child a #ClutterActor child of `self`
     * @param sibling a #ClutterActor child of `self,` or %NULL
     */
    setChildAboveSibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    /**
     * Changes the index of `child` in the list of children of `self`.
     * 
     * This function is logically equivalent to removing `child` and
     * calling clutter_actor_insert_child_at_index(), but it will not
     * emit signals or change state on `child`.
     * @param child a #ClutterActor child of `self`
     * @param index the new index for `child`
     */
    setChildAtIndex(child: Clutter.Actor, index: number): void
    /**
     * Sets `child` to be below `sibling` in the list of children of `self`.
     * 
     * If `sibling` is %NULL, `child` will be the new first child of `self`.
     * 
     * This function is logically equivalent to removing `self` and using
     * clutter_actor_insert_child_below(), but it will not emit signals
     * or change state on `child`.
     * @param child a #ClutterActor child of `self`
     * @param sibling a #ClutterActor child of `self,` or %NULL
     */
    setChildBelowSibling(child: Clutter.Actor, sibling?: Clutter.Actor | null): void
    /**
     * Sets the transformation matrix to be applied to all the children
     * of `self` prior to their own transformations. The default child
     * transformation is the identity matrix.
     * 
     * If `transform` is %NULL, the child transform will be unset.
     * 
     * The #ClutterActor:child-transform property is animatable.
     * @param transform a #ClutterMatrix, or %NULL
     */
    setChildTransform(transform?: Clutter.Matrix | null): void
    /**
     * Sets clip area for `self`. The clip area is always computed from the
     * upper left corner of the actor, even if the anchor point is set
     * otherwise.
     * @param xoff X offset of the clip rectangle
     * @param yoff Y offset of the clip rectangle
     * @param width Width of the clip rectangle
     * @param height Height of the clip rectangle
     */
    setClip(xoff: number, yoff: number, width: number, height: number): void
    /**
     * Sets whether `self` should be clipped to the same size as its
     * allocation
     * @param clipSet %TRUE to apply a clip tracking the allocation
     */
    setClipToAllocation(clipSet: boolean): void
    /**
     * Sets the contents of a #ClutterActor.
     * @param content a #ClutterContent, or %NULL
     */
    setContent(content?: Clutter.Content | null): void
    /**
     * Sets the gravity of the #ClutterContent used by `self`.
     * 
     * See the description of the #ClutterActor:content-gravity property for
     * more information.
     * 
     * The #ClutterActor:content-gravity property is animatable.
     * @param gravity the #ClutterContentGravity
     */
    setContentGravity(gravity: Clutter.ContentGravity): void
    /**
     * Sets the policy for repeating the #ClutterActor:content of a
     * #ClutterActor. The behaviour is deferred to the #ClutterContent
     * implementation.
     * @param repeat the repeat policy
     */
    setContentRepeat(repeat: Clutter.ContentRepeat): void
    /**
     * Sets the minification and magnification filter to be applied when
     * scaling the #ClutterActor:content of a #ClutterActor.
     * 
     * The #ClutterActor:minification-filter will be used when reducing
     * the size of the content; the #ClutterActor:magnification-filter
     * will be used when increasing the size of the content.
     * @param minFilter the minification filter for the content
     * @param magFilter the magnification filter for the content
     */
    setContentScalingFilters(minFilter: Clutter.ScalingFilter, magFilter: Clutter.ScalingFilter): void
    /**
     * Sets the Z coordinate of `self` to `depth`.
     * 
     * The unit used by `depth` is dependant on the perspective setup. See
     * also clutter_stage_set_perspective().
     * @param depth Z co-ord
     */
    setDepth(depth: number): void
    /**
     * Sets the delay that should be applied before tweening animatable
     * properties.
     * @param msecs the delay before the start of the tweening, in milliseconds
     */
    setEasingDelay(msecs: number): void
    /**
     * Sets the duration of the tweening for animatable properties
     * of `self` for the current easing state.
     * @param msecs the duration of the easing, or %NULL
     */
    setEasingDuration(msecs: number): void
    /**
     * Sets the easing mode for the tweening of animatable properties
     * of `self`.
     * @param mode an easing mode, excluding %CLUTTER_CUSTOM_MODE
     */
    setEasingMode(mode: Clutter.AnimationMode): void
    /**
     * Sets whether an actor has a fixed position set (and will thus be
     * unaffected by any layout manager).
     * @param isSet whether to use fixed position
     */
    setFixedPositionSet(isSet: boolean): void
    /**
     * Sets `flags` on `self`
     * 
     * This function will emit notifications for the changed properties
     * @param flags the flags to set
     */
    setFlags(flags: Clutter.ActorFlags): void
    /**
     * Sets the actor's fixed position and forces its minimum and natural
     * size, in pixels. This means the untransformed actor will have the
     * given geometry. This is the same as calling clutter_actor_set_position()
     * and clutter_actor_set_size().
     * @param geometry A #ClutterGeometry
     */
    setGeometry(geometry: Clutter.Geometry): void
    /**
     * Forces a height on an actor, causing the actor's preferred width
     * and height (if any) to be ignored.
     * 
     * If `height` is -1 the actor will use its preferred height instead of
     * overriding it, i.e. you can "unset" the height with -1.
     * 
     * This function sets both the minimum and natural size of the actor.
     * @param height Requested new height for the actor, in pixels, or -1
     */
    setHeight(height: number): void
    /**
     * Sets the #ClutterLayoutManager delegate object that will be used to
     * lay out the children of `self`.
     * 
     * The #ClutterActor will take a reference on the passed `manager` which
     * will be released either when the layout manager is removed, or when
     * the actor is destroyed.
     * @param manager a #ClutterLayoutManager, or %NULL to unset it
     */
    setLayoutManager(manager?: Clutter.LayoutManager | null): void
    /**
     * Sets all the components of the margin of a #ClutterActor.
     * @param margin a #ClutterMargin
     */
    setMargin(margin: Clutter.Margin): void
    /**
     * Sets the margin from the bottom of a #ClutterActor.
     * 
     * The #ClutterActor:margin-bottom property is animatable.
     * @param margin the bottom margin
     */
    setMarginBottom(margin: number): void
    /**
     * Sets the margin from the left of a #ClutterActor.
     * 
     * The #ClutterActor:margin-left property is animatable.
     * @param margin the left margin
     */
    setMarginLeft(margin: number): void
    /**
     * Sets the margin from the right of a #ClutterActor.
     * 
     * The #ClutterActor:margin-right property is animatable.
     * @param margin the right margin
     */
    setMarginRight(margin: number): void
    /**
     * Sets the margin from the top of a #ClutterActor.
     * 
     * The #ClutterActor:margin-top property is animatable.
     * @param margin the top margin
     */
    setMarginTop(margin: number): void
    /**
     * Sets the given name to `self`. The name can be used to identify
     * a #ClutterActor.
     * @param name Textual tag to apply to actor
     */
    setName(name: string): void
    /**
     * Defines the circumstances where the actor should be redirected into
     * an offscreen image. The offscreen image is used to flatten the
     * actor into a single image while painting for two main reasons.
     * Firstly, when the actor is painted a second time without any of its
     * contents changing it can simply repaint the cached image without
     * descending further down the actor hierarchy. Secondly, it will make
     * the opacity look correct even if there are overlapping primitives
     * in the actor.
     * 
     * Caching the actor could in some cases be a performance win and in
     * some cases be a performance lose so it is important to determine
     * which value is right for an actor before modifying this value. For
     * example, there is never any reason to flatten an actor that is just
     * a single texture (such as a #ClutterTexture) because it is
     * effectively already cached in an image so the offscreen would be
     * redundant. Also if the actor contains primitives that are far apart
     * with a large transparent area in the middle (such as a large
     * CluterGroup with a small actor in the top left and a small actor in
     * the bottom right) then the cached image will contain the entire
     * image of the large area and the paint will waste time blending all
     * of the transparent pixels in the middle.
     * 
     * The default method of implementing opacity on a container simply
     * forwards on the opacity to all of the children. If the children are
     * overlapping then it will appear as if they are two separate glassy
     * objects and there will be a break in the color where they
     * overlap. By redirecting to an offscreen buffer it will be as if the
     * two opaque objects are combined into one and then made transparent
     * which is usually what is expected.
     * 
     * The image below demonstrates the difference between redirecting and
     * not. The image shows two Clutter groups, each containing a red and
     * a green rectangle which overlap. The opacity on the group is set to
     * 128 (which is 50%). When the offscreen redirect is not used, the
     * red rectangle can be seen through the blue rectangle as if the two
     * rectangles were separately transparent. When the redirect is used
     * the group as a whole is transparent instead so the red rectangle is
     * not visible where they overlap.
     * 
     * <figure id="offscreen-redirect">
     *   <title>Sample of using an offscreen redirect for transparency</title>
     *   <graphic fileref="offscreen-redirect.png" format="PNG"/>
     * </figure>
     * 
     * The default value for this property is 0, so we effectively will
     * never redirect an actor offscreen by default. This means that there
     * are times that transparent actors may look glassy as described
     * above. The reason this is the default is because there is a
     * performance trade off between quality and performance here. In many
     * cases the default form of glassy opacity looks good enough, but if
     * it's not you will need to set the
     * %CLUTTER_OFFSCREEN_REDIRECT_AUTOMATIC_FOR_OPACITY flag to enable
     * redirection for opacity.
     * 
     * Custom actors that don't contain any overlapping primitives are
     * recommended to override the has_overlaps() virtual to return %FALSE
     * for maximum efficiency.
     * @param redirect New offscreen redirect flags for the actor.
     */
    setOffscreenRedirect(redirect: Clutter.OffscreenRedirect): void
    /**
     * Sets the actor's opacity, with zero being completely transparent and
     * 255 (0xff) being fully opaque.
     * 
     * The #ClutterActor:opacity property is animatable.
     * @param opacity New opacity value for the actor.
     */
    setOpacity(opacity: number): void
    /**
     * Sets the parent of `self` to `parent`.
     * 
     * This function will result in `parent` acquiring a reference on `self,`
     * eventually by sinking its floating reference first. The reference
     * will be released by clutter_actor_unparent().
     * 
     * This function should only be called by legacy #ClutterActor<!-- -->s
     * implementing the #ClutterContainer interface.
     * @param parent A new #ClutterActor parent
     */
    setParent(parent: Clutter.Actor): void
    /**
     * Sets the position of the #ClutterActor:pivot-point around which the
     * scaling and rotation transformations occur.
     * 
     * The pivot point's coordinates are in normalized space, with the (0, 0)
     * point being the top left corner of the actor, and the (1, 1) point being
     * the bottom right corner.
     * @param pivotX the normalized X coordinate of the pivot point
     * @param pivotY the normalized Y coordinate of the pivot point
     */
    setPivotPoint(pivotX: number, pivotY: number): void
    /**
     * Sets the component on the Z axis of the #ClutterActor:pivot-point around
     * which the scaling and rotation transformations occur.
     * 
     * The `pivot_z` value is expressed as a distance along the Z axis.
     * @param pivotZ the Z coordinate of the actor's pivot point
     */
    setPivotPointZ(pivotZ: number): void
    /**
     * Sets the actor's fixed position in pixels relative to any parent
     * actor.
     * 
     * If a layout manager is in use, this position will override the
     * layout manager and force a fixed position.
     * @param x New left position of actor in pixels.
     * @param y New top position of actor in pixels.
     */
    setPosition(x: number, y: number): void
    /**
     * Sets `actor` as reactive. Reactive actors will receive events.
     * @param reactive whether the actor should be reactive to events
     */
    setReactive(reactive: boolean): void
    /**
     * Sets the geometry request mode of `self`.
     * 
     * The `mode` determines the order for invoking
     * clutter_actor_get_preferred_width() and
     * clutter_actor_get_preferred_height()
     * @param mode the request mode
     */
    setRequestMode(mode: Clutter.RequestMode): void
    /**
     * Sets the rotation angle of `self` around the given axis.
     * 
     * The rotation center coordinates used depend on the value of `axis:`
     * 
     *  - %CLUTTER_X_AXIS requires `y` and `z`
     *  - %CLUTTER_Y_AXIS requires `x` and `z`
     *  - %CLUTTER_Z_AXIS requires `x` and `y`
     * 
     * The rotation coordinates are relative to the anchor point of the
     * actor, set using clutter_actor_set_anchor_point(). If no anchor
     * point is set, the upper left corner is assumed as the origin.
     * @param axis the axis of rotation
     * @param angle the angle of rotation
     * @param x X coordinate of the rotation center
     * @param y Y coordinate of the rotation center
     * @param z Z coordinate of the rotation center
     */
    setRotation(axis: Clutter.RotateAxis, angle: number, x: number, y: number, z: number): void
    /**
     * Sets the `angle` of rotation of a #ClutterActor on the given `axis`.
     * 
     * This function is a convenience for setting the rotation properties
     * #ClutterActor:rotation-angle-x, #ClutterActor:rotation-angle-y,
     * and #ClutterActor:rotation-angle-z.
     * 
     * The center of rotation is established by the #ClutterActor:pivot-point
     * property.
     * @param axis the axis to set the angle one
     * @param angle the angle of rotation, in degrees
     */
    setRotationAngle(axis: Clutter.RotateAxis, angle: number): void
    /**
     * Scales an actor with the given factors.
     * 
     * The scale transformation is relative the the #ClutterActor:pivot-point.
     * 
     * The #ClutterActor:scale-x and #ClutterActor:scale-y properties are
     * animatable.
     * @param scaleX double factor to scale actor by horizontally.
     * @param scaleY double factor to scale actor by vertically.
     */
    setScale(scaleX: number, scaleY: number): void
    /**
     * Scales an actor with the given factors around the given center
     * point. The center point is specified in pixels relative to the
     * anchor point (usually the top left corner of the actor).
     * 
     * The #ClutterActor:scale-x and #ClutterActor:scale-y properties
     * are animatable.
     * @param scaleX double factor to scale actor by horizontally.
     * @param scaleY double factor to scale actor by vertically.
     * @param centerX X coordinate of the center of the scaling
     * @param centerY Y coordinate of the center of the scaling
     */
    setScaleFull(scaleX: number, scaleY: number, centerX: number, centerY: number): void
    /**
     * Scales an actor with the given factors around the given
     * center point. The center point is specified as one of the compass
     * directions in #ClutterGravity. For example, setting it to north
     * will cause the top of the actor to remain unchanged and the rest of
     * the actor to expand left, right and downwards.
     * 
     * The #ClutterActor:scale-x and #ClutterActor:scale-y properties are
     * animatable.
     * @param scaleX double factor to scale actor by horizontally.
     * @param scaleY double factor to scale actor by vertically.
     * @param gravity the location of the scale center expressed as a compass   direction.
     */
    setScaleWithGravity(scaleX: number, scaleY: number, gravity: Clutter.Gravity): void
    /**
     * Scales an actor on the Z axis by the given `scale_z` factor.
     * 
     * The scale transformation is relative the the #ClutterActor:pivot-point.
     * 
     * The #ClutterActor:scale-z property is animatable.
     * @param scaleZ the scaling factor along the Z axis
     */
    setScaleZ(scaleZ: number): void
    /**
     * Sets the #ClutterShader to be used when rendering `self`.
     * 
     * If `shader` is %NULL this function will unset any currently set shader
     * for the actor.
     * 
     * Any #ClutterEffect applied to `self` will take the precedence
     * over the #ClutterShader set using this function.
     * @param shader a #ClutterShader or %NULL to unset the shader.
     */
    setShader(shader?: Clutter.Shader | null): boolean
    /**
     * Sets the value for a named parameter of the shader applied
     * to `actor`.
     * @param param the name of the parameter
     * @param value the value of the parameter
     */
    setShaderParam(param: string, value: any): void
    /**
     * Sets the value for a named float parameter of the shader applied
     * to `actor`.
     * @param param the name of the parameter
     * @param value the value of the parameter
     */
    setShaderParamFloat(param: string, value: number): void
    /**
     * Sets the value for a named int parameter of the shader applied to
     * `actor`.
     * @param param the name of the parameter
     * @param value the value of the parameter
     */
    setShaderParamInt(param: string, value: number): void
    /**
     * Sets the actor's size request in pixels. This overrides any
     * "normal" size request the actor would have. For example
     * a text actor might normally request the size of the text;
     * this function would force a specific size instead.
     * 
     * If `width` and/or `height` are -1 the actor will use its
     * "normal" size request instead of overriding it, i.e.
     * you can "unset" the size with -1.
     * 
     * This function sets or unsets both the minimum and natural size.
     * @param width New width of actor in pixels, or -1
     * @param height New height of actor in pixels, or -1
     */
    setSize(width: number, height: number): void
    /**
     * Sets the #ClutterTextDirection for an actor
     * 
     * The passed text direction must not be %CLUTTER_TEXT_DIRECTION_DEFAULT
     * 
     * If `self` implements #ClutterContainer then this function will recurse
     * inside all the children of `self` (including the internal ones).
     * 
     * Composite actors not implementing #ClutterContainer, or actors requiring
     * special handling when the text direction changes, should connect to
     * the #GObject::notify signal for the #ClutterActor:text-direction property
     * @param textDir the text direction for `self`
     */
    setTextDirection(textDir: Clutter.TextDirection): void
    /**
     * Overrides the transformations of a #ClutterActor with a custom
     * matrix, which will be applied relative to the origin of the
     * actor's allocation and to the actor's pivot point.
     * 
     * The #ClutterActor:transform property is animatable.
     * @param transform a #ClutterMatrix, or %NULL to   unset a custom transformation
     */
    setTransform(transform?: Clutter.Matrix | null): void
    /**
     * Sets an additional translation transformation on a #ClutterActor,
     * relative to the #ClutterActor:pivot-point.
     * @param translateX the translation along the X axis
     * @param translateY the translation along the Y axis
     * @param translateZ the translation along the Z axis
     */
    setTranslation(translateX: number, translateY: number, translateZ: number): void
    /**
     * Forces a width on an actor, causing the actor's preferred width
     * and height (if any) to be ignored.
     * 
     * If `width` is -1 the actor will use its preferred width request
     * instead of overriding it, i.e. you can "unset" the width with -1.
     * 
     * This function sets both the minimum and natural size of the actor.
     * @param width Requested new width for the actor, in pixels, or -1
     */
    setWidth(width: number): void
    /**
     * Sets the actor's X coordinate, relative to its parent, in pixels.
     * 
     * Overrides any layout manager and forces a fixed position for
     * the actor.
     * 
     * The #ClutterActor:x property is animatable.
     * @param x the actor's position on the X axis
     */
    setX(x: number): void
    /**
     * Sets the horizontal alignment policy of a #ClutterActor, in case the
     * actor received extra horizontal space.
     * 
     * See also the #ClutterActor:x-align property.
     * @param xAlign the horizontal alignment policy
     */
    setXAlign(xAlign: Clutter.ActorAlign): void
    /**
     * Sets whether a #ClutterActor should expand horizontally; this means
     * that layout manager should allocate extra space for the actor, if
     * possible.
     * 
     * Setting an actor to expand will also make all its parent expand, so
     * that it's possible to build an actor tree and only set this flag on
     * its leaves and not on every single actor.
     * @param expand whether the actor should expand horizontally
     */
    setXExpand(expand: boolean): void
    /**
     * Sets the actor's Y coordinate, relative to its parent, in pixels.#
     * 
     * Overrides any layout manager and forces a fixed position for
     * the actor.
     * 
     * The #ClutterActor:y property is animatable.
     * @param y the actor's position on the Y axis
     */
    setY(y: number): void
    /**
     * Sets the vertical alignment policy of a #ClutterActor, in case the
     * actor received extra vertical space.
     * 
     * See also the #ClutterActor:y-align property.
     * @param yAlign the vertical alignment policy
     */
    setYAlign(yAlign: Clutter.ActorAlign): void
    /**
     * Sets whether a #ClutterActor should expand horizontally; this means
     * that layout manager should allocate extra space for the actor, if
     * possible.
     * 
     * Setting an actor to expand will also make all its parent expand, so
     * that it's possible to build an actor tree and only set this flag on
     * its leaves and not on every single actor.
     * @param expand whether the actor should expand vertically
     */
    setYExpand(expand: boolean): void
    /**
     * Sets the actor's position on the Z axis.
     * 
     * See #ClutterActor:z-position.
     * @param zPosition the position on the Z axis
     */
    setZPosition(zPosition: number): void
    /**
     * Sets the rotation angle of `self` around the Z axis using the center
     * point specified as a compass point. For example to rotate such that
     * the center of the actor remains static you can use
     * %CLUTTER_GRAVITY_CENTER. If the actor changes size the center point
     * will move accordingly.
     * @param angle the angle of rotation
     * @param gravity the center point of the rotation
     */
    setZRotationFromGravity(angle: number, gravity: Clutter.Gravity): void
    /**
     * Should be called inside the implementation of the
     * #ClutterActor::pick virtual function in order to check whether
     * the actor should paint itself in pick mode or not.
     * 
     * This function should never be called directly by applications.
     */
    shouldPickPaint(): boolean
    /**
     * Flags an actor to be displayed. An actor that isn't shown will not
     * be rendered on the stage.
     * 
     * Actors are visible by default.
     * 
     * If this function is called on an actor without a parent, the
     * #ClutterActor:show-on-set-parent will be set to %TRUE as a side
     * effect.
     */
    show(): void
    /**
     * Calls clutter_actor_show() on all children of an actor (if any).
     */
    showAll(): void
    /**
     * This function translates screen coordinates (`x,` `y)` to
     * coordinates relative to the actor. For example, it can be used to translate
     * screen events from global screen coordinates into actor-local coordinates.
     * 
     * The conversion can fail, notably if the transform stack results in the
     * actor being projected on the screen as a mere line.
     * 
     * The conversion should not be expected to be pixel-perfect due to the
     * nature of the operation. In general the error grows when the skewing
     * of the actor rectangle on screen increases.
     * 
     * This function can be computationally intensive.
     * 
     * This function only works when the allocation is up-to-date, i.e. inside of
     * the #ClutterActorClass.paint() implementation
     * @param x x screen coordinate of the point to unproject
     * @param y y screen coordinate of the point to unproject
     */
    transformStagePoint(x: number, y: number): [ /* returnType */ boolean, /* xOut */ number, /* yOut */ number ]
    /**
     * Unsets the %CLUTTER_ACTOR_MAPPED flag on the actor and possibly
     * unmaps its children if they were mapped.
     * 
     * Calling this function is not encouraged: the default #ClutterActor
     * implementation of #ClutterActorClass.unmap() will also unmap any
     * eventual children by default when their parent is unmapped.
     * 
     * When overriding #ClutterActorClass.unmap(), it is mandatory to
     * chain up to the parent implementation.
     * 
     * It is important to note that the implementation of the
     * #ClutterActorClass.unmap() virtual function may be called after
     * the #ClutterActorClass.destroy() or the #GObjectClass.dispose()
     * implementation, but it is guaranteed to be called before the
     * #GObjectClass.finalize() implementation.
     */
    unmap(): void
    /**
     * Removes the parent of `self`.
     * 
     * This will cause the parent of `self` to release the reference
     * acquired when calling clutter_actor_set_parent(), so if you
     * want to keep `self` you will have to acquire a reference of
     * your own, through g_object_ref().
     * 
     * This function should only be called by legacy #ClutterActor<!-- -->s
     * implementing the #ClutterContainer interface.
     */
    unparent(): void
    /**
     * Unrealization informs the actor that it may be being destroyed or
     * moved to another stage. The actor may want to destroy any
     * underlying graphics resources at this point. However it is
     * perfectly acceptable for it to retain the resources until the actor
     * is destroyed because Clutter only ever uses a single rendering
     * context and all of the graphics resources are valid on any stage.
     * 
     * Because mapped actors must be realized, actors may not be
     * unrealized if they are mapped. This function hides the actor to be
     * sure it isn't mapped, an application-visible side effect that you
     * may not be expecting.
     * 
     * This function should not be called by application code.
     * 
     * This function should not really be in the public API, because
     * there isn't a good reason to call it. ClutterActor will already
     * unrealize things for you when it's important to do so.
     * 
     * If you were using clutter_actor_unrealize() in a dispose
     * implementation, then don't, just chain up to ClutterActor's
     * dispose.
     * 
     * If you were using clutter_actor_unrealize() to implement
     * unrealizing children of your container, then don't, ClutterActor
     * will already take care of that.
     */
    unrealize(): void
    /**
     * Unsets `flags` on `self`
     * 
     * This function will emit notifications for the changed properties
     * @param flags the flags to unset
     */
    unsetFlags(flags: Clutter.ActorFlags): void
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
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    /* Methods of Clutter-1.0.Clutter.Animatable */
    /**
     * Calls the animate_property() virtual function for `animatable`.
     * 
     * The `initial_value` and `final_value` #GValue<!-- -->s must contain
     * the same type; `value` must have been initialized to the same
     * type of `initial_value` and `final_value`.
     * 
     * All implementation of the #ClutterAnimatable interface must
     * implement this function.
     * @param animation a #ClutterAnimation
     * @param propertyName the name of the animated property
     * @param initialValue the initial value of the animation interval
     * @param finalValue the final value of the animation interval
     * @param progress the progress factor
     * @param value return location for the animation value
     */
    animateProperty(animation: Clutter.Animation, propertyName: string, initialValue: any, finalValue: any, progress: number, value: any): boolean
    /**
     * Finds the #GParamSpec for `property_name`
     * @param propertyName the name of the animatable property to find
     */
    findProperty(propertyName: string): GObject.ParamSpec
    /**
     * Retrieves the current state of `property_name` and sets `value` with it
     * @param propertyName the name of the animatable property to retrieve
     * @param value a #GValue initialized to the type of the property to retrieve
     */
    getInitialState(propertyName: string, value: any): void
    /**
     * Asks a #ClutterAnimatable implementation to interpolate a
     * a named property between the initial and final values of
     * a #ClutterInterval, using `progress` as the interpolation
     * value, and store the result inside `value`.
     * 
     * This function should be used for every property animation
     * involving #ClutterAnimatable<!-- -->s.
     * 
     * This function replaces clutter_animatable_animate_property().
     * @param propertyName the name of the property to interpolate
     * @param interval a #ClutterInterval with the animation range
     * @param progress the progress to use to interpolate between the   initial and final values of the `interval`
     */
    interpolateValue(propertyName: string, interval: Clutter.Interval, progress: number): [ /* returnType */ boolean, /* value */ any ]
    /**
     * Sets the current state of `property_name` to `value`
     * @param propertyName the name of the animatable property to set
     * @param value the value of the animatable property to set
     */
    setFinalState(propertyName: string, value: any): void
    /* Methods of Clutter-1.0.Clutter.Container */
    /**
     * Adds a #ClutterActor to `container`. This function will emit the
     * "actor-added" signal. The actor should be parented to
     * `container`. You cannot add a #ClutterActor to more than one
     * #ClutterContainer.
     * 
     * This function will call #ClutterContainerIface.add(), which is a
     * deprecated virtual function. The default implementation will
     * call clutter_actor_add_child().
     * @param actor the first #ClutterActor to add
     */
    addActor(actor: Clutter.Actor): void
    /**
     * Gets a container specific property of a child of `container,` In general,
     * a copy is made of the property contents and the caller is responsible for
     * freeing the memory by calling g_value_unset().
     * 
     * Note that clutter_container_child_set_property() is really intended for
     * language bindings, clutter_container_child_set() is much more convenient
     * for C programming.
     * @param child a #ClutterActor that is a child of `container`.
     * @param property the name of the property to set.
     * @param value the value.
     */
    childGetProperty(child: Clutter.Actor, property: string, value: any): void
    /**
     * Calls the #ClutterContainerIface.child_notify() virtual function
     * of #ClutterContainer. The default implementation will emit the
     * #ClutterContainer::child-notify signal.
     * @param child a #ClutterActor
     * @param pspec a #GParamSpec
     */
    childNotify(child: Clutter.Actor, pspec: GObject.ParamSpec): void
    /**
     * Sets a container-specific property on a child of `container`.
     * @param child a #ClutterActor that is a child of `container`.
     * @param property the name of the property to set.
     * @param value the value.
     */
    childSetProperty(child: Clutter.Actor, property: string, value: any): void
    /**
     * Creates the #ClutterChildMeta wrapping `actor` inside the
     * `container,` if the #ClutterContainerIface::child_meta_type
     * class member is not set to %G_TYPE_INVALID.
     * 
     * This function is only useful when adding a #ClutterActor to
     * a #ClutterContainer implementation outside of the
     * #ClutterContainer::add() virtual function implementation.
     * 
     * Applications should not call this function.
     * @param actor a #ClutterActor
     */
    createChildMeta(actor: Clutter.Actor): void
    /**
     * Destroys the #ClutterChildMeta wrapping `actor` inside the
     * `container,` if any.
     * 
     * This function is only useful when removing a #ClutterActor to
     * a #ClutterContainer implementation outside of the
     * #ClutterContainer::add() virtual function implementation.
     * 
     * Applications should not call this function.
     * @param actor a #ClutterActor
     */
    destroyChildMeta(actor: Clutter.Actor): void
    /**
     * Finds a child actor of a container by its name. Search recurses
     * into any child container.
     * @param childName the name of the requested child.
     */
    findChildByName(childName: string): Clutter.Actor
    /**
     * Calls `callback` for each child of `container` that was added
     * by the application (with clutter_container_add_actor()). Does
     * not iterate over "internal" children that are part of the
     * container's own implementation, if any.
     * 
     * This function calls the #ClutterContainerIface.foreach()
     * virtual function, which has been deprecated.
     * @param callback a function to be called for each child
     */
    foreach(callback: Clutter.Callback): void
    /**
     * Calls `callback` for each child of `container,` including "internal"
     * children built in to the container itself that were never added
     * by the application.
     * 
     * This function calls the #ClutterContainerIface.foreach_with_internals()
     * virtual function, which has been deprecated.
     * @param callback a function to be called for each child
     */
    foreachWithInternals(callback: Clutter.Callback): void
    /**
     * Retrieves the #ClutterChildMeta which contains the data about the
     * `container` specific state for `actor`.
     * @param actor a #ClutterActor that is a child of `container`.
     */
    getChildMeta(actor: Clutter.Actor): Clutter.ChildMeta
    /**
     * Lowers `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.lower() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_below_sibling().
     * @param actor the actor to raise
     * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
     */
    lowerChild(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    /**
     * Raises `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.raise() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_above_sibling().
     * @param actor the actor to raise
     * @param sibling the sibling to raise to, or %NULL to raise   to the top
     */
    raiseChild(actor: Clutter.Actor, sibling?: Clutter.Actor | null): void
    /**
     * Removes `actor` from `container`. The actor should be unparented, so
     * if you want to keep it around you must hold a reference to it
     * yourself, using g_object_ref(). When the actor has been removed,
     * the "actor-removed" signal is emitted by `container`.
     * 
     * This function will call #ClutterContainerIface.remove(), which is a
     * deprecated virtual function. The default implementation will call
     * clutter_actor_remove_child().
     * @param actor a #ClutterActor
     */
    removeActor(actor: Clutter.Actor): void
    /**
     * Sorts a container's children using their depth. This function should not
     * be normally used by applications.
     */
    sortDepthOrder(): void
    /* Methods of Clutter-1.0.Clutter.Media */
    /**
     * Retrieves the playback volume of `media`.
     */
    getAudioVolume(): number
    /**
     * Retrieves the amount of the stream that is buffered.
     */
    getBufferFill(): number
    /**
     * Retrieves whether `media` is seekable or not.
     */
    getCanSeek(): boolean
    /**
     * Retrieves the duration of the media stream that `media` represents.
     */
    getDuration(): number
    /**
     * Retrieves the playing status of `media`.
     */
    getPlaying(): boolean
    /**
     * Retrieves the playback progress of `media`.
     */
    getProgress(): number
    /**
     * Retrieves the font name currently used.
     */
    getSubtitleFontName(): string
    /**
     * Retrieves the URI of the subtitle file in use.
     */
    getSubtitleUri(): string
    /**
     * Retrieves the URI from `media`.
     */
    getUri(): string
    /**
     * Sets the playback volume of `media` to `volume`.
     * @param volume the volume as a double between 0.0 and 1.0
     */
    setAudioVolume(volume: number): void
    /**
     * Sets the source of `media` using a file path.
     * @param filename A filename
     */
    setFilename(filename: string): void
    /**
     * Starts or stops playing of `media`.
     *  
     * The implementation might be asynchronous, so the way to know whether
     * the actual playing state of the `media` is to use the #GObject::notify
     * signal on the #ClutterMedia:playing property and then retrieve the
     * current state with clutter_media_get_playing(). ClutterGstVideoTexture
     * in clutter-gst is an example of such an asynchronous implementation.
     * @param playing %TRUE to start playing
     */
    setPlaying(playing: boolean): void
    /**
     * Sets the playback progress of `media`. The `progress` is
     * a normalized value between 0.0 (begin) and 1.0 (end).
     * @param progress the progress of the playback, between 0.0 and 1.0
     */
    setProgress(progress: number): void
    /**
     * Sets the font used by the subtitle renderer. The `font_name` string must be
     * either %NULL, which means that the default font name of the underlying
     * implementation will be used; or must follow the grammar recognized by
     * pango_font_description_from_string() like:
     * 
     * |[
     *   clutter_media_set_subtitle_font_name (media, "Sans 24pt");
     * ```
     * 
     * @param fontName a font name, or %NULL to set the default font name
     */
    setSubtitleFontName(fontName: string): void
    /**
     * Sets the location of a subtitle file to display while playing `media`.
     * @param uri the URI of a subtitle file
     */
    setSubtitleUri(uri: string): void
    /**
     * Sets the URI of `media` to `uri`.
     * @param uri the URI of the media stream
     */
    setUri(uri: string): void
    /* Methods of Clutter-1.0.Clutter.Scriptable */
    /**
     * Retrieves the id of `scriptable` set using clutter_scriptable_set_id().
     */
    getId(): string
    /**
     * Parses the passed JSON node. The implementation must set the type
     * of the passed #GValue pointer using g_value_init().
     * @param script the #ClutterScript creating the scriptable instance
     * @param value the generic value to be set
     * @param name the name of the node
     * @param node the JSON node to be parsed
     */
    parseCustomNode(script: Clutter.Script, value: any, name: string, node: Json.Node): boolean
    /**
     * Overrides the common properties setting. The underlying virtual
     * function should be used when implementing custom properties.
     * @param script the #ClutterScript creating the scriptable instance
     * @param name the name of the property
     * @param value the value of the property
     */
    setCustomProperty(script: Clutter.Script, name: string, value: any): void
    /**
     * Sets `id_` as the unique Clutter script it for this instance of
     * #ClutterScriptableIface.
     * 
     * This name can be used by user interface designer applications to
     * define a unique name for an object constructable using the UI
     * definition language parsed by #ClutterScript.
     * @param id the #ClutterScript id of the object
     */
    setId(id: string): void
    /* Methods of ClutterGst-2.0.ClutterGst.Player */
    /**
     * Frees the resources created by clutter_gst_player_init(). After
     * clutter_gst_player_deinit() has been called, no other player method can be
     * called on the instance.
     */
    deinit(): void
    /**
     * Get the list of audio streams of the current media.
     */
    getAudioStreams(): string[]
    /**
     * Get the idle state of the pipeline.
     */
    getIdle(): boolean
    /**
     * Whether the player is seeking.
     */
    getInSeek(): boolean
    /**
     * Get the list of subtitles tracks of the current media.
     */
    getSubtitleTracks(): string[]
    /**
     * Initialize a #ClutterGstPlayer instance. You should call this
     * function at the beginning of the init method of the class
     * implementing #ClutterGstPlayer.
     * 
     * When you're finished with the ClutterGstPlayer mixin features (usually in
     * the dispose or finalize vfuncs), call clutter_gst_player_deinit() to
     * desallocate the resources created by clutter_gst_player_init().
     */
    init(): boolean
    /**
     * Set the audio stream to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_player_get_audio_streams().
     * @param index the index of the audio stream
     */
    setAudioStream(index: number): void
    setBufferingMode(mode: BufferingMode): void
    /**
     * Seeking can be done with several trade-offs. Clutter-gst defaults
     * to %CLUTTER_GST_SEEK_FLAG_NONE.
     * @param flags a combination of #ClutterGstSeekFlags
     */
    setSeekFlags(flags: SeekFlags): void
    /**
     * Set the subtitles track to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_player_get_subtitle_tracks().
     * 
     * If `index_` is -1, the subtitles are turned off.
     * @param index the index of the subtitles track
     */
    setSubtitleTrack(index: number): void
    /**
     * Sets the user agent to use when streaming.
     * 
     * When streaming content, you might want to set a custom user agent, eg. to
     * promote your software, make it appear in statistics or because the server
     * requires a special user agent you want to impersonate.
     * @param userAgent the user agent
     */
    setUserAgent(userAgent: string): void
    /* Signals of Clutter-1.0.Clutter.Texture */
    /**
     * The ::load-finished signal is emitted when a texture load has
     * completed. If there was an error during loading, `error` will
     * be set, otherwise it will be %NULL
     * @param error A set error, or %NULL
     */
    connect(sigName: "load-finished", callback: ((error: GLib.Error) => void)): number
    on(sigName: "load-finished", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "load-finished", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "load-finished", callback: (error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "load-finished", error: GLib.Error): void
    /**
     * The ::pixbuf-change signal is emitted each time the pixbuf
     * used by `texture` changes.
     */
    connect(sigName: "pixbuf-change", callback: (() => void)): number
    on(sigName: "pixbuf-change", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pixbuf-change", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pixbuf-change", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "pixbuf-change"): void
    /**
     * The ::size-change signal is emitted each time the size of the
     * pixbuf used by `texture` changes.  The new size is given as
     * argument to the callback.
     * @param width the width of the new texture
     * @param height the height of the new texture
     */
    connect(sigName: "size-change", callback: ((width: number, height: number) => void)): number
    on(sigName: "size-change", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "size-change", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "size-change", callback: (width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "size-change", width: number, height: number): void
    /* Signals of Clutter-1.0.Clutter.Actor */
    /**
     * The ::allocation-changed signal is emitted when the
     * #ClutterActor:allocation property changes. Usually, application
     * code should just use the notifications for the :allocation property
     * but if you want to track the allocation flags as well, for instance
     * to know whether the absolute origin of `actor` changed, then you might
     * want use this signal instead.
     * @param box a #ClutterActorBox with the new allocation
     * @param flags #ClutterAllocationFlags for the allocation
     */
    connect(sigName: "allocation-changed", callback: ((box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void)): number
    on(sigName: "allocation-changed", callback: (box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "allocation-changed", callback: (box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "allocation-changed", callback: (box: Clutter.ActorBox, flags: Clutter.AllocationFlags) => void): NodeJS.EventEmitter
    emit(sigName: "allocation-changed", box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void
    /**
     * The ::button-press-event signal is emitted each time a mouse button
     * is pressed on `actor`.
     * @param event a #ClutterButtonEvent
     */
    connect(sigName: "button-press-event", callback: ((event: Clutter.ButtonEvent) => boolean)): number
    on(sigName: "button-press-event", callback: (event: Clutter.ButtonEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-press-event", callback: (event: Clutter.ButtonEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-press-event", callback: (event: Clutter.ButtonEvent) => void): NodeJS.EventEmitter
    emit(sigName: "button-press-event", event: Clutter.ButtonEvent): void
    /**
     * The ::button-release-event signal is emitted each time a mouse button
     * is released on `actor`.
     * @param event a #ClutterButtonEvent
     */
    connect(sigName: "button-release-event", callback: ((event: Clutter.ButtonEvent) => boolean)): number
    on(sigName: "button-release-event", callback: (event: Clutter.ButtonEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "button-release-event", callback: (event: Clutter.ButtonEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "button-release-event", callback: (event: Clutter.ButtonEvent) => void): NodeJS.EventEmitter
    emit(sigName: "button-release-event", event: Clutter.ButtonEvent): void
    /**
     * The ::captured-event signal is emitted when an event is captured
     * by Clutter. This signal will be emitted starting from the top-level
     * container (the #ClutterStage) to the actor which received the event
     * going down the hierarchy. This signal can be used to intercept every
     * event before the specialized events (like
     * ClutterActor::button-press-event or ::key-released-event) are
     * emitted.
     * @param event a #ClutterEvent
     */
    connect(sigName: "captured-event", callback: ((event: Clutter.Event) => boolean)): number
    on(sigName: "captured-event", callback: (event: Clutter.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "captured-event", callback: (event: Clutter.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "captured-event", callback: (event: Clutter.Event) => void): NodeJS.EventEmitter
    emit(sigName: "captured-event", event: Clutter.Event): void
    /**
     * The ::destroy signal notifies that all references held on the
     * actor which emitted it should be released.
     * 
     * The ::destroy signal should be used by all holders of a reference
     * on `actor`.
     * 
     * This signal might result in the finalization of the #ClutterActor
     * if all references are released.
     * 
     * Composite actors and actors implementing the #ClutterContainer
     * interface should override the default implementation of the
     * class handler of this signal and call clutter_actor_destroy() on
     * their children. When overriding the default class handler, it is
     * required to chain up to the parent's implementation.
     */
    connect(sigName: "destroy", callback: (() => void)): number
    on(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "destroy", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "destroy", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "destroy"): void
    /**
     * The ::enter-event signal is emitted when the pointer enters the `actor`
     * @param event a #ClutterCrossingEvent
     */
    connect(sigName: "enter-event", callback: ((event: Clutter.CrossingEvent) => boolean)): number
    on(sigName: "enter-event", callback: (event: Clutter.CrossingEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-event", callback: (event: Clutter.CrossingEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-event", callback: (event: Clutter.CrossingEvent) => void): NodeJS.EventEmitter
    emit(sigName: "enter-event", event: Clutter.CrossingEvent): void
    /**
     * The ::event signal is emitted each time an event is received
     * by the `actor`. This signal will be emitted on every actor,
     * following the hierarchy chain, until it reaches the top-level
     * container (the #ClutterStage).
     * @param event a #ClutterEvent
     */
    connect(sigName: "event", callback: ((event: Clutter.Event) => boolean)): number
    on(sigName: "event", callback: (event: Clutter.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (event: Clutter.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (event: Clutter.Event) => void): NodeJS.EventEmitter
    emit(sigName: "event", event: Clutter.Event): void
    /**
     * The ::hide signal is emitted when an actor is no longer rendered
     * on the stage.
     */
    connect(sigName: "hide", callback: (() => void)): number
    on(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hide", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hide", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "hide"): void
    /**
     * The ::key-focus-in signal is emitted when `actor` receives key focus.
     */
    connect(sigName: "key-focus-in", callback: (() => void)): number
    on(sigName: "key-focus-in", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-focus-in", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-focus-in", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "key-focus-in"): void
    /**
     * The ::key-focus-out signal is emitted when `actor` loses key focus.
     */
    connect(sigName: "key-focus-out", callback: (() => void)): number
    on(sigName: "key-focus-out", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-focus-out", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-focus-out", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "key-focus-out"): void
    /**
     * The ::key-press-event signal is emitted each time a keyboard button
     * is pressed while `actor` has key focus (see clutter_stage_set_key_focus()).
     * @param event a #ClutterKeyEvent
     */
    connect(sigName: "key-press-event", callback: ((event: Clutter.KeyEvent) => boolean)): number
    on(sigName: "key-press-event", callback: (event: Clutter.KeyEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-press-event", callback: (event: Clutter.KeyEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-press-event", callback: (event: Clutter.KeyEvent) => void): NodeJS.EventEmitter
    emit(sigName: "key-press-event", event: Clutter.KeyEvent): void
    /**
     * The ::key-release-event signal is emitted each time a keyboard button
     * is released while `actor` has key focus (see
     * clutter_stage_set_key_focus()).
     * @param event a #ClutterKeyEvent
     */
    connect(sigName: "key-release-event", callback: ((event: Clutter.KeyEvent) => boolean)): number
    on(sigName: "key-release-event", callback: (event: Clutter.KeyEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "key-release-event", callback: (event: Clutter.KeyEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "key-release-event", callback: (event: Clutter.KeyEvent) => void): NodeJS.EventEmitter
    emit(sigName: "key-release-event", event: Clutter.KeyEvent): void
    /**
     * The ::leave-event signal is emitted when the pointer leaves the `actor`.
     * @param event a #ClutterCrossingEvent
     */
    connect(sigName: "leave-event", callback: ((event: Clutter.CrossingEvent) => boolean)): number
    on(sigName: "leave-event", callback: (event: Clutter.CrossingEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-event", callback: (event: Clutter.CrossingEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-event", callback: (event: Clutter.CrossingEvent) => void): NodeJS.EventEmitter
    emit(sigName: "leave-event", event: Clutter.CrossingEvent): void
    /**
     * The ::motion-event signal is emitted each time the mouse pointer is
     * moved over `actor`.
     * @param event a #ClutterMotionEvent
     */
    connect(sigName: "motion-event", callback: ((event: Clutter.MotionEvent) => boolean)): number
    on(sigName: "motion-event", callback: (event: Clutter.MotionEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "motion-event", callback: (event: Clutter.MotionEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "motion-event", callback: (event: Clutter.MotionEvent) => void): NodeJS.EventEmitter
    emit(sigName: "motion-event", event: Clutter.MotionEvent): void
    /**
     * The ::paint signal is emitted each time an actor is being painted.
     * 
     * Subclasses of #ClutterActor should override the #ClutterActorClass.paint
     * virtual function paint themselves in that function.
     * 
     * It is strongly discouraged to connect a signal handler to
     * the #ClutterActor::paint signal; if you want to change the paint
     * sequence of an existing #ClutterActor instance, either create a new
     * #ClutterActor class and override the #ClutterActorClass.paint virtual
     * function, or use a #ClutterEffect. The #ClutterActor::paint signal
     * will be removed in a future version of Clutter.
     */
    connect(sigName: "paint", callback: (() => void)): number
    on(sigName: "paint", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "paint", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "paint", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "paint"): void
    /**
     * This signal is emitted when the parent of the actor changes.
     * @param oldParent the previous parent of the actor, or %NULL
     */
    connect(sigName: "parent-set", callback: ((oldParent?: Clutter.Actor | null) => void)): number
    on(sigName: "parent-set", callback: (oldParent?: Clutter.Actor | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "parent-set", callback: (oldParent?: Clutter.Actor | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "parent-set", callback: (oldParent?: Clutter.Actor | null) => void): NodeJS.EventEmitter
    emit(sigName: "parent-set", oldParent?: Clutter.Actor | null): void
    /**
     * The ::pick signal is emitted each time an actor is being painted
     * in "pick mode". The pick mode is used to identify the actor during
     * the event handling phase, or by clutter_stage_get_actor_at_pos().
     * The actor should paint its shape using the passed `pick_color`.
     * 
     * Subclasses of #ClutterActor should override the class signal handler
     * and paint themselves in that function.
     * 
     * It is possible to connect a handler to the ::pick signal in order
     * to set up some custom aspect of a paint in pick mode.
     * @param color the #ClutterColor to be used when picking
     */
    connect(sigName: "pick", callback: ((color: Clutter.Color) => void)): number
    on(sigName: "pick", callback: (color: Clutter.Color) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pick", callback: (color: Clutter.Color) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pick", callback: (color: Clutter.Color) => void): NodeJS.EventEmitter
    emit(sigName: "pick", color: Clutter.Color): void
    /**
     * The ::queue_redraw signal is emitted when clutter_actor_queue_redraw()
     * is called on `origin`.
     * 
     * The default implementation for #ClutterActor chains up to the
     * parent actor and queues a redraw on the parent, thus "bubbling"
     * the redraw queue up through the actor graph. The default
     * implementation for #ClutterStage queues a clutter_stage_ensure_redraw()
     * in a main loop idle handler.
     * 
     * Note that the `origin` actor may be the stage, or a container; it
     * does not have to be a leaf node in the actor graph.
     * 
     * Toolkits embedding a #ClutterStage which require a redraw and
     * relayout cycle can stop the emission of this signal using the
     * GSignal API, redraw the UI and then call clutter_stage_ensure_redraw()
     * themselves, like:
     * 
     * 
     * ```c
     *   static void
     *   on_redraw_complete (gpointer data)
     *   {
     *     ClutterStage *stage = data;
     * 
     *     // execute the Clutter drawing pipeline
     *     clutter_stage_ensure_redraw (stage);
     *   }
     * 
     *   static void
     *   on_stage_queue_redraw (ClutterStage *stage)
     *   {
     *     // this prevents the default handler to run
     *     g_signal_stop_emission_by_name (stage, "queue-redraw");
     * 
     *     // queue a redraw with the host toolkit and call
     *     // a function when the redraw has been completed
     *     queue_a_redraw (G_CALLBACK (on_redraw_complete), stage);
     *   }
     * ```
     * 
     * 
     * Note: This signal is emitted before the Clutter paint
     * pipeline is executed. If you want to know when the pipeline has
     * been completed you should use clutter_threads_add_repaint_func()
     * or clutter_threads_add_repaint_func_full().
     * @param origin the actor which initiated the redraw request
     */
    connect(sigName: "queue-redraw", callback: ((origin: Clutter.Actor) => void)): number
    on(sigName: "queue-redraw", callback: (origin: Clutter.Actor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "queue-redraw", callback: (origin: Clutter.Actor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "queue-redraw", callback: (origin: Clutter.Actor) => void): NodeJS.EventEmitter
    emit(sigName: "queue-redraw", origin: Clutter.Actor): void
    /**
     * The ::queue_layout signal is emitted when clutter_actor_queue_relayout()
     * is called on an actor.
     * 
     * The default implementation for #ClutterActor chains up to the
     * parent actor and queues a relayout on the parent, thus "bubbling"
     * the relayout queue up through the actor graph.
     * 
     * The main purpose of this signal is to allow relayout to be propagated
     * properly in the presence of #ClutterClone actors. Applications will
     * not normally need to connect to this signal.
     */
    connect(sigName: "queue-relayout", callback: (() => void)): number
    on(sigName: "queue-relayout", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "queue-relayout", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "queue-relayout", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "queue-relayout"): void
    /**
     * The ::realize signal is emitted each time an actor is being
     * realized.
     */
    connect(sigName: "realize", callback: (() => void)): number
    on(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "realize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "realize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "realize"): void
    /**
     * The ::scroll-event signal is emitted each time the mouse is
     * scrolled on `actor`
     * @param event a #ClutterScrollEvent
     */
    connect(sigName: "scroll-event", callback: ((event: Clutter.ScrollEvent) => boolean)): number
    on(sigName: "scroll-event", callback: (event: Clutter.ScrollEvent) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "scroll-event", callback: (event: Clutter.ScrollEvent) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "scroll-event", callback: (event: Clutter.ScrollEvent) => void): NodeJS.EventEmitter
    emit(sigName: "scroll-event", event: Clutter.ScrollEvent): void
    /**
     * The ::show signal is emitted when an actor is visible and
     * rendered on the stage.
     */
    connect(sigName: "show", callback: (() => void)): number
    on(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "show"): void
    /**
     * The ::touch-event signal is emitted each time a touch
     * begin/end/update/cancel event.
     * @param event a #ClutterEvent
     */
    connect(sigName: "touch-event", callback: ((event: Clutter.Event) => boolean)): number
    on(sigName: "touch-event", callback: (event: Clutter.Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "touch-event", callback: (event: Clutter.Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "touch-event", callback: (event: Clutter.Event) => void): NodeJS.EventEmitter
    emit(sigName: "touch-event", event: Clutter.Event): void
    /**
     * The ::transition-stopped signal is emitted once a transition
     * is stopped; a transition is stopped once it reached its total
     * duration (including eventual repeats), it has been stopped
     * using clutter_timeline_stop(), or it has been removed from the
     * transitions applied on `actor,` using clutter_actor_remove_transition().
     * @param name the name of the transition
     * @param isFinished whether the transition was finished, or stopped
     */
    connect(sigName: "transition-stopped", callback: ((name: string, isFinished: boolean) => void)): number
    on(sigName: "transition-stopped", callback: (name: string, isFinished: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "transition-stopped", callback: (name: string, isFinished: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "transition-stopped", callback: (name: string, isFinished: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "transition-stopped", name: string, isFinished: boolean): void
    /**
     * The ::transitions-completed signal is emitted once all transitions
     * involving `actor` are complete.
     */
    connect(sigName: "transitions-completed", callback: (() => void)): number
    on(sigName: "transitions-completed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "transitions-completed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "transitions-completed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "transitions-completed"): void
    /**
     * The ::unrealize signal is emitted each time an actor is being
     * unrealized.
     */
    connect(sigName: "unrealize", callback: (() => void)): number
    on(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unrealize", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unrealize", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "unrealize"): void
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
    /* Signals of Clutter-1.0.Clutter.Container */
    /**
     * The ::actor-added signal is emitted each time an actor
     * has been added to `container`.
     * @param actor the new child that has been added to `container`
     */
    connect(sigName: "actor-added", callback: ((actor: Clutter.Actor) => void)): number
    on(sigName: "actor-added", callback: (actor: Clutter.Actor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "actor-added", callback: (actor: Clutter.Actor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "actor-added", callback: (actor: Clutter.Actor) => void): NodeJS.EventEmitter
    emit(sigName: "actor-added", actor: Clutter.Actor): void
    /**
     * The ::actor-removed signal is emitted each time an actor
     * is removed from `container`.
     * @param actor the child that has been removed from `container`
     */
    connect(sigName: "actor-removed", callback: ((actor: Clutter.Actor) => void)): number
    on(sigName: "actor-removed", callback: (actor: Clutter.Actor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "actor-removed", callback: (actor: Clutter.Actor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "actor-removed", callback: (actor: Clutter.Actor) => void): NodeJS.EventEmitter
    emit(sigName: "actor-removed", actor: Clutter.Actor): void
    /**
     * The ::child-notify signal is emitted each time a property is
     * being set through the clutter_container_child_set() and
     * clutter_container_child_set_property() calls.
     * @param actor the child that has had a property set
     * @param pspec the #GParamSpec of the property set
     */
    connect(sigName: "child-notify", callback: ((actor: Clutter.Actor, pspec: GObject.ParamSpec) => void)): number
    on(sigName: "child-notify", callback: (actor: Clutter.Actor, pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-notify", callback: (actor: Clutter.Actor, pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-notify", callback: (actor: Clutter.Actor, pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "child-notify", actor: Clutter.Actor, pspec: GObject.ParamSpec): void
    /* Signals of Clutter-1.0.Clutter.Media */
    /**
     * The ::eos signal is emitted each time the media stream ends.
     */
    connect(sigName: "eos", callback: (() => void)): number
    on(sigName: "eos", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "eos", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "eos", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "eos"): void
    /**
     * The ::error signal is emitted each time an error occurred.
     * @param error the #GError
     */
    connect(sigName: "error", callback: ((error: GLib.Error) => void)): number
    on(sigName: "error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: (error: GLib.Error) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: (error: GLib.Error) => void): NodeJS.EventEmitter
    emit(sigName: "error", error: GLib.Error): void
    /* Signals of ClutterGst-2.0.ClutterGst.Player */
    /**
     * The ::download-buffering signal is emitted each time their an
     * update about the buffering of the current media.
     * @param start start position of the buffering
     * @param stop start position of the buffering
     */
    connect(sigName: "download-buffering", callback: ((start: number, stop: number) => void)): number
    on(sigName: "download-buffering", callback: (start: number, stop: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "download-buffering", callback: (start: number, stop: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "download-buffering", callback: (start: number, stop: number) => void): NodeJS.EventEmitter
    emit(sigName: "download-buffering", start: number, stop: number): void
    connect(sigName: "notify::pixel-aspect-ratio", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixel-aspect-ratio", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixel-aspect-ratio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixel-aspect-ratio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixel-aspect-ratio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::disable-slicing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-slicing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::disable-slicing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::disable-slicing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::disable-slicing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filename", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::filter-quality", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-quality", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filter-quality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filter-quality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filter-quality", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::keep-aspect-ratio", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keep-aspect-ratio", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::keep-aspect-ratio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::keep-aspect-ratio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::keep-aspect-ratio", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::load-async", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::load-async", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::load-async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::load-async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::load-async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::load-data-async", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::load-data-async", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::load-data-async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::load-data-async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::load-data-async", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pick-with-alpha", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pick-with-alpha", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pick-with-alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pick-with-alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pick-with-alpha", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pixel-format", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixel-format", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pixel-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pixel-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pixel-format", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::repeat-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::repeat-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::repeat-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::repeat-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::repeat-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::repeat-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::repeat-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::repeat-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::sync-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::sync-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::sync-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::sync-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tile-waste", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-waste", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tile-waste", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tile-waste", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tile-waste", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::actions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::allocation", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::anchor-gravity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anchor-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::anchor-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anchor-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::anchor-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::anchor-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::background-color-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::child-transform-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-rect", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::clip-to-allocation", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::constraints", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-box", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-gravity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::content-repeat", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::depth", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::depth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::effect", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::first-child", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed-position-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fixed-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-clip", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-pointer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::last-child", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::layout-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::magnification-filter", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mapped", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-left", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-right", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-height-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-width-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::minification-filter", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-height-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::natural-width-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::offscreen-redirect", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pivot-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pivot-point-z", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::reactive", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::realized", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::request-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-angle-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-angle-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-angle-z", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-center-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-center-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-center-z", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rotation-center-z-gravity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rotation-center-z-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-center-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-center-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-center-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-gravity", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-z", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::show-on-set-parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::text-direction", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transform-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::translation-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::translation-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::translation-z", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-align", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::x-expand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-align", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::y-expand", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::z-position", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::audio-volume", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-volume", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::audio-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::audio-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::audio-volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::buffer-fill", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-fill", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer-fill", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer-fill", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer-fill", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::can-seek", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-seek", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::can-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::can-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::can-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::playing", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::playing", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::playing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::playing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::playing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle-font-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-font-name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle-font-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::audio-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-stream", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::audio-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::audio-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::audio-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::audio-streams", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-streams", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::audio-streams", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::audio-streams", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::audio-streams", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::idle", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::idle", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::idle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::idle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::idle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::in-seek", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::in-seek", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::in-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::in-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::in-seek", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::seek-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seek-flags", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seek-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seek-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seek-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle-track", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-track", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subtitle-tracks", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-tracks", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subtitle-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subtitle-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subtitle-tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::user-agent", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: VideoTexture_ConstructProps)
    _init (config?: VideoTexture_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): VideoTexture
    /**
     * Looks up the #GParamSpec for a child property of `klass`.
     * @param klass a #GObjectClass implementing the #ClutterContainer interface.
     * @param propertyName a property name.
     */
    static classFindChildProperty(klass: GObject.ObjectClass, propertyName: string): GObject.ParamSpec
    /**
     * Returns an array of #GParamSpec for all child properties.
     * @param klass a #GObjectClass implementing the #ClutterContainer interface.
     */
    static classListChildProperties(klass: GObject.ObjectClass): GObject.ParamSpec[]
    /**
     * Adds the #ClutterGstPlayer properties to a class and surchages the
     * set/get_property of #GObjectClass. You should call this
     * function at the end of the class_init method of the class
     * implementing #ClutterGstPlayer.
     * @param objectClass a #GObjectClass
     */
    static classInit(objectClass: GObject.ObjectClass): void
    static $gtype: GObject.Type
}
abstract class PlayerIface {
    /* Fields of ClutterGst-2.0.ClutterGst.PlayerIface */
    getPipeline: (player: Player) => Gst.Element
    getUserAgent: (player: Player) => string
    setUserAgent: (player: Player, userAgent: string) => void
    getSeekFlags: (player: Player) => SeekFlags
    setSeekFlags: (player: Player, flags: SeekFlags) => void
    getBufferingMode: (player: Player) => BufferingMode
    setBufferingMode: (player: Player, mode: BufferingMode) => void
    getAudioStreams: (player: Player) => string[]
    getAudioStream: (player: Player) => number
    setAudioStream: (player: Player, index: number) => void
    getSubtitleTracks: (player: Player) => string[]
    getSubtitleTrack: (player: Player) => number
    setSubtitleTrack: (player: Player, index: number) => void
    getIdle: (player: Player) => boolean
    getInSeek: (player: Player) => boolean
    downloadBuffering: (player: Player, start: number, stop: number) => void
    static name: string
}
class PlayerIfacePrivate {
    static name: string
}
abstract class VideoSinkClass {
    static name: string
}
class VideoSinkPrivate {
    static name: string
}
abstract class VideoTextureClass {
    static name: string
}
class VideoTexturePrivate {
    static name: string
}
}
export default ClutterGst;