// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstPlayer-1.0
 */

import type * as Gjs from './Gjs';
import type GstVideo from './GstVideo-1.0';
import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type GstTag from './GstTag-1.0';
import type GstPbutils from './GstPbutils-1.0';
import type GstAudio from './GstAudio-1.0';

export namespace GstPlayer {

enum PlayerColorBalanceType {
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
enum PlayerError {
    /**
     * generic error.
     */
    FAILED,
}
enum PlayerSnapshotFormat {
    RAW_NATIVE,
    RAW_XRGB,
    RAW_BGRX,
    JPG,
    PNG,
}
enum PlayerState {
    /**
     * the player is stopped.
     */
    STOPPED,
    /**
     * the player is buffering.
     */
    BUFFERING,
    /**
     * the player is paused.
     */
    PAUSED,
    /**
     * the player is currently playing a
     * stream.
     */
    PLAYING,
}
/**
 * Gets a string representing the given color balance type.
 * @param type a #GstPlayerColorBalanceType
 */
function player_color_balance_type_get_name(type: PlayerColorBalanceType): string
/**
 * Gets a string representing the given error.
 * @param error a #GstPlayerError
 */
function player_error_get_name(error: PlayerError): string
function player_error_quark(): GLib.Quark
/**
 * Gets a string representing the given state.
 * @param state a #GstPlayerState
 */
function player_state_get_name(state: PlayerState): string
interface PlayerSignalDispatcherFunc {
    (data: object | null): void
}
interface PlayerSignalDispatcher_ConstructProps extends GObject.Object_ConstructProps {
}

interface PlayerSignalDispatcher {

    // Own virtual methods of GstPlayer-1.0.GstPlayer.PlayerSignalDispatcher

    vfunc_dispatch(player: Player, emitter: PlayerSignalDispatcherFunc): void

    // Class property signals of GstPlayer-1.0.GstPlayer.PlayerSignalDispatcher

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PlayerSignalDispatcher extends GObject.Object {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerSignalDispatcher

    static name: string
    static $gtype: GObject.GType<PlayerSignalDispatcher>

    // Constructors of GstPlayer-1.0.GstPlayer.PlayerSignalDispatcher

    constructor(config?: PlayerSignalDispatcher_ConstructProps) 
    _init(config?: PlayerSignalDispatcher_ConstructProps): void
}

interface PlayerVideoRenderer_ConstructProps extends GObject.Object_ConstructProps {
}

interface PlayerVideoRenderer {

    // Class property signals of GstPlayer-1.0.GstPlayer.PlayerVideoRenderer

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PlayerVideoRenderer extends GObject.Object {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerVideoRenderer

    static name: string
    static $gtype: GObject.GType<PlayerVideoRenderer>

    // Constructors of GstPlayer-1.0.GstPlayer.PlayerVideoRenderer

    constructor(config?: PlayerVideoRenderer_ConstructProps) 
    _init(config?: PlayerVideoRenderer_ConstructProps): void
}

interface Player_ConstructProps extends Gst.Object_ConstructProps {

    // Own constructor properties of GstPlayer-1.0.GstPlayer.Player

    audio_video_offset?: number | null
    mute?: boolean | null
    rate?: number | null
    signal_dispatcher?: PlayerSignalDispatcher | null
    subtitle_video_offset?: number | null
    suburi?: string | null
    uri?: string | null
    video_multiview_flags?: GstVideo.VideoMultiviewFlags | null
    video_multiview_mode?: GstVideo.VideoMultiviewFramePacking | null
    volume?: number | null
}

/**
 * Signal callback interface for `buffering`
 */
interface Player_BufferingSignalCallback {
    ($obj: Player, object: number): void
}

/**
 * Signal callback interface for `duration-changed`
 */
interface Player_DurationChangedSignalCallback {
    ($obj: Player, object: number): void
}

/**
 * Signal callback interface for `end-of-stream`
 */
interface Player_EndOfStreamSignalCallback {
    ($obj: Player): void
}

/**
 * Signal callback interface for `error`
 */
interface Player_ErrorSignalCallback {
    ($obj: Player, object: GLib.Error): void
}

/**
 * Signal callback interface for `media-info-updated`
 */
interface Player_MediaInfoUpdatedSignalCallback {
    ($obj: Player, object: PlayerMediaInfo): void
}

/**
 * Signal callback interface for `mute-changed`
 */
interface Player_MuteChangedSignalCallback {
    ($obj: Player): void
}

/**
 * Signal callback interface for `position-updated`
 */
interface Player_PositionUpdatedSignalCallback {
    ($obj: Player, object: number): void
}

/**
 * Signal callback interface for `seek-done`
 */
interface Player_SeekDoneSignalCallback {
    ($obj: Player, object: number): void
}

/**
 * Signal callback interface for `state-changed`
 */
interface Player_StateChangedSignalCallback {
    ($obj: Player, object: PlayerState): void
}

/**
 * Signal callback interface for `uri-loaded`
 */
interface Player_UriLoadedSignalCallback {
    ($obj: Player, object: string): void
}

/**
 * Signal callback interface for `video-dimensions-changed`
 */
interface Player_VideoDimensionsChangedSignalCallback {
    ($obj: Player, object: number, p0: number): void
}

/**
 * Signal callback interface for `volume-changed`
 */
interface Player_VolumeChangedSignalCallback {
    ($obj: Player): void
}

/**
 * Signal callback interface for `warning`
 */
interface Player_WarningSignalCallback {
    ($obj: Player, object: GLib.Error): void
}

interface Player {

    // Own properties of GstPlayer-1.0.GstPlayer.Player

    audio_video_offset: number
    readonly current_audio_track: PlayerAudioInfo
    readonly current_subtitle_track: PlayerSubtitleInfo
    readonly current_video_track: PlayerVideoInfo
    readonly duration: number
    readonly media_info: PlayerMediaInfo
    mute: boolean
    readonly pipeline: Gst.Element
    readonly position: number
    rate: number
    readonly signal_dispatcher: PlayerSignalDispatcher
    subtitle_video_offset: number
    suburi: string
    uri: string
    video_multiview_flags: GstVideo.VideoMultiviewFlags
    video_multiview_mode: GstVideo.VideoMultiviewFramePacking
    readonly video_renderer: PlayerVideoRenderer
    volume: number

    // Owm methods of GstPlayer-1.0.GstPlayer.Player

    /**
     * Retrieve the current value of audio-video-offset property
     */
    get_audio_video_offset(): number
    /**
     * Retrieve the current value of the indicated `type`.
     * @param type #GstPlayerColorBalanceType
     */
    get_color_balance(type: PlayerColorBalanceType): number
    /**
     * Get a copy of the current configuration of the player. This configuration
     * can either be modified and used for the gst_player_set_config() call
     * or it must be freed after usage.
     */
    get_config(): Gst.Structure
    /**
     * A Function to get current audio #GstPlayerAudioInfo instance.
     */
    get_current_audio_track(): PlayerAudioInfo | null
    /**
     * A Function to get current subtitle #GstPlayerSubtitleInfo instance.
     */
    get_current_subtitle_track(): PlayerSubtitleInfo | null
    /**
     * A Function to get current video #GstPlayerVideoInfo instance.
     */
    get_current_video_track(): PlayerVideoInfo | null
    get_current_visualization(): string | null
    /**
     * Retrieves the duration of the media stream that self represents.
     */
    get_duration(): Gst.ClockTime
    /**
     * A Function to get the current media info #GstPlayerMediaInfo instance.
     */
    get_media_info(): PlayerMediaInfo | null
    /**
     * Retrieve the current value of the indicated `type`.
     */
    get_multiview_flags(): GstVideo.VideoMultiviewFlags
    /**
     * Retrieve the current value of the indicated `type`.
     */
    get_multiview_mode(): GstVideo.VideoMultiviewFramePacking
    get_mute(): boolean
    get_pipeline(): Gst.Element
    get_position(): Gst.ClockTime
    get_rate(): number
    /**
     * current subtitle URI
     */
    get_subtitle_uri(): string | null
    /**
     * Retrieve the current value of subtitle-video-offset property
     */
    get_subtitle_video_offset(): number
    /**
     * Gets the URI of the currently-playing stream.
     */
    get_uri(): string | null
    /**
     * Get a snapshot of the currently selected video stream, if any. The format can be
     * selected with `format` and optional configuration is possible with `config`
     * Currently supported settings are:
     * - width, height of type G_TYPE_INT
     * - pixel-aspect-ratio of type GST_TYPE_FRACTION
     *  Except for GST_PLAYER_THUMBNAIL_RAW_NATIVE format, if no config is set, pixel-aspect-ratio would be 1/1
     * @param format output format of the video snapshot
     * @param config Additional configuration
     */
    get_video_snapshot(format: PlayerSnapshotFormat, config: Gst.Structure | null): Gst.Sample | null
    /**
     * Returns the current volume level, as a percentage between 0 and 1.
     */
    get_volume(): number
    /**
     * Checks whether the `player` has color balance support available.
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
     * @param type #GstPlayerColorBalanceType
     * @param value The new value for the `type,` ranged [0,1]
     */
    set_color_balance(type: PlayerColorBalanceType, value: number): void
    /**
     * Set the configuration of the player. If the player is already configured, and
     * the configuration haven't change, this function will return %TRUE. If the
     * player is not in the GST_PLAYER_STATE_STOPPED, this method will return %FALSE
     * and active configuration will remain.
     * 
     * `config` is a #GstStructure that contains the configuration parameters for
     * the player.
     * 
     * This function takes ownership of `config`.
     * @param config a #GstStructure
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
     * gst_player_set_subtitle_track_enabled(`player,` TRUE) so the subtitles are actually
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
     * 
     * This volume is a linear factor. For showing the volume in a GUI it
     * might make sense to first convert from a different format. Volume sliders
     * should usually use a cubic volume. See gst_stream_volume_convert_volume().
     * @param val the new volume level, as a percentage between 0 and 1
     */
    set_volume(val: number): void
    /**
     * Stops playing the current stream and resets to the first position
     * in the stream.
     */
    stop(): void

    // Conflicting methods

    ref(...args: any[]): any

    // Own signals of GstPlayer-1.0.GstPlayer.Player

    connect(sigName: "buffering", callback: Player_BufferingSignalCallback): number
    connect_after(sigName: "buffering", callback: Player_BufferingSignalCallback): number
    emit(sigName: "buffering", object: number, ...args: any[]): void
    connect(sigName: "duration-changed", callback: Player_DurationChangedSignalCallback): number
    connect_after(sigName: "duration-changed", callback: Player_DurationChangedSignalCallback): number
    emit(sigName: "duration-changed", object: number, ...args: any[]): void
    connect(sigName: "end-of-stream", callback: Player_EndOfStreamSignalCallback): number
    connect_after(sigName: "end-of-stream", callback: Player_EndOfStreamSignalCallback): number
    emit(sigName: "end-of-stream", ...args: any[]): void
    connect(sigName: "error", callback: Player_ErrorSignalCallback): number
    connect_after(sigName: "error", callback: Player_ErrorSignalCallback): number
    emit(sigName: "error", object: GLib.Error, ...args: any[]): void
    connect(sigName: "media-info-updated", callback: Player_MediaInfoUpdatedSignalCallback): number
    connect_after(sigName: "media-info-updated", callback: Player_MediaInfoUpdatedSignalCallback): number
    emit(sigName: "media-info-updated", object: PlayerMediaInfo, ...args: any[]): void
    connect(sigName: "mute-changed", callback: Player_MuteChangedSignalCallback): number
    connect_after(sigName: "mute-changed", callback: Player_MuteChangedSignalCallback): number
    emit(sigName: "mute-changed", ...args: any[]): void
    connect(sigName: "position-updated", callback: Player_PositionUpdatedSignalCallback): number
    connect_after(sigName: "position-updated", callback: Player_PositionUpdatedSignalCallback): number
    emit(sigName: "position-updated", object: number, ...args: any[]): void
    connect(sigName: "seek-done", callback: Player_SeekDoneSignalCallback): number
    connect_after(sigName: "seek-done", callback: Player_SeekDoneSignalCallback): number
    emit(sigName: "seek-done", object: number, ...args: any[]): void
    connect(sigName: "state-changed", callback: Player_StateChangedSignalCallback): number
    connect_after(sigName: "state-changed", callback: Player_StateChangedSignalCallback): number
    emit(sigName: "state-changed", object: PlayerState, ...args: any[]): void
    connect(sigName: "uri-loaded", callback: Player_UriLoadedSignalCallback): number
    connect_after(sigName: "uri-loaded", callback: Player_UriLoadedSignalCallback): number
    emit(sigName: "uri-loaded", object: string, ...args: any[]): void
    connect(sigName: "video-dimensions-changed", callback: Player_VideoDimensionsChangedSignalCallback): number
    connect_after(sigName: "video-dimensions-changed", callback: Player_VideoDimensionsChangedSignalCallback): number
    emit(sigName: "video-dimensions-changed", object: number, p0: number, ...args: any[]): void
    connect(sigName: "volume-changed", callback: Player_VolumeChangedSignalCallback): number
    connect_after(sigName: "volume-changed", callback: Player_VolumeChangedSignalCallback): number
    emit(sigName: "volume-changed", ...args: any[]): void
    connect(sigName: "warning", callback: Player_WarningSignalCallback): number
    connect_after(sigName: "warning", callback: Player_WarningSignalCallback): number
    emit(sigName: "warning", object: GLib.Error, ...args: any[]): void

    // Class property signals of GstPlayer-1.0.GstPlayer.Player

    connect(sigName: "notify::audio-video-offset", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::audio-video-offset", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::audio-video-offset", ...args: any[]): void
    connect(sigName: "notify::current-audio-track", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-audio-track", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-audio-track", ...args: any[]): void
    connect(sigName: "notify::current-subtitle-track", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-subtitle-track", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-subtitle-track", ...args: any[]): void
    connect(sigName: "notify::current-video-track", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-video-track", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-video-track", ...args: any[]): void
    connect(sigName: "notify::duration", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::duration", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::media-info", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-info", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::media-info", ...args: any[]): void
    connect(sigName: "notify::mute", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mute", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mute", ...args: any[]): void
    connect(sigName: "notify::pipeline", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pipeline", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pipeline", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::rate", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rate", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rate", ...args: any[]): void
    connect(sigName: "notify::signal-dispatcher", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::signal-dispatcher", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::signal-dispatcher", ...args: any[]): void
    connect(sigName: "notify::subtitle-video-offset", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subtitle-video-offset", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subtitle-video-offset", ...args: any[]): void
    connect(sigName: "notify::suburi", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suburi", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::suburi", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::video-multiview-flags", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-multiview-flags", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::video-multiview-flags", ...args: any[]): void
    connect(sigName: "notify::video-multiview-mode", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-multiview-mode", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::video-multiview-mode", ...args: any[]): void
    connect(sigName: "notify::video-renderer", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-renderer", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::video-renderer", ...args: any[]): void
    connect(sigName: "notify::volume", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::volume", callback: (($obj: Player, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::volume", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Starting from GStreamer 1.20, application developers are strongly advised to migrate to #GstPlay.
 * #GstPlayer will be deprecated in 1.20 and most likely removed by 1.24.
 * @class 
 */
class Player extends Gst.Object {

    // Own properties of GstPlayer-1.0.GstPlayer.Player

    static name: string
    static $gtype: GObject.GType<Player>

    // Constructors of GstPlayer-1.0.GstPlayer.Player

    constructor(config?: Player_ConstructProps) 
    /**
     * Creates a new #GstPlayer instance that uses `signal_dispatcher` to dispatch
     * signals to some event loop system, or emits signals directly if NULL is
     * passed. See gst_player_g_main_context_signal_dispatcher_new().
     * 
     * Video is going to be rendered by `video_renderer,` or if %NULL is provided
     * no special video set up will be done and some default handling will be
     * performed.
     * @constructor 
     * @param video_renderer GstPlayerVideoRenderer to use
     * @param signal_dispatcher GstPlayerSignalDispatcher to use
     */
    constructor(video_renderer: PlayerVideoRenderer | null, signal_dispatcher: PlayerSignalDispatcher | null) 
    /**
     * Creates a new #GstPlayer instance that uses `signal_dispatcher` to dispatch
     * signals to some event loop system, or emits signals directly if NULL is
     * passed. See gst_player_g_main_context_signal_dispatcher_new().
     * 
     * Video is going to be rendered by `video_renderer,` or if %NULL is provided
     * no special video set up will be done and some default handling will be
     * performed.
     * @constructor 
     * @param video_renderer GstPlayerVideoRenderer to use
     * @param signal_dispatcher GstPlayerSignalDispatcher to use
     */
    static new(video_renderer: PlayerVideoRenderer | null, signal_dispatcher: PlayerSignalDispatcher | null): Player
    _init(config?: Player_ConstructProps): void
    static config_get_position_update_interval(config: Gst.Structure): number
    static config_get_seek_accurate(config: Gst.Structure): boolean
    /**
     * Return the user agent which has been configured using
     * gst_player_config_set_user_agent() if any.
     * @param config a #GstPlayer configuration
     */
    static config_get_user_agent(config: Gst.Structure): string | null
    /**
     * set interval in milliseconds between two position-updated signals.
     * pass 0 to stop updating the position.
     * @param config a #GstPlayer configuration
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
     * @param config a #GstPlayer configuration
     * @param accurate accurate seek or not
     */
    static config_set_seek_accurate(config: Gst.Structure, accurate: boolean): void
    /**
     * Set the user agent to pass to the server if `player` needs to connect
     * to a server during playback. This is typically used when playing HTTP
     * or RTSP streams.
     * @param config a #GstPlayer configuration
     * @param agent the string to use as user agent
     */
    static config_set_user_agent(config: Gst.Structure, agent: string | null): void
    static get_audio_streams(info: PlayerMediaInfo): PlayerAudioInfo[]
    static get_subtitle_streams(info: PlayerMediaInfo): PlayerSubtitleInfo[]
    static get_video_streams(info: PlayerMediaInfo): PlayerVideoInfo[]
    /**
     * Frees a %NULL terminated array of #GstPlayerVisualization.
     * @param viss a %NULL terminated array of #GstPlayerVisualization to free
     */
    static visualizations_free(viss: PlayerVisualization): void
    static visualizations_get(): PlayerVisualization[]
}

interface PlayerAudioInfo_ConstructProps extends PlayerStreamInfo_ConstructProps {
}

interface PlayerAudioInfo {

    // Owm methods of GstPlayer-1.0.GstPlayer.PlayerAudioInfo

    get_bitrate(): number
    get_channels(): number
    get_language(): string | null
    get_max_bitrate(): number
    get_sample_rate(): number

    // Class property signals of GstPlayer-1.0.GstPlayer.PlayerAudioInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GstPlayerStreamInfo specific to audio streams.
 * @class 
 */
class PlayerAudioInfo extends PlayerStreamInfo {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerAudioInfo

    static name: string
    static $gtype: GObject.GType<PlayerAudioInfo>

    // Constructors of GstPlayer-1.0.GstPlayer.PlayerAudioInfo

    constructor(config?: PlayerAudioInfo_ConstructProps) 
    _init(config?: PlayerAudioInfo_ConstructProps): void
}

interface PlayerGMainContextSignalDispatcher_ConstructProps extends PlayerSignalDispatcher_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of GstPlayer-1.0.GstPlayer.PlayerGMainContextSignalDispatcher

    application_context?: GLib.MainContext | null
}

interface PlayerGMainContextSignalDispatcher extends PlayerSignalDispatcher {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerGMainContextSignalDispatcher

    readonly application_context: GLib.MainContext

    // Class property signals of GstPlayer-1.0.GstPlayer.PlayerGMainContextSignalDispatcher

    connect(sigName: "notify::application-context", callback: (($obj: PlayerGMainContextSignalDispatcher, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-context", callback: (($obj: PlayerGMainContextSignalDispatcher, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application-context", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PlayerGMainContextSignalDispatcher extends GObject.Object {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerGMainContextSignalDispatcher

    static name: string
    static $gtype: GObject.GType<PlayerGMainContextSignalDispatcher>

    // Constructors of GstPlayer-1.0.GstPlayer.PlayerGMainContextSignalDispatcher

    constructor(config?: PlayerGMainContextSignalDispatcher_ConstructProps) 
    _init(config?: PlayerGMainContextSignalDispatcher_ConstructProps): void
    /**
     * Creates a new GstPlayerSignalDispatcher that uses `application_context,`
     * or the thread default one if %NULL is used. See gst_player_new().
     * @param application_context GMainContext to use or %NULL
     */
    static new(application_context: GLib.MainContext | null): PlayerSignalDispatcher
}

interface PlayerMediaInfo_ConstructProps extends GObject.Object_ConstructProps {
}

interface PlayerMediaInfo {

    // Owm methods of GstPlayer-1.0.GstPlayer.PlayerMediaInfo

    get_audio_streams(): PlayerAudioInfo[]
    get_container_format(): string | null
    get_duration(): Gst.ClockTime
    /**
     * Function to get the image (or preview-image) stored in taglist.
     * Application can use `gst_sample_*_()` API's to get caps, buffer etc.
     */
    get_image_sample(): Gst.Sample | null
    get_number_of_audio_streams(): number
    get_number_of_streams(): number
    get_number_of_subtitle_streams(): number
    get_number_of_video_streams(): number
    get_stream_list(): PlayerStreamInfo[]
    get_subtitle_streams(): PlayerSubtitleInfo[]
    get_tags(): Gst.TagList | null
    get_title(): string | null
    get_uri(): string
    get_video_streams(): PlayerVideoInfo[]
    is_live(): boolean
    is_seekable(): boolean

    // Class property signals of GstPlayer-1.0.GstPlayer.PlayerMediaInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Structure containing the media information of a URI.
 * @class 
 */
class PlayerMediaInfo extends GObject.Object {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerMediaInfo

    static name: string
    static $gtype: GObject.GType<PlayerMediaInfo>

    // Constructors of GstPlayer-1.0.GstPlayer.PlayerMediaInfo

    constructor(config?: PlayerMediaInfo_ConstructProps) 
    _init(config?: PlayerMediaInfo_ConstructProps): void
}

interface PlayerStreamInfo_ConstructProps extends GObject.Object_ConstructProps {
}

interface PlayerStreamInfo {

    // Owm methods of GstPlayer-1.0.GstPlayer.PlayerStreamInfo

    get_caps(): Gst.Caps | null
    /**
     * A string describing codec used in #GstPlayerStreamInfo.
     */
    get_codec(): string | null
    /**
     * Function to get stream index from #GstPlayerStreamInfo instance or -1 if
     * unknown.
     */
    get_index(): number
    /**
     * Function to return human readable name for the stream type
     * of the given `info` (ex: "audio", "video", "subtitle")
     */
    get_stream_type(): string
    get_tags(): Gst.TagList | null

    // Class property signals of GstPlayer-1.0.GstPlayer.PlayerStreamInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Base structure for information concerning a media stream. Depending on
 * the stream type, one can find more media-specific information in
 * #GstPlayerVideoInfo, #GstPlayerAudioInfo, #GstPlayerSubtitleInfo.
 * @class 
 */
class PlayerStreamInfo extends GObject.Object {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerStreamInfo

    static name: string
    static $gtype: GObject.GType<PlayerStreamInfo>

    // Constructors of GstPlayer-1.0.GstPlayer.PlayerStreamInfo

    constructor(config?: PlayerStreamInfo_ConstructProps) 
    _init(config?: PlayerStreamInfo_ConstructProps): void
}

interface PlayerSubtitleInfo_ConstructProps extends PlayerStreamInfo_ConstructProps {
}

interface PlayerSubtitleInfo {

    // Owm methods of GstPlayer-1.0.GstPlayer.PlayerSubtitleInfo

    get_language(): string | null

    // Class property signals of GstPlayer-1.0.GstPlayer.PlayerSubtitleInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GstPlayerStreamInfo specific to subtitle streams.
 * @class 
 */
class PlayerSubtitleInfo extends PlayerStreamInfo {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerSubtitleInfo

    static name: string
    static $gtype: GObject.GType<PlayerSubtitleInfo>

    // Constructors of GstPlayer-1.0.GstPlayer.PlayerSubtitleInfo

    constructor(config?: PlayerSubtitleInfo_ConstructProps) 
    _init(config?: PlayerSubtitleInfo_ConstructProps): void
}

interface PlayerVideoInfo_ConstructProps extends PlayerStreamInfo_ConstructProps {
}

interface PlayerVideoInfo {

    // Owm methods of GstPlayer-1.0.GstPlayer.PlayerVideoInfo

    get_bitrate(): number
    get_framerate(): [ /* fps_n */ number, /* fps_d */ number ]
    get_height(): number
    get_max_bitrate(): number
    /**
     * Returns the pixel aspect ratio in `par_n` and `par_d`
     */
    get_pixel_aspect_ratio(): [ /* par_n */ number, /* par_d */ number ]
    get_width(): number

    // Class property signals of GstPlayer-1.0.GstPlayer.PlayerVideoInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GstPlayerStreamInfo specific to video streams.
 * @class 
 */
class PlayerVideoInfo extends PlayerStreamInfo {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerVideoInfo

    static name: string
    static $gtype: GObject.GType<PlayerVideoInfo>

    // Constructors of GstPlayer-1.0.GstPlayer.PlayerVideoInfo

    constructor(config?: PlayerVideoInfo_ConstructProps) 
    _init(config?: PlayerVideoInfo_ConstructProps): void
}

interface PlayerVideoOverlayVideoRenderer_ConstructProps extends PlayerVideoRenderer_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of GstPlayer-1.0.GstPlayer.PlayerVideoOverlayVideoRenderer

    video_sink?: Gst.Element | null
    window_handle?: object | null
}

interface PlayerVideoOverlayVideoRenderer extends PlayerVideoRenderer {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerVideoOverlayVideoRenderer

    video_sink: Gst.Element
    window_handle: object

    // Owm methods of GstPlayer-1.0.GstPlayer.PlayerVideoOverlayVideoRenderer

    /**
     * Tell an overlay that it has been exposed. This will redraw the current frame
     * in the drawable even if the pipeline is PAUSED.
     */
    expose(): void
    /**
     * Return the currently configured render rectangle. See gst_player_video_overlay_video_renderer_set_render_rectangle()
     * for details.
     */
    get_render_rectangle(): [ /* x */ number, /* y */ number, /* width */ number, /* height */ number ]
    get_window_handle(): object | null
    /**
     * Configure a subregion as a video target within the window set by
     * gst_player_video_overlay_video_renderer_set_window_handle(). If this is not
     * used or not supported the video will fill the area of the window set as the
     * overlay to 100%. By specifying the rectangle, the video can be overlaid to
     * a specific region of that window only. After setting the new rectangle one
     * should call gst_player_video_overlay_video_renderer_expose() to force a
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
    set_window_handle(window_handle: object | null): void

    // Class property signals of GstPlayer-1.0.GstPlayer.PlayerVideoOverlayVideoRenderer

    connect(sigName: "notify::video-sink", callback: (($obj: PlayerVideoOverlayVideoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::video-sink", callback: (($obj: PlayerVideoOverlayVideoRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::video-sink", ...args: any[]): void
    connect(sigName: "notify::window-handle", callback: (($obj: PlayerVideoOverlayVideoRenderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-handle", callback: (($obj: PlayerVideoOverlayVideoRenderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-handle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PlayerVideoOverlayVideoRenderer extends GObject.Object {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerVideoOverlayVideoRenderer

    static name: string
    static $gtype: GObject.GType<PlayerVideoOverlayVideoRenderer>

    // Constructors of GstPlayer-1.0.GstPlayer.PlayerVideoOverlayVideoRenderer

    constructor(config?: PlayerVideoOverlayVideoRenderer_ConstructProps) 
    _init(config?: PlayerVideoOverlayVideoRenderer_ConstructProps): void
    static new(window_handle: object | null): PlayerVideoRenderer
    static new_with_sink(window_handle: object | null, video_sink: Gst.Element): PlayerVideoRenderer
}

interface PlayerAudioInfoClass {
}

abstract class PlayerAudioInfoClass {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerAudioInfoClass

    static name: string
}

interface PlayerClass {
}

abstract class PlayerClass {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerClass

    static name: string
}

interface PlayerGMainContextSignalDispatcherClass {
}

abstract class PlayerGMainContextSignalDispatcherClass {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerGMainContextSignalDispatcherClass

    static name: string
}

interface PlayerMediaInfoClass {
}

abstract class PlayerMediaInfoClass {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerMediaInfoClass

    static name: string
}

interface PlayerSignalDispatcherInterface {

    // Own fields of GstPlayer-1.0.GstPlayer.PlayerSignalDispatcherInterface

    parent_iface: GObject.TypeInterface
    dispatch: (self: PlayerSignalDispatcher, player: Player, emitter: PlayerSignalDispatcherFunc) => void
}

abstract class PlayerSignalDispatcherInterface {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerSignalDispatcherInterface

    static name: string
}

interface PlayerStreamInfoClass {
}

abstract class PlayerStreamInfoClass {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerStreamInfoClass

    static name: string
}

interface PlayerSubtitleInfoClass {
}

abstract class PlayerSubtitleInfoClass {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerSubtitleInfoClass

    static name: string
}

interface PlayerVideoInfoClass {
}

abstract class PlayerVideoInfoClass {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerVideoInfoClass

    static name: string
}

interface PlayerVideoOverlayVideoRendererClass {
}

abstract class PlayerVideoOverlayVideoRendererClass {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerVideoOverlayVideoRendererClass

    static name: string
}

interface PlayerVideoRendererInterface {

    // Own fields of GstPlayer-1.0.GstPlayer.PlayerVideoRendererInterface

    parent_iface: GObject.TypeInterface
}

abstract class PlayerVideoRendererInterface {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerVideoRendererInterface

    static name: string
}

interface PlayerVisualization {

    // Own fields of GstPlayer-1.0.GstPlayer.PlayerVisualization

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

    // Owm methods of GstPlayer-1.0.GstPlayer.PlayerVisualization

    /**
     * Makes a copy of the #GstPlayerVisualization. The result must be
     * freed using gst_player_visualization_free().
     */
    copy(): PlayerVisualization
    /**
     * Frees a #GstPlayerVisualization.
     */
    free(): void
}

/**
 * A #GstPlayerVisualization descriptor.
 * @record 
 */
class PlayerVisualization {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerVisualization

    static name: string
}

}
export default GstPlayer;