
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gstplayer-1.0-import.d.ts';
    
/**
 * GstPlayer-1.0
 */

import type GstVideo from '@girs/node-gstvideo-1.0';
import type GstBase from '@girs/node-gstbase-1.0';
import type Gst from '@girs/node-gst-1.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type GModule from '@girs/node-gmodule-2.0';
import type GstTag from '@girs/node-gsttag-1.0';
import type GstPbutils from '@girs/node-gstpbutils-1.0';
import type GstAudio from '@girs/node-gstaudio-1.0';

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
 * @returns a string with the name of the color   balance type.
 */
function playerColorBalanceTypeGetName(type: PlayerColorBalanceType): string | null
/**
 * Gets a string representing the given error.
 * @param error a #GstPlayerError
 * @returns a string with the given error.
 */
function playerErrorGetName(error: PlayerError): string | null
function playerErrorQuark(): GLib.Quark
/**
 * Gets a string representing the given state.
 * @param state a #GstPlayerState
 * @returns a string with the name of the state.
 */
function playerStateGetName(state: PlayerState): string | null
interface PlayerSignalDispatcherFunc {
    (data: any | null): void
}
module PlayerSignalDispatcher {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface PlayerSignalDispatcher {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerSignalDispatcher

    __gtype__: number

    // Own virtual methods of GstPlayer-1.0.GstPlayer.PlayerSignalDispatcher

    dispatch(player: Player, emitter: PlayerSignalDispatcherFunc): void

    // Class property signals of GstPlayer-1.0.GstPlayer.PlayerSignalDispatcher

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

class PlayerSignalDispatcher extends GObject.Object {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerSignalDispatcher

    static name: string

    // Constructors of GstPlayer-1.0.GstPlayer.PlayerSignalDispatcher

    constructor(config?: PlayerSignalDispatcher.ConstructorProperties) 
    _init(config?: PlayerSignalDispatcher.ConstructorProperties): void
}

module PlayerVideoRenderer {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface PlayerVideoRenderer {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerVideoRenderer

    __gtype__: number

    // Class property signals of GstPlayer-1.0.GstPlayer.PlayerVideoRenderer

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

class PlayerVideoRenderer extends GObject.Object {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerVideoRenderer

    static name: string

    // Constructors of GstPlayer-1.0.GstPlayer.PlayerVideoRenderer

    constructor(config?: PlayerVideoRenderer.ConstructorProperties) 
    _init(config?: PlayerVideoRenderer.ConstructorProperties): void
}

module Player {

    // Signal callback interfaces

    /**
     * Signal callback interface for `buffering`
     */
    interface BufferingSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `duration-changed`
     */
    interface DurationChangedSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `end-of-stream`
     */
    interface EndOfStreamSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `error`
     */
    interface ErrorSignalCallback {
        (object: GLib.Error): void
    }

    /**
     * Signal callback interface for `media-info-updated`
     */
    interface MediaInfoUpdatedSignalCallback {
        (object: PlayerMediaInfo): void
    }

    /**
     * Signal callback interface for `mute-changed`
     */
    interface MuteChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `position-updated`
     */
    interface PositionUpdatedSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `seek-done`
     */
    interface SeekDoneSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `state-changed`
     */
    interface StateChangedSignalCallback {
        (object: PlayerState): void
    }

    /**
     * Signal callback interface for `uri-loaded`
     */
    interface UriLoadedSignalCallback {
        (object: string | null): void
    }

    /**
     * Signal callback interface for `video-dimensions-changed`
     */
    interface VideoDimensionsChangedSignalCallback {
        (object: number, p0: number): void
    }

    /**
     * Signal callback interface for `volume-changed`
     */
    interface VolumeChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `warning`
     */
    interface WarningSignalCallback {
        (object: GLib.Error): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gst.Object.ConstructorProperties {

        // Own constructor properties of GstPlayer-1.0.GstPlayer.Player

        audioVideoOffset?: number | null
        mute?: boolean | null
        rate?: number | null
        signalDispatcher?: PlayerSignalDispatcher | null
        subtitleVideoOffset?: number | null
        suburi?: string | null
        uri?: string | null
        videoMultiviewFlags?: GstVideo.VideoMultiviewFlags | null
        videoMultiviewMode?: GstVideo.VideoMultiviewFramePacking | null
        videoRenderer?: PlayerVideoRenderer | null
        volume?: number | null
    }

}

interface Player {

    // Own properties of GstPlayer-1.0.GstPlayer.Player

    audioVideoOffset: number
    readonly currentAudioTrack: PlayerAudioInfo
    readonly currentSubtitleTrack: PlayerSubtitleInfo
    readonly currentVideoTrack: PlayerVideoInfo
    readonly duration: number
    readonly mediaInfo: PlayerMediaInfo
    mute: boolean
    readonly pipeline: Gst.Element
    readonly position: number
    rate: number
    readonly signalDispatcher: PlayerSignalDispatcher
    subtitleVideoOffset: number
    suburi: string | null
    uri: string | null
    videoMultiviewFlags: GstVideo.VideoMultiviewFlags
    videoMultiviewMode: GstVideo.VideoMultiviewFramePacking
    readonly videoRenderer: PlayerVideoRenderer
    volume: number
    __gtype__: number

    // Owm methods of GstPlayer-1.0.GstPlayer.Player

    /**
     * Retrieve the current value of audio-video-offset property
     * @returns The current value of audio-video-offset in nanoseconds
     */
    getAudioVideoOffset(): number
    /**
     * Retrieve the current value of the indicated `type`.
     * @param type #GstPlayerColorBalanceType
     * @returns The current value of @type, between [0,1]. In case of   error -1 is returned.
     */
    getColorBalance(type: PlayerColorBalanceType): number
    /**
     * Get a copy of the current configuration of the player. This configuration
     * can either be modified and used for the gst_player_set_config() call
     * or it must be freed after usage.
     * @returns a copy of the current configuration of @player. Use gst_structure_free() after usage or gst_player_set_config().
     */
    getConfig(): Gst.Structure
    /**
     * A Function to get current audio #GstPlayerAudioInfo instance.
     * @returns current audio track. The caller should free it with g_object_unref()
     */
    getCurrentAudioTrack(): PlayerAudioInfo | null
    /**
     * A Function to get current subtitle #GstPlayerSubtitleInfo instance.
     * @returns current subtitle track. The caller should free it with g_object_unref()
     */
    getCurrentSubtitleTrack(): PlayerSubtitleInfo | null
    /**
     * A Function to get current video #GstPlayerVideoInfo instance.
     * @returns current video track. The caller should free it with g_object_unref()
     */
    getCurrentVideoTrack(): PlayerVideoInfo | null
    getCurrentVisualization(): string | null
    /**
     * Retrieves the duration of the media stream that self represents.
     * @returns the duration of the currently-playing media stream, in nanoseconds.
     */
    getDuration(): Gst.ClockTime
    /**
     * A Function to get the current media info #GstPlayerMediaInfo instance.
     * @returns media info instance. The caller should free it with g_object_unref()
     */
    getMediaInfo(): PlayerMediaInfo | null
    /**
     * Retrieve the current value of the indicated `type`.
     * @returns The current value of @type, Default: 0x00000000 "none
     */
    getMultiviewFlags(): GstVideo.VideoMultiviewFlags
    /**
     * Retrieve the current value of the indicated `type`.
     * @returns The current value of @type, Default: -1 "none"
     */
    getMultiviewMode(): GstVideo.VideoMultiviewFramePacking
    getMute(): boolean
    getPipeline(): Gst.Element
    getPosition(): Gst.ClockTime
    getRate(): number
    /**
     * current subtitle URI
     * @returns URI of the current external subtitle.   g_free() after usage.
     */
    getSubtitleUri(): string | null
    /**
     * Retrieve the current value of subtitle-video-offset property
     * @returns The current value of subtitle-video-offset in nanoseconds
     */
    getSubtitleVideoOffset(): number
    /**
     * Gets the URI of the currently-playing stream.
     * @returns a string containing the URI of the currently-playing stream. g_free() after usage.
     */
    getUri(): string | null
    /**
     * Get a snapshot of the currently selected video stream, if any. The format can be
     * selected with `format` and optional configuration is possible with `config`
     * Currently supported settings are:
     * - width, height of type G_TYPE_INT
     * - pixel-aspect-ratio of type GST_TYPE_FRACTION
     *  Except for GST_PLAYER_THUMBNAIL_RAW_NATIVE format, if no config is set, pixel-aspect-ratio would be 1/1
     * @param format output format of the video snapshot
     * @param config Additional configuration
     * @returns Current video snapshot sample or %NULL on failure
     */
    getVideoSnapshot(format: PlayerSnapshotFormat, config: Gst.Structure | null): Gst.Sample | null
    /**
     * Returns the current volume level, as a percentage between 0 and 1.
     * @returns the volume as percentage between 0 and 1.
     */
    getVolume(): number
    /**
     * Checks whether the `player` has color balance support available.
     * @returns %TRUE if @player has color balance support. Otherwise,   %FALSE.
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
     * @param type #GstPlayerColorBalanceType
     * @param value The new value for the `type,` ranged [0,1]
     */
    setColorBalance(type: PlayerColorBalanceType, value: number): void
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
     * @returns %TRUE when the configuration could be set.
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
     * gst_player_set_subtitle_track_enabled(`player,` TRUE) so the subtitles are actually
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
     * 
     * This volume is a linear factor. For showing the volume in a GUI it
     * might make sense to first convert from a different format. Volume sliders
     * should usually use a cubic volume. See gst_stream_volume_convert_volume().
     * @param val the new volume level, as a percentage between 0 and 1
     */
    setVolume(val: number): void
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

    // Own signals of GstPlayer-1.0.GstPlayer.Player

    connect(sigName: "buffering", callback: Player.BufferingSignalCallback): number
    on(sigName: "buffering", callback: Player.BufferingSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "buffering", callback: Player.BufferingSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "buffering", callback: Player.BufferingSignalCallback): NodeJS.EventEmitter
    emit(sigName: "buffering", ...args: any[]): void
    connect(sigName: "duration-changed", callback: Player.DurationChangedSignalCallback): number
    on(sigName: "duration-changed", callback: Player.DurationChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "duration-changed", callback: Player.DurationChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "duration-changed", callback: Player.DurationChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "duration-changed", ...args: any[]): void
    connect(sigName: "end-of-stream", callback: Player.EndOfStreamSignalCallback): number
    on(sigName: "end-of-stream", callback: Player.EndOfStreamSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "end-of-stream", callback: Player.EndOfStreamSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "end-of-stream", callback: Player.EndOfStreamSignalCallback): NodeJS.EventEmitter
    emit(sigName: "end-of-stream", ...args: any[]): void
    connect(sigName: "error", callback: Player.ErrorSignalCallback): number
    on(sigName: "error", callback: Player.ErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: Player.ErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: Player.ErrorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "error", ...args: any[]): void
    connect(sigName: "media-info-updated", callback: Player.MediaInfoUpdatedSignalCallback): number
    on(sigName: "media-info-updated", callback: Player.MediaInfoUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "media-info-updated", callback: Player.MediaInfoUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "media-info-updated", callback: Player.MediaInfoUpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "media-info-updated", ...args: any[]): void
    connect(sigName: "mute-changed", callback: Player.MuteChangedSignalCallback): number
    on(sigName: "mute-changed", callback: Player.MuteChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mute-changed", callback: Player.MuteChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mute-changed", callback: Player.MuteChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "mute-changed", ...args: any[]): void
    connect(sigName: "position-updated", callback: Player.PositionUpdatedSignalCallback): number
    on(sigName: "position-updated", callback: Player.PositionUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "position-updated", callback: Player.PositionUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "position-updated", callback: Player.PositionUpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "position-updated", ...args: any[]): void
    connect(sigName: "seek-done", callback: Player.SeekDoneSignalCallback): number
    on(sigName: "seek-done", callback: Player.SeekDoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "seek-done", callback: Player.SeekDoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "seek-done", callback: Player.SeekDoneSignalCallback): NodeJS.EventEmitter
    emit(sigName: "seek-done", ...args: any[]): void
    connect(sigName: "state-changed", callback: Player.StateChangedSignalCallback): number
    on(sigName: "state-changed", callback: Player.StateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: Player.StateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: Player.StateChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "state-changed", ...args: any[]): void
    connect(sigName: "uri-loaded", callback: Player.UriLoadedSignalCallback): number
    on(sigName: "uri-loaded", callback: Player.UriLoadedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "uri-loaded", callback: Player.UriLoadedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "uri-loaded", callback: Player.UriLoadedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "uri-loaded", ...args: any[]): void
    connect(sigName: "video-dimensions-changed", callback: Player.VideoDimensionsChangedSignalCallback): number
    on(sigName: "video-dimensions-changed", callback: Player.VideoDimensionsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "video-dimensions-changed", callback: Player.VideoDimensionsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "video-dimensions-changed", callback: Player.VideoDimensionsChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "video-dimensions-changed", p0: number, ...args: any[]): void
    connect(sigName: "volume-changed", callback: Player.VolumeChangedSignalCallback): number
    on(sigName: "volume-changed", callback: Player.VolumeChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "volume-changed", callback: Player.VolumeChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "volume-changed", callback: Player.VolumeChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "volume-changed", ...args: any[]): void
    connect(sigName: "warning", callback: Player.WarningSignalCallback): number
    on(sigName: "warning", callback: Player.WarningSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "warning", callback: Player.WarningSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "warning", callback: Player.WarningSignalCallback): NodeJS.EventEmitter
    emit(sigName: "warning", ...args: any[]): void

    // Class property signals of GstPlayer-1.0.GstPlayer.Player

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
    connect(sigName: "notify::signal-dispatcher", callback: (...args: any[]) => void): number
    on(sigName: "notify::signal-dispatcher", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::signal-dispatcher", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::signal-dispatcher", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::signal-dispatcher", ...args: any[]): void
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
 * Starting from GStreamer 1.20, application developers are strongly advised to migrate to #GstPlay.
 * #GstPlayer will be deprecated in 1.20 and most likely removed by 1.24.
 * @class 
 */
class Player extends Gst.Object {

    // Own properties of GstPlayer-1.0.GstPlayer.Player

    static name: string

    // Constructors of GstPlayer-1.0.GstPlayer.Player

    constructor(config?: Player.ConstructorProperties) 
    /**
     * Creates a new #GstPlayer instance that uses `signal_dispatcher` to dispatch
     * signals to some event loop system, or emits signals directly if NULL is
     * passed. See gst_player_g_main_context_signal_dispatcher_new().
     * 
     * Video is going to be rendered by `video_renderer,` or if %NULL is provided
     * no special video set up will be done and some default handling will be
     * performed.
     * @constructor 
     * @param videoRenderer GstPlayerVideoRenderer to use
     * @param signalDispatcher GstPlayerSignalDispatcher to use
     * @returns a new #GstPlayer instance
     */
    constructor(videoRenderer: PlayerVideoRenderer | null, signalDispatcher: PlayerSignalDispatcher | null) 
    /**
     * Creates a new #GstPlayer instance that uses `signal_dispatcher` to dispatch
     * signals to some event loop system, or emits signals directly if NULL is
     * passed. See gst_player_g_main_context_signal_dispatcher_new().
     * 
     * Video is going to be rendered by `video_renderer,` or if %NULL is provided
     * no special video set up will be done and some default handling will be
     * performed.
     * @constructor 
     * @param videoRenderer GstPlayerVideoRenderer to use
     * @param signalDispatcher GstPlayerSignalDispatcher to use
     * @returns a new #GstPlayer instance
     */
    static new(videoRenderer: PlayerVideoRenderer | null, signalDispatcher: PlayerSignalDispatcher | null): Player
    _init(config?: Player.ConstructorProperties): void
    static configGetPositionUpdateInterval(config: Gst.Structure): number
    static configGetSeekAccurate(config: Gst.Structure): boolean
    /**
     * Return the user agent which has been configured using
     * gst_player_config_set_user_agent() if any.
     * @param config a #GstPlayer configuration
     * @returns the configured agent, or %NULL
     */
    static configGetUserAgent(config: Gst.Structure): string | null
    /**
     * set interval in milliseconds between two position-updated signals.
     * pass 0 to stop updating the position.
     * @param config a #GstPlayer configuration
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
     * @param config a #GstPlayer configuration
     * @param accurate accurate seek or not
     */
    static configSetSeekAccurate(config: Gst.Structure, accurate: boolean): void
    /**
     * Set the user agent to pass to the server if `player` needs to connect
     * to a server during playback. This is typically used when playing HTTP
     * or RTSP streams.
     * @param config a #GstPlayer configuration
     * @param agent the string to use as user agent
     */
    static configSetUserAgent(config: Gst.Structure, agent: string | null): void
    static getAudioStreams(info: PlayerMediaInfo): PlayerAudioInfo[]
    static getSubtitleStreams(info: PlayerMediaInfo): PlayerSubtitleInfo[]
    static getVideoStreams(info: PlayerMediaInfo): PlayerVideoInfo[]
    /**
     * Frees a %NULL terminated array of #GstPlayerVisualization.
     * @param viss a %NULL terminated array of #GstPlayerVisualization to free
     */
    static visualizationsFree(viss: PlayerVisualization): void
    static visualizationsGet(): PlayerVisualization[]
}

module PlayerAudioInfo {

    // Constructor properties interface

    interface ConstructorProperties extends PlayerStreamInfo.ConstructorProperties {
    }

}

interface PlayerAudioInfo {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerAudioInfo

    __gtype__: number

    // Owm methods of GstPlayer-1.0.GstPlayer.PlayerAudioInfo

    getBitrate(): number
    getChannels(): number
    getLanguage(): string | null
    getMaxBitrate(): number
    getSampleRate(): number

    // Class property signals of GstPlayer-1.0.GstPlayer.PlayerAudioInfo

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
 * #GstPlayerStreamInfo specific to audio streams.
 * @class 
 */
class PlayerAudioInfo extends PlayerStreamInfo {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerAudioInfo

    static name: string

    // Constructors of GstPlayer-1.0.GstPlayer.PlayerAudioInfo

    constructor(config?: PlayerAudioInfo.ConstructorProperties) 
    _init(config?: PlayerAudioInfo.ConstructorProperties): void
}

module PlayerGMainContextSignalDispatcher {

    // Constructor properties interface

    interface ConstructorProperties extends PlayerSignalDispatcher.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GstPlayer-1.0.GstPlayer.PlayerGMainContextSignalDispatcher

        applicationContext?: GLib.MainContext | null
    }

}

interface PlayerGMainContextSignalDispatcher extends PlayerSignalDispatcher {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerGMainContextSignalDispatcher

    readonly applicationContext: GLib.MainContext
    __gtype__: number

    // Class property signals of GstPlayer-1.0.GstPlayer.PlayerGMainContextSignalDispatcher

    connect(sigName: "notify::application-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::application-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::application-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::application-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::application-context", ...args: any[]): void
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

class PlayerGMainContextSignalDispatcher extends GObject.Object {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerGMainContextSignalDispatcher

    static name: string

    // Constructors of GstPlayer-1.0.GstPlayer.PlayerGMainContextSignalDispatcher

    constructor(config?: PlayerGMainContextSignalDispatcher.ConstructorProperties) 
    _init(config?: PlayerGMainContextSignalDispatcher.ConstructorProperties): void
    /**
     * Creates a new GstPlayerSignalDispatcher that uses `application_context,`
     * or the thread default one if %NULL is used. See gst_player_new().
     * @param applicationContext GMainContext to use or %NULL
     * @returns the new GstPlayerSignalDispatcher
     */
    static new(applicationContext: GLib.MainContext | null): PlayerSignalDispatcher
}

module PlayerMediaInfo {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface PlayerMediaInfo {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerMediaInfo

    __gtype__: number

    // Owm methods of GstPlayer-1.0.GstPlayer.PlayerMediaInfo

    getAudioStreams(): PlayerAudioInfo[]
    getContainerFormat(): string | null
    getDuration(): Gst.ClockTime
    /**
     * Function to get the image (or preview-image) stored in taglist.
     * Application can use `gst_sample_*_()` API's to get caps, buffer etc.
     * @returns GstSample or %NULL.
     */
    getImageSample(): Gst.Sample | null
    getNumberOfAudioStreams(): number
    getNumberOfStreams(): number
    getNumberOfSubtitleStreams(): number
    getNumberOfVideoStreams(): number
    getStreamList(): PlayerStreamInfo[]
    getSubtitleStreams(): PlayerSubtitleInfo[]
    getTags(): Gst.TagList | null
    getTitle(): string | null
    getUri(): string | null
    getVideoStreams(): PlayerVideoInfo[]
    isLive(): boolean
    isSeekable(): boolean

    // Class property signals of GstPlayer-1.0.GstPlayer.PlayerMediaInfo

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
 * Structure containing the media information of a URI.
 * @class 
 */
class PlayerMediaInfo extends GObject.Object {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerMediaInfo

    static name: string

    // Constructors of GstPlayer-1.0.GstPlayer.PlayerMediaInfo

    constructor(config?: PlayerMediaInfo.ConstructorProperties) 
    _init(config?: PlayerMediaInfo.ConstructorProperties): void
}

module PlayerStreamInfo {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface PlayerStreamInfo {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerStreamInfo

    __gtype__: number

    // Owm methods of GstPlayer-1.0.GstPlayer.PlayerStreamInfo

    getCaps(): Gst.Caps | null
    /**
     * A string describing codec used in #GstPlayerStreamInfo.
     * @returns codec string or %NULL on unknown.
     */
    getCodec(): string | null
    /**
     * Function to get stream index from #GstPlayerStreamInfo instance or -1 if
     * unknown.
     * @returns the stream index of this stream.
     */
    getIndex(): number
    /**
     * Function to return human readable name for the stream type
     * of the given `info` (ex: "audio", "video", "subtitle")
     * @returns a human readable name
     */
    getStreamType(): string | null
    getTags(): Gst.TagList | null

    // Class property signals of GstPlayer-1.0.GstPlayer.PlayerStreamInfo

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
 * Base structure for information concerning a media stream. Depending on
 * the stream type, one can find more media-specific information in
 * #GstPlayerVideoInfo, #GstPlayerAudioInfo, #GstPlayerSubtitleInfo.
 * @class 
 */
class PlayerStreamInfo extends GObject.Object {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerStreamInfo

    static name: string

    // Constructors of GstPlayer-1.0.GstPlayer.PlayerStreamInfo

    constructor(config?: PlayerStreamInfo.ConstructorProperties) 
    _init(config?: PlayerStreamInfo.ConstructorProperties): void
}

module PlayerSubtitleInfo {

    // Constructor properties interface

    interface ConstructorProperties extends PlayerStreamInfo.ConstructorProperties {
    }

}

interface PlayerSubtitleInfo {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerSubtitleInfo

    __gtype__: number

    // Owm methods of GstPlayer-1.0.GstPlayer.PlayerSubtitleInfo

    getLanguage(): string | null

    // Class property signals of GstPlayer-1.0.GstPlayer.PlayerSubtitleInfo

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
 * #GstPlayerStreamInfo specific to subtitle streams.
 * @class 
 */
class PlayerSubtitleInfo extends PlayerStreamInfo {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerSubtitleInfo

    static name: string

    // Constructors of GstPlayer-1.0.GstPlayer.PlayerSubtitleInfo

    constructor(config?: PlayerSubtitleInfo.ConstructorProperties) 
    _init(config?: PlayerSubtitleInfo.ConstructorProperties): void
}

module PlayerVideoInfo {

    // Constructor properties interface

    interface ConstructorProperties extends PlayerStreamInfo.ConstructorProperties {
    }

}

interface PlayerVideoInfo {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerVideoInfo

    __gtype__: number

    // Owm methods of GstPlayer-1.0.GstPlayer.PlayerVideoInfo

    getBitrate(): number
    getFramerate(): [ /* fpsN */ number, /* fpsD */ number ]
    getHeight(): number
    getMaxBitrate(): number
    /**
     * Returns the pixel aspect ratio in `par_n` and `par_d`
     */
    getPixelAspectRatio(): [ /* parN */ number, /* parD */ number ]
    getWidth(): number

    // Class property signals of GstPlayer-1.0.GstPlayer.PlayerVideoInfo

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
 * #GstPlayerStreamInfo specific to video streams.
 * @class 
 */
class PlayerVideoInfo extends PlayerStreamInfo {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerVideoInfo

    static name: string

    // Constructors of GstPlayer-1.0.GstPlayer.PlayerVideoInfo

    constructor(config?: PlayerVideoInfo.ConstructorProperties) 
    _init(config?: PlayerVideoInfo.ConstructorProperties): void
}

module PlayerVideoOverlayVideoRenderer {

    // Constructor properties interface

    interface ConstructorProperties extends PlayerVideoRenderer.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GstPlayer-1.0.GstPlayer.PlayerVideoOverlayVideoRenderer

        videoSink?: Gst.Element | null
        windowHandle?: any | null
    }

}

interface PlayerVideoOverlayVideoRenderer extends PlayerVideoRenderer {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerVideoOverlayVideoRenderer

    videoSink: Gst.Element
    windowHandle: any
    __gtype__: number

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
    getRenderRectangle(): [ /* x */ number, /* y */ number, /* width */ number, /* height */ number ]
    getWindowHandle(): any | null
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
    setRenderRectangle(x: number, y: number, width: number, height: number): void
    /**
     * Sets the platform specific window handle into which the video
     * should be rendered
     * @param windowHandle handle referencing to the platform specific window
     */
    setWindowHandle(windowHandle: any | null): void

    // Class property signals of GstPlayer-1.0.GstPlayer.PlayerVideoOverlayVideoRenderer

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

class PlayerVideoOverlayVideoRenderer extends GObject.Object {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerVideoOverlayVideoRenderer

    static name: string

    // Constructors of GstPlayer-1.0.GstPlayer.PlayerVideoOverlayVideoRenderer

    constructor(config?: PlayerVideoOverlayVideoRenderer.ConstructorProperties) 
    _init(config?: PlayerVideoOverlayVideoRenderer.ConstructorProperties): void
    static new(windowHandle: any | null): PlayerVideoRenderer
    static newWithSink(windowHandle: any | null, videoSink: Gst.Element): PlayerVideoRenderer
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

    parentIface: GObject.TypeInterface
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

    parentIface: GObject.TypeInterface
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
    name: string | null
    /**
     * description of the visualization.
     * @field 
     */
    description: string | null

    // Owm methods of GstPlayer-1.0.GstPlayer.PlayerVisualization

    /**
     * Makes a copy of the #GstPlayerVisualization. The result must be
     * freed using gst_player_visualization_free().
     * @returns an allocated copy of @vis.
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
// END