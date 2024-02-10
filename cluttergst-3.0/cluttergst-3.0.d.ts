/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './cluttergst-3.0-ambient.d.ts';
import './cluttergst-3.0-import.d.ts';
/**
 * ClutterGst-3.0
 */

import type GstVideo from '@girs/gstvideo-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GstPbutils from '@girs/gstpbutils-1.0';
import type GstAudio from '@girs/gstaudio-1.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Gio from '@girs/gio-2.0';
import type Cogl from '@girs/cogl-1.0';
import type GL from '@girs/gl-1.0';
import type Clutter from '@girs/clutter-1.0';
import type cairo from '@girs/cairo-1.0';
import type Json from '@girs/json-1.0';
import type CoglPango from '@girs/coglpango-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Atk from '@girs/atk-1.0';

export namespace ClutterGst {
    /**
     * Different buffering policies clutter-gst supports
     */
    enum BufferingMode {
        /**
         * In-memory buffering
         */
        STREAM,
        /**
         * On-disk buffering
         */
        DOWNLOAD,
    }
    /**
     * ClutterGst major version (e.g. "1", if %CLUTTER_GST_VERSION is "1.2.3")
     */
    const MAJOR_VERSION: number;
    /**
     * ClutterGst micro version (e.g. "3", if %CLUTTER_GST_VERSION is "1.2.3")
     */
    const MICRO_VERSION: number;
    /**
     * ClutterGst minor version (e.g. "2", if %CLUTTER_GST_VERSION is "1.2.3")
     */
    const MINOR_VERSION: number;
    /**
     * ClutterGst full version (e.g. "1.2.3")
     */
    const VERSION: number;
    /**
     * ClutterGst full version, encoded as an hexadecimal value.
     */
    const VERSION_HEX: number;
    /**
     * ClutterGst full version, encoded as a string.
     */
    const VERSION_S: string;
    /**
     * Creates a new #ClutterGstVideoSink initialized with Clutter's Cogl context.
     * @returns the newly created #ClutterGstVideoSink.
     */
    function create_video_sink(): Gst.Element;
    /**
     * Utility function to initialize both Clutter and GStreamer.
     *
     * This function should be called before calling any other GLib functions. If
     * this is not an option, your program must initialise the GLib thread system
     * using g_thread_init() before any other GLib functions are called.
     * @param argv A pointer to an array
     * @returns A #ClutterInitError.
     */
    function init(argv?: string[] | null): Clutter.InitError;
    /**
     * This function does the same work as clutter_gst_init(). Additionally, it
     * allows you to add your own command line options, and it automatically
     * generates nicely formatted --help output. Clutter's and GStreamer's
     * #GOptionGroup&lt;!-- --&gt;s are added to the set of available options.
     *
     * Your program must initialise the GLib thread system using g_thread_init()
     * before any other GLib functions are called.
     * @param argv A pointer to an array
     * @param parameter_string a string which is displayed in    the first line of &lt;option&gt;--help&lt;/option&gt; output, after    &lt;literal&gt;&lt;replaceable&gt;programname&lt;/replaceable&gt; [OPTION...]&lt;/literal&gt;
     * @param entries a %NULL-terminated array of #GOptionEntry&lt;!-- --&gt;s    describing the options of your program
     * @param translation_domain a translation domain to use for translating    the &lt;option&gt;--help&lt;/option&gt; output for the options in @entries    with gettext(), or %NULL
     * @returns %CLUTTER_INIT_SUCCESS on success, a negative integer   on failure.
     */
    function init_with_args(
        argv: string[] | null,
        parameter_string: string,
        entries: GLib.OptionEntry,
        translation_domain: string,
    ): Clutter.InitError;
    /**
     * Flags that can be given to clutter_gst_player_set_seek_flags().
     */
    enum SeekFlags {
        /**
         * Fast seeks (key frame boundaries, default)
         */
        NONE,
        /**
         * Accurate seeks (potentially slower)
         */
        ACCURATE,
    }
    module Aspectratio {
        // Constructor properties interface
    }

    /**
     * Implementation of #ClutterGstContent that displays video streams
     * with respects to their aspect ratio.
     *
     * The #ClutterGstAspectratio structure contains only private data and
     * should not be accessed directly.
     */
    class Aspectratio extends Content {
        // Own properties of ClutterGst-3.0.Aspectratio

        /**
         * Whether the content should fill its allocation with video rather
         * than adding borders.
         */
        fill_allocation: boolean;
        /**
         * Whether the content should fill its allocation with video rather
         * than adding borders.
         */
        fillAllocation: boolean;
        /**
         * Whether or not paint borders on the sides of the video
         */
        paint_borders: boolean;
        /**
         * Whether or not paint borders on the sides of the video
         */
        paintBorders: boolean;

        // Owm methods of ClutterGst-3.0.Aspectratio

        static new(): Clutter.Content;
    }

    module Camera {
        // Signal callback interfaces

        interface PhotoSaved {
            (): void;
        }

        interface PhotoTaken {
            (pixbuf: GdkPixbuf.Pixbuf): void;
        }

        interface ReadyForCapture {
            (ready: boolean): void;
        }

        interface VideoSaved {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * Implementation of #ClutterGstPlayer that displays camera streams
     * using GStreamer.
     *
     * The #ClutterGstCamera structure contains only private data and
     * should not be accessed directly.
     */
    class Camera extends GObject.Object {
        // Own properties of ClutterGst-3.0.Camera

        device: CameraDevice;

        // Constructors of ClutterGst-3.0.Camera

        static ['new'](): Camera;

        // Owm methods of ClutterGst-3.0.Camera

        get_brightness(cur_value: number): boolean;
        get_brightness_range(min_value: number, max_value: number, default_value: number): boolean;
        /**
         * Retrieve the current selected camera device.
         * @returns The currently selected camera device
         */
        get_camera_device(): CameraDevice;
        /**
         * Retrieve the current value for the color balance property `property,`
         *
         * This method will return FALSE if `property` does not exist or color balance is not
         * supported on `self`.
         * See clutter_gst_camera_supports_color_balance().
         * @param property Property name
         * @param cur_value Pointer to store the current value of @property
         * @returns %TRUE if successful, %FALSE otherwise
         */
        get_color_balance_property(property: string, cur_value: number): boolean;
        /**
         * Retrieve the minimum, maximum and default values for the color balance property `property,`
         *
         * This method will return FALSE if `property` does not exist or color balance is not
         * supported on `self`.
         * See clutter_gst_camera_supports_color_balance().
         * @param property Property name
         * @param min_value Pointer to store the minimum value of @property, or %NULL
         * @param max_value Pointer to store the maximum value of @property, or %NULL
         * @param default_value Pointer to store the default value of @property, or %NULL
         * @returns %TRUE if successful, %FALSE otherwise
         */
        get_color_balance_property_range(
            property: string,
            min_value: number,
            max_value: number,
            default_value: number,
        ): boolean;
        get_contrast(cur_value: number): boolean;
        get_contrast_range(min_value: number, max_value: number, default_value: number): boolean;
        /**
         * Retrieve the current filter being used.
         * @returns The current filter or %NULL if none is set
         */
        get_filter(): Gst.Element;
        /**
         * Retrieve the current gamma value.
         *
         * This method will return FALSE if gamma correction is not
         * supported on `self`.
         * See clutter_gst_camera_supports_gamma_correction().
         * @param cur_value Pointer to store the current gamma value
         * @returns %TRUE if successful, %FALSE otherwise
         */
        get_gamma(cur_value: number): boolean;
        /**
         * Retrieve the minimum, maximum and default gamma values.
         *
         * This method will return FALSE if gamma correction is not
         * supported on `self`.
         * See clutter_gst_camera_supports_gamma_correction().
         * @param min_value Pointer to store the minimum gamma value, or %NULL
         * @param max_value Pointer to store the maximum gamma value, or %NULL
         * @param default_value Pointer to store the default gamma value, or %NULL
         * @returns %TRUE if successful, %FALSE otherwise
         */
        get_gamma_range(min_value: number, max_value: number, default_value: number): boolean;
        get_hue(cur_value: number): boolean;
        get_hue_range(min_value: number, max_value: number, default_value: number): boolean;
        get_saturation(cur_value: number): boolean;
        get_saturation_range(min_value: number, max_value: number, default_value: number): boolean;
        /**
         * Check whether the `self` is ready for video/photo capture.
         * @returns %TRUE if @self is ready for capture, %FALSE otherwise
         */
        is_ready_for_capture(): boolean;
        /**
         * Check whether the `self` is recording video.
         * @returns %TRUE if @self is recording video, %FALSE otherwise
         */
        is_recording_video(): boolean;
        /**
         * Remove the current filter, if any.
         * @returns %TRUE on success, %FALSE otherwise
         */
        remove_filter(): boolean;
        set_brightness(value: number): boolean;
        /**
         * Set the new active camera device.
         * @param device a #ClutterGstCameraDevice
         * @returns %TRUE on success, %FALSE otherwise
         */
        set_camera_device(device: CameraDevice): boolean;
        /**
         * Set the value for the color balance property `property` to `value`.
         * Allowed values can be retrieved with
         * clutter_gst_camera_get_color_balance_property_range().
         *
         * This method will return FALSE if `property` does not exist or color balance is not
         * supported on `self`.
         * See clutter_gst_camera_supports_color_balance().
         * @param property Property name
         * @param value The value to set
         * @returns %TRUE if successful, %FALSE otherwise
         */
        set_color_balance_property(property: string, value: number): boolean;
        set_contrast(value: number): boolean;
        /**
         * Set the filter element to be used.
         * Filters can be used for effects, image processing, etc.
         * @param filter a #GstElement for the filter
         * @returns %TRUE on success, %FALSE otherwise
         */
        set_filter(filter: Gst.Element): boolean;
        /**
         * Set the gamma value.
         * Allowed values can be retrieved with
         * clutter_gst_camera_get_gamma_range().
         *
         * This method will return FALSE if gamma correction is not
         * supported on `self`.
         * See clutter_gst_camera_supports_gamma_correction().
         * @param value The value to set
         * @returns %TRUE if successful, %FALSE otherwise
         */
        set_gamma(value: number): boolean;
        set_hue(value: number): boolean;
        /**
         * Set the encoding profile to be used for photo captures.
         * The default profile saves photos as JPEG images.
         * @param profile A #GstEncodingProfile to be used for photo captures.
         */
        set_photo_profile(profile: GstPbutils.EncodingProfile): void;
        set_saturation(value: number): boolean;
        /**
         * Set the encoding profile to be used for video recording.
         * The default profile saves videos as Ogg/Theora videos.
         * @param profile A #GstEncodingProfile to be used for video recording.
         */
        set_video_profile(profile: GstPbutils.EncodingProfile): void;
        /**
         * Start a video recording with the `self` and save it to `filename`.
         * This method requires that `self` is playing and ready for capture.
         *
         * The ::video-saved signal will be emitted when the video is saved.
         * @param filename the name of the video file to where the recording will be saved
         * @returns %TRUE if the video recording was successfully started, %FALSE otherwise
         */
        start_video_recording(filename: string): boolean;
        /**
         * Stop recording video on the `self`.
         */
        stop_video_recording(): void;
        /**
         * Check whether the `self` supports color balance.
         * @returns %TRUE if @self supports color balance, %FALSE otherwise
         */
        supports_color_balance(): boolean;
        /**
         * Check whether the `self` supports gamma correction.
         * @returns %TRUE if @self supports gamma correction, %FALSE otherwise
         */
        supports_gamma_correction(): boolean;
        /**
         * Take a photo with the `self` and save it to `filename`.
         * This method requires that `self` is playing and ready for capture.
         *
         * The ::photo-saved signal will be emitted when the video is saved.
         * @param filename the name of the file to where the photo will be saved
         * @returns %TRUE if the photo was successfully captured, %FALSE otherwise
         */
        take_photo(filename: string): boolean;
        /**
         * Take a photo with the `self` and emit it in the ::photo-taken signal as a
         * #GdkPixbuf.
         * This method requires that `self` is playing and ready for capture.
         * @returns %TRUE if the photo was successfully captured, %FALSE otherwise
         */
        take_photo_pixbuf(): boolean;
    }

    module CameraDevice {
        // Signal callback interfaces

        interface CaptureResolutionChanged {
            (width: number, height: number): void;
        }

        // Constructor properties interface
    }

    /**
     * GObject representing a camera device using GStreamer.
     *
     * The #ClutterGstCameraDevice structure contains only private data and
     * should not be accessed directly.
     */
    class CameraDevice extends GObject.Object {
        // Own properties of ClutterGst-3.0.CameraDevice

        /**
         * The GstElementFactory for this device.
         */
        element_factory: Gst.ElementFactory;
        /**
         * The GstElementFactory for this device.
         */
        elementFactory: Gst.ElementFactory;
        /**
         * The device name.
         */
        name: string;
        /**
         * The device node.
         */
        node: string;

        // Owm methods of ClutterGst-3.0.CameraDevice

        /**
         * Retrieve the current capture resolution being used by `device`.
         */
        get_capture_resolution(): void;
        /**
         * Retrieve the name of the `device`.
         * @returns the device name.
         */
        get_name(): string;
        /**
         * Retrieve the node (location) of the `device`.
         * @returns the device node.
         */
        get_node(): string;
        /**
         * Retrieve the supported resolutions of the `device`.
         * @returns an array of #ClutterGstVideoResolution with the                                supported resolutions.
         */
        get_supported_resolutions(): VideoResolution[];
        /**
         * Set the capture resolution to be used by `device`.
         * @param width The new capture resolution width to use
         * @param height The new capture resolution height to use
         */
        set_capture_resolution(width: number, height: number): void;
    }

    module CameraManager {
        // Signal callback interfaces

        interface CameraAdded {
            (camera_device: CameraDevice): void;
        }

        interface CameraRemoved {
            (camera_device: CameraDevice): void;
        }

        // Constructor properties interface
    }

    /**
     * An object to list available cameras on the system.
     *
     * The #ClutterGstCameraManager structure contains only private data and
     * should not be accessed directly.
     */
    class CameraManager extends GObject.Object {
        // Owm methods of ClutterGst-3.0.CameraManager

        /**
         * Get the camera manager.
         *
         * &lt;note&gt;This function has to be called from Clutter's main
         * thread.&lt;/note&gt;
         */
        static get_default(): CameraManager;

        // Owm methods of ClutterGst-3.0.CameraManager

        /**
         * Retrieve an array of supported camera devices.
         * @returns An array of #ClutterGstCameraDevice representing                                the supported camera devices
         */
        get_camera_devices(): CameraDevice[];
    }

    module Content {
        // Signal callback interfaces

        interface SizeChange {
            (width: number, height: number): void;
        }

        // Constructor properties interface
    }

    /**
     * The #ClutterGstContent structure contains only private data
     * and should be accessed using the provided API
     */
    class Content extends GObject.Object {
        // Own properties of ClutterGst-3.0.Content

        frame: Frame;
        paint_frame: boolean;
        paintFrame: boolean;
        paint_overlays: boolean;
        paintOverlays: boolean;
        player: GObject.Object;
        sink: VideoSink;

        // Owm methods of ClutterGst-3.0.Content

        static new(): Clutter.Content;
        static new_with_sink(sink: VideoSink): Clutter.Content;

        // Owm methods of ClutterGst-3.0.Content

        get_frame(): Frame;
        get_overlays(): Overlays;
        get_player(): Player;
        get_sink(): VideoSink;
        /**
         * Set the current frame.
         * @param frame A #ClutterGstFrame
         */
        set_frame(frame: Frame): void;
        set_player(player: Player): void;
        set_sink(sink: VideoSink): void;
    }

    module Crop {
        // Constructor properties interface
    }

    /**
     * Implementation of #ClutterGstContent that displays a sub region of
     * video streams.
     *
     * The #ClutterGstCrop structure contains only private data and
     * should not be accessed directly.
     */
    class Crop extends Content {
        // Own properties of ClutterGst-3.0.Crop

        /**
         * Whether to cull the backface of the actor
         */
        cull_backface: boolean;
        /**
         * Whether to cull the backface of the actor
         */
        cullBackface: boolean;
        /**
         * Input region in the video frame (all values between 0 and 1).
         */
        input_region: Box;
        /**
         * Input region in the video frame (all values between 0 and 1).
         */
        inputRegion: Box;
        /**
         * Output region in the actor's allocation (all values between 0 and 1).
         */
        output_region: Box;
        /**
         * Output region in the actor's allocation (all values between 0 and 1).
         */
        outputRegion: Box;
        /**
         * Whether or not paint borders on the sides of the video
         */
        paint_borders: boolean;
        /**
         * Whether or not paint borders on the sides of the video
         */
        paintBorders: boolean;

        // Constructors of ClutterGst-3.0.Crop

        static ['new'](): Crop;
    }

    module Playback {
        // Signal callback interfaces

        interface ShouldBuffer {
            (query: Gst.Query): boolean;
        }

        // Constructor properties interface
    }

    /**
     * Implementation of #ClutterGstPlayback that displays media streams
     * using GStreamer.
     *
     * The #ClutterGstPlayback structure contains only private data and
     * should not be accessed directly.
     */
    class Playback extends GObject.Object {
        // Own properties of ClutterGst-3.0.Playback

        /**
         * Index of the current audio stream.
         */
        audio_stream: number;
        /**
         * Index of the current audio stream.
         */
        audioStream: number;
        /**
         * List of audio streams available on the current media.
         */
        readonly audio_streams: any;
        /**
         * List of audio streams available on the current media.
         */
        readonly audioStreams: any;
        /**
         * The fill level of the buffer for the current stream,
         * as a value between 0.0 and 1.0.
         */
        readonly buffer_fill: number;
        /**
         * The fill level of the buffer for the current stream,
         * as a value between 0.0 and 1.0.
         */
        readonly bufferFill: number;
        /**
         * Whether the current stream is seekable.
         */
        readonly can_seek: boolean;
        /**
         * Whether the current stream is seekable.
         */
        readonly canSeek: boolean;
        /**
         * The duration of the current stream, in seconds
         */
        readonly duration: number;
        /**
         * Whether or not the stream is being seeked.
         */
        readonly in_seek: boolean;
        /**
         * Whether or not the stream is being seeked.
         */
        readonly inSeek: boolean;
        /**
         * The current progress of the playback, as a normalized
         * value between 0.0 and 1.0.
         */
        progress: number;
        /**
         * Flags to use when seeking.
         */
        seek_flags: SeekFlags;
        /**
         * Flags to use when seeking.
         */
        seekFlags: SeekFlags;
        /**
         * The font used to display subtitles. The font description has to
         * follow the same grammar as the one recognized by
         * pango_font_description_from_string().
         */
        subtitle_font_name: string;
        /**
         * The font used to display subtitles. The font description has to
         * follow the same grammar as the one recognized by
         * pango_font_description_from_string().
         */
        subtitleFontName: string;
        /**
         * Current subtitle track being displayed.
         */
        subtitle_track: number;
        /**
         * Current subtitle track being displayed.
         */
        subtitleTrack: number;
        /**
         * List of subtitle tracks available.
         */
        readonly subtitle_tracks: any;
        /**
         * List of subtitle tracks available.
         */
        readonly subtitleTracks: any;
        /**
         * The location of a subtitle file, expressed as a valid URI.
         */
        subtitle_uri: string;
        /**
         * The location of a subtitle file, expressed as a valid URI.
         */
        subtitleUri: string;
        /**
         * The location of a media file, expressed as a valid URI.
         */
        uri: string;
        /**
         * The User Agent used by #ClutterGstPlayback with network protocols.
         */
        user_agent: string;
        /**
         * The User Agent used by #ClutterGstPlayback with network protocols.
         */
        userAgent: string;

        // Constructors of ClutterGst-3.0.Playback

        static ['new'](): Playback;

        // Owm methods of ClutterGst-3.0.Playback

        /**
         * Get the current audio stream. The number returned in the index of the
         * audio stream playing in the list returned by
         * clutter_gst_playback_get_audio_streams().
         * @returns the index of the current audio stream, -1 if the media has no audio stream
         */
        get_audio_stream(): number;
        /**
         * Get the list of audio streams of the current media.
         * @returns a list of strings describing the available audio streams
         */
        get_audio_streams(): string[];
        /**
         * Retrieves the buffer duration when buffering network streams.
         * @returns The buffer duration
         */
        get_buffer_duration(): number;
        /**
         * Retrieves the amount of the stream that is buffered.
         * @returns the fill level, between 0.0 and 1.0
         */
        get_buffer_fill(): number;
        /**
         * Retrieves the buffer size when buffering network streams.
         * @returns The buffer size
         */
        get_buffer_size(): number;
        get_buffering_mode(): BufferingMode;
        /**
         * Retrieves the duration of the media stream that `self` represents.
         * @returns the duration of the media stream, in seconds
         */
        get_duration(): number;
        /**
         * Whether the player is seeking.
         * @returns TRUE if the player is seeking, FALSE otherwise.
         */
        get_in_seek(): boolean;
        /**
         * Retrieves the position in the media stream that `self` represents.
         * @returns the position in the media stream, in seconds
         */
        get_position(): number;
        /**
         * Retrieves the playback progress of `self`.
         * @returns the playback progress, between 0.0 and 1.0
         */
        get_progress(): number;
        /**
         * Get the current value of the seek-flags property.
         * @returns a combination of #ClutterGstSeekFlags
         */
        get_seek_flags(): SeekFlags;
        /**
         * Retrieves the font name currently used.
         * @returns a string containing the font name. Use g_free()   to free the returned string
         */
        get_subtitle_font_name(): string;
        /**
         * Get the current subtitles track. The number returned is the index of the
         * subtiles track in the list returned by
         * clutter_gst_playback_get_subtitle_tracks().
         * @returns the index of the current subtitlest track, -1 if the media has no subtitles track or if the subtitles have been turned off
         */
        get_subtitle_track(): number;
        /**
         * Get the list of subtitles tracks of the current media.
         * @returns a list of strings describing the available subtitles tracks
         */
        get_subtitle_tracks(): string[];
        /**
         * Retrieves the URI of the subtitle file in use.
         * @returns the URI of the subtitle file. Use g_free()   to free the returned string
         */
        get_subtitle_uri(): string;
        /**
         * Retrieves the URI from `self`.
         * @returns the URI of the media stream. Use g_free()   to free the returned string
         */
        get_uri(): string;
        /**
         * Retrieves the user agent used when streaming.
         * @returns the user agent used. The returned string has to be freed with g_free()
         */
        get_user_agent(): string;
        /**
         * Whether the player is using a live media.
         * @returns TRUE if the player is using a live media, FALSE otherwise.
         */
        is_live_media(): boolean;
        /**
         * Set the audio stream to play. `index_` is the index of the stream
         * in the list returned by clutter_gst_playback_get_audio_streams().
         * @param index_ the index of the audio stream
         */
        set_audio_stream(index_: number): void;
        /**
         * Sets the buffer duration to be used when buffering network streams.
         * @param duration The new duration
         */
        set_buffer_duration(duration: number): void;
        /**
         * Sets the buffer size to be used when buffering network streams.
         * @param size The new size
         */
        set_buffer_size(size: number): void;
        set_buffering_mode(mode: BufferingMode): void;
        /**
         * Sets the source of `self` using a file path.
         * @param filename A filename
         */
        set_filename(filename: string): void;
        /**
         * Sets the playback progress of `self`. The `progress` is
         * a normalized value between 0.0 (begin) and 1.0 (end).
         * @param progress the progress of the playback, between 0.0 and 1.0
         */
        set_progress(progress: number): void;
        /**
         * Seeking can be done with several trade-offs. Clutter-gst defaults
         * to %CLUTTER_GST_SEEK_FLAG_NONE.
         * @param flags a combination of #ClutterGstSeekFlags
         */
        set_seek_flags(flags: SeekFlags): void;
        /**
         * Sets the font used by the subtitle renderer. The `font_name` string must be
         * either %NULL, which means that the default font name of the underlying
         * implementation will be used; or must follow the grammar recognized by
         * pango_font_description_from_string() like:
         *
         *
         * ```
         *   clutter_gst_playback_set_subtitle_font_name (player, "Sans 24pt");
         * ```
         *
         * @param font_name a font name, or %NULL to set the default font name
         */
        set_subtitle_font_name(font_name: string): void;
        /**
         * Set the subtitles track to play. `index_` is the index of the stream
         * in the list returned by clutter_gst_playback_get_subtitle_tracks().
         *
         * If `index_` is -1, the subtitles are turned off.
         * @param index_ the index of the subtitles track
         */
        set_subtitle_track(index_: number): void;
        /**
         * Sets the location of a subtitle file to display while playing `self`.
         * @param uri the URI of a subtitle file
         */
        set_subtitle_uri(uri: string): void;
        /**
         * Sets the URI of `self` to `uri`.
         * @param uri the URI of the media stream
         */
        set_uri(uri: string): void;
        /**
         * Sets the user agent to use when streaming.
         *
         * When streaming content, you might want to set a custom user agent, eg. to
         * promote your software, make it appear in statistics or because the server
         * requires a special user agent you want to impersonate.
         * @param user_agent the user agent
         */
        set_user_agent(user_agent: string): void;
    }

    module VideoSink {
        // Signal callback interfaces

        interface NewFrame {
            (): void;
        }

        interface NewOverlays {
            (): void;
        }

        interface PipelineReady {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * The #ClutterGstVideoSink structure contains only private data and
     * should be accessed using the provided API.
     */
    class VideoSink extends GstVideo.VideoSink {
        // Own properties of ClutterGst-3.0.VideoSink

        update_priority: number;
        updatePriority: number;

        // Constructors of ClutterGst-3.0.VideoSink

        static ['new'](): VideoSink;

        // Owm methods of ClutterGst-3.0.VideoSink

        /**
         * Returns a #ClutterGstFrame object suitable to render the current
         * frame of the given video sink. An application is free to make a
         * copy of this pipeline and modify it for custom rendering.
         * @returns A #ClutterGstFrame or NULL if there   isn't a frame to be displayed yet.
         */
        get_frame(): Frame;
        get_overlays(): Overlays;
        /**
         * Returns whether the pipeline is ready and so
         * clutter_gst_video_sink_get_pipeline() and
         * clutter_gst_video_sink_setup_pipeline() can be called without causing error.
         *
         * Note: Normally an application will wait until the
         * #ClutterGstVideoSink::pipeline-ready signal is emitted instead of
         * polling the ready status with this api, but sometimes when a sink
         * is passed between components that didn't have an opportunity to
         * connect a signal handler this can be useful.
         * @returns %TRUE if the sink is ready, else %FALSE
         */
        is_ready(): boolean;
    }

    /**
     * Base class for #ClutterGstAspectratio.
     */
    class AspectratioClass {}

    class AspectratioPrivate {}

    /**
     * Bounding box of an area in a video texture or actor's allocation.
     * Coordinates are usually expressed in the [0, 1] interval.
     */
    class Box {
        // Own fields of ClutterGst-3.0.Box

        x1: number;
        y1: number;
        x2: number;
        y2: number;

        // Constructors of ClutterGst-3.0.Box

        constructor(
            properties?: Partial<{
                x1: number;
                y1: number;
                x2: number;
                y2: number;
            }>,
        );

        // Owm methods of ClutterGst-3.0.Box

        /**
         * Retrieves the height of the `box`
         * @returns the height of the box
         */
        get_height(): number;
        /**
         * Retrieves the width of the `box`
         * @returns the width of the box
         */
        get_width(): number;
    }

    /**
     * Base class for #ClutterGstCamera.
     */
    class CameraClass {}

    /**
     * Base class for #ClutterGstCameraDevice.
     */
    class CameraDeviceClass {}

    class CameraDevicePrivate {}

    /**
     * Base class for #ClutterGstCamera.
     */
    class CameraManagerClass {}

    class CameraManagerPrivate {}

    class CameraPrivate {}

    /**
     * The #ClutterGstContentClass structure contains only private data
     * and should be accessed using the provided API
     */
    class ContentClass {}

    class ContentPrivate {}

    /**
     * Base class for #ClutterGstCrop.
     */
    class CropClass {}

    class CropPrivate {}

    /**
     * Represents a frame outputted by the #ClutterGstVideoSink.
     */
    class Frame {
        // Own fields of ClutterGst-3.0.Frame

        resolution: VideoResolution;

        // Constructors of ClutterGst-3.0.Frame

        constructor(
            properties?: Partial<{
                resolution: VideoResolution;
                pipeline: unknown;
            }>,
        );
    }

    /**
     * Represents a video overlay outputted by the #ClutterGstVideoSink.
     */
    class Overlay {
        // Own fields of ClutterGst-3.0.Overlay

        position: Box;

        // Constructors of ClutterGst-3.0.Overlay

        constructor(
            properties?: Partial<{
                position: Box;
                pipeline: unknown;
            }>,
        );
    }

    class Overlays {
        // Own fields of ClutterGst-3.0.Overlays

        overlays: any[];

        // Constructors of ClutterGst-3.0.Overlays

        constructor(
            properties?: Partial<{
                overlays: any[];
            }>,
        );
    }

    /**
     * Base class for #ClutterGstPlayback.
     */
    class PlaybackClass {}

    class PlaybackPrivate {}

    /**
     * Interface vtable for #ClutterGstPlayer implementations
     */
    class PlayerIface {}

    class PlayerIfacePrivate {}

    /**
     * A video resolution.
     */
    class VideoResolution {
        // Own fields of ClutterGst-3.0.VideoResolution

        width: number;
        height: number;
        par_n: number;
        par_d: number;

        // Constructors of ClutterGst-3.0.VideoResolution

        constructor(
            properties?: Partial<{
                width: number;
                height: number;
                par_n: number;
                par_d: number;
            }>,
        );
    }

    class VideoSinkClass {}

    class VideoSinkPrivate {}

    interface Player {
        // Own properties of ClutterGst-3.0.Player

        /**
         * The volume of the audio, as a normalized value between
         * 0.0 and 1.0.
         */
        audio_volume: number;
        /**
         * The volume of the audio, as a normalized value between
         * 0.0 and 1.0.
         */
        audioVolume: number;
        /**
         * Whether the #ClutterGstPlayer is in idle mode.
         */
        readonly idle: boolean;
        /**
         * Whether the #ClutterGstPlayer actor is playing.
         */
        playing: boolean;

        // Owm methods of ClutterGst-3.0.Player

        /**
         * Retrieves the playback volume of `self`.
         * @returns The playback volume between 0.0 and 1.0
         */
        get_audio_volume(): number;
        /**
         * Retrieves the #ClutterGstFrame of the last frame produced by `self`.
         * @returns the #ClutterGstFrame of the last frame.
         */
        get_frame(): Frame;
        /**
         * Get the idle state of the pipeline.
         * @returns TRUE if the pipline is in idle mode, FALSE otherwise.
         */
        get_idle(): boolean;
        /**
         * Retrieves the #GstPipeline used by the `self,` for direct use with
         * GStreamer API.
         * @returns the #GstPipeline element used by the player
         */
        get_pipeline(): Gst.Element;
        /**
         * Retrieves the playing status of `self`.
         * @returns %TRUE if playing, %FALSE if stopped.
         */
        get_playing(): boolean;
        /**
         * Retrieves the #ClutterGstVideoSink used by the `self`.
         * @returns the #ClutterGstVideoSink element used by the player
         */
        get_video_sink(): VideoSink;
        /**
         * Sets the playback volume of `self` to `volume`.
         * @param volume the volume as a double between 0.0 and 1.0
         */
        set_audio_volume(volume: number): void;
        /**
         * Starts or stops playing of `self`.
         *
         * The implementation might be asynchronous, so the way to know whether
         * the actual playing state of the `self` is to use the #GObject::notify
         * signal on the #ClutterGstPlayer:playing property and then retrieve the
         * current state with clutter_gst_player_get_playing(). ClutterGstVideoActor
         * in clutter-gst is an example of such an asynchronous implementation.
         * @param playing %TRUE to start playing
         */
        set_playing(playing: boolean): void;

        // Own virtual methods of ClutterGst-3.0.Player

        vfunc_eos(): void;
        vfunc_error(error: GLib.Error): void;
        /**
         * Retrieves the playback volume of `self`.
         */
        vfunc_get_audio_volume(): number;
        /**
         * Retrieves the #ClutterGstFrame of the last frame produced by `self`.
         */
        vfunc_get_frame(): Frame;
        /**
         * Get the idle state of the pipeline.
         */
        vfunc_get_idle(): boolean;
        /**
         * Retrieves the #GstPipeline used by the `self,` for direct use with
         * GStreamer API.
         */
        vfunc_get_pipeline(): Gst.Element;
        /**
         * Retrieves the playing status of `self`.
         */
        vfunc_get_playing(): boolean;
        /**
         * Retrieves the #ClutterGstVideoSink used by the `self`.
         */
        vfunc_get_video_sink(): VideoSink;
        vfunc_new_frame(frame: Frame): void;
        vfunc_ready(): void;
        /**
         * Sets the playback volume of `self` to `volume`.
         * @param volume the volume as a double between 0.0 and 1.0
         */
        vfunc_set_audio_volume(volume: number): void;
        /**
         * Starts or stops playing of `self`.
         *
         * The implementation might be asynchronous, so the way to know whether
         * the actual playing state of the `self` is to use the #GObject::notify
         * signal on the #ClutterGstPlayer:playing property and then retrieve the
         * current state with clutter_gst_player_get_playing(). ClutterGstVideoActor
         * in clutter-gst is an example of such an asynchronous implementation.
         * @param playing %TRUE to start playing
         */
        vfunc_set_playing(playing: boolean): void;
        vfunc_size_change(width: number, height: number): void;
    }

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

export default ClutterGst;
// END
