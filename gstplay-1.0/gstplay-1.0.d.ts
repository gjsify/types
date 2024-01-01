
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gstplay-1.0-ambient.d.ts';
import './gstplay-1.0-import.d.ts';
/**
 * GstPlay-1.0
 */

import type GstVideo from '@girs/gstvideo-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GstTag from '@girs/gsttag-1.0';
import type GstPbutils from '@girs/gstpbutils-1.0';
import type GstAudio from '@girs/gstaudio-1.0';

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
 * @returns a string with the name of the color   balance type.
 */
function play_color_balance_type_get_name(type: PlayColorBalanceType): string
/**
 * Gets a string representing the given error.
 * @param error a #GstPlayError
 * @returns a string with the given error.
 */
function play_error_get_name(error: PlayError): string
function play_error_quark(): GLib.Quark
function play_message_get_name(message_type: PlayMessage): string
/**
 * Parse the given buffering-percent `msg` and extract the corresponding value
 * @param msg A #GstMessage
 */
function play_message_parse_buffering_percent(msg: Gst.Message): /* percent */ number
/**
 * Parse the given duration `msg` and extract the corresponding #GstClockTime
 * @param msg A #GstMessage
 */
function play_message_parse_duration_updated(msg: Gst.Message): /* duration */ Gst.ClockTime
/**
 * Parse the given error `msg` and extract the corresponding #GError
 * @param msg A #GstMessage
 */
function play_message_parse_error(msg: Gst.Message): [ /* error */ GLib.Error, /* details */ Gst.Structure | null ]
/**
 * Parse the given `msg` and extract the corresponding media information
 * @param msg A #GstMessage
 */
function play_message_parse_media_info_updated(msg: Gst.Message): /* info */ PlayMediaInfo
/**
 * Parse the given `msg` and extract the corresponding audio muted state
 * @param msg A #GstMessage
 */
function play_message_parse_muted_changed(msg: Gst.Message): /* muted */ boolean
/**
 * Parse the given position `msg` and extract the corresponding #GstClockTime
 * @param msg A #GstMessage
 */
function play_message_parse_position_updated(msg: Gst.Message): /* position */ Gst.ClockTime
/**
 * Parse the given state `msg` and extract the corresponding #GstPlayState
 * @param msg A #GstMessage
 */
function play_message_parse_state_changed(msg: Gst.Message): /* state */ PlayState
/**
 * Parse the given `msg` and extract its #GstPlayMessage type.
 * @param msg A #GstMessage
 */
function play_message_parse_type(msg: Gst.Message): /* type */ PlayMessage
/**
 * Parse the given `msg` and extract the corresponding video dimensions
 * @param msg A #GstMessage
 */
function play_message_parse_video_dimensions_changed(msg: Gst.Message): [ /* width */ number, /* height */ number ]
/**
 * Parse the given `msg` and extract the corresponding audio volume
 * @param msg A #GstMessage
 */
function play_message_parse_volume_changed(msg: Gst.Message): /* volume */ number
/**
 * Parse the given error `msg` and extract the corresponding #GError warning
 * @param msg A #GstMessage
 */
function play_message_parse_warning(msg: Gst.Message): [ /* error */ GLib.Error, /* details */ Gst.Structure | null ]
/**
 * Gets a string representing the given state.
 * @param state a #GstPlayState
 * @returns a string with the name of the state.
 */
function play_state_get_name(state: PlayState): string
module PlayVideoRenderer {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface PlayVideoRenderer {

    // Class property signals of GstPlay-1.0.GstPlay.PlayVideoRenderer

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PlayVideoRenderer extends GObject.Object {

    // Own properties of GstPlay-1.0.GstPlay.PlayVideoRenderer

    static name: string
    static $gtype: GObject.GType<PlayVideoRenderer>

    // Constructors of GstPlay-1.0.GstPlay.PlayVideoRenderer

    constructor(config?: PlayVideoRenderer.ConstructorProperties) 
    _init(config?: PlayVideoRenderer.ConstructorProperties): void
}

module Play {

    // Constructor properties interface

    interface ConstructorProperties extends Gst.Object.ConstructorProperties {

        // Own constructor properties of GstPlay-1.0.GstPlay.Play

        audio_video_offset?: number | null
        mute?: boolean | null
        rate?: number | null
        subtitle_video_offset?: number | null
        suburi?: string | null
        uri?: string | null
        video_multiview_flags?: GstVideo.VideoMultiviewFlags | null
        video_multiview_mode?: GstVideo.VideoMultiviewFramePacking | null
        video_renderer?: PlayVideoRenderer | null
        volume?: number | null
        audioVideoOffset?: number | null
        subtitleVideoOffset?: number | null
        videoMultiviewFlags?: GstVideo.VideoMultiviewFlags | null
        videoMultiviewMode?: GstVideo.VideoMultiviewFramePacking | null
        videoRenderer?: PlayVideoRenderer | null
    }

}

interface Play {

    // Own properties of GstPlay-1.0.GstPlay.Play

    audio_video_offset: number
    audioVideoOffset: number
    readonly current_audio_track: PlayAudioInfo
    readonly currentAudioTrack: PlayAudioInfo
    readonly current_subtitle_track: PlaySubtitleInfo
    readonly currentSubtitleTrack: PlaySubtitleInfo
    readonly current_video_track: PlayVideoInfo
    readonly currentVideoTrack: PlayVideoInfo
    readonly duration: number
    readonly media_info: PlayMediaInfo
    readonly mediaInfo: PlayMediaInfo
    mute: boolean
    readonly pipeline: Gst.Element
    readonly position: number
    rate: number
    subtitle_video_offset: number
    subtitleVideoOffset: number
    suburi: string | null
    uri: string | null
    video_multiview_flags: GstVideo.VideoMultiviewFlags
    videoMultiviewFlags: GstVideo.VideoMultiviewFlags
    video_multiview_mode: GstVideo.VideoMultiviewFramePacking
    videoMultiviewMode: GstVideo.VideoMultiviewFramePacking
    video_renderer: PlayVideoRenderer
    videoRenderer: PlayVideoRenderer
    volume: number

    // Owm methods of GstPlay-1.0.GstPlay.Play

    /**
     * Retrieve the current value of audio-video-offset property
     * @returns The current value of audio-video-offset in nanoseconds
     */
    get_audio_video_offset(): number
    /**
     * Retrieve the current value of the indicated `type`.
     * @param type #GstPlayColorBalanceType
     * @returns The current value of @type, between [0,1]. In case of   error -1 is returned.
     */
    get_color_balance(type: PlayColorBalanceType): number
    /**
     * Get a copy of the current configuration of the play. This configuration
     * can either be modified and used for the gst_play_set_config() call
     * or it must be freed after usage.
     * @returns a copy of the current configuration of @play. Use gst_structure_free() after usage or gst_play_set_config().
     */
    get_config(): Gst.Structure
    /**
     * A Function to get current audio #GstPlayAudioInfo instance.
     * @returns current audio track. The caller should free it with g_object_unref()
     */
    get_current_audio_track(): PlayAudioInfo | null
    /**
     * A Function to get current subtitle #GstPlaySubtitleInfo instance.
     * @returns current subtitle track. The caller should free it with g_object_unref()
     */
    get_current_subtitle_track(): PlaySubtitleInfo | null
    /**
     * A Function to get current video #GstPlayVideoInfo instance.
     * @returns current video track. The caller should free it with g_object_unref()
     */
    get_current_video_track(): PlayVideoInfo | null
    get_current_visualization(): string | null
    /**
     * Retrieves the duration of the media stream that self represents.
     * @returns the duration of the currently-playing media stream, in nanoseconds.
     */
    get_duration(): Gst.ClockTime
    /**
     * A Function to get the current media info #GstPlayMediaInfo instance.
     * @returns media info instance. The caller should free it with g_object_unref()
     */
    get_media_info(): PlayMediaInfo | null
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
     * @returns The play message bus instance
     */
    get_message_bus(): Gst.Bus
    /**
     * Retrieve the current value of the indicated `type`.
     * @returns The current value of @type, Default: 0x00000000 "none
     */
    get_multiview_flags(): GstVideo.VideoMultiviewFlags
    /**
     * Retrieve the current value of the indicated `type`.
     * @returns The current value of @type, Default: -1 "none"
     */
    get_multiview_mode(): GstVideo.VideoMultiviewFramePacking
    get_mute(): boolean
    get_pipeline(): Gst.Element
    get_position(): Gst.ClockTime
    get_rate(): number
    /**
     * current subtitle URI
     * @returns URI of the current external subtitle.   g_free() after usage.
     */
    get_subtitle_uri(): string | null
    /**
     * Retrieve the current value of subtitle-video-offset property
     * @returns The current value of subtitle-video-offset in nanoseconds
     */
    get_subtitle_video_offset(): number
    /**
     * Gets the URI of the currently-playing stream.
     * @returns a string containing the URI of the currently-playing stream. g_free() after usage.
     */
    get_uri(): string | null
    /**
     * Get a snapshot of the currently selected video stream, if any. The format can be
     * selected with `format` and optional configuration is possible with `config`
     * Currently supported settings are:
     * - width, height of type G_TYPE_INT
     * - pixel-aspect-ratio of type GST_TYPE_FRACTION
     *  Except for GST_PLAY_THUMBNAIL_RAW_NATIVE format, if no config is set, pixel-aspect-ratio would be 1/1
     * @param format output format of the video snapshot
     * @param config Additional configuration
     * @returns Current video snapshot sample or %NULL on failure
     */
    get_video_snapshot(format: PlaySnapshotFormat, config: Gst.Structure | null): Gst.Sample | null
    /**
     * Returns the current volume level, as a percentage between 0 and 1.
     * @returns the volume as percentage between 0 and 1.
     */
    get_volume(): number
    /**
     * Checks whether the `play` has color balance support available.
     * @returns %TRUE if @play has color balance support. Otherwise,   %FALSE.
     */
    has_color_balance(): boolean
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
    set_audio_track(stream_index: number): boolean
    /**
     * Enable or disable the current audio track.
     * @param enabled TRUE or FALSE
     */
    set_audio_track_enabled(enabled: boolean): void
    /**
     * Sets audio-video-offset property by value of `offset`
     * @param offset #gint64 in nanoseconds
     */
    set_audio_video_offset(offset: number): void
    /**
     * Sets the current value of the indicated channel `type` to the passed
     * value.
     * @param type #GstPlayColorBalanceType
     * @param value The new value for the `type,` ranged [0,1]
     */
    set_color_balance(type: PlayColorBalanceType, value: number): void
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
     * @returns %TRUE when the configuration could be set.
     */
    set_config(config: Gst.Structure): boolean
    /**
     * Sets the current value of the indicated mode `type` to the passed
     * value.
     * @param flags The new value for the `type`
     */
    set_multiview_flags(flags: GstVideo.VideoMultiviewFlags): void
    /**
     * Sets the current value of the indicated mode `type` to the passed
     * value.
     * @param mode The new value for the `type`
     */
    set_multiview_mode(mode: GstVideo.VideoMultiviewFramePacking): void
    /**
     * %TRUE if the currently-playing stream should be muted.
     * @param val Mute state the should be set
     */
    set_mute(val: boolean): void
    /**
     * Playback at specified rate
     * @param rate playback rate
     */
    set_rate(rate: number): void
    set_subtitle_track(stream_index: number): boolean
    /**
     * Enable or disable the current subtitle track.
     * @param enabled TRUE or FALSE
     */
    set_subtitle_track_enabled(enabled: boolean): void
    /**
     * Sets the external subtitle URI. This should be combined with a call to
     * gst_play_set_subtitle_track_enabled(`play,` TRUE) so the subtitles are actually
     * rendered.
     * @param uri subtitle URI
     */
    set_subtitle_uri(uri: string | null): void
    /**
     * Sets subtitle-video-offset property by value of `offset`
     * @param offset #gint64 in nanoseconds
     */
    set_subtitle_video_offset(offset: number): void
    /**
     * Sets the next URI to play.
     * @param uri next URI to play.
     */
    set_uri(uri: string | null): void
    set_video_track(stream_index: number): boolean
    /**
     * Enable or disable the current video track.
     * @param enabled TRUE or FALSE
     */
    set_video_track_enabled(enabled: boolean): void
    set_visualization(name: string | null): boolean
    /**
     * Enable or disable the visualization.
     * @param enabled TRUE or FALSE
     */
    set_visualization_enabled(enabled: boolean): void
    /**
     * Sets the volume level of the stream as a percentage between 0 and 1.
     * @param val the new volume level, as a percentage between 0 and 1
     */
    set_volume(val: number): void
    /**
     * Stops playing the current stream and resets to the first position
     * in the stream.
     */
    stop(): void

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

    // Class property signals of GstPlay-1.0.GstPlay.Play

    connect(sigName: "notify::audio-video-offset", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-video-offset", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::audio-video-offset", ...args: any[]): void
    connect(sigName: "notify::current-audio-track", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-audio-track", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-audio-track", ...args: any[]): void
    connect(sigName: "notify::current-subtitle-track", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-subtitle-track", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-subtitle-track", ...args: any[]): void
    connect(sigName: "notify::current-video-track", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-video-track", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-video-track", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::media-info", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-info", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::media-info", ...args: any[]): void
    connect(sigName: "notify::mute", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mute", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mute", ...args: any[]): void
    connect(sigName: "notify::pipeline", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pipeline", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pipeline", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::rate", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rate", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rate", ...args: any[]): void
    connect(sigName: "notify::subtitle-video-offset", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-video-offset", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle-video-offset", ...args: any[]): void
    connect(sigName: "notify::suburi", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suburi", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::suburi", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::video-multiview-flags", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-multiview-flags", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::video-multiview-flags", ...args: any[]): void
    connect(sigName: "notify::video-multiview-mode", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-multiview-mode", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::video-multiview-mode", ...args: any[]): void
    connect(sigName: "notify::video-renderer", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-renderer", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::video-renderer", ...args: any[]): void
    connect(sigName: "notify::volume", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: Play, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::volume", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Play extends Gst.Object {

    // Own properties of GstPlay-1.0.GstPlay.Play

    static name: string
    static $gtype: GObject.GType<Play>

    // Constructors of GstPlay-1.0.GstPlay.Play

    constructor(config?: Play.ConstructorProperties) 
    /**
     * Creates a new #GstPlay instance.
     * 
     * Video is going to be rendered by `video_renderer,` or if %NULL is provided
     * no special video set up will be done and some default handling will be
     * performed.
     * @constructor 
     * @param video_renderer GstPlayVideoRenderer to use
     * @returns a new #GstPlay instance
     */
    constructor(video_renderer: PlayVideoRenderer | null) 
    /**
     * Creates a new #GstPlay instance.
     * 
     * Video is going to be rendered by `video_renderer,` or if %NULL is provided
     * no special video set up will be done and some default handling will be
     * performed.
     * @constructor 
     * @param video_renderer GstPlayVideoRenderer to use
     * @returns a new #GstPlay instance
     */
    static new(video_renderer: PlayVideoRenderer | null): Play
    _init(config?: Play.ConstructorProperties): void
    static config_get_position_update_interval(config: Gst.Structure): number
    static config_get_seek_accurate(config: Gst.Structure): boolean
    /**
     * Return the user agent which has been configured using
     * gst_play_config_set_user_agent() if any.
     * @param config a #GstPlay configuration
     * @returns the configured agent, or %NULL
     */
    static config_get_user_agent(config: Gst.Structure): string | null
    /**
     * set desired interval in milliseconds between two position-updated messages.
     * pass 0 to stop updating the position.
     * @param config a #GstPlay configuration
     * @param interval interval in ms
     */
    static config_set_position_update_interval(config: Gst.Structure, interval: number): void
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
    static config_set_seek_accurate(config: Gst.Structure, accurate: boolean): void
    /**
     * Set the user agent to pass to the server if `play` needs to connect
     * to a server during playback. This is typically used when playing HTTP
     * or RTSP streams.
     * @param config a #GstPlay configuration
     * @param agent the string to use as user agent
     */
    static config_set_user_agent(config: Gst.Structure, agent: string | null): void
    static get_audio_streams(info: PlayMediaInfo): PlayAudioInfo[]
    static get_subtitle_streams(info: PlayMediaInfo): PlaySubtitleInfo[]
    static get_video_streams(info: PlayMediaInfo): PlayVideoInfo[]
    static is_play_message(msg: Gst.Message): boolean
    /**
     * Frees a %NULL terminated array of #GstPlayVisualization.
     * @param viss a %NULL terminated array of #GstPlayVisualization to free
     */
    static visualizations_free(viss: PlayVisualization): void
    static visualizations_get(): PlayVisualization[]
}

module PlayAudioInfo {

    // Constructor properties interface

    interface ConstructorProperties extends PlayStreamInfo.ConstructorProperties {
    }

}

interface PlayAudioInfo {

    // Owm methods of GstPlay-1.0.GstPlay.PlayAudioInfo

    get_bitrate(): number
    get_channels(): number
    get_language(): string | null
    get_max_bitrate(): number
    get_sample_rate(): number

    // Class property signals of GstPlay-1.0.GstPlay.PlayAudioInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: PlayAudioInfo.ConstructorProperties) 
    _init(config?: PlayAudioInfo.ConstructorProperties): void
}

module PlayMediaInfo {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface PlayMediaInfo {

    // Owm methods of GstPlay-1.0.GstPlay.PlayMediaInfo

    get_audio_streams(): PlayAudioInfo[]
    get_container_format(): string | null
    get_duration(): Gst.ClockTime
    /**
     * Function to get the image (or preview-image) stored in taglist.
     * Application can use `gst_sample_*_()` API's to get caps, buffer etc.
     * @returns GstSample or %NULL.
     */
    get_image_sample(): Gst.Sample | null
    get_number_of_audio_streams(): number
    get_number_of_streams(): number
    get_number_of_subtitle_streams(): number
    get_number_of_video_streams(): number
    get_stream_list(): PlayStreamInfo[]
    get_subtitle_streams(): PlaySubtitleInfo[]
    get_tags(): Gst.TagList | null
    get_title(): string | null
    get_uri(): string
    get_video_streams(): PlayVideoInfo[]
    is_live(): boolean
    is_seekable(): boolean

    // Class property signals of GstPlay-1.0.GstPlay.PlayMediaInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: PlayMediaInfo.ConstructorProperties) 
    _init(config?: PlayMediaInfo.ConstructorProperties): void
}

module PlaySignalAdapter {

    // Signal callback interfaces

    /**
     * Signal callback interface for `buffering`
     */
    interface BufferingSignalCallback {
        ($obj: PlaySignalAdapter, object: number): void
    }

    /**
     * Signal callback interface for `duration-changed`
     */
    interface DurationChangedSignalCallback {
        ($obj: PlaySignalAdapter, object: number): void
    }

    /**
     * Signal callback interface for `end-of-stream`
     */
    interface EndOfStreamSignalCallback {
        ($obj: PlaySignalAdapter): void
    }

    /**
     * Signal callback interface for `error`
     */
    interface ErrorSignalCallback {
        ($obj: PlaySignalAdapter, error: GLib.Error, details: Gst.Structure | null): void
    }

    /**
     * Signal callback interface for `media-info-updated`
     */
    interface MediaInfoUpdatedSignalCallback {
        ($obj: PlaySignalAdapter, object: PlayMediaInfo): void
    }

    /**
     * Signal callback interface for `mute-changed`
     */
    interface MuteChangedSignalCallback {
        ($obj: PlaySignalAdapter, object: boolean): void
    }

    /**
     * Signal callback interface for `position-updated`
     */
    interface PositionUpdatedSignalCallback {
        ($obj: PlaySignalAdapter, object: number): void
    }

    /**
     * Signal callback interface for `seek-done`
     */
    interface SeekDoneSignalCallback {
        ($obj: PlaySignalAdapter, object: number): void
    }

    /**
     * Signal callback interface for `state-changed`
     */
    interface StateChangedSignalCallback {
        ($obj: PlaySignalAdapter, object: PlayState): void
    }

    /**
     * Signal callback interface for `uri-loaded`
     */
    interface UriLoadedSignalCallback {
        ($obj: PlaySignalAdapter, object: string | null): void
    }

    /**
     * Signal callback interface for `video-dimensions-changed`
     */
    interface VideoDimensionsChangedSignalCallback {
        ($obj: PlaySignalAdapter, object: number, p0: number): void
    }

    /**
     * Signal callback interface for `volume-changed`
     */
    interface VolumeChangedSignalCallback {
        ($obj: PlaySignalAdapter, object: number): void
    }

    /**
     * Signal callback interface for `warning`
     */
    interface WarningSignalCallback {
        ($obj: PlaySignalAdapter, error: GLib.Error, details: Gst.Structure | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface PlaySignalAdapter {

    // Own properties of GstPlay-1.0.GstPlay.PlaySignalAdapter

    readonly play: Play

    // Owm methods of GstPlay-1.0.GstPlay.PlaySignalAdapter

    get_play(): Play

    // Own signals of GstPlay-1.0.GstPlay.PlaySignalAdapter

    connect(sigName: "buffering", callback: PlaySignalAdapter.BufferingSignalCallback): number
    connect_after(sigName: "buffering", callback: PlaySignalAdapter.BufferingSignalCallback): number
    emit(sigName: "buffering", object: number, ...args: any[]): void
    connect(sigName: "duration-changed", callback: PlaySignalAdapter.DurationChangedSignalCallback): number
    connect_after(sigName: "duration-changed", callback: PlaySignalAdapter.DurationChangedSignalCallback): number
    emit(sigName: "duration-changed", object: number, ...args: any[]): void
    connect(sigName: "end-of-stream", callback: PlaySignalAdapter.EndOfStreamSignalCallback): number
    connect_after(sigName: "end-of-stream", callback: PlaySignalAdapter.EndOfStreamSignalCallback): number
    emit(sigName: "end-of-stream", ...args: any[]): void
    connect(sigName: "error", callback: PlaySignalAdapter.ErrorSignalCallback): number
    connect_after(sigName: "error", callback: PlaySignalAdapter.ErrorSignalCallback): number
    emit(sigName: "error", error: GLib.Error, details: Gst.Structure | null, ...args: any[]): void
    connect(sigName: "media-info-updated", callback: PlaySignalAdapter.MediaInfoUpdatedSignalCallback): number
    connect_after(sigName: "media-info-updated", callback: PlaySignalAdapter.MediaInfoUpdatedSignalCallback): number
    emit(sigName: "media-info-updated", object: PlayMediaInfo, ...args: any[]): void
    connect(sigName: "mute-changed", callback: PlaySignalAdapter.MuteChangedSignalCallback): number
    connect_after(sigName: "mute-changed", callback: PlaySignalAdapter.MuteChangedSignalCallback): number
    emit(sigName: "mute-changed", object: boolean, ...args: any[]): void
    connect(sigName: "position-updated", callback: PlaySignalAdapter.PositionUpdatedSignalCallback): number
    connect_after(sigName: "position-updated", callback: PlaySignalAdapter.PositionUpdatedSignalCallback): number
    emit(sigName: "position-updated", object: number, ...args: any[]): void
    connect(sigName: "seek-done", callback: PlaySignalAdapter.SeekDoneSignalCallback): number
    connect_after(sigName: "seek-done", callback: PlaySignalAdapter.SeekDoneSignalCallback): number
    emit(sigName: "seek-done", object: number, ...args: any[]): void
    connect(sigName: "state-changed", callback: PlaySignalAdapter.StateChangedSignalCallback): number
    connect_after(sigName: "state-changed", callback: PlaySignalAdapter.StateChangedSignalCallback): number
    emit(sigName: "state-changed", object: PlayState, ...args: any[]): void
    connect(sigName: "uri-loaded", callback: PlaySignalAdapter.UriLoadedSignalCallback): number
    connect_after(sigName: "uri-loaded", callback: PlaySignalAdapter.UriLoadedSignalCallback): number
    emit(sigName: "uri-loaded", object: string | null, ...args: any[]): void
    connect(sigName: "video-dimensions-changed", callback: PlaySignalAdapter.VideoDimensionsChangedSignalCallback): number
    connect_after(sigName: "video-dimensions-changed", callback: PlaySignalAdapter.VideoDimensionsChangedSignalCallback): number
    emit(sigName: "video-dimensions-changed", object: number, p0: number, ...args: any[]): void
    connect(sigName: "volume-changed", callback: PlaySignalAdapter.VolumeChangedSignalCallback): number
    connect_after(sigName: "volume-changed", callback: PlaySignalAdapter.VolumeChangedSignalCallback): number
    emit(sigName: "volume-changed", object: number, ...args: any[]): void
    connect(sigName: "warning", callback: PlaySignalAdapter.WarningSignalCallback): number
    connect_after(sigName: "warning", callback: PlaySignalAdapter.WarningSignalCallback): number
    emit(sigName: "warning", error: GLib.Error, details: Gst.Structure | null, ...args: any[]): void

    // Class property signals of GstPlay-1.0.GstPlay.PlaySignalAdapter

    connect(sigName: "notify::play", callback: (($obj: PlaySignalAdapter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::play", callback: (($obj: PlaySignalAdapter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::play", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PlaySignalAdapter extends GObject.Object {

    // Own properties of GstPlay-1.0.GstPlay.PlaySignalAdapter

    static name: string
    static $gtype: GObject.GType<PlaySignalAdapter>

    // Constructors of GstPlay-1.0.GstPlay.PlaySignalAdapter

    constructor(config?: PlaySignalAdapter.ConstructorProperties) 
    /**
     * A bus-watching #GSource will be created and attached to the the
     * thread-default #GMainContext. The attached callback will emit the
     * corresponding signal for the message received. Matching signals for play
     * messages from the bus will be emitted by it on the created adapter object.
     * @constructor 
     * @param play #GstPlay instance to emit signals for.
     * @returns A new #GstPlaySignalAdapter to connect signal handlers to.
     */
    constructor(play: Play) 
    /**
     * A bus-watching #GSource will be created and attached to the the
     * thread-default #GMainContext. The attached callback will emit the
     * corresponding signal for the message received. Matching signals for play
     * messages from the bus will be emitted by it on the created adapter object.
     * @constructor 
     * @param play #GstPlay instance to emit signals for.
     * @returns A new #GstPlaySignalAdapter to connect signal handlers to.
     */
    static new(play: Play): PlaySignalAdapter
    /**
     * Create an adapter that synchronously emits its signals, from the thread in
     * which the messages have been posted.
     * @constructor 
     * @param play #GstPlay instance to emit signals for.
     * @returns A new #GstPlaySignalAdapter to connect signal handlers to.
     */
    static new_sync_emit(play: Play): PlaySignalAdapter
    /**
     * A bus-watching #GSource will be created and attached to the `context`. The
     * attached callback will emit the corresponding signal for the message
     * received. Matching signals for play messages from the bus will be emitted by
     * it on the created adapter object.
     * @constructor 
     * @param play #GstPlay instance to emit signals for.
     * @param context A #GMainContext on which the main-loop will process play bus messages on.
     * @returns A new #GstPlaySignalAdapter to connect signal handlers to.
     */
    static new_with_main_context(play: Play, context: GLib.MainContext): PlaySignalAdapter
    _init(config?: PlaySignalAdapter.ConstructorProperties): void
}

module PlayStreamInfo {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface PlayStreamInfo {

    // Owm methods of GstPlay-1.0.GstPlay.PlayStreamInfo

    get_caps(): Gst.Caps | null
    /**
     * A string describing codec used in #GstPlayStreamInfo.
     * @returns codec string or %NULL on unknown.
     */
    get_codec(): string | null
    /**
     * Function to get stream index from #GstPlayStreamInfo instance or -1 if
     * unknown.
     * @returns the stream index of this stream.
     */
    get_index(): number
    /**
     * Function to return human readable name for the stream type
     * of the given `info` (ex: "audio", "video", "subtitle")
     * @returns a human readable name
     */
    get_stream_type(): string
    get_tags(): Gst.TagList | null

    // Class property signals of GstPlay-1.0.GstPlay.PlayStreamInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: PlayStreamInfo.ConstructorProperties) 
    _init(config?: PlayStreamInfo.ConstructorProperties): void
}

module PlaySubtitleInfo {

    // Constructor properties interface

    interface ConstructorProperties extends PlayStreamInfo.ConstructorProperties {
    }

}

interface PlaySubtitleInfo {

    // Owm methods of GstPlay-1.0.GstPlay.PlaySubtitleInfo

    get_language(): string | null

    // Class property signals of GstPlay-1.0.GstPlay.PlaySubtitleInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: PlaySubtitleInfo.ConstructorProperties) 
    _init(config?: PlaySubtitleInfo.ConstructorProperties): void
}

module PlayVideoInfo {

    // Constructor properties interface

    interface ConstructorProperties extends PlayStreamInfo.ConstructorProperties {
    }

}

interface PlayVideoInfo {

    // Owm methods of GstPlay-1.0.GstPlay.PlayVideoInfo

    get_bitrate(): number
    get_framerate(): [ /* fps_n */ number, /* fps_d */ number ]
    get_height(): number
    get_max_bitrate(): number
    /**
     * Returns the pixel aspect ratio in `par_n` and `par_d`
     */
    get_pixel_aspect_ratio(): [ /* par_n */ number, /* par_d */ number ]
    get_width(): number

    // Class property signals of GstPlay-1.0.GstPlay.PlayVideoInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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

    constructor(config?: PlayVideoInfo.ConstructorProperties) 
    _init(config?: PlayVideoInfo.ConstructorProperties): void
}

module PlayVideoOverlayVideoRenderer {

    // Constructor properties interface

    interface ConstructorProperties extends PlayVideoRenderer.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GstPlay-1.0.GstPlay.PlayVideoOverlayVideoRenderer

        video_sink?: Gst.Element | null
        window_handle?: any | null
        videoSink?: Gst.Element | null
        windowHandle?: any | null
    }

}

interface PlayVideoOverlayVideoRenderer extends PlayVideoRenderer {

    // Own properties of GstPlay-1.0.GstPlay.PlayVideoOverlayVideoRenderer

    video_sink: Gst.Element
    videoSink: Gst.Element
    window_handle: any
    windowHandle: any

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
    get_render_rectangle(): [ /* x */ number, /* y */ number, /* width */ number, /* height */ number ]
    get_window_handle(): any | null
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
    set_render_rectangle(x: number, y: number, width: number, height: number): void
    /**
     * Sets the platform specific window handle into which the video
     * should be rendered
     * @param window_handle handle referencing to the platform specific window
     */
    set_window_handle(window_handle: any | null): void

    // Class property signals of GstPlay-1.0.GstPlay.PlayVideoOverlayVideoRenderer

    connect(sigName: "notify::video-sink", callback: (($obj: PlayVideoOverlayVideoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-sink", callback: (($obj: PlayVideoOverlayVideoRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::video-sink", ...args: any[]): void
    connect(sigName: "notify::window-handle", callback: (($obj: PlayVideoOverlayVideoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-handle", callback: (($obj: PlayVideoOverlayVideoRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-handle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PlayVideoOverlayVideoRenderer extends GObject.Object {

    // Own properties of GstPlay-1.0.GstPlay.PlayVideoOverlayVideoRenderer

    static name: string
    static $gtype: GObject.GType<PlayVideoOverlayVideoRenderer>

    // Constructors of GstPlay-1.0.GstPlay.PlayVideoOverlayVideoRenderer

    constructor(config?: PlayVideoOverlayVideoRenderer.ConstructorProperties) 
    _init(config?: PlayVideoOverlayVideoRenderer.ConstructorProperties): void
    static new(window_handle: any | null): PlayVideoRenderer
    static new_with_sink(window_handle: any | null, video_sink: Gst.Element): PlayVideoRenderer
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

    parent_iface: GObject.TypeInterface
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
    name: string | null
    /**
     * description of the visualization.
     * @field 
     */
    description: string | null

    // Owm methods of GstPlay-1.0.GstPlay.PlayVisualization

    /**
     * Makes a copy of the #GstPlayVisualization. The result must be
     * freed using gst_play_visualization_free().
     * @returns an allocated copy of @vis.
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

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default GstPlay;
// END