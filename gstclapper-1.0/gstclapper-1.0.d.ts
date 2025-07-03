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

    export namespace ClapperColorBalanceType {
        export const $gtype: GObject.GType<ClapperColorBalanceType>;
    }

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
    class ClapperError extends GLib.Error {
        static $gtype: GObject.GType<ClapperError>;

        // Static fields

        /**
         * generic error.
         */
        static FAILED: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Gets a string representing the given error.
         * @param error a #GstClapperError
         */
        static get_name(error: ClapperError): string;
        static quark(): GLib.Quark;
    }

    export namespace ClapperSeekMode {
        export const $gtype: GObject.GType<ClapperSeekMode>;
    }

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

    export namespace ClapperSnapshotFormat {
        export const $gtype: GObject.GType<ClapperSnapshotFormat>;
    }

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

    export namespace ClapperState {
        export const $gtype: GObject.GType<ClapperState>;
    }

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
     * @param type a #GstClapperColorBalanceType
     * @returns a string with the name of the color balance type.
     */
    function clapper_color_balance_type_get_name(type: ClapperColorBalanceType | null): string;
    /**
     * Gets a string representing the given error.
     * @param error a #GstClapperError
     * @returns a string with the given error.
     */
    function clapper_error_get_name(error: ClapperError | null): string;
    function clapper_error_quark(): GLib.Quark;
    /**
     * Gets a string representing the given state.
     * @param state a #GstClapperState
     * @returns a string with the name of the state.
     */
    function clapper_state_get_name(state: ClapperState | null): string;
    interface ClapperSignalDispatcherFunc {
        (data?: any | null): void;
    }
    namespace Clapper {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'audio-decoder-changed': (arg0: string) => void;
            buffering: (arg0: number) => void;
            'duration-changed': (arg0: number) => void;
            'end-of-stream': () => void;
            error: (arg0: GLib.Error) => void;
            'media-info-updated': (arg0: ClapperMediaInfo) => void;
            'position-updated': (arg0: number) => void;
            'state-changed': (arg0: ClapperState) => void;
            'uri-loaded': (arg0: string) => void;
            'video-decoder-changed': (arg0: string) => void;
            'video-dimensions-changed': (arg0: number, arg1: number) => void;
            warning: (arg0: GLib.Error) => void;
            'notify::audio-video-offset': (pspec: GObject.ParamSpec) => void;
            'notify::current-audio-track': (pspec: GObject.ParamSpec) => void;
            'notify::current-subtitle-track': (pspec: GObject.ParamSpec) => void;
            'notify::current-video-track': (pspec: GObject.ParamSpec) => void;
            'notify::duration': (pspec: GObject.ParamSpec) => void;
            'notify::media-info': (pspec: GObject.ParamSpec) => void;
            'notify::mpris': (pspec: GObject.ParamSpec) => void;
            'notify::mute': (pspec: GObject.ParamSpec) => void;
            'notify::pipeline': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::rate': (pspec: GObject.ParamSpec) => void;
            'notify::seek-mode': (pspec: GObject.ParamSpec) => void;
            'notify::signal-dispatcher': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'notify::subtitle-video-offset': (pspec: GObject.ParamSpec) => void;
            'notify::suburi': (pspec: GObject.ParamSpec) => void;
            'notify::uri': (pspec: GObject.ParamSpec) => void;
            'notify::use-pipewire': (pspec: GObject.ParamSpec) => void;
            'notify::use-playbin3': (pspec: GObject.ParamSpec) => void;
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
            current_audio_track: ClapperAudioInfo;
            currentAudioTrack: ClapperAudioInfo;
            current_subtitle_track: ClapperSubtitleInfo;
            currentSubtitleTrack: ClapperSubtitleInfo;
            current_video_track: ClapperVideoInfo;
            currentVideoTrack: ClapperVideoInfo;
            duration: number;
            media_info: ClapperMediaInfo;
            mediaInfo: ClapperMediaInfo;
            mpris: ClapperMpris;
            mute: boolean;
            pipeline: Gst.Element;
            position: number;
            rate: number;
            seek_mode: ClapperSeekMode;
            seekMode: ClapperSeekMode;
            signal_dispatcher: ClapperSignalDispatcher;
            signalDispatcher: ClapperSignalDispatcher;
            state: ClapperState;
            subtitle_video_offset: number;
            subtitleVideoOffset: number;
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

    class Clapper extends Gst.Object {
        static $gtype: GObject.GType<Clapper>;

        // Properties

        get audio_video_offset(): number;
        set audio_video_offset(val: number);
        get audioVideoOffset(): number;
        set audioVideoOffset(val: number);
        get current_audio_track(): ClapperAudioInfo;
        get currentAudioTrack(): ClapperAudioInfo;
        get current_subtitle_track(): ClapperSubtitleInfo;
        get currentSubtitleTrack(): ClapperSubtitleInfo;
        get current_video_track(): ClapperVideoInfo;
        get currentVideoTrack(): ClapperVideoInfo;
        get duration(): number;
        get media_info(): ClapperMediaInfo;
        get mediaInfo(): ClapperMediaInfo;
        get mpris(): ClapperMpris;
        get mute(): boolean;
        set mute(val: boolean);
        get pipeline(): Gst.Element;
        get position(): number;
        get rate(): number;
        set rate(val: number);
        get seek_mode(): ClapperSeekMode;
        set seek_mode(val: ClapperSeekMode);
        get seekMode(): ClapperSeekMode;
        set seekMode(val: ClapperSeekMode);
        set signal_dispatcher(val: ClapperSignalDispatcher);
        set signalDispatcher(val: ClapperSignalDispatcher);
        get state(): ClapperState;
        get subtitle_video_offset(): number;
        set subtitle_video_offset(val: number);
        get subtitleVideoOffset(): number;
        set subtitleVideoOffset(val: number);
        get suburi(): string;
        set suburi(val: string);
        get uri(): string;
        set uri(val: string);
        set use_pipewire(val: boolean);
        set usePipewire(val: boolean);
        set use_playbin3(val: boolean);
        set usePlaybin3(val: boolean);
        get video_multiview_flags(): GstVideo.VideoMultiviewFlags;
        set video_multiview_flags(val: GstVideo.VideoMultiviewFlags);
        get videoMultiviewFlags(): GstVideo.VideoMultiviewFlags;
        set videoMultiviewFlags(val: GstVideo.VideoMultiviewFlags);
        get video_multiview_mode(): GstVideo.VideoMultiviewFramePacking;
        set video_multiview_mode(val: GstVideo.VideoMultiviewFramePacking);
        get videoMultiviewMode(): GstVideo.VideoMultiviewFramePacking;
        set videoMultiviewMode(val: GstVideo.VideoMultiviewFramePacking);
        set video_renderer(val: ClapperVideoRenderer);
        set videoRenderer(val: ClapperVideoRenderer);
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

        static ['new'](
            video_renderer?: ClapperVideoRenderer | null,
            signal_dispatcher?: ClapperSignalDispatcher | null,
            mpris?: ClapperMpris | null,
        ): Clapper;

        // Signals

        connect<K extends keyof Clapper.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clapper.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Clapper.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Clapper.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Clapper.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Clapper.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Automatically initializes GStreamer library if this was not done by the user yet
         * and tweaks some of its defaults to our liking. It is recommended to use this
         * function instead of plain gst_init().
         *
         * This also allows usage of GstClapper API alone without importing GStreamer
         * on the implementation side.
         * @param argv pointer to application's argv
         */
        static gst_init(argv?: string[] | null): string[] | null;
        /**
         * Frees a %NULL terminated array of #GstClapperVisualization.
         * @param viss a %NULL terminated array of #GstClapperVisualization to free
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
         * @param type #GstClapperColorBalanceType
         * @returns The current value of @type, between [0,1]. In case of   error -1 is returned.
         */
        get_color_balance(type: ClapperColorBalanceType | null): number;
        /**
         * A Function to get current audio #GstClapperAudioInfo instance.
         * @returns current audio track. The caller should free it with g_object_unref()
         */
        get_current_audio_track(): ClapperAudioInfo;
        /**
         * A Function to get current subtitle #GstClapperSubtitleInfo instance.
         * @returns current subtitle track. The caller should free it with g_object_unref()
         */
        get_current_subtitle_track(): ClapperSubtitleInfo;
        /**
         * A Function to get current video #GstClapperVideoInfo instance.
         * @returns current video track. The caller should free it with g_object_unref()
         */
        get_current_video_track(): ClapperVideoInfo;
        get_current_visualization(): string;
        /**
         * Retrieves the duration of the media stream that self represents.
         * @returns the duration of the currently-playing media stream, in nanoseconds.
         */
        get_duration(): Gst.ClockTime;
        /**
         * A Function to get the current media info #GstClapperMediaInfo instance.
         * @returns media info instance. The caller should free it with g_object_unref()
         */
        get_media_info(): ClapperMediaInfo;
        /**
         * A Function to get the #GstClapperMpris instance.
         * @returns mpris instance. The caller should free it with g_object_unref()
         */
        get_mpris(): ClapperMpris;
        /**
         * Retrieve the current value of the indicated `type`.
         * @returns The current value of @type, Default: 0x00000000 "none
         */
        get_multiview_flags(): GstVideo.VideoMultiviewFlags;
        /**
         * Retrieve the current value of the indicated `type`.
         * @returns The current value of @type, Default: -1 "none"
         */
        get_multiview_mode(): GstVideo.VideoMultiviewFramePacking;
        get_mute(): boolean;
        get_pipeline(): Gst.Element;
        get_position(): Gst.ClockTime;
        get_rate(): number;
        get_seek_mode(): ClapperSeekMode;
        get_state(): ClapperState;
        /**
         * current subtitle URI
         * @returns URI of the current external subtitle.   g_free() after usage.
         */
        get_subtitle_uri(): string;
        /**
         * Retrieve the current value of subtitle-video-offset property
         * @returns The current value of subtitle-video-offset in nanoseconds
         */
        get_subtitle_video_offset(): number;
        /**
         * Gets the URI of the currently-playing stream.
         * @returns a string containing the URI of the currently-playing stream. g_free() after usage.
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
         * @returns Current video snapshot sample or %NULL on failure
         */
        get_video_snapshot(format: ClapperSnapshotFormat | null, config?: Gst.Structure | null): Gst.Sample;
        /**
         * Returns the current volume level, as a percentage between 0 and 1.5
         * @returns the cubic volume as percentage between 0 and 1.5
         */
        get_volume(): number;
        /**
         * Checks whether the `clapper` has color balance support available.
         * @returns %TRUE if @clapper has color balance support. Otherwise,   %FALSE.
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
        set_audio_track(stream_index: number): boolean;
        /**
         * Enable or disable the current audio track.
         * @param enabled TRUE or FALSE
         */
        set_audio_track_enabled(enabled: boolean): void;
        /**
         * Sets audio-video-offset property by value of `offset`
         * @param offset #gint64 in nanoseconds
         */
        set_audio_video_offset(offset: number): void;
        /**
         * Sets the current value of the indicated channel `type` to the passed
         * value.
         * @param type #GstClapperColorBalanceType
         * @param value The new value for the @type, ranged [0,1]
         */
        set_color_balance(type: ClapperColorBalanceType | null, value: number): void;
        /**
         * Sets the current value of the indicated mode `type` to the passed
         * value.
         * @param flags The new value for the @type
         */
        set_multiview_flags(flags: GstVideo.VideoMultiviewFlags | null): void;
        /**
         * Sets the current value of the indicated mode `type` to the passed
         * value.
         * @param mode The new value for the @type
         */
        set_multiview_mode(mode: GstVideo.VideoMultiviewFramePacking | null): void;
        /**
         * %TRUE if the currently-playing stream should be muted.
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
         * @param mode #GstClapperSeekMode
         */
        set_seek_mode(mode: ClapperSeekMode | null): void;
        set_subtitle_track(stream_index: number): boolean;
        /**
         * Enable or disable the current subtitle track.
         * @param enabled TRUE or FALSE
         */
        set_subtitle_track_enabled(enabled: boolean): void;
        /**
         * Sets the external subtitle URI. This should be combined with a call to
         * gst_clapper_set_subtitle_track_enabled(`clapper,` TRUE) so the subtitles are actually
         * rendered.
         * @param uri subtitle URI
         */
        set_subtitle_uri(uri: string): void;
        /**
         * Sets subtitle-video-offset property by value of `offset`
         * @param offset #gint64 in nanoseconds
         */
        set_subtitle_video_offset(offset: number): void;
        /**
         * Sets the next URI to play.
         * @param uri next URI to play.
         */
        set_uri(uri: string): void;
        set_video_track(stream_index: number): boolean;
        /**
         * Enable or disable the current video track.
         * @param enabled TRUE or FALSE
         */
        set_video_track_enabled(enabled: boolean): void;
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
     * #GstClapperStreamInfo specific to audio streams.
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

        connect<K extends keyof ClapperAudioInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClapperAudioInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClapperAudioInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClapperAudioInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClapperAudioInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ClapperAudioInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_bitrate(): number;
        get_channels(): number;
        get_language(): string;
        get_max_bitrate(): number;
        get_sample_rate(): number;
    }

    namespace ClapperGMainContextSignalDispatcher {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::application-context': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, ClapperSignalDispatcher.ConstructorProps {
            application_context: GLib.MainContext;
            applicationContext: GLib.MainContext;
        }
    }

    class ClapperGMainContextSignalDispatcher extends GObject.Object implements ClapperSignalDispatcher {
        static $gtype: GObject.GType<ClapperGMainContextSignalDispatcher>;

        // Properties

        get application_context(): GLib.MainContext;
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

        connect<K extends keyof ClapperGMainContextSignalDispatcher.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClapperGMainContextSignalDispatcher.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClapperGMainContextSignalDispatcher.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClapperGMainContextSignalDispatcher.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClapperGMainContextSignalDispatcher.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ClapperGMainContextSignalDispatcher.SignalSignatures[K]> extends [
                any,
                ...infer Q,
            ]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Creates a new GstClapperSignalDispatcher that uses `application_context,`
         * or the thread default one if %NULL is used. See gst_clapper_new().
         * @param application_context GMainContext to use or %NULL
         */
        static ['new'](application_context?: GLib.MainContext | null): ClapperSignalDispatcher;

        // Inherited methods
        vfunc_dispatch(clapper: Clapper, emitter: ClapperSignalDispatcherFunc): void;
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
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
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
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
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
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
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
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
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
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
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
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
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
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
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
         * @param pspec
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

    namespace ClapperGtk4Plugin {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::video-sink': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            video_sink: Gst.Element;
            videoSink: Gst.Element;
        }
    }

    /**
     * Opaque #GstClapperGtk4Plugin object
     */
    class ClapperGtk4Plugin extends GObject.Object {
        static $gtype: GObject.GType<ClapperGtk4Plugin>;

        // Properties

        get video_sink(): Gst.Element;
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

        static ['new'](): ClapperGtk4Plugin;

        // Signals

        connect<K extends keyof ClapperGtk4Plugin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClapperGtk4Plugin.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClapperGtk4Plugin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClapperGtk4Plugin.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClapperGtk4Plugin.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ClapperGtk4Plugin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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

        connect<K extends keyof ClapperMediaInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClapperMediaInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClapperMediaInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClapperMediaInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClapperMediaInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ClapperMediaInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_audio_streams(): ClapperAudioInfo[];
        get_container_format(): string;
        get_duration(): Gst.ClockTime;
        /**
         * Function to get the image (or preview-image) stored in taglist.
         * Application can use `gst_sample_*_()` API's to get caps, buffer etc.
         * @returns GstSample or NULL.
         */
        get_image_sample(): Gst.Sample;
        get_number_of_audio_streams(): number;
        get_number_of_streams(): number;
        get_number_of_subtitle_streams(): number;
        get_number_of_video_streams(): number;
        get_stream_list(): ClapperStreamInfo[];
        get_subtitle_streams(): ClapperSubtitleInfo[];
        get_tags(): Gst.TagList;
        get_title(): string;
        get_toc(): Gst.Toc;
        get_uri(): string;
        get_video_streams(): ClapperVideoInfo[];
        is_live(): boolean;
        is_seekable(): boolean;
    }

    namespace ClapperMpris {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::default-art-url': (pspec: GObject.ParamSpec) => void;
            'notify::desktop-entry': (pspec: GObject.ParamSpec) => void;
            'notify::id-path': (pspec: GObject.ParamSpec) => void;
            'notify::identity': (pspec: GObject.ParamSpec) => void;
            'notify::own-name': (pspec: GObject.ParamSpec) => void;
            'notify::volume': (pspec: GObject.ParamSpec) => void;
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

    class ClapperMpris extends GObject.Object {
        static $gtype: GObject.GType<ClapperMpris>;

        // Properties

        get default_art_url(): string;
        get defaultArtUrl(): string;
        get desktop_entry(): string;
        get desktopEntry(): string;
        get id_path(): string;
        get idPath(): string;
        get identity(): string;
        get own_name(): string;
        get ownName(): string;
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

        static ['new'](
            own_name: string,
            id_path: string,
            identity?: string | null,
            desktop_entry?: string | null,
            default_art_url?: string | null,
        ): ClapperMpris;

        // Signals

        connect<K extends keyof ClapperMpris.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClapperMpris.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClapperMpris.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClapperMpris.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClapperMpris.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ClapperMpris.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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
     * #GstClapperVideoInfo, #GstClapperAudioInfo, #GstClapperSubtitleInfo.
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

        connect<K extends keyof ClapperStreamInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClapperStreamInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClapperStreamInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClapperStreamInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClapperStreamInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ClapperStreamInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_caps(): Gst.Caps;
        /**
         * A string describing codec used in #GstClapperStreamInfo.
         * @returns codec string or NULL on unknown.
         */
        get_codec(): string;
        /**
         * Function to get stream index from #GstClapperStreamInfo instance.
         * @returns the stream index of this stream.
         */
        get_index(): number;
        /**
         * Function to return human readable name for the stream type
         * of the given `info` (ex: "audio", "video", "subtitle")
         * @returns a human readable name
         */
        get_stream_type(): string;
        get_tags(): Gst.TagList;
    }

    namespace ClapperSubtitleInfo {
        // Signal signatures
        interface SignalSignatures extends ClapperStreamInfo.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ClapperStreamInfo.ConstructorProps {}
    }

    /**
     * #GstClapperStreamInfo specific to subtitle streams.
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

        connect<K extends keyof ClapperSubtitleInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClapperSubtitleInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClapperSubtitleInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClapperSubtitleInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClapperSubtitleInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ClapperSubtitleInfo.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_language(): string;
        get_title(): string;
    }

    namespace ClapperVideoInfo {
        // Signal signatures
        interface SignalSignatures extends ClapperStreamInfo.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ClapperStreamInfo.ConstructorProps {}
    }

    /**
     * #GstClapperStreamInfo specific to video streams.
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

        connect<K extends keyof ClapperVideoInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClapperVideoInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClapperVideoInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClapperVideoInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClapperVideoInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ClapperVideoInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_bitrate(): number;
        get_framerate(): [number, number];
        get_height(): number;
        get_max_bitrate(): number;
        /**
         * Returns the pixel aspect ratio in `par_n` and `par_d`
         */
        get_pixel_aspect_ratio(): [number, number];
        get_width(): number;
    }

    namespace ClapperVideoOverlayVideoRenderer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::video-sink': (pspec: GObject.ParamSpec) => void;
            'notify::window-handle': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, ClapperVideoRenderer.ConstructorProps {
            video_sink: Gst.Element;
            videoSink: Gst.Element;
            window_handle: any;
            windowHandle: any;
        }
    }

    class ClapperVideoOverlayVideoRenderer extends GObject.Object implements ClapperVideoRenderer {
        static $gtype: GObject.GType<ClapperVideoOverlayVideoRenderer>;

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
        $signals: ClapperVideoOverlayVideoRenderer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ClapperVideoOverlayVideoRenderer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ClapperVideoOverlayVideoRenderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClapperVideoOverlayVideoRenderer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClapperVideoOverlayVideoRenderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClapperVideoOverlayVideoRenderer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClapperVideoOverlayVideoRenderer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ClapperVideoOverlayVideoRenderer.SignalSignatures[K]> extends [
                any,
                ...infer Q,
            ]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static ['new'](window_handle?: any | null): ClapperVideoRenderer;
        static new_with_sink(window_handle: any | null, video_sink: Gst.Element): ClapperVideoRenderer;

        // Methods

        /**
         * Tell an overlay that it has been exposed. This will redraw the current frame
         * in the drawable even if the pipeline is PAUSED.
         */
        expose(): void;
        /**
         * Return the currently configured render rectangle. See gst_clapper_video_overlay_video_renderer_set_render_rectangle()
         * for details.
         */
        get_render_rectangle(): [number, number, number, number];
        get_window_handle(): any | null;
        /**
         * Configure a subregion as a video target within the window set by
         * gst_clapper_video_overlay_video_renderer_set_window_handle(). If this is not
         * used or not supported the video will fill the area of the window set as the
         * overlay to 100%. By specifying the rectangle, the video can be overlaid to
         * a specific region of that window only. After setting the new rectangle one
         * should call gst_clapper_video_overlay_video_renderer_expose() to force a
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

        // Inherited methods
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
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
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
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
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
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
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
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
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
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
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
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
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
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
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
         * @param pspec
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

    type ClapperAudioInfoClass = typeof ClapperAudioInfo;
    type ClapperClass = typeof Clapper;
    type ClapperGMainContextSignalDispatcherClass = typeof ClapperGMainContextSignalDispatcher;
    type ClapperGtk4PluginClass = typeof ClapperGtk4Plugin;
    type ClapperMediaInfoClass = typeof ClapperMediaInfo;
    type ClapperMprisClass = typeof ClapperMpris;
    type ClapperSignalDispatcherInterface = typeof ClapperSignalDispatcher;
    type ClapperStreamInfoClass = typeof ClapperStreamInfo;
    type ClapperSubtitleInfoClass = typeof ClapperSubtitleInfo;
    type ClapperVideoInfoClass = typeof ClapperVideoInfo;
    type ClapperVideoOverlayVideoRendererClass = typeof ClapperVideoOverlayVideoRenderer;
    type ClapperVideoRendererInterface = typeof ClapperVideoRenderer;
    /**
     * A #GstClapperVisualization descriptor.
     */
    class ClapperVisualization {
        static $gtype: GObject.GType<ClapperVisualization>;

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
        _init(...args: any[]): void;

        // Methods

        /**
         * Makes a copy of the #GstClapperVisualization. The result must be
         * freed using gst_clapper_visualization_free().
         * @returns an allocated copy of @vis.
         */
        copy(): ClapperVisualization;
        /**
         * Frees a #GstClapperVisualization.
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

            vfunc_dispatch(clapper: Clapper, emitter: ClapperSignalDispatcherFunc): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ClapperSignalDispatcherNamespace {
        $gtype: GObject.GType<ClapperSignalDispatcher>;
        prototype: ClapperSignalDispatcher;
    }
    interface ClapperSignalDispatcher extends GObject.Object, ClapperSignalDispatcher.Interface {}

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
    interface ClapperVideoRenderer extends GObject.Object {}

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
