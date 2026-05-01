
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

    /**
     * GstPlay-1.0
     */


    /**
     * @gir-type Enum
     */
    export namespace PlayColorBalanceType {
        export const $gtype: GObject.GType<PlayColorBalanceType>;
    }

    /**
     * @gir-type Enum
     * @since 1.20
     */
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


    /**
     * @gir-type Struct
     */
    class PlayError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * generic error.
         */
        static FAILED: number;

        // Constructors
        constructor(options: { message: string, code: number });

        // Static methods
        /**
         * Gets a string representing the given error.
         * @param error a {@link GstPlay.PlayError}
         */
        static get_name(error: PlayError): string;

        static quark(): GLib.Quark;
    }


    /**
     * @gir-type Enum
     */
    export namespace PlayMessage {
        export const $gtype: GObject.GType<PlayMessage>;
    }

    /**
     * @gir-type Enum
     * @since 1.20
     */
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
         * State changed, see {@link GstPlay.PlayState}
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
         * A media-info property has changed, message contains current {@link GstPlay.PlayMediaInfo}
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


    /**
     * @gir-type Enum
     * @since 1.20
     */
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


    /**
     * @gir-type Enum
     */
    export namespace PlayState {
        export const $gtype: GObject.GType<PlayState>;
    }

    /**
     * @gir-type Enum
     * @since 1.20
     */
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
     * @param type a {@link GstPlay.PlayColorBalanceType}
     * @returns a string with the name of the color   balance type.
     * @since 1.20
     */
    function play_color_balance_type_get_name(type: PlayColorBalanceType): string;

    /**
     * Gets a string representing the given error.
     * @param error a {@link GstPlay.PlayError}
     * @returns a string with the given error.
     * @since 1.20
     */
    function play_error_get_name(error: PlayError): string;

    /**
     * @since 1.20
     */
    function play_error_quark(): GLib.Quark;

    /**
     * @param message_type a {@link GstPlay.PlayMessage}
     * @returns a string with the name of the message.
     * @since 1.20
     */
    function play_message_get_name(message_type: PlayMessage): string;

    /**
     * Parse the given buffering-percent `msg` and extract the corresponding value
     * @param msg A {@link Gst.Message}
     * @since 1.20
     */
    function play_message_parse_buffering_percent(msg: Gst.Message): number;

    /**
     * Parse the given duration `msg` and extract the corresponding {@link Gst.ClockTime}
     * @param msg A {@link Gst.Message}
     * @since 1.20
     */
    function play_message_parse_duration_updated(msg: Gst.Message): Gst.ClockTime | null;

    /**
     * Parse the given error `msg` and extract the corresponding {@link GLib.Error}
     * @param msg A {@link Gst.Message}
     * @since 1.20
     */
    function play_message_parse_error(msg: Gst.Message): [GLib.Error | null, Gst.Structure | null];

    /**
     * Parse the given `msg` and extract the corresponding media information
     * @param msg A {@link Gst.Message}
     * @since 1.20
     */
    function play_message_parse_media_info_updated(msg: Gst.Message): PlayMediaInfo | null;

    /**
     * Parse the given `msg` and extract the corresponding audio muted state
     * @param msg A {@link Gst.Message}
     * @since 1.20
     */
    function play_message_parse_muted_changed(msg: Gst.Message): boolean;

    /**
     * Parse the given position `msg` and extract the corresponding {@link Gst.ClockTime}
     * @param msg A {@link Gst.Message}
     * @since 1.20
     */
    function play_message_parse_position_updated(msg: Gst.Message): Gst.ClockTime | null;

    /**
     * Parse the given state `msg` and extract the corresponding {@link GstPlay.PlayState}
     * @param msg A {@link Gst.Message}
     * @since 1.20
     */
    function play_message_parse_state_changed(msg: Gst.Message): PlayState | null;

    /**
     * Parse the given `msg` and extract its {@link GstPlay.PlayMessage} type.
     * @param msg A {@link Gst.Message}
     * @since 1.20
     */
    function play_message_parse_type(msg: Gst.Message): PlayMessage | null;

    /**
     * Parse the given `msg` and extract the corresponding video dimensions
     * @param msg A {@link Gst.Message}
     * @since 1.20
     */
    function play_message_parse_video_dimensions_changed(msg: Gst.Message): [number, number];

    /**
     * Parse the given `msg` and extract the corresponding audio volume
     * @param msg A {@link Gst.Message}
     * @since 1.20
     */
    function play_message_parse_volume_changed(msg: Gst.Message): number;

    /**
     * Parse the given error `msg` and extract the corresponding {@link GLib.Error} warning
     * @param msg A {@link Gst.Message}
     * @since 1.20
     */
    function play_message_parse_warning(msg: Gst.Message): [GLib.Error | null, Gst.Structure | null];

    /**
     * Gets a string representing the given state.
     * @param state a {@link GstPlay.PlayState}
     * @returns a string with the name of the state.
     * @since 1.20
     */
    function play_state_get_name(state: PlayState): string;

    namespace Play {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::audio-video-offset": (pspec: GObject.ParamSpec) => void;
            "notify::current-audio-track": (pspec: GObject.ParamSpec) => void;
            "notify::current-subtitle-track": (pspec: GObject.ParamSpec) => void;
            "notify::current-video-track": (pspec: GObject.ParamSpec) => void;
            "notify::duration": (pspec: GObject.ParamSpec) => void;
            "notify::media-info": (pspec: GObject.ParamSpec) => void;
            "notify::mute": (pspec: GObject.ParamSpec) => void;
            "notify::pipeline": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::rate": (pspec: GObject.ParamSpec) => void;
            "notify::subtitle-video-offset": (pspec: GObject.ParamSpec) => void;
            "notify::suburi": (pspec: GObject.ParamSpec) => void;
            "notify::uri": (pspec: GObject.ParamSpec) => void;
            "notify::video-multiview-flags": (pspec: GObject.ParamSpec) => void;
            "notify::video-multiview-mode": (pspec: GObject.ParamSpec) => void;
            "notify::video-renderer": (pspec: GObject.ParamSpec) => void;
            "notify::volume": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gst.Object.ConstructorProps {
            audio_video_offset: (bigint | number);
            audioVideoOffset: (bigint | number);
            current_audio_track: (PlayAudioInfo | null);
            currentAudioTrack: (PlayAudioInfo | null);
            current_subtitle_track: (PlaySubtitleInfo | null);
            currentSubtitleTrack: (PlaySubtitleInfo | null);
            current_video_track: (PlayVideoInfo | null);
            currentVideoTrack: (PlayVideoInfo | null);
            duration: (bigint | number);
            media_info: (PlayMediaInfo | null);
            mediaInfo: (PlayMediaInfo | null);
            mute: boolean;
            pipeline: Gst.Element;
            position: (bigint | number);
            rate: number;
            subtitle_video_offset: (bigint | number);
            subtitleVideoOffset: (bigint | number);
            suburi: string;
            uri: (string | null);
            video_multiview_flags: GstVideo.VideoMultiviewFlags;
            videoMultiviewFlags: GstVideo.VideoMultiviewFlags;
            video_multiview_mode: GstVideo.VideoMultiviewFramePacking;
            videoMultiviewMode: GstVideo.VideoMultiviewFramePacking;
            video_renderer: PlayVideoRenderer;
            videoRenderer: PlayVideoRenderer;
            volume: number;
        }
    }

    /**
     * @gir-type Class
     * @since 1.20
     */
    class Play extends Gst.Object {
        static $gtype: GObject.GType<Play>;

        // Properties
        /**
         * @default 0
         */
        get audio_video_offset(): number;
        set audio_video_offset(val: (bigint | number));

        /**
         * @default 0
         */
        get audioVideoOffset(): number;
        set audioVideoOffset(val: (bigint | number));

        /**
         * @read-only
         */
        get current_audio_track(): (PlayAudioInfo | null);

        /**
         * @read-only
         */
        get currentAudioTrack(): (PlayAudioInfo | null);

        /**
         * @read-only
         */
        get current_subtitle_track(): (PlaySubtitleInfo | null);

        /**
         * @read-only
         */
        get currentSubtitleTrack(): (PlaySubtitleInfo | null);

        /**
         * @read-only
         */
        get current_video_track(): (PlayVideoInfo | null);

        /**
         * @read-only
         */
        get currentVideoTrack(): (PlayVideoInfo | null);

        /**
         * @read-only
         * @default 18446744073709551615
         */
        get duration(): number;

        /**
         * @read-only
         */
        get media_info(): (PlayMediaInfo | null);

        /**
         * @read-only
         */
        get mediaInfo(): (PlayMediaInfo | null);

        /**
         * @default false
         */
        get mute(): boolean;
        set mute(val: boolean);

        /**
         * @read-only
         */
        get pipeline(): Gst.Element;

        /**
         * @read-only
         * @default 18446744073709551615
         */
        get position(): number;

        /**
         * @default 1
         */
        get rate(): number;
        set rate(val: number);

        /**
         * @default 0
         */
        get subtitle_video_offset(): number;
        set subtitle_video_offset(val: (bigint | number));

        /**
         * @default 0
         */
        get subtitleVideoOffset(): number;
        set subtitleVideoOffset(val: (bigint | number));

        /**
         * @default null
         */
        get suburi(): string;
        set suburi(val: string);

        /**
         * @default null
         */
        get uri(): (string | null);
        set uri(val: (string | null));

        /**
         * @default GstVideo.VideoMultiviewFlags.NONE
         */
        get video_multiview_flags(): GstVideo.VideoMultiviewFlags;
        set video_multiview_flags(val: GstVideo.VideoMultiviewFlags);

        /**
         * @default GstVideo.VideoMultiviewFlags.NONE
         */
        get videoMultiviewFlags(): GstVideo.VideoMultiviewFlags;
        set videoMultiviewFlags(val: GstVideo.VideoMultiviewFlags);

        /**
         * @default GstVideo.VideoMultiviewFramePacking.NONE
         */
        get video_multiview_mode(): GstVideo.VideoMultiviewFramePacking;
        set video_multiview_mode(val: GstVideo.VideoMultiviewFramePacking);

        /**
         * @default GstVideo.VideoMultiviewFramePacking.NONE
         */
        get videoMultiviewMode(): GstVideo.VideoMultiviewFramePacking;
        set videoMultiviewMode(val: GstVideo.VideoMultiviewFramePacking);

        get video_renderer(): PlayVideoRenderer;
        set video_renderer(val: PlayVideoRenderer);

        get videoRenderer(): PlayVideoRenderer;
        set videoRenderer(val: PlayVideoRenderer);

        /**
         * @default 1
         */
        get volume(): number;
        set volume(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Play.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Play.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](video_renderer: (PlayVideoRenderer | null)): Play;

        // Signals
        /** @signal */
        connect<K extends keyof Play.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Play.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Play.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Play.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Play.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Play.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param config a {@link GstPlay.Play} configuration
         */
        static config_get_position_update_interval(config: Gst.Structure): number;

        /**
         * @param config a {@link GstPlay.Play} configuration
         */
        static config_get_seek_accurate(config: Gst.Structure): boolean;

        /**
         * Return the user agent which has been configured using
         * `gst_play_config_set_user_agent()` if any.
         * @param config a {@link GstPlay.Play} configuration
         */
        static config_get_user_agent(config: Gst.Structure): (string | null);

        /**
         * set desired interval in milliseconds between two position-updated messages.
         * pass 0 to stop updating the position.
         * @param config a {@link GstPlay.Play} configuration
         * @param interval interval in ms
         */
        static config_set_position_update_interval(config: Gst.Structure, interval: number): void;

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
         * @param config a {@link GstPlay.Play} configuration
         * @param accurate accurate seek or not
         */
        static config_set_seek_accurate(config: Gst.Structure, accurate: boolean): void;

        /**
         * Set the user agent to pass to the server if `play` needs to connect
         * to a server during playback. This is typically used when playing HTTP
         * or RTSP streams.
         * @param config a {@link GstPlay.Play} configuration
         * @param agent the string to use as user agent
         */
        static config_set_user_agent(config: Gst.Structure, agent: (string | null)): void;

        /**
         * @param info a {@link GstPlay.PlayMediaInfo}
         */
        static get_audio_streams(info: PlayMediaInfo): PlayAudioInfo[];

        /**
         * @param info a {@link GstPlay.PlayMediaInfo}
         */
        static get_subtitle_streams(info: PlayMediaInfo): PlaySubtitleInfo[];

        /**
         * @param info a {@link GstPlay.PlayMediaInfo}
         */
        static get_video_streams(info: PlayMediaInfo): PlayVideoInfo[];

        /**
         * @param msg A {@link Gst.Message}
         */
        static is_play_message(msg: Gst.Message): boolean;

        /**
         * Frees a `null` terminated array of {@link GstPlay.PlayVisualization}.
         * @param viss a `null` terminated array of {@link GstPlay.PlayVisualization} to free
         */
        static visualizations_free(viss: PlayVisualization): void;

        static visualizations_get(): PlayVisualization[];

        // Methods
        /**
         * Retrieve the current value of audio-video-offset property
         * @returns The current value of audio-video-offset in nanoseconds
         */
        get_audio_video_offset(): number;

        /**
         * Retrieve the current value of the indicated `type`.
         * @param type {@link GstPlay.PlayColorBalanceType}
         * @returns The current value of `type`, between [0,1]. In case of   error -1 is returned.
         */
        get_color_balance(type: PlayColorBalanceType): number;

        /**
         * Get a copy of the current configuration of the play. This configuration
         * can either be modified and used for the `gst_play_set_config()` call
         * or it must be freed after usage.
         * @returns a copy of the current configuration of `play`. Use `gst_structure_free()` after usage or `gst_play_set_config()`.
         */
        get_config(): Gst.Structure;

        /**
         * A Function to get current audio {@link GstPlay.PlayAudioInfo} instance.
         * @returns current audio track. The caller should free it with `g_object_unref()`
         */
        get_current_audio_track(): (PlayAudioInfo | null);

        /**
         * A Function to get current subtitle {@link GstPlay.PlaySubtitleInfo} instance.
         * @returns current subtitle track. The caller should free it with `g_object_unref()`
         */
        get_current_subtitle_track(): (PlaySubtitleInfo | null);

        /**
         * A Function to get current video {@link GstPlay.PlayVideoInfo} instance.
         * @returns current video track. The caller should free it with `g_object_unref()`
         */
        get_current_video_track(): (PlayVideoInfo | null);

        /**
         * @returns Name of the currently enabled   visualization.   `g_free()` after usage.
         */
        get_current_visualization(): (string | null);

        /**
         * Retrieves the duration of the media stream that self represents.
         * @returns the duration of the currently-playing media stream, in nanoseconds.
         */
        get_duration(): Gst.ClockTime;

        /**
         * A Function to get the current media info {@link GstPlay.PlayMediaInfo} instance.
         * @returns media info instance. The caller should free it with `g_object_unref()`
         */
        get_media_info(): (PlayMediaInfo | null);

        /**
         * GstPlay API exposes a {@link Gst.Bus} instance which purpose is to provide data
         * structures representing play-internal events in form of {@link Gst.Message}<!-- -->s of
         * type GST_MESSAGE_APPLICATION.
         * 
         * Each message carries a "play-message" field of type {@link GstPlay.PlayMessage}.
         * Further fields of the message data are specific to each possible value of
         * that enumeration.
         * 
         * Applications can consume the messages asynchronously within their own
         * event-loop / UI-thread etc. Note that in case the application does not
         * consume the messages, the bus will accumulate these internally and eventually
         * fill memory. To avoid that, the bus has to be set "flushing".
         * @returns The play message bus instance
         */
        get_message_bus(): Gst.Bus;

        /**
         * Retrieve the current value of the indicated `type`.
         * @returns The current value of `type`, Default: 0x00000000 "none
         */
        get_multiview_flags(): GstVideo.VideoMultiviewFlags;

        /**
         * Retrieve the current value of the indicated `type`.
         * @returns The current value of `type`, Default: -1 "none"
         */
        get_multiview_mode(): GstVideo.VideoMultiviewFramePacking;

        /**
         * @returns `true` if the currently-playing stream is muted.
         */
        get_mute(): boolean;

        /**
         * @returns The internal playbin instance. The caller should free it with `g_object_unref()`
         */
        get_pipeline(): Gst.Element;

        /**
         * @returns the absolute position time, in nanoseconds, of the currently-playing stream.
         */
        get_position(): Gst.ClockTime;

        /**
         * @returns current playback rate
         */
        get_rate(): number;

        /**
         * current subtitle URI
         * @returns URI of the current external subtitle.   `g_free()` after usage.
         */
        get_subtitle_uri(): (string | null);

        /**
         * Retrieve the current value of subtitle-video-offset property
         * @returns The current value of subtitle-video-offset in nanoseconds
         */
        get_subtitle_video_offset(): number;

        /**
         * Gets the URI of the currently-playing stream.
         * @returns a string containing the URI of the currently-playing stream. `g_free()` after usage.
         */
        get_uri(): (string | null);

        /**
         * Get a snapshot of the currently selected video stream, if any. The format can be
         * selected with `format` and optional configuration is possible with `config`
         * Currently supported settings are:
         * - width, height of type G_TYPE_INT
         * - pixel-aspect-ratio of type GST_TYPE_FRACTION
         *  Except for GST_PLAY_THUMBNAIL_RAW_NATIVE format, if no config is set, pixel-aspect-ratio would be 1/1
         * @param format output format of the video snapshot
         * @param config Additional configuration
         * @returns Current video snapshot sample or `null` on failure
         */
        get_video_snapshot(format: PlaySnapshotFormat, config: (Gst.Structure | null)): (Gst.Sample | null);

        /**
         * Returns the current volume level, as a percentage between 0 and 1.
         * @returns the volume as percentage between 0 and 1.
         */
        get_volume(): number;

        /**
         * Checks whether the `play` has color balance support available.
         * @returns `true` if `play` has color balance support. Otherwise,   `false`.
         */
        has_color_balance(): boolean;

        /**
         * Pauses the current stream.
         */
        pause(): void;

        /**
         * Request to play the loaded stream.
         */
        play(): void;

        /**
         * Seeks the currently-playing stream to the absolute `position` time
         * in nanoseconds.
         * @param position position to seek in nanoseconds
         */
        seek(position: Gst.ClockTime): void;

        /**
         * @param stream_index stream index
         * @returns `true` or `false` Sets the audio track `stream_index`.
         */
        set_audio_track(stream_index: number): boolean;

        /**
         * Enable or disable the current audio track.
         * @param enabled TRUE or FALSE
         */
        set_audio_track_enabled(enabled: boolean): void;

        /**
         * Sets audio-video-offset property by value of `offset`
         * @param offset `gint64` in nanoseconds
         */
        set_audio_video_offset(offset: (bigint | number)): void;

        /**
         * Sets the current value of the indicated channel `type` to the passed
         * value.
         * @param type {@link GstPlay.PlayColorBalanceType}
         * @param value The new value for the `type`, ranged [0,1]
         */
        set_color_balance(type: PlayColorBalanceType, value: number): void;

        /**
         * Set the configuration of the play. If the play is already configured, and
         * the configuration haven't change, this function will return `true`. If the
         * play is not in the GST_PLAY_STATE_STOPPED, this method will return `false`
         * and active configuration will remain.
         * 
         * `config` is a {@link Gst.Structure} that contains the configuration parameters for
         * the play.
         * 
         * This function takes ownership of `config`.
         * @param config a {@link Gst.Structure}
         * @returns `true` when the configuration could be set.
         */
        set_config(config: Gst.Structure): boolean;

        /**
         * Sets the current value of the indicated mode `type` to the passed
         * value.
         * @param flags The new value for the `type`
         */
        set_multiview_flags(flags: GstVideo.VideoMultiviewFlags): void;

        /**
         * Sets the current value of the indicated mode `type` to the passed
         * value.
         * @param mode The new value for the `type`
         */
        set_multiview_mode(mode: GstVideo.VideoMultiviewFramePacking): void;

        /**
         * `true` if the currently-playing stream should be muted.
         * @param val Mute state the should be set
         */
        set_mute(val: boolean): void;

        /**
         * Playback at specified rate
         * @param rate playback rate
         */
        set_rate(rate: number): void;

        /**
         * @param stream_index stream index
         * @returns `true` or `false` Sets the subtitle stack `stream_index`.
         */
        set_subtitle_track(stream_index: number): boolean;

        /**
         * Enable or disable the current subtitle track.
         * @param enabled TRUE or FALSE
         */
        set_subtitle_track_enabled(enabled: boolean): void;

        /**
         * Sets the external subtitle URI. This should be combined with a call to
         * gst_play_set_subtitle_track_enabled(`play`, TRUE) so the subtitles are actually
         * rendered.
         * @param uri subtitle URI
         */
        set_subtitle_uri(uri: (string | null)): void;

        /**
         * Sets subtitle-video-offset property by value of `offset`
         * @param offset `gint64` in nanoseconds
         */
        set_subtitle_video_offset(offset: (bigint | number)): void;

        /**
         * Sets the next URI to play.
         * @param uri next URI to play.
         */
        set_uri(uri: (string | null)): void;

        /**
         * @param stream_index stream index
         * @returns `true` or `false` Sets the video track `stream_index`.
         */
        set_video_track(stream_index: number): boolean;

        /**
         * Enable or disable the current video track.
         * @param enabled TRUE or FALSE
         */
        set_video_track_enabled(enabled: boolean): void;

        /**
         * @param name visualization element obtained from `gst_play_visualizations_get`()
         * @returns `true` if the visualizations was set correctly. Otherwise, `false`.
         */
        set_visualization(name: (string | null)): boolean;

        /**
         * Enable or disable the visualization.
         * @param enabled TRUE or FALSE
         */
        set_visualization_enabled(enabled: boolean): void;

        /**
         * Sets the volume level of the stream as a percentage between 0 and 1.
         * @param val the new volume level, as a percentage between 0 and 1
         */
        set_volume(val: number): void;

        /**
         * Stops playing the current stream and resets to the first position
         * in the stream.
         */
        stop(): void;
    }


    namespace PlayAudioInfo {
        // Signal signatures
        interface SignalSignatures extends PlayStreamInfo.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends PlayStreamInfo.ConstructorProps {

        }
    }

    /**
     * {@link GstPlay.PlayStreamInfo} specific to audio streams.
     * @gir-type Class
     * @since 1.20
     */
    class PlayAudioInfo extends PlayStreamInfo {
        static $gtype: GObject.GType<PlayAudioInfo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PlayAudioInfo.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PlayAudioInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof PlayAudioInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayAudioInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PlayAudioInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayAudioInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PlayAudioInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlayAudioInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns the audio bitrate in {@link GstPlay.PlayAudioInfo} or -1 if unknown.
         */
        get_bitrate(): number;

        /**
         * @returns the number of audio channels in {@link GstPlay.PlayAudioInfo} or 0 if unknown.
         */
        get_channels(): number;

        /**
         * @returns the language of the stream, or `null` if unknown.
         */
        get_language(): (string | null);

        /**
         * @returns the audio maximum bitrate in {@link GstPlay.PlayAudioInfo} or -1 if unknown.
         */
        get_max_bitrate(): number;

        /**
         * @returns the audio sample rate in {@link GstPlay.PlayAudioInfo} or 0 if unknown.
         */
        get_sample_rate(): number;
    }


    namespace PlayMediaInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * Structure containing the media information of a URI.
     * @gir-type Class
     * @since 1.20
     */
    class PlayMediaInfo extends GObject.Object {
        static $gtype: GObject.GType<PlayMediaInfo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PlayMediaInfo.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PlayMediaInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof PlayMediaInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayMediaInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PlayMediaInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayMediaInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PlayMediaInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlayMediaInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns A {@link GLib.List} of matching {@link GstPlay.PlayAudioInfo}.
         */
        get_audio_streams(): PlayAudioInfo[];

        /**
         * @returns the container format or `null` if unknown.
         */
        get_container_format(): (string | null);

        /**
         * @returns duration of the media.
         */
        get_duration(): Gst.ClockTime;

        /**
         * Function to get the image (or preview-image) stored in taglist.
         * Application can use `gst_sample_*_()` API's to get caps, buffer etc.
         * @returns GstSample or `null`.
         */
        get_image_sample(): (Gst.Sample | null);

        /**
         * @returns number of audio streams.
         */
        get_number_of_audio_streams(): number;

        /**
         * @returns number of total streams.
         */
        get_number_of_streams(): number;

        /**
         * @returns number of subtitle streams.
         */
        get_number_of_subtitle_streams(): number;

        /**
         * @returns number of video streams.
         */
        get_number_of_video_streams(): number;

        /**
         * @returns A {@link GLib.List} of matching {@link GstPlay.PlayStreamInfo}.
         */
        get_stream_list(): PlayStreamInfo[];

        /**
         * @returns A {@link GLib.List} of matching {@link GstPlay.PlaySubtitleInfo}.
         */
        get_subtitle_streams(): PlaySubtitleInfo[];

        /**
         * @returns the tags contained in media info.
         */
        get_tags(): (Gst.TagList | null);

        /**
         * @returns the media title or `null` if unknown.
         */
        get_title(): (string | null);

        /**
         * @returns the URI associated with {@link GstPlay.PlayMediaInfo}.
         */
        get_uri(): string;

        /**
         * @returns A {@link GLib.List} of matching {@link GstPlay.PlayVideoInfo}.
         */
        get_video_streams(): PlayVideoInfo[];

        /**
         * @returns `true` if the media is live.
         */
        is_live(): boolean;

        /**
         * @returns `true` if the media is seekable.
         */
        is_seekable(): boolean;
    }


    namespace PlaySignalAdapter {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            buffering: (arg0: number) => void;
            /**
             * @signal
             * @run-last
             */
            "duration-changed": (arg0: number) => void;
            /**
             * @signal
             * @run-last
             */
            "end-of-stream": () => void;
            /**
             * Emitted on errors.
             * @signal
             * @run-last
             */
            error: (arg0: GLib.Error, arg1: (Gst.Structure | null)) => void;
            /**
             * @signal
             * @run-last
             */
            "media-info-updated": (arg0: PlayMediaInfo) => void;
            /**
             * @signal
             * @run-last
             */
            "mute-changed": (arg0: boolean) => void;
            /**
             * @signal
             * @run-last
             */
            "position-updated": (arg0: number) => void;
            /**
             * @signal
             * @run-last
             */
            "seek-done": (arg0: number) => void;
            /**
             * @signal
             * @run-last
             */
            "state-changed": (arg0: PlayState) => void;
            /**
             * @signal
             * @run-last
             */
            "uri-loaded": (arg0: string) => void;
            /**
             * @signal
             * @run-last
             */
            "video-dimensions-changed": (arg0: number, arg1: number) => void;
            /**
             * @signal
             * @run-last
             */
            "volume-changed": (arg0: number) => void;
            /**
             * Emitted on warnings.
             * @signal
             * @run-last
             */
            warning: (arg0: GLib.Error, arg1: (Gst.Structure | null)) => void;
            "notify::play": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            play: Play;
        }
    }

    /**
     * @gir-type Class
     * @since 1.20
     */
    class PlaySignalAdapter extends GObject.Object {
        static $gtype: GObject.GType<PlaySignalAdapter>;

        // Properties
        /**
         * @read-only
         */
        get play(): Play;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PlaySignalAdapter.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PlaySignalAdapter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](play: Play): PlaySignalAdapter;

        static new_sync_emit(play: Play): PlaySignalAdapter;

        static new_with_main_context(play: Play, context: GLib.MainContext): PlaySignalAdapter;

        // Signals
        /** @signal */
        connect<K extends keyof PlaySignalAdapter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlaySignalAdapter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PlaySignalAdapter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlaySignalAdapter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PlaySignalAdapter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlaySignalAdapter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns The {@link GstPlay.Play} owning this signal adapter.
         */
        get_play(): Play;
    }


    namespace PlayStreamInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * Base structure for information concerning a media stream. Depending on
     * the stream type, one can find more media-specific information in
     * {@link GstPlay.PlayVideoInfo}, {@link GstPlay.PlayAudioInfo}, {@link GstPlay.PlaySubtitleInfo}.
     * @gir-type Class
     * @since 1.20
     */
    abstract class PlayStreamInfo extends GObject.Object {
        static $gtype: GObject.GType<PlayStreamInfo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PlayStreamInfo.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PlayStreamInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof PlayStreamInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayStreamInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PlayStreamInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayStreamInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PlayStreamInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlayStreamInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns the {@link Gst.Caps} of the stream or `null` if unknown.
         */
        get_caps(): (Gst.Caps | null);

        /**
         * A string describing codec used in {@link GstPlay.PlayStreamInfo}.
         * @returns codec string or `null` on unknown.
         */
        get_codec(): (string | null);

        /**
         * Function to get stream index from {@link GstPlay.PlayStreamInfo} instance or -1 if
         * unknown.
         * @returns the stream index of this stream.
         */
        get_index(): number;

        /**
         * Function to return human readable name for the stream type
         * of the given `info` (ex: "audio", "video", "subtitle")
         * @returns a human readable name
         */
        get_stream_type(): string;

        /**
         * @returns the tags contained in this stream.
         */
        get_tags(): (Gst.TagList | null);
    }


    namespace PlaySubtitleInfo {
        // Signal signatures
        interface SignalSignatures extends PlayStreamInfo.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends PlayStreamInfo.ConstructorProps {

        }
    }

    /**
     * {@link GstPlay.PlayStreamInfo} specific to subtitle streams.
     * @gir-type Class
     * @since 1.20
     */
    class PlaySubtitleInfo extends PlayStreamInfo {
        static $gtype: GObject.GType<PlaySubtitleInfo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PlaySubtitleInfo.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PlaySubtitleInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof PlaySubtitleInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlaySubtitleInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PlaySubtitleInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlaySubtitleInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PlaySubtitleInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlaySubtitleInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns the language of the stream, or `null` if unknown.
         */
        get_language(): (string | null);
    }


    namespace PlayVideoInfo {
        // Signal signatures
        interface SignalSignatures extends PlayStreamInfo.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends PlayStreamInfo.ConstructorProps {

        }
    }

    /**
     * {@link GstPlay.PlayStreamInfo} specific to video streams.
     * @gir-type Class
     * @since 1.20
     */
    class PlayVideoInfo extends PlayStreamInfo {
        static $gtype: GObject.GType<PlayVideoInfo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PlayVideoInfo.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PlayVideoInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof PlayVideoInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayVideoInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PlayVideoInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayVideoInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PlayVideoInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlayVideoInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns the current bitrate of video in {@link GstPlay.PlayVideoInfo} or -1 if unknown.
         */
        get_bitrate(): number;

        get_framerate(): [number, number];

        /**
         * @returns the height of video in {@link GstPlay.PlayVideoInfo} or -1 if unknown.
         */
        get_height(): number;

        /**
         * @returns the maximum bitrate of video in {@link GstPlay.PlayVideoInfo} or -1 if unknown.
         */
        get_max_bitrate(): number;

        /**
         * Returns the pixel aspect ratio in `par_n` and `par_d`
         */
        get_pixel_aspect_ratio(): [number, number];

        /**
         * @returns the width of video in {@link GstPlay.PlayVideoInfo} or -1 if unknown.
         */
        get_width(): number;
    }


    namespace PlayVideoOverlayVideoRenderer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::video-sink": (pspec: GObject.ParamSpec) => void;
            "notify::window-handle": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, PlayVideoRenderer.ConstructorProps {
            video_sink: Gst.Element;
            videoSink: Gst.Element;
            window_handle: (any | null);
            windowHandle: (any | null);
        }
    }

    /**
     * @gir-type Class
     * @since 1.20
     */
    class PlayVideoOverlayVideoRenderer extends GObject.Object implements PlayVideoRenderer {
        static $gtype: GObject.GType<PlayVideoOverlayVideoRenderer>;

        // Properties
        get video_sink(): Gst.Element;
        set video_sink(val: Gst.Element);

        get videoSink(): Gst.Element;
        set videoSink(val: Gst.Element);

        get window_handle(): (any | null);
        set window_handle(val: (any | null));

        get windowHandle(): (any | null);
        set windowHandle(val: (any | null));

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PlayVideoOverlayVideoRenderer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PlayVideoOverlayVideoRenderer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof PlayVideoOverlayVideoRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayVideoOverlayVideoRenderer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PlayVideoOverlayVideoRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayVideoOverlayVideoRenderer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PlayVideoOverlayVideoRenderer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlayVideoOverlayVideoRenderer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param window_handle Window handle to use or `null`
         */
        static ["new"](window_handle: (any | null)): PlayVideoRenderer;

        /**
         * @param window_handle Window handle to use or `null`
         * @param video_sink the custom video_sink element to be set for the video renderer
         */
        static new_with_sink(window_handle: (any | null), video_sink: Gst.Element): PlayVideoRenderer;

        // Methods
        /**
         * Tell an overlay that it has been exposed. This will redraw the current frame
         * in the drawable even if the pipeline is PAUSED.
         */
        expose(): void;

        /**
         * Return the currently configured render rectangle. See `gst_play_video_overlay_video_renderer_set_render_rectangle()`
         * for details.
         */
        get_render_rectangle(): [number, number, number, number];

        /**
         * @returns The currently set, platform specific window handle
         */
        get_window_handle(): (any | null);

        /**
         * Configure a subregion as a video target within the window set by
         * `gst_play_video_overlay_video_renderer_set_window_handle()`. If this is not
         * used or not supported the video will fill the area of the window set as the
         * overlay to 100%. By specifying the rectangle, the video can be overlaid to
         * a specific region of that window only. After setting the new rectangle one
         * should call `gst_play_video_overlay_video_renderer_expose()` to force a
         * redraw. To unset the region pass -1 for the `width` and `height` parameters.
         * 
         * This method is needed for non fullscreen video overlay in UI toolkits that
         * do not support subwindows.
         * @param x the horizontal offset of the render area inside the window
         * @param y the vertical offset of the render area inside the window
         * @param width the width of the render area inside the window
         * @param height the height of the render area inside the window
         */
        set_render_rectangle(x: number, y: number, width: number, height: number): void;

        /**
         * Sets the platform specific window handle into which the video
         * should be rendered
         * @param window_handle handle referencing to the platform specific window
         */
        set_window_handle(window_handle: (any | null)): void;
    }


    /**
     * @gir-type Alias
     */
    type PlayAudioInfoClass = typeof PlayAudioInfo;

    /**
     * @gir-type Alias
     */
    type PlayClass = typeof Play;

    /**
     * @gir-type Alias
     */
    type PlayMediaInfoClass = typeof PlayMediaInfo;

    /**
     * @gir-type Alias
     */
    type PlaySignalAdapterClass = typeof PlaySignalAdapter;

    /**
     * @gir-type Alias
     */
    type PlayStreamInfoClass = typeof PlayStreamInfo;

    /**
     * @gir-type Alias
     */
    type PlaySubtitleInfoClass = typeof PlaySubtitleInfo;

    /**
     * @gir-type Alias
     */
    type PlayVideoInfoClass = typeof PlayVideoInfo;

    /**
     * @gir-type Alias
     */
    type PlayVideoOverlayVideoRendererClass = typeof PlayVideoOverlayVideoRenderer;

    /**
     * @gir-type Alias
     */
    type PlayVideoRendererInterface = typeof PlayVideoRenderer;

    /**
     * A {@link GstPlay.PlayVisualization} descriptor.
     * @gir-type Struct
     * @since 1.20
     */
    class PlayVisualization {
        static $gtype: GObject.GType<PlayVisualization>;

        // Fields
        name: string;

        description: string;

        // Constructors

        constructor(properties?: Partial<{
            name: string;
            description: string;
        }>);

        // Methods
        /**
         * Makes a copy of the {@link GstPlay.PlayVisualization}. The result must be
         * freed using `gst_play_visualization_free()`.
         * @returns an allocated copy of `vis`.
         */
        copy(): PlayVisualization;

        /**
         * Frees a {@link GstPlay.PlayVisualization}.
         */
        free(): void;
    }


    namespace PlayVideoRenderer {

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface PlayVideoRendererNamespace {
        $gtype: GObject.GType<PlayVideoRenderer>;
        prototype: PlayVideoRenderer;
    }
    /**
     * @gir-type Interface
     * @since 1.20
     */
    interface PlayVideoRenderer extends GObject.Object {
    }


    export const PlayVideoRenderer: PlayVideoRendererNamespace & {
        new (): PlayVideoRenderer; // This allows `obj instanceof PlayVideoRenderer`
    };

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

export default GstPlay;

// END
