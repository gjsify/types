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

        constructor(options: { message: string; code: number });

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
    function player_color_balance_type_get_name(type: PlayerColorBalanceType | null): string;
    /**
     * Gets a string representing the given error.
     * @param error a {@link GstPlayer.PlayerError}
     * @returns a string with the given error.
     */
    function player_error_get_name(error: PlayerError | null): string;
    function player_error_quark(): GLib.Quark;
    /**
     * Gets a string representing the given state.
     * @param state a {@link GstPlayer.PlayerState}
     * @returns a string with the name of the state.
     */
    function player_state_get_name(state: PlayerState | null): string;
    /**
     * @gir-type Callback
     */
    interface PlayerSignalDispatcherFunc {
        (data?: any | null): void;
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
            'duration-changed': (arg0: number) => void;
            /**
             * @signal
             * @run-last
             */
            'end-of-stream': () => void;
            /**
             * @signal
             * @run-last
             */
            error: (arg0: GLib.Error) => void;
            /**
             * @signal
             * @run-last
             */
            'media-info-updated': (arg0: PlayerMediaInfo) => void;
            /**
             * @signal
             * @run-last
             */
            'mute-changed': () => void;
            /**
             * @signal
             * @run-last
             */
            'position-updated': (arg0: number) => void;
            /**
             * @signal
             * @run-last
             */
            'seek-done': (arg0: number) => void;
            /**
             * @signal
             * @run-last
             */
            'state-changed': (arg0: PlayerState) => void;
            /**
             * @signal
             * @run-last
             */
            'uri-loaded': (arg0: string) => void;
            /**
             * @signal
             * @run-last
             */
            'video-dimensions-changed': (arg0: number, arg1: number) => void;
            /**
             * @signal
             * @run-last
             */
            'volume-changed': () => void;
            /**
             * @signal
             * @run-last
             */
            warning: (arg0: GLib.Error) => void;
            'notify::audio-video-offset': (pspec: GObject.ParamSpec) => void;
            'notify::current-audio-track': (pspec: GObject.ParamSpec) => void;
            'notify::current-subtitle-track': (pspec: GObject.ParamSpec) => void;
            'notify::current-video-track': (pspec: GObject.ParamSpec) => void;
            'notify::duration': (pspec: GObject.ParamSpec) => void;
            'notify::media-info': (pspec: GObject.ParamSpec) => void;
            'notify::mute': (pspec: GObject.ParamSpec) => void;
            'notify::pipeline': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::rate': (pspec: GObject.ParamSpec) => void;
            'notify::signal-dispatcher': (pspec: GObject.ParamSpec) => void;
            'notify::subtitle-video-offset': (pspec: GObject.ParamSpec) => void;
            'notify::suburi': (pspec: GObject.ParamSpec) => void;
            'notify::uri': (pspec: GObject.ParamSpec) => void;
            'notify::video-multiview-flags': (pspec: GObject.ParamSpec) => void;
            'notify::video-multiview-mode': (pspec: GObject.ParamSpec) => void;
            'notify::video-renderer': (pspec: GObject.ParamSpec) => void;
            'notify::volume': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            audio_video_offset: number;
            audioVideoOffset: number;
            current_audio_track: PlayerAudioInfo;
            currentAudioTrack: PlayerAudioInfo;
            current_subtitle_track: PlayerSubtitleInfo;
            currentSubtitleTrack: PlayerSubtitleInfo;
            current_video_track: PlayerVideoInfo;
            currentVideoTrack: PlayerVideoInfo;
            duration: number;
            media_info: PlayerMediaInfo;
            mediaInfo: PlayerMediaInfo;
            mute: boolean;
            pipeline: Gst.Element;
            position: number;
            rate: number;
            signal_dispatcher: PlayerSignalDispatcher;
            signalDispatcher: PlayerSignalDispatcher;
            subtitle_video_offset: number;
            subtitleVideoOffset: number;
            suburi: string;
            uri: string;
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

        get audio_video_offset(): number;
        set audio_video_offset(val: number);
        get audioVideoOffset(): number;
        set audioVideoOffset(val: number);
        /**
         * @read-only
         */
        get current_audio_track(): PlayerAudioInfo;
        /**
         * @read-only
         */
        get currentAudioTrack(): PlayerAudioInfo;
        /**
         * @read-only
         */
        get current_subtitle_track(): PlayerSubtitleInfo;
        /**
         * @read-only
         */
        get currentSubtitleTrack(): PlayerSubtitleInfo;
        /**
         * @read-only
         */
        get current_video_track(): PlayerVideoInfo;
        /**
         * @read-only
         */
        get currentVideoTrack(): PlayerVideoInfo;
        /**
         * @read-only
         */
        get duration(): number;
        /**
         * @read-only
         */
        get media_info(): PlayerMediaInfo;
        /**
         * @read-only
         */
        get mediaInfo(): PlayerMediaInfo;
        get mute(): boolean;
        set mute(val: boolean);
        /**
         * @read-only
         */
        get pipeline(): Gst.Element;
        /**
         * @read-only
         */
        get position(): number;
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
        get subtitle_video_offset(): number;
        set subtitle_video_offset(val: number);
        get subtitleVideoOffset(): number;
        set subtitleVideoOffset(val: number);
        get suburi(): string;
        set suburi(val: string);
        get uri(): string;
        set uri(val: string);
        get video_multiview_flags(): GstVideo.VideoMultiviewFlags;
        set video_multiview_flags(val: GstVideo.VideoMultiviewFlags);
        get videoMultiviewFlags(): GstVideo.VideoMultiviewFlags;
        set videoMultiviewFlags(val: GstVideo.VideoMultiviewFlags);
        get video_multiview_mode(): GstVideo.VideoMultiviewFramePacking;
        set video_multiview_mode(val: GstVideo.VideoMultiviewFramePacking);
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

        static ['new'](
            video_renderer?: PlayerVideoRenderer | null,
            signal_dispatcher?: PlayerSignalDispatcher | null,
        ): Player;

        // Signals

        /** @signal */
        connect<K extends keyof Player.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Player.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Player.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Player.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Player.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Player.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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
        static config_get_user_agent(config: Gst.Structure): string | null;
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
        static config_set_user_agent(config: Gst.Structure, agent?: string | null): void;
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
        get_color_balance(type: PlayerColorBalanceType | null): number;
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
        get_current_audio_track(): PlayerAudioInfo | null;
        /**
         * A Function to get current subtitle {@link GstPlayer.PlayerSubtitleInfo} instance.
         * @returns current subtitle track. The caller should free it with `g_object_unref()`
         */
        get_current_subtitle_track(): PlayerSubtitleInfo | null;
        /**
         * A Function to get current video {@link GstPlayer.PlayerVideoInfo} instance.
         * @returns current video track. The caller should free it with `g_object_unref()`
         */
        get_current_video_track(): PlayerVideoInfo | null;
        /**
         * @returns Name of the currently enabled   visualization.   `g_free()` after usage.
         */
        get_current_visualization(): string | null;
        /**
         * Retrieves the duration of the media stream that self represents.
         * @returns the duration of the currently-playing media stream, in nanoseconds.
         */
        get_duration(): Gst.ClockTime;
        /**
         * A Function to get the current media info {@link GstPlayer.PlayerMediaInfo} instance.
         * @returns media info instance. The caller should free it with `g_object_unref()`
         */
        get_media_info(): PlayerMediaInfo | null;
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
        get_subtitle_uri(): string | null;
        /**
         * Retrieve the current value of subtitle-video-offset property
         * @returns The current value of subtitle-video-offset in nanoseconds
         */
        get_subtitle_video_offset(): number;
        /**
         * Gets the URI of the currently-playing stream.
         * @returns a string containing the URI of the currently-playing stream. `g_free()` after usage.
         */
        get_uri(): string | null;
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
        get_video_snapshot(format: PlayerSnapshotFormat | null, config?: Gst.Structure | null): Gst.Sample | null;
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
        set_audio_video_offset(offset: number): void;
        /**
         * Sets the current value of the indicated channel `type` to the passed
         * value.
         * @param type {@link GstPlayer.PlayerColorBalanceType}
         * @param value The new value for the `type`, ranged [0,1]
         */
        set_color_balance(type: PlayerColorBalanceType | null, value: number): void;
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
        set_multiview_flags(flags: GstVideo.VideoMultiviewFlags | null): void;
        /**
         * Sets the current value of the indicated mode `type` to the passed
         * value.
         * @param mode The new value for the `type`
         */
        set_multiview_mode(mode: GstVideo.VideoMultiviewFramePacking | null): void;
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
        set_subtitle_uri(uri?: string | null): void;
        /**
         * Sets subtitle-video-offset property by value of `offset`
         * @param offset `gint64` in nanoseconds
         */
        set_subtitle_video_offset(offset: number): void;
        /**
         * Sets the next URI to play.
         * @param uri next URI to play.
         */
        set_uri(uri?: string | null): void;
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
        set_visualization(name?: string | null): boolean;
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
        interface SignalSignatures extends PlayerStreamInfo.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends PlayerStreamInfo.ConstructorProps {}
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
        connect<K extends keyof PlayerAudioInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PlayerAudioInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PlayerAudioInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PlayerAudioInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PlayerAudioInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PlayerAudioInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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
        get_language(): string | null;
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
            'notify::application-context': (pspec: GObject.ParamSpec) => void;
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
        connect<K extends keyof PlayerGMainContextSignalDispatcher.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PlayerGMainContextSignalDispatcher.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PlayerGMainContextSignalDispatcher.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PlayerGMainContextSignalDispatcher.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PlayerGMainContextSignalDispatcher.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PlayerGMainContextSignalDispatcher.SignalSignatures[K]> extends [
                any,
                ...infer Q,
            ]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Creates a new GstPlayerSignalDispatcher that uses `application_context`,
         * or the thread default one if `null` is used. See `gst_player_new()`.
         * @param application_context GMainContext to use or `null`
         */
        static ['new'](application_context?: GLib.MainContext | null): PlayerSignalDispatcher;
        /**
         * @param player
         * @param emitter
         * @virtual
         */
        vfunc_dispatch(player: Player, emitter: PlayerSignalDispatcherFunc): void;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace PlayerMediaInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
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
        connect<K extends keyof PlayerMediaInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PlayerMediaInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PlayerMediaInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PlayerMediaInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PlayerMediaInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PlayerMediaInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns A {@link GLib.List} of matching {@link GstPlayer.PlayerAudioInfo}.
         */
        get_audio_streams(): PlayerAudioInfo[];
        /**
         * @returns the container format or `null` if unknown.
         */
        get_container_format(): string | null;
        /**
         * @returns duration of the media or `GST_CLOCK_TIME_NONE` if unknown.
         */
        get_duration(): Gst.ClockTime;
        /**
         * Function to get the image (or preview-image) stored in taglist.
         * Application can use `gst_sample_*_()` API's to get caps, buffer etc.
         * @returns GstSample or `null`.
         */
        get_image_sample(): Gst.Sample | null;
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
        get_tags(): Gst.TagList | null;
        /**
         * @returns the media title or `null` if unknown.
         */
        get_title(): string | null;
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
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
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
        connect<K extends keyof PlayerStreamInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PlayerStreamInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PlayerStreamInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PlayerStreamInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PlayerStreamInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PlayerStreamInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns the {@link Gst.Caps} of the stream.
         */
        get_caps(): Gst.Caps | null;
        /**
         * A string describing codec used in {@link GstPlayer.PlayerStreamInfo}.
         * @returns codec string or `null` on unknown.
         */
        get_codec(): string | null;
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
        get_tags(): Gst.TagList | null;
    }

    namespace PlayerSubtitleInfo {
        // Signal signatures
        interface SignalSignatures extends PlayerStreamInfo.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends PlayerStreamInfo.ConstructorProps {}
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
        connect<K extends keyof PlayerSubtitleInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PlayerSubtitleInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PlayerSubtitleInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PlayerSubtitleInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PlayerSubtitleInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PlayerSubtitleInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns the language of the stream, or `null` if unknown.
         */
        get_language(): string | null;
    }

    namespace PlayerVideoInfo {
        // Signal signatures
        interface SignalSignatures extends PlayerStreamInfo.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends PlayerStreamInfo.ConstructorProps {}
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
        connect<K extends keyof PlayerVideoInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PlayerVideoInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PlayerVideoInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PlayerVideoInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PlayerVideoInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PlayerVideoInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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
            'notify::video-sink': (pspec: GObject.ParamSpec) => void;
            'notify::window-handle': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, PlayerVideoRenderer.ConstructorProps {
            video_sink: Gst.Element;
            videoSink: Gst.Element;
            window_handle: any;
            windowHandle: any;
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
        get window_handle(): any;
        set window_handle(val: any);
        get windowHandle(): any;
        set windowHandle(val: any);

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
        connect<K extends keyof PlayerVideoOverlayVideoRenderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PlayerVideoOverlayVideoRenderer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PlayerVideoOverlayVideoRenderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PlayerVideoOverlayVideoRenderer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PlayerVideoOverlayVideoRenderer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PlayerVideoOverlayVideoRenderer.SignalSignatures[K]> extends [
                any,
                ...infer Q,
            ]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param window_handle Window handle to use or `null`
         */
        static ['new'](window_handle?: any | null): PlayerVideoRenderer;
        /**
         * @param window_handle Window handle to use or `null`
         * @param video_sink the custom video_sink element to be set for the video renderer
         */
        static new_with_sink(window_handle: any | null, video_sink: Gst.Element): PlayerVideoRenderer;

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
        get_window_handle(): any | null;
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
        set_window_handle(window_handle?: any | null): void;
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
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
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
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
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

        constructor(
            properties?: Partial<{
                name: string;
                description: string;
            }>,
        );

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

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface PlayerSignalDispatcherNamespace {
        $gtype: GObject.GType<PlayerSignalDispatcher>;
        prototype: PlayerSignalDispatcher;
    }
    /**
     * @gir-type Interface
     */
    interface PlayerSignalDispatcher extends GObject.Object, PlayerSignalDispatcher.Interface {}

    export const PlayerSignalDispatcher: PlayerSignalDispatcherNamespace & {
        new (): PlayerSignalDispatcher; // This allows `obj instanceof PlayerSignalDispatcher`
    };

    namespace PlayerVideoRenderer {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface PlayerVideoRendererNamespace {
        $gtype: GObject.GType<PlayerVideoRenderer>;
        prototype: PlayerVideoRenderer;
    }
    /**
     * @gir-type Interface
     */
    interface PlayerVideoRenderer extends GObject.Object {}

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
