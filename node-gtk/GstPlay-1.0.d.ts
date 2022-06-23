// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstPlay-1.0
 */

import type GstVideo from './GstVideo-1.0';
import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type GstTag from './GstTag-1.0';
import type GstPbutils from './GstPbutils-1.0';
import type GstAudio from './GstAudio-1.0';

export namespace GstPlay {

enum PlayColorBalanceType {
    /**
     * hue or color balance.
     */
    HUE,
    /**
     * brightness or black level.
     */
    BRIGHTNESS,
    /**
     * color saturation or chroma
     * gain.
     */
    SATURATION,
    /**
     * contrast or luma gain.
     */
    CONTRAST,
}
enum PlayError {
    /**
     * generic error.
     */
    FAILED,
}
enum PlayMessage {
    /**
     * Source element was initalized for set URI
     */
    URI_LOADED,
    /**
     * Sink position changed
     */
    POSITION_UPDATED,
    /**
     * Duration of stream changed
     */
    DURATION_CHANGED,
    /**
     * State changed, see #GstPlayState
     */
    STATE_CHANGED,
    /**
     * Pipeline is in buffering state, message contains the percentage value of the decoding buffer
     */
    BUFFERING,
    /**
     * Sink has received EOS
     */
    END_OF_STREAM,
    /**
     * Message contains an error
     */
    ERROR,
    /**
     * Message contains an error
     */
    WARNING,
    /**
     * Video sink received format in different dimensions than before
     */
    VIDEO_DIMENSIONS_CHANGED,
    /**
     * A media-info property has changed, message contains current #GstPlayMediaInfo
     */
    MEDIA_INFO_UPDATED,
    /**
     * The volume of the audio ouput has changed
     */
    VOLUME_CHANGED,
    /**
     * Audio muting flag has been toggled
     */
    MUTE_CHANGED,
    /**
     * Any pending seeking operation has been completed
     */
    SEEK_DONE,
}
enum PlaySnapshotFormat {
    /**
     * raw native format.
     */
    RAW_NATIVE,
    /**
     * raw xRGB format.
     */
    RAW_XRGB,
    /**
     * raw BGRx format.
     */
    RAW_BGRX,
    /**
     * jpeg format.
     */
    JPG,
    /**
     * png format.
     */
    PNG,
}
enum PlayState {
    /**
     * the play is stopped.
     */
    STOPPED,
    /**
     * the play is buffering.
     */
    BUFFERING,
    /**
     * the play is paused.
     */
    PAUSED,
    /**
     * the play is currently playing a
     * stream.
     */
    PLAYING,
}
/**
 * Gets a string representing the given color balance type.
 * @param type a #GstPlayColorBalanceType
 */
function playColorBalanceTypeGetName(type: PlayColorBalanceType): string
/**
 * Gets a string representing the given error.
 * @param error a #GstPlayError
 */
function playErrorGetName(error: PlayError): string
function playErrorQuark(): GLib.Quark
function playMessageGetName(messageType: PlayMessage): string
/**
 * Parse the given buffering-percent `msg` and extract the corresponding value
 * @param msg A #GstMessage
 */
function playMessageParseBufferingPercent(msg: Gst.Message): /* percent */ number
/**
 * Parse the given duration `msg` and extract the corresponding #GstClockTime
 * @param msg A #GstMessage
 */
function playMessageParseDurationUpdated(msg: Gst.Message): /* duration */ Gst.ClockTime
/**
 * Parse the given error `msg` and extract the corresponding #GError
 * @param msg A #GstMessage
 */
function playMessageParseError(msg: Gst.Message): [ /* error */ GLib.Error, /* details */ Gst.Structure | null ]
/**
 * Parse the given `msg` and extract the corresponding media information
 * @param msg A #GstMessage
 */
function playMessageParseMediaInfoUpdated(msg: Gst.Message): /* info */ PlayMediaInfo
/**
 * Parse the given `msg` and extract the corresponding audio muted state
 * @param msg A #GstMessage
 */
function playMessageParseMutedChanged(msg: Gst.Message): /* muted */ boolean
/**
 * Parse the given position `msg` and extract the corresponding #GstClockTime
 * @param msg A #GstMessage
 */
function playMessageParsePositionUpdated(msg: Gst.Message): /* position */ Gst.ClockTime
/**
 * Parse the given state `msg` and extract the corresponding #GstPlayState
 * @param msg A #GstMessage
 */
function playMessageParseStateChanged(msg: Gst.Message): /* state */ PlayState
/**
 * Parse the given `msg` and extract its #GstPlayMessage type.
 * @param msg A #GstMessage
 */
function playMessageParseType(msg: Gst.Message): /* type */ PlayMessage
/**
 * Parse the given `msg` and extract the corresponding video dimensions
 * @param msg A #GstMessage
 */
function playMessageParseVideoDimensionsChanged(msg: Gst.Message): [ /* width */ number, /* height */ number ]
/**
 * Parse the given `msg` and extract the corresponding audio volume
 * @param msg A #GstMessage
 */
function playMessageParseVolumeChanged(msg: Gst.Message): /* volume */ number
/**
 * Parse the given error `msg` and extract the corresponding #GError warning
 * @param msg A #GstMessage
 */
function playMessageParseWarning(msg: Gst.Message): [ /* error */ GLib.Error, /* details */ Gst.Structure | null ]
/**
 * Gets a string representing the given state.
 * @param state a #GstPlayState
 */
function playStateGetName(state: PlayState): string
interface PlayVideoRenderer_ConstructProps extends GObject.Object_ConstructProps {
}

interface PlayVideoRenderer {

    // Class property signals of GstPlay-1.0.GstPlay.PlayVideoRenderer

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class PlayVideoRenderer extends GObject.Object {

    // Own properties of GstPlay-1.0.GstPlay.PlayVideoRenderer

    static name: string
    static $gtype: GObject.GType<PlayVideoRenderer>

    // Constructors of GstPlay-1.0.GstPlay.PlayVideoRenderer

    constructor(config?: PlayVideoRenderer_ConstructProps) 
    _init(config?: PlayVideoRenderer_ConstructProps): void
}

interface Play_ConstructProps extends Gst.Object_ConstructProps {

    // Own constructor properties of GstPlay-1.0.GstPlay.Play

    audioVideoOffset?: number | null
    mute?: boolean | null
    rate?: number | null
    subtitleVideoOffset?: number | null
    suburi?: string | null
    uri?: string | null
    videoMultiviewFlags?: GstVideo.VideoMultiviewFlags | null
    videoMultiviewMode?: GstVideo.VideoMultiviewFramePacking | null
    videoRenderer?: PlayVideoRenderer | null
    volume?: number | null
}

interface Play {

    // Own properties of GstPlay-1.0.GstPlay.Play

    audioVideoOffset: number
    readonly currentAudioTrack: PlayAudioInfo
    readonly currentSubtitleTrack: PlaySubtitleInfo
    readonly currentVideoTrack: PlayVideoInfo
    readonly duration: number
    readonly mediaInfo: PlayMediaInfo
    mute: boolean
    readonly pipeline: Gst.Element
    readonly position: number
    rate: number
    subtitleVideoOffset: number
    suburi: string
    uri: string
    videoMultiviewFlags: GstVideo.VideoMultiviewFlags
    videoMultiviewMode: GstVideo.VideoMultiviewFramePacking
    videoRenderer: PlayVideoRenderer
    volume: number

    // Owm methods of GstPlay-1.0.GstPlay.Play

    /**
     * Retrieve the current value of audio-video-offset property
     */
    getAudioVideoOffset(): number
    /**
     * Retrieve the current value of the indicated `type`.
     * @param type #GstPlayColorBalanceType
     */
    getColorBalance(type: PlayColorBalanceType): number
    /**
     * Get a copy of the current configuration of the play. This configuration
     * can either be modified and used for the gst_play_set_config() call
     * or it must be freed after usage.
     */
    getConfig(): Gst.Structure
    /**
     * A Function to get current audio #GstPlayAudioInfo instance.
     */
    getCurrentAudioTrack(): PlayAudioInfo | null
    /**
     * A Function to get current subtitle #GstPlaySubtitleInfo instance.
     */
    getCurrentSubtitleTrack(): PlaySubtitleInfo | null
    /**
     * A Function to get current video #GstPlayVideoInfo instance.
     */
    getCurrentVideoTrack(): PlayVideoInfo | null
    getCurrentVisualization(): string | null
    /**
     * Retrieves the duration of the media stream that self represents.
     */
    getDuration(): Gst.ClockTime
    /**
     * A Function to get the current media info #GstPlayMediaInfo instance.
     */
    getMediaInfo(): PlayMediaInfo | null
    /**
     * GstPlay API exposes a #GstBus instance which purpose is to provide data
     * structures representing play-internal events in form of #GstMessage<!-- -->s of
     * type GST_MESSAGE_APPLICATION.
     * 
     * Each message carries a "play-message" field of type #GstPlayMessage.
     * Further fields of the message data are specific to each possible value of
     * that enumeration.
     * 
     * Applications can consume the messages asynchronously within their own
     * event-loop / UI-thread etc. Note that in case the application does not
     * consume the messages, the bus will accumulate these internally and eventually
     * fill memory. To avoid that, the bus has to be set "flushing".
     */
    getMessageBus(): Gst.Bus
    /**
     * Retrieve the current value of the indicated `type`.
     */
    getMultiviewFlags(): GstVideo.VideoMultiviewFlags
    /**
     * Retrieve the current value of the indicated `type`.
     */
    getMultiviewMode(): GstVideo.VideoMultiviewFramePacking
    getMute(): boolean
    getPipeline(): Gst.Element
    getPosition(): Gst.ClockTime
    getRate(): number
    /**
     * current subtitle URI
     */
    getSubtitleUri(): string | null
    /**
     * Retrieve the current value of subtitle-video-offset property
     */
    getSubtitleVideoOffset(): number
    /**
     * Gets the URI of the currently-playing stream.
     */
    getUri(): string | null
    /**
     * Get a snapshot of the currently selected video stream, if any. The format can be
     * selected with `format` and optional configuration is possible with `config`
     * Currently supported settings are:
     * - width, height of type G_TYPE_INT
     * - pixel-aspect-ratio of type GST_TYPE_FRACTION
     *  Except for GST_PLAY_THUMBNAIL_RAW_NATIVE format, if no config is set, pixel-aspect-ratio would be 1/1
     * @param format output format of the video snapshot
     * @param config Additional configuration
     */
    getVideoSnapshot(format: PlaySnapshotFormat, config: Gst.Structure | null): Gst.Sample | null
    /**
     * Returns the current volume level, as a percentage between 0 and 1.
     */
    getVolume(): number
    /**
     * Checks whether the `play` has color balance support available.
     */
    hasColorBalance(): boolean
    /**
     * Pauses the current stream.
     */
    pause(): void
    /**
     * Request to play the loaded stream.
     */
    play(): void
    /**
     * Seeks the currently-playing stream to the absolute `position` time
     * in nanoseconds.
     * @param position position to seek in nanoseconds
     */
    seek(position: Gst.ClockTime): void
    setAudioTrack(streamIndex: number): boolean
    /**
     * Enable or disable the current audio track.
     * @param enabled TRUE or FALSE
     */
    setAudioTrackEnabled(enabled: boolean): void
    /**
     * Sets audio-video-offset property by value of `offset`
     * @param offset #gint64 in nanoseconds
     */
    setAudioVideoOffset(offset: number): void
    /**
     * Sets the current value of the indicated channel `type` to the passed
     * value.
     * @param type #GstPlayColorBalanceType
     * @param value The new value for the `type,` ranged [0,1]
     */
    setColorBalance(type: PlayColorBalanceType, value: number): void
    /**
     * Set the configuration of the play. If the play is already configured, and
     * the configuration haven't change, this function will return %TRUE. If the
     * play is not in the GST_PLAY_STATE_STOPPED, this method will return %FALSE
     * and active configuration will remain.
     * 
     * `config` is a #GstStructure that contains the configuration parameters for
     * the play.
     * 
     * This function takes ownership of `config`.
     * @param config a #GstStructure
     */
    setConfig(config: Gst.Structure): boolean
    /**
     * Sets the current value of the indicated mode `type` to the passed
     * value.
     * @param flags The new value for the `type`
     */
    setMultiviewFlags(flags: GstVideo.VideoMultiviewFlags): void
    /**
     * Sets the current value of the indicated mode `type` to the passed
     * value.
     * @param mode The new value for the `type`
     */
    setMultiviewMode(mode: GstVideo.VideoMultiviewFramePacking): void
    /**
     * %TRUE if the currently-playing stream should be muted.
     * @param val Mute state the should be set
     */
    setMute(val: boolean): void
    /**
     * Playback at specified rate
     * @param rate playback rate
     */
    setRate(rate: number): void
    setSubtitleTrack(streamIndex: number): boolean
    /**
     * Enable or disable the current subtitle track.
     * @param enabled TRUE or FALSE
     */
    setSubtitleTrackEnabled(enabled: boolean): void
    /**
     * Sets the external subtitle URI. This should be combined with a call to
     * gst_play_set_subtitle_track_enabled(`play,` TRUE) so the subtitles are actually
     * rendered.
     * @param uri subtitle URI
     */
    setSubtitleUri(uri: string | null): void
    /**
     * Sets subtitle-video-offset property by value of `offset`
     * @param offset #gint64 in nanoseconds
     */
    setSubtitleVideoOffset(offset: number): void
    /**
     * Sets the next URI to play.
     * @param uri next URI to play.
     */
    setUri(uri: string | null): void
    setVideoTrack(streamIndex: number): boolean
    /**
     * Enable or disable the current video track.
     * @param enabled TRUE or FALSE
     */
    setVideoTrackEnabled(enabled: boolean): void
    setVisualization(name: string | null): boolean
    /**
     * Enable or disable the visualization.
     * @param enabled TRUE or FALSE
     */
    setVisualizationEnabled(enabled: boolean): void
    /**
     * Sets the volume level of the stream as a percentage between 0 and 1.
     * @param val the new volume level, as a percentage between 0 and 1
     */
    setVolume(val: number): void
    /**
     * Stops playing the current stream and resets to the first position
     * in the stream.
     */
    stop(): void

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GstPlay-1.0.GstPlay.Play

    connect(sigName: "notify::audio-video-offset", callback: (...args: any[]) => void): number
    on(sigName: "notify::audio-video-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::audio-video-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::audio-video-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::audio-video-offset", ...args: any[]): void
    connect(sigName: "notify::current-audio-track", callback: (...args: any[]) => void): number
    on(sigName: "notify::current-audio-track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::current-audio-track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::current-audio-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::current-audio-track", ...args: any[]): void
    connect(sigName: "notify::current-subtitle-track", callback: (...args: any[]) => void): number
    on(sigName: "notify::current-subtitle-track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::current-subtitle-track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::current-subtitle-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::current-subtitle-track", ...args: any[]): void
    connect(sigName: "notify::current-video-track", callback: (...args: any[]) => void): number
    on(sigName: "notify::current-video-track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::current-video-track", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::current-video-track", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::current-video-track", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::media-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::media-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::media-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::media-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::media-info", ...args: any[]): void
    connect(sigName: "notify::mute", callback: (...args: any[]) => void): number
    on(sigName: "notify::mute", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mute", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mute", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mute", ...args: any[]): void
    connect(sigName: "notify::pipeline", callback: (...args: any[]) => void): number
    on(sigName: "notify::pipeline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pipeline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pipeline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pipeline", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::rate", callback: (...args: any[]) => void): number
    on(sigName: "notify::rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rate", ...args: any[]): void
    connect(sigName: "notify::subtitle-video-offset", callback: (...args: any[]) => void): number
    on(sigName: "notify::subtitle-video-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subtitle-video-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subtitle-video-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subtitle-video-offset", ...args: any[]): void
    connect(sigName: "notify::suburi", callback: (...args: any[]) => void): number
    on(sigName: "notify::suburi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::suburi", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::suburi", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::suburi", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::video-multiview-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::video-multiview-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::video-multiview-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::video-multiview-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::video-multiview-flags", ...args: any[]): void
    connect(sigName: "notify::video-multiview-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::video-multiview-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::video-multiview-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::video-multiview-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::video-multiview-mode", ...args: any[]): void
    connect(sigName: "notify::video-renderer", callback: (...args: any[]) => void): number
    on(sigName: "notify::video-renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::video-renderer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::video-renderer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::video-renderer", ...args: any[]): void
    connect(sigName: "notify::volume", callback: (...args: any[]) => void): number
    on(sigName: "notify::volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::volume", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::volume", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::volume", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Play extends Gst.Object {

    // Own properties of GstPlay-1.0.GstPlay.Play

    static name: string
    static $gtype: GObject.GType<Play>

    // Constructors of GstPlay-1.0.GstPlay.Play

    constructor(config?: Play_ConstructProps) 
    /**
     * Creates a new #GstPlay instance.
     * 
     * Video is going to be rendered by `video_renderer,` or if %NULL is provided
     * no special video set up will be done and some default handling will be
     * performed.
     * @constructor 
     * @param videoRenderer GstPlayVideoRenderer to use
     */
    constructor(videoRenderer: PlayVideoRenderer | null) 
    /**
     * Creates a new #GstPlay instance.
     * 
     * Video is going to be rendered by `video_renderer,` or if %NULL is provided
     * no special video set up will be done and some default handling will be
     * performed.
     * @constructor 
     * @param videoRenderer GstPlayVideoRenderer to use
     */
    static new(videoRenderer: PlayVideoRenderer | null): Play
    _init(config?: Play_ConstructProps): void
    static configGetPositionUpdateInterval(config: Gst.Structure): number
    static configGetSeekAccurate(config: Gst.Structure): boolean
    /**
     * Return the user agent which has been configured using
     * gst_play_config_set_user_agent() if any.
     * @param config a #GstPlay configuration
     */
    static configGetUserAgent(config: Gst.Structure): string | null
    /**
     * set desired interval in milliseconds between two position-updated messages.
     * pass 0 to stop updating the position.
     * @param config a #GstPlay configuration
     * @param interval interval in ms
     */
    static configSetPositionUpdateInterval(config: Gst.Structure, interval: number): void
    /**
     * Enable or disable accurate seeking. When enabled, elements will try harder
     * to seek as accurately as possible to the requested seek position. Generally
     * it will be slower especially for formats that don't have any indexes or
     * timestamp markers in the stream.
     * 
     * If accurate seeking is disabled, elements will seek as close as the request
     * position without slowing down seeking too much.
     * 
     * Accurate seeking is disabled by default.
     * @param config a #GstPlay configuration
     * @param accurate accurate seek or not
     */
    static configSetSeekAccurate(config: Gst.Structure, accurate: boolean): void
    /**
     * Set the user agent to pass to the server if `play` needs to connect
     * to a server during playback. This is typically used when playing HTTP
     * or RTSP streams.
     * @param config a #GstPlay configuration
     * @param agent the string to use as user agent
     */
    static configSetUserAgent(config: Gst.Structure, agent: string | null): void
    static getAudioStreams(info: PlayMediaInfo): PlayAudioInfo[]
    static getSubtitleStreams(info: PlayMediaInfo): PlaySubtitleInfo[]
    static getVideoStreams(info: PlayMediaInfo): PlayVideoInfo[]
    static isPlayMessage(msg: Gst.Message): boolean
    /**
     * Frees a %NULL terminated array of #GstPlayVisualization.
     * @param viss a %NULL terminated array of #GstPlayVisualization to free
     */
    static visualizationsFree(viss: PlayVisualization): void
    static visualizationsGet(): PlayVisualization[]
}

interface PlayAudioInfo_ConstructProps extends PlayStreamInfo_ConstructProps {
}

interface PlayAudioInfo {

    // Owm methods of GstPlay-1.0.GstPlay.PlayAudioInfo

    getBitrate(): number
    getChannels(): number
    getLanguage(): string | null
    getMaxBitrate(): number
    getSampleRate(): number

    // Class property signals of GstPlay-1.0.GstPlay.PlayAudioInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * #GstPlayStreamInfo specific to audio streams.
 * @class 
 */
class PlayAudioInfo extends PlayStreamInfo {

    // Own properties of GstPlay-1.0.GstPlay.PlayAudioInfo

    static name: string
    static $gtype: GObject.GType<PlayAudioInfo>

    // Constructors of GstPlay-1.0.GstPlay.PlayAudioInfo

    constructor(config?: PlayAudioInfo_ConstructProps) 
    _init(config?: PlayAudioInfo_ConstructProps): void
}

interface PlayMediaInfo_ConstructProps extends GObject.Object_ConstructProps {
}

interface PlayMediaInfo {

    // Owm methods of GstPlay-1.0.GstPlay.PlayMediaInfo

    getAudioStreams(): PlayAudioInfo[]
    getContainerFormat(): string | null
    getDuration(): Gst.ClockTime
    /**
     * Function to get the image (or preview-image) stored in taglist.
     * Application can use `gst_sample_*_()` API's to get caps, buffer etc.
     */
    getImageSample(): Gst.Sample | null
    getNumberOfAudioStreams(): number
    getNumberOfStreams(): number
    getNumberOfSubtitleStreams(): number
    getNumberOfVideoStreams(): number
    getStreamList(): PlayStreamInfo[]
    getSubtitleStreams(): PlaySubtitleInfo[]
    getTags(): Gst.TagList | null
    getTitle(): string | null
    getUri(): string
    getVideoStreams(): PlayVideoInfo[]
    isLive(): boolean
    isSeekable(): boolean

    // Class property signals of GstPlay-1.0.GstPlay.PlayMediaInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Structure containing the media information of a URI.
 * @class 
 */
class PlayMediaInfo extends GObject.Object {

    // Own properties of GstPlay-1.0.GstPlay.PlayMediaInfo

    static name: string
    static $gtype: GObject.GType<PlayMediaInfo>

    // Constructors of GstPlay-1.0.GstPlay.PlayMediaInfo

    constructor(config?: PlayMediaInfo_ConstructProps) 
    _init(config?: PlayMediaInfo_ConstructProps): void
}

interface PlaySignalAdapter_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `buffering`
 */
interface PlaySignalAdapter_BufferingSignalCallback {
    (object: number): void
}

/**
 * Signal callback interface for `duration-changed`
 */
interface PlaySignalAdapter_DurationChangedSignalCallback {
    (object: number): void
}

/**
 * Signal callback interface for `end-of-stream`
 */
interface PlaySignalAdapter_EndOfStreamSignalCallback {
    (): void
}

/**
 * Signal callback interface for `error`
 */
interface PlaySignalAdapter_ErrorSignalCallback {
    (object: GLib.Error, p0: Gst.Structure): void
}

/**
 * Signal callback interface for `media-info-updated`
 */
interface PlaySignalAdapter_MediaInfoUpdatedSignalCallback {
    (object: PlayMediaInfo): void
}

/**
 * Signal callback interface for `mute-changed`
 */
interface PlaySignalAdapter_MuteChangedSignalCallback {
    (object: boolean): void
}

/**
 * Signal callback interface for `position-updated`
 */
interface PlaySignalAdapter_PositionUpdatedSignalCallback {
    (object: number): void
}

/**
 * Signal callback interface for `seek-done`
 */
interface PlaySignalAdapter_SeekDoneSignalCallback {
    (object: number): void
}

/**
 * Signal callback interface for `state-changed`
 */
interface PlaySignalAdapter_StateChangedSignalCallback {
    (object: PlayState): void
}

/**
 * Signal callback interface for `uri-loaded`
 */
interface PlaySignalAdapter_UriLoadedSignalCallback {
    (object: string): void
}

/**
 * Signal callback interface for `video-dimensions-changed`
 */
interface PlaySignalAdapter_VideoDimensionsChangedSignalCallback {
    (object: number, p0: number): void
}

/**
 * Signal callback interface for `volume-changed`
 */
interface PlaySignalAdapter_VolumeChangedSignalCallback {
    (object: number): void
}

/**
 * Signal callback interface for `warning`
 */
interface PlaySignalAdapter_WarningSignalCallback {
    (object: GLib.Error, p0: Gst.Structure): void
}

interface PlaySignalAdapter {

    // Own properties of GstPlay-1.0.GstPlay.PlaySignalAdapter

    readonly play: Play

    // Owm methods of GstPlay-1.0.GstPlay.PlaySignalAdapter

    getPlay(): Play

    // Own signals of GstPlay-1.0.GstPlay.PlaySignalAdapter

    connect(sigName: "buffering", callback: PlaySignalAdapter_BufferingSignalCallback): number
    on(sigName: "buffering", callback: PlaySignalAdapter_BufferingSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "buffering", callback: PlaySignalAdapter_BufferingSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "buffering", callback: PlaySignalAdapter_BufferingSignalCallback): NodeJS.EventEmitter
    emit(sigName: "buffering", ...args: any[]): void
    connect(sigName: "duration-changed", callback: PlaySignalAdapter_DurationChangedSignalCallback): number
    on(sigName: "duration-changed", callback: PlaySignalAdapter_DurationChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "duration-changed", callback: PlaySignalAdapter_DurationChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "duration-changed", callback: PlaySignalAdapter_DurationChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "duration-changed", ...args: any[]): void
    connect(sigName: "end-of-stream", callback: PlaySignalAdapter_EndOfStreamSignalCallback): number
    on(sigName: "end-of-stream", callback: PlaySignalAdapter_EndOfStreamSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "end-of-stream", callback: PlaySignalAdapter_EndOfStreamSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "end-of-stream", callback: PlaySignalAdapter_EndOfStreamSignalCallback): NodeJS.EventEmitter
    emit(sigName: "end-of-stream", ...args: any[]): void
    connect(sigName: "error", callback: PlaySignalAdapter_ErrorSignalCallback): number
    on(sigName: "error", callback: PlaySignalAdapter_ErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: PlaySignalAdapter_ErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: PlaySignalAdapter_ErrorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "error", p0: Gst.Structure, ...args: any[]): void
    connect(sigName: "media-info-updated", callback: PlaySignalAdapter_MediaInfoUpdatedSignalCallback): number
    on(sigName: "media-info-updated", callback: PlaySignalAdapter_MediaInfoUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "media-info-updated", callback: PlaySignalAdapter_MediaInfoUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "media-info-updated", callback: PlaySignalAdapter_MediaInfoUpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "media-info-updated", ...args: any[]): void
    connect(sigName: "mute-changed", callback: PlaySignalAdapter_MuteChangedSignalCallback): number
    on(sigName: "mute-changed", callback: PlaySignalAdapter_MuteChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mute-changed", callback: PlaySignalAdapter_MuteChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mute-changed", callback: PlaySignalAdapter_MuteChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "mute-changed", ...args: any[]): void
    connect(sigName: "position-updated", callback: PlaySignalAdapter_PositionUpdatedSignalCallback): number
    on(sigName: "position-updated", callback: PlaySignalAdapter_PositionUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "position-updated", callback: PlaySignalAdapter_PositionUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "position-updated", callback: PlaySignalAdapter_PositionUpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "position-updated", ...args: any[]): void
    connect(sigName: "seek-done", callback: PlaySignalAdapter_SeekDoneSignalCallback): number
    on(sigName: "seek-done", callback: PlaySignalAdapter_SeekDoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "seek-done", callback: PlaySignalAdapter_SeekDoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "seek-done", callback: PlaySignalAdapter_SeekDoneSignalCallback): NodeJS.EventEmitter
    emit(sigName: "seek-done", ...args: any[]): void
    connect(sigName: "state-changed", callback: PlaySignalAdapter_StateChangedSignalCallback): number
    on(sigName: "state-changed", callback: PlaySignalAdapter_StateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: PlaySignalAdapter_StateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: PlaySignalAdapter_StateChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "state-changed", ...args: any[]): void
    connect(sigName: "uri-loaded", callback: PlaySignalAdapter_UriLoadedSignalCallback): number
    on(sigName: "uri-loaded", callback: PlaySignalAdapter_UriLoadedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "uri-loaded", callback: PlaySignalAdapter_UriLoadedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "uri-loaded", callback: PlaySignalAdapter_UriLoadedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "uri-loaded", ...args: any[]): void
    connect(sigName: "video-dimensions-changed", callback: PlaySignalAdapter_VideoDimensionsChangedSignalCallback): number
    on(sigName: "video-dimensions-changed", callback: PlaySignalAdapter_VideoDimensionsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "video-dimensions-changed", callback: PlaySignalAdapter_VideoDimensionsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "video-dimensions-changed", callback: PlaySignalAdapter_VideoDimensionsChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "video-dimensions-changed", p0: number, ...args: any[]): void
    connect(sigName: "volume-changed", callback: PlaySignalAdapter_VolumeChangedSignalCallback): number
    on(sigName: "volume-changed", callback: PlaySignalAdapter_VolumeChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "volume-changed", callback: PlaySignalAdapter_VolumeChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "volume-changed", callback: PlaySignalAdapter_VolumeChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "volume-changed", ...args: any[]): void
    connect(sigName: "warning", callback: PlaySignalAdapter_WarningSignalCallback): number
    on(sigName: "warning", callback: PlaySignalAdapter_WarningSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "warning", callback: PlaySignalAdapter_WarningSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "warning", callback: PlaySignalAdapter_WarningSignalCallback): NodeJS.EventEmitter
    emit(sigName: "warning", p0: Gst.Structure, ...args: any[]): void

    // Class property signals of GstPlay-1.0.GstPlay.PlaySignalAdapter

    connect(sigName: "notify::play", callback: (...args: any[]) => void): number
    on(sigName: "notify::play", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::play", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::play", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::play", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class PlaySignalAdapter extends GObject.Object {

    // Own properties of GstPlay-1.0.GstPlay.PlaySignalAdapter

    static name: string
    static $gtype: GObject.GType<PlaySignalAdapter>

    // Constructors of GstPlay-1.0.GstPlay.PlaySignalAdapter

    constructor(config?: PlaySignalAdapter_ConstructProps) 
    /**
     * A bus-watching #GSource will be created and attached to the the
     * thread-default #GMainContext. The attached callback will emit the
     * corresponding signal for the message received. Matching signals for play
     * messages from the bus will be emitted by it on the created adapter object.
     * @constructor 
     * @param play #GstPlay instance to emit signals for.
     */
    constructor(play: Play) 
    /**
     * A bus-watching #GSource will be created and attached to the the
     * thread-default #GMainContext. The attached callback will emit the
     * corresponding signal for the message received. Matching signals for play
     * messages from the bus will be emitted by it on the created adapter object.
     * @constructor 
     * @param play #GstPlay instance to emit signals for.
     */
    static new(play: Play): PlaySignalAdapter
    /**
     * Create an adapter that synchronously emits its signals, from the thread in
     * which the messages have been posted.
     * @constructor 
     * @param play #GstPlay instance to emit signals for.
     */
    static newSyncEmit(play: Play): PlaySignalAdapter
    /**
     * A bus-watching #GSource will be created and attached to the `context`. The
     * attached callback will emit the corresponding signal for the message
     * received. Matching signals for play messages from the bus will be emitted by
     * it on the created adapter object.
     * @constructor 
     * @param play #GstPlay instance to emit signals for.
     * @param context A #GMainContext on which the main-loop will process play bus messages on.
     */
    static newWithMainContext(play: Play, context: GLib.MainContext): PlaySignalAdapter
    _init(config?: PlaySignalAdapter_ConstructProps): void
}

interface PlayStreamInfo_ConstructProps extends GObject.Object_ConstructProps {
}

interface PlayStreamInfo {

    // Owm methods of GstPlay-1.0.GstPlay.PlayStreamInfo

    getCaps(): Gst.Caps | null
    /**
     * A string describing codec used in #GstPlayStreamInfo.
     */
    getCodec(): string | null
    /**
     * Function to get stream index from #GstPlayStreamInfo instance or -1 if
     * unknown.
     */
    getIndex(): number
    /**
     * Function to return human readable name for the stream type
     * of the given `info` (ex: "audio", "video", "subtitle")
     */
    getStreamType(): string
    getTags(): Gst.TagList | null

    // Class property signals of GstPlay-1.0.GstPlay.PlayStreamInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Base structure for information concerning a media stream. Depending on
 * the stream type, one can find more media-specific information in
 * #GstPlayVideoInfo, #GstPlayAudioInfo, #GstPlaySubtitleInfo.
 * @class 
 */
class PlayStreamInfo extends GObject.Object {

    // Own properties of GstPlay-1.0.GstPlay.PlayStreamInfo

    static name: string
    static $gtype: GObject.GType<PlayStreamInfo>

    // Constructors of GstPlay-1.0.GstPlay.PlayStreamInfo

    constructor(config?: PlayStreamInfo_ConstructProps) 
    _init(config?: PlayStreamInfo_ConstructProps): void
}

interface PlaySubtitleInfo_ConstructProps extends PlayStreamInfo_ConstructProps {
}

interface PlaySubtitleInfo {

    // Owm methods of GstPlay-1.0.GstPlay.PlaySubtitleInfo

    getLanguage(): string | null

    // Class property signals of GstPlay-1.0.GstPlay.PlaySubtitleInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * #GstPlayStreamInfo specific to subtitle streams.
 * @class 
 */
class PlaySubtitleInfo extends PlayStreamInfo {

    // Own properties of GstPlay-1.0.GstPlay.PlaySubtitleInfo

    static name: string
    static $gtype: GObject.GType<PlaySubtitleInfo>

    // Constructors of GstPlay-1.0.GstPlay.PlaySubtitleInfo

    constructor(config?: PlaySubtitleInfo_ConstructProps) 
    _init(config?: PlaySubtitleInfo_ConstructProps): void
}

interface PlayVideoInfo_ConstructProps extends PlayStreamInfo_ConstructProps {
}

interface PlayVideoInfo {

    // Owm methods of GstPlay-1.0.GstPlay.PlayVideoInfo

    getBitrate(): number
    getFramerate(): [ /* fpsN */ number, /* fpsD */ number ]
    getHeight(): number
    getMaxBitrate(): number
    /**
     * Returns the pixel aspect ratio in `par_n` and `par_d`
     */
    getPixelAspectRatio(): [ /* parN */ number, /* parD */ number ]
    getWidth(): number

    // Class property signals of GstPlay-1.0.GstPlay.PlayVideoInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * #GstPlayStreamInfo specific to video streams.
 * @class 
 */
class PlayVideoInfo extends PlayStreamInfo {

    // Own properties of GstPlay-1.0.GstPlay.PlayVideoInfo

    static name: string
    static $gtype: GObject.GType<PlayVideoInfo>

    // Constructors of GstPlay-1.0.GstPlay.PlayVideoInfo

    constructor(config?: PlayVideoInfo_ConstructProps) 
    _init(config?: PlayVideoInfo_ConstructProps): void
}

interface PlayVideoOverlayVideoRenderer_ConstructProps extends PlayVideoRenderer_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of GstPlay-1.0.GstPlay.PlayVideoOverlayVideoRenderer

    videoSink?: Gst.Element | null
    windowHandle?: object | null
}

interface PlayVideoOverlayVideoRenderer extends PlayVideoRenderer {

    // Own properties of GstPlay-1.0.GstPlay.PlayVideoOverlayVideoRenderer

    videoSink: Gst.Element
    windowHandle: object

    // Owm methods of GstPlay-1.0.GstPlay.PlayVideoOverlayVideoRenderer

    /**
     * Tell an overlay that it has been exposed. This will redraw the current frame
     * in the drawable even if the pipeline is PAUSED.
     */
    expose(): void
    /**
     * Return the currently configured render rectangle. See gst_play_video_overlay_video_renderer_set_render_rectangle()
     * for details.
     */
    getRenderRectangle(): [ /* x */ number, /* y */ number, /* width */ number, /* height */ number ]
    getWindowHandle(): object | null
    /**
     * Configure a subregion as a video target within the window set by
     * gst_play_video_overlay_video_renderer_set_window_handle(). If this is not
     * used or not supported the video will fill the area of the window set as the
     * overlay to 100%. By specifying the rectangle, the video can be overlaid to
     * a specific region of that window only. After setting the new rectangle one
     * should call gst_play_video_overlay_video_renderer_expose() to force a
     * redraw. To unset the region pass -1 for the `width` and `height` parameters.
     * 
     * This method is needed for non fullscreen video overlay in UI toolkits that
     * do not support subwindows.
     * @param x the horizontal offset of the render area inside the window
     * @param y the vertical offset of the render area inside the window
     * @param width the width of the render area inside the window
     * @param height the height of the render area inside the window
     */
    setRenderRectangle(x: number, y: number, width: number, height: number): void
    /**
     * Sets the platform specific window handle into which the video
     * should be rendered
     * @param windowHandle handle referencing to the platform specific window
     */
    setWindowHandle(windowHandle: object | null): void

    // Class property signals of GstPlay-1.0.GstPlay.PlayVideoOverlayVideoRenderer

    connect(sigName: "notify::video-sink", callback: (...args: any[]) => void): number
    on(sigName: "notify::video-sink", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::video-sink", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::video-sink", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::video-sink", ...args: any[]): void
    connect(sigName: "notify::window-handle", callback: (...args: any[]) => void): number
    on(sigName: "notify::window-handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window-handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window-handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window-handle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class PlayVideoOverlayVideoRenderer extends GObject.Object {

    // Own properties of GstPlay-1.0.GstPlay.PlayVideoOverlayVideoRenderer

    static name: string
    static $gtype: GObject.GType<PlayVideoOverlayVideoRenderer>

    // Constructors of GstPlay-1.0.GstPlay.PlayVideoOverlayVideoRenderer

    constructor(config?: PlayVideoOverlayVideoRenderer_ConstructProps) 
    _init(config?: PlayVideoOverlayVideoRenderer_ConstructProps): void
    static new(windowHandle: object | null): PlayVideoRenderer
    static newWithSink(windowHandle: object | null, videoSink: Gst.Element): PlayVideoRenderer
}

interface PlayAudioInfoClass {
}

abstract class PlayAudioInfoClass {

    // Own properties of GstPlay-1.0.GstPlay.PlayAudioInfoClass

    static name: string
}

interface PlayClass {
}

abstract class PlayClass {

    // Own properties of GstPlay-1.0.GstPlay.PlayClass

    static name: string
}

interface PlayMediaInfoClass {
}

abstract class PlayMediaInfoClass {

    // Own properties of GstPlay-1.0.GstPlay.PlayMediaInfoClass

    static name: string
}

interface PlaySignalAdapterClass {
}

abstract class PlaySignalAdapterClass {

    // Own properties of GstPlay-1.0.GstPlay.PlaySignalAdapterClass

    static name: string
}

interface PlayStreamInfoClass {
}

abstract class PlayStreamInfoClass {

    // Own properties of GstPlay-1.0.GstPlay.PlayStreamInfoClass

    static name: string
}

interface PlaySubtitleInfoClass {
}

abstract class PlaySubtitleInfoClass {

    // Own properties of GstPlay-1.0.GstPlay.PlaySubtitleInfoClass

    static name: string
}

interface PlayVideoInfoClass {
}

abstract class PlayVideoInfoClass {

    // Own properties of GstPlay-1.0.GstPlay.PlayVideoInfoClass

    static name: string
}

interface PlayVideoOverlayVideoRendererClass {
}

abstract class PlayVideoOverlayVideoRendererClass {

    // Own properties of GstPlay-1.0.GstPlay.PlayVideoOverlayVideoRendererClass

    static name: string
}

interface PlayVideoRendererInterface {

    // Own fields of GstPlay-1.0.GstPlay.PlayVideoRendererInterface

    parentIface: GObject.TypeInterface
}

abstract class PlayVideoRendererInterface {

    // Own properties of GstPlay-1.0.GstPlay.PlayVideoRendererInterface

    static name: string
}

interface PlayVisualization {

    // Own fields of GstPlay-1.0.GstPlay.PlayVisualization

    /**
     * name of the visualization.
     * @field 
     */
    name: string
    /**
     * description of the visualization.
     * @field 
     */
    description: string

    // Owm methods of GstPlay-1.0.GstPlay.PlayVisualization

    /**
     * Makes a copy of the #GstPlayVisualization. The result must be
     * freed using gst_play_visualization_free().
     */
    copy(): PlayVisualization
    /**
     * Frees a #GstPlayVisualization.
     */
    free(): void
}

/**
 * A #GstPlayVisualization descriptor.
 * @record 
 */
class PlayVisualization {

    // Own properties of GstPlay-1.0.GstPlay.PlayVisualization

    static name: string
}

}
export default GstPlay;