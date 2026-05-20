
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

export namespace GstClapper {

    /**
     * GstClapper-1.0
     */


    /**
     * @gir-type Enum
     */
    export namespace ClapperColorBalanceType {
        export const $gtype: GObject.GType<ClapperColorBalanceType>;
    }

    /**
     * @gir-type Enum
     */
    enum ClapperColorBalanceType {
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
    class ClapperError extends GLib.Error {
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
         * @param error a {@link GstClapper.ClapperError}
         */
        static get_name(error: ClapperError): string;

        static quark(): GLib.Quark;
    }


    /**
     * @gir-type Enum
     */
    export namespace ClapperSeekMode {
        export const $gtype: GObject.GType<ClapperSeekMode>;
    }

    /**
     * @gir-type Enum
     */
    enum ClapperSeekMode {
        /**
         * default seek method (flush only).
         */
        DEFAULT,
        /**
         * accurate seek method.
         */
        ACCURATE,
        /**
         * fast seek method (next keyframe).
         */
        FAST,
    }


    /**
     * @gir-type Enum
     */
    enum ClapperSnapshotFormat {
        /**
         * RAW Native.
         */
        RAW_NATIVE,
        /**
         * RAW xRGB.
         */
        RAW_XRGB,
        /**
         * RAW BGRx.
         */
        RAW_BGRX,
        /**
         * JPG.
         */
        JPG,
        /**
         * PNG.
         */
        PNG,
    }


    /**
     * @gir-type Enum
     */
    export namespace ClapperState {
        export const $gtype: GObject.GType<ClapperState>;
    }

    /**
     * @gir-type Enum
     */
    enum ClapperState {
        /**
         * clapper is stopped.
         */
        STOPPED,
        /**
         * clapper is buffering.
         */
        BUFFERING,
        /**
         * clapper is paused.
         */
        PAUSED,
        /**
         * clapper is currently playing a stream.
         */
        PLAYING,
    }


    /**
     * Gets a string representing the given color balance type.
     * @param type a {@link GstClapper.ClapperColorBalanceType}
     * @returns a string with the name of the color balance type.
     */
    function clapper_color_balance_type_get_name(type: ClapperColorBalanceType): string;

    /**
     * Gets a string representing the given error.
     * @param error a {@link GstClapper.ClapperError}
     * @returns a string with the given error.
     */
    function clapper_error_get_name(error: ClapperError): string;

    function clapper_error_quark(): GLib.Quark;

    /**
     * Gets a string representing the given state.
     * @param state a {@link GstClapper.ClapperState}
     * @returns a string with the name of the state.
     */
    function clapper_state_get_name(state: ClapperState): string;

    /**
     * @gir-type Callback
     */
    interface ClapperSignalDispatcherFunc {
        (data: null): void;
    }

    namespace Clapper {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            "audio-decoder-changed": (arg0: string) => void;
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
            "media-info-updated": (arg0: ClapperMediaInfo) => void;
            /**
             * @signal
             * @run-last
             */
            "position-updated": (arg0: number) => void;
            /**
             * @signal
             * @run-last
             */
            "state-changed": (arg0: ClapperState) => void;
            /**
             * @signal
             * @run-last
             */
            "uri-loaded": (arg0: string) => void;
            /**
             * @signal
             * @run-last
             */
            "video-decoder-changed": (arg0: string) => void;
            /**
             * @signal
             * @run-last
             */
            "video-dimensions-changed": (arg0: number, arg1: number) => void;
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
            "notify::mpris": (pspec: GObject.ParamSpec) => void;
            "notify::mute": (pspec: GObject.ParamSpec) => void;
            "notify::pipeline": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::rate": (pspec: GObject.ParamSpec) => void;
            "notify::seek-mode": (pspec: GObject.ParamSpec) => void;
            "notify::signal-dispatcher": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::subtitle-video-offset": (pspec: GObject.ParamSpec) => void;
            "notify::suburi": (pspec: GObject.ParamSpec) => void;
            "notify::uri": (pspec: GObject.ParamSpec) => void;
            "notify::use-pipewire": (pspec: GObject.ParamSpec) => void;
            "notify::use-playbin3": (pspec: GObject.ParamSpec) => void;
            "notify::video-multiview-flags": (pspec: GObject.ParamSpec) => void;
            "notify::video-multiview-mode": (pspec: GObject.ParamSpec) => void;
            "notify::video-renderer": (pspec: GObject.ParamSpec) => void;
            "notify::volume": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gst.Object.ConstructorProps {
            audio_video_offset: bigint | number;
            audioVideoOffset: bigint | number;
            current_audio_track: ClapperAudioInfo;
            currentAudioTrack: ClapperAudioInfo;
            current_subtitle_track: ClapperSubtitleInfo;
            currentSubtitleTrack: ClapperSubtitleInfo;
            current_video_track: ClapperVideoInfo;
            currentVideoTrack: ClapperVideoInfo;
            duration: bigint | number;
            media_info: ClapperMediaInfo;
            mediaInfo: ClapperMediaInfo;
            mpris: ClapperMpris;
            mute: boolean;
            pipeline: Gst.Element;
            position: bigint | number;
            rate: number;
            seek_mode: ClapperSeekMode;
            seekMode: ClapperSeekMode;
            signal_dispatcher: ClapperSignalDispatcher;
            signalDispatcher: ClapperSignalDispatcher;
            state: ClapperState;
            subtitle_video_offset: bigint | number;
            subtitleVideoOffset: bigint | number;
            suburi: string;
            uri: string;
            use_pipewire: boolean;
            usePipewire: boolean;
            use_playbin3: boolean;
            usePlaybin3: boolean;
            video_multiview_flags: GstVideo.VideoMultiviewFlags;
            videoMultiviewFlags: GstVideo.VideoMultiviewFlags;
            video_multiview_mode: GstVideo.VideoMultiviewFramePacking;
            videoMultiviewMode: GstVideo.VideoMultiviewFramePacking;
            video_renderer: ClapperVideoRenderer;
            videoRenderer: ClapperVideoRenderer;
            volume: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Clapper extends Gst.Object {
        static $gtype: GObject.GType<Clapper>;

        // Properties
        /**
         * @default 0
         */
        get audio_video_offset(): number;
        set audio_video_offset(val: bigint | number);

        /**
         * @default 0
         */
        get audioVideoOffset(): number;
        set audioVideoOffset(val: bigint | number);

        /**
         * @read-only
         */
        get current_audio_track(): ClapperAudioInfo;

        /**
         * @read-only
         */
        get currentAudioTrack(): ClapperAudioInfo;

        /**
         * @read-only
         */
        get current_subtitle_track(): ClapperSubtitleInfo;

        /**
         * @read-only
         */
        get currentSubtitleTrack(): ClapperSubtitleInfo;

        /**
         * @read-only
         */
        get current_video_track(): ClapperVideoInfo;

        /**
         * @read-only
         */
        get currentVideoTrack(): ClapperVideoInfo;

        /**
         * @read-only
         * @default 18446744073709551615
         */
        get duration(): number;

        /**
         * @read-only
         */
        get media_info(): ClapperMediaInfo;

        /**
         * @read-only
         */
        get mediaInfo(): ClapperMediaInfo;

        /**
         * @construct-only
         */
        get mpris(): ClapperMpris;

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
         * @default GstClapper.ClapperSeekMode.DEFAULT
         */
        get seek_mode(): ClapperSeekMode;
        set seek_mode(val: ClapperSeekMode);

        /**
         * @default GstClapper.ClapperSeekMode.DEFAULT
         */
        get seekMode(): ClapperSeekMode;
        set seekMode(val: ClapperSeekMode);

        /**
         * @construct-only
         */
        set signal_dispatcher(val: ClapperSignalDispatcher);

        /**
         * @construct-only
         */
        set signalDispatcher(val: ClapperSignalDispatcher);

        /**
         * @read-only
         * @default GstClapper.ClapperState.STOPPED
         */
        get state(): ClapperState;

        /**
         * @default 0
         */
        get subtitle_video_offset(): number;
        set subtitle_video_offset(val: bigint | number);

        /**
         * @default 0
         */
        get subtitleVideoOffset(): number;
        set subtitleVideoOffset(val: bigint | number);

        /**
         * @default null
         */
        get suburi(): string;
        set suburi(val: string);

        /**
         * @default null
         */
        get uri(): string;
        set uri(val: string);

        /**
         * @construct-only
         * @default false
         */
        set use_pipewire(val: boolean);

        /**
         * @construct-only
         * @default false
         */
        set usePipewire(val: boolean);

        /**
         * @construct-only
         * @default false
         */
        set use_playbin3(val: boolean);

        /**
         * @construct-only
         * @default false
         */
        set usePlaybin3(val: boolean);

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
        set video_renderer(val: ClapperVideoRenderer);

        /**
         * @construct-only
         */
        set videoRenderer(val: ClapperVideoRenderer);

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
        $signals: Clapper.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Clapper.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](video_renderer: ClapperVideoRenderer | null, signal_dispatcher: ClapperSignalDispatcher | null, mpris: ClapperMpris | null): Clapper;

        // Signals
        /** @signal */
        connect<K extends keyof Clapper.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Clapper.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Clapper.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Clapper.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Clapper.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Clapper.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Automatically initializes GStreamer library if this was not done by the user yet
         * and tweaks some of its defaults to our liking. It is recommended to use this
         * function instead of plain `gst_init()`.
         * 
         * This also allows usage of GstClapper API alone without importing GStreamer
         * on the implementation side.
         * @param argv pointer to application's argv
         */
        static gst_init(argv: string[] | null): string[] | null;

        /**
         * Frees a `null` terminated array of {@link GstClapper.ClapperVisualization}.
         * @param viss a `null` terminated array of {@link GstClapper.ClapperVisualization} to free
         */
        static visualizations_free(viss: ClapperVisualization): void;

        static visualizations_get(): ClapperVisualization[];

        // Methods
        /**
         * Retrieve the current value of audio-video-offset property
         * @returns The current value of audio-video-offset in nanoseconds
         */
        get_audio_video_offset(): number;

        /**
         * Retrieve the current value of the indicated `type`.
         * @param type {@link GstClapper.ClapperColorBalanceType}
         * @returns The current value of `type`, between [0,1]. In case of   error -1 is returned.
         */
        get_color_balance(type: ClapperColorBalanceType): number;

        /**
         * A Function to get current audio {@link GstClapper.ClapperAudioInfo} instance.
         * @returns current audio track. The caller should free it with `g_object_unref()`
         */
        get_current_audio_track(): ClapperAudioInfo;

        /**
         * A Function to get current subtitle {@link GstClapper.ClapperSubtitleInfo} instance.
         * @returns current subtitle track. The caller should free it with `g_object_unref()`
         */
        get_current_subtitle_track(): ClapperSubtitleInfo;

        /**
         * A Function to get current video {@link GstClapper.ClapperVideoInfo} instance.
         * @returns current video track. The caller should free it with `g_object_unref()`
         */
        get_current_video_track(): ClapperVideoInfo;

        /**
         * @returns Name of the currently enabled visualization.   `g_free()` after usage.
         */
        get_current_visualization(): string;

        /**
         * Retrieves the duration of the media stream that self represents.
         * @returns the duration of the currently-playing media stream, in nanoseconds.
         */
        get_duration(): Gst.ClockTime;

        /**
         * A Function to get the current media info {@link GstClapper.ClapperMediaInfo} instance.
         * @returns media info instance. The caller should free it with `g_object_unref()`
         */
        get_media_info(): ClapperMediaInfo;

        /**
         * A Function to get the {@link GstClapper.ClapperMpris} instance.
         * @returns mpris instance. The caller should free it with `g_object_unref()`
         */
        get_mpris(): ClapperMpris;

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
         * @returns The currently used seek mode, Default: 0 "default"
         */
        get_seek_mode(): ClapperSeekMode;

        /**
         * @returns Current player state
         */
        get_state(): ClapperState;

        /**
         * current subtitle URI
         * @returns URI of the current external subtitle.   `g_free()` after usage.
         */
        get_subtitle_uri(): string;

        /**
         * Retrieve the current value of subtitle-video-offset property
         * @returns The current value of subtitle-video-offset in nanoseconds
         */
        get_subtitle_video_offset(): number;

        /**
         * Gets the URI of the currently-playing stream.
         * @returns a string containing the URI of the currently-playing stream. `g_free()` after usage.
         */
        get_uri(): string;

        /**
         * Get a snapshot of the currently selected video stream, if any. The format can be
         * selected with `format` and optional configuration is possible with `config`
         * Currently supported settings are:
         * - width, height of type G_TYPE_INT
         * - pixel-aspect-ratio of type GST_TYPE_FRACTION
         *  Except for GST_CLAPPER_THUMBNAIL_RAW_NATIVE format, if no config is set, pixel-aspect-ratio would be 1/1
         * @param format output format of the video snapshot
         * @param config Additional configuration
         * @returns Current video snapshot sample or `null` on failure
         */
        get_video_snapshot(format: ClapperSnapshotFormat, config: Gst.Structure | null): Gst.Sample;

        /**
         * Returns the current volume level, as a percentage between 0 and 1.5
         * @returns the cubic volume as percentage between 0 and 1.5
         */
        get_volume(): number;

        /**
         * Checks whether the `clapper` has color balance support available.
         * @returns `true` if `clapper` has color balance support. Otherwise,   `false`.
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
         * Seeks the currently-playing stream to the `offset` time
         * in nanoseconds.
         * @param offset offset from current position to seek to in nanoseconds
         */
        seek_offset(offset: Gst.ClockTime): void;

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
        set_audio_video_offset(offset: bigint | number): void;

        /**
         * Sets the current value of the indicated channel `type` to the passed
         * value.
         * @param type {@link GstClapper.ClapperColorBalanceType}
         * @param value The new value for the `type`, ranged [0,1]
         */
        set_color_balance(type: ClapperColorBalanceType, value: number): void;

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
         * Changes currently used clapper seek mode to the one of `mode`
         * @param mode {@link GstClapper.ClapperSeekMode}
         */
        set_seek_mode(mode: ClapperSeekMode): void;

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
         * gst_clapper_set_subtitle_track_enabled(`clapper`, TRUE) so the subtitles are actually
         * rendered.
         * @param uri subtitle URI
         */
        set_subtitle_uri(uri: string): void;

        /**
         * Sets subtitle-video-offset property by value of `offset`
         * @param offset `gint64` in nanoseconds
         */
        set_subtitle_video_offset(offset: bigint | number): void;

        /**
         * Sets the next URI to play.
         * @param uri next URI to play.
         */
        set_uri(uri: string): void;

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
         * @param name visualization element obtained from `gst_clapper_visualizations_get`()
         * @returns `true` if the visualizations was set correctly. Otherwise, `false`.
         */
        set_visualization(name: string): boolean;

        /**
         * Enable or disable the visualization.
         * @param enabled TRUE or FALSE
         */
        set_visualization_enabled(enabled: boolean): void;

        /**
         * Sets the volume level of the stream as a percentage between 0 and 1.5
         * Volume operates on a cubic scale.
         * @param val the new volume level, as a percentage between 0 and 1.5
         */
        set_volume(val: number): void;

        /**
         * Stops playing the current stream and resets to the first position
         * in the stream.
         */
        stop(): void;

        /**
         * Toggle between play and pause on the loaded stream.
         * This function does nothing if player is stopped.
         */
        toggle_play(): void;
    }


    namespace ClapperAudioInfo {
        // Signal signatures
        interface SignalSignatures extends ClapperStreamInfo.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends ClapperStreamInfo.ConstructorProps {}
    }

    /**
     * {@link GstClapper.ClapperStreamInfo} specific to audio streams.
     * @gir-type Class
     */
    class ClapperAudioInfo extends ClapperStreamInfo {
        static $gtype: GObject.GType<ClapperAudioInfo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ClapperAudioInfo.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ClapperAudioInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ClapperAudioInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClapperAudioInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ClapperAudioInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClapperAudioInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ClapperAudioInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClapperAudioInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns the audio bitrate in {@link GstClapper.ClapperAudioInfo}.
         */
        get_bitrate(): number;

        /**
         * @returns the number of audio channels in {@link GstClapper.ClapperAudioInfo}.
         */
        get_channels(): number;

        /**
         * @returns the language of the stream, or NULL if unknown.
         */
        get_language(): string;

        /**
         * @returns the audio maximum bitrate in {@link GstClapper.ClapperAudioInfo}.
         */
        get_max_bitrate(): number;

        /**
         * @returns the audio sample rate in {@link GstClapper.ClapperAudioInfo}.
         */
        get_sample_rate(): number;
    }


    namespace ClapperGMainContextSignalDispatcher {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::application-context": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, ClapperSignalDispatcher.ConstructorProps {
            application_context: GLib.MainContext;
            applicationContext: GLib.MainContext;
        }
    }

    /**
     * @gir-type Class
     */
    class ClapperGMainContextSignalDispatcher extends GObject.Object implements ClapperSignalDispatcher {
        static $gtype: GObject.GType<ClapperGMainContextSignalDispatcher>;

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
        $signals: ClapperGMainContextSignalDispatcher.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ClapperGMainContextSignalDispatcher.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ClapperGMainContextSignalDispatcher.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClapperGMainContextSignalDispatcher.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ClapperGMainContextSignalDispatcher.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClapperGMainContextSignalDispatcher.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ClapperGMainContextSignalDispatcher.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClapperGMainContextSignalDispatcher.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Creates a new GstClapperSignalDispatcher that uses `application_context`,
         * or the thread default one if `null` is used. See `gst_clapper_new()`.
         * @param application_context GMainContext to use or `null`
         */
        static ["new"](application_context: GLib.MainContext | null): ClapperSignalDispatcher;

        /**
         * @param clapper 
         * @param emitter 
         * @virtual
         */
        vfunc_dispatch(clapper: Clapper, emitter: ClapperSignalDispatcherFunc): void;
    }


    namespace ClapperGtk4Plugin {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::video-sink": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            video_sink: Gst.Element;
            videoSink: Gst.Element;
        }
    }

    /**
     * Opaque {@link GstClapper.ClapperGtk4Plugin} object
     * @gir-type Class
     */
    class ClapperGtk4Plugin extends GObject.Object {
        static $gtype: GObject.GType<ClapperGtk4Plugin>;

        // Properties
        /**
         * @read-only
         */
        get video_sink(): Gst.Element;

        /**
         * @read-only
         */
        get videoSink(): Gst.Element;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ClapperGtk4Plugin.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ClapperGtk4Plugin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ClapperGtk4Plugin;

        // Signals
        /** @signal */
        connect<K extends keyof ClapperGtk4Plugin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClapperGtk4Plugin.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ClapperGtk4Plugin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClapperGtk4Plugin.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ClapperGtk4Plugin.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClapperGtk4Plugin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace ClapperMediaInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Structure containing the media information of a URI.
     * @gir-type Class
     */
    class ClapperMediaInfo extends GObject.Object {
        static $gtype: GObject.GType<ClapperMediaInfo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ClapperMediaInfo.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ClapperMediaInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ClapperMediaInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClapperMediaInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ClapperMediaInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClapperMediaInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ClapperMediaInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClapperMediaInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns A {@link GLib.List} of matching {@link GstClapper.ClapperAudioInfo}.
         */
        get_audio_streams(): ClapperAudioInfo[];

        /**
         * @returns the container format.
         */
        get_container_format(): string;

        /**
         * @returns duration of the media.
         */
        get_duration(): Gst.ClockTime;

        /**
         * Function to get the image (or preview-image) stored in taglist.
         * Application can use `gst_sample_*_()` API's to get caps, buffer etc.
         * @returns GstSample or NULL.
         */
        get_image_sample(): Gst.Sample;

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
         * @returns A {@link GLib.List} of matching {@link GstClapper.ClapperStreamInfo}.
         */
        get_stream_list(): ClapperStreamInfo[];

        /**
         * @returns A {@link GLib.List} of matching {@link GstClapper.ClapperSubtitleInfo}.
         */
        get_subtitle_streams(): ClapperSubtitleInfo[];

        /**
         * @returns the tags contained in media info.
         */
        get_tags(): Gst.TagList;

        /**
         * @returns the media title. When metadata does not contain title, returns title parsed from URI.
         */
        get_title(): string;

        /**
         * @returns the toc contained in media info.
         */
        get_toc(): Gst.Toc;

        /**
         * @returns the URI associated with {@link GstClapper.ClapperMediaInfo}.
         */
        get_uri(): string;

        /**
         * @returns A {@link GLib.List} of matching {@link GstClapper.ClapperVideoInfo}.
         */
        get_video_streams(): ClapperVideoInfo[];

        /**
         * @returns `true` if the media is live.
         */
        is_live(): boolean;

        /**
         * @returns `true` if the media is seekable.
         */
        is_seekable(): boolean;
    }


    namespace ClapperMpris {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::default-art-url": (pspec: GObject.ParamSpec) => void;
            "notify::desktop-entry": (pspec: GObject.ParamSpec) => void;
            "notify::id-path": (pspec: GObject.ParamSpec) => void;
            "notify::identity": (pspec: GObject.ParamSpec) => void;
            "notify::own-name": (pspec: GObject.ParamSpec) => void;
            "notify::volume": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            default_art_url: string;
            defaultArtUrl: string;
            desktop_entry: string;
            desktopEntry: string;
            id_path: string;
            idPath: string;
            identity: string;
            own_name: string;
            ownName: string;
            volume: number;
        }
    }

    /**
     * @gir-type Class
     */
    class ClapperMpris extends GObject.Object {
        static $gtype: GObject.GType<ClapperMpris>;

        // Properties
        /**
         * @construct-only
         * @default null
         */
        get default_art_url(): string;

        /**
         * @construct-only
         * @default null
         */
        get defaultArtUrl(): string;

        /**
         * @construct-only
         * @default null
         */
        get desktop_entry(): string;

        /**
         * @construct-only
         * @default null
         */
        get desktopEntry(): string;

        /**
         * @construct-only
         * @default null
         */
        get id_path(): string;

        /**
         * @construct-only
         * @default null
         */
        get idPath(): string;

        /**
         * @construct-only
         * @default null
         */
        get identity(): string;

        /**
         * @construct-only
         * @default null
         */
        get own_name(): string;

        /**
         * @construct-only
         * @default null
         */
        get ownName(): string;

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
        $signals: ClapperMpris.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ClapperMpris.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](own_name: string, id_path: string, identity: string | null, desktop_entry: string | null, default_art_url: string | null): ClapperMpris;

        // Signals
        /** @signal */
        connect<K extends keyof ClapperMpris.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClapperMpris.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ClapperMpris.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClapperMpris.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ClapperMpris.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClapperMpris.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace ClapperStreamInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Base structure for information concerning a media stream. Depending on
     * the stream type, one can find more media-specific information in
     * {@link GstClapper.ClapperVideoInfo}, {@link GstClapper.ClapperAudioInfo}, {@link GstClapper.ClapperSubtitleInfo}.
     * @gir-type Class
     */
    abstract class ClapperStreamInfo extends GObject.Object {
        static $gtype: GObject.GType<ClapperStreamInfo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ClapperStreamInfo.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ClapperStreamInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ClapperStreamInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClapperStreamInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ClapperStreamInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClapperStreamInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ClapperStreamInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClapperStreamInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns the {@link Gst.Caps} of the stream.
         */
        get_caps(): Gst.Caps;

        /**
         * A string describing codec used in {@link GstClapper.ClapperStreamInfo}.
         * @returns codec string or NULL on unknown.
         */
        get_codec(): string;

        /**
         * Function to get stream index from {@link GstClapper.ClapperStreamInfo} instance.
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
        get_tags(): Gst.TagList;
    }


    namespace ClapperSubtitleInfo {
        // Signal signatures
        interface SignalSignatures extends ClapperStreamInfo.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends ClapperStreamInfo.ConstructorProps {}
    }

    /**
     * {@link GstClapper.ClapperStreamInfo} specific to subtitle streams.
     * @gir-type Class
     */
    class ClapperSubtitleInfo extends ClapperStreamInfo {
        static $gtype: GObject.GType<ClapperSubtitleInfo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ClapperSubtitleInfo.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ClapperSubtitleInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ClapperSubtitleInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClapperSubtitleInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ClapperSubtitleInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClapperSubtitleInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ClapperSubtitleInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClapperSubtitleInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns the language of the stream, or NULL if unknown.
         */
        get_language(): string;

        /**
         * @returns the title of the stream, or NULL if unknown.
         */
        get_title(): string;
    }


    namespace ClapperVideoInfo {
        // Signal signatures
        interface SignalSignatures extends ClapperStreamInfo.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends ClapperStreamInfo.ConstructorProps {}
    }

    /**
     * {@link GstClapper.ClapperStreamInfo} specific to video streams.
     * @gir-type Class
     */
    class ClapperVideoInfo extends ClapperStreamInfo {
        static $gtype: GObject.GType<ClapperVideoInfo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ClapperVideoInfo.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ClapperVideoInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ClapperVideoInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClapperVideoInfo.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ClapperVideoInfo.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClapperVideoInfo.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ClapperVideoInfo.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClapperVideoInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns the current bitrate of video in {@link GstClapper.ClapperVideoInfo}.
         */
        get_bitrate(): number;

        get_framerate(): [number, number];

        /**
         * @returns the height of video in {@link GstClapper.ClapperVideoInfo}.
         */
        get_height(): number;

        /**
         * @returns the maximum bitrate of video in {@link GstClapper.ClapperVideoInfo}.
         */
        get_max_bitrate(): number;

        /**
         * Returns the pixel aspect ratio in `par_n` and `par_d`
         */
        get_pixel_aspect_ratio(): [number, number];

        /**
         * @returns the width of video in {@link GstClapper.ClapperVideoInfo}.
         */
        get_width(): number;
    }


    namespace ClapperVideoOverlayVideoRenderer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::video-sink": (pspec: GObject.ParamSpec) => void;
            "notify::window-handle": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, ClapperVideoRenderer.ConstructorProps {
            video_sink: Gst.Element;
            videoSink: Gst.Element;
            window_handle: never;
            windowHandle: never;
        }
    }

    /**
     * @gir-type Class
     */
    class ClapperVideoOverlayVideoRenderer extends GObject.Object implements ClapperVideoRenderer {
        static $gtype: GObject.GType<ClapperVideoOverlayVideoRenderer>;

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
        $signals: ClapperVideoOverlayVideoRenderer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ClapperVideoOverlayVideoRenderer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ClapperVideoOverlayVideoRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClapperVideoOverlayVideoRenderer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ClapperVideoOverlayVideoRenderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClapperVideoOverlayVideoRenderer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ClapperVideoOverlayVideoRenderer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClapperVideoOverlayVideoRenderer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * @param window_handle Window handle to use or `null`
         */
        static ["new"](window_handle: null): ClapperVideoRenderer;

        /**
         * @param window_handle Window handle to use or `null`
         * @param video_sink the custom video_sink element to be set for the video renderer
         */
        static new_with_sink(window_handle: null, video_sink: Gst.Element): ClapperVideoRenderer;

        // Methods
        /**
         * Tell an overlay that it has been exposed. This will redraw the current frame
         * in the drawable even if the pipeline is PAUSED.
         */
        expose(): void;

        /**
         * Return the currently configured render rectangle. See `gst_clapper_video_overlay_video_renderer_set_render_rectangle()`
         * for details.
         */
        get_render_rectangle(): [number, number, number, number];

        /**
         * @returns The currently set, platform specific window handle
         */
        get_window_handle(): null;

        /**
         * Configure a subregion as a video target within the window set by
         * `gst_clapper_video_overlay_video_renderer_set_window_handle()`. If this is not
         * used or not supported the video will fill the area of the window set as the
         * overlay to 100%. By specifying the rectangle, the video can be overlaid to
         * a specific region of that window only. After setting the new rectangle one
         * should call `gst_clapper_video_overlay_video_renderer_expose()` to force a
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
    type ClapperAudioInfoClass = typeof ClapperAudioInfo;

    /**
     * @gir-type Alias
     */
    type ClapperClass = typeof Clapper;

    /**
     * @gir-type Alias
     */
    type ClapperGMainContextSignalDispatcherClass = typeof ClapperGMainContextSignalDispatcher;

    /**
     * @gir-type Alias
     */
    type ClapperGtk4PluginClass = typeof ClapperGtk4Plugin;

    /**
     * @gir-type Alias
     */
    type ClapperMediaInfoClass = typeof ClapperMediaInfo;

    /**
     * @gir-type Alias
     */
    type ClapperMprisClass = typeof ClapperMpris;

    /**
     * @gir-type Alias
     */
    type ClapperSignalDispatcherInterface = typeof ClapperSignalDispatcher;

    /**
     * @gir-type Alias
     */
    type ClapperStreamInfoClass = typeof ClapperStreamInfo;

    /**
     * @gir-type Alias
     */
    type ClapperSubtitleInfoClass = typeof ClapperSubtitleInfo;

    /**
     * @gir-type Alias
     */
    type ClapperVideoInfoClass = typeof ClapperVideoInfo;

    /**
     * @gir-type Alias
     */
    type ClapperVideoOverlayVideoRendererClass = typeof ClapperVideoOverlayVideoRenderer;

    /**
     * @gir-type Alias
     */
    type ClapperVideoRendererInterface = typeof ClapperVideoRenderer;

    /**
     * A {@link GstClapper.ClapperVisualization} descriptor.
     * @gir-type Struct
     */
    class ClapperVisualization {
        static $gtype: GObject.GType<ClapperVisualization>;

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
         * Makes a copy of the {@link GstClapper.ClapperVisualization}. The result must be
         * freed using `gst_clapper_visualization_free()`.
         * @returns an allocated copy of `vis`.
         */
        copy(): ClapperVisualization;

        /**
         * Frees a {@link GstClapper.ClapperVisualization}.
         */
        free(): void;
    }


    namespace ClapperSignalDispatcher {
        /**
         * Interface for implementing ClapperSignalDispatcher.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param clapper 
             * @param emitter 
             * @virtual
             */
            vfunc_dispatch(clapper: Clapper, emitter: ClapperSignalDispatcherFunc): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ClapperSignalDispatcherNamespace {
        $gtype: GObject.GType<ClapperSignalDispatcher>;
        prototype: ClapperSignalDispatcher;
    }
    /**
     * @gir-type Interface
     */
    interface ClapperSignalDispatcher extends GObject.Object, ClapperSignalDispatcher.Interface {
    }


    export const ClapperSignalDispatcher: ClapperSignalDispatcherNamespace & {
        new (): ClapperSignalDispatcher; // This allows `obj instanceof ClapperSignalDispatcher`
    };

    namespace ClapperVideoRenderer {

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ClapperVideoRendererNamespace {
        $gtype: GObject.GType<ClapperVideoRenderer>;
        prototype: ClapperVideoRenderer;
    }
    /**
     * @gir-type Interface
     */
    interface ClapperVideoRenderer extends GObject.Object {
    }


    export const ClapperVideoRenderer: ClapperVideoRendererNamespace & {
        new (): ClapperVideoRenderer; // This allows `obj instanceof ClapperVideoRenderer`
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

export default GstClapper;

// END
