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
    class PlayError extends GLib.Error {
        // Own fields of GstPlay-1.0.PlayError

        /**
         * generic error.
         */
        FAILED: number;

        // Constructors of GstPlay-1.0.PlayError

        constructor(options: { message: string; code: number });

        // Owm methods of GstPlay-1.0.PlayError

        /**
         * Gets a string representing the given error.
         * @param error a #GstPlayError
         */
        static get_name(error: PlayError): string;
        static quark(): GLib.Quark;
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
    function play_color_balance_type_get_name(type: PlayColorBalanceType): string;
    /**
     * Gets a string representing the given error.
     * @param error a #GstPlayError
     * @returns a string with the given error.
     */
    function play_error_get_name(error: PlayError): string;
    function play_error_quark(): GLib.Quark;
    function play_message_get_name(message_type: PlayMessage): string;
    /**
     * Parse the given buffering-percent `msg` and extract the corresponding value
     * @param msg A #GstMessage
     */
    function play_message_parse_buffering_percent(msg: Gst.Message): void;
    /**
     * Parse the given duration `msg` and extract the corresponding #GstClockTime
     * @param msg A #GstMessage
     */
    function play_message_parse_duration_updated(msg: Gst.Message): void;
    /**
     * Parse the given error `msg` and extract the corresponding #GError
     * @param msg A #GstMessage
     */
    function play_message_parse_error(msg: Gst.Message): void;
    /**
     * Parse the given `msg` and extract the corresponding media information
     * @param msg A #GstMessage
     */
    function play_message_parse_media_info_updated(msg: Gst.Message): void;
    /**
     * Parse the given `msg` and extract the corresponding audio muted state
     * @param msg A #GstMessage
     */
    function play_message_parse_muted_changed(msg: Gst.Message): void;
    /**
     * Parse the given position `msg` and extract the corresponding #GstClockTime
     * @param msg A #GstMessage
     */
    function play_message_parse_position_updated(msg: Gst.Message): void;
    /**
     * Parse the given state `msg` and extract the corresponding #GstPlayState
     * @param msg A #GstMessage
     */
    function play_message_parse_state_changed(msg: Gst.Message): void;
    /**
     * Parse the given `msg` and extract its #GstPlayMessage type.
     * @param msg A #GstMessage
     */
    function play_message_parse_type(msg: Gst.Message): void;
    /**
     * Parse the given `msg` and extract the corresponding video dimensions
     * @param msg A #GstMessage
     */
    function play_message_parse_video_dimensions_changed(msg: Gst.Message): void;
    /**
     * Parse the given `msg` and extract the corresponding audio volume
     * @param msg A #GstMessage
     */
    function play_message_parse_volume_changed(msg: Gst.Message): void;
    /**
     * Parse the given error `msg` and extract the corresponding #GError warning
     * @param msg A #GstMessage
     */
    function play_message_parse_warning(msg: Gst.Message): void;
    /**
     * Gets a string representing the given state.
     * @param state a #GstPlayState
     * @returns a string with the name of the state.
     */
    function play_state_get_name(state: PlayState): string;
    module Play {
        // Constructor properties interface
    }

    class Play extends Gst.Object {
        // Own properties of GstPlay-1.0.Play

        audio_video_offset: number;
        audioVideoOffset: number;
        readonly current_audio_track: PlayAudioInfo;
        readonly currentAudioTrack: PlayAudioInfo;
        readonly current_subtitle_track: PlaySubtitleInfo;
        readonly currentSubtitleTrack: PlaySubtitleInfo;
        readonly current_video_track: PlayVideoInfo;
        readonly currentVideoTrack: PlayVideoInfo;
        readonly duration: number;
        readonly media_info: PlayMediaInfo;
        readonly mediaInfo: PlayMediaInfo;
        mute: boolean;
        readonly pipeline: Gst.Element;
        readonly position: number;
        rate: number;
        subtitle_video_offset: number;
        subtitleVideoOffset: number;
        suburi: string;
        uri: string;
        video_multiview_flags: GstVideo.VideoMultiviewFlags;
        videoMultiviewFlags: GstVideo.VideoMultiviewFlags;
        video_multiview_mode: GstVideo.VideoMultiviewFramePacking;
        videoMultiviewMode: GstVideo.VideoMultiviewFramePacking;
        video_renderer: PlayVideoRenderer;
        videoRenderer: PlayVideoRenderer;
        volume: number;

        // Constructors of GstPlay-1.0.Play

        static ['new'](video_renderer?: PlayVideoRenderer | null): Play;

        // Owm methods of GstPlay-1.0.Play

        static config_get_position_update_interval(config: Gst.Structure): number;
        static config_get_seek_accurate(config: Gst.Structure): boolean;
        /**
         * Return the user agent which has been configured using
         * gst_play_config_set_user_agent() if any.
         * @param config a #GstPlay configuration
         */
        static config_get_user_agent(config: Gst.Structure): string | null;
        /**
         * set desired interval in milliseconds between two position-updated messages.
         * pass 0 to stop updating the position.
         * @param config a #GstPlay configuration
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
         * @param config a #GstPlay configuration
         * @param accurate accurate seek or not
         */
        static config_set_seek_accurate(config: Gst.Structure, accurate: boolean): void;
        /**
         * Set the user agent to pass to the server if `play` needs to connect
         * to a server during playback. This is typically used when playing HTTP
         * or RTSP streams.
         * @param config a #GstPlay configuration
         * @param agent the string to use as user agent
         */
        static config_set_user_agent(config: Gst.Structure, agent?: string | null): void;
        static get_audio_streams(info: PlayMediaInfo): PlayAudioInfo[];
        static get_subtitle_streams(info: PlayMediaInfo): PlaySubtitleInfo[];
        static get_video_streams(info: PlayMediaInfo): PlayVideoInfo[];
        static is_play_message(msg: Gst.Message): boolean;
        /**
         * Frees a %NULL terminated array of #GstPlayVisualization.
         * @param viss a %NULL terminated array of #GstPlayVisualization to free
         */
        static visualizations_free(viss: PlayVisualization): void;
        static visualizations_get(): PlayVisualization[];

        // Owm methods of GstPlay-1.0.Play

        /**
         * Retrieve the current value of audio-video-offset property
         * @returns The current value of audio-video-offset in nanoseconds
         */
        get_audio_video_offset(): number;
        /**
         * Retrieve the current value of the indicated `type`.
         * @param type #GstPlayColorBalanceType
         * @returns The current value of @type, between [0,1]. In case of   error -1 is returned.
         */
        get_color_balance(type: PlayColorBalanceType): number;
        /**
         * Get a copy of the current configuration of the play. This configuration
         * can either be modified and used for the gst_play_set_config() call
         * or it must be freed after usage.
         * @returns a copy of the current configuration of @play. Use gst_structure_free() after usage or gst_play_set_config().
         */
        get_config(): Gst.Structure;
        /**
         * A Function to get current audio #GstPlayAudioInfo instance.
         * @returns current audio track. The caller should free it with g_object_unref()
         */
        get_current_audio_track(): PlayAudioInfo | null;
        /**
         * A Function to get current subtitle #GstPlaySubtitleInfo instance.
         * @returns current subtitle track. The caller should free it with g_object_unref()
         */
        get_current_subtitle_track(): PlaySubtitleInfo | null;
        /**
         * A Function to get current video #GstPlayVideoInfo instance.
         * @returns current video track. The caller should free it with g_object_unref()
         */
        get_current_video_track(): PlayVideoInfo | null;
        get_current_visualization(): string | null;
        /**
         * Retrieves the duration of the media stream that self represents.
         * @returns the duration of the currently-playing media stream, in nanoseconds.
         */
        get_duration(): Gst.ClockTime;
        /**
         * A Function to get the current media info #GstPlayMediaInfo instance.
         * @returns media info instance. The caller should free it with g_object_unref()
         */
        get_media_info(): PlayMediaInfo | null;
        /**
         * GstPlay API exposes a #GstBus instance which purpose is to provide data
         * structures representing play-internal events in form of #GstMessage&lt;!-- --&gt;s of
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
        get_message_bus(): Gst.Bus;
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
        /**
         * current subtitle URI
         * @returns URI of the current external subtitle.   g_free() after usage.
         */
        get_subtitle_uri(): string | null;
        /**
         * Retrieve the current value of subtitle-video-offset property
         * @returns The current value of subtitle-video-offset in nanoseconds
         */
        get_subtitle_video_offset(): number;
        /**
         * Gets the URI of the currently-playing stream.
         * @returns a string containing the URI of the currently-playing stream. g_free() after usage.
         */
        get_uri(): string | null;
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
        get_video_snapshot(format: PlaySnapshotFormat, config?: Gst.Structure | null): Gst.Sample | null;
        /**
         * Returns the current volume level, as a percentage between 0 and 1.
         * @returns the volume as percentage between 0 and 1.
         */
        get_volume(): number;
        /**
         * Checks whether the `play` has color balance support available.
         * @returns %TRUE if @play has color balance support. Otherwise,   %FALSE.
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
         * @param type #GstPlayColorBalanceType
         * @param value The new value for the @type, ranged [0,1]
         */
        set_color_balance(type: PlayColorBalanceType, value: number): void;
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
        set_config(config: Gst.Structure): boolean;
        /**
         * Sets the current value of the indicated mode `type` to the passed
         * value.
         * @param flags The new value for the @type
         */
        set_multiview_flags(flags: GstVideo.VideoMultiviewFlags): void;
        /**
         * Sets the current value of the indicated mode `type` to the passed
         * value.
         * @param mode The new value for the @type
         */
        set_multiview_mode(mode: GstVideo.VideoMultiviewFramePacking): void;
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
        set_subtitle_track(stream_index: number): boolean;
        /**
         * Enable or disable the current subtitle track.
         * @param enabled TRUE or FALSE
         */
        set_subtitle_track_enabled(enabled: boolean): void;
        /**
         * Sets the external subtitle URI. This should be combined with a call to
         * gst_play_set_subtitle_track_enabled(`play,` TRUE) so the subtitles are actually
         * rendered.
         * @param uri subtitle URI
         */
        set_subtitle_uri(uri?: string | null): void;
        /**
         * Sets subtitle-video-offset property by value of `offset`
         * @param offset #gint64 in nanoseconds
         */
        set_subtitle_video_offset(offset: number): void;
        /**
         * Sets the next URI to play.
         * @param uri next URI to play.
         */
        set_uri(uri?: string | null): void;
        set_video_track(stream_index: number): boolean;
        /**
         * Enable or disable the current video track.
         * @param enabled TRUE or FALSE
         */
        set_video_track_enabled(enabled: boolean): void;
        set_visualization(name?: string | null): boolean;
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

    module PlayAudioInfo {
        // Constructor properties interface
    }

    /**
     * #GstPlayStreamInfo specific to audio streams.
     */
    class PlayAudioInfo extends PlayStreamInfo {
        // Owm methods of GstPlay-1.0.PlayAudioInfo

        get_bitrate(): number;
        get_channels(): number;
        get_language(): string | null;
        get_max_bitrate(): number;
        get_sample_rate(): number;
    }

    module PlayMediaInfo {
        // Constructor properties interface
    }

    /**
     * Structure containing the media information of a URI.
     */
    class PlayMediaInfo extends GObject.Object {
        // Owm methods of GstPlay-1.0.PlayMediaInfo

        get_audio_streams(): PlayAudioInfo[];
        get_container_format(): string | null;
        get_duration(): Gst.ClockTime;
        /**
         * Function to get the image (or preview-image) stored in taglist.
         * Application can use `gst_sample_*_()` API's to get caps, buffer etc.
         * @returns GstSample or %NULL.
         */
        get_image_sample(): Gst.Sample | null;
        get_number_of_audio_streams(): number;
        get_number_of_streams(): number;
        get_number_of_subtitle_streams(): number;
        get_number_of_video_streams(): number;
        get_stream_list(): PlayStreamInfo[];
        get_subtitle_streams(): PlaySubtitleInfo[];
        get_tags(): Gst.TagList | null;
        get_title(): string | null;
        get_uri(): string;
        get_video_streams(): PlayVideoInfo[];
        is_live(): boolean;
        is_seekable(): boolean;
    }

    module PlaySignalAdapter {
        // Signal callback interfaces

        interface Buffering {
            (object: number): void;
        }

        interface DurationChanged {
            (object: number): void;
        }

        interface EndOfStream {
            (): void;
        }

        interface Error {
            (error: GLib.Error, details?: Gst.Structure | null): void;
        }

        interface MediaInfoUpdated {
            (object: PlayMediaInfo): void;
        }

        interface MuteChanged {
            (object: boolean): void;
        }

        interface PositionUpdated {
            (object: number): void;
        }

        interface SeekDone {
            (object: number): void;
        }

        interface StateChanged {
            (object: PlayState): void;
        }

        interface UriLoaded {
            (object: string): void;
        }

        interface VideoDimensionsChanged {
            (object: number, p0: number): void;
        }

        interface VolumeChanged {
            (object: number): void;
        }

        interface Warning {
            (error: GLib.Error, details?: Gst.Structure | null): void;
        }

        // Constructor properties interface
    }

    class PlaySignalAdapter extends GObject.Object {
        // Own properties of GstPlay-1.0.PlaySignalAdapter

        readonly play: Play;

        // Constructors of GstPlay-1.0.PlaySignalAdapter

        static ['new'](play: Play): PlaySignalAdapter;

        static new_sync_emit(play: Play): PlaySignalAdapter;

        static new_with_main_context(play: Play, context: GLib.MainContext): PlaySignalAdapter;

        // Owm methods of GstPlay-1.0.PlaySignalAdapter

        get_play(): Play;
    }

    module PlayStreamInfo {
        // Constructor properties interface
    }

    /**
     * Base structure for information concerning a media stream. Depending on
     * the stream type, one can find more media-specific information in
     * #GstPlayVideoInfo, #GstPlayAudioInfo, #GstPlaySubtitleInfo.
     */
    abstract class PlayStreamInfo extends GObject.Object {
        // Owm methods of GstPlay-1.0.PlayStreamInfo

        get_caps(): Gst.Caps | null;
        /**
         * A string describing codec used in #GstPlayStreamInfo.
         * @returns codec string or %NULL on unknown.
         */
        get_codec(): string | null;
        /**
         * Function to get stream index from #GstPlayStreamInfo instance or -1 if
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
        get_tags(): Gst.TagList | null;
    }

    module PlaySubtitleInfo {
        // Constructor properties interface
    }

    /**
     * #GstPlayStreamInfo specific to subtitle streams.
     */
    class PlaySubtitleInfo extends PlayStreamInfo {
        // Owm methods of GstPlay-1.0.PlaySubtitleInfo

        get_language(): string | null;
    }

    module PlayVideoInfo {
        // Constructor properties interface
    }

    /**
     * #GstPlayStreamInfo specific to video streams.
     */
    class PlayVideoInfo extends PlayStreamInfo {
        // Owm methods of GstPlay-1.0.PlayVideoInfo

        get_bitrate(): number;
        get_framerate(): void;
        get_height(): number;
        get_max_bitrate(): number;
        /**
         * Returns the pixel aspect ratio in `par_n` and `par_d`
         */
        get_pixel_aspect_ratio(): void;
        get_width(): number;
    }

    module PlayVideoOverlayVideoRenderer {
        // Constructor properties interface
    }

    class PlayVideoOverlayVideoRenderer extends GObject.Object {
        // Own properties of GstPlay-1.0.PlayVideoOverlayVideoRenderer

        video_sink: Gst.Element;
        videoSink: Gst.Element;
        window_handle: any;
        windowHandle: any;

        // Owm methods of GstPlay-1.0.PlayVideoOverlayVideoRenderer

        static new(window_handle?: any | null): PlayVideoRenderer;
        static new_with_sink(window_handle: any | null, video_sink: Gst.Element): PlayVideoRenderer;

        // Owm methods of GstPlay-1.0.PlayVideoOverlayVideoRenderer

        /**
         * Tell an overlay that it has been exposed. This will redraw the current frame
         * in the drawable even if the pipeline is PAUSED.
         */
        expose(): void;
        /**
         * Return the currently configured render rectangle. See gst_play_video_overlay_video_renderer_set_render_rectangle()
         * for details.
         */
        get_render_rectangle(): void;
        get_window_handle(): any | null;
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
        set_render_rectangle(x: number, y: number, width: number, height: number): void;
        /**
         * Sets the platform specific window handle into which the video
         * should be rendered
         * @param window_handle handle referencing to the platform specific window
         */
        set_window_handle(window_handle?: any | null): void;
    }

    class PlayAudioInfoClass {}

    class PlayClass {}

    class PlayMediaInfoClass {}

    class PlaySignalAdapterClass {}

    class PlayStreamInfoClass {}

    class PlaySubtitleInfoClass {}

    class PlayVideoInfoClass {}

    class PlayVideoOverlayVideoRendererClass {}

    class PlayVideoRendererInterface {}

    /**
     * A #GstPlayVisualization descriptor.
     */
    class PlayVisualization {
        // Own fields of GstPlay-1.0.PlayVisualization

        name: string;
        description: string;

        // Constructors of GstPlay-1.0.PlayVisualization

        constructor(
            properties?: Partial<{
                name: string;
                description: string;
            }>,
        );

        // Owm methods of GstPlay-1.0.PlayVisualization

        /**
         * Makes a copy of the #GstPlayVisualization. The result must be
         * freed using gst_play_visualization_free().
         * @returns an allocated copy of @vis.
         */
        copy(): PlayVisualization;
        /**
         * Frees a #GstPlayVisualization.
         */
        free(): void;
    }

    interface PlayVideoRenderer {}

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
