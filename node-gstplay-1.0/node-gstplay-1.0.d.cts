
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */
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

export enum PlayColorBalanceType {
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
export enum PlayError {
    /**
     * generic error.
     */
    FAILED,
}
export enum PlayMessage {
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
export enum PlaySnapshotFormat {
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
export enum PlayState {
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
export function playColorBalanceTypeGetName(type: PlayColorBalanceType): string | null
/**
 * Gets a string representing the given error.
 * @param error a #GstPlayError
 * @returns a string with the given error.
 */
export function playErrorGetName(error: PlayError): string | null
export function playErrorQuark(): GLib.Quark
export function playMessageGetName(messageType: PlayMessage): string | null
/**
 * Parse the given buffering-percent `msg` and extract the corresponding value
 * @param msg A #GstMessage
 */
export function playMessageParseBufferingPercent(msg: Gst.Message): /* percent */ number
/**
 * Parse the given duration `msg` and extract the corresponding #GstClockTime
 * @param msg A #GstMessage
 */
export function playMessageParseDurationUpdated(msg: Gst.Message): /* duration */ Gst.ClockTime
/**
 * Parse the given error `msg` and extract the corresponding #GError
 * @param msg A #GstMessage
 */
export function playMessageParseError(msg: Gst.Message): [ /* error */ GLib.Error, /* details */ Gst.Structure | null ]
/**
 * Parse the given `msg` and extract the corresponding media information
 * @param msg A #GstMessage
 */
export function playMessageParseMediaInfoUpdated(msg: Gst.Message): /* info */ PlayMediaInfo
/**
 * Parse the given `msg` and extract the corresponding audio muted state
 * @param msg A #GstMessage
 */
export function playMessageParseMutedChanged(msg: Gst.Message): /* muted */ boolean
/**
 * Parse the given position `msg` and extract the corresponding #GstClockTime
 * @param msg A #GstMessage
 */
export function playMessageParsePositionUpdated(msg: Gst.Message): /* position */ Gst.ClockTime
/**
 * Parse the given state `msg` and extract the corresponding #GstPlayState
 * @param msg A #GstMessage
 */
export function playMessageParseStateChanged(msg: Gst.Message): /* state */ PlayState
/**
 * Parse the given `msg` and extract its #GstPlayMessage type.
 * @param msg A #GstMessage
 */
export function playMessageParseType(msg: Gst.Message): /* type */ PlayMessage
/**
 * Parse the given `msg` and extract the corresponding video dimensions
 * @param msg A #GstMessage
 */
export function playMessageParseVideoDimensionsChanged(msg: Gst.Message): [ /* width */ number, /* height */ number ]
/**
 * Parse the given `msg` and extract the corresponding audio volume
 * @param msg A #GstMessage
 */
export function playMessageParseVolumeChanged(msg: Gst.Message): /* volume */ number
/**
 * Parse the given error `msg` and extract the corresponding #GError warning
 * @param msg A #GstMessage
 */
export function playMessageParseWarning(msg: Gst.Message): [ /* error */ GLib.Error, /* details */ Gst.Structure | null ]
/**
 * Gets a string representing the given state.
 * @param state a #GstPlayState
 * @returns a string with the name of the state.
 */
export function playStateGetName(state: PlayState): string | null
export module PlayVideoRenderer {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface PlayVideoRenderer {

    // Own properties of GstPlay-1.0.GstPlay.PlayVideoRenderer

    __gtype__: number

    // Class property signals of GstPlay-1.0.GstPlay.PlayVideoRenderer

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

export class PlayVideoRenderer extends GObject.Object {

    // Own properties of GstPlay-1.0.GstPlay.PlayVideoRenderer

    static name: string

    // Constructors of GstPlay-1.0.GstPlay.PlayVideoRenderer

    constructor(config?: PlayVideoRenderer.ConstructorProperties) 
    _init(config?: PlayVideoRenderer.ConstructorProperties): void
}

export module Play {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {

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

}

export interface Play {

    // Own properties of GstPlay-1.0.GstPlay.Play

    audioVideoOffset: number
    readonly currentAudioTrack: PlayAudioInfo
    readonly currentSubtitleTrack: PlaySubtitleInfo
    readonly currentVideoTrack: PlayVideoInfo
    readonly duration: number
    readonly mediaInfo: PlayMediaInfo
    mute: boolean
    readonly pipeline: Gst.Element | null
    readonly position: number
    rate: number
    subtitleVideoOffset: number
    suburi: string | null
    uri: string | null
    videoMultiviewFlags: GstVideo.VideoMultiviewFlags
    videoMultiviewMode: GstVideo.VideoMultiviewFramePacking
    videoRenderer: PlayVideoRenderer
    volume: number
    __gtype__: number

    // Owm methods of GstPlay-1.0.GstPlay.Play

    /**
     * Retrieve the current value of audio-video-offset property
     * @returns The current value of audio-video-offset in nanoseconds
     */
    getAudioVideoOffset(): number
    /**
     * Retrieve the current value of the indicated `type`.
     * @param type #GstPlayColorBalanceType
     * @returns The current value of @type, between [0,1]. In case of   error -1 is returned.
     */
    getColorBalance(type: PlayColorBalanceType): number
    /**
     * Get a copy of the current configuration of the play. This configuration
     * can either be modified and used for the gst_play_set_config() call
     * or it must be freed after usage.
     * @returns a copy of the current configuration of @play. Use gst_structure_free() after usage or gst_play_set_config().
     */
    getConfig(): Gst.Structure
    /**
     * A Function to get current audio #GstPlayAudioInfo instance.
     * @returns current audio track. The caller should free it with g_object_unref()
     */
    getCurrentAudioTrack(): PlayAudioInfo | null
    /**
     * A Function to get current subtitle #GstPlaySubtitleInfo instance.
     * @returns current subtitle track. The caller should free it with g_object_unref()
     */
    getCurrentSubtitleTrack(): PlaySubtitleInfo | null
    /**
     * A Function to get current video #GstPlayVideoInfo instance.
     * @returns current video track. The caller should free it with g_object_unref()
     */
    getCurrentVideoTrack(): PlayVideoInfo | null
    getCurrentVisualization(): string | null
    /**
     * Retrieves the duration of the media stream that self represents.
     * @returns the duration of the currently-playing media stream, in nanoseconds.
     */
    getDuration(): Gst.ClockTime
    /**
     * A Function to get the current media info #GstPlayMediaInfo instance.
     * @returns media info instance. The caller should free it with g_object_unref()
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
     * @returns The play message bus instance
     */
    getMessageBus(): Gst.Bus
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
     *  Except for GST_PLAY_THUMBNAIL_RAW_NATIVE format, if no config is set, pixel-aspect-ratio would be 1/1
     * @param format output format of the video snapshot
     * @param config Additional configuration
     * @returns Current video snapshot sample or %NULL on failure
     */
    getVideoSnapshot(format: PlaySnapshotFormat, config: Gst.Structure | null): Gst.Sample | null
    /**
     * Returns the current volume level, as a percentage between 0 and 1.
     * @returns the volume as percentage between 0 and 1.
     */
    getVolume(): number
    /**
     * Checks whether the `play` has color balance support available.
     * @returns %TRUE if @play has color balance support. Otherwise,   %FALSE.
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

export class Play extends Gst.Object {

    // Own properties of GstPlay-1.0.GstPlay.Play

    static name: string

    // Constructors of GstPlay-1.0.GstPlay.Play

    constructor(config?: Play.ConstructorProperties) 
    /**
     * Creates a new #GstPlay instance.
     * 
     * Video is going to be rendered by `video_renderer,` or if %NULL is provided
     * no special video set up will be done and some default handling will be
     * performed.
     * @constructor 
     * @param videoRenderer GstPlayVideoRenderer to use
     * @returns a new #GstPlay instance
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
     * @returns a new #GstPlay instance
     */
    static new(videoRenderer: PlayVideoRenderer | null): Play
    _init(config?: Play.ConstructorProperties): void
    static configGetPositionUpdateInterval(config: Gst.Structure): number
    static configGetSeekAccurate(config: Gst.Structure): boolean
    /**
     * Return the user agent which has been configured using
     * gst_play_config_set_user_agent() if any.
     * @param config a #GstPlay configuration
     * @returns the configured agent, or %NULL
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

export module PlayAudioInfo {

    // Constructor properties interface

    export interface ConstructorProperties extends PlayStreamInfo.ConstructorProperties {
    }

}

export interface PlayAudioInfo {

    // Own properties of GstPlay-1.0.GstPlay.PlayAudioInfo

    __gtype__: number

    // Owm methods of GstPlay-1.0.GstPlay.PlayAudioInfo

    getBitrate(): number
    getChannels(): number
    getLanguage(): string | null
    getMaxBitrate(): number
    getSampleRate(): number

    // Class property signals of GstPlay-1.0.GstPlay.PlayAudioInfo

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
 * #GstPlayStreamInfo specific to audio streams.
 * @class 
 */
export class PlayAudioInfo extends PlayStreamInfo {

    // Own properties of GstPlay-1.0.GstPlay.PlayAudioInfo

    static name: string

    // Constructors of GstPlay-1.0.GstPlay.PlayAudioInfo

    constructor(config?: PlayAudioInfo.ConstructorProperties) 
    _init(config?: PlayAudioInfo.ConstructorProperties): void
}

export module PlayMediaInfo {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface PlayMediaInfo {

    // Own properties of GstPlay-1.0.GstPlay.PlayMediaInfo

    __gtype__: number

    // Owm methods of GstPlay-1.0.GstPlay.PlayMediaInfo

    getAudioStreams(): PlayAudioInfo[]
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
    getStreamList(): PlayStreamInfo[]
    getSubtitleStreams(): PlaySubtitleInfo[]
    getTags(): Gst.TagList | null
    getTitle(): string | null
    getUri(): string | null
    getVideoStreams(): PlayVideoInfo[]
    isLive(): boolean
    isSeekable(): boolean

    // Class property signals of GstPlay-1.0.GstPlay.PlayMediaInfo

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
 * Structure containing the media information of a URI.
 * @class 
 */
export class PlayMediaInfo extends GObject.Object {

    // Own properties of GstPlay-1.0.GstPlay.PlayMediaInfo

    static name: string

    // Constructors of GstPlay-1.0.GstPlay.PlayMediaInfo

    constructor(config?: PlayMediaInfo.ConstructorProperties) 
    _init(config?: PlayMediaInfo.ConstructorProperties): void
}

export module PlaySignalAdapter {

    // Signal callback interfaces

    /**
     * Signal callback interface for `buffering`
     */
    export interface BufferingSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `duration-changed`
     */
    export interface DurationChangedSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `end-of-stream`
     */
    export interface EndOfStreamSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `error`
     */
    export interface ErrorSignalCallback {
        (error: GLib.Error, details: Gst.Structure | null): void
    }

    /**
     * Signal callback interface for `media-info-updated`
     */
    export interface MediaInfoUpdatedSignalCallback {
        (object: PlayMediaInfo): void
    }

    /**
     * Signal callback interface for `mute-changed`
     */
    export interface MuteChangedSignalCallback {
        (object: boolean): void
    }

    /**
     * Signal callback interface for `position-updated`
     */
    export interface PositionUpdatedSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `seek-done`
     */
    export interface SeekDoneSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `state-changed`
     */
    export interface StateChangedSignalCallback {
        (object: PlayState): void
    }

    /**
     * Signal callback interface for `uri-loaded`
     */
    export interface UriLoadedSignalCallback {
        (object: string | null): void
    }

    /**
     * Signal callback interface for `video-dimensions-changed`
     */
    export interface VideoDimensionsChangedSignalCallback {
        (object: number, p0: number): void
    }

    /**
     * Signal callback interface for `volume-changed`
     */
    export interface VolumeChangedSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `warning`
     */
    export interface WarningSignalCallback {
        (error: GLib.Error, details: Gst.Structure | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface PlaySignalAdapter {

    // Own properties of GstPlay-1.0.GstPlay.PlaySignalAdapter

    readonly play: Play | null
    __gtype__: number

    // Owm methods of GstPlay-1.0.GstPlay.PlaySignalAdapter

    getPlay(): Play

    // Own signals of GstPlay-1.0.GstPlay.PlaySignalAdapter

    connect(sigName: "buffering", callback: PlaySignalAdapter.BufferingSignalCallback): number
    on(sigName: "buffering", callback: PlaySignalAdapter.BufferingSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "buffering", callback: PlaySignalAdapter.BufferingSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "buffering", callback: PlaySignalAdapter.BufferingSignalCallback): NodeJS.EventEmitter
    emit(sigName: "buffering", ...args: any[]): void
    connect(sigName: "duration-changed", callback: PlaySignalAdapter.DurationChangedSignalCallback): number
    on(sigName: "duration-changed", callback: PlaySignalAdapter.DurationChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "duration-changed", callback: PlaySignalAdapter.DurationChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "duration-changed", callback: PlaySignalAdapter.DurationChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "duration-changed", ...args: any[]): void
    connect(sigName: "end-of-stream", callback: PlaySignalAdapter.EndOfStreamSignalCallback): number
    on(sigName: "end-of-stream", callback: PlaySignalAdapter.EndOfStreamSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "end-of-stream", callback: PlaySignalAdapter.EndOfStreamSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "end-of-stream", callback: PlaySignalAdapter.EndOfStreamSignalCallback): NodeJS.EventEmitter
    emit(sigName: "end-of-stream", ...args: any[]): void
    connect(sigName: "error", callback: PlaySignalAdapter.ErrorSignalCallback): number
    on(sigName: "error", callback: PlaySignalAdapter.ErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: PlaySignalAdapter.ErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: PlaySignalAdapter.ErrorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "error", details: Gst.Structure | null, ...args: any[]): void
    connect(sigName: "media-info-updated", callback: PlaySignalAdapter.MediaInfoUpdatedSignalCallback): number
    on(sigName: "media-info-updated", callback: PlaySignalAdapter.MediaInfoUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "media-info-updated", callback: PlaySignalAdapter.MediaInfoUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "media-info-updated", callback: PlaySignalAdapter.MediaInfoUpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "media-info-updated", ...args: any[]): void
    connect(sigName: "mute-changed", callback: PlaySignalAdapter.MuteChangedSignalCallback): number
    on(sigName: "mute-changed", callback: PlaySignalAdapter.MuteChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "mute-changed", callback: PlaySignalAdapter.MuteChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "mute-changed", callback: PlaySignalAdapter.MuteChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "mute-changed", ...args: any[]): void
    connect(sigName: "position-updated", callback: PlaySignalAdapter.PositionUpdatedSignalCallback): number
    on(sigName: "position-updated", callback: PlaySignalAdapter.PositionUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "position-updated", callback: PlaySignalAdapter.PositionUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "position-updated", callback: PlaySignalAdapter.PositionUpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "position-updated", ...args: any[]): void
    connect(sigName: "seek-done", callback: PlaySignalAdapter.SeekDoneSignalCallback): number
    on(sigName: "seek-done", callback: PlaySignalAdapter.SeekDoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "seek-done", callback: PlaySignalAdapter.SeekDoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "seek-done", callback: PlaySignalAdapter.SeekDoneSignalCallback): NodeJS.EventEmitter
    emit(sigName: "seek-done", ...args: any[]): void
    connect(sigName: "state-changed", callback: PlaySignalAdapter.StateChangedSignalCallback): number
    on(sigName: "state-changed", callback: PlaySignalAdapter.StateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: PlaySignalAdapter.StateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: PlaySignalAdapter.StateChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "state-changed", ...args: any[]): void
    connect(sigName: "uri-loaded", callback: PlaySignalAdapter.UriLoadedSignalCallback): number
    on(sigName: "uri-loaded", callback: PlaySignalAdapter.UriLoadedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "uri-loaded", callback: PlaySignalAdapter.UriLoadedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "uri-loaded", callback: PlaySignalAdapter.UriLoadedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "uri-loaded", ...args: any[]): void
    connect(sigName: "video-dimensions-changed", callback: PlaySignalAdapter.VideoDimensionsChangedSignalCallback): number
    on(sigName: "video-dimensions-changed", callback: PlaySignalAdapter.VideoDimensionsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "video-dimensions-changed", callback: PlaySignalAdapter.VideoDimensionsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "video-dimensions-changed", callback: PlaySignalAdapter.VideoDimensionsChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "video-dimensions-changed", p0: number, ...args: any[]): void
    connect(sigName: "volume-changed", callback: PlaySignalAdapter.VolumeChangedSignalCallback): number
    on(sigName: "volume-changed", callback: PlaySignalAdapter.VolumeChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "volume-changed", callback: PlaySignalAdapter.VolumeChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "volume-changed", callback: PlaySignalAdapter.VolumeChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "volume-changed", ...args: any[]): void
    connect(sigName: "warning", callback: PlaySignalAdapter.WarningSignalCallback): number
    on(sigName: "warning", callback: PlaySignalAdapter.WarningSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "warning", callback: PlaySignalAdapter.WarningSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "warning", callback: PlaySignalAdapter.WarningSignalCallback): NodeJS.EventEmitter
    emit(sigName: "warning", details: Gst.Structure | null, ...args: any[]): void

    // Class property signals of GstPlay-1.0.GstPlay.PlaySignalAdapter

    connect(sigName: "notify::play", callback: (...args: any[]) => void): number
    on(sigName: "notify::play", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::play", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::play", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::play", ...args: any[]): void
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

export class PlaySignalAdapter extends GObject.Object {

    // Own properties of GstPlay-1.0.GstPlay.PlaySignalAdapter

    static name: string

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
    static newSyncEmit(play: Play): PlaySignalAdapter
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
    static newWithMainContext(play: Play, context: GLib.MainContext): PlaySignalAdapter
    _init(config?: PlaySignalAdapter.ConstructorProperties): void
}

export module PlayStreamInfo {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface PlayStreamInfo {

    // Own properties of GstPlay-1.0.GstPlay.PlayStreamInfo

    __gtype__: number

    // Owm methods of GstPlay-1.0.GstPlay.PlayStreamInfo

    getCaps(): Gst.Caps | null
    /**
     * A string describing codec used in #GstPlayStreamInfo.
     * @returns codec string or %NULL on unknown.
     */
    getCodec(): string | null
    /**
     * Function to get stream index from #GstPlayStreamInfo instance or -1 if
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

    // Class property signals of GstPlay-1.0.GstPlay.PlayStreamInfo

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
 * Base structure for information concerning a media stream. Depending on
 * the stream type, one can find more media-specific information in
 * #GstPlayVideoInfo, #GstPlayAudioInfo, #GstPlaySubtitleInfo.
 * @class 
 */
export class PlayStreamInfo extends GObject.Object {

    // Own properties of GstPlay-1.0.GstPlay.PlayStreamInfo

    static name: string

    // Constructors of GstPlay-1.0.GstPlay.PlayStreamInfo

    constructor(config?: PlayStreamInfo.ConstructorProperties) 
    _init(config?: PlayStreamInfo.ConstructorProperties): void
}

export module PlaySubtitleInfo {

    // Constructor properties interface

    export interface ConstructorProperties extends PlayStreamInfo.ConstructorProperties {
    }

}

export interface PlaySubtitleInfo {

    // Own properties of GstPlay-1.0.GstPlay.PlaySubtitleInfo

    __gtype__: number

    // Owm methods of GstPlay-1.0.GstPlay.PlaySubtitleInfo

    getLanguage(): string | null

    // Class property signals of GstPlay-1.0.GstPlay.PlaySubtitleInfo

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
 * #GstPlayStreamInfo specific to subtitle streams.
 * @class 
 */
export class PlaySubtitleInfo extends PlayStreamInfo {

    // Own properties of GstPlay-1.0.GstPlay.PlaySubtitleInfo

    static name: string

    // Constructors of GstPlay-1.0.GstPlay.PlaySubtitleInfo

    constructor(config?: PlaySubtitleInfo.ConstructorProperties) 
    _init(config?: PlaySubtitleInfo.ConstructorProperties): void
}

export module PlayVideoInfo {

    // Constructor properties interface

    export interface ConstructorProperties extends PlayStreamInfo.ConstructorProperties {
    }

}

export interface PlayVideoInfo {

    // Own properties of GstPlay-1.0.GstPlay.PlayVideoInfo

    __gtype__: number

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
 * #GstPlayStreamInfo specific to video streams.
 * @class 
 */
export class PlayVideoInfo extends PlayStreamInfo {

    // Own properties of GstPlay-1.0.GstPlay.PlayVideoInfo

    static name: string

    // Constructors of GstPlay-1.0.GstPlay.PlayVideoInfo

    constructor(config?: PlayVideoInfo.ConstructorProperties) 
    _init(config?: PlayVideoInfo.ConstructorProperties): void
}

export module PlayVideoOverlayVideoRenderer {

    // Constructor properties interface

    export interface ConstructorProperties extends PlayVideoRenderer.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GstPlay-1.0.GstPlay.PlayVideoOverlayVideoRenderer

        videoSink?: Gst.Element | null
        windowHandle?: any | null
    }

}

export interface PlayVideoOverlayVideoRenderer extends PlayVideoRenderer {

    // Own properties of GstPlay-1.0.GstPlay.PlayVideoOverlayVideoRenderer

    videoSink: Gst.Element | null
    windowHandle: any
    __gtype__: number

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
    getWindowHandle(): any | null
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
    setWindowHandle(windowHandle: any | null): void

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

export class PlayVideoOverlayVideoRenderer extends GObject.Object {

    // Own properties of GstPlay-1.0.GstPlay.PlayVideoOverlayVideoRenderer

    static name: string

    // Constructors of GstPlay-1.0.GstPlay.PlayVideoOverlayVideoRenderer

    constructor(config?: PlayVideoOverlayVideoRenderer.ConstructorProperties) 
    _init(config?: PlayVideoOverlayVideoRenderer.ConstructorProperties): void
    static new(windowHandle: any | null): PlayVideoRenderer
    static newWithSink(windowHandle: any | null, videoSink: Gst.Element): PlayVideoRenderer
}

export interface PlayAudioInfoClass {
}

export abstract class PlayAudioInfoClass {

    // Own properties of GstPlay-1.0.GstPlay.PlayAudioInfoClass

    static name: string
}

export interface PlayClass {
}

export abstract class PlayClass {

    // Own properties of GstPlay-1.0.GstPlay.PlayClass

    static name: string
}

export interface PlayMediaInfoClass {
}

export abstract class PlayMediaInfoClass {

    // Own properties of GstPlay-1.0.GstPlay.PlayMediaInfoClass

    static name: string
}

export interface PlaySignalAdapterClass {
}

export abstract class PlaySignalAdapterClass {

    // Own properties of GstPlay-1.0.GstPlay.PlaySignalAdapterClass

    static name: string
}

export interface PlayStreamInfoClass {
}

export abstract class PlayStreamInfoClass {

    // Own properties of GstPlay-1.0.GstPlay.PlayStreamInfoClass

    static name: string
}

export interface PlaySubtitleInfoClass {
}

export abstract class PlaySubtitleInfoClass {

    // Own properties of GstPlay-1.0.GstPlay.PlaySubtitleInfoClass

    static name: string
}

export interface PlayVideoInfoClass {
}

export abstract class PlayVideoInfoClass {

    // Own properties of GstPlay-1.0.GstPlay.PlayVideoInfoClass

    static name: string
}

export interface PlayVideoOverlayVideoRendererClass {
}

export abstract class PlayVideoOverlayVideoRendererClass {

    // Own properties of GstPlay-1.0.GstPlay.PlayVideoOverlayVideoRendererClass

    static name: string
}

export interface PlayVideoRendererInterface {

    // Own fields of GstPlay-1.0.GstPlay.PlayVideoRendererInterface

    parentIface: GObject.TypeInterface
}

export abstract class PlayVideoRendererInterface {

    // Own properties of GstPlay-1.0.GstPlay.PlayVideoRendererInterface

    static name: string
}

export interface PlayVisualization {

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
export class PlayVisualization {

    // Own properties of GstPlay-1.0.GstPlay.PlayVisualization

    static name: string
}
