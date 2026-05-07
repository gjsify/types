
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

export namespace GstPlayer {

    /**
     * GstPlayer-1.0
     */


    /**
     * @gir-type Enum
     */
    export namespace PlayerColorBalanceType {
        export const $gtype: GObject.GType<PlayerColorBalanceType>;
    }

    /**
     * @gir-type Enum
     */
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


    /**
     * @gir-type Struct
     */
    class PlayerError extends GLib.Error {
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
         * @param error a {@link GstPlayer.PlayerError}
         */
        static get_name(error: PlayerError): string;

        static quark(): GLib.Quark;
    }


    /**
     * @gir-type Enum
     */
    enum PlayerSnapshotFormat {
        RAW_NATIVE,
        RAW_XRGB,
        RAW_BGRX,
        JPG,
        PNG,
    }


    /**
     * @gir-type Enum
     */
    export namespace PlayerState {
        export const $gtype: GObject.GType<PlayerState>;
    }

    /**
     * @gir-type Enum
     */
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
     * @param type a {@link GstPlayer.PlayerColorBalanceType}
     * @returns a string with the name of the color   balance type.
     */
    function player_color_balance_type_get_name(type: PlayerColorBalanceType): string;

    /**
     * Gets a string representing the given error.
     * @param error a {@link GstPlayer.PlayerError}
     * @returns a string with the given error.
     */
    function player_error_get_name(error: PlayerError): string;

    function player_error_quark(): GLib.Quark;

    /**
     * Gets a string representing the given state.
     * @param state a {@link GstPlayer.PlayerState}
     * @returns a string with the name of the state.
     */
    function player_state_get_name(state: PlayerState): string;

    /**
     * @gir-type Callback
     */
    interface PlayerSignalDispatcherFunc {
        (data: null): void;
    }

    namespace Player {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
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
             * @signal
             * @run-last
             */
            error: (arg0: GLib.Error) => void;
            /**
             * @signal
             * @run-last
             */
            "media-info-updated": (arg0: PlayerMediaInfo) => void;
            /**
             * @signal
             * @run-last
             */
            "mute-changed": () => void;
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
            "state-changed": (arg0: PlayerState) => void;
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
            "volume-changed": () => void;
            /**
             * @signal
             * @run-last
             */
            warning: (arg0: GLib.Error) => void;
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
            "notify::signal-dispatcher": (pspec: GObject.ParamSpec) => void;
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
            current_audio_track: (PlayerAudioInfo | null);
            currentAudioTrack: (PlayerAudioInfo | null);
            current_subtitle_track: (PlayerSubtitleInfo | null);
            currentSubtitleTrack: (PlayerSubtitleInfo | null);
            current_video_track: (PlayerVideoInfo | null);
            currentVideoTrack: (PlayerVideoInfo | null);
            duration: (bigint | number);
            media_info: (PlayerMediaInfo | null);
            mediaInfo: (PlayerMediaInfo | null);
            mute: boolean;
            pipeline: Gst.Element;
            position: (bigint | number);
            rate: number;
            signal_dispatcher: PlayerSignalDispatcher;
            signalDispatcher: PlayerSignalDispatcher;
            subtitle_video_offset: (bigint | number);
            subtitleVideoOffset: (bigint | number);
            suburi: string;
            uri: (string | null);
            video_multiview_flags: GstVideo.VideoMultiviewFlags;
            videoMultiviewFlags: GstVideo.VideoMultiviewFlags;
            video_multiview_mode: GstVideo.VideoMultiviewFramePacking;
            videoMultiviewMode: GstVideo.VideoMultiviewFramePacking;
            video_renderer: PlayerVideoRenderer;
            videoRenderer: PlayerVideoRenderer;
            volume: number;
        }
    }

    /**
     * Starting from GStreamer 1.20, application developers are strongly advised to migrate to `GstPlay`.
     * {@link GstPlayer.Player} will be deprecated in 1.20 and most likely removed by 1.24.
     * @gir-type Class
     */
    class Player extends Gst.Object {
        static $gtype: GObject.GType<Player>;

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
        get current_audio_track(): (PlayerAudioInfo | null);

        /**
         * @read-only
         */
        get currentAudioTrack(): (PlayerAudioInfo | null);

        /**
         * @read-only
         */
        get current_subtitle_track(): (PlayerSubtitleInfo | null);

        /**
         * @read-only
         */
        get currentSubtitleTrack(): (PlayerSubtitleInfo | null);

        /**
         * @read-only
         */
        get current_video_track(): (PlayerVideoInfo | null);

        /**
         * @read-only
         */
        get currentVideoTrack(): (PlayerVideoInfo | null);

        /**
         * @read-only
         * @default 18446744073709551615
         */
        get duration(): number;

        /**
         * @read-only
         */
        get media_info(): (PlayerMediaInfo | null);

        /**
         * @read-only
         */
        get mediaInfo(): (PlayerMediaInfo | null);

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
         * @construct-only
         */
        set signal_dispatcher(val: PlayerSignalDispatcher);

        /**
         * @construct-only
         */
        set signalDispatcher(val: PlayerSignalDispatcher);

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

        /**
         * @construct-only
         */
        get video_renderer(): PlayerVideoRenderer;

        /**
         * @construct-only
         */
        get videoRenderer(): PlayerVideoRenderer;

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
        $signals: Player.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Player.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](video_renderer: (PlayerVideoRenderer | null), signal_dispatcher: (PlayerSignalDispatcher | null)): Player;

        // Signals
        /** @signal */
        connect<K extends keyof Player.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Player.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Player.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Player.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Player.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Player.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param config a {@link GstPlayer.Player} configuration
         */
        static config_get_position_update_interval(config: Gst.Structure): number;

        /**
         * @param config a {@link GstPlayer.Player} configuration
         */
        static config_get_seek_accurate(config: Gst.Structure): boolean;

        /**
         * Return the user agent which has been configured using
         * `gst_player_config_set_user_agent()` if any.
         * @param config a {@link GstPlayer.Player} configuration
         */
        static config_get_user_agent(config: Gst.Structure): (string | null);

        /**
         * set interval in milliseconds between two position-updated signals.
         * pass 0 to stop updating the position.
         * @param config a {@link GstPlayer.Player} configuration
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
         * @param config a {@link GstPlayer.Player} configuration
         * @param accurate accurate seek or not
         */
        static config_set_seek_accurate(config: Gst.Structure, accurate: boolean): void;

        /**
         * Set the user agent to pass to the server if `player` needs to connect
         * to a server during playback. This is typically used when playing HTTP
         * or RTSP streams.
         * @param config a {@link GstPlayer.Player} configuration
         * @param agent the string to use as user agent
         */
        static config_set_user_agent(config: Gst.Structure, agent: (string | null)): void;

        /**
         * @param info a {@link GstPlayer.PlayerMediaInfo}
         */
        static get_audio_streams(info: PlayerMediaInfo): PlayerAudioInfo[];

        /**
         * @param info a {@link GstPlayer.PlayerMediaInfo}
         */
        static get_subtitle_streams(info: PlayerMediaInfo): PlayerSubtitleInfo[];

        /**
         * @param info a {@link GstPlayer.PlayerMediaInfo}
         */
        static get_video_streams(info: PlayerMediaInfo): PlayerVideoInfo[];

        /**
         * Frees a `null` terminated array of {@link GstPlayer.PlayerVisualization}.
         * @param viss a `null` terminated array of {@link GstPlayer.PlayerVisualization} to free
         */
        static visualizations_free(viss: PlayerVisualization): void;

        static visualizations_get(): PlayerVisualization[];

        // Methods
        /**
         * Retrieve the current value of audio-video-offset property
         * @returns The current value of audio-video-offset in nanoseconds
         */
        get_audio_video_offset(): number;

        /**
         * Retrieve the current value of the indicated `type`.
         * @param type {@link GstPlayer.PlayerColorBalanceType}
         * @returns The current value of `type`, between [0,1]. In case of   error -1 is returned.
         */
        get_color_balance(type: PlayerColorBalanceType): number;

        /**
         * Get a copy of the current configuration of the player. This configuration
         * can either be modified and used for the `gst_player_set_config()` call
         * or it must be freed after usage.
         * @returns a copy of the current configuration of `player`. Use `gst_structure_free()` after usage or `gst_player_set_config()`.
         */
        get_config(): Gst.Structure;

        /**
         * A Function to get current audio {@link GstPlayer.PlayerAudioInfo} instance.
         * @returns current audio track. The caller should free it with `g_object_unref()`
         */
        get_current_audio_track(): (PlayerAudioInfo | null);

        /**
         * A Function to get current subtitle {@link GstPlayer.PlayerSubtitleInfo} instance.
         * @returns current subtitle track. The caller should free it with `g_object_unref()`
         */
        get_current_subtitle_track(): (PlayerSubtitleInfo | null);

        /**
         * A Function to get current video {@link GstPlayer.PlayerVideoInfo} instance.
         * @returns current video track. The caller should free it with `g_object_unref()`
         */
        get_current_video_track(): (PlayerVideoInfo | null);

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
         * A Function to get the current media info {@link GstPlayer.PlayerMediaInfo} instance.
         * @returns media info instance. The caller should free it with `g_object_unref()`
         */
        get_media_info(): (PlayerMediaInfo | null);

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
         *  Except for GST_PLAYER_THUMBNAIL_RAW_NATIVE format, if no config is set, pixel-aspect-ratio would be 1/1
         * @param format output format of the video snapshot
         * @param config Additional configuration
         * @returns Current video snapshot sample or `null` on failure
         */
        get_video_snapshot(format: PlayerSnapshotFormat, config: (Gst.Structure | null)): (Gst.Sample | null);

        /**
         * Returns the current volume level, as a percentage between 0 and 1.
         * @returns the volume as percentage between 0 and 1.
         */
        get_volume(): number;

        /**
         * Checks whether the `player` has color balance support available.
         * @returns `true` if `player` has color balance support. Otherwise,   `false`.
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
         * @returns `true` or `false` Sets the audio track `stream_idex`.
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
         * @param type {@link GstPlayer.PlayerColorBalanceType}
         * @param value The new value for the `type`, ranged [0,1]
         */
        set_color_balance(type: PlayerColorBalanceType, value: number): void;

        /**
         * Set the configuration of the player. If the player is already configured, and
         * the configuration haven't change, this function will return `true`. If the
         * player is not in the GST_PLAYER_STATE_STOPPED, this method will return `false`
         * and active configuration will remain.
         * 
         * `config` is a {@link Gst.Structure} that contains the configuration parameters for
         * the player.
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
         * gst_player_set_subtitle_track_enabled(`player`, TRUE) so the subtitles are actually
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
         * @param name visualization element obtained from `gst_player_visualizations_get`()
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
         * 
         * This volume is a linear factor. For showing the volume in a GUI it
         * might make sense to first convert from a different format. Volume sliders
         * should usually use a cubic volume. See `gst_stream_volume_convert_volume()`.
         * @param val the new volume level, as a percentage between 0 and 1
         */
        set_volume(val: number): void;

        /**
         * Stops playing the current stream and resets to the first position
         * in the stream.
         */
        stop(): void;
    }


    namespace PlayerAudioInfo {
        // Signal signatures
        interface SignalSignatures extends PlayerStreamInfo.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends PlayerStreamInfo.ConstructorProps {

        }
    }

    /**
     * {@link GstPlayer.PlayerStreamInfo} specific to audio streams.
     * @gir-type Class
     */
    class PlayerAudioInfo extends PlayerStreamInfo {
        static $gtype: GObject.GType<PlayerAudioInfo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PlayerAudioInfo.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PlayerAudioInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof PlayerAudioInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerAudioInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PlayerAudioInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerAudioInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PlayerAudioInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlayerAudioInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns the audio bitrate in {@link GstPlayer.PlayerAudioInfo} or -1 if unknown.
         */
        get_bitrate(): number;

        /**
         * @returns the number of audio channels in {@link GstPlayer.PlayerAudioInfo} or 0 if unknown.
         */
        get_channels(): number;

        /**
         * @returns the language of the stream, or NULL if unknown.
         */
        get_language(): (string | null);

        /**
         * @returns the audio maximum bitrate in {@link GstPlayer.PlayerAudioInfo} or -1 if unknown.
         */
        get_max_bitrate(): number;

        /**
         * @returns the audio sample rate in {@link GstPlayer.PlayerAudioInfo} or 0 if unknown.
         */
        get_sample_rate(): number;
    }


    namespace PlayerGMainContextSignalDispatcher {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::application-context": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, PlayerSignalDispatcher.ConstructorProps {
            application_context: GLib.MainContext;
            applicationContext: GLib.MainContext;
        }
    }

    /**
     * @gir-type Class
     */
    class PlayerGMainContextSignalDispatcher extends GObject.Object implements PlayerSignalDispatcher {
        static $gtype: GObject.GType<PlayerGMainContextSignalDispatcher>;

        // Properties
        /**
         * @construct-only
         */
        get application_context(): GLib.MainContext;

        /**
         * @construct-only
         */
        get applicationContext(): GLib.MainContext;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PlayerGMainContextSignalDispatcher.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PlayerGMainContextSignalDispatcher.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof PlayerGMainContextSignalDispatcher.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerGMainContextSignalDispatcher.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PlayerGMainContextSignalDispatcher.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerGMainContextSignalDispatcher.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PlayerGMainContextSignalDispatcher.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlayerGMainContextSignalDispatcher.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Creates a new GstPlayerSignalDispatcher that uses `application_context`,
         * or the thread default one if `null` is used. See `gst_player_new()`.
         * @param application_context GMainContext to use or `null`
         */
        static ["new"](application_context: (GLib.MainContext | null)): PlayerSignalDispatcher;

        /**
         * @param player 
         * @param emitter 
         * @virtual
         */
        vfunc_dispatch(player: Player, emitter: PlayerSignalDispatcherFunc): void;
    }


    namespace PlayerMediaInfo {
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
     */
    class PlayerMediaInfo extends GObject.Object {
        static $gtype: GObject.GType<PlayerMediaInfo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PlayerMediaInfo.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PlayerMediaInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof PlayerMediaInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerMediaInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PlayerMediaInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerMediaInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PlayerMediaInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlayerMediaInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns A {@link GLib.List} of matching {@link GstPlayer.PlayerAudioInfo}.
         */
        get_audio_streams(): PlayerAudioInfo[];

        /**
         * @returns the container format or `null` if unknown.
         */
        get_container_format(): (string | null);

        /**
         * @returns duration of the media or `GST_CLOCK_TIME_NONE` if unknown.
         */
        get_duration(): Gst.ClockTime;

        /**
         * Function to get the image (or preview-image) stored in taglist.
         * Application can use `gst_sample_*_()` API's to get caps, buffer etc.
         * @returns GstSample or `null`.
         */
        get_image_sample(): (Gst.Sample | null);

        /**
         * @returns number of audio streams or 0 if unknown.
         */
        get_number_of_audio_streams(): number;

        /**
         * @returns number of total streams or 0 if unknown.
         */
        get_number_of_streams(): number;

        /**
         * @returns number of subtitle streams or 0 if unknown.
         */
        get_number_of_subtitle_streams(): number;

        /**
         * @returns number of video streams or 0 if unknown.
         */
        get_number_of_video_streams(): number;

        /**
         * @returns A {@link GLib.List} of matching {@link GstPlayer.PlayerStreamInfo}.
         */
        get_stream_list(): PlayerStreamInfo[];

        /**
         * @returns A {@link GLib.List} of matching {@link GstPlayer.PlayerSubtitleInfo}.
         */
        get_subtitle_streams(): PlayerSubtitleInfo[];

        /**
         * @returns the tags contained in media info.
         */
        get_tags(): (Gst.TagList | null);

        /**
         * @returns the media title or `null` if unknown.
         */
        get_title(): (string | null);

        /**
         * @returns the URI associated with {@link GstPlayer.PlayerMediaInfo}.
         */
        get_uri(): string;

        /**
         * @returns A {@link GLib.List} of matching {@link GstPlayer.PlayerVideoInfo}.
         */
        get_video_streams(): PlayerVideoInfo[];

        /**
         * @returns `true` if the media is live.
         */
        is_live(): boolean;

        /**
         * @returns `true` if the media is seekable.
         */
        is_seekable(): boolean;
    }


    namespace PlayerStreamInfo {
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
     * {@link GstPlayer.PlayerVideoInfo}, {@link GstPlayer.PlayerAudioInfo}, {@link GstPlayer.PlayerSubtitleInfo}.
     * @gir-type Class
     */
    abstract class PlayerStreamInfo extends GObject.Object {
        static $gtype: GObject.GType<PlayerStreamInfo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PlayerStreamInfo.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PlayerStreamInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof PlayerStreamInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerStreamInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PlayerStreamInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerStreamInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PlayerStreamInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlayerStreamInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns the {@link Gst.Caps} of the stream.
         */
        get_caps(): (Gst.Caps | null);

        /**
         * A string describing codec used in {@link GstPlayer.PlayerStreamInfo}.
         * @returns codec string or `null` on unknown.
         */
        get_codec(): (string | null);

        /**
         * Function to get stream index from {@link GstPlayer.PlayerStreamInfo} instance or -1 if
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


    namespace PlayerSubtitleInfo {
        // Signal signatures
        interface SignalSignatures extends PlayerStreamInfo.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends PlayerStreamInfo.ConstructorProps {

        }
    }

    /**
     * {@link GstPlayer.PlayerStreamInfo} specific to subtitle streams.
     * @gir-type Class
     */
    class PlayerSubtitleInfo extends PlayerStreamInfo {
        static $gtype: GObject.GType<PlayerSubtitleInfo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PlayerSubtitleInfo.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PlayerSubtitleInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof PlayerSubtitleInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerSubtitleInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PlayerSubtitleInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerSubtitleInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PlayerSubtitleInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlayerSubtitleInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns the language of the stream, or `null` if unknown.
         */
        get_language(): (string | null);
    }


    namespace PlayerVideoInfo {
        // Signal signatures
        interface SignalSignatures extends PlayerStreamInfo.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends PlayerStreamInfo.ConstructorProps {

        }
    }

    /**
     * {@link GstPlayer.PlayerStreamInfo} specific to video streams.
     * @gir-type Class
     */
    class PlayerVideoInfo extends PlayerStreamInfo {
        static $gtype: GObject.GType<PlayerVideoInfo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PlayerVideoInfo.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PlayerVideoInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof PlayerVideoInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerVideoInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PlayerVideoInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerVideoInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PlayerVideoInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlayerVideoInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns the current bitrate of video in {@link GstPlayer.PlayerVideoInfo} or -1 if unknown.
         */
        get_bitrate(): number;

        get_framerate(): [number, number];

        /**
         * @returns the height of video in {@link GstPlayer.PlayerVideoInfo} or -1 if unknown.
         */
        get_height(): number;

        /**
         * @returns the maximum bitrate of video in {@link GstPlayer.PlayerVideoInfo} or -1 if unknown.
         */
        get_max_bitrate(): number;

        /**
         * Returns the pixel aspect ratio in `par_n` and `par_d`
         */
        get_pixel_aspect_ratio(): [number, number];

        /**
         * @returns the width of video in {@link GstPlayer.PlayerVideoInfo} or -1 if unknown.
         */
        get_width(): number;
    }


    namespace PlayerVideoOverlayVideoRenderer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::video-sink": (pspec: GObject.ParamSpec) => void;
            "notify::window-handle": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, PlayerVideoRenderer.ConstructorProps {
            video_sink: Gst.Element;
            videoSink: Gst.Element;
            window_handle: never;
            windowHandle: never;
        }
    }

    /**
     * @gir-type Class
     */
    class PlayerVideoOverlayVideoRenderer extends GObject.Object implements PlayerVideoRenderer {
        static $gtype: GObject.GType<PlayerVideoOverlayVideoRenderer>;

        // Properties
        get video_sink(): Gst.Element;
        set video_sink(val: Gst.Element);

        get videoSink(): Gst.Element;
        set videoSink(val: Gst.Element);

        get window_handle(): null;
        set window_handle(val: never);

        get windowHandle(): null;
        set windowHandle(val: never);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PlayerVideoOverlayVideoRenderer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PlayerVideoOverlayVideoRenderer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof PlayerVideoOverlayVideoRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerVideoOverlayVideoRenderer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PlayerVideoOverlayVideoRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerVideoOverlayVideoRenderer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PlayerVideoOverlayVideoRenderer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlayerVideoOverlayVideoRenderer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param window_handle Window handle to use or `null`
         */
        static ["new"](window_handle: null): PlayerVideoRenderer;

        /**
         * @param window_handle Window handle to use or `null`
         * @param video_sink the custom video_sink element to be set for the video renderer
         */
        static new_with_sink(window_handle: null, video_sink: Gst.Element): PlayerVideoRenderer;

        // Methods
        /**
         * Tell an overlay that it has been exposed. This will redraw the current frame
         * in the drawable even if the pipeline is PAUSED.
         */
        expose(): void;

        /**
         * Return the currently configured render rectangle. See `gst_player_video_overlay_video_renderer_set_render_rectangle()`
         * for details.
         */
        get_render_rectangle(): [number, number, number, number];

        /**
         * @returns The currently set, platform specific window handle
         */
        get_window_handle(): null;

        /**
         * Configure a subregion as a video target within the window set by
         * `gst_player_video_overlay_video_renderer_set_window_handle()`. If this is not
         * used or not supported the video will fill the area of the window set as the
         * overlay to 100%. By specifying the rectangle, the video can be overlaid to
         * a specific region of that window only. After setting the new rectangle one
         * should call `gst_player_video_overlay_video_renderer_expose()` to force a
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
        set_window_handle(window_handle: null): void;
    }


    /**
     * @gir-type Alias
     */
    type PlayerAudioInfoClass = typeof PlayerAudioInfo;

    /**
     * @gir-type Alias
     */
    type PlayerClass = typeof Player;

    /**
     * @gir-type Alias
     */
    type PlayerGMainContextSignalDispatcherClass = typeof PlayerGMainContextSignalDispatcher;

    /**
     * @gir-type Alias
     */
    type PlayerMediaInfoClass = typeof PlayerMediaInfo;

    /**
     * @gir-type Alias
     */
    type PlayerSignalDispatcherInterface = typeof PlayerSignalDispatcher;

    /**
     * @gir-type Alias
     */
    type PlayerStreamInfoClass = typeof PlayerStreamInfo;

    /**
     * @gir-type Alias
     */
    type PlayerSubtitleInfoClass = typeof PlayerSubtitleInfo;

    /**
     * @gir-type Alias
     */
    type PlayerVideoInfoClass = typeof PlayerVideoInfo;

    /**
     * @gir-type Alias
     */
    type PlayerVideoOverlayVideoRendererClass = typeof PlayerVideoOverlayVideoRenderer;

    /**
     * @gir-type Alias
     */
    type PlayerVideoRendererInterface = typeof PlayerVideoRenderer;

    /**
     * A {@link GstPlayer.PlayerVisualization} descriptor.
     * @gir-type Struct
     */
    class PlayerVisualization {
        static $gtype: GObject.GType<PlayerVisualization>;

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
         * Makes a copy of the {@link GstPlayer.PlayerVisualization}. The result must be
         * freed using `gst_player_visualization_free()`.
         * @returns an allocated copy of `vis`.
         */
        copy(): PlayerVisualization;

        /**
         * Frees a {@link GstPlayer.PlayerVisualization}.
         */
        free(): void;
    }


    namespace PlayerSignalDispatcher {
        /**
         * Interface for implementing PlayerSignalDispatcher.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param player 
             * @param emitter 
             * @virtual
             */
            vfunc_dispatch(player: Player, emitter: PlayerSignalDispatcherFunc): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface PlayerSignalDispatcherNamespace {
        $gtype: GObject.GType<PlayerSignalDispatcher>;
        prototype: PlayerSignalDispatcher;
    }
    /**
     * @gir-type Interface
     */
    interface PlayerSignalDispatcher extends GObject.Object, PlayerSignalDispatcher.Interface {
    }


    export const PlayerSignalDispatcher: PlayerSignalDispatcherNamespace & {
        new (): PlayerSignalDispatcher; // This allows `obj instanceof PlayerSignalDispatcher`
    };

    namespace PlayerVideoRenderer {

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface PlayerVideoRendererNamespace {
        $gtype: GObject.GType<PlayerVideoRenderer>;
        prototype: PlayerVideoRenderer;
    }
    /**
     * @gir-type Interface
     */
    interface PlayerVideoRenderer extends GObject.Object {
    }


    export const PlayerVideoRenderer: PlayerVideoRendererNamespace & {
        new (): PlayerVideoRenderer; // This allows `obj instanceof PlayerVideoRenderer`
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

export default GstPlayer;

// END
